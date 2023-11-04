package com.nh.escm.scm.delivery.validation;

import java.util.HashMap;

import java.util.Map;

/****************************************************************************************************** 
 * 
 * 2019.06.14 최영신
 * 유효성검증 결과 리포트 Report.java
 * 
 *****************************************************************************************************/

public class Report {
	
	private boolean isValid = false;
	private String status   = "";
	private String code  = "";
	private String message  = "";
	private int numCode  = 0;
	
	
	private Map<String, Object> resultMap = new HashMap<String, Object>();		
	
	
	public boolean isValid() {
		return isValid;
	}
	public void setValid(boolean isValid) {
		this.isValid = isValid;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public Map<String, Object> getResultMap() {
		return resultMap;
	}
	public void setResultMap(Map<String, Object> resultMap) {
		this.resultMap = resultMap;
	}
	
	public int getNumCode() {
		return numCode;
	}
	public void setNumCode(int numCode) {
		this.numCode = numCode;
	}
	
	

}
