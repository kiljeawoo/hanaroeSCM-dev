package com.nh.escm.pds.pay.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pay.vo.TaxByngPrintVO;
import com.nh.escm.pds.pay.vo.TaxByngVO;
import com.nh.escm.pds.pay.vo.TaxSlamDetailVO;
import com.nh.escm.pds.pay.vo.TaxSlamMasterVO;

/**
 * 정산정보 - Tax
 * @author HyeRim.Oh
 *
 */
public class TaxDAO extends AbstractDao {

	/* 세무매출 마스터 조회*/
	public List<TaxSlamMasterVO> retrieveSlamMasterList(String searchDateType, String fromDate,
			String toDate, String totalType, String rotsCtrDsc,
			String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team,
			String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("RC_YN", receiptType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSlamMasterList : " + param);
		}
		return getSqlSession().selectList("taxDAO.retrieveSlamMasterList", param);
	}

	/* 세무매출 디테일 조회*/
	public List<TaxSlamDetailVO> retrieveSlamDetailList(String searchDateType, String fromDate,
			String toDate, String totalType, String rotsCtrDsc,
			String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team, String trpl_rlno,
			String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("RC_YN", receiptType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
		param.put("TRPL_RLNO", trpl_rlno);
				
		param.put("srhTrplC", TRPL_C_ARR);	
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSlamDetailList : " + param);
		}
		return getSqlSession().selectList("taxDAO.retrieveSlamDetailList", param);
	}
	
	/* 세무매출 마스터 엑셀 다운로드*/	
	public void downloadExcelSlamMaster(String searchDateType, String fromDate,
			String toDate, String totalType, String rotsCtrDsc,
			String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("RC_YN", receiptType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSlamMaster : " + param);
		}
		getSqlSession().select("taxDAO.downloadExcelSlamMaster", param, handler);
	}
	
	/* 세무매출 디테일 엑셀 다운로드*/	
	public void downloadExcelSlamDetail(String searchDateType, String fromDate,
			String toDate, String totalType, String rotsCtrDsc,
			String centerNaBzplc, String naBzplc,
			String receiptType, String voucherType,String na_team, String trpl_rlno,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("RC_YN", receiptType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
		param.put("TRPL_RLNO", trpl_rlno);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelSlamDetail : " + param);
		}
		getSqlSession().select("taxDAO.downloadExcelSlamDetail", param, handler);
	}
	

	//매입 조회 페이지 추가
	public List<TaxByngVO> retrieveByngList(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String txType, String voucherType, String na_team,
			String[] TRPL_C_ARR, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("TXBZ_TP_DSC", txType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveByngList : " + param);
		}
		return getSqlSession().selectList("taxDAO.retrieveByngList", param);
	}

	//매입 총 카운트
	public int getByngListCount(String searchDateType, String fromDate,
			String toDate, String totalType, String rotsCtrDsc,
			String centerNaBzplc, String naBzplc, String txType,
			String voucherType, String na_team, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("TXBZ_TP_DSC", txType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getByngListCount : " + param);
		}
		return getSqlSession().selectOne("taxDAO.getByngListCount", param);
	}

	//매입 총 합계
	public Map<String, Object> getByngListTotal(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String txType, String voucherType, String na_team,
			String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("TXBZ_TP_DSC", txType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getByngListTotal : " + param);
		}
		return getSqlSession().selectOne("taxDAO.getByngListTotal", param);
	}

	public List<TaxByngPrintVO> printByngList(String NA_BZPLC,
			String TXBZ_TOT_RG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("TXBZ_TOT_RG_SQNO", TXBZ_TOT_RG_SQNO);
		/*param.put("srhTrplC", TRPL_C_ARR);*/
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printByngList : " + param);
		}
		return getSqlSession().selectList("taxDAO.printByngList", param);
	}

	public void downloadByngList(String searchDateType,
			String fromDate, String toDate, String totalType,
			String rotsCtrDsc, String centerNaBzplc, String naBzplc,
			String txType, String voucherType, String na_team,
			String[] TRPL_C_ARR, int start, int end, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TOT_DSC", totalType);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("CENTER_NA_BZPLC", centerNaBzplc);
		param.put("NA_BZPLC", naBzplc);
		param.put("TXBZ_TP_DSC", txType);
		param.put("NA_SOAC_DSC", voucherType);
		param.put("NA_TEAM_C", na_team);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadByngList : " + param);
		}
		getSqlSession().select("taxDAO.downloadByngList", param, handler);
	}
}
