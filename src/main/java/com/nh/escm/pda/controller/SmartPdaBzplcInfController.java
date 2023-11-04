package com.nh.escm.pda.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pda.service.SmartPdaBzplcInfService;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class SmartPdaBzplcInfController extends AbstractController
{
	@Autowired
	private SmartPdaBzplcInfService smartPdaBzplcInfService;

	/**
	 * 화면ID : PDA_CN_012001
	 * 화면설명 : 스마트PDA오류조회
	 */

	/* 스마트PDA 경통오류조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaByngErrList")
	public void retrieveSmtPdaByngErrList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String FROM_DT	= requestHelper.getParameter("FROM_DT");
		String TO_DT	= requestHelper.getParameter("TO_DT");
		String TYPE_CD	= requestHelper.getParameter("TYPE_CD");		

		PlatformData platformData = new PlatformData();
		try
		{
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			int totalCount = smartPdaBzplcInfService.getByngErrCount(BZPL_C, CLNTNM, FROM_DT, TO_DT, TYPE_CD);

			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();

			List<Map<String, Object>> records = smartPdaBzplcInfService.retrieveSmtPdaByngErrList(BZPL_C, CLNTNM, FROM_DT, TO_DT, TYPE_CD, start, end);			
			DataSetHelper ds = new DataSetHelper("ds_byngErr");			
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

	/* 스마트PDA 경통오류조회 엑셀다운로드 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/pda/downloadExcelSmtPdaByngErrList")
	public void downloadExcelSmtPdaByngErrList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String FROM_DT	= requestHelper.getParameter("FROM_DT");
		String TO_DT	= requestHelper.getParameter("TO_DT");
		String TYPE_CD	= requestHelper.getParameter("TYPE_CD");

		String fileName = "스마트PDA오류정보.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			int totalCount = smartPdaBzplcInfService.getByngErrCount(BZPL_C, CLNTNM, FROM_DT, TO_DT, TYPE_CD);
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장명",
					"팀명",
					"배송예정일",
					"전표번호",
					"공급처코드",
					"구분",
					"오류메시지"
			};
			String[] keyIndex = {
					"CLNTNM",
					"TEAMNM",
					"ODR_DT",
					"TR_BASS_NO",
					"BUYPL_NA_TRPL_C",
					"CNR_STS_DSC",
					"RSP_C_CNTN"
			};
			
			AbstractModel model = new DefaultModel("스마트PDA오류정보", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			smartPdaBzplcInfService.downloadExcelSmtPdaByngErrList(BZPL_C, CLNTNM, FROM_DT, TO_DT, TYPE_CD, 1, totalCount, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}

	/**
	 * 화면ID : PDA_CN_013001
	 * 화면설명 : 스마트PDA권한조회
	 */

	/* 스마트PDA 프로그램 권한조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/retrieveSmtPdaPgmAuthList")
	public void retrieveSmtPdaPgmAuthList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String USR_ID	= requestHelper.getParameter("USR_ID");
		String USR_NM	= requestHelper.getParameter("USR_NM");		

		PlatformData platformData = new PlatformData();
		try
		{
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			int totalCount = smartPdaBzplcInfService.getPgmAuthCount(BZPL_C, CLNTNM, USR_ID, USR_NM);

			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();

			List<Map<String, Object>> records = smartPdaBzplcInfService.retrieveSmtPdaPgmAuthList(BZPL_C, CLNTNM, USR_ID, USR_NM, start, end);			
			DataSetHelper ds = new DataSetHelper("ds_pgmAuth");			
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

	/* 스마트PDA 프로그램 권한조회 엑셀다운로드 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/pda/downloadExcelSmtPdaPgmAuthList")
	public void downloadExcelSmtPdaPgmAuthList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BZPL_C	= requestHelper.getParameter("BZPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String USR_ID	= requestHelper.getParameter("USR_ID");
		String USR_NM	= requestHelper.getParameter("USR_NM");

		String fileName = "스마트PDA프로그램권한정보.xls";
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
			int totalCount = smartPdaBzplcInfService.getPgmAuthCount(BZPL_C, CLNTNM, USR_ID, USR_NM);
			
			String[] header = {
					"사업장명",
					"사용자ID",
					"사용자명",
					"발주",
					"검수",
					"매입",
					"가격변경",
					"재고",
					"가격할인"
			};
			String[] keyIndex = {
					"CLNTNM",
					"USRID",
					"USRNM",
					"ORD_USE_YN",
					"CNR_USE_YN",
					"BY_USE_YN",
					"PR_USE_YN",
					"STPL_USE_YN",
					"ETC1_USE_YN"
			};
			
			AbstractModel model = new DefaultModel("스마트PDA프로그램권한정보", header, keyIndex, records);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			smartPdaBzplcInfService.downloadExcelSmtPdaPgmAuthList(BZPL_C, CLNTNM, USR_ID, USR_NM, 1, totalCount, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}
}