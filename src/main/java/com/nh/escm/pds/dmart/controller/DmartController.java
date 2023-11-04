package com.nh.escm.pds.dmart.controller;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
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
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler ;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pds.dmart.service.DmartService;
import com.nh.escm.pds.dmart.vo.DmartVO;
import com.nh.escm.util.PageHelper;


/*
 * 
 * 화면ID : /pds/dmart/PDS_DMART_001_P01.js
 * 화면설명 : 데이터마트 신청
 * 
 */

@RestController
public class DmartController  extends AbstractController {
	
	@Autowired DmartService dmartService;

	@RequestMapping(method=RequestMethod.POST, value = "/rest/dmart/insertDmartReq")
	public void insertDmartReq(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsDmartReq = requestHelper.getDataSet("ds_dmart_req");
		
		String mb_id = requestHelper.getUserID();
		
		DmartVO dmartVo = new DmartVO();
		
		try{
			
			if(dsDmartReq.getRowCount() < 1){
				
			}
			
			DataSetHelper dsHelper = new DataSetHelper("ds_dmart_req");

			dmartVo.setREQ_TM         (dsDmartReq.getString(0, "REQ_TM")        );      // 신청일시                                    
			dmartVo.setREQ_ID          (mb_id );                                             // 신청ID                                      
			dmartVo.setREQ_STAT      (dsDmartReq.getString(0, "REQ_STAT")      );    // 진행상태(1:신청,2:진행,3:생성,4:삭제,5:오류)
			dmartVo.setREQ_DOC       (dsDmartReq.getString(0, "REQ_DOC")       );    // 신청문서                                    
			dmartVo.setDOC_TYPE      (dsDmartReq.getString(0, "DOC_TYPE")      );     // 문서유형(1:전표별,3:상품별)        
			dmartVo.setDOC_TYPE_DTL1 (dsDmartReq.getString(0, "DOC_TYPE_DTL1")      );     // 문서유형
			
			dmartVo.setREQ_TRPL_C    (dsDmartReq.getString(0, "REQ_TRPL_C")    );  // 신청권한사업장(A:권한사업장전체)            
			dmartVo.setSRCH_DAY_TYPE (dsDmartReq.getString(0, "SRCH_DAY_TYPE") );  // 조회기준일(1:매출일,2:검수일,3:지급예정일)  
			dmartVo.setSRCH_FM_DT    (dsDmartReq.getString(0, "SRCH_FM_DT")    );  // 조회시작일                                  
			dmartVo.setSRCH_ED_DT    (dsDmartReq.getString(0, "SRCH_ED_DT")    );  // 조회종료일                                  
			dmartVo.setRSLT_DOC_FMT  (dsDmartReq.getString(0, "RSLT_DOC_FMT")  );  // 결과문서포맷(1:텍스트,2:엑셀)               
			dmartVo.setBATCH_ST_TM   (dsDmartReq.getString(0, "BATCH_ST_TM")   );  // 배치시작시간                                
			dmartVo.setBATCH_ED_TM   (dsDmartReq.getString(0, "BATCH_ED_TM")   );  // 배치종료시간                                
			dmartVo.setDEL_DT        (dsDmartReq.getString(0, "DEL_DT")        );            // 삭제예정일자                                
			dmartVo.setFILE_PATH     (dsDmartReq.getString(0, "FILE_PATH")     );  // 파일경로                                    
			dmartVo.setCOMP_FILE_SIZE(dsDmartReq.getString(0, "COMP_FILE_SIZE"));  // 압축파일크기                                
			dmartVo.setTOT_EDI_SIZE  (dsDmartReq.getString(0, "TOT_EDI_SIZE")  );  // 전체EDI문서크기                             
			dmartVo.setBATCH_INST_ID(dsDmartReq.getString(0, "BATCH_INST_ID"));  // 배치키값                                    
			dmartVo.setSMS_SEND_TM   (dsDmartReq.getString(0, "SMS_SEND_TM")   );  // SMS전송일시(N:미전송)                       
			dmartVo.setFSRG_DTM      (dsDmartReq.getString(0, "FSRG_DTM")      );  // 최초등록일시                                
			dmartVo.setFS_RGM        (dsDmartReq.getString(0, "FS_RGM")        );  // 최초등록자                                  
			dmartVo.setLSCHG_DTM     (dsDmartReq.getString(0, "LSCHG_DTM")     );  // 최종변경일시                                
			dmartVo.setLS_CHGM       (dsDmartReq.getString(0, "LS_CHGM")       );  // 최종변경자
			
			
			/*
			 * 저장
			 */
			dmartService.insertDmartReq(dmartVo);
			
			
		}catch(AppetizerException e) 	{
			//  
			logger.error(e.getMessage(), e);
		}
		
		
	}

