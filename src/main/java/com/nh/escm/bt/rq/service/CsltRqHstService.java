package com.nh.escm.bt.rq.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.bt.rq.dao.CsltRqHstDAO;

@Service
public class CsltRqHstService extends AbstractService {
	
	@Autowired
	private CsltRqHstDAO csltRqHstDAO;
	
	public List<Map<String, Object>> retrieveCsltRqHstList(String CSLT_RQ_NO, String USERTYPE) {
		try {
			return csltRqHstDAO.retrieveCsltRqHstList(CSLT_RQ_NO, USERTYPE);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
}
