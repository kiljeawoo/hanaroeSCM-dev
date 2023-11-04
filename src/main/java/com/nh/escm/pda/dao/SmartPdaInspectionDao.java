package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class SmartPdaInspectionDao extends AbstractDao {
	
	/** 검수내역 조회 */
	public List<Map<String, Object>> mainSelectList(String from_date,String to_date, String center_code,
			String na_bzplc, int start, int end) {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		param.put("BUYPL_NA_TRPL_C", center_code);
		param.put("NA_BZPLC", na_bzplc);
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("smartpdaInspection.mainSelectList", param);
	}
	
	/** PDA 리스트 페이지 추가 */
	public int getMainCount(String from_date, String to_date, String center_code, String na_bzplc) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		param.put("BUYPL_NA_TRPL_C", center_code);
		param.put("NA_BZPLC", na_bzplc);

		
		return getSqlSession().selectOne("smartpdaInspection.getMainCount", param);
	}
	
	/** 검수내역 상세 헤더 정보 */
	public Map<String, Object> selectMaster(String na_bzplc, String na_team_c, String dvy_dt, String na_wrsc, String center_code) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", na_bzplc);
		param.put("NA_TEAM_C", na_team_c);
		param.put("dvy_dt", dvy_dt);
		param.put("NA_WRS_C", na_wrsc);
		param.put("BUYPL_NA_TRPL_C", center_code);
		
		return getSqlSession().selectOne("smartpdaInspection.selectMaster", param);
	}


}
