package com.esum.appetizer.util;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateUtils;

import com.esum.appetizer.exception.AppetizerException;

public class DateUtil {
	public static final String DATEFORM = "yyyyMMddHHmmss";

	private static List<String> list20Min = null;
	
	private static void make20MinList() {
		list20Min = new ArrayList<String>();
		Date sDay = DateUtil.convertStringToTimestamp("201501010700","yyyyMMddHHmm");
		Date eDay =  DateUtil.convertStringToTimestamp("201501011540","yyyyMMddHHmm");
		while(true) {
			if(sDay.after(eDay)) {
				break;
			}
			list20Min.add(DateUtil.convertDateToString("HH:mm", sDay));
			sDay = DateUtils.addMinutes(sDay, 20);
		}
	}
	public static List<String> getCurrent20MinList(String searchDate) {
		if(list20Min == null) {
			make20MinList();
		}
		
		if(DateUtil.convertStringToTimestamp(searchDate,"yyyyMMdd").before(DateUtil.getDayStartTime(new Date()))) {
			return new ArrayList<String>();
		} else if (DateUtil.convertStringToTimestamp(searchDate,"yyyyMMdd").after(DateUtil.getDayStartTime(new Date()))) {
			return list20Min;
		} else {
			Calendar cal =Calendar.getInstance();
			int hh = cal.get(Calendar.HOUR_OF_DAY);
			int mm = cal.get(Calendar.MINUTE);
			String sc = "";
			if(0<mm&&mm<20) {
				sc = hh+":20";
			} else if(20<mm&&mm<40) {
				sc = hh+":40";
			} else {
				sc = hh+1+":00";
			}
			
			if(list20Min.indexOf(sc) == -1) {
				return new ArrayList<String>();
			} else {
				return list20Min.subList(list20Min.indexOf(sc), list20Min.size());	
			}
		}
	}
	
	public static Date getCurrentDate() {
		return new GregorianCalendar().getTime();
	}

