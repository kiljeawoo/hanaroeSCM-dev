package com.nh.escm.pt.blbd.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.exception.AppetizerException;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pt.blbd.vo.NacfOfancApdflVO;
import com.nh.escm.pt.blbd.vo.NacfOfancVO;

public class NacfOfancDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveNacfOfancList(DataSet dsCondition, int start, int end){
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("SEARCH", dsCondition.getString(0, "SEARCH"));
		param.put("CONDITION", dsCondition.getString(0, "CONDITION"));
		param.put("start", start);
		param.put("end", end);

		return getSqlSession().selectList("nacfOfancDAO.retrieveNacfOfancList", param);
	}

	public List<NacfOfancVO> retrieveNacfOfanc(String BBRD_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BBRD_SQNO", BBRD_SQNO);
		if(getSqlSession().update("nacfOfancDAO.updateCount", param) > 0) 
			return getSqlSession().selectList("nacfOfancDAO.retrieveNacfOfanc", param);
		
		return null;
	}


	public List<NacfOfancVO> retrieveNacfOfancMainList() {
		Map<String, Object> param = new HashMap<String, Object>();
		return getSqlSession().selectList("nacfOfancDAO.retrieveNacfOfancMainList", param);
	}

	public List<NacfOfancApdflVO> retrieveOfancApdflList(String BBRD_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BBRD_SQNO", BBRD_SQNO);
		
		return getSqlSession().selectList("nacfOfancDAO.retrieveOfancApdflList", param);
	}

	public int retrieveNacfOfancListCount(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("SEARCH", dsCondition.getString(0, "SEARCH"));
		param.put("CONDITION", dsCondition.getString(0, "CONDITION"));
		
		return getSqlSession().selectOne("nacfOfancDAO.retrieveNacfOfancListCount", param);
	}

	public List<Map<String, Object>> retrieveNacfOfancForOz(String noticeSeq) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BBRD_SQNO", noticeSeq);
				
		return getSqlSession().selectList("nacfOfancDAO.retrieveNacfOfancForOz", param);
	}
}
