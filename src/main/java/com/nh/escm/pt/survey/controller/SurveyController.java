package com.nh.escm.pt.survey.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.survey.service.SurveyService;
import com.nh.escm.pt.survey.vo.SurveyVO;
import com.nh.escm.util.PageHelper;

@Controller
public class SurveyController extends AbstractController{
	
	@Autowired
	private SurveyService surveyService;


	/**
	 *  화면 : OMG_DS_SC_8310 : 설문조사 질문 조회
	 *  
	 *  
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/mg/survey/retrieveSurveyList")
	public void retrieveSurveyListALL(HttpServletRequest request, HttpServletResponse response){
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);	
		
		String TITLE = requestHelper.getParameter("TITLE");
		String BSN_DSC = "ESCM";
		
		try{
			SurveyVO survey = new SurveyVO();
			survey.setTITLE(TITLE);
			survey.setBSN_DSC(BSN_DSC);
			
			//페이징
			int totalRowConut = surveyService.getPagingCount(survey);
			
			logger.debug("totalRowConut :: "+  totalRowConut);	
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowConut);
			
			// 페이징 시작 끝 설정
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			
			List<SurveyVO> list = surveyService.retrieveSurveyListALL(survey,start,limit);
			PlatformData platformData = new PlatformData();
			
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_survey");
				dsHelper.addColumns(SurveyVO.class);
				
				for(SurveyVO vo : list) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, platformData);
		}catch(AppetizerException e){
			logger.error(e.getMessage(),e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
			
	}
	
	/**
	 * 질문 답변 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/survey/retrieveSurveyqueList")
	public void retrieveSurveyqueList(HttpServletRequest request, HttpServletResponse response){
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);	
		
		String SRV_SEQ = requestHelper.getParameter("SRV_SEQ");
		String BSN_DSC = "ESCM";
		
		try{
			SurveyVO survey = new SurveyVO();
			survey.setSRV_SEQ(SRV_SEQ);
			survey.setBSN_DSC(BSN_DSC);
			
			List<SurveyVO> list = surveyService.retrieveSurveyqueList(survey);
			
			
			PlatformData platformData = new PlatformData();
			
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_survey_q");
				dsHelper.addColumns(SurveyVO.class);
				
				for(SurveyVO vo : list) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			List<SurveyVO> list2 = surveyService.retrieveSurveyansList(survey);
			if(list2 != null && list2.size() > 0) {
				DataSetHelper dsHelper2 = new DataSetHelper("ds_survey_a");
				dsHelper2.addColumns(SurveyVO.class);
				
				for(SurveyVO vo : list2) {
					dsHelper2.setData(vo);
				}
				platformData.addDataSet(dsHelper2.getDataSet());
			}
			sendData(response, platformData);
		}catch(AppetizerException e){
			logger.error(e.getMessage(),e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
			
	}
	/**
	 * 화면 : OMG_DS_SC_8322 설문조사 설문의 답변 등록
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/survey/insertSurveyanswerUser")
	public void insertSurveyanswerUser(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);	
		
		DataSet ds = requestHelper.getDataSet("ds_ans_save");
		
	
		List<SurveyVO> list =ValueObjectSetUtil.dataSetToVO(ds, SurveyVO.class);
		String SRV_SEQ = null;
		String SRV_Q_SEQ = null;
		String SRV_A_SEQ = null;
		String INPUT_TEXT = null;
		String BSN_DSC = "ESCM";
		String USRID = requestHelper.getUserID();
		
		try {
			for(int i =0; i<ds.getRowCount(); i++){
				SurveyVO svo = list.get(i);
				SRV_SEQ = svo.getSRV_SEQ();
				SRV_Q_SEQ = svo.getSRV_Q_SEQ();
				SRV_A_SEQ = svo.getSRV_A_SEQ();
				INPUT_TEXT = svo.getINPUT_TEXT();
			
				PlatformData platformData = new PlatformData();
				
				SurveyVO survey = new SurveyVO();
				survey.setBSN_DSC(BSN_DSC);
				survey.setUSR_ID(USRID);
				survey.setSRV_SEQ(SRV_SEQ);
				survey.setSRV_Q_SEQ(SRV_Q_SEQ);
				survey.setSRV_A_SEQ(SRV_A_SEQ);
				survey.setINPUT_TEXT(INPUT_TEXT);
				surveyService.insertSurveyanswerUser(survey);
				
				sendData(response, platformData, 0, "result.message.save.success");
				
			}
			SRV_SEQ = requestHelper.getParameter("SRV_SEQ");
			surveyService.insertSurveyLog(SRV_SEQ,USRID);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 공지사항 팝업
	 * */
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/survey/retrievePopupsurvey")
	public void retrievePopupsurvey(HttpServletRequest request, HttpServletResponse response){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);	
		String USRID = requestHelper.getUserID();

		try{
			int Count = surveyService.retrievesurveyIdcheck(USRID);
				
			if(Count == 0){    		//카운팅 갯수 0 이면 팝업
				
				List<SurveyVO> list  = surveyService.retrieveSurvey();
				PlatformData platformData = new PlatformData();
				if(list != null && list.size() > 0) {
					DataSetHelper dsHelper = new DataSetHelper("ds_survey");
					dsHelper.addColumns(SurveyVO.class);
						
					for(SurveyVO vo : list) {
						dsHelper.setData(vo);		
					}
					platformData.addDataSet(dsHelper.getDataSet());
				}
				sendData(response, platformData);
			}else if(Count > 0){
				//sendData(response,  new PlatformData(), 0, "result.message.save.success");//0이 아니면 팝업 X
			}
		}catch(AppetizerException e){
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}
