package com.nh.escm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.dao.UserDao;
import com.nh.escm.vo.User;

@Service
public class UserService extends AbstractService {
	
	@Autowired
	private UserDao userDao;
	
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
	
	/**
	 * 사용자 목록 조회 (페이징)
	 * 
	 * @param searchType
	 * @param searchValue	
	 * @param start			시작 index, 0 부터 시작
	 * @param limit			가져올 목록 수
	 * @return
	 */
	public List<User> getUserList(String searchType, String searchValue, int start, int limit) {
		try {
			return userDao.selectList(searchType, searchValue, start, limit);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int countUserList(String searchType, String searchValue) {
		try {
			return userDao.countList(searchType, searchValue);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public boolean isExistUser(String userId) {
		try {
			return userDao.isExistUser(userId);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
}
