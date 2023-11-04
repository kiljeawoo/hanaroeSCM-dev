package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class SmartPdaBzplcInfDao extends AbstractDao
{
	/* 스마트PDA 경통오류조회 카운트 */
	public int getByngErrCount(String bzplC, String clntNm, String fromDt, String toDt, String typeCd)
	{		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("TYPE_CD"	, typeCd);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> smartPdaBzplcInf getByngErrCount >>> params : " + param);
		}

		return getSqlSession().selectOne("smartPdaBzplcInf.getByngErrCount", param);	
	}

	/* 스마트PDA 경통오류조회 */
	public List<Map<String, Object>> retrieveSmtPdaByngErrList(String bzplC, String clntNm, String fromDt, String toDt, String typeCd, int start, int end)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("TYPE_CD"	, typeCd);
		param.put("start"	, start);				
		param.put("end"		, end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> smartPdaBzplcInf retrieveSmtPdaByngErrList >>> params : " + param);
		}

		return getSqlSession().selectList("smartPdaBzplcInf.retrieveSmtPdaByngErrList", param);
	}

	/* 스마트PDA 프로그램 권한조회 카운트 */
	public int getPgmAuthCount(String bzplC, String clntNm, String usrID, String usrNm)
	{		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("USR_ID"	, usrID);
		param.put("USR_NM"	, usrNm);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> smartPdaBzplcInf getPgmAuthCount >>> params : " + param);
		}

		return getSqlSession().selectOne("smartPdaBzplcInf.getPgmAuthCount", param);	
	}

	/* 스마트PDA 경통오류조회 */
	public List<Map<String, Object>> retrieveSmtPdaPgmAuthList(String bzplC, String clntNm, String usrID, String usrNm, int start, int end)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("USR_ID"	, usrID);
		param.put("USR_NM"	, usrNm);
		param.put("start"	, start);				
		param.put("end"		, end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> smartPdaBzplcInf retrieveSmtPdaPgmAuthList >>> params : " + param);
		}

		return getSqlSession().selectList("smartPdaBzplcInf.retrieveSmtPdaPgmAuthList", param);
	}

	public void downloadExcelSmtPdaByngErrList(String bzplC, String clntNm, String fromDt, String toDt, String typeCd, int start, int end, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("TYPE_CD"	, typeCd);
		param.put("start"	, start);				
		param.put("end"		, end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> smartPdaBzplcInf downloadExcelSmtPdaByngErrList >>> params : " + param);
		}

		getSqlSession().select("smartPdaBzplcInf.downloadExcelSmtPdaByngErrList", param, handler);
	}

	public void downloadExcelSmtPdaPgmAuthList(String bzplC, String clntNm, String usrID, String usrNm, int start, int end, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("USR_ID"	, usrID);
		param.put("USR_NM"	, usrNm);
		param.put("start"	, start);				
		param.put("end"		, end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> smartPdaBzplcInf downloadExcelSmtPdaPgmAuthList >>> params : " + param);
		}

		getSqlSession().select("smartPdaBzplcInf.downloadExcelSmtPdaPgmAuthList", param, handler);
	}
}