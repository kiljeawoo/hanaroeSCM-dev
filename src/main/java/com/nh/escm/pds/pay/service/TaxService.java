package com.nh.escm.pds.pay.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pay.dao.TaxDAO;
import com.nh.escm.pds.pay.vo.TaxByngPrintVO;
import com.nh.escm.pds.pay.vo.TaxByngVO;
import com.nh.escm.pds.pay.vo.TaxSlamDetailVO;
import com.nh.escm.pds.pay.vo.TaxSlamMasterVO;

/**
 * 정산정보 - Tax
 * @author HyeRim.Oh
 *
 */
@Service
public class TaxService extends AbstractService {
	
	@Autowired
	private TaxDAO taxDAO;

	/* 세무매출 마스터 조회*/
	public List<TaxSlamMasterVO> retrieveSlamMasterList(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team,
			String[] TRPL_C_ARR) {
		try {
			return taxDAO.retrieveSlamMasterList(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					receiptType, voucherType,na_team, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 세무매출 디테일 조회*/
	public List<TaxSlamDetailVO> retrieveSlamDetailList(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team, String trpl_rlno,
			String[] TRPL_C_ARR) {
		try {
			return taxDAO.retrieveSlamDetailList(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					receiptType, voucherType,na_team, trpl_rlno, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 세무매출 마스터 엑셀 다운로드*/	
	public void downloadExcelSlamMaster(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			taxDAO.downloadExcelSlamMaster(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					receiptType, voucherType,na_team, TRPL_C_ARR, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 세무매출 디테일 엑셀 다운로드*/	
	public void downloadExcelSlamDetail(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team, String trpl_rlno,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		try {
			taxDAO.downloadExcelSlamDetail(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					receiptType, voucherType,na_team, trpl_rlno, TRPL_C_ARR, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//매입 조회 페이지 추가
	public List<TaxByngVO> retrieveByngList(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String txType, String voucherType, String na_team,
			String[] TRPL_C_ARR, int start, int end) {
		try {
			return taxDAO.retrieveByngList(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					txType, voucherType,na_team, TRPL_C_ARR, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//매입 총 카운트
	public int getByngListCount(String searchDateType, String fromDate,
			String toDate, String totalType, String rotsCtrDsc,
			String centerNaBzplc, String naBzplc, String txType,
			String voucherType, String na_team, String[] TRPL_C_ARR) {
		try {
			return taxDAO.getByngListCount(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					txType, voucherType,na_team, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//매입 총 합계
	public Map<String, Object> getByngListTotal(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String txType, String voucherType, String na_team,
			String[] TRPL_C_ARR) {
		try {
			return taxDAO.getByngListTotal(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					txType, voucherType,na_team, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	//매입 프린트
	public List<TaxByngPrintVO> printByngList(String NA_BZPLC,
			String TXBZ_TOT_RG_SQNO) {
		try {
			return taxDAO.printByngList(NA_BZPLC, TXBZ_TOT_RG_SQNO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadByngList(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String txType, String voucherType, String na_team,
			String[] TRPL_C_ARR, int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			taxDAO.downloadByngList(searchDateType, fromDate,
					toDate, totalType, rotsCtrDsc, centerNaBzplc, naBzplc,
					txType, voucherType,na_team, TRPL_C_ARR, start, end, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
}
