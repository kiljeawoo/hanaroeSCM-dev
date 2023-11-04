package com.nh.escm.pds.coupon.helper;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.exception.ValidationException;
import com.nh.escm.pds.coupon.vo.TB_GD_EVENT_CPN;
import com.nh.escm.pds.coupon.vo.SQLNames.CouponUploadError;

public class CouponValidator {
	public static boolean validate(String MNGT_NA_TRPL_C, String CPN_MED_C)
			throws ValidationException {
		if(StringUtils.isEmpty(MNGT_NA_TRPL_C) ) {
			throw new ValidationException("주관경제통합거래처코드 파라미터가 공백입니다.");
		}
		if(StringUtils.isEmpty(CPN_MED_C)) {
			throw new ValidationException("쿠폰매체 파라미터가 공백입니다.");
		}
		return true;	
	}

	public static boolean saleResultValidate(String START_DT, String END_DT, String CPN_KDC)
			throws ValidationException {
		if(StringUtils.isEmpty(START_DT) ) {
			throw new ValidationException("조회 시작일이 공백입니다.");
		}
		if(StringUtils.isEmpty(END_DT)) {
			throw new ValidationException("조회 종료일이 공백입니다.");
		}
		if(StringUtils.isEmpty(CPN_KDC)) {
			throw new ValidationException("발생구분 파라미터가 공백입니다.");
		}
		return true;	
	}
	
	public static boolean saleResultValidate(String NA_BZPLC, String START_DT, String END_DT, String CPN_KDC)
			throws ValidationException {
		if(StringUtils.isEmpty(NA_BZPLC) ) {
			throw new ValidationException("사업장코드가 공백입니다.");
		}
		
		if(StringUtils.isEmpty(START_DT) ) {
			throw new ValidationException("조회 시작일이 공백입니다.");
		}
		if(StringUtils.isEmpty(END_DT)) {
			throw new ValidationException("조회 종료일이 공백입니다.");
		}
		if(StringUtils.isEmpty(CPN_KDC)) {
			throw new ValidationException("발생구분 파라미터가 공백입니다.");
		}
		return true;	
	}
	public static boolean validate(String MNGT_NA_TRPL_C, String CPN_KDC, String NA_CPN_C)
			throws ValidationException {
		if(StringUtils.isEmpty(MNGT_NA_TRPL_C) ) {
			throw new ValidationException("주관경제통합거래처코드 파라미터가 공백입니다.");
		}
		if(StringUtils.isEmpty(CPN_KDC)) {
			throw new ValidationException("쿠폰종류코드 파라미터가 공백입니다.");
		}
		if(StringUtils.isEmpty(NA_CPN_C)) {
			throw new ValidationException("경제통합쿠폰코드 파라미터가 공백입니다.");
		}
		return true;	
	}
	
	public static boolean validate(TB_GD_EVENT_CPN vo) throws ValidationException {
		
		if(StringUtils.isEmpty(vo.getCPN_KDC())) {
			throw new ValidationException("쿠폰종류코드는 공백일수 없습니다.");
		}
		if(vo.getCPN_KDC().getBytes().length > 6) {
			throw new ValidationException("쿠폰종류코드 길이는 6자리을 넘을수 없습니다.");
		}

		if(StringUtils.isEmpty(vo.getNA_CPN_C())) {
			throw new ValidationException("경제통합쿠폰코드는 공백일수 없습니다.");
		}
		if(vo.getNA_CPN_C().getBytes().length > 14) {
			throw new ValidationException("경제통합쿠폰코드 길이는 14자리을 넘을수 없습니다.");
		}

		if(StringUtils.isEmpty(vo.getDC_NA_WRS_C())) {
			throw new ValidationException("할인경제통합상품코드는 공백일수 없습니다.");
		}
		if(vo.getDC_NA_WRS_C().getBytes().length > 25) {
			throw new ValidationException("할인경제통합상품코드 길이는 25자리을 넘을수 없습니다.");
		}

		if(StringUtils.isEmpty(vo.getCPN_SC_NO())) {
			throw new ValidationException("쿠폰회차번호는 공백일수 없습니다.");
		}
		if(vo.getCPN_SC_NO().getBytes().length > 6) {
			throw new ValidationException("쿠폰회차번호 길이는 6자리을 넘을수 없습니다.");
		}

		if(StringUtils.isEmpty(vo.getDC_VLD_PRD_ST_DT())) {
			throw new ValidationException("할인유효기간시작일자는 공백일수 없습니다.");
		}
		if(vo.getDC_VLD_PRD_ST_DT().getBytes().length != 8) {
			throw new ValidationException("할인유효기간시작일자가 8자리가 아닙니다.");
		}
		
		if(StringUtils.isEmpty(vo.getDC_VLD_PRD_ED_DT())) {
			throw new ValidationException("할인유효기간종료일자는 공백일수 없습니다.");
		}
		if(vo.getDC_VLD_PRD_ED_DT().getBytes().length != 8) {
			throw new ValidationException("할인유효기간종료일자가 8자리가 아닙니다.");
		}
		if(StringUtils.isEmpty(vo.getCPN_WRSNM())) {
			throw new ValidationException("할인유효기간종료일자는 공백일수 없습니다.");
		}
		if(vo.getCPN_WRSNM().getBytes().length > 40) {
			throw new ValidationException("쿠폰상품명은 40바이트 이상일수 없습니다.");
		}
		return true;
		
	}
	
	public static Map<String, Object> makeErrorMessage(String errorType, String errorMessage, TB_GD_EVENT_CPN cpnVO) {
		Map<String, Object> errorMap = new HashMap<String, Object>();
		errorMap.put(CouponUploadError.ERROR_TYPE.name(), errorType);

		if(cpnVO != null) {
			errorMap.put(CouponUploadError.CPN_KDC.name(), cpnVO.getCPN_KDC());
			errorMap.put(CouponUploadError.NA_CPN_C.name(), cpnVO.getNA_CPN_C());
			errorMap.put(CouponUploadError.DC_NA_WRS_C.name(), cpnVO.getDC_NA_WRS_C());
			errorMap.put(CouponUploadError.CPN_SC_NO.name(), cpnVO.getCPN_SC_NO());
			errorMap.put(CouponUploadError.DC_VLD_PRD_ST_DT.name(), cpnVO.getDC_VLD_PRD_ST_DT());
			errorMap.put(CouponUploadError.DC_VLD_PRD_ED_DT.name(), cpnVO.getDC_VLD_PRD_ED_DT());
			errorMap.put(CouponUploadError.CPN_WRSNM.name(), cpnVO.getCPN_WRSNM());
			
		}
		errorMap.put(CouponUploadError.ERROR_DSC.name(), errorMessage);

		return errorMap;
	}

}
