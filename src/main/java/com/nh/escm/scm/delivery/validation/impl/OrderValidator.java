package com.nh.escm.scm.delivery.validation.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.session.SessionBox;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.validation.Validator;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeTypeVO;

/* **************************************************************************************************** 
 * 2019.06.25 최영신
 * 
 * 발주참조 배송예정서 작성시 발주정보 유효성 검증 
 * 기존 로직을 그대로 옮김. 현재 배송예정서 저장 소스와 비교를 위해 가급적 소스코드 변경하지 않음.
 *   
 * ****************************************************************************************************/

public class OrderValidator implements Validator {


	
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
	
	Map<String, Object> resultMap             = new HashMap<String, Object>();
	
	DeliveryNoticeService deliveryNoticeService;
	
	public OrderValidator(SessionBox sessionBox, DataSet dsM, DataSet dsD, DeliveryNoticeTypeVO deliveryNoticeTypeVO, DeliveryNoticeService deliveryNoticeService) {
		
		Report validationReport = new Report();  // 유효성검증 결과.
		
		this.deliveryNoticeService = deliveryNoticeService;
		
        this.dsM = dsM;
        this.dsD = dsD;
        
		spyplNaTrplC    = dsM.getString(0, "SPYPL_NA_TRPL_C");     // 공급처코드
		dvyaaNaTrplC    = dsM.getString(0, "DVYAA_NA_TRPL_C");     // 배송지코드
		naDvyPlashSlpno = dsM.getString(0, "NA_DVY_PLASH_SLPNO");  // 배송예정서 전표번호
		dvyPlaDt        = dsM.getString(0, "DVY_PLA_DT");          // 배송예정일
		
		odrplNaTrplC    = dsM.getString(0, "ODRPL_NA_TRPL_C");     // 발주처코드
		odrplNaTeamC    = dsM.getString(0, "ODRPL_NA_TEAM_C");     // 발주처팀코드
		odrDt           = dsM.getString(0, "ODR_DT");              // 발주일
		odrSlpno        = dsM.getString(0, "ODR_SLPNO");           // 발주전표번호
		
		this.deliveryNoticeTypeVO = deliveryNoticeTypeVO;
	}

	@Override
	public Report validate() {
		
		Report validationReport = new Report();  // 유효성검증 결과.
		
		/* **************************************************************************************************** 
	     * 발주서 상태체크 
	     * R1 발주참조 배송예정서 수주내역 검증
	     * ****************************************************************************************************/
		Report orderStatReport           = this.checkOrderStat();
		
		if(orderStatReport.isValid() == false){
			
			return orderStatReport;
		}
		
		/* **************************************************************************************************** 
	     * 발주서 상세 상품정보 체크 
	     *  R1 발주참조 배송예정서 수주 내역 상품상세내역 검증
	     * ****************************************************************************************************/
		Report orderDetailReport           = this.checkOrderDetail();
		
		if(orderDetailReport.isValid() == false){
			
			return orderDetailReport;
		}


		// 모든 validation 이 에러없이 수행되었다면 유효성 검증 성공
		validationReport.setValid(true);
		validationReport.setStatus("SUCESS");
		validationReport.setMessage("수주정보 유효성검증 완료.");
		
		return validationReport;
	}

