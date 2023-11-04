package com.nh.escm.analysis.market.controller;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.CollectionUtils;
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
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMaker;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.DeduplicationObject;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.analysis.info.dao.InfoChangeMapNames.MapNamesIC_Interest;
import com.nh.escm.analysis.info.service.InfoChangeService;
import com.nh.escm.analysis.market.dao.MarketMapNames.MapNamesABC;
import com.nh.escm.analysis.market.dao.MarketMapNames.MapNamesClsBzplcWrs;
import com.nh.escm.analysis.market.dao.MarketMapNames.MapNamesMKCodeName;
import com.nh.escm.analysis.market.dao.MarketMapNames.MapNamesMKCompetitors;
import com.nh.escm.analysis.market.dao.MarketMapNames.MapNamesMKPoint;
import com.nh.escm.analysis.market.dao.MarketMapNames.MapNamesMKRanking;
import com.nh.escm.analysis.market.dao.MarketMapNames.MapNamesMinMax;
import com.nh.escm.analysis.market.service.MarketService;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.CodeService;
import com.nh.escm.common.vo.SQLNames.CommonSimpleCode;

@RestController
public class MarketController extends AbstractController{
	
	@Autowired
	private MarketService marketService;
	
	@Autowired
	private InfoChangeService infoChangeService;
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	/**
	 * 화면 ID: VAN_DS_SC_1900, VAN_DS_SC_1910, VAN_DS_SC_1920, VAN_DS_SC_1930
	 * 화면설명: 
	 * 기    능: 엑셀
	 * @throws UnsupportedEncodingException
	 */
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/analysis/market/excelDown")
	public void excel1900_1910(HttpServletRequest request, HttpServletResponse response){		
		
		try{
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
			String title = request.getParameter("title");
			String sId = request.getParameter("sId");
			String fileName = request.getParameter("fileName");
			String pageType = request.getParameter("pageType");		
			String TRPL_C = request.getParameter("TRPL_C");
			String TRPL_C_TEXT = request.getParameter("TRPL_C_TEXT");
			
			String LCLC = requestHelper.getParameter("LCLC");
			String MCLC = requestHelper.getParameter("MCLC");
			String SCLC = requestHelper.getParameter("SCLC");
			
			if(requestHelper.getMbcoType() == null){
				new AppetizerException("본지사 구분 코드가 존재하지 않습니다.");
			}else{			
				if(requestHelper.getMbcoType().equals("0")) TRPL_C = requestHelper.getGlnCode();
			}
			
			String DIV = request.getParameter("DIV");
			String DATE = request.getParameter("DATE");
			String RGN_C = request.getParameter("LOCMAIN");		
			String DIV_TEXT = request.getParameter("DIV_TEXT");
			String DATE_TEXT = request.getParameter("DATE_TEXT");
			String LOCMAIN_TEXT = request.getParameter("LOCMAIN_TEXT");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String BZPLC = requestHelper.getParameter("BZPLC");
			String BZPLC_TEXT = requestHelper.getParameter("BZPLC_TEXT");
			String GROUP_TEXT = requestHelper.getParameter("GROUP_TEXT");		
			
			try {
				title = URLDecoder.decode(StringUtil.toString(title), "utf-8");
				TRPL_C_TEXT = URLDecoder.decode(StringUtil.toString(TRPL_C_TEXT), "utf-8");
				DIV_TEXT = URLDecoder.decode(StringUtil.toString(DIV_TEXT), "utf-8");
				DATE_TEXT = URLDecoder.decode(StringUtil.toString(DATE_TEXT), "utf-8");
				LOCMAIN_TEXT = URLDecoder.decode(StringUtil.toString(LOCMAIN_TEXT), "utf-8");
				BZPLC_TEXT = URLDecoder.decode(StringUtil.toString(BZPLC_TEXT), "utf-8");
				GROUP_TEXT = URLDecoder.decode(StringUtil.toString(GROUP_TEXT), "utf-8");
			} catch (UnsupportedEncodingException e) {
				throw new AppetizerException("파라미터 디코드 에러발생!");
			}
			List<Map<String, Object>> list = null;
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			ExcelFileMakerResultHandler handler = null;
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			
			String[] header = {"", "", "", "", "", ""};
			String[] keyIndex = {"MCODE", "MNAME", "CODE", "NAME", "AMOUNT", "POINT"};
			
			//test
			//DATE = "201506";
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			if (StringUtils.isEmpty(sId) == false) {
				if(sId.equals("1900") || sId.equals("1910")){
					
					if (StringUtils.isEmpty(DIV) == false && DIV.equals("1")) {
						header = new String[]{"사업장코드","사업장명","소분류코드","소분류명", "판매액(천원)","점유율(%)"};
					} else {
						header = new String[]{"소분류코드","소분류명", "사업장코드","사업장명", "판매액(천원)","점유율(%)"};
					}
					
					//if(pageType.equals("M")) title = "자사상품 월별 시장점유율";
					//else title = "자사상품 주별 시장점유율";
					
					searchMap.put("조회기간", DATE_TEXT);
					searchMap.put("구분", DIV_TEXT);
					searchMap.put("거래처코드", TRPL_C);
					searchMap.put("지역", LOCMAIN_TEXT);
					

					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					marketService.excel1900_1910(pageType, DIV, TRPL_C_ARR, DATE, RGN_C, handler);
				}else if(sId.equals("1920") || sId.equals("1930")){
					
					searchMap.put("조회기간", DATE_TEXT);
					searchMap.put("구분", DIV_TEXT);
					searchMap.put("거래처코드", TRPL_C);
					
					if(StringUtils.isEmpty(DIV) == false && DIV.equals("1")){
						header = new String[]{"소분류코드", "소분류명", "상품코드", "상품명", "판매액(천원)", "점유율(%)"};
					}else{
						header = new String[]{"소분류코드", "소분류명", "사업장코드", "사업장명", "판매액(천원)", "점유율(%)"};
						searchMap.put("지역", LOCMAIN_TEXT);
					}
					
					//if(pageType.equals("M")) title = "자사상품 월별 시장점유율 상세";
					//else title = "자사상품 주별 시장점유율 상세";
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					marketService.excel1920_1930(pageType, DIV, TRPL_C_ARR, DATE, RGN_C, handler);
				
				}else if(sId.equals("1940")){
					
					TRPL_C = requestHelper.getGlnCode();
					
					List<Map<String, Object>> list_myCategory = marketService.selectListMycategory(TRPL_C);
					List<Map<String, Object>> titleList = new ArrayList<Map<String,Object>>();
					String PREDATE = "";
					if(StringUtils.isNotEmpty(DATE)){
						if (StringUtils.isEmpty(pageType) == false && pageType.equals("M")) {
							PREDATE = DateUtil.getPreMonth(DATE, "yyyyMM");
						} else {
							PREDATE = infoChangeService.retrievePreWeek(DATE);
						}
					}
					int CNT = 20; //紐뉗쐞源뚯� 寃��깋
					
					//list = marketService.excel1940(pageType, DATE, PREDATE, RGN_C, CNT);			
					searchMap.put("조회기간", DATE_TEXT);
					searchMap.put("지역", LOCMAIN_TEXT);
					
					header = new String[]{"소분류코드", "소분류명", "순위", "공급업체", "판매액", "순위(전월)", "판매액(전월)", "점유율(%)"};
					keyIndex = new String[]{"MCODE", "MNAME", "RN", "NAME", "AMOUNT", "PRE_RN", "PRE_AMOUNT", "POINT"};
					
					//if(pageType.equals("M")) title = "�썡蹂� �뙋留ㅼ닚�쐞 �옲�궧";
					//else title = "二쇰퀎 �뙋留ㅼ닚�쐞 �옲�궧";
					for(int i=0; i < list_myCategory.size(); i++){
						titleList = marketService.excelTitle(pageType, DATE, RGN_C, (String)list_myCategory.get(i).get("CODE"));
						if (CollectionUtils.isEmpty(titleList) == false) {
							title = titleList.get(0).get("MNAME") + "(" + titleList.get(0).get("MCODE") + ")";
							AbstractModel model = new DefaultModel(title, header, keyIndex, list);
							handler  = new ExcelFileMakerResultHandler(workbook, model);
							
							marketService.excel1940(pageType, DATE, PREDATE, RGN_C, CNT, (String)list_myCategory.get(i).get("CODE"), handler);
						}
					}
					if(handler == null){
						title = "MNAME(MCODE)";
						AbstractModel model = new DefaultModel(title, header, keyIndex, list);
						handler  = new ExcelFileMakerResultHandler(workbook, model);
					}
					handler.createSearchSheet(searchMap);
					handler.write(response, fileName);
				}else if(sId.equals("1950")){
					
					TRPL_C = requestHelper.getGlnCode();
					
					List<Map<String, Object>> list_myCategory = marketService.selectListMycategory(TRPL_C);
					List<Map<String, Object>> titleList = new ArrayList<Map<String,Object>>();
					
					String PREDATE = "";
					if(StringUtils.isNotEmpty(DATE)){
						if (StringUtils.isEmpty(pageType) == false && pageType.equals("M")) {
							PREDATE = DateUtil.getPreMonth(DATE, "yyyyMM");
						} else {
							PREDATE = infoChangeService.retrievePreWeek(DATE);
						}
					}
					int CNT = 20; //몇위까지 검색
					//list = marketService.excel1950(pageType, DATE, PREDATE, RGN_C, CNT);			
					searchMap.put("조회기간", DATE_TEXT);
					searchMap.put("지역", LOCMAIN_TEXT);
					
					header = new String[]{"소분류코드", "소분류명", "순위", "공급업체", "판매액", "순위(전월)", "판매액(전월)", "점유율(%)"};
					keyIndex = new String[]{"MCODE", "MNAME", "RN", "NAME", "AMOUNT", "PRE_RN", "PRE_AMOUNT", "POINT"};
					
					//if(pageType.equals("M")) title = "월별 판매순위 랭킹";
					//else title = "주별 판매순위 랭킹";
					
					for(int i=0; i < list_myCategory.size(); i++){
						titleList = marketService.excelTitle(pageType, DATE, RGN_C, (String)list_myCategory.get(i).get("CODE"));
						if (CollectionUtils.isEmpty(titleList) == false) {
							title = titleList.get(0).get("MNAME") + "(" + titleList.get(0).get("MCODE") + ")";
							AbstractModel model = new DefaultModel(title, header, keyIndex, list);
							handler  = new ExcelFileMakerResultHandler(workbook, model);
							
							marketService.excel1950(pageType, DATE, PREDATE, RGN_C, CNT, (String)list_myCategory.get(i).get("CODE"), handler);
						}
					}if(handler == null){
						title = "MNAME(MCODE)";
						AbstractModel model = new DefaultModel(title, header, keyIndex, list);
						handler  = new ExcelFileMakerResultHandler(workbook, model);
					}
					handler.createSearchSheet(searchMap);
					handler.write(response, fileName);
					
				}else if(sId.equals("1970") || sId.equals("1980")){
					
					String PREDATE = "";
					if(StringUtils.isNotEmpty(DATE)){
						if (StringUtils.isEmpty(pageType) == false && pageType.equals("M")) {
							PREDATE = DateUtil.getPreMonth(DATE, "yyyyMM");
						} else {
							PREDATE = infoChangeService.retrievePreWeek(DATE);
						}
					}
					searchMap.put("조회기간", DATE_TEXT);
					searchMap.put("지역", LOCMAIN_TEXT);
					searchMap.put("사업장명", BZPLC_TEXT);
					
					header = new String[]{"경쟁사", "소분류명", "수량", "Total", "점유율(%)", "수량(전월)", "Total(전월)", "점유율(%)(전월)"};
					keyIndex = new String[]{"MNAME", "NAME", "QTY", "QTY_TOT", "QTY_POINT", "PRE_QTY", "PRE_QTY_TOT", "PRE_QTY_POINT"};
					
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					handler  = new ExcelFileMakerResultHandler(workbook, model);
					
					marketService.excel1970_1980(pageType, DATE, PREDATE, BZPLC, handler);
					//if(pageType.equals("M")) title = "월별 경쟁사 시장분석";
					//else title = "주별 경쟁사 시장분석";
					
				}else if(sId.equals("1960")){
					list = new ArrayList<Map<String,Object>>();
					List<Map<String, Object>> ds_bzplc = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C, "1");				
					if(ds_bzplc == null || ds_bzplc.size() == 0){
						throw new AppetizerException("관심 사업장 정보가 없습니다.\n관심 사업장을 등록하세요.");
					}
					
					list = marketService.retrieveABCList(TRPL_C_ARR, ds_bzplc, DATE);
					searchMap.put("조회일자", DateUtil.getDateFormat(DATE, "yyyy-MM-dd"));			
					searchMap.put("거래처코드", TRPL_C);
					searchMap.put("그룹설정", GROUP_TEXT);
					
					List<String> _header = new ArrayList<String>();
					List<String> _keyIndex = new ArrayList<String>();
					
					_header.add("상품명/사업장명");			
					_keyIndex.add("NAME");
					
					for(int i=0 ; i<ds_bzplc.size();i++){				
						_header.add((String)ds_bzplc.get(i).get("NAME"));
						_keyIndex.add("BZPLC"+(i+1));	
					}
					_header.add("총합계");
					_keyIndex.add("BZPLC0");
					_header.add("No");
					_keyIndex.add("NO");
					
					for(int i=0 ; i<ds_bzplc.size();i++){				
						_header.add((String)ds_bzplc.get(i).get("NAME"));
						_keyIndex.add("BZPLC"+(i+1)+"_P");	
					}
					//_header.add("총합계");
					//_keyIndex.add("TOTAL_P");
					
					header = new String[_header.size()];
					keyIndex = new String[_keyIndex.size()];
					for(int i=0 ; i<_header.size();i++){
						header[i] = _header.get(i);
						keyIndex[i] = _keyIndex.get(i);
					}
					
					//합계			
					long total_arr[] = new long[ds_bzplc.size()+1];			
					for(int i=0 ; i<list.size();i++){
						
						for(int j=0 ; j<ds_bzplc.size();j++){
							long sum  = ((BigDecimal)list.get(i).get("BZPLC"+(j+1))).longValue();
							total_arr[j] += sum;
						}
						total_arr[total_arr.length-1] += ((BigDecimal)list.get(i).get("BZPLC0")).longValue();
					}
					
					long sum_arr[] = new long[total_arr.length];
					for(int i=0 ; i<sum_arr.length;i++){
						sum_arr[i] = 0;
					}
					
					for(int i=0 ; i<list.size();i++){
						
						Map<String, Object> v = list.get(i);
						
						for(int j=0 ; j<sum_arr.length;j++){
							
							long sum = 0;
							if(j != sum_arr.length-1) sum = ((BigDecimal)v.get("BZPLC"+(j+1))).longValue();
							else sum = ((BigDecimal)v.get("BZPLC0")).longValue();
							sum_arr[j] += sum;
							double point = 0;
							if(sum_arr[j] == 0 || total_arr[j] == 0) point = 0;
							else point = sum_arr[j] / (double)total_arr[j] * 100;
							if(j != sum_arr.length-1) v.put(("BZPLC"+(j+1)+"_P"), point == 0 ? 0 : String.format("%.2f" , point));
							else v.put(("TOTAL_P"), String.format("%.2f" , point));
						}
						v.put("NO", i+1);
						list.set(i, v);
					}
					AbstractModel model = new DefaultModel(title, header, keyIndex, list);
					excelMaker.createDataSheet(model);
					excelMaker.createSearchSheet(searchMap);
					excelMaker.write(response, fileName);
				}else if(sId.equals("1990") ){
					
					String PREDATE = "";
					
					if(StringUtils.isNotEmpty(DATE)){
						if(pageType.equals("M")) PREDATE = DateUtil.getPreMonth(DATE, "yyyyMM");
						else PREDATE = infoChangeService.retrievePreWeek(DATE);
					}
					
					list = marketService.retrieveCompetitorsClsBzplcWrsList(pageType, TRPL_C, BZPLC, DATE, LCLC, MCLC, SCLC, RGN_C);
					
					searchMap.put("조회기간", DATE_TEXT);
					searchMap.put("지역", LOCMAIN_TEXT);
					searchMap.put("사업장명", BZPLC_TEXT);
					
					header = new String[]	{"기간", "소분류명", "사업장코드", "사업장명", "공급업체코드", "공급업체명", "상품코드", "상품명", "수량", "판매액(원)"};
					keyIndex = new String[]	{"SL_YM", "WRS_SCLFNM", "BZPLC", "BZPLNM", "MFT_NA_TRPL_C", "MFT_NA_TRPL_CNM", "WRS_C", "WRSNM", "SL_QT" , "SL_AM"};
	
				}
			
				if(!sId.equals("1940") && !sId.equals("1950")  && !sId.equals("1960")){
					handler.createSearchSheet(searchMap);
					handler.write(response, fileName);
				}
			}
		
		}catch(AppetizerException e){
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/**
	 * 화면 ID: VAN_DS_SC_1900, VAN_DS_SC_1910
	 * 화면설명: 자사상품 월별 시장점유율, 자사상품 주별 시장점유율
	 * 기    능: 조회
	 */
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/myGiftSharePointList")
	public void myGiftSharePointList(HttpServletRequest request, HttpServletResponse response){		
		
		try {
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
			
			String pageType = requestHelper.getParameter("pageType");// 월별,주별
			String searchType = requestHelper.getParameter("searchType"); // 검색조건 초기화, left, right
			String CODE = requestHelper.getParameter("CODE");
			String DATE = requestHelper.getParameter("DATE");
			String RGN_C = requestHelper.getParameter("LOCMAIN");
			String DIV = requestHelper.getParameter("DIV");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//test
			//DATE = "201506";
									
			if(StringUtils.isEmpty(searchType)){ //최초 로딩시
				
				List<Map<String, Object>> ds_dateList = new ArrayList<Map<String,Object>>();
				
				if (StringUtils.isNotEmpty(pageType)) {				
					if(pageType.equals("M")){ //월별
						//조회월(최근 8개월)
						List<String> dateList = DateUtil.getPreMonth(8,false);
						for(String sdate : dateList){
							Map<String, Object> map = new HashMap<String, Object>();
							map.put("CODE", sdate);
							map.put("NAME", DateUtil.getDateFormat(sdate, "yyyy년MM월"));
							ds_dateList.add(map);
						}
						Collections.reverse(ds_dateList);
						
					}else{	//주별
						//지난주 월요일, 일요일
						List<String> dayList = DateUtil.getPreWeek();
						String sDate = dayList.get(0);
						String eDate = dayList.get(dayList.size()-1);
						int weekCount = 10; //최근 몇주
						
						try{
							ds_dateList = infoChangeService.retrieveWeekList(sDate, eDate, weekCount);
							ds_dateList = DateUtil.getWeeksText(ds_dateList);
						}catch(AppetizerException e){
							throw new AppetizerException("msg.van_ds_sc_1811.server.err.sqww");
						}					
					}
				} // if
				//날짜
				DataSetHelper dHelper = new DataSetHelper("ds_date");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_dateList){
					dHelper.setData(v); 
				}
				out_platformData.addDataSet(dHelper.getDataSet());
				
				//지역
				List<Map<String, Object>> locationList = codeService.getCodeList("RGN_C", "substr(simp_c,3,2) = '00'");
				dHelper = new DataSetHelper("ds_locMain");
				dHelper.addColumns(CommonSimpleCode.class);
				for(Map<String, Object> map : locationList) {
					dHelper.setData(map);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("left")){
				
				List<Map<String, Object>> ds_leftList = marketService.retrieveStoreClsMasterList(pageType, DIV, TRPL_C_ARR, DATE, RGN_C);
				
				DataSetHelper dHelper = new DataSetHelper("ds_left");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_leftList){
					dHelper.setData(v);
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("right")){
				List<Map<String, Object>> ds_rightList = marketService.retrieveStoreClsList(pageType, DIV, TRPL_C_ARR, DATE, CODE, RGN_C);
				DataSetHelper dHelper = new DataSetHelper("ds_right");
				dHelper.addColumns(MapNamesMKPoint.class);
				for(Map<String, Object> v : ds_rightList){
					dHelper.setData(v);
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
			}
			sendData(response, out_platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}	
	
	/**
	 * 화면 ID: VAN_DS_SC_1920, VAN_DS_SC_1930
	 * 화면설명: 자사상품 월별 시장점유율 상세, 자사상품 주별 시장점유율 상세
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/myGiftSharePointDetail")
	public void myGiftSharePointDetail(HttpServletRequest request, HttpServletResponse response){		
		
		try {			
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
			
			String pageType = requestHelper.getParameter("pageType");// 월별,주별
			String searchType = requestHelper.getParameter("searchType"); // 검색조건 초기화, left, right
			String CODE = requestHelper.getParameter("CODE");
			String DATE = requestHelper.getParameter("DATE");
			String RGN_C = requestHelper.getParameter("LOCMAIN");
			String DIV = requestHelper.getParameter("DIV");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			//test
			//DATE = "201506";
			
			if(StringUtils.isEmpty(searchType)){ //최초 로딩시
				
				List<Map<String, Object>> ds_dateList = new ArrayList<Map<String,Object>>();
				
				if(pageType.equals("M")){ //월별
					//조회월(최근 8개월)
					List<String> dateList = DateUtil.getPreMonth(8,false);
					for(String sdate : dateList){
						Map<String, Object> map = new HashMap<String, Object>();
						map.put("CODE", sdate);
						map.put("NAME", DateUtil.getDateFormat(sdate, "yyyy년MM월"));
						ds_dateList.add(map);
					}
					Collections.reverse(ds_dateList);
					
				}else{	//주별
					//지난주 월요일, 일요일
					List<String> dayList = DateUtil.getPreWeek();
					String sDate = dayList.get(0);
					String eDate = dayList.get(dayList.size()-1);
					int weekCount = 10; //최근 몇주
					
					try{
						ds_dateList = infoChangeService.retrieveWeekList(sDate, eDate, weekCount);
						ds_dateList = DateUtil.getWeeksText(ds_dateList);
					}catch(AppetizerException e){
						throw new AppetizerException("msg.van_ds_sc_1811.server.err.sqww");
					}
				}
				//날짜
				DataSetHelper dHelper = new DataSetHelper("ds_date");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_dateList){
					dHelper.setData(v); 
				}
				
				out_platformData.addDataSet(dHelper.getDataSet());				
				
				//지역
				List<Map<String, Object>> locationList = codeService.getCodeList("RGN_C", "substr(simp_c,3,2) = '00'");
				dHelper = new DataSetHelper("ds_locMain");
				dHelper.addColumns(CommonSimpleCode.class);
				for(Map<String, Object> map : locationList) {
					dHelper.setData(map);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("left")){
				
				List<Map<String, Object>> ds_leftList = marketService.retrieveDetailClsMasterList(pageType, DIV, TRPL_C_ARR, DATE, RGN_C);
				
				DataSetHelper dHelper = new DataSetHelper("ds_left");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_leftList){
					dHelper.setData(v);
				}
				
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("right")){
				
				List<Map<String, Object>> ds_rightList = marketService.retrieveDetailClsSlaveList(pageType, DIV, TRPL_C_ARR, DATE, CODE, RGN_C);
				DataSetHelper dHelper = new DataSetHelper("ds_right");
				dHelper.addColumns(MapNamesMKPoint.class);
				for(Map<String, Object> v : ds_rightList){
					dHelper.setData(v);
				}
				
				out_platformData.addDataSet(dHelper.getDataSet());
			}
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}
	
	
	/**
	 * 화면 ID: VAN_DS_SC_1940, VAN_DS_SC_1950
	 * 화면설명: 월별 판매순위 랭킹, 주별 판매순위 랭킹
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/SalesRanking")
	public void SalesRanking(HttpServletRequest request, HttpServletResponse response){		
		
		try {
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
			
			String pageType = requestHelper.getParameter("pageType");// 월별,주별
			String searchType = requestHelper.getParameter("searchType"); // 검색조건 초기화, left, right
			String CODE = requestHelper.getParameter("CODE");
			String DATE = requestHelper.getParameter("DATE");
			String RGN_C = requestHelper.getParameter("LOCMAIN");
			String TRPL_C = requestHelper.getGlnCode();
			String PREDATE = "";
			if(StringUtils.isNotEmpty(DATE)){
				if(pageType.equals("M")) PREDATE = DateUtil.getPreMonth(DATE, "yyyyMM");
				else PREDATE = infoChangeService.retrievePreWeek(DATE);
			}
			int CNT = 20; //몇위까지 검색
			
			//test
			//DATE = "201506";
						
			if(StringUtils.isEmpty(searchType)){ //최초 로딩시
				
				List<Map<String, Object>> ds_dateList = new ArrayList<Map<String,Object>>();
				
				if(pageType.equals("M")){ //월별
					//조회월(최근 8개월)-> 1년으로 증가: 2019.12.09
					int mon = 12;
					List<String> dateList = DateUtil.getPreMonth(mon, false);
					for(String sdate : dateList){
						Map<String, Object> map = new HashMap<String, Object>();
						map.put("CODE", sdate);
						map.put("NAME", DateUtil.getDateFormat(sdate, "yyyy년MM월"));
						ds_dateList.add(map);
					}
					Collections.reverse(ds_dateList);
					
				}else{	//주별
					//지난주 월요일, 일요일
					List<String> dayList = DateUtil.getPreWeek();
					String sDate = dayList.get(0);
					String eDate = dayList.get(dayList.size()-1);
					int weekCount = 10; //최근 몇주
					
					try{
						ds_dateList = infoChangeService.retrieveWeekList(sDate, eDate, weekCount);
						ds_dateList = DateUtil.getWeeksText(ds_dateList);
					}catch(AppetizerException e){
						throw new AppetizerException("msg.van_ds_sc_1811.server.err.sqww");
					}
					
				}
				//날짜
				DataSetHelper dHelper = new DataSetHelper("ds_date");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_dateList){
					dHelper.setData(v); 
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
				
				//지역
				List<Map<String, Object>> locationList = codeService.getCodeList("RGN_C", "substr(simp_c,3,2) = '00'");
				dHelper = new DataSetHelper("ds_locMain");
				dHelper.addColumns(CommonSimpleCode.class);
				for(Map<String, Object> map : locationList) {
					dHelper.setData(map);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("left")){
				
				List<Map<String, Object>> ds_leftList = marketService.retrieveRankingMasterList(pageType, DATE, RGN_C, TRPL_C);
				
				DataSetHelper dHelper = new DataSetHelper("ds_left");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_leftList){
					dHelper.setData(v);
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("right")){
				
				List<Map<String, Object>> ds_rightList = marketService.retrieveRankingSlaveList(pageType, DATE, PREDATE, CODE, RGN_C, CNT);
				DataSetHelper dHelper = new DataSetHelper("ds_right");
				dHelper.addColumns(MapNamesMKRanking.class);
				for(Map<String, Object> v : ds_rightList){
					dHelper.setData(v);
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
			}
			
			//나의 카테고리 리스트
			List<Map<String, Object>> list_myCategory = marketService.selectListMycategory(TRPL_C);
			DataSetHelper dHelper = new DataSetHelper("ds_myCategory");
			dHelper.getDataSet().addColumn("CODE", DataTypes.STRING);
			for(Map<String, Object> v : list_myCategory){
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
	 * 화면 ID: VAN_DS_SC_1970, VAN_DS_SC_1980
	 * 화면설명: 월별 경쟁사 시장분석, 주별 경쟁사 시장분석
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/competitorsAnalysis")
	public void competitorsAnalysis(HttpServletRequest request, HttpServletResponse response){		
		
		try {			
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
			
			String pageType = requestHelper.getParameter("pageType");// 월별,주별
			String searchType = requestHelper.getParameter("searchType"); // 검색조건 초기화, left, right
			String DATE = requestHelper.getParameter("DATE");
			String TRPL_C = requestHelper.getParameter("CODE");			
			String RGN_C = requestHelper.getParameter("LOCMAIN");
			String BZPLC = requestHelper.getParameter("BZPLC");
			String LCLC = requestHelper.getParameter("LCLC");
			String MCLC = requestHelper.getParameter("MCLC");
			String SCLC = requestHelper.getParameter("SCLC");

			String BZPLC_ARR[] = {};			
			
			if(StringUtils.isNotEmpty(BZPLC) && !"undefined".equals(BZPLC)){
				BZPLC_ARR = BZPLC.split(",");
			}			
			String PREDATE = "";
			if(StringUtils.isNotEmpty(DATE)){
				if(pageType.equals("M")) PREDATE = DateUtil.getPreMonth(DATE, "yyyyMM");
				else PREDATE = infoChangeService.retrievePreWeek(DATE);
			}
			
			//test
			//DATE = "201506";
			
			if(StringUtils.isEmpty(searchType)){ //최초 로딩시
				
				List<Map<String, Object>> ds_dateList = new ArrayList<Map<String,Object>>();
				
				if(pageType.equals("M")){ //월별
					//조회월(최근 8개월)
					List<String> dateList = DateUtil.getPreMonth(8,false);
					for(String sdate : dateList){
						Map<String, Object> map = new HashMap<String, Object>();
						map.put("CODE", sdate);
						map.put("NAME", DateUtil.getDateFormat(sdate, "yyyy년MM월"));
						ds_dateList.add(map);
					}
					Collections.reverse(ds_dateList);
				}else{	//주별
					//지난주 월요일, 일요일
					List<String> dayList = DateUtil.getPreWeek();
					String sDate = dayList.get(0);
					String eDate = dayList.get(dayList.size()-1);
					int weekCount = 10; //최근 몇주					
					try{
						ds_dateList = infoChangeService.retrieveWeekList(sDate, eDate, weekCount);
						ds_dateList = DateUtil.getWeeksText(ds_dateList);
					}catch(AppetizerException e){
						throw new AppetizerException("msg.van_ds_sc_1811.server.err.sqww");
					}
				}
								
				//날짜
				DataSetHelper dHelper = new DataSetHelper("ds_date");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_dateList){
					dHelper.setData(v); 
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
				
				//지역
				List<Map<String, Object>> locationList = codeService.getCodeList("RGN_C", "substr(simp_c,3,2) = '00'");
				dHelper = new DataSetHelper("ds_locMain");
				dHelper.addColumns(CommonSimpleCode.class);
				for(Map<String, Object> map : locationList) {
					dHelper.setData(map);
				}
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("bzplc")){
				//점포
				List<Map<String, Object>> ds_bzplc = marketService.retrieveCompetitorsBzplcList(pageType, DATE, RGN_C);
				DataSetHelper dHelper = new DataSetHelper("ds_bzplc");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_bzplc){
					dHelper.setData(v); 
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());			
			
			}else if(searchType.equals("left")){
				
				List<Map<String, Object>> ds_leftList = marketService.retrieveCompetitorsMasterList(pageType, DATE, BZPLC_ARR);
				
				DataSetHelper dHelper = new DataSetHelper("ds_left");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_leftList){
					dHelper.setData(v);
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
				
			}else if(searchType.equals("right")){
				
				List<Map<String, Object>> ds_rightList = marketService.retrieveCompetitorsSlaveList(pageType, TRPL_C, BZPLC_ARR, DATE, PREDATE);
				DataSetHelper dHelper = new DataSetHelper("ds_right");
				dHelper.addColumns(MapNamesMKCompetitors.class);
				for(Map<String, Object> v : ds_rightList){
					dHelper.setData(v);
				}
				//ValueObjectSetUtil.dataSetPrint(dHelper.getDataSet());
				out_platformData.addDataSet(dHelper.getDataSet());
			}else if(searchType.equals("ClsBzplcWrs")){
				
				// 경쟁사 상품 판매가격정보 조회
				
				List<Map<String, Object>> ds_ClsBzplcWrsList = marketService.retrieveCompetitorsClsBzplcWrsList(pageType, TRPL_C, BZPLC, DATE, LCLC, MCLC, SCLC, RGN_C);
				
				DataSetHelper dHelper = new DataSetHelper("ds_ClsBzplcWrs");
				
				dHelper.addColumns(MapNamesClsBzplcWrs.class);
				
				for(Map<String, Object> v : ds_ClsBzplcWrsList){
					dHelper.setData(v);
				}

				out_platformData.addDataSet(dHelper.getDataSet());
			}
			
			// 
			
			//나의 카테고리 리스트
			List<Map<String, Object>> list_myCategory = marketService.selectListMycategory(requestHelper.getGlnCode());
			DataSetHelper dHelper = new DataSetHelper("ds_myCategory");
			dHelper.getDataSet().addColumn("CODE", DataTypes.STRING);
			for(Map<String, Object> v : list_myCategory){
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
	 * 화면 ID: VAN_DS_SC_1960
	 * 화면설명: 점포별 ABC분석
	 * 기    능: 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/abcStore")
	public void abcStore(HttpServletRequest request, HttpServletResponse response){		
		
		try {			
			
			PlatformData out_platformData = new PlatformData();
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
			String searchType = requestHelper.getParameter("searchType");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			if(requestHelper.getMbcoType().equals("0")) TRPL_C = requestHelper.getGlnCode();
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String date = requestHelper.getParameter("date");
			//MIN,MAX값을 DB에 저장할시 필요
			//String bs = requestHelper.getParameter("bs");
			//String be = requestHelper.getParameter("be");
			if(StringUtils.isEmpty(TRPL_C)) TRPL_C = requestHelper.getGlnCode();
			
			List<Map<String, Object>> ds_bzplc = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C, "1");
			
			if(searchType.equals("init")){ //최초 로딩시
				
				Map<String, Object> empty = new HashMap<String, Object>();
				empty.put("MIN", "80");
				empty.put("MAX", "95");
				List<Map<String, Object>> ds_bGroup = new ArrayList<Map<String,Object>>();
				ds_bGroup.add(empty);
				
				DataSetHelper dHelper = new DataSetHelper("ds_bGroup");
				dHelper.addColumns(MapNamesMinMax.class);
				for(Map<String, Object> v : ds_bGroup){
					dHelper.setData(v); 
				}
				out_platformData.addDataSet(dHelper.getDataSet());
				
				dHelper = new DataSetHelper("ds_bzplc");
				dHelper.addColumns(MapNamesMKCodeName.class);
				for(Map<String, Object> v : ds_bzplc){
					dHelper.setData(v); 
				}
				out_platformData.addDataSet(dHelper.getDataSet());
			}else{
												
				if(ds_bzplc == null || ds_bzplc.size() == 0){
					throw new AppetizerException("msg.van_ds_sc_1960.server.bzplc.nodate");
				}
				List<Map<String, Object>> ds_list = marketService.retrieveABCList(TRPL_C_ARR, ds_bzplc, date);
				DataSetHelper dHelper = new DataSetHelper("ds_list");
				dHelper.addColumns(MapNamesABC.class);
				for(Map<String, Object> v : ds_list){
					dHelper.setData(v); 
				}
				out_platformData.addDataSet(dHelper.getDataSet());
			}
			
			sendData(response, out_platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}

	/**
	 * 사용자정보제공동의내역 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/analysis/market/retrieveConsentTrplList")
	public void retrieveConsentTrplList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String bsnDsc = requestHelper.getParameter("bsnDsc");
		String naTrplC  = requestHelper.getParameter("naTrplC");
		
		try {			

			List<Map<String,Object>> list = marketService.retrieveConsentTrplList(bsnDsc, naTrplC);
			
			/** 가격정보제공동의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_usrConsentList");
			
			if (list.size() > 0) {
				dsHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> vo : list) {
					dsHelper.setData(vo);
				}
			}

			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData); // SUCCESS
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}

	/**
	 * 화면 ID: VAN_DS_SC_1850
	 * 화면설명: 관심 점포/상품 등록,삭제
	 * 기    능: 저장
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/saveInteTrplList")
	public void saveInteTrplList(HttpServletRequest request, HttpServletResponse response){		
		
		try {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터			
			String analysis = requestHelper.getParameter("analysis"); 	//설정항목 구분
			String sqlType = requestHelper.getParameter("sqlType");
			String TRPL_C = requestHelper.getGlnCode();
			DataSet ds = null;
			
			if(sqlType.equals("DEL")) ds = requestHelper.getDataSet("ds_saveList");
			else  ds = requestHelper.getDataSet("ds_usrConsentList");
			
			if(sqlType.equals("DEL")) marketService.deleteInteTrplList(ds, TRPL_C, analysis);
			else marketService.insertInteTrplList(ds, TRPL_C, analysis);
			sendData(response, new PlatformData());
	
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/retrieveInteTrplList")
	public void retrieveInteTrplList(HttpServletRequest request, HttpServletResponse response
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
			
			List<Map<String, Object>> saveList = marketService.retrieveInteTrplList(TRPL_C_ARR[0], ANALYSIS);
			
			saveList = marketService.retrieveInteTrplList(TRPL_C_ARR[0], ANALYSIS);
			 
			DataSetHelper dHelper = new DataSetHelper("ds_saveList");
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
	 * 사용자정보제공동의업체 상품리스트 
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/analysis/market/retrieveTrplWrsList")
	public void retrieveTrplWrsList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String bsnDsc = requestHelper.getParameter("bsnDsc");
		String naTrplC  = requestHelper.getParameter("naTrplC");
		String inteTrplC  = requestHelper.getParameter("inteTrplC");
		String searchWrsNm  = requestHelper.getParameter("searchWrsNm");
		
		try {			

			List<Map<String,Object>> selectList = marketService.retrieveTrplWrsList(bsnDsc, naTrplC, inteTrplC, searchWrsNm);
			
			//selectList = infoChangeService.retrieveGoodsList(TRPL_C_ARR[0], saveDsList);
			//saveList = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C_ARR[0], ANALYSIS);
			
			/** 가격정보제공동의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_trplWrsList");
			
			if (selectList.size() > 0) {
				dsHelper.addColumns(selectList.get(0).keySet());
				for (Map<String, Object> vo : selectList) {
					dsHelper.setData(vo);
				}
			}

			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData); // SUCCESS
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	// 
	@RequestMapping(method = RequestMethod.POST, value = "/rest/analysis/market/retrieveClsWrsList")
	public void retrieveClsWrsList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String TRPL_C = requestHelper.getGlnCode();
		
		String NA_WRS_LCLC    = requestHelper.getParameter("NA_WRS_LCLC");
		String NA_WRS_MCLC    = requestHelper.getParameter("NA_WRS_MCLC");
		String NA_WRS_SCLC    = requestHelper.getParameter("NA_WRS_SCLC");
		String NA_WRS_DTCF_C  = requestHelper.getParameter("NA_WRS_DTCF_C");

		
		try {			

			List<Map<String,Object>> selectList = marketService.retrieveClsWrsList(TRPL_C, NA_WRS_LCLC, NA_WRS_MCLC, NA_WRS_SCLC, NA_WRS_DTCF_C);
			
			//selectList = infoChangeService.retrieveGoodsList(TRPL_C_ARR[0], saveDsList);
			//saveList = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C_ARR[0], ANALYSIS);
			
			/** 가격정보제공동의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_clsWrsList");
			
			if (selectList.size() > 0) {
				dsHelper.addColumns(selectList.get(0).keySet());
				for (Map<String, Object> vo : selectList) {
					dsHelper.setData(vo);
				}
			}

			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData); // SUCCESS
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	
	/**
	 * 화면 ID: VAN_DS_SC_1994
	 * 화면설명: 관심 점포/상품 등록,삭제
	 * 기    능: 저장
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/saveInteTrplWrsList")
	public void saveInteTrplWrsList(HttpServletRequest request, HttpServletResponse response){		
		
		try {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터			
			String analysis = requestHelper.getParameter("analysis"); 	//설정항목 구분
			String sqlType = requestHelper.getParameter("sqlType");
			String TRPL_C = requestHelper.getGlnCode();
			DataSet ds = null;
			
			if(sqlType.equals("DEL")){
				ds = requestHelper.getDataSet("ds_saveList");
			} else {
				ds = requestHelper.getDataSet("ds_trplWrsList");
			}
			
			if(sqlType.equals("DEL")) {
				marketService.deleteClsInteWrsList(ds, TRPL_C, analysis);
			} else { 
				marketService.insertInteTrplWrsList(ds, TRPL_C, analysis);
			}
			
			sendData(response, new PlatformData());
	
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}
	
	/**
	 * 화면 ID: VAN_DS_SC_1994
	 * 화면설명: 관심 점포/상품 등록,삭제
	 * 기    능: 저장
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/analysis/market/insertInteClsWrsList")
	public void insertInteClsWrsList(HttpServletRequest request, HttpServletResponse response){		
		
		try {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//파라미터			
			String TRPL_C = requestHelper.getGlnCode();
			DataSet ds = null;
			String analysis = null; 

			ds = requestHelper.getDataSet("ds_clsWrsList");
			marketService.insertInteClsWrsList(ds, TRPL_C);

			sendData(response, new PlatformData());
	
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		} 
	}
	

	/**
	 * 사용자정보제공동의업체 상품리스트 
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/analysis/market/retrieveClsInteWrsList")
	public void retrieveClsInteWrsList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String bsnDsc = requestHelper.getParameter("bsnDsc");
		String naTrplC  = requestHelper.getParameter("naTrplC");
		String LCLC  = requestHelper.getParameter("LCLC");
		String MCLC  = requestHelper.getParameter("MCLC");
		String SCLC  = requestHelper.getParameter("SCLC");
		String DTCF_C  = requestHelper.getParameter("DTCF_C");
		
		
		try {			

			List<Map<String,Object>> selectList = marketService.retrieveClsInteWrsList(bsnDsc, naTrplC, LCLC, MCLC, SCLC, DTCF_C);
			
			//selectList = infoChangeService.retrieveGoodsList(TRPL_C_ARR[0], saveDsList);
			//saveList = infoChangeService.retrieveSaveStoreGoodsList(TRPL_C_ARR[0], ANALYSIS);
			
			/** 가격정보제공 의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_saveList");
			
			if (selectList.size() > 0) {
				dsHelper.addColumns(selectList.get(0).keySet());
				for (Map<String, Object> vo : selectList) {
					dsHelper.setData(vo);
				}
			}

			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData); // SUCCESS
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}

	/*
	 * 화면ID : VAN_DS_SC_0800
	 * 화면명 : 일자별 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "rest/analysis/market/retrieveCatSalesMon")
	public void retrieveCatSalesMon(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {

			String srhSlYm = requestHelper.getParameter("SL_YM"); //조회월
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드

			List<Map<String,Object>> selectList = marketService.retrieveCatSalesMon(srhSlYm, srhTrplC);
			
			/** 가격정보제공 의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
			
			if (selectList.size() > 0) {
				dsHelper.addColumns(selectList.get(0).keySet());
				for (Map<String, Object> vo : selectList) {
					dsHelper.setData(vo);
				}
			}

			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData); // SUCCESS

		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC1990
	 * 화면명 : 월별 카테고리판매정보 엑셀 다운로드
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "rest/excel/analysis/market/downloadCatSalesMonExcel")
	public void downloadCatSalesMonExcel(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
		String title       = request.getParameter("title");
		String fileName    = request.getParameter("fileName");
		String pageType    = request.getParameter("pageType");	
		String TRPL_C      = request.getParameter("TRPL_C");
		String TRPL_C_TEXT = request.getParameter("TRPL_C_TEXT");
		
		String LCLC = requestHelper.getParameter("LCLC");
		String MCLC = requestHelper.getParameter("MCLC");
		String SCLC = requestHelper.getParameter("SCLC");
		String DTCF_C = requestHelper.getParameter("DTCF_C");

		String SL_YM =  requestHelper.getParameter("SL_YM");
		
		String DT_DSC = "1";  // 1. 월별, 2 주별
		

		String DIV_TEXT = request.getParameter("DIV_TEXT");
		String DATE_TEXT = request.getParameter("DATE_TEXT");
		String LOCMAIN_TEXT = request.getParameter("LOCMAIN_TEXT");
		String BZPLC = requestHelper.getParameter("BZPLC");
		String BZPLC_TEXT = requestHelper.getParameter("BZPLC_TEXT");
		String GROUP_TEXT = requestHelper.getParameter("GROUP_TEXT");		
		
		try {
			title = URLDecoder.decode(StringUtil.toString(title), "utf-8");
			TRPL_C_TEXT = URLDecoder.decode(StringUtil.toString(TRPL_C_TEXT), "utf-8");
			DIV_TEXT = URLDecoder.decode(StringUtil.toString(DIV_TEXT), "utf-8");
			DATE_TEXT = URLDecoder.decode(StringUtil.toString(DATE_TEXT), "utf-8");
			LOCMAIN_TEXT = URLDecoder.decode(StringUtil.toString(LOCMAIN_TEXT), "utf-8");
			BZPLC_TEXT = URLDecoder.decode(StringUtil.toString(BZPLC_TEXT), "utf-8");
			GROUP_TEXT = URLDecoder.decode(StringUtil.toString(GROUP_TEXT), "utf-8");
			
		} catch (UnsupportedEncodingException e) {
			throw new AppetizerException("파라미터 디코드 에러발생!");
		}
		
		String[] header ;
		String[] keyIndex  ;
		
		List<Map<String, Object>> list = null;
		ExcelFileMakerResultHandler handler = null;
		Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
		Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
		try {

			searchMap.put("조회기간", DATE_TEXT);
			searchMap.put("지역", LOCMAIN_TEXT);
			searchMap.put("사업장명", BZPLC_TEXT);
			
			header = new String[]	{"기간", "사업장코드", "사업장명", "소분류명", "세분류명", "공급업체코드", "공급업체명", "상품코드", "상품명", "수량", "판매액(원)", "동의여부"};
			keyIndex = new String[]	{"SL_YM","BZPLC", "BZPLNM", "WRS_SCLFNM", "WRS_DTCFNM", "MFT_NA_TRPL_C", "MFT_NA_TRPL_CNM", "WRS_C", "WRSNM", "SL_QT" , "SL_AM" ,"CONSENT_YN"};

			AbstractModel model = new DefaultModel(title, header, keyIndex, list);
			handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			marketService.retrieveClsWrsMonList(pageType, TRPL_C, BZPLC, SL_YM, LCLC, MCLC, SCLC, DTCF_C, handler);
			
			//과금로그 저장		
			this.markUpClsSalesMonExcel(TRPL_C, SL_YM, DT_DSC, LCLC, MCLC, SCLC, DTCF_C, requestHelper.getUserID());			
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0800
	 * 화면명 : 일자별 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "rest/analysis/market/selectWeekList")
	public void selectWeekList(HttpServletRequest request, HttpServletResponse response) {

		//주별
		//지난주 월요일, 일요일

		List<Map<String, Object>> ds_dateList = new ArrayList<Map<String,Object>>();
		
		List<String> dayList = DateUtil.getPreWeek();
		String sDate = dayList.get(0);
		String eDate = dayList.get(dayList.size()-1);
		// int weekCount = 52; //최근 몇주					
		int weekCount = 25; //최근 몇주

		try{
			ds_dateList = infoChangeService.retrieveWeekList(sDate, eDate, weekCount);
			ds_dateList = DateUtil.getWeeksText(ds_dateList);
			
			PlatformData out_platformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_date");
			dHelper.addColumns(MapNamesMKCodeName.class);
			
			for(Map<String, Object> v : ds_dateList){
				dHelper.setData(v); 
			}
			
			out_platformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_platformData);
			
		}catch(AppetizerException e){
			throw new AppetizerException("msg.van_ds_sc_1811.server.err.sqww");
		}					
		

	}


	/*
	 * 화면ID : VAN_DS_SC_0800
	 * 화면명 : 일자별 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "rest/analysis/market/retrieveCatSalesWeek")
	public void retrieveCatSalesWeek(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {

			String srhSlWk = requestHelper.getParameter("SL_WK"); //조회월
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드

			List<Map<String,Object>> selectList = marketService.retrieveCatSalesWeek(srhSlWk, srhTrplC);
			
			/** 가격정보제공 의 */
			DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
			
			if (selectList.size() > 0) {
				dsHelper.addColumns(selectList.get(0).keySet());
				for (Map<String, Object> vo : selectList) {
					dsHelper.setData(vo);
				}
			}

			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData); // SUCCESS

		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	

	/*
	 * 화면ID : VAN_DS_SC1991
	 * 화면명 : 주별 카테고리판매정보 엑셀 다운로드
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "rest/excel/analysis/market/downloadCatSalesWeekExcel")
	public void downloadCatSalesWeekExcel(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);			
		String title       = request.getParameter("title");
		String fileName    = request.getParameter("fileName");
		String pageType    = request.getParameter("pageType");	
		String TRPL_C      = request.getParameter("TRPL_C");
		String TRPL_C_TEXT = request.getParameter("TRPL_C_TEXT");
		
		String LCLC = requestHelper.getParameter("LCLC");
		String MCLC = requestHelper.getParameter("MCLC");
		String SCLC = requestHelper.getParameter("SCLC");
		String DTCF_C = requestHelper.getParameter("DTCF_C");
		
		
		String DT_DSC = "2";  // 1. 월별, 2 주별

		String SL_WK =  requestHelper.getParameter("SL_WK");
		

		String DIV_TEXT = request.getParameter("DIV_TEXT");
		String DATE_TEXT = request.getParameter("DATE_TEXT");
		String LOCMAIN_TEXT = request.getParameter("LOCMAIN_TEXT");
		String BZPLC = requestHelper.getParameter("BZPLC");
		String BZPLC_TEXT = requestHelper.getParameter("BZPLC_TEXT");
		String GROUP_TEXT = requestHelper.getParameter("GROUP_TEXT");		
		
		try {
			title = URLDecoder.decode(StringUtil.toString(title), "utf-8");
			TRPL_C_TEXT = URLDecoder.decode(StringUtil.toString(TRPL_C_TEXT), "utf-8");
			DIV_TEXT = URLDecoder.decode(StringUtil.toString(DIV_TEXT), "utf-8");
			DATE_TEXT = URLDecoder.decode(StringUtil.toString(DATE_TEXT), "utf-8");
			LOCMAIN_TEXT = URLDecoder.decode(StringUtil.toString(LOCMAIN_TEXT), "utf-8");
			BZPLC_TEXT = URLDecoder.decode(StringUtil.toString(BZPLC_TEXT), "utf-8");
			GROUP_TEXT = URLDecoder.decode(StringUtil.toString(GROUP_TEXT), "utf-8");
			
		} catch (UnsupportedEncodingException e) {
			throw new AppetizerException("파라미터 디코드 에러발생!");
		}
		
		String[] header ;
		String[] keyIndex  ;
		
		List<Map<String, Object>> list = null;
		
		ExcelFileMakerResultHandler handler = null;
		Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
		Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
		
		try {

			
			searchMap.put("조회기간", DATE_TEXT);
			searchMap.put("지역", LOCMAIN_TEXT);
			searchMap.put("사업장명", BZPLC_TEXT);
			
			header = new String[]	{"기간", "사업장코드", "사업장명", "소분류명", "세분류명", "공급업체코드", "공급업체명", "상품코드", "상품명", "수량", "판매액(원)", "동의여부"};
			keyIndex = new String[]	{"SL_YM", "BZPLC", "BZPLNM", "WRS_SCLFNM", "WRS_DTCFNM", "MFT_NA_TRPL_C", "MFT_NA_TRPL_CNM", "WRS_C", "WRSNM", "SL_QT" , "SL_AM", "CONSENT_YN"};

			AbstractModel model = new DefaultModel(title, header, keyIndex, list);
			handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			marketService.retrieveClsWrsWeekList(pageType, TRPL_C, BZPLC, SL_WK, LCLC, MCLC, SCLC, DTCF_C, handler);
			
			//과금로그 저장		
			this.markUpClsSalesWeekExcel(TRPL_C, SL_WK, DT_DSC, LCLC, MCLC, SCLC, DTCF_C, requestHelper.getUserID());	 		
						
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	/**
	 * 과금로그: 월별
	 *
	 * 월별 조회 엑셀
	 * @param  
	 * @param  
	 * @param  
	 */
	private void markUpClsSalesMonExcel(String TRPL_C, String SL_YM, String DT_DSC, String LCLC, String MCLC, String SCLC, String DTCF_C, String MB_ID) {
		
		// TRPL_C, SL_YM, LCLC, MCLC, SCLC, DTCF_C, DT_DSC, requestHelper.getUserID()
		billingMarkUpService.markUpClsSalesMonExcel( TRPL_C, SL_YM, DT_DSC,LCLC, MCLC, SCLC, DTCF_C,  MB_ID);
		
	}
	
	private void markUpClsSalesWeekExcel(String TRPL_C, String SL_YM,String DT_DSC,  String LCLC, String MCLC, String SCLC, String DTCF_C, String MB_ID) {
		
		// TRPL_C, SL_YM, LCLC, MCLC, SCLC, DTCF_C, DT_DSC, requestHelper.getUserID()
		billingMarkUpService.markUpClsSalesWeekExcel( TRPL_C, SL_YM, DT_DSC, LCLC, MCLC, SCLC, DTCF_C,  MB_ID);
		
	}
	
} // END OF CLASS
