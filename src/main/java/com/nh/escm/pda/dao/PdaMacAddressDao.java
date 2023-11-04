package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class PdaMacAddressDao extends AbstractDao {
	
	/** 단말기번호 리스트 페이지 추가 */
	public int getMacAddrCount(String na_bzplc, String na_trmno, String mac_addr, String userType, String glnCode) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("na_bzplc", na_bzplc);
		param.put("na_trmno", na_trmno);
		param.put("mac_addr", mac_addr);
		//사용자 권한 관련 파라메터 (관리자:99)
		param.put("userType", userType);
		param.put("glnCode", glnCode);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> getMacAddrCount >>> params : " + param);
		}
		
		return getSqlSession().selectOne("padMac.getMacAddrCount", param);
	}
	
	/** 단말기번호 리스트 */
	public List<Map<String, Object>> selectMacAddrList(String na_bzplc, String na_trmno, String mac_addr,
			String userType, String glnCode, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("na_bzplc", na_bzplc);
		param.put("na_trmno", na_trmno);
		param.put("mac_addr", mac_addr);
		//사용자 권한 관련 파라메터 (관리자:99)
		param.put("userType", userType);
		param.put("glnCode", glnCode);
		//Paging
		param.put("start", start);
		param.put("end", end);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> selectMacAddrList >>> params : " + param);
		}
		
		return getSqlSession().selectList("padMac.selectMacAddrList", param);
	}
	
	/** 단말기번호 상세 */
	public Map<String, Object> selectMacAddress(String na_bzplc, String na_trmno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("na_bzplc", na_bzplc);
		param.put("na_trmno", na_trmno);
		
		return getSqlSession().selectOne("padMac.selectMacAddr", param);
	}
	
	/** 사업장 코드/명칭 조회 */
	public List<Map<String, Object>> searchBZPLC(String searchType, String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchType", searchType);
		param.put("searchText", searchText);
		
		return getSqlSession().selectList("padMac.searchBZPLC", param);
	}
	
	/** 단말기번호 등록 */
	public int insertMacAddress(String na_bzplc, String na_trmno, String mac_addr, String userId, String rmk_cntn) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("na_bzplc", na_bzplc);
		param.put("na_trmno", na_trmno);
		param.put("mac_addr", mac_addr);
		param.put("fsrgmn_eno", userId);
		param.put("ls_cmeno", userId);
		param.put("rmk_cntn", rmk_cntn);
		
		return getSqlSession().insert("padMac.insertMacAddr", param);
	}
	
	/** 단말기번호 삭제 */
	public int deleteMacAddress(String na_bzplc, String na_trmno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("na_bzplc", na_bzplc);
		param.put("na_trmno", na_trmno);
		
		return getSqlSession().delete("padMac.deleteMacAddr", param);
	}
	
}
