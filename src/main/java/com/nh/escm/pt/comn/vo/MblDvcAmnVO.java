package com.nh.escm.pt.comn.vo;

import java.io.Serializable;

public class MblDvcAmnVO  implements Serializable {

	private static final long serialVersionUID = 182857165908383948L;
	
	private String APP_ID			;//앱 아이디
	private String USER_ID			;//사용자 아이디
	private String DVIC_ID			;//디바이스 아이디
	private String REG_TP			;//등록유형
	private String ATTR1			;//속성1
	private String ATTR2			;//속성2
	private String ATTR3			;//속성3
	private String REG_USER_ID		;//등록사용자아이디
	private String REG_DT			;//등록일시
	
	private String MB_ID			;//회원ID
	private String PUSH_STSC_A		;//푸시상태코드A
	private String PUSH_STSC_B		;//푸시상태코드B
	private String PUSH_STSC_C		;//푸시상태코드C
	private String PUSH_STSC_D		;//푸시상태코드D
	private String PUSH_STSC_E		;//푸시상태코드E
	private String PUSH_STSC_F		;//푸시상태코드F
	
	// 푸쉬 리스트용 
	private String MSG				; //푸쉬 메세지내용
	private String CREATE_TIME		; //푸쉬 생성시간
	private String MSG_TYPE			; //푸쉬 메세지 타입 (미발행세금계산서, 수주내역, 반품내역 등등)
	
	public String getAPP_ID() {
		return APP_ID;
	}
	public void setAPP_ID(String aPP_ID) {
		APP_ID = aPP_ID;
	}
	public String getUSER_ID() {
		return USER_ID;
	}
	public void setUSER_ID(String uSER_ID) {
		USER_ID = uSER_ID;
	}
	public String getDVIC_ID() {
		return DVIC_ID;
	}
	public void setDVIC_ID(String dVIC_ID) {
		DVIC_ID = dVIC_ID;
	}
	public String getREG_TP() {
		return REG_TP;
	}
	public void setREG_TP(String rEG_TP) {
		REG_TP = rEG_TP;
	}
	public String getATTR1() {
		return ATTR1;
	}
	public void setATTR1(String aTTR1) {
		ATTR1 = aTTR1;
	}
	public String getATTR2() {
		return ATTR2;
	}
	public void setATTR2(String aTTR2) {
		ATTR2 = aTTR2;
	}
	public String getATTR3() {
		return ATTR3;
	}
	public void setATTR3(String aTTR3) {
		ATTR3 = aTTR3;
	}
	public String getREG_USER_ID() {
		return REG_USER_ID;
	}
	public void setREG_USER_ID(String rEG_USER_ID) {
		REG_USER_ID = rEG_USER_ID;
	}
	public String getREG_DT() {
		return REG_DT;
	}
	public void setREG_DT(String rEG_DT) {
		REG_DT = rEG_DT;
	}
	public String getMB_ID() {
		return MB_ID;
	}
	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}
	public String getPUSH_STSC_A() {
		return PUSH_STSC_A;
	}
	public void setPUSH_STSC_A(String pUSH_STSC_A) {
		PUSH_STSC_A = pUSH_STSC_A;
	}
	public String getPUSH_STSC_B() {
		return PUSH_STSC_B;
	}
	public void setPUSH_STSC_B(String pUSH_STSC_B) {
		PUSH_STSC_B = pUSH_STSC_B;
	}
	public String getPUSH_STSC_C() {
		return PUSH_STSC_C;
	}
	public void setPUSH_STSC_C(String pUSH_STSC_C) {
		PUSH_STSC_C = pUSH_STSC_C;
	}
	public String getPUSH_STSC_D() {
		return PUSH_STSC_D;
	}
	public void setPUSH_STSC_D(String pUSH_STSC_D) {
		PUSH_STSC_D = pUSH_STSC_D;
	}
	public String getPUSH_STSC_E() {
		return PUSH_STSC_E;
	}
	public void setPUSH_STSC_E(String pUSH_STSC_E) {
		PUSH_STSC_E = pUSH_STSC_E;
	}
	public String getPUSH_STSC_F() {
		return PUSH_STSC_F;
	}
	public void setPUSH_STSC_F(String pUSH_STSC_F) {
		PUSH_STSC_F = pUSH_STSC_F;
	}
	public String getMSG() {
		return MSG;
	}
	public void setMSG(String mSG) {
		MSG = mSG;
	}
	public String getCREATE_TIME() {
		return CREATE_TIME;
	}
	public void setCREATE_TIME(String cREATE_TIME) {
		CREATE_TIME = cREATE_TIME;
	}
	public String getMSG_TYPE() {
		return MSG_TYPE;
	}
	public void setMSG_TYPE(String mSG_TYPE) {
		MSG_TYPE = mSG_TYPE;
	}

}
