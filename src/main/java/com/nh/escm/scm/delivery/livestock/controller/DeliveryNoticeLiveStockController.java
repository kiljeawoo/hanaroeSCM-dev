package com.nh.escm.scm.delivery.livestock.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Base64Utils;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.esum.appetizer.vo.DeduplicationObject;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.scm.delivery.livestock.helper.LiveStockConvertHelper;
import com.nh.escm.scm.delivery.livestock.helper.LiveStockVOConvertHelper;
import com.nh.escm.scm.delivery.livestock.service.DeliveryNoticeLiveStockService;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryNoticeOrderPopUpVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryNoticeOrderPrintVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryNoticeOrderVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliverySkusDVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliverySkusMVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryTcVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryTradingPatnersDVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryTradingPatnersMVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryTradingPatnersPrintDVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryTradingPatnersSrhVO;
import com.nh.escm.scm.delivery.livestock.vo.DeliveryTrnrelVO;
import com.nh.escm.scm.delivery.livestock.vo.NoticeOrderDetailVO;
import com.nh.escm.scm.delivery.livestock.vo.NoticeOrderTempFileMasterVO;
import com.nh.escm.scm.delivery.livestock.vo.NoticeOrderTempFileVO;
import com.nh.escm.scm.delivery.livestock.vo.NoticeOrderVO;
import com.nh.escm.scm.delivery.livestock.vo.NoticeVhcnoVO;
import com.nh.escm.util.PageHelper;

import net.sourceforge.barbecue.Barcode;
import net.sourceforge.barbecue.BarcodeException;
import net.sourceforge.barbecue.BarcodeFactory;
import net.sourceforge.barbecue.BarcodeImageHandler;



/**
 * 2015.01.04
 * 배송예정서 축산
 * @author swha
 */
@RestController
public class DeliveryNoticeLiveStockController extends AbstractController {
	
	
	@Autowired
	private SequenceKeyService seqKeyService;
	
