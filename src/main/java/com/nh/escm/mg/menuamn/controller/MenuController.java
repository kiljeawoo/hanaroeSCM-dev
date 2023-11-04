package com.nh.escm.mg.menuamn.controller;


/**
 * <PRE>  
 * 	메뉴관리 Controller
 * </PRE>
 * @author  :김복궁
 * @version : 1.0 
 * @since : 2015.06.04
 * @modified
 * @modifier 
 */



 





 
import java.util.List;
import java.util.Map;

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
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.mg.menuamn.service.MenuService;
import com.nh.escm.mg.menuamn.vo.SQLMapNames.MenuInfoNames;
import com.nh.escm.mg.menuamn.vo.SQLMapNames.MyMenuInfoNames;

 


@Controller
public class MenuController extends AbstractController {
	
	@Autowired
	private MenuService menuService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mg/retrieveMenuList")
	public void getMenuListAll(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);		
		try {			
			
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper = new DataSetHelper("ds_menu");			
			dsHelper.addColumns(MenuInfoNames.class);			
			
			List<Map<String, Object>> list  = menuService.retrieveMenuList(requestHelper.getGlnCode(), 
																		   requestHelper.getMbcoType(), 
																		   requestHelper.getUserType(),
																		   requestHelper.getCommanyType()
																		   
																		   );		

			for(Map<String, Object> map : list) {
				dsHelper.setData(map);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			
			dsHelper = new DataSetHelper("ds_my_menu");
			dsHelper.addColumns(MyMenuInfoNames.class);
			list  = menuService.retrieveMyMenuList(requestHelper.getUserType(),requestHelper.getUserAuth());
			for(Map<String, Object> map : list) {
				dsHelper.setData(map);
			}			
			platformData.addDataSet(dsHelper.getDataSet());
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}	 
}

