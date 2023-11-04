package com.nh.escm.analysis.biz.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

public class IntelligenceDAO extends AbstractDao {
	
	/*
	 * 화면ID : VAN_DS_SC_1700
	 * 화면설명 : 월별 일평균 매출추이 조회
	*/
	public List<Map<String, Object>> monthlyAverage(String[] TRPL_C_ARR){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		return getSqlSession().selectList("IntelligenceDAO.monthlyAverage",map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1710
	 * 화면설명 : 누적 매출추이 조회
	*/
	public List<Map<String, Object>> totalChange(String[] TRPL_C_ARR){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		return getSqlSession().selectList("IntelligenceDAO.totalChanges",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1720
	 * 화면설명 : 점포별 일평균 매출액 TOP10 조회
	*/
	public List<Map<String, Object>> topStoreAverage(String[] TRPL_C_ARR,String MONTHLY){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("ymd", MONTHLY);
		return getSqlSession().selectList("IntelligenceDAO.topStoreAverage",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1730
	 * 화면설명 : 상품별 일평균 매출액 TOP10 조회
	*/
	public List<Map<String, Object>> topSkuAverage(String[] TRPL_C_ARR,String MONTHLY){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("ymd", MONTHLY);
		return getSqlSession().selectList("IntelligenceDAO.topSkuAverage",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1740
	 * 화면설명 : 소분류별 일평균 매출액 TOP10 조회
	*/
	public List<Map<String, Object>> topMonthlyDivision(String[] TRPL_C_ARR,String eDate){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);
		return getSqlSession().selectList("IntelligenceDAO.topMonthlyDivision",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1750
	 * 화면설명 : 상품별 판매순위 TOP10 조회
	*/
	public List<Map<String, Object>> topStore(String[] TRPL_C_ARR,String eDate){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);
		return getSqlSession().selectList("IntelligenceDAO.topStore",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1760
	 * 화면설명 : 사업장별 판매순위 TOP10 조회
	*/
	public List<Map<String, Object>> topsku(String[] TRPL_C_ARR,String eDate){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);	//전월 달
		return getSqlSession().selectList("IntelligenceDAO.topSku",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1770
	 * 화면설명 : 분류별 판매순위 TOP10 조회
	*/
	public List<Map<String, Object>> topDivision(String[] TRPL_C_ARR,String eDate){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);
		return getSqlSession().selectList("IntelligenceDAO.topDivision",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1700
	 * 화면설명 : 월별 일평균 매출추이 조회 (엑셀다운로드)
	 */
	public void downloadExcelMonthlyAverageChange(String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		
		getSqlSession().select("IntelligenceDAO.downloadExcelMonthlyAverageChange",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1710
	 * 화면설명 : 월별 일평균 매출추이 조회 (엑셀다운로드)
	*/
	public void downloadExcelTotalChanges(String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		
		getSqlSession().select("IntelligenceDAO.downloadExcelTotalChanges",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1720
	 * 화면설명 : 사업장별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopStoreAverage(String[] TRPL_C_ARR, String MONTHLY, ExcelFileMakerResultHandler handler) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("ymd", MONTHLY);
		
		getSqlSession().select("IntelligenceDAO.downloadExcelTopStoreAverage",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1730
	 * 화면설명 : 상품별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopSkuAverage(String[] TRPL_C_ARR, String MONTHLY, ExcelFileMakerResultHandler handler) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("ymd", MONTHLY);
		
		getSqlSession().select("IntelligenceDAO.downloadExcelTopSkuAverage",map, handler);
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1740
	 * 화면설명 : 분류별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopMonthlyDivision(String[] TRPL_C_ARR, String eDate, ExcelFileMakerResultHandler handler) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);
		
		getSqlSession().select("IntelligenceDAO.downloadExcelTopMonthlyDivision",map, handler);
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1750
	 * 화면설명 : 상품별 판매순위 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopStore(String[] TRPL_C_ARR,String eDate, ExcelFileMakerResultHandler handler) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);
		
		getSqlSession().select("IntelligenceDAO.downloadExcelTopStore",map, handler);
				
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1760
	 * 화면설명 : 사업장별 판매순위 TOP10 (엑셀다운로드)
	 */
	public void downloadExcelTopsku(String[] TRPL_C_ARR,String eDate, ExcelFileMakerResultHandler handler) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);
		
		getSqlSession().select("IntelligenceDAO.downloadExcelTopsku",map, handler);
				
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1770
	 * 화면설명 : 분류별 판매순위 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopDivision(String[] TRPL_C_ARR,String eDate, ExcelFileMakerResultHandler handler) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("eDate", eDate);

		getSqlSession().select("IntelligenceDAO.downloadExcelTopDivision",map, handler);
				
	}

}
