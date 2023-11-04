package com.nh.escm.analysis.market.dao;


import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class MarketDAO extends AbstractDao {
	
	
	//엑셀 - 1900,1910
	public void excel1900_1910(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String RGN_C,
			ExcelFileMakerResultHandler handler
				){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DIV", DIV);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("DATE", DATE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));	
		
		getSqlSession().select("MarketDAO.excel1900_1910", paramMap, handler);
	}
	
	//엑셀 - 1920,1930
	public void excel1920_1930(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String RGN_C,
			ExcelFileMakerResultHandler handler
				){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DIV", DIV);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("DATE", DATE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		
		getSqlSession().select("MarketDAO.excel1920_1930", paramMap, handler);
	}
	
	//엑셀 - 1940
	public void excel1940(
			String pageType,
			String DATE,
			String PREDATE,
			String RGN_C,
			int CNT,
			String CODE,
			ExcelFileMakerResultHandler handler
				){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		paramMap.put("PREDATE", PREDATE);
		paramMap.put("CNT", CNT);
		paramMap.put("CODE", CODE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		getSqlSession().select("MarketDAO.excel1940", paramMap, handler);
	}
	
	//엑셀 - 1950
	public void excel1950(
			String pageType,
			String DATE,
			String PREDATE,
			String RGN_C,
			int CNT,
			String CODE,
			ExcelFileMakerResultHandler handler
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		paramMap.put("PREDATE", PREDATE);
		paramMap.put("CNT", CNT);
		paramMap.put("CODE", CODE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		getSqlSession().select("MarketDAO.excel1950", paramMap, handler);
	}

	//엑셀 - 1970,1980
	public void excel1970_1980(
			String pageType,
			String DATE,
			String PREDATE,
			String BZPLC,
			ExcelFileMakerResultHandler handler
				){

		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		paramMap.put("PREDATE", PREDATE);
		paramMap.put("BZPLC", BZPLC);
		getSqlSession().select("MarketDAO.excel1970_1980", paramMap, handler);
	}
	
	/** 자사상품 월별,주별 시장점유율 상세 */
	//점포,분류별 리스트
	public List<Map<String, Object>> retrieveStoreClsMasterList(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String RGN_C
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DIV", DIV);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("DATE", DATE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		return getSqlSession().selectList("MarketDAO.retrieveStoreClsMasterList", paramMap);
	}
	
	//점포,분류 상세 데이터
	public List<Map<String, Object>> retrieveStoreClsList(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String CODE,
			String RGN_C
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DIV", DIV);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("DATE", DATE);
		paramMap.put("CODE", CODE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		return getSqlSession().selectList("MarketDAO.retrieveStoreClsList", paramMap);
	}
	
	/** 자사상품 월별,주별 시장점유율 상세 */
	
	//분류 리스트
	public List<Map<String, Object>> retrieveDetailClsMasterList(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String RGN_C
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DIV", DIV);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("DATE", DATE);		
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		return getSqlSession().selectList("MarketDAO.retrieveDetailClsMasterList", paramMap);
	}
	
	//분류 리스트 상세(상품 or 점포)
	public List<Map<String, Object>> retrieveDetailClsSlaveList(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String CODE,
			String RGN_C
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DIV", DIV);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("DATE", DATE);
		paramMap.put("CODE", CODE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));			
		return getSqlSession().selectList("MarketDAO.retrieveDetailClsSlaveList", paramMap);
	}
	
	/** 월별,주별 판매 순위 랭킹 */
	
	//분류 리스트
	public List<Map<String, Object>> retrieveRankingMasterList(
			String pageType,
			String DATE	,
			String RGN_C,
			String TRPL_C
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		paramMap.put("TRPL_C", TRPL_C);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		return getSqlSession().selectList("MarketDAO.retrieveRankingMasterList", paramMap);
	}
	
	//분류별 거래처 판매순위
	public List<Map<String, Object>> retrieveRankingSlaveList(
			String pageType,
			String DATE,
			String PREDATE,
			String CODE,
			String RGN_C,
			int CNT
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		paramMap.put("PREDATE", PREDATE);
		paramMap.put("CODE", CODE);
		paramMap.put("CNT", CNT);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		return getSqlSession().selectList("MarketDAO.retrieveRankingSlaveList", paramMap);
	}
	
	
	/** 월별,주별 경쟁사 시장분석 */ 
	
	//점포 리스트
	public List<Map<String, Object>> retrieveCompetitorsBzplcList(
			String pageType,
			String DATE,
			String RGN_C
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		return getSqlSession().selectList("MarketDAO.retrieveCompetitorsBzplcList", paramMap);
	}
		
	
	//경쟁사 리스트
	public List<Map<String, Object>> retrieveCompetitorsMasterList(
			String pageType,
			String DATE,
			String BZPLC_ARR[]
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		paramMap.put("BZPLC", BZPLC_ARR);		
		return getSqlSession().selectList("MarketDAO.retrieveCompetitorsMasterList", paramMap);
	}

	//경쟁사별 분류,상품 데이터
	public List<Map<String, Object>> retrieveCompetitorsSlaveList(
			String pageType,
			String TRPL_C,
			String BZPLC_ARR[],
			String DATE,
			String PREDATE
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("BZPLC", BZPLC_ARR[0]);
		paramMap.put("DATE", DATE);
		paramMap.put("PREDATE", PREDATE);
		return getSqlSession().selectList("MarketDAO.retrieveCompetitorsSlaveList", paramMap);
	}
	
	//점포별 ABC분석 
	public List<Map<String, Object>> retrieveABCList(
			String TRPL_C[],
			List<String> BZPLC,
			String DATE,
			String SQL1,
			String SQL2
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();		
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("BZPLC", BZPLC);
		paramMap.put("DATE", DATE);
		paramMap.put("SQL1", SQL1);
		paramMap.put("SQL2", SQL2);
		return getSqlSession().selectList("MarketDAO.retrieveABCList", paramMap);
	}
	
	//나의 카테고리
	public List<Map<String, Object>> selectListMyCategory(String TRPL_C){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();		
		paramMap.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("MarketDAO.selectListMyCategory", paramMap);
	}

	public List<Map<String, Object>> retrieveCompetitorsClsBzplcWrsList(
			  String pageType
			, String TRPL_C
			, String BZPLC
			, String DATE
			, String LCLC
			, String MCLC
			, String SCLC
			, String RGN_C
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("BZPLC", BZPLC);
		paramMap.put("DATE", DATE);
		paramMap.put("LCLC", LCLC);
		paramMap.put("MCLC", MCLC);
		paramMap.put("SCLC", SCLC);
		paramMap.put("RGN_C", RGN_C);
		
		
		return getSqlSession().selectList("MarketDAO.retrieveCompetitorsClsBzplcWrsList", paramMap);
	}

	public  List<Map<String, Object>> retrieveConsentTrplList(String bsnDsc, String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", bsnDsc);	
		param.put("NA_TRPL_C", naTrplC);	
		
		return getSqlSession().selectList("MarketDAO.retrieveConsentTrplList", param) ;

	}


	public void insertInteTrplList(
			String TRPL_C,
			String INTE_TRPL_C,
			String INTE_TRPL_NM,
			String analysis
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("INTE_TRPL_C", INTE_TRPL_C);
		paramMap.put("INTE_TRPL_NM", INTE_TRPL_NM);
		paramMap.put("analysis", analysis);
		getSqlSession().insert("MarketDAO.insertInteTrplList", paramMap);
	}
	
	//관심점포/상품 삭제
	public void deleteInteTrplList(
			String TRPL_C,
			String CODE,
			String analysis
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("CODE", CODE);
		paramMap.put("analysis", analysis);
		getSqlSession().delete("MarketDAO.deleteInteTrplList", paramMap);
	}
	
	//관심점포/상품 저장 리스트
	public List<Map<String, Object>> retrieveInteTrplList(
			String TRPL_C,
			String analysis
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		return getSqlSession().selectList("MarketDAO.retrieveInteTrplList", paramMap);
	}


	public  List<Map<String, Object>> retrieveTrplWrsList(String bsnDsc, String naTrplC, String inteTrplC, String searchWrsNm) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", bsnDsc);	
		param.put("NA_TRPL_C", naTrplC);	
		param.put("INTE_TRPL_C", inteTrplC);	
		param.put("WRSNM", searchWrsNm);	
		
		
		return getSqlSession().selectList("MarketDAO.retrieveTrplWrsList", param) ;

	}

	public void insertInteTrplWrsList(String TRPL_C, String INTE_TRPL_C, String WRS_C, String WRS_NM, String analysis) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("INTE_TRPL_C", INTE_TRPL_C);
		paramMap.put("WRS_C", WRS_C);
		paramMap.put("WRSNM", WRS_NM);
		paramMap.put("analysis", analysis);
		
		getSqlSession().insert("MarketDAO.insertInteWrsList", paramMap);
		
	}

	public List<Map<String, Object>> retrieveClsInteWrsList(String bsnDsc,
			String naTrplC, String lCLC, String mCLC, String sCLC, String dTCF_C) {
		
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", bsnDsc);	
		param.put("NA_TRPL_C", naTrplC);
		param.put("LCLC", lCLC);
		param.put("MCLC", mCLC);
		param.put("SCLC", sCLC);
		param.put("DTCF_C", dTCF_C);
		
		
		
		return getSqlSession().selectList("MarketDAO.retrieveClsInteWrsList", param) ;
	}

	public void deleteClsInteWrsList(String TRPL_C, String INTE_TRPL_C,  String WRS_C, 	String analysis) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("INTE_TRPL_C", INTE_TRPL_C);
		paramMap.put("WRS_C", WRS_C);
		paramMap.put("analysis", analysis);
		
		getSqlSession().delete("MarketDAO.deleteClsInteWrsList", paramMap);
		
	}

	public List<Map<String, Object>> retrieveClsWrsList(String TRPL_C, String nA_WRS_LCLC,
			String nA_WRS_MCLC, String nA_WRS_SCLC, String nA_WRS_DTCF_C) {
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("NA_WRS_LCLC", nA_WRS_LCLC);
		paramMap.put("NA_WRS_MCLC", nA_WRS_MCLC);
		paramMap.put("NA_WRS_SCLC", nA_WRS_SCLC);
		paramMap.put("NA_WRS_DTCF_C", nA_WRS_DTCF_C);
		
		return getSqlSession().selectList("MarketDAO.retrieveClsWrsList", paramMap);
	}

	public void insertInteClsWrsList(String TRPL_C, String INTE_TRPL_C, String WRS_C, String WRSNM) {
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("INTE_TRPL_C", INTE_TRPL_C);
		paramMap.put("WRS_C", WRS_C);
		paramMap.put("WRSNM", WRSNM);

		getSqlSession().insert("MarketDAO.insertInteWrsList", paramMap);
	}

	public List<Map<String, Object>> retrieveCatSalesMon(String srhSlYm, String srhTrplC) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("SL_YM", srhSlYm);
		paramMap.put("TRPL_C", srhTrplC);

		
		return getSqlSession().selectList("MarketDAO.retrieveCatSalesMon", paramMap);
	}

	public void retrieveClsWrsMonList(
			  String pageType
			, String TRPL_C
			, String BZPLC
			, String DATE
			, String LCLC
			, String MCLC
			, String SCLC
			, String DTCF_C
			, ExcelFileMakerResultHandler handler
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("BZPLC", BZPLC);
		paramMap.put("DATE", DATE);
		paramMap.put("LCLC", LCLC);
		paramMap.put("MCLC", MCLC);
		paramMap.put("SCLC", SCLC);
		paramMap.put("DTCF_C", DTCF_C);
		
		
		getSqlSession().select("MarketDAO.retrieveClsWrsMonList", paramMap, handler);
	}


	public List<Map<String, Object>> retrieveCatSalesWeek(String srhSlWk, String srhTrplC) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("SL_WK", srhSlWk);
		paramMap.put("TRPL_C", srhTrplC);

		
		return getSqlSession().selectList("MarketDAO.retrieveCatSalesWeek", paramMap);
	}

	public void retrieveClsWrsWeekList(
			  String pageType
			, String TRPL_C
			, String BZPLC
			, String SL_WK
			, String LCLC
			, String MCLC
			, String SCLC
			, String DTCF_C
			, ExcelFileMakerResultHandler handler
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("BZPLC", BZPLC);
		paramMap.put("SL_WK", SL_WK);
		paramMap.put("LCLC", LCLC);
		paramMap.put("MCLC", MCLC);
		paramMap.put("SCLC", SCLC);
		paramMap.put("DTCF_C", DTCF_C);
		
		
		getSqlSession().select("MarketDAO.retrieveClsWrsWeekList", paramMap, handler);
	}

	public List<Map<String, Object>> excelTitle(
			String pageType,
			String DATE,
			String RGN_C,
			String CODE
			) {
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("pageType", pageType);
		paramMap.put("DATE", DATE);
		paramMap.put("CODE", CODE);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		
		return getSqlSession().selectList("MarketDAO.excelTitle", paramMap);
	}

}

