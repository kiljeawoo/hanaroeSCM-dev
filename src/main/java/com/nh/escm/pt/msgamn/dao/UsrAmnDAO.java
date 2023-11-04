package com.nh.escm.pt.msgamn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.exception.AppetizerException;
import com.nh.escm.pt.msgamn.vo.MgSmsInfoVO;
import com.nh.escm.pt.msgamn.vo.UsrAmnVO;

public class UsrAmnDAO extends AbstractDao {

	public List<UsrAmnVO> retrieveUserAmnList(String dept_id) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DEPT_ID", dept_id);
			return getSqlSession().selectList("usrAmnDAO.retrieveUserAmnList",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public void insertUserAmn(UsrAmnVO vo) {
		try
		{
			getSqlSession().insert("usrAmnDAO.insertUserAmn", vo);
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
		
	}

	public List<UsrAmnVO> checkUserAmnid(String user_id) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("USER_ID", user_id);
			return getSqlSession().selectList("usrAmnDAO.checkUserAmnid",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public void updateUserAmn(UsrAmnVO vo) {
		try
		{
			getSqlSession().update("usrAmnDAO.updateUserAmn", vo);
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public void deleteUserAmn(String userid) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("USER_ID", userid);
			getSqlSession().delete("usrAmnDAO.deleteUserAmn",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}	
	}

	public List<UsrAmnVO> retrievePicture(String user_id) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("USER_ID", user_id);
			return getSqlSession().selectList("usrAmnDAO.retrievePicture",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveDeptAmn(String dept_id) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DEPT_ID", dept_id);
			return getSqlSession().selectList("usrAmnDAO.retrieveDeptAmn",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveCheckAuth(String userID) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("USER_ID", userID);
			return getSqlSession().selectList("usrAmnDAO.retrieveCheckAuth",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveEmpeTeam(String dept_id) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DEPT_ID", dept_id);
			return getSqlSession().selectList("usrAmnDAO.retrieveEmpeTeam",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveEmpeList(String dept_sort) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DEPT_SORT", dept_sort);
			return getSqlSession().selectList("usrAmnDAO.retrieveEmpeList",param);
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public List<UsrAmnVO> retrieveEmpeAmnListpop(String deptName) {
		try
		{
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DEPT_NAME", deptName);
			//System.out.println("dao에서 파일 넘어가는지 확인 : "+ deptName);
			if(deptName == null || deptName.length() == 0){
				//검색어가 존재하지 않는 경우
			//	System.out.println("1번실행");
				return getSqlSession().selectList("usrAmnDAO.retrieveEmpeAmnListpop", param);
			}else{
				//검색어가 존재하는 경우
			//	System.out.println("2번실행");
				return getSqlSession().selectList("usrAmnDAO.retrieveEmpeAmnListpop2", param);
			}
						
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 업무 담당자  정보
	 * @return
	 */
	public List<MgSmsInfoVO> getMgSmsInfo(){
		return getSqlSession().selectList("usrAmnDAO.getMgSmsInfo"); 
	}
	
	/**
	 * SMS 전송
	 * @param params
	 * @return
	 */
	public int insertSmsSend(Map<String, Object> params) {
		return getSqlSession().insert("usrAmnDAO.insertSmsSend", params);
	}
	
	 
	 /**
	  * SMS을 전송하기 위한 시퀀스 조회
	  * @param session
	  * @return
	  */
	public String getSmsSequence() {
		return getSqlSession().selectOne("usrAmnDAO.getSmsSequence");
	}

	public String getUserAmnCnt(String dept_id){
		try
		{
			
			if(logger.isDebugEnabled()){
				logger.debug("getUserAmnCnt PARAMS : " + dept_id);
			}
			return getSqlSession().selectOne("usrAmnDAO.getUserAmnCnt",dept_id);
		}
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}
}
