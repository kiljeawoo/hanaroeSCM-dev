package com.nh.escm.scm.delivery.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
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
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.scm.delivery.service.DeliveryCenterService;
import com.nh.escm.scm.delivery.vo.CenterDqpdVO;
import com.nh.escm.scm.delivery.vo.CenterNpayPnltVO;
import com.nh.escm.scm.delivery.vo.CenterOdDlvpnshtVO;
import com.nh.escm.scm.delivery.vo.CenterUnStrVO;
import com.nh.escm.util.PageHelper;

/**
 * 배송업무 - 미입고 현황, 미입고 패널티, 물류센터 결품내역
 * @author HyeRim.Oh
 *
 */
@RestController
public class DeliveryCenterController extends AbstractController {
	
	@Autowired
	private DeliveryCenterService deliveryCenterService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	/*
	 * 화면ID : VAN_DS_SC_0360
	 * 화면설명 : 미입고 현황 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/delivery/retrieveCenterUnStrList")
	public void retrieveCenterUnStrList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String naBzplc = requestHelper.getParameter("na_bzplc");  //검색사업장
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일		
		String searchArea = requestHelper.getParameter("search_area");  //검색범위
		String code = requestHelper.getParameter("code");  //코드(수요처 or 상품)
		String phdFcltC = requestHelper.getParameter("phd_fclt_c");  //물류기능
		String impsrt = requestHelper.getParameter("impsrt");  //부과율
		String unStrRsnc = requestHelper.getParameter("un_str_rsnc");  //미입고사유
		

		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
	    
		try {
			
			PlatformData platformData = new PlatformData();
			
			// Paging
			int totalRowCount = deliveryCenterService.getCenterUnStrCount(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			
			
			List<CenterUnStrVO> list = deliveryCenterService.retrieveCenterUnStrList(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc,start,limit);
			
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_centerUnStr");
				dsHelper.addColumns(CenterUnStrVO.class);
				
				for(CenterUnStrVO vo : list) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = deliveryCenterService.getCenterUnStrTotal(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(map.keySet());
				 dsHelper.setData(map);
				 platformData.addDataSet(dsHelper.getDataSet());
			}			
			
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0360
	 * 화면설명 : 미입고 현황 조회 - 엑셀다운로드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelUnStrList")
	public void downloadExcelUnStrList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String naBzplc = request.getParameter("na_bzplc");  //검색사업장
		String fromDate = request.getParameter("from_date");   //조회시작일
		String toDate = request.getParameter("to_date");  //조회종료일		
		String searchArea = request.getParameter("search_area");  //검색범위
		String code = request.getParameter("code");  //코드(수요처 or 상품)
		String phdFcltC = request.getParameter("phd_fclt_c");  //물류기능
		String impsrt = request.getParameter("impsrt");  //부과율
		String unStrRsnc = request.getParameter("un_str_rsnc");  //미입고사유
		
		/*
		String fileName = "업체별미입고현황.xls";
				
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		*/
		String fileName = request.getParameter("fileName");
				
		String searchArea_srh;
		
		if (StringUtils.isEmpty(searchArea) == false && searchArea.equals("0")) {
			searchArea_srh = "전체";
		} else if (StringUtils.isEmpty(searchArea) == false && searchArea.equals("2")) {
			searchArea_srh = "상품";
		} else {
			searchArea_srh= "공급처";	
		}
		
		
		String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
	    
