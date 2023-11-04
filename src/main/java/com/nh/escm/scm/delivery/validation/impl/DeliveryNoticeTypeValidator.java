package com.nh.escm.scm.delivery.validation.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.nexacro.xapi.data.DataSet;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.validation.Validator;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeTypeVO;

/* ****************************************************************************************************
 *  
 * 직송배송예정서 여부 체크
 *  
 * ****************************************************************************************************/

public class DeliveryNoticeTypeValidator implements Validator {

	private final Log logger = LogFactory.getLog(getClass());
	
	DataSet dsM;
	DataSet dsD;
	DeliveryNoticeService deliveryNoticeService;
	String rogoInfCrtDsc;
	String prgrC;
	DeliveryNoticeTypeVO deliveryNoticeTypeVO;
		
	public DeliveryNoticeTypeValidator(DataSet dsM, DataSet dsD, DeliveryNoticeService deliveryNoticeService) {
		 
        this.dsM = dsM;  // 수주마스터
        this.dsD = dsD;  // 수주상세 
        this.deliveryNoticeService = deliveryNoticeService;
        // String     rogoInfCrtDsc        = requestHelper.getParameter("ROGO_INF_CRT_DSC")               ; 
        this.rogoInfCrtDsc = dsM.getString(0, "ROGO_INF_CRT_DSC");
        this.prgrC = dsM.getString(0, "PRGR_C");
	}

	@Override
	public Report validate() {
		Report report = new Report();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		deliveryNoticeTypeVO = new DeliveryNoticeTypeVO();
		
		/* **************************************************************************************************** 
		 * 직송배송예정서 여부 체크 
		 * ****************************************************************************************************/
		if (this.isDirectDelivery()) {
			deliveryNoticeTypeVO.setDirectDelivery(true);
		}
		
		/* **************************************************************************************************** 
		 * 저온배송예정서 여부 체크 
		 * ****************************************************************************************************/
		if (this.isColdDelivery()) {
			deliveryNoticeTypeVO.setCold(true);
		}
		
		/* **************************************************************************************************** 
		 * 축산배송예정서 여부 체크 
		 * ****************************************************************************************************/
		deliveryNoticeTypeVO.setLiveStock(isLiveStockDelivery());
		
		/* **************************************************************************************************** 
		 * 수산배송예정서 여부 체크 
		 * ****************************************************************************************************/
		deliveryNoticeTypeVO.setSea(isSeaDelivery());
		
		/* **************************************************************************************************** 
		 * pb 직송 여부 체크 
		 * ****************************************************************************************************/
		boolean pbDdlyYn = isPbDdlyYn();
		if (pbDdlyYn) {
			deliveryNoticeTypeVO.setPbddlyYn(pbDdlyYn);
			// vo.setPBDDLY_YN("0"); //PB직송여부 : 직송=1, 일반=0
			// vo.setDVY_PLASH_CRT_DSC("001");//배송예정서생성구분코드
		}
		
		/* **************************************************************************************************** 
		 * 혁신발주 여부 체크 
		 * ****************************************************************************************************/
		boolean renovShop = isRenovShop();
		if (renovShop) {
			deliveryNoticeTypeVO.setRenovShop(renovShop);
			// vo.setPBDDLY_YN("0"); //PB직송여부 : 직송=1, 일반=0
			// vo.setDVY_PLASH_CRT_DSC("001");//배송예정서생성구분코드
		}
		
		/* **************************************************************************************************** 
		 * R1 여부 체크 
		 * ****************************************************************************************************/
		boolean R1 = isR1();
		if (R1) {
			deliveryNoticeTypeVO.setR1(true); // R1 임때
		}
		
		/* **************************************************************************************************** 
		 * R2
		 * ****************************************************************************************************/
		boolean R2 = this.isR2();
		if (R2) {
			deliveryNoticeTypeVO.setR2(true); // R2 임때
		}
		
		/* **************************************************************************************************** 
		 * 배송예정서 타입 정보 리턴 
		 * ****************************************************************************************************/
		resultMap.put("TypeVO", deliveryNoticeTypeVO);
		report.setValid(true);
		report.setResultMap(resultMap);

		return report;
	}

