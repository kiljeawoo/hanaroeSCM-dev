package com.nh.escm.pds.balance.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.balance.helper.BalanceValidator;
import com.nh.escm.pds.balance.service.BalanceService;
import com.nh.escm.pds.balance.vo.SQLNames.MonthlyBalanceDetail;

@RestController
public class BalanceController extends AbstractController {
	Logger logger = LoggerUtil.getServerLogger(this.getClass());
	
	@Autowired
	private BalanceService balanceService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/balance/getMonthlyBalanceList")
	public void getMonthlyBalanceList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String BAS_YM = requestHelper.getParameter("BAS_YM");
		String ADJ_NA_BZPLC = requestHelper.getParameter("ADJ_NA_BZPLC");
		String IS_AUTH_ALL = requestHelper.getParameter("IS_AUTH_ALL");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			BalanceValidator.masterValidate(BAS_YM, TRPL_C);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			List<Map<String, Object>> balanceList = balanceService.getMonthlyBalanceList(BAS_YM, ADJ_NA_BZPLC, TRPL_C_ARR,IS_AUTH_ALL);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(balanceList.get(0).keySet());
				 for(Map<String, Object> map : balanceList) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = balanceService.getMonthlyBalanceListSum(BAS_YM, ADJ_NA_BZPLC, TRPL_C_ARR,IS_AUTH_ALL);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(map.keySet());
				 dsHelper.setData(map);
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			String ddl_dt = balanceService.getDDL_DT();
			if(StringUtils.isNotEmpty(ddl_dt)) {
				DataSetHelper dsHelper = new DataSetHelper("DS_DDL");
				DataSet ds = dsHelper.getDataSet();
				ds.addColumn("DDL_DT", DataTypes.STRING);
				ds.set(ds.newRow(), "DDL_DT", ddl_dt);
				platformData.addDataSet(ds);
			}
				
