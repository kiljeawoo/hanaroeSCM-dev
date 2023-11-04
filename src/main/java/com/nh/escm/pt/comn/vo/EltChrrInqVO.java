package com.nh.escm.pt.comn.vo;

import java.io.Serializable;

public class EltChrrInqVO  implements Serializable {

	private static long serialVersionUID = 182857165908383948L;
	
	
	
	private String ISCHECKED ;
	private String CTR_CHRR  	;//사용자
	private String MPNO 		;//핸드폰
	private String EMAIL  		;//
	private String STS_NM   	;//회원 상태값
	private String NA_TRPL_C 	;//거래처코드
	
	
	
	
	public String getISCHECKED() {
		return ISCHECKED;
	}
	public void setISCHECKED(String iSCHECKED) {
		ISCHECKED = iSCHECKED;
	}
	public String getCTR_CHRR() {
		return CTR_CHRR;
	}
	public void setCTR_CHRR(String cTR_CHRR) {
		CTR_CHRR = cTR_CHRR;
	}
	public String getMPNO() {
		return MPNO;
	}
	public void setMPNO(String mPNO) {
		MPNO = mPNO;
	}
	public String getEMAIL() {
		return EMAIL;
	}
	public void setEMAIL(String eMAIL) {
		EMAIL = eMAIL;
	}
	public String getSTS_NM() {
		return STS_NM;
	}
	public void setSTS_NM(String sTS_NM) {
		STS_NM = sTS_NM;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	
	

}
