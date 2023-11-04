package com.nh.escm.scm.recadv.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.common.vo.TbCmBzplVO;
import com.nh.escm.scm.recadv.dao.RecadvDAO;
import com.nh.escm.scm.recadv.vo.RecadvDetailVO;
import com.nh.escm.scm.recadv.vo.RecadvDirectDetailVO;
import com.nh.escm.scm.recadv.vo.RecadvDirectMasterVO;
import com.nh.escm.scm.recadv.vo.RecadvMasterVO;
import com.nh.escm.scm.recadv.vo.RecadvMasterVO_WRS;
import com.nh.escm.scm.recadv.vo.RecadvMaster_NA_TRPL_C_VO;

@Service
public class RecadvService extends AbstractService {

	@Autowired
	private RecadvDAO recadvDAO;

	public List<Map<String, Object>> retrieveCommissionList(String naBzplc,
			String naTeamC, String slpDt, String naSlpno, long slpSqno, String CNR_DS_AM) {
		try {
			return recadvDAO.retrieveCommissionList(naBzplc, naTeamC, slpDt, naSlpno, slpSqno, CNR_DS_AM);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<RecadvMasterVO> retrieveRecadvSlpMasterList(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String cnfmYn, String isNaAll, String naBzplc, String rotsCtrDsc,int start, int end) {
		try {
			return recadvDAO.retrieveRecadvSlpMasterList(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, cnfmYn, isNaAll, naBzplc,rotsCtrDsc,start,end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}

	}

	public List<RecadvDetailVO> retrieveRecadvSlpDetailList(String naBzplc,
			String naTeamC, String slpDt, String naSlpno,String rpyPlaDt, int start, int end) { 
		try {
			return recadvDAO.retrieveRecadvSlpDetailList(naBzplc, naTeamC, slpDt, naSlpno,rpyPlaDt, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<RecadvDirectMasterVO> retrieveRecadvDdlyMasterList(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC, int start, int end) {
		try {
			return recadvDAO.retrieveRecadvDdlyMasterList(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,ddlyBuyplNaTrplC, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<RecadvDirectDetailVO> retrieveRecadvDdlyDetailList(String naBzplc,
			String naTeamC, String slpDt, String naSlpno,String rpyPlaDt, int start, int end) {
		try {
			return recadvDAO.retrieveRecadvDdlyDetailList(naBzplc, naTeamC, slpDt, naSlpno,rpyPlaDt, start , end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<TbCmBzplVO> getDdlyNABizPlace(String splrNaTrplC) {
		try {
			return recadvDAO.getDdlyNABizPlace(splrNaTrplC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 전표별 마스터 그리드 엑셀 다운로드*/
	public void downloadExcelRecadvSlpMaster(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpMaster(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 전표별 디테일 그리드 엑셀 다운로드*/
	public void downloadExcelRecadvSlpDetail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String rpyPlaDt, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpDetail(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno,rpyPlaDt,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적-전표별 전표 상품 수수료 합계  엑셀 다운로드*/
	public void downloadExcelRecadvSlpCommisionSum(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpCommisionSum(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적-전표별 전표 상품 수수료 상세  엑셀 다운로드*/
	public void downloadExcelRecadvSlpCommisionDetail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpCommisionDetail(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn, handler);			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적 직송분 마스터 엑셀 다운로드 */
	public void downloadExcelRecadvDdlyMaster(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvDdlyMaster(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,ddlyBuyplNaTrplC,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적-직송분 전표 상품 수수료 합계  엑셀 다운로드*/
	public void downloadExcelRecadvDdlyCommisionSum(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvDdlyCommisionSum(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적-직송분 전표 상품 수수료 상세  엑셀 다운로드*/
	public void downloadExcelRecadvDdlyCommisionDetail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvDdlyCommisionDetail(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 검수실적 전표별 마스터 총 카운트*/
	public int getRecadvSlpCount(String[] TRPL_C_ARR, String searchDateType,
			String fromDate, String toDate, String tradeType, String isNaAll,
			String naBzplc, String rotsCtrDsc) {
		try {
			return recadvDAO.getRecadvSlpCount(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 검수실적 전표별 마스터 합계*/
	public RecadvMasterVO getRecadvSlpTotal(String[] TRPL_C_ARR,
			String searchDateType, String fromDate, String toDate,
			String tradeType, String isNaAll, String naBzplc, String rotsCtrDsc) {
		try {
			return recadvDAO.getRecadvSlpTotal(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 검수실적 전표별 디테일 페이지 카운트 */
	public int getRecadvSlpDetailCount(String naBzplc, String naTeamC,
			String slpDt, String naSlpno, String rpyPlaDt) {
		try {
			return recadvDAO.getRecadvSlpDetailCount(naBzplc, naTeamC, slpDt, naSlpno, rpyPlaDt);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 검수실적 직송분 마스터 총 카운트*/
	public int getRecadvDdlyCount(String[] TRPL_C_ARR, String searchDateType,
			String fromDate, String toDate, String tradeType, String isNaAll,
			String naBzplc, String rotsCtrDsc, String ddlyBuyplNaTrplC) {
		try {
			return recadvDAO.getRecadvDdlyCount(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,ddlyBuyplNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 검수실적 직송분 마스터 합계*/
	public RecadvDirectMasterVO getRecadvDdlyTotal(String[] TRPL_C_ARR,
			String searchDateType, String fromDate, String toDate,
			String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC) {
		try {
			return recadvDAO.getRecadvDdlyTotal(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,ddlyBuyplNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int getRecadvDdlyDetailCount(String naBzplc, String naTeamC,
			String slpDt, String naSlpno) {
		try {
			return recadvDAO.getRecadvDdlyDetailCount(naBzplc, naTeamC, slpDt, naSlpno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 수수료 출력*/
	public List<Map<String, Object>> printCommissionList(String naBzplc,
			String naTeamC, String slpDt, String naSlpno, long slpSqno) {
		try {
			return recadvDAO.printCommissionList(naBzplc, naTeamC, slpDt, naSlpno, slpSqno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	//검수 실적 전표별 사후장려금
	public Map<String, Object> getBlbSpyAm(
			String[] TRPL_C_ARR, String searchDateType,
			String fromDate, String toDate, String tradeType, String isNaAll,
			String naBzplc, String rotsCtrDsc) throws AppetizerException{
		try {
			return recadvDAO.getBlbSpyAm(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 매입처별
	public List<RecadvMaster_NA_TRPL_C_VO> retrieveRecadvSlpMasterList_NA_TRPL_C(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, int start, int end) {
		try {
			return recadvDAO.retrieveRecadvSlpMasterList_NA_TRPL_C(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,start,end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 매입처별 팝업
	public List<RecadvMaster_NA_TRPL_C_VO> retrieveRecadvSlp_NA_TRPL_C_Detail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String MNGT_NA_TRPL_C) {
		try {
			return recadvDAO.retrieveRecadvSlp_NA_TRPL_C_Detail(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,MNGT_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 매입처별 마스터 엑셀
	public List<Map<String, Object>> downloadExcelRecadvSlp_NA_TRPL_C_M(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc) {
		try {
			return recadvDAO.downloadExcelRecadvSlp_NA_TRPL_C_M(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 매입처별 상세 엑셀
	public void downloadExcelRecadvSlp_NA_TRPL_C_D(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String MNGT_NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlp_NA_TRPL_C_D(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, MNGT_NA_TRPL_C, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 상품별 첫번째그리드
	public List<RecadvMasterVO_WRS> retrieveRecadvSlpMasterList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		try {
			return recadvDAO.retrieveRecadvSlpMasterList_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 상품별 엑셀 버튼
	public List<Map<String, Object>> downloadExcelRecadvSlpMasterList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		try {
			return recadvDAO.downloadExcelRecadvSlpMasterList_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	//검수실적 상품별 전표 상품 수수료 엑셀 빌링
	public List<Map<String, Object>> downloadExcelRecadvSlpMasterList_WRS_billing(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		try {
			return recadvDAO.downloadExcelRecadvSlpMasterList_WRS_billing(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 상품별 두번째 그리드
	public List<Map<String, Object>> retrieveRecadvSlpDetailList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		try {
			return recadvDAO.retrieveRecadvSlpDetailList_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 상품별 세번째 그리드
	public List<Map<String, Object>> retrieveRecadvSlpDetail2List_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C) {
		try {
			return recadvDAO.retrieveRecadvSlpDetail2List_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 상품별 세번째 그리드 합계
	public Map<String, Object> retrieveRecadvSlpDetail2List_WRS_SUM(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C) {
		try {
			return recadvDAO.retrieveRecadvSlpDetail2List_WRS_SUM(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//매입실적 마스터 조회
	public List<Map<String, Object>> retrieveRecadvResult(String[] TRPL_C_ARR,
			String fromDate, String toDate, String rotsCtrDsc, String naBzplc,
			String naSlpno, String buyplNaTrplC, String naTeamC, String buyplNaTeamC) {
		try {
			return recadvDAO.retrieveRecadvResult(TRPL_C_ARR, fromDate, toDate, rotsCtrDsc, naBzplc, naSlpno,buyplNaTrplC,naTeamC,buyplNaTeamC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//매입실적 디테일 조회
	public List<Map<String, Object>> retrieveRecadvResultDetail(String naBzplc,
			String naTeamC, String slpDt, String naSlpno, String buyplNaTrplC) {
		try {
			return recadvDAO.retrieveRecadvResultDetail(naBzplc,naTeamC, slpDt, naSlpno, buyplNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 상품별 세번째 그리드
	public List<Map<String, Object>> retrieveRecadvSlpDetail3List_WRS( String[] TRPL_C_ARR, String searchDateType, String fromDate, String toDate, String tradeType, String isNaAll, String naBzplc, String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C) {
		try {
			return recadvDAO.retrieveRecadvSlpDetail3List_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//검수실적 매입처별 마스터 엑셀
	public void downloadExcelRecadvSlp_NA_TRPL_C_M_NEW(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlp_NA_TRPL_C_M_NEW(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelRecadvSlpMasterList_WRS_NEW(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpMasterList_WRS_NEW(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelRecadvSlpDetailList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpDetailList_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelRecadvSlpMaster_Join(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpMaster_Join(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelRecadvDdlyMaster_Join(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvDdlyMaster_Join(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,ddlyBuyplNaTrplC, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelRetrieveRecadvResult(String[] TRPL_C_ARR,
			String fromDate, String toDate, String rotsCtrDsc, String naBzplc,
			String naSlpno, String buyplNaTrplC, String naTeamC, String buyplNaTeamC, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRetrieveRecadvResult(TRPL_C_ARR, fromDate, toDate, rotsCtrDsc, naBzplc, naSlpno,buyplNaTrplC,naTeamC,buyplNaTeamC,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelRecadvSlpDetail2List_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpDetail2List_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelRecadvSlpDetail3List_WRS( String[] TRPL_C_ARR, String searchDateType, String fromDate, String toDate, String tradeType, String isNaAll, String naBzplc, String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		try {
			recadvDAO.downloadExcelRecadvSlpDetail3List_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> downloadExcelRecadvSlpMasterBilling_Join(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno) {
		try {
			return recadvDAO.downloadExcelRecadvSlpMasterBilling_Join(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 전표별 디테일 그리드 엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvSlpDetailBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String rpyPlaDt) {
		try {
			return recadvDAO.downloadExcelRecadvSlpDetailBilling(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno,rpyPlaDt);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적-전표별 전표 상품 수수료 합계  엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvSlpCommisionSumBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn) {
		try {
			return recadvDAO.downloadExcelRecadvSlpCommisionSumBilling(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적-전표별 전표 상품 수수료 상세  엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvSlpCommisionDetailBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn) {
		try {
			return recadvDAO.downloadExcelRecadvSlpCommisionDetailBilling(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> downloadExcelRecadvDdlyMasterBilling_Join(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC) {
		try {
			return recadvDAO.downloadExcelRecadvDdlyMasterBilling_Join(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,ddlyBuyplNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 검수실적-직송분 전표 상품 수수료 합계  엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvDdlyCommisionSumBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno) {
		try {
			return recadvDAO.downloadExcelRecadvDdlyCommisionSumBilling(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 검수실적-직송분 전표 상품 수수료 상세  엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvDdlyCommisionDetailBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno) {
		try {
			return recadvDAO.downloadExcelRecadvDdlyCommisionDetailBilling(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> downloadExcelRecadvSlpDetail2ListBilling_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C) {
		try {
			return recadvDAO.downloadExcelRecadvSlpDetail2ListBilling_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> downloadExcelRecadvSlpDetail3ListBilling_WRS( String[] TRPL_C_ARR, String searchDateType, String fromDate, String toDate, String tradeType, String isNaAll, String naBzplc, String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C) {
		try {
			return recadvDAO.downloadExcelRecadvSlpDetail3ListBilling_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
