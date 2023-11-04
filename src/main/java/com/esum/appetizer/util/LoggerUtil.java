package com.esum.appetizer.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerUtil {
	
	public static Logger getServerLogger(Object o) {
		return LoggerFactory.getLogger(o.getClass().getName());		
	}

	public static Logger getServerLogger(Class<?> c) {
		return LoggerFactory.getLogger(c.getName());		
	}
}
