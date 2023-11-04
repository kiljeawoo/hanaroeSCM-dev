package com.nh.escm.bt.rq.vo;

/**
 * <PRE>  
 * 	계약상담 신청내역확인 VO
 * </PRE>
 * @author  :김형수
 * @version : 1.0 
 * @since : 2015.06.09
 * @modified
 * @modifier 
 */

import java.io.Serializable;

public class CsltRqHstVO implements Serializable{
	
	private static final long serialVersionUID = 3968695297845468948L;
	
	private String CSLT_RQ_NO                            ;//상담신청번호
	private String BZNO                                  ;//사업자등록번호
	private String RQ_DT                                 ;//신청일자
	private String CHRR                                  ;//담당자
	private String NA_WRS_LCLC                           ;//경제통합상품대분류코드
	private String NA_WRS_MCLC                           ;//경제통합상품중분류코드
	private String NA_WRS_SCLC                           ;//경제통합상품소분류코드
	private String NA_WRS_DTCF_C                         ;//경제통합상품세분류코드
	private String CHRR_TELNO                            ;//담당자 전화번호
	private String CHRR_EMAIL                            ;//담당자 Email
	private String CHRR_HP                           	 ;//담당자 휴대전화번호
	private String CONM                                  ;//업체명
	private String REPM                                  ;//대표자
	private String REPM_TELNO                            ;//대표자 전화번호
	private String BIZTP                                 ;//업태
	private String ITM                                   ;//종목
	private String FZIP                                  ;//앞자리우편번호
	private String RZIP                                  ;//뒷자리우편번호
	private String ZIP_SQNO                              ;//우편번호일련번호
	private String DONGUP                                ;//동이상주소
	private String DONGBW                                ;//동이하주소
	private String BYR_SLAM                              ;//연간매출금액
	private String MSELPL                                ;//주판매처
	private String MFO_LATC                              ;//주력품목
	private String CO_CHR_MFT                            ;//회사성격 제조
	private String CO_CHR_REV                            ;//회사성격 수입
	private String CO_CHR_TOT_AGCY                       ;//회사성격 총판/대리점
	private String CO_CHR_VD                             ;//회사성격 벤더
	private String MAJ_LATC                              ;//주요품목
	private String CSLT_RQ_CNTN                          ;//상담신청내용
	private String STS                                   ;//상태
	private String RMK                                   ;//비고
	private String FSRG_DTM                              ;//최초등록일시
	private String FS_RGM                                ;//최초등록자
	private String LSCHG_DTM                             ;//최종변경일시
	private String LS_CHGM                               ;//최종변경자
	
	private String EVL_HDNG_A1                           ;//평가항목A1
	private String EVL_HDNG_A2                           ;//평가항목A2
	private String EVL_HDNG_A3                           ;//평가항목A3
	private String EVL_HDNG_A4                           ;//평가항목A4
	private String EVL_HDNG_A5                           ;//평가항목A5
	private String EVL_HDNG_A6                           ;//평가항목A6
	private String EVL_HDNG_B1                           ;//평가항목B1
	private String EVL_HDNG_B11                          ;//평가항목B11
	private String EVL_HDNG_B2                           ;//평가항목B2
	private String EVL_HDNG_B3                           ;//평가항목B3
	private String EVL_HDNG_B4                           ;//평가항목B4
	private String EVL_HDNG_B5                           ;//평가항목B5
	private String EVL_HDNGCN                            ;//평가항목점수	
	
	private String ISCHECKED                             ;//check여부
	
	public String getCSLT_RQ_NO() {
		return CSLT_RQ_NO;
	}
	public void setCSLT_RQ_NO(String cSLT_RQ_NO) {
		CSLT_RQ_NO = cSLT_RQ_NO;
	}
	public String getBZNO() {
		return BZNO;
	}
	public void setBZNO(String bZNO) {
		BZNO = bZNO;
	}

