package com.nh.escm.scm.delivery.validation.impl;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.DateUtil;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.validation.Validator;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeTypeVO;

/****************************************************************************************************** 
 * 
 * 2019.06.14 최영신
 * 
 * 배송예정서 유효성검증 클래스
 * 
 ******************************************************************************************************/

public class DeliveryNoticeValidator implements Validator {
	@Autowired
	private DeliveryNoticeService deliveryNoticeService;

	DataSet dsM;
	DataSet dsD;
	
	String spyplNaTrplC    ;  // 공급처코드      
	String dvyaaNaTrplC    ;  // 배송지코드      
	String naDvyPlashSlpno ;  // 배송예정서 전표번호 
	String dvyPlaDt        ;  // 배송예정일      
	                       ;                
	String odrplNaTrplC    ;  // 발주처코드      
	String odrplNaTeamC    ;  // 발주처팀코드     
	String odrDt           ;  // 발주일        
	String odrSlpno        ;  // 발주전표번호     
	
	List<Map<String, Object>> odrDList ; // 발주정보리스트
	
	DeliveryNoticeTypeVO deliveryNoticeTypeVO;

	public DeliveryNoticeValidator(SessionBox sessionBox, DataSet dsM, DataSet dsD, DeliveryNoticeTypeVO deliveryNoticeTypeVO) {
        this.dsM = dsM;
        this.dsD = dsD;
        
		spyplNaTrplC = dsM.getString(0, "SPYPL_NA_TRPL_C"); // 공급처코드
		dvyaaNaTrplC = dsM.getString(0, "DVYAA_NA_TRPL_C"); // 배송지코드
		naDvyPlashSlpno = dsM.getString(0, "NA_DVY_PLASH_SLPNO"); // 배송예정서 전표번호
		dvyPlaDt = dsM.getString(0, "DVY_PLA_DT"); // 배송예정일

		odrplNaTrplC = dsM.getString(0, "ODRPL_NA_TRPL_C"); // 발주처코드
		odrplNaTeamC = dsM.getString(0, "ODRPL_NA_TEAM_C"); // 발주처팀코드
		odrDt = dsM.getString(0, "ODR_DT"); // 발주일
		odrSlpno = dsM.getString(0, "ODR_SLPNO"); // 발주전표번호
		
		this.deliveryNoticeTypeVO = deliveryNoticeTypeVO;
	}

