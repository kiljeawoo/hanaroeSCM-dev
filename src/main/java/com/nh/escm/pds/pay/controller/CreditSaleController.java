package com.nh.escm.pds.pay.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
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
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.pay.helper.CreditSaleValidator;
import com.nh.escm.pds.pay.service.CreditSaleService;

@RestController
public class CreditSaleController extends AbstractController {
	Logger logger = LoggerUtil.getServerLogger(this.getClass());
	
	@Autowired
	private CreditSaleService creditSaleService;
	
	/**
	 * 외상매출회수예정내역
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/pay/getCreditSaleReserveList")
	public void getCreditSaleReserveList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String DATE_TYPE = requestHelper.getParameter("DATE_TYPE");
		String FROM_DT = requestHelper.getParameter("FROM_DT");
		String TO_DT = requestHelper.getParameter("TO_DT");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String CPL_YN = requestHelper.getParameter("CPL_YN");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		
		try {
			CreditSaleValidator.reserveValidation(DATE_TYPE, FROM_DT, TO_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			List<Map<String, Object>> list = creditSaleService.getCreditSaleReserveList(DATE_TYPE, FROM_DT, TO_DT, NA_BZPLC, CPL_YN, TRPL_C_ARR);
			
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
	 * 외상매출회수예정 엑셀다운로드
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/pay/getCreditSaleReserveList")
	public void getCreditSaleReserveListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "외상매출회수예정.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
	
		String DATE_TYPE = requestHelper.getParameter("DATE_TYPE");
		String FROM_DT = requestHelper.getParameter("FROM_DT");
		String TO_DT = requestHelper.getParameter("TO_DT");
		String NA_BZPLC = requestHelper.getParameter("NA_BZPLC");
		String CPL_YN = requestHelper.getParameter("CPL_YN");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		try {
			CreditSaleValidator.reserveValidation(DATE_TYPE, FROM_DT, TO_DT);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"경제통합사업장코드",
					"경제통합사업장명",
					"경제통합 거래팀코드",
					"경제통합사업장팀명",
					"경제통합 지급예정일",
					"경제통합 지점사업장코드",
					"경제통합 지점사업장명",
					"정산사업장팀코드",
					"정산사업장팀명",
					"경제통합 매취수탁구분코드",
					"경제통합 정산처코드",
					"경제통합 정산처명",
					"경제통합 정산처팀코드",
					"경제통합 정산처팀명",
					"경제통합거래처코드",
					"경제통합거래처명",
					"거래처 팀코드",
					"거래처 팀명",
					"경제통합 외상매입금",
					"경제통합 지급금액",
					"선지급금액",
					"경제통합 매입할인액",
					"상계금액",
					"경제통합 실지급예정금액",
					"공급금액",
					"과세금액",
					"과세부가세",
					"면세금액",
					"영세금액",
					"주류공급금액",
					"주류공급부가세",
					"공병금액",
					"공상자금액",
					"공파렛트금액",
					"매입장려금",
					"관리수수료",
					"관리수수료부가세",
					"물류수수료",
					"물류수수료부가세",
					"물류사후장려금",
					"사후장려금",
					"공병반환금액",
					"공상자반환금액",
					"공파렛트반환금액",
					"반환수수료",
					"반환수수료부가세",
					"공제금액",
					"차변정정금액",
					"대변정정금액",
					"합병발생금액",
					"합병차감금액",
					"년도이월금액",
					"년도이월차감금액",
					"이월발생금액",
					"이월차감금액",
					"무발주반품금액",
					"완료여부",
					"경제통합 최초지급일자",
					"경제통합 최종지급일자",
					"경제통합 최초거래일자",
					"경제통합 최종거래일자",
					"기타금액1",
					"기타금액2",
					"기타금액3",
					"비고내용1",
					"비고내용2"
					};
			
			String[] keyIndex = {
					"NA_BZPLC",
					"NA_BZPLC_NM",
					"NA_TEAM_C",
					"NA_TEAM_NM",
					"PY_PLA_DT",
					"ADJ_NA_BZPLC",
					"ADJ_NA_BZPLC_NM",
					"ADJ_BZPL_NA_TEAM_C",
					"ADJ_BZPL_NA_TEAM_NM",
					"BZ_METH_DSC",
					"NA_ADJPL_C",
					"NA_ADJPL_C_NM",
					"ADJPL_NA_TEAM_C",
					"ADJPL_NA_TEAM_NM",
					"NA_TRPL_C",
					"NA_TRPL_C_NM",
					"TRPL_NA_TEAM_C",
					"TRPL_NA_TEAM_NM",
					"CBAM",
					"PY_AM",
					"PPY_AM",
					"BYNG_DC_AM",
					"OFS_AM",
					"ACTL_PY_PLA_AM",
					"SPY_AM",
					"TXT_AM",
					"TXT_VAT",
					"EXTX_AM",
					"SMA_AM",
					"LIQ_SPY_AM",
					"LIQ_SPY_VAT",
					"VCBT_AM",
					"VCBX_AM",
					"VPLTT_AM",
					"BYNG_SSDY",
					"AMN_FEE",
					"AMN_FEE_VAT",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"PHD_AFF_SSDY",
					"AFF_SSDY",
					"VCBT_RTU_AM",
					"VCBX_RTU_AM",
					"VPLTT_RTU_AM",
					"RTU_FEE",
					"RTU_FEE_VAT",
					"MAD_AM",
					"DB_CRC_AM",
					"CR_CRC_AM",
					"MRG_OCU_AM",
					"MRG_SBT_AM",
					"YY_CROV_AM",
					"YY_CROV_SBT_AM",
					"CROV_OCU_AM",
					"CROV_SBT_AM",
					"NODR_RGD_AM",
					"CPL_YN",
					"FTR_PY_DT",
					"LS_PY_DT",
					"FTR_TR_DT",
					"LS_TR_DT",
					"ETC_AM1",
					"ETC_AM2",
					"ETC_AM3",
					"RMK_CNTN1",
					"RMK_CNTN2"
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			creditSaleService.getCreditSaleReserveListExcel(DATE_TYPE, FROM_DT, TO_DT, NA_BZPLC, CPL_YN, TRPL_C_ARR, handler);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/**
	 * 외상매출회수내역
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/pay/getCreditSaleList")
	public void getCreditSaleList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String START_DATE = requestHelper.getParameter("START_DATE");
		String END_DATE = requestHelper.getParameter("END_DATE");
		String ROTS_CTR_DSC = requestHelper.getParameter("ROTS_CTR_DSC");
		String ADJ_NA_BZPLC = requestHelper.getParameter("ADJ_NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			CreditSaleValidator.payValidation(START_DATE, END_DATE);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<Map<String, Object>> list = creditSaleService.getCreditSaleList(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C_ARR);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = creditSaleService.getCreditSaleListSum(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C_ARR);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(map.keySet());
				 dsHelper.setData(map);
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, platformData);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}

	/**
	 * 외상매출회수내역 엑셀다운로드
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/pay/getCreditSaleList")
	public void getCreditSaleListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "외상매출회수.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		String START_DATE = requestHelper.getParameter("START_DATE");
		String END_DATE = requestHelper.getParameter("END_DATE");
		String ROTS_CTR_DSC = requestHelper.getParameter("ROTS_CTR_DSC");
		String ADJ_NA_BZPLC = requestHelper.getParameter("ADJ_NA_BZPLC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		try {
			CreditSaleValidator.payValidation(START_DATE, END_DATE);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush			
			String[] header = {
					"지급일자",
					"협력업체코드",
					"협력업체명",
					"매출처코드",
					"매출처명",
					"경제통합사업장코드",
					"사업장명",
					"경제통합팀코드",
					"팀명",
					"지급경제통합전표번호",
					"경제통합전표번호",
					"경제통합정정취소구분코드",
					"계통계약구분코드",
					"지급처리예정일자",
					"지급처리예정경제통합전표번호",
					"거래일자",
					"발생경제통합전표번호",
					"지급원금",
					"지체이자지급금액",
					"매입할인금액",
					"매입할인부가세",
					"상계금액",
					"장려금지급금액",
					"지체상금",
					"출자금",
					"지체이자감면금액",
					"지급예정일자",
					"지급의뢰구분코드",
					"지급결제구분코드",
					"선지급일수",
					"선지급금리",
					"지체금리",
					"이자기산일자",
					"결제계좌번호",
					"계리전표일련번호",
					"원전표일자",
					"원경제통합전표번호",
					"비고내용"
			};
			String[] keyIndex = {
					"PY_DT",
					"NA_ADJPL_C",
					"NA_ADJPL_NM",
					"NA_TRPL_C",
					"NA_TRPL_NM",
					"NA_BZPLC",
					"NA_BZPL_NM",
					"NA_TEAM_C",
					"TEAM_NM",
					"PY_NA_SLPNO",
					"NA_SLPNO",
					"NA_CRC_CAN_DSC",
					"ROTS_CTR_DSC",
					"PY_PRC_PLA_DT",
					"PY_PRC_PLA_NA_SLPNO",
					"TR_DT",
					"OCU_NA_SLPNO",
					"PY_PRN",
					"DLAY_INT_PY_AM",
					"BYNG_DC_AM",
					"BYNG_DC_VAT",
					"OFS_AM",
					"SSDY_PY_AM",
					"DLAYPZ",
					"IVSAM",
					"DLAY_INT_RDU_AM",
					"PY_PLA_DT",
					"PY_RQT_DSC",
					"PY_STL_DSC",
					"PPY_DDS",
					"PPY_ITR",
					"DLAY_ITR",
					"INT_RCKN_DT",
					"STL_ACNO",
					"PATN_NA_SLPNO",
					"OSLIP_DT",
					"OGN_NA_SLPNO",
					"RMK_CNTN"
				};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			creditSaleService.getCreditSaleListExcel(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C_ARR, handler);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/pay/getCreditSaleList")
	public RestResult getCreditSaleListOz(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String START_DATE, String END_DATE, 
			String ROTS_CTR_DSC, String ADJ_NA_BZPLC, String TRPL_C) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			CreditSaleValidator.payValidation(START_DATE, END_DATE);
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
			 *  경제통합사업장코드,	NA_BZPLC,
				사업장명,	NA_BZPL_NM,
				경제통합팀코드,	NA_TEAM_C,
				팀명,	TEAM_NM,
				지급일자,	PY_DT,
				지급경제통합전표번호,	PY_NA_SLPNO,
				경제통합전표번호,	NA_SLPNO,
				지급처리예정일자,	PY_PRC_PLA_DT,
				지급처리예정경제통합전표번호,	PY_PRC_PLA_NA_SLPNO,
				거래일자,	TR_DT,
				발생경제통합전표번호,	OCU_NA_SLPNO,
				전표일자,	SLP_DT,
				지급예정일자,	PY_PLA_DT,
				발생경제통합거래구분코드,	OCU_NA_TR_DSC,
				계통계약구분코드,	ROTS_CTR_DSC,
				사업방식구분코드,	BZ_METH_DSC,
				공급유형코드,	SPY_TPC,
				경제통합정산처코드,	NA_ADJPL_C,
				정산처명,	NA_ADJPL_NM,
				정산처경제통합팀코드,	ADJPL_NA_TEAM_C,
				정산처팀명,	ADJPL_NA_TEAM_NM,
				경제통합거래처코드,	NA_TRPL_C,
				거래처명,	NA_TRPL_NM,
				거래처경제통합팀코드,	TRPL_NA_TEAM_C,
				거래처팀명,	TRPL_NA_TEAM_NM,
				정산경제통합사업장코드,	ADJ_NA_BZPLC,
				정산사업장명,	ADJ_NA_BZPL_NM,
				정산사업장경제통합팀코드,	ADJ_BZPL_NA_TEAM_C,
				정산사업장팀명,	ADJ_BZPL_NA_TEAM_NM,
				경제통합거래구분코드,	NA_TR_DSC,
				경제통합흑자적자구분코드,	NA_BLB_DFC_DSC,
				지급의뢰구분코드,	PY_RQT_DSC,
				지급원금,	PY_PRN,
				매입할인금액,	BYNG_DC_AM,
				매입할인부가세,	BYNG_DC_VAT,
				상계금액,	OFS_AM,
				장려금지급금액,	SSDY_PY_AM,
				지체상금,	DLAYPZ,
				출자금,	IVSAM,
				지체이자지급금액,	DLAY_INT_PY_AM,
				지체이자감면금액,	DLAY_INT_RDU_AM,
				선지급일수,	PPY_DDS,
				선지급금리,	PPY_ITR,
				지체금리,	DLAY_ITR,
				이자기산일자,	INT_RCKN_DT,
				결제계좌번호,	STL_ACNO,
				은행코드,	BNK_C,
				예금주명,	DPRNM,
				상대전표일자,	PATN_SLP_DT,
				상대경제통합전표번호,	PATN_NA_SLPNO,
				상대전표처리상태코드,	PATN_SLP_PRC_STSC,
				지급결제구분코드,	PY_STL_DSC,
				경제통합정정취소구분코드,	NA_CRC_CAN_DSC,
				원전표일자,	OSLIP_DT,
				원경제통합전표번호,	OGN_NA_SLPNO,
				비고내용	RMK_CNTN
			 */
			List<Map<String, Object>> list = creditSaleService.getCreditSaleList(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C_ARR);
			ozReport.add(list);
			
			List<Map<String,Object>> ozSum = new ArrayList<Map<String,Object>>();
			Map<String, Object> sum = creditSaleService.getCreditSaleListSum(START_DATE, END_DATE, ROTS_CTR_DSC, ADJ_NA_BZPLC, TRPL_C_ARR);
			ozSum.add(sum);
			ozReport.add(ozSum);
			
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (list != null? list.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
}
