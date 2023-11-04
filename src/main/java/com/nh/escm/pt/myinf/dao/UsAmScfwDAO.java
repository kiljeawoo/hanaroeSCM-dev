package com.nh.escm.pt.myinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class UsAmScfwDAO extends AbstractDao {
	
	public Map<String, Object> retrieveUsAmScfw(String NA_TRPL_C, String MOBILE) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("MOBILE", MOBILE);
		return getSqlSession().selectOne("usAmScfwDAO.retrieveUsAmScfw", param);
	}
	
	public List<Map<String, Object>> retrieveUsAmScfwList(String NA_TRPL_C, String MOBILE) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("MOBILE", MOBILE);
		return getSqlSession().selectList("usAmScfwDAO.retrieveUsAmScfwList", param);
	}
	
	public void retrieveUsAmScfwListForExcel(String NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		getSqlSession().select("usAmScfwDAO.retrieveUsAmScfwListForExcel", param, handler);
	}
	
	public void deleteUsAmScfwListForExcel(String NA_TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		getSqlSession().delete("usAmScfwDAO.deleteUsAmScfwListForExcel", param);
	}

	public Map<String, Object> retrieveUsOverAm(String glnCode) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", glnCode);
		return getSqlSession().selectOne("usAmScfwDAO.retrieveUsOverAm", param);
	}

	public void insertUsAmScfwListForExcel(String NA_TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		getSqlSession().selectOne("usAmScfwDAO.insertUsAmScfwListForExcel", param);		
	}
}
