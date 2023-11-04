package com.nh.escm.pt.comn.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.comn.dao.MblDvcAmnDAO;
import com.nh.escm.pt.comn.vo.MblAppVO;
import com.nh.escm.pt.comn.vo.MblDvcAmnVO;

public class MblDvcAmnService extends AbstractService {
	
	@Autowired
	private MblDvcAmnDAO mblDvcAmnDAO;
	
	public List<MblDvcAmnVO> retrieveMblDvcAmn(String USER_ID, String DVIC_ID) {
		try {
			return mblDvcAmnDAO.retrieveMblDvcAmn(USER_ID, DVIC_ID);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int insertMblDvcAmn(MblDvcAmnVO vo) {
		try{
			return mblDvcAmnDAO.insertMblDvcAmn(vo);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	public List<MblDvcAmnVO> retrievePushInfo(String MB_ID) {
		try {
			return mblDvcAmnDAO.retrievePushInfo(MB_ID);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int updatePushInfo(MblDvcAmnVO vo) {
		try{
			return mblDvcAmnDAO.updatePushInfo(vo);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	public List<MblDvcAmnVO> retrievePushSendInfo() {
		try {
			return mblDvcAmnDAO.retrievePushSendInfo();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	//푸쉬 리스트
	public int retrievePushListCount(String USER_ID,String DVIC_ID) {
		try {
			int rowCnt = mblDvcAmnDAO.retrievePushListCount(USER_ID, DVIC_ID);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrievePushList(String USER_ID, String DVIC_ID, int start, int end) {
		try {
			return mblDvcAmnDAO.retrievePushList(USER_ID, DVIC_ID, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 푸시 메시지 조회
	 * @param vo
	 * @return
	 */
	public List<MblAppVO> retrieveAppPushList(MblAppVO vo) {
		try {
			return mblDvcAmnDAO.retrieveAppPushList(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/**
	 * 등록 기기 정보 조회
	 * @param vo
	 * @return
	 */
	public MblAppVO retrieveAppDvic(MblAppVO vo) {
		try {
			return mblDvcAmnDAO.retrieveAppDvic(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 앱 사용 기기 등록
	 * @param vo
	 * @return
	 */
	public int insertAppDvic(MblAppVO vo) {
		try {
			return mblDvcAmnDAO.insertAppDvic(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 유저 등록 기기 정보 조회
	 * @param vo
	 * @return
	 */
	public MblAppVO retrieveAppUserDvic(MblAppVO vo) {
		try {
			return mblDvcAmnDAO.retrieveAppUserDvic(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 유저 기기 등록
	 * @param vo
	 * @return
	 */
	public int insertAppUserDvic(MblAppVO vo) {
		try {
			return mblDvcAmnDAO.insertAppUserDvic(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}