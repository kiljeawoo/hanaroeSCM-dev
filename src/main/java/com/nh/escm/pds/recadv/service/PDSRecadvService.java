package com.nh.escm.pds.recadv.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.recadv.dao.PDSRecadvDAO;
import com.nh.escm.pds.recadv.vo.PDSRecadvDailyStoreSumCSVVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvDailyStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvFeeAmn;
import com.nh.escm.pds.recadv.vo.PDSRecadvNPeriodStoreSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvNPeriodStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSkuSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSkuSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumCSVVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSumVO;
import com.nh.escm.pds.recadv.vo.TrplList;
import com.nh.escm.scm.order.vo.OrderOrdersDetailVO;
import com.nh.escm.scm.order.vo.OrderOrdersSrhConditonVO;
import com.nh.escm.scm.reserve.vo.ReserveCenterVO;
/**
 * 납품정보
 * @author swha
 *
 */
@Service
public class PDSRecadvService extends AbstractService{
	
	@Autowired
	private PDSRecadvDAO recadvDao;
	
	/*
	 * 화면ID : VAN_DS_SC1000
	 * 화면명 :  일자별 정보
	 */
	public List<PDSRecadvDailyStoreSumVO> retrieveDailyStoreSum(String srhByDt, String[] TRPL_C_ARR) {
		try {
			List<PDSRecadvDailyStoreSumVO> list = recadvDao.retrieveDailyStoreSum(srhByDt, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC1010
	 * 화면명 :  기간별 조회
	 */
	public List<PDSRecadvPeriodSumVO> retrievePeriodSum(String byDtFr, String byDtTo, String[] TRPL_C_ARR) {
		try {
			List<PDSRecadvPeriodSumVO> list = recadvDao.retrievePeriodSum(byDtFr, byDtTo, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1020
	 * 화면명 :  기간별 점포별/상품별 정보조회
	 */
	public List<PDSRecadvPeriodStoreSumVO> retrievePeriodStoreSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int limit
			,String searchType
			,String searchStr
			) {
		try {
			List<PDSRecadvPeriodStoreSumVO> list = recadvDao.retrievePeriodStoreSum(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, limit, searchType, searchStr);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	//합계
	public Map<String,Object> retrievePeriodStoreSumTot(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[] 
			,String searchType
			,String searchStr
			) {
		
		return recadvDao.retrievePeriodStoreSumTot(srhByDtFr, srhByDtTo, TRPL_C_ARR, searchType, searchStr);		
	}
	
	/*
	 * 화면ID : VAN_DS_SC1020
	 * 화면명 :  기간별 점포별/상품별 정보조회 total count
	 */
	public int getPeriodStoreSumCount(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[]
			,String searchType
			,String searchStr
			){
		try {
			return  recadvDao.getPeriodStoreSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR, searchType, searchStr);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1021
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세
	 */
	public List<PDSRecadvPeriodStoreSumDetailVO> retrievePeriodStoreSumDetail(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end) {
		try {
			List<PDSRecadvPeriodStoreSumDetailVO> list = recadvDao.retrievePeriodStoreSumDetail(bzplc, byDtFr, byDtTo, TRPL_C_ARR, start, end);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	//1021 합계
	public Map<String,Object> retrievePeriodStoreSumDetailTot(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[]){
		
		 return recadvDao.retrievePeriodStoreSumDetailTot(bzplc, byDtFr, byDtTo, TRPL_C_ARR);
	}
	
	/*
	 * 화면ID : VAN_DS_SC1021
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세 total count
	 */
	public int getPeriodStoreSumDetailCount(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[]) {
		try {
			return recadvDao.getPeriodStoreSumDetailCount(bzplc, byDtFr, byDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 :  기간별 상품별/점포별 정보
	 */
	public List<PDSRecadvPeriodSkuSumVO> retrievePeriodSkuSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int end) {
		try {
			List<PDSRecadvPeriodSkuSumVO> list = recadvDao.retrievePeriodSkuSum(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 :  기간별 상품별/점포별 정보 total count
	 */
	public int getPeriodSkuSumCount(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[]) {
		try {
			return  recadvDao.getPeriodSkuSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 :  기간별 상품별/점포별 정보 total
	 */
	public Map<String, Object> getPeriodSkuSumTotal(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[]){
		try {
			return  recadvDao.getPeriodSkuSumTotal(srhByDtFr, srhByDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1031
	 * 화면명 :  기간별 상품별/점포별 - 상세
	 */
	public List<PDSRecadvPeriodSkuSumDetailVO> retrievePeriodSkuSumDetail(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end) {
		try {
			List<PDSRecadvPeriodSkuSumDetailVO> list = recadvDao.retrievePeriodSkuSumDetail(naWrsC, byDtFr, byDtTo, TRPL_C_ARR, start, end);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 :  기간별 상품별/점포별 정보 상세total
	 */
	public Map<String, Object> getPeriodSkuSumDetailTotal(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[]){
		try {
			return  recadvDao.getPeriodSkuSumDetailTotal(naWrsC, byDtFr, byDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1031
	 * 화면명 :  기간별 점포별/상품별 정보 - 상세 total count
	 */
	
	public int getPeriodSkuSumDetailCount(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[]) {
		try {
			return recadvDao.getPeriodSkuSumDetailCount(naWrsC, byDtFr, byDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 :  점포별/제품별미납정보
	 */
	public List<PDSRecadvNPeriodStoreSumVO> retrieveNPeriodStoreSum(String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[], int start, int end) {
		try {
			List<PDSRecadvNPeriodStoreSumVO> list = recadvDao.retrieveNPeriodStoreSum(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR, start, end);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 :  점포별/제품별미납정보  Count
	 */
	public int retrieveNPeriodStoreSumCount(String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[]) {
		try {
			int rowCnt = recadvDao.retrieveNPeriodStoreSumCount(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 :  점포별/제품별미납정보 합계
	 */
	public PDSRecadvNPeriodStoreSumVO getNPeriodStoreSumTotal(String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[]) {
		try {
			return recadvDao.getNPeriodStoreSumTotal(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1041
	 * 화면명 :  점포별/제품별미납정보 상세
	 */
	public List<PDSRecadvNPeriodStoreSumDetailVO> retrieveNPeriodStoreSumDetail(String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[], int start, int end) {
		try {
			List<PDSRecadvNPeriodStoreSumDetailVO> list = recadvDao.retrieveNPeriodStoreSumDetail(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR, start, end);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1041
	 * 화면명 :  기간별 점포별/상품별 정보 상세 total count
	 */
	public int getNPeriodStoreSumDetailCount(String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[]) {
		try {
			return recadvDao.getNPeriodStoreSumDetailCount(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1041
	 * 화면명 :  점포별/제품별미납정보 Detail 합계
	 */
	public PDSRecadvNPeriodStoreSumVO getNPeriodStoreSumDetailTotal(String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[]) {
		try {
			return recadvDao.getNPeriodStoreSumDetailTotal(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 : 자료수신_기간집계 (점포별/상품별)
	 */
	public void downloadTrplPeriodStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadTrplPeriodStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 : 자료수신_기간집계 (상품별/점포별)
	 */
	public void downloadWrsPeriodStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadWrsPeriodStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 : 자료수신_일별집계 (점포별/상품별)
	 */
	public void downloadTrplDailyStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadTrplDailyStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 : 자료수신_일별집계 (상품별/점포별)
	 */
	public void downloadWrsDailyStoreSumCSV(String fromDate, String toDate, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadWrsDailyStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	// 수수료 관리 - 계약코드 찾기
	public Map<String, Object> getCserCtrTpc(String glnCode){
		try {
			return recadvDao.getCserCtrTpc(glnCode);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	// 수수료 관리 - 상품 조회
	public List<Map<String, Object>> retrieveCommissionWRSList(String SPYPL_NA_TRPL_C, String NA_BZPLC, String SEARCH_TYPE, String TRPL){
		try {
			return recadvDao.retrieveCommissionWRSList(SPYPL_NA_TRPL_C,NA_BZPLC,SEARCH_TYPE,TRPL);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	// 수수료 관리 - 엑셀
	public void retrieveCommissionWRSExcel(String SPYPL_NA_TRPL_C, String NA_BZPLC, String SEARCH_TYPE, String TRPL, ExcelFileMakerResultHandler handler){
		try {
			recadvDao.retrieveCommissionWRSExcel(SPYPL_NA_TRPL_C,NA_BZPLC,SEARCH_TYPE,TRPL,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	// 수수료 관리 - 본사 빼고 지사리스트
	public List<Map<String, Object>> retrieveCommissionTrplList(String glnCode){
		try {
			return recadvDao.retrieveCommissionTrplList(glnCode);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 수수료 관리 삽입 */
	public int insertFeeAmnList(PDSRecadvFeeAmn vo) {
		try{
			return recadvDao.insertFeeAmnList(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	/* 수수료 관리 저장 */
	public void saveFeeAmnList(List<PDSRecadvFeeAmn> list) {

		if (list != null) {

			for (int i = 0; i < list.size(); i++) {
				PDSRecadvFeeAmn vo = list.get(i);
				// 기본 저장
				if (!StringUtils.isEmpty(vo.getCRUD_DSC())) {
					switch (vo.getCRUD_DSC()) {
					case "C":
						insertFeeAmnList(vo);
						break;
					case "U":

						// 전체 저장
						if (vo.getDetailVoList() != null && vo.getDetailVoList().size() > 0) {
							for (TrplList dvo : vo.getDetailVoList()) {
								
								vo.setBRO_C(dvo.getNA_TRPL_C());
								vo.setBRO_CNM(dvo.getCLNTNM());
								
								insertFeeAmnList(vo);
							}
						}else{
							insertFeeAmnList(vo);
						}
						

						break;
					default:
						logger.error("[ saveOrder ] Master DML CODE IS NULL!!!");
						throw new AppetizerException(
								"[ saveOrder ] Master DML CODE IS NULL!!!");
					}
				}
			}
		}
	}

	// 수수료 현황 조회
	public List<Map<String, Object>> retrieveFeeCurrentList(String glnCode,
			String BY_DT, String mbcoType) {
		try {
			return recadvDao.retrieveFeeCurrentList(glnCode,BY_DT,mbcoType);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	// 수수료 현황 합계
	public Map<String, Object> getFeeCurrentSum(String glnCode,
			String BY_DT, String mbcoType) {
		try {
			return recadvDao.getFeeCurrentSum(glnCode,BY_DT,mbcoType);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	// 수수료 현황 상세 조회
	public List<Map<String, Object>> retrieveFeeCurrentDetailList(String BY_DT,
			String BRO_C, String NA_RGN_C, int start, int end) {
		try {
			return recadvDao.retrieveFeeCurrentDetailList(BY_DT,BRO_C,NA_RGN_C,start,end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int getFeeCurrentDetailListCount(String BY_DT, String BRO_C,
			String NA_RGN_C) {		
		try {
			int rowCnt = recadvDao.getFeeCurrentDetailListCount(BY_DT,BRO_C,NA_RGN_C);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public Map<String, Object> getFeeCurrentDetailListTotal(String BY_DT,
			String BRO_C, String NA_RGN_C) {
		try {
			return recadvDao.getFeeCurrentDetailListTotal(BY_DT,BRO_C,NA_RGN_C);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}	
	}
	
	public void retrieveFeeCurrentDetailExcel(String BY_DT,
			String BRO_C, String NA_RGN_C, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.retrieveFeeCurrentDetailExcel(BY_DT,BRO_C,NA_RGN_C,handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}	
	}
	
	public void downloadExcelDailyStoreSum(String srhByDt, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadExcelDailyStoreSum(srhByDt, TRPL_C_ARR, handler);		
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
		
	}

	public void downloadExcelPeriodSum(String byDtFr, String byDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadExcelPeriodSum(byDtFr, byDtTo, TRPL_C_ARR, handler);			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelPeriodStoreSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int limit
			,String searchType
			,String searchStr
			,ExcelFileMakerResultHandler handler
			) {
		try {
			recadvDao.downloadExcelPeriodStoreSum(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, limit, searchType, searchStr, handler);		
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelPeriodStoreSumDetail(String bzplc, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadExcelPeriodStoreSumDetail(bzplc, byDtFr, byDtTo, TRPL_C_ARR, start, end, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelPeriodSkuSum(String srhByDtFr, String srhByDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadExcelPeriodSkuSum(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end, handler);		
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelPeriodStoreSumDeail(String naWrsC, String byDtFr, String byDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadExcelPeriodStoreSumDeail(naWrsC, byDtFr, byDtTo, TRPL_C_ARR, start, end, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelNPeriodStoreSum(String srhNbyDtFr, String srhNbyDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadExcelNPeriodStoreSum(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR, start, end, handler);			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelNPeriodStoreSumDeail(String bzplc, String nbyDtFr, String nbyDtTo, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.downloadExcelNPeriodStoreSumDeail(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR, start, end, handler);			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void printRetrieveFeeCurrentList(String glnCode,
			String BY_DT, String mbcoType, ExcelFileMakerResultHandler handler) {
		try {
			recadvDao.printRetrieveFeeCurrentList(glnCode,BY_DT,mbcoType,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}