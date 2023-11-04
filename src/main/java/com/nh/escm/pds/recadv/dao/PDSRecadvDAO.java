package com.nh.escm.pds.recadv.dao;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.recadv.vo.PDSRecadvDailyStoreSumCSVVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvDailyStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvFeeAmn;
import com.nh.escm.pds.recadv.vo.PDSRecadvNPeriodStoreSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvNPeriodStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSkuSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSkuSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumCSVVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSumVO;
import com.nh.escm.scm.order.vo.OrderOrdersSrhConditonVO;

/**
 * 납품정보
 * @author swha
 *
 */
public class PDSRecadvDAO extends AbstractDao {
	
	/*
	 * 화면ID : VAN_DS_SC1000
	 * 화면명 :  일자별 정보
	 */
	public List<PDSRecadvDailyStoreSumVO> retrieveDailyStoreSum(String srhByDt, String[] TRPL_C_ARR){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDt", srhByDt);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDailyStoreSum : " + params);
		}
		return getSqlSession().selectList("pdsRecadvDAO.retrieveDailyStoreSumList", params);
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC1010
	 * 화면명 :  기간별 조회
	 */
	public List<PDSRecadvPeriodSumVO> retrievePeriodSum(String byDtFr, String byDtTo, String[] TRPL_C_ARR){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePeriodSum params : " + params);
		}
		return getSqlSession().selectList("pdsRecadvDAO.retrievePeriodSumList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1020
	 * 화면명 :  기간별 점포별/상품별 정보조회
	 */
	public List<PDSRecadvPeriodStoreSumVO> retrievePeriodStoreSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int end
			,String searchType
			,String searchStr
			){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("searchType", searchType);
		params.put("searchStr", searchStr);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePeriodStoreSum params : " + params);
		}
		return getSqlSession().selectList("pdsRecadvDAO.retrievePeriodStoreSumPgList", params);
	}
	//합계
	public Map<String,Object> retrievePeriodStoreSumTot(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[]
			,String searchType
			,String searchStr
			){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("searchType", searchType);
		params.put("searchStr", searchStr);
		
		return (Map<String,Object>)getSqlSession().selectOne("pdsRecadvDAO.retrievePeriodStoreSumList_Tot", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1020
	 * 화면명 :  기간별 점포별/상품별 정보조회 total count
	 */
	public int getPeriodStoreSumCount(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[]
			,String searchType
			,String searchStr
			){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("searchType", searchType);
		params.put("searchStr", searchStr);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getPeriodStoreSumCount params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getPeriodStoreSumCount", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1021
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세 리스트 Total Count
	 */
	public int getPeriodStoreSumDetailCount(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getPeriodStoreSumDetailCount params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getPeriodStoreSumDetailCountList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1021
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세
	 */
	public List<PDSRecadvPeriodStoreSumDetailVO> retrievePeriodStoreSumDetail(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		return getSqlSession().selectList("pdsRecadvDAO.retrievePeriodStoreSumDetailPgList", params);
	}
	
	//1021 합계
	public Map<String,Object> retrievePeriodStoreSumDetailTot(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		return getSqlSession().selectOne("pdsRecadvDAO.sql_retrievePeriodStoreSumDetailList_Tot", params);
	}
	
	
	
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 :  기간별 상품별/점포별 정보조회
	 */
	public List<PDSRecadvPeriodSkuSumVO> retrievePeriodSkuSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int end){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePeriodSkuSum params : " + params);
		}
		return getSqlSession().selectList("pdsRecadvDAO.retrievePeriodSkuSumPgList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 :  기간별 상품별/점포별 정보조회 total count
	 */
	public int getPeriodSkuSumCount(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getPeriodSkuSumCount params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getPeriodSkuSumCount", params);
	}
	
	public Map<String, Object> getPeriodSkuSumTotal(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getPeriodSkuSumTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getPeriodSkuSumTotal", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1031
	 * 화면명 : 기간별 상품별/점포별 정보조회 - 상세
	 */
	public List<PDSRecadvPeriodSkuSumDetailVO> retrievePeriodSkuSumDetail(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("naWrsC", naWrsC);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);	
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePeriodSkuSum params : " + params);
		}
		return getSqlSession().selectList("pdsRecadvDAO.retrievePeriodSkuSumDetailPgList", params);
	}
	
	public Map<String, Object> getPeriodSkuSumDetailTotal(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("naWrsC", naWrsC);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);	
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getPeriodSkuSumDetailTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getPeriodSkuSumDetailTotal", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1031
	 * 화면명 :  기간별 점포별/상품별 정보 - 상세 total count
	 */
	public int getPeriodSkuSumDetailCount(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("naWrsC", naWrsC);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
			
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getPeriodSkuSumDetailCount params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getPeriodSkuSumDetailCount", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 :  기간별 점포별/상품별 미납조회
	 */
	public List<PDSRecadvNPeriodStoreSumVO> retrieveNPeriodStoreSum(String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[], int start, int end){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhNbyDtFr", srhNbyDtFr);
		params.put("srhNbyDtTo", srhNbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveNPeriodStroeSum params : " + params);
		}
		return getSqlSession().selectList("pdsRecadvDAO.retrieveNPeriodStoreSumPgList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 :  기간별 점포별/상품별 미납조회 Count
	 */
	public int retrieveNPeriodStoreSumCount(
			String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[]) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhNbyDtFr", srhNbyDtFr);
		params.put("srhNbyDtTo", srhNbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveNPeriodStroeSumCount params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.retrieveNPeriodStroeSumCount", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 :  기간별 점포별/상품별 미납조회 합계
	 */
	public PDSRecadvNPeriodStoreSumVO getNPeriodStoreSumTotal(
			String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[]) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhNbyDtFr", srhNbyDtFr);
		params.put("srhNbyDtTo", srhNbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getNPeriodStoreSumTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getNPeriodStoreSumTotal", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1041
	 * 화면명 :  기간별 점포별/상품별 미납조회 상세
	 */
	public List<PDSRecadvNPeriodStoreSumDetailVO> retrieveNPeriodStoreSumDetail(String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[], int start, int end){
			
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("nbyDtFr", nbyDtFr);
		params.put("nbyDtTo", nbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveNPeriodStoreSumDetail params : " + params);
		}
		return getSqlSession().selectList("pdsRecadvDAO.retrieveNPeriodStoreSumDetailPgList", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 :  기간별 점포별/상품별 미납조회 상세 합계
	 */
	public PDSRecadvNPeriodStoreSumVO getNPeriodStoreSumDetailTotal(
			String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[]) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("nbyDtFr", nbyDtFr);
		params.put("nbyDtTo", nbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		if(logger.isDebugEnabled()){
			logger.debug(">>> getNPeriodStoreSumDetailTotal params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getNPeriodStoreSumDetailTotal", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1041
	 * 화면명 :  기간별 점포별/상품별 미납조회 상세 total count
	 */
	public int getNPeriodStoreSumDetailCount(String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[]){
			
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("nbyDtFr", nbyDtFr);
		params.put("nbyDtTo", nbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getNPeriodStoreSumDetail params : " + params);
		}
		return getSqlSession().selectOne("pdsRecadvDAO.getNPeriodStroeSumDetailCount", params);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 :  자료수신_기간집계(점포별/상품별)
	 */
	public void downloadTrplPeriodStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadTrplPeriodStoreSumCSV params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadTrplPeriodStoreSumCSV", params, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 :  자료수신_기간집계(상품별/점포별)
	 */
	public void downloadWrsPeriodStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadWrsPeriodStoreSumCSV params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadWrsPeriodStoreSumCSV", params, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 :  자료수신_일일집계(점포별/상품별)
	 */
	public void downloadTrplDailyStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadTrplDailyStoreSumCSV params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadTrplDailyStoreSumCSV", params, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 :  자료수신_일일집계(상품별/점포별)
	 */
	public void downloadWrsDailyStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fromDate", fromDate);
		params.put("toDate", toDate);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadWrsDailyStoreSumCSV params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadWrsDailyStoreSumCSV", params, handler);
	}
	
	// 수수료 관리 - 계약코드 찾기
	public Map<String, Object> getCserCtrTpc(String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();	
		param.put("glnCode",glnCode);
	
		return getSqlSession().selectOne("pdsRecadvDAO.getCserCtrTpc", param);
	}
	
	// 수수료 관리 - 상품 찾기
	public List<Map<String, Object>> retrieveCommissionWRSList(String SPYPL_NA_TRPL_C, String NA_BZPLC,String SEARCH_TYPE, String TRPL) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SPYPL_NA_TRPL_C",SPYPL_NA_TRPL_C);
		param.put("NA_BZPLC",NA_BZPLC);
		param.put("SEARCH_TYPE",SEARCH_TYPE);
		param.put("TRPL",TRPL);
		
		return getSqlSession().selectList("pdsRecadvDAO.retrieveCommissionWRSList", param);
	}
	
	// 수수료 관리 - 엑셀
	public void retrieveCommissionWRSExcel(String SPYPL_NA_TRPL_C, String NA_BZPLC,String SEARCH_TYPE, String TRPL, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SPYPL_NA_TRPL_C",SPYPL_NA_TRPL_C);
		param.put("NA_BZPLC",NA_BZPLC);
		param.put("SEARCH_TYPE",SEARCH_TYPE);
		param.put("TRPL",TRPL);
		
		getSqlSession().select("pdsRecadvDAO.retrieveCommissionWRSExcel", param, handler);
	}
	
	// 수수료 관리 - 본사 빼고 지사리스트
	public List<Map<String, Object>> retrieveCommissionTrplList(String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("glnCode",glnCode);		
		
		return getSqlSession().selectList("pdsRecadvDAO.retrieveCommissionTrplList", param);
	}
	
	/* 수수료 관리 삽입 */
	public int insertFeeAmnList(PDSRecadvFeeAmn vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertFeeAmn : " + vo.toString());
		}
		return getSqlSession().insert("pdsRecadvDAO.insertFeeAmn", vo);
	}

	// 수수료 현황 조회
	public List<Map<String, Object>> retrieveFeeCurrentList(String glnCode,
			String BY_DT, String mbcoType) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("glnCode",glnCode);
		param.put("BY_DT",BY_DT);
		param.put("mbcoType",mbcoType);
		
		return getSqlSession().selectList("pdsRecadvDAO.retrieveFeeCurrentList", param);
	}
	
	// 수수료 현황 합계
	public Map<String, Object> getFeeCurrentSum(String glnCode,
			String BY_DT,String mbcoType) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("glnCode",glnCode);
		param.put("BY_DT",BY_DT);
		param.put("mbcoType",mbcoType);
		
		return getSqlSession().selectOne("pdsRecadvDAO.getFeeCurrentSum", param);
	}


	// 수수료 현황 상세 조회
	public List<Map<String, Object>> retrieveFeeCurrentDetailList(String BY_DT,
			String BRO_C, String NA_RGN_C, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BY_DT",BY_DT);
		param.put("BRO_C",BRO_C);
		param.put("NA_RGN_C",NA_RGN_C);
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("pdsRecadvDAO.retrieveFeeCurrentDetailList", param);
	}

	// 수수료 현황 상세 카운트
	public int getFeeCurrentDetailListCount(String BY_DT, String BRO_C,
			String NA_RGN_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BY_DT",BY_DT);
		param.put("BRO_C",BRO_C);
		param.put("NA_RGN_C",NA_RGN_C);
		
		return getSqlSession().selectOne("pdsRecadvDAO.getFeeCurrentDetailListCount", param);
	}

	// 수수료 현황 상세 합계
	public Map<String, Object> getFeeCurrentDetailListTotal(String BY_DT,
			String BRO_C, String NA_RGN_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BY_DT",BY_DT);
		param.put("BRO_C",BRO_C);
		param.put("NA_RGN_C",NA_RGN_C);
		
		return getSqlSession().selectOne("pdsRecadvDAO.getFeeCurrentDetailListTotal", param);
	}
	
	// 수수료 현황 상세 합계
	public void retrieveFeeCurrentDetailExcel(String BY_DT,
			String BRO_C, String NA_RGN_C, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BY_DT",BY_DT);
		param.put("BRO_C",BRO_C);
		param.put("NA_RGN_C",NA_RGN_C);
		
		getSqlSession().select("pdsRecadvDAO.retrieveFeeCurrentDetailExcel", param, handler);
	}
	
	public void downloadExcelDailyStoreSum(String srhByDt, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDt", srhByDt);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDailyStoreSum : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadExcelDailyStoreSum", params, handler);
	}


	public void downloadExcelPeriodSum(String byDtFr, String byDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelPeriodSum params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadExcelPeriodSum", params, handler);
	}


	public void downloadExcelPeriodStoreSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int end
			,String searchType
			,String searchStr
			,ExcelFileMakerResultHandler handler
			){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("searchType", searchType);
		params.put("searchStr", searchStr);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelPeriodStoreSum params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadExcelPeriodStoreSum", params, handler);
	}


	public void downloadExcelPeriodStoreSumDetail(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		getSqlSession().select("pdsRecadvDAO.downloadExcelPeriodStoreSumDetail", params, handler);
	}


	public void downloadExcelPeriodSkuSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhByDtFr", srhByDtFr);
		params.put("srhByDtTo", srhByDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelPeriodSkuSum params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadExcelPeriodSkuSum", params, handler);
	}


	public void downloadExcelPeriodStoreSumDeail(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("naWrsC", naWrsC);
		params.put("byDtFr", byDtFr);
		params.put("byDtTo", byDtTo);
		params.put("TRPL_C", TRPL_C_ARR);	
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelPeriodStoreSumDeail params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadExcelPeriodStoreSumDeail", params, handler);
	}


	public void downloadExcelNPeriodStoreSum(String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhNbyDtFr", srhNbyDtFr);
		params.put("srhNbyDtTo", srhNbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelNPeriodStoreSum params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadExcelNPeriodStoreSum", params, handler);
	}


	public void downloadExcelNPeriodStoreSumDeail(String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler){
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("bzplc", bzplc);
		params.put("nbyDtFr", nbyDtFr);
		params.put("nbyDtTo", nbyDtTo);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelNPeriodStoreSumDeail params : " + params);
		}
		getSqlSession().select("pdsRecadvDAO.downloadExcelNPeriodStoreSumDeail", params, handler);
	}


	public void printRetrieveFeeCurrentList(String glnCode,
			String BY_DT, String mbcoType,ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("glnCode",glnCode);
		param.put("BY_DT",BY_DT);
		param.put("mbcoType",mbcoType);
		
		getSqlSession().select("pdsRecadvDAO.printRetrieveFeeCurrentList", param,handler);
	}
}