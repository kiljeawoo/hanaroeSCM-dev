package com.nh.escm.bt.rq.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.bt.rq.dao.CsltRqSendDAO;
import com.nh.escm.pt.usrinf.dao.MbEntDAO;
import com.nh.escm.util.SeqGenUtil;

/**
 * 계약상담 문자전송
 */
@Service
public class CsltRqSendService extends AbstractService {
	
	@Autowired
	private CsltRqSendDAO csltRqSendDAO;

	@Autowired
	private MbEntDAO mbEntDAO;
	
	/**
	 * [배치처리] 문자전송 대상 구하기
	 * 
	 * @param type
	 * @return
	 */
	public List<Map<String, Object>> retrieveCsltRqSendList(int type) {
		
		return csltRqSendDAO.retrieveCsltRqSendList(type);
	}
	
	/**
	 * MMS 문자전송
	 * 
	 * @param CSLT_RQ_NO	상담신청번호
	 * @param TINM			제목
	 * @param CNTN			내용
	 * @param DEST_NAME		수신자
	 * @param DEST_HP		수신번호 (받는 사람)
	 */
	public void sendMms(String CSLT_RQ_NO, String TINM, String CNTN, String DEST_NAME, String DEST_HP) {
		
		int SQNO = 0; // SMS고유번호를 저장하지 않는다.
		String CALLBACK = null; // 계약상담용 CALLBACK 기본값 사용
		
		sendMms(CSLT_RQ_NO, SQNO, TINM, CNTN, DEST_NAME, DEST_HP, CALLBACK);
	}
	
	/**
	 * MMS 문자전송
	 * 
	 * @param CSLT_RQ_NO	상담신청번호
	 * @param SQNO			이력일련번호
	 * @param TINM			제목
	 * @param CNTN			내용
	 * @param DEST_NAME		수신자
	 * @param DEST_HP		수신번호 (받는 사람)
	 * @param CALLBACK		회신번호 (보내는 사람)
	 */
	public void sendMms(String CSLT_RQ_NO, int SQNO, String TINM, String CNTN, String DEST_NAME, String DEST_HP, String CALLBACK) {
		
		if (DEST_HP != null) {
			DEST_HP = DEST_HP.replaceAll("-", "");
		}
		if (StringUtils.isEmpty(CALLBACK) || CALLBACK.replaceAll("-", "").length() < 9) {
			CALLBACK = Configurer.getProperty("cslt.sms.callback"); // 계약상담용 CALLBACK 기본값
		}
		if (CALLBACK != null) {
			CALLBACK = CALLBACK.replaceAll("-", "");
		}
		
		long SMS_NATV_NO = SeqGenUtil.getSmsSeq("MMS").longValue(); // SMS고유번호
		String USER_ID = Configurer.getProperty("cslt.sms.userId"); // 과금을 위한 계약상담용 USER_ID
		int SCHEDULE_TYPE = 0;
		
		String NOW_DATE = DateUtil.getCurrentDate("yyyyMMddHHmmss");
		String SEND_DATE = DateUtil.getCurrentDate("yyyyMMddHHmmss");
		String DEST_TYPE = "0";
		String DEST_COUNT = "0";
		String DEST_INFO = DEST_NAME + "^" + DEST_HP;
		
		int SEND_STATUS = 0;
		int SEND_COUNT = 0;
		int SEND_RESULT = 0;
		int CONTENT_COUNT = 0;
		int MSG_TYPE = 0;
		
		mbEntDAO.insertMmsSend(SMS_NATV_NO, USER_ID, SCHEDULE_TYPE,
				TINM, CNTN, NOW_DATE, SEND_DATE, DEST_TYPE, DEST_COUNT, DEST_INFO,
				SEND_STATUS, SEND_COUNT, SEND_RESULT, CALLBACK, CONTENT_COUNT, MSG_TYPE);
		
		// 이력수정 (SMS고유번호 저장)
		if (SQNO > 0) {
			csltRqSendDAO.updateCtrCsltNtc(CSLT_RQ_NO, SQNO, SMS_NATV_NO, "system");
		}
	}
	
	public List<Map<String, Object>> retrieveManagerInfoList() {
		
		return csltRqSendDAO.retrieveManagerInfoList();
	}
	
	public String retrieveBusinessDay(String BASE_DT, int COUNT) {
		try {
			String BUSINESS_DT = csltRqSendDAO.retrieveBusinessDay(BASE_DT, COUNT);
			if (BUSINESS_DT == null) {
				throw new AppetizerException("영업일을 구할 수 없습니다. (" + BASE_DT + "," + COUNT + ")");
			}
			return BUSINESS_DT;
		} catch (EmptyResultDataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("영업일을 구할 수 없습니다. (" + BASE_DT + "," + COUNT + ")");
		}
	}


	/*
	 * 업무시간 여부 체크: Y/N
	 */
	public String isBusinessTime(int currentHour) {

		String isBusinessTime =  "N";

		if(currentHour > 8 && currentHour < 18){
			isBusinessTime = "Y";
		}else{
			isBusinessTime = "N";
		}

		return isBusinessTime;
	}
	
}
