package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.exception.AppetizerException;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class PdaProgramDao extends AbstractDao {
	
	/** 프로그램 리스트 페이지 처리 */
	public int getMainCount(String PGM_FL_VER, String PGM_FL_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PGM_FL_VER", PGM_FL_VER);
		param.put("PGM_FL_ID", PGM_FL_ID);
		
		if ("1".equals(PGM_FL_VER)) {
			return getSqlSession().selectOne("pdaProgram.getFinalCount", param);
		} else {
			return getSqlSession().selectOne("pdaProgram.getMainCount", param);
		}
	}

	public List<Map<String, Object>> mainSelectList(String PGM_FL_VER, String PGM_FL_ID, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PGM_FL_VER", PGM_FL_VER);
		param.put("PGM_FL_ID", PGM_FL_ID);
		//Paging
		param.put("start", start);
		param.put("end", end);
		
		if ("1".equals(PGM_FL_VER)) {
			return getSqlSession().selectList("pdaProgram.finalSelect", param);
		} else {
			return getSqlSession().selectList("pdaProgram.mainSelect", param);
		}
	}

	public void PgmInsertList(String PGM_FL_ID, String PGM_FL_VER, String PGM_FL_PATH, String RMK_CNTN, String USER_ID) {
		Map<String, Object> paramS = new HashMap<String, Object>();
		paramS.put("PGM_FL_ID", PGM_FL_ID);
		paramS.put("PGM_FL_VER", PGM_FL_VER);
		paramS.put("PGM_FL_PATH", PGM_FL_PATH);
		paramS.put("RMK_CNTN", RMK_CNTN);
		paramS.put("REG_USR_ID", USER_ID);
		
		getSqlSession().update("pdaProgram.pgmInsert", paramS);
	}

	public List<Map<String, Object>> selectDetail(String PGM_FL_ID, String PGM_FL_VER) {
		Map<String, Object> paramM = new HashMap<String, Object>();
		paramM.put("PGM_FL_ID", PGM_FL_ID);
		paramM.put("PGM_FL_VER", PGM_FL_VER);
		
		return getSqlSession().selectList("pdaProgram.detailList", paramM);
	}

	public void deletePdaDetail(String PGM_FL_ID, String PGM_FL_VER) {
		Map<String, Object> paramS = new HashMap<String, Object>();
		
		try{
			paramS.put("PGM_FL_ID", PGM_FL_ID);
			paramS.put("PGM_FL_VER", PGM_FL_VER);
			
			getSqlSession().update("pdaProgram.deletePdaDetail", paramS);
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}
	
}
