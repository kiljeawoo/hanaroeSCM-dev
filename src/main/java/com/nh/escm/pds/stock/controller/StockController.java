package com.nh.escm.pds.stock.controller;

import java.util.LinkedHashMap;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
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
import com.nh.escm.pds.sales.vo.SQLMapNames.SalesPeriodSkuDetailNames;
import com.nh.escm.pds.stock.service.StockService;
import com.nh.escm.pds.stock.vo.StockBzplVO;
import com.nh.escm.pds.stock.vo.StockVO;
import com.nh.escm.util.PageHelper;

@Controller
public class StockController extends AbstractController {
	
	@Autowired
	private StockService stockservice;
	
	/*
	 * 화면ID : 공통
	 * 화면설명 : 물류센터코드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/stock/getBZPLCode")
	public void getBZPLcode(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DataSetHelper dHelper = new DataSetHelper("ds_Bzplc");
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			
			list = stockservice.getBZPLcode(TRPL_C_ARR);
			
			dHelper.addColumns(StockBzplVO.class);
			for(Map<String,Object> map:list){
				dHelper.setData(map);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0900
	 * 화면설명 : 일자별정보
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/stock/Stock/retrieveDailyStoreSum")
	public void retrieveDailyStoreSum(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			String monthVal = requestHelper.getParameter("MonthlyVal");
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DataSetHelper dHelper = new DataSetHelper("ds_daily_total");
			
			List<StockVO> stocklist = stockservice.retrieveDailyStoreSum(monthVal,TRPL_C_ARR);
			dHelper.addColumns(StockVO.class);
			for(StockVO vo:stocklist){
				dHelper.setData(vo);
			}
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0910
	 * 화면설명 : 기간별정보
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/stock/Stock/retrievePeriodSum")
	public void retrievePeriodSum(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			String monthsta = requestHelper.getParameter("start_date");
			String monthend = requestHelper.getParameter("end_date");
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DataSetHelper dHelper = new DataSetHelper("ds_daily_total");
			
			List<StockVO> stocklist = stockservice.retrievePeriodSum(monthsta,monthend,TRPL_C_ARR);
			dHelper.addColumns(StockVO.class);
			for(StockVO vo:stocklist){
				dHelper.setData(vo);
			}
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면설명 : 기간별 점포별/상품별 정보
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/stock/Stock/retrievePeriodStoreSum")
	public void retrievePeriodStoreSum(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			String monthsta = requestHelper.getParameter("start_date");
			String cbo_val = requestHelper.getParameter("cbo_val");
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String separator = requestHelper.getParameter("separator");
			
			DataSetHelper dHelper = new DataSetHelper("ds_daily_store");
			DataSetHelper dHelper2 = new DataSetHelper("ds_detail_store");
			
			if(separator.equals("1")){	//메인 페이지
				int totalRowCount = stockservice.retrievePeriodStoreSumCount(monthsta,cbo_val,TRPL_C_ARR);
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int end = pageHelper.getEnd();
				
				//total
				StockVO totalvo = stockservice.totalPeriodStoreSum(monthsta,cbo_val,TRPL_C_ARR);
				DataSetHelper totalDataSet = new DataSetHelper("ds_dataTotal");
				totalDataSet.addColumns(StockVO.class);
				totalDataSet.setData(totalvo);
				
				List<StockVO> list = stockservice.retrievePeriodStoreSum(monthsta,cbo_val,TRPL_C_ARR,start,end);
				dHelper.addColumns(StockVO.class);
				for(StockVO vo:list){
					dHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
				out_PlatformData.addDataSet(totalDataSet.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			}else if(separator.equals("2")){ //팝업페이지
				String centercode = requestHelper.getParameter("centercode");
				String phd_c = requestHelper.getParameter("phd_c");
				int totalRowCount = stockservice.retrievePeriodStoreSumCount_sub(monthsta,cbo_val,TRPL_C_ARR,centercode,phd_c);
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int end = pageHelper.getEnd();
				
				//total
				StockVO totalvo = stockservice.totalPeriodStoreSum_sub(monthsta,cbo_val,TRPL_C_ARR,centercode,phd_c);
				DataSetHelper totalDataSet = new DataSetHelper("ds_dataTotal");
				totalDataSet.addColumns(StockVO.class);
				totalDataSet.setData(totalvo);
				
				List<StockVO> list = stockservice.retrievePeriodStoreSum_sub(monthsta,cbo_val,TRPL_C_ARR,centercode,phd_c,start,end);
				dHelper2.addColumns(StockVO.class);
				for(StockVO vo:list){
					dHelper2.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper2.getDataSet());
				out_PlatformData.addDataSet(totalDataSet.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			}
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면설명 : 기간별 상품별/점포별 정보
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/stock/Stock/retrievePeriodSkuSum")
	public void retrievePeriodSkuSum(HttpServletRequest request,HttpServletResponse response){
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			String monthsta = requestHelper.getParameter("start_date");
			String monthend = requestHelper.getParameter("end_date");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String centercode = requestHelper.getParameter("centercode");
			String separator = requestHelper.getParameter("separator");
			DataSetHelper dHelper = new DataSetHelper("ds_daily_store");
			DataSetHelper dHelper2 = new DataSetHelper("ds_detail_store");
			
			
			if(separator.equals("1")){ //메인페이지
				int totalRowCount = stockservice.retrievePeriodSkuSumCount(monthsta,monthend,TRPL_C_ARR);
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int end = pageHelper.getEnd();
				
				//total
				StockVO totalvo = stockservice.totalPeriodSkuSum(monthsta,monthend,TRPL_C_ARR);
				DataSetHelper totalDataSet = new DataSetHelper("ds_dataTotal");
				totalDataSet.addColumns(StockVO.class);
				totalDataSet.setData(totalvo);
				
				List<StockVO> list = stockservice.retrievePeriodSkuSum(monthsta,monthend,TRPL_C_ARR,start,end);
				dHelper.addColumns(StockVO.class);
				for(StockVO vo:list){
					dHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
				out_PlatformData.addDataSet(totalDataSet.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			}else if(separator.equals("2")){ //팝업페이지
				int totalRowCount = stockservice.retrievePeriodSkuSumCount_sub(monthsta,monthend,TRPL_C_ARR,centercode);
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int end = pageHelper.getEnd();
				
				//total
				StockVO totalvo = stockservice.totalPeriodSkuSum_sub(monthsta,monthend,TRPL_C_ARR,centercode);
				DataSetHelper totalDataSet = new DataSetHelper("ds_dataTotal");
				totalDataSet.addColumns(StockVO.class);
				totalDataSet.setData(totalvo);
				
				List<StockVO> list = stockservice.retrievePeriodSkuSum_sub(monthsta, monthend, TRPL_C_ARR, centercode,start,end);
				dHelper2.addColumns(StockVO.class);
				for(StockVO vo:list){
					dHelper2.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper2.getDataSet());
				out_PlatformData.addDataSet(totalDataSet.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			}
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0940
	 * 화면명 : 자료수신
	 * 화면 설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelStock")
	public void downloadExcelStock(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "납품정보_자료수신_일일자료_"+DateUtil.getCurrentDate("yyyyMMdd")+ ".xls";
		
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		*/
		String fileName = request.getParameter("fileName");
		
