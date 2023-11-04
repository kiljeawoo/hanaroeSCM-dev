package com.esum.appetizer.common;

import java.util.Locale;
import java.util.TimeZone;

public class ClientHolder {
	
	private static final ThreadLocal<Locale> locale = new ThreadLocal<Locale>();
	private static final ThreadLocal<TimeZone> timeZone = new ThreadLocal<TimeZone>();
	private static final ThreadLocal<String> transYn = new ThreadLocal<String>(); // 관리자가 사용자전환으로 로그인했는지 여부 (Y: 사용자전환)
	
	public static Locale getLocale() {
		return (locale.get() != null) ? locale.get() : Locale.getDefault();
	}
	
	public static void setLocale(Locale locale) {
		ClientHolder.locale.set(locale);
	}
	
	public static TimeZone getTimeZone() {
		return (timeZone.get() != null) ? timeZone.get() : TimeZone.getDefault();
	}
	
	public static void setTimeZone(TimeZone timeZone) {
		ClientHolder.timeZone.set(timeZone);
	}

	public static String getTransYn() {
		return transYn.get();
	}
	
	public static void setTransYn(String transYn) {
		ClientHolder.transYn.set(transYn);
	}
	
}
