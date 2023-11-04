package com.nh.escm.pt.survey.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pt.survey.vo.SurveyVO;

public class SurveyDAO extends AbstractDao{

	public List<SurveyVO> retrieveSurveyListALL(SurveyVO survey, int start, int limit) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("TITLE" , survey.getTITLE());	
		param.put("BSN_DSC", survey.getBSN_DSC());
		
		//페이징
		param.put("start", start);
		param.put("end", limit);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSurveyListALL : " + param);
		}
		return getSqlSession().selectList("surveyDAO.retrieveSurveyListALL", param);
	}
	/*페이징 갯수*/
	public int getPagingCount(SurveyVO survey) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("TITLE" , survey.getTITLE());		
		param.put("BSN_DSC", survey.getBSN_DSC());
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getPagingCount : " + param);
		}
		return getSqlSession().selectOne("surveyDAO.getPagingCount", param);
	}
	/*설문조사 - 질문조회*/
	public List<SurveyVO> retrieveSurveyqueList(SurveyVO survey) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", survey.getBSN_DSC());
		param.put("SRV_SEQ", survey.getSRV_SEQ());
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSurveyqueList : " + param);
		}
		return getSqlSession().selectList("surveyDAO.retrieveSurveyqueList", param);
	}
	/*설문조사 - 답변조회*/
	public List<SurveyVO> retrieveSurveyansList(SurveyVO survey) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("BSN_DSC", survey.getBSN_DSC());
		param.put("SRV_SEQ", survey.getSRV_SEQ());
		param.put("SRV_Q_SEQ", survey.getSRV_Q_SEQ());
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveSurveyqueList : " + param);
		}
		return getSqlSession().selectList("surveyDAO.retrieveSurveyansList", param);
	}
	/*설문조사 - 답변 저장*/
	public int insertSurveyanswerUser(SurveyVO survey) {
		return getSqlSession().insert("surveyDAO.insertSurveyanswerUser",survey);
	}
	/*설문조사  -응했는지 확인*/
	public int retrievesurveyIdcheck(String USRID) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("USRID", USRID);
		
		return getSqlSession().selectOne("surveyDAO.retrievesurveyIdcheck", param);
	}

	public List<SurveyVO> retrieveSurvey() {
		return getSqlSession().selectList("surveyDAO.retrieveSurvey");
	}

	public int insertSurveyLog(String SRV_SEQ, String USRID) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("USRID", USRID);
		param.put("SRV_SEQ", SRV_SEQ);
		
		return getSqlSession().insert("surveyDAO.insertSurveyLog", param);
	}

}
