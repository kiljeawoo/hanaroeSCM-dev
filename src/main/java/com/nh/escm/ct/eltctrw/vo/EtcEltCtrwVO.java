package com.nh.escm.ct.eltctrw.vo;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */

import java.io.Serializable;

public class EtcEltCtrwVO implements Serializable {

	private static final long serialVersionUID = 20150818L;

	private String ELT_CTRW_NO;// 전자계약서번호
	private String ETC_CTRW_KDC;// 기타 계약서종류
	private String CTRW_STY_VER;// 계약서양식버젼

	private String TMP_ELT_CTRW_NO;// 임시전자계약서번호
	private String CTRW_STY_CHG_VER;// 계약서양식변경버젼
	private String CHG_SQNO;// 변경일련번호
	private String DML_CODE;

	private String LBRCS; // 인건비
	private String LBRCS_CLCN_BASS; // 인건비산출근거
	private String ETC; // 기타
	private String ETC_CLCN_BASS; // 기타산출근거
	private String NED_SS; // 소용비용계
	private String NED_BASS; // 소용비용산출근거
	private String MSLAM; // 월매출액
	private String MSLAM_PFT; // 월매출액이익
	private String RLZ_XPC_PFT; // 실현예상이익
	private String FSRG_DTM; // 최초등록일시
	private String FS_RGM; // 최초등록자
	private String LSCHG_DTM; // 최종변경일시
	private String LS_CHGM; // 최종변경자

	private String SCTR_SJT; // 특약사항

	// 예비컬럼
	private String ETC1;
	private String ETC2;
	private String ETC3;
	private String ETC4;
	private String ETC5;

	public String getDML_CODE() {
		return DML_CODE;
	}

	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}

	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}

	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}

	public String getETC_CTRW_KDC() {
		return ETC_CTRW_KDC;
	}

	public void setETC_CTRW_KDC(String eTC_CTRW_KDC) {
		ETC_CTRW_KDC = eTC_CTRW_KDC;
	}

	public String getCTRW_STY_VER() {
		return CTRW_STY_VER;
	}

	public void setCTRW_STY_VER(String cTRW_STY_VER) {
		CTRW_STY_VER = cTRW_STY_VER;
	}

	public String getTMP_ELT_CTRW_NO() {
		return TMP_ELT_CTRW_NO;
	}

	public void setTMP_ELT_CTRW_NO(String tMP_ELT_CTRW_NO) {
		TMP_ELT_CTRW_NO = tMP_ELT_CTRW_NO;
	}

	public String getCTRW_STY_CHG_VER() {
		return CTRW_STY_CHG_VER;
	}

	public void setCTRW_STY_CHG_VER(String cTRW_STY_CHG_VER) {
		CTRW_STY_CHG_VER = cTRW_STY_CHG_VER;
	}

	public String getCHG_SQNO() {
		return CHG_SQNO;
	}

	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}

	public String getLBRCS() {
		return LBRCS;
	}

	public void setLBRCS(String lBRCS) {
		LBRCS = lBRCS;
	}

	public String getLBRCS_CLCN_BASS() {
		return LBRCS_CLCN_BASS;
	}

	public void setLBRCS_CLCN_BASS(String lBRCS_CLCN_BASS) {
		LBRCS_CLCN_BASS = lBRCS_CLCN_BASS;
	}

	public String getETC() {
		return ETC;
	}

	public void setETC(String eTC) {
		ETC = eTC;
	}

	public String getETC_CLCN_BASS() {
		return ETC_CLCN_BASS;
	}

	public void setETC_CLCN_BASS(String eTC_CLCN_BASS) {
		ETC_CLCN_BASS = eTC_CLCN_BASS;
	}

	public String getNED_SS() {
		return NED_SS;
	}

	public void setNED_SS(String nED_SS) {
		NED_SS = nED_SS;
	}

	public String getNED_BASS() {
		return NED_BASS;
	}

	public void setNED_BASS(String nED_BASS) {
		NED_BASS = nED_BASS;
	}

	public String getMSLAM() {
		return MSLAM;
	}

	public void setMSLAM(String mSLAM) {
		MSLAM = mSLAM;
	}

	public String getMSLAM_PFT() {
		return MSLAM_PFT;
	}

	public void setMSLAM_PFT(String mSLAM_PFT) {
		MSLAM_PFT = mSLAM_PFT;
	}

	public String getRLZ_XPC_PFT() {
		return RLZ_XPC_PFT;
	}

	public void setRLZ_XPC_PFT(String rLZ_XPC_PFT) {
		RLZ_XPC_PFT = rLZ_XPC_PFT;
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

	public String getSCTR_SJT() {
		return SCTR_SJT;
	}

	public void setSCTR_SJT(String sCTR_SJT) {
		SCTR_SJT = sCTR_SJT;
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