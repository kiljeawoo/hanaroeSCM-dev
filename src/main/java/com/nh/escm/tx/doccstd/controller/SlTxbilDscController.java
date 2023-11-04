package com.nh.escm.tx.doccstd.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.usrinf.service.LginLgotService;
import com.nh.escm.tx.doccstd.service.SlTxbilDscService;
import com.nh.escm.tx.doccstd.vo.BasSvcVO;
import com.nh.escm.tx.doccstd.vo.ByngMonVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilDscVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilVO;
import com.nh.escm.util.PageHelper;
import com.nh.escm.util.TxBilUtil;

import oracle.sql.CLOB;



@RestController
public class SlTxbilDscController extends AbstractController {

	@Autowired
	private SlTxbilDscService slTxbilDscService;
	
	@Autowired
	private LginLgotService loginService;
	
	private enum FileMetaData {
		FILENAME, FILETYPE, FILESIZE, ORGFNAME, FILEKEY, SYSTEMFILENAME
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveUnissuedTaxbilList")
	public void retrieveUnissuedTaxbilList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		PlatformData platformData = new PlatformData();

		// Paging
		int totalRowCount = slTxbilDscService.retrieveUnissuedTaxbilListCount(dsCondition);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
		
		try {
			
			List<Map<String, Object>> taxList= slTxbilDscService.retrieveUnissuedTaxbilList(dsCondition, start, end);
			DataSetHelper dsHelper = new DataSetHelper("ds_tax");
			
			if(dsHelper != null && taxList.size() > 0){
				dsHelper.addColumns(taxList.get(0).keySet());
				for(Map<String, Object> map : taxList) {
					dsHelper.setData(map);
				}
			}	
			
			platformData.addDataSet(pageHelper.getDsPageVo());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		} 
                
	}
	//IT전략부 세금계산서 조회
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/TaxbillListIT")
	public void TaxbillListIT(HttpServletRequest request, HttpServletResponse response){
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		try {
				List<Map<String, Object>> taxList= slTxbilDscService.TaxbillListIT(dsCondition);
				DataSetHelper dsHelper = new DataSetHelper("ds_tax");
				if(dsHelper != null && taxList.size() > 0){
					dsHelper.addColumns(taxList.get(0).keySet());
					for(Map<String, Object> map : taxList) {
						dsHelper.setData(map);
					}
					
				}
				PlatformData platformData = new PlatformData();
				platformData.addDataSet(dsHelper.getDataSet());
				sendData(response, platformData);
		 }catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");					
		 } 
	}

	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveTaxBillList")
	public void retrieveTaxBillList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		dsCondition.setChangeStructureWithData(true);                 // 칼럼추가 활성화
		
		PlatformData platformData = new PlatformData();
		
		SessionBox sessionBox = (SessionBox) request.getSession().getAttribute("sessionBox");

		ColumnHeader ch = dsCondition.getColumn("USRID");
		
		if(ch == null){
	        dsCondition.addColumn("USRID", DataTypes.STRING);
	        dsCondition.set(dsCondition.newRow(), "USRID", sessionBox.getUserID());
			dsCondition.set(0, "USRID", sessionBox.getUserID());
		}

		/*************************************
		 *
		 * @todo  
		 * 
		 * totalRowCount, sum(공급가액),sum(세액),sum(tot_am).
		 * map으로 받아서. 
		 * 
		 * 화면으로 값으로 넘김.
		 * 
		 *************************************/
		
		// Paging
		//int totalRowCount = slTxbilDscService.retrieveTaxBillListCount(dsCondition); old
		Map<String, Object> totalMap = slTxbilDscService.retrieveTaxBillListCount(dsCondition); //new
		int totalRowCount  =  ((java.math.BigDecimal)totalMap.get("CNT")).intValue();
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"),totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
		
		String spyplMbcoType = 	requestHelper.getMbcoType();
		
		String spyplNaTrplC = 	requestHelper.getGlnCode();

		/*
		 * 위탁대리점일때는 gln 코드를 위탁대리점 세션의 gln 으로 바꿔준다.
		 */
		
		if("5".equals(spyplMbcoType)){
			dsCondition.set(0, "NA_TRPL_C", spyplNaTrplC);			
		}
		
		try {
			List<Map<String, Object>> taxList= slTxbilDscService.retrieveTaxBillList(dsCondition, start, end);
			DataSetHelper dsHelper = new DataSetHelper("ds_tax");
			if(dsHelper != null && taxList.size() > 0){
				dsHelper.addColumns(taxList.get(0).keySet());
				// 그리드 정렬을 위한 컬럼 속성 변경
				dsHelper.getDataSet().setColumnDataType("SPRTT", DataTypes.BIG_DECIMAL);
				dsHelper.getDataSet().setColumnDataType("TXA_TT", DataTypes.BIG_DECIMAL);
				dsHelper.getDataSet().setColumnDataType("TOT_AM", DataTypes.BIG_DECIMAL);
				for(Map<String, Object> map : taxList) {
					dsHelper.setData(map);
				}
			}
			
			platformData.addDataSet(pageHelper.getDsPageVo());
			platformData.addDataSet(dsHelper.getDataSet());
			
			//grid 하단에 sum을 보여주기 위한 dataset 추가
			DataSet ds = new DataSet("ds_total");
			
			/*
			ds.addColumn(new ColumnHeader("CNT"));
			ds.addColumn(new ColumnHeader("SPRTT"));
			ds.addColumn(new ColumnHeader("TXA_TT"));
			ds.addColumn(new ColumnHeader("TOT_AM"));
			*/
			
			ds.addColumn("CNT", DataTypes.BIG_DECIMAL);
			ds.addColumn("SPRTT", DataTypes.BIG_DECIMAL);
			ds.addColumn("TXA_TT", DataTypes.BIG_DECIMAL);
			ds.addColumn("TOT_AM", DataTypes.BIG_DECIMAL);
			int row = ds.newRow();
			ds.set(row, "CNT", String.valueOf(totalRowCount));
			ds.set(row, "SPRTT",((java.math.BigDecimal)totalMap.get("SPRTT")).toString());
			ds.set(row, "TXA_TT",((java.math.BigDecimal)totalMap.get("TXA_TT")).toString());
			ds.set(row, "TOT_AM",((java.math.BigDecimal)totalMap.get("TOT_AM")).toString());
			platformData.addDataSet(ds);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, e.getMessage());
			
		} 
                
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveTaxBillListForSign")
	public void retrieveTaxBillListForSign(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		PlatformData platformData = new PlatformData();
		
		try {
			if (StringUtils.isEmpty(PBC_SQNO)) {
				sendData(response, platformData, -1, "error.message.server.exception");
				return;
			}
			
			List<Map<String, Object>> taxList= slTxbilDscService.retrieveTaxBillForSign(PBC_SQNO);
			List<Map<String, Object>> taxDetailList= slTxbilDscService.retrieveTaxBillDetailForSign(PBC_SQNO);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_tax");
			DataSetHelper dsHelper2 = new DataSetHelper("ds_taxDetail");
			
			if(dsHelper != null && taxList.size() > 0){
				dsHelper.addColumns(taxList.get(0).keySet());
				for(Map<String, Object> map : taxList) {
					dsHelper.setData(map);
				}
			}
			
			if(dsHelper2 != null && taxDetailList.size() > 0){
				dsHelper2.addColumns(taxDetailList.get(0).keySet());
				for(Map<String, Object> map : taxDetailList) {
					dsHelper2.setData(map);
				}
			}
			
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(dsHelper2.getDataSet());

			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/insertTxbilElsg")
	public void insertTxbilElsg(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsElsg = requestHelper.getDataSet("ds_elsg");

		PlatformData platformData = new PlatformData();
		int isValid = 0;
		
		try {
			/**
			 * 서비스 점검상태 체크(로그인된 사용자) START (20171130)
			 *  - comTran.xjs의 gfn_callService의 콜백(gfn_callBackResult)에서 처리
			 *  - ErrorCode -400
			 */
			Object sessionObject = request.getSession().getAttribute("sessionBox");
			
			if(sessionObject != null) {
				Map<String, Object> param = new HashMap<String, Object>();
				param.put("bsnDsc", "TAX");
				List<Map<String, Object>> service = loginService.retrieveBlockService(param);
				if (service != null && service.size() > 0) {
//					System.out.println("[ServiceTest] 서버 점검 중 로그아웃 처리 : " + CurrentURI);
					String bckTi = (String) service.get(0).get("BLOCK_TI");
					String bckCntn = (String) service.get(0).get("BLOCK_CNTN");
					String bckSt = (String) service.get(0).get("BLOCK_ST_DTM");
					String bckEd = (String) service.get(0).get("BLOCK_ED_DTM");
					// request.getSession().invalidate();
					sendData(response, new PlatformData(), -400, bckTi + " \n" + bckCntn + " \n" + bckSt + " ~ " + bckEd);
					return ;
				} else {
//					System.out.println("[ServiceTest] 서버 점검 중이 아님 : " + CurrentURI);
				}
			}
			/* 서비스 점검상태 체크(로그인된 사용자) END */
			
			
			for(int i = 0 ; i < dsElsg.getRowCount(); i++)
			{
				
				/***************************************************
				 * @TODO
				 * 전자세금계산서 verify 추가
		    	//StringReader sr = new StringReader(dsElsg.getString(i, "ELSG_CNTN"));
		        //InputSource is = new InputSource(sr);
		        //DocumentBuilderFactory dbFactory  = DocumentBuilderFactory.newInstance();
		        //dbFactory.setValidating(true);  
		        //dbFactory.setNamespaceAware(true);
		        //DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();		      	
		      	//TaxInvoiceVerifier verifier = new TaxInvoiceVerifier(dBuilder.parse(is));
		      	//boolean vr = verifier.verify();
		    	//System.out.println("boolean vr====="+vr);
		    	//if (vr) {
		    	//	System.out.println("처리결과 전자서명 검증 OK");
		    	//} else {
		    	//	throw new AppetizerException("현재 잘못된 전자서명값이 있습니다.조회후 재서명 해주십시오.");
		    	//}
		    	***************************************************/

				// 검증로직 추가: 2017.10.12 국세청 공인인증서 검증강화관련 수정.
				isValid = slTxbilDscService.checkElsg(dsElsg, i); // 만료시 서비스에서 Exception 발생시킴
				
				// 정상일 경우 저장
				if(slTxbilDscService.insertTxbilElsg(dsElsg, i)> 0)
				{
					slTxbilDscService.updateTxBil(dsElsg, i);
				}
			}
			sendData(response, platformData);
		
		} catch (AppetizerException ae) {
			logger.error(ae.getMessage(), ae);
			sendData(response, new PlatformData(), -1, ae.getMessage());
		} catch (Exception e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}

		
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveDetail")
	public void retrieveDetail(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			List<SlTxbilVO> taxList= slTxbilDscService.retrieveTaxText(PBC_SQNO);
			List<SlTxbilDscVO> taxDetailList= slTxbilDscService.retrieveTaxDtl(PBC_SQNO);
			
			DataSetHelper dsHelper2 = new DataSetHelper("ds_tax");
			DataSetHelper dsHelper = new DataSetHelper("ds_taxDetail");
			
			if(taxDetailList != null && taxDetailList.size() > 0){
			
				dsHelper.addColumns(SlTxbilDscVO.class);
				
				for(SlTxbilDscVO vo : taxDetailList){
					dsHelper.setData(vo);
				}
				
			}	
			
			if(taxList != null && taxList.size() > 0){
				
				dsHelper2.addColumns(SlTxbilVO.class);
				
				for(SlTxbilVO vo : taxList){
					dsHelper2.setData(vo);
				}
				
			}	
			
			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveSlTxbilForSvc")
	public void retrieveSlTxbilForSvc(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<SlTxbilDscVO> taxDetailList= slTxbilDscService.retrieveTaxDtl(PBC_SQNO);
			List<SlTxbilVO> taxList= slTxbilDscService.retrieveSlTxbilForSvc(PBC_SQNO); 
			DataSetHelper dsHelper = new DataSetHelper("ds_taxDetail");
			DataSetHelper dsHelper2 = new DataSetHelper("ds_tax");
			
			if(taxDetailList != null && taxDetailList.size() > 0){
			
				dsHelper.addColumns(SlTxbilDscVO.class);
				
				for(SlTxbilDscVO vo : taxDetailList){
					
					dsHelper.setData(vo);
				}
			}	
			
			if(taxList != null && taxList.size() > 0){
				
				dsHelper2.addColumns(SlTxbilVO.class);
				
				for(SlTxbilVO vo : taxList){
					//vo.setNTS_TMS_SQNO(TxBilUtil.generateNTS_TMS_SQNO("41000198"));
					dsHelper2.setData(vo);
					
				}
				//TEMP7
//				if( dsHelper2.getDataSet().getString(0, "NTS_TMS_SQNO") == null)
//				{
//					System.out.println("해당 테스트 데이터에 [NTS_TMS_SQNO]데이타가 없으니 다른 데이터로 테스트 해주기 바랍니다.");
//					throw new Exception("해당 테스트 데이터에 [NTS_TMS_SQNO]데이타가 없으니 다른 데이터로 테스트 해주기 바랍니다.");
//				}
				
			}	
			
			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
	}
	
	public enum taxCnt {		
		CNT     				
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/tx/retrieveTaxBillListExcel")
	public void retrieveTaxBillListExcel(HttpServletRequest request, HttpServletResponse response) throws IOException {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName2 = new String(requestHelper.getParameter("FORM_NM").getBytes(), "UTF-8");
		String fileName=  fileName2 + ".xls";
		
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		DataSet dsCondition = new DataSet("dsCondition");
		dsCondition.addColumn("STARTDT", DataTypes.STRING);
		dsCondition.addColumn("ENDDT", DataTypes.STRING);
		dsCondition.addColumn("DT_TYPE", DataTypes.STRING);
		dsCondition.addColumn("NA_TRPL_C", DataTypes.STRING);
		dsCondition.addColumn("NA_BZPLC", DataTypes.STRING);
		dsCondition.addColumn("TXBIL_STSC", DataTypes.STRING);
		dsCondition.addColumn("NTS_TMS_SQNO", DataTypes.STRING);
		dsCondition.addColumn("TXBIL_KD", DataTypes.STRING);
		dsCondition.addColumn("SPLR_BZNO", DataTypes.STRING);
		dsCondition.addColumn("CODE01", DataTypes.STRING);
		dsCondition.addColumn("CODE02", DataTypes.STRING);
		dsCondition.addColumn("BUY_BZNO", DataTypes.STRING);
		dsCondition.addColumn("RPBC_DSC", DataTypes.STRING);
		dsCondition.addColumn("OCU_DSC", DataTypes.STRING);
		dsCondition.addColumn("NA_TEAM_C", DataTypes.STRING);
		dsCondition.addColumn("NA_CLNT_TEAM_C", DataTypes.STRING);
		
		dsCondition.newRow();
		dsCondition.set(0, "STARTDT", requestHelper.getParameter("STARTDT"));
		dsCondition.set(0, "ENDDT", requestHelper.getParameter("ENDDT"));
		dsCondition.set(0, "DT_TYPE", requestHelper.getParameter("DT_TYPE"));
		dsCondition.set(0, "NA_TRPL_C", requestHelper.getParameter("NA_TRPL_C"));
		dsCondition.set(0, "NA_BZPLC", requestHelper.getParameter("NA_BZPLC"));
		dsCondition.set(0, "TXBIL_STSC", requestHelper.getParameter("TXBIL_STSC"));
		dsCondition.set(0, "NTS_TMS_SQNO", requestHelper.getParameter("NTS_TMS_SQNO"));
		dsCondition.set(0, "TXBIL_KD", requestHelper.getParameter("TXBIL_KD"));
		dsCondition.set(0, "SPLR_BZNO", requestHelper.getParameter("SPLR_BZNO"));
		dsCondition.set(0, "CODE01", requestHelper.getParameter("CODE01"));
		dsCondition.set(0, "CODE02", requestHelper.getParameter("CODE02"));
		dsCondition.set(0, "BUY_BZNO", requestHelper.getParameter("BUY_BZNO"));
		dsCondition.set(0, "RPBC_DSC", requestHelper.getParameter("RPBC_DSC"));
		dsCondition.set(0, "NA_TEAM_C", requestHelper.getParameter("NA_TEAM_C"));
		dsCondition.set(0, "NA_CLNT_TEAM_C", requestHelper.getParameter("NA_CLNT_TEAM_C"));
		
		try
		{
			List<Map<String,Object>> taxList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = new String[19];

			switch(requestHelper.getParameter("FORM_ID"))
			{
				case "12002001":
				case "22002001":
				case "32002001":
					header[ 0] = "발행상태";            
					header[ 1] = "세금계산서종류";      
					header[ 2] = "작성일자";            
					header[ 3] = "등록일자";            
					header[ 4] = "공급받는자상호";      
					header[ 5] = "공급받는자사업자번호";
					header[ 6] = "공급자";              
					header[ 7] = "공급자사업자번호";    
					header[ 8] = "품목";                
					header[ 9] = "공급가액";            
					header[10] = "세액";                
					header[11] = "합계액";              
					header[12] = "매출사업장팀코드";    
					header[13] = "매출사업장명";        
					header[14] = "매입사업장/팀코드";   
					header[15] = "매입사업장명";        
					header[16] = "승인번호";    
					header[17] = "";
					header[18] = "";
					break;
					
				case "12002003"://이용료
				case "22002003"://이용료
				case "32002003"://이용료
				case "93002001"://세금계산서발행내역
				case "93001002"://수정세금계산서발행
					header[ 0] = "발행상태";            
					header[ 1] = "세금계산서종류";      
					header[ 2] = "작성일자";            
					header[ 3] = "등록일자";            
					header[ 4] = "공급받는자상호";      
					header[ 5] = "공급받는자사업자번호";
					header[ 6] = "공급자";              
					header[ 7] = "공급자사업자번호";    
					header[ 8] = "품목";                
					header[ 9] = "공급가액";            
					header[10] = "세액";                
					header[11] = "합계액";              
					header[12] = "매출사업장팀코드";    
					header[13] = "매출사업장명";        
					header[14] = "매입사업장/팀코드";   
					header[15] = "매입사업장명";        
					header[16] = "승인번호";    
					header[17] = "";
					header[18] = "";	
					break;
			
				case "12004002"://신고실패문서(협력업체)
				case "93004003"://신고실패문서재처리(eSCM)
					header[0] = "반송사유";
					header[1] = "반송코드";
					header[2] = "발행상태";
					header[3] = "세금계산서종류";
					header[4] = "작성일자";
					header[5] = "등록일자";
					header[6] = "공급받는자상호";
					header[7] = "공급받는자사업자번호";
					header[8] = "공급자";
					header[9] = "공급자사업자번호";
					header[10] = "품목";
					header[11] = "공급가액";
					header[12] = "세액";
					header[13] = "합계액";
					header[14] = "매출사업장/팀코드";
					header[15] = "매출사업장명";
					header[16] = "매입사엄장/팀코드";
					header[17] = "매입사업자명";
					header[18] = "승인번호";
					break;
					
				default :
					header[ 0] = "발행상태";            
					header[ 1] = "세금계산서종류";      
					header[ 2] = "작성일자";            
					header[ 3] = "등록일자";            
					header[ 4] = "발행일자";
					header[ 5] = "공급받는자상호";      
					header[ 6] = "공급받는자사업자번호";
					header[ 7] = "공급자";              
					header[ 8] = "공급자사업자번호";    
					header[ 9] = "품목";                
					header[10] = "공급가액";            
					header[11] = "세액";                
					header[12] = "합계액";              
					header[13] = "매출사업장팀코드";    
					header[14] = "매출사업장명";        
					header[15] = "매입사업장/팀코드";   
					header[16] = "매입사업장명";        
					header[17] = "승인번호";    
					header[18] = ""; 
					break;
					
			}

			
			String[] keyIndex = new String[19];
			switch( requestHelper.getParameter("FORM_ID") )
			{
				case "12002001":
				case "22002001":
				case "32002001":
					keyIndex[0] = "TXBIL_STSC";
					keyIndex[1] = "TXBIL_KD";
					keyIndex[2] = "CRT_DT";
					keyIndex[3] = "RG_DT";
					keyIndex[4] = "BUY_MTALNM";
					keyIndex[5] = "BUY_BZNO";
					keyIndex[6] = "SPLR_MTALNM";
					keyIndex[7] = "SPLR_BZNO";
					keyIndex[8] = "LATCNM";
					keyIndex[9] = "SPRTT";
					keyIndex[10] = "TXA_TT";
					keyIndex[11] = "TOT_AM";
					keyIndex[12] = "NA_TRPL_C_TEAM_C";
					keyIndex[13] = "NA_CLNTNM";
					keyIndex[14] = "NA_BZPLC_TEAM_C";
					keyIndex[15] = "NA_BZPLNM";
					keyIndex[16] = "NTS_TMS_SQNO";
					keyIndex[17] = "";
					keyIndex[18] = "";
					break;
					
				case "12002003"://이용료
				case "22002003"://이용료
				case "32002003"://이용료
				case "93002001"://세금계산서발행내역
				case "93001002"://수정세금계산서발행
					keyIndex[0] = "TXBIL_STSC";
					keyIndex[1] = "TXBIL_KD";
					keyIndex[2] = "CRT_DT";
					keyIndex[3] = "RG_DT";
					keyIndex[4] = "BUY_MTALNM";
					keyIndex[5] = "BUY_BZNO";
					keyIndex[6] = "SPLR_MTALNM";
					keyIndex[7] = "SPLR_BZNO";
					keyIndex[8] = "LATCNM";
					keyIndex[9] = "SPRTT";
					keyIndex[10] = "TXA_TT";
					keyIndex[11] = "TOT_AM";
					keyIndex[12] = "NA_TRPL_C_TEAM_C";
					keyIndex[13] = "NA_CLNTNM";
					keyIndex[14] = "NA_BZPLC_TEAM_C";
					keyIndex[15] = "NA_BZPLNM";
					keyIndex[16] = "NTS_TMS_SQNO";	
					keyIndex[17] = "";
					keyIndex[18] = "";	
					break;
				
				case "12004002"://신고실패문서(협력업체)
				case "93004003"://신고실패문서재처리(eSCM)
					keyIndex[0] = "PRC_RZT_C_MSG";
					keyIndex[1] = "PRC_RZT_C";
					keyIndex[2] = "TXBIL_STSC";
					keyIndex[3] = "TXBIL_KD";
					keyIndex[4] = "CRT_DT";
					keyIndex[5] = "RG_DT";
					keyIndex[6] = "BUY_MTALNM";
					keyIndex[7] = "BUY_BZNO";
					keyIndex[8] = "SPLR_MTALNM";
					keyIndex[9] = "SPLR_BZNO";
					keyIndex[10] = "LATCNM";
					keyIndex[11] = "SPRTT";
					keyIndex[12] = "TXA_TT";
					keyIndex[13] = "TOT_AM";
					keyIndex[14] = "NA_TRPL_C_TEAM_C";
					keyIndex[15] = "NA_CLNTNM";
					keyIndex[16] = "NA_BZPLC_TEAM_C";
					keyIndex[17] = "NA_BZPLNM";
					keyIndex[18] = "NTS_TMS_SQNO";	
					break;
					
				default :
					keyIndex[ 0] = "TXBIL_STSC";
					keyIndex[ 1] = "TXBIL_KD";
					keyIndex[ 2] = "CRT_DT";
					keyIndex[ 3] = "RG_DT";
					keyIndex[ 4] = "PBC_DT2";
					keyIndex[ 5] = "BUY_MTALNM";      
					keyIndex[ 6] = "BUY_BZNO";        
					keyIndex[ 7] = "SPLR_MTALNM";     
					keyIndex[ 8] = "SPLR_BZNO";       
					keyIndex[ 9] = "LATCNM";          
					keyIndex[10] = "SPRTT";           
					keyIndex[11] = "TXA_TT";          
					keyIndex[12] = "TOT_AM";          
					keyIndex[13] = "NA_TRPL_C_TEAM_C";
					keyIndex[14] = "NA_CLNTNM";       
					keyIndex[15] = "NA_BZPLC_TEAM_C"; 
					keyIndex[16] = "NA_BZPLNM";       
					keyIndex[17] = "NTS_TMS_SQNO";	   
					keyIndex[18] = "";
					
					break;
			}
			

			AbstractModel model = new DefaultModel("tax", header, keyIndex, taxList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			slTxbilDscService.retrieveTaxBillListExcel(dsCondition, 1, Integer.parseInt(requestHelper.getParameter("TOTAL_ROW_COUNT")), handler);
			
			handler.write(response,fileName);
			
			
			
		/*
			//PrintWriter pw = response.getWriter();
			//pw.flush();
			
			//response.sendRedirect("http://192.168.60.25:8080/nhvan/test.html");
			
			
			
			ServletOutputStream so =  response.getOutputStream();
			
			response.setContentType("text/html");
			so.flush();
			
			StringBuffer sb = new StringBuffer();
			sb.append("<html><head><title></title>");
			sb.append("<script language='javascript>'");
			sb.append("document.title='excel export';");
			sb.append("</script>'");
			sb.append("</head><body><input type='text' id = 'excel' name='excel' size=50 value='Y'></body></html>");
			
			so.println(sb.toString());
			*/
		}
		catch(AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.GET, value = "/rest/excel/tx/retrieveUnissuedTaxbilListExcel")
	public void retrieveUnissuedTaxbilListExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		//String fileName = requestHelper.getParameter("fileName");
		String fileName = "세금계산서.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}

		DataSet dsCondition = new DataSet("dsCondition");
		dsCondition.addColumn("STARTDT", DataTypes.STRING);
		dsCondition.addColumn("ENDDT", DataTypes.STRING);
		dsCondition.addColumn("DT_TYPE", DataTypes.STRING);
		dsCondition.addColumn("NA_TRPL_C", DataTypes.STRING);
		dsCondition.addColumn("NA_BZPLC", DataTypes.STRING);
		dsCondition.addColumn("TXBIL_STSC", DataTypes.STRING);
		dsCondition.addColumn("NTS_TMS_SQNO", DataTypes.STRING);
		dsCondition.addColumn("TXBIL_KD", DataTypes.STRING);
		dsCondition.addColumn("SPLR_BZNO", DataTypes.STRING);
		dsCondition.addColumn("CODE01", DataTypes.STRING);
		dsCondition.addColumn("CODE02", DataTypes.STRING);
		dsCondition.addColumn("BUY_BZNO", DataTypes.STRING);
		dsCondition.addColumn("RPBC_DSC", DataTypes.STRING);
		
		
		dsCondition.newRow();
		dsCondition.set(0, "STARTDT", requestHelper.getParameter("STARTDT"));
		dsCondition.set(0, "ENDDT", requestHelper.getParameter("ENDDT"));
		dsCondition.set(0, "DT_TYPE", requestHelper.getParameter("DT_TYPE"));
		dsCondition.set(0, "NA_TRPL_C", requestHelper.getParameter("NA_TRPL_C"));
		dsCondition.set(0, "NA_BZPLC", requestHelper.getParameter("NA_BZPLC"));
		dsCondition.set(0, "TXBIL_STSC", requestHelper.getParameter("TXBIL_STSC"));
		dsCondition.set(0, "NTS_TMS_SQNO", requestHelper.getParameter("NTS_TMS_SQNO"));
		dsCondition.set(0, "TXBIL_KD", requestHelper.getParameter("TXBIL_KD"));
		dsCondition.set(0, "SPLR_BZNO", requestHelper.getParameter("SPLR_BZNO"));
		dsCondition.set(0, "CODE01", requestHelper.getParameter("CODE01"));
		dsCondition.set(0, "CODE02", requestHelper.getParameter("CODE02"));
		dsCondition.set(0, "BUY_BZNO", requestHelper.getParameter("BUY_BZNO"));
		dsCondition.set(0, "RPBC_DSC", requestHelper.getParameter("RPBC_DSC"));
		
		try
		{
			
			List<Map<String, Object>> taxList = null;
            Workbook workbook = (Workbook)new SXSSFWorkbook(1000);
            
			String[] header = {
					 "발행상태"
					,"세금계산서종류"
					,"작성일자"
					,"등록일자"
					,"공급받는자상호"
					,"사업자번호"
					,"공급자"
					,"품목"
					,"공급가액"
					,"세액"
					,"합계액"
					,"담당자명"
					,"담당자전화번호"
					,"승인번호"
			};
			String[] keyIndex = new String[14];
			keyIndex[0] = "TXBIL_STSC";
			keyIndex[1] = "TXBIL_KD";
			keyIndex[2] = "CRT_DT";
			keyIndex[3] = "RG_DT";
			keyIndex[4] = "BUY_MTALNM";
			keyIndex[5] = "BUY_BZNO";
			keyIndex[6] = "SPLR_MTALNM";
			keyIndex[7] = "LATCNM";
			keyIndex[8] = "SPRTT";
			keyIndex[9] = "TXA_TT";
			keyIndex[10] = "TOT_AM";
			keyIndex[11] = "USR_NM";
			keyIndex[12] = "USR_MPNO";
			keyIndex[13] = "NTS_TMS_SQNO";
			
			
			
			AbstractModel model = new DefaultModel(requestHelper.getParameter("FORM_NM"), header, keyIndex, taxList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			slTxbilDscService.retrieveUnissuedTaxbilListExcel(dsCondition, 1, Integer.parseInt(requestHelper.getParameter("TOTAL_ROW_COUNT")), handler);
			handler.write(response, fileName);
		}
		catch(AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	/** 출력
	 *  화면ID : OMG_DS_SC_3110
	 *  화면설명 : 세금계산서출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/tx/retrieveSlTxbilForOz")
	public RestResult retrieveSlTxbilForOz(HttpServletRequest request, HttpServletResponse response, String PBC_SQNO, String USR_TPC){

		
		try{			
			List<SlTxbilDscVO> taxDetailList= slTxbilDscService.retrieveSlTxbilDescForOz(PBC_SQNO);
			List<SlTxbilVO> taxList= slTxbilDscService.retrieveTaxText(PBC_SQNO); 
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			
			List<Map<String,Object>> txbilDetail = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> txbil = new ArrayList<Map<String,Object>>();

			for(SlTxbilDscVO vo : taxDetailList){
				Map<String,Object> txbilDetailMap = new HashMap<String, Object>();	
				txbilDetailMap.put("PBC_SQNO",vo.getPBC_SQNO());
				txbilDetailMap.put("DTL_SQNO",vo.getDTL_SQNO());
				txbilDetailMap.put("TR_DT_MON",vo.getTR_DT_MON());
				txbilDetailMap.put("TR_DT_DAY",vo.getTR_DT_DAY());
				txbilDetailMap.put("LATCNM",vo.getLATCNM());
				txbilDetailMap.put("STD",vo.getSTD());
				txbilDetailMap.put("RMK",vo.getRMK());
				txbilDetailMap.put("QT",vo.getQT());
				txbilDetailMap.put("UPR",vo.getUPR());
				txbilDetailMap.put("SPPR",vo.getSPPR());
				txbilDetailMap.put("TXA",vo.getTXA());
				txbilDetailMap.put("FSRG_DTM",vo.getFSRG_DTM());
				txbilDetailMap.put("FS_RGM",vo.getFS_RGM());
				txbilDetailMap.put("LSCHG_DTM",vo.getLSCHG_DTM());
				txbilDetailMap.put("LS_CHGM",vo.getLS_CHGM());
				txbilDetail.add(txbilDetailMap);
			}
			
			
			for(SlTxbilVO vo : taxList){
				Map<String,Object> txbilMap = new HashMap<String, Object>();	
				txbilMap.put("PBC_SQNO",vo.getPBC_SQNO());
				txbilMap.put("USR_TPC", USR_TPC);
				txbilMap.put("NTS_TMS_SQNO",vo.getNTS_TMS_SQNO());
				txbilMap.put("TXBIL_CNT",vo.getTXBIL_CNT());
				txbilMap.put("TXBIL_NO",vo.getTXBIL_NO());
				txbilMap.put("TXBIL_SQNO",vo.getTXBIL_SQNO());
				txbilMap.put("CRT_DT",vo.getCRT_DT());
				txbilMap.put("TXBIL_KD",vo.getTXBIL_KD());
				txbilMap.put("RCT_RQS_DSC",vo.getRCT_RQS_DSC());
				txbilMap.put("MOD_C",vo.getMOD_C());
				txbilMap.put("RMK1",vo.getRMK1());
				
				txbilMap.put("RMK2",vo.getRMK2());
				txbilMap.put("RMK3",vo.getRMK3());
				txbilMap.put("REV_RPT_NO",vo.getREV_RPT_NO());
				txbilMap.put("BAT_ISU_ST_DT",vo.getBAT_ISU_ST_DT());
				txbilMap.put("BAT_ISU_ED_DT",vo.getBAT_ISU_ED_DT());
				txbilMap.put("REV_TTCN",vo.getREV_TTCN());
				txbilMap.put("SPLR_BZNO",vo.getSPLR_BZNO());
				txbilMap.put("SPLR_NA_TRPL_C",vo.getSPLR_NA_TRPL_C());
				txbilMap.put("SPLR_MTALNM",vo.getSPLR_MTALNM());
				txbilMap.put("SPLR_REPMNM",vo.getSPLR_REPMNM());
				
				txbilMap.put("SPLR_ADR",vo.getSPLR_ADR());
				txbilMap.put("SPLR_BZTPNM",vo.getSPLR_BZTPNM());
				txbilMap.put("SPLR_BZC",vo.getSPLR_BZC());
				txbilMap.put("SPLR_DEPTNM",vo.getSPLR_DEPTNM());
				txbilMap.put("SPLR_CHRRNM",vo.getSPLR_CHRRNM());
				txbilMap.put("SPLR_CHRR_TELNO",vo.getSPLR_CHRR_TELNO());
				txbilMap.put("SPLR_CHRR_EMAIL",vo.getSPLR_CHRR_EMAIL());
				txbilMap.put("SPLR_CHRR_MPNO",vo.getSPLR_CHRR_MPNO());
				txbilMap.put("SPLR_FAXNO",vo.getSPLR_FAXNO());
				txbilMap.put("BUY_DSC",vo.getBUY_DSC());
				
				txbilMap.put("BUY_BZNO",StringUtil.converNullToBlank(vo.getBUY_BZNO()));
				txbilMap.put("BUY_NA_TRPL_C",vo.getBUY_NA_TRPL_C());
				txbilMap.put("BUY_MTALNM",vo.getBUY_MTALNM());
				txbilMap.put("BUY_REPMNM",vo.getBUY_REPMNM());
				txbilMap.put("BUY_ADR",vo.getBUY_ADR());
				txbilMap.put("BUY_BZTPNM",vo.getBUY_BZTPNM());
				txbilMap.put("BUY_BZC",vo.getBUY_BZC());
				txbilMap.put("BUY_FAXNO",vo.getBUY_FAXNO());
				txbilMap.put("BUY_DEPTNM1",vo.getBUY_DEPTNM1());
				txbilMap.put("BUY_CHRRNM1",vo.getBUY_CHRRNM1());
				
				txbilMap.put("BUY_CHRR_TELNO1",vo.getBUY_CHRR_TELNO1());
				txbilMap.put("BUY_CHRR_EMAIL1",vo.getBUY_CHRR_EMAIL1());
				txbilMap.put("BUY_CHRR_MPNO1",vo.getBUY_CHRR_MPNO1());
				txbilMap.put("BUY_DEPTNM2",vo.getBUY_DEPTNM2());
				txbilMap.put("BUY_CHRRNM2",vo.getBUY_CHRRNM2());
				txbilMap.put("BUY_CHRR_TELNO2",vo.getBUY_CHRR_TELNO2());
				txbilMap.put("BUY_CHRR_EMAIL2",vo.getBUY_CHRR_EMAIL2());
				txbilMap.put("BUY_CHRR_MPNO2",vo.getBUY_CHRR_MPNO2());
				txbilMap.put("ETR_BZNO",vo.getETR_BZNO());
				txbilMap.put("ETR_NA_TRPL_C",vo.getETR_NA_TRPL_C());
				
				txbilMap.put("ETR_MTALNM",vo.getETR_MTALNM());
				txbilMap.put("ETR_REPMNM",vo.getETR_REPMNM());
				txbilMap.put("ETR_ADR",vo.getETR_ADR());
				txbilMap.put("ETR_BZTPNM",vo.getETR_BZTPNM());
				txbilMap.put("ETR_BZC",vo.getETR_BZC());
				txbilMap.put("ETR_DEPTNM",vo.getETR_DEPTNM());
				txbilMap.put("ETR_CHRRNM",vo.getETR_CHRRNM());
				txbilMap.put("ETR_CHRR_TELNO",vo.getETR_CHRR_TELNO());
				txbilMap.put("ETR_CHRR_EMAIL",vo.getETR_CHRR_EMAIL());
				txbilMap.put("STL_METHC1",vo.getSTL_METHC1());
				
				txbilMap.put("STL_AM1",vo.getSTL_AM1());
				txbilMap.put("STL_METHC2",vo.getSTL_METHC2());
				txbilMap.put("STL_AM2",vo.getSTL_AM2());
				txbilMap.put("STL_METHC3",vo.getSTL_METHC3());
				txbilMap.put("STL_AM3",vo.getSTL_AM3());
				txbilMap.put("STL_METHC4",vo.getSTL_METHC4());
				txbilMap.put("STL_AM4",vo.getSTL_AM4());
				txbilMap.put("SPRTT",vo.getSPRTT());
				txbilMap.put("TXA_TT",vo.getTXA_TT());
				txbilMap.put("TOT_AM",vo.getTOT_AM());
				
				txbilMap.put("RQR_STS_C",vo.getRQR_STS_C());
				txbilMap.put("RPBC_DSC",vo.getRPBC_DSC());
				txbilMap.put("BYNG_SL_DSC",vo.getBYNG_SL_DSC());
				txbilMap.put("RSP_C",vo.getRSP_C());
				txbilMap.put("RSP_MSG",vo.getRSP_MSG());
				txbilMap.put("RQR_CHAN_DSC",vo.getRQR_CHAN_DSC());
				txbilMap.put("EMAIL_PBC_RQR_YN",vo.getEMAIL_PBC_RQR_YN());
				txbilMap.put("SMS_PBC_RQR_YN",vo.getSMS_PBC_RQR_YN());
				txbilMap.put("FAX_PBC_RQR_YN",vo.getFAX_PBC_RQR_YN());
				txbilMap.put("MOD_TAX_PBC_SQNO",vo.getMOD_TAX_PBC_SQNO());
				
				txbilMap.put("MOD_TAX_NTS_TMS_SQN",vo.getMOD_TAX_NTS_TMS_SQNO());
				txbilMap.put("ISTT_PBC_YN",vo.getISTT_PBC_YN());
				txbilMap.put("PBC_DT",vo.getPBC_DT());
				txbilMap.put("ERP_REF_NO",vo.getERP_REF_NO());
				txbilMap.put("ASP_TMS_DTM",vo.getASP_TMS_DTM());
				txbilMap.put("ASP_RSP_DTM",vo.getASP_RSP_DTM());
				txbilMap.put("DEPT_C",vo.getDEPT_C());
				txbilMap.put("DEPTNM",vo.getDEPTNM());
				txbilMap.put("BRC",vo.getBRC());
				txbilMap.put("BRNM",vo.getBRNM());
				
				txbilMap.put("NA_BZPLC",vo.getNA_BZPLC());
				txbilMap.put("NA_BZPLNM",vo.getNA_BZPLNM());
				txbilMap.put("NA_TEAM_C",vo.getNA_TEAM_C());
				txbilMap.put("NA_TEAMNM",vo.getNA_TEAMNM());
				txbilMap.put("NA_TRPL_C",vo.getNA_TRPL_C());
				txbilMap.put("NA_CLNTNM",vo.getNA_CLNTNM());
				txbilMap.put("NA_CLNT_TEAM_C",vo.getNA_CLNT_TEAM_C());
				txbilMap.put("NA_CLNT_TEAMNM",vo.getNA_CLNT_TEAMNM());
				txbilMap.put("NA_WRS_LCLC",vo.getNA_WRS_LCLC());
				txbilMap.put("NA_WRS_LCLFNM",vo.getNA_WRS_LCLFNM());
				
				txbilMap.put("NA_WRS_MCLC",vo.getNA_WRS_MCLC());
				txbilMap.put("NA_WRS_MCLFNM",vo.getNA_WRS_MCLFNM());
				txbilMap.put("NA_TOT_DSC",vo.getNA_TOT_DSC());
				txbilMap.put("NA_TOT_DSNM",vo.getNA_TOT_DSNM());
				txbilMap.put("NA_TOT_DTI_DSC",vo.getNA_TOT_DTI_DSC());
				txbilMap.put("NA_TOT_DTI_DSNM",vo.getNA_TOT_DTI_DSNM());
				txbilMap.put("TXBZ_TP_DSC",vo.getTXBZ_TP_DSC());
				txbilMap.put("TXBZ_TP_PBCNM",vo.getTXBZ_TP_PBCNM());
				txbilMap.put("RC_MSG",vo.getRC_MSG());
				txbilMap.put("HOFC_BAT_RG_DSC",vo.getHOFC_BAT_RG_DSC());
				
				txbilMap.put("INPMN_ENO",vo.getINPMN_ENO());
				txbilMap.put("APVMN_ENO",vo.getAPVMN_ENO());
				txbilMap.put("ELSG_YN",vo.getELSG_YN());
				txbilMap.put("DCZ_UYN",vo.getDCZ_UYN());
				txbilMap.put("ASP_ETR_YN",vo.getASP_ETR_YN());
				txbilMap.put("SIGN_R_VAL",vo.getSIGN_R_VAL());
				txbilMap.put("SPYPL_C",vo.getSPYPL_C());
				txbilMap.put("VENDER_C",vo.getVENDER_C());
				txbilMap.put("ORR_DT",vo.getORR_DT());
				txbilMap.put("ORR_NO",vo.getORR_NO());
				
				txbilMap.put("TXBIL_STSC",vo.getTXBIL_STSC());
				txbilMap.put("FSRG_DTM",vo.getFSRG_DTM());
				txbilMap.put("FS_RGM",vo.getFS_RGM());
				txbilMap.put("LSCHG_DTM",vo.getLSCHG_DTM());
				txbilMap.put("LS_CHGM",vo.getLS_CHGM());
				txbilMap.put("PKG_SQNO",vo.getPKG_SQNO());
				txbil.add(txbilMap);
				
			}
			
			all_list.add(txbil);
			all_list.add(txbilDetail);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveTRPL")
	public void retrieveTRPL(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();

		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_TRPL");
			
			List<Map<String, Object>> mapList = slTxbilDscService.retrieveTRPL(searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveBZPLC")
	public void retrieveBZPLC(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String searchType = requestHelper.getParameter("searchType");
		String searchText = requestHelper.getParameter("searchText");
		PlatformData platformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_BZPLC");
			
			List<Map<String, Object>> mapList = slTxbilDscService.retrieveBZPLC(searchType, searchText);

			if(mapList != null && mapList.size() > 0) {
				dsHelper.addColumns(mapList.get(0).keySet());
				for(Map<String, Object>map : mapList) {
					dsHelper.setData(map);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/createXml")
	public void createXml(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");
		PlatformData platformData = new PlatformData();

		try {
			
			Map<String, Object> map = slTxbilDscService.getXml(PBC_SQNO);
			
			String s  =  ((CLOB)map.get("ELSG_CNTN")).stringValue();
			byte[] bytes = s.getBytes("utf-8");

			String systemFileName = RandomStringUtils.randomAlphabetic(10)+System.currentTimeMillis();
//			String tempPath = Configurer.getProperty("file.taxXml.path");
			String tempPath = Configurer.getProperty("file.temp.path");
			File dir = new File(tempPath);
			if (!dir.exists())
				dir.mkdirs();

			File serverFile = new File(dir.getAbsolutePath()+ File.separator + systemFileName);

			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
			stream.write(bytes);
			stream.close();

			DataSet ds = new DataSet("ds_uploadresult");
			ds.addColumn(new ColumnHeader(FileMetaData.FILENAME.name(), DataTypes.STRING));
			ds.addColumn(new ColumnHeader(FileMetaData.FILETYPE.name(), DataTypes.STRING));
			ds.addColumn(new ColumnHeader(FileMetaData.FILESIZE.name(), DataTypes.LONG));
			ds.addColumn(new ColumnHeader(FileMetaData.ORGFNAME.name(), DataTypes.STRING));
			ds.addColumn(new ColumnHeader(FileMetaData.SYSTEMFILENAME.name(), DataTypes.STRING));

			int row = ds.newRow();
			ds.set(row, FileMetaData.FILENAME.name(), serverFile.getName());
			ds.set(row, FileMetaData.FILETYPE.name(), "xml");
			ds.set(row, FileMetaData.FILESIZE.name(), bytes.length);
			ds.set(row, FileMetaData.ORGFNAME.name(), map.get("NTS_TMS_SQNO") + ".xml");
			ds.set(row, FileMetaData.SYSTEMFILENAME.name(), systemFileName);
			
			platformData.addDataSet(ds);
		    sendData(response, platformData);

		} catch (SQLException e) {
			sendData(response, platformData, -1, e.getMessage());
		} catch (FileNotFoundException e) {
			sendData(response, platformData, -1, e.getMessage());
		} catch (IOException e) {
			sendData(response, platformData, -1, e.getMessage());
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	

	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/insertTaxMod")
	public void insertTaxMod(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet ds_taxDetailMod = requestHelper.getDataSet("ds_taxDetailMod");
		DataSet ds_taxMod = requestHelper.getDataSet("ds_taxMod");
		
		PlatformData platformData = new PlatformData();
		
		String pbc_sqno = TxBilUtil.generatePBC_SQNO();
		try {
			SimpleDateFormat dsf = new SimpleDateFormat("yyyyMMddHHmmss",Locale.KOREAN);					
			String date = DateUtil.getCurrentDate("yyyyMMddHHmmss");
			
			Date dDate = dsf.parse(date);

			String modC = ds_taxMod.getString(0, "MOD_C");
			if( modC.equals("01") ||   modC.equals("05"))
			{
				if(slTxbilDscService.checkDup(ds_taxMod.getString(0, "PBC_SQNO")) > 1)
				{
					throw new AppetizerException("error.message.taxbill.duplication");
				}
			}
			else
			{
				if(slTxbilDscService.checkDup(ds_taxMod.getString(0, "PBC_SQNO")) > 0)
				{
					throw new AppetizerException("error.message.taxbill.duplication");
				}
			}
			
			ds_taxMod.set(0, "PBC_SQNO", pbc_sqno );
			ds_taxMod.set(0, "NTS_TMS_SQNO", TxBilUtil.generateNTS_TMS_SQNO("41000198"));

			int insert = slTxbilDscService.insertTaxMod(ds_taxMod, dDate);

			if(insert > 0)
			{
				for(int i = 0 ; i < ds_taxDetailMod.getRowCount() ; i++)
				{
					ds_taxDetailMod.set(i, "PBC_SQNO", pbc_sqno);
					slTxbilDscService.insertTaxDetail(ds_taxDetailMod, i, dDate, ds_taxMod.getString(0, "FS_RGM"));
				}
				
			}
			else 
			{
				throw new AppetizerException("error.message.server.exception");
			}
			
			platformData.addDataSet(ds_taxMod);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -3, e.getErrorMsg());
		} catch (ParseException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
                
	}
	
	/*
	 * 기재착오 수정세금세금계산서
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/insertTaxMod2")
	public void insertTaxMod2(HttpServletRequest request, HttpServletResponse response) {
		/* 이 메소드는 기재착오시 수정발행하는 세금계산서 메소드*/
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet ds_taxDetailMod = requestHelper.getDataSet("ds_taxDetailMod");
		DataSet ds_taxMod = requestHelper.getDataSet("ds_taxMod");
		
		PlatformData platformData = new PlatformData();
		
		String pbc_sqno = TxBilUtil.generatePBC_SQNO();
		try {
			SimpleDateFormat dsf = new SimpleDateFormat("yyyyMMddHHmmss",Locale.KOREAN);					
			String date = DateUtil.getCurrentDate("yyyyMMddHHmmss");
			
			Date dDate = dsf.parse(date);

			String modC = ds_taxMod.getString(0, "MOD_C");
			if( modC.equals("01") ||   modC.equals("05"))
			{
				if(slTxbilDscService.checkDup(ds_taxMod.getString(0, "PBC_SQNO")) > 1)
				{
					throw new AppetizerException("error.message.taxbill.duplication");
				}
			}
			else
			{
				if(slTxbilDscService.checkDup(ds_taxMod.getString(0, "PBC_SQNO")) > 0)
				{
					throw new AppetizerException("error.message.taxbill.duplication");
				}
			}
			
			ds_taxMod.set(0, "PBC_SQNO", pbc_sqno );
			//ds_taxMod.set(0, "NTS_TMS_SQNO", TxBilUtil.generateNTS_TMS_SQNO("41000198"));
			ds_taxMod.set(0, "NTS_TMS_SQNO", TxBilUtil.genCrtdtNTS_TMS_SQNO(ds_taxMod.getString(0,"CRT_DT"),"41000198"));

			int insert = slTxbilDscService.insertTaxMod2(ds_taxMod, dDate);

			if(insert > 0)
			{
				for(int i = 0 ; i < ds_taxDetailMod.getRowCount() ; i++)
				{
					ds_taxDetailMod.set(i, "PBC_SQNO", pbc_sqno);
					slTxbilDscService.insertTaxDetail(ds_taxDetailMod, i, dDate, ds_taxMod.getString(0, "FS_RGM"));
				}
				
			}
			else 
			{
				throw new AppetizerException("error.message.server.exception");
			}
			
			platformData.addDataSet(ds_taxMod);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -3, e.getErrorMsg());
		} catch (ParseException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
                
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/taxCancel")
	public void taxCancel(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet ds_tax = requestHelper.getDataSet("ds_tax");
		String userId = requestHelper.getParameter("userId");
		
		PlatformData platformData = new PlatformData();
		
		try {
			SimpleDateFormat dsf = new SimpleDateFormat("yyyyMMddHHmmss",Locale.KOREAN);					
			String date = DateUtil.getCurrentDate("yyyyMMddHHmmss");
			
			Date dDate = dsf.parse(date);
			
			slTxbilDscService.taxCancel(ds_tax, dDate, userId);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -3, e.getErrorMsg());
		} catch (ParseException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
                
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveSlTxbilForMod")
	public void retrieveSlTxbilForMod(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			List<SlTxbilVO> taxList= slTxbilDscService.retrieveTaxText(PBC_SQNO);
			List<SlTxbilDscVO> taxDetailList= slTxbilDscService.retrieveTaxDtl(PBC_SQNO);
			
			DataSetHelper dsHelper2 = new DataSetHelper("ds_tax");
			DataSetHelper dsHelper = new DataSetHelper("ds_taxDetail");
			
			
			if(taxDetailList != null && taxDetailList.size() > 0){
			
				dsHelper.addColumns(SlTxbilDscVO.class);
				
				for(SlTxbilDscVO vo : taxDetailList){
					dsHelper.setData(vo);
				}
				
			}	
			
			if(taxList != null && taxList.size() > 0){
				
				dsHelper2.addColumns(SlTxbilVO.class);
				
				for(SlTxbilVO vo : taxList){
					dsHelper2.setData(vo);
				}
				
			}	
			
			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/deleteTaxbil")
	public void deleteTaxbil(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			int del = slTxbilDscService.deleteTaxbilDesc(PBC_SQNO);
			if(del > 0)
			{
				slTxbilDscService.deleteTaxbil(PBC_SQNO);
			}
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	

	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/insertTaxbil")
	public void insertTaxbil(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet ds_tax = requestHelper.getDataSet("ds_tax");
		DataSet ds_taxDetail = requestHelper.getDataSet("ds_taxDetail");
		
		PlatformData platformData = new PlatformData();
		
		String pbc_sqno = TxBilUtil.generatePBC_SQNO();
		try {
			SimpleDateFormat dsf = new SimpleDateFormat("yyyyMMddHHmmss",Locale.KOREAN);					
			String date = DateUtil.getCurrentDate("yyyyMMddHHmmss");
			
			Date dDate = dsf.parse(date);
			
			ds_tax.set(0, "PBC_SQNO", pbc_sqno );
			ds_tax.set(0, "NTS_TMS_SQNO", TxBilUtil.generateNTS_TMS_SQNO("41000198"));
			
			int insert = slTxbilDscService.insertTaxbil(ds_tax, dDate);

			if(insert > 0)
			{
				for(int i = 0 ; i < ds_taxDetail.getRowCount() ; i++)
				{
					ds_taxDetail.set(i, "PBC_SQNO", pbc_sqno);
					ds_taxDetail.set(i, "FS_RGM", ds_tax.getString(i, "FS_RGM"));
					slTxbilDscService.insertTaxDetail(ds_taxDetail, i, dDate, ds_tax.getString(0, "FS_RGM"));
				}
			}
			else 
			{
				throw new Error("error");
			}
			platformData.addDataSet(ds_tax);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} catch (ParseException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	/* 
	 * /xui/OMG/MG/OMG_MG_TX_1040.xfdl
	 * 52001002	세금계산서>문서보관함>역발행내역	52001000	OMG.MG	OMG_MG_TX_1040
	 * 운영세금계산서에서만 쓰는 기능으로 협력업체나 사업장, 본부회원화면에서는 쓰지 않는다. reSend 만 사용
	 * TX001
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/sendTaxSms")
	public void sendTaxSms(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_sms = requestHelper.getDataSet("ds_sms");
		
		PlatformData platformData = new PlatformData();
		try {
				
			slTxbilDscService.sendTaxSms(ds_sms);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveTaxSmsResult")
	public void retrieveTaxSmsResult(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		PlatformData platformData = new PlatformData();

		// Paging
		int totalRowCount = slTxbilDscService.retrieveTaxSmsResultCount(dsCondition);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
		
		try {
			
			List<Map<String, Object>> smsList= slTxbilDscService.retrieveTaxSmsResult(dsCondition, start, end);

			DataSetHelper dsHelper = new DataSetHelper("ds_sms");
			
			if(dsHelper != null && smsList.size() > 0){
				dsHelper.addColumns(smsList.get(0).keySet());
				for(Map<String, Object> map : smsList) {
					dsHelper.setData(map);
					
				}
			}	
			
			platformData.addDataSet(pageHelper.getDsPageVo());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		}       
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveBzplcList")
	public void retrieveBzplcList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String USRID = requestHelper.getParameter("USRID");	

		PlatformData platformData = new PlatformData();
	
		try {
			
			List<Map<String, Object>> bzplcList= slTxbilDscService.retrieveBzplcList(USRID);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_bzplc");
			DataSetHelper dsHelper2 = new DataSetHelper("ds_teamC");
			
			if(dsHelper != null && bzplcList.size() > 0){
				dsHelper.addColumns(bzplcList.get(0).keySet());
				for(Map<String, Object> map : bzplcList) {
					dsHelper.setData(map);
				}
			}

			List<Map<String, Object>> teamList= slTxbilDscService.retrieveBzplcTeamCodeList(USRID);
			if(dsHelper2 != null && teamList.size() > 0){
				dsHelper2.addColumns(teamList.get(0).keySet());
				for(Map<String, Object> map : teamList) {
					dsHelper2.setData(map);
				}
			}

			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		}       
	}
	

	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveEmailResendList")
	public void retrieveEmailResendList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		PlatformData platformData = new PlatformData();

		// Paging
		int totalRowCount = slTxbilDscService.retrieveEmailResendListCount(dsCondition);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
		
		try {
			
			List<Map<String, Object>> taxList= slTxbilDscService.retrieveEmailResendList(dsCondition, start, end);
			DataSetHelper dsHelper = new DataSetHelper("ds_tax");
			
			if(dsHelper != null && taxList.size() > 0){
				dsHelper.addColumns(taxList.get(0).keySet());
				for(Map<String, Object> map : taxList) {
					dsHelper.setData(map);
				}
			}	
			
			platformData.addDataSet(pageHelper.getDsPageVo());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		}       
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/reSend")
	public void reSend(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_reSend = requestHelper.getDataSet("ds_reSend");
		
		
		PlatformData platformData = new PlatformData();
		try {

			slTxbilDscService.reSend(ds_reSend);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/updateEmailAddr")
	public void updateEmailAddr(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String email = requestHelper.getParameter("email");
		String PBC_SQNO = requestHelper.getParameter("PBC_SQNO");

		PlatformData platformData = new PlatformData();
		
		try {
			slTxbilDscService.updateEmailAddr(PBC_SQNO, email);
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		} 
	}
	
	/**
	 * 월잔액장 조회
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveByngMon")
	public void retrieveByngMon(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String bas_ym = requestHelper.getParameter("bas_ym");
		String bas_ym2 = requestHelper.getParameter("bas_ym2");
		String adjpl_biz_number = requestHelper.getParameter("trpl_corp_no");
		String na_adjpl_c = requestHelper.getParameter("na_trpl_c");
		String issue_stat = requestHelper.getParameter("issue_stat");
		String userId = requestHelper.getUserID();
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			
			int totalRowCount = slTxbilDscService.retrieveByngMonCount(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			List<ByngMonVO> list = slTxbilDscService.retrieveByngMon(userId, bas_ym, bas_ym2,adjpl_biz_number, na_adjpl_c, issue_stat, start, end);
			long sum_bac_am = slTxbilDscService.getByngMonSumBacAm(userId, bas_ym, adjpl_biz_number, na_adjpl_c, issue_stat);
			DataSet dsSum = new DataSet("ds_sum");
			dsSum.addColumn("SUM_BAC_AM", DataTypes.LONG);
			dsSum.newRow();
			dsSum.set(0, "SUM_BAC_AM", sum_bac_am);
			
			
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_byng");
				dsHelper.addColumns(ByngMonVO.class);
				for(ByngMonVO vo : list){
					dsHelper.setData(vo);
				}
			
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
				out_PlatformData.addDataSet(dsSum);
				
				sendData(response, out_PlatformData);
			}else{
				sendData(response, out_PlatformData);
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	}
	/*
	 * 화면ID :  
	 * 화면설명 :  
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelByngMon")
	public void downloadExcelByngMon(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String bas_ym = requestHelper.getParameter("bas_ym");
		String bas_ym2 = requestHelper.getParameter("bas_ym2");
		
		String adjpl_biz_number = requestHelper.getParameter("trpl_corp_no");
		String na_adjpl_c = requestHelper.getParameter("na_trpl_c");
		String issue_stat = requestHelper.getParameter("issue_stat");
		String userId = requestHelper.getUserID();
		
		String fileName = "잔액장발행관리.xls";
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}


		try
		{
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush

			String[] header = {
					 "기준월"
					,"발행일자"
					,"발행상태"
					,"채권채무원장접수상태"
					,"공급거래처코드"
					,"공급거래처 사업자번호"
					,"공급거래처명"
					,"잔액"
			};
			
			String[] keyIndex = {
					"BAS_YM",
					"ISSUE_DT",
					"ISSUE_STAT",
					"BAS_STAT",
					"NA_ADJPL_C",
					"ADJPL_BIZ_NUMBER",
					"ADJPL_NA_TRPL_N",
					"BAC"
					
			};
			
			
			// AbstractModel model = new DefaultModel(requestHelper.getParameter("FORM_NM"), header, keyIndex, list);
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			slTxbilDscService.downloadExcelByngMon(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat, handler);
			
			handler.write(response, fileName);
		}
		catch(AppetizerException e) {
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getMessage());
		}
	}
	
	
	/**
	 * 월잔액장 발행
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/publishByngMon")
	public void publishByngMon(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String bas_ym = requestHelper.getParameter("bas_ym");
		String bas_ym2 = requestHelper.getParameter("bas_ym2");
		
		String adjpl_biz_number = requestHelper.getParameter("trpl_corp_no");
		String na_adjpl_c = requestHelper.getParameter("na_trpl_c");
		String issue_stat = requestHelper.getParameter("issue_stat");
		DataSet dsByng= requestHelper.getDataSet("ds_byng");
		List<Map<String, Object>> publishList = new ArrayList<Map<String,Object>>();
		
		String userId = requestHelper.getUserID();
		PlatformData out_PlatformData = new PlatformData();
		
		for(int i = 0; i < dsByng.getRowCount(); i++){
			
			
			if(StringUtils.equals("1", dsByng.getString(i, "ISCHECKED"))){
				Map<String, Object> item = new HashMap<String, Object>();
				
				String ADJ_NA_BZPLC = dsByng.getString(i, "ADJ_NA_BZPLC");
				String ADJ_BZPL_NA_TEAM_C = dsByng.getString(i, "ADJ_BZPL_NA_TEAM_C");
				String BAS_YM = dsByng.getString(i, "BAS_YM");
				String NA_BZPLC = dsByng.getString(i, "NA_BZPLC");
				String NA_TEAM_C = dsByng.getString(i, "NA_TEAM_C");
				String NA_ADJPL_C = dsByng.getString(i, "NA_ADJPL_C");
				String ADJPL_NA_TEAM_C = dsByng.getString(i, "ADJPL_NA_TEAM_C");
				String BZ_METH_DSC = dsByng.getString(i, "BZ_METH_DSC");
				String NA_WRS_LCLC = dsByng.getString(i, "NA_WRS_LCLC");
				String NA_WRS_MCLC = dsByng.getString(i, "NA_WRS_MCLC");
				String NA_BLB_DFC_DSC= dsByng.getString(i, "NA_BLB_DFC_DSC");
				
				/*
				 * 음수잔액발행 방지
				 */
				/*
				String BAC = dsByng.getString(i, "BAC");
				long bacNum  = new Long(BAC);
				
			    if(bacNum < 0){

			    	sendData(response, out_PlatformData, -1, "음수금액이 존재합니다. \n 농협하나로유통 담당자에게 확인바랍니다. ");
					return ;
			    }
			    */

				
				item.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
				item.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
				item.put("BAS_YM", BAS_YM);
				item.put("NA_BZPLC", NA_BZPLC);
				item.put("NA_TEAM_C", NA_TEAM_C);
				item.put("NA_ADJPL_C", NA_ADJPL_C);
				item.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
				item.put("BZ_METH_DSC", BZ_METH_DSC);
				item.put("NA_WRS_LCLC", NA_WRS_LCLC);
				item.put("NA_WRS_MCLC", NA_WRS_MCLC);
				item.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
				item.put("ISSUE_USER_ID", requestHelper.getUserID());
				item.put("ISSUE_STAT", "1");// 0: 미발행, 1 : 발행, 2 : 취소
				item.put("ISSUE_DT", DateUtil.getCurrentDate("yyyyMMddHHmmss"));// 0: 미발행, 1 : 발행, 2 : 취소
				logger.debug("월잔액장 변경 대상 IDX : "+ i  + " / " + dsByng.getRowType(i) +" / " +  dsByng.getString(i, "ISCHECKED"));
				publishList.add(item);
			}
		}
		

		try {
			
			int cnt = slTxbilDscService.insertByngHisList(publishList);
			
			
			int totalRowCount = slTxbilDscService.retrieveByngMonCount(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			List<ByngMonVO> list = slTxbilDscService.retrieveByngMon(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat, start, end);
					
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_byng");
				dsHelper.addColumns(ByngMonVO.class);
				for(ByngMonVO vo : list){
					dsHelper.setData(vo);
				}
			
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
				
				sendData(response, out_PlatformData, 0, String.valueOf(cnt));
			}else{
				sendData(response, out_PlatformData, 0, String.valueOf(cnt));
			}
		} catch (AppetizerException e) {
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	}
	
	/**
	 * 채권채무원장 조회
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveBasSvc")
	public void retrieveBasSvc(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String bas_ym = requestHelper.getParameter("bas_ym");
		String bzplc_corp_no = requestHelper.getParameter("bzplc_corp_no");//사업장 사업자번호
		String adj_na_bzplc = requestHelper.getParameter("adj_na_bzplc");//사업장
		String bas_stat = requestHelper.getParameter("bas_stat");//발행상태
		
		String TRPL_C = requestHelper.getParameter("trplC");
		String na_adjpl_c[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			
			int totalRowCount = slTxbilDscService.retrieveBasSvcCount(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount, "ds_pageVO");
			
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			List<BasSvcVO> list = slTxbilDscService.retrieveBasSvc(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c, start, end);
			long basSvcSum = slTxbilDscService.getBasSvcSum(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c);
			
			DataSet dsSum = new DataSet("ds_sum");
			dsSum.addColumn("SUM_BAC_AM", DataTypes.LONG);
			dsSum.newRow();
			dsSum.set(0, "SUM_BAC_AM", basSvcSum);
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_bas_svc");
				dsHelper.addColumns(BasSvcVO.class);
				for(BasSvcVO vo : list){
					dsHelper.setData(vo);
				}
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
				out_PlatformData.addDataSet(dsSum);
				
				sendData(response, out_PlatformData);
			}else{
				sendData(response, out_PlatformData);
			}
		} catch (AppetizerException e) {
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	}
	
	/**
	 * 월잔액장 발행취소
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/cancleBasSvc")
	public void cancleBasSvc(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String bas_ym = requestHelper.getParameter("bas_ym");
		String bas_ym2 = requestHelper.getParameter("bas_ym2");
		
		String adjpl_biz_number = requestHelper.getParameter("trpl_corp_no");
		String na_adjpl_c = requestHelper.getParameter("na_trpl_c");
		String issue_stat = requestHelper.getParameter("issue_stat");
		DataSet dsByng= requestHelper.getDataSet("ds_byng");
		List<Map<String, Object>> publishList = new ArrayList<Map<String,Object>>();
		
		
		for(int i = 0; i < dsByng.getRowCount(); i++){			
			if(StringUtils.equals("1", dsByng.getString(i, "ISCHECKED"))){
				Map<String, Object> item = new HashMap<String, Object>();
				String ADJ_NA_BZPLC = dsByng.getString(i, "ADJ_NA_BZPLC");
				String ADJ_BZPL_NA_TEAM_C = dsByng.getString(i, "ADJ_BZPL_NA_TEAM_C");
				String BAS_YM = dsByng.getString(i, "BAS_YM");
				String NA_BZPLC = dsByng.getString(i, "NA_BZPLC");
				String NA_TEAM_C = dsByng.getString(i, "NA_TEAM_C");
				String NA_ADJPL_C = dsByng.getString(i, "NA_ADJPL_C");
				String ADJPL_NA_TEAM_C = dsByng.getString(i, "ADJPL_NA_TEAM_C");
				String BZ_METH_DSC = dsByng.getString(i, "BZ_METH_DSC");
				String NA_WRS_LCLC = dsByng.getString(i, "NA_WRS_LCLC");
				String NA_WRS_MCLC = dsByng.getString(i, "NA_WRS_MCLC");
				String NA_BLB_DFC_DSC= dsByng.getString(i, "NA_BLB_DFC_DSC");
							
				
				item.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
				item.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
				item.put("BAS_YM", BAS_YM);
				item.put("NA_BZPLC", NA_BZPLC);
				item.put("NA_TEAM_C", NA_TEAM_C);
				item.put("NA_ADJPL_C", NA_ADJPL_C);
				item.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
				item.put("BZ_METH_DSC", BZ_METH_DSC);
				item.put("NA_WRS_LCLC", NA_WRS_LCLC);
				item.put("NA_WRS_MCLC", NA_WRS_MCLC);
				item.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
				item.put("BAS_STAT", "2");//0 : 발행, 1 : 접수, 2 : 취소
				item.put("ISSUE_USER_ID", requestHelper.getUserID());
				item.put("ISSUE_STAT", "2");// 0: 미발행, 1 : 발행, 2 : 취소
				item.put("ISSUE_DT", DateUtil.getCurrentDate("yyyyMMddHHmmss"));// 0: 미발행, 1 : 발행, 2 : 취소
				logger.debug("발행된 월잔액장 취소 대상 IDX : "+ i  + " / " + dsByng.getRowType(i) +" / " +  dsByng.getString(i, "ISCHECKED"));
				publishList.add(item);
			}
		}
		
		String userId = requestHelper.getUserID();
		PlatformData out_PlatformData = new PlatformData();
		try{
			slTxbilDscService.insertByngHisList(publishList);
		}catch(AppetizerException e){
			sendData(response, out_PlatformData, -1, e.getMessage());
		}
		try {
						
			
			
			int totalRowCount = slTxbilDscService.retrieveByngMonCount(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			List<ByngMonVO> list = slTxbilDscService.retrieveByngMon(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat, start, end);
					
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_byng");
				dsHelper.addColumns(ByngMonVO.class);
				for(ByngMonVO vo : list){
					dsHelper.setData(vo);
				}
			
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
				
				sendData(response, out_PlatformData);
			}else{
				sendData(response, out_PlatformData);
			}
		} catch (AppetizerException e) {
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	}
	
	/**
	 * 채권채무원장 접수
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/publishBasSvc")
	public void publishBasSvc(HttpServletRequest request, HttpServletResponse response) {
		PlatformData out_PlatformData = new PlatformData();
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsBasSvc= requestHelper.getDataSet("ds_bas_svc");
		String bas_ym = requestHelper.getParameter("bas_ym");
		String bzplc_corp_no = requestHelper.getParameter("bzplc_corp_no");//사업장 사업자번호
		String adj_na_bzplc = requestHelper.getParameter("edt_adj_na_bzplc");//사업장
		String TRPL_C = requestHelper.getParameter("trplC");
		String na_adjpl_c[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
		String bas_stat = requestHelper.getParameter("bas_stat");//발행상태
		String CNFM_SIGN_DATA = requestHelper.getParameter("signData");
		List<Map<String, Object>> publishList = new ArrayList<Map<String,Object>>();
		try {
		
			for(int i = 0; i < dsBasSvc.getRowCount(); i++){
				
				
				if(StringUtils.equals("1", dsBasSvc.getString(i, "ISCHECKED"))){
					Map<String, Object> item = new HashMap<String, Object>();
					
					String ADJ_NA_BZPLC = dsBasSvc.getString(i, "ADJ_NA_BZPLC");
					String ADJ_BZPL_NA_TEAM_C = dsBasSvc.getString(i, "ADJ_BZPL_NA_TEAM_C");
					String BAS_YM = dsBasSvc.getString(i, "BAS_YM");
					String NA_BZPLC = dsBasSvc.getString(i, "NA_BZPLC");
					String NA_TEAM_C = dsBasSvc.getString(i, "NA_TEAM_C");
					String NA_ADJPL_C = dsBasSvc.getString(i, "NA_ADJPL_C");
					String ADJPL_NA_TEAM_C = dsBasSvc.getString(i, "ADJPL_NA_TEAM_C");
					String BZ_METH_DSC = dsBasSvc.getString(i, "BZ_METH_DSC");
					String NA_WRS_LCLC = dsBasSvc.getString(i, "NA_WRS_LCLC");
					String NA_WRS_MCLC = dsBasSvc.getString(i, "NA_WRS_MCLC");
					String NA_BLB_DFC_DSC= dsBasSvc.getString(i, "NA_BLB_DFC_DSC");
					
					/*
					 * 음수잔액발행 방지
					 */
					/*
					String BAC = dsBasSvc.getString(i, "BAC");
					int bacNum  = new Integer(BAC);
					
				    if(bacNum < 0){

				    	sendData(response, out_PlatformData, -1, "음수금액이 존재합니다. \n 농협하나로유통 담당자에게 확인바랍니다. ");
						return ;
				    }
				    */

					item.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
					item.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
					item.put("BAS_YM", BAS_YM);
					item.put("NA_BZPLC", NA_BZPLC);
					item.put("NA_TEAM_C", NA_TEAM_C);
					item.put("NA_ADJPL_C", NA_ADJPL_C);
					item.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
					item.put("BZ_METH_DSC", BZ_METH_DSC);
					item.put("NA_WRS_LCLC", NA_WRS_LCLC);
					item.put("NA_WRS_MCLC", NA_WRS_MCLC);
					item.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
					item.put("BAS_STAT", "1");
					item.put("CNFM_SIGN_USER_ID", requestHelper.getUserID());
					item.put("CNFM_SIGN_DATA", CNFM_SIGN_DATA);
					logger.debug("채권채무 접수 대상 IDX : "+ i  + " / " + dsBasSvc.getRowType(i) +" / " +  dsBasSvc.getString(i, "ISCHECKED"));
					publishList.add(item);
				}
			}
			
			try{
				slTxbilDscService.updateCnfMSign(publishList);
			}catch(AppetizerException e){
				sendData(response, out_PlatformData, -1, e.getMessage());
			}
			
			int totalRowCount = slTxbilDscService.retrieveBasSvcCount(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			List<BasSvcVO> list = slTxbilDscService.retrieveBasSvc(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c, start, end);
			
			
			if(list != null && list.size() > 0){
				DataSetHelper dsHelper = new DataSetHelper("ds_bas_svc");
				dsHelper.addColumns(BasSvcVO.class);
				for(BasSvcVO vo : list){
					dsHelper.setData(vo);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
				
				sendData(response, out_PlatformData);
			}else{
				sendData(response, out_PlatformData);
			}
		} catch (AppetizerException e) {
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pbs/bas/printBasSvc")
	public RestResult printBasSvc(HttpServletRequest request, String params
			){
		try{
			List<Map<String, Object>> paramList = new ArrayList<Map<String, Object>>();
			String list[]  = StringUtils.splitPreserveAllTokens(params, '/');
			for(int i = 0; i < list.length; i++ ){
				if(StringUtils.isNotEmpty(list[i])){
					Map<String, Object> item = new HashMap<String, Object>();
					String items[] = StringUtils.splitPreserveAllTokens(list[i], '|');
					item.put("ADJ_NA_BZPLC", items[0]);
					item.put("ADJ_BZPL_NA_TEAM_C", items[1]);
					item.put("BAS_YM", items[2]);
					item.put("NA_BZPLC", items[3]);
					item.put("NA_TEAM_C", items[4]);
					item.put("NA_ADJPL_C", items[5]);
					item.put("ADJPL_NA_TEAM_C", items[6]);
					item.put("BZ_METH_DSC", items[7]);
					item.put("NA_WRS_LCLC", items[8]);
					item.put("NA_WRS_MCLC", items[9] );
					item.put("NA_BLB_DFC_DSC", items[10]);
					paramList.add(item);
				}
			}
			 List<BasSvcVO> voList = slTxbilDscService.retrieveBasSvcList(paramList);
			
			 List<Map<String,Object>> basSvc = new ArrayList<Map<String,Object>>();
				int key = 1;
				if(voList != null && voList.size() > 0){
					for(BasSvcVO vo : voList){
						Map<String,Object> _item = new LinkedHashMap<String, Object>();
						_item.put("TOP1", DateUtil.getCurrentDate("yyyy-MM-dd, HH:mm:ss"));
						_item.put("KEY", key);
						_item.put("B1", vo.getTRPL_CORP_NO());
						_item.put("B2", vo.getTRPL_CORP_NM());
						_item.put("B3", vo.getTRPL_ADDR());
						_item.put("B4", vo.getTRPL_CHRG_NM());
						_item.put("B5", vo.getTRPL_NA_TEAM_NM());
						_item.put("B6", vo.getTRPL_CHRG_MPNO());
						_item.put("B7", vo.getTRPL_TELNO());
						
						_item.put("T1", vo.getBZPLC_CORP_NO());
						_item.put("T2", vo.getBZPLC_CORP_NM());
						_item.put("T3", vo.getBZPLC_ADDR());
						_item.put("T4", vo.getBZPLC_CHRG_NM());
						_item.put("T5", vo.getBZPLC_NA_TEAM_NM());
						_item.put("T6", vo.getBZPLC_CHRG_MPNO());
						_item.put("T7", vo.getBZPLC_TELNO());
						
						_item.put("C1", vo.getBAS_YM().substring(0, 4) + "년 " + vo.getBAS_YM().substring(4, 6) + "월");
						_item.put("C2", vo.getBAC());
						
						_item.put("D1", vo.getEXTX_AM());
						_item.put("D2", vo.getTXT_AM());
						
						_item.put("D3", Long.parseLong(StringUtils.defaultIfBlank(vo.getTXT_AM(), "0")) - Long.parseLong(StringUtils.defaultIfBlank(vo.getTXT_VAT(), "0")));
						_item.put("D4", vo.getTXT_VAT());//부가세액
						_item.put("D5", vo.getSMA_AM());//영세금액
						_item.put("D6", vo.getMAD_AM());//장려금
						_item.put("D7", "");//기타
						_item.put("D8", "");//외상매출금
						
						_item.put("E1", DateUtil.getDateFormat(DateUtil.convertStringToTimestamp(vo.getISSUE_DT(),"yyyyMMddHHmmss"), "yyyy-MM-dd HH:mm:ss"));
						_item.put("E2", vo.getISSUE_USER_ID());
						_item.put("E3", DateUtil.getDateFormat(DateUtil.convertStringToTimestamp(vo.getCNFM_DT(),"yyyyMMddHHmmss"), "yyyy-MM-dd HH:mm:ss"));
						_item.put("E4", vo.getCNFM_SIGN_USER_ID());
						String statusTxt = "";
						if(StringUtils.equals("0", vo.getBAS_STAT())){
							statusTxt = "발행";
						}else if(StringUtils.equals("1", vo.getBAS_STAT())){
							statusTxt = "접수";
						}else{
							statusTxt = "취소";
						}
						_item.put("E5", statusTxt);
						
						
						
						++key;
						basSvc.add(_item);
				}
				List<List<?>> all_list = new ArrayList<List<?>>();
				all_list.add(basSvc);
				return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			}else{
				return new RestResult(ErrorCode.FAILURE, "출력할 데이터가 존재하지 않습니다.");
			}
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	
	/**
	 * 채권채무원장 확인/미확인 내역 조회 팝업
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveBasSvcStatCount")
	public void retrieveBasSvcStatCount(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String bas_ym = requestHelper.getParameter("bas_ym");
		String bas_ym2 = requestHelper.getParameter("bas_ym2");
		String TRPL_C = requestHelper.getParameter("trplC");

		PlatformData out_PlatformData = new PlatformData();
		
		try {

			List<Map<String,Object>>  list = slTxbilDscService.retrieveBasSvcStatCount(bas_ym, bas_ym2, TRPL_C);
 
			if(list != null && list.size() > 0){
				
				DataSetHelper dsHelper = new DataSetHelper("ds_bas_svc");
				dsHelper.addColumns(list.get(0).keySet());
				
				for(Map<String, Object> map : list){
					dsHelper.setData(map);
				}
				
				out_PlatformData.addDataSet(dsHelper.getDataSet());

				sendData(response, out_PlatformData);
				
			}else{
				
				sendData(response, out_PlatformData);
				
			}
		} catch (AppetizerException e) {
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	} // retrieveBasSvcStatCount
	
	/**
	 * 채권채무원장 확인/미확인 내역 조회 팝업
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveBasNoCheckCount")
	public void retrieveBasNoCheckCount(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String bas_ym = requestHelper.getParameter("bas_ym");
		String bas_ym2 = requestHelper.getParameter("bas_ym2");
		
		String TRPL_C = requestHelper.getParameter("trplC");
		Map<String, Object> noCheckCount;

		
		PlatformData out_PlatformData = new PlatformData();
		
		try {

			noCheckCount = slTxbilDscService.retrieveBasNoCheckCount(bas_ym, bas_ym2, TRPL_C);
 

			DataSetHelper dsHelper = new DataSetHelper("ds_bas_svc");
		    dsHelper.addColumns(noCheckCount.keySet()); // N_CNT
		    dsHelper.setData(noCheckCount);
		    
		    out_PlatformData.addDataSet(dsHelper.getDataSet());
		    
		    sendData(response, out_PlatformData);

		} catch (AppetizerException e) {
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	}
	
	/**
	 * 월잔액장 본부 담당자 조회
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/tx/retrieveHurInf")
	public void retrieveHurInf(HttpServletRequest request, HttpServletResponse response) {
		
		PlatformData out_PlatformData = new PlatformData();
		
		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_hurMb");
			List<Map<String, Object>> list = slTxbilDscService.retrieveHurInf();
			
			if (list != null && list.size() > 0) {
				dsHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> map : list) {
					dsHelper.setData(map);
				}
			}
			
			out_PlatformData.addDataSet(dsHelper.getDataSet());
			sendData(response, out_PlatformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, out_PlatformData, -1, "error.message.server.exception");
			
		} 
	}
	
}	// End of Class