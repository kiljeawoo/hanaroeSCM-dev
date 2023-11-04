package com.nh.escm.common.message.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 고객의 핸디폰으로  PUSH / SMS을 보내기위한 객체
 * @author YunChang.Lee
 *
 */
public class TB_PUSH_MSGVO implements Serializable {

	private static final long serialVersionUID = 20150715L;
	/**
	 * 메시지 아이디
	 */
	private long MESSAGE_ID;
	/**
	 * 사용자아이디(회원ID)
	 */
	private String MB_ID;
	private String USR_HP;
	
	public enum MessageSendingType {
		PUSH, SMS, MMS, FMS
	}

	private MessageSendingType SEND_TP;

	private MessageSendingType SENT_TP;
	
	public enum MessageStatusType {
		ERROR, SENT, WAIT
	}

	private MessageStatusType STATUS;

	private String SUBJECT;
	/**
	 * 메시지 템플릿을 사용하는 경우 템플릿 Key, 아닌경우는 텍스트
	 */
	private String MSG;

	private Date INPUT_DTM;
	private Date SEND_DTM;
	private String ATTACH_URL;
	
	public long getMESSAGE_ID() {
		return MESSAGE_ID;
	}
	public void setMESSAGE_ID(long mESSAGE_ID) {
		MESSAGE_ID = mESSAGE_ID;
	}
	public String getMB_ID() {
		return MB_ID;
	}
	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}
	public String getUSR_HP() {
		return USR_HP;
	}
	public void setUSR_HP(String uSR_HP) {
		USR_HP = uSR_HP;
	}
	public MessageSendingType getSEND_TP() {
		return SEND_TP;
	}
	public void setSEND_TP(MessageSendingType sEND_TP) {
		SEND_TP = sEND_TP;
	}
	public MessageSendingType getSENT_TP() {
		return SENT_TP;
	}
	public void setSENT_TP(MessageSendingType sENT_TP) {
		SENT_TP = sENT_TP;
	}
	public MessageStatusType getSTATUS() {
		return STATUS;
	}
	public void setSTATUS(MessageStatusType sTATUS) {
		STATUS = sTATUS;
	}
	public String getSUBJECT() {
		return SUBJECT;
	}
	public void setSUBJECT(String sUBJECT) {
		SUBJECT = sUBJECT;
	}
	public String getMSG() {
		return MSG;
	}
	public void setMSG(String mSG) {
		MSG = mSG;
	}
	public Date getINPUT_DTM() {
		return INPUT_DTM;
	}
	public void setINPUT_DTM(Date iNPUT_DTM) {
		INPUT_DTM = iNPUT_DTM;
	}
	public Date getSEND_DTM() {
		return SEND_DTM;
	}
	public void setSEND_DTM(Date sEND_DTM) {
		SEND_DTM = sEND_DTM;
	}
	public String getATTACH_URL() {
		return ATTACH_URL;
	}
	public void setATTACH_URL(String aTTACH_URL) {
		ATTACH_URL = aTTACH_URL;
	}

}
