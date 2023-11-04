package com.nh.escm.tx.byngsltttbl.controller;

import java.util.List;

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
import com.nh.escm.tx.byngsltttbl.service.SlTttblService;
import com.nh.escm.tx.byngsltttbl.vo.SlTttblVO;

@RestController
public class SlTttblController extends AbstractController {

	@Autowired
	private SlTttblService slTttblService;
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveByngsltttbl")
	public void retrieveByngsltttbl(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		//String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<SlTttblVO> sumTable= slTttblService.retrieveByngsltttbl(dsCondition);
			List<SlTttblVO> sumTable2= slTttblService.retrieveByngsltttbl2(dsCondition);
			List<SlTttblVO> sumTable3= slTttblService.retrieveByngsltttbl3(dsCondition);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_sum");
			DataSetHelper dsHelper2 = new DataSetHelper("ds_sum2");
			DataSetHelper dsHelper3 = new DataSetHelper("ds_sum3");
			
			if(sumTable != null && sumTable.size() > 0){
			
				dsHelper.addColumns(SlTttblVO.class);
				
				for(SlTttblVO vo : sumTable){
					dsHelper.setData(vo);
				}
			}	
			
			if(sumTable2 != null && sumTable2.size() > 0){
				
				dsHelper2.addColumns(SlTttblVO.class);
				
				for(SlTttblVO vo : sumTable2){
					dsHelper2.setData(vo);
				}
			}	
			
			if(sumTable3 != null && sumTable3.size() > 0){
				
				dsHelper3.addColumns(SlTttblVO.class);
				
				for(SlTttblVO vo : sumTable3){
					dsHelper3.setData(vo);
				}
			}	
			
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper3.getDataSet());
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveByngsltttblAdmin")
	public void retrieveByngsltttblAdmin(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		//String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<SlTttblVO> sumTable= slTttblService.retrieveByngsltttblAdmin(dsCondition);
			List<SlTttblVO> sumTable2= slTttblService.retrieveByngsltttblAdmin2(dsCondition);
			List<SlTttblVO> sumTable3= slTttblService.retrieveByngsltttblAdmin3(dsCondition);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_sum");
			DataSetHelper dsHelper2 = new DataSetHelper("ds_sum2");
			DataSetHelper dsHelper3 = new DataSetHelper("ds_sum3");
			
			if(sumTable != null && sumTable.size() > 0){
			
				dsHelper.addColumns(SlTttblVO.class);
				
				for(SlTttblVO vo : sumTable){
					dsHelper.setData(vo);
				}
			}	
			
			if(sumTable2 != null && sumTable2.size() > 0){
				
				dsHelper2.addColumns(SlTttblVO.class);
				
				for(SlTttblVO vo : sumTable2){
					dsHelper2.setData(vo);
				}
			}	
			
			if(sumTable3 != null && sumTable3.size() > 0){
				
				dsHelper3.addColumns(SlTttblVO.class);
				
				for(SlTttblVO vo : sumTable3){
					dsHelper3.setData(vo);
				}
			}	
			
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper3.getDataSet());
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
}
