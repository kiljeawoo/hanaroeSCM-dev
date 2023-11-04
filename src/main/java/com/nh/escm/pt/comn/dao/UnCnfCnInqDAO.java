package com.nh.escm.pt.comn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class UnCnfCnInqDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt1(String from, String to, String glnCode, String userTPC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM", from);
		param.put("TO", to);
		param.put("GLNCODE", glnCode);
		param.put("userTPC", userTPC);
		return getSqlSession().selectList("unCnfCnInqDAO.retrieveUnCnfCnInqCnt1", param);
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt2(String from, String to, String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM", from);
		param.put("TO", to);
		param.put("GLNCODE", glnCode);
		return getSqlSession().selectList("unCnfCnInqDAO.retrieveUnCnfCnInqCnt2", param);
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt3(String from, String to, String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM", from);
		param.put("TO", to);
		param.put("GLNCODE", glnCode);
		return getSqlSession().selectList("unCnfCnInqDAO.retrieveUnCnfCnInqCnt3", param);
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt4(String from, String to, String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM", from);
		param.put("TO", to);
		param.put("GLNCODE", glnCode);
		return getSqlSession().selectList("unCnfCnInqDAO.retrieveUnCnfCnInqCnt4", param);
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt5(String from, String to, String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM", from);
		param.put("TO", to);
		param.put("GLNCODE", glnCode);
		return getSqlSession().selectList("unCnfCnInqDAO.retrieveUnCnfCnInqCnt5", param);
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt6(String from, String to, String glnCode, String userTPC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM", from);
		param.put("TO", to);
		param.put("GLNCODE", glnCode);
		param.put("userTPC", userTPC);
		logger.debug("userTPC value:" + userTPC);
		return getSqlSession().selectList("unCnfCnInqDAO.retrieveUnCnfCnInqCnt6", param);
	}
	
	public List<Map<String, Object>> retrieveUnCnfCnInqCnt7(String from, String to, String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM", from);
		param.put("TO", to);
		param.put("GLNCODE", glnCode);
		return getSqlSession().selectList("unCnfCnInqDAO.retrieveUnCnfCnInqCnt7", param);
	}
}
