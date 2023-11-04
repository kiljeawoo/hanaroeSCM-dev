package com.nh.escm.pds.pay.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

/**
 * 월잔액장 DAO
 * @author YunChang.Lee
 *
 */
public class CreditSaleDAO extends AbstractDao {
	Logger logger = LoggerUtil.getServerLogger(this);

	/**
	 * 외상매출회수 예정내역
	 * @param DATE_TYPE
	 * @param START_DATE
	 * @param END_DATE
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getCreditSaleReserveList(
			String DATE_TYPE,
			String FROM_DT,
			String TO_DT,
			String NA_BZPLC,
			String CPL_YN,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("DATE_TYPE", DATE_TYPE);
		param.put("FROM_DT", FROM_DT);
		param.put("TO_DT", TO_DT);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("CPL_YN", CPL_YN);
		param.put("TRPL_C",TRPL_C);
	
		return getSqlSession().selectList("creditSale.getCreditSaleReserveList", param);
	}
	
	/**
	 * 외상매출회수예정내역 합계
	 * @param DATE_TYPE
	 * @param START_DATE
	 * @param END_DATE
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public Map<String, Object> getCreditSaleReserveListSum(
			String DATE_TYPE,
			String START_DATE,
			String END_DATE,
			String NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("DATE_TYPE", DATE_TYPE);
		param.put("START_DATE", START_DATE);
		param.put("END_DATE", END_DATE);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C",TRPL_C);
	
		return getSqlSession().selectOne("creditSale.getCreditSaleReserveListSum", param);
	}

	/**
	 * 외상매출회수내역
	 * @param START_DATE
	 * @param END_DATE
	 * @param ROTS_CTR_DSC
	 * @param ADJ_NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getCreditSaleList(
			String START_DATE,
			String END_DATE,
			String ROTS_CTR_DSC,
			String ADJ_NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("START_DATE", START_DATE);
		param.put("END_DATE", END_DATE);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		param.put("TRPL_C",TRPL_C);
	
		return getSqlSession().selectList("creditSale.getCreditSaleList", param);
	}
	
	/**
	 * 외상매출회수내역 합계
	 * @param START_DATE
	 * @param END_DATE
	 * @param ROTS_CTR_DSC
	 * @param ADJ_NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public Map<String, Object> getCreditSaleListSum(
			String START_DATE,
			String END_DATE,
			String ROTS_CTR_DSC,
			String ADJ_NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("START_DATE", START_DATE);
		param.put("END_DATE", END_DATE);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		param.put("TRPL_C",TRPL_C);
	
		return getSqlSession().selectOne("creditSale.getCreditSaleListSum", param);
	}

	public void getCreditSaleReserveListExcel(
			String DATE_TYPE,
			String FROM_DT,
			String TO_DT,
			String NA_BZPLC,
			String CPL_YN,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("DATE_TYPE", DATE_TYPE);
		param.put("FROM_DT", FROM_DT);
		param.put("TO_DT", TO_DT);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("CPL_YN", CPL_YN);
		param.put("TRPL_C",TRPL_C);
	
		getSqlSession().select("creditSale.getCreditSaleReserveListExcel", param, handler);
	}

	public void getCreditSaleListExcel(
			String START_DATE,
			String END_DATE,
			String ROTS_CTR_DSC,
			String ADJ_NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("START_DATE", START_DATE);
		param.put("END_DATE", END_DATE);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		param.put("TRPL_C",TRPL_C);
	
		getSqlSession().select("creditSale.getCreditSaleListExcel", param, handler);
	}
}
