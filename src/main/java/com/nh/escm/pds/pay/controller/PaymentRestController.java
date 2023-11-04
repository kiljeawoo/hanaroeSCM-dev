package com.nh.escm.pds.pay.controller;

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
import com.nh.escm.pds.pay.service.PaymentService;
import com.nh.escm.pds.pay.vo.PaymentAffSsdyDetailVO;
import com.nh.escm.pds.pay.vo.PaymentAffSsdyMasterVO;
import com.nh.escm.pds.pay.vo.PaymentEtcCaAsetDetailVO;
import com.nh.escm.pds.pay.vo.PaymentEtcCaAsetMasterVO;
import com.nh.escm.util.PageHelper;

/**
 * 정산정보 - 사후장려금, 기타당좌산 회수내역
 * @author HyeRim.Oh
 *
 */
@RestController
public class PaymentRestController extends AbstractController {
	
	@Autowired
	private PaymentService paymentService;
	
	/*
	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 사후장려금 실적조회 R1 마스터 그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/payment/retrieveAffSsdyMasterList")
	public void retrieveAffSsdyMasterList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //일자구분(일/월)
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분		
		String canType = requestHelper.getParameter("can_type");  //정정취소구분
		String naBzplc = requestHelper.getParameter("na_bzplc");  //농협사업장
				
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			/*
			// Paging
			int totalRowCount = paymentService.getAffSsdyCount(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			*/
			
			List<PaymentAffSsdyMasterVO> list = paymentService.retrieveAffSsdyMasterList(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,-1,-1);
			
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_paymentAffSsdyM");
				dsHelper.addColumns(PaymentAffSsdyMasterVO.class);
				
				for(PaymentAffSsdyMasterVO vo : list) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = paymentService.getAffSsdyMasterTotal(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);

