package com.nh.escm.system.controller;

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
import com.nh.escm.system.service.CertInfoService;
import com.nh.escm.system.vo.CertInfoVO;
import com.nh.escm.tx.doccstd.service.SlTxbilDscService;


@Controller
public class CertInfoController extends AbstractController {
	
	@Autowired
	private CertInfoService certInfoService;
	
	/*
	 * 역발행 서명요청 문자발송 일정 조회
	 * 
	 */
		@RequestMapping(method=RequestMethod.POST, value = "/rest/sys/retrieveCertInfoList")
		public void retrieveCertInfoList(HttpServletRequest request, HttpServletResponse response) {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			// String param1 = requestHelper.getParameter("param1");
			
			PlatformData platformData = new PlatformData();

			try {
				
				List<CertInfoVO> list= certInfoService.retrieveCertInfoList() ;
				DataSetHelper dsHelper = new DataSetHelper("ds_m");
				
				if(dsHelper != null && list.size() > 0){
					
					// dsHelper.addColumns(list.get(0).keySet());
					
					//for(Map<String, Object> map : list) {
					//	dsHelper.setData(map);
					//}
				}	
				
				platformData.addDataSet(dsHelper.getDataSet());
				sendData(response, platformData);
				
			} catch (Exception e) {
				sendData(response, platformData, -1, "error.message.server.exception");
				
			} 
	                
		}
		
	
	//전자 계약서 상세 저장 (농협) saveCertInfoList
	@RequestMapping(method=RequestMethod.POST, value = "/rest/sys/saveCertInfoList")
	public void saveCertInfoList(HttpServletRequest request, HttpServletResponse response) {	
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

        String ISCHECKED     ;
        String BSN_DSC       ;        
        String CERT_NAME     ;
        String CERT_ID       ;        
        String SYS_NAME      ;        
        String CERT_TYPE     ;
        String SSL_URL       ;
        String CN            ;
        String CERT_PATH     ;
        String NOT_BEFORE    ;
        String NOT_AFTER     ;
        String NOTIFICATION  ;
        String HOST_NAME     ;
        String IP_ADDRESS    ;
        String RMK           ;
        String FSRG_DTM      ;
        String FS_RGM        ;
        String LSCHG_DTM     ;
        String LS_CHGM       ;
        
        CertInfoVO certInfoVo = new CertInfoVO();

        
		try {
			
			DataSet ds_m = requestHelper.getDataSet("ds_m");

			for(int i = 0; i < ds_m.getRowCount(); i++){
				
	            ISCHECKED  = ds_m.getString(i, "ISCHECKED");
	            BSN_DSC    = ds_m.getString(i, "BSN_DSC"   );
	            CERT_ID    = ds_m.getString(i, "CERT_ID" );
	            CERT_NAME  = ds_m.getString(i, "CERT_NAME" );
	            SYS_NAME   = ds_m.getString(i, "SYS_NAME"  );
	            CERT_TYPE  = ds_m.getString(i, "CERT_TYPE" );
	            SSL_URL    = ds_m.getString(i, "SSL_URL"   );
	            CN         = ds_m.getString(i, "CN"        );
	            CERT_PATH  = ds_m.getString(i, "CERT_PATH" );
	            //NOT_BEFORE = ds_m.getString(i, "NOT_BEFORE");
	            //NOT_AFTER  = ds_m.getString(i, "NOT_AFTER" );
	            
	            NOT_BEFORE = "";
	            NOT_AFTER  = "";
	            NOTIFICATION  = ds_m.getString(i, "NOTIFICATION" );
	            HOST_NAME  = ds_m.getString(i, "HOST_NAME" );
	            IP_ADDRESS = ds_m.getString(i, "IP_ADDRESS");
	            RMK        = ds_m.getString(i, "RMK"       );
	            FSRG_DTM   = ds_m.getString(i, "FSRG_DTM"  );
	            FS_RGM     = ds_m.getString(i, "FS_RGM"    );
	            LSCHG_DTM  = ds_m.getString(i, "LSCHG_DTM" );
	            LS_CHGM    = ds_m.getString(i, "LS_CHGM"   );
	            
	            
	            certInfoVo.setBSN_DSC(BSN_DSC);
	            certInfoVo.setCERT_ID(CERT_ID);
	            certInfoVo.setCERT_NAME(CERT_NAME);
	            certInfoVo.setSYS_NAME(SYS_NAME);
	            certInfoVo.setCERT_TYPE(CERT_TYPE);
	            certInfoVo.setSSL_URL(SSL_URL);
	            certInfoVo.setCN(CN);
	            certInfoVo.setCERT_PATH(CERT_PATH);
	            certInfoVo.setNOTIFICATION(NOTIFICATION);
	            // NOTIFICATION
	            certInfoVo.setHOST_NAME(HOST_NAME); 
	            certInfoVo.setIP_ADDRESS(IP_ADDRESS);
	            certInfoVo.setRMK(RMK);
	            certInfoVo.setFS_RGM(FS_RGM);
	            certInfoVo.setLS_CHGM(LS_CHGM);
	            
				if(FSRG_DTM == null || FSRG_DTM.equals("")){
				    // 입력
					
					FS_RGM= requestHelper.getUserID();
					certInfoService.insertCertInfo(certInfoVo); 
					
				} else if(FSRG_DTM != null &&  FSRG_DTM.length() > 0 && "1".equals(ISCHECKED) ){
					//수정
					
					LS_CHGM= requestHelper.getUserID();
					certInfoService.updateCertInfo(certInfoVo); 

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
	
} // End of Class
