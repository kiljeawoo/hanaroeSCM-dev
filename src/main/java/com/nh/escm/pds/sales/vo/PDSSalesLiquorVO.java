package com.nh.escm.pds.sales.vo;

import java.io.Serializable;

/**
 * 화면ID : VAN_DS_SC_0840
 * 화면명 : 주류실적 조회
 * @author hroh
 */
public class PDSSalesLiquorVO implements Serializable {

	private static final long serialVersionUID = 20150813L;
	
	private String RN; //페이지번호	
	private String NA_BZPLC;  //사업장코드
	private String SHRT_BZPLNM;  //사업장명
	private String NA_RGN_C;  //지역코드
	private String RGN_CNM;  //지역코드명
	private String TRPL_C;  //거래처코드
	private String CLNTNM;  //거래처코드명
	private String WRS_C;  //상품코드
	private String WRSNM;  //상품코드명
	private String SL_YM;  //거래년월
	private String SQWW;  //거래주수
	private double SL_QT;  //판매수량
	private double BOXPE_AQZ;  //박스당입수
	private double BOX_QT;  //박스수량
	private String PRGR_C;  //가격군
	private String NA_WRS_SCLC;  //소분류
	private String NA_WRS_DTCF_C;  //세분류
	
	public String getRN() {
		return RN;
	}
	public void setRN(String rN) {
		RN = rN;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getSHRT_BZPLNM() {
		return SHRT_BZPLNM;
	}
	public void setSHRT_BZPLNM(String sHRT_BZPLNM) {
		SHRT_BZPLNM = sHRT_BZPLNM;
	}
	public String getNA_RGN_C() {
		return NA_RGN_C;
	}
	public void setNA_RGN_C(String nA_RGN_C) {
		NA_RGN_C = nA_RGN_C;
	}
	public String getRGN_CNM() {
		return RGN_CNM;
	}
	public void setRGN_CNM(String rGN_CNM) {
		RGN_CNM = rGN_CNM;
	}
	public String getTRPL_C() {
		return TRPL_C;
	}
	public void setTRPL_C(String tRPL_C) {
		TRPL_C = tRPL_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getWRS_C() {
		return WRS_C;
	}
	public void setWRS_C(String wRS_C) {
		WRS_C = wRS_C;
	}
	public String getWRSNM() {
		return WRSNM;
	}
	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}
	public String getSL_YM() {
		return SL_YM;
	}
	public void setSL_YM(String sL_YM) {
		SL_YM = sL_YM;
	}
	public String getSQWW() {
		return SQWW;
	}
	public void setSQWW(String sQWW) {
		SQWW = sQWW;
	}
	public double getSL_QT() {
		return SL_QT;
	}
	public void setSL_QT(double sL_QT) {
		SL_QT = sL_QT;
	}
	public double getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(double bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public double getBOX_QT() {
		return BOX_QT;
	}
	public void setBOX_QT(double bOX_QT) {
		BOX_QT = bOX_QT;
	}
	public String getPRGR_C() {
		return PRGR_C;
	}
	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}
	public String getNA_WRS_SCLC() {
		return NA_WRS_SCLC;
	}
	public void setNA_WRS_SCLC(String nA_WRS_SCLC) {
		NA_WRS_SCLC = nA_WRS_SCLC;
	}
	public String getNA_WRS_DTCF_C() {
		return NA_WRS_DTCF_C;
	}
	public void setNA_WRS_DTCF_C(String nA_WRS_DTCF_C) {
		NA_WRS_DTCF_C = nA_WRS_DTCF_C;
	}	
}
