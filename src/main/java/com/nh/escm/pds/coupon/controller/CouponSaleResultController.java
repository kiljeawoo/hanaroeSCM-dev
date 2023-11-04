package com.nh.escm.pds.coupon.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.pds.coupon.helper.CouponValidator;
import com.nh.escm.pds.coupon.service.CouponSaleResultService;
import com.nh.escm.pds.coupon.vo.TB_DE_CPN_UPLOAD;

@RestController
public class CouponSaleResultController extends AbstractController {
	Logger logger = LoggerUtil.getServerLogger(this.getClass());

	@Autowired
	private CouponSaleResultService couponSaleResultService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/getCouponSaleResultList")
	public void getCouponSaleResultList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String START_DT = requestHelper.getParameter("START_DT");
		String END_DT = requestHelper.getParameter("END_DT");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		
		PlatformData platformData = new PlatformData();
		
		try {
			CouponValidator.saleResultValidate(START_DT, END_DT, CPN_KDC);
			List<Map<String, Object>> list =  couponSaleResultService.getCouponSaleResultList(START_DT, END_DT, CPN_KDC);
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}

	/**
	 * 쿠폰실적 조회 출력
	 * @param request
	 * @param response
	 * @param TRPL_C_TEXT
	 * @param START_DT
	 * @param END_DT
	 * @param CPN_KDC
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/coupon/getCouponSaleResultList")
	public RestResult getCouponSaleResultListOz(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String START_DT, String END_DT, String CPN_KDC) {
		
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			CouponValidator.saleResultValidate(START_DT, END_DT, CPN_KDC);
			List<List<?>> ozReport = new ArrayList<List<?>>();

			//타이틀
			List<Map<String,Object>> ozTitle = new ArrayList<Map<String,Object>>();
			Map<String,Object> titleItem = new HashMap<String, Object>();
			titleItem.put("top1", sName);
			titleItem.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			titleItem.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			titleItem.put("search", TRPL_C_TEXT);
			ozTitle.add(titleItem);
			ozReport.add(ozTitle);

			/**
			 * 사업장코드 NA_BZPLC(Key)
			 * 사업장명   TRPL_ABR_NM
			 * 쿠폰구분   CPN_KDC
			 */
			List<Map<String, Object>> list =  couponSaleResultService.getCouponSaleResultList(START_DT, END_DT, CPN_KDC);
			ozReport.add(list);
			/**
			 *  사업장코드,	NA_BZPLC(Key),
				쿠폰코드,	NA_CPN_C,
				쿠폰명,	CPN_WRSNM,
				상품코드,	NA_WRS_C,
				상품명,	WRS_ABR_NM,
				쿠폰수량,	DC_CPN_QT,
				할인금액	CPN_DC_AM
			 */
			List<Map<String, Object>> detailList =  couponSaleResultService.getCouponSaleResultDetailList("all", START_DT, END_DT, CPN_KDC);
			ozReport.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (list != null? list.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/coupon/getCouponSaleResultList")
	public void getCouponSaleResultListExcel(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("getCouponSaleResultListExcel====================>");
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String START_DT = requestHelper.getParameter("START_DT");
		String END_DT = requestHelper.getParameter("END_DT");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		String fileName = "할인쿠폰실적.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try {
			CouponValidator.saleResultValidate("all", START_DT, END_DT, CPN_KDC);
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = {
					"거래처코드",
					"거래처명",
					"쿠폰발생구분",
					"쿠폰코드",
					"쿠폰명",
					"상품코드",
					"상품명",
					"쿠폰수량",
					"할인금액"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"TRPL_ABR_NM",
					"CPN_KDC",
					"NA_CPN_C",
					"CPN_WRSNM",
					"NA_WRS_C",
					"WRS_ABR_NM",
					"DC_CPN_QT",
					"CPN_DC_AM"
				};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			couponSaleResultService.getCouponSaleResultListExcel("all", START_DT, END_DT, CPN_KDC, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회시작일자", START_DT);
			searchMap.put("조회종료일자", END_DT);
			searchMap.put("발생구분", CPN_KDC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/getCouponSaleResultDetailList")
	public void getCouponSaleResultDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String START_DT = requestHelper.getParameter("START_DT");
		String END_DT = requestHelper.getParameter("END_DT");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		
		PlatformData platformData = new PlatformData();
		
		try {
			CouponValidator.saleResultValidate(NA_BZPLC, START_DT, END_DT, CPN_KDC);
			List<Map<String, Object>> list =  couponSaleResultService.getCouponSaleResultDetailList(NA_BZPLC, START_DT, END_DT, CPN_KDC);
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/coupon/getCouponSaleResultDetailList")
	public void getCouponSaleResultDetailListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String START_DT = requestHelper.getParameter("START_DT");
		String END_DT = requestHelper.getParameter("END_DT");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		String fileName = "할인쿠폰실적상세.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try {
			CouponValidator.saleResultValidate(NA_BZPLC, START_DT, END_DT, CPN_KDC);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"거래처코드",
					"거래처명",
					"쿠폰발생구분",
					"쿠폰코드",
					"쿠폰명",
					"상품코드",
					"상품명",
					"쿠폰수량",
					"할인금액"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"TRPL_ABR_NM",
					"CPN_KDC",
					"NA_CPN_C",
					"CPN_WRSNM",
					"NA_WRS_C",
					"WRS_ABR_NM",
					"DC_CPN_QT",
					"CPN_DC_AM"
				};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			couponSaleResultService.getCouponSaleResultListExcel(NA_BZPLC, START_DT, END_DT, CPN_KDC, handler);

			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회시작일자", START_DT);
			searchMap.put("조회종료일자", END_DT);
			searchMap.put("발생구분", CPN_KDC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/**
	 * 쿠폰거래사무소조회
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/getCouponBizPlcList")
	public void getCouponBizPlcList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String START_DT = requestHelper.getParameter("START_DT");
		String END_DT = requestHelper.getParameter("END_DT");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		
		PlatformData platformData = new PlatformData();
		
		try {
			CouponValidator.saleResultValidate(NA_BZPLC, START_DT, END_DT, CPN_KDC);
			List<Map<String, Object>> list =  couponSaleResultService.getCouponBizPlcList(NA_BZPLC, START_DT, END_DT, CPN_KDC);;
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/**
	 * 쿠폰거래사무소 조회
	 * @param request
	 * @param response
	 * @param TRPL_C_TEXT
	 * @param NA_BZPLC
	 * @param START_DT
	 * @param END_DT
	 * @param CPN_KDC
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/coupon/getCouponBizPlcList")
	public RestResult getCouponBizPlcListOz(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String NA_BZPLC, String START_DT, String END_DT, String CPN_KDC) {
		
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			CouponValidator.saleResultValidate(NA_BZPLC, START_DT, END_DT, CPN_KDC);
			
			List<List<?>> ozReport = new ArrayList<List<?>>();

			//타이틀
			List<Map<String,Object>> ozTitle = new ArrayList<Map<String,Object>>();
			Map<String,Object> titleItem = new HashMap<String, Object>();
			titleItem.put("top1", sName);
			titleItem.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			titleItem.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			titleItem.put("search", TRPL_C_TEXT);
			ozTitle.add(titleItem);
			ozReport.add(ozTitle);
			/**
			 *  사업장코드	NA_BZPLC
				사업장	TRPL_ABR_NM
				사업자번호	BIZ_NUMBER
				대표자명	REPMNM
				전화번호	TEL_NO
				우편번호	NO_ZIP
				기본주소	DONGUP
				상세주소	DONGBW
				쿠폰건수	NA_CPN_C_CNT
				상품건수	NA_WRS_C_CNT
			 */
			List<Map<String, Object>> list =  couponSaleResultService.getCouponBizPlcList(NA_BZPLC, START_DT, END_DT, CPN_KDC);;
			ozReport.add(list);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (list != null? list.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/uploadSaleResult")
	public void uploadSaleResult(HttpServletRequest request, HttpServletResponse response) {
		int colCnt = 15;
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String systemFileName = requestHelper.getParameter("systemFileName");
		
		File tempPath = FileUtils.getFile(Configurer.getProperty("file.temp.path"));
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			if(StringUtils.isEmpty(systemFileName)) {
				 throw new ValidationException("잘못된 첨부파일 오류, 첨부파일 이름이 없습니다.");
			}
			
			 File couponFile = FileUtils.getFile(tempPath, systemFileName);
			 if(!couponFile.exists()) {
				 throw new ValidationException("첨부파일이 서버에 Upload 되지 않았습니다.관리자에 확인바랍니다.");
			 }
			 
			List<String> couponItemList =  FileUtils.readLines(couponFile, "EUC-KR");

			DataSetHelper resultDSHelper = new DataSetHelper("DATASET");
			resultDSHelper.addColumns(TB_DE_CPN_UPLOAD.class);

			for(String couponItem : couponItemList) {
				if(StringUtils.isNotEmpty(couponItem)) {
					String[] items = StringUtils.split(couponItem,"\t");
					if(items.length == colCnt) {
						TB_DE_CPN_UPLOAD vo = new TB_DE_CPN_UPLOAD();
						vo.setNA_BZPLC(StringUtils.trim(items[0]));
						vo.setADJ_YM(StringUtils.trim(items[1]));
						vo.setADJPL_NA_TRPL_C(StringUtils.trim(items[2]));
						vo.setOCU_DSC(StringUtils.trim(items[3]));
						vo.setAPL_DT(StringUtils.trim(items[4]));
						vo.setNA_CPN_C(StringUtils.trim(items[5]));
						vo.setCPN_PBC_NA_TRPL_C(StringUtils.trim(items[6]));
						vo.setCPNNM(StringUtils.trim(items[7]));
						vo.setCPN_UPR(NumberUtils.toLong(StringUtils.trim(items[8])));
						vo.setCPN_QT(NumberUtils.toLong(StringUtils.trim(items[9])));
						vo.setCPN_AM(NumberUtils.toLong(StringUtils.trim(items[10])));
						vo.setCPN_FEE(NumberUtils.toLong(StringUtils.trim(items[11])));
						vo.setCPN_FEE_VAT(NumberUtils.toLong(StringUtils.trim(items[12])));
						vo.setDIV_CPN_FEE(NumberUtils.toLong(StringUtils.trim(items[13])));
						vo.setDIV_CPN_FEE_VAT(NumberUtils.toLong(StringUtils.trim(items[14])));
						resultDSHelper.setData(vo);
					}
				}
			}
			platformData.addDataSet(resultDSHelper.getDataSet());
			//logger.debug(platformData.saveXml());
		    sendData(response, platformData);
		} catch (AppetizerException | IOException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/saveSaleResult")
	public void saveSaleResult(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		int CPN_SC = NumberUtils.toInt(requestHelper.getParameter("CPN_SC"));
		String ED_MRK_YN = requestHelper.getParameter("ED_MRK_YN");
		List<TB_DE_CPN_UPLOAD> list = requestHelper.getValueObjects(TB_DE_CPN_UPLOAD.class, "in_ds");
		
		//logger.debug("CNT="+list.size());
		PlatformData platformData = new PlatformData();
		
		try {
			couponSaleResultService.saveSaleResult(CPN_SC, ED_MRK_YN, list);
			if(list.size() > 0) {
				TB_DE_CPN_UPLOAD cpnVO = list.get(0);
				try {
					boolean checked =sentCheckService.checkCouponSaleResult(cpnVO.getADJ_YM(), cpnVO.getADJPL_NA_TRPL_C(), CPN_SC);
					if(checked)
						sendData(response, platformData);
				} catch (NHSentErrorException e) {
					String eb = e.getMessage();
					sendData(response, platformData, -999, eb);
				}
			} else {
				sendData(response, platformData, -1, "저장할 쿠폰대금정보가 없습니다. 관리자에게 문의하십시오.");
			}
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, "쿠폰대금정보 업로드중에 오류가 발생하였습니다. 관리자에 문의하십시오.");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/getCouponSaleResultUploadList")
	public void getCouponSaleResultUploadList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String CPN_PBC_NA_TRPL_C = requestHelper.getParameter("CPN_PBC_NA_TRPL_C");
		String ADJ_YM = requestHelper.getParameter("ADJ_YM");
		String ADJPL_NA_TRPL_C = requestHelper.getParameter("ADJPL_NA_TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			List<Map<String, Object>> list =  couponSaleResultService.getCouponSaleResultUploadList(CPN_PBC_NA_TRPL_C, ADJ_YM, ADJPL_NA_TRPL_C);
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/coupon/getCouponSaleResultUploadList")
	public void getCouponSaleResultUploadListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String CPN_PBC_NA_TRPL_C = requestHelper.getParameter("CPN_PBC_NA_TRPL_C");
		String ADJ_YM = requestHelper.getParameter("ADJ_YM");
		String ADJPL_NA_TRPL_C = requestHelper.getParameter("ADJPL_NA_TRPL_C");
		
		String fileName = "할인쿠폰대금업로드.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try {
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = {
					"정산처코드",
					"정산처",
					"발생구분",
					"수량",
					"쿠폰금액",
					"수수료",
					"수수료부가세",
					"기흥수수료",
					"기흥수수료부가세",
					"회수등록완료여부"
			};
			String[] keyIndex = {
					"ADJPL_NA_TRPL_C",
					"CLNTNM",
					"PMNY_ADJ_DSC",
					"CPN_QT",
					"CPN_AM",
					"CPN_FEE",
					"CPN_FEE_VAT",
					"DIV_CPN_FEE",
					"DIV_CPN_FEE_VAT",
					"COMPLETE_YN"
				};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			couponSaleResultService.getCouponSaleResultUploadListExcel(CPN_PBC_NA_TRPL_C, ADJ_YM, ADJPL_NA_TRPL_C, handler);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
}
