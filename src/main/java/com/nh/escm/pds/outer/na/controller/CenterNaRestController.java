package com.nh.escm.pds.outer.na.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMaker;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.DeduplicationObject;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;
import com.nh.escm.pds.outer.na.service.CenterNaService;
import com.nh.escm.pds.outer.na.vo.CenterLiquorNaVO;
import com.nh.escm.pds.outer.na.vo.CenterNaVO;
import com.nh.escm.util.PageHelper;

/**
 * 출고정보
 * @author HyeRim.Oh
 *
 */

@RestController
public class CenterNaRestController extends AbstractController {
	
	@Autowired
	private CenterNaService centerService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	/*
	 * 화면ID : VAN_DS_SC_0700
	 * 화면설명 : 물류센터_출고실적_조회	
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/center/na/retrieveWrsMasterList")
	public void retrieveWrsMasterList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String phdNaBzplc = requestHelper.getParameter("na_bzplc");  //물류경제통합사업장코드
		String econStdvDsc = requestHelper.getParameter("econ_stdv_dsc");  //입출고구분코드	
		String dateCode = requestHelper.getParameter("dateCode");  //일자구분
		String calFrom = requestHelper.getParameter("cal_from");  //조회시작일
		String calTo = requestHelper.getParameter("cal_to");  //조회종료일
		String phdDlrDsc = requestHelper.getParameter("phd_dlr_dsc");  //출고구분코드
		String prgrC = requestHelper.getParameter("prgr_c");  //가격군코드
		String NA_TR_DSC = requestHelper.getParameter("trade_type");  //거래구분
		String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
		
		String mbCoType = requestHelper.getMbcoType();  //본지사구분 
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);

		try {
			PlatformData platformData = new PlatformData();
			
			// Paging
			int totalRowCount = centerService.getOutWrsCount(phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR, mbCoType, upTrplC, naWrsC);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			
			List<CenterNaVO> list = centerService.retrieveWrsMasterList(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,start,limit, mbCoType, upTrplC, naWrsC);
			
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT");	
				dsHelper.addColumns(CenterNaVO.class);				
				
				for(CenterNaVO vo : list) {
					dsHelper.setData(vo);		
		        }
				platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = centerService.getWrsMasterTotal(phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR, mbCoType, upTrplC);
			
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
	
	private void markBilling(String GLN, String MD_ID, HashSet<DeduplicationObject> billingSet) {
		billingMarkUpService.markUpForCenter(BillingMarkUpTableName.TB_LG_OUT_D, GLN, MD_ID, billingSet);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0700
	 * 화면설명 : 물류센터_출고실적_조회	 - 엑셀 마스터 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelWrsMasterOnly")
	public void downloadExcelWrsMasterOnly(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트 
			String phdNaBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
			String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
			String dateCode = request.getParameter("dateCode");  //일자구분
			String calFrom = request.getParameter("cal_from");  //조회시작일
			String calTo = request.getParameter("cal_to");  //조회종료일
			String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
			String prgrC = request.getParameter("prgr_c");  //가격군코드
			String NA_TR_DSC = request.getParameter("trade_type");  //거래구분
			String naWrsC = request.getParameter("na_wrs_c");//상품코드
			
			String mbCoType = requestHelper.getMbcoType();  //본지사구분 
			String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<CenterNaVO> list = centerService.retrieveWrsMasterList(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,-1,-1, mbCoType, upTrplC, naWrsC);
					
			
			String[] header = {
					"물류경제통합사업장코드",
					"단축사업장명",
					"경제통합거래처,상품코드",
					"거래처,상품명",
					"물류수주수량(낱개)",
					"물류수주수량(표시단위)",
					"물류피킹수량(낱개)",
					"물류피킹수량(표시단위)",
					"물류출고수량(낱개)",
					"물류출고수량(표시단위)",
					"고객검수수량(낱개)",
					"고객검수수량(표시단위)",
					"고객검수금액",
					"물류검수수량(낱개)",
					"물류검수수량(표시단위)",
					"물류검수금액"
					};
			String[] keyIndex = {
					"PHD_NA_BZPLC",
					"SHRT_BZPLNM",
					"NA_TRPL_C",
					"CLNTNM",
					"PHD_RVO_QT",
					"PHD_RVO_PER_QT",
					"PHD_PCK_QT",
					"PHD_PCK_PER_QT",
					"PHD_OUT_QT",
					"PHD_OUT_PER_QT",
					"CUS_CNR_QT",
					"CUS_CNR_PER_QT",
					"CUS_CNR_AMT",
					"PHD_CNR_QT",
					"PHD_CNR_PER_QT",
					"PHD_CNR_AMT"
					};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);		
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "물류센터출고실적");
			searchMap.put("검색사업장", phdNaBzplc);
			searchMap.put("일자구분", dateCode);
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);			
			searchMap.put("출고구분코드", phdDlrDsc);
			searchMap.put("가격군코드", prgrC);						
			searchMap.put("거래처코드", srhTrplC);
			excelMaker.createSearchSheet(searchMap);
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0700
	 * 화면설명 : 물류센터_출고실적_조회	 - 엑셀 상세 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelWrsMasterList")
	public void downloadExcelWrsMasterList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

/*		String fileName = "물류센터출고실적_기준정보.xls";
		
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}*/
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트 
			String phdNaBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
			String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
			String dateCode = request.getParameter("dateCode");  //일자구분
			String calFrom = request.getParameter("cal_from");  //조회시작일
			String calTo = request.getParameter("cal_to");  //조회종료일
			String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
			String prgrC = request.getParameter("prgr_c");  //가격군코드
			String NA_TR_DSC = request.getParameter("trade_type");  //거래구분
			String mbCoType = requestHelper.getMbcoType();  //본지사구분 
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
			String naWrsC = request.getParameter("na_wrs_c");//상품코드
			
