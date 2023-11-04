package com.nh.escm.pds.pay.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pay.dao.PaymentDAO;
import com.nh.escm.pds.pay.vo.PaymentAffSsdyDetailVO;
import com.nh.escm.pds.pay.vo.PaymentAffSsdyMasterVO;
import com.nh.escm.pds.pay.vo.PaymentEtcCaAsetDetailVO;
import com.nh.escm.pds.pay.vo.PaymentEtcCaAsetMasterVO;

/**
 * 정산정보 - 사후장려금, 기타당좌산 회수내역
 * @author HyeRim.Oh
 *
 */
@Service
public class PaymentService extends AbstractService {
	
	@Autowired
	private PaymentDAO paymentDAO;

	/* 사후장려금 마스터 그리드 조회*/
	public List<PaymentAffSsdyMasterVO> retrieveAffSsdyMasterList(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc, String[] TRPL_C_ARR, int start, int limit) {
		try {
			return paymentDAO.retrieveAffSsdyMasterList(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,start,limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 사후장려금 조회 합계*/
	public List<PaymentAffSsdyMasterVO> retrieveAffSsdySum(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc, String[] TRPL_C_ARR) {
		try {
			return paymentDAO.retrieveAffSsdySum(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 사후장려금 조회 합계에 합계 */
	public Map<String, Object> getAffSsdySumTotal(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc, String[] TRPL_C_ARR) {
		try {
			return paymentDAO.getAffSsdySumTotal(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 사후장려금 마스터 페이지 추가 */
	public int getAffSsdyCount(String searchDateType, String fromDate,
			String toDate, String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR) {
		try {
			return paymentDAO.getAffSsdyCount(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 사후장려금 디테일 그리드 조회*/
	public List<PaymentAffSsdyDetailVO> retrieveAffSsdyDetailList(
			String phdNaBzplc, String naTrDsc, 
			String naBlbDfcDsc, String trDt, String pyPlaDt, String naCrcCanDsc, 
			String naTeamC, String slplNaTrplC, String slplNaTeamC, String buyplNaTrplC,
			String buyplNaTeamC, String naAdjplC, String adjplNaTeamC) {
		try {
			return paymentDAO.retrieveAffSsdyDetailList(phdNaBzplc,naTrDsc,naBlbDfcDsc,
																		trDt,pyPlaDt,naCrcCanDsc,
																		naTeamC,slplNaTrplC,slplNaTeamC,
																		buyplNaTrplC,buyplNaTeamC,naAdjplC,
																		adjplNaTeamC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 기타당좌자산 마스터 그리드 조회*/
	public List<PaymentEtcCaAsetMasterVO> retrieveEtcCaAsetMasterList(
			String searchDateType, String fromDate, String toDate,
			String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR, int start, int limit) {
		try {
			return paymentDAO.retrieveEtcCaAsetMasterList(searchDateType,fromDate,toDate,
																				canType,tradeType,upyamOcuYn,
																				naBzplc,serachType,edtSlpno,
																				TRPL_C_ARR,
																				start, limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 기타당좌자산 디테일 그리드 조회*/
	public List<PaymentEtcCaAsetDetailVO> retrieveEtcCaAsetDetailList(
			String naBbzplc, String naTeamC, String slpDt, String naSlpno) {
		try {
			return paymentDAO.retrieveEtcCaAsetDetailList(naBbzplc,naTeamC,slpDt, naSlpno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 사후장려금 마스터 엑셀 다운로드*/
	public void downloadExcelAffSsdyMaster(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			paymentDAO.downloadExcelAffSsdyMaster(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 사후장려금 디테일 엑셀 다운로드*/
	public void downloadExcelAffSsdyDetail(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, String phdNaBzplc, String naTrDsc,
			String naBlbDfcDsc, String trDt, String pyPlaDt,
			String naCrcCanDsc, String naTeamC, String slplNaTrplC,
			String slplNaTeamC, String buyplNaTrplC, String buyplNaTeamC,
			String naAdjplC, String adjplNaTeamC, ExcelFileMakerResultHandler handler) {
		try {
			paymentDAO.downloadExcelAffSsdyDetail(
					searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,
					phdNaBzplc,naTrDsc,naBlbDfcDsc,
					trDt,pyPlaDt,naCrcCanDsc,
					naTeamC,slplNaTrplC,slplNaTeamC,
					buyplNaTrplC,buyplNaTeamC,naAdjplC,
					adjplNaTeamC, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 사후장려금 엑셀 상세 상품 합계 다운로드*/
	public void downloadExcelAffSsdyWrsSum(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			paymentDAO.downloadExcelAffSsdyWrsSum(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 기타당좌자산 마스터그리드 엑셀 다운로드*/
	public void downloadExcelEtcCaAsetMaster(
			String searchDateType, String fromDate, String toDate,
			String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			paymentDAO.downloadExcelEtcCaAsetMaster(searchDateType,fromDate,toDate,
																				canType,tradeType,upyamOcuYn,
																				naBzplc,serachType,edtSlpno,
																				TRPL_C_ARR, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelEtcCaAsetDetail(
			String searchDateType, String fromDate, String toDate,
			String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR, String naBbzplc, String naTeamC, String slpDt,
			String naSlpno, ExcelFileMakerResultHandler handler) {
		try {
			paymentDAO.downloadExcelEtcCaAsetDetail(searchDateType,fromDate,toDate,
																				canType,tradeType,upyamOcuYn,
																				naBzplc,serachType,edtSlpno,
																				TRPL_C_ARR,
																				naBbzplc,naTeamC,slpDt, naSlpno, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 기타당좌자산 엑셀 상세 다운로드*/
	public void downloadExcelEtcCaAsetD(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			paymentDAO.downloadExcelEtcCaAsetD(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 기타당좌자산 마스터 카운트*/
	public int getEtcCaAsetCount(String searchDateType, String fromDate,
			String toDate, String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR) {
		try {
			return paymentDAO.getEtcCaAsetCount(searchDateType,fromDate,toDate,
																				canType,tradeType,upyamOcuYn,
																				naBzplc,serachType,edtSlpno,
																				TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 기타당좌자산 마스터 합계*/
	public Map<String, Object> getEtcCaAsetTotal(String searchDateType, String fromDate,
			String toDate, String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR) {
		try {
			return paymentDAO.getEtcCaAsetTotal(searchDateType,fromDate,toDate,
																				canType,tradeType,upyamOcuYn,
																				naBzplc,serachType,edtSlpno,
																				TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 사후장려금 마스터 합계*/
	public Map<String, Object> getAffSsdyMasterTotal(String searchDateType, String fromDate,
			String toDate, String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR) {
		try {
			return paymentDAO.getAffSsdyMasterTotal(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*사후장려금 실적조회 R1 마스터 그리드	 - 엑셀상세 다운로드*/
	public void downloadExcelAffSsdyMM(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			paymentDAO.downloadExcelAffSsdyMM(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	
	
	

	


}
