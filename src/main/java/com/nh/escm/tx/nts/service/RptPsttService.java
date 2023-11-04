package com.nh.escm.tx.nts.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.tx.nts.dao.RptPsttDAO;

@Service
public class RptPsttService extends AbstractService {

	@Autowired
	
	private RptPsttDAO rptPsttDao;
	
	public List<Map<String, Object>> retrieveRptPsttNh(DataSet dsCondition) {
		try {
			return rptPsttDao.retrieveRptPsttNh(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveRptPsttEScm(DataSet dsCondition) {
		try {
			return rptPsttDao.retrieveRptPsttEScm(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveRptPstt(DataSet dsCondition) {
		try {
			return rptPsttDao.retrieveRptPstt(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
}
