package com.nh.escm.pt.usrinf.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.pt.usrinf.dao.IdPwInqDAO;
import com.nh.escm.pt.usrinf.dao.LginLgotDAO;


/**
 * <pre>PwChgService.java</pre>
 * @author 김복궁
 * @version 1.0
 * @since 2015. 8. 31.
 * @modified 
 * @modifier 
 */
@Service
public class PwChgService extends AbstractService {
	
	@Autowired
	private LginLgotDAO loginDAO;
	@Autowired
	private IdPwInqDAO idPwInqDAO;

	public boolean isExisePw(String MB_ID, String MB_PW) {		
		return loginDAO.isExistUser(MB_ID, MB_PW ,null);
	}

	public boolean updatePw(String MB_ID, String MB_PW) {
		try {			
			return idPwInqDAO.updateMbPw(MB_ID, MB_PW, DateUtil.getCurrentDate("yyyyMMdd"));
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	public boolean updateLockYn(String MB_ID) {
		try {			
			return idPwInqDAO.updateLockYn(MB_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
}
