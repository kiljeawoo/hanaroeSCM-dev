package com.nh.escm.bt.rqBrk.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.bt.rq.service.CsltRqService;
import com.nh.escm.bt.rq.vo.CsltRqVO;
import com.nh.escm.bt.rq.vo.SQLMapNames.CounselingInfoNames;
import com.nh.escm.bt.rq.vo.SQLMapNames.CounselingSendNames;
import com.nh.escm.bt.rqBrk.service.RqBrkService;
import com.nh.escm.bt.rqBrk.vo.RqBrkVO;

/**
 * 계약상담 (신청자) 
 */
@Controller
public class RqBrkController extends AbstractController {
	
	private static final String USR_ID = "USR_ID"; // 신청자ID
	private static final String USR_TPC = "01"; // 신청자 유형
	
	@Autowired
	private RqBrkService rqBrkService;
	
	@Autowired
	private CsltRqService csltRqService;
	
	/**
	 * 신규계약 상담신청 > 등록 (신청자)
	 */
	@RequestMapping(value = "/rest/bt/rqBrk/insertCsltRq")
	public void insertCsltRq(HttpServletRequest request, HttpServletResponse response) throws IOException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			DataSet dsRc = requestHelper.getDataSet("ds_rc");
			DataSet dsRcEv = requestHelper.getDataSet("ds_rcev");
			DataSet dsUR = requestHelper.getDataSet("ds_uploadresult");
			DataSet dsUR00 = requestHelper.getDataSet("ds_uploadresult00");
			
			// 기본정보 및 평가정보
			List<CsltRqVO> rcList = requestHelper.getValueObjects(CsltRqVO.class, dsRc);
			CsltRqVO rc = rcList.get(0);
			
			/*
			// 기본정보
			rc.setBZNO(dsRc.getString(0, "BZNO"));
			rc.setCHRRNM(dsRc.getString(0, "CHRRNM"));
			rc.setCHRR_TELNO(dsRc.getString(0, "CHRR_TELNO"));
			rc.setCHRR_EMAIL(dsRc.getString(0, "CHRR_EMAIL"));
			rc.setCHRR_MPNO(dsRc.getString(0, "CHRR_MPNO"));
			
			rc.setCONM(dsRc.getString(0, "CONM"));
			rc.setREPM(dsRc.getString(0, "REPM"));
			rc.setREPM_TELNO(dsRc.getString(0, "REPM_TELNO"));
			rc.setBIZTP(dsRc.getString(0, "BIZTP"));
			rc.setITM(dsRc.getString(0, "ITM"));
			rc.setFZIP(dsRc.getString(0, "FZIP"));
			rc.setRZIP(dsRc.getString(0, "RZIP"));
			rc.setDONGUP(dsRc.getString(0, "DONGUP"));
			rc.setDONGBW(dsRc.getString(0, "DONGBW"));
			
			rc.setBYR_SLAM(dsRc.getString(0, "BYR_SLAM"));
			rc.setMSELPL(dsRc.getString(0, "MSELPL"));
			rc.setMFO_LATC(dsRc.getString(0, "MFO_LATC"));
			rc.setCO_CHR_MFT(dsRc.getString(0, "CO_CHR_MFT"));
			rc.setCO_CHR_REV(dsRc.getString(0, "CO_CHR_REV"));
			rc.setCO_CHR_TOT_AGCY(dsRc.getString(0, "CO_CHR_TOT_AGCY"));
			rc.setCO_CHR_VD(dsRc.getString(0, "CO_CHR_VD"));
			rc.setMAJ_LATC(dsRc.getString(0, "MAJ_LATC"));
			rc.setCSLT_RQ_CNTN(dsRc.getString(0, "CSLT_RQ_CNTN"));
			rc.setRMK(dsRc.getString(0, "RMK"));
			rc.setCSLT_DSC(dsRc.getString(0, "CSLT_DSC"));
			*/
			
			// 평가정보
			rc.setEVL_HDNG_A1(dsRcEv.getString(0, "EVL_HDNG_A1"));
			rc.setEVL_HDNG_A2(dsRcEv.getString(0, "EVL_HDNG_A2"));
			rc.setEVL_HDNG_A3(dsRcEv.getString(0, "EVL_HDNG_A3"));
			rc.setEVL_HDNG_A4(dsRcEv.getString(0, "EVL_HDNG_A4"));
			rc.setEVL_HDNG_A5(dsRcEv.getString(0, "EVL_HDNG_A5"));
			rc.setEVL_HDNG_A6(dsRcEv.getString(0, "EVL_HDNG_A6"));
			rc.setEVL_HDNG_B1(dsRcEv.getString(0, "EVL_HDNG_B1"));
			rc.setEVL_HDNG_B11(dsRcEv.getString(0, "EVL_HDNG_B11"));
			rc.setEVL_HDNG_B2(dsRcEv.getString(0, "EVL_HDNG_B2"));
			rc.setEVL_HDNG_B3(dsRcEv.getString(0, "EVL_HDNG_B3"));
			rc.setEVL_HDNG_B4(dsRcEv.getString(0, "EVL_HDNG_B4"));
			rc.setEVL_HDNG_B5(dsRcEv.getString(0, "EVL_HDNG_B5"));
			rc.setEVL_HDNGCN(dsRcEv.getString(0, "EVL_HDNGCN"));
			
			
			Map<String, Object> buyerInfo = rqBrkService.rejectedInOneYear(rc.getBZNO()); // 상담신청 존재여부
			
