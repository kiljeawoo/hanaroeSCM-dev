package com.nh.escm.pt.myinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class AdinfDtpBrkDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveAdinfDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("adinfDtpBrkDAO.retrieveAdinfDtpBrkList", param);
	}

	public void downloadExcelAdinfDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		getSqlSession().select("adinfDtpBrkDAO.downloadExcelAdinfDtpBrkList", param, handler);
	}
}