	@Override
	public Report validate() {
		Report validationReport = new Report();  // 유효성검증 결과.
		
		/*****************************************************************************************************
		 * 무발주 배송예정서 허용 체크
		 *****************************************************************************************************/
		Report noOrderReport = this.checkNoOrderDeliveryNotice();
		if (noOrderReport.isValid() == false) {
			return noOrderReport;
		}
		
		/***************************************************************************************************** 
	     * 배송예정일 체크 
	     *  R1 발주참조 배송예정서 수주 내역 상품상세내역 검증
	     *****************************************************************************************************/
		Report dvyPlaDtReport = this.checkDvyPlaDt();
		if (dvyPlaDtReport.isValid() == false) {
			return dvyPlaDtReport;
		}
		
		/***************************************************************************************************** 
	     * 직송배송예정서는 일괄등록 막는다
	     * 향후 필요시 개발/테스트하여 허용 (허용 19/08/20)
	     *****************************************************************************************************/
		Report directDeliveryReport = this.checkDdly();
		if (directDeliveryReport.isValid() == false) {
			// return directDeliveryReport;
		}
		
		/***************************************************************************************************** 
	     * 혁신, PB직송 막기. PB직송. pb
	     * 혁신, PB직송 배송예정서는 일괄등록 막는다
	     * 향후 필요시 개발/테스트하여 허용 (허용 19/08/20)
	     * 
	     * 하나로 eSCM 인터페이스 설계서입니다.
		 * 최영신부장 님 및 서상익 차장님에게 전달 부탁드립니다.
		 * 
		 * DP006  
		 * PBDDLY_YN        : PB직송여부
		 * ROGO_INF_CRT_DSC : 배송예정서생성구분   추가해주시면 됩니다.
		 * 
		 * 1. PB직송발주
		 * TB_NA_DP_OM_OD_ORDER 테이블에
		 *  ROGO_INF_CRT_DSC : 245 값이  PB직송발주 입니다.
		 * 배송예정서 송신시 TB_NA_DP_OM_DP_DLVPNSHT -  PBDDLY_YN : 1 (여) 세팅해주시면 됩니다.
		 * null 수신시 0 (부)  들어갑니다. 
		 *  
		 * 
		 * 2. 혁신점포발주
		 * 
		 * TB_NA_DP_OM_OD_ORDER 테이블에
		 * 컬럼 ROGO_INF_CRT_DSC : 243 값이  혁신점포 입니다.
		 * 배송예정서 송신시 TB_NA_DP_OM_DP_DLVPNSHT - ROGO_INF_CRT_DSC : 002 (혁신배송예정서) 세팅해주시면 됩니다.
		 * null 수신시 001(일반배송예정서) 들어갑니다. 
	     *****************************************************************************************************/
		Report renovShnopOrderReport = this.checkRenovShnopOrder();
		if (renovShnopOrderReport.isValid() == false) {
			// return renovShnopOrderReport;
		}
		
		/***************************************************************************************************** 
	     * PB직송이면서 일반발주이거나 혁신점포발주 일주 있다. 현시점에는 그냥 막기만 함. 
	     * 향후 필요시 개발/테스트하여 허용 (허용 19/08/20)
	     *****************************************************************************************************/
		Report pbDdlyOrderReport = this.checkPbDdlyOrderYn();
		if (pbDdlyOrderReport.isValid() == false) {
			// return pbDdlyOrderReport;
		}
		
		// 모든 validation 이 에러없이 수행되었다면 유효성 검증 성공
		validationReport.setValid(true);
		validationReport.setStatus("SUCESS");
		validationReport.setMessage("배송예정서 유효성검증 완료.");
		
		return validationReport;
	}

