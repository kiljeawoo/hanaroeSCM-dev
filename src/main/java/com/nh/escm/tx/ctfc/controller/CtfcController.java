package com.nh.escm.tx.ctfc.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.tx.ctfc.service.CtfcService;
import com.nh.escm.tx.ctfc.vo.CtfcVO;

@RestController
public class CtfcController extends AbstractController {

	@Autowired
	private CtfcService ctfcService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/insertCtfc")
	public void insertCtfc(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		DataSet dsFile = requestHelper.getDataSet("ds_upload");
		DataSet dsCtfc= requestHelper.getDataSet("ds_ctfc");
		
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_ctfc");
					
			String srcDir = Configurer.getProperty("file.temp.path");
			String dstDir = Configurer.getProperty("file.cert.path");
			
			if(ctfcService.insertCtfc(dsCtfc) > 0)
			{			
				for(int j = 0 ; j < dsFile.getRowCount(); j++)
				{
					try 
					{
						FileUtil.moveFile(srcDir, dstDir, dsFile.getString(j, "ORGFNAME"));
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveCtfc")
	public void retrieveCtfc(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_ctfc");
			List<CtfcVO> dsCtfc= ctfcService.retrieveCtfc(NA_BZPLC);
			
			dsHelper.addColumns(CtfcVO.class);
			
			if(dsCtfc != null && dsCtfc.size() > 0){
				for(CtfcVO vo : dsCtfc){
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
