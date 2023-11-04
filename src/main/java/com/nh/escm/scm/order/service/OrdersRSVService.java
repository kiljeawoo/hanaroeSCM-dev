package com.nh.escm.scm.order.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.scm.order.dao.OrdersRSVDAO;

@Service
public class OrdersRSVService extends AbstractService {

	@Autowired
	private OrdersRSVDAO ordersRSVDao;
	
	Logger logger = LoggerUtil.getServerLogger(this);
	
	/**
	 * 수주예정 마스터
	 * @param searchPeriod
	 * @param calFrom
	 * @param calTo
	 * @param wmcLocRgnDsc
	 * @param htLovRgnC
	 * @param trplC
	 * @return
	 */
	public List<Map<String, Object>> getOrderRSVMaster(
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC,
			String[] trplC) {
		return ordersRSVDao.getOrderRSVMaster(searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC, trplC);
	}
	
	
	public List<Map<String, Object>> getOrderRSVDetail(
			String rvoplNaTrplC,
			String spyplNaTrplC,
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC) {
		return ordersRSVDao.getOrderRSVDetail(rvoplNaTrplC, spyplNaTrplC, searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC);
	}
	
	public List<Map<String, Object>> getOrderRSVThird(
			String ODRPL_NA_TRPL_C,
			String ODRPL_NA_TEAM_C,
			String ODR_DT,
			String ODR_SLPNO,
			String SPYPL_NA_TRPL_C) {
		
		return ordersRSVDao.getOrderRSVThird(ODRPL_NA_TRPL_C, ODRPL_NA_TEAM_C, ODR_DT, ODR_SLPNO,SPYPL_NA_TRPL_C);
	}
	
	public void downloadExcel(
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC,
			String[] trplC,
			ExcelFileMakerResultHandler handler) {
		ordersRSVDao.downloadExcel(searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC, trplC, handler);
	}
	
	public List<Map<String, Object>> downloadExcelBilling(
			String searchPeriod,
			String calFrom,
			String calTo,
			String wmcLocRgnDsc,
			String htLovRgnC,
			String[] trplC) {
		return ordersRSVDao.downloadExcelBilling(searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC, trplC);
	}

}
