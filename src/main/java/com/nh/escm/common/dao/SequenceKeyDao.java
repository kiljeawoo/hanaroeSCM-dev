package com.nh.escm.common.dao;

import java.util.HashMap;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class SequenceKeyDao extends AbstractDao {

	public Map<String, Object> getCurrentSEQ(String NAME) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NAME", NAME);
		return getSqlSession().selectOne("sequence.getCurrentSEQ", param);
	}
	
	public boolean initSEQ(String NAME) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NAME", NAME);
		return getSqlSession().insert("sequence.initSEQ", param) > 0;
	}
	
	public boolean saveSEQ(long CURRENT_KEY, String CURRENT_HEX, String NAME) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CURRENT_KEY", CURRENT_KEY);
		param.put("CURRENT_HEX", CURRENT_HEX);
		param.put("NAME", NAME);
		return getSqlSession().update("sequence.saveSEQ", param) > 0;
	}
}
