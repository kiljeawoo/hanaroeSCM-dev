package com.nh.escm.pt.comn.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.comn.dao.UnCnfCnInqDAO;

public class UnCnfCnInqService extends AbstractService {
	
	@Autowired
	private UnCnfCnInqDAO unCnfCnInqDAO;
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt1(String from, String to, String glnCode, String userTPC) {
		try {
			return unCnfCnInqDAO.retrieveUnCnfCnInqCnt1(from, to, glnCode, userTPC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt2(String from, String to, String glnCode) {
		try {
			return unCnfCnInqDAO.retrieveUnCnfCnInqCnt2(from, to, glnCode);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt3(String from, String to, String glnCode) {
		try {
			return unCnfCnInqDAO.retrieveUnCnfCnInqCnt3(from, to, glnCode);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt4(String from, String to, String glnCode) {
		try {
			return unCnfCnInqDAO.retrieveUnCnfCnInqCnt4(from, to, glnCode);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt5(String from, String to, String glnCode) {
		try {
			return unCnfCnInqDAO.retrieveUnCnfCnInqCnt5(from, to, glnCode);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt6(String from, String to, String glnCode, String userTPC) {
		try {
			return unCnfCnInqDAO.retrieveUnCnfCnInqCnt6(from, to, glnCode, userTPC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt7(String from, String to, String glnCode) {
		try {
			return unCnfCnInqDAO.retrieveUnCnfCnInqCnt7(from, to, glnCode);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
}
