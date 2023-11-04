package com.nh.escm.pt.usrinf.service;

/**
 * <PRE>  
 * 	Join Service
 * </PRE>
 * @author  :김복궁
 * @version : 1.0 
 * @since : 2015.06.04
 * @modified
 * @modifier 
 */

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.pt.usrinf.dao.MbEntDAO;
import com.nh.escm.pt.usrinf.dao.MbInfChgDAO;
import com.nh.escm.pt.usrinf.vo.BranchBznoVO;
import com.nh.escm.pt.usrinf.vo.MbEntVO;
import com.nh.escm.pt.usrinf.vo.PayVO;
import com.nh.escm.pt.usrinf.vo.SvcVO;


@Service
public class MbEntService extends AbstractService {

	@Autowired
	private MbEntDAO mbEntDAO;
	@Autowired
	private SendService sendService;
	@Autowired
	private MbInfChgDAO mbInfChgDAO;

	/** 거래처코드 조회*/
	public List<Map<String, Object>> retriveNaTrplCList(String BZ01,String BZ02, String BZ03,String USR_TPC) {
		try {			
			return mbEntDAO.retriveNaTrplCList(BZ01,BZ02,BZ03,USR_TPC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/**거래처코드에 해당하는 회사정보 조회*/
	public Map<String, Object> retrieveOfficeInfo(String BZNO1, String BZNO2, String BZNO3, String NA_TRPL_C, String USR_TPC) {
		try {			
			return mbEntDAO.retrieveOfficeInfo(BZNO1,BZNO2,BZNO3, NA_TRPL_C,USR_TPC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**거래처코드에 해당하는 권한 정보 조회*/
	public List<Map<String, Object>> retrieveNaTrplCAuthLst(String NA_TRPL_C) {
		try {			
			return mbEntDAO.retrieveNaTrplCAuthLst(NA_TRPL_C);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	/**회원ID 가입여부 조회*/
	public int checkMbIdDup(String MB_ID ) {
		try {			
			return	mbEntDAO.checkMbIdDup(MB_ID );
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	/**회원ID 가입여부 조회*/
	public int checkMbIdDup(String MB_ID ,String  USRTPC) {
		try {			
			return	mbEntDAO.checkMbIdDup(MB_ID ,USRTPC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}


	/**거래처코드에 해당하는 가입서비스 정보 조회*/
	public List<Map<String, Object>> retriveEntSvcList(String NA_TRPL_C) {
		try {			
			return	mbEntDAO.retriveEntSvcList(NA_TRPL_C);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	/**거래처코드에 해당하는 가입서비스 master정보 조회*/
	public List<Map<String, Object>> retriveEntSvcMstList(String NA_TRPL_C) {
		try {			
			return	mbEntDAO.retriveEntSvcMstList(NA_TRPL_C);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**거래처코드에 해당하는 납부 정보 조회*/
	public Map<String, Object> retrievePayInfo(String NA_TRPL_C) {
		try {			
			return	mbEntDAO.retrievePayInfo(NA_TRPL_C);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**거래처코드에 해당하는 납부 정보 조회*/
	public Map<String, Object> retrievePayInfoMst(String NA_TRPL_C) {
		try {			
			return	mbEntDAO.retrievePayInfoMst(NA_TRPL_C);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**거래처코드에 해당하는 가입처리중인 권한 정보 조회*/
	public Map<String, Object> retrieveSvcAuthIng(String NA_TRPL_C) {
		return	mbEntDAO.retrieveSvcAuthIng(NA_TRPL_C);
	}

	/** * 회원등록
	 * @param 회원정보, 서비스정보, 서비스권한정보, 납부정보 ,인감정보
	 * 1.회원기본정보를 등록한다.
	 * 2.서비스권한 정보가 변경되었을 경우, 서비스 정보를 HST테이블에  등록한다.
	 * 3.서비스정보가 변경이 되었을 경우, 서비스 정보를 HST테이블에  등록한다.
	 * */	
	public void insertMB(MbEntVO office, MbEntVO mb, List<SvcVO> svcInfoLst, List<SvcVO> svcAuthLst ,List<PayVO> payInfoLst,
			String blChgYn, String svcChgYn, String authChgYn, List<BranchBznoVO> branchBznoLst){ 
		try {

			String currentDTM = DateUtil.getCurrentDate(DateUtil.DATEFORM);
			/*****************************************************************
			 * 사용자정보세팅
			 * 	가입진행상태, 본지사승인여부, 빌링정보변경여부, 회원휴대전화,회원Email,비밀번호 최종변경일
			 *
			 *1.상세 참고 로직
			 *	- 협력업체/세금계산서전용인 경우/전자계약전용, 가입진행상태는 0, 본부/사업장 회원일 경우 1
			 * 	- 협력업체가 본사인경우 본사승인여부 Y, 자사인경우 본사승인여부 N
			 * 	- 빌링정보 변경이 있는 경우, 빌링정보변경 여부 세팅
			 ****************************************************************/
			if("01".equals(mb.getUSR_TPC())  ||  "04".equals(mb.getUSR_TPC()) ||  "05".equals(mb.getUSR_TPC())  ||  "81".equals(mb.getUSR_TPC())) {	// 협력업체(01), 세금계산서 전용(04), 전자계약전용(05), 농협몰(81)
				mb.setENT_PRG_STSC("0"); 
				if("1".equals(office.getNA_MBCO_DSC())){		// 본사(본소)
					mb.setHOFF_APV_YN("Y");
				}else if("2".equals(office.getNA_MBCO_DSC())){	// 지사(지소)
					if ("21".equals(office.getUSR_SYS_C()) && "2".equals(office.getNAAC_DSC())) {	// 가공장(21), 농축협(2)
						mb.setHOFF_APV_YN("Y");
					} else {
						mb.setHOFF_APV_YN("N");
					}
				}
				mb.setBL_CHG_YN(blChgYn);				
				mb.setREQ_DT(DateUtil.getCurrentDate("yyyyMMdd"));

			}else{
				mb.setENT_PRG_STSC("1");
				mb.setHOFF_APV_YN("Y");
				mb.setBL_CHG_YN("N");

			}

			mb.setAUTH_CHG_YN(authChgYn);
			mb.setSVC_CHG_YN(svcChgYn);


			StringBuffer sb = new StringBuffer();
			sb.append(mb.getHP1()).append("-").append(mb.getHP2()).append("-").append(mb.getHP3());
			mb.setUSR_MPNO(sb.toString());			
			sb = new StringBuffer();
			sb.append(mb.getUSR_EMAIL01()).append("@").append(mb.getUSR_EMAIL02());
			mb.setUSR_EMAIL(sb.toString());
			mb.setPW_LSRG_DT(DateUtil.getCurrentDate("yyyyMMdd"));


			/*****************************************************************
			 * 회사정보세팅 
			 * 	업체유형, 회사대표번호, 거래처코드, 사업자번호
			 *****************************************************************/
			mb.setCOMP_TPC(office.getCOMP_TPC());
			sb = new StringBuffer();
			if("1".equals(office.getNA_MBCO_DSC())){
				sb.append(office.getBZNO1()).append(office.getBZNO2()).append(office.getBZNO3());
			}else{
				sb.append(mb.getBZNO1()).append(mb.getBZNO2()).append(mb.getBZNO3());
				
				
			}
			mb.setBZNO(sb.toString());
			
			/*sb = new StringBuffer();
			sb.append(office.getTEL1()).append("-").append(office.getTEL2()).append("-").append(office.getTEL3());
			mb.setUSR_TELNO(sb.toString());	*/		
			
			sb = new StringBuffer();			
			mb.setNA_TRPL_C(office.getNA_TRPL_C());

			/**회원기본정보 테이블 insert*/
			mbEntDAO.insertPtUsrInf(mb);

			/**푸시알림관리 테이블 insert*/
			mbEntDAO.insertMbPushAncAmn(mb.getMB_ID() ,"1");


			/*****************************************************************
			 * 1.사용자권한 등록 
			 * 	공긍업체 :사용자권한이 변경이 되면 사용자권한HST테이블에 데이터를 등록한다.
			 * 	본부/사업장 : 사용자권한이 변경이 되면 사용자권한MASTER테이블에 데이터를 등록한다.
			 * 2.가입서비스등록
			 * 	공긍업체 :가입서비스가 변경이 되면 가입서비스HST테이블에 데이터를 등록한다.
			 * 	본부/사업장 : 가입서비스가 변경이 되면 가입서비스MASTER테이블에 데이터를 등록한다.
			 * 3.납부정보
			 * 	공긍업체 : 납부정보가 변경이 되면 납부정보 HST테이블에 데이터를 등록한다.
			 * 	본부/사업장 : none
			 *****************************************************************/

			if("01".equals(mb.getUSR_TPC())  || "04".equals(mb.getUSR_TPC())  || "05".equals(mb.getUSR_TPC()) || "81".equals(mb.getUSR_TPC())){
				/**권한변경시*/
				if(svcAuthLst != null && "Y".equals(authChgYn)){
					for(SvcVO svcAuth : svcAuthLst) {
						mbEntDAO.insertPtUsrAuthHst(mb.getMB_ID(), svcAuth.getSVC_ID(),currentDTM, mb.getENT_PRG_STSC(), mb.getNA_TRPL_C(), svcAuth.getRQ_DSC());
					}
				}
				/**가입서비스변경시*/
				if(svcInfoLst != null && "Y".equals(svcChgYn)){
					for( SvcVO svcInfo : svcInfoLst){
						mbEntDAO.insertPtSvcEntHst(mb.getNA_TRPL_C(), svcInfo.getSVC_ID(),currentDTM, mb.getENT_PRG_STSC() , mb.getMB_ID(),svcInfo.getRQ_DSC());
					}
				}


				/**납부정보변경시*/
				if("Y".equals(blChgYn)){
					if(payInfoLst != null) {
						PayVO pay = payInfoLst.get(0);
						
						if ("3".equals(pay.getSTL_METH_DSC())) { // 가상계좌인 경우, 자동이체용 변수값 제거
							pay.setHOP_DRW_DD("");	// 희망출금일
							pay.setDPRNM("");		// 예금주
							pay.setPSCRP_DSC("");	// 개인/법인
							pay.setDPR_NO("");		// 계좌 인증번호
						}
						
						mbEntDAO.insertPtPayInfHst(mb.getMB_ID() , mb.getNA_TRPL_C(), currentDTM, mb.getENT_PRG_STSC(), pay);
						
						/*
						 * @TODO
						 * getUSR_TPC 가 04 이고,
						 * 가상계좌 STL_METH_DSC = 3 선택시,전자서명 데이터는 저장안함.
						 * 
						 */
						
						logger.info("mb.getUSR_TPC() ==="+mb.getUSR_TPC());
						logger.info("pay.getSTL_METH_DSC() ==="+pay.getSTL_METH_DSC()+",3이면 가상계좌");
						
						if("04".equals(mb.getUSR_TPC())){ 
							if(!"3".equals(pay.getSTL_METH_DSC())){
								mbEntDAO.insertPtPayInfElsg(mb.getMB_ID(), mb.getNA_TRPL_C(), currentDTM, mb.getENT_PRG_STSC(), pay);
							}
						}else{
							mbEntDAO.insertPtPayInfElsg(mb.getMB_ID(), mb.getNA_TRPL_C(), currentDTM, mb.getENT_PRG_STSC(), pay);
						}
						
						
						logger.info("회원 계좌번호 ["+pay.getACNO()+"] 회원ID ["+mb.getMB_ID()+"] 거래처코드["+mb.getNA_TRPL_C()+"]");
						/**통장 사본파일 처리*/
						if(pay.getBB_FL_TMPNM() != null && !"".equals(pay.getBB_FL_TMPNM())){
							logger.info("통장사본 ["+pay.getBB_FL_TMPNM()+"]");
							this.makeFile(mb.getNA_TRPL_C(), pay.getBB_FL_TMPNM());
						}else{
							logger.info("통장 사본이 첨부되지 않았습니다.");
						}
						/**사업자등록증 사본파일 처리*/
						if(pay.getBZ_RGWRRT_FL_TMPNM() != null && !"".equals(pay.getBZ_RGWRRT_FL_TMPNM())){
							logger.info("사업자등록증사본 ["+pay.getBZ_RGWRRT_FL_TMPNM()+"]");
							this.makeFile(mb.getNA_TRPL_C(), pay.getBZ_RGWRRT_FL_TMPNM());
						}else{
							logger.info("사업자등록증 사본이 첨부되지 않았습니다.");
						}
					}
					
					/** 청구정보  */
					if(branchBznoLst != null) {
						BranchBznoVO branchBzno = branchBznoLst.get(0);
						branchBzno.setNA_TRPL_C(mb.getNA_TRPL_C());
						branchBzno.setMB_ID(mb.getMB_ID());
						
						/** 청구정보 등록 */
						mbInfChgDAO.mergeBranchBzno(branchBzno);
						/** 이력 */
						mbInfChgDAO.insertBranchBznoHst(branchBzno, currentDTM);
					}
				}
			}
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		} 
	}

	/**파일처리 서비스 
	 * @throws IOException */
	public void makeFile(String gln, String tempFileName) throws IOException {
		logger.info("파일명 : " + tempFileName);
		String realPath = Configurer.getProperty("file.real.cmpy.path");
		File tempPath = FileUtils.getFile(Configurer.getProperty("file.temp.path") + File.separator + tempFileName);
		// /real/cmpy/GLN(6자리)/GLN/pay/
		File destFile = new File(realPath + File.separator + gln.substring(0, 6) + File.separator + gln + File.separator + "pay" + File.separator + tempFileName);

		if (tempPath.exists()) {
			logger.info("파일이 존해하므로 realPath로 이동합니다.");
			FileUtils.moveFile(tempPath, destFile);
		}
	}

	/**SMS발송*/
	public int sendSms(String hp, String randomNumber, String usrNm) {
		try {			
			return sendService.sendSms(hp, randomNumber,usrNm);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	/**바이어 회사조회
	 * @param MB_ID */
	public Map<String, Object> retrieveBuyerOfficeInfo(String BZNO1,
			String BZNO2, String BZNO3, String NA_TRPL_C, String MB_ID) {		
		try {			
			return mbEntDAO.retrieveBuyerOfficeInfo(BZNO1,BZNO2,BZNO3, NA_TRPL_C , MB_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**거래처 코드에 해당하는 세금계산서 권한 수 조회*/
	public int retrieveAuthCnt(String NA_TRPL_C, String USR_AUTH_DSC) {
		try {			
			return mbEntDAO.retrieveAuthCnt(NA_TRPL_C,USR_AUTH_DSC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**본부, 사업장 회원가입 	
	 * @param officeInfo
	 * @param userInfo
	 * @param svcInfoLst
	 * @param svcAuthLst
	 */
	public void insertMBNot01(MbEntVO officeInfo, MbEntVO userInfo, List<SvcVO> svcAuthLst) {

		/**1.본부 및 사업장은 
		 * - 가입진행상태:  1[완료]
		 * - 거래처코드 세팅
		 * - 비밀번호변경일 : 등록일
		 * */		
		userInfo.setENT_PRG_STSC("1");
		userInfo.setNA_TRPL_C(officeInfo.getNA_TRPL_C());		
		userInfo.setPW_LSRG_DT(DateUtil.getCurrentDate("yyyyMMdd"));		

		StringBuffer sb = new StringBuffer();
		sb.append(userInfo.getHP1()).append("-").append(userInfo.getHP2()).append("-").append(userInfo.getHP3());
		userInfo.setUSR_MPNO(sb.toString());			
		sb = new StringBuffer();
		sb.append(userInfo.getUSR_EMAIL01()).append("@").append(userInfo.getUSR_EMAIL02());
		userInfo.setUSR_EMAIL(sb.toString());
		sb = new StringBuffer();
		sb.append(officeInfo.getBZNO1()).append(officeInfo.getBZNO2()).append(officeInfo.getBZNO3());			
		userInfo.setBZNO(sb.toString());
		try {
			if (userInfo.getMP1() != null && userInfo.getMP2() != null && userInfo.getMP3() != null) {
				sb = new StringBuffer();
				sb.append(userInfo.getMP1()).append(userInfo.getMP2()).append(userInfo.getMP3());
				userInfo.setUSR_TELNO(sb.toString());
			} else if (userInfo.getMP1() == null && userInfo.getMP2() == null && userInfo.getMP3() == null) {
				userInfo.setUSR_TELNO(null);
			}

			mbEntDAO.insertPtUsrInf(userInfo);

			/**1.가입서비스 등록
			 * - 해당거래처코드가 가입서비스 테이블에 있을 경우 등록하지 않으며 없을 경우, 10[기본서비스]만 등록한다.
			 * */
			this.savePtSvcEntAmn(userInfo.getNA_TRPL_C(), userInfo.getMB_ID());


			/**2.권한 등록
			 * 입력받은 권한을 delete/insert한다.
			 * */
			if (svcAuthLst != null) {
				this.savePtUserAuth(svcAuthLst, userInfo);
			}
			/**3.사업장일 경우
			 * - MSGR_USER테이블에 데이터를 insert한다.
			 * */


			//mbEntDAO.isExistMbId(userInfo.getMB_ID() ) ;


			logger.debug("isExistMbId = >> ");
			if ("03".equals(userInfo.getUSR_TPC()) && !this.isExistMbId(userInfo.getMB_ID())) {
				mbEntDAO.insertMsgrUser(userInfo.getMB_ID(), userInfo.getUSR_NM(), userInfo.getUSR_MPNO(), userInfo.getUSR_EMAIL());
				logger.debug("isExistMbId = >> false ");
			}
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}

	}

	/**가입서비스 등록 
	 * 본부 및 사업장일 경우 , 가입서비스 테이블에 해당 거래처코드 여부 확인
	 * 없을 경우 기본서비스를 등록한다.
	 * */
	public void savePtSvcEntAmn(String NA_TRPL_C, String MB_ID) {
		if(!mbEntDAO.existBasicSvc(NA_TRPL_C)){
			mbEntDAO.insertPtSvcEntAmn(NA_TRPL_C, "10", MB_ID);	
		}		
	}


	/**사용자권한 등록 
	 * 입력받은 서비스를 delete/insert한다.
	 * */
	private void savePtUserAuth(List<SvcVO> svcAuthLst, MbEntVO userInfo) {
		ArrayList<String> al = new ArrayList<String>();
		for(SvcVO delAuth : svcAuthLst){
			al.add(delAuth.getSVC_ID());
		}

		SvcVO auth =new SvcVO();		
		auth.setMB_ID(userInfo.getMB_ID());
		auth.setStr(al);
		mbEntDAO.deletePtUsrAuth(auth);	

		for(SvcVO insAuth : svcAuthLst){			
			mbEntDAO.insertPtUsrAuthNew(userInfo.getMB_ID(), insAuth.getSVC_ID());
		}
	}
	/**사용자권한 확인 
	 * 입력받은 거래처 코드와 권한으로 조회되는 회원이 존재하는지 확인한다.
	 * */
	public boolean isExistBuillingAuth(String NA_TRPL_C, String USR_AUTH_DSC) {
		return mbEntDAO.isExistBuillingAuth(NA_TRPL_C, USR_AUTH_DSC);
	}
	
	/**경제통합사업장회원 확인
	 * 경제통합사업장관리테이블에서 회원이 존재하는지 확인한다.
	 * */
	public boolean isExistNaBzPlAmn(String MB_ID, String NA_TRPL_C) {
		return mbEntDAO.isExistNaBzPlAmn(MB_ID, NA_TRPL_C);
	}
	
	/**사업장 MSGR_USER 회원 확인 
	 * MSGR_USER 테이블테이블에서 회원이 존재하는지 확인한다.
	 * */
	
	public boolean isExistMbId(String MB_ID) {
		return mbEntDAO.isExistMbId(MB_ID);
	}
	/**
	 * 가상계좌발급 일련번호를 가져온다.
	 * */
	
	public String selectPayRepSeq() {
		return mbEntDAO.selectPayRepSeq();
	}
	/**
	 * 가상계좌발급 일련번호를 가져온다.
	 * */
	
	public String selectPayRepSeq(String naTrplC) {
		return mbEntDAO.selectPayRepSeq(naTrplC);
	}
	/**
	 * 가상계좌발급 이력을 저장한다.
	 * */
	
	public void insertPayReqHis(String naTrplC, String payRepSeq) {
		mbEntDAO.insertPayReqHis(naTrplC, payRepSeq);
	}
	/*휴면상태에서 완료로  업데이트 (ENT_PRG_STSC : 6-> 1)*/
	public int updateReststscout(MbEntVO restmb) {
		return mbEntDAO.updateReststscout(restmb);
	}
	/*상태 업데이트시 history 입력*/
	public int insertUserAuthHst(MbEntVO restmb) {
		try{
			return mbEntDAO.insertUserAuthHst(restmb);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
}
