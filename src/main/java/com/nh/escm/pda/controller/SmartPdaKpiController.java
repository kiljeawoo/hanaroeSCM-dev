package com.nh.escm.pda.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pda.service.SmartPdaKpiService;
import com.nh.escm.pda.vo.SmartPdaKpiVo;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class SmartPdaKpiController extends AbstractController {
	
	@Autowired
	private SmartPdaKpiService smartPdaKpiService;

	/**
	 * 화면ID : PDA_CN_007001
	 * 화면설명 : 검수실적 그룹관리
	 */

	/* 검수실적 그룹조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaKpiGroupList")
	public void retrieveSmtPdaKpiGroupList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String TRPL_C	= requestHelper.getParameter("TRPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String GROUP_C	= requestHelper.getParameter("GROUP_C");
		String USE_CD   = requestHelper.getParameter("USE_CD");

		PlatformData platformData = new PlatformData();
		try
		{			
			List<Map<String, Object>> records = smartPdaKpiService.retrieveSmtPdaKpiGroupList(TRPL_C,CLNTNM,GROUP_C, USE_CD);
			DataSetHelper ds = new DataSetHelper("ds_kpiGroup");
			
			if (records.size() > 0)
			{
				ds.addColumns(records.get(0).keySet());	//첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records)
				{
					ds.setData(vo);
				}
			}
			// 객체 전송
			platformData.addDataSet(ds.getDataSet());	//data
			sendData(response, platformData);
		}
		catch (Exception e)
		{
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}

	
	/*
	 *  검수실적 그룹 변경
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/updateSmtPdaKpiGroup")
	public void updateSmtPdaKpiGroup(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet in_ds	= requestHelper.getDataSet("in_ds");
		String usrId = requestHelper.getUserID();
		int resultCode = 0;
		
		int result = 0;
		
		try {
			String	TrplC		= null;
			
			for (int i = 0; i < in_ds.getRowCount(); i++) {
				TrplC	= in_ds.getString(i, "NA_TRPL_C");
				List<Map<String, Object>> records = smartPdaKpiService.getExistSnaTrplC(TrplC);
				if(records.size() == 0){  //사업장이 존재하지 않을때
					result = result + 1;
					sendData(response, new PlatformData(), 2, TrplC);
				} else {
					int rowType = in_ds.getRowType(i);
					if(rowType == 2){
						//사업장 중복일때
						Map<String, Object> data = smartPdaKpiService.getExistSmarPdaKpi(TrplC);
						if(data != null){
							result = result + 1;
							sendData(response, new PlatformData(), 1, TrplC);
						}
					}
				}
			}
			
			if(result == 0){   //정상처리
				smartPdaKpiService.updateSmtPdaKpiGroup(in_ds, usrId);	
				sendData(response, new PlatformData(), resultCode, "");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 *  검수실적 그룹 목록 엑셀다운로드
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/pda/downloadExcelSmtPdaKpiGroupList")
	public void downloadExcelSmtPdaKpiGroupList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String TRPL_C	= requestHelper.getParameter("TRPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String GROUP_C	= requestHelper.getParameter("GROUP_C");
		String USE_CD   = requestHelper.getParameter("USE_CD");
		
		String fileName = "검수실적그룹관리.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장명",
					"구분",
					"그룹",
					"사용/중지"
			};
			String[] keyIndex = {
					"NA_TRPL_C",
					"CLNTNM",
					"PD_KPI_FLAG",
					"PD_KPI_GROUP_C",
					"USE_YN",
			};
			AbstractModel model = new DefaultModel("검수실적그룹관리", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			smartPdaKpiService.downloadExcelSmtPdaKpiGroupList(TRPL_C, CLNTNM, GROUP_C, USE_CD, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}
	
	/* 검수실적 그룹관리 변경권한 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/getAuthSmtPdaKpiGroupChg")
	public void getAuthSmtPdaKpiGroupChg(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String usrId = requestHelper.getUserID();

		PlatformData platformData = new PlatformData();
		try
		{			
			int records = smartPdaKpiService.getAuthSmtPdaKpiGroupChg(usrId);
			sendData(response, platformData, records, "");
		}
		catch (Exception e)
		{
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_008001
	 * 화면설명 : 검수실적 그룹관리
	 */

	/* 검수실적 그룹조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaKpiExptTrplList")
	public void retrieveSmtPdaKpiExptTrpl(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String TRPL_C	= requestHelper.getParameter("TRPL_C");
		String STR_NM	= requestHelper.getParameter("STR_NM");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String USE_CD	= requestHelper.getParameter("USE_CD");
		
		if(USE_CD.equals("2")){
			USE_CD = "";
		}

		PlatformData platformData = new PlatformData();
		try
		{			
			
			
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			int totalCount = smartPdaKpiService.getMainCount(BZPL_C, TRPL_C, STR_NM, CLNTNM, USE_CD);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = smartPdaKpiService.retrieveSmtPdaKpiExptTrpl(BZPL_C,TRPL_C,STR_NM,CLNTNM,USE_CD, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_kpiExptTrpl");
			
			if (records.size() > 0)
			{
				ds.addColumns(records.get(0).keySet());	//첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records)
				{
					ds.setData(vo);
				}
			}
			// 객체 전송
			platformData.addDataSet(ds.getDataSet());	//data
			platformData.addDataSet(page.getDsPageVo()); //paging
			sendData(response, platformData);
		}
		catch (Exception e)
		{
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/*검수실적 제외 업데이트 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/updateSmtPdaKpiExptTrpl")
	public void updateSmtPdaKpiExptTrpl(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet in_ds	= requestHelper.getDataSet("in_ds");
		String usrId = requestHelper.getUserID();
		int resultCode = 0;
		
		int result = 0;
		
		try {
			String trplC	= null;
			String bzplC 	= null;
			String rowType = "0";
			for (int i = 0; i < in_ds.getRowCount(); i++) {
				bzplC	= in_ds.getString(i, "NA_BZPLC");
				trplC	= in_ds.getString(i, "NA_TRPL_C");
				List<Map<String, Object>> records = smartPdaKpiService.getExistExptList(bzplC, trplC);
				if(records.size() < 2){  //사업장이 존재하지 않을때
					result = result + 1;
					sendData(response, new PlatformData(), 2, trplC);
				} else {
					rowType = in_ds.getString(i, "ROW_TYPE");
					if(rowType.equals("2")){
						//사업장 중복일때
						Map<String, Object> data = smartPdaKpiService.getExistsExptNaTrplC(bzplC, trplC);
						if(data != null){
							result = result + 1;
							sendData(response, new PlatformData(), 1, trplC);
						}
					}
				}
			}
			
			if(result == 0){   //정상처리
				smartPdaKpiService.updateSmtPdaKpiExptTrpl(in_ds, usrId);	
				sendData(response, new PlatformData(), resultCode, "");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*검수실적 제외 엑셀 업데이트 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/uploadExcelSaveSmtPdaKpiExptTrpl")
	public void uploadExcelSaveSmtPdaKpiExptTrpl(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet in_ds	= requestHelper.getDataSet("in_ds");
		String usrId = requestHelper.getUserID();
		int resultCode = 0;
		
		int result = 0;
		
		try {
			String trplC	= null;
			String bzplC 	= null;
			for (int i = 0; i < in_ds.getRowCount(); i++) {
				bzplC	= in_ds.getString(i, "NA_BZPLC");
				trplC	= in_ds.getString(i, "NA_TRPL_C");
				List<Map<String, Object>> records = smartPdaKpiService.getExistExptList(bzplC, trplC);
				if(records.size() < 2){  //사업장이 존재하지 않을때
					result = result + 1;
					sendData(response, new PlatformData(), 2, trplC);
				} 
			}
			
			if(result == 0){   //정상처리
				smartPdaKpiService.updateSmtPdaKpiExptTrpl(in_ds, usrId);	
				sendData(response, new PlatformData(), resultCode, "");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 *  검수실적 제외 목록 엑셀다운로드
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/pda/downloadExcelSmtPdaKpiExptTrplList")
	public void downloadExcelSmtPdaKpiExptTrplList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String TRPL_C	= requestHelper.getParameter("TRPL_C");
		String STR_NM	= requestHelper.getParameter("STR_NM");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String USE_CD	= requestHelper.getParameter("USE_CD");
		

		String fileName = "검수실적제외그룹관리.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장명",
					"거래처코드",
					"거래처명",
					"사용/중지"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"STR_NM",
					"NA_TRPL_C",
					"CLNTNM",
					"USE_YN",
			};
			AbstractModel model = new DefaultModel("검수실적제외그룹관리", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			smartPdaKpiService.getRetrieveGroupList(BZPL_C,TRPL_C,STR_NM,CLNTNM,USE_CD, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}
	
	
	/*
	 * 화면ID : PDA_CN_008001
	 * 화면설명 : 필수상품속성정보등록(EXCEL)_FileUpload
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pda/uploadExcelSmtPdaKpiExptTrpl")
	public void uploadExcelSmtPdaKpiExptTrpl(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper
				.newInstance(request);
		
		String systemFileName = requestHelper.getParameter("systemFileName");
		
		File tempPath = new File(Configurer.getProperty("file.temp.path"));
		
		PlatformData platformData = new PlatformData();
		XSSFWorkbook workbook = null;
		try {

			if (StringUtils.isEmpty(systemFileName)) {
				throw new ValidationException("잘못된 첨부파일 오류, 첨부파일 이름이 없습니다.");
			}

			File shortageFile = FileUtils.getFile(tempPath, systemFileName);
			if (!shortageFile.exists()) {
				throw new ValidationException(
						"첨부파일이 서버에 Upload 되지 않았습니다.관리자에 확인바랍니다.");
			}

			FileInputStream fis = new FileInputStream(shortageFile);
			workbook = new XSSFWorkbook(fis);
			XSSFSheet sheet = workbook.getSheetAt(0);
			int rows = sheet.getPhysicalNumberOfRows();

			DataSetHelper dHelper = new DataSetHelper("ds_excel_bind");

			dHelper.addColumns(SmartPdaKpiVo.class);
			
			String msg = "";
			
			for (int rowindex = 1; rowindex < rows; rowindex++) {

				XSSFRow row = sheet.getRow(rowindex);
				if (row != null) {
					
					SmartPdaKpiVo tempvo = new SmartPdaKpiVo();
					
					tempvo.setNA_BZPLC(getCellValue(row.getCell( 0))); 		// 사업장코드
					tempvo.setNA_TRPL_C(getCellValue(row.getCell( 2))); 	// 거래처코드
					tempvo.setUSE_YN(getCellValue(row.getCell( 4))); 		// 사용여부
					
					
					dHelper.setData(tempvo);
					if (tempvo.getNA_BZPLC().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "사업장코드 Cell 값 [" + tempvo.getNA_BZPLC().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getNA_TRPL_C().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "거래처코드 Cell 값 [" + tempvo.getNA_TRPL_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getUSE_YN().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "사용여부 Cell 값 [" + tempvo.getUSE_YN().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getNA_BZPLC().trim() != "" && tempvo.getNA_TRPL_C().trim() != "") {
						if(tempvo.getNA_BZPLC().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "사업장코드 Cell 값 [" + tempvo.getNA_BZPLC() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						} else if(tempvo.getNA_TRPL_C().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "거래처코드 Cell 값 [" + tempvo.getNA_TRPL_C() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						} else {
							List<Map<String, Object>> records = smartPdaKpiService.getExistExptList(tempvo.getNA_BZPLC(), tempvo.getNA_TRPL_C());
							if(records.size() < 2){  //사업장이 존재하지 않을때
								msg = "라인번호[" + rowindex + "] "+ "사업장코드 Cell 값 [" + tempvo.getNA_BZPLC() + "] 또는 거래처코드 Cell 값 [" + tempvo.getNA_TRPL_C() + "] 은 존재하지 않는 코드 입니다.";
								sendData(response, new PlatformData(), -1, msg);
							}
						}
						
					} else if (tempvo.getUSE_YN().trim() != "") {
						if(!tempvo.getUSE_YN().equals("1") && !tempvo.getUSE_YN().equals("0")){
							msg = "라인번호[" + rowindex + "] "+ "사용여부 Cell 값 [" + tempvo.getUSE_YN() + "] 은 사용이 안됩니다. (1: 사용, 0:중지)";
							sendData(response, platformData, -1, msg);
							return;
						} 
					} 
					
				}
			}
			platformData.addDataSet(dHelper.getDataSet());
			logger.debug(platformData.saveXml());
			sendData(response, platformData);
		} catch (AppetizerException | IOException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	private String getCellValue(XSSFCell cell) {
		String val = "";
		if (cell == null)
			return "";
		switch (cell.getCellType()) {
		case HSSFCell.CELL_TYPE_STRING:
			return cell.getStringCellValue();
		case HSSFCell.CELL_TYPE_NUMERIC:
			/*val = Double.toString(cell.getNumericCellValue());
			double dphi = cell.getNumericCellValue();
			// 소수점 세자리 절사용인듯
			
			 * if ((dphi - (int) dphi) * 1000 == 0) {
			 *	val = (int) dphi + "";
			 * }
			  
			
			// 수정
			double truncatedVal = Math.floor(dphi*1000);
			Double dblTrancated = new Double(truncatedVal/1000);
			val = dblTrancated.toString();*/
			/*val = "" + cell.getNumericCellValue();
			if (val.endsWith(".0")) {
				val = val.substring(0, val.length() - 2);
			}*/
			cell.setCellType(HSSFCell.CELL_TYPE_STRING);
			val = cell.getStringCellValue();
			return val;
		case HSSFCell.CELL_TYPE_BOOLEAN:
			return Boolean.toString(cell.getBooleanCellValue());
		case HSSFCell.CELL_TYPE_FORMULA:
			return cell.getCellFormula();

		}
		return "";
	}
	
	/**
	 * 화면ID : PDA_CN_008002
	 * 화면설명 : 검수실적 제외 거래처 관리
	 */

	/*  검수실적 제외상품 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaKpiExptWrsList")
	public void retrieveSmtPdaKpiExptWrsList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String STR_NM	= requestHelper.getParameter("STR_NM");
		String WRS_CD	= requestHelper.getParameter("WRS_CD");
		String WRS_NM	= requestHelper.getParameter("WRS_NM");
		String USE_CD	= requestHelper.getParameter("USE_CD");
		
		if(USE_CD.equals("2")){
			USE_CD = "";
		}

		PlatformData platformData = new PlatformData();
		try
		{			
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			int totalCount = smartPdaKpiService.getExptWrsCount(BZPL_C, WRS_CD, STR_NM, WRS_NM, USE_CD);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = smartPdaKpiService.retrieveSmtPdaKpiExptWrsList(BZPL_C,WRS_CD,STR_NM,WRS_NM,USE_CD, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_kpiExptWrs");
			
			if (records.size() > 0)
			{
				ds.addColumns(records.get(0).keySet());	//첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records)
				{
					ds.setData(vo);
				}
			}
			// 객체 전송
			platformData.addDataSet(ds.getDataSet());	//data
			platformData.addDataSet(page.getDsPageVo()); //paging
			sendData(response, platformData);
		}
		catch (Exception e)
		{
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	
	/*검수실적 제외상품 업데이트 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/updateSmtPdaKpiExptWrs")
	public void updateSmtPdaKpiExptWrs(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet in_ds	= requestHelper.getDataSet("in_ds");
		String usrId = requestHelper.getUserID();
		int resultCode = 0;
		
		int result = 0;
		
		try {
			String wrsC	= null;
			String bzplC 	= null;
			int rowType = 0;
			for (int i = 0; i < in_ds.getRowCount(); i++) {
				bzplC	= in_ds.getString(i, "NA_BZPLC");
				wrsC	= in_ds.getString(i, "NA_WRS_C");
				
				if(StringUtils.isEmpty(bzplC)) {
					sendData(response, new PlatformData(), 3, "사업장코드");
					return;
				} else if(StringUtils.isEmpty(wrsC)) {
					sendData(response, new PlatformData(), 3, "상품코드");
					return;
				}
				
				List<Map<String, Object>> records = smartPdaKpiService.getExistSnaTrplC(bzplC);
				if(records.size() < 1){  //사업장이 존재하지 않을때
					result = result + 1;
					sendData(response, new PlatformData(), 2, "사업장코드 " + bzplC);
					return;
				} else {
					//상품 존재 여부
					Map<String, Object> wrsRecods = smartPdaKpiService.getExistSwrsC(bzplC, wrsC);
					if(wrsRecods !=  null){
						rowType = in_ds.getRowType(i);
						if(rowType == 2){
							//추가시 사업장 && 상품코드 중복
							Map<String, Object> data = smartPdaKpiService.getExistExptWrsList(bzplC, wrsC);
							if(data != null){
								result = result + 1;
								sendData(response, new PlatformData(), 1, "사업장코드 " + bzplC + ", 상품코드 " + wrsC);
								return;
							}
						}
					}else { 
						result = result + 1;
						sendData(response, new PlatformData(), 2, "입력하신 사업장 " + bzplC + " 에, 상품코드 " + wrsC);
						return;
					}
				}
			}
			
			if(result == 0){   //정상처리
				smartPdaKpiService.updateSmtPdaKpiExptWrs(in_ds, usrId);	
				sendData(response, new PlatformData(), resultCode, "");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 *  검수실적 제외상품 목록 엑셀다운로드
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/pda/downloadExcelSmtPdaKpiExptWrsList")
	public void downloadExcelSmtPdaKpiExptWrsList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String WRS_CD	= requestHelper.getParameter("WRS_CD");
		String STR_NM	= requestHelper.getParameter("STR_NM");
		String WRS_NM	= requestHelper.getParameter("WRS_NM");
		String USE_CD	= requestHelper.getParameter("USE_CD");
		

		String fileName = "검수실적제외상품관리.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장명",
					"상품코드",
					"상품명",
					"사용/중지"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"CLNTNM",
					"NA_WRS_C",
					"WRSNM",
					"USE_YN",
			};
			AbstractModel model = new DefaultModel("검수실적제외상품관리", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);

			smartPdaKpiService.getRetrieveWrsList(BZPL_C,WRS_CD,STR_NM,WRS_NM,USE_CD, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : PDA_CN_008002
	 * 화면설명 : 검수실적 제외상품 (EXCEL)_FileUpload
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pda/uploadExcelSmtPdaKpiExptWrs")
	public void uploadExcelSmtPdaKpiExptWrs(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper
				.newInstance(request);
		
		String systemFileName = requestHelper.getParameter("systemFileName");
		
		File tempPath = new File(Configurer.getProperty("file.temp.path"));
		
		PlatformData platformData = new PlatformData();
		XSSFWorkbook workbook = null;
		try {

			if (StringUtils.isEmpty(systemFileName)) {
				throw new ValidationException("잘못된 첨부파일 오류, 첨부파일 이름이 없습니다.");
			}

			File shortageFile = FileUtils.getFile(tempPath, systemFileName);
			if (!shortageFile.exists()) {
				throw new ValidationException(
						"첨부파일이 서버에 Upload 되지 않았습니다.관리자에 확인바랍니다.");
			}

			FileInputStream fis = new FileInputStream(shortageFile);
			workbook = new XSSFWorkbook(fis);
			XSSFSheet sheet = workbook.getSheetAt(0);
			int rows = sheet.getPhysicalNumberOfRows();

			DataSetHelper dHelper = new DataSetHelper("ds_excel_bind");

			dHelper.addColumns(SmartPdaKpiVo.class);
			
			String msg = "";
			for (int rowindex = 1; rowindex < rows; rowindex++) {

				XSSFRow row = sheet.getRow(rowindex);
				if (row != null) {
					
					SmartPdaKpiVo tempvo = new SmartPdaKpiVo();
					
					tempvo.setNA_BZPLC(getCellValue(row.getCell( 0))); 		// 사업장코드
					tempvo.setNA_WRS_C(getCellValue(row.getCell( 2))); 		// 상품코드
					tempvo.setUSE_YN(getCellValue(row.getCell( 4))); 		// 사용여부
					
					
					dHelper.setData(tempvo);
					if (tempvo.getNA_BZPLC() == "") {
						msg = "라인번호[" + rowindex + "] "+ "사업장코드 Cell 값 [" + tempvo.getNA_BZPLC().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getNA_WRS_C() == "") {
						msg = "라인번호[" + rowindex + "] "+ "상품코드 Cell 값 [" + tempvo.getNA_WRS_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getNA_BZPLC().trim() != "" && tempvo.getNA_WRS_C().trim() != "") {
						if(tempvo.getNA_BZPLC().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "사업장코드 Cell 값 [" + tempvo.getNA_BZPLC() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						} else if(tempvo.getNA_WRS_C().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "상품코드 Cell 값 [" + tempvo.getNA_WRS_C() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						} else {
							List<Map<String, Object>> records = smartPdaKpiService.getExistSnaTrplC(tempvo.getNA_BZPLC());
							if(records.size() > 1){
								Map<String, Object> wrsRecods = smartPdaKpiService.getExistSwrsC(tempvo.getNA_BZPLC(), tempvo.getNA_WRS_C());
								if(wrsRecods == null){
									msg = "라인번호[" + rowindex + "] "+ "사업장코드 Cell 값 [" + tempvo.getNA_BZPLC() + "] 또는 상품코드 Cell 값 [" + tempvo.getNA_WRS_C() + "] 은 존재하지 않는 코드 입니다.";
									sendData(response, new PlatformData(), -1, msg);
									return;
								}
							} 
						}
						
					} 
					
					if (tempvo.getUSE_YN() == "") {
						msg = "라인번호[" + rowindex + "] "+ "사용여부 Cell 값 [" + tempvo.getUSE_YN().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getUSE_YN().trim() != "") {
						if(!tempvo.getUSE_YN().equals("1") && !tempvo.getUSE_YN().equals("0")){
							msg = "라인번호[" + rowindex + "] "+ "사용여부 Cell 값 [" + tempvo.getUSE_YN() + "] 은 사용이 안됩니다. (1: 사용, 0:중지)";
							sendData(response, platformData, -1, msg);
							return;
						} 
					} 
					
				}
			}
			platformData.addDataSet(dHelper.getDataSet());
			logger.debug(platformData.saveXml());
			sendData(response, platformData);
		} catch (AppetizerException | IOException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/**
	 * 화면ID : PDA_CN_009001
	 * 화면설명 : 검수실적 상세 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaKpiDtlList")
	public void retrieveSmtPdaKpiDtlList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String FROM_DT	= requestHelper.getParameter("FROM_DT");
		String TO_DT	= requestHelper.getParameter("TO_DT");
		String USE_CD	= requestHelper.getParameter("USE_CD");
		String GRP_DSC	= requestHelper.getParameter("GRP_DSC");

		if(USE_CD.equals("3")){
			USE_CD = "";
		}

		PlatformData platformData = new PlatformData();
		try
		{
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			int totalCount = smartPdaKpiService.getExptDtlListCount(BZPL_C, CLNTNM, FROM_DT, TO_DT, USE_CD, GRP_DSC);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = smartPdaKpiService.retrieveSmtPdaKpiDtlList(BZPL_C, CLNTNM, FROM_DT, TO_DT, USE_CD, GRP_DSC, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_kpiDtl");

			if (records.size() > 0)
			{
				ds.addColumns(records.get(0).keySet());	//첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records)
				{
					ds.setData(vo);
				}
			}
			// 객체 전송
			platformData.addDataSet(ds.getDataSet());	//data
			platformData.addDataSet(page.getDsPageVo()); //paging
			sendData(response, platformData);
		}
		catch (Exception e)
		{
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/*
	 *  검수실적 상세 엑셀다운로드
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/pda/downloadExcelSmtPdaKpiDtlList")
	public void downloadExcelSmtPdaKpiDtlList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String FROM_DT	= requestHelper.getParameter("FROM_DT");
		String TO_DT	= requestHelper.getParameter("TO_DT");
		String USE_CD	= requestHelper.getParameter("USE_CD");
		String GRP_DSC	= requestHelper.getParameter("GRP_DSC");
		
		
		String fileName = "검수실적상세.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			int totalCount = smartPdaKpiService.getExptDtlListCount(BZPL_C, CLNTNM, FROM_DT, TO_DT, USE_CD, GRP_DSC);			
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
		//	List<Map<String, Object>> records = smartPdaKpiService.getRetrieveDtlList(BZPL_C, CLNTNM, FROM_DT, TO_DT, USE_CD, GRP_DSC);
			String[] header = {
					"사업장명",
					"팀명",
					"배송예정일",
					"전표번호",
					"공급처코드",
					"PDA검수",
					"매입시도",
					"매입성공",
					"제외사유"
			};
			String[] keyIndex = {
					"CLNTNM",
					"TEAMNM",
					"DVY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"SPYPL_NA_TRPL_C",
					"PDA_USE_YN",
					"AUTO_BY_TRY",
					"AUTO_BY_RSLT",
					"EXPT_RSN"
			};
			AbstractModel model = new DefaultModel("검수실적상세", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			smartPdaKpiService.downloadExcelSmtPdaKpiDtlList(BZPL_C, CLNTNM, FROM_DT, TO_DT, USE_CD, GRP_DSC, 1, totalCount, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}
	
	/**
	 * 화면ID : PDA_CN_0100001
	 * 화면설명 : 검수실적 조회
	 */

	/*  검수실적 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaKpiMstList")
	public void retrieveSmtPdaKpiMstList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BY_DT	= requestHelper.getParameter("BY_DT");
		String FLAG_CD	= requestHelper.getParameter("FLAG_CD");
		String GRP_DSC	= requestHelper.getParameter("GRP_DSC");
		
		PlatformData platformData = new PlatformData();
		try
		{			
			List<Map<String, Object>> records = smartPdaKpiService.retrieveSmtPdaKpiMstList(BY_DT, FLAG_CD, GRP_DSC);			
			DataSetHelper ds = new DataSetHelper("ds_kpiMst");			
			if (records.size() > 0)
			{
				ds.addColumns(records.get(0).keySet());	//첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records)
				{
					ds.setData(vo);
				}
			}
			// 객체 전송
			platformData.addDataSet(ds.getDataSet());	//data
			sendData(response, platformData);
		}
		catch (Exception e)
		{
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/*
	 *  검수실적 엑셀다운로드
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/pda/downloadExcelSmtPdaKpiMstList")
	public void downloadExcelSmtPdaKpiMstList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String BY_DT	= requestHelper.getParameter("BY_DT");
		String FLAG_CD	= requestHelper.getParameter("FLAG_CD");
		String GRP_DSC	= requestHelper.getParameter("GRP_DSC");		

		String fileName = "검수실적.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"배송예정월",
					"그룹명",
					"구분",
					"사업장명",
					"배송예정서",
					"검수/매입",
					"확정률",
					"배점",
					"마감"
			};
			String[] keyIndex = {
					"DVY_PLA_YM",
					"PD_KPI_GROUP_C",
					"PD_KPI_FLAG",
					"CLNTNM",
					"DVY_CNT",
					"BY_CNT",
					"BY_PERCENT",
					"RATING",
					"CLOSE_YN"
			};
			AbstractModel model = new DefaultModel("검수실적", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			smartPdaKpiService.downloadExcelSmtPdaKpiMstList(BY_DT, FLAG_CD, GRP_DSC, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}
	
	
	/*
	 *  검수실적 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/updateSmtPdaKpiMst")
	public void updateSmtPdaKpiMst(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet in_ds	= requestHelper.getDataSet("in_ds");
		String BY_DT	= requestHelper.getParameter("BY_DT");
		String USRID = requestHelper.getUserID();
		int resultCode = 0;
		
		
		try {
			smartPdaKpiService.updateSmtPdaKpiMst(in_ds, BY_DT, USRID);	
			sendData(response, new PlatformData(), resultCode, "");
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	/*
	 *  검수실적 마감
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/closeSmtPdaKpiMst")
	public void closeSmtPdaKpiMst(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet in_ds	= requestHelper.getDataSet("in_ds");
		String BY_DT	= requestHelper.getParameter("BY_DT");
		String USRID = requestHelper.getUserID();
		int resultCode = 0;
		
		int result = 0;
		
		try {
			
			if(result == 0){   //정상처리
				smartPdaKpiService.closeSmtPdaKpiMst(in_ds, BY_DT, USRID);	
				sendData(response, new PlatformData(), resultCode, "");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_0110001
	 * 화면설명 : PDA 사용률 조회
	 */ 

	/* PDA 사용률 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaUseCntList")
	public void retrieveSmtPdaUseCntList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String FROM_DT	= requestHelper.getParameter("FROM_DT");
		String TO_DT	= requestHelper.getParameter("TO_DT");
		
		PlatformData platformData = new PlatformData();
		try
		{			
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			int totalCount = smartPdaKpiService.getRetriveUseCnt(BZPL_C, CLNTNM, FROM_DT, TO_DT);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = smartPdaKpiService.retrieveSmtPdaUseCntList(BZPL_C, CLNTNM, FROM_DT, TO_DT, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_useCnt");
			
			if (records.size() > 0)
			{
				ds.addColumns(records.get(0).keySet());	//첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records)
				{
					ds.setData(vo);
				}
			}
			// 객체 전송
			platformData.addDataSet(ds.getDataSet());	//data
			platformData.addDataSet(page.getDsPageVo()); //paging
			sendData(response, platformData);
		}
		catch (Exception e)
		{
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/*
	 *  PDA 사용률 조회 엑셀다운로드
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/pda/downloadExcelSmtPdaUseCntList")
	public void downloadExcelSmtPdaUseCntList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String FROM_DT	= requestHelper.getParameter("FROM_DT");
		String TO_DT	= requestHelper.getParameter("TO_DT");
		
		String fileName = "PDA사용률.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"시작일",
					"종료일",
					"사업장코드",
					"사업장명",
					"메뉴명",
					"사용량"
			};
			String[] keyIndex = {
					"START_DT",
					"END_DT",
					"NA_BZPLC",
					"CLNTNM",
					"MENU_NM",
					"ACC_COUNT"
			};
			AbstractModel model = new DefaultModel("PDA사용률", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			smartPdaKpiService.getUseCntList(BZPL_C, CLNTNM, FROM_DT, TO_DT, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}
	
	/*검수실적 순번 업데이트 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/sortSmtPdaKpiMst")
	public void sortSmtPdaKpiMst(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet in_ds	= requestHelper.getDataSet("in_ds");
		int resultCode = 0;
		
		try {
			for(int i=0; i < in_ds.getRowCount(); i++){
				logger.info(in_ds.getInt(i, "SORT_NUM"));
			}
			smartPdaKpiService.sortSmtPdaKpiMst(in_ds);	
			sendData(response, new PlatformData(), resultCode, "");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
}

