package com.nh.escm.pt.myinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class EdiSvcDtpBrkDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveEdiSvcDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("ediSvcDtpBrkDAO.retrieveEdiSvcDtpBrkList", param);
	}
	
	public void downloadEdiSvcDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		getSqlSession().select("ediSvcDtpBrkDAO.downloadEdiSvcDtpBrkList", param, handler);
	}
	
	public List<Map<String, Object>> retrieveEdiSvcDtpBrkList_LOC(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("ediSvcDtpBrkDAO.retrieveEdiSvcDtpBrkList_LOC", param);
	}
	
	public void downloadEdiSvcDtpBrkList_LOC(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("RMS_MM", RMS_MM);
		param.put("RMS_TRPL_C", RMS_TRPL_C);
		param.put("TRPL_C", TRPL_C);
		getSqlSession().select("ediSvcDtpBrkDAO.downloadEdiSvcDtpBrkList_LOC", param, handler);
	}
	
}
