package com.nh.escm.pds.pay.helper;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.exception.ValidationException;

public class CreditSaleValidator {

	public static boolean reserveValidation(String DATE_TYPE, String START_DATE, String END_DATE)
			throws ValidationException {
		
		if(StringUtils.isEmpty(DATE_TYPE) ) {
			throw new ValidationException("조회일구분이 지정되지 않았습니다.");
		}
		if(StringUtils.isEmpty(START_DATE) ) {
			throw new ValidationException("검색시작일이 지정되지 않았습니다.");
		}
		if(StringUtils.isEmpty(END_DATE) ) {
			throw new ValidationException("검색종료일이 지정되지 않았습니다.");
		}
		return true;	
	}
	
	public static boolean payValidation(String START_DATE, String END_DATE)
			throws ValidationException {
		if(StringUtils.isEmpty(START_DATE) ) {
			throw new ValidationException("검색시작일이 지정되지 않았습니다.");
		}
		if(StringUtils.isEmpty(END_DATE) ) {
			throw new ValidationException("검색종료일이 지정되지 않았습니다.");
		}
		return true;	
	}
}
