package com.nh.escm.bt.rq.vo;

/**
 * <PRE>  
 * 	계약상담 VO
 * </PRE>
 * @author  :김형수
 * @version : 1.0 
 * @since : 2015.06.09
 * @modified
 * @modifier 
 */

import java.io.Serializable;
import java.util.List;

public class CsltRqVO implements Serializable{
	
	private static final long serialVersionUID = 7588701056581728011L;
	
	private String CSLT_RQ_NO                            ;//상담신청번호
	private String BZNO                                  ;//사업자등록번호
	private String RQ_DT                                 ;//신청일자
	private String CHRRNM                                ;//담당자명
	
	private String BUYER_SHRT_BZPLNM                     ;//바이어사업장명
	private String BUYER_CHRG_BSNNM                      ;//바이어담당업무명

	
	private String CHRR_TELNO                            ;//담당자 전화번호
	private String CHRR_EMAIL                            ;//담당자 Email
	private String CHRR_MPNO                               ;//담당자 휴대전화번호
	private String CONM                                  ;//업체명
	private String REPM                                  ;//대표자
	private String REPM_TELNO                            ;//대표자 전화번호
	private String BIZTP                                 ;//업태
	private String ITM                                   ;//종목
	private String FZIP                                  ;//앞자리우편번호
	private String RZIP                                  ;//뒷자리우편번호
	private String CSLT_DSC                              ;//항목구분
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
	private String STS_NM                                ;//상태 이름
	private String RMK                                   ;//비고
	private String FSRG_DTM                              ;//최초등록일시
	private String FS_RGM                                ;//최초등록자
	private String LSCHG_DTM                             ;//최종변경일시
	private String LS_CHGM                               ;//최종변경자
	
	private String CSLT_CLS;	// 분류
	private String CSLT_CTG1;	// 카테고리-대
	private String CSLT_CTG2; // 카테고리-중
	
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
	
	private String DCM_C								 ;//서류코드
	private String DCM_NM								 ;//서류명
	private String FLNM								 ;//파일이름
	private String FL_SCRNM								 ;//파일확장자명
	private String FL_PATHNM							 ;//파일전체경로
	private String FL_SZE								 ;//파일크기
	private String SYS_FLNM								 ;//시스템 파일이름
	private String APDFL								 ;//첨부파일  
	private String SQNO								 	 ;//일련번호    
	
	private String FILENAME								 ;//서류명
	private String FILESIZE								 ;//파일크기
	private String ORGFNAME								 ;//파일이름
	private String SYSTEMFILENAME						 ;//시스템 파일이름
	private String DELETEFILENAME						 ;//시스템 삭제파일이름
	private String SEAL                                  ;//디렉토리 위치 
	
	private String DTCT_NO	      							 ;//우편번호
	private String PROVNM	      						 ;//시도명
	private String CCWNM	      						 ;//시군구명   
	private String TTVNM	      						 ;//읍면
	private String RODNM_C	      						 ;//도로명코드
	private String RODNM	      						 ;//도로명
	private String BLD_NO_MHZNO	      					 ;//건물번호본번
	private String BLD_NO_SHZNO	      					 ;//건물번호부번
	private String CCWN_BLDNM	      					 ;//시군구용건물명
	private String LWDG_C	      						 ;//법정동코드
	private String LWDGNM	      						 ;//법정동명
	private String LTNO_MHZNO	      					 ;//지번본번
	private String LTNO_SHZNO	      					 ;//지번부번
	
	private String NA_BZPLC	      					 	 ;//경제통합사업장코드
	private String NA_TRPL_C	      					 ;//경제통합거래처코드
	private String BUYER_ENO	      					 ;//바이어개인번호
	private String USR_TP_NM	      					 ;//사용자 유형명 
	private String BUYER_NM	      					     ;//바이어 이름
	private String BUYER_TELNO	      					 ;//바이어 전화번호
	
	private String DEPTNM	      					     ;//사업자명
	private String CHRG_BSNNM	      					     ;//사용자 유형명
	private String SHRT_BZPLNM	      					     ;//사업자명
	private String BLOCK_YN	      					     ;//메시지 차단
	
	private String REJECT_ALLOW	      				      ; // 거절중복허용
	private String REJECT_MONTH	      				      ; // 차단월개월
	
	
	
	private List<CsltRqVO> CsltRqVOList;
	
	
	
