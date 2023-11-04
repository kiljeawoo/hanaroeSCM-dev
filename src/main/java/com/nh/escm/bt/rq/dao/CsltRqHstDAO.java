package com.nh.escm.bt.rq.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class CsltRqHstDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveCsltRqHstList(String CSLT_RQ_NO, String USERTYPE) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		param.put("USERTYPE", USERTYPE);
		
		return getSqlSession().selectList("csltRqHstDAO.retrieveCsltRqHstList", param);
	}
	
}
