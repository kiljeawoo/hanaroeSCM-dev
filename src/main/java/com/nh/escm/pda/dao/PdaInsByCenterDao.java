package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class PdaInsByCenterDao extends AbstractDao {

	public void selectByCenter(String from_date,
			String to_date, String centercode, List<String> daylist, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		param.put("centercode", centercode);
		param.put("DAYLIST", daylist);
		logger.debug("센터코드는 "+centercode.length());

		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> mainSelectList >>> params : " + param);
		}		
		getSqlSession().select("pdaByCenter.selectList", param, handler);
	}
	
	public void selectPdaDetail(String from_date,
			String to_date, String centercode, List<String> daylist, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("FROM_DATE", from_date);
		param.put("TO_DATE", to_date);
		param.put("centercode", centercode);
		param.put("DAYLIST", daylist);

		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> mainSelectList >>> params : " + param);
		}		
		getSqlSession().select("pdaByCenter.selectPdaDetail", param, handler);
	}
}
