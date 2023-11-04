package com.nh.escm.pt.usrinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pt.usrinf.vo.BranchBznoVO;
import com.nh.escm.pt.usrinf.vo.MbInfChgVO;
import com.nh.escm.pt.usrinf.vo.UsrConsentVO;

/**
 * <PRE> MbInfChgDAO.java</PRE>
 * @author  	: 김복궁
 * @version 	: 1.0 
 * @since    	: 2015. 7. 24.
 * @modified : 
 * @modifier  : 
 */

public class MbInfChgDAO  extends AbstractDao{

	/** 거래처코드 조회
	 * @param 회원ID 
	 * @return 회원정보 및 회사정보
	 */
	public Map<String, Object> retrieveMB(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return getSqlSession().selectOne("mbInfChgDAO.retrieveMB", param);
	}
	
	/** 거래처코드 조회
	 * @param 회원ID
	 * @param PW  
	 * @return 회원정보 및 회사정보
	 */
	public Map<String, Object> retrieveMB(String MB_PW, String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_PW", MB_PW);
		param.put("MB_ID", MB_ID);
		return getSqlSession().selectOne("mbInfChgDAO.retrieveMB", param);
	}
	
	/** 회원정보기본테이블 수정
	 * @param 회원정보기본  
	 * @return 
	 */
	public int updatePtUsrInf(MbInfChgVO basicInfo) {		
		return getSqlSession().update("mbInfChgDAO.updatePtUsrInf",basicInfo);
	}
	
