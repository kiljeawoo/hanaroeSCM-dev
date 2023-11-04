package com.nh.escm.pt.usrinf.vo;

public interface SQLMapNames { 
	
	/**************************************************************************************************
	 * 2015.10.15 신규 작업 enum data
	 ***************************************************************************************************/
	/**세션 정보*/
	public enum SessionInfo {
		NA_TRPL_C, NAAC_DSC, MB_ID, MB_CV_DSC, USR_TPC, CHRG_BSNNM, USR_MPNO, ENT_PRG_CNTN, NA_MBCO_DSC, BIZ_NUMBER,
		ENT_PRG_STSC, BL_CHG_YN, HOFF_APV_YN, NA_USR_SYS_KDC, PW_LSRG_DT, SVC_STATUS, USR_NM, COMP_TPC, CLNTNM, CHANGE_MB, CHANGE_ELT,
		UP_NA_TRPL_C, USR_SYS_C, TRPL_DTL_TPC
	}
	/**가입진행중인 빌링,세금계산서 정보*/
	public enum ResultInfoNames {		
		RST , BILING_ING, TAX_ING
	}	
	/**SMS전송*/
	public enum SmsSendNames {		
		MSG_ID, USER_ID, SCHEDULE_TYPE, SUBJECT, SMS_MSG, SEND_DATE, DEST_TYPE, DEST_COUNT, DEST_INFO, SEND_STATUS, SEND_COUNT, SEND_RESULT 
	}
	/**회원ID찾기*/
	public enum SearchMbIdNames {		
		MB_ID,  MB_PW, NA_TRPL_C, BIRTH, SEX_DSC, USR_MPNO
	}
	/**내메뉴*/
	public enum MyMenuNames {		
		MB_ID, MENU_ID , MENU_NM       				
	}
	/**공통코드*/
	public enum CodeNames {		
		SIMP_C, SIMP_CNM       				
	}
	/**기본정보(회사정보+회원정보)*/
	public enum BasicInfo {		
		NA_TRPL_C, BZNO1, BZNO2, BZNO3,BRC_BZNO1, BRC_BZNO2, BRC_BZNO3, REPMNM, CLNTNM, FZIP, ATEL, HTEL, STEL, MPSQNO, DONGUP , DONGBW, RZIP , NAAC_DSC, 
		COMP_TPC,  NA_MBCO_DSC , MB_ID, USR_NM, BIRTH, SEX_DSC, USR_MPNO , USR_MPNO01 , USR_MPNO02 , USR_MPNO03
		,USR_EMAIL01, USR_EMAIL02, SMS_RMS_YN, EMAIL_RMS_YN ,CHRG_BSNNM, ENT_PRG_CNTN , USR_TPC, ENT_PRG_STSC ,TAX_AUTH_CNT,BL_CHG_YN,
	    SVC_CHG_YN, AUTH_CHG_YN, USR_TELNO, USR_TELNO01, USR_TELNO02, USR_TELNO03
	}	                    
	
	
	/**거래처코드,거래처명*/
	public enum NaTrplCInfoNames {		
		NA_TRPL_C , CLNTNM , CLNT_NM
	}
	/**회사정보*/
	public enum OfficeInfo {		
		NA_TRPL_C, BZNO1, BZNO2, BZNO3, REPMNM, CLNTNM, FZIP, ATEL, HTEL, STEL, MPSQNO, DONGUP , DONGBW, RZIP , NAAC_DSC, 
		COMP_TPC,  TEL1, TEL2, TEL3	, NA_MBCO_DSC 
	}	                      
	/**권한*/
	public enum NaTrplCAuthNames {		
		MB_ID, USR_NM, USR_AUTH_DSC, ENT_PRG_STSC, RQ_DSC 
	}
	/**납부정보*/
	public enum PayInfoNames{
		STL_METH_DSC, HOP_DRW_DD, PSCRP_DSC, DPR_NO, BNK_C, ACNO, BB_FLNM, BB_FL_TMPNM, BZ_RGWRRT_FLNM, BZ_RGWRRT_FL_TMPNM,
		FL_PATHNM, DRW_FTR_AGR_YN, FNC_TR_INF_OFR_AGR_YN, DPRNM, ELSG_CNTN
	}
	
	/**서비스정보*/
	public enum SvcInfoNames {		
		SVC_ID, SVC_ENT_DTM , ENT_PRG_STSC, RQ_DSC
	}
	
	/**인증번호*/
	public enum CertNumNames {		
		CERT_NUM
	}
	/**서비스정보*/
	public enum VirtualAccountNames {		
		VRTL_ACNO
	}	
	/**바이어정보*/
	public enum BuyerInfoNames{
		TAX_AUTH_CNT, MB_ID, USR_NM , BIRTH, SEX_DSC, USR_MPNO , HP1 , HP2 , HP3
		,USR_EMAIL01, USR_EMAIL02, MB_CV_DSC, USR_TPC, MP1, MP2, MP3
	}
	
	/**카테고리정보*/
	public enum CategoryInfoNames{
		RN, NA_TRPL_C, CRGR_SEQ, NA_WRS_LCLC, NA_WRS_MCLC, NA_WRS_SCLC, WRS_LCLFNM, WRS_MCLFNM, WRS_SCLFNM, SVC_ST_DT, SVC_ED_DT, LS_CHGM , LS_CHGM_NM
	}
	
	/**사용자동의*/
	public enum UsrConsent{
	    BSN_DSC, NA_TRPL_C, MB_ID, CONSENT_YN, FSRG_DTM, FS_RGM, LSCHG_DTM, LS_CHGM
	}
	/**사용자동의*/
	public enum UsrConsentCount{
	    CONSENT_COUNT
	}

}
