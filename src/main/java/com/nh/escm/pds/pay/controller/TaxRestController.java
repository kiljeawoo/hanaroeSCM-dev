package com.nh.escm.pds.pay.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.pay.service.TaxService;
import com.nh.escm.pds.pay.vo.TaxByngPrintVO;
import com.nh.escm.pds.pay.vo.TaxByngVO;
import com.nh.escm.pds.pay.vo.TaxSlamDetailVO;
import com.nh.escm.pds.pay.vo.TaxSlamMasterVO;

import net.sourceforge.barbecue.Barcode;
import net.sourceforge.barbecue.BarcodeException;
import net.sourceforge.barbecue.BarcodeFactory;
import net.sourceforge.barbecue.BarcodeImageHandler;
import net.sourceforge.barbecue.output.OutputException;

/**
 * 정산정보 - Tax
 * @author HyeRim.Oh
 *
 */

@RestController
public class TaxRestController extends AbstractController {
	
	@Autowired
	private TaxService taxService;

	/*
	 * 화면ID : VAN_DS_SC_1220
	 * 화면설명 : 실적 세무자료 매출 마스터 그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tax/retrieveSlamMasterList")
	public void retrieveSlamMasterList(HttpServletRequest request, HttpServletResponse response) {
	
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //일자구분(일/월)
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String totalType = requestHelper.getParameter("total_type");  //집계구분
		String rotsCtrDsc = requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		String centerNaBzplc = requestHelper.getParameter("center_na_bzplc");  //중앙본부 농협사업장
		String naBzplc = requestHelper.getParameter("na_bzplc");  //농협사업장
		String receiptType = requestHelper.getParameter("receipt_type");  //접수여부
		String voucherType = requestHelper.getParameter("voucher_type");  //증빙서 서류 구분
		String na_team = requestHelper.getParameter("na_team");  //농협사업장팀
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_taxSlamM");
			dsHelper.addColumns(TaxSlamMasterVO.class);
			List<TaxSlamMasterVO> list = taxService.retrieveSlamMasterList(
					searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,receiptType,voucherType,na_team,
					TRPL_C_ARR);
			
			for(TaxSlamMasterVO vo : list) {
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
	 * 화면ID : VAN_DS_SC_1220
	 * 화면설명 : 실적 세무자료 매출 디테일그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tax/retrieveSlamDetailList")
	public void retrieveSlamDetailList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //일자구분(일/월)
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String totalType = requestHelper.getParameter("total_type");  //집계구분
		String rotsCtrDsc = requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		String centerNaBzplc = requestHelper.getParameter("center_na_bzplc");  //중앙본부 농협사업장
		String naBzplc = requestHelper.getParameter("na_bzplc");  //농협사업장
		String receiptType = requestHelper.getParameter("receipt_type");  //접수여부
		String voucherType = requestHelper.getParameter("voucher_type");  //증빙서 서류 구분
		String na_team = requestHelper.getParameter("na_team");  //농협사업장팀
		String trpl_rlno = requestHelper.getParameter("trpl_rlno");  //거래처실명번호
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_taxSlamD");
			dsHelper.addColumns(TaxSlamDetailVO.class);
			List<TaxSlamDetailVO> list = taxService.retrieveSlamDetailList(
					searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,receiptType,voucherType,na_team, trpl_rlno,
					TRPL_C_ARR);
			for(TaxSlamDetailVO vo : list) {
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
	 * 화면ID : VAN_DS_SC_1220
	 * 화면설명 : 실적 세무자료 매출 마스터 엑셀 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSlamMaster")
	public void downloadExcelSlamMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			String fileName = request.getParameter("fileName");
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String totalType = request.getParameter("total_type");  //집계구분
			String rotsCtrDsc = request.getParameter("rots_ctr_dsc");  //계통계약구분
			String centerNaBzplc = request.getParameter("center_na_bzplc");  //중앙본부 농협사업장
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
			String receiptType = request.getParameter("receipt_type");  //접수여부
			String voucherType = request.getParameter("voucher_type");  //증빙서 서류 구분
			String na_team = request.getParameter("na_team");  //농협사업장팀			
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			// 2015.11.11 엑셀 변경 (채준수)
			String[] header = {
					"고객명",
					"거래처실명번호",
					"거래처코드",
					"매수",
					"매입액",
					"매입부가세",
					"영세율매입",
					"면세매입",
					"총매입액 ",
					"부가세",
					"접수매수",
					"접수금액",
					"접수세액",
					"미접수매수"
					/*"경제통합 사업장코드",
					"사업장 사업자등록번호",
					"거래처명",
					"경제통합 거래처코드",
					"거래처 실명번호",
					"고객명",
					"사업장팀명",
					"거래처팀명",
					"거래일자",
					"경제통합 계산서구분명",
					"집계구분",
					"집계상세구분",
					"세무유형구분",
					"품목명",
					"순공급금액",
					"순부가세",
					"경제통합 전표번호",
					"거래구분명",
					"사업방식",
					"계통계약구분",
					"대분류",
					"중분류",
					"세무발행횟수",
					"발행일시",
					"발행자",
					"접수비고내용",
					"참조",
					"접수여부",
					"접수구분명",
					"흑자 공급금액",
					"흑자 부가세",
					"적자 공급금액",
					"적자 부가세",
					"정정흑자 공급금액",
					"정정흑자 부가세",
					"정정적자 공급금액",
					"정정적자 부가세",
					"거래처명",
					"거래처 주소",
					"거래처 업태명",
					"거래처 종목명",
					"거래처 대표자명",
					"거래처 전화번호",
					"사업장명",
					"사업장 주소",
					"사업장 업태명",
					"사업장 종목명",
					"사업장 대표자명",
					"사업장 전화번호"*/
					};
			String[] keyIndex = {
					"CUSNM",
					"TRPL_RLNO_M",
					"NA_TRPL_C_M",
					"PUC_M",
					"SPY_AM_M",
					"BYNG_VAT_M",
					"SMA_AM_M",
					"EXTX_AM_M",
					"TOTALAM_M",
					"VAT_M",
					"RCCNT_M",
					"RCAM_M",
					"RCVAT_M",
					"RCNCNT_M"
					/*"NA_BZPLC",
					"BZPL_BZNO",
					"CLNTNM",
					"NA_TRPL_C",
					"TRPL_RLNO",
					"CUSNM ",
					"NA_TEAM_C",
					"TRPL_NA_TEAM_C",
					"TR_DT",
					"NA_SOAC_DSC",
					"NA_TOT_DSC",
					"NA_TOT_DTI_DSC",
					"TXBZ_TP_DSC",
					"LATCNM",
					"SPY_AM",
					"VAT",
					"NA_SLPNO",
					"NA_TR_DSC",
					"BZ_METH_DSC",
					"ROTS_CTR_DSC",
					"NA_LLED_C",
					"NA_MLED_C",
					"TXBZ_PBC_NT",
					"TXBZ_PBC_DTM",
					"TXBZ_PBCMN_ENO",
					"PBC_RMK_CNTN",
					"RMK_CNTN",
					"RC_YN",
					"RC_TYPE",
					"BLB_SPY_AM",
					"BLB_VAT",
					"DFC_SPY_AM",
					"DFC_VAT",
					"CRC_BLB_SPY_AM",
					"CRC_BLB_VAT",
					"CRC_DFC_SPY_AM",
					"CRC_DFC_VAT",
					"TRPL_CLNTNM",
					"TRPL_ADR",
					"TRPL_BZTPNM",
					"TRPL_BZCCNM",
					"TRPL_REPMNM",
					"TRPL_TEL",
					"BZPL_CLNTNM",
					"BZPL_ADR",
					"BZPL_BZTPNM",
					"BZPL_BZCCNM",
					"BZPL_REPMNM",
					"BZPL_TEL"*/
					};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			taxService.downloadExcelSlamMaster(
					searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,receiptType,voucherType,na_team,
					TRPL_C_ARR, handler);					
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "세무매출");
			searchMap.put("중앙본부 농협사업장", centerNaBzplc);
			searchMap.put("농협사업장", naBzplc);
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);			
			searchMap.put("집계구분", totalType);
			searchMap.put("계통계약구분", rotsCtrDsc);
			searchMap.put("접수여부", receiptType);
			searchMap.put("증빙서 서류 구분", voucherType);
			searchMap.put("증빙서 서류 구분", voucherType);
			searchMap.put("농협사업장팀", na_team);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1220
	 * 화면설명 : 실적 세무자료 매출 디테일 엑셀 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelSlamDetail")
	public void downloadExcelSlamDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			String fileName = request.getParameter("fileName");
			String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String totalType = request.getParameter("total_type");  //집계구분
			String rotsCtrDsc = request.getParameter("rots_ctr_dsc");  //계통계약구분
			String centerNaBzplc = request.getParameter("center_na_bzplc");  //중앙본부 농협사업장
			String naBzplc = request.getParameter("na_bzplc");  //농협사업장
			String receiptType = request.getParameter("receipt_type");  //접수여부
			String voucherType = request.getParameter("voucher_type");  //증빙서 서류 구분
			String na_team = request.getParameter("na_team");  //농협사업장팀
			String trpl_rlno = requestHelper.getParameter("trpl_rlno");  //거래처실명번호			
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			//두번째 시트			
			String naTrplC = request.getParameter("na_trpl_c");  //경제통합거래처코드			
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"상호명",
					"사업자번호",
					"거래처",
					"매입매수",
					"과세매입(A)",
					"매입부가세",
					"영세율매입(B)",
					"면세매입(C)",
					"총매입액 (A+B+C)",
					"부가세",
					"접수매수",
					"접수금액",
					"접수세액",
					"미접수매수",
					"경제통합 사업장코드",
					"사업장 사업자등록번호",
					"거래처명",
					"경제통합 거래처코드",
					"거래처 실명번호",
					"고객명",
					"사업장팀명",
					"거래처팀명",
					"거래일자",
					"경제통합 계산서구분명",
					"집계구분",
					"집계상세구분",
					"세무유형구분",
					"품목명",
					"순공급금액",
					"순부가세",
					"경제통합 전표번호",
					"거래구분명",
					"사업방식",
					"계통계약구분",
					"대분류",
					"중분류",
					"세무발행횟수",
					"발행일시",
					"발행자",
					"접수비고내용",
					"참조",
					"접수여부",
					"접수구분명",
					"흑자 공급금액",
					"흑자 부가세",
					"적자 공급금액",
					"적자 부가세",
					"정정흑자 공급금액",
					"정정흑자 부가세",
					"정정적자 공급금액",
					"정정적자 부가세",
					"거래처명",
					"거래처 주소",
					"거래처 업태명",
					"거래처 종목명",
					"거래처 대표자명",
					"거래처 전화번호",
					"사업장명",
					"사업장 주소",
					"사업장 업태명",
					"사업장 종목명",
					"사업장 대표자명",
					"사업장 전화번호"
					};
			String[] keyIndex = {
					"CUSNM",
					"TRPL_RLNO_M",
					"NA_TRPL_C_M",
					"PUC_M",
					"SPY_AM_M",
					"BYNG_VAT_M",
					"SMA_AM_M",
					"EXTX_AM_M",
					"TOTALAM_M",
					"VAT_M",
					"RCCNT_M",
					"RCAM_M",
					"RCVAT_M",
					"RCNCNT_M",
					"NA_BZPLC",
					"BZPL_BZNO",
					"CLNTNM",
					"NA_TRPL_C",
					"TRPL_RLNO",
					"CUSNM ",
					"NA_TEAM_C",
					"TRPL_NA_TEAM_C",
					"TR_DT",
					"NA_SOAC_DSC",
					"NA_TOT_DSC",
					"NA_TOT_DTI_DSC",
					"TXBZ_TP_DSC",
					"LATCNM",
					"SPY_AM",
					"VAT",
					"NA_SLPNO",
					"NA_TR_DSC",
					"BZ_METH_DSC",
					"ROTS_CTR_DSC",
					"NA_LLED_C",
					"NA_MLED_C",
					"TXBZ_PBC_NT",
					"TXBZ_PBC_DTM",
					"TXBZ_PBCMN_ENO",
					"PBC_RMK_CNTN",
					"RMK_CNTN",
					"RC_YN",
					"RC_TYPE",
					"BLB_SPY_AM",
					"BLB_VAT",
					"DFC_SPY_AM",
					"DFC_VAT",
					"CRC_BLB_SPY_AM",
					"CRC_BLB_VAT",
					"CRC_DFC_SPY_AM",
					"CRC_DFC_VAT",
					"TRPL_CLNTNM",
					"TRPL_ADR",
					"TRPL_BZTPNM",
					"TRPL_BZCCNM",
					"TRPL_REPMNM",
					"TRPL_TEL",
					"BZPL_CLNTNM",
					"BZPL_ADR",
					"BZPL_BZTPNM",
					"BZPL_BZCCNM",
					"BZPL_REPMNM",
					"BZPL_TEL"
					};
			
			AbstractModel model = new DefaultModel("디테일", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			taxService.downloadExcelSlamDetail(
					searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,receiptType,voucherType,na_team, trpl_rlno,
					TRPL_C_ARR, handler);					
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "세무매출");
			searchMap.put("중앙본부 농협사업장", centerNaBzplc);
			searchMap.put("농협사업장", naBzplc);
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);			
			searchMap.put("집계구분", totalType);
			searchMap.put("계통계약구분", rotsCtrDsc);
			searchMap.put("접수여부", receiptType);
			searchMap.put("증빙서 서류 구분", voucherType);
			searchMap.put("증빙서 서류 구분", voucherType);
			searchMap.put("농협사업장팀", na_team);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1230
	 * 화면설명 : 실적 세무자료 매입 그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tax/retrieveByngList")
	public void retrieveByngList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //일자구분(일/월)
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String totalType = requestHelper.getParameter("total_type");  //집계구분
		String rotsCtrDsc = requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		String centerNaBzplc = requestHelper.getParameter("center_na_bzplc");  //중앙본부 농협사업장
		String naBzplc = requestHelper.getParameter("na_bzplc");  //농협사업장		
		String txType = requestHelper.getParameter("tx_type");  //세무유형구분
		String voucherType = requestHelper.getParameter("voucher_type");  //증빙서 서류 구분
		//String byngSlamType = requestHelper.getParameter("byng_slam_type");  //매입-매출구분
		String na_team = requestHelper.getParameter("na_team");  //농협사업장팀
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			// Paging
/*			int totalRowCount = taxService.getByngListCount(searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,txType,voucherType,na_team
					,TRPL_C_ARR);	
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();*/
			
			Map<String, Object> map = taxService.getByngListTotal(
					searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,txType,voucherType,na_team
					,TRPL_C_ARR);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("DS_SUM");
				 dsHelper.addColumns(map.keySet());
				 dsHelper.setData(map);
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			DataSetHelper dsHelper = new DataSetHelper("ds_taxByng");
			dsHelper.addColumns(TaxByngVO.class);
			List<TaxByngVO> list = taxService.retrieveByngList(
					searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,txType,voucherType,na_team
					,TRPL_C_ARR, -1, -1);
			for(TaxByngVO vo : list) {
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
	 * 화면ID : VAN_DS_SC_1230
	 * 화면설명 : 실적 세무자료 매입 그리드 - 엑셀다운로드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadByngList")
	public void downloadByngList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");
		
		String searchDateType = request.getParameter("search_date_type");  //일자구분(일/월)
		String fromDate = request.getParameter("from_date");   //조회시작일
		String toDate = request.getParameter("to_date");  //조회종료일
		String totalType = request.getParameter("total_type");  //집계구분
		String rotsCtrDsc = request.getParameter("rots_ctr_dsc");  //계통계약구분
		String centerNaBzplc = request.getParameter("center_na_bzplc");  //중앙본부 농협사업장
		String naBzplc = request.getParameter("na_bzplc");  //농협사업장		
		String txType = request.getParameter("tx_type");  //세무유형구분
		String voucherType = request.getParameter("voucher_type");  //증빙서 서류 구분
		//String byngSlamType = request.getParameter("byng_slam_type");  //매입-매출구분
		String na_team = request.getParameter("na_team");  //농협사업장팀		
		
		String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
	    
		try {			
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			
			String[] header = {
					"경제통합 사업장코드",
					"거래처명",
					"사업장 사업자등록번호",
					"사업장 팀명",
					"경제통합 거래처코드",
					"고객명",
					"거래처 실명번호",
					"거래처 팀명",
					"거래일자",
					"경제통합 계산서구분코드",
					"순공급금액",
					"순부가세",
					"매수",
					"집계구분",
					"집계상세구분",
					"세무유형구분",
					"품목명",
					"흑자 공급금액",
					"흑자 부가세",
					"정정흑자 공급금액",
					"정정흑자 부가세",
					"적자 공급금액",
					"적자 부가세",
					"정정적자 공급금액",
					"정정적자 부가세",
					"사업방식",
					"계통계약구분",
					"대분류",
					"중분류",
					"발행비 비고내용",
					"비고내용",
					"세무집계등록일련번호",
					"상세내역 포함여부"};
			String[] keyIndex = {
					"NA_BZPLC",
					"CLNTNM",
					"BZPL_BZNO",
					"NA_TEAM_C",
					"NA_TRPL_C",
					"CUSNM",
					"TRPL_RLNO",
					"TRPL_NA_TEAM_C",
					"TR_DT",
					"NA_SOAC_DSC",
					"SPY_AM",
					"VAT",
					"PUC",
					"NA_TOT_DSC",
					"NA_TOT_DTI_DSC",
					"TXBZ_TP_DSC",
					"LATCNM",
					"BLB_SPY_AM",
					"BLB_VAT",
					"CRC_BLB_SPY_AM",
					"CRC_BLB_VAT",
					"DFC_SPY_AM",
					"DFC_VAT",
					"CRC_DFC_SPY_AM",
					"CRC_DFC_VAT",
					"BZ_METH_DSC",
					"ROTS_CTR_DSC",
					"NA_LLED_C",
					"NA_MLED_C",
					"PBC_RMK_CNTN",
					"RMK_CNTN",
					"TXBZ_TOT_RG_SQNO",
					"DSPC_INCD_YN"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
			
			taxService.downloadByngList(
					searchDateType,fromDate, toDate, totalType,
					rotsCtrDsc, centerNaBzplc,
					naBzplc,txType,voucherType,na_team
					,TRPL_C_ARR, -1, -1, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "세무매입실적");			
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("집계구분", totalType);
			searchMap.put("중앙본부계통계약 사업장", centerNaBzplc);
			searchMap.put("사업장", naBzplc);
			searchMap.put("세무유형구분", txType);
			searchMap.put("증빙서 서류 구분", voucherType);
			searchMap.put("팀코드", na_team);			
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
						
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*세무 매입 프린트*/
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/tax/printByngList")
	public RestResult getCreditSaleListOz(HttpServletRequest request, HttpServletResponse response,
			String NA_BZPLC, String TXBZ_TOT_RG_SQNO) {
		try {
			
			String dateYy = "";
			String dateMm = "";
			String dateDd = "";
	
			List<List<?>> ozReport = new ArrayList<List<?>>();
			
			String[] NA_BZPLC_ARR = NA_BZPLC.split(",");			
			String[] TXBZ_TOT_RG_SQNO_ARR = TXBZ_TOT_RG_SQNO.split(",");
						
			/*for(int i=0; i<TXBZ_TOT_RG_SQNO_ARR.length; i++){				
				System.out.println("TXBZ_TOT_RG_SQNO_ARR---------->"+TXBZ_TOT_RG_SQNO_ARR[i]);
			}*/
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			
			//리스트(필요한것만 필터링)
			
			for(int i=0; i<NA_BZPLC_ARR.length; i++){		
				List<TaxByngPrintVO> volist = taxService.printByngList(NA_BZPLC_ARR[i],TXBZ_TOT_RG_SQNO_ARR[i]);						
			
				for(TaxByngPrintVO vo : volist){
					Map<String,Object> map = new HashMap<String, Object>();
					
					dateYy = vo.getTR_DT().substring(2, 4);
					dateMm = vo.getTR_DT().substring(4, 6);
					dateDd = vo.getTR_DT().substring(6, 8);
		
					map.put("TXBZ_TOT_RG_SQNO",vo.getTXBZ_TOT_RG_SQNO()); //세무집계등록일련번호
					map.put("JOIN_GLN",vo.getJOIN_GLN()); //사업자/거래처GLN
					map.put("BIZ_NUMBER_B",vo.getBIZ_NUMBER_B()); //사업장실명번호
					map.put("CLNTNM_B",vo.getCLNTNM_B()); //사업장명
					map.put("REPMNM_B",vo.getREPMNM_B()); //사업장대표자명
					map.put("ADDRESS_B",vo.getADDRESS_B()); //사업장주소
					map.put("BZTPNM_B",vo.getBZTPNM_B()); //사업장업태명
					map.put("BZCCNM_B",vo.getBZCCNM_B()); //사업장업종명
					map.put("BIZ_NUMBER_C",vo.getBIZ_NUMBER_C()); //거래처실명번호
					map.put("CLNTNM_C",vo.getCLNTNM_C()); //거래처명
					map.put("REPMNM_C",vo.getREPMNM_C()); //거래처대표자명
					map.put("ADDRESS_C",vo.getADDRESS_C()); //거래처주소
					map.put("BZTPNM_C",vo.getBZTPNM_C()); //거래처업태명
					map.put("BZCCNM_C",vo.getBZCCNM_C()); //거래처업종명	
					map.put("YY",dateYy); //년
					map.put("MM",dateMm); //월
					map.put("DD",dateDd); //일
					
					int max = 11;
					String spyAm = vo.getSPY_AM() + "";
					int gong = max - spyAm.length();
					map.put("GONG", gong);
					String arr[] = new String[max];					
					for(int k=0 ; k < max ; k++){
						if(k < gong) arr[k] = "";
						else arr[k] = spyAm.charAt(k-gong)+"";
						map.put("AMT"+(k+1), arr[k]);
					}
					
					map.put("LATCNM",vo.getLATCNM()); //품목명
					map.put("NUM_SPY_AM",vo.getSPY_AM()); //공급가액
					map.put("NUM_SUM_VALUE",vo.getSPY_AM()); //합계				
					map.put("PBC_RMK_CNTN",vo.getPBC_RMK_CNTN()); //비고내용
					map.put("JOIN_GLN_NM",vo.getJOIN_GLN_NM()); // 사업차, 거래처GLN 코드,이름
					
					String tempPath = Configurer.getProperty("file.sample.path");
					//tempPath = "C:\\";
					File dir = new File(tempPath);					
					File f = FileUtils.getFile(dir, "nh_stamp.jpg");
					String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
					if(StringUtils.isNotEmpty(baseImage)) {
						map.put("STAMP", "data:;base64,"+baseImage);//직인파일
					}
					
					//바코드
					String barcode = (String)map.get("TXBZ_TOT_RG_SQNO");
					Barcode bar = null;
					try{
						bar = BarcodeFactory.createCode128(barcode);
						bar.setBarWidth(2);
						bar.setDrawingText(false);
						
						BufferedImage img = BarcodeImageHandler.getImage(bar);
						ByteArrayOutputStream baos = new ByteArrayOutputStream();
						try {
							ImageIO.write(img, "jpg", baos);
						} catch (IOException e) {
							logger.error(e.getMessage(), e);
						}
						byte[] bytes = baos.toByteArray();
						String barcodeImage = Base64Utils.encodeToString(bytes);
						map.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
					}catch(BarcodeException e){
						logger.error(e.getMessage(), e);
					}			
					map.put("barcode", barcode);//바코드
	
					list.add(map);
				}
			}
			
			ozReport.add(list);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (list != null? list.size() : 0));
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (OutputException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
		
	

}
