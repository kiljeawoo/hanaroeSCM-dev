package com.nh.escm.system.vo;

import java.util.Date;

public class CertInfoVO {
	
	private String BSN_DSC   ; // "BSN_DSC	업무구분: ESCM, CONSULT, ETC  "
	private String CERT_ID ; // 인증서명                                 
	private String CERT_NAME ; // 인증서명                                 
	private String CERT_TYPE ; // 인증서종류: SSL, SIGN      
	private String SYS_NAME  ; // 시스템명
	
	private String SSL_URL   ; // SSL URL 주소                             
	private String CN        ; // Common Name: 도메인 명칭                 
	private String CERT_PATH ; // 인증서경로                               
	private Date   NOT_BEFORE; // notBefore    시작일                      
	private Date   NOT_AFTER ; // notAfter     종료일                      
	private String NOTIFICATION ; // 알림설정      
	private boolean Valid        ; // 알림설정      
	
	
	private String MP_1       ; // 관리자 휴대폰 번호       
	private String EMAIL_1    ; // 이메일 주소     
	private String MP_2       ; // 관리자 휴대폰 번호        
	private String EMAIL_2    ; // 이메일 주소        

	private String HOST_NAME ; // 호스트명                                 
	private String IP_ADDRESS; // 아이피 주소                              
	private String RMK       ; // 비고                                     
	private String FSRG_DTM  ; // 최초등록일시                             
	private String FS_RGM    ; // 최초등록자                               
	private String LSCHG_DTM ; // 최종변경일시                             
	private String LS_CHGM   ; // 최종변경자      
	
	public String getBSN_DSC() {
		return BSN_DSC;
	}
	public void setBSN_DSC(String bSN_DSC) {
		BSN_DSC = bSN_DSC;
	}
	
	public String getCERT_ID() {
		return CERT_ID;
	}
	public void setCERT_ID(String cERT_ID) {
		CERT_ID = cERT_ID;
	}
	public String getSYS_NAME() {
		return SYS_NAME;
	}
	public void setSYS_NAME(String sYS_NAME) {
		SYS_NAME = sYS_NAME;
	}
	public String getCERT_NAME() {
		return CERT_NAME;
	}
	public void setCERT_NAME(String cERT_NAME) {
		CERT_NAME = cERT_NAME;
	}
	public String getCERT_TYPE() {
		return CERT_TYPE;
	}
	public void setCERT_TYPE(String cERT_TYPE) {
		CERT_TYPE = cERT_TYPE;
	}
	public String getSSL_URL() {
		return SSL_URL;
	}
	public void setSSL_URL(String sSL_URL) {
		SSL_URL = sSL_URL;
	}
	public String getCN() {
		return CN;
	}
	public void setCN(String cN) {
		CN = cN;
	}
	public String getCERT_PATH() {
		return CERT_PATH;
	}
	public void setCERT_PATH(String cERT_PATH) {
		CERT_PATH = cERT_PATH;
	}
	public Date   getNOT_BEFORE() {
		return NOT_BEFORE;
	}
	public void setNOT_BEFORE(Date   nOT_BEFORE) {
		NOT_BEFORE = nOT_BEFORE;
	}
	public Date   getNOT_AFTER() {
		return NOT_AFTER;
	}
	public void setNOT_AFTER(Date nOT_AFTER) {
		NOT_AFTER = nOT_AFTER;
	}
	public String getHOST_NAME() {
		return HOST_NAME;
	}
	public void setHOST_NAME(String hOST_NAME) {
		HOST_NAME = hOST_NAME;
	}
	public String getIP_ADDRESS() {
		return IP_ADDRESS;
	}
	public void setIP_ADDRESS(String iP_ADDRESS) {
		IP_ADDRESS = iP_ADDRESS;
	}
	public String getRMK() {
		return RMK;
	}
	public void setRMK(String rMK) {
		RMK = rMK;
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
	public String getNOTIFICATION() {
		return NOTIFICATION;
	}
	public void setNOTIFICATION(String nOTIFICATION) {
		NOTIFICATION = nOTIFICATION;
	}
	public String getMP_1() {
		return MP_1;
	}
	public void setMP_1(String mP_1) {
		MP_1 = mP_1;
	}
	public String getEMAIL_1() {
		return EMAIL_1;
	}
	public void setEMAIL_1(String eMAIL_1) {
		EMAIL_1 = eMAIL_1;
	}
	public String getMP_2() {
		return MP_2;
	}
	public void setMP_2(String mP_2) {
		MP_2 = mP_2;
	}
	public String getEMAIL_2() {
		return EMAIL_2;
	}
	public void setEMAIL_2(String eMAIL_2) {
		EMAIL_2 = eMAIL_2;
	}
	public boolean isValid() {
		return Valid;
	}
	public void setValid(boolean valid) {
		Valid = valid;
	}
	
	
	
	
}
