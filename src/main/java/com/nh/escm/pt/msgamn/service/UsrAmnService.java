package com.nh.escm.pt.msgamn.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.msgamn.dao.UsrAmnDAO;
import com.nh.escm.pt.msgamn.vo.MgSmsInfoVO;
import com.nh.escm.pt.msgamn.vo.UsrAmnVO;

@Service
public class UsrAmnService extends AbstractService {
	
	@Autowired
	private UsrAmnDAO usrAmnDAO;

	public List<UsrAmnVO> retrieveUserAmnList(String dept_id) {
		try {
			return usrAmnDAO.retrieveUserAmnList(dept_id);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void insertUserAmn(UsrAmnVO vo) {
		try{
			usrAmnDAO.insertUserAmn(vo);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
		
	}

	public List<UsrAmnVO> checkUserAmnid(String user_id) {
		try {
			return usrAmnDAO.checkUserAmnid(user_id);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void updateUserAmn(UsrAmnVO vo) {
		try{
			usrAmnDAO.updateUserAmn(vo);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
		
	}

	public void deleteUserAmn(String userid) {
		try{
			usrAmnDAO.deleteUserAmn(userid);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrievePicture(String user_id) {
		try {
			return usrAmnDAO.retrievePicture(user_id);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveDeptAmn(String dept_id) {
		try {
			return usrAmnDAO.retrieveDeptAmn(dept_id);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}


	public List<UsrAmnVO> retrieveCheckAuth(String userID) {
		try {
			return usrAmnDAO.retrieveCheckAuth(userID);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<UsrAmnVO> retrieveEmpeTeam(String dept_id) {
		try {
			return usrAmnDAO.retrieveEmpeTeam(dept_id);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveEmpeList(String dept_sort) {
		try {
			return usrAmnDAO.retrieveEmpeList(dept_sort);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveEmpeAmnListpop(String deptName) {
		try {
			return usrAmnDAO.retrieveEmpeAmnListpop(deptName);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/**
	 * 업무 담당자  정보
	 * @return
	 */
	public List<MgSmsInfoVO> getMgSmsInfo() {
		try {
			return usrAmnDAO.getMgSmsInfo();
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}
	
	/**
	 * SMS 저장
	 * @param 
	 * @return
	 */
	public boolean insertSmsSend(Map<String, Object> params) {
		try {
			return usrAmnDAO.insertSmsSend(params) > 0;
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}	
	
	/**
	 * SMS Sequence
	 * @param 
	 * @return
	 */
	public String getSmsSequence() {
		try {
			return usrAmnDAO.getSmsSequence();
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("error.message.server.exception");
		}
	}

	/**
	 * 하위부서 직원수 Count
	 * @param dept_id
	 * @return
	 */
	public String getUserAmnCnt(String dept_id) {
		try {
			return usrAmnDAO.getUserAmnCnt(dept_id);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}



}
