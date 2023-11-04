package com.nh.escm.pds.pay.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pay.vo.PaymentAffSsdyDetailVO;
import com.nh.escm.pds.pay.vo.PaymentAffSsdyMasterVO;
import com.nh.escm.pds.pay.vo.PaymentEtcCaAsetDetailVO;
import com.nh.escm.pds.pay.vo.PaymentEtcCaAsetMasterVO;

/**
 * 정산정보 - 사후장려금, 기타당좌산 회수내역
 * @author HyeRim.Oh
 *
 */
public class PaymentDAO extends AbstractDao {

	/* 사후장려금 마스터 그리드 조회*/
	public List<PaymentAffSsdyMasterVO> retrieveAffSsdyMasterList(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc, String[] TRPL_C_ARR,
			int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("start", start);
		param.put("end", limit);
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveAffSsdyMasterList : " + param);
		}
		return getSqlSession().selectList("paymentDAO.retrieveAffSsdyMasterList", param);
	}
	
	/* 사후장려금 조회 합계*/
	public List<PaymentAffSsdyMasterVO> retrieveAffSsdySum(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
						
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveAffSsdySum : " + param);
		}
		return getSqlSession().selectList("paymentDAO.retrieveAffSsdySum", param);
	}
	
	/* 사후장려금 마스터 페이지 추가*/
	public int getAffSsdyCount(String searchDateType, String fromDate,
			String toDate, String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getAffSsdyCount : " + param);
		}
		return getSqlSession().selectOne("paymentDAO.getAffSsdyCount", param);
	}

	/* 사후장려금 디테일 그리드 조회*/
	public List<PaymentAffSsdyDetailVO> retrieveAffSsdyDetailList(
			String phdNaBzplc, String naTrDsc,
			String naBlbDfcDsc, String trDt, String pyPlaDt, String naCrcCanDsc,
			String naTeamC, String slplNaTrplC, String slplNaTeamC, String buyplNaTrplC,
			String buyplNaTeamC, String naAdjplC, String adjplNaTeamC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PHD_NA_BZPLC", phdNaBzplc);  //물류경제통합사업장코드
		param.put("NA_TR_DSC", naTrDsc);  //경제통합거래구분코드
		param.put("NA_BLB_DFC_DSC", naBlbDfcDsc);  //경제통합흑자적자구분코드
		param.put("TR_DT", trDt);  //거래일자
		param.put("PY_PLA_DT", pyPlaDt);  //지급예정일자
		param.put("NA_CRC_CAN_DSC", naCrcCanDsc);  //경제통합정정취소구분코드
		
		param.put("NA_TEAM_C", naTeamC);  //경제통합팀코드
		param.put("SLPL_NA_TRPL_C", slplNaTrplC);  //매출처경제통합거래처코드
		param.put("SLPL_NA_TEAM_C", slplNaTeamC);  //매출처경제통합팀코드
		param.put("BUYPL_NA_TRPL_C", buyplNaTrplC);  ///매입처경제통합거래처코드
		param.put("BUYPL_NA_TEAM_C", buyplNaTeamC);  //매입처경제통합팀코드
		param.put("NA_ADJPL_C", naAdjplC);  //경제통합정산처코드
		param.put("ADJPL_NA_TEAM_C", adjplNaTeamC);  //정산처경제통합팀코드

		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveAffSsdyDetailList : " + param);
		}
		return getSqlSession().selectList("paymentDAO.retrieveAffSsdyDetailList", param);
	}	
	
	/* 기타당좌자산 마스터 그리드 조회*/
	public List<PaymentEtcCaAsetMasterVO> retrieveEtcCaAsetMasterList(
			String searchDateType, String fromDate, String toDate,
			String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR,
			int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("UPYAM_OCU_YN", upyamOcuYn);  //미수금계정여부		
		param.put("NA_BZPLC", naBzplc);  //농협사업장
		param.put("SEARCH_TYPE", serachType);  //조회구분
		param.put("NA_SLPNO", edtSlpno);  //전표번호
		
		param.put("start", start);
		param.put("end", limit);
			
		param.put("srhTrplC", TRPL_C_ARR);  // 거래처코드 

		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEtcCaAsetMasterList : " + param);
		}
		return getSqlSession().selectList("paymentDAO.retrieveEtcCaAsetMasterList", param);
	}

	/* 기타당좌자산 디테일 그리드 조회*/
	public List<PaymentEtcCaAsetDetailVO> retrieveEtcCaAsetDetailList(
			String naBbzplc, String naTeamC, String slpDt, String naSlpno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBbzplc);  //경제통합사업장코드
		param.put("NA_TEAM_C", naTeamC);  //경제통합팀코드
		param.put("SLP_DT", slpDt);  //전표일자
		param.put("NA_SLPNO", naSlpno);  //경제통합전표번호

		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEtcCaAsetDetailList : " + param);
		}
		return getSqlSession().selectList("paymentDAO.retrieveEtcCaAsetDetailList", param);
	}

	/* 사후장려금 마스터 엑셀 다운로드*/
	public void downloadExcelAffSsdyMaster(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelAffSsdyMaster : " + param);
		}
		getSqlSession().select("paymentDAO.downloadExcelAffSsdyMaster", param, handler);
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
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		param.put("PHD_NA_BZPLC", phdNaBzplc);  //물류경제통합사업장코드
		param.put("NA_TR_DSC", naTrDsc);  //경제통합거래구분코드
		param.put("NA_BLB_DFC_DSC", naBlbDfcDsc);  //경제통합흑자적자구분코드
		param.put("TR_DT", trDt);  //거래일자
		param.put("PY_PLA_DT", pyPlaDt);  //지급예정일자
		param.put("NA_CRC_CAN_DSC", naCrcCanDsc);  //경제통합정정취소구분코드
		
		param.put("NA_TEAM_C", naTeamC);  //경제통합팀코드
		param.put("SLPL_NA_TRPL_C", slplNaTrplC);  //매출처경제통합거래처코드
		param.put("SLPL_NA_TEAM_C", slplNaTeamC);  //매출처경제통합팀코드
		param.put("BUYPL_NA_TRPL_C", buyplNaTrplC);  ///매입처경제통합거래처코드
		param.put("BUYPL_NA_TEAM_C", buyplNaTeamC);  //매입처경제통합팀코드
		param.put("NA_ADJPL_C", naAdjplC);  //경제통합정산처코드
		param.put("ADJPL_NA_TEAM_C", adjplNaTeamC);  //정산처경제통합팀코드
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelAffSsdyDetail : " + param);
		}
		getSqlSession().select("paymentDAO.downloadExcelAffSsdyDetail", param, handler);
	}
	
	/* 사후장려금 엑셀 상세 상품 합계 다운로드*/
	public void downloadExcelAffSsdyWrsSum(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelAffSsdyWrsSum : " + param);
		}
		getSqlSession().select("paymentDAO.downloadExcelAffSsdyWrsSum", param, handler);
	}

	/* 기타당좌자산 마스터그리드 엑셀 다운로드*/
	public void downloadExcelEtcCaAsetMaster(
			String searchDateType, String fromDate, String toDate,
			String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("UPYAM_OCU_YN", upyamOcuYn);  //미수금계정여부		
		param.put("NA_BZPLC", naBzplc);  //농협사업장
		param.put("SEARCH_TYPE", serachType);  //조회구분
		param.put("NA_SLPNO", edtSlpno);  //전표번호
			
		param.put("srhTrplC", TRPL_C_ARR);  // 거래처코드 

		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelEtcCaAsetMaster : " + param);
		}
		getSqlSession().select("paymentDAO.downloadExcelEtcCaAsetMaster", param, handler);
	}

	/* 기타당좌자산 디테일그리드 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelEtcCaAsetDetail(
			String searchDateType, String fromDate, String toDate,
			String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR, String naBbzplc, String naTeamC, String slpDt,
			String naSlpno, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("UPYAM_OCU_YN", upyamOcuYn);  //미수금계정여부		
		param.put("NA_BZPLC", naBzplc);  //농협사업장
		param.put("SEARCH_TYPE", serachType);  //조회구분
		param.put("EDTSLPNO", edtSlpno);  //전표번호
			
		param.put("srhTrplC", TRPL_C_ARR);  // 거래처코드
		
		param.put("NABBZPLC", naBbzplc);  //경제통합사업장코드
		param.put("NA_TEAM_C", naTeamC);  //경제통합팀코드
		param.put("SLP_DT", slpDt);  //전표일자
		param.put("NA_SLPNO", naSlpno);  //경제통합전표번호

		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelEtcCaAsetDetail : " + param);
		}
		return getSqlSession().selectList("paymentDAO.downloadExcelEtcCaAsetDetail", param);
	}
	
	/* 기타당좌자산 엑셀 상세 다운로드*/
	public void downloadExcelEtcCaAsetD(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelEtcCaAsetD : " + param);
		}
		getSqlSession().select("paymentDAO.downloadExcelEtcCaAsetD", param, handler);
	}

	public int getEtcCaAsetCount(String searchDateType, String fromDate,
			String toDate, String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("UPYAM_OCU_YN", upyamOcuYn);  //미수금계정여부		
		param.put("NA_BZPLC", naBzplc);  //농협사업장
		param.put("SEARCH_TYPE", serachType);  //조회구분
		param.put("NA_SLPNO", edtSlpno);  //전표번호
			
		param.put("srhTrplC", TRPL_C_ARR);  // 거래처코드 

		if(logger.isDebugEnabled()){
			logger.debug(">>> getEtcCaAsetCount : " + param);
		}
		return getSqlSession().selectOne("paymentDAO.getEtcCaAsetCount", param);
	}
	
	/* 기타당좌자산 마스터 합계*/
	public Map<String, Object> getEtcCaAsetTotal(String searchDateType, String fromDate,
			String toDate, String canType, String tradeType, String upyamOcuYn,
			String naBzplc, String serachType, String edtSlpno,
			String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("UPYAM_OCU_YN", upyamOcuYn);  //미수금계정여부		
		param.put("NA_BZPLC", naBzplc);  //농협사업장
		param.put("SEARCH_TYPE", serachType);  //조회구분
		param.put("NA_SLPNO", edtSlpno);  //전표번호
			
		param.put("srhTrplC", TRPL_C_ARR);  // 거래처코드 

		if(logger.isDebugEnabled()){
			logger.debug(">>> getEtcCaAsetTotal : " + param);
		}
		return getSqlSession().selectOne("paymentDAO.getEtcCaAsetTotal", param);
	}

	/* 사후장려금 마스터 합계*/
	public Map<String, Object> getAffSsdyMasterTotal(String searchDateType, String fromDate,
			String toDate, String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getAffSsdyMasterTotal : " + param);
		}
		return getSqlSession().selectOne("paymentDAO.getAffSsdyMasterTotal", param);
	}

	public Map<String, Object> getAffSsdySumTotal(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장
						
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getAffSsdySumTotal : " + param);
		}
		return getSqlSession().selectOne("paymentDAO.getAffSsdySumTotal", param);
	}

	/*사후장려금 실적조회 R1 마스터 그리드	 - 엑셀상세 다운로드*/
	public void downloadExcelAffSsdyMM(
			String searchDateType, String fromDate, String toDate,
			String tradeType, String canType, String naBzplc,
			String[] TRPL_C_ARR, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_TR_DSC", tradeType);  //거래구분
		param.put("NA_CRC_CAN_DSC", canType);  //정정취소구분
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelAffSsdyMM : " + param);
		}
		getSqlSession().select("paymentDAO.downloadExcelAffSsdyMM", param, handler);
	}

}

