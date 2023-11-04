package com.esum.appetizer.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.codec.Base64;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.util.Assert;

public class SsoAuthenticationFilter extends AbstractAuthenticationProcessingFilter {
	
	private String usernameParameter;
	private String passwordParameter;
	
	public SsoAuthenticationFilter(String loginProcessingUrl, String usernameParameter, String passwordParameter) {
		super(loginProcessingUrl);
		
		Assert.hasText(usernameParameter, "Username parameter must not be empty or null");
		Assert.hasText(passwordParameter, "Password parameter must not be empty or null");
		
		this.usernameParameter = usernameParameter;
		this.passwordParameter = passwordParameter;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
		String username = request.getParameter(usernameParameter);
		String password = request.getParameter(passwordParameter);
		
		if (username == null) {
			username = "";
		}
		if (password == null) {
			password = "";
		}
		
		username = username.trim();
		password = new String(Base64.decode(password.getBytes()));
		
		UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
		
		// Allow subclasses to set the "details" property
		setDetails(request, authRequest);
		
		return this.getAuthenticationManager().authenticate(authRequest);
	}
	
    protected void setDetails(HttpServletRequest request, UsernamePasswordAuthenticationToken authRequest) {
        authRequest.setDetails(authenticationDetailsSource.buildDetails(request));
	}
	
}
