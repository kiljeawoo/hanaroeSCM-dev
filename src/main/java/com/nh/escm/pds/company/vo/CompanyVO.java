package com.nh.escm.pds.company.vo;

public class CompanyVO {
	private String NA_TRPL_C; 				//경제통합거래처코드
	private String NA_TRPL_DSC; 			//경제통합거래처구분코드
	private String NA_TRPL_DSC_NM;
	private String NAAC_DSC; 				//중앙회조합구분코드
	private String NAAC_DSC_NM;				//중앙회조합구분코드명
	private String CLNTNM; 					//거래처명
	private String TRPL_ABR_NM; 			//거래처약어명
	private String NA_MBCO_DSC; 			//경제통합본지사구분코드
	private String UP_NA_TRPL_C; 			//상위경제통합거래처코드
	private String UP_NA_TRPL_NM;			//상위경제통합거래처명
	private String FZIP; 					//앞자리우편번호
	private String RZIP; 					//뒷자리우편번호
	private String ZIP_SQNO; 				//우편번호일련번호
	private String DONGUP; 					//동이상주소
	private String DONGBW; 					//동이하주소
	private String NA_RGN_C; 				//경제통합지역코드
	private String RGN_CNM;					//지역코드명
	private String TEL_NAT_NO; 				//전화국가번호
	private String ATEL; 					//전화지역번호
	private String HTEL; 					//전화국번호
	private String STEL; 					//전화일련번호
	private String FAX_RGNO; 				//팩스지역번호
	private String HFAX; 					//팩스국번호
	private String FAX_SQNO; 				//팩스일련번호
	private String MPSVNO; 					//휴대전화서비스번호
	private String MPHNO; 					//휴대전화국번호
	private String MPSQNO; 					//휴대전화일련번호
	private String FMACH_PATS_TRT_YN; 		//농기계부품취급여부
	private String NA_BZPL_TXBZ_RPT_FORM_C; //경제통합사업장세무신고형태코드
	private String NA_USR_SYS_KDC; 			//경제통합사용자시스템종류코드
	private String NA_USR_SYS_KDC_NM;
	private String ELT_TXBIL_UYN; 			//전자세금계산서사용여부
	private String TR_STOP_YN; 				//거래중지여부
	private String TR_STOP_RSNC; 			//거래중지사유코드
	private String TR_STOP_NM;				//거래중지사유명
	private String TR_STOP_DT; 				//거래중지일자
	private String COPNO_CIF_NO; 			//법인등록번호
	private String REPMNM; 					//대표자명
	private String BZCCNM; 					//업종코드명
	private String BZTPNM; 					//업태명
	private String LIQ_SEL_RPT_NO; 			//주류판매신고번호
	private String LIQ_WHSL_COMP_C; 		//주류도매업체코드
	private String LIQ_RTL_COMP_C; 			//주류소매업체코드
	private String NA_TXBZ_DSC; 			//경제통합세무구분코드
	private String BIZ_NUMBER;				//사업자등록번호
	private String CHG_YN;					//변경여부
	private String LS_CMENO;				//최종변경자개인번호
	private String LS_NA_BZPLC;				//최종변경자사업장코드
	private String CHECK_YN;
	private String ROTS_FLEX_PR_APL_YN;
	private String UP_RGN_CNM;
	private String NA_TRPL_SEAL_FLNM;       //직인파일명
	private String DEL_YN;
	private String USR_SYS_C;               //경제통합시스템코드
	private String FSRGMN_ENO;				//최초등록자개인번호
	private String OLD_NEW_ADR_DSC; // 도로명주소여부
	private String BLD_AMNNO; // 빌딩관리번호
	
	

	public String getNA_TRPL_SEAL_FLNM() {
		return NA_TRPL_SEAL_FLNM;
	}

	public void setNA_TRPL_SEAL_FLNM(String nA_TRPL_SEAL_FLNM) {
		NA_TRPL_SEAL_FLNM = nA_TRPL_SEAL_FLNM;
	}

	public CompanyVO() {
		
	}

	public String getCHECK_YN() {
		return CHECK_YN;
	}
	
