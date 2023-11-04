package com.nh.escm.pt.comn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pt.comn.vo.MblAppVO;
import com.nh.escm.pt.comn.vo.MblDvcAmnVO;

public class MblDvcAmnDAO extends AbstractDao {
	
	public List<MblDvcAmnVO> retrieveMblDvcAmn(String USER_ID, String DVIC_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("USER_ID", USER_ID);
		param.put("DVIC_ID", DVIC_ID);
		return getSqlSession().selectList("mblDvcAmnDAO.retrieveMblDvcAmn", param);
	}
	
	public int insertMblDvcAmn(MblDvcAmnVO vo) {
		return getSqlSession().insert("mblDvcAmnDAO.insertMblDvcAmn", vo);
	}
	
	public List<MblDvcAmnVO> retrievePushInfo(String MB_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		return getSqlSession().selectList("mblDvcAmnDAO.retrievePushInfo", param);
	}
	
	public int updatePushInfo(MblDvcAmnVO vo) {
		return getSqlSession().insert("mblDvcAmnDAO.updatePushInfo", vo);
	}
	
	public List<MblDvcAmnVO> retrievePushSendInfo() {
		Map<String, Object> param = new HashMap<String, Object>();
		//param.put("MB_ID", MB_ID);
		return getSqlSession().selectList("mblDvcAmnDAO.retrievePushSendInfo", param);
	}
	// 푸쉬 리스트용
	public List<Map<String, Object>> retrievePushList(String USER_ID, String DVIC_ID, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("USER_ID", USER_ID);
		param.put("DVIC_ID", DVIC_ID);
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("mblDvcAmnDAO.retrievePushList", param);
	}

	public int retrievePushListCount(String USER_ID, String DVIC_ID) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("USER_ID", USER_ID);
		param.put("DVIC_ID", DVIC_ID);
		
		return getSqlSession().selectOne("mblDvcAmnDAO.retrievePushListCount", param);
	}
	
	/**
	 * 푸시 메시지 조회
	 * @param vo
	 * @return
	 */
	public List<MblAppVO> retrieveAppPushList(MblAppVO vo) {
		return getSqlSession().selectList("mbInfChgDAO.retrieveAppPushList", vo);
	}

	/**
	 * 등록 기기 정보 조회
	 * @param vo
	 * @return
	 */
	public MblAppVO retrieveAppDvic(MblAppVO vo) {
		return getSqlSession().selectOne("mobAppDAO.retrieveAppDvic", vo);
	}
	
	/**
	 * 앱 사용 기기 등록
	 * @param vo
	 * @return
	 */
	public int insertAppDvic(MblAppVO vo) {
		return getSqlSession().update("mobAppDAO.insertAppDvic", vo);
	}

	/**
	 * 유저 등록 기기 정보 조회
	 * @param vo
	 * @return
	 */
	public MblAppVO retrieveAppUserDvic(MblAppVO vo) {
		return getSqlSession().selectOne("mobAppDAO.retrieveAppUserDvic", vo);
	}
	
	/**
	 * 유저 기기 등록
	 * @param vo
	 * @return
	 */
	public int insertAppUserDvic(MblAppVO vo) {
		return getSqlSession().insert("mobAppDAO.insertAppUserDvic", vo);
	}
}