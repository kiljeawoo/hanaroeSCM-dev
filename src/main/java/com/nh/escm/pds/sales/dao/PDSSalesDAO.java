package com.nh.escm.pds.sales.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.common.BillingMarkUpResultHandler;
import com.nh.escm.pds.sales.vo.PDSSalesDailyStoreSumVO;
import com.nh.escm.pds.sales.vo.PDSSalesLiquorVO;
import com.nh.escm.pds.sales.vo.PDSSalesPeriodSkuSumVO;
import com.nh.escm.pds.sales.vo.PDSSalesPeriodStoreSumVO;

/**
 * 판매정보
 * @author hroh
 *
 */
public class PDSSalesDAO extends AbstractDao {
	
	/*
	 * 화면ID : VAN_DS_SC_0800
	 * 화면명 :  일자별 정보
	 */
	public List<PDSSalesDailyStoreSumVO> retrieveSalesDailyStoreSumList(String srhByDt, String[] TRPL_C_ARR){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDt", srhByDt);		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesDailyStoreSumList : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesDailyStoreSumList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0810
	 * 화면명 :  기간별 조회
	 */
	public List<PDSSalesDailyStoreSumVO> retrieveSalesPeriodSumList(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesPeriodSumList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesPeriodSumList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회
	 */
	public List<PDSSalesPeriodStoreSumVO> retrieveSalesPeriodStoreSumPgList(String srhByDtFr, String srhByDtTo,
			String[] TRPL_C_ARR, int start, int end,String naRgnC, String TRPL_C){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("TRPL_C", TRPL_C);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesPeriodStoreSumPgList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesPeriodStoreSumPgList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회 총 Count
	 */
	public int retrieveSalesPeriodStoreSumCount(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR,String naRgnC, String TRPL_C) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("TRPL_C", TRPL_C);
				
		if(naRgnC != null && naRgnC.length() > 0)
		{		
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesPeriodStoreSumCount params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.retrieveSalesPeriodStoreSumCount", params);
	}
	
	/*
	 * 화면ID : 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회 합계
	 */
	public PDSSalesPeriodStoreSumVO getSalesPeriodStoreSumTotal(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR,String naRgnC, String TRPL_C) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("TRPL_C", TRPL_C);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesPeriodStoreSumTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesPeriodStoreSumTotal", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0822
	 * 화면명 :  기간별 점포별/상품별 간선해제 정보조회
	 */
	public List<Map<String, Object>> retrieveSalesPeriodStoreSumTrunkPgList(String srhByDtFr, String srhByDtTo,
			String[] TRPL_C_ARR, int start, int end, String naRgnC, String TRPL_C) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("TRPL_C", TRPL_C);

		if (naRgnC != null && naRgnC.length() > 0) {
			params.put("naRgnC", naRgnC.substring(0, 2)); // 지역코드
		}

		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveSalesPeriodStoreSumTrunkPgList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesPeriodStoreSumTrunkPgList", params);
	}

	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 -상세
	 */
	public List<Map<String, Object>> retrieveSalesPeriodStoreSumDetailPgList(
			String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR,
			int start, int limit) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);		
		params.put("start", start);
		params.put("end", limit);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesPeriodStoreSumDetailPgList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesPeriodStoreSumDetailPgList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 상세 총 Count
	 */
	public int getSalesPeriodStoreSumDetailCount(
			String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesPeriodStoreSumDetailCount params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesPeriodStoreSumDetailCount", params);
	}
	
	/*
	 * 화면ID : 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 상세 합계
	 */
	public Map<String, Object> getSalesPeriodStoreSumDetailTotal(
			String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesPeriodStoreSumDetailTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesPeriodStoreSumDetailTotal", params);
	}
	
	
	/*
	 * 화면ID : 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 상품별/점포별 정보조회
	 */
	public List<PDSSalesPeriodSkuSumVO> retrieveSalesPeriodSkuSumPgList( String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, String type, int start, int end) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("srhWrsC", srhWrsC);
		params.put("type", type);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesPeriodSkuSumPgList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesPeriodSkuSumPgList", params);
	}

