package com.esum.appetizer.exception;

public class NotSupportedException extends Exception {

	private static final long serialVersionUID = 201150825L;

	public NotSupportedException(String message) {
		super(message);
	}
	
	public NotSupportedException(Throwable t) {
		super(t);
	}
	
}
