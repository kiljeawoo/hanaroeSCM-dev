package com.nh.escm.common.scheduling.sms;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.FastDateFormat;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.bt.rq.service.CsltRqSendService;

/**
 * 계약상담 문자전송
 * 
 * - 영업일에 한하며, 휴일 입력내용은 최초 영업일에 문자전송
 */
public class CsltRqSmsSendingJob {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
	private CsltRqSendService csltRqSendService;
	
	/**
	 * 하루 한 번 실행 - "0 0 9 ? * MON-FRI"
	 */
	public void start_day() {
		logger.debug("CsltRqSmsSendingJob.start_day()");
		
		String currentServer = System.getProperty("SERVER");
		String mainServer = Configurer.getProperty("scheduling.main.server");
		
		logger.debug("Current Server:" + currentServer);
		logger.debug("Main Server:" + mainServer);
		
		if (currentServer != null && currentServer.equals(mainServer)) {
			doJob_day(); // Job 실행
		} else {
			logger.debug("This System is not Main Server. Do not run Scheduling.");
		}
	}
	
	/**
	 * 1분마다 실행 - "0 1-59 9-18 ? * MON-FRI"
	 */
	public void start_min() {
		logger.debug("CsltRqSmsSendingJob.start_min()");
		
		String currentServer = System.getProperty("SERVER");
		String mainServer = Configurer.getProperty("scheduling.main.server");
		
		logger.debug("Current Server:" + currentServer);
		logger.debug("Main Server:" + mainServer);
		
		if (currentServer != null && currentServer.equals(mainServer)) {
			doJob_min(); // Job 실행
		} else {
			logger.debug("This System is not Main Server. Do not run Scheduling.");
		}
	}
	
	/*
	 * 오늘이 영업일인지 여부
	 */
	private boolean isBusinessDay() {
		
		String CURRENT_DT = format(new Date(), "yyyyMMdd"); // 현재
		
		String BUSINESS_DT = null;
		try {
			BUSINESS_DT = csltRqSendService.retrieveBusinessDay(CURRENT_DT, 1); // 당일 영업일
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			return false;
		}
		
		return CURRENT_DT.equals(BUSINESS_DT); // 현재날짜와 당일 영업일이 같으면, 오늘은 영업일이다.
	}
	
