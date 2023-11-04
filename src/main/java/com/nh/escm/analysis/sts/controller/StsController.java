package com.nh.escm.analysis.sts.controller;


import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMaker;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;


import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.analysis.info.service.InfoChangeService;
import com.nh.escm.analysis.sts.service.StsService;
import com.nh.escm.common.service.CodeService;
import com.nh.escm.common.vo.SQLNames.CommonSimpleCode;
import com.nh.escm.pds.dmart.vo.DmartVO;




@RestController
public class StsController extends AbstractController{
	
	@Autowired
	private StsService stsService;
	
	@Autowired
	private CodeService codeService;
	
	/**
	 * 화면 ID: VAN_DS_SC_2001
	 * 화면설명: 납품률 조회
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/sts/retrieveDlvRatioList")
	public void retrieveDlvRatioList(HttpServletRequest request, HttpServletResponse response			){
		
		PlatformData out_platformData = new PlatformData();
		DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
		String mb_id = requestHelper.getUserID();
		String date_fr  = requestHelper.getParameter("date_fr");    // 조회기간: 시작일
		String date_to = requestHelper.getParameter("date_to");   // 조회기간: 종료일
		
		String ratioDsc  = requestHelper.getParameter("ratioDsc");  // 기준수량 구분: 1 매입수량 2 배송수량
		String na_bzplc = requestHelper.getParameter("na_bzplc");  //기준수량 구분: 1 매입수량 2 배송수량
		
		try {			
			
			List<Map<String,Object>> ratioList = stsService.retrieveDlvRatioList(TRPL_C_ARR, mb_id, date_fr, date_to, ratioDsc, na_bzplc);
			
			Set<String> colName = new HashSet<String>();
			colName.add("SL_YM");
			colName.add("NA_BZPLC");
			colName.add("NA_BZPLNM");
			colName.add("NA_WRS_C");
			colName.add("WRSNM");
			colName.add("ODR_QT");
			colName.add("DLV_QT");
			
			colName.add("BYNG_QT");
			colName.add("RATIO");
			
			dsHelper.addColumns(colName);

			for(Map<String, Object> v : ratioList){
				
				dsHelper.setData(v);
			}
			
			out_platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, out_platformData);
		
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}	

	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelDlvRatioList")
	public void downloadExceDlvRatioList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatformData  out_platformData = new PlatformData();
		DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
		String mb_id = requestHelper.getUserID();
		String date_fr  = requestHelper.getParameter("date_fr");    // 조회기간: 시작일
		String date_to = requestHelper.getParameter("date_to");   // 조회기간: 종료일
		
		String ratioDsc  = requestHelper.getParameter("ratioDsc");  // 기준수량 구분: 1 매입수량 2 배송수량
		String na_bzplc = requestHelper.getParameter("na_bzplc");  //기준수량 구분: 1 매입수량 2 배송수량
		
		String fileName = "납품률분석_" + date_fr + "_" + date_to + ".xls";
		
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try{
			
			 List<Map<String,Object>> ratioList = stsService.retrieveDlvRatioList(TRPL_C_ARR, mb_id, date_fr, date_to, ratioDsc, na_bzplc);
			 
				String[] header = {
						  "년월"
						, "NA_BZPLC"
						, "NA_BZPLNM"
						, "NA_WRS_C"
						, "WRSNM"
						, "ODR_QT"
						, "DLV_QT"
						, "BYNG_QT"
						, "RATIO"
				};
				
				String[] keyIndex = {
						  "SL_YM"
						, "NA_BZPLC"
						, "NA_BZPLNM"
						, "NA_WRS_C"
						, "WRSNM"
						, "ODR_QT"
						, "DLV_QT"
						, "BYNG_QT"
						, "RATIO"
				};
				
				AbstractModel model = new DefaultModel("마스터", header, keyIndex, ratioList);
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);
				
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("신청일시", "신청일시");
				searchMap.put("신청ID", "신청ID");
				searchMap.put("진행상태명", "진행상태명");
				excelMaker.createSearchSheet(searchMap);

				excelMaker.write(response, fileName);
				
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	
} // End of Class
