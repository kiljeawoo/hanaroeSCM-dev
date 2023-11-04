package com.nh.escm.pds.pricat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pds.pricat.dao.ShortageDAO;
import com.nh.escm.pds.pricat.vo.ProductNewGoodVO;

public class ShortageService {
	
	@Autowired
	private ShortageDAO shortageDAO;
	
	
	/*
	 * 화면ID : VAN_DS_SC_1570
	 * 화면설명 : 물류센터결품내역 조회
	 */
	public List<Map<String,Object>> getShortageOrder(String NA_BZPLC,String APL_DT,String[] TRPL_C, 
			String WRS_GUBUN,  String WRS_SEARCH, String ODR_SLPNO){
		try {
			return shortageDAO.getShortageOrder(NA_BZPLC, APL_DT, TRPL_C, WRS_GUBUN, WRS_SEARCH, ODR_SLPNO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1570
	 * 화면설명 : 물류센터결품내역 등록
	 */
	public void insertShortageOrder(DataSet dsMain,List<ProductNewGoodVO> mainlist, String MBID, String GLN){
		
		if(mainlist != null && mainlist.size() > 0) {
			for(int i=0;i<mainlist.size();i++){
				int rowType = dsMain.getRowType(i);
				if(rowType == DataSet.ROW_TYPE_INSERTED || "I".equals(mainlist.get(i).getWORK_DS()) ){
					
					mainlist.get(i).setWORK_DS("I");
					mainlist.get(i).setWUSRID(MBID);
					mainlist.get(i).setFSRGMN_ENO(MBID);
					mainlist.get(i).setLS_CMENO(MBID);
					mainlist.get(i).setWNA_BZPLC(GLN);

					
					shortageDAO.insertShortageOrder(mainlist.get(i));
				}else if(rowType == DataSet.ROW_TYPE_UPDATED){
					mainlist.get(i).setWUSRID(MBID);
					mainlist.get(i).setFSRGMN_ENO(MBID);
					mainlist.get(i).setLS_CMENO(MBID);
					mainlist.get(i).setWNA_BZPLC(GLN);
					
					if(mainlist.get(i).getDEL_YN().equals("1")) {
						mainlist.get(i).setWORK_DS("D");
					} else {
						mainlist.get(i).setWORK_DS("U");
					}
					shortageDAO.updateShortageOrder(mainlist.get(i));
				}
			}			
		}

	}
	
	/*
	 * 화면ID : VAN_DS_SC_1571
	 * 화면설명 : 결품등록내역 조회
	 */
	public List<Map<String,Object>> getShortageOrderPopup(String TRPL_C,String apl_date,String from_date,String to_date,String odr_slpno,String rvopl_trpl_c,String odrpl_trpl_c){
		try {
			return shortageDAO.getShortageOrderPopup(TRPL_C,apl_date,from_date,to_date,odr_slpno,rvopl_trpl_c,odrpl_trpl_c);
		} catch (AppetizerException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1572
	 * 화면설명 : 물류상품 조회
	 */
	public List<Map<String,Object>> getWRSInfoForShortage(String TRPL_C,String bzplc,String cbo_trt,String searchText){
		try {
			return shortageDAO.getWRSInfoForShortage(TRPL_C,bzplc,cbo_trt,searchText);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1573
	 * 화면설명 : 발주번호 상품코드 조회
	 */
	public List<Map<String,Object>> getWRSCodeForShortageOrder(
			String[] TRPL_C_ARR,String rqr_dt_from,String rqr_dt_to,
			String odr_slpno,String odr_trpl_c,
			String rvopl_trpl_c,String wrs_c, String isall, String MBID){
		return shortageDAO.getWRSCodeForShortageOrder(TRPL_C_ARR,rqr_dt_from,rqr_dt_to,odr_slpno,odr_trpl_c,rvopl_trpl_c,wrs_c, isall, MBID);
	}
	
	
	public List<Map<String,Object>> getWRSforShortageList(String SPYPL_NA_TRPL_C,String ODR_SLPNO,  String NA_BZPLC,String ODR_DT, String MBID){
		return shortageDAO.getWRSforShortageList(SPYPL_NA_TRPL_C, ODR_SLPNO, NA_BZPLC, ODR_DT, MBID);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1580
	 * 화면설명 : 물류센터결품내역 조회
	 */
	public List<Map<String,Object>> getShortageOrderMaseter(String[] TRPL_C_ARR,String wrs_gubun,String searchText,String cal_apl_from,String cal_apl_to,String cbo_bzplc){
		return shortageDAO.getShortageOrderMaseter(TRPL_C_ARR,wrs_gubun,searchText,cal_apl_from,cal_apl_to,cbo_bzplc);

	}
	
	/*
	 * 화면ID : VAN_DS_SC_1580
	 * 화면설명 : 물류센터결품내역 디테일 조회
	 */
	public List<Map<String,Object>> getShortageOrderDetail(
			String NA_BZPLC,String NA_SPYPL_C,String APL_DT, 
			String NA_WRS_C, String ODR_DT, String ODR_SLPNO, String ODR_DSQNO){
		return shortageDAO.getShortageOrderDetail(NA_BZPLC, NA_SPYPL_C, APL_DT, NA_WRS_C, ODR_DT, ODR_SLPNO, ODR_DSQNO);
	}

	
	public void getShortagedOrdersFile(
			String ODRPL_NA_TRPL_C,String ODR_DT,String[] TRPL_C,ExcelFileMakerResultHandler handler){
		shortageDAO.getShortagedOrdersFile(ODRPL_NA_TRPL_C, ODR_DT, TRPL_C, handler);
	}
	
	public int insertShortageOrder(ProductNewGoodVO vo){
		return shortageDAO.insertShortageOrder(vo);
	}

	public void downloadExcelShortageOrderMaster(String[] TRPL_C_ARR,String wrs_gubun,String searchText,String cal_apl_from,String cal_apl_to,String cbo_bzplc, ExcelFileMakerResultHandler handler){
		shortageDAO.downloadExcelShortageOrderMaster(TRPL_C_ARR,wrs_gubun,searchText,cal_apl_from,cal_apl_to,cbo_bzplc,handler);

	}

	public void downloadExcelShortageOrderDetail(
			String NA_BZPLC,String NA_SPYPL_C,String APL_DT, 
			String NA_WRS_C, String ODR_DT, String ODR_SLPNO, String ODR_DSQNO, ExcelFileMakerResultHandler handler){
		shortageDAO.downloadExcelShortageOrderDetail(NA_BZPLC, NA_SPYPL_C, APL_DT, NA_WRS_C, ODR_DT, ODR_SLPNO, ODR_DSQNO, handler);
	}
}