	/***************************************************************************************************** 
     * 배송예정일 검증 로직
     * 배송예정일 검증 
     *  14일 이전 작성
     *  과거날짜 작성 제한은 없음
     *  배송예정서 수정시 배송예정일 변경불가 메시지 출력: 실제 배송예정일 UPDATE SQL 존재하지 않음
     *  수주정보의 배송요청일과 배송예정서으 배송예정서 일치여부 : checkOrderStat 에서 수행
     *****************************************************************************************************/
	private Report checkDvyPlaDt() {
		Report validationReport = new Report(); // 유효성검증 결과.

		// 배송예정서 공통: R1, R2 전체
		// 배송예정일인 +15일을 넘어가면 작성X (20171222)
		String d15Date = DateUtil.convertDateToString("yyyyMMdd", DateUtil.getCurrentDate());

		if (DateUtil.getDifferDate(d15Date, dvyPlaDt) > 15) {
			// isSave = false;
			// sendData(response, new PlatformData(), -999, "배송예정일은 현재날짜보다 15일 이후로 작성할 수 없습니다.");
			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("배송예정일은 현재날짜보다 15일 이후로 작성할 수 없습니다.");

			return validationReport;
		}
		
		/* **************************************************************************************************** 
	     * R2, 저온  배송예정서 수정시  배송예정일 변경여부 체크  체크
	     * 배송예정서 수정시 배송예정일 변경여부를 체크하려는 의도로 보임. 
	     * 배송예정일 변경시 배송예정서 정보가 조회되지 않으므로 이를 이용한 메시지 출력. 
	     * R2 배송예정서 전표번호가 존재하는 경우 (공백이 아닌경우) 이면 배송예정일이 공백일 수 업고, 
	     * 실제로 배송예정일을 UPDATE 하는 SQL은 존재하지 않음. 
	     * 
	     * ****************************************************************************************************/
		if (this.deliveryNoticeTypeVO.isR1() == false) {
			if (StringUtils.isEmpty(naDvyPlashSlpno) == false) { // 배송예정서 참조인 경우
				String DVY_PLA_DT = deliveryNoticeService.getDvyPlaDt(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, dvyPlaDt);

				if (StringUtils.isEmpty(DVY_PLA_DT)) {
					// isSave = false;
					// sendData(response, new PlatformData(), -999, "배송예정일을 변경하여 작성할 수 없습니다.");
					validationReport.setValid(false);
					validationReport.setStatus("ERROR");
					validationReport.setNumCode(-999);
					validationReport.setMessage("배송예정일을 변경하여 작성할 수 없습니다.");

					return validationReport;
				}
			} // if
		}
		
		// 배송예정일체크
		validationReport.setValid(true);
		validationReport.setStatus("SUCESS");
		validationReport.setMessage("배송예정일 유효성검증 완료.");

		return validationReport;
	}

	
	/* **************************************************************************************************** 
     * 
     * 무발주 배송예정서 작성 가능여부 체크 
     * R1:  불가
     * R1 직송: 가능
     * 저온배송예정서: 가능. 안성물류센터, 기타 저온 물류센터
     * R2: 무발주 배송예정서 작성 가능
     * 
     * ****************************************************************************************************/
	private Report checkNoOrderDeliveryNotice() {
		Report validationReport = new Report();  // 유효성검증 결과.
		
		// R1 배송예정서일 경우 무발주 배송예정서 작성 방지 
		if( this.deliveryNoticeTypeVO.isR1() == true ){
			
			//발주서. 
			if (StringUtils.isEmpty(odrSlpno) || "undefined".equals(odrSlpno)) {
				
				// 1st. R1 이고, 무발주(수주번호가 없음)인 경우
				
				// isSave = false;
				// sendData(response, new PlatformData(), -999, "R1 배송예정서 등록시 무발주로 작성할 수 없습니다.");
				
				validationReport.setValid(false);
				validationReport.setStatus("ERROR");
				validationReport.setNumCode(-999);
				validationReport.setMessage("R1 배송예정서 등록시 무발주로 작성할 수 없습니다.");

		   } else {
				// R1 발주참조인경우
				validationReport.setValid(true);
				validationReport.setStatus("SUCESS");
				validationReport.setMessage("발주참조 R1 배송예정서 입니다. 배송예정서 작성 가능합니다. ");
			} // if
		}else{
			// R1 이 아닌경우 
			validationReport.setValid(true);
			validationReport.setStatus("SUCESS");
			validationReport.setMessage("R1 배송예정서가 아닙니다. 무발주 배송예정서 작성 가능합니다. ");
		}

		return validationReport;
	} // checkNoOrderDeliveryNotice

	/* **************************************************************************************************** 
     * 
     * 직송배송예정서 체크 
     * R1:  불가
     * R1 직송: 가능
     * 저온배송예정서: 가능. 안성물류센터, 기타 저온 물류센터
     * R2: 무발주 배송예정서 작성 가능
     * 
     * ****************************************************************************************************/
	private Report checkDdly() {
		Report validationReport = new Report(); // 유효성검증 결과.

		// 직송방지
		if (this.deliveryNoticeTypeVO.isDirectDelivery() == true) {
			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("직송배송예정서는 일괄작성할 수 없습니다.");
		} else {
			validationReport.setValid(true);
			validationReport.setStatus("SUCESS");
			validationReport.setMessage("직송 배송예정서가 아닙니다. 일괄작성 가능합니다. ");
		}

		return validationReport;
	}

