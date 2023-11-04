package com.nh.escm.scm.order.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashSet;
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
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.DeduplicationObject;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;
import com.nh.escm.scm.order.service.OrdersRSVService;

@RestController
public class OrdersRSVController extends AbstractController {
	Logger logger = LoggerUtil.getServerLogger(this.getClass());
	
	@Autowired
	private OrdersRSVService ordersRSVService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/getOrderRSVMaster")
	public void getOrderRSVMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchPeriod = requestHelper.getParameter("searchPeriod");
		String calFrom = requestHelper.getParameter("calFrom");
		String calTo = requestHelper.getParameter("calTo");
		String wmcLocRgnDsc = requestHelper.getParameter("wmcLocRgnDsc");
		String htLovRgnC = requestHelper.getParameter("htLovRgnC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		PlatformData platformData = new PlatformData();
		
		try {
			//BalanceValidator.masterValidate(BAS_YM, TRPL_C);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			
			List<Map<String, Object>> balanceList = ordersRSVService.getOrderRSVMaster(searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC, TRPL_C_ARR);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(balanceList.get(0).keySet());
				 for(Map<String, Object> map : balanceList) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/getOrderRSVDetail")
	public void getOrderRSVDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String rvoplNaTrplC = requestHelper.getParameter("rvoplNaTrplC");
		String spyplNaTrplC = requestHelper.getParameter("spyplNaTrplC");
		String searchPeriod = requestHelper.getParameter("searchPeriod");
		String calFrom = requestHelper.getParameter("calFrom");
		String calTo = requestHelper.getParameter("calTo");
		String wmcLocRgnDsc = requestHelper.getParameter("wmcLocRgnDsc");
		String htLovRgnC = requestHelper.getParameter("htLovRgnC");
		
		
		PlatformData platformData = new PlatformData();
		
		try {
			//BalanceValidator.masterValidate(BAS_YM, TRPL_C);

			
			List<Map<String, Object>> balanceList = ordersRSVService.getOrderRSVDetail(rvoplNaTrplC, spyplNaTrplC, searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(balanceList.get(0).keySet());
				 for(Map<String, Object> map : balanceList) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	
	private void markBilling(String GLN, String MD_ID, HashSet<DeduplicationObject> billingSet) {
		billingMarkUpService.markUpForOrderReserved(BillingMarkUpTableName.TB_OD_ORDRSV, GLN, MD_ID, billingSet);
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/getOrderRSVThird")
	public void getOrderRSVThird(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String ODRPL_NA_TRPL_C = requestHelper.getParameter("ODRPL_NA_TRPL_C");
		String ODRPL_NA_TEAM_C = requestHelper.getParameter("ODRPL_NA_TEAM_C");
		String ODR_DT = requestHelper.getParameter("ODR_DT");
		String ODR_SLPNO = requestHelper.getParameter("ODR_SLPNO");
		String SPYPL_NA_TRPL_C = requestHelper.getParameter("SPYPL_NA_TRPL_C");
		
		
		PlatformData platformData = new PlatformData();
		
		try {
			//BalanceValidator.masterValidate(BAS_YM, TRPL_C);

			
			List<Map<String, Object>> balanceList = ordersRSVService.getOrderRSVThird(ODRPL_NA_TRPL_C, ODRPL_NA_TEAM_C, ODR_DT, ODR_SLPNO, SPYPL_NA_TRPL_C);
			
			if(balanceList != null && balanceList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(balanceList.get(0).keySet());
				 for(Map<String, Object> map : balanceList) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			/**
			 * 빌링 마크 시작
			 */
			
			HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();

			LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
			values.put("ODRPL_NA_TRPL_C", ODRPL_NA_TRPL_C);
			values.put("ODRPL_NA_TEAM_C", ODRPL_NA_TEAM_C);
			values.put("ODR_DT", ODR_DT);
			values.put("ODR_SLPNO", ODR_SLPNO);
			values.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
			DeduplicationObject ddo = new DeduplicationObject(values);
			billingSet.add(ddo);

			
			String GLN = requestHelper.getGlnCode();	    
			String MD_ID = requestHelper.getUserID(); 
			
			markBilling(GLN, MD_ID, billingSet);
			/**
			 * 빌링 마크 종료
			 */

			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/order/downloadExcel")
	public void downloadExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "수주예정내역.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		String searchPeriod = requestHelper.getParameter("searchPeriod");
		String calFrom = requestHelper.getParameter("calFrom");
		String calTo = requestHelper.getParameter("calTo");
		String wmcLocRgnDsc = requestHelper.getParameter("wmcLocRgnDsc");
		String htLovRgnC = requestHelper.getParameter("htLovRgnC");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		
		try {
			//BalanceValidator.masterValidate(BAS_YM, TRPL_C);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
				"발주처경제통합거래처코드",
				"발주처경제통합팀코드",
				"발주처명",
				"발주일자",
				"발주전표번호",
				"상품명",
				"경제통합상품코드",
				"수주처경제통합거래처코드",
				"수주처경제통합팀코드",
				"공급처경제통합거래처코드",
				"공급처경제통합팀코드",
				"수발주정보생성구분코드",
				"수요자계약유형코드",
				"배송요청일자",
				"배송지경제통합거래처코드",
				"배송지경제통합팀코드",
				"배송지명",
				"직송여부",
				"변경후경제통합상품코드",
				"과세구분코드",
				"공병경제통합상품코드",
				"공병금액",
				"공상자금액",
				"발주원가",
				"발주수량",
				"발주부가세",
				"발주금액",
				"대량발주여부"
			};
			String[] keyIndex = {
				"ODRPL_NA_TRPL_C",
				"ODRPL_NA_TEAM_C",
				"ODRPL_NA_TRPL_N",
				"ODR_DT",
				"ODR_SLPNO",
				"WRSNM",
				"NA_WRS_C",
				"RVOPL_NA_TRPL_C",
				"RVOPL_NA_TEAM_C",
				"SPYPL_NA_TRPL_C",
				"SPYPL_NA_TEAM_C",
				"ROGO_INF_CRT_DSC",
				"CSER_CTR_TPC",
				"DVY_RQR_DT",
				"DVYAA_NA_TRPL_C",
				"DVYAA_NA_TEAM_C",
				"DVYAA_NA_TRPL_N",
				"DDLY_YN",
				"CHAF_NA_WRS_C",
				"TXT_DSC",
				"VCBT_NA_WRS_C",
				"VCBT_AM",
				"VCBX_AM",
				"ODR_PCS",
				"ODR_QT",
				"ODR_VAT",
				"ODR_AM",
				"LGQT_TR_NM"
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			ordersRSVService.downloadExcel(searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC, TRPL_C_ARR, handler);
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = ordersRSVService.downloadExcelBilling(searchPeriod, calFrom, calTo, wmcLocRgnDsc, htLovRgnC, TRPL_C_ARR);
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.get("ODRPL_NA_TRPL_C").toString());
					values.put("ODRPL_NA_TEAM_C", vo.get("ODRPL_NA_TEAM_C").toString());
					values.put("ODR_DT", vo.get("ODR_DT").toString());
					values.put("ODR_SLPNO", vo.get("ODR_SLPNO").toString());
					values.put("NA_WRS_C", vo.get("NA_WRS_C").toString());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
				
			}
			/**
			 * 빌링 마크 종료
			 */
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
}
