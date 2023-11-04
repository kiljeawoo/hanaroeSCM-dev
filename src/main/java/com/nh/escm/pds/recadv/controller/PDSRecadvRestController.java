package com.nh.escm.pds.recadv.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.recadv.service.PDSRecadvService;
import com.nh.escm.pds.recadv.vo.PDSRecadvDailyStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvFeeAmn;
import com.nh.escm.pds.recadv.vo.PDSRecadvNPeriodStoreSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvNPeriodStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSkuSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSkuSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumDetailVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodStoreSumVO;
import com.nh.escm.pds.recadv.vo.PDSRecadvPeriodSumVO;
import com.nh.escm.pds.recadv.vo.TrplList;
import com.nh.escm.util.PageHelper;
/**
 * 납품정보
 * @author swha
 *
 */
@RestController
public class PDSRecadvRestController  extends AbstractController {
	
	@Autowired
	private PDSRecadvService pdsRecadvService;
	
	
	/*
	 * 화면ID : VAN_DS_SC1000
	 * 화면명 : 월간정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveDailyStoreSum")
	public void retrieveDailyStoreSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDt = 		requestHelper.getParameter("BY_DT"); //조회월
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<PDSRecadvDailyStoreSumVO> list = pdsRecadvService.retrieveDailyStoreSum(srhByDt, TRPL_C_ARR);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvDailyStoreSumVO.class);
				
				for(PDSRecadvDailyStoreSumVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1000
	 * 화면명 : 월간정보
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelDailyStoreSum")
	public void downloadExcelDailyStoreSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String byDt = request.getParameter("BY_DT"); // 조회월
			String fileName	= request.getParameter("fileName");
			String TRPL_C = request.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{"일자", "수량", "금액(천원)"};
			String[] keyIndex = new String[]{"BY_DT", "BY_QT", "BY_AM"};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelDailyStoreSum(byDt, TRPL_C_ARR, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회 월", byDt);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1010
	 * 화면명 : 기간별정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrievePeriodSum")
	public void retrievePeriodSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String byDtFr 				= requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 				= requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String TRPL_C 				= requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			
			List<PDSRecadvPeriodSumVO> list = pdsRecadvService.retrievePeriodSum(byDtFr, byDtTo, TRPL_C_ARR);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvPeriodSumVO.class);
				
				for(PDSRecadvPeriodSumVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1010
	 * 화면명 : 기간별정보
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelPeriodSum")
	public void downloadExcelPeriodSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String byDtFr				= request.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 				= request.getParameter("BY_DT_TO"); //조회 종료일
			String fileName 			= request.getParameter("fileName");//파일명
			String TRPL_C 				= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{"일자", "수량", "금액(천원)"};
			String[] keyIndex = new String[]{"BY_DT", "BY_QT", "BY_AM"};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelPeriodSum(byDtFr, byDtTo, TRPL_C_ARR, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회 시작일", byDtFr);
			searchMap.put("조회 종료일", byDtTo);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1020
	 * 화면명 : 기간별 사업장별/상품별 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrievePeriodStoreSum")
	public void retrievePeriodStroeSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDtFr 			= requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo			= requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String TRPL_C 				= requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String searchType = requestHelper.getParameter("searchType");
			String searchStr = requestHelper.getParameter("searchStr");
			
			int totalRowCount = pdsRecadvService.getPeriodStoreSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR, searchType, searchStr);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			
			List<PDSRecadvPeriodStoreSumVO> list = pdsRecadvService.retrievePeriodStoreSum(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end, searchType, searchStr);
			Map<String,Object> totMap = pdsRecadvService.retrievePeriodStoreSumTot(srhByDtFr, srhByDtTo, TRPL_C_ARR, searchType, searchStr);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvPeriodStoreSumVO.class);
				
				for(PDSRecadvPeriodStoreSumVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			if(totMap != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM_TOT");
				dsHelper.getDataSet().addColumn("TOT_AM", DataTypes.STRING);
				dsHelper.getDataSet().addColumn("TOT_QT", DataTypes.STRING);
				dsHelper.setData(totMap);
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1020
	 * 화면명 : 기간별 사업장별/상품별 정보
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelPeriodStoreSum")
	public void downloadExcelPeriodStoreSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String byDtFr				= request.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 				= request.getParameter("BY_DT_TO"); //조회 종료일
			String fileName 			= request.getParameter("fileName");//파일명
			String TRPL_C 				= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String searchType = requestHelper.getParameter("searchType");
			String searchStr = requestHelper.getParameter("searchStr");
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{"사업장코드", "사업장명", "수량", "금액"};
			String[] keyIndex = new String[]{"BZPLC", "BZPLCNM", "BY_QT", "BY_AM"};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelPeriodStoreSum(byDtFr, byDtTo, TRPL_C_ARR, -1, -1,searchType,searchStr,handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회 시작일", byDtFr);
			searchMap.put("조회 종료일", byDtTo);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1021
	 * 화면명 : 기간별 사업장별/상품별 상세 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrievePeriodStoreSumDetail")
	public void retrievePeriodStroeSumDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			PlatformData out_PlatformData = new PlatformData();
			String bzplc 	= requestHelper.getParameter("BZPLC"); //사업장코드
			String byDtFr 	= requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 	= requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			int totalRowCount = pdsRecadvService.getPeriodStoreSumDetailCount(bzplc, byDtFr, byDtTo, TRPL_C_ARR);
			//paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			
			List<PDSRecadvPeriodStoreSumDetailVO> list = pdsRecadvService.retrievePeriodStoreSumDetail(bzplc, byDtFr, byDtTo, TRPL_C_ARR, start, end);
			Map<String,Object> totMap = pdsRecadvService.retrievePeriodStoreSumDetailTot(bzplc, byDtFr, byDtTo, TRPL_C_ARR);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvPeriodStoreSumDetailVO.class);
				for(PDSRecadvPeriodStoreSumDetailVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			if(totMap != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM_TOT");
				dsHelper.getDataSet().addColumn("TOT_AM", DataTypes.STRING);
				dsHelper.getDataSet().addColumn("TOT_QT", DataTypes.STRING);
				dsHelper.setData(totMap);
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1021
	 * 화면명 : 기간별 사업장별/상품별 정보 상세
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelPeriodStoreSumDetail")
	public void downloadExcelPeriodStoreSumDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String bzplc 	= requestHelper.getParameter("BZPLC"); //사업장코드
			String byDtFr				= request.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 				= request.getParameter("BY_DT_TO"); //조회 종료일
			String fileName 			= request.getParameter("fileName");//파일명
			String TRPL_C 				= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{"상품코드", "상품명", "수량", "금액"};
			String[] keyIndex = new String[]{"WRS_C", "WRSNM", "BYNG_QT", "BYAM"};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelPeriodStoreSumDetail(bzplc, byDtFr, byDtTo, TRPL_C_ARR, -1, -1, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("사업장코드", bzplc);
			searchMap.put("조회 시작일", byDtFr);
			searchMap.put("조회 종료일", byDtTo);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 : 기간별 상품별/사업장별 정보조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrievePeriodSkuSum")
	public void retrievePeriodSkuSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDtFr = 			requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//Paging
			int totalRowCount = pdsRecadvService.getPeriodSkuSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			List<PDSRecadvPeriodSkuSumVO> list = pdsRecadvService.retrievePeriodSkuSum(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end);
			Map<String, Object> totalMap = pdsRecadvService.getPeriodSkuSumTotal(srhByDtFr, srhByDtTo, TRPL_C_ARR);
			
			
			
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvPeriodSkuSumVO.class);
				
				for(PDSRecadvPeriodSkuSumVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			 DataSetHelper dsHelperTotal = new DataSetHelper("ds_total");
			 dsHelperTotal.addColumns(totalMap.keySet());
			 dsHelperTotal.setData(totalMap);
			 out_PlatformData.addDataSet(dsHelperTotal.getDataSet());
			out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1030
	 * 화면명 : 기간별 상품별/사업장별 정보조회
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelPeriodSkuSum")
	public void downloadExcelPeriodSkuSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String byDtFr				= request.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 				= request.getParameter("BY_DT_TO"); //조회 종료일
			String fileName 			= request.getParameter("fileName");//파일명
			String TRPL_C 				= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{"상품코드", "상품명", "수량", "금액"};
			String[] keyIndex = new String[]{"WRS_C", "WRSNM", "BY_QT", "BY_AM"};

			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelPeriodSkuSum(byDtFr, byDtTo, TRPL_C_ARR, -1, -1, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회 시작일", byDtFr);
			searchMap.put("조회 종료일", byDtTo);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1031
	 * 화면명 : 기간별 상품별/사업장별 정보조회 - 상세
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrievePeriodSkuSumDetail")
	public void retrievePeriodSkuSumDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String naWrsC = 	requestHelper.getParameter("NA_WRS_C");//상품코드
			String byDtFr = 			requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo = 			requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//Paging
			int totalRowCount = pdsRecadvService.getPeriodSkuSumDetailCount(naWrsC, byDtFr, byDtTo,  TRPL_C_ARR);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			
			
			List<PDSRecadvPeriodSkuSumDetailVO> list = pdsRecadvService.retrievePeriodSkuSumDetail(naWrsC, byDtFr, byDtTo, TRPL_C_ARR, start, end);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvPeriodSkuSumDetailVO.class);
				
				for(PDSRecadvPeriodSkuSumDetailVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			/*
			 * 합계
			 *
			 */
			Map<String, Object> totalMap = pdsRecadvService.getPeriodSkuSumDetailTotal(naWrsC, byDtFr, byDtTo, TRPL_C_ARR);
			 DataSetHelper dsHelperTotal = new DataSetHelper("ds_total");
			 dsHelperTotal.addColumns(totalMap.keySet());
			 dsHelperTotal.setData(totalMap);
			 out_PlatformData.addDataSet(dsHelperTotal.getDataSet());
			 
