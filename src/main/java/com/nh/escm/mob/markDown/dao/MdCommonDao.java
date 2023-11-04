package com.nh.escm.mob.markDown.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class MdCommonDao  extends AbstractDao  {

	public List<Map<String, Object>> selectMdUsrSigList(String mb_id) {
		
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("MB_ID"	, mb_id);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> mdInfMgr mainSelectList >>> params : " + param);
		}		
		
		return getSqlSession().selectList("mdCommonDao.selectMdUsrSigList", param);
	}

	public int insertUsrSig(String mb_id, String sig_id, String sig_ord, String title) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("mb_id"	, mb_id);
		param.put("sig_id"	, sig_id);
		param.put("sig_ord"	, sig_ord);
		param.put("title"	, title);

		if(logger.isDebugEnabled()){
			logger.debug(">>> insertUsrSig : " + param);
		}

		return getSqlSession().insert("mdCommonDao.insertUsrSig", param);

	}

	public int updateUsrSig(String mb_id, String sig_id, String sig_ord, String title) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("mb_id"	, mb_id);
		param.put("sig_id"	, sig_id);
		param.put("sig_ord", sig_ord);
		param.put("title",  title);

		if(logger.isDebugEnabled()){
			logger.debug(">>> updateUsrSig : " + param);
		}

		return getSqlSession().update("mdCommonDao.updateUsrSig", param);
		
	}

	public int deleteUsrSig(String mb_id, String sig_id, String sig_ord,
			String title) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("mb_id"	, mb_id);
		param.put("sig_id"	, sig_id);
		param.put("sig_ord", sig_ord);
		param.put("title",  title);

		if(logger.isDebugEnabled()){
			logger.debug(">>> updateUsrSig : " + param);
		}

		return getSqlSession().delete("mdCommonDao.deleteUsrSig", param);
	}
}
