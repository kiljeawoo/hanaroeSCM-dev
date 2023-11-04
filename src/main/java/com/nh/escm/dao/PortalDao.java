package com.nh.escm.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.vo.Menu;
//import com.nh.escm.vo.User;

public class PortalDao extends AbstractDao {
	
	@Autowired(required = false)
	
//	private PasswordEncoder passwordEncoder;
	
//	public void insert(User user) {
//		if (passwordEncoder != null) {
//			user.setPassword(passwordEncoder.encode(user.getPassword()));
//		}
//		getSqlSession().insert("user.insert", user);
//	}
//	
//	public void update(User user) {
//		if (passwordEncoder != null && StringUtils.isNotEmpty(user.getPassword())) {
//			user.setPassword(passwordEncoder.encode(user.getPassword()));
//		}
//		getSqlSession().update("user.update", user);
//	}
//	
//	public void delete(String userId) {
//		getSqlSession().delete("user.delete", userId);
//	}
//	
	public Menu select(String menuId) {
		return getSqlSession().selectOne("menu.select", menuId);
	}
	
	public List<Menu> selectList(String searchType, String searchValue) {
		Map<String, Object> param = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(searchValue)) {
			param.put("searchType", searchType);
			param.put("searchValue", "%" + escape(searchValue) + "%"); // escape
		}
		return getSqlSession().selectList("menu.selectList", param);
	}
	
	
	public List<Menu> selectListAll() {
		Map<String, Object> param = new HashMap<String, Object>();
		
//		param.put("start", start);
//		param.put("limit", limit);
//		param.put("sortName", limit);
//		param.put("sortType", limit);
		return getSqlSession().selectList("menu.select_all", param);
	}
	
	
	public List<Menu> selectList(String searchType, String searchValue, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(searchValue)) {
			param.put("searchType", searchType);
			param.put("searchValue", "%" + escape(searchValue) + "%"); // escape
		}
		param.put("start", start);
		param.put("limit", limit);
//		param.put("sortName", limit);
//		param.put("sortType", limit);
		return getSqlSession().selectList("menu.selectPageList", param);
	}
	
	public int countList(String searchType, String searchValue) {
		Map<String, Object> param = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(searchValue)) {
			param.put("searchType", searchType);
			param.put("searchValue", "%" + escape(searchValue) + "%"); // escape
		}
		return (Integer) getSqlSession().selectOne("menu.countList", param);
	}
	
	public boolean isExistMenu(String MenuId) {
		return (Integer) getSqlSession().selectOne("menu.countByMenuId", MenuId) > 0;
	}
	
}
