package com.nh.escm.analysis.info.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.analysis.info.dao.InfoChangeDAO;


@Service
public class InfoChangeService extends AbstractService{
	
	@Autowired
	private InfoChangeDAO infoChangeDAO;
	
	//관심점포 리스트
	public List<Map<String, Object>> retrieveStoreList(
			String TRPL_C //거래처코드
			,String RGN_C
			,List<String> saveDsList
			){
		
		return infoChangeDAO.retrieveStoreList(TRPL_C, RGN_C, saveDsList);
	}
	
	//관심상폼 리스트
	public List<Map<String, Object>> retrieveGoodsList(
			String TRPL_C //거래처코드
			,List<String> saveDsList
			){
		
		return infoChangeDAO.retrieveGoodsList(TRPL_C, saveDsList);
	}
	
	//관심점포/상품 저장 리스트
	public List<Map<String, Object>> retrieveSaveStoreGoodsList(
			String TRPL_C,
			String analysis
			){
		
		return infoChangeDAO.retrieveSaveStoreGoodsList(TRPL_C, analysis);
	}	
	
	
	//관심점포/상품 등록
	public void insertStoreGoods(
			DataSet ds,
			String TRPL_C,
			String analysis
			){
		
		try{
			
			for(int i=0;i<ds.getRowCount();i++){
				String CHECK_BOX = ds.getString(i, "CHECK_BOX");
				if("1".equals(CHECK_BOX)){
					String CODE = ds.getString(i, "CODE");
					String NAME = ds.getString(i, "NAME");
					infoChangeDAO.insertStoreGoods(TRPL_C, CODE, NAME, analysis);
				}
			}
		}catch(DataAccessException e){
			throw new AppetizerException("msg.van_ds_sc_1850.server.err.insert.sg");			
		}	
	}
	
	//관심점포/상품 삭제
	public void deleteStoreGoods(
			DataSet ds,
			String TRPL_C,
			String analysis
			){
		
		try{
			
			for(int i=0;i<ds.getRowCount();i++){
				String CHECK_BOX = ds.getString(i, "CHECK_BOX");
				if("1".equals(CHECK_BOX)){				
					String CODE = ds.getString(i, "CODE");
					infoChangeDAO.deleteStoreGoods(TRPL_C, CODE, analysis);
				}
			}
		}catch(DataAccessException e){
			throw new AppetizerException("msg.van_ds_sc_1850.server.err.delete.sg");			
		}	
	}	
	
	//자사 월별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveSalesMonthlyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작 년월
			,String eDate	//종료 년월
			){
		
		return infoChangeDAO.retrieveSalesMonthlyList(TRPL_C, analysis, sDate, eDate);
	}
	
	//자사 주별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveSalesWeeklyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sWeek	//시작 주차
			,String eWeek	//종료 주차
			){
		return infoChangeDAO.retrieveSalesWeeklyList(TRPL_C, analysis, sWeek, eWeek);
	}
	
	//최근 N주차 리스트
	public List<Map<String, Object>> retrieveWeekList(
			String sDate //저번주 월요일
			,String eDate //저번주 일요일
			,int weekCount //최근 몇주
			){
				
		return infoChangeDAO.retrieveWeekList(sDate, eDate, weekCount);
	}
	
	//저번 주차		
	public String retrievePreWeek(String SQWW){
		
		return infoChangeDAO.retrievePreWeek(SQWW);
	}
	
	//자사 일별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveSalesDailyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작일
			,String eDate	//종료일
			){
		
		return infoChangeDAO.retrieveSalesDailyList(TRPL_C, analysis, sDate, eDate);
	}
	
	//자사 월별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveStockMonthlyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작 년월
			,String eDate	//종료 년월
			){
		
		return infoChangeDAO.retrieveStockMonthlyList(TRPL_C, analysis, sDate, eDate);
	}
	
	//자사 일별 [점포,상품] 매출 추이
	public List<Map<String, Object>> retrieveStockDailyList(
			String TRPL_C 	//거래처코드
			,String analysis //구분코드 
			,String sDate	//시작 년월
			,String eDate	//종료 년월
			){
		
		return infoChangeDAO.retrieveStockDailyList(TRPL_C, analysis, sDate, eDate);
	}
	
	//정보분석 테이블 최근 작업일
	public String retrieveGetUpdateDt(
			String table
			){
		
		return infoChangeDAO.retrieveGetUpdateDt(table);
	}
	
	//관심 점포,상품 카운트
	public boolean retrieveSaveStoreGoodsCount(
			String analysis,
			String TRPL_C){
		
		return infoChangeDAO.retrieveSaveStoreGoodsCount(analysis,TRPL_C);
	}

	public void downloadExcelSalesMonthlyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		infoChangeDAO.downloadExcelSalesMonthlyList(TRPL_C, analysis, sDate, eDate, handler);
	}
	
	public void downloadExcelSalesWeeklyList(String TRPL_C, String analysis, String sWeek, String eWeek, ExcelFileMakerResultHandler handler) {
		infoChangeDAO.downloadExcelSalesWeeklyList(TRPL_C, analysis, sWeek, eWeek, handler);
	}

	public void downloadExcelSalesDailyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		infoChangeDAO.downloadExcelSalesDailyList(TRPL_C, analysis, sDate, eDate, handler);
	}

	public void downloadExcelStockMonthlyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		infoChangeDAO.downloadExcelStockMonthlyList(TRPL_C, analysis, sDate, eDate, handler);
		
	}

	public void downloadExcelStockDailyList(String TRPL_C, String analysis, String sDate, String eDate, ExcelFileMakerResultHandler handler) {
		infoChangeDAO.downloadExcelStockDailyList(TRPL_C, analysis, sDate, eDate, handler);
	}
}
