package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class PdaNoticeDao extends AbstractDao {
	
	/** 공지사항 조회 */
	public List<Map<String, Object>> mainSelectList(String from_date, String to_date, int start, int end) {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		param.put("start", start);
		param.put("end", end);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> mainSelectList >>> params : " + param);
		}		
		return getSqlSession().selectList("pdaNotice.mainSelectList", param);
	}
	
	/** 공지사항 리스트 페이지 추가 */
	public int getMainCount(String from_date, String to_date) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> getPdaListCount >>> params : " + param);
		}
		return getSqlSession().selectOne("pdaNotice.getMainCount", param);	
	}
	
	/** 공지사항 상세 리스트 */
	public Map<String, Object> selectDetailList(String notice_sqno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NOTICE_SQNO", notice_sqno);
		
		return getSqlSession().selectOne("pdaNotice.selectDetail", param);
	}

	public int deletepdaNotice(String notice_sqno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NOTICE_SQNO", notice_sqno);
		
		return getSqlSession().delete("pdaNotice.deletePdaNotice", param);
	}

	public int updatepdaNotice(String notice_st_dtm, String notice_ed_dtm,
			String notice_subject, String notice_cntn, String push_use_yn,
			String push_prc_st, String push_send_dtm, String push_send_result,
			String fs_rgm, String fsrg_dtm, String ls_chgm, String lschg_dtm,String notice_sqno) {
		
		int rc = 0;
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NOTICE_ST_DTM"	, notice_st_dtm);
		param.put("NOTICE_ED_DTM"	, notice_ed_dtm);
		param.put("NOTICE_SUBJECT"	, notice_subject);
		param.put("NOTICE_CNTN"	    , notice_cntn);
		param.put("PUSH_USE_YN"	    , push_use_yn);
		param.put("PUSH_PRC_ST"	    , push_prc_st);
		param.put("PUSH_SEND_DTM"	, push_send_dtm);
		param.put("PUSH_SEND_RESULT", push_send_result);
		param.put("FS_RGM"		    , fs_rgm);
		param.put("FSRG_DTM"		, fsrg_dtm);
		param.put("LS_CHGM"	    	, ls_chgm);
		param.put("LSCHG_DTM"		, lschg_dtm);
		param.put("NOTICE_SQNO"		, notice_sqno);
		
		rc = getSqlSession().update("pdaNotice.updatePdaNotice", param);
		
		return 0;
	}
	
	/** 공지사항 등록  
    */
	public int insertpdaNotice(String notice_sqno,String notice_st_dtm, String notice_ed_dtm, String notice_subject, String notice_cntn, 
			String push_use_yn, String push_prc_st, String push_send_dtm, String push_send_result,
			String fs_rgm, String fsrg_dtm, String ls_chgm, String lschg_dtm) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NOTICE_SQNO", notice_sqno);
		param.put("NOTICE_ST_DTM", notice_st_dtm);
		param.put("NOTICE_ED_DTM", notice_ed_dtm);
		param.put("NOTICE_SUBJECT", notice_subject);
		param.put("NOTICE_CNTN", notice_cntn);
		param.put("PUSH_USE_YN", push_use_yn);
		param.put("PUSH_PRC_ST", push_prc_st);
		param.put("PUSH_SEND_DTM", push_send_dtm);
		param.put("PUSH_SEND_RESULT", push_send_result);
		param.put("FS_RGM", fs_rgm);
		param.put("FSRG_DTM", fsrg_dtm);
		param.put("LS_CHGM", ls_chgm);
		param.put("LSCHG_DTM", lschg_dtm);
		return getSqlSession().insert("pdaNotice.insertPdaNotice", param);
	}

	public Map<String, Object> maxSqnoSelect() {
		return getSqlSession().selectOne("pdaNotice.maxSqnoSelect");
	}
}
