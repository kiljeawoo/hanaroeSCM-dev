package com.nh.escm.scm.delivery.validation;

import java.util.ArrayList;

import java.util.List;

import com.esum.appetizer.session.SessionBox;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;
import com.nh.escm.scm.delivery.validation.impl.DeliveryNoticeValidator;
import com.nh.escm.scm.delivery.validation.impl.OrderValidator;
import com.nh.escm.scm.delivery.validation.impl.PolicyValidator;
import com.nh.escm.scm.delivery.validation.impl.SecurityValidator;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeTypeVO;

/****************************************************************************************************** 
 * 
 * 2019.06.14 최영신
 * 유효성검증 핸들러
 * 
 ******************************************************************************************************/

/* **************************************************************************************************** 
 * 
 * 비즈니스 로직 유형별로 분리 된 Validator 클래스를 일괄실행하여 
 * 최종 Validation Report 생성
 *  
 * SecurityValidator
 * OrderValidator
 * DeliveryNoticeTypeValidator
 * DeliveryNotiveValidator
 * 
 * ****************************************************************************************************/

/* **************************************************************************************************** 
 * 
 * 유효성검증 핸들러 
 * 
 * ****************************************************************************************************/
public class ValidationHandler {
	
	private SessionBox sessionBox;
	
	List<Validator> validatorList ;
	
	DeliveryNoticeTypeVO deliveryNoticeTypeVO;
	
	Report    validationReport = null;
	Report    finalReport = null;
	/* **************************************************************************************************** 
	 * 
	 * 검증 클래스 객체 리스트 생성
	 * 
	 * ****************************************************************************************************/
	public ValidationHandler(SessionBox sessionBox, DataSet dsM, DataSet dsD, DeliveryNoticeTypeVO deliveryNoticeTypeVO, DeliveryNoticeService deliveryNoticeService) {
		// 
		this.sessionBox = sessionBox;
		
		validationReport = new Report();  // 유효성검증 결과.
		
		this.deliveryNoticeTypeVO = deliveryNoticeTypeVO;
		
		validatorList = new ArrayList<Validator>();
		
		// 정책체크
		Validator policyValidator                       = new PolicyValidator(sessionBox, deliveryNoticeTypeVO);
		this.validatorList.add(policyValidator);        // 접근권한 체크. 사용자유형. 거래처코드 경제통합시스템유형 등등
		
		// 접근권한 체크, 사용자유형, 거래처코드 경제통합시스템유형 등등
		Validator securityValidator                       = new SecurityValidator(sessionBox);
		this.validatorList.add(securityValidator);        // 접근권한 체크. 사용자유형. 거래처코드 경제통합시스템유형 등등
		
		// 수주정보 유효성 검증 
		Validator orderValidator                          = new OrderValidator(sessionBox, dsM, dsD, deliveryNoticeTypeVO, deliveryNoticeService);
		this.validatorList.add(orderValidator);           // 수주정보 유효성 검증 
		
		// 배송예정서 기본 유효성검증
		Validator deliveryNoticeValidator                 = new DeliveryNoticeValidator(sessionBox, dsM, dsD, deliveryNoticeTypeVO);
		this.validatorList.add(deliveryNoticeValidator);  // 배송예정서 기본 유효성검증

	}

	/* **************************************************************************************************** 
	 * 
	 * 
	 * 
	 * ****************************************************************************************************/
	public void add(Validator validator){
		
		validatorList.add(validator);
		
	}
	
	/* **************************************************************************************************** 
	 * 
	 * 등록된 validation 로직 수행
	 * 
	 * ****************************************************************************************************/
	public Report validateAll(){

		Validator validator;


		/* **************************************************************************************************** 
		 * 
	     * 등록된 Validator 객체를 전부 실행한다. 
	     * 
	     * ****************************************************************************************************/
		for(int i =0; i < validatorList.size(); i++){
			
			validator        = validatorList.get(i);
			validationReport = validator.validate();
			
			// 유효성 검증 오류인경우 중단하고 검증 정보를 리턴한다. 
			finalReport = validationReport;
			
			// 유효성검증 오류시 중지
			if(validationReport.isValid() == false){

				break;
				
			} // if
		} // for
		
		// 배송예정서 타입
		finalReport.getResultMap().put("deliveryNoticeTypeVO", this.deliveryNoticeTypeVO);

		return finalReport;

		
	}
	
	

	
	

}
