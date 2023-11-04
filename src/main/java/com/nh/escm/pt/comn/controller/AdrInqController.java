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
import com.nh.escm.pt.comn.service.AdrInqService;
import com.nh.escm.pt.comn.vo.AdrInqVO;
import com.nh.escm.util.PageHelper;

@Controller
public class AdrInqController extends AbstractController {

	@Autowired
	private AdrInqService adrInqService;


	/*
	 * 화면ID : OMG_DS_SC_9010
	 * 화면설명 : 주소 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/retrieveAdrInq")
	public void retrieveAdrInq(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String EDT_ZIP = requestHelper.getParameter("edt_zip"); // 조회주소
		String EDT_ZIP2 = requestHelper.getParameter("edt_zip2"); // 조회건물(지번)본번
		String EDT_ZIP3 = requestHelper.getParameter("edt_zip3"); // 조회건물(지번)부번
		String CBO_COMP = requestHelper.getParameter("cbo_comp"); // 1 지번 주소 2. 도로명 주소
		String PROVNM = requestHelper.getParameter("provnm"); // 시도

		int totalRowCount = adrInqService.retrieveAdrInqCount(EDT_ZIP, CBO_COMP, PROVNM, EDT_ZIP2, EDT_ZIP3);

		logger.debug("totalRowCount" + totalRowCount);

		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();

		try {
			PlatformData platformData = new PlatformData();

			List<AdrInqVO> rcList = adrInqService.retrieveAdrInqList(EDT_ZIP, CBO_COMP, PROVNM, EDT_ZIP2, EDT_ZIP3, start, end);
			DataSetHelper dsHelper = new DataSetHelper("ds_zip");

			if (rcList != null && rcList.size() > 0) {
				dsHelper.addColumns(AdrInqVO.class);

				for (AdrInqVO vo : rcList) {
					dsHelper.setData(vo);
				}
			}
			platformData.addDataSet(pageHelper.getDsPageVo());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}