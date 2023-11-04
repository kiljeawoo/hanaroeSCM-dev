package com.nh.api;

import java.io.InputStream;

import com.esum.appetizer.util.DateUtil;

/**
 * 농협 API와 연계를 위한 HEADER 정보를 정의.(유통VAN --> 농협)
 */
public abstract class ApiRequest implements ApiMessage {

	private String ifTypeCode; //7->5 (인터페이스ID)
	private String sendDate = DateUtil.getCurrentDate("yyyyMMdd"); /*getCYMD()*/ // 8
	private String sendNum; // 7
	
	
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

	@Override
	public String getId() {
		return getIfTypeCode();
	}

	@Override
	public void marshal(InputStream in) throws ApiException {
		// NONE
	}

	@Override
	public String unmarshal() throws ApiException {
		return "";
	}

	public String toString() {
		StringBuffer buffer = new StringBuffer();
		buffer.append("IF_ID : "+ifTypeCode+"\n");
		buffer.append("SEND_DT : "+sendDate+"\n");
		buffer.append("SEND_NO : "+sendNum+"\n");
		
		return buffer.toString();
	}
}