			if (buyerInfo == null) {
				// 상담신청 등록
				rqBrkService.insertCsltRq(rc, dsUR, dsUR00, USR_TPC, USR_ID); 
				sendData(response, new PlatformData(), 1, "result.message.save.success");
			} else {
				// sendData(response, new PlatformData(), 0, "1년이내 상담신청내역이 존재합니다. "); // 없음
				sendData(response, new PlatformData(), -1, "1년이내 거절된 계약상담 내역이 있습니다. \n " + buyerInfo.get("USR_NM") + " 바이어에게 문의 하세요. ");
			}

			

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청내역팝업 > 저장 (신청자)
	 */
	@RequestMapping(value = "/rest/bt/rqBrk/saveCsltRq")
	public void saveCsltRq(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			DataSet dsRl = requestHelper.getDataSet("ds_registerList");
			DataSet dsUR = requestHelper.getDataSet("ds_uploadresult");
			DataSet dsUR00 = requestHelper.getDataSet("ds_uploadresult00");
			
			// 기본정보 및 평가정보
			List<CsltRqVO> rcList = requestHelper.getValueObjects(CsltRqVO.class, dsRl);
			CsltRqVO rc = rcList.get(0);
			
			/*
			// 기본정보
			rc.setCSLT_RQ_NO(dsRl.getString(0, "CSLT_RQ_NO"));
			
			rc.setBZNO(dsRl.getString(0, "BZNO"));
			rc.setCHRRNM(dsRl.getString(0, "CHRRNM"));
			rc.setCHRR_TELNO(dsRl.getString(0, "CHRR_TELNO"));
			rc.setCHRR_EMAIL(dsRl.getString(0, "CHRR_EMAIL"));
			rc.setCHRR_MPNO(dsRl.getString(0, "CHRR_MPNO"));
			
			rc.setCONM(dsRl.getString(0, "CONM"));
			rc.setREPM(dsRl.getString(0, "REPM"));
			rc.setREPM_TELNO(dsRl.getString(0, "REPM_TELNO"));
			rc.setBIZTP(dsRl.getString(0, "BIZTP"));
			rc.setITM(dsRl.getString(0, "ITM"));
			rc.setFZIP(dsRl.getString(0, "FZIP"));
			rc.setRZIP(dsRl.getString(0, "RZIP"));
			rc.setDONGUP(dsRl.getString(0, "DONGUP"));
			rc.setDONGBW(dsRl.getString(0, "DONGBW"));
			
			rc.setBYR_SLAM(dsRl.getString(0, "BYR_SLAM"));
			rc.setMSELPL(dsRl.getString(0, "MSELPL"));
			rc.setMFO_LATC(dsRl.getString(0, "MFO_LATC"));
			rc.setCO_CHR_MFT(dsRl.getString(0, "CO_CHR_MFT"));
			rc.setCO_CHR_REV(dsRl.getString(0, "CO_CHR_REV"));
			rc.setCO_CHR_TOT_AGCY(dsRl.getString(0, "CO_CHR_TOT_AGCY"));
			rc.setCO_CHR_VD(dsRl.getString(0, "CO_CHR_VD"));
			rc.setMAJ_LATC(dsRl.getString(0, "MAJ_LATC"));
			rc.setCSLT_RQ_CNTN(dsRl.getString(0, "CSLT_RQ_CNTN"));
			rc.setRMK(dsRl.getString(0, "RMK"));
			
			// 평가정보
			rc.setEVL_HDNG_A1(dsRl.getString(0, "EVL_HDNG_A1"));
			rc.setEVL_HDNG_A2(dsRl.getString(0, "EVL_HDNG_A2"));
			rc.setEVL_HDNG_A3(dsRl.getString(0, "EVL_HDNG_A3"));
			rc.setEVL_HDNG_A4(dsRl.getString(0, "EVL_HDNG_A4"));
			rc.setEVL_HDNG_A5(dsRl.getString(0, "EVL_HDNG_A5"));
			rc.setEVL_HDNG_A6(dsRl.getString(0, "EVL_HDNG_A6"));
			rc.setEVL_HDNG_B1(dsRl.getString(0, "EVL_HDNG_B1"));
			rc.setEVL_HDNG_B11(dsRl.getString(0, "EVL_HDNG_B11"));
			rc.setEVL_HDNG_B2(dsRl.getString(0, "EVL_HDNG_B2"));
			rc.setEVL_HDNG_B3(dsRl.getString(0, "EVL_HDNG_B3"));
			rc.setEVL_HDNG_B4(dsRl.getString(0, "EVL_HDNG_B4"));
			rc.setEVL_HDNG_B5(dsRl.getString(0, "EVL_HDNG_B5"));
			rc.setEVL_HDNGCN(dsRl.getString(0, "EVL_HDNGCN"));
			*/
			
			// 상담신청 저장
			rqBrkService.saveCsltRq(rc, dsUR, dsUR00, USR_TPC, USR_ID);
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청내역확인 (신청자)
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/bt/rqBrk/retrieveRqBrk")
	public void retrieveRequestList(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String MAE_BZNO = requestHelper.getParameter("mae_bzno"); // 사업자등록번호
			String EDT_CHRRNM = requestHelper.getParameter("edt_chrrNm"); // 신청자
			String CHRR_MPNO = requestHelper.getParameter("chrr_mpno"); // 휴대폰
			
			EDT_CHRRNM = URLDecoder.decode(EDT_CHRRNM, "UTF-8"); // decode
			
			boolean isExist = rqBrkService.existsCsltRq(MAE_BZNO, EDT_CHRRNM, CHRR_MPNO); // 상담신청 존재여부
			
			if (isExist) {
				sendData(response, new PlatformData(), 1, "SUCCESS"); // 있음
			} else {
				sendData(response, new PlatformData(), 0, "SUCCESS"); // 없음
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청목록 (신청자)
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/bt/rqBrk/retrieveRqBrkList")
	public void retrieveRqBrkList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String MAE_BZNO = requestHelper.getParameter("mae_bzno");		// 사업자등록번호
			String EDT_CHRRNM = requestHelper.getParameter("edt_chrrNm");	// 신청자
			String CHRR_MPNO = requestHelper.getParameter("chrr_mpno");		// 휴대폰
			String CAL_FROM = requestHelper.getParameter("cal_from");		// 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to");			// 조회 종료일
			String CBO_STS = requestHelper.getParameter("cbo_sts");			// 진행상태 목록
			String CBO_DSC = requestHelper.getParameter("cbo_dsc");			// 신청항목 목록
			String EDT_BUYER = requestHelper.getParameter("edt_buyer");		// 담당바이어
			
			List<RqBrkVO> rcList = rqBrkService.retrieveRqBrkList(MAE_BZNO, EDT_CHRRNM, CHRR_MPNO, CAL_FROM, CAL_TO, CBO_STS, EDT_BUYER, CBO_DSC);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_sum");
			dsHelper.addColumns(RqBrkVO.class);
			for (RqBrkVO vo : rcList) {
				dsHelper.setData(vo);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청상세 (신청자)
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/bt/rqBrk/retrieveRqBrkDscList")
	public void retrieveRqBrkDscList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CSLT_RQ_NO = requestHelper.getParameter("CSLT_RQ_NO");
			
			// 계약상담 기본 정보
			Map<String, Object> map = csltRqService.retrieveCounselingDsc(CSLT_RQ_NO);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_in");
			dsHelper.addColumns(CounselingInfoNames.class);
			dsHelper.setData(map);
			
			// 수신 내역
			List<Map<String, Object>> counselingList = csltRqService.retrieveCounselingList(CSLT_RQ_NO, requestHelper.getUserType());
			
			DataSetHelper dsHelper_re = new DataSetHelper("ds_receive");
			dsHelper_re.addColumns(CounselingSendNames.class);
			for (Map<String, Object> map_re : counselingList) {
				dsHelper_re.setData(map_re);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(dsHelper_re.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	/**
	 * 상담신청상세 > 저장 (신청자)
	 */
	@RequestMapping(value = "/rest/bt/rqBrk/saveRqBrkNtc")
	public void saveRqBrkNtc(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CSLT_RQ_NO = requestHelper.getParameter("CSLT_RQ_NO");
			String TMS_STS = requestHelper.getParameter("STS");
			String TINM = requestHelper.getParameter("TINM"); // 제목
			String CNTN = requestHelper.getParameter("CNTN"); // 내용
			
			TINM = URLDecoder.decode(TINM, "UTF-8"); // decode
			CNTN = URLDecoder.decode(CNTN, "UTF-8"); // decode
			
			// 진행상태 변경
			csltRqService.updateCtrCsltRqSts(CSLT_RQ_NO, TMS_STS, USR_ID, "0" ,"N"); // 거절기간 0, 거절중복허요 "N"
			
			// 이력추가
			rqBrkService.addCtrCsltNtc(CSLT_RQ_NO, TINM, CNTN, USR_TPC, USR_ID);
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청상세 > 발송 (신청자)
	 */
	@RequestMapping(value = "/rest/bt/rqBrk/saveRqBrkSend")
	public void saveRqBrkSend(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CSLT_RQ_NO = requestHelper.getParameter("CSLT_RQ_NO");
			String TINM = requestHelper.getParameter("TINM"); // 제목
			String CNTN = requestHelper.getParameter("CNTN"); // 내용
			
			TINM = URLDecoder.decode(TINM, "UTF-8"); // decode
			CNTN = URLDecoder.decode(CNTN, "UTF-8"); // decode
			
			// 이력추가
			rqBrkService.addCtrCsltNtc(CSLT_RQ_NO, TINM, CNTN, USR_TPC, USR_ID);
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
}