		try {			
			String srhByDtFr = 			request.getParameter("FROM_DATE"); //조회 시작일
			String srhByDtTo = 			request.getParameter("TO_DATE"); //조회 종료일

			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"업체코드", "업체명", "사업장코드","사업장명", "상품코드","상품명","수량"};
			String[] keyIndex = {"SPLR_NA_TRPL_C", "SPLR_CLNTNM", "NA_BZPLC","SHRT_BZPLNM","NA_WRS_C","WRSNM","STPL_QT"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);					
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelStockDaliy(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "납품정보_자료수신");
			searchMap.put("조회 시작일", srhByDtFr);
			searchMap.put("조회 종료일", srhByDtTo);
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0900
	 * 화면명 : 자료수신 - 일별집계
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelDailyStoreSum")
	public void downloadExcelDailyStoreSum(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String monthVal = requestHelper.getParameter("MonthlyVal");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "일자별정보.xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"일자",
					"수량",
					"금액(천원)"
			};
			String[] keyIndex = {
					"YMD",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelDailyStoreSum(monthVal,TRPL_C_ARR, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 일별집계");
			searchMap.put("조회월", monthVal);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0910
	 * 화면명 : 자료수신 - 기간별집계
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelPeriodSum")
	public void downloadExcelPeriodSum(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String start_date = requestHelper.getParameter("start_date");
			String end_date = requestHelper.getParameter("end_date");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "기간별정보.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"일자",
					"수량",
					"금액(천원)"
			};
			String[] keyIndex = {
					"YMD",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelPeriodSum(start_date,end_date,TRPL_C_ARR, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 기간별집계");
			searchMap.put("시작날짜", start_date);
			searchMap.put("종료날짜", end_date);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0920
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 정보
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelPeriodStoreSum")
	public void downloadExcelPeriodStoreSum(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String start_date = requestHelper.getParameter("start_date");
			String cbo_val = requestHelper.getParameter("cbo_val");
			String searchText = requestHelper.getParameter("searcht");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String fileName = requestHelper.getParameter("fileName");
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장명",
					"재고수량",
					"금액",
					"물류코드"
			};
			String[] keyIndex = {
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT",
					"PHD_FCLT_C"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelPeriodStoreSum(start_date,cbo_val,searchText,TRPL_C_ARR, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 기간별 사업장별/상품별 정보");
			searchMap.put("날짜", start_date);
			searchMap.put("사업장구분", cbo_val);
			searchMap.put("사업장", searchText);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0921
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 디테일 정보
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelPeriodStoreSumDetail")
	public void downloadExcelPeriodStoreSumDetail(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String start_date = requestHelper.getParameter("start_date");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String centercode = requestHelper.getParameter("centercode");
			String phd_c = requestHelper.getParameter("phd_c");
			String fileName = requestHelper.getParameter("fileName");
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장명",
					"상품코드",
					"상품명",
					"재고수량",
					"금액(천원)",
					"물류기능코드"
			};
			String[] keyIndex = {
					"TRCODE",
					"TRNAME",
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT",
					"PHD_FCLT_C"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelPeriodStoreSumDetail(start_date,TRPL_C_ARR,centercode,phd_c,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 기간별 사업장별/상품별 디테일 정보");
			searchMap.put("조회날짜", start_date);
			searchMap.put("거래처코드", TRPL_C);
			searchMap.put("사업장코드", centercode);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0930
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 정보
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelPeriodSkuSum")
	public void downloadExcelPeriodSkuSum(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String start_date = requestHelper.getParameter("start_date");
			String end_date = requestHelper.getParameter("end_date");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String fileName = requestHelper.getParameter("fileName");
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장명",
					"재고수량",
					"금액"
			};
			String[] keyIndex = {
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelPeriodSkuSum(start_date,end_date,TRPL_C_ARR,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 기간별 사업장별/상품별 정보");
			searchMap.put("시작날짜", start_date);
			searchMap.put("종료날짜", end_date);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0931
	 * 화면명 : 자료수신 - 기간별 사업장별/상품별 디테일 정보
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelPeriodSkuSumDetail")
	public void downloadExcelPeriodSkuSumDetail(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String start_date = requestHelper.getParameter("start_date");
			String end_date = requestHelper.getParameter("end_date");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String centercode = requestHelper.getParameter("centercode");
			String bzplc = requestHelper.getParameter("bzplc");
			String fileName = requestHelper.getParameter("fileName");
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"상품코드",
					"상품명",
					"사업장코드",
					"사업장명",
					"재고수량",
					"금액(천원)"
			};
			String[] keyIndex = {
					"TRCODE",
					"TRNAME",
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelPeriodSkuSumDetail(start_date,end_date,TRPL_C_ARR,centercode,bzplc,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 기간별 사업장별/상품별 정보");
			searchMap.put("시작날짜", start_date);
			searchMap.put("종료날짜", end_date);
			searchMap.put("거래처코드", TRPL_C);
			searchMap.put("상품코드", centercode);
			searchMap.put("사업장코드", bzplc);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_0902
	 * 화면설명 : 물류센터 재고현황 상품별
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/stock/centerStock_WRS")
	public void centerStock_WRS(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");								//거래처코드
			String[] NA_TRPL_C = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String PHD_NA_BZPLC = requestHelper.getParameter("PHD_NA_BZPLC");  			//물류센터
			String WRS_P = requestHelper.getParameter("WRS_P"); 									//상품코드 구분(0:전체 1:구간)
			String WRS_C_FM_PI = requestHelper.getParameter("WRS_C_FM_PI");  //조회종료일
			String WRS_C_FM_PO = requestHelper.getParameter("WRS_C_FM_PO");  //거래구분
			String atl_yn = requestHelper.getParameter("atl_yn");  //거래구분
			
			
			PlatformData platformData = new PlatformData();
			
			String ifResult = stockservice.centerStock_WRS_IFRESULT();
			
			List<Map<String, Object>> list = stockservice.centerStock_WRS(
					NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, ifResult, atl_yn);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("ds_M");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}			
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0902
	 * 화면설명 : 물류센터 재고현황 상품별
	 * 화면설명 : 엑셀다운로드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelcenterStock_WRS")
	public void downloadExcelcenterStock_WRS(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");								//거래처코드
			String[] NA_TRPL_C = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String PHD_NA_BZPLC = requestHelper.getParameter("PHD_NA_BZPLC");  			//물류센터
			String WRS_P = requestHelper.getParameter("WRS_P"); 									//상품코드 구분(0:전체 1:구간)
			String WRS_C_FM_PI = requestHelper.getParameter("WRS_C_FM_PI");  //조회종료일
			String WRS_C_FM_PO = requestHelper.getParameter("WRS_C_FM_PO");  //거래구분
			String atl_yn = requestHelper.getParameter("atl_yn");  //거래구분
			
			String fileName = "재고현황_상품별.xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			String ifResult = stockservice.centerStock_WRS_IFRESULT();
			
			PlatformData platformData = new PlatformData();
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"상품코드",
					"상품명",
					"물류센터코드",
					"물류센터명",
					"상품등급",
					"물류기능",
					"간선여부",					
					"입수",
					"총재고-수량",
					"총재고-박스",
					"총재고-금액",
					"가용재고-수량",
					"가용재고-박스",
					"가용재고-금액",
					"일평균출고량",
					"예상소진일자",
					"할당/적송재고-수량",
					"할당/적송재고-박스",
					"할당/적송재고-금액",
					"반품재고-수량",
					"반품재고-금액"
			};
			String[] keyIndex = {
					"A1",
					"A2",
					"A3",
					"A4",
					"A20",
					"A19",
					"A21",					
					"A18",
					"A5",
					"A6",
					"A7",
					"A8",
					"A9",
					"A10",
					"A11",
					"A12",
					"A13",
					"A14",
					"A15",
					"A16",
					"A17",
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelcenterStock_WRS(
					NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, ifResult, atl_yn,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 기간별 사업장별/상품별 정보");
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0912
	 * 화면설명 : 물류센터 재고현황 일별
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/stock/centerStock_Daily")
	public void centerStock_Daily(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");							//거래처코드
			String[] NA_TRPL_C = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String PHD_NA_BZPLC = requestHelper.getParameter("PHD_NA_BZPLC");  					//물류센터
			String WRS_P = requestHelper.getParameter("WRS_P"); 								//상품코드 구분(0:전체 1:구간)
			String PHD_STPL_DT = requestHelper.getParameter("PHD_STPL_DT");  					//재고일(조회일)
			String WRS_C_FM_PI = requestHelper.getParameter("WRS_C_FM_PI");  					//조회종료일
			String WRS_C_FM_PO = requestHelper.getParameter("WRS_C_FM_PO");  					//거래구분
			
			PlatformData platformData = new PlatformData();
			
			List<Map<String, Object>> list = stockservice.centerStock_Daily(
					NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, PHD_STPL_DT);
			
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_master");
				dsHelper.addColumns(list.get(0).keySet());
				for(Map<String, Object> map : list) {
					dsHelper.setData(map);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}			
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0912
	 * 화면명 : 물류센터 재고현황 일별
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelCenterStock_Daily")
	public void downloadExcelCenterStock_Daily(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");							//거래처코드
			String[] NA_TRPL_C = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String PHD_NA_BZPLC = requestHelper.getParameter("PHD_NA_BZPLC");  					//물류센터
			String WRS_P = requestHelper.getParameter("WRS_P"); 								//상품코드 구분(0:전체 1:구간)
			String PHD_STPL_DT = requestHelper.getParameter("PHD_STPL_DT");  					//재고일(조회일)
			String WRS_C_FM_PI = requestHelper.getParameter("WRS_C_FM_PI");  					//조회종료일
			String WRS_C_FM_PO = requestHelper.getParameter("WRS_C_FM_PO");  					//거래구분
			
			String fileName = "재고현황_일별.xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"재고일자",
					"상품코드",
					"상품명",
					"물류센터코드",
					"물류센터명",
					"물류기능",
					"입수",
					"총재고-수량",
					"총재고-박스",
					"총재고-금액",
					"가용재고-수량",
					"가용재고-박스",
					"가용재고-금액",
					"일평균출고량",
					"예상소진일자",
					"반품재고-수량",
					"반품재고-금액"
			};
			String[] keyIndex = {
					"A3",
					"A8",
					"A9",
					"A1",
					"A2",
					"A4",
					"A12",
					"A15",
					"A30",
					"A31",
					"A17",
					"A32",
					"A33",
					"A34",
					"A35",
					"A29",
					"A36"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			stockservice.downloadExcelCenterStock_Daily(
					NA_TRPL_C, PHD_NA_BZPLC, WRS_P, WRS_C_FM_PI, WRS_C_FM_PO, PHD_STPL_DT, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자료수신 - 기간별 사업장별/상품별 정보");
			searchMap.put("조회날짜", PHD_STPL_DT);
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
}
