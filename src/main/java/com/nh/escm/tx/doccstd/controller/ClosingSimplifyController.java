package com.nh.escm.tx.doccstd.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.common.ClientHolder;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMaker;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;
import com.nh.escm.tx.doccstd.service.ClosingSimplifyService;
import com.nh.escm.util.PageHelper;

@RestController
public class ClosingSimplifyController extends AbstractController {

	@Autowired
	private ClosingSimplifyService closingSimplifyService;

	/**
	 * 마감간소화 조회 화면
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/retrieveList")
	public void retrieveClosingSimplifyList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		final Map<String, Object> param = new HashMap<String, Object>();
		param.put("CRT_YM", dsCondition.getString(0, "CRT_YM"));
		param.put("EQUAL_YN", dsCondition.getString(0, "EQUAL_YN"));
		param.put("NA_TOT_DSC", dsCondition.getString(0, "NA_TOT_DSC"));
		param.put("BZPLC_TPC", dsCondition.getString(0, "BZPLC_TPC"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("TXT_DSC", dsCondition.getString(0, "TXT_DSC"));
//		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		
		String TRPL_C = dsCondition.getString(0, "NA_TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		param.put("NA_TRPL_C", TRPL_C_ARR);
		
		String PAGE_DSC = dsCondition.getString(0, "PAGE_DSC");
		
		PlatformData platformData = new PlatformData();
		
		// 조회기간 검증
		if (!isAvailableCrtYm(dsCondition.getString(0, "CRT_YM"))) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		System.out.println("[TEST] PAGE_DSC : " + PAGE_DSC);

		// Paging (간소화 데이터)
		int totalSimplifyCount = 0;
		PageHelper pageHelperS = null;
		int startS = 0;
		int endS = 0;
		if (StringUtils.isEmpty(PAGE_DSC) || "S".equals(PAGE_DSC)) {
			totalSimplifyCount = closingSimplifyService.retrieveClosingSimplifyListCount(param);
			pageHelperS = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalSimplifyCount, "ds_pageVO");
			startS = pageHelperS.getStart();
			endS = pageHelperS.getEnd();
		}
		
		// Paging (세무매입 데이터)
		int totalByngCount = 0;
		PageHelper pageHelperB = null;
		int startB = 0;
		int endB = 0;
		if (StringUtils.isEmpty(PAGE_DSC) || "B".equals(PAGE_DSC)) {
			totalByngCount = closingSimplifyService.retrieveByngSimplifyListCount(param);
			pageHelperB = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO2"), totalByngCount, "ds_pageVO2");
			startB = pageHelperB.getStart();
			endB = pageHelperB.getEnd();
		}

		try {
			// 간소화 데이터 조회
			if (totalSimplifyCount > 0) {
				// 속도성능을 위해 요약데이터는 1페이지에서만 조회
				if (pageHelperS.getCurrentPage() == 1) {
					List<Map<String, Object>> simplifySumList = closingSimplifyService.retrieveClosingSimplifySummaryList(param);
					DataSetHelper dsHelperSS = new DataSetHelper("ds_summary");
					if (dsHelperSS != null && simplifySumList.size() > 0) {
						dsHelperSS.addColumns(simplifySumList.get(0).keySet());
						for (Map<String, Object> map : simplifySumList) {
							dsHelperSS.setData(map);
						}
					}
					platformData.addDataSet(dsHelperSS.getDataSet());
				}
	
				List<Map<String, Object>> simplifyList = closingSimplifyService.retrieveClosingSimplifyList(param, startS, endS);
				DataSetHelper dsHelperS = new DataSetHelper("ds_simplify");
				if (dsHelperS != null && simplifyList.size() > 0) {
					dsHelperS.addColumns(simplifyList.get(0).keySet());
					for (Map<String, Object> map : simplifyList) {
						dsHelperS.setData(map);
					}
				}
	
				platformData.addDataSet(pageHelperS.getDsPageVo());
				platformData.addDataSet(dsHelperS.getDataSet());
			}

			// 세무매입 데이터 조회
			if (totalByngCount > 0) {
				// 속도성능을 위해 요약데이터는 1페이지에서만 조회
				if (pageHelperB.getCurrentPage() == 1) {
					List<Map<String, Object>> byngSumList = closingSimplifyService.retrieveByngSimplifySummaryList(param);
					DataSetHelper dsHelperBS = new DataSetHelper("ds_summary3");
					if (dsHelperBS != null && byngSumList.size() > 0) {
						dsHelperBS.addColumns(byngSumList.get(0).keySet());
						for (Map<String, Object> map : byngSumList) {
							dsHelperBS.setData(map);
						}
					}
					platformData.addDataSet(dsHelperBS.getDataSet());
				}
				
				List<Map<String, Object>> byngList = closingSimplifyService.retrieveByngSimplifyList(param, startB, endB);
				DataSetHelper dsHelperB = new DataSetHelper("ds_tax");
				if (dsHelperB != null && byngList.size() > 0) {
					dsHelperB.addColumns(byngList.get(0).keySet());
					for (Map<String, Object> map : byngList) {
						dsHelperB.setData(map);
					}
				}
	
				platformData.addDataSet(pageHelperB.getDsPageVo());
				platformData.addDataSet(dsHelperB.getDataSet());
			}
			
			sendData(response, platformData);
			
			/* 빌링로직 시작 START (전체 데이터 과금이므로 1페이지 조회 시에만) */
			if (pageHelperS != null && pageHelperS.getCurrentPage() == 1) {
				String GLN = requestHelper.getGlnCode();
				String MB_ID = requestHelper.getUserID();

				if ("Y".equals(ClientHolder.getTransYn())) {
					// 관리자가 사용자전환으로 로그인한 경우, 과금하지 않는다.
					logger.info("markUpForSimplify(" + BillingMarkUpTableName.TB_BY_BYNG_M + ", " + GLN + ", " + MB_ID + ") -> 사용자전환 과금 제외!!");
				} else {
					param.put("GLN", GLN);
					param.put("MB_ID", MB_ID);
					
					new Thread(new Runnable() {
						@Override
						public void run() {
							closingSimplifyService.markUpForSimplifyByList(closingSimplifyService.retrieveClosingSimplifyMarkupList(param));
//							closingSimplifyService.markUpForSimplify(param);
						}
					}).start();
				}
			}
			/* 빌링로직 시작 END */
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 조회 엑셀 다운로드
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/excel/retrieveList")
	public void excelClosingSimplifyList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String dsXml = requestHelper.getParameter("xml");
		String dsc = requestHelper.getParameter("dsc");
		String type = requestHelper.getParameter("type");
		String[] cond = dsXml.split("@");
		
