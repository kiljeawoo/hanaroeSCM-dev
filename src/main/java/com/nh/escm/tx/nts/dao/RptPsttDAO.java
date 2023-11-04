package com.nh.escm.tx.nts.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nexacro.xapi.data.DataSet;

public class RptPsttDAO extends AbstractDao {

	public List<Map<String, Object>> retrieveRptPsttNh(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", dsCondition.getString(0, "NA_TRPL_C"));
		param.put("TXBIL_STSC", dsCondition.getString(0, "TXBIL_STSC"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		
		return getSqlSession().selectList("rptPsttDAO.retrieveRptPsttNh", param);
	}
	
	public List<Map<String, Object>> retrieveRptPsttEScm(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", dsCondition.getString(0, "NA_TRPL_C"));
		param.put("TXBIL_STSC", dsCondition.getString(0, "TXBIL_STSC"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		
		return getSqlSession().selectList("rptPsttDAO.retrieveRptPsttEScm", param);
	}

	public List<Map<String, Object>> retrieveRptPstt(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		String[] NA_TRPL_C = null;
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", dsCondition.getString(0, "TXBIL_STSC"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("OCU_DSC", dsCondition.getString(0, "OCU_DSC"));
		
		
		return getSqlSession().selectList("rptPsttDAO.retrieveRptPstt", param);
	}

}
