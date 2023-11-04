package com.nh.escm.mob.markDown.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class MdInfMgrDao extends AbstractDao
{
	/** 가격할인 이력정보 페이지 추가 */
	public int getMainCount(String trplC, String clntNm, String chId_cd, String md_id, String chNm_cd, String md_nm, 
			String wrs_cd, String wrs_nm, String fm_rate, String to_rate, String fm_pcnt, String to_pcnt, String from_dt, String to_dt, String stat_cd)
	{		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("CHID_CD"	, chId_cd);
		param.put("MD_ID"	, md_id);
		param.put("CHNM_CD"	, chNm_cd);
		param.put("MD_NM"	, md_nm);
		param.put("WRS_CD"	, wrs_cd);
		param.put("WRS_NM"	, wrs_nm);
		param.put("FM_RATE"	, fm_rate);
		param.put("TO_RATE"	, to_rate);
		param.put("FM_PCNT"	, fm_pcnt);
		param.put("TO_PCNT"	, to_pcnt);
		param.put("FROM_DT"	, from_dt);
		param.put("TO_DT"	, to_dt);
		param.put("STAT_CD"	, stat_cd);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> mdInfMgr getMainCount >>> params : " + param);
		}
		return getSqlSession().selectOne("mdInfMgr.getMainCount", param);	
	}

	/** 가격할인 이력정보 조회 */
	public List<Map<String, Object>> mainSelectList(String trplC, String clntNm, String chId_cd, String md_id, String chNm_cd, String md_nm,
			String wrs_cd, String wrs_nm, String fm_rate, String to_rate, String fm_pcnt, String to_pcnt, String from_dt, String to_dt, String stat_cd, int start, int end)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("CHID_CD"	, chId_cd);
		param.put("MD_ID"	, md_id);
		param.put("CHNM_CD"	, chNm_cd);
		param.put("MD_NM"	, md_nm);
		param.put("WRS_CD"	, wrs_cd);
		param.put("WRS_NM"	, wrs_nm);
		param.put("FM_RATE"	, fm_rate);
		param.put("TO_RATE"	, to_rate);
		param.put("FM_PCNT"	, fm_pcnt);
		param.put("TO_PCNT"	, to_pcnt);
		param.put("FROM_DT"	, from_dt);
		param.put("TO_DT"	, to_dt);
		param.put("STAT_CD"	, stat_cd);
		param.put("start"	, start);
		param.put("end"		, end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> mdInfMgr mainSelectList >>> params : " + param);
		}		
		return getSqlSession().selectList("mdInfMgr.mainSelectList", param);
	}

	public List<Map<String, Object>> getApproval(String login_id)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID"	, login_id);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> mdInfMgr getApproval >>> params : " + param);
		}		
		return getSqlSession().selectList("mdInfMgr.getApproval", param);
	}

	public List<Map<String, Object>> searchWRS(String searchType, String searchText)
	{
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("searchText", searchText);

		return getSqlSession().selectList("mdInfMgr.searchWRS", params);
	}

	public void downloadExcelMdInfList(String trplC, String clntNm, String chId_cd, String md_id, String chNm_cd, String md_nm,
			String wrs_cd, String wrs_nm, String fm_rate, String to_rate, String fm_pcnt, String to_pcnt, String from_dt, String to_dt, String stat_cd, int start, int end, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("CHID_CD"	, chId_cd);
		param.put("MD_ID"	, md_id);
		param.put("CHNM_CD"	, chNm_cd);
		param.put("MD_NM"	, md_nm);
		param.put("WRS_CD"	, wrs_cd);
		param.put("WRS_NM"	, wrs_nm);
		param.put("FM_RATE"	, fm_rate);
		param.put("TO_RATE"	, to_rate);
		param.put("FM_PCNT"	, fm_pcnt);
		param.put("TO_PCNT"	, to_pcnt);
		param.put("FROM_DT"	, from_dt);
		param.put("TO_DT"	, to_dt);
		param.put("STAT_CD"	, stat_cd);
		param.put("start"	, start);
		param.put("end"		, end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> mdInfMgr downloadExcelMdInfList >>> params : " + param);
		}		
		getSqlSession().select("mdInfMgr.downloadExcelMdInfList", param, handler);
	}
}
