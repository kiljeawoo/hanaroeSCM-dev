package com.nh.escm.pt.myinf.controller;

import java.util.ArrayList;
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
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.myinf.service.MmRqsBrkService;
import com.nh.escm.pt.myinf.vo.SQLMapNames.MmRqsBrkBasicNames;
import com.nh.escm.pt.myinf.vo.SQLMapNames.MmRqsBrkDetailNames;
import com.nh.escm.pt.myinf.vo.SQLMapNames.NaTrplcNames;

/**
 * <pre>MmRqsBrkController.java</pre>
 * @author 김복궁
 * @version 1.0
 * @since 2015. 9. 18.
 * @modified 
 * @modifier 
 */

@RestController
public class MmRqsBrkController extends AbstractController {
	
	@Autowired
	private MmRqsBrkService mmRqsBrkService;
	
	/**
	 * 월별이용료명세서 > 초기데이터
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/myinf/retrieveMmRqsBrkInit")
	public void retrieveMmRqsBrkInit(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			List<Map<String, Object>> mmRqsBrkList = mmRqsBrkService.retrieveMmRqsBrkInit(requestHelper.getGlnCode());
			if (mmRqsBrkList.size() == 0) {
				mmRqsBrkList = mmRqsBrkService.retrieveMmRqsBrkInit1(requestHelper.getGlnCode());
			}
			
			DataSetHelper dsHelper = new DataSetHelper("ds_naTrplc");
			dsHelper.addColumns(NaTrplcNames.class);
			for (Map<String, Object> map : mmRqsBrkList) {
				dsHelper.setData(map);
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
	 * 월별이용료명세서 > 이용료청구내역 조회
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/myinf/retrieveMmRqsBrk")
	public void retrieveMmRqsBrk(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String RMS_MM = requestHelper.getParameter("RMS_MM");
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C"); // 선택한 업체
		
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
			
			List<Map<String, Object>> mmRqsBrkList = mmRqsBrkService.retrieveMmRqsBrk(RMS_MM, RMS_TRPL_C, TRPL_C);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_result");
			dsHelper.addColumns(MmRqsBrkBasicNames.class);
			for (Map<String, Object> map : mmRqsBrkList) {
				dsHelper.setData(map);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/myinf/retrieveDetailMmRqsBrk")
	public void retrieveDetailMmRqsBrk(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String RMS_MM = requestHelper.getParameter("RMS_MM");		
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C");
		
		logger.debug("RMS_MM  =>>  " +RMS_MM+ "   :::     RMS_TRPL_C  =>>   "+  RMS_TRPL_C);

		try {
			Map<String, Object> mmRqsBrk = mmRqsBrkService.retrieveDetailMmRqsBrk(requestHelper.getGlnCode(), RMS_MM , RMS_TRPL_C);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_resultDetail");
			dsHelper.addColumns(MmRqsBrkDetailNames.class);
			dsHelper.setData(mmRqsBrk);
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());                                                                                                                                                                                                                                                                                                                                                      
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}	                
	}
	
	/**
	 * 월별이용료명세서 > 이용료청구내역 출력
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/oz/pt/myinf/retrieveMmRqsBrk")
	public RestResult retrieveMmRqsBrkOz(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String RMS_MM = requestHelper.getParameter("RMS_MM");
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C"); // 선택한 업체
		
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
			
			List<Map<String, Object>> mmRqsBrkList = mmRqsBrkService.retrieveMmRqsBrk(RMS_MM, RMS_TRPL_C, TRPL_C);
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(mmRqsBrkList); // "ds_result"
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/**
	 * 월별이용료명세서 > 이용료청구내역 엑셀다운
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/downloadExcelMmRqsBrk")
	public void downloadExcelMmRqsBrk(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String RMS_MM = requestHelper.getParameter("RMS_MM");
		String RMS_TRPL_C = requestHelper.getParameter("RMS_TRPL_C"); // 선택한 업체
		
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
			
			List<Map<String,Object>> mmRqsBrkList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = { "사업장코드", "사업장명", "대납업체수", "EDI서비스 사용량", "부가정보 사용량",
					"기본료", "XML/EDI 기본료", "EDI서비스 금액(원)", "부가정보 금액(원)", "BI조회 금액(원)", "추이분석 금액(원)",
					"시장분석(자사) 금액(원)", "카테고리 시장분석 금액(원)", "파일제공 금액(원)", "판매상세정보 사용량", "판매상세정보 사용금액", "세금계산서 발행건수", "SMS", "연체료",
					"사용요금", "할인금액", "공급가액", "부가세(VAT)", "청구금액" };
			String[] keyIndex = { "TRPL_C", "CLNTNM", "SUP_CNT", "EDI_UGQT_SUM", "ADINF_UGQT_SUM",
					"BASIC_RATE_SUM", "XMLEDI_BASIC_RATE_SUM", "EDI_UG_AM_SUM", "ADINF_UG_AM_SUM", "IA_BI_UG_AM_SUM", "IA_PG_UG_AM_SUM",
					"IA_MA_UG_AM_SUM", "IA_CTGR_UG_AM_SUM", "IA_BLBD_UG_AM_SUM", "CTGR_SL_UGQT_SUM", "CTGR_SL_UG_AM_SUM", "TXBIL_RPBC_CNT", "SMS_UG_AM_SUM", "LATE_AM_SUM",
					"DC_BF_UG_AM_SUM", "DC_AM_SUM", "SPPR_SUM", "VAT_AM_SUM", "LS_RQS_AM_SUM" };
			
			AbstractModel model = new DefaultModel("이용료명세서", header, keyIndex, mmRqsBrkList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			mmRqsBrkService.downloadExcelMmRqsBrk(RMS_MM, RMS_TRPL_C, TRPL_C, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "이용료청구내역");
			
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

