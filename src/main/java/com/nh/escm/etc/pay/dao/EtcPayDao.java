package com.nh.escm.etc.pay.dao;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.vo.User;

public class EtcPayDao extends AbstractDao {
	
	public void update(User user) {
		getSqlSession().update("etcPayDao.update", user);
	}
	
	public User select(String userId) {
		return getSqlSession().selectOne("etcPayDao.select", userId);
	}
	
	public List<User> selectList(String searchType, String searchValue) {
		Map<String, Object> param = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(searchValue)) {
			param.put("searchType", searchType);
			param.put("searchValue", "%" + escape(searchValue) + "%"); // escape
		}
		return getSqlSession().selectList("etcPayDao.selectList", param);
	}
	
	public int searchCnt(String gln, String kbn) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("gln", gln);
		param.put("kbn", kbn);
		
		return getSqlSession().selectOne("etcPayDao.searchCnt", param);
	}
	
	public List<Map<String, Object>> empList(String gln, String kbn) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("gln", gln);
		param.put("kbn", kbn);
		
		return getSqlSession().selectList("etcPayDao.empList", param);
	}
	
	public List<Map<String, Object>> searchList(String gln, String kbn, String empNo, String mbPw) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("gln", gln);
		param.put("kbn", kbn);
		param.put("empNo", empNo);
		param.put("mbPw", mbPw);
		
		return getSqlSession().selectList("etcPayDao.searchList", param);
	}
	
	public List<Map<String, Object>> retrieveList(String gln, String kbn, String empNo, String mbPw) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("gln", gln);
		param.put("kbn", kbn);
		param.put("empNo", empNo);
		param.put("mbPw", mbPw);
		
		return getSqlSession().selectList("etcPayDao.retrieveList", param);
	}
	
	public int updateEtcPay(String gln, String bnkNm, String acno, String dprnm, String chrrnm, String ctcplTelno, String empNo, String mbPw) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("gln", gln);
		param.put("bnkNm", bnkNm);
		param.put("acno", acno);
		param.put("dprnm", dprnm);
		param.put("chrrnm", chrrnm);
		param.put("ctcplTelno", ctcplTelno);
		param.put("empNo", empNo);
		param.put("mbPw", mbPw);
		
		return getSqlSession().update("etcPayDao.updateEtcPay", param);
	}
	
	public List<Map<String, Object>> searchUserList(String gln) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("gln", gln);
		
		return getSqlSession().selectList("etcPayDao.searchUserList", param);
	}
	
	public int initEtcPayUser(String gln) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("gln", gln);
		
		return getSqlSession().update("etcPayDao.initEtcPayUser", param);
	}
}