		try {			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
									"입고예정일"
									,"경쟁통합사업장코드"
									,"사업장명"
									,"팀코드"
									,"공급처코드"
									,"공급처명"
									,"상품코드"
									,"상품명"
									,"물류기능코드"
									,"자동발주여부"
									,"입수"
									,"매입단가"
									,"발주수량"
									,"발주수량표시"
									,"발주금액"
									,"입고수량"
									,"입고수량표시"
									,"입고금액"
									,"미입고금액"
									,"미입고수량표시"
									,"미입고금액"
									,"상태 1발입 2발 3입 4E"
									,"발주금지사유"
									,"미입고사유"
									,"공급가능일"
									,"바이어명"
									,"부과대상금액"
									,"부과율"
									};
			String[] keyIndex = {
										"STR_PLA_DT"
										,"NA_BZPLC"
										,"NA_BZPLC_NM"
										,"NA_TEAM_C"				
										,"NA_TRPL_C"
										,"CLNTNM"
										,"NA_WRS_C"
										,"WRSNM"										
										,"PHD_FCLT_C"
										,"AUTO_ORDER" 	/*자동발주여부 없음*/									
										,"INPD_QT"
										,"BYNG_UPR"
										,"ODR_QT"
										,"ODR_UNT_QT"
										,"ODR_SELPR"
										,"STR_CPL_QT"
										,"STR_UNT_QT"
										,"SELPR"
										,"NSTR_QT"
										,"NSTR_UNT_QT"
										,"NSTR_PR"										
										,"STR_STSC"
										,"ODR_FBID_RSNC"
										,"UN_STR_RSNC"
										,"ROTS_SPY_PSB_DT"
										,"BUYER_NM"
										,"IMPS_AM"
										,"IMPSRT"
										};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryCenterService.downloadExcelUnStrList(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc,handler);			
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "업체별미입고현황");
			searchMap.put("검색사업장", naBzplc);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("검색범위", searchArea);
			searchMap.put("코드(수요처or상품)", code);
			searchMap.put("물류기능", phdFcltC);
			searchMap.put("부과율", impsrt);
			searchMap.put("미입고사유", unStrRsnc);
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
						
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0370
	 * 화면설명 : 미납 패널티 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/delivery/retrieveCenterNpayPnltList")
	public void retrieveCenterNpayPnltList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String odrSlpno = requestHelper.getParameter("odr_slpno");  //발주번호
		String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");  //발주처
		String dvyPlashSlpno = requestHelper.getParameter("dvy_plash_slpno");  //배송예정서번호
		String confirm = requestHelper.getParameter("confirm");  //구분(확인,미확인)
		String dateCode = requestHelper.getParameter("dateCode");  //일자구분
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일		
		
		String srhChkAll = requestHelper.getParameter("CHK_ALL");//전체 선택 유무
		String srhTrplC = 	requestHelper.getParameter("TRPL_C");// 거래처코드
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_centerNpayPnlt");
			dsHelper.addColumns(CenterNpayPnltVO.class);
			List<CenterNpayPnltVO> list = deliveryCenterService.retrieveCenterNpayPnltList(odrSlpno,odrplNaTrplC,dvyPlashSlpno,confirm,dateCode,fromDate,toDate,srhChkAll,srhTrplC);
			for(CenterNpayPnltVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}

	}
	
	/*
	 * 화면ID : VAN_DS_SC_0370
	 * 화면설명 : 미납 패널티 조회_구분(확인/미확인) 업데이트
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/delivery/updateCnfDtm")
	public void updateCnfDtm(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String na_bzplc = requestHelper.getParameter("na_bzplc");  //공급처경제통합거래처코드
		String str_pla_dt = requestHelper.getParameter("str_pla_dt");  //배송지경제통합거래처코드
		String slpno = requestHelper.getParameter("slpno");  //경제통합배송예정서전표번호	
		
		String NA_TRPL_C = requestHelper.getParameter("NA_TRPL_C");  //공급처경제통합거래처코드
		String NA_WRS_C = requestHelper.getParameter("NA_WRS_C");  //배송지경제통합거래처코드
		String NA_TEAM_C = requestHelper.getParameter("NA_TEAM_C");  //경제통합배송예정서전표번호
		
		String cnf_cmeno = requestHelper.getUserID();  //확인자개인번호		
		String ls_cmeno = requestHelper.getUserID();   //최종변경자개인번호	

		try {
			
			PlatformData platformData = new PlatformData();
			
			deliveryCenterService.updateCnfDtm(na_bzplc,str_pla_dt,slpno,cnf_cmeno,ls_cmeno,NA_TRPL_C,NA_WRS_C,NA_TEAM_C);
			
			try {
				boolean checked =sentCheckService.STPNLTCheckSendState(
						na_bzplc,
						str_pla_dt,
						slpno,
						NA_TRPL_C,
						NA_WRS_C,
						NA_TEAM_C);
				if(checked) {
					sendData(response, platformData);
				}
			} catch (NHSentErrorException e) {
				String eb = e.getMessage();
				sendData(response, platformData, -999, eb);
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0370
	 * 화면설명 : 미납 패널티 조회 배송예정서번호
	 */
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/delivery/retrieveOdDlvpnshtList") 
	public void retrieveOdDlvpnshtList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String odrplNaTrplC 	= 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
		String odrplNaTrplN 	= 	requestHelper.getParameter("odrpl_na_trpl_n"); //발주처명
		String fromDate 		= requestHelper.getParameter("from_date");   //조회시작일
		String toDate 			= requestHelper.getParameter("to_date");  //조회종료일
		String ddlyYn 			= requestHelper.getParameter("ddly_yn");  //직송여부
		String tempYn 			= requestHelper.getParameter("temp_yn");  //임시저장
		String all 				= requestHelper.getParameter("all");  //전체검색여부 전체  all
		
		
		String trplC = "";
		String spyplNaTrplC = "";
		
		
		if(StringUtils.isEmpty(requestHelper.getParameter("trplC"))){
			trplC 	= 	requestHelper.getGlnCode(); //수주처 코드
		}else{
			trplC =	requestHelper.getParameter("trplC");//거래처코드
		}
		
		/*
		if(StringUtils.equals("1", ddlyYn)){
			trplC = requestHelper.getGlnCode();
		}
		*/
		
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(trplC, requestHelper);
		
		
		
		try {
			
			PlatformData platformData = new PlatformData();
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
			DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
			dsHelper.addColumns(CenterOdDlvpnshtVO.class);
			List<CenterOdDlvpnshtVO> list = deliveryCenterService.retrieveOdDlvpnshtList(odrplNaTrplC, TRPL_C_ARR, fromDate, toDate, ddlyYn, tempYn, spyplNaTrplC, odrplNaTrplN, all, mbcoType, truAgcyNaTrplC);			
			for(CenterOdDlvpnshtVO vo : list) {
				dsHelper.setData(vo);
			}		
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0380
	 * 화면설명 : 물류센터 결품 내역 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/delivery/retrieveCenterDqpdList") 
	public void retrieveCenterDqpdList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);		
		
		String searchType = 	requestHelper.getParameter("search_type"); //조회구분
		String wrs = 	requestHelper.getParameter("wrs"); //상품 코드 or 상품 명
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String naBzplc = 	requestHelper.getParameter("na_bzplc"); //검색사업장
		//String refType = 	requestHelper.getParameter("ref_type");; ///참조구분
		
		String srhChkAll = requestHelper.getParameter("CHK_ALL");//전체 선택 유무
		String srhTrplC = 	requestHelper.getParameter("TRPL_C");// 거래처코드
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_centerDqpd");
			dsHelper.addColumns(CenterDqpdVO.class);
			
			List<CenterDqpdVO> list = deliveryCenterService.retrieveCenterDqpdList(searchType, wrs, fromDate, toDate,naBzplc,srhChkAll,srhTrplC);		
			for(CenterDqpdVO vo : list) {
				dsHelper.setData(vo);
			}
				
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	
	}
	
	
	
}
