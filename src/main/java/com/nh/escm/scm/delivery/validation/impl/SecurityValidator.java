package com.nh.escm.scm.delivery.validation.impl;

import java.util.Map;

import com.esum.appetizer.session.SessionBox;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.validation.Validator;

/* **************************************************************************************************** 
 * 2019.06.14 최영신
 * 보안 유효성검증
 * 
 * 이곳에는 배송예정서 작성시 경통에서 처리가 안되는 것들을 차단하는 로직을 추가함.
 *   경통에서 에러가나는 것
 *   경통에서 매입 안잡히는 것
 *   기타 작성해도 처리 안되는 것들
 *   
 * ****************************************************************************************************/

public class SecurityValidator implements Validator {
	private SessionBox sessionBox;

	public SecurityValidator(SessionBox sessionBox) {
		// 
		this.sessionBox = sessionBox;
	}

	@Override
	public Report validate() {
		
		
		Report securityReport = new Report();
		boolean isValid = false;
		String validationMessage = "";

		if(this.sessionBox.getUserSystemCode().equals("21")){
			
			/* **************************************************************************************************** 
		     * 
		     * 가공장 시스템코드 21 인 GLN 으로 로그인 한 경우 막는다
		     * 가공장이 배송예정서를 직접작성할 경우 경제통합시스템에서 매입이 안잡힘
		     * 가공장 시스템코드 21 인 사업장은 반드시 위탁디리점을 통해서 배송예정서를 작성해야 함. 
		     * 
		     * ****************************************************************************************************/
			// 
			// isSave = false;
			// 에러메시지 리턴

			isValid = false;
			
			validationMessage = "경제통합 가공시스템코드(21) 사업장 아이디로는 배송예정서를 직접 작성할 수 없습니다.";
			

		}else{
			
			isValid = true;
			validationMessage = "배송예정서 작성권한 정상.";
		}
		
		securityReport.setValid(isValid);
		securityReport.setMessage(validationMessage);;
		
		return securityReport;
		
		
	}


}
