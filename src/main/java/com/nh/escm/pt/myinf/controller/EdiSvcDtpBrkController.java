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
import com.nh.escm.pt.myinf.service.EdiSvcDtpBrkService;
import com.nh.escm.pt.myinf.service.MmRqsBrkService;
import com.nh.escm.pt.myinf.vo.SQLMapNames.EdiSvcDtpBrkListNames;

/**
 * <pre>EdiSvcDtpBrkController.java</pre>
 * @author 김복궁
 * @version 1.0
 * @since 2015. 9. 23.
 * @modified 
 * @modifier 
 */

@RestController
public class EdiSvcDtpBrkController extends AbstractController {
	
	@Autowired
	private EdiSvcDtpBrkService ediSvcDtpBrkService;
	@Autowired
	private MmRqsBrkService mmRqsBrkService;
	
	/**
	 * 월별이용료명세서 > EDI서비스일별내역 조회
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/myinf/retrieveEdiSvcDtpBrkList")
	public void retrieveEdiSvcDtpBrkList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C");
		String RMS_MM = requestHelper.getParameter("RMS_MM");
		
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
			
			List<Map<String, Object>> ediSvcDtpBrkBrkList = ediSvcDtpBrkService.retrieveEdiSvcDtpBrkList(RMS_MM, RMS_TRPL_C, TRPL_C);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_result");
			dsHelper.addColumns(EdiSvcDtpBrkListNames.class);
			for (Map<String, Object> ediSvcDtpBrkBrk : ediSvcDtpBrkBrkList) {
				dsHelper.setData(ediSvcDtpBrkBrk);
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
	 * 월별이용료명세서 > EDI서비스일별내역 엑셀다운
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/downloadExcelEdiSvcDtpBrkList")
	public void downloadExcelEdiSvcDtpBrkList(HttpServletRequest request, HttpServletResponse response) {
		
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
			
			List<Map<String,Object>> ediSvcDtpBrkBrkList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = { "수신일자", "사업장", "주문서", "주문예정서", "배송예정서", "배송예정 응답서", "검수확정서", "반품확정서", "마트별매입실적", "물류센터출고실적", "수/발신 Byte", "빌링 Byte", "빌링 KB" };
			String[] keyIndex = { "RMS_DT", "CLNTNM", "ORDERS", "ORDRES", "DESADV", "DESRSP", "CONADV", "CONRET", "SILRPT", "SISRPT", "DLY_SUM", "BL_DLY_SUM", "BL_DLY_SUM_KB" };
			
			AbstractModel model = new DefaultModel("EDI서비스일별내역", header, keyIndex, ediSvcDtpBrkBrkList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			ediSvcDtpBrkService.downloadEdiSvcDtpBrkList(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "EDI서비스일별내역");
			
			searchMap.put("이용료월", RMS_MM);
			searchMap.put("대납업체거래처 코드", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/**
	 * 월별이용료명세서 > EDI서비스일별내역(WEB/EDI) 조회
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/myinf/retrieveEdiSvcDtpBrkList_LOC")
	public void retrieveEdiSvcDtpBrkList_LOC(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C");
		String RMS_MM = requestHelper.getParameter("RMS_MM");
		
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
			
			List<Map<String, Object>> ediSvcDtpBrkBrkList = ediSvcDtpBrkService.retrieveEdiSvcDtpBrkList_LOC(RMS_MM, RMS_TRPL_C, TRPL_C);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_result");
			if (ediSvcDtpBrkBrkList.size() > 0) {
				dsHelper.addColumns(ediSvcDtpBrkBrkList.get(0).keySet());
				for (Map<String, Object> ediSvcDtpBrkBrk : ediSvcDtpBrkBrkList) {
					dsHelper.setData(ediSvcDtpBrkBrk);
				}
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
	 * 월별이용료명세서 > EDI서비스일별내역(WEB/EDI) 엑셀다운
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/downloadExcelEdiSvcDtpBrkList_LOC")
	public void downloadExcelEdiSvcDtpBrkList_LOC(HttpServletRequest request, HttpServletResponse response) {
		
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
			
			List<Map<String,Object>> ediSvcDtpBrkBrkList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"수신일자",
					"사업장",
					"주문서(WEB)", "주문서(EDI)",
					"주문예정서(WEB)", "주문예정서(EDI)",
					"배송예정서(WEB)", "배송예정서(EDI)",
					"배송예정 응답서(WEB)", "배송예정 응답서(EDI)",
					"검수확정서(WEB)", "검수확정서(EDI)",
					"반품확정서(WEB)", "반품확정서(EDI)",
					"마트별매입실적(WEB)", "마트별매입실적(EDI)",
					"물류센터출고실적(WEB)", "물류센터출고실적(EDI)",
					"수/발신(WEB) Byte", "수/발신(EDI) Byte",
					"수/발신(WEB) KB", "수/발신(EDI) KB" };
			String[] keyIndex = {
					"RMS_DT",
					"CLNTNM",
					"ORDERS_WEB", "ORDERS_EDI",
					"ORDRES_WEB", "ORDRES_EDI",
					"DESADV_WEB", "DESADV_EDI",
					"DESRSP_WEB", "DESRSP_EDI",
					"CONADV_WEB", "CONADV_EDI",
					"CONRET_WEB", "CONRET_EDI",
					"SILRPT_WEB", "SILRPT_EDI",
					"SISRPT_WEB", "SISRPT_EDI",
					"DLY_SUM_WEB", "DLY_SUM_EDI",
					"DLY_SUM_WEB_KB", "DLY_SUM_EDI_KB" };
			
			AbstractModel model = new DefaultModel("EDI서비스일별내역(WEB_EDI)", header, keyIndex, ediSvcDtpBrkBrkList); // Model name에 "/" 사용못함.
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			ediSvcDtpBrkService.downloadEdiSvcDtpBrkList_LOC(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "EDI서비스일별내역(WEB/EDI)");
			
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
