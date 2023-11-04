package com.nh.escm.mob.markDown.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class MdUsrMgrDao extends AbstractDao {

	/** 가격할인 사용자 페이지 추가 */
	public int getMainCount(String trplC, String clntNm, String md_id, String md_nm, 
			String mgr_cd, String cgr_cd, String use_cd) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("MD_ID"	, md_id);
		param.put("MD_NM"	, md_nm);
		param.put("MGR_CD"	, mgr_cd);
		param.put("CGR_CD"	, cgr_cd);
		param.put("USE_CD"	, use_cd);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> mdUsrMgr getPdaListCount >>> params : " + param);
		}
		return getSqlSession().selectOne("mdUsrMgr.getMainCount", param);	
	}

	/** 가격할인 사용자 조회 */
	public List<Map<String, Object>> mainSelectList(String trplC, String clntNm, String md_id,
			String md_nm, String mgr_cd, String cgr_cd, String use_cd, int start, int end) {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("MD_ID"	, md_id);
		param.put("MD_NM"	, md_nm);
		param.put("MGR_CD"	, mgr_cd);
		param.put("CGR_CD"	, cgr_cd);
		param.put("USE_CD"	, use_cd);
		param.put("start"	, start);
		param.put("end"		, end);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> mdUsrMgr mainSelectList >>> params : " + param);
		}		
		return getSqlSession().selectList("mdUsrMgr.mainSelectList", param);
	}

	/* 협력업체 조회 팝업 */
	public List<Map<String, Object>> searchTRPL(String searchType, String searchText) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("searchText", searchText);

		return getSqlSession().selectList("mdUsrMgr.searchTRPL", params);
	}

	/** 검수수량 변경 */
	public int updateMdUsr(String md_id, String na_trpl_c, String imei_no, String mngr_cd, String chgr_cd, String use_cd, String chg_id) {
		int	rc = 0;
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MD_ID"		, md_id);
		param.put("NA_TRPL_C"	, na_trpl_c);
		param.put("MD_IMEI_NO"	, imei_no);
		param.put("MD_MNGR_CD"	, mngr_cd);
		param.put("MD_CHGR_CD"	, chgr_cd);
		param.put("MD_USE_CD"	, use_cd);
		param.put("LS_CHGM"		, chg_id);

		rc = getSqlSession().update("mdUsrMgr.updateMdUsr", param);
		rc = getSqlSession().update("mdUsrMgr.updateMdTrpl", param);
		return	rc;
	}

	public void downloadExcelMdUsrList(String trplC, String clntNm, String md_id,
			String md_nm, String mgr_cd, String cgr_cd, String use_cd, int start, int end, ExcelFileMakerResultHandler handler) {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("MD_ID"	, md_id);
		param.put("MD_NM"	, md_nm);
		param.put("MGR_CD"	, mgr_cd);
		param.put("CGR_CD"	, cgr_cd);
		param.put("USE_CD"	, use_cd);
		param.put("start"	, start);
		param.put("end"		, end);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> mdUsrMgr downloadExcelMdUsrList >>> params : " + param);
		}		
		getSqlSession().select("mdUsrMgr.downloadExcelMdUsrList", param, handler);
		
	}

}
