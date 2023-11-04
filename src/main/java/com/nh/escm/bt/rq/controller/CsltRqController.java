package com.nh.escm.bt.rq.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.ZipUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.bt.rq.service.CsltRqService;
import com.nh.escm.bt.rq.vo.CsltRqVO;
import com.nh.escm.bt.rq.vo.SQLMapNames.CounselingInfoNames;
import com.nh.escm.bt.rq.vo.SQLMapNames.CounselingSendNames;
import com.nh.escm.pt.usrinf.service.SendService;

/**
 * 계약상담
 */
@RestController
public class CsltRqController extends AbstractController {
	
	@Autowired
	private CsltRqService csltRqService;
	
	@Autowired
	private SendService sendService;
		
	/**
	 * 계약상담 > 상담신청조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/bt/rq/retrieveCsltRqList")
	public void retrieveCsltRqList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CAL_FROM = requestHelper.getParameter("cal_from");		// 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to");			// 조회 종료일
			String CBO_STS = requestHelper.getParameter("cbo_sts");			// 진행상태
			String CBO_DSC = requestHelper.getParameter("cbo_dsc");			// 항목구분
			String CBO_COMP = requestHelper.getParameter("cbo_comp");		// 사업자번호, 업체명 선택
			String EDT_COMP = requestHelper.getParameter("edt_comp", "");	// 사업자번호, 업체명 입력값
			String EDT_BUYER = requestHelper.getParameter("edt_buyer", "");	// 담당바이어
			
			EDT_COMP = URLDecoder.decode(EDT_COMP, "UTF-8"); // decode
			EDT_BUYER = URLDecoder.decode(EDT_BUYER, "UTF-8"); // decode
			
			List<CsltRqVO> rcList = csltRqService.retrieveCsltRqList(CAL_FROM, CAL_TO, CBO_STS, CBO_COMP, EDT_COMP, EDT_BUYER, CBO_DSC);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_rclist");
			dsHelper.addColumns(CsltRqVO.class);
			for (CsltRqVO vo : rcList) {
				dsHelper.setData(vo);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (UnsupportedEncodingException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/bt/rq/retrieveCsltRqList")
	public RestResult retrieveCsltRqDscOz(HttpServletRequest request, HttpServletResponse response, String CAL_FROM, String CAL_TO,
												String CBO_STS, String CBO_COMP, String EDT_COMP, String EDT_BUYER){
		
		try{
			List<List<?>> all_list = new ArrayList<List<?>>();
			List<CsltRqVO> CsltList = csltRqService.retrieveCsltRqDscOz(CAL_FROM,CAL_TO,CBO_STS,CBO_COMP,EDT_COMP,EDT_BUYER);
			
			
			
			logger.debug("EDT_BUYER>>>>>>>>>>>>>>>>"+EDT_BUYER);
			List<Map<String,Object>> Cslt = new ArrayList<Map<String,Object>>();
			
			for(CsltRqVO vo : CsltList){
				Map<String,Object> CsltMap = new HashMap<String, Object>();
				CsltMap.put("CSLT_RQ_NO", vo.getCSLT_RQ_NO());
				CsltMap.put("BUYER_VM", vo.getBUYER_NM());
				CsltMap.put("CONM", vo.getCONM());
				CsltMap.put("BZNO",vo.getBZNO());
				CsltMap.put("RQ_DT", vo.getRQ_DT());
				CsltMap.put("STS_NM", vo.getSTS_NM());
				CsltMap.put("MAJ_LATC", vo.getMAJ_LATC());
				CsltMap.put("CSLT_DSC", vo.getCSLT_DSC());
				
				Cslt.add(CsltMap);
			}
			all_list.add(Cslt);
			
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		}catch(AppetizerException e){
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
		
	}
	/**
	 * 상담신청내역팝업
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/bt/rq/retrieveCsltRqDsc")
	public void retrieveCsltRqDsc(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CSLT_RQ_NO = requestHelper.getParameter("cslt_rq_no"); // 상담신청번호
			
			List<CsltRqVO> registerList = csltRqService.retrieveCsltRqDscList(CSLT_RQ_NO);
			List<CsltRqVO> registerFileList = csltRqService.retrieveCsltRqDscFileList(CSLT_RQ_NO);
			List<CsltRqVO> registerFileCompList = csltRqService.retrieveCsltRqDscFileCompList(CSLT_RQ_NO);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_registerList");
			dsHelper.addColumns(CsltRqVO.class);
			for (CsltRqVO vo : registerList) {
				dsHelper.setData(vo);
			}
			
			DataSetHelper dsHelperFile = new DataSetHelper("ds_uploadresult");
			dsHelperFile.addColumns(CsltRqVO.class);
			for (CsltRqVO vo : registerFileList) {
				dsHelperFile.setData(vo);
			}
			
			DataSetHelper dsHelperFileComp = new DataSetHelper("ds_uploadresult00");
			dsHelperFileComp.addColumns(CsltRqVO.class);
			for (CsltRqVO vo : registerFileCompList) {
				dsHelperFileComp.setData(vo);
			}
			
			// 상담관리자 목록 문자열 (구분자: ",")
			DataSetHelper dsCsltManager = new DataSetHelper("ds_csltManager");
			List<Map<String, Object>> list = csltRqService.retrieveHurInf();
			
			if (list != null && list.size() > 0) {
				dsCsltManager.addColumns(list.get(0).keySet());
				for (Map<String, Object> map : list) {
					dsCsltManager.setData(map);
				}
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(dsHelperFile.getDataSet());
			platformData.addDataSet(dsHelperFileComp.getDataSet());
			platformData.addDataSet(dsCsltManager.getDataSet());
			sendData(response, platformData);			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청내역팝업 > 출력
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/oz/bt/rq/retrieveCsltRqDsc")
	public RestResult printRetrieveCsltRqDsc(HttpServletRequest request, HttpServletResponse response, String cslt_rq_no) {
		try {
			List<CsltRqVO> registerList = csltRqService.retrieveCsltRqDscList(cslt_rq_no);
			List<CsltRqVO> registerFileList = csltRqService.retrieveCsltRqDscFileList(cslt_rq_no);
			List<CsltRqVO> registerFileCompList = csltRqService.retrieveCsltRqDscFileCompList(cslt_rq_no);
			
			List<Map<String, Object>> ds_result = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> ds_compInfoFile = new ArrayList<Map<String, Object>>();
			
			Map<String,Object> _ds_result = new HashMap<String, Object>();
			
			_ds_result.put("EVL_HDNGCN", registerList.get(0).getEVL_HDNGCN()); // 입력결과
			_ds_result.put("CHRRNM", registerList.get(0).getCHRRNM()); // 신청자
			_ds_result.put("CHRR_TELNO", registerList.get(0).getCHRR_TELNO()); // 연락처 CHRW_ATEL CHRW_HTEL CHRW_STEL
			_ds_result.put("CHRR_EMAIL", registerList.get(0).getCHRR_EMAIL()); // E-Mail
			_ds_result.put("CHRR_MPNO", registerList.get(0).getCHRR_MPNO()); // 휴대폰 CHRW_MPSVNO CHRW_MPHNO CHRW_MPSQNO
			_ds_result.put("BUYER_SHRT_BZPLNM", registerList.get(0).getBUYER_SHRT_BZPLNM()); // 바이어 사업장명
			_ds_result.put("BUYER_NM", registerList.get(0).getBUYER_NM()); // 바이어명
			_ds_result.put("BUYER_CHRG_BSNNM", registerList.get(0).getBUYER_CHRG_BSNNM()); // 바이어 업무명
			_ds_result.put("BZNO", registerList.get(0).getBZNO()); // 사업자등록번호
			_ds_result.put("CONM", registerList.get(0).getCONM()); // 업체명
			_ds_result.put("REPM", registerList.get(0).getREPM()); // 대표자
			_ds_result.put("REPM_TELNO", registerList.get(0).getREPM_TELNO()); // 대표자연락처 REPM_ATEL REPM_HTEL REPM_STEL
			_ds_result.put("BIZTP", registerList.get(0).getBIZTP()); // 업태
			_ds_result.put("ITM", registerList.get(0).getITM()); // 종목
			_ds_result.put("ZIP", registerList.get(0).getFZIP() + registerList.get(0).getRZIP()); // 우편번호 FZIP RZIP
			_ds_result.put("DONGUP", registerList.get(0).getDONGUP()); // 주소 DONGUP DONGBW
			_ds_result.put("DONGBW", registerList.get(0).getDONGBW()); // 주소 DONGUP DONGBW
			_ds_result.put("BYR_SLAM", registerList.get(0).getBYR_SLAM()); // 연간매출
			_ds_result.put("MSELPL", registerList.get(0).getMSELPL()); // 주판매처
			_ds_result.put("MFO_LATC", registerList.get(0).getMFO_LATC()); // 주력품목
			_ds_result.put("CO_CHR_MFT", registerList.get(0).getCO_CHR_MFT() ); // 회사성격 CO_CHR_MFT CO_CHR_REV CO_CHR_TOT_AGCY CO_CHR_VD
			_ds_result.put("CO_CHR_REV", registerList.get(0).getCO_CHR_REV() ); // 회사성격 CO_CHR_MFT CO_CHR_REV CO_CHR_TOT_AGCY CO_CHR_VD
			_ds_result.put("CO_CHR_TOT_AGCY", registerList.get(0).getCO_CHR_TOT_AGCY() ); // 회사성격 CO_CHR_MFT CO_CHR_REV CO_CHR_TOT_AGCY CO_CHR_VD
			_ds_result.put("CO_CHR_VD", registerList.get(0).getCO_CHR_VD() ); // 회사성격 CO_CHR_MFT CO_CHR_REV CO_CHR_TOT_AGCY CO_CHR_VD
			_ds_result.put("MAJ_LATC", registerList.get(0).getMAJ_LATC()); // 제목
			_ds_result.put("CSLT_RQ_CNTN", registerList.get(0).getCSLT_RQ_CNTN()); // 상담신청내용
			_ds_result.put("RMK", registerList.get(0).getRMK()); // 비고
			
			String CSLT_DSC = registerList.get(0).getCSLT_DSC();
			_ds_result.put("CSLT_DSC", CSLT_DSC); // 항목구분
			_ds_result.put("CSLT_CLS", registerList.get(0).getEVL_HDNG_B5());   // 희망구분(102)
			_ds_result.put("CSLT_CTG1", registerList.get(0).getEVL_HDNG_B5());   // 카테고리대(102)
			_ds_result.put("CSLT_CTG2", registerList.get(0).getEVL_HDNG_B5());   // 카테고리중(102)
			
			_ds_result.put("EVL_HDNG_A1", registerList.get(0).getEVL_HDNG_A1()); // 평가항목 A1
			_ds_result.put("EVL_HDNG_A2", registerList.get(0).getEVL_HDNG_A2()); // 평가항목 A2
			_ds_result.put("EVL_HDNG_A3", registerList.get(0).getEVL_HDNG_A3()); // 평가항목 A3
			_ds_result.put("EVL_HDNG_A4", registerList.get(0).getEVL_HDNG_A4()); // 평가항목 A4
			_ds_result.put("EVL_HDNG_A5", registerList.get(0).getEVL_HDNG_A5()); // 평가항목 A5
			_ds_result.put("EVL_HDNG_A6", registerList.get(0).getEVL_HDNG_A6()); // 평가항목 A6
			
			_ds_result.put("EVL_HDNG_B1", registerList.get(0).getEVL_HDNG_B1());   // 평가항목 B1
			_ds_result.put("EVL_HDNG_B11", registerList.get(0).getEVL_HDNG_B11()); // 평가항목 B11
			_ds_result.put("EVL_HDNG_B2", registerList.get(0).getEVL_HDNG_B2());   // 평가항목 B2
			_ds_result.put("EVL_HDNG_B3", registerList.get(0).getEVL_HDNG_B3());   // 평가항목 B3
			_ds_result.put("EVL_HDNG_B4", registerList.get(0).getEVL_HDNG_B4());   // 평가항목 B4
			_ds_result.put("EVL_HDNG_B5", registerList.get(0).getEVL_HDNG_B5());   // 평가항목 B5

			String FILE_NAMES = ""; // 회사소개자료 파일명
			String FILE_SIZES = ""; // 회사소개자료 파일사이즈
			
			for (CsltRqVO vo : registerFileCompList) {
				FILE_NAMES += "," + vo.getORGFNAME();
				FILE_SIZES += "," + vo.getFILESIZE();
			}
			
			if (!StringUtils.isEmpty(FILE_NAMES)) {
				FILE_NAMES = FILE_NAMES.substring(1, FILE_NAMES.length());
				FILE_SIZES = FILE_SIZES.substring(1, FILE_SIZES.length());
			}
			
			_ds_result.put("FILE_NAMES", FILE_NAMES);
			_ds_result.put("FILE_SIZES", FILE_SIZES);
			
			if ("102".equals(CSLT_DSC)) {
				// 신규 - 파일 갯수와 저장방식이 다름
				String[] fileDcm = {"01", "02", "03", "04", "05", "06", "07", "08", "09", "041", "042", "05", "061", "062", "063", "064", "065", "071", "072"};
				
				for (String dcmC : fileDcm) {
					String orgfname = "미제출"; // 서류코드별 파일명 설정 (항목당 첨부파일은 하나임)
					
					for (CsltRqVO vo : registerFileList) {
						if (dcmC.equals(vo.getDCM_C())) { // 서류코드
							orgfname = vo.getORGFNAME(); // 파일명
							break;
						}
					}
					
					_ds_result.put("EVL_FILE_" + dcmC, orgfname); // 평가표 첨부 파일
				}
			} else {
				// 기존
				for (int i = 0; i < 10; i++) {
					String dcm_c = (i < 10) ? "0" + i : Integer.toString(i); // 00 ~ 09
					String orgfname = ""; // 서류코드별 파일명 설정 (항목당 첨부파일은 하나임)
					
					for (CsltRqVO vo : registerFileList) {
						if (dcm_c.equals(vo.getDCM_C())) { // 서류코드
							orgfname = vo.getORGFNAME(); // 파일명
							break;
						}
					}
					
					_ds_result.put("EVL_FILE_" + dcm_c, orgfname); // 평가표 첨부 파일 EVL_FILE_00 ~ EVL_FILE_09
				}
			}
			
			ds_result.add(_ds_result);

			/*for (CsltRqVO csltRqVO:registerFileCompList) {
				Map<String, Object> _compInfoFile = new LinkedHashMap<String, Object>();
				
				_compInfoFile.put("FILENAME", csltRqVO.getORGFNAME());
				_compInfoFile.put("FILESIZE", csltRqVO.getFILESIZE());
				
				ds_compInfoFile.add(_compInfoFile);
			}*/
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(ds_result);
			all_list.add(ds_compInfoFile);
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/**
	 * 계약상담 > 상담신청조회 > 상담신청상세
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/bt/rq/retrieveCsltRqDscList")
	public void retrieveCsltRqDscList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String cslt_rq_no = requestHelper.getParameter("cslt_rq_no");
			
			// 계약상담 기본 정보
			Map<String, Object> map = csltRqService.retrieveCounselingDsc(cslt_rq_no);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_in");
			dsHelper.addColumns(CounselingInfoNames.class);
			dsHelper.setData(map);
			
			// 수신 내역
			List<Map<String, Object>> counselingList = csltRqService.retrieveCounselingList(cslt_rq_no, requestHelper.getUserType());
			
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
	 * 상담신청상세 > 저장
	 */
	@RequestMapping(value = "/rest/bt/rq/saveCsltRqNtc")
	public void saveCsltRqNtc(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String USR_ID = requestHelper.getUserID();
			String USR_TPC = requestHelper.getUserType();
			
			String CSLT_RQ_NO = requestHelper.getParameter("CSLT_RQ_NO");
			String TMS_STS = requestHelper.getParameter("STS");
			String TINM = requestHelper.getParameter("TINM"); // 제목
			String CNTN = requestHelper.getParameter("CNTN"); // 내용
			
			TINM = URLDecoder.decode(TINM, "UTF-8"); // decode
			CNTN = URLDecoder.decode(CNTN, "UTF-8"); // decode
			
			String MON = requestHelper.getParameter("MON"); // 거절기간
			String REJECT_ALLOW = requestHelper.getParameter("REJECT_ALLOW"); // 거절중복 허용여부: 거절중복 취소 기능
			
			
			// 진행상태 변경
			csltRqService.updateCtrCsltRqSts(CSLT_RQ_NO, TMS_STS, USR_ID, MON, REJECT_ALLOW);
			
			// 계약상담 기본 정보
			Map<String, Object> map = csltRqService.retrieveCounselingDsc(CSLT_RQ_NO);
			
			String STS = (String) map.get("STS");
			
			String RLTM_NTC_SMS = "1"; // SMS 전송여부 requestHelper.getParameter("rltm_ntc_sms");
			String SMS_NATV_NO = ""; // SMS고유번호
			String RLTM_NTC_EMAIL = requestHelper.getParameter("rltm_ntc_email");
			String EMAIL_NATV_NO = ""; // 이메일고유번호
			
			// 이메일
			if ("1".equals(RLTM_NTC_EMAIL)) {
				String CHRRNM = (String) map.get("CHRRNM");
				String CHRR_EMAIL = (String) map.get("CHRR_EMAIL");
				String BUYER_NM = (String) map.get("BUYER_NM");
				String BUYER_EMAIL = (String) map.get("BUYER_EMAIL");
				
				String SDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 발송 날짜를 나타내는 필드입니다. 
				String TDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 수신 확인 종료 시각을 나타내는 필드입니다.
				String type = "0"; /* 0 =text 형식 , 0 =html 형식 */
				
				EMAIL_NATV_NO = sendService.sendEmail(TINM, BUYER_EMAIL, CHRR_EMAIL, SDATE, TDATE, CNTN, type,
						BUYER_NM, CHRRNM) + "";
			}

			// 이력추가
			csltRqService.insertCtrCsltNtc(CSLT_RQ_NO, STS, TINM, CNTN, USR_TPC,
					RLTM_NTC_SMS, SMS_NATV_NO, RLTM_NTC_EMAIL, EMAIL_NATV_NO, USR_ID);
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/**
	 * 상담신청상세 > 발송
	 */
	@RequestMapping(value = "/rest/bt/rq/saveCsltRqSend")
	public void saveCsltRqSend(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String USR_ID = requestHelper.getUserID();
			String USR_TPC = requestHelper.getUserType();
			
			String CSLT_RQ_NO = requestHelper.getParameter("CSLT_RQ_NO");
			String TINM = requestHelper.getParameter("TINM"); // 제목
			String CNTN = requestHelper.getParameter("CNTN"); // 내용
			
			TINM = URLDecoder.decode(TINM, "UTF-8"); // decode
			CNTN = URLDecoder.decode(CNTN, "UTF-8"); // decode
			
			// 계약상담 기본 정보
			Map<String, Object> map = csltRqService.retrieveCounselingDsc(CSLT_RQ_NO);
			
			String STS = (String) map.get("STS");
			
			String RLTM_NTC_SMS = "1"; // SMS 전송여부 requestHelper.getParameter("rltm_ntc_sms");
			String SMS_NATV_NO = ""; // SMS고유번호
			String RLTM_NTC_EMAIL = requestHelper.getParameter("rltm_ntc_email");
			String EMAIL_NATV_NO = ""; // 이메일고유번호
			
			// 이메일
			if ("1".equals(RLTM_NTC_EMAIL)) {
				String CHRRNM = (String) map.get("CHRRNM");
				String CHRR_EMAIL = (String) map.get("CHRR_EMAIL");
				String BUYER_NM = (String) map.get("BUYER_NM");
				String BUYER_EMAIL = (String) map.get("BUYER_EMAIL");
				
				String SDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 발송 날짜를 나타내는 필드입니다. 
				String TDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 수신 확인 종료 시각을 나타내는 필드입니다.
				String type = "0"; /* 0 =text 형식 , 0 =html 형식 */
				
				EMAIL_NATV_NO = sendService.sendEmail(TINM, BUYER_EMAIL, CHRR_EMAIL, SDATE, TDATE, CNTN, type,
						BUYER_NM, CHRRNM) + "";
			}
			
			// 이력추가
			csltRqService.insertCtrCsltNtc(CSLT_RQ_NO, STS, TINM, CNTN, USR_TPC,
					RLTM_NTC_SMS, SMS_NATV_NO, RLTM_NTC_EMAIL, EMAIL_NATV_NO, USR_ID);
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청상세 > 담당자배정
	 */
	@RequestMapping(value = "/rest/bt/rq/saveCtrCsltRqBuyer")
	public void saveCtrCsltRqBuyer(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CSLT_RQ_NO = requestHelper.getParameter("CSLT_RQ_NO");
			String BUYER_SHRT_BZPLNM = requestHelper.getParameter("BUYER_SHRT_BZPLNM");
			String BUYER_CHRG_BSNNM = requestHelper.getParameter("BUYER_CHRG_BSNNM");
			String BUYER_NM = requestHelper.getParameter("BUYER_NM");
			String NA_TRPL_C = requestHelper.getParameter("NA_TRPL_C");
			String BUYER_ENO = requestHelper.getParameter("BUYER_ENO");
			
			BUYER_SHRT_BZPLNM = URLDecoder.decode(BUYER_SHRT_BZPLNM, "UTF-8"); // decode
			BUYER_CHRG_BSNNM = URLDecoder.decode(BUYER_CHRG_BSNNM, "UTF-8"); // decode
			BUYER_NM = URLDecoder.decode(BUYER_NM, "UTF-8"); // decode
			
			csltRqService.updateCtrCsltRqBuyer(CSLT_RQ_NO, BUYER_SHRT_BZPLNM, BUYER_CHRG_BSNNM, BUYER_NM, NA_TRPL_C,
					BUYER_ENO, requestHelper.getUserID());
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (UnsupportedEncodingException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청상세 > zip다운로드
	 */
	
	@RequestMapping(value = "/rest/bt/rq/downloadZipFile", method = RequestMethod.POST)
	public void fileZipDownload(HttpServletRequest request, HttpServletResponse response, String csltRqNo) throws UnsupportedEncodingException {
		
		List<Map<String, Object>> fileList = csltRqService.retrieveCsltRqZipFileList(csltRqNo);
		List<Map<String, String>> zipFileList = new ArrayList<Map<String, String>>();
		for (int i = 0; i < fileList.size(); i++) {
			String fileName = (String) fileList.get(i).get("SYSTEMFILENAME");
			String orgName = (String) fileList.get(i).get("ORGFNAME");
			String dcmName = (String) fileList.get(i).get("DCM_NM");
			String seal = (String) fileList.get(i).get("SEAL");
			String realPath = null;

			if (StringUtils.isEmpty(fileName) || StringUtils.isEmpty(orgName)) {
				continue;
			}

			if ("Y".equals(seal)) {
				realPath = Configurer.getProperty("file.sealReal.path");
			} else if ("ELT".equals(seal)) {// 직인
				realPath = Configurer.getProperty("file.realElt.path");
			} else if ("CLT".equals(seal)) {// 전자계약
				realPath = Configurer.getProperty("file.realClt.path");
			} else if ("ofanc".equals(seal)) {// 농협공지사항
				realPath = Configurer.getProperty("file.ofanc.path");
			} else if ("taxXml".equals(seal)) {// 세금계산서xml
				realPath = Configurer.getProperty("file.taxXml.path");
			} else if ("refBbs".equals(seal)) {// 게시판-자료실
				realPath = Configurer.getProperty("file.refBbs.path");
			} else if ("askBbs".equals(seal)) {// 게시판-자료요청
				realPath = Configurer.getProperty("file.askBbs.path");
			} else {
				realPath = Configurer.getProperty("file.real.path");
			}

			File dir = new File(realPath);

			File f = new File(dir.getAbsolutePath() + File.separator + fileName);
			if (f.isFile()) {
				String restrictChars = "|\\\\?*<\":>/";
				String regExpr = "[" + restrictChars + "]+";
				String newName = dcmName + "_" + orgName;

				// 파일명으로 사용 불가능한 특수문자 제거
				newName = newName.replaceAll(regExpr, "_");

				Map<String, String> fileMap = new HashMap<String, String>();
				fileMap.put("fileName", newName);
				fileMap.put("filePath", dir.getAbsolutePath() + File.separator + fileName);
				zipFileList.add(fileMap);
			}
		}

		if (fileList != null && fileList.size() > 0) {
			try {
				ZipUtil.makeZip(request, response, zipFileList, "계약상담신청내역(" + csltRqNo + ")");
			} catch (IOException e) {
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		} else {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 상담신청상세 > 수신내역 > 차단
	 */
	/*@RequestMapping(value = "/rest/bt/rq/saveCsltRqBlock")
	public void saveCsltRqBlock(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			DataSet dsReceive = requestHelper.getDataSet("ds_receiveU");
			
			if (dsReceive != null) {
				List<CsltRqVO> receiveList = requestHelper.getValueObjects(CsltRqVO.class, dsReceive);
				
				for (CsltRqVO vo : receiveList) {
					vo.setLS_CHGM(requestHelper.getUserID());
				}
				
				csltRqService.updateCtrCsltNtc(receiveList);
			}
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}*/
	
}
