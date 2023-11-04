package com.nh.escm.pt.myinf.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pt.myinf.dao.InfAnssDAO;

@Service
public class InfAnssService extends AbstractService {
	
	@Autowired
	private InfAnssDAO infAnssDAO;
	
	public List<Map<String, Object>> retrieveInfAnssList(String RMS_MM, String RMS_TRPL_C, String TRPL_C) {
		try {
			return infAnssDAO.retrieveInfAnssList(RMS_MM, RMS_TRPL_C, TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelInfAnssList(String RMS_MM, String RMS_TRPL_C, String TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			infAnssDAO.downloadExcelInfAnssList(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
