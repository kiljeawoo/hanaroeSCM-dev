package com.nh.escm.analysis.info.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.DateUtil;
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
import com.nh.escm.analysis.info.dao.InfoChangeMapNames.MapNamesIC_Interest;
import com.nh.escm.analysis.info.dao.InfoChangeMapNames.MapNamesIC_SalesDaily;
import com.nh.escm.analysis.info.dao.InfoChangeMapNames.MapNamesIC_SalesMonthly;
import com.nh.escm.analysis.info.dao.InfoChangeMapNames.MapNamesIC_SalesWeekly;
import com.nh.escm.analysis.info.dao.InfoChangeMapNames.MapNamesIC_StockDaily;
import com.nh.escm.analysis.info.dao.InfoChangeMapNames.MapNamesIC_StockMonthly;
import com.nh.escm.analysis.info.service.InfoChangeService;
import com.nh.escm.common.service.CodeService;
import com.nh.escm.common.vo.SQLNames.CommonSimpleCode;




@RestController
public class InfoChangeController extends AbstractController{
	
	@Autowired
	private InfoChangeService infoChangeService;
	
	@Autowired
	private CodeService codeService;
	
	/**
	 * 화면 ID: VAN_DS_SC_1801
	 * 화면설명: 자사 월별 판매 추이
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/info/infoChange/retrieveSalesMonthlyList")
	public void retrieveSalesMonthlyList(HttpServletRequest request, HttpServletResponse response
			){		
		
		try {			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터
			String ANALYSIS = requestHelper.getParameter("ANALYSIS");			//분석항목 구분
			String TRPL_C = requestHelper.getParameter("TRPL_C");				//거래처코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//기간 최근 6개월 (이번달 제외)
			List<String> dateList = DateUtil.getPreMonth(6, false);			
			String sDate = dateList.get(0);			
			String eDate = dateList.get(dateList.size()-1);
			
			/* test */
			//sDate = "20150101";
			//eDate = "20150630";			
						