	public void setCHECK_YN(String cHECK_YN) {
		CHECK_YN = cHECK_YN;
	}

	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}


	public String getNA_TRPL_DSC() {
		return NA_TRPL_DSC;
	}


	public void setNA_TRPL_DSC(String nA_TRPL_DSC) {
		NA_TRPL_DSC = nA_TRPL_DSC;
	}
	
	
	public String getNA_TRPL_DSC_NM() {
		return NA_TRPL_DSC_NM;
	}

	
	public void setNA_TRPL_DSC_NM(String nA_TRPL_DSC_NM) {
		NA_TRPL_DSC_NM = nA_TRPL_DSC_NM;
	}

	
	public String getNAAC_DSC() {
		return NAAC_DSC;
	}


	public void setNAAC_DSC(String nAAC_DSC) {
		NAAC_DSC = nAAC_DSC;
	}
	

	public String getNAAC_DSC_NM() {
		return NAAC_DSC_NM;
	}

	
	public void setNAAC_DSC_NM(String nAAC_DSC_NM) {
		NAAC_DSC_NM = nAAC_DSC_NM;
	}

	
	public String getCLNTNM() {
		return CLNTNM;
	}


	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}


	public String getTRPL_ABR_NM() {
		return TRPL_ABR_NM;
	}


	public void setTRPL_ABR_NM(String tRPL_ABR_NM) {
		TRPL_ABR_NM = tRPL_ABR_NM;
	}


	public String getNA_MBCO_DSC() {
		return NA_MBCO_DSC;
	}


	public void setNA_MBCO_DSC(String nA_MBCO_DSC) {
		NA_MBCO_DSC = nA_MBCO_DSC;
	}


	public String getUP_NA_TRPL_C() {
		return UP_NA_TRPL_C;
	}


	public void setUP_NA_TRPL_C(String uP_NA_TRPL_C) {
		UP_NA_TRPL_C = uP_NA_TRPL_C;
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


	public String getNA_RGN_C() {
		return NA_RGN_C;
	}


	public void setNA_RGN_C(String nA_RGN_C) {
		NA_RGN_C = nA_RGN_C;
	}


	public String getTEL_NAT_NO() {
		return TEL_NAT_NO;
	}


	public void setTEL_NAT_NO(String tEL_NAT_NO) {
		TEL_NAT_NO = tEL_NAT_NO;
	}


	public String getATEL() {
		return ATEL;
	}


	public void setATEL(String aTEL) {
		ATEL = aTEL;
	}


	public String getHTEL() {
		return HTEL;
	}


	public void setHTEL(String hTEL) {
		HTEL = hTEL;
	}


	public String getSTEL() {
		return STEL;
	}


	public void setSTEL(String sTEL) {
		STEL = sTEL;
	}


	public String getFAX_RGNO() {
		return FAX_RGNO;
	}


	public void setFAX_RGNO(String fAX_RGNO) {
		FAX_RGNO = fAX_RGNO;
	}


	public String getHFAX() {
		return HFAX;
	}


	public void setHFAX(String hFAX) {
		HFAX = hFAX;
	}


	public String getFAX_SQNO() {
		return FAX_SQNO;
	}


	public void setFAX_SQNO(String fAX_SQNO) {
		FAX_SQNO = fAX_SQNO;
	}


	public String getMPSVNO() {
		return MPSVNO;
	}


	public void setMPSVNO(String mPSVNO) {
		MPSVNO = mPSVNO;
	}


	public String getMPHNO() {
		return MPHNO;
	}


	public void setMPHNO(String mPHNO) {
		MPHNO = mPHNO;
	}


	public String getMPSQNO() {
		return MPSQNO;
	}


	public void setMPSQNO(String mPSQNO) {
		MPSQNO = mPSQNO;
	}


	public String getFMACH_PATS_TRT_YN() {
		return FMACH_PATS_TRT_YN;
	}


	public void setFMACH_PATS_TRT_YN(String fMACH_PATS_TRT_YN) {
		FMACH_PATS_TRT_YN = fMACH_PATS_TRT_YN;
	}


	public String getNA_BZPL_TXBZ_RPT_FORM_C() {
		return NA_BZPL_TXBZ_RPT_FORM_C;
	}


	public void setNA_BZPL_TXBZ_RPT_FORM_C(String nA_BZPL_TXBZ_RPT_FORM_C) {
		NA_BZPL_TXBZ_RPT_FORM_C = nA_BZPL_TXBZ_RPT_FORM_C;
	}


	public String getNA_USR_SYS_KDC() {
		return NA_USR_SYS_KDC;
	}


	public void setNA_USR_SYS_KDC(String nA_USR_SYS_KDC) {
		NA_USR_SYS_KDC = nA_USR_SYS_KDC;
	}


	public String getNA_USR_SYS_KDC_NM() {
		return NA_USR_SYS_KDC_NM;
	}

	public void setNA_USR_SYS_KDC_NM(String nA_USR_SYS_KDC_NM) {
		NA_USR_SYS_KDC_NM = nA_USR_SYS_KDC_NM;
	}

	public String getELT_TXBIL_UYN() {
		return ELT_TXBIL_UYN;
	}


	public void setELT_TXBIL_UYN(String eLT_TXBIL_UYN) {
		ELT_TXBIL_UYN = eLT_TXBIL_UYN;
	}


	public String getTR_STOP_YN() {
		return TR_STOP_YN;
	}


	public void setTR_STOP_YN(String tR_STOP_YN) {
		TR_STOP_YN = tR_STOP_YN;
	}


	public String getTR_STOP_RSNC() {
		return TR_STOP_RSNC;
	}


	public void setTR_STOP_RSNC(String tR_STOP_RSNC) {
		TR_STOP_RSNC = tR_STOP_RSNC;
	}
	

	public String getTR_STOP_NM() {
		return TR_STOP_NM;
	}

	
	public void setTR_STOP_NM(String tR_STOP_NM) {
		TR_STOP_NM = tR_STOP_NM;
	}

	
	public String getTR_STOP_DT() {
		return TR_STOP_DT;
	}


	public void setTR_STOP_DT(String tR_STOP_DT) {
		TR_STOP_DT = tR_STOP_DT;
	}


	public String getCOPNO_CIF_NO() {
		return COPNO_CIF_NO;
	}


	public void setCOPNO_CIF_NO(String cOPNO_CIF_NO) {
		COPNO_CIF_NO = cOPNO_CIF_NO;
	}


	public String getREPMNM() {
		return REPMNM;
	}


	public void setREPMNM(String rEPMNM) {
		REPMNM = rEPMNM;
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


	public String getLIQ_SEL_RPT_NO() {
		return LIQ_SEL_RPT_NO;
	}


	public void setLIQ_SEL_RPT_NO(String lIQ_SEL_RPT_NO) {
		LIQ_SEL_RPT_NO = lIQ_SEL_RPT_NO;
	}


	public String getLIQ_WHSL_COMP_C() {
		return LIQ_WHSL_COMP_C;
	}


	public void setLIQ_WHSL_COMP_C(String lIQ_WHSL_COMP_C) {
		LIQ_WHSL_COMP_C = lIQ_WHSL_COMP_C;
	}


	public String getLIQ_RTL_COMP_C() {
		return LIQ_RTL_COMP_C;
	}


	public void setLIQ_RTL_COMP_C(String lIQ_RTL_COMP_C) {
		LIQ_RTL_COMP_C = lIQ_RTL_COMP_C;
	}


	public String getNA_TXBZ_DSC() {
		return NA_TXBZ_DSC;
	}


	public void setNA_TXBZ_DSC(String nA_TXBZ_DSC) {
		NA_TXBZ_DSC = nA_TXBZ_DSC;
	}


	public String getBIZ_NUMBER() {
		return BIZ_NUMBER;
	}


	public void setBIZ_NUMBER(String bIZ_NUMBER) {
		BIZ_NUMBER = bIZ_NUMBER;
	}


	public String getCHG_YN() {
		return CHG_YN;
	}


	public void setCHG_YN(String cHG_YN) {
		CHG_YN = cHG_YN;
	}


	public String getLS_CMENO() {
		return LS_CMENO;
	}


	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}


	public String getLS_NA_BZPLC() {
		return LS_NA_BZPLC;
	}


	public void setLS_NA_BZPLC(String lS_NA_BZPLC) {
		LS_NA_BZPLC = lS_NA_BZPLC;
	}

	public String getROTS_FLEX_PR_APL_YN() {
		return ROTS_FLEX_PR_APL_YN;
	}

	public void setROTS_FLEX_PR_APL_YN(String rOTS_FLEX_PR_APL_YN) {
		ROTS_FLEX_PR_APL_YN = rOTS_FLEX_PR_APL_YN;
	}

	public String getRGN_CNM() {
		return RGN_CNM;
	}

	public void setRGN_CNM(String rGN_CNM) {
		RGN_CNM = rGN_CNM;
	}

	public String getUP_NA_TRPL_NM() {
		return UP_NA_TRPL_NM;
	}

	public void setUP_NA_TRPL_NM(String uP_NA_TRPL_NM) {
		UP_NA_TRPL_NM = uP_NA_TRPL_NM;
	}

	public String getUP_RGN_CNM() {
		return UP_RGN_CNM;
	}

	public void setUP_RGN_CNM(String uP_RGN_CNM) {
		UP_RGN_CNM = uP_RGN_CNM;
	}

	public String getDEL_YN() {
		return DEL_YN;
	}

	public void setDEL_YN(String dEL_YN) {
		DEL_YN = dEL_YN;
	}

	public String getUSR_SYS_C() {
		return USR_SYS_C;
	}

	public void setUSR_SYS_C(String uSR_SYS_C) {
		USR_SYS_C = uSR_SYS_C;
	}

	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}

	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}

	public String getOLD_NEW_ADR_DSC() {
		return OLD_NEW_ADR_DSC;
	}

	public void setOLD_NEW_ADR_DSC(String oLD_NEW_ADR_DSC) {
		OLD_NEW_ADR_DSC = oLD_NEW_ADR_DSC;
	}

	public String getBLD_AMNNO() {
		return BLD_AMNNO;
	}

	public void setBLD_AMNNO(String bLD_AMNNO) {
		BLD_AMNNO = bLD_AMNNO;
	}	
}
