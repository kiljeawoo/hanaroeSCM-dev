package com.nh.escm.pt.blbd.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pt.blbd.vo.BlbdApdflVO;
import com.nh.escm.pt.blbd.vo.BlbdVO;

public class BlbdDAO extends AbstractDao {

	
	public List<BlbdVO> retrieveBlbdOfancMainList() {
		Map<String, Object> param = new HashMap<String, Object>();
		return getSqlSession().selectList("blbdDAO.retrieveBlbdOfancMainList", param);
	}
	
	public List<BlbdVO> retrieveBlbdPopUpList() {
		Map<String, Object> param = new HashMap<String, Object>();
		return getSqlSession().selectList("blbdDAO.retrieveBlbdPopUpList", param);
	}
	
	public List<BlbdVO> retrieveBlbdPopUpOfancList() {
		Map<String, Object> param = new HashMap<String, Object>();
		return getSqlSession().selectList("blbdDAO.retrieveBlbdPopUpOfancList", param);
	}
	
	
	public int deleteBlbd(DataSet dsBbs) {
		Map<String, Object> param = new HashMap<String, Object>();
		int count = 0;

		for(int i = 0 ; i < dsBbs.getRowCount(); i++)
		{
			param.clear();
			param.put("BBRD_ID", dsBbs.getString(i, "BBRD_ID"));
			param.put("BLBD_ID", dsBbs.getString(i, "BLBD_ID"));
		
			count += getSqlSession().update("blbdDAO.deleteBlbd", param);
		}

		return count;	
	}

	public int insertBlbd(BlbdVO vo) {
		return getSqlSession().insert("blbdDAO.insertBlbd", vo);
	}
	
	public int insertBlbdPrc(String UPLOAD_DT, String BBRD_ID, String PRC, String FS_RGM, String LS_CHGM, String PAY_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("UPLOAD_DT", UPLOAD_DT);
		param.put("BBRD_ID", BBRD_ID);
		param.put("PRC", PRC);
		param.put("PAY_TRPL_C", PAY_TRPL_C);
		param.put("FS_RGM", FS_RGM);
		param.put("LS_CHGM", LS_CHGM);
		
		return getSqlSession().insert("blbdDAO.insertBlbdPrc", param);
	}

	public List<BlbdApdflVO> retrieveApdflList(String BLBD_ID, String BBRD_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BLBD_ID", BLBD_ID);
		param.put("BBRD_ID", BBRD_ID);

		return getSqlSession().selectList("blbdDAO.retrieveApdflList", param);		
	}
	
	public List<BlbdVO> retrieveBlbdPrc(String BBRD_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BBRD_ID", BBRD_ID);

		return getSqlSession().selectList("blbdDAO.retrieveBlbdPrc", param);		
	}
	
	public int updateBlbdPrc(String UPLOAD_DT, String BBRD_ID, String PRC, String LS_CHGM) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("UPLOAD_DT", UPLOAD_DT);
		param.put("BBRD_ID", BBRD_ID);
		param.put("PRC", PRC);
		param.put("LS_CHGM", LS_CHGM);
		
		return getSqlSession().insert("blbdDAO.updateBlbdPrc", param);
	}

	public int insertApdfl(BlbdApdflVO file) {
		return getSqlSession().insert("blbdDAO.insertApdfl", file);
	}

	public String getBbrdId() {
		Map<String, Object> param = new HashMap<String, Object>();
		param = getSqlSession().selectOne("blbdDAO.getBbrdId");
		return String.valueOf(param.get("BBRD_ID"));
	}

	public String getCountPretBbrdId(String pretBbrdId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param = getSqlSession().selectOne("blbdDAO.getCountPretBbrdId", pretBbrdId);
		return String.valueOf(param.get("CNT_PRET_BBRD_ID"));
	}

	
	public List<BlbdVO> getBlbdID(String SKIN) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SKIN", SKIN);
		
		return getSqlSession().selectList("blbdDAO.getBlbdID", param);
	}

	public int updateblbdCntn(BlbdVO vo) {
		return getSqlSession().update("blbdDAO.updateblbdCntn", vo);
	}

	public int deleteApdfl(BlbdApdflVO apdfl) {
		return getSqlSession().update("blbdDAO.deleteApdfl", apdfl);
	}

	public int retrieveBlbdListCount(DataSet dsCondition, String usrTpc, String usrId, String eltAuthDsc) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("SEARCH", dsCondition.getString(0, "SEARCH"));
		param.put("CONDITION", dsCondition.getString(0, "CONDITION"));
		param.put("BLBD_ID", dsCondition.getString(0, "BLBD_ID"));
		param.put("usrTpc", usrTpc);
		param.put("usrId", usrId);
		param.put("ELT_AUTH_DSC", eltAuthDsc);
		
		return getSqlSession().selectOne("blbdDAO.retrieveBlbdListCount", param);
	}
	
	public int retrieveCostQnAListCount(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("SEARCH", dsCondition.getString(0, "SEARCH"));
		param.put("CONDITION", dsCondition.getString(0, "CONDITION"));
		param.put("BLBD_ID", dsCondition.getString(0, "BLBD_ID"));
		param.put("MB_ID", dsCondition.getString(0, "MB_ID"));
		param.put("USR_TYPE", dsCondition.getString(0, "USR_TYPE"));
		
		return getSqlSession().selectOne("blbdDAO.retrieveCostQnAListCount", param);
	}
	

	public List<Map<String, Object>> retrieveBlbdList(DataSet dsCondition, String usrTpc, String usrId, String eltAuthDsc, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("SEARCH", dsCondition.getString(0, "SEARCH"));
		param.put("CONDITION", dsCondition.getString(0, "CONDITION"));
		param.put("CKNL_DSC", dsCondition.getString(0, "CKNL_DSC"));
		param.put("BLBD_ID", dsCondition.getString(0, "BLBD_ID"));
		param.put("usrTpc", usrTpc);
		param.put("usrId", usrId);
		param.put("start", start);
		param.put("end", end);
		param.put("ELT_AUTH_DSC", eltAuthDsc);
		
		return getSqlSession().selectList("blbdDAO.retrieveBlbdList", param);
	}
	
	
	public List<Map<String, Object>> retrieveCostQnAList(DataSet dsCondition, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("SEARCH", dsCondition.getString(0, "SEARCH"));
		param.put("CONDITION", dsCondition.getString(0, "CONDITION"));
		param.put("BLBD_ID", dsCondition.getString(0, "BLBD_ID"));
		param.put("MB_ID", dsCondition.getString(0, "MB_ID"));
		param.put("USR_TYPE", dsCondition.getString(0, "USR_TYPE"));
		
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("blbdDAO.retrieveCostQnAList", param);
	}

	public List<BlbdVO> retrieveBlbd(String BLBD_ID, String BBRD_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BLBD_ID", BLBD_ID);
		param.put("BBRD_ID", BBRD_ID);
		
		if(getSqlSession().update("blbdDAO.updateInqCn", param) > 0) 
			return getSqlSession().selectList("blbdDAO.retrieveBlbd", param);
		
		return null;
	}

	public Map<String, Object> getUsrGlnCode(String pretBbrdId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("pretBbrdId", pretBbrdId);
		return getSqlSession().selectOne("blbdDAO.getUsrGlnCode", param);	
	}
	
	public int canDelete(String BBRD_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BBRD_ID", BBRD_ID);

		return getSqlSession().selectOne("blbdDAO.canDelete", param);	
	}
}
