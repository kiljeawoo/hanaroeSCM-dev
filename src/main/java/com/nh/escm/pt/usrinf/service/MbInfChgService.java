package com.nh.escm.pt.usrinf.service;

/**
 * <PRE>  
 * 	Modification Service
 * </PRE>
 * @author  :김복궁
 * @version : 1.0 
 * @since : 2015.06.04
 * @modified
 * @modifier 
 */

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pt.usrinf.dao.MbEntDAO;
import com.nh.escm.pt.usrinf.dao.MbInfChgDAO;
import com.nh.escm.pt.usrinf.vo.BranchBznoVO;
import com.nh.escm.pt.usrinf.vo.MbInfChgVO;
import com.nh.escm.pt.usrinf.vo.PayVO;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.BasicInfo;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.BuyerInfoNames;
import com.nh.escm.pt.usrinf.vo.SvcAuth;
import com.nh.escm.pt.usrinf.vo.SvcVO;
import com.nh.escm.pt.usrinf.vo.UsrConsentVO;


@Service
public class MbInfChgService extends AbstractService {

	@Autowired
	private MbInfChgDAO mbInfChgDAO;
	
	@Autowired
	private MbEntDAO mbEntDAO;
	
	@Autowired
	private LginLgotService lginLgotService;
	
	@Autowired
	private MbEntService mbEntService;
	
