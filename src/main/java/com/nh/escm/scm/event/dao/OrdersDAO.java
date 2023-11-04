/**
 * @author swha
 *
 */
package com.nh.escm.scm.event.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.scm.event.vo.OrdersBKGEVTPopUpVO;
import com.nh.escm.scm.event.vo.OrdersEPriceChangePopUpVO;
import com.nh.escm.scm.event.vo.OrdersEPriceChangeVO;
import com.nh.escm.scm.event.vo.OrdersPreEventPrintDetailVO;
import com.nh.escm.scm.event.vo.OrdersPreEventPrintMasterVO;
import com.nh.escm.scm.event.vo.OrdersPreEventProcVO;
import com.nh.escm.scm.event.vo.OrdersPreEventSumsVO;
import com.nh.escm.scm.event.vo.OrdersPreEventVO;

public class OrdersDAO extends AbstractDao {
	
	/*
	 * 예약행사수주현황조회
	 */
	
	/* Grid Master */
	public List<OrdersPreEventVO> retrievePreEventList(String srhBkgEvtYy, String srhBkgEvtNo, String srhOrrDdlDt, String srhNaOdrSt, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhOrrDdlDt", srhOrrDdlDt);
		params.put("srhNaOdrSt", srhNaOdrSt);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePreEventList : " + params);
		}
		return getSqlSession().selectList("ordersDAO.retrievePreEventList", params);
	}
	
	
	/* Grid Detail */
	public List<OrdersPreEventVO> retrievePreEventDetailList(String bkgEvtYy, String bkgEvtNo,
			String naWrsC, String rvoplNaTrplC, String rvoplNaTeamC, String odrplNaTrplC, String rqQt) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bkgEvtYy", bkgEvtYy);
		params.put("bkgEvtNo", bkgEvtNo);
		params.put("naWrsC", naWrsC);
		params.put("rvoplNaTrplC", rvoplNaTrplC);
		params.put("rvoplNaTeamC", rvoplNaTeamC);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("rqQt", rqQt);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePreEventDetailList  : " + params);
		}
		return getSqlSession().selectList("ordersDAO.retrievePreEventDetailList", params);
	}
	
	/* Excel DownLoad Basic */
	public void downloadExcelPreEvent(String srhBkgEvtYy, String srhBkgEvtNo, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelPreEvent : " + params);
		}
		getSqlSession().select("ordersDAO.downloadExcelPreEvent", params, handler);
	}
	
	/* Excel DownLoad Master */
	public void downloadExcelMasterPreEvent(String srhBkgEvtYy, String srhBkgEvtNo, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelMasterPreEvent : " + params);
		}
		getSqlSession().select("ordersDAO.downloadExcelMasterPreEvent", params, handler);
	}
	
	/* Excel DownLoad Detail */
	public void downloadExcelDetailPreEvent(String srhBkgEvtYy, String srhBkgEvtNo, String srhRvoplNaTrplC, String srhOdrplNaTrplC, String srhNaWrsC, String srhRqQt, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bkgEvtYy", srhBkgEvtYy);
		params.put("bkgEvtNo", srhBkgEvtNo);
		params.put("rvoplNaTrplC", srhRvoplNaTrplC);
		params.put("ODRPL_NA_TRPL_C", srhOdrplNaTrplC);
		params.put("naWrsC", srhNaWrsC);
		params.put("rqQt", srhRqQt);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDetailPreEvent : " + params);
		}
		getSqlSession().select("ordersDAO.downloadExcelDetailPreEvent", params, handler);
	}
	
	/* Master Print */
	public List<OrdersPreEventPrintMasterVO> printPreEventListMaster(String srhBkgEvtYy, String srhBkgEvtNo, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printPreEventListMaster : " + params);
		}
		return getSqlSession().selectList("ordersDAO.printPreEventListMaster", params);
	}
	
	/* Detail Print */
	public List<OrdersPreEventPrintDetailVO> printPreEventListDetail(String srhBkgEvtYy, String srhBkgEvtNo, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printPreEventListDetail : " + params);
		}
		return getSqlSession().selectList("ordersDAO.printPreEventListDetail", params);
	}
	
	/*
	 * 예약행사집계현황
	 */
	
	/* Grid Master */
	public List<OrdersPreEventSumsVO> retrievePreEventSumsList(String srhBkgEvtYy, String srhBkgEvtNo, String srhNaWrsC, String srhTrplView, String srhRvoplNaTrplC, String srhOdrplNaTrplC, String TRPL_C){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("srhTrplView", srhTrplView);
		params.put("srhRvoplNaTrplC", srhRvoplNaTrplC);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("TRPL_C", TRPL_C);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePreEventSumsList : " + params);
		}
		
		return getSqlSession().selectList("ordersDAO.retrievePreEventSumsList", params);
	}
	
	/* Grid Detail */
	public List<OrdersPreEventSumsVO> retrievePreEventSumsDetailList(String bkgEvtYy, String bkgEvtNo, String naWrsC, String trplView, String trplC, String TRPL_C){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bkgEvtYy", bkgEvtYy);
		params.put("bkgEvtNo", bkgEvtNo);
		params.put("naWrsC", naWrsC);
		params.put("trplView", trplView);
		params.put("trplC", trplC);
		params.put("TRPL_C", TRPL_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePreEventSumsDetailList : " + params);
		}
		
		return getSqlSession().selectList("ordersDAO.retrievePreEventSumsDetailList", params);
	}
	
	/* Excel DownLoad(Master)  */
	public void downloadExcelPreEventMaterSumsList(String srhBkgEvtYy,
			String srhBkgEvtNo, String srhNaWrsC, String srhTrplView,
			String srhRvoplNaTrplC, String srhOdrplNaTrplC, String TRPL_C, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("srhTrplView", srhTrplView);
		params.put("srhRvoplNaTrplC", srhRvoplNaTrplC);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("TRPL_C", TRPL_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePreEventSumsList : " + params);
		}
		
		getSqlSession().select("ordersDAO.downloadExcelPreEventMaterSumsList", params ,handler);
	}
	
	/* Excel DownLoad(Detail)  */
	public void downloadExcelPreEventSumsList(String srhBkgEvtYy, String srhBkgEvtNo, String srhNaWrsC, String srhTrplView, String srhRvoplNaTrplC, String srhOdrplNaTrplC, String trplC, String M_TRPL_C, String M_TEAM_C, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("srhTrplView", srhTrplView);
		params.put("srhRvoplNaTrplC", srhRvoplNaTrplC);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("M_TRPL_C", M_TRPL_C);
		params.put("M_TEAM_C", M_TEAM_C);
		params.put("trplC", trplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelPreEventSumsList : " + params);
		}
		getSqlSession().select("ordersDAO.downloadExcelPreEventSumsList", params, handler);
	}
	

	/*
	 * 예약행사진행현황 Master
	 */
	public List<OrdersPreEventProcVO> retrievePreEventProcList(String srhBkgEvtYy,
			String srhBkgEvtNoFr, String srhBkgEvtNoTo, String srhOdrplNaTrplC,
			String srhNaWrsC, String trplC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNoFr", srhBkgEvtNoFr);
		params.put("srhBkgEvtNoTo", srhBkgEvtNoTo);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", trplC);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePreEventProcList : " + params);
		}
		
		return getSqlSession().selectList("ordersDAO.retrievePreEventProcList", params);
	}

	/*
	 * 예약행사진행현황 Detail
	 */
	public List<OrdersPreEventProcVO> retrievePreEventProcDetailList(String bkgEvtYy,
			String bkgEvtNo, String odrplNaTrplC, String naWrsC, String trplC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bkgEvtYy", bkgEvtYy);
		params.put("bkgEvtNo", bkgEvtNo);
		params.put("odrplNaTrplC", odrplNaTrplC);
		params.put("naWrsC", naWrsC);
		params.put("trplC", trplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePreEventProcDetailList : " + params);
		}
		return getSqlSession().selectList("ordersDAO.retrievePreEventProcDetailList", params);
	}
	
	/* Excel download */
	public void downloadExcelPreEventProcList(String trplC, String srhBkgEvtYy, String srhBkgEvtNoFr, String srhBkgEvtNoTo, String srhOdrplNaTrplC,
			String srhNaWrsC, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("trplC", trplC);
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNoFr", srhBkgEvtNoFr);
		params.put("srhBkgEvtNoTo", srhBkgEvtNoTo);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelPreEventProcList : " + params);
		}
		getSqlSession().select("ordersDAO.downloadExcelPreEventProcList", params, handler);
	}
	
	/* Print */
	public List<OrdersPreEventProcVO> printPreEventProcList(String srhBkgEvtYy,
			String srhBkgEvtNoFr, String srhBkgEvtNoTo, String srhOdrplNaTrplC,
			String srhNaWrsC, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNoFr", srhBkgEvtNoFr);
		params.put("srhBkgEvtNoTo", srhBkgEvtNoTo);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", TRPL_C_ARR); 			//사업장코드
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printPreEventProcList : " + params);
		}
		
		return getSqlSession().selectList("ordersDAO.printPreEventProcList", params);
	}
		
	/*
	 * ID			: VAN_DS_SC_0230
	 * 화면명 	: 행사가격변경조회
	 * 기능 		: 조회 
	 */
	public List<OrdersEPriceChangeVO> retrieveEventPriceChangeList(
			String srhEvtSqNo, String srhNaWrsC, String srhDateType,
			String srhEvtStDt, String srhEvtEtDt, String srhNaPzplc, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhEvtSqNo", srhEvtSqNo);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("srhDateType", srhDateType);
		params.put("srhEvtStDt", srhEvtStDt);
		params.put("srhEvtEtDt", srhEvtEtDt);
		params.put("srhNaPzplc", srhNaPzplc);
		params.put("trplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEventPriceChangeList : " + params);
		}

		
		return getSqlSession().selectList("ordersDAO.retrieveEventPriceChangeList", params);
	}


	public List<OrdersEPriceChangeVO> retrieveEventPriceChangeDetailList(String naBzplc, String evtSqno, String prgrC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_BZPLC", naBzplc);
		params.put("EVT_SQNO", evtSqno);
		params.put("PRGR_C", prgrC);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEventPriceChangeDetailList : " + params);
		}
		return getSqlSession().selectList("ordersDAO.retrieveEventPriceChangeDetailList", params);
	}
	
	/*  예약구매 조회 POPUP */
	public List<OrdersBKGEVTPopUpVO> retrieveBkgEvtPopUp(String searchYear, String searchType, String srhTxt, String[] TRPL_C_ARR){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchYear", searchYear);
		params.put("searchType", searchType);
		params.put("searchTxt", srhTxt);
		params.put("TRPL_C", TRPL_C_ARR);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveBkgEvtPopUp : " + params.toString());
		}
		return getSqlSession().selectList("ordersDAO.retrieveBkgEvtPopUp", params);
	}
	
	/* 예약구매발주사업장 조회 */
	public List<Map<String, Object>> retrieveBkgEvtOdrplPopUp(String searchCode, String searchNm){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchCode", searchCode);
		params.put("searchNm", searchNm);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveBkgEvtOdrplPopUp : " + params.toString());
		}
		return getSqlSession().selectList("ordersDAO.retrieveBkgEvtOdrplPopUp", params);
	}
	
	
	/*  통합행사조회 POPUP */
	public List<OrdersEPriceChangePopUpVO> retrieveEventPriceChangePopUp(String srhType, String srhTxt, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhType", srhType);
		params.put("srhTxt", srhTxt);
		params.put("TRPL_C", TRPL_C_ARR);

		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEventPriceChangePopUp : " + params.toString());
		}
		return getSqlSession().selectList("ordersDAO.retrieveEventPriceChangePopUp", params);
	}
	
	/* 예약구매기준상품 조회 */
	public List<Map<String, Object>> retrieveEventOrdersWrsPopUp(String searchType, String searchTxt){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("searchTxt", searchTxt);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEventOrdersWrsPopUp : " + params.toString());
		}
		return getSqlSession().selectList("ordersDAO.retrieveEventOrdersWrsPopUp", params);
	}
	
	
	/*
	 * 예약행사수주현황조회 프린트
	 */
	
	/* Grid Master */
	public List<Map<String, Object>> printPreEventList(String srhBkgEvtYy, String srhBkgEvtNo, String srhOrrDdlDt, String srhNaOdrSt, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhBkgEvtYy", srhBkgEvtYy);
		params.put("srhBkgEvtNo", srhBkgEvtNo);
		params.put("srhOrrDdlDt", srhOrrDdlDt);
		params.put("srhNaOdrSt", srhNaOdrSt);
		params.put("srhOdrplNaTrplC", srhOdrplNaTrplC);
		params.put("srhNaWrsC", srhNaWrsC);
		params.put("trplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printPreEventList : " + params);
		}
		return getSqlSession().selectList("ordersDAO.printPreEventList", params);
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}