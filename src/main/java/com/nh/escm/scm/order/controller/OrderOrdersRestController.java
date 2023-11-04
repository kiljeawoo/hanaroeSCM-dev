package com.nh.escm.scm.order.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
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
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;
import com.nh.escm.common.service.CodeService;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.BillingMarkVO;
import com.nh.escm.common.vo.SQLNames.CommonSimpleCode;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.scm.order.service.OrderOrdersService;
import com.nh.escm.scm.order.vo.OrderOrdersBrVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyMasterPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersDetailVO;
import com.nh.escm.scm.order.vo.OrderOrdersMasterVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplMasterPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplMasterPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersSrhConditonVO;
import com.nh.escm.scm.order.vo.OrderOrdersTCVO;
import com.nh.escm.scm.order.vo.OrderOrdersTrnrelOdrplVO;
import com.nh.escm.scm.order.vo.OrderOrdersVanSeqVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsVO;
import com.nh.escm.util.PageHelper;
/**
 * 수주업무
 * @author swha
 *
 */
@RestController
public class OrderOrdersRestController extends AbstractController {
	
		
	@Autowired
	private OrderOrdersService ordersService;
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private SequenceKeyService sequenceKeyService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	/*#########################################################
	 * 화면ID : VAN_DS_SC_0100
	 * 화면명 :  수주등록 
	 #########################################################*/
	
