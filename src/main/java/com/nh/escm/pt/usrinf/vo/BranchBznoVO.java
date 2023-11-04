package com.nh.escm.pt.usrinf.vo;

/**
 * 지사 사업자 정보
 */
public class BranchBznoVO {
	
	private String NA_TRPL_C;
	private String CLNTNM;
	
	private String BZNO; // 사업자등록번호
	private String REPMNM; // 대표자명
	private String ZIP; // 우편번호
	private String DONGUP; // 동이상주소
	private String DONGBW; // 동이하주소
	private String BZCCNM; // 업종(종목)
	private String BZTPNM; // 업태
	private String CONFIRM_YN; // 사업자등록번호 확인 여부
	private String TX_REG;	// 종사업자번호
	
	private String MB_ID; // 회원ID

	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	
	public String getCLNTNM() {
		return CLNTNM;
	}
	
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	
	public String getBZNO() {
		return BZNO;
	}
	
	public void setBZNO(String bZNO) {
		BZNO = bZNO;
	}
	
	public String getREPMNM() {
		return REPMNM;
	}
	
	public void setREPMNM(String rEPMNM) {
		REPMNM = rEPMNM;
	}
	
	public String getZIP() {
		return ZIP;
	}
	
	public void setZIP(String zIP) {
		ZIP = zIP;
	}
	
	public String getDONGUP() {
		return DONGUP;
	}
	
	public void setDONGUP(String dONGUP) {
		DONGUP = dONGUP;
	}
	
	public String getDONGBW() {
		return DONGBW;
	}
	
	public void setDONGBW(String dONGBW) {
		DONGBW = dONGBW;
	}
	
	public String getBZCCNM() {
		return BZCCNM;
	}
	
	public void setBZCCNM(String bZCCNM) {
		BZCCNM = bZCCNM;
	}
	
	public String getBZTPNM() {
		return BZTPNM;
	}
	
	public void setBZTPNM(String bZTPNM) {
		BZTPNM = bZTPNM;
	}
	
	public String getMB_ID() {
		return MB_ID;
	}
	
	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}
	
	public String getCONFIRM_YN() {
		return CONFIRM_YN;
	}
	
	public void setCONFIRM_YN(String cONFIRM_YN) {
		CONFIRM_YN = cONFIRM_YN;
	}
	
	public String getTX_REG() {
		return TX_REG;
	}

	public void setTX_REG(String tX_REG) {
		TX_REG = tX_REG;
	}

}
