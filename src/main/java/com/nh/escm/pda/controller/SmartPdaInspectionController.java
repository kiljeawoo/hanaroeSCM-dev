package com.nh.escm.pda.controller;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.io.FileUtils;
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
import com.nh.escm.pda.service.SmartPdaInspectionService;
import com.nh.escm.pt.blbd.vo.BlbdVO;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class SmartPdaInspectionController extends AbstractController {
	
	@Autowired
	private SmartPdaInspectionService smartInspectionService;
	
	/**
	 * 화면ID : PDA_CN_005001
	 * 화면설명 : PDA 검수상품사진조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/InspectionProd")
	public void pdaInspectionSearchList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String from_date = requestHelper.getParameter("FROM_DATE");
		String to_date = requestHelper.getParameter("TO_DATE");
		String center_code = requestHelper.getParameter("BUYPL_NA_TRPL_C");
		String na_bzplc = requestHelper.getParameter("NA_BZPLC");
		
		try {
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			
			// Paging
			int totalCount = smartInspectionService.getMainCount(from_date,to_date, center_code, na_bzplc);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = smartInspectionService.mainSelectList(from_date, to_date, center_code, na_bzplc, start, end);
			DataSetHelper ds = new DataSetHelper("ds_dataIns");
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
	
	/**
	 * 화면ID : PDA_CN_005002
	 * 화면설명 : PDA 검수상품사진조회 상세
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/InspectionPhotoDetail")
	public void pdaInspectionSearch(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String na_bzplc = requestHelper.getParameter("NA_BZPLC");
		String na_team_c = requestHelper.getParameter("NA_TEAM_C");
		String dvy_dt = requestHelper.getParameter("DVY_PLA_DT");
		String na_wrsc = requestHelper.getParameter("NA_WRS_C");
		String center_code = requestHelper.getParameter("BUYPL_NA_TRPL_C");
		
		try {
			Map<String, Object> mstValueMap = smartInspectionService.selectMaster(na_bzplc, na_team_c, dvy_dt, na_wrsc,center_code);
			
			DataSetHelper ds_mst = new DataSetHelper("pda_mst");
			DataSetHelper ds_img = new DataSetHelper("ds_img");

			// 마스터 정보
			ds_mst.addColumns(mstValueMap.keySet());
			ds_mst.setData(mstValueMap);
		
			
			// 서명 이미지
			String img_view = MapUtils.getString(mstValueMap, "WRS_IMG_NM_01");
			if (img_view != null && img_view.length() > 0) {
				String path = Configurer.getProperty("file.spda.image.file.path")
						+ File.separator + dvy_dt + File.separator + na_bzplc + File.separator + img_view;
				
				if (logger.isDebugEnabled()) {
					logger.debug("cymd dir >> " + dvy_dt);
					logger.debug("WRS_IMG_NM_01 >> " + img_view);
				}

				File file = new File(path);
				if ( file.exists() ) {
					byte[] picture = FileUtil.readToByte(path);
					
					BlbdVO vo = new BlbdVO();
					vo.setPICTURE(picture);
					
					ds_img.addColumns(BlbdVO.class);
					ds_img.setData(vo);
				}
			}
			
			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds_mst.getDataSet()); //마스터 객체 전송
			platformData.addDataSet(ds_img.getDataSet()); //서명이미지파일
			
			sendData(response, platformData);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	//이미지다운로드
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/InspectionPhotoDownload")
	public void InspectionPhotoDownload(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String filename = requestHelper.getParameter("WRS_IMG_NM_01");
		String dvy_dt = requestHelper.getParameter("DVY_PLA_DT");
		String na_bzplc = requestHelper.getParameter("NA_BZPLC");
		
		String realPath = Configurer.getProperty("file.spda.image.file.path");
		File dir = new File(realPath);
		
		File downloadFile = new File(dir.getAbsolutePath() + File.separator + dvy_dt + File.separator + na_bzplc + File.separator + filename);
		
		logger.info("FileDown(post) Location= "+ downloadFile.getAbsolutePath());
		
		response.setContentType(request.getContentType());
		response.setContentLength((int) downloadFile.length());
		response.setHeader("Content-Disposition", "attachment; filename=\"" + filename + "\";");
		response.setHeader("Content-Transfer-Encoding", "binary");
		response.setHeader("Set-Cookie", "fileDownload=true; path=/");
		
		OutputStream out = null;
		try {
			out = response.getOutputStream();
			FileUtils.copyFile(downloadFile, out);
		} catch (Exception e) {
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
