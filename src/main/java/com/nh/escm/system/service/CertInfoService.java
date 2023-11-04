package com.nh.escm.system.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.pt.usrinf.dao.MbEntDAO;
import com.nh.escm.system.dao.CertInfoDao;
import com.nh.escm.system.vo.CertInfoVO;
import com.nh.escm.util.SeqGenUtil;


@Service
public class CertInfoService extends AbstractService {
	
	@Autowired
	private CertInfoDao certInfoDao;
	
	@Autowired
	private MbEntDAO mbEntDAO;
	
	
	// 일정등록
	public List<CertInfoVO> retrieveCertInfoList() {
		

		try {
			
			return certInfoDao.retrieveCertInfoList( );
			
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			 throw new AppetizerException(e);
		}
		
	}
	// 인증서정보 등록
	public int insertCertInfo(CertInfoVO certInfoVo) {
		
		try {
			
			return certInfoDao.insertCertInfo(certInfoVo);
			
			
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
		
	}

	public int insertCertInfo 
	                          (  String BSN_DSC    
                               , String SYS_NAME   
                               , String CERT_NAME  
                               , String CERT_TYPE  
                               , String SSL_URL    
                               , String CN         
                               , String CERT_PATH  
                               , String NOT_BEFORE 
                               , String NOT_AFTER  
                               , String HOST_NAME  
                               , String IP_ADDRESS 
                               , String RMK        
                               , String FS_RGM     
                               , String LS_CHGM    
                              )
	
	
	
	{
		try {
			
			return certInfoDao.insertCertInfo 
                                             (  BSN_DSC    
                                              , SYS_NAME   
                                              , CERT_NAME  
                                              , CERT_TYPE  
                                              , SSL_URL    
                                              , CN         
                                              , CERT_PATH  
                                              , NOT_BEFORE 
                                              , NOT_AFTER  
                                              , HOST_NAME  
                                              , IP_ADDRESS 
                                              , RMK        
                                              , FS_RGM     
                                              , LS_CHGM    
                                             );
			
			
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
	}
	
	public int updateCertInfo(CertInfoVO certInfoVo) {
		try {
			
			return certInfoDao.updateCertInfo(certInfoVo);

		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
		
	}

	public int updateCertInfo 
                              (  String BSN_DSC    
                               , String SYS_NAME   
                               , String CERT_NAME  
                               , String CERT_TYPE  
                               , String SSL_URL    
                               , String CN         
                               , String CERT_PATH  
                               , String NOT_BEFORE 
                               , String NOT_AFTER  
                               , String HOST_NAME  
                               , String IP_ADDRESS 
                               , String RMK        
                               , String FS_RGM     
                               , String LS_CHGM    
                              )
	{
		try {
			
			return certInfoDao.updateCertInfo (  
					  BSN_DSC    
                    , SYS_NAME   
                    , CERT_NAME  
                    , CERT_TYPE  
                    , SSL_URL    
                    , CN         
                    , CERT_PATH  
                    , NOT_BEFORE 
                    , NOT_AFTER  
                    , HOST_NAME  
                    , IP_ADDRESS 
                    , RMK        
                    , FS_RGM     
                    , LS_CHGM    
                   );
			// return 0;
			
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
	}



	public int deleteCertInfo 
                              (  String BSN_DSC    
                               , String SYS_NAME   
                               , String CERT_NAME  
                               , String CERT_TYPE  
                               , String SSL_URL    
                               , String CN         
                               , String CERT_PATH  
                               , String NOT_BEFORE 
                               , String NOT_AFTER  
                               , String HOST_NAME  
                               , String IP_ADDRESS 
                               , String RMK        
                               , String FS_RGM     
                               , String LS_CHGM    
                              )
	{
		try {
			
			return certInfoDao.deleteCertInfo (  
					  BSN_DSC    
                    , SYS_NAME   
                    , CERT_NAME  
                    , CERT_TYPE  
                    , SSL_URL    
                    , CN         
                    , CERT_PATH  
                    , NOT_BEFORE 
                    , NOT_AFTER  
                    , HOST_NAME  
                    , IP_ADDRESS 
                    , RMK        
                    , FS_RGM     
                    , LS_CHGM    
                   );
			// return 0;
			
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
	}


	public int sendSms(String USR_HP, String SMS_MSG, String USR_NM) {
		
		if (USR_HP != null) {
			USR_HP = USR_HP.replaceAll("-", "");
		}
		
		int MSG_ID = SeqGenUtil.getSmsSeq("SMS").intValue();
		String USER_ID = Configurer.getProperty("smsSender.userId");
		int SCHEDULE_TYPE = 0;
		
		String SUBJECT = "";
		String SEND_DATE = DateUtil.getCurrentDate("yyyyMMddHHmmss");
		String DEST_TYPE = "0";
		String DEST_COUNT = "0";
		String DEST_INFO = USR_NM + "^" + USR_HP;
		
		int SEND_STATUS = 0;
		int SEND_COUNT = 0;
		int SEND_RESULT = 0;
		String CALLBACK = Configurer.getProperty("smsSender.callback");

		int rst = mbEntDAO.insertSmsSend(MSG_ID, USER_ID, SCHEDULE_TYPE,
				SUBJECT, SMS_MSG, SEND_DATE, DEST_TYPE, DEST_COUNT, DEST_INFO,
				SEND_STATUS, SEND_COUNT, SEND_RESULT, CALLBACK);
		
		return rst;
	}
	

}