			if(map != null) {
				DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				dsHelper.addColumns(map.keySet());
				dsHelper.setData(map);
				platformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 사후장려금 조회 합계
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/payment/retrieveAffSsdySum")
	public void retrieveAffSsdySum(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //일자구분(일/월)
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분		
		String canType = requestHelper.getParameter("can_type");  //정정취소구분
		String naBzplc = requestHelper.getParameter("na_bzplc");  //농협사업장
				
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			
			List<PaymentAffSsdyMasterVO> list = paymentService.retrieveAffSsdySum(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);
			
			if(list != null && list.size() > 0) {			
				DataSetHelper dsHelper = new DataSetHelper("ds_paymentAffSsdySum");
				dsHelper.addColumns(PaymentAffSsdyMasterVO.class);				
				
				for(PaymentAffSsdyMasterVO vo : list) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			
/*			Map<String, Object> map = paymentService.getAffSsdySumTotal(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR);

			if(map != null) {
				DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				dsHelper.addColumns(map.keySet());
				dsHelper.setData(map);
				platformData.addDataSet(dsHelper.getDataSet());
			}*/
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 사후장려금 실적조회 R1 디테일 그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/payment/retrieveAffSsdyDetailList")
	public void retrieveAffSsdyDetailList(HttpServletRequest request, HttpServletResponse response) {
	
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String phdNaBzplc = requestHelper.getParameter("phd_na_bzplc");  //물류경제통합사업장코드
		String naTrDsc = requestHelper.getParameter("na_tr_dsc");   //경제통합거래구분코드		
		String naBlbDfcDsc = requestHelper.getParameter("na_blb_dfc_dsc");  //경제통합흑자적자구분코드		
		String trDt = requestHelper.getParameter("tr_dt");  //거래일자
		String pyPlaDt = requestHelper.getParameter("py_pla_dt");  //지급예정일자
		String naCrcCanDsc = requestHelper.getParameter("na_crc_can_dsc");  //경제통합정정취소구분코드
		
		String naTeamC = requestHelper.getParameter("NA_TEAM_C");  //경제통합팀코드
		String slplNaTrplC = requestHelper.getParameter("SLPL_NA_TRPL_C");   //매출처경제통합거래처코드		
		String slplNaTeamC = requestHelper.getParameter("SLPL_NA_TEAM_C");  //매출처경제통합팀코드		
		String buyplNaTrplC = requestHelper.getParameter("BUYPL_NA_TRPL_C");  //매입처경제통합거래처코드
		String buyplNaTeamC = requestHelper.getParameter("BUYPL_NA_TEAM_C");  ///매입처경제통합팀코드		
		String naAdjplC = requestHelper.getParameter("NA_ADJPL_C");  //경제통합정산처코드
		String adjplNaTeamC = requestHelper.getParameter("ADJPL_NA_TEAM_C");  //정산처경제통합팀코드
									
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_paymentAffSsdyD");
			dsHelper.addColumns(PaymentAffSsdyDetailVO.class);
			List<PaymentAffSsdyDetailVO> list = paymentService.retrieveAffSsdyDetailList(phdNaBzplc,naTrDsc,naBlbDfcDsc,
																														trDt,pyPlaDt,naCrcCanDsc,
																														naTeamC,slplNaTrplC,slplNaTeamC,
																														buyplNaTrplC,buyplNaTeamC,naAdjplC,
																														adjplNaTeamC);
			
			for(PaymentAffSsdyDetailVO vo : list) {
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
 	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 사후장려금 실적조회 R1 마스터 그리드	 - 엑셀상세 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelAffSsdyMM")
	public void downloadExcelAffSsdyMM(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			String fileName = request.getParameter("fileName");
			
			//첫번째 시트 
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String canType = request.getParameter("can_type");  //정정취소구분
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
					
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
									"물류경제통합사업장코드",
									"경제통합거래구분코드",
									"경제통합흑자적자구분코드",
									"거래일자",
									"경제통합팀코드",
									"매출처경제통합거래처코드",
									"매출처경제통합팀코드",
									"매입처경제통합거래처코드",
									"매입처경제통합팀코드",
									"경제통합정산처코드",
									"정산처경제통합팀코드",
									"지급예정일자",
									"경제통합정정취소구분코드",
									"공급수량",
									"공급금액",
									"부가세",
									"사후장려금",
									"물류사후수수료율",
									"물류판매금액",
									"물류경제통합사업장코드",
									"거래구분약어명",
									"매출처경제통합거래처코드",
									"매입처경제통합거래처코드",
									"경제통합정산처코드",
									"매입처경제통합팀코드",
									"경제통합정정취소구분코드",
									"검수구분금액",
									"사후장려금(계산)"
									};
			
			String[] keyIndex = {
										"PHD_NA_BZPLC",
										"NA_TR_DSC",
										"NA_BLB_DFC_DSC",
										"TR_DT",
										"NA_TEAM_C",
										"SLPL_NA_TRPL_C",
										"SLPL_NA_TEAM_C",
										"BUYPL_NA_TRPL_C",
										"BUYPL_NA_TEAM_C",
										"NA_ADJPL_C",
										"ADJPL_NA_TEAM_C",
										"PY_PLA_DT",
										"NA_CRC_CAN_DSC",
										"SPY_QT",
										"SPY_AM",
										"VAT",
										"AFF_SSDY",
										"PHD_AFF_FEERT",
										"PHD_SEL_AM",
										"PHD_NA_BZPLC_NM",
										"NA_TR_DSC_NM",
										"SLPL_NA_TRPL_C_NM",
										"BUYPL_NA_TRPL_C_NM",
										"NA_ADJPL_C_NM",
										"BUYPL_NA_TEAM_C_NM",
										"NA_CRC_CAN_DSC_NM",
										"CNR_DS_AM",
										"AFF_SSDY_SUM"
										};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);

			paymentService.downloadExcelAffSsdyMM(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "사후장려금실적");			
			searchMap.put("조회기간", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);			
			searchMap.put("거래구분", tradeType);
			searchMap.put("정정취소구분", canType);
			searchMap.put("검색사업장", naBzplc);			
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
 	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 사후장려금 실적조회 R1 마스터 그리드	 - 엑셀상세 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelAffSsdyMaster")
	public void downloadExcelAffSsdyMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "사후장려금실적_기준정보.xls";
		
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
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String canType = request.getParameter("can_type");  //정정취소구분
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
					
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
					
			
//			String[] header = {					
//					"물류경제통합 사업장코드",
//					"경제통합 거래구분코드",
//					"경제통합 흑자적자구분코드",
//					"거래일자",
//					"경제통합 팀코드",
//					"매출처 경제통합거래처코드",
//					"매출처 경제통합팀코드",
//					"매입처 경제통합거래처코드",
//					"매입처 경제통합팀코드",
//					"경제통합 정산처코드",
//					"정산처 경제통합팀코드",
//					"지급예정일자",
//					"경제통합 정정취소구분코드",
//					"공급수량",
//					"공급금액",
//					"부가세",
//					"사후장려금 (A)",
//					"물류(평균) 사후수수료율",
//					"물류 판매금액",
//					"검수구분금액 (B)",
//					"사후장려금(계산) (C=A*B)",
//					"물류경제통합 사업장코드",
//					"물류전표일자",
//					"경제통합 거래구분코드",
//					"경제통합 전표번호",
//					"경제통합 흑자적자구분코드",
//					"전표 일련번호",
//					"거래일자",
//					"경제통합 팀코드",
//					"경제통합 상품코드",
//					"상품과목코드",
//					"경제통합 대원장코드",
//					"경제통합 중원장코드",
//					"매출처 경제통합거래처코드",
//					"매출처 경제통합팀코드",
//					"매입처 경제통합거래처코드",
//					"매입처 경제통합팀코드",
//					"경제통합 정산처코드",
//					"정산처 경제통합팀코드",
//					"중앙회조합 구분코드",
//					"지급예정일자",
//					"경제통합 상품대분류코드",
//					"경제통합 상품중분류코드",
//					"경제통합 상품소분류코드",
//					"경제통합 상품세분류코드",
//					"경제통합 정정취소구분코드",
//					"원전표일자",
//					"원경제통합 전표번호",
//					"공급수량",
//					"공급금액",
//					"부가세",
//					"사후장려금",
//					"물류 사후수수료율",
//					"비고내용",
//					"물류판매금액",
//					"전송여부",
//					"최종변경일시",
//					"최종변경자 개인번호",
//					"검수구분금액",
//					"배송예정서번호"
//			};
//			String[] keyIndex = {
//					"PHD_NA_BZPLC",
//					"NA_TR_DSC",
//					"NA_BLB_DFC_DSC",
//					"TR_DT",
//					"NA_TEAM_C",
//					"SLPL_NA_TRPL_C",
//					"SLPL_NA_TEAM_C",
//					"BUYPL_NA_TRPL_C",
//					"BUYPL_NA_TEAM_C",
//					"NA_ADJPL_C",
//					"ADJPL_NA_TEAM_C",
//					"PY_PLA_DT",
//					"NA_CRC_CAN_DSC",
//					"SPY_QT",
//					"SPY_AM",
//					"VAT",
//					"AFF_SSDY",
//					"PHD_AFF_FEERT",
//					"PHD_SEL_AM",
//					"CNR_DS_AM",
//					"AFF_SSDY_SUM",
//					"PHD_NA_BZPLC_D",
//					"PHD_SLP_DT",
//					"NA_TR_DSC_D",
//					"NA_SLPNO",
//					"NA_BLB_DFC_DSC_D",
//					"SLP_SQNO",
//					"TR_DT_D",
//					"NA_TEAM_C_D",
//					"NA_WRS_C",
//					"WRS_SBJC",
//					"NA_LLED_C",
//					"NA_MLED_C",
//					"SLPL_NA_TRPL_C_D",
//					"SLPL_NA_TEAM_C_D",
//					"BUYPL_NA_TRPL_C_D",
//					"BUYPL_NA_TEAM_C_D",
//					"NA_ADJPL_C_D",
//					"ADJPL_NA_TEAM_C_D",
//					"NAAC_DSC",
//					"PY_PLA_DT_D",
//					"NA_WRS_LCLC",
//					"NA_WRS_MCLC",
//					"NA_WRS_SCLC",
//					"NA_WRS_DTCF_C",
//					"NA_CRC_CAN_DSC_D",
//					"OSLIP_DT",
//					"OGN_NA_SLPNO",
//					"SPY_QT_D",
//					"SPY_AM_D",
//					"VAT_D",
//					"AFF_SSDY_D",
//					"PHD_AFF_FEERT_D",
//					"RMK_CNTN",
//					"PHD_SEL_AM_D",
//					"TMS_YN",
//					"LSCHG_DTM",
//					"LS_CMENO",
//					"CNR_DS_AM_D",
//					"NA_DVY_PLASH_SLPNO"
//			};
			
			String[] header = {					
			"물류경제통합 사업장코드",
			"물류전표일자",
			"경제통합 거래구분코드",
			"경제통합 전표번호",
			"경제통합 흑자적자구분코드",
			"전표 일련번호",
			"거래일자",
			"경제통합 팀코드",
			"경제통합 상품코드",
			"상품과목코드",
			"경제통합 대원장코드",
			"경제통합 중원장코드",
			"매출처 경제통합거래처코드",
			"매출처 경제통합팀코드",
			"매입처 경제통합거래처코드",
			"매입처 경제통합팀코드",
			"경제통합 정산처코드",
			"정산처 경제통합팀코드",
			"중앙회조합 구분코드",
			"지급예정일자",
			"경제통합 상품대분류코드",
			"경제통합 상품중분류코드",
			"경제통합 상품소분류코드",
			"경제통합 상품세분류코드",
			"경제통합 정정취소구분코드",
			"원전표일자",
			"원경제통합 전표번호",
			"공급수량",
			"공급금액",
			"부가세",
			"사후장려금",
			"물류사후수수료율",
			"비고내용",
			"물류 판매금액",
			"전송여부",
			"최종변경일시",
			"최종변경자 개인번호",
			"물류경제통합 사업장코드",
			"거래구분약어명",
			"상품명",
			"매출처 경제통합거래처코드",
			"매입처 경제통합거래처코드",
			"매입처 경제통합팀코드",
			"경제통합 정산처코드",
			"검수구분금액",
			"경제통합배송예정서전표번호",
			"사후장려금(계산)"
	};
	/*String[] keyIndex = {
			"PHD_NA_BZPLC",
			"PHD_SLP_DT",
			"NA_TR_DSC",
			"NA_SLPNO",
			"NA_BLB_DFC_DSC",
			"SLP_SQNO",
			"TR_DT",
			"NA_TEAM_C",
			"NA_WRS_C",
			"WRS_SBJC",
			"NA_LLED_C",
			"NA_MLED_C",
			"SLPL_NA_TRPL_C",
			"SLPL_NA_TEAM_C",
			"BUYPL_NA_TRPL_C",
			"BUYPL_NA_TEAM_C",
			"NA_ADJPL_C",
			"ADJPL_NA_TEAM_C",
			"NAAC_DSC",
			"PY_PLA_DT",
			"NA_WRS_LCLC",
			"NA_WRS_MCLC",
			"NA_WRS_SCLC",
			"NA_WRS_DTCF_C",
			"NA_CRC_CAN_DSC",
			"OSLIP_DT",
			"OGN_NA_SLPNO",
			"SPY_QT_D",
			"SPY_AM_D",
			"VAT_D",
			"AFF_SSDY_D",
			"PHD_AFF_FEERT_D",
			"RMK_CNTN",
			"PHD_SEL_AM_D",
			"TMS_YN",
			"LSCHG_DTM",
			"LS_CMENO",
			"PHD_NA_BZPLC_NM",
			"NA_TR_DSC_NM",
			"NA_WRS_C_NM",
			"SLPL_NA_TRPL_C_NM",
			"BUYPL_NA_TRPL_C_NM",
			"BUYPL_NA_TEAM_C_NM",
			"NA_ADJPL_C_D",
			"CNR_DS_AM_D",
			"NA_DVY_PLASH_SLPNO",
			"AFF_SSDY_SUM_D"
	};*/
			String[] keyIndex = {
					"PHD_NA_BZPLC_D",
					"PHD_SLP_DT_D",
					"NA_TR_DSC_D",
					"NA_SLPNO_D",
					"NA_BLB_DFC_DSC_D",
					"SLP_SQNO_D",
					"TR_DT_D",
					"NA_TEAM_C_D",
					"NA_WRS_C_D",
					"WRS_SBJC_D",
					"NA_LLED_C_D",
					"NA_MLED_C_D",
					"SLPL_NA_TRPL_C_D",
					"SLPL_NA_TEAM_C_D",
					"BUYPL_NA_TRPL_C_D",
					"BUYPL_NA_TEAM_C_D",
					"NA_ADJPL_C_D",
					"ADJPL_NA_TEAM_C_D",
					"NAAC_DSC_D",
					"PY_PLA_DT_D",
					"NA_WRS_LCLC_D",
					"NA_WRS_MCLC_D",
					"NA_WRS_SCLC_D",
					"NA_WRS_DTCF_C_D",
					"NA_CRC_CAN_DSC_D",
					"OSLIP_DT_D",
					"OGN_NA_SLPNO_D",
					"SPY_QT_D",
					"SPY_AM_D",
					"VAT_D",
					"AFF_SSDY_D",
					"PHD_AFF_FEERT_D",
					"RMK_CNTN_D",
					"PHD_SEL_AM_D",
					"TMS_YN_D",
					"LSCHG_DTM_D",
					"LS_CMENO_D",
					"PHD_NA_BZPLC_NM",
					"NA_TR_DSC_NM",
					"NA_WRS_C_NM",
					"SLPL_NA_TRPL_C_NM",
					"BUYPL_NA_TRPL_C_NM",
					"BUYPL_NA_TEAM_C_NM",
					"NA_ADJPL_C_D",
					"CNR_DS_AM_D",
					"NA_DVY_PLASH_SLPNO_D",
					"AFF_SSDY_SUM_D"
			};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			paymentService.downloadExcelAffSsdyMaster(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "사후장려금실적");			
			searchMap.put("조회기간", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);			
			searchMap.put("거래구분", tradeType);
			searchMap.put("정정취소구분", canType);
			searchMap.put("검색사업장", naBzplc);			
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
 	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 사후장려금 실적조회 R1 디테일 그리드	 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelAffSsdyDetail")
	public void downloadExcelAffSsdyDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "사후장려금실적_상세정보.xls";
		
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
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String canType = request.getParameter("can_type");  //정정취소구분
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
					
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			String phdNaBzplc = request.getParameter("phd_na_bzplc");  //물류경제통합사업장코드
			String naTrDsc = request.getParameter("na_tr_dsc");   //경제통합거래구분코드		
			String naBlbDfcDsc = request.getParameter("na_blb_dfc_dsc");  //경제통합흑자적자구분코드		
			String trDt = request.getParameter("tr_dt");  //거래일자
			String pyPlaDt = request.getParameter("py_pla_dt");  //지급예정일자
			String naCrcCanDsc = request.getParameter("na_crc_can_dsc");  //경제통합정정취소구분코드
			
			String naTeamC = request.getParameter("NA_TEAM_C");  //경제통합팀코드
			String slplNaTrplC = request.getParameter("SLPL_NA_TRPL_C");   //매출처경제통합거래처코드		
			String slplNaTeamC = request.getParameter("SLPL_NA_TEAM_C");  //매출처경제통합팀코드		
			String buyplNaTrplC = request.getParameter("BUYPL_NA_TRPL_C");  //매입처경제통합거래처코드
			String buyplNaTeamC = request.getParameter("BUYPL_NA_TEAM_C");  ///매입처경제통합팀코드		
			String naAdjplC = request.getParameter("NA_ADJPL_C");  //경제통합정산처코드
			String adjplNaTeamC = request.getParameter("ADJPL_NA_TEAM_C");  //정산처경제통합팀코드
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush					
			
			String[] header = {					
					"물류경제통합 사업장코드",
					"경제통합 거래구분코드",
					"경제통합 흑자적자구분코드",
					"거래일자",
					"경제통합 팀코드",
					"매출처 경제통합거래처코드",
					"매출처 경제통합팀코드",
					"매입처 경제통합거래처코드",
					"매입처 경제통합팀코드",
					"경제통합 정산처코드",
					"정산처 경제통합팀코드",
					"지급예정일자",
					"경제통합 정정취소구분코드",
					"공급수량",
					"공급금액",
					"부가세",
					"사후장려금 (A)",
					"물류(평균) 사후수수료율",
					"물류 판매금액",
					"검수구분금액 (B)",
					"사후장려금(계산) (C=A*B)",
					"물류경제통합 사업장코드",
					"물류전표일자",
					"경제통합 거래구분코드",
					"경제통합 전표번호",
					"경제통합 흑자적자구분코드",
					"전표 일련번호",
					"거래일자",
					"경제통합 팀코드",
					"경제통합 상품코드",
					"상품과목코드",
					"경제통합 대원장코드",
					"경제통합 중원장코드",
					"매출처 경제통합거래처코드",
					"매출처 경제통합팀코드",
					"매입처 경제통합거래처코드",
					"매입처 경제통합팀코드",
					"경제통합 정산처코드",
					"정산처 경제통합팀코드",
					"중앙회조합 구분코드",
					"지급예정일자",
					"경제통합 상품대분류코드",
					"경제통합 상품중분류코드",
					"경제통합 상품소분류코드",
					"경제통합 상품세분류코드",
					"경제통합 정정취소구분코드",
					"원전표일자",
					"원경제통합 전표번호",
					"공급수량",
					"공급금액",
					"부가세",
					"사후장려금",
					"물류 사후수수료율",
					"비고내용",
					"물류판매금액",
					"전송여부",
					"최종변경일시",
					"최종변경자 개인번호",
					"검수구분금액",
					"배송예정서번호"
			};
			String[] keyIndex = {
					"PHD_NA_BZPLC",
					"NA_TR_DSC",
					"NA_BLB_DFC_DSC",
					"TR_DT",
					"NA_TEAM_C",
					"SLPL_NA_TRPL_C",
					"SLPL_NA_TEAM_C",
					"BUYPL_NA_TRPL_C",
					"BUYPL_NA_TEAM_C",
					"NA_ADJPL_C",
					"ADJPL_NA_TEAM_C",
					"PY_PLA_DT",
					"NA_CRC_CAN_DSC",
					"SPY_QT",
					"SPY_AM",
					"VAT",
					"AFF_SSDY",
					"PHD_AFF_FEERT",
					"PHD_SEL_AM",
					"CNR_DS_AM",
					"AFF_SSDY_SUM",
					"PHD_NA_BZPLC_D",
					"PHD_SLP_DT",
					"NA_TR_DSC_D",
					"NA_SLPNO",
					"NA_BLB_DFC_DSC_D",
					"SLP_SQNO",
					"TR_DT_D",
					"NA_TEAM_C_D",
					"NA_WRS_C",
					"WRS_SBJC",
					"NA_LLED_C",
					"NA_MLED_C",
					"SLPL_NA_TRPL_C_D",
					"SLPL_NA_TEAM_C_D",
					"BUYPL_NA_TRPL_C_D",
					"BUYPL_NA_TEAM_C_D",
					"NA_ADJPL_C_D",
					"ADJPL_NA_TEAM_C_D",
					"NAAC_DSC",
					"PY_PLA_DT_D",
					"NA_WRS_LCLC",
					"NA_WRS_MCLC",
					"NA_WRS_SCLC",
					"NA_WRS_DTCF_C",
					"NA_CRC_CAN_DSC_D",
					"OSLIP_DT",
					"OGN_NA_SLPNO",
					"SPY_QT_D",
					"SPY_AM_D",
					"VAT_D",
					"AFF_SSDY_D",
					"PHD_AFF_FEERT_D",
					"RMK_CNTN",
					"PHD_SEL_AM_D",
					"TMS_YN",
					"LSCHG_DTM",
					"LS_CMENO",
					"CNR_DS_AM_D",
					"NA_DVY_PLASH_SLPNO",
			};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			paymentService.downloadExcelAffSsdyDetail(
					searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,
					phdNaBzplc,naTrDsc,naBlbDfcDsc,
					trDt,pyPlaDt,naCrcCanDsc,
					naTeamC,slplNaTrplC,slplNaTeamC,
					buyplNaTrplC,buyplNaTeamC,naAdjplC,
					adjplNaTeamC, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "사후장려금실적");			
			searchMap.put("조회기간", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);			
			searchMap.put("거래구분", tradeType);
			searchMap.put("정정취소구분", canType);
			searchMap.put("검색사업장", naBzplc);			
			searchMap.put("거래처코드", srhTrplC);			
			searchMap.put("물류경제통합사업장코드", phdNaBzplc);
			searchMap.put("경제통합거래구분코드", naTrDsc);
			searchMap.put("경제통합흑자적자구분코드", naBlbDfcDsc);
			searchMap.put("거래일자", trDt);
			searchMap.put("지급예정일자", pyPlaDt);
			searchMap.put("경제통합정정취소구분코드", naCrcCanDsc);
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("매출처경제통합거래처코드", slplNaTrplC);
			searchMap.put("매출처경제통합팀코드", slplNaTeamC);
			searchMap.put("매입처경제통합거래처코드", buyplNaTrplC);
			searchMap.put("매입처경제통합팀코드", buyplNaTeamC);
			searchMap.put("경제통합정산처코드", naAdjplC);
			searchMap.put("정산처경제통합팀코드", adjplNaTeamC);
		
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	
	/*
 	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 사후장려금 실적조회 R1  상품합계 그리드	 - 엑셀 상세다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelAffSsdyWrsSum")
	public void downloadExcelAffSsdyWrsSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트 
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String canType = request.getParameter("can_type");  //정정취소구분
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
					
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush			
					
			
			String[] header = {					
					"물류경제통합 사업장코드",
					"경제통합 거래구분코드",
					"경제통합 흑자적자구분코드",
					"거래일자",
					"경제통합 팀코드",
					"매출처 경제통합거래처코드",
					"매출처 경제통합팀코드",
					"매입처 경제통합거래처코드",
					"매입처 경제통합팀코드",
					"경제통합 정산처코드",
					"정산처 경제통합팀코드",
					"지급예정일자",
					"경제통합 정정취소구분코드",
					"공급수량",
					"공급금액",
					"부가세",
					"사후장려금 (A)",
					"물류(평균) 사후수수료율",
					"물류 판매금액",
					"검수구분금액 (B)",
					"사후장려금(계산) (C=A*B)",
					"물류경제통합 사업장코드",
					"물류전표일자",
					"경제통합 거래구분코드",
					"경제통합 전표번호",
					"경제통합 흑자적자구분코드",
					"전표 일련번호",
					"거래일자",
					"경제통합 팀코드",
					"경제통합 상품코드",
					"상품과목코드",
					"경제통합 대원장코드",
					"경제통합 중원장코드",
					"매출처 경제통합거래처코드",
					"매출처 경제통합팀코드",
					"매입처 경제통합거래처코드",
					"매입처 경제통합팀코드",
					"경제통합 정산처코드",
					"정산처 경제통합팀코드",
					"중앙회조합 구분코드",
					"지급예정일자",
					"경제통합 상품대분류코드",
					"경제통합 상품중분류코드",
					"경제통합 상품소분류코드",
					"경제통합 상품세분류코드",
					"경제통합 정정취소구분코드",
					"원전표일자",
					"원경제통합 전표번호",
					"공급수량",
					"공급금액",
					"부가세",
					"사후장려금",
					"물류 사후수수료율",
					"비고내용",
					"물류판매금액",
					"전송여부",
					"최종변경일시",
					"최종변경자 개인번호",
					"검수구분금액",
					"배송예정서번호"
			};
			String[] keyIndex = {
					
			};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		

			paymentService.downloadExcelAffSsdyWrsSum(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1250
	 * 화면설명 : 기타당좌자산회수내역 마스터 그리드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/payment/retrieveEtcCaAsetMasterList")
	public void retrieveEtcCaAsetMasterList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //일자구분(일/월)
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일		
		String canType = requestHelper.getParameter("can_type");  //정정취소구분
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분		
		String upyamOcuYn = requestHelper.getParameter("upyam_ocu_yn");  //미수금계정여부
		String naBzplc = requestHelper.getParameter("na_bzplc");  //농협사업장
		String serachType = requestHelper.getParameter("serach_type");  //조회구분
		String edtSlpno = requestHelper.getParameter("edt_slpno");  //전표번호
				
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		//String srhTrplC = requestHelper.getGlnCode();
		
		//String srhTrplC = "8801099000016";
		
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			// Paging
			int totalRowCount = paymentService.getEtcCaAsetCount(searchDateType,fromDate,toDate,
																						canType,tradeType,upyamOcuYn,
																						naBzplc,serachType,edtSlpno,
																						TRPL_C_ARR);		
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();			
			
			List<PaymentEtcCaAsetMasterVO> list = paymentService.retrieveEtcCaAsetMasterList(searchDateType,fromDate,toDate,
																																canType,tradeType,upyamOcuYn,
																																naBzplc,serachType,edtSlpno,
																																TRPL_C_ARR,
																																start,limit);	
			if(list != null && list.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_paymentEtcCaAsetM");
				dsHelper.addColumns(PaymentEtcCaAsetMasterVO.class);				
				
				for(PaymentEtcCaAsetMasterVO vo : list) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = paymentService.getEtcCaAsetTotal(searchDateType,fromDate,toDate,
																									canType,tradeType,upyamOcuYn,
																									naBzplc,serachType,edtSlpno,
																									TRPL_C_ARR);
			
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
	 * 화면ID : VAN_DS_SC_1250
	 * 화면설명 : 기타당좌자산회수내역 디테일 그리드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/payment/retrieveEtcCaAsetDetailList")
	public void retrieveEtcCaAsetDetailList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String naBbzplc = requestHelper.getParameter("na_bzplc");  //경제통합사업장코드
		String naTeamC = requestHelper.getParameter("na_team_c");  //경제통합팀코드
		String slpDt = requestHelper.getParameter("slp_dt");  //전표일자
		String naSlpno = requestHelper.getParameter("na_slpno");  //경제통합 전표번호		    
	    
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_paymentEtcCaAsetD");
			dsHelper.addColumns(PaymentEtcCaAsetDetailVO.class);
			List<PaymentEtcCaAsetDetailVO> list = paymentService.retrieveEtcCaAsetDetailList(naBbzplc,naTeamC,slpDt, naSlpno);
			for(PaymentEtcCaAsetDetailVO vo : list) {
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
 	 * VAN_DS_SC_1250
	 * 화면설명 : 기타당좌자산회수내역 마스터 그리드	 - 엑셀 상세다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelEtcCaAsetMaster")
	public void downloadExcelEtcCaAsetMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		/*
		String fileName = "기타당좌자산회수내역_기준정보.xls";
		
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
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일		
			String canType = request.getParameter("can_type");  //정정취소구분
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String upyamOcuYn = request.getParameter("upyam_ocu_yn");  //미수금계정여부
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
			String serachType = request.getParameter("serach_type");  //조회구분
			String edtSlpno = request.getParameter("edt_slpno");  //전표번호
					
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
					
			// BackupLine
			/* String[] header = {					
					"경제통합사업장코드","경제통합팀코드","전표일자","경제통합 전표번호","경제통합 거래구분코드","경제통합 정정취소구분코드",
					"경제통합 거래처코드","단축사업장명","기타당좌자산 반환수량","반환금액","반환수수료","반환수수료 부가세","원전표일자",
					"원전표번호","회수예정일","비고","차량구분","차량코드","미수금계정여부","경제통합상품코드","상품명","반환수량",
					"수수료단가","반환금액","반환수수료","반환수수료부가세"
			};
			String[] keyIndex = {
					"NA_BZPLC","NA_TEAM_C","SLP_DT","NA_SLPNO","NA_TR_DSC","NA_CRC_CAN_DSC",
					"NA_TRPL_C","SHRT_CLNTNM","ETC_CA_ASET_RTU_QT","RTU_AM","RTU_FEE","RTU_FEE_VAT","OSLIP_DT",
					"OSLIP_NA_SLPNO","WDR_PLA_DT","RMK_CNTN","VHC_TYPE","VHC_NO","UPYAM_OCU_YN","D1","D2","D3",
					"D4","D5","D6","D7"					
			}; */

			String[] header = {					
					"경제통합사업장코드",
					"경제통합사업장명",
					"전표일자",
					"경제통합 전표번호",
					"경제통합 거래구분코드",
					"경제통합 정정취소구분코드",
					"경제통합 거래처코드",
					"단축사업장명",
					"경제통합상품코드",
					"상품명",
					"반환/회수수량",
					"공병단가",
					"반환금액",
					"반환수수료",
					"반환수수료 부가세",
					"원전표일자",
					"원전표번호"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"NA_BZPLC_NM",
					"SLP_DT",
					"NA_SLPNO",
					"NA_TR_DSC",
					"NA_CRC_CAN_DSC",
					"NA_TRPL_C",
					"SHRT_CLNTNM",
					"D1",
					"D2",
					"D3",
					"D4",
					"D5",
					"D6",
					"D7",
					"OSLIP_DT",
					"OSLIP_NA_SLPNO"					
			};
			
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			paymentService.downloadExcelEtcCaAsetMaster(searchDateType,fromDate,toDate,
					canType,tradeType,upyamOcuYn,
					naBzplc,serachType,edtSlpno,
					TRPL_C_ARR, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "기타당좌자산회수내역");			
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);			
			searchMap.put("거래구분", tradeType);
			searchMap.put("정정취소구분", canType);
			searchMap.put("검색사업장", naBzplc);			
			searchMap.put("거래처코드", srhTrplC);
			handler .createSearchSheet(searchMap);
			
			handler .write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
 	 * VAN_DS_SC_1250
	 * 화면설명 : 기타당좌자산회수내역 디테일 그리드	 - 엑셀 상세다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelEtcCaAsetDetail")
	public void downloadExcelEtcCaAsetDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "기타당좌자산회수내역_상세정보.xls";
		
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
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일		
			String canType = request.getParameter("can_type");  //정정취소구분
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String upyamOcuYn = request.getParameter("upyam_ocu_yn");  //미수금계정여부
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
			String serachType = request.getParameter("serach_type");  //조회구분
			String edtSlpno = request.getParameter("edt_slpno");  //전표번호
					
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트
			
			String naBbzplc = request.getParameter("na_bzplcD");  //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c");  //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno");  //경제통합 전표번호
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush			
					
			
			String[] header = {					
					"경제통합사업장코드",
					"경제통합팀코드",
					"전표일자",
					"경제통합 전표번호",
					"경제통합 거래구분코드",
					"경제통합 정정취소구분코드",
					"경제통합 거래처코드",
					"단축사업장명",
					"기타당좌자산 반환수량",
					"반환금액",
					"반환수수료",
					"반환수수료 부가세",
					"원전표일자",
					"원전표번호",
					"회수예정일",
					"비고",
					"차량구분",
					"차량코드",
					"미수금계정여부",
					"경제통합상품코드",
					"상품명",
					"반환수량",
					"수수료단가",
					"반환금액",
					"반환수수료",
					"반환수수료부가세"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"NA_TEAM_C",
					"SLP_DT",
					"NA_SLPNO",
					"NA_TR_DSC",
					"NA_CRC_CAN_DSC",
					"NA_TRPL_C",
					"SHRT_CLNTNM",
					"ETC_CA_ASET_RTU_QT",
					"RTU_AM",
					"RTU_FEE",
					"RTU_FEE_VAT",
					"OSLIP_DT",
					"OSLIP_NA_SLPNO",
					"WDR_PLA_DT",
					"RMK_CNTN",
					"VHC_TYPE",
					"VHC_NO",
					"UPYAM_OCU_YN",
					"D1",
					"D2",
					"D3",
					"D4",
					"D5",
					"D6",
					"D7"					
			};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			paymentService.downloadExcelEtcCaAsetDetail(searchDateType,fromDate,toDate,
					canType,tradeType,upyamOcuYn,
					naBzplc,serachType,edtSlpno,
					TRPL_C_ARR,
					naBbzplc,naTeamC,slpDt, naSlpno, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "기타당좌자산회수내역");			
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);			
			searchMap.put("거래구분", tradeType);
			searchMap.put("정정취소구분", canType);
			searchMap.put("검색사업장", naBzplc);			
			searchMap.put("거래처코드", srhTrplC);			
			searchMap.put("경제통합사업장코드", naBbzplc);
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합 전표번호", naSlpno);			
			handler.createSearchSheet(searchMap);			
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
 	 * 화면ID : VAN_DS_SC_1240
	 * 화면설명 : 기타당좌자산 실적조회 R1  - 엑셀 상세다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelEtcCaAsetD")
	public void downloadExcelEtcCaAsetD(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트 
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String canType = request.getParameter("can_type");  //정정취소구분
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
					
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {					
					"기타당좌자산",
					"기타당좌자산2",
					"기타당좌자산3"
					

			};
			String[] keyIndex = {
					
			};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			paymentService.downloadExcelEtcCaAsetD(searchDateType,fromDate,toDate,tradeType,canType,naBzplc,TRPL_C_ARR,handler);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
}
