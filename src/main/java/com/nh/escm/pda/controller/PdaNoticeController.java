package com.nh.escm.pda.controller;


import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pda.service.PdaNoticeService;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class PdaNoticeController extends AbstractController {
	
	@Autowired
	private PdaNoticeService pdaNoticeService;
	
	/**
	 * 화면ID : PDA_CN_006001
	 * 화면설명 : PDA 공지사항
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/PdaNoticeList")
	public void pdaNoticeList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String from_date = requestHelper.getParameter("FROM_DATE");
		String to_date = requestHelper.getParameter("TO_DATE");		
		
		try {
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			
			// Paging
			int totalCount = pdaNoticeService.getMainCount(from_date, to_date);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = pdaNoticeService.mainSelectList(from_date, to_date, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_dataTotal");
			if (records.size() > 0) {
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
			}
			
			//일렬번호 글등록시 MAX값 얻기 위해 사용
			Map<String, Object> maxsqno = pdaNoticeService.maxSqnoSelect();
			DataSetHelper maxsqnods = new DataSetHelper("ds_condition");
			maxsqnods.addColumns(maxsqno.keySet());
			maxsqnods.setData(maxsqno);
			
			// 객체 전송 
			PlatformData platformData = new PlatformData();			
			platformData.addDataSet(ds.getDataSet()); //data
			platformData.addDataSet(page.getDsPageVo()); //paging
			platformData.addDataSet(maxsqnods.getDataSet()); //maxsqno
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_006002
	 * 화면설명 : PDA 공지사항 상세보기
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/PdaNoticeDetail")
	public void pdaNotice(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String notice_sqno = requestHelper.getParameter("NOTICE_SQNO");
		
		try{
			Map<String, Object> mstValueMap = pdaNoticeService.selectDetailList(notice_sqno);
			
			DataSetHelper ds_mst = new DataSetHelper("pda_mst");
			
			// 마스터 정보
			ds_mst.addColumns(mstValueMap.keySet());
			ds_mst.setData(mstValueMap);
			
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds_mst.getDataSet()); //마스터 객체 전송
			
			sendData(response, platformData);
		}catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/deletepdaNotice")
	public void deletepdaNotice(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String notice_sqno = requestHelper.getParameter("NOTICE_SQNO");
			
			pdaNoticeService.deletepdaNotice(notice_sqno);
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/updatepdaNotice")
	public void updatepdaNotice(HttpServletRequest request, HttpServletResponse response) {
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String notice_sqno = requestHelper.getParameter("NOTICE_SQNO");
			DataSet pda_mst = requestHelper.getDataSet("pda_mst");
			
			pdaNoticeService.updatepdaNotice(notice_sqno,pda_mst);
			sendData(response, new PlatformData());
		}catch(AppetizerException e){
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}
	
	/**
	 * 화면ID : PDA_CN_006003
	 * 화면설명 : PDA 공지사항 등록
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/insertpdaNotice")
	public void insertpdaNotice(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String	notice_sqno       = requestHelper.getParameter("NOTICE_MAX_SQNO");
		String	notice_st_dtm	  = requestHelper.getParameter("NOTICE_ST_DTM");
		String	notice_ed_dtm	  = requestHelper.getParameter("NOTICE_ED_DTM");
		String	notice_subject	  = requestHelper.getParameter("NOTICE_SUBJECT");
		String	notice_cntn		  = requestHelper.getParameter("NOTICE_CNTN");
		String	push_use_yn		  = requestHelper.getParameter("PUSH_USE_YN");
		String	push_prc_st		  = requestHelper.getParameter("PUSH_PRC_ST");
		String	push_send_dtm	  = requestHelper.getParameter("PUSH_SEND_DTM");
		String	push_send_result  = requestHelper.getParameter("PUSH_SEND_RESULT");
		String	fs_rgm		      = requestHelper.getParameter("FS_RGM");
		String	fsrg_dtm	      = requestHelper.getParameter("FSRG_DTM");
		String	ls_chgm	      	  = requestHelper.getParameter("LS_CHGM");
		String	lschg_dtm	      = requestHelper.getParameter("LSCHG_DTM");
		
		try{
		pdaNoticeService.insertpdaNotice(notice_sqno,notice_st_dtm,notice_ed_dtm,notice_subject,notice_cntn,push_use_yn,
				push_prc_st,push_send_dtm,push_send_result,fs_rgm,fsrg_dtm,ls_chgm,lschg_dtm);

		sendData(response, new PlatformData());
		
		}catch (AppetizerException e){
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}

	}
}