		// 조회기간 검증
		if (!isAvailableCrtYm(cond[0])) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CRT_YM", cond[0]);
		param.put("EQUAL_YN", cond[1]);
		param.put("NA_TOT_DSC", cond[2]);
		param.put("BZPLC_TPC", cond[3]);
		param.put("NA_BZPLC", cond[4]);
		param.put("TXT_DSC", cond[5]);
//		param.put("TXBIL_KD", cond[5]);
		
		String TRPL_C = cond[6];
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		param.put("NA_TRPL_C", TRPL_C_ARR);
		
		try {
			String fileName;
			String headerStr;
			String keyStr;
			List<Map<String, Object>> simplifyList = null;
			
			if ("all".equals(dsc)) {
				// 상세조회
				List<Map<String, Object>> simplifySumList = closingSimplifyService.retrieveClosingSimplifySummaryList(param);
				simplifySumList.get(0).put("NA_TRPL_C", "총계");
				simplifySumList.get(0).put("PBC_SQNO", simplifySumList.get(0).get("CNT") + "건");
				
				if ("SLP".equals(type)) {
					fileName = "마감간소화_마스터_전표별_상세(" + cond[0] + ").xlsx";
					headerStr = "매출사업장|매출사업장명|매입사업장|매입사업장명|집계구분|계산서 구분|과세 구분|세금계산서승인번호|금액일치여부|세금계산서합계액|매입일자|전표번호|매입공급금액|매입부가세|매입총공급금액";
					keyStr = "NA_TRPL_C|NA_TRPLNM|NA_BZPLC|NA_BZPLNM|NA_TOT_DSNM|TXBIL_KDNM|TXT_DSNM|PBC_SQNO|EQ_YN|TAX_TOT_AM|TR_DT|NA_SLPNO|SLP_BYAM|SLP_VAT|SLP_TOT_AM";
				} else {
					fileName = "마감간소화_마스터_상품별_상세(" + cond[0] + ").xlsx";
					headerStr = "매출사업장|매출사업장명|매입사업장|매입사업장명|집계구분|계산서 구분|과세 구분|세금계산서승인번호|금액일치여부|세금계산서합계액|매입일자|상품코드|상품명|규격|매입단가|매입수량|매입공급금액|매입부가세|매입총공급금액";
					keyStr = "NA_TRPL_C|NA_TRPLNM|NA_BZPLC|NA_BZPLNM|NA_TOT_DSNM|TXBIL_KDNM|TXT_DSNM|PBC_SQNO|EQ_YN|TAX_TOT_AM|TR_DT|NA_WRS_C|WRSNM|WRS_STDNM|BYNG_UPR|BYNG_QT|SLP_BYAM|SLP_VAT|SLP_TOT_AM";
				}
				simplifyList = closingSimplifyService.excelClosingSimplifyAllList(param, type);
				simplifyList.add(0, simplifySumList.get(0));
			} else {
				// 리스트조회
				fileName = "마감간소화_마스터(" + cond[0] + ").xlsx";
				headerStr = "매출사업장|매출사업장명|매입사업장|매입사업장명|집계구분|계산서 구분|과세 구분|금액일치여부|세금계산서승인번호|세금계산서합계액|매입공급금액|매입부가세|매입총공급금액|배송금액|배송부가세";
				keyStr = "NA_TRPL_C|NA_TRPLNM|NA_BZPLC|NA_BZPLNM|NA_TOT_DSNM|TXBIL_KDNM|TXT_DSNM|EQ_YN|PBC_SQNO|TAX_TOT_AM|SLP_BYAM|SLP_VAT|SLP_TOT_AM|DVY_AM|DVY_VAT";
				simplifyList = closingSimplifyService.retrieveClosingSimplifyList(param, 0, 999999);
			}
			
			String[] header = headerStr.split("\\|");
			String[] keyIndex = keyStr.split("\\|");
			
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}

