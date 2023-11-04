package com.nh.escm.bt.rq.controller;

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
import com.nh.escm.bt.rq.service.CsltRqHstService;
import com.nh.escm.bt.rq.vo.SQLMapNames.CsltRqHstNames;

/**
 * 계약상담 통보이력
 */
@Controller
public class CsltRqHstController extends AbstractController {
	
	@Autowired
	private CsltRqHstService csltRqHstService;
	
	/**
	 * 상담신청이력 팝업
	 * 
	 * - 진행결과보기 > 이력 (신청자)
	 * - 계약상담 > 상담신청조회 > 이력 (본부, 사업장)
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/bt/rq/retrieveCsltRqHstList")
	public void retrieveCounselingList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String cslt_rq_no = requestHelper.getParameter("cslt_rq_no");
			String USERTYPE = requestHelper.getUserType();
			
			List<Map<String, Object>> counselingList = csltRqHstService.retrieveCsltRqHstList(cslt_rq_no, USERTYPE);
			
			DataSetHelper dsHelper_re = new DataSetHelper("ds_receive");
			dsHelper_re.addColumns(CsltRqHstNames.class);
			for (Map<String, Object> map_re : counselingList) {
				dsHelper_re.setData(map_re);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper_re.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
}
