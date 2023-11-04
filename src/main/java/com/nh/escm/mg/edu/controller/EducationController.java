package com.nh.escm.mg.edu.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.mg.edu.service.EducationService;
import com.nh.escm.util.PageHelper;


@RestController
public class EducationController extends AbstractController {
	
	@Autowired
	private EducationService educationService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/retrieveEducationList")
	public void retrieveEducationList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet dsParam = requestHelper.getDataSet("ds_param");
		
		String cbo = dsParam.getString(0, "CBO_SIMP_TPC");
		String edt = dsParam.getString(0, "EDT_SIMP_TPC");
		
		try {			
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			
			int totalCount = educationService.retrieveEducationCount(cbo, edt);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			DataSetHelper ds = new DataSetHelper("ds_edu");
			
			if (totalCount > 0) {
				List<Map<String, Object>> list = educationService.retrieveEducationList(cbo, edt, start, end);
				
				ds.addColumns(list.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : list) {
					ds.setData(map);
				}
			}
			
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet()); //data
			platformData.addDataSet(page.getDsPageVo()); //paging
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/retrieveEducationDetails")
	public void retrieveEducationDetails(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String seq = requestHelper.getParameter("seq");
		
		try {
			DataSetHelper ds = new DataSetHelper("ds_edu_detail");
			
			List<Map<String, Object>> list = educationService.retrieveEducationDetails(seq);
			
			if (list != null && list.size() > 0) {
				educationService.updateEducationCnt(seq);
				
				ds.addColumns(list.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : list) {
					ds.setData(map);
				}
			}
			
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet()); //data
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/retrieveEducationDate")
	public void retrieveEducationDate(HttpServletRequest request, HttpServletResponse response) {
		
		try {
			DataSetHelper ds = new DataSetHelper("ds_edu_dt");
			
			List<Map<String, Object>> list = educationService.retrieveEducationDate();
			
			if (list != null && list.size() > 0) {
				ds.addColumns(list.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				
				for (Map<String, Object> map : list) {
					ds.setData(map);
				}
			}
			
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet()); //data
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/retrieveMyEducation")
	public void retrieveMyEducation(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet paramDs = requestHelper.getDataSet("ds_edu");
		String eduDt = paramDs.getString(0, "eduDt");
		String gln = paramDs.getString(0, "gln");
		
		try {
			DataSetHelper ds = new DataSetHelper("ds_my_edu");
			
			List<Map<String, Object>> list = educationService.retrieveMyEducation(eduDt, gln);
			
			if (list != null && list.size() > 0) {
				ds.addColumns(list.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				
				for (Map<String, Object> map : list) {
					ds.setData(map);
				}
			}
			
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet()); //data
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/insertEducationSubscription")
	public void insertEducationSubscription(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet paramDs = requestHelper.getDataSet("ds_usr_detail");
		
		String seq = paramDs.getString(0, "SEQ");
		String gln = requestHelper.getParameter("gln");
		String usrId = requestHelper.getUserID();
		
		try {
			for (int i = 0; i < paramDs.getRowCount(); i++) {
				String compNm = paramDs.getString(i, "COMPANY_NM");
				String usrNm = paramDs.getString(i, "USER_NM");
				String position = paramDs.getString(i, "POSITION");
				String telNo = paramDs.getString(i, "TEL_NO");
				String email = paramDs.getString(i, "EMAIL");
				
				educationService.insertEducationSubscription(seq, compNm, usrNm, position, telNo, email, usrId, gln);
			}
			
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/checkEducationMemberValidation")
	public void checkEducationMemberValidation(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String seq = requestHelper.getParameter("seq");
		String gln = requestHelper.getParameter("gln");
		
		try {
			DataSetHelper dsYn = new DataSetHelper("ds_edu_blacklist");
			Map<String, Object> yn = educationService.checkEducationBlackListYn(seq, gln);
			
			if (yn != null && yn.size() > 0) {
				dsYn.addColumns(yn.keySet()); // 첫번째 리스트에서 컬럼명 정의
				dsYn.setData(yn);
			}
			
			DataSetHelper dsCnt = new DataSetHelper("ds_edu_cnt");
			Map<String, Object> cnt = educationService.checkEducationMemberCnt(seq, gln);
			
			if (cnt != null && cnt.size() > 0) {
				dsCnt.addColumns(cnt.keySet()); // 첫번째 리스트에서 컬럼명 정의
				dsCnt.setData(cnt);
			}
			
			// 객체 전송
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsYn.getDataSet()); //data
			platformData.addDataSet(dsCnt.getDataSet()); //data
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/retrieveEducationMenuList")
	public void retrieveEducationMenuList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet dsParam = requestHelper.getDataSet("ds_param");
		
		String menuLvl00 = dsParam.getString(0, "cbo_menuLvl00");
		String menuLvl01 = dsParam.getString(0, "cbo_menuLvl01");
		String menuLvl02 = dsParam.getString(0, "cbo_menuLvl02");
		
		try {
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			
			DataSetHelper menuDDs = new DataSetHelper("ds_menuD");
			List<Map<String, Object>> Menu00List = educationService.retrieveEducationMenu00List(menuLvl00);	//대메뉴
			if(Menu00List != null && Menu00List.size() > 0){
				menuDDs.addColumns(Menu00List.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : Menu00List) {
					menuDDs.setData(map);
				}
			}
			platformData.addDataSet(menuDDs.getDataSet()); //data
			
			
			DataSetHelper menuMDs = new DataSetHelper("ds_menuM");
			List<Map<String, Object>> Menu01List = educationService.retrieveEducationMenu01List(menuLvl01);	//중메뉴
			if(Menu01List != null && Menu01List.size() > 0){
				menuMDs.addColumns(Menu01List.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : Menu01List) {
					menuMDs.setData(map);
				}
			}
			
			platformData.addDataSet(menuMDs.getDataSet()); //data
			
			
			DataSetHelper menuSDs = new DataSetHelper("ds_menuS");
			List<Map<String, Object>> Menu02List = educationService.retrieveEducationMenu02List(menuLvl02);	//소메뉴
			if(Menu02List != null && Menu02List.size() > 0){
				menuSDs.addColumns(Menu02List.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : Menu02List) {
					menuSDs.setData(map);
				}
			}
			platformData.addDataSet(menuSDs.getDataSet()); //data
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/retrieveEducationVideoList")
	public void retrieveEducationVideoList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet dsParam = requestHelper.getDataSet("ds_param");
		
		String menuNm = dsParam.getString(0, "edt_menuNm");
		String menuIdD = dsParam.getString(0, "cbo_menuLvl00");
		String menuIdM = dsParam.getString(0, "cbo_menuLvl01");
		String menuIdS = dsParam.getString(0, "cbo_menuLvl02");
		
		try {
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			DataSetHelper videoDs = new DataSetHelper("ds_videoList");
			
			List<Map<String, Object>> VideoList = educationService.retrieveEducationVideoList(menuNm, menuIdD, menuIdM, menuIdS);	//대메뉴
			if(VideoList != null && VideoList.size() > 0){
				videoDs.addColumns(VideoList.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : VideoList) {
					videoDs.setData(map);
				}
			}
			
			platformData.addDataSet(videoDs.getDataSet()); //data
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/edu/retrieveVideoDetails")
	public void retrieveVideoDetails(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	    HttpSession session = request.getSession();

		String menuId = requestHelper.getParameter("menuId");
		String videoLvl = requestHelper.getParameter("videoLvl");
		
		String mbId = requestHelper.getUserID();
		String maxNum = "6";
		String date = DateUtil.getCurrentDate("yyyyMMddHHmmssSSS");
		
		try {
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			
			// 추천동영상 목록
			DataSetHelper rcmdVideoDs = new DataSetHelper("ds_rcmdVideoList");
			List<Map<String, Object>> rcmdVideoList = educationService.retrieveRcmdVideoList(maxNum, menuId, videoLvl);
			if(rcmdVideoList != null && rcmdVideoList.size() > 0){
				rcmdVideoDs.addColumns(rcmdVideoList.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : rcmdVideoList) {
					rcmdVideoDs.setData(map);
				}
			}
			platformData.addDataSet(rcmdVideoDs.getDataSet()); //data
				
			// 관련동영상 목록
			DataSetHelper rltdVideoDs = new DataSetHelper("ds_rltdVideoList");
			List<Map<String, Object>> rltdVideoList = educationService.retrieveRltdVideoList(menuId, videoLvl);
			if (rltdVideoList != null && rltdVideoList.size() > 0) {
				
				rltdVideoDs.addColumns(rltdVideoList.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : rltdVideoList) {
					rltdVideoDs.setData(map);
				}
			}
			platformData.addDataSet(rltdVideoDs.getDataSet()); //data
			
			// 동영상 상세 목록
			DataSetHelper videoDtlDs = new DataSetHelper("ds_videoDtlList");
			List<Map<String, Object>> videoDtlList = educationService.retrieveVideoDtlList(menuId, videoLvl);
			if (videoDtlList != null && videoDtlList.size() > 0) {
				videoDtlDs.addColumns(videoDtlList.get(0).keySet()); // 첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> map : videoDtlList) {
					videoDtlDs.setData(map);
				}
			}
			platformData.addDataSet(videoDtlDs.getDataSet()); //data
			if (!"Y".equals((String)session.getAttribute("TRANS_YN_KEY")))
			{
				educationService.updateVideoCnt(menuId, videoLvl);	//조회수 카운트
				educationService.insertVideoHst(menuId, mbId, videoLvl, date);	//동영상 교육 이력 저장
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
}