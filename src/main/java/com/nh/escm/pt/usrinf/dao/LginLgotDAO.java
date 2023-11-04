package com.nh.escm.pt.usrinf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class LginLgotDAO  extends AbstractDao{
	
	public String isLockUser(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return getSqlSession().selectOne("lginLgotDAO.isLockUser", param);
	}
	
	public boolean isExistUser(String MB_ID, String MB_PW, String TRANS_YN) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("MB_ID", MB_ID);
		param.put("MB_PW", MB_PW);		
		param.put("TRANS_YN", TRANS_YN);	
		return (Integer) getSqlSession().selectOne("lginLgotDAO.isExistUser", param) > 0;
	}
	
	public boolean isFiredNhUser(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("MB_ID", MB_ID);
		return (Integer) getSqlSession().selectOne("lginLgotDAO.isFiredNhUser", param) == 0;
	}
	
	public void updateLoginTryCount(String MB_ID, String loginYn) {	
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("loginYn", loginYn);
		getSqlSession().insert("lginLgotDAO.updateLoginTryCount", param);
	}

	public Map<String, Object> retrieveUser(String MB_ID, String MB_PW, String TRANS_YN) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("MB_PW", MB_PW);
		param.put("TRANS_YN", TRANS_YN);
		return getSqlSession().selectOne("lginLgotDAO.retrieveUser", param);
	}

	public void insertLoginHistory(String MB_ID, String LGIN_IPADR, String LGIN_DTM) {	
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("LGIN_IPADR", LGIN_IPADR);
		param.put("LGIN_DTM", LGIN_DTM);		
		getSqlSession().insert("lginLgotDAO.insertLoginHistory", param);
	}

	public int getLoginHistoryCnt(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);		
		return getSqlSession().selectOne("lginLgotDAO.getLoginHistoryCnt", param);
	}

	public Map<String, Object> retrieveUserType(String MB_ID, String MB_PW, String TRANS_YN) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("MB_PW", MB_PW);	
		param.put("TRANS_YN", TRANS_YN);	
		return getSqlSession().selectOne("lginLgotDAO.retrieveUserType", param);
	}

	public List<Map<String, Object>> retrieveUserAuthList(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);		
		return getSqlSession().selectList("lginLgotDAO.retrieveUserAuthList", param);
	}
	
	/**
	 * 접근권한이 없는 메뉴그룹 목록 조회
	 * 
	 * @param MB_ID		회원ID
	 * @return
	 */
	public List<String> retrieveNoAuthMenuGroupList(String MB_ID) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		
		return getSqlSession().selectList("lginLgotDAO.retrieveNoAuthMenuGroupList", param);
	}
	
	/**
	 * 권한으로 사용자 목록 조회
	 * 
	 * @param NA_TRPL_C		거래처코드
	 * @param USR_AUTH_DSC	사용자권한 (1: 빌링, 2: 전자계약, 3: 세금계산서)
	 * @return
	 */
	public List<Map<String, Object>> retrieveUserListByAuth(String NA_TRPL_C, String USR_AUTH_DSC) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("USR_AUTH_DSC", USR_AUTH_DSC);
		
		return getSqlSession().selectList("lginLgotDAO.retrieveUserListByAuth", param);
	}
	
	public boolean isWeakPw(String mbId, String bzNo) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("mbId", mbId);
		param.put("bzNo", bzNo);
		return (Integer) getSqlSession().selectOne("lginLgotDAO.isWeakPw", param) > 0;
	}
	
	public List<Map<String, Object>> retrieveBlockService(Map<String, Object> param) {
		return getSqlSession().selectList("lginLgotDAO.retrieveBlockService", param);
	}
	
	public boolean update_PT_USR_INF_in_login(Map<String,Object>usr_info_from_interface) {
		if(1==getSqlSession().update("lginLgotDAO.update_PT_USR_INF_in_login", usr_info_from_interface)) {
			return true;
		}else {
			return false;
		}
	}

	/*check to exist national trading place from PT_SVC_ENT_AMN */
	public boolean is_exist_NA_TRPL_C(String na_trpl_c){
		if(1==getSqlSession().selectOne("lginLgotDAO.is_exist_NA_TRPL_C", na_trpl_c)) {
			return true;
		}else{
			return false;
		}
	}
	/**
	 add new row in PT_SVC_ENT_AMN if PT_SVC_ENT_AMN doesn't have row matches NA_TRPL_C from IF.
	 @param user_info_from_IF
	 @return void
	  * */
	public void add_row_in_PT_SVC_ENT_AMN(Map<String,Object> user_info_from_IF){
		getSqlSession().insert("lginLgotDAO.add_row_in_PT_SVC_ENT_AMN", user_info_from_IF);
	}
}