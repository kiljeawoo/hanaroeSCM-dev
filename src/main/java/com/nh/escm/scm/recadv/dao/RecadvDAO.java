package com.nh.escm.scm.recadv.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.common.BillingMarkUpResultHandler;
import com.nh.escm.common.vo.TbCmBzplVO;
import com.nh.escm.scm.recadv.vo.RecadvDetailVO;
import com.nh.escm.scm.recadv.vo.RecadvDirectDetailVO;
import com.nh.escm.scm.recadv.vo.RecadvDirectMasterVO;
import com.nh.escm.scm.recadv.vo.RecadvMasterVO;
import com.nh.escm.scm.recadv.vo.RecadvMasterVO_WRS;
import com.nh.escm.scm.recadv.vo.RecadvMaster_NA_TRPL_C_VO;

public class RecadvDAO extends AbstractDao {
	public List<Map<String, Object>> retrieveCommissionList(
			String naBzplc,
			String naTeamC,
			String slpDt,
			String naSlpno,
			long slpSqno,
			String CNR_DS_AM
			) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("SLP_SQNO", slpSqno);
		param.put("CNR_DS_AM", CNR_DS_AM);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveCommissionList >>>>> params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveCommissionList", param);
	}
		
	public List<RecadvMasterVO> retrieveRecadvSlpMasterList(
			String[] TRPL_C_ARR,
			String searchDateType,
			String fromDate,
			String toDate,
			String tradeType,
			String cnfmYn,
			String isNaAll,
			String naBzplc,
			String rotsCtrDsc,
			int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("CNFM_YN", cnfmYn);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlpMasterList params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlpMasterList", param);
	}

	public List<RecadvDetailVO> retrieveRecadvSlpDetailList(String naBzplc,
			String naTeamC, String slpDt, String naSlpno,String rpyPlaDt, int start, int end) {		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("RPY_PLA_DT", rpyPlaDt);
		//param.put("SLP_SQNO", SLP_SQNO);
		//param.put("NA_WRS_C", NA_WRS_C);
		
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveRecadvSlpDetailList >>>>> params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlpDetailList", param);
	}

	public List<RecadvDirectMasterVO> retrieveRecadvDdlyMasterList(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("DDLY_BUYPL_NA_TRPL_C", ddlyBuyplNaTrplC);
		
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveRecadvDdlyMasterList >>>>> params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvDdlyMasterList", param);
	}

	public List<RecadvDirectDetailVO> retrieveRecadvDdlyDetailList(String naBzplc,
			String naTeamC, String slpDt, String naSlpno,String rpyPlaDt, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("RPY_PLA_DT", rpyPlaDt);
		
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveRecadvDdlyDetailList >>>>> params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvDdlyDetailList", param);
	}

	public List<TbCmBzplVO> getDdlyNABizPlace(String splrNaTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SPLR_NA_TRPL_C", splrNaTrplC);

		return getSqlSession().selectList("recadvDAO.getDdlyNABizPlace", param);
	}

	/* 검수 전표별 마스터 그리드 엑셀 다운로드 */
	public void downloadExcelRecadvSlpMaster(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		param.put("CNFM_YN", cnfmYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpMaster params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpMaster", param, handler);
	}
	
	/* 검수 전표별 디테일 그리드 엑셀 다운로드 */
	public void downloadExcelRecadvSlpDetail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno,String rpyPlaDt,ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("RPY_PLA_DT", rpyPlaDt);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpDetail params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpDetail", param, handler);
	}
	
	/* 검수실적-전표별 전표 상품 수수료 합계  엑셀 다운로드 */
	public void downloadExcelRecadvSlpCommisionSum(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		param.put("CNFM_YN", cnfmYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpCommisionSum params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpCommisionSum", param, handler);
	}
	
	/* 검수실적-전표별 전표 상품 수수료 상세  엑셀 다운로드 */
	public void downloadExcelRecadvSlpCommisionDetail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		param.put("CNFM_YN", cnfmYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpCommisionDetail params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpCommisionDetail", param, handler);
	}
	
	/* 검수실적 - 직송분 마스터 엑셀 다운로드 */
	public void downloadExcelRecadvDdlyMaster(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("DDLY_BUYPL_NA_TRPL_C", ddlyBuyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelRecadvDdlyMaster >>>>> params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvDdlyMaster", param, handler);		
	}
	
	/* 검수실적-직송분 전표 상품 수수료 합계  엑셀 다운로드 */
	public void downloadExcelRecadvDdlyCommisionSum(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvDdlyCommisionSum params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvDdlyCommisionSum", param, handler);
	}
	
	/* 검수실적-직송분 전표 상품 수수료 상세  엑셀 다운로드 */
	public void downloadExcelRecadvDdlyCommisionDetail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvDdlyCommisionDetail params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvDdlyCommisionDetail", param, handler);
	}

	/* 검수실적 전표별 총 카운트*/
	public int getRecadvSlpCount(String[] TRPL_C_ARR, String searchDateType,
			String fromDate, String toDate, String tradeType, String isNaAll,
			String naBzplc, String rotsCtrDsc) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>getRecadvSlpCount params : " + param);
		}
		
		return getSqlSession().selectOne("recadvDAO.getRecadvSlpCount", param);
	}

	/* 검수실적 전표별 합계*/
	public RecadvMasterVO getRecadvSlpTotal(String[] TRPL_C_ARR,
			String searchDateType, String fromDate, String toDate,
			String tradeType, String isNaAll, String naBzplc, String rotsCtrDsc) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>getRecadvSlpTotal params : " + param);
		}
		
		return getSqlSession().selectOne("recadvDAO.getRecadvSlpTotal", param);
	}

	/* 검수실적 전표별 디테일 페이지 카운트 */
	public int getRecadvSlpDetailCount(String naBzplc, String naTeamC,
			String slpDt, String naSlpno, String rpyPlaDt) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("RPY_PLA_DT", rpyPlaDt);
		//param.put("SLP_SQNO", SLP_SQNO);
		//param.put("NA_WRS_C", NA_WRS_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getRecadvSlpDetailCount >>>>> params : " + param);
		}
		
		return getSqlSession().selectOne("recadvDAO.getRecadvSlpDetailCount", param);
	}

	/* 검수실적 직송분 마스터 총 카운트*/
	public int getRecadvDdlyCount(String[] TRPL_C_ARR, String searchDateType,
			String fromDate, String toDate, String tradeType, String isNaAll,
			String naBzplc, String rotsCtrDsc, String ddlyBuyplNaTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("DDLY_BUYPL_NA_TRPL_C", ddlyBuyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getRecadvDdlyCount >>>>> params : " + param);
		}
		
		return getSqlSession().selectOne("recadvDAO.getRecadvDdlyCount", param);
	}

	/* 검수실적 직송분 마스터 합계*/
	public RecadvDirectMasterVO getRecadvDdlyTotal(String[] TRPL_C_ARR,
			String searchDateType, String fromDate, String toDate,
			String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("DDLY_BUYPL_NA_TRPL_C", ddlyBuyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getRecadvDdlyTotal >>>>> params : " + param);
		}
		
		return getSqlSession().selectOne("recadvDAO.getRecadvDdlyTotal", param);
	}

	/* 검수실적 직송분 디테일 카운트 */
	public int getRecadvDdlyDetailCount(String naBzplc, String naTeamC,
			String slpDt, String naSlpno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getRecadvDdlyDetailCount >>>>> params : " + param);
		}
		
		return getSqlSession().selectOne("recadvDAO.getRecadvDdlyDetailCount", param);
	}

	public List<Map<String, Object>> printCommissionList(String naBzplc,
			String naTeamC, String slpDt, String naSlpno, long slpSqno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> printCommissionList >>>>> params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.printCommissionList", param);
	}	
	
	//검수 실적 전표별 사후장려금
	public Map<String, Object> getBlbSpyAm(String[] TRPL_C_ARR, String searchDateType,
			String fromDate, String toDate, String tradeType, String isNaAll,
			String naBzplc, String rotsCtrDsc) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getBlbSpyAm >>>>> params : " + param);
		}		
	
		return getSqlSession().selectOne("recadvDAO.getBlbSpyAm", param);
	}

	//검수실적 매입처별 조회
	public List<RecadvMaster_NA_TRPL_C_VO> retrieveRecadvSlpMasterList_NA_TRPL_C(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlpMasterList_NA_TRPL_C params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlpMasterList_NA_TRPL_C", param);
		
	}

	//검수실적 매입처별 상세 조회
	public List<RecadvMaster_NA_TRPL_C_VO> retrieveRecadvSlp_NA_TRPL_C_Detail(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String MNGT_NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlp_NA_TRPL_C_Detail params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlp_NA_TRPL_C_Detail", param);
	}

	//매입처별 마스터 엑셀
	public List<Map<String, Object>> downloadExcelRecadvSlp_NA_TRPL_C_M(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlp_NA_TRPL_C_M params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.downloadExcelRecadvSlp_NA_TRPL_C_M", param);
	}

	//매입처별 상세 엑셀
	public void downloadExcelRecadvSlp_NA_TRPL_C_D(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String MNGT_NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlp_NA_TRPL_C_D params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlp_NA_TRPL_C_D", param, handler);
	}

	//검수실적 상품별 첫번째그리드 조회
	public List<RecadvMasterVO_WRS> retrieveRecadvSlpMasterList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlpMasterList_WRS params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlpMasterList_WRS", param);
	}

	//검수실적 상품별 엑셀 버튼
	public List<Map<String, Object>> downloadExcelRecadvSlpMasterList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpMasterList_WRS params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.downloadExcelRecadvSlpMasterList_WRS", param);
	}
	
	//검수실적 상품별 전표 상품 수수료 엑셀 빌링
	public List<Map<String, Object>> downloadExcelRecadvSlpMasterList_WRS_billing(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpMasterList_WRS_billing params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.downloadExcelRecadvSlpMasterList_WRS_billing", param);
	}

	//검수실적 상품별 두번째 그리드
	public List<Map<String, Object>> retrieveRecadvSlpDetailList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlpDetailList_WRS params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlpDetailList_WRS", param);
	}

	//검수실적 상품별 세번째 그리드
	public List<Map<String, Object>> retrieveRecadvSlpDetail2List_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code,String MNGT_NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C); //두번째 그리드 내에 실매입처명
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlpDetail2List_WRS params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlpDetail2List_WRS", param);
	}

	//검수실적 상품별 세번째 그리드 합계
	public Map<String, Object> retrieveRecadvSlpDetail2List_WRS_SUM(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, String MNGT_NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C); //두번째 그리드 내에 실매입처명
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlpDetail2List_WRS_SUM params : " + param);
		}
		
		return getSqlSession().selectOne("recadvDAO.retrieveRecadvSlpDetail2List_WRS_SUM", param);
	}

	//검수실적 상품별 세번째 그리드: 배송예정서 제외 간략버전
	public List<Map<String, Object>> retrieveRecadvSlpDetail3List_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code,String MNGT_NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C); //두번째 그리드 내에 실매입처명
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvSlpDetail3List_WRS params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvSlpDetail3List_WRS", param);
	}

	//매입실적 마스터 조회
	public List<Map<String, Object>> retrieveRecadvResult(String[] TRPL_C_ARR,
			String fromDate, String toDate, String rotsCtrDsc, String naBzplc,
			String naSlpno, String buyplNaTrplC, String naTeamC, String buyplNaTeamC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);		
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_SLPNO", naSlpno);
		param.put("BUYPL_NA_TRPL_C", buyplNaTrplC);				
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("BUYPL_NA_TEAM_C", buyplNaTeamC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvResult params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvResult", param);
	}

	//매입실적 디테일 조회
	public List<Map<String, Object>> retrieveRecadvResultDetail(String naBzplc,
			String naTeamC, String slpDt, String naSlpno, String buyplNaTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_BZPLC", naTeamC);		
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("BUYPL_NA_TRPL_C", buyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>retrieveRecadvResultDetail params : " + param);
		}
		
		return getSqlSession().selectList("recadvDAO.retrieveRecadvResultDetail", param);
	}
	
	//매입처별 마스터 엑셀
	public void downloadExcelRecadvSlp_NA_TRPL_C_M_NEW(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlp_NA_TRPL_C_M_NEW params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlp_NA_TRPL_C_M_NEW", param, handler);
	}

	public void downloadExcelRecadvSlpMasterList_WRS_NEW(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpMasterList_WRS_NEW params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpMasterList_WRS_NEW", param, handler);
	}

	public void downloadExcelRecadvSlpDetailList_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpDetailList_WRS params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpDetailList_WRS", param, handler);
	}

	public void downloadExcelRecadvSlpMaster_Join(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpMaster_Join params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpMaster_Join", param, handler);
	}

	public void downloadExcelRecadvDdlyMaster_Join(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("DDLY_BUYPL_NA_TRPL_C", ddlyBuyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelRecadvDdlyMaster_Join >>>>> params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvDdlyMaster_Join", param, handler);		
	}

	public void downloadExcelRetrieveRecadvResult(String[] TRPL_C_ARR,
			String fromDate, String toDate, String rotsCtrDsc, String naBzplc,
			String naSlpno, String buyplNaTrplC, String naTeamC, String buyplNaTeamC, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);		
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("NA_BZPLC", naBzplc);
		param.put("NA_SLPNO", naSlpno);
		param.put("BUYPL_NA_TRPL_C", buyplNaTrplC);				
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("BUYPL_NA_TEAM_C", buyplNaTeamC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRetrieveRecadvResult params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRetrieveRecadvResult", param, handler);
	}

	public void downloadExcelRecadvSlpDetail2List_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code,String MNGT_NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C); //두번째 그리드 내에 실매입처명
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpDetail2List_WRS params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpDetail2List_WRS", param, handler);
	}

	public void downloadExcelRecadvSlpDetail3List_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code,String MNGT_NA_TRPL_C, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C); //두번째 그리드 내에 실매입처명
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpDetail3List_WRS params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpDetail3List_WRS", param, handler);
	}

	public List<Map<String, Object>> downloadExcelRecadvSlpMasterBilling_Join(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpMasterBilling_Join params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpMasterBilling_Join", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}

	/* 검수 전표별 디테일 그리드 엑셀 다운로드 */
	public List<Map<String, Object>> downloadExcelRecadvSlpDetailBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno,String rpyPlaDt) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		param.put("RPY_PLA_DT", rpyPlaDt);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpDetailBilling params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpDetailBilling", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}

	/* 검수실적-전표별 전표 상품 수수료 합계  엑셀 다운로드  Billing*/
	public List<Map<String, Object>> downloadExcelRecadvSlpCommisionSumBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		param.put("CNFM_YN", cnfmYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpCommisionSumBilling params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpCommisionSumBilling", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}

	/* 검수실적-전표별 전표 상품 수수료 상세  엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvSlpCommisionDetailBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno, String cnfmYn) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		param.put("CNFM_YN", cnfmYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpCommisionDetailBilling params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpCommisionDetailBilling", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}

	public List<Map<String, Object>> downloadExcelRecadvDdlyMasterBilling_Join(String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String ddlyBuyplNaTrplC) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		param.put("DDLY_BUYPL_NA_TRPL_C", ddlyBuyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelRecadvDdlyMasterBilling_Join >>>>> params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvDdlyMasterBilling_Join", param, new BillingMarkUpResultHandler(returnList));
		return returnList;		
	}

	/* 검수실적-직송분 전표 상품 수수료 합계  엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvDdlyCommisionSumBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvDdlyCommisionSumBilling params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvDdlyCommisionSumBilling", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}
	
	/* 검수실적-직송분 전표 상품 수수료 상세  엑셀 다운로드 Billing*/
	public List<Map<String, Object>> downloadExcelRecadvDdlyCommisionDetailBilling(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String naTeamC, String slpDt, String naSlpno,
			long slpSqno) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);		
		
		param.put("NA_TEAM_C", naTeamC);
		param.put("SLP_DT", slpDt);
		param.put("NA_SLPNO", naSlpno);
		
		param.put("SLP_SQNO", slpSqno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvDdlyCommisionDetailBilling params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvDdlyCommisionDetailBilling", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}

	public List<Map<String, Object>> downloadExcelRecadvSlpDetail2ListBilling_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code,String MNGT_NA_TRPL_C) {
		
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C); //두번째 그리드 내에 실매입처명
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpDetail2ListBilling_WRS params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpDetail2ListBilling_WRS", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}

	public List<Map<String, Object>> downloadExcelRecadvSlpDetail3ListBilling_WRS(
			String[] TRPL_C_ARR, String searchDateType, String fromDate,
			String toDate, String tradeType, String isNaAll, String naBzplc,
			String rotsCtrDsc, String wrs_code,String MNGT_NA_TRPL_C) {
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("SEARCH_DATE_TYPE", searchDateType);
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("TRADE_TYPE", tradeType);
		param.put("IS_NA_ALL", isNaAll);
		param.put("NA_BZPLC", naBzplc);
		param.put("ROTS_CTR_DSC", rotsCtrDsc);
		
		param.put("WRS_CODE", wrs_code); //상품코드
		
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C); //두번째 그리드 내에 실매입처명
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>>downloadExcelRecadvSlpDetail3ListBilling_WRS params : " + param);
		}
		
		getSqlSession().select("recadvDAO.downloadExcelRecadvSlpDetail3ListBilling_WRS", param, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}
}
