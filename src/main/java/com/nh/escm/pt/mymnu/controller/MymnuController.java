package com.nh.escm.pt.mymnu.controller;




/**
 * <PRE>  
 * 	내메뉴 Controller
 * </PRE>
 * @author  :김복궁
 * @version : 1.0 
 * @since : 2015.07.07
 * @modified
 * @modifier 
 */





import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.mymnu.service.MymnuService;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.MyMenuNames;



@Controller
public class MymnuController extends AbstractController {

	@Autowired
	private MymnuService mymnuService; 

	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/retrieveMyMenuList")
	public void retrieveMyMenuList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		
		DataSetHelper dsHelper = new DataSetHelper("ds_myMenu");

		try {			
			dsHelper.addColumns(MyMenuNames.class);
			List<Map<String, Object>> myMenuList = mymnuService.retrieveMyMenuList(requestHelper.getUserID());
			for(Map<String, Object> myMenu : myMenuList) {
				dsHelper.setData(myMenu);
			}			
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/insertMyMenu")
	public void insertMyMenu(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		
		DataSetHelper dsHelper = new DataSetHelper("ds_myMenu");
		String menuId = requestHelper.getParameter("menuId");
		
		try {		
			try
			{
				mymnuService.insertMyMenu(requestHelper.getUserID(),menuId);	
			}
			catch(DuplicateKeyException e)
			{
				dsHelper.addColumns(MyMenuNames.class);
				List<Map<String, Object>> myMenuList = mymnuService.retrieveMyMenuList(requestHelper.getUserID());

				for(Map<String, Object> myMenu : myMenuList) {
					dsHelper.setData(myMenu);
				}			
				platformData.addDataSet(dsHelper.getDataSet());
				sendData(response, platformData, 2, "error.message.server.exception");
				return;
			}
			
			dsHelper.addColumns(MyMenuNames.class);
			List<Map<String, Object>> myMenuList = mymnuService.retrieveMyMenuList(requestHelper.getUserID());

			for(Map<String, Object> myMenu : myMenuList) {
				dsHelper.setData(myMenu);
			}			
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/deleteMyMenu")
	public void deleteMyMenu(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();		
		DataSetHelper dsHelper = new DataSetHelper("ds_myMenu");
		String menuId = requestHelper.getParameter("menuId");

		try {			
			mymnuService.deleteMyMenu(requestHelper.getUserID(),menuId);
			dsHelper.addColumns(MyMenuNames.class);
			List<Map<String, Object>> myMenuList = mymnuService.retrieveMyMenuList(requestHelper.getUserID());
			for(Map<String, Object> myMenu : myMenuList) {
				dsHelper.setData(myMenu);
			}			
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}	
}

