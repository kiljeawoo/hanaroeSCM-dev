package com.nh.escm.pt.myinf.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pt.myinf.dao.EdiSvcDtpBrkDAO;

@Service
public class EdiSvcDtpBrkService extends AbstractService {
	
	@Autowired
	private EdiSvcDtpBrkDAO ediSvcDtpBrkDAO;
	
	public List<Map<String, Object>> retrieveEdiSvcDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		try {
			return ediSvcDtpBrkDAO.retrieveEdiSvcDtpBrkList(RMS_MM, RMS_TRPL_C, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public void downloadEdiSvcDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			ediSvcDtpBrkDAO.downloadEdiSvcDtpBrkList(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveEdiSvcDtpBrkList_LOC(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		try {
			return ediSvcDtpBrkDAO.retrieveEdiSvcDtpBrkList_LOC(RMS_MM, RMS_TRPL_C, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public void downloadEdiSvcDtpBrkList_LOC(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			ediSvcDtpBrkDAO.downloadEdiSvcDtpBrkList_LOC(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
}
