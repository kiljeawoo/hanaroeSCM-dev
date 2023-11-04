package com.nh.escm.pda.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pda.dao.PdaNoticeDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class PdaNoticeService extends AbstractService {
	
	@Autowired
	private PdaNoticeDao pdaNoticeDao;
	
	/** PDA 공지사항 조회 페이징 */
	public List<Map<String, Object>> mainSelectList(String from_date, String to_date, int start, int end) {
		
		return pdaNoticeDao.mainSelectList(from_date, to_date, start, end);
	}
	
	public int getMainCount(String from_date, String to_date) {
		return pdaNoticeDao.getMainCount(from_date, to_date);
	}
	
	/** 검수내역 상세 리스트 */
	public Map<String, Object> selectDetailList(String notice_sqno){
	    return pdaNoticeDao.selectDetailList(notice_sqno);
	}

	public void deletepdaNotice(String notice_sqno) {
		pdaNoticeDao.deletepdaNotice(notice_sqno);
	}
	
	public int updatepdaNotice(String notice_st_dtm,String notice_ed_dtm, String notice_subject, String notice_cntn,
			String push_use_yn, String push_prc_st, String push_send_dtm, String push_send_result, String fs_rgm,
			String fsrg_dtm, String ls_chgm, String lschg_dtm,String notice_sqno)
	{
		try{
			return pdaNoticeDao.updatepdaNotice(notice_st_dtm, notice_ed_dtm,notice_subject,notice_cntn,push_use_yn,push_prc_st,push_send_dtm
					,push_send_result,fs_rgm,fsrg_dtm,ls_chgm,lschg_dtm,notice_sqno);
		}catch(AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	public void updatepdaNotice(String notice_sqno, DataSet pda_mst) {
		String	notice_st_dtm	  = null;
		String	notice_ed_dtm	  = null;
		String	notice_subject	  = null;
		String	notice_cntn		  = null;
		String	push_use_yn		  = null;
		String	push_prc_st		  = null;
		String	push_send_dtm	  = null;
		String	push_send_result  = null;
		String	fs_rgm		      = null;
		String	fsrg_dtm	      = null;
		String	ls_chgm	      	  = null;
		String	lschg_dtm	      = null;
		
		for (int i = 0; i < pda_mst.getRowCount(); i++) {
			notice_st_dtm	= pda_mst.getString(i, "NOTICE_ST_DTM");
			notice_ed_dtm	= pda_mst.getString(i, "NOTICE_ED_DTM");
			notice_subject	= pda_mst.getString(i, "NOTICE_SUBJECT");
			notice_cntn	= pda_mst.getString(i, "NOTICE_CNTN");
			push_use_yn	= pda_mst.getString(i, "PUSH_USE_YN");
			push_prc_st	= pda_mst.getString(i, "PUSH_PRC_ST");
			push_send_dtm	= pda_mst.getString(i, "PUSH_SEND_DTM");
			push_send_result	= pda_mst.getString(i, "PUSH_SEND_RESULT");
			fs_rgm	= pda_mst.getString(i, "FS_RGM");
			fsrg_dtm	= pda_mst.getString(i, "FSRG_DTM");
			ls_chgm	= pda_mst.getString(i, "LS_CHGM");
			lschg_dtm	= pda_mst.getString(i, "LSCHG_DTM");
			
			updatepdaNotice(notice_st_dtm, notice_ed_dtm,notice_subject,notice_cntn,push_use_yn,push_prc_st,push_send_dtm
					,push_send_result,fs_rgm,fsrg_dtm,ls_chgm,lschg_dtm,notice_sqno);
	}
  }

	public void insertpdaNotice(String notice_sqno,String notice_st_dtm, String notice_ed_dtm, String notice_subject,String notice_cntn, String push_use_yn,
			String push_prc_st, String push_send_dtm, String push_send_result,String fs_rgm, String fsrg_dtm, String ls_chgm, String lschg_dtm)
	{
		pdaNoticeDao.insertpdaNotice(notice_sqno,notice_st_dtm,notice_ed_dtm,notice_subject,notice_cntn,push_use_yn,push_prc_st,push_send_dtm,
				push_send_result,fs_rgm,fsrg_dtm,ls_chgm,lschg_dtm);
	}

	public Map<String, Object> maxSqnoSelect() {
		return pdaNoticeDao.maxSqnoSelect();
	}
}
