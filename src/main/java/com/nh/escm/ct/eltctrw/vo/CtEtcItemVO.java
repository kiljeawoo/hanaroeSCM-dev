package com.nh.escm.ct.eltctrw.vo  ;                                                                                                                                              
                                                                                                                                                                                     
import java.io.Serializable ;                                                                                                                                                         

/*
 * 2017.02.22
 * 전자계약 수산부 거래품목리스트
 * 
 */

public class CtEtcItemVO implements Serializable {                                                                                                                                     
	private String  ELT_CTRW_NO    = "";  // 전자계약서번호
	private String  CHG_SQNO       = "";  // 변경일련번호 
	private String  SQNO           = "";  // 순번
	private String  ITEM_CODE      = "";  // 상품코드
	private String  ITEM_NAME      = "";  // 상품명
	private String  STANDARD       = "";  // 규격
	private String  COUNTRY        = "";  // 원산지
	private String  COMPANY        = "";  // 제조업체
	private String  BRAND          = "";  // 브랜드
	private String  QTY            = "";  // 수량
	private String  UPR            = "";  // 단가
	private String  ETC1            = "";  // 추가컬럼1
	private String  ETC2            = "";  // 추가컬럼2
	private String  ETC3            = "";  // 추가컬럼3
	private String  ETC4            = "";  // 추가컬럼4
	private String  ETC5            = "";  // 추가컬럼5
	
	private String  FSRG_DTM       = "";  // 최초등록일시
	private String  FS_RGM         = "";  // 최초등록자
	private String  LSCHG_DTM      = "";  // 최종변경일시
	private String  LS_CHGM        = "";  // 최종변경자

	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}
	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}
	public String getCHG_SQNO() {
		return CHG_SQNO;
	}
	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}
	public String getSQNO() {
		return SQNO;
	}
	public void setSQNO(String sQNO) {
		SQNO = sQNO;
	}
	public String getITEM_CODE() {
		return ITEM_CODE;
	}
	public void setITEM_CODE(String iTEM_CODE) {
		ITEM_CODE = iTEM_CODE;
	}
	public String getITEM_NAME() {
		return ITEM_NAME;
	}
	public void setITEM_NAME(String iTEM_NAME) {
		ITEM_NAME = iTEM_NAME;
	}
	public String getSTANDARD() {
		return STANDARD;
	}
	public void setSTANDARD(String sTANDARD) {
		STANDARD = sTANDARD;
	}
	public String getCOUNTRY() {
		return COUNTRY;
	}
	public void setCOUNTRY(String cOUNTRY) {
		COUNTRY = cOUNTRY;
	}
	public String getCOMPANY() {
		return COMPANY;
	}
	public void setCOMPANY(String cOMPANY) {
		COMPANY = cOMPANY;
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
	public String getBRAND() {
		return BRAND;
	}
	public void setBRAND(String bRAND) {
		BRAND = bRAND;
	}
	public String getQTY() {
		return QTY;
	}
	public void setQTY(String qTY) {
		QTY = qTY;
	}
	public String getUPR() {
		return UPR;
	}
	public void setUPR(String uPR) {
		UPR = uPR;
	}
	public String getETC1() {
		return ETC1;
	}
	public void setETC1(String eTC1) {
		ETC1 = eTC1;
	}
	public String getETC2() {
		return ETC2;
	}
	public void setETC2(String eTC2) {
		ETC2 = eTC2;
	}
	public String getETC3() {
		return ETC3;
	}
	public void setETC3(String eTC3) {
		ETC3 = eTC3;
	}
	public String getETC4() {
		return ETC4;
	}
	public void setETC4(String eTC4) {
		ETC4 = eTC4;
	}
	public String getETC5() {
		return ETC5;
	}
	public void setETC5(String eTC5) {
		ETC5 = eTC5;
	}
}