			//두번째 시트			
			String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
			
			List<Map<String, Object>> list = centerService.downloadExcelWrsMasterList(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC, mbCoType, upTrplC, naWrsC);
					
			
			String[] header = {
					"물류경제통합사업장코드",
					"단축사업장명",
					"물류수주일자",
					"물류출고완료일자",
					"기표일자",
					"물류출고구분코드",
					"경제통합거래처코드",
					"거래처명",
					"경제통합상품코드",
					"단축상품명",
					"상품규격명",
					"상품표시물류단위코드",
					"내품수량",
					"소분입수수량",
					"물류판매가",
					"물류출고수량(낱개) (회송제외)",
					"물류출고수량(표시단위) (회송제외)",
					"고객검수일자",
					"고객검수수량(낱개)",
					"고객검수수량(표시단위)",
					"고객검수금액",
					"물류검수수량(낱개)",
					"물류검수수량(표시단위)",
					"물류검수금액",
					"과세구분코드",
					"예약행사년도",
					"예약행사번호",
					"소분여부 0:부 1:여",
					"사전발주상품여부",
					"경제통합공급처코드",
					"공급처명",
					"배송지코드",
					"배송지명"
					};
			String[] keyIndex = {
					"PHD_NA_BZPLC",
					"SHRT_BZPLNM",
					"PHD_RVO_DT",
					"PHD_DLR_CPL_DT",
					"FILP_DT",
					"PHD_DLR_DSC",
					"NA_TRPL_C",
					"CLNTNM",
					"NA_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"WRS_MRK_PHD_UNT_C",
					"INPD_QT_D",
					"INPD_QT_D2",
					"PHD_SELPR",
					"PHD_OUT_QT",
					"PHD_OUT_PER_QT",
					"CUS_CNR_DT",
					"CUS_CNR_QT",
					"CUS_CNR_PER_QT",
					"CUS_CNR_AMT",
					"PHD_CNR_QT",
					"PHD_CNR_PER_QT",
					"PHD_CNR_AMT",
					"TXT_DSC",
					"BKG_EVT_YY",
					"BKG_EVT_NO",
					"SVS_YN",
					"ADD_4",
					"NA_TRPL_C_1",
					"CLNTNM_1",
					"DVY_NA_TRPL_C",
					"DVY_NA_TRPL_C_NM"
					};
			/**
			 * 빌링 마크 시작
			 */
			
	
			List<Map<String, Object>> billingList = centerService.getBillingMarkUpTargets(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC, "0", upTrplC, naWrsC);
			
			
			HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
			for(Map<String, Object> vo : billingList) {
				LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
				values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC").toString());
				values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO").toString());
				values.put("DLR_PHD_SQNO", vo.get("DLR_PHD_SQNO").toString());
				values.put("WRS_GRD_DSC", vo.get("WRS_GRD_DSC").toString());
				DeduplicationObject ddo = new DeduplicationObject(values);
				billingSet.add(ddo);
			}
			
			String GLN = requestHelper.getGlnCode();	    
			String MD_ID = requestHelper.getUserID();
			
