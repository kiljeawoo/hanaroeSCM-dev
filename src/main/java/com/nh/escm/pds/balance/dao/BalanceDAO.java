package com.nh.escm.pds.balance.dao;

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
public class BalanceDAO extends AbstractDao {
	Logger logger = LoggerUtil.getServerLogger(this);
	/**
	 * 월잔액장 마스터 리스트
	 * @param BAS_YM
	 * @param ADJ_NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getMonthlyBalanceList(
			String BAS_YM,
			String ADJ_NA_BZPLC,
			String[] TRPL_C, String IS_AUTH_ALL) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BAS_YM", BAS_YM);
		param.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
		param.put("IS_AUTH_ALL", IS_AUTH_ALL);
		
		
		return getSqlSession().selectList("balanceDAO.getMonthlyBalanceList", param);
	}

	/**
	 * 월잔액장 마스터 리스트 합계
	 * @param BAS_YM
	 * @param ADJ_NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public Map<String, Object> getMonthlyBalanceListSum(
			String BAS_YM,
			String ADJ_NA_BZPLC,
			String[] TRPL_C, String IS_AUTH_ALL) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BAS_YM", BAS_YM);
		param.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
		param.put("IS_AUTH_ALL", IS_AUTH_ALL);
		
		return getSqlSession().selectOne("balanceDAO.getMonthlyBalanceListSum", param);
	}

	/**
	 * 월잔액장 상세내역
	 * @param BAS_YM
	 * @param ADJ_NA_BZPLC
	 * @param NA_ADJPL_C
	 * @return
	 */
	public List<Map<String, Object>> getMonthlyBalanceDetailList(
			String BAS_YM,
			String ADJ_NA_BZPLC,
			String NA_ADJPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BAS_YM", BAS_YM);
		param.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		param.put("NA_ADJPL_C", NA_ADJPL_C);
	
		return getSqlSession().selectList("balanceDAO.getMonthlyBalanceDetailList", param);
	}

	/**
	 * 일선수금원장조회
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getPrePayDayList(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		return getSqlSession().selectList("balanceDAO.getPrePayDayList", param);
	}
	
	/**
	 * 일선수금원장조회 합계
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getPrePayDayListSum(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		return getSqlSession().selectList("balanceDAO.getPrePayDayListSum", param);
	}
	
	/**
	 * 미수금원장(농협기준)
	 * @param TR_DT
	 * @param ACRV_SBJC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getArcvOcuList(
			String TR_DT,
			String ACRV_SBJC,
			String NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ACRV_SBJC", ACRV_SBJC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		return getSqlSession().selectList("balanceDAO.getArcvOcuList", param);
	}

	/**
	 * 일잔액장조회
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getBcdDayList(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		return getSqlSession().selectList("balanceDAO.getBcdDayList", param);
	}

	/**
	 * 일잔액장조회 합계
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getBcdDayListSum(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		return getSqlSession().selectList("balanceDAO.getBcdDayListSum", param);
	}

	public Map<String, Object> getDDL_DT(String BAS_DT) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BAS_DT", BAS_DT);
		return getSqlSession().selectOne("balanceDAO.getDDL_DT", param);
	}

	public void getMonthlyBalanceListExcel(
			String BAS_YM,
			String ADJ_NA_BZPLC,
			String[] TRPL_C, String IS_AUTH_ALL,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BAS_YM", BAS_YM);
		param.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
		param.put("IS_AUTH_ALL", IS_AUTH_ALL);
		
		getSqlSession().select("balanceDAO.getMonthlyBalanceListExcel", param, handler);
	}

	public void getPrePayDayListExcel(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		getSqlSession().select("balanceDAO.getPrePayDayListExcel", param, handler);
	}

	public void getArcvOcuListExcel(
			String TR_DT,
			String ACRV_SBJC,
			String NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ACRV_SBJC", ACRV_SBJC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		getSqlSession().select("balanceDAO.getArcvOcuListExcel", param, handler);
	}

	public void getBcdDayListExcel(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TR_DT", TR_DT);
		param.put("ROTS_CTR_DSC", ROTS_CTR_DSC);
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TRPL_C", TRPL_C);
	
		getSqlSession().select("balanceDAO.getBcdDayListExcel", param, handler);
	}
}
