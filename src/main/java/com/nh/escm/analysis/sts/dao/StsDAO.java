package com.nh.escm.analysis.sts.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class StsDAO extends AbstractDao {	
	

	public List<Map<String, Object>> retrieveDlvRatioList(
			  String[] TRPL_C_ARR
			, String mb_id
			, String date_fr
			, String date_to
			, String ratioDsc
			, String na_bzplc) {
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("TRPL_C_ARR", TRPL_C_ARR);
		paramMap.put("mb_id", mb_id);
		paramMap.put("date_fr", date_fr);
		paramMap.put("date_to", date_to);
		paramMap.put("ratioDsc", ratioDsc);
		
		
		return getSqlSession().selectList("stsDAO.retrieveDlvRatioList", paramMap);
	}
}