	private String isBusinessTime() {
		
		String isBusinessTime = null;
		int currentHour = Integer.parseInt(DateUtil.getCurrentDate("HH"));
		
		try {
			
			isBusinessTime = csltRqSendService.isBusinessTime(currentHour);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			return "N";
		}
		
		return isBusinessTime; // 현재날짜와 당일 영업일이 같으면, 오늘은 영업일이다.
	}
	
	
	/**
	 * (1) 영업일 2일(익일) 내 담당MD 미배정 시, 매일 1건 발송
	 * (2) 영업일 3일 내 미처리 시, 매일 1건 발송
	 */
	private void doJob_day() {
		logger.info("!!Running... CsltRqSmsSendingJob.doJob_day()");
		
		if (!isBusinessDay()) { // 오늘이 영업일이 아니면, 작업을 중지한다.
			logger.info("!!Stop... CsltRqSmsSendingJob.doJob_day() - Not a business day.");
			return;
		}
		
		Date current = new Date(); // 현재
		
		// 상담관리자 목록
		List<Map<String, Object>> managerInfoList = csltRqSendService.retrieveManagerInfoList();
		
		// (1) 영업일 2일(익일) 내 담당MD 미배정 시, 매일 1건 발송
		List<Map<String, Object>> list1 = csltRqSendService.retrieveCsltRqSendList(1);
		
		for (Map<String, Object> vo : list1) {
			
			String RQ_DT = (String) vo.get("RQ_DT"); // 신청일
			
			String deadline = null; // 담당MD 배정기일
			try {
				deadline = csltRqSendService.retrieveBusinessDay(RQ_DT, 2); // 신청일의 익일 (영업일 기준)
			} catch (Exception e) {
				logger.error(e.getMessage(), e);
				continue; // ignore
			}
			
			// 현재가 배정기일(23:59:59) 전이면 처리하지 않는다.
			if (current.compareTo(parse(deadline + "235959", "yyyyMMddHHmmss")) < 0) { 
				continue;
			}
			
			String CSLT_RQ_NO = (String) vo.get("CSLT_RQ_NO");
			String TINM = "<상담관리자 문자통보>";
			String CNTN = "- 신규계약상담 접수 : " + vo.get("CONM")
					+ "\n- 담당MD 배정기일 : " + format(deadline, "yyyyMMdd", "yyyy.MM.dd");
			
			for (Map<String, Object> info : managerInfoList) {
				String USR_NM = (String) info.get("USR_NM"); // 상담관리자
				String USR_MPNO = (String) info.get("USR_MPNO");
				
				// 상담관리자에게 문자전송
				csltRqSendService.sendMms(CSLT_RQ_NO, TINM, CNTN, USR_NM, USR_MPNO);
			}
		}
		
		// (2) 영업일 3일 내 미처리 시, 매일 1건 발송
		List<Map<String, Object>> list2 = csltRqSendService.retrieveCsltRqSendList(2);
		
		for (Map<String, Object> vo : list2) {
			
			String LSCHG_DTM = (String) vo.get("LSCHG_DTM"); // 담당자배정일
			
			String deadline = null; // 최초 답변기일
			try {
				deadline = csltRqSendService.retrieveBusinessDay(LSCHG_DTM, 3); // 담당자배정일부터 영업일 3일
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				continue; // ignore
			}
			
			// 현재가 답변기일(23:59:59) 전이면 처리하지 않는다.
			if (current.compareTo(parse(deadline + "235959", "yyyyMMddHHmmss")) < 0) { 
				continue;
			}
			
			String CSLT_RQ_NO = (String) vo.get("CSLT_RQ_NO");
			String TINM = "<담당MD 문자통보>";
			String CNTN = "신규계약상담에 대한 답변기일이 경과되었으니 신속히 상담진행하시기 바랍니다."
					+ "\n- 신청업체 : " + vo.get("CONM")
					+ "\n- 답변기일 : " + format(deadline, "yyyyMMdd", "yyyy.MM.dd");

			String BUYER_NM = (String) vo.get("BUYER_NM"); // 담당바이어
			String BUYER_MPNO = (String) vo.get("BUYER_MPNO");
			
			// 담당바이어에게 문자전송
			csltRqSendService.sendMms(CSLT_RQ_NO, TINM, CNTN, BUYER_NM, BUYER_MPNO);
		}
	}
	
