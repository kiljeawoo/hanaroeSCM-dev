package com.nh.escm.pt.usrinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class IdPwInqDAO extends AbstractDao {
	
	public List<Map<String, Object>> getMbId(String USR_NM, String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("USR_NM", USR_NM);
		param.put("NA_TRPL_C", NA_TRPL_C);
		return getSqlSession().selectList("idPwInqDAO.getMbId", param);
	}
	
	public Map<String, Object> getMbPw(String MB_ID, String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("NA_TRPL_C", NA_TRPL_C);
		return getSqlSession().selectOne("idPwInqDAO.getMbPw", param);
	}
	
	public boolean updateMbPw(String MB_ID, String NEW_MB_PW, String PW_LSRG_DT) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("MB_PW", NEW_MB_PW);
		param.put("PW_LSRG_DT", PW_LSRG_DT);
		return (Integer) getSqlSession().update("idPwInqDAO.updateMbPw", param) > 0;
	}
	
	public boolean updateLockYn(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return (Integer) getSqlSession().update("idPwInqDAO.updateLockYn", param) > 0;
	}
}
