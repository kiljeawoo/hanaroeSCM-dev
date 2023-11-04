package com.nh.escm.pt.myinf.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pt.myinf.dao.AdinfDtpBrkDAO;

@Service
public class AdinfDtpBrkService extends AbstractService {
	
	@Autowired
	private AdinfDtpBrkDAO adinfDtpBrkDAO;
	
	public List<Map<String, Object>> retrieveAdinfDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		try {
			return adinfDtpBrkDAO.retrieveAdinfDtpBrkList(RMS_MM, RMS_TRPL_C, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelAdinfDtpBrkList(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			adinfDtpBrkDAO.downloadExcelAdinfDtpBrkList(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
