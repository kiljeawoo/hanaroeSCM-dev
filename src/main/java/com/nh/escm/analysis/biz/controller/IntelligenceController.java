package com.nh.escm.analysis.biz.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.analysis.biz.service.IntelligenceService;
import com.nh.escm.analysis.biz.vo.IntelligenceVO;

@RestController
public class IntelligenceController extends AbstractController{
	
	@Autowired
	private IntelligenceService intellservice;
	
	/*
	 * 화면ID : VAN_DS_SC_1700
	 * 화면설명 : 월별 일평균 매출추이 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveMonthlyAverageChange")
	public void retrieveMonthlyAverageChange(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
						
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			list = intellservice.monthlyAverage(TRPL_C_ARR);
			
			DataSetHelper dHelper = new DataSetHelper("ds_monthlyAverage");
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1700
	 * 화면설명 : 월별 일평균 매출추이 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelMonthlyAverageChange")
	public void downloadExcelMonthlyAverageChange(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "월별일평균매출추이.xls";
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
					"판매월",
					"수량",
					"일평균매출액(천원)"
			};
			String[] keyIndex = {
					"YMD",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			intellservice.downloadExcelMonthlyAverageChange(TRPL_C_ARR, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "월별 일평균 매출추이 조회");
			searchMap.put("권한사업장", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1710
	 * 화면설명 : 누적 매출추이 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveTotalChanges")
	public void retrieveTotalChanges(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
						
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");		
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			list = intellservice.totalChanges(TRPL_C_ARR);
			DataSetHelper dHelper = new DataSetHelper("ds_totalChanges");
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1710
	 * 화면설명 : 월별 일평균 매출추이 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTotalChanges")
	public void downloadExcelTotalChanges(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "누적매출추이.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String, Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"판매월",
					"수량",
					"매출액(천원)"
			};
			String[] keyIndex = {
					"YMD",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			intellservice.downloadExcelTotalChanges(TRPL_C_ARR, handler);
			
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "누적 매출추이 조회");
			searchMap.put("권한사업장", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1720
	 * 화면설명 : 사업장별 일평균 매출액 TOP10 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveTopStoreAverage")
	public void retrieveTopStoreAverage(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String SEPAR = requestHelper.getParameter("SEPAR");	//콤보박스데이터
			String MONTHLY = requestHelper.getParameter("SELECT_MONTHLY");	//콤보박스데이터
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			
			DataSetHelper dHelper = new DataSetHelper("ds_month");
			
			//현월 포함 콤보박스 6개월치
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(dateList.size()-1);	
			if(SEPAR.equals("1")){
				Set<String> colName = new HashSet<String>();
				colName.add("DATA_MONTH");
				colName.add("COLUMN_MONTH");
				dHelper.addColumns(colName);
				List<Map<String,Object>> dateList2 = new ArrayList<Map<String,Object>>();
				for(String d :dateList){
					Map<String,Object> map = new HashMap<String, Object>();
					map.put("DATA_MONTH", DateUtil.getDateFormat(d, "yyyy-MM"));
					map.put("COLUMN_MONTH", d);
					dateList2.add(map);
				}
				Collections.reverse(dateList2);
				for(Map<String,Object> v : dateList2){
					dHelper.setData(v);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
			}
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			//조회
			if(SEPAR.equals("2")){
				if(MONTHLY == null || MONTHLY.equals("")){
					MONTHLY = eDate;
				}
				list = intellservice.topStoreAverage(TRPL_C_ARR,MONTHLY);
			}
			dHelper = new DataSetHelper("ds_topStoreAverage");
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}

			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1720
	 * 화면설명 : 사업장별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTopStoreAverage")
	public void downloadExcelTopStoreAverage(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String MONTHLY = requestHelper.getParameter("SELECT_MONTHLY");	//콤보박스데이터
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "사업장별일평균매출액TOP10.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String, Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장",
					"수량",
					"일평균매출액(천원)"
			};
			String[] keyIndex = {
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			intellservice.downloadExcelTopStoreAverage(TRPL_C_ARR,MONTHLY, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "사업장별 일평균 매출액 TOP10 조회");
			searchMap.put("권한사업장", TRPL_C);
			searchMap.put("조회월", MONTHLY);
			handler.createSearchSheet(searchMap);			
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1730
	 * 화면설명 : 상품별 일평균 매출액 TOP10 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveTopSkuAverage")
	public void retrieveTopSkuAverage(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String SEPAR = requestHelper.getParameter("SEPAR");	//콤보박스데이터
			String MONTHLY = requestHelper.getParameter("SELECT_MONTHLY");	//콤보박스데이터
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//현월 포함 콤보박스 6개월치
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(dateList.size()-1);	
			
			DataSetHelper dHelper = new DataSetHelper("ds_month");
			
			if(SEPAR.equals("1")){
				Set<String> colName = new HashSet<String>();
				colName.add("DATA_MONTH");
				colName.add("COLUMN_MONTH");
				dHelper.addColumns(colName);
				List<Map<String,Object>> dateList2 = new ArrayList<Map<String,Object>>();
				for(String d :dateList){
					Map<String,Object> map = new HashMap<String, Object>();
					map.put("DATA_MONTH", DateUtil.getDateFormat(d, "yyyy-MM"));
					map.put("COLUMN_MONTH", d);
					dateList2.add(map);
				}
				Collections.reverse(dateList2);
				for(Map<String,Object> v : dateList2){
					dHelper.setData(v);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
			}
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			//조회
			if(SEPAR.equals("2")){
				if(MONTHLY == null || MONTHLY.equals("")){
					MONTHLY = eDate;
				}
				list = intellservice.topSkuAverage(TRPL_C_ARR,MONTHLY);
			}
			
			dHelper = new DataSetHelper("ds_topSkuAverage");
			
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1730
	 * 화면설명 : 상품별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTopSkuAverage")
	public void downloadExcelTopSkuAverage(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String MONTHLY = requestHelper.getParameter("SELECT_MONTHLY");	//콤보박스데이터
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "상품별일평균매출액TOP10.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String, Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"순위",
					"상품코드",
					"상품명",
					"수량",
					"매출액(천원)"
			};
			String[] keyIndex = {
					"RK",
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			intellservice.downloadExcelTopSkuAverage(TRPL_C_ARR,MONTHLY, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "상품별 일평균 매출액 TOP10 조회");
			searchMap.put("권한사업장", TRPL_C);
			searchMap.put("조회월", MONTHLY);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1740
	 * 화면설명 : 분류별 일평균 매출액 TOP10 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveTopMonthlyDivision")
	public void retrieveTopMonthlyDivision(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");		
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String SEPAR = requestHelper.getParameter("SEPAR");
			String MONTHLY = requestHelper.getParameter("SELECT_MONTHLY");
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(dateList.size()-1);	
			
			DataSetHelper dHelper = new DataSetHelper("ds_month");
			
			if(SEPAR.equals("1")){
				Set<String> colName = new HashSet<String>();
				colName.add("DATA_MONTH");
				colName.add("COLUMN_MONTH");
				dHelper.addColumns(colName);
				List<Map<String,Object>> dateList2 = new ArrayList<Map<String,Object>>();
				for(String d :dateList){
					Map<String,Object> map = new HashMap<String, Object>();
					map.put("DATA_MONTH", DateUtil.getDateFormat(d, "yyyy-MM"));
					map.put("COLUMN_MONTH", d);
					dateList2.add(map);
				}
				Collections.reverse(dateList2);
				for(Map<String,Object> v : dateList2){
					dHelper.setData(v);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
			}
			
			if(SEPAR.equals("2")){
				if(MONTHLY == null || MONTHLY.equals("")){
					MONTHLY = eDate;
				}
				list = intellservice.topMonthlyDivision(TRPL_C_ARR,MONTHLY);
			}
			
			dHelper = new DataSetHelper("ds_topMonthDivision");
			
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String,Object> vo : list){
				dHelper.setData(vo);
			}
			
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1740
	 * 화면설명 : 분류별 일평균 매출액 TOP10 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTopMonthlyDivision")
	public void downloadExcelTopMonthlyDivision(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String MONTHLY = requestHelper.getParameter("SELECT_MONTHLY");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "소분류별일평균매출액TOP10.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String, Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"순위",
					"소분류코드",
					"소분류명",
					"수량",
					"매출액(천원)"
			};
			String[] keyIndex = {
					"RK",
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			intellservice.downloadExcelTopMonthlyDivision(TRPL_C_ARR,MONTHLY, handler);
			
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "소분류별 일평균 매출액 TOP10 조회");
			searchMap.put("권한사업장", TRPL_C);
			searchMap.put("조회월", MONTHLY);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1750
	 * 화면설명 : 상품별 판매순위 TOP10 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveTopStore")
	public void retrieveTopStore(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(5);	//전달
			list = intellservice.topStore(TRPL_C_ARR,eDate);
			DataSetHelper dHelper = new DataSetHelper("ds_topStore");
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1750
	 * 화면설명 : 상품별 판매순위 TOP10 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTopStore")
	public void downloadExcelTopStore(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "상품별판매순위TOP10.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String, Object>> list = null;
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(5);	//전달
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"순위",
					"상품코드",
					"상품명",
					"수량",
					"매출액(천원)"
			};
			String[] keyIndex = {
					"RK",
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			intellservice.downloadExcelTopStore(TRPL_C_ARR,eDate,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "상품별 판매순위 TOP10 조회");
			searchMap.put("권한사업장", TRPL_C);
			searchMap.put("전월날짜", eDate);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1760
	 * 화면설명 : 사업장별 판매순위 TOP10 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveTopsku")
	public void retrieveTopsku(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
						
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");		
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(5);	//전달
			list = intellservice.topsku(TRPL_C_ARR,eDate);
			DataSetHelper dHelper = new DataSetHelper("ds_topsku");
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1760
	 * 화면설명 : 사업장별 판매순위 TOP10 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTopsku")
	public void downloadExcelTopsku(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "사업장별판매순위TOP10.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String, Object>> list = null;
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(5);	//전달
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"순위",
					"사업장코드",
					"사업장명",
					"수량",
					"일평균 매출액(천원)"
			};
			String[] keyIndex = {
					"RK",
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			intellservice.downloadExcelTopsku(TRPL_C_ARR,eDate,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "사업장별 판매순위 TOP10");
			searchMap.put("권한사업장", TRPL_C);
			searchMap.put("전월날짜", eDate);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1770
	 * 화면설명 : 분류별 판매순위 TOP10 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/analysis/biz/Intelligence/retrieveTopDivision")
	public void retrieveTopDivision(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//거래처코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");		
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			DataSetHelper dHelper = new DataSetHelper("ds_topDivision");
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(5);	//전달
			
			list = intellservice.topDivision(TRPL_C_ARR,eDate);
			dHelper.addColumns(IntelligenceVO.class);
			for(Map<String,Object> vo : list){
				dHelper.setData(vo);
			}
			
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1770
	 * 화면설명 : 분류별 판매순위 TOP10 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTopDivision")
	public void downloadExcelTopDivision(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "소분류별판매순위TOP10.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			List<String> dateList = DateUtil.getPreMonth(6,false);
			String eDate = dateList.get(5);	//전달
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"순위",
					"소분류코드",
					"소분류명",
					"수량",
					"매출액(천원)"
			};
			String[] keyIndex = {
					"RK",
					"CODE",
					"NAME",
					"QTY",
					"AMOUNT"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			intellservice.downloadExcelTopDivision(TRPL_C_ARR,eDate,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "소분류별 판매순위 TOP10 조회");
			searchMap.put("권한사업장", TRPL_C);
			searchMap.put("전월날짜", eDate);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
}
