package com.nh.escm.tx.nts.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.tx.nts.service.RptPsttService;

@RestController
public class RptPsttController extends AbstractController {

	@Autowired
	private RptPsttService rptPsttService;
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveRptPsttNh")
	public void retrieveRptPsttNh(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		//String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<Map<String, Object>> sumTable= rptPsttService.retrieveRptPsttNh(dsCondition);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rptPstt");
			
			if(sumTable != null && sumTable.size() > 0){
			
				dsHelper.addColumns(sumTable.get(0).keySet());
				
				for(Map<String, Object>sum : sumTable){
					dsHelper.setData(sum);
				}
			}	
			
			platformData.addDataSet(dsHelper.getDataSet());	
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveRptPsttEScm")
	public void retrieveRptPsttEScm(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		//String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<Map<String, Object>> sumTable= rptPsttService.retrieveRptPsttEScm(dsCondition);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rptPstt");
			
			if(sumTable != null && sumTable.size() > 0){
			
				dsHelper.addColumns(sumTable.get(0).keySet());
				
				for(Map<String, Object>sum : sumTable){
					dsHelper.setData(sum);
				}
			}	
			
			platformData.addDataSet(dsHelper.getDataSet());	
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveRptPstt")
	public void retrieveRptPsttE(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		//String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<Map<String, Object>> sumTable= rptPsttService.retrieveRptPstt(dsCondition);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rptPstt");
			
			if(sumTable != null && sumTable.size() > 0){
			
				dsHelper.addColumns(sumTable.get(0).keySet());
				
				for(Map<String, Object>sum : sumTable){
					dsHelper.setData(sum);
				}
			}	
			
			platformData.addDataSet(dsHelper.getDataSet());	
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
}
