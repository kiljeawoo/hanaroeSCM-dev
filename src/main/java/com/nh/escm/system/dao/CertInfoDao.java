package com.nh.escm.system.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.exception.AppetizerException;
import com.nh.escm.system.vo.CertInfoVO;

public class CertInfoDao extends AbstractDao {

	/*
	 * 역발행 세금계산서 전송일정 조회
	 */
	
	public List<CertInfoVO> retrieveCertInfoList() {
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		// com.nh.escm.system.vo.CertInfoVO; 
		
		// param.put("BAS_Y", bAS_Y);
		
		return getSqlSession().selectList("certInfoDao.retrieveCertInfoList", param);
	}

	/*
	 * 인증서정보 입력
	 */
	public int insertCertInfo(CertInfoVO certInfoVo) {
		try {
			return getSqlSession().insert("certInfoDao.insertCertInfo", certInfoVo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
		
	}
	
	/*
	 *  
	 */
	public int  insertCertInfo (  
    	 	                      String BSN_DSC    
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
		// 
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("BSN_DSC"   , BSN_DSC   );
		param.put("SYS_NAME"  , SYS_NAME  );
		param.put("CERT_NAME" , CERT_NAME );
		param.put("CERT_TYPE" , CERT_TYPE );
		param.put("SSL_URL"   , SSL_URL   );
		param.put("CN"        , CN        );
		param.put("CERT_PATH" , CERT_PATH );
		param.put("NOT_BEFORE", NOT_BEFORE);
		param.put("NOT_AFTER" , NOT_AFTER );
		param.put("HOST_NAME" , HOST_NAME );
		param.put("IP_ADDRESS", IP_ADDRESS);
		param.put("RMK"       , RMK       );
		param.put("FS_RGM"    , FS_RGM);
		param.put("LS_CHGM"   , LS_CHGM);
		return getSqlSession().insert("certInfoDao.insertCertInfo", param);
	}

	public int updateCertInfo(CertInfoVO certInfoVo) {
		
		try {
			
			return getSqlSession().update("certInfoDao.updateCertInfo", certInfoVo);
			
		} catch (DataAccessException e) {
			
			throw new AppetizerException(e);
		}
	}
	/*
	 *  
	 */
	public int  updateCertInfo (  
    	 	                      String BSN_DSC    
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
		// 
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("BSN_DSC"   , BSN_DSC   );
		param.put("SYS_NAME"  , SYS_NAME  );
		param.put("CERT_NAME" , CERT_NAME );
		param.put("CERT_TYPE" , CERT_TYPE );
		param.put("SSL_URL"   , SSL_URL   );
		param.put("CN"        , CN        );
		param.put("CERT_PATH" , CERT_PATH );
		param.put("NOT_BEFORE", NOT_BEFORE);
		param.put("NOT_AFTER" , NOT_AFTER );
		param.put("HOST_NAME" , HOST_NAME );
		param.put("IP_ADDRESS", IP_ADDRESS);
		param.put("RMK"       , RMK       );
		param.put("FS_RGM"    , FS_RGM);
		param.put("LS_CHGM"   , LS_CHGM);
		
		return getSqlSession().update("certInfoDao.updateCertInfo", param);
	}
	/*
	 *  
	 */
	public int  deleteCertInfo (  
    	 	                      String BSN_DSC    
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
		// 
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("BSN_DSC"   , BSN_DSC   );
		param.put("SYS_NAME"  , SYS_NAME  );
		param.put("CERT_NAME" , CERT_NAME );
		param.put("CERT_TYPE" , CERT_TYPE );
		param.put("SSL_URL"   , SSL_URL   );
		param.put("CN"        , CN        );
		param.put("CERT_PATH" , CERT_PATH );
		param.put("NOT_BEFORE", NOT_BEFORE);
		param.put("NOT_AFTER" , NOT_AFTER );
		param.put("HOST_NAME" , HOST_NAME );
		param.put("IP_ADDRESS", IP_ADDRESS);
		param.put("RMK"       , RMK       );
		param.put("FS_RGM"    , FS_RGM);
		param.put("LS_CHGM"   , LS_CHGM);
		
		return getSqlSession().insert("certInfoDao.deleteCertInfo", param);
	}



}
