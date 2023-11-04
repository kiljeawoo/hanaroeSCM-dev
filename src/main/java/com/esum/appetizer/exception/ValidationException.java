package com.esum.appetizer.exception;

public class ValidationException extends Exception {

	private static final long serialVersionUID = 201150825L;

	public ValidationException(String message) {
		super(message);
	}
	
	public ValidationException(Throwable t) {
		super(t);
	}
	
}
