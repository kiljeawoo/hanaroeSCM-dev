package com.nh.escm.scm.delivery.helper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.validation.ValidationHandler;
import com.nh.escm.scm.delivery.validation.impl.DeliveryNoticeTypeValidator;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeTypeVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderDetailVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderVO;

/****************************************************************************************************** 
 * 2019.06.14 최영신
 * 수주기반 배송예정서 자동생성 클래스
 * 
 * 가능한 POJO 로 구현 
 * 프레임웍 독립적으로 구현할 것
 * 
 ******************************************************************************************************/

public class OrderBaseDeliveryNotice {
	
    /* **************************************************************************************************** 
     * 
     * 
     * 
     * ****************************************************************************************************/
	//@Autowired
	// private SequenceKeyService seqKeyService;
	

	private final Log logger = LogFactory.getLog(getClass());
	
	SessionBox sessionBox;
	
	private String trplC;
	private Map<String, Object> param;
	
	Report finalReport;

	
	String spyplNaTrplC    ;  // 공급처코드      
	String dvyaaNaTrplC    ;  // 배송지코드      
	String naDvyPlashSlpno ;  // 배송예정서 전표번호 
	String dvyPlaDt        ;  // 배송예정일      
	                       ;                
	String odrplNaTrplC    ;  // 발주처코드      
	String odrplNaTeamC    ;  // 발주처팀코드     
	String odrDt           ;  // 발주일        
	String odrSlpno        ;  // 발주전표번호     
	

	String editType        ;
	
	
    /* **************************************************************************************************** 
     * 
     * Create delivery notice dataset from order dataset 
     * 
     * ****************************************************************************************************/

	public OrderBaseDeliveryNotice() {
 
	}
	
    /* **************************************************************************************************** 
     * 
     * 
     * 
     * ****************************************************************************************************/
	public OrderBaseDeliveryNotice(DataSet dsM, DataSet dsD) {


	}

	public OrderBaseDeliveryNotice(SessionBox sessionBox) {
		// 세션정보 
    	this.sessionBox = sessionBox;

	}
	
    /* **************************************************************************************************** 
     * 
     * Map<String, Object> 을 인수로하는 컨스트럭터
     * 
     * ****************************************************************************************************/
	public OrderBaseDeliveryNotice(Map<String, Object> param) {
		
		this.param          = param;
		this.sessionBox     = (SessionBox) param.get("sessionBox") ;
		this.trplC          = param.get("trplC").toString()        ; // 화면에서 선택한 권한사업장
	}

	/* **************************************************************************************************** 
     * 
     * 수주 식별자를 받아서 수주정보를 조회하여 데이터셋 리스트로 리턴함
     * /rest/scm/delivery/getOrder 카피하여 만
     * ****************************************************************************************************/
	public DataSetList getOrder(Map<String, Object> param, DeliveryNoticeService deliveryNoticeService) {
				
		/* **************************************************************************************************** 
	     * 
	     * 수주 식별자. PK
	     * 
	     * ****************************************************************************************************/
		String odrplNaTrplC = param.get("ODRPL_NA_TRPL_C").toString();
		String odrplNaTeamC = param.get("ODRPL_NA_TEAM_C").toString();
		String odrDt        = param.get("ODR_DT").toString();
		String odrSlpNo     = param.get("ODR_SLPNO").toString();
		
		String ddlyYn       = param.get("DDLY_YN").toString();
		
		this.sessionBox     = (SessionBox) param.get("sessionBox");

		/* **************************************************************************************************** 
	     * 
	     * com.nexacro.xapi.data.DataSetList
	     * 이것도 기본적으로  ArrayList 이지만 기존 프로그램과 호환성 보장을 위해 DataSetList 를 그대로 쓴다. 
	     * 
	     * ****************************************************************************************************/
		DataSetList dsList  = new DataSetList(); 

		try {
			NoticeOrderVO vo = deliveryNoticeService.getOrder(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo, ddlyYn);
			
			//수주정보
			if (vo != null){
				vo.setSLGT_ETR_DSC("1"); // 기본값 매취
				
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(NoticeOrderVO.class);
				dsHelper.setData(vo);
				
				dsList.add(dsHelper.getDataSet()); // 수주마스터 데이터셋 세팅
			}
			
			//발주상세정보
			List<NoticeOrderDetailVO> list = deliveryNoticeService.getOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo, null, ddlyYn);
			
			if(list != null){
				
				DataSetHelper dsHelper = new DataSetHelper("ds_dataD");
				dsHelper.addColumns(NoticeOrderDetailVO.class);
				
				for(NoticeOrderDetailVO detailVo : list){
					dsHelper.setData(detailVo);
				}

				dsList.add(dsHelper.getDataSet()); 
			}
			
		} catch (AppetizerException e) {
			logger.error("########## odrSlpNo : "     + odrSlpNo);
			logger.error("########## odrplNaTrplC : " + odrplNaTrplC);
			logger.error("########## odrplNaTeamC : " + odrplNaTeamC);
			logger.error("########## odrDt : "        + odrDt);
			logger.error(e.getMessage(), e);
			
			// sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
		return dsList;

		
	}


