package com.nh.escm.scm.order.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;


public class OrdersRSVDAO  extends AbstractDao {
	
	public List<Map<String, Object>> getOrderRSVMaster(
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC,
			String[] trplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchPeriod", searchPeriod);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("wmcLocRgnDsc", wmcLocRgnDsc);
		param.put("htLovRgnC", htLovRgnC);
		param.put("trplC", trplC);
		
		return getSqlSession().selectList("order_rsv.getOrderRSVMaster", param);
	}
	
	
	public List<Map<String, Object>> getOrderRSVDetail(
			String rvoplNaTrplC,
			String spyplNaTrplC,
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("rvoplNaTrplC", rvoplNaTrplC);
		param.put("spyplNaTrplC", spyplNaTrplC);
		param.put("searchPeriod", searchPeriod);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("wmcLocRgnDsc", wmcLocRgnDsc);
		param.put("htLovRgnC", htLovRgnC);
		
		return getSqlSession().selectList("order_rsv.getOrderRSVDetail", param);
	}
	
	
	public List<Map<String, Object>> getOrderRSVThird(
			String ODRPL_NA_TRPL_C,
			String ODRPL_NA_TEAM_C,
			String ODR_DT,
			String ODR_SLPNO,
			String SPYPL_NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ODRPL_NA_TRPL_C", ODRPL_NA_TRPL_C);
		param.put("ODRPL_NA_TEAM_C", ODRPL_NA_TEAM_C);
		param.put("ODR_DT", ODR_DT);
		param.put("ODR_SLPNO", ODR_SLPNO);
		param.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		return getSqlSession().selectList("order_rsv.getOrderRSVThird", param);
	}
	
	public void downloadExcel(
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC,
			String[] trplC,
			ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchPeriod", searchPeriod);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("wmcLocRgnDsc", wmcLocRgnDsc);
		param.put("htLovRgnC", htLovRgnC);
		param.put("trplC", trplC);
		
		getSqlSession().select("order_rsv.downloadExcel", param, handler);
	}


	public List<Map<String, Object>> downloadExcelBilling(
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC,
			String[] trplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchPeriod", searchPeriod);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("wmcLocRgnDsc", wmcLocRgnDsc);
		param.put("htLovRgnC", htLovRgnC);
		param.put("trplC", trplC);
		
		return getSqlSession().selectList("order_rsv.downloadExcel", param);
	}
	
	
}
