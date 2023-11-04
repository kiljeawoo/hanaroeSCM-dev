package com.nh.escm.pt.usrinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pt.usrinf.vo.MbEntVO;
import com.nh.escm.pt.usrinf.vo.PayVO;
import com.nh.escm.pt.usrinf.vo.SvcVO;

/**
 * <pre>MbEntDAO.java</pre>
 * @author 김복궁
 * @version 1.0
 * @since 2015. 10. 15.
 * @modified 
 * @modifier `
 */
public class MbEntDAO  extends AbstractDao{


	/** 거래처코드 조회
	 * @param BZ01
	 * @param BZ02
	 * @param BZ03
	 * @param USR_TPC : 회원가입종류 [1:협력업체, 3: 사업장]
	 * @return 거래처코드목록
	 */
	public List<Map<String, Object>> retriveNaTrplCList(String BZ01, String BZ02, String BZ03,String USR_TPC) {
		
		/*
		 * 사업자번호를 하나로 합친다. 
		 */
		
		StringBuffer sb = new StringBuffer();
		
		sb.append(BZ01);
		sb.append(BZ02);
		sb.append(BZ03);

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZNO", sb.toString());
		param.put("USR_TPC",USR_TPC);

		return getSqlSession().selectList("mbEntDAO.retriveNaTrplCList", param) ;
	}

	/** 회사정보 조회
	 * @param 사업자번호 
	 * @param 거래처코드
	 * @param 회원종류 : 회원가입종류 [1:협력업체, 3: 사업장]
	 * @return 사업자번호,거래처코드,회사명,대표전화번호,대표자명,우편번호,회사주소
	 */	
	public Map<String, Object> retrieveOfficeInfo(String BZNO1, String BZNO2, String BZNO3, String NA_TRPL_C, String USR_TPC) {
		Map<String, Object> param = new HashMap<String, Object>();
		StringBuffer sb = new StringBuffer();
		sb.append(BZNO1);
		sb.append(BZNO2);
		sb.append(BZNO3);
		
		if(BZNO1==null) {
			param.put("BZNO", null);
		}else {
			param.put("BZNO", sb.toString());
		}
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("USR_TPC", USR_TPC);
		return  getSqlSession().selectOne("mbEntDAO.retrieveOfficeInfo", param);		
	}

	/** 거래처코드에 해당하는 권한 조회
	 * @param 거래처코드
	 * @return 회원ID, 사용자이름, 권한,가입진행상태
	 * */
	public List<Map<String, Object>> retrieveNaTrplCAuthLst(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C",NA_TRPL_C);		
		return getSqlSession().selectList("mbEntDAO.retrieveNaTrplCAuthLst", param) ;
	}

	/** 회원ID중복체크
	 * @param 회원ID
	 * @return 중복여부
	 * */

