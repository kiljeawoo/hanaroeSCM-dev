package com.nh.escm.pt.myinf.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pt.myinf.dao.UsAmScfwDAO;

@Service
public class UsAmScfwService extends AbstractService {
	
	@Autowired
	private UsAmScfwDAO usAmScfwDAO;
	
	public Map<String, Object> retrieveUsAmScfw(String NA_TRPL_C, String MOBILE) {
		try {
			return usAmScfwDAO.retrieveUsAmScfw(NA_TRPL_C,MOBILE);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveUsAmScfwList(String NA_TRPL_C, String MOBILE) {
		try {
			return usAmScfwDAO.retrieveUsAmScfwList(NA_TRPL_C,MOBILE);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public void retrieveUsAmScfwListForExcel(String NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			usAmScfwDAO.retrieveUsAmScfwListForExcel(NA_TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public void deleteUsAmScfwListForExcel(String NA_TRPL_C) {
		try {
			usAmScfwDAO.deleteUsAmScfwListForExcel(NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public Map<String, Object> retrieveUsOverAm(String glnCode) {
		try {
			return usAmScfwDAO.retrieveUsOverAm(glnCode);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void insertUsAmScfwListForExcel(String NA_TRPL_C) {
		try {
			usAmScfwDAO.insertUsAmScfwListForExcel(NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}		
	}
}
