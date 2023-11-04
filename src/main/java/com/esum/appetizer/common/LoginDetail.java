package com.esum.appetizer.common;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class LoginDetail implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
	private String username;
	private String password;
	private Collection<GrantedAuthority> authorities;
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public void addAuthority(String authority) {
		if (authority != null && authority.length() > 0) {
			if (this.authorities == null) {
				this.authorities = new ArrayList<GrantedAuthority>();
			}
			
			this.authorities.add(new SimpleGrantedAuthority(authority));
		}
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}
	
	@Override
	public String getPassword() {
		return password;
	}
	
	@Override
	public String getUsername() {
		return username;
	}
	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	@Override
	public boolean isEnabled() {
		return true;
	}
	
	/* 
	 * Spring Security 의 동시세션 제어 기능을 위해, hashCode() 와 equals() 를 오버라이딩해야 한다.
	 *   - session-management 의 concurrency-control 을 사용할 때 필요함.
	 */
	public int hashCode() {
		return getUsername().hashCode();
	}
	public boolean equals(Object obj) {
		return getUsername().equals(((UserDetails) obj).getUsername()) ;
	}
	
}