			sendData(response, platformData);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	

	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/balance/getMonthlyBalanceList")
	public void getMonthlyBalanceListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "월잔액원장.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		String BAS_YM = requestHelper.getParameter("BAS_YM");
		String ADJ_NA_BZPLC = requestHelper.getParameter("ADJ_NA_BZPLC");
		String IS_AUTH_ALL = requestHelper.getParameter("IS_AUTH_ALL");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		try {
			BalanceValidator.masterValidate(BAS_YM, TRPL_C);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> balanceList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			String[] header = {
					"협력업체코드",
					"협력업체명",
					"경제통합사업장코드",
					"농협사업장명",
					"전월이월잔액",
					"전월이월지체이자",
					"과세공급금액",
					"과세부가세",
					"면세공급금액",
					"영세공급금액",
					"주류공급금액",
					"주류공급부가세",
					"공병금액",
					"공상자금액",
					"저장품금액",
					"매입금액",
					"현금금액",
					"선급금",
					"선지급금액",
					"선지급할인금액",
					"공제금액",
					"지급금액",
					"지급취소금액",
					"정산금액(차변)",
					"외상매입금잔액",
					"지체이자발생금액",
					"지체이자지급금액",
					"합병금액",
					"합병지체이자",
					"총공급금액",
					"총부가세",
					"차변정정금액",
					"대변정정금액",
					"관리수수료(R1)",
					"관리수수료(R2)",
					"관리수수료부가세",
					"물류수수료",
					"물류수수료부가세",
					"매입장려금",
					"사후장려금",
					"상품권금액",
					"판매장려금",
					"수탁수수료",
					"지체상금",
					"지급기타금액",
					"공병반환금액",
					"공상자반환금액",
					"공파렛트반환금액",
					"반환수수료",
					"반환수수료부가세"
			};
			String[] keyIndex = {
					"NA_ADJPL_C",
					"CLIENT_NM",
					"NA_BZPLC",
					"BZPL_NM",
					"YY_CROV_AM",
					"YY_CROV_DLAY_INT",
					"TXT_AM",
					"TXT_VAT",
					"EXTX_AM",
					"SMA_AM",
					"LIQ_SPY_AM",
					"LIQ_SPY_VAT",
					"VCBT_AM",
					"VCBX_AM",
					"STOG_AM",
					"CBAM",
					"CSH_AM",
					"PPYAM",
					"PPY_AM",
					"BYNG_DC_AM",
					"MAD_AM",
					"PY_AM",
					"PY_CAN_AM",
					"ADJ_AM",
					"BAC",
					"DLAY_INT_OCU_AM",
					"DLAY_INT_PY_AM",
					"MRG_AM",
					"MRG_DLAY_INT",
					"SUPL_AM",
					"SUPL_VAT",
					"DB_CRC_AM",
					"CR_CRC_AM",
					"AMN_FEE_R1",
					"AMN_FEE_R2",
					"AMN_FEE_VAT",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"BYNG_SSDY",
					"AFF_SSDY",
					"MCDBD_AM",
					"SEL_SSDY",
					"ETR_FEE_ARG_AM",
					"DLAYPZ",
					"PY_ETC_AM",
					"VCBT_RTU_AM",
					"VCBX_RTU_AM",
					"VPLTT_RTU_AM",
					"RTU_AM",
					"RTU_FEE_VAT"		
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, balanceList);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			balanceService.getMonthlyBalanceListExcel(BAS_YM, ADJ_NA_BZPLC, TRPL_C_ARR,IS_AUTH_ALL, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("거래월", BAS_YM);
			searchMap.put("권한사업장", TRPL_C);
			searchMap.put("농협사업장", ADJ_NA_BZPLC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/**
	 * 월잔액장 조회 
	 * @param request
	 * @param response
	 * @param TRPL_C_TEXT
	 * @param BAS_YM
	 * @param ADJ_NA_BZPLC
	 * @param TRPL_C
	 * @param DS_TYPE
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/balance/getMonthlyBalanceList")
	public RestResult getMonthlyBalanceListOz(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String BAS_YM, String ADJ_NA_BZPLC, String TRPL_C, String DS_TYPE, String IS_AUTH_ALL) {
		
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			BalanceValidator.masterValidate(BAS_YM, TRPL_C);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

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
			 *  경제통합정산처코드,	NA_ADJPL_C,
				공급업체명,	        CLIENT_NM,
				정산경제통합사업장코드,	ADJ_NA_BZPLC,
				농협사업장명,	    BZPL_NM,
				기준년월,	        BAS_YM,
				전월이월잔액,	    YY_CROV_AM,
				전월이월지체이자,	    YY_CROV_DLAY_INT,
				과세공급금액,	    TXT_AM,
				과세부가세,			TXT_VAT,
				면세공급금액,		EXTX_AM,
				영세공급금액,		SMA_AM,
				주류공급금액,		LIQ_SPY_AM,
				주류공급부가세,		LIQ_SPY_VAT,
				공병금액,			VCBT_AM,
				공상자금액,			VCBX_AM,
				저장품금액,			STOG_AM,
				매입금액,			CBAM,
				현금금액,			CSH_AM,
				선급금,			PPYAM,
				선지급금액,			PPY_AM,
				선지급할인금액,		BYNG_DC_AM,
				공제금액,			MAD_AM,
				지급금액,			PY_AM,
				지급취소금액,		PY_CAN_AM,
				정산금액(차변),		ADJ_AM,
				외상매입금잔액,		BAC,
				지체이자발생금액,		DLAY_INT_OCU_AM,
				지체이자지급금액,		DLAY_INT_PY_AM,
				합병금액,			MRG_AM,
				합병지체이자,		MRG_DLAY_INT,
				총공급금액,			SUPL_AM,
				총부가세,			SUPL_VAT,
				차변정정금액,		DB_CRC_AM,
				대변정정금액		CR_CRC_AM
			 */
			List<Map<String, Object>> balanceList = balanceService.getMonthlyBalanceList(BAS_YM, ADJ_NA_BZPLC, TRPL_C_ARR,IS_AUTH_ALL);
			ozReport.add(balanceList);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (balanceList != null? balanceList.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/balance/getMonthlyBalanceDetailList")
	public void getMonthlyBalanceDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String BAS_YM = requestHelper.getParameter("BAS_YM");
		String ADJ_NA_BZPLC = requestHelper.getParameter("ADJ_NA_BZPLC");
		String NA_ADJPL_C = requestHelper.getParameter("NA_ADJPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			BalanceValidator.detailValidate(BAS_YM, ADJ_NA_BZPLC, NA_ADJPL_C);

			List<Map<String, Object>> balanceList = balanceService.getMonthlyBalanceDetailList(BAS_YM, ADJ_NA_BZPLC, NA_ADJPL_C);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(MonthlyBalanceDetail.class);
				 for(Map<String, Object> map : balanceList) {
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
	 * 월잔액장 상세 오즈 레포트
	 * @param request
	 * @param response
	 * @param TRPL_C_TEXT
	 * @param BAS_YM
	 * @param ADJ_NA_BZPLC
	 * @param NA_ADJPL_C
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/balance/getMonthlyBalanceDetailList")
	public RestResult getMonthlyBalanceDetailListOz(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName,  String BAS_YM, String ADJ_NA_BZPLC, String NA_ADJPL_C) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			BalanceValidator.detailValidate(BAS_YM, ADJ_NA_BZPLC, NA_ADJPL_C);

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
			 *  SEQ		순번
				SUM_YN	합계항목여부
				ITEM1	미사용
				ITEM2	내역 첫번째 컬럼
				ITEM3	내역 두번째 컬럼
				BLB_AM	흑자
				DFC_AM	적자
				SAM		합계
			 */
			List<Map<String, Object>> balanceList = balanceService.getMonthlyBalanceDetailList(BAS_YM, ADJ_NA_BZPLC, NA_ADJPL_C);
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			for(Map<String, Object> map : balanceList){
				String SEQ = StringUtil.toString(String.valueOf(map.get("SEQ")));
				String SUM_YN = StringUtil.toString((String)map.get("SUM_YN"));
				String ITEM1 = StringUtil.toString((String)map.get("ITEM1"));
				String ITEM2 = StringUtil.toString((String)map.get("ITEM2"));
				String ITEM3 = StringUtil.toString((String)map.get("ITEM3"));
				String BLB_AM = StringUtil.toString(String.valueOf(map.get("BLB_AM")));
				String DFC_AM = StringUtil.toString(String.valueOf(map.get("DFC_AM")));
				String SAM = StringUtil.toString(String.valueOf(map.get("SAM")));
				Map<String, Object> newMap = new LinkedHashMap<String, Object>();
				newMap.put("SEQ", SEQ);
				newMap.put("SUM_YN", SUM_YN);
				newMap.put("ITEM1", ITEM1);
				newMap.put("ITEM2", ITEM2);
				newMap.put("ITEM3", ITEM3);
				newMap.put("BLB_AM", BLB_AM);
				newMap.put("DFC_AM", DFC_AM);
				newMap.put("SAM", SAM);
				list.add(newMap);
			}
			ozReport.add(list);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (balanceList != null? balanceList.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/balance/getPrePayDayList")
	public void getPrePayDayList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String TR_DT = requestHelper.getParameter("TR_DT");
		String ROTS_CTR_DSC = requestHelper.getParameter("ROTS_CTR_DSC");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			BalanceValidator.prePayDayValidate(TR_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<Map<String, Object>> balanceList = balanceService.getPrePayDayList(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(balanceList.get(0).keySet());
				 for(Map<String, Object> map : balanceList) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			List<Map<String, Object>> sum = balanceService.getPrePayDayListSum(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR);
			if(sum != null && sum.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(sum.get(0).keySet());
				 for(Map<String, Object> map : sum) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			logger.debug(platformData.saveXml());
			sendData(response, platformData);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}


	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/balance/getPrePayDayList")
	public void getPrePayDayListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "일선수금원장.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		String TR_DT = requestHelper.getParameter("TR_DT");
		String ROTS_CTR_DSC = requestHelper.getParameter("ROTS_CTR_DSC");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		try {
			BalanceValidator.prePayDayValidate(TR_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> balanceList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = {
					"협력업체",
					"협력업체명",
					"경제통합사업장코드",
					"경제통합사업장명",
					"정산처코드",
					"적요내용",
					"차변금액",
					"대변금액",
					"잔액",
					"경제통합흑자적자구분코드"

			};
			String[] keyIndex = {
					"NA_TRPL_C",
					"CLIENT_NM",
					"NA_BZPLC",
					"BZPL_NM",
					"NA_TEAM_C",
					"REM",
					"DB_AM",
					"CR_AM",
					"BAC",
					"NA_BLB_DFC_DSC"
				};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, balanceList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);	
			
			balanceService.getPrePayDayListExcel(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR, handler);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/balance/getPrePayDayList")
	public RestResult getPrePayDayListOz(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String TR_DT, String ROTS_CTR_DSC, String NA_BZPLC, String TRPL_C) {
		
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			BalanceValidator.prePayDayValidate(TR_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			List<Object> ozReport = new ArrayList<Object>();

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
			 *  경제통합거래처코드,	NA_TRPL_C,
				거래처,	CLIENT_NM,
				경제통합사업장코드,	NA_BZPLC,
				정산처,	BZPL_NM,
				경제통합팀코드,	NA_TEAM_C,
				정산처팀,	TEAM_NM,
				계통계약구분코드,	ROTS_CTR_DSC,
				거래일자,	TR_DT,
				경제통합흑자적자구분코드,	NA_BLB_DFC_DSC,
				적요내용,	REM,
				차변금액,	DB_AM,
				대변금액,	CR_AM,
				잔액	BAC
			 */

			List<Map<String, Object>> balanceList = balanceService.getPrePayDayList(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR);
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			//차변
			long TOT1_DB_AM = 0;
			long TOT2_DB_AM = 0;
			long TOT3_DB_AM = 0;
			//대변
			long TOT1_CR_AM = 0;
			long TOT2_CR_AM = 0;
			long TOT3_CR_AM = 0;
			//잔액
			long TOT1_BAC = 0;
			long TOT2_BAC = 0;
			long TOT3_BAC = 0;
			
			DecimalFormat df = new DecimalFormat("#,###");
			//필터링
			for(Map<String, Object> map : balanceList){
				
				Map<String, Object> newMap  = new LinkedHashMap<String, Object>();
				
				String NA_BLB_DFC_DSC = (String)map.get("NA_BLB_DFC_DSC");
				String DB_AM = String.valueOf(map.get("DB_AM"));
				String CR_AM = String.valueOf(map.get("CR_AM"));
				String BAC = String.valueOf(map.get("BAC"));
				if(StringUtils.isEmpty(DB_AM)) DB_AM = "0";
				if(StringUtils.isEmpty(CR_AM)) CR_AM = "0";
				if(StringUtils.isEmpty(BAC)) BAC = "0";
				
				if(NA_BLB_DFC_DSC.equals("-")){
					TOT1_DB_AM+=Long.parseLong(DB_AM);
					TOT1_CR_AM+=Long.parseLong(CR_AM);
					TOT1_BAC+=Long.parseLong(BAC);					
				}else if(NA_BLB_DFC_DSC.equals("+")){
					TOT2_DB_AM+=Long.parseLong(DB_AM);
					TOT2_CR_AM+=Long.parseLong(CR_AM);
					TOT2_BAC+=Long.parseLong(BAC);
				}else if(NA_BLB_DFC_DSC.equals("*")){
					TOT3_DB_AM+=Long.parseLong(DB_AM);
					TOT3_CR_AM+=Long.parseLong(CR_AM);
					TOT3_BAC+=Long.parseLong(BAC);
				}	
							
				newMap.put("NA_TRPL_C", StringUtil.toString(map.get("NA_TRPL_C")));
				newMap.put("CLIENT_NM", StringUtil.toString(map.get("CLIENT_NM")));
				newMap.put("NA_BZPLC", StringUtil.toString(map.get("NA_BZPLC")));
				newMap.put("BZPL_NM", StringUtil.toString(map.get("BZPL_NM")));
				newMap.put("TEAM_NM", StringUtil.toString(map.get("TEAM_NM")));				
				newMap.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
				newMap.put("REM", StringUtil.toString(map.get("REM")));
				newMap.put("DB_AM", df.format(Long.parseLong(DB_AM)));
				newMap.put("CR_AM", df.format(Long.parseLong(CR_AM)));
				newMap.put("BAC", df.format(Long.parseLong(BAC)));
				list.add(newMap);
			}
			ozReport.add(list);			
			
			Map<String, Object> totalMap  = new LinkedHashMap<String, Object>();
			totalMap.put("TOT1_DB_AM", df.format(TOT1_DB_AM));
			totalMap.put("TOT2_DB_AM", df.format(TOT2_DB_AM));
			totalMap.put("TOT3_DB_AM", df.format(TOT3_DB_AM));
			totalMap.put("TOT1_CR_AM", df.format(TOT1_CR_AM));
			totalMap.put("TOT2_CR_AM", df.format(TOT2_CR_AM));
			totalMap.put("TOT3_CR_AM", df.format(TOT3_CR_AM));
			totalMap.put("TOT1_BAC", df.format(TOT1_BAC));
			totalMap.put("TOT2_BAC", df.format(TOT2_BAC));
			totalMap.put("TOT3_BAC", df.format(TOT3_BAC));
			ozReport.add(totalMap);	
			
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (balanceList != null? balanceList.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}


	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/balance/getArcvOcuList")
	public void getArcvOcuList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String TR_DT = requestHelper.getParameter("TR_DT");
		String ACRV_SBJC = requestHelper.getParameter("ACRV_SBJC");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			BalanceValidator.prePayDayValidate(TR_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<Map<String, Object>> balanceList = balanceService.getArcvOcuList(TR_DT, ACRV_SBJC, NA_BZPLC, TRPL_C_ARR);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(balanceList.get(0).keySet());
				 for(Map<String, Object> map : balanceList) {
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


	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/balance/getArcvOcuList")
	public void getArcvOcuListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "미수금원장.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		String TR_DT = requestHelper.getParameter("TR_DT");
		String ACRV_SBJC = requestHelper.getParameter("ACRV_SBJC");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		try {
			BalanceValidator.prePayDayValidate(TR_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<Map<String,Object>> balanceList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"경제통합정산처코드",
					"정산처명",
					"미수금과목코드",
					"차변금액(발생금액)",
					"대변금액(회수금액)",
					"잔액",
					"경제통합사업장코드",
					"사업장명"
			};
			String[] keyIndex = {
					"NA_ADJPL_C",
					"CLIENT_NM",
					"ACRV_SBJC",
					"OCU_AM",
					"WDR_AM",
					"BAC",
					"NA_BZPLC",
					"BZPL_NM"
				};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, balanceList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);	
			
			balanceService.getArcvOcuListExcel(TR_DT, ACRV_SBJC, NA_BZPLC, TRPL_C_ARR, handler);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}


	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/balance/getBcdDayList")
	public void getBcdDayList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String TR_DT = requestHelper.getParameter("TR_DT");
		String ROTS_CTR_DSC = requestHelper.getParameter("ROTS_CTR_DSC");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			BalanceValidator.bcdDayValidate(TR_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<Map<String, Object>> balanceList = balanceService.getBcdDayList(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(balanceList.get(0).keySet());
				 for(Map<String, Object> map : balanceList) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			List<Map<String, Object>> balanceSum = balanceService.getBcdDayListSum(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR);
			
			if(balanceSum != null && balanceSum.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(balanceSum.get(0).keySet());
				 for(Map<String, Object> map : balanceSum) {
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


	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/balance/getBcdDayList")
	public void getBcdDayListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "일잔액원장.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		String TR_DT = requestHelper.getParameter("TR_DT");
		String ROTS_CTR_DSC = requestHelper.getParameter("ROTS_CTR_DSC");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		try {
			BalanceValidator.bcdDayValidate(TR_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<Map<String,Object>> balanceList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"본/지사코드",
					"본/지사",
					"정산처코드",
					"정산처명",
					"정산처팀코드",
					"적요",
					"차변금액",
					"대변금액",
					"잔액",
					"흑자적자구분코드"

			};
			String[] keyIndex = {
					"NA_ADJPL_C",
					"TRPL_NM",
					"NA_BZPLC", 
					"BZPL_NM",
					"NA_TEAM_C",
					"SNS_CNTN",
					"DB_AM",
					"CR_AM",
					"BAC",
					"NA_BLB_DFC_DSC"
				};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, balanceList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);	
			
			balanceService.getBcdDayListExcel(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR, handler);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/**
	 * 일잔액원장 oz API
	 * @param request
	 * @param response
	 * @param TRPL_C_TEXT
	 * @param TR_DT
	 * @param ROTS_CTR_DSC
	 * @param NA_BZPLC
	 * @param TRPL_C
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/balance/getBcdDayList")
	public RestResult getBcdDayListOz(HttpServletRequest request,HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String TR_DT, String ROTS_CTR_DSC,String NA_BZPLC,String TRPL_C){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			BalanceValidator.bcdDayValidate(TR_DT);
			
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			List<Object> ozReport = new ArrayList<Object>();

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
			 *  NA_TRPL_C,	         경제통합거래처코드,
				TRPL_NM,	         거래처명,
				NA_BZPLC, 	         경제통합사업장코드,
				BZPL_NM,	         사업장명,
				NA_TEAM_C,	         경제통합팀코드,
				TEAM_NM,	         사업장팀명,
				TR_DT,	                  거래일자,
				ROTS_CTR_DSC,	계통계약구분코드,
				NA_BLB_DFC_DSC,	경제통합흑자적자구분코드,
				SNS_CNTN,	          적요내용,
				DB_AM,	                   차변금액,
				CR_AM,	                   대변금액,
				BAC	                            잔액
			 */
			List<Map<String, Object>> balanceList = balanceService.getBcdDayList(TR_DT, ROTS_CTR_DSC, NA_BZPLC, TRPL_C_ARR);
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			//차변
			long TOT1_DB_AM = 0;
			long TOT2_DB_AM = 0;
			long TOT3_DB_AM = 0;
			//대변
			long TOT1_CR_AM = 0;
			long TOT2_CR_AM = 0;
			long TOT3_CR_AM = 0;
			//잔액
			long TOT1_BAC = 0;
			long TOT2_BAC = 0;
			long TOT3_BAC = 0;
			
			DecimalFormat df = new DecimalFormat("#,###");
			//필터링
			for(Map<String, Object> map : balanceList){
				
				Map<String, Object> newMap  = new LinkedHashMap<String, Object>();
				
				String NA_BLB_DFC_DSC = (String)map.get("NA_BLB_DFC_DSC");
				String DB_AM = String.valueOf(map.get("DB_AM"));
				String CR_AM = String.valueOf(map.get("CR_AM"));
				String BAC = String.valueOf(map.get("BAC"));
				if(StringUtils.isEmpty(DB_AM)) DB_AM = "0";
				if(StringUtils.isEmpty(CR_AM)) CR_AM = "0";
				if(StringUtils.isEmpty(BAC)) BAC = "0";
				
				if(NA_BLB_DFC_DSC.equals("-")){
					TOT1_DB_AM+=Long.parseLong(DB_AM);
					TOT1_CR_AM+=Long.parseLong(CR_AM);
					TOT1_BAC+=Long.parseLong(BAC);					
				}else if(NA_BLB_DFC_DSC.equals("+")){
					TOT2_DB_AM+=Long.parseLong(DB_AM);
					TOT2_CR_AM+=Long.parseLong(CR_AM);
					TOT2_BAC+=Long.parseLong(BAC);
				}else if(NA_BLB_DFC_DSC.equals("*")){
					TOT3_DB_AM+=Long.parseLong(DB_AM);
					TOT3_CR_AM+=Long.parseLong(CR_AM);
					TOT3_BAC+=Long.parseLong(BAC);
				}	
							
				newMap.put("NA_TRPL_C", StringUtil.toString(map.get("NA_ADJPL_C")));
				newMap.put("TRPL_NM", StringUtil.toString(map.get("TRPL_NM")));
				newMap.put("NA_BZPLC", StringUtil.toString(map.get("NA_BZPLC")));
				newMap.put("BZPL_NM", StringUtil.toString(map.get("BZPL_NM")));
				newMap.put("TEAM_NM", StringUtil.toString(map.get("NA_TEAM_C")));
				newMap.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
				newMap.put("SNS_CNTN", StringUtil.toString(map.get("SNS_CNTN")));
				newMap.put("DB_AM", df.format(Long.parseLong(DB_AM)));
				newMap.put("CR_AM", df.format(Long.parseLong(CR_AM)));
				newMap.put("BAC", df.format(Long.parseLong(BAC)));
				list.add(newMap);
			}
			ozReport.add(list);			
			
			Map<String, Object> totalMap  = new LinkedHashMap<String, Object>();
			totalMap.put("TOT1_DB_AM", df.format(TOT1_DB_AM));
			totalMap.put("TOT2_DB_AM", df.format(TOT2_DB_AM));
			totalMap.put("TOT3_DB_AM", df.format(TOT3_DB_AM));
			totalMap.put("TOT1_CR_AM", df.format(TOT1_CR_AM));
			totalMap.put("TOT2_CR_AM", df.format(TOT2_CR_AM));
			totalMap.put("TOT3_CR_AM", df.format(TOT3_CR_AM));
			totalMap.put("TOT1_BAC", df.format(TOT1_BAC));
			totalMap.put("TOT2_BAC", df.format(TOT2_BAC));
			totalMap.put("TOT3_BAC", df.format(TOT3_BAC));
			ozReport.add(totalMap);			
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (balanceList != null? balanceList.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
}
