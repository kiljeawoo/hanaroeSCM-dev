
package com.nh.escm.common.scheduling.sms;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.message.service.MessageSenderService;

import com.nh.escm.system.service.CertInfoService;
import com.nh.escm.system.service.SslCertInfoHandler;
import com.nh.escm.system.vo.CertInfoVO;

public class CertInfoSmsSendingJob {
	
	/* ***************************************************** 
	 * 
	 * CertInfoSmsSendingJob
	 * 
	 * *****************************************************/
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
	private CertInfoService certInfoService;
	
	public void start() {
		
		String currentServer = System.getProperty("SERVER");
		String mainServer = Configurer.getProperty("scheduling.main.server");
		
		logger.debug("▶▶▶ Certtificate Info Sms Sender Start");
		logger.debug("Current Server:" + currentServer);
		logger.debug("Main Server:" + mainServer);
		
		/*****************************************************************************/
		doJob(); // Job 실행  로컬에서는 이렇게 해야 실행됨. 운영적용시 삭제 
		/*****************************************************************************/
		
		if (currentServer != null && currentServer.equals(mainServer)) {
			logger.debug("This System is Main Server. Ready to run Scheduling.");
			doJob(); // Job 실행
		} else {
			logger.debug("This System is not Main Server. Do not run Scheduling.");
		}
	}
	 
	private void doJob() {
		logger.info("!!Running... Certtificate Info Sms Sending Job");
		
		try {
			
			/*
			 * 인증서 정보 불러오기
			 */
			List<CertInfoVO> list= certInfoService.retrieveCertInfoList() ;
			// list.get(0).keySet()   
			// list.size() > 0
			
			logger.info("  Certtificate Info Sms Sending Job list -->   " + list.size());
			// Map.Entry entry ;
			
			Map<String, Object> map;
			CertInfoVO vo;
			Set keys ;
			
			/*

			    for(Map<String, Object> map : list) {
			    	// 
			    	//logger.info(" ================== list value " );
			    	entry = (Entry)map;
			    	//logger.info("Key: " + entry.getKey() + ", Value" + entry.getValue());
			    	//logger.info(entry.getKey() + ":" + entry.getValue());
			    }
			
			*/
			
			// map = list.get(0);
			//logger.info("map.toString()  " + map.toString());
			Iterator iterator ;

			for(int i = 0  ; i < list.size() ; i++) { // ; list.size()
				
				vo = list.get(i);

				try
				{
					SslCertInfoHandler sslHandler = new SslCertInfoHandler(vo);
					
					long dayToExpire = sslHandler.checkExpiration(vo.getNOT_AFTER());
					
					String SMS_MSG = "도메인 " + vo.getCERT_ID() + " SSL 인증서의 만료일이 " + dayToExpire + "일 남았습니다.";
					if(dayToExpire < 31){
						
						// sms 메일 
						// certInfoService.sendSms(String USR_HP, String SMS_MSG, String USR_NM);
						if(vo.getNOTIFICATION().equals("1")){
							/*
							 * SMS 를 정/부 두사람에게 동시에 보냄
							 */
							certInfoService.sendSms(vo.getMP_1(), SMS_MSG , "전산담당자");
							certInfoService.sendSms(vo.getMP_2(), SMS_MSG , "전산담당자(부)");

						}
						
						
					}
				}catch(Exception e){
					e.printStackTrace();
				}
				
				logger.info("CERT_ID =  " + vo.getCERT_ID() );
				logger.info("CERT_IDCERT_NAME =  " + vo.getCERT_NAME() );
				logger.info("SSL_URL =  " + vo.getSSL_URL() );
				logger.info("MP_1 =  " + vo.getMP_1() );
				logger.info("MP_2 =  " + vo.getMP_2() );
				
				certInfoService.updateCertInfo(vo);

				// keys = map.keySet();
				// iterator = keys.iterator();
				
				// entry = map.entrySet();
				// entry = (Entry)map;
				// logger.info("Key: " + entry.getKey() + ", Value" + entry.getValue());
				// logger.info("list.size() =  " + list.size() );
				// logger.info("i =  " + i );
				
				/*
				for(Map.Entry entry:map.entrySet()){
				    System.out.println(entry.getKey() + " : " + entry.getValue());

				}
				*/
				
				/*
				String keyName = "SSL_URL";
			    if(map.containsKey(keyName)){
			    	Object value = map.get(keyName);
			    	System.out.println("Key : " + keyName +" value :"+ value.toString());
			    }
			    */
				//logger.info("map.toString()  " + map.toString());
				// logger.info("map.toString()  " + map.entrySet() );
				
				
			}
			
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			//sendData(response, platformData, -1, "error.message.server.exception");
			
		} 
		
		
		
	}
	
	/*
	 * 역발행 서명요청 문자발송 일정 조회
	 * 
	 */
		public void retrieveCertInfoList(HttpServletRequest request, HttpServletResponse response) {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			// String param1 = requestHelper.getParameter("param1");
			
			PlatformData platformData = new PlatformData();


	                
		}
		
	
	//전자 계약서 상세 저장 (농협) saveCertInfoList

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
			// sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
}  // CertInfoSmsSendingJob
