package com.nh.escm.mob.markDown.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.mob.markDown.dao.MdInfMgrDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class MdInfMgrService extends AbstractService
{	
	@Autowired
	private MdInfMgrDao mdInfMgrDao;
	
	public int getMainCount(String trplC, String clntNm, String chId_cd, String md_id, String chNm_cd, String md_nm,
			String wrs_cd, String wrs_nm, String fm_rate, String to_rate, String fm_pcnt, String to_pcnt, String from_dt, String to_dt, String stat_cd)
	{
		return mdInfMgrDao.getMainCount(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd);
	}

	public List<Map<String, Object>> mainSelectList(String trplC, String clntNm, String chId_cd, String md_id, String chNm_cd, String md_nm,
			String wrs_cd, String wrs_nm, String fm_rate, String to_rate, String fm_pcnt, String to_pcnt, String from_dt, String to_dt, String stat_cd, int start, int end)
	{		
		return mdInfMgrDao.mainSelectList(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd, start, end);
	}

	public List<Map<String, Object>> getApproval(String login_id)
	{		
		return mdInfMgrDao.getApproval(login_id);
	}

	public List<Map<String, Object>> searchWRS(String searchType, String searchText)
	{
		try
		{			
			return mdInfMgrDao.searchWRS(searchType, searchText);
		}
		catch(DataAccessException e)
		{
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelMdInfList(String trplC, String clntNm, String chId_cd, String md_id, String chNm_cd, String md_nm,
			String wrs_cd, String wrs_nm, String fm_rate, String to_rate, String fm_pcnt, String to_pcnt, String from_dt, String to_dt, String stat_cd, int start, int end, ExcelFileMakerResultHandler handler)
	{		
		mdInfMgrDao.downloadExcelMdInfList(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd, start, end, handler);
	}
}
