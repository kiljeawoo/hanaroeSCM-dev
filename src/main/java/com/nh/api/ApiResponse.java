package com.nh.api;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.Charset;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;

/**
 * API response returned by API call.
 */
public class ApiResponse implements ApiMessage {

	private String ifTypeCode = ""; //7->5
	private String sendDate = ""; //8
	private String sendNum = ""; //7

	private String responseCode=""; //4
	private String responseData=""; //200
	
	/** HTTP status code */
	private final int status;
	
	/** Outputs the response */
	private byte[] data;
	
	public ApiResponse(int status, byte[] data) {
		this.status = status;
		this.data = data;
	}
	
	public String getResponseCode() {
		return responseCode;
	}

	public void setResponseCode(String responseCode) {
		this.responseCode = responseCode;
	}

	public String getResponseData() {
		return responseData;
	}

	public void setResponseData(String responseData) {
		this.responseData = responseData;
	}
	
	public String getIfTypeCode() {
		return ifTypeCode;
	}

	public void setIfTypeCode(String ifTypeCode) {
		this.ifTypeCode = ifTypeCode;
	}

	public String getSendDate() {
		return sendDate;
	}

	public void setSendDate(String sendDate) {
		this.sendDate = sendDate;
	}

	public String getSendNum() {
		return sendNum;
	}

	public void setSendNum(String sendNum) {
		this.sendNum = sendNum;
	}

	public int getStatus() {
		return status;
	}
	
	public String getBody() {
		return (data == null) ? null : new String(data, Charset.forName(ApiMessage.DEFAULT_ENCODING));
	}
	
	public byte[] getBodyAsBytes() {
		return data;
	}
	
	public InputStream getBodyAsStream() {
		return (data == null) ? null : new ByteArrayInputStream(data);
	}
	
	public void setData(byte[] data) {
		this.data = data;
	}
	
	@Override
	public String getId() {
		return getIfTypeCode();
	}

	@Override
	public void marshal(InputStream in) throws ApiException {
		ByteArrayOutputStream out = null;
		try {
			out = new ByteArrayOutputStream();
			IOUtils.copy(in, out);
			this.data = out.toByteArray();
		} catch(Exception e){
			throw new ApiException(e.getMessage(), e);
		} finally {
			IOUtils.closeQuietly(out);
		}
	}
	
	// McaResponseMessage
	public void parsedMca(InputStream in) throws ApiException {
		// if type code
		this.ifTypeCode = Utils.readToString(in, 5).trim(); //7->5 (2023)
		
		// sendDate + sendNum
		this.sendDate = Utils.readToString(in, 8).trim();
		this.sendNum = Utils.readToString(in, 7).trim();
		
		this.responseCode = Utils.readToString(in, 4).trim();
		this.responseData = Utils.readToString(in, 200).trim();
	}

	@Override
	public String unmarshal() throws ApiException {
		StringBuffer buffer = new StringBuffer();
		
//		buffer.append(Utils.writeToString(ifTypeCode, 5)); //7->5 (2023)
//		buffer.append(Utils.writeToString(sendDate, 8));
//		buffer.append(Utils.writeToString(sendNum, 7));
//		
//		buffer.append(Utils.writeToString(responseCode, 4));
//		buffer.append(Utils.writeToString(responseData, 200));
//		
//		if (dummy.length() > 0)
//			buffer.append(dummy);
		
		return buffer.toString();
	}

	@Override
	public String toString() {
		
		StringBuffer buffer = new StringBuffer();
		buffer.append("IF_ID : "+ifTypeCode+"\n");
//		buffer.append("SEND_DT : "+sendDate+"\n");
//		buffer.append("SEND_NO : "+sendNum+"\n");
		buffer.append("RESPONSE_CODE : "+responseCode+"\n");
		buffer.append("RESPONSE_DATA : "+responseData+"\n");
		
		String dummy = getBody();
		if(StringUtils.isNotEmpty(dummy)) {
			buffer.append("RESULT : "+dummy+"\n");
		}
		
		return buffer.toString();
	}
}
