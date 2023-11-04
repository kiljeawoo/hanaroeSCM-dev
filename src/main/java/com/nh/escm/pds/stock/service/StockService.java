package com.nh.escm.pds.stock.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.stock.dao.StockDAO;
import com.nh.escm.pds.stock.vo.StockVO;

@Service
public class StockService extends AbstractService {
	
	@Autowired
	private StockDAO stockdao;
	
	/*
	 * 화면ID : 공통
	 * 화면설명 : 물류센터코드
	 */
	public List<Map<String,Object>> getBZPLcode(String[] TRPL_C_ARR){
		try {
			return stockdao.getBZPLcode(TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0900
	 * 화면설명 : 일자별정보
	*/
	public List<StockVO> retrieveDailyStoreSum(String monthVal,String[] TRPL_C_ARR){
		try{
			return stockdao.retrieveDailyStoreSum(monthVal,TRPL_C_ARR);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0910
	 * 화면설명 : 기간별정보
	*/
	public List<StockVO> retrievePeriodSum(String monthsta,String monthend,String[] TRPL_C_ARR){
		try{
			return stockdao.retrievePeriodSum(monthsta,monthend,TRPL_C_ARR);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면설명 : 기간별 점포별/상품별 정보 페이징 Count
	*/
	public int retrievePeriodStoreSumCount(String monthsta,String cbo_val,String[] TRPL_C_ARR){
		try {
			int rowCount = stockdao.retrievePeriodStoreSumCount(monthsta,cbo_val,TRPL_C_ARR);
			return rowCount;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면설명 : 기간별 점포별/상품별 정보 TOTAL
	*/
	public StockVO totalPeriodStoreSum(String monthsta,String cbo_val,String[] TRPL_C_ARR){
		try {
			return stockdao.totalPeriodStoreSum(monthsta,cbo_val,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면설명 : 기간별 점포별/상품별 정보
	*/
	public List<StockVO> retrievePeriodStoreSum(String monthsta,String cbo_val,String[] TRPL_C_ARR,
			int start,int end){
		try{
			return stockdao.retrievePeriodStoreSum(monthsta,cbo_val,TRPL_C_ARR,start,end);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면설명 : 기간별 점포별/상품별 팝업 정보 페이징 Count
	*/
	public int retrievePeriodStoreSumCount_sub(String monthsta,String cbo_val,String[] TRPL_C_ARR,String centercode,String phd_c){
		try {
			int rowCount = stockdao.retrievePeriodStoreSumCount_sub(monthsta,cbo_val,TRPL_C_ARR,centercode,phd_c);
			return rowCount;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면설명 : 기간별 점포별/상품별 팝업 정보 TOTAL
	*/
	public StockVO totalPeriodStoreSum_sub(String monthsta,String cbo_val,String[] TRPL_C_ARR,String centercode,String phd_c){
		try {
			return stockdao.totalPeriodStoreSum_sub(monthsta,cbo_val,TRPL_C_ARR,centercode,phd_c);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면설명 : 기간별 점포별/상품별 팝업 정보
	*/
	public List<StockVO> retrievePeriodStoreSum_sub(String monthsta,String cbo_val,String[] TRPL_C_ARR,String centercode,String phd_c,
			int start,int end){
		try{
			return stockdao.retrievePeriodStoreSum_sub(monthsta,cbo_val,TRPL_C_ARR,centercode,phd_c,start,end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면설명 : 기간별 상품별/사업장별 정보 페이징 Count
	*/
	public int retrievePeriodSkuSumCount(String monthsta,String monthend,String[] TRPL_C_ARR){
		try {
			int rowCount = stockdao.retrievePeriodSkuSumCount(monthsta,monthend,TRPL_C_ARR);
			return rowCount;
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면설명 : 기간별 상품별/사업장별 정보 TOTAL
	 */
	public StockVO totalPeriodSkuSum(String monthsta,String monthend,String[] TRPL_C_ARR){
		try {
			return stockdao.totalPeriodSkuSum(monthsta,monthend,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면설명 : 기간별 상품별/사업장별 정보
	*/
	public List<StockVO> retrievePeriodSkuSum(String monthsta,String monthend,String[] TRPL_C_ARR,
			int start,int end){
		try{
			return stockdao.retrievePeriodSkuSum(monthsta,monthend,TRPL_C_ARR,start,end);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0931
	 * 화면설명 : 기간별 상품별/점포별 팝업 페이징 count
	*/
	public int retrievePeriodSkuSumCount_sub(String monthsta,String monthend,String[] TRPL_C_ARR,String centercode){
		try {
			return stockdao.retrievePeriodSkuSumCount_sub(monthsta,monthend,TRPL_C_ARR,centercode);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	public StockVO totalPeriodSkuSum_sub(String monthsta,String monthend,String[] TRPL_C_ARR,String centercode){
		try {
			return stockdao.totalPeriodSkuSum_sub(monthsta,monthend,TRPL_C_ARR,centercode);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0931
	 * 화면설명 : 기간별 상품별/점포별 팝업 정보
	*/
	public List<StockVO> retrievePeriodSkuSum_sub(String monthsta,String monthend,String[] TRPL_C_ARR,String centercode,int start,int end){
		try{
			return stockdao.retrievePeriodSkuSum_sub(monthsta,monthend,TRPL_C_ARR,centercode,start,end);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0940
	 * 화면명 : 자료수신 - 일별집계
	 */
	public void downloadExcelStockDaliy(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {			
			stockdao.downloadExcelStockDaliy(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0900
	 * 화면명 : 자료수신 - 일별집계
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelDailyStoreSum(String monthVal,String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		try {
			stockdao.downloadExcelDailyStoreSum(monthVal,TRPL_C_ARR, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0910
	 * 화면명 : 자료수신 - 기간별집계
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelPeriodSum(String start_date,String end_date,String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		try {
			stockdao.downloadExcelPeriodSum(start_date,end_date,TRPL_C_ARR, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 정보
	 * 화면설명 : 엑셀다운로드
	 */	
	public void downloadExcelPeriodStoreSum(String start_date,String cbo_val,String searchText,String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		try {
			stockdao.downloadExcelPeriodStoreSum(start_date,cbo_val,searchText,TRPL_C_ARR, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 디테일 정보
	 * 화면설명 : 엑셀다운로드
	 */	
	public void downloadExcelPeriodStoreSumDetail(String start_date,String[] TRPL_C_ARR,String centercode,String phd_c, ExcelFileMakerResultHandler handler){
		try {
			stockdao.downloadExcelPeriodStoreSumDetail(start_date,TRPL_C_ARR,centercode,phd_c,handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 정보
	 * 화면설명 : 엑셀다운로드
	 */	
	public void downloadExcelPeriodSkuSum(String start_date,String end_date,String[] TRPL_C_ARR,ExcelFileMakerResultHandler handler){
		try {
			stockdao.downloadExcelPeriodSkuSum(start_date,end_date,TRPL_C_ARR,handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0931
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 디테일 정보
	 * 화면설명 : 엑셀다운로드
	 */	
	public void downloadExcelPeriodSkuSumDetail(String start_date,String end_date,String[] TRPL_C_ARR,String centercode,String bzplc,ExcelFileMakerResultHandler handler){
		try {
			stockdao.downloadExcelPeriodSkuSumDetail(start_date,end_date,TRPL_C_ARR,centercode,bzplc,handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0902
	 * 화면설명 : 물류센터 재고현황 상품별
	 */
	public List<Map<String, Object>> centerStock_WRS(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String ifResult, String atl_yn) {
		try {
			return stockdao.centerStock_WRS(NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, ifResult, atl_yn);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0902
	 * 화면설명 : 물류센터 재고현황 상품별(인터페이스 유무)
	 */
	public String centerStock_WRS_IFRESULT() {
		try {
			return stockdao.centerStock_WRS_IFRESULT();
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0912
	 * 화면설명 : 물류센터 재고현황 일별
	 */
	public List<Map<String, Object>> centerStock_Daily(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String PHD_STPL_DT) {
		try {
			return stockdao.centerStock_Daily(NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, PHD_STPL_DT);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelcenterStock_WRS(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String ifResult, String atl_yn, ExcelFileMakerResultHandler handler) {
		try {
			stockdao.downloadExcelcenterStock_WRS(NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, ifResult, atl_yn, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelCenterStock_Daily(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String PHD_STPL_DT, ExcelFileMakerResultHandler handler) {
		try {
			stockdao.downloadExcelCenterStock_Daily(NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, PHD_STPL_DT, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
}
