package com.nh.escm.pt.mymnu.dao;




import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;



/**
 * <PRE> MymnuDAO.java</PRE>
 * @author  	: 김복궁
 * @version 	: 1.0 
 * @since    	: 2015. 8. 13.
 * @modified : 
 * @modifier  : 
 */




public class MymnuDAO extends AbstractDao {		

	public List<Map<String, Object>> retrieveMyMenuList(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return getSqlSession().selectList("mymnuDAO.retrieveMyMenuList",param);
	}

	public int insertMyMenu(String MB_ID, String MENU_ID) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("MENU_ID", MENU_ID);
		return getSqlSession().insert("mymnuDAO.insertMyMenu", param);
	}

	public int deleteMyMenu(String MB_ID, String MENU_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("MENU_ID", MENU_ID);
		return getSqlSession().delete("mymnuDAO.deleteMyMenu", param);
		
	}
	
 
}
