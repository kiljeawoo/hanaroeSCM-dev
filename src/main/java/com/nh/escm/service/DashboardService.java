package com.nh.escm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.dao.DashboardDao;
import com.nh.escm.vo.DashboardSet;

@Service
public class DashboardService extends AbstractService {
	
	@Autowired
	private DashboardDao dashboardDao;
	
	public List<DashboardSet> getDashboardSetList(String type) {
		try {
			return dashboardDao.selectDashboardSetList(type);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public void updateDashboardSetList(List<DashboardSet> list) {
		if (list == null) {
			return;
		}
		try {
			dashboardDao.updateDashboardSetList(list);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
}
