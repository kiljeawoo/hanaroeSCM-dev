package com.nh.escm.pds.outer.na.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pds.outer.na.vo.CenterLiquorNaVO;
import com.nh.escm.pds.outer.na.vo.CenterNaVO;

public class CenterNaDAO extends AbstractDao {
	
	/* 물류센터 출고실적 마스터 조회 */
	public List<CenterNaVO> retrieveWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, int start, int limit, String mbCoType, String upTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);			
		param.put("NA_TR_DSC", NA_TR_DSC);		
		
		param.put("start", start);
		param.put("end", limit);
				
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveWrsMasterList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerNaDAO.retrieveWrsMasterList", param);
	}
	
	/* 물류센터 출고실적 마스터 페이지 추가 */
	public int getOutWrsCount(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String mbCoType, String upTrplC, String naWrsC) {
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
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getOutWrsCount >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerNaDAO.getOutWrsCount", param);
	}

	
	public List<Map<String, Object>> getBillingMarkUpTargets(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String GRS_SOJU_YN, String upTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("GRS_SOJU_YN", GRS_SOJU_YN);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getBillingMarkUpTargets >>>>> params : " + param);
		}	
		if("1".equals(GRS_SOJU_YN)) {
			return getSqlSession().selectList("centerNaDAO.getBillingMarkUpTargetsLiquor", param);
		} else {
			return getSqlSession().selectList("centerNaDAO.getBillingMarkUpTargets", param);			
		}
	}
	
	
	/* 물류센터 출고실적 마스터 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String mbCoType, String upTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelWrsMasterList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerNaDAO.downloadExcelWrsMasterList", param);
	}
	
	/* 물류센터 출고실적 디테일 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelWrsDetailList(String naBzplc, String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC,String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String mbCoType, String upTrplC, String naWrsC) {
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
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelWrsDetailList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerNaDAO.downloadExcelWrsDetailList", param);
	}
	
	/* 물류센터 출고실적 디테일 조회*/
	public List<CenterNaVO> retrieveWrsDetailList(String phdNaBzplc,String phdDlrDsc, String prgrC,
																String naTrplC, String dateCode, String calFrom,
																String calTo,String NA_TR_DSC, String[] TRPL_C_ARR,int start, int limit, String mbCoType, String upTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("phdDlrDsc", phdDlrDsc);
		param.put("prgrC", prgrC);	
		param.put("naTrplC", naTrplC);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("NA_TR_DSC", NA_TR_DSC);
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		param.put("start", start);
		param.put("end", limit);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveWrsDetailList >>>>> params : " + param);
		}		
		
		return getSqlSession().selectList("centerNaDAO.retrieveWrsDetailList",param);
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
		
		return getSqlSession().selectOne("centerNaDAO.getOutWrsDetailCount",param);
	}

	/* 주류 물류센터 출고실적 마스터 조회*/
	public List<CenterLiquorNaVO> retrieveLiquorWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, int start, int limit, String mbCoType, String upTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		
		param.put("start", start);
		param.put("end", limit);
		
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveLiquorWrsMasterList >>>>> params : " + param);
		}		
		
		return getSqlSession().selectList("centerNaDAO.retrieveLiquorWrsMasterList", param);
	}
	
	/* 주류 물류센터 출고실적 마스터 페이지 추가*/
	public int getOutLiquorWrsMasterCount(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String mbCoType, String upTrplC, String naWrsC) {
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
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getOutLiquorWrsMasterCount >>>>> params : " + param);
		}		
		
		return getSqlSession().selectOne("centerNaDAO.getOutLiquorWrsMasterCount", param);
	}

	/* 주류 물류센터 출고실적 디테일 조회*/
	public List<CenterLiquorNaVO> retrieveLiquorWrsDetailList(String phdNaBzplc,String phdDlrDsc, String prgrC,
																				String naTrplC, String dateCode, String calFrom,
																				String calTo,String NA_TR_DSC, String[] TRPL_C_ARR, int start, int limit, String mbCoType, String upTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("phdNaBzplc", phdNaBzplc);
		param.put("phdDlrDsc", phdDlrDsc);
		param.put("prgrC", prgrC);	
		param.put("naTrplC", naTrplC);
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("NA_TR_DSC", NA_TR_DSC);
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		param.put("start", start);
		param.put("end", limit);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> retrieveLiquorWrsDetailList >>>>> params : " + param);
		}		
		return getSqlSession().selectList("centerNaDAO.retrieveLiquorWrsDetailList",param);
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
		
		return getSqlSession().selectOne("centerNaDAO.getOutLiquorWrsDetailCount",param);
	}
	
	/* 주류 물류센터 출고실적 마스터 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String mbCoType, String upTrplC, String naWrsC) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("phdNaBzplc", phdNaBzplc);
		param.put("econStdvDsc", econStdvDsc);		
		param.put("dateCode", dateCode);
		param.put("calFrom", calFrom);
		param.put("calTo", calTo);
		param.put("phdDlrDsc", phdDlrDsc);		
		param.put("prgrC", prgrC);
		param.put("NA_TR_DSC", NA_TR_DSC);
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelLiquorWrsMasterList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerNaDAO.downloadExcelLiquorWrsMasterList", param);
	}
	
	/* 주류 물류센터 출고실적 디테일 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorWrsDetailList(String naBzplc,String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String mbCoType, String upTrplC, String naWrsC) {
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
		
		param.put("naTrplC", naTrplC);
				
		param.put("srhTrplC", TRPL_C_ARR);
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		param.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelLiquorWrsDetailList >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerNaDAO.downloadExcelLiquorWrsDetailList", param);
	}
	
	/* 물류센터 출고실적 전표 상품 상세 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelDetail(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String[] TRPL_C_ARR, String naTrplC, String mbCoType, String upTrplC) {
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
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelDetail >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerNaDAO.downloadExcelDetail", param);
	}
	
	/* 주류 물류센터 출고실적 전표 상품 상세 엑셀 다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorDetail(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String[] TRPL_C_ARR, String naTrplC, String mbCoType, String upTrplC) {
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
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> downloadExcelLiquorDetail >>>>> params : " + param);
		}	
		
		return getSqlSession().selectList("centerNaDAO.downloadExcelLiquorDetail", param);
	}

	/*물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getWrsMasterTotal(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String mbCoType, String upTrplC) {
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
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getWrsMasterTotal >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerNaDAO.getWrsMasterTotal", param);
	}
		
	/*주류 물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getLiquorWrsMasterTotal(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String mbCoType, String upTrplC) {
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
		param.put("mbCoType", mbCoType);
		param.put("upTrplC", upTrplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>>>>> getLiquorWrsMasterTotal >>>>> params : " + param);
		}	
		
		return getSqlSession().selectOne("centerNaDAO.getLiquorWrsMasterTotal", param);
	}

}