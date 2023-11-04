package com.esum.appetizer.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.session.SessionAuthenticationException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.JsonUtil;
import com.esum.appetizer.vo.RestResult;
import com.nh.escm.service.UserService;
import com.nh.escm.vo.User;

public class LoginDetailsService implements UserDetailsService {
	
	private static final Log logger = LogFactory.getLog(LoginDetailsService.class);
	
	@Autowired
	private UserService userService;
	
	@Override
	public UserDetails loadUserByUsername(String username) {
		try {
			User user = userService.getUser(username);
			
			LoginDetail userDetails = new LoginDetail();
			
			userDetails.setUsername(user.getUserId());
			userDetails.setPassword(user.getPassword());
			userDetails.addAuthority(user.getAuthority());
			
			return userDetails;
		} catch (AppetizerException e) {
			throw e;
		} catch (Exception e) {
			throw new AppetizerException(e);
		}
	}
	
	public static class RestAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
		
		@Override
		public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
				Authentication authentication) throws IOException, ServletException {
			if (logger.isDebugEnabled()) {
				logger.debug("authentication success. (username: " + authentication.getName() + ")");
			}
			//System.out.println(((LoginDetail) authentication.getPrincipal()).getPassword());
			//System.out.println(authentication.getAuthorities());
			
			response.setContentType("application/json; charset=utf-8");
			response.getWriter().write(JsonUtil.toString(new RestResult(ErrorCode.SUCCESS)));
		}
		
	}
	
	public static class RestAuthenticationFailureHandler implements AuthenticationFailureHandler {
		
		@Autowired
		private MessageSource messageSource;
		
		@Override
		public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
				AuthenticationException exception) throws IOException, ServletException {
			ErrorCode code = ErrorCode.FAILURE;
			String message = exception.getMessage();
			
			if (exception.getCause() instanceof AppetizerException) {
				code = ((AppetizerException) exception.getCause()).getCode();
			} else if (exception instanceof BadCredentialsException) {
				code = ErrorCode.SESSION_BAD_CREDENTIALS;
			} else if (exception instanceof SessionAuthenticationException) {
				code = ErrorCode.SESSION_MAX_EXCEEDED;
			}
			
			if (code == ErrorCode.NOT_FOUND_DATA
					|| code == ErrorCode.SESSION_BAD_CREDENTIALS) {
				message = messageSource.getMessage("error.message.2001.badCredentials", null, ClientHolder.getLocale());
			} else if (code == ErrorCode.SESSION_MAX_EXCEEDED) {
				message = messageSource.getMessage("error.message.2004.maxExceeded", null, ClientHolder.getLocale()); // Maximum sessions of 1 for this principal exceeded
			} else {
				message = "unknown exception";
			}
			
			if (logger.isDebugEnabled()) {
				logger.debug("authentication failure. (code: " + code + ", message: " + message + ")");
			}
			
			response.setContentType("application/json; charset=utf-8");
			response.getWriter().write(JsonUtil.toString(new RestResult(code, message, null)));
		}
		
	}
	
	/**
	 * 인증 오류 발생시 실행되는 핸들러
	 *   - 유효하지 않은 세션 ID로 요청한 경우 ex) session timeout
	 *   - 인증되지 않은 세션으로 요청한 경우
	 * 
	 * (1) Rest 요청인 경우, 오류 코드와 메시지가 포함된 JSON 데이터를 반환한다.
	 * (2) View 요청인 경우, errorUrl 로 이동한다.
	 */
	public static class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {
		
		@Autowired
		private MessageSource messageSource;
		
		/**
		 * Rest 요청 URL 의 접두사 ex) /rest
		 */
		private String restPrefix;
		/**
		 * View 요청에 대한 인증 오류 발생시 이동할 URL
		 */
		private String errorUrl = "/";
		
		public void setRestPrefix(String restPrefix) {
			this.restPrefix = restPrefix;
		}
		public void setErrorUrl(String errorUrl) {
			this.errorUrl = errorUrl;
		}
		
		@Override
		public void commence(HttpServletRequest request, HttpServletResponse response,
				AuthenticationException exception) throws IOException, ServletException {
			// Rest 요청인 경우, JSON 데이터를 반환해야 한다.
			if (request.getServletPath().startsWith(restPrefix)) {
				String message = messageSource.getMessage("error.message.2002.invalidSession", null, ClientHolder.getLocale());
				response.setContentType("application/json; charset=utf-8");
				response.getWriter().write(JsonUtil.toString(new RestResult(ErrorCode.SESSION_INVALID, message, null)));
			} else {
				response.sendRedirect(request.getContextPath() + errorUrl);
			}
		}
		
	}
	
}
