package com.nh.escm.pt.comn.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.comn.dao.TrplCInqDAO;

public class TrplCInqService extends AbstractService {
	
	@Autowired
	private TrplCInqDAO trplCInqDAO;
	
	public List<Map<String, Object>> retrieveNaBzplCList(String CBO_COMP, String EDT_COMP, String USR_TPC) {
		try {
			return trplCInqDAO.retrieveNaBzplCList(CBO_COMP,EDT_COMP, USR_TPC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	
	


}
