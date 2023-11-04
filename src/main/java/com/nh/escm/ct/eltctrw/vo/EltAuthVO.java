package com.nh.escm.ct.eltctrw.vo;

/**
 * <PRE>  
 * 	전자계약 권한 VO
 * </PRE>
 * @author  :윤기혁
 * @version : 1.0 
 * @since : 2020.02.04
 * @modified
 * @modifier 
 */

import java.io.Serializable;

public class EltAuthVO implements Serializable {

	private static final long serialVersionUID = 20200204L;

	private String MB_ID; // 사용자ID
	private String BIZ_NUMBER; // 소속 사업자번호
	private String CHIEF_YN; // 직매장 점장권한여부
	private String CHRG_YN; // 직매장 계약담당여부(사용안함)
	private String ELT_AUTH_DSC; // 전자계약 권한
	private String ELT_99; // 최고권한
	private String ELT_11; // 조회권한_상품본부
	private String ELT_12; // 조회권한_공통
	private String ELT_13; // 조회권한_농산본부
	private String ELT_14; // 조회권한_테넌트(210630 추가)
	private String ELT_15; // 조회권한_수산(210630 추가)
	private String ELT_A1; // 메뉴권한_최종서명
	private String ELT_A2; // 메뉴권한_담당자변경승인
	private String ELT_A3; // 메뉴권한_전자계약양식
	private String ELT_A4; // 메뉴권한_필수서류관리
	private String ELT_A5; // 메뉴권한_파견약정서(210630 추가)
	private String FSRG_DTM; // 등록일
	private String FS_RGM; // 등록자
	private String LSCHG_DTM; // 수정일
	private String LS_CHGM; // 수정자

	public String getMB_ID() {
		return MB_ID;
	}

	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}

	public String getBIZ_NUMBER() {
		return BIZ_NUMBER;
	}

	public void setBIZ_NUMBER(String bIZ_NUMBER) {
		BIZ_NUMBER = bIZ_NUMBER;
	}

	public String getCHIEF_YN() {
		return CHIEF_YN;
	}

	public void setCHIEF_YN(String cHIEF_YN) {
		CHIEF_YN = cHIEF_YN;
	}

	public String getCHRG_YN() {
		return CHRG_YN;
	}

	public void setCHRG_YN(String cHRG_YN) {
		CHRG_YN = cHRG_YN;
	}

	public String getELT_AUTH_DSC() {
		return ELT_AUTH_DSC;
	}

	public void setELT_AUTH_DSC(String eLT_AUTH_DSC) {
		ELT_AUTH_DSC = eLT_AUTH_DSC;
	}

	public String getELT_99() {
		return ELT_99;
	}

	public void setELT_99(String eLT_99) {
		ELT_99 = eLT_99;
	}

	public String getELT_11() {
		return ELT_11;
	}

	public void setELT_11(String eLT_11) {
		ELT_11 = eLT_11;
	}

	public String getELT_12() {
		return ELT_12;
	}

	public void setELT_12(String eLT_12) {
		ELT_12 = eLT_12;
	}

	public String getELT_13() {
		return ELT_13;
	}

	public void setELT_13(String eLT_13) {
		ELT_13 = eLT_13;
	}
	
	public String getELT_14() {
		return ELT_14;
	}

	public void setELT_14(String eLT_14) {
		ELT_14 = eLT_14;
	}

	public String getELT_15() {
		return ELT_15;
	}

	public void setELT_15(String eLT_15) {
		ELT_15 = eLT_15;
	}

	public String getELT_A1() {
		return ELT_A1;
	}

	public void setELT_A1(String eLT_A1) {
		ELT_A1 = eLT_A1;
	}

	public String getELT_A2() {
		return ELT_A2;
	}

	public void setELT_A2(String eLT_A2) {
		ELT_A2 = eLT_A2;
	}

	public String getELT_A3() {
		return ELT_A3;
	}

	public void setELT_A3(String eLT_A3) {
		ELT_A3 = eLT_A3;
	}

	public String getELT_A4() {
		return ELT_A4;
	}

	public void setELT_A4(String eLT_A4) {
		ELT_A4 = eLT_A4;
	}
	
	public String getELT_A5() {
		return ELT_A5;
	}

	public void setELT_A5(String eLT_A5) {
		ELT_A5 = eLT_A5;
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
	
	public String getEltSearchAuth() {
		if ("Y".equals(ELT_99)) {
//			System.out.println("전자계약 최고권한");
			return "99";
		} else if ("Y".equals(ELT_11) || "Y".equals(ELT_12) || "Y".equals(ELT_13) || "Y".equals(ELT_14) || "Y".equals(ELT_15)) {
//			System.out.println("전자계약 일부 조회권한");
			return "123";
		}
		return null;
	}
}