	/**기본정보 조회*/
	public Map<String, Object> retrieveMB(String MB_ID) {
		try {		

			Map<String, Object> mb = mbInfChgDAO.retrieveMB(MB_ID);

			if((String)mb.get(BasicInfo.USR_MPNO.name()) != null){
				String[] hps =( (String)mb.get(BasicInfo.USR_MPNO.name()) ).split("-")  ;
				
				if( hps.length >2){ 
					mb.put(BasicInfo.USR_MPNO01.name(), hps[0]);
					mb.put(BasicInfo.USR_MPNO02.name(), hps[1]);
					mb.put(BasicInfo.USR_MPNO03.name(), hps[2]);
				}
			}			
			/**본부 및 사업장인 경우 세금계산서 권한 수 조회*/
			if(!"01".equals(mb.get(BasicInfo.USR_TPC.name()))){
				mb.put(BuyerInfoNames.TAX_AUTH_CNT.name(), mbEntService.retrieveAuthCnt((String)mb.get(BasicInfo.NA_TRPL_C.name()),"7"));
			}

			return mb;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	/**기본정보 조회*/
	public Map<String, Object> retrieveMB(String MB_PW, String MB_ID) {
		try {		
			
			Map<String, Object> mb = mbInfChgDAO.retrieveMB(MB_PW, MB_ID);
			
			if(mb != null){
				if((String)mb.get(BasicInfo.USR_MPNO.name()) != null){
					String[] hps =( (String)mb.get(BasicInfo.USR_MPNO.name()) ).split("-")  ;
					
					if( hps.length >2){ 
						mb.put(BasicInfo.USR_MPNO01.name(), hps[0]);
						mb.put(BasicInfo.USR_MPNO02.name(), hps[1]);
						mb.put(BasicInfo.USR_MPNO03.name(), hps[2]);
					}
				}			
				/**본부 및 사업장인 경우 세금계산서 권한 수 조회*/
				if(!"01".equals(mb.get(BasicInfo.USR_TPC.name()))){
					mb.put(BuyerInfoNames.TAX_AUTH_CNT.name(), mbEntService.retrieveAuthCnt((String)mb.get(BasicInfo.NA_TRPL_C.name()),"7"));
				}
			}

			return mb;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}


	/**협력업체 회원정보 수정
	 * @param mbcoType 
	 * @throws IOException */
	public void updateMBType01(String usrFitstLginYn, String usrCvDsc, MbInfChgVO basicInfo, List<SvcVO> svcInfoLst, List<SvcVO> usrAuthLst, List<PayVO> payInfoLst, String mbcoType , String entPrgStsctemp , List<BranchBznoVO> branchBznoLst) throws IOException {
		  
			String currentDTM = DateUtil.getCurrentDate(DateUtil.DATEFORM);
			
			/**1.기본정보변경 세팅*/
			basicInfo = this.settingBasicInfo(usrCvDsc,usrFitstLginYn,currentDTM,basicInfo,mbcoType ,entPrgStsctemp);
			mbInfChgDAO.updatePtUsrInf(basicInfo);
			
			/**2.권한변경시*/
			if(usrAuthLst != null && "Y".equals(basicInfo.getAUTH_CHG_YN())){
				for(SvcVO usrAuth : usrAuthLst) {
					mbEntDAO.insertPtUsrAuthHst(basicInfo.getMB_ID(), usrAuth.getUSR_AUTH_DSC(),currentDTM, basicInfo.getENT_PRG_STSC(), basicInfo.getNA_TRPL_C(), usrAuth.getRQ_DSC());
				}
			}
			/**3.가입서비스변경시*/
			if(svcInfoLst != null && "Y".equals(basicInfo.getSVC_CHG_YN())){
				for( SvcVO svcInfo : svcInfoLst){					
					mbEntDAO.insertPtSvcEntHst(basicInfo.getNA_TRPL_C(), svcInfo.getSVC_ID(), currentDTM, basicInfo.getENT_PRG_STSC() , basicInfo.getMB_ID(), svcInfo.getRQ_DSC());
				}
			}
			
			/** 청구정보 변경시 */
			if(branchBznoLst != null){
				BranchBznoVO branchBzno = branchBznoLst.get(0);
				branchBzno.setNA_TRPL_C(basicInfo.getNA_TRPL_C());
				branchBzno.setMB_ID(basicInfo.getMB_ID());
				
				/** 기존 청구정보 */
				BranchBznoVO vo = mbInfChgDAO.retrieveBranchBzno(basicInfo.getNA_TRPL_C());

				// null로 들어올 수 있는 정보에 대해 확인하여 값을 배정한다. 이 구문이 없으면 아래  equals 에서  NullPointerException 이 발생한다.
				if(branchBzno.getZIP() == null) branchBzno.setZIP("null");
				if(branchBzno.getDONGBW() == null) branchBzno.setDONGBW("null");
				if(vo.getZIP() == null) vo.setZIP("null");
				if(vo.getDONGBW() == null) vo.setDONGBW("null");
				
				/*
				 * 전자계약전용업체 null 회피 
				 * BZCCNM	BZTPNM	TX_REG

				 */
				// if(branchBzno.getDONGUP() == null) branchBzno.setDONGUP("null");
				if(branchBzno.getBZCCNM() == null) branchBzno.setBZCCNM("전자세금계산서전용업체");
				if(branchBzno.getBZTPNM() == null) branchBzno.setBZTPNM("전자세금계산서전용업체");
				if(branchBzno.getTX_REG() == null) branchBzno.setTX_REG("0001");
				
				if(vo.getBZCCNM() == null) vo.setBZCCNM("전자세금계산서전용업체");
				if(vo.getBZTPNM() == null) vo.setBZTPNM("전자세금계산서전용업체");
				if(vo.getTX_REG() == null) vo.setTX_REG("0001");
				
				
				boolean bTX_REG = false;
				if(branchBzno.getTX_REG() == null && vo.getTX_REG() != null) bTX_REG = true;
				else if(branchBzno.getTX_REG() != null)
				{
					if(!branchBzno.getTX_REG().equals(vo.getTX_REG())) bTX_REG = true;
				}

				if(vo != null)
				{
					if(!branchBzno.getCLNTNM().equals(vo.getCLNTNM()) || !branchBzno.getBZNO().equals(vo.getBZNO()) ||
							!branchBzno.getREPMNM().equals(vo.getREPMNM()) || !branchBzno.getZIP().equals(vo.getZIP()) ||
							!branchBzno.getDONGUP().equals(vo.getDONGUP()) || !branchBzno.getDONGBW().equals(vo.getDONGBW()) ||
							!branchBzno.getBZTPNM().equals(vo.getBZTPNM()) || !branchBzno.getBZCCNM().equals(vo.getBZCCNM()) ||
							bTX_REG
					)
					{
						/** 청구정보 변경 */
						mbInfChgDAO.mergeBranchBzno(branchBzno);
						/** 이력 */
						mbInfChgDAO.insertBranchBznoHst(branchBzno, currentDTM);
					}
				}
				
			}

			/**4.납부정보변경시*/
			if("Y".equals(basicInfo.getBL_CHG_YN())){

				if(payInfoLst != null) {

					PayVO pay = payInfoLst.get(0);

					logger.info(pay.toString());
					logger.info("계좌번호:[" + pay.getACNO() + "]");
					
					if ("3".equals(pay.getSTL_METH_DSC())) { // 가상계좌인 경우, 자동이체용 변수값 제거
						pay.setHOP_DRW_DD("");	// 희망출금일
						pay.setDPRNM("");		// 예금주
						pay.setPSCRP_DSC("");	// 개인/법인
						pay.setDPR_NO("");		// 계좌 인증번호
					}
					
					mbEntDAO.insertPtPayInfHst(basicInfo.getMB_ID() , basicInfo.getNA_TRPL_C(), currentDTM, basicInfo.getENT_PRG_STSC(), pay);
					mbEntDAO.insertPtPayInfElsg(basicInfo.getMB_ID(), basicInfo.getNA_TRPL_C(), currentDTM, basicInfo.getENT_PRG_STSC(), pay);
					
					/**통장 사본파일 처리*/
					if(pay.getBB_FL_TMPNM() != null && !"".equals(pay.getBB_FL_TMPNM())){
						logger.info("통장사본 ["+pay.getBB_FL_TMPNM()+"]");
						mbEntService.makeFile(basicInfo.getNA_TRPL_C(), pay.getBB_FL_TMPNM());
					}else{
						logger.info("통장 사본이 첨부되지 않았습니다.");
					}
					/**사업자등록증 사본파일 처리*/
					if(pay.getBZ_RGWRRT_FL_TMPNM() != null && !"".equals(pay.getBZ_RGWRRT_FL_TMPNM())){
						logger.info("사업자등록증사본 ["+pay.getBZ_RGWRRT_FL_TMPNM()+"]");
						mbEntService.makeFile(basicInfo.getNA_TRPL_C(), pay.getBZ_RGWRRT_FL_TMPNM());
					}else{
						logger.info("사업자등록증 사본이 첨부되지 않았습니다.");
					}
				}
			}

	}



	/**1.기본정보변경 기본세팅
	 * 	1-1) 전환회원 및 미전환회원이면서 최초로그인인 경우, 가입진행상태는 진행중[0], 비밀번호변경일자는 현재일로 세팅합니다.
	 *  1-2) 전환회원 및 미전환회원이면서 최초로그인인 경우, 로그인 히스토리에 이력을 남깁니다. 
	 *  1-3) 입력된 사업자번호를 합친다.
	 *  1-4) 입력받은 핸드폰번호를 합친다.
	 *  1-5) 입력받은 이메일주소를 합친다.
	 *  1-5) 서비스,권한,납부정보 변경사항이 없을 경우, 관리자 승인이 필요하지 않음 => 가입진행상태는 완료로 세팅한다.
	 * @param mbcoType 
	 * @throws UnknownHostException 
	 */
	public MbInfChgVO settingBasicInfo(String usrCvDsc, String usrFitstLginYn,
			String currentDTM, MbInfChgVO basicInfo, String mbcoType, String  entPrgStsctemp) throws UnknownHostException {

		/** 1-1) 전환회원 및 미전환회원이면서 최초로그인인 경우, 가입진행상태는 진행중[0], 비밀번호변경일자는 현재일로 세팅합니다.
		 *  1-2) 전환회원 및 미전환회원이면서 최초로그인인 경우, 로그인 히스토리에 이력을 남깁니다.
		 *  2-1) 서비스,권한,납부정보 변경사항이 없을 경우, 관리자 승인이 필요하지 않음 => 가입진행상태는 완료
		 * */
		String isChgUsrJoinFlag ="N";   //미전환회원 flag
		if(("1".equals(usrCvDsc) || "2".equals(usrCvDsc) ) && "Y".equals(usrFitstLginYn)){
			isChgUsrJoinFlag= "Y"; 			
			basicInfo.setPW_LSRG_DT(currentDTM.substring(0, 8));
			basicInfo.setENT_PRG_STSC("0");
			String date = DateUtil.getCurrentDate("yyyyMMddHHmmssSSS");
			String hostIp = InetAddress.getLocalHost().getHostAddress();

			lginLgotService.insertLoginHistory(basicInfo.getMB_ID(),hostIp,date);
			mbEntDAO.insertMbPushAncAmn(basicInfo.getMB_ID(), "1");


		}
		//신청일자
		basicInfo.setREQ_DT(currentDTM.substring(0, 8));

		/** (1-1 ~ 1-4) 각각의 필드로 받은 데이터를 하나의 데이터로 합친다.*/		
		//사업자번호
		StringBuffer sb = new StringBuffer();
		
		if(!"1".equals(basicInfo.getNA_MBCO_DSC()) ){
			sb.append(basicInfo.getBRC_BZNO1()).append(basicInfo.getBRC_BZNO2()).append(basicInfo.getBRC_BZNO3());
		}else{
			sb.append(basicInfo.getBZNO1()).append(basicInfo.getBZNO2()).append(basicInfo.getBZNO3());
		}
		basicInfo.setBZNO(sb.toString());

		//핸드폰번호
		sb = new StringBuffer();
		sb.append(basicInfo.getUSR_MPNO01()).append("-").append(basicInfo.getUSR_MPNO02()).append("-").append(basicInfo.getUSR_MPNO03());
		basicInfo.setUSR_MPNO(sb.toString());

		//이메일주소
		sb = new StringBuffer();
		sb.append(basicInfo.getUSR_EMAIL01()).append("@").append(basicInfo.getUSR_EMAIL02());
		basicInfo.setUSR_EMAIL(sb.toString());		

		/**  1-5) 서비스,권한,납부정보 변경사항이 없을 경우, 관리자 승인이 필요하지 않음 => 가입진행상태는 완료로 세팅한다.*/
		if(!"0".equals(basicInfo.getENT_PRG_STSC())  && !"4".equals(entPrgStsctemp)  && "N".equals(isChgUsrJoinFlag)  && "N".equals(basicInfo.getBL_CHG_YN()) && "N".equals(basicInfo.getSVC_CHG_YN()) && "N".equals(basicInfo.getAUTH_CHG_YN())){
			basicInfo.setENT_PRG_STSC("1");
		}
		return basicInfo;
	}


	/**회원 ID/비밀번호에 해당하는 회원이 존재하는지 확인*/
	public boolean isExistUser(String MB_PW, String MB_ID) {
		try {
			return mbInfChgDAO.isExistUser(MB_ID, MB_PW);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**회원 권한조회-history*/
	public List<Map<String, Object>> retrieveUsrAuthLst(String MB_ID) {
		try {
			return mbInfChgDAO.retrieveUsrAuthLst(MB_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	/**회원 권한조회 -master*/
	public List<Map<String, Object>> retrieveUsrAuthMstLst(String MB_ID) {
		try {
			return mbInfChgDAO.retrieveUsrAuthMstLst(MB_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}


	/**본부 및 사업자 권한 및 서비스변경 */
	public void updateMBNotType01(String chgAuthYn, MbInfChgVO basicInfo, List<SvcAuth> svcAuthLst, int checkM , String MB_ID) {
		try {
			
			/**회원전화번호 세팅*/
			StringBuffer sb = new StringBuffer();
			sb.append(basicInfo.getUSR_MPNO01()).append("-").append(basicInfo.getUSR_MPNO02()).append("-").append(basicInfo.getUSR_MPNO03());
			basicInfo.setUSR_MPNO(sb.toString());
			// 이메일
			sb = new StringBuffer();
			sb.append(basicInfo.getUSR_EMAIL01()).append("@").append(basicInfo.getUSR_EMAIL02());
			basicInfo.setUSR_EMAIL(sb.toString());
			
			if(basicInfo.getUSR_TELNO01() != null && basicInfo.getUSR_TELNO02() != null && basicInfo.getUSR_TELNO03() != null) {
				sb = new StringBuffer();
				sb.append(basicInfo.getUSR_TELNO01()).append(basicInfo.getUSR_TELNO02()).append(basicInfo.getUSR_TELNO03());
				basicInfo.setUSR_TELNO(sb.toString());
			} else if(basicInfo.getUSR_TELNO01() == null && basicInfo.getUSR_TELNO02() == null && basicInfo.getUSR_TELNO03() == null) {
				basicInfo.setUSR_TELNO(null);
			}
			
			
			int check ;
			
			mbInfChgDAO.updatePtUsrInf(basicInfo);
			/**권한벙보 변경*/
			if("Y".equals(chgAuthYn)){
				
				
				ArrayList<String> deleteAuth = new ArrayList<String>();
				ArrayList<String> insertAuth = new ArrayList<String>();
				
				
				for(SvcAuth svcAuth : svcAuthLst){					
					if("0".equals(svcAuth.getRQ_DSC())){
						if("M".equals(svcAuth.getUSR_AUTH_DSC())){ 					//R : 가격할인 권한도 삭제 (TB_PD_MD_USR_INF 테이블에 아이디가 이미 존재) -> 사용중지로 update
							check = 0;
							mbInfChgDAO.updateTbpdmd(MB_ID,check);
							deleteAuth.add(svcAuth.getUSR_AUTH_DSC());
						}else{														
							deleteAuth.add(svcAuth.getUSR_AUTH_DSC());
						}
					}else if("1".equals(svcAuth.getRQ_DSC())){ 						//권한 추가
						if("M".equals(svcAuth.getUSR_AUTH_DSC())){ 					//R : 가격할인 권한추가포함
							if(checkM == 1){										//TB_PD_MD_USR_INF테이블에 이미 존재한다면 -> 사용으로 update
								check = 1;
								mbInfChgDAO.updateTbpdmd(MB_ID,check);
								insertAuth.add(svcAuth.getUSR_AUTH_DSC());
							}else{									
								mbInfChgDAO.insertTbpdmdUSr(basicInfo);				//TB_PD_MD_USR_INF테이블에 없다면 -> insert
								insertAuth.add(svcAuth.getUSR_AUTH_DSC());
							}
						}else{
							insertAuth.add(svcAuth.getUSR_AUTH_DSC());
						}
					}
				}
				/*삭제인경우*/
				if(deleteAuth != null && deleteAuth.size() > 0){
					this.deleteSvcAuth(deleteAuth,basicInfo);
				}
				
				/*등록인경우*/
				if(insertAuth != null && insertAuth.size() > 0){
					this.insertSvcAuth(insertAuth,basicInfo);
				}
			}
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		} 
	}



	/**본부 및 사업장 회원의 권한  삭제 
	 * */
	public void deleteSvcAuth(ArrayList<String> deleteAuth, MbInfChgVO basicInfo) {
		
		/**1.권한삭제*/		
		SvcVO auth =new SvcVO();		
		auth.setMB_ID(basicInfo.getMB_ID());
		auth.setStr(deleteAuth);
		mbEntDAO.deletePtUsrAuth(auth);		
				
	}
	

	/**본부 및 사업장 회원의  권한  등록 
	 * */
	private void insertSvcAuth(ArrayList<String> insertAuth, MbInfChgVO basicInfo) {
				
		/**1.권한삭제*/
		SvcVO auth =new SvcVO();		
		auth.setMB_ID(basicInfo.getMB_ID());
		auth.setStr(insertAuth);
		mbEntDAO.deletePtUsrAuth(auth);
		
		/**2.권한등록*/
		for(String usrAuth : insertAuth){			
			mbEntDAO.insertPtUsrAuth(basicInfo.getMB_ID(), usrAuth);
		}
	}

	/**거래처코드별 시장조회 카타고리 조회 
	 * @param sclfnm */
	public List<Map<String, Object>> retriveCtgrInfLst(String NA_TRPL_C, String WRS_SCLFNM) {	
		return mbInfChgDAO.retriveCtgrInfLst(NA_TRPL_C,WRS_SCLFNM);
	}

	/**거래처코드별 시장조회 카타고리 등록/해지/재등록 
	 * 구분값 : D [해지]
	 * 		 I [등록]
	 * 		 R [재등록]
	 * 
	 * 신규카테고리 등록시, 기등록된 카테고리인지 확인후, 기 존재된 카테고리 일 경우, 등록하지 않습니다.
	 * */
	public boolean saveCtgrInf(String STATUS, String NA_TRPL_C, String CRGR_SEQ,
			String LCLC, String MCLC, String SCLC, String UPDATE_USER) {

		String CURRENT_DATE = DateUtil.getCurrentDate("yyyyMMdd");
		boolean rst = true;
	
		
		if("D".equals(STATUS)){
			mbInfChgDAO.updateCtgrInf(NA_TRPL_C,CRGR_SEQ,LCLC,MCLC,SCLC,UPDATE_USER,CURRENT_DATE);			
		}else if("I".equals(STATUS)){
			if(!mbInfChgDAO.existCtgr(NA_TRPL_C,CRGR_SEQ,LCLC,MCLC,SCLC)){
				mbInfChgDAO.insertCtgrInf(STATUS,NA_TRPL_C,CRGR_SEQ,LCLC,MCLC,SCLC,UPDATE_USER,CURRENT_DATE);				
			}else{				
				rst = false;
			}
		}else if("R".equals(STATUS)){
			mbInfChgDAO.insertCtgrInf(STATUS,NA_TRPL_C,CRGR_SEQ,LCLC,MCLC,SCLC,UPDATE_USER,CURRENT_DATE);
			
		}
		return rst;		
	}

	/**
	 * 지사 사업자번호 조회
	 * @param NA_TRPL_C
	 * @return
	 */
	public BranchBznoVO retrieveBranchBzno(String NA_TRPL_C) {
		try {
			BranchBznoVO vo = mbInfChgDAO.retrieveBranchBzno(NA_TRPL_C);
			return vo;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 지사 사업자번호 저장
	 * @param vo
	 */
	public void saveBranchBzno(BranchBznoVO vo) {
		try {
			mbInfChgDAO.mergeBranchBzno(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	// 사용자 정보제공동의
	public Map<String, Object> retrieveUsrConsent(String bsnDsc, String naTrplC) {
		// 
		try {		

			Map<String, Object> usrConsent = mbInfChgDAO.retrieveUsrConsent(bsnDsc, naTrplC);
			
			return usrConsent;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public  Map<String, Object>  retrieveUsrConsentCount(String bsnDsc, String naTrplC) {

		try {		

			Map<String, Object> usrConsentCount = mbInfChgDAO.retrieveUsrConsentCount(bsnDsc, naTrplC);
			
			return usrConsentCount;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}

	}

	public boolean insertUsrConsent(UsrConsentVO usrConsentVO) {
        // 
		boolean rst = true;
		try{
			rst = mbInfChgDAO.insertUsrConsent(usrConsentVO) > 0;
		}catch (DataAccessException e) {
			throw new AppetizerException(e);
		} 

		return rst;
	}

//TB_PD_MD_USR_INF에 존재 하는지 체크
	public int checkM(String MB_ID) {
		try {			
			return	mbInfChgDAO.checkM(MB_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public void downloadExcelRetriveCtgrInfLst(String NA_TRPL_C, String WRS_SCLFNM, ExcelFileMakerResultHandler handler) {	
		mbInfChgDAO.downloadExcelRetriveCtgrInfLst(NA_TRPL_C,WRS_SCLFNM,handler);
	}


	


}
