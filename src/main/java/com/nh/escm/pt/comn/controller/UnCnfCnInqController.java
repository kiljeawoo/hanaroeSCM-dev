package com.nh.escm.pt.comn.controller;

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
import com.nh.escm.pt.comn.service.UnCnfCnInqService;

@Controller
public class UnCnfCnInqController extends AbstractController {
	
	@Autowired
	private  UnCnfCnInqService unCnfCnInqService;
	
	/* 동일 DeviceID 여부 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/comn/retrieveUnCnfCnInqCnt")
	public void retrieveUnCnfCnInqCnt(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		
		String from = requestHelper.getParameter("from");
		String to = requestHelper.getParameter("to");
		String glnCode = requestHelper.getParameter("glnCode2");
		String userTPC = requestHelper.getParameter("userTPC");

		try {

			List<Map<String, Object>> toDoCnt1= unCnfCnInqService.retrieveUnCnfCnInqCnt1(from, to, glnCode, userTPC);
			List<Map<String, Object>> toDoCnt2= unCnfCnInqService.retrieveUnCnfCnInqCnt2(from, to, glnCode);
			List<Map<String, Object>> toDoCnt3= unCnfCnInqService.retrieveUnCnfCnInqCnt3(from, to, glnCode);
			List<Map<String, Object>> toDoCnt4= unCnfCnInqService.retrieveUnCnfCnInqCnt4(from, to, glnCode);
			List<Map<String, Object>> toDoCnt5= unCnfCnInqService.retrieveUnCnfCnInqCnt5(from, to, glnCode);
			List<Map<String, Object>> toDoCnt6= unCnfCnInqService.retrieveUnCnfCnInqCnt6(from, to, glnCode, userTPC);
			List<Map<String, Object>> toDoCnt7= unCnfCnInqService.retrieveUnCnfCnInqCnt7(from, to, glnCode);
			
			DataSetHelper dsHelper1 = new DataSetHelper("ds_cnt01");//수주 미확인 건수
			DataSetHelper dsHelper2 = new DataSetHelper("ds_cnt02");//배송예정서 미작성 건수
			DataSetHelper dsHelper3 = new DataSetHelper("ds_cnt03");//반품 미확인 건수
			DataSetHelper dsHelper4 = new DataSetHelper("ds_cnt04");//반품확인서 미작성 건수
			DataSetHelper dsHelper5 = new DataSetHelper("ds_cnt05");//검수 미확인 건수
			DataSetHelper dsHelper6 = new DataSetHelper("ds_cnt06");//세금계산서 역발행 건수
			DataSetHelper dsHelper7 = new DataSetHelper("ds_cnt07");//마트장비 배송예정서 미작성 건수(180516)
			
			if(dsHelper1 != null && toDoCnt1.size() > 0){
				//dsHelper.getDataSet().addColumn("CNT", DataTypes.STRING);
				dsHelper1.addColumns(taxCnt.class);
				for(Map<String, Object> cnt : toDoCnt1) {
					dsHelper1.setData(cnt);
				}
			}	
			
			if(dsHelper2 != null && toDoCnt2.size() > 0){
				//dsHelper.getDataSet().addColumn("CNT", DataTypes.STRING);
				dsHelper2.addColumns(taxCnt.class);
				for(Map<String, Object> cnt : toDoCnt2) {
					dsHelper2.setData(cnt);
				}
			}	
			
			if(dsHelper3 != null && toDoCnt3.size() > 0){
				//dsHelper.getDataSet().addColumn("CNT", DataTypes.STRING);
				dsHelper3.addColumns(taxCnt.class);
				for(Map<String, Object> cnt : toDoCnt3) {
					dsHelper3.setData(cnt);
				}
			}	
			
			if(dsHelper4 != null && toDoCnt4.size() > 0){
				//dsHelper.getDataSet().addColumn("CNT", DataTypes.STRING);
				dsHelper4.addColumns(taxCnt.class);
				for(Map<String, Object> cnt : toDoCnt4) {
					dsHelper4.setData(cnt);
				}
			}	
			
			if(dsHelper5 != null && toDoCnt5.size() > 0){
				//dsHelper.getDataSet().addColumn("CNT", DataTypes.STRING);
				dsHelper5.addColumns(taxCnt.class);
				for(Map<String, Object> cnt : toDoCnt5) {
					dsHelper5.setData(cnt);
				}
			}
			
			if(dsHelper6 != null && toDoCnt6.size() > 0){
				//dsHelper.getDataSet().addColumn("CNT", DataTypes.STRING);
				dsHelper6.addColumns(taxCnt.class);
				for(Map<String, Object> cnt : toDoCnt6) {
					dsHelper6.setData(cnt);
				}
			}	
			
			if(dsHelper7 != null && toDoCnt7.size() > 0){
				//dsHelper.getDataSet().addColumn("CNT", DataTypes.STRING);
				dsHelper7.addColumns(taxCnt.class);
				for(Map<String, Object> cnt : toDoCnt7) {
					dsHelper7.setData(cnt);
				}
			}	
			
			platformData.addDataSet(dsHelper1.getDataSet());
			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper3.getDataSet());
			platformData.addDataSet(dsHelper4.getDataSet());
			platformData.addDataSet(dsHelper5.getDataSet());
			platformData.addDataSet(dsHelper6.getDataSet());
			platformData.addDataSet(dsHelper7.getDataSet());
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}    
	}
	
	public enum taxCnt {	
		CNT     				
	}
}