			out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	
	/*
	 * 화면ID : VAN_DS_SC1031
	 * 화면명 : 기간별 상품별/사업장별 정보조회 - 상세
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelPeriodStoreSumDeail")
	public void downloadExcelPeriodStoreSumDeail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String naWrsC 				= 	request.getParameter("NA_WRS_C");//상품코드
			String byDtFr 				= request.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 				= request.getParameter("BY_DT_TO"); //조회 종료일
			String fileName 			= request.getParameter("fileName");//파일명
			String TRPL_C 				= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			String[] header = new String[]{"사업장코드", "사업장명", "수량", "금액"};
			String[] keyIndex = new String[]{"NA_BZPLC", "CLNTNM", "BYNG_QT", "BYAM"};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelPeriodStoreSumDeail(naWrsC, byDtFr, byDtTo, TRPL_C_ARR, -1, -1, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("상품코드", naWrsC);
			searchMap.put("조회 시작일", byDtFr);
			searchMap.put("조회 종료일", byDtTo);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 : 기간별 사업장별/상품별 미납 조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveNPeriodStoreSum")
	public void retrieveNPeriodStoreSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhNbyDtFr 	= 	requestHelper.getParameter("NBY_DT_FR"); //조회 시작일
			String srhNbyDtTo 	= requestHelper.getParameter("NBY_DT_TO"); //조회 종료일
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			// Paging
			int totalRowCount = pdsRecadvService.retrieveNPeriodStoreSumCount(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			//total
			PDSRecadvNPeriodStoreSumVO totalVo= pdsRecadvService.getNPeriodStoreSumTotal(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR);
			
			if(totalVo != null){
				DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
				dsTotalHelp.addColumns(PDSRecadvNPeriodStoreSumVO.class);
				dsTotalHelp.setData(totalVo);
				out_PlatformData.addDataSet(dsTotalHelp.getDataSet());//total
				out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			}
			
			
			List<PDSRecadvNPeriodStoreSumVO> list = pdsRecadvService.retrieveNPeriodStoreSum(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR, start, end);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvNPeriodStoreSumVO.class);
				
				for(PDSRecadvNPeriodStoreSumVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());//grid data
			}
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1040
	 * 화면명 : 사업장별/제품별 미납조회
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelNPeriodStoreSum")
	public void downloadExcelNPeriodStoreSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String srhNbyDtFr 		= 	request.getParameter("NBY_DT_FR"); //조회 시작일
			String srhNbyDtTo 		= request.getParameter("NBY_DT_TO"); //조회 종료일
			String fileName 			= request.getParameter("fileName");//파일명
			String TRPL_C 				= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{"사업장코드", "사업장명", "수량", "금액(천원)"};
			String[] keyIndex = new String[]{"BZPLC", "BZPLCNM", "NBY_QT", "NBY_AM"};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelNPeriodStoreSum(srhNbyDtFr, srhNbyDtTo, TRPL_C_ARR, -1, -1, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회 시작일", srhNbyDtFr);
			searchMap.put("조회 종료일", srhNbyDtTo);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1041
	 * 화면명 : 기간별 사업장별/상품별 미납 조회 상세
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveNPeriodStoreSumDetail")
	public void retrieveNPeriodStoreSumDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String bzplc = 			requestHelper.getParameter("BZPLC"); //조회 시작일
			String nbyDtFr = 			requestHelper.getParameter("NBY_DT_FR"); //조회 종료일
			String nbyDtTo = 			requestHelper.getParameter("NBY_DT_TO");//전체 선택 유뮤
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			
			int totalRowCount = pdsRecadvService.getNPeriodStoreSumDetailCount(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			List<PDSRecadvNPeriodStoreSumDetailVO> list = pdsRecadvService.retrieveNPeriodStoreSumDetail(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR, start, end);
			
			//total
			PDSRecadvNPeriodStoreSumVO totalVo = pdsRecadvService.getNPeriodStoreSumDetailTotal(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR);
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			dsTotalHelp.addColumns(PDSRecadvNPeriodStoreSumVO.class);
			dsTotalHelp.setData(totalVo);
			
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSRecadvNPeriodStoreSumDetailVO.class);
				for(PDSRecadvNPeriodStoreSumDetailVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			out_PlatformData.addDataSet(dsTotalHelp.getDataSet());
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1041
	 * 화면명 : 기간별 사업장별/상품별 미납 조회 상세
	 * 화면 설명 : Excel DownLoad
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadExcelNPeriodStoreSumDeail")
	public void downloadExcelNPeriodStoreSumDeail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String bzplc 				= request.getParameter("BZPLC"); //조회 시작일
			String nbyDtFr 			= request.getParameter("NBY_DT_FR"); //조회 종료일
			String nbyDtTo 			= request.getParameter("NBY_DT_TO");//전체 선택 유뮤
			String fileName 			= request.getParameter("fileName");//파일명
			String TRPL_C 				= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{"상품코드", "상품명", "수량", "금액(천원)"};
			String[] keyIndex = new String[]{"WRS_C", "WRSNM", "NBY_QT", "NBY_AM"};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.downloadExcelNPeriodStoreSumDeail(bzplc, nbyDtFr, nbyDtTo, TRPL_C_ARR, -1, -1, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("사업장코드", bzplc);
			searchMap.put("조회 시작일", nbyDtFr);
			searchMap.put("조회 종료일", nbyDtTo);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1050
	 * 화면명 : 자료수신
	 * 화면 설명 : 집계 데이터 CSV 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/downloadStoreSumCSV")
	public void downloadStoreSumCSV(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
		
		String chkSelect = request.getParameter("CHK_SELECT"); // 1 : 사업장별/상품별, 2 : 상품별/사업장별
		String fromDate = request.getParameter("FROM_DATE");
		String toDate = request.getParameter("TO_DATE");
		String chkPart = request.getParameter("CHK_PART");//01 : 기간집계 , 02 : 일별집계, 03 : 일일자료
		String fileNm = request.getParameter("FILE_NM");//01 : 기간집계 , 02 : 일별집계, 03 : 일일자료
		String TRPL_C = request.getParameter("TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
		//String fileName = "";
		String[] header = null;
		String[] keyIndex = null;
		List<Map<String,Object>> list = null;
		ExcelFileMakerResultHandler handler = null;
		Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
		
		long start = System.currentTimeMillis();
		
		switch(chkPart){
			/* 기간 집계 */
			case "01" :
					if(StringUtils.equals(chkSelect, "1")){
						//fileName = "기간집계_사업장별_상품별.xls";
						header = new String[]{"사업장코드", "사업장명", "상품코드", "상품명", "매입수량", "매입금액"};
						keyIndex = new String[]{"NA_BZPLC", "SHRT_BZPLNM", "WRS_C", "WRSNM", "BYNG_QT", "BYAM"};
						AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
						handler = new ExcelFileMakerResultHandler(workbook, model);
						
						pdsRecadvService.downloadTrplPeriodStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);						
					}else{
						//fileName = "기간집계_상품별_사업장별.xls";
						header = new String[]{"상품코드", "상품명", "사업장코드", "사업장명", "매입수량", "매입금액"};
						keyIndex = new String[]{"WRS_C", "WRSNM", "NA_BZPLC", "SHRT_BZPLNM", "BYNG_QT", "BYAM"};
						AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
						handler = new ExcelFileMakerResultHandler(workbook, model);
						
						pdsRecadvService.downloadWrsPeriodStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);
						
					}
					break;
			/* 일별집계 */
			case "02" :
				if(StringUtils.equals(chkSelect, "1")){
					//fileName = "일별집계_사업장별_상품별.xls";
					header = new String[]{"일자", "사업장코드", "사업장명", "상품코드", "상품명", "매입수량", "매입금액"};
					keyIndex = new String[]{"SLP_DT", "NA_BZPLC", "SHRT_BZPLNM", "WRS_C", "WRSNM", "BYNG_QT", "BYAM"};
					AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
					handler = new ExcelFileMakerResultHandler(workbook, model);
					
					pdsRecadvService.downloadTrplDailyStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);
				}else{
					//fileName = "일별집계_상품별_사업장별.xls";
					header = new String[]{"일자","상품코드", "상품명", "사업장코드", "사업장명", "매입수량", "매입금액"};
					keyIndex = new String[]{"SLP_DT","WRS_C", "WRSNM", "NA_BZPLC", "SHRT_BZPLNM", "BYNG_QT", "BYAM"};
					AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
					handler = new ExcelFileMakerResultHandler(workbook, model);
					
					pdsRecadvService.downloadWrsDailyStoreSumCSV(fromDate, toDate, TRPL_C_ARR, handler);
				}
				break;
			/* 일일자료 */
			default : 
				sendData(response, new PlatformData(), -1, "error.message.required.parameters");
				break;
		}
		
				Map<String, Object> searchMap = new HashMap<String, Object>();
				searchMap.put("조회 시작일", fromDate);
				searchMap.put("조회 종료일", toDate);
				searchMap.put("거래처코드", TRPL_C);
				handler.createSearchSheet(searchMap);
				handler.write(response, fileNm);
				//CSVFileDownloadHelper csvHelper = new CSVFileDownloadHelper(response, fileName);
				//DefaultModel model = new DefaultModel("집계데이터",header, keyIndex, list);
				//csvHelper.writer(model);
				
				long end = System.currentTimeMillis();
				
				logger.info("rest/excel/pds/downloadStoreSumCSV 실행 시간 : " + ( end - start )/1000.0 + "초");
				
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1060
	 * 화면명 : 수수료 관리 조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/recadv/retrieveCommissionWRSList")
	public void retrieveCommissionWRSList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			
			String glnCode = requestHelper.getGlnCode();
			String NA_BZPLC = "";
			
			Map<String, Object> ctr_map = pdsRecadvService.getCserCtrTpc(glnCode); //계약코드
			
			if(ctr_map.get("CSER_CTR_TPC").equals("4")) NA_BZPLC = "8808983300108";
			NA_BZPLC = "8808983000015";			
						
			String TRPL = requestHelper.getParameter("TRPL"); // 지사코드
			String SEARCH_TYPE = requestHelper.getParameter("SEARCH_TYPE"); // 작성여부 - 여:1 부: 2 전체:all			
						
			List<Map<String, Object>> list = pdsRecadvService.retrieveCommissionWRSList(glnCode, NA_BZPLC, SEARCH_TYPE,TRPL);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1060
	 * 화면명 : 수수료 관리 엑셀
	 * 화면 설명 : excel
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/recadv/retrieveCommissionWRSList")
	public void printCommissionWRSList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {			
			
			String glnCode = requestHelper.getGlnCode();
			String NA_BZPLC = "";
			
			Map<String, Object> ctr_map = pdsRecadvService.getCserCtrTpc(glnCode); //계약코드
			
			if(ctr_map.get("CSER_CTR_TPC").equals("4")) NA_BZPLC = "8808983300108";
			NA_BZPLC = "8808983000015";			
			
			String fileName = request.getParameter("fileName");
			String TRPL = request.getParameter("TRPL"); // 지사코드
			String SEARCH_TYPE = request.getParameter("SEARCH_TYPE"); // 작성여부 - 여:1 부: 2 전체:all
			
			//SEARCH_TYPE = "1";
						
			//List<Map<String, Object>> list = pdsRecadvService.retrieveCommissionWRSExcel(glnCode, NA_BZPLC, SEARCH_TYPE,"all");
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {					
					"순번",
					"지사코드",
					"상품코드",
					"상품명",
					"수수료율"					
					};
			
			String[] keyIndex = {
					"ROWNUMB",
					"BRO_C",
					"NA_WRS_C",
					"WRSNM",					
					"FEERT"	
					};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsRecadvService.retrieveCommissionWRSExcel(glnCode, NA_BZPLC, SEARCH_TYPE,TRPL, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "납품정보 수수료관리");
			searchMap.put("작성여부", SEARCH_TYPE);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0160
	 * 화면설명 : 본사 뺀 지사 코드 찾기
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/recadv/retrieveCommissionTrplList")
	public void retrieveCommissionTrplList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
				
		try {
			PlatformData out_PlatformData = new PlatformData();
				
			String glnCode = requestHelper.getGlnCode();
			List<Map<String, Object>> list = pdsRecadvService.retrieveCommissionTrplList(glnCode);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0160
	 * 화면설명 : 수수료관리 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/recadv/saveFeeAmnList")
	public void saveFeeAmnList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			DataSet dsM = requestHelper.getDataSet("ds_dataM"); //그리드 데이터 셋
			DataSet dsTrpl = requestHelper.getDataSet("ds_trpl"); //지사 데이터 셋
			
			String SAVE_TYPE = requestHelper.getParameter("SAVE_TYPE"); // 저장구분 - 전체 : all, 지사 : 1
			String TRPL = requestHelper.getParameter("TRPL"); // 지사코드
			
			TrplList trplVo = new TrplList();
						
/*			if(SAVE_TYPE.equals("all")){
				if(dsTrpl != null){				
					for(int i = 0; i < dsTrpl.getRowCount(); i++){
						trplVo = t_list.get(i);
						System.out.println("===========");				
						System.out.println(trplVo.getNA_TRPL_C()+"/"+trplVo.getCLNTNM());
						System.out.println("===========");					
					}
				}
			}*/	
			
			PDSRecadvFeeAmn mvo = new PDSRecadvFeeAmn();
			
			String dmlCode = ""; //CRUD코드			
			String glnCode = requestHelper.getGlnCode(); //세션 gln코드
			
			List<PDSRecadvFeeAmn> list =ValueObjectSetUtil.dataSetToVO(dsM, PDSRecadvFeeAmn.class);
								
			if(dsM != null){				
				for(int i = 0; i < dsM.getRowCount(); i++){
					mvo = list.get(i);
					
					if(dsM.getRowType(i) == DataSet.ROW_TYPE_UPDATED){						
						mvo.setCRUD_DSC("U");
						mvo.setHOFF_C(glnCode);
						mvo.setBRO_C(TRPL);
						
						if(SAVE_TYPE.equals("all")){
							if(dsTrpl != null){				
								List<TrplList> t_list =ValueObjectSetUtil.dataSetToVO(dsTrpl,TrplList.class);
								mvo.setDetailVoList(t_list);								
							}
						}
						
					}else{						
						logger.error("CRUD DSC Setting Error");
						sendData(response, new PlatformData(), -1, "error.message.server.exception");
					}								
				}					
			}
			
			pdsRecadvService.saveFeeAmnList(list);
			
			sendData(response, out_PlatformData);			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1070
	 * 화면명 : 수수료 현황 조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/recadv/retrieveFeeCurrentList")
	public void retrieveFeeCurrentList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();		
			
			String glnCode = requestHelper.getGlnCode(); //세션 gln코드			
			String mbcoType = requestHelper.getMbcoType(); //세션 본지사 구분코드									
			String BY_DT = requestHelper.getParameter("BY_DT"); // 매입월						
						
			List<Map<String, Object>> list = pdsRecadvService.retrieveFeeCurrentList(glnCode, BY_DT,mbcoType);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = pdsRecadvService.getFeeCurrentSum(glnCode, BY_DT,mbcoType);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(map.keySet());
				 dsHelper.setData(map);
				 out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1070
	 * 화면명 : 수수료 현황 엑셀
	 * 화면 설명 : excel
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/recadv/printRetrieveFeeCurrentList")
	public void printRetrieveFeeCurrentList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {			
			
			String glnCode = requestHelper.getGlnCode(); //세션 gln코드			
			String mbcoType = requestHelper.getMbcoType(); //세션 본지사 구분코드				
			
			String fileName = request.getParameter("fileName");
			String BY_DT = request.getParameter("BY_DT"); // 매입월						
						
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
						
			String[] header = {					
					"순번",
					"지사코드",
					"지사명",					
					"수수료(원)"					
					};
			
			String[] keyIndex = {
					"ROWNUMB",
					"NA_TRPL_C",					
					"CLNTNM",					
					"FEERT"	
					};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
			
			pdsRecadvService.printRetrieveFeeCurrentList(glnCode, BY_DT,mbcoType, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "납품정보 수수료현황");
			searchMap.put("매입월", BY_DT);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1071
	 * 화면명 : 수수료 현황 상세조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/recadv/retrieveFeeCurrentDetailList")
	public void retrieveFeeCurrentDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();		
					
			String BY_DT = requestHelper.getParameter("BY_DT"); // 매입월
			String BRO_C = requestHelper.getParameter("BRO_C"); // 지사코드
			String NA_RGN_C = requestHelper.getParameter("NA_RGN_C"); // 지역코드
			
			if(StringUtils.isNotEmpty(NA_RGN_C)) NA_RGN_C = NA_RGN_C.substring(0,2);  //지역코드 4자리 중 2자리만 사용(서울,경기)
			else NA_RGN_C = "";
			
			// Paging
			int totalRowCount = pdsRecadvService.getFeeCurrentDetailListCount(BY_DT,BRO_C,NA_RGN_C);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			//total
			Map<String, Object> map_tot= pdsRecadvService.getFeeCurrentDetailListTotal(BY_DT,BRO_C,NA_RGN_C);
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			if(map_tot != null) {				 
				 dsTotalHelp.addColumns(map_tot.keySet());
				 dsTotalHelp.setData(map_tot);				 
			}
						
			
			List<Map<String, Object>> list = pdsRecadvService.retrieveFeeCurrentDetailList(BY_DT,BRO_C,NA_RGN_C,start, end);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				out_PlatformData.addDataSet(dsTotalHelp.getDataSet());//total
				out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
				 out_PlatformData.addDataSet(dsHelper.getDataSet());
			}	
			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1071
	 * 화면명 : 수수료 현황 상세 엑셀
	 * 화면 설명 : excel
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/pds/recadv/retrieveFeeCurrentDetailExcel")
	public void retrieveFeeCurrentDetailExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {			
			
			String BY_DT = requestHelper.getParameter("BY_DT"); // 매입월
			String BRO_C = requestHelper.getParameter("BRO_C"); // 지사코드
			String NA_RGN_C = requestHelper.getParameter("NA_RGN_C"); // 지역코드
			
			if(StringUtils.isNotEmpty(NA_RGN_C)) NA_RGN_C = NA_RGN_C.substring(0,2);  //지역코드 4자리 중 2자리만 사용(서울,경기)
			else NA_RGN_C = "";		
			
			String fileName = request.getParameter("fileName");								
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
						
			String[] header = {					
					"순번",
					"사업장코드",
					"사업장명",
					"상품코드",
					"상품명",
					"수수료(원)"					
					};
			
			String[] keyIndex = {
					"ROWNUMB",
					"NA_BZPLC",
					"BZPL_NM",
					"NA_WRS_C",
					"WRSNM",
					"FEERT"
					};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);			
			
			pdsRecadvService.retrieveFeeCurrentDetailExcel(BY_DT, BRO_C, NA_RGN_C, handler);			
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "납품정보 수수료현황 상세");
			searchMap.put("매입월", BY_DT);
			searchMap.put("지사코드", BRO_C);
			searchMap.put("지역코드", NA_RGN_C);
			
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
		
	
}
