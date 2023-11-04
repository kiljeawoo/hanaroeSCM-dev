package com.nh.escm.analysis.market.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.analysis.market.dao.MarketDAO;

@Service
public class MarketService  extends AbstractService{
	
	@Autowired
	private MarketDAO marketDAO;

	//엑셀 - 1900,1910
	public void excel1900_1910(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String RGN_C,
			ExcelFileMakerResultHandler handler
				){
		
		marketDAO.excel1900_1910(pageType, DIV, TRPL_C, DATE, RGN_C, handler);
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
		
		marketDAO.excel1920_1930(pageType, DIV, TRPL_C, DATE, RGN_C, handler);
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
		
		marketDAO.excel1940(pageType, DATE, PREDATE, RGN_C, CNT, CODE, handler);
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
		
		marketDAO.excel1950(pageType, DATE, PREDATE, RGN_C, CNT, CODE, handler);
	}
	
	//엑셀 - 1970,1980
	public void excel1970_1980(
			String pageType,
			String DATE,
			String PREDATE,
			String BZPLC,
			ExcelFileMakerResultHandler handler
				){
		
		marketDAO.excel1970_1980(pageType, DATE, PREDATE, BZPLC, handler);
	}
	
	/** 자사상품 월별,주별 시장점유율 */
	
	//월별 점포,분류별 리스트
	public List<Map<String, Object>> retrieveStoreClsMasterList(
			String pageType,
			String DIV,
			String TRPL_C[],
			String DATE,
			String RGN_C
				){
		
		return marketDAO.retrieveStoreClsMasterList(pageType, DIV, TRPL_C, DATE, RGN_C);
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
		
		return marketDAO.retrieveStoreClsList(pageType, DIV, TRPL_C, DATE, CODE, RGN_C);
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
		
		return marketDAO.retrieveDetailClsMasterList(pageType, DIV, TRPL_C, DATE, RGN_C);
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
		
		return marketDAO.retrieveDetailClsSlaveList(pageType, DIV, TRPL_C, DATE, CODE, RGN_C);
	}
	
	/** 월별,주별 판매 순위 랭킹 */
	
	//분류 리스트
	public List<Map<String, Object>> retrieveRankingMasterList(
			String pageType,
			String DATE	,
			String RGN_C,
			String TRPL_C
			){
		
		return marketDAO.retrieveRankingMasterList(pageType, DATE, RGN_C, TRPL_C);
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
		
		return marketDAO.retrieveRankingSlaveList(pageType, DATE, PREDATE, CODE, RGN_C, CNT);
	}
	
	
	/** 월별,주별 경쟁사 시장분석 */ 
	
	//점포 리스트
	public List<Map<String, Object>> retrieveCompetitorsBzplcList(
			String pageType,
			String DATE,
			String RGN_C
			){		
		
		return marketDAO.retrieveCompetitorsBzplcList(pageType, DATE, RGN_C);
	}
	
	//경쟁사 리스트
	public List<Map<String, Object>> retrieveCompetitorsMasterList(
			String pageType,
			String DATE,
			String BZPLC_ARR[]
			){		
		
		return marketDAO.retrieveCompetitorsMasterList(pageType, DATE, BZPLC_ARR);
	}

	//경쟁사별 분류 데이터
	public List<Map<String, Object>> retrieveCompetitorsSlaveList(
			String pageType,
			String TRPL_C,
			String BZPLC_ARR[],
			String DATE,
			String PREDATE
			){
		
				
		return marketDAO.retrieveCompetitorsSlaveList(pageType, TRPL_C, BZPLC_ARR, DATE, PREDATE);
	}
	
	//점포별 ABC분석
	public List<Map<String, Object>> retrieveABCList(
			String TRPL_C[],
			List<Map<String, Object>> ds_bzplc,
			String DATE			
			){
		
		String SQL1 = "";
		String SQL2 = "";
		String TOT = "SUM(";
		List<String> BZPLC = new ArrayList<String>();
		
		for(int i=0 ; i < ds_bzplc.size() ; i++){
			String code = (String)ds_bzplc.get(i).get("CODE");
			BZPLC.add(code);
			SQL1 += "SUM(BZPLC"+(i+1)+") AS BZPLC"+(i+1)+",";
			SQL2 += "DECODE(AA.BZPLC, '" + code + "', AA.AMOUNT, 0) AS BZPLC"+(i+1)+",";
			TOT += "BZPLC"+(i+1)+"+";
			if(i==ds_bzplc.size()-1){
				TOT = TOT.substring(0, TOT.length()-1);
				TOT+=")AS BZPLC0";
				SQL1 += TOT;
				SQL2 = SQL2.substring(0,SQL2.length()-1);
			}
		}
		return marketDAO.retrieveABCList(TRPL_C, BZPLC, DATE, SQL1, SQL2);
	}
	
