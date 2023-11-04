package com.nh.escm.pt.member.vo;

import java.io.Serializable;

public class MbAuthVO implements Serializable {

	private static final long serialVersionUID = 20170925L;

	/**
	 * 회원ID
	 */
	private String MB_ID;
	/**
	 * 사용자명
	 */
	private String USR_NM;
	/**
	 * 메뉴ID
	 */
	private String MENU_ID;
	/**
	 * 메뉴이름
	 */
	private String MENU_NM;
	/**
	 * 메뉴경로
	 */
	private String MENU_PATH;
	/**
	 * 사용여부
	 */
	private String UYN;
	/**
	 * 최초등록일시
	 */
	private String FSRG_DTM;
	/**
	 * 최초등록자
	 */
	private String FS_RGM;
	/**
	 * 최종변경일시
	 */
	private String LSCHG_DTM;
	/**
	 * 최종변경자
	 */
	private String LS_CHGM;

	public String getMB_ID() {
		return MB_ID;
	}

	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}
	
	public String getUSR_NM() {
		return USR_NM;
	}

	public void setUSR_NM(String uSR_NM) {
		USR_NM = uSR_NM;
	}

	public String getMENU_ID() {
		return MENU_ID;
	}

	public void setMENU_ID(String mENU_ID) {
		MENU_ID = mENU_ID;
	}

	public String getMENU_NM() {
		return MENU_NM;
	}

	public void setMENU_NM(String mENU_NM) {
		MENU_NM = mENU_NM;
	}
	
	public String getMENU_PATH() {
		return MENU_PATH;
	}

	public void setMENU_PATH(String mENU_PATH) {
		MENU_PATH = mENU_PATH;
	}

	public String getUYN() {
		return UYN;
	}

	public void setUYN(String uYN) {
		UYN = uYN;
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
}