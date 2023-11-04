package com.nh.escm.bt.rq.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class CsltRqSendDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveCsltRqSendList(int type) {
		
		if (type == 1) {
			return getSqlSession().selectList("csltRqSendDAO.retrieveCsltRqSendList_1");
		} else if (type == 2) {
			return getSqlSession().selectList("csltRqSendDAO.retrieveCsltRqSendList_2");
		} else if (type == 3) {
			return getSqlSession().selectList("csltRqSendDAO.retrieveCsltRqSendList_3");
		} else {
			throw new IllegalArgumentException("Invalid type. (" + type + ")");
		}
	}
	
	public int updateCtrCsltNtc(String CSLT_RQ_NO, int SQNO, long SMS_NATV_NO, String LS_CHGM) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		param.put("SQNO", SQNO);
		param.put("SMS_NATV_NO", SMS_NATV_NO);
		param.put("LS_CHGM", LS_CHGM);
		
		return getSqlSession().update("csltRqSendDAO.updateCtrCsltNtc", param);
	}
	
	public List<Map<String, Object>> retrieveManagerInfoList() {
		
		return getSqlSession().selectList("csltRqSendDAO.retrieveManagerInfoList");
	}
	
	public String retrieveBusinessDay(String BASE_DT, int COUNT) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BASE_DT", BASE_DT);
		param.put("COUNT", COUNT);
		
		return getSqlSession().selectOne("csltRqSendDAO.retrieveBusinessDay", param);
	}
	
}