	/**
	 * (3) 전송되지 않은 통보내역 발송
	 */
	private void doJob_min() {
		
		logger.info("!!Running... CsltRqSmsSendingJob.doJob_min()");
		
		String businessTimeYn = isBusinessTime();
		
		if (!isBusinessDay()) { // 오늘이 영업일이 아니면, 작업을 중지한다.
			logger.info("!!Stop... CsltRqSmsSendingJob.doJob_min() - Not a business day.");
			return;
		}
		
		// 영업시간 체크
		if(businessTimeYn.equals("N")){ // 영업시간이  아니면, 작업을 중지한다.
			logger.info("!!Stop... CsltRqSmsSendingJob.doJob_min() - Not a business hour.");
			return;
			
		}
		
		// logger.info("businessTimeYn " + businessTimeYn);
		
		// 상담관리자 목록
		List<Map<String, Object>> managerInfoList = csltRqSendService.retrieveManagerInfoList();
		
		// (3) 전송되지 않은 통보내역 발송
		List<Map<String, Object>> list3 = csltRqSendService.retrieveCsltRqSendList(3);
		
		for (Map<String, Object> vo : list3) {
			
			String CSLT_RQ_NO = (String) vo.get("CSLT_RQ_NO");
			int SQNO = (int) vo.get("SQNO");
			String TINM = (String) vo.get("TINM");
			String CNTN = (String) vo.get("CNTN");
			String USR_TPC = (String) vo.get("USR_TPC"); // 통보내역 작성자의 사용자유형 (01: 신청자)
			
			String RQ_DT = (String) vo.get("RQ_DT"); // 신청일
			String CONM = (String) vo.get("CONM"); // 신청업체
			String CHRRNM = (String) vo.get("CHRRNM"); // 신청자
			String CHRR_MPNO = (String) vo.get("CHRR_MPNO");
			String BUYER_NM = (String) vo.get("BUYER_NM"); // 담당바이어
			String BUYER_MPNO = (String) vo.get("BUYER_MPNO");
			
			if (SQNO == 1) { // 최초 신청
				
				String deadline = null; // 담당MD 배정기일
				try {
					deadline = csltRqSendService.retrieveBusinessDay(RQ_DT, 2); // 신청일의 익일 (영업일 기준)
				} catch (AppetizerException e) {
					logger.error(e.getMessage(), e);
					continue; // ignore
				}
				
				TINM = "<상담관리자 문자통보>";
				CNTN = "- 신규계약상담 접수 : " + CONM
						+ "\n- 담당MD 배정기일 : " + format(deadline, "yyyyMMdd", "yyyy.MM.dd");
				
				for (Map<String, Object> info : managerInfoList) {
					String USR_NM = (String) info.get("USR_NM"); // 상담관리자
					String USR_MPNO = (String) info.get("USR_MPNO");
					
					// 상담관리자에게 문자전송
					csltRqSendService.sendMms(CSLT_RQ_NO, SQNO, TINM, CNTN, USR_NM, USR_MPNO, null); // CALLBACK = null (계약상담용 CALLBACK 기본값 사용)
				}
			} else if ("01".equals(USR_TPC)) {
				// 신청자가 담당바이어에게 문자전송
				csltRqSendService.sendMms(CSLT_RQ_NO, SQNO, TINM, CNTN, BUYER_NM, BUYER_MPNO, CHRR_MPNO);
			} else {
				// 담당바이어가 신청자에게 문자전송
				csltRqSendService.sendMms(CSLT_RQ_NO, SQNO, TINM, CNTN, CHRRNM, CHRR_MPNO, BUYER_MPNO);
			}
		}
	}
	
	/**
	 * 날짜 문자열을 Date 객체로 변환한다.
	 * 
	 * @param sourceDate		날짜 문자열
	 * @param sourcePattern		날짜 문자열의 패턴
	 * @return Date 객체
	 */
	public static Date parse(String sourceDate, String sourcePattern) {
		if (StringUtils.isEmpty(sourceDate)) {
			return null;
		}
		try {
			DateFormat df = new SimpleDateFormat(sourcePattern);
			df.setTimeZone(TimeZone.getDefault());
			return df.parse(sourceDate);
		} catch (ParseException e) {
			String msg = "Can not parse date. (" + sourceDate + ", " + sourcePattern + ")";
			throw new AppetizerException(msg);
		}
	}
	
	/**
	 * Date 객체를 문자열로 변환한다.
	 * 
	 * @param sourceDate		Date 객체
	 * @param targetPattern		변환될 날짜 문자열의 패턴
	 * @return 변환된 날짜 문자열
	 */
	public static String format(Date sourceDate, String targetPattern) {
		if (sourceDate == null) {
			return null;
		}
		FastDateFormat df = FastDateFormat.getInstance(targetPattern, TimeZone.getDefault());
        return df.format(sourceDate);
	}
	
	/**
	 * 날짜 문자열을 다른 패턴의 문자열로 변환한다.
	 * 
	 * @param sourceDate		날짜 문자열
	 * @param sourcePattern		날짜 문자열의 패턴
	 * @param targetPattern		변환될 날짜 문자열의 패턴
	 * @return 변환된 날짜 문자열
	 */
	public static String format(String sourceDate, String sourcePattern, String targetPattern) {
		Date date = parse(sourceDate, sourcePattern);
        return format(date, targetPattern);
	}
	
}
