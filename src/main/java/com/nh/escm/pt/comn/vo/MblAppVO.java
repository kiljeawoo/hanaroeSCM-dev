package com.nh.escm.pt.comn.vo;

/**
 * @author yoon
 * 모바일 앱 푸시
 */
public class MblAppVO {

	/* 앱정보 */
	private String APP_ID;
	private String APP_NAME;
	private String APP_PKG_NAME;
	private String API_KEY_A;
	private String API_KEY_I;

	/* 앱 기기 정보 */
	private String DVIC_ID;
	private String MODEL;
	private String OS_TYPE;
	private String OS_VER;
	private String TOKEN;

	/* 메시지 발송 이력 */
	private String MSG_ID;
	private String MSG_TYPE;
	private String MSG;
	private String TARGET;
	private String SEND_DATE;

	/* 앱 사용자 정보 */
	private String USER_ID;

	/* 기타 */
	private String FSRG_DTM;
	private String FS_RGM;
	private String LSCHG_DTM;
	private String LS_CHGM;
	private int start;
	private int end;

	public String getAPP_ID() {
		return APP_ID;
	}

	public void setAPP_ID(String aPP_ID) {
		APP_ID = aPP_ID;
	}

	public String getAPP_NAME() {
		return APP_NAME;
	}

	public void setAPP_NAME(String aPP_NAME) {
		APP_NAME = aPP_NAME;
	}

	public String getAPP_PKG_NAME() {
		return APP_PKG_NAME;
	}

	public void setAPP_PKG_NAME(String aPP_PKG_NAME) {
		APP_PKG_NAME = aPP_PKG_NAME;
	}

	public String getAPI_KEY_A() {
		return API_KEY_A;
	}

	public void setAPI_KEY_A(String aPI_KEY_A) {
		API_KEY_A = aPI_KEY_A;
	}

	public String getAPI_KEY_I() {
		return API_KEY_I;
	}

	public void setAPI_KEY_I(String aPI_KEY_I) {
		API_KEY_I = aPI_KEY_I;
	}

	public String getDVIC_ID() {
		return DVIC_ID;
	}

	public void setDVIC_ID(String dVIC_ID) {
		DVIC_ID = dVIC_ID;
	}

	public String getMODEL() {
		return MODEL;
	}

	public void setMODEL(String mODEL) {
		MODEL = mODEL;
	}

	public String getOS_TYPE() {
		return OS_TYPE;
	}

	public void setOS_TYPE(String oS_TYPE) {
		OS_TYPE = oS_TYPE;
	}

	public String getOS_VER() {
		return OS_VER;
	}

	public void setOS_VER(String oS_VER) {
		OS_VER = oS_VER;
	}

	public String getTOKEN() {
		return TOKEN;
	}

	public void setTOKEN(String tOKEN) {
		TOKEN = tOKEN;
	}

	public String getMSG_ID() {
		return MSG_ID;
	}

	public void setMSG_ID(String mSG_ID) {
		MSG_ID = mSG_ID;
	}

	public String getMSG_TYPE() {
		return MSG_TYPE;
	}

	public void setMSG_TYPE(String mSG_TYPE) {
		MSG_TYPE = mSG_TYPE;
	}

	public String getMSG() {
		return MSG;
	}

	public void setMSG(String mSG) {
		MSG = mSG;
	}

	public String getTARGET() {
		return TARGET;
	}

	public void setTARGET(String tARGET) {
		TARGET = tARGET;
	}

	public String getSEND_DATE() {
		return SEND_DATE;
	}

	public void setSEND_DATE(String sEND_DATE) {
		SEND_DATE = sEND_DATE;
	}

	public String getUSER_ID() {
		return USER_ID;
	}

	public void setUSER_ID(String uSER_ID) {
		USER_ID = uSER_ID;
	}

	public String getFSRG_DTM() {
		return FSRG_DTM;
	}

	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}

	public String getFS_RGM() {
		return FS_RGM;
	}

	public void setFS_RGM(String fS_RGM) {
		FS_RGM = fS_RGM;
	}

	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}

	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}

	public String getLS_CHGM() {
		return LS_CHGM;
	}

	public void setLS_CHGM(String lS_CHGM) {
		LS_CHGM = lS_CHGM;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}
}