package com.nh.escm.pt.survey.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.nh.escm.pt.survey.dao.SurveyDAO;
import com.nh.escm.pt.survey.vo.SurveyVO;

public class SurveyService {
	@Autowired
	private SurveyDAO surveyDAO;
	
	/*설문조사 설문 조회*/
	public List<SurveyVO> retrieveSurveyListALL(SurveyVO survey, int start, int limit) {
		return surveyDAO.retrieveSurveyListALL(survey , start, limit);
	}

	/*페이징*/
	public int getPagingCount(SurveyVO survey) {
		return  surveyDAO.getPagingCount(survey);
	}

	/*설문조사 질문 조회*/
	public List<SurveyVO> retrieveSurveyqueList(SurveyVO survey) {
		return surveyDAO.retrieveSurveyqueList(survey);
	}
	/*설문조사 답변 조회*/
	public List<SurveyVO> retrieveSurveyansList(SurveyVO survey) {
		return surveyDAO.retrieveSurveyansList(survey);
	}
	/*설문조사 답 저장 _ 사용자 */
	public int insertSurveyanswerUser(SurveyVO survey) {
		return surveyDAO.insertSurveyanswerUser(survey);
		
	}
	/*설문조사 응했는지 확인*/
	public int retrievesurveyIdcheck(String USRID) {
		return surveyDAO.retrievesurveyIdcheck(USRID);

	}

	public List<SurveyVO> retrieveSurvey() {
		return surveyDAO.retrieveSurvey();
		
	}
	/*설문조사 응했는지 확인*/
	public int insertSurveyLog(String SRV_SEQ , String USRID) {
		return surveyDAO.insertSurveyLog(SRV_SEQ ,USRID);		
	}


}