	/* **************************************************************************************************** 
     * 
     * R1 발주참조 배송예정서 수주내역 검증
     * 
     * ****************************************************************************************************/
	private Report checkOrderStat() {
		
		Report validationReport = new Report();  // 유효성검증 결과.
		
		/* **************************************************************************************************** 
		 * 
	     * 발주서 상태체크 
	     * 
	     * ****************************************************************************************************/
		
		// 발주참조 R1 배송예정서 작성
		// 2nd. 배송예정일이 배송요청일과 동일하고, 발주서 상태가 03(발주상태)인지 체크한다.
		//List<Map<String, Object>> odrDList = new ArrayList<Map<String, Object>>();
		// 
//		if( this.deliveryNoticeTypeVO.isR1() == true ){
			
			if (StringUtils.isEmpty(naDvyPlashSlpno)) {
				
				// 배송예정서 등록인 경우 발주상태가 배송예정(03)상태인지 체크한다.
				// 배송예정서 신규작성인 경우: 배송예정서 전표번호가 공백인 경우. 
				// 발주정보 배송예정상태인지 체크. 배송예정상태인 수주내역은 중복작성 불가
				
				String naOdrStsDsc = "03";
				this.odrDList = deliveryNoticeService.getOrderProduct(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, dvyPlaDt, spyplNaTrplC, naOdrStsDsc);
				
			    /* **************************************************************************************************** 
			     * 가공장이 아니면서 수주내역 상세가 없는 경우
			     * 가공장 여부는 SecurityValidator 가 처리
			     * ****************************************************************************************************/
				if (CollectionUtils.isEmpty(this.odrDList)  == true) {
					
					// isSave = false;
					// sendData(response, new PlatformData(), -999, "배송예정서를 작성할 수 없는 발주상태이거나 배송예정일이 다릅니다.");
					
					validationReport.setValid(false);
					validationReport.setStatus("ERROR");
					validationReport.setNumCode(-999);
					validationReport.setMessage("배송예정서를 작성할 수 없는 발주상태이거나 배송예정일이 다릅니다.");
				}else{
					validationReport.setValid(true);
					validationReport.setStatus("SUCESS");
					validationReport.setMessage("배송예정서를 작성할 수 있는 발주상태이고 배송예정일이 일치합니다.");
					
					//resultMap.put("odrDList", this.odrDList);
					//validationReport.setResultMap(resultMap);
				}
			} else {
				
				// 배송예정서 수정인 경우:  
				String naOdrStsDsc = null; // 발주상태를 체크하지 않는다. 공백으로 넘기면 DB 조회시 조건 제외됨. 
				
				this.odrDList = deliveryNoticeService.getOrderProduct(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, dvyPlaDt, spyplNaTrplC, naOdrStsDsc);
				
				String dvyRqrDt = dsM.getString(0, "DVY_RQR_DT");
				
				if ( StringUtils.isEmpty(dvyRqrDt) == true ) {	
					
					// // 배송요청일이 null 인 경우 조회한다. 배송요청일이 공백 인 경우 조회한다.
					dvyRqrDt = deliveryNoticeService.getDeliveryRequestDate(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
				}
				
				if (dvyRqrDt.equals(dvyPlaDt) == false) {
					// isSave = false;
					//sendData(response, new PlatformData(), -999, "배송예정일을 변경하여 작성할 수 없습니다.");
					validationReport.setValid(false);
					validationReport.setStatus("ERROR");
					validationReport.setNumCode(-999);
					validationReport.setMessage("배송예정일을 변경하여 작성할 수 없습니다.");
				}else{
					validationReport.setValid(true);
					validationReport.setStatus("SUCESS");
					validationReport.setMessage("배송예정일을 변경 없음.");
					
					//resultMap.put("odrDList", this.odrDList);
					//validationReport.setResultMap(resultMap);
				}
			}
//		}
//	else{
//			
//			/* **************************************************************************************************** 
//		     * R2 배송예정서는 아직 일괄처리 허용하지 않음. 
//		     * this.deliveryNoticeTypeVO.isR1() != true
//		     * ****************************************************************************************************/
//			
//			validationReport.setValid(false);
//			validationReport.setStatus("ERROR");
//			validationReport.setNumCode(-999);
//			validationReport.setMessage("R1 배송예정서가 아닙니다.");
//			
//		} // if
			
		return validationReport;
	}

	/* **************************************************************************************************** 
	 * 
	 * 수주내역 상세 체크 
	 * 기존 배송예정서 저장 로직을 여러개의 객체로 분리하였으나 상세 코딩 내역을 가급적 그대로 씀. 비교 분석을 위한 목적임. 
	 * 
	 * ****************************************************************************************************/
	private Report checkOrderDetail() {
		
		Report validationReport = new Report();  // 유효성검증 결과.
		
		boolean isSave = true;
		
		/* ****************************************************************************************************
		 *  
		 * 예전 코딩 흔적을 그대로 살림. 비교/검증 목적. 
		 * /rest/scm/delivery/saveDeliveryNoticeOrder
		 * 
		 * ****************************************************************************************************/

		if (isSave) { 
			
			for (int i = 0; i < dsD.getRowCount(); i++) {
				
				double odrQt = Double.parseDouble(StringUtils.isEmpty(dsD.getString(i, "ODR_QT")) ? "0" : dsD.getString(i, "ODR_QT"));
				double dvyPlaQt = Double.parseDouble(StringUtils.isEmpty(dsD.getString(i, "DVY_PLA_QT")) ? "0" : dsD.getString(i, "DVY_PLA_QT"));
				
				String naWrsC = dsD.getString(i, "NA_WRS_C");
				
				// 3rd. 수주발행시 공병, 공상자, 공파레트는 포함되지않기 때문에 공병, 공상자, 공파레트가 아닌 경우만 배송수량을 체크한다.
				/*
				 * 주류: 공병, 공상자, 공파레트 체크.  WRS_TPC 2, 3, 5  상품유형코드 (1: 일반상품, 2: 공병, 3: 공상자, 4: 봉투, 5: 공파렛트) 
				 */
				
				if (deliveryNoticeService.checkAlcoholProduct(naWrsC) == false) {
					
					// 공평 공상자 공파레트 
					boolean odrYn = false;
					
					for (Map<String, Object> map : odrDList) {
						String odrNaWrsC = (String) map.get("NA_WRS_C");
						
						if (StringUtils.isEmpty(odrNaWrsC) == false && odrNaWrsC.equals(naWrsC)) {
							odrYn = true;
							break;
						} // if
						
					} // for
					
					if (odrYn == false) {			// 4th. 발주서에 상품이 없는 경우
						
						//isSave = false;
						//sendData(response, new PlatformData(), -999, "발주서에 없는 상품이 있습니다.");
						
						validationReport.setValid(false);
						validationReport.setStatus("ERROR");
						validationReport.setNumCode(-999);
						validationReport.setMessage("발주서에 없는 상품이 있습니다.");
						
						return validationReport;
						
					} else {
						
						if (odrQt < dvyPlaQt) {		// 5th. 배송예정량 확인
							
							// isSave = false;
							// sendData(response, new PlatformData(), -999, "수주량보다 배송예정량이 많습니다.");
							
							validationReport.setValid(false);
							validationReport.setStatus("ERROR");
							validationReport.setNumCode(-999);
							validationReport.setMessage("수주량보다 배송예정량이 많습니다.");
							
							return validationReport;

						}
						
					} // if (odrYn == false)
					
					
				} // if
				
			} // for
			
		} // if (isSave)
		
		validationReport.setValid(true);
		validationReport.setStatus("SUCESS");
		validationReport.setMessage("수주상세  유효성검증완료.");
		
		return validationReport;
	}
	

	/*
	 * DS_SC_0300.XFDL
	 * 배송예정서 일반등록 화면 스크립트. 
	// R1(발주처가 물류센터)이면서 무발주이거나, 수주량보다 배송예정량이 많은 거래인 경우 차단한다.
	this.fn_order_validation_check = function ()
	{
		var odrpl_na_trpl_c = this.edt_orpl_na_trpl_c.value;
		var isR1 = "N";
		
		for (var i = 0; i < this.ds_r1NaBzplC.rowcount; i++) {
			var naBzplc = this.ds_r1NaBzplC.getColumn(i, "NA_BZPLC");
			
			if (odrpl_na_trpl_c == naBzplc) {
				if (   odrpl_na_trpl_c == "8808983322353"	// 농협안성저온물류센터(식자재)
					|| odrpl_na_trpl_c == "8808983324562"	// 농협안성저온물류센터(소매)
					|| odrpl_na_trpl_c == "8808983325958"	// 농협삼동저온물류센터(소매)
					|| odrpl_na_trpl_c == "8808983326375"	// 농협삼동저온물류센터(식자재)
				   ) {
					isR1 = "N";
				} else {
					isR1 = "Y";
					break;
				}
			}
		}
		
		if (isR1 == "Y") {
			if (this.gfn_isNull(this.edt_odr_slpno.value)) {
				alert("R1 거래는 무발주로 배송예정서를 작성할 수 없습니다.");
				return false;
			}
		}
		
		var naDvyPlashSlpno = this.ds_dataM.getColumn(0, "NA_DVY_PLASH_SLPNO");
		
		if (this.gfn_isNull(naDvyPlashSlpno) == false) {
			var orgDvyPlaDt = this.ds_dataM.getOrgColumn(0, "DVY_PLA_DT");
			var dvyPlaDt = this.ds_dataM.getColumn(0, "DVY_PLA_DT");
			
			if (this.gfn_isNull(orgDvyPlaDt) == false && orgDvyPlaDt != dvyPlaDt) {
				alert("배송예정일을 변경하여 작성할 수 없습니다.");
				return false;
			}
		}
		
		return true;
	}
	
	*/

}
