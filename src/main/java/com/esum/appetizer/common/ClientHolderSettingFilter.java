package com.esum.appetizer.common;

import java.io.IOException;
import java.util.Locale;
import java.util.TimeZone;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.LocaleUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.AppetizerConst;

/**
 * 1. 사용자 locale 값을 저장한다.
 *   - 세션에 locale 문자열을 저장한다.
 *   - ThreadLocal 변수에 locale 객체를 저장한다.
 * 
 * < 사용자 locale 사용법 >
 *   (1) JSTL
 *       <c:out value="${sessionScope.LOCALE_KEY}" /> or <c:out value="${LOCALE_KEY}" />
 *   (2) JAVA
 *       Locale locale = ClientHolder.getLocale();
 *       String localeStr = locale.toString(); // ko_KR, en_US, ja_JP
 * 
 * 2. 사용자 timeZone 값을 저장한다.
 */
public class ClientHolderSettingFilter implements Filter {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	private Locale getClientLocale(HttpServletRequest request) {
		String localeStr = request.getParameter(AppetizerConst.LOCALE_KEY.value); // 1. parameter
		if (StringUtils.isEmpty(localeStr)) {
			localeStr = (String) request.getSession().getAttribute(AppetizerConst.LOCALE_KEY.value); // 2. session
		}
		if (StringUtils.isEmpty(localeStr)) {
			localeStr = request.getLocale().toString(); // 3. default
		}
		
		Locale locale = null;
		try {
			locale = LocaleUtils.toLocale(localeStr);
		} catch (IllegalArgumentException e) {
			logger.error(e.getMessage());
			locale = request.getLocale();
		}
		return locale;
	}
	
	private String getClientTimeZone(HttpServletRequest request) {
		String timeZone = request.getParameter(AppetizerConst.TIMEZONE_KEY.value); // 1. parameter
		if (StringUtils.isEmpty(timeZone)) {
			timeZone = (String) request.getSession().getAttribute(AppetizerConst.TIMEZONE_KEY.value); // 2. session
		}
		if (StringUtils.isEmpty(timeZone)) {
			timeZone = TimeZone.getDefault().getID(); // 3. default
		}
		
		return timeZone;
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		logger.debug("Do not Use");
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		Locale locale = getClientLocale((HttpServletRequest) request);
		String timeZone = getClientTimeZone((HttpServletRequest) request);
		
		// session
		HttpSession session = ((HttpServletRequest) request).getSession();
		session.setAttribute(AppetizerConst.LOCALE_KEY.value, locale.toString());
		session.setAttribute(AppetizerConst.TIMEZONE_KEY.value, timeZone);
		
		// ThreadLocal
		ClientHolder.setLocale(locale);
		ClientHolder.setTimeZone(TimeZone.getTimeZone(timeZone));
		ClientHolder.setTransYn((String) session.getAttribute("TRANS_YN_KEY")); // 관리자가 사용자전환으로 로그인했는지 여부 (Y: 사용자전환)
		
		// Pass control on to the next filter
		chain.doFilter(request, response);
	}
	
	@Override
	public void destroy() {
		logger.debug("Do Not Use");
	}
	
}