	/*
	 * 
	 * 화면ID : getDmartReqList()
	 * 화면설명 : 데이터마트 신청
	 * 
	 */

	@RequestMapping(method=RequestMethod.POST, value = "/rest/dmart/getDmartReqList")
	public void getDmartReqList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSetHelper dsHelper = new DataSetHelper("ds_dmart_req");
		PlatformData platformData = new PlatformData();
		
		String mb_id = requestHelper.getUserID();
		String date_fr  = requestHelper.getParameter("date_fr");
		String date_to = requestHelper.getParameter("date_to");

		
		//페이징
		int totalRowCount =  dmartService.selectDmartListCount(mb_id, date_fr, date_to);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
		
		
		List<DmartVO> dmartVoList = dmartService.selectDmartList(mb_id, date_fr, date_to,start,end);
		
		if(dmartVoList != null && dmartVoList.size() > 0) {
			
			dsHelper.addColumns(DmartVO.class);
			
			for(DmartVO vo:dmartVoList) {
				
				dsHelper.setData(vo);
				
			} // for
			
		} // if
		
		platformData.addDataSet(dsHelper.getDataSet());
		platformData.addDataSet(pageHelper.getDsPageVo());
		
		sendData(response, platformData);
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelDmartReqList")
	public void downloadExcelDmartReqList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSetHelper dsHelper = new DataSetHelper("ds_dmart_req");
		PlatformData platformData = new PlatformData();
		
		String mb_id = requestHelper.getUserID();
		String date_fr  = requestHelper.getParameter("date_fr");
		String date_to = requestHelper.getParameter("date_to");
		
