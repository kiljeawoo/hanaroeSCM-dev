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
import com.nh.escm.pt.comn.service.CtrRqCptInqService;
import com.nh.escm.pt.comn.vo.CtrRqCptInqVO;

@Controller
public class CtrRqCptInqController extends AbstractController {
	
	@Autowired
	private  CtrRqCptInqService ctrRqCptInqService;
	
	/* 동일 DeviceID 여부 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/comn/retrieveCtrRqCptInq")
	public void retrieveCtrRqCptInq(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
				PlatformData platformData = new PlatformData();
			
				String MAE_BZNO = requestHelper.getParameter("mae_bzno"); //사업자등록번호
				
				List<CtrRqCptInqVO> rcList = ctrRqCptInqService.retrieveCtrRqCptInq(MAE_BZNO);
				
				if(rcList != null && rcList.size() > 0){
					DataSetHelper dsHelper = new DataSetHelper("ds_search");
					dsHelper.addColumns(CtrRqCptInqVO.class);
					
					for(CtrRqCptInqVO vo : rcList){
						dsHelper.setData(vo);
					}
					
					platformData.addDataSet(dsHelper.getDataSet());
				}
				sendData(response, platformData);
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
			
                
	}
	
	
}
