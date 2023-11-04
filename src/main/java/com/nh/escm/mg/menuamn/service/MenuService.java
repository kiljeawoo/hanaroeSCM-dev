package com.nh.escm.mg.menuamn.service;

/**
 * <PRE>  
 * 	메뉴관리 Service
 * </PRE>
 * @author  :김복궁
 * @version : 1.0 
 * @since : 2015.06.04
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
import com.nh.escm.mg.menuamn.dao.MenuDAO;
import com.nh.escm.pds.sales.dao.PDSSalesDAO;


@Service
public class MenuService extends AbstractService {

	
	@Autowired
	private MenuDAO menuDAO;
	
	@Autowired
	private PDSSalesDAO salesDAO;
	
	public List<Map<String, Object>> retrieveMenuList(String NA_TRPL_C, String MBCO_TYPE, String USR_TP , String COMP_TPC){
		try {
			
			boolean  isXmlUser = menuDAO.isXmlUser(NA_TRPL_C);
			
			List<Map<String, Object>> liquorList = salesDAO.getLiquorYn(NA_TRPL_C);
			
			String LIQUOR_YN = liquorList.get(0).get("LIQUOR_YN").toString();
			
			List<Map<String, Object>> list = menuDAO.retrieveMenuList(NA_TRPL_C,MBCO_TYPE, USR_TP ,isXmlUser , COMP_TPC, LIQUOR_YN);
			return list;
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveMyMenuList(String USR_TP, String USR_AUTH) {
		try {			
			
			if(USR_AUTH.contains("1")){			
				USR_AUTH ="Y";
			}else{
				USR_AUTH ="N";				
			}
			
			List<Map<String, Object>> list = menuDAO.retrieveMyMenuList(USR_TP,USR_AUTH);
			return list;
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
}
