package com.nh.escm.pds.pay.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pay.dao.CreditSaleDAO;

@Service
public class CreditSaleService extends AbstractService {

	@Autowired
	private CreditSaleDAO creditSaleDAO;
	
	Logger logger = LoggerUtil.getServerLogger(this);
	/**
	 * 외상매출회수 예정내역
	 * @param DATE_TYPE
	 * @param FROM_DT
	 * @param TO_DT
	 * @param NA_BZPLC
	 * @param CPL_YN
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getCreditSaleReserveList(
			String DATE_TYPE,
			String FROM_DT,
			String TO_DT,
			String NA_BZPLC,
			String CPL_YN,
			String[] TRPL_C)
			throws AppetizerException{
		try {
			return creditSaleDAO.getCreditSaleReserveList(DATE_TYPE, FROM_DT, TO_DT, NA_BZPLC, CPL_YN, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}				
	}


	/**
	 * 외상매출회수예정합계
	 * @param DATE_TYPE
	 * @param START_DATE
	 * @param END_DATE
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public Map<String, Object> getCreditSaleReserveListSum(
			String DATE_TYPE,
			String START_DATE,
			String END_DATE,
			String NA_BZPLC,
			String[] TRPL_C)
			throws AppetizerException{
		try {
			return creditSaleDAO.getCreditSaleReserveListSum(DATE_TYPE, START_DATE, END_DATE, NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}				
	}

	/**
	 * 외상매출회수내역
	 * @param START_DATE
	 * @param END_DATE
	 * @param ROTS_CTR_DSC
	 * @param ADJ_NA_BZPLC
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public List<Map<String, Object>> getCreditSaleList(
			String START_DATE,
			String END_DATE,
			String ROTS_CTR_DSC,
			String ADJ_NA_BZPLC,
			String[] TRPL_C) throws AppetizerException{
		try {
			return creditSaleDAO.getCreditSaleList(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 외상매출내역합계
	 * @param START_DATE
	 * @param END_DATE
	 * @param ROTS_CTR_DSC
	 * @param ADJ_NA_BZPLC
	 * @param TRPL_C
	 * @return
	 * @throws AppetizerException
	 */
	public Map<String, Object> getCreditSaleListSum(
			String START_DATE,
			String END_DATE,
			String ROTS_CTR_DSC,
			String ADJ_NA_BZPLC,
			String[] TRPL_C) throws AppetizerException{
		try {
			return creditSaleDAO.getCreditSaleListSum(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}


	public void getCreditSaleReserveListExcel(
			String DATE_TYPE,
			String FROM_DT,
			String TO_DT,
			String NA_BZPLC,
			String CPL_YN,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler)
			throws AppetizerException{
		try {
			creditSaleDAO.getCreditSaleReserveListExcel(DATE_TYPE, FROM_DT, TO_DT, NA_BZPLC, CPL_YN, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}				
	}


	public void getCreditSaleListExcel(
			String START_DATE,
			String END_DATE,
			String ROTS_CTR_DSC,
			String ADJ_NA_BZPLC,
			String[] TRPL_C,
			ExcelFileMakerResultHandler handler) throws AppetizerException{
		try {
			creditSaleDAO.getCreditSaleListExcel(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
