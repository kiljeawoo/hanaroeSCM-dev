package com.esum.appetizer.exception;

/**
 * Error Code Definition.
 */
public enum ErrorCode {
	
	SUCCESS(0),
	FAILURE_COMMON(1000),
	FAILURE_SECURITY(2000),
	FAILURE(999999),
	
	// COMMON
	NOT_FOUND_DATA(1001),
	
	// SESSION
	SESSION_BAD_CREDENTIALS(2001),
	SESSION_INVALID(2002),
	SESSION_NO_AUTHORITY(2003),
	SESSION_MAX_EXCEEDED(2004);
	
	public final int value;
	private ErrorCode(int value) {
		this.value = value;
	}
}

