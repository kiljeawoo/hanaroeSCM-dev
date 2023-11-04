package com.nh.escm.ct.eltctrw.dao;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.ct.eltctrw.vo.CtEtcItemVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDcmApdVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwVO;

public class EltCtrwDAO extends AbstractDao {
	
	public List<EltCtrwVO> retrieveSubEltCtrwList(String CBO_CTRW, String CAL_FROM, String CAL_TO, String CBO_STS, String CBO_CONTDAY, String EDT_BUYER_BLG  ,String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CTRW", CBO_CTRW);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("CBO_STS", CBO_STS);
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("EDT_BUYER_BLG", EDT_BUYER_BLG);
		param.put("NA_TRPL_C", NA_TRPL_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePeriodSum params : " + param);
		}
		return getSqlSession().selectList("eltCtrwDAO.retrieveSubEltCtrwList", param);
	}
	

	public List<EltCtrwVO> retrieveSubEltCtrwPrgStsList(String CBO_CTRW, String CAL_FROM, String CAL_TO, String CBO_STS, String CBO_CONTDAY, String EDT_BUYER_BLG  ,String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CTRW", CBO_CTRW);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("CBO_STS", CBO_STS);
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("EDT_BUYER_BLG", EDT_BUYER_BLG);
		param.put("NA_TRPL_C", NA_TRPL_C);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSubEltCtrwPrgStsList params : " + param);
		}
		return getSqlSession().selectList("eltCtrwDAO.retrieveSubEltCtrwPrgStsList", param);
	}
	
	public int retrieveEltCtrwListCount(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD ,String BUYER_NA_TRPL_C ,String BUYER_ENO,String BUYER_ID,String BUYER_NM, String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC, String MN_CTRW_DSN, String BUYER_GLN) {		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("EDT_KD", EDT_KD);
		param.put("CBO_KD", CBO_KD);
		param.put("FV_STS", FV_STS);
		param.put("FV_MNCTRWKD", FV_MNCTRWKD);
		param.put("BUYER_NA_TRPL_C", BUYER_NA_TRPL_C);
		param.put("BUYER_ENO", BUYER_ENO);
		param.put("BUYER_ID", BUYER_ID);
		param.put("BUYER_NM", BUYER_NM);
		param.put("BUYER_DSC", BUYER_DSC);
		param.put("BUYER_GLN", BUYER_GLN);
		if ("99".equals(APV_STS)) {
			param.put("APV_STS", "9");  // 일괄서명 화면 조회조건: 9 바이어승인
			param.put("SIGN_YN", "Y");
		} else {
			param.put("APV_STS", APV_STS);
		}
		param.put("USR_TPC", USR_TPC);
		param.put("ELT_AUTH_DSC", ELT_AUTH_DSC);
		param.put("MN_CTRW_DSN", MN_CTRW_DSN);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRegister params : " + param);
		}
		return getSqlSession().selectOne("eltCtrwDAO.retrieveEltCtrwListCount", param);
	}
	
	//public List<Map<String, Object>> retrieveEltCtrwList(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD) {
	public List<Map<String, Object>> retrieveEltCtrwList(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD ,String BUYER_NA_TRPL_C ,String BUYER_ENO,String BUYER_ID,String BUYER_NM, String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC, String MN_CTRW_DSN, String BUYER_GLN, int start, int end) {		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("EDT_KD", EDT_KD);
		param.put("CBO_KD", CBO_KD);
		param.put("FV_STS", FV_STS);
		param.put("FV_MNCTRWKD", FV_MNCTRWKD);
		param.put("BUYER_NA_TRPL_C", BUYER_NA_TRPL_C);
		param.put("BUYER_ENO", BUYER_ENO);
		param.put("BUYER_ID", BUYER_ID);
		param.put("BUYER_NM", BUYER_NM);
		param.put("BUYER_DSC", BUYER_DSC);
		param.put("BUYER_GLN", BUYER_GLN);
		if ("99".equals(APV_STS)) {
			param.put("APV_STS", "9");  // 일괄서명 화면 조회조건: 9 바이어승인
			param.put("SIGN_YN", "Y");
		} else {
			param.put("APV_STS", APV_STS);
		}
		param.put("USR_TPC", USR_TPC);
		param.put("ELT_AUTH_DSC", ELT_AUTH_DSC);
		param.put("MN_CTRW_DSN", MN_CTRW_DSN);
		param.put("start", start);
		param.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRegister params : " + param);
		}
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwList", param);
	}
	
	public int insertEtcEltNtc(String ELT_CTRW_NO, String CTRW_KDC,  String STS, String TINM,
			String CNTN, String USR_TPC, String RLTM_NTC_SMS, String SMS_NATV_NO, String RLTM_NTC_EMAIL, String EMAIL_NATV_NO ,String USR_ID) {		
			Map<String, Object> param = new HashMap<String, Object>();
		    param.put("ELT_CTRW_NO",     ELT_CTRW_NO);
			param.put("CTRW_KDC",        CTRW_KDC);
//			param.put("SQNO",            SQNO);
			param.put("STS",             STS);
			param.put("TINM",            TINM);
			param.put("CNTN",            CNTN);
			param.put("USR_TPC",          USR_TPC);
			param.put("RLTM_NTC_SMS",    RLTM_NTC_SMS);
			param.put("SMS_NATV_NO",     SMS_NATV_NO);
			param.put("RLTM_NTC_EMAIL",  RLTM_NTC_EMAIL);
			param.put("EMAIL_NATV_NO",   EMAIL_NATV_NO);
			param.put("USR_ID",   USR_ID);
			

				
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertEtcEltNtc params : " + param);
		}
		return getSqlSession().insert("eltCtrwDAO.insertEtcEltNtc", param);
	}
	
	/*
	 * 전자계약 업데이트: 상태코드, 전자서명, 등록 직인파일 
	 */
	public int updateEltCtrwDcmApd(
			                          String ELT_CTRW_NO
			                        , String COLB_COMP_SGNT
			                        , String BUYER_APV_STS
			                        , String FGAT_PRVT_C
			                        , String CHG_SQNO
			                        , String STS
			                        , String USR_ID
			                        , String COLB_COMP_SEAL_SYS_FLNM
			                        , String COLB_COMP_SEAL_APDFLNM
			                        , String BUYER_SEAL_APDFLNM
			                        , String BUYER_SEAL_SYS_FLNM
			                        , String BUYER_SGNT                 // 바이어 전자서명
			                      )
	{		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",     ELT_CTRW_NO);
	    param.put("COLB_COMP_SGNT",     COLB_COMP_SGNT);
	    param.put("BUYER_APV_STS",     BUYER_APV_STS);
	    param.put("FGAT_PRVT_C",     FGAT_PRVT_C);
	    param.put("CHG_SQNO",     CHG_SQNO);
	    param.put("STS",          STS);
	    param.put("USR_ID",     USR_ID);
	    param.put("COLB_COMP_SEAL_SYS_FLNM",     COLB_COMP_SEAL_SYS_FLNM);
	    param.put("COLB_COMP_SEAL_APDFLNM",     COLB_COMP_SEAL_APDFLNM);
	    param.put("BUYER_SEAL_APDFLNM",     BUYER_SEAL_APDFLNM);
	    param.put("BUYER_SEAL_SYS_FLNM",     BUYER_SEAL_SYS_FLNM);
	    param.put("BUYER_SGNT",     BUYER_SGNT);
	    	    
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEltCtrwDcmApd params : " + param);
		}
		
		return getSqlSession().update("eltCtrwDAO.updateEltCtrwDcmApd", param);
	}  // updateEltCtrwDcmApd
	
	public int updateEtcEltNtcB(String ELT_CTRW_NO, String SQNO, String STS, String USR_ID) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",     ELT_CTRW_NO);
	    param.put("SQNO",     SQNO);
	    param.put("STS",     STS);
	    param.put("USR_ID",     USR_ID);
	    
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEtcEltNtcB params : " + param);
		}
		return getSqlSession().update("eltCtrwDAO.updateEtcEltNtcB", param);
	}
	
	public int insertEtcEltNtcFyn(String ELT_CTRW_NO, String MN_CTRW_KDC,  String BUYER_ENO, String DCM_C,
			String DCM_NM, String ESS_YN, String APDFLNM, String APDFL_SZE, String SYS_FLNM, String USR_ID) {		
			Map<String, Object> param = new HashMap<String, Object>();
		    param.put("ELT_CTRW_NO",     ELT_CTRW_NO);
			param.put("MN_CTRW_KDC",        MN_CTRW_KDC);
			param.put("BUYER_ENO",             BUYER_ENO);
			param.put("DCM_C",            DCM_C);
			param.put("DCM_NM",            DCM_NM);
			param.put("ESS_YN",          ESS_YN);
			param.put("APDFLNM",    APDFLNM);
			param.put("APDFL_SZE",     APDFL_SZE);
			param.put("SYS_FLNM",  SYS_FLNM);
			param.put("USR_ID",   USR_ID);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertEtcEltNtc params : " + param);
		}
		return getSqlSession().insert("eltCtrwDAO.insertEtcEltNtcFyn", param);
	}
	
	public int updateEtcEltNtcFyn(String ELT_CTRW_NO, String FSQNO, String APDFLNM, String APDFL_SZE, String SYS_FLNM, String USR_ID) {		
			Map<String, Object> param = new HashMap<String, Object>();
		    param.put("ELT_CTRW_NO",     ELT_CTRW_NO);
		    param.put("FSQNO",     FSQNO);
			param.put("APDFLNM",    APDFLNM);
			param.put("APDFL_SZE",     APDFL_SZE);
			param.put("SYS_FLNM",  SYS_FLNM);
			param.put("USR_ID",   USR_ID);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEtcEltNtcFyn params : " + param);
		}
		return getSqlSession().update("eltCtrwDAO.updateEtcEltNtcFyn", param);
	}
	
	public int deleteEtcEltNtcFyn(String ELT_CTRW_NO, String FSQNO,  String DELFILENAME) {		
			Map<String, Object> param = new HashMap<String, Object>();
		    param.put("ELT_CTRW_NO",     ELT_CTRW_NO);
			param.put("FSQNO",            FSQNO);
			param.put("DELFILENAME",        DELFILENAME);
			
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteEtcEltNtcFyn params : " + param);
		}
		return getSqlSession().delete("eltCtrwDAO.deleteEtcEltNtcFyn", param);
	}
	
	public List<Map<String, Object>> retrieveEltCtrw(String ELT_CTRW_NO  ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEltCtrw params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrw", param);
	}
	
	public List<Map<String, Object>> retrieveEltCtrwKd(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEltCtrwKd params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwKdList", param);
	}
	
	public List<Map<String, Object>> retrieveEltCtrwNtc(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEltCtrwNtc params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwNtcList", param);
	}
	
	public List<Map<String, Object>> retrieveEltCtrwFileYn(String ELT_CTRW_NO ,  String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEltCtrwFileYn params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwFileYnList", param);
	}
	
	public List<Map<String, Object>> retrieveEltCtrwAmnList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEltCtrwAmnList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwAmnList", param);
	}
	
	public List<Map<String, Object>> retrieveEltCtrwDtlList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEltCtrwDtlList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwDtlList", param);
	}
	
	public List<Map<String, Object>> retrieveAddEltCtrwDtlList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveAddEltCtrwDtlList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveAddEltCtrwDtlList", param);
	}
	
	public List<Map<String, Object>> retrievePmiwDtlList(String ELT_CTRW_NO,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrievePmiwDtlList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrievePmiwDtlList", param);
	}

	public List<Map<String, Object>> retrieveEvtAmPmiwList(String ELT_CTRW_NO  ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEvtAmPmiwList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEvtAmPmiwList", param);
	}	
	
	
	
	public List<Map<String, Object>> retrieveLgqtTrFeePmiwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveLgqtTrFeePmiwList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveLgqtTrFeePmiwList", param);
	}
	
	public List<Map<String, Object>> retrieveDlvgCompEmpDspcPmiwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDlvgCompEmpDspcPmiwList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveDlvgCompEmpDspcPmiwList", param);
	}	
	
	public List<Map<String, Object>> retrieveDspcPerWrkPrdPmiwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDspcPerWrkPrdPmiwList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveDspcPerWrkPrdPmiwList", param);
	}	
	
	
	
	public List<Map<String, Object>> retrieveSctrwDtlList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSctrwDtlList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveSctrwDtlList", param);
	}	

	public List<Map<String, Object>> retrieveSctrwCtrMrgnRtList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSctrwCtrMrgnRtList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveSctrwCtrMrgnRtList", param);
	}	
	
	public List<Map<String, Object>> retrieveSctrwNmlMrgnRtList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSctrwNmlMrgnRtList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveSctrwNmlMrgnRtList", param);
	}
	
	public List<Map<String, Object>> retrieveSctrwPmtnEmpeDspcBrkList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSctrwPmtnEmpeDspcBrkList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveSctrwPmtnEmpeDspcBrkList", param);
	}
	
	public List<Map<String, Object>> retrieveSctrwAllXpcPmtnCstList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSctrwAllXpcPmtnCstList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveSctrwAllXpcPmtnCstList", param);
	}		
	
	
	
	public List<Map<String, Object>> retrieveEtcEltCtrwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEtcEltCtrwList params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrieveEtcEltCtrwList", param);
	}	
	
	
	/* 전자계약_첨부파일 등록 */
	public int insertDcmStylAmn(EltCtrwDcmApdVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDcmStylAmn : " + ncvo.toString());
		}
		//return getSqlSession().update("order.ordersDAO.updateOrderMaster", vo);
		return 	getSqlSession().insert("eltCtrwDAO.insertDcmStylAmn",ncvo);
	}
	
	/* 전자계약_첨부파일 updae */
	public int updateDcmStylAmn(EltCtrwDcmApdVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDcmStylAmn : " + ncvo.toString());
		}
		return 	getSqlSession().update("eltCtrwDAO.updateDcmStylAmn",ncvo);
	}
	
	/* 전자계약_첨부파일 updae */
	public int deleteDcmStylAmn(EltCtrwDcmApdVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteDcmStylAmn : " + ncvo.toString());
		}
		return 	getSqlSession().delete("eltCtrwDAO.deleteDcmStylAmn",ncvo);
	}
	
	public int updateEltCtrwApd(String ELT_CTRW_NO, String BIGO, String LS_CHGM, String FS_RGM) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",	ELT_CTRW_NO);
	    param.put("BIGO", 			BIGO);
	    param.put("LS_CHGM",  		LS_CHGM);
	    param.put("FS_RGM",  		FS_RGM);
	    if(logger.isDebugEnabled()){
			logger.debug(">>> updateEltCtrwDcmApd params : " + param);
		}
		return getSqlSession().update("eltCtrwDAO.updateEltCtrwApd", param);
	}
	
	public int deleteEltCtrwApd(String ELT_CTRW_NO) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",	ELT_CTRW_NO);
		return getSqlSession().delete("eltCtrwDAO.deleteEltCtrwApd", param);
	}
	
	/* 전자계약_첨부파일 등록 */
	public int insertEltCtrwApd(EltCtrwDcmApdVO ncvo){
		return 	getSqlSession().insert("eltCtrwDAO.insertEltCtrwApd",ncvo);
	}
	
	public Map<String, Object> retrieveEltCtrwApd(String eltCtrwNo) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",	eltCtrwNo);
		return getSqlSession().selectOne("eltCtrwDAO.retrieveEltCtrwApd", param);
	}
	
	public List<EltCtrwDcmApdVO> retrieveEltCtrwApdFileList(String eltCtrwNo) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",	eltCtrwNo);
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwApdFileList", param);
	}
	
	public void updateCancelElt(String eltCtrwNo, String chgSqno, String lsChgm) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",	eltCtrwNo);
	    param.put("CHG_SQNO",	chgSqno);
	    param.put("LS_CHGM",	lsChgm);
		getSqlSession().update("eltCtrwDAO.updateCancelElt", param);
	}


	public List<Map<String, Object>> retrievetEtcItemList(String ELT_CTRW_NO  ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveEltCtrw params : " + param);
		}

		return getSqlSession().selectList("eltCtrwDAO.retrievetEtcItemList", param);
	}

	public int insertEtcItem(CtEtcItemVO ctEtcItemVO) {
		//전자계약 입력
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ctEtcItemVO.getELT_CTRW_NO());
		param.put("CHG_SQNO", ctEtcItemVO.getCHG_SQNO());
		param.put("SQNO", ctEtcItemVO.getSQNO());
		param.put("ITEM_CODE", ctEtcItemVO.getITEM_CODE());
		param.put("ITEM_NAME", ctEtcItemVO.getITEM_NAME());
		param.put("STANDARD", ctEtcItemVO.getSTANDARD());
		param.put("COUNTRY", ctEtcItemVO.getCOUNTRY());
		param.put("COMPANY", ctEtcItemVO.getCOMPANY());
		param.put("BRAND", ctEtcItemVO.getBRAND());
		param.put("QTY", ctEtcItemVO.getQTY());
		param.put("UPR", ctEtcItemVO.getUPR());
		param.put("ETC1", ctEtcItemVO.getETC1());
		param.put("ETC2", ctEtcItemVO.getETC2());
		param.put("ETC3", ctEtcItemVO.getETC3());
		param.put("ETC4", ctEtcItemVO.getETC4());
		param.put("ETC5", ctEtcItemVO.getETC5());

		if (logger.isDebugEnabled()) {
			logger.debug(">>> ctEtcItemVO : " + param.toString());
		}

		return getSqlSession().insert("eltCtrwDAO.insertEtcItem", ctEtcItemVO);
