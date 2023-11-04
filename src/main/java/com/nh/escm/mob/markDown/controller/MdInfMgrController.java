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
import com.nh.escm.mob.markDown.service.MdInfMgrService;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class MdInfMgrController extends AbstractController {
	
	@Autowired
	private MdInfMgrService mdInfMgrService;
	
	/**
	 * 화면ID : MOB_MD_SC_1112
	 * 화면설명 : 가격할인 이력정보 조회
	 */

	/* 가격할인 이력정보 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/retrieveMdInfList")
	public void retrieveMdInfList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String trplC	= requestHelper.getParameter("TRPL_C");
		String clntNm	= requestHelper.getParameter("CLNTNM");
		String chId_cd	= requestHelper.getParameter("CHID_CD");
		String md_id	= requestHelper.getParameter("MD_ID");
		String chNm_cd	= requestHelper.getParameter("CHNM_CD");
		String md_nm	= requestHelper.getParameter("MD_NM");
		String wrs_cd	= requestHelper.getParameter("WRS_CD");
		String wrs_nm	= requestHelper.getParameter("WRS_NM");
		String fm_rate	= requestHelper.getParameter("FM_RATE");
		String to_rate	= requestHelper.getParameter("TO_RATE");
		String fm_pcnt	= requestHelper.getParameter("FM_PCNT");
		String to_pcnt	= requestHelper.getParameter("TO_PCNT");
		String from_dt	= requestHelper.getParameter("FROM_DT");
		String to_dt	= requestHelper.getParameter("TO_DT");
		String stat_cd	= requestHelper.getParameter("STAT_CD");

		try {
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");

			// Paging
			int totalCount = mdInfMgrService.getMainCount(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = mdInfMgrService.mainSelectList(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_mdInf");
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

	/* 상품 조회 팝업 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/searchWRS")
	public void searchWRS(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();

		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_codeData");
			List<Map<String, Object>> mapList = mdInfMgrService.searchWRS(searchType, searchText);

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

	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/mob/downloadExcelMdInfList")
	public void downloadExcelMdInfList(HttpServletRequest request, HttpServletResponse response)
	{
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String trplC	= requestHelper.getParameter("TRPL_C");
		String clntNm	= requestHelper.getParameter("CLNTNM");
		String chId_cd	= requestHelper.getParameter("CHID_CD");
		String md_id	= requestHelper.getParameter("MD_ID");
		String chNm_cd	= requestHelper.getParameter("CHNM_CD");
		String md_nm	= requestHelper.getParameter("MD_NM");
		String wrs_cd	= requestHelper.getParameter("WRS_CD");
		String wrs_nm	= requestHelper.getParameter("WRS_NM");
		String fm_rate	= requestHelper.getParameter("FM_RATE");
		String to_rate	= requestHelper.getParameter("TO_RATE");
		String fm_pcnt	= requestHelper.getParameter("FM_PCNT");
		String to_pcnt	= requestHelper.getParameter("TO_PCNT");
		String from_dt	= requestHelper.getParameter("FROM_DT");
		String to_dt	= requestHelper.getParameter("TO_DT");
		String stat_cd	= requestHelper.getParameter("STAT_CD");

		String fileName = "가격할인이력정보.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			int totalCount = mdInfMgrService.getMainCount(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd);
			List<Map<String,Object>> records = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			//List<Map<String, Object>> records = mdInfMgrService.mainSelectList(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd, 1, totalCount);
			String[] header = {
					"등록시간",
					"사업장명",
					"담당자",
					"상품코드",
					"상품명",
					"판매가",
					"할인가",
					"할인율",
					"할인사유",
				//	"진행상태",
				//	"책임자",
				//	"결재시간",
				//	"거절사유",
					"출력매수"
			};
			String[] keyIndex = {
					"MD_RGST_TM",
					"CLNTNM",
					"USR_NM",
					"MD_WRS_C",
					"MD_WRS_ABR_NM",
					"MD_SL_UPR",
					"MD_PRICE",
					"MD_RATE",
					"MD_RSN_CD",
				//	"MD_STAT_CD",
				//	"CHGR_NM",
				//	"MD_APPR_TM",
				//	"MD_RJT_CD",
					"MD_PRNT_CNT"
			};
			
			AbstractModel model = new DefaultModel("가격할인이력정보", header, keyIndex, records);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			mdInfMgrService.downloadExcelMdInfList(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd, 1, totalCount, handler);
			
			handler.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendResponse(response, e.getMessage());
		}
	}

}


