package com.nh.escm.scm.retann.controller;

import java.util.ArrayList;
import java.util.HashMap;
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
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.common.vo.SQLNames.RightsBizPlace;
import com.nh.escm.scm.retann.service.RetannService;
import com.nh.escm.scm.retann.vo.RetannCnfVO;
import com.nh.escm.scm.retann.vo.RetannRqtDetailVO;
import com.nh.escm.scm.retann.vo.RetannRqtMasterSumVO;
import com.nh.escm.scm.retann.vo.RetannRqtMasterVO;
import com.nh.escm.scm.retann.vo.RetannRqtSlpVO;
import com.nh.escm.util.PageHelper;

/**
 * 반품업무 - 반품입고 의뢰 조회, 반품입고 확인 등록
 * @author HyeRim.Oh
 *
 */
@RestController
public class RetannController extends AbstractController {
	
	@Autowired
	private RetannService retannService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	/*
	 * 화면ID : VAN_DS_SC_0600
	 * 화면설명 : 반품입고 의뢰 조회 마스터
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/retann/retrieveRqtMasterSumList")
	public void retrieveRqtMasterSumList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String rpt = requestHelper.getParameter("rpt");  //본/지사코드				
		String rgd = requestHelper.getParameter("rgd");  //반품처코드
		String rgdRqt = requestHelper.getParameter("rgd_rqt");  //반품의뢰처코드
		String fromDate = requestHelper.getParameter("from_date");   //조회시작일
		String toDate = requestHelper.getParameter("to_date");  //조회종료일
		String naRgdStsDsc = requestHelper.getParameter("na_rgd_sts_dsc");  //반품상태구분코드
		
		String RPT_ALL = requestHelper.getGlnCode();	
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_retannRqtSumM");
			dsHelper.addColumns(RetannRqtMasterSumVO.class);
			List<RetannRqtMasterSumVO> list = retannService.retrieveRqtMasterSumList(rpt,rgd,rgdRqt,fromDate,toDate,naRgdStsDsc,RPT_ALL);
			
			for(RetannRqtMasterSumVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0600
	 * 화면설명 : 반품입고 의뢰 조회 두번째 그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/retann/retrieveRqtMasterList")
	public void retrieveRqtMasterList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String rgd = requestHelper.getParameter("rgd");  //반품처코드
		String rgdRqt = requestHelper.getParameter("rgd_rqt");  //반품의뢰처코드
		String naTeamC = requestHelper.getParameter("na_team_c");  //경제통합팀코드
		String rgdRgDt = requestHelper.getParameter("rgd_rg_dt");  //반품등록일자
		String naRgdStsDsc = requestHelper.getParameter("na_rgd_sts_dsc");  //반품상태구분코드
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_retannRqtM");
			dsHelper.addColumns(RetannRqtMasterVO.class);
			List<RetannRqtMasterVO> list = retannService.retrieveRqtMasterList(rgd,rgdRqt,naTeamC,rgdRgDt,naRgdStsDsc);
			
			for(RetannRqtMasterVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0600
	 * 화면설명 : 반품입고 의뢰 조회 세번째 그리드
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/retann/retrieveRqtDetailList")
	public void retrieveRqtDetailList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
				
		String rgdRqt = requestHelper.getParameter("rgd_rqt");  //반품의뢰처코드
		String naTeamC = requestHelper.getParameter("na_team_c");  //경제통합팀코드
		String rgdRgDt = requestHelper.getParameter("rgd_rg_dt");  //반품등록일자
		String rgdPlaNo = requestHelper.getParameter("rgd_pla_no");  //반품예정번호
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_retannRqtD");
			dsHelper.addColumns(RetannRqtDetailVO.class);
			List<RetannRqtDetailVO> list = retannService.retrieveRqtDetailList(rgdRqt,naTeamC,rgdRgDt,rgdPlaNo);
			
			for(RetannRqtDetailVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0600_P00
	 * 화면설명 : 반품입고 의뢰 조회 화면의 협력업체본지사 조회 팝업
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/retann/getMbco")	
	public void getMbco(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);		
		
		String searchType = requestHelper.getParameter("searchType");  //본지사코드
		String searchText = requestHelper.getParameter("searchText");  //본지사이름
		String NATRPLC_GLN = requestHelper.getGlnCode();  //로그인한 자기 gln코드 (본사만 협력업체본지사 팝업 볼수 있다.)
		PlatformData platformData = new PlatformData();
		
		try {			
		/*if(StringUtils.isNotEmpty(naTrplC)) {*/
			DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
			dsHelper.addColumns(RightsBizPlace.class);
			