	private boolean isR1() {
		if (deliveryNoticeTypeVO.isCold()) {
			return false;
		} else {
			/* **************************************************************************************************** 
			 * 물류센터 코드 여부 검증
			 * R1사업장코드를 불러와서 비교한다.  
			 * deliveryNoticeService.retrieveR1NaBzplC()
			 * ****************************************************************************************************/
			for (Map<String, Object> map : this.deliveryNoticeService.retrieveR1NaBzplC()) {
				if (dsM.getString(0, "ODRPL_NA_TRPL_C").equals(map.get("NA_BZPLC"))) {
					// 발주처가 R1 리스트에 포함된 경우 true 리턴
					return true;
				}
			}
		}
		return false;
	}

	private boolean isColdDelivery() {
		/* **************************************************************************************************** 
		 * R1 이 아닌 농협물류센터 . 저온물류센터
		 * 
		 * 8808983322353 농협안성저온물류센터(식자재)
		 * 8808983324562 농협안성저온물류센터(소매)
		 * 8808983325958 농협삼동저온물류센터(소매)
		 * 8808983326375 농협삼동저온물류센터(식자재)
		 * 8808983332277 농협마트사업강원지사(저온)
		 * 
		 * 배송예정서 번호가 공백이고 R1아 아닌 물류센터(저온) 이면 R1 아님
		 * ****************************************************************************************************/
		
		boolean coldBzplc = this.isColdBzplc(dsM.getString(0, "ODRPL_NA_TRPL_C"));

		if (coldBzplc) {
			// 저온물류센터일때
			// 배송예정서 번호가 공백인지는 R1 로직과 관련 없음. 다른곳으로 옮겨야 할 듯 .
			// 배송예정서 번호 존재유무는 배송예정서 중복작성 방지 로직으로

			if (StringUtils.isEmpty(dsM.getString(0, "NA_DVY_PLASH_SLPNO"))) {
				deliveryNoticeTypeVO.setR1(false); // 배송예정서 번호가 공백이고 R1아 아닌 물류센터(저온) 이면 R1 아님
				deliveryNoticeTypeVO.setCold(true);
			}
		}
		return false;
	}
	
    /* ****************************************************************************************************
     * 저온배송예정서 사업장
     * ****************************************************************************************************/
	private boolean isColdBzplc(String bzplc){
		/* **************************************************************************************************** 
		 * R1 이 아닌 농협물류센터 
		 * 
		 * 8808983322353 농협안성저온물류센터(식자재)
		 * 8808983324562 농협안성저온물류센터(소매)
		 * 8808983325958 농협삼동저온물류센터(소매)
		 * 8808983326375 농협삼동저온물류센터(식자재)
		 * 8808983332277 농협마트사업강원지사(저온)
		 * ****************************************************************************************************/
    	
    	boolean isColdBzplc = false;
    	
    	List<String> bzplcList = new ArrayList<String>();
    	bzplcList.add("8808983322353"); // 농협안성저온물류센터(식자재)
    	bzplcList.add("8808983324562"); // 농협안성저온물류센터(소매) 
    	bzplcList.add("8808983325958"); // 농협삼동저온물류센터(소매) 
    	bzplcList.add("8808983326375"); // 농협삼동저온물류센터(식자재)    	
    	bzplcList.add("8808983332277"); // 농협마트사업강원지사(저온)
    	
    	// 저온물류센터 리스트에 있는지 비교 
		for (int i = 0; i < bzplcList.size(); i++) {
			if (StringUtils.equals(bzplc, bzplcList.get(i))) {
				isColdBzplc = true;
			}
		}
    	
    	return isColdBzplc;
    } // isColdBzplc

