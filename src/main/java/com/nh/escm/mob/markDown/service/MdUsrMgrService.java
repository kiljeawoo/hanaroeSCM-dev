package com.nh.escm.mob.markDown.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.mob.markDown.dao.MdUsrMgrDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class MdUsrMgrService extends AbstractService {
	
	@Autowired
	private MdUsrMgrDao mdUsrMgrDao;
	
	public int getMainCount(String trplC, String clntNm, String md_id, String md_nm, String mgr_cd,
			String cgr_cd, String use_cd) {
		return mdUsrMgrDao.getMainCount(trplC, clntNm, md_id, md_nm, mgr_cd, cgr_cd, use_cd);
	}

	public List<Map<String, Object>> mainSelectList(String trplC, String clntNm, String md_id, String md_nm, String mgr_cd, 
			String cgr_cd, String use_cd, int start, int end) {
		
		return mdUsrMgrDao.mainSelectList(trplC, clntNm, md_id, md_nm, mgr_cd, cgr_cd, use_cd, start, end);
	}

	public List<Map<String, Object>> searchTRPL(String searchType, String searchText) {
		try{			
			return mdUsrMgrDao.searchTRPL(searchType, searchText);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int updateMdUsr(String md_id, String na_trpl_c, String imei_no, String mngr_cd, String chgr_cd, String use_cd, String chg_id) {
		try {
			return mdUsrMgrDao.updateMdUsr(md_id, na_trpl_c, imei_no, mngr_cd, chgr_cd, use_cd, chg_id);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	public void updateMdUsr(DataSet in_ds, String user_id) {
		String	md_id		= null;
		String	na_trpl_c	= null;
		String	imei_no		= null;
		String	mngr_cd		= null;
		String	chgr_cd		= null;
		String	use_cd		= null;

		for (int i = 0; i < in_ds.getRowCount(); i++) {
			md_id		= in_ds.getString(i, "MD_ID");
			na_trpl_c	= in_ds.getString(i, "NA_TRPL_C");
			imei_no		= in_ds.getString(i, "MD_IMEI_NO");
			mngr_cd		= in_ds.getString(i, "MD_MNGR_CD");
			chgr_cd		= in_ds.getString(i, "MD_CHGR_CD");
			use_cd		= in_ds.getString(i, "MD_USE_CD");

			updateMdUsr(md_id, na_trpl_c, imei_no, mngr_cd, chgr_cd, use_cd, user_id);
		}
	}

	public void downloadExcelMdUsrList(String trplC, String clntNm, String md_id, String md_nm, String mgr_cd, 
			String cgr_cd, String use_cd, int start, int end, ExcelFileMakerResultHandler handler) {
		
		mdUsrMgrDao.downloadExcelMdUsrList(trplC, clntNm, md_id, md_nm, mgr_cd, cgr_cd, use_cd, start, end, handler);
	}
}
