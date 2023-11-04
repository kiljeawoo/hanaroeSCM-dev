package com.nh.escm.pds.company.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
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
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.pds.company.service.CompanyService;
import com.nh.escm.pds.company.vo.CompanyInfVO;
import com.nh.escm.pds.company.vo.CompanyReqFile;
import com.nh.escm.pds.company.vo.CompanyReqVO;
import com.nh.escm.pds.company.vo.CompanyVO;
import com.nh.escm.pds.sales.service.PDSSalesService;
import com.nh.escm.util.PageHelper;

@RestController
public class CompanyController extends AbstractController {
	@Autowired
	private CompanyService companyService;
	
	@Autowired
	private PDSSalesService pdsSalesService;

	@Autowired
	private SequenceKeyService sequenceKeyService;
	
	/*
	 * 화면ID : VAN_DS_SC_1400
	 * 화면설명 : 자사정보조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/company/Company/Company")
	public void retrieveCompany(String userKey,HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			CompanyVO comvo = companyService.selectInfo(TRPL_C_ARR);
			
			DataSetHelper dHelper = new DataSetHelper("ds_infodata");
			
			dHelper.addColumns(CompanyVO.class);
			dHelper.setData(comvo);
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/company/Company/CompanyUsers")
	public void retrieveCompanyUsers(HttpServletRequest request, HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			// 본사일경우 공통로직에서 null 이거나 undefined 인 경우 gln코드를 세션에서 다시 조회한다.
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String RDO_CHK = requestHelper.getParameter("RDO_CHK");	//사용자 조회구분코드
			String EDT_NM = requestHelper.getParameter("EDT_NM");	//사용자 edit
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_master_data");
			
			dHelper.addColumns(CompanyInfVO.class);
			
			List<Map<String,Object>> userlist = companyService.selectUser(TRPL_C_ARR,RDO_CHK,EDT_NM);
			
			for(Map<String,Object> uservo : userlist){
				dHelper.setData(uservo);
			}
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		}catch(AppetizerException e){
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리 조회
	 * 화면설명 : 엑셀다운로드
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelCompanyUsers")
	public void downloadExcelCompanyUsers(HttpServletRequest request, HttpServletResponse response){
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String fileName = "자사사용자관리.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try {			
			
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String RDO_CHK = requestHelper.getParameter("RDO_CHK");	//사용자 조회구분코드
			String EDT_NM = requestHelper.getParameter("EDT_NM");	//사용자 edit
			
			List<Map<String,Object>> userlist = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"회원ID",
					"사용자명",
					"협력업체 코드",
					"협력업체명",
					"전화번호",
					"휴대전화번호",
					"이메일",
					"상태",
					"최근접속일",
					"사업자번호",
					"우편번호",
					"기본주소",
					"승인여부"
					};
			String[] keyIndex = {
					"MB_ID",
					"USR_NM",
					"NA_TRPL_C",
					"CLNTNM",
					"USR_TELNO",
					"USR_MPNO",
					"USR_EMAIL",
					"ENT_PRG_STSC",
					"LGIN_DTM",
					"BZNO",
					"ZIP",
					"DONGUP",
					"HOFF_APV_YN"
					};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, userlist);					
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			companyService.downloadExcelCompanyUsers(TRPL_C_ARR,RDO_CHK,EDT_NM, handler);
			
			String RDO_CHK_NAME = "";
			
			if(RDO_CHK.equals("1")){
				RDO_CHK_NAME = "회원ID";
			}else if(RDO_CHK.equals("2")){
				RDO_CHK_NAME = "사용자명";
			}
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "자사사용자관리");
			searchMap.put("사용자 조회구분", RDO_CHK_NAME);
			searchMap.put(RDO_CHK_NAME, EDT_NM);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendHtmlAlert(response, e.getMessage());
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리 수정
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/company/Company/UpdateCompanyUsers")
	public void updateCompanyUsers(HttpServletRequest request, HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMain = in_dsList.get("ds_master_data");
			List<CompanyInfVO> list = ValueObjectSetUtil.dataSetToVO(dsMain, CompanyInfVO.class);
			
			companyService.updateUser(dsMain,list);
			
			sendData(response, out_PlatformData);
			
		}catch(AppetizerException e){
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_1420
	 * 화면설명 : 본지사조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/company/Company/CompanyTypes")
	public void retrieveCompanyTypes(HttpServletRequest request, HttpServletResponse response){
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String TRPL_CODE = TRPL_C_ARR[0];
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_cif");
			
			List<Map<String,Object>> mblist = pdsSalesService.retrieveMbcoDsc(TRPL_CODE);
			String na_mbco_dsc = mblist.get(0).get("NA_MBCO_DSC")+"";
			
			List<CompanyVO> userlist = new ArrayList<CompanyVO>();
			dHelper.addColumns(CompanyVO.class);
			userlist = companyService.selectSearch(TRPL_C_ARR,na_mbco_dsc);
			for(CompanyVO companyvo : userlist){
				dHelper.setData(companyvo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		}catch(AppetizerException e){
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 *  화면ID : VAN_DS_SC_1420
	 *  화면설명 : 본지사조회 (출력화면)
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pds/company/Company/CompanyTypes")
	public RestResult retrieveCompanyTypesOZ(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C,String sName,String TRPL_C_TEXT){
		
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String TRPL_CODE = TRPL_C_ARR[0];
			
			List<Map<String,Object>> mblist = pdsSalesService.retrieveMbcoDsc(TRPL_CODE);
			String na_mbco_dsc = mblist.get(0).get("NA_MBCO_DSC")+"";
			//타이틀
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			String mbText = "";
			if(na_mbco_dsc.equals("1")){
				mbText = "본사";
			}else{
				mbText = "지사";
			}
			_title.put("search", TRPL_C_TEXT+" ,본/지사 구분: "+mbText);
			title.add(_title);
			
			
			//리스트(필요한것만 필터링)
			List<CompanyVO> userlist = companyService.selectSearch(TRPL_C_ARR,na_mbco_dsc);
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(CompanyVO vo : userlist){
				Map<String,Object> map = new HashMap<String, Object>();
				String trpl_c = vo.getNA_TRPL_C();
				String clntnm = vo.getCLNTNM();
				String mbco_dsc = vo.getNA_MBCO_DSC();
				if(mbco_dsc.equals("1")) mbco_dsc = "본사(소)";
				else mbco_dsc= "지사(소)";
				map.put("trpl_c", trpl_c);
				map.put("clntnm", clntnm);
				map.put("mbco_dsc", mbco_dsc);
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
	
	/*
	 * 화면ID : PDS.COMPANY.VAN_DS_SC_1430
	 * 화면설명 : 메뉴권한관리 저장
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/company/saveUsrMenuAuthList")
	public void saveUsrMenuAuthList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			List<Map<String, String>> list = new ArrayList<Map<String, String>>();
			
			DataSet ds = requestHelper.getDataSet("ds_userList");
			if (ds != null) {
				int rowCnt = ds.getRowCount();
				for (int i = 0; i < rowCnt; i++) {
					if (ds.getRowType(i) != DataSet.ROW_TYPE_UPDATED) {
						continue; // 변경된 내용만 받는다.
					}
					
					Map<String, String> vo = new HashMap<String, String>();
					vo.put("MB_ID", ds.getString(i, "MB_ID")); // 회원ID
					vo.put("SCM_ORDER_F", ds.getString(i, "SCM_ORDER_F", "1")); // 수주업무 (기본값: 1)
					vo.put("SCM_DELIVERY_F", ds.getString(i, "SCM_DELIVERY_F", "1")); // 배송업무 (기본값: 1)
					vo.put("SCM_RECADV_F", ds.getString(i, "SCM_RECADV_F", "1")); // 검수업무 (기본값: 1)
					vo.put("PDS_OUTER_F", ds.getString(i, "PDS_OUTER_F", "1")); // 출고정보 (기본값: 1)
					vo.put("PDS_SALES_F", ds.getString(i, "PDS_SALES_F", "1")); // 부가정보 (기본값: 1)
					vo.put("ANL_MARKET_F", ds.getString(i, "ANL_MARKET_F", "1")); // 카테고리 판매정보 (기본값: 1)
					
					list.add(vo);
				}
			}
			
			companyService.saveUsrMenuAuthList(list, requestHelper.getUserID());
			
			sendData(response, new PlatformData()); // SUCCESS
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : PDS.COMPANY.VAN_DS_SC_1430
	 * 화면설명 : 메뉴권한관리 조회
	 */
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/company/retrieveUsrMenuAuthList")
	public void retrieveUsrMenuAuthList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");	// 권한사업장 코드
			String RDO_CHK = requestHelper.getParameter("RDO_CHK");	// 사용자 조회구분 (1: 회원ID, 2: 사용자명)
			String EDT_NM = requestHelper.getParameter("EDT_NM");	// 사용자 조회값
			
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String, Object>> list = companyService.retrieveUsrMenuAuthList(TRPL_C_ARR, RDO_CHK, EDT_NM);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_userList");
			if (list.size() > 0) {
				dsHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> vo : list) {
					dsHelper.setData(vo);
				}
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData); // SUCCESS
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1401
	 * 화면설명 : 거래처수정요청
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/company/companyModReq")
	public void companyModReq(HttpServletRequest request, HttpServletResponse response) throws IOException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String CTCPL = requestHelper.getParameter("CTCPL");	// 신청자 연락처
			String userId = requestHelper.getUserID();
			String gln = requestHelper.getGlnCode();
			
			DataSet dsInfo = requestHelper.getDataSet("ds_infodata"); // 거래처정보
			DataSet dsUpload = requestHelper.getDataSet("ds_upload"); // 이미지파일데이터
			
