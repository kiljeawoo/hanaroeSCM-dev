package com.esum.appetizer.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

/**
 * 전제조건
 * 
 * 1. 날짜저장
 *     - 날짜타입의 값은 항상 GMT+00:00 기준의 날짜를 사용해야 한다.
 *       ex) 자바의 객체(Date, Timestamp), DB의 데이터타입(DATE, TIMESTAMP, DATETIME) 
 * 2. 날짜출력
 *     - GMT+00:00 날짜에 TimeZone을 적용하여 필요한 날짜 문자열로 변환해야 한다.
 */
public class GMTUtil {
	
	public final static String GMT_TIMEZONE_ID = "GMT+00:00";
//	public final static String DEFAULT_PATTERN = "yyyy-MM-dd";
//	public final static String DEFAULT_PATTERN = "yyyy-MM-dd HH:mm:ss";
	
	private static int getTimeZoneOffset(Date serverDate) {
		Calendar c = Calendar.getInstance();
		c.setTime(serverDate);
		return c.get(Calendar.ZONE_OFFSET) + c.get(Calendar.DST_OFFSET);
	}
	
	private static long getCurrentTime() {
		Calendar c = Calendar.getInstance();
		return c.getTimeInMillis() - getTimeZoneOffset(c.getTime());
	}
	
	/**
	 * (GMT+00:00) 현재 날짜을 반환한다.
	 * @return current Date
	 */
	public static Date getCurrentDate() {
		return new Date(getCurrentTime());
	}
	
	/**
	 * 날짜 문자열을 (GMT+00:00) 날짜로 파싱한다.
	 * 
	 * @param dateStr		날짜 문자열
	 * @param pattern		날짜 문자열의 pattern
	 * @param timeZone		날짜 문자열의 timeZone
	 * @return
	 * @throws ParseException 
	 */
	public static Date parseDate(String dateStr, String pattern, String timeZone) throws ParseException {
		if (dateStr == null || dateStr.length() == 0) {
			return null;
		}
		if (pattern == null || pattern.length() == 0) {
			throw new IllegalArgumentException("invalid pattern[" + pattern + "]");
		}
		if (timeZone == null || timeZone.length() == 0) {
			throw new IllegalArgumentException("invalid timeZone[" + timeZone + "]");
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat(pattern, Locale.getDefault());
		sdf.setTimeZone(TimeZone.getTimeZone(timeZone));
		Date serverDate = sdf.parse(dateStr);
		
		return new Date(serverDate.getTime() - getTimeZoneOffset(serverDate));
	}
	
	/**
	 * (GMT+00:00) 날짜를 TimeZone에 맞는 날짜 문자열로 변환한다.
	 * 
	 * @param gmtDate		(GMT+00:00) 날짜
	 * @param pattern		변환할 날짜 문자열의 pattern
	 * @param timeZone		변환할 날짜 문자열의 timeZone
	 * @return
	 */
	public static String format(Date gmtDate, String pattern, String timeZone) {
		if (gmtDate == null) {
			return "";
		}
		if (pattern == null || pattern.length() == 0) {
			throw new IllegalArgumentException("invalid pattern[" + pattern + "]");
		}
		if (timeZone == null || timeZone.length() == 0) {
			throw new IllegalArgumentException("invalid timeZone[" + timeZone + "]");
		}
		
		// gmtDate를 serverDate로 만들 경우, ZONE_OFFSET 값을 더한 날짜로 getTimeZoneOffset()을 호출해야 한다.
		// getTimeZoneOffset()에 전달되는 날짜에 따라 DST_OFFSET 값이 달라 진다. 
		Date serverDate = new Date(gmtDate.getTime() + Calendar.getInstance().get(Calendar.ZONE_OFFSET));
		serverDate = new Date(gmtDate.getTime() + getTimeZoneOffset(serverDate));
		
		SimpleDateFormat sdf = new SimpleDateFormat(pattern, Locale.getDefault());
		sdf.setTimeZone(TimeZone.getTimeZone(timeZone));
		return sdf.format(serverDate);
	}
	
}
