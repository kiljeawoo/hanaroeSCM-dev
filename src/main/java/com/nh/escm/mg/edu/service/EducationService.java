package com.nh.escm.mg.edu.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.service.AbstractService;
import com.nh.escm.mg.edu.dao.EducationDAO;


@Service
public class EducationService extends AbstractService {
	
	@Autowired
	private EducationDAO educationDAO;
	
	public int retrieveEducationCount(String cbo, String edt) {
		return educationDAO.retrieveEducationCount(cbo, edt);
	}
	
	public List<Map<String, Object>> retrieveEducationList(String cbo, String edt, int start, int end) {
		return educationDAO.retrieveEducationList(cbo, edt, start, end);
	}
	
	public List<Map<String, Object>> retrieveEducationDetails(String seq) {
		return educationDAO.retrieveEducationDetails(seq);
	}
	
	public List<Map<String, Object>> retrieveEducationDate() {
		return educationDAO.retrieveEducationDate();
	}
	
	public List<Map<String, Object>> retrieveMyEducation(String eduDt, String gln) {
		return educationDAO.retrieveMyEducation(eduDt, gln);
	}
	
	public int updateEducationCnt(String seq) {
		return educationDAO.updateEducationCnt(seq);
	}
	
	public int insertEducationSubscription(String seq, String compNm, String usrNm, String position, String telNo, String email, String usrId, String gln) {
		return educationDAO.insertEducationSubscription(seq, compNm, usrNm, position, telNo, email, usrId, gln);
	}
	
	public Map<String, Object> checkEducationMemberCnt(String seq, String gln) {
		return educationDAO.checkEducationMemberCnt(seq, gln);
	}
	
	public Map<String, Object> checkEducationBlackListYn(String seq, String gln) {
		return educationDAO.checkEducationBlackListYn(seq, gln);
	}
	
	public List<Map<String, Object>> retrieveEducationMenu00List(String menuLvl) {
		return educationDAO.retrieveEducationMenuList(menuLvl);
	}
	
	public List<Map<String, Object>> retrieveEducationMenu01List(String menuLvl) {
		return educationDAO.retrieveEducationMenuList(menuLvl);
	}
	
	public List<Map<String, Object>> retrieveEducationMenu02List(String menuLvl) {
		return educationDAO.retrieveEducationMenuList(menuLvl);
	}

	public List<Map<String, Object>> retrieveEducationVideoList(String menuNm, String menuIdD, String menuIdM, String menuIdS) {
		return educationDAO.retrieveEducationVideoList(menuNm, menuIdD, menuIdM, menuIdS);
	}
	
	public List<Map<String, Object>> retrieveRcmdVideoList(String maxNum, String menuId, String videoLvl) {
		return educationDAO.retrieveRcmdVideoList(maxNum, menuId, videoLvl);
	}
	
	public List<Map<String, Object>> retrieveRltdVideoList(String menuId, String videoLvl) {
		return educationDAO.retrieveRltdVideoList(menuId, videoLvl);
	}

	public List<Map<String, Object>> retrieveVideoDtlList(String menuId, String videoLvl) {
		return educationDAO.retrieveVideoDtlList(menuId, videoLvl);
	}
	
	public int updateVideoCnt(String menuId, String videoLvl) {
		return educationDAO.updateVideoCnt(menuId, videoLvl);
	}

	public int insertVideoHst(String menuId, String mbId, String videoLvl, String date) {
		return educationDAO.insertVideoHst(menuId, mbId, videoLvl, date);
	}
	
}