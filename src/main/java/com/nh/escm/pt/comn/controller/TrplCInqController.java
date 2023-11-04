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
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.comn.vo.SQLMapNames.SubEltctrwNames;
import com.nh.escm.pt.comn.service.TrplCInqService;

@Controller
public class TrplCInqController extends AbstractController {
	
	@Autowired
	private  TrplCInqService trplCInqService;
	
	/* 동일 DeviceID 여부 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "rest/pt/comn/retrieveNaBzplCList")
public void retrieveNaBzplCList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
				PlatformData platformData = new PlatformData();
	
				String cbo_comp = requestHelper.getParameter("cbo_comp"); //사업자번호, 업체명 선택
				String edt_comp = requestHelper.getParameter("edt_comp"); //사업자번호, 업체명 입력값
				logger.debug( "***********************************************************************************************" );
				logger.debug( "["  + cbo_comp+"]["  + edt_comp+"]" );
				
				SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
				String USR_TPC = box.getUserType(); // 사용자 유형
				
				List<Map<String, Object>> list = null;			
				/**권한별서비스메뉴*/
				DataSetHelper dsHelper = new DataSetHelper("ds_tbTrTrplCif");
				dsHelper.addColumns(SubEltctrwNames.class);
				list = trplCInqService.retrieveNaBzplCList(cbo_comp,edt_comp, USR_TPC);
				for(Map<String, Object> map : list) {
					dsHelper.setData(map);
				}
				platformData.addDataSet(dsHelper.getDataSet());	
				
				sendData(response, platformData);


			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
	}
	
	
}
