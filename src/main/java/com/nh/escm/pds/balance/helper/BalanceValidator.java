package com.nh.escm.pds.balance.helper;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.exception.ValidationException;

public class BalanceValidator {
	public static boolean prePayDayValidate(String TR_DT)
			throws ValidationException {
		if(StringUtils.isEmpty(TR_DT) ) {
			throw new ValidationException("거래일자가 선택되지 않았습니다.");
		}
		return true;	
	}
	
	public static boolean bcdDayValidate(String TR_DT)
			throws ValidationException {
		if(StringUtils.isEmpty(TR_DT) ) {
			throw new ValidationException("거래일자가 선택되지 않았습니다.");
		}
		return true;	
	}
	
	public static boolean masterValidate(String BAS_YM, String TRPL_C)
			throws ValidationException {
		if(StringUtils.isEmpty(BAS_YM) ) {
			throw new ValidationException("거래월이 선택되지 않았습니다.");
		}
		if(StringUtils.isEmpty(TRPL_C)) {
			throw new ValidationException("공급업체 파라미터는 공백일 수 없습니다.");
		}
		return true;	
	}
		
	public static boolean detailValidate(String BAS_YM, String ADJ_NA_BZPLC, String NA_ADJPL_C)
			throws ValidationException {
		if(StringUtils.isEmpty(BAS_YM) ) {
			throw new ValidationException("거래월이 선택되지 않았습니다.");
		}
		if(StringUtils.isEmpty(ADJ_NA_BZPLC) ) {
			throw new ValidationException("농협사업장 파라미터는 공백일 수 없습니다.");
		}
		if(StringUtils.isEmpty(NA_ADJPL_C)) {
			throw new ValidationException("공급업체 파라미터는 공백일 수 없습니다.");
		}
		return true;	
	}		
		
	
}
