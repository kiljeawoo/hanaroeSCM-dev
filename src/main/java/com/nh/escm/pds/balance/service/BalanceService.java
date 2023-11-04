package com.nh.escm.pds.balance.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.time.DateUtils;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.balance.dao.BalanceDAO;

@Service
public class BalanceService extends AbstractService {

	@Autowired
	private BalanceDAO balanceDAO;
	
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
			String[] TRPL_C, String IS_AUTH_ALL)
			throws AppetizerException{
		try {
			return balanceDAO.getMonthlyBalanceList(BAS_YM, ADJ_NA_BZPLC, TRPL_C,IS_AUTH_ALL);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}				
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
			String[] TRPL_C, String IS_AUTH_ALL)
			throws AppetizerException{
		try {
			return balanceDAO.getMonthlyBalanceListSum(BAS_YM, ADJ_NA_BZPLC, TRPL_C,IS_AUTH_ALL);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}		
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
			String NA_ADJPL_C)
			throws AppetizerException{
		try {
			return balanceDAO.getMonthlyBalanceDetailList(BAS_YM, ADJ_NA_BZPLC, NA_ADJPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
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
			String[] TRPL_C) throws AppetizerException{
		try {
			return balanceDAO.getPrePayDayList(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 일선수금원장조회 합계
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getPrePayDayListSum(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C) throws AppetizerException{
		try {
			return balanceDAO.getPrePayDayListSum(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 미수금원장조회(농협기준)
	 * @param TR_DT
	 * @param ACRV_SBJC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getArcvOcuList(
			String TR_DT,
			String ACRV_SBJC,
			String NA_BZPLC,
			String[] TRPL_C) throws AppetizerException{
		try {
			return balanceDAO.getArcvOcuList(TR_DT, ACRV_SBJC, NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}


	/**
	 * 일잔액장조회
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getBcdDayList(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C) throws AppetizerException{
		try {
			return balanceDAO.getBcdDayList(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}


	/**
	 * 일잔액장조회합계
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getBcdDayListSum(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C) throws AppetizerException{
		try {
			return balanceDAO.getBcdDayListSum(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	public String getDDL_DT() throws AppetizerException{
		Map<String, Object> map = balanceDAO.getDDL_DT(null);
		String LST_DT = map.get("LST_DT").toString();
		String BIZDT_YN = map.get("BIZDT_YN").toString();
		
		if(BIZDT_YN.equals("1")) {
			return LST_DT;
		} else {
			while(true) {
				Date beforDate = DateUtils.addDays(DateUtil.convertStringToTimestamp(LST_DT, "yyyyMMdd"), -1);
				Map<String, Object> map2 = balanceDAO.getDDL_DT(DateUtil.convertDateToString("yyyyMMdd", beforDate));
				LST_DT = map2.get("LST_DT").toString();
				BIZDT_YN = map2.get("BIZDT_YN").toString();
				if(BIZDT_YN.equals("1")) {
					break;
				}
			}
			return LST_DT;
		}
		
	}

	public void getMonthlyBalanceListExcel(
			String BAS_YM,
			String ADJ_NA_BZPLC,
			String[] TRPL_C, String IS_AUTH_ALL,
			ExcelFileMakerResultHandler handler)
			throws AppetizerException{
		try {
			balanceDAO.getMonthlyBalanceListExcel(BAS_YM, ADJ_NA_BZPLC, TRPL_C,IS_AUTH_ALL, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void getPrePayDayListExcel(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) throws AppetizerException{
		try {
			balanceDAO.getPrePayDayListExcel(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void getArcvOcuListExcel(
			String TR_DT,
			String ACRV_SBJC,
			String NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) throws AppetizerException{
		try {
			balanceDAO.getArcvOcuListExcel(TR_DT, ACRV_SBJC, NA_BZPLC, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void getBcdDayListExcel(
			String TR_DT,
			String ROTS_CTR_DSC,
			String NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) throws AppetizerException{
		try {
			balanceDAO.getBcdDayListExcel(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
