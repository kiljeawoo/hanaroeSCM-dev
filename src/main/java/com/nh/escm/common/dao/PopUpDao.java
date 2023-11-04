package com.nh.escm.common.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.esum.appetizer.dao.AbstractDao;

public class PopUpDao extends AbstractDao {
	
	/**
	 * 상품조회
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchWRS(String NA_TRPL_C, String searchType,String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("searchType", searchType);
		param.put("searchText", searchText);

		return getSqlSession().selectList("popup.searchWRS", param);
	}
	
	/**
	 * 수요처 조회
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchRVOPL_TRPL(String searchType,String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchType", searchType);
		param.put("searchText", searchText);

		return getSqlSession().selectList("popup.searchRVOPL_TRPL", param);
	}	
	
	/**
	 * 공급처 조회
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchSPYPL_TRPL(String searchType,String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchType", searchType);
		param.put("searchText", searchText);

		return getSqlSession().selectList("popup.searchSPYPL_TRPL", param);
	}
	
	/**
	 * 공병공상자 검색
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchVCBTBX(String WRS_TPC, String searchType,String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("WRS_TPC", WRS_TPC);
		param.put("searchType", searchType);
		param.put("searchText", searchText);

		return getSqlSession().selectList("popup.searchVCBTBX", param);
	}
	
	/**
	 * 바이어 검색
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<Map<String, Object>> searchBUYER(String searchType,String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchType", searchType);
		param.put("searchText", searchText);
		return getSqlSession().selectList("popup.searchBUYER", param);
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
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchMode", searchMode);
		param.put("searchText", searchText);
		param.put("level", level);
		param.put("NA_WRS_LCLC", NA_WRS_LCLC);
		param.put("NA_WRS_MCLC", NA_WRS_MCLC);
		param.put("NA_WRS_SCLC", NA_WRS_SCLC);
		
		return getSqlSession().selectList("popup.selectWRSPopUp", param);
	}	
	
	
}

