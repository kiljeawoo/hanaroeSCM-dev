package com.nh.escm.common.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.PopUpService;

@RestController
@RequestMapping("/rest/popup")
public class PopUpController extends AbstractController {

	@Autowired
	private PopUpService popUpService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/searchWRS")
	public void searchWRS(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");;
		String chkUsrTpc = requestHelper.getParameter("chkUsrTpc");
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("DATASET");
			String NA_TRPL_C = requestHelper.getGlnCode();
			String USR_TPC = requestHelper.getUserType();
			
			// 회원유형 체크 '여' 일 때 본부회원이면 GLN 조건 뺌
			if ("02".equals(USR_TPC) && "Y".equals(chkUsrTpc)) {
				NA_TRPL_C = null;
			}
			
			List<Map<String, Object>> mapList = popUpService.searchWRS(NA_TRPL_C, searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
				
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/searchRVOPL_TRPL")
	public void searchRVOPL_TRPL(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("DATASET");
			
			List<Map<String, Object>> mapList = popUpService.searchRVOPL_TRPL(searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}	
	
	@RequestMapping(method=RequestMethod.POST, value = "/searchSPYPL_TRPL")
	public void searchSPYPL_TRPL(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("DATASET");
			
			List<Map<String, Object>> mapList = popUpService.searchSPYPL_TRPL(searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/searchVCBTBX")
	public void searchVCBTBX(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String WRS_TPC = requestHelper.getParameter("WRS_TPC");
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();
		
		try {
			if(StringUtils.isEmpty(WRS_TPC)) {
				throw new AppetizerException("error.message.required.parameters");
			}
			
			DataSetHelper dsHelper = new DataSetHelper("DATASET");
			
			List<Map<String, Object>> mapList = popUpService.searchVCBTBX(WRS_TPC,searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/searchBUYER")
	public void searchBUYER(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("DATASET");
			
			List<Map<String, Object>> mapList = popUpService.searchBUYER(searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/selectWRSPopUp")
	public void selectWRSPopUp(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		try {
			String searchMode = requestHelper.getParameter("searchMode");
			
			if(StringUtils.isEmpty(searchMode)) {
				throw new AppetizerException("error.message.required.parameters");
			}
			
			String searchText = requestHelper.getParameter("searchText");
			if(searchMode.equals("search") && StringUtils.isEmpty(searchText)) {
				throw new AppetizerException("error.message.required.parameters");
			}

			String level = requestHelper.getParameter("level");
			String NA_WRS_LCLC = requestHelper.getParameter("NA_WRS_LCLC");
			String NA_WRS_MCLC = requestHelper.getParameter("NA_WRS_MCLC");
			String NA_WRS_SCLC = requestHelper.getParameter("NA_WRS_SCLC");
			
			if(searchMode.equals("select") && StringUtils.isEmpty(level)) {
				throw new AppetizerException("error.message.required.parameters");
			}
		
			DataSetHelper dsHelper = new DataSetHelper("DATASET");
			
			List<Map<String, Object>> mapList = popUpService.selectWRSPopUp(searchMode, searchText, level, NA_WRS_LCLC, NA_WRS_MCLC, NA_WRS_SCLC);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	
	
	
	
	
}
