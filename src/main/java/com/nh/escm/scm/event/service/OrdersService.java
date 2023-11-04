package com.nh.escm.scm.event.service;

import java.util.ArrayList;
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
import com.nh.escm.scm.event.dao.OrdersDAO;
import com.nh.escm.scm.event.vo.OrdersBKGEVTPopUpVO;
import com.nh.escm.scm.event.vo.OrdersEPriceChangePopUpVO;
import com.nh.escm.scm.event.vo.OrdersEPriceChangeVO;
import com.nh.escm.scm.event.vo.OrdersPreEventPrintDetailVO;
import com.nh.escm.scm.event.vo.OrdersPreEventProcVO;
import com.nh.escm.scm.event.vo.OrdersPreEventSumsVO;
import com.nh.escm.scm.event.vo.OrdersPreEventVO;


@Service
public class OrdersService extends AbstractService {
	
	
	@Autowired
	private OrdersDAO ordersDao;
	
	/*
	 * 예약행사수주현황조회 
	 */
	
	/* Grid Master */
	public List<OrdersPreEventVO> retrievePreEvent(String srhBkgEvtYy, String srhBkgEvtNo, String srhOrrDdlDt, String srhNaOdrSt, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[]) {
		try {
			List<OrdersPreEventVO> list = ordersDao.retrievePreEventList(srhBkgEvtYy, srhBkgEvtNo, srhOrrDdlDt, srhNaOdrSt, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Grid Detail */
	public List<OrdersPreEventVO> retrievePreEventDetail(String bkgEvtYy, String bkgEvtNo, String naWrsC, String rvoplNaTrplC, String rvoplNaTeamC, String odrplNaTrplC, String rqQt) {
		
		try {
			List<OrdersPreEventVO> list = ordersDao.retrievePreEventDetailList(bkgEvtYy, bkgEvtNo, naWrsC, rvoplNaTrplC, rvoplNaTeamC, odrplNaTrplC, rqQt);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Excel DownLoad(Basic)  */
	public void downloadExcelPreEvent(String srhBkgEvtYy, String srhBkgEvtNo, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		try {
			ordersDao.downloadExcelPreEvent(srhBkgEvtYy, srhBkgEvtNo, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Excel DownLoad(Master)  */
	public void downloadExcelMasterPreEvent(String srhBkgEvtYy, String srhBkgEvtNo, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler) {
		try {
			ordersDao.downloadExcelMasterPreEvent(srhBkgEvtYy, srhBkgEvtNo, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Excel DownLoad(Detail)  */
	public void downloadExcelDetailPreEvent(String srhBkgEvtYy, String srhBkgEvtNo, String srhRvoplNaTrplC, String srhOdrplNaTrplC, String srhNaWrsC, String srhRqQt, ExcelFileMakerResultHandler handler){
		try {
			ordersDao.downloadExcelDetailPreEvent(srhBkgEvtYy, srhBkgEvtNo, srhRvoplNaTrplC, srhOdrplNaTrplC, srhNaWrsC, srhRqQt, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Print */
	public List<OrdersPreEventPrintDetailVO> printPreEventListMaster(String srhBkgEvtYy, String srhBkgEvtNo, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[]) {
		try {
			
			
			List<OrdersPreEventPrintDetailVO> tempList = ordersDao.printPreEventListDetail(srhBkgEvtYy, srhBkgEvtNo, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR);
			List<OrdersPreEventPrintDetailVO> list = new ArrayList<OrdersPreEventPrintDetailVO>();
			for(OrdersPreEventPrintDetailVO vo : tempList){
				vo.setList(ordersDao.printPreEventListMaster(srhBkgEvtYy, srhBkgEvtNo, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR));
				list.add(vo);
			}
			
			
			
			/*
			
			
			List<OrdersPreEventPrintMasterVO> tmpList = ordersDao.printPreEventListMaster(srhBkgEvtYy, srhBkgEvtNo, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR);
			List<OrdersPreEventPrintMasterVO> list = new ArrayList<OrdersPreEventPrintMasterVO>();
			
			for(OrdersPreEventPrintMasterVO vo : tmpList){
				String bkgEvtNo = vo.getBKG_EVT_NO();
				String bkgEvtYy = vo.getBKG_EVT_YY();
				String naWrsC = vo.getNA_WRS_C();
				vo.setList(ordersDao.printPreEventListDetail(bkgEvtYy, bkgEvtNo, naWrsC));
				list.add(vo);
			}
			
			*/
			
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 예약행사집계현황조회
	 */
	
	/* Grid Master */
	public List<OrdersPreEventSumsVO> retrievePreEventSums(String srhBkgEvtYy,
			String srhBkgEvtNo, String srhNaWrsC, String srhTrplView,
			String srhRvoplNaTrplC, String srhOdrplNaTrplC, String TRPL_C) {
		try {
			List<OrdersPreEventSumsVO> list = ordersDao.retrievePreEventSumsList(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, TRPL_C);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/* Grid Detail */
	public List<OrdersPreEventSumsVO> retrievePreEventSumsDetail(String bkgEvtYy, String bkgEvtNo, String naWrsC, String trplView, String trplC, String TRPL_C) {
		
		try {
			List<OrdersPreEventSumsVO> list = ordersDao.retrievePreEventSumsDetailList(bkgEvtYy, bkgEvtNo, naWrsC, trplView, trplC, TRPL_C);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Print */
	public List<OrdersPreEventSumsVO> printPreEventSumsMaster(String srhBkgEvtYy,
			String srhBkgEvtNo, String srhNaWrsC, String srhTrplView,
			String srhRvoplNaTrplC, String srhOdrplNaTrplC, String TRPL_C) {
		try {
			List<OrdersPreEventSumsVO> list = new ArrayList<OrdersPreEventSumsVO>();
			List<OrdersPreEventSumsVO> tmpList = ordersDao.retrievePreEventSumsList(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, TRPL_C);
			for(OrdersPreEventSumsVO vo : tmpList){
				String bkgEvtYy 	= vo.getBKG_EVT_YY();
				String bkgEvtNo 	= vo.getBKG_EVT_NO();
				String naWrsC 		= vo.getNA_WRS_C();
				String trplView 	= vo.getTRPL_VIEW();
				String trplC 		= vo.getTRPL_C();	
				vo.setList(ordersDao.retrievePreEventSumsDetailList(bkgEvtYy, bkgEvtNo, naWrsC, trplView, trplC, TRPL_C));
				list.add(vo);
			}
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Excel DownLoad(Master)  */
	public void downloadExcelPreEventMaterSumsList(String srhBkgEvtYy,
			String srhBkgEvtNo, String srhNaWrsC, String srhTrplView,
			String srhRvoplNaTrplC, String srhOdrplNaTrplC, String TRPL_C, ExcelFileMakerResultHandler handler){
		try {
			ordersDao.downloadExcelPreEventMaterSumsList(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, TRPL_C, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Excel DownLoad(Detail)  */
	public void downloadExcelPreEventSumsList(String srhBkgEvtYy, String srhBkgEvtNo, String srhNaWrsC, String srhTrplView, String srhRvoplNaTrplC, String srhOdrplNaTrplC, String trplC, String M_TRPL_C, String M_TEAM_C, ExcelFileMakerResultHandler handler) {
		try {
			ordersDao.downloadExcelPreEventSumsList(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, trplC, M_TRPL_C, M_TEAM_C, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 예약행사진행현황조회
	 */
	
	/* Grid Master */
	public List<OrdersPreEventProcVO> retrievePreEventProcess(String srhBkgEvtYy,
			String srhBkgEvtNoFr, String srhBkgEvtNoTo, String srhOdrplNaTrplC,
			String srhNaWrsC, String trplC) {
		try {
			List<OrdersPreEventProcVO> list = ordersDao.retrievePreEventProcList(srhBkgEvtYy,
					srhBkgEvtNoFr, srhBkgEvtNoTo, srhOdrplNaTrplC, srhNaWrsC, trplC);
			
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* Grid Detail */
	public List<OrdersPreEventProcVO> retrievePreEventProcessDetail(String bkgEvtYy, String bkgEvtNo,
			String odrplNaTrplC, String naWrsC, String trplC) {
		try {
			List<OrdersPreEventProcVO> list = ordersDao.retrievePreEventProcDetailList(bkgEvtYy, bkgEvtNo, odrplNaTrplC, naWrsC, trplC);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Excel DownLoad  */
	public void downloadExcelPreEventProcList(String trplC, String srhBkgEvtYy,
			String srhBkgEvtNoFr, String srhBkgEvtNoTo, String srhOdrplNaTrplC,
			String srhNaWrsC, ExcelFileMakerResultHandler handler) {
		try {
			ordersDao.downloadExcelPreEventProcList(trplC, srhBkgEvtYy,
					srhBkgEvtNoFr, srhBkgEvtNoTo, srhOdrplNaTrplC, srhNaWrsC, handler);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Print */
	public List<OrdersPreEventProcVO> printPreEventProcess(String srhBkgEvtYy,
			String srhBkgEvtNoFr, String srhBkgEvtNoTo, String srhOdrplNaTrplC,
			String srhNaWrsC, String[] TRPL_C_ARR, String trplC) {
		try {
			List<OrdersPreEventProcVO> list = new ArrayList<OrdersPreEventProcVO>();
			List<OrdersPreEventProcVO> tmpList = ordersDao.printPreEventProcList(srhBkgEvtYy,
					srhBkgEvtNoFr, srhBkgEvtNoTo, srhOdrplNaTrplC, srhNaWrsC,TRPL_C_ARR);
			
			for(OrdersPreEventProcVO vo : tmpList){
				String bkgEvtYy = vo.getBKG_EVT_YY();
				String bkgEvtNo = vo.getBKG_EVT_NO();
				String odrplNaTrplC = vo.getODRPL_NA_TRPL_C();
				String naWrsC = vo.getNA_WRS_C();
				vo.setList(retrievePreEventProcessDetail(bkgEvtYy, bkgEvtNo, odrplNaTrplC, naWrsC, trplC));
				list.add(vo);
			}
			
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 행사가격변동조회
	 */
	/* Grid Master */
	public List<OrdersEPriceChangeVO> retrieveEventPriceChange(
			String srhEvtSqNo, String srhNaWrsC, String srhDateType,
			String srhEvtStDt, String srhEvtEtDt, String srhNaPzplc, String[] TRPL_C_ARR) {
		try {
			List<OrdersEPriceChangeVO> list = ordersDao.retrieveEventPriceChangeList(srhEvtSqNo, srhNaWrsC, srhDateType, srhEvtStDt, srhEvtEtDt, srhNaPzplc, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/* Grid Detail */
	public List<OrdersEPriceChangeVO> retrieveEventPriceChangeDetail(String naBzplc, String evtSqno, String prgrC) {
		try {
			List<OrdersEPriceChangeVO> list = ordersDao.retrieveEventPriceChangeDetailList(naBzplc, evtSqno, prgrC);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 예약구매 조회 팝업
	 */
	public List<OrdersBKGEVTPopUpVO> retrieveBkgEvtPopUp(String searchYear, String searchType, String searchTxt, String[] TRPL_C_ARR) {
		try {
			List<OrdersBKGEVTPopUpVO> list = ordersDao.retrieveBkgEvtPopUp(searchYear, searchType, searchTxt, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 예약구매발주사업장 조회
	 */
	public List<Map<String, Object>> retrieveBkgEvtOdrplPopUp(String searchCode, String searchNm) {
		try {
			List<Map<String, Object>> list = ordersDao.retrieveBkgEvtOdrplPopUp(searchCode, searchNm);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 통합행사조회 팝업
	 */
	public List<OrdersEPriceChangePopUpVO> retrieveEventPriceChangePopUp(String srhType, String srhTxt, String TRPL_C_ARR[]) {
		try {
			List<OrdersEPriceChangePopUpVO> list = ordersDao.retrieveEventPriceChangePopUp(srhType, srhTxt, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 예약구매기준상품 조회 팝업
	 */
	public List<Map<String, Object>> retrieveEventOrdersWrsPopUp(String searchType, String searchTxt) {
		try {
			List<Map<String, Object>> list = ordersDao.retrieveEventOrdersWrsPopUp(searchType, searchTxt);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 예약행사수주현황조회 프린트
	 */	
	public List<Map<String, Object>> printPreEventList(String srhBkgEvtYy, String srhBkgEvtNo, String srhOrrDdlDt, String srhNaOdrSt, String srhOdrplNaTrplC, String srhNaWrsC, String TRPL_C_ARR[]) {
		try {
			List<Map<String, Object>> list = ordersDao.printPreEventList(srhBkgEvtYy, srhBkgEvtNo, srhOrrDdlDt, srhNaOdrSt, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}