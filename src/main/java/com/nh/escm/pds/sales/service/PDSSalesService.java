package com.nh.escm.pds.sales.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.common.ClientHolder;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.sales.dao.PDSSalesDAO;
import com.nh.escm.pds.sales.vo.PDSSalesDailyStoreSumVO;
import com.nh.escm.pds.sales.vo.PDSSalesLiquorVO;
import com.nh.escm.pds.sales.vo.PDSSalesPeriodSkuSumVO;
import com.nh.escm.pds.sales.vo.PDSSalesPeriodStoreSumVO;

/**
 * 판매정보
 * @author hroh
 *
 */
@Service
public class PDSSalesService extends AbstractService {
	
	@Autowired
	PDSSalesDAO salesDAO;
	
	/*
	 * 화면ID : VAN_DS_SC_0800
	 * 화면명 :  일자별 정보
	 */
	public List<PDSSalesDailyStoreSumVO> retrieveSalesDailyStoreSumList(String srhByDt, String[] TRPL_C_ARR) {
		try {
			List<PDSSalesDailyStoreSumVO> list = salesDAO.retrieveSalesDailyStoreSumList(srhByDt, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0810
	 * 화면명 :  기간별 조회
	 */
	public List<PDSSalesDailyStoreSumVO> retrieveSalesPeriodSumList(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR) {
		try {
			List<PDSSalesDailyStoreSumVO> list = salesDAO.retrieveSalesPeriodSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회
	 */
	public List<PDSSalesPeriodStoreSumVO> retrieveSalesPeriodStoreSumPgList(String srhByDtFr, String srhByDtTo, 
			String[] TRPL_C_ARR, int start, int end,String naRgnC, String TRPL_C) {
		try {
			List<PDSSalesPeriodStoreSumVO> list = salesDAO.retrieveSalesPeriodStoreSumPgList(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end,naRgnC,TRPL_C);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회  Count
	 */
	public int retrieveSalesPeriodStoreSumCount(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR,String naRgnC, String TRPL_C) {
		try {
			int rowCnt = salesDAO.retrieveSalesPeriodStoreSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR,naRgnC,TRPL_C);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회 합계
	 */
	public PDSSalesPeriodStoreSumVO getSalesPeriodStoreSumTotal(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR,String naRgnC, String TRPL_C) {
		try {
			return salesDAO.getSalesPeriodStoreSumTotal(srhByDtFr, srhByDtTo, TRPL_C_ARR,naRgnC,TRPL_C);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_0822
	 * 화면명 :  기간별 점포별/상품별 간선해제 정보조회
	 */
	public List<Map<String, Object>> retrieveSalesPeriodStoreSumTrunkPgList(String srhByDtFr, String srhByDtTo,
			String[] TRPL_C_ARR, int start, int end, String naRgnC, String TRPL_C) {
		try {
			List<Map<String, Object>> list = salesDAO.retrieveSalesPeriodStoreSumTrunkPgList(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end, naRgnC, TRPL_C);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세
	 */
	public List<Map<String, Object>> retrieveSalesPeriodStoreSumDetailPgList(
			String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR,
			int start, int limit) {
		try {			
			return salesDAO.retrieveSalesPeriodStoreSumDetailPgList(bzplc, byDtFr, byDtTo, TRPL_C_ARR, start, limit);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세 Count
	 */
	public int getSalesPeriodStoreSumDetailCount(String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR) {
		try {
			int rowCnt = salesDAO.getSalesPeriodStoreSumDetailCount(bzplc, byDtFr, byDtTo, TRPL_C_ARR);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세 합계
	 */
	public Map<String, Object> getSalesPeriodStoreSumDetailTotal(String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR) {
		try {
			return salesDAO.getSalesPeriodStoreSumDetailTotal(bzplc, byDtFr, byDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 점포별/상품별 정보조회
	 */
	public List<PDSSalesPeriodSkuSumVO> retrieveSalesPeriodSkuSumPgList( String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, String type, int start, int end) {
		try {
			List<PDSSalesPeriodSkuSumVO> list = salesDAO.retrieveSalesPeriodSkuSumPgList(srhByDtFr, srhByDtTo, TRPL_C_ARR, srhWrsC, type, start, end);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 상품별/점포별 정보조회 Count
	 */
	/*
	public int getSalesPeriodSkuSumCount(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR) {
		try {
			int rowCnt = salesDAO.getSalesPeriodSkuSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	*/

	public int getSalesPeriodSkuSumCount(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, String type) {
		try {
			int rowCnt = salesDAO.getSalesPeriodSkuSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR, srhWrsC, type);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 점상품별/점포별 정보조회 합계
	 */
	public PDSSalesPeriodSkuSumVO getSalesPeriodSkuSumTotal(String srhByDtFr, 	String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, String type) {
		try {
			return salesDAO.getSalesPeriodSkuSumTotal(srhByDtFr, srhByDtTo, TRPL_C_ARR, srhWrsC, type);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 - 상세 조회
	 */
	public List<Map<String, Object>> retrieveSalesPeriodSkuSumDetailPgList(
			String wrsC, String byDtFr, String byDtTo, String[] TRPL_C_ARR, int start,
			int limit, String naRgnC) {
		try {			
			return salesDAO.retrieveSalesPeriodSkuSumDetailPgList(wrsC, byDtFr, byDtTo, TRPL_C_ARR, start, limit, naRgnC);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 - 상세 Count
	 */
	public int getSalesPeriodSkuSumDetailCount(String wrsC, String byDtFr,
			String byDtTo, String[] TRPL_C_ARR, String naRgnC) {
		try {
			int rowCnt = salesDAO.getSalesPeriodSkuSumDetailCount(wrsC, byDtFr, byDtTo, TRPL_C_ARR, naRgnC);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 - 상세 총 합계
	 */
	public Map<String, Object> getSalesPeriodSkuSumDetailTotal(String wrsC,
			String byDtFr, String byDtTo, String[] TRPL_C_ARR, String naRgnC) {
		try {
			return salesDAO.getSalesPeriodSkuSumDetailTotal(wrsC, byDtFr, byDtTo, TRPL_C_ARR, naRgnC);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 :  주류실적 조회
	 */
	public List<PDSSalesLiquorVO> retrieveSalesLiquorList(String searchType, String mbcoType, String srhDateType, 
			String fromDate, String toDate, String srhMonth, 
			String srhWeak, String prgrC, String naCode, 
			String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR,
			int start, int limit) {
		try {
			List<PDSSalesLiquorVO> list = salesDAO.retrieveSalesLiquorList(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR,
					start, limit);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 주류실적 총 카운트 */
	public int getSalesLiquorCount(String searchType, String mbcoType, String srhDateType, String fromDate,
			String toDate, String srhMonth, String srhWeak, String prgrC,
			String naCode, String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR) {
		try {			 
			return salesDAO.getSalesLiquorCount(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR
					);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 주류실적 총 합계 */
	public Map<String, Object> getSalesLiquorTotal(String searchType,
			String mbcoType, String srhDateType, String fromDate,
			String toDate, String srhMonth, String srhWeak, String prgrC,
			String naCode, String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR) {
		try {			 
			return salesDAO.getSalesLiquorTotal(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR
					);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*주류실적 본사만 조회 가능 */
	public List<Map<String, Object>> retrieveMbcoDsc(
			String TRPL_C)
			throws AppetizerException{
		try {
			return salesDAO.retrieveMbcoDsc(TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}				
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 :  지역코드
	 */
	public List<Map<String, Object>> retrieveRgnCList() {
		try {
			return salesDAO.retrieveRgnCList();
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 :  지역코드2
	 */
	public List<Map<String, Object>> retrieveRgnC2List(String naRgnC) {
		try {
			return salesDAO.retrieveRgnC2List(naRgnC);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//주류실적 권한 체크
	public List<Map<String, Object>> getLiquorYn(String glncode) {
		try {
			return salesDAO.getLiquorYn(glncode);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}	
	
	public List<Map<String, Object>> retrieveMrCenterList(String mbcoType) {
		try {
			return salesDAO.retrieveMrCenterList(mbcoType);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 상세 - 엑셀다운로드
	 */
	public List<Map<String, Object>> downloadExcelSalesPeriodStoreSumDetailPgList(
			String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR) {
		try {			
			return salesDAO.downloadExcelSalesPeriodStoreSumDetailPgList(bzplc, byDtFr, byDtTo, TRPL_C_ARR);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 엑셀다운로드
	 */
	public List<PDSSalesPeriodStoreSumVO> downloadExcelSalesPeriodStoreSumList(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String naRgnC) {
		try {
			List<PDSSalesPeriodStoreSumVO> list = salesDAO.downloadExcelSalesPeriodStoreSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR,naRgnC);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0830
	 * 화면명 :  기간별 점포별/상품별 정보조회 - 엑셀다운로드
	 */
	public List<PDSSalesPeriodSkuSumVO> downloadExcelSalesPeriodSkuSumList(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR) {
		try {
			List<PDSSalesPeriodSkuSumVO> list = salesDAO.downloadExcelSalesPeriodSkuSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면명 :  기간별 상품별/점포별 정보조회 - 상세 조회 - 다운로드
	 */
	public List<Map<String, Object>> downloadExcelSalesPeriodSkuSumDetailList(
			String wrsC, String byDtFr, String byDtTo, String[] TRPL_C_ARR,String naRgnC) {
		try {			
			return salesDAO.downloadExcelSalesPeriodSkuSumDetailList(wrsC, byDtFr, byDtTo, TRPL_C_ARR,naRgnC);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 월별집계 - 사업장
	 */
	public void downloadExcelSalesMonthlyBzplc(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {			
			salesDAO.downloadExcelSalesMonthlyBzplc(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 월별집계 - 상품
	 */
	public void downloadExcelSalesMonthlyWrsC(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {			 
			salesDAO.downloadExcelSalesMonthlyWrsC(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 일별집계
	 */
	public void downloadExcelSalesDaliy(
			String srhByDtFr, String srhByDtTo, String srhTrplC, String SEARCH_TYPE, String chkAtl, ExcelFileMakerResultHandler handler) {
		try {			
			salesDAO.downloadExcelSalesDaliy(srhByDtFr, srhByDtTo, srhTrplC, SEARCH_TYPE, chkAtl, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신 - 일별집계 Billing
	 */
	public List<Map<String, Object>> downloadExcelSalesDaliyBilling(
			String srhByDtFr, String srhByDtTo, String srhTrplC, String SEARCH_TYPE, String chkAtl) {
		try {			
			return salesDAO.downloadExcelSalesDaliyBilling(srhByDtFr, srhByDtTo, srhTrplC, SEARCH_TYPE, chkAtl);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 : 주류실적 조회 - 엑셀  다운로드
	 * 화면 설명 : Grid Master
	 */
	public void downloadExcelSalesLiquorList(
			String searchType, String mbcoType, String srhDateType, 
			String fromDate, String toDate, String srhMonth, 
			String srhWeak, String prgrC, String naCode, 
			String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {			
			salesDAO.downloadExcelSalesLiquorList(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 판매정보 빌링 마크업 */
	public void markUp(final String srhByDtFr, final String srhByDtTo, final String[] TRPL_C_ARR,
			final String sessionGlnCode, final String sessionUserId) throws ValidationException {
		
		if ("Y".equals(ClientHolder.getTransYn())) {
			logger.info("markUp(" + srhByDtFr + ", " + srhByDtTo + ", " + sessionGlnCode + ", " + sessionUserId + ") -> 사용자전환 과금 제외!!");
			return; // 관리자가 사용자전환으로 로그인한 경우, 과금하지 않는다.
		}
		
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					validation(srhByDtFr, srhByDtTo, TRPL_C_ARR, sessionGlnCode, sessionUserId);
					salesDAO.markUp(srhByDtFr, srhByDtTo, TRPL_C_ARR, sessionGlnCode, sessionUserId);
				} catch (ValidationException e) {
					logger.error(e.getMessage(), e); // ignore
				}
			}
		}).start();
	}
	
	private void validation(String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR,
			String sessionGlnCode, String sessionUserId) throws ValidationException {
		
		if (StringUtils.isEmpty(srhByDtFr)) {
			throw new ValidationException("SEARCH START DATE IS NULL");
		}
		if (StringUtils.isEmpty(srhByDtTo)) {
			throw new ValidationException("SEARCH END DATE IS NULL");
		}
		if (ArrayUtils.isEmpty(TRPL_C_ARR)) {
			throw new ValidationException("SEARCH GLN IS NULL");
		}
		if (StringUtils.isEmpty(sessionGlnCode)) {
			throw new ValidationException("SESSION GLN IS NULL");
		}
		if (StringUtils.isEmpty(sessionUserId)) {
			throw new ValidationException("USER_ID IS NULL");
		}
	}

	/*주류 판매실적 출력*/
	public List<Map<String, Object>> downloadExcelSalesLiquor(String searchType, String mbcoType, String srhDateType, 
			String fromDate, String toDate, String srhMonth, 
			String srhWeak, String prgrC, String naCode, 
			String wrsCode, String mrCenter, String naRgnC,
			String naRgnC2, String[] TRPL_C_ARR) {
		try {
			List<Map<String, Object>> list = salesDAO.downloadExcelSalesLiquor(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}	
	}

	public void retrieveSalesDailyStoreExcel(
			String srhByDt, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			salesDAO.retrieveSalesDailyStoreExcel(srhByDt, TRPL_C_ARR, handler);			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void retrieveSalesPeriodSumExcel(
			String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			salesDAO.retrieveSalesPeriodSumExcel(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int saveAtlSalesData(String srhByDtFr, String srhByDtTo, String[] tRPL_C_ARR) {
		// 간선집계
		try{
			
			return salesDAO.saveAtlSalesData(srhByDtFr, srhByDtTo, tRPL_C_ARR);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelSalesPeriodStoreSumList(String srhByDtFr, String srhByDtTo, 
			String[] TRPL_C_ARR, int start, int end,String naRgnC, String TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			salesDAO.downloadExcelSalesPeriodStoreSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end,naRgnC,TRPL_C,handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelSalesPeriodStoreSumTrunkList(String srhByDtFr, String srhByDtTo,
			String[] TRPL_C_ARR, int start, int end, String naRgnC, String TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			salesDAO.downloadExcelSalesPeriodStoreSumTrunkList(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end, naRgnC, TRPL_C, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelSalesPeriodStoreSumDetailPgList(
			String bzplc, String byDtFr, String byDtTo, String[] TRPL_C_ARR,
			int start, int limit, ExcelFileMakerResultHandler handler) {
		try {			
			salesDAO.downloadExcelSalesPeriodStoreSumDetailPgList(bzplc, byDtFr, byDtTo, TRPL_C_ARR, start, limit, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelSalesPeriodSkuSumList( String srhByDtFr, String srhByDtTo, String[] TRPL_C_ARR, String srhWrsC, int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			salesDAO.downloadExcelSalesPeriodSkuSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR, srhWrsC, start, end, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelSalesPeriodSkuSumDetailList(
			String wrsC, String byDtFr, String byDtTo, String[] TRPL_C_ARR, int start,
			int limit, String naRgnC, ExcelFileMakerResultHandler handler) {
		try {			
			salesDAO.downloadExcelSalesPeriodSkuSumDetailList(wrsC, byDtFr, byDtTo, TRPL_C_ARR, start, limit, naRgnC, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

}
