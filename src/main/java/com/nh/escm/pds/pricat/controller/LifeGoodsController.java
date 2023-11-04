package com.nh.escm.pds.pricat.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
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
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.pricat.service.LifeGoodsService;
import com.nh.escm.pds.pricat.vo.LifeGoodsVO;

@RestController
public class LifeGoodsController extends AbstractController{
	
	@Autowired
	private LifeGoodsService lifeservice;
	
	/*
	 * 화면설명 : 공급업체본사 조회
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/LifeGoods/getUpNatrpl")
	public void getUpNatrpl(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String glncode = requestHelper.getParameter("glncode");
			
			DataSetHelper dHelper = new DataSetHelper("ds_uptrpl");
			PlatformData out_PlatformData = new PlatformData();
			
			List<Map<String,Object>> list = lifeservice.getuptrpl(glncode);
			
			dHelper.addColumns(LifeGoodsVO.class);
			for(Map<String ,Object> vo : list){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/LifeGoods/retrieveLifeGoods")
	public void retrieveLifeGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sto_code = requestHelper.getParameter("sto_code"); 		//상품1번 코드
			String sto_code2 = requestHelper.getParameter("sto_code2"); 	//상품2번 코드
			String combo_ctr = requestHelper.getParameter("combo_ctr"); 	//발주처값
			String combo_pay = requestHelper.getParameter("combo_pay");		//가격군코드
			String combo_txt_dsc = requestHelper.getParameter("combo_txt_dsc");//과세구분 코드
			String fsrg_from = requestHelper.getParameter("fsrg_from"); 	//조작일 시작
			String fsrg_to = requestHelper.getParameter("fsrg_to"); 		//조작일 끝
			String fsrg_rdo = requestHelper.getParameter("fsrg_rdo");		//조작일 라디오버튼
			String TRPL_C = requestHelper.getParameter("TRPL_C"); 			//로그인 사업장 코드
			
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String glncode = requestHelper.getParameter("glncode");
			
			if(StringUtils.isEmpty(TRPL_C)) {
				TRPL_C_ARR = glncode.split(",");
			}
			
			String psb_yn = requestHelper.getParameter("psb_yn");
			String del_dtm = requestHelper.getParameter("del_dtm");
			String bzplc = requestHelper.getParameter("bzplc");
			String cbo_bzplc = requestHelper.getParameter("cbo_bzplc");
			String isBzplc = requestHelper.getParameter("isBzplc");
			
			String box_wrs_c_yn =  requestHelper.getParameter("box_wrs_c_yn"); // 박스상품여부
			
			DataSetHelper dHelper = new DataSetHelper("ds_lvchof");
			PlatformData out_PlatformData = new PlatformData();
			
			//페이지
			/*int totalRowCount = lifeservice.lifeschCount(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C_ARR,fsrg_rdo,glncode,psb_yn,del_dtm);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();*/
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			list = lifeservice.lifesch(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C_ARR,fsrg_rdo,glncode,psb_yn,del_dtm,bzplc,isBzplc,cbo_bzplc, box_wrs_c_yn);
			dHelper.addColumns(LifeGoodsVO.class);
			for(Map<String ,Object> vo : list){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			//out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelLifeGoods")
	public void downloadExcelLifeGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sto_code = requestHelper.getParameter("sto_code"); 		//상품1번 코드
			String sto_code2 = requestHelper.getParameter("sto_code2"); 	//상품2번 코드
			String combo_ctr = requestHelper.getParameter("combo_ctr"); 	//발주처값
			String combo_pay = requestHelper.getParameter("combo_pay");		//가격군코드
			String combo_txt_dsc = requestHelper.getParameter("combo_txt_dsc");//과세구분 코드
			String fsrg_from = requestHelper.getParameter("fsrg_from"); 	//조작일 시작
			String fsrg_to = requestHelper.getParameter("fsrg_to"); 		//조작일 끝
			String fsrg_rdo = requestHelper.getParameter("fsrg_rdo");		//조작일 라디오버튼
			String TRPL_C = requestHelper.getParameter("TRPL_C"); 			//로그인 사업장 코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String glncode = requestHelper.getParameter("glncode");			//공급업체본사코드
			String psb_yn = requestHelper.getParameter("psb_yn");
			String del_dtm = requestHelper.getParameter("del_dtm");
			
			String bzplc = requestHelper.getParameter("bzplc");
			String cbo_bzplc = requestHelper.getParameter("cbo_bzplc");
			String isBzplc = requestHelper.getParameter("isBzplc");
			
			if(StringUtils.isEmpty(TRPL_C)) {
				TRPL_C_ARR = glncode.split(",");
			}
			
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd", Locale.getDefault());
			Calendar cal = Calendar.getInstance();
		    cal.setTime(new Date());
		    String today = df.format(cal.getTime());
			
			String fileName = "상품공급가격정보";
			
			if(StringUtils.isNotEmpty(isBzplc)) fileName = "사업장매입가격";
			
			fileName += "_"+today+".xls";
			
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"경제통합사업장코드",
					"경제통합사업장명",
					"경제통합팀코드",
					"가격군코드",
					"상품코드",
					"상품명",
					"매취/수탁명",
					"가격군명",
					"매입단가",
					"판매단가",
					"업체수수료율",
					"관리수수료율",
					"가격정책금수수료율",
					"물류수수료율",
					"직송수수료율",
					"지급기일",
					"발주금지여부",
					"발주금지사유",
					"담당바이어번호",
					"담당바이어명",
					"최초등록일시",
					"최초등록자개인번호",
					"최초등록자경제통합사업장코드",
					"최종변경일시",
					"최종사용자개인번호",
					"최종변경자사업장코드",
					"삭제일시",
					"삭제자",
					"삭제자경제통합사업장코드",
					"수주여부",
					"발주금지여부",
					"박스당입수"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"NA_BZPLC_NM",
					"NA_TEAM_C",
					"PRGR_C",
					"NA_WRS_C",
					"WRSNM",
					"SPY_TPC_NM",
					"PGNM",
					"BYNG_UPR",
					"SEL_UPR",
					"COMP_FEERT",
					"AMN_FEERT",
					"TROT_FEERT",
					"PHD_FEERT",
					"DDLY_PHD_FEERT",
					"PY_FDTCN",
					"ODR_FBID_YN",
					"ODR_FBID_RSNC_NM",
					"CHRG_BUYER_ENO",
					"BUYER_NM",
					"FSRG_DTM",
					"FSRGMN_ENO",
					"FSRGMN_NA_BZPLC",
					"LSCHG_DTM",
					"LS_CMENO",
					"LSCGMN_NA_BZPLC",
					"DEL_DTM",
					"DLMN_ENO",
					"DLMN_NA_BZPLC",
					"RVO_PSB_YN",
					"ODR_PSB_YN",
					"BOXPE_AQZ"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			lifeservice.downloadExcelLifeGoods(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C_ARR,fsrg_rdo,glncode,psb_yn,del_dtm,bzplc,isBzplc,cbo_bzplc,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "상품공급가격정보");
			searchMap.put("상품코드 From", sto_code);
			searchMap.put("상품코드 To", sto_code2);
			searchMap.put("공급업체본사코드", glncode);
			if(StringUtils.isNotEmpty(isBzplc)){
				String str = "사업장";
				if(cbo_bzplc.equals("code")) str += "코드";
				else str += "명";
				searchMap.put(str, bzplc);
			}else{
				searchMap.put("발주처코드", combo_ctr);
			}
			searchMap.put("조작일 시작", fsrg_from);
			searchMap.put("조작일 종료", fsrg_to);
			searchMap.put("조작일 구분코드", fsrg_rdo);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격 조회 (화면출력)
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/oz/pds/pricat/LifeGoods/retrieveLifeGoods")
	public RestResult retrieveLifeGoodsOz(HttpServletRequest request,HttpServletResponse response,
			String TRPL_C_TEXT,
			String sto_code,
			String sto_code2,
			String combo_ctr,
			String combo_pay,
			String combo_txt_dsc,
			String fsrg_from,
			String fsrg_to,
			String fsrg_rdo,
			String TRPL_C,
			String glncode,
			String psb_yn,
			String del_dtm,
			String sName,
			String bzplc,
			String cbo_bzplc,
			String isBzplc
			){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			if(StringUtils.isEmpty(TRPL_C)) {
				TRPL_C_ARR = glncode.split(",");
			}
			
			//타이틀
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			
			String s = "생활물자 공급가격 조회";
			if(StringUtils.isNotEmpty(isBzplc)) s = "사업장 매입가격 조회";
			_title.put("top0", s);
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);
			
			List<LifeGoodsVO> volist  = lifeservice.lifeschprint(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C_ARR,fsrg_rdo,glncode,psb_yn,del_dtm,bzplc,cbo_bzplc,isBzplc);
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(LifeGoodsVO vo : volist){
				HashMap<String, Object> map = new HashMap<String, Object>();
				map.put("NA_BZPLC",StringUtil.toString(vo.getNA_BZPLC()));		//발주처코드
				map.put("CLNTNM",StringUtil.toString(vo.getNA_BZPLC_NM()));		//발주처명
				map.put("NA_WRS_C",StringUtil.toString(vo.getNA_WRS_C()));		//상품코드
				map.put("WRSNM",StringUtil.toString(vo.getWRSNM()));			//상품명
				map.put("SPY_TPC_NM", StringUtil.toString(vo.getSPY_TPC_NM())); //매취,수탁명
				map.put("PRGR_C",StringUtil.toString(vo.getPRGR_C()));			//다매가유형 코드
				map.put("PGNM",StringUtil.toString(vo.getPGNM()));				//다매가유형 명
				map.put("NUM_BYNG_UPR",StringUtil.toString(vo.getBYNG_UPR()));	//원가
				map.put("COMP_FEERT",StringUtil.toString(vo.getCOMP_FEERT()));	//업체
				map.put("AMN_FEERT",StringUtil.toString(vo.getAMN_FEERT()));	//관리
				map.put("TROT_FEERT",StringUtil.toString(vo.getTROT_FEERT()));	//환금
				map.put("PHD_FEERT",StringUtil.toString(vo.getPHD_FEERT()));	//물류
				map.put("DDLY_PHD_FEERT",StringUtil.toString(vo.getDDLY_PHD_FEERT())); //직송
				map.put("PY_FDTCN",StringUtil.toString(vo.getPY_FDTCN()));		//지급기일
				map.put("BUYER_NM",StringUtil.toString(vo.getBUYER_NM()));		//바이어명
				map.put("CHRG_BUYER_ENO",StringUtil.toString(vo.getCHRG_BUYER_ENO()));//바이어코드
				map.put("FSRG_DTM",StringUtil.toString(vo.getFSRG_DTM()));		//등록일
				map.put("LSCHG_DTM",StringUtil.toString(vo.getLSCHG_DTM()));	//수정일
				map.put("DEL_DTM",StringUtil.toString(vo.getDEL_DTM()));		//삭제일
				map.put("LS_CMENO",StringUtil.toString(vo.getLS_CMENO()));		//최종사용자
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
	 * 화면ID : VAN_DS_SC_1530
	 * 화면설명 : 상품 공급가격이력
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/LifeGoods/retrieveLifeGoodsHistorys")
	public void retrieveLifeGoodsHistorys(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sto_code = requestHelper.getParameter("sto_code"); 			//상품 코드
			String gubun = requestHelper.getParameter("gubun");					//구분
			String combo_ctr = requestHelper.getParameter("combo_ctr"); 		//발주처 콤보
			String combo_pay = requestHelper.getParameter("combo_pay"); 		//가격군 콤보
			String combo_txt_dsc = requestHelper.getParameter("combo_txt_dsc"); //과세구분 콤보
			String fsrg_from = requestHelper.getParameter("fsrg_from"); 		//조작일 시작
			String fsrg_to = requestHelper.getParameter("fsrg_to"); 			//조작일 끝
			String fromtordo = requestHelper.getParameter("fromtordo"); 		//조작일 끝
			String glncode = requestHelper.getParameter("glncode"); 			//공급업체 본사
			String TRPL_C = requestHelper.getParameter("TRPL_C"); 				//로그인 사업장 코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DataSetHelper dHelper = new DataSetHelper("ds_hsty");
			PlatformData out_PlatformData = new PlatformData();
			
			List<Map<String,Object>> lifehistory = lifeservice.history(sto_code,gubun,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,fromtordo,TRPL_C_ARR,glncode);
			dHelper.addColumns(LifeGoodsVO.class);
			for(Map<String,Object> lifevo : lifehistory){
				dHelper.setData(lifevo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1530
	 * 화면설명 : 상품 공급가격 조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelLifeGoodsHistorys")
	public void downloadExcelLifeGoodsHistorys(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sto_code = requestHelper.getParameter("sto_code"); 			//상품 코드
			String gubun = requestHelper.getParameter("gubun");					//구분
			String combo_ctr = requestHelper.getParameter("combo_ctr"); 		//발주처 콤보
			String combo_pay = requestHelper.getParameter("combo_pay"); 		//가격군 콤보
			String combo_txt_dsc = requestHelper.getParameter("combo_txt_dsc"); //과세구분 콤보
			String fsrg_from = requestHelper.getParameter("fsrg_from"); 		//조작일 시작
			String fsrg_to = requestHelper.getParameter("fsrg_to"); 			//조작일 끝
			String fromtordo = requestHelper.getParameter("fromtordo");			//조작일 라디오버튼
			String glncode = requestHelper.getParameter("glncode"); 			//공급업체 본사
			String TRPL_C = requestHelper.getParameter("TRPL_C"); 				//로그인 사업장 코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String fileName = "상품공급가격이력.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"경제통합사업장코드",
					"경제통합사업장명",
					"경제통합팀코드",
					"가격군코드",
					"변경적용일시",
					"상품코드",
					"상품명",
					"매취/수탁명",
					"가격군명",
					"매입단가",
					"판매단가",
					"업체수수료율",
					"관리수수료율",
					"가격정책금수수료율",
					"물류수수료율",
					"직송수수료율",
					"지급기일",
					"발주금지여부",
					"발주금지사유",
					"담당바이어번호", //20
					"바이어명",
					"최초등록일시",
					"최초등록자개인번호",
					"최초등록자경제통합사업장코드",
					"최종변경일시",
					"최종변경자개인번호",
					"최종변경자사업장코드",
					"삭제일시",
					"삭제자",
					"삭제자경제통합사업장코드"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"NA_BZPLC_NM",
					"NA_TEAM_C",
					"PRGR_C",
					"APL_DT",
					"NA_WRS_C",
					"WRSNM",
					"SPY_TPC_NM",
					"PGNM",
					"BYNG_UPR",
					"SEL_UPR",
					"COMP_FEERT",
					"AMN_FEERT",
					"TROT_FEERT",
					"PHD_FEERT",
					"DDLY_PHD_FEERT",
					"PY_FDTCN",
					"ODR_FBID_YN",
					"ODR_FBID_RSNC_NM",
					"CHRG_BUYER_ENO", //20
					"BUYER_NM",
					"FSRG_DTM",
					"FSRGMN_ENO",
					"FSRGMN_NA_BZPLC",
					"LSCHG_DTM",
					"LS_CMENO",
					"LSCGMN_NA_BZPLC",
					"DEL_DTM",
					"DLMN_ENO",
					"DLMN_NA_BZPLC"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			lifeservice.downloadExcelLifeGoodsHistorys(sto_code,gubun,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,fromtordo,TRPL_C_ARR,glncode, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "상품공급가격이력");
			searchMap.put("공급업체 본사", glncode);
			searchMap.put("상품코드", sto_code);
			searchMap.put("상품구분", gubun);
			searchMap.put("발주처코드", combo_ctr);
			searchMap.put("가격군코드", combo_pay);
			searchMap.put("과세구분코드", combo_txt_dsc);
			searchMap.put("조작일자 구분코드", fromtordo);
			searchMap.put("조작일자 시작", fsrg_from);
			searchMap.put("조작일자 종료", fsrg_to);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1530
	 * 화면설명 : 상품 공급가격 이력 (화면출력)
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/oz/pds/pricat/LifeGoods/retrieveLifeGoodsHistorys")
	public RestResult retrieveLifeGoodsHistorysOz(HttpServletRequest request,HttpServletResponse response,
			String TRPL_C_TEXT,
			String sto_code,
			String gubun,
			String combo_ctr,
			String combo_pay,
			String combo_txt_dsc,
			String fsrg_from,
			String fsrg_to,
			String fromtordo,
			String glncode,
			String TRPL_C,
			String sName){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			//타이틀
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);
			
			List<LifeGoodsVO> volist  = lifeservice.historyprint(sto_code,gubun,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,fromtordo,TRPL_C_ARR,glncode);
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(LifeGoodsVO vo : volist){
				HashMap<String, Object> map = new HashMap<String, Object>();
				map.put("NA_BZPLC",StringUtil.toString(vo.getNA_BZPLC()));				//발주처코드
				map.put("NA_BZPLC_NM",StringUtil.toString(vo.getNA_BZPLC_NM()));		//발주처명
				map.put("NA_WRS_C",StringUtil.toString(vo.getNA_WRS_C()));				//상품코드
				map.put("WRSNM",StringUtil.toString(vo.getWRSNM()));					//상품명
				map.put("APL_DT",StringUtil.toString(vo.getAPL_DT()));					//적용일자
				map.put("SPY_TPC_NM", StringUtil.toString(vo.getSPY_TPC_NM())); 		//매취,수탁
				map.put("PRGR_C",StringUtil.toString(vo.getPRGR_C()));					//다매가유형
				map.put("PGNM",StringUtil.toString(vo.getPGNM()));						//다매가유형명
				map.put("BYNG_UPR",StringUtil.toString(vo.getBYNG_UPR()));				//매입단가
				map.put("COMP_FEERT",StringUtil.toString(vo.getCOMP_FEERT()));			//업체
				map.put("AMN_FEERT",StringUtil.toString(vo.getAMN_FEERT()));			//관리
				map.put("TROT_FEERT",StringUtil.toString(vo.getTROT_FEERT()));			//환금
				map.put("PHD_FEERT",StringUtil.toString(vo.getPHD_FEERT()));			//물류
				map.put("DDLY_PHD_FEERT",StringUtil.toString(vo.getDDLY_PHD_FEERT()));	//직송
				map.put("PY_FDTCN",StringUtil.toString(vo.getPY_FDTCN()));				//지급기일
				map.put("FSRG_DTM",StringUtil.toString(vo.getFSRG_DTM()));				//등록일
				map.put("LSCHG_DTM",StringUtil.toString(vo.getLSCHG_DTM()));			//변경일
				map.put("DEL_DTM",StringUtil.toString(vo.getDEL_DTM()));				//삭제일
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
