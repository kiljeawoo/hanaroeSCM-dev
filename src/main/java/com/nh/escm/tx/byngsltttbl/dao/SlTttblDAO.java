package com.nh.escm.tx.byngsltttbl.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.tx.byngsltttbl.vo.SlTttblVO;

public class SlTttblDAO extends AbstractDao {

	public List<SlTttblVO> retrieveByngsltttbl(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		param.put("START", dsCondition.getString(0,"START"));
		param.put("END", dsCondition.getString(0,"END"));
		
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("NA_BZPLC", dsCondition.getString(0,"NA_BZPLC"));
		param.put("RPBC_DSC", dsCondition.getString(0,"RPBC_DSC"));
		param.put("OCU_DSC", dsCondition.getString(0,"OCU_DSC"));
		
		
		return getSqlSession().selectList("slTttblDAO.retrieveByngsltttbl", param);
	}

	public List<SlTttblVO> retrieveByngsltttbl2(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		param.put("START", dsCondition.getString(0,"START"));
		param.put("END", dsCondition.getString(0,"END"));
				
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("NA_BZPLC", dsCondition.getString(0,"NA_BZPLC"));
		param.put("RPBC_DSC", dsCondition.getString(0,"RPBC_DSC"));
		param.put("OCU_DSC", dsCondition.getString(0,"OCU_DSC"));
		
		return getSqlSession().selectList("slTttblDAO.retrieveByngsltttbl2", param);
	}

	public List<SlTttblVO> retrieveByngsltttbl3(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		param.put("START", dsCondition.getString(0,"START"));
		param.put("END", dsCondition.getString(0,"END"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("NA_BZPLC", dsCondition.getString(0,"NA_BZPLC"));
		param.put("RPBC_DSC", dsCondition.getString(0,"RPBC_DSC"));
		
		return getSqlSession().selectList("slTttblDAO.retrieveByngsltttbl3", param);
	}
	
	public List<SlTttblVO> retrieveByngsltttblAdmin(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("START", dsCondition.getString(0,"START"));
		param.put("END", dsCondition.getString(0,"END"));
		
		param.put("NA_TRPL_C", dsCondition.getString(0,"NA_TRPL_C"));
		param.put("NA_BZPLC", dsCondition.getString(0,"NA_BZPLC"));
		param.put("RPBC_DSC", dsCondition.getString(0,"RPBC_DSC"));
		
		param.put("SPLR_BZNO", dsCondition.getString(0,"SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0,"BUY_BZNO"));
		
		return getSqlSession().selectList("slTttblDAO.retrieveByngsltttbl", param);
	}

	public List<SlTttblVO> retrieveByngsltttblAdmin2(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("START", dsCondition.getString(0,"START"));
		param.put("END", dsCondition.getString(0,"END"));
		
		param.put("NA_TRPL_C", dsCondition.getString(0,"NA_TRPL_C"));
		param.put("NA_BZPLC", dsCondition.getString(0,"NA_BZPLC"));
		param.put("RPBC_DSC", dsCondition.getString(0,"RPBC_DSC"));
		
		param.put("SPLR_BZNO", dsCondition.getString(0,"SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0,"BUY_BZNO"));
		
		return getSqlSession().selectList("slTttblDAO.retrieveByngsltttbl2", param);
	}

	public List<SlTttblVO> retrieveByngsltttblAdmin3(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("START", dsCondition.getString(0,"START"));
		param.put("END", dsCondition.getString(0,"END"));
		
		param.put("NA_TRPL_C", dsCondition.getString(0,"NA_TRPL_C"));
		param.put("NA_BZPLC", dsCondition.getString(0,"NA_BZPLC"));
		param.put("RPBC_DSC", dsCondition.getString(0,"RPBC_DSC"));
		
		param.put("SPLR_BZNO", dsCondition.getString(0,"SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0,"BUY_BZNO"));
		
		return getSqlSession().selectList("slTttblDAO.retrieveByngsltttbl3", param);
	}
}