	/* **************************************************************************************************** 
     * 
     *  저온발주서 분리
     * 
     * ****************************************************************************************************/
	private List<DataSet> getColdDeliveryNotice(DataSet dsM, DataSet dsD) {
		
		List<DataSet> dsList = new ArrayList<DataSet>();
		//저온배송예정서 처음 작성한 경우
		VOConvertHelper voCon = VOConvertHelper.newInstance(dsM, dsD);
		
		dsList = voCon.seperateDataSet(dsD);	// 발주처가 신선인 경우 TB_GD_WRS.NA_WRS_CSTD_METC(경제통합상품보관방식코드)에 따라 배송예정서를 분리한다.

		if(logger.isDebugEnabled()){
			logger.debug("저온 배송예정서 분리 Processing...");
			logger.debug("DataSet Detail : " + dsList.size());
		}
		
		return dsList;
	} // getColdDeliveryNotice
	



	/* **************************************************************************************************** 
     * 
     * 수주 내역 데이터셋을 받아 배송예정서 자동생성
     * 
     * ****************************************************************************************************/
	public Report validateMultiDeliveryNotice(DataSetList orderDsList, DeliveryNoticeService deliveryNoticeService) {

		try {

			DataSet dsM 			    = orderDsList.get("ds_dataM");                              // 수주정보 
			DataSet dsD 			    = orderDsList.get("ds_dataD");                              // 수주상세정보
			String  editType 		    = this.param.get("editType").toString();                    // X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주 배송예정서 작성
			
			// DeliveryNoticeTypeValidator 에서 세팅  this.rogoInfCrtDsc = dsM.getString(0, "ROGO_INF_CRT_DSC");
		    String rogoInfCrtDsc          = this.param.get("rogoInfCrtDsc").toString();               // 01 : 일반 발주, 03 : 행사 발주. 무조건 01임. 발주서 정보를 쓴다
			
			String  isDirectNotcieOrder = this.param.get("isDirectNotcieOrder").toString();         // 직송여부
			String ddlyYn = this.param.get("DDLY_YN").toString(); // 직송여부(데이터셋)
			String  trplC               = this.trplC   ;                                            // 화면에서 선택한 권한사업장 코드 
			
			// boolean isCold = false; //저온여부  // 저온여부 유효성 체크시 설정. 
			// boolean isSave = true; // 위치 옮김  // 유효성 체크 완료 구분자 

			/* **************************************************************************************************** 
		     * 
		     * Security policy : 보안체크
		     * 1. 가공장 사업장코드 직접로그인하여 배송예정서 작성 방지. 
		     * 
		     * ****************************************************************************************************/

			/* **************************************************************************************************** 
		     * 
		     * 처리할 배송예정서 데이터셋 리스트
		     * 
		     * ****************************************************************************************************/
						
			//Master		
			if(dsM != null && dsM.getRowCount() > 0){
				
				if(logger.isDebugEnabled()){
					switch (editType) {
						case "X":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 미작성 ]");
							break;
						case "Y":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 임시저장 ]");
							break;
						case "N":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 작성완료 ]");
							break;
						case "E":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 무발주 배송예정서 ]");
							break;
					}
					logger.debug(">>>>>>>>>>>>>>>>> 권한사업장     : [ " + trplC               + " ]");
					logger.debug(">>>>>>>>>>>>>>>>> 직송여부        : [ " + isDirectNotcieOrder + " ]");
					logger.debug(">>>>>>>>>>>>>>>>> 권한사업장     : [ " + trplC               + " ]");
				}
				
				/* ***************************************** START ****************************************************/
				// 화면에서 배송예정서 작성시  수주처 정보, 직송여부 공백 방지. 발주참조 일괄 작성시는 별 의미 없음
				
				this.setRvoplNaTrplC(dsM, ddlyYn);

				/* ***************************************** END ******************************************************/

				/* **************************************************************************************************** 
				 * 
				 * 배송예정서 타입 체크: R1, R2, 직송, 저온
				 * dsM 수주마스터, dsD 수주상세 
				 * ****************************************************************************************************/
				DeliveryNoticeTypeValidator typeValidator   = new DeliveryNoticeTypeValidator(dsM, dsD, deliveryNoticeService);
				Report noticeTypeReport                     = typeValidator.validate();
				// 저온배송예정서일 경우. 
				Map<String, Object> resultMap               = noticeTypeReport.getResultMap();
				// 배송예정서 타입 정보 받기
				DeliveryNoticeTypeVO deliveryNoticeTypeVO   = (DeliveryNoticeTypeVO)resultMap.get("TypeVO");
				
				/* **************************************************************************************************** 
				 * 
				 * 배송예정서 데이터 보정
				 * 유효성 검증전 데이터 보정
				 * 이부분은 아직 안쓰고 있으나 Helper 등에 산재되어 임의 로  데이터 하드코딩하는 로직은 이곳으로 모아야 함. 
				 * 
				 * ****************************************************************************************************/
