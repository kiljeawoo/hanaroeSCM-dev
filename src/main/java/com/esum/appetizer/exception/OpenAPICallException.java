package com.esum.appetizer.exception;

public class OpenAPICallException extends AppetizerException {

	private static final long serialVersionUID = 20150608L;
    private int errorCode;
	private String response;
	
	public OpenAPICallException(int errorCode, String message, String response) {
		super(message);
		this.errorCode = errorCode;
		this.response = response;
	}
	
	public OpenAPICallException(int errorCode, String response, Throwable cause) {
		super(cause);
		this.errorCode = errorCode;
		this.response = response;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
}
