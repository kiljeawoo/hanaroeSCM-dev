package com.nh.escm.pt.usrinf.controller;




import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.esum.appetizer.util.JsonUtil;
import com.nexacro.xapi.data.datatype.DataType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.api.escm.usrinfo.UserInfoApiCaller;
import com.nh.escm.pds.company.service.CompanyService;
import com.nh.escm.pds.company.vo.CompanyVO;
import com.nh.escm.pt.usrinf.service.MbEntService;
import com.nh.escm.pt.usrinf.vo.BranchBznoVO;
import com.nh.escm.pt.usrinf.vo.MbEntVO;
import com.nh.escm.pt.usrinf.vo.PayVO;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.BuyerInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.CertNumNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.NaTrplCAuthNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.NaTrplCInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.OfficeInfo;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.PayInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.ResultInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.SvcInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.VirtualAccountNames;
import com.nh.escm.pt.usrinf.vo.SvcVO;
import com.nh.escm.util.RandomUtil;
import com.nh.escm.util.SeqGenUtil;



/**
 * <pre>MbEntController.java</pre>
 * @author 김복궁
 * @version 1.0
 * @since 2015. 10. 15.
 * @modified 
 * @modifier 
 */
@Controller
public class MbEntController extends AbstractController {

	@Autowired
	private MbEntService mbEntService;
	
	@Autowired
	private CompanyService companyService;
	
