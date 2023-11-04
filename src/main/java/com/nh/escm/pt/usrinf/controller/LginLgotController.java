package com.nh.escm.pt.usrinf.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.session.UserKeyGenerator;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.api.escm.usrinfo.UserInfoApiCaller;
import com.nh.escm.pt.usrinf.service.LginLgotService;
import com.nh.escm.pt.usrinf.service.PwChgService;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.SessionInfo;

@Controller
public class LginLgotController extends AbstractController {
	
	@Autowired
	private LginLgotService loginService;
	
	@Autowired
	private PwChgService pwChgService;
	
	private UserInfoApiCaller userInfoApiCaller;
	
	public LginLgotController() {
		this.userInfoApiCaller = new UserInfoApiCaller();
	}

	
//	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/update_PT_USR_INF_in_login")
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/getUserType")
	public void existUser(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String mbId = requestHelper.getParameter("MB_ID");
			String mbPw = requestHelper.getParameter("MB_PW");
			String TRANS_YN = requestHelper.getParameter("TRANS_YN");
			
			// 잠김여부 (0: 초기비밀번호, 1: 사용자변경, 2: 잠김)
			if ("2".equals(loginService.isLockUser(mbId))) {
				sendData(response, new PlatformData(), -5, "error.message.2000.maxLoginTry");
			} else {
				if (loginService.isExistUser(mbId, mbPw, TRANS_YN)) {
					loginService.updateLoginTryCount(mbId, "Y");	// 로그인 성공여부(성공: Y, 실패: N)
					
					Map<String, Object> user = loginService.retrieveUserType(mbId, mbPw, TRANS_YN);
					
					String usrTpc = (String) user.get("USR_TPC");
					
					// 사업장 또는 본부 일 경우 인터페이스 통신실시
					if ("02".equals(usrTpc) || "03".equals(usrTpc)) {
						try {
							Map<String,Object>usr_info = userInfoApiCaller.OM098Calling(mbId);
							String na_trpl_c = (String) usr_info.get("repNaBzplc");
							if(usr_info.get("tgrmRspC").equals("0")) {
								if(!loginService.update_PT_USR_INF_in_login(usr_info)) {
//									sendData(response, new PlatformData(), -2, "error.message.2001.badCredentials");
									logger.warn(mbId+" couldn't get information from 농협 API");
								}
								/*if PT_SVC_ENT_AMN doesn't have value in NA_TRPL_C(national trading place code),
								 insert that it took from api*/
								System.out.println("na_trpl_c"+" : "+na_trpl_c);
								if(!loginService.is_exist_NA_TRPL_C(na_trpl_c))
								{
									/*add row NA_TRPL_C from with IF data*/
									loginService.add_row_in_PT_SVC_ENT_AMN(usr_info);
								}
								else
								{
									logger.info(mbId+" failed to insert NA_TRPL_C in PT_SVC_ENT_AMN");
								}
							}else {
								logger.info(mbId+" doesn't exist in 농협 API system.");
								sendData(response, new PlatformData(), -3, "FIRED");
								return;
							}
						}catch(Exception e){
							logger.error(e.getMessage(), e);
//							sendData(response, new PlatformData(), -1, "error.message.server.exception");
						}
					}
					
					logger.info("user getUserType [" + usrTpc + "]");
					
					DataSetHelper dsHelper = new DataSetHelper("ds_USR_TPC");
					dsHelper.addColumns(SessionInfo.class);
					dsHelper.setData(user);
					
					PlatformData platformData = new PlatformData();
					platformData.addDataSet(dsHelper.getDataSet());
					sendData(response, platformData);
				} else {
					loginService.updateLoginTryCount(mbId, "N");	// 로그인 성공여부(성공: Y, 실패: N)
					sendData(response, new PlatformData(), -2, "error.message.2001.badCredentials");
				}
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/retrieveSessionIs")
	public void retrieveSessionIs(HttpServletRequest request, HttpServletResponse response) {
		try {
			SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
			
			DataSetHelper dsHelper = new DataSetHelper("ds_session");
			dsHelper.addColumns(SessionBox.class);
			if (box != null) {
				dsHelper.setData(box);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 2017.03.08 
	 * admin 아이디 로그인 안되는 경우 hanaroeSCMAdmin 의  retrieveSession 참조
	 * 
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/retrieveSession")
	public void retrieveSession(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			/**
			 * 서비스 점검상태 체크(로그인 전) START (20171130)
			 *  - admin까지 차단하려면 existUser에서 처리
			 *  - 로그인 된 사용자는 각각의 RequestInterceptor에서 처리(nhvan, nhvanadmin)
			 *  - ErrorCode -9
			 */
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("bsnDsc", "ESCM");
			List<Map<String, Object>> service = loginService.retrieveBlockService(param);
			if (service != null && service.size() > 0) {
				String bckTi = (String) service.get(0).get("BLOCK_TI");
				String bckCntn = (String) service.get(0).get("BLOCK_CNTN");
				String bckSt = (String) service.get(0).get("BLOCK_ST_DTM");
				String bckEd = (String) service.get(0).get("BLOCK_ED_DTM");

				sendData(response, new PlatformData(), -9, bckTi + "||" + bckCntn + "||" + bckSt + "||" + bckEd);
				return;
			}
			/* 서비스 점검상태 체크(로그인 전) END */
			
			String mbId = requestHelper.getParameter("MB_ID");
			String mbPw = requestHelper.getParameter("MB_PW");
			String TRANS_YN = requestHelper.getParameter("TRANS_YN");
			
			/* 가입여부 확인 */
			String date = DateUtil.getCurrentDate("yyyyMMddHHmmssSSS");
			String hostIp = request.getRemoteAddr();
			
			logger.debug("TRANS_YN  =>>  " + TRANS_YN);
			
			Map<String, Object> user = loginService.retrieveUser(mbId, mbPw, TRANS_YN);
			
			if (user != null) {
				logger.info("user retrieveSession  [" + (String) user.get(SessionInfo.USR_TPC.name()) + "]");
				
				/* 세션정보 세팅 */
				SessionBox box = new SessionBox();
				
				box.setUserKey(UserKeyGenerator.genUserKey(mbId));                        // userKey
				box.setGlnCode((String) user.get(SessionInfo.NA_TRPL_C.name()));          // 거래처코드
				box.setUserID((String) user.get(SessionInfo.MB_ID.name()));               // 사용자ID
				box.setUserName((String) user.get(SessionInfo.USR_NM.name()));            // 사용자명
				box.setCommanyType((String) user.get(SessionInfo.COMP_TPC.name()));       // 회원구분
				box.setCompanyName((String) user.get(SessionInfo.CLNTNM.name()));         // 회사명
				box.setLastLoginDt(DateUtil.getCurrentDate());                            // 최종접속일자
				box.setUserType((String) user.get(SessionInfo.USR_TPC.name()));           // 사용자타입
				box.setUserCvDsc((String) user.get(SessionInfo.MB_CV_DSC.name()));        // 회원전환구분
				box.setFirstLoginYn(loginService.isFirstLoginYn(mbId));                   // 최초로그인여부
				box.setUserStatus((String) user.get(SessionInfo.ENT_PRG_STSC.name()));    // 회원가입상태
				box.setMbcoType((String) user.get(SessionInfo.NA_MBCO_DSC.name()));       // 본지사구분코드
				box.setUserAuth(loginService.retrieveUserAuthList(mbId));                 // 회원권한
				box.setPwOverTermYn(loginService.getPwOverTermYn((String) user.get(SessionInfo.PW_LSRG_DT.name()))); // 비밀번호 최종변경일
				box.setHoffApvYn((String) user.get(SessionInfo.HOFF_APV_YN.name()));      // 본사승인여부
				box.setNaUsrSysKdc((String) user.get(SessionInfo.NA_USR_SYS_KDC.name())); // 경제통합사용자시스템종류코드
				box.setSvcStatus((String) user.get(SessionInfo.SVC_STATUS.name()));       // 서비스사용가능여부
				box.setBizNumber((String) user.get(SessionInfo.BIZ_NUMBER.name()));       // 사업자번호
				box.setCHANGE_MB((String) user.get(SessionInfo.CHANGE_MB.name()));        // 미전환회원
				box.setCHANGE_ELT((String) user.get(SessionInfo.CHANGE_ELT.name()));      // 전자 계약서 변경 사항
				box.setUpGlnCode((String)user.get(SessionInfo.UP_NA_TRPL_C.name()));      // 본사 GLN코드
				box.setUserSystemCode((String)user.get(SessionInfo.USR_SYS_C.name()));    // 경제통합 시스템 구분코드
				box.setTrplDtlTpc((String)user.get(SessionInfo.TRPL_DTL_TPC.name()));	  // 거래처상세유형코드
				
				if (loginService.isWeakPw(mbId, box.getBizNumber())) {
					pwChgService.updateLockYn(mbId);	// 잠김여부 (0: 초기비밀번호, 1: 사용자변경, 2: 잠김)
					box.setWeakPwYn("Y");	// 비밀번호 취약성 여부
				} else {
					box.setWeakPwYn("N");
				}
				
				if ("01".equals(box.getUserType())) { // 협력업체인 경우
					List<Map<String, Object>> list = loginService.retrieveUserListByAuth(box.getGlnCode(), "1"); // 빌링권한 사용자
					for (Map<String, Object> vo : list) {
						box.setBillingUserID((String) vo.get("MB_ID")); // 빌링권한 사용자ID
						box.setBillingUserName((String) vo.get("USR_NM")); // 빌링권한 사용자명
						break;
					}
					box.setNoAuthMenuGroup(loginService.retrieveNoAuthMenuGroupList(mbId)); // 접근권한이 없는 메뉴그룹
				}
				
				/* 로그인 이력을 남길지 여부 */
				boolean isLoginHistory = true;
				
				if (StringUtils.isNotEmpty(TRANS_YN)) {
					isLoginHistory = false; // 관리자 전환
				} else if ("N".equals(box.getSvcStatus())) {
					isLoginHistory = false; // 이용료 미납으로 서비스중지
				} else if ("0".equals(box.getUserStatus()) || "2".equals(box.getUserStatus()) || "5".equals(box.getUserStatus())) {
					isLoginHistory = false; // 가입진행상태 (0: 진행중, 2: 가입신청거절, 5: 해지)
				} else if ("N".equals(box.getHoffApvYn())) {
					isLoginHistory = false; // 본사 미승인
				}
				
				if (isLoginHistory) {
					logger.info("|Login-History-Info|('" + mbId + "', '" + date + "', '" + hostIp + "')");
					loginService.insertLoginHistory(mbId, hostIp, date); // 로그인 이력 insert
				} else {
					logger.info("|Login-Info|('" + mbId + "', '" + date + "', '" + hostIp + "')");
				}
				
				request.getSession().setAttribute("sessionBox", box); // 세션에 저장
				request.getSession().setAttribute("TRANS_YN_KEY", TRANS_YN); // 관리자가 사용자전환으로 로그인했는지 여부 (Y: 사용자전환)
				
				DataSetHelper dsHelper = new DataSetHelper("ds_session");
				dsHelper.addColumns(SessionBox.class);
//				dsHelper.getDataSet().addColumn("NH_STS", DataTypes.STRING);
				dsHelper.setData(box);
//				dsHelper.getDataSet().set(0, "NH_STS", nhSts);
				
				PlatformData platformData = new PlatformData();
				platformData.addDataSet(dsHelper.getDataSet());
				sendData(response, platformData);
			} else {
				sendData(response, new PlatformData(), -3, "error.message.2006.noUserCIF");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/logout")
	public void logout(HttpServletRequest request, HttpServletResponse response) {
		try {
			// SessionRepository.printSessionStore();
			request.getSession().invalidate();
			// SessionRepository.printSessionStore();
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/common/createToken")
	public void createToken(HttpServletRequest request, HttpServletResponse response) {
		PlatformData platformData = new PlatformData();

		try {
			SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
			if (box != null) {
				String token = UUID.randomUUID().toString();
				box.setCorsToken(token);

				DataSet dsToken = new DataSet("ds_token");
				dsToken.addColumn("TOKEN", DataTypes.STRING);
				dsToken.newRow();
				dsToken.set(0, "TOKEN", token);

				platformData.addDataSet(dsToken);
				sendData(response, platformData);
			} else {
				sendData(response, new PlatformData(), -300, "error.message.2005.invalidSession");
			}
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
}