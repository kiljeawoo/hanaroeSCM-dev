package com.nh.escm.ct.eltctrw.controller;

import java.io.ByteArrayInputStream;
/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.ZipUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMaker;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.ct.eltctrw.service.AnwEltCtrwDrupService;
import com.nh.escm.ct.eltctrw.service.EltAuthService;
import com.nh.escm.ct.eltctrw.service.EltCtrwService;
import com.nh.escm.ct.eltctrw.vo.CtEtcItemVO;
import com.nh.escm.ct.eltctrw.vo.EltAuthVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDcmApdVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwVO;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.AddEltCtrwDtlNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.CtEltCtrwDtlNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.CtEtcItem;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.DlvgCompEmpDspcPmiwNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.DspcPerWrkPrdPmiwNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EltCtrwDtlFileYn;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EltCtrwDtlKdNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EltCtrwDtlNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EltCtrwDtlNtcNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EltCtrwNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EltCtrwStyNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EtcEltCtrwNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EvtAmPmiwNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.LgqtTrFeePmiwNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.PmiwDtlNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.SctrwAllXpcPmtnCstNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.SctrwCtrMrgnRtNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.SctrwDtlNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.SctrwNmlMrgnRtNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.eltCtrwAmnNames;
import com.nh.escm.util.PageHelper;

@Controller
public class EltCtrwController extends AbstractController {
	
	@Autowired
	private EltCtrwService eltctrwService;
	
	@Autowired
	private EltAuthService eltAuthService;
	
	@Autowired
	private AnwEltCtrwDrupService anwEltCtrwDrupService;
	
	//전자 계약서 조회 (협력업체)
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveSubEltCtrwList")
	public void retrieveRequestList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String CBO_CTRW = requestHelper.getParameter("cbo_ctrw"); // 메인계약서종류
			String CAL_FROM = requestHelper.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to"); // 조회 종료일
			String CBO_STS = requestHelper.getParameter("cbo_sts"); // 계약상태
			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String EDT_BUYER_BLG = requestHelper.getParameter("edt_buyer_blg"); // 바이어소속
			String NA_TRPL_C = requestHelper.getGlnCode(); // 바이어소속

			List<EltCtrwVO> rscList = eltctrwService.retrieveSubEltCtrwList(CBO_CTRW, CAL_FROM, CAL_TO, CBO_STS, CBO_CONTDAY, EDT_BUYER_BLG, NA_TRPL_C);
			if (rscList != null && rscList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_rsclist");
				dsHelper.addColumns(EltCtrwVO.class);
				for (EltCtrwVO vo : rscList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	//전자 계약서 조회 (협력업체)
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveSubEltCtrwPrgStsList")
	public void retrieveSubEltCtrwPrgStsList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String CBO_CTRW = requestHelper.getParameter("cbo_ctrw"); // 메인계약서종류
			String CAL_FROM = requestHelper.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to"); // 조회 종료일
			String CBO_STS = requestHelper.getParameter("cbo_sts"); // 계약상태
			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String EDT_BUYER_BLG = requestHelper.getParameter("edt_buyer_blg"); // 바이어소속
			String NA_TRPL_C = requestHelper.getGlnCode(); // 협력업체

			List<EltCtrwVO> rscList = eltctrwService.retrieveSubEltCtrwPrgStsList(CBO_CTRW, CAL_FROM, CAL_TO, CBO_STS, CBO_CONTDAY, EDT_BUYER_BLG, NA_TRPL_C);

			if (rscList != null && rscList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_rsclist");
				dsHelper.addColumns(EltCtrwVO.class);
				for (EltCtrwVO vo : rscList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	//전자 계약서 조회 (협력업체)
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveSubEltCtrwPrgStsBuyerList")
	public void retrieveSubEltCtrwPrgStsBuyerList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String CBO_CTRW = requestHelper.getParameter("cbo_ctrw"); // 메인계약서종류
			String CAL_FROM = requestHelper.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to"); // 조회 종료일
			String CBO_STS = requestHelper.getParameter("cbo_sts"); // 계약상태
			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String EDT_BUYER_BLG = requestHelper.getParameter("edt_buyer_blg"); // 바이어소속
			String NA_TRPL_C = ""; // 협력업체

			List<EltCtrwVO> rscList = eltctrwService.retrieveSubEltCtrwPrgStsList(CBO_CTRW, CAL_FROM, CAL_TO, CBO_STS, CBO_CONTDAY, EDT_BUYER_BLG, NA_TRPL_C);

			if (rscList != null && rscList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_rsclist");
				dsHelper.addColumns(EltCtrwVO.class);
				for (EltCtrwVO vo : rscList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	//전자 계약서 조회 엑셀 다운로드 (농협)
	@RequestMapping(method=RequestMethod.GET, value = "rest/excel/downloadExcelSubEltCtrw")
	public void downloadExcelSubEltCtrw(HttpServletRequest request, HttpServletResponse response) {
		String fileName = request.getParameter("fileName"); // 파일명
		String EDT_BUYER_BLG = request.getParameter("edt_buyer_blg"); // 바이어 소속
		String FV_MNCTRWKDNM = request.getParameter("fv_mnCtrwKdNm"); // 계약서 종류
		String FV_STSNM = request.getParameter("fv_stsNm"); // 계약서 상태

		if (StringUtils.isNotEmpty(FV_MNCTRWKDNM)) {
			try {
				FV_MNCTRWKDNM = URLDecoder.decode(FV_MNCTRWKDNM, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		if (StringUtils.isNotEmpty(EDT_BUYER_BLG)) {
			try {
				EDT_BUYER_BLG = URLDecoder.decode(EDT_BUYER_BLG, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		if (StringUtils.isNotEmpty(FV_STSNM)) {
			try {
				FV_STSNM = URLDecoder.decode(FV_STSNM, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		try {
			String CBO_CONTDAY = request.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String CAL_FROM = request.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = request.getParameter("cal_to"); // 조회 종료일
			String CBO_STS = request.getParameter("fv_sts"); // 계약상태
			String CBO_CTRW = request.getParameter("fv_mnCtrwKd"); // 계약서 종류
			String NA_TRPL_C = request.getParameter("NaTrplC"); // GLN

			List<EltCtrwVO> rscList = eltctrwService.retrieveSubEltCtrwList(CBO_CTRW, CAL_FROM, CAL_TO, CBO_STS, CBO_CONTDAY, EDT_BUYER_BLG, NA_TRPL_C);

			String[] header = { "계약서 번호", "계약서 종류", "바이어소속", "바이어 상호", "바이어거래처코드", "계약일", "진행상태", "바이어 등록시간" };
			String[] keyIndex = { "ELT_CTRW_NO", "MN_CTRW_KD_NM", "BUYER_BLG", "CTR_CHRR_MTALNM", "BUYER_NA_TRPL_C", "CTR_DT", "STS_NM", "FSRG_DTM" };

			AbstractModel model = new DefaultModel("전자계약서조회", header, keyIndex, rscList);
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);

			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "전자계약서조회(협력업체)");
			searchMap.put("메인계약서종류", FV_MNCTRWKDNM);
			searchMap.put("계약상태", FV_STSNM);
			if ("1".equals(CBO_CONTDAY)) {
				searchMap.put("조회시작일", CAL_FROM + " ~" + CAL_TO);
			} else if ("2".equals(CBO_CONTDAY)) {
				searchMap.put("조회종료일", CAL_FROM + " ~" + CAL_TO);
			}
			searchMap.put("바이어소속", EDT_BUYER_BLG);

			excelMaker.createSearchSheet(searchMap);
			excelMaker.write(response, fileName);

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}

	// 전자계약 바이어 변경 신청상태UPDATE
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/EltupdateStat")
	public void EltupdateStat(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds = requestHelper.getDataSet("ds_elt");
		List<EltCtrwVO> list = ValueObjectSetUtil.dataSetToVO(ds, EltCtrwVO.class);
		String ELT_CTRW_NO = null;
		String BUYER_ENO = null; // 기존 바이어
		String BUYER_NM = null;
		String CHG_BUYER_ENO = null;// 변경될 바이어
		String CHG_BUYER_NM = null;
		String CHG_REQ_STAT = null;
		
		try {
			for (int i = 0; i < ds.getRowCount(); i++) {
				EltCtrwVO vo = list.get(i);
				ELT_CTRW_NO = vo.getELT_CTRW_NO();
				BUYER_ENO = vo.getBUYER_ENO();
				BUYER_NM = vo.getBUYER_NM();
				CHG_BUYER_ENO = vo.getCHG_BUYER_ENO();
				CHG_BUYER_NM = vo.getCHG_BUYER_NM();
				CHG_REQ_STAT = vo.getCHG_REQ_STAT();

				PlatformData platformData = new PlatformData();
				EltCtrwVO eltvo = new EltCtrwVO();
				eltvo.setELT_CTRW_NO(ELT_CTRW_NO);
				eltvo.setBUYER_ENO(BUYER_ENO);
				eltvo.setBUYER_NM(BUYER_NM);
				eltvo.setCHG_BUYER_ENO(CHG_BUYER_ENO);
				eltvo.setCHG_BUYER_NM(CHG_BUYER_NM);
				eltvo.setCHG_REQ_STAT(CHG_REQ_STAT);
				eltctrwService.EltupdateStat(eltvo);
				
				if (CHG_REQ_STAT.equals("N")) {
					eltctrwService.deleteCtrwchg(eltvo); // 바이어이관취소할때 이관테이블에있는 데이터 delete
				} else if (CHG_REQ_STAT.equals("O")) {
				} else {
					eltctrwService.insertCtrwchg(eltvo);
				}
				sendData(response, platformData, 0, "result.message.save.success");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	// 전자계약 바이어 변경 신청 승인
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/EltupdateBuyer")
	public void updateBuyer(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds = requestHelper.getDataSet("ds_elt");
		List<EltCtrwVO> list = ValueObjectSetUtil.dataSetToVO(ds, EltCtrwVO.class);
		String ELT_CTRW_NO = null;
		String BUYER_ENO = null; // 기존 바이어
		String BUYER_NM = null;
		String CHG_BUYER_ENO = null;// 변경될 바이어
		String CHG_BUYER_NM = null;
		String CHG_SQNO = null;

		try {
			for (int i = 0; i < ds.getRowCount(); i++) {
				EltCtrwVO vo = list.get(i);
				ELT_CTRW_NO = vo.getELT_CTRW_NO();
				BUYER_ENO = vo.getBUYER_ENO();
				BUYER_NM = vo.getBUYER_NM();
				CHG_BUYER_ENO = vo.getCHG_BUYER_ENO();
				CHG_BUYER_NM = vo.getCHG_BUYER_NM();
				CHG_SQNO = vo.getCHG_SQNO();

				String USER_ID = requestHelper.getUserID();
				PlatformData platformData = new PlatformData();

				EltCtrwVO eltvo = new EltCtrwVO();
				eltvo.setELT_CTRW_NO(ELT_CTRW_NO);
				eltvo.setBUYER_ENO(BUYER_ENO);
				eltvo.setBUYER_NM(BUYER_NM);
				eltvo.setCHG_BUYER_ENO(CHG_BUYER_ENO);
				eltvo.setCHG_BUYER_NM(CHG_BUYER_NM);
				eltvo.setCHG_SQNO(CHG_SQNO);
				eltvo.setLS_CHGM(USER_ID);

				int CHG_NO = eltctrwService.searchChgno(eltvo);
				eltvo.setCHG_NO(CHG_NO);
				eltctrwService.updateBuyerStat(eltvo);
				eltctrwService.insertEltHst(eltvo);// 히스토리에 로그남김
				eltctrwService.updateBuyerCtrwchg(eltvo); // 이관테이블에 상태 Y으로 변경

				sendData(response, platformData, 0, "result.message.save.success");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
		
	//변경신청된 계약서 조회
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveChgelt")
	public void retrieveChgelt(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			PlatformData platformData = new PlatformData();

			String BUYER_ENO = requestHelper.getParameter("BUYER_ENO"); // 조회할 신청바이어 번호
			String CHECK = requestHelper.getParameter("CHECK");
			String FV_MNCTRWKD = requestHelper.getParameter("fv_mnCtrwKd");
			String USR_TPC = requestHelper.getUserType();

			// 승인화면
			String ELT_AUTH_DSC = null;
			if ("1".equals(CHECK)) {
				// 담당자 변경 승인 권한(A2)은 화면에서 체크함 - 승인버튼 표시 유무 결정
				List<EltAuthVO> list = eltAuthService.checkEltAuthor(requestHelper.getUserID(), USR_TPC);
				for (EltAuthVO vo : list) {
					ELT_AUTH_DSC = vo.getEltSearchAuth();
				}
			}

			List<Map<String, Object>> EltCtrwList = null;

			DataSetHelper dsHelper = new DataSetHelper("ds_save");
			dsHelper.addColumns(EltCtrwNames.class);
			EltCtrwList = eltctrwService.retrieveChgelt(BUYER_ENO, CHECK, FV_MNCTRWKD, USR_TPC, ELT_AUTH_DSC);
			for (Map<String, Object> map : EltCtrwList) {
				dsHelper.setData(map);
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	//전자 계약서 조회 (농협)
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltCtrwList")
	public void retrieveEltCtrwList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData platformData = new PlatformData();
			
			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String CAL_FROM = requestHelper.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to"); // 조회 종료일
			String EDT_KD = requestHelper.getParameter("edtkd"); // 계약자상호, GLN 코드(입력값)
			String CBO_KD = requestHelper.getParameter("cbokd"); // 계약자상호0, GLN 코드1
			String FV_STS = requestHelper.getParameter("fv_sts"); // 계약상태
			String FV_MNCTRWKD = requestHelper.getParameter("fv_mnCtrwKd"); // 계약서 종류
			String BUYER_ID = requestHelper.getUserID(); // 바이어 아이디
			String BUYER_ENO = requestHelper.getParameter("buyerEno");// 바이어 아이디
			String BUYER_NM = requestHelper.getParameter("buyerNm");// 바이어 아이디
			String BUYER_GLN = requestHelper.getParameter("buyerGln");// 바이어 GLN
			String BUYER_DSC = requestHelper.getParameter("buyerDsc");// 바이어 구분
			String BUYER_NA_TRPL_C = requestHelper.getGlnCode(); // 개별 변경일때만 바이어로 조회
			String APV_STS = requestHelper.getParameter("apv_sts"); // 계약상태: 9 승인
			String IS_EXCEL = requestHelper.getParameter("excel"); // 엑셀여부
			String USR_TPC = requestHelper.getUserType();
			String ELT_AUTH_DSC = null;
			String MN_CTRW_DSN = "Y";
			
			List<EltAuthVO> list = eltAuthService.checkEltAuthor(BUYER_ID, USR_TPC);
			for (EltAuthVO vo : list) {
				ELT_AUTH_DSC = vo.getEltSearchAuth();
			}
			
			int totalRowCount = 0;
			int start = 0;
			int end = 0;
			PageHelper pageHelper = null;
			if ("Y".equals(IS_EXCEL)) {
				end = 999999;
			} else {
				// Paging
				totalRowCount = eltctrwService.retrieveEltCtrwListCount(CBO_CONTDAY, CAL_FROM, CAL_TO, EDT_KD, CBO_KD, FV_STS, FV_MNCTRWKD, BUYER_NA_TRPL_C, BUYER_ENO, BUYER_ID, BUYER_NM, BUYER_DSC, APV_STS, USR_TPC, ELT_AUTH_DSC, MN_CTRW_DSN, BUYER_GLN);
				pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_page"), totalRowCount);
				start = pageHelper.getStart();
				end = pageHelper.getEnd();
			}
				
			List<Map<String, Object>> EltCtrwList = null;
			DataSetHelper dsHelper = new DataSetHelper("ds_rsclist");
			dsHelper.addColumns(EltCtrwNames.class);

			EltCtrwList = eltctrwService.retrieveEltCtrwList(CBO_CONTDAY, CAL_FROM, CAL_TO, EDT_KD, CBO_KD, FV_STS, FV_MNCTRWKD, BUYER_NA_TRPL_C, BUYER_ENO, BUYER_ID, BUYER_NM, BUYER_DSC, APV_STS, USR_TPC, ELT_AUTH_DSC, MN_CTRW_DSN, BUYER_GLN, start, end);
			for (Map<String, Object> map : EltCtrwList) {
				dsHelper.setData(map);
			}

			platformData.addDataSet(dsHelper.getDataSet());
			if (pageHelper != null) {
				platformData.addDataSet(pageHelper.getDsPageVo());
			}
			sendData(response, platformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	// 전자 계약서 엑셀다운로드 (체결보고용)
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/downloadEltCtrwReport")
	public void downloadEltCtrwReport(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String CAL_FROM = requestHelper.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to"); // 조회 종료일
			String EDT_KD = requestHelper.getParameter("edtkd"); // 계약자상호, GLN 코드(입력값)
			String CBO_KD = requestHelper.getParameter("cbokd"); // 계약자상호0, GLN 코드1
			String FV_STS = requestHelper.getParameter("fv_sts"); // 계약상태
			String FV_MNCTRWKD = requestHelper.getParameter("fv_mnCtrwKd"); // 계약서 종류
			String BUYER_ID = requestHelper.getUserID(); // 바이어 아이디
			String BUYER_ENO = requestHelper.getParameter("buyerEno");// 바이어 아이디
			String BUYER_NM = requestHelper.getParameter("buyerNm");// 바이어 아이디
			String BUYER_DSC = requestHelper.getParameter("buyerDsc");// 바이어 구분
			String BUYER_NA_TRPL_C = requestHelper.getGlnCode(); // 개별 변경일때만 바이어로 조회
			String APV_STS = requestHelper.getParameter("apv_sts"); // 계약상태: 9 승인
			String USR_TPC = requestHelper.getUserType();
			String ELT_AUTH_DSC = null;

			List<EltAuthVO> list = eltAuthService.checkEltAuthor(BUYER_ID, USR_TPC);
			for (EltAuthVO vo : list) {
				ELT_AUTH_DSC = vo.getEltSearchAuth();
			}

			List<Map<String, Object>> eltList = eltctrwService.downloadEltCtrwReport(CBO_CONTDAY, CAL_FROM, CAL_TO, EDT_KD, CBO_KD, FV_STS, FV_MNCTRWKD, BUYER_NA_TRPL_C, BUYER_ENO, BUYER_ID, BUYER_NM, BUYER_DSC, APV_STS, USR_TPC, ELT_AUTH_DSC);
			if (eltList != null && eltList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_excel_report");
				dsHelper.addColumns(eltList.get(0).keySet());
				for (Map<String, Object> vo : eltList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	//전자 계약서 조회 (농협) - 엑셀
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/downloadExcelEltCtrw")
	public void downloadExcelEltCtrw(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String fileName = request.getParameter("fileName"); // 본/지사코드
		String EDT_KD = requestHelper.getParameter("edtkd"); // 계약자상호, GLN 코드(입력값)
		String FV_MNCTRWKDNM = request.getParameter("fv_mnCtrwKdNm"); // 계약서 종류
		String FV_STSNM = request.getParameter("fv_stsNm"); // 계약서 종류

		if (StringUtils.isNotEmpty(FV_MNCTRWKDNM)) {
			try {
				FV_MNCTRWKDNM = URLDecoder.decode(FV_MNCTRWKDNM, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		if (StringUtils.isNotEmpty(EDT_KD)) {
			try {
				EDT_KD = URLDecoder.decode(EDT_KD, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		if (StringUtils.isNotEmpty(FV_STSNM)) {
			try {
				FV_STSNM = URLDecoder.decode(FV_STSNM, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		logger.debug("FV_MNCTRWKDNM   =>> " + FV_MNCTRWKDNM);
		logger.debug("FV_STSNM        =>> " + FV_STSNM);

		try {

			String CBO_CONTDAY = request.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String CAL_FROM = request.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = request.getParameter("cal_to"); // 조회 종료일
			String CBO_KD = request.getParameter("cbokd"); // 계약자상호0, GLN 코드1
			String FV_STS = request.getParameter("fv_sts"); // 계약상태
			// String FV_STSNM = request.getParameter("fv_stsNm"); //계약서 종류
			String FV_MNCTRWKD = request.getParameter("fv_mnCtrwKd"); // 계약서 종류
			String BUYER_ENO = requestHelper.getParameter("buyerEno"); // 바이어 번호
			String BUYER_NM = requestHelper.getParameter("buyerNm"); // 바이어이름
			String BUYER_GLN = requestHelper.getParameter("buyerGln"); // 바이어소속
			String BUYER_ID = requestHelper.getUserID(); // 바이어 아이디
			// String FV_MNCTRWKDNM = request.getParameter("fv_mnCtrwKdNm"); //계약서 종류
			String BUYER_DSC = requestHelper.getParameter("buyerDsc");
			// BUYER_DSC 는 추후 db테이블에 바이어 구분자 넣어야 할 경우를 대비해서 만듬 나중에 추가하게되면 쿼리문만 바꾸면 됨
			String BUYER_NA_TRPL_C = requestHelper.getGlnCode(); // 개별 변경일때만 바이어로 조회
			String APV_STS = requestHelper.getParameter("apv_sts"); // 계약상태: 9 승인
			String USR_TPC = requestHelper.getUserType();
			String ELT_AUTH_DSC = null;
			String MN_CTRW_DSN = null;
			
			List<EltAuthVO> list = eltAuthService.checkEltAuthor(BUYER_ID, USR_TPC);
			for (EltAuthVO vo : list) {
				ELT_AUTH_DSC = vo.getEltSearchAuth();
			}

			List<Map<String, Object>> EltCtrwList = eltctrwService.retrieveEltCtrwList(CBO_CONTDAY, CAL_FROM, CAL_TO, EDT_KD, CBO_KD, FV_STS, FV_MNCTRWKD, BUYER_NA_TRPL_C, BUYER_ENO, BUYER_ID, BUYER_NM, BUYER_DSC, APV_STS, USR_TPC, ELT_AUTH_DSC, MN_CTRW_DSN, BUYER_GLN, 0, 999999);
			String[] header = { "바이어명", "계약서 종류", "거래처코드", "계약자 상호", "계약시작일", "협력업체 서명시간", "바이어 승인시간", "상태", "계약서 변경사항" };
			String[] keyIndex = { "BUYER_NM", "MN_CTRW_KD_NM", "NA_TRPL_C", "MTALNM", "CTR_DT", "COLB_COMP_SGNT_DTM", "BUYER_APV_DTM", "STS_NM", "CHG_NM" };

			AbstractModel model = new DefaultModel("전자계약서조회", header, keyIndex, EltCtrwList);
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);

			logger.debug("fileName   =>> " + fileName);

			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "전자계약서조회");
			searchMap.put("메인계약서종류", FV_MNCTRWKDNM);
			searchMap.put("계약상태", FV_STSNM);

			if ("1".equals(CBO_CONTDAY)) {
				searchMap.put("조회시작일", CAL_FROM + " ~" + CAL_TO);
			} else if ("2".equals(CBO_CONTDAY)) {
				searchMap.put("조회종료일", CAL_FROM + " ~" + CAL_TO);
			}

			if ("1".equals(CBO_KD)) {
				searchMap.put("계약자 상호", EDT_KD);
			} else if ("2".equals(CBO_KD)) {
				searchMap.put("GLN코드", EDT_KD);
			}
			
			excelMaker.createSearchSheet(searchMap);
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/**
	 * 전자 계약서 상세 조회 - 엑셀
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "rest/excel/downloadExcelReportEltDetail")
	public void downloadExcelReportEltDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			// 조회조건
			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String CAL_FROM = requestHelper.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to"); // 조회 종료일
			String EDT_KD = requestHelper.getParameter("edtkd"); // 계약자상호, GLN 코드(입력값)
			String CBO_KD = requestHelper.getParameter("cbokd"); // 계약자상호0, GLN 코드1
			String FV_STS = requestHelper.getParameter("fv_sts"); // 계약상태
			String FV_MNCTRWKD = requestHelper.getParameter("fv_mnCtrwKd"); // 계약서 종류
			String BUYER_ID = requestHelper.getUserID(); // 바이어 아이디
			String BUYER_ENO = requestHelper.getParameter("buyerEno");// 바이어 아이디
			String BUYER_NM = requestHelper.getParameter("buyerNm");// 바이어 아이디
			String BUYER_DSC = requestHelper.getParameter("buyerDsc");// 바이어 구분
			String BUYER_NA_TRPL_C = requestHelper.getGlnCode(); // 개별 변경일때만 바이어로 조회
			String APV_STS = requestHelper.getParameter("apv_sts"); // 계약상태: 9 승인
			String USR_TPC = requestHelper.getUserType();
			String ELT_AUTH_DSC = null;
			
			List<EltAuthVO> list = eltAuthService.checkEltAuthor(BUYER_ID, USR_TPC);
			for (EltAuthVO vo : list) {
				ELT_AUTH_DSC = vo.getEltSearchAuth();
			}

			// 대상 계약서 조회(계약서별 분할을 위해 계약서종류 순으로 정렬함)
			List<Map<String, Object>> eltCtrwList = eltctrwService.downloadExcelReportEltDetail(CBO_CONTDAY, CAL_FROM, CAL_TO, EDT_KD, CBO_KD, FV_STS, FV_MNCTRWKD, BUYER_NA_TRPL_C, BUYER_ENO, BUYER_ID, BUYER_NM, BUYER_DSC, APV_STS, USR_TPC, ELT_AUTH_DSC);

			// 계약서 종류 파악
			List<String> mnCtrwList = new ArrayList<String>();
			List<Integer> mnCtrwIdx =  new ArrayList<Integer>();
			for (int i = 0; i < eltCtrwList.size(); i++) {
				String mnCtrwKd = (String) eltCtrwList.get(i).get("MN_CTRW_KD");
				if (!mnCtrwList.contains(mnCtrwKd)) {
					mnCtrwList.add(mnCtrwKd);
					mnCtrwIdx.add(i);
				}
			}
			
			// 공통 출력
			String headerStr = "No.|계약서번호|계약서종류|거래처코드|계약자상호|계약담당자소속|계약담당자명|계약서작성일|계약시작일|계약종료일|상태|관련계약서건수|관련계약서번호";
			String keyStr = "RN|ELT_CTRW_NO|MN_CTRW_KD_NM|NA_TRPL_C|MTALNM|BUYER_NA_TRPL_NM|BUYER_NM|CTRW_DRUP_DT|CTR_ST_DT|CTR_ED_DT|STS_NM|ATCH_CTR_CNT|ATCH_CTR_NO";
			
			// 사용자 정의 출력
			Map<String, Map<String, String>> keyset = new HashMap<String, Map<String,String>>();
			
			// 상세조회 값 Split
			String dsData = requestHelper.getParameter("xml");
			
			String[] dsRows = dsData.split("\\|");
			for (int i=0; i<dsRows.length; i++) {
				String[] temp = dsRows[i].split("@");
				String kd = temp[0];
				String kdNm = temp[1];
				String code = temp[2];
				String value = temp[3];
//			}
			
//			DataSet ds = new DataSet("ds_form");
//			ds.loadXml(dsData);
//			
//			for (int i=0; i<ds.getRowCount(); i++) {
//				String kd = ds.getString(i, "MN_CTRW_KD");
//				String kdNm = ds.getString(i, "MN_CTRW_KDNM");
//				String code = ds.getString(i, "CODE");
//				String value = ds.getString(i, "VALUE");
				
				if (StringUtils.isEmpty(kd) || StringUtils.isEmpty(kdNm) || StringUtils.isEmpty(code) || StringUtils.isEmpty(value)) {
					continue;
				}
				
				Map<String, String> map = null;
				boolean isFirst = false;
				if (keyset.containsKey(kd)) {
					map = keyset.get(kd);
				} else {
					isFirst = true;
					map = new HashMap<String, String>();
					map.put("kdnm", kdNm);
					map.put("header", headerStr);
					map.put("key", keyStr);
				}
				
				String h = map.get("header");
				String k = map.get("key");
				h += "|" + value;
				k += "|" + code;

				map.put("header", h);
				map.put("key", k);
				
				if (isFirst) {
					keyset.put(kd, map);
				}
			}

			// 엑셀 데이터 생성
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			for (int i = 0; i < mnCtrwList.size(); i++) {
				int start = mnCtrwIdx.get(i);
				int end = 0;
				if (i == (mnCtrwList.size() - 1)) {
					end = eltCtrwList.size();
				} else {
					end = mnCtrwIdx.get(i + 1);
				}

				// 리스트가 있을 때 생성, 셀 크기 조절
				List<Map<String, Object>> subList = eltCtrwList.subList(start, end);
				if (subList.size() == 0) {
					continue;
				} else {
					for (int k=0; k<subList.size(); k++) {
						subList.get(k).put("RN", (k+1));
					}
				}

				AbstractModel model = null;
				String h = null;
				String k = null;
				String nm = null;

				if (keyset.containsKey(mnCtrwList.get(i))) {
					// 사용자 정의 출력 있음
					Map<String, String> temp = keyset.get(mnCtrwList.get(i));
					h = temp.get("header");
					k = temp.get("key");
					nm = temp.get("kdnm");
				} else {
					// 사용자 정의 출력 없음(공통값만 출력)
					h = headerStr;
					k = keyStr;
					nm = (String) subList.get(0).get("MN_CTRW_KD_NM");
				}

				String[] header = h.split("\\|");
				String[] keyIndex = k.split("\\|");

				model = new DefaultModel(nm, header, keyIndex, subList);
				excelMaker.createDataSheet(model);
				for (int j = 0; j < header.length; j++) {
					excelMaker.getDataSheet().autoSizeColumn(j);
				}
			}
			
			String fileName = "전자계약상세조회(" + DateUtil.convertDateToString("yyyyMMdd", DateUtil.getCurrentDate()) + ").xlsx";
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}

	//전자 계약서 상세 조회 팝업창(농협, 협력업체)
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltCtrw")
	public void retrieveEltCtrw(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String elt_Ctrw_No = requestHelper.getParameter("eltCtrwNo");
		String chg_Sqno = requestHelper.getParameter("chgSqno");
		String colbComp = requestHelper.getParameter("colbComp"); // 계약상대자가 조회시 넘어옴(2121, 2131)
		
		try {
			// 계약상대자 조회시 조회이력 남김 (계약서작성 상태, 해지되지 않았을 때)
			if (colbComp != null && "Y".equals(colbComp)) {
				eltctrwService.updateColbCompEltSts(elt_Ctrw_No, chg_Sqno, requestHelper.getUserID());
			}
			
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper = new DataSetHelper("ds_in");
			DataSetHelper dsHelperKd = new DataSetHelper("ds_kd");
			DataSetHelper dsHelperNtc = new DataSetHelper("ds_ntc");
			DataSetHelper dsHelperFileYn = new DataSetHelper("ds_fyn");
			// DataSetHelper dsHelperUploadresult = new DataSetHelper("ds_uploadresult");

			// 상세 ds_in dataset 
			dsHelper.addColumns(EltCtrwDtlNames.class);
			List<Map<String, Object>> EltCtrwList = eltctrwService.retrieveEltCtrw(elt_Ctrw_No, chg_Sqno);
			for (Map<String, Object> map : EltCtrwList) {
				dsHelper.setData(map);
			}

			platformData.addDataSet(dsHelper.getDataSet());

			// 계약서 종류
			dsHelperKd.addColumns(EltCtrwDtlKdNames.class);
			List<Map<String, Object>> EltCtrwKdList = null;

			EltCtrwKdList = eltctrwService.retrieveEltCtrwKd(elt_Ctrw_No, chg_Sqno);
			for (Map<String, Object> map : EltCtrwKdList) {
				dsHelperKd.setData(map);
			}

			platformData.addDataSet(dsHelperKd.getDataSet());
			// 문자

			// 수신내역
			dsHelperNtc.addColumns(EltCtrwDtlNtcNames.class);
			List<Map<String, Object>> EltCtrwNtcList = null;

			EltCtrwNtcList = eltctrwService.retrieveEltCtrwNtc(elt_Ctrw_No, chg_Sqno);
			for (Map<String, Object> map : EltCtrwNtcList) {
				dsHelperNtc.setData(map);
			}

			platformData.addDataSet(dsHelperNtc.getDataSet());

			// 파일첨부리스트
			dsHelperFileYn.addColumns(EltCtrwDtlFileYn.class);
			List<Map<String, Object>> EltCtrwFileList = null;

			EltCtrwFileList = eltctrwService.retrieveEltCtrwFileYn(elt_Ctrw_No, chg_Sqno);
			for (Map<String, Object> map : EltCtrwFileList) {
				dsHelperFileYn.setData(map);
			}

			logger.debug("EltCtrwFileList   = >>>   " + EltCtrwFileList.toString());
			platformData.addDataSet(dsHelperFileYn.getDataSet());

			/*
			 * dsHelper.addColumns(CounselingInfoNames.class); Map<String, Object> map =
			 * eltctrwService.retrieveEltCtrw(elt_Ctrw_No);
			 * 
			 * dsHelper.setData(map); platformData.addDataSet(dsHelper.getDataSet());
			 */

			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	// 전자 계약서 상세 저장 (농협)
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/saveEltCtrw")
	public void saveEltCtrw(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();
			EltCtrwVO mcnvo = new EltCtrwVO();

			DataSet dsIn = requestHelper.getDataSet("ds_in");
			DataSet dsFyn = requestHelper.getDataSet("ds_fyn");

			String COLB_COMP_SGNT = requestHelper.getParameter("COLB_COMP_SGNT");
			// String BUYER_SGNT = requestHelper.getParameter("BUYER_SGNT");

			// 1 == INSERT
			// 2 == UPDATE
			// 3 == INSERT/UPDATE
			// 4 == delete			

			// 전자계약서관리

			// 직인 시스템파일명 임의 생성
			// String systemFileName = RandomStringUtils.randomAlphabetic(10)+System.currentTimeMillis();

			if (dsIn != null) {
				List<EltCtrwVO> listM = requestHelper.getValueObjects(EltCtrwVO.class, dsIn);
				mcnvo = listM.get(0);

				mcnvo.setUSR_TPC(requestHelper.getUserType());
				mcnvo.setFS_RGM(requestHelper.getUserID());
				mcnvo.setLS_CHGM(requestHelper.getUserID());
				mcnvo.setCOLB_COMP_SGNT(COLB_COMP_SGNT);

				// mcnvo.setBUYER_SEAL_APDFLNM("하나로유통직인");
				// mcnvo.setBUYER_SEAL_SYS_FLNM(systemFileName);

				// 바이어 공인인증 정보
				// mcnvo.setBUYER_SGNT(BUYER_SGNT);
			}

			// 첨부 파일 (mcnvo의 eltCtrwDcmApdVOList 값 세팅) 
			setEltApdVOList(requestHelper, mcnvo, dsFyn);

			// 저장
			eltctrwService.saveEltCtrw(mcnvo);
			sendData(response, platformData, 1, "result.message.save.success");
			
			// 첨부파일 처리 (Thread)
			saveEltApdProcessing(mcnvo);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	// 전자 계약서 첨부파일 저장
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/saveEltCtrwAtch")
	public void saveEltCtrwAtch(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();
			EltCtrwVO mcnvo = new EltCtrwVO();

			DataSet dsIn = requestHelper.getDataSet("ds_in");
			DataSet dsFyn = requestHelper.getDataSet("ds_fyn");

			if (dsIn != null) {
				List<EltCtrwVO> listM = requestHelper.getValueObjects(EltCtrwVO.class, dsIn);
				mcnvo = listM.get(0);

				mcnvo.setUSR_TPC(requestHelper.getUserType());
				mcnvo.setFS_RGM(requestHelper.getUserID());
				mcnvo.setLS_CHGM(requestHelper.getUserID());
				
				// 첨부 파일 (mcnvo의 eltCtrwDcmApdVOList 값 세팅) 
				setEltApdVOList(requestHelper, mcnvo, dsFyn);
				
				// 저장
				eltctrwService.saveEltCtrwAtch(mcnvo);
				
				// 첨부파일 목록 재조회
				DataSetHelper dsHelperFileYn = new DataSetHelper("ds_fyn");
				dsHelperFileYn.addColumns(EltCtrwDtlFileYn.class);
				List<Map<String, Object>> EltCtrwFileList = null;
				
				EltCtrwFileList = eltctrwService.retrieveEltCtrwFileYn(mcnvo.getELT_CTRW_NO(), mcnvo.getCHG_SQNO());
				for (Map<String, Object> map : EltCtrwFileList) {
					dsHelperFileYn.setData(map);
				}
				
				platformData.addDataSet(dsHelperFileYn.getDataSet());
				sendData(response, platformData, 1, "result.message.save.success");
				
				// 첨부파일 처리 (Thread)
				saveEltApdProcessing(mcnvo);
			} else {
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 전자계약 첨부파일 정보 세팅
	 * @param requestHelper
	 * @param mcnvo
	 * @param dsFyn
	 */
	private void setEltApdVOList(PlatFormRequestHelper requestHelper, EltCtrwVO mcnvo, DataSet dsFyn) {
		int cnt = 0;
		if (dsFyn != null) {
			String dmlCode = "";
			List<EltCtrwDcmApdVO> tmpECDAList = requestHelper.getValueObjects(EltCtrwDcmApdVO.class, dsFyn);
			List<EltCtrwDcmApdVO> dsFynList = new ArrayList<EltCtrwDcmApdVO>();

			EltCtrwDcmApdVO ecdavo;

			for (int i = 0; i < dsFyn.getRowCount(); i++) {
				dmlCode = "";

				ecdavo = tmpECDAList.get(i);
				ecdavo.setAPDFLNM(dsFyn.getString(i, "ORGFNAME"));
				ecdavo.setAPDFL_SZE(dsFyn.getString(i, "FILESIZE"));
				ecdavo.setSYS_FLNM(dsFyn.getString(i, "SYSTEMFILENAME"));
				if (StringUtils.isEmpty(ecdavo.getCHG_SQNO())) {
					ecdavo.setCHG_SQNO(mcnvo.getCHG_SQNO());
				}

				String rType = dsFyn.getRowTypeName(i);

				if (rType == "inserted") {
					dmlCode = "1";
					ecdavo.setFS_RGM(requestHelper.getUserID());
					ecdavo.setDML_CODE(dmlCode);
					dsFynList.add(cnt, ecdavo);

					cnt += 1;
				} else if (rType == "updated") {
					String del = ecdavo.getFILE_DEL();

					if (del != null && "0".equals(del)) { // 파일 추가
						dmlCode = "2";
						ecdavo.setAPDFL_STS("I");
					} else if (del != null && "1".equals(del)) { // 파일 삭제
						dmlCode = "4";
					}

					ecdavo.setLS_CHGM(requestHelper.getUserID());
					ecdavo.setDML_CODE(dmlCode);
					dsFynList.add(cnt, ecdavo);
					cnt += 1;
				}
			}
			mcnvo.setEltCtrwDcmApdVOList(dsFynList);
		}
	}
	
	/**
	 * 첨부파일 DB 저장(스레드 동작)
	 * @param mcnvo
	 */
	private void saveEltApdProcessing(EltCtrwVO mcnvo) {
		if (mcnvo.getEltCtrwDcmApdVOList() != null && mcnvo.getEltCtrwDcmApdVOList().size() > 0) {
			final List<EltCtrwDcmApdVO> tvo = mcnvo.getEltCtrwDcmApdVOList();
			new Thread(new Runnable() {
				@Override
				public void run() {
					final String dstDir = Configurer.getProperty("file.realElt.path");
					for (EltCtrwDcmApdVO ecda : tvo) {
						switch (ecda.getDML_CODE()) {
						case "2":
							try {
								byte[] blob = FileUtil.readToByte(dstDir + File.separator + ecda.getSYS_FLNM());
//								System.out.println("[ELT_TEST] File for BLOB Size : " + blob.length);
								ecda.setAPDFL_DATA(blob);

								int exist = eltctrwService.existDcmApd(ecda);
								if (exist == 0) {
									eltctrwService.insertDcmApdIng(ecda);
								} else {
									eltctrwService.updateDcmApdIng(ecda);
								}
							} catch (IOException e) {
								logger.error(e.getMessage(), e);
							}
							break;
						case "4":
							eltctrwService.deleteDcmApdIng(ecda);
							break;
						}
					}
				}
			}).start();
		}
	}
	
	
	//전자 계약서 상세 조회 (농협)
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrw/retrieveAnwEltCtrwDrupDscList")
	public void retrieveAnwEltCtrwDrupDscList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String ELT_CTRW_NO = requestHelper.getParameter("eltCtrwNo"); // 메인계약서종류
			String CHG_SQNO = requestHelper.getParameter("chgSqno"); // 메인계약서종류

			logger.debug("ELT_CTRW_NO  = >> " + ELT_CTRW_NO);
			logger.debug("CHG_SQNO  = >> " + CHG_SQNO);

			/* 전자계약서관리 */
			DataSetHelper dsHelper_reg = new DataSetHelper("ds_register");
			dsHelper_reg.addColumns(eltCtrwAmnNames.class);

			List<Map<String, Object>> regList = eltctrwService.retrieveEltCtrwAmnList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_re : regList) {
				dsHelper_reg.setData(map_re);
			}
			platformData.addDataSet(dsHelper_reg.getDataSet());

			/* 전자계약서상세 */
			DataSetHelper dsHelper_ctrwDtl = new DataSetHelper("ds_eltCtrwDtl");
			dsHelper_ctrwDtl.addColumns(CtEltCtrwDtlNames.class);

			List<Map<String, Object>> ctrwDtlList = eltctrwService.retrieveEltCtrwDtlList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_ctrwDtl : ctrwDtlList) {
				dsHelper_ctrwDtl.setData(map_ctrwDtl);
			}
			platformData.addDataSet(dsHelper_ctrwDtl.getDataSet());

			/* 부가전자계약서상세 */
			DataSetHelper dsHelper_AddEltCtrwDtl = new DataSetHelper("ds_addEltCtrwDtl");
			dsHelper_AddEltCtrwDtl.addColumns(AddEltCtrwDtlNames.class);

			List<Map<String, Object>> addEltCtrwDtlList = eltctrwService.retrieveAddEltCtrwDtlList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_ctEltCtrwDtl : addEltCtrwDtlList) {
				dsHelper_AddEltCtrwDtl.setData(map_ctEltCtrwDtl);
			}
			platformData.addDataSet(dsHelper_AddEltCtrwDtl.getDataSet());

			/* 약정서상세 */
			DataSetHelper dsHelper_PmiwDtl = new DataSetHelper("ds_pmiwDtl");
			dsHelper_PmiwDtl.addColumns(PmiwDtlNames.class);

			List<Map<String, Object>> pmiwDtlList = eltctrwService.retrievePmiwDtlList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_pmiwDtl : pmiwDtlList) {
				dsHelper_PmiwDtl.setData(map_pmiwDtl);
			}
			platformData.addDataSet(dsHelper_PmiwDtl.getDataSet());

			/* 행사료약정서 */
			DataSetHelper dsHelper_EvtAmPmiw = new DataSetHelper("ds_evtAmPmiw");
			dsHelper_EvtAmPmiw.addColumns(EvtAmPmiwNames.class);

			List<Map<String, Object>> evtAmPmiwList = eltctrwService.retrieveEvtAmPmiwList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_evtAmPmiw : evtAmPmiwList) {
				dsHelper_EvtAmPmiw.setData(map_evtAmPmiw);
			}
			platformData.addDataSet(dsHelper_EvtAmPmiw.getDataSet());

			/* 대량거래수수료약정서 */
			DataSetHelper dsHelper_LgqtTrFeePmiw = new DataSetHelper("ds_lgqtTrFeePmiw");
			dsHelper_LgqtTrFeePmiw.addColumns(LgqtTrFeePmiwNames.class);

			List<Map<String, Object>> lgqtTrFeePmiwList = eltctrwService.retrieveLgqtTrFeePmiwList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_lgqtTrFeePmiw : lgqtTrFeePmiwList) {
				dsHelper_LgqtTrFeePmiw.setData(map_lgqtTrFeePmiw);
			}
			platformData.addDataSet(dsHelper_LgqtTrFeePmiw.getDataSet());

			/* 납품 업체 종업원파견약정서 */
			DataSetHelper dsHelper_DlvgCompEmpDspcPmiw = new DataSetHelper("ds_dlvgCompEmpDspcPmiw");
			dsHelper_DlvgCompEmpDspcPmiw.addColumns(DlvgCompEmpDspcPmiwNames.class);

			List<Map<String, Object>> dlvgCompEmpDspcPmiwList = eltctrwService.retrieveDlvgCompEmpDspcPmiwList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_dlvgCompEmpDspcPmiw : dlvgCompEmpDspcPmiwList) {
				dsHelper_DlvgCompEmpDspcPmiw.setData(map_dlvgCompEmpDspcPmiw);
			}
			platformData.addDataSet(dsHelper_DlvgCompEmpDspcPmiw.getDataSet());

			/* 납품 업체 종업원파견약정서 */
			DataSetHelper dsHelper_DspcPerWrkPrdPmiw = new DataSetHelper("ds_dspcPerWrkPrdPmiw");
			dsHelper_DspcPerWrkPrdPmiw.addColumns(DspcPerWrkPrdPmiwNames.class);

			List<Map<String, Object>> dspcPerWrkPrdPmiwList = eltctrwService.retrieveDspcPerWrkPrdPmiwList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_dspcPerWrkPrdPmiw : dspcPerWrkPrdPmiwList) {
				dsHelper_DspcPerWrkPrdPmiw.setData(map_dspcPerWrkPrdPmiw);
			}
			platformData.addDataSet(dsHelper_DspcPerWrkPrdPmiw.getDataSet());

			/* 특약서 상세 */
			DataSetHelper dsHelper_SctrwDtl = new DataSetHelper("ds_sctrwDtl");
			dsHelper_SctrwDtl.addColumns(SctrwDtlNames.class);

			List<Map<String, Object>> sctrwDtlList = eltctrwService.retrieveSctrwDtlList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_sctrwDtl : sctrwDtlList) {
				dsHelper_SctrwDtl.setData(map_sctrwDtl);
			}
			platformData.addDataSet(dsHelper_SctrwDtl.getDataSet());

			/* 특약서_계약_마진율 */
			DataSetHelper dsHelper_SctrwCtrMrgnRt = new DataSetHelper("ds_sctrwCtrMrgnRt");
			dsHelper_SctrwCtrMrgnRt.addColumns(SctrwCtrMrgnRtNames.class);

			List<Map<String, Object>> sctrwCtrMrgnRtList = eltctrwService.retrieveSctrwCtrMrgnRtList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_sctrwCtrMrgnRt : sctrwCtrMrgnRtList) {
				dsHelper_SctrwCtrMrgnRt.setData(map_sctrwCtrMrgnRt);
			}
			platformData.addDataSet(dsHelper_SctrwCtrMrgnRt.getDataSet());

			/* 특약서_정상_마진율 */
			DataSetHelper dsHelper_SctrwNmlMrgnRt = new DataSetHelper("ds_sctrwNmlMrgnRt");
			dsHelper_SctrwNmlMrgnRt.addColumns(SctrwNmlMrgnRtNames.class);

			List<Map<String, Object>> sctrwNmlMrgnRtList = eltctrwService.retrieveSctrwNmlMrgnRtList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_sctrwNmlMrgnRt : sctrwNmlMrgnRtList) {
				dsHelper_SctrwNmlMrgnRt.setData(map_sctrwNmlMrgnRt);
			}
			platformData.addDataSet(dsHelper_SctrwNmlMrgnRt.getDataSet());
			
			/* 특약서_판촉사원파견내역 */
			// DataSetHelper dsHelper_SctrwPmtnEmpeDspcBrk = new DataSetHelper("ds_sctrwPmtnEmpeDspcBrk");
			// dsHelper_SctrwPmtnEmpeDspcBrk.addColumns(SctrwPmtnEmpeDspcBrkNames.class);
			//
			// List<Map<String, Object>> sctrwPmtnEmpeDspcBrkList =
			// eltctrwService.retrieveSctrwPmtnEmpeDspcBrkList(ELT_CTRW_NO, CHG_SQNO);
			// for(Map<String, Object> map_sctrwPmtnEmpeDspcBrk : sctrwPmtnEmpeDspcBrkList) {
			// dsHelper_SctrwPmtnEmpeDspcBrk.setData(map_sctrwPmtnEmpeDspcBrk);
			// }
			// platformData.addDataSet(dsHelper_SctrwPmtnEmpeDspcBrk.getDataSet());

			/* 특약서_전체예상판촉비용 */
			DataSetHelper dsHelper_SctrwAllXpcPmtnCst = new DataSetHelper("ds_sctrwAllXpcPmtnCst");
			dsHelper_SctrwAllXpcPmtnCst.addColumns(SctrwAllXpcPmtnCstNames.class);

			List<Map<String, Object>> sctrwAllXpcPmtnCstList = eltctrwService.retrieveSctrwAllXpcPmtnCstList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_sctrwAllXpcPmtnCst : sctrwAllXpcPmtnCstList) {
				dsHelper_SctrwAllXpcPmtnCst.setData(map_sctrwAllXpcPmtnCst);
			}
			platformData.addDataSet(dsHelper_SctrwAllXpcPmtnCst.getDataSet());

			/* 기타전자계약서 */
			DataSetHelper dsHelper_EtcEltCtrw = new DataSetHelper("ds_etcEltCtrw");
			dsHelper_EtcEltCtrw.addColumns(EtcEltCtrwNames.class);

			List<Map<String, Object>> etcEltCtrwList = eltctrwService.retrieveEtcEltCtrwList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_etcEltCtrw : etcEltCtrwList) {
				dsHelper_EtcEltCtrw.setData(map_etcEltCtrw);
			}
			platformData.addDataSet(dsHelper_EtcEltCtrw.getDataSet());

			/* 기타_거래품목리스트 */
			DataSetHelper dsHelper_EtcItemList = new DataSetHelper("ds_ctEtcItemList");
			dsHelper_EtcItemList.addColumns(CtEtcItem.class);

			List<Map<String, Object>> etcItemList = eltctrwService.retrievetEtcItemList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map_etcItemList : etcItemList) {
				dsHelper_EtcItemList.setData(map_etcItemList);
			}
			platformData.addDataSet(dsHelper_EtcItemList.getDataSet());

			/* 계약서 양식 */
			List<Map<String, Object>> ContractFormlist = null;
			/** 권한별서비스메뉴 */
			DataSetHelper dsHelper = new DataSetHelper("ds_etcEltStylAmm");
			dsHelper.addColumns(EltCtrwStyNames.class);
			ContractFormlist = anwEltCtrwDrupService.retrieveContractFormList();
			for (Map<String, Object> map : ContractFormlist) {
				dsHelper.setData(map);
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	//전자 계약서 상세 저장 (농협)
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/saveEltCtrwApd")
	public void updateEltCtrwApd(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			DataSet dsFyn = requestHelper.getDataSet("ds_fyn");
			DataSet dsIn = requestHelper.getDataSet("ds_in");

			EltCtrwVO mcnvo = new EltCtrwVO();
			List<EltCtrwVO> listM = requestHelper.getValueObjects(EltCtrwVO.class, dsIn);

			mcnvo = listM.get(0);
			mcnvo.setLS_CHGM(requestHelper.getUserID());
			mcnvo.setFS_RGM(requestHelper.getUserID());

			// 첨부 파일
			if (dsFyn != null) {
				List<EltCtrwDcmApdVO> tmpECDAList = requestHelper.getValueObjects(EltCtrwDcmApdVO.class, dsFyn);
				List<EltCtrwDcmApdVO> dsFynList = new ArrayList<EltCtrwDcmApdVO>();

				EltCtrwDcmApdVO ecdavo;
				for (int i = 0; i < dsFyn.getRowCount(); i++) {
					ecdavo = tmpECDAList.get(i);
					ecdavo.setDCM_NM(dsFyn.getString(i, "DCM_NM"));
					ecdavo.setAPDFLNM(dsFyn.getString(i, "ORGFNAME"));
					ecdavo.setAPDFL_SZE(dsFyn.getString(i, "FILESIZE"));
					ecdavo.setSYS_FLNM(dsFyn.getString(i, "SYSTEMFILENAME"));
					ecdavo.setFS_RGM(requestHelper.getUserID());
					ecdavo.setSQNO(Integer.toString(i + 1));
					dsFynList.add(i, ecdavo);
				}

				mcnvo.setEltCtrwDcmApdVOList(dsFynList);
			}
			// 실제 저장
			eltctrwService.saveEltCtrwApd(mcnvo);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
		
	//전자 계약서 조회 (협력업체)
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltCtrwApd")
	public void retrieveEltCtrwApd(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();
			String eltCtrwNo = requestHelper.getParameter("eltCtrwNo"); // 메인계약서종류
			Map<String, Object> hm = eltctrwService.retrieveEltCtrwApd(eltCtrwNo);

			if (hm != null) {
				DataSetHelper dsHelper = new DataSetHelper("ds_in");
				dsHelper.addColumns(EltCtrwVO.class);
				dsHelper.setData(hm);
				platformData.addDataSet(dsHelper.getDataSet());
			}

			List<EltCtrwDcmApdVO> fileList = eltctrwService.retrieveEltCtrwApdFileList(eltCtrwNo);

			if (fileList != null && fileList.size() > 0) {
				DataSetHelper fynHelper = new DataSetHelper("ds_fyn");
				fynHelper.addColumns(EltCtrwDcmApdVO.class);

				for (EltCtrwDcmApdVO map : fileList) {
					fynHelper.setData(map);
				}
				platformData.addDataSet(fynHelper.getDataSet());
			}

			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자 계약서 조회 (협력업체)
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/updateCancelElt")
	public void updateCancelElt(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String eltCtrwNo = requestHelper.getParameter("elt_ctrw_no"); // 전자계약서 번호
			String chgSqno = requestHelper.getParameter("chg_sqno"); // 전자계약서 갱신번호
			String ctrwKdc = requestHelper.getParameter("ctrw_kdc"); // 전자계약서 종류

			// 통보내역
			DataSet ds_in = requestHelper.getDataSet("ds_in");
			String tinm = ds_in.getString(0, "TINM"); // 제목
			String cntn = ds_in.getString(0, "CNTN"); // 내용
			
			if (StringUtils.isNotBlank(tinm) && StringUtils.isNotBlank(cntn)) {
				// 통보이력 등록
				eltctrwService.insertEtcEltNtc(eltCtrwNo, ctrwKdc, "A", tinm, cntn, requestHelper.getUserType(), "0", null, "0", null, requestHelper.getUserID());
				eltctrwService.updateCancelElt(eltCtrwNo, chgSqno, requestHelper.getUserID());
				sendData(response, platformData);
			} else {
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	//전자 계약서 조회 (농협)
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrievetEtcItemList")
	public void retrievetEtcItemList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String ELT_CTRW_NO = requestHelper.getParameter("eltCtrwNo"); // 계약시작0, 만료일1
			String CHG_SQNO = requestHelper.getParameter("chgSqno"); // 조회 시작일

			logger.debug(
					"***********************************************************************************************");
			logger.debug("[" + ELT_CTRW_NO + "]");
			logger.debug("[" + CHG_SQNO + "]");

			List<Map<String, Object>> EltCtrwList = null;

			DataSetHelper dsHelper = new DataSetHelper("ds_ctEtcItemList");

			dsHelper.addColumns(CtEtcItem.class);

			EltCtrwList = eltctrwService.retrievetEtcItemList(ELT_CTRW_NO, CHG_SQNO);
			for (Map<String, Object> map : EltCtrwList) {
				dsHelper.setData(map);
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	//전자 계약서 상세 저장 (농협)
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/saveEtcItemList")
	public void saveEtcItemList(HttpServletRequest request, HttpServletResponse response) {	
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {			
			DataSet ds_ctEtcItemList = requestHelper.getDataSet("ds_ctEtcItemList");

			List<CtEtcItemVO> ctEtcItemVoList = requestHelper.getValueObjects(CtEtcItemVO.class, ds_ctEtcItemList);
//			int rowType ;	
//			String rType ;
			CtEtcItemVO ctEtcItemVo ;
			String sqno ;
			String ischecked;

			for(int i = 0; i < ds_ctEtcItemList.getRowCount(); i++){
				ctEtcItemVo = ctEtcItemVoList.get(i);
				
				ctEtcItemVo.setFS_RGM(requestHelper.getUserID());
				ctEtcItemVo.setLS_CHGM(requestHelper.getUserID());

//				rowType = ds_ctEtcItemList.getRowType(i);
//				rType = ds_ctEtcItemList.getRowTypeName(i);
				
				sqno = ds_ctEtcItemList.getString(i, "SQNO");
				ischecked = ds_ctEtcItemList.getString(i, "ISCHECKED"); 
				
				if(sqno == null || ischecked.equals("")){
				    // 입력
					eltctrwService.insertEtcItem(ctEtcItemVo);
					
				} else if(sqno.length() > 0){
					//수정
					
					if(ischecked.equals("1")){
						eltctrwService.deleteEtcItem(ctEtcItemVo);
					}else if(ischecked.equals("0")){
						eltctrwService.updateEtcItem(ctEtcItemVo);
					}else{
						logger.debug("saveEtcItemList  = >> 수정삭제 예외" +  ""    );
					}
				} else {
					
					logger.debug("saveEtcItemList  = >> Row 수정상태 예외." +  ""    );
				}
			}
			
			//실제  저장
			//eltctrwService.saveEtcItemList(ctEtcItemVoList);

		}catch(AppetizerException e){
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/supupdate")
	public void supuadate(HttpServletRequest request, HttpServletResponse response){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try{
			logger.info("바이어승인상태일때 보완으로 변경");
			String eltCtrwNo = requestHelper.getParameter("eltCtrwNo");
			String ctrwKdc = requestHelper.getParameter("ctrwKdc");
			
			eltctrwService.insertEtcEltNtc(eltCtrwNo, ctrwKdc, "4", "보완", "보완", requestHelper.getUserType(), "0", null, "0", null, requestHelper.getUserID());
			eltctrwService.supuadate(eltCtrwNo, requestHelper.getUserID());
			
		}catch(AppetizerException e){
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	// 전자 계약서 상세 저장 (농협)
	// EltCtrw
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/approveEltCtrwList")
	public void approveEltCtrwList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			DataSet ds_rsclist = requestHelper.getDataSet("ds_rsclist");
			String BUYER_SGNT = requestHelper.getParameter("BUYER_SGNT");
			String NA_TRPL_C = requestHelper.getGlnCode(); // 바이어소속

			String NA_TRPL_SEAL_FLNM = null;
			Map<String, Object> TRPL_CIF = null;
			boolean hasSealElt = false;

			// List<CtEtcItemVO> ctEtcItemVoList = requestHelper.getValueObjects(CtEtcItemVO.class, ds_rsclist);
			List<EltCtrwVO> listEltCtrwVO = requestHelper.getValueObjects(EltCtrwVO.class, ds_rsclist);

			// 직인파일이 필요한 전자계약인지 검사
			for (EltCtrwVO vo : listEltCtrwVO) {
				if (StringUtils.isEmpty(vo.getSEAL_OMIT_YN())) {
					hasSealElt = true;
					break;
				}
			}

			if (hasSealElt) {
				TRPL_CIF = eltctrwService.retrieveTrplCif(NA_TRPL_C);

				if (StringUtils.isEmpty((String) TRPL_CIF.get("NA_TRPL_SEAL_FLNM"))) {
					// 직인 없음
					sendData(response, new PlatformData(), -2, "error.message.server.exception");
					return;
				}

				NA_TRPL_SEAL_FLNM = TRPL_CIF.get("NA_TRPL_SEAL_FLNM").toString();
				logger.debug("NA_TRPL_SEAL_FLNM  = >> 서명파일명 " + NA_TRPL_SEAL_FLNM);
			} else {
				logger.debug("직인파일 불필요");
			}

			// 일괄승인
			eltctrwService.approveEltCtrwList(listEltCtrwVO, BUYER_SGNT, NA_TRPL_SEAL_FLNM, requestHelper.getUserID(), requestHelper.getUserType());
			sendData(response, new PlatformData(), 1, "result.message.save.success");
			
			// 첨부파일 테이블 이동 (IN_PRG => CPL), 스레드
			final List<EltCtrwDcmApdVO> tvo = new ArrayList<EltCtrwDcmApdVO>();
			for (EltCtrwVO vo : listEltCtrwVO) {
				if ("1".equals(vo.getISCHECKED())) {
					final EltCtrwDcmApdVO dcmVo = new EltCtrwDcmApdVO();
					dcmVo.setELT_CTRW_NO(vo.getELT_CTRW_NO());
					dcmVo.setCHG_SQNO(vo.getCHG_SQNO());
					dcmVo.setAPDFL_STS("C");
					dcmVo.setLS_CHGM(requestHelper.getUserID());
					tvo.add(dcmVo);
				}
			}
			if (tvo.size() > 0) {
				new Thread(new Runnable() {
					@Override
					public void run() {
						for (EltCtrwDcmApdVO vo : tvo) {
							eltctrwService.updateDcmApdPosition(vo); // 상태값 변경(I => C)
							eltctrwService.moveDcmApdToCpl(vo); // 완료테이블 복사
							eltctrwService.deleteDcmApdIng(vo); // 진행테이블 삭제
						}
					}
				}).start();
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	//전자 계약서 조회 (농협)
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltCtrwListCh")
	public void retrieveEltCtrwListCh(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay"); // 계약시작0, 만료일1
			String CAL_FROM = requestHelper.getParameter("cal_from"); // 조회 시작일
			String CAL_TO = requestHelper.getParameter("cal_to"); // 조회 종료일
			String EDT_KD = requestHelper.getParameter("edtkd"); // 계약자상호, GLN 코드(입력값)
			String CBO_KD = requestHelper.getParameter("cbokd"); // 계약자상호0, GLN 코드1
			String BUYER_KD = requestHelper.getParameter("buyerkd");
			String FV_STS = requestHelper.getParameter("fv_sts"); // 계약상태
			String FV_MNCTRWKD = requestHelper.getParameter("fv_mnCtrwKd"); // 계약서 종류
			String BUYER_ID = requestHelper.getUserID(); // 바이어 아이디 (로그인한 아이디)
			String BUYER_INFO = requestHelper.getParameter("buyerInfo");// 바이어 아이디 (검색한 바이어)
			String BUYER_DSC = requestHelper.getParameter("buyerDsc");// 바이어 구분
			String BUYER_NA_TRPL_C = requestHelper.getGlnCode(); // 개별 변경일때만 바이어로 조회

			List<Map<String, Object>> EltCtrwList = null;
			DataSetHelper dsHelper = new DataSetHelper("ds_rsclist");
			dsHelper.addColumns(EltCtrwNames.class);

			EltCtrwList = eltctrwService.retrieveEltCtrwListCh(CBO_CONTDAY, CAL_FROM, CAL_TO, EDT_KD, CBO_KD, FV_STS, FV_MNCTRWKD, BUYER_NA_TRPL_C, BUYER_INFO, BUYER_ID, BUYER_DSC, BUYER_KD);
			for (Map<String, Object> map : EltCtrwList) {
				dsHelper.setData(map);
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 계약상대자 전자계약 읽음처리(최종변경시간, 변경자만 업데이트)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/updateColbCompEltSts")
	public void updateColbCompEltSts(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			String eltCtrwNo = requestHelper.getParameter("eltCtrwNo");
			String chgSqno = requestHelper.getParameter("chgSqno");

			eltctrwService.updateColbCompEltSts(eltCtrwNo, chgSqno, requestHelper.getUserID());

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 전자 계약서 조회(팝업)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrievePopupEltCtrwList")
	public void retrievePopupEltCtrwList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String searchType = requestHelper.getParameter("search_type"); // 조회 조건
			String searchText = requestHelper.getParameter("search_text"); // 조회 값
			String calCont = requestHelper.getParameter("cal_cont"); // 조회 시작일
			String calFrom = requestHelper.getParameter("cal_from"); // 조회 시작일
			String calTo = requestHelper.getParameter("cal_to"); // 조회 종료일
			String sts = requestHelper.getParameter("sts"); // 상태
			String buyerCd = requestHelper.getParameter("buyer_cd"); // 계약서 구분
			String userId = requestHelper.getUserID();
			String usrTpc = requestHelper.getUserType(); // 사용자 유형

			Map<String, Object> param = new HashMap<String, Object>();
			param.put("SEARCH_TYPE", searchType);
			param.put("SEARCH_TEXT", searchText);
			param.put("CBO_CONTDAY", calCont);
			param.put("CAL_FROM", calFrom);
			param.put("CAL_TO", calTo);
			param.put("STS", sts);
			param.put("BUYER_CD", buyerCd);
			param.put("BUYER_ID", userId);
			param.put("USR_TPC", usrTpc);

			DataSetHelper dsHelper = new DataSetHelper("ds_elt");
			dsHelper.addColumns(EltCtrwNames.class);

			List<EltCtrwVO> EltCtrwList = eltctrwService.retrievePopupEltCtrwList(param);
			for (EltCtrwVO map : EltCtrwList) {
				dsHelper.setData(map);
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 완료 전자 계약서 조회
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEndEltCtrw")
	public void retrieveEndEltCtrw(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String eltCtrwNo = requestHelper.getParameter("elt_ctrw_no"); // 계약서 번호
			String chgSqno = requestHelper.getParameter("chg_sqno"); // 계약서 순번
			String detail = requestHelper.getParameter("detail"); // 상세계약서 조회여부(Y/N)

			/* 메인계약서 */
			DataSetHelper dsHelper_reg = new DataSetHelper("ds_register");
			dsHelper_reg.addColumns(eltCtrwAmnNames.class);

			List<Map<String, Object>> regList = eltctrwService.retrieveEltCtrwAmnList(eltCtrwNo, chgSqno);
			for (Map<String, Object> map_re : regList) {
				dsHelper_reg.setData(map_re);
			}
			platformData.addDataSet(dsHelper_reg.getDataSet());
			
			/* 계약서상세 */
			if ("Y".equals(detail)) {
				DataSetHelper dsHelper_ctrwDtl = new DataSetHelper("ds_detail");
				dsHelper_ctrwDtl.addColumns(CtEltCtrwDtlNames.class);

				List<Map<String, Object>> ctrwDtlList = eltctrwService.retrieveEltCtrwDtlList(eltCtrwNo, chgSqno);
				for (Map<String, Object> map_ctrwDtl : ctrwDtlList) {
					dsHelper_ctrwDtl.setData(map_ctrwDtl);
				}
				platformData.addDataSet(dsHelper_ctrwDtl.getDataSet());
			}

			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 관련 전자 계약서 조회
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveRelatedEltCtrw")
	public void retrieveRelatedEltCtrw(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String eltCtrwNo = requestHelper.getParameter("relno"); // 계약서 번호
			String chgSqno = requestHelper.getParameter("relseq"); // 계약서 순번

			DataSetHelper dsHelper = new DataSetHelper("ds_elt");
			dsHelper.addColumns(EltCtrwNames.class);

			Map<String, Object> param = new HashMap<String, Object>();
			param.put("REL_NO", eltCtrwNo);
			param.put("REL_SQNO", chgSqno);

			List<EltCtrwVO> EltCtrwList = eltctrwService.retrieveRelatedEltCtrw(param);
			for (EltCtrwVO map : EltCtrwList) {
				dsHelper.setData(map);
			}
			platformData.addDataSet(dsHelper.getDataSet());

			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	// 상품본부, 축산 , 수산등의 코드 분류
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltctrwCDList")
	public void retrieveEltctrwCDList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String USR_TPC = requestHelper.getUserType(); // 사용자 유형
			String SIMP_TPC = requestHelper.getParameter("SIMP_TPC"); // 메인계약서종류
			List<Map<String, Object>> rscList = eltctrwService.retrieveEltctrwCDList(SIMP_TPC, USR_TPC);

			if (rscList != null && rscList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_buyerCode");
				dsHelper.addColumns(rscList.get(0).keySet());
				for (Map<String, Object> vo : rscList) {
					dsHelper.setData(vo);
				}

				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	// 모든 계약서들의 데이터셋 가져오기
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltctrwDSList")
	public void retrieveEltctrwDSList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();
			String CD_TYPE = requestHelper.getParameter("CD_TYPE");
			String BUYER_DSC = requestHelper.getParameter("BUYER_DSC");

			List<Map<String, Object>> rscList = eltctrwService.retrieveEltctrwDSList(CD_TYPE, BUYER_DSC);

			if (rscList != null && rscList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_mnCtrwKdMC");
				dsHelper.addColumns(rscList.get(0).keySet());
				for (Map<String, Object> vo : rscList) {
					dsHelper.setData(vo);
				}

				platformData.addDataSet(dsHelper.getDataSet());
			}

			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 직영점 목록 가져오기
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltBranchBzplcList")
	public void retrieveEltBranchBzplcList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();
			String type = requestHelper.getParameter("t"); // 기본:대표사업장 - 사업자번호 + 대표사업장명, D:소속사업장 - GLN + 소속사업장명
			List<Map<String, Object>> rscList = eltctrwService.retrieveEltBranchBzplcList(type);

			if (rscList != null && rscList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_branch");
				dsHelper.addColumns(rscList.get(0).keySet());
				for (Map<String, Object> vo : rscList) {
					dsHelper.setData(vo);
				}

				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 전자계약 파일 다운로드(BLOB방식)
	 * @param eltCtrwNo 전자계약서번호
	 * @param chgSqno 전자계약일련번호
	 * @param sts 첨부파일 테이블 위치(I:진행중, C:완료, E:종료)
	 * @param sqno 첨부파일일련번호(Optional, sqno 또는 zipYn 중 하나 필수)
	 * @param zipYn 압축여부(Optional, sqno 또는 zipYn 중 하나 필수)
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping(value = "/rest/ct/eltctrw/downloadFile", method = RequestMethod.POST)
	public void fileDownload(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String eltCtrwNo = requestHelper.getParameter("eltCtrwNo");
		String chgSqno = requestHelper.getParameter("chgSqno");
		String sts = requestHelper.getParameter("sts");
		String sqno = requestHelper.getParameter("sqno");
		String zipYn = requestHelper.getParameter("zipYn");
		
		/* 강제 파일 다운로드 방식(null이면 sts에 따라 분기)
		 * DB방식 정착되기 전까지 임시 파라매터 (이후에는 제거)
		 * 플래그 값에 따라 강제로 서버파일로 다운로드 할 수 있도록 함
		 */
		String force = requestHelper.getParameter("force");
		
		// 필수정보누락
		if (StringUtils.isEmpty(eltCtrwNo) || StringUtils.isEmpty(chgSqno)) {
			try {
				response.sendError(400);
			} catch (IOException e) {
				logger.error(e.getMessage());
			}
			return;
		}
		
		// STS값이 있으면 BLOB데이터, 없으면 파일로 다운로드
		if (StringUtils.isEmpty(force) && !StringUtils.isEmpty(sts)) {
//			System.out.println("[ELT TEST] DB 파일 다운로드");
			EltCtrwDcmApdVO param = new EltCtrwDcmApdVO();
			param.setELT_CTRW_NO(eltCtrwNo);
			param.setCHG_SQNO(chgSqno);
			param.setAPDFL_STS(sts);
			param.setSQNO(sqno);
			
			List<EltCtrwDcmApdVO> fileList = eltctrwService.retrieveDcmApdData(param);
			if (fileList.size() > 0) {
				response.setContentType(request.getContentType());
				response.setHeader("Content-Transfer-Encoding", "binary");
				response.setHeader("Set-Cookie", "fileDownload=true; path=/");
				
				// IO Stream
				InputStream is = null;
				OutputStream out = null;
				
				if (fileList.size() == 1 && !"Y".equals(zipYn)) {
					EltCtrwDcmApdVO fileVO = fileList.get(0);
					
					// 파일명으로 사용 불가능한 특수문자 제거
					String fileName = URLEncoder.encode(fileVO.getAPDFLNM().replaceAll("[|\\\\?*<\":>/]", "_"), "UTF-8");
					
					response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\";");
					response.setContentLength(fileVO.getAPDFL_DATA().length);
					
					try {
						is = new ByteArrayInputStream(fileVO.getAPDFL_DATA());
						out = response.getOutputStream();
						IOUtils.copyLarge(is, out);
					} catch (IOException e) {
						logger.error(e.getMessage());
					} finally {
						IOUtils.closeQuietly(is);
					}
				} else {
					InputStream fis = null;
					ZipArchiveOutputStream zos = null;
					
					try {
						int fileIdx = 1;
						zos = new ZipArchiveOutputStream(response.getOutputStream());
						zos.setEncoding("UTF-8");
						response.setHeader("Content-Disposition", "attachment; filename=\"" + URLEncoder.encode("전자계약구비서류(" + eltCtrwNo + ").zip", "UTF-8") + "\";");
						
						for (EltCtrwDcmApdVO vo : fileList) {
							byte[] blob = vo.getAPDFL_DATA();
							String fileName = vo.getAPDFLNM();
							if (StringUtils.isEmpty(fileName) || blob == null) {
								continue;
							}
							
							// 파일명으로 사용 불가능한 특수문자 제거
							String dcmName = vo.getDCM_NM();
							fileName = String.format("%02d_", fileIdx) + new String((dcmName + "_" + fileName).replaceAll("[|\\\\?*<\":>/]", "_").getBytes("UTF8"), "UTF8");
							zos.putArchiveEntry(new ZipArchiveEntry(fileName));
							
							fis = new ByteArrayInputStream(blob);
							
							IOUtils.copyLarge(fis, zos);
							IOUtils.closeQuietly(fis);
							zos.closeArchiveEntry();
							fileIdx++;
						}
						IOUtils.closeQuietly(zos);
					} catch (IOException e) {
						logger.error(e.getMessage());
					} finally {
						IOUtils.closeQuietly(zos);
						IOUtils.closeQuietly(fis);
					}
				}
			} else {
				// 첨부파일 없음
				try {
					response.sendError(400);
				} catch (IOException e) {
					logger.error(e.getMessage());
				}
				return;
			}
		} else {
			// 기존 다운로드(물리적 파일)
//			System.out.println("[ELT TEST] 물리 파일 다운로드");
			File dir = new File(Configurer.getProperty("file.realElt.path"));
			List<Map<String, Object>> fileList = eltctrwService.retrieveEltCtrwFileYn(eltCtrwNo, chgSqno);

			if ("Y".equals(zipYn)) {
				List<Map<String, String>> zipFileList = new ArrayList<Map<String, String>>();
				for (int i = 0; i < fileList.size(); i++) {
					String fileName = (String) fileList.get(i).get("SYSTEMFILENAME");
					String orgName = (String) fileList.get(i).get("ORGFNAME");
					String dcmName = (String) fileList.get(i).get("DCM_NM");

					if (StringUtils.isEmpty(fileName) || StringUtils.isEmpty(orgName)) {
						continue;
					}

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
						ZipUtil.makeZip(request, response, zipFileList, "전자계약구비서류(" + eltCtrwNo + ")");
					} catch (IOException e) {
						sendData(response, new PlatformData(), -1, "error.message.server.exception");
					}
				} else {
					sendData(response, new PlatformData(), -1, "error.message.server.exception");
				}
			} else if (!StringUtils.isEmpty(sqno)) {
				String systemFileName = null;
				String fileName = null;

				for (int i = 0; i < fileList.size(); i++) {
					String _sqno = (String) fileList.get(i).get("SQNO");
					if (sqno.equals(_sqno)) {
						systemFileName = (String) fileList.get(i).get("SYSTEMFILENAME");
						fileName = (String) fileList.get(i).get("ORGFNAME");
						break;
					}
				}

				File downloadFile = new File(dir.getAbsolutePath() + File.separator + systemFileName);
				response.setContentType(request.getContentType());
				response.setContentLength((int) downloadFile.length());
				response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\";");
				response.setHeader("Content-Transfer-Encoding", "binary");
				response.setHeader("Set-Cookie", "fileDownload=true; path=/");
				OutputStream out = null;
				
				try {
					out = response.getOutputStream();
					FileUtils.copyFile(downloadFile, out);
				} catch (IOException ie) {
					logger.error(ie.getMessage(), ie);
				} catch (AppetizerException e) {
					logger.error(e.getMessage(), e);
				} finally {
					IOUtils.closeQuietly(out);
				}
			} else {
				// 첨부파일 없음
				try {
					response.sendError(400);
				} catch (IOException e) {
					logger.error(e.getMessage());
				}
				return;
			}
		}
	}
			
	@RequestMapping(value = "/rest/ct/eltctrw/downloadZipFile", method = RequestMethod.POST)
	public void fileZipDownload(HttpServletRequest request, HttpServletResponse response, String eltCtrwNo, String chgSqno) throws UnsupportedEncodingException {
		List<Map<String, Object>> fileList = eltctrwService.retrieveEltCtrwFileYn(eltCtrwNo, chgSqno);
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
				ZipUtil.makeZip(request, response, zipFileList, "전자계약구비서류(" + eltCtrwNo + ")");
			} catch (IOException e) {
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		} else {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	

	/* 메일내용 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltCtrwMailList")
	public void retrieveEltCtrwMailList(HttpServletRequest request, HttpServletResponse response) {
		
		
		try {
			PlatformData platformData = new PlatformData();
			
			List<Map<String, Object>> list= eltctrwService.retrieveEltCtrwMailList();
			DataSetHelper dsHelper = new DataSetHelper("ds_body");
			
			if(dsHelper != null && list.size() > 0){
				dsHelper.addColumns(list.get(0).keySet());
				for(Map<String, Object> map : list) {
					dsHelper.setData(map);
				}
			}	
			   
			platformData.addDataSet(dsHelper.getDataSet());	
			
			sendData(response, platformData);

		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}           
	}
}