package com.nh.escm.util;


import java.math.BigDecimal;
import java.util.Map;

import org.springframework.context.ApplicationContextAware;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.BeanUtil;
import com.nh.escm.common.dao.CodeDao;
import com.nh.escm.common.vo.SQLNames.PortalSequenceKeyName;

public abstract  class SeqGenUtil  implements ApplicationContextAware {
	

	
	public static String getSeq(String TABLE_NAME) {		
		CodeDao dao = BeanUtil.getBean(CodeDao.class);		
		
		Map<String, Object> result  = dao.getSequence(TABLE_NAME);						
		/*
		String strSeq =String.valueOf(result.get(PortalSequenceKeyName.SEQ.name()));
		
		int repeatCnt = 10 -strSeq.length();
	      
	      for(int i =0 ; i <repeatCnt; i++){
	    	  rtnStr = rtnStr+"0";
	      }
	      sequence =DateUtil.getCurrentDate("YYYY") + rtnStr+strSeq;*/
	      
	      
		 return (String) result.get(PortalSequenceKeyName.SEQ.name());
	}
	
	/**SMS 시퀀스조회
	 * */
	public static BigDecimal getSmsSeq(String TYPE) {
		try {			
			CodeDao dao = BeanUtil.getBean(CodeDao.class);
			Map<String, Object> result = dao.getSmsSequence(TYPE);		
			return (BigDecimal)result.get(PortalSequenceKeyName.SEQ.name());
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}		
	}
	
	/**MMS 시퀀스조회
	 * */
	public static BigDecimal getMmsSeq(String TYPE) {
		try {			
			CodeDao dao = BeanUtil.getBean(CodeDao.class);
			Map<String, Object> result = dao.getSmsSequence(TYPE);		
			return (BigDecimal)result.get(PortalSequenceKeyName.SEQ.name());
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}		
	}
	
	
	/**Email 시퀀스조회
	 * */
	public static BigDecimal getEmailSeq(String TYPE) {
		try {			
			CodeDao dao = BeanUtil.getBean(CodeDao.class);
			Map<String, Object> result = dao.getEmailSequence(TYPE);		
			return (BigDecimal)result.get(PortalSequenceKeyName.SEQ.name());
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}		
	}
	
	/**
	 * 가상계좌 시퀀스 조회
	 */
	public static String getVrAcSequence(String TYPE) {
		try {
			CodeDao dao = BeanUtil.getBean(CodeDao.class);
			Map<String, Object> result = dao.getVrAcSequence(TYPE);
			return (String)result.get("VR_ACNO");
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
 
}