	/**
	 * @param  	: 사업자번호,회원종류
	 * @사용화면 	: OMG_DS_SC_5110,OMG_DS_SC_5112
	 * @설명 	   	: 협력업체, 사업장 회원가입시 사업자번호에 해당하는 거래처코드 목록 반환하는 AIP
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/retriveNaTrplCList")

	public void retriveNaTrplCList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		String BZ01 = requestHelper.getParameter("bzNo1");
		String BZ02 = requestHelper.getParameter("bzNo2");
		String BZ03 = requestHelper.getParameter("bzNo3");
		String USR_TPC = requestHelper.getParameter("usrTpc");
		
		try{
			List<Map<String,Object>> naTrplCLst = mbEntService.retriveNaTrplCList(BZ01,BZ02,BZ03,USR_TPC);
			DataSetHelper dsHelper = new DataSetHelper("ds_naTrplC");
			
			if (naTrplCLst.isEmpty() == false) {
				dsHelper.addColumns(naTrplCLst.get(0).keySet());
				
				for(Map<String,Object> naTrplC : naTrplCLst){
					dsHelper.setData(naTrplC);
				}
			}
			
			platformData.addDataSet(dsHelper.getDataSet());

			sendData(response, platformData);	
		}catch(AppetizerException e){
			sendData(response, new PlatformData(), -1, "error.message.server.exception");			
		}
	}	

//	/** 
//	 * @param  	: 사업자번호,회원종류,거래처코드
//	 * @사용화면 	: OMG_DS_SC_5110,OMG_DS_SC_5111,OMG_DS_SC_5112
//	 * @설명 	   	: 사업자번호,회원종류,거래처코드에 해당하는 회사정보, 거래처권한, 가입처리중인 권한여부를 조회한다. 
//	 */	
//	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/retrieveOfficeInfo")	
//	public void retrieveOfficeInfo(HttpServletRequest request, HttpServletResponse response) {
//		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
//		PlatformData platformData = new PlatformData();
//
//		String userTpC = requestHelper.getParameter("usrTpc");
//		String naTrplC = requestHelper.getParameter("naTrplC");
//		String bzNo1 = requestHelper.getParameter("bzNo1");
//		String bzNo2 = requestHelper.getParameter("bzNo2");
//		String bzNo3 = requestHelper.getParameter("bzNo3");
//		
//		DataSetHelper dsHelper  = null;
//		
//		try {
//
//			/**1.회사정보 조회.*/
//			Map<String,Object> officeInfo = mbEntService.retrieveOfficeInfo(bzNo1,bzNo2, bzNo3,naTrplC,userTpC);
//			dsHelper = new DataSetHelper("ds_officeInfo");
//			if(officeInfo != null) {
//				dsHelper.addColumns(officeInfo.keySet());
//				dsHelper.setData(officeInfo);
//			}
//			platformData.addDataSet(dsHelper.getDataSet());
//			
//			// 20160120.세금계산서전용 userTpc "04" 추가.
//			// 20171122.A마켓협력업체 userTpc "81" 추가.
//			if("01".equals(userTpC) || "04".equals(userTpC) || "81".equals(userTpC)){				
//				/**2.거래처코드별 권한 조회*/
//				dsHelper = new DataSetHelper("ds_naTrplCAuth");
//				dsHelper.addColumns(NaTrplCAuthNames.class);
//				List<Map<String,Object>> naTrplCAuthLst = mbEntService.retrieveNaTrplCAuthLst(naTrplC);
//				for(Map<String,Object> naTrplCAuth : naTrplCAuthLst){
//					dsHelper.setData(naTrplCAuth);
//				}			
//				platformData.addDataSet(dsHelper.getDataSet());
//
//
//				/**3.거래처코드별 가입진행 중 권한 조회*/
//				dsHelper = new DataSetHelper("ds_naTrplCAuthIng");
//				dsHelper.addColumns(ResultInfoNames.class);
//				Map<String,Object> naTrplCAuthIng = mbEntService.retrieveSvcAuthIng(naTrplC);			
//				dsHelper.setData(naTrplCAuthIng);						
//				platformData.addDataSet(dsHelper.getDataSet());
//
//				/**4.거래처코드별 가입서비스 조회
//				 * 진행중인 빌링권한, 빌링권한을 가진 회원이 존재 하지 않을 경우 ,master테이블에 있는 데이터를 조회한다.
//				 * 
//				 * */
//				dsHelper = new DataSetHelper("ds_entSvc");
//				dsHelper.addColumns(SvcInfoNames.class);
//				Map<String,Object> ingBuillingYn = mbEntService.retrieveSvcAuthIng(naTrplC);
//				boolean isExistBuillingAuth = mbEntService.isExistBuillingAuth(naTrplC,"1");	
//				List<Map<String,Object>> entSvcList = null;
//				if(!isExistBuillingAuth && "N".equals(ingBuillingYn.get(ResultInfoNames.BILING_ING.name()))){
//					entSvcList = mbEntService.retriveEntSvcMstList(naTrplC);
//				}else{
//					entSvcList = mbEntService.retriveEntSvcList(naTrplC);
//				}				
//				for(Map<String,Object> entSvc : entSvcList){
//					dsHelper.setData(entSvc);
//				}
//				platformData.addDataSet(dsHelper.getDataSet());
//				
//			}
//			/**사업장일 경우.세금계산서 권한 개수 조회*/
//			else if("03".equals(userTpC)){
//
//				dsHelper = new DataSetHelper("ds_taxCnt");
//				dsHelper.addColumns(BuyerInfoNames.class);
//
//				Map<String, Object> taxInfo  = new HashMap<String, Object>();
//				taxInfo.put(BuyerInfoNames.TAX_AUTH_CNT.name(), mbEntService.retrieveAuthCnt(naTrplC, "7"));					
//
//				dsHelper.setData(taxInfo);			
//				platformData.addDataSet(dsHelper.getDataSet());
//				
//			}
//			
//			sendData(response, platformData);
//
//		} catch (AppetizerException e) {
//			logger.error(e.getMessage(), e);
//			sendData(response, new PlatformData(), -3, "error.message.server.exception");
//		}		
//	}

	
	/**
	 * @param  	: 사업자번호,회원종류,거래처코드
	 * @사용화면 	: OMG_DS_SC_5110,OMG_DS_SC_5111,OMG_DS_SC_5112
	 * @설명 	   	: 사업자번호,회원종류,거래처코드에 해당하는 회사정보, 거래처권한, 가입처리중인 권한여부를 조회한다. 
	 /rest/pt/usrinf/retrieveOfficeInfo"      auth_check*/
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/usrinf/check_authority") 
	public void check_authority(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		DataSetHelper dsHelper  = null;

		String userTpC = requestHelper.getParameter("usrTpc");
		System.out.println(userTpC);
		String naTrplC = null;
				requestHelper.getParameter("naTrplC");
		String mb_id = requestHelper.getParameter("mbId");
		String email_1 = requestHelper.getParameter("email_1");
		String email_2 = requestHelper.getParameter("email_2");
		String bzNo1 = null;
				requestHelper.getParameter("bzNo1");
		String bzNo2 = null;
				requestHelper.getParameter("bzNo2");
		String bzNo3 = null;
				requestHelper.getParameter("bzNo3");
		String data_type = requestHelper.getParameter("data_type");
	    try {
			if(mbEntService.checkMbIdDup(mb_id) > 0){
				sendData(response, new PlatformData(), -1, "");
			}else{
				UserInfoApiCaller userInfoApiCaller = new UserInfoApiCaller();
				Map<String, Object> OM097_calling_result =
						userInfoApiCaller.OM097Calling(mb_id, email_1 + "@" + email_2);
				logger.info("check_authority_OM097Calling=>>"+OM097_calling_result.get("tgrmRspC"));
				if (OM097_calling_result.get("tgrmRspC").equals("0")) {//정상
					// 정상 프로세스
					naTrplC = OM097_calling_result.get("repNaBzplc").toString();
					dsHelper = new DataSetHelper("ds_api_result");

					dsHelper.addColumns(OM097_calling_result.keySet());
					dsHelper.setData(OM097_calling_result);

					platformData.addDataSet(dsHelper.getDataSet());
					sendData(response, platformData);
				}
				else if(OM097_calling_result.get("tgrmRspC").equals("1")){//사번 미존재
					// 정상 프로세스
					naTrplC = OM097_calling_result.get("repNaBzplc").toString();
					dsHelper = new DataSetHelper("ds_api_result");

					dsHelper.addColumns(OM097_calling_result.keySet());
					dsHelper.setData(OM097_calling_result);

					platformData.addDataSet(dsHelper.getDataSet());
					sendData(response, platformData);
				}
				else if(OM097_calling_result.get("tgrmRspC").equals("2")){//사번 미존재
					// 정상 프로세스
					naTrplC = OM097_calling_result.get("repNaBzplc").toString();
					dsHelper = new DataSetHelper("ds_api_result");

					dsHelper.addColumns(OM097_calling_result.keySet());
					dsHelper.setData(OM097_calling_result);

					platformData.addDataSet(dsHelper.getDataSet());
					sendData(response, platformData);
				}
				else if(OM097_calling_result.get("tgrmRspC").equals("3")){//사번 미존재
					// 정상 프로세스
					naTrplC = OM097_calling_result.get("repNaBzplc").toString();
					dsHelper = new DataSetHelper("ds_api_result");

					dsHelper.addColumns(OM097_calling_result.keySet());
					dsHelper.setData(OM097_calling_result);

					platformData.addDataSet(dsHelper.getDataSet());
					sendData(response, platformData);
				}
				else {
					//존재 하지 않는 아이디 입니다. 출력
					logger.info(mb_id + " doesn't exist in 농협 API system.");
					sendData(response, new PlatformData(), -3, "error.message.server.exception");
					return;
				}
			}
	    }catch(Exception e){
	    	//인터페이스 통신상의 문제
	    	logger.info(mb_id+" couldn't eccess to 농협 API system.");
	    	sendData(response, new PlatformData(), -2, "");
	    }

		//db 업데이트 완료후 기존의 프로세스 진행.
		try {

			/**1.회사정보 조회.*/
			Map<String,Object> officeInfo = mbEntService.retrieveOfficeInfo(bzNo1,bzNo2, bzNo3,naTrplC,userTpC);
			dsHelper = new DataSetHelper("ds_officeInfo");
			if(officeInfo != null) {
				dsHelper.addColumns(officeInfo.keySet());
				dsHelper.setData(officeInfo);
			}else{
				sendData(response, new PlatformData(), -3, "error.message.server.exception");
				return;
			}
			//로그인 및 회원가입시 회사에 관한 정보가 잘 받아졌는지 확인하는 구간
//			System.out.println(dsHelper.getDataSet().getColumnCount());
//			for(int i=0; i<dsHelper.getDataSet().getColumnCount(); i++) {
//				System.out.println(dsHelper.getDataSet().getColumn(i).getName());
//				System.out.println(dsHelper.getDataSet().getString(0, dsHelper.getDataSet().getColumn(i).getName()));
//			}
			platformData.addDataSet(dsHelper.getDataSet());
			
			dsHelper = new DataSetHelper("ds_naTrplCAuth");
			dsHelper.addColumns(NaTrplCAuthNames.class);
			List<Map<String,Object>> naTrplCAuthLst = mbEntService.retrieveNaTrplCAuthLst(naTrplC);
			for(Map<String,Object> naTrplCAuth : naTrplCAuthLst){
				dsHelper.setData(naTrplCAuth);
			}			
			platformData.addDataSet(dsHelper.getDataSet());

			/**3.거래처코드별 가입진행 중 권한 조회*/
			dsHelper = new DataSetHelper("ds_naTrplCAuthIng");
			dsHelper.addColumns(ResultInfoNames.class);
			Map<String,Object> naTrplCAuthIng = mbEntService.retrieveSvcAuthIng(naTrplC);			
			dsHelper.setData(naTrplCAuthIng);						
			platformData.addDataSet(dsHelper.getDataSet());

			/**사업장일 경우.세금계산서 권한 개수 조회*/
			if("03".equals(userTpC)){

				dsHelper = new DataSetHelper("ds_taxCnt");
				dsHelper.addColumns(BuyerInfoNames.class);

				Map<String, Object> taxInfo  = new HashMap<String, Object>();
				taxInfo.put(BuyerInfoNames.TAX_AUTH_CNT.name(), mbEntService.retrieveAuthCnt(naTrplC, "7"));					

				dsHelper.setData(taxInfo);			
				platformData.addDataSet(dsHelper.getDataSet());
				
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -3, "error.message.server.exception");
		}		
	}

	
	
	
	/**
	 * @param  	: 회원ID
	 * @사용화면 	: OMG_DS_SC_5110, OMG_DS_SC_5112
	 * @설명 	   	: 동일한 회원ID가 존재하는지 확인한다. 
	 * 			   1) 회원종류가 사업장일 경우, 회원기본정보 테이블(NHVANPTL.PT_USR_INF)에 중복아이디가 없어야하며,경제통합사업장관리(NHVANPTL.PT_NA_BZPL_AMN)에 아이디와 사업장코드가 존재해야한다.
	 * 			              회원종류가 사업장이 아닌 경우, 회원기본정보 테이블(NHVANPTL.PT_USR_INF)에 중복아이디가 없어야한다.  
	 * 
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/checkMbIdDup")
	public void checkMbIdDup(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);		

		String mbId = requestHelper.getParameter("mbId");
		String naTrplc = requestHelper.getParameter("naTrplc");
		String usrTpc = requestHelper.getParameter("usrTpc");

		try {			

			logger.debug("usrTpc =>> " + usrTpc);
			
			
			int checkMbIdDup = mbEntService.checkMbIdDup(mbId ,usrTpc);

			if(checkMbIdDup == 0){
				if("03".equals(usrTpc)){					
					if(!mbEntService.isExistNaBzPlAmn(mbId,naTrplc)){
						sendData(response, new PlatformData(), -3, "error.message.noUserCIF");
					}else{
						sendData(response, new PlatformData());
					}
				}else{
					sendData(response, new PlatformData());
				}								
			}else if (checkMbIdDup > 0){
				sendData(response, new PlatformData(), -2, "error.message.dupUserId");
			}else{
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}		
	}

	/**
	 * @param  	: 거래처코드
	 * @사용화면 	: OMG_DS_SC_5110
	 * @설명 	   	: 거래처코드에 해당하는 빌링,세금계산서권한을 조회한다. 
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/retrieveNaTrplCAuthLst")
	public void retrieveNaTrplCAuthLst(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		String naTrplC = requestHelper.getParameter("naTrplC");		

		try {			

			DataSetHelper dsHelper = new DataSetHelper("ds_naTrplCAuth");
			dsHelper.addColumns(NaTrplCAuthNames.class);
			List<Map<String,Object>> naTrplCAuthLst = mbEntService.retrieveNaTrplCAuthLst(naTrplC);
			for(Map<String,Object> naTrplCAuth : naTrplCAuthLst){
				dsHelper.setData(naTrplCAuth);
			}			
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}		
	}

	/**
	 * @param  	: 거래처코드
	 * @사용화면 	: OMG_DS_SC_5110
	 * @설명 	   	: 거래처코드에 해당하는 가입서비스정보, 납부정보를 조회한다. 
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/retriveBilingInfo")
	public void retriveBilingInfo(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		String naTrplC = requestHelper.getParameter("naTrplC");		

		try {
			Map<String,Object> ingBuillingYn = mbEntService.retrieveSvcAuthIng(naTrplC);
			boolean isExistBuillingAuth = mbEntService.isExistBuillingAuth(naTrplC,"1");			
			
			DataSetHelper dsHelper = new DataSetHelper("ds_payInfo");
			dsHelper.addColumns(PayInfoNames.class);
			Map<String,Object> payInfo = null;
			if(!isExistBuillingAuth && "N".equals(ingBuillingYn.get(ResultInfoNames.BILING_ING.name()))){
				payInfo=mbEntService.retrievePayInfoMst(naTrplC);
			}else{
				payInfo = mbEntService.retrievePayInfo(naTrplC);
			}
			
			if(payInfo != null){
				dsHelper.setData(payInfo);
			}
			platformData.addDataSet(dsHelper.getDataSet());

			sendData(response, platformData);

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}		
	}

	/**
	 * @param  	: 회원휴대전화,회원명
	 * @사용화면 	: OMG_DS_SC_5110,OMG_DS_SC_5111,OMG_DS_SC_5112,OMG_DS_SC_5113,OMG_DS_SC_5114,OMG_DS_SC_5115,OMG_DS_SC_5116
	 * @설명 	   	: 휴대전화로 인증번호를 전송한다. 
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/sendSms")
	public void sendSms(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		PlatformData platformData = new PlatformData();		
		String hp = requestHelper.getParameter("hp");
		String usrNm = requestHelper.getParameter("usrNM");
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_certNum");
			dsHelper.addColumns(CertNumNames.class);

			String randomNumber = RandomUtil.getRandomNumber();
			int rst = mbEntService.sendSms(hp, "[하나로eSCM] SMS인증번호["+randomNumber+"]" , usrNm);

			if(rst < 0){
				sendData(response, new PlatformData(), -1, "error.message.server.exception");				
			}else{
				Map<String, Object> result = new HashMap<String, Object>();
				result.put("CERT_NUM", randomNumber);			
				dsHelper.setData(result);
				platformData.addDataSet(dsHelper.getDataSet());
				sendData(response, platformData);				
			}		
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}		
	}

	/**
	 * @param  	: 회사정보,회원정보,권한정보,서비스정보,납부정보,인감정보
	 * @사용화면 	: OMG_DS_SC_5110
	 * @설명 	   	: 신규회원을 등록한다.
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/insertMB")
	public void insertMB(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try{

			String blChgYn	                 = requestHelper.getParameter("blChgYn");
			String svcChgYn                  = requestHelper.getParameter("svcChgYn");
			String authChgYn                 = requestHelper.getParameter("authChgYn");
			String isNewGln                  = requestHelper.getParameter("isNewGln");
			

			DataSet ds_officeInfo               = requestHelper.getDataSet("ds_officeInfo");

			List<MbEntVO>  officeLst            = requestHelper.getValueObjects(MbEntVO.class,   requestHelper.getDataSet("ds_officeInfo"));
			List<MbEntVO>  mbLst                = requestHelper.getValueObjects(MbEntVO.class, requestHelper.getDataSet("ds_userInfo"));	
			List<SvcVO>    svcInfoLst           = requestHelper.getValueObjects(SvcVO.class,   requestHelper.getDataSet("ds_svcInfo"));
			List<SvcVO>    svcAuthLst           = requestHelper.getValueObjects(SvcVO.class,   requestHelper.getDataSet("ds_svcAuth"));			
			List<PayVO>    payInfoLst           = requestHelper.getValueObjects(PayVO.class,   requestHelper.getDataSet("ds_payInfo"));
			List<BranchBznoVO> branchBznoLst    = requestHelper.getValueObjects(BranchBznoVO.class, requestHelper.getDataSet("ds_branch_bzno"));
			
			/*
			 * 전자계약 전용회원이면서 임시거래처코드 발급업체인 경우 임시거래처코드를 먼저 등록 한다. 
			 * 두개의 VO 가 속성이 달라 병행 사용. MbEntVO 클라이언트 데이터셋 기준. CompanyVO 거래처마스터 테이블 기준.
			 */
			
