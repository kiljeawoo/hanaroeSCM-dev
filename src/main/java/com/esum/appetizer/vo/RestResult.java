package com.esum.appetizer.vo;

import com.esum.appetizer.exception.ErrorCode;

public class RestResult {
	
	// head
	private ErrorCode code;
	private String message;
	// body
	private Object data;
	
	public RestResult(ErrorCode code) {
		this.code = code;
	}
	
	public RestResult(ErrorCode code, String message, Object data) {
		this.code = code;
		this.message = message;
		this.data = data;
	}
	
	public RestResult(ErrorCode code, String message) {
		this.code = code;
		this.message = message;
	}
	
	public ErrorCode getCode() {
		return code;
	}
	
	/*public void setCode(int code) {
		this.code = code;
	}*/
	
	public String getMessage() {
		return message;
	}
	
	/*public void setMessage(String message) {
		this.message = message;
	}*/
	
	public Object getData() {
		return data;
	}
	
	/*public void setData(Object data) {
		this.data = data;
	}*/
	
}
