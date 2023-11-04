package com.nh.escm.pds.coupon.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.coupon.dao.CouponSaleResultDAO;
import com.nh.escm.pds.coupon.vo.TB_DE_CPN_UPLOAD;
import com.nh.escm.pds.coupon.vo.TB_GD_EVENT_CPN;

public class CouponSaleResultService extends AbstractService {
	@Autowired
	private CouponSaleResultDAO couponSaleResultDAO;

	/**
	 * 쿠폰실적 사업장별
	 * 
	 * @param START_DT
	 * @param END_DT
	 * @param CPN_KDC
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getCouponSaleResultList(String START_DT,
			String END_DT, String CPN_KDC) throws AppetizerException {
		try {
			return couponSaleResultDAO.getCouponSaleResultList(START_DT,
					END_DT, CPN_KDC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/**
	 * 쿠폰실적 사업장-상품별
	 * 
	 * @param NA_BZPLC
	 * @param START_DT
	 * @param END_DT
	 * @param CPN_KDC
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getCouponSaleResultDetailList(
			String NA_BZPLC, String START_DT, String END_DT, String CPN_KDC)
			throws AppetizerException {
		try {
			return couponSaleResultDAO.getCouponSaleResultDetailList(NA_BZPLC,
					START_DT, END_DT, CPN_KDC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> getCouponBizPlcList(String NA_BZPLC,
			String START_DT, String END_DT, String CPN_KDC)
			throws AppetizerException {
		try {
			return couponSaleResultDAO.getCouponBizPlcList(NA_BZPLC, START_DT,
					END_DT, CPN_KDC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/**
	 * 쿠폰대금 업로드
	 * 
	 * @param CPN_SC
	 * @param ED_MRK_YN
	 * @param voList
	 * @throws AppetizerException
	 */
	public void saveSaleResult(int CPN_SC, String ED_MRK_YN,
			List<TB_DE_CPN_UPLOAD> voList) throws AppetizerException {

		for (TB_DE_CPN_UPLOAD vo : voList) {
			vo.setCPN_SC(CPN_SC);
			vo.setED_MRK_YN(ED_MRK_YN);
			couponSaleResultDAO.saveSaleResult(vo);
		}

	}

	public List<Map<String, Object>> getCouponSaleResultUploadList(
			String CPN_PBC_NA_TRPL_C, String ADJ_YM, String ADJPL_NA_TRPL_C)
			throws AppetizerException {
		try {
			return couponSaleResultDAO.getCouponSaleResultUploadList(
					CPN_PBC_NA_TRPL_C, ADJ_YM, ADJPL_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}

	}

	public void getCouponSaleResultListExcel(
			String NA_BZPLC, String START_DT, String END_DT, String CPN_KDC, ExcelFileMakerResultHandler handler)
			throws AppetizerException {
		try {
			couponSaleResultDAO.getCouponSaleResultListExcel(NA_BZPLC,
					START_DT, END_DT, CPN_KDC, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}	
	}

	public void getCouponSaleResultUploadListExcel(
			String CPN_PBC_NA_TRPL_C, String ADJ_YM, String ADJPL_NA_TRPL_C, ExcelFileMakerResultHandler handler)
			throws AppetizerException {
		try {
			couponSaleResultDAO.getCouponSaleResultUploadListExcel(
					CPN_PBC_NA_TRPL_C, ADJ_YM, ADJPL_NA_TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
