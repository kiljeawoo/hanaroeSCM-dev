package com.nh.escm.pds.outer.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pds.outer.vo.CenterLiquorVO;
import com.nh.escm.pds.outer.vo.CenterVO;

public class CenterDAO extends AbstractDao {
	
	/* 물류센터 출고실적 마스터 조회 */
	public List<CenterVO> retrieveWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);			
		param.put("NA_TR_DSC", NA_TR_DSC);		
		param.put("NA_WRS_C", naWrsC);
		param.put("start", start);
		param.put("end", limit);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveWrsMasterList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerDAO.retrieveWrsMasterList", param);
	}
	
	/* 물류센터 출고실적 마스터 페이지 추가 */
	public int getOutWrsCount(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getOutWrsCount >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerDAO.getOutWrsCount", param);
	}
	
	public List<Map<String, Object>> getBillingMarkUpTargets(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC, String GRS_SOJU_YN) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("GRS_SOJU_YN", GRS_SOJU_YN);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getBillingMarkUpTargets >>>>> params : " + param);
		}	
		if("1".equals(GRS_SOJU_YN)) {
			return getSqlSession().selectList("centerDAO.getBillingMarkUpTargetsLiquor", param);
		} else {
			return getSqlSession().selectList("centerDAO.getBillingMarkUpTargets", param);			
		}
	}
	
	
	/* 물류센터 출고실적 마스터 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelWrsMasterList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerDAO.downloadExcelWrsMasterList", param);
	}
	
	/* 물류센터 출고실적 디테일 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelWrsDetailList(String naBzplc, String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC,String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String flag, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("naBzplc", naBzplc);
		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelWrsDetailList >>>>> params : " + param);
		}	
		
		if (flag != null && "2".equals(flag)) {
			return getSqlSession().selectList("centerDAO.downloadExcelWrsDetailList2", param);
		} else {
			return getSqlSession().selectList("centerDAO.downloadExcelWrsDetailList", param);
		}
	}
	
	/* 물류센터 출고실적 디테일 조회*/
	public List<CenterVO> retrieveWrsDetailList(String phdNaBzplc,String phdDlrDsc, String prgrC,
																String naTrplC, String dateCode, String calFrom,
																String calTo,String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("phdDlrDsc", phdDlrDsc);
		param.put("prgrC", prgrC);	
		param.put("naTrplC", naTrplC);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		param.put("srhTrplC", TRPL_C_ARR);
		
		param.put("start", start);
		param.put("end", limit);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveWrsDetailList >>>>> params : " + param);
		}		
		
		return getSqlSession().selectList("centerDAO.retrieveWrsDetailList",param);
	}
	
	/* 물류센터 출고실적 디테일 페이지 추가*/
	public int getOutWrsDetailCount(String phdNaBzplc, String phdDlrDsc,
			String prgrC, String naTrplC, String dateCode, String calFrom,
			String calTo) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("phdDlrDsc", phdDlrDsc);
		param.put("prgrC", prgrC);	
		param.put("naTrplC", naTrplC);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getOutWrsDetailCount >>>>> params : " + param);
		}		
		
		return getSqlSession().selectOne("centerDAO.getOutWrsDetailCount",param);
	}

	/* 주류 물류센터 출고실적 마스터 조회*/
	public List<CenterLiquorVO> retrieveLiquorWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		param.put("start", start);
		param.put("end", limit);
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveLiquorWrsMasterList >>>>> params : " + param);
		}		
		
		return getSqlSession().selectList("centerDAO.retrieveLiquorWrsMasterList", param);
	}
	
	/* 주류 물류센터 출고실적 마스터 페이지 추가*/
	public int getOutLiquorWrsMasterCount(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getOutLiquorWrsMasterCount >>>>> params : " + param);
		}		
		
		return getSqlSession().selectOne("centerDAO.getOutLiquorWrsMasterCount", param);
	}

	/* 주류 물류센터 출고실적 디테일 조회*/
	public List<CenterLiquorVO> retrieveLiquorWrsDetailList(String phdNaBzplc,String phdDlrDsc, String prgrC,
																				String naTrplC, String dateCode, String calFrom,
																				String calTo,String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("phdNaBzplc", phdNaBzplc);
		param.put("phdDlrDsc", phdDlrDsc);
		param.put("prgrC", prgrC);	
		param.put("naTrplC", naTrplC);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		param.put("start", start);
		param.put("end", limit);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveLiquorWrsDetailList >>>>> params : " + param);
		}		
		return getSqlSession().selectList("centerDAO.retrieveLiquorWrsDetailList",param);
	}
	
	/* 주류 물류센터 출고실적 페이지 추가 */
	public int getOutLiquorWrsDetailCount(String phdNaBzplc, String phdDlrDsc,
			String prgrC, String naTrplC, String dateCode, String calFrom,
			String calTo) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("phdNaBzplc", phdNaBzplc);
		param.put("phdDlrDsc", phdDlrDsc);
		param.put("prgrC", prgrC);	
		param.put("naTrplC", naTrplC);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getOutLiquorWrsDetailCount >>>>> params : " + param);
		}		
		
		return getSqlSession().selectOne("centerDAO.getOutLiquorWrsDetailCount",param);
	}
	
	/* 주류 물류센터 출고실적 마스터 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelLiquorWrsMasterList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerDAO.downloadExcelLiquorWrsMasterList", param);
	}
	
	/* 주류 물류센터 출고실적 디테일 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorWrsDetailList(String naBzplc,String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("naBzplc", naBzplc);
		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		param.put("NA_WRS_C", naWrsC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelLiquorWrsDetailList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerDAO.downloadExcelLiquorWrsDetailList", param);
	}
	
	/* 물류센터 출고실적 전표 상품 상세 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelDetail(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String[] TRPL_C_ARR, String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelDetail >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerDAO.downloadExcelDetail", param);
	}
	
	/* 주류 물류센터 출고실적 전표 상품 상세 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorDetail(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String[] TRPL_C_ARR, String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelLiquorDetail >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerDAO.downloadExcelLiquorDetail", param);
	}

	/*물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getWrsMasterTotal(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getWrsMasterTotal >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerDAO.getWrsMasterTotal", param);
	}
		
	/*주류 물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getLiquorWrsMasterTotal(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getLiquorWrsMasterTotal >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerDAO.getLiquorWrsMasterTotal", param);
	}
	
	/* 제주물류센터 출고실적 마스터 페이지 추가 */
	public int getOutJejuWrsCount(String phdNaBzplc, String dateCode, String calFrom, String phdDlrDsc, String NA_TR_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("NA_TR_DSC", NA_TR_DSC);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getOutJejuWrsCount >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerDAO.getOutJejuWrsCount", param);
	}
	
	/* 제주물류센터 출고실적 마스터 조회 */
	public List<Map<String, Object>> retrieveJejuWrsMasterList(String phdNaBzplc, String dateCode, String calFrom, String phdDlrDsc, String NA_TR_DSC, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("NA_TR_DSC", NA_TR_DSC);		
		
		param.put("start", start);
		param.put("end", limit);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveJejuWrsMasterList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerDAO.retrieveJejuWrsMasterList", param);
	}
	
	/* 제주물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getJejuWrsMasterTotal(String phdNaBzplc, String dateCode, String calFrom, String phdDlrDsc, String NA_TR_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("NA_TR_DSC", NA_TR_DSC);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>>>>> getJejuWrsMasterTotal >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerDAO.getJejuWrsMasterTotal", param);
	}
}