	private boolean isLiveStockDelivery() {
		/* **************************************************************************************************** 
		 * 축산배송예정서 사업장
		 * 
		 * 8808983410159 (주)농협유통축산부
		 * ****************************************************************************************************/
		List<String> bzplcList = new ArrayList<String>();
		bzplcList.add("8808983410159"); // (주)농협유통축산부

		// 축산배송예정서 사업장 리스트에 있는지 비교
		if (bzplcList.contains(dsM.getString(0, "ODRPL_NA_TRPL_C"))) {
			return true;
		} else if ("462".equals(this.rogoInfCrtDsc) || "463".equals(this.rogoInfCrtDsc)) {
			return true;
		}
		return false;
	}
	
	private boolean isSeaDelivery() {
		/* **************************************************************************************************** 
		 * 수산배송예정서 사업장 
		 * 
		 * 8808983410142 (주)농협유통 수산사업부
		 * 8808983324388 (주)농협유통영남수산물류센터
		 * 8808983326641 (주)농협유통 수산사업부(본부)
		 * 8808983326634 (주)농협유통 수산사업부(영남)
		 * ****************************************************************************************************/
		List<String> bzplcList = new ArrayList<String>();
    	bzplcList.add("8808983410142"); // (주)농협유통 수산사업부
    	bzplcList.add("8808983324388"); // (주)농협유통영남수산물류센터
    	bzplcList.add("8808983326641"); // (주)농협유통 수산사업부(본부)
    	bzplcList.add("8808983326634"); // (주)농협유통 수산사업부(영남)

		// 수산배송예정서 사업장 리스트에 있는지 비교
		if (bzplcList.contains(dsM.getString(0, "ODRPL_NA_TRPL_C"))) {
			return true;
		}
		return false;
	}

	private boolean isR2() {
		boolean isR2order = true;
		
		/* **************************************************************************************************** 
		 *  배송지 경제통함 시스템 코드가 51고 직송여부가 부이며  R2 이다. 
		 * 
		 * 배송예정서 화면에서 배송지가 물류센터가 아니면 R2 로 세팅하므로 맞춘다
		 * 
		 * 물류센터 코드 여부 검증
		 * R1사업장코드를 불러와서 비교한다.  
		 * deliveryNoticeService.retrieveR1NaBzplC()
		 * 
		 * ****************************************************************************************************/
		for (Map<String, Object> map : this.deliveryNoticeService.retrieveR1NaBzplC()) {
			if (dsM.getString(0, "DVYAA_NA_TRPL_C").equals(map.get("NA_BZPLC"))) {
				// 발주처가 R1 리스트에 포함된 경우 false 리턴
				isR2order = false;
			} //
		} // for

		return isR2order;
	}
	
/* R1 배송예정서의 경우 배송예정일을 변경할 수 없도록한다. */
/*
 * 
 * this.fn_ds_dataM_oncolumnchanged = function(obj:Dataset, e:nexacro.DSColChangeEventInfo)
 * {
 * 	if (this.gfn_isNull(this.ds_dataM.getColumn(0, "DVYAA_NA_TRPL_C")) == false) {
 * 		var flag = true;
 * 		var dvyaaNaTrplC = this.edt_dvyaa_na_trpl_c.value;
 * 		
 * 		for (var i = 0; i < this.ds_r1NaBzplC.rowcount; i++) {
 * 			var naBzplc = this.ds_r1NaBzplC.getColumn(i, "NA_BZPLC");
 * 			
 * 			if (dvyaaNaTrplC == naBzplc) {		// 배송처가 물류센터인지 확인한다.
 * 				flag = false;
 * 				break;
 * 			}
 * 		}
 * 		
 * 		if (flag) {								// 배송처가 물류센터가 아닌 경우 R2 거래임.
 * 			this.cal_dvy_pla_dt.set_enable(true);
 * 		} else {
 * 			this.cal_dvy_pla_dt.set_enable(false);
 * 		}
 * 	}
 * }
 * 
 */
	
	/* ****************************************************************************************************
	 * 직송배송예정서 여부 체크
	 * ****************************************************************************************************/
	public boolean isDirectDelivery() {
		boolean isDirectDelivery = false;

		if ("1".equals(dsM.getString(0, "DDLY_YN")) == true) {
			isDirectDelivery = true;
		}
		return isDirectDelivery;
	}