	public String getRQ_DT() {
		return RQ_DT;
	}
	public void setRQ_DT(String rQ_DT) {
		RQ_DT = rQ_DT;
	}
	public String getCHRR() {
		return CHRR;
	}
	public void setCHRR(String cHRR) {
		CHRR = cHRR;
	}
	public String getNA_WRS_LCLC() {
		return NA_WRS_LCLC;
	}
	public void setNA_WRS_LCLC(String nA_WRS_LCLC) {
		NA_WRS_LCLC = nA_WRS_LCLC;
	}
	public String getNA_WRS_MCLC() {
		return NA_WRS_MCLC;
	}
	public void setNA_WRS_MCLC(String nA_WRS_MCLC) {
		NA_WRS_MCLC = nA_WRS_MCLC;
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
	public String getCHRR_EMAIL() {
		return CHRR_EMAIL;
	}
	public void setCHRR_EMAIL(String cHRR_EMAIL) {
		CHRR_EMAIL = cHRR_EMAIL;
	}
	public String getCONM() {
		return CONM;
	}
	public void setCONM(String cONM) {
		CONM = cONM;
	}
	public String getREPM() {
		return REPM;
	}
	public void setREPM(String rEPM) {
		REPM = rEPM;
	}
	public String getBIZTP() {
		return BIZTP;
	}
	public void setBIZTP(String bIZTP) {
		BIZTP = bIZTP;
	}
	public String getITM() {
		return ITM;
	}
	public void setITM(String iTM) {
		ITM = iTM;
	}
	public String getFZIP() {
		return FZIP;
	}
	public void setFZIP(String fZIP) {
		FZIP = fZIP;
	}
	public String getRZIP() {
		return RZIP;
	}
	public void setRZIP(String rZIP) {
		RZIP = rZIP;
	}
	public String getZIP_SQNO() {
		return ZIP_SQNO;
	}
	public void setZIP_SQNO(String zIP_SQNO) {
		ZIP_SQNO = zIP_SQNO;
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
	public String getBYR_SLAM() {
		return BYR_SLAM;
	}
	public void setBYR_SLAM(String bYR_SLAM) {
		BYR_SLAM = bYR_SLAM;
	}
	public String getMSELPL() {
		return MSELPL;
	}
	public void setMSELPL(String mSELPL) {
		MSELPL = mSELPL;
	}
	public String getMFO_LATC() {
		return MFO_LATC;
	}
	public void setMFO_LATC(String mFO_LATC) {
		MFO_LATC = mFO_LATC;
	}
	public String getCO_CHR_MFT() {
		return CO_CHR_MFT;
	}
	public void setCO_CHR_MFT(String cO_CHR_MFT) {
		CO_CHR_MFT = cO_CHR_MFT;
	}
	public String getCO_CHR_REV() {
		return CO_CHR_REV;
	}
	public void setCO_CHR_REV(String cO_CHR_REV) {
		CO_CHR_REV = cO_CHR_REV;
	}
	public String getCO_CHR_TOT_AGCY() {
		return CO_CHR_TOT_AGCY;
	}
	public void setCO_CHR_TOT_AGCY(String cO_CHR_TOT_AGCY) {
		CO_CHR_TOT_AGCY = cO_CHR_TOT_AGCY;
	}
	public String getCO_CHR_VD() {
		return CO_CHR_VD;
	}
	public void setCO_CHR_VD(String cO_CHR_VD) {
		CO_CHR_VD = cO_CHR_VD;
	}
	public String getMAJ_LATC() {
		return MAJ_LATC;
	}
	public void setMAJ_LATC(String mAJ_LATC) {
		MAJ_LATC = mAJ_LATC;
	}
	public String getCSLT_RQ_CNTN() {
		return CSLT_RQ_CNTN;
	}
	public void setCSLT_RQ_CNTN(String cSLT_RQ_CNTN) {
		CSLT_RQ_CNTN = cSLT_RQ_CNTN;
	}
	public String getSTS() {
		return STS;
	}
	public void setSTS(String sTS) {
		STS = sTS;
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
	public String getEVL_HDNG_A1() {
		return EVL_HDNG_A1;
	}
	public void setEVL_HDNG_A1(String eVL_HDNG_A1) {
		EVL_HDNG_A1 = eVL_HDNG_A1;
	}
	public String getEVL_HDNG_A2() {
		return EVL_HDNG_A2;
	}
	public void setEVL_HDNG_A2(String eVL_HDNG_A2) {
		EVL_HDNG_A2 = eVL_HDNG_A2;
	}
	public String getEVL_HDNG_A3() {
		return EVL_HDNG_A3;
	}
	public void setEVL_HDNG_A3(String eVL_HDNG_A3) {
		EVL_HDNG_A3 = eVL_HDNG_A3;
	}
	public String getEVL_HDNG_A4() {
		return EVL_HDNG_A4;
	}
	public void setEVL_HDNG_A4(String eVL_HDNG_A4) {
		EVL_HDNG_A4 = eVL_HDNG_A4;
	}
	public String getEVL_HDNG_A5() {
		return EVL_HDNG_A5;
	}
	public void setEVL_HDNG_A5(String eVL_HDNG_A5) {
		EVL_HDNG_A5 = eVL_HDNG_A5;
	}
	public String getEVL_HDNG_A6() {
		return EVL_HDNG_A6;
	}
	public void setEVL_HDNG_A6(String eVL_HDNG_A6) {
		EVL_HDNG_A6 = eVL_HDNG_A6;
	}
	public String getEVL_HDNG_B1() {
		return EVL_HDNG_B1;
	}
	public void setEVL_HDNG_B1(String eVL_HDNG_B1) {
		EVL_HDNG_B1 = eVL_HDNG_B1;
	}
	public String getEVL_HDNG_B11() {
		return EVL_HDNG_B11;
	}
	public void setEVL_HDNG_B11(String eVL_HDNG_B11) {
		EVL_HDNG_B11 = eVL_HDNG_B11;
	}
	public String getEVL_HDNG_B2() {
		return EVL_HDNG_B2;
	}
	public void setEVL_HDNG_B2(String eVL_HDNG_B2) {
		EVL_HDNG_B2 = eVL_HDNG_B2;
	}
	public String getEVL_HDNG_B3() {
		return EVL_HDNG_B3;
	}
	public void setEVL_HDNG_B3(String eVL_HDNG_B3) {
		EVL_HDNG_B3 = eVL_HDNG_B3;
	}
	public String getEVL_HDNG_B4() {
		return EVL_HDNG_B4;
	}
	public void setEVL_HDNG_B4(String eVL_HDNG_B4) {
		EVL_HDNG_B4 = eVL_HDNG_B4;
	}
	public String getEVL_HDNG_B5() {
		return EVL_HDNG_B5;
	}
	public void setEVL_HDNG_B5(String eVL_HDNG_B5) {
		EVL_HDNG_B5 = eVL_HDNG_B5;
	}
	public String getEVL_HDNGCN() {
		return EVL_HDNGCN;
	}
	public void setEVL_HDNGCN(String eVL_HDNGCN) {
		EVL_HDNGCN = eVL_HDNGCN;
	}
	public String getISCHECKED() {
		return ISCHECKED;
	}
	public void setISCHECKED(String iSCHECKED) {
		ISCHECKED = iSCHECKED;
	}
	public String getCHRR_TELNO() {
		return CHRR_TELNO;
	}
	public void setCHRR_TELNO(String cHRR_TELNO) {
		CHRR_TELNO = cHRR_TELNO;
	}
	public String getCHRR_HP() {
		return CHRR_HP;
	}
	public void setCHRR_HP(String cHRR_HP) {
		CHRR_HP = cHRR_HP;
	}
	public String getREPM_TELNO() {
		return REPM_TELNO;
	}
	public void setREPM_TELNO(String rEPM_TELNO) {
		REPM_TELNO = rEPM_TELNO;
	}
}
