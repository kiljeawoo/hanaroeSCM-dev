package com.nh.escm.mg.edu.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;


public class EducationDAO extends AbstractDao {
	
	public int retrieveEducationCount(String cbo, String edt) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("cbo", cbo);
		param.put("edt", edt);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveEducationCount >>> params : " + param);
		}
		
		return getSqlSession().selectOne("educationDAO.retrieveEducationCount", param);	
	}
	
	public List<Map<String, Object>> retrieveEducationList(String cbo, String edt, int start, int end) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("cbo", cbo);
		param.put("edt", edt);
		param.put("start", start);
		param.put("end", end);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveEducationList >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveEducationList", param);
	}
	
	public List<Map<String, Object>> retrieveEducationDetails(String seq) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("seq", seq);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveEducationDetails >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveEducationDetails", param);
	}
	
	public List<Map<String, Object>> retrieveEducationDate() {
		
		return getSqlSession().selectList("educationDAO.retrieveEducationDate");
	}
	
	public List<Map<String, Object>> retrieveMyEducation(String eduDt, String gln) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("eduDt", eduDt);
		param.put("gln", gln);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveMyEducation >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveMyEducation", param);
	}
	
	public int updateEducationCnt(String seq) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("seq", seq);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> updateEducationCnt >>> params : " + param);
		}
		
		return getSqlSession().update("educationDAO.updateEducationCnt", param);
	}
	
	public int insertEducationSubscription(String seq, String compNm, String usrNm, String position, String telNo, String email, String usrId, String gln) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("seq", seq);
		param.put("compNm", compNm);
		param.put("usrNm", usrNm);
		param.put("position", position);
		param.put("telNo", telNo);
		param.put("email", email);
		param.put("usrId", usrId);
		param.put("gln", gln);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> insertEducationSubscription >>> params : " + param);
		}
		
		return getSqlSession().update("educationDAO.insertEducationSubscription", param);
	}
	
	public Map<String, Object> checkEducationMemberCnt(String seq, String gln) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("seq", seq);
		param.put("gln", gln);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> checkEducationMemberCnt >>> params : " + param);
		}
		
		return getSqlSession().selectOne("educationDAO.checkEducationMemberCnt", param);
	}
	
	public Map<String, Object> checkEducationBlackListYn(String seq, String gln) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("seq", seq);
		param.put("gln", gln);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> checkEducationBlackListYn >>> params : " + param);
		}
		
		return getSqlSession().selectOne("educationDAO.checkEducationBlackListYn", param);
	}
	
	public List<Map<String, Object>> retrieveEducationMenuList(String menuLvl) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("menuLvl", menuLvl);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveEducationMenuList >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveEducationMenuList", param);
	}
	
	
	public List<Map<String, Object>> retrieveEducationVideoList(String menuNm, String menuIdD, String menuIdM, String menuIdS) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("menuNm", menuNm);
		param.put("menuIdD", menuIdD);
		param.put("menuIdM", menuIdM);
		param.put("menuIdS", menuIdS);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveEducationVideoList >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveEducationVideoList", param);
	}
	
	public List<Map<String, Object>> retrieveRcmdVideoList(String maxNum, String menuId, String videoLvl) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("maxNum", maxNum);
		param.put("menuId", menuId);
		param.put("videoLvl", videoLvl);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveRcmdVideoList >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveRcmdVideoList", param);
	}
	
	public List<Map<String, Object>> retrieveRltdVideoList(String menuId, String videoLvl) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("menuId", menuId);
		param.put("videoLvl", videoLvl);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveRltdVideoList >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveRltdVideoList", param);
	}
	
	public List<Map<String, Object>> retrieveVideoDtlList(String menuId, String videoLvl) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("menuId", menuId);
		param.put("videoLvl", videoLvl);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> retrieveVideoDtlList >>> params : " + param);
		}
		
		return getSqlSession().selectList("educationDAO.retrieveVideoDtlList", param);
	}
	
	public int updateVideoCnt(String menuId, String videoLvl) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("menuId", menuId);
		param.put("videoLvl", videoLvl);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> updateVideoCnt >>> params : " + param);
		}
		
		return getSqlSession().update("educationDAO.updateVideoCnt", param);
	}

	public int insertVideoHst(String menuId, String mbId, String videoLvl, String date) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("menuId", menuId);
		param.put("mbId", mbId);
		param.put("videoLvl", videoLvl);
		param.put("hstRgDtm", date);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> insertVideoHst >>> params : " + param);
		}
		
		return getSqlSession().update("educationDAO.insertVideoHst", param);
	}
	
}
