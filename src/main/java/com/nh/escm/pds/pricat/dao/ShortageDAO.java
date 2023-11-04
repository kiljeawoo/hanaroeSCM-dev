package com.nh.escm.pds.pricat.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pricat.vo.ProductNewGoodVO;

public class ShortageDAO extends AbstractDao{
	
	/*
	 * 화면ID : VAN_DS_SC_1570
	 * 화면설명 : 물류센터결품내역 조회
	 */
	public List<Map<String,Object>> getShortageOrder(String NA_BZPLC,String APL_DT,String[] TRPL_C, 
			String WRS_GUBUN,  String WRS_SEARCH, String ODR_SLPNO){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC", NA_BZPLC);
		map.put("APL_DT", APL_DT);
		map.put("TRPL_C", TRPL_C);
		map.put("WRS_GUBUN", WRS_GUBUN);
		map.put("WRS_SEARCH", WRS_SEARCH);
		map.put("ODR_SLPNO", ODR_SLPNO);
		return getSqlSession().selectList("shortage.getShortageOrder",map);
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_1570
	 * 화면설명 : 물류센터결품내역 등록
	 */
	public int insertShortageOrder(ProductNewGoodVO vo){
		return getSqlSession().insert("shortage.insertShortageOrder",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1570
	 * 화면설명 : 물류센터결품내역 등록(수정)
	 */
	public int updateShortageOrder(ProductNewGoodVO vo){
		return getSqlSession().update("shortage.updateShortageOrder",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1571
	 * 화면설명 : 결품등록내역 조회
	 */
	public List<Map<String,Object>> getShortageOrderPopup(String TRPL_C,String apl_date,String from_date,String to_date,String odr_slpno,String rvopl_trpl_c,String odrpl_trpl_c){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C);
		map.put("apl_date", apl_date);
		map.put("from_date", from_date);
		map.put("to_date", to_date);
		map.put("odr_slpno", odr_slpno);
		map.put("rvopl_trpl_c", rvopl_trpl_c);
		map.put("odrpl_trpl_c", odrpl_trpl_c);
		return getSqlSession().selectList("shortage.getShortageOrderPopup",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1572
	 * 화면설명 : 물류상품 조회
	 */
	public List<Map<String,Object>> getWRSInfoForShortage(String TRPL_C,String bzplc,String cbo_trt,String searchText){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C);
		map.put("BZPLC", bzplc);
		map.put("cbo_trt", cbo_trt);
		map.put("searchText", searchText);
		return getSqlSession().selectList("shortage.getWRSInfoForShortage",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1573
	 * 화면설명 : 발주번호 상품코드 조회
	 */
	public List<Map<String,Object>> getWRSCodeForShortageOrder(
			String[] TRPL_C_ARR,String rqr_dt_from,String rqr_dt_to,String odr_slpno,
			String odr_trpl_c,String rvopl_trpl_c,String wrs_c, String isall, String MB_ID){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("rqr_dt_from", rqr_dt_from);
		map.put("rqr_dt_to", rqr_dt_to);
		map.put("odr_slpno", odr_slpno);
		map.put("odr_trpl_c", odr_trpl_c);
		map.put("rvopl_trpl_c", rvopl_trpl_c);
		map.put("wrs_c", wrs_c);
		map.put("MB_ID", MB_ID);
		map.put("isall", isall);
		return getSqlSession().selectList("shortage.getWRSCodeForShortageOrder",map);
	}
	
	public List<Map<String,Object>> getWRSforShortageList(
			String SPYPL_NA_TRPL_C,String ODR_SLPNO,  String NA_BZPLC,String ODR_DT,String MB_ID){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		map.put("ODR_SLPNO", ODR_SLPNO);
		map.put("NA_BZPLC", NA_BZPLC);
		map.put("ODR_DT", ODR_DT);
		map.put("MB_ID", MB_ID);
		return getSqlSession().selectList("shortage.getWRSforShortageList",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1580
	 * 화면설명: 물류센터결품내역 조회
	 */
	public List<Map<String,Object>> getShortageOrderMaseter(String[] TRPL_C_ARR,String wrs_gubun,String searchText,String cal_apl_from,String cal_apl_to,String cbo_bzplc){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C",TRPL_C_ARR);
		map.put("wrs_gubun",wrs_gubun);
		map.put("searchText",searchText);
		map.put("apl_from",cal_apl_from);
		map.put("apl_to",cal_apl_to);
		map.put("cbo_bzplc",cbo_bzplc);
		return getSqlSession().selectList("shortage.getShortageOrderMaseter",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1580
	 * 화면설명: 물류센터결품내역 디테일 조회
	 */
	public List<Map<String,Object>> getShortageOrderDetail(String NA_BZPLC,String NA_SPYPL_C,String APL_DT, 
			String NA_WRS_C, String ODR_DT, String ODR_SLPNO, String ODR_DSQNO){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC",NA_BZPLC);
		map.put("NA_SPYPL_C",NA_SPYPL_C);
		map.put("APL_DT",APL_DT);
		map.put("NA_WRS_C",NA_WRS_C);
		map.put("ODR_DT",ODR_DT);
		map.put("ODR_SLPNO",ODR_SLPNO);
		map.put("ODR_DSQNO",ODR_DSQNO);
		return getSqlSession().selectList("shortage.getShortageOrderDetail",map);
	}
	
	public void getShortagedOrdersFile(String ODRPL_NA_TRPL_C, String ODR_DT, String[] TRPL_C, ExcelFileMakerResultHandler handler){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ODRPL_NA_TRPL_C",ODRPL_NA_TRPL_C);
		map.put("ODR_DT",ODR_DT);
		map.put("TRPL_C",TRPL_C);

		getSqlSession().select("shortage.getShortagedOrdersFile",map,handler);
	}


	public void downloadExcelShortageOrderMaster(String[] TRPL_C_ARR,String wrs_gubun,String searchText,String cal_apl_from,String cal_apl_to,String cbo_bzplc,ExcelFileMakerResultHandler handler){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C",TRPL_C_ARR);
		map.put("wrs_gubun",wrs_gubun);
		map.put("searchText",searchText);
		map.put("apl_from",cal_apl_from);
		map.put("apl_to",cal_apl_to);
		map.put("cbo_bzplc",cbo_bzplc);
		getSqlSession().select("shortage.downloadExcelShortageOrderMaster",map,handler);
	}


	public void downloadExcelShortageOrderDetail(String NA_BZPLC,String NA_SPYPL_C,String APL_DT, 
			String NA_WRS_C, String ODR_DT, String ODR_SLPNO, String ODR_DSQNO, ExcelFileMakerResultHandler handler){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC",NA_BZPLC);
		map.put("NA_SPYPL_C",NA_SPYPL_C);
		map.put("APL_DT",APL_DT);
		map.put("NA_WRS_C",NA_WRS_C);
		map.put("ODR_DT",ODR_DT);
		map.put("ODR_SLPNO",ODR_SLPNO);
		map.put("ODR_DSQNO",ODR_DSQNO);
		getSqlSession().select("shortage.downloadExcelShortageOrderDetail",map, handler);
	}
}
