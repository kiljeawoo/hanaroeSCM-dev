package com.nh.escm.pt.myinf.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.myinf.service.InfAnssService;
import com.nh.escm.pt.myinf.service.MmRqsBrkService;
import com.nh.escm.pt.myinf.vo.SQLMapNames.InfAnssListNames;

/**
 * <pre>
 * AdinfDtpBrkController.java
 * </pre>
 * 
 * @author 김복궁
 * @version 1.0
 * @since 2015. 9. 21.
 * @modified
 * @modifier
 */

@RestController
public class InfAnssController extends AbstractController {
	
	@Autowired
	private InfAnssService infAnssService;
	@Autowired
	private MmRqsBrkService mmRqsBrkService;
	
	/**
	 * 월별이용료명세서 > 정보분석조회 조회
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/myinf/retrieveInfAnssList")
	public void retrieveInfAnssList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String RMS_MM = requestHelper.getParameter("RMS_MM");
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C");
		
		try {
			String TRPL_C = "";
			
			if ("A".equals(RMS_TRPL_C)) {
				List<Map<String, Object>> mmRqsBrkList = mmRqsBrkService.retrieveMmRqsBrkInit(requestHelper.getGlnCode());
				for (Map<String, Object> obj : mmRqsBrkList) {
					if ("M".equals(obj.get("SIMP_C_EXPL"))) {
						TRPL_C = (String) obj.get("SIMP_C"); // 대납업체
						break;
					}
				}
			} else {
				TRPL_C = RMS_TRPL_C;
			}
			
			List<Map<String, Object>> infAnssList = infAnssService.retrieveInfAnssList(RMS_MM, RMS_TRPL_C, TRPL_C);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_result");
			dsHelper.addColumns(InfAnssListNames.class);
			for (Map<String, Object> infAnss : infAnssList) {
				dsHelper.setData(infAnss);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 월별이용료명세서 > 정보분석조회 엑셀다운
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/downloadExcelInfAnssList")
	public void downloadExcelInfAnssList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String RMS_MM = requestHelper.getParameter("RMS_MM");
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C");
		
		String fileName = request.getParameter("fileName"); // 파일명
		logger.debug("  fileName  = >>" + fileName);
		
		try {
			String TRPL_C = "";
			
			if ("A".equals(RMS_TRPL_C)) {
				List<Map<String, Object>> mmRqsBrkList = mmRqsBrkService.retrieveMmRqsBrkInit(requestHelper.getGlnCode());
				for (Map<String, Object> obj : mmRqsBrkList) {
					if ("M".equals(obj.get("SIMP_C_EXPL"))) {
						TRPL_C = (String) obj.get("SIMP_C"); // 대납업체
						break;
					}
				}
			} else {
				TRPL_C = RMS_TRPL_C;
			}
			
			List<Map<String,Object>> infAnssList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = { "사업장", "구분", "금액(원)" };
			String[] keyIndex = { "CLNTNM", "IA_SVC_NM", "AMOUNT" };
			
			AbstractModel model = new DefaultModel("정보분석", header, keyIndex, infAnssList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			infAnssService.downloadExcelInfAnssList(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "정보분석조회");
			
			searchMap.put("이용료월", RMS_MM);
			searchMap.put("대납업체거래처 코드", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
}
