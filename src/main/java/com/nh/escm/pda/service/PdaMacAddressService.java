package com.nh.escm.pda.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pda.dao.PdaMacAddressDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class PdaMacAddressService extends AbstractService {

	@Autowired
	private PdaMacAddressDao pdaDao;
	
	/** 단말기번호관리 리스트 페이징 추가 */
	public int getMacAddrCount(String na_bzplc, String na_trmno, String mac_addr,
			String userType, String glnCode) {
		try {
			return pdaDao.getMacAddrCount(na_bzplc, na_trmno, mac_addr, userType, glnCode);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/** 단말기번호관리 리스트 / 중복확인 */
	public List<Map<String, Object>> selectMacAddrList(String na_bzplc, String na_trmno, String mac_addr,
			String userType, String glnCode, int start, int end) {
		return pdaDao.selectMacAddrList(na_bzplc, na_trmno, mac_addr, userType, glnCode, start, end);
	}
	
	/** 단말기번호관리 상세 */
	public Map<String, Object> selectMacAddress(String na_bzplc, String na_trmno) {
		return pdaDao.selectMacAddress(na_bzplc, na_trmno);
	}
	
	/** 단말기번호관리 등록 / 사업장 정보 */
	public List<Map<String, Object>> searchBZPLC(String searchType, String searchText) {
		return pdaDao.searchBZPLC(searchType, searchText);
	}
	
	/** 단말기번호관리 등록 */
	public void insertMacAddress(String na_bzplc, String na_trmno, String mac_addr, String userId, String rmk_cntn) {
		pdaDao.insertMacAddress(na_bzplc, na_trmno, mac_addr, userId, rmk_cntn);
	}
	
	/** 단말기번호관리 삭제 */
	public void deleteMacAddress(String na_bzplc, String na_trmno) {
		pdaDao.deleteMacAddress(na_bzplc, na_trmno);
	}

}
