package com.nh.escm.pt.member.service;

/**
 * <PRE>  
 * 	Member Auth Service
 * </PRE>
 * @author  : 윤기혁
 * @version : 1.0 
 * @since : 2017.09.25
 * @modified
 * @modifier 
 */

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.member.dao.MbAuthDAO;
import com.nh.escm.pt.member.vo.MbAuthVO;

@Service
public class MbAuthService extends AbstractService {

	@Autowired
	private MbAuthDAO mbAuthDAO;

	public List<Map<String, Object>> retrieveMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return mbAuthDAO.retrieveMemberAuth(mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int insertMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return mbAuthDAO.insertMemberAuth(mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int updateMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return mbAuthDAO.updateMemberAuth(mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int deleteMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return mbAuthDAO.deleteMemberAuth(mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> dupCheckMemberAuth(MbAuthVO mbAuthVO) {
		try {
			return mbAuthDAO.dupCheckMemberAuth(mbAuthVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> checkStoreChief(String branch_dsc, String mb_id) {
		try {
			return mbAuthDAO.checkStoreChief(branch_dsc, mb_id);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> checkBranch(String branch_dsc, String biz_number) {
		try {
			return mbAuthDAO.checkBranch(branch_dsc, biz_number);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}