			//리스트
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			if(StringUtils.isEmpty(ANALYSIS)){  
				ANALYSIS = "1";
			}else{
				if("1".equals(ANALYSIS) || "2".equals(ANALYSIS)){	//1.점포별 	2.상품별
					list = infoChangeService.retrieveSalesMonthlyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate);
				}else{												//에러!
					throw new AppetizerException("msg.van_ds_sc_1801.server.err.searchType");
				}
			}
			
			DataSetHelper dHelper = new DataSetHelper("ds_salesMonthly");
			dHelper.addColumns(MapNamesIC_SalesMonthly.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			
			//관심 점포/상품 카운트 결과
			boolean result = infoChangeService.retrieveSaveStoreGoodsCount(ANALYSIS,TRPL_C_ARR[0]);
			dHelper = new DataSetHelper("ds_inte");
			dHelper.getDataSet().addColumn("RESULT", DataTypes.STRING);
			int row = dHelper.getDataSet().newRow();
			dHelper.getDataSet().set(row, "RESULT", result);
			out_platformData.addDataSet(dHelper.getDataSet());
			
			sendData(response, out_platformData);
		
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}	
	
	
	/**
	 * 화면 ID: VAN_DS_SC_1811
	 * 화면설명: 자사 주별 판매 추이
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/info/infoChange/retrieveSalesWeeklyList")
	public void retrieveSalesWeeklyList(HttpServletRequest request, HttpServletResponse response
			){		
		
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
						
			//파라미터
			String ANALYSIS = requestHelper.getParameter("ANALYSIS");			//분석항목 구분
			String TRPL_C = requestHelper.getParameter("TRPL_C");				//거래처코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//지난주 월요일, 일요일
			List<String> dayList = DateUtil.getPreWeek();
			String sDate = dayList.get(0);
			String eDate = dayList.get(dayList.size()-1);
			
			int weekCount = 10;			
			String sWeek = "";
			String eWeek = "";		
			
			//리스트
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			List<Map<String, Object>> weekList = new ArrayList<Map<String,Object>>();			
			try{
				weekList = infoChangeService.retrieveWeekList(sDate, eDate, weekCount);	
				sWeek = (String)weekList.get(weekList.size()-1).get("SQWW"); //첫주
				eWeek = (String)weekList.get(0).get("SQWW"); //마지막주
				
				/* test */
				//sWeek = "201501";
				//eWeek = "201510";
				
			}catch(AppetizerException e){
				throw new AppetizerException("msg.van_ds_sc_1811.server.err.sqww");
			}
			
			if(StringUtils.isEmpty(ANALYSIS)){  
				ANALYSIS = "1";
			}else{
				if("1".equals(ANALYSIS) || "2".equals(ANALYSIS)){	//1.점포별 	2.상품별
					list = infoChangeService.retrieveSalesWeeklyList(TRPL_C_ARR[0], ANALYSIS, sWeek, eWeek);
				}else{												//에러!
					throw new AppetizerException("msg.van_ds_sc_1801.server.err.searchType");
				}
			}
			
			DataSetHelper dHelper = new DataSetHelper("ds_salesWeekly");
			dHelper.addColumns(MapNamesIC_SalesWeekly.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			
			//관심 점포/상품 카운트 결과
			boolean result = infoChangeService.retrieveSaveStoreGoodsCount(ANALYSIS,TRPL_C_ARR[0]);
			dHelper = new DataSetHelper("ds_inte");
			dHelper.getDataSet().addColumn("RESULT", DataTypes.STRING);
			int row = dHelper.getDataSet().newRow();
			dHelper.getDataSet().set(row, "RESULT", result);
			out_platformData.addDataSet(dHelper.getDataSet());
			
			sendData(response, out_platformData);
		
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}	
	
	/**
	 * 화면 ID: VAN_DS_SC_1821
	 * 화면설명: 자사 일별 판매 추이
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/info/infoChange/retrieveSalesDailyList")
	public void retrieveSalesDailyList(HttpServletRequest request, HttpServletResponse response
			){		
		
		try {
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
						
			//파라미터
			String ANALYSIS = requestHelper.getParameter("ANALYSIS");			//분석항목 구분
			String TRPL_C = requestHelper.getParameter("TRPL_C");				//거래처코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//기간설정
			int day = 29; //오늘포함시 -1
			String sDate = DateUtil.getPreDate(day);
			String eDate = DateUtil.getPreDate(0);
			
			/* test */
			//sDate = "20150601";
			//eDate = "20150630";
			
			//리스트
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			if(StringUtils.isEmpty(ANALYSIS)){  
				ANALYSIS = "1";
			}else{
				if("1".equals(ANALYSIS) || "2".equals(ANALYSIS)){	//1.점포별 	2.상품별
					list = infoChangeService.retrieveSalesDailyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate);
				}else{												//에러!
					throw new AppetizerException("msg.van_ds_sc_1801.server.err.searchType");
				}
			}
			
			DataSetHelper dHelper = new DataSetHelper("ds_salesDaily");
			dHelper.addColumns(MapNamesIC_SalesDaily.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			
			//관심 점포/상품 카운트 결과
			boolean result = infoChangeService.retrieveSaveStoreGoodsCount(ANALYSIS,TRPL_C_ARR[0]);
			dHelper = new DataSetHelper("ds_inte");
			dHelper.getDataSet().addColumn("RESULT", DataTypes.STRING);
			int row = dHelper.getDataSet().newRow();
			dHelper.getDataSet().set(row, "RESULT", result);
			out_platformData.addDataSet(dHelper.getDataSet());
			
			sendData(response, out_platformData);
		
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}	
	
	
	/**
	 * 화면 ID: VAN_DS_SC_1831
	 * 화면설명: 자사 월별 재고 추이
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/info/infoChange/retrieveStockMonthlyList")
	public void retrieveStockMonthlyList(HttpServletRequest request, HttpServletResponse response
			){		
		
		try {
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터
			String ANALYSIS = requestHelper.getParameter("ANALYSIS");			//분석항목 구분
			String TRPL_C = requestHelper.getParameter("TRPL_C");				//거래처코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//기간
			List<String> dateList = DateUtil.getPreMonth(6 ,false);			
			String sDate = dateList.get(0);			
			String eDate = dateList.get(dateList.size()-1);		
			
			/* test */
			//sDate = "20150101";
			//eDate = "20150630";
			
			//리스트
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			if(StringUtils.isEmpty(ANALYSIS)){  
				ANALYSIS = "1";
			}else{
				if("1".equals(ANALYSIS) || "2".equals(ANALYSIS)){	//1.점포별 	2.상품별
					list = infoChangeService.retrieveStockMonthlyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate);
				}else{												//에러!
					throw new AppetizerException("msg.van_ds_sc_1801.server.err.searchType");
				}
			}
			
			DataSetHelper dHelper = new DataSetHelper("ds_stockMonthly");
			dHelper.addColumns(MapNamesIC_StockMonthly.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			
			//관심 점포/상품 카운트 결과
			boolean result = infoChangeService.retrieveSaveStoreGoodsCount(ANALYSIS,TRPL_C_ARR[0]);
			dHelper = new DataSetHelper("ds_inte");
			dHelper.getDataSet().addColumn("RESULT", DataTypes.STRING);
			int row = dHelper.getDataSet().newRow();
			dHelper.getDataSet().set(row, "RESULT", result);
			out_platformData.addDataSet(dHelper.getDataSet());
			
			sendData(response, out_platformData);
		
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}	
	
	
	/**
	 * 화면 ID: VAN_DS_SC_1841
	 * 화면설명: 자사 일별 재고 추이
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/info/infoChange/retrieveStockDailyList")
	public void retrieveStockDailyList(HttpServletRequest request, HttpServletResponse response
			){		
		
		try {
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터
			String ANALYSIS = requestHelper.getParameter("ANALYSIS");			//분석항목 구분
			String TRPL_C = requestHelper.getParameter("TRPL_C");				//거래처코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//기간설정
			int day = 29; //오늘포함시 -1
			String sDate = DateUtil.getPreDate(day);
			String eDate = DateUtil.getPreDate(0);		
			
			/* test */
			//sDate = "20150601";
			//eDate = "20150630";
						
			//리스트
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			if(StringUtils.isEmpty(ANALYSIS)){  
				ANALYSIS = "1";
			}else{
				if("1".equals(ANALYSIS) || "2".equals(ANALYSIS)){	//1.점포별 	2.상품별
					list = infoChangeService.retrieveStockDailyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate);
				}else{												//에러!
					throw new AppetizerException("msg.van_ds_sc_1801.server.err.searchType");
				}
			}
			
			DataSetHelper dHelper = new DataSetHelper("ds_stockDaily");
			dHelper.addColumns(MapNamesIC_StockDaily.class);
			for(Map<String, Object> v : list){
				dHelper.setData(v);
			}
			out_platformData.addDataSet(dHelper.getDataSet());
			
			//관심 점포/상품 카운트 결과
			boolean result = infoChangeService.retrieveSaveStoreGoodsCount(ANALYSIS,TRPL_C_ARR[0]);
			dHelper = new DataSetHelper("ds_inte");
			dHelper.getDataSet().addColumn("RESULT", DataTypes.STRING);
			int row = dHelper.getDataSet().newRow();
			dHelper.getDataSet().set(row, "RESULT", result);
			out_platformData.addDataSet(dHelper.getDataSet());
			
			sendData(response, out_platformData);
		
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}	
	
	
	/**
	 * 화면 ID: VAN_DS_SC_1850
	 * 화면설명: 관심 점포/상품 등록
	 * 기    능: 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/info/infoChange/retrieveInterestList")
	public void retrieveInterestList(HttpServletRequest request, HttpServletResponse response
			){		
		
		try {
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터			
			String pageType = requestHelper.getParameter("pageType");
			String ANALYSIS = requestHelper.getParameter("ANALYSIS");
			String RGN_C = requestHelper.getParameter("LOCMAIN");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String saveDs = requestHelper.getParameter("saveDs");
			List<String> saveDsList = null;
			if(StringUtils.isNotEmpty(saveDs)){
				saveDsList = new ArrayList<String>();
				String [] temp = saveDs.split(",");
				for(int i=0;i<temp.length;i++){
					saveDsList.add(temp[i]);
				}			
			}
			
			//관심점포 or 관심상품 리스트 초기화
			List<Map<String, Object>> selectList = new ArrayList<Map<String,Object>>();
			List<Map<String, Object>> saveList = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C_ARR[0], ANALYSIS);
			
			if(pageType.equals("init")){
				
				List<Map<String, Object>> locationList = codeService.getCodeList("RGN_C", "substr(simp_c,3,2) = '00'");
				DataSetHelper dHelper = new DataSetHelper("ds_locMain");
				dHelper.addColumns(CommonSimpleCode.class);
				for(Map<String, Object> map : locationList) {
					dHelper.setData(map);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else{
				
				if("1".equals(ANALYSIS)){		//관심점포
					selectList = infoChangeService.retrieveStoreList(TRPL_C_ARR[0], RGN_C, saveDsList);
					saveList = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C_ARR[0], ANALYSIS);
					
				}else if("2".equals(ANALYSIS)){ //관심상품
					selectList = infoChangeService.retrieveGoodsList(TRPL_C_ARR[0], saveDsList);
					saveList = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C_ARR[0], ANALYSIS);
				}else{							//에러!
					throw new AppetizerException("msg.van_ds_sc_1850.server.err.searchType");
				}
				
			}			
			 
			DataSetHelper dHelper = new DataSetHelper("ds_selectList");
			dHelper.addColumns(MapNamesIC_Interest.class);
			for(Map<String, Object> v : selectList){
				dHelper.setData(v);
			}
			
			out_platformData.addDataSet(dHelper.getDataSet());
			
			dHelper = new DataSetHelper("ds_saveList");
			dHelper.addColumns(MapNamesIC_Interest.class);
			for(Map<String, Object> v : saveList){
				dHelper.setData(v);
			}
			
			out_platformData.addDataSet(dHelper.getDataSet());
			
			
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}
	
	
	/**
	 * 화면 ID: VAN_DS_SC_1850
	 * 화면설명: 관심 점포/상품 등록,삭제
	 * 기    능: 저장
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/info/infoChange/saveInterestList")
	public void saveInterestList(HttpServletRequest request, HttpServletResponse response
			){		
		
		try {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터			
			String analysis = requestHelper.getParameter("analysis"); 	//설정항목 구분
			String sqlType = requestHelper.getParameter("sqlType");
			String TRPL_C = requestHelper.getGlnCode();
			DataSet ds = requestHelper.getDataSet("ds");
			if(sqlType.equals("DEL")) infoChangeService.deleteStoreGoods(ds, TRPL_C, analysis);
			else infoChangeService.insertStoreGoods(ds, TRPL_C, analysis);
			sendData(response, new PlatformData());
	
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}

	/**
	 * 화면 ID: VAN_DS_SC_1801, 1811, 1821, 1831, 1841
	 * 화면설명:  
	 * 기    능: 엑셀
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/analysis/info/infoChange/excelDown")
	public void infoChangeExcel(HttpServletRequest request, HttpServletResponse response
			) throws UnsupportedEncodingException{		
		
		try {			
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
			//파라미터
			String title = request.getParameter("title");
			String sId = request.getParameter("sId");
			String fileName = request.getParameter("fileName");
			String ANALYSIS = request.getParameter("ANALYSIS");			//분석항목 구분
			String TRPL_C = request.getParameter("TRPL_C");				//거래처코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String TRPL_C_TEXT = request.getParameter("TRPL_C_TEXT");
			
			title = URLDecoder.decode(StringUtil.toString(title), "utf-8");
			TRPL_C_TEXT = URLDecoder.decode(StringUtil.toString(TRPL_C_TEXT), "utf-8");
			
			ExcelFileMakerResultHandler handler = null;
			
			String[] header = new String[5];			
			if (StringUtils.isNotEmpty(ANALYSIS) && ANALYSIS.equals("1")) {
				header = new String[]{"년월","사업장코드","사업장명","매출액(천원)","수량"}; 
			} else {
				header = new String[]{"년월","상품코드","상품명","매출액(천원)","수량"};			
			}
			String[] keyIndex = {"YMD", "CODE", "NAME", "AMOUNT", "QTY"};
			
			List<Map<String, Object>> list = null;
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			if (StringUtils.isNotEmpty(sId)) {
				if(sId.equals("1801")){
					
					//title="자사 월별 판매추이";
					//기간 최근 6개월 (이번달 제외)
					List<String> dateList = DateUtil.getPreMonth(6 ,false);			
					String sDate = dateList.get(0);			
					String eDate = dateList.get(dateList.size()-1);		
					
					/* test */
					//sDate = "20150101";
					//eDate = "20150630";	
					
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					infoChangeService.downloadExcelSalesMonthlyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate, handler);
					
					searchMap.put("조회기간(최근6개월)", DateUtil.getDateFormat(sDate,"yyyy-MM")+" ~ "+DateUtil.getDateFormat(eDate,"yyyy-MM"));
					
				}else if(sId.equals("1811")){
					
					//title="자사 주별 판매추이";
					//지난주 월요일, 일요일
					List<String> dayList = DateUtil.getPreWeek();
					String sDate = dayList.get(0);
					String eDate = dayList.get(dayList.size()-1);
					int weekCount = 10; //최근 몇주
					
					String sWeek = "";
					String eWeek = "";		
					
					//리스트
					List<Map<String, Object>> weekList = new ArrayList<Map<String,Object>>();			
					try{
						weekList = infoChangeService.retrieveWeekList(sDate, eDate, weekCount);	
						sWeek = (String)weekList.get(weekList.size()-1).get("SQWW"); //첫주
						eWeek = (String)weekList.get(0).get("SQWW"); //마지막주
	
						/* test */
						//sWeek = "201501";
						//eWeek = "201510";
						
					}catch(AppetizerException e){
						throw new AppetizerException("주차 정보가 테이블에 존재하지 않습니다.");
					}
					
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					infoChangeService.downloadExcelSalesWeeklyList(TRPL_C_ARR[0], ANALYSIS, sWeek, eWeek, handler);	
					
					weekList = DateUtil.getWeeksText(weekList);
					sWeek = (String)weekList.get(weekList.size()-1).get("NAME");
					eWeek = (String)weekList.get(0).get("NAME");
					
					header[0] = "주차";
					keyIndex[0] = "WEEKS";
					searchMap.put("조회기간(최근10주)", sWeek + " ~ " + eWeek);
					
				}else if(sId.equals("1821")){
					
					//title="자사 일별 판매추이";
					//기간설정
					int day = 29; //오늘포함시 -1
					String sDate = DateUtil.getPreDate(day);
					String eDate = DateUtil.getPreDate(0);	
					
					/* test */
					//sDate = "20150601";
					//eDate = "20150630";
					
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					infoChangeService.downloadExcelSalesDailyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate, handler);
					
					searchMap.put("조회기간", DateUtil.getDateFormat(sDate,"yyyy-MM-dd")+" ~ "+DateUtil.getDateFormat(eDate,"yyyy-MM-dd"));
				
				}else if(sId.equals("1831")){
					
					//title="자사 월별 재고추이";
					//기간설정
					List<String> dateList = DateUtil.getPreMonth(6 ,false);			
					String sDate = dateList.get(0);			
					String eDate = dateList.get(dateList.size()-1);
					
					/* test */
					//sDate = "20150101";
					//eDate = "20150630";	
					
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					infoChangeService.downloadExcelStockMonthlyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate, handler);
					
					searchMap.put("조회기간(최근6개월)", DateUtil.getDateFormat(sDate,"yyyy-MM")+" ~ "+DateUtil.getDateFormat(eDate,"yyyy-MM"));
				
				}else if(sId.equals("1841")){
					
					//title="자사 일별 재고추이";
					//기간설정
					int day = 29; //오늘포함시 -1
					String sDate = DateUtil.getPreDate(day);
					String eDate = DateUtil.getPreDate(0);		
					
					/* test */
					//sDate = "20150601";
					//eDate = "20150630";			
	
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					infoChangeService.downloadExcelStockDailyList(TRPL_C_ARR[0], ANALYSIS, sDate, eDate, handler);
					
					searchMap.put("조회기간", DateUtil.getDateFormat(sDate,"yyyy-MM-dd")+" ~ "+DateUtil.getDateFormat(eDate,"yyyy-MM-dd"));
				}
			}
			

			searchMap.put("구분", ( StringUtils.isEmpty(ANALYSIS) == false && ANALYSIS.equals("1") ) ? "사업장별" : "상품별");
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
		}catch(AppetizerException e){
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	//정보분석 테이블 최근 작업일
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ajax/analysis/info/infoChange/getInfoTableDt")
	public RestResult retrieveGetUpdateDt(HttpServletRequest request, HttpServletResponse response,
			String table){	
		
		try {
			
			if(StringUtils.isEmpty(table)){
				throw new AppetizerException("error.message.noTable");
			}
			String date =  infoChangeService.retrieveGetUpdateDt(table);
			
			List<Map<String, String>> list = new ArrayList<Map<String,String>>();
			Map<String, String> map = new HashMap<String, String>();
			map.put("date", date);
			list.add(map);
			return new RestResultList(ErrorCode.SUCCESS, "", list, 0);
	
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} 
	}
	
}