	public String getBLOCK_YN() {
		return BLOCK_YN;
	}
	public void setBLOCK_YN(String bLOCK_YN) {
		BLOCK_YN = bLOCK_YN;
	}
	public List<CsltRqVO> getCsltRqVOList() {
		return CsltRqVOList;
	}
	public void setCsltRqVOList(List<CsltRqVO> csltRqVOList) {
		CsltRqVOList = csltRqVOList;
	}
	public String getBUYER_NM() {
		return BUYER_NM;
	}
	public void setBUYER_NM(String bUYER_NM) {
		BUYER_NM = bUYER_NM;
	}
	public String getDEPTNM() {
		return DEPTNM;
	}
	public void setDEPTNM(String dEPTNM) {
		DEPTNM = dEPTNM;
	}
	public String getCHRG_BSNNM() {
		return CHRG_BSNNM;
	}
	public void setCHRG_BSNNM(String cHRG_BSNNM) {
		CHRG_BSNNM = cHRG_BSNNM;
	}
	public String getSHRT_BZPLNM() {
		return SHRT_BZPLNM;
	}
	public void setSHRT_BZPLNM(String sHRT_BZPLNM) {
		SHRT_BZPLNM = sHRT_BZPLNM;
	}
	public String getUSR_TP_NM() {
		return USR_TP_NM;
	}
	public void setUSR_TP_NM(String uSR_TP_NM) {
		USR_TP_NM = uSR_TP_NM;
	}
	public String getSTS_NM() {
		return STS_NM;
	}
	public void setSTS_NM(String sTS_NM) {
		STS_NM = sTS_NM;
	}
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
	public String getCHRRNM() {
		return CHRRNM;
	}
	public void setCHRRNM(String cHRRNM) {
		CHRRNM = cHRRNM;
	}
	public String getBUYER_SHRT_BZPLNM() {
		return BUYER_SHRT_BZPLNM;
	}
	public void setBUYER_SHRT_BZPLNM(String bUYER_SHRT_BZPLNM) {
		BUYER_SHRT_BZPLNM = bUYER_SHRT_BZPLNM;
	}
	public String getBUYER_CHRG_BSNNM() {
		return BUYER_CHRG_BSNNM;
	}
	public void setBUYER_CHRG_BSNNM(String bUYER_CHRG_BSNNM) {
		BUYER_CHRG_BSNNM = bUYER_CHRG_BSNNM;
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
	public String getCSLT_DSC() {
		return CSLT_DSC;
	}
	public void setCSLT_DSC(String cSLT_DSC) {
		CSLT_DSC = cSLT_DSC;
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
	public String getDCM_C() {
		return DCM_C;
	}
	public void setDCM_C(String dCM_C) {
		DCM_C = dCM_C;
	}
	public String getDCM_NM() {
		return DCM_NM;
	}
	public void setDCM_NM(String dCM_NM) {
		DCM_NM = dCM_NM;
	}
	public String getFLNM() {
		return FLNM;
	}
	public void setFLNM(String fLNM) {
		FLNM = fLNM;
	}
	public String getFL_SCRNM() {
		return FL_SCRNM;
	}
	public void setFL_SCRNM(String fL_SCRNM) {
		FL_SCRNM = fL_SCRNM;
	}
	public String getFL_PATHNM() {
		return FL_PATHNM;
	}
	public void setFL_PATHNM(String fL_PATHNM) {
		FL_PATHNM = fL_PATHNM;
	}
	public String getFL_SZE() {
		return FL_SZE;
	}
	public void setFL_SZE(String fL_SZE) {
		FL_SZE = fL_SZE;
	}
	public String getSYS_FLNM() {
		return SYS_FLNM;
	}
	public void setSYS_FLNM(String sYS_FLNM) {
		SYS_FLNM = sYS_FLNM;
	}
	public String getAPDFL() {
		return APDFL;
	}
	public void setAPDFL(String aPDFL) {
		APDFL = aPDFL;
	}
	public String getSQNO() {
		return SQNO;
	}
	public void setSQNO(String sQNO) {
		SQNO = sQNO;
	}
	public String getFILENAME() {
		return FILENAME;
	}
	public void setFILENAME(String fILENAME) {
		FILENAME = fILENAME;
	}
	public String getFILESIZE() {
		return FILESIZE;
	}
	public void setFILESIZE(String fILESIZE) {
		FILESIZE = fILESIZE;
	}
	public String getORGFNAME() {
		return ORGFNAME;
	}
	public void setORGFNAME(String oRGFNAME) {
		ORGFNAME = oRGFNAME;
	}
	public String getSYSTEMFILENAME() {
		return SYSTEMFILENAME;
	}
	public void setSYSTEMFILENAME(String sYSTEMFILENAME) {
		SYSTEMFILENAME = sYSTEMFILENAME;
	}
	public String getDELETEFILENAME() {
		return DELETEFILENAME;
	}
	public void setDELETEFILENAME(String dELETEFILENAME) {
		DELETEFILENAME = dELETEFILENAME;
	}
	
	public String getDTCT_NO() {
		return DTCT_NO;
	}
	public void setDTCT_NO(String dTCT_NO) {
		DTCT_NO = dTCT_NO;
	}
	public String getPROVNM() {
		return PROVNM;
	}
	public void setPROVNM(String pROVNM) {
		PROVNM = pROVNM;
	}
	public String getCCWNM() {
		return CCWNM;
	}
	public void setCCWNM(String cCWNM) {
		CCWNM = cCWNM;
	}
	public String getTTVNM() {
		return TTVNM;
	}
	public void setTTVNM(String tTVNM) {
		TTVNM = tTVNM;
	}
	public String getRODNM_C() {
		return RODNM_C;
	}
	public void setRODNM_C(String rODNM_C) {
		RODNM_C = rODNM_C;
	}
	public String getRODNM() {
		return RODNM;
	}
	public void setRODNM(String rODNM) {
		RODNM = rODNM;
	}
	public String getBLD_NO_MHZNO() {
		return BLD_NO_MHZNO;
	}
	public void setBLD_NO_MHZNO(String bLD_NO_MHZNO) {
		BLD_NO_MHZNO = bLD_NO_MHZNO;
	}
	public String getBLD_NO_SHZNO() {
		return BLD_NO_SHZNO;
	}
	public void setBLD_NO_SHZNO(String bLD_NO_SHZNO) {
		BLD_NO_SHZNO = bLD_NO_SHZNO;
	}
	public String getCCWN_BLDNM() {
		return CCWN_BLDNM;
	}
	public void setCCWN_BLDNM(String cCWN_BLDNM) {
		CCWN_BLDNM = cCWN_BLDNM;
	}
	public String getLWDG_C() {
		return LWDG_C;
	}
	public void setLWDG_C(String lWDG_C) {
		LWDG_C = lWDG_C;
	}
	public String getLWDGNM() {
		return LWDGNM;
	}
	public void setLWDGNM(String lWDGNM) {
		LWDGNM = lWDGNM;
	}
	public String getLTNO_MHZNO() {
		return LTNO_MHZNO;
	}
	public void setLTNO_MHZNO(String lTNO_MHZNO) {
		LTNO_MHZNO = lTNO_MHZNO;
	}
	public String getLTNO_SHZNO() {
		return LTNO_SHZNO;
	}
	public void setLTNO_SHZNO(String lTNO_SHZNO) {
		LTNO_SHZNO = lTNO_SHZNO;
	}
	public String getCHRR_TELNO() {
		return CHRR_TELNO;
	}
	public void setCHRR_TELNO(String cHRR_TELNO) {
		CHRR_TELNO = cHRR_TELNO;
	}
	public String getCHRR_MPNO() {
		return CHRR_MPNO;
	}
	public void setCHRR_MPNO(String cHRR_MPNO) {
		CHRR_MPNO = cHRR_MPNO;
	}
	public String getREPM_TELNO() {
		return REPM_TELNO;
	}
	public void setREPM_TELNO(String rEPM_TELNO) {
		REPM_TELNO = rEPM_TELNO;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getBUYER_ENO() {
		return BUYER_ENO;
	}
	public void setBUYER_ENO(String bUYER_ENO) {
		BUYER_ENO = bUYER_ENO;
	}
	public String getSEAL() {
		return SEAL;
	}
	public void setSEAL(String sEAL) {
		SEAL = sEAL;
	}
	public String getBUYER_TELNO() {
		return BUYER_TELNO;
	}
	public void setBUYER_TELNO(String bUYER_TELNO) {
		BUYER_TELNO = bUYER_TELNO;
	}
	public String getREJECT_ALLOW() {
		return REJECT_ALLOW;
	}
	public void setREJECT_ALLOW(String rEJECT_ALLOW) {
		REJECT_ALLOW = rEJECT_ALLOW;
	}
	public String getREJECT_MONTH() {
		return REJECT_MONTH;
	}
	public void setREJECT_MONTH(String rEJECT_MONTH) {
		REJECT_MONTH = rEJECT_MONTH;
	}
	public String getCSLT_CLS() {
		return CSLT_CLS;
	}
	public void setCSLT_CLS(String cSLT_CLS) {
		CSLT_CLS = cSLT_CLS;
	}
	public String getCSLT_CTG1() {
		return CSLT_CTG1;
	}
	public void setCSLT_CTG1(String cSLT_CTG1) {
		CSLT_CTG1 = cSLT_CTG1;
	}
	public String getCSLT_CTG2() {
		return CSLT_CTG2;
	}
	public void setCSLT_CTG2(String cSLT_CTG2) {
		CSLT_CTG2 = cSLT_CTG2;
	}
}