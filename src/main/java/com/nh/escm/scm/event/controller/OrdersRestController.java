package com.nh.escm.scm.event.controller;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
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
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.scm.event.service.OrdersService;
import com.nh.escm.scm.event.vo.OrdersBKGEVTPopUpVO;
import com.nh.escm.scm.event.vo.OrdersEPriceChangePopUpVO;
import com.nh.escm.scm.event.vo.OrdersEPriceChangeVO;
import com.nh.escm.scm.event.vo.OrdersPreEventProcVO;
import com.nh.escm.scm.event.vo.OrdersPreEventSumsVO;
import com.nh.escm.scm.event.vo.OrdersPreEventVO;


/**
 * 예약행사 
 * @author swha
 * 
 */
@RestController
public class OrdersRestController extends AbstractController {
	
	@Autowired
	private OrdersService ordersService;
	
	/*
	 * ID : VAN_DS_SC0200
	 * 화면명 : 예약행사수주현황조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrievePreEvent")
	public void retrievePreEvent(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhBkgEvtYy = 		requestHelper.getParameter("BKG_EVT_YY"); //예약행사년도
			String srhBkgEvtNo = 		requestHelper.getParameter("BKG_EVT_NO");//예약행사번호
			String srhOrrDdlDt = 		requestHelper.getParameter("ORR_DDL_DT");//발주마감일
			String srhNaOdrSt = 		requestHelper.getParameter("NA_ODR_ST");//마감상태
			String srhOdrplNaTrplC = 	requestHelper.getParameter("ODRPL_NA_TRPL_C");//발주처코드
			String srhNaWrsC = 			requestHelper.getParameter("NA_WRS_C");//상품코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<OrdersPreEventVO> list = ordersService.retrievePreEvent(srhBkgEvtYy, srhBkgEvtNo, srhOrrDdlDt, srhNaOdrSt, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_PreEventM");
				dsHelper.addColumns(OrdersPreEventVO.class);
				
				for(OrdersPreEventVO vo : list){
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
	 * ID : VAN_DS_SC0200
	 * 화면명 : 예약행사수주현황조회
	 * 화면 설명 : Grid Detail
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrievePreEventDetail")
	public void retrievePreEventDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String bkgEvtYy = 		requestHelper.getParameter("BKG_EVT_YY"); //예약행사년도
			String bkgEvtNo = 		requestHelper.getParameter("BKG_EVT_NO");//예약행사번호
			String naWrsC = 		requestHelper.getParameter("NA_WRS_C");//발주마감일
			String rvoplNaTrplC = 		requestHelper.getParameter("RVOPL_NA_TRPL_C");//수주처코드
			String rvoplNaTeamC = 	requestHelper.getParameter("RVOPL_NA_TEAM_C");//수주처팀코드
			String odrplNaTrplC = 	requestHelper.getParameter("ODRPL_NA_TRPL_C");//발주처
			String rqQt = 			requestHelper.getParameter("RQ_QT");//발주량
			 
			List<OrdersPreEventVO> list = ordersService.retrievePreEventDetail(bkgEvtYy, bkgEvtNo, naWrsC, rvoplNaTrplC, rvoplNaTeamC, odrplNaTrplC, rqQt);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_PreEventD");
				dsHelper.addColumns(OrdersPreEventVO.class);
				
				for(OrdersPreEventVO vo : list){
					dsHelper.setData(vo);
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
	 * 화면ID : VAN_DS_SC0200
	 * 화면명 : 예약행사수주현황
	 * 화면 설명 : Excel DownLoad Master
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/orders/downloadExcelMasterPreEvent")
	public void downloadExcelMasterPreEvent(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
//			String srhOrrDdlDt = request.getParameter("ORR_DDL_DT"); // 발주마감일
//			String srhNaOdrSt = request.getParameter("NA_ODR_ST"); // 마감상태
			String type = request.getParameter("SEPARATOR");
			String fileName = request.getParameter("FILE_NAME"); // 파일명
			String srhBkgEvtYy = request.getParameter("BKG_EVT_YY"); // 예약행사년도
			String srhBkgEvtNo = request.getParameter("BKG_EVT_NO"); // 예약행사번호
			String srhOdrplNaTrplC = request.getParameter("ODRPL_NA_TRPL_C"); // 발주처코드
			String srhNaWrsC = request.getParameter("NA_WRS_C"); // 상품코드
			
			// 상세조회
			String srhRvoplNaTrplC = request.getParameter("RVOPL_NA_TRPL_C"); // 수주처코드
			String srhRqQt = request.getParameter("RQ_QT"); // 발주량(C)
			
			String TRPL_C = request.getParameter("TRPL_C"); // 권한사업장코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String headerStr;
			String keyStr;
			
			if ("A".equals(type)) {
				headerStr = "년도|예약구매코드|상품코드|상품명|단위|입수|계약단가|수주처코드|수주처명|발주처코드|발주처명|팀명|배송요청일|예약 발주량|확정 발주량|확정구성비|확정발주금액";
				keyStr = "BKG_EVT_YY|BKG_EVT_NO|NA_WRS_C|NA_WRS_N|UNIT|BOXPE_AQZ|CTR_UPR|RVOPL_NA_TRPL_C|RVOPL_NA_TRPL_N|ODRPL_NA_TRPL_C|ODRPL_NA_TRPL_N|ODRPL_NA_TEAM_N|DVY_RQR_DT|B_RQ_QT|DFN_QT|DFN_RATE|B_TOT_GOOD_PR";
			} else if ("B".equals(type)) {
				headerStr = "상품코드|상품명|단위|입수|계약단가|발주량|발주금액|수주처코드|수주처명";
				keyStr = "NA_WRS_C|NA_WRS_N|UNIT|BOXPE_AQZ|CTR_UPR|RQ_QT|TOT_GOOD_PR|RVOPL_NA_TRPL_C|RVOPL_NA_TRPL_N";
			} else {
				headerStr = "발주처코드|발주처명|팀|배송요청일|예약발주BOX|확정발주BOX|확정구성비|확정발주금액";
				keyStr = "ODRPL_NA_TRPL_C|ODRPL_NA_TRPL_NM|ODRPL_NA_TEAM_NM|DVY_RQR_DT|RQ_QT|DFN_QT|DFN_RATE|TOT_GOOD_PR";
			}
			
			String[] header = headerStr.split("\\|");
			String[] keyIndex = keyStr.split("\\|");
			
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, null);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			if ("A".equals(type)) {
				ordersService.downloadExcelPreEvent(srhBkgEvtYy, srhBkgEvtNo, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR, handler);
			} else if ("B".equals(type)) {
				ordersService.downloadExcelMasterPreEvent(srhBkgEvtYy, srhBkgEvtNo, srhOdrplNaTrplC, srhNaWrsC, TRPL_C_ARR, handler);
			} else {
				ordersService.downloadExcelDetailPreEvent(srhBkgEvtYy, srhBkgEvtNo, srhRvoplNaTrplC, srhOdrplNaTrplC, srhNaWrsC, srhRqQt, handler);
			}
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("예약구매년도", srhBkgEvtYy);
			searchMap.put("예약구매코드", srhBkgEvtNo);
			searchMap.put("발주처코드", srhOdrplNaTrplC);
			searchMap.put("상품코드", srhNaWrsC);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0200
	 * 화면명  : 예약행사수주현황
	 * 기    능 : Print lsh
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/orders/printPreEventListMaster")
	public RestResult printPreEventListMaster(HttpServletRequest request, HttpServletResponse response,
			String sName,	String TRPL_C, String TRPL_C_TEXT, 
			String bkg_evt_yy, String bkg_evt_no, String odrpl_na_trpl_c, 
			String na_wrs_c,String orr_ddl_dt, String na_odr_st
			){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();//master
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();//detail
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new LinkedHashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<Map<String,Object>> list = ordersService.printPreEventList(bkg_evt_yy, bkg_evt_no, orr_ddl_dt, na_odr_st, odrpl_na_trpl_c, na_wrs_c, TRPL_C_ARR);
			
			if(list != null && list.size() > 0){
				int n = 1;
				for(Map<String,Object> map : list){
					
					Map<String,Object> mm = new HashMap<String, Object>();
					Map<String,Object> dd = new HashMap<String, Object>();
					mm.put("key", map.get("KEY"));
					mm.put("master01", map.get("NA_WRS_C"));
					mm.put("master02", map.get("NA_WRS_N"));
					mm.put("master03", map.get("UNIT"));
					mm.put("NUM_master04", map.get("BOXPE_AQZ"));
					mm.put("NUM_master05", map.get("CTR_UPR"));
					mm.put("NUM_master06", map.get("RQ_QT"));
					mm.put("NUM_master07", map.get("DFN_QT"));
					mm.put("master08", map.get("WRS_TYPE"));
					mm.put("master09", map.get("SPYPL_NA_TRPL_C"));
					mm.put("master10", map.get("SPYPL_NA_TRPL_C_NM"));
					masterList.add(mm);
					
					dd.put("key", map.get("KEY"));
					dd.put("row", n);
					dd.put("detail01", map.get("ODRPL_NA_TRPL_C_D"));
					dd.put("detail02", map.get("ODRPL_NA_TRPL_NM_D"));
					dd.put("NUM_detail03", map.get("RQ_QT_D"));
					dd.put("NUM_detail04", map.get("DFN_QT_D"));
					dd.put("detail05", map.get("DFN_RATE_D"));
					dd.put("NUM_detail06", map.get("TOT_GOOD_PR_D"));
					detailList.add(dd);
					n++;
					/*
					GRDM.NA_WRS_C 상품코드
					, GRDM.NA_WRS_N 상품명
					, GRDM.UNIT 단위
					, GRDM.BOXPE_AQZ 입수
					, GRDM.CTR_UPR 계약단가
					, GRDM.RQ_QT 예약발주 합계
					, GRDM.DFN_QT 발주확정 합계
					, '' WRS_TYPE 상품구분
					, GRDM.SPYPL_NA_TRPL_C 공급처
					, FN_TRPL_CIF_NM(GRDM.SPYPL_NA_TRPL_C) SPYPL_NA_TRPL_C_NM 공급처명
	
					, GRDD.ODRPL_NA_TRPL_C ODRPL_NA_TRPL_C_D 발주처코드
					, GRDD.ODRPL_NA_TRPL_NM ODRPL_NA_TRPL_NM_D 발주처명
					, GRDD.RQ_QT RQ_QT_D 예약발주 수량
					, GRDD.DFN_QT DFN_QT_D 발주확정 수량
					, GRDD.DFN_RATE DFN_RATE_D 구성비
					, GRDD.TOT_GOOD_PR TOT_GOOD_PR_D 확정발주금액
					*/
				}
			}

			List<Map<String,Object>> _masterList = new ArrayList<Map<String,Object>>(new LinkedHashSet<Map<String,Object>>(masterList));
			List<Map<String,Object>> sumList 	= new ArrayList<Map<String,Object>>();
			DecimalFormat df = new DecimalFormat("#,###");
			String mSize = df.format(_masterList.size());
			String dSize = df.format(detailList.size());
			
			Map<String,Object> sum = new HashMap<String,Object>();
			sum.put("sum1", "상품건수: "+mSize);
			sum.put("sum2", "발주처수: "+dSize);
			sumList.add(sum);
			all_list.add(title);			
			all_list.add(_masterList);
			all_list.add(detailList);
			all_list.add(sumList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면명 : VAN_DS_SC0210(예약행사집계현황)
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrievePreEventSums")
	public void retrievePreEventSums(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		try {
			String srhBkgEvtYy 		= requestHelper.getParameter("BKG_EVT_YY");
			String srhBkgEvtNo 		= requestHelper.getParameter("BKG_EVT_NO");
			String srhNaWrsC 		= requestHelper.getParameter("NA_WRS_C");
			String srhTrplView 		= requestHelper.getParameter("TRPL_VIEW");
			String srhRvoplNaTrplC 	= requestHelper.getParameter("RVOPL_NA_TRPL_C");
			String srhOdrplNaTrplC 	= requestHelper.getParameter("ODRPL_NA_TRPL_C");
			
			String TRPL_C				= requestHelper.getGlnCode();
			List<OrdersPreEventSumsVO> list = ordersService.retrievePreEventSums(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, TRPL_C);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_PreEventSumsM");
				dsHelper.addColumns(OrdersPreEventSumsVO.class);
				
				for(OrdersPreEventSumsVO vo : list){
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
	 * 화면명 : VAN_DS_SC0210(예약행사집계현황)
	 * 화면 설명 : Grid Detail
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrievePreEventSumsDetail")
	public void retrievePreEventSumsDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			String bkgEvtYy 	= requestHelper.getParameter("BKG_EVT_YY");
			String bkgEvtNo 	= requestHelper.getParameter("BKG_EVT_NO");
			String naWrsC 		= requestHelper.getParameter("NA_WRS_C");
			String trplView 	= requestHelper.getParameter("TRPL_VIEW");
			String trplC 		= requestHelper.getParameter("TRPL_C");
			String TRPL_C		= requestHelper.getGlnCode();
			
			
			List<OrdersPreEventSumsVO> list = ordersService.retrievePreEventSumsDetail(bkgEvtYy, bkgEvtNo, naWrsC, trplView, trplC, TRPL_C);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_PreEventSumD");
				dsHelper.addColumns(OrdersPreEventSumsVO.class);
				for(OrdersPreEventSumsVO vo : list){
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
	 * 화면ID : VAN_DS_SC0210
	 * 화면명 : 예약집계현황 
	 * 화면 설명 : Excel DownLoad Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/orders/downloadExcelPreEventSumsList")
	public void downloadExcelPreEventSumsList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			String srhBkgEvtYy 		= request.getParameter("BKG_EVT_YY");
			String srhBkgEvtNo 		= request.getParameter("BKG_EVT_NO");
			String srhNaWrsC 		= request.getParameter("NA_WRS_C");
			String srhTrplView 		= request.getParameter("TRPL_VIEW");
			String srhRvoplNaTrplC 	= request.getParameter("RVOPL_NA_TRPL_C");
			String srhOdrplNaTrplC 	= request.getParameter("ODRPL_NA_TRPL_C");
			String M_TRPL_C 	= requestHelper.getParameter("M_TRPL_C");
			String M_TEAM_C 	= requestHelper.getParameter("M_TEAM_C");
			String TRPL_C				= requestHelper.getGlnCode();
			String separate			= request.getParameter("SEPARATOR");
			
			String fileName 			= request.getParameter("FILE_NAME");//파일명
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush 
			
			String[] header = new String[]{};
			String[] keyIndex = new String[]{};
			if(StringUtils.isEmpty(separate) == false && separate.equals("A")){
				header = new String[]{
						"업체", "업체명", "팀", "예약발주BOX", "발주확정BOX", "구성비", "발주금액"
				};
				keyIndex = new String[]{
						"TRPL_C", "TRPL_N","TEAM_N", "RQ_QT", "DFN_QT", "DFN_RATE", "GOOD_PR"
				};
			}else{
				header = new String[]{
						"업체", "업체명", "팀", "예약발주BOX", "발주확정BOX", "구성비", "발주금액",
						"상품코드", "상품명", "단위", "입수", "계약단가", "총발주확정BOX", "확정발주금액"
				};
				keyIndex = new String[]{
						"TRPL_C", "TRPL_N","TEAM_N", "RQ_QT", "DFN_QT", "DFN_RATE", "GOOD_PR",  
						"D_NA_WRS_C", "D_NA_WRS_N", "D_WRS_STDNM", "D_BOXPE_AQZ", "D_GOOD_PR", "D_DFN_QT","D_S_GOOD_PR"
				};
			}
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			if(StringUtils.isEmpty(separate) == false && separate.equals("A")){
				ordersService.downloadExcelPreEventMaterSumsList(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, TRPL_C, handler);
			}else{
				ordersService.downloadExcelPreEventSumsList(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, TRPL_C, M_TRPL_C, M_TEAM_C, handler);				
			}
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("예약년도", srhBkgEvtYy);
			searchMap.put("예약행사번호", srhBkgEvtNo);
			searchMap.put("상품코드", srhNaWrsC);
			if(StringUtils.equals(srhTrplView, "1")){
				searchMap.put("조회구분",  "물류센터별");
			}else{
				searchMap.put("조회구분",  "발주처별");
			}
			searchMap.put("물류센터", srhRvoplNaTrplC);
			searchMap.put("발주처", srhOdrplNaTrplC);
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0210
	 * 화면명  : 예약행사집계현황
	 * 기    능 : Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/orders/printPreEventSumsList")
	public RestResult printPreEventSumsList(HttpServletRequest request, HttpServletResponse response,
			String sName,	String TRPL_C_TEXT,			
			String srhBkgEvtYy, String srhBkgEvtNo, String srhNaWrsC, 
			String srhRvoplNaTrplC, String srhTrplView, String srhOdrplNaTrplC
			){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{
			String TRPL_C = requestHelper.getGlnCode();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();//master
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();//detail
			
			Map<String,Object> _master 	= new HashMap<String, Object>();

			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);

			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<OrdersPreEventSumsVO> mList = ordersService.printPreEventSumsMaster(srhBkgEvtYy, srhBkgEvtNo, srhNaWrsC, srhTrplView, srhRvoplNaTrplC, srhOdrplNaTrplC, TRPL_C);
			if(mList != null && mList.size() > 0){
				//Detail List Set
				int key = 0;
				
				for(OrdersPreEventSumsVO vo : mList){
					//Master Set					
					_master.put("key", key);
					_master.put("master01", StringUtil.toString(vo.getTRPL_C())); //공급처코드
					_master.put("master02", StringUtil.toString(vo.getTRPL_N()));  //공급처명
					_master.put("NUM_master03", StringUtil.toString(vo.getRQ_QT()));  //예약발주BOX
					_master.put("NUM_master04", StringUtil.toString(vo.getDFN_QT()));  //발주확정BOX
					_master.put("NUM_master05", StringUtil.toString(vo.getGOOD_PR()));	  //발주금액
					masterList.add(_master);
					
					for(OrdersPreEventSumsVO item : vo.getList()){
						Map<String,Object> _detail 	= new HashMap<String, Object>();
						_detail.put("key", key);
						_detail.put("detail01", StringUtil.toString(item.getNA_WRS_C()));  //상품코드
						_detail.put("detail02", StringUtil.toString(item.getNA_WRS_N()));  //상품명
						_detail.put("detail03", StringUtil.toString(item.getUNIT()));  //단위
						_detail.put("NUM_detail04", StringUtil.toString(item.getBOXPE_AQZ()));  //입수
						_detail.put("NUM_detail05", StringUtil.toString(item.getBYNG_UPR()));  //계약단가
						_detail.put("NUM_detail06", StringUtil.toString(item.getRQ_QT()));  //예약발주BOX
						_detail.put("NUM_detail07", StringUtil.toString(item.getDFN_QT()));  //발주확정BOX
						_detail.put("NUM_detail08", StringUtil.toString(item.getS_GOOD_PR()));  //발주금액
						detailList.add(_detail);
					}
					key++;
				}
			}
			
			all_list.add(title);
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면명 : VAN_DS_SC0220(예약행사진행현황)
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrievePreEventProcess")
	public void getPreEventProcess(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		try {
			String srhBkgEvtYy 	= requestHelper.getParameter("BKG_EVT_YY");
			String srhBkgEvtNoFr = requestHelper.getParameter("BKG_EVT_NO_FR");
			String srhBkgEvtNoTo = requestHelper.getParameter("BKG_EVT_NO_TO");
			String srhOdrplNaTrplC = requestHelper.getParameter("ODRPL_NA_TRPL_C");
			String srhNaWrsC = requestHelper.getParameter("NA_WRS_C");
			String trplC = requestHelper.getGlnCode();
			
			List<OrdersPreEventProcVO> list = ordersService.retrievePreEventProcess(srhBkgEvtYy, srhBkgEvtNoFr, srhBkgEvtNoTo, srhOdrplNaTrplC, srhNaWrsC, trplC);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_PreEventProcM");
				dsHelper.addColumns(OrdersPreEventProcVO.class);
				for(OrdersPreEventProcVO vo : list){
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
	 * 화면명 : VAN_DS_SC0220(예약행사진행현황)
	 * 화면 설명 : Grid Detail
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrievePreEventProcessDetail")
	public void getPreEventProcessDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			
			String bkgEvtYy = requestHelper.getParameter("BKG_EVT_YY");
			String bkgEvtNo = requestHelper.getParameter("BKG_EVT_NO");
			String odrplNaTrplC = requestHelper.getParameter("ODRPL_NA_TRPL_C");
			String naWrsC = requestHelper.getParameter("NA_WRS_C");
			String trplC = requestHelper.getGlnCode();
			
			List<OrdersPreEventProcVO> list = ordersService.retrievePreEventProcessDetail(bkgEvtYy, bkgEvtNo, odrplNaTrplC, naWrsC, trplC);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_PreEventProcD");
				dsHelper.addColumns(OrdersPreEventProcVO.class);
				
				for(OrdersPreEventProcVO vo : list){
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
	 * 화면ID : VAN_DS_SC0220
	 * 화면명 : 예약행사진행
	 * 화면 설명 : Excel DownLoad Master
	 */
	@RequestMapping(method=RequestMethod.GET, value = "/rest/excel/orders/downloadExcelPreEventProcList")
	public void downloadExcelPreEventProcList(HttpServletRequest request, HttpServletResponse response) {
		//PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		try {
			PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
			String srhBkgEvtYy 		= request.getParameter("BKG_EVT_YY");
			String srhBkgEvtNoFr 	= request.getParameter("BKG_EVT_NO_FR");
			String srhBkgEvtNoTo 	= request.getParameter("BKG_EVT_NO_TO");
			String srhOdrplNaTrplC 	= request.getParameter("ODRPL_NA_TRPL_C");
			String srhNaWrsC 		= request.getParameter("NA_WRS_C");
			String fileName 			= request.getParameter("FILE_NAME");
			String trplC = requestHelper.getGlnCode();
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			String[] header = new String[]{
														"예약구매년도", "예약행사번호", "예약행사명", "상품구분", "발주기간",
														"배송기간", "진행상태", "발주처", "발주처명", "발주저팀",
														"예약주분BOX", "발주조정BOX"
													  };
			String[] keyIndex = new String[]{
															"BKG_EVT_YY", "BKG_EVT_NO", "BKG_EVTNM", "BKG_EVT_WRS_CND_DSC", "ORR_DT", 
															"DVY_DT", "PRG_STSC_NM", "ODRPL_NA_TRPL_C", "ODRPL_TRPL_N", "ODRPL_NA_TEAM_C",
															"RQ_QT", "DFN_QT"
														};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			ordersService.downloadExcelPreEventProcList(trplC, srhBkgEvtYy, srhBkgEvtNoFr, srhBkgEvtNoTo, srhOdrplNaTrplC, srhNaWrsC, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("예약행사년도", srhBkgEvtYy);
			searchMap.put("예약구매번호 검색 시작일", srhBkgEvtNoFr);
			searchMap.put("예약구매번호 검색 종료일", srhBkgEvtNoTo);
			searchMap.put("발주처", srhOdrplNaTrplC);
			searchMap.put("상품", srhNaWrsC);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0220
	 * 화면명  : 예약행사진행현황
	 * 기    능 : Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/orders/printPreEventProcList")
	public RestResult printPreEventProcList(HttpServletRequest request, HttpServletResponse response,
			String sName,	String TRPL_C, String TRPL_C_TEXT,
			String srhBkgEvtYy, String srhBkgEvtNoFr, String srhBkgEvtNoTo,
			String srhOdrplNaTrplC, String srhNaWrsC
			){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{			
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String trplC = requestHelper.getGlnCode();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();//master
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();//detail
						
			Map<String,Object> _master 	= new HashMap<String, Object>();
			Map<String,Object> _detail 	= new HashMap<String, Object>();

			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);

			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<OrdersPreEventProcVO> mList = ordersService.printPreEventProcess(srhBkgEvtYy, srhBkgEvtNoFr, srhBkgEvtNoTo, srhOdrplNaTrplC, srhNaWrsC,TRPL_C_ARR, trplC);
			if(mList != null && mList.size() > 0){
				//Detail List Set
				int key = 0;
				
				for(OrdersPreEventProcVO vo : mList){
					//Master Set
					_master.put("key", key);
					_master.put("master01", StringUtil.toString(vo.getBKG_EVT_YY())+"-"+StringUtil.toString(vo.getBKG_EVT_NO()));  //예약행사번호
					_master.put("master02", StringUtil.toString(vo.getBKG_EVTNM()));  //행사명
					_master.put("master03", StringUtil.toString(vo.getSLGT_NM()));  //상품구분
					_master.put("master04", StringUtil.toString(vo.getORR_DT()));  //발주기간
					_master.put("master05", StringUtil.toString(vo.getDVY_DT()));  //배송기간
					_master.put("master06", StringUtil.toString(vo.getPRG_STSC_NM()));  //진행상태
					_master.put("NUM_master07", StringUtil.toString(vo.getRQ_QT()));  //예약주문BOX
					_master.put("NUM_master08", StringUtil.toString(vo.getDFN_QT()));  //발주조정BOX
					_master.put("NUM_master09", StringUtil.toString(vo.getDV_QT()));  //마감분배BOX
					_master.put("NUM_master10", StringUtil.toString(vo.getDD_QT()));  //발주생성BOX
					_master.put("NUM_master11", StringUtil.toString(vo.getER_QT()));  //발주오류BOX
					_master.put("NUM_master12", StringUtil.toString(vo.getDL_QT()));  //삭제처리BOX
					
					masterList.add(_master);
					
					for(OrdersPreEventProcVO item : vo.getList()){
						_detail.put("key", key);
						_detail.put("detail01", StringUtil.toString(item.getODRPL_NA_TRPL_C()));  //발주처
						_detail.put("detail02", StringUtil.toString(item.getODRPL_NA_TRPL_N()));  //발주처명
						_detail.put("detail03", StringUtil.toString(item.getODRPL_NA_TEAM_C()));  //발주처
						_detail.put("NUM_detail04", StringUtil.toString(item.getWRS_CNT()));  //상품수
						_detail.put("NUM_detail05", StringUtil.toString(item.getRQ_QT()));  //예약주문BOX
						_detail.put("NUM_detail06", StringUtil.toString(item.getDFN_QT()));  //발주조정BOX
						_detail.put("NUM_detail07", StringUtil.toString(item.getDV_QT()));  //마감분배BOX
						_detail.put("NUM_detail08", StringUtil.toString(item.getDD_QT()));  //발주생성BOX
						_detail.put("NUM_detail09", StringUtil.toString(item.getER_QT()));  //발주오류BOX
						_detail.put("NUM_detail10", StringUtil.toString(item.getDL_QT()));  //삭제처리BOX
						detailList.add(_detail);
					}
					++key;
				}
			}
			all_list.add(title);			
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면명 : VAN_DS_SC0230(행사가격조회)
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrieveEventPriceChange")
	public void getEventPriceChange(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		try {
			
			String srhEvtSqNo = requestHelper.getParameter("EVT_SQNO");
			String srhNaWrsC = requestHelper.getParameter("NA_WRS_C");
			String srhDateType = requestHelper.getParameter("DATE_TYPE");
			String srhEvtStDt = requestHelper.getParameter("EVT_ST_DT");
			String srhEvtEtDt = requestHelper.getParameter("EVT_ET_DT");
			String srhNaPzplc = requestHelper.getParameter("NA_PZPLC");
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<OrdersEPriceChangeVO> list = ordersService.retrieveEventPriceChange(srhEvtSqNo, srhNaWrsC, srhDateType, srhEvtStDt, srhEvtEtDt, srhNaPzplc, TRPL_C_ARR);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_EventPriceM");
				dsHelper.addColumns(OrdersEPriceChangeVO.class);
				
				for(OrdersEPriceChangeVO vo : list){
					dsHelper.setData(vo);
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
	 * 화면명 : VAN_DS_SC0230(행사가격조회)
	 * 화면 설명 : Grid Detail
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrieveEventPriceChangeDetail")
	public void getEventPriceChangeDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			String naBzplc = requestHelper.getParameter("NA_BZPLC");
			String evtSqno = requestHelper.getParameter("EVT_SQNO");
			String prgrC = requestHelper.getParameter("PRGR_C");
			
			List<OrdersEPriceChangeVO> list = ordersService.retrieveEventPriceChangeDetail(naBzplc, evtSqno, prgrC);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_EventPriceD");
				dsHelper.addColumns(OrdersEPriceChangeVO.class);
				
				for(OrdersEPriceChangeVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, out_PlatformData, 1, "result.message.search.no.exist.data");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * ID : VAN_DS_FN_0201
	 * 화면명 : 예약구매 조회 팝업
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrieveBkgEvtPopUp")
	public void retrieveBkgEvtPopUp(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		try {
			String searchYear = requestHelper.getParameter("search_year");
			String searchType = requestHelper.getParameter("search_type");
			String searchTxt = requestHelper.getParameter("search_txt");
			String TRPL_C = "";
			if(StringUtils.isEmpty(requestHelper.getParameter("trplC"))){
				TRPL_C = requestHelper.getGlnCode();
			}else{
				TRPL_C = requestHelper.getParameter("trplC");
			}
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<OrdersBKGEVTPopUpVO> list = ordersService.retrieveBkgEvtPopUp(searchYear, searchType, searchTxt, TRPL_C_ARR);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(OrdersBKGEVTPopUpVO.class);
				for(OrdersBKGEVTPopUpVO vo : list){
					dsHelper.setData(vo);
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
	 * ID : VAN_DS_FN_0202
	 * 화면명 : 예약구매발주사업장 조회 팝업
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrieveBkgEvtOdrplPopUp")
	public void retrieveBkgEvtOdrplPopUp(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			String searchCode = requestHelper.getParameter("search_code");
			String searchNm = requestHelper.getParameter("search_nm");
			
			
			List<Map<String, Object>> list = ordersService.retrieveBkgEvtOdrplPopUp(searchCode, searchNm);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
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
	 * ID : VAN_DS_FN_0206
	 * 화면명 : 통합행사조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrieveEventPriceChangePopUp")
	public void retrieveEventPriceChangePopUp(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		try {
			String srhType = requestHelper.getParameter("srh_gubun");
			String srhTxt = requestHelper.getParameter("srh_txt");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			List<OrdersEPriceChangePopUpVO> list = ordersService.retrieveEventPriceChangePopUp(srhType, srhTxt, TRPL_C_ARR);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(OrdersEPriceChangePopUpVO.class);
				for(OrdersEPriceChangePopUpVO vo : list){
					dsHelper.setData(vo);
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
	 * ID : VAN_DS_FN_0203
	 * 화면명 : 예약구매기준상품 조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/orders/retrieveEventOrdersWrsPopUp")
	public void retrieveEventOrdersWrsPopUp(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			String searchType = requestHelper.getParameter("search_type");
			String searchTxt = requestHelper.getParameter("search_txt");
			
			
			List<Map<String, Object>> list = ordersService.retrieveEventOrdersWrsPopUp(searchType, searchTxt);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
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
	
}
