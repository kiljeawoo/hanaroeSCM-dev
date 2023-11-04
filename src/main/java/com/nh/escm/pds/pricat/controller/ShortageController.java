package com.nh.escm.pds.pricat.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.LinkedHashMap;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.pricat.service.ShortageService;
import com.nh.escm.pds.pricat.vo.ProductNewGoodVO;
import com.nh.escm.pds.pricat.vo.ProductTrtPopup;
import com.nh.escm.pds.pricat.vo.ShortageUploadFileVO;

@RestController
public class ShortageController extends AbstractController {

	@Autowired
	private ShortageService shortageService;

	/*
	 * 화면ID : VAN_DS_SC_1570 화면설명 : 물류센터결품등록, 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/getShortageOrder")
	public void getShortageOrder(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
			String APL_DT = requestHelper.getParameter("APL_DT");
			String WRS_GUBUN = requestHelper.getParameter("WRS_GUBUN");
			String WRS_SEARCH = requestHelper.getParameter("WRS_SEARCH");
			String ODR_SLPNO = requestHelper.getParameter("ODR_SLPNO");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C,
					requestHelper);

			DataSetHelper dHelper = new DataSetHelper("ds_master");
			PlatformData out_PlatformData = new PlatformData();

			List<Map<String, Object>> list = shortageService.getShortageOrder(NA_BZPLC, APL_DT, TRPL_C_ARR, WRS_GUBUN, WRS_SEARCH, ODR_SLPNO);
			if (list != null && list.size() > 0) {
				dHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> map : list) {
					dHelper.setData(map);
				}
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/getWRSforShortageList")
	public void getWRSforShortageList(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String SPYPL_NA_TRPL_C = requestHelper.getParameter("SPYPL_NA_TRPL_C");
			String ODR_SLPNO = requestHelper.getParameter("ODR_SLPNO");
			String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
			String ODR_DT = requestHelper.getParameter("ODR_DT");

			DataSetHelper dHelper = new DataSetHelper("ds_master");
			PlatformData out_PlatformData = new PlatformData();

			List<Map<String, Object>> list = shortageService.getWRSforShortageList(SPYPL_NA_TRPL_C, ODR_SLPNO, NA_BZPLC, ODR_DT,requestHelper.getUserID());
			if (list != null && list.size() > 0) {
				dHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> map : list) {
					dHelper.setData(map);
				}
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1570 화면설명 : 물류센터결품내역 등록
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/insertShortageOrder")
	public void insertShortageOrder(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			if (StringUtils.isEmpty(TRPL_C)) {
				TRPL_C = requestHelper.getGlnCode();
			}

			PlatformData out_PlatformData = new PlatformData();
 
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMain = in_dsList.get("in_ds"); // 상품정보 및 2차상품 데이터

			List<ProductNewGoodVO> mainlist = ValueObjectSetUtil.dataSetToVO(
					dsMain, ProductNewGoodVO.class);

			shortageService.insertShortageOrder(dsMain, mainlist, requestHelper.getUserID(), requestHelper.getGlnCode());

			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1571 화면설명 : 결품등록내역 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/getShortageOrderPopup")
	public void getShortageOrderPopup(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String from_date = requestHelper.getParameter("from_date"); // 시작일
			String to_date = requestHelper.getParameter("to_date"); // 종료일
			String odr_slpno = requestHelper.getParameter("odr_slpno"); // 전표번호
			String rvopl_trpl_c = requestHelper.getParameter("rvopl_trpl_c");
			String odrpl_trpl_c = requestHelper.getParameter("odrpl_trpl_c");
			String apl_date = requestHelper.getParameter("apl_date");

			PlatformData out_PlatformData = new PlatformData();

			DataSetHelper dHelper = new DataSetHelper("DataSet");

			List<Map<String, Object>> list = shortageService.getShortageOrderPopup(
					TRPL_C, apl_date, from_date, to_date, odr_slpno,
					rvopl_trpl_c, odrpl_trpl_c);

			dHelper.addColumns(ProductNewGoodVO.class);
			for (Map<String, Object> map : list) {
				dHelper.setData(map);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1572 화면설명 : 물류상품정보조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/getWRSInfoForShortage")
	public void getWRSInfoForShortage(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String bzplc = requestHelper.getParameter("bzplc");
			String cbo_trt = requestHelper.getParameter("cbo_trt");
			String searchText = requestHelper.getParameter("searchText");

			DataSetHelper dHelper = new DataSetHelper("ds_pop_master");

			PlatformData out_PlatformData = new PlatformData();

			List<Map<String, Object>> list = shortageService.getWRSInfoForShortage(
					TRPL_C, bzplc, cbo_trt, searchText);

			dHelper.addColumns(ProductTrtPopup.class);
			for (Map<String, Object> map : list) {
				dHelper.setData(map);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1573 화면설명 : 발주번호 상품코드 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/getWRSCodeForShortageOrder")
	public void getWRSCodeForShortageOrder(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C,
					requestHelper);
			String isall = requestHelper.getParameter("isall");
			String rqr_dt_from = requestHelper.getParameter("rqr_dt_from");
			String rqr_dt_to = requestHelper.getParameter("rqr_dt_to");
			String odr_slpno = requestHelper.getParameter("odr_slpno");
			String odr_trpl_c = requestHelper.getParameter("odr_trpl_c");
			String rvopl_trpl_c = requestHelper.getParameter("rvopl_trpl_c");
			String wrs_c = requestHelper.getParameter("wrs_c");

			PlatformData out_PlatformData = new PlatformData();

			DataSetHelper dHelper = new DataSetHelper("DATASET");

			List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

			list = shortageService.getWRSCodeForShortageOrder(TRPL_C_ARR,	rqr_dt_from, rqr_dt_to, odr_slpno, odr_trpl_c, rvopl_trpl_c, wrs_c, isall,requestHelper.getUserID());
                                                                               // (TRPL_C_ARR, rqr_dt_from, rqr_dt_to, odr_slpno, odr_trpl_c, rvopl_trpl_c, wrs_c, isall, MBID);
			

			dHelper.addColumns(ProductNewGoodVO.class);
			for (Map<String, Object> map : list) {
				dHelper.setData(map);
			}

			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 물류센터결품내역
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/getShortageOrderMaseter")
	public void getShortageOrderMaseter(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C,
					requestHelper);
			String wrs_gubun = requestHelper.getParameter("wrs_gubun");
			String searchText = requestHelper.getParameter("searchText");
			String cal_apl_from = requestHelper.getParameter("cal_apl_from");
			String cal_apl_to = requestHelper.getParameter("cal_apl_to");
			String cbo_bzplc = requestHelper.getParameter("cbo_bzplc");
//			String rdo_gubun = requestHelper.getParameter("rdo_gubun");

			PlatformData out_PlatformData = new PlatformData();

			DataSetHelper dHelper = new DataSetHelper("ds_master_data");
			List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

			list = shortageService.getShortageOrderMaseter(TRPL_C_ARR, wrs_gubun,
					searchText, cal_apl_from, cal_apl_to, cbo_bzplc);

			dHelper.addColumns(ProductNewGoodVO.class);
			for (Map<String, Object> map : list) {
				dHelper.setData(map);
			}

			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 물류센터결품내역 detail
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/getShortageOrderDetail")
	public void getShortageOrderDetail(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
			String NA_SPYPL_C = requestHelper.getParameter("NA_SPYPL_C");
			String APL_DT = requestHelper.getParameter("APL_DT");
			String NA_WRS_C = requestHelper.getParameter("NA_WRS_C");
			String ODR_DT = requestHelper.getParameter("ODR_DT");
			String ODR_SLPNO = requestHelper.getParameter("ODR_SLPNO");
			String ODR_DSQNO = requestHelper.getParameter("ODR_DSQNO");

			PlatformData out_PlatformData = new PlatformData();

			DataSetHelper dHelper = new DataSetHelper("ds_detail_data");
			List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

			list = shortageService.getShortageOrderDetail(NA_BZPLC, NA_SPYPL_C, APL_DT, NA_WRS_C, ODR_DT, ODR_SLPNO, ODR_DSQNO);

			dHelper.addColumns(ProductNewGoodVO.class);
			for (Map<String, Object> map : list) {
				dHelper.setData(map);
			}

			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 물류센터결품내역 마스터 엑셀
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/downloadExcelShortageOrderMaster")
	public void downloadExcelShortageOrderMaster(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C,
					requestHelper);
			String wrs_gubun = requestHelper.getParameter("wrs_gubun");
			String searchText = requestHelper.getParameter("searchText");
			String cal_apl_from = requestHelper.getParameter("cal_apl_from");
			String cal_apl_to = requestHelper.getParameter("cal_apl_to");
			String cbo_bzplc = requestHelper.getParameter("cbo_bzplc");
			String rdo_gubun = requestHelper.getParameter("rdo_gubun");

			String fileName = "물류센터결품내역_Master.xls";
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush			

			String[] header = {"00 경제통합공급처코드",
					"01 적용일자",
					"02 경제통합상품코드",
					"03 경제통합사업장코드",
					"04 발주일자",
					"05 발주전표번호",
					"06 발주상세일련번호",
					"07 발주수량",
					"08 입고수량",
					"09 미입고수량",
					"10 최초등록일시",
					"11 최초등록자개인번호",
					"12 최초등록자경제통합사업장코드",
					"13 최종변경일시",
					"14 최종변경자개인번호",
					"15 최종변경자경제통합사업장코드",
					"16 삭제일시",
					"17 삭제자개인번호",
					"18 삭제자경제통합사업장코드",
					"19 경제통합코드신청번호",
					"20 경제통합코드신청상태코드",
					"21 연락처전화번호",
					"22 접수일시",
					"23 접수자개인번호",
					"24 접수자경제통합사업장코드",
					"25 처리일시",
					"26 처리자개인번호",
					"27 처리자경제통합사업장코드",
					"28 경제통합코드신청거절사유코드",
					"29 신청내용",
					"30 처리내용",
					"31 비고내용",
					"32 승인신청경제통합사업장코드",
					"33 미입고사유코드",
					"34 계통공급가능일자",
					"35 경제통합공급처코드",
					"36 경제통합사업장코드",
					"37 최초등록자경제통합사업장코드",
					"38 최종변경자경제통합사업장코드",
					"39 삭제자경제통합사업장코드",
					"40 접수자경제통합사업장코드",
					"41 처리자경제통합사업장코드",
					"42 승인신청경제통합사업장코드",
					"43 상품명",
					"44 경제통합코드신청상태코드",
					"45 경제통합코드신청거절사유코드",
					"46 미입고사유코드"};

			String[] keyIndex = { "NA_SPYPL_C", 
					"APL_DT",
					"NA_WRS_C",
					"NA_BZPLC",
					"ODR_DT",
					"ODR_SLPNO",
					"ODR_DSQNO",
					"ODR_QT",
					"STR_QT",
					"UN_STR_QT",
					"FSRG_DTM",
					"FSRGMN_ENO",
					"FSRGMN_NA_BZPLC",
					"LSCHG_DTM",
					"LS_CMENO",
					"LSCGMN_NA_BZPLC",
					"16 삭제일시",
					"17 삭제자개인번호",
					"18 삭제자경제통합사업장코드",
					"19 경제통합코드신청번호",
					"NA_C_RQ_STSC",
					"CTCPL_TELNO",
					"22 접수일시",
					"23 접수자개인번호",
					"24 접수자경제통합사업장코드",
					"25 처리일시",
					"26 처리자개인번호",
					"27 처리자경제통합사업장코드",
					"28 경제통합코드신청거절사유코드",
					"RQ_CNTN",
					"30 처리내용",
					"RMK_CNTN",
					"32 승인신청경제통합사업장코드",
					"UN_STR_RSNC",
					"ROTS_SPY_PSB_DT",
					"NA_SPYPL_C",
					"NA_WRS_C",
					"37 최초등록자경제통합사업장코드",
					"38 최종변경자경제통합사업장코드",
					"39 삭제자경제통합사업장코드",
					"40 접수자경제통합사업장코드",
					"41 처리자경제통합사업장코드",
					"42 승인신청경제통합사업장코드",
					"WRSNM",
					"44 경제통합코드신청상태코드",
					"45 경제통합코드신청거절사유코드",
					"UN_STR_RSNC"};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex,
					list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			shortageService.downloadExcelShortageOrderMaster(
					TRPL_C_ARR, wrs_gubun, searchText, cal_apl_from,
					cal_apl_to, cbo_bzplc, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "물류센터결품내역_Master");
			searchMap.put("상품조회구분", wrs_gubun);
			searchMap.put("상품조회명", searchText);
			searchMap.put("적용일자From", cal_apl_from);
			searchMap.put("적용일자To", cal_apl_to);
			searchMap.put("물류센터", cbo_bzplc);
			searchMap.put("참조구분", rdo_gubun);

			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 물류센터결품내역 디테일 엑셀
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/downloadExcelShortageOrderDetail")
	public void downloadExcelShortageOrderDetail(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
			String NA_SPYPL_C = requestHelper.getParameter("NA_SPYPL_C");
			String APL_DT = requestHelper.getParameter("APL_DT");
			String NA_WRS_C = requestHelper.getParameter("NA_WRS_C");
			String ODR_DT = requestHelper.getParameter("ODR_DT");
			String ODR_SLPNO = requestHelper.getParameter("ODR_SLPNO");
			String ODR_DSQNO = requestHelper.getParameter("ODR_DSQNO");

			String fileName = "물류센터결품내역_Detail.xls";
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"00 경제통합공급처코드",
					"01 적용일자",
					"02 경제통합상품코드",
					"03 경제통합사업장코드",
					"04 발주일자",
					"05 발주전표번호",
					"06 발주상세일련번호",
					"07 발주수량",
					"08 입고수량",
					"09 미입고수량",
					"10 최초등록일시",
					"11 최초등록자개인번호",
					"12 최초등록자경제통합사업장코드",
					"13 최종변경일시",
					"14 최종변경자개인번호",
					"15 최종변경자경제통합사업장코드",
					"16 삭제일시",
					"17 삭제자개인번호",
					"18 삭제자경제통합사업장코드",
					"19 경제통합코드신청번호",
					"20 경제통합코드신청상태코드",
					"21 연락처전화번호",
					"22 접수일시",
					"23 접수자개인번호",
					"24 접수자경제통합사업장코드",
					"25 처리일시",
					"26 처리자개인번호",
					"27 처리자경제통합사업장코드",
					"28 경제통합코드신청거절사유코드",
					"29 신청내용",
					"30 처리내용",
					"31 비고내용",
					"32 승인신청경제통합사업장코드",
					"33 미입고사유코드",
					"34 계통공급가능일자",
					"35 경제통합공급처코드",
					"36 경제통합사업장코드",
					"37 최초등록자경제통합사업장코드",
					"38 최종변경자경제통합사업장코드",
					"39 삭제자경제통합사업장코드",
					"40 접수자경제통합사업장코드",
					"41 처리자경제통합사업장코드",
					"42 승인신청경제통합사업장코드",
					"43 상품명",
					"44 경제통합코드신청상태코드",
					"45 경제통합코드신청거절사유코드",
					"46 미입고사유코드"};

			String[] keyIndex = {"NA_SPYPL_C", 
					"APL_DT",
					"NA_WRS_C",
					"NA_BZPLC",
					"ODR_DT",
					"ODR_SLPNO",
					"ODR_DSQNO",
					"ODR_QT",
					"STR_QT",
					"UN_STR_QT",
					"FSRG_DTM",
					"FSRGMN_ENO",
					"FSRGMN_NA_BZPLC",
					"LSCHG_DTM",
					"LS_CMENO",
					"LSCGMN_NA_BZPLC",
					"16 삭제일시",
					"17 삭제자개인번호",
					"18 삭제자경제통합사업장코드",
					"19 경제통합코드신청번호",
					"NA_C_RQ_STSC",
					"CTCPL_TELNO",
					"22 접수일시",
					"23 접수자개인번호",
					"24 접수자경제통합사업장코드",
					"25 처리일시",
					"26 처리자개인번호",
					"27 처리자경제통합사업장코드",
					"28 경제통합코드신청거절사유코드",
					"RQ_CNTN",
					"30 처리내용",
					"RMK_CNTN",
					"32 승인신청경제통합사업장코드",
					"UN_STR_RSNC",
					"ROTS_SPY_PSB_DT",
					"NA_SPYPL_C",
					"NA_WRS_C",
					"37 최초등록자경제통합사업장코드",
					"38 최종변경자경제통합사업장코드",
					"39 삭제자경제통합사업장코드",
					"40 접수자경제통합사업장코드",
					"41 처리자경제통합사업장코드",
					"42 승인신청경제통합사업장코드",
					"WRSNM",
					"44 경제통합코드신청상태코드",
					"45 경제통합코드신청거절사유코드",
					"UN_STR_RSNC"};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex,
					list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			shortageService.downloadExcelShortageOrderDetail(NA_BZPLC, NA_SPYPL_C, APL_DT, NA_WRS_C, ODR_DT, ODR_SLPNO, ODR_DSQNO, handler);

			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/getShortagedOrdersFile")
	public void getShortagedOrdersFile(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C,
					requestHelper);
			String ODRPL_NA_TRPL_C = requestHelper.getParameter("ODRPL_NA_TRPL_C");
			String ODR_DT = requestHelper.getParameter("ODR_DT");


			String fileName = "물류센터결품등록.xls";
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = {"00 일련번호",
					"01 경제통합사업장코드",
					"02 상품코드",
					"03 상품명",
					"04 거래처코드",
					"05 거래처명",
					"06 연락처전화번호",
					"07 신청내용",
					"08 발주일자",
					"09 발주전표번호",
					"10 발주전표일련번호",
					"11 발주수량",
					"12 발주금액",
					"13 입고수량",
					"14 미입고수량",
					"15 미입고 사유코드",
					"16 계통공급 가능일자"};

			String[] keyIndex = {"ROWNUM",
					"ODRPL_NA_TRPL_C",
					"NA_WRS_C",
					"WRSNM",
					"RVOPL_NA_TRPL_C",
					"RVOPL_NA_TRPL_NM",
					"CTCPL_TELNO",
					"RQ_CNTN",
					"ODR_DT",
					"ODR_SLPNO",
					"ODR_DSQNO",
					"ODR_QT",
					"ODR_AM",
					"STR_QT",
					"UN_STR_QT",
					"UN_STR_RSNC",
					"ROTS_SPY_PSB_DT"};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex,
					list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			shortageService.getShortagedOrdersFile(ODRPL_NA_TRPL_C, ODR_DT, TRPL_C_ARR,handler);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1595 화면설명 : 결품내역 일괄작성(EXCEL)_FileUpload
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/uploadShortageFile")
	public void uploadShortageFile(HttpServletRequest request,
			HttpServletResponse response) throws IOException {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper
				.newInstance(request);
//		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
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
			if (rows > 1000) {
				sendData(response, new PlatformData(), -1, "OVERROWCOUNT");
				return;
			}

			DataSetHelper dHelper = new DataSetHelper("ds_excel_bind");

			dHelper.addColumns(ShortageUploadFileVO.class);

			for (int rowindex = 1; rowindex < rows; rowindex++) {

				XSSFRow row = sheet.getRow(rowindex);
				if (row != null) {
					if(getCellValue(row.getCell(1)).length() != 13) {
						continue;
					}
					ShortageUploadFileVO tempvo = new ShortageUploadFileVO();
					
					tempvo.setA(getCellValue(row.getCell( 0))); // 
					tempvo.setB(getCellValue(row.getCell( 1))); // 
					tempvo.setC(getCellValue(row.getCell( 2))); // 
					tempvo.setD(getCellValue(row.getCell( 3))); // 
					tempvo.setE(getCellValue(row.getCell( 4))); // 
					tempvo.setF(getCellValue(row.getCell( 5))); // 
					tempvo.setG(getCellValue(row.getCell( 6))); // 
					tempvo.setH(getCellValue(row.getCell( 7))); // 
					tempvo.setI(getCellValue(row.getCell( 8))); // 
					tempvo.setJ(getCellValue(row.getCell( 9))); // 
					tempvo.setK(getCellValue(row.getCell(10))); // 
					tempvo.setL(getCellValue(row.getCell(11))); // 
					tempvo.setM(getCellValue(row.getCell(12))); // 
					tempvo.setN(getCellValue(row.getCell(13))); // 
					tempvo.setO(getCellValue(row.getCell(14))); // 
					tempvo.setP(getCellValue(row.getCell(15))); // 
					tempvo.setQ(getCellValue(row.getCell(16))); // 
					tempvo.setR(getCellValue(row.getCell(17))); // 18R 미입고사유
					
					dHelper.setData(tempvo);
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

	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/pricat/saveShortageFile")
	public void saveShortageFile(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet inds = requestHelper.getDataSet("in_ds");
		System.out.println(inds.saveXml());
		
//		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		//List<ShortageUploadFileVO> list = requestHelper.getValueObjects(ShortageUploadFileVO.class, "in_ds");
		
		//logger.debug("CNT="+list.size());
		PlatformData platformData = new PlatformData();
		
		try {
			String strToday = DateUtil.getCurrentDate("yyyyMMdd");
			String MBID = requestHelper.getUserID();
			String GLN = requestHelper.getGlnCode();
			int rcnt = inds.getRowCount();
			for(int i = 0; i < rcnt; i++) {
				ProductNewGoodVO vo = new ProductNewGoodVO();
				
				vo.setAPL_DT(strToday);
				vo.setWORK_DS("I");
				vo.setWUSRID(MBID);
				vo.setFSRGMN_ENO(MBID);
				vo.setLS_CMENO(MBID);
				vo.setWNA_BZPLC(GLN);
				vo.setWORK_DS("I");
				
				vo.setNA_BZPLC(inds.getString(i, "B"));
				vo.setNA_WRS_C(inds.getString(i, "C"));
				vo.setWRSNM(inds.getString(i, "D"));
				vo.setNA_SPYPL_C(inds.getString(i, "E"));
			
				vo.setCTCPL_TELNO(inds.getString(i, "G"));
				vo.setRQ_CNTN(inds.getString(i, "H"));
				vo.setODR_DT(inds.getString(i, "I"));
				vo.setODR_SLPNO(inds.getString(i, "J"));
				vo.setODR_DSQNO(inds.getString(i, "K"));
				vo.setODR_QT(inds.getString(i, "L"));
				vo.setODR_AM(inds.getString(i, "M"));
				vo.setSTR_QT(inds.getString(i, "N"));
				vo.setUN_STR_QT(inds.getString(i, "O"));
				vo.setUN_STR_RSNC(inds.getString(i, "P"));
				vo.setROTS_SPY_PSB_DT(inds.getString(i, "Q"));
				vo.setRMK_CNTN(inds.getString(i, "R"));
				
				shortageService.insertShortageOrder(vo);
			}	
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, "결품내역 등록중에 오류가 발생하였습니다. 관리자에 문의하십시오.");
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
			val = Double.toString(cell.getNumericCellValue());
			double dphi = cell.getNumericCellValue();
			// 소수점 세자리 절사용인듯
			/*
			 * if ((dphi - (int) dphi) * 1000 == 0) {
			 *	val = (int) dphi + "";
			 * }
			 */ 
			
			// 수정
			double truncatedVal = Math.floor(dphi*1000);
			Double dblTrancated = new Double(truncatedVal/1000);
			val = dblTrancated.toString();
			return val;
		case HSSFCell.CELL_TYPE_BOOLEAN:
			return Boolean.toString(cell.getBooleanCellValue());
		case HSSFCell.CELL_TYPE_FORMULA:
			return cell.getCellFormula();

		}
		return "";
	}

}
