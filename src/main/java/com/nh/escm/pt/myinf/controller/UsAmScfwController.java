package com.nh.escm.pt.myinf.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.LinkedHashMap;
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
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.myinf.service.UsAmScfwService;
import com.nh.escm.pt.myinf.vo.SQLMapNames.UsAmScfwBasicNames;
import com.nh.escm.pt.myinf.vo.SQLMapNames.UsAmScfwListNames;
import com.nh.escm.pt.myinf.vo.SQLMapNames.UsOverAm;

@Controller
public class UsAmScfwController extends AbstractController {
	
	@Autowired
	private UsAmScfwService usAmScfwService;
	
	/**
	 * 이용료명세서 조회
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/myinf/retrieveUsAmScfw")
	public void retrieveUsAmScfw(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String MOBILE = requestHelper.getParameter("mobile");
		logger.debug("getMbcoType   = >> " + requestHelper.getMbcoType());
		
		try {
			Map<String, Object> usAmScfw = usAmScfwService.retrieveUsAmScfw(requestHelper.getGlnCode(), MOBILE);
			
			if (usAmScfw == null) {
				sendData(response, new PlatformData(), -2, "해당 거래처코드에 빌링권한을 가지고 있는 회원이 존재하지 않습니다.");
			} else {
				DataSetHelper dsHelper1 = new DataSetHelper("ds_basic");
				dsHelper1.addColumns(UsAmScfwBasicNames.class);
				dsHelper1.setData(usAmScfw);
				
				List<Map<String, Object>> usAmScfwList = usAmScfwService.retrieveUsAmScfwList(requestHelper.getGlnCode(),MOBILE);
				
				DataSetHelper dsHelper2 = new DataSetHelper("ds_result");
				dsHelper2.addColumns(UsAmScfwListNames.class);
				for (Map<String, Object> data : usAmScfwList) {
					dsHelper2.setData(data);
				}
				
				Map<String, Object> usOverAm = usAmScfwService.retrieveUsOverAm(requestHelper.getGlnCode());
				DataSetHelper dsHelper3 = new DataSetHelper("ds_overcash");
				dsHelper3.addColumns(UsOverAm.class);
				dsHelper3.setData(usOverAm);
				
				PlatformData platformData = new PlatformData();
				platformData.addDataSet(dsHelper1.getDataSet());
				platformData.addDataSet(dsHelper2.getDataSet());
				platformData.addDataSet(dsHelper3.getDataSet());
				sendData(response, platformData);
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}
	
	/**
	 * 이용료명세서 엑셀다운
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/downloadExcelUsAmScfw")
	public void downloadExcelUsAmScfw(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String edt_CLNTNM = request.getParameter("edt_CLNTNM"); // 사업장명
		String edt_NA_TRPL_C = request.getParameter("edt_NA_TRPL_C"); // 거래처코드
		String edt_USR_NM = request.getParameter("edt_USR_NM"); // 빌링담당자
		String edt_USR_MPNO = request.getParameter("edt_USR_MPNO"); // 담당자전화번호
		String edt_ZIPCODE = request.getParameter("edt_ZIPCODE"); // 회사주소 우편번호
		String edt_ADDRESS = request.getParameter("edt_ADDRESS"); // 회사주소 상세
		
		logger.debug("edt_ZIPCODE   = >>  " + edt_ZIPCODE);
		
		if (StringUtils.isNotEmpty(edt_CLNTNM)) {
			try {
				edt_CLNTNM = URLDecoder.decode(edt_CLNTNM, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		if (StringUtils.isNotEmpty(edt_USR_NM)) {
			try {
				edt_USR_NM = URLDecoder.decode(edt_USR_NM, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		if (StringUtils.isNotEmpty(edt_ZIPCODE)) {
			try {
				edt_ZIPCODE = URLDecoder.decode(edt_ZIPCODE, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		if (StringUtils.isNotEmpty(edt_ADDRESS)) {
			try {
				edt_ADDRESS = URLDecoder.decode(edt_ADDRESS, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		String fileName = request.getParameter("fileName"); // 파일명
		logger.debug("  fileName  = >>" + fileName);
		
		try {
			List<Map<String,Object>> usAmScfwList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = { "청구월", "납부마감일", "확정여부", "청구금액", "납부금액", "미납금액" };
			String[] keyIndex = { "RMS_MM", "CLOSING_DT", "CONFIRM_YN", "LS_RQS_AM", "PAY_AM", "RQS_BAC" };
			AbstractModel model = new DefaultModel("이용료명세서", header, keyIndex, usAmScfwList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			usAmScfwService.insertUsAmScfwListForExcel(requestHelper.getGlnCode());
			usAmScfwService.retrieveUsAmScfwListForExcel(requestHelper.getGlnCode(), handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "이용료명세서");
			searchMap.put("사업장명", edt_CLNTNM);
			searchMap.put("거래처코드", edt_NA_TRPL_C);
			searchMap.put("빌링담당자", edt_USR_NM);
			searchMap.put("담당자전화번호", edt_USR_MPNO);
			searchMap.put("회사주소 우편번호", edt_ZIPCODE);
			searchMap.put("회사주소 상세", edt_ADDRESS);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
			usAmScfwService.deleteUsAmScfwListForExcel(requestHelper.getGlnCode());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
}
