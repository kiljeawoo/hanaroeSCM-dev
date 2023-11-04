package com.nh.escm.pt.msgamn.vo;

import java.io.Serializable;
import java.util.Arrays;

public class UsrAmnVO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7876978376605978772L;
	private String DEPT_ID                          ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
	private String DEPT_HIGH                        ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	private String DEPT_NAME                        ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String DEPT_SORT                        ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	private String NA_BZPLC                         ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	private String DEPT_LEVEL                       ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	private String LEVEL_ID                         ;
	private String USER_ID                          ;
	private String USER_NAME                        ;
	private String POS                              ;
	private String GRADE                            ;
	private String JOB                              ;
	private String PHONE                            ;
	private String MOBILE                           ;
	private String EMAIL                            ;
	private String USER_SORT                        ;
	private String PIC_FL_NM						;
	private String PIC_FL_TMP_NM					;
	private byte[] PICTURE							;
	private String AUTH_TYPE_CD						;
	private String NA_TRPL_C;
	private String BZNO;
	private String CLNTNM;
	private String DEPT_U_NAME;		//사용자 관리(부서이동)에서 검색기능을 위해 추가
	
	
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getBZNO() {
		return BZNO;
	}
	public void setBZNO(String bZNO) {
		BZNO = bZNO;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getDEPT_ID() {
		return DEPT_ID;
	}
	public void setDEPT_ID(String dEPT_ID) {
		DEPT_ID = dEPT_ID;
	}
	public String getDEPT_HIGH() {
		return DEPT_HIGH;
	}
	public void setDEPT_HIGH(String dEPT_HIGH) {
		DEPT_HIGH = dEPT_HIGH;
	}
	public String getDEPT_NAME() {
		return DEPT_NAME;
	}
	public void setDEPT_NAME(String dEPT_NAME) {
		DEPT_NAME = dEPT_NAME;
	}
	public String getDEPT_SORT() {
		return DEPT_SORT;
	}
	public void setDEPT_SORT(String dEPT_SORT) {
		DEPT_SORT = dEPT_SORT;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getDEPT_LEVEL() {
		return DEPT_LEVEL;
	}
	public void setDEPT_LEVEL(String dEPT_LEVEL) {
		DEPT_LEVEL = dEPT_LEVEL;
	}
	public String getLEVEL_ID() {
		return LEVEL_ID;
	}
	public void setLEVEL_ID(String lEVEL_ID) {
		LEVEL_ID = lEVEL_ID;
	}
	public String getUSER_ID() {
		return USER_ID;
	}
	public void setUSER_ID(String uSER_ID) {
		USER_ID = uSER_ID;
	}
	public String getUSER_NAME() {
		return USER_NAME;
	}
	public void setUSER_NAME(String uSER_NAME) {
		USER_NAME = uSER_NAME;
	}
	public String getPOS() {
		return POS;
	}
	public void setPOS(String pOS) {
		POS = pOS;
	}
	public String getGRADE() {
		return GRADE;
	}
	public void setGRADE(String gRADE) {
		GRADE = gRADE;
	}
	public String getJOB() {
		return JOB;
	}
	public void setJOB(String jOB) {
		JOB = jOB;
	}
	public String getPHONE() {
		return PHONE;
	}
	public void setPHONE(String pHONE) {
		PHONE = pHONE;
	}
	public String getMOBILE() {
		return MOBILE;
	}
	public void setMOBILE(String mOBILE) {
		MOBILE = mOBILE;
	}
	public String getEMAIL() {
		return EMAIL;
	}
	public void setEMAIL(String eMAIL) {
		EMAIL = eMAIL;
	}
	public String getUSER_SORT() {
		return USER_SORT;
	}
	public void setUSER_SORT(String uSER_SORT) {
		USER_SORT = uSER_SORT;
	}
	public String getPIC_FL_TMP_NM() {
		return PIC_FL_TMP_NM;
	}
	public void setPIC_FL_TMP_NM(String pIC_FL_TMP_NM) {
		PIC_FL_TMP_NM = pIC_FL_TMP_NM;
	}
	public byte[] getPICTURE() {
		return PICTURE;
	}
	public void setPICTURE(byte[] pICTURE) {
		PICTURE = pICTURE;
	}
	public String getPIC_FL_NM() {
		return PIC_FL_NM;
	}
	public void setPIC_FL_NM(String pIC_FL_NM) {
		PIC_FL_NM = pIC_FL_NM;
	}
	public String getAUTH_TYPE_CD() {
		return AUTH_TYPE_CD;
	}
	public void setAUTH_TYPE_CD(String aUTH_TYPE_CD) {
		AUTH_TYPE_CD = aUTH_TYPE_CD;
	}
	public String getDEPT_U_NAME() {
		return DEPT_U_NAME;
	}
	public void setDEPT_U_NAME(String dEPT_U_NAME) {
		DEPT_U_NAME = dEPT_U_NAME;
	}
	@Override
	public String toString() {
		return "UsrAmnVO [DEPT_ID=" + DEPT_ID + ", DEPT_HIGH=" + DEPT_HIGH
				+ ", DEPT_NAME=" + DEPT_NAME + ", DEPT_SORT=" + DEPT_SORT
				+ ", NA_BZPLC=" + NA_BZPLC + ", DEPT_LEVEL=" + DEPT_LEVEL
				+ ", LEVEL_ID=" + LEVEL_ID + ", USER_ID=" + USER_ID
				+ ", USER_NAME=" + USER_NAME + ", POS=" + POS + ", GRADE="
				+ GRADE + ", JOB=" + JOB + ", PHONE=" + PHONE + ", MOBILE="
				+ MOBILE + ", EMAIL=" + EMAIL + ", USER_SORT=" + USER_SORT
				+ ", PIC_FL_NM=" + PIC_FL_NM + ", PIC_FL_TMP_NM="
				+ PIC_FL_TMP_NM + ", PICTURE=" + Arrays.toString(PICTURE)
				+ ", AUTH_TYPE_CD=" + AUTH_TYPE_CD + "]";
	}
	
	
	
}
