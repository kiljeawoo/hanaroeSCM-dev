package com.nh.escm.pds.partner.controller;

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
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.pds.company.vo.CompanyVO;
import com.nh.escm.pds.partner.service.TradeService;
import com.nh.escm.pds.partner.vo.TradeOutVO;
import com.nh.escm.pds.partner.vo.TradePopVO;
import com.nh.escm.pds.partner.vo.TradeTrnrelReqVO;
import com.nh.escm.pds.partner.vo.TradeTrnrelVO;
import com.nh.escm.pds.partner.vo.TradeVO;

@RestController
public class TradeController extends AbstractController{
	
	@Autowired
	private TradeService tradeservice;
	@Autowired
	private SentCheckService sentCheckService;
	/*
	 * 화면ID : VAN_DS_SC_1300,1310
	 * 화면설명 : 상위사업장을 이용한 거래처조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrievePopData")
	public void retrievePopData(HttpServletRequest request,HttpServletResponse response){
		try {
			//상위 사업장을 이용하여 콤보박스안의 사업장을 구한다.
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String trpl_c = requestHelper.getParameter("TRPL_C");				//로그인 사업장코드
			String mbcoType = requestHelper.getParameter("mbcoType");			//로그인 본지사 구분코드 
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_RQR_NA_TRPL_C");
			
			list = tradeservice.initdata(trpl_c,mbcoType);
			
			dHelper.addColumns(CompanyVO.class);
			for(Map<String, Object> vo:list){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response,out_PlatformData,1,"success.init.combo");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : 
	 * 화면설명 : 거래관계 조회
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/getFlexTrades")
	public void getFlexTrades(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			
			PlatformData out_PlatformData = new PlatformData();
			
			DataSetHelper dHelper = new DataSetHelper("ds_ROTS_FLEX_PR_APL_YN");
			
			List<Map<String, Object>> list = tradeservice.rotsflex(TRPL_C);
			
			int resultnum = 0;
			if(list.size() > 0){
				resultnum = 1;
			}else{
				resultnum = 0;
			}
			
			dHelper.addColumns(CompanyVO.class);
			for(Map<String, Object> vo:list){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response,out_PlatformData,resultnum,"SUCCESS");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	
	/*
	 * 화면ID : 
	 * 화면설명 : 거래처관계 조회
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveTrnrel")
	public void retrieveTrnrel(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("trpl_c");
			
			PlatformData out_PlatformData = new PlatformData();
			
			List<Map<String,Object>> list = tradeservice.retrieveTrnrel(TRPL_C);
			int resultnum = 0;
			if(list.size() > 0){
				resultnum = 1;
			}else{
				resultnum = 0;
			}
			sendData(response,out_PlatformData,resultnum,"SUCCESS");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1302
	 * 화면설명 : 거래처조회 팝업
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrievePopTrades")
	public void retrievePopup(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_KIND = requestHelper.getParameter("TRPL_C_KIND");
			String NAAC_DSC = requestHelper.getParameter("NAAC_DSC");
			String searchText = requestHelper.getParameter("searchText");
			
			DataSetHelper dHelper = new DataSetHelper("ds_master_data");
			
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			list = tradeservice.retrievePopup(TRPL_C_KIND,NAAC_DSC,searchText);
			
			dHelper.addColumns(TradePopVO.class);
			for(Map<String, Object> vo : list){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response,out_PlatformData,1,"success.data");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 자체 거래관계 등록
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveDirectTrade")
	public void insertDirectTrade(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String separator = requestHelper.getParameter("separator");		//구분코드
			String  TRPL_C= requestHelper.getParameter("TRPL_C");			//로그인 사업장코드
			
			DataSet tempds = requestHelper.getDataSet("ds_master_datas");	//데이터셋 값을 가져온다

			//DataSetHelper ds_pop = new DataSetHelper("ds_pop_data");
			DataSetHelper ds_master_data = new DataSetHelper("ds_master_data");
			DataSetHelper ds_cif_info = new DataSetHelper("ds_CIF_INFO");
			
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			//공급자 정보
			if(separator.equals("0")){
				list = tradeservice.selectcif(TRPL_C);
				
				ds_cif_info.addColumns(TradePopVO.class);
				for(Map<String,Object> vo:list){
					ds_cif_info.setData(vo);
				}
				out_PlatformData.addDataSet(ds_cif_info.getDataSet());
				sendData(response,out_PlatformData);
			//요청거래관계 검색 후 선택한 row 정보를 master 화면에서 수정하여 저장 할 때
			}else if(separator.equals("1")){
				List<TradeVO> volist = ValueObjectSetUtil.dataSetToVO(tempds, TradeVO.class);
				String rqr_dt_today = requestHelper.getParameter("RQR_DT_TODAY");
				String init_data = requestHelper.getParameter("INIT_DATA");
				String hoff_trpl_c = requestHelper.getParameter("SPYPL_HOFF_NA_TRPL_C");
				String splr_telno = requestHelper.getParameter("SPLR_CTR_CHRR_TELNO");
				String splr_mpno = requestHelper.getParameter("SPLR_CTR_CHRR_MPNO");
				String cser_telno = requestHelper.getParameter("CSER_CTR_CHRR_TELNO");
				String cser_mpno = requestHelper.getParameter("CSER_CTR_CHRR_MPNO");
				int result = 0;
				int rowType = tempds.getRowType(0);
				if(rowType == DataSet.ROW_TYPE_INSERTED){
					if(init_data.equals("0")){
						result = tradeservice.insertDirectTrade(volist.get(0),rqr_dt_today,hoff_trpl_c,splr_telno,splr_mpno,cser_telno,cser_mpno);
					}else{
						String TR_RQR_SQNO = requestHelper.getParameter("TR_RQR_SQNO");
						tradeservice.updateDirectTrade(volist,TR_RQR_SQNO);
					}
					sendData(response,out_PlatformData,result,"success.update.data");
				}
			//요청거래관계검색 팝업창 데이터 조회 
			}else if(separator.equals("2")){
				/*String CSER_CTR_TPC = requestHelper.getParameter("CSER_CTR_TPC");	//계약유형
				String SPY_TPC = requestHelper.getParameter("SPY_TPC");				//공급유형
				String CSER_TRPL_C = requestHelper.getParameter("DATA00");			//수요자 코드
				String RQR_NA_TRPL_C = requestHelper.getParameter("DATA03");		//요청사업장 코드
				
				list = tradeservice.popupDirectTrade(TRPL_C,CSER_CTR_TPC,SPY_TPC,CSER_TRPL_C,RQR_NA_TRPL_C);
				ds_pop.addColumns(TradeTrnrelReqVO.class);
				for(Map<String, Object> v:list){
					ds_pop.setData(v);
				}
				out_PlatformData.addDataSet(ds_pop.getDataSet());
				sendData(response,out_PlatformData);*/
			//팝업창에서 선택한 데이터를 불러와서 master 화면에 보여준다.
			}else if(separator.equals("3")){ 
				String RQR_NA_TRPL_C = requestHelper.getParameter("RQR_NA_TRPL_C");
				String RQR_NA_TEAM_C = requestHelper.getParameter("RQR_NA_TEAM_C");
				String RQR_DT = requestHelper.getParameter("RQR_DT");
				String TR_RQR_SQNO = requestHelper.getParameter("TR_RQR_SQNO");
				
				list = tradeservice.selectDirectTrade(RQR_NA_TRPL_C,RQR_NA_TEAM_C,RQR_DT,TR_RQR_SQNO);
				ds_master_data.addColumns(TradeTrnrelReqVO.class);
				
				for(Map<String, Object> vo:list){
					ds_master_data.setData(vo);
				}
				out_PlatformData.addDataSet(ds_master_data.getDataSet());
				sendData(response,out_PlatformData,1,"success.search.data");
			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2)
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveHanaroTrades")
	public void retrieveHanaroTrades(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();

			String separator = requestHelper.getParameter("separator");		//초기화면 조회,조회,수정,삭제 구분코드
			String glncode = requestHelper.getParameter("glncode");			//로그인 사업장
			String userId = requestHelper.getUserID();
			String mbcoType = requestHelper.getParameter("mbcoType");		//로그인
			String TRPL_C= requestHelper.getParameter("TRPL_C");			//사업장코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper); //사업장코드 배열형태
			
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMain = in_dsList.get("ds_master_data"); // 오른쪽 그리드 마스터 데이터
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			List<TradeTrnrelVO> list2 = ValueObjectSetUtil.dataSetToVO(dsMain, TradeTrnrelVO.class);
			//조회
			if(separator.equals("1")){
				DataSetHelper dHelper2 = new DataSetHelper("ds_master_data");	//사업장 목록 데이터셋
				String local_code = requestHelper.getParameter("local_code");	//지역코드
				String ser_na = requestHelper.getParameter("ser_na");
				String cser_na = requestHelper.getParameter("cser_na");
				String cser_team = requestHelper.getParameter("cser_team");
				String rdo_gubun = requestHelper.getParameter("rdo_gubun");
				String UP_TRPL_C = requestHelper.getParameter("UP_TRPL_C");
				
				list = tradeservice.selectHanaroTrades(TRPL_C_ARR,local_code,ser_na,cser_na,cser_team,rdo_gubun,UP_TRPL_C);
				
				dHelper2.addColumns(TradeTrnrelVO.class);
				
				for(Map<String, Object> vo:list){
					dHelper2.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper2.getDataSet());
				sendData(response,out_PlatformData,1,"success.search.data");

			}else if(separator.equals("2")){


				/*
				 * 그리드 정보 UPDATE,DELETE
				 * 저장, 삭제
				 */
				List<String> vanNoList = tradeservice.insertHanaroTrades(glncode,userId,mbcoType,dsMain,list2);
				
				if(vanNoList == null){
					
					sendData(response,out_PlatformData,-999,"마트와 대리점의 거래관계를 한개 이상 유지하기 위하여 거래관계가 두개 이상인 경우만 삭제를 허용합니다. ");
					
				}else {
					/*
					    //무조건 true  리턴 
						    boolean checked = sentCheckService.TRHARAROCheckSendState(vanNoList);
						    if(checked)
					 * */
					
					if(	vanNoList.size() < 1){
						sendData(response,out_PlatformData,-999,"기존거래관계가 금일 등록 또는 변경되어 변경이 불가능합니다. ");
					}else {
						sendData(response,out_PlatformData,1,"msg.comp.save");
					}

					
					
				}
					

			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 엑셀다운
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/TradesExcelDownload")
	public void excelDownTrades(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();

			String separator = requestHelper.getParameter("separator");		//초기화면 조회,조회,수정,삭제 구분코드
			String glncode = requestHelper.getParameter("glncode");			//로그인 사업장
			String userId = requestHelper.getUserID();
			String mbcoType = requestHelper.getParameter("mbcoType");		//로그인
			String TRPL_C= requestHelper.getParameter("TRPL_C");			//사업장코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper); //사업장코드 배열형태
			
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMain = in_dsList.get("ds_master_data"); // 오른쪽 그리드 마스터 데이터
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			List<TradeTrnrelVO> list2 = ValueObjectSetUtil.dataSetToVO(dsMain, TradeTrnrelVO.class);
			//조회
			if(separator.equals("1")){
				DataSetHelper dHelper2 = new DataSetHelper("ds_excel");	//사업장 목록 데이터셋
				String local_code = requestHelper.getParameter("local_code"); //지역코드
				String ser_na = requestHelper.getParameter("ser_na");
				String cser_na = requestHelper.getParameter("cser_na");
				String cser_team = requestHelper.getParameter("cser_team");
				String rdo_gubun = requestHelper.getParameter("rdo_gubun");
				String UP_TRPL_C = requestHelper.getParameter("UP_TRPL_C");
				
				list = tradeservice.selectHanaroTrades(TRPL_C_ARR,local_code,ser_na,cser_na,cser_team,rdo_gubun,UP_TRPL_C);
				dHelper2.addColumns(TradeTrnrelVO.class);
				for(Map<String, Object> vo:list){
					dHelper2.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper2.getDataSet());
				sendData(response,out_PlatformData,1,"success.search.data");
	
			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1311
	 * 화면설명 : 하나로 요청거래관계검색 팝업 데이터 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveTrnrelPopup")
	public void retrieveTrnrelPopup(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CSER_CTR_TPC = requestHelper.getParameter("CSER_CTR_TPC");	//계약유형
			String SPY_TPC = requestHelper.getParameter("SPY_TPC");				//공급유형
			String CSER_TRPL_C = requestHelper.getParameter("DATA00");			//수요자 코드
			String CSER_TEAM = requestHelper.getParameter("DATA02");			//수요자 팀코드
			String RQR_NA_TRPL_C = requestHelper.getParameter("DATA03");		//요청사업장 코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			DataSetHelper ds_pop = new DataSetHelper("ds_pop_data");
			
			list = tradeservice.popupDirectTrade(TRPL_C,CSER_CTR_TPC,SPY_TPC,CSER_TRPL_C,CSER_TEAM,RQR_NA_TRPL_C);
			ds_pop.addColumns(TradeTrnrelVO.class);
			for(Map<String, Object> v:list){
				ds_pop.setData(v);
			}
			out_PlatformData.addDataSet(ds_pop.getDataSet());
			sendData(response,out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveFlexTrades")
	public void retrieveFlexTrades(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			String trpl_c= requestHelper.getParameter("TRPL_C");			//사업장코드
			String separator = requestHelper.getParameter("separator");		//조회 구분
			String gubun = requestHelper.getParameter("GUBUN");
			String userId = requestHelper.getUserID();
			String local_code = requestHelper.getParameter("local_code");
			String na_gubun = requestHelper.getParameter("na_gubun");
			String schtext = requestHelper.getParameter("schtext");
			
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMaster = in_dsList.get("ds_master_data");
			DataSet dsDetail = in_dsList.get("ds_detail_data");
			
			DataSetHelper dHelper1 = new DataSetHelper("ds_master_data");
			DataSetHelper dHelper2 = new DataSetHelper("ds_detail_data");
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			List<TradeTrnrelVO> list1 = ValueObjectSetUtil.dataSetToVO(dsMaster, TradeTrnrelVO.class);
			List<TradeTrnrelVO> list2 = ValueObjectSetUtil.dataSetToVO(dsDetail, TradeTrnrelVO.class);
			
			if(separator.equals("2")){
				list = tradeservice.selectFlexTrades(trpl_c,local_code,gubun,na_gubun,schtext);
				dHelper1.addColumns(TradeTrnrelVO.class);
				for(Map<String, Object> vo : list){
					dHelper1.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper1.getDataSet());
				sendData(response,out_PlatformData);
			//디테일 데이터 조회
			}else if(separator.equals("3")){
				String rowp = requestHelper.getParameter("rowp");
				String cser_c = requestHelper.getParameter("cser_c");
				String cser_team = requestHelper.getParameter("cser_team");
				String cser_amnno = requestHelper.getParameter("cser_amnno");
				list = tradeservice.selectFlexTradesD(list1,trpl_c,rowp,cser_c,cser_team,cser_amnno);
				dHelper2.addColumns(TradeTrnrelVO.class);
				for(Map<String, Object> vo : list){
					dHelper2.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper2.getDataSet());
				sendData(response,out_PlatformData);
			//디테일 공급처 변경
			}else if(separator.equals("4")){
				String vanNo = tradeservice.insertFlexTrades(list2,dsDetail,trpl_c,userId);
				try {
					boolean checked =sentCheckService.TRFLEXCheckSendState(vanNo);
					if(checked)
						sendData(response,out_PlatformData, 1, "SUCCESS");
				} catch (NHSentErrorException e) {
					String eb = e.getMessage();
					sendData(response, out_PlatformData, -999, eb);
				}
			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1322
	 * 화면설명 : 탄력업체 요청거래관계검색 팝업 데이터 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveTrnrelFlexPopup")
	public void retrieveTrnrelFlexPopup(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String CSER_CTR_TPC = requestHelper.getParameter("CSER_CTR_TPC");	//계약유형
			String SPY_TPC = requestHelper.getParameter("SPY_TPC");				//공급유형
			String CSER_TRPL_C = requestHelper.getParameter("DATA00");			//수요자 코드
			String CSER_TEAM = requestHelper.getParameter("DATA02");			//수요자 팀코드
			String RQR_NA_TRPL_C = requestHelper.getParameter("DATA03");		//요청사업장 코드
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_master_data");
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			
			/*list = tradeservice.retrieveTrnrelFlexPopup(CSER_CTR_TPC,SPY_TPC,CSER_TRPL_C,CSER_TEAM,RQR_NA_TRPL_C,TRPL_C);
			
			ds_pop.addColumns(TradeTrnrelVO.class);
			for(Map<String, Object> v:list){
				ds_pop.setData(v);
			}
			out_PlatformData.addDataSet(ds_pop.getDataSet());
			sendData(response,out_PlatformData);*/
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1330
	 * 화면설명 : 거래관계조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveTrades")
	public void retrieveExcelTrade(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String rdochoose = requestHelper.getParameter("rdochoose");		// 조회구분 라디오값
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper); //사업장코드 배열형태
			String inputTRPL_C = requestHelper.getParameter("inputTRPL_C");	// 수요자,공급자 거래처 조회 입력
			String inputTEAM = requestHelper.getParameter("inputTEAM");	// 수요자,공급자 거래처 팀코드
			String combochk1 = requestHelper.getParameter("combochk1");		// 계약유형
			String combochk2 = requestHelper.getParameter("combochk2");		// 공급유형
			String combochk3 = requestHelper.getParameter("combochk3");		// 상품대분류코드
			String combochk4 = requestHelper.getParameter("combochk4"); 	// 상품중분류코드
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_master_data");
			
			List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
			
			list = tradeservice.selectTrades(rdochoose,TRPL_C_ARR,inputTRPL_C,inputTEAM,combochk1,combochk2,combochk3,combochk4);
			dHelper.addColumns(TradeTrnrelVO.class);
			for(Map<String, Object> vo:list){
				dHelper.setData(vo);
			}
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response,out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1330
	 * 화면설명 : 거래관계조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTrades")
	public void downloadExcelTrades(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String rdochoose = requestHelper.getParameter("rdochoose");		// 조회구분 라디오값
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper); //사업장코드 배열형태
			String inputTRPL_C = requestHelper.getParameter("inputTRPL_C");	// 수요자,공급자 거래처 조회 입력
			String inputTEAM = requestHelper.getParameter("inputTEAM");	// 수요자,공급자 거래처 팀코드
			String combochk1 = requestHelper.getParameter("combochk1");		// 계약유형
			String combochk2 = requestHelper.getParameter("combochk2");		// 공급유형
			String combochk3 = requestHelper.getParameter("combochk3");		// 상품대분류코드
			String combochk4 = requestHelper.getParameter("combochk4"); 	// 상품중분류코드
			
			String fileName = "거래관계조회.xls";
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
					"수요처코드",
					"수요처명",
					"수요처팀",
					"수요처팀명",
					"공급처코드",
					"공급처명",
					"공급처팀",
					"공급처팀명",
					"계약유형코드",
					"계약유형명",
					"공급유형코드",
					"공급유형명",
					"상품대분류코드",
					"상품대분류명",
					"상품중분류코드",
					"상품중분류명",
					"주관거래처코드",
					"주관거래처명",
					"주관거래처팀",
					"주관거래처팀명",
					"주관유형코드",
					"주관유형명",
					"가격군코드",
					"가격군명"
			};
			String[] keyIndex = {
					"CSER_NA_TRPL_C",
					"CSER_NA_TRPL_N",
					"CSER_NA_TEAM_C",
					"CSER_NA_TEAM_N",
					"SPLR_NA_TRPL_C",
					"SPLR_NA_TRPL_N",
					"SPLR_NA_TEAM_C",
					"SPLR_NA_TEAM_N",
					"CSER_CTR_TPC",
					"CSER_CTR_TPNM",
					"SPY_TPC",
					"SPY_TPNM",
					"NA_WRS_LCLC",
					"WRS_LCLCNM",
					"NA_WRS_MCLC",
					"WRS_MCLCNM",
					"MNGT_NA_TRPL_C",
					"MNGT_NA_TRPL_N",
					"MNGT_NA_TEAM_C",
					"MNGT_NA_TEAM_N",				
					"MNGT_NA_TR_TPC",
					"MNGT_NA_TR_TPNM",
					"PRGR_C",
					"PGNM"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
			
			tradeservice.downloadExcelTrades(rdochoose,TRPL_C_ARR,inputTRPL_C,inputTEAM,combochk1,combochk2,combochk3,combochk4,handler);
			
			Map<String, Object> searchMap = new HashMap<String, Object>();
			searchMap.put("출력화면", "거래관계조회");
			searchMap.put("거래처코드", TRPL_C);
			searchMap.put("조회구분코드", rdochoose);
			searchMap.put("계약유형코드", combochk1);
			searchMap.put("공급유형코드", combochk2);
			searchMap.put("상품대분류코드", combochk3);
			searchMap.put("상품중분류코드", combochk4);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1340
	 * 화면설명 : 사업장 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/retrieveStore")
	public void retrieveStore(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			DataSetHelper dHelper = new DataSetHelper("ds_infodata");
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String,Object>> resultlist = new ArrayList<Map<String,Object>>(); 
			resultlist = tradeservice.selectStore(TRPL_C);
			
			dHelper.addColumns(CompanyVO.class);
			for(Map<String,Object> vo : resultlist){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response,out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1340
	 * 화면설명 : 사업장 조회 (화면 출력)
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/oz/pds/partner/Trade/retrieveStore")
	public RestResult retrieveStoreOz(HttpServletRequest request,HttpServletResponse response,String TRPL_C,String sName,String TRPL_C_TEXT){
		try {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			//타이틀
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);
			
			//리스트
			List<CompanyVO> list = tradeservice.selectPrintStore(TRPL_C);
			List<Map<String,Object>> list2 = new ArrayList<Map<String,Object>>();
			Map<String,Object> map = new LinkedHashMap<String, Object>();
			for(CompanyVO vo : list){
				
				map.put("row1", vo.getNA_TRPL_C());
				map.put("row2_1","법인사업자번호"+" "+vo.getBIZ_NUMBER());
				map.put("row2_2", vo.getNA_TRPL_DSC_NM());
				map.put("row3_1", vo.getTRPL_ABR_NM());
				map.put("row3_2", vo.getCOPNO_CIF_NO());
				map.put("row4_1", vo.getNAAC_DSC_NM());
				map.put("row4_2", vo.getREPMNM());
				map.put("row5_1", vo.getBZCCNM());
				map.put("row5_2", vo.getBZTPNM());
				map.put("row6_1", vo.getLIQ_SEL_RPT_NO());
				map.put("row6_2", vo.getLIQ_WHSL_COMP_C());
				map.put("row7", vo.getLIQ_SEL_RPT_NO());
				map.put("row8_1", vo.getCLNTNM());
				map.put("row8_2", "");
				map.put("row9", vo.getZIP_SQNO()+" "+vo.getDONGUP()+" "+vo.getDONGBW());
				map.put("row10_1", vo.getATEL()+" - "+vo.getHTEL()+" - "+vo.getSTEL());
				map.put("row10_2", vo.getFAX_RGNO()+" - "+vo.getHFAX()+" - "+vo.getFAX_SQNO());
				map.put("row11_1", vo.getMPSVNO()+" - "+vo.getMPHNO()+" - "+vo.getMPSQNO());
				map.put("row11_2", vo.getNA_RGN_C()+" "+vo.getRGN_CNM());
				String mbco_dsc = vo.getNA_MBCO_DSC();
				if(mbco_dsc.equals("1")) mbco_dsc = "본사(소)";
				else mbco_dsc= "지사(소)";
				map.put("row12_1", mbco_dsc);
				map.put("row12_2", vo.getUP_NA_TRPL_C()+" "+vo.getUP_NA_TRPL_NM());
				map.put("row13_1", vo.getNA_USR_SYS_KDC_NM());
				String checkyn = "여";
				if(vo.getFMACH_PATS_TRT_YN().equals("0")){
					checkyn = "부";
				}
				map.put("row13_2", checkyn);
				map.put("row14_1", vo.getNA_BZPL_TXBZ_RPT_FORM_C());
				if(vo.getELT_TXBIL_UYN().equals("0")){
					checkyn = "부";
				}
				map.put("row14_2", checkyn);
				if(vo.getTR_STOP_YN().equals("0")){
					checkyn = "부";
				}
				map.put("row15", checkyn);
				list2.add(map);
			}
			
			List<Object> all_list = new ArrayList<Object>();
			all_list.add(title);
			all_list.add(map);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1323 업체 사업장 조회
	 * 화면설명 : 지사 출고 거래관계 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/selectNatrplCList")
	public void selectNatrplCList(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String UP_TRPL_C = requestHelper.getParameter("UP_TRPL_C");
			String mbcoType = requestHelper.getMbcoType();
			
			DataSetHelper dHelper = new DataSetHelper("ds_master_data");
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String,Object>> resultlist = new ArrayList<Map<String,Object>>(); 
			resultlist = tradeservice.selectNatrplCList(TRPL_C, mbcoType,UP_TRPL_C);
			
			dHelper.addColumns(TradeOutVO.class);
			for(Map<String,Object> vo : resultlist){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response,out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1323 업체 사업장 조회
	 * 화면설명 : 지사 출고 거래관계 조회
	*/
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/partner/Trade/insertNatrplCList")
	public void insertNatrplCList(HttpServletRequest request,HttpServletResponse response){
		try {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();

			String glncode = requestHelper.getParameter("UP_NA_TRPL_C");			//로그인 사업장
			String userId = requestHelper.getUserID();
			String TRPL_C= requestHelper.getParameter("TRPL_C");					//사업장코드
			
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMain = in_dsList.get("ds_master_data"); 						// 오른쪽 그리드 마스터 데이터
			
			List<TradeOutVO> list2 = ValueObjectSetUtil.dataSetToVO(dsMain, TradeOutVO.class);
			
			tradeservice.insertNatrplCList(glncode, TRPL_C, userId, list2);
			
			sendData(response,out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
}
