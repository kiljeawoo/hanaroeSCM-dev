package com.nh.escm.scm.recadv.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
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

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.DeduplicationObject;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;
import com.nh.escm.common.vo.BillingMarkVO;
import com.nh.escm.common.vo.TbCmBzplVO;
import com.nh.escm.scm.recadv.service.RecadvService;
import com.nh.escm.scm.recadv.vo.RecadvDetailVO;
import com.nh.escm.scm.recadv.vo.RecadvDirectDetailVO;
import com.nh.escm.scm.recadv.vo.RecadvDirectMasterVO;
import com.nh.escm.scm.recadv.vo.RecadvMasterVO;
import com.nh.escm.scm.recadv.vo.RecadvMasterVO_WRS;
import com.nh.escm.scm.recadv.vo.RecadvMaster_NA_TRPL_C_VO;
import com.nh.escm.scm.recadv.vo.SQLMapNames.RecadvCommission;
import com.nh.escm.util.PageHelper;

@RestController
public class RecadvController extends AbstractController{

	@Autowired
	private RecadvService recadvService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	/*
	 * 화면ID : VAN_DS_SC_0500, VAN_DS_SC_0510
	 * 화면설명 : 검수업무 수수료 그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveCommissionList")
	public void retrieveCommissionList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String naBzplc = requestHelper.getParameter("na_bzplc");
		String naTeamC = requestHelper.getParameter("na_team_c");
		String slpDt = requestHelper.getParameter("slp_dt");
		String naSlpno = requestHelper.getParameter("na_slpno");
		long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
		
		String CNR_DS_AM = requestHelper.getParameter("CNR_DS_AM"); //검수구분금액
		
		try {
			
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper = new DataSetHelper("data");
			
			dsHelper.addColumns(RecadvCommission.class);
			
			List<Map<String, Object>> list = recadvService.retrieveCommissionList(
					naBzplc, naTeamC, slpDt, naSlpno, slpSqno, CNR_DS_AM);
			
			for(Map<String, Object> map : list) {				
				dsHelper.setData(map);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0520
	 * 화면설명 : 검수실적_매입처별_그리드_마스터
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvSlpMasterList_NA_TRPL_C")
	public void retrieveRecadvSlpMasterList_NA_TRPL_C(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //매출일
		String fromDate = requestHelper.getParameter("from_date");  //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분
		String isNaAll = requestHelper.getParameter("is_na_all");  //농협사업장전체
		String naBzplc = requestHelper.getParameter("na_bzplc");  //실매입처
		String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
			
		try {
			
			PlatformData platformData = new PlatformData();

			List<Map<String, Object>> list = recadvService.downloadExcelRecadvSlp_NA_TRPL_C_M(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("ds_master");
				 dsHelper.addColumns(list.get(1).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			/*
			 *
			DataSetHelper dsHelper = new DataSetHelper("ds_master");
			dsHelper.addColumns(RecadvMaster_NA_TRPL_C_VO.class);			
			List<RecadvMaster_NA_TRPL_C_VO> list = recadvService.retrieveRecadvSlpMasterList_NA_TRPL_C(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,-1, -1);
					
			for(RecadvMaster_NA_TRPL_C_VO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet()); //grid
			*/			
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0520
	 * 화면설명 : 검수실적_매입처별_그리드_마스터	 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlp_NA_TRPL_C_M")
	public void downloadExcelRecadvSlp_NA_TRPL_C_M(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"매출처 코드 (협력업체)",
					"매출처 명",
					"매입처 코드 (농협)",
					"매입처 명",
					"공급금액",
					"부가세",
					"총공급금액",
					"공병금액",
					"공상자금액",
					"총공제금액",
					"순공급금액",
					"과세공급",
					"과세부가세",
					"주류공급",
					"주류부가세",
					"면세금액",
					"영세금액",
					"업체수수료",
					"관리수수료(R2)",
					"관리부가세(R2)",
					"관리수수료(R1)",
					"물류수수료",
					"물류부가세",
					"운송용역비",
					"운송부가세",
					"기타수수료",
					"기타수수료부가세",
					"매입장려금",
					"미수금",
					"선급금",
					"선급금이자",
					"보조금",
					"현금금액",
					"대체금액",
					"계좌이체금액",
					"외화금액"				
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"ACTL_BUYPL_NA_TRPL_C_NM",
					"MNGT_NA_TRPL_C",
					"MNGT_NA_TRPL_C_NM",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"VCBT_AM",
					"VCBX_AM",					
					"CHRG_TOT",
					"CBAM",
					"GWA_AM",
					"GWA_VAT",
					"LIQ_GAM",
					"LIQ_VAT",
					"EXTX_AM",
					"SMA_AM",
					"COMP_FEE",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"BYNG_SSDY",
					"ACRV",
					"PPYAM",
					"PPYAM_INT",
					"AST_SAM",
					"CSH_AM",
					"TFR_AM",
					"AC_FTR_AM",
					"FC_AM"			
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvSlp_NA_TRPL_C_M_NEW(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_매입처별");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);		
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0520
	 * 화면설명 : 검수실적_매입처별_그리드_마스터	 - 출력
	 */                  
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/downloadRecadvSlp_NA_TRPL_C_M")
	public RestResult downloadRecadvSlp_NA_TRPL_C_M(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String TRPL_C, String searchDateType, String fromDate, String toDate, String tradeType, String isNaAll, String naBzplc, String rotsCtrDsc) {
		
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<List<?>> ozReport = new ArrayList<List<?>>();

			//타이틀
			List<Map<String,Object>> ozTitle = new ArrayList<Map<String,Object>>();
			Map<String,Object> titleItem = new HashMap<String, Object>();
			titleItem.put("top1", sName);
			titleItem.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			titleItem.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			titleItem.put("search", TRPL_C_TEXT);
			ozTitle.add(titleItem);
			ozReport.add(ozTitle);
					
			/**
			 * 
			 *  //라인1	
				본지사명	ACTL_BUYPL_NA_TRPL_C_NM
				본지사코드	ACTL_BUYPL_NA_TRPL_C
				과세공급	GWA_AM
				과세부가세	GWA_VAT
				공급금액	GAM_AM
				부가세	BYNG_VAT
				총공급금액	VCBT_AM
				총공제금액	CHRG_TOT
				순공급금액	CBAM
				//라인2	
				실매입처코드	MNGT_NA_TRPL_C_NM
				실매입처명	MNGT_NA_TRPL_C
				주류공급	LIQ_GAM
				주류부가세	LIQ_VAT
				공병금액	VCBX_AM
				관리수수료(R2)	ETR_AMN_FEE
				관리수수료(R1)	SLGT_AMN_FEE
				물류수수료	PHD_FEE
				운송용역비	TRP_SVC_CST
				기타수수료	ETC_FEE
				//라인3	
				면세금액	EXTX_AM
				영세금액	SMA_AM
				공상자금액	TOT_GAM
				관리부가세(R2)	ETR_AMN_VAT
				업체수수료	COMP_FEE
				물류부가세	PHD_FEE_VAT
				운송부가세	TRP_SVCOS_VAT
				기타수수료부가세	ETC_FEE_VAT
			 */			
			
			List<Map<String, Object>> totList = new ArrayList<Map<String,Object>>(); 
			List<Map<String, Object>> list = recadvService.downloadExcelRecadvSlp_NA_TRPL_C_M(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);
			
			if(list.size() > 0){
				totList.add(list.get(0));
				list.remove(0);
				
				for(Map<String, Object> map : list) {
					map.put("ACTL_BUYPL_NA_TRPL_C", map.get("ACTL_BUYPL_NA_TRPL_C").toString().substring(0,13));
					 
				 }
			}
			ozReport.add(totList);
			ozReport.add(list);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (list != null? list.size() : 0));
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0521
	 * 화면설명 : 검수실적_매입처별_그리드_상세
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvSlp_NA_TRPL_C_Detail")
	public void retrieveRecadvSlp_NA_TRPL_C_Detail(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //매출일
		String fromDate = requestHelper.getParameter("from_date");  //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분
		String isNaAll = requestHelper.getParameter("is_na_all");  //농협사업장전체
		String naBzplc = requestHelper.getParameter("na_bzplc");  //실매입처
		String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		
		String MNGT_NA_TRPL_C= requestHelper.getParameter("MNGT_NA_TRPL_C");  //그리드 클릭시 사업장코드
			
		try {
			
			PlatformData platformData = new PlatformData();

			DataSetHelper dsHelper = new DataSetHelper("ds_detail");
			dsHelper.addColumns(RecadvMaster_NA_TRPL_C_VO.class);			
			List<RecadvMaster_NA_TRPL_C_VO> list = recadvService.retrieveRecadvSlp_NA_TRPL_C_Detail(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,MNGT_NA_TRPL_C);
			
			/*
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			*/
			
			for(RecadvMaster_NA_TRPL_C_VO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet()); //grid
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0521
	 * 화면설명 : 검수실적_매입처별_상세	 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlp_NA_TRPL_C_D")
	public void downloadExcelRecadvSlp_NA_TRPL_C_D(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			String MNGT_NA_TRPL_C= requestHelper.getParameter("MNGT_NA_TRPL_C");  //그리드 클릭시 사업장코드
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"매출처 코드 (협력업체)",
					"매출처 명",
					"매입처 코드 (농협)",
					"매입처 명",
					"공급금액",
					"부가세",
					"총공급금액",
					"공병금액",
					"공상자금액",
					"총공제금액",
					"순공급금액",
					"과세공급",
					"과세부가세",
					"주류공급",
					"주류부가세",
					"면세금액",
					"영세금액",
					"업체수수료",
					"관리수수료(R2)",
					"관리부가세(R2)",
					"관리수수료(R1)",
					"물류수수료",
					"물류부가세",
					"운송용역비",
					"운송부가세",
					"기타수수료",
					"기타수수료부가세",
					"매입장려금",
					"미수금",
					"선급금",
					"선급금이자",
					"보조금",
					"현금금액",
					"대체금액",
					"계좌이체금액",
					"외화금액",
					"매출일자 - 전표번호",
					"검수일자",
					"지급예정일",
					"배송예정서 전표번호",
					"거래구분",
					"정정취소구분",
					"계통구분"			
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"ACTL_BUYPL_NA_TRPL_C_NM",
					"MNGT_NA_TRPL_C",
					"MNGT_NA_TRPL_C_NM",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"VCBT_AM",
					"VCBX_AM",
					"CHRG_TOT",
					"CBAM",
					"GWA_AM",
					"GWA_VAT",
					"LIQ_GAM",
					"LIQ_VAT",
					"EXTX_AM",
					"SMA_AM",
					"COMP_FEE",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"BYNG_SSDY",
					"ACRV",
					"PPYAM",
					"PPYAM_INT",
					"AST_SAM",
					"CSH_AM",
					"TFR_AM",
					"AC_FTR_AM",
					"FC_AM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"NA_TR_DSC",
					"NA_CRC_CAN_DSC",
					"ROTS_CTR_DSC"	
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);		
			
			recadvService.downloadExcelRecadvSlp_NA_TRPL_C_D(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,MNGT_NA_TRPL_C,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_매입처별_상세");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);		
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_그리드_마스터
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvSlpMasterList_WRS")
	public void retrieveRecadvSlpMasterList_WRS(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //매출일
		String fromDate = requestHelper.getParameter("from_date");  //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분
		String isNaAll = requestHelper.getParameter("is_na_all");  //농협사업장전체
		String naBzplc = requestHelper.getParameter("na_bzplc");  //실매입처
		String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		
		String wrs_code= requestHelper.getParameter("wrs_code");  //상품코드
			
		try {
			
			PlatformData platformData = new PlatformData();

			DataSetHelper dsHelper = new DataSetHelper("ds_master");
			dsHelper.addColumns(RecadvMasterVO_WRS.class);			
			List<RecadvMasterVO_WRS> list = recadvService.retrieveRecadvSlpMasterList_WRS(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);
			
			for(RecadvMasterVO_WRS vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet()); //grid
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_엑셀 다운로드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpMasterList_WRS")
	public void downloadExcelRecadvSlpMasterList_WRS(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			String wrs_code= request.getParameter("wrs_code");  //상품코드
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"상품코드",
					"상품명",
					"규격",
					"면과세",
					"단가(계산)",
					"매입수량",
					"공급금액",
					"부가세",
					"총공급금액",
					"총공제금액",
					"업체수수료",
					"수탁관리수수료",
					"수탁관리부가세",
					"매취관리수수료",
					"물류수수료",
					"물류수수료부가세",
					"운송용역비용",
					"운송용역비용부가세",
					"기타수수료",
					"기타수수료부가세",
					"매입장려금"
			};
			String[] keyIndex = {
					"NA_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"TXT_DSC",
					"DANGA",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"COMP_FEE",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"BYNG_SSDY"
			};
			
			/**
			 * 빌링 마크 시작
			 */
			/*
			if(list != null && list.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : list) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			*/
			/**
			 * 빌링 마크 종료
			 */
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
			
			recadvService.downloadExcelRecadvSlpMasterList_WRS_NEW(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_상품별");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);		
			searchMap.put("거래처코드", srhTrplC);
			searchMap.put("상품코드", wrs_code);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/printRecadvSlpMasterList_WRS")
	public RestResult printRecadvSlpMasterList_WRS(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String TRPL_C, String searchDateType, String fromDate, String toDate, String tradeType, String isNaAll, String naBzplc, String rotsCtrDsc, String wrs_code, String wrs_gubun, String bzplc) {
		
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			List<List<?>> ozReport = new ArrayList<List<?>>();
			
			String titleForm = TRPL_C_TEXT +  ", 일자구분:"+searchDateType+", 시작일:"+fromDate+", 종료일:"+toDate+", 거래구분:"+tradeType+
					", 계약유형:"+rotsCtrDsc+", 상품구분코드:"+wrs_gubun+", 상품코드:"+wrs_code+", 사업장구분코드:"+isNaAll+", 사업장코드:"+bzplc;
			
			//타이틀
			List<Map<String,Object>> ozTitle = new ArrayList<Map<String,Object>>();
			Map<String,Object> titleItem = new HashMap<String, Object>();
			titleItem.put("top1", sName);
			titleItem.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			titleItem.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			titleItem.put("search", titleForm);
			ozTitle.add(titleItem);
			ozReport.add(ozTitle);
					
			/**
			 * 
			 * //라인1
				NA_WRS_C	상품코드
				WRS_STDNM	규격
				BYNG_QT	수량
				GAM_AM	공급금액
				TOT_GAM	총공급금액
				COMP_FEE	업체수수료
				ETR_AMN_FEE	수탁관리수수료(R2)
				SLGT_AMN_FEE	매취관리수수료(R1)
				PHD_FEE	물류수수료
				TRP_SVC_CST	운송용역비용
				ETC_FEE	기타수수료
				
				//라인2
				WRSNM	상품명
				TXT_DSC	과세구분
				DANGA	단가(계산)
				BYNG_VAT	부가세
				CHRG_TOT	총공제금액
				
				ETR_AMN_VAT	수탁관리부가세(R2)
				BYNG_SSDY	매입장려금
				PHD_FEE_VAT	물류수수료부가세
				TRP_SVCOS_VAT	운송용역비부가세
				ETC_FEE_VAT	기타수수료부가세
			 */
			
			//List<Map<String, Object>> totList = new ArrayList<Map<String,Object>>(); 
			List<Map<String, Object>> list = recadvService.downloadExcelRecadvSlpMasterList_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc, rotsCtrDsc, wrs_code);
			
			if(list.size() > 0){
				//totList.add(list.get(0));
				list.remove(0);
			}			
			//ozReport.add(totList);
			ozReport.add(list);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (list != null? list.size() : 0));
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_두번째 그리드 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvSlpDetailList_WRS")
	public void retrieveRecadvSlpDetailList_WRS(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //매출일
		String fromDate = requestHelper.getParameter("from_date");  //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분
		String isNaAll = requestHelper.getParameter("is_na_all");  //농협사업장전체
		String naBzplc = requestHelper.getParameter("na_bzplc");  //실매입처
		String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		
		String wrs_code= requestHelper.getParameter("wrs_code");  //상품코드
			
		try {
			
			PlatformData platformData = new PlatformData();
			
			List<Map<String, Object>> list = recadvService.retrieveRecadvSlpDetailList_WRS(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("ds_detail");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}			
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_두번째 그리드 엑셀 다운로드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpDetailList_WRS")
	public void downloadExcelRecadvSlpDetailList_WRS(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			String wrs_code= request.getParameter("wrs_code");  //상품코드
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"실매입처",
					"실매입처명",
					"매입수량",
					"공급금액",
					"부가세",
					"총공급금액",
					"총공제금액",
					"업체수수료",
					"수탁관리수수료",
					"수탁관리부가세",
					"매취관리수수료",
					"물류수수료",
					"물류수수료부가세",
					"운송용역비용",
					"운송용역비부가세",
					"기타수수료",
					"기타수수료부가세",
					"매입장려금",
					"단가(계산)"
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"CLNTNM",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"COMP_FEE",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"BYNG_SSDY",
					"DANGA"
			};
			
			/**
			 * 빌링 마크 시작
			 */
			/*
			if(list != null && list.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : list) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			*/
			/**
			 * 빌링 마크 종료
			 */
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
			
			recadvService.downloadExcelRecadvSlpDetailList_WRS(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_상품별_엑셀상세");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);		
			searchMap.put("거래처코드", srhTrplC);
			searchMap.put("상품코드", wrs_code);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_세번째 그리드 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvSlpDetail2List_WRS")
	public void retrieveRecadvSlpDetail2List_WRS(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //매출일
		String fromDate = requestHelper.getParameter("from_date");  //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분
		String isNaAll = requestHelper.getParameter("is_na_all");  //농협사업장전체
		String naBzplc = requestHelper.getParameter("na_bzplc");  //실매입처
		String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		
		String wrs_code= requestHelper.getParameter("wrs_code");  //상품코드
		
		String MNGT_NA_TRPL_C= requestHelper.getParameter("MNGT_NA_TRPL_C"); //두번째 그리드 내에 실매입처명		
		
			
		try {
			
			PlatformData platformData = new PlatformData();
			
			List<Map<String, Object>> list = recadvService.retrieveRecadvSlpDetail2List_WRS(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C);
			
			if(list != null && list.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("ds_detail2");
				 dsHelper.addColumns(list.get(0).keySet());
				 for(Map<String, Object> map : list) {
					 dsHelper.setData(map);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			Map<String, Object> map = recadvService.retrieveRecadvSlpDetail2List_WRS_SUM(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,MNGT_NA_TRPL_C);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("ds_detail2_SUM");
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
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_세번째 그리드 엑셀 다운로드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpDetail2List_WRS")
	public void downloadExcelRecadvSlpDetail2List_WRS(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			String wrs_code= request.getParameter("wrs_code");  //상품코드
			
			/*List<Map<String, Object>> list = recadvService.downloadExcelRecadvSlpMasterList_WRS(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);
					
			
			String[] header = {
					"상품코드",
					"상품명",
					"규격",
					"면과세",
					"단가(계산)",
					"매입수량",
					"공급금액",
					"부가세",
					"총공급금액",
					"총공제금액",
					"업체수수료",
					"수탁관리수수료",
					"수탁관리부가세",
					"매취관리수수료",
					"물류수수료",
					"물류수수료부가세",
					"운송용역비용",
					"운송용역비부가세",
					"기타수수료",
					"기타수수료부가세",
					"매입장려금"		
			};
			String[] keyIndex = {
					"NA_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"TXT_DSC",
					"DANGA",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"COMP_FEE",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"BYNG_SSDY"
			};*/	
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"거래처코드",
					"거래처명",
					"매출일-전표번호",
					"검수일자",
					"지급예정일",
					"배송예정번호",
					"혁신구분",
					"PB직송여부",
					"실매입사업장코드",
					"실매입사업장명",
					"경제통합사업장코드",
					"사업장명",
					"공급유형",
					"계통계약구분",
					"전표일련번호",
					"경제통합상품코드",
					"생산년도",
					"상품명",
					"상품규격명",
					"과세구분코드명",
					"입고중량",
					"내품수량",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"매입금액",
					"수수료회계계정코드",
					"수수료회계계정명",
					"수수료",
					"수수료부가세",
					"수수료코드",
					"수수료명",
					"거래구분코드",
					"거래구분명",
					"정정취소구분",
					"정정취소구분명",
					"배송예정서작성자"
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"DVY_PLASH_CRT_DSC",
					"PBDDLY_YN",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",
					"NA_BZPLC",
					"NA_BZPLC_NM",
					"SPY_TPC",
					"ROTS_CTR_DSC",
					"SLP_SQNO",
					"NA_WRS_C",
					"PD_YY",
					"WRS_ABR_NM",
					"WRS_STDNM",
					"TXT_DSC",
					"BYNG_WT",
					"INPD_QT",
					"BYNG_UPR",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"BYAM",
					"FEE_ACG_ACCC",
					"ACCNM",
					"SPY_AM",
					"TXT_VAT",
					"NA_FEE_C",
					"FEENM",
					"NA_TR_DSC",
					"NA_TR_DSC_NM",
					"NA_CRC_CAN_DSC",
					"NA_CRC_CAN_DSC_NM",
					"FSRGMN_ENO"
			};
			
			
			/*List<Map<String, Object>> list_billing = recadvService.downloadExcelRecadvSlpMasterList_WRS_billing(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code);*/
			
			
			/**
			 * 빌링 마크 시작
			 */
			
			/*if(list_billing != null && list_billing.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : list_billing) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}*/
			
			/**
			 * 빌링 마크 종료
			 */
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvSlpDetail2List_WRS(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,naBzplc, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_상품별_엑셀상세_두번째");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);		
			searchMap.put("거래처코드", srhTrplC);
			searchMap.put("상품코드", wrs_code);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvSlpDetail2ListBilling_WRS(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,naBzplc);
			
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			/**
			 * 빌링 마크 종료
			 */
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
		
	}
	/*
	 * 화면ID : VAN_DS_SC_0530
	 * 화면설명 : 검수실적_상품별_세번째 그리드 엑셀 다운로드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpDetail3List_WRS")
	public void downloadExcelRecadvSlpDetail3List_WRS(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String fileName = request.getParameter("fileName");
		
		try {
			//첫번째 시트
			
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			String wrs_code= request.getParameter("wrs_code");  //상품코드
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"거래처코드",
					"거래처명",
					"매출일-전표번호",
					"검수일자",
					"지급예정일",
					"배송예정번호",
					"혁신구분",
					"PB직송여부",
					"실매입사업장코드",
					"실매입사업장명",
					"경제통합사업장코드",
					"사업장명",
					"공급유형",
					"계통계약구분",
					"전표일련번호",
					"경제통합상품코드",
					"생산년도",
					"상품명",
					"상품규격명",
					"과세구분코드명",
					"입고중량",
					"내품수량",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"매입금액",
					"수수료회계계정코드",
					"수수료회계계정명",
					"수수료",
					"수수료부가세",
					"수수료코드",
					"수수료명",
					"거래구분코드",
					"거래구분명",
					"정정취소구분",
					"정정취소구분명",
					"배송예정서작성자"
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"DVY_PLASH_CRT_DSC",
					"PBDDLY_YN",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",
					"NA_BZPLC",
					"NA_BZPLC_NM",
					"SPY_TPC",
					"ROTS_CTR_DSC",
					"SLP_SQNO",
					"NA_WRS_C",
					"PD_YY",
					"WRS_ABR_NM",
					"WRS_STDNM",
					"TXT_DSC",
					"BYNG_WT",
					"INPD_QT",
					"BYNG_UPR",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"BYAM",
					"FEE_ACG_ACCC",
					"ACCNM",
					"SPY_AM",
					"TXT_VAT",
					"NA_FEE_C",
					"FEENM",
					"NA_TR_DSC",
					"NA_TR_DSC_NM",
					"NA_CRC_CAN_DSC",
					"NA_CRC_CAN_DSC_NM",
					"FSRGMN_ENO"
			};
			
			/**
			 * 빌링 마크 종료
			 */
			
			
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvSlpDetail3List_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,naBzplc,handler);		

			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_상품별_엑셀상세_두번째");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);		
			searchMap.put("거래처코드", srhTrplC);
			searchMap.put("상품코드", wrs_code);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvSlpDetail3ListBilling_WRS(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc,wrs_code,naBzplc);
			
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			/**
			 * 빌링 마크 종료
			 */
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
		
	}
	
	
	
	/*
	 * 화면ID : VAN_DS_SC_0500
	 * 화면설명 : 검수실적_전표별_그리드_마스터
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvSlpMasterList")
	public void retrieveRecadvSlpMasterList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //매출일
		String fromDate = requestHelper.getParameter("from_date");  //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분
		String isNaAll = requestHelper.getParameter("is_na_all");  //농협사업장전체
		String naBzplc = requestHelper.getParameter("na_bzplc");  //실매입처
		String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		String cnfmYn = requestHelper.getParameter("cnfm_yn");  //확인여부

		try {
			
			PlatformData platformData = new PlatformData();
			
			
			
			//사후장려금은 매출일, 지급예정일만 조회가능하며, 거래구분 및 계통계약구분은 무조건 전체로 조회됨.		
			
			Map<String, Object> map = recadvService.getBlbSpyAm(TRPL_C_ARR, searchDateType, fromDate, toDate,tradeType,isNaAll, naBzplc,rotsCtrDsc);
			
			if(map != null) {
				 DataSetHelper dsHelper = new DataSetHelper("ds_blb_spy_am");
				 dsHelper.addColumns(map.keySet());
				 dsHelper.setData(map);
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			
			// Paging
			/*
			int totalRowCount = recadvService.getRecadvSlpCount(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			*/
			
			//total
			/*
			RecadvMasterVO totalVo= recadvService.getRecadvSlpTotal(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc);
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			dsTotalHelp.addColumns(RecadvMasterVO.class);
			dsTotalHelp.setData(totalVo);
			platformData.addDataSet(dsTotalHelp.getDataSet());//total
			*/			
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rcvM");
			dsHelper.addColumns(RecadvMasterVO.class);
			List<RecadvMasterVO> list = recadvService.retrieveRecadvSlpMasterList(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, cnfmYn, isNaAll, naBzplc,rotsCtrDsc,-1, -1);
			
			for(RecadvMasterVO vo : list) {
				dsHelper.setData(vo);
			}			
			
			platformData.addDataSet(dsHelper.getDataSet()); //grid
			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0500
	 * 화면설명 : 검수실적_전표별_그리드_디테일
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvSlpDetailList")
	public void retrieveRecadvSlpDetailList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
				
		String naBzplc = requestHelper.getParameter("na_bzplc"); //경제통합사업장코드
		String naTeamC = requestHelper.getParameter("na_team_c"); //경제통합팀코드
		String slpDt = requestHelper.getParameter("slp_dt");  //전표일자
		String naSlpno = requestHelper.getParameter("na_slpno"); //경제통합전표번호
		
		String rpyPlaDt = requestHelper.getParameter("rpy_pla_dt"); //경제통합전표번호
		
		//String SLP_SQNO = requestHelper.getParameter("trade_type"); //전표일련번호
		//String NA_WRS_C = requestHelper.getParameter("is_na_all"); //경제통합상품코드	
		
		//빌링
		BillingMarkUpTableName tableName = BillingMarkUpTableName.TB_BY_BYNG_M;
		
	    String GLN = requestHelper.getGlnCode();	    
	    String MD_ID = requestHelper.getUserID();    
	    
	    Map<String, String> pkMap = new HashMap<String, String>();
	    pkMap.put("NA_BZPLC", naBzplc);
	    pkMap.put("NA_TEAM_C", naTeamC);
	    pkMap.put("SLP_DT", slpDt);
	    pkMap.put("NA_SLPNO", naSlpno);
	    //pkMap.put("RPY_PLA_DT", rpyPlaDt);
	    
		try {
			
			PlatformData platformData = new PlatformData();
			
			//빌링
			billingMarkUpService.markUp(tableName, GLN, MD_ID, null, pkMap);
			
			// Paging
			int totalRowCount = recadvService.getRecadvSlpDetailCount(naBzplc, naTeamC, slpDt, naSlpno,rpyPlaDt);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rcvD");
			dsHelper.addColumns(RecadvDetailVO.class);
			List<RecadvDetailVO> list = recadvService.retrieveRecadvSlpDetailList(
					naBzplc, naTeamC, slpDt, naSlpno,rpyPlaDt,start, end);
			
			for(RecadvDetailVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			platformData.addDataSet(dsHelper.getDataSet()); //grid			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}	
	}
	
	
	private void markBilling(String GLN, String MD_ID, HashSet<DeduplicationObject> billingSet) {
		billingMarkUpService.markUpForRecadv(BillingMarkUpTableName.TB_BY_BYNG_M, GLN, MD_ID, billingSet);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0500
	 * 화면설명 : 검수실적_전표별_그리드_마스터	 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpMaster")
	public void downloadExcelRecadvSlpMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "검수실적_전표별_기준정보.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			String cnfmYn = request.getParameter("cnfm_yn");  //확인여부
			
			//두번째 시트			
			//String naBzplc = request.getParameter("na_bzplc"); //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c"); //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno"); //경제통합전표번호
			
			//세번째 그리드 조건
			//String naBzplc = request.getParameter("na_bzplc");
			//String naTeamC = request.getParameter("na_team_c");
			//String slpDt = request.getParameter("slp_dt");
			//String naSlpno = request.getParameter("na_slpno");
			long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"seq",
					"매출처 코드(협력업체)",
					"매출처 명",
					"매출일자 - 전표번호",
					"검수일자",
					"지급예정일",
					"실매입처(물류센터)",
					"실매입처명",
					"배송예정서 전표번호",
					"혁신구분",
					"PB직송여부",
					"거래구분",
					"정정취소구분",
					"계통구분",
					"공급금액",
					"부가세",
					"총공급금액",
					"총공제금액",
					"공병금액",
					"공상자금액",
					"순공급금액",
					"업체수수료",
					"관리수수료(R2)",
					"관리부가세(R2)",
					"관리수수료(R1)",
					"물류수수료",
					"물류부가세",
					"운송용역비",
					"운송부가세",
					"기타수수료",
					"기타수수료부가세",
					"매입장려금",
					"미수금",
					"선급금",
					"선급금이자",
					"보조금",
					"현금금액",
					"대체금액",
					"계좌이체금액",
					"외화금액",
					"검수구분금액",
					"배송예정서 작성자",
					"정산경제통합사업장코드",
					"경제통합정산처코드",
					"XML문서번호",
					"확인여부"
			};
			String[] keyIndex = {
					"SEQ",
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",
					"NA_DVY_PLASH_SLPNO",
					"DVY_PLASH_CRT_DSC",
					"PBDDLY_YN",
					"NA_TR_DSC",
					"NA_CRC_CAN_DSC",
					"ROTS_CTR_DSC",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"VCBT_AM",
					"VCBX_AM",
					"CBAM",
					"COMP_FEE",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"BYNG_SSDY",
					"ACRV",
					"PPYAM",
					"PPYAM_INT",
					"AST_SAM",
					"CSH_AM",
					"TFR_AM",
					"AC_FTR_AM",
					"FC_AM",
					"CNR_DS_AM",
					"FSRGMN_ENO",
					"ADJ_NA_BZPLC",
					"ADJ_NA_TRPL_C",
					"APPLICATION_ID",
					"CNFM_YN"
			};

			/**
			 * 빌링 마크 시작
			 */
			/*
			if(list != null && list.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : list) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			*/
			/**
			 * 빌링 마크 종료
			 */
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);	
			
			recadvService.downloadExcelRecadvSlpMaster(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_전표별");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);			
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합전표번호", naSlpno);
			searchMap.put("전표일련번호", slpSqno);			
			searchMap.put("거래처코드", srhTrplC);
			searchMap.put("확인여부", cnfmYn);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpMaster_Join")
	public void downloadExcelRecadvSlpMaster_Join(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "검수실적_전표별_기준정보.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			//두번째 시트			
			//String naBzplc = request.getParameter("na_bzplc"); //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c"); //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno"); //경제통합전표번호
			
			//세번째 그리드 조건
			//String naBzplc = request.getParameter("na_bzplc");
			//String naTeamC = request.getParameter("na_team_c");
			//String slpDt = request.getParameter("slp_dt");
			//String naSlpno = request.getParameter("na_slpno");
			long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"정정취소구분",
					"본/지사명",
					"배송예정서번호",
					"실매입처명",
					"검수일자",
					"매출일자-번호",
					"지급예정일",
					"공급금액 A",
					"부가세 B",
					"총공급금액 C=A+B+E+F",
					"총공제금액 D=P~Y",
					"공병금액 E",
					"공상자금액 F",
					"순공급금액 G=C-D",
					"거래구분 ",
					"계통구분 ",
					"본/지사코드 ",
					"실매입처(농협) ",
					"업체수수료 O=P+Q+R+S",
					"매입장려금 P",
					"관리수수료(R2) Q",
					"관리부가세(R2) R_D",
					"관리수수료(R1) S_D",
					"물류수수료 T_D",
					"물류부가세 U_D",
					"운송용역비 V_D",
					"운송부가세 W_D",
					"기타수수료 X_D",
					"기타부가세 Y_D",
					"배송예정작성자 ",
					"정산사업장코드 ",
					"정산처코드",
					"경제통합상품코드",
					"상품명",
					"과세구분",
					"총공급금액",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"상품규격",
					"공병상품코드",
					"공병수량",
					"공병단가",
					"내품수량",
					"생산년도",
					"입고중량",
					"상환예정일자",
					"전표",
					"수수료명",
					"수수료",
					"부가세"
			};
			String[] keyIndex = {
					"NA_CRC_CAN_DSC",
					"BCLNTNM",
					"NA_DVY_PLASH_SLPNO",
					"CCLNTNM",
					"CNR_DT",
					"TRSLPNO",
					"RPY_PLA_DT",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"VCBT_AM",
					"VCBX_AM",
					"CBAM",
					"NA_TR_DSC",
					"ROTS_CTR_DSC",
					"MNGT_NA_TRPL_C",
					"ACTL_BUYPL_NA_TRPL_C",
					"COMP_FEE",
					"BYNG_SSDY",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"FSRGMN_ENO",
					"ADJ_NA_BZPLC",
					"ADJ_NA_TRPL_C",
					"NA_WRS_C",
					"WRSNM",
					"TXT_DSC",
					"A.BYAM",
					"BYNG_UPR",
					"BYNG_QT",
					"A.BYAM - A.BYNG_VAT AS GAM_AM",
					"BYNG_VAT",
					"WRS_STDNM",
					"VCBT_NA_WRS_C",
					"VCBT_QT",
					"VCBT_AM/VCBT_QT AS VCBT_UPR",
					"INPD_QT",
					"PD_YY",
					"BYNG_WT",
					"RPY_PLA_DT",
					"SLP_SQNO",
					"FEENM",
					"SPY_AM_VAT",
					"TXT_VAT"
			};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
			
			recadvService.downloadExcelRecadvSlpMaster_Join(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_전표별");
			searchMap.put("일자구분", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);			
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합전표번호", naSlpno);
			searchMap.put("전표일련번호", slpSqno);			
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvSlpMasterBilling_Join(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno);
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("NA_BZPLC", vo.get("NA_BZPLC"));
					values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
					values.put("SLP_DT", vo.get("SLP_DT"));
					values.put("NA_SLPNO", vo.get("NA_SLPNO"));
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
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0500
	 * 화면설명 : 검수실적_전표별_그리드_디테일 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpDetail")
	public void downloadExcelRecadvSlpDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		/*
		String fileName = "검수실적_전표별_상세정보.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			//두번째 시트			
			//String naBzplc = request.getParameter("na_bzplc"); //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c"); //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno"); //경제통합전표번호
			String rpyPlaDt = request.getParameter("rpy_pla_dt"); //경제통합전표번호
			
			//세번째 그리드 조건
			//String naBzplc = request.getParameter("na_bzplc");
			//String naTeamC = request.getParameter("na_team_c");
			//String slpDt = request.getParameter("slp_dt");
			//String naSlpno = request.getParameter("na_slpno");
			long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"정정취소구분",
					"본/지사명",
					"배송예정서번호",
					"실매입처명",
					"검수일자",
					"매출일자-번호",
					"지급예정일",
					"공급금액 A",
					"부가세 B",
					"총공급금액 C=A+B+E+F",
					"총공제금액 D=P~Y",
					"공병금액 E",
					"공상자금액 F",
					"순공급금액 G=C-D",
					"거래구분 ",
					"계통구분 ",
					"본/지사코드 ",
					"실매입처(농협) ",
					"업체수수료 O=P+Q+R+S",
					"매입장려금 P",
					"관리수수료(R2) Q",
					"관리부가세(R2) R_D",
					"관리수수료(R1) S_D",
					"물류수수료 T_D",
					"물류부가세 U_D",
					"운송용역비 V_D",
					"운송부가세 W_D",
					"기타수수료 X_D",
					"기타부가세 Y_D",
					"배송예정작성자 ",
					"정산사업장코드 ",
					"정산처코드",
					"경제통합상품코드",
					"상품명",
					"과세구분",
					"총공급금액",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"상품규격",
					"공병상품코드",
					"공병수량",
					"공병단가",
					"내품수량",
					"생산년도",
					"입고중량",
					"상환예정일자",
					"전표",
					"수수료명",
					"수수료",
					"부가세"
			};
			String[] keyIndex = {
					"NA_CRC_CAN_DSC",
					"BCLNTNM",
					"NA_DVY_PLASH_SLPNO",
					"CCLNTNM",
					"CNR_DT",
					"TRSLPNO",
					"RPY_PLA_DT",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"VCBT_AM",
					"VCBX_AM",
					"CBAM",
					"NA_TR_DSC",
					"ROTS_CTR_DSC",
					"MNGT_NA_TRPL_C",
					"ACTL_BUYPL_NA_TRPL_C",
					"COMP_FEE",
					"BYNG_SSDY",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"FSRGMN_ENO",
					"ADJ_NA_BZPLC",
					"ADJ_NA_TRPL_C",
					"NA_WRS_C",
					"WRSNM",
					"TXT_DSC",
					"BYAM_D",
					"BYNG_UPR_D",
					"BYNG_QT_D",
					"GAM_AM_D",
					"BYNG_VAT_D",
					"WRS_STDNM",
					"VCBT_NA_WRS_C",
					"VCBT_QT",
					"VCBT_UPR",
					"INPD_QT",
					"PD_YY",
					"BYNG_WT",
					"RPY_PLA_DT",
					"SLP_SQNO",
					"FEENM",
					"SPY_AM_VAT",
					"TXT_VAT"
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvSlpDetail(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno,rpyPlaDt,handler);

			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_전표별");
			searchMap.put("매출일", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);			
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합전표번호", naSlpno);
			searchMap.put("전표일련번호", slpSqno);			
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvSlpDetailBilling(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno,rpyPlaDt);				
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("NA_BZPLC", vo.get("NA_BZPLC"));
					values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
					values.put("SLP_DT", vo.get("SLP_DT"));
					values.put("NA_SLPNO", vo.get("NA_SLPNO"));
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
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0500
	 * 화면설명 : 검수실적-전표별 전표 상품 수수료 합계  엑셀 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpCommisionSum")
	public void downloadExcelRecadvSlpCommisionSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		/*
		String fileName = "검수실적_전표별_전표_상품_수수료합계.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			String cnfmYn = request.getParameter("cnfm_yn");  //확인여부
			
			//두번째 시트			
			//String naBzplc = request.getParameter("na_bzplc"); //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c"); //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno"); //경제통합전표번호
			
			//세번째 그리드 조건
			//String naBzplc = request.getParameter("na_bzplc");
			//String naTeamC = request.getParameter("na_team_c");
			//String slpDt = request.getParameter("slp_dt");
			//String naSlpno = request.getParameter("na_slpno");
			long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"거래처코드",
					"거래처명",
					"매출일-전표번호",
					"검수일자",
					"지급예정일",
					"배송예정번호",
					"실매입사업장코드",
					"실매입사업장명",
					"경제통합사업장코드",
					"사업장명",
					"공급유형",
					"계통계약구분",
					"전표일련번호",
					"경제통합상품코드",
					"생산년도",
					"상품명",
					"상품규격명",
					"과세구분코드명",
					"입고중량",
					"내품수량",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"매입금액",
					"수수료",
					"수수료부가세",
					"거래구분코드",
					"거래구분명",
					"정정취소구분",
					"정정취소구분명",
					"혁신구분",
					"PB직송여부",
					"배송예정서작성자",
					"확인여부"
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",					
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",
					"NA_BZPLC",
					"BZPL_NM",
					"SPY_TPC",
					"ROTS_CTR_DSC",
					"SLP_SQNO",
					"NA_WRS_C",
					"PD_YY",
					"WRSNM",
					"WRS_STDNM",
					"TXT_DSC",
					"BYNG_WT",
					"INPD_QT",
					"BYNG_UPR",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"BYAM",
					"SPY_AM_VAT",
					"TXT_VAT",
					"NA_TR_DSC",
					"NA_TR_DSC_NM",
					"NA_CRC_CAN_DSC",
					"NA_CRC_CAN_DSC_NM",
					"DVY_PLASH_CRT_DSC",
					"PBDDLY_YN",
					"FSRGMN_ENO",
					"CNFM_YN"
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
			
			recadvService.downloadExcelRecadvSlpCommisionSum(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_전표별");
			searchMap.put("매출일", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);			
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합전표번호", naSlpno);
			searchMap.put("전표일련번호", slpSqno);			
			searchMap.put("거래처코드", srhTrplC);
			searchMap.put("확인여부", cnfmYn);
			handler.createSearchSheet(searchMap);			
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvSlpCommisionSumBilling(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn);
			/**
			 * 빌링 마크 시작
			 */
			
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			
			/**
			 * 빌링 마크 종료
			 */
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0500
	 * 화면설명 : 검수실적-전표별 전표 상품 수수료 상세  엑셀 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvSlpCommisionDetail")
	public void downloadExcelRecadvSlpCommisionDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "검수실적_전표별_전표_상품_수수료상세.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			String cnfmYn = request.getParameter("cnfm_yn");  //확인여부
			
			//두번째 시트			
			//String naBzplc = request.getParameter("na_bzplc"); //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c"); //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno"); //경제통합전표번호
			
			//세번째 그리드 조건
			//String naBzplc = request.getParameter("na_bzplc");
			//String naTeamC = request.getParameter("na_team_c");
			//String slpDt = request.getParameter("slp_dt");
			//String naSlpno = request.getParameter("na_slpno");
			long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"거래처코드",
					"거래처명",
					"매출일-전표번호",
					"검수일자",
					"지급예정일",
					"배송예정번호",
					"실매입사업장코드",
					"실매입사업장명",
					"경제통합사업장코드",
					"사업장명",
					"공급유형",
					"계통계약구분",
					"전표일련번호",
					"경제통합상품코드",
					"생산년도",
					"상품명",
					"상품규격명",
					"과세구분코드명",
					"입고중량",
					"내품수량",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"매입금액",
					/*"수수료회계계정코드",
					"수수료회계계정명",*/
					"수수료",
					"수수료부가세",
					"수수료코드",
					"수수료명",
					"거래구분코드",
					"거래구분명",
					"정정취소구분",
					"정정취소구분명",
					"혁신구분",
					"PB직송여부",
					"배송예정서작성자",
					"확인여부"
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",					
					"NA_BZPLC",
					"BZPL_NM",
					"SPY_TPC",
					"ROTS_CTR_DSC",
					"SLP_SQNO",
					"NA_WRS_C",
					"PD_YY",
					"WRSNM",
					"WRS_STDNM",
					"TXT_DSC",
					"BYNG_WT",
					"INPD_QT",
					"BYNG_UPR",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"BYAM",
/*					"FEE_ACG_ACCC",
					"FEE_ACG_ACCC_NM",*/
					"SPY_AM_VAT",
					"TXT_VAT",
					"NA_FEE_C",
					"FEENM",
					"NA_TR_DSC",
					"NA_TR_DSC_NM",
					"NA_CRC_CAN_DSC",
					"NA_CRC_CAN_DSC_NM",
					"DVY_PLASH_CRT_DSC",
					"PBDDLY_YN",
					"FSRGMN_ENO",
					"CNFM_YN"
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvSlpCommisionDetail(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn, handler);
				
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_전표별");
			searchMap.put("매출일", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);			
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합전표번호", naSlpno);
			searchMap.put("전표일련번호", slpSqno);			
			searchMap.put("거래처코드", srhTrplC);
			searchMap.put("확인여부", cnfmYn);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvSlpCommisionDetailBilling(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, cnfmYn);
				
			/**
			 * 빌링 마크 시작
			 */
			
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			
			/**
			 * 빌링 마크 종료
			 */
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0510
	 * 화면설명 : 검수실적_직송분_그리드_마스터
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvDdlyMasterList")
	 public void retrieveRecadvDdlyMasterList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		String searchDateType = requestHelper.getParameter("search_date_type");  //매출일
		String fromDate = requestHelper.getParameter("from_date");  //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String tradeType = requestHelper.getParameter("trade_type");  //거래구분		
		String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분
		
		String naBzplc = requestHelper.getParameter("na_bzplc");  //물류센터-실매입처	
		
		String isNaAll = requestHelper.getParameter("is_na_all");  //농협사업장전체		
		String ddlyBuyplNaTrplC = requestHelper.getParameter("ddly_buypl_na_trpl_c");  //직송실매입처
		
		String chkCommision = requestHelper.getParameter("chk_commision");  //전표단위수수료
			
		try {
			
			PlatformData platformData = new PlatformData();
			
			// Paging
			int totalRowCount = recadvService.getRecadvDdlyCount(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType,isNaAll,naBzplc, rotsCtrDsc,ddlyBuyplNaTrplC);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			//total
			RecadvDirectMasterVO totalVo= recadvService.getRecadvDdlyTotal(TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType,isNaAll,naBzplc, rotsCtrDsc,ddlyBuyplNaTrplC);
			DataSetHelper dsTotalHelp = new DataSetHelper("ds_dataTotal");
			dsTotalHelp.addColumns(RecadvDirectMasterVO.class);
			dsTotalHelp.setData(totalVo);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rcv_dir_M");
			dsHelper.addColumns(RecadvDirectMasterVO.class);
			List<RecadvDirectMasterVO> list = recadvService.retrieveRecadvDdlyMasterList(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType,isNaAll,naBzplc, rotsCtrDsc,ddlyBuyplNaTrplC,start,end);
			
			for(RecadvDirectMasterVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsTotalHelp.getDataSet());//total
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			platformData.addDataSet(dsHelper.getDataSet()); //grid
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}		
	 }
	
	/*
	 * 화면ID : VAN_DS_SC_0510
	 * 화면설명 : 검수실적_직송분_그리드_디테일
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvDdlyDetailList")
	public void retrieveRecadvDdlyDetailList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
				
		String naBzplc = requestHelper.getParameter("na_bzplc"); //경제통합사업장코드
		String naTeamC = requestHelper.getParameter("na_team_c"); //경제통합팀코드
		String slpDt = requestHelper.getParameter("slp_dt");  //전표일자
		String naSlpno = requestHelper.getParameter("na_slpno"); //경제통합전표번호
		String rpyPlaDt = requestHelper.getParameter("rpy_pla_dt"); //경제통합전표번호

		//빌링
		BillingMarkUpTableName tableName = BillingMarkUpTableName.TB_BY_BYNG_M;
		
	    String GLN = requestHelper.getGlnCode();	    
	    String MD_ID = requestHelper.getUserID();    
	    
	    Map<String, String> pkMap = new HashMap<String, String>();
	    pkMap.put("NA_BZPLC", naBzplc);
	    pkMap.put("NA_TEAM_C", naTeamC);
	    pkMap.put("SLP_DT", slpDt);
	    pkMap.put("NA_SLPNO", naSlpno);
	      
		try {
			
			PlatformData platformData = new PlatformData();
			
			//빌링
			billingMarkUpService.markUp(tableName, GLN, MD_ID, null, pkMap);	        	
			
			// Paging
			int totalRowCount = recadvService.getRecadvDdlyDetailCount(naBzplc, naTeamC, slpDt, naSlpno);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();			
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rcv_dir_D");
			dsHelper.addColumns(RecadvDetailVO.class);
			List<RecadvDirectDetailVO> list = recadvService.retrieveRecadvDdlyDetailList(
					naBzplc, naTeamC, slpDt, naSlpno,rpyPlaDt, start, end);
			
			for(RecadvDirectDetailVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			platformData.addDataSet(dsHelper.getDataSet());			
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}	
	}

	/*
	 * 화면ID : VAN_DS_SC_0510
	 * 화면설명 : 검수실적_직송분_물류센터_콤보
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/getDdlyNABizPlace")
	public void getDdlyNABizPlace(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String splrNaTrplC = requestHelper.getParameter("splr_na_trpl_c");
			
		PlatformData platformData = new PlatformData();
		if(StringUtils.isNotEmpty(splrNaTrplC)) {
			DataSetHelper dsHelper = new DataSetHelper("data");
			dsHelper.addColumns(TbCmBzplVO.class);
			
			List<TbCmBzplVO> voList = recadvService.getDdlyNABizPlace(splrNaTrplC);
			for(TbCmBzplVO vo : voList) {
				dsHelper.setData(vo);
			}
		    platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} else {
			sendData(response, platformData, -1, "Do not have splr_na_trpl_c key");
		}        
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0510
	 * 화면설명 : 검수실적_직송분_그리드_마스터	 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvDdlyMaster")
	public void downloadExcelRecadvDdlyMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "검수실적_직송분_기준정보.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			String naBzplc = request.getParameter("na_bzplc");  //물류센터-실매입처	
			
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체		
			String ddlyBuyplNaTrplC = request.getParameter("ddly_buypl_na_trpl_c");  //직송실매입처
			
			String chkCommision = request.getParameter("chk_commision");  //전표단위수수료
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"seq",
					"매출처 코드(협력업체)",
					"매출처 명",
					"매출일자 - 전표번호",
					"검수일자",
					"지급예정일",
					"실매입처(물류센터)",
					"실매입처명",
					"배송예정서 전표번호",
					"거래구분",
					"정정취소구분",
					"계통구분",
					"공급금액",
					"부가세",
					"총공급금액",
					"총공제금액",
					"공병금액",
					"공상자금액",
					"순공급금액",
					"업체수수료",
					"관리수수료(R2)",
					"관리부가세(R2)",
					"관리수수료(R1)",
					"물류수수료",
					"물류부가세",
					"운송용역비",
					"운송부가세",
					"기타수수료",
					"기타수수료부가세",
					"매입장려금",
					"미수금",
					"선급금",
					"선급금이자",
					"보조금",
					"현금금액",
					"대체금액",
					"계좌이체금액",
					"외화금액",
					"검수구분금액",
					"직송실매입처(마트)",
					"직송실매입처명",
					"배송예정서 작성자",
					"XML 문서번호"
			};
			String[] keyIndex = {
					"SEQ",
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",
					"NA_DVY_PLASH_SLPNO",
					"NA_TR_DSC",
					"NA_CRC_CAN_DSC",
					"ROTS_CTR_DSC",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"VCBT_AM",
					"VCBX_AM",
					"CBAM",
					"COMP_FEE",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"BYNG_SSDY",
					"ACRV",
					"PPYAM",
					"PPYAM_INT",
					"AST_SAM",
					"CSH_AM",
					"TFR_AM",
					"AC_FTR_AM",
					"FC_AM",
					"CNR_DS_AM",
					"DDLY_BUYPL_NA_TRPL_C",
					"DDLY_CCLNTNM",
					"FSRGMN_ENO",
					"APPLICATION_ID"
			};
			
			/**
			 * 빌링 마크 시작
			 */
			/*
			if(list != null && list.size() > 0) {				
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : list) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			*/
			/**
			 * 빌링 마크 종료
			 */
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvDdlyMaster(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType,isNaAll,naBzplc, rotsCtrDsc,ddlyBuyplNaTrplC,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_직송분");
			searchMap.put("매출일", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);			
			searchMap.put("직송실매입처", ddlyBuyplNaTrplC);		
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);

			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvDdlyMaster_Join")
	public void downloadExcelRecadvDdlyMaster_Join(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "검수실적_직송분_기준정보.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분		
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			String naBzplc = request.getParameter("na_bzplc");  //물류센터-실매입처	
			
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체		
			String ddlyBuyplNaTrplC = request.getParameter("ddly_buypl_na_trpl_c");  //직송실매입처
			
			String chkCommision = request.getParameter("chk_commision");  //전표단위수수료
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"본/지사명",
					"배송예정서번호",
					"물류센터명",
					"직송실매입처명",
					"검수일자",
					"매출일자-번호",
					"지급예정일",
					"공급금액 A",
					"부가세 B",
					"총공급금액 C=A+B+E+F",
					"총공제금액 D=P~Y",
					"공병금액 E",
					"공상자금액 F",
					"순공급금액 G=C-D",
					"거래구분 ",
					"정정취소구분 ",
					"계통구분 ",
					"본/지사코드 ",
					"물류센터",
					"직송실매입처",
					"업체수수료 O=P+Q+R+S",
					"매입장려금 P",
					"관리수수료(R2) Q",
					"관리부가세(R2) R",
					"관리수수료(R1) S",
					"물류수수료 T",
					"물류부가세 U",
					"운송용역비 V",
					"운송부가세 W",
					"기타수수료 X",
					"기타부가세 Y",
					"배송예정작성자",
					"경제통합상품코드",
					"생산년도",
					"상품명",
					"과세구분",
					"총공급금액",
					"입고중량",
					"내품수량",
					"매입단가",
					"매입수량",
					"공급금액",
					"부가세",
					"상품규격",
					"전표",
					"수수료명",
					"수수료",
					"부가세"
			};
			String[] keyIndex = {
					"BCLNTNM",
					"NA_DVY_PLASH_SLPNO",
					"CCLNTNM",
					"DDLY_CCLNTNM",
					"CNR_DT",
					"TRSLPNO",
					"RPY_PLA_DT",
					"GAM_AM",
					"BYNG_VAT",
					"TOT_GAM",
					"CHRG_TOT",
					"VCBT_AM",
					"VCBX_AM",
					"CBAM",
					"NA_TR_DSC",
					"NA_CRC_CAN_DSC",
					"ROTS_CTR_DSC",
					"MNGT_NA_TRPL_C",
					"ACTL_BUYPL_NA_TRPL_C",
					"DDLY_BUYPL_NA_TRPL_C",
					"COMP_FEE",
					"BYNG_SSDY",
					"ETR_AMN_FEE",
					"ETR_AMN_VAT",
					"SLGT_AMN_FEE",
					"PHD_FEE",
					"PHD_FEE_VAT",
					"TRP_SVC_CST",
					"TRP_SVCOS_VAT",
					"ETC_FEE",
					"ETC_FEE_VAT",
					"FSRGMN_ENO",
					"NA_WRS_C",
					"PD_YY",
					"WRSNM",
					"TXT_DSC",
					"BYAM",
					"BYNG_WT",
					"INPD_QT",
					"BYNG_UPR",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"WRS_STDNM",
					"SLP_SQNO",
					"FEENM",
					"SPY_AM_VAT",
					"TXT_VAT"				
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvDdlyMaster_Join(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType,isNaAll,naBzplc, rotsCtrDsc,ddlyBuyplNaTrplC,handler);
			

			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_직송분");
			searchMap.put("매출일", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("계통계약구분", rotsCtrDsc);			
			searchMap.put("직송실매입처", ddlyBuyplNaTrplC);		
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);

			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvDdlyMasterBilling_Join(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType,isNaAll,naBzplc, rotsCtrDsc,ddlyBuyplNaTrplC);
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("NA_BZPLC", vo.get("NA_BZPLC"));
					values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
					values.put("SLP_DT", vo.get("SLP_DT"));
					values.put("NA_SLPNO", vo.get("NA_SLPNO"));
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
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0510
	 * 화면설명 : 검수실적-직송분 전표 상품 수수료 합계  엑셀 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvDdlyCommisionSum")
	public void downloadExcelRecadvDdlyCommisionSum(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*		String fileName = "검수실적_직송분_전표_상품_수수료합계.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			//두번째 시트			
			//String naBzplc = request.getParameter("na_bzplc"); //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c"); //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno"); //경제통합전표번호
			
			//세번째 그리드 조건
			//String naBzplc = request.getParameter("na_bzplc");
			//String naTeamC = request.getParameter("na_team_c");
			//String slpDt = request.getParameter("slp_dt");
			//String naSlpno = request.getParameter("na_slpno");
			long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush					
			
			String[] header = {
					"거래처코드",
					"거래처명",
					"매출일-전표번호",
					"검수일자",
					"지급예정일",
					"배송예정번호",
					"실매입사업장코드",
					"실매입사업장명",
					"직송실매입사업장코드",
					"직송실매입사업장명",
					"경제통합사업장코드",
					"사업장명",
					"공급유형",
					"계통계약구분",
					"전표일련번호",
					"경제통합상품코드",
					"생산년도",
					"상품명",
					"상품규격명",
					"과세구분코드명",
					"입고중량",
					"내품수량",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"매입금액",
					"수수료",
					"수수료부가세",
					"거래구분코드",
					"거래구분명",
					"정정취소구분",
					"정정취소구분명",
					"배송예정서작성자"
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",	
					"DDLY_BUYPL_NA_TRPL_C",
					"DDLY_CCLNTNM",				
					"NA_BZPLC",
					"BZPL_NM",
					"SPY_TPC",
					"ROTS_CTR_DSC",
					"SLP_SQNO",
					"NA_WRS_C",
					"PD_YY",
					"WRSNM",
					"WRS_STDNM",
					"TXT_DSC",
					"BYNG_WT",
					"INPD_QT",
					"BYNG_UPR",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"BYAM",
					"SPY_AM_VAT",
					"TXT_VAT",
					"NA_TR_DSC",
					"NA_TR_DSC_NM",
					"NA_CRC_CAN_DSC",
					"NA_CRC_CAN_DSC_NM",
					"FSRGMN_ENO"					
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvDdlyCommisionSum(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, handler);		

			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_직송분");
			searchMap.put("매출일", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("계통계약구분", rotsCtrDsc);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합전표번호", naSlpno);
			searchMap.put("전표일련번호", slpSqno);						
			searchMap.put("거래처코드", srhTrplC);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvDdlyCommisionSumBilling(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno);
			/**
			 * 빌링 마크 시작
			 */
			
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			
			/**
			 * 빌링 마크 종료
			 */
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0510
	 * 화면설명 : 검수실적-직송분 전표 상품 수수료 상세  엑셀 다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRecadvDdlyCommisionDetail")
	public void downloadExcelRecadvDdlyCommisionDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		/*
		String fileName = "검수실적_직송분_전표_상품_수수료상세.xls";
		
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
			String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
			
			String searchDateType = request.getParameter("search_date_type");  //매출일
			String fromDate = request.getParameter("from_date");  //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String tradeType = request.getParameter("trade_type");  //거래구분
			String isNaAll = request.getParameter("is_na_all");  //농협사업장전체
			String naBzplc = request.getParameter("na_bzplc");  //실매입처
			String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분
			
			//두번째 시트			
			//String naBzplc = request.getParameter("na_bzplc"); //경제통합사업장코드
			String naTeamC = request.getParameter("na_team_c"); //경제통합팀코드
			String slpDt = request.getParameter("slp_dt");  //전표일자
			String naSlpno = request.getParameter("na_slpno"); //경제통합전표번호
			
			//세번째 그리드 조건
			//String naBzplc = request.getParameter("na_bzplc");
			//String naTeamC = request.getParameter("na_team_c");
			//String slpDt = request.getParameter("slp_dt");
			//String naSlpno = request.getParameter("na_slpno");
			long slpSqno = StringUtil.sTol(requestHelper.getParameter("slp_sqno"),0L);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"거래처코드",
					"거래처명",
					"매출일-전표번호",
					"검수일자",
					"지급예정일",
					"배송예정번호",
					"실매입사업장코드",
					"실매입사업장명",
					"직송실매입사업장코드",
					"직송실매입사업장명",
					"경제통합사업장코드",
					"사업장명",
					"공급유형",
					"계통계약구분",
					"전표일련번호",
					"경제통합상품코드",
					"생산년도",
					"상품명",
					"상품규격명",
					"과세구분코드명",
					"입고중량",
					"내품수량",
					"매입단가",
					"매입수량",
					"공급금액",
					"매입부가세",
					"매입금액",
					/*
					"수수료회계계정코드",
					"수수료회계계정명",
					*/
					"수수료",
					"수수료부가세",
					"수수료코드",
					"수수료명",
					"거래구분코드",
					"거래구분명",
					"정정취소구분",
					"정정취소구분명",
					"배송예정서작성자"
			};
			String[] keyIndex = {
					"ACTL_BUYPL_NA_TRPL_C",
					"CCLNTNM",
					"TRSLPNO",
					"CNR_DT",
					"RPY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"MNGT_NA_TRPL_C",
					"BCLNTNM",
					"DDLY_BUYPL_NA_TRPL_C",
					"DDLY_CCLNTNM",
					"NA_BZPLC",
					"BZPL_NM",
					"SPY_TPC",
					"ROTS_CTR_DSC",
					"SLP_SQNO",
					"NA_WRS_C",
					"PD_YY",
					"WRSNM",
					"WRS_STDNM",
					"TXT_DSC",
					"BYNG_WT",
					"INPD_QT",
					"BYNG_UPR",
					"BYNG_QT",
					"GAM_AM",
					"BYNG_VAT",
					"BYAM",
					/*
					"FEE_ACG_ACCC",
					"FEE_ACG_ACCC_NM",
					*/
					"SPY_AM_VAT",
					"TXT_VAT",
					"NA_FEE_C",
					"FEENM",
					"NA_TR_DSC",
					"NA_TR_DSC_NM",
					"NA_CRC_CAN_DSC",
					"NA_CRC_CAN_DSC_NM",
					"FSRGMN_ENO"
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			recadvService.downloadExcelRecadvDdlyCommisionDetail(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "검수실적_직송분");
			searchMap.put("매출일", searchDateType);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("거래구분", tradeType);
			searchMap.put("계통계약구분", rotsCtrDsc);
			searchMap.put("농협사업장전체", isNaAll);
			searchMap.put("실매입처", naBzplc);
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("전표일자", slpDt);
			searchMap.put("경제통합전표번호", naSlpno);
			searchMap.put("전표일련번호", slpSqno);						
			searchMap.put("거래처코드", srhTrplC);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = recadvService.downloadExcelRecadvDdlyCommisionDetailBilling(
					TRPL_C_ARR, searchDateType, fromDate, toDate, tradeType, isNaAll, naBzplc,rotsCtrDsc, naTeamC, slpDt, naSlpno, slpSqno);
			/**
			 * 빌링 마크 시작
			 */
			
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					if(vo.get("NA_BZPLC") != null && vo.get("NA_TEAM_C") != null && vo.get("SLP_DT") != null && vo.get("NA_SLPNO") != null){
						LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
						values.put("NA_BZPLC", vo.get("NA_BZPLC"));
						values.put("NA_TEAM_C", vo.get("NA_TEAM_C"));
						values.put("SLP_DT", vo.get("SLP_DT"));
						values.put("NA_SLPNO", vo.get("NA_SLPNO"));
						DeduplicationObject ddo = new DeduplicationObject(values);
						billingSet.add(ddo);
					}
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBilling(GLN, MD_ID, billingSet);
			}
			
			/**
			 * 빌링 마크 종료
			 */
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}	
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0500
	 *  화면설명 : 검수실적_전표별_그리드_마스터 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/recadv/printRecadvSlpMasterList")
	public RestResult printRecadvSlpMasterList(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C, String TRPL_C_TEXT, String search_date_type, String from_date, String to_date,
			String trade_type, String is_na_all,	String na_bzplc, String rots_ctr_dsc,
			String search_date_type_name,String trade_type_name, String rots_ctr_dsc_name, String sName, String cnfm_yn, String cnfm_yn_name){
				
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
					
			if(StringUtils.isNotEmpty(trade_type_name)) trade_type_name = trade_type_name.replace("- 전체 -","전체");
			else trade_type_name = "";
						
			if(StringUtils.isNotEmpty(rots_ctr_dsc)) rots_ctr_dsc = rots_ctr_dsc.replace("all","");
			else rots_ctr_dsc = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc_name)) rots_ctr_dsc_name = rots_ctr_dsc_name.replace("- 전체 -","전체");
			else rots_ctr_dsc_name = "";
			
			String from_date_t = "";
			String to_date_t = "";
			
			if(StringUtils.isNotEmpty(from_date)) from_date_t = from_date.substring(0,4)+"-"+from_date.substring(4,6)+"-"+from_date.substring(6,8);  //조회시작일자
			else from_date_t = "";
			if(StringUtils.isNotEmpty(to_date)) to_date_t = to_date.substring(0,4)+"-"+to_date.substring(4,6)+"-"+to_date.substring(6,8);  //조회종료일자
			else to_date_t = "";
			
			if(StringUtils.isNotEmpty(cnfm_yn_name)) cnfm_yn_name = cnfm_yn_name.replace("- 전체 -","전체");
			else cnfm_yn_name = "";
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));			
			_title.put("search", TRPL_C_TEXT+", 일자구분:"+search_date_type_name+", 거래구분:"+trade_type_name
					+", 계통계약["+rots_ctr_dsc+"] "+rots_ctr_dsc_name+", 농협사업장:"+" 실매출처 : "+na_bzplc+", 조회기간:"+from_date_t+" - "+to_date_t+", 확인여부:"+cnfm_yn_name);			
			title.add(_title);			
			
			//리스트(필요한것만 필터링)
			
			List<RecadvMasterVO> volist = recadvService.retrieveRecadvSlpMasterList(
					TRPL_C_ARR, search_date_type, from_date, to_date, trade_type, cnfm_yn, is_na_all, na_bzplc,rots_ctr_dsc,-1, -1);
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(RecadvMasterVO vo : volist){
				Map<String,Object> map = new HashMap<String, Object>();			
				
				//row1
				String BCLNTNM = StringUtil.toString(vo.getBCLNTNM());
				String MNGT_NA_TRPL_C = StringUtil.toString(vo.getMNGT_NA_TRPL_C());
				String CNR_DT = StringUtil.toString(vo.getCNR_DT());				
				String RPY_PLA_DT = StringUtil.toString(vo.getRPY_PLA_DT());
				long GAM_AM = vo.getGAM_AM();
				long BYNG_VAT = vo.getBYNG_VAT();				
				long TOT_GAM = vo.getTOT_GAM();
				long CHRG_TOT = vo.getCHRG_TOT();
				long CBAM = vo.getCBAM();

				//row 2
				String CCLNTNM = StringUtil.toString(vo.getCCLNTNM());
				String ACTL_BUYPL_NA_TRPL_C = StringUtil.toString(vo.getACTL_BUYPL_NA_TRPL_C());				
				String NA_TR_DSC = StringUtil.toString(vo.getNA_TR_DSC()); //거래구분				
				String NA_CRC_CAN_DSC = StringUtil.toString(vo.getNA_CRC_CAN_DSC());
				long VCBT_AM = vo.getVCBT_AM();
				long ETR_AMN_FEE = vo.getETR_AMN_FEE();
				long SLGT_AMN_FEE = vo.getSLGT_AMN_FEE();
				long PHD_FEE = vo.getPHD_FEE();
				long TRP_SVC_CST = vo.getTRP_SVC_CST();
				long ETC_FEE = vo.getETC_FEE();

				//row3
				String TRSLPNO = StringUtil.toString(vo.getTRSLPNO());
				String NA_SLPNO = StringUtil.toString(vo.getNA_SLPNO());
				String ROTS_CTR_DSC  = StringUtil.toString(vo.getROTS_CTR_DSC());
				long VCBX_AM = vo.getVCBT_AM();
				long ETR_AMN_VAT = vo.getETR_AMN_VAT();
				long COMP_FEE = vo.getCOMP_FEE();
				long PHD_FEE_VAT = vo.getPHD_FEE_VAT();
				long TRP_SVCOS_VAT = vo.getTRP_SVCOS_VAT();
				long ETC_FEE_VAT = vo.getETC_FEE_VAT();
				String CNFM_YN = vo.getCNFM_YN();
	
				map.put("BCLNTNM",BCLNTNM);
				map.put("MNGT_NA_TRPL_C",MNGT_NA_TRPL_C);
				map.put("CNR_DT",CNR_DT);
				map.put("RPY_PLA_DT",RPY_PLA_DT);
				map.put("GAM_AM",GAM_AM);
				map.put("BYNG_VAT",BYNG_VAT);
				map.put("TOT_GAM",TOT_GAM);
				map.put("CHRG_TOT",CHRG_TOT);
				map.put("CBAM",CBAM);
				map.put("CCLNTNM",CCLNTNM);
				map.put("ACTL_BUYPL_NA_TRPL_C",ACTL_BUYPL_NA_TRPL_C);
				map.put("NA_TR_DSC",NA_TR_DSC);
				map.put("NA_CRC_CAN_DSC",NA_CRC_CAN_DSC);
				map.put("VCBT_AM",VCBT_AM);
				map.put("ETR_AMN_FEE",ETR_AMN_FEE);
				map.put("SLGT_AMN_FEE",SLGT_AMN_FEE);
				map.put("PHD_FEE",PHD_FEE);
				map.put("TRP_SVC_CST",TRP_SVC_CST);
				map.put("ETC_FEE",ETC_FEE);
				map.put("TRSLPNO",TRSLPNO);
				map.put("NA_SLPNO",NA_SLPNO);
				map.put("ROTS_CTR_DSC",ROTS_CTR_DSC);
				map.put("VCBX_AM",VCBX_AM);
				map.put("ETR_AMN_VAT",ETR_AMN_VAT);
				map.put("COMP_FEE",COMP_FEE);
				map.put("PHD_FEE_VAT",PHD_FEE_VAT);
				map.put("TRP_SVCOS_VAT",TRP_SVCOS_VAT);
				map.put("ETC_FEE_VAT",ETC_FEE_VAT);
				map.put("CNFM_YN",CNFM_YN);
				list.add(map);
			}
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(title);					
			all_list.add(list);
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0500
	 *  화면설명 : 검수실적_전표별_그리드_디테일 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/recadv/printRecadvSlpDetailList")
	public RestResult printRecadvSlpDetailList(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C, String TRPL_C_TEXT, String search_date_type, String from_date, String to_date,
			String trade_type, String rots_ctr_dsc,
			String search_date_type_name,String trade_type_name, String rots_ctr_dsc_name,
			String ACTL_BUYPL_NA_TRPL_C,String CCLNTNM, String TRSLPNO, String NA_DVY_PLASH_SLPNO,
			String na_bzplc, String na_team_c, String slp_dt, String na_slpno, String rpy_pla_dt, String sName){
						
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			if(StringUtils.isNotEmpty(trade_type_name)) trade_type_name = trade_type_name.replace("- 전체 -","전체");
			else trade_type_name = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc)) rots_ctr_dsc = rots_ctr_dsc.replace("all","");
			else rots_ctr_dsc = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc_name)) rots_ctr_dsc_name = rots_ctr_dsc_name.replace("- 전체 -","전체");
			else rots_ctr_dsc_name = "";
			
			String from_date_t = "";
			String to_date_t = "";
			
			if(StringUtils.isNotEmpty(from_date)) from_date_t = from_date.substring(0,4)+"-"+from_date.substring(4,6)+"-"+from_date.substring(6,8);  //조회시작일자
			else from_date_t = "";
			if(StringUtils.isNotEmpty(to_date)) to_date_t = to_date.substring(0,4)+"-"+to_date.substring(4,6)+"-"+to_date.substring(6,8);  //조회종료일자
			else to_date_t = "";
			
			List<Map<String,Object>> billingList	= new ArrayList<Map<String,Object>>();
			Map<String,Object> _billing 		= new LinkedHashMap<String, Object>();
			String billingKey = requestHelper.getUserID()+DateUtil.getCurrentDate().getTime();
			_billing.put("billingKey", billingKey);
			billingList.add(_billing);
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));			
			_title.put("search", TRPL_C_TEXT+", 일자구분:"+search_date_type_name+", 거래구분:"+trade_type_name
					+", 계통계약["+rots_ctr_dsc+"] "+rots_ctr_dsc_name+", 농협사업장:"+ACTL_BUYPL_NA_TRPL_C+" "+CCLNTNM+", 조회기간:"+from_date_t+" - "+to_date_t
					+", 매출일자-전표번호:"+TRSLPNO+", 배송예정서번호:"+NA_DVY_PLASH_SLPNO);
			title.add(_title);

			//리스트(필요한것만 필터링)
			
			List<RecadvDetailVO> volist = recadvService.retrieveRecadvSlpDetailList( na_bzplc, na_team_c, slp_dt, na_slpno,rpy_pla_dt,-1, -1);
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(RecadvDetailVO vo : volist){
				Map<String,Object> map = new HashMap<String, Object>();			
					
				map.put("NA_WRS_C",StringUtil.toString(vo.getNA_WRS_C()));
				map.put("WRSNM",StringUtil.toString(vo.getWRSNM()));
				map.put("PD_YY",StringUtil.toString(vo.getPD_YY()));
				map.put("NA_WRS_UNT_C",StringUtil.toString(vo.getNA_WRS_UNT_C()));
				map.put("TXT_DSC",StringUtil.toString(vo.getTXT_DSC()));
				map.put("BYNG_WT",StringUtil.toString(vo.getBYNG_WT()));
				map.put("INPD_QT",StringUtil.toString(vo.getINPD_QT()));
				map.put("BYNG_UPR",StringUtil.toString(vo.getBYNG_UPR()));
				map.put("BYNG_QT",StringUtil.toString(vo.getBYNG_QT()));
				map.put("GAM_AM",StringUtil.toString(vo.getGAM_AM()));
				map.put("BYNG_VAT",StringUtil.toString(vo.getBYNG_VAT()));
				map.put("BYNG_AM",StringUtil.toString(vo.getBYNG_AM()));

				list.add(map);
			}
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			
			/**
			 * 빌링 마크 시작
			 */
			if(list != null && list.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(RecadvDetailVO vo : volist) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("NA_BZPLC", vo.getNA_BZPLC());
					values.put("NA_TEAM_C", vo.getNA_TEAM_C());
					values.put("SLP_DT", vo.getSLP_DT());
					values.put("NA_SLPNO", vo.getNA_SLPNO());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				BillingMarkVO markVo = new BillingMarkVO(
						BillingMarkUpTableName.TB_BY_BYNG_M, 
						GLN, MD_ID, billingSet);
				FileUtil.writeToObject(
						Configurer.getProperty("file.temp.path")+File.separator+billingKey,
						markVo);
			}
			/**
			 * 빌링 마크 종료
			 */
			all_list.add(billingList);			
			
			all_list.add(title);						
			all_list.add(list);
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0500_P01
	 *  화면설명 : 전표별 수수료내역 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/recadv/printCommissionList")
	public RestResult printCommissionList(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C,String TRPL_C_TEXT, String search_date_type, String from_date, String to_date,
			String trade_type, String rots_ctr_dsc,
			String search_date_type_name,String trade_type_name, String rots_ctr_dsc_name,
			String ACTL_BUYPL_NA_TRPL_C,String CCLNTNM, String TRSLPNO, String NA_DVY_PLASH_SLPNO,
			String na_bzplc, String na_team_c, String slp_dt, String na_slpno,
			long slp_sqno, String WRSNM, String NA_WRS_C, String TXT_DSC, String CNR_DS_AM){		
		
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			if(StringUtils.isNotEmpty(trade_type_name)) trade_type_name = trade_type_name.replace("- 전체 -","전체");
			else trade_type_name = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc)) rots_ctr_dsc = rots_ctr_dsc.replace("all","");
			else rots_ctr_dsc = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc_name)) rots_ctr_dsc_name = rots_ctr_dsc_name.replace("- 전체 -","전체");
			else rots_ctr_dsc_name = "";
			
			//타이틀
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", "검수실적_수수료");
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));			
			_title.put("search", TRPL_C_TEXT+", 일자구분:"+search_date_type_name+", 거래구분:"+trade_type_name
					+", 계통계약["+rots_ctr_dsc+"] "+rots_ctr_dsc_name+", 농협사업장:"+ACTL_BUYPL_NA_TRPL_C+" "+CCLNTNM
					+", 매출일자-전표번호:"+TRSLPNO+", 배송예정서번호:"+NA_DVY_PLASH_SLPNO+", 상품코드:"+NA_WRS_C+" "+TXT_DSC+", 전표일련번호:"+slp_sqno				
					+", 전표단위헤더 : "+"포함");
			title.add(_title);			
			
			//리스트(필요한것만 필터링)
			List<Map<String, Object>> userlist = recadvService.retrieveCommissionList(
					na_bzplc, na_team_c, slp_dt, na_slpno, slp_sqno, CNR_DS_AM);
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(Map<String, Object> map : userlist){
				Map<String,Object> _map = new HashMap<String, Object>();
								
				_map.put("SLP_SQNO", StringUtil.toString(map.get("SLP_SQNO")));
				_map.put("FEENM", StringUtil.toString(map.get("FEENM")));
				//수수료계정
				_map.put("FEE_ACCOUNT", StringUtil.toString(map.get("FEE_ACCOUNT")));
				_map.put("SPY_AM", StringUtil.toString(map.get("SPY_AM_VAT")));  //공급금액
				_map.put("TXT_VAT", StringUtil.toString(map.get("TXT_VAT")));
				
				list.add(_map);
			}
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(title);			
			all_list.add(list);
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/* 직송 출력*/
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0510
	 *  화면설명 : 검수실적_직송분_그리드_마스터 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/recadv/printRecadvDdlyMasterList")
	public RestResult printRecadvDdlyMasterList(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C,String TRPL_C_TEXT, String search_date_type, String from_date, String to_date,
			String trade_type, String is_na_all,	String na_bzplc,String ddly_buypl_na_trpl_c, String rots_ctr_dsc,
			String search_date_type_name,String trade_type_name, String rots_ctr_dsc_name, String sName){
				
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			if(StringUtils.isNotEmpty(trade_type_name)) trade_type_name = trade_type_name.replace("- 전체 -","전체");
			else trade_type_name = "";
						
			if(StringUtils.isNotEmpty(rots_ctr_dsc)) rots_ctr_dsc = rots_ctr_dsc.replace("all","");
			else rots_ctr_dsc = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc_name)) rots_ctr_dsc_name = rots_ctr_dsc_name.replace("- 전체 -","전체");
			else rots_ctr_dsc_name = "";
			
			String from_date_t = "";
			String to_date_t = "";
			
			if(StringUtils.isNotEmpty(from_date)) from_date_t = from_date.substring(0,4)+"-"+from_date.substring(4,6)+"-"+from_date.substring(6,8);  //조회시작일자
			else from_date_t = "";
			if(StringUtils.isNotEmpty(to_date)) to_date_t = to_date.substring(0,4)+"-"+to_date.substring(4,6)+"-"+to_date.substring(6,8);  //조회종료일자
			else to_date_t = "";
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));			
			_title.put("search", TRPL_C_TEXT+", 일자구분:"+search_date_type_name+", 거래구분:"+trade_type_name
					+", 계통계약["+rots_ctr_dsc+"] "+rots_ctr_dsc_name+", 농협사업장:"+" 실매출처 : "+na_bzplc
					+", 직송처 : "+ ddly_buypl_na_trpl_c
					+", 조회기간:"+from_date_t+" - "+to_date_t);			
			title.add(_title);			
			
			//리스트(필요한것만 필터링)			
			List<RecadvDirectMasterVO> volist = recadvService.retrieveRecadvDdlyMasterList(
					TRPL_C_ARR, search_date_type, from_date, to_date, trade_type,is_na_all,na_bzplc, rots_ctr_dsc,ddly_buypl_na_trpl_c,-1, -1);
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(RecadvDirectMasterVO vo : volist){
				Map<String,Object> map = new HashMap<String, Object>();			
				
				//row1
				String BCLNTNM = StringUtil.toString(vo.getBCLNTNM());
				String MNGT_NA_TRPL_C = StringUtil.toString(vo.getMNGT_NA_TRPL_C());
				String CNR_DT = StringUtil.toString(vo.getCNR_DT());				
				String RPY_PLA_DT = StringUtil.toString(vo.getRPY_PLA_DT());
				long GAM_AM = vo.getGAM_AM();
				long BYNG_VAT = vo.getBYNG_VAT();				
				long TOT_GAM = vo.getTOT_GAM();
				long CHRG_TOT = vo.getCHRG_TOT();
				long CBAM = vo.getCBAM();

				//row 2
				String CCLNTNM = StringUtil.toString(vo.getCCLNTNM());
				String ACTL_BUYPL_NA_TRPL_C = StringUtil.toString(vo.getACTL_BUYPL_NA_TRPL_C());				
				String NA_TR_DSC = StringUtil.toString(vo.getNA_TR_DSC()); //거래구분				
				String NA_CRC_CAN_DSC = StringUtil.toString(vo.getNA_CRC_CAN_DSC());
				long VCBT_AM = vo.getVCBT_AM();
				long ETR_AMN_FEE = vo.getETR_AMN_FEE();
				long SLGT_AMN_FEE = vo.getSLGT_AMN_FEE();
				long PHD_FEE = vo.getPHD_FEE();
				long TRP_SVC_CST = vo.getTRP_SVC_CST();
				long ETC_FEE = vo.getETC_FEE();

				//row3
				String TRSLPNO = StringUtil.toString(vo.getTRSLPNO());
				String NA_SLPNO = StringUtil.toString(vo.getNA_SLPNO());
				String ROTS_CTR_DSC  = StringUtil.toString(vo.getROTS_CTR_DSC());
				long VCBX_AM = vo.getVCBT_AM();
				long ETR_AMN_VAT = vo.getETR_AMN_VAT();
				long COMP_FEE = vo.getCOMP_FEE();
				long PHD_FEE_VAT = vo.getPHD_FEE_VAT();
				long TRP_SVCOS_VAT = vo.getTRP_SVCOS_VAT();
				long ETC_FEE_VAT = vo.getETC_FEE_VAT();
	
				map.put("BCLNTNM",BCLNTNM);
				map.put("MNGT_NA_TRPL_C",MNGT_NA_TRPL_C);
				map.put("CNR_DT",CNR_DT);
				map.put("RPY_PLA_DT",RPY_PLA_DT);
				map.put("GAM_AM",GAM_AM);
				map.put("BYNG_VAT",BYNG_VAT);
				map.put("TOT_GAM",TOT_GAM);
				map.put("CHRG_TOT",CHRG_TOT);
				map.put("CBAM",CBAM);
				map.put("CCLNTNM",CCLNTNM);
				map.put("ACTL_BUYPL_NA_TRPL_C",ACTL_BUYPL_NA_TRPL_C);
				map.put("NA_TR_DSC",NA_TR_DSC);
				map.put("NA_CRC_CAN_DSC",NA_CRC_CAN_DSC);
				map.put("VCBT_AM",VCBT_AM);
				map.put("ETR_AMN_FEE",ETR_AMN_FEE);
				map.put("SLGT_AMN_FEE",SLGT_AMN_FEE);
				map.put("PHD_FEE",PHD_FEE);
				map.put("TRP_SVC_CST",TRP_SVC_CST);
				map.put("ETC_FEE",ETC_FEE);
				map.put("TRSLPNO",TRSLPNO);
				map.put("NA_SLPNO",NA_SLPNO);
				map.put("ROTS_CTR_DSC",ROTS_CTR_DSC);
				map.put("VCBX_AM",VCBX_AM);
				map.put("ETR_AMN_VAT",ETR_AMN_VAT);
				map.put("COMP_FEE",COMP_FEE);
				map.put("PHD_FEE_VAT",PHD_FEE_VAT);
				map.put("TRP_SVCOS_VAT",TRP_SVCOS_VAT);
				map.put("ETC_FEE_VAT",ETC_FEE_VAT);
				list.add(map);
			}
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(title);			
			all_list.add(list);
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0510
	 *  화면설명 : 검수실적_직송분_그리드_디테일 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/recadv/printRecadvDdlyDetailList")
	public RestResult printRecadvDdlyDetailList(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C,String TRPL_C_TEXT, String search_date_type, String from_date, String to_date,
			String trade_type, String rots_ctr_dsc,
			String search_date_type_name,String trade_type_name, String rots_ctr_dsc_name,
			String DDLY_BUYPL_NA_TRPL_C,
			String ACTL_BUYPL_NA_TRPL_C,String CCLNTNM, String TRSLPNO, String NA_DVY_PLASH_SLPNO,
			String na_bzplc, String na_team_c, String slp_dt, String na_slpno, String rpy_pla_dt, String sName){
		
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			if(StringUtils.isNotEmpty(trade_type_name)) trade_type_name = trade_type_name.replace("- 전체 -","전체");
			else trade_type_name = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc)) rots_ctr_dsc = rots_ctr_dsc.replace("all","");
			else rots_ctr_dsc = "";
			
			if(StringUtils.isNotEmpty(rots_ctr_dsc_name)) rots_ctr_dsc_name = rots_ctr_dsc_name.replace("- 전체 -","전체");
			else rots_ctr_dsc_name = "";
			
			String from_date_t = "";
			String to_date_t = "";
			
			if(StringUtils.isNotEmpty(from_date)) from_date_t = from_date.substring(0,4)+"-"+from_date.substring(4,6)+"-"+from_date.substring(6,8);  //조회시작일자
			else from_date_t = "";
			if(StringUtils.isNotEmpty(to_date)) to_date_t = to_date.substring(0,4)+"-"+to_date.substring(4,6)+"-"+to_date.substring(6,8);  //조회종료일자
			else to_date_t = "";
			
			List<Map<String,Object>> billingList	= new ArrayList<Map<String,Object>>();
			Map<String,Object> _billing 		= new LinkedHashMap<String, Object>();
			String billingKey = requestHelper.getUserID()+DateUtil.getCurrentDate().getTime();
			_billing.put("billingKey", billingKey);
			billingList.add(_billing);
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));			
			_title.put("search", TRPL_C_TEXT+", 일자구분:"+search_date_type_name+", 거래구분:"+trade_type_name
					+", 계통계약["+rots_ctr_dsc+"] "+rots_ctr_dsc_name+", 농협사업장:"+ACTL_BUYPL_NA_TRPL_C+" "+CCLNTNM+", 조회기간:"+from_date_t+" - "+to_date_t
					+", 직송처 : "+ DDLY_BUYPL_NA_TRPL_C
					+", 매출일자-전표번호:"+TRSLPNO+", 배송예정서번호:"+NA_DVY_PLASH_SLPNO);
			title.add(_title);
			
			//리스트(필요한것만 필터링)
			
			List<RecadvDirectDetailVO> volist = recadvService.retrieveRecadvDdlyDetailList(
					na_bzplc, na_team_c, slp_dt, na_slpno,rpy_pla_dt, -1, -1);

			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(RecadvDirectDetailVO vo : volist){
				Map<String,Object> map = new HashMap<String, Object>();			
								
				map.put("NA_WRS_C",StringUtil.toString(vo.getNA_WRS_C()));
				map.put("WRSNM",StringUtil.toString(vo.getWRSNM()));
				map.put("PD_YY",StringUtil.toString(vo.getPD_YY()));
				map.put("NA_WRS_UNT_C",StringUtil.toString(vo.getNA_WRS_UNT_C()));
				map.put("TXT_DSC",StringUtil.toString(vo.getTXT_DSC()));
				map.put("BYNG_WT",StringUtil.toString(vo.getBYNG_WT()));
				map.put("INPD_QT",StringUtil.toString(vo.getINPD_QT()));
				map.put("BYNG_UPR",StringUtil.toString(vo.getBYNG_UPR()));
				map.put("BYNG_QT",StringUtil.toString(vo.getBYNG_QT()));
				map.put("GAM_AM",StringUtil.toString(vo.getGAM_AM()));
				map.put("BYNG_VAT",StringUtil.toString(vo.getBYNG_VAT()));
				map.put("BYNG_AM",StringUtil.toString(vo.getBYNG_AM()));

				list.add(map);
			}
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			/**
			 * 빌링 마크 시작
			 */
			if(list != null && list.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(RecadvDirectDetailVO vo : volist) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("NA_BZPLC", vo.getNA_BZPLC());
					values.put("NA_TEAM_C", vo.getNA_TEAM_C());
					values.put("SLP_DT", vo.getSLP_DT());
					values.put("NA_SLPNO", vo.getNA_SLPNO());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				BillingMarkVO markVo = new BillingMarkVO(
						BillingMarkUpTableName.TB_BY_BYNG_M, 
						GLN, MD_ID, billingSet);
				FileUtil.writeToObject(
						Configurer.getProperty("file.temp.path")+File.separator+billingKey,
						markVo);
			}
			/**
			 * 빌링 마크 종료
			 */
			all_list.add(billingList);				
			all_list.add(title);						
			all_list.add(list);
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
		
		/** 출력
		 *  화면ID : VAN_DS_SC_0510
		 *  화면설명 : 전표별 수수료내역 출력 _ 직송분
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/recadv/printCommissionListDDLY")
		public RestResult printCommissionListDDLY(HttpServletRequest request, HttpServletResponse response,
				String na_bzplc, String na_team_c, String slp_dt, String na_slpno,long slp_sqno,				
				String TRPL_C, String search_date_type, String from_date, String to_date,
				String trade_type, String rots_ctr_dsc,
				String search_date_type_name,String trade_type_name, String rots_ctr_dsc_name,
				String chk_commision, String DDLY_BUYPL_NA_TRPL_C,
				String ACTL_BUYPL_NA_TRPL_C,String CCLNTNM, String TRSLPNO, String NA_DVY_PLASH_SLPNO,
				String WRSNM, String TXT_DSC, String sName, String CNR_DS_AM){
			
				trade_type_name = trade_type_name.replace("- 전체 -","전체");
				rots_ctr_dsc_name = rots_ctr_dsc_name.replace("- 전체 -","전체");
				
				if(chk_commision.equals("Y")) chk_commision = "포함";
				chk_commision = "미포함";
			
			try{			
				PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
				String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
				
				//타이틀
				List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
				Map<String,Object> _title = new HashMap<String, Object>();
				_title.put("top1", sName);
				_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
				_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));				
				_title.put("search", "사업장 : ["+StringUtils.defaultString(TRPL_C)+"], 일자구분 : "+search_date_type_name+", 거래구분:"+trade_type_name
						+" 계통계약["+rots_ctr_dsc+"] "+rots_ctr_dsc_name+"농협사업장:"+DDLY_BUYPL_NA_TRPL_C+" "+CCLNTNM						
						+", 매출일자-전표번호:"+TRSLPNO+", 배송예정서번호:"+NA_DVY_PLASH_SLPNO+", 상품명:"+WRSNM+" "+TXT_DSC+"전표일련번호:"+slp_sqno
						+", 전표단위헤더 : "+chk_commision);
				title.add(_title);			
				
				//리스트(필요한것만 필터링)
				List<Map<String, Object>> userlist = recadvService.retrieveCommissionList(
						na_bzplc, na_team_c, slp_dt, na_slpno, slp_sqno, CNR_DS_AM);
				List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
				for(Map<String, Object> map : userlist){
					Map<String,Object> _map = new HashMap<String, Object>();
									
					_map.put("SLP_SQNO", StringUtil.toString(map.get("SLP_SQNO")));
					_map.put("FEENM", StringUtil.toString(map.get("FEENM")));
					//수수료계정
					_map.put("FEE_ACCOUNT", StringUtil.toString(map.get("FEE_ACCOUNT")));
					_map.put("SPY_AM", StringUtil.toString(map.get("SPY_AM_VAT")));
					_map.put("TXT_VAT", StringUtil.toString(map.get("TXT_VAT")));
					
					list.add(_map);
				}
				List<List<?>> all_list = new ArrayList<List<?>>();
				all_list.add(title);			
				all_list.add(list);
				
				return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
				
			} catch (AppetizerException e) {			
				return new RestResult(ErrorCode.FAILURE, e.getMessage());
			}
		}
		
		
		/*
		 * 화면ID : VAN_DS_SC_0540
		 * 화면설명 : 매입실적조회 그리드 마스터
		 */	
		@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvResult")
		public void retrieveRecadvResult(HttpServletRequest request, HttpServletResponse response) {
			try {
				
				PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
				String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
								
				String fromDate = requestHelper.getParameter("from_date");  //조회시작일
				String toDate = requestHelper.getParameter("to_date");  //조회종료일
				String rotsCtrDsc= requestHelper.getParameter("rots_ctr_dsc");  //계통계약구분				
				String naBzplc = requestHelper.getParameter("na_bzplc");  //실매입처
				String naSlpno = requestHelper.getParameter("na_slpno");  //전표번호
				String buyplNaTrplC = requestHelper.getParameter("buypl_na_trpl_c");  //매입처(공급업체)
				
				String naTeamC = requestHelper.getParameter("na_team_c");  //실매입처 팀코드
				String buyplNaTeamC = requestHelper.getParameter("buypl_na_team_c");  //매입처(공급업체) 팀코드		
				
				PlatformData platformData = new PlatformData();

				List<Map<String, Object>> list = recadvService.retrieveRecadvResult(
						TRPL_C_ARR, fromDate, toDate, rotsCtrDsc, naBzplc, naSlpno,buyplNaTrplC,naTeamC,buyplNaTeamC);
				
				if(list != null && list.size() > 0) {
					 DataSetHelper dsHelper = new DataSetHelper("ds_master");
					 dsHelper.addColumns(list.get(0).keySet());
					 for(Map<String, Object> map : list) {
						 dsHelper.setData(map);
					 }
					 platformData.addDataSet(dsHelper.getDataSet());
				}
				sendData(response, platformData);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, e.getMessage());
			}
		}
		
		/*
		 * 화면ID : VAN_DS_SC_0540
		 * 화면설명 : 매입실적조회	 - 엑셀다운로드
		 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRetrieveRecadvResult")
		public void downloadExcelRetrieveRecadvResult(HttpServletRequest request, HttpServletResponse response) {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String fileName = request.getParameter("fileName");
			
			try {
				//첫번째 시트				
				String srhTrplC =	request.getParameter("TRPL_C");//거래처코드
				String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
								
				String fromDate = request.getParameter("from_date");  //조회시작일
				String toDate = request.getParameter("to_date");  //조회종료일
				String rotsCtrDsc= request.getParameter("rots_ctr_dsc");  //계통계약구분				
				String naBzplc = request.getParameter("na_bzplc");  //실매입처
				String naSlpno = request.getParameter("na_slpno");  //전표번호
				String buyplNaTrplC = request.getParameter("buypl_na_trpl_c");  //매입처(공급업체)
				
				String naTeamC = request.getParameter("na_team_c");  //실매입처 팀코드
				String buyplNaTeamC = request.getParameter("buypl_na_team_c");  //매입처(공급업체) 팀코드
				
				List<Map<String,Object>> list = null;
				Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
				
				String[] header = {
						"사업장코드",
						"팀코드",
						"전표일자",
						"전표번호",
						"창고코드",
						"거래구분코드",
						"검수일자",
						"원장반영일자",
						"정산사업장코드",
						"정산사업장팀코드",
						"매입처거래처코드",
						"매입처팀코드",
						"정산거래처코드",
						"정산팀코드",
						"실제매입처거래처코드",
						"실제매입처팀코드",
						"직송매입처거래처코드",
						"직송매입처팀코드",
						"출하자거래처코드",
						"출하자팀코드",
						"출하매출처거래처코드",
						"출하매출처팀코드",
						"흑자적자구분코드",
						"매입금액",
						"매입부가세",
						"판매예정금액",
						"과세공급금액",
						"부가세공급금액",
						"면세공급금액",
						"영세공급금액",
						"주류과세공급금액",
						"주류부가세공급금액",
						"공병금액",
						"공상자금액",
						"매입장려금",
						"결제유형구분코드",
						"외상매입금",
						"현금지급금액",
						"선급매입금액",
						"상환예정일자",
						"유통거래대분류코드",
						"매입전표구분코드",
						"매입참조구분코드",
						"배송예정서참조여부",
						"배송예정서전표번호",
						"거래근거번호",
						"원전표일자",
						"원전표전표번호",
						"상대매출처전표일자",
						"상대매출처전표번호",
						"반품가격처리구분코드",
						"직송여부",
						"사업방식구분코드",
						"중앙회조합구분코드",
						"내외부구분코드",
						"매입입력단말기구분코드",
						"계통계약구분코드",
						"거래발생구분코드",
						"하역비발생여부",
						"사입품여부",
						"생체지육구분코드",
						"지육구성구분코드",
						"지육두수",
						"생체중량",
						"지육중량",
						"지육해체총중량",
						"실제중량",
						"지육금액",
						"정정취소구분코드",
						"비고내용",
						"거래처리일련번호",
						"소매유통전환시스템구분코드",
						"삭제여부",
						"최초등록자개인번호",
						"최초등록일시",
						"최종변경자개인번호",
						"최종변경일시",
						"삭제자개인번호",
						"삭제일시",
						"검수구분금액",
						"거래구분약어명",
						"결제유형구분코드",
						"유통거래대분류코드",
						"매입전표구분코드",
						"매입참조구분코드",
						"반품가격처리구분코드",
						"사업방식구분코드",
						"중앙회조합구분코드",
						"내외부구분코드",
						"매입입력단말기구분코드",
						"계통계약구분코드",
						"거래발생구분코드",
						"생체지육구분코드",
						"지육구성구분코드",
						"정정취소구분코드",
						"소매유통전환시스템구분코드",
						"자료전송여부",
						"상대거래구분코드",
						"수요자거래관계관리번호",
						"주관거래관계관리번호",
						"배송지거래처코드",
						"배송지팀코드",
						"0.이관요청 1.이관확정 2.이관취소",
						"배송지거래처코드",
						"배송지팀코드",
						"공병금액(상세내역 합계)",
						"수수료금액(합계)",
						"배송예정금액",
						"매출금액"		
				};
				String[] keyIndex = {
						"NA_BZPLC",
						"NA_TEAM_C",
						"SLP_DT",
						"NA_SLPNO",
						"WHSE_C",
						"NA_TR_DSC",
						"CNR_DT",
						"LED_RFL_DT",
						"ADJ_NA_BZPLC",
						"ADJ_BZPL_NA_TEAM_C",
						"BUYPL_NA_TRPL_C",
						"BUYPL_NA_TEAM_C",
						"ADJ_NA_TRPL_C",
						"ADJ_NA_TEAM_C",
						"ACTL_BUYPL_NA_TRPL_C",
						"ACTL_BUYPL_NA_TEAM_C",
						"DDLY_BUYPL_NA_TRPL_C",
						"DDLY_BUYPL_NA_TEAM_C",
						"SOGMN_NA_TRPL_C",
						"SOGMN_NA_TEAM_C",
						"SOG_SLPL_NA_TRPL_C",
						"SOG_SLPL_NA_TEAM_C",
						"NA_BLB_DFC_DSC",
						"BYAM",
						"BYNG_VAT",
						"SEL_PLA_AM",
						"TXT_SPY_AM",
						"VAT_SPY_AM",
						"EXTX_SPY_AM",
						"SMA_SPY_AM",
						"LIQ_TXT_SPY_AM",
						"LIQ_VAT_SPY_AM",
						"VCBT_AM",
						"VCBX_AM",
						"BYNG_SSDY",
						"NA_STL_TP_DSC",
						"CBAM",
						"CSH_PY_AM",
						"PPY_BYAM",
						"RPY_PLA_DT",
						"DSTR_TR_LCLC",
						"BYNG_SLP_DSC",
						"BYNG_REF_DSC",
						"DVY_PLASH_REF_YN",
						"NA_DVY_PLASH_SLPNO",
						"TR_BASS_NO",
						"OSLIP_DT",
						"OSLIP_NA_SLPNO",
						"PATN_SLPL_SLP_DT",
						"PATN_SLPL_NA_SLPNO",
						"RGD_PR_PRC_DSC",
						"DDLY_YN",
						"BZ_METH_DSC",
						"NAAC_DSC",
						"INO_DSC",
						"BYNG_INP_TRM_DSC",
						"ROTS_CTR_DSC",
						"NA_TR_OCU_DSC",
						"STVCS_OCU_YN",
						"PVRPD_YN",
						"LBDY_BFC_DSC",
						"BFC_CSTT_DSC",
						"BFC_HDCN",
						"LBDY_WT",
						"BFC_WT",
						"BFC_DMT_TOT_WT",
						"ACTL_WT",
						"BFC_AM",
						"NA_CRC_CAN_DSC",
						"RMK_CNTN",
						"TRPRC_SQNO",
						"RTL_DSTR_CV_SYS_DSC",
						"DEL_YN",
						"FSRGMN_ENO",
						"FSRG_DTM",
						"LS_CMENO",
						"LSCHG_DTM",
						"DLMN_ENO",
						"DEL_DTM",
						"CNR_DS_AM",
						"TR_DS_ABR_NM",
						"NA_STL_TP_DSC_NM",
						"DSTR_TR_LCLC_NM",
						"BYNG_SLP_DSC_NM",
						"BYNG_REF_DSC_NM",
						"RGD_PR_PRC_DSC_NM",
						"BZ_METH_DSC_NM",
						"NAAC_DSC_NM",
						"INO_DSC_NM",
						"BYNG_INP_TRM_DSC_NM",
						"ROTS_CTR_DSC_NM",
						"NA_TR_OCU_DSC_NM",
						"LBDY_BFC_DSC_NM",
						"BFC_CSTT_DSC_NM",
						"NA_CRC_CAN_DSC_NM",
						"RTL_DSTR_CV_SYS_DSC_NM",
						"DATA_TMS_YN",
						"PATN_NA_TR_DSC",
						"CSER_TR_REL_AMNNO",
						"MNGT_TR_REL_AMNNO",
						"DVYAA_NA_TRPL_C",
						"DVYAA_NA_TEAM_C",
						"TRF_REF_DSC",
						"DVYAA_NA_TRPL_C_NM",
						"DVYAA_NA_TEAM_C_NM",
						"BYAM_BOT",
						"SPY_AM_CST",
						"AMOUNT",
						"AMOUNT2"		
				};
				
				AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
				ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);		
				
				recadvService.downloadExcelRetrieveRecadvResult(
						TRPL_C_ARR, fromDate, toDate, rotsCtrDsc, naBzplc, naSlpno,buyplNaTrplC,naTeamC,buyplNaTeamC,handler);
									
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("출력화면", "매입실적조회_유통사업");				
				searchMap.put("조회시작일", fromDate);
				searchMap.put("조회종료일", toDate);
				searchMap.put("계통계약구분", rotsCtrDsc);
				searchMap.put("실매입처", naBzplc);				
				searchMap.put("전표번호", naSlpno);
				searchMap.put("매입처(공급업체)", buyplNaTrplC);				
				searchMap.put("계통계약구분", rotsCtrDsc);		
				searchMap.put("거래처코드", srhTrplC);
				handler.createSearchSheet(searchMap);
				
				handler.write(response, fileName);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendHtmlAlert(response, e.getMessage());
			}
		}
		
		/*
		 * 화면ID : VAN_DS_SC_0540
		 * 화면설명 : 매입실적조회 그리드 디테일
		 */		
		@RequestMapping(method=RequestMethod.POST, value = "/rest/recadv/retrieveRecadvResultDetail")
		public void retrieveRecadvResultDetail(HttpServletRequest request, HttpServletResponse response) {
			try {
				
				PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
								
				String naBzplc = requestHelper.getParameter("NA_BZPLC"); 
				String naTeamC = requestHelper.getParameter("NA_TEAM_C");
				String slpDt= requestHelper.getParameter("SLP_DT"); 				
				String naSlpno = requestHelper.getParameter("NA_SLPNO");
				String buyplNaTrplC = requestHelper.getParameter("BUYPL_NA_TRPL_C");										
				
				PlatformData platformData = new PlatformData();
				
				List<Map<String, Object>> list = recadvService.retrieveRecadvResultDetail(
						naBzplc, naTeamC, slpDt, naSlpno, buyplNaTrplC);
				
				if(list != null && list.size() > 0) {
					 DataSetHelper dsHelper = new DataSetHelper("ds_detail");
					 dsHelper.addColumns(list.get(0).keySet());
					 for(Map<String, Object> map : list) {
						 dsHelper.setData(map);
					 }
					 platformData.addDataSet(dsHelper.getDataSet());
				}
				sendData(response, platformData);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, e.getMessage());
			}
		}	
	 
}
