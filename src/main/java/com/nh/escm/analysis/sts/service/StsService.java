package com.nh.escm.analysis.sts.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;

import com.nh.escm.analysis.sts.dao.*;

@Service
public class StsService  extends AbstractService  {
	
	@Autowired
	private StsDAO stsDAO;
	
	public List<Map<String, Object>> retrieveDlvRatioList(String[] TRPL_C_ARR, String mb_id, String date_fr, String date_to, String ratioDsc, String na_bzplc) {
		
		try{
			
			return stsDAO.retrieveDlvRatioList(TRPL_C_ARR, mb_id, date_fr, date_to, ratioDsc, na_bzplc);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
	}

}
