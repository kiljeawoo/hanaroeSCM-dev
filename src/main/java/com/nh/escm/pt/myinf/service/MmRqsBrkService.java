package com.nh.escm.pt.myinf.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pt.myinf.dao.MmRqsBrkDAO;

@Service
public class MmRqsBrkService extends AbstractService {
	
	@Autowired
	private MmRqsBrkDAO mmRqsBrkDAO;
	
	public List<Map<String, Object>> retrieveMmRqsBrkInit(String NA_TRPL_C) {
		try {
			return mmRqsBrkDAO.retrieveMmRqsBrkInit(NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveMmRqsBrkInit1(String NA_TRPL_C) {
		try {
			return mmRqsBrkDAO.retrieveMmRqsBrkInit1(NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveMmRqsBrk(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		try {
			return mmRqsBrkDAO.retrieveMmRqsBrk(RMS_MM, RMS_TRPL_C, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public Map<String, Object> retrieveDetailMmRqsBrk(String NA_TRPL_C, String RMS_MM, String RMS_TRPL_C) {
		try {
			return mmRqsBrkDAO.retrieveDetailMmRqsBrk(NA_TRPL_C, RMS_MM, RMS_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public void downloadExcelMmRqsBrk(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			mmRqsBrkDAO.downloadExcelMmRqsBrk(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
}