			List<Map<String, Object>> list = retannService.getMbco(searchType,searchText,NATRPLC_GLN);
				for(Map<String, Object> map : list) {
					dsHelper.setData(map);
				}
		    platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (AppetizerException e) {
				sendData(response, platformData, -1, e.getMessage());
			}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0610
	 * 화면설명 : 반품입고확인등록 그리드 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/retann/retrieveCnfList")	
	public void retrieveCnfList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String mbcoCode = requestHelper.getParameter("mbco_code");  //본/지사코드
		String ynAplySomae = requestHelper.getParameter("yn_aply_somae");  //반품의뢰처유형
		String searchDate = requestHelper.getParameter("search_date");  //반품요청일
		String rgdPlaNo = requestHelper.getParameter("rgd_pla_no");  //반품요청번호
		String rgdRqtCode = requestHelper.getParameter("rgd_rqt_code");  //반품의뢰처코드
		String trDsc = requestHelper.getParameter("tr_dsc");  //거래구분
		String rgdAmnDsc = requestHelper.getParameter("rgd_amn_dsc");  //반품관리구분코드
		String naRgdStsDsc = requestHelper.getParameter("na_rgd_sts_dsc");  //반품상태구분코드
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			// Paging
			int totalRowCount = retannService.getCnfCount(mbcoCode, ynAplySomae, searchDate, rgdPlaNo, rgdRqtCode, trDsc, rgdAmnDsc, naRgdStsDsc);			
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int limit = pageHelper.getEnd();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_retannCnf");
			dsHelper.addColumns(RetannCnfVO.class);
			List<RetannCnfVO> list = retannService.retrieveCnfList(mbcoCode, ynAplySomae, searchDate, rgdPlaNo, rgdRqtCode, trDsc, rgdAmnDsc, naRgdStsDsc
					,start, limit);
			
