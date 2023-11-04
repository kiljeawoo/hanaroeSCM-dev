package com.nh.escm.scm.delivery.validation.impl;

import com.esum.appetizer.session.SessionBox;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.validation.Validator;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeTypeVO;


/******************************************************************************************************* 
 * 2019.06.14 최영신
 *  배송예정서 작성에 관한 정책관리 
 ******************************************************************************************************/

/* **************************************************************************************************** 
 * 일단 R1이 아닌것은 다 막는다. 
 * 임시로 막아놓은 것들. 
 *   R1 이외의 모든 발주
 *   R1 발주중 직송, 혁신,  PB직송
 *   
 * R2 막는다. 
 * R2 허용시    , 가공장, 위탁대리점 차단. 차제 , 테스트 후 순차적용
 * 영구차단 수산, 축산, 신선: 화면에서 추가항목 선택필요 
 * ****************************************************************************************************/

/* **************************************************************************************************** 
 * 
 * 테스트케이스 
 * 
 * R1
 *   O 일반
 *   ? - 혁신
 *   ? - R1직송, PB직송
 *   X - 대용량설탕(무발주만있음)
 *   X - 신선: 화면에서 유통기한 선택필수. 일괄등록 불가 
 *   
 * R2 
 *   ? - 가공장 / 위탁대리점: 위탁대리점 배송예정서 작성시 거래처코드를 가공장의 코드를 세팅하고 배송예정서 위탁대리 코드 세팅ㄷ
 *   X - 수산: 화면에서 결품사유, 유통기한 선택함로 일괄등록 불가 
 *   X - 축산: 화면에서 유통기한 선택필수. 일괄등록 불가 
 *   X - 중도매인: 화면 삭제됨
 * ****************************************************************************************************/

public class PolicyValidator implements Validator {

	DeliveryNoticeTypeVO deliveryNoticeTypeVO = null;
	
	public PolicyValidator(SessionBox sessionBox, DeliveryNoticeTypeVO deliveryNoticeTypeVO) {
		this.deliveryNoticeTypeVO = deliveryNoticeTypeVO;
	}
	
	@Override
	public Report validate() {
		Report validationReport = new Report();
		
		/* **************************************************************************************************** 
	     * 일단 R1이 아닌것은 다 막는다.  (해제 19/08/09)
	     * 임시로 막아놓은 것들. 
	     *   R1 이외의 모든 발주
	     *   R1 발주중 직송, 혁신,  PB직송
	     * ****************************************************************************************************/
		/*
		if(this.deliveryNoticeTypeVO.isR1() == false){

			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("R1일반 배송예정서만 일괄작성 가능합니다. ."); 
			
			return validationReport;
		}
		*/
		
		/* **************************************************************************************************** 
		 * 
	     * 직송 막는다 (해제 19/0819)
	     * 
	     * ****************************************************************************************************/
		/*
		if (this.deliveryNoticeTypeVO.isDirectDelivery()) {

			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("직송 배송예정서는 일괄작성할 수 없습니다."); 
			
			return validationReport;
		}
		*/
		
		/* **************************************************************************************************** 
	     * 혁신점포 배송예정서 막는다. (해제 19/08/09)
	     * 
	     * ****************************************************************************************************/
		/*
		if(this.deliveryNoticeTypeVO.isRenovShop() == true){

			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("혁신점포배송예정서는 일괄작성할 수 없습니다."); 
			
			return validationReport;
		}
		*/
		
		/* **************************************************************************************************** 
		 * 
	     * PB직송 막는다 (해제 19/0819)
	     * 
	     * ****************************************************************************************************/
		/*
		if(this.deliveryNoticeTypeVO.isPbddlyYn() == true){

			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("PB직송 배송예정서는 일괄작성할 수 없습니다."); 
			
			return validationReport;
		}
		*/
		
		/* **************************************************************************************************** 
		 * 
	     * R2 차단(해제)
	     * R2 허용시   수산, 축산, 신선, 차제 , 가공장, 위탁대리점 차단. 테스트 후 순차적용
	     * 
	     * ****************************************************************************************************/
		// 저온
		if (this.deliveryNoticeTypeVO.isCold()) {
			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("저온 배송예정서는 일괄작성할 수 없습니다.");

			return validationReport;
		}
		// 축산
		if (this.deliveryNoticeTypeVO.isLiveStock()) {
			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("축산 배송예정서는 일괄작성할 수 없습니다.");

			return validationReport;
		}
		// 수산
		if (this.deliveryNoticeTypeVO.isSea()) {
			validationReport.setValid(false);
			validationReport.setStatus("ERROR");
			validationReport.setNumCode(-999);
			validationReport.setMessage("수산 배송예정서는 일괄작성할 수 없습니다.");

			return validationReport;
		}

		validationReport.setValid(true);
		validationReport.setStatus("SUCESS");
		validationReport.setMessage("배송예정서 정책체크 성공. ");

		return validationReport;
	}
}