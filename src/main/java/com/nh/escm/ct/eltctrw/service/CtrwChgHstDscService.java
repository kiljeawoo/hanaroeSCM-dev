package com.nh.escm.ct.eltctrw.service;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.ct.eltctrw.dao.CtrwChgHstDscDAO;


@Service
public class CtrwChgHstDscService  extends AbstractService {
	

	@Autowired
	private  CtrwChgHstDscDAO ctrwChgHstDscDAO;
	
	public List<Map<String, Object>> retrieveCtrwChgHstDscList(String ELT_CTRW_NO) {
		try {
			return ctrwChgHstDscDAO.retrieveCtrwChgHstDscList(ELT_CTRW_NO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
		
	
}
