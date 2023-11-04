package com.nh.escm.pds.outer.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.CollectionUtils;
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
import com.nh.escm.pds.outer.service.CenterService;
import com.nh.escm.pds.outer.vo.CenterLiquorVO;
import com.nh.escm.pds.outer.vo.CenterVO;
import com.nh.escm.util.PageHelper;

/**
 * 출고정보
 * @author HyeRim.Oh
 *
 */

@RestController
public class CenterRestController extends AbstractController {
	
	@Autowired
	private CenterService centerService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	/*
	 * 화면ID : VAN_DS_SC_0700
	 * 화면설명 : 물류센터_출고실적_조회	
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/center/retrieveWrsMasterList")
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
		
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
				
		try {
			PlatformData platformData = new PlatformData();
			
			// Paging
			int totalRowCount = centerService.getOutWrsCount(phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			
			
			List<CenterVO> list = centerService.retrieveWrsMasterList(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC,start,limit);
			
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT");	
				dsHelper.addColumns(CenterVO.class);				
				
				for(CenterVO vo : list) {
					dsHelper.setData(vo);		
		        }
				platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = centerService.getWrsMasterTotal(phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR);
			
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelWrsMasterOnly")
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<CenterVO> list = centerService.retrieveWrsMasterList(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC,-1,-1);
					
			
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelWrsMasterList")
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
			String naWrsC = request.getParameter("na_wrs_c");//상품코드
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
			
			List<Map<String, Object>> list = centerService.downloadExcelWrsMasterList(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
					
			
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
					"ADD_2",
					"ADD_3",
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
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC, "0");
			
			HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
			if (CollectionUtils.isEmpty(billingList) == false) {
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC").toString());
					values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO").toString());
					values.put("DLR_PHD_SQNO", vo.get("DLR_PHD_SQNO").toString());
					values.put("WRS_GRD_DSC", vo.get("WRS_GRD_DSC").toString());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
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
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelWrsMasterList_back")
	public void downloadExcelWrsMasterList_back(HttpServletRequest request, HttpServletResponse response) {
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
			String naWrsC = request.getParameter("na_wrs_c");//상품코드
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
			
			List<Map<String, Object>> list = centerService.downloadExcelWrsMasterList(
					phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
					
			
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
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				//markBilling(GLN, MD_ID, billingSet);
			}
			*/
			
			/**
			 * 빌링 마크 종료
			 */
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelWrsDetailList")
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
			String naWrsC = request.getParameter("na_wrs_c");//상품코드
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
			String phdNaBzplc = requestHelper.getParameter("phd_na_bzplc");  //물류경제통합사업장코드
			
			// 쿼리 분기(180309)
			String flag = request.getParameter("flag");  // 쿼리 분기(기존 다운로드, 신규 다운로드)
			
			List<Map<String, Object>> list = centerService.downloadExcelWrsDetailList(
					naBzplc,phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,flag,naWrsC);
			