//			List<CompanyReqVO> reqVoList = requestHelper.getValueObjects(CompanyReqVO.class, dsInfo);
			List<CompanyReqFile> filelist = ValueObjectSetUtil.dataSetToVO(dsUpload, CompanyReqFile.class);
//			CompanyReqVO reqVO = reqVoList.get(0);
			String VAN_C_RQ_NO = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_GD_TRPLTP_RG_REQ_FILE);
			CompanyReqVO reqVO = new CompanyReqVO();
			reqVO.setFSRGMN_ENO(userId);
			reqVO.setLS_CHGM(userId);
			reqVO.setFSRGMN_NA_TRPLC(gln);
			reqVO.setCTCPL_TELNO(CTCPL);
			reqVO.setNA_C_RQ_OBJ_DSC("2"); // 거래처의 경우 2
			reqVO.setRQ_CNTN("거래처 정보 변경 신청");
			
			if (dsInfo != null) {
				int rowCnt = dsInfo.getRowCount();
				for (int i = 0; i < rowCnt; i++) {
					if (dsInfo.getRowType(i) != DataSet.ROW_TYPE_UPDATED) {
						continue; // 변경된 내용만 받는다.
					}
					
					boolean hasTel = false; // 전화번호 변경여부
					boolean hasFax = false; // 팩스번호 변경여부
					
					String tel1=null, tel2=null, tel3=null;
					String fax1=null, fax2=null, fax3=null;
					
					// 업데이트 된 컬럼
					for (int j=0; j<dsInfo.getColumnCount(); j++) {
						String colNm = dsInfo.getColumn(j).getName();
						String update = dsInfo.getString(i, colNm);
						String saved = dsInfo.getSavedStringData(i, colNm);
						
						// 주소, 전화번호, 팩스번호만 처리
						if ("NA_TRPL_C".equals(colNm)) {
							reqVO.setNA_TRPL_C(saved);
						} else if ("NA_TRPL_DSC".equals(colNm)) {
							reqVO.setNA_TRPL_DSC(saved);
						} else if (update != null && !update.equals(saved)) {
//							System.out.println(colNm + " : " + saved + " => " + update);
							
//							if ("CLNTNM".equals(colNm)) {
//								reqVO.setCLNTNM(update);
//							} else if ("TRPL_ABR_NM".equals(colNm)) {
//								reqVO.setTRPL_ABR_NM(update);
//							} else
							if ("FZIP".equals(colNm)) {
								reqVO.setFZIP(update);
							} else if ("RZIP".equals(colNm)) {
								reqVO.setRZIP(update);
							} else if ("ZIP_SQNO".equals(colNm)) {
								reqVO.setZIP_SQNO(update);
							} else if ("BLD_AMNNO".equals(colNm)) {
								reqVO.setBLD_AMNNO(update);
							} else if ("OLD_NEW_ADR_DSC".equals(colNm)) {
								reqVO.setOLD_NEW_ADR_DSC(update);
							} else if ("DONGUP".equals(colNm)) {
								reqVO.setDONGUP(update);
							} else if ("DONGBW".equals(colNm)) {
								reqVO.setDONGBW(update);
							} else if ("ATEL".equals(colNm)) {
								hasTel = true;
							} else if ("HTEL".equals(colNm)) {
								hasTel = true;
							} else if ("STEL".equals(colNm)) {
								hasTel = true;
							} else if ("FAX_RGNO".equals(colNm)) {
								hasFax = true;
							} else if ("HFAX".equals(colNm)) {
								hasFax = true;
							} else if ("FAX_SQNO".equals(colNm)) {
								hasFax = true;
							}
//							else if ("NA_RGN_C".equals(colNm)) {
//								reqVO.setNA_RGN_C(update);
//							} else if ("NA_MBCO_DSC".equals(colNm)) {
//								reqVO.setNA_MBCO_DSC(update);
//							} else if ("UP_NA_TRPL_C".equals(colNm)) {
//								reqVO.setUP_NA_TRPL_C(update);
//							}
						}

						if ("ATEL".equals(colNm)) {
							tel1 = update;
						} else if ("HTEL".equals(colNm)) {
							tel2 = update;
						} else if ("STEL".equals(colNm)) {
							tel3 = update;
						} else if ("FAX_RGNO".equals(colNm)) {
							fax1 = update;
						} else if ("HFAX".equals(colNm)) {
							fax2 = update;
						} else if ("FAX_SQNO".equals(colNm)) {
							fax3 = update;
						}
					}
					
					// 전화번호와 팩스번호는 변경시 모든 컬럼 변경
					if (!hasTel) {
						reqVO.setATEL(null);
						reqVO.setHTEL(null);
						reqVO.setSTEL(null);
					} else {
						reqVO.setATEL(tel1);
						reqVO.setHTEL(tel2);
						reqVO.setSTEL(tel3);
					}

					if (!hasFax) {
						reqVO.setFAX_RGNO(null);
						reqVO.setFAX_SQNO(null);
						reqVO.setHFAX(null);
					} else {
						reqVO.setFAX_RGNO(fax1);
						reqVO.setHFAX(fax2);
						reqVO.setFAX_SQNO(fax3);
					}
				}
				reqVO.setVAN_C_RQ_NO(VAN_C_RQ_NO);
				companyService.insertCompanyModReq(reqVO);
				
				// file (테이블 생성 후 활성화)
				companyService.fileReq(reqVO.getNA_TRPL_C(), VAN_C_RQ_NO, dsUpload, filelist);
			}
			sendData(response, new PlatformData()); // SUCCESS
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정 신청내역 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/company/retrieveCompanyModReq")
	public void retrieveCompanyModReq(String userKey,HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String DT_STDT = requestHelper.getParameter("dt_stdt");
			String DT_EDDT = requestHelper.getParameter("dt_eddt");
//			String CBO_REQDSC = requestHelper.getParameter("cbo_reqDsc");
			String CBO_RESDSC = requestHelper.getParameter("cbo_resDsc");
			String CBO_CORPDSC = requestHelper.getParameter("cbo_corpDsc");
			String EDT_CORP = requestHelper.getParameter("edt_corp");
			String CBO_BUYERDSC = requestHelper.getParameter("cbo_buyerDsc");
			String EDT_BUYER = requestHelper.getParameter("edt_buyer");

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DT_STDT", DT_STDT);
			param.put("DT_EDDT", DT_EDDT);
//			param.put("CBO_REQDSC", CBO_REQDSC);
			param.put("CBO_RESDSC", CBO_RESDSC);
			param.put("CBO_CORPDSC", CBO_CORPDSC);
			param.put("EDT_CORP", EDT_CORP);
			param.put("CBO_BUYERDSC", CBO_BUYERDSC);
			param.put("EDT_BUYER", EDT_BUYER);

			// 본부회원일 때 모든 거래처 조회
			if (!"02".equals(requestHelper.getUserType())) {
				param.put("TRPL_C", TRPL_C_ARR);
			}
			
			// 페이징
			int totalRowCount = companyService.retrieveCompanyModReqCount(param);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			param.put("start", start);
			param.put("end", end);

			// 첨부파일
//			DataSet in_upload = requestHelper.getDataSet("in_upload");
//			List<ProductReqFile> filelist = ValueObjectSetUtil.dataSetToVO(in_upload, ProductReqFile.class);
			
			List<Map<String,Object>> list = companyService.retrieveCompanyModReq(param);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_trpl_rq");
			if (list.size() > 0) {
				dsHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> vo : list) {
					dsHelper.setData(vo);
				}
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(pageHelper.getDsPageVo());
			sendData(response, platformData); // SUCCESS
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정요청 취소
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/company/companyModDelReq")
	public void companyModDelReq(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String NA_C_RQ_NO = requestHelper.getParameter("NA_C_RQ_NO");	// 신청자 연락처
			String userId = requestHelper.getUserID();
			String gln = requestHelper.getGlnCode();
			
			CompanyReqVO reqVO = new CompanyReqVO();
			reqVO.setFSRGMN_ENO(userId);
			reqVO.setFSRGMN_NA_TRPLC(gln);
			
			if (!StringUtil.isNullCheck(NA_C_RQ_NO)) {
				reqVO.setNA_C_RQ_NO(NA_C_RQ_NO);
				int cnt = companyService.retrieveCompanyModReqExist(reqVO);
				if (cnt > 0) {
					companyService.insertCompanyDelReq(reqVO);
					sendData(response, new PlatformData()); // SUCCESS
				} else {
					sendData(response, new PlatformData(), -2, "해당되는 요청내역을 찾을 수 없습니다.");					
				}
			} else {
				sendData(response, new PlatformData(), -3, "요청내역이 없거나 올바르지 않습니다.");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
}
