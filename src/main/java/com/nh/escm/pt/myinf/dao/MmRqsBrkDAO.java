package com.nh.escm.pt.myinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class MmRqsBrkDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveMmRqsBrkInit(String NA_TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		return getSqlSession().selectList("mmRqsBrkDAO.retrieveMmRqsBrkInit", param);
	}
	
	public List<Map<String, Object>> retrieveMmRqsBrkInit1(String NA_TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		return getSqlSession().selectList("mmRqsBrkDAO.retrieveMmRqsBrkInit1", param);
	}
	
	public List<Map<String, Object>> retrieveMmRqsBrk(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("mmRqsBrkDAO.retrieveMmRqsBrk", param);
	}
	
	public Map<String, Object> retrieveDetailMmRqsBrk(String NA_TRPL_C, String RMS_MM, String RMS_TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		return getSqlSession().selectOne("mmRqsBrkDAO.retrieveDetailMmRqsBrk", param);
	}
	
	public void downloadExcelMmRqsBrk(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		getSqlSession().select("mmRqsBrkDAO.downloadExcelMmRqsBrk", param, handler);
	}
	
}
