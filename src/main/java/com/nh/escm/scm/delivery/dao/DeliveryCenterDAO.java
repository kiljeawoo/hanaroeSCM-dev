package com.nh.escm.scm.delivery.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.scm.delivery.vo.CenterDqpdVO;
import com.nh.escm.scm.delivery.vo.CenterNpayPnltVO;
import com.nh.escm.scm.delivery.vo.CenterOdDlvpnshtVO;
import com.nh.escm.scm.delivery.vo.CenterUnStrVO;

/**
 * 배송업무 - 미입고 현황, 미입고 패널티, 물류센터 결품내역
 * @author HyeRim.Oh
 *
 */
public class DeliveryCenterDAO extends AbstractDao {

	public List<CenterUnStrVO> retrieveCenterUnStrList(String naBzplc,
			String fromDate, String toDate, String searchArea, String code,
			String[] TRPL_C_ARR, String phdFcltC, String impsrt,String unStrRsnc, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("SEARCHAREA", searchArea);  //검색범위
		param.put("CODE", code);  //코드
		param.put("PHD_FCLT_C", phdFcltC);  //물류기능
		param.put("IMPSRT", impsrt);  //부과율
		param.put("UN_STR_RSNC", unStrRsnc);  //미입고사유
		
		param.put("start", start);
		param.put("end", limit);
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveCenterUnStrList : " + param);
		}
		return getSqlSession().selectList("deliveryCenterDAO.retrieveCenterUnStrList", param);
	}
	
	/* 미입고 현황 카운트 */
	public int getCenterUnStrCount(String naBzplc, String fromDate,
			String toDate, String searchArea, String code, String[] TRPL_C_ARR,
			String phdFcltC, String impsrt, String unStrRsnc) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("SEARCHAREA", searchArea);  //검색범위
		param.put("CODE", code);  //코드
		param.put("PHD_FCLT_C", phdFcltC);  //물류기능
		param.put("IMPSRT", impsrt);  //부과율
		param.put("UN_STR_RSNC", unStrRsnc);  //미입고사유
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getCenterUnStrCount : " + param);
		}
		return getSqlSession().selectOne("deliveryCenterDAO.getCenterUnStrCount", param);
	}
	
	/* 엑셀다운로드 */
	public void downloadExcelUnStrList(String naBzplc,
			String fromDate, String toDate, String searchArea, String code,
			String[] TRPL_C_ARR, String phdFcltC, String impsrt, String unStrRsnc, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("SEARCHAREA", searchArea);  //검색범위
		param.put("CODE", code);  //코드
		param.put("PHD_FCLT_C", phdFcltC);  //물류기능
		param.put("IMPSRT", impsrt);  //부과율
		param.put("UN_STR_RSNC", unStrRsnc);  //미입고사유
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelUnStrList : " + param);
		}
		getSqlSession().select("deliveryCenterDAO.downloadExcelUnStrList", param, handler);
	}

	public List<CenterNpayPnltVO> retrieveCenterNpayPnltList(String odrSlpno,
			String odrplNaTrplC, String dvyPlashSlpno, String confirm,
			String dateCode, String fromDate, String toDate, String srhChkAll,
			String srhTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ODR_SLPNO", odrSlpno);  //발주번호
		param.put("ODRPL_NA_TRPL_C", odrplNaTrplC);  //발주처
		param.put("NA_DVY_PLASH_SLPNO", dvyPlashSlpno);  //배송예정서번호
		param.put("CONFIRM", confirm);  //구분(확인,미확인)
		param.put("DATECODE", dateCode);  //일자구분
		param.put("FROM_DATE", fromDate);  //조회시작일
		param.put("TO_DATE", toDate);	 //조회종료일
				
		param.put("srhChkAll", srhChkAll);  //전체 선택 유무
		param.put("srhTrplC", srhTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveCenterNpayPnltList : " + param);
		}
		return getSqlSession().selectList("deliveryCenterDAO.retrieveCenterNpayPnltList", param);
	}

	public int updateCnfDtm(String na_bzplc, String str_pla_dt,
			String slpno, String cnf_cmeno, String ls_cmeno, String NA_TRPL_C, String NA_WRS_C, String NA_TEAM_C) {
		Map<String,Object> param = new HashMap<String,Object>();
		param.put("NA_BZPLC", na_bzplc);
		param.put("STR_PLA_DT", str_pla_dt);
		param.put("SLPNO", slpno);		
		param.put("CNF_CMENO", cnf_cmeno);
		param.put("LS_CMENO", ls_cmeno);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("NA_WRS_C", NA_WRS_C);
		param.put("NA_TEAM_C", NA_TEAM_C);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateCnfDtm : " + param);
		}
		return getSqlSession().update("deliveryCenterDAO.updateCnfDtm",param);
		
	}

	public List<CenterOdDlvpnshtVO> retrieveOdDlvpnshtList(String odrplNaTrplC,
			String[] TRPL_C_ARR, String fromDate, String toDate, String ddlyYn, String tempYn, String spyplNaTrplC, String odrplNaTrplN, String all, String mbcoType, String truAgcyNaTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		param.put("ODRPL_NA_TRPL_N", odrplNaTrplN);
		param.put("TRPL_C", TRPL_C_ARR);
		param.put("FROM_DATE", fromDate);  //조회시작일
		param.put("TO_DATE", toDate);	 //조회종료일
		param.put("DDLY_YN", ddlyYn);	 //조회종료일
		param.put("TEMP_YN", tempYn);	 //조회종료일
		param.put("SPYPL_NA_TRPL_C", spyplNaTrplC);	 //공급처
		param.put("ALL", all);	 //공급처
		param.put("MBCO_TYPE", mbcoType);
		param.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOdDlvpnshtList : " + param);
		}		
		return getSqlSession().selectList("deliveryCenterDAO.retrieveOdDlvpnshtList", param);		
	}

	public List<CenterDqpdVO> retrieveCenterDqpdList(String searchType,
			String wrs, String fromDate, String toDate, String naBzplc,
			String srhChkAll, String srhTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("SEARCH_TYPE", searchType);  //조회구분
		param.put("WRS", wrs);  //상품 코드 or 상품 명
		param.put("FROM_DATE", fromDate);  //조회시작일
		param.put("TO_DATE", toDate);	 //조회종료일
		param.put("ODRPL_NA_TRPL_C", naBzplc);  //검색사업장		
		
		param.put("srhChkAll", srhChkAll);  //전체 선택 유무
		param.put("srhTrplC", srhTrplC);	  //권한사업장
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveCenterDqpdList : " + param);
		}		
		return getSqlSession().selectList("deliveryCenterDAO.retrieveCenterDqpdList", param);		
	}

	public Map<String, Object> getCenterUnStrTotal(String naBzplc, String fromDate,
			String toDate, String searchArea, String code, String[] TRPL_C_ARR,
			String phdFcltC, String impsrt, String unStrRsnc) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("PHD_NA_BZPLC", naBzplc);  //농협사업장
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("SEARCHAREA", searchArea);  //검색범위
		param.put("CODE", code);  //코드
		param.put("PHD_FCLT_C", phdFcltC);  //물류기능
		param.put("IMPSRT", impsrt);  //부과율
		param.put("UN_STR_RSNC", unStrRsnc);  //미입고사유
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getCenterUnStrTotal : " + param);
		}
		return getSqlSession().selectOne("deliveryCenterDAO.getCenterUnStrTotal", param);
	}
	
	
}
