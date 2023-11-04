package com.nh.escm.pt.comn.controller;


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
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.comn.service.EltChrrInqService;
import com.nh.escm.pt.comn.vo.EltChrrInqVO;

@Controller
public class EltChrrInqController extends AbstractController {
	
	@Autowired
	private  EltChrrInqService eltChrrInqService;
	
	/* 동일 DeviceID 여부 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/comn/retrieveEltChrrInq")
	public void retrieveEltChrrInq(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String NA_TRPL_C = requestHelper.getParameter("edtnaTrplC");
		
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<EltChrrInqVO> devcList = eltChrrInqService.retrieveEltChrrInq(NA_TRPL_C);
			DataSetHelper dsHelper = new DataSetHelper("ds_search");
			
			if(devcList != null && devcList.size() > 0){
			
				dsHelper.addColumns(EltChrrInqVO.class);
				
				for(EltChrrInqVO vo : devcList){
					dsHelper.setData(vo);
				}
				
			}	
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		} 
                
	}
	
	
}
