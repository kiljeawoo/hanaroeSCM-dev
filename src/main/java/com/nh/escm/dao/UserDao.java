package com.nh.escm.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.vo.User;

public class UserDao extends AbstractDao {
	
	@Autowired(required = false)
	private PasswordEncoder passwordEncoder;
	
	public void insert(User user) {
		if (passwordEncoder != null) {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
		}
		getSqlSession().insert("user.insert", user);
	}
	
	public void update(User user) {
		if (passwordEncoder != null && StringUtils.isNotEmpty(user.getPassword())) {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
		}
		getSqlSession().update("user.update", user);
	}
	
	public void delete(String userId) {
		getSqlSession().delete("user.delete", userId);
	}
	
	public User select(String userId) {
		return getSqlSession().selectOne("user.select", userId);
	}
	
	public List<User> selectList(String searchType, String searchValue) {
		Map<String, Object> param = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(searchValue)) {
			param.put("searchType", searchType);
			param.put("searchValue", "%" + escape(searchValue) + "%"); // escape
		}
		return getSqlSession().selectList("user.selectList", param);
	}
	
	public List<User> selectList(String searchType, String searchValue, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(searchValue)) {
			param.put("searchType", searchType);
			param.put("searchValue", "%" + escape(searchValue) + "%"); // escape
		}
		param.put("start", start);
		param.put("limit", limit);
//		param.put("sortName", limit);
//		param.put("sortType", limit);
		return getSqlSession().selectList("user.selectPageList", param);
	}
	
	public int countList(String searchType, String searchValue) {
		Map<String, Object> param = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(searchValue)) {
			param.put("searchType", searchType);
			param.put("searchValue", "%" + escape(searchValue) + "%"); // escape
		}
		return (Integer) getSqlSession().selectOne("user.countList", param);
	}
	
	public boolean isExistUser(String userId) {
		return (Integer) getSqlSession().selectOne("user.countByUserId", userId) > 0;
	}
	
}