	public static String getFirstDayOfTheMonth(String type) {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DAY_OF_MONTH, 1);
		return convertDateToString(type, cal.getTime());
	}

	public static String getCurrentDate(String type) {
		return convertDateToString(type, DateUtil.getCurrentDate());
	}

	public static String convertDateToString(String type, java.util.Date date) {
		return new SimpleDateFormat(type, Locale.getDefault()).format(date);
	}

	public static java.util.Date convertGMTtoSystemTimeZone(
			java.util.Date orgTime) {
		return convertGMTtoUserTimeZone(orgTime, TimeZone.getDefault());
	}

	public static java.util.Date convertGMTtoUserTimeZone(java.util.Date orgTime, TimeZone tz) {
		if (tz == null) {
			return orgTime;
		} else if (orgTime == null) {
			return null;
		} else {
			java.util.Date convertDate = new java.util.Date();
			convertDate.setTime(orgTime.getTime() + tz.getRawOffset() + tz.getDSTSavings());
			return convertDate;
		}
	}

	public static Timestamp convertStringToTimestamp(String date) {
		return convertStringToTimestamp(date, DATEFORM);
	}

	public static String getYYYYMMDD(String date) {
		return convertDateToString("yyyy.MM.dd", convertStringToTimestamp(date));
	}

	public static String getHHMMSS(String date) {
		return convertDateToString("HH:mm:ss", convertStringToTimestamp(date));
	}

	public static String getHHMM(String date) {
		return convertDateToString("HH:mm", convertStringToTimestamp(date));
	}

	public static boolean isAfterAndEquals(java.util.Date beforeDate,
			java.util.Date afterDate) {
		boolean UpOrIn = false;
		if (beforeDate != null
				&& afterDate != null
				&& (beforeDate.after(afterDate) || beforeDate.equals(afterDate))) {

			UpOrIn = true;
		}
		return UpOrIn;
	}

	public static double getOffsetHour(TimeZone tz) {
		return (tz.getRawOffset() + tz.getDSTSavings()) / (1000 * 60 * 60);
	}

	public static Timestamp getTimestamp(java.util.Date date) {
		return new Timestamp(date.getTime());
	}

	public static Date getGMTCurrentDate() {
		Calendar calendar = new GregorianCalendar();
		Date currentDate = new Date();
		currentDate.setTime(currentDate.getTime()
				- calendar.get(Calendar.ZONE_OFFSET));

		return currentDate;
	}

	public static java.util.Date getDayStartTime(long now) {
		return getDayStartTime(new Date(now));
	}
	public static java.util.Date getDayEndTime(long now) {
		return getDayEndTime(new Date(now));
	}

	public static java.util.Date getDayStartTime(String date, String dateType) {
		Timestamp time = convertStringToTimestamp(date, dateType);
		return getDayStartTime(time);
	}

	public static java.util.Date getDayStartTime(String date) {
		Timestamp time = convertStringToTimestamp(date);
		return getDayStartTime(time);
	}

	public static java.util.Date getDayEndTime(String date, String dateType) {
		Timestamp time = convertStringToTimestamp(date, dateType);
		return getDayEndTime(time);
	}

	public static java.util.Date getDayEndTime(String date) {
		Timestamp time = convertStringToTimestamp(date);
		return getDayEndTime(time);
	}

	public static Timestamp convertStringToTimestamp(String date, String dateForm) {
		DateFormat format = new SimpleDateFormat(dateForm, Locale.getDefault());
		try {
			return new Timestamp(format.parse(date).getTime());
		} catch (ParseException e) {
			return null;
		}
	}

	public static java.util.Date getDayStartTime(java.util.Date now) {
		Calendar fromDay = new GregorianCalendar();
		fromDay.setTime(now);
		fromDay.set(Calendar.HOUR_OF_DAY, 0);
		fromDay.set(Calendar.MINUTE, 0);
		fromDay.set(Calendar.SECOND, 0);
		fromDay.set(Calendar.MILLISECOND, 0);
		return fromDay.getTime();
	}

	public static java.util.Date getDayEndTime(java.util.Date now) {
		Calendar fromDay = new GregorianCalendar();
		fromDay.setTime(now);
		fromDay.set(Calendar.HOUR_OF_DAY, 23);
		fromDay.set(Calendar.MINUTE, 59);
		fromDay.set(Calendar.SECOND, 59);
		fromDay.set(Calendar.MILLISECOND, 999);
		return fromDay.getTime();
	}

	public static String[] getYearList(int offset){
		String[] results = new String[offset];
		Calendar cal = new GregorianCalendar();
		int curYear = cal.get(Calendar.YEAR);
		for(int i = 0; i < offset; i++){
			results[i] = Integer.toString(curYear--);
		}
		return results;
	}

	//오늘기준 ?일전 날짜
	public static String getPreDate(int day){

		DateFormat df = new SimpleDateFormat("yyyyMMdd", Locale.getDefault());
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.DATE, -day);
		return df.format(cal.getTime());	    
	}

	//오늘기준 지난주 월요일 ~ 일요일
	public static List<String> getPreWeek(){

		DateFormat df = new SimpleDateFormat("yyyyMMdd", Locale.getDefault());
		Calendar cal = Calendar.getInstance();
		List<String> dayList = new ArrayList<String>();

		while(cal.get(Calendar.DAY_OF_WEEK) != 1){ //시작 일요일
			cal.add(Calendar.DATE, -1);
		}
		dayList.add(df.format(cal.getTime()));
		while(cal.get(Calendar.DAY_OF_WEEK) != 2){ //종료 월요일
			cal.add(Calendar.DATE, -1);
			dayList.add(df.format(cal.getTime()));
		}
		Collections.reverse(dayList);
		return dayList;
	}	

	//현월 포함(true),제외(false) 이전월(dateCnt만큼) 
	public static List<String> getPreMonth(int _dateCnt, boolean _current){ 
		
		int dateCnt = _dateCnt; 
		boolean current = _current;		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM", Locale.getDefault());
		List<String> dataList = new ArrayList<String>();
		int _i=0;
		if(current){
			_i= -1;
			dateCnt--;
		}
		for(int i = dateCnt ; i > _i ; i--){
			Calendar cal = Calendar.getInstance();
			cal.add(Calendar.MONTH, i*-1);
			String ymd = sdf.format(cal.getTime());
			dataList.add(ymd);
		}
		return dataList;
	}

	//해당 포맷으로 리턴
	public static String getDateFormat(Object date, String format){

		SimpleDateFormat sdf = new SimpleDateFormat(format, Locale.getDefault());
		String ymd = "";

		if(date instanceof Date){
			Date d = (Date)date;
			ymd = sdf.format(d);

		}else if(date instanceof Calendar){
			Calendar d = (Calendar)date;
			ymd = sdf.format(d.getTime());

		}else if(date instanceof String){			
			if(StringUtils.isEmpty((String)date)){
				return "";
			}
			String _date = date.toString().replaceAll("-", "").replaceAll("/", "");
			String _format = "";

			if(_date.length() == 6) _format="yyyyMM";
			else if(_date.length() == 8) _format="yyyyMMdd";

			SimpleDateFormat _sdf = new SimpleDateFormat(_format, Locale.getDefault());
			Date d = null;
			try {
				d = _sdf.parse(_date);
			} catch (ParseException e) {
				throw new AppetizerException("error.message.DateUtil.getDateFormat");
			}
			ymd = sdf.format(d);			
		}

		return ymd;		
	}

	//저번달 년월
	public static String getPreMonth(String sDate, String returnFormat){
		String date = sDate;

		if(date.length()==6) date += "01";
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd", Locale.getDefault());
		try {
			cal.setTime(sdf.parse(date));
		} catch (ParseException e) {
			throw new AppetizerException("error.message.DateUtil.getDateFormat");
		}
		cal.add(Calendar.MONTH, -1);
		sdf = new SimpleDateFormat(returnFormat, Locale.getDefault());
		return sdf.format(cal.getTime());
	}

	//주차 포맷 변경
	public static List<Map<String, Object>> getWeeksText(List<Map<String, Object>> list){

		if(list == null || list.size() ==0){
			throw new AppetizerException("error.message.DateUtil.getWeeksText");
		}		
		for(Map<String, Object> map : list){
			String code = (String)map.get("SQWW");
			String mm = (String)map.get("MM");
			String turn = (String)map.get("TURN");
			String mm_main = code.substring(0,4)+"년"+code.substring(4,6)+"주차";
			String mm_sub = " ("+mm+"월"+turn+"주차)";
			String name = mm_main+mm_sub;						 
			map.put("CODE", code);
			map.put("NAME", name);
		}
		return list;
	}
	/**현재 날짜의 1년기간*/
	public static String getLastYear(){


		String today = getCurrentDate("yyyyMMdd");		
		Calendar cal = Calendar.getInstance();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd", Locale.getDefault());
		try {
			cal.setTime(sdf.parse(today));
		} catch (ParseException e) {
			throw new AppetizerException("error.message.DateUtil.getDateFormat");
		}
		cal.add(Calendar.YEAR, -1);
		sdf = new SimpleDateFormat("yyyyMM", Locale.getDefault());		
		
		return getPreMonth(sdf.format(cal.getTime()),"yyyyMM");
	}
	
	/**특정 두날짜사이의 차이*/
	public static long getDifferDate(String fromDate,String toDate){
		
		try {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd",Locale.getDefault());
			Date beginDate = formatter.parse(fromDate);
			Date endDate = formatter.parse(toDate);
			long diff = endDate.getTime() - beginDate.getTime();
			long diffDays = diff / (24 * 60 * 60 * 1000);

			return diffDays;
		} catch (ParseException e) {
			throw new AppetizerException("error.message.DateUtil.getDateFormat");
		}
	}
}
