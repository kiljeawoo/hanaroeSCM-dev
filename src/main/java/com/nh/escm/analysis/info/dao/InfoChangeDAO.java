package com.nh.escm.analysis.info.dao;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class InfoChangeDAO extends AbstractDao {	
	
	//관심점포 리스트
	public List<Map<String, Object>> retrieveStoreList(
			String TRPL_C
			,String RGN_C
			,List<String> saveDsList
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		if(StringUtils.isNotEmpty(RGN_C)) paramMap.put("RGN_C", RGN_C.substring(0,2));
		//paramMap.put("saveDsList", saveDsList);
		paramMap.put("saveDsList", null);
		return getSqlSession().selectList("InfoChangeDAO.retrieveStoreList", paramMap);
	}
	
	//관심상폼 리스트
	public List<Map<String, Object>> retrieveGoodsList(
			String TRPL_C
			,List<String> saveDsList
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		//paramMap.put("saveDsList", saveDsList);
		paramMap.put("saveDsList", null);
		
		return getSqlSession().selectList("InfoChangeDAO.retrieveGoodsList", paramMap);
	}
	
	//관심점포/상품 저장 리스트
	public List<Map<String, Object>> retrieveSaveStoreGoodsList(
			String TRPL_C,
			String analysis
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		return getSqlSession().selectList("InfoChangeDAO.retrieveSaveStoreGoodsList", paramMap);
	}
	
	//관심점포/상품 등록
	public void insertStoreGoods(
			String TRPL_C,
			String CODE,
			String NAME,
			String analysis
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("CODE", CODE);
		paramMap.put("NAME", NAME);
		paramMap.put("analysis", analysis);
		getSqlSession().insert("InfoChangeDAO.insertStoreGoods", paramMap);
	}
	
	//관심점포/상품 삭제
	public void deleteStoreGoods(
			String TRPL_C,
			String CODE,
			String analysis
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("CODE", CODE);
		paramMap.put("analysis", analysis);
		getSqlSession().delete("InfoChangeDAO.deleteStoreGoods", paramMap);
	}
	
	//자사 월별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveSalesMonthlyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작 년월
			,String eDate	//종료 년월
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		return getSqlSession().selectList("InfoChangeDAO.retrieveSalesMonthlyList", paramMap);
	}
	
	//자사 주별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveSalesWeeklyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sWeek	//시작 주차
			,String eWeek	//종료 주차
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sWeek", sWeek);
		paramMap.put("eWeek", eWeek);
		return getSqlSession().selectList("InfoChangeDAO.retrieveSalesWeeklyList", paramMap);
	}
	
	//최근 N주차 리스트
	public List<Map<String, Object>> retrieveWeekList(
			String sDate //저번주 월요일
			,String eDate //저번주 일요일
			,int weekCount //최근 몇주
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		paramMap.put("weekCount", weekCount);		
		return getSqlSession().selectList("InfoChangeDAO.retrieveWeekList", paramMap);
	}
	
	//저번 주차		
	public String retrievePreWeek(String SQWW){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("SQWW", SQWW);
		return getSqlSession().selectOne("InfoChangeDAO.retrievePreWeek", paramMap);
	}
	
	//자사 일별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveSalesDailyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작일
			,String eDate	//종료일
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		return getSqlSession().selectList("InfoChangeDAO.retrieveSalesDailyList", paramMap);
	}
	
	//자사 월별 [점포,상품] 재고 추이
	public List<Map<String, Object>> retrieveStockMonthlyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작 년월
			,String eDate	//종료 년월
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		return getSqlSession().selectList("InfoChangeDAO.retrieveStockMonthlyList", paramMap);
	}
	
	//자사 월별 [점포,상품] 재고 추이
	public List<Map<String, Object>> retrieveStockDailyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작 년월
			,String eDate	//종료 년월
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		return getSqlSession().selectList("InfoChangeDAO.retrieveStockDailyList", paramMap);
	}
	
	//정보분석 테이블 최근 작업일
	public String retrieveGetUpdateDt(
			String table
			){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("table", table);
		return getSqlSession().selectOne("InfoChangeDAO.retrieveGetUpdateDt", paramMap);
	}
	
	//관심 점포,상품 카운트
	public boolean retrieveSaveStoreGoodsCount(
			String analysis,
			String TRPL_C){
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("analysis", analysis);
		paramMap.put("TRPL_C", TRPL_C);
		return (Integer)getSqlSession().selectOne("InfoChangeDAO.retrieveSaveStoreGoodsCount", paramMap) > 0 ? true : false;
	}
	
	public void downloadExcelSalesMonthlyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		
		getSqlSession().select("InfoChangeDAO.downloadExcelSalesMonthlyList", paramMap, handler);
	}
	
	public void downloadExcelSalesWeeklyList(String TRPL_C, String analysis, String sWeek, String eWeek, ExcelFileMakerResultHandler handler) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sWeek", sWeek);
		paramMap.put("eWeek", eWeek);
		
		getSqlSession().select("InfoChangeDAO.downloadExcelSalesWeeklyList", paramMap, handler);		
	}

	public void downloadExcelSalesDailyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		
		getSqlSession().select("InfoChangeDAO.downloadExcelSalesDailyList", paramMap, handler);
	}

	public void downloadExcelStockMonthlyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		
		getSqlSession().select("InfoChangeDAO.downloadExcelStockMonthlyList", paramMap, handler);		
	}

	public void downloadExcelStockDailyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("TRPL_C", TRPL_C);
		paramMap.put("analysis", analysis);
		paramMap.put("sDate", sDate);
		paramMap.put("eDate", eDate);
		
		getSqlSession().select("InfoChangeDAO.downloadExcelStockDailyList", paramMap, handler);	
	}

}
