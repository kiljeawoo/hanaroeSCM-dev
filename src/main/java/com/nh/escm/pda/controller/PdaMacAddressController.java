package com.nh.escm.pda.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pda.service.PdaMacAddressService;
import com.nh.escm.util.PageHelper;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
@Controller
public class PdaMacAddressController extends AbstractController {
	
	@Autowired
	private PdaMacAddressService pdaService;
	
	/**
	 * 화면ID : PDA_CN_003001
	 * 화면설명 : PDA 단말기관리 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/macAddressList")
	public void retrieveMacAddressList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_bzplc = requestHelper.getParameter("na_bzplc");
			String na_trmno = requestHelper.getParameter("na_trmno");
			String mac_addr = requestHelper.getParameter("mac_addr");
			
			String userType = requestHelper.getUserType(); //99(관리자)
			String glnCode = requestHelper.getGlnCode();
			
			DataSet ds_page = requestHelper.getDataSet("ds_pageVO");
			
			// Paging
			int totalCount = pdaService.getMacAddrCount(na_bzplc, na_trmno, mac_addr, userType, glnCode);
			
			PageHelper page = PageHelper.newInstance(ds_page, totalCount);
			int start = page.getStart();
			int end = page.getEnd();
			
			List<Map<String, Object>> records = pdaService.selectMacAddrList(na_bzplc, na_trmno, mac_addr, userType, glnCode, start, end);
			
			DataSetHelper ds = new DataSetHelper("ds_data");
			if (records.size() > 0) {
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
			}
			
			// 객체 전송
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet());
			platformData.addDataSet(page.getDsPageVo()); //paging
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_003002
	 * 화면설명 : PDA 단말기관리 상세
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/macAddressDetail")
	public void retrieveMacAddressDetail(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_bzplc = requestHelper.getParameter("na_bzplc");
			String na_trmno = requestHelper.getParameter("na_trmno");
			
			Map<String, Object> valueMap = pdaService.selectMacAddress(na_bzplc, na_trmno);
			
			DataSetHelper ds = new DataSetHelper("ds_data");
			ds.addColumns(valueMap.keySet());
			ds.setData(valueMap);
			
			// 객체 전송
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_003002
	 * 화면설명 : PDA 단말기관리 등록 / 중복체크
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/checkMacAddress")
	public void checkMacAddress(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_bzplc = requestHelper.getParameter("na_bzplc");
			String mac_addr = requestHelper.getParameter("mac_addr");
			
			List<Map<String, Object>> records = pdaService.selectMacAddrList(na_bzplc, "", mac_addr, "99", "", -1, -1);
			
			DataSetHelper ds = new DataSetHelper("ds_ins");
			if (records.size() > 0) {
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
			}
			
			// 객체 전송
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_003002
	 * 화면설명 : PDA 단말기관리 등록 / 사업장정보
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/searchBZPLC")
	public void searchBZPLC(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String searchType = requestHelper.getParameter("searchType");
			String searchText = requestHelper.getParameter("searchText");
			
			List<Map<String, Object>> records = pdaService.searchBZPLC(searchType, searchText);
			
			DataSetHelper ds = new DataSetHelper("ds_codeData");
			if (records.size() > 0) {
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
			}
			
			// 객체 전송
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_003002
	 * 화면설명 : PDA 단말기관리 등록
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/insertMacAddress")
	public void insertMacAddress(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_bzplc = requestHelper.getParameter("na_bzplc"); //경제통합사업장코드
			String na_trmno = requestHelper.getParameter("na_trmno"); //경제통합단말기번호
			String mac_addr = requestHelper.getParameter("mac_addr"); //맥어드레스
			String userId = requestHelper.getUserID(); //사용자ID
			String rmk_cntn = requestHelper.getParameter("rmk_cntn"); //비고내용
			
			pdaService.insertMacAddress(na_bzplc, na_trmno, mac_addr, userId, rmk_cntn);
			
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 화면ID : PDA_CN_003002
	 * 화면설명 : PDA 단말기관리 삭제
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pda/deleteMacAddress")
	public void deleteMacAddress(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_bzplc = requestHelper.getParameter("na_bzplc");
			String na_trmno = requestHelper.getParameter("na_trmno");
			
			pdaService.deleteMacAddress(na_bzplc, na_trmno);
			
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

}
