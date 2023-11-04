package com.nh.escm.common.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.common.dao.PopUpDao;

@Service
public class PopUpService extends AbstractService {

	@Autowired
	private PopUpDao popUpDao;
	
	/**
	 * 상품조회
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchWRS(String NA_TRPL_C, String searchType,String searchText) {
		try {
			return popUpDao.searchWRS(NA_TRPL_C, searchType, searchText);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}
	
	/**
	 * 수요처 조회
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchRVOPL_TRPL(String searchType,String searchText) {
		try {
			return popUpDao.searchRVOPL_TRPL(searchType, searchText);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}	
	
	/**
	 * 공급처 조회
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchSPYPL_TRPL(String searchType,String searchText) {
		try {
			return popUpDao.searchSPYPL_TRPL(searchType, searchText);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}
	
	/**
	 * 공병공상자 검색
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchVCBTBX(String WRS_TPC, String searchType,String searchText) {
		try {
			return popUpDao.searchVCBTBX(WRS_TPC,searchType, searchText);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}
	
	/**
	 * 바이어 검색
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchBUYER(String searchType,String searchText) {
		try {
			return popUpDao.searchBUYER(searchType, searchText);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}
	
	/**
	 * 상품분류 검색
	 * @param searchMode: search, select
	 * @param searchText: 검색어
	 * @param level: L, M, S, D
	 * @param NA_WRS_LCLC 대분류
	 * @param NA_WRS_MCLC 중분류
	 * @param NA_WRS_SCLC 소분류
	 * @return
	 */
	public List<Map<String, Object>> selectWRSPopUp(String searchMode,String searchText,
			String level,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_WRS_SCLC) {
		try {
			return popUpDao.selectWRSPopUp(searchMode, searchText, level, NA_WRS_LCLC, NA_WRS_MCLC, NA_WRS_SCLC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}
	
	
}
