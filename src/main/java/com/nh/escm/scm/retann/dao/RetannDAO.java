package com.nh.escm.scm.retann.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.scm.retann.vo.RetannCnfVO;
import com.nh.escm.scm.retann.vo.RetannRqtDetailVO;
import com.nh.escm.scm.retann.vo.RetannRqtMasterSumVO;
import com.nh.escm.scm.retann.vo.RetannRqtMasterVO;
import com.nh.escm.scm.retann.vo.RetannRqtSlpVO;

/**
 * 반품업무 - 반품입고 의뢰 조회, 반품입고 확인 등록
 * @author HyeRim.Oh
 *
 */
public class RetannDAO extends AbstractDao {

	public List<RetannRqtMasterSumVO> retrieveRqtMasterSumList(String rpt,String rgd,
			String rgdRqt, String fromDate, String toDate, String naRgdStsDsc, String RPT_ALL) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("RPT", rpt);  //본/지사구분코드
		param.put("RVOPL_NA_TRPL_C", rgd);  //반품처코드
		param.put("NA_TRPL_C", rgdRqt);  //반품의뢰처코드
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_RGD_STS_DSC", naRgdStsDsc);  //반품상태구분코드
		
		param.put("RPT_ALL", RPT_ALL);  //gln코드
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRqtMasterSumList : " + param);
		}
		return getSqlSession().selectList("retannDAO.retrieveRqtMasterSumList", param);
	}

	public List<RetannRqtMasterVO> retrieveRqtMasterList(String rgd,
			String rgdRqt, String naTeamC, String rgdRgDt, String naRgdStsDsc) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("RVOPL_NA_TRPL_C", rgd);  //반품처코드
		param.put("NA_TRPL_C", rgdRqt);  //반품의뢰처코드
		param.put("NA_TEAM_C", naTeamC);  //경제통합팀코드
		param.put("RGD_RG_DT", rgdRgDt);  //반품등록일자
		param.put("NA_RGD_STS_DSC", naRgdStsDsc);  //반품상태구분코드
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRqtMasterList : " + param);
		}
		return getSqlSession().selectList("retannDAO.retrieveRqtMasterList", param);
	}

	public List<RetannRqtDetailVO> retrieveRqtDetailList(
			String rgdRqt, String naTeamC, String rgdRgDt, String rgdPlaNo) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C", rgdRqt);  //반품의뢰처코드
		param.put("NA_TEAM_C", naTeamC);  //경제통합팀코드
		param.put("RGD_RG_DT", rgdRgDt);  //반품등록일자
		param.put("RGD_PLA_NO", rgdPlaNo);  //반품등록일자
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRqtDetailList : " + param);
		}
		return getSqlSession().selectList("retannDAO.retrieveRqtDetailList", param);
	}

	public List<Map<String, Object>> getMbco(String searchType, String searchText, String NATRPLC_GLN) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchType", searchType);
		param.put("searchText", searchText);
		param.put("NATRPLC_GLN", NATRPLC_GLN);
		return getSqlSession().selectList("retannDAO.getMbco", param);
	}

	public List<RetannCnfVO> retrieveCnfList(
			String mbcoCode, String ynAplySomae,String searchDate,
			String rgdPlaNo, String rgdRqtCode, String trDsc,
			String rgdAmnDsc, String naRgdStsDsc,
			int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("MBCO_CODE", mbcoCode);  //본/지사코드
		param.put("YN_APLY_SOMAE", ynAplySomae);  //반품의뢰처유형
		param.put("SEARCH_DATE", searchDate);  //반품요청일
		param.put("RGD_PLA_NO", rgdPlaNo);  //반품요청번호
		param.put("RGD_RQT_CODE", rgdRqtCode);  //반품의뢰처코드
		param.put("TR_DSC", trDsc);  //거래구분
		param.put("RGD_AMN_DSC", rgdAmnDsc);  //반품관리구분코드
		param.put("NA_RGD_STS_DSC", naRgdStsDsc);  //반품상태구분코드
		
		param.put("start", start);
		param.put("end", limit);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveCnfList : " + param);
		}
		
		return getSqlSession().selectList("retannDAO.retrieveCnfList", param);
	}

	public List<RetannRqtSlpVO> retrieveRqtSlpList(String dvyRqrDtFr,
			String dvyRqrDtTo, String rgdPlaNo, String naTrplC, String mbcoCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("FROM_DATE", dvyRqrDtFr);   //조회시작일
		param.put("TO_DATE", dvyRqrDtTo);  //조회종료일
		param.put("RGD_PLA_NO", rgdPlaNo);  //전표번호
		param.put("NA_TRPL_C", naTrplC);  //반품의뢰처코드
		param.put("MBCO_CODE", mbcoCode);  //본/지사코드
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRqtSlpList : " + param);
		}
		
		return getSqlSession().selectList("retannDAO.retrieveRqtSlpList", param);
	}
	
	//반품예정상세 - 조정단가,조정자 개인번호, 조정 일자 업데이트
	public int updateAjUpr(RetannCnfVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateAjUpr : " + vo.toString());
		}
		return getSqlSession().update("retannDAO.updateAjUpr", vo);
	}
	
	//반품예정상세 - 반품확인일시 업데이트
	public int updateRtncnfDtm(RetannCnfVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateRtncnfDtm : " + vo.toString());
		}
		return getSqlSession().update("retannDAO.updateRtncnfDtm", vo);
	}
	
	/* 반품확인기본 저장 */
	public int insertCnfMaster(RetannCnfVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertCnfMaster : " + vo.toString());
		}
		return getSqlSession().insert("retannDAO.insertCnfMaster", vo);
	}
	
	/* 반품확인상세 저장 */
	public int insertCnfDetail(RetannCnfVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertCnfDetail : " + vo.toString());
		}
		return getSqlSession().insert("retannDAO.insertCnfDetail", vo);
	}
	
	public void downloadExcelRetann(String rpt,String rgd,
			String rgdRqt, String fromDate, String toDate, String naRgdStsDsc, String RPT_ALL, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("RPT", rpt);  //본/지사구분코드
		param.put("RVOPL_NA_TRPL_C", rgd);  //반품처코드
		param.put("NA_TRPL_C", rgdRqt);  //반품의뢰처코드
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_RGD_STS_DSC", naRgdStsDsc);  //반품상태구분코드
		
		param.put("RPT_ALL", RPT_ALL);  //gln코드
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelRetann : " + param);
		}
		getSqlSession().select("retannDAO.downloadExcelRetann", param, handler);
	}
	
	public void downloadExcelRetannDetail(String rpt,String rgd,
			String rgdRqt, String fromDate, String toDate, String naRgdStsDsc, String RPT_ALL,
			String rgdRqt_d, String naTeamC, String rgdRgDt, String rgdPlaNo, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("RPT", rpt);  //본/지사구분코드
		param.put("RVOPL_NA_TRPL_C", rgd);  //반품처코드
		param.put("NA_TRPL_C", rgdRqt);  //반품의뢰처코드
		param.put("FROM_DATE", fromDate);
		param.put("TO_DATE", toDate);
		param.put("NA_RGD_STS_DSC", naRgdStsDsc);  //반품상태구분코드
		
		param.put("RPT_ALL", RPT_ALL);  //gln코드		
				
		param.put("NA_TRPL_C_D", rgdRqt_d);  //반품의뢰처코드
		param.put("NA_TEAM_C", naTeamC);  //경제통합팀코드
		param.put("RGD_RG_DT", rgdRgDt);  //반품등록일자
		param.put("RGD_PLA_NO", rgdPlaNo);  //반품등록일자
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelRetannDetail : " + param);
		}
		getSqlSession().select("retannDAO.downloadExcelRetannDetail", param, handler);
	}

	public int getCnfCount(String mbcoCode, String ynAplySomae,
			String searchDate, String rgdPlaNo, String rgdRqtCode,
			String trDsc, String rgdAmnDsc, String naRgdStsDsc) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("MBCO_CODE", mbcoCode);  //본/지사코드
		param.put("YN_APLY_SOMAE", ynAplySomae);  //반품의뢰처유형
		param.put("SEARCH_DATE", searchDate);  //반품요청일
		param.put("RGD_PLA_NO", rgdPlaNo);  //반품요청번호
		param.put("RGD_RQT_CODE", rgdRqtCode);  //반품의뢰처코드
		param.put("TR_DSC", trDsc);  //거래구분
		param.put("RGD_AMN_DSC", rgdAmnDsc);  //반품관리구분코드
		param.put("NA_RGD_STS_DSC", naRgdStsDsc);  //반품상태구분코드
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getCnfCount : " + param);
		}
		
		return getSqlSession().selectOne("retannDAO.getCnfCount", param);
	}

}
