package com.nh.escm.pda.controller;

import java.io.File;
import java.io.IOException;
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
import com.nh.escm.pda.service.PdaInspectionService;
import com.nh.escm.pt.blbd.vo.BlbdVO;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class PdaInspectionController extends AbstractController {
	
	@Autowired
	private PdaInspectionService inspectionService;
	
	/**
	 * 화면ID : PDA_CN_002001
	 * 화면설명 : PDA 검수내역 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/InspectionList")
	public void pdaInspectionSearchList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String from_date = requestHelper.getParameter("FROM_DATE");
		String to_date = requestHelper.getParameter("TO_DATE");
		String na_slpno = requestHelper.getParameter("NA_SLPNO");
		String byng_ref_dsc = requestHelper.getParameter("BYNG_REF_DSC");
		String odr_dt = requestHelper.getParameter("ODR_DT");
		String tr_bass_no = requestHelper.getParameter("TR_BASS_NO");
		String cnr_sts_dsc = requestHelper.getParameter("CNR_STS_DSC");
		String cnr_fix_usr_id = requestHelper.getParameter("CNR_FIX_USR_ID");
		String na_bzplc = requestHelper.getParameter("NA_BZPLC");
		
		String glnCode = requestHelper.getGlnCode();
		
		try {
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			
			// Paging
			int totalCount = inspectionService.getMainCount(from_date, to_date, na_slpno, byng_ref_dsc, odr_dt, tr_bass_no, cnr_sts_dsc, cnr_fix_usr_id, glnCode, na_bzplc);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = inspectionService.mainSelectList(from_date, to_date, na_slpno, byng_ref_dsc, odr_dt, tr_bass_no, cnr_sts_dsc, cnr_fix_usr_id, glnCode, na_bzplc, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_dataTotal");
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
	 * 화면ID : PDA_CN_002002
	 * 화면설명 : PDA 검수내역 상세
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/InspectionDetail")
	public void pdaInspectionSearch(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String na_bzplc = requestHelper.getParameter("NA_BZPLC");
		String na_team_c = requestHelper.getParameter("NA_TEAM_C");
		String slp_dt = requestHelper.getParameter("SLP_DT");
		String na_slpno = requestHelper.getParameter("NA_SLPNO");
		
		try {			
			Map<String, Object> mstValueMap = inspectionService.selectMaster(na_bzplc, na_team_c, slp_dt, na_slpno);
			List<Map<String, Object>> dtlValueList = inspectionService.selectDetailList(na_bzplc, na_team_c, slp_dt, na_slpno);
			
			DataSetHelper ds_mst = new DataSetHelper("pda_mst");
			DataSetHelper ds_dtl = new DataSetHelper("pda_detail");
			DataSetHelper ds_img = new DataSetHelper("ds_img");

			// 마스터 정보
			ds_mst.addColumns(mstValueMap.keySet());
			ds_mst.setData(mstValueMap);
		
			// 상세 리스트
			if (dtlValueList.size() > 0) {
				ds_dtl.addColumns(dtlValueList.get(0).keySet());
				for (Map<String, Object> vo : dtlValueList) {
					ds_dtl.setData(vo);
				}		
			}
			
			// 서명 이미지
			String cnr_cmpl_sign_fn = MapUtils.getString(mstValueMap, "CNR_CMPL_SIGN_FN");
			if (cnr_cmpl_sign_fn != null && cnr_cmpl_sign_fn.length() > 0) {
				String path = Configurer.getProperty("file.pda.sign.image.path") 
						+ File.separator + slp_dt + File.separator + cnr_cmpl_sign_fn;
				
				if (logger.isDebugEnabled()) {
					logger.debug("cymd dir >> " + slp_dt);
					logger.debug("cnr_cmpl_sign_fn >> " + cnr_cmpl_sign_fn);
				}
				
				File f = new File(path);
				if ( f.exists() ) {
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
			platformData.addDataSet(ds_dtl.getDataSet()); //디테일 객체 전송
			platformData.addDataSet(ds_img.getDataSet()); //서명이미지파일
			
			sendData(response, platformData);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_002002
	 * 화면설명 : PDA 검수내역 상세 / 변경
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pda/UpdateDetail")
	public void pdaInspectionUpdate(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String user_id = requestHelper.getUserID();
		String gln = requestHelper.getGlnCode();
		
		DataSet pda_mst	= requestHelper.getDataSet("pda_mst");
		
		String na_bzplc = pda_mst.getString(0, "NA_BZPLC");
		String na_team_c = pda_mst.getString(0, "NA_TEAM_C");
		String slp_dt = pda_mst.getString(0, "SLP_DT");
		String na_slpno = pda_mst.getString(0, "NA_SLPNO");
		
		DataSet pda_detail	= requestHelper.getDataSet("pda_detail");
		String status = requestHelper.getParameter("status");

		try {
			inspectionService.updateDetail(na_bzplc, na_team_c, slp_dt, na_slpno, pda_detail, status, user_id, gln);
			
			//객체 전송 
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}