	public int checkMbIdDup(String MB_ID ) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return (Integer) getSqlSession().selectOne("mbEntDAO.checkMbIdDup", param);

	}
	
	/** 회원ID중복체크
	 * @param 회원ID
	 * @return 중복여부
	 * */

	public int checkMbIdDup(String MB_ID ,String USR_TPC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		logger.debug("USR_TPC =>> " + USR_TPC);
		
		param.put("USR_TPC", USR_TPC);		
		return (Integer) getSqlSession().selectOne("mbEntDAO.checkMbIdDupB", param);

	}

	public boolean existBasicSvc(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);				
		return (Integer) getSqlSession().selectOne("mbEntDAO.existBasicSvc", param) > 0;
	}
	
	
	/** 거래처코드에 해당하는 가입서비스 조회-history
	 * @param 거래처코드
	 * @return 거래처코드,가입서비스ID
	 * */
	public List<Map<String, Object>> retriveEntSvcList(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C",NA_TRPL_C);		
		return getSqlSession().selectList("mbEntDAO.retriveEntSvcList", param) ;
	}
	
	/** 거래처코드에 해당하는 가입서비스 조회 -master
	 * @param 거래처코드
	 * @return 거래처코드,가입서비스ID
	 * */
	public List<Map<String, Object>> retriveEntSvcMstList(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C",NA_TRPL_C);		
		return getSqlSession().selectList("mbEntDAO.retriveEntSvcMstList", param) ;
	}
	
	

	/** 거래처코드에 해당하는 납부정보 조회Master
	 * @param 거래처코드
	 * @return 결제방식코드,희망출금일,예금주명,개인법인구분코드,예금주번호,은행코드,계좌번호,통장파일명,통장파일임시명,사업자등록증파일명,사업자등록증파일임시명,파일경로명,출금이체동의서여부,금융거래정보제공동의여부
	 * */
	public Map<String, Object> retrievePayInfoMst(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C",NA_TRPL_C);		
		return getSqlSession().selectOne("mbEntDAO.retrievePayInfoMst", param) ;
	}
	/** 거래처코드에 해당하는 납부정보 조회History
	 * @param 거래처코드
	 * @return 결제방식코드,희망출금일,예금주명,개인법인구분코드,예금주번호,은행코드,계좌번호,통장파일명,통장파일임시명,사업자등록증파일명,사업자등록증파일임시명,파일경로명,출금이체동의서여부,금융거래정보제공동의여부
	 * */
	public Map<String, Object> retrievePayInfo(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C",NA_TRPL_C);		
		return getSqlSession().selectOne("mbEntDAO.retrievePayInfo", param) ;
	}

	/** 거래처코드에 해당하는 가입진행중인 권한여부
	 * @param NA_TRPL_C
	 * @return 빌링권한 가입처리여부, 세금계산서권한 가입처리여부  
	 * */
	public Map<String, Object> retrieveSvcAuthIng(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		return getSqlSession().selectOne("mbEntDAO.retrieveSvcAuthIng" , param) ;		
	}

	/** 사용자권한 이력테이블 등록
	 * @param  회원ID, 권한, 시간, 진행상태코드, 거래처코드, 신청상태
	 * @return 빌링권한 가입처리여부, 세금계산서권한 가입처리여부  
	 * */
	public int insertPtUsrAuthHst(String MB_ID, String SVC_ID, String CURRENT_DATE, String ENT_PRG_STSC, String NA_TRPL_C, String RQ_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("MB_ID", MB_ID);
		param.put("USR_AUTH_DSC", SVC_ID);
		param.put("AUTH_RG_DTM", CURRENT_DATE);
		param.put("ENT_PRG_STSC", ENT_PRG_STSC);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("RQ_DSC", RQ_DSC);
		return getSqlSession().insert("mbEntDAO.insertPtUsrAuthHst", param);		
	}

	/** 사용자기본테이블 등록
	 * @param 회원정보
	 * @return   
	 * */
	public int insertPtUsrInf(MbEntVO mbEntVO) {
		return getSqlSession().insert("mbEntDAO.insertPtUsrInf", mbEntVO);
	}

	/**서비스 이력테이블 등록
	 * @param 거래처코드, 서비스ID, 시간, 진행상태코드, 인감서명임시파일명,회원ID, 신청상태 
	 * @return 가입서비스변경시  
	 * */
	public int insertPtSvcEntHst(String NA_TRPL_C, String SVC_ID, String CURRENT_DATE, String ENT_PRG_STSC, String MB_ID , String RQ_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("MB_ID", MB_ID);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("SVC_ID", SVC_ID);
		param.put("SVC_ENT_DTM", CURRENT_DATE);
		param.put("ENT_PRG_STSC", ENT_PRG_STSC);
		param.put("RQ_DSC", RQ_DSC);
		return getSqlSession().insert("mbEntDAO.insertPtSvcEntHst", param);		
	}
	
	/**납부정보 이력 테이블 등록
	 * @param 회원ID, 거래처코드, 등록시간, 가입진행상태  
	 * @return   
	 * */
	public int insertPtPayInfHst(String MB_ID, String NA_TRPL_C, String CURRENT_DATE, String ENT_PRG_STSC, PayVO pay) {		
		pay.setMB_ID(MB_ID);
		pay.setNA_TRPL_C(NA_TRPL_C);
		pay.setPAY_INF_RG_DTM(CURRENT_DATE);
		pay.setENT_PRG_STSC(ENT_PRG_STSC);		
		return getSqlSession().insert("mbEntDAO.insertPtPayInfHst", pay);		

	}


	/**전자서명 테이블 등록
	 * @param 거래처코드, 시간, 전자서명값, 진행상태코드, 회원ID  
	 * @return   
	 * */
	public int insertPtPayInfElsg(String MB_ID, String NA_TRPL_C,String updateDTM, String ENT_PRG_STSC, PayVO pay) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("ELSG_DTM", updateDTM);
		param.put("ELSG_CNTN", pay.getELSG_CNTN());
		param.put("ENT_PRG_STSC", ENT_PRG_STSC);
		param.put("MB_ID", MB_ID);		
		return getSqlSession().insert("mbEntDAO.insertPtPayInfElsg" , param) ;

	}

	/**PUSH알림 테이블 등록
	 * @param 회원ID,상태  
	 * @return   
	 * */
	public int insertMbPushAncAmn(String MB_ID, String STATUS) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("STATUS", STATUS);
		return getSqlSession().insert("mbEntDAO.insertMbPushAncAmn" , param) ;		
	}

	/**바이어회사정보
	 * @param MB_ID 
	 * @param 사업자번호, 거래처번호  
	 * @return   
	 * */	
	public Map<String, Object> retrieveBuyerOfficeInfo(String BZNO1,
			String BZNO2, String BZNO3, String NA_TRPL_C, String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		StringBuffer sb = new StringBuffer();
		sb.append(BZNO1);
		sb.append(BZNO2);
		sb.append(BZNO3);

		param.put("BZNO", sb.toString());
		param.put("NA_TRPL_C", NA_TRPL_C);		
		param.put("MB_ID", MB_ID);
		return  getSqlSession().selectOne("mbEntDAO.retrieveBuyerOfficeInfo", param);
	}

	/**거래처번호에 해당하는 권한수 
	 * @param 거래처번호  
	 * @return   
	 * */	
	public int retrieveAuthCnt(String NA_TRPL_C, String USR_AUTH_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("USR_AUTH_DSC", USR_AUTH_DSC);		
		return (Integer) getSqlSession().selectOne("mbEntDAO.retrieveAuthCnt", param);
	}

	/**거래처번호에 해당하는 가입서비스 
	 * @param 거래처번호  
	 * @return   
	 * */	
	public int retrieveEntSvcCnt(String NA_TRPL_C, String SVC_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("SVC_ID", SVC_ID);		
		return (Integer) getSqlSession().selectOne("mbEntDAO.retrieveEntSvcCnt", param);
	}


	/**가입서비스 삭제 
	 * @param 거래처번호, 가입서비스  
	 * @return   
	 * */	
	public int deletePtSvcEntAmn(SvcVO svc) {				
		return getSqlSession().delete("mbEntDAO.deletePtSvcEntAmn", svc) ;
	}

	/**가입서비스 등록 
	 * @param 거래처번호, 가입서비스, 회원ID  
	 * @return   
	 * */
	public int insertPtSvcEntAmn(String NA_TRPL_C, String SVC_ID, String MB_ID) {		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("SVC_ID", SVC_ID);
		param.put("MB_ID", MB_ID);		
		return getSqlSession().insert("mbEntDAO.insertPtSvcEntAmn", param);
	}

	/**회원이 가지고 있는 권한삭제 
	 * @param 권한종류, 회원ID  
	 * @return   
	 * */
	public int deletePtUsrAuth(SvcVO auth) {
		return getSqlSession().delete("mbEntDAO.deletePtUsrAuth", auth) ;		
	}

	/**회원권한등록 회원정보변경
	 * @param 권한종류, 회원ID  
	 * @return   
	 * */
	public int insertPtUsrAuth(String MB_ID, String USR_AUTH_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("USR_AUTH_DSC", USR_AUTH_DSC);
		return getSqlSession().insert("mbEntDAO.insertPtUsrAuth", param);	
	}
	
	/**회원권한등록 회원가입 
	 * @param 권한종류, 회원ID  
	 * @return   
	 * */
	public int insertPtUsrAuthNew(String MB_ID, String USR_AUTH_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("USR_AUTH_DSC", USR_AUTH_DSC);
		if("M".equals(USR_AUTH_DSC)){
			getSqlSession().selectOne("mbEntDAO.insertPrice", param);
		}else{
			
		}
		return getSqlSession().insert("mbEntDAO.insertPtUsrAuth", param);	
	}


	/**SMS전송 
	 * @param   
	 * @return    
	 * */
	public int insertSmsSend(long MSG_ID, String USER_ID, int SCHEDULE_TYPE,
			String SUBJECT, String SMS_MSG, String SEND_DATE, String DEST_TYPE,
			String DEST_COUNT, String DEST_INFO, int SEND_STATUS,
			int SEND_COUNT, int SEND_RESULT, String CALLBACK)  {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MSG_ID", MSG_ID);
		param.put("USER_ID", USER_ID);
		param.put("SCHEDULE_TYPE", SCHEDULE_TYPE);
		param.put("SUBJECT", SUBJECT);
		param.put("SMS_MSG", SMS_MSG);
		param.put("SEND_DATE", SEND_DATE);
		param.put("DEST_TYPE", DEST_TYPE);
		param.put("DEST_COUNT", DEST_COUNT);
		param.put("DEST_INFO", DEST_INFO);
		param.put("SEND_STATUS", SEND_STATUS);
		param.put("SEND_COUNT", SEND_COUNT);
		param.put("SEND_RESULT", SEND_RESULT);
		param.put("CALLBACK", CALLBACK);

		return getSqlSession().insert("mbEntDAO.insertSmsSend", param);
	}

	
	/**MMS전송 
	 * @param   
	 * @return    
	 * */
	public int insertMmsSend(long MSG_ID, String USER_ID, int SCHEDULE_TYPE,
			String SUBJECT, String MMS_MSG, String NOW_DATE, String SEND_DATE, String DEST_TYPE,
			String DEST_COUNT, String DEST_INFO, int SEND_STATUS,
			int SEND_COUNT, int SEND_RESULT, String CALLBACK, int CONTENT_COUNT, int MSG_TYPE)  {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MSG_ID", MSG_ID);
		param.put("USER_ID", USER_ID);
		param.put("SCHEDULE_TYPE", SCHEDULE_TYPE);
		param.put("SUBJECT", SUBJECT);
		param.put("MMS_MSG", MMS_MSG);
		param.put("NOW_DATE", NOW_DATE);
		param.put("SEND_DATE", SEND_DATE);
		param.put("DEST_TYPE", DEST_TYPE);
		param.put("DEST_COUNT", DEST_COUNT);
		param.put("DEST_INFO", DEST_INFO);
		param.put("SEND_STATUS", SEND_STATUS);
		param.put("SEND_COUNT", SEND_COUNT);
		param.put("SEND_RESULT", SEND_RESULT);
		param.put("CONTENT_COUNT", CONTENT_COUNT);
		param.put("MSG_TYPE", MSG_TYPE);
		param.put("CALLBACK", CALLBACK);

		return getSqlSession().insert("mbEntDAO.insertMmsSend", param);
	}	



	/**Email전송 
	 * @param   
	 * @return    
	 * */
	public int insertEmailSend(
			  long SEQIDX
			, String SUBJECT
			, String QRY
			, String MAILFROM
			, String MAILTO
			, String REPLYTO
			, String ERRORSTO
			, String SDATE
			, String TDATE
			, String ATC_SET
			, String RNAME
			, String MTYPE
			, String MAILIDX
			, String CONTENT
			, String HTML 
			)  {


		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SEQIDX", SEQIDX);
		param.put("SUBJECT", SUBJECT);
		param.put("QRY", QRY);
		param.put("MAILFROM", MAILFROM);
		param.put("MAILTO", MAILTO);
		param.put("REPLYTO", REPLYTO);
		param.put("ERRORSTO", ERRORSTO);
		param.put("SDATE", SDATE);
		param.put("TDATE", TDATE);
		param.put("ATC_SET", ATC_SET);
		param.put("RNAME", RNAME);
		param.put("MTYPE", MTYPE);
		param.put("MAILIDX", MAILIDX);
		param.put("CONTENT", CONTENT);
		param.put("HTML", HTML);

		return getSqlSession().insert("mbEntDAO.insertEmailSend", param);
	}

	public int insertMsgrUser(String MB_ID, String USR_NM, String USR_MPNO, String USR_EMAIL) { 
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("USER_ID", MB_ID);
		param.put("USER_NAME", USR_NM);
		param.put("MOBILE", USR_MPNO);
		param.put("EMAIL", USR_EMAIL);
		param.put("DEPT_ID", "99999");
		param.put("DEPT_NAME", "단위사업자");
		return getSqlSession().insert("mbEntDAO.insertMsgrUser", param);
		
	}

	public boolean isExistBuillingAuth(String NA_TRPL_C, String USR_AUTH_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("USR_AUTH_DSC", USR_AUTH_DSC);		 		
		return (Integer)getSqlSession().selectOne("mbEntDAO.isExistBuillingAuth", param) > 0;
	}

	public boolean isExistNaBzPlAmn(String MB_ID, String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("NA_TRPL_C", NA_TRPL_C);		 		
		return (Integer)getSqlSession().selectOne("mbEntDAO.isExistNaBzPlAmn", param) > 0;
	}
	public boolean isExistMbId(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return (Integer)getSqlSession().selectOne("mbEntDAO.isExistMbId", param) > 0;
	}
	public String selectPayRepSeq() {
		return getSqlSession().selectOne("mbEntDAO.selectPayRepSeq");
	}
	public String selectPayRepSeq(String naTrplC) {
		HashMap param = new HashMap();
		param.put("NA_TRPL_C", naTrplC);
		return getSqlSession().selectOne("mbEntDAO.selectSeq", param);
	}
	public void insertPayReqHis(String naTrplC, String payRepSeq) {
		HashMap param = new HashMap();
		param.put("NA_TRPL_C", naTrplC);
		param.put("SEQ", payRepSeq);
		getSqlSession().insert("mbEntDAO.insertPayReqHis", param);
	}
	
	// USR_AUTH_DSC R : 가격할인 으로 들어왔을때
	public void insertPrice(String mb_ID) {
		HashMap param = new HashMap();
		param.put("MD_ID", mb_ID);
		getSqlSession().insert("mbEntDAO.insertPrice", param);
	}

	/*휴면상태에서 완료로 update*/
	public int updateReststscout(MbEntVO restmb) {
		return getSqlSession().update("mbEntDAO.updateReststscout",restmb);
	}
	/*상태업데이트시 history입력*/
	public int insertUserAuthHst(MbEntVO restmb) {
		return getSqlSession().update("mbEntDAO.insertUserAuthHst",restmb);
	}
}