		String fileName = "데이터마트신청내역.xls";
		
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try{		
				List<Map<String,Object>> dmartList = null;
				Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
				
				String[] header = {
						  "신청일시"
						, "신청ID"
						, "진행상태명"
						, "파일경로"
						, "신청문서"
						, "문서유형명(1:전표별,3:상품별)"
						, "신청권한사업장(A:권한사업장전체)"
						, "조회기준일(1:매출일,2:검수일,3:지급예정일)"
						, "조회시작일"
						, "조회종료일"
						, "결과문서포맷(1:텍스트,2:엑셀)"
						, "생성시간"
						, "삭제일자"
		
				};
				
				String[] keyIndex = {
						  "REQ_TM"
						, "REQ_ID"
						, "REQ_STAT_NM"
						, "FILE_PATH"
						, "REQ_DOC"
						, "DOC_TYPE_NM"
						, "REQ_TRPL_C"
						, "SRCH_DAY_TYPE_NM"
						, "SRCH_FM_DT"
						, "SRCH_ED_DT"
						, "RSLT_DOC_FMT_NM"
						, "BATCH_ED_TM"
						, "DEL_DT"
				};
				
				AbstractModel model = new DefaultModel("마스터", header, keyIndex, dmartList);
				ExcelFileMakerResultHandler handler  = new ExcelFileMakerResultHandler(workbook, model);
				
				dmartService.downloadExcelDmartReqList(mb_id, date_fr, date_to, handler);
				
				
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("신청일시", "신청일시");
				searchMap.put("신청ID", "신청ID");
				searchMap.put("진행상태명", "진행상태명");
				handler.createSearchSheet(searchMap);

				handler.write(response, fileName);
				
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/excel/downloadExcelStream")
	public void downloadExcelStream(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSetHelper dsHelper = new DataSetHelper("ds_dmart_req");
		PlatformData platformData = new PlatformData();
		
		String mb_id = requestHelper.getUserID();
		String date_fr  = requestHelper.getParameter("date_fr");
		String date_to = requestHelper.getParameter("date_to");
		
		String fileName = "데이터마트신청내역_stream.xls";
		
		if(StringUtils.isNotEmpty(fileName)) {
			try {
				fileName  = URLEncoder.encode(fileName, "UTF-8");
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try{		
				List<Map<String,Object>> dmartList = dmartService.downloadExcelStream(mb_id, date_fr, date_to);
				
				/*
				String[] header = {
						  "신청일시"
						, "신청ID"
						, "진행상태명"
						, "파일경로"
						, "신청문서"
						, "문서유형명(1:전표별,3:상품별)"
						, "신청권한사업장(A:권한사업장전체)"
						, "조회기준일(1:매출일,2:검수일,3:지급예정일)"
						, "조회시작일"
						, "조회종료일"
						, "결과문서포맷(1:텍스트,2:엑셀)"
						, "생성시간"
						, "삭제일자"
		
				};
				
				*/
				

				
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	

	@RequestMapping(method=RequestMethod.POST, value = "/rest/dmart/cancelDmartReq")
	public void cancelDmartReq(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String REQ_TM  = requestHelper.getParameter("REQ_TM");
		String REQ_ID = requestHelper.getParameter("REQ_ID");
		
		try{

			/*
			 * 저장
			 */
			dmartService.cancelDmartReq(REQ_TM, REQ_ID);
			
			
		}catch(AppetizerException e) 	{
			//  
			logger.error(e.getMessage(), e);
		}
		
		
	} //cancel
	
	@RequestMapping(method = RequestMethod.GET, value = "/rest/dmart/fileDownload" )
    public void fileDownload(HttpServletRequest request, HttpServletResponse response) {
				
		String realPath = null;
		
    	PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String REQ_TM  = requestHelper.getParameter("REQ_TM");
		String REQ_ID = requestHelper.getParameter("REQ_ID");
		String systemFileName = requestHelper.getParameter("systemFileName");
		String fileName = requestHelper.getParameter("fileName");
		
		
		logger.info("REQ_TM "+ REQ_TM);
		logger.info("REQ_ID "+ REQ_ID);
		logger.info("systemFileName "+ systemFileName);
		logger.info("fileName "+ fileName);
		
		
		realPath = Configurer.getProperty("file.dmart.path");	

		File dir = new File(realPath);
		File downloadFile = new File(dir.getAbsolutePath()+ File.separator + systemFileName);
		
		logger.info("FileDown(get) Location= "+ downloadFile.getAbsolutePath());
		
		String dFileName = fileName;
		
		response.setContentType(request.getContentType());
        response.setContentLength((int)downloadFile.length());
        response.setHeader("Content-Disposition", "attachment; filename=\"" + dFileName  + "\";");
        
        response.setHeader("Content-Transfer-Encoding", "binary");
        response.setHeader("Set-Cookie", "fileDownload=true; path=/");	
        OutputStream out = null;
        
        try {

            //회수 카운드 증가
			dmartService.updateDnCnt(REQ_TM, REQ_ID);
			
        	// 파일전송
        	out = response.getOutputStream();
            FileUtils.copyFile(downloadFile, out);

    			

        } catch(IOException ie){
        	logger.error(ie.getMessage(), ie);
        } catch(AppetizerException e){
            logger.error(e.getMessage(), e);
        }finally{
        	
            if(out != null) {
            	try {
					out.flush();
				} catch (IOException e) {
					logger.error(e.getMessage());
				}
            }    
        }   
    }
	
	

}

