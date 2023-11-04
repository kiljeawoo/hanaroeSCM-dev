package com.nh.escm.scm.delivery.controller;

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

import org.apache.commons.collections.CollectionUtils;
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
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.pt.usrinf.service.LginLgotService;
import com.nh.escm.scm.delivery.helper.ConvertHelper;
import com.nh.escm.scm.delivery.helper.OrderBaseDeliveryNotice;
import com.nh.escm.scm.delivery.helper.VOConvertHelper;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderPopUpVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderPrintVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderVO;
import com.nh.escm.scm.delivery.vo.DeliverySkusDVO;
import com.nh.escm.scm.delivery.vo.DeliverySkusMVO;
import com.nh.escm.scm.delivery.vo.DeliveryTcVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersDVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersMVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersPrintDVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersSrhVO;
import com.nh.escm.scm.delivery.vo.DeliveryTrnrelVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderDetailVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderTempFileMasterVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderTempFileVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderVO;
import com.nh.escm.scm.delivery.vo.NoticeVhcnoVO;
import com.nh.escm.util.PageHelper;

import net.sourceforge.barbecue.Barcode;
import net.sourceforge.barbecue.BarcodeException;
import net.sourceforge.barbecue.BarcodeFactory;
import net.sourceforge.barbecue.BarcodeImageHandler;
import net.sourceforge.barbecue.output.OutputException;

/****************************************************************************************************** 
 * 
 * 배송업무
 * 배송예정서 일반등록
 * @author swha
 * 
 ******************************************************************************************************/

@RestController
public class DeliveryNoticeController extends AbstractController {
	
	
	@Autowired
	private SequenceKeyService seqKeyService;
	
	@Autowired
	private DeliveryNoticeService deliveryNoticeService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;

