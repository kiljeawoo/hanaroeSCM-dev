package com.nh.escm.pds.coupon.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.coupon.vo.TB_DE_CPN_UPLOAD;

public class CouponSaleResultDAO extends AbstractDao {
	
	/**
	 * 쿠폰실적 사업장별 마스터 정보
	 * @param START_DT
	 * @param END_DT
	 * @param CPN_KDC
	 * @return
	 */
	public List<Map<String, Object>> getCouponSaleResultList(
			String START_DT,
			String END_DT,
			String CPN_KDC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("START_DT", START_DT);
		param.put("END_DT", END_DT);
		param.put("CPN_KDC", CPN_KDC);
		return getSqlSession().selectList("couponSaleResultDAO.getCouponSaleResultList", param);
	}
	
	/**
	 * 쿠폰실적 상품별 디테일 정보
	 * @param NA_BZPLC
	 * @param START_DT
	 * @param END_DT
	 * @param CPN_KDC
	 * @return
	 */
	public List<Map<String, Object>> getCouponSaleResultDetailList(
			String NA_BZPLC,
			String START_DT,
			String END_DT,
			String CPN_KDC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("START_DT", START_DT);
		param.put("END_DT", END_DT);
		param.put("CPN_KDC", CPN_KDC);
		return getSqlSession().selectList("couponSaleResultDAO.getCouponSaleResultDetailList", param);
	}
	
	/**
	 * 쿠폰거래사무소조회
	 * @param NA_BZPLC
	 * @param START_DT
	 * @param END_DT
	 * @param CPN_KDC
	 * @return
	 */
	public List<Map<String, Object>> getCouponBizPlcList(
			String NA_BZPLC,
			String START_DT,
			String END_DT,
			String CPN_KDC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("START_DT", START_DT);
		param.put("END_DT", END_DT);
		param.put("CPN_KDC", CPN_KDC);
		return getSqlSession().selectList("couponSaleResultDAO.getCouponBizPlcList", param);
	}

	/**
	 * 쿠폰대금 파일 저장
	 * @param vo
	 * @return
	 */
	public boolean saveSaleResult(TB_DE_CPN_UPLOAD vo) {
		return getSqlSession().insert("couponSaleResultDAO.saveSaleResult", vo) > 0;
	}
	
	
	public List<Map<String, Object>> getCouponSaleResultUploadList(
			String CPN_PBC_NA_TRPL_C,
			String ADJ_YM,
			String ADJPL_NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CPN_PBC_NA_TRPL_C", CPN_PBC_NA_TRPL_C);
		param.put("ADJ_YM", ADJ_YM);
		param.put("ADJPL_NA_TRPL_C", ADJPL_NA_TRPL_C);
		return getSqlSession().selectList("couponSaleResultDAO.getCouponSaleResultUploadList", param);
	}

	public void getCouponSaleResultListExcel(
			String NA_BZPLC,
			String START_DT,
			String END_DT,
			String CPN_KDC,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("START_DT", START_DT);
		param.put("END_DT", END_DT);
		param.put("CPN_KDC", CPN_KDC);
		getSqlSession().select("couponSaleResultDAO.getCouponSaleResultListExcel", param, handler);	
	}

	public void getCouponSaleResultUploadListExcel(
			String CPN_PBC_NA_TRPL_C,
			String ADJ_YM,
			String ADJPL_NA_TRPL_C,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CPN_PBC_NA_TRPL_C", CPN_PBC_NA_TRPL_C);
		param.put("ADJ_YM", ADJ_YM);
		param.put("ADJPL_NA_TRPL_C", ADJPL_NA_TRPL_C);
		getSqlSession().select("couponSaleResultDAO.getCouponSaleResultUploadListExcel", param, handler);
	}
}
