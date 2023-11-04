package com.nh.escm.bt.rq.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.bt.rq.vo.CsltRqVO;

public class CsltRqDAO extends AbstractDao {
	
	public int insertCsltRq(CsltRqVO rc) {
		
		return getSqlSession().insert("csltRqDAO.insertCsltRq", rc);
	}
	
	public int insertCsltRqEvl(CsltRqVO rc) {
		
		return getSqlSession().insert("csltRqDAO.insertCsltRqEvl", rc);
	}
	
	public int insertCsltRqFile(CsltRqVO rc) {
		
		return getSqlSession().insert("csltRqDAO.insertCsltRqFile", rc);
	}
	
	public int insertCsltRqFileComp(CsltRqVO rc) {
		return getSqlSession().insert("csltRqDAO.insertCsltRqFileComp", rc);
	}
	
	public List<CsltRqVO> retrieveCsltRqList(String CAL_FROM, String CAL_TO, String CBO_STS, String CBO_COMP,
			String EDT_COMP, String EDT_BUYER, String CBO_DSC) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("CBO_STS", CBO_STS);
		param.put("CBO_COMP", CBO_COMP);
		param.put("EDT_COMP", escape(EDT_COMP)); // escape for LIKE
		param.put("EDT_BUYER", escape(EDT_BUYER)); // escape for LIKE
		param.put("CBO_DSC", CBO_DSC);
		
		return getSqlSession().selectList("csltRqDAO.retrieveCsltRqList", param);
	}
	
	public List<CsltRqVO> retrieveCsltRqDscList(String CSLT_RQ_NO) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		
		return getSqlSession().selectList("csltRqDAO.retrieveCsltRqDscList", param);
	}
	
	public List<CsltRqVO> retrieveCsltRqDscFileList(String CSLT_RQ_NO) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		
		return getSqlSession().selectList("csltRqDAO.retrieveCsltRqDscFileList", param);
	}
	
	public List<CsltRqVO> retrieveCsltRqDscFileCompList(String CSLT_RQ_NO) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		
		return getSqlSession().selectList("csltRqDAO.retrieveCsltRqDscFileCompList", param);
	}
	
	public int updateCsltRq(CsltRqVO rc) {
		
		return getSqlSession().update("csltRqDAO.updateCsltRq", rc);
	}
	
	public int updateCsltRqFile(CsltRqVO rc) {
		
		return getSqlSession().update("csltRqDAO.updateCsltRqFile", rc);
	}
	
	public int deleteCsltRqFileComp(String CSLT_RQ_NO, String SYS_FLNM) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		param.put("SYS_FLNM", SYS_FLNM);
		
		return getSqlSession().delete("csltRqDAO.deleteCsltRqFileComp", param);
	}
	
	/**********************************************************************************************/
	
	public Map<String, Object> retrieveCounselingDsc(String CSLT_RQ_NO) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		
		return getSqlSession().selectOne("csltRqDAO.retrieveCounselingDsc", param);
	}
	
	public List<Map<String, Object>> retrieveCounselingList(String CSLT_RQ_NO, String USERTYPE) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		param.put("USERTYPE", USERTYPE);
		
		return getSqlSession().selectList("csltRqDAO.retrieveCounselingList", param);
	}
	
	public int insertCtrCsltNtc(String CSLT_RQ_NO, String STS, String TINM, String CNTN, String USR_TPC,
			String RLTM_NTC_SMS, String SMS_NATV_NO, String RLTM_NTC_EMAIL, String EMAIL_NATV_NO, String USR_ID) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		param.put("STS", STS);
		param.put("TINM", TINM);
		param.put("CNTN", CNTN);
		param.put("USR_TPC", USR_TPC);
		param.put("RLTM_NTC_SMS", RLTM_NTC_SMS);
		param.put("SMS_NATV_NO", SMS_NATV_NO);
		param.put("RLTM_NTC_EMAIL", RLTM_NTC_EMAIL);
		param.put("EMAIL_NATV_NO", EMAIL_NATV_NO);
		param.put("CHRG_BUYER_NM", null);
		param.put("BUYER_TELNO", null);
		param.put("BUYER_EMAIL", null);
		param.put("USR_ID", USR_ID);
		
		return getSqlSession().insert("csltRqDAO.insertCtrCsltNtc", param);
	}
	
	public int updateCtrCsltRqBuyer(String CSLT_RQ_NO, String BUYER_SHRT_BZPLNM, String BUYER_CHRG_BSNNM,
			String BUYER_NM, String NA_TRPL_C, String BUYER_ENO, String LS_CHGM) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		param.put("BUYER_SHRT_BZPLNM", BUYER_SHRT_BZPLNM);
		param.put("BUYER_CHRG_BSNNM", BUYER_CHRG_BSNNM);
		param.put("BUYER_NM", BUYER_NM);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("BUYER_ENO", BUYER_ENO);
		param.put("LS_CHGM", LS_CHGM);
		
		return getSqlSession().insert("csltRqDAO.updateCtrCsltRqBuyer", param);
	}
	
	public int updateCtrCsltRqSts(String CSLT_RQ_NO, String STS, String LS_CHGM, String MON, String REJECT_ALLOW) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		param.put("STS", STS);
		param.put("LS_CHGM", LS_CHGM);
		param.put("MON", MON);
		param.put("REJECT_ALLOW", REJECT_ALLOW);
		
		return getSqlSession().insert("csltRqDAO.updateCtrCsltRqSts", param);
	}
	/**
	 * 상담신청조회 출력
	 * @param CAL_FROM
	 * @param CAL_TO
	 * @param CBO_STS
	 * @param CBO_COMP
	 * @param EDT_COMP
	 * @param EDT_BUYER
	 * @return
	 */

	public List<CsltRqVO> retrieveCsltRqDscOz(String CAL_FROM, String CAL_TO,
			String CBO_STS, String CBO_COMP, String EDT_COMP, String EDT_BUYER) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("CBO_STS", CBO_STS);
		param.put("CBO_COMP", CBO_COMP);
		param.put("EDT_COMP", EDT_COMP);
		param.put("EDT_BUYER", EDT_BUYER);
		
		return getSqlSession().selectList("csltRqDAO.retrieveCsltRqList", param);
	}
	
	/**
	 * 상담관리자 목록
	 * @return
	 */
	public List<Map<String,Object>>retrieveHurInf() {
		return getSqlSession().selectList("csltRqDAO.retrieveHurInf");
	}
	
	/**
	 * zip다운로드
	 * @return
	 */
	public List<Map<String, Object>> retrieveCsltRqZipFileList(String CSLT_RQ_NO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CSLT_RQ_NO", CSLT_RQ_NO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveCsltRqZipFileList params : " + param);
		}

		return getSqlSession().selectList("csltRqDAO.retrieveCsltRqZipFileList", param);
	}
}
