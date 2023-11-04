package com.nh.escm.tx.doccstd.vo;

import java.io.Serializable;

public class ClosingSimplifyVO implements Serializable {

	private static final long serialVersionUID = 20210420L;

	private String NA_BZPLC; // 경제통합사업장코드
	private String NA_TEAM_C; // 경제통합팀코드
	private String SLP_DT; // 전표일자
	private String NA_SLPNO; // 경제통합전표번호
	private String NA_TRPL_C; // 거래처코드
	private int LINE_CN; // 라인건수
	private int DOC_SZE; // 문서크기
	private String FS_RGM; // 최초등록자
	private String FSRG_DTM; // 최초등록일시
	private String LS_CHGM; // 최종변경자
	private String LSCHG_DTM; // 최종변경일시

	private String MB_ID; // 사용자ID
	private String GLN; // 사용자GLN

	public String getNA_BZPLC() {
		return NA_BZPLC;
	}

	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}

	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}

	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}

	public String getSLP_DT() {
		return SLP_DT;
	}

	public void setSLP_DT(String sLP_DT) {
		SLP_DT = sLP_DT;
	}

	public String getNA_SLPNO() {
		return NA_SLPNO;
	}

	public void setNA_SLPNO(String nA_SLPNO) {
		NA_SLPNO = nA_SLPNO;
	}

	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}

	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}

	public int getLINE_CN() {
		return LINE_CN;
	}

	public void setLINE_CN(int lINE_CN) {
		LINE_CN = lINE_CN;
	}

	public int getDOC_SZE() {
		return DOC_SZE;
	}

	public void setDOC_SZE(int dOC_SZE) {
		DOC_SZE = dOC_SZE;
	}

	public String getFS_RGM() {
		return FS_RGM;
	}

	public void setFS_RGM(String fS_RGM) {
		FS_RGM = fS_RGM;
	}

	public String getFSRG_DTM() {
		return FSRG_DTM;
	}

	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}

	public String getLS_CHGM() {
		return LS_CHGM;
	}

	public void setLS_CHGM(String lS_CHGM) {
		LS_CHGM = lS_CHGM;
	}

	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}

	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}

	public String getMB_ID() {
		return MB_ID;
	}

	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}

	public String getGLN() {
		return GLN;
	}

	public void setGLN(String gLN) {
		GLN = gLN;
	}
}