	/*
	 * 화면ID : 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 상품별/점포별 정보조회 Count
	 */
	public int getSalesPeriodSkuSumCount(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, String type) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("srhWrsC", srhWrsC);
		params.put("type", type);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> getSalesPeriodSkuSumCount params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesPeriodSkuSumCount", params);
	}

	/*
	 * 화면ID : 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 상품별/점포별 정보조회 총합계
	 */
	public PDSSalesPeriodSkuSumVO getSalesPeriodSkuSumTotal(String srhByDtFr,	String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, String type) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("srhWrsC", srhWrsC);
		params.put("type", type);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesPeriodSkuSumTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesPeriodSkuSumTotal", params);
	}

	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 상세 조회
	 */
	public List<Map<String, Object>> retrieveSalesPeriodSkuSumDetailPgList(
			String wrsC, String byDtFr, String byDtTo, String[] TRPL_C_ARR, int start,
			int limit, String naRgnC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("wrsC", wrsC);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);		
		params.put("start", start);
		params.put("end", limit);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesPeriodSkuSumDetailPgList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesPeriodSkuSumDetailPgList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 상세 Count
	 */
	public int getSalesPeriodSkuSumDetailCount(String wrsC, String byDtFr,
			String byDtTo, String[] TRPL_C_ARR, String naRgnC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("wrsC", wrsC);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesPeriodSkuSumDetailCount params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesPeriodSkuSumDetailCount", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 상세 총합계
	 */
	public Map<String, Object> getSalesPeriodSkuSumDetailTotal(String wrsC,
			String byDtFr, String byDtTo, String[] TRPL_C_ARR, String naRgnC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("wrsC", wrsC);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesPeriodSkuSumDetailTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesPeriodSkuSumDetailTotal", params);
	}

	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 :  주류실적 조회
	 */
	public List<PDSSalesLiquorVO> retrieveSalesLiquorList(String searchType, String mbcoType, String srhDateType, 
			String fromDate, String toDate, String srhMonth, 
			String srhWeak, String prgrC, String naCode, 
			String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR,
			int start, int limit) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("mbcoType", mbcoType);
		params.put("srhDateType", srhDateType);
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("srhMonth", srhMonth);		
		params.put("srhWeak", srhWeak);
		params.put("prgrC", prgrC);
		params.put("naCode", naCode);
		params.put("wrsCode", wrsCode);
		params.put("mrCenter", mrCenter);		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		params.put("naRgnC2", naRgnC2);
		
		params.put("start", start);
		params.put("end", limit);
		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesLiquorList : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveSalesLiquorList", params);
	}

	public List<Map<String, Object>> retrieveRgnCList() {		
		return getSqlSession().selectList("pdsSalesDAO.retrieveRgnCList");
	}
	
	// 주류실적 지역코드2
	public List<Map<String, Object>> retrieveRgnC2List(String naRgnC) {
		Map<String, Object> params = new HashMap<String, Object>();	
		params.put("naRgnC", naRgnC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRgnC2List : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveRgnC2List", params);
	}
	
	//주류실적 권한 체크
	public List<Map<String, Object>> getLiquorYn(String glncode) {
		Map<String, Object> params = new HashMap<String, Object>();	
		params.put("glncode", glncode);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getLiquorYn : " + glncode);
		}
		return getSqlSession().selectList("pdsSalesDAO.getLiquorYn", params);
	}

	
	public List<Map<String, Object>> retrieveMrCenterList(String mbcoType) {
		Map<String, Object> params = new HashMap<String, Object>();	
		params.put("mbcoType", mbcoType);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveMrCenterList : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.retrieveMrCenterList", params);
	}

	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 -상세 -엑셀다운로드
	 */
	public List<Map<String, Object>> downloadExcelSalesPeriodStoreSumDetailPgList(String bzplc,
			String byDtFr, String byDtTo, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodStoreSumDetailPgList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.downloadExcelSalesPeriodStoreSumDetailPgList", params);
	}	
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 엑셀다운로드
	 */
	public List<PDSSalesPeriodStoreSumVO> downloadExcelSalesPeriodStoreSumList(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String naRgnC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodStoreSumList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.downloadExcelSalesPeriodStoreSumList", params);
	}
	
	/*
	 * 화면ID : 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 상품별/점포별 정보조회 - 엑셀다운로드
	 */
	public List<PDSSalesPeriodSkuSumVO> downloadExcelSalesPeriodSkuSumList(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodSkuSumList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.downloadExcelSalesPeriodSkuSumList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 상세 조회 - 다운로드
	 */
	public List<Map<String, Object>> downloadExcelSalesPeriodSkuSumDetailList(
			String wrsC, String byDtFr, String byDtTo, String[] TRPL_C_ARR, String naRgnC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("wrsC", wrsC);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodSkuSumDetailList params : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.downloadExcelSalesPeriodSkuSumDetailList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 월별집계 - 사업장
	 */
	public void downloadExcelSalesMonthlyBzplc(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesMonthlyBzplc params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesMonthlyBzplc", params, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 월별집계 - 상품
	 */
	public void downloadExcelSalesMonthlyWrsC(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesMonthlyWrsC params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesMonthlyWrsC", params, handler);
	}
		
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 일일집계
	 */
	public void downloadExcelSalesDaliy(
			String srhByDtFr, String srhByDtTo, String srhTrplC, String SEARCH_TYPE, String chkAtl, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", srhTrplC);		
		
		params.put("SEARCH_TYPE", SEARCH_TYPE);
		params.put("chkAtl", chkAtl);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesDaliy params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesDaliy", params, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 일일집계 Billing
	 */
	public List<Map<String, Object>> downloadExcelSalesDaliyBilling(
			String srhByDtFr, String srhByDtTo, String srhTrplC, String SEARCH_TYPE, String chkAtl) {
		
		List<Map<String, Object>> returnList = new ArrayList<>();
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", srhTrplC);		
		
		params.put("SEARCH_TYPE", SEARCH_TYPE);
		params.put("chkAtl", chkAtl);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesDaliyBilling params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesDaliy", params, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 :  주류실적 조회 - 엑셀 다운로드
	 */
	public void downloadExcelSalesLiquorList(String searchType, String mbcoType, String srhDateType, 
			String fromDate, String toDate, String srhMonth, 
			String srhWeak, String prgrC, String naCode, 
			String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("mbcoType", mbcoType);
		params.put("srhDateType", srhDateType);
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("srhMonth", srhMonth);		
		params.put("srhWeak", srhWeak);
		params.put("prgrC", prgrC);
		params.put("naCode", naCode);
		params.put("wrsCode", wrsCode);
		params.put("mrCenter", mrCenter);		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		params.put("naRgnC2", naRgnC2);
		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesLiquorList : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesLiquorList", params, handler);
	}

	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 :  주류실적 조회 총 카운트
	 */
	public int getSalesLiquorCount(String searchType, String mbcoType, String srhDateType, String fromDate,
			String toDate, String srhMonth, String srhWeak, String prgrC,
			String naCode, String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("mbcoType", mbcoType);
		params.put("srhDateType", srhDateType);
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("srhMonth", srhMonth);		
		params.put("srhWeak", srhWeak);
		params.put("prgrC", prgrC);
		params.put("naCode", naCode);
		params.put("wrsCode", wrsCode);
		params.put("mrCenter", mrCenter);
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		params.put("naRgnC2", naRgnC2);
		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesLiquorCount : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesLiquorCount", params);
		
	}

	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 :  주류실적 조회 합계
	 */
	public Map<String, Object> getSalesLiquorTotal(String searchType,
			String mbcoType, String srhDateType, String fromDate,
			String toDate, String srhMonth, String srhWeak, String prgrC,
			String naCode, String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("mbcoType", mbcoType);
		params.put("srhDateType", srhDateType);
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("srhMonth", srhMonth);		
		params.put("srhWeak", srhWeak);
		params.put("prgrC", prgrC);
		params.put("naCode", naCode);
		params.put("wrsCode", wrsCode);
		params.put("mrCenter", mrCenter);
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		params.put("naRgnC2", naRgnC2);
		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getSalesLiquorTotal : " + params);
		}
		return getSqlSession().selectOne("pdsSalesDAO.getSalesLiquorTotal", params);
	}
	
	/*주류실적 본사만 조회 가능 */
	public List<Map<String, Object>> retrieveMbcoDsc(
			String TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C",TRPL_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveMbcoDsc : " + param);
		}
	
		return getSqlSession().selectList("pdsSalesDAO.retrieveMbcoDsc", param);
	}
	
	/* 판매정보 빌링 */
	public boolean markUp(String srhByDtFr, String srhByDtTo,
			String[] TRPL_C_ARR, String sessionGlnCode, String sessionUserId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("srhDtFr", srhByDtFr);
		param.put("srhDtTo", srhByDtTo);	
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("sessionGlnCode", sessionGlnCode);
		param.put("sessionUserId", sessionUserId);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> markUpSalesDaliy : " + param);
		}
		
		return getSqlSession().update("pdsSalesDAO.markUpSalesDaliy", param) > 0;
	}

	public List<Map<String, Object>> downloadExcelSalesLiquor(String searchType, String mbcoType, String srhDateType, 
			String fromDate, String toDate, String srhMonth, 
			String srhWeak, String prgrC, String naCode, 
			String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType", searchType);
		params.put("mbcoType", mbcoType);
		params.put("srhDateType", srhDateType);
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("srhMonth", srhMonth);		
		params.put("srhWeak", srhWeak);
		params.put("prgrC", prgrC);
		params.put("naCode", naCode);
		params.put("wrsCode", wrsCode);
		params.put("mrCenter", mrCenter)
		;		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		params.put("naRgnC2", naRgnC2);		

		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesLiquor : " + params);
		}
		return getSqlSession().selectList("pdsSalesDAO.downloadExcelSalesLiquor", params);
	}

	public void retrieveSalesDailyStoreExcel(
			String srhByDt, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDt", srhByDt);		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesDailyStoreExcel : " + params);
		}
		getSqlSession().select("pdsSalesDAO.retrieveSalesDailyStoreExcel", params, handler);
	}

	public void retrieveSalesPeriodSumExcel(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSalesPeriodSumExcel params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.retrieveSalesPeriodSumExcel", params, handler);
	}

	public int saveAtlSalesData(String srhByDtFr, String srhByDtTo, String[] tRPL_C_ARR) {
		
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);
		params.put("srhTrplC", tRPL_C_ARR);		
		
		return getSqlSession().insert("pdsSalesDAO.saveAtlSalesData", params);
	}

	public void downloadExcelSalesPeriodStoreSumList(String srhByDtFr, String srhByDtTo,
			String[] TRPL_C_ARR, int start, int end,String naRgnC, String TRPL_C, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("TRPL_C", TRPL_C);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
		params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodStoreSumList params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesPeriodStoreSumList", params, handler);
	}

	public void downloadExcelSalesPeriodStoreSumTrunkList(String srhByDtFr, String srhByDtTo,
			String[] TRPL_C_ARR, int start, int end, String naRgnC, String TRPL_C, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("TRPL_C", TRPL_C);

		if (naRgnC != null && naRgnC.length() > 0) {
			params.put("naRgnC", naRgnC.substring(0, 2)); // 지역코드
		}

		if (logger.isDebugEnabled()) {
			logger.debug(">>> downloadExcelSalesPeriodStoreSumTrunkList params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesPeriodStoreSumTrunkList", params, handler);
	}

	public void downloadExcelSalesPeriodStoreSumDetailPgList(
			String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR,
			int start, int limit, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);		
		params.put("start", start);
		params.put("end", limit);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodStoreSumDetailPgList params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesPeriodStoreSumDetailPgList", params, handler);
	}

	public void downloadExcelSalesPeriodSkuSumList( String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, int start, int end, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);
		params.put("srhWrsC", srhWrsC);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodSkuSumList params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesPeriodSkuSumList", params, handler);
	}

	public void downloadExcelSalesPeriodSkuSumDetailList(
			String wrsC, String byDtFr, String byDtTo, String[] TRPL_C_ARR, int start,
			int limit, String naRgnC, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("wrsC", wrsC);
		params.put("srhDtFr", byDtFr);
		params.put("srhDtTo", byDtTo);
		params.put("srhTrplC", TRPL_C_ARR);		
		params.put("start", start);
		params.put("end", limit);
		
		if(naRgnC != null && naRgnC.length() > 0)
		{
			params.put("naRgnC", naRgnC.substring(0,2)); //지역코드
		}
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSalesPeriodSkuSumDetailList params : " + params);
		}
		getSqlSession().select("pdsSalesDAO.downloadExcelSalesPeriodSkuSumDetailList", params, handler);
	}
	
}