	//나의 카테고리
	public List<Map<String, Object>> selectListMycategory(String TRPL_C){
		
		return marketDAO.selectListMyCategory(TRPL_C);
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
		
				
		return marketDAO.retrieveCompetitorsClsBzplcWrsList(pageType, TRPL_C, BZPLC, DATE, LCLC, MCLC, SCLC, RGN_C);
	}

	// 사용자 정보제공동의
	public List<Map<String, Object>> retrieveConsentTrplList(String bsnDsc, String naTrplC) {
		// 
		try {		

			List<Map<String, Object>> usrConsentList = marketDAO.retrieveConsentTrplList(bsnDsc, naTrplC);
			
			return usrConsentList;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public void deleteStoreGoods(DataSet ds, String tRPL_C, String analysis) {
		// TODO Auto-generated method stub
		
	}

	//관심점포/상품 등록
	public void insertInteTrplList(
			DataSet ds,
			String TRPL_C,
			String analysis
			){
		
		try{
			
			for(int i=0;i<ds.getRowCount();i++){
				String CHECK_BOX = ds.getString(i, "CHECK_BOX");
				if("1".equals(CHECK_BOX)){
					String INTE_TRPL_C = ds.getString(i, "NA_TRPL_C");
					String INTE_TRPL_NM = ds.getString(i, "NA_TRPL_NM");
					marketDAO.insertInteTrplList(TRPL_C, INTE_TRPL_C, INTE_TRPL_NM, analysis);
				}
			}
		}catch(DataAccessException e){
			throw new AppetizerException("msg.van_ds_sc_1850.server.err.insert.sg");			
		}	
	}


	//관심점포/상품 삭제
	public void deleteInteTrplList(
			DataSet ds,
			String TRPL_C,
			String analysis
			){
		
		try{
			
			for(int i=0;i<ds.getRowCount();i++){
				String CHECK_BOX = ds.getString(i, "CHECK_BOX");
				if("1".equals(CHECK_BOX)){				
					String CODE = ds.getString(i, "CODE");
					marketDAO.deleteInteTrplList(TRPL_C, CODE, analysis);
				}
			}
		}catch(DataAccessException e){
			throw new AppetizerException("msg.van_ds_sc_1850.server.err.delete.sg");			
		}	
	}	
	//관심점포/상품 저장 리스트
	public List<Map<String, Object>> retrieveInteTrplList(
			String TRPL_C,
			String analysis
			){
		
		return marketDAO.retrieveInteTrplList(TRPL_C, analysis);
	}


	/*
	 * 관심업체 상품정보
	 */
	public List<Map<String, Object>> retrieveTrplWrsList(String bsnDsc, String naTrplC, String inteTrplC, String searchWrsNm) {
		// 
		try {		

			List<Map<String, Object>> selectList = marketDAO.retrieveTrplWrsList(bsnDsc, naTrplC, inteTrplC, searchWrsNm);
			
			return selectList;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}


	//관심점포/상품 등록
	public void insertInteTrplWrsList(
			DataSet ds,
			String TRPL_C,
			String analysis
			){
		
		try{
			
			for(int i=0;i<ds.getRowCount();i++){
				
				String CHECK_BOX = ds.getString(i, "CHECK_BOX");
				
				if("1".equals(CHECK_BOX)){
					
					String INTE_TRPL_C = ds.getString(i, "INTE_TRPL_C");
					String WRS_C = ds.getString(i, "NA_WRS_C");
					String WRSNM = ds.getString(i, "WRSNM");
					
					marketDAO.insertInteTrplWrsList(TRPL_C, INTE_TRPL_C, WRS_C, WRSNM, analysis);
				}
			}
		}catch(DataAccessException e){
			throw new AppetizerException("msg.van_ds_sc_1850.server.err.insert.sg");			
		}	
	}

	public List<Map<String, Object>> retrieveClsInteWrsList(String bsnDsc, String naTrplC, String lCLC, String mCLC, String sCLC, String dTCF_C) {
		try {		

			List<Map<String, Object>> selectList = marketDAO.retrieveClsInteWrsList(bsnDsc, naTrplC, lCLC, mCLC, sCLC, dTCF_C);
			
			return selectList;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public void deleteClsInteWrsList(DataSet ds, String TRPL_C, String analysis) {
		try{
			
			for(int i=0;i<ds.getRowCount();i++){
				String CHECK_BOX = ds.getString(i, "CHECK_BOX");
				if("1".equals(CHECK_BOX)){
					String INTE_TRPL_C = ds.getString(i, "INTE_TRPL_C");
					String WRS_C = ds.getString(i, "WRS_C");
					marketDAO.deleteClsInteWrsList(TRPL_C, INTE_TRPL_C, WRS_C, analysis);
				}
			}
		}catch(DataAccessException e){
			throw new AppetizerException("msg.van_ds_sc_1850.server.err.delete.sg");			
		}	
	}
	
   // 카테고리별 상품리스트
	public List<Map<String, Object>> retrieveClsWrsList(String TRPL_C, String nA_WRS_LCLC,
			String nA_WRS_MCLC, String nA_WRS_SCLC, String nA_WRS_DTCF_C) {
		try {		

			List<Map<String, Object>> selectList = marketDAO.retrieveClsWrsList(TRPL_C, nA_WRS_LCLC, nA_WRS_MCLC, nA_WRS_SCLC, nA_WRS_DTCF_C);
			
			return selectList;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	//관심점포/상품 등록
	public void insertInteClsWrsList( DataSet ds, String TRPL_C ){
		
		try{
			
			for(int i=0;i<ds.getRowCount();i++){
				
				String CHECK_BOX = ds.getString(i, "CHECK_BOX");
				
				if("1".equals(CHECK_BOX)){
					
					String INTE_TRPL_C = ds.getString(i, "INTE_TRPL_C");
					String WRS_C = ds.getString(i, "NA_WRS_C");
					String WRSNM = ds.getString(i, "WRSNM");
					
					marketDAO.insertInteClsWrsList(TRPL_C, INTE_TRPL_C, WRS_C, WRSNM);
				}
			}
		}catch(DataAccessException e){
			throw new AppetizerException("msg.van_ds_sc_1850.server.err.insert.sg");			
		}	
	}
	
	
	/*
	 * 월별카테고리 판매정보 
	 */
	public List<Map<String, Object>> retrieveCatSalesMon(String srhSlYm, String srhTrplC) {
		try {		

			List<Map<String, Object>> selectList = marketDAO.retrieveCatSalesMon(srhSlYm, srhTrplC);
			
			return selectList;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
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
		
				
		marketDAO.retrieveClsWrsMonList(pageType, TRPL_C, BZPLC, DATE, LCLC, MCLC, SCLC, DTCF_C, handler);
	}

	
	// 주별카테고립판매정보 조회 
	public List<Map<String, Object>> retrieveCatSalesWeek(String srhSlWk, String srhTrplC) {
		try {		

			List<Map<String, Object>> selectList = marketDAO.retrieveCatSalesWeek(srhSlWk, srhTrplC);
			
			return selectList;

		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}


	public void retrieveClsWrsWeekList(
			  String pageType
			, String TRPL_C
			, String BZPLC
			, String sL_WK
			, String LCLC
			, String MCLC
			, String SCLC
			, String DTCF_C
			, ExcelFileMakerResultHandler handler

			){
		
				
		marketDAO.retrieveClsWrsWeekList(pageType, TRPL_C, BZPLC, sL_WK, LCLC, MCLC, SCLC, DTCF_C, handler);
	}

	public List<Map<String, Object>> excelTitle(
			String pageType,
			String DATE,
			String RGN_C,
			String CODE
				){
		
		return marketDAO.excelTitle(pageType, DATE, RGN_C, CODE);
		
	}


}

