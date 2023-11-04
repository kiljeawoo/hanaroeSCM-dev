package com.nh.escm.pt.member.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.exception.AppetizerException;
import com.nh.escm.pt.member.vo.MbAuthVO;

public class MbAuthDAO extends AbstractDao {

	public List<Map<String, Object>> retrieveMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return getSqlSession().selectList("mbAuthDAO.retrieveMemberAuth", mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/**
	 * 회원권한 등록
	 */
	public int insertMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return getSqlSession().insert("mbAuthDAO.insertMemberAuth", mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/**
	 * 회원권한 수정
	 */
	public int updateMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return getSqlSession().update("mbAuthDAO.updateMemberAuth", mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/**
	 * 회원권한 삭제
	 */
	public int deleteMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return getSqlSession().delete("mbAuthDAO.deleteMemberAuth", mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 권한이 등록되어있는지 확인한다.
	 */
	public List<Map<String, Object>> dupCheckMemberAuth(MbAuthVO mbAuthVO) {
		return getSqlSession().selectList("mbAuthDAO.dupCheckMemberAuth", mbAuthVO);
	}

	
	/*
	 * 전자계약 직매장 점장 권한 조회 
	 * 
	 */
	public List<Map<String, Object>> checkStoreChief(String branch_dsc, String mb_id) {
		try {
			Map<String, Object> param = new HashMap<String, Object>();
			
			param.put("branch_dsc", branch_dsc);  // 01 전자계약 직매장
			param.put("mb_id", mb_id);   
			
			return getSqlSession().selectList("mbAuthDAO.checkStoreChief", param);
			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> checkBranch(String branch_dsc,
			String biz_number) {
		try {
			Map<String, Object> param = new HashMap<String, Object>();
			
			param.put("branch_dsc", branch_dsc);  // 01 전자계약 직매장
			param.put("biz_number", biz_number);   
			
			return getSqlSession().selectList("mbAuthDAO.checkBranch", param);
			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}