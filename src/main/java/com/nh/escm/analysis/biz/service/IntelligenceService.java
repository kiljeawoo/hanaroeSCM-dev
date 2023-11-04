package com.nh.escm.analysis.biz.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.analysis.biz.dao.IntelligenceDAO;


@Service
public class IntelligenceService {
	
	@Autowired
	private IntelligenceDAO intelldao;
	
	/*
	 * 화면ID : VAN_DS_SC_1700
	 * 화면설명 : 월별 일평균 매출추이 조회
	*/
	public List<Map<String, Object>> monthlyAverage(String[] TRPL_C_ARR){
		try{
			return intelldao.monthlyAverage(TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1710
	 * 화면설명 : 누적 매출추이 조회
	*/
	public List<Map<String,Object>> totalChanges(String[] TRPL_C_ARR){
		try{
			return intelldao.totalChange(TRPL_C_ARR);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1720
	 * 화면설명 : 점포별 일평균 매출액 TOP10 조회
	*/
	public List<Map<String,Object>> topStoreAverage(String[] TRPL_C_ARR,String MONTHLY){
		try{
			return intelldao.topStoreAverage(TRPL_C_ARR,MONTHLY);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1730
	 * 화면설명 : 상품별 일평균 매출액 TOP10 조회
	*/
	public List<Map<String,Object>> topSkuAverage(String[] TRPL_C_ARR,String MONTHLY){
		try{
			return intelldao.topSkuAverage(TRPL_C_ARR,MONTHLY);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1740
	 * 화면설명 : 소분류별 일평균 매출액 TOP10 조회
	*/
	public List<Map<String,Object>> topMonthlyDivision(String[] TRPL_C_ARR,String eDate){
		try{
			return intelldao.topMonthlyDivision(TRPL_C_ARR,eDate);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1750
	 * 화면설명 : 상품별 판매순위 TOP10 조회
	*/
	public List<Map<String,Object>> topStore(String[] TRPL_C_ARR,String eDate){
		try{
			return intelldao.topStore(TRPL_C_ARR,eDate);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1760
	 * 화면설명 : 사업장별 판매순위 TOP10 조회
	*/
	public List<Map<String,Object>> topsku(String[] TRPL_C_ARR,String eDate){
		try{
			return intelldao.topsku(TRPL_C_ARR,eDate);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1770
	 * 화면설명 : 분류별 판매순위 TOP10 조회
	*/
	public List<Map<String,Object>> topDivision(String[] TRPL_C_ARR,String eDate){
		try{
			return intelldao.topDivision(TRPL_C_ARR,eDate);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1700
	 * 화면설명 : 월별 일평균 매출추이 조회 (엑셀다운로드)
	 */
	public void downloadExcelMonthlyAverageChange(String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			intelldao.downloadExcelMonthlyAverageChange(TRPL_C_ARR, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1710
	 * 화면설명 : 월별 일평균 매출추이 조회 (엑셀다운로드)
	*/
	public void downloadExcelTotalChanges(String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		try{
			intelldao.downloadExcelTotalChanges(TRPL_C_ARR, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1720
	 * 화면설명 : 사업장별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopStoreAverage(String[] TRPL_C_ARR, String MONTHLY, ExcelFileMakerResultHandler handler) {
		try{
			intelldao.downloadExcelTopStoreAverage(TRPL_C_ARR, MONTHLY, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1730
	 * 화면설명 : 상품별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopSkuAverage(String[] TRPL_C_ARR, String MONTHLY, ExcelFileMakerResultHandler handler) {
		try{
			intelldao.downloadExcelTopSkuAverage(TRPL_C_ARR, MONTHLY, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}// TODO Auto-generated method stub
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1740
	 * 화면설명 : 분류별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopMonthlyDivision(String[] TRPL_C_ARR,String eDate, ExcelFileMakerResultHandler handler) {
		try{
			intelldao.downloadExcelTopMonthlyDivision(TRPL_C_ARR, eDate, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}// TODO Auto-generated method stub
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1750
	 * 화면설명 : 상품별 판매순위 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopStore(String[] TRPL_C_ARR,String eDate, ExcelFileMakerResultHandler handler) {
		try{
			intelldao.downloadExcelTopStore(TRPL_C_ARR,eDate,handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1760
	 * 화면설명 : 사업장별 판매순위 TOP10 (엑셀다운로드)
	 */
	public void downloadExcelTopsku(String[] TRPL_C_ARR, String eDate, ExcelFileMakerResultHandler handler) {
		try{
			intelldao.downloadExcelTopsku(TRPL_C_ARR,eDate,handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1770
	 * 화면설명 : 분류별 판매순위 TOP10 조회 (엑셀다운로드)
	 */
	public void downloadExcelTopDivision(String[] TRPL_C_ARR, String eDate, ExcelFileMakerResultHandler handler) {
		try{
			intelldao.downloadExcelTopDivision(TRPL_C_ARR,eDate,handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}	
}
