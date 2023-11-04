package com.nh.escm.tx.doccstd.dao;

import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.tx.doccstd.vo.ClosingSimplifyVO;

public class ClosingSimplifyDAO extends AbstractDao {

	public List<Map<String, Object>> retrieveClosingSimplifyList(Map<String, Object> param, int start, int end) {
		param.put("start", start);
		param.put("end", end);

		return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifyList", param);
	}
	
	public List<Map<String, Object>> retrieveClosingSimplifySummaryList(Map<String, Object> param) {
		return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifySummaryList", param);
	}

	public int retrieveClosingSimplifyListCount(Map<String, Object> param) {
		return getSqlSession().selectOne("simplifyDAO.retrieveClosingSimplifyListCount", param);
	}
	
	public List<Map<String, Object>> excelClosingSimplifyAllList(Map<String, Object> param, String type) {
		if ("SLP".equals(type)) {
			return getSqlSession().selectList("simplifyDAO.excelClosingSimplifyAllSlpList", param);
		} else if ("WRS".equals(type)) {
			return getSqlSession().selectList("simplifyDAO.excelClosingSimplifyAllWrsList", param);
		}
		return null;
	}
	
	public List<Map<String, Object>> retrieveClosingSimplifyDetail(Map<String, Object> param, String type) {
		if ("SLP".equals(type)) {
			return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifyDetailSlp", param);
		} else if ("WRS".equals(type)) {
			return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifyDetailWrs", param);
		}
		return null;
	}
	
	public List<Map<String, Object>> retrieveClosingSimplifySubDetail(Map<String, Object> param, String type) {
		if ("WRS".equals(type)) {
			return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifyDetailSlpWrs", param);
		} else if ("SLP".equals(type)) {
			return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifyDetailWrsSlp", param);
		}
		return null;
	}
	
	public List<Map<String, Object>> retrieveByngSimplifyList(Map<String, Object> param, int start, int end) {
		param.put("start", start);
		param.put("end", end);

		return getSqlSession().selectList("simplifyDAO.retrieveByngSimplifyList", param);
	}
	
	public List<Map<String, Object>> retrieveByngSimplifySummaryList(Map<String, Object> param) {
		return getSqlSession().selectList("simplifyDAO.retrieveByngSimplifySummaryList", param);
	}
	
	public int retrieveByngSimplifyListCount(Map<String, Object> param) {
		return getSqlSession().selectOne("simplifyDAO.retrieveByngSimplifyListCount", param);
	}
	
	public List<Map<String, Object>> retrieveByngSimplifyDetailList(Map<String, Object> param) {
		return getSqlSession().selectList("simplifyDAO.retrieveByngSimplifyDetailList", param);
	}
	
	
	/*
	 * 빌링 영역
	 */ 
	
	/**
	 * 과금 대상 매입데이터 목록 가져오기
	 * @param param
	 * @return
	 */
	public List<Map<String, Object>> retrieveClosingSimplifyMarkupSummary(Map<String, Object> param) {
		return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifyMarkupSummary2", param);
	}
	
	/**
	 * 과금 대상 매입데이터 목록 가져오기
	 * @param param
	 * @return
	 */
	public List<ClosingSimplifyVO> retrieveClosingSimplifyMarkupList(Map<String, Object> param) {
		return getSqlSession().selectList("simplifyDAO.retrieveClosingSimplifyMarkupList", param);
	}
	
	/**
	 * 과금 로그 등록(Select-Insert)
	 * @param param
	 * @return
	 */
	public int insertClosingSimplifyMarkupLog(Map<String, Object> param) {
		return getSqlSession().insert("simplifyDAO.insertClosingSimplifyMarkupLog", param);
	}
	
	/**
	 * 과금 로그 등록(복수처리)
	 * @param list
	 * @return
	 */
	public int insertClosingSimplifyMarkupLogList(List<ClosingSimplifyVO> list) {
		return getSqlSession().insert("simplifyDAO.insertClosingSimplifyMarkupLogList", list);
	}
	
	/**
	 * 매입데이터 과금 정보 업데이트(Merge)
	 * @param param
	 * @return
	 */
	public int markUp(Map<String, Object> param) {
		return getSqlSession().update("simplifyDAO.markUp", param);
	}
	
	/**
	 * 매입데이터 과금 정보 업데이트(복수처리)
	 * @param list
	 * @return
	 */
	public int markUpList(List<ClosingSimplifyVO> list) {
		return getSqlSession().update("simplifyDAO.markUpList", list);
	}
}