	/* **************************************************************************************************** 
     * 
     * PB직송배송예정서 체크
     * 
     * ****************************************************************************************************/
	private Report checkPbDdlyOrderYn() {
		Report validationReport = new Report(); // 유효성검증 결과.

		// PB직송방지
		if (this.deliveryNoticeTypeVO.isPbddlyYn() == true) {
			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("PB직송배송예정서는 일괄작성할 수 없습니다.");
		} else {
			validationReport.setValid(true);
			validationReport.setStatus("SUCESS");
			validationReport.setMessage("PB 직송 배송예정서가 아닙니다. 일괄작성 가능합니다. ");
		}

		return validationReport;
	}
	
	/***************************************************************************************************** 
     * 
     * 혁신배송예정서 체크 
     * 
     * ****************************************************************************************************/
	private Report checkRenovShnopOrder() {
		Report validationReport = new Report(); // 유효성검증 결과.

		if (this.deliveryNoticeTypeVO.isRenovShop() == true) {
			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("혁신점포배송예정서는 일괄작성할 수 없습니다.");
		} else {
			validationReport.setValid(true);
			validationReport.setStatus("SUCESS");
			validationReport.setMessage("혁신점포 배송예정서가 아닙니다. 일괄작성 가능합니다. ");
		}

		return validationReport;
	}
} // class

/*
 * 
 * 
 * 화면 저장  함수 
	// 저장 
	this.fn_save = function(){
		var dsParams = "";
		var params = "";
		var temp_yn = this.gfn_nullToEmpty(this.chk_temp_yn.value);
		if(temp_yn == ""){
			temp_yn = "N";
		}
		
		this.ds_dataM.setColumn(0, "TEMP_YN", temp_yn);
		
		
		// 배송예정서 작성 형태 저장 
		if(var_dlvpnsht_temp_yn == "Y" || var_dlvpnsht_temp_yn == "N"){//임시저장, 작성완료
			params = " editType="+var_dlvpnsht_temp_yn
					 + " spypl_na_trpl_c=" + var_spypl_na_trpl_c
					 + " dvyaa_na_trpl_c=" + var_dvyaa_na_trpl_c
					 + " na_dvy_plash_slpno=" + var_na_dvy_plash_slpno
					 + " temp_yn=" +  temp_yn;
			
		}else{
			params = " editType="+var_dlvpnsht_temp_yn
					+ " orpl_na_trpl_c=" + this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value)
					+ " temp_yn=" +  temp_yn
					+ " trplC=" + this.gfn_nullToEmpty(this.getTrplCode());
		}
		
		this.ds_dataM.addColumn("DDLY_YN", "string", 1);
		this.ds_dataM.setColumn(0, "DDLY_YN", "0");
		this.ds_dataM.addColumn("PBDDLY_YN", "string", 1); // PB직송 No
		this.ds_dataM.setColumn(0, "PBDDLY_YN", "0");
		
		// 무발주 혁신점포 여부(가격군검사, 70:NH, 80:NFMS)
		if (var_dlvpnsht_temp_yn == "E") {
			if (var_prgr_c == "70" || var_prgr_c == "80") {
				this.ds_dataM.setColumn(0, "DVY_PLASH_CRT_DSC", "002");
			} else {
				this.ds_dataM.setColumn(0, "DVY_PLASH_CRT_DSC", "001");
			}
		}
		
		//trace("[ fn_save Params ] >>>>>> " + params);	
		dsParams = "ds_dataM=ds_dataM:A ds_dataD=ds_dataD:A";
		
		//trace("save : " + this.ds_dataD.saveXML());
		this.btn_save.set_enable(false);
		
		var sSvcID        = "saveDeliveryNoticeOrder";//통신아이디
		var sURL          = "svc::/rest/scm/delivery/saveDeliveryNoticeOrder";// 호출할 서버 페이지 주소
		var sInDatasets   = dsParams;//보내는데이터셋
		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
		var sArgument     = params;// 파라미터
		var sCallbackFunc = "fn_callBack";//콜백
		var sTranType     = "S"; // U:저장/삭제, S:조회
		
		//API 호출
		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
	}

 */