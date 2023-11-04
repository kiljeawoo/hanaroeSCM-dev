package com.nh.escm.pds.stock.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;












import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.stock.vo.StockVO;

public class StockDAO extends AbstractDao{
	
	
	/*
	 * 화면ID : 공통
	 * 화면설명 : 물류센터코드
	 */
	public List<Map<String,Object>> getBZPLcode(String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C",TRPL_C_ARR);
		return getSqlSession().selectList("stockDAO.getBZPLcode",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0900
	 * 화면설명 : 일자별정보
	*/
	public List<StockVO> retrieveDailyStoreSum(String monthVal,String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthVal",monthVal);
		map.put("TRPL_C",TRPL_C_ARR);
		return getSqlSession().selectList("stockDAO.retrieveDailyStoreSum",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0910
	 * 화면설명 : 기간별정보
	*/
	public List<StockVO> retrievePeriodSum(String monthsta,String monthend,String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("monthend",monthend);
		map.put("TRPL_C",TRPL_C_ARR);
		return getSqlSession().selectList("stockDAO.retrievePeriodSum",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면설명 : 기간별 점포별/상품별 정보 Count
	*/
	public int retrievePeriodStoreSumCount(String monthsta,String cbo_val,String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("cbo_val", cbo_val);
		map.put("TRPL_C", TRPL_C_ARR);
		return getSqlSession().selectOne("stockDAO.retrievePeriodStoreSumCount",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면설명 : 기간별 점포별/상품별 정보 TOTAL
	*/
	public StockVO totalPeriodStoreSum(String monthsta,String cbo_val,String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("cbo_val", cbo_val);
		map.put("TRPL_C", TRPL_C_ARR);
		return getSqlSession().selectOne("stockDAO.totalPeriodStoreSum",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면설명 : 기간별 점포별/상품별 정보 페이지별 조회
	*/
	public List<StockVO> retrievePeriodStoreSum(String monthsta,String cbo_val,String[] TRPL_C_ARR,
			int start,int end){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("cbo_val", cbo_val);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("start", start);
		map.put("end", end);
		return getSqlSession().selectList("stockDAO.retrievePeriodStoreSum",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면설명 : 기간별 점포별/상품별 팝업 정보 페이징 Count
	*/
	public int retrievePeriodStoreSumCount_sub(String monthsta,String cbo_val,String[] TRPL_C_ARR,String centercode,String phd_c){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("cbo_val", cbo_val);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("centercode",centercode);
		map.put("phd_c", phd_c);
		return getSqlSession().selectOne("stockDAO.retrievePeriodStoreSumCount_sub",map);
	}
	
	public StockVO totalPeriodStoreSum_sub(String monthsta,String cbo_val,String[] TRPL_C_ARR,String centercode,String phd_c){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("cbo_val", cbo_val);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("centercode",centercode);
		map.put("phd_c", phd_c);
		return getSqlSession().selectOne("stockDAO.totalPeriodStoreSum_sub",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면설명 : 기간별 점포별/상품별 팝업 정보
	*/
	public List<StockVO> retrievePeriodStoreSum_sub(String monthsta,String cbo_val,String[] TRPL_C_ARR,String centercode,String phd_c,
			int start,int end){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("cbo_val", cbo_val);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("centercode",centercode);
		map.put("phd_c", phd_c);
		map.put("start",start);
		map.put("end",end);
		return getSqlSession().selectList("stockDAO.retrievePeriodStoreSum_sub",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면설명 : 기간별 상품별/점포별 정보 Count
	*/
	public int retrievePeriodSkuSumCount(String monthsta,String monthend,String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("monthend",monthend);
		map.put("TRPL_C", TRPL_C_ARR);
		return getSqlSession().selectOne("stockDAO.retrievePeriodSkuSumCount",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면설명 : 기간별 상품별/사업장별 정보 TOTAL
	 */
	public StockVO totalPeriodSkuSum(String monthsta,String monthend,String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("monthend",monthend);
		map.put("TRPL_C", TRPL_C_ARR);
		return getSqlSession().selectOne("stockDAO.totalPeriodSkuSum",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면설명 : 기간별 상품별/점포별 정보
	*/
	public List<StockVO> retrievePeriodSkuSum(String monthsta,String monthend,String[] TRPL_C_ARR,
			int start,int end){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("monthend",monthend);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("start", start);
		map.put("end", end);
		return getSqlSession().selectList("stockDAO.retrievePeriodSkuSum",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_0931
	 * 화면설명 : 기간별 상품별/점포별 팝업 페이지 count
	*/
	public int retrievePeriodSkuSumCount_sub(String monthsta,String monthend,String[] TRPL_C_ARR,String centercode){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("monthend",monthend);
		map.put("TRPL_C",TRPL_C_ARR);
		map.put("centercode",centercode);
		return getSqlSession().selectOne("stockDAO.retrievePeriodSkuSumCount_sub",map);
	}
	
	public StockVO totalPeriodSkuSum_sub(String monthsta,String monthend,String[] TRPL_C_ARR,String centercode){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("monthend",monthend);
		map.put("TRPL_C",TRPL_C_ARR);
		map.put("centercode",centercode);
		return getSqlSession().selectOne("stockDAO.totalPeriodSkuSum_sub",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0931
	 * 화면설명 : 기간별 상품별/점포별 팝업 정보
	*/
	public List<StockVO> retrievePeriodSkuSum_sub(String monthsta,String monthend,String[] TRPL_C_ARR,String centercode,int start,int end){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("monthsta",monthsta);
		map.put("monthend",monthend);
		map.put("TRPL_C",TRPL_C_ARR);
		map.put("centercode",centercode);
		map.put("start", start);
		map.put("end", end);		
		return getSqlSession().selectList("stockDAO.retrievePeriodSkuSum_sub",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0940
	 * 화면명 : 자료수신 - 일일집계
	 */
	public void downloadExcelStockDaliy(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("srhDtFr", srhByDtFr);
		params.put("srhDtTo", srhByDtTo);		
		params.put("srhTrplC", TRPL_C_ARR);		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelStockDaliy params : " + params);
		}
		getSqlSession().select("stockDAO.downloadExcelStockDaliy", params, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0900
	 * 화면명 : 자료수신 - 일별집계
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelDailyStoreSum(String monthVal,String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("monthVal", monthVal);
		map.put("TRPL_C", TRPL_C_ARR);
		getSqlSession().select("stockDAO.downloadExcelDailyStoreSum",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0910
	 * 화면명 : 자료수신 - 기간별집계
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelPeriodSum(String start_date,String end_date,String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("start_date", start_date);
		map.put("end_date", end_date);
		map.put("TRPL_C", TRPL_C_ARR);
		getSqlSession().select("stockDAO.downloadExcelPeriodSum",map,handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 정보
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelPeriodStoreSum(String start_date,String cbo_val,String searchText,String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler){
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("monthsta", start_date);
		map.put("cbo_val", cbo_val);
		map.put("searchText", searchText);
		map.put("TRPL_C", TRPL_C_ARR);
		getSqlSession().select("stockDAO.downloadExcelPeriodStoreSum",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 디테일 정보
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelPeriodStoreSumDetail(String start_date,String[] TRPL_C_ARR,String centercode,String phd_c, ExcelFileMakerResultHandler handler){
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("monthsta", start_date);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("centercode",centercode);
		map.put("phd_c", phd_c);
		getSqlSession().select("stockDAO.downloadExcelPeriodStoreSumDetail",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면명 : 자료수신 - 기간별 상품별/점포별 정보
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelPeriodSkuSum(String start_date,String end_date,String[] TRPL_C_ARR,ExcelFileMakerResultHandler handler){
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("monthsta", start_date);
		map.put("monthend", end_date);
		map.put("TRPL_C", TRPL_C_ARR);
		getSqlSession().select("stockDAO.downloadExcelPeriodSkuSum",map,handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0931
	 * 화면명 : 자료수신 - 기간별 상품별/점포별 디테일 정보
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelPeriodSkuSumDetail(String start_date,String end_date,String[] TRPL_C_ARR,String centercode,String bzplc,ExcelFileMakerResultHandler handler){
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("monthsta", start_date);
		map.put("monthend", end_date);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("centercode", centercode);
		map.put("BZPLC", bzplc);
		getSqlSession().select("stockDAO.downloadExcelPeriodSkuSumDetail",map,handler);
	}

	/*
	 * 화면ID : VAN_DS_SC_0902
	 * 화면설명 : 물류센터 재고현황 상품별
	 */
	public List<Map<String, Object>> centerStock_WRS(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String ifResult, String atl_yn) {
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("NA_TRPL_C", NA_TRPL_C);
		map.put("PHD_NA_BZPLC", PHD_NA_BZPLC);
		map.put("WRS_P", WRS_P);
		map.put("WRS_C_FM_PI", WRS_C_FM_PI);
		map.put("WRS_C_FM_PO", WRS_C_FM_PO);
		map.put("ifResult", ifResult);
		map.put("atl_yn", atl_yn);
		
		return getSqlSession().selectList("stockDAO.centerStock_WRS_pt",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0902
	 * 화면설명 : 물류센터 재고현황 상품별(인터페이스 유무)
	 */
	public String centerStock_WRS_IFRESULT() {
		return getSqlSession().selectOne("stockDAO.centerStock_WRS_IFRESULT");
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0912
	 * 화면설명 : 물류센터 재고현황 일별
	 */
	public List<Map<String, Object>> centerStock_Daily(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String PHD_STPL_DT) {
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("NA_TRPL_C", NA_TRPL_C);
		map.put("PHD_NA_BZPLC", PHD_NA_BZPLC);
		map.put("WRS_P", WRS_P);
		map.put("WRS_C_FM_PI", WRS_C_FM_PI);
		map.put("WRS_C_FM_PO", WRS_C_FM_PO);
		map.put("PHD_STPL_DT", PHD_STPL_DT);
		return getSqlSession().selectList("stockDAO.centerStock_Daily_Pt",map);
	}

	public void downloadExcelcenterStock_WRS(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String ifResult, String atl_yn, ExcelFileMakerResultHandler handler) {
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("NA_TRPL_C", NA_TRPL_C);
		map.put("PHD_NA_BZPLC", PHD_NA_BZPLC);
		map.put("WRS_P", WRS_P);
		map.put("WRS_C_FM_PI", WRS_C_FM_PI);
		map.put("WRS_C_FM_PO", WRS_C_FM_PO);
		map.put("ifResult", ifResult);
		map.put("atl_yn", atl_yn);
		
		getSqlSession().select("stockDAO.downloadExcelcenterStock_WRS",map,handler);
	}

	public void downloadExcelCenterStock_Daily(String[] NA_TRPL_C,
			String PHD_NA_BZPLC, String WRS_P, String WRS_C_FM_PI,
			String WRS_C_FM_PO, String PHD_STPL_DT, ExcelFileMakerResultHandler handler) {
		HashMap<String,Object > map = new HashMap<String,Object>();
		map.put("NA_TRPL_C", NA_TRPL_C);
		map.put("PHD_NA_BZPLC", PHD_NA_BZPLC);
		map.put("WRS_P", WRS_P);
		map.put("WRS_C_FM_PI", WRS_C_FM_PI);
		map.put("WRS_C_FM_PO", WRS_C_FM_PO);
		map.put("PHD_STPL_DT", PHD_STPL_DT);
		getSqlSession().select("stockDAO.downloadExcelCenterStock_Daily",map,handler);
	}
}
