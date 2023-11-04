package com.nh.escm.pda.controller;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pda.service.PdaProgramService;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class PdaProgramController extends AbstractController {

	@Autowired
	private PdaProgramService programService;

	/**
	 * PDA 프로그램 버전 조회 - 목록 화면
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/ProgramList")
	public void pdaProgramSearchList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String PGM_FL_VER = requestHelper.getParameter("pgm_fl_ver");
		String PGM_FL_ID = requestHelper.getParameter("pgm_fl_id");

		try {
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			
			// Paging
			int totalCount = programService.getMainCount(PGM_FL_VER, PGM_FL_ID);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> mstList = programService.mainSelectList(PGM_FL_VER, PGM_FL_ID, start, end);
			
			DataSetHelper ds_dataTotal = new DataSetHelper("ds_dataTotal");

			if (mstList.size() > 0) {
				ds_dataTotal.addColumns(mstList.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : mstList) {
					ds_dataTotal.setData(vo);
				}
			}

			// 마스터 객체 전송
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds_dataTotal.getDataSet());
			platformData.addDataSet(page.getDsPageVo()); //paging
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/**
	 * PDA 프로그램 버전 등록 - 등록 화면
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/ProgramInsert")
	public void pdaProgramInsertList(HttpServletRequest request, HttpServletResponse response) {
  
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String PGM_FL_ID = requestHelper.getParameter("PGM_FL_ID");
		String RMK_CNTN = requestHelper.getParameter("RMK_CNTN");
		String systemFileName = requestHelper.getParameter("systemFileName");
		String USER_ID = requestHelper.getUserID();

		try {

			programService.PgmInsertList(PGM_FL_ID,  RMK_CNTN, systemFileName, USER_ID);

			// 객체 전송
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/**
	 * PDA 프로그램 상세 - 목록 화면
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/ProgramDetail")
	public void pdaProgramDetail(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String PGM_FL_ID = requestHelper.getParameter("PGM_FL_ID");
		String PGM_FL_VER = requestHelper.getParameter("PGM_FL_VER");

		try {
			List<Map<String, Object>> mstList = programService.selectDetail(PGM_FL_ID, PGM_FL_VER);

			DataSetHelper pda_pmst = new DataSetHelper("pda_pmst");

			if (mstList.size() > 0) {
				pda_pmst.addColumns(mstList.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : mstList) {
					pda_pmst.setData(vo);
				}
			}
			
			// 마스터 객체 전송
			PlatformData platformDataM = new PlatformData();
			platformDataM.addDataSet(pda_pmst.getDataSet());
			sendData(response, platformDataM);
			// 디테일 객체 전송

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * PDA 프로그램 버전 등록 - 등록 화면
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/deletePdaDetail")
	public void pdaProgramDetailDelete(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String PGM_FL_ID = requestHelper.getParameter("PGM_FL_ID");
		String PGM_FL_VER = requestHelper.getParameter("PGM_FL_VER");

		try {
			programService.deletePdaDetail(PGM_FL_ID, PGM_FL_VER);

			// 디테일 객체 전송
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	//파일다운로드
	@RequestMapping(value = "/rest/pda/fileDownload", method = RequestMethod.POST)
	public void pdaFileDownload(HttpServletRequest request, HttpServletResponse response) {
		
		String systemFileName = request.getParameter("systemFileName");
		systemFileName.replaceAll("\r", "").replaceAll("\n", "") ;  // 웹취약성조치. 개행문자 제거
		
		String fileName = request.getParameter("fileName");
		fileName.replaceAll("\r", "").replaceAll("\n", "") ;  // 웹취약성조치. 개행문자 제거
		
		String realPath = Configurer.getProperty("file.pda.program.path");
		File dir = new File(realPath);
		
		if (StringUtil.isNullCheck(systemFileName)) {
			throw new AppetizerException("error.message.required.parameters");
		} else {
			systemFileName = systemFileName.replaceAll("\\", "");
			systemFileName = systemFileName.replaceAll("/", "");
			systemFileName = systemFileName.replaceAll("\\.\\.", "");
		}
		File downloadFile = new File(dir.getAbsolutePath() + File.separator + systemFileName);

		logger.info("FileDown(post) Location= " + downloadFile.getAbsolutePath());

		response.setContentType(request.getContentType());
		response.setContentLength((int) downloadFile.length());
		response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName.replaceAll("\r", "").replaceAll("\n", "") + "\";");
		response.setHeader("Content-Transfer-Encoding", "binary");
		response.setHeader("Set-Cookie", "fileDownload=true; path=/");
		
		OutputStream out = null;
		try {
			out = response.getOutputStream();
			FileUtils.copyFile(downloadFile, out);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
		} finally {
			if (out != null) {
				try {
					out.flush();
				} catch (IOException e) {
					logger.error(e.getMessage());
				}
			}
		}
	}
}