	/* 수주번호 팝업 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveVanSeq")
	public void retrieveVanSeq(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String odrSlpNo		 		= 	requestHelper.getParameter("odr_slpno"); //발주전표번호
			String odrplNaTrplC 			= 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
			String dvyRqrDtFr 			= 	requestHelper.getParameter("dvy_rqr_dt_fr"); //배송요청일자 From
			String dvyRqrDtTo 			= 	requestHelper.getParameter("dvy_rqr_dt_to"); //배송요청일자 To
			String tempYn 					= 	requestHelper.getParameter("temp_yn"); //발주정보 임시저장여부
			String dlvpnshtTempYn 		= requestHelper.getParameter("dlvpnsht_temp_yn"); //배송예정서 작성여부
			String ddlyYn 					= requestHelper.getParameter("ddly_yn"); //직송상품여부
			String rvoplNaTrplC 			= requestHelper.getParameter("rvopl_na_trpl_c");//수주처코드
			String rvoplNaTeamC 		= "";//수주처팀코드
			if(StringUtils.isEmpty(rvoplNaTrplC)){
				rvoplNaTrplC = 	requestHelper.getGlnCode(); //수주처 코드
			}else{
				rvoplNaTeamC = requestHelper.getParameter("rvopl_na_team_c");
			}
			
			List<OrderOrdersVanSeqVO> list = ordersService.retrieveVanSeq(odrSlpNo, odrplNaTrplC, rvoplNaTrplC, rvoplNaTeamC,dvyRqrDtFr, dvyRqrDtTo, tempYn, dlvpnshtTempYn, ddlyYn);
			
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(OrderOrdersVanSeqVO.class);
				
				for(OrderOrdersVanSeqVO vo : list){
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
	
	/* 저장 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/saveOrder")
	public void saveOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		try {
			PlatformData out_PlatformData = new PlatformData();
			OrderOrdersMasterVO mvo = new OrderOrdersMasterVO();
			DataSet dsM = requestHelper.getDataSet("ds_dataM");
			DataSet dsD = requestHelper.getDataSet("ds_dataD");
			String trplC = "";
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			trplC = TRPL_C_ARR[0];
			
			
			String dmlCode = "";
			long odrAmTot = 0;//총수주금액
			long odrVatTot = 0;//총수주부가세금액
			long odrQtTot = 0;//총발주수량
			
			//Master		
			if(dsM != null){
				List<OrderOrdersMasterVO> list = requestHelper.getValueObjects(OrderOrdersMasterVO.class, dsM);
				mvo= list.get(0);
				mvo.setMB_ID(requestHelper.getUserID());
				if(StringUtils.equals(mvo.getTEMP_YN(), "N")){
					mvo.setFS_RMS_DT(DateUtil.getCurrentDate("yyyyMMdd"));
					mvo.setFS_RMS_HR(DateUtil.getCurrentDate("HHmmss"));
					mvo.setLS_RMS_DT(DateUtil.getCurrentDate("yyyyMMdd"));
					mvo.setLS_RMS_HR(DateUtil.getCurrentDate("HHmmss"));
				}
				
					
				if(StringUtils.isEmpty(mvo.getVAN_SEQ())){//발주일련번호가 없으면
					String seq = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_OD_ORDER_M);
					mvo.setODR_DT(DateUtil.getCurrentDate("yyyyMMdd"));
					mvo.setODR_SLPNO(seq);
					mvo.setVAN_SEQ(seq);
					mvo.setRVOPL_NA_TRPL_C(trplC);
					mvo.setRVOPL_NA_TEAM_C("00");
			
					
					mvo.setODR_DSC("ORDERS");
					mvo.setROGO_INF_CRT_DSC("01");
					dmlCode = "INSERT";
				}else if(dsM.getRowType(0) == DataSet.ROW_TYPE_UPDATED){
					//발주처 변경에 따른 상품 리스트 삭제 후 추가
					if(!StringUtils.equals(mvo.getODRPL_NA_TRPL_C(), mvo.getHDN_ODRPL_NA_TRPL_C()) || !StringUtils.equals(mvo.getODRPL_NA_TEAM_C(), mvo.getHDN_ODRPL_NA_TEAM_C())){
						dmlCode = "DeleteAfterInsert";
					}else{
						dmlCode = "UPDATE";
					}
				}else{
					dmlCode = "NORMAL";
				}
				mvo.setDML_CODE(dmlCode);
			}
			//상품 리스트 정보
			if(dsD != null){
				List<OrderOrdersDetailVO> tmpList = requestHelper.getValueObjects(OrderOrdersDetailVO.class, dsD);
				List<OrderOrdersDetailVO> dvoList = new ArrayList<OrderOrdersDetailVO>();
				for(int i = 0; i < dsD.getRowCount(); i++){
					if(dsD.getRowType(i) == DataSet.ROW_TYPE_INSERTED){
						dmlCode = "INSERT";
					}else if(dsD.getRowType(i) == DataSet.ROW_TYPE_UPDATED){
						if(StringUtils.equals("1", dsD.getString(i, "DEL_YN"))){
							dmlCode = "DELETE";
						}else{
							dmlCode = "UPDATE";
						}
					}else{
						dmlCode = "NORMAL";
					}
					
					//Master 합계
					if(!StringUtils.equals("DELETE", dmlCode)){
						odrAmTot = odrAmTot + StringUtil.sTol(String.valueOf(StringUtil.sToi(dsD.getString(i, "ODR_AM"), 0)), 0L); 
						odrVatTot = odrVatTot + StringUtil.sTol(String.valueOf(StringUtil.sToi(dsD.getString(i, "ODR_VAT"), 0)), 0L);
						odrQtTot = odrQtTot + StringUtil.sTol(String.valueOf(StringUtil.sToi(dsD.getString(i, "ODR_QT"), 0)), 0L);
					}
					OrderOrdersDetailVO dvo = tmpList.get(i);
					dvo.setDML_CODE(dmlCode);
					dvo.setODRPL_NA_TRPL_C(mvo.getODRPL_NA_TRPL_C());
					dvo.setODRPL_NA_TEAM_C(mvo.getODRPL_NA_TEAM_C());
					dvo.setODR_DT(mvo.getODR_DT());
					dvo.setODR_SLPNO(mvo.getODR_SLPNO());
					dvo.setVAN_SEQ(mvo.getVAN_SEQ());
					dvo.setMB_ID(requestHelper.getUserID());
					dvoList.add(i, dvo);
				}
				
				mvo.setTOTAL_ODR_AM(odrAmTot);
				mvo.setTOTAL_ODR_VAT(odrVatTot);
				mvo.setTOTAL_ODR_QT(odrQtTot);
				mvo.setDetailVoList(dvoList);
			}
			
			ordersService.saveOrder(mvo);
			if(StringUtils.equals(mvo.getTEMP_YN(), "N")){
				try {
					String message =sentCheckService.orderCheckSendState(
							mvo.getODRPL_NA_TRPL_C(),
							mvo.getODRPL_NA_TEAM_C(),
							mvo.getODR_DT(),
							mvo.getODR_SLPNO());
						sendData(response, out_PlatformData, 0, message);
				} catch (NHSentErrorException e) {
					String eb = e.getMessage();
					sendData(response, out_PlatformData, -999, eb);
				}
			}
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	 
	
	/* 수주 Master 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/getOrder")
	public void getOrderMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
			String odrplNaTeamC = requestHelper.getParameter("odrpl_na_team_c");
			String odrDt = requestHelper.getParameter("odr_dt");
			String odrSlpno = requestHelper.getParameter("odr_slpno");
			String vanSeq = 	requestHelper.getParameter("van_seq"); //수주번호
			//Master
			OrderOrdersMasterVO masterVo = ordersService.getOrderMaster(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, vanSeq);
			if(masterVo != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(OrderOrdersMasterVO.class);
				dsHelper.setData(masterVo);
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				
				//Detail 상품정보 리스트
				List<OrderOrdersDetailVO> list = ordersService.retrieveOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, vanSeq, "");
				if(list != null && list.size() > 0){
					DataSetHelper dsDetailHelper = new DataSetHelper("ds_dataD");
					dsDetailHelper.addColumns(OrderOrdersDetailVO.class);
					
					for(OrderOrdersDetailVO detailVo : list){
						dsDetailHelper.setData(detailVo);
					}
					out_PlatformData.addDataSet(dsDetailHelper.getDataSet());
				}
				
				
			}
			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/* 수주 Master 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/getOrderDetail")
	public void getOrderDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
			String odrplNaTeamC = requestHelper.getParameter("odrpl_na_team_c");
			String odrDt = requestHelper.getParameter("odr_dt");
			String odrSlpno = requestHelper.getParameter("odr_slpno");
			String vanSeq = 	requestHelper.getParameter("van_seq"); //수주번호
			String dvyRrqDt = requestHelper.getParameter("dvy_rqr_dt"); //수주번호
			//Detail 상품정보 리스트
			List<OrderOrdersDetailVO> list = ordersService.retrieveOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, vanSeq, dvyRrqDt);
			if(list != null && list.size() > 0){
				DataSetHelper dsDetailHelper = new DataSetHelper("ds_dataD");
				dsDetailHelper.addColumns(OrderOrdersDetailVO.class);
				
				for(OrderOrdersDetailVO detailVo : list){
					dsDetailHelper.setData(detailVo);
				}
				out_PlatformData.addDataSet(dsDetailHelper.getDataSet());
			}
			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/* 시 선택후 구리스트 조회(부산시 => 연제구)  */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveRgnC")
	public void retrieveRgnC(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String wmcLocRgnDsc = 	requestHelper.getParameter("wmc_loc_rgn_dsc"); //지역시코드
			String code = "RGN_C";
			String where = "SIMP_C NOT IN ('"+wmcLocRgnDsc+"') AND SIMP_C LIKE '"+StringUtils.substring(wmcLocRgnDsc, 0, 2)+"%'";
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rgn_c01");
			dsHelper.addColumns(CommonSimpleCode.class);
			
			List<Map<String, Object>> codeList = codeService.getCodeList(code, where);
			for(Map<String, Object> map : codeList) {
				dsHelper.setData(map);
			}
						
			out_PlatformData.addDataSet(dsHelper.getDataSet());	
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/* 수주일 기준 조회 First*/
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveOrderFst")
	public void retrieveOrderFst(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			PlatformData out_PlatformData = new PlatformData();
			int totalRowCount = 0;
			int start = 0;
			int end = 0;
			
			String searchType 		= requestHelper.getParameter("search_type");//조회구분
			String naWrsC 				= requestHelper.getParameter("na_wrs_c");//상품코드
			String searchPeriod 		= requestHelper.getParameter("search_period");//조회기간
			String calFrom 			= requestHelper.getParameter("cal_from");//From Date
			String calTo 				= requestHelper.getParameter("cal_to");//To Date
			String phdFcltC 			= requestHelper.getParameter("phd_fclt_c");//물류기능코드
			String wmcLocRgnDsc 	= requestHelper.getParameter("wmc_loc_rgn_dsc");//지역코드00 (시)
			String htLovRgnC 			= requestHelper.getParameter("ht_lov_rgn_c");//지역코드01(구)
			String naOdrStsDsc 		= requestHelper.getParameter("na_odr_sts_dsc");//발주상태구분
			String splr_trpl_c		= requestHelper.getParameter("splr_trpl_c");	// 발주처별 사업장코드
			String splr_team_c		= requestHelper.getParameter("splr_team_c");	// 발주처별 팀코드
			String ddly_yn				= requestHelper.getParameter("ddly_yn");	// 직송여부(180416)
			String r2_ddly_yn				= requestHelper.getParameter("r2_ddly_yn");	// 축산R2 직송여부(210712)
			String TRPL_C 				= requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mobile 			= requestHelper.getParameter("mobile"); 		//모바일여부
			
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setTrplC(TRPL_C_ARR);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setOdrplNaTeamC(splr_team_c);
			srhVo.setOdrplNaTrplC(splr_trpl_c); /*  splr_trpl_c ->  OdrplNaTrplC  발주처로 세팅          */
			
			// Paging
			if(StringUtils.equals("1",searchType)){
				if(mobile != null){
					srhVo.setDdlyYn(ddly_yn); // 직송여부
				}
				totalRowCount = ordersService.retrieveOrderDailyCountFst(srhVo);
			}else if(StringUtils.equals("2",searchType)){
				totalRowCount = ordersService.retrieveOrderOdrplCountFst(srhVo);
			}else if(StringUtils.equals("3",searchType)){
				srhVo.setDdlyYn(ddly_yn); // 직송여부
				srhVo.setR2DdlyYn(r2_ddly_yn); // 축산R2 직송여부(210712)
				totalRowCount = ordersService.retrieveOrderRvoplCountFst(srhVo);
			}else{
				totalRowCount = ordersService.retrieveOrderWrsCountFst(srhVo);
			}
			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO01"), totalRowCount, "ds_pageVO01");
			start = pageHelper.getStart();
			end  = pageHelper.getEnd();
			srhVo.setStart(start);
			srhVo.setEnd(end);
			
			//Master
			switch (searchType){
				case "1" : /* 수주일별 기준 */ 
					List<OrderOrdersDailyFstVO> dailyList = ordersService.retrieveOrderDailyFst(srhVo);
					if(dailyList != null && dailyList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM01");
						dsHelper.addColumns(OrderOrdersDailyFstVO.class);
						for(OrderOrdersDailyFstVO vo : dailyList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "2" : /* 발주처별 기준 */
					List<OrderOrdersOdrplFstVO> odrplList = ordersService.retrieveOrderOdrplFst(srhVo);
					if(odrplList != null && odrplList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM02");
						dsHelper.addColumns(OrderOrdersOdrplFstVO.class);
						for(OrderOrdersOdrplFstVO vo : odrplList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "3" : 
					/* 소속사업장별 
					 * dp2159n4.jsp
					 * DPON2159R7, DPON2159R8, DPON2159R3
					 */
					List<OrderOrdersRvoplFstVO> rvoplList = ordersService.retrieveOrderRvoplFst(srhVo);
					if(rvoplList != null && rvoplList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM03");
						dsHelper.addColumns(OrderOrdersRvoplFstVO.class);
						for(OrderOrdersRvoplFstVO vo : rvoplList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "4" :
					/* 상품별 
					 * dp2159n5.jsp
					 * DPON2159RA, DPON2159RB, DPON2159RC
					 */
					List<OrderOrdersWrsFstVO> wrsList = ordersService.retrieveOrderWrsFst(srhVo);
					if(wrsList != null && wrsList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM04");
						dsHelper.addColumns(OrderOrdersWrsFstVO.class);
						for(OrderOrdersWrsFstVO vo : wrsList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				default : 
						logger.error("searchType of parameter is no Value");
						sendData(response, new PlatformData(), -1, "error.message.required.parameters");
			}
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/* 수주일 기준 조회 Second*/
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveOrderScd")
	public void retrieveOrderScd(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			int totalRowCount = 0;
			int start = 0;
			int end = 0;
			
			String searchType = requestHelper.getParameter("search_type");//조회구분
			String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
			String searchPeriod = requestHelper.getParameter("search_period");//조회기간
			String calFrom = requestHelper.getParameter("cal_from");//From Date
			String calTo = requestHelper.getParameter("cal_to");//To Date
			String phdFcltC = requestHelper.getParameter("phd_fclt_c");//물류기능코드
			String wmcLocRgnDsc = requestHelper.getParameter("wmc_loc_rgn_dsc");//지역코드00 (시)
			String htLovRgnC = requestHelper.getParameter("ht_lov_rgn_c");//지역코드00(구)
			String odrDt = requestHelper.getParameter("odr_dt");//발주일자
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");//발주처코드
			String odrplNaTeamC = requestHelper.getParameter("odrpl_na_team_c");//발주처팀코드
			String spyplNaTrplC = requestHelper.getParameter("spypl_na_trpl_c");//공급처코드
			String spyplNaTeamC = requestHelper.getParameter("spypl_na_team_c");//공급처팀코드
			String rvoplNaTrplC = requestHelper.getParameter("rvopl_na_trpl_c");//수주처코드
			String rvoplNaTeamC = requestHelper.getParameter("rvopl_na_team_c");//수주처팀코드
			String vhcno  = requestHelper.getParameter("vhcno");//차량번호
			if("".equals(vhcno)) vhcno = "0000";
			String odrPcs  = requestHelper.getParameter("odr_pcs");//상품단가
			String naOdrStsDsc 		= requestHelper.getParameter("na_odr_sts_dsc");//발주상태구분
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mobile 			= requestHelper.getParameter("mobile"); 		//모바일여부
			String ddly_yn			= requestHelper.getParameter("ddly_yn");	// 직송여부(181127)
			String r2_ddly_yn		= requestHelper.getParameter("r2_ddly_yn");	// 축산R2 직송여부(210712)
		
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setTrplC(TRPL_C_ARR);
			srhVo.setOdrDt(odrDt);
			srhVo.setOdrplNaTrplC(odrplNaTrplC);
			srhVo.setOdrplNaTeamC(odrplNaTeamC);
			srhVo.setSpyplNaTrplC(spyplNaTrplC);
			srhVo.setSpyplNaTeamC(spyplNaTeamC);
			srhVo.setRvoplNaTrplC(rvoplNaTrplC);
			srhVo.setRvoplNaTeamC(rvoplNaTeamC);
			srhVo.setVhcno(vhcno);
			srhVo.setOdrPcs(odrPcs);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			
						
			
			// Paging
			if(StringUtils.equals("1",searchType)){			// 일자별
				if(mobile != null){
					srhVo.setDdlyYn(ddly_yn); // 직송여부
				}
				totalRowCount = ordersService.retrieveOrderDailyCountScd(srhVo);
			}else if(StringUtils.equals("2",searchType)){	// 발주처별
				totalRowCount = ordersService.retrieveOrderOdrplCountScd(srhVo);
			}else if(StringUtils.equals("3",searchType)){	// 소속사업장별
				srhVo.setR2DdlyYn(r2_ddly_yn); // 축산R2 직송여부(210712)
				totalRowCount = ordersService.retrieveOrderRvoplCountScd(srhVo);
			}else{											// 상품별
				totalRowCount = ordersService.retrieveOrderWrsCountScd(srhVo);
			}
			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			start = pageHelper.getStart();
			end  = pageHelper.getEnd();
			srhVo.setStart(1);
			srhVo.setEnd(10000);
			
			//Master
			switch (searchType){
				case "1" : /* 수주일 기준 */ 
						List<OrderOrdersDailyScdVO> dailyList = ordersService.retrieveOrderDailyScd(srhVo);
						if(dailyList != null && dailyList.size() > 0){
							DataSetHelper dsHelper = new DataSetHelper("ds_dataD01");
							dsHelper.addColumns(OrderOrdersDailyScdVO.class);
							for(OrderOrdersDailyScdVO vo : dailyList){
								dsHelper.setData(vo);
							}
							out_PlatformData.addDataSet(dsHelper.getDataSet());
						}
					break;
				case "2" :  /* 발주처별 */
					List<OrderOrdersOdrplScdVO> odrplList = ordersService.retrieveOrderOdrplScd(srhVo);
					if(odrplList != null && odrplList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataD02");
						dsHelper.addColumns(OrderOrdersOdrplScdVO.class);
						for(OrderOrdersOdrplScdVO vo : odrplList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "3" : /* 소속사업장별 */
					List<OrderOrdersRvoplScdVO> rvoplList = ordersService.retrieveOrderRvoplScd(srhVo);
					if(rvoplList != null && rvoplList.size() > 0){
						
						//합계
						Map<String, Object> result = ordersService.retrieveOrderRvoplTotalScd(srhVo);
						DataSet ds = new DataSet("ds_dataD03_total");
						ds.addColumn("TOTAL_ODR_QT", DataTypes.STRING);
						ds.addColumn("TOTAL_ODR_AM", DataTypes.STRING);
						ds.addColumn("TOTAL_VCBT_AM", DataTypes.STRING);
						int row = ds.newRow();
						ds.set(row ,0, result.get("TOTAL_ODR_QT"));
						ds.set(row ,1,result.get("TOTAL_ODR_AM"));
						ds.set(row ,2,result.get("TOTAL_VCBT_AM"));
						
						
						
						DataSetHelper dsHelper = new DataSetHelper("ds_dataD03");
						dsHelper.addColumns(OrderOrdersRvoplScdVO.class);
						for(OrderOrdersRvoplScdVO vo : rvoplList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(ds);//합계
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "4" : /* 상품별 */
					List<OrderOrdersWrsScdVO> wrsList = ordersService.retrieveOrderWrsScd(srhVo);
					if(wrsList != null && wrsList.size() > 0){
						
						//합계
						Map<String, Object> result = ordersService.retrieveOrderWrsTotalScd(srhVo);
						DataSet ds = new DataSet("ds_dataD04_total");
						ds.addColumn("TOTAL_ODR_QT", DataTypes.STRING);
						ds.addColumn("TOTAL_ODR_AM", DataTypes.STRING);
						ds.addColumn("TOTAL_VCBT_AM", DataTypes.STRING);
						ds.addColumn("TOTAL_BOX_QT", DataTypes.STRING);
						int row = ds.newRow();
						ds.set(row ,0, result.get("TOTAL_ODR_QT"));
						ds.set(row ,1, result.get("TOTAL_ODR_AM"));
						ds.set(row ,2, result.get("TOTAL_VCBT_AM"));
						ds.set(row ,3, result.get("TOTAL_BOX_QT"));
						
						
						DataSetHelper dsHelper = new DataSetHelper("ds_dataD04");
						dsHelper.addColumns(OrderOrdersWrsScdVO.class);
						for(OrderOrdersWrsScdVO vo : wrsList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(ds);//합계
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				default : 
						logger.error("searchType of parameter is no Value");
						sendData(response, new PlatformData(), -1, "error.message.required.parameters");
			}
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/* 수주일 기준 조회 Third*/
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveOrderTrd")
	public void retrieveOrderTrd(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String odrplNaTrplC = "";
			String odrplNaTeamC = "";
			String odrDt = "";
			String odrSlpno = "";
			String searchPeriod = "";
			String calFrom = "";
			String calTo = "";
			String naWrsC = "";
			String vhcno = "";
			String trplC = "";
			String idx = requestHelper.getParameter("idx");

			
			switch(idx){
				case "1" :
					odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
					odrplNaTeamC = requestHelper.getParameter("odrpl_na_team_c");
					odrDt = requestHelper.getParameter("odr_dt");
					odrSlpno = requestHelper.getParameter("odr_slpno");
					
					//상품정보 리스트
					List<OrderOrdersDailyTrdVO> dailList = ordersService.retrieveOrderDailyTrd(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
					if(dailList != null && dailList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
						dsHelper.addColumns(OrderOrdersDailyTrdVO.class);
						for(OrderOrdersDailyTrdVO vo : dailList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "2" :
					odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
					odrplNaTeamC = requestHelper.getParameter("odrpl_na_team_c");
					odrDt = requestHelper.getParameter("odr_dt");
					odrSlpno = requestHelper.getParameter("odr_slpno");
					//상품정보 리스트
					List<OrderOrdersOdrplTrdVO> odrplList = ordersService.retrieveOrderOdrplTrd(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
					if(odrplList != null && odrplList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
						dsHelper.addColumns(OrderOrdersOdrplTrdVO.class);
						for(OrderOrdersOdrplTrdVO vo : odrplList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "3" :
					
					/*
					 * 소속사업장별 상세팝업 
					 */
					odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
					odrplNaTeamC = requestHelper.getParameter("odrpl_na_team_c");
					odrDt = requestHelper.getParameter("odr_dt");
					odrSlpno = requestHelper.getParameter("odr_slpno");
					List<OrderOrdersRvoplTrdVO> rvoplList = ordersService.retrieveOrderRvoplTrd(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
					if(rvoplList != null && rvoplList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
						dsHelper.addColumns(OrderOrdersRvoplTrdVO.class);
						for(OrderOrdersRvoplTrdVO vo : rvoplList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				case "4" :
					odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
					odrplNaTeamC = requestHelper.getParameter("odrpl_na_team_c");
					searchPeriod = requestHelper.getParameter("search_period");
					calFrom = requestHelper.getParameter("cal_from");
					calTo = requestHelper.getParameter("cal_to");
					naWrsC = requestHelper.getParameter("na_wrs_c");
					vhcno = requestHelper.getParameter("vhcno");
					trplC = requestHelper.getParameter("trplC");
					String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(trplC, requestHelper);

					
					List<OrderOrdersWrsTrdVO> wrsList = ordersService.retrieveOrderWrsTrd(odrplNaTrplC, odrplNaTeamC, searchPeriod, calFrom, calTo, naWrsC, vhcno, TRPL_C_ARR);
					if(wrsList != null && wrsList.size() > 0){
						DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
						dsHelper.addColumns(OrderOrdersWrsTrdVO.class);
						for(OrderOrdersWrsTrdVO vo : wrsList){
							dsHelper.setData(vo);
						}
						out_PlatformData.addDataSet(dsHelper.getDataSet());
					}
					break;
				default : 
					logger.error("searchType of parameter is no Value");
					sendData(response, new PlatformData(), -1, "error.message.required.parameters");
			
			}
			
			if(idx.equals("1") || idx.equals("2") || idx.equals("3")) {
				/**
				 * 빌링 마크 시작
				 */
				
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();

				LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
				values.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
				values.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
				values.put("ODR_DT", odrDt);
				values.put("ODR_SLPNO", odrSlpno);
				DeduplicationObject ddo = new DeduplicationObject(values);
				billingSet.add(ddo);

				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 

				
				markBilling(GLN, MD_ID, billingSet);
				

				/**
				 * 빌링 마크 종료
				 */
			}

			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	private void markBilling(String GLN, String MD_ID, HashSet<DeduplicationObject> billingSet) {
		billingMarkUpService.markUpForOrders(BillingMarkUpTableName.TB_OD_ORDER_M, GLN, MD_ID, billingSet);
	}
	
	/* 수주조회 일자별 Excel DownLoad  */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/order/downloadExcelDaily")
	public void downloadExcelDaily(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String searchType 		= request.getParameter("search_type");//조회구분
			String naWrsC 			= request.getParameter("na_wrs_c");//상품코드
			String searchPeriod 	= request.getParameter("search_period");//조회기간
			String calFrom 			= request.getParameter("cal_from");//From Date
			String calTo 			= request.getParameter("cal_to");//To Date
			String phdFcltC 		= request.getParameter("phd_fclt_c");//물류기능코드
			String wmcLocRgnDsc 	= request.getParameter("wmc_loc_rgn_dsc");//지역코드00 (시)
			String htLovRgnC 		= request.getParameter("ht_lov_rgn_c");//지역코드01(구)
			String naOdrStsDsc 		= request.getParameter("na_odr_sts_dsc");//발주상태구분
			
			String fileName = "수주내역조회_일자별_"+calFrom+"-"+calTo+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C 			= request.getParameter("trplC");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setTrplC(TRPL_C_ARR);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{
					"발주일자",
					"발주번호",
					"배송요청일",
					"발주상태",
					"발주처",
					"발주처명",
					"발주처팀",
					"상품코드",
					"상품명",
					"규격",
					"단위",
					"박스수량",
					"발주단가",
					"발주수량",
					"박스발주수량",
					"발주금액",
					"공병금액",
					"배송지",
					"배송지명",
					"배송지팀",
					"물류기능코드"
				  };
			String[] keyIndex = new String[]{
					"B_ODR_DT",
					"B_ODR_SLPNO",
					"B_DVY_RQR_DT",
					"B_NA_ODR_STS_DSC",
					"B_ODRPL_NA_TRPL_C",
					"B_ODRPL_NA_TRPL_N",
					"B_ODRPL_NA_TEAM_C",
					"C_NA_WRS_C",
					"C_WRSNM",
					"C_WRS_STDNM",
					"C_NA_WRS_UNT_C",
					"C_BOXPE_AQZ",
					"C_ODR_PCS",
					"C_ODR_QT",
					"C_BOX_QT",
					"C_ODR_VAT",
					"C_VCBT_AM",
					"B_DVYAA_NA_TRPL_C",
					"B_DVYAA_NA_TRPL_N",
					"B_DVYAA_NA_TEAM_C",
					"BKG_EVT_DSC"
				};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			ordersService.downloadExcelRvopl(srhVo, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			String searchTypeTxt 	= "";
			String searchPeriodTxt 	= "";
			if(StringUtils.equals("1", searchType)){
				searchTypeTxt = "일자별";
			}else if(StringUtils.equals("2", searchType)){
				searchTypeTxt = "발주처별";
			}else if(StringUtils.equals("3", searchType)){
				searchTypeTxt = "소속사업장별";
			}else{
				searchTypeTxt = "상품별";
			}
			
			if(StringUtils.equals("1", searchType)){
				searchPeriodTxt = "수주일";
			}else{
				searchPeriodTxt = "배송요청일";
			}
			
		
				
			searchMap.put("조회구분", searchTypeTxt);
			searchMap.put("상품코드", naWrsC);
			searchMap.put("조회기간구분", searchPeriodTxt);
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);
			searchMap.put("물류기능코드,", phdFcltC);
			searchMap.put("지역코드00", wmcLocRgnDsc);
			searchMap.put("지역코드01", htLovRgnC);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
			/**
			 * 빌링 마크 시작
			 */
			List<Map<String, Object>> billingList = ordersService.downloadExcelRvoplBilling(srhVo);
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.get("B_ODRPL_NA_TRPL_C").toString());
					values.put("ODRPL_NA_TEAM_C", vo.get("B_ODRPL_NA_TEAM_C").toString());
					values.put("ODR_DT", vo.get("B_ODR_DT").toString());
					values.put("ODR_SLPNO", vo.get("B_ODR_SLPNO").toString());
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
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/* 수주조회 발주처별 Excel DownLoad  */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/order/downloadExcelOdrpl")
	public void downloadExcelOdrpl(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String searchType 		= request.getParameter("search_type");//조회구분
			String naWrsC 				= request.getParameter("na_wrs_c");//상품코드
			String searchPeriod 		= request.getParameter("search_period");//조회기간
			String calFrom 			= request.getParameter("cal_from");//From Date
			String calTo 				= request.getParameter("cal_to");//To Date
			String phdFcltC 			= request.getParameter("phd_fclt_c");//물류기능코드
			String wmcLocRgnDsc 	= request.getParameter("wmc_loc_rgn_dsc");//지역코드00 (시)
			String htLovRgnC 			= request.getParameter("ht_lov_rgn_c");//지역코드01(구)
			String naOdrStsDsc 		= request.getParameter("na_odr_sts_dsc");//발주상태구분
			String splr_trpl_c		= requestHelper.getParameter("splr_trpl_c");	// 발주처별 사업장코드
			String splr_team_c		= requestHelper.getParameter("splr_team_c");	// 발주처별 사업장코드
			String fileName = "수주내역조회_발주처별_"+calFrom+"-"+calTo+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C 				= request.getParameter("trplC");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setOdrplNaTrplC(splr_trpl_c);
			srhVo.setOdrplNaTeamC(splr_team_c);
			srhVo.setTrplC(TRPL_C_ARR);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{
					"발주처",
					"발주처명",
					"발주처팀명",
					"발주일자",
					"발주번호",
					"발주상태",
					"배송요청일",
					"상품코드",
					"상품명",
					"규격",
					"단위",
					"박스수량",
					"발주단가",
					"발주수량",
					"박스발주수량",
					"발주금액",
					"공병금액",
					"배송지",
					"배송지명",
					"배송지팀",
					"물류기능코드"
				  };
			String[] keyIndex = new String[]{
					"B_ODRPL_NA_TRPL_C",
					"B_ODRPL_NA_TRPL_N",
					"B_ODRPL_NA_TEAM_N",
					"B_ODR_DT",
					"B_ODR_SLPNO",
					"B_NA_ODR_STS_DSC",
					"B_DVY_RQR_DT",
					"C_NA_WRS_C",
					"C_WRSNM",
					"C_WRS_STDNM",
					"C_NA_WRS_UNT_C",
					"C_BOXPE_AQZ",
					"C_ODR_PCS",
					"C_ODR_QT",
					"C_BOX_QT",
					"C_ODR_AM",
					"C_VCBT_AM",
					"B_DVYAA_NA_TRPL_C",
					"B_DVYAA_NA_TRPL_N",
					"B_DVYAA_NA_TEAM_C",
					"BKG_EVT_DSC"
				};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			ordersService.downloadExcelRvopl(srhVo, handler);

			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			String searchTypeTxt 	= "";
			String searchPeriodTxt 	= "";
			if(StringUtils.equals("1", searchType)){
				searchTypeTxt = "일자별";
			}else if(StringUtils.equals("2", searchType)){
				searchTypeTxt = "발주처별";
			}else if(StringUtils.equals("3", searchType)){
				searchTypeTxt = "소속사업장별";
			}else{
				searchTypeTxt = "상품별";
			}
			
			if(StringUtils.equals("1", searchType)){
				searchPeriodTxt = "수주일";
			}else{
				searchPeriodTxt = "배송요청일";
			}
			
		
				
			searchMap.put("조회구분", searchTypeTxt);
			searchMap.put("상품코드", naWrsC);
			searchMap.put("조회기간구분", searchPeriodTxt);
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);
			searchMap.put("물류기능코드,", phdFcltC);
			searchMap.put("지역코드00", wmcLocRgnDsc);
			searchMap.put("지역코드01", htLovRgnC);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = ordersService.downloadExcelRvoplBilling(srhVo);
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.get("B_ODRPL_NA_TRPL_C").toString());
					values.put("ODRPL_NA_TEAM_C", vo.get("B_ODRPL_NA_TEAM_C").toString());
					values.put("ODR_DT", vo.get("B_ODR_DT").toString());
					values.put("ODR_SLPNO", vo.get("B_ODR_SLPNO").toString());
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
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/* 수주조회 소속사업장별 Excel DownLoad  */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/order/downloadExcelRvopl")
	public void downloadExcelRvopl(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String searchType 		= request.getParameter("search_type");//조회구분
			String naWrsC 				= request.getParameter("na_wrs_c");//상품코드
			String searchPeriod 		= request.getParameter("search_period");//조회기간
			String calFrom 			= request.getParameter("cal_from");//From Date
			String calTo 				= request.getParameter("cal_to");//To Date
			String phdFcltC 			= request.getParameter("phd_fclt_c");//물류기능코드
			String wmcLocRgnDsc 	= request.getParameter("wmc_loc_rgn_dsc");//지역코드00 (시)
			String htLovRgnC 			= request.getParameter("ht_lov_rgn_c");//지역코드01(구)
			String naOdrStsDsc 		= request.getParameter("na_odr_sts_dsc");//발주상태구분
			String ddlyYn 			= request.getParameter("ddly_yn");
			String fileName = "수주내역조회_소속사업장_"+calFrom+"-"+calTo+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			//String fileName = request.getParameter("fileName");
			String TRPL_C 				= request.getParameter("trplC");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setTrplC(TRPL_C_ARR);
			srhVo.setDdlyYn(ddlyYn);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			//System.out.println("#######  "+list);
			String[] header = new String[]{
					"00수주처",
					"01수주처명",
					"02발주처",
					"03발주처명",
					"04발주처팀명",
					"05발주일자",
					"06발주번호",
					"07발주상태",
					"08배송요청일",
					"09상품코드",
					"10상품명",
					"11규격",
					"12단위",
					"13박스수량",
					"14발주단가",
					"15발주수량",
					"16박스발주수량",
					"17수주금액",
					"18공병금액",
					"19XML변경서번호",
					"20XML발주서번호",
					"21XML문서전송일자",
					"22XML제안주문번호",
					"23최초등록일시",
					"24최종변경일시",
					"25최종변경자개인번호",
					"26삭제일시",
					"27배송지",
					"28배송지명",
					"29배송지팀",
					"30지역코드",
					"31지역명",
					"32수발주정보생성 구분코드",
					"33지방소주여부",
					"34물류기능코드",
					"35원발주처코드",
					"36원발주처명",
					"35원발주처팀코드"
				  };
			String[] keyIndex = new String[]{
					"B_RVOPL_NA_TRPL_C",
					"B_RVOPL_NA_TRPL_NM",
					"B_ODRPL_NA_TRPL_C",
					"B_ODRPL_NA_TRPL_N",
					"B_ODRPL_NA_TEAM_N",
					"B_ODR_DT",
					"B_ODR_SLPNO",
					"B_NA_ODR_STS_DSC",
					"B_DVY_RQR_DT",
					"C_NA_WRS_C",
					"C_WRSNM",
					"C_WRS_STDNM",
					"C_NA_WRS_UNT_C",
					"C_BOXPE_AQZ",
					"C_ODR_PCS",
					"C_ODR_QT",
					"C_BOX_QT",
					"C_ODR_AM",
					"C_VCBT_AM",
					"B_XML_CHDOC_NO",
					"B_XML_ODRW_NO",
					"B_XML_DOC_TMS_DT",
					"B_XML_OFFER_ODR_NO",
					"B_FSRG_DTM",
					"B_LSCHG_DTM",
					"B_LS_CMENO",
					"B_DEL_DTM",
					"B_DVYAA_NA_TRPL_C",
					"B_DVYAA_NA_TRPL_N",
					"B_DVYAA_NA_TEAM_C",
					"NA_RGN_C",
					"RGN_CNM",
					"B_ROGO_INF_CRT",
					"B_GRS_SOJU_YN",
					"BKG_EVT_DSC",
					"OGN_ODRPL_NA_TRPL_C",
					"OGN_ODRPL_NA_TRPL_NM",
					"OGN_ODRPL_NA_TEAM_C"
					
				};
			
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			ordersService.downloadExcelRvopl(srhVo, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			String searchTypeTxt 	= "";
			String searchPeriodTxt 	= "";
			if(StringUtils.equals("1", searchType)){
				searchTypeTxt = "일자별";
			}else if(StringUtils.equals("2", searchType)){
				searchTypeTxt = "발주처별";
			}else if(StringUtils.equals("3", searchType)){
				searchTypeTxt = "소속사업장별";
			}else{
				searchTypeTxt = "상품별";
			}
			
			if(StringUtils.equals("1", searchType)){
				searchPeriodTxt = "수주일";
			}else{
				searchPeriodTxt = "배송요청일";
			}
			
		
				
			searchMap.put("조회구분", searchTypeTxt);
			searchMap.put("상품코드", naWrsC);
			searchMap.put("조회기간구분", searchPeriodTxt);
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);
			searchMap.put("물류기능코드,", phdFcltC);
			searchMap.put("지역코드00", wmcLocRgnDsc);
			searchMap.put("지역코드01", htLovRgnC);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = ordersService.downloadExcelRvoplBilling(srhVo);
			/**
			 * 빌링 마크 시작
			 */
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.get("B_ODRPL_NA_TRPL_C").toString());
					values.put("ODRPL_NA_TEAM_C", vo.get("B_ODRPL_NA_TEAM_C").toString());
					values.put("ODR_DT", vo.get("B_ODR_DT").toString());
					values.put("ODR_SLPNO", vo.get("B_ODR_SLPNO").toString());
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
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0110
	 * 화면명  : 수주내역조회 
	 * 기    능 : 일자별 Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/order/printDaily")
	public RestResult printDaily(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String searchType, String naWrsC, String searchPeriod, String calFrom,
			String sName, String calTo, String phdFcltC, String wmcLocRgnDsc, String htLovRgnC, String naOdrStsDsc, String trplC){
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setTrplC(TRPL_C_ARR);
			
			
			//타이틀
			List<Map<String,Object>> billingList	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> titleList 		= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();
			
			Map<String,Object> _billing 		= new LinkedHashMap<String, Object>();
			String billingKey = requestHelper.getUserID()+DateUtil.getCurrentDate().getTime();
			_billing.put("billingKey", billingKey);
			billingList.add(_billing);
			
			Map<String,Object> _title 		= new LinkedHashMap<String, Object>();

			//Title Set
			_title.put("top1", sName);	
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			
			
			titleList.add(_title);
			
			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<OrderOrdersDailyMasterPrintVO> mList = ordersService.printDailyOrderMaster(srhVo);
			if(mList != null && mList.size() > 0){
				//Detail List Set
				int keyIndex = 0;
				for(OrderOrdersDailyMasterPrintVO vo : mList){
					//Master Set
					Map<String,Object> _master 	= new LinkedHashMap<String, Object>();
					_master.put("key", "key"+keyIndex);
					_master.put("YMD_master01", vo.getODR_DT());//수주일
					_master.put("master02", vo.getODR_SLPNO());//발주번호
					_master.put("YMD_master03", vo.getDVY_RQR_DT());//배송요청일
					_master.put("master04", vo.getNA_ODR_STS_DSC_N());//발주상태
					_master.put("master05", vo.getODRPL_NA_TRPL_C());//발주처명
					_master.put("master06", vo.getODRPL_NA_TRPL_N());//발주처명
					_master.put("master07", vo.getODRPL_NA_TEAM_C());//발주처팀
					_master.put("NUM_master08", vo.getODR_QTTT());//발주량합계
					_master.put("NUM_master09", vo.getBOXPE_AQZ());//BOX합계
					_master.put("NUM_master10", vo.getODR_SAM());//수주합계
					_master.put("NUM_master11", vo.getVCBT_AM());//공병합계
					masterList.add(_master);
					
					for(OrderOrdersDailyDetailPrintVO item : vo.getList()){
						Map<String,Object> _detail 	= new LinkedHashMap<String, Object>();
						_detail.put("key", "key"+keyIndex);
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());
						_detail.put("detail03", item.getNA_WRS_STD_UNT_N());//규격
						_detail.put("detail04", item.getNA_WRS_UNT_N());//단위
						_detail.put("NUM_detail05", item.getB_BOXPE_AQZ());//입수량
						_detail.put("NUM_detail06", item.getODR_PCS());//단가
						_detail.put("NUM_detail07", item.getODR_QT());//발주량
						_detail.put("NUM_detail08", item.getBOX_QT());
						_detail.put("NUM_detail09", item.getODR_AM());//
						_detail.put("NUM_detail10", item.getB_VCBT_AM());//공병금액
						_detail.put("NUM_detail11", item.getODR_DSQNO());//상품순서
						detailList.add(_detail);
					}
					keyIndex++;
				}
			}
			
			
			/**
			 * 빌링 마크 시작
			 */
			 
			if(mList != null && mList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(OrderOrdersDailyMasterPrintVO vo : mList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.getODRPL_NA_TRPL_C());
					values.put("ODRPL_NA_TEAM_C", vo.getODRPL_NA_TEAM_C());
					values.put("ODR_DT", vo.getODR_DT());
					values.put("ODR_SLPNO", vo.getODR_SLPNO());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				BillingMarkVO markVo = new BillingMarkVO(
						BillingMarkUpTableName.TB_OD_ORDER_M, 
						GLN, MD_ID, billingSet);
				FileUtil.writeToObject(
						Configurer.getProperty("file.temp.path")+File.separator+billingKey,
						markVo);
			}
			/**
			 * 빌링 마크 종료
			 */
			all_list.add(billingList);
			all_list.add(titleList);
			all_list.add(masterList);
			all_list.add(detailList);
					
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0110
	 * 화면명  : 수주내역조회 
	 * 기    능 : 발주처별 Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/order/printOdrpl")
	public RestResult printOdrpl(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String searchType, String naWrsC, String searchPeriod, String calFrom,
			String sName, String calTo, String phdFcltC, String wmcLocRgnDsc, String htLovRgnC, String naOdrStsDsc, String splrTrplC, String splrTeamC, String trplC){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{			
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setOdrplNaTrplC(splrTrplC);
			srhVo.setOdrplNaTeamC(splrTeamC);
			srhVo.setTrplC(TRPL_C_ARR);
						
			List<Map<String,Object>> billingList	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> titleList 		= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();
			
			//빌링키
			Map<String,Object> _billing 		= new LinkedHashMap<String, Object>();
			String billingKey = requestHelper.getUserID()+DateUtil.getCurrentDate().getTime();
			_billing.put("billingKey", billingKey);
			billingList.add(_billing);
			
			Map<String,Object> _title	= new LinkedHashMap<String, Object>();
			//Title Set
			_title.put("top1", sName);	
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			titleList.add(_title);
			
			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<OrderOrdersOdrplMasterPrintVO> mList = ordersService.printOdrplOrderMaster(srhVo);
			if(mList != null && mList.size() > 0){
				int keyIndex = 0;
				//Detail List Set
				for(OrderOrdersOdrplMasterPrintVO vo : mList){
					//Master Set
					Map<String,Object> _master 	= new LinkedHashMap<String, Object>();
					_master.put("key", "key"+keyIndex);
					_master.put("master01", vo.getODRPL_NA_TRPL_C());//발주처
					_master.put("master02", vo.getODRPL_NA_TRPL_N());//발주처명
					_master.put("master03", vo.getODRPL_NA_TEAM_C());//발주처팀
					_master.put("YMD_master04", vo.getODR_DT());//발주일
					_master.put("master05", vo.getODR_SLPNO());//발주전표
					_master.put("master06", vo.getNA_ODR_STS_DSC_N());//발주상태
					_master.put("YMD_master07", vo.getDVY_RQR_DT());//배송예정일
					_master.put("NUM_master08", vo.getODR_QTTT());//발주량합계
					_master.put("NUM_master09", vo.getBOXPE_AQZ());//BOX합계
					_master.put("NUM_master10", vo.getODR_SAM());//수주합계
					_master.put("NUM_master11", vo.getVCBT_AM());//공병합계
					masterList.add(_master);
					
					for(OrderOrdersOdrplDetailPrintVO item : vo.getList()){
						Map<String,Object> _detail 	= new LinkedHashMap<String, Object>();
						_detail.put("key", "key"+keyIndex);
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());
						_detail.put("detail03", item.getNA_WRS_UNT_N());//규격
						_detail.put("detail04", item.getNA_WRS_UNT_N());//단위
						_detail.put("NUM_detail05", item.getB_BOXPE_AQZ());//입수량
						_detail.put("NUM_detail06", item.getBYNG_UPR());//단가
						_detail.put("NUM_detail07", item.getODR_QT());//발주량
						_detail.put("NUM_detail08", item.getBOX_QT());
						_detail.put("NUM_detail09", item.getODR_AM());//
						_detail.put("NUM_detail10", item.getB_VCBT_AM());//공병금액
						_detail.put("NUM_detail11", item.getODR_DSQNO());//상품순서
						detailList.add(_detail);
					}	
					keyIndex++;
				}
			}
			
			/**
			 * 빌링 마크 시작
			 */
			 
			if(mList != null && mList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(OrderOrdersOdrplMasterPrintVO vo : mList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.getODRPL_NA_TRPL_C());
					values.put("ODRPL_NA_TEAM_C", vo.getODRPL_NA_TEAM_C());
					values.put("ODR_DT", vo.getODR_DT());
					values.put("ODR_SLPNO", vo.getODR_SLPNO());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				BillingMarkVO markVo = new BillingMarkVO(
						BillingMarkUpTableName.TB_OD_ORDER_M, 
						GLN, MD_ID, billingSet);
				FileUtil.writeToObject(
						Configurer.getProperty("file.temp.path")+File.separator+billingKey,
						markVo);
			}
			/**
			 * 빌링 마크 종료
			 */
			all_list.add(billingList);
			all_list.add(titleList);
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_0110
	 * 화면명  : 수주내역조회 
	 * 기    능 : 소속사업장별 Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/order/printRvopl")
	public RestResult printRvopl(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String searchType, String naWrsC, String searchPeriod, String calFrom,
			String sName, String calTo, String phdFcltC, String wmcLocRgnDsc, String htLovRgnC, String naOdrStsDsc, String trplC, String ddlyYn){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{			
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setTrplC(TRPL_C_ARR);
			srhVo.setDdlyYn(ddlyYn);
			
			//타이틀
			List<Map<String,Object>> billingList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> titleList 		= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();
			
			String billingKey = requestHelper.getUserID()+DateUtil.getCurrentDate().getTime();
			Map<String,Object> _billing 		= new LinkedHashMap<String, Object>();
			_billing.put("billingKey", billingKey);
			billingList.add(_billing);			
			
			Map<String,Object> _title	= new LinkedHashMap<String, Object>();
			//Title Set
			_title.put("top1", sName);	
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			
			
			
			titleList.add(_title);
			
			///////////////////////////////////////
			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<OrderOrdersRvoplMasterPrintVO> mList = ordersService.printRvopllOrderMaster(srhVo);
			if(mList != null && mList.size() > 0){
				int keyIndex = 0;
				//Detail List Set
				for(OrderOrdersRvoplMasterPrintVO vo : mList){
					//Master Set
					Map<String,Object> _master 	= new LinkedHashMap<String, Object>();
					_master.put("key", "key"+keyIndex);
					_master.put("master01", vo.getRVOPL_NA_TRPL_N());//수주처명
					_master.put("master02", vo.getODRPL_NA_TRPL_N());//발주처명
					_master.put("master03", vo.getODRPL_NA_TEAM_C());//발주처팀
					_master.put("YMD_master04", vo.getODR_DT());//발주일
					_master.put("master05", vo.getODR_SLPNO());//발주전표
					_master.put("master06", vo.getNA_ODR_STS_DSC_N());//발주상태
					_master.put("YMD_master07", vo.getDVY_RQR_DT());//배송예정일
					_master.put("NUM_master08", vo.getODR_QTTT());//발주량합계
					_master.put("NUM_master09", vo.getBOXPE_AQZ());//BOX합계
					_master.put("NUM_master10", vo.getODR_SAM());//수주합계
					_master.put("NUM_master11", vo.getVCBT_AM());//공병합계
					masterList.add(_master);
					
					for(OrderOrdersRvoplDetailPrintVO item : vo.getList()){
						Map<String,Object> _detail 	= new LinkedHashMap<String, Object>();
						_detail.put("key", "key"+keyIndex);
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());
						_detail.put("detail03", item.getNA_WRS_UNT_N());//규격
						_detail.put("detail04", item.getNA_WRS_UNT_N());//단위
						_detail.put("NUM_detail05", item.getB_BOXPE_AQZ());//입수량
						_detail.put("NUM_detail06", item.getBYNG_UPR());//단가
						_detail.put("NUM_detail07", item.getODR_QT());//발주량
						_detail.put("NUM_detail08", item.getBOX_QT());
						_detail.put("NUM_detail09", item.getODR_AM());//
						_detail.put("NUM_detail10", item.getB_VCBT_AM());//공병금액
						_detail.put("NUM_detail11", item.getODR_DSQNO());//상품순서
						detailList.add(_detail);
					}
					keyIndex++;
				}
			}
			/**
			 * 빌링 마크 시작
			 */
			 
			if(mList != null && mList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(OrderOrdersRvoplMasterPrintVO vo : mList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.getODRPL_NA_TRPL_C());
					values.put("ODRPL_NA_TEAM_C", vo.getODRPL_NA_TEAM_C());
					values.put("ODR_DT", vo.getODR_DT());
					values.put("ODR_SLPNO", vo.getODR_SLPNO());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				BillingMarkVO markVo = new BillingMarkVO(
						BillingMarkUpTableName.TB_OD_ORDER_M, 
						GLN, MD_ID, billingSet);
				FileUtil.writeToObject(
						Configurer.getProperty("file.temp.path")+File.separator+billingKey,
						markVo);
			}
			/**
			 * 빌링 마크 종료
			 */
			all_list.add(billingList);
			all_list.add(titleList);
			all_list.add(masterList);
			all_list.add(detailList);
					
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0140
	 * 화면명  : 수주내역조회 
	 * 기    능 : 소속사업장별 Print (원발주처)
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/order/printRvoplOgn")
	public RestResult printRvoplOgn(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String searchType, String naWrsC, String searchPeriod, String calFrom,
			String sName, String calTo, String phdFcltC, String wmcLocRgnDsc, String htLovRgnC, String naOdrStsDsc, String trplC, String ddlyYn){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{			
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setTrplC(TRPL_C_ARR);
			srhVo.setDdlyYn(ddlyYn);
			
			//타이틀
			List<Map<String,Object>> billingList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> titleList 		= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();
			
			String billingKey = requestHelper.getUserID()+DateUtil.getCurrentDate().getTime();
			Map<String,Object> _billing 		= new LinkedHashMap<String, Object>();
			_billing.put("billingKey", billingKey);
			billingList.add(_billing);			
			
			Map<String,Object> _title	= new LinkedHashMap<String, Object>();
			//Title Set
			_title.put("top1", sName);	
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			
			
			
			titleList.add(_title);
			
			///////////////////////////////////////
			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<OrderOrdersRvoplMasterPrintVO> mList = ordersService.printRvopllOrderMaster(srhVo);
			if(mList != null && mList.size() > 0){
				int keyIndex = 0;
				//Detail List Set
				for(OrderOrdersRvoplMasterPrintVO vo : mList){
					//Master Set
					Map<String,Object> _master 	= new LinkedHashMap<String, Object>();
					_master.put("key", "key"+keyIndex);
					_master.put("master01", vo.getODRPL_NA_TRPL_C());//발주처
					_master.put("master02", vo.getODRPL_NA_TRPL_N());//발주처명
					_master.put("master03", vo.getODRPL_NA_TEAM_C());//발주처팀
					_master.put("YMD_master04", vo.getODR_DT());//발주일
					_master.put("master05", vo.getODR_SLPNO());//발주전표
					_master.put("master06", vo.getNA_ODR_STS_DSC_N());//발주상태
					_master.put("YMD_master07", vo.getDVY_RQR_DT());//배송예정일
					_master.put("NUM_master08", vo.getODR_QTTT());//발주량합계
					_master.put("NUM_master09", vo.getBOXPE_AQZ());//BOX합계
					_master.put("NUM_master10", vo.getODR_SAM());//수주합계
					_master.put("NUM_master11", vo.getVCBT_AM());//공병합계
					masterList.add(_master);
					
					for(OrderOrdersRvoplDetailPrintVO item : vo.getList()){
						Map<String,Object> _detail 	= new LinkedHashMap<String, Object>();
						_detail.put("key", "key"+keyIndex);
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());
						_detail.put("detail03", item.getNA_WRS_UNT_N());//규격
						_detail.put("detail04", item.getNA_WRS_UNT_N());//단위
						_detail.put("NUM_detail05", item.getB_BOXPE_AQZ());//입수량
						_detail.put("NUM_detail06", item.getBYNG_UPR());//단가
						_detail.put("NUM_detail07", item.getODR_QT());//발주량
						_detail.put("NUM_detail08", item.getBOX_QT());
						_detail.put("NUM_detail09", item.getODR_AM());//
						_detail.put("NUM_detail10", item.getB_VCBT_AM());//공병금액
						_detail.put("NUM_detail11", item.getODR_DSQNO());//상품순서
						_detail.put("detail05", item.getOGN_ODRPL_NA_TRPL_C());//경제통합 원발주처경제통합거래처코드
						_detail.put("detail06", item.getOGN_ODRPL_NA_TRPL_NM());//경제통합 원발주처경제통합거래처명
						_detail.put("detail07", item.getOGN_ODRPL_NA_TEAM_C());//경제통합 원발주처경제통합팀코드
						detailList.add(_detail);
					}
					keyIndex++;
				}
			}
			/**
			 * 빌링 마크 시작
			 */
			 
			if(mList != null && mList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(OrderOrdersRvoplMasterPrintVO vo : mList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.getODRPL_NA_TRPL_C());
					values.put("ODRPL_NA_TEAM_C", vo.getODRPL_NA_TEAM_C());
					values.put("ODR_DT", vo.getODR_DT());
					values.put("ODR_SLPNO", vo.getODR_SLPNO());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				BillingMarkVO markVo = new BillingMarkVO(
						BillingMarkUpTableName.TB_OD_ORDER_M, 
						GLN, MD_ID, billingSet);
				FileUtil.writeToObject(
						Configurer.getProperty("file.temp.path")+File.separator+billingKey,
						markVo);
			}
			/**
			 * 빌링 마크 종료
			 */
			all_list.add(billingList);
			all_list.add(titleList);
			all_list.add(masterList);
			all_list.add(detailList);
					
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/* 수주조회 상품별 Excel DownLoad  */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/order/downloadExcelWrs")
	public void downloadExcelWrs(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String searchType 		= request.getParameter("search_type");//조회구분
			String naWrsC 			= request.getParameter("na_wrs_c");//상품코드
			String searchPeriod 	= request.getParameter("search_period");//조회기간
			String calFrom 			= request.getParameter("cal_from");//From Date
			String calTo 			= request.getParameter("cal_to");//To Date
			String phdFcltC 		= request.getParameter("phd_fclt_c");//물류기능코드
			String wmcLocRgnDsc 	= request.getParameter("wmc_loc_rgn_dsc");//지역코드00 (시)
			String htLovRgnC 		= request.getParameter("ht_lov_rgn_c");//지역코드01(구)
			String naOdrStsDsc 		= request.getParameter("na_odr_sts_dsc");//지역코드01(구)
			String TRPL_C 			= request.getParameter("trplC");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String fileName 		= "수주내역조회_상품별_"+calFrom+"-"+calTo+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setTrplC(TRPL_C_ARR);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			

			String[] header = new String[]{
					"상품코드",
					"상품명",
					"규격",
					"단위",
					"박스수량",
					"발주단가",
					"발주처",
					"발주처명",
					"발주처팀명",
					"발주일자",
					"발주번호",
					"발주상태",
					"배송요청일",
					"발주수량",
					"박스발주수량",
					"발주금액",
					"공병금액",
					"배송지",
					"배송지명",
					"배송지팀",
					"차량번호",
					"물류기능코드"
				  };
			String[] keyIndex = new String[]{
					"C_NA_WRS_C",
					"C_WRSNM",
					"C_WRS_STDNM",
					"C_NA_WRS_UNT_C",
					"C_BOXPE_AQZ",
					"C_ODR_PCS",
					"B_ODRPL_NA_TRPL_C",
					"B_ODRPL_NA_TRPL_N",
					"B_ODRPL_NA_TEAM_N",
					"B_ODR_DT",
					"B_ODR_SLPNO",
					"B_NA_ODR_STS_DSC",
					"B_DVY_RQR_DT",
					"C_ODR_QT",
					"C_BOX_QT",
					"B_ODR_AM",
					"B_VCBT_AM",
					"B_DVYAA_NA_TRPL_C",
					"B_DVYAA_NA_TRPL_N",
					"B_DVYAA_NA_TEAM_C",
					"B_VHCNO",
					"BKG_EVT_DSC"
				};
		
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			ordersService.downloadExcelWrs_new(srhVo, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			String searchTypeTxt 	= "";
			String searchPeriodTxt 	= "";
			if(StringUtils.equals("1", searchType)){
				searchTypeTxt = "일자별";
			}else if(StringUtils.equals("2", searchType)){
				searchTypeTxt = "발주처별";
			}else if(StringUtils.equals("3", searchType)){
				searchTypeTxt = "소속사업장별";
			}else{
				searchTypeTxt = "상품별";
			}
			
			if(StringUtils.equals("1", searchType)){
				searchPeriodTxt = "수주일";
			}else{
				searchPeriodTxt = "배송요청일";
			}
			
		
				
			searchMap.put("조회구분", searchTypeTxt);
			searchMap.put("상품코드", naWrsC);
			searchMap.put("조회기간구분", searchPeriodTxt);
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);
			searchMap.put("물류기능코드,", phdFcltC);
			searchMap.put("지역코드00", wmcLocRgnDsc);
			searchMap.put("지역코드01", htLovRgnC);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0110
	 * 화면명  : 수주내역조회 
	 * 기    능 : 상품별 Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/order/printWrs")
	public RestResult printWrs(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String searchType, String naWrsC, String searchPeriod, String calFrom,
			String sName, String calTo, String phdFcltC, String wmcLocRgnDsc, String htLovRgnC, String naOdrStsDsc, String trplC){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{			
			String TRPL_C = requestHelper.getParameter("trplC");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
	
			OrderOrdersSrhConditonVO srhVo = new OrderOrdersSrhConditonVO();
			srhVo.setSearchType(searchType);
			srhVo.setNaWrsC(naWrsC);
			srhVo.setSearchPeriod(searchPeriod);
			srhVo.setCalFrom(calFrom);
			srhVo.setCalTo(calTo);
			srhVo.setPhdFcltC(phdFcltC);
			srhVo.setWmcLocRgnDsc(wmcLocRgnDsc);
			srhVo.setHtLovRgnC(htLovRgnC);
			srhVo.setNaOdrStsDsc(naOdrStsDsc);
			srhVo.setTrplC(TRPL_C_ARR);
			

			List<Map<String,Object>> titleList 		= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();
			
			Map<String,Object> _title 	= new LinkedHashMap<String, Object>();
			//Title Set
			_title.put("top1", sName);	
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			titleList.add(_title);

			///////////////////////////////////////
			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<OrderOrdersWrsFstVO> mList = ordersService.printWrslOrderMaster(srhVo);
			if(mList != null && mList.size() > 0){
				int keyIndex = 0;
				//Detail List Set
				for(OrderOrdersWrsFstVO vo : mList){
					//Master Set
					Map<String,Object> _master 	= new LinkedHashMap<String, Object>();
					_master.put("key", "key"+keyIndex);
					_master.put("master01", vo.getNA_WRS_C());
					_master.put("master02", vo.getWRSNM());
					_master.put("master03", vo.getWRS_STDNM());//규격
					_master.put("master04", vo.getNA_WRS_UNT_C());//단위
					_master.put("NUM_master05", vo.getBOXPE_AQZ());//입수량
					_master.put("NUM_master06", vo.getODR_PCS());//단가
					_master.put("NUM_master07", vo.getODR_QT());//발주량
					_master.put("NUM_master08", vo.getBOX_QT());
					_master.put("NUM_master09", vo.getODR_AM());//
					_master.put("NUM_master10", vo.getVCBT_AM());//공병금액
					masterList.add(_master);
					
					for(OrderOrdersWrsDetailPrintVO item : vo.getList()){
						Map<String,Object> _detail 	= new LinkedHashMap<String, Object>();
						_detail.put("key", "key"+keyIndex);
						_detail.put("detail01", item.getODRPL_NA_TRPL_C());
						_detail.put("detail02", item.getODRPL_NA_TRPL_N());
						_detail.put("detail03", item.getODRPL_NA_TEAM_C());
						_detail.put("YMD_detail04", item.getODR_DT());
						_detail.put("detail05", item.getODR_SLPNO());
						_detail.put("detail06", item.getNA_ODR_STS_DSC());
						_detail.put("YMD_detail07", item.getDVY_PLA_DT());
						_detail.put("NUM_detail08", item.getODR_QT());
						_detail.put("NUM_detail09", item.getBOXPE_AQZ());//
						_detail.put("NUM_detail10", item.getODR_AM());
						_detail.put("NUM_detail11", item.getVCBT_AM());
						_detail.put("NUM_detail12", item.getODR_DSQNO());
						detailList.add(_detail);
					}	
					keyIndex++;
				}
			}
			all_list.add(titleList);
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	
	
	
	
	/* TC 수주내역조회  */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveTCOrders")
	public void retrieveTCOrders(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String calFrom = requestHelper.getParameter("cal_from");
			String calTo = requestHelper.getParameter("cal_to");
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
			String nsUsrSysKdc = requestHelper.getParameter("na_usr_sys_kdc");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
		
			//paging
			int totalRowCount = ordersService.getTCOrdersCount(calFrom, calTo, odrplNaTrplC, nsUsrSysKdc, TRPL_C_ARR, naWrsC);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			
			List<OrderOrdersTCVO> list = ordersService.retrieveTCOrders(calFrom, calTo, odrplNaTrplC, nsUsrSysKdc, TRPL_C_ARR, naWrsC, start, end);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(OrderOrdersTCVO.class);
				for(OrderOrdersTCVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			
			/**
			 * 빌링 마크 시작
			 */
			if(list != null && list.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(OrderOrdersTCVO vo : list) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("ODRPL_NA_TRPL_C", vo.getODRPL_NA_TRPL_C());
					values.put("ODRPL_NA_TEAM_C", vo.getODRPL_NA_TEAM_C());
					values.put("ODR_DT", vo.getODR_DT());
					values.put("ODR_SLPNO", vo.getODR_SLPNO());
					values.put("ODR_DSQNO", vo.getODR_DSQNO());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				billingMarkUpService.markUpForOrdersTC(BillingMarkUpTableName.TB_OD_ORDER_TC, GLN, MD_ID, billingSet);
			}
			/**
			 * 빌링 마크 종료
			 */		
			
			
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/* TC 발주내역조회 Excel DownLoad  */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/order/downloadExcelTCOrders")
	public void downloadExcelTCOrders(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String calFrom 			= request.getParameter("cal_from");
			String calTo 				= request.getParameter("cal_to");
			String odrplNaTrplC 		= requestHelper.getParameter("odrpl_na_trpl_c");
			String TRPL_C 				= request.getParameter("TRPL_C");
			String naUsrSysKdc = request.getParameter("na_usr_sys_kdc");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String fileName 			= request.getParameter("fileName");
			String naWrsC = requestHelper.getParameter("na_wrs_c");//상품코드
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
					
			String[] header = new String[]{
					"1000(l)발주상세일련번호",
					"1001(v)경제통합상품코드",
					"1002(v)상품명",
					"1003(v)변경후경제통합상품코드",
					"1004(c)경제통합상품대분류코드",
					"1005(c)경제통합상품중분류코드",
					"1006(c)경제통합상품소분류코드",
					"1007(c)경제통합상품세분류코드",
					"1008(c)경제통합상품단위코드",
					"1009(c)경제통합상품포장코드",
					"1010(c)경제통합상품크기성별코드",
					"1011(c)경제통합상품품질등급코드",
					"1012(l)상품높이",
					"1013(l)상품세로길이",
					"1014(l)상품가로길이",
					"1015(c)상품외쌍겹구분코드",
					"1016(l)상품유공개수",
					"1017(v)발주상품내용",
					"1018(c)생산년도",
					"1019(c)과세구분코드",
					"1020(c)박스상품여부",
					"1021(c)직송여부",
					"1022(v)공병경제통합상품코드",
					"1023(d)공병금액",
					"1024(d)공상자금액",
					"1025(d)발주원가",
					"1026(d)할당수량",
					"1027(d)발주수량",
					"1028(d)발주부가세",
					"1029(d)발주금액",
					"1030(d)매입확정단가",
					"1031(d)매입확정수량",
					"1032(d)매입확정부가세",
					"1033(d)매입확정금액",
					"1034(c)산지경제통합사업장코드",
					"1035(v)산지경제통합사업장명",
					"1036(v)산지경제통합팀코드",
					"1037(v)산지경제통합팀명",
					"1038(v)수령인명",
					"1039(v)수령인전화번호",
					"1040(v)경제통합발주상태구분코드",
					"1041(v)비고내용",
					"1042(v)최초등록일시",
					"1043(c)최초등록자개인번호",
					"1044(v)최종변경일시",
					"1045(c)최종변경자개인번호",
					"1046(v)삭제일시",
					"1047(v)상품규격명",
					"1048(v)경제통합단위코드명",
					"1049(d)공병단가",
					"1050(c)생산년도관리여부",
					"1051(l)최소발주수량",
					"1052(l)최대발주수량",
					"1053(l)공병수량",
					"1054(l)박스당입수",
					"1055(c)물류예약",
					"1056(l)최소발주수량",
					"1057(l)최대발주수량",
					"1058(l)최소발주금액",
					"1059(l)최대발주금액",
					"1060(v)수주상태",
					"1061(c)상품유형코드",
					"1062(c)구매계약유형코드",
					"1063(c)구매사업방식코드",
					"1064(c)소분상품여부",
					"1065(l)소분단위수량",
					"1066(c)물류기능코드",
					"1067(d)원발주수량",
					"1068(v)발주처경제통합거래처코드",
					"1069(v)발주처경제통합팀코드",
					"1070(c)발주일자",
					"1071(v)발주전표번호",
					"1072(v)발주처경제통합거래처코드",
					"1073(v)발주처경제통합팀코드",
					"1074(v)과세구분코드",
					"1075(v)공급처거래처코드",
					"1076(v)공급처거래처코드"
				  };
			String[] keyIndex = new String[]{
					"ODR_DSQNO",
					"NA_WRS_C",
					"WRSNM",
					"CHAF_NA_WRS_C",
					"NA_WRS_LCLC",
					"NA_WRS_MCLC",
					"NA_WRS_SCLC",
					"NA_WRS_DTCF_C",
					"NA_WRS_UNT_C",
					"NA_WRS_PAK_C",
					"NA_WRS_SZE_SEX_C",
					"NA_WRS_QLT_GRDC",
					"WRS_HGHT",
					"WRS_LEN_LEN",
					"WRS_WDTH_LEN",
					"WRS_SDL_DSC",
					"WRS_AHL_CN",
					"ODR_WRS_CNTN",
					"PD_YY",
					"TXT_DSC",
					"BOX_WRS_YN",
					"DDLY_YN",
					"VCBT_NA_WRS_C",
					"VCBT_AM",
					"VCBX_AM",
					"ODR_PCS",
					"ALC_QT",
					"ODR_QT",
					"ODR_VAT",
					"ODR_AM",
					"BYNG_DFN_UPR",
					"BYNG_DFN_QT",
					"BYNG_DFN_VAT",
					"BYNG_DFN_AM",
					"PDAA_NA_TRPL_C",
					"PDAA_NA_TRPL_NM",
					"PDAA_NA_TEAM_C",
					"PDAA_NA_TEAM_NM",
					"RCPMNM",
					"RCPMN_TELNO",
					"NA_ODR_STS_DSC",
					"RMK_CNTN",
					"FSRG_DTM",
					"FSRGMN_ENO",
					"LSCHG_DTM",
					"LS_CMENO",
					"DEL_DTM",
					"WRS_STDNM",
					"NA_WRS_STD_UNT_C",
					"VCBT_UPR",
					"PD_YY_AMN_YN",
					"MIN_ODR_QT",
					"MAX_ODR_QT",
					"VCBT_QT",
					"BOXPE_AQZ",
					"MART_DIV_BKG_ODR_YN",
					"MAX_ODR_QT_A",
					"MIN_ODR_QT_A",
					"MAX_ODR_AM",
					"MIN_ODR_AM",
					"ORD_STS",
					"WRS_TPC",
					"CSER_CTR_TPC",
					"BUY_BZ_METC",
					"SVS_YN",
					"SVS_UNT_QT",
					"PHD_FCLT_C",
					"ODR_QT_A",
					"ODRPL_NA_TRPL_C",
					"ODRPL_NA_TEAM_C",
					"ODR_DT",
					"ODR_SLPNO",
					"ODRPL_NA_TRPL_N",
					"ODRPL_NA_TEAM_N",
					"TXT_DSC_N",
					"SPYPL_NA_TRPL_C",
					"SPYPL_NA_TRPL_N"
				};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);

			ordersService.excelTCOrders(calFrom, calTo, odrplNaTrplC, naUsrSysKdc, TRPL_C_ARR, naWrsC, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회시작일", calFrom);
			searchMap.put("조회종료일", calTo);
			searchMap.put("농협사업장", odrplNaTrplC);
			searchMap.put("사업장", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
			
			
			int count = ordersService.excelTCOrdersBilling(calFrom, calTo, odrplNaTrplC, naUsrSysKdc, TRPL_C_ARR, naWrsC);
			/**
			 * 빌링 마크 시작
			 */
			if(count > 0) {
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID();
				Map<String, String> pkMap = new HashMap<String, String>();
				pkMap.put("RVOPL_NA_TRPL_C", odrplNaTrplC);

				Map<String, String> dtMap = new HashMap<String, String>();
				dtMap.put("DT_NAME", "ODR_DT");
				dtMap.put("START_DT", calFrom);
				dtMap.put("END_DT", calTo);

				StringBuilder whereSB = new StringBuilder();
				whereSB.append("DEL_DTM IS NULL ");
				
				String s = "";
				for(String a : TRPL_C_ARR) {
					s=s+"'"+a+"',";
				}
				if(StringUtils.isNotEmpty(s)) {
					s = s.substring(0, s.length()-1);
				}
				
				whereSB.append("AND SPYPL_NA_TRPL_C IN ("+s+")");
				
				billingMarkUpService.markUp(BillingMarkUpTableName.TB_OD_ORDER_TC, GLN, MD_ID, dtMap, pkMap, whereSB.toString());
				
				
			}
			/**
			 * 빌링 마크 종료
			 */
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*배송지 조회 팝업 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/searchDVYAA")
	public void searchDVYAA(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
		
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_dvyaa");
			List<Map<String, Object>> mapList = ordersService.searchDVYAA(odrplNaTrplC, searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*상품 조회 팝업 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/searchWRS")
	public void searchWRS(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType 						= requestHelper.getParameter("searchType");
		String searchText 						= requestHelper.getParameter("searchText");
		String odrpl_na_trpl_c	 				= requestHelper.getParameter("odrpl_na_trpl_c");
		String odrpl_na_team_c 				= requestHelper.getParameter("odrpl_na_team_c");
		String prgr_c 								= requestHelper.getParameter("prgr_c");
		String ddly_yn 							= requestHelper.getParameter("ddly_yn");
		String chkDate								= requestHelper.getParameter("chkDate");
		String cserCtrTpc							= requestHelper.getParameter("cser_ctr_tpc");
		String trplC									= "";
		String orginTrplS							= "";
		String like							= requestHelper.getParameter("like");
		
		Map<String, Object> trnrelParams = new HashMap<String, Object>();
		trnrelParams.put("inBsDay", requestHelper.getParameter("in_BsDay"));
		trnrelParams.put("inTrplR", requestHelper.getParameter("in_TrplR"));			// 2.[거래관계]수주처
		trnrelParams.put("inTeamR", requestHelper.getParameter("in_TeamR"));			// 3.[거래관계]수주처팀
		trnrelParams.put("inTrplO", requestHelper.getParameter("in_TrplO"));			// 4.[거래관계]발주처
		trnrelParams.put("inTeamO", requestHelper.getParameter("in_TeamO"));			// 5.[거래관계]발주처팀
		trnrelParams.put("inTrplM", requestHelper.getParameter("in_TrplM"));			// 5.[거래관계]주관사업장
		trnrelParams.put("inTeamM", requestHelper.getParameter("in_TeamM"));			// 6.[거래관계]주관사업장팀
		trnrelParams.put("inCtrTpc", requestHelper.getParameter("in_CtrTpc"));			// 7.[거래관계]수요자계약유형
		trnrelParams.put("inSpyTpc", requestHelper.getParameter("in_SpyTpc"));			// 8.[거래관계]공급유형코드
		trnrelParams.put("inTrTpcM", requestHelper.getParameter("in_TrTpcM"));			// 9.[거래관계]주관경제통합거래유형
		trnrelParams.put("inWrsC", requestHelper.getParameter("in_WrsC"));				// 10.상품코드
		trnrelParams.put("inYear", requestHelper.getParameter("in_Year"));				// 11.생산년도      (가공사업/유통양곡)
		trnrelParams.put("inUseSysR", requestHelper.getParameter("in_UseSysR"));		// 12.[수주처]사용시스템
		trnrelParams.put("inUseSysO", requestHelper.getParameter("in_UseSysO"));		// 13.[발주처]사용시스템
		trnrelParams.put("inUseSysM", requestHelper.getParameter("in_UseSysM"));		// 14.[주관처]사용시스템
		trnrelParams.put("inDdlyYN", requestHelper.getParameter("in_DdlyYN"));			// 15.직송여부
		
		
		
		if(StringUtils.isNotEmpty(requestHelper.getParameter("trplC"))){
			trplC = requestHelper.getParameter("trplC");//직송시 물류코드
			if(StringUtils.equals("1", ddly_yn)){
				if(StringUtils.isEmpty(requestHelper.getParameter("orginTrplS"))){
					orginTrplS = requestHelper.getGlnCode();//공급처코드
				}else{
					orginTrplS = requestHelper.getParameter("orginTrplS");
				}
			}
		}else{
			trplC = requestHelper.getGlnCode();
		}
		
		if(logger.isDebugEnabled()){
			logger.debug("상품조회");
			logger.debug("odrpl_na_trpl_c : " + odrpl_na_trpl_c);
			logger.debug("odrpl_na_team_c : " + odrpl_na_team_c);
			logger.debug("prgr_c : " + prgr_c);
			logger.debug("ddly_yn : " + ddly_yn);
			logger.debug("chkDate : " + chkDate);
			logger.debug("cserCtrTpc : " + cserCtrTpc);
			logger.debug("orginTrplS : " + orginTrplS);
			logger.debug("trplC : " + trplC);
			logger.debug("like : " + like);
		}
		
		
		
		PlatformData platformData = new PlatformData();	
		try {
			
			List<OrderOrdersWrsVO> mapList = ordersService.searchWRS(searchType, searchText, odrpl_na_trpl_c, odrpl_na_team_c, prgr_c, ddly_yn, trplC, chkDate, cserCtrTpc, orginTrplS, trnrelParams, like);

			if(mapList != null && mapList.size() > 0 && mapList.get(0) != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_wrs");
				dsHelper.addColumns(OrderOrdersWrsVO.class);
				for(OrderOrdersWrsVO vo : mapList){
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
			
			/*
			
			if(mapList != null && mapList.size() > 0) {
				
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			    sendData(response, platformData);
			}
			*/
			/*
			else{
				List<String> list = ordersService.retrieveWrsCtrTpc(odrpl_na_trpl_c, cserCtrTpc, searchType, searchText);
				String msg = "";
				if(list != null && list.size() > 0){
					for(String ctrTpc : list) {
						
						if(StringUtils.equals("4",ctrTpc) || StringUtils.equals("5",ctrTpc)){
							msg = msg + "자체계약 ";
						}else{
							msg = msg + "계통계약 ";
						}
					}
					msg = "해당 상품 ["+searchText+"]은 " + msg + "상품입니다.";
					sendData(response, platformData, -999, msg);
				}
			}
			*/
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*거래관계 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/getTrnrel")
	public void getTrnrel(HttpServletRequest request, HttpServletResponse response) {
		PlatformData platformData = new PlatformData();
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String odrplNaTrplC 		= requestHelper.getParameter("odrpl_na_trpl_c"); 
		String odrplNaTeamC 	= requestHelper.getParameter("odrpl_na_team_c");
		String spyplNaTrplC 		= requestHelper.getParameter("spypl_na_trpl_c");
		String spyplNaTeamC 	= requestHelper.getParameter("spypl_na_team_c");
		String cserCtrTpc 		= requestHelper.getParameter("cser_ctr_tpc");
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_trnrel");
			List<Map<String, Object>> mapList = ordersService.getTrnrel(odrplNaTrplC, odrplNaTeamC, spyplNaTrplC, spyplNaTeamC, cserCtrTpc);
			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*
	 * ID : POPUP_TRNREL_ODRPL
	 * 화면명 : 거래관계 정보조회
	 */
	/*상품대분류조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveWrsClfL")
	public void retrieveWrsClfL(HttpServletRequest request, HttpServletResponse response) {
		PlatformData platformData = new PlatformData();
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_wrs_clfL");
			List<Map<String, Object>> mapList = ordersService.retrieveWrsClfL();
			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*상품중분류조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveWrsClfM")
	public void retrieveWrsClfM(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		try {
			String NA_WRS_LCLC = requestHelper.getParameter("na_wrs_lclc");
			DataSetHelper dsHelper = new DataSetHelper("ds_wrs_clfM");
			List<Map<String, Object>> mapList = ordersService.retrieveWrsClfM(NA_WRS_LCLC);
			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/**
	 * 거래관계 정보조회 팝업(발주처 조회 팝업)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveTrnrelOdrpl")
	public void retrieveTrnrelOdrpl(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		try {
			
			String odrplType 			= requestHelper.getParameter("odrpl_type");
			String odrpl 				= requestHelper.getParameter("odrpl");
			String cserCtrTpcType 		= requestHelper.getParameter("cser_ctr_tpc_type");
			String mngtNaTrTpcType 		= requestHelper.getParameter("mngt_na_tr_tpc_type");
			String wmcLocRgnDsc 		= requestHelper.getParameter("wmc_loc_rgn_dsc");
			String htLovRgnC 			= requestHelper.getParameter("ht_lov_rgn_c");
			String wrsLclc 				= requestHelper.getParameter("wrs_lclc");
			String wrsMclc 				= requestHelper.getParameter("wrs_mclc");
			String spyTpcType			= requestHelper.getParameter("spy_tpc_type");
			String trplC;
			
			if(StringUtils.isEmpty(requestHelper.getParameter("trplC"))){
				trplC = requestHelper.getGlnCode();
			}else{
				trplC = requestHelper.getParameter("trplC");
			}
			
			String[] TRPL_C_ARR = null;
			if(!requestHelper.getMbcoType().equals("1") && StringUtils.isEmpty(trplC)) {
				TRPL_C_ARR = requestHelper.getTrplCodeToArr(trplC, requestHelper);					
			} else {
				TRPL_C_ARR = trplC.split(",");
			}
			
			//String splrNaTrplC 			= requestHelper.getGlnCode();
			
			List<OrderOrdersTrnrelOdrplVO> list = ordersService.retrieveTrnrelOdrpl(odrplType, odrpl, cserCtrTpcType, mngtNaTrTpcType, wmcLocRgnDsc, htLovRgnC, wrsLclc, wrsMclc, spyTpcType, TRPL_C_ARR);
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(OrderOrdersTrnrelOdrplVO.class);
				
				for(OrderOrdersTrnrelOdrplVO vo : list){
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
	
	/**
	 * 사무소 조회 팝업
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/retrieveBr")
	public void retrieveBr(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		try {
			
			String searchType 	= requestHelper.getParameter("search_type");
			String searchTxt 		= requestHelper.getParameter("search_txt");
			String trplC 			= requestHelper.getGlnCode();
			
			List<OrderOrdersBrVO> list = ordersService.retrieveBr(searchType, searchTxt, trplC);
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(OrderOrdersBrVO.class);
				for(OrderOrdersBrVO vo : list){
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
	
	
	
	/* 수주내역 미작성 클릭시 빌링*/
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/order/billingMarkUpOrder")
	public void billingMarkUpOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String ODRPL_NA_TRPL_C = requestHelper.getParameter("ODRPL_NA_TRPL_C");
			String ODRPL_NA_TEAM_C = requestHelper.getParameter("ODRPL_NA_TEAM_C");
			String ODR_DT = requestHelper.getParameter("ODR_DT");
			String ODR_SLPNO = requestHelper.getParameter("ODR_SLPNO");

				
			HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();

			LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
			values.put("ODRPL_NA_TRPL_C", ODRPL_NA_TRPL_C);
			values.put("ODRPL_NA_TEAM_C", ODRPL_NA_TEAM_C);
			values.put("ODR_DT", ODR_DT);
			values.put("ODR_SLPNO", ODR_SLPNO);
			DeduplicationObject ddo = new DeduplicationObject(values);
			billingSet.add(ddo);

			
			String GLN = requestHelper.getGlnCode();	    
			String MD_ID = requestHelper.getUserID(); 

			
			markBilling(GLN, MD_ID, billingSet);

		
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}
