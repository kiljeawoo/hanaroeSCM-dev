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
import com.nh.escm.pt.comn.service.BuyerInqService;
import com.nh.escm.pt.comn.vo.BuyerInqVO;
import com.nh.escm.util.PageHelper;


@Controller
public class BuyerInqController extends AbstractController {
	
	@Autowired
	private BuyerInqService buyerInqService;
	
	/**
	 * 바이어 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/retrieveBuyerInq")
	public void retrieveBuyerInq(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String SHRT_BZPLNM = null; // 사업장명
			String BUYER_NM = requestHelper.getParameter("buyerNm", ""); // 담당자명
			String CHRG_BSNNM = requestHelper.getParameter("chrgBsnNm", ""); // 담당업무명
			
//			BUYER_NM = URLDecoder.decode(BUYER_NM, "UTF-8"); // decode
//			CHRG_BSNNM = URLDecoder.decode(CHRG_BSNNM, "UTF-8"); // decode
			
			int totalRowCount = buyerInqService.retrieveBuyerInqCount(SHRT_BZPLNM, BUYER_NM, CHRG_BSNNM);
			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			List<BuyerInqVO> rcList = buyerInqService.retrieveBuyerInqList(SHRT_BZPLNM, BUYER_NM, CHRG_BSNNM, start, end);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_bzpl");
			dsHelper.addColumns(BuyerInqVO.class);
			for (BuyerInqVO vo : rcList) {
				dsHelper.setData(vo);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(pageHelper.getDsPageVo());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
//		} catch (UnsupportedEncodingException e) {
//			logger.error(e.getMessage(), e);
//			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
}