//		return getSqlSession().insert("eltCtrwDAO.insertEtcItem", param);
	}
	
	public int updateEtcItem(CtEtcItemVO ctEtcItemVO) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> ctEtcItemVO : " + ctEtcItemVO.toString());
		}

		return getSqlSession().insert("eltCtrwDAO.updateEtcItem", ctEtcItemVO);
	}

	public int deleteEtcItem(CtEtcItemVO ctEtcItemVo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> ctEtcItemVO : " + ctEtcItemVo.toString());
		}

		return getSqlSession().insert("eltCtrwDAO.deleteEtcItem", ctEtcItemVo);
	}


	public List<Map<String, Object>> retrievePrintItemList(String ELT_CTRW_NO, String CHG_SQNO) {
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> 	retrievePrintItemList	 : ");
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
	    
	    List<Map<String,Object>> masterList = getSqlSession().selectList("eltCtrwDAO.retrievePrintItemList", param);
	    return masterList;
		// return getSqlSession().selectList("eltCtrwDAO.retrievePrintItemList");

	}


	public List<Map<String, Object>> retrievePrintItemHeader(String ELT_CTRW_NO, String CHG_SQNO) {
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> 	retrievePrintItemHeader	 : ");
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO", ELT_CTRW_NO);
	    param.put("CHG_SQNO", CHG_SQNO);
	    
	    List<Map<String,Object>> detailList = getSqlSession().selectList("eltCtrwDAO.retrievePrintItemHeader", param);
	    return detailList;
		// return getSqlSession().selectList("eltCtrwDAO.retrievePrintItemHeader");
	}

	public Map<String, Object> retrieveTrplCif(String TRPL_C) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("TRPL_C",	TRPL_C);
		return getSqlSession().selectOne("eltCtrwDAO.retrieveTrplCif", param);
	}


	public void supuadate(String eltCtrwNo, String lsChgm) {
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("eltCtrwNo",	eltCtrwNo);
	    param.put("LS_CHGM", lsChgm);
		getSqlSession().update("eltCtrwDAO.supuadate", param);
		
	}

	// 전자계약 바이어 변경 신청상태UPDATE
	public int EltupdateStat(EltCtrwVO eltvo) {
		return getSqlSession().update("eltCtrwDAO.EltupdateStat", eltvo);
	}

	//변경이력테이블에 저장
	public int insertCtrwchg(EltCtrwVO eltvo) {
		return getSqlSession().insert("eltCtrwDAO.insertCtrwchg", eltvo);
	}

	//전자계약서 바이어 변경
	public int updateBuyerStat(EltCtrwVO eltvo) {
		return getSqlSession().update("eltCtrwDAO.updateBuyerStat", eltvo);
	}

	//변경할 이관테이블의 CHG_NO 조회
	public int searchChgno(EltCtrwVO eltvo) {
		return getSqlSession().selectOne("eltCtrwDAO.searchChgno", eltvo);
	}

	//변경완료된 전자계약 이관테이블 update
	public int updateBuyerCtrwchg(EltCtrwVO eltvo) {
		return getSqlSession().update("eltCtrwDAO.updateBuyerCtrwchg", eltvo);
	}

	public List<Map<String, Object>> retrieveChgelt(String BUYER_ENO, String CHECK, String FV_MNCTRWKD, String USR_TPC, String ELT_AUTH_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BUYER_ENO", BUYER_ENO);
		param.put("FV_MNCTRWKD", FV_MNCTRWKD);
		param.put("USR_TPC", USR_TPC);

		if (logger.isDebugEnabled()) {
			logger.info(">>> retrieveRegister params : " + param);
		}
		if (CHECK.equals("1")) {
			param.put("ELT_AUTH_DSC", ELT_AUTH_DSC);
			return getSqlSession().selectList("eltCtrwDAO.retrieveBuyerChgelt", param);
		} else if (CHECK.equals("2")) {
			return getSqlSession().selectList("eltCtrwDAO.retrieveChgelt", param);
		}
		return null;
	}

	public int deleteCtrwchg(EltCtrwVO eltvo) {
		return getSqlSession().delete("eltCtrwDAO.deleteCtrwchg", eltvo);
	}


	public List<Map<String, Object>> retrieveEltCtrwListCh(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD , String BUYER_NA_TRPL_C ,String BUYER_INFO,String BUYER_ID, String BUYER_DSC, String BUYER_KD) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("EDT_KD", EDT_KD);
		param.put("CBO_KD", CBO_KD);
		param.put("FV_STS", FV_STS);
		param.put("FV_MNCTRWKD", FV_MNCTRWKD);
		param.put("BUYER_NA_TRPL_C", BUYER_NA_TRPL_C);
		param.put("BUYER_INFO", BUYER_INFO);
	    param.put("BUYER_ID", BUYER_ID);
	    param.put("BUYER_DSC", BUYER_DSC);
	    param.put("BUYER_KD", BUYER_KD);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveRegister params : " + param);
		}
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwListCh", param);
	}
	
	/**
	 * 계약서 조회 팝업
	 * @param param
	 * @return
	 */
	public List<EltCtrwVO> retrievePopupEltCtrwList(Map<String, Object> param) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrievePopupEltCtrwList params : " + param);
		}
		return getSqlSession().selectList("eltCtrwDAO.retrievePopupEltCtrwList", param);
	}
	
	/**
	 * 관련 계약서 조회
	 * @param param
	 * @return
	 */
	public List<EltCtrwVO> retrieveRelatedEltCtrw(Map<String, Object> param) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveRelatedEltCtrw params : " + param);
		}
		return getSqlSession().selectList("eltCtrwDAO.retrieveRelatedEltCtrw", param);
	}

	//히스토리에 로그남김
	public int insertEltHst(EltCtrwVO eltvo) {
		return getSqlSession().insert("eltCtrwDAO.insertEltHst", eltvo);
	}

	// 전자계약 신청 페이지 로드시에 바이어 소속 구분
	public List<Map<String, Object>> retrieveEltctrwCDList(String SIMP_TPC, String USR_TPC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SIMP_TPC", SIMP_TPC);
		param.put("USR_TPC", USR_TPC);
		
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltctrwCDList",param);
	}

	// 모든 계약서들의 데이터셋 가져오기
	public List<Map<String, Object>> retrieveEltctrwDSList(String CD_TYPE, String BUYER_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CD_TYPE", CD_TYPE);
		param.put("BUYER_DSC", BUYER_DSC);
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltctrwDSList",param);
	}
	
	// 직영점 목록 가져오기
	public List<Map<String, Object>> retrieveEltBranchBzplcList(String type) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TYPE", type);
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltBranchBzplcList", param);
	}
	
	/**
	 * 계약상대자 전자계약 읽음처리(최종변경시간, 변경자만 업데이트)
	 * @param eltCtrwNo
	 * @param chgSqno
	 * @param lsChgm
	 */
	public void updateColbCompEltSts(String eltCtrwNo, String chgSqno, String lsChgm) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", eltCtrwNo);
		param.put("CHG_SQNO", chgSqno);
		param.put("LS_CHGM", lsChgm);
		getSqlSession().update("eltCtrwDAO.updateColbCompEltSts", param);
	}

	/**
	 * 전자계약 엑셀다운로드(체결보고)
	 */
	public List<Map<String, Object>> downloadEltCtrwReport(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD, String BUYER_NA_TRPL_C, String BUYER_ENO, String BUYER_ID, String BUYER_NM, String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("EDT_KD", EDT_KD);
		param.put("CBO_KD", CBO_KD);
		param.put("FV_STS", FV_STS);
		param.put("FV_MNCTRWKD", FV_MNCTRWKD);
		param.put("BUYER_NA_TRPL_C", BUYER_NA_TRPL_C);
		param.put("BUYER_ENO", BUYER_ENO);
		param.put("BUYER_ID", BUYER_ID);
		param.put("BUYER_NM", BUYER_NM);
		param.put("BUYER_DSC", BUYER_DSC);
		param.put("APV_STS", APV_STS);
		param.put("USR_TPC", USR_TPC);
		param.put("ELT_AUTH_DSC", ELT_AUTH_DSC);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveRegister params : " + param);
		}
		return getSqlSession().selectList("eltCtrwDAO.excelReportEltCtrwList", param);
	}
	
	/**
	 * 전자계약 엑셀다운로드(상세조회)
	 */
	public List<Map<String, Object>> downloadExcelReportEltDetail(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD ,String BUYER_NA_TRPL_C ,String BUYER_ENO,String BUYER_ID,String BUYER_NM, String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("EDT_KD", EDT_KD);
		param.put("CBO_KD", CBO_KD);
		param.put("FV_STS", FV_STS);
		param.put("FV_MNCTRWKD", FV_MNCTRWKD);
		param.put("BUYER_NA_TRPL_C", BUYER_NA_TRPL_C);
		param.put("BUYER_ENO", BUYER_ENO);
		param.put("BUYER_ID", BUYER_ID);
		param.put("BUYER_NM", BUYER_NM);
		param.put("BUYER_DSC", BUYER_DSC);
		param.put("USR_TPC", USR_TPC);
		param.put("ELT_AUTH_DSC", ELT_AUTH_DSC);

		return getSqlSession().selectList("eltCtrwDAO.excelReportEltDetailList", param);
	}
	
	public int existDcmApd(EltCtrwDcmApdVO ncvo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> existDcmApd : " + ncvo.toString());
		}
		return getSqlSession().selectOne("eltCtrwDAO.existDcmApd", ncvo);
	}
	
	/* 전자계약_첨부파일 등록/수정 (진행) */
	public int insertDcmApdIng(EltCtrwDcmApdVO ncvo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> insertDcmApdIng : " + ncvo.toString());
		}
		return getSqlSession().insert("eltCtrwDAO.insertDcmApdIng", ncvo);
	}

	/* 전자계약_첨부파일 등록/수정 (진행) */
	public int updateDcmApdIng(EltCtrwDcmApdVO ncvo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> updateDcmApdIng : " + ncvo.toString());
		}
		return getSqlSession().update("eltCtrwDAO.updateDcmApdIng", ncvo);
	}

	/* 전자계약_첨부파일 삭제 (진행) */
	public int deleteDcmApdIng(EltCtrwDcmApdVO ncvo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> deleteDcmApdIng : " + ncvo.toString());
		}
		return getSqlSession().delete("eltCtrwDAO.deleteDcmApdIng", ncvo);
	}
	
	/*
	 * 테이블 이동에 따른 전자계약_첨부파일 상태 변경
	 * 단, 상태값이 없을 경우 변경하지 않음(BLOB데이터 아님)
	 */
	public int updateDcmApdPosition(EltCtrwDcmApdVO ncvo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> updateDcmApdPosition : " + ncvo.toString());
		}
		return getSqlSession().update("eltCtrwDAO.updateDcmApdPosition", ncvo);
	}

	/* 전자계약_첨부파일 테이블 이동 */
	public int moveDcmApdToCpl(EltCtrwDcmApdVO ncvo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> moveDcmApdToCpl : " + ncvo.toString());
		}
		return getSqlSession().insert("eltCtrwDAO.moveDcmApdToCpl", ncvo);
	}

	/* 전자계약_첨부파일 데이터 조회 */
	public List<EltCtrwDcmApdVO> retrieveDcmApdData(EltCtrwDcmApdVO ncvo) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveDcmApdData : " + ncvo.toString());
		}
		return getSqlSession().selectList("eltCtrwDAO.retrieveDcmApdData", ncvo);
	}
	
	public List<Map<String, Object>> retrieveEltCtrwInfoList(String ELT_CTRW_NO, String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwInfoList", param);
	}
	
	public List<Map<String, Object>> retrieveEltCtrwMailList() {
		return getSqlSession().selectList("eltCtrwDAO.retrieveEltCtrwMailList");
	}

	public int retrieveNotAprvEltCtrwCount(String buyerDsc, boolean checkExp) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BUYER_DSC", buyerDsc);
		if (checkExp) {
			param.put("CHECK_EXP", "Y");
		}

		return getSqlSession().selectOne("eltCtrwDAO.retrieveNotAprvEltCtrwCount", param);
	}
	
	public List<Map<String, Object>> retrieveAprvSmsManagerList(String buyerDsc) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BUYER_DSC", buyerDsc);
		
		return getSqlSession().selectList("eltCtrwDAO.retrieveAprvSmsManagerList", param);
	}
	
	public String retrieveEltBuyerDsc(String mnCtrwKd) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MN_CTRW_KD", mnCtrwKd);

		return getSqlSession().selectOne("eltCtrwDAO.retrieveEltBuyerDsc", param);
	}
}