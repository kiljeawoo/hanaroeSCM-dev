package com.nh.escm.pds.coupon.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.util.LoggerUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.pds.coupon.helper.CouponValidator;
import com.nh.escm.pds.coupon.service.CouponService;
import com.nh.escm.pds.coupon.vo.SQLNames.CouponUploadError;
import com.nh.escm.pds.coupon.vo.SQLNames.CouponUploadResult;
import com.nh.escm.pds.coupon.vo.TB_GD_EVENT_CPN;
import com.nh.escm.pds.pricat.vo.ProductReqPrgrVO;


@RestController
public class CouponController extends AbstractController {
	Logger logger = LoggerUtil.getServerLogger(this.getClass());

	@Autowired
	private SequenceKeyService sequenceKeyService;
	
	@Autowired
	private CouponService couponService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/uploadCoupon")
	public void uploadCoupon(HttpServletRequest request, HttpServletResponse response) {
		
		int hColCnt = 3; //헤더화일 컬럼수 3
		int dcpnColCnt = 17; //data 쿠폰 화일 컬럼수 19
		int dcrdColCnt = 5; //data 카드 화일 컬럼수 5
		int eColCnt = 3; //종료화일 컬럼수 3
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String systemFileName = requestHelper.getParameter("systemFileName");
		
		File tempPath = FileUtils.getFile(Configurer.getProperty("file.temp.path"));
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			if(StringUtils.isEmpty(systemFileName)) {
				 throw new ValidationException("잘못된 첨부파일 오류, 첨부파일 이름이 없습니다.");
			}
			
			 File couponFile = FileUtils.getFile(tempPath, systemFileName);
			 if(!couponFile.exists()) {
				 throw new ValidationException("첨부파일이 서버에 Upload 되지 않았습니다.관리자에 확인바랍니다.");
			 }
			 
			List<String> couponItemList =  FileUtils.readLines(couponFile, "EUC-KR");
			
			if(couponItemList != null && couponItemList.size() > 0) {
				if(!StringUtils.contains(couponItemList.get(0),"|")) {
					throw new ValidationException("지정되지 않은  파일 형식입니다.");
				}
				if(!StringUtils.contains(couponItemList.get(0),"H") || 
						StringUtils.split(couponItemList.get(0), "|").length !=  hColCnt) {
					throw new ValidationException("지정되지 않은  파일 형식입니다.");
				}
				if(!StringUtils.contains(couponItemList.get(couponItemList.size()-1),"E") || 
						StringUtils.split(couponItemList.get(couponItemList.size()-1), "|").length !=  eColCnt) {
					throw new ValidationException("지정되지 않은  파일 형식입니다.");
				}
				
				String cpnGln= "";
				String dtTrans = "";
				
				int couponItemCount = 0;
				int cardItemCount = 0;
				int okCouponItemCount = 0;
				int okCardItemCount = 0;
				int errorCouponItemCount = 0;
				int errorCardItemCount = 0;
				
				DataSetHelper errorDSHelper = new DataSetHelper("ERROR_DS");
				errorDSHelper.addColumns(CouponUploadError.class);
				
				String tempSeq = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_GD_EVENT_CPN_TEMP);
				for(String couponItem : couponItemList) {
					String[] couponData = StringUtils.split(couponItem,"|");  //첫행: 헤더. 구분자 "|"
					if(couponData[0].equals("H")) {
						cpnGln = couponData[1];    // GLN
						dtTrans = couponData[2];    // 등록일
					} else if(couponData[0].equals("D") && couponData[1].equals("1")) {  // 상세. D|1
						if(couponData.length >= dcpnColCnt) {
							TB_GD_EVENT_CPN cpnVO = new TB_GD_EVENT_CPN();
							cpnVO.setTEMP_SEQ(tempSeq);
							cpnVO.setCPN_KDC(StringUtils.trim(couponData[2]));        // 쿠폰종류, NCPN, OCPN, CCPN
							cpnVO.setNA_CPN_C(StringUtils.trim(couponData[3]));       // 쿠폰코드
							cpnVO.setDC_NA_WRS_C(StringUtils.trim(couponData[4]));        // 상품코드
							cpnVO.setDC_VLD_PRD_ST_DT(StringUtils.trim(couponData[5])); // 행사시작일
							cpnVO.setDC_VLD_PRD_ED_DT(StringUtils.trim(couponData[6])); // 행사종료일
							cpnVO.setCPN_WRSNM(StringUtils.trim(couponData[7]));            // 상품명
							cpnVO.setCPN_SC_NO(StringUtils.trim(couponData[8]));               // 쿠폰회차번호
							cpnVO.setCPN_EFOC_MBDC(StringUtils.trim(couponData[9]));      // 쿠폰행사주체코드
							cpnVO.setCPN_DC_TPC(StringUtils.trim(couponData[10]));           // 쿠폰할인유형코드
							cpnVO.setCPN_MED_C(StringUtils.trim(couponData[11]));             // 쿠폰매체코드
							cpnVO.setCPN_APL_PUC(NumberUtils.toInt(StringUtils.remove(StringUtils.trim(couponData[12]),",")));   // 쿠폰적용매수
							cpnVO.setDC_BAS_QT(NumberUtils.toInt(StringUtils.remove(StringUtils.trim(couponData[13]),",")));   // 할인기준수량 
							cpnVO.setDC_BAS_BUY_AM(NumberUtils.toInt(StringUtils.remove(StringUtils.trim(couponData[14]),","))); //  할인기준구매금액
							cpnVO.setDC_AM(NumberUtils.toInt(StringUtils.remove(StringUtils.trim(couponData[15]),",")));  // 할인금액
							cpnVO.setTRT_FEE(NumberUtils.toInt(StringUtils.remove(StringUtils.trim(couponData[16]),","))); // 취급수수료
							//cpnVO.setMFT_CONM(StringUtils.trim(couponData[17]));
							cpnVO.setMFT_CONM("");
							cpnVO.setMNGT_NA_TRPL_C(StringUtils.trim(cpnGln));
							cpnVO.setMNGT_NA_BZPLC(requestHelper.getGlnCode());
							cpnVO.setFSRGMN_NA_BZPLC(requestHelper.getGlnCode());
							cpnVO.setLSCGMN_NA_BZPLC(requestHelper.getGlnCode());
							cpnVO.setLS_CMENO(requestHelper.getUserID());
							try {
								if(CouponValidator.validate(cpnVO)) {
									couponService.insertTemp(cpnVO);
									okCouponItemCount++;
								}
							} catch (AppetizerException | ValidationException e) {
								errorDSHelper.setData(CouponValidator.makeErrorMessage("DB입력오류 ", e.getMessage(), cpnVO));
								errorCouponItemCount++;
								
							}
						} else {
							Map<String, Object> errorMap = new HashMap<String, Object>();

							errorDSHelper.setData(CouponValidator.makeErrorMessage("문서형식오류 ","데이터 형식이 잘못되었습니다.", null));

							errorCouponItemCount++;
						}

					} else if(couponData[0].equals("D") && couponData[1].equals("2")) {
						errorCardItemCount++;

					} else if(couponData[0].equals("E")) {
						couponItemCount = NumberUtils.toInt(couponData[1]);
						cardItemCount = NumberUtils.toInt(couponData[2]);
					}

				}

				if(errorCardItemCount !=0) {
					errorDSHelper.setData(CouponValidator.makeErrorMessage("미지원쿠폰 ","신용카드쿠폰("+errorCardItemCount+")건", null));
				}
				
				DataSetHelper resultDSHelper = new DataSetHelper("RESULT_DS");
				resultDSHelper.addColumns(CouponUploadResult.class);
				Map<String, Object> resultMap = new HashMap<String, Object>();
				resultMap.put(CouponUploadResult.TOTAL_CNT.name(), couponItemCount+cardItemCount);
				resultMap.put(CouponUploadResult.SUCCESS_CNT.name(), okCouponItemCount+okCardItemCount);
				resultMap.put(CouponUploadResult.ERROR_CNT.name(), errorCouponItemCount+errorCardItemCount);
				resultDSHelper.setData(resultMap);

				DataSetHelper seqHelper = new DataSetHelper("seqDS");
				Map<String, Object> reSeq = new HashMap<String, Object>();
				reSeq.put("TEMP_SEQ", tempSeq);
				seqHelper.addColumns(reSeq.keySet());
				seqHelper.setData(reSeq);
				
				platformData.addDataSet(resultDSHelper.getDataSet());
				platformData.addDataSet(errorDSHelper.getDataSet());
				platformData.addDataSet(seqHelper.getDataSet());
			} else {
				throw new AppetizerException("첨부된 파일에 쿠폰데이터가 없습니다.");
			}
		    sendData(response, platformData);
		} catch (AppetizerException | IOException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/insertEventCPN")
	public void insertEventCPN(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String TEMP_SEQ = requestHelper.getParameter("TEMP_SEQ");
		PlatformData platformData = new PlatformData();
		try {
			couponService.insertEventCPN(TEMP_SEQ);
			
			try {
				boolean checked =sentCheckService.checkSendState(TEMP_SEQ);
				if(checked)
					sendData(response, platformData);
			} catch (NHSentErrorException e) {
				String eb = e.getMessage();
				sendData(response, platformData, -999, eb);
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, "쿠폰파일 저장중 오류가 발생하였습니다.");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/getCouponList")
	public void getCouponList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String MNGT_NA_TRPL_C = requestHelper.getParameter("MNGT_NA_TRPL_C");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		String NA_CPN_C = requestHelper.getParameter("NA_CPN_C");
		String CPN_WRSNM = requestHelper.getParameter("CPN_WRSNM");
		String CPN_SC_NO = requestHelper.getParameter("CPN_SC_NO");
		String CPN_MED_C = requestHelper.getParameter("CPN_MED_C");
		String DC_VLD_PRD_ST_DT = requestHelper.getParameter("DC_VLD_PRD_ST_DT");
		String DC_VLD_PRD_ED_DT = requestHelper.getParameter("DC_VLD_PRD_ED_DT");
		
		PlatformData platformData = new PlatformData();
		
		try {
			CouponValidator.validate(MNGT_NA_TRPL_C, CPN_MED_C);
			List<TB_GD_EVENT_CPN> couponList =  couponService.getCouponList(
					MNGT_NA_TRPL_C,
					CPN_KDC,
					NA_CPN_C,
					CPN_WRSNM,
					CPN_SC_NO,
					CPN_MED_C,
					DC_VLD_PRD_ST_DT,
					DC_VLD_PRD_ED_DT);
			if(couponList != null && couponList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(TB_GD_EVENT_CPN.class);
				 for(TB_GD_EVENT_CPN coupon : couponList) {
					 dsHelper.setData(coupon);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
			
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*
	 * 할인 쿠폰 무응답 재전송
	 */
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/updateCouponListOz")
	public void updateCouponListOz(HttpServletRequest request, HttpServletResponse response){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		try {
			
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet ds_coupon = in_dsList.get("ds_coupon");
			
			List<TB_GD_EVENT_CPN> couponlist = ValueObjectSetUtil.dataSetToVO(ds_coupon, TB_GD_EVENT_CPN.class);
			
			int res = couponService.updateCouponList(
						ds_coupon,
						couponlist);
			sendData(response,platformData,res,"SUCCESS");
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/**
	 * 할인쿠폰 조회 출력
	 * @param request
	 * @param response
	 * @param TRPL_C_TEXT
	 * @param MNGT_NA_TRPL_C
	 * @param CPN_KDC
	 * @param NA_CPN_C
	 * @param CPN_WRSNM
	 * @param CPN_SC_NO
	 * @param CPN_MED_C
	 * @param DC_VLD_PRD_ST_DT
	 * @param DC_VLD_PRD_ED_DT
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/coupon/getCouponList")
	public RestResult getCouponListOz(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C_TEXT, String sName, String MNGT_NA_TRPL_C, String CPN_KDC, String NA_CPN_C,
			String CPN_WRSNM, String CPN_SC_NO, String CPN_MED_C, String DC_VLD_PRD_ST_DT, String DC_VLD_PRD_ED_DT) {
		
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			CouponValidator.validate(MNGT_NA_TRPL_C, CPN_MED_C);
			
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
			
			List<TB_GD_EVENT_CPN> couponList =  couponService.getCouponList(
					MNGT_NA_TRPL_C,
					CPN_KDC,
					NA_CPN_C,
					CPN_WRSNM,
					CPN_SC_NO,
					CPN_MED_C,
					DC_VLD_PRD_ST_DT,
					DC_VLD_PRD_ED_DT);
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			/**
			 *  주관업체	CLNTNM
				쿠폰바코드	NA_CPN_C
				쿠폰명	CPN_WRSNM
				회차	CPN_SC_NO
				쿠폰종류	CPN_KDC
				쿠폰매체	CPN_MED_C
				할인시작일	DC_VLD_PRD_ST_DT
				할일종료일	DC_VLD_PRD_ED_DT
			 */
			
			for(TB_GD_EVENT_CPN vo : couponList) {
				Map<String, Object> map = new LinkedHashMap<String, Object>();
				map.put("CLNTNM", vo.getCLNTNM());
				map.put("NA_CPN_C", vo.getNA_CPN_C());
				map.put("CPN_WRSNM", vo.getCPN_WRSNM());
				map.put("CPN_SC_NO", vo.getCPN_SC_NO());
				map.put("CPN_KDC", vo.getCPN_KDC());
				map.put("CPN_MED_C", vo.getCPN_MED_C());
				map.put("DC_VLD_PRD_ST_DT", vo.getDC_VLD_PRD_ST_DT());
				map.put("DC_VLD_PRD_ED_DT", vo.getDC_VLD_PRD_ED_DT());
				list.add(map);
			}
			
			ozReport.add(list);
			
			return new RestResultList(ErrorCode.SUCCESS, "", ozReport, (list != null? list.size() : 0));
		} catch (ValidationException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}

	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/getCouponDetailList")
	public void getCouponDetailList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String MNGT_NA_TRPL_C = requestHelper.getParameter("MNGT_NA_TRPL_C");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		String NA_CPN_C = requestHelper.getParameter("NA_CPN_C");
		
		PlatformData platformData = new PlatformData();
		try {
			CouponValidator.validate(MNGT_NA_TRPL_C, CPN_KDC, NA_CPN_C);
			List<TB_GD_EVENT_CPN> couponList = couponService.getCouponDetailList(MNGT_NA_TRPL_C, CPN_KDC, NA_CPN_C);
			if(couponList != null && couponList.size() > 0) {
				 DataSetHelper dsHelper = new DataSetHelper("DATASET");
				 dsHelper.addColumns(TB_GD_EVENT_CPN.class);
				 for(TB_GD_EVENT_CPN coupon : couponList) {
					 dsHelper.setData(coupon);
				 }
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/getCouponErrorList")
	public void getCouponErrorList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String MNGT_NA_TRPL_C = requestHelper.getParameter("MNGT_NA_TRPL_C");
		String CPN_KDC = requestHelper.getParameter("CPN_KDC");
		String NA_CPN_C = requestHelper.getParameter("NA_CPN_C");
		String CPN_WRSNM = requestHelper.getParameter("CPN_WRSNM");
		String CPN_SC_NO = requestHelper.getParameter("CPN_SC_NO");
		String CPN_MED_C = requestHelper.getParameter("CPN_MED_C");
		String DC_VLD_PRD_ST_DT = requestHelper.getParameter("DC_VLD_PRD_ST_DT");
		String DC_VLD_PRD_ED_DT = requestHelper.getParameter("DC_VLD_PRD_ED_DT");
		
		PlatformData platformData = new PlatformData();
		
		try {
			CouponValidator.validate(MNGT_NA_TRPL_C, CPN_MED_C);
			List<Map<String, Object>> couponErrorList =  couponService.getCouponErrorList(MNGT_NA_TRPL_C, CPN_KDC, NA_CPN_C, CPN_WRSNM, CPN_SC_NO, CPN_MED_C, DC_VLD_PRD_ST_DT, DC_VLD_PRD_ED_DT);
			
			if (CollectionUtils.isEmpty(couponErrorList) == false) {
				 DataSetHelper dsHelper = new DataSetHelper("ds_coupon");
				 dsHelper.addColumns(couponErrorList.get(0).keySet());
				 
				 for (Map<String, Object> map : couponErrorList) {
					 dsHelper.setData(map);
				 }
				 
				 platformData.addDataSet(dsHelper.getDataSet());
			}
			
			sendData(response, platformData);
		} catch (AppetizerException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/resendCouponErrorList")
	public void resendCouponErrorList(HttpServletRequest request, HttpServletResponse response){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		try {
			DataSet ds_coupon = requestHelper.getDataSet("ds_coupon");
			String userId = requestHelper.getUserID();
			
			int res = couponService.resendCouponErrorList(ds_coupon, userId);
			
			sendData(response,platformData,res,"SUCCESS");
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/coupon/deleteCouponErrorList")
	public void deleteCouponErrorList(HttpServletRequest request, HttpServletResponse response){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		try {
			DataSet ds_coupon = requestHelper.getDataSet("ds_coupon");
			
			int res = couponService.deleteCouponErrorList(ds_coupon);
			
			sendData(response,platformData,res,"SUCCESS");
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
}