	/* **************************************************************************************************** 
     * 혁신점보, PB직송 배송예정서 관련 업무정의 
     * 
     * TB_OD_ORDER_M.ROGO_INF_CRT_DSC	     // 수발주정보생성구분코드
     * 
     * TB_OD_DLVPNSHT_M.PBDDLY_YN	         // PB직송여부
     * TB_OD_DLVPNSHT_M.DVY_PLASH_CRT_DSC	 // 배송예정서생성구분코드
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
	 * null 수신시 0 (부)  들어갑니다. 	 *  
	 * 
	 * 2. 혁신점포발주	 * 
	 * TB_NA_DP_OM_OD_ORDER 테이블에
	 * 컬럼 ROGO_INF_CRT_DSC : 243 값이  혁신점포 입니다.
	 * 배송예정서 송신시 TB_NA_DP_OM_DP_DLVPNSHT - ROGO_INF_CRT_DSC : 002 (혁신배송예정서) 세팅해주시면 됩니다.
	 * null 수신시 001(일반배송예정서) 들어갑니다. 
     * ****************************************************************************************************/
	
	/* ****************************************************************************************************
	 * 혁신점포 배송예정서 여부 체크
	 * ****************************************************************************************************/
	private boolean isRenovShop() {
		/* ****************************************************************************************************
		 * 혁신점포 배송예정서 여부 체크
		 * 혁신점포 여부(180327)
         *   (1) ROGO_INF_CRT_DSC가 신규 값이 아닌 경우
         *    : DVY_PLASH_CRT_DSC = 001, PBDDLY_YN = 0
         *   (2) 243,244,800,801,802
         *    : DVY_PLASH_CRT_DSC = 002, PBDDLY_YN = 0
         *   (3) 245 이면서 배송예정서 발주처/수주처의 거래관계의 가격군이 혁신이 아닌 경우(로직확인필요)
         *    : DVY_PLASH_CRT_DSC = 001, PBDDLY_YN = 1
         *   (4) 245 이면서 배송예정서 발주처/수주처의 거래관계의 가격군이 혁신인 경우(로직확인필요)
         *    : DVY_PLASH_CRT_DSC = 002, PBDDLY_YN = 1
         *    (5) 가격군코드 70, 80일 때
         *    
         *   DVY_PLASH_CRT_DSC
         *   ROGO_INF_CRT_DSC
		 * ****************************************************************************************************/
		
		if (	   "70".equals(this.prgrC)
			  || "80".equals(this.prgrC)
			 ) {
			return true;
		}

        if (    "243".equals(this.rogoInfCrtDsc) 
        	 || "244".equals(this.rogoInfCrtDsc) 
        	 || "800".equals(this.rogoInfCrtDsc) 
        	 || "801".equals(this.rogoInfCrtDsc) 
        	 || "802".equals(this.rogoInfCrtDsc)
        	) {
        	return true;
        	// mvo.setDVY_PLASH_CRT_DSC("002"); // 혁신점포
		} else {
			// mvo.setDVY_PLASH_CRT_DSC("001"); // 일반
			return false;
		}
		//}
		
		// return false;
	}
	
	/* ****************************************************************************************************
	 * PB직송
	 * ****************************************************************************************************/
    private boolean isPbDdlyYn() {
		//		PB 직송
		//		(3) 245 이면서 배송예정서 발주처/수주처의 거래관계의 가격군이 혁신이 아닌 경우(로직확인필요)
		//		 : DVY_PLASH_CRT_DSC = 001, PBDDLY_YN = 1
		//		(4) 245 이면서 배송예정서 발주처/수주처의 거래관계의 가격군이 혁신인 경우(로직확인필요)
		//		 : DVY_PLASH_CRT_DSC = 002, PBDDLY_YN = 1
		    	
		if ("245".equals(this.rogoInfCrtDsc)) {
			return true;
			// mvo.setDVY_PLASH_CRT_DSC("002"); // 혁신점포
		} else {
			// mvo.setDVY_PLASH_CRT_DSC("001"); // 일반
			return false;
		}
		
		// return false;
	}
}