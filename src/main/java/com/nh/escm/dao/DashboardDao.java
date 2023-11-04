package com.nh.escm.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.vo.DashboardSet;

public class DashboardDao extends AbstractDao {
	
	public List<DashboardSet> selectDashboardSetList(String type) {
		Map<String, String> param = new HashMap<String, String>();
		param.put("type", type);
		return getSqlSession().selectList("dashboard.selectDashboardSetList", param);
	}
	
	public void updateDashboardSetList(List<DashboardSet> list) {
		for (DashboardSet set : list) {
			getSqlSession().update("dashboard.updateDashboardSet", set);
		}
	}
	
}
