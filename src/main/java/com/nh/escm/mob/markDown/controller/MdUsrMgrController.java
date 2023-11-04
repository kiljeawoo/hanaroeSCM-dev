package com.nh.escm.mob.markDown.controller;

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
import com.nh.escm.mob.markDown.service.MdUsrMgrService;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class MdUsrMgrController extends AbstractController {
	
	@Autowired
	private MdUsrMgrService mdUsrMgrService;
	
	/**
	 * 화면ID : MOB_MD_SC_1111
	 * 화면설명 : 가격할인 사용자 조회
	 */

	/* 가격할인 권한조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/retrieveMdUsrAuth")
	public void retrieveMdUsrAuth(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);		

		String md_id	= requestHelper.getParameter("MD_ID");

		try {
			int start = 1;
			int end = 1;
			
			List<Map<String, Object>> records = mdUsrMgrService.mainSelectList(null, null, md_id, null, null, null, null, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_mdAuth");
			if (records.size() > 0) {
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
			}

			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet()); //data
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/* 가격할인 사용자 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/retrieveMdUsrList")
	public void retrieveMdUsrList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String trplC	= requestHelper.getParameter("TRPL_C");
		String clntNm	= requestHelper.getParameter("CLNTNM");
		String md_id	= requestHelper.getParameter("MD_ID");
		String md_nm	= requestHelper.getParameter("MD_NM");
		String mgr_cd	= requestHelper.getParameter("MGR_CD");
		String cgr_cd	= requestHelper.getParameter("CGR_CD");
		String use_cd	= requestHelper.getParameter("USE_CD");

		try {
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");

			// Paging
			int totalCount = mdUsrMgrService.getMainCount(trplC, clntNm, md_id, md_nm, mgr_cd, cgr_cd, use_cd);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = mdUsrMgrService.mainSelectList(trplC, clntNm, md_id, md_nm, mgr_cd, cgr_cd, use_cd, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_mdUser");
			if (records.size() > 0) {
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
			}

			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet()); //data
			platformData.addDataSet(page.getDsPageVo()); //paging
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/* 사업장 조회 팝업 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/searchTRPL")
	public void searchTRPL(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();

		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_codeData");
			List<Map<String, Object>> mapList = mdUsrMgrService.searchTRPL(searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}

	/* 가격할인 사용자 업데이트 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/updateMdUsr")
	public void updateMdUsr(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String user_id = requestHelper.getUserID();
		DataSet in_ds	= requestHelper.getDataSet("in_ds");

		try {
			mdUsrMgrService.updateMdUsr(in_ds, user_id);

			//객체 전송 
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/mob/downloadExcelMdUsrList")
	public void downloadExcelMdUsrList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String TRPL_C	= requestHelper.getParameter("TRPL_C");
		String CLNTNM	= requestHelper.getParameter("CLNTNM");
		String MD_ID	= requestHelper.getParameter("MD_ID");
		String MD_NM	= requestHelper.getParameter("MD_NM");
		String MGR_CD	= requestHelper.getParameter("MGR_CD");
		String CGR_CD	= requestHelper.getParameter("CGR_CD");
		String USE_CD	= requestHelper.getParameter("USE_CD");

		String fileName = "가격할인사용자.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			int totalCount = mdUsrMgrService.getMainCount(TRPL_C, CLNTNM, MD_ID, MD_NM, MGR_CD, CGR_CD, USE_CD);
			
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			String[] header = {
					"사업장코드",
					"사업장명",
					"구분",
					"개인번호",
					"이름",
					"핸드폰번호",
					"고유번호",
					"매장관리자",
					"매장책임자",
					"사용중지"
			};
			String[] keyIndex = {
					"NA_TRPL_C",
					"CLNTNM",
					"USR_TPC",
					"MD_ID",
					"USR_NM",
					"USR_MPNO",
					"MD_IMEI_NO",
					"MD_MNGR_CD",
					"MD_CHGR_CD",
					"MD_USE_CD"
			};
			
			AbstractModel model = new DefaultModel("가격할인사용자", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			mdUsrMgrService.downloadExcelMdUsrList(TRPL_C, CLNTNM, MD_ID, MD_NM, MGR_CD, CGR_CD, USE_CD, 1, totalCount, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}

}


