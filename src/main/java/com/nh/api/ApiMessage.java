package com.nh.api;

import java.io.InputStream;

public interface ApiMessage {
	
	public static String DEFAULT_ENCODING = "EUC-KR";
	
	public static final String SUCCESS_CODE = "0000";
	public static final String ERROR_CODE = "9999"; // processing error.
	
	public String getId();
	
	public void marshal(InputStream in) throws ApiException;
	
	public String unmarshal() throws ApiException;
	
}