	@Autowired
	private DeliveryNoticeLiveStockService deliveryNoticeLiveStockService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	/*
	 * 화면ID : VAN_DS_SC_0310
	 * 화면명 : 축산등록
	 * 기    능 : 개체식별번호 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveAnimalInfo")
	public void retrieveAnimalInfo(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		
		String srhType = requestHelper.getParameter("searchType");
		String srhText = requestHelper.getParameter("searchText");
		
		
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			/*
			List<Map<String, Object>> list = deliveryNoticeLiveStockService.retrieveAnimalInfo(searchType, searchText)
			
			//발주정보
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				list.
				dsHelper.addColumns(DeliveryTcVO.class);
				
				for(DeliveryTcVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				sendData(response, out_PlatformData);
			}else{
				sendData(response, new PlatformData(), -1, trplC);
			}
			*/
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0310
	 * 화면명 : 직송등록
	 * 기    능 : 물류센터 리스트 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveTC")
	public void retrieveLiveStockTC(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String trplC 	= "";
		String TRPL_C = requestHelper.getParameter("trplC");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		trplC = TRPL_C_ARR[0];
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			List<DeliveryTcVO> list = deliveryNoticeLiveStockService.retrieveTC(trplC);
			
			//발주정보
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataTC");
				dsHelper.addColumns(DeliveryTcVO.class);
				
				for(DeliveryTcVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				sendData(response, out_PlatformData);
			}else{
				sendData(response, new PlatformData(), -1, trplC);
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 발주 정보 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/getOrder")
	public void getOrder(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String odrSlpNo = 	requestHelper.getParameter("odr_slpno"); //발주전표번호
		String odrplNaTrplC = 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
		String odrplNaTeamC = 	requestHelper.getParameter("odrpl_na_team_c"); //발주처 코드
		String odrDt = 	requestHelper.getParameter("odr_dt"); //발주일자
	
		try {
			PlatformData out_PlatformData = new PlatformData();
			NoticeOrderVO vo = deliveryNoticeLiveStockService.getOrder(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo);
			
			//발주정보
			if(vo != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(NoticeOrderVO.class);
				dsHelper.setData(vo);
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			//발주상세정보
			List<NoticeOrderDetailVO> list = deliveryNoticeLiveStockService.getOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo);
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataD");
				dsHelper.addColumns(NoticeOrderDetailVO.class);
				
				for(NoticeOrderDetailVO detailVo : list){
					dsHelper.setData(detailVo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error("########## odrSlpNo : " + odrSlpNo);
			logger.error("########## odrplNaTrplC : " + odrplNaTrplC);
			logger.error("########## odrplNaTeamC : " + odrplNaTeamC);
			logger.error("########## odrDt : " + odrDt);
			logger.error(e.getMessage(), e);
			
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 발주 정보 상세조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/getOrderDetail")
	public void getOrderDetail(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String odrSlpNo 		= 	requestHelper.getParameter("odr_slpno"); //발주전표번호
		String odrplNaTrplC 	= 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
		String odrplNaTeamC	= 	requestHelper.getParameter("odrpl_na_team_c"); //발주처 코드
		String odrDt 			= 	requestHelper.getParameter("odr_dt"); //발주일자
		String dvyPlaDt		=  requestHelper.getParameter("dvy_pla_dt"); //배송예정일자
	
		try {
			PlatformData out_PlatformData = new PlatformData();
			//발주상세정보
			List<NoticeOrderDetailVO> list = deliveryNoticeLiveStockService.getOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo, dvyPlaDt);
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataD");
				dsHelper.addColumns(NoticeOrderDetailVO.class);
				
				for(NoticeOrderDetailVO detailVo : list){
					dsHelper.setData(detailVo);
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
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 공급차량조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveVhcno")
	public void retrieveVhcno(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String spyplNaTrplC = 	requestHelper.getGlnCode();
		try {
			PlatformData out_PlatformData = new PlatformData();
			List<NoticeVhcnoVO> list = deliveryNoticeLiveStockService.retrieveVhcno(spyplNaTrplC);
			
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_vhcno");
				dsHelper.addColumns(NoticeVhcnoVO.class);
				for(NoticeVhcnoVO detailVo : list){
					dsHelper.setData(detailVo);
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
	 * 화면ID  	: VAN_DS_SC_0300
	 * 화면명 	: 배송예정서 일반등록
	 * 기    능 	: 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/saveDeliveryNoticeOrder")
	public void saveDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		try {
			
			PlatformData out_PlatformData = new PlatformData();
			DataSet dsM 			= requestHelper.getDataSet("ds_dataM");
			DataSet dsD 			= requestHelper.getDataSet("ds_dataD");
			String editType 		= requestHelper.getParameter("editType");//X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주 배송예정서 작성
//			String rogoInfCrtDsc = requestHelper.getParameter("ROGO_INF_CRT_DSC");//01 : 일반 발주, 03 : 행사 발주 (210713 사용안함)
			String r2ddlyYn			= requestHelper.getParameter("r2ddly_yn"); // 축산R2 직송여부
			String isDirectNotcieOrder 	= requestHelper.getParameter("isDirectNotcieOrder");//직송여부
			String trplC = requestHelper.getParameter("trplC");
			boolean isDstr = false; //저온여부
			//TODO : swha 삭제대상
			String dvyPlashKdc = "01"; //01 : 일반 발주, 03 : 행사 발주
			if ("1".equals(r2ddlyYn)) {
				dvyPlashKdc = "07"; // 축산(직송)발주 (20210713)
			}
			
			SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
			
			boolean flag = true;
			
			if (box.getUserSystemCode().equals("21")) {
				// 가공장 시스템코드 21 인 GLN 으로 로그인 한 경우 막는다
				flag = false;
				sendData(response, new PlatformData(), -999, "경제통합 가공시스템코드(21) 사업장 아이디로는 배송예정서를 직접 작성할 수 없습니다.");
				return;
			}
			
			//Master		
			if(dsM != null && dsM.getRowCount() > 0){
				if(logger.isDebugEnabled()){
					logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 	:  	[ " + editType 					+ " ]");
					logger.debug(">>>>>>>>>>>>>>>>> 권한사업장     : 	[ " + trplC 						+ " ]");
					logger.debug(">>>>>>>>>>>>>>>>> 직송여부  		: 	[ " + isDirectNotcieOrder 	+ " ]");
					logger.debug(">>>>>>>>>>>>>>>>> 권한사업장  	: 	[ " + trplC 						+ " ]");
				}
				if(StringUtils.isEmpty(isDirectNotcieOrder) || StringUtils.equals("null", isDirectNotcieOrder)){//일반
					if(StringUtils.isEmpty(dsM.getString(0, "RVOPL_NA_TRPL_C"))){
						if(StringUtils.isNotEmpty(trplC)){
							dsM.set(0, "RVOPL_NA_TRPL_C", trplC);
						}else{
							dsM.set(0, "RVOPL_NA_TRPL_C", requestHelper.getGlnCode());
						}
					}
					dsM.set(0, "DDLY_YN", 0);
				}else{
					dsM.set(0, "DDLY_YN", 1);
				}
				
				if(StringUtils.isEmpty(dsM.getString(0, "RVOPL_NA_TEAM_C"))){
					dsM.set(0, "RVOPL_NA_TEAM_C", "00");
				}
				
				
				//저온일경우 배송예정서 분리
				List<DataSet> dsList = new ArrayList<DataSet>();
				
				if (StringUtils.isEmpty(dsM.getString(0, "NA_DVY_PLASH_SLPNO")) && (
						StringUtils.equals("8808983322353", dsM.getString(0, "ODRPL_NA_TRPL_C"))
						|| StringUtils.equals("8808983324562", dsM.getString(0, "ODRPL_NA_TRPL_C"))
						|| StringUtils.equals("8808983325958", dsM.getString(0, "ODRPL_NA_TRPL_C"))
						|| StringUtils.equals("8808983326375", dsM.getString(0, "ODRPL_NA_TRPL_C"))
						|| StringUtils.equals("8808983332277", dsM.getString(0, "ODRPL_NA_TRPL_C"))
				)) {
					// 저온배송예정서 처음 작성한 경우
					LiveStockVOConvertHelper voCon = LiveStockVOConvertHelper.newInstance(dsM, dsD);
					dsList = voCon.seperateDataSet(dsD);
					isDstr = true;
					if (logger.isDebugEnabled()) {
						logger.debug("저온 배송예정서 분리 Processing...");
						logger.debug("DataSet Detail : " + dsList.size());
					}
				} else {
					dsList.add(dsD);
				}

				// 배송예정일인 +15일을 넘어가면 작성X (20171222)
				String dvyPlaDt = dsM.getString(0, "DVY_PLA_DT");
				String d15Date = DateUtil.convertDateToString("yyyyMMdd", DateUtil.getCurrentDate());
				if (flag && DateUtil.getDifferDate(d15Date, dvyPlaDt) > 15) {
					flag = false;
					sendData(response, new PlatformData(), -999, "배송예정일은 현재날짜보다 15일 이후로 작성할 수 없습니다.");
				}
				
				// for Test
//				if (flag) {
//					flag = false;
//					sendData(response, new PlatformData(), -999, "[테스트] 배송예정서 작성 차단하려면 주석해제");
//				}
				
				if (flag) {
					String list = "";
					for(int i = 0; i < dsList.size(); i++){
						List<NoticeOrderVO> noVoList 		= requestHelper.getValueObjects(NoticeOrderVO.class, dsM);
						LiveStockVOConvertHelper voConverHelper 	= LiveStockVOConvertHelper.newInstance(requestHelper, dsM, dsList.get(i), deliveryNoticeLiveStockService, seqKeyService, dvyPlashKdc, editType);
						
						List<DeliveryNoticeOrderVO> convertVO = voConverHelper.getDeliveryNoticeOrderVoList();
						deliveryNoticeLiveStockService.saveDeliveryNoticeOrder(editType, dvyPlashKdc, noVoList.get(0), convertVO);
						if(StringUtils.isEmpty(dsM.getString(0, "TEMP_YN"))){
							sendData(response, new PlatformData(), -1, "validation.message.no.parameter");
						}
						if(StringUtils.equals("N", dsM.getString(0, "TEMP_YN"))){
							try {
								String IDU = "I";
								if(convertVO != null && convertVO.size() >0) {
									IDU = convertVO.get(0).getWK_DS();
								}
								
								String successMessage =sentCheckService.dlvpnshtCheckSendState(
										noVoList.get(0).getSPYPL_NA_TRPL_C(),
										noVoList.get(0).getDVYAA_NA_TRPL_C(),
										voConverHelper.getNaDvyPlashSlpno(),
										noVoList.get(0).getDVY_PLA_DT(),
										"처리", IDU);
								
								
								if(i > 0){
									list = list + "|"  + voConverHelper.getNaDvyPlashSlpno();
								}else{
									list = successMessage;
								}
								
								if(i == dsList.size()-1){
									sendData(response, out_PlatformData, 0 , list);
								}
								
							} catch (NHSentErrorException e) {
								String eb = e.getMessage();
								sendData(response, out_PlatformData, -999, eb);
							}
						}else {
							String msg = 		"공급처 : [" + noVoList.get(0).getSPYPL_NA_TRPL_C() + "] \n"
												+	"배송처 : [" + noVoList.get(0).getDVYAA_NA_TRPL_C() + "] \n"
												+ 	"배송전표번호 : [" + voConverHelper.getNaDvyPlashSlpno() +"] \n"
												+ 	"배송일자 : [" + noVoList.get(0).getDVY_PLA_DT() +"] 가 임시저장되었습니다.";
		 					sendData(response, out_PlatformData, 0, msg);
						}
					}
				}
			}
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 배송예정서 일반등록
	 * 기    능 : 배송예정서 번호로 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/getDeliveryNoticeOrder")
	public void getDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String spyplNaTrplC = 	requestHelper.getParameter("spypl_na_trpl_c"); //공급처코드
		String dvyaaNaTrplC = 	requestHelper.getParameter("dvyaa_na_trpl_c"); //배송처코드
		String naDvyPlashSlpno = 	requestHelper.getParameter("na_dvy_plash_slpno"); //배송예정서전표번호
	
		try {
			PlatformData out_PlatformData = new PlatformData();
			NoticeOrderVO vo = deliveryNoticeLiveStockService.getDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
			
			//배송예정서 기본
			if(vo != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(NoticeOrderVO.class);
				dsHelper.setData(vo);
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			//배송예정서 상세
			List<NoticeOrderDetailVO> list = vo.getList();
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataD");
				dsHelper.addColumns(NoticeOrderDetailVO.class);
				
				for(NoticeOrderDetailVO detailVo : list){
					dsHelper.setData(detailVo);
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
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 배송예정서 일반등록
	 * 기    능 : 배송예정서 번호로 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/getDeliveryNoticeOrderDetail")
	public void getDeliveryNoticeOrderDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String spyplNaTrplC = 	requestHelper.getParameter("spypl_na_trpl_c"); //공급처코드
		String dvyaaNaTrplC = 	requestHelper.getParameter("dvyaa_na_trpl_c"); //배송처코드
		String naDvyPlashSlpno = 	requestHelper.getParameter("na_dvy_plash_slpno"); //배송예정서전표번호
		String dvyPlaDt = requestHelper.getParameter("dvy_pla_dt"); //배송예정일자
		String ddlyYn = requestHelper.getParameter("ddly_yn"); //배송예정일자
		String cserCtrTpc = requestHelper.getParameter("cser_ctr_tpc"); //수요자계약유형
		try {
			PlatformData out_PlatformData = new PlatformData();
					
			//배송예정서 상세
			List<NoticeOrderDetailVO> list = deliveryNoticeLiveStockService.getDeliveryNoticeOrderDetail(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, dvyPlaDt, ddlyYn, cserCtrTpc);
			if(list != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataD");
				dsHelper.addColumns(NoticeOrderDetailVO.class);
				
				for(NoticeOrderDetailVO detailVo : list){
					dsHelper.setData(detailVo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/* lsh
	 * 화면ID : VAN_DS_SC_0300, VAN_DS_SC_0310
	 * 화면명 : 배송예정서 일반등록
	 * 기    능 : 거래명세서출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/livestock/printDeliveryNoticeOrder")
	public RestResult printDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response,
			String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC,
			String systemFileName){
		try{
			boolean isSuccess = false;
			String result = "";
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			
			
			Map<String, Object> map= sentCheckService.isOKdlvpnsht(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
			if(map != null) {
				if(map.get("PRC_YN") != null) {
					String prcYN = map.get("PRC_YN").toString();
					if(prcYN.equals("R") || prcYN.equals("Y")) {
						isSuccess = true;
					} else if (prcYN.equals("E")) {
						isSuccess = false;
						result = map.get("RES_DESC").toString();
					} else if (prcYN.equals("P")) {
						isSuccess = false;
						result = "배송예정서가 전송중에 있습니다.\n배송예정서 거래처별 조회 화면에서 전송 결과을 확인하신후 거래명세서를 출력하십시오.";
					}
				} else {
						isSuccess = false;
						result = "거래명세표 출력 대상 배송예정서를 찾지 못하였습니다.\n정상적으로 전송되지 않은 배송예정서 입니다.";
				}
			}
			
//			if(true){
				List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeLiveStockService.printDeliveryNoticeOrder(naDvyPlashSlpno, spyplNaTrplC, dvyaaNaTrplC);
				
				String tempPath = Configurer.getProperty("file.temp.path");
				File dir = new File(tempPath);
				if(StringUtils.isNotEmpty(systemFileName)) {
					File f = FileUtils.getFile(dir, systemFileName);
					String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
					if(StringUtils.isNotEmpty(baseImage)) {
						markMap.put("mark", "data:;base64,"+baseImage);//직인파일
					}
				} else {
					markMap.put("mark", "");
				}
				markList.add(markMap);
				
				String[] docKdcArr = {"공급자용", "중개소용", "공급받는자용"};
				List<List<?>> all_list = new ArrayList<List<?>>();
				if(list != null && list.size() > 0){
					//Master Set
					DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
					int keyIndex = 0;
					Map<String,Object> _master = new LinkedHashMap<String, Object>();
					_master.put("key","key"+keyIndex);
					_master.put("top01", docKdcArr[0]);							//용도
					_master.put("top02", "");									//전화번호
					_master.put("top03", naDvyPlashSlpno);						//배송예정서
					_master.put("YMD_top04", vo.getCNR_DT());						//배송예정일자
					
					//공급자
					_master.put("master01", vo.getSPYPL_BIZ_NUMBER()); 	//공급자-등록번호
					_master.put("master02", vo.getSPYPL_NA_TRPL_N()); 	//공급자-상호
					_master.put("master03", vo.getSPYPL_REPMNM()); 		//공급자-성명
					_master.put("master04", vo.getSPYPL_ADDRESS()); 		//공급자-주소
					_master.put("master05", vo.getSPYPL_BZTPNM()); 		//공급자-업태
					_master.put("master06", vo.getSPYPL_BZCCNM()); 		//공급자-종목
					
					//공급받는자
					_master.put("master07", vo.getDVYAA_BIZ_NUMBER());	//공급받는자-등록번호
					_master.put("master08", vo.getDVYAA_NA_TRPL_N()); 	//공급받는자-상호
					_master.put("master09", vo.getDVYAA_REPMNM());		//공급받는자-성명
					_master.put("master10", vo.getDVYAA_ADDRESS());		//공급받는자-주소
					_master.put("master11", vo.getDVYAA_BZTPNM()); 		//공급받는자-업태
					_master.put("master12", vo.getDVYAA_BZCCNM()); 		//공급받는자-종목
					_master.put("master13", vo.getRMK_CNTN()); 				//배송처
					_master.put("master14", vo.getRMK_CNTN()); 				//주소
					
					
				
					
					//바코드
					String code1 = vo.getSPYPL_NA_TRPL_C();
					String code2 = naDvyPlashSlpno;
					String barcode = code1+code2;
					/* 20220420 배송예정서번호 자르지 않음
					if(code2.length() > 13){					
						code2 = code2.substring(0, 13);
						barcode = code1+code2;
					}
					*/				
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
							e.printStackTrace();
						}
						byte[] bytes = baos.toByteArray();
						String barcodeImage = Base64Utils.encodeToString(bytes);
						_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
					}catch(BarcodeException e){
						e.printStackTrace();
					}			
					_master.put("barcode", barcode);//바코드
					masterList.add(_master);
					
					//Detail List Set
					for(DeliveryNoticeOrderPrintVO item : list){
						Map<String,Object> _detail = new LinkedHashMap<String, Object>();
						_detail.put("key","key"+keyIndex);
					
						//_detail.put("detail00", item.getDVY_PLA_SQNO());					
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());
						_detail.put("NUM_detail03", item.getNA_WRS_UNT_N());		//규격
						_detail.put("NUM_detail04", item.getBOX_QT());				//수량(BOX)
						_detail.put("NUM_detail05", item.getDVY_PLA_QT());			//총중량
						_detail.put("NUM_detail06", item.getDVY_PLA_QT());			//중량
						_detail.put("NUM_detail07", item.getDVY_WRS_UPR());			//단가
						_detail.put("NUM_detail08", item.getDVY_AM());				//금액
						_detail.put("NUM_detail09", item.getSPYPL_AM());			//공급금액
						_detail.put("NUM_detail10", item.getDVY_VAT());				//부가세
						detailList.add(_detail);
					}
					keyIndex++;
					
					//중개소용, 공급받는자용
					for(int i = 1 ; i < 3; i++){
						keyIndex++;
						_master.put("key","key"+keyIndex);
						_master.put("top01", docKdcArr[i]);									//용도
						_master.put("top02", "");											//전화번호
						_master.put("top03", naDvyPlashSlpno);						//배송예정서
						_master.put("YMD_top04", vo.getCNR_DT());						//배송예정일자
						
						//공급자
						_master.put("master01", vo.getSPYPL_BIZ_NUMBER()); 	//공급자-등록번호
						_master.put("master02", vo.getSPYPL_NA_TRPL_N()); 	//공급자-상호
						_master.put("master03", vo.getSPYPL_REPMNM()); 		//공급자-성명
						_master.put("master04", vo.getSPYPL_ADDRESS()); 		//공급자-주소
						_master.put("master05", vo.getSPYPL_BZTPNM()); 		//공급자-업태
						_master.put("master06", vo.getSPYPL_BZCCNM()); 		//공급자-종목
						
						//공급받는자
						_master.put("master07", vo.getDVYAA_BIZ_NUMBER());	//공급받는자-등록번호
						_master.put("master08", vo.getDVYAA_NA_TRPL_N()); 	//공급받는자-상호
						_master.put("master09", vo.getDVYAA_REPMNM());		//공급받는자-성명
						_master.put("master10", vo.getDVYAA_ADDRESS());		//공급받는자-주소
						_master.put("master11", vo.getDVYAA_BZTPNM()); 		//공급받는자-업태
						_master.put("master12", vo.getDVYAA_BZCCNM()); 		//공급받는자-종목
						_master.put("master13", vo.getRMK_CNTN()); 				//배송처
						_master.put("master14", vo.getRMK_CNTN()); 				//주소
						for(Map<String, Object> _detail : detailList){
							_detail.put("key","key"+keyIndex);
							detailList.add(_detail);
						}
					}
					all_list.add(markList);
					all_list.add(masterList);
					all_list.add(detailList);	
				}
				return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
//			}else{
//				return new RestResult(ErrorCode.FAILURE, result);
//			}
		} catch (Exception e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/* lsh
	 * 화면ID : VAN_DS_SC_0390
	 * 화면명 : 배송예정서 신선등록
	 * 기    능 : 거래명세서출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/livestock/printDeliveryNoticeOrderList")
	public RestResult printDeliveryNoticeOrderList(HttpServletRequest request, HttpServletResponse response,
			String naDvyPlashSlpnoList, String systemFileName){
		try{
			String[] listArr = StringUtils.splitPreserveAllTokens(naDvyPlashSlpnoList, ';');
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();	
			 
			String spyplNaTrplC = listArr[1];
			String dvyaaNaTrplC = listArr[2];
			//String naDvyPlashSlpno = "";
			String[] naDvyPlashSlpnoArr = StringUtils.splitPreserveAllTokens(listArr[3], '|');
			
			
			String tempPath = Configurer.getProperty("file.temp.path");
			File dir = new File(tempPath);
			if(StringUtils.isNotEmpty(systemFileName)) {
				File f = FileUtils.getFile(dir, systemFileName);
				String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
				if(StringUtils.isNotEmpty(baseImage)) {
					markMap.put("mark", "data:;base64,"+baseImage);//직인파일
				}
			} else {
				markMap.put("mark", "");
			}
			markList.add(markMap);
			int keyIndex = 0;
			for(int i = 0; i < naDvyPlashSlpnoArr.length; i++){
			
				List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeLiveStockService.printDeliveryNoticeOrder(naDvyPlashSlpnoArr[i], spyplNaTrplC, dvyaaNaTrplC);
				
				
				if(list != null && list.size() > 0){
					//Master Set
					DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
					
					Map<String,Object> _master = new LinkedHashMap<String, Object>();
					_master.put("key","key"+keyIndex);
					_master.put("top1", naDvyPlashSlpnoArr[i]);
					_master.put("top2", vo.getCSER_CTR_TPC());
					_master.put("master01", vo.getSPYPL_NA_TRPL_N()); //상호
					_master.put("master02", vo.getSPYPL_NA_TRPL_C()); //코드
					_master.put("master03", vo.getSPYPL_BIZ_NUMBER()); //사업자번호
					_master.put("master04", vo.getSPYPL_REPMNM()); //대표자
					_master.put("master05", vo.getSPYPL_ADDRESS()); // 주소
					_master.put("master06", vo.getSPYPL_TEL()); //전화번호
					//공급받는자
					_master.put("master07", vo.getDVYAA_NA_TRPL_N()); //상호
					_master.put("master08", vo.getDVYAA_NA_TRPL_C());//코드
					_master.put("master09", vo.getDVYAA_BIZ_NUMBER());//사업자번호
					_master.put("master10", vo.getDVYAA_REPMNM());//대표자
					/*
					String tempPath = Configurer.getProperty("file.temp.path");
					File dir = new File(tempPath);
					if(StringUtils.isNotEmpty(systemFileName)) {
						File f = FileUtils.getFile(dir, systemFileName);
						String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
						if(StringUtils.isNotEmpty(baseImage)) {
							_master.put("master11", "data:;base64,"+baseImage);//직인파일
						}
					} else {
						_master.put("master11", "");
					}
					*/
					_master.put("YMD_master11", vo.getCNR_DT());//검수일자
					
					//바코드
					String code1 = vo.getSPYPL_NA_TRPL_C();
					String code2 = naDvyPlashSlpnoArr[i];
					String barcode = code1+code2;
					/* 20220420 배송예정서번호 자르지 않음
					if(code2.length() > 13){					
						code2 = code2.substring(0, 13);
						barcode = code1+code2;
					}
					*/
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
							e.printStackTrace();
						}
						byte[] bytes = baos.toByteArray();
						String barcodeImage = Base64Utils.encodeToString(bytes);
						_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
					}catch(BarcodeException e){
						e.printStackTrace();
					}			
					_master.put("barcode", barcode);//바코드
					masterList.add(_master);
					
					//Detail List Set
					for(DeliveryNoticeOrderPrintVO item : list){
						Map<String,Object> _detail = new LinkedHashMap<String, Object>();
						_detail.put("key","key"+keyIndex);
					
						_detail.put("detail00", item.getDVY_PLA_SQNO());					
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());
						_detail.put("detail03", item.getNA_WRS_UNT_N());//규격
						_detail.put("NUM_detail04", item.getBOX_QT());//박스수량
						_detail.put("NUM_detail05", item.getBOXPE_AQZ());//입수
						_detail.put("NUM_detail06", item.getDVY_PLA_QT());//낱개수량
						_detail.put("NUM_detail07", item.getDVY_WRS_UPR());//단가
						_detail.put("NUM_detail08", item.getDVY_AM());//금액
						_detail.put("NUM_detail09", item.getDVY_VAT());//부가세
						_detail.put("NUM_detail10", item.getSPYPL_AM());//공급금액
						_detail.put("detail11", "결품사유");//결품사유
						_detail.put("detail12", item.getDQPD_RSN());//결품사유기타내용 (결품사유코드)
						_detail.put("detail13", item.getDSTR_TER_MRK_DSC());//유통기한구분
						_detail.put("detail14", item.getDSTR_TER_DT());//유통기한
						_detail.put("detail15", item.getBKG_EVT_DSC());//소터구분
						
						detailList.add(_detail);
					}
					keyIndex++;
				}
			}
			
			
			
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(markList);
			all_list.add(masterList);
			all_list.add(detailList);			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (Exception e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0320
	 * 화면설명 : 배송예정서 일괄등록(EXCEL)_Temp File 조회
	 * 기    능 : Excel File 조회
	 */	
	@RequestMapping(method=RequestMethod.POST,value="/rest/scm/order/livestock/downloadDeliveryNoticeOrder")
	public void retrieveExcelRead(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		//행의 수
		try {
			PlatFormRequestHelper rHelper = PlatFormRequestHelper.newInstance(request);
			String dsName = rHelper.getParameter("dsName");
			String systemFileName = rHelper.getParameter("systemFileName");
			DataSet tempDs = rHelper.getDataSet("in_ds");
			
			File tempfile = new File(Configurer.getProperty("file.temp.path"));
			String filepath = tempfile.getAbsolutePath()+"/"+systemFileName;
			
			FileInputStream fis=new FileInputStream(filepath);
			HSSFWorkbook workbook = new HSSFWorkbook(fis);
			HSSFSheet sheet=workbook.getSheetAt(0);
			
			
			//파일을 카피하여 real 에 복사
			File file = new File(filepath);
			File realfile = new File(Configurer.getProperty("file.real.path"));
			File copyfile = new File(realfile.getAbsolutePath()+"/"+systemFileName);
			
			if (!realfile.exists())
				realfile.mkdirs();
			FileCopyUtils.copy(file, copyfile);
			
			//엑셀 파일을 불러와서 그리드에 보내줌
			PlatformData out_PlatformData = new PlatformData();
			int rows=sheet.getPhysicalNumberOfRows();
			if(rows > 100){
				sendData(response, new PlatformData(), -1, "OVERROWCOUNT");
				workbook.close();
				return;
			}
			
			List<NoticeOrderTempFileVO> list = new ArrayList<NoticeOrderTempFileVO>();
			DataSetHelper dHelper = new DataSetHelper(dsName);
			dHelper.addColumns(NoticeOrderTempFileVO.class);
			
			for(int rowindex=1; rowindex<rows; rowindex++){
				NoticeOrderTempFileVO tempvo = new NoticeOrderTempFileVO();
				//행을 읽는다.
				HSSFRow row = sheet.getRow(rowindex);
				if(row !=null){
					//열을 가져온다.
					for(int columnindex=0;columnindex<tempDs.getColumnCount();columnindex++){
						HSSFCell cell=row.getCell(columnindex);
						String val = "";
						double dval = 0.0;
						//셀이 반값일경우를 위한 널체크
						if(cell == null){
							val = "";
						}else{
							if(cell.getCellType() == HSSFCell.CELL_TYPE_STRING){
								val=cell.getStringCellValue();
							}else{
								dval=cell.getNumericCellValue();
								val = String.valueOf((int)Math.round(dval));
							}
						}
						
						if(columnindex < 63){
							String callName = "set"+tempDs.getColumn(columnindex).getName();
							ValueObjectSetUtil.callSetMethod(tempvo, callName,  new Object[]{val});
						}
					}
					list.add(tempvo);
				}
			}
			
			
			for(NoticeOrderTempFileVO vo : list){
				dHelper.setData(vo); //Vo to DataSet
			}
			
			
			
			if(list.size() > 100){
				sendData(response, new PlatformData(), -1, "OVERROWCOUNT");
			}else{
				//logger.debug("###### Excel to Dataset : " + dHelper.getDataSet().saveXml());
				LiveStockConvertHelper convertHelper = LiveStockConvertHelper.newInstance(dHelper.getDataSet());
				DataSet inDs = convertHelper.addGroupIdx();//Grouping
				//logger.debug("###### Grouping After DataSet : " + inDs.saveXml());
				List<DataSet> validationDsList = convertHelper.excelValidationChk(rHelper, inDs);//Excel Validation Check
				DataSet msgDs = validationDsList.get(0);//error msg
				DataSet reDs = validationDsList.get(1);//dataset
				out_PlatformData.addDataSet(msgDs);
				out_PlatformData.addDataSet(reDs);
				//logger.debug("ERROR MSG : " + msgDs.getRowCount());
				//logger.debug("###### Validation After Excel : " + reDs.saveXml());
				
				if(reDs.getRowCount() > 0){
					//String tempSeq = seqKeyService.getNextHexKey(SequenceKeyName.TB_OD_DLVPNSHT_TEMP_M);
					List<NoticeOrderTempFileMasterVO> tmpMList = convertHelper.getNoticeOrderTempMasterVO(seqKeyService, rHelper, reDs);
					deliveryNoticeLiveStockService.insertNoticeOrderMTmp(tmpMList);
					String[] tempSeqArr = convertHelper.getTempSeqArr();
					
					DataSet dsSetTempSeq = new DataSet("ds_temp_seq");
					dsSetTempSeq.addColumn("TEMP_SEQ", DataTypes.STRING);
					for(int i = 0; i < tempSeqArr.length; i++){
						if(StringUtils.isNotEmpty(tempSeqArr[i])){
							int row = dsSetTempSeq.newRow();
							dsSetTempSeq.set(row, "TEMP_SEQ", tempSeqArr[i]);
						}
					}
					out_PlatformData.addDataSet(dsSetTempSeq);
				}
				
				
				sendData(response, out_PlatformData);
				
			}
			workbook.close();
		} catch (AppetizerException e) {
			e.printStackTrace();
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0320
	 * 화면명 : 배송예정서 일괄등록
	 * 기    능 : 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/insertDeliveryNoticeOrder")
	public void insertDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			PlatformData out_PlatformData = new PlatformData();
			DataSet inDs = requestHelper.getDataSet("in_ds");
			DataSet tmpSeqDs = requestHelper.getDataSet("ds_temp_seq");
			String tempSeq = "";
			
			if(inDs.getRowCount() == 0){
				logger.error("[ insertDeliveryNoticeOrder ]  Excel Data Set of insertDeliveryNoticeOrder don't exist!!");
				sendData(response, out_PlatformData, -1, "error.message.required.parameters");
			}else{
				for(int i = 0; i < tmpSeqDs.getRowCount(); i++){
					tempSeq = tmpSeqDs.getString(i, "TEMP_SEQ");
					List<NoticeOrderTempFileMasterVO> mvoList = deliveryNoticeLiveStockService.retreiveNoticeOrderMTmp(tempSeq);
					
					
					List<DeliveryNoticeOrderVO> list = new ArrayList<DeliveryNoticeOrderVO>();
					LiveStockVOConvertHelper voConvertHelper = null;
					
					
					for(NoticeOrderTempFileMasterVO mvo : mvoList){
						String ddlyYn = "0";
						if(StringUtils.isEmpty(mvo.getRVOPL_NA_TEAM_C())){
							mvo.setRVOPL_NA_TEAM_C("00");
						}
						if(StringUtils.isEmpty(mvo.getODRPL_NA_TEAM_C())){
							mvo.setODRPL_NA_TEAM_C("00");
						}
						String naDvyPlashSlpno = deliveryNoticeLiveStockService.getNaDvyPlashSlpno(mvo.getRVOPL_NA_TRPL_C(), mvo.getRVOPL_NA_TEAM_C(), mvo.getDVY_PLA_DT(), ddlyYn);
						String odrplNaTrplC 		= mvo.getODRPL_NA_TRPL_C();
						String odrplNaTeamC 	= mvo.getODRPL_NA_TEAM_C();
						String splrNaTrplC 		= "";
						String splrNaTeamC 		= "";
						if(StringUtils.equals(mvo.getSPYPL_NA_TRPL_C(), mvo.getRVOPL_NA_TRPL_C()) == false){
							splrNaTrplC 		= mvo.getRVOPL_NA_TRPL_C();
							splrNaTeamC 	= mvo.getRVOPL_NA_TEAM_C();
						}else{
							splrNaTrplC 		= mvo.getSPYPL_NA_TRPL_C();
							splrNaTeamC 	= mvo.getSPYPL_NA_TEAM_C();
						}
						
						
						String cserCtrTpc 		= mvo.getCSER_CTR_TPC();
						String spyTpc 				= mvo.getSPY_TPC();
						String mngtNaTrplC 		= mvo.getMNGT_NA_TRPL_C();
						String mngtNaTeamC 	= mvo.getMNGT_NA_TEAM_C();
						String mngtNaTrTpc 		= mvo.getMNGT_NA_TR_TPC();
						String naWrsLclc 			= mvo.getNA_WRS_LCLC();
						String naWrsMclc 		= mvo.getNA_WRS_MCLC();
						mvo.setDDLY_YN(ddlyYn);
						mvo.setTEMP_YN("N");
						mvo.setFSRGMN_ENO(requestHelper.getUserID());
						
						
						
						
						if(logger.isDebugEnabled()){
							logger.debug("============================TRNREL Params START======================");
							logger.debug("배송예정서전표번호		: " + naDvyPlashSlpno);
							logger.debug("발주처 						: " + odrplNaTrplC);
							logger.debug("발주처팀 					:  " + odrplNaTeamC);
							logger.debug("공급처 						: " + splrNaTrplC);
							logger.debug("공급처팀 					: " + splrNaTeamC);
							logger.debug("수요자계약유형 			: " + cserCtrTpc);
							logger.debug("공급유형 					: " + spyTpc);
							logger.debug("주관거래처 				: " + mngtNaTrplC);
							logger.debug("주관거래처팀 				: " + mngtNaTeamC);
							logger.debug("주관거래유형 				: " + mngtNaTrTpc);
							logger.debug("상품대분류 				: " + naWrsLclc);
							logger.debug("상품중분류 				: " + naWrsMclc);
							logger.debug("============================TRNREL Params END========================");	
						}
						
						
						
						
						
						List<DeliveryTrnrelVO> trnrelList = deliveryNoticeLiveStockService.retrieveTrnrel(odrplNaTrplC, odrplNaTeamC, splrNaTrplC, splrNaTeamC, cserCtrTpc, spyTpc, mngtNaTrplC, mngtNaTeamC, mngtNaTrTpc, naWrsLclc, naWrsMclc);
						if(trnrelList != null && trnrelList.size() > 0){
							DeliveryTrnrelVO vo = trnrelList.get(0);
							
							
							mvo.setMNGT_NA_TRPL_C(vo.getMNGT_NA_TRPL_C());
							mvo.setMNGT_NA_TEAM_C(vo.getMNGT_NA_TEAM_C());
							mvo.setMNGT_NA_TR_TPC(vo.getMNGT_NA_TR_TPC());
							mvo.setADJPL_NA_TRPL_C(vo.getCSER_ADJPL_NA_TRPL_C());
							mvo.setADJPL_NA_TEAM_C(vo.getCSER_ADJPL_NA_TEAM_C());
							mvo.setNA_WRS_LCLC(vo.getNA_WRS_LCLC());
							mvo.setNA_WRS_MCLC(vo.getNA_WRS_MCLC());
							mvo.setDVY_PLASH_KDC("01");
							
							
							
							
							if(StringUtils.isEmpty(mvo.getDVYAA_NA_TRPL_C())){
								mvo.setDVYAA_NA_TRPL_C(mvo.getODRPL_NA_TRPL_C());
							}
							if(StringUtils.isEmpty(mvo.getDVYAA_NA_TEAM_C())){
								mvo.setDVYAA_NA_TEAM_C(mvo.getODRPL_NA_TEAM_C());
							}
							
							
							
							if(StringUtils.equals("1", mvo.getDDLY_YN()) ||StringUtils.equals("4", cserCtrTpc) || StringUtils.equals("5", cserCtrTpc) ){
								//자체
								mvo.setCSER_TR_REL_AMNNO(vo.getCSER_TR_REL_AMNNO());
								mvo.setMNGT_TR_REL_AMNNO(vo.getMNGT_TR_REL_AMNNO());
							}else{
								//계통
								mvo.setCSER_TR_REL_AMNNO(vo.getMNGT_TR_REL_AMNNO());
								mvo.setMNGT_TR_REL_AMNNO("0");
							}
							voConvertHelper = LiveStockVOConvertHelper.newInstance(mvo, naDvyPlashSlpno);
							list.add(voConvertHelper.getMvo());
						}else{
							String errorMsg = 	"일련번호 	: " + mvo.getROW_SEQ() + "\n"
													 + "발주처 		: " + mvo.getODRPL_NA_TRPL_C() + "\n"
													 + "발주처팀 	: " + mvo.getODRPL_NA_TEAM_C()+ "\n"
													 + "공급처		: " + mvo.getSPYPL_NA_TRPL_C() + "\n"
													 + "공급처팀		: " + mvo.getSPYPL_NA_TEAM_C() + "\n"
													 + "거래관계가 존재하지 않습니다. 다시 한번 확인바랍니다.";
							sendData(response, out_PlatformData, -999, errorMsg);
						}
						
					}
					if(mvoList.size() == list.size()){
						deliveryNoticeLiveStockService.insertDeliveryNoticeOrder(list);
					}
				}
			
				try {
					boolean checked =sentCheckService.DLVPNSHTBATCheckSendState(tempSeq);
					if(checked)
						sendData(response, out_PlatformData);
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
	
	
	
	/*
	 * 화면ID : VAN_DS_FN_0204
	 * 화면명 : 발주번호_배송요청일 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveOrdersPopUp")
	public void retrieveOrdersPopUp(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String odrSlpno 		= 	requestHelper.getParameter("odr_slpno"); //발주전표번호
		String rvoplNaTrplC 	= 	requestHelper.getParameter("rvopl_na_trpl_c"); //수주처 코드
		String odrplNaTrplC 	= 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
		String odrplNaTrplN 	= 	requestHelper.getParameter("odrpl_na_trpl_n"); //발주처 코드
		String dvyRqrDtFrom = 	requestHelper.getParameter("dvy_rqr_dt_from"); //배송요청일 From
		String dvyRqrDtTo 	= 	requestHelper.getParameter("dvy_rqr_dt_to"); //배송요청일 To
		String ddlyYn			= 	requestHelper.getParameter("ddly_yn"); //배송요청일 To
			
		try {
			PlatformData out_PlatformData = new PlatformData();
			List<DeliveryNoticeOrderPopUpVO> list = deliveryNoticeLiveStockService.retrieveOrdersPopUp(odrSlpno, rvoplNaTrplC, odrplNaTrplC, dvyRqrDtFrom, dvyRqrDtTo, ddlyYn, odrplNaTrplN);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(DeliveryNoticeOrderPopUpVO.class);
				for(DeliveryNoticeOrderPopUpVO vo : list){
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
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명 : 배송예정 거래처별 조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveDeliveryTradingPatnersM")
	public void retrieveDeliveryTradingPatnersM(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String dvy_plash_slpno_rdo = requestHelper.getParameter("dvy_plash_slpno_rdo");
		String na_dvy_plash_slpno = requestHelper.getParameter("na_dvy_plash_slpno");
		String odrpl_na_trpl_rdo = requestHelper.getParameter("odrpl_na_trpl_rdo");
		String odrpl_na_trpl_c = requestHelper.getParameter("odrpl_na_trpl_c");
		String dvy_pla_dt_from = requestHelper.getParameter("dvy_pla_dt_from");
		String dvy_pla_dt_to = requestHelper.getParameter("dvy_pla_dt_to");
		String cser_ctr_tpc = requestHelper.getParameter("cser_ctr_tpc");
		String dvy_pla_sts_rdo = requestHelper.getParameter("dvy_pla_sts_rdo");
		String ddly_yn = requestHelper.getParameter("ddly_yn");
		String r2_ddly_yn = requestHelper.getParameter("r2_ddly_yn");
		String sort = requestHelper.getParameter("sort");
		String ngrs_soju_yn = requestHelper.getParameter("ngrs_soju_yn");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
		
		
		DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
		srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
		srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
		srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
		srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
		srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
		srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
		srhVo.setCser_ctr_tpc(cser_ctr_tpc);
		srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
		srhVo.setDdly_yn(ddly_yn);
		srhVo.setR2_ddly_yn(r2_ddly_yn);
		srhVo.setSort(sort);
		srhVo.setNgrs_soju_yn(ngrs_soju_yn);
		srhVo.setTrpl(TRPL_C_ARR);
		
		int totalRowCount = deliveryNoticeLiveStockService.getDeliveryTradingPatnersMCount(srhVo);
		//Paging
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO01"), totalRowCount, "ds_pageVO01");
		int start = pageHelper.getStart();
		int end  = pageHelper.getEnd();
		srhVo.setStart(start);
		srhVo.setEnd(end);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			List<DeliveryTradingPatnersMVO> list = deliveryNoticeLiveStockService.retrieveDeliveryTradingPatnersM(srhVo);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(DeliveryTradingPatnersMVO.class);
				for(DeliveryTradingPatnersMVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			//합계
			Map<String, Object> sumMap = deliveryNoticeLiveStockService.getDeliveryTradingPatnersMSum(srhVo);
			DataSet dsSum = new DataSet("ds_sum");
			dsSum.addColumn("DVY_AM", DataTypes.LONG);
			dsSum.addColumn("DVY_VAT", DataTypes.LONG);
			dsSum.addColumn("DVY_SSDY", DataTypes.LONG);
			dsSum.addColumn("DVY_SSDYRT", DataTypes.LONG);
			dsSum.addColumn("BYNG_QT", DataTypes.LONG);
			dsSum.addColumn("BYAM", DataTypes.LONG);
			dsSum.addColumn("STS_DVY_PLA_QT", DataTypes.LONG);
			dsSum.addColumn("STS_DVY_AM", DataTypes.LONG);
			dsSum.addColumn("STS_BYNG_QT", DataTypes.LONG);
			dsSum.addColumn("STS_BYAM", DataTypes.LONG);
			
			
			
			int row = dsSum.newRow();
			dsSum.set(row, "DVY_AM", sumMap.get("DVY_AM"));
			dsSum.set(row, "DVY_VAT",  sumMap.get("DVY_VAT"));
			dsSum.set(row, "DVY_SSDY",  sumMap.get("DVY_SSDY"));
			dsSum.set(row, "DVY_SSDYRT",  sumMap.get("DVY_SSDYRT"));
			dsSum.set(row, "BYNG_QT",  sumMap.get("BYNG_QT"));
			dsSum.set(row, "BYAM",  sumMap.get("BYAM"));
			dsSum.set(row, "STS_DVY_PLA_QT",  sumMap.get("STS_DVY_PLA_QT"));
			dsSum.set(row, "STS_DVY_AM",  sumMap.get("STS_DVY_AM"));
			dsSum.set(row, "STS_BYNG_QT",  sumMap.get("STS_BYNG_QT"));
			dsSum.set(row, "STS_BYAM",  sumMap.get("STS_BYAM"));
			
			out_PlatformData.addDataSet(dsSum);
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명  : 배송예정거래처별 조회
	 * 기    능 : 거래처별/상품별 Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/delivery/livestock/printDeliveryTradingPatners01")
	public RestResult printDeliveryTradingPatners01(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName,
			String dvy_plash_slpno_rdo, String na_dvy_plash_slpno, String odrpl_na_trpl_rdo, 
			String odrpl_na_trpl_c, String dvy_pla_dt_from, String dvy_pla_dt_to, String cser_ctr_tpc, 
			String dvy_pla_sts_rdo, String ddly_yn, String r2_ddly_yn, String sort, String ngrs_soju_yn, String TRPL_C){
		
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
			srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
			srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
			srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
			srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
			srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
			srhVo.setCser_ctr_tpc(cser_ctr_tpc);
			srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
			srhVo.setDdly_yn(ddly_yn);
			srhVo.setR2_ddly_yn(r2_ddly_yn);
			
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setStart(-1);
			srhVo.setEnd(-1);
			
			//타이틀
			List<Map<String,Object>> titleList 		= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList 	= new ArrayList<Map<String,Object>>();
			
			Map<String,Object> _title 		= new LinkedHashMap<String, Object>();
			//Title Set
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			titleList.add(_title);
			
			///////////////////////////////////////
			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<DeliveryTradingPatnersMVO> mList = deliveryNoticeLiveStockService.printDeliveryTradingPatnersM(srhVo);
			if(mList != null && mList.size() > 0){
				//Detail List Set
				int keyIndex = 0;
				for(DeliveryTradingPatnersMVO vo : mList){
					//Master Set
					Map<String,Object> _master 	= new LinkedHashMap<String, Object>();
					_master.put("key","key"+keyIndex);
					_master.put("master01", vo.getNA_DVY_PLASH_SLPNO());
					_master.put("YMD_master02", vo.getDVY_PLA_DT());
					_master.put("master03", vo.getODRPL_NA_TRPL_C());
					_master.put("master04", vo.getODRPL_NA_TRPL_N());
					_master.put("NUM_master05", vo.getDVY_AM());
					_master.put("NUM_master06", vo.getDVY_VAT());					
					
					/*
					if(StringUtils.equals(vo.getDVY_PLA_STS(), "2")){
						_master.put("master07", "01 배송예정");
					}else{
						_master.put("master07", "03 매입");
					}
					*/
					_master.put("master07", vo.getDVY_PLA_STS()); //전표상태
					
					_master.put("master08", vo.getRVOPL_NA_TRPL_C());
					_master.put("master09", vo.getRVOPL_NA_TRPL_N());
					_master.put("master10", vo.getDVYAA_NA_TRPL_C());					
					_master.put("master11", vo.getDVYAA_NA_TRPL_N()); //배송지명
					masterList.add(_master);
					
					for(DeliveryTradingPatnersPrintDVO item : vo.getList()){
						Map<String,Object> _detail 	= new LinkedHashMap<String, Object>();
						_detail.put("key","key"+keyIndex);
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());						
						_detail.put("detail03", item.getNA_WRS_STD_UNT_N()); //규격
						_detail.put("detail04", item.getNA_WRS_UNT_N());
						_detail.put("NUM_detail05", item.getBOXPE_AQZ());
						_detail.put("NUM_detail06", item.getDVY_WRS_UPR());
						_detail.put("NUM_detail07", item.getDVY_PLA_QT());
						_detail.put("NUM_detail08", item.getDVY_AM());
						_detail.put("NUM_detail09", item.getDVY_VAT());
						_detail.put("NUM_detail10", item.getVCBT_UPR());
						_detail.put("NUM_detail11", item.getDVY_VCBT_AM());
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
	
	/*
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명  : 배송예정거래처별 조회
	 * 기    능 : 거래처별 Print
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/delivery/livestock/printDeliveryTradingPatners02")
	public RestResult printDeliveryTradingPatners02(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName,
			String dvy_plash_slpno_rdo, String na_dvy_plash_slpno, String odrpl_na_trpl_rdo, 
			String odrpl_na_trpl_c, String dvy_pla_dt_from, String dvy_pla_dt_to, String cser_ctr_tpc, 
			String dvy_pla_sts_rdo, String ddly_yn, String r2_ddly_yn, String sort, String ngrs_soju_yn,String TRPL_C
			){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
			srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
			srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
			srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
			srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
			srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
			srhVo.setCser_ctr_tpc(cser_ctr_tpc);
			srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
			srhVo.setDdly_yn(ddly_yn);
			srhVo.setR2_ddly_yn(r2_ddly_yn);
			
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setStart(-1);
			srhVo.setEnd(-1);
			
			//타이틀
			List<Map<String,Object>> titleList 		= new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList 	= new ArrayList<Map<String,Object>>();
			
			Map<String,Object> _title 		= new LinkedHashMap<String, Object>();

			//Title Set
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			titleList.add(_title);

			//Data Set
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<DeliveryTradingPatnersMVO> mList = deliveryNoticeLiveStockService.printDeliveryTradingPatnersM(srhVo);
			if(mList != null && mList.size() > 0){
				
				//Detail List Set
				for(DeliveryTradingPatnersMVO vo : mList){
					//Master Set
					Map<String,Object> _master 	= new LinkedHashMap<String, Object>();
					_master.put("master01", vo.getRVOPL_NA_TRPL_C());
					_master.put("master02", vo.getRVOPL_NA_TRPL_N());
					_master.put("master03", vo.getDVYAA_NA_TRPL_C());
					_master.put("master04", vo.getDVYAA_NA_TRPL_N());
					_master.put("master05", vo.getNA_DVY_PLASH_SLPNO());
					_master.put("YMD_master06", vo.getDVY_PLA_DT());
					_master.put("master07", vo.getODRPL_NA_TRPL_C());
					_master.put("master08", vo.getODRPL_NA_TRPL_N());
					_master.put("NUM_master09", vo.getDVY_AM());
					_master.put("NUM_master10", vo.getDVY_VAT());
					_master.put("NUM_master11", vo.getDVY_SSDY());
					_master.put("NUM_master12", vo.getDVY_SSDYRT());					
					masterList.add(_master);	
				}
			}
			all_list.add(titleList);		
			all_list.add(masterList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명 : 배송예정 거래처별 조회 상세
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveDeliveryTradingPatnersD")
	public void retrieveDeliveryTradingPatnersD(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String spypl_na_trpl_c = requestHelper.getParameter("spypl_na_trpl_c");
			String dvyaa_na_trpl_c = requestHelper.getParameter("dvyaa_na_trpl_c");
			String na_dvy_plash_slpno = requestHelper.getParameter("na_dvy_plash_slpno");
			String sort = requestHelper.getParameter("sort");
			
			String slpDt = requestHelper.getParameter("slpDt");
			String naSlpno = requestHelper.getParameter("naSlpno");
			
			int totalRowCount = deliveryNoticeLiveStockService.getDeliveryTradingPatnersDCount(spypl_na_trpl_c, dvyaa_na_trpl_c, na_dvy_plash_slpno, slpDt, naSlpno);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			//int start = pageHelper.getStart();
			//int end  = pageHelper.getEnd();
			int start = 0;
			int end = 150;
			
			PlatformData out_PlatformData = new PlatformData();
			List<DeliveryTradingPatnersDVO> list = deliveryNoticeLiveStockService.retrieveDeliveryTradingPatnersD(spypl_na_trpl_c, dvyaa_na_trpl_c, na_dvy_plash_slpno, start, end, sort, slpDt, naSlpno);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataD");
				dsHelper.addColumns(DeliveryTradingPatnersDVO.class);
				for(DeliveryTradingPatnersDVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 거래처별 조회 Excel DownLoad
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/livestock/downloadExcelDeliveryTradingPatners")
	public void downloadExcelDeliveryTradingPatners(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
//			PlatformData out_PlatformData = new PlatformData();
			String dvy_plash_slpno_rdo 		= request.getParameter("dvy_plash_slpno_rdo");
			String na_dvy_plash_slpno 		= request.getParameter("na_dvy_plash_slpno");
			String odrpl_na_trpl_rdo 		= request.getParameter("odrpl_na_trpl_rdo");
			String odrpl_na_trpl_c 			= request.getParameter("odrpl_na_trpl_c");
			String dvy_pla_dt_from 			= request.getParameter("dvy_pla_dt_from");
			String dvy_pla_dt_to 			= request.getParameter("dvy_pla_dt_to");
			String cser_ctr_tpc 			= request.getParameter("cser_ctr_tpc");
			String dvy_pla_sts_rdo 			= request.getParameter("dvy_pla_sts_rdo");
			String ddly_yn 					= request.getParameter("ddly_yn");
			String r2_ddly_yn = requestHelper.getParameter("r2_ddly_yn");
			String sort 					= request.getParameter("sort");
			String ngrs_soju_yn 			= request.getParameter("ngrs_soju_yn");
			String spypl_type 				= request.getParameter("spypl_type");
			//String fileName				= request.getParameter("FILE_NAME");
			String fileName 				= "배송예정서거래처별_"+dvy_pla_dt_from+"-"+dvy_pla_dt_to+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C 						= requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] 			= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
			srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
			srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
			srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
			srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
			srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
			srhVo.setCser_ctr_tpc(cser_ctr_tpc);
			srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
			srhVo.setDdly_yn(ddly_yn);
			srhVo.setR2_ddly_yn(r2_ddly_yn);
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setSpypl_type(spypl_type);
			srhVo.setTrpl(TRPL_C_ARR);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{
					"00공급처경제통합거래처코드",
					"01공급처경제통합팀코드",
					"02배송예정일자",
					"03경제통합배송예정서전표번호",
					"04발주처경제통합거래처코드",
					"05발주처경제통합거래처코드1",
					"06발주처경제통합팀코드",
					"07수주처경제통합거래처코드",
					"08수주처경제통합거래처코드1",
					"09수주처경제통합팀코드",
					"10정산처경제통합거래처코드",
					"11정산처경제통합팀코드",
					"12주관경제통합거래처코드",
					"13주관경제통합팀코드",
					"14배송지경제통합거래처코드",
					"15배송지경제통합거래처코드1",
					"16배송지경제통합팀코드",
					"17배송지코드",
					"18수요자계약유형코드",
					"19공급유형코드",
					"20매취수탁구분코드",
					"21경제통합상품대분류코드",
					"22경제통합상품중분류코드",
					"23물류중계소경제통합거래처코드",
					"24위탁대리점경제통합거래처코드",
					"25배송차량구분코드",
					"26차량번호",
					"27XML배송예정서번호",
					"28축산작업구분코드",
					"29축산물박스구분코드",
					"30경제통합포장구분코드",
					"31축산상품구분코드",
					"32인수도코드",
					"33직송여부",
					"34경제통합사용자시스템종류코드",
					"35매입전표일자",
					"36매입경제통합전표번호",
					"37배송요청시각",
					"38출고일자",
					"39출고전표번호",
					"40배송예정수량",
					"41배송중량",
					"42배송금액",
					"43배송부가세",
					"44배송공병금액",
					"45배송공상자금액",
					"46배송장려금",
					"47배송환급수수료",
					"48배송물류수수료",
					"49배송운임보조비",
					"50매입확정수량",
					"51매입확정중량",
					"52매입확정금액",
					"53매입확정부가세",
					"54매입확정공병금액",
					"55매입확정공상자금액",
					"56매입확정장려금",
					"57매입확정환급수수료",
					"58매입확정물류수수료",
					"59매입확정운임보조비",
					"60목재파렛트수량",
					"61플라스틱파렛트수량",
					"62가격군코드",
					"63구매단가구분코드",
					"64매입단가군코드",
					"65매입단가수정여부",
					"66장려금수정여부",
					"67채소비저장성여부",
					"68배송예정서사용가능여부",
					"69배송예정서종류코드",
					"70배송예정서상태코드",
					"71원경제통합배송예정서전표번호",
					"72물류인터페이스상태구분코드",
					"73배송예정서불가사유구분코드",
					"74비고내용",
					"75최초등록일시",
					"76최초등록자개인번호",
					"77최종변경일시",
					"78최종변경자개인번호",
					"79삭제일시",
					"80발주처경제통합팀코드1",
					"81수요자계약유형코드1",
					"82공급처경제통합거래처코드1",
					"83공급처경제통합팀코드1",
					"84배송장려금율(합계)",
					"85경제통합정정취소구분",
					"86경제통합정정취소구분명",
					"87지방소주여부"
				  };
			String[] keyIndex = new String[]{
					"SPYPL_NA_TRPL_C",
					"SPYPL_NA_TEAM_C",
					"DVY_PLA_DT",
					"NA_DVY_PLASH_SLPNO",
					"ODRPL_NA_TRPL_C",
					"ODRPL_NA_TRPL_N",
					"ODRPL_NA_TEAM_C",
					"RVOPL_NA_TRPL_C",
					"RVOPL_NA_TRPL_N",
					"RVOPL_NA_TEAM_C",
					"ADJPL_NA_TRPL_C",
					"ADJPL_NA_TEAM_C",
					"MNGT_NA_TRPL_C",
					"MNGT_NA_TEAM_C",
					"DVYAA_NA_TRPL_C",
					"DVYAA_NA_TRPL_N",
					"DVYAA_NA_TEAM_C",
					"DVYAA_C",
					"CSER_CTR_TPC",
					"SPY_TPC",
					"SLGT_ETR_DSC",
					"NA_WRS_LCLC",
					"NA_WRS_MCLC",
					"",
					"",
					"",
					"VHCNO",
					"",
					"",
					"",
					"",
					"",
					"",
//					"DDLY_YN",
					"R2_DDLY_YN",
					"NA_USR_SYS_KDC",
					"SLP_DT",
					"NA_SLPNO",
					"",
					"",
					"",
					"DVY_PLA_QT",
					"",
					"DVY_AM",
					"DVY_VAT",
					"DVY_VCBT_AM",
					"",
					"DVY_SSDY",
					"DVY_TROT_FEE",
					"DVY_PHD_FEE",
					"DVY_FAR_ASTCS",
					"BYNG_QT",
					"BYNT_WT",
					"BYAM",
					"BYNG_VAT",
					"VCBT_AM",
					"",					
					"",
					"BYNG_SSDY",
					"",
					"",
					"",
					"",
					"PRGR_C",
					"",
					"",
					"",
					"",
					"",
					"",
					"DVY_PLASH_KDC",
					"DVY_PLASH_STSC",
					"OGN_NA_DVY_PLASH_SLPNO",
					"",
					"",
					"RMK_CNTN",
					"",
					"FSRGMN_ENO",
					"LSCHG_DTM",
					"LS_CMENO",
					"",
					"ODRPL_NA_TRPL_N",
					"CSER_CTR_TPC_N",
					"SPYPL_NA_TRPL_N",
					"ODRPL_NA_TEAM_N",
					"DVY_SSDYRT",
					"",
					"",
					"GRS_SOJU_YN"
					};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeLiveStockService.downloadExcelDeliveryTradingPatners(srhVo, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("배송예정서번호 구분", dvy_plash_slpno_rdo);
			searchMap.put("배송예정서번호", na_dvy_plash_slpno);
			searchMap.put("발주처구분", odrpl_na_trpl_rdo);
			searchMap.put("발주처코드", odrpl_na_trpl_c);
			searchMap.put("배송예정일자 검색시작일자", dvy_pla_dt_from);
			searchMap.put("배송예정일자 검색종료일자", dvy_pla_dt_to);
			searchMap.put("계약유형", cser_ctr_tpc);
			searchMap.put("배송예정서상태", dvy_pla_sts_rdo);
			searchMap.put("배송구분", ddly_yn);
			searchMap.put("정렬기준", sort);
			searchMap.put("지방소주여부", ngrs_soju_yn);
			searchMap.put("조회구분", spypl_type);
			searchMap.put("사업장", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 거래처별 조회 Grid Excel DownLoad
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/livestock/downloadExcelDeliveryTradingPatnersM")
	public void downloadExcelDeliveryTradingPatnersM(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String dvy_plash_slpno_rdo 	= request.getParameter("dvy_plash_slpno_rdo");
			String na_dvy_plash_slpno 	= request.getParameter("na_dvy_plash_slpno");
			String odrpl_na_trpl_rdo 		= request.getParameter("odrpl_na_trpl_rdo");
			String odrpl_na_trpl_c 			= request.getParameter("odrpl_na_trpl_c");
			String dvy_pla_dt_from 			= request.getParameter("dvy_pla_dt_from");
			String dvy_pla_dt_to 			= request.getParameter("dvy_pla_dt_to");
			String cser_ctr_tpc 				= request.getParameter("cser_ctr_tpc");
			String dvy_pla_sts_rdo 			= request.getParameter("dvy_pla_sts_rdo");
			String ddly_yn 					= request.getParameter("ddly_yn");
			String r2_ddly_yn = requestHelper.getParameter("r2_ddly_yn");
			String sort 							= request.getParameter("sort");
			String ngrs_soju_yn 				= request.getParameter("ngrs_soju_yn");
			String spypl_type 				= request.getParameter("spypl_type");
			String g_spypl_na_trpl_c		= request.getParameter("g_spypl_na_trpl_c");
			String g_dvyaa_na_trpl_c		= request.getParameter("g_dvyaa_na_trpl_c");
			String g_na_dvy_plash_slpno	= request.getParameter("g_na_dvy_plash_slpno");
			//String fileName						= request.getParameter("FILE_NAME");
			String fileName = "배송예정서거래처별_마스터_"+dvy_pla_dt_from+"-"+dvy_pla_dt_to+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C 						= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 			= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
			srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
			srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
			srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
			srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
			srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
			srhVo.setCser_ctr_tpc(cser_ctr_tpc);
			srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
			srhVo.setDdly_yn(ddly_yn);
			srhVo.setR2_ddly_yn(r2_ddly_yn);
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setSpypl_type(spypl_type);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setG_dvyaa_na_trpl_c(g_dvyaa_na_trpl_c);
			srhVo.setG_na_dvy_plash_slpno(g_na_dvy_plash_slpno);
			srhVo.setG_spypl_na_trpl_c(g_spypl_na_trpl_c);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = new String[]{
					"수주처",
					"수주처명",
					"배송지",
					"배송지명",
					"배송예정서번호",
					"배송예정일",
					"배송예정금액",
					"부가세",
					"전표상태",
					"수요자계약유형",
					"최초등록자",
					"배송장려금",
					"배송장려금율",
					"매입확정수량",
					"매입확정금액",
					"매입전표일자",
					"매입전표번호",
					"발주처",
					"발주처명",
					"직송여부",
					"발주팀",
					"배송예정수량",
					"배송예정금액",
					"매입수량",
					"매입금액",
					"비고"
				  };
			String[] keyIndex = new String[]{
					"RVOPL_NA_TRPL_C",
					"RVOPL_NA_TRPL_N",
					"DVYAA_NA_TRPL_C",
					"DVYAA_NA_TRPL_N",
					"NA_DVY_PLASH_SLPNO",
					"DVY_PLA_DT",
					"DVY_AM",
					"DVY_VAT",
					"DVY_PLA_STS",
					"CSER_CTR_TPC",
					"FSRGMN_ENO",
					"DVY_SSDY",
					"DVY_SSDYRT",
					"BYNG_QT",
					"BYAM",
					"SLP_DT",
					"NA_SLPNO",
					"ODRPL_NA_TRPL_C",
					"ODRPL_NA_TRPL_N",
//					"DDLY_YN",
					"R2_DDLY_YN",
					"ODRPL_NA_TEAM_N",
					"STS_DVY_PLA_QT",
					"STS_DVY_AM",
					"STS_BYNG_QT",
					"STS_BYAM",
					"RMK_CNTN"
					};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeLiveStockService.downloadExcelDeliveryTradingPatnersM(srhVo, handler);

			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("배송예정서번호 구분", dvy_plash_slpno_rdo);
			searchMap.put("배송예정서번호", na_dvy_plash_slpno);
			searchMap.put("발주처구분", odrpl_na_trpl_rdo);
			searchMap.put("발주처코드", odrpl_na_trpl_c);
			searchMap.put("배송예정일자 검색시작일자", dvy_pla_dt_from);
			searchMap.put("배송예정일자 검색종료일자", dvy_pla_dt_to);
			searchMap.put("계약유형", cser_ctr_tpc);
			searchMap.put("배송예정서상태", dvy_pla_sts_rdo);
			searchMap.put("배송구분", ddly_yn);
			searchMap.put("정렬기준", sort);
			searchMap.put("지방소주여부", ngrs_soju_yn);
			searchMap.put("조회구분", spypl_type);
			searchMap.put("사업장", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 거래처별 조회 상위 엑셀 상세
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/livestock/downloadExcelDetailDeliveryTradingPatners")
	public void downloadExcelDetailDeliveryTradingPatners(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String dvy_plash_slpno_rdo 		= request.getParameter("dvy_plash_slpno_rdo");
			String na_dvy_plash_slpno 		= request.getParameter("na_dvy_plash_slpno");
			String odrpl_na_trpl_rdo 		= request.getParameter("odrpl_na_trpl_rdo");
			String odrpl_na_trpl_c 			= request.getParameter("odrpl_na_trpl_c");
			String dvy_pla_dt_from 			= request.getParameter("dvy_pla_dt_from");
			String dvy_pla_dt_to 			= request.getParameter("dvy_pla_dt_to");
			String cser_ctr_tpc 			= request.getParameter("cser_ctr_tpc");
			String dvy_pla_sts_rdo 			= request.getParameter("dvy_pla_sts_rdo");
			String ddly_yn 					= request.getParameter("ddly_yn");
			String r2_ddly_yn = request.getParameter("r2_ddly_yn");
			String sort 					= request.getParameter("sort");
			String ngrs_soju_yn 			= request.getParameter("ngrs_soju_yn");
			String spypl_type 				= request.getParameter("spypl_type");
			String g_spypl_na_trpl_c		= request.getParameter("g_spypl_na_trpl_c");
			String g_dvyaa_na_trpl_c		= request.getParameter("g_dvyaa_na_trpl_c");
			String g_na_dvy_plash_slpno	= request.getParameter("g_na_dvy_plash_slpno");
			String fileName = "배송예정서거래처별_상세_"+dvy_pla_dt_from+"-"+dvy_pla_dt_to+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C 					= request.getParameter("TRPL_C");
			String TRPL_C_ARR[] 			= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
			srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
			srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
			srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
			srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
			srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
			srhVo.setCser_ctr_tpc(cser_ctr_tpc);
			srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
			srhVo.setDdly_yn(ddly_yn);
			srhVo.setR2_ddly_yn(r2_ddly_yn);
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setSpypl_type(spypl_type);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setG_dvyaa_na_trpl_c(g_dvyaa_na_trpl_c);
			srhVo.setG_na_dvy_plash_slpno(g_na_dvy_plash_slpno);
			srhVo.setG_spypl_na_trpl_c(g_spypl_na_trpl_c);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[]{
					"00공급처경제통합거래처코드",
					"01공급처경제통합팀코드",
					"02수주처경제통합거래처코드",
					"03수주처경제통합거래처명",
					"04배송지경제통합거래처코드",
					"05배송지경제통합거래처명",
					"06경제통합배송예정서전표번호",
					"07발주전표일련번호",
					"08배송예정일자",
					"09발주처경제통합거래처코드",
					"10발주처경제통합거래처명",
					"11발주처경제통합팀코드",
					"12배송금액",
					"13배송부가세",
					"14배송예정서상태코드",
					"15비고내용",
					"16경제통합상품코드",
					"17경제통합상품명",
					"18상품규격명",
					"19상품단위코드",
					"20박스당입수",
					"21배송상품단가",
					"22배송예정수량",
					"23배송금액",
					"24배송부가세",
					"25배송공병금액",
					"26공병수량",
					"27공병단가",
					"28상품단위명"
				  };
			String[] keyIndex = new String[]{
					"SPYPL_NA_TRPL_C",
					"SPYPL_NA_TEAM_C",
					"RVOPL_NA_TRPL_C",
					"RVOPL_NA_TRPL_N",
					"DVYAA_NA_TRPL_C",
					"DVYAA_NA_TRPL_N",
					"NA_DVY_PLASH_SLPNO",
					"ODR_SLPNO",
					"DVY_PLA_DT",
					"ODRPL_NA_TRPL_C",
					"ODRPL_NA_TRPL_N",
					"ODRPL_NA_TEAM_C",
					"TOTAL_DVY_AM",
					"TOTAL_DVY_VAT",
					"DVY_PLASH_STSC",
					"RMK_CNTN",
					"NA_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"NA_WRS_UNT_C",
					"BOXPE_AQZ",
					"DVY_WRS_UPR",
					"DVY_PLA_QT",
					"DVY_AM",
					"DVY_VAT",
					"DVY_VCBT_AM",
					"DVY_VCBT_UPR",
					"VCBT_UPR",
					"NA_WRS_UNT_C_NM"
					};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeLiveStockService.downloadExcelDetailDeliveryTradingPatners(srhVo, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("배송예정서번호 구분", dvy_plash_slpno_rdo);
			searchMap.put("배송예정서번호", na_dvy_plash_slpno);
			searchMap.put("발주처구분", odrpl_na_trpl_rdo);
			searchMap.put("발주처코드", odrpl_na_trpl_c);
			searchMap.put("배송예정일자 검색시작일자", dvy_pla_dt_from);
			searchMap.put("배송예정일자 검색종료일자", dvy_pla_dt_to);
			searchMap.put("계약유형", cser_ctr_tpc);
			searchMap.put("배송예정서상태", dvy_pla_sts_rdo);
			searchMap.put("배송구분", ddly_yn);
			searchMap.put("정렬기준", sort);
			searchMap.put("지방소주여부", ngrs_soju_yn);
			searchMap.put("조회구분", spypl_type);
			searchMap.put("사업장", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
			
			List<Map<String, Object>> billingList = deliveryNoticeLiveStockService.downloadExcelDetailDeliveryTradingPatnersBilling(srhVo);
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("SPYPL_NA_TRPL_C", vo.get("SPYPL_NA_TRPL_C").toString());
					values.put("DVYAA_NA_TRPL_C", vo.get("DVYAA_NA_TRPL_C").toString());
					values.put("DVY_PLA_DT", vo.get("DVY_PLA_DT").toString());
					values.put("NA_DVY_PLASH_SLPNO", vo.get("NA_DVY_PLASH_SLPNO").toString());
					DeduplicationObject ddo = new DeduplicationObject(values);
					billingSet.add(ddo);
				}
				
				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				markBillingP(GLN, MD_ID, billingSet);
			}
		}  catch (Exception e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 거래처별 조회 Excel Data In Format 
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/livestock/downloadExcelDeliveryTradingPatnersE")
	public void downloadExcelDeliveryTradingPatnersE(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
//			PlatformData out_PlatformData = new PlatformData();
			
			
			String dvy_plash_slpno_rdo 	= request.getParameter("dvy_plash_slpno_rdo");
			String na_dvy_plash_slpno 	= request.getParameter("na_dvy_plash_slpno");
			String odrpl_na_trpl_rdo 		= request.getParameter("odrpl_na_trpl_rdo");
			String odrpl_na_trpl_c 			= request.getParameter("odrpl_na_trpl_c");
			String dvy_pla_dt_from 			= request.getParameter("dvy_pla_dt_from");
			String dvy_pla_dt_to 			= request.getParameter("dvy_pla_dt_to");
			String cser_ctr_tpc 				= request.getParameter("cser_ctr_tpc");
			String dvy_pla_sts_rdo 			= request.getParameter("dvy_pla_sts_rdo");
			String ddly_yn 					= request.getParameter("ddly_yn");
			String sort 							= request.getParameter("sort");
			String ngrs_soju_yn 				= request.getParameter("ngrs_soju_yn");
			//String fileName						= request.getParameter("FILE_NAME");
			String fileName = "배송예정서거래처별_"+dvy_pla_dt_from+"-"+dvy_pla_dt_to+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C 						= requestHelper.getGlnCode();
			
			String TRPL_C_ARR[] 			= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
			srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
			srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
			srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
			srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
			srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
			srhVo.setCser_ctr_tpc(cser_ctr_tpc);
			srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
			srhVo.setDdly_yn(ddly_yn);
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setTrpl(TRPL_C_ARR);
			
			
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = new String[]{
					"01일련번호","02Detail Count","03공급처경제통합거래처코드","04공급처경제통합팀코드","05배송예정일자","06경제통합배송예정서전표번호","07발주처경제통합거래처코드",
					"08발주처경제통합팀코드","09수주처경제통합거래처코드","10수주처경제통합팀코드","11정산처경제통합거래처코드","12정산처경제통합팀코드","13주관경제통합거래유형코드",
					"14주관경제통합거래처코드","15주관경제통합팀코드","16배송지경제통합거래처코드","17배송지경제통합팀코드","18배송지코드","19수요자계약유형코드","20공급유형코드","21매취수탁구분코드",
					"22경제통합상품대분류코드","23경제통합상품중분류코드","33인수도코드","39배송예정수량","41배송금액","42배송부가세","43배송공병금액","44배송공상자금액","45배송장려금","46배송환급수수료",
					"47배송물류수수료","48배송운임보조비","59목재파렛트수량","60플라스틱파렛트수량","61가격군코드","62구매단가구분코드","63매입단가군코드","69비고내용","06배송예정일련번호","07경제통합상품코드",
					"10경제통합출하자코드","11산지경제통합사업장코드","12산지경제통합팀코드","13수령인명","14수령인전화번호","18발주일자","19발주전표번호","20발주상세일련번호","21과세구분코드","25배송상품단가",
					"26배송예정수량","28배송금액","29배송부가세","30배송공병금액","31배송장려금","32배송환급수수료","33배송물류수수료","34배송운임보조비","38비고내용","40매출단가유형코드","41수요자계약유형코드",
					"42구매사업방식코드"
				  };
			String[] keyIndex = new String[]{
					"ROWNUM", "CNT", "SPYPL_NA_TRPL_C", "C04", "DVY_PLA_DT", "NA_DVY_PLASH_SLPNO", "ODRPL_NA_TRPL_C", "ODRPL_NA_TEAM_C", 
					"RVOPL_NA_TRPL_C", "RVOPL_NA_TEAM_C", "ADJPL_NA_TRPL_C", "ADJPL_NA_TEAM_C", "MNGT_NA_TR_TPC", "MNGT_NA_TRPL_C", "MNGT_NA_TEAM_C", 
					"DVYAA_NA_TRPL_C", "DVYAA_NA_TEAM_C", "DVYAA_C", "CSER_CTR_TPC", "SPY_TPC", "SLGT_ETR_DSC", "NA_WRS_LCLC", "NA_WRS_MCLC", "C33", 
					"DVY_PLA_QT", "DVY_AM", "DVY_VAT", "VCBT_AM", "VCBX_AM", "DVY_SSDY", "DVY_TROT_FEE", "DVY_PHD_FEE", "DVY_FAR_ASTCS", "C59", "C60", "C61", 
					"C62", "C63", "RMK_CNTN", "DVY_PLA_SQNO", "NA_WRS_C", "C10", "C11", "C12", "C13", "C14", "ODR_DT", "ODR_SLPNO", "ODR_DSQNO", "TXT_DSC", 
					"DVY_WRS_UPR", "DVY_PLA_QT_D", "DVY_AM_D", "DVY_VAT_D", "DVY_VCBT_AM", "DVY_SSDY_D", "DVY_TROT_FEE_D", "DVY_PHD_FEE_D", "DVY_FAR_ASTCS_D", 
					"C38", "C39", "C41", "C42"
					};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeLiveStockService.downloadExcelDeliveryTradingPatnersE(srhVo, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			
			searchMap.put("배송예정서번호", dvy_plash_slpno_rdo);
			searchMap.put("사업장", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 상품별 조회 Master
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveDeliverySkusM")
	public void retrieveDeliverySkusM(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			
			String dvyPlaDtFr = requestHelper.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = requestHelper.getParameter("dvy_pla_dt_to");
			String wrsGubun = requestHelper.getParameter("wrs_gubun");
			String naWrsC = requestHelper.getParameter("na_wrs_c");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			int totalRowCount = deliveryNoticeLiveStockService.getDeliverySkusMCount(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO01"), totalRowCount, "ds_pageVO01");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			PlatformData out_PlatformData = new PlatformData();
			List<DeliverySkusMVO> list = deliveryNoticeLiveStockService.retrieveDeliverySkusM(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(DeliverySkusMVO.class);
				for(DeliverySkusMVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 상품별 조회 Deail
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveDeliverySkusD")
	public void retrieveDeliverySkusD(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			
			String dvyPlaDtFr = requestHelper.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = requestHelper.getParameter("dvy_pla_dt_to");
			String naWrsC = requestHelper.getParameter("na_wrs_c");
//			String spyplType = requestHelper.getParameter("spypl_type");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			int totalRowCount = deliveryNoticeLiveStockService.getDeliverySkusDCount(naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			PlatformData out_PlatformData = new PlatformData();
			List<DeliverySkusDVO> list = deliveryNoticeLiveStockService.retrieveDeliverySkusD(naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataD");
				dsHelper.addColumns(DeliverySkusDVO.class);
				for(DeliverySkusDVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 상품별 조회 Excel DownLoad
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/livestock/downloadExcelDeliverySkus")
	public void downloadExcelDeliverySkus(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			String dvyPlaDtFr = request.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = request.getParameter("dvy_pla_dt_to");
			String wrsGubun = request.getParameter("wrs_gubun");
			String naWrsC = request.getParameter("na_wrs_c");
			String fileName = "배송예정서상품별_"+dvyPlaDtFr+"-"+dvyPlaDtTo+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C = request.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = new String[]{
					"00경제통합상품코드",
					"01상품명",
					"02상품규격명",
					"03항목수",
					"04배송예정수량",
					"05배송부가세",
					"06배송금액",
					"07수주처경제통합거래처코드",
					"08수주처경제통합거래처명",
					"09경제통합배송예정서전표번호",
					"10배송지경제통합거래처코드",
					"11배송지경제통합거래처명",
					"12발주처경제통합거래처코드",
					"13발주처경제통합거래처명",
					"14배송예정일자",
					"15단가",
					"16배송예정수량",
					"17배송금액",
					"18배송부가세",
					"19환급 물류 수수료",
					"20지방소주취급여부",
					"21차량번호",
					"22배송예정서상태코드",
					"23배송예정서상태",
				  };
			String[] keyIndex = new String[]{
					"NA_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"CNT",
					"DVY_PLA_QT",
					"DVY_VAT",
					"DVY_AM",
					"RVOPL_NA_TRPL_C",
					"RVOPL_NA_TRPL_N",
					"NA_DVY_PLASH_SLPNO",
					"DVYAA_NA_TRPL_C",
					"DVYAA_NA_TRPL_N",
					"ODRPL_NA_TRPL_C",
					"ODRPL_NA_TRPL_N",
					"DVY_PLA_DT",
					"DVY_WRS_UPR",
					"DVY_PLA_QT_A",
					"DVY_AM_A",
					"DVY_VAT_A",
					"DVY_FEE",
					"GRS_SOJU_YN",
					"VHCNO",
					"DVY_PLASH_STSC",
					"DVY_PLASH_STSN"
				};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeLiveStockService.downloadExcelDeliverySkus(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("조회시작일", dvyPlaDtFr);
			searchMap.put("조회종료일", dvyPlaDtTo);
			
			
			if(StringUtils.equals("1", naWrsC)){
				searchMap.put("상품코드", "전체");
			}else{
				searchMap.put("조회구분", "상품코드");
				searchMap.put("상품코드", naWrsC);
				
			}
			searchMap.put("사업장", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		}  catch (Exception e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	
	/**
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 상품별 조회 출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/delivery/livestock/printDeliverySkus")
	public RestResult printDeliverySkus(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName,
			String dvyPlaDtFr, String dvyPlaDtTo, String wrsGubun,String naWrsC, String TRPL_C) {
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
			
			List<DeliverySkusMVO> masterVOList = deliveryNoticeLiveStockService.retrieveDeliverySkusM(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, -1, -1);
			
			/**
			 * 마스터
			 *  int KEY 
			 *  String SPYPL_NA_TRPL_C //공급처코드
				String RVOPL_NA_TRPL_C // 수주처코드
				String RVOPL_NA_TEAM_C //수주처팀코드
				String NA_WRS_C //상품코드
				String WRSNM// 상품명
				String WRS_STDNM // 상품규격
				long CNT // 항목수
				double DVY_PLA_QT //  수량
				double DVY_AM //금액
				long DVY_VAT //부가세
				double DVY_FEE//수수료합계
			 */
			List<Map<String, Object>> masterList = new ArrayList<Map<String,Object>>();
			/**
			 * 디테일
			 *  int KEY
				String RVOPL_NA_TRPL_C;//수주처
				String RVOPL_NA_TRPL_N;//수주처명
				String NA_DVY_PLASH_SLPNO;//배송예정서전표번호
				String DVYAA_NA_TRPL_C;//배송지
				String DVYAA_NA_TRPL_N;//배송지명
				String ODRPL_NA_TRPL_C;//발주처
				String ODRPL_NA_TRPL_N;//발주처명
				String ODRPL_NA_TEAM_C;//발주처팀
				String DVY_PLA_DT;//배송예정일자
				String DVY_WRS_UPR;//단가
				double DVY_PLA_QT;//수량
				double DVY_AM;//배송금액
				long DVY_VAT;//부가세
				double DVY_FEE;//수수료(물류,환급)
			 */
			List<Map<String, Object>> detailList = new ArrayList<Map<String,Object>>();
			
			if(masterVOList != null && masterVOList.size() > 0){
				int key = 1;
				for(DeliverySkusMVO vo : masterVOList){
					double DVY_FEE = 0;
					Map<String, Object> master = ValueObjectSetUtil.ConverObjectToMap(vo);
					master.put("KEY", key);
					master.put("NUM_CNT", master.get("CNT"));
					master.remove("CNT");
					master.put("NUM_DVY_PLA_QT", master.get("DVY_PLA_QT"));
					master.remove("DVY_PLA_QT");
					master.put("NUM_DVY_AM", master.get("DVY_AM"));
					master.remove("DVY_AM");
					master.put("NUM_DVY_VAT", master.get("DVY_VAT"));
					master.remove("DVY_VAT");
					
					
					List<DeliverySkusDVO> detailVOList = deliveryNoticeLiveStockService.retrieveDeliverySkusD(vo.getNA_WRS_C(), dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, -1, -1);
					if(detailVOList != null && detailVOList.size() > 0) {
						for(DeliverySkusDVO dvo : detailVOList) {
							Map<String, Object> detail = ValueObjectSetUtil.ConverObjectToMap(dvo);
							detail.put("KEY", key);
							
							detail.put("YMD_DVY_PLA_DT", detail.get("DVY_PLA_DT"));
							detail.remove("DVY_PLA_DT");
							detail.put("NUM_DVY_WRS_UPR", detail.get("DVY_WRS_UPR"));
							detail.remove("DVY_WRS_UPR");
							detail.put("NUM_DVY_PLA_QT", detail.get("DVY_PLA_QT"));
							detail.remove("DVY_PLA_QT");
							detail.put("NUM_DVY_AM", detail.get("DVY_AM"));
							detail.remove("DVY_AM");
							detail.put("NUM_DVY_VAT", detail.get("DVY_VAT"));
							detail.remove("DVY_VAT");
							detail.put("NUM_DVY_FEE", detail.get("DVY_FEE"));
							detail.remove("DVY_FEE");
							detailList.add(detail);
							DVY_FEE+= dvo.getDVY_FEE();
						}
					}
					
					master.put("NUM_DVY_FEE", DVY_FEE);
					masterList.add(master);
					key++;
				}
			}
			ozReport.add(masterList);
			ozReport.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (masterList != null? masterList.size() : 0));
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0350
	 * 화면명 : 배송예정 결과조회
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/retrieveDeliveryResult")
	public void retrieveDeliveryResult(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			
			String dvyPlaDtFr = requestHelper.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = requestHelper.getParameter("dvy_pla_dt_to");
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
			String ddlyYn = requestHelper.getParameter("ddly_yn");
			String resCode = requestHelper.getParameter("res_code");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			int totalRowCount = deliveryNoticeLiveStockService.getDeliveryResultCount(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>> list = deliveryNoticeLiveStockService.retrieveDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, start, end);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				
				dsHelper.addColumns(list.get(0).keySet());
				
				
				for(Map<String, Object> vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			out_PlatformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/livestock/downloadExcelDeliveryResult")
	public void downloadExcelDeliveryResult(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			String dvyPlaDtFr = request.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = request.getParameter("dvy_pla_dt_to");
			String odrplNaTrplC = request.getParameter("odrpl_na_trpl_c");
			String ddlyYn = request.getParameter("ddly_yn");
			String resCode = request.getParameter("res_code");
			String TRPL_C = request.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "배송예정서결과조회_"+dvyPlaDtFr+"-"+dvyPlaDtTo+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = new String[]{
					"순번",
					"발주처",
					"발주처명",
					"공급처",
					"공급처명",
					"배송예정서번호",
					"XMLEDI전문번호",
					"배송요청일",
					"배송금액",
					"배송부가세",
					"발주번호",
					"발주일자",
					"배송구분",
					"배송예정서상태",
					"응답결과",
					"응답내용"
				  };
			String[] keyIndex = new String[]{
					"RN",
					"ODRPL_NA_TRPL_C",
					"ODRPL_NA_TRPL_N",
					"SPYPL_NA_TRPL_C",
					"SPYPL_NA_TRPL_N",
					"NA_DVY_PLASH_SLPNO",
					"NA_DVY_PLASH_SLPNO",
					"DVY_PLA_DT",
					"DVY_AM",
					"DVY_VAT",
					"ODR_SLPNO",
					"ODR_DT",
					"DDLY_YN",
					"DVY_PLASH_STSNM",
					"DVY_PLASH_STSC",
					"RES_CODE",
					"RES_DESC"
				};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);

			deliveryNoticeLiveStockService.downloadExcelDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, -1, -1, handler);
			
			handler.write(response, fileName);
		}  catch (Exception e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명 : 배송예정서 조회 
	 * 기    능 : 거래명세서출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/livestock/printDeliveryNoticeOrders")
	public RestResult printDeliveryNoticeOrders(HttpServletRequest request, HttpServletResponse response,
			String dvy_plash_slpno_rdo, String na_dvy_plash_slpno, String odrpl_na_trpl_rdo, 
			String odrpl_na_trpl_c, String dvy_pla_dt_from, String dvy_pla_dt_to, String cser_ctr_tpc, 
			String dvy_pla_sts_rdo, String ddly_yn, String r2_ddly_yn, String sort, String ngrs_soju_yn, String TRPL_C, String spyplNaTrplC, String dvyaaNaTrplC,
			String systemFileName){
		try{
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
			srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
			srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
			srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
			srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
			srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
			srhVo.setCser_ctr_tpc(cser_ctr_tpc);
			// 배송구분이 '전체'일 때 취소 목록 제외
			if (dvy_pla_sts_rdo != null && "all".equals(dvy_pla_sts_rdo)) {
				srhVo.setDvy_pla_sts_rdo("OZ");
			} else {
				srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
			}
			srhVo.setDdly_yn(ddly_yn);
			srhVo.setR2_ddly_yn(r2_ddly_yn);
			
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setStart(-1);
			srhVo.setEnd(-1);
			
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			
			/*
			String tempPath = Configurer.getProperty("file.temp.path");
			File dir = new File(tempPath);
			String baseImage = "";
			if(StringUtils.isNotEmpty(systemFileName)) {
				File f = FileUtils.getFile(dir, systemFileName);
				baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));	
			}
			if(StringUtils.isNotEmpty(baseImage)) {
				markMap.put("mark", "data:;base64,"+baseImage);//직인파일
			} else {
				markMap.put("mark", "");
			}
			markList.add(markMap);
			*/
			
			List<DeliveryTradingPatnersMVO> dvyMasterList = deliveryNoticeLiveStockService.printDeliveryTradingPatnersJustM(srhVo);
			String[] docKdcArr = {"공급자용", "중개소용", "공급받는자용"};
			
			if(dvyMasterList != null && dvyMasterList.size() > 0) {
				//Detail List Set
				int keyIndex = 0;
				for(DeliveryTradingPatnersMVO mvo : dvyMasterList) {
					List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeLiveStockService.printDeliveryNoticeOrder(mvo.getNA_DVY_PLASH_SLPNO(), mvo.getSPYPL_NA_TRPL_C(), mvo.getDVYAA_NA_TRPL_C());
					List<Map<String,Object>> docDetailList = new ArrayList<Map<String,Object>>();
					if(list != null && list.size() > 0){
						long totalDvyAm 	= 0;
						long totalSpyplAm 	= 0;
						long totalDvyVat 	= 0;
						for(DeliveryNoticeOrderPrintVO item : list){
							Map<String,Object> _detail = new LinkedHashMap<String, Object>();
							_detail.put("key","key"+keyIndex);
							_detail.put("detail01", 			item.getNA_WRS_C());
							_detail.put("detail02", 			item.getWRSNM());
							_detail.put("NUM_detail03", 		item.getNA_WRS_UNT_N());		//규격
							_detail.put("NUM_detail04", 		item.getBOX_QT());				//수량(BOX)
							_detail.put("NUM_detail05", 		item.getDVY_PLA_QT());			//총중량
							_detail.put("detail06", 			item.getINDV_ID_NO());			//개체식별번호
							_detail.put("NUM_detail07", 		item.getDVY_PLA_QT());			//중량
							_detail.put("NUM_detail08", 		item.getDVY_WRS_UPR());			//단가
							_detail.put("NUM_detail09", 		item.getDVY_AM());				//금액
							_detail.put("NUM_detail10", 		item.getSPYPL_AM());			//공급금액
							_detail.put("NUM_detail11", 		item.getDVY_VAT());				//부가세
							
							totalDvyAm = totalDvyAm + Long.parseLong(item.getDVY_AM());
							totalSpyplAm = totalSpyplAm + Long.parseLong(item.getSPYPL_AM());
							totalDvyVat = totalDvyVat + Long.parseLong(item.getDVY_VAT());
							
							detailList.add(_detail);
							docDetailList.add(_detail);
						}
						
						Map<String,Object> _master = new LinkedHashMap<String, Object>();
						//Master Set
						DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
						
						_master.put("key","key"+keyIndex);
						_master.put("top01", docKdcArr[0]);			//용도
						_master.put("top02", "");							//전화번호
						_master.put("top03", mvo.getNA_DVY_PLASH_SLPNO());						//배송예정서
						_master.put("YMD_top04", vo.getCNR_DT());						//배송예정일자
						
	
						//공급자
						_master.put("master01", vo.getSPYPL_BIZ_NUMBER()); 			//공급자-등록번호
						_master.put("master02", vo.getSPYPL_NA_TRPL_N()); 			//공급자-상호
						_master.put("master03", vo.getSPYPL_REPMNM()); 				//공급자-성명
						_master.put("master04", vo.getSPYPL_ADDRESS()); 				//공급자-주소
						_master.put("master05", vo.getSPYPL_BZTPNM()); 				//공급자-업태
						_master.put("master06", vo.getSPYPL_BZCCNM()); 				//공급자-종목
	
						//공급받는자
						_master.put("master07", vo.getDVYAA_BIZ_NUMBER());			//공급받는자-등록번호
						_master.put("master08", vo.getDVYAA_NA_TRPL_N()); 			//공급받는자-상호
						_master.put("master09", vo.getDVYAA_REPMNM());				//공급받는자-성명
						_master.put("master10", vo.getDVYAA_ADDRESS());				//공급받는자-주소
						_master.put("master11", vo.getDVYAA_BZTPNM()); 				//공급받는자-업태
						_master.put("master12", vo.getDVYAA_BZCCNM()); 				//공급받는자-종목
						_master.put("master13", vo.getRMK_CNTN()); 						//배송처
						_master.put("master14", ""); 						//주소
						_master.put("NUM_master15", totalDvyAm);				//총금액합계
						_master.put("NUM_master16", totalSpyplAm);				//공급금액합계
						_master.put("NUM_master17", totalDvyVat);				//부가세합계
						
						//직인파일
						if(StringUtils.isNotEmpty(systemFileName)) {
							String tempPath = Configurer.getProperty("file.temp.path");
							File dir = new File(tempPath);
							File f = FileUtils.getFile(dir, systemFileName);
							if (f.exists()) {
								String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
								if (StringUtils.isNotEmpty(baseImage)) {
									markMap.put("mark", "data:;base64," + baseImage);// 직인파일
								}
							} else {
								markMap.put("mark", "");
							}
						}else if(StringUtils.isNotEmpty(vo.getNA_TRPL_SEAL_FLNM())){
							String tempPath = Configurer.getProperty("file.seal.path");
							File dir = new File(tempPath);
							String fileNm = vo.getNA_TRPL_SEAL_FLNM();
							File f = FileUtils.getFile(dir, fileNm);
							if (f.exists()) {
								String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
								if (StringUtils.isNotEmpty(baseImage)) {
									markMap.put("mark", "data:;base64," + baseImage);// 직인파일
								}
							} else {
								markMap.put("mark", "");
							}
						}else {
							markMap.put("mark", "");
						}
						markMap.put("key","key"+keyIndex);
						markList.add(markMap);
						
						//바코드						
						String code1 = vo.getSPYPL_NA_TRPL_C();
						String code2 = mvo.getNA_DVY_PLASH_SLPNO();
						String barcode = code1+code2;
						/* 20220420 배송예정서번호 자르지 않음
						if(code2.length() > 13){					
							code2 = code2.substring(0, 13);
							barcode = code1+code2;
						}
						*/
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
								e.printStackTrace();
							}
							byte[] bytes = baos.toByteArray();
							String barcodeImage = Base64Utils.encodeToString(bytes);
							_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
						}catch(BarcodeException e){
							e.printStackTrace();
						}
						_master.put("barcode", barcode);//바코드
						masterList.add(_master);
						keyIndex++;
					}
					
					// 중개소 용, 공급받는자 용 생성 
					List<Map<String, Object>> targetDetailList = new ArrayList<Map<String,Object>>(docDetailList);
					int docIndex = masterList.size() - 1;
					for(int j =  1; j < 3; j++){
						long totalDvyAm 		= 0;
						long totalSpyplAm 	= 0;
						long totalDvyVat		= 0;
						
						for(int z  = 0; z < targetDetailList.size(); z++){
							Map<String, Object> _sourceDtailMap = targetDetailList.get(z);
							Map<String, Object> targetDetailMap = new LinkedHashMap<String, Object>(_sourceDtailMap);
							targetDetailMap.put("key", "key" + keyIndex);
							if(_sourceDtailMap.get("NUM_detail09") != null){
								totalDvyAm = totalDvyAm + Long.parseLong(StringUtils.defaultIfEmpty(_sourceDtailMap.get("NUM_detail09").toString(), "0"));
							}
							
							if(_sourceDtailMap.get("NUM_detail10") != null){
								totalSpyplAm = totalSpyplAm + Long.parseLong(StringUtils.defaultIfEmpty(_sourceDtailMap.get("NUM_detail10").toString(), "0"));						
							}
							
							if(_sourceDtailMap.get("NUM_detail11") != null){
								totalDvyVat = totalDvyVat + Long.parseLong(StringUtils.defaultIfEmpty(_sourceDtailMap.get("NUM_detail11").toString(), "0"));
							}
							detailList.add(targetDetailMap);
						}
						
						// mark set
						Map<String, Object> sourceMap2 = markList.get(docIndex);
						Map<String, Object> targetMap2 = new LinkedHashMap<String, Object>(sourceMap2);
						targetMap2.put("key", "key" + keyIndex);
						markList.add(targetMap2);
						
						// master set
						Map<String, Object> sourceMap = masterList.get(docIndex);
						Map<String, Object> targetMap = new LinkedHashMap<String, Object>(sourceMap);
						
						targetMap.put("key", "key" + keyIndex);
						targetMap.put("top01", docKdcArr[j]); //용도
						targetMap.put("NUM_master15", totalDvyAm);				//총금액합계
						targetMap.put("NUM_master16", totalSpyplAm);				//공급금액합계
						targetMap.put("NUM_master17", totalDvyVat);				//부가세합계
						masterList.add(targetMap);
						
						keyIndex++;
					}
				}
			}
			
			List<Object> all_list = new ArrayList<Object>();
			all_list.add(markList);
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (Exception e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 영업가능 여부
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/getBizDtYn")
	public void getBizDtYn(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
		String searchDate = requestHelper.getParameter("dvy_pla_dt");
		String chkPart = requestHelper.getParameter("chkPart");
		String trplO = requestHelper.getParameter("trplO");
		String teamO = requestHelper.getParameter("teamO");
		String trplR = requestHelper.getParameter("trplR");
		String teamR = requestHelper.getParameter("teamR");
		
		
		if(StringUtils.isEmpty(trplR)){	
			trplR 		= requestHelper.getGlnCode();
			teamR 	= "00";
		}
		
		
		if(logger.isDebugEnabled()){
			logger.debug("trplO : " + trplO);
			logger.debug("teamO : " + teamO);
			logger.debug("trplR : " + trplR);
			logger.debug("teamR : " + teamR);
		}
		
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			String bizDtYn = deliveryNoticeLiveStockService.getBizDtYn(odrplNaTrplC, searchDate);
			String bizDt = deliveryNoticeLiveStockService.getBizDt(trplO, teamO, trplR, teamR, searchDate);
			if(StringUtils.isEmpty(bizDtYn)){
				bizDtYn = "1";//영업가능
			}
			
			//저장클릭시 check
			if(StringUtils.equals("2", chkPart) && StringUtils.equals("0", bizDtYn)){
				sendData(response, new PlatformData(), -99, "msg.van_ds_sc_0300.dvy.pla_dt.holidy");
			}
			
			//저장클릭시 check
			if(StringUtils.equals("2", chkPart) && StringUtils.equals("1", bizDtYn)){
				sendData(response, new PlatformData(), 99, "");
			}
			
			
			DataSet ds = new DataSet("ds_bizDtYn");
			ds.addColumn("BIZDT", DataTypes.STRING);
			ds.addColumn("BIZDY_YN", DataTypes.STRING);
			int rowIndex = ds.newRow();
			ds.set(rowIndex, "BIZDT", bizDt);
			ds.set(rowIndex, "BIZDY_YN", bizDtYn);
			out_PlatformData.addDataSet(ds);
			
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 영업가능일
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/getBizDt")
	public void getBizDt(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchDate 	= requestHelper.getParameter("dvy_pla_dt");
		String trplO 			= requestHelper.getParameter("trplO");
		String teamO 			= requestHelper.getParameter("teamO");
		String trplR 				= requestHelper.getParameter("trplR");
		String teamR 			= requestHelper.getParameter("teamR");

		if(StringUtils.isEmpty(trplR) ){
			trplR 		= requestHelper.getGlnCode();
			teamR 	= "00";
		}
		
		if(logger.isDebugEnabled()){
			logger.debug("trplO : " + trplO);
			logger.debug("teamO : " + teamO);
			logger.debug("trplR : " + trplR);
			logger.debug("teamR : " + teamR);
		}
		
		

		try {
			PlatformData out_PlatformData = new PlatformData();
			
			String bizDt = deliveryNoticeLiveStockService.getBizDt(trplO, teamO, trplR, teamR, searchDate);
			DataSet ds = new DataSet("ds_bizDtYn");
			ds.addColumn("BIZDT", DataTypes.STRING);
			ds.addColumn("BIZDY_YN", DataTypes.STRING);
			
			int rowIndex = ds.newRow();
			ds.set(rowIndex, "BIZDT", bizDt);
			ds.set(rowIndex, "BIZDY_YN", "1");
			out_PlatformData.addDataSet(ds);
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 상품 바이어 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/getBuyer")
	public void getBuyer(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String naWrsN 			= requestHelper.getParameter("na_wrs_n");
		String naWrsC 			= requestHelper.getParameter("na_wrs_c");
		String naWrsLclc 		= requestHelper.getParameter("na_wrs_lclc");
		String naWrsMclc 	= requestHelper.getParameter("na_wrs_mclc");
		String naWrsSclc 		= requestHelper.getParameter("na_wrs_sclc");
		String naWrsDtcfC 	= requestHelper.getParameter("na_wrs_dtcf_c");
		
		 
		try {
			PlatformData out_PlatformData = new PlatformData();
			Map<String, Object> resultMap = deliveryNoticeLiveStockService.getBuyer(naWrsN, naWrsC, naWrsLclc, naWrsMclc, naWrsSclc, naWrsDtcfC);
			
			DataSet ds = new DataSet("ds_buyer");
			ds.addColumn("NA_WRS_N", DataTypes.STRING);
			ds.addColumn("NA_WRS_C", DataTypes.STRING);
			ds.addColumn("BUYER_ENO", DataTypes.STRING);
			int rowIndex = ds.newRow();
			
			if(resultMap != null && resultMap.size() > 0){
				ds.set(rowIndex, "NA_WRS_N", resultMap.get("NA_WRS_N"));
				ds.set(rowIndex, "NA_WRS_C", resultMap.get("NA_WRS_C"));
				ds.set(rowIndex, "BUYER_ENO", resultMap.get("BUYER_ENO"));
			}else{
				ds.set(rowIndex, "NA_WRS_N", naWrsN);
				ds.set(rowIndex, "NA_WRS_C", naWrsC);
				ds.set(rowIndex, "BUYER_ENO", "");
				
			}
			
			out_PlatformData.addDataSet(ds);
			
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 배송예정서 일반 취소
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/deliveryNoticeCancelProc")
	public void deliveryNoticeCancelProc(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String spyplNaTrplC = requestHelper.getParameter("spypl_na_trpl_c"); // 발주전표번호
		String dvyaaNaTrplC = requestHelper.getParameter("dvyaa_na_trpl_c"); // 수주처 코드
		String naDvyPlashSlpno = requestHelper.getParameter("na_dvy_plash_slpno"); // 배송예정서번호
//		String dvyPlaDt = requestHelper.getParameter("dvy_pla_dt"); // 배송예정일
		String userID = requestHelper.getUserID();
			
		try {
			PlatformData out_PlatformData = new PlatformData();
			int count = deliveryNoticeLiveStockService.deliveryNoticeCancelProc(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, userID);
			
			try {
				String successMessage =sentCheckService.dlvpnshtCheckSendState(
						spyplNaTrplC,
						dvyaaNaTrplC,
						naDvyPlashSlpno,
						"","취소", "D");
				sendData(response, out_PlatformData, 0, successMessage);
			} catch (NHSentErrorException e) {
				String eb = e.getMessage();
				sendData(response, out_PlatformData, -999, eb);
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/livestock/isOKdlvpnsht")
	public void isOKdlvpnsht(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String spyplNaTrplC	= 	requestHelper.getParameter("spypl_na_trpl_c"); //발주전표번호
		String dvyaaNaTrplC	= 	requestHelper.getParameter("dvyaa_na_trpl_c"); //수주처 코드
		String naDvyPlashSlpno = 	requestHelper.getParameter("na_dvy_plash_slpno"); //발주처 코드
			
		try {
			Map<String, Object> map= sentCheckService.isOKdlvpnsht(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
			if(map != null) {
				if(map.get("PRC_YN") != null) {
					String prcYN = map.get("PRC_YN").toString();
					if(prcYN.equals("R") || prcYN.equals("Y")) {
						sendData(response, new PlatformData(), 0, "SUCCESS");
					} else if (prcYN.equals("E")) {
						sendData(response, new PlatformData(), -999, map.get("RES_DESC").toString());
					} else if (prcYN.equals("P")) {
						sendData(response, new PlatformData(), -999, "배송예정서가 전송중에 있습니다.\n배송예정서 거래처별 조회 화면에서 전송 결과을 확인하신후 거래명세서를 출력하십시오.");
					}
				} else {
					sendData(response, new PlatformData(), -999, "거래명세표 출력 대상 배송예정서를 찾지 못하였습니다.\n정상적으로 전송되지 않은 배송예정서 입니다.");
				}
			}
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 빌링 프로시져 (PR_BIL_EDI_LOG)
	 * 거래처별 조회, 축산 조회, 수산 조회 시 엑셀 상세
	 * 상품별 조회 엑셀
	 * @param GLN
	 * @param MD_ID
	 * @param billingSet
	 */
	private void markBillingP(String GLN, String MD_ID, HashSet<DeduplicationObject> billingSet) {
		billingMarkUpService.markUpForDlvpnshtExcel(GLN, MD_ID, billingSet);
	}
	
}