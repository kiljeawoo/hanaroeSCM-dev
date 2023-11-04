package com.nh.escm.common.message.vo;

import java.io.Serializable;

/**
 * 고객의 핸디폰으로 PUSH / SMS을 보내기위한 객체
 * 
 * @author YunChang.Lee
 *
 */
public class SDK_SMS_SENDVO implements Serializable {

	private static final long serialVersionUID = 20150715L;
	private long MSG_ID;
	private String USER_ID;
	private int SCHEDULE_TYPE = 0;
	private String SUBJECT;
	private String SMS_MSG;
	private String SEND_DATE;
	private String DEST_TYPE;
	private String DEST_COUNT;
	private String DEST_INFO;
	private int SEND_STATUS;
	private int SEND_COUNT;
	private int SEND_RESULT;
	private String CALLBACK;
	
	public long getMSG_ID() {
		return MSG_ID;
	}
	public void setMSG_ID(long mSG_ID) {
		MSG_ID = mSG_ID;
	}
	public String getUSER_ID() {
		return USER_ID;
	}
	public void setUSER_ID(String uSER_ID) {
		USER_ID = uSER_ID;
	}
	public int getSCHEDULE_TYPE() {
		return SCHEDULE_TYPE;
	}
	public void setSCHEDULE_TYPE(int sCHEDULE_TYPE) {
		SCHEDULE_TYPE = sCHEDULE_TYPE;
	}
	public String getSUBJECT() {
		return SUBJECT;
	}
	public void setSUBJECT(String sUBJECT) {
		SUBJECT = sUBJECT;
	}
	public String getSMS_MSG() {
		return SMS_MSG;
	}
	public void setSMS_MSG(String sMS_MSG) {
		SMS_MSG = sMS_MSG;
	}
	public String getSEND_DATE() {
		return SEND_DATE;
	}
	public void setSEND_DATE(String sEND_DATE) {
		SEND_DATE = sEND_DATE;
	}
	public String getDEST_TYPE() {
		return DEST_TYPE;
	}
	public void setDEST_TYPE(String dEST_TYPE) {
		DEST_TYPE = dEST_TYPE;
	}
	public String getDEST_COUNT() {
		return DEST_COUNT;
	}
	public void setDEST_COUNT(String dEST_COUNT) {
		DEST_COUNT = dEST_COUNT;
	}
	public String getDEST_INFO() {
		return DEST_INFO;
	}
	public void setDEST_INFO(String dEST_INFO) {
		DEST_INFO = dEST_INFO;
	}
	public int getSEND_STATUS() {
		return SEND_STATUS;
	}
	public void setSEND_STATUS(int sEND_STATUS) {
		SEND_STATUS = sEND_STATUS;
	}
	public int getSEND_COUNT() {
		return SEND_COUNT;
	}
	public void setSEND_COUNT(int sEND_COUNT) {
		SEND_COUNT = sEND_COUNT;
	}
	public int getSEND_RESULT() {
		return SEND_RESULT;
	}
	public void setSEND_RESULT(int sEND_RESULT) {
		SEND_RESULT = sEND_RESULT;
	}
	public String getCALLBACK() {
		return CALLBACK;
	}
	public void setCALLBACK(String cALLBACK) {
		CALLBACK = cALLBACK;
	}

}
