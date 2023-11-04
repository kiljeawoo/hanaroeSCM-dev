package com.nh.escm.scm.delivery.validation;

import java.util.Map;
import com.esum.appetizer.session.SessionBox;

/****************************************************************************************************** 
 * 
 * 2019.06.14 최영신
 * 
 * 휴효성검증 클래스 인터페이스
 * 
 ******************************************************************************************************/

public interface Validator {

	Report validate();
	
}
