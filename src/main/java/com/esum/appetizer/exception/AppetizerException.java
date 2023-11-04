package com.esum.appetizer.exception;


/**
 * 최상위 Exception.
 */
public class AppetizerException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	private ErrorCode code = ErrorCode.FAILURE;
	private String errorMsg;
	
	/*
	private static MessageSource messageSource;
	
	public void setMessageSource(MessageSource messageSource) {
		AppetizerException.messageSource = messageSource;
	}
	*/
	
	public AppetizerException() {
		super();
	}
	
	public AppetizerException(Throwable cause) {
		super(cause);
		this.errorMsg = cause.getMessage();
	}
	
	public AppetizerException(ErrorCode code, String message) {
		super(message);
		this.code = code;
	}
	
	public AppetizerException(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	
	public AppetizerException(ErrorCode code, Throwable cause) {
		super(cause);
		this.code = code;
	}
	
	public AppetizerException(ErrorCode code, String message, Throwable cause) {
		super(message, cause);
		this.code = code;
	}
	
	public ErrorCode getCode() {
		return code;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	@Override
	public String getMessage() {
		return errorMsg;
	}
}