	@Autowired
	private LginLgotService loginService;
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 영업가능일
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveTC")
	public void retrieveTC(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String trplC 	= "";
		String TRPL_C = requestHelper.getParameter("trplC");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		trplC = TRPL_C_ARR[0];
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			List<DeliveryTcVO> list = deliveryNoticeService.retrieveTC(trplC);
			
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/getOrder")
	public void getOrder(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String odrSlpNo = 	requestHelper.getParameter("odr_slpno"); //발주전표번호
		String odrplNaTrplC = 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
		String odrplNaTeamC = 	requestHelper.getParameter("odrpl_na_team_c"); //발주처 코드
		String odrDt = 	requestHelper.getParameter("odr_dt"); //발주일자
		String ddlyYn = 	requestHelper.getParameter("ddly_yn"); //직송여부(180328)
	
		try {
			PlatformData out_PlatformData = new PlatformData();
			NoticeOrderVO vo = deliveryNoticeService.getOrder(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo, ddlyYn);
			
			//발주정보
			if(vo != null){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(NoticeOrderVO.class);
				dsHelper.setData(vo);
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			//발주상세정보
			List<NoticeOrderDetailVO> list = deliveryNoticeService.getOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo, null, ddlyYn);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/getOrderDetail")
	public void getOrderDetail(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String odrSlpNo 		= 	requestHelper.getParameter("odr_slpno"); //발주전표번호
		String odrplNaTrplC 	= 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
		String odrplNaTeamC	= 	requestHelper.getParameter("odrpl_na_team_c"); //발주처 코드
		String odrDt 			= 	requestHelper.getParameter("odr_dt"); //발주일자
		String dvyPlaDt		=  requestHelper.getParameter("dvy_pla_dt"); //배송예정일자
		String ddlyYn = 	requestHelper.getParameter("ddly_yn"); //직송여부(180328)
	
		try {
			PlatformData out_PlatformData = new PlatformData();
			//발주상세정보
			List<NoticeOrderDetailVO> list = deliveryNoticeService.getOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpNo, dvyPlaDt, ddlyYn);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveVhcno")
	public void retrieveVhcno(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String spyplNaTrplC = 	requestHelper.getGlnCode();
		try {
			PlatformData out_PlatformData = new PlatformData();
			List<NoticeVhcnoVO> list = deliveryNoticeService.retrieveVhcno(spyplNaTrplC);
			
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
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : R1 사업장코드 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveR1NaBzplC")
	public void retrieveR1NaBzplC(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>> list = deliveryNoticeService.retrieveR1NaBzplC();
			
			if (!CollectionUtils.isEmpty(list)) {
				DataSetHelper dsHelper = new DataSetHelper("ds_r1NaBzplC");
				dsHelper.addColumns(list.get(0).keySet());
				
				for (Map<String, Object> map : list) {
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
	 * 화면ID  	: VAN_DS_SC_0300, VAN_DS_SC_0310, VAN_DS_SC_0390
	 * 화면명 	: 배송예정서 일반등록, 배송예정서 직송등록, 배송예정서 신선등록
	 * 기    능 	: 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/saveDeliveryNoticeOrder")
	public void saveDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		try {
			
			PlatformData out_PlatformData = new PlatformData();
			DataSet dsM 			    = requestHelper.getDataSet("ds_dataM");
			DataSet dsD 			    = requestHelper.getDataSet("ds_dataD");
			String editType 		    = requestHelper.getParameter("editType");//X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주 배송예정서 작성
			String rogoInfCrtDsc        = requestHelper.getParameter("ROGO_INF_CRT_DSC"); // ROGO_INF_CRT_DSC 01 : 일반 발주, 03 : 행사 발주, 243,244,800,801,802: 혁신발주, 245: PB직송. 가격군이 혁신점보이면 PB직송 형식, 아니면 PB직송 일반
			String isDirectNotcieOrder 	= requestHelper.getParameter("isDirectNotcieOrder");//직송여부. 화면에서 던지지 않는다. 
			String trplC                = requestHelper.getParameter("trplC");
			boolean isDstr              = false; //저온여부
			
			/* ****************************************************************************************************
			 *  
			 * TB_OD_ORDER_M.ROGO_INF_CRT_DSC	     // 수발주정보생성구분코드
			 * TB_OD_DLVPNSHT_M.DVY_PLASH_CRT_DSC	 // 배송예정서생성구분코드
			 * TB_OD_DLVPNSHT_M.PBDDLY_YN	         // PB직송여부
			 * 
			 * TB_OD_ORDER_M.ROGO_INF_CRT_DSC  수발주 생성구분코드  
			 *   01 : 일반 발주
			 *   03 : 행사 발주
			 *   243,244,800,801,802: 혁신발주
			 *   245: PB직송
			 *     가격군이 혁신점보이면 PB직송 혁식 
			 *     아니면 PB직송 일반
			 *     
			 * TB_OD_DLVPNSHT_M.DVY_PLASH_KDC	배송예정서종류코드   
			 *   01	일반배송예정서                                 
			 *   02	덤배송예정서                                  
			 *   03	주류배송예정서                                 
			 *   04	농식품수기등록                                 
			 *   05	직송배송예정서(자재)                             
			 *   06	판촉행사배송예정서(구매)                           
			 *   99	기타                                      
			 *   
			 * 코딩시 배송예정서종류코드와 수발주 생성구분코드를 혼동해서 사용하는듯 함
			 *       
			 * ****************************************************************************************************/

			//TODO : swha 삭제대상
			rogoInfCrtDsc = "01";  // / 네이밍은 수발주 생서구분코드이나 배송예정서 종류코드를 세팅하는듯함
			
			SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
			
			boolean isSave = true; // 위치 옮김
			
			if(box.getUserSystemCode().equals("21")){
				// 가공장 시스템코드 21 인 GLN 으로 로그인 한 경우 막는다
				isSave = false;
				sendData(response, new PlatformData(), -999, "경제통합 가공시스템코드(21) 사업장 아이디로는 배송예정서를 직접 작성할 수 없습니다.");
			}
			
			//Master		
			if(dsM != null && dsM.getRowCount() > 0){
				if(logger.isDebugEnabled()){
					switch (editType) {
						case "X":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 미작성 ]");
							break;
						case "Y":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 임시저장 ]");
							break;
						case "N":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 작성완료 ]");
							break;
						case "E":
							logger.debug(">>>>>>>>>>>>>>>>> 문서수정타입 :  [ 무발주 배송예정서 ]");
							break;
					}
					logger.debug(">>>>>>>>>>>>>>>>> 권한사업장     : [ " + trplC + " ]");
					logger.debug(">>>>>>>>>>>>>>>>> 직송여부  : [ " + isDirectNotcieOrder + " ]");
					logger.debug(">>>>>>>>>>>>>>>>> 권한사업장  : [ " + trplC + " ]");
				}
				
				/* **************************************************************************************************** 
				 * 
				 * 직송여부정보가 공백일 경우, 즉 일반 배송예정서인 경우  수주정보의 수주처코드가 공백이면 선택된 권한사업장코드를 수주처코드로 설정해 준다. 선택된 권한사업장이 없으면 세션의 권한사업장.
				 * 수주처코드 칼럼 공백방지 로직임 
				 * 
				 * ****************************************************************************************************/
				if(StringUtils.isEmpty(isDirectNotcieOrder) || StringUtils.equals("null", isDirectNotcieOrder)){
					
					//일반
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
				if ( StringUtils.isEmpty(dsM.getString(0, "NA_DVY_PLASH_SLPNO"))
					 && ( StringUtils.equals("8808983322353", dsM.getString(0, "ODRPL_NA_TRPL_C"))		// 농협안성저온물류센터(식자재)
						  || StringUtils.equals("8808983324562", dsM.getString(0, "ODRPL_NA_TRPL_C"))	// 농협안성저온물류센터(소매)
						  || StringUtils.equals("8808983325958", dsM.getString(0, "ODRPL_NA_TRPL_C"))	// 농협삼동저온물류센터(소매)
						  || StringUtils.equals("8808983326375", dsM.getString(0, "ODRPL_NA_TRPL_C"))	// 농협삼동저온물류센터(식자재)
						  || StringUtils.equals("8808983332277", dsM.getString(0, "ODRPL_NA_TRPL_C"))	// 농협마트사업강원지사(저온)
						)
				   ) {
					//저온배송예정서 처음 작성한 경우
					VOConvertHelper voCon = VOConvertHelper.newInstance(dsM, dsD);
					dsList = voCon.seperateDataSet(dsD);	// 발주처가 신선인 경우 TB_GD_WRS.NA_WRS_CSTD_METC(경제통합상품보관방식코드)에 따라 배송예정서를 분리한다.
					isDstr = true;
					if(logger.isDebugEnabled()){
						logger.debug("저온 배송예정서 분리 Processing...");
						logger.debug("DataSet Detail : " + dsList.size());
					}
				}else{
					dsList.add(dsD);
				}
				
				/****************************************** Validation Check Start!! ******************************************/
				
				boolean isR1 = false;
				
				if (	StringUtils.equals("8808983322353", dsM.getString(0, "ODRPL_NA_TRPL_C")) == false	// 농협안성저온물류센터(식자재)
					 && StringUtils.equals("8808983324562", dsM.getString(0, "ODRPL_NA_TRPL_C")) == false	// 농협안성저온물류센터(소매)
					 && StringUtils.equals("8808983325958", dsM.getString(0, "ODRPL_NA_TRPL_C")) == false	// 농협삼동저온물류센터(소매)
					 && StringUtils.equals("8808983326375", dsM.getString(0, "ODRPL_NA_TRPL_C")) == false	// 농협삼동저온물류센터(식자재)
					 && StringUtils.equals("8808983332277", dsM.getString(0, "ODRPL_NA_TRPL_C")) == false	// 농협마트사업강원지사(저온)
					) {
					for (Map<String, Object> map : deliveryNoticeService.retrieveR1NaBzplC()) {
						if ( dsM.getString(0, "ODRPL_NA_TRPL_C").equals(map.get("NA_BZPLC"))) {	// 발주처가 R1 리스트에 포함된 경우
							isR1 = true;
							break;
						}
					}
				}
				

				String spyplNaTrplC = dsM.getString(0, "SPYPL_NA_TRPL_C");
				String dvyaaNaTrplC = dsM.getString(0, "DVYAA_NA_TRPL_C");
				String naDvyPlashSlpno = dsM.getString(0, "NA_DVY_PLASH_SLPNO");
				String dvyPlaDt = dsM.getString(0, "DVY_PLA_DT");
				
				String odrplNaTrplC = dsM.getString(0, "ODRPL_NA_TRPL_C");
				String odrplNaTeamC = dsM.getString(0, "ODRPL_NA_TEAM_C");
				String odrDt = dsM.getString(0, "ODR_DT");
				String odrSlpno = dsM.getString(0, "ODR_SLPNO");
				
				// R1 이고, 직송이 아니고, 신선이 아닌 경우 무발주 배송예정서 작성 체크
				if (isR1 == true && "1".equals(dsM.getString(0, "DDLY_YN")) == false && isDstr == false) {
					if (StringUtils.isEmpty(odrSlpno) || "undefined".equals(odrSlpno)) {	// 1st. R1 이고, 무발주(수주번호가 없음)인 경우
						isSave = false;
						sendData(response, new PlatformData(), -999, "R1 배송예정서 등록시 무발주로 작성할 수 없습니다.");
					} else {
						// 2nd. 배송예정일이 배송요청일과 동일하고, 발주서 상태가 03(발주상태)인지 체크한다.
						List<Map<String, Object>> odrDList = new ArrayList<Map<String, Object>>();
						
						if (StringUtils.isEmpty(naDvyPlashSlpno)) {		// 배송예정서 등록인 경우 발주상태가 배송예정(03)상태인지 체크한다.
							String naOdrStsDsc = "03";
							odrDList = deliveryNoticeService.getOrderProduct(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, dvyPlaDt, spyplNaTrplC, naOdrStsDsc);
							
							if (isSave == true && CollectionUtils.isEmpty(odrDList)) {
								isSave = false;
								sendData(response, new PlatformData(), -999, "배송예정서를 작성할 수 없는 발주상태이거나 배송예정일이 다릅니다.");
							}
						} else {										// 배송예정서 수정인 경우 발주상태를 체크하지 않는다.
							String naOdrStsDsc = null;
							odrDList = deliveryNoticeService.getOrderProduct(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, dvyPlaDt, spyplNaTrplC, naOdrStsDsc);
							
							String dvyRqrDt = dsM.getString(0, "DVY_RQR_DT");
							
							if (isSave == true && StringUtils.isEmpty(dvyRqrDt)) {	// 배송요청일이 null 인 경우 조회한다.
								dvyRqrDt = deliveryNoticeService.getDeliveryRequestDate(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
							}
							
							if (isSave == true && dvyRqrDt.equals(dvyPlaDt) == false) {
								isSave = false;
								sendData(response, new PlatformData(), -999, "배송예정일을 변경하여 작성할 수 없습니다.");
							}
						}
						
						if (isSave) {
							for (int i = 0; i < dsD.getRowCount(); i++) {
								double odrQt = Double.parseDouble(StringUtils.isEmpty(dsD.getString(i, "ODR_QT")) ? "0" : dsD.getString(i, "ODR_QT"));
								double dvyPlaQt = Double.parseDouble(StringUtils.isEmpty(dsD.getString(i, "DVY_PLA_QT")) ? "0" : dsD.getString(i, "DVY_PLA_QT"));
								
								String naWrsC = dsD.getString(i, "NA_WRS_C");
								
								// 3rd. 수주발행시 공병, 공상자, 공파레트는 포함되지않기 때문에 공병, 공상자, 공파레트가 아닌 경우만 배송수량을 체크한다.
								if (deliveryNoticeService.checkAlcoholProduct(naWrsC) == false) {
									boolean odrYn = false;
									
									for (Map<String, Object> map : odrDList) {
										String odrNaWrsC = (String) map.get("NA_WRS_C");
										
										if (StringUtils.isEmpty(odrNaWrsC) == false && odrNaWrsC.equals(naWrsC)) {
											odrYn = true;
											break;
										}
									}
									
									if (odrYn == false) {			// 4th. 발주서에 상품이 없는 경우
										isSave = false;
										sendData(response, new PlatformData(), -999, "발주서에 없는 상품이 있습니다.");
									} else {
										if (odrQt < dvyPlaQt) {		// 5th. 배송예정량 확인
											isSave = false;
											sendData(response, new PlatformData(), -999, "수주량보다 배송예정량이 많습니다.");
										}
									}
								}
							}
						}
					}
				} else {	
					
					
					// 신선, 직송, R2
					
					/* **************************************************************************************************** 
				     * R2, 저온  배송예정서 수정시  배송예정일 변경여부 체크  체크
				     * 배송예정서 수정시 배송예정일 변경여부를 체크하려는 의도로 보임. 
				     * 배송예정일 변경시 배송예정서 정보가 조회되지 않으므로 이를 이용한 메시지 출력. 
				     * R2 배송예정서 전표번호가 존재하는 경우 (공백이 아닌경우) 이면 배송예정일이 공백일 수 업고, 
				     * 실제로 배송예정일을 UPDATE 하는 SQL은 존재하지 않음. 
				     * 
				     * ****************************************************************************************************/
					if (StringUtils.isEmpty(naDvyPlashSlpno) == false) {	// 배송예정서 참조인 경우
						String DVY_PLA_DT = deliveryNoticeService.getDvyPlaDt(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, dvyPlaDt);
						
						if (StringUtils.isEmpty(DVY_PLA_DT)) {
							isSave = false;
							sendData(response, new PlatformData(), -999, "배송예정일을 변경하여 작성할 수 없습니다.");
						}
					}
				}

				// 배송예정일인 +15일을 넘어가면 작성X (20171222)
				String d15Date = DateUtil.convertDateToString("yyyyMMdd", DateUtil.getCurrentDate());
				if (isSave && DateUtil.getDifferDate(d15Date, dvyPlaDt) > 15) {
					isSave = false;
					sendData(response, new PlatformData(), -999, "배송예정일은 현재날짜보다 15일 이후로 작성할 수 없습니다.");
				}
				
// for Test
// if (isSave) {
// 	isSave = false;
// 	sendData(response, new PlatformData(), -999, "[테스트] 배송예정서 작성 차단하려면 주석해제");
// }

				
				/****************************************** Validation Check End!! ******************************************/
				
				if (isSave) {
					
					String list = "";
					
					for(int i = 0; i < dsList.size(); i++){
						List<NoticeOrderVO> noVoList 		= requestHelper.getValueObjects(NoticeOrderVO.class, dsM);
						VOConvertHelper voConverHelper 	= VOConvertHelper.newInstance(requestHelper, dsM, dsList.get(i), deliveryNoticeService, seqKeyService, rogoInfCrtDsc, editType);
						
						List<DeliveryNoticeOrderVO> convertVO = voConverHelper.getDeliveryNoticeOrderVoList();
						deliveryNoticeService.saveDeliveryNoticeOrder(editType, rogoInfCrtDsc, noVoList.get(0), convertVO);
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
				}	// 오류가 아닌 경우 저장
			}
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	/* **************************************************************************************************** 
	 * 화면ID : VAN_DS_SC_0110,
	 * 화면명 	: 수주내역조회 : 배송예정서 일괄작성. 수주정보 PK 정보를 받아서 수주내역 데이터넷을 생성하고 기존 배송예정서 등록 로직을 그대로 태움   
	 * 기    능 	: 저장
	 * ****************************************************************************************************/
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/saveOrderBaseMultiDeliveryNotice")
	public void saveOrderBaseMultiDeliveryNotice(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper  = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData        = new PlatformData();
		
		DataSet    orderM 			         = requestHelper.getDataSet("orderM")                           ; // 수주내역 조회 상세 데이터셋 명칭
		SessionBox sessionBox                = (SessionBox) request.getSession().getAttribute("sessionBox") ;
		
		/* **************************************************************************************************** 
		 * editType
		 * 
		 * 수주참조 일괄작성은 전부 x로 세팅
		 * 화면: SCM.DELIVERY.VAN_DS_FN_0204.XFDL      //  발주서전표 조회시 빌링마크 하고  배송예정서 작성여부를 X로 표기
         * var dlvpnsht_temp_yn 		=   'X'      //대상 : 배송예정서 미작성에 대한 리스트
         * 
         * 화면: SCM.DELIVERY.VAN_DS_SC_0300.XFDL      에서 팝업 파라메터를 받아 세팅
         * var_dlvpnsht_temp_yn	= paramsArr[4]       //'X' Fixed 배송예정서 작성여부 
         * editType="+var_dlvpnsht_temp_yn  "x"
         * temp_yn = "N";
		 * 
		 * ****************************************************************************************************/
		
		String     editType 		       = requestHelper.getParameter("editType")                       ; // X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주 배송예정서 작성
		
		if (editType == null) {
			editType = "";
		}
		
		/* ****************************************************************************************************
		 *  
		 * TB_OD_ORDER_M.ROGO_INF_CRT_DSC	     // 수발주정보생성구분코드
		 * TB_OD_DLVPNSHT_M.DVY_PLASH_CRT_DSC	 // 배송예정서생성구분코드
		 * TB_OD_DLVPNSHT_M.PBDDLY_YN	         // PB직송여부
		 * 
		 * TB_OD_ORDER_M.ROGO_INF_CRT_DSC  수발주 생성구분코드  
		 *   01 : 일반 발주
		 *   03 : 행사 발주
		 *   243,244,800,801,802: 혁신발주
		 *   245: PB직송
		 *     가격군이 혁신점보이면 PB직송 혁신 
		 *     아니면 PB직송 일반
		 *     
		 * TB_OD_DLVPNSHT_M.DVY_PLASH_KDC	배송예정서종류코드   
		 *   01	일반배송예정서                                 
		 *   02	덤배송예정서                                  
		 *   03	주류배송예정서                                 
		 *   04	농식품수기등록                                 
		 *   05	직송배송예정서(자재)                             
		 *   06	판촉행사배송예정서(구매)                           
		 *   99	기타                                      
		 *   
		 * 코딩시 배송예정서종류코드와 수발주 생성구분코드를 혼동해서 사용하는듯 함
		 *       
		 * ****************************************************************************************************/

		String     rogoInfCrtDsc        = requestHelper.getParameter("ROGO_INF_CRT_DSC")               ;  // 어차피 고정으로 세팅함. 	
		//TODO : swha 삭제대상
		 rogoInfCrtDsc = "01";  // / 네이밍은 수발주 생서구분코드이나 배송예정서 종류코드를 세팅함. 공통코드의 배송예정서생성구분코드 인듯함. 처음에 하승원 과장이 개발시 이렇게 해놓음. 바꿀일 없을 듯. 

		String     isDirectNotcieOrder 	= requestHelper.getParameter("isDirectNotcieOrder")            ; // 직송여부
		if (isDirectNotcieOrder == null) {
			isDirectNotcieOrder = "";
		}
		
		String     trplC                = requestHelper.getParameter("trplC")                       ; // 화면에서 선택한 권한사업장 코드 
		boolean    isDstr               = false                                                        ; // 저온여부
		
		String isChecked     = 	"" ; //선택여부
		String odrplNaTrplC  = 	"" ; //발주처 코드
		String odrplNaTeamC  = 	"" ; //발주처 코드
		String odrDt         = 	"" ; //발주일자
		String odrSlpNo      = 	"" ; //발주전표번호
		String ddlyYn        = 	"" ; //직송여부 

		String failSlipNo   = "처리결과  \n";  // 실패 전표번호
		// 		String succesSlipNo = "";  

		try {
			
			/* **************************************************************************************************** 
			 * 
			 * 배송예정서 작성로직
			 * 수주내역 식별자를 받아서 수주내역 데이터셋을 생성하고 기존 배송예정서 작성 로직을 그래로 실행  
			 * 
			 * ****************************************************************************************************/

			for(int i = 0; i < orderM.getRowCount(); i++){

				/* **************************************************************************************************** 
				 * 
				 *  수주내역 식별자 파라메터
				 * 
				 * ****************************************************************************************************/

				isChecked     = 	orderM.getString(i, "ISCHECKED"        ) ; //선택여부    
				odrplNaTrplC  = 	orderM.getString(i, "ODRPL_NA_TRPL_C"  ) ; //발주처 코드  
				odrplNaTeamC  = 	orderM.getString(i, "ODRPL_NA_TEAM_C"  ) ; //발주처 코드  
				odrDt         = 	orderM.getString(i, "ODR_DT"           ) ; //발주일자    
				odrSlpNo      = 	orderM.getString(i, "ODR_SLPNO"       ) ; //발주전표번호  
				ddlyYn        = 	orderM.getString(i, "DDLY_YN"          ) ; //직송여부    
				
				/* **************************************************************************************************** 
				 * 
				 * 디버깅
				 * 
				 * ****************************************************************************************************/

				// 화면에서 체크한 것만 처리한다
				if("1".equals(isChecked)){
					
					if(logger.isDebugEnabled()){
						
						logger.debug("-------------------------------------------------");
						logger.debug("배송예정서 일괄작성 ");

						logger.debug("isChecked    [ " + isChecked    + " ]");
						logger.debug("odrplNaTrplC [ " + odrplNaTrplC + " ]");
						logger.debug("odrplNaTeamC [ " + odrplNaTeamC + " ]");
						logger.debug("odrDt        [ " + odrDt        + " ]");
						logger.debug("odrSlpNo     [ " + odrSlpNo     + " ]");
						logger.debug("ddlyYn       [ " + ddlyYn       + " ]");
						logger.debug("------------------------------------------------- END ");
					}

					/* **********************************************************************
					 * 
					 * 발주정보를 이용한 배송예정서 자동 생성
					 * 
					 * **********************************************************************/
					Map<String, Object> param = new HashMap<String, Object>();		
					param.put("ODRPL_NA_TRPL_C"    , odrplNaTrplC);
					param.put("ODRPL_NA_TEAM_C"    , odrplNaTeamC);
					param.put("ODR_DT"             , odrDt); 
					param.put("ODR_SLPNO"          , odrSlpNo);
					param.put("DDLY_YN"            , ddlyYn);
					
					// 세션정보
					param.put("sessionBox"         , sessionBox         );
					
					param.put("editType"  		   , editType 		   );  
					param.put("rogoInfCrtDsc"      , rogoInfCrtDsc      );  // 01 로 고정해서 세팅함
					param.put("isDirectNotcieOrder", isDirectNotcieOrder);
					param.put("trplC"              , trplC              );
					param.put("isDstr"             , isDstr             );
					
					// param.put("rogoInfCrtDsc"      , rogoInfCrtDsc      );   
					
				    failSlipNo = failSlipNo + " 발주일: " + odrDt + " 전표번호: " + odrSlpNo ; 
				    

					if(logger.isDebugEnabled()){
						logger.debug(">>> getOrder : " + param);
					}
										
					/* **********************************************************************
					 * 
					 * 수주참조 배송예정서 일괄생성 클래스
					 * 
					 * **********************************************************************/
					OrderBaseDeliveryNotice obdn = new OrderBaseDeliveryNotice(param); 
										
					/* **********************************************************************
					 * 
					 * 수주데이터셋 리턴 
					 * 선택된 수주데이터를 한행씩 처리한다
					 * VO 객체를 DataSet 으로 변환한 DataSetList 리턴
					 *    NoticeOrderVO vo                 : ds_dataM
					 *    List<NoticeOrderDetailVO> list   : ds_dataD
					 * 
					 * **********************************************************************/
					DataSetList orderDsList  = obdn.getOrder(param, deliveryNoticeService);
					
					/* **********************************************************************
					 * 
					 * 배송예정서 유효성검증 및 저장 
					 * 
					 * **********************************************************************/
					Report validationReport = obdn.validateMultiDeliveryNotice(orderDsList, deliveryNoticeService);
					Report saveReport  = null;

					if(validationReport.isValid() == false){
						
						/* **************************************************************************************************** 
						 * 
						 * 유효성검증 실패시
						 * 유효성 검증결과 리턴						 *  
						 * 
						 * ****************************************************************************************************/
						
						failSlipNo = failSlipNo + " 유효성검증실패  " +  validationReport.getMessage() + " \n"; 
						// sendData(response, out_PlatformData,  validationReport.getNumCode(), validationReport.getMessage());

					}else{
						
						/* **************************************************************************************************** 
						 * 
						 *  validationReport.isValid() == true;
						 *  저장시 validation 완료 여부는 다시 체크 함. 가독성을 위해서 명시적으로 검증여부 체크함. 
						 * OrderBaseDeliveryNotice.saveMultiDeliveryNotice() 에서 최종 저장함.
						 * ****************************************************************************************************/

						saveReport = obdn.saveOrderBaseMultiDeliveryNotice(orderDsList, requestHelper, deliveryNoticeService, seqKeyService, sentCheckService);
						
						// 저장실패시
						if(saveReport.isValid() == false){
						    failSlipNo = failSlipNo + " 저장 실패  \n"; 
						} else {
							failSlipNo = failSlipNo + " 저장 성공  \n"; 
							
							/**
							 * 빌링 마크 시작 (성공건에 한해서)
							 */
							HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();

							LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
							values.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
							values.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
							values.put("ODR_DT", odrDt);
							values.put("ODR_SLPNO", odrSlpNo);
							DeduplicationObject ddo = new DeduplicationObject(values);
							billingSet.add(ddo);

							String GLN = requestHelper.getGlnCode();	    
							String MD_ID = requestHelper.getUserID(); 
							
							markBilling(GLN, MD_ID, billingSet);
							
							if (logger.isDebugEnabled()) {
								logger.debug("-------------------------------------------------");
								logger.debug("일괄작성 빌링처리 : [" + i + "] " + odrDt + " / " + odrSlpNo + " / " + odrplNaTrplC + " / " + GLN + " / " + MD_ID);
								logger.debug("-------------------------------------------------");
							}
							/**
							 * 빌링 마크 종료
							 */
						}
						
						// sendData(response, out_PlatformData,  saveReport.getNumCode(), saveReport.getMessage());
						
					} //if(validationReport.isValid()

				} // if("1".equals(isChecked))

			} // for
			
			// for 문 종류후 리터 
			sendData(response, out_PlatformData,  0, failSlipNo);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/getDeliveryNoticeOrder")
	public void getDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String spyplNaTrplC                 = requestHelper.getParameter("spypl_na_trpl_c"); //공급처코드
		String dvyaaNaTrplC                 = requestHelper.getParameter("dvyaa_na_trpl_c"); //배송처코드
		String naDvyPlashSlpno              = requestHelper.getParameter("na_dvy_plash_slpno"); //배송예정서전표번호
		String dvyPlaDt                     = requestHelper.getParameter("dvy_pla_dt"); //배송예정일
		String mbcoType                     = requestHelper.getMbcoType(); // 본지사구분
		String truAgcyNaTrplC               = requestHelper.getGlnCode();	// 위탁대리점 코드
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			NoticeOrderVO vo = deliveryNoticeService.getDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, mbcoType, truAgcyNaTrplC, dvyPlaDt);
			
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/getDeliveryNoticeOrderDetail")
	public void getDeliveryNoticeOrderDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String spyplNaTrplC = 	requestHelper.getParameter("spypl_na_trpl_c"); //공급처코드
		String dvyaaNaTrplC = 	requestHelper.getParameter("dvyaa_na_trpl_c"); //배송처코드
		String naDvyPlashSlpno = 	requestHelper.getParameter("na_dvy_plash_slpno"); //배송예정서전표번호
		String dvyPlaDt = requestHelper.getParameter("dvy_pla_dt"); //배송예정일자
		String ddlyYn = requestHelper.getParameter("ddly_yn"); //배송예정일자
		String cserCtrTpc = requestHelper.getParameter("cser_ctr_tpc"); //수요자계약유형
		String mbcoType = requestHelper.getMbcoType(); // 본지사구분
		String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
		
		try {
			PlatformData out_PlatformData = new PlatformData();
					
			//배송예정서 상세
			List<NoticeOrderDetailVO> list = deliveryNoticeService.getDeliveryNoticeOrderDetail(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, dvyPlaDt, ddlyYn, cserCtrTpc, mbcoType, truAgcyNaTrplC);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/printDeliveryNoticeOrder")
	public RestResult printDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response,
			String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC,
			String systemFileName, String ozType, String odrplNaTrplC, String dvyPlaDt){
		try{
			boolean isSuccess = false;
			String result = "";
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
			//Thread.sleep(3000);
			Map<String, Object> map= sentCheckService.isOKdlvpnsht(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
			if(map != null) {
				if(map.get("PRC_YN") != null) {
					String prcYN = map.get("PRC_YN").toString();
					logger.info("printDeliveryNoticeOrder : " + spyplNaTrplC);
					logger.info("SPYPL_NA_TRPL_C : " + spyplNaTrplC);
					logger.info("DVYAA_NA_TRPL_C : " + dvyaaNaTrplC);
					logger.info("NA_DVY_PLASH_SLPNO : " + naDvyPlashSlpno);
					logger.info("PRC_YN : " + prcYN);
					
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
			if(isSuccess == false){
				return new RestResult(ErrorCode.FAILURE, result);
			}
						
			//광주물류센터는 상품명으로 무조건 정렬
			if("8808983000312".equals(odrplNaTrplC)) ozType = "NM";
			
			List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeService.printDeliveryNoticeOrder(naDvyPlashSlpno, spyplNaTrplC, dvyaaNaTrplC, mbcoType, truAgcyNaTrplC, ozType, dvyPlaDt);
			
			
			
			if(list != null && list.size() > 0){
				//Master Set
				DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
				int keyIndex = 0;
				Map<String,Object> _master = new LinkedHashMap<String, Object>();
				_master.put("key","key"+keyIndex);
				_master.put("top1", naDvyPlashSlpno);
				_master.put("top2", vo.getCSER_CTR_TPC());
				_master.put("crtDsc", vo.getDVY_PLASH_CRT_DSC());//배송예정서생성구분코드
				
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
				_master.put("YMD_master11", vo.getCNR_DT());//검수일자

				//직인파일
				if(StringUtils.isNotEmpty(systemFileName)) {
					String tempPath = Configurer.getProperty("file.temp.path");
					File dir = new File(tempPath);
					File f = FileUtils.getFile(dir, systemFileName);
					if(f.exists()){
						String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
						if(StringUtils.isNotEmpty(baseImage)) {
							markMap.put("mark", "data:;base64,"+baseImage);//직인파일
						}
					}else{
						markMap.put("mark", "");
					}
				}else if(StringUtils.isNotEmpty(vo.getNA_TRPL_SEAL_FLNM())){
					String tempPath = Configurer.getProperty("file.seal.path");
					File dir = new File(tempPath);
					String fileNm = vo.getNA_TRPL_SEAL_FLNM();
					File f = FileUtils.getFile(dir, fileNm);
					if(f.exists()){
						String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
						if(StringUtils.isNotEmpty(baseImage)) {
							markMap.put("mark", "data:;base64,"+baseImage);//직인파일
						}
					}else{
						markMap.put("mark", "");
					}
				}else {
					markMap.put("mark", "");
				}
				markMap.put("key","key"+keyIndex);
				markList.add(markMap);
				
				
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
						logger.error(e.getMessage(), e);
					}
					byte[] bytes = baos.toByteArray();
					String barcodeImage = Base64Utils.encodeToString(bytes);
					_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
				}catch(BarcodeException | OutputException e){
					logger.error(e.getMessage(), e);
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
					_detail.put("detail13", item.getBKG_EVT_DSC());//소터구분
					_detail.put("detail14", item.getDUM_RAT());//덤비율
					detailList.add(_detail);
				}
				keyIndex++;
			}
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(markList);
			all_list.add(masterList);
			all_list.add(detailList);			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException | IOException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 배송예정서 일반등록
	 * 기  능 : 덤상품 거래명세서 출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/printDeliveryNoticeOrderDum")
	public RestResult printDeliveryNoticeOrderDum(HttpServletRequest request, HttpServletResponse response,
			String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC,
			String systemFileName, String ozType, String odrplNaTrplC){
		try{
			boolean isSuccess = false;
			String result = "";
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
			//Thread.sleep(3000);
			Map<String, Object> map= sentCheckService.isOKdlvpnsht(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
			if (map != null) {
				if (map.get("PRC_YN") != null) {
					String prcYN = map.get("PRC_YN").toString();
					logger.info("printDeliveryNoticeOrder : " + spyplNaTrplC);
					logger.info("SPYPL_NA_TRPL_C : " + spyplNaTrplC);
					logger.info("DVYAA_NA_TRPL_C : " + dvyaaNaTrplC);
					logger.info("NA_DVY_PLASH_SLPNO : " + naDvyPlashSlpno);
					logger.info("PRC_YN : " + prcYN);
					
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
			
			if (isSuccess == false) {
				return new RestResult(ErrorCode.FAILURE, result);
			}
						
			//광주물류센터는 상품명으로 무조건 정렬
			if("8808983000312".equals(odrplNaTrplC)) ozType = "NM";
			
			List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeService.printDeliveryNoticeOrderDum(naDvyPlashSlpno, spyplNaTrplC, dvyaaNaTrplC, mbcoType, truAgcyNaTrplC, ozType);
			
			
			
			if(list != null && list.size() > 0){
				//Master Set
				DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
				int keyIndex = 0;
				Map<String,Object> _master = new LinkedHashMap<String, Object>();
				_master.put("key","key"+keyIndex);
				_master.put("top1", naDvyPlashSlpno);
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
				_master.put("YMD_master11", vo.getCNR_DT());//검수일자

				//직인파일
				if(StringUtils.isNotEmpty(systemFileName)) {
					String tempPath = Configurer.getProperty("file.temp.path");
					File dir = new File(tempPath);
					File f = FileUtils.getFile(dir, systemFileName);
					if(f.exists()){
						String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
						if(StringUtils.isNotEmpty(baseImage)) {
							markMap.put("mark", "data:;base64,"+baseImage);//직인파일
						}
					}else{
						markMap.put("mark", "");
					}
				}else if(StringUtils.isNotEmpty(vo.getNA_TRPL_SEAL_FLNM())){
					String tempPath = Configurer.getProperty("file.seal.path");
					File dir = new File(tempPath);
					String fileNm = vo.getNA_TRPL_SEAL_FLNM();
					File f = FileUtils.getFile(dir, fileNm);
					if(f.exists()){
						String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
						if(StringUtils.isNotEmpty(baseImage)) {
							markMap.put("mark", "data:;base64,"+baseImage);//직인파일
						}
					}else{
						markMap.put("mark", "");
					}
				}else {
					markMap.put("mark", "");
				}
				markMap.put("key","key"+keyIndex);
				markList.add(markMap);
				
				
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
						logger.error(e.getMessage(), e);
					}
					byte[] bytes = baos.toByteArray();
					String barcodeImage = Base64Utils.encodeToString(bytes);
					_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
				}catch(BarcodeException | OutputException e){
					logger.error(e.getMessage(), e);
				}
				_master.put("barcode", barcode);//바코드
				masterList.add(_master);
				
				//Detail List Set
				for(DeliveryNoticeOrderPrintVO item : list){
					Map<String,Object> _detail = new LinkedHashMap<String, Object>();
					
					if (StringUtils.isNotEmpty(item.getDUM_RAT())) {
						String[] dum = item.getDUM_RAT().split(":");
						
						double dumRate = Double.parseDouble(dum[1]) / Double.parseDouble(dum[0]);
						
						_detail.put("key","key"+keyIndex);
						
						_detail.put("detail00", item.getDVY_PLA_SQNO());
						_detail.put("detail01", item.getNA_WRS_C());
						_detail.put("detail02", item.getWRSNM());
						_detail.put("detail03", item.getNA_WRS_UNT_N());//규격
						_detail.put("NUM_detail04", (int) Math.floor(Double.parseDouble(item.getBOX_QT()) * dumRate)); // 박스수량
						_detail.put("NUM_detail05", item.getBOXPE_AQZ());//입수
						_detail.put("NUM_detail06", (int) Math.floor(Double.parseDouble(item.getDVY_PLA_QT()) * dumRate)); // 낱개수량
						_detail.put("NUM_detail07", item.getDVY_WRS_UPR());//단가
						_detail.put("NUM_detail08", item.getDVY_AM());//금액
						_detail.put("NUM_detail09", item.getDVY_VAT());//부가세
						_detail.put("NUM_detail10", item.getSPYPL_AM());//공급금액
						_detail.put("detail11", "결품사유");//결품사유
						_detail.put("detail12", item.getDQPD_RSN());//결품사유기타내용 (결품사유코드)	
						_detail.put("detail13", item.getBKG_EVT_DSC());//소터구분
						_detail.put("detail14", item.getDUM_RAT());//덤비율
					}
					
					detailList.add(_detail);
				}
				keyIndex++;
			}
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(markList);
			all_list.add(masterList);
			all_list.add(detailList);			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException | IOException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/* lsh
	 * 화면ID : VAN_DS_SC_0390
	 * 화면명 : 배송예정서 신선등록
	 * 기    능 : 거래명세서출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/printDeliveryNoticeOrderList")
	public RestResult printDeliveryNoticeOrderList(HttpServletRequest request, HttpServletResponse response,
			String naDvyPlashSlpnoList, String systemFileName, String ozType, String dvyPlaDt){
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
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
			int keyIndex = 0;
			for(int i = 0; i < naDvyPlashSlpnoArr.length; i++){
			
				List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeService.printDeliveryNoticeOrder(naDvyPlashSlpnoArr[i], spyplNaTrplC, dvyaaNaTrplC, mbcoType, truAgcyNaTrplC, ozType, dvyPlaDt);
				
				
				if(list != null && list.size() > 0){
					//Master Set
					DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
					
					Map<String,Object> _master = new LinkedHashMap<String, Object>();
					_master.put("key","key"+keyIndex);
					_master.put("top1", naDvyPlashSlpnoArr[i]);
					_master.put("top2", vo.getCSER_CTR_TPC());
					_master.put("crtDsc", vo.getDVY_PLASH_CRT_DSC());//배송예정서생성구분코드
					
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
					
					//직인파일
					if(StringUtils.isNotEmpty(systemFileName)) {
						String tempPath = Configurer.getProperty("file.temp.path");
						File dir = new File(tempPath);
						File f = FileUtils.getFile(dir, systemFileName);
						if(f.exists()){
							String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
							if(StringUtils.isNotEmpty(baseImage)) {
								markMap.put("mark", "data:;base64,"+baseImage);//직인파일
							}
						}else{
							markMap.put("mark", "");
						}
					}else if(StringUtils.isNotEmpty(vo.getNA_TRPL_SEAL_FLNM())){
						String tempPath = Configurer.getProperty("file.seal.path");
						File dir = new File(tempPath);
						String fileNm = vo.getNA_TRPL_SEAL_FLNM();
						File f = FileUtils.getFile(dir, fileNm);
						if(f.exists()){
							String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
							if(StringUtils.isNotEmpty(baseImage)) {
								markMap.put("mark", "data:;base64,"+baseImage);//직인파일
							}
						}else{
							markMap.put("mark", "");
						}
					}else {
						markMap.put("mark", "");
					}
					markMap.put("key","key"+keyIndex);
					markList.add(markMap);
					
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
							logger.error(e.getMessage(), e);
						}
						byte[] bytes = baos.toByteArray();
						String barcodeImage = Base64Utils.encodeToString(bytes);
						_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
					}catch(BarcodeException | OutputException e){
						logger.error(e.getMessage(), e);
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
		} catch (AppetizerException | IOException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0320(일반), VAN_DS_SC_0321(직송)
	 * 화면설명 : 배송예정서 일괄등록(EXCEL)_Temp File 조회
	 * 기    능 : Excel File 조회
	 */	
	@RequestMapping(method=RequestMethod.POST,value="/rest/scm/order/downloadDeliveryNoticeOrder")
	public void retrieveExcelRead(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		//행의 수
		try {
			PlatFormRequestHelper rHelper = PlatFormRequestHelper.newInstance(request);
			String dsName = rHelper.getParameter("dsName");
			String systemFileName = rHelper.getParameter("systemFileName");
			String ddlyYn = rHelper.getParameter("ddlyYn");
			DataSet tempDs = rHelper.getDataSet("in_ds");
			
			if (ddlyYn == null || !"1".equals(ddlyYn)) {
				ddlyYn = "0";
			}
			
			File tempfile = new File(Configurer.getProperty("file.temp.path"));
			String filepath = tempfile.getAbsolutePath()+"/"+systemFileName;
			
			FileInputStream fis=new FileInputStream(filepath);
			HSSFWorkbook workbook = new HSSFWorkbook(fis);
			HSSFSheet sheet=workbook.getSheetAt(0);
			
			/* 단발성 데이터로 real저장 불필요(211119)
			//파일을 카피하여 real 에 복사
			File file = new File(filepath);
			File realfile = new File(Configurer.getProperty("file.real.path"));
			File copyfile = new File(realfile.getAbsolutePath()+"/"+systemFileName);
			
			if (!realfile.exists())
				realfile.mkdirs();
			FileCopyUtils.copy(file, copyfile);
			*/
			
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
				ConvertHelper convertHelper = ConvertHelper.newInstance(dHelper.getDataSet());
				DataSet inDs = convertHelper.addGroupIdx();//Grouping
				//logger.debug("###### Grouping After DataSet : " + inDs.saveXml());
				List<DataSet> validationDsList = convertHelper.excelValidationChk(rHelper, inDs, ddlyYn);//Excel Validation Check
				DataSet msgDs = validationDsList.get(0);//error msg
				DataSet reDs = validationDsList.get(1);//dataset
				out_PlatformData.addDataSet(msgDs);
				out_PlatformData.addDataSet(reDs);
				//logger.debug("ERROR MSG : " + msgDs.getRowCount());
				//logger.debug("###### Validation After Excel : " + reDs.saveXml());
				
				if(reDs.getRowCount() > 0){
					//String tempSeq = seqKeyService.getNextHexKey(SequenceKeyName.TB_OD_DLVPNSHT_TEMP_M);
					List<NoticeOrderTempFileMasterVO> tmpMList = convertHelper.getNoticeOrderTempMasterVO(seqKeyService, rHelper, reDs);
					deliveryNoticeService.insertNoticeOrderMTmp(tmpMList);
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
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0320(일반), VAN_DS_SC_0321(직송)
	 * 화면명 : 배송예정서 일괄등록
	 * 기    능 : 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/insertDeliveryNoticeOrder")
	public void insertDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			DataSet inDs = requestHelper.getDataSet("in_ds");
			DataSet tmpSeqDs = requestHelper.getDataSet("ds_temp_seq");
			String ddlyYn = requestHelper.getParameter("ddlyYn");
			if (ddlyYn == null || !"1".equals(ddlyYn)) {
				ddlyYn = "0";
			}
			String tempSeq = "";
			
			if(inDs.getRowCount() == 0){
				logger.error("[ insertDeliveryNoticeOrder ]  Excel Data Set of insertDeliveryNoticeOrder don't exist!!");
				sendData(response, out_PlatformData, -1, "error.message.required.parameters");
			}else{
				for(int i = 0; i < tmpSeqDs.getRowCount(); i++){
					tempSeq = tmpSeqDs.getString(i, "TEMP_SEQ");
					List<NoticeOrderTempFileMasterVO> mvoList = deliveryNoticeService.retreiveNoticeOrderMTmp(tempSeq);
					
					
					List<DeliveryNoticeOrderVO> list = new ArrayList<DeliveryNoticeOrderVO>();
					VOConvertHelper voConvertHelper = null;
					
					
					for(NoticeOrderTempFileMasterVO mvo : mvoList){
						// String ddlyYn = "0";
						if(StringUtils.isEmpty(mvo.getRVOPL_NA_TEAM_C())){
							mvo.setRVOPL_NA_TEAM_C("00");
						}
						if(StringUtils.isEmpty(mvo.getODRPL_NA_TEAM_C())){
							mvo.setODRPL_NA_TEAM_C("00");
						}
						// String naDvyPlashSlpno = deliveryNoticeService.getNaDvyPlashSlpno(mvo.getRVOPL_NA_TRPL_C(), mvo.getRVOPL_NA_TEAM_C(), mvo.getDVY_PLA_DT(), ddlyYn); // 181031 공급처로 변경
						String naDvyPlashSlpno = deliveryNoticeService.getNaDvyPlashSlpno(mvo.getSPYPL_NA_TRPL_C(), mvo.getSPYPL_NA_TEAM_C(), mvo.getDVY_PLA_DT(), ddlyYn);
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
						
						
						
						
						
						List<DeliveryTrnrelVO> trnrelList = deliveryNoticeService.retrieveTrnrel(odrplNaTrplC, odrplNaTeamC, splrNaTrplC, splrNaTeamC, cserCtrTpc, spyTpc, mngtNaTrplC, mngtNaTeamC, mngtNaTrTpc, naWrsLclc, naWrsMclc);
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
							voConvertHelper = VOConvertHelper.newInstance(mvo, naDvyPlashSlpno);
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
						deliveryNoticeService.insertDeliveryNoticeOrder(list);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveOrdersPopUp")
	public void retrieveOrdersPopUp(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String odrSlpno 		= 	requestHelper.getParameter("odr_slpno"); //발주전표번호
		String rvoplNaTrplC 	= 	requestHelper.getParameter("rvopl_na_trpl_c"); //수주처 코드
		String odrplNaTrplC 	= 	requestHelper.getParameter("odrpl_na_trpl_c"); //발주처 코드
		String odrplNaTrplN 	= 	requestHelper.getParameter("odrpl_na_trpl_n"); //발주처 코드
		String spyplNaTrplC 	= 	requestHelper.getParameter("spypl_na_trpl_c"); //공급처 코드
		String dvyRqrDtFrom = 	requestHelper.getParameter("dvy_rqr_dt_from"); //배송요청일 From
		String dvyRqrDtTo 	= 	requestHelper.getParameter("dvy_rqr_dt_to"); //배송요청일 To
		String ddlyYn			= 	requestHelper.getParameter("ddly_yn"); //직송여부
		String rogoInfCrtDsc			= 	requestHelper.getParameter("rogo_inf_crt_dsc"); //수발주정보생성구분코드(180321)
			
		try {
			PlatformData out_PlatformData = new PlatformData();
			List<DeliveryNoticeOrderPopUpVO> list = deliveryNoticeService.retrieveOrdersPopUp(odrSlpno, rvoplNaTrplC, odrplNaTrplC, dvyRqrDtFrom, dvyRqrDtTo, ddlyYn, odrplNaTrplN, rogoInfCrtDsc, spyplNaTrplC);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveDeliveryTradingPatnersM")
	public void retrieveDeliveryTradingPatnersM(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String dvy_plash_slpno_rdo = requestHelper.getParameter("dvy_plash_slpno_rdo");
		String na_dvy_plash_slpno = requestHelper.getParameter("na_dvy_plash_slpno");
		String odrpl_na_trpl_rdo = requestHelper.getParameter("odrpl_na_trpl_rdo");
		String odrpl_na_trpl_c = requestHelper.getParameter("odrpl_na_trpl_c");
		String dvyaa_na_trpl_rdo = requestHelper.getParameter("dvyaa_na_trpl_rdo");
		String dvyaa_na_trpl_c = requestHelper.getParameter("dvyaa_na_trpl_c");
		String dvy_pla_dt_from = requestHelper.getParameter("dvy_pla_dt_from");
		String dvy_pla_dt_to = requestHelper.getParameter("dvy_pla_dt_to");
		String cser_ctr_tpc = requestHelper.getParameter("cser_ctr_tpc");
		String dvy_pla_sts_rdo = requestHelper.getParameter("dvy_pla_sts_rdo");
		String ddly_yn = requestHelper.getParameter("ddly_yn");
		String sort = requestHelper.getParameter("sort");
		String ngrs_soju_yn = requestHelper.getParameter("ngrs_soju_yn");
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		String mbcoType = requestHelper.getMbcoType(); // 본지사구분
		String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
		
		
		DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
		srhVo.setDvy_plash_slpno_rdo(dvy_plash_slpno_rdo);
		srhVo.setNa_dvy_plash_slpno(na_dvy_plash_slpno);
		srhVo.setOdrpl_na_trpl_rdo(odrpl_na_trpl_rdo);
		srhVo.setOdrpl_na_trpl_c(odrpl_na_trpl_c);
		srhVo.setDvyaa_na_trpl_rdo(dvyaa_na_trpl_rdo);
		srhVo.setDvyaa_na_trpl_c(dvyaa_na_trpl_c);
		srhVo.setDvy_pla_dt_from(dvy_pla_dt_from);
		srhVo.setDvy_pla_dt_to(dvy_pla_dt_to);
		srhVo.setCser_ctr_tpc(cser_ctr_tpc);
		srhVo.setDvy_pla_sts_rdo(dvy_pla_sts_rdo);
		srhVo.setDdly_yn(ddly_yn);
		srhVo.setMbcoType(mbcoType);
		srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
		
		srhVo.setSort(sort);
		srhVo.setNgrs_soju_yn(ngrs_soju_yn);
		srhVo.setTrpl(TRPL_C_ARR);
		
		int totalRowCount = deliveryNoticeService.getDeliveryTradingPatnersMCount(srhVo);
		
		//Paging
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO01"), totalRowCount, "ds_pageVO01");
		int start = pageHelper.getStart();
		int end  = pageHelper.getEnd();
		srhVo.setStart(start);
		srhVo.setEnd(end);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			List<DeliveryTradingPatnersMVO> list = deliveryNoticeService.retrieveDeliveryTradingPatnersM(srhVo);
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
				dsHelper.addColumns(DeliveryTradingPatnersMVO.class);
				for(DeliveryTradingPatnersMVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());
			}
			
			//합계
			Map<String, Object> sumMap = deliveryNoticeService.getDeliveryTradingPatnersMSum(srhVo);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/delivery/printDeliveryTradingPatners01")
	public RestResult printDeliveryTradingPatners01(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName,
			String dvy_plash_slpno_rdo, String na_dvy_plash_slpno, String odrpl_na_trpl_rdo, 
			String odrpl_na_trpl_c, String dvy_pla_dt_from, String dvy_pla_dt_to, String cser_ctr_tpc, 
			String dvy_pla_sts_rdo, String ddly_yn, String sort, String ngrs_soju_yn, String TRPL_C){
		
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			
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
			List<DeliveryTradingPatnersMVO> mList = deliveryNoticeService.printDeliveryTradingPatnersM(srhVo);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/delivery/printDeliveryTradingPatners02")
	public RestResult printDeliveryTradingPatners02(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName,
			String dvy_plash_slpno_rdo, String na_dvy_plash_slpno, String odrpl_na_trpl_rdo, 
			String odrpl_na_trpl_c, String dvy_pla_dt_from, String dvy_pla_dt_to, String cser_ctr_tpc, 
			String dvy_pla_sts_rdo, String ddly_yn, String sort, String ngrs_soju_yn,String TRPL_C
			){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			
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
			List<DeliveryTradingPatnersMVO> mList = deliveryNoticeService.printDeliveryTradingPatnersM(srhVo);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveDeliveryTradingPatnersD")
	public void retrieveDeliveryTradingPatnersD(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String spypl_na_trpl_c = requestHelper.getParameter("spypl_na_trpl_c");
			String dvyaa_na_trpl_c = requestHelper.getParameter("dvyaa_na_trpl_c");
			String na_dvy_plash_slpno = requestHelper.getParameter("na_dvy_plash_slpno");
			String dvy_pla_dt = requestHelper.getParameter("dvy_pla_dt");
			String sort = requestHelper.getParameter("sort");
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
			String slpDt = requestHelper.getParameter("slpDt");
			String naSlpno = requestHelper.getParameter("naSlpno");
			
			
			int totalRowCount = deliveryNoticeService.getDeliveryTradingPatnersDCount(spypl_na_trpl_c, dvyaa_na_trpl_c, na_dvy_plash_slpno, slpDt, naSlpno, mbcoType, truAgcyNaTrplC, dvy_pla_dt);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			//int start = pageHelper.getStart();
			//int end  = pageHelper.getEnd();
			int start = 0;
			int end = 150;
			
			PlatformData out_PlatformData = new PlatformData();
			List<DeliveryTradingPatnersDVO> list = deliveryNoticeService.retrieveDeliveryTradingPatnersD(spypl_na_trpl_c, dvyaa_na_trpl_c, na_dvy_plash_slpno, start, end, sort, slpDt, naSlpno, mbcoType, truAgcyNaTrplC, dvy_pla_dt);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDeliveryTradingPatners")
	public void downloadExcelDeliveryTradingPatners(HttpServletRequest request, HttpServletResponse response) {
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
			String sort 					= request.getParameter("sort");
			String ngrs_soju_yn 			= request.getParameter("ngrs_soju_yn");
			String spypl_type 				= request.getParameter("spypl_type");
			//String fileName				= request.getParameter("FILE_NAME");
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			String fileName = "배송예정서거래처별_"+dvy_pla_dt_from+"-"+dvy_pla_dt_to+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C 					= requestHelper.getParameter("TRPL_C");
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
			srhVo.setSpypl_type(spypl_type);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			
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
					"87지방소주여부",
					"88PB직송여부",
					"89혁신점포여부"
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
					"DDLY_YN",
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
					"GRS_SOJU_YN",
					"PBDDLY_YN",
					"DVY_PLASH_CRT_DSC"
					};
			
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeService.downloadExcelDeliveryTradingPatners(srhVo, handler);
			
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
	 * 화면명 : 배송예정 거래처별 조회 Master Grid Excel DownLoad
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersM")
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
			String sort 							= request.getParameter("sort");
			String ngrs_soju_yn 				= request.getParameter("ngrs_soju_yn");
			String spypl_type 				= request.getParameter("spypl_type");
			String g_spypl_na_trpl_c		= request.getParameter("g_spypl_na_trpl_c");
			String g_dvyaa_na_trpl_c		= request.getParameter("g_dvyaa_na_trpl_c");
			String g_na_dvy_plash_slpno	= request.getParameter("g_na_dvy_plash_slpno");
			//String fileName						= request.getParameter("FILE_NAME");
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
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
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setSpypl_type(spypl_type);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setG_dvyaa_na_trpl_c(g_dvyaa_na_trpl_c);
			srhVo.setG_na_dvy_plash_slpno(g_na_dvy_plash_slpno);
			srhVo.setG_spypl_na_trpl_c(g_spypl_na_trpl_c);
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			
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
					"PB직송구분",
					"혁신점포구분"
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
					"DDLY_YN",
					"ODRPL_NA_TEAM_N",
					"STS_DVY_PLA_QT",
					"STS_DVY_AM",
					"STS_BYNG_QT",
					"STS_BYAM",
					"PBDDLY_YN",
					"DVY_PLASH_CRT_DSC"
					};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeService.downloadExcelDeliveryTradingPatnersM(srhVo, handler);
			
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
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명 : 배송예정 거래처별 조회 Grid Detail Excel 
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersD")
	public void downloadExcelDeliveryTradingPatnersD(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String spypl_na_trpl_c 		= request.getParameter("spypl_na_trpl_c");
			String dvyaa_na_trpl_c 		= request.getParameter("dvyaa_na_trpl_c");
			String na_dvy_plash_slpno = request.getParameter("na_dvy_plash_slpno");
			String dvy_pla_dt = request.getParameter("dvy_pla_dt");
			String sort 						= request.getParameter("sort");
			String slpDt 					= request.getParameter("slpDt");
			String naSlpno 				= request.getParameter("naSlpno");
			String fileName = "배송예정서거래처별_디테일.xls";
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
					"경제통합상품코드",
					"경제통합상품명",
					"발주전표일련번호",
					"과세구분",
					"생산년도",
					"배송상품단가",
					"배송예정수량",
					"배송중량",
					"배송금액",
					"배송부가세",
					"배송공병금액",
					"배송장려금",
					"배송환급수수료",
					"배송물류수수료",
					"배송운임보조비",
					"검수수량",
					"검수중량",
					"매입확정단가",
					"매입확정수량",
					"매입확정중량",
					"매입확정금액",
					"변경사유내용",
					"주문일자",
					"주문번호",
					"XML주문서번호",
					"비고내용",
					"배송예정서상태코드",
					"배송장려금",
					"배송장려금율",
					"배송환급수수료율",
					"개체식별번호",
					"원배송예정상세일련번호"
				  };
			String[] keyIndex = new String[]{
					"NA_WRS_C",
					"WRSNM",
					"ODR_SLPNO",
					"TXT_DSC",
					"PD_YY",
					"DVY_WRS_UPR",
					"DVY_PLA_QT",
					"DVY_PLA_QT",
					"DVY_AM",
					"DVY_VAT",
					"DVY_VCBT_AM",
					"DVY_SSDY",
					"DVY_TROT_FEE",
					"DVY_PHD_FEE",
					"DVY_FAR_ASTCS",
					"EMPTY",
					"EMPTY",
					"BYNG_UPR",
					"BYNG_QT",
					"BYNG_WT",
					"BYAM",
					"EMPTY",
					"ODR_DT",
					"ODR_SLPNO",
					"EMPTY",
					"EMPTY",
					"DVY_PLASH_STAC",
					"EMPTY",
					"DVY_SSDYRT",
					"EMPTY",
					"EMPTY",
					"EMPTY"
				};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeService.downloadExcelDeliveryTradingPatnersD(spypl_na_trpl_c, dvyaa_na_trpl_c, na_dvy_plash_slpno, 1, 150, sort, slpDt, naSlpno, mbcoType, truAgcyNaTrplC, dvy_pla_dt, handler);
			
			LinkedHashMap<String, Object> searchMap = new LinkedHashMap<String, Object>();
			
			searchMap.put("공급처", spypl_na_trpl_c);
			searchMap.put("배송처", dvyaa_na_trpl_c);
			searchMap.put("배송전ㅊ포", na_dvy_plash_slpno);
			searchMap.put("배송예정일자 검색시작일자", slpDt);
			searchMap.put("배송예정일자 검색종료일자", naSlpno);
			
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDetailDeliveryTradingPatners")
	public void downloadExcelDetailDeliveryTradingPatners(HttpServletRequest request, HttpServletResponse response) {
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
			String sort 							= request.getParameter("sort");
			String ngrs_soju_yn 				= request.getParameter("ngrs_soju_yn");
			String spypl_type 				= request.getParameter("spypl_type");
			String g_spypl_na_trpl_c		= request.getParameter("g_spypl_na_trpl_c");
			String g_dvyaa_na_trpl_c		= request.getParameter("g_dvyaa_na_trpl_c");
			String g_na_dvy_plash_slpno	= request.getParameter("g_na_dvy_plash_slpno");
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			String fileName = "배송예정서거래처별_상세_"+dvy_pla_dt_from+"-"+dvy_pla_dt_to+".xls";
			
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
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setSpypl_type(spypl_type);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setG_dvyaa_na_trpl_c(g_dvyaa_na_trpl_c);
			srhVo.setG_na_dvy_plash_slpno(g_na_dvy_plash_slpno);
			srhVo.setG_spypl_na_trpl_c(g_spypl_na_trpl_c);
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			
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
			
			deliveryNoticeService.downloadExcelDetailDeliveryTradingPatners(srhVo, handler);
			
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
			
			List<Map<String, Object>> billingList = deliveryNoticeService.downloadExcelDetailDeliveryTradingPatnersBilling(srhVo);
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
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 거래처별 조회 Excel Data In Format (upload 용)
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersE")
	public void downloadExcelDeliveryTradingPatnersE(HttpServletRequest request, HttpServletResponse response) {
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
			
			deliveryNoticeService.downloadExcelDeliveryTradingPatnersE(srhVo, handler);
			
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveDeliverySkusM")
	public void retrieveDeliverySkusM(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			
			String dvyPlaDtFr = requestHelper.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = requestHelper.getParameter("dvy_pla_dt_to");
			String wrsGubun = requestHelper.getParameter("wrs_gubun");
			String naWrsC = requestHelper.getParameter("na_wrs_c");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			String dvyPlashSlpnoRdo = requestHelper.getParameter("dvy_plash_slpno_rdo");
			String naDvyPlashSlpno = requestHelper.getParameter("na_dvy_plash_slpno");
			String odrplNaTrplRdo = requestHelper.getParameter("odrpl_na_trpl_rdo");
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
			
			int totalRowCount = deliveryNoticeService.getDeliverySkusMCount(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO01"), totalRowCount, "ds_pageVO01");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			PlatformData out_PlatformData = new PlatformData();
			List<DeliverySkusMVO> list = deliveryNoticeService.retrieveDeliverySkusM(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end, mbcoType, truAgcyNaTrplC, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveDeliverySkusD")
	public void retrieveDeliverySkusD(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			
			String dvyPlaDtFr = requestHelper.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = requestHelper.getParameter("dvy_pla_dt_to");
			String naWrsC = requestHelper.getParameter("na_wrs_c");
//			String spyplType = requestHelper.getParameter("spypl_type");
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			String dvyPlashSlpnoRdo = requestHelper.getParameter("dvy_plash_slpno_rdo");
			String naDvyPlashSlpno = requestHelper.getParameter("na_dvy_plash_slpno");
			String odrplNaTrplRdo = requestHelper.getParameter("odrpl_na_trpl_rdo");
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
			
			int totalRowCount = deliveryNoticeService.getDeliverySkusDCount(naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, mbcoType, truAgcyNaTrplC, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO02"), totalRowCount, "ds_pageVO02");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			PlatformData out_PlatformData = new PlatformData();
			List<DeliverySkusDVO> list = deliveryNoticeService.retrieveDeliverySkusD(naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end, mbcoType, truAgcyNaTrplC, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDeliverySkus")
	public void downloadExcelDeliverySkus(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			String dvyPlaDtFr = request.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = request.getParameter("dvy_pla_dt_to");
			String wrsGubun = request.getParameter("wrs_gubun");
			String naWrsC = request.getParameter("na_wrs_c");
			String fileName = "배송예정서상품별_"+dvyPlaDtFr+"-"+dvyPlaDtTo+".xls";
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			String dvyPlashSlpnoRdo = requestHelper.getParameter("dvy_plash_slpno_rdo");
			String naDvyPlashSlpno = requestHelper.getParameter("na_dvy_plash_slpno");
			String odrplNaTrplRdo = requestHelper.getParameter("odrpl_na_trpl_rdo");
			String odrplNaTrplC = requestHelper.getParameter("odrpl_na_trpl_c");
			
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
			
			deliveryNoticeService.downloadExcelDeliverySkus(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, mbcoType, truAgcyNaTrplC, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC, handler);
			
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
			
			List<Map<String, Object>> billingList = deliveryNoticeService.downloadExcelDeliverySkusBilling(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, mbcoType, truAgcyNaTrplC, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC);
			if(billingList != null && billingList.size() > 0) {
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				for(Map<String, Object> vo : billingList) {
					LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
					values.put("SPYPL_NA_TRPL_C", TRPL_C);
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
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	
	/**
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정 상품별 조회 출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/scm/delivery/printDeliverySkus")
	public RestResult printDeliverySkus(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName,
			String dvyPlaDtFr, String dvyPlaDtTo, String wrsGubun,String naWrsC, String TRPL_C,
			String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
			
			List<DeliverySkusMVO> masterVOList = deliveryNoticeService.retrieveDeliverySkusM(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, -1, -1, mbcoType, truAgcyNaTrplC, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC);
			
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
					
					
					List<DeliverySkusDVO> detailVOList = deliveryNoticeService.retrieveDeliverySkusD(vo.getNA_WRS_C(), dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, -1, -1, mbcoType, truAgcyNaTrplC, dvyPlashSlpnoRdo, naDvyPlashSlpno, odrplNaTrplRdo, odrplNaTrplC);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/retrieveDeliveryResult")
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
			String naDvyPlashSlpno = requestHelper.getParameter("na_dvy_plash_slpno");
			String odrSlpno = requestHelper.getParameter("odr_slpno");
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
			int totalRowCount = deliveryNoticeService.getDeliveryResultCount(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, mbcoType, truAgcyNaTrplC);
			//Paging
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			int start = pageHelper.getStart();
			int end  = pageHelper.getEnd();
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>> list = deliveryNoticeService.retrieveDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, start, end, mbcoType, truAgcyNaTrplC);
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
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDeliveryResult")
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
			String naDvyPlashSlpno = request.getParameter("na_dvy_plash_slpno");
			String odrSlpno = request.getParameter("odr_slpno");
			String fileName = "배송예정서결과조회_"+dvyPlaDtFr+"-"+dvyPlaDtTo+".xls";
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
			
			deliveryNoticeService.downloadExcelDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, -1, -1, mbcoType, truAgcyNaTrplC, handler);
			
			handler.write(response, fileName);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/scm/delivery/downloadExcelDeliveryDetailResult")
	public void downloadExcelDeliveryDetailResult(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			String dvyPlaDtFr = request.getParameter("dvy_pla_dt_fr");
			String dvyPlaDtTo = request.getParameter("dvy_pla_dt_to");
			String odrplNaTrplC = request.getParameter("odrpl_na_trpl_c");
			String ddlyYn = request.getParameter("ddly_yn");
			String resCode = request.getParameter("res_code");
			String TRPL_C = request.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String naDvyPlashSlpno = request.getParameter("na_dvy_plash_slpno");
			String odrSlpno = request.getParameter("odr_slpno");
			String fileName = "배송예정서결과상세조회_"+dvyPlaDtFr+"-"+dvyPlaDtTo+".xls";
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
					"발주번호",
					"발주일자",
					"상품코드",
					"상품명",
					"규격",
					"단위",
					"입수",
					"단가",
					"수주량",
					"배송예정량",
					"금액",
					"부가세",
					"공병단가",
					"공벽금액",
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
					"ODR_SLPNO",
					"ODR_DT",
					"NA_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"NA_WRS_UNT_C",
					"BOXPE_AQZ",
					"ODR_PCS",
					"ODR_QT",
					"DVY_PLA_QT",
					"DVY_AM",
					"DVY_VAT",
					"VCBT_UPR",
					"VCBT_AM",
					"DDLY_YN",
					"DVY_PLASH_STSNM",
					"DVY_PLASH_STSC",
					"RES_CODE",
					"RES_DESC"
				};
			AbstractModel model = new DefaultModel("집계데이터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			deliveryNoticeService.sql_retrieveDeliveryDetailResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, -1, -1, mbcoType, truAgcyNaTrplC, handler);
			
			handler.write(response, fileName);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명 : 배송예정서 조회 
	 * 기    능 : 거래명세서출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/printDeliveryNoticeOrders")
	public RestResult printDeliveryNoticeOrders(HttpServletRequest request, HttpServletResponse response,
			String dvy_plash_slpno_rdo, String na_dvy_plash_slpno, String odrpl_na_trpl_rdo, 
			String odrpl_na_trpl_c, String dvy_pla_dt_from, String dvy_pla_dt_to, String cser_ctr_tpc, 
			String dvy_pla_sts_rdo, String ddly_yn, String sort, String ngrs_soju_yn, String TRPL_C, String spyplNaTrplC, String dvyaaNaTrplC,
			String systemFileName, String ozType){
		try{
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setStart(-1);
			srhVo.setEnd(-1);
			
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			
			
			
			
			List<DeliveryTradingPatnersMVO> dvyMasterList = deliveryNoticeService.printDeliveryTradingPatnersJustM(srhVo);
			if(dvyMasterList != null && dvyMasterList.size() > 0) {
				int keyIndex = 0;
				for(DeliveryTradingPatnersMVO mvo : dvyMasterList) {
					List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeService.printDeliveryNoticeOrder(mvo.getNA_DVY_PLASH_SLPNO(), mvo.getSPYPL_NA_TRPL_C(),
							mvo.getDVYAA_NA_TRPL_C(), mbcoType, truAgcyNaTrplC, ozType, mvo.getDVY_PLA_DT());
					if(list != null && list.size() > 0){
						Map<String,Object> _master = new LinkedHashMap<String, Object>();
						//Master Set
						DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
						_master.put("top1", mvo.getNA_DVY_PLASH_SLPNO());
						_master.put("top2", vo.getCSER_CTR_TPC());
						_master.put("crtDsc", vo.getDVY_PLASH_CRT_DSC());//배송예정서생성구분코드
						
						//공급자
						_master.put("key","key"+keyIndex);
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
						_master.put("YMD_master11", vo.getCNR_DT());//검수일자
						
						
						//직인파일
						if(StringUtils.isNotEmpty(systemFileName)) {
							String tempPath = Configurer.getProperty("file.temp.path");
							File dir = new File(tempPath);
							File f = FileUtils.getFile(dir, systemFileName);
							if(f.exists()){
								String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
								if(StringUtils.isNotEmpty(baseImage)) {
									markMap.put("mark", "data:;base64,"+baseImage);//직인파일
								}
							}else{
								markMap.put("mark", "");
							}
						}else if(StringUtils.isNotEmpty(vo.getNA_TRPL_SEAL_FLNM())){
							String tempPath = Configurer.getProperty("file.seal.path");
							File dir = new File(tempPath);
							String fileNm = vo.getNA_TRPL_SEAL_FLNM();
							File f = FileUtils.getFile(dir, fileNm);
							if(f.exists()){
								String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
								if(StringUtils.isNotEmpty(baseImage)) {
									markMap.put("mark", "data:;base64,"+baseImage);//직인파일
								}
							}else{
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
								logger.error(e.getMessage(), e);
							}
							byte[] bytes = baos.toByteArray();
							String barcodeImage = Base64Utils.encodeToString(bytes);
							_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
						}catch(BarcodeException | OutputException e){
							logger.error(e.getMessage(), e);
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
							_detail.put("detail13", item.getBKG_EVT_DSC());//소터구분
							_detail.put("detail14", item.getDUM_RAT());//덤비율
							detailList.add(_detail);
						}
						keyIndex++;
					}
				}
			}
			
			List<Object> all_list = new ArrayList<Object>();
			all_list.add(markList);
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException | IOException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명 : 배송예정서 조회 
	 * 기    능 : 덤상품 거래명세서출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/printDeliveryNoticeOrdersDum")
	public RestResult printDeliveryNoticeOrdersDum(HttpServletRequest request, HttpServletResponse response,
			String dvy_plash_slpno_rdo, String na_dvy_plash_slpno, String odrpl_na_trpl_rdo, 
			String odrpl_na_trpl_c, String dvy_pla_dt_from, String dvy_pla_dt_to, String cser_ctr_tpc, 
			String dvy_pla_sts_rdo, String ddly_yn, String sort, String ngrs_soju_yn, String TRPL_C, String spyplNaTrplC, String dvyaaNaTrplC,
			String systemFileName, String ozType){
		try{
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
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
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			
			srhVo.setSort(sort);
			srhVo.setNgrs_soju_yn(ngrs_soju_yn);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setStart(-1);
			srhVo.setEnd(-1);
			
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			
			
			
			
			List<DeliveryTradingPatnersMVO> dvyMasterList = deliveryNoticeService.printDeliveryTradingPatnersJustM(srhVo);
			if(dvyMasterList != null && dvyMasterList.size() > 0) {
				int keyIndex = 0;
				for(DeliveryTradingPatnersMVO mvo : dvyMasterList) {
					List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeService.printDeliveryNoticeOrderDum(mvo.getNA_DVY_PLASH_SLPNO(), mvo.getSPYPL_NA_TRPL_C(),
							mvo.getDVYAA_NA_TRPL_C(), mbcoType, truAgcyNaTrplC, ozType);
					if(list != null && list.size() > 0){
						Map<String,Object> _master = new LinkedHashMap<String, Object>();
						//Master Set
						DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
						_master.put("top1", mvo.getNA_DVY_PLASH_SLPNO());
						_master.put("top2", vo.getCSER_CTR_TPC());
						
						//공급자
						_master.put("key","key"+keyIndex);
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
						_master.put("YMD_master11", vo.getCNR_DT());//검수일자
						
						
						//직인파일
						if(StringUtils.isNotEmpty(systemFileName)) {
							String tempPath = Configurer.getProperty("file.temp.path");
							File dir = new File(tempPath);
							File f = FileUtils.getFile(dir, systemFileName);
							if(f.exists()){
								String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
								if(StringUtils.isNotEmpty(baseImage)) {
									markMap.put("mark", "data:;base64,"+baseImage);//직인파일
								}
							}else{
								markMap.put("mark", "");
							}
						}else if(StringUtils.isNotEmpty(vo.getNA_TRPL_SEAL_FLNM())){
							String tempPath = Configurer.getProperty("file.seal.path");
							File dir = new File(tempPath);
							String fileNm = vo.getNA_TRPL_SEAL_FLNM();
							File f = FileUtils.getFile(dir, fileNm);
							if(f.exists()){
								String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
								if(StringUtils.isNotEmpty(baseImage)) {
									markMap.put("mark", "data:;base64,"+baseImage);//직인파일
								}
							}else{
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
								logger.error(e.getMessage(), e);
							}
							byte[] bytes = baos.toByteArray();
							String barcodeImage = Base64Utils.encodeToString(bytes);
							_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
						}catch(BarcodeException | OutputException e){
							logger.error(e.getMessage(), e);
						}
						_master.put("barcode", barcode);//바코드
						masterList.add(_master);
						
						//Detail List Set
						for(DeliveryNoticeOrderPrintVO item : list){
							Map<String,Object> _detail = new LinkedHashMap<String, Object>();
							
							if (StringUtils.isNotEmpty(item.getDUM_RAT())) {
								String[] dum = item.getDUM_RAT().split(":");
								
								double dumRate = Double.parseDouble(dum[1]) / Double.parseDouble(dum[0]);
								
								_detail.put("key","key"+keyIndex);					
								_detail.put("detail00", item.getDVY_PLA_SQNO());
								
								_detail.put("detail01", item.getNA_WRS_C());
								_detail.put("detail02", item.getWRSNM());
								_detail.put("detail03", item.getNA_WRS_UNT_N());//규격
								_detail.put("NUM_detail04", (int) Math.floor(Double.parseDouble(item.getBOX_QT()) * dumRate)); // 박스수량
								_detail.put("NUM_detail05", item.getBOXPE_AQZ());//입수
								_detail.put("NUM_detail06", (int) Math.floor(Double.parseDouble(item.getDVY_PLA_QT()) * dumRate)); // 낱개수량
								_detail.put("NUM_detail07", item.getDVY_WRS_UPR());//단가
								_detail.put("NUM_detail08", item.getDVY_AM());//금액
								_detail.put("NUM_detail09", item.getDVY_VAT());//부가세
								_detail.put("NUM_detail10", item.getSPYPL_AM());//공급금액
								_detail.put("detail11", "결품사유");//결품사유
								_detail.put("detail12", item.getDQPD_RSN());//결품사유기타내용 (결품사유코드)	
								_detail.put("detail13", item.getBKG_EVT_DSC());//소터구분
								_detail.put("detail14", item.getDUM_RAT());//덤비율
							}
							
							detailList.add(_detail);
						}
						keyIndex++;
					}
				}
			}
			
			List<Object> all_list = new ArrayList<Object>();
			all_list.add(markList);
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException | IOException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0300
	 * 화면명 : 일반등록
	 * 기    능 : 영업가능 여부
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/getBizDtYn")
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
			String bizDtYn = deliveryNoticeService.getBizDtYn(odrplNaTrplC, searchDate);
			String bizDt = deliveryNoticeService.getBizDt(trplO, teamO, trplR, teamR, searchDate);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/getBizDt")
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
			
			String bizDt = deliveryNoticeService.getBizDt(trplO, teamO, trplR, teamR, searchDate);
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/getBuyer")
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
			Map<String, Object> resultMap = deliveryNoticeService.getBuyer(naWrsN, naWrsC, naWrsLclc, naWrsMclc, naWrsSclc, naWrsDtcfC);
			
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
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/deliveryNoticeCancelProc")
	public void deliveryNoticeCancelProc(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String spyplNaTrplC	= 	requestHelper.getParameter("spypl_na_trpl_c"); //발주전표번호
		String dvyaaNaTrplC	= 	requestHelper.getParameter("dvyaa_na_trpl_c"); //수주처 코드
		String naDvyPlashSlpno = 	requestHelper.getParameter("na_dvy_plash_slpno"); //발주처 코드
		String userID = requestHelper.getUserID();
//		String mbcoType = requestHelper.getMbcoType(); // 본지사구분
//		String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			int count = deliveryNoticeService.deliveryNoticeCancelProc(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, userID);
			
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
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/isOKdlvpnsht")
	public void isOKdlvpnsht(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String spyplNaTrplC	= 	requestHelper.getParameter("spypl_na_trpl_c"); //발주전표번호
		String dvyaaNaTrplC	= 	requestHelper.getParameter("dvyaa_na_trpl_c"); //수주처 코드
		String naDvyPlashSlpno = 	requestHelper.getParameter("na_dvy_plash_slpno"); //발주처 코드
			
		try {
			Map<String, Object> map= sentCheckService.isOKdlvpnsht(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
			if(map != null) {
				if(map.get("PRC_YN") != null) {
					String prcYN = "";
					if(map.get("PRC_YN") != null){
						prcYN = map.get("PRC_YN").toString();
					}
					logger.info("SPYPL_NA_TRPL_C : " + spyplNaTrplC);
					logger.info("DVYAA_NA_TRPL_C : " + dvyaaNaTrplC);
					logger.info("NA_DVY_PLASH_SLPNO : " + naDvyPlashSlpno);
					logger.info("PRC_YN : " + prcYN);
					
						
					if (prcYN.equals("E")) {
						sendData(response, new PlatformData(), -999, map.get("RES_DESC").toString());
					} else if (prcYN.equals("P")) {
						sendData(response, new PlatformData(), -999, "배송예정서가 전송중에 있습니다.\n배송예정서 거래처별 조회 화면에서 전송 결과을 확인하신후 거래명세서를 출력하십시오.");
					} else if(prcYN.equals("R") || prcYN.equals("Y")) {
						sendData(response, new PlatformData(), 0, "SUCCESS");
					} else {
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
	
	
	private void markBilling(String GLN, String MD_ID, HashSet<DeduplicationObject> billingSet) {
		billingMarkUpService.markUpForOrders(BillingMarkUpTableName.TB_OD_ORDER_M, GLN, MD_ID, billingSet);
	}
	/*
	 * 빌링 서비스
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/billangMarkUp")
	public void billangMarkUp(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData out_PlatformData = new PlatformData();
		
		String trplO 		= 	requestHelper.getParameter("trplO");//발주처
		String teamO 		= 	requestHelper.getParameter("teamO"); //발주처팀
		String odrDt 		= 	requestHelper.getParameter("odrDt"); //발주일자
		String odrSlpno	= 	requestHelper.getParameter("odrSlpno"); //발주전표번호
			
		try {
			if(StringUtils.isNotEmpty(trplO) && StringUtils.isNotEmpty(teamO) && StringUtils.isNotEmpty(odrDt) && StringUtils.isNotEmpty(odrSlpno)){
				logger.info("######### Billing Mark Up Start #########");
				logger.info("### trplO : " + trplO);
				logger.info("### teamO : " + teamO);
				logger.info("### odrDt : " + odrDt);
				logger.info("### odrSlpno : " + odrSlpno);
				HashSet<DeduplicationObject> billingSet = new HashSet<DeduplicationObject>();
				LinkedHashMap<String, Object> values = new LinkedHashMap<String, Object>();
				values.put("ODRPL_NA_TRPL_C", trplO);
				values.put("ODRPL_NA_TEAM_C", teamO);
				values.put("ODR_DT", odrDt);
				values.put("ODR_SLPNO", odrSlpno);
				DeduplicationObject ddo = new DeduplicationObject(values);
				billingSet.add(ddo);

				String GLN = requestHelper.getGlnCode();	    
				String MD_ID = requestHelper.getUserID(); 
				
				markBilling(GLN, MD_ID, billingSet);
				logger.info("######### Billing Mark Up End #########");
				sendData(response, out_PlatformData);
			}else{
				logger.error("Billing Parameter is not Exist!!!");
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
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
	
	/**
	 * 배송예정서 장애확인
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/sessionDeliveryNoticeOrder")
	public void sessionDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		
		/**
		 * 서비스 점검상태 체크(로그인된 사용자)
		 *  - comTran.xjs의 gfn_callService의 콜백(gfn_callBackResult)에서 처리
		 *  - ErrorCode -500
		 */
		Object sessionObject = request.getSession().getAttribute("sessionBox");
		
		try {
			
			if(sessionObject != null) {
				Map<String, Object> param = new HashMap<String, Object>();
				param.put("bsnDsc", "DVY");
				List<Map<String, Object>> service = loginService.retrieveBlockService(param);
				if (service != null && service.size() > 0) {
//					System.out.println("[ServiceTest] 서버 점검 중 로그아웃 처리 : " + CurrentURI);
					String bckTi = (String) service.get(0).get("BLOCK_TI");
					String bckCntn = (String) service.get(0).get("BLOCK_CNTN");
					sendData(response, new PlatformData(), -500, bckTi + "||" + bckCntn);
					return ;
				} else {
					sendData(response, new PlatformData(), 1, "It is possible to save.");
					return ;
				}
			}
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0340
	 * 화면명 : 배송예정서 조회 
	 * 기    능 : 거래명세서출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/delivery/printDeliveryNoticeSkus")
	public RestResult printDeliveryNoticeSkus(HttpServletRequest request, HttpServletResponse response,
			String dvyPlaDt, String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC,
			String TRPL_C, String ozType){
		try{
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mbcoType = requestHelper.getMbcoType(); // 본지사구분
			String truAgcyNaTrplC = requestHelper.getGlnCode();	// 위탁대리점 코드
			
			DeliveryTradingPatnersSrhVO srhVo = new DeliveryTradingPatnersSrhVO();
			srhVo.setDvy_pla_dt_from(dvyPlaDt);
			srhVo.setDvy_pla_dt_to(dvyPlaDt);
			srhVo.setDvy_plash_slpno_rdo(dvyPlashSlpnoRdo);
			srhVo.setNa_dvy_plash_slpno(naDvyPlashSlpno);
			srhVo.setOdrpl_na_trpl_rdo(odrplNaTrplRdo);
			srhVo.setOdrpl_na_trpl_c(odrplNaTrplC);
			srhVo.setMbcoType(mbcoType);
			srhVo.setTruAgcyNaTrplC(truAgcyNaTrplC);
			srhVo.setTrpl(TRPL_C_ARR);
			srhVo.setStart(-1);
			srhVo.setEnd(-1);
			
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			
			
			
			
			List<DeliveryTradingPatnersMVO> dvyMasterList = deliveryNoticeService.printDeliveryTradingPatnersJustM(srhVo);
			if(dvyMasterList != null && dvyMasterList.size() > 0) {
				int keyIndex = 0;
				for(DeliveryTradingPatnersMVO mvo : dvyMasterList) {
					List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeService.printDeliveryNoticeOrder(mvo.getNA_DVY_PLASH_SLPNO(), mvo.getSPYPL_NA_TRPL_C(),
							mvo.getDVYAA_NA_TRPL_C(), mbcoType, truAgcyNaTrplC, ozType, mvo.getDVY_PLA_DT());
					if(list != null && list.size() > 0){
						Map<String,Object> _master = new LinkedHashMap<String, Object>();
						//Master Set
						DeliveryNoticeOrderPrintVO vo = (DeliveryNoticeOrderPrintVO)list.get(0);
						_master.put("top1", mvo.getNA_DVY_PLASH_SLPNO());
						_master.put("top2", vo.getCSER_CTR_TPC());
						_master.put("crtDsc", vo.getDVY_PLASH_CRT_DSC());//배송예정서생성구분코드
						
						//공급자
						_master.put("key","key"+keyIndex);
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
						_master.put("YMD_master11", vo.getCNR_DT());//검수일자
						
						
						//직인파일
						if(StringUtils.isNotEmpty(vo.getNA_TRPL_SEAL_FLNM())){
							String tempPath = Configurer.getProperty("file.seal.path");
							File dir = new File(tempPath);
							String fileNm = vo.getNA_TRPL_SEAL_FLNM();
							File f = FileUtils.getFile(dir, fileNm);
							if(f.exists()){
								String baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
								if(StringUtils.isNotEmpty(baseImage)) {
									markMap.put("mark", "data:;base64,"+baseImage);//직인파일
								}
							}else{
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
								logger.error(e.getMessage(), e);
							}
							byte[] bytes = baos.toByteArray();
							String barcodeImage = Base64Utils.encodeToString(bytes);
							_master.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
						}catch(BarcodeException | OutputException e){
							logger.error(e.getMessage(), e);
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
							_detail.put("detail13", item.getBKG_EVT_DSC());//소터구분
							_detail.put("detail14", item.getDUM_RAT());//덤비율
							detailList.add(_detail);
						}
						keyIndex++;
					}
				}
			}
			
			List<Object> all_list = new ArrayList<Object>();
			all_list.add(markList);
			all_list.add(masterList);
			all_list.add(detailList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException | IOException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
}