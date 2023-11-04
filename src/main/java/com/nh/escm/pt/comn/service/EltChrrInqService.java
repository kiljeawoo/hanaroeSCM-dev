package com.nh.escm.pt.comn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.comn.dao.EltChrrInqDAO;
import com.nh.escm.pt.comn.vo.EltChrrInqVO;

public class EltChrrInqService extends AbstractService {
	
	@Autowired
	private EltChrrInqDAO eltChrrInqDAO;
	
	public List<EltChrrInqVO> retrieveEltChrrInq(String NA_TRPL_C) {
		try {
			return eltChrrInqDAO.retrieveEltChrrInq(NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	

}