	/** ID/비밀번호에 해당하는 회원이 있는지 확인
	 * @param 회원정보기본  
	 * @return 
	 */
	public boolean isExistUser(String MB_ID, String MB_PW) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("MB_PW", MB_PW);
		return(Integer) getSqlSession().selectOne("mbInfChgDAO.isExistUser", param)>0;
	}
	
	/** 회원권한조회
	 * @param 회원ID  
	 * @return 
	 */
	public List<Map<String, Object>> retrieveUsrAuthLst(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return getSqlSession().selectList("mbInfChgDAO.retrieveUsrAuthLst", param);
	}
	/** 회원권한조회-master
	 * @param 회원ID  
	 * @return 
	 */
	public List<Map<String, Object>> retrieveUsrAuthMstLst(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return getSqlSession().selectList("mbInfChgDAO.retrieveUsrAuthMstLst", param);
	}

	/** 거래처코드별 시장정보카테고리 조회
	 * @param WRS_SCLFNM 
	 * @param 거래처번호
	 * @return 
	 */
	public List<Map<String, Object>> retriveCtgrInfLst(String NA_TRPL_C, String WRS_SCLFNM) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("WRS_SCLFNM", WRS_SCLFNM);
		return getSqlSession().selectList("mbInfChgDAO.retriveCtgrInfLst", param);
	}
	
	/** 거래처코드별 시장정보카테고리 해지
	 * @param 구분값,거래처번호,카테고리시퀀스,대분류,중분류,소분류,update 사용자
	 * @return 
	 */
	public int updateCtgrInf(String NA_TRPL_C, String CRGR_SEQ,String LCLC, String MCLC, String SCLC, String UPDATE_USER, String CURRENT_DATE) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("CRGR_SEQ", CRGR_SEQ);
		param.put("NA_WRS_LCLC", LCLC);
		param.put("NA_WRS_MCLC", MCLC);
		param.put("NA_WRS_SCLC", SCLC);
		param.put("SVC_ED_DT", CURRENT_DATE);
		param.put("LS_CHGM", UPDATE_USER);		
		return getSqlSession().update("mbInfChgDAO.updateCtgrInf", param);		
	}

	
	/** 거래처코드별 시장정보카테고리 등록/재등록
	 * @param 구분값,거래처번호,카테고리시퀀스,대분류,중분류,소분류,update 사용자
	 * @return 
	 */
	public int insertCtgrInf(String STATUS, String NA_TRPL_C, String CRGR_SEQ, String LCLC, String MCLC, String SCLC, String UPDATE_USER, String CURRENT_DATE) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("STATUS",  STATUS);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("CRGR_SEQ", CRGR_SEQ);
		param.put("NA_WRS_LCLC", LCLC);
		param.put("NA_WRS_MCLC", MCLC);
		param.put("NA_WRS_SCLC", SCLC);
		param.put("SVC_ED_DT", CURRENT_DATE);
		param.put("LS_CHGM", UPDATE_USER);
		return getSqlSession().insert("mbInfChgDAO.insertCtgrInf", param);		
	}

	/** 거래처코드에 해당하는 카테고리가 존재하는지 확인
	 * @param 거래처번호,카테고리시퀀스,대분류,중분류,소분류
	 * @return true/false
	 */
	public boolean existCtgr(String NA_TRPL_C, String CRGR_SEQ, String LCLC, String MCLC, String SCLC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("CRGR_SEQ", CRGR_SEQ);
		param.put("NA_WRS_LCLC", LCLC);
		param.put("NA_WRS_MCLC", MCLC);
		param.put("NA_WRS_SCLC", SCLC);
		return (Integer)getSqlSession().selectOne("mbInfChgDAO.existCtgr", param) >0;		
	}

	/**
	 * 지사 사업자번호 조회
	 * @param NA_TRPL_C
	 * @return
	 */
	public BranchBznoVO retrieveBranchBzno(String NA_TRPL_C) {
		return getSqlSession().selectOne("mbInfChgDAO.retrieveBranchBzno", NA_TRPL_C);
	}
	
	/**
	 * 지사 사업자번호 저장
	 */
	public void mergeBranchBzno(BranchBznoVO vo) {
		getSqlSession().insert("mbInfChgDAO.mergeBranchBzno", vo);
	}

	public void insertBranchBznoHst(BranchBznoVO vo, String currentDTM) {
		
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C", vo.getNA_TRPL_C());
		param.put("BZNO", vo.getBZNO());
		param.put("CLNTNM", vo.getCLNTNM());
		param.put("REPMNM", vo.getREPMNM());
		param.put("ZIP", vo.getZIP());
		param.put("DONGUP", vo.getDONGUP());
		param.put("DONGBW", vo.getDONGBW());
		param.put("BZCCNM", vo.getBZCCNM());
		param.put("BZTPNM", vo.getBZTPNM());
		param.put("MB_ID", vo.getMB_ID());
		param.put("currentDTM", currentDTM);
		param.put("TX_REG", vo.getTX_REG());
		
		getSqlSession().insert("mbInfChgDAO.insertBranchBznoHst", param);
	}

	public Map<String, Object> retrieveUsrConsent(String bsnDsc, String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", bsnDsc);	
		param.put("NA_TRPL_C", naTrplC);	
		
		return getSqlSession().selectOne("mbInfChgDAO.retrieveUsrConsent", param) ;

	}
	
	public  Map<String, Object> retrieveUsrConsentCount(String bsnDsc, String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", bsnDsc);	
		param.put("NA_TRPL_C", naTrplC);	
		
		return getSqlSession().selectOne("mbInfChgDAO.retrieveUsrConsentCount", param) ;
	}
 	
	public int insertUsrConsent(UsrConsentVO usrConsentVO) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", usrConsentVO.getBSN_DSC());
		param.put("NA_TRPL_C", usrConsentVO.getNA_TRPL_C());
		param.put("MB_ID", usrConsentVO.getMB_ID());
		param.put("CONSENT_YN", usrConsentVO.getCONSENT_YN());

		return getSqlSession().insert("mbInfChgDAO.insertUsrConsent", param) ;
	}

	//TB_PD_MD_USR_INF에 존재 하는지 체크
	public int checkM(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return (Integer) getSqlSession().selectOne("mbInfChgDAO.checkM", param);
	}
	
	//TB_PD_MD_USR_INF 사용 update
	public int updateTbpdmd(String MB_ID,int check) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("check", check);
		return getSqlSession().update("mbInfChgDAO.updateTbpdmd",param);
		
	}
	//TB_PD_MD_USR_INF 권한등록시, insert
	public int insertTbpdmdUSr(MbInfChgVO basicInfo) {
		return getSqlSession().insert("mbInfChgDAO.insertTbpdmdUSr",basicInfo);
	}

	public void downloadExcelRetriveCtgrInfLst(String NA_TRPL_C, String WRS_SCLFNM, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("WRS_SCLFNM", WRS_SCLFNM);
		getSqlSession().select("mbInfChgDAO.downloadExcelRetriveCtgrInfLst", param, handler);
	}


}