			markBilling(GLN, MD_ID, billingSet);
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);		
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "물류센터출고실적");
			searchMap.put("검색사업장", phdNaBzplc);
			searchMap.put("일자구분", dateCode);
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);			
			searchMap.put("출고구분코드", phdDlrDsc);
			searchMap.put("가격군코드", prgrC);						
			searchMap.put("거래처코드", srhTrplC);
			excelMaker.createSearchSheet(searchMap);
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	

	/*
	 * 화면ID : VAN_DS_SC_0700
	 * 화면설명 : 물류센터_출고실적_조회 디테일 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelWrsDetailList")
	public void downloadExcelWrsDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*String fileName = "물류센터출고실적_상세정보.xls";
		
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
			//첫번째 시트 
			String naBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
			String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
			String dateCode = request.getParameter("dateCode");  //일자구분
			String calFrom = request.getParameter("cal_from");  //조회시작일
			String calTo = request.getParameter("cal_to");  //조회종료일
			String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
			String prgrC = request.getParameter("prgr_c");  //가격군코드
			String NA_TR_DSC = request.getParameter("trade_type");  //거래구분
			String mbCoType = requestHelper.getMbcoType();  //본지사구분 
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
			String naWrsC = request.getParameter("na_wrs_c");//상품코드
			
			//두번째 시트			
			String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
			String phdNaBzplc = requestHelper.getParameter("phd_na_bzplc");  //물류경제통합사업장코드	
			
			List<Map<String, Object>> list = centerService.downloadExcelWrsDetailList(
					naBzplc,phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC, mbCoType, upTrplC, naWrsC);
					
			
			String[] header = {"물류경제통합 사업장코드",
					"단축사업장명",
					"경제통합거래처코드",
					"거래처명",
					"물류수주수량 (낱개)_합계",
					"물류수주수량 (표시단위)_합계",
					"물류피킹수량 (낱개)_합계",
					"물류피킹수량 (표시단위)_합계",
					"물류출고수량 (낱개_합계",
					"물류출고수량 (표시단위)_합계",
					"고객검수수량 (낱개)_합계",
					"고객검수수량 (표시단위)_합계",
					"고객검수금액_합계",
					"물류검수수량 (낱개)_합계",
					"물류검수수량 (표시단위)_합계",
					"물류검수금액",
					"물류경제통합 사업장코드",
					"단축사업장명",
					"물류출고 구분코드",
					"배송지코드",
					"배송지명",
					"경제통합 거래처코드",
					"거래처명",
					"경제통합 상품코드",
					"단축상품명",
					"상품규격명",
					"내품수량",
					"물류판매가",
					"물류출고수량 (낱개)",
					"물류출고수량 (표시단위)",
					"고객검수수량 (낱개)",
					"고객검수수량 (표시단위)",
					"고객검수금액",
					"물류검수수량 (낱개)",
					"물류검수수량 (표시단위)",
					"물류검수금액",
					"소분여부"};
			String[] keyIndex = {"PHD_NA_BZPLC",
					"SHRT_BZPLNM",
					"NA_TRPL_C",
					"CLNTNM",
					"PHD_RVO_QT",
					"PHD_RVO_PER_QT",
					"PHD_PCK_QT",
					"PHD_PCK_PER_QT",
					"PHD_OUT_QT",
					"PHD_OUT_PER_QT",
					"CUS_CNR_QT",
					"CUS_CNR_PER_QT",
					"CUS_CNR_AMT",
					"PHD_CNR_QT",
					"PHD_CNR_PER_QT",
					"PHD_CNR_AMT",
					"PHD_NA_BZPLC_D",
					"SHRT_BZPLNM_D",
					"PHD_DLR_DSC_D",
					"DVY_NA_TRPL_C_D",
					"DVY_NA_TRPL_C_NM_D",
					"NA_TRPL_C_D",
					"CLNTNM_D",
					"NA_WRS_C_D",
					"WRSNM_D",
					"WRS_STDNM_D",
					"INPD_QT_D",
					"PHD_SELPR_D",
					"PHD_OUT_QT_D",
					"PHD_OUT_PER_QT_D",
					"CUS_CNR_QT_D",
					"CUS_CNR_PER_QT_D",
					"CUS_CNR_AMT_D",
					"PHD_CNR_QT_D",
					"PHD_CNR_PER_QT_D",
					"PHD_CNR_AMT_D",
					"SVS_YN_D"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);		
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "물류센터출고실적");
			searchMap.put("검색사업장", naBzplc);
			searchMap.put("일자구분", dateCode);
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);			
			searchMap.put("출고구분코드", phdDlrDsc);
			searchMap.put("가격군코드", prgrC);			
			searchMap.put("상세사업장코드", phdNaBzplc);			
			searchMap.put("거래처코드", srhTrplC);
			excelMaker.createSearchSheet(searchMap);
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_0700
	 * 화면설명 : 물류센터_출고실적_상세조회	
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/center/na/retrieveWrsDetailList")
	public void retrieveWrsDetailList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
				
		String phdNaBzplc = requestHelper.getParameter("phd_na_bzplc");  //물류경제통합사업장코드		
		String phdDlrDsc = requestHelper.getParameter("phd_dlr_dsc");  //출고구분코드		
		String prgrC = requestHelper.getParameter("prgr_c");  //가격군코드				
		String naTrplC = requestHelper.getParameter("na_trpl_c");  //경제통합거래처코드
		
		String dateCode = requestHelper.getParameter("dateCode");  //일자구분
		String calFrom = requestHelper.getParameter("cal_from");  //조회시작일
		String calTo = requestHelper.getParameter("cal_to");  //조회종료일
		String NA_TR_DSC = requestHelper.getParameter("trade_type");  //거래구분		
		String mbCoType = requestHelper.getMbcoType();  //본지사구분 
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
		String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
		
		try {
			PlatformData platformData = new PlatformData();			
			
			DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT_DETAIL");
			dsHelper.addColumns(CenterNaVO.class);
						
			List<CenterNaVO> centerDetailList = centerService.retrieveWrsDetailList(
					phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo,NA_TR_DSC,TRPL_C_ARR,-1,-1, mbCoType, upTrplC, naWrsC);
			
			
			
			
	        for(CenterNaVO vo : centerDetailList) {	          
				dsHelper.setData(vo);
			}
	        platformData.addDataSet(dsHelper.getDataSet());
	        
	        List<Map<String, Object>> billingList = centerService.getBillingMarkUpTargets(
					phdNaBzplc,null, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,"0", upTrplC, naWrsC);
			
			
			HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
			for(Map<String, Object> vo : billingList) {
				LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
				values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC").toString());
				values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO").toString());
				values.put("DLR_PHD_SQNO", vo.get("DLR_PHD_SQNO").toString());
				values.put("WRS_GRD_DSC", vo.get("WRS_GRD_DSC").toString());
				DeduplicationObject ddo = new DeduplicationObject(values);
				billingSet.add(ddo);
			}
			
			String GLN = requestHelper.getGlnCode();	    
			String MD_ID = requestHelper.getUserID();
			
			markBilling(GLN, MD_ID, billingSet);
			
	        //platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, platformData);
		//} catch (AppetizerException | ValidationException e) {
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0710
	 * 화면설명 : 물류센터_출고실적_주류_조회
	 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/center/na/retrieveLiquorWrsMasterList")
		public void retrieveLiquorWrsMasterList(HttpServletRequest request, HttpServletResponse response) {

			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
						
			String phdNaBzplc = requestHelper.getParameter("na_bzplc");  //물류경제통합사업장코드
			String econStdvDsc = requestHelper.getParameter("econ_stdv_dsc");  //입출고구분코드	
			String dateCode = requestHelper.getParameter("dateCode");  //일자구분
			String calFrom = requestHelper.getParameter("cal_from");  //조회시작일
			String calTo = requestHelper.getParameter("cal_to");  //조회종료일
			String phdDlrDsc = requestHelper.getParameter("phd_dlr_dsc");  //출고구분코드
			String prgrC = requestHelper.getParameter("prgr_c");  //가격군코드
			String NA_TR_DSC = requestHelper.getParameter("trade_type");  //거래구분
			String mbCoType = requestHelper.getMbcoType();  //본지사구분 
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
			String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
			
			
			try {
				PlatformData platformData = new PlatformData();
				
				// Paging
				int totalRowCount = centerService.getOutLiquorWrsMasterCount(phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,
						prgrC,NA_TR_DSC,TRPL_C_ARR, mbCoType, upTrplC, naWrsC);			
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int limit = pageHelper.getEnd();			
				
				List<CenterLiquorNaVO> centerLiquorMasterList = centerService.retrieveLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,start,limit, mbCoType, upTrplC, naWrsC);
				
				if(centerLiquorMasterList != null && centerLiquorMasterList.size() > 0) {
					DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT");	
					dsHelper.addColumns(CenterNaVO.class);
					
					for(CenterLiquorNaVO vo : centerLiquorMasterList) {
						dsHelper.setData(vo);
			        }			
					platformData.addDataSet(dsHelper.getDataSet());
				}	
				
				Map<String, Object> map = centerService.getLiquorWrsMasterTotal(phdNaBzplc,econStdvDsc, dateCode, calFrom,
						calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR, mbCoType, upTrplC);
				
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
		 * 화면ID : VAN_DS_SC_0710
		 * 화면설명 : 물류센터_출고실적_주류_상세_조회
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/center/na/retrieveLiquorWrsDetailList")
		public void retrieveLiquorWrsDetailList(HttpServletRequest request, HttpServletResponse response) {

			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String phdNaBzplc = requestHelper.getParameter("phd_na_bzplc");  //물류경제통합사업장코드		
			String phdDlrDsc = requestHelper.getParameter("phd_dlr_dsc");  //출고구분코드		
			String prgrC = requestHelper.getParameter("prgr_c");  //가격군코드				
			String naTrplC = requestHelper.getParameter("na_trpl_c");  //경제통합거래처코드		
			String dateCode = requestHelper.getParameter("dateCode");  //일자구분
			String calFrom = requestHelper.getParameter("cal_from");  //조회시작일
			String calTo = requestHelper.getParameter("cal_to");  //조회종료일
			String NA_TR_DSC = requestHelper.getParameter("trade_type");  //거래구분	
			String mbCoType = requestHelper.getMbcoType();  //본지사구분 
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
			String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
			
			List<Map<String, Object>> billingList = centerService.getBillingMarkUpTargets(
						phdNaBzplc,null, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,"1", upTrplC, naWrsC);
				
				
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC").toString());
					values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO").toString());
					values.put("DLR_PHD_SQNO", vo.get("DLR_PHD_SQNO").toString());
					values.put("WRS_GRD_DSC", vo.get("WRS_GRD_DSC").toString());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				
				markBilling(GLN, MD_ID, billingSet);
							
			try {
				PlatformData platformData = new PlatformData();				

				DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT_DETAIL");
				dsHelper.addColumns(CenterNaVO.class);
							
				List<CenterLiquorNaVO> centerLiquorDetailList = centerService.retrieveLiquorWrsDetailList(
						phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo,NA_TR_DSC,TRPL_C_ARR,-1,-1, mbCoType, upTrplC, naWrsC);
				
		        for(CenterLiquorNaVO vo : centerLiquorDetailList) {	          
					dsHelper.setData(vo);
				}
		        platformData.addDataSet(dsHelper.getDataSet());
		        //platformData.addDataSet(pageHelper.getDsPageVo()); //paging
				sendData(response, platformData);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		}
		
		/*
		 * 화면ID : VAN_DS_SC_0710
		 * 화면설명 : 주류 물류센터_출고실적_조회	 - 마스터 엑셀다운로드
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelLiquorWrsMasterOnly")
		public void downloadExcelLiquorWrsMasterOnly(HttpServletRequest request, HttpServletResponse response) {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String fileName = request.getParameter("fileName");
			
			try {
				//첫번째 시트 
				String phdNaBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
				String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
				String dateCode = request.getParameter("dateCode");  //일자구분
				String calFrom = request.getParameter("cal_from");  //조회시작일
				String calTo = request.getParameter("cal_to");  //조회종료일
				String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
				String prgrC = request.getParameter("prgr_c");  //가격군코드
				String NA_TR_DSC = request.getParameter("trade_type");  //거래구분
				String mbCoType = requestHelper.getMbcoType();  //본지사구분 
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				String upTrplC =	request.getParameter("UP_TRPL_C");//거래처코드
				String naWrsC = request.getParameter("na_wrs_c");//상품코드
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<CenterLiquorNaVO> centerLiquorMasterList = centerService.retrieveLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,-1,-1, mbCoType, upTrplC, naWrsC);
				
				String[] header = {
						"물류경제통합사업장코드",
						"단축사업장명",
						"경제통합거래처,상품코드",
						"거래처,상품명",
						"물류수주수량(낱개)",
						"물류수주수량(표시단위)",
						"물류피킹수량(낱개)",
						"물류피킹수량(표시단위)",
						"물류출고수량(낱개)",
						"물류출고수량(표시단위)",
						"고객검수수량(낱개)",
						"고객검수수량(표시단위)",
						"고객검수금액",
						"물류검수수량(낱개)",
						"물류검수수량(표시단위)",
						"물류검수금액"
						};
				String[] keyIndex = {
						"PHD_NA_BZPLC",
						"SHRT_BZPLNM",
						"NA_TRPL_C",
						"CLNTNM",
						"PHD_RVO_QT",
						"PHD_RVO_PER_QT",
						"PHD_PCK_QT",
						"PHD_PCK_PER_QT",
						"PHD_OUT_QT",
						"PHD_OUT_PER_QT",
						"CUS_CNR_QT",
						"CUS_CNR_PER_QT",
						"CUS_CNR_AMT",
						"PHD_CNR_QT",
						"PHD_CNR_PER_QT",
						"PHD_CNR_AMT"
						};
				
				AbstractModel model = new DefaultModel("마스터", header, keyIndex, centerLiquorMasterList);
				
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);		
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("출력화면", "주류물류센터출고실적");
				searchMap.put("검색사업장", phdNaBzplc);
				searchMap.put("일자구분", dateCode);
				searchMap.put("조회시작일", calFrom);
				searchMap.put("조회종료일", calTo);			
				searchMap.put("출고구분코드", phdDlrDsc);
				searchMap.put("가격군코드", prgrC);						
				searchMap.put("거래처코드", srhTrplC);
				excelMaker.createSearchSheet(searchMap);
				
				excelMaker.write(response, fileName);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendHtmlAlert(response, e.getMessage());
			}
		}
		
		/*
		 * 화면ID : VAN_DS_SC_0710
		 * 화면설명 : 주류 물류센터_출고실적_조회	 - 엑셀상세다운로드
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelLiquorWrsMasterList")
		public void downloadExcelLiquorWrsMasterList(HttpServletRequest request, HttpServletResponse response) {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String fileName = request.getParameter("fileName");
			
			try {
				//첫번째 시트 
				String phdNaBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
				String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
				String dateCode = request.getParameter("dateCode");  //일자구분
				String calFrom = request.getParameter("cal_from");  //조회시작일
				String calTo = request.getParameter("cal_to");  //조회종료일
				String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
				String prgrC = request.getParameter("prgr_c");  //가격군코드
				String NA_TR_DSC = request.getParameter("trade_type");  //거래구분
				String mbCoType = requestHelper.getMbcoType();  //본지사구분 
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
				String naWrsC = request.getParameter("na_wrs_c");//상품코드
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC, mbCoType, upTrplC, naWrsC);
						
				
				String[] header = {
						"물류경제통합사업장코드",
						"단축사업장명",
						"물류수주일자",
						"물류출고완료일자",
						"기표일자",
						"물류출고구분코드",
						"경제통합거래처코드",
						"거래처명",
						"경제통합상품코드",
						"단축상품명",
						"상품규격명",
						"상품표시물류단위코드",
						"내품수량",
						"소분입수수량",
						"물류판매가",
						"물류출고수량(낱개) (회송제외)",
						"물류출고수량(표시단위) (회송제외)",
						"고객검수일자",
						"고객검수수량(낱개)",
						"고객검수수량(표시단위)",
						"고객검수금액",
						"물류검수수량(낱개)",
						"물류검수수량(표시단위)",
						"물류검수금액",
						"과세구분코드",
						"예약행사년도",
						"예약행사번호",
						"소분여부 0:부 1:여",
						"사전발주상품여부",
						"경제통합공급처코드",
						"공급처명",
						"배송지코드",
						"배송지명"
						};
				String[] keyIndex = {
						"PHD_NA_BZPLC",
						"SHRT_BZPLNM",
						"PHD_RVO_DT",
						"PHD_DLR_CPL_DT",
						"ADD_1",
						"PHD_DLR_DSC",
						"NA_TRPL_C",
						"CLNTNM",
						"NA_WRS_C",
						"WRSNM",
						"WRS_STDNM",
						"WRS_MRK_PHD_UNT_C",
						"INPD_QT_D",
						"INPD_QT_D2",
						"PHD_SELPR",
						"PHD_OUT_QT",
						"PHD_OUT_PER_QT",
						"CUS_CNR_DT",
						"CUS_CNR_QT",
						"CUS_CNR_PER_QT",
						"CUS_CNR_AMT",
						"PHD_CNR_QT",
						"PHD_CNR_PER_QT",
						"PHD_CNR_AMT",
						"TXT_DSC",
						"ADD_2",
						"ADD_3",
						"SVS_YN",
						"ADD_4",
						"NA_TRPL_C_1",
						"CLNTNM_1",
						"DVY_NA_TRPL_C",
						"DVY_NA_TRPL_C_NM"
						};
				
				List<Map<String, Object>> billingList = centerService.getBillingMarkUpTargets(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,"1", upTrplC, naWrsC);
				
				
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC").toString());
					values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO").toString());
					values.put("DLR_PHD_SQNO", vo.get("DLR_PHD_SQNO").toString());
					values.put("WRS_GRD_DSC", vo.get("WRS_GRD_DSC").toString());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				
				markBilling(GLN, MD_ID, billingSet);
				
				AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
				
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);		
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("출력화면", "주류물류센터출고실적");
				searchMap.put("검색사업장", phdNaBzplc);
				searchMap.put("일자구분", dateCode);
				searchMap.put("조회시작일", calFrom);
				searchMap.put("조회종료일", calTo);			
				searchMap.put("출고구분코드", phdDlrDsc);
				searchMap.put("가격군코드", prgrC);						
				searchMap.put("거래처코드", srhTrplC);
				excelMaker.createSearchSheet(searchMap);
				
				excelMaker.write(response, fileName);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendHtmlAlert(response, e.getMessage());
			}
		}
		
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelLiquorWrsMasterList_back")
		public void downloadExcelLiquorWrsMasterList_back(HttpServletRequest request, HttpServletResponse response) {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			/*
			String fileName = "주류물류센터출고실적_기준정보.xls";
			
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
				//첫번째 시트 
				String phdNaBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
				String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
				String dateCode = request.getParameter("dateCode");  //일자구분
				String calFrom = request.getParameter("cal_from");  //조회시작일
				String calTo = request.getParameter("cal_to");  //조회종료일
				String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
				String prgrC = request.getParameter("prgr_c");  //가격군코드
				String NA_TR_DSC = request.getParameter("trade_type");  //거래구분
				String mbCoType = requestHelper.getMbcoType();  //본지사구분 
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
				String naWrsC = request.getParameter("na_wrs_c");//상품코드
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR, naTrplC, mbCoType, upTrplC, naWrsC);
						
				
				String[] header = {"물류경제통합 사업장코드",
						"단축사업장명",
						"경제통합거래처코드",
						"거래처명",
						"물류수주수량 (낱개)_합계",
						"물류수주수량 (표시단위)_합계",
						"물류피킹수량 (낱개)_합계",
						"물류피킹수량 (표시단위)_합계",
						"물류출고수량 (낱개_합계",
						"물류출고수량 (표시단위)_합계",
						"고객검수수량 (낱개)_합계",
						"고객검수수량 (표시단위)_합계",
						"고객검수금액_합계",
						"물류검수수량 (낱개)_합계",
						"물류검수수량 (표시단위)_합계",
						"물류검수금액",
						"물류경제통합 사업장코드",
						"단축사업장명",
						"물류출고 구분코드",
						"경제통합 거래처코드",
						"거래처명",
						"경제통합 상품코드",
						"단축상품명",
						"상품규격명",
						"내품수량",
						"물류판매가",
						"물류출고수량 (낱개)",
						"물류출고수량 (표시단위)",
						"고객검수수량 (낱개)",
						"고객검수수량 (표시단위)",
						"고객검수금액",
						"물류검수수량 (낱개)",
						"물류검수수량 (표시단위)",
						"물류검수금액",
						"소분여부"};
				String[] keyIndex = {"PHD_NA_BZPLC",
						"SHRT_BZPLNM",
						"NA_TRPL_C",
						"CLNTNM",
						"PHD_RVO_QT",
						"PHD_RVO_PER_QT",
						"PHD_PCK_QT",
						"PHD_PCK_PER_QT",
						"PHD_OUT_QT",
						"PHD_OUT_PER_QT",
						"CUS_CNR_QT",
						"CUS_CNR_PER_QT",
						"CUS_CNR_AMT",
						"PHD_CNR_QT",
						"PHD_CNR_PER_QT",
						"PHD_CNR_AMT",
						"PHD_NA_BZPLC_D",
						"SHRT_BZPLNM_D",
						"PHD_DLR_DSC_D",
						"NA_TRPL_C_D",
						"CLNTNM_D",
						"NA_WRS_C_D",
						"WRSNM_D",
						"WRS_STDNM_D",
						"INPD_QT_D",
						"PHD_SELPR_D",
						"PHD_OUT_QT_D",
						"PHD_OUT_PER_QT_D",
						"CUS_CNR_QT_D",
						"CUS_CNR_PER_QT_D",
						"CUS_CNR_AMT_D",
						"PHD_CNR_QT_D",
						"PHD_CNR_PER_QT_D",
						"PHD_CNR_AMT_D",
						"SVS_YN_D"};
				/**
				 * 빌링 마크 시작
				 */
				/*
				if(list != null && list.size() > 0) {
					HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
					for(Map<String, Object> vo : list) {
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC"));
						values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO"));
						values.put("PHD_DLR_DSC", vo.get("PHD_DLR_DSC_D"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
					
					String GLN = requestHelper.getGlnCode();	    
					String MD_ID = requestHelper.getUserID(); 
					//markBilling(GLN, MD_ID, billingSet);
				}		
				*/
				
				AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
				
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);		
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("출력화면", "주류물류센터출고실적");
				searchMap.put("검색사업장", phdNaBzplc);
				searchMap.put("일자구분", dateCode);
				searchMap.put("조회시작일", calFrom);
				searchMap.put("조회종료일", calTo);			
				searchMap.put("출고구분코드", phdDlrDsc);
				searchMap.put("가격군코드", prgrC);						
				searchMap.put("거래처코드", srhTrplC);
				excelMaker.createSearchSheet(searchMap);
				
				excelMaker.write(response, fileName);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendHtmlAlert(response, e.getMessage());
			}
		}

		/*
		 * 화면ID : VAN_DS_SC_0710
		 * 화면설명 : 주류 물류센터_출고실적_조회	 - 디테일 엑셀다운로드
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelLiquorWrsDetailList")
		public void downloadExcelLiquorWrsDetailList(HttpServletRequest request, HttpServletResponse response) {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			/*
			String fileName = "주류물류센터출고실적_상세정보.xls";
			
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
				//첫번째 시트 
				String naBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
				String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
				String dateCode = request.getParameter("dateCode");  //일자구분
				String calFrom = request.getParameter("cal_from");  //조회시작일
				String calTo = request.getParameter("cal_to");  //조회종료일
				String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
				String prgrC = request.getParameter("prgr_c");  //가격군코드
				String NA_TR_DSC = request.getParameter("trade_type");  //거래구분
				String mbCoType = requestHelper.getMbcoType();  //본지사구분 
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
				String naWrsC = request.getParameter("na_wrs_c");//상품코드
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드
				String phdNaBzplc = requestHelper.getParameter("phd_na_bzplc");  //물류경제통합사업장코드
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorWrsDetailList(
						naBzplc,phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC, mbCoType, upTrplC, naWrsC);
						
				
				String[] header = {"물류경제통합 사업장코드",
						"단축사업장명",
						"경제통합거래처코드",
						"거래처명",
						"물류수주수량 (낱개)_합계",
						"물류수주수량 (표시단위)_합계",
						"물류피킹수량 (낱개)_합계",
						"물류피킹수량 (표시단위)_합계",
						"물류출고수량 (낱개_합계",
						"물류출고수량 (표시단위)_합계",
						"고객검수수량 (낱개)_합계",
						"고객검수수량 (표시단위)_합계",
						"고객검수금액_합계",
						"물류검수수량 (낱개)_합계",
						"물류검수수량 (표시단위)_합계",
						"물류검수금액",
						"물류경제통합 사업장코드",
						"단축사업장명",
						"물류출고 구분코드",
						"배송지코드",
						"배송지명",
						"경제통합 거래처코드",
						"거래처명",
						"경제통합 상품코드",
						"단축상품명",
						"상품규격명",
						"내품수량",
						"물류판매가",
						"물류출고수량 (낱개)",
						"물류출고수량 (표시단위)",
						"고객검수수량 (낱개)",
						"고객검수수량 (표시단위)",
						"고객검수금액",
						"물류검수수량 (낱개)",
						"물류검수수량 (표시단위)",
						"물류검수금액",
						"소분여부"};
				String[] keyIndex = {"PHD_NA_BZPLC",
						"SHRT_BZPLNM",
						"NA_TRPL_C",
						"CLNTNM",
						"PHD_RVO_QT",
						"PHD_RVO_PER_QT",
						"PHD_PCK_QT",
						"PHD_PCK_PER_QT",
						"PHD_OUT_QT",
						"PHD_OUT_PER_QT",
						"CUS_CNR_QT",
						"CUS_CNR_PER_QT",
						"CUS_CNR_AMT",
						"PHD_CNR_QT",
						"PHD_CNR_PER_QT",
						"PHD_CNR_AMT",
						"PHD_NA_BZPLC_D",
						"SHRT_BZPLNM_D",
						"PHD_DLR_DSC_D",						
						"DVY_NA_TRPL_C_D",
						"DVY_NA_TRPL_C_NM_D",						
						"NA_TRPL_C_D",
						"CLNTNM_D",
						"NA_WRS_C_D",
						"WRSNM_D",
						"WRS_STDNM_D",
						"INPD_QT_D",
						"PHD_SELPR_D",
						"PHD_OUT_QT_D",
						"PHD_OUT_PER_QT_D",
						"CUS_CNR_QT_D",
						"CUS_CNR_PER_QT_D",
						"CUS_CNR_AMT_D",
						"PHD_CNR_QT_D",
						"PHD_CNR_PER_QT_D",
						"PHD_CNR_AMT_D",
						"SVS_YN_D"};
				/**
				 * 빌링 마크 시작
				 */
				/*
				 BillingMarkUpTableName tableName = BillingMarkUpTableName.TB_LG_OUT_M;
				 String GLN = requestHelper.getGlnCode();	    
				 String MD_ID = requestHelper.getUserID(); 
				 Map<String, String> pkMap = new HashMap<String, String>();
			    pkMap.put("PHD_SLP_DSC", "1"); //1 :주류
			    pkMap.put("PHD_NA_BZPLC", phdNaBzplc);
			    
			    //전체일경우
			    if(!phdDlrDsc.equals("all")){
			    	pkMap.put("PHD_DLR_DSC", phdDlrDsc);
			    }
			    if(!prgrC.equals("all")){
			    	pkMap.put("PRGR_C", prgrC);
			    }	    
			    
			    pkMap.put("NA_TRPL_C", naTrplC);
			    
				Map<String, String> dtMap = new HashMap<String, String>();
			    			
			    if(dateCode.equals("1")){	    	
					dtMap.put("DT_NAME", "PHD_RVO_DT");
					dtMap.put("START_DT",calFrom);
					dtMap.put("END_DT", calTo);
			    }else{	    	
					dtMap.put("DT_NAME", "PHD_DVY_RQR_DT");
					dtMap.put("START_DT", calFrom);
					dtMap.put("END_DT", calTo);
			    }
				billingMarkUpService.markUp(tableName, GLN, MD_ID, dtMap, pkMap);	
				*/
				
				AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
				
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);		
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("출력화면", "주류물류센터출고실적");
				searchMap.put("검색사업장", naBzplc);
				searchMap.put("일자구분", dateCode);
				searchMap.put("조회시작일", calFrom);
				searchMap.put("조회종료일", calTo);			
				searchMap.put("출고구분코드", phdDlrDsc);
				searchMap.put("가격군코드", prgrC);			
				searchMap.put("상세사업장코드", phdNaBzplc);			
				searchMap.put("거래처코드", srhTrplC);
				excelMaker.createSearchSheet(searchMap);
				
				excelMaker.write(response, fileName);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendHtmlAlert(response, e.getMessage());
			}
		}
		
		/*
		 * 화면ID : VAN_DS_SC_0700
		 * 화면설명 : 물류센터_출고실적 - 전표 상품 상세 엑셀 다운로드
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelDetail")
		public void downloadExcelDetail(HttpServletRequest request, HttpServletResponse response) {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String fileName = request.getParameter("fileName");
			
			try {
				//첫번째 시트 
				String phdNaBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
				String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
				String dateCode = request.getParameter("dateCode");  //일자구분
				String calFrom = request.getParameter("cal_from");  //조회시작일
				String calTo = request.getParameter("cal_to");  //조회종료일
				String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
				String prgrC = request.getParameter("prgr_c");  //가격군코드
				String mbCoType = requestHelper.getMbcoType();  //본지사구분 
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelDetail(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,TRPL_C_ARR,naTrplC, mbCoType, upTrplC);
						
				
				String[] header = {
						"물류경제통합사업장코드",
						"단축사업장명",
						"물류수주일자",
						"물류출고완료일자",
						"기표일자",
						"물류출고구분코드",
						"경제통합거래처코드",
						"거래처명",
						"경제통합상품코드",
						"단축상품명",
						"상품규격명",
						"상품표시물류단위코드",
						"내품수량",
						"소분입수수량",
						"물류판매가",
						"물류출고수량(낱개) (회송제외)",
						"물류출고수량(표시단위) (회송제외)",
						"고객검수일자",
						"고객검수수량(낱개)",
						"고객검수수량(표시단위)",
						"고객검수금액",
						"물류검수수량(낱개)",
						"물류검수수량(표시단위)",
						"물류검수금액",
						"과세구분코드",
						"예약행사년도",
						"예약행사번호",
						"소분여부 0:부 1:여",
						"사전발주상품여부",
						"경제통합공급처코드",
						"공급처명",
						"배송지코드",
						"배송지명",};
				String[] keyIndex = {};

				AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
				
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);		
				
				excelMaker.write(response, fileName);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendHtmlAlert(response, e.getMessage());
			}
		}
		
		/*
		 * 화면ID : VAN_DS_SC_0700
		 * 화면설명 : 주류 물류센터_출고실적 - 전표 상품 상세 엑셀 다운로드
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/na/downloadExcelLiquorDetail")
		public void downloadExcelLiquorDetail(HttpServletRequest request, HttpServletResponse response) {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String fileName = request.getParameter("fileName");
			
			try {
				//첫번째 시트 
				String phdNaBzplc = request.getParameter("na_bzplc");  //물류경제통합사업장코드
				String econStdvDsc = request.getParameter("econ_stdv_dsc");  //입출고구분코드	
				String dateCode = request.getParameter("dateCode");  //일자구분
				String calFrom = request.getParameter("cal_from");  //조회시작일
				String calTo = request.getParameter("cal_to");  //조회종료일
				String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분코드
				String prgrC = request.getParameter("prgr_c");  //가격군코드
				String mbCoType = requestHelper.getMbcoType();  //본지사구분 
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				String upTrplC =	requestHelper.getParameter("UP_TRPL_C");//거래처코드
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorDetail(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,TRPL_C_ARR,naTrplC, mbCoType, upTrplC);
						
				
				String[] header = {
						"물류경제통합사업장코드",
						"단축사업장명",
						"물류수주일자",
						"물류출고완료일자",
						"기표일자",
						"물류출고구분코드",
						"경제통합거래처코드",
						"거래처명",
						"경제통합상품코드",
						"단축상품명",
						"상품규격명",
						"상품표시물류단위코드",
						"내품수량",
						"소분입수수량",
						"물류판매가",
						"물류출고수량(낱개) (회송제외)",
						"물류출고수량(표시단위) (회송제외)",
						"고객검수일자",
						"고객검수수량(낱개)",
						"고객검수수량(표시단위)",
						"고객검수금액",
						"물류검수수량(낱개)",
						"물류검수수량(표시단위)",
						"물류검수금액",
						"과세구분코드",
						"예약행사년도",
						"예약행사번호",
						"소분여부 0:부 1:여",
						"사전발주상품여부",
						"경제통합공급처코드",
						"공급처명",
						"배송지코드",
						"배송지명",};
				String[] keyIndex = {};

				AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
				
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);		
				
				excelMaker.write(response, fileName);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendHtmlAlert(response, e.getMessage());
			}
		}
 
}