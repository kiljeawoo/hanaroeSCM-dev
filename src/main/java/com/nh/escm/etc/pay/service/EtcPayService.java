package com.nh.escm.etc.pay.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.etc.pay.dao.EtcPayDao;

@Service
public class EtcPayService extends AbstractService {

	@Autowired
	private EtcPayDao etcPayDao;
	
	public int searchCnt(String gln, String kbn) {
		try {
			return etcPayDao.searchCnt(gln, kbn);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> empList(String gln, String kbn) {
		try {
			return etcPayDao.empList(gln, kbn);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> searchList(String gln, String kbn, String empNo, String mbPw) {
		try {
			return etcPayDao.searchList(gln, kbn, empNo, mbPw);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveList(String gln, String kbn, String empNo, String mbPw) {
		try {
			return etcPayDao.retrieveList(gln, kbn, empNo, mbPw);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int updateEtcPay(String gln, String bnkNm, String acno, String dprnm, String chrrnm, String ctcplTelno, String empNo, String mbPw) {
		try {
			return etcPayDao.updateEtcPay(gln, bnkNm, acno, dprnm, chrrnm, ctcplTelno, empNo, mbPw);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> searchUserList(String gln) {
		try {
			return etcPayDao.searchUserList(gln);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int initEtcPayUser(String gln) {
		try {
			return etcPayDao.initEtcPayUser(gln);
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
/*	
	public void insert(User user) {
		try {
			if (isExistUser(user.getUserId())) {
				throw new AppetizerException(ErrorCode.FAILURE, "error.message.dupUserId");
			}
			userDao.insert(user);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public void update(User user) {
		try {
			userDao.update(user);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public void delete(String userId) {
		try {
			userDao.delete(userId);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public User getUser(String userId) {
		try {
			User user = userDao.select(userId);
			if (user == null) {
				throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, "Not found user. (userId: " + userId + ")");
			}
			return user;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
*/	
}
