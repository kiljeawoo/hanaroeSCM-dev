package com.nh.escm.pt.comn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;


public class TrplCInqDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveNaBzplCList(String CBO_COMP, String EDT_COMP, String USR_TPC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_COMP", CBO_COMP);		
		param.put("EDT_COMP", EDT_COMP);
		param.put("USR_TPC", USR_TPC);
		
		return getSqlSession().selectList("trplCInqDAO.retrieveNaBzplCList",param);
	}
	
	

	
}