//				DataCorrection dc = new DeliveryNoticeCorrection(dsM, dsD, deliveryNoticeTypeVO);
//				Report dcReport = dc.correct();

				/* **************************************************************************************************** 
				 * 
				 * 유효성검증 
				 * 
				 * ****************************************************************************************************/
				this.finalReport = this.validate(dsM, dsD, deliveryNoticeTypeVO, deliveryNoticeService);
								
				// 유효성검증이 되지 않은 경우 저장하지 않는다. 
				/****************************************** Validation Check Start!! ******************************************/
				/****************************************** 여기있던  validation 롷직은 Validator 클래스로 불리함****************************/
				/* ************************************************************************************************************
				//         !!!!!!!!!!!!!!!!!                  여기는 원래 주석이었음                      !!!!!!!!!!!!!!!!!!!!!!!!!!!!
				// 				// for Test
				//				if (isSave) {
				//					isSave = false;
				//					sendData(response, new PlatformData(), -999, "[테스트] 배송예정서 작성 차단하려면 주석해제");
				//				}
				   **********************************************************************************************************/
				/****************************************** Validation Check End!! ******************************************/

			} // if(dsM != null && dsM.getRowCount() > 0){
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			//  sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} // try
		
		
		return this.finalReport;
	} // validateMultiDeliveryNotice


	/* **************************************************************************************************** 
     * 
     * 유효성검증
     * 
     * ****************************************************************************************************/
	private Report validate(DataSet dsM, DataSet dsD, DeliveryNoticeTypeVO deliveryNoticeTypeVO, DeliveryNoticeService deliveryNoticeService) {
		
		/* **********************************************************************
		 * 
		 * 유효성검증 수행
		 * 유효성검증 보고서가 세팅되지 않으면 저장이 되지 않는다. 
		 * **********************************************************************/
		ValidationHandler validationHandler  = new ValidationHandler(sessionBox, dsM, dsD, deliveryNoticeTypeVO, deliveryNoticeService);
		Report finalReport                   = validationHandler.validateAll();
		
		this.setValidationReport(finalReport);   
		
		return finalReport;
		
	}

	/* **************************************************************************************************** 
     * 
     *  유효성 검증 최종 보고서 
     * 
     * ****************************************************************************************************/
	public void setValidationReport(Report finalReport) {
		// 
		this.finalReport = finalReport;
		
	} //  setValidationReport
	
	
	/* **************************************************************************************************** 
     * 
     * 최종 유효성검증 성공여부 
     * 
     * ****************************************************************************************************/
	public Report getValidationReport() {
		
		
		//유효성검증이 수행되지 않은 경우 false 로 Report 세팅 
		if( this.finalReport == null){
			
			this.finalReport = new Report();
			this.finalReport.setValid(false);
		}
		
		return this.finalReport;
	}
	
	
	/* **************************************************************************************************** 
	 * 직송 수주처코드 , 직송여부 칼럼 공백방지 로직
	 * 일반 배송예정서인 경우(직송여부정보가 공백일 경우) 수주정보의 수주처코드가 공백이면 화면에서 선택된 권한사업장코드를 수주처코드로 설정해 준다. 일괄작성인경우 수주처정보 조회시 자동으로 세팅되어 넘오옴  
	 * 선택된 권한사업장이 없으면 세션의 권한사업장.
	 * ****************************************************************************************************/
	private void setRvoplNaTrplC(DataSet dsM, String isDirectNotcieOrder) {


		if(!"1".equals(isDirectNotcieOrder)){
			//일반
			if(StringUtils.isEmpty(dsM.getString(0, "RVOPL_NA_TRPL_C"))){
				if(StringUtils.isNotEmpty(trplC)){
					dsM.set(0, "RVOPL_NA_TRPL_C", trplC);
				}else{
					dsM.set(0, "RVOPL_NA_TRPL_C", sessionBox.getGlnCode() ); // requestHelper.getGlnCode()
				}
			}
			dsM.set(0, "DDLY_YN", 0);
		}else{
			dsM.set(0, "DDLY_YN", 1);
		}
		
		// 수주처 팀코드 공백시 기본값 설정: 00 없음
		if(StringUtils.isEmpty(dsM.getString(0, "RVOPL_NA_TEAM_C"))){
			dsM.set(0, "RVOPL_NA_TEAM_C", "00");
		}
		
	} // setRvoplNaTrplC

	public Report saveOrderBaseMultiDeliveryNotice(DataSetList orderDsList, PlatFormRequestHelper requestHelper, DeliveryNoticeService deliveryNoticeService, SequenceKeyService seqKeyService, SentCheckService sentCheckService) {
		

		DataSet dsM 			    = orderDsList.get("ds_dataM");
		DataSet dsD 			    = orderDsList.get("ds_dataD");
		String  editType 		    = this.param.get("editType").toString();                    // X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주 배송예정서 작성
		/* **************************************************************************************************** 
		 * 수발주정보생성구분코드
		 * TB_OD_ORDER_M.ROGO_INF_CRT_DSC 
		 * 발주참조인 경우 
		 * 무발주 01
		 * ****************************************************************************************************/
		/* **************************************************************************************************** 
		 *      
		 * 수발주정보생성구분코드
		 * TB_OD_ORDER_M.ROGO_INF_CRT_DSC 
		 * 
		 * TB_OD_DLVPNSHT_M.DVY_PLASH_KDC	배송예정서종류코드   
		 *   01	일반배송예정서                                 
		 *   02	덤배송예정서                                  
		 *   03	주류배송예정서                                 
		 *   04	농식품수기등록                                 
		 *   05	직송배송예정서(자재)                             
		 *   06	판촉행사배송예정서(구매)                           
		 *   99	기타                                      
		 * 
		 * 01, 03 구분은 자체적으로 해서 쓰는 듯함. 공통코드상 행사 배송예정서 종류코드는 03 임 
		 * ****************************************************************************************************/
		String  rogoInfCrtDsc          = this.param.get("rogoInfCrtDsc").toString();               // 01 : 일반 발주, 03 : 행사 발주. 무조건 01임

		//TODO : swha 삭제대상. 기존에는 무조건 01을 박고 있었음. 무말주는 01로하는 것도 맞음 
		// rogoInfCrtDsc = "01";
	    
		String  isDirectNotcieOrder = this.param.get("isDirectNotcieOrder").toString();         // 직송여부
		String  trplC               = this.trplC   ;                                            // 화면에서 선택한 권한사업장 코드 

		Report finalReport =  this.getValidationReport();

		DeliveryNoticeTypeVO deliveryNoticeTypeVO = (DeliveryNoticeTypeVO)finalReport.getResultMap().get("deliveryNoticeTypeVO");
		
		int    errorCode    = 0;
		String errorMessage = "";
		
		Report errorReport = new Report();

		/* **************************************************************************************************** 
		 * 저온배송예정서 분리된 데이터셋 을 받아야 한다. 
		 * 저온일경우 배송예정서 분리
		 * 최초작성일 경우만 분리한다. 
		 * 
		 * ****************************************************************************************************/

		/* **************************************************************************************************** 
		 * 
		 * 저온 수주내역 분리. 보관상태에 따라 상온, 저온(냉동, 냉장) 에 따라 수주내역을 분리하고 배송예정서도 따로 작성한다 
		 * 여기서 dsList 는 상세데이터넷 리스트임 : DataSet dsD 			    = requestHelper.getDataSet("ds_dataD");
		 * 
		 * ****************************************************************************************************/
		
		List<DataSet> dsList = new ArrayList<DataSet>(); // 데이터셋 상세 리스트

		//저온배송예정서 여부 
		if(deliveryNoticeTypeVO.isCold() == true){
			
			// 저온배송예정서는 보광상태에 따라 분리
			dsList = this.getColdDeliveryNotice(dsM,dsD);
		}else{
			
			// 일반배송예정서는 그대로 담는다. 
			dsList.add(dsD);
		}

		/*************************************************  저장시작 !! *************************************************/

		if (finalReport.isValid() == true) {
						
			/* **************************************************************************************************** 
			 * 
			 * 발주서의 임시저장여부 칼럼을 N으로 설정해야 저장 조직을 탐. 
			 * 
			 * ****************************************************************************************************/
			
			/******************************************************************************************************/
			dsM.set(0, "TEMP_YN", "N"); // set(int rowIndex, String columnName, Object value);
			
			String list = "";
			
			for(int i = 0; i < dsList.size(); i++){
				

				/******************************************************************************************************/
								
				List<NoticeOrderVO> noVoList 		= requestHelper.getValueObjects(NoticeOrderVO.class, dsM);
				
				/* **************************************************************************************************** 
				 * 
				 * VOConvertHelper.makeSaveNoticeOrderVO
				 * VOConvertHelper.insertDeliveryNoticeOrder 에서 
				 * 혁신점보, PB직송 체크하여 배송예정서 생성구분자 세팅. DVY_PLASH_CRT_DSC : 001 002, PBDDLY_YN : 0 1
				 * ****************************************************************************************************/

				VOConvertHelper voConverHelper 	       = VOConvertHelper.newInstance(requestHelper, dsM, dsList.get(i), deliveryNoticeService, seqKeyService, rogoInfCrtDsc, editType);
				List<DeliveryNoticeOrderVO> convertVO  = voConverHelper.getDeliveryNoticeOrderVoList();
								
				/*
				 * 여기까지 데이터 흐름 모니터링. 
				 * 완료시 주석 해제 
				 * 
				 */
				/* **************************************************************************************************** 
				 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				 * 발주서의 임시저장여부 칼럼을 N으로 설정해야 저장 조직을 탐. 
				 * 현재 무조건 true 를 리턴하게 되어 있음
				 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				 * ****************************************************************************************************/

				deliveryNoticeService.saveDeliveryNoticeOrder(editType, rogoInfCrtDsc, noVoList.get(0), convertVO); // 
				
								
				/* **************************************************************************************************** 
				 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				 * 저장끝
				 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				 * ****************************************************************************************************/
				
				if(StringUtils.isEmpty(dsM.getString(0, "TEMP_YN"))){

					/* ****************************************************************************************************
					 *  
					 * 에러메시지 처리 필요
					 * 
					 * ****************************************************************************************************/
					// sendData(response, new PlatformData(), -1, "validation.message.no.parameter");

					errorCode = -1;
					errorMessage = "validation.message.no.parameter";
				}
				
				if(StringUtils.equals("N", dsM.getString(0, "TEMP_YN"))){
					
					try {
						
						String IDU = "I";
						
						if(convertVO != null && convertVO.size() >0) {
							IDU = convertVO.get(0).getWK_DS();
						}
						
						/*
						 * 
						 * 배송예정서 전송상태 체크 
						 * 
						 */
						String successMessage = sentCheckService.dlvpnshtCheckSendState(
								noVoList.get(0).getSPYPL_NA_TRPL_C(),
								noVoList.get(0).getDVYAA_NA_TRPL_C(),
								voConverHelper.getNaDvyPlashSlpno(),
								noVoList.get(0).getDVY_PLA_DT(),
								"처리", 
								IDU);
						
						
						if(i > 0){
							list = list + "|"  + voConverHelper.getNaDvyPlashSlpno();
						}else{
							list = successMessage;
						}
						
						if(i == dsList.size()-1){
							
							/* ****************************************************************************************************
							 *  
							 * 에러메시지 처리 필요
							 * 
							 * ****************************************************************************************************/
							// sendData(response, out_PlatformData, 0 , list); // Report 에 전송 메시지를 담는다. 

							errorCode = 0;
							errorMessage = successMessage;
						}
						
					} catch (NHSentErrorException e) {
						
						String eb = e.getMessage();
						
						/* ****************************************************************************************************
						 *  
						 * 에러메시지 처리 필요
						 * 
						 * ****************************************************************************************************/
						// sendData(response, out_PlatformData, -999, eb);
						errorCode = -999;
						errorMessage = eb;
					}
				}else {
					String msg = 		    "공급처 :    [" + noVoList.get(0).getSPYPL_NA_TRPL_C() + "] \n"
										+	"배송처 :    [" + noVoList.get(0).getDVYAA_NA_TRPL_C() + "] \n"
										+ 	"배송전표번호 : [" + voConverHelper.getNaDvyPlashSlpno()  + "] \n"
										+ 	"배송일자 :   [" + noVoList.get(0).getDVY_PLA_DT()      + "] 가 임시저장되었습니다.";
					
					/* ****************************************************************************************************
					 *  
					 * 에러메시지 처리 필요
					 * 
					 * ****************************************************************************************************/
					// sendData(response, out_PlatformData, 0, msg);
					errorCode = 0;
					errorMessage = msg;
				}
			} // for
			
			
		}	// finalReport.isValid(). if (isSave)  오류가 아닌 경우 저장
		
		errorReport.setValid(true);
		errorReport.setStatus("SUCESS");
		errorReport.setNumCode(errorCode);
		errorReport.setMessage(errorMessage);
		
		
		return errorReport;
	} // saveMultiDeliveryNotice


} // End of class
