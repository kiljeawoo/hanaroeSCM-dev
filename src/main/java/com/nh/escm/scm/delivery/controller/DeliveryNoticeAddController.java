package com.nh.escm.scm.delivery.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.scm.delivery.service.DeliveryNoticeAddService;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;
import com.nh.escm.scm.order.service.OrderOrdersService;
import com.nh.escm.scm.order.vo.OrderOrdersWrsVO;

@RestController
public class DeliveryNoticeAddController extends AbstractController {
	
	
	@Autowired
	private DeliveryNoticeService deliveryNoticeService;
	
	@Autowired
	private DeliveryNoticeAddService deliveryNoticeAddService;
	
	@Autowired
	private OrderOrdersService ordersService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/uploadWRSList")
	public void uploadWRSList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String systemFileName = requestHelper.getParameter("systemFileName");
		
		String odrpl_na_trpl_c	 				= requestHelper.getParameter("odrpl_na_trpl_c");
		String odrpl_na_team_c= requestHelper.getParameter("odrpl_na_team_c");
		String prgr_c 								= requestHelper.getParameter("prgr_c");
		String ddly_yn 							= requestHelper.getParameter("ddly_yn");
		String chkDate								= requestHelper.getParameter("chkDate");
		String cserCtrTpc							= requestHelper.getParameter("cser_ctr_tpc");
		String trplC									= "";
		String orginTrplS							= "";
		
		Map<String, Object> trnrelParams = new HashMap<String, Object>();
		trnrelParams.put("inBsDay", requestHelper.getParameter("in_BsDay"));
		trnrelParams.put("inTrplR", requestHelper.getParameter("in_TrplR"));
		trnrelParams.put("inTeamR", requestHelper.getParameter("in_TeamR"));
		trnrelParams.put("inTrplO", requestHelper.getParameter("in_TrplO"));
		trnrelParams.put("inTeamO", requestHelper.getParameter("in_TeamO"));
		trnrelParams.put("inTrplM", requestHelper.getParameter("in_TrplM"));
		trnrelParams.put("inTeamM", requestHelper.getParameter("in_TeamM"));
		trnrelParams.put("inCtrTpc", requestHelper.getParameter("in_CtrTpc"));
		trnrelParams.put("inSpyTpc", requestHelper.getParameter("in_SpyTpc"));
		trnrelParams.put("inTrTpcM", requestHelper.getParameter("in_TrTpcM"));
		trnrelParams.put("inWrsC", requestHelper.getParameter("in_WrsC"));
		trnrelParams.put("inYear", requestHelper.getParameter("in_Year"));
		trnrelParams.put("inUseSysR", requestHelper.getParameter("in_UseSysR"));
		trnrelParams.put("inUseSysO", requestHelper.getParameter("in_UseSysO"));
		trnrelParams.put("inUseSysM", requestHelper.getParameter("in_UseSysM"));
		trnrelParams.put("inDdlyYN", requestHelper.getParameter("in_DdlyYN"));
		
		if(StringUtils.isNotEmpty(requestHelper.getParameter("trplC"))){
			trplC = requestHelper.getParameter("trplC");//직송시 물류코드
			if(StringUtils.equals("1", ddly_yn)){
				if(StringUtils.isEmpty(requestHelper.getParameter("orginTrplS"))){
					orginTrplS = requestHelper.getGlnCode();//공급처코드
				}else{
					orginTrplS = requestHelper.getParameter("orginTrplS");
				}
			}
		}else{
			trplC = requestHelper.getGlnCode();
		}
		
		if(logger.isDebugEnabled()){
			logger.debug("상품조회");
			logger.debug("odrpl_na_trpl_c : " + odrpl_na_trpl_c);
			logger.debug("odrpl_na_team_c : " + odrpl_na_team_c);
			logger.debug("prgr_c : " + prgr_c);
			logger.debug("ddly_yn : " + ddly_yn);
			logger.debug("chkDate : " + chkDate);
			logger.debug("cserCtrTpc : " + cserCtrTpc);
			logger.debug("orginTrplS : " + orginTrplS);
			logger.debug("trplC : " + trplC);
		}
		PlatformData platformData = new PlatformData();	
		
		File tempPath = FileUtils.getFile(Configurer.getProperty("file.temp.path"));