			for(RetannCnfVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(pageHelper.getDsPageVo()); //paging
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0610_P00
	 * 화면설명 : 반품의뢰전표 팝업 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/retann/retrieveRqtSlpList")	
	public void retrieveRqtSlpList(HttpServletRequest request, HttpServletResponse response) {
	
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String dvyRqrDtFr = requestHelper.getParameter("dvy_rqr_dt_fr");  //조회시작일
		String dvyRqrDtTo = requestHelper.getParameter("dvy_rqr_dt_to");  //조회종료일
		String rgdPlaNo = requestHelper.getParameter("rgd_pla_no");  //전표번호
		String naTrplC = requestHelper.getParameter("na_trpl_c");  //반품의뢰처코드
		
		//String mbcoCode = requestHelper.getGlnCode();//본/지사코드
		String mbcoCode = requestHelper.getParameter("mbco_code");//본/지사코드
		
		//mbcoCode = "8808983300108";
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_retannCnf");
			dsHelper.addColumns(RetannRqtSlpVO.class);
			List<RetannRqtSlpVO> list = retannService.retrieveRqtSlpList(dvyRqrDtFr, dvyRqrDtTo, rgdPlaNo, naTrplC, mbcoCode);
			
			for(RetannRqtSlpVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0610
	 * 화면설명 : 반품입고확인등록 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/retann/saveCnf")	
	public void saveCnf(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		/*
		업데이트 된건 반품예정상세 테이블에 조정단가 업데이트			
		저장 버튼 누를시 반품예정기본 테이블에 반품확인일시, 경제통합반품상태구분코드를 확인(03)으로 바꿔줌				
		반품확인기본 테이블에 1줄 업데이트
		반품확인상세 테이블에 여러줄 업데이트	
	  
		대상: 데이터셋
		1. TB_BY_RTNCNF_M - 데이터셋 내용, 한번저장 ,insert
		2. TB_BY_RTNCNF_D - 데이터셋 내용, 전체저장, insert
		2. TB_OD_RTNPLN_M - 상태값변경, 한번저장, update
		3. TB_OD_RTNPLN_D - 데이터셋 내용, 변경된 값에 전체저장, update
		for(int i=0;  i< list.size() ; i++){				
		}			
		*/
		
		try {
			PlatformData out_PlatformData = new PlatformData();					
			
			DataSet ds = requestHelper.getDataSet("ds_retannCnf");			
			String userID = requestHelper.getUserID(); //조정자 개인번호
			//userID = "123456789";
			String rDate = DateUtil.getCurrentDate("yyyyMMdd"); //조정일자
			
			//List<RetannCnfVO> list = requestHelper.getValueObjects(RetannCnfVO.class, ds);
			List<RetannCnfVO> list =ValueObjectSetUtil.dataSetToVO(ds, RetannCnfVO.class);
			for(RetannCnfVO vo : list){
				if(vo.getDsRowType() == DataSet.ROW_TYPE_UPDATED){
				vo.setAJMN_ENO(userID);
				vo.setAJ_DT(rDate);
				}
			}
			
			retannService.saveCnf(list);		
			if(list != null && list.size() > 0) {
				try {
					boolean checked =sentCheckService.RTNCNFCheckSendState(
							list.get(0).getNA_TRPL_C(),
							list.get(0).getNA_TEAM_C(),
							list.get(0).getRGD_RG_DT(),
							list.get(0).getRGD_PLA_NO());
					if(checked)
						sendData(response, out_PlatformData);
				} catch (NHSentErrorException e) {
					String eb = e.getMessage();
					sendData(response, out_PlatformData, -999, eb);
				}
			} else {
				sendData(response, out_PlatformData);
			}
			
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0600
	 * 화면설명 : 반품입고 의뢰 조회 마스터 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRqtMaster")
	public void downloadExcelRqtMaster(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		/*
		String fileName = "반품입고의뢰조회_기준정보.xls";
		 
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
			String rpt = request.getParameter("rpt");  //본/지사코드				
			String rgd = request.getParameter("rgd");  //반품처코드
			String rgdRqt = request.getParameter("rgd_rqt");  //반품의뢰처코드
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String naRgdStsDsc = request.getParameter("na_rgd_sts_dsc");  //반품상태구분코드
			
			String RPT_ALL = requestHelper.getGlnCode();
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			/*
			String[] header = {"반품처","반품처명","반품의뢰처","반품의뢰처명","전화번호",
									"반품등록일","반품번호","상태","반품확인일시","매입전표일자",
									"매입전표번호","의뢰처팀","품목수","반품수량","반품금액",
									"매입확정수량","매입확정금액","부가세액","공병금액","환급수수료액",
									"물류수수료액","회수예정일자","공급유형","수요자계약유형","XML반품예정번호",
									"비고","최종변경일시","최종변경자개인번호","삭제일시",
									"상품코드","상품명","단가","반품수량",
									"반품금액","매입확정수량","매입확정금액","부가세액","환급수수료액",
									"물류수수료액","공병금액","반품사유","조정단가"};
			String[] keyIndex = {"RVOPL_NA_TRPL_C","RVOPL_CLNTNM","NA_TRPL_C","CLNTNM","TEL",
										"RGD_RG_DT","RGD_PLA_NO","NA_RGD_STS_DSC","RTNCNF_DTM","OGN_SLPNO",
										"OSLIP_DT","NA_TEAM_C","ITEM_CNT","RGD_QT","RGD_AM",
										"BYNG_DFN_QT","BYNG_DFN_AM","RGD_VAT","VCBT_AM","BYNG_DFN_TROT_FEE",
										"BYNG_DFN_PHD_FEE","WDR_PLA_DT","SPY_TPC","CSER_CTR_TPC","XML_RGD_PLA_NO",
										"RMK_CNTN","LSCHG_DTM","LS_CMENO","DEL_DTM",
										"NA_WRS_C","WRSNM","RGD_UPR","RGD_QT_D",
										"RGD_AM_D","BYNG_DFN_QT_D","BYNG_DFN_AM_D","RGD_VAT_D","BYNG_DFN_TROT_FEE_D",
										"BYNG_DFN_PHD_FEE_D","VCBT_AM_D","NA_RGD_RSN_DSC","AJ_UPR"};			
			*/
			String[] header = {
					"경제통합거래처코드",
					"경제통합거래처명",
					"경제통합팀코드",
					"반품등록일자",
					"반품예정번호",
					"반품일련번호",
					"수주처경제통합거래처코드",
					"수주처경제통합거래처명",
					"수주처경제통합팀코드",
					"회수처경제통합거래처코드",
					"회수처경제통합거래처명",
					"회수처경제통합팀코드",
					"경제통합상품코드",
					"생산년도",
					"과세구분코드",
					"반품사유구분코드",
					"박스상품여부",
					"공병경제통합상품코드",
					"공병금액",
					"반품단가",
					"반품수량",
					"반품부가세",
					"반품금액",
					"매입확정단가",
					"매입확정수량",
					"매입확정부가세",
					"매입확정금액",
					"매입확정공병금액",
					"매입확정장려금",
					"매입확정환급수수료",
					"매입확정물류수수료",
					"매입확정운임보조비",
					"비고내용",
					"최초등록일시",
					"최초등록자개인번호",
					"최종변경일시",
					"최종변경자개인번호",
					"삭제일시",
					"상품약어명",
					"상품규격",
					"단위코드",
					"단위코드명",
					"반품사유구분코드명",
					"조정단가",
					"공급처경제통합거래처코드",
					"공급처경제통합거래처명"
			};
			String[] keyIndex = {
					"NA_TRPL_C",
					"NA_TRPL_NM",
					"NA_TEAM_C",
					"RGD_RG_DT",
					"RGD_PLA_NO",
					"RGD_SQNO",
					"RVOPL_NA_TRPL_C",
					"RVOPL_NA_TRPL_NM",
					"RVOPL_NA_TEAM_C",
					"WDRPL_NA_TRPL_C",
					"WDRPL_NA_TRPL_NM",
					"WDRPL_NA_TEAM_C",
					"NA_WRS_C",
					"PD_YY",
					"TXT_DSC",
					"NA_RGD_RSN_DSC",
					"BOX_WRS_YN",
					"VCBT_NA_WRS_C",
					"VCBT_AM",
					"RGD_UPR",
					"RGD_QT",
					"RGD_VAT",
					"RGD_AM",
					"BYNG_DFN_UPR",
					"BYNG_DFN_QT",
					"BYNG_DFN_VAT",
					"BYNG_DFN_AM",
					"BYNG_DFN_VCBT_AM",
					"BYNG_DFN_SSDY",
					"BYNG_DFN_TROT_FEE",
					"BYNG_DFN_PHD_FEE",
					"BYNG_DFN_FAR_ASTCS",
					"RMK_CNTN",
					"FSRG_DTM",
					"FSRGMN_ENO",
					"LSCHG_DTM",
					"LS_CMENO",
					"DEL_DTM",
					"WRS_ABR_NM",
					"WRS_STDNM",
					"NA_WRS_UNT_C",
					"NA_WRS_UNT_NM",
					"NA_RGD_RSN_DSC_NM",
					"AJ_UPR",
					"SPYPL_NA_TRPL_C",
					"CLNTNM"	
			};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);			
			
			retannService.downloadExcelRetann(rpt,rgd,rgdRqt,fromDate,toDate,naRgdStsDsc,RPT_ALL,handler);			
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "반품입고의뢰조회");
			searchMap.put("본/지사코드", rpt);
			searchMap.put("반품처코드", rgd);
			searchMap.put("반품의뢰처코드", rgdRqt);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("반품상태구분코드", naRgdStsDsc);
			searchMap.put("거래처코드", RPT_ALL);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0600
	 * 화면설명 : 반품입고 의뢰 조회 디테일 - 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelRqtDetail")
	public void downloadExcelRqtDetail(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		/*
		String fileName = "반품입고의뢰조회_상세정보.xls";
		
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
			String rpt = request.getParameter("rpt");  //본/지사코드				
			String rgd = request.getParameter("rgd");  //반품처코드
			String rgdRqt = request.getParameter("rgd_rqt");  //반품의뢰처코드
			String fromDate = request.getParameter("from_date");   //조회시작일
			String toDate = request.getParameter("to_date");  //조회종료일
			String naRgdStsDsc = request.getParameter("na_rgd_sts_dsc");  //반품상태구분코드
			
			String RPT_ALL = requestHelper.getGlnCode();
			
			//두번째 시트			
			String rgdRqt_d = request.getParameter("rgd_rqt_d");  //반품의뢰처코드
			String naTeamC = request.getParameter("na_team_c_d");  //경제통합팀코드
			String rgdRgDt = request.getParameter("rgd_rg_dt_d");  //반품등록일자
			String rgdPlaNo = request.getParameter("rgd_pla_no_d");  //반품예정번호
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {"반품처","반품처명","반품의뢰처","반품의뢰처명","전화번호",
					"반품등록일","반품번호","반품일련번호","상태","반품확인일시","매입전표일자",
					"매입전표번호","의뢰처팀","품목수","반품수량","반품금액",
					"매입확정수량","매입확정금액","부가세액","공병금액","환급수수료액",
					"물류수수료액","회수예정일자","공급유형","수요자계약유형","XML반품예정번호",
					"비고","최종변경일시","최종변경자개인번호","삭제일시",
					"상품코드","상품명","단가","반품수량",
					"반품금액","매입확정수량","매입확정금액","부가세액","환급수수료액",
					"물류수수료액","공병금액","반품사유","조정단가"};
			String[] keyIndex = {"RVOPL_NA_TRPL_C","RVOPL_CLNTNM","NA_TRPL_C","CLNTNM","TEL",
						"RGD_RG_DT","RGD_PLA_NO","RGD_SQNO","NA_RGD_STS_DSC","RTNCNF_DTM","OGN_SLPNO",
						"OSLIP_DT","NA_TEAM_C","ITEM_CNT","RGD_QT","RGD_AM",
						"BYNG_DFN_QT","BYNG_DFN_AM","RGD_VAT","VCBT_AM","BYNG_DFN_TROT_FEE",
						"BYNG_DFN_PHD_FEE","WDR_PLA_DT","SPY_TPC","CSER_CTR_TPC","XML_RGD_PLA_NO",
						"RMK_CNTN","LSCHG_DTM","LS_CMENO","DEL_DTM",
						"NA_WRS_C","WRSNM","RGD_UPR","RGD_QT_D",
						"RGD_AM_D","BYNG_DFN_QT_D","BYNG_DFN_AM_D","RGD_VAT_D","BYNG_DFN_TROT_FEE_D",
						"BYNG_DFN_PHD_FEE_D","VCBT_AM_D","NA_RGD_RSN_DSC","AJ_UPR"};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);			
			
			retannService.downloadExcelRetannDetail(rpt,rgd,rgdRqt,fromDate,toDate,naRgdStsDsc,RPT_ALL,rgdRqt_d,naTeamC,rgdRgDt,rgdPlaNo,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "반품입고의뢰조회");			
			searchMap.put("본/지사코드", rpt);
			searchMap.put("반품처코드", rgd);
			searchMap.put("반품의뢰처코드", rgdRqt);
			searchMap.put("조회시작일", fromDate);
			searchMap.put("조회종료일", toDate);
			searchMap.put("반품상태구분코드", naRgdStsDsc);
			searchMap.put("거래처코드", RPT_ALL);
			searchMap.put("경제통합팀코드", naTeamC);
			searchMap.put("반품등록일자", rgdRgDt);
			searchMap.put("반품예정번호", rgdPlaNo);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0600
	 *  화면설명 : 반품입고 의뢰조회 최상단 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/retann/printRqtListAll")
	public RestResult printRqtListAll(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C, String rpt, String rgd, String rgd_rqt,
			String from_date, String to_date, String na_rgd_sts_dsc, String sName){
				
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String RPT_ALL = requestHelper.getGlnCode();
			
			String from_date_t = "";
			String to_date_t = "";
			
			if(StringUtils.isNotEmpty(from_date)) from_date_t = from_date.substring(0,4)+"-"+from_date.substring(4,6)+"-"+from_date.substring(6,8);  //반품의뢰기간 조회시작일자
			else from_date_t = "";
			if(StringUtils.isNotEmpty(to_date)) to_date_t = to_date.substring(0,4)+"-"+to_date.substring(4,6)+"-"+to_date.substring(6,8);  //반품의뢰기간 조회종료일자
			else to_date_t = "";			
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", "반품의뢰기간 ["+from_date_t+" ~ "+to_date_t+"]");
			title.add(_title);
			
			//리스트(필요한것만 필터링)			
			List<RetannRqtMasterSumVO> volist = retannService.retrieveRqtMasterSumList(rpt,rgd,rgd_rqt,from_date,to_date,na_rgd_sts_dsc,RPT_ALL);
						
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> detailList = new ArrayList<Map<String,Object>>();
			
			for(RetannRqtMasterSumVO vo : volist){
				
				Map<String,Object> masterMap = new LinkedHashMap<String, Object>();				
				
				String NA_TRPL_C = StringUtil.toString(vo.getNA_TRPL_C());
				String NA_TEAM_C = StringUtil.toString(vo.getNA_TEAM_C());
				String RGD_RG_DT = StringUtil.toString(vo.getRGD_RG_DT());
				String RGD_PLA_NO = StringUtil.toString(vo.getRGD_PLA_NO());
				masterMap.put("key1",NA_TRPL_C); //반품의뢰처
				masterMap.put("key2",NA_TEAM_C); //반품의뢰처코드
				masterMap.put("key3",RGD_RG_DT); //반품등록일자
				masterMap.put("key4",RGD_PLA_NO); //반품예정번호				
				masterMap.put("NA_TRPL_C",NA_TRPL_C); //반품의뢰처
				masterMap.put("NA_TEAM_C",NA_TEAM_C); //팀코드
				masterMap.put("CLNTNM",StringUtil.toString(vo.getCLNTNM()));	//반품의뢰처명
				masterMap.put("RGD_RG_DT",DateUtil.getDateFormat(RGD_RG_DT,"yyyy-MM-dd")); //반품등록일자
				masterMap.put("RGD_PLA_NO",RGD_PLA_NO); //반품예정번호
				masterMap.put("RGD_QT",StringUtil.toString(vo.getRGD_QT())); //반품수량
				masterMap.put("RGD_AM",StringUtil.toString(vo.getRGD_AM())); //반품금액
				//반품확정단가 - 없애기로함				
				masterMap.put("BYNG_DFN_QT",StringUtil.toString(vo.getBYNG_DFN_QT())); //반품확정수량
				masterMap.put("BYNG_DFN_AM",StringUtil.toString(vo.getBYNG_DFN_AM())); //반품확정금액
				masterList.add(masterMap);				 
				
				//디테일				
				List<RetannRqtDetailVO> detailvoList = retannService.retrieveRqtDetailList(NA_TRPL_C,NA_TEAM_C,RGD_RG_DT,RGD_PLA_NO);
								
				for(int i=0 ; i<detailvoList.size();i++){
				//for(RetannRqtDetailVO detailvo : detailvoList){
					RetannRqtDetailVO detailvo = detailvoList.get(i);
					Map<String,Object> detailMap = new LinkedHashMap<String, Object>();
					detailMap.put("no",(i+1)); //반품의뢰처
					detailMap.put("key1",NA_TRPL_C); //반품의뢰처
					detailMap.put("key2",NA_TEAM_C); //반품의뢰처코드
					detailMap.put("key3",RGD_RG_DT); //반품등록일자
					detailMap.put("key4",RGD_PLA_NO); //반품예정번호
					detailMap.put("NA_WRS_C",StringUtil.toString(detailvo.getNA_WRS_C())); //상품코드
					detailMap.put("WRSNM",StringUtil.toString(detailvo.getWRSNM())); //상품명
					detailMap.put("NA_WRS_UNT",StringUtil.toString(detailvo.getNA_WRS_UNT())); //규격
					detailMap.put("NA_WRS_UNT_C",StringUtil.toString(detailvo.getNA_WRS_UNT_C())); //단위
					detailMap.put("RGD_UPR",detailvo.getRGD_UPR()); //반품단가
					detailMap.put("RGD_QT",detailvo.getRGD_QT()); //반품수량
					detailMap.put("RGD_AM",detailvo.getRGD_AM()); //반품금액
					detailMap.put("BYNG_DFN_UPR",detailvo.getBYNG_DFN_UPR()); //매입확정단가
					detailMap.put("BYNG_DFN_QT",detailvo.getBYNG_DFN_QT()); //매입확정수량
					detailMap.put("BYNG_DFN_AM",detailvo.getBYNG_DFN_AM()); //매입확정금액
					detailList.add(detailMap);
				}
			}
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(title);			
			all_list.add(masterList);
			all_list.add(detailList);
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0600
	 *  화면설명 : 반품입고 의뢰조회 마스터 그리드 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/retann/printRqtListMaster")
	public RestResult printRqtListMaster(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C, String rpt, String rgd, String rgd_rqt,
			String from_date, String to_date, String na_rgd_sts_dsc, String sName){		
				
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String RPT_ALL = requestHelper.getGlnCode();
			
			String from_date_t = "";
			String to_date_t = "";
			
			if(StringUtils.isNotEmpty(from_date)) from_date_t = from_date.substring(0,4)+"-"+from_date.substring(4,6)+"-"+from_date.substring(6,8);  //반품의뢰기간 조회시작일자
			else from_date_t = "";
			if(StringUtils.isNotEmpty(to_date)) to_date_t = to_date.substring(0,4)+"-"+to_date.substring(4,6)+"-"+to_date.substring(6,8);  //반품의뢰기간 조회종료일자
			else to_date_t = "";			
			
			//타이틀 
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", "반품의뢰기간 ["+from_date_t+" ~ "+to_date_t+"]");
			title.add(_title);
			
			
			//리스트(필요한것만 필터링)
			
			List<RetannRqtMasterSumVO> volist = retannService.retrieveRqtMasterSumList(rpt,rgd,rgd_rqt,from_date,to_date,na_rgd_sts_dsc,RPT_ALL);
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(RetannRqtMasterSumVO vo : volist){
				Map<String,Object> map = new HashMap<String, Object>();			
					
				map.put("RVOPL_NA_TRPL_C",vo.getRVOPL_NA_TRPL_C()); //반품처
				map.put("RVOPL_CLNTNM",vo.getRVOPL_CLNTNM()); //반품처명
				map.put("NA_TRPL_C",vo.getNA_TRPL_C()); //반품의뢰처
				map.put("CLNTNM",vo.getCLNTNM()); //반품의뢰처명
				map.put("TEL",vo.getTEL()); //전화번호
				map.put("RGD_QT",vo.getRGD_QT()); //반품수량
				map.put("RGD_AM",vo.getRGD_AM()); //반품금액
				map.put("BYNG_DFN_AM",vo.getBYNG_DFN_AM()); //매입확정금액
				map.put("RGD_VAT",vo.getRGD_VAT()); //부가세액
				map.put("VCBT_AM",vo.getVCBT_AM()); //공병금액
				map.put("BYNG_DFN_TROT_FEE",vo.getBYNG_DFN_TROT_FEE()); //환급수수료액
				map.put("BYNG_DFN_PHD_FEE",vo.getBYNG_DFN_PHD_FEE()); //물류수수료액

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
	
	

}
