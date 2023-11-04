package com.nh.escm.mg.menuamn.dao;


/**
 * <PRE>  
 * 	메뉴관리 Dao
 * </PRE>
 * @author  :김복궁
 * @version : 1.0 
 * @since : 2015.06.04
 * @modified
 * @modifier 
 */

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;



public class MenuDAO extends AbstractDao {
		
	public List<Map<String, Object>> retrieveMenuList(String NA_TRPL_C, String MBCO_TYPE, String USR_TPC, boolean isXmlUser, String COMP_TPC, String LIQUOR_YN){
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("MBCO_TYPE", MBCO_TYPE);
		param.put("USR_TPC", USR_TPC);		
		param.put("XMLUSER_YN", isXmlUser == true ? "Y":"N");
		param.put("COMP_TPC", COMP_TPC);
		
		String LIQUOR_YN_S = "";
		
		if("1".equals(LIQUOR_YN)){
			LIQUOR_YN_S = "10";
		}else{
			LIQUOR_YN_S = "01";
		}
		
		param.put("LIQUOR_YN", LIQUOR_YN_S);
		
		return getSqlSession().selectList("menuDAO.retrieveMenuList",param);
	}

	public List<Map<String, Object>> retrieveMyMenuList(String USR_TPC, String BUILLING_AUTH_YN) {
		Map<String, Object> param = new HashMap<String, Object>();
		String typ = "";
		if("01".equals(USR_TPC)){
			typ = "11";
		}else if("02".equals(USR_TPC)){
			typ = "21";
		}else if("03".equals(USR_TPC)){
			typ = "31";
		}else if("04".equals(USR_TPC)){
			typ = "41";
		}else if("05".equals(USR_TPC)){
			typ = "51";
		}else if("81".equals(USR_TPC)){
			typ = "62";
		}
		param.put("USR_TPC", USR_TPC);
		param.put("GUBUN_TYP", typ);
		param.put("BUILLING_AUTH_YN", BUILLING_AUTH_YN);
		
		return getSqlSession().selectList("menuDAO.retrieveMyMenuList",param);
	}

	public boolean isXmlUser(String NA_TRPL_C) {
//		Map<String, Object> param = new HashMap<String, Object>();		
//		param.put("NA_TRPL_C", NA_TRPL_C);		
//		return (Integer)getSqlSession().selectOne("menuDAO.isXmlUser",param)>0;
		return false;
	}
}
