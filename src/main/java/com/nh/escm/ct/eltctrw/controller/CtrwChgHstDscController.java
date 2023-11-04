package com.nh.escm.ct.eltctrw.controller;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
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
import com.nh.escm.ct.eltctrw.service.CtrwChgHstDscService;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.CtrwChgHstDscNames;

@Controller
public class CtrwChgHstDscController
 extends AbstractController {
	
	@Autowired
	private CtrwChgHstDscService ctrwChgHstDscService;
	
	//계약서 변경 이력 상세 
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveCtrwChgHstDscList")
	public void retrieveCtrwChgHstDscList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String elt_ctrw_no = requestHelper.getParameter("elt_ctrw_no");
		
		
		
		logger.debug("elt_ctrw_no  => "  + elt_ctrw_no);

		try {
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper_re = new DataSetHelper("ds_receive");
					
			dsHelper_re.addColumns(CtrwChgHstDscNames.class);
					
					List<Map<String, Object>> counselingList = ctrwChgHstDscService.retrieveCtrwChgHstDscList(elt_ctrw_no);
						for(Map<String, Object> map_re : counselingList) {
							dsHelper_re.setData(map_re);
						}
				    platformData.addDataSet(dsHelper_re.getDataSet());
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
   
	}
	
	
}
