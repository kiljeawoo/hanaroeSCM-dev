package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class PdaInspectionDao extends AbstractDao {
	
	/** 검수내역 조회 */
	public List<Map<String, Object>> mainSelectList(String from_date, String to_date, String na_slpno,
			String byng_ref_dsc, String odr_dt, String tr_bass_no, String cnr_sts_dsc, String user_id,
			String gln, String na_bzplc, int start, int end) {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		param.put("NA_SLPNO", na_slpno);
		param.put("BYNG_REF_DSC", byng_ref_dsc);
		param.put("ODR_DT", odr_dt);
		param.put("TR_BASS_NO", tr_bass_no);
		param.put("CNR_STS_DSC", cnr_sts_dsc);
		param.put("USER_ID", user_id);
		param.put("GLN", gln);
		param.put("NA_BZPLC", na_bzplc);
		param.put("start", start);
		param.put("end", end);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> mainSelectList >>> params : " + param);
		}		
		return getSqlSession().selectList("pdaInspection.mainSelectList", param);
	}
	
	/** PDA 리스트 페이지 추가 */
	public int getMainCount(String from_date, String to_date, String na_slpno, String byng_ref_dsc, String odr_dt,
			String tr_bass_no, String cnr_sts_dsc, String user_id, String gln, String na_bzplc) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		param.put("NA_SLPNO", na_slpno);
		param.put("BYNG_REF_DSC", byng_ref_dsc);
		param.put("ODR_DT", odr_dt);
		param.put("TR_BASS_NO", tr_bass_no);
		param.put("CNR_STS_DSC", cnr_sts_dsc);
		param.put("USER_ID", user_id);
		param.put("GLN", gln);
		param.put("NA_BZPLC", na_bzplc);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> getPdaListCount >>> params : " + param);
		}
		return getSqlSession().selectOne("pdaInspection.getMainCount", param);	
	}
	
	/** 검수내역 상세 헤더 정보 */
	public Map<String, Object> selectMaster(String na_bzplc, String na_team_c, String slp_dt, String na_slpno) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", na_bzplc);
		param.put("NA_TEAM_C", na_team_c);
		param.put("SLP_DT", slp_dt);
		param.put("NA_SLPNO", na_slpno);
		
		return getSqlSession().selectOne("pdaInspection.selectMaster", param);
	}

	/** 검수내역 상세 리스트 */
	public List<Map<String, Object>> selectDetailList(String na_bzplc, String na_team_c, String slp_dt, String na_slpno) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", na_bzplc);
		param.put("NA_TEAM_C", na_team_c);
		param.put("SLP_DT", slp_dt);
		param.put("NA_SLPNO", na_slpno);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> selectDetailList >>> params : " + param);
		}		
		
		return getSqlSession().selectList("pdaInspection.selectDetail", param);
	}

	/** 검수수량 변경 */
	public int updatePdaQty(String qty, String na_bzplc, String na_team_c, String slp_dt, String na_slpno, String slp_sqno) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BYNG_QT", qty);
		param.put("NA_BZPLC", na_bzplc);
		param.put("NA_TEAM_C", na_team_c);
		param.put("SLP_DT", slp_dt);
		param.put("NA_SLPNO", na_slpno);
		param.put("SLP_SQNO", slp_sqno);
			
		return getSqlSession().update("pdaInspection.updateDetail", param);
	}
	
	/** 검수상태 변경 (확인취소/완료취소) */
	public int updatePdaStatus(String na_bzplc, String na_team_c, String slp_dt, String na_slpno, String status,
			String user_id, String gln, String cnr_cmpl_sign_fn, String rmkCntn, String mode) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CNR_STS_DSC", status);
		param.put("NA_BZPLC", na_bzplc);
		param.put("NA_TEAM_C", na_team_c);
		param.put("SLP_DT", slp_dt);
		param.put("NA_SLPNO", na_slpno);
		param.put("USER_ID", user_id);
		param.put("GLN", gln);
		param.put("CNR_CMPL_SIGN_FN", cnr_cmpl_sign_fn);
		param.put("mode", mode);
		param.put("RMK_CNTN", rmkCntn);
		
		return getSqlSession().update("pdaInspection.updateMst", param);
	}
	
}
