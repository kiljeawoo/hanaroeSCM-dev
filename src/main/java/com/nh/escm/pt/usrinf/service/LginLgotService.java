package com.nh.escm.pt.usrinf.service;



import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.pt.usrinf.dao.LginLgotDAO;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.NaTrplCAuthNames;


/**
 * <PRE> LoginService.java</PRE>
 * @author  	: 김복궁
 * @version 	: 1.0 
 * @since    	: 2015. 7. 24.
 * @modified : 
 * @modifier  : 
 */




@Service
public class LginLgotService extends AbstractService {


	@Autowired
	private LginLgotDAO loginDAO;	

	public String isLockUser(String MB_ID) {
		try {			
			return loginDAO.isLockUser(MB_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public boolean isExistUser(String MB_ID, String MB_PW, String TRANS_YN) {
		try {			
			return loginDAO.isExistUser(MB_ID, MB_PW, TRANS_YN);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public boolean isFiredNhUser(String MB_ID) {
		try {			
			return loginDAO.isFiredNhUser(MB_ID);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public void updateLoginTryCount(String MB_ID, String loginYn) {
		try {			
			loginDAO.updateLoginTryCount(MB_ID, loginYn);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	public Map<String, Object> retrieveUser(String MB_ID, String MB_PW, String TRANS_YN) {
		try {			
			return loginDAO.retrieveUser(MB_ID, MB_PW, TRANS_YN);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	public void insertLoginHistory(String MB_ID, String LGIN_IPADR, String DATE) {
		try {			
			loginDAO.insertLoginHistory(MB_ID, LGIN_IPADR, DATE);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public String isFirstLoginYn(String MB_ID) {
		try {
			if ( loginDAO.getLoginHistoryCnt(MB_ID) ==0){
				return "Y";
			}else{
				return "N";
			}
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	public Map<String, Object> retrieveUserType(String MB_ID, String MB_PW, String TRANS_YN) {
		try {
			return loginDAO.retrieveUserType(MB_ID, MB_PW, TRANS_YN);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/**
	 * 회원권한
	 *   - 1: 빌링
	 *   - 2: 전자계약
	 *   - 3: 세금계산서
	 *   - 4: 웹하드
	 *   - 5: 계약상담
	 *   - 6: 전자계약
	 *   - 7: 세금계산서
	 *   - 89AB: ?? (client.check.auth)
	 *   - P: PDA 검수 (2016-09-27 추가)
	 * 
	 * @param MB_ID		회원ID
	 * @return 회원권한 목록 문자열 (구분자: "|")
	 */
	public String retrieveUserAuthList(String MB_ID) {
		try {
			List<Map<String, Object>> authList = loginDAO.retrieveUserAuthList(MB_ID);
			
			StringBuffer sb = new StringBuffer();
			for (Map<String, Object> auth : authList) {
				if (sb.length() > 0) {
					sb.append("|");
				}
				sb.append(auth.get(NaTrplCAuthNames.USR_AUTH_DSC.name()));
			}
			return sb.toString();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 접근권한이 없는 메뉴그룹 목록 조회
	 * 
	 * - 메뉴그룹에 대한 접근권한은 빌링담당자가 설정한다. (부가정보 > 본지사관리 > 메뉴권한관리)
	 * 
	 * @param MB_ID		회원ID
	 * @return 메뉴그룹 목록 문자열 (구분자: "|")
	 */
	public String retrieveNoAuthMenuGroupList(String MB_ID) {
		try {
			List<String> list = loginDAO.retrieveNoAuthMenuGroupList(MB_ID);
			
			StringBuffer sb = new StringBuffer();
			for (String str : list) {
				if (sb.length() > 0) {
					sb.append("|");
				}
				sb.append(str);
			}
			return sb.toString();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 권한으로 회원정보 목록 조회
	 * 
	 * @param NA_TRPL_C		거래처코드
	 * @param USR_AUTH_DSC	사용자권한 (1: 빌링, 2: 전자계약, 3: 세금계산서)
	 * @return
	 */
	public List<Map<String, Object>> retrieveUserListByAuth(String NA_TRPL_C, String USR_AUTH_DSC) {
		
		if (StringUtils.isEmpty(NA_TRPL_C)) {
			throw new IllegalArgumentException("NA_TRPL_C is empty.");
		}
		if (StringUtils.isEmpty(USR_AUTH_DSC)) {
			throw new IllegalArgumentException("USR_AUTH_DSC is empty.");
		}
		
		return loginDAO.retrieveUserListByAuth(NA_TRPL_C, USR_AUTH_DSC);
	}

	public String getPwOverTermYn(String PW_LSRG_DT) {
		
		long differ = DateUtil.getDifferDate(PW_LSRG_DT, DateUtil.getCurrentDate("yyyyMMdd"));
		
		return (differ > 90) ? "Y" : "N";
	}
	
	public boolean isWeakPw(String mbId, String bzNo) {
		try {			
			return loginDAO.isWeakPw(mbId, bzNo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveBlockService(Map<String, Object> param) {
		try {
			return loginDAO.retrieveBlockService(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public boolean update_PT_USR_INF_in_login(Map<String,Object>usr_info_from_interface) {
		if(loginDAO.update_PT_USR_INF_in_login(usr_info_from_interface)) {
			return true;
		}else {
			return false;
		}
	}

	/**
	 check national trade place code exist.
	 @param na_trpl_c represent national trade place code
	 @return boolean
	 * */
	public boolean is_exist_NA_TRPL_C (String na_trpl_c){
		return loginDAO.is_exist_NA_TRPL_C(na_trpl_c);
	}

	/**
	 add new row in PT_SVC_ENT_AMN if PT_SVC_ENT_AMN doesn't have row matches NA_TRPL_C from IF.
	 @param user_info_from_IF
	 @return void
	 * */
	public void add_row_in_PT_SVC_ENT_AMN(Map<String,Object> user_info_from_IF){
		loginDAO.add_row_in_PT_SVC_ENT_AMN(user_info_from_IF);
	}
}
