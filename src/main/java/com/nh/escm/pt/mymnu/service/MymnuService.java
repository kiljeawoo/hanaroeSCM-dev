package com.nh.escm.pt.mymnu.service;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.mymnu.dao.MymnuDAO;


/**
 * <PRE> MymnuService.java</PRE>
 * @author  	: 김복궁
 * @version 	: 1.0 
 * @since    	: 2015. 8. 13.
 * @modified : 
 * @modifier  : 
 */




@Service
public class MymnuService extends AbstractService {

	
	@Autowired
	private MymnuDAO mymnuDAO;
 
	public List<Map<String, Object>> retrieveMyMenuList(String MB_ID) {
		try {			
			List<Map<String, Object>> list = mymnuDAO.retrieveMyMenuList(MB_ID);
			return list;
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public void deleteMyMenu(String MB_ID, String MENU_ID) {
		try {			
			mymnuDAO.deleteMyMenu(MB_ID, MENU_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	public void insertMyMenu(String MB_ID, String MENU_ID) {
		try {			
			mymnuDAO.insertMyMenu(MB_ID, MENU_ID);
		} catch (DuplicateKeyException e) {			
			throw new DuplicateKeyException("");
		}
	}

 
 
}
