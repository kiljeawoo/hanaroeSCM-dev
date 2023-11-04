package com.esum.appetizer.util;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.exception.AppetizerException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtil {
	
	private static final Log logger = LogFactory.getLog(JsonUtil.class);
	
	/**
	 * JSON 문자열을 Value Object 로 변환한다.
	 * 
	 * @param str
	 * @param objType
	 * @return
	 */
	public static <T> T toObject(String str, Class<T> objType) {
		if (str == null || str.length() == 0) {
			return null;
		}
		
		
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.readValue(str, objType);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * Value Object 를 JSON 문자열로 변환한다.
	 * 
	 * @param obj
	 * @return
	 */
	public static String toString(Object obj) {
		if (obj == null) {
			return null;
		}
		
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.writeValueAsString(obj);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
}