			/*
			 * 사업자번호 합침. 
			 * BZNO1
			 * BZNO2
			 * BZNO3
			 */
			String biz_number =   ds_officeInfo.getString(0, "BZNO1")
					            + ds_officeInfo.getString(0, "BZNO2")
					            + ds_officeInfo.getString(0, "BZNO3")
					            ;
			
			// 거래처 등록을 위한 객체 생성
			List<CompanyVO> companyList      = requestHelper.getValueObjects(CompanyVO.class, requestHelper.getDataSet("ds_officeInfo"));

			MbEntVO mbEntVO = officeLst.get(0);
			CompanyVO companyVO = companyList.get(0);
			
			companyVO.setBIZ_NUMBER(biz_number); // 사업자번호 합쳐서 세팅
			companyVO.setATEL(mbEntVO.getTEL1()); // 전화번호 1
			companyVO.setHTEL(mbEntVO.getTEL2()); // 전화번호 2
			companyVO.setSTEL(mbEntVO.getTEL3()); // 전화번호 3
			
			/********************************************************
			 * NOT NULL 칼럼 기본값 세팅
			 * 
			 * NA_TRPL_DSC 거래처구분
			 * 01	법인사업자
			 * 02	개인사업자
			 * 03	비영리사업체
			 * 04	개인
			 * 05	해외거래처
			 * 11	임의단체
			 * 
			 ********************************************************/
			
			companyVO.setNA_TRPL_DSC("50");       // 임의 세팅
			companyVO.setNAAC_DSC("9");           // 9 외부
			companyVO.setNA_RGN_C("9900");        // 9900	기타대
			companyVO.setFMACH_PATS_TRT_YN("N");  // 농기계부품취급여부
			companyVO.setTR_STOP_YN("N");         // 거래중지여부
			companyVO.setDEL_YN("0");             // 삭제여부
			companyVO.setUSR_SYS_C("95");         // 경제통합 시스템코드

			// 전자계약  전용회원 임시 거래처 등록 
			if("Y".equals(isNewGln)){
				companyService.insertCompany(companyVO);
			}

			mbEntService.insertMB(officeLst.get(0), mbLst.get(0), svcInfoLst, svcAuthLst, payInfoLst,blChgYn,svcChgYn,authChgYn, branchBznoLst);
			
			sendData(response, new PlatformData());	

		}catch(AppetizerException e){
			sendData(response, new PlatformData(), -1, "error.message.server.exception");			
		}
	}


	/**
	 * @param  	: 
	 * @사용화면 	: OMG_DS_SC_5110,OMG_DS_SC_5113,OMG_DS_SC_5114
	 * @설명 	   	: 가상계좌번호를 조회한다.
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/getVirtualAccount")
	public void getVirtualAccount(HttpServletRequest request, HttpServletResponse response) {

		PlatformData platformData = new PlatformData();		

		try{

			String vrAc = SeqGenUtil.getVrAcSequence("VR_AC");

			DataSetHelper dsHelper = new DataSetHelper("ds_vrtlAcNo");
			dsHelper.addColumns(VirtualAccountNames.class);	

			Map<String, Object> result = new HashMap<String, Object>();
			result.put("VRTL_ACNO", vrAc);			
			dsHelper.setData(result);			
			platformData.addDataSet(dsHelper.getDataSet());

			sendData(response, platformData);

		}catch(AppetizerException e){
			sendData(response, new PlatformData(), -1, "error.message.server.exception");			
		}
	}


	/**
	 * @param  	: 사업자번호,거래처코드
	 * @사용화면 	: OMG_DS_SC_5111
	 * @설명 	   	: 사업자번호,거래처코드에 해당하는 회사정보, 바이어정보를 조회한다. 
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/retrieveBuyerInfo")	
	public void retrieveBuyerInfo(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		String naTrplC = requestHelper.getParameter("naTrplC");
		String bzNo1 = requestHelper.getParameter("bzNo1");
		String bzNo2 = requestHelper.getParameter("bzNo2");
		String bzNo3 = requestHelper.getParameter("bzNo3");
		String mbId = requestHelper.getParameter("mbId");

		DataSetHelper dsHelper  = null;

		try {

			/**1.회사정보 조회.*/			
			dsHelper = new DataSetHelper("ds_officeInfo");
			dsHelper.addColumns(OfficeInfo.class);
			Map<String,Object> officeInfo = mbEntService.retrieveBuyerOfficeInfo(bzNo1,bzNo2, bzNo3,naTrplC,mbId);
			if(officeInfo == null){
				sendData(response, new PlatformData(), -1, "error.message.noUserCIF");
			}else{
				dsHelper.setData(officeInfo);
				platformData.addDataSet(dsHelper.getDataSet());

				if(mbEntService.checkMbIdDup((String)officeInfo.get(BuyerInfoNames.MB_ID.name())) > 0){
					sendData(response, new PlatformData(), -2, "error.message.dupBuyerId");
				}else{

					/**2.세금계산서 권한 개수 조회*/
					dsHelper = new DataSetHelper("ds_userInfo");
					dsHelper.addColumns(BuyerInfoNames.class);

					Map<String, Object> buyer  = new HashMap<String, Object>();

					buyer.put(BuyerInfoNames.MB_ID.name(), officeInfo.get(BuyerInfoNames.MB_ID.name()));
					buyer.put(BuyerInfoNames.USR_NM.name(), officeInfo.get(BuyerInfoNames.USR_NM.name()));
					buyer.put(BuyerInfoNames.TAX_AUTH_CNT.name(), mbEntService.retrieveAuthCnt(naTrplC, "7"));					

					dsHelper.setData(buyer);			
					platformData.addDataSet(dsHelper.getDataSet());
					sendData(response, platformData);							
				}
			}

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -3, "error.message.server.exception");
		}		
	}

	/**
	 * @param  	: 회사정보, 회원정보, 서비스정보, 권한정보
	 * @사용화면 	: OMG_DS_SC_5111,OMG_DS_SC_5112
	 * @설명 	   	: 바이어,사업장 회원을 신규가입니다.
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/insertMBNot01")
	public void insertMBNot01(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try{
			String mbPw = requestHelper.getParameter("mbPw");
			

			List<MbEntVO> officeLst = requestHelper.getValueObjects(MbEntVO.class, requestHelper.getDataSet("ds_officeInfo"));
			List<MbEntVO> userLst = requestHelper.getValueObjects(MbEntVO.class, requestHelper.getDataSet("ds_userInfo"));
			List<SvcVO> svcAuthLst = requestHelper.getValueObjects(SvcVO.class, requestHelper.getDataSet("ds_svcAuth"));			

			MbEntVO officeInfo = officeLst.get(0);
			MbEntVO userInfo = userLst.get(0);

			userInfo.setMB_PW(mbPw);			

			mbEntService.insertMBNot01(officeInfo, userInfo, svcAuthLst);		

			sendData(response, new PlatformData());	

		}catch(AppetizerException e){
			throw new AppetizerException("msg.van_ds_sc_0840.view.validation.search1");
//			sendData(response, new PlatformData(), -1, "msg.report.member.affiliate.duplicated");
		}
	}
	
	/**
	 * @사용화면 	: intro
	 * @param request
	 * @설명 휴면에서 전환
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/usrinf/updateReststscout")
	public void updateReststscout(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds = requestHelper.getDataSet("ds_param");
		List<MbEntVO> list = ValueObjectSetUtil.dataSetToVO(ds, MbEntVO.class);
		String MB_ID = null;
		String USR_NM = null;
		String ENT_PRG_STSC = null;

		try {
			for(int i =0; i<ds.getRowCount(); i++){
				MbEntVO mvo = list.get(i);
				USR_NM = mvo.getUSR_NM();
				MB_ID = mvo.getMB_ID();
				ENT_PRG_STSC = mvo.getENT_PRG_STSC();
				
				MbEntVO restmb = new MbEntVO();
				restmb.setMB_ID(MB_ID);
				restmb.setUSR_NM(USR_NM);
				restmb.setENT_PRG_STSC(ENT_PRG_STSC);
				mbEntService.updateReststscout(restmb); //상태 업데이트
				mbEntService.insertUserAuthHst(restmb); //history insert
			}

			PlatformData platformData = new PlatformData();
			sendData(response, platformData,0,"result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}

	}


}