			// 데이터 시트
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			AbstractModel model = new DefaultModel("마감간소화", header, keyIndex, simplifyList);
			excelMaker.createDataSheet(model);
			for (int j = 0; j < header.length; j++) {
				excelMaker.getDataSheet().autoSizeColumn(j);
				excelMaker.getDataSheet().setColumnWidth(j, (excelMaker.getDataSheet().getColumnWidth(j)) + (short) 1024);
			}
			
			// 검색조건 시트
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("거래월", cond[0]);
			searchMap.put("금액일치여부", cond[1]);
//			searchMap.put("발행구분", cond[2]);
			if (!"all".equals(cond[3])) {
				searchMap.put("정산처코드", cond[4]);
			}
			searchMap.put("계산서종류", cond[5]);
			searchMap.put("사업장", TRPL_C);
			excelMaker.createSearchSheet(searchMap);
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 조회 리포트 출력
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/oz/retrieveList")
	public RestResult printClosingSimplifyList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		// 조회기간 검증
		if (!isAvailableCrtYm(cond[0])) {
			return new RestResult(ErrorCode.FAILURE, "조회할 수 없는 기간입니다.");
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CRT_YM", cond[0]);
		param.put("EQUAL_YN", cond[1]);
		param.put("NA_TOT_DSC", cond[2]);
		param.put("BZPLC_TPC", cond[3]);
		param.put("NA_BZPLC", cond[4]);
		param.put("TXT_DSC", cond[5]);
//		param.put("TXBIL_KD", cond[5]);
		
		String TRPL_C = cond[6];
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		param.put("NA_TRPL_C", TRPL_C_ARR);
		
		try {
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<Map<String, Object>> _searchList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> _simplifyList = closingSimplifyService.retrieveClosingSimplifyList(param, 0, 999999);
			
			_searchList.add(param);
			
			all_list.add(_searchList);
			all_list.add(_simplifyList);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}

	/**
	 * 마감간소화 상세조회(전표별, 상품별)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/retrieveDetailList")
	public void retrieveClosingSimplifyDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String type = requestHelper.getParameter("type"); // 조회유형 SLP, WRS
		DataSet dsCondition = requestHelper.getDataSet("ds_simplify");
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", dsCondition.getString(0, "PBC_SQNO"));
		param.put("NA_TRPL_C", dsCondition.getString(0, "NA_TRPL_C"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("TXT_DSC", dsCondition.getString(0, "TXT_DSC"));
		param.put("CRT_YM", dsCondition.getString(0, "CRT_YM"));
		
		PlatformData platformData = new PlatformData();
		
		// 조회기간 검증
		if (!isAvailableCrtYm(dsCondition.getString(0, "CRT_YM"))) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		
		try {
			List<Map<String, Object>> simplifyList = closingSimplifyService.retrieveClosingSimplifyDetail(param, type);
			DataSetHelper dsHelper = new DataSetHelper("ds_detail");
			if (dsHelper != null && simplifyList.size() > 0) {
				dsHelper.addColumns(simplifyList.get(0).keySet());
				for (Map<String, Object> map : simplifyList) {
					dsHelper.setData(map);
				}
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 상세조회 엑셀 다운로드 (전표별, 상품별)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/excel/retrieveDetailList")
	public void excelClosingSimplifyDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String type = requestHelper.getParameter("type"); // 조회유형 SLP, WRS
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");

		// 조회기간 검증
		if (!isAvailableCrtYm(cond[4])) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", cond[0]);
		param.put("NA_TRPL_C", cond[1]);
		param.put("NA_BZPLC", cond[2]);
		param.put("TXT_DSC", cond[3]);
		param.put("CRT_YM", cond[4]);
		
		try {
			List<Map<String, Object>> simplifyList = closingSimplifyService.retrieveClosingSimplifyDetail(param, type);

			String fileName;
			String headerStr;
			String keyStr;
			
			if ("SLP".equals(type)) {
				fileName = "마감간소화_전표별_상세(";
				headerStr = "매입사업장|매입사업장명|거래구분|매입일자|전표번호|공급금액|매입부가세|총공급금액|배송예정서번호|전표상태|배송금액|배송부가세";
				keyStr = "NA_BZPLC|NA_BZPLNM|NA_TR_DSC|TR_DT|NA_SLPNO|BYAM|BYNG_VAT|TOT_AM|DVY_SLPNO|DVY_STSC|DVY_AM|DVY_VAT";
			} else {
				fileName = "마감간소화_상품별_상세(";
				headerStr = "상품코드|상품명|규격|과세구분|매입단가|매입수량|공급금액|부가세|총공급금액";
				keyStr = "NA_WRS_C|WRSNM|WRS_STDNM|TXT_DSC|BYNG_UPR|BYNG_QT|BYAM|BYNG_VAT|TOT_AM";
			}
			fileName += cond[4] + "," + cond[0] + ").xlsx";
			
			String[] header = headerStr.split("\\|");
			String[] keyIndex = keyStr.split("\\|");
			
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}

			// 데이터 시트
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			AbstractModel model = new DefaultModel("마감간소화", header, keyIndex, simplifyList);
			excelMaker.createDataSheet(model);
			for (int j = 0; j < header.length; j++) {
				excelMaker.getDataSheet().autoSizeColumn(j);
				excelMaker.getDataSheet().setColumnWidth(j, (excelMaker.getDataSheet().getColumnWidth(j)) + (short) 1024);
			}
			
			// 검색조건 시트
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("(세금)계산서 승인번호", cond[0]);
			searchMap.put("매출사업장", cond[1]);
			searchMap.put("매입사업장", cond[2]);
			searchMap.put("과세여부", cond[3]);
			searchMap.put("거래월", cond[4]);
			excelMaker.createSearchSheet(searchMap);
						
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 상세조회 리포트 출력 (전표별, 상품별)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/oz/retrieveDetailList")
	public RestResult printClosingSimplifyDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String type = requestHelper.getParameter("type"); // 조회유형 SLP, WRS
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		// 조회기간 검증
		if (!isAvailableCrtYm(cond[4])) {
			return new RestResult(ErrorCode.FAILURE, "조회할 수 없는 기간입니다.");
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", cond[0]);
		param.put("NA_TRPL_C", cond[1]);
		param.put("NA_BZPLC", cond[2]);
		param.put("TXT_DSC", cond[3]);
		param.put("CRT_YM", cond[4]);
		param.put("NA_TRPLNM", cond[5]);
		param.put("TAX_SPRTT", cond[6]);
		param.put("TAX_TXA_TT", cond[7]);
		param.put("TAX_TOT_AM", cond[8]);
		
		try {
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<Map<String, Object>> _searchList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> _simplifyList = closingSimplifyService.retrieveClosingSimplifyDetail(param, type);
			
			_searchList.add(param);
			
			all_list.add(_searchList);
			all_list.add(_simplifyList);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/**
	 * 마감간소화 상세조회2(전표별_상품상세, 상품별_전표상세)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/retrieveSubDetailList")
	public void retrieveClosingSimplifySubDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String type = requestHelper.getParameter("type"); // 조회유형 WRS(전표별_상품상세), SLP(상품별_전표상세)
		String txtDsc = requestHelper.getParameter("txtdsc"); // 과세여부
		DataSet dsCondition = requestHelper.getDataSet("ds_detail");
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", dsCondition.getString(0, "NA_TRPL_C"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("TXT_DSC", txtDsc);
		param.put("DVY_SLPNO", dsCondition.getString(0, "DVY_SLPNO"));

		if ("WRS".equals(type)) {
			param.put("TR_DT", dsCondition.getString(0, "TR_DT"));
			param.put("NA_SLPNO", dsCondition.getString(0, "NA_SLPNO"));
		} else if ("SLP".equals(type)) {
			param.put("CRT_YM", dsCondition.getString(0, "CRT_YM"));
			param.put("NA_WRS_C", dsCondition.getString(0, "NA_WRS_C"));
			param.put("BYNG_UPR", dsCondition.getString(0, "BYNG_UPR"));
		}
		
		PlatformData platformData = new PlatformData();
		try {
			List<Map<String, Object>> simplifyList = closingSimplifyService.retrieveClosingSimplifySubDetail(param, type);
			DataSetHelper dsHelper = new DataSetHelper("ds_detail");
			if (dsHelper != null && simplifyList.size() > 0) {
				dsHelper.addColumns(simplifyList.get(0).keySet());
				for (Map<String, Object> map : simplifyList) {
					dsHelper.setData(map);
				}
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 상세조회2 엑셀 다운로드 (전표별_상품상세, 상품별_전표상세)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/excel/retrieveSubDetailList")
	public void excelClosingSimplifySubDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String type = requestHelper.getParameter("type"); // 조회유형 WRS(전표별_상품상세), SLP(상품별_전표상세)
		String txtDsc = requestHelper.getParameter("txtdsc"); // 과세여부
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", cond[0]);
		param.put("NA_BZPLC", cond[1]);
		param.put("TXT_DSC", txtDsc);

		if ("WRS".equals(type)) {
			param.put("TR_DT", cond[2]);
			param.put("NA_SLPNO", cond[3]);
			param.put("DVY_SLPNO", cond[4]);
		} else if ("SLP".equals(type)) {
			param.put("CRT_YM", cond[2]);
			param.put("NA_WRS_C", cond[3]);
			param.put("BYNG_UPR", cond[5]);
		}
		
		try {
			List<Map<String, Object>> simplifyList = closingSimplifyService.retrieveClosingSimplifySubDetail(param, type);
			
			String fileName;
			String headerStr;
			String keyStr;
			
			if ("SLP".equals(type)) {
				fileName = "마감간소화_상품별_전표상세(" + cond[2] + "," + cond[3] + "_" + cond[4].replaceAll("\\s", "_") + ").xlsx";
				headerStr = "매입사업장|매입사업장명|매입일자|전표번호|매입수량|공급금액|부가세|총공급금액|배송예정서번호|전표상태|배송예정수량|배송금액|배송부가세";
				keyStr = "NA_BZPLC|NA_BZPLNM|TR_DT|NA_SLPNO|BYNG_QT|BYAM|BYNG_VAT|TOT_AM|NA_DVY_PLASH_SLPNO|DVY_STSC|DVY_QT|DVY_AM|DVY_VAT";
			} else {
				fileName = "마감간소화_전표별_상품상세(" + cond[2] + "," + cond[3] + ").xlsx";
				headerStr = "상품코드|상품명|과세구분|매입단가|매입수량|공급금액|부가세|총공급금액|전표상태|배송예정수량|배송상품단가|배송금액|배송부가세";
				keyStr = "NA_WRS_C|WRSNM|TXT_DSC|BYNG_UPR|BYNG_QT|BYAM|BYNG_VAT|TOT_AM|DVY_STSC|DVY_QT|DVY_WRS_UPR|DVY_AM|DVY_VAT";
			}
			
			String[] header = headerStr.split("\\|");
			String[] keyIndex = keyStr.split("\\|");
			
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}

			// 데이터 시트
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			AbstractModel model = new DefaultModel("마감간소화", header, keyIndex, simplifyList);
			excelMaker.createDataSheet(model);
			for (int j = 0; j < header.length; j++) {
				excelMaker.getDataSheet().autoSizeColumn(j);
				excelMaker.getDataSheet().setColumnWidth(j, (excelMaker.getDataSheet().getColumnWidth(j)) + (short) 1024);
			}

			// 검색조건 시트
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("매출사업장", cond[0]);
			searchMap.put("매입사업장", cond[1]);
			searchMap.put("과세여부", txtDsc);

			if ("WRS".equals(type)) {
				searchMap.put("매입일자", cond[2]);
				searchMap.put("전표번호", cond[3]);
			} else if ("SLP".equals(type)) {
				searchMap.put("거래월", cond[2]);
				searchMap.put("상품코드", cond[3]);
			}
			excelMaker.createSearchSheet(searchMap);
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 상세조회2 리포트 출력 (전표별_상품상세, 상품별_전표상세)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/oz/retrieveSubDetailList")
	public RestResult printClosingSimplifySubDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String type = requestHelper.getParameter("type"); // 조회유형 WRS(전표별_상품상세), SLP(상품별_전표상세)
		String txtDsc = requestHelper.getParameter("txtdsc"); // 과세여부
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", cond[0]);
		param.put("NA_BZPLC", cond[1]);
		param.put("TXT_DSC", txtDsc);

		param.put("NA_TR_DSC", cond[4]);
		param.put("BYAM", cond[5]);
		param.put("BYNG_VAT", cond[6]);
		param.put("TOT_AM", cond[7]);
		
		if ("WRS".equals(type)) {
			param.put("TR_DT", cond[2]);
			param.put("NA_SLPNO", cond[3]);
			param.put("NA_BZPLNM", cond[8]);
			param.put("CRT_YM", cond[9]);
			param.put("DVY_SLPNO", cond[10]);
		} else if ("SLP".equals(type)) {
			param.put("CRT_YM", cond[2]);
			param.put("NA_WRS_C", cond[3]);
			param.put("WRS_STDNM", cond[8]);
			param.put("BYNG_QT", cond[9]);
			param.put("TXT_DSNM", cond[10]);
			param.put("WRSNM", cond[11]);
			param.put("BYNG_UPR", cond[12]);
		}
		
		try {
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<Map<String, Object>> _searchList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> _simplifyList = closingSimplifyService.retrieveClosingSimplifySubDetail(param, type);
			
			_searchList.add(param);
			
			all_list.add(_searchList);
			all_list.add(_simplifyList);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/retrieveSummary")
	public void retrieveClosingSimplifyMarkupSummary(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		final Map<String, Object> param = new HashMap<String, Object>();
		param.put("CRT_YM", dsCondition.getString(0, "CRT_YM"));
		
		String TRPL_C = dsCondition.getString(0, "NA_TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		param.put("NA_TRPL_C", TRPL_C_ARR);
		
		PlatformData platformData = new PlatformData();
		
		// 조회기간 검증
		if (!isAvailableCrtYm(dsCondition.getString(0, "CRT_YM"))) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		
		try {
			// 과금 예측정보
			List<Map<String, Object>> summList = closingSimplifyService.retrieveClosingSimplifyMarkupSummary(param);
			DataSetHelper dsHelper3 = new DataSetHelper("ds_summary2");
			if (dsHelper3 != null && summList.size() > 0) {
				dsHelper3.addColumns(summList.get(0).keySet());
				for (Map<String, Object> map : summList) {
					dsHelper3.setData(map);
				}
			}
			platformData.addDataSet(dsHelper3.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 조회 엑셀 다운로드
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/excel/retrieveByngList")
	public void excelClosingByngList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		// 조회기간 검증
		if (!isAvailableCrtYm(cond[0])) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CRT_YM", cond[0]);
		param.put("EQUAL_YN", cond[1]);
		param.put("NA_TOT_DSC", cond[2]);
		param.put("BZPLC_TPC", cond[3]);
		param.put("NA_BZPLC", cond[4]);
		param.put("TXT_DSC", cond[5]);
//		param.put("TXBIL_KD", cond[5]);
		
		String TRPL_C = cond[6];
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		param.put("NA_TRPL_C", TRPL_C_ARR);
		
		try {
			String fileName;
			String headerStr;
			String keyStr;
			List<Map<String, Object>> byngList = null;
			
			// 리스트조회
			fileName = "마감간소화_세무매입(" + cond[0] + ").xlsx";
			headerStr = "계산서구분코드|집계구분|사업장코드|거래처명|사업장사업자등록번호|사업장팀명|고객명|거래처실명번호|거래일자|순공급금액|순부가세|매수|세무유형구분|품목명|세무집계등록일련번호";
			keyStr = "NA_SOAC_DSNM|NA_TOT_DSNM|NA_BZPLC|NA_BZPLNM|BZPL_BZNO|NA_TEAM_C|NA_TRPL_NM|TRPL_RLNO|TXBZ_DFN_DT|SPY_AM|VAT|PUC|TXBZ_TP_DSNM|LATCNM|TXBZ_TOT_RG_SQNO";
			byngList = closingSimplifyService.retrieveByngSimplifyList(param, 0, 999999);
			
			
			
			String[] header = headerStr.split("\\|");
			String[] keyIndex = keyStr.split("\\|");
			
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}

			// 데이터 시트
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			AbstractModel model = new DefaultModel("세무매입", header, keyIndex, byngList);
			excelMaker.createDataSheet(model);
			for (int j = 0; j < header.length; j++) {
				excelMaker.getDataSheet().autoSizeColumn(j);
				excelMaker.getDataSheet().setColumnWidth(j, (excelMaker.getDataSheet().getColumnWidth(j)) + (short) 1024);
			}
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 조회 리포트 출력
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/oz/retrieveByngList")
	public RestResult printClosingByngList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		// 조회기간 검증
		if (!isAvailableCrtYm(cond[0])) {
			return new RestResult(ErrorCode.FAILURE, "조회할 수 없는 기간입니다.");
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CRT_YM", cond[0]);
		param.put("EQUAL_YN", cond[1]);
		param.put("NA_TOT_DSC", cond[2]);
		param.put("BZPLC_TPC", cond[3]);
		param.put("NA_BZPLC", cond[4]);
		param.put("TXT_DSC", cond[5]);
//		param.put("TXBIL_KD", cond[5]);
		
		String TRPL_C = cond[6];
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		param.put("NA_TRPL_C", TRPL_C_ARR);
		
		try {
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<Map<String, Object>> _searchList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> _byngList = closingSimplifyService.retrieveByngSimplifyList(param, 0, 999999);
			
			_searchList.add(param);
			
			all_list.add(_searchList);
			all_list.add(_byngList);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/**
	 * 마감간소화 수수료 세금계산서 상세조회
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/retrieveByngDetailList")
	public void retrieveByngDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_tax");
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", dsCondition.getString(0, "NA_TRPL_C"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("CRT_YM", dsCondition.getString(0, "CRT_YM"));
		
		PlatformData platformData = new PlatformData();
		
		// 조회기간 검증
		if (!isAvailableCrtYm(dsCondition.getString(0, "CRT_YM"))) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		
		try {
			List<Map<String, Object>> byngList = closingSimplifyService.retrieveByngSimplifyDetailList(param);
			DataSetHelper dsHelper = new DataSetHelper("ds_detail");
			if (dsHelper != null && byngList.size() > 0) {
				dsHelper.addColumns(byngList.get(0).keySet());
				for (Map<String, Object> map : byngList) {
					dsHelper.setData(map);
				}
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 수수료 세금계산서 엑셀 다운로드
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/excel/retrieveByngDetailList")
	public void excelClosingByngDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		// 조회기간 검증
		if (!isAvailableCrtYm(cond[2])) {
			sendData(response, new PlatformData(), -2, "조회할 수 없는 기간입니다.");
			return;
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", cond[0]);
		param.put("NA_BZPLC", cond[1]);
		param.put("CRT_YM", cond[2]);
		
		try {
			String fileName;
			String headerStr;
			String keyStr;
			List<Map<String, Object>> byngList = null;
			
			// 리스트조회
			fileName = "마감간소화_수수료_세금계산서(" + cond[2] + ").xlsx";
			headerStr = "사업장코드|사업장명|매출일자|전표번호|업체별수수료|매입장려금|관리수수료(R2)|관리부가세(R2)|관리수수료(R1)|물류수수료|물류부가세|운송수수료|운송부가세|기타수수료|기타부가세";
			keyStr = "NA_BZPLC|NA_BZPLNM|TR_DT|NA_SLPNO|COMP_FEE|BYNG_SSDY|ETR_AMN_FEE|ETR_AMN_VAT|SLGT_AMN_FEE|PHD_FEE|PHD_FEE_VAT|TRP_SVC_CST|TRP_SVCOS_VAT|ETC_FEE|ETC_FEE_VAT";
			byngList = closingSimplifyService.retrieveByngSimplifyDetailList(param);
			
			String[] header = headerStr.split("\\|");
			String[] keyIndex = keyStr.split("\\|");
			
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}

			// 데이터 시트
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			AbstractModel model = new DefaultModel("수수료세금계산서", header, keyIndex, byngList);
			excelMaker.createDataSheet(model);
			for (int j = 0; j < header.length; j++) {
				excelMaker.getDataSheet().autoSizeColumn(j);
				excelMaker.getDataSheet().setColumnWidth(j, (excelMaker.getDataSheet().getColumnWidth(j)) + (short) 1024);
			}
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 마감간소화 수수료 세금계산서 조회 리포트 출력
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/tx/simplify/oz/retrieveByngDetailList")
	public RestResult printClosingByngDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String dsXml = requestHelper.getParameter("xml");
		String[] cond = dsXml.split("@");
		
		// 조회기간 검증
		if (!isAvailableCrtYm(cond[2])) {
			return new RestResult(ErrorCode.FAILURE, "조회할 수 없는 기간입니다.");
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", cond[0]);
		param.put("NA_BZPLC", cond[1]);
		param.put("CRT_YM", cond[2]);
		param.put("TXBZ_TOT_RG_SQNO", cond[3]);
		param.put("TXBZ_DFN_DT", cond[4]);
		param.put("TXBZ_TP_DSNM", cond[5]);
		param.put("NA_BZPLNM", cond[6]);
		param.put("NA_TRPL_NM", cond[7]);
		param.put("LATCNM", cond[8]);
		param.put("SPY_AM", cond[9]);
		param.put("VAT", cond[10]);
		
		try {
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<Map<String, Object>> _searchList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> _byngList = closingSimplifyService.retrieveByngSimplifyDetailList(param);
			
			_searchList.add(param);
			
			all_list.add(_searchList);
			all_list.add(_byngList);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}

	
	/**
	 * 조회기간 검사(당월포함 24개월 허용)
	 * @param CRT_YM 조회월
	 * @return 조회가능여부
	 */
	private boolean isAvailableCrtYm(String CRT_YM) {
		/* 정상 조회기간 */
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
		Calendar cal = Calendar.getInstance();
		String maxYM = sdf.format(cal.getTime());
		cal.add(Calendar.MONTH, -23);
		String minYM = sdf.format(cal.getTime());

		boolean min = CRT_YM.compareTo(minYM) > -1;
		boolean max = CRT_YM.compareTo(maxYM) < 1;

		return min && max;
	}
}