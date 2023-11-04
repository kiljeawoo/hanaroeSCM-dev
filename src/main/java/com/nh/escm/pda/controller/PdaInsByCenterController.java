package com.nh.escm.pda.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nh.escm.pda.service.PdaInsByCenterService;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */

@RestController
public class PdaInsByCenterController extends AbstractController {
	
	@Autowired
	private PdaInsByCenterService pdaInsByCenterService;
	
	/**
	 * 화면ID : PDA_INS_004001
	 * 화면설명 : PDA 검수내역 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pda/downloadExcelPda")
	public void downloadExcelPda(HttpServletRequest request, HttpServletResponse response) throws IOException
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		List<String> daylist = new ArrayList<String>();
		String from_dt = requestHelper.getParameter("FROM_DT");
		String to_dt = requestHelper.getParameter("TO_DT");
		String trplc = requestHelper.getParameter("TRPL_C");
		DateFormat dt = new SimpleDateFormat("yyyyMMdd");
		Date std = null;
		Date endd = null;
		try {
			std = dt.parse(from_dt);
			endd = dt.parse(to_dt);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		
		Calendar c1 = Calendar.getInstance();
		Calendar c2 = Calendar.getInstance();
		c1.setTime(std);
		c2.setTime(endd);
		int i = 0;
		while(c1.compareTo(c2)!=1){
			daylist.add(i,DateUtil.convertDateToString("yyyyMMdd",c1.getTime()));
			c1.add(Calendar.DATE, 1);
			i++;
		}
		String fileName = "pda검수.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {			
			List<Map<String,Object>> PdaInsList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			int dif = 0;
			dif = daylist.size();			
			String[] header = new String[dif+2];
			
			for (int j = 0; j < dif+2; j++) {
				if (j == 0) {
					header[j] = "물류센터코드  ";
				} else if (j == 1) {
					header[j] = "물류센터명                ";
				} else {
					header[j] =  daylist.get(j-2);
				}
			}
			

			String[] keyIndex = new String[dif+2];
			for (int k = 0; k < dif+2; k++) {
				if (k == 0) {
					keyIndex[k] = "SPYPL_NA_TRPL_C";
				} else if (k == 1) {
					keyIndex[k] = "SPYPL_NM";
				} else {
					keyIndex[k] = "D"+daylist.get(k-2)+"_PCT";
				}
			}
			
			AbstractModel model = new DefaultModel("센터별검수내역", header, keyIndex, PdaInsList);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			pdaInsByCenterService.selectByCenter(from_dt, to_dt, trplc, daylist, handler);
			
			handler.setColumnWidth(handler.getDataSheet(), 0, 17*256);
			handler.setColumnWidth(handler.getDataSheet(), 1, 35*256);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pda/downloadExcelPdaDetail")
	public void getPdaDetailExcel(HttpServletRequest request, HttpServletResponse response) throws IOException
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		List<String> daylist = new ArrayList<String>();
		String from_dt = requestHelper.getParameter("FROM_DT");
		String to_dt = requestHelper.getParameter("TO_DT");
		String trplc = requestHelper.getParameter("TRPL_C");
		DateFormat dt = new SimpleDateFormat("yyyyMMdd");
		Date std = null;
		Date endd = null;
		try {
			std = dt.parse(from_dt);
			endd = dt.parse(to_dt);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		
		Calendar c1 = Calendar.getInstance();
		Calendar c2 = Calendar.getInstance();
		c1.setTime(std);
		c2.setTime(endd);
		int i = 0;
		while(c1.compareTo(c2)!=1){
			daylist.add(i,DateUtil.convertDateToString("yyyyMMdd",c1.getTime()));
			c1.add(Calendar.DATE, 1);
			i++;
		}
		String fileName = "pda검수내역상세.xls";
		logger.info("파일이름은:"+fileName);
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {			
			List<Map<String,Object>> PdaInsList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			int dif = 0;
			dif = daylist.size();			
			String[] header = new String[dif+4];
			
			for (int j = 0; j < dif+4; j++) {
				if (j == 0) {
					header[j] = "물류센터코드 ";
				} else if (j == 1) {
					header[j] = "물류센터명";
				} else if (j == 2) {
					header[j] = "배송지코드 ";
				} else if (j == 3) {
					header[j] = "배송지명";
				} else {
					header[j] =  daylist.get(j-4);
				}
			}
			

			String[] keyIndex = new String[dif+4];
			for (int k = 0; k < dif+4; k++) {
				if (k == 0) {
					keyIndex[k] = "SPYPL_NA_TRPL_C";
				} else if (k == 1) {
					keyIndex[k] = "SPYPL_NM";
				} else if (k == 2) {
					keyIndex[k] = "DVYAA_NA_TRPL_C";
				} else if (k == 3) {
					keyIndex[k] = "DVYAA_NM";
				} else {
					keyIndex[k] = "C"+daylist.get(k-4);
				}
			}
			
			AbstractModel model = new DefaultModel("검수내역상세", header, keyIndex, PdaInsList);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			pdaInsByCenterService.selectPdaDetail(from_dt, to_dt, trplc, daylist, handler);
			
			handler.setColumnWidth(handler.getDataSheet(), 0, 17*256);
			handler.setColumnWidth(handler.getDataSheet(), 1, 35*256);
			handler.setColumnWidth(handler.getDataSheet(), 2, 17*256);
			handler.setColumnWidth(handler.getDataSheet(), 3, 40*256);
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}


}