			String[] header = null;
			String[] keyIndex = null;
			if (flag != null && "2".equals(flag)) {
				header = new String[]{"물류경제통합 사업장코드",
						"단축사업장명",
						"경제통합거래처코드",
						"거래처명",
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
				keyIndex = new String[]{"PHD_NA_BZPLC_D",
						"SHRT_BZPLNM_D",
						"NA_TRPL_C",
						"CLNTNM",
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
			} else {
				header = new String[]{"물류경제통합 사업장코드",
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
				 keyIndex = new String[]{"PHD_NA_BZPLC",
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
			}
			
			/*
			BillingMarkUpTableName tableName = BillingMarkUpTableName.TB_LG_OUT_M;
			
		    String GLN = requestHelper.getGlnCode();	    
		    String MD_ID = requestHelper.getUserID();    
		    
		    Map<String, String> pkMap = new HashMap<String, String>();
		    pkMap.put("PHD_SLP_DSC", "0"); //0 :일반
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
		    
			System.out.println("dateCode=========>"+dateCode);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/center/retrieveWrsDetailList")
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
		String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
		try {
			PlatformData platformData = new PlatformData();			
			
			/*
			// Paging
			int totalRowCount = centerService.getOutWrsDetailCount(phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			*/
			
			DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT_DETAIL");
			dsHelper.addColumns(CenterVO.class);
						
			List<CenterVO> centerDetailList = centerService.retrieveWrsDetailList(
					phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo,NA_TR_DSC,TRPL_C_ARR,naWrsC,-1,-1);
			
			
			
			
	        for(CenterVO vo : centerDetailList) {	          
				dsHelper.setData(vo);
			}
	        platformData.addDataSet(dsHelper.getDataSet());
	        
	        List<Map<String, Object>> billingList = centerService.getBillingMarkUpTargets(
					phdNaBzplc,null, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC,"0");
			
			
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
		@RequestMapping(method=RequestMethod.POST, value = "/rest/center/retrieveLiquorWrsMasterList")
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
			String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			try {
				PlatformData platformData = new PlatformData();
				
				// Paging
				int totalRowCount = centerService.getOutLiquorWrsMasterCount(phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC);			
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int limit = pageHelper.getEnd();			
				
				List<CenterLiquorVO> centerLiquorMasterList = centerService.retrieveLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC,start,limit);
				
				if(centerLiquorMasterList != null && centerLiquorMasterList.size() > 0) {
					DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT");	
					dsHelper.addColumns(CenterVO.class);
					
					for(CenterLiquorVO vo : centerLiquorMasterList) {
						dsHelper.setData(vo);
			        }			
					platformData.addDataSet(dsHelper.getDataSet());
				}	
				
				Map<String, Object> map = centerService.getLiquorWrsMasterTotal(phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR);
				
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
		@RequestMapping(method=RequestMethod.POST, value = "/rest/center/retrieveLiquorWrsDetailList")
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
			String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드	
			
			String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			 List<Map<String, Object>> billingList = centerService.getBillingMarkUpTargets(
						phdNaBzplc,null, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC,"1");
				
				
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				
				if (CollectionUtils.isEmpty(billingList) == false) {
					for(Map<String, Object> vo : billingList) {
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC").toString());
						values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO").toString());
						values.put("DLR_PHD_SQNO", vo.get("DLR_PHD_SQNO").toString());
						values.put("WRS_GRD_DSC", vo.get("WRS_GRD_DSC").toString());
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				
				markBilling(GLN, MD_ID, billingSet);
							
			try {
				PlatformData platformData = new PlatformData();				
				
				/*
				// Paging
				int totalRowCount = centerService.getOutLiquorWrsDetailCount(phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo);			
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
				int start = pageHelper.getStart();
				int limit = pageHelper.getEnd();
				*/
				
				DataSetHelper dsHelper = new DataSetHelper("ds_TB_LG_OUT_DETAIL");
				dsHelper.addColumns(CenterVO.class);
							
				List<CenterLiquorVO> centerLiquorDetailList = centerService.retrieveLiquorWrsDetailList(
						phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo,NA_TR_DSC,TRPL_C_ARR,naWrsC,-1,-1);
				
		        for(CenterLiquorVO vo : centerLiquorDetailList) {	          
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
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelLiquorWrsMasterOnly")
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
				String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
				
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<CenterLiquorVO> centerLiquorMasterList = centerService.retrieveLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC,-1,-1);
				
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
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelLiquorWrsMasterList")
		public void downloadExcelLiquorWrsMasterList(HttpServletRequest request, HttpServletResponse response) {
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
				String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
				
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
						
				
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
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC,"1");
				
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				if (CollectionUtils.isEmpty(billingList) == false) {
					for(Map<String, Object> vo : billingList) {
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("PHD_NA_BZPLC", vo.get("PHD_NA_BZPLC").toString());
						values.put("DLR_PHD_IDVD_NO", vo.get("DLR_PHD_IDVD_NO").toString());
						values.put("DLR_PHD_SQNO", vo.get("DLR_PHD_SQNO").toString());
						values.put("WRS_GRD_DSC", vo.get("WRS_GRD_DSC").toString());
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
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
		
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelLiquorWrsMasterList_back")
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
				String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
				
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorWrsMasterList(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
						
				
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
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelLiquorWrsDetailList")
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
				String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
				
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드
				String phdNaBzplc = requestHelper.getParameter("phd_na_bzplc");  //물류경제통합사업장코드
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorWrsDetailList(
						naBzplc,phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
						
				
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
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelDetail")
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
				
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelDetail(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,TRPL_C_ARR,naTrplC);
						
				
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
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelLiquorDetail")
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
				
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
				
				//두번째 시트			
				String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
				
				List<Map<String, Object>> list = centerService.downloadExcelLiquorDetail(
						phdNaBzplc,econStdvDsc, dateCode, calFrom, calTo,phdDlrDsc,prgrC,TRPL_C_ARR,naTrplC);
						
				
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
	 * 화면ID : VAN_DS_SC_0770
	 * 화면설명 : 제주물류센터_출고실적_조회	
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/center/retrieveJejuWrsMasterList")
	public void retrieveJejuWrsMasterList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String phdNaBzplc =	requestHelper.getParameter("TRPL_C");//거래처코드
		String dateCode = requestHelper.getParameter("dateCode");  //일자구분
		String calFrom = requestHelper.getParameter("cal_from");  //조회시작일
		String NA_TR_DSC = requestHelper.getParameter("trade_type");  //출고반품구분
		String phdDlrDsc = requestHelper.getParameter("phd_dlr_dsc");  //출고구분
		
		try {
			PlatformData platformData = new PlatformData();
			
			int totalRowCount = centerService.getOutJejuWrsCount(phdNaBzplc, dateCode, calFrom, phdDlrDsc, NA_TR_DSC);
			
			if (totalRowCount > 0) {
				List<Map<String, Object>> list = centerService.retrieveJejuWrsMasterList(phdNaBzplc, dateCode, calFrom, phdDlrDsc, NA_TR_DSC, -1, -1);
				
				if (CollectionUtils.isEmpty(list) == false) {
					DataSetHelper dsHelper = new DataSetHelper("ds_gridMaster");
					dsHelper.addColumns(list.get(0).keySet());
					
					for(Map<String, Object> map : list) {
						dsHelper.setData(map);
			        }
					
					platformData.addDataSet(dsHelper.getDataSet());
				}
				
				Map<String, Object> map = centerService.getJejuWrsMasterTotal(phdNaBzplc, dateCode, calFrom, phdDlrDsc, NA_TR_DSC);
				
				if(map != null) {
					 DataSetHelper dsHelper = new DataSetHelper("ds_sum");
					 dsHelper.addColumns(map.keySet());
					 
					 dsHelper.setData(map);
					 
					 platformData.addDataSet(dsHelper.getDataSet());
				}
			}
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0770
	 * 화면설명 : 제주물류센터_출고실적_조회	 - 엑셀 마스터 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelJejuWrsMaster")
	public void downloadExcelJejuWrsMaster(HttpServletRequest request, HttpServletResponse response) {
//		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트 
			String phdNaBzplc =	request.getParameter("TRPL_C");//거래처코드
			String dateCode = request.getParameter("dateCode");  //일자구분
			String calFrom = request.getParameter("cal_from");  //조회시작일
			String NA_TR_DSC = request.getParameter("trade_type");  //출고반품구분
			String phdDlrDsc = request.getParameter("phd_dlr_dsc");  //출고구분
			
			List<Map<String, Object>> list = centerService.retrieveJejuWrsMasterList(phdNaBzplc, dateCode, calFrom, phdDlrDsc, NA_TR_DSC, -1, -1);		
			
			String[] header = {
					"순번",
					"사업장코드",
					"사업장명",
					"수주일자",
					"출고일자",
					"기표일자",
					"출고구분",
					"고객코드",
					"고객명",
					"상품코드",
					"상품명",
					"규격",
					"표시단위",
					"입수",
					"소분입수",
					"물류판매가",
					"출고/반품 완료수량(낱개)",
					"출고/반품 완료수량(BOX)",
					"고객검수일자",
					"고객검수수량(낱개)",
					"고객검수수량(BOX)",
					"고객검수금액",
					"물류검수수량(낱개)",
					"물류검수수량(BOX)",
					"물류검수금액",
					"예약행사년도",
					"예약행사번호",
					"소분여부",
					"자동발주여부",
					"공급처코드",
					"공급처명",
					"배송지코드",
					"배송지명"
					};
			String[] keyIndex = {
					"RN",
					"PHD_NA_BZPLC",
					"PHD_NA_BZPLC_NM",
					"PHD_RVO_DT",
					"PHD_DLR_CPL_DT",
					"FILP_DT",
					"PHD_DLR_DSC",
					"NA_TRPL_C",
					"NA_TRPL_C_NM",
					"NA_WRS_C",
					"WRS_ABR_NM",
					"WRS_STDNM",
					"WRS_MRK_PHD_UNT_C",
					"SVS_QT",
					"SDIV_SVS_QT",
					"PHD_SELPR",
					"WRS_GRD_DSC",
					"WRS_GRD_BOX_DSC",
					"CUS_CNR_DT",
					"CUS_CNR_QT",
					"CUS_CNR_BOX_QT",
					"CUS_CNR_AMT",
					"PHD_CNR_QT",
					"PHD_CNR_BOX_QT",
					"PHD_CNR_AMT",
					"BKG_EVT_YY",
					"BKG_EVT_NO",
					"SVS_YN",
					"AUT_ODR_YN",
					"ACTL_SPYPL_NA_TRPL_C",
					"ACTL_SPYPL_NA_TRPL_C_NM",
					"DVY_NA_TRPL_C",
					"DVY_NA_TRPL_C_NM"
					};
			
			AbstractModel model = new DefaultModel("제주물류센터출고실적", header, keyIndex, list);
			
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);		
			
//			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
//			searchMap.put("출력화면", "제주물류센터출고실적");
//			searchMap.put("검색사업장", phdNaBzplc);
//			searchMap.put("일자구분", dateCode);
//			searchMap.put("조회일", calFrom);
//			searchMap.put("출고구분코드", phdDlrDsc);
//			excelMaker.createSearchSheet(searchMap);
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
}
