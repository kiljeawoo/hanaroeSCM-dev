package com.nh.escm.pt.usrinf.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.usrinf.service.MbEntService;
import com.nh.escm.pt.usrinf.service.MbInfChgService;
import com.nh.escm.pt.usrinf.vo.BranchBznoVO;
import com.nh.escm.pt.usrinf.vo.MbInfChgVO;
import com.nh.escm.pt.usrinf.vo.PayVO;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.BasicInfo;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.CategoryInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.NaTrplCAuthNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.PayInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.ResultInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.SvcInfoNames;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.UsrConsent;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.UsrConsentCount;
import com.nh.escm.pt.usrinf.vo.SvcAuth;
import com.nh.escm.pt.usrinf.vo.SvcVO;
import com.nh.escm.pt.usrinf.vo.UsrConsentVO;

@Controller
public class MbInfChgController extends AbstractController {

 		
	@Autowired
	private MbInfChgService mbInfChgService;
	@Autowired
	private MbEntService mbEntService;
	
	/**
	 * 내정보 > 회원정보 > 회원정보변경
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/retrieveMB")
	public void retrieveMB(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		try {			
			String pw = requestHelper.getParameter("mbPw");	
			/**1.기본정보*/
			DataSetHelper dsHelper = new DataSetHelper("ds_basicInfo");
			dsHelper.addColumns(BasicInfo.class);			
			
			Map<String,Object> mbInfo = mbInfChgService.retrieveMB(pw, requestHelper.getUserID());			
			if(mbInfo != null && mbInfo.size() > 0){
				dsHelper.setData(mbInfo);			
				platformData.addDataSet(dsHelper.getDataSet());
	
				/**협력업체/세금계산서전용 회원일 경우*/
				if("01".equals(requestHelper.getUserType()) || "04".equals(requestHelper.getUserType()) || "05".equals(requestHelper.getUserType()) || "81".equals(requestHelper.getUserType())){
					List<Map<String,Object>> usrAuthLst = null; //회원권한
					List<Map<String,Object>> entSvcList = null; //가입서비스
					Map<String,Object> payInfo = null;			//빌링정보변경
					
					/**5.사용자 권한조회*/
					dsHelper = new DataSetHelper("ds_usrAuth");			
					dsHelper.addColumns(NaTrplCAuthNames.class);
					if(!"Y".equals(mbInfo.get("AUTH_CHG_YN"))){
						usrAuthLst = mbInfChgService.retrieveUsrAuthMstLst(requestHelper.getUserID());
					}else{ // 수정중인 경우, 이력 정보를 보여준다.
						usrAuthLst = mbInfChgService.retrieveUsrAuthLst(requestHelper.getUserID());
					}
							
					for(Map<String,Object> usrAuth : usrAuthLst){
						dsHelper.setData(usrAuth);
					}				
					platformData.addDataSet(dsHelper.getDataSet());
					
					
					/**6.거래처코드별 가입서비스 조회*/
					dsHelper = new DataSetHelper("ds_entSvc");
					dsHelper.addColumns(SvcInfoNames.class);
					
					if(!"Y".equals(mbInfo.get("SVC_CHG_YN"))){
						entSvcList = mbEntService.retriveEntSvcMstList(requestHelper.getGlnCode());
					}else{ // 수정중인 경우, 이력 정보를 보여준다.
						entSvcList = mbEntService.retriveEntSvcList(requestHelper.getGlnCode());
					}				
					for(Map<String,Object> entSvc : entSvcList){
						dsHelper.setData(entSvc);
					}
					platformData.addDataSet(dsHelper.getDataSet());
					
					/**7.거래처코드별 납부정보 조회*/
					dsHelper = new DataSetHelper("ds_payInfo");
					dsHelper.addColumns(PayInfoNames.class);
					if(!"Y".equals(mbInfo.get("BL_CHG_YN"))){
						payInfo = mbEntService.retrievePayInfoMst(requestHelper.getGlnCode());
					}else{ // 수정중인 경우, 이력 정보를 보여준다.
						payInfo = mbEntService.retrievePayInfo(requestHelper.getGlnCode());
					}
					
					if(payInfo != null){
						dsHelper.setData(payInfo);
					}
					platformData.addDataSet(dsHelper.getDataSet());
					
					/**2.거래처코드별 권한조회*/
					dsHelper = new DataSetHelper("ds_naTrplCAuth");			
					dsHelper.addColumns(NaTrplCAuthNames.class);				
					List<Map<String,Object>> naTrplCAuthLst = mbEntService.retrieveNaTrplCAuthLst(requestHelper.getGlnCode());
					for(Map<String,Object> naTrplCAuth : naTrplCAuthLst){
						dsHelper.setData(naTrplCAuth);
					}			
					platformData.addDataSet(dsHelper.getDataSet());
					
					/**청구정보 조회*/
					dsHelper = new DataSetHelper("ds_branch_bzno");			
					dsHelper.addColumns(BranchBznoVO.class);				
					BranchBznoVO vo = mbInfChgService.retrieveBranchBzno(requestHelper.getGlnCode());
					if(vo != null){
						dsHelper.setData(vo);	
					}
					platformData.addDataSet(dsHelper.getDataSet());
					
					/**4.거래처코드별 가입진행 중 권한 조회*/
					dsHelper = new DataSetHelper("ds_naTrplCAuthIng");
					dsHelper.addColumns(ResultInfoNames.class);
					Map<String,Object> naTrplCAuthIng = mbEntService.retrieveSvcAuthIng(requestHelper.getGlnCode());			
					dsHelper.setData(naTrplCAuthIng);
					
					platformData.addDataSet(dsHelper.getDataSet());
					
				} 
				/**본부/사업장 회원일 경우*/
				else if("02".equals(requestHelper.getUserType()) ||"03".equals(requestHelper.getUserType())){				
					/**3.사용자 권한조회*/
					dsHelper = new DataSetHelper("ds_usrAuth");			
					dsHelper.addColumns(NaTrplCAuthNames.class);
					List<Map<String,Object>> usrAuthLst = mbInfChgService.retrieveUsrAuthMstLst(requestHelper.getUserID());
					for(Map<String,Object> usrAuth : usrAuthLst){
						dsHelper.setData(usrAuth);
					}
					platformData.addDataSet(dsHelper.getDataSet());
				}			
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	
	
	/**
	 * @param  	: 회원ID, 거래처코드
	 * @사용화면 	: OMG_DS_SC_5113
	 * @설명 	   	: 기본정보, 납부정보, 획원권한, 회원서비스, 거래처코드 진행중인 권한회원, 거래처코드 권한회원, 거래처코드가입된 서비스 반환
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/updateMB")
	public void updateMB(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		

		try {
			String blChgYn	 = requestHelper.getParameter("blChgYn");
			String svcChgYn  = requestHelper.getParameter("svcChgYn");
			String authChgYn = requestHelper.getParameter("authChgYn");
			String mbPw		 = requestHelper.getParameter("mbPW");
			String entPrgStsctemp = requestHelper.getParameter("entPrgStsc_temp");
			String ACNO1		 = requestHelper.getParameter("Acno1");
			String ACNO2		 = requestHelper.getParameter("Acno2");
			String usrFitstLginYn = requestHelper.getUserFirstLoginYn() ;
			String usrCvDsc = requestHelper.getUserCvDsc();
			DataSet dspayinf      = requestHelper.getDataSet("ds_payInfo") ;
			
			List<MbInfChgVO> basicInfoLst = requestHelper.getValueObjects(MbInfChgVO.class, requestHelper.getDataSet("ds_basicInfo"));	
			List<SvcVO> svcInfoLst = requestHelper.getValueObjects(SvcVO.class, requestHelper.getDataSet("ds_svcInfo"));
			List<SvcVO> usrAuthLst = requestHelper.getValueObjects(SvcVO.class, requestHelper.getDataSet("ds_svcAuth"));			
			List<PayVO> payInfoLst = requestHelper.getValueObjects(PayVO.class, dspayinf);
			List<BranchBznoVO> branchBznoLst = requestHelper.getValueObjects(BranchBznoVO.class, requestHelper.getDataSet("ds_branch_bzno"));
			
			
			if(( "".equals(payInfoLst.get(0).getACNO()) || payInfoLst.get(0).getACNO() ==null ) 
					&& "3".equals(basicInfoLst.get(0).getENT_PRG_STSC() ) 
					&& "1".equals(payInfoLst.get(0).getSTL_METH_DSC() )					
					){  
				
				logger.info("ACNO1 [" +ACNO1 +"] ACNO2[" + ACNO2 +"]");
				logger.info(dspayinf.saveXml());
				logger.info(payInfoLst.toString());
				
			}
			
			
			MbInfChgVO basicInfo = basicInfoLst.get(0);
			
			basicInfo.setSVC_CHG_YN(svcChgYn);
			basicInfo.setBL_CHG_YN(blChgYn);
			basicInfo.setAUTH_CHG_YN(authChgYn);
			basicInfo.setMB_PW(mbPw);			
	
			mbInfChgService.updateMBType01(usrFitstLginYn, usrCvDsc, basicInfo, svcInfoLst , usrAuthLst, payInfoLst , requestHelper.getMbcoType() ,entPrgStsctemp, branchBznoLst);
						
			sendData(response, platformData);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
		
	
	/**
	 * @param  	: 비밀번호
	 * @사용화면 	: OMG_DS_SC_5114
	 * @설명 	   	: 회원ID,비밀번호로 회원이 존재하는지 확인
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/checkMBPW")
	public void checkMBPW(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		

		try {
			String pw = requestHelper.getParameter("mbPw");			 

			if( mbInfChgService.isExistUser(pw, requestHelper.getUserID())){				
				sendData(response, platformData);
			}else{				
				sendData(response, new PlatformData(), -2, "error.message.server.exception");
			}			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	/**
	 * @param  	: 회원ID, 거래처코드
	 * @사용화면 	: OMG_DS_SC_5115
	 * @설명 	   	: 기본정보, 권한및서비스정보로 본부 및 사업장 변경
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/updateMBNot01")
	public void updateMBNot01(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		

		try {
			String chgAuthYn	 = requestHelper.getParameter("chgAuthYn");
			String MB_ID         = requestHelper.getParameter("mb_id");
			List<MbInfChgVO> basicInfoLst = requestHelper.getValueObjects(MbInfChgVO.class, requestHelper.getDataSet("ds_basicInfo"));	
			List<SvcAuth> svcAuthLst = requestHelper.getValueObjects(SvcAuth.class, requestHelper.getDataSet("ds_svcAuth"));
			
			MbInfChgVO basicInfo = basicInfoLst.get(0);			
			
			//TB_PD_MD_USR_INF에 존재 하는지 체크
			int checkM = mbInfChgService.checkM(MB_ID);
			
			mbInfChgService.updateMBNotType01(chgAuthYn, basicInfo, svcAuthLst, checkM, MB_ID);
			
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
		

	/**
	 * @param  	: 거래처코드
	 * @사용화면 	: OMG_DS_SC_5150
	 * @설명 	   	: 거래처코드에 해당하는 시장정보카테고리조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/retriveCtgrInfLst")
	public void retriveCtgrInfLst(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		
		String naTrplC  = requestHelper.getGlnCode();
		String sclfnm = requestHelper.getParameter("sclfnm"); 
				
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_result");
			dsHelper.addColumns(CategoryInfoNames.class);			
			List<Map<String,Object>> categoryInfoLst = mbInfChgService.retriveCtgrInfLst(naTrplC, sclfnm);
			for(Map<String,Object> categoryInfo : categoryInfoLst){
				dsHelper.setData(categoryInfo);
			}
			platformData.addDataSet(dsHelper.getDataSet());											
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	
	/**
	 * @param  	: 구분값,거래처코드,카테고리시퀀스,경제통합상품대분류코드,경제통합상품중분류코드,경제통합상품소분류코드 
	 * @사용화면 	: OMG_DS_SC_5150
	 * @설명 	   	: 구분값에에 해당하는 액션적용 
	 * 	구분값 : D [해지]
	 * 		  I [등록]
	 * 		  R [재등록]
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/saveCtgrInf")
	public void saveCtgrInf(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
				
		String status  = requestHelper.getParameter("status");
		String naTrplC  = requestHelper.getParameter("naTrplC");
		String crgrSeq  = requestHelper.getParameter("crgrSeq");
		String lclc  = requestHelper.getParameter("lclc");
		String mclc  = requestHelper.getParameter("mclc");
		String sclc  = requestHelper.getParameter("sclc");
		String updateUser  = requestHelper.getUserID();


		try {
			boolean success= mbInfChgService.saveCtgrInf(status,naTrplC,crgrSeq,lclc,mclc,sclc,updateUser);
			if(success){
				sendData(response, new PlatformData());
			}else{
				sendData(response, new PlatformData(), -99, "error.message.server.exception");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	/**
	 * @param  	: 거래처코드
	 * @사용화면 	: OMG_DS_SC_5150
	 * @설명 	   	: 거래처코드에 해당하는 시장정보카테고리조회 엑셀 다운로드
	 */
	@RequestMapping(method=RequestMethod.GET,value="/rest/excel/pt/downloadExcelRetriveCtgrInfLst")
	public void downloadExcelRetriveCtgrInfLst(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sclfnm = requestHelper.getParameter("sclfnm");	
			String naTrplC = requestHelper.getParameter("naTrplC");
			String fileName = "시장정보카테고리조회.xls";
			
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"번호",
					"대분류",
					"중분류",
					"소분류",
					"등록일",
					"해지일",
					"최종변경자"
			};
			String[] keyIndex = {
					"RN",
					"WRS_LCLFNM",
					"WRS_MCLFNM",
					"WRS_SCLFNM",
					"SVC_ST_DT",
					"SVC_ED_DT",
					"LS_CHGM_NM"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			mbInfChgService.downloadExcelRetriveCtgrInfLst(naTrplC, sclfnm, handler);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}	
	
	/**
	 * 지사 사업자번호 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/usrinf/retrieveBranchBzno")
	public void retrieveBranchBzno(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			String NA_TRPL_C = requestHelper.getGlnCode();
			
			BranchBznoVO vo = mbInfChgService.retrieveBranchBzno(NA_TRPL_C);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_branch_bzno");
			dsHelper.addColumns(BranchBznoVO.class);
			dsHelper.setData(vo);
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 지사 사업자번호 저장
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/usrinf/saveBranchBzno")
	public void saveBranchBzno(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			String NA_TRPL_C = requestHelper.getGlnCode();
			DataSet ds = requestHelper.getDataSet("ds_branch_bzno");
			
			if (ds.getRowCount() > 0) {
				BranchBznoVO vo = new BranchBznoVO();
				vo.setNA_TRPL_C(NA_TRPL_C);
				vo.setBZNO(ds.getString(0, "BZNO"));
				vo.setREPMNM(ds.getString(0, "REPMNM"));
				vo.setZIP(ds.getString(0, "ZIP"));
				vo.setDONGUP(ds.getString(0, "DONGUP"));
				vo.setDONGBW(ds.getString(0, "DONGBW"));
				vo.setBZCCNM(ds.getString(0, "BZCCNM"));
				vo.setBZTPNM(ds.getString(0, "BZTPNM"));
				vo.setMB_ID(requestHelper.getUserID());
				
				mbInfChgService.saveBranchBzno(vo);
				
				sendData(response, new PlatformData());
			} else {
				sendData(response, new PlatformData(), -1, "저장할 데이터가 없습니다.");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	/**
	 * 사용자정보제공동의내역 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/usrinf/retrieveUsrConsent")
	public void retrieveUsrConsent(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		
		String bsnDsc = requestHelper.getParameter("bsnDsc");
		String naTrplC  = requestHelper.getParameter("naTrplC");
		
		try {			
			/** 가격정보제공동의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_usrConsent");
			dsHelper.addColumns(UsrConsent.class);	
			Map<String,Object> usrConsent = mbInfChgService.retrieveUsrConsent(bsnDsc, naTrplC);
			if(usrConsent != null){

			}
		    dsHelper.setData(usrConsent);
			platformData.addDataSet(dsHelper.getDataSet());
						
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	/**
	 * 사용자정보제공동의 건수
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/usrinf/retrieveUsrConsentCount")
	public void retrieveUsrConsentCount(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		
		String bsnDsc = requestHelper.getParameter("bsnDsc");
		String naTrplC  = requestHelper.getParameter("naTrplC");
		Map<String, Object> usrConsentCount;
		
		try {			
			/** 가격정보제공동의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_usrConsentCount");
			dsHelper.addColumns(UsrConsentCount.class);	
			usrConsentCount = mbInfChgService.retrieveUsrConsentCount(bsnDsc, naTrplC);
			
		    dsHelper.setData(usrConsentCount);
			platformData.addDataSet(dsHelper.getDataSet());
						
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	

	/**
	 * 사용자정보제공동의내역 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/usrinf/saveUsrConsent")
	public void saveUsrConsent(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String bsnDsc     = requestHelper.getParameter("bsnDsc");
		String naTrplC    = requestHelper.getParameter("naTrplC");
		String mbId       = requestHelper.getUserID();
		String consentYN  = requestHelper.getParameter("consentYN");
		UsrConsentVO usrConsentVO = new UsrConsentVO();
		
		usrConsentVO.setBSN_DSC(bsnDsc);
		usrConsentVO.setNA_TRPL_C(naTrplC);
		usrConsentVO.setMB_ID(mbId);
		usrConsentVO.setCONSENT_YN(consentYN);

		try {
			
			boolean success= mbInfChgService.insertUsrConsent(usrConsentVO);
			
			if(success){
				sendData(response, new PlatformData());
			}else{
				sendData(response, new PlatformData(), -99, "error.message.server.exception");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	
}