		int totalCnt = 0;
		HSSFWorkbook workbook = null;
		try {
			
			if(StringUtils.isEmpty(systemFileName)) {
				 throw new ValidationException("잘못된 첨부파일 오류, 첨부파일 이름이 없습니다.");
			}
			
			 File filepath = FileUtils.getFile(tempPath, systemFileName);
			 if(!filepath.exists()) {
				 throw new ValidationException("첨부파일이 서버에 Upload 되지 않았습니다.관리자에 확인바랍니다.");
			 }
			 
			FileInputStream fis=new FileInputStream(filepath);
			POIFSFileSystem fs = new POIFSFileSystem(fis);
			workbook = new HSSFWorkbook(fs);
			int sheetNum = workbook.getNumberOfSheets();
			DataSetHelper dsHelper = new DataSetHelper("ds_wrs");
			
			for (int k = 0; k < sheetNum; k++) {
				HSSFSheet sheet = workbook.getSheetAt(k);
				int rows = sheet.getPhysicalNumberOfRows();
		        for (int r = 0; r < rows; r++)  {
		        	
		        	if(totalCnt > 100) {
		        		break;
		        	}
		        	
		            HSSFRow row   = sheet.getRow(r);
		            if (row != null) {
		                String wrsCode = getCellValue(row.getCell(0));
		                if(StringUtils.isEmpty(wrsCode)) {
		                	break;
		                }
		                if(StringUtils.isEmpty(getCellValue(row.getCell(1)))) {
		                	break;
		                }
		                int cnt = NumberUtils.toInt(getCellValue(row.getCell(1)));
		                
		                List<OrderOrdersWrsVO> mapList = ordersService.searchWRS("code", wrsCode, odrpl_na_trpl_c, odrpl_na_team_c, prgr_c, ddly_yn, trplC, chkDate, cserCtrTpc, orginTrplS, trnrelParams);
		    			
		    			dsHelper.addColumns(OrderOrdersWrsVO.class);
		    			dsHelper.getDataSet().addColumn("WRS_CNT", DataTypes.INT);
		    			if(mapList != null){
		    				for(OrderOrdersWrsVO vo : mapList){
		    					dsHelper.setData(vo);
		    					dsHelper.getDataSet().set(dsHelper.getDataSet().getRowCount(), "WRS_CNT", cnt);
		    					totalCnt++;
		    				}
		    			}
		            }
		        }
			}
			
			platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} catch (FileNotFoundException e) {
			sendData(response, platformData, -1, e.getMessage());
		} catch (IOException e) {
			sendData(response, platformData, -1, e.getMessage());
		} catch (ValidationException e) {
			sendData(response, platformData, -1, e.getMessage());
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		} finally {
			if(workbook !=null) {
				try {
					workbook.close();
				} catch (IOException e) {
					logger.error(e.getMessage(), e);
				}
			}
		}
		
	}
	
	private String getCellValue(HSSFCell cell) {
		String value = null;
		if (cell != null)  { 
             switch (cell.getCellType()) {
                 case HSSFCell.CELL_TYPE_FORMULA :
                      value = ""+cell.getCellFormula();
                      break;
                 case HSSFCell.CELL_TYPE_NUMERIC :
                      value = ""+cell.getNumericCellValue(); //double
                      break;
                 case HSSFCell.CELL_TYPE_STRING :
                      value = ""+cell.getStringCellValue(); //String
                      break;
                 case HSSFCell.CELL_TYPE_BLANK :
                      value = null;
                      break;
                 case HSSFCell.CELL_TYPE_BOOLEAN :
                      value = ""+cell.getBooleanCellValue(); //boolean
                      break;
                 case HSSFCell.CELL_TYPE_ERROR :
                      value = ""+cell.getErrorCellValue(); // byte
                      break;
                 default :
             }
         }
		return value;
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/reSendDeliveryNoticeOrder")
	public void reSendDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
	
		try {
			
			PlatformData out_PlatformData = new PlatformData();
			String LS_CMENO 		= requestHelper.getUserID();
			String SPYPL_NA_TRPL_C = requestHelper.getParameter("SPYPL_NA_TRPL_C");
			String DVYAA_NA_TRPL_C 	= requestHelper.getParameter("DVYAA_NA_TRPL_C");
			String NA_DVY_PLASH_SLPNO = requestHelper.getParameter("NA_DVY_PLASH_SLPNO");
			deliveryNoticeAddService.reSendDeliveryNoticeOrder(LS_CMENO, SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO);
			
			sendData(response, out_PlatformData);
		}  catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_0350
	 * 화면명 : 일괄 재전송
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/scm/delivery/reSendAllDeliveryNoticeOrder")
	public void reSendAllDeliveryNoticeOrder(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			
			String TRPL_C 			= requestHelper.getParameter("TRPL_C");
			String LS_CMENO 		= requestHelper.getUserID();
			String dvy_pla_dt_from 	= requestHelper.getParameter("dvy_pla_dt_fr");
			String dvy_pla_dt_to 	= requestHelper.getParameter("dvy_pla_dt_to");
			String TRPL_C_ARR[] 	= requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			int rtnCnt = 0;
			String rtnDesc = "";
			
			rtnCnt = deliveryNoticeAddService.deliveryNoticeAllCancelProc(TRPL_C_ARR, dvy_pla_dt_from, dvy_pla_dt_to, LS_CMENO);
			
			sendData(response, new PlatformData(), 0, Integer.toString(rtnCnt));

		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}