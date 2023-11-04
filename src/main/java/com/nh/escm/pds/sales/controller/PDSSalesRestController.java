package com.nh.escm.pds.sales.controller;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
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
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.sales.service.PDSSalesService;
import com.nh.escm.pds.sales.vo.PDSSalesDailyStoreSumVO;
import com.nh.escm.pds.sales.vo.PDSSalesLiquorVO;
import com.nh.escm.pds.sales.vo.PDSSalesPeriodSkuSumVO;
import com.nh.escm.pds.sales.vo.PDSSalesPeriodStoreSumVO;
import com.nh.escm.pds.sales.vo.SQLMapNames.MrCenter;
import com.nh.escm.pds.sales.vo.SQLMapNames.RgnClNames;
import com.nh.escm.pds.sales.vo.SQLMapNames.SalesPeriodSkuDetailNames;
import com.nh.escm.pds.sales.vo.SQLMapNames.SalesPeriodStoreDetailNames;
import com.nh.escm.util.PageHelper;

/**
 * 판매정보
 * @author hroh
 *
 */
@RestController
public class PDSSalesRestController extends AbstractController {
	
	@Autowired
	PDSSalesService pdsSalesService;
	
	/*
	 * 화면ID : VAN_DS_SC_0800
	 * 화면명 : 일자별 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesDailyStoreSumList")
	public void retrieveSalesDailyStoreSumList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDt = 		requestHelper.getParameter("BY_DT"); //조회월
					
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<PDSSalesDailyStoreSumVO> list = pdsSalesService.retrieveSalesDailyStoreSumList(srhByDt, TRPL_C_ARR);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSSalesDailyStoreSumVO.class);
				
				for(PDSSalesDailyStoreSumVO vo : list){
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
	 * 	화면ID : VAN_DS_SC_0800
	 * 화면명 : 일자별 정보 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesDailyStoreSumList")
	public void downloadExcelSalesDailyStoreSumList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		String fileName = request.getParameter("fileName");
		
		//fileName = "일자별 정보 - 엑셀다운로드.xls";				
//		if(StringUtils.isNotEmpty(fileName)) {
//			try {
//				fileName = URLEncoder.encode(fileName, "UTF-8");
//			} catch (UnsupportedEncodingException e) {
//				logger.info(e.getMessage());
//			}
//		}
		try {			
			String srhByDt = 		request.getParameter("BY_DT"); //조회월			
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"일자","수량","금액","점유율(%)"};
			//String[] keyIndex = {"NA_WRS_C","WRSNM", SalesPeriodStoreDetailNames.SL_QT.name(),SalesPeriodStoreDetailNames.TOT_SLAM.name()};
			String[] keyIndex = {"SL_DT","SL_QT","SL_AM","SHARE_SLAM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);			
			
			pdsSalesService.retrieveSalesDailyStoreExcel(srhByDt, TRPL_C_ARR, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보 - 월간정보");
			searchMap.put("조회월", srhByDt);
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0810
	 * 화면명 : 기간별정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesPeriodSumList")
	public void retrieveSalesPeriodSumList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDtFr = 			requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			
			List<PDSSalesDailyStoreSumVO> list = pdsSalesService.retrieveSalesPeriodSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSSalesDailyStoreSumVO.class);
				
				for(PDSSalesDailyStoreSumVO vo : list){
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
	 * 	화면ID : VAN_DS_SC_0810
	 * 화면명 : 기간별 정보 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesPeriodSumList")
	public void downloadExcelSalesPeriodSumList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		String fileName = request.getParameter("fileName");
		
		try {
			
			String srhByDtFr = 			request.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			request.getParameter("BY_DT_TO"); //조회 종료일
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"일자","수량","금액(천원)","점유율(%)"};
			//String[] keyIndex = {"NA_WRS_C","WRSNM", SalesPeriodStoreDetailNames.SL_QT.name(),SalesPeriodStoreDetailNames.TOT_SLAM.name()};
			String[] keyIndex = {"SL_DT","SL_QT","SL_AM","SHARE_SLAM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsSalesService.retrieveSalesPeriodSumExcel(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);											
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보 - 기간별정보");
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
	 * 화면ID : VAN_DS_SC_0820
	 * 화면명 : 기간별 점포별/상품별 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesPeriodStoreSumPgList")
	public void retrieveSalesPeriodStoreSumPgList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDtFr = 			requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String TRPL_C = 			requestHelper.getParameter("odrpl_na_trpl_c"); //사업장 코드
			String naRgnC = 		requestHelper.getParameter("na_rgn_c"); //지역코드

			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
						
			// Paging
			int totalRowCount = pdsSalesService.retrieveSalesPeriodStoreSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR,naRgnC,TRPL_C);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			//total
			PDSSalesPeriodStoreSumVO totalVo= pdsSalesService.getSalesPeriodStoreSumTotal(srhByDtFr, srhByDtTo, TRPL_C_ARR,naRgnC,TRPL_C);			
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			dsTotalHelp.addColumns(PDSSalesPeriodStoreSumVO.class);
			dsTotalHelp.setData(totalVo);

			
			List<PDSSalesPeriodStoreSumVO> list = pdsSalesService.retrieveSalesPeriodStoreSumPgList(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end,naRgnC,TRPL_C);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSSalesPeriodStoreSumVO.class);
				
				for(PDSSalesPeriodStoreSumVO vo : list){
					dsHelper.setData(vo);
				}				
				
				out_PlatformData.addDataSet(dsTotalHelp.getDataSet());//total
				out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
				out_PlatformData.addDataSet(dsHelper.getDataSet());//grid data
			}
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0820
	 * 화면설명 : 기간별 점포별/상품별 정보 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesPeriodStoreSumList")
	public void downloadExcelSalesPeriodStoreSumList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		String fileName = request.getParameter("fileName");
		
		try {			
			String srhByDtFr = 			request.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			request.getParameter("BY_DT_TO"); //조회 종료일
			
			String naRgnC = 		request.getParameter("na_rgn_c"); //지역코드
			String TRPL_C = 			requestHelper.getParameter("odrpl_na_trpl_c"); //사업장 코드
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"사업장코드","사업장명","수량","금액(천원)","점유율(%)"};
			String[] keyIndex = {"BZPLC","BZPLCNM","SL_QT","SL_AM","SHARE_SLAM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);			
			
			pdsSalesService.downloadExcelSalesPeriodStoreSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR,-1,-1,naRgnC,TRPL_C, handler);					
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보(간선해제) - 기간별 사업장별/상품별");		
			searchMap.put("조회 시작일", srhByDtFr);
			searchMap.put("조회 종료일", srhByDtTo);
			searchMap.put("지역코드", naRgnC);			
			handler.createSearchSheet(searchMap);
		
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0822
	 * 화면설명 : 기간별 점포별/상품별 정보(간선해제)
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesPeriodStoreSumTrunkList")
	public void retrieveSalesPeriodStoreSumTrunkList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDtFr = 			requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			requestHelper.getParameter("BY_DT_TO"); //조회 종료일
			String TRPL_C = 			requestHelper.getParameter("odrpl_na_trpl_c"); //사업장 코드
			String naRgnC = 		requestHelper.getParameter("na_rgn_c"); //지역코드

			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
						
			// Paging
//			int totalRowCount = pdsSalesService.retrieveSalesPeriodStoreSumTrunkCount(srhByDtFr, srhByDtTo, TRPL_C_ARR,naRgnC,TRPL_C);			
//			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
//			int start = pageHelper.getStart();
//			int end = pageHelper.getEnd();
			
			// 속도 문제로 count 페이징 제외
			int start = -1;
			int end = -1;
			
			//total
//			PDSSalesPeriodStoreSumVO totalVo= pdsSalesService.getSalesPeriodStoreSumTotal(srhByDtFr, srhByDtTo, TRPL_C_ARR,naRgnC,TRPL_C);			
//			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
//			dsTotalHelp.addColumns(PDSSalesPeriodStoreSumVO.class);
//			dsTotalHelp.setData(totalVo);
			
			List<Map<String, Object>> list = pdsSalesService.retrieveSalesPeriodStoreSumTrunkPgList(srhByDtFr, srhByDtTo, TRPL_C_ARR, start, end,naRgnC,TRPL_C);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(list.get(0).keySet());
				dsHelper.getDataSet().setColumnDataType("SL_QT", DataTypes.LONG);
				dsHelper.getDataSet().setColumnDataType("TOT_SLAM", DataTypes.LONG);
				
				for(Map<String, Object> vo : list){
					dsHelper.setData(vo);
				}
				
				
//				out_PlatformData.addDataSet(dsTotalHelp.getDataSet());//total
//				out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
				out_PlatformData.addDataSet(dsHelper.getDataSet());//grid data
			}
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0822
	 * 화면설명 : 기간별 점포별/상품별 정보 - 엑셀다운로드(간선해제) / 사용안함
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesPeriodStoreSumTrunkList")
	public void downloadExcelSalesPeriodStoreSumTrunkList(HttpServletRequest request, HttpServletResponse response) {
//		long loadS = System.currentTimeMillis();
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		String fileName = "판매정보_사업장상품별_"+DateUtil.convertDateToString("yyyyMMdd", DateUtil.getCurrentDate())+".xls";
		
		try {			
			String srhByDtFr = 			request.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			request.getParameter("BY_DT_TO"); //조회 종료일
			
			String naRgnC = 		request.getParameter("na_rgn_c"); //지역코드(필수)
			String TRPL_C = 			requestHelper.getParameter("odrpl_na_trpl_c"); //사업장 코드
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"사업장코드","사업장명","상품코드","상품명","수량","금액","점유율(%)"};
			String[] keyIndex = {"NA_BZPLC","CLNTNM","NA_WRS_C","WRSNM","SL_QT","TOT_SLAM","SHARE_SLAM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		

			pdsSalesService.downloadExcelSalesPeriodStoreSumTrunkList(srhByDtFr, srhByDtTo, TRPL_C_ARR,-1,-1,naRgnC,TRPL_C,handler);					
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보 - 기간별 사업장별/상품별");		
			searchMap.put("조회 시작일", srhByDtFr);
			searchMap.put("조회 종료일", srhByDtTo);
			searchMap.put("지역코드", naRgnC);			
			handler.createSearchSheet(searchMap);
		
			handler.write(response, fileName);
			
			// Test
//			long loadE = System.currentTimeMillis();
//			System.out.println(((loadE - loadS) / 1000) + "sec elapsed");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면설명 : 기간별 점포별/상품별 정보 - 상세
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesPeriodStoreSumDetailPgList")
	public void retrieveSalesPeriodStoreSumDetailPgList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String bzplc 	= requestHelper.getParameter("BZPLC"); //점포코드
			String byDtFr 	= requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 	= requestHelper.getParameter("BY_DT_TO"); //조회 종료일
						
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			// Paging
			int totalRowCount = pdsSalesService.getSalesPeriodStoreSumDetailCount(bzplc, byDtFr, byDtTo, TRPL_C_ARR);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			
			//total
			Map<String, Object> totalVo= pdsSalesService.getSalesPeriodStoreSumDetailTotal(bzplc, byDtFr, byDtTo, TRPL_C_ARR);			
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			dsTotalHelp.addColumns(SalesPeriodStoreDetailNames.class);
			dsTotalHelp.setData(totalVo);
			
			List<Map<String, Object>> list = pdsSalesService.retrieveSalesPeriodStoreSumDetailPgList(bzplc, byDtFr, byDtTo, TRPL_C_ARR, start, limit);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(SalesPeriodStoreDetailNames.class);
				
				for(Map<String, Object> map : list){
					dsHelper.setData(map);
				}
				
				out_PlatformData.addDataSet(dsTotalHelp.getDataSet());//total
				out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
				out_PlatformData.addDataSet(dsHelper.getDataSet());//grid data
			}
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0821
	 * 화면설명 : 기간별 점포별/상품별 정보 - 상세 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesPeriodStoreSumDetailPgList")
	public void downloadExcelSalesPeriodStoreSumDetailPgList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		String fileName = request.getParameter("fileName");
		
		try {			
			
			String bzplc 	= request.getParameter("BZPLC"); //점포코드
			String byDtFr 	= request.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 	= request.getParameter("BY_DT_TO"); //조회 종료일
						
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"상품코드","상품명","수량","점유율(%)"};
			String[] keyIndex = {"NA_WRS_C","WRSNM","SL_QT","SHARE_SLAM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			//AbstractModel model2 = new DefaultModel("디테일", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			pdsSalesService.downloadExcelSalesPeriodStoreSumDetailPgList(bzplc, byDtFr, byDtTo, TRPL_C_ARR,-1,-1,handler);			

			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보 - 기간별 사업장별/상품별 - 상세");
			searchMap.put("사업장코드", bzplc);
			searchMap.put("조회 시작일", byDtFr);
			searchMap.put("조회 종료일", byDtTo);
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0830
	 * 화면명 : 기간별 상품별/점포별 정보
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesPeriodSkuSumPgList")
	public void retrieveSalesPeriodSkuSumPgList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDtFr = 			requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			requestHelper.getParameter("BY_DT_TO"); //조회 종료일

			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String srhWrsC =	requestHelper.getParameter("WRS_C");//상품코드
			String srhWrsNm =	requestHelper.getParameter("WRSNM");//상품명
			String srhType =	requestHelper.getParameter("TYPE");//검색조건(1:상품코드, 2:상품명)
			
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			if ("2".equals(srhType)) {
				srhWrsC = srhWrsNm; // 상품명 검색일 때 검색어를 상품명으로 변경
			}
			
			// Paging
			int totalRowCount = pdsSalesService.getSalesPeriodSkuSumCount(srhByDtFr, srhByDtTo, TRPL_C_ARR, srhWrsC, srhType);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();			
			
			//total
			PDSSalesPeriodSkuSumVO totalVo= pdsSalesService.getSalesPeriodSkuSumTotal(srhByDtFr, srhByDtTo, TRPL_C_ARR, srhWrsC, srhType);			
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			dsTotalHelp.addColumns(PDSSalesPeriodSkuSumVO.class);
			dsTotalHelp.setData(totalVo);
			
			List<PDSSalesPeriodSkuSumVO> list = pdsSalesService.retrieveSalesPeriodSkuSumPgList(srhByDtFr, srhByDtTo, TRPL_C_ARR, srhWrsC, srhType, start, end);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSSalesPeriodSkuSumVO.class);
				
				for(PDSSalesPeriodSkuSumVO vo : list){
					dsHelper.setData(vo);
				}				
				
				out_PlatformData.addDataSet(dsTotalHelp.getDataSet());//total
				out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
				out_PlatformData.addDataSet(dsHelper.getDataSet());//grid data
			}
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_0830
	 * 화면명 : 기간별 상품별/점포별 정보 - 다운로드
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesPeriodSkuSumList")
	public void downloadExcelSalesPeriodSkuSumList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		try {			
			String srhByDtFr = 			request.getParameter("BY_DT_FR"); //조회 시작일
			String srhByDtTo = 			request.getParameter("BY_DT_TO"); //조회 종료일

			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"상품코드","상품명","수량","금액(천원)","점유율(%)"};
			String[] keyIndex = {"WRS_C","WRSNM","SL_QT","SL_AM","SHARE_SLAM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);			
			
			pdsSalesService.downloadExcelSalesPeriodSkuSumList(srhByDtFr, srhByDtTo, TRPL_C_ARR, "", -1,-1, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보 - 기간별 상품별/사업장별");
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
	 * 화면ID : VAN_DS_SC_0831
	 * 화면설명 : 기간별 상품별/점포별 정보 - 상세
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesPeriodSkuSumDetailPgList")
	public void retrieveSalesPeriodSkuSumDetailPgList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String wrsC 	= requestHelper.getParameter("WRS_C"); //점포코드
			String byDtFr 	= requestHelper.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 	= requestHelper.getParameter("BY_DT_TO"); //조회 종료일

			String naRgnC = 		requestHelper.getParameter("na_rgn_c"); //지역코드
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			// Paging
			int totalRowCount = pdsSalesService.getSalesPeriodSkuSumDetailCount(wrsC, byDtFr, byDtTo, TRPL_C_ARR,naRgnC);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			
			//total
			Map<String, Object> totalVo= pdsSalesService.getSalesPeriodSkuSumDetailTotal(wrsC, byDtFr, byDtTo, TRPL_C_ARR,naRgnC);			
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			dsTotalHelp.addColumns(SalesPeriodSkuDetailNames.class);
			dsTotalHelp.setData(totalVo);
			
			List<Map<String, Object>> list = pdsSalesService.retrieveSalesPeriodSkuSumDetailPgList(wrsC, byDtFr, byDtTo, TRPL_C_ARR, start, limit,naRgnC);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(SalesPeriodSkuDetailNames.class);
				
				for(Map<String, Object> map : list){
					dsHelper.setData(map);
				}
				
				out_PlatformData.addDataSet(dsTotalHelp.getDataSet());//total
				out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
				out_PlatformData.addDataSet(dsHelper.getDataSet());//grid data
			}
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0831
	 * 화면설명 : 기간별 상품별/점포별 정보 - 상세 - 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesPeriodSkuSumDetailList")
	public void downloadExcelSalesPeriodSkuSumDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		try {			
			String wrsC 	= request.getParameter("WRS_C"); //상품코드
			String byDtFr 	= request.getParameter("BY_DT_FR"); //조회 시작일
			String byDtTo 	= request.getParameter("BY_DT_TO"); //조회 종료일
			
			String naRgnC = 		request.getParameter("na_rgn_c"); //지역코드
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"사업장코드","사업장명","수량","점유율(%)"};
			String[] keyIndex = {"NA_BZPLC","CLNTNM","SL_QT","SHARE_SLAM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
			
			pdsSalesService.downloadExcelSalesPeriodSkuSumDetailList(wrsC, byDtFr, byDtTo, TRPL_C_ARR,-1,-1, naRgnC, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보 - 기간별 상품별/사업장별 - 상세");
			searchMap.put("상품코드", wrsC);
			searchMap.put("조회 시작일", byDtFr);
			searchMap.put("조회 종료일", byDtTo);
			searchMap.put("지역코드", naRgnC);
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 : 주류실적 조회
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveSalesLiquorList")
	public void retrieveSalesLiquorList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
						
			String searchType = 		requestHelper.getParameter("search_type"); //조회구분 (자사:3, 경쟁사:4)
			String mbcoType = 		requestHelper.getParameter("mbco_type"); //본지점포함 (본사:0, 지사:1)
			String srhDateType = 		requestHelper.getParameter("srh_date_type"); //일자구분
			String fromDate = 		requestHelper.getParameter("from_date"); //조회시작일
			String toDate = 		requestHelper.getParameter("to_date"); //조회종료일
			String srhMonth = 		requestHelper.getParameter("srh_month"); //월 조회
			String srhWeak = 		requestHelper.getParameter("srh_weak"); //주 조회
			String prgrC = 		requestHelper.getParameter("prgr_c"); //가격군코드
			String naCode = 		requestHelper.getParameter("na_code"); //농협사업장코드
			String wrsCode = 		requestHelper.getParameter("wrs_code"); //상품코드
			String mrCenter = 		requestHelper.getParameter("mr_center"); //경쟁사코드
			String naRgnC = 		requestHelper.getParameter("na_rgn_c"); //지역코드
			String naRgnC2 = 		requestHelper.getParameter("na_rgn_c2"); //지역코드
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String authorityCode =	requestHelper.getParameter("authorityCode");//권한사업장 선택 거래처코드			
			
			//세션 로그인 업체가 본사인지 지사인지 확인
			if(requestHelper.getMbcoType().equals("1")){
				//세션 로그인 업체 : 본사(권한사업장 있음)
				
				//주류실적은 본사만 조회가능, 본사 : 1 지사 :2
				if(searchType.equals("4")){
					List<Map<String, Object>> mbcoList = pdsSalesService.retrieveMbcoDsc(authorityCode);
					if(mbcoList != null && mbcoList.size() > 0) {
						for(Map<String, Object> map : mbcoList) {					
							if(map.get("NA_MBCO_DSC").equals("2")){						
								throw new AppetizerException("msg.van_ds_sc_0840.view.validation.search1");
							}					
						}
					}
				}
			}			
			
			// Paging
			/*
			int totalRowCount = pdsSalesService.getSalesLiquorCount(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();			
			
			
			Map<String, Object> map = pdsSalesService.getSalesLiquorTotal(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(map.keySet());
				 dsHelper.setData(map);
				 out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			*/
			
			List<PDSSalesLiquorVO> list = pdsSalesService.retrieveSalesLiquorList(searchType, mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR,
					-1, -1);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(PDSSalesLiquorVO.class);
				
				for(PDSSalesLiquorVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());			
			}
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0840
	 *  화면설명 : 주류실적 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/retrieveSalesLiquorList")
	public RestResult printRecadvSlpMasterList(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C, String TRPL_C_TEXT, String search_type, String mbco_type, String srh_date_type, String srh_date_type_text, String from_date, String to_date,
			String srh_month, String srh_weak, String prgr_c, String prgr_c_text,  String na_code,
			String wrs_code,String mr_center, String mr_center_text, String na_rgn_c, String na_rgn_c_text,  String na_rgn_c2, String na_rgn_c2_text){
		
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			if(StringUtils.isNotEmpty(prgr_c_text)) prgr_c_text = prgr_c_text.replace("- 전체 -","전체");
			else prgr_c_text = "";
			
			if(StringUtils.isNotEmpty(na_rgn_c_text)) na_rgn_c_text = na_rgn_c_text.replace("해당없음","전체");
			else na_rgn_c_text = "";
			
			String from_date_t = "";
			String to_date_t = "";
			String search_type_t = "";
			
			if(StringUtils.isNotEmpty(from_date)) from_date_t = from_date.substring(0,4)+"-"+from_date.substring(4,6)+"-"+from_date.substring(6,8);  //조회시작일자
			else from_date_t = "";
			if(StringUtils.isNotEmpty(to_date)) to_date_t = to_date.substring(0,4)+"-"+to_date.substring(4,6)+"-"+to_date.substring(6,8);  //조회종료일자
			else to_date_t = "";
			
			if(search_type.equals("3")) search_type_t = "자사 판매실적";
			search_type_t = "타사 판매실적";
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", "장표명");
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			/*_title.put("search", TRPL_C_TEXT+", 일자구분:"+srh_date_type_text+", 가격군 코드:"+prgr_c_text
					+", 농협사업장 코드:"+na_code+", 상품코드:"+wrs_code+", 경쟁사코드:"+mr_center+", 지역코드:"+na_rgn_c_text+", 지역코드 상세:"+na_rgn_c2_text
					+", 조회 월:"+srh_month +", 조회기간:"+from_date_t+" - "+to_date_t);*/
			_title.put("search", TRPL_C_TEXT+", 조회 구분:"+search_type_t +", 조회기간:"+from_date_t+" - "+to_date_t);
			_title.put("subtitle", search_type_t);
			title.add(_title);			
			
			//리스트(필요한것만 필터링)
			List<PDSSalesLiquorVO> volist_v = pdsSalesService.retrieveSalesLiquorList(search_type, mbco_type, srh_date_type, 
					from_date, to_date, srh_month ,
					srh_weak, prgr_c, na_code,
					wrs_code, mr_center, na_rgn_c, na_rgn_c2, TRPL_C_ARR,
					-1, -1);
			
			List<Map<String, Object>> volist = pdsSalesService.downloadExcelSalesLiquor(search_type, mbco_type, srh_date_type, 
					from_date, to_date, srh_month ,
					srh_weak, prgr_c, na_code,
					wrs_code, mr_center, na_rgn_c, na_rgn_c2, TRPL_C_ARR);
			
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			
			//전체
			int _TOT_SL_QT = 0;			//판매수량
			int _TOT_BOXPE_AQZ = 0;		//박스당입수
			double _TOT_BOX_QT = 0;		//박스수량
			//거래처
			int _TRPL_C_SL_QT = 0; 		
			int _TRPL_C_BOXPE_AQZ = 0;  
			double _TRPL_C_BOX_QT = 0;			 			
			//지역			
			int _NA_RGN_SL_QT = 0;
			int _NA_RGN_BOXPE_AQZ = 0;
			double _NA_RGN_BOX_QT = 0;
			//키
			int n = 0;
			String bzplc_key = "";
						
			for(int i=0 ; i < volist.size() ; i++){
				
				Map<String, Object> map = volist.get(i); 				   		//현재 리스트
				Map<String, Object> _map = new HashMap<String, Object>(); 		//이전 리스트 
				Map<String,Object> bzplc_map = new HashMap<String, Object>();
				DecimalFormat df = new DecimalFormat("#,###.##");
				
				String TRPL_C1 = (String)map.get("TRPL_C"); /*거래처코드*/
				String NA_BZPLC = (String)map.get("NA_BZPLC"); /*수주처코드*/
				//String NA_RGN_C = (String)map.get("NA_RGN_C"); //지역코드
				String NA_RGN_C = (String)map.get("RGN_CNM"); //지역코드
				
				String CLNTNM = (String)map.get("CLNTNM"); /*거래처코드명*/				
				String SHRT_BZPLNM = (String)map.get("SHRT_BZPLNM"); /*수주처명*/
				String SL_YM = (String)map.get("SL_YM"); /*거래년월*/
				
				int SL_QT = ((BigDecimal)map.get("SL_QT")).intValue();		   /*판매수량*/
				int BOXPE_AQZ = ((BigDecimal)map.get("BOXPE_AQZ")).intValue(); /*박스당입수*/
				double BOX_QT = ((BigDecimal)map.get("BOX_QT")).doubleValue(); /*박스수량*/
				BOX_QT = Math.floor(BOX_QT*100d) / 100d;				
				map.put("NUM_SL_QT", SL_QT);
				map.put("NUM_BOXPE_AQZ", BOXPE_AQZ);
				map.put("NUM_BOX_QT", df.format(BOX_QT));
				
				//String WRS_C = (String)map.get("WRS_C"); /*상품코드*/
				//String WRSNM = (String)map.get("WRSNM"); /*상품명*/
				//String PRGR_C =  (String)map.get("PRGR_C"); /*다매가*/
				//String RGN_CNM = (String)map.get("RGN_CNM"); /*지역명*/
				//String NA_WRS_SCLC = (String)map.get("NA_WRS_SCLC"); /*소분류*/
				//String NA_WRS_DTCF_C = (String)map.get("NA_WRS_DTCF_C"); /*세분류*/				
				
				_TOT_SL_QT += SL_QT;
				_TOT_BOXPE_AQZ += BOXPE_AQZ;
				_TOT_BOX_QT += BOX_QT;
				
				if(i == 0){
					
					_TRPL_C_SL_QT += SL_QT; 		
					_TRPL_C_BOXPE_AQZ += BOXPE_AQZ;  
					_TRPL_C_BOX_QT += BOX_QT;			
					_NA_RGN_SL_QT += SL_QT;
					_NA_RGN_BOXPE_AQZ += BOXPE_AQZ;
					_NA_RGN_BOX_QT += BOX_QT;
					
				}else{
					
					_map = volist.get(i-1); //이전리스트
					
					String TRPL_C2 = (String)_map.get("TRPL_C");
					String CLNTNM2 = (String)_map.get("CLNTNM");
					
					String NA_BZPLC2 = (String)_map.get("NA_BZPLC");
					String SHRT_BZPLNM2 = (String)_map.get("SHRT_BZPLNM");
					
					String NA_RGN_C2 = (String)_map.get("RGN_CNM");
					
					String SL_YM2 = (String)_map.get("SL_YM");
					SL_YM2 = SL_YM2.substring(0,4)+"-"+SL_YM2.substring(4,6);
					
					//사업장
					if(!NA_BZPLC.equals(NA_BZPLC2) && i != volist.size()-1){
						bzplc_key = "KEY_" + n;
						bzplc_map = new HashMap<String, Object>();
						bzplc_map.put("KEY", bzplc_key);
						bzplc_map.put("CODE", "[" + NA_BZPLC2 + "] 소계(사업장)");
						bzplc_map.put("NAME", SHRT_BZPLNM2);
						bzplc_map.put("YMD", SL_YM2);
						bzplc_map.put("NUM_SL_QT", _NA_RGN_SL_QT);
						bzplc_map.put("NUM_BOXPE_AQZ", _NA_RGN_BOXPE_AQZ);
						bzplc_map.put("NUM_BOX_QT", df.format(_NA_RGN_BOX_QT));						
						masterList.add(bzplc_map);
						n++;
					}
					
					//지역
					if(NA_RGN_C.equals(NA_RGN_C2)){						
						_NA_RGN_SL_QT += SL_QT;
						_NA_RGN_BOXPE_AQZ += BOXPE_AQZ;
						_NA_RGN_BOX_QT += BOX_QT;
					}else{
						_NA_RGN_SL_QT = SL_QT;
						_NA_RGN_BOXPE_AQZ = BOXPE_AQZ;
						_NA_RGN_BOX_QT = BOX_QT;
					}
					
					//거래처
					if(TRPL_C1.equals(TRPL_C2)){
						_TRPL_C_SL_QT += SL_QT;
						_TRPL_C_BOXPE_AQZ += BOXPE_AQZ;
						_TRPL_C_BOX_QT += BOX_QT;
						
					}else if(!TRPL_C1.equals(TRPL_C2)){
						
						if(i != volist.size()-1){
							Map<String, Object> trplc_map = new HashMap<String, Object>();
							trplc_map.put("KEY", bzplc_key);
							trplc_map.put("CODE", "[" + TRPL_C2 + "] 소계(거래처)");
							trplc_map.put("NAME", CLNTNM2);
							trplc_map.put("YMD", SL_YM2);
							trplc_map.put("NUM_SL_QT", _TRPL_C_SL_QT);
							trplc_map.put("NUM_BOXPE_AQZ", _TRPL_C_BOXPE_AQZ);
							trplc_map.put("NUM_BOX_QT", df.format(_TRPL_C_BOX_QT));						
							masterList.add(trplc_map);
							
							trplc_map = new HashMap<String, Object>();
							trplc_map.put("KEY", bzplc_key);
							trplc_map.put("CODE", "");
							trplc_map.put("NAME", "");
							trplc_map.put("YMD", "");
							//trplc_map.put("NUM_SL_QT", "");
							//trplc_map.put("NUM_BOXPE_AQZ", "");
							//trplc_map.put("NUM_BOX_QT", "");
							masterList.add(trplc_map);
						}					
						_TRPL_C_SL_QT = SL_QT;
						_TRPL_C_BOXPE_AQZ = BOXPE_AQZ;
						_TRPL_C_BOX_QT = BOX_QT;
					}
					//전체합계
					if(i == volist.size()-1){
						String KEY = "KEY_" + n;
						//사업장
						bzplc_map = new HashMap<String, Object>();
						bzplc_map.put("KEY", KEY);
						bzplc_map.put("CODE", "[" + NA_BZPLC + "] 소계(사업장1)");
						bzplc_map.put("NAME", SHRT_BZPLNM);
						bzplc_map.put("YMD", SL_YM);
						bzplc_map.put("NUM_SL_QT", _NA_RGN_SL_QT);
						bzplc_map.put("NUM_BOXPE_AQZ", _NA_RGN_BOXPE_AQZ);
						bzplc_map.put("NUM_BOX_QT", df.format(_NA_RGN_BOX_QT));						
						masterList.add(bzplc_map);
						
						//거래처
						Map<String, Object> trplc_map = new HashMap<String, Object>();
						trplc_map.put("KEY", KEY);
						trplc_map.put("CODE", "[" + TRPL_C + "] 소계(거래처1)");
						trplc_map.put("NAME", CLNTNM);
						trplc_map.put("YMD", SL_YM);
						trplc_map.put("NUM_SL_QT", _TRPL_C_SL_QT);
						trplc_map.put("NUM_BOXPE_AQZ", _TRPL_C_BOXPE_AQZ);
						trplc_map.put("NUM_BOX_QT", df.format(_TRPL_C_BOX_QT));						
						masterList.add(trplc_map);
						
						trplc_map = new HashMap<String, Object>();
						trplc_map.put("KEY", KEY);
						trplc_map.put("CODE", "");
						trplc_map.put("NAME", "소계(거래처2)");
						trplc_map.put("YMD", "");
						//trplc_map.put("NUM_SL_QT", "");
						//trplc_map.put("NUM_BOXPE_AQZ", "");
						//trplc_map.put("NUM_BOX_QT", "");
						masterList.add(trplc_map);
						
						//전체
						Map<String, Object> tot_map = new HashMap<String, Object>();
						tot_map.put("KEY", KEY);
						tot_map.put("CODE", "합 계");
						tot_map.put("NAME", "");
						tot_map.put("YMD", "");
						tot_map.put("NUM_SL_QT", _TOT_SL_QT);
						tot_map.put("NUM_BOXPE_AQZ", _TOT_BOXPE_AQZ);
						tot_map.put("NUM_BOX_QT", df.format(_TOT_BOX_QT));
						
						masterList.add(tot_map);
					}
				}
				String dKEY = "KEY_" + n;
				map.put("KEY", dKEY);
				detailList.add(map);
			}
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(title);
			all_list.add(masterList);
			all_list.add(detailList);
			/*
			 * 사업장코드
				사업장명
				지역코드
				지역코드명
				거래처코드
				거래처코드명
				상품코드
				상품코드명
				거래년월
				거래주수
				판매수량
				박스당입수
				박스수량
				가격군
				소분류
				세분류

		    */
			
			/*
			map.put("NA_BZPLC",StringUtil.toString(vo.getNA_BZPLC()));
			map.put("SHRT_BZPLNM",StringUtil.toString(vo.getSHRT_BZPLNM()));
			map.put("NA_RGN_C",StringUtil.toString(vo.getNA_RGN_C()));
			map.put("RGN_CNM",StringUtil.toString(vo.getRGN_CNM()));
			map.put("TRPL_C",StringUtil.toString(vo.getTRPL_C()));
			map.put("CLNTNM",StringUtil.toString(vo.getCLNTNM()));
			map.put("WRS_C",StringUtil.toString(vo.getWRS_C()));
			map.put("WRSNM",StringUtil.toString(vo.getWRSNM()));
			map.put("SL_YM",StringUtil.toString(vo.getSL_YM()));
			map.put("SQWW",StringUtil.toString(vo.getSQWW()));
			map.put("SL_QT",StringUtil.toString(vo.getSL_QT()));
			map.put("BOXPE_AQZ",StringUtil.toString(vo.getBOXPE_AQZ()));
			map.put("BOX_QT",StringUtil.toString(vo.getBOX_QT()));
			map.put("PRGR_C",StringUtil.toString(vo.getPRGR_C()));
			map.put("NA_WRS_SCLC",StringUtil.toString(vo.getNA_WRS_SCLC()));
			map.put("NA_WRS_DTCF_C",StringUtil.toString(vo.getNA_WRS_DTCF_C()));
			 */
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	public String getMapValue(Map<String,String> map, String _key){		
		
		String v = "";
		Set<String> key = map.keySet();		  

		for (Iterator<String> iterator = key.iterator(); iterator.hasNext();){
			String keyName = (String) iterator.next();
			String valueName = (String) map.get(keyName);
			if(_key.equals(keyName)){
				v = valueName;
				break;
			}
			
		}
		return v;
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면설명 : 지역코드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveRgnCList")
	public void retrieveRgnCList(HttpServletRequest request, HttpServletResponse response) {
				
		try {
			PlatformData out_PlatformData = new PlatformData();
					
			List<Map<String, Object>> list = pdsSalesService.retrieveRgnCList();
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(RgnClNames.class);
				
				for(Map<String, Object> map : list){
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
	 * 화면ID : VAN_DS_SC_0840
	 * 화면설명 : 지역코드2
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveRgnC2List")
	public void retrieveRgnC2List(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			String naRgnC =  requestHelper.getParameter("na_rgn_c"); //일자구분
			
			List<Map<String, Object>> list = pdsSalesService.retrieveRgnC2List(naRgnC);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(RgnClNames.class);
				
				for(Map<String, Object> map : list){
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
	 * 화면ID : VAN_DS_SC_0840
	 * 화면설명 : 주류업체 권한체크
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/getLiquorYn")
	public void getLiquorYn(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			String glncode =  requestHelper.getGlnCode(); //세션 gln
			
			//glncode = "8801021000015"; //오비맥주
			
			List<Map<String, Object>> list = pdsSalesService.getLiquorYn(glncode);
			
			if(list != null && list.size() > 0){				
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
	 * 화면ID : VAN_DS_SC_0840
	 * 화면설명 : 경쟁사코드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/retrieveMrCenterList")
	public void retrieveMrCenterList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			String mbcoType =  requestHelper.getParameter("mbco_type"); //본지사포함
			
			List<Map<String, Object>> list = pdsSalesService.retrieveMrCenterList(mbcoType);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(MrCenter.class);
				
				for(Map<String, Object> map : list){
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
	 * 화면ID : VAN_DS_SC_0850
	 * 화면명 : 자료수신
	 * 화면 설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSales")
	public void downloadExcelSales(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		try {			
			
			String chkPart   = 			request.getParameter("CHK_PART"); //집계 구분
			String chkSelect = 			request.getParameter("CHK_SELECT"); //선택
			String chkAtl    = 			request.getParameter("CHK_ATL"); // 간선포함여부 

			String srhByDtFr = 			request.getParameter("FROM_DATE"); //조회 시작일
			String srhByDtTo = 			request.getParameter("TO_DATE"); //조회 종료일

			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
						
			String SEARCH_TYPE = "";
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			ExcelFileMakerResultHandler handler = null;
			
			boolean existDaliyData = false; // 빌링 - 일일자료, 조회된 데이터가 있는 경우에만 과금하기 위해 필요.
			
			switch(chkPart){
			/* 월별 집계 */
			case "00" :
				if(StringUtils.equals(chkSelect, "1")){
					/*사업장별*/
					String[] header = {"판매월","사업장코드","사업장명","판매수량","총매출액"};
					String[] keyIndex = {"SL_YM","BZPLC","BZPLCNM","SL_QT","SL_AM"};
					
					AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);					
					handler = new ExcelFileMakerResultHandler(workbook, model);
					
					pdsSalesService.downloadExcelSalesMonthlyBzplc(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);
				}else{
					/*상품별*/
					String[] header = {"판매월","상품코드","상품명","판매수량","총매출액"};
					String[] keyIndex = {"SL_YM","WRS_C","WRSNM","SL_QT","SL_AM"};
					
					AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);					
					handler = new ExcelFileMakerResultHandler(workbook, model);
					
					pdsSalesService.downloadExcelSalesMonthlyWrsC(srhByDtFr, srhByDtTo, TRPL_C_ARR, handler);
				}
				break;
			/* 일일자료 */
			case "01" :
				
			    String sessionGlnCode = requestHelper.getGlnCode();	    
				
			    String sessionMbcoType = requestHelper.getMbcoType(); //본지사 구분코드 1:본사 그외:지사
			    //System.out.println("sessionMbcoType--------------->"+sessionMbcoType);
			    
			    if(sessionMbcoType.equals("1")){
			    	//본사일 경우
			    	
			    	int arrSize = TRPL_C_ARR.length;
			    	//System.out.println("arrSize------------>"+arrSize);			    	
			    	
			    	if(arrSize == 1){
			    		//권한사업장 중 하나 선택
			    		SEARCH_TYPE = "2";
			    	}else {
			    		//체크박스 전체체크시
			    		SEARCH_TYPE = "1";
			    		srhTrplC = sessionGlnCode;
			    	}			    	
			    	
			    } else{
			    	//지사일 경우
			    	
			    	SEARCH_TYPE = "2";
			    	srhTrplC = sessionGlnCode;
			    }
			    
			    
				
					
					String[] header = {"매출일자","사업장코드","사업장명","상품코드","상품명","판매수량","판매금액", "간선여부"};					
					String[] keyIndex = {"SL_DT","NA_BZPLC","SHRT_BZPLNM","NA_WRS_C","WRSNM","SL_QT","TOT_SLAM", "ATL_YN"};
					
					AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);	
					handler = new ExcelFileMakerResultHandler(workbook, model);
					
					pdsSalesService.downloadExcelSalesDaliy(srhByDtFr, srhByDtTo, srhTrplC, SEARCH_TYPE, chkAtl, handler);
					
					List<Map<String, Object>> BillingList = pdsSalesService.downloadExcelSalesDaliyBilling(srhByDtFr, srhByDtTo, srhTrplC, SEARCH_TYPE, chkAtl);
					
					existDaliyData = (BillingList != null && BillingList.size() > 0); // 조회된 데이터가 있으면, true
					
					break;
			 default :
				 break;
			 
			}
			
			if (existDaliyData) { // 빌링 - 일일자료, 조회된 데이터가 있는 경우에만 과금
				pdsSalesService.markUp(srhByDtFr, srhByDtTo, TRPL_C_ARR, requestHelper.getGlnCode(), requestHelper.getUserID());
			}
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "판매정보_자료수신");
			searchMap.put("조회 시작일", srhByDtFr);
			searchMap.put("조회 종료일", srhByDtTo);
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
			
			
		} catch (AppetizerException | ValidationException e) {
		//} catch (AppetizerException e) {
		
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_0822
	 * 화면설명 : 간선데이터집계
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/saveAtlSalesData")
	public void saveAtlSalesData(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String srhByDtFr = 			requestHelper.getParameter("FROM_DATE"); //조회 시작일
			String srhByDtTo = 			requestHelper.getParameter("TO_DATE"); //조회 종료일

			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);

			
//			dsTotalHelp.setData(totalVo);
			
			int saveCnt = pdsSalesService.saveAtlSalesData(srhByDtFr, srhByDtTo, TRPL_C_ARR);
			

			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	} // saveAtlSalesData
	
	
	
	/*
	 * 화면ID : VAN_DS_SC_0840
	 * 화면명 : 주류실적 조회 - 엑셀  다운로드
	 * 화면 설명 : Grid Master
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSalesLiquorList")
	public void downloadExcelSalesLiquorList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		String searchType = 		request.getParameter("search_type"); //조회구분 (자사:3, 경쟁사:4)
		String mbcoType = 		request.getParameter("mbco_type"); //본지점포함 (본사:0, 지사:1)		
		String srhDateType = 		request.getParameter("srh_date_type"); //일자구분
		String fromDate = 		request.getParameter("from_date"); //조회시작일
		String toDate = 		request.getParameter("to_date"); //조회종료일
		String srhMonth = 		request.getParameter("srh_month"); //월 조회
		String srhWeak = 		request.getParameter("srh_weak"); //주 조회
		String prgrC = 		request.getParameter("prgr_c"); //가격군코드
		String naCode = 		request.getParameter("na_code"); //농협사업장코드
		String wrsCode = 		request.getParameter("wrs_code"); //상품코드
		String mrCenter = 		request.getParameter("mr_center"); //경쟁사코드
		String naRgnC = 		request.getParameter("na_rgn_c"); //지역코드
		String naRgnC2 = 		request.getParameter("na_rgn_c2"); //지역코드
		
		String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		try {			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {					
					"사업장코드",
					"사업장명",
					"지역코드",
					"지역코드명",
					"거래처코드",
					"거래처코드명",
					"상품코드",
					"상품코드명",
					"거래년월",
					"거래주수",
					"판매수량",
					"박스당입수",					
					"가격군코드",
					"가격군코드명",
					"상품대분류코드",
					"상품중분류코드",
					"상품소분류코드",
					"상품세분류코드",
					"상품대분류명",
					"상품중분류명",
					"상품소분류명",
					"상품세분류명",			
					"박스수량",
					"판매수량",
					"박스당입수",
					"박스수량",
					"판매수량",
					"박스당입수",
					"박스수량",
					"판매수량",
					"박스당입수",
					"박스수량",
					"판매수량",
					"박스당입수",
					"박스수량",
					"판매수량",
					"박스당입수",
					"박스수량",
					"판매수량",
					"박스당입수",
					"박스수량",
					"판매수량",
					"박스당입수",
					"박스수량"
					};
			
			String[] keyIndex = {
					"NA_BZPLC",
					"SHRT_BZPLNM",
					"NA_RGN_C",
					"RGN_CNM",
					"TRPL_C",
					"CLNTNM",
					"WRS_C",
					"WRSNM",
					"SL_YM",
					"SQWW",
					"SL_QT",
					"BOXPE_AQZ",					
					"PRGR_C",
					"PRGR_C_NM",
					"NA_WRS_LCLC",
					"NA_WRS_MCLC",
					"NA_WRS_SCLC_CODE",
					"NA_WRS_DTCF_C_CODE",
					"WRS_LCLFNM",
					"WRS_MCLFNM",
					"WRS_SCLFNM",
					"WRS_DTCFNM",
					"BOX_QT",
					"SL_QT",
					"BOXPE_AQZ",
					"BOX_QT",
					"ZERO_00",
					"ZERO_00",
					"ZERO_00",
					"ZERO_00",
					"ZERO_00",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0",
					"ZERO_0"
					};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);			
			
			pdsSalesService.downloadExcelSalesLiquorList(searchType,mbcoType, srhDateType, 
					fromDate, toDate, srhMonth ,
					srhWeak, prgrC, naCode,
					wrsCode, mrCenter, naRgnC, naRgnC2, TRPL_C_ARR, handler);	
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "주류판매실적");
			searchMap.put("일자구분", srhDateType);
			searchMap.put("조회 시작일", fromDate);
			searchMap.put("조회 종료일", toDate);			
			searchMap.put("월 조회", srhMonth);
			searchMap.put("주 조회", srhWeak);
			searchMap.put("가격군코드", prgrC);
			searchMap.put("농협사업장코드", naCode);			
			searchMap.put("상품코드", wrsCode);
			searchMap.put("경쟁사코드", mrCenter);
			searchMap.put("지역코드", naRgnC);
			searchMap.put("지역코드상세", naRgnC2);			
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	
	// saveAtlSalesData

	
}

