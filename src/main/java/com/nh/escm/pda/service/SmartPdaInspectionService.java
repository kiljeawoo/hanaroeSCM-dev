package com.nh.escm.pda.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pda.dao.SmartPdaInspectionDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class SmartPdaInspectionService extends AbstractService {
	
	@Autowired
	private SmartPdaInspectionDao smartPdaInsDao;
	
	/** 검수내역 조회 페이징 */
	public List<Map<String, Object>> mainSelectList(String from_date, String to_date, String center_code, String na_bzplc, int start, int end) {
		
		return smartPdaInsDao.mainSelectList(from_date, to_date, center_code, na_bzplc, start, end);
	}
	
	public int getMainCount(String from_date,String to_date, String center_code, String na_bzplc) {
		return smartPdaInsDao.getMainCount(from_date, to_date, center_code, na_bzplc);
	}
	
	/** 검수내역 상세 헤더 정보 
	 * @param center_code */
	public Map<String, Object> selectMaster(String na_bzplc, String na_team_c, String dvy_dt, String na_wrsc, String center_code) {
	    return smartPdaInsDao.selectMaster(na_bzplc, na_team_c, dvy_dt, na_wrsc, center_code);
	}


	

	
}