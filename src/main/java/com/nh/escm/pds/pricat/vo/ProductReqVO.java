package com.nh.escm.pds.pricat.vo;

public class ProductReqVO {
	private String RN;
	private String VAN_C_RQ_NO;
	private String NA_C_RQ_NO;
	private String NA_C_RQ_OBJ_DSC;
	private String NA_C_RQ_OBJ_DSC_NM;
	private String CTCPL_TELNO;
	private String RQ_CNTN;
	private String APV_RQ_NA_BZPLC;
	private String FSRGMN_ENO;
	private String FSRGMN_NA_BZPLC;
	private String BUYER_ENO;
	private String RQ_NA_WRS_C;
	private String NA_WRS_C;
	private String WRS_C_DSC;
	private String WRS_DSC;
	private String WRSNM;
	private String WRS_ABR_NM;
	private String WRS_ENM;
	private String WRS_TPC;
	private String NA_WRS_LCLC;
	private String NA_WRS_MCLC;
	private String NA_WRS_SCLC;
	private String NA_WRS_DTCF_C;
	private String WRS_STDNM;
	private String TXT_DSC;
	private String SMA_APL_TPC;
	private String LIQ_YN;
	private String COMM_WRS_YN;
	private String MFT_NA_TRPL_C;
	private String WHT;
	private String NA_WRS_UNT_C;
	private String NA_WRS_PAK_C;
	private String NA_WRS_BRAN_C;
	private String NA_WRS_CSTD_METC;
	private String NA_WRS_DSTR_STSC;
	private String NA_WRS_UZC;
	private String NA_WRS_IPO_DSC;
	private String VCBT_NA_WRS_C;
	private String VCBT_QT;
	private String VCBX_NA_WRS_C;
	private String WRS_DTL_EXPL;
	private String BSC_UNT_DSC;
	private String BOXPE_AQZ;
	private String RFID_UYN;
	private String FOMNM;
	private String SLGT_ETR_DSC;
	private String DSTR_TER_YN;
	private String DSTR_TER_MRK_DSC;
	private String WRS_MODIFY_YN;
	private String TEMP_YN;
	private String SEND_YN;
	private String REQ_RESULT;
	private String CNF_ENO;
	private String CNF_DATE;
	private String CNF_NAME;
	private String RESULT_CODE;
	private String NA_BZPLC;
	private String STPL_AMN_NA_WRS_C;
	private String NA_SPYPL_C;
	private String NA_SPYPL_TEAM_C;
	private String PLTPE_LYNO;
	private String PLTPE_SGNO;
	private String PLTPE_BOX_CN;
	private String BOX_WT;
	private String BOX_BULK;
	private String WDTH_LEN;
	private String LEN_LEN;
	private String WRS_HGHT;
	private String BOX_WRS_YN;
	private String BYNG_UPR;
	private String SEL_UPR;
	private String WRS_WDTH_LEN;
	private String WRS_LEN_LEN;
	private String NA_WRS_SZE_SEX_C;
	private String NA_WRS_QLT_GRDC;
	private String NA_WRS_PROENV_DSC;
	private String GAP_ATTC_YN;
	private String NA_WRS_NACF_QLT_ATTC_C;
	private String NA_WRS_PDAA_C;
	private String ACHMI_LATCNM;
	private String ACHMI_IGRQT;
	private String FTLZ_PHAC_IGRDRT;
	private String FTLZ_NTRG_IGRDRT;
	private String FTLZ_KLM_IGRDRT;
	private String FMACH_PATS_CLF_DSC;
	private String NUMN_YN;
	private String GEN_LON_LMT_AM;
	private String COMM_LON_LMT_AM;
	private String NA_WRS_STD_UNT_C;
	private String WRS_SGRT;
	private String WRS_SDL_DSC;
	private String WRS_AHL_CN;
	private String MTRL_STD_THKN;
	private String CICL_WRS_STD_DMTR_CN;
	private String CICL_WRS_STD_DPTH_CN;
	private String FED_PD_METC;
	private String SNUM_CNTN;
	private String CVS_QT;
	private String CVS_NA_WRS_UNT_C;
	private String WRS_FL_CN;
	private String KNET_WRS_NO;
	private String TR_STOP_YN;
	private String TR_STOP_RSNC;
	private String FMACH_FOMNM;
	private String PRC_YN;
	private String CUD_DSC;
	private String BOXPE_DLVG_UPR;
	private String SLAM_PER_FEERT;
	private String PMTN_SPT_PERS;
	private String WRS_TRT_CMBR_CN;
	private String ASP_SL_CNAM;
	private String DEL_YN;
	
	// 190128 추가
	private String VLD_PRD_CN; // 유효기간수
	private String VLD_PRD_DSC; // 유효기간구분코드
	private String TR_STOP_DT;
	private String LIQ_UZ_DSC;
	private String FMACH_DCRT;
	private String LWCRBN_ATTC_YN;
	private String DSTR_TER_AMN_YN;
	private String RSP_C_CNTN;
	private String CNF_DMT;
	private String NA_C_RQ_REJ_RSNC;
	private String NA_C_RQ_STSC;
	private String FSRG_DTM;  			    // 11.최초등록일시
	private String LSCHG_DTM;       		// 12.최종변경일시
	private String LS_CHGM;         			// 13.최종변경자
	
	// 190808 가격표시제 단위 추가
	private String PR_MRK_WHT; // 내용량
	private String PR_MRK_STD_BAS_WHT; //기준량
	private String PR_MRK_BAS_UNIT; // 표시단위

	// 230414 차세대  (상품통합 )추가 
	private String CUS_AG_LRG_DSC;
	private String FTS_SET_YN;
	private String HACCP_ATTC_YN;
	private String KC_ATTC_ESS_YN;
	private String LIQ_DSC;
	private String MN1_HSH_WRS_YN;
	private String NACF_XUSE_WRS_YN;
	private String NEW_SEX_DSC;
	private String NEW_SSN_DSC;
	private String ONL_OBJ_YN;
	private String PAK_METH_DSC;
	private String PAK_QLT_DSC;
	private String PLG_WRS_KD;
	private String WRS_BIZTP_DSC;
	private String EDI_IF_ID;
	
	// 230425 차세대 수정 반영건
	private String 공병명;
	private String 공상자명;
	private String 공급처명;
	
	public String getRN() {
		return RN;
	}

	public void setRN(String rN) {
		RN = rN;
	}

	public String getNA_BZPLC() {
		return NA_BZPLC;
	}

	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}

	public String getVAN_C_RQ_NO() {
		return VAN_C_RQ_NO;
	}

	public void setVAN_C_RQ_NO(String vAN_C_RQ_NO) {
		VAN_C_RQ_NO = vAN_C_RQ_NO;
	}

	public String getNA_C_RQ_NO() {
		return NA_C_RQ_NO;
	}

	public void setNA_C_RQ_NO(String nA_C_RQ_NO) {
		NA_C_RQ_NO = nA_C_RQ_NO;
	}

	public String getNA_C_RQ_OBJ_DSC() {
		return NA_C_RQ_OBJ_DSC;
	}

	public void setNA_C_RQ_OBJ_DSC(String nA_C_RQ_OBJ_DSC) {
		NA_C_RQ_OBJ_DSC = nA_C_RQ_OBJ_DSC;
	}

	public String getNA_C_RQ_OBJ_DSC_NM() {
		return NA_C_RQ_OBJ_DSC_NM;
	}

	public void setNA_C_RQ_OBJ_DSC_NM(String nA_C_RQ_OBJ_DSC_NM) {
		NA_C_RQ_OBJ_DSC_NM = nA_C_RQ_OBJ_DSC_NM;
	}

	public String getCTCPL_TELNO() {
		return CTCPL_TELNO;
	}

	public void setCTCPL_TELNO(String cTCPL_TELNO) {
		CTCPL_TELNO = cTCPL_TELNO;
	}

	public String getRQ_CNTN() {
		return RQ_CNTN;
	}

	public void setRQ_CNTN(String rQ_CNTN) {
		RQ_CNTN = rQ_CNTN;
	}

	public String getAPV_RQ_NA_BZPLC() {
		return APV_RQ_NA_BZPLC;
	}

	public void setAPV_RQ_NA_BZPLC(String aPV_RQ_NA_BZPLC) {
		APV_RQ_NA_BZPLC = aPV_RQ_NA_BZPLC;
	}

	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}

	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}

	public String getFSRGMN_NA_BZPLC() {
		return FSRGMN_NA_BZPLC;
	}

	public void setFSRGMN_NA_BZPLC(String fSRGMN_NA_BZPLC) {
		FSRGMN_NA_BZPLC = fSRGMN_NA_BZPLC;
	}

	public String getBUYER_ENO() {
		return BUYER_ENO;
	}

	public void setBUYER_ENO(String bUYER_ENO) {
		BUYER_ENO = bUYER_ENO;
	}

	public String getRQ_NA_WRS_C() {
		return RQ_NA_WRS_C;
	}

	public void setRQ_NA_WRS_C(String rQ_NA_WRS_C) {
		RQ_NA_WRS_C = rQ_NA_WRS_C;
	}

	public String getNA_WRS_C() {
		return NA_WRS_C;
	}

	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}

	public String getWRS_C_DSC() {
		return WRS_C_DSC;
	}

	public void setWRS_C_DSC(String wRS_C_DSC) {
		WRS_C_DSC = wRS_C_DSC;
	}

	public String getWRS_DSC() {
		return WRS_DSC;
	}

	public void setWRS_DSC(String wRS_DSC) {
		WRS_DSC = wRS_DSC;
	}

	public String getWRSNM() {
		return WRSNM;
	}

	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}

	public String getWRS_ABR_NM() {
		return WRS_ABR_NM;
	}

	public void setWRS_ABR_NM(String wRS_ABR_NM) {
		WRS_ABR_NM = wRS_ABR_NM;
	}

	public String getWRS_ENM() {
		return WRS_ENM;
	}

	public void setWRS_ENM(String wRS_ENM) {
		WRS_ENM = wRS_ENM;
	}

	public String getWRS_TPC() {
		return WRS_TPC;
	}

	public void setWRS_TPC(String wRS_TPC) {
		WRS_TPC = wRS_TPC;
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

	public String getWRS_STDNM() {
		return WRS_STDNM;
	}

	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}

	public String getTXT_DSC() {
		return TXT_DSC;
	}

	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}

	public String getSMA_APL_TPC() {
		return SMA_APL_TPC;
	}

	public void setSMA_APL_TPC(String sMA_APL_TPC) {
		SMA_APL_TPC = sMA_APL_TPC;
	}

	public String getLIQ_YN() {
		return LIQ_YN;
	}

	public void setLIQ_YN(String lIQ_YN) {
		LIQ_YN = lIQ_YN;
	}

	public String getCOMM_WRS_YN() {
		return COMM_WRS_YN;
	}

	public void setCOMM_WRS_YN(String cOMM_WRS_YN) {
		COMM_WRS_YN = cOMM_WRS_YN;
	}

	public String getMFT_NA_TRPL_C() {
		return MFT_NA_TRPL_C;
	}

	public void setMFT_NA_TRPL_C(String mFT_NA_TRPL_C) {
		MFT_NA_TRPL_C = mFT_NA_TRPL_C;
	}

	public String getWHT() {
		return WHT;
	}

	public void setWHT(String wHT) {
		WHT = wHT;
	}

	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}

	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}

	public String getNA_WRS_PAK_C() {
		return NA_WRS_PAK_C;
	}

	public void setNA_WRS_PAK_C(String nA_WRS_PAK_C) {
		NA_WRS_PAK_C = nA_WRS_PAK_C;
	}

	public String getNA_WRS_BRAN_C() {
		return NA_WRS_BRAN_C;
	}

	public void setNA_WRS_BRAN_C(String nA_WRS_BRAN_C) {
		NA_WRS_BRAN_C = nA_WRS_BRAN_C;
	}

	public String getNA_WRS_CSTD_METC() {
		return NA_WRS_CSTD_METC;
	}

	public void setNA_WRS_CSTD_METC(String nA_WRS_CSTD_METC) {
		NA_WRS_CSTD_METC = nA_WRS_CSTD_METC;
	}

	public String getNA_WRS_DSTR_STSC() {
		return NA_WRS_DSTR_STSC;
	}

	public void setNA_WRS_DSTR_STSC(String nA_WRS_DSTR_STSC) {
		NA_WRS_DSTR_STSC = nA_WRS_DSTR_STSC;
	}

	public String getNA_WRS_UZC() {
		return NA_WRS_UZC;
	}

	public void setNA_WRS_UZC(String nA_WRS_UZC) {
		NA_WRS_UZC = nA_WRS_UZC;
	}

	public String getNA_WRS_IPO_DSC() {
		return NA_WRS_IPO_DSC;
	}

	public void setNA_WRS_IPO_DSC(String nA_WRS_IPO_DSC) {
		NA_WRS_IPO_DSC = nA_WRS_IPO_DSC;
	}

	public String getVCBT_NA_WRS_C() {
		return VCBT_NA_WRS_C;
	}

	public void setVCBT_NA_WRS_C(String vCBT_NA_WRS_C) {
		VCBT_NA_WRS_C = vCBT_NA_WRS_C;
	}

	public String getVCBT_QT() {
		return VCBT_QT;
	}

	public void setVCBT_QT(String vCBT_QT) {
		VCBT_QT = vCBT_QT;
	}

	public String getVCBX_NA_WRS_C() {
		return VCBX_NA_WRS_C;
	}

	public void setVCBX_NA_WRS_C(String vCBX_NA_WRS_C) {
		VCBX_NA_WRS_C = vCBX_NA_WRS_C;
	}

	public String getWRS_DTL_EXPL() {
		return WRS_DTL_EXPL;
	}

	public void setWRS_DTL_EXPL(String wRS_DTL_EXPL) {
		WRS_DTL_EXPL = wRS_DTL_EXPL;
	}

	public String getBSC_UNT_DSC() {
		return BSC_UNT_DSC;
	}

	public void setBSC_UNT_DSC(String bSC_UNT_DSC) {
		BSC_UNT_DSC = bSC_UNT_DSC;
	}

	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}

	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}

	public String getRFID_UYN() {
		return RFID_UYN;
	}

	public void setRFID_UYN(String rFID_UYN) {
		RFID_UYN = rFID_UYN;
	}

	public String getFOMNM() {
		return FOMNM;
	}

	public void setFOMNM(String fOMNM) {
		FOMNM = fOMNM;
	}

	public String getSLGT_ETR_DSC() {
		return SLGT_ETR_DSC;
	}

	public void setSLGT_ETR_DSC(String sLGT_ETR_DSC) {
		SLGT_ETR_DSC = sLGT_ETR_DSC;
	}

	public String getDSTR_TER_YN() {
		return DSTR_TER_YN;
	}

	public void setDSTR_TER_YN(String dSTR_TER_YN) {
		DSTR_TER_YN = dSTR_TER_YN;
	}

	public String getDSTR_TER_MRK_DSC() {
		return DSTR_TER_MRK_DSC;
	}

	public void setDSTR_TER_MRK_DSC(String dSTR_TER_MRK_DSC) {
		DSTR_TER_MRK_DSC = dSTR_TER_MRK_DSC;
	}

	public String getWRS_MODIFY_YN() {
		return WRS_MODIFY_YN;
	}

	public void setWRS_MODIFY_YN(String wRS_MODIFY_YN) {
		WRS_MODIFY_YN = wRS_MODIFY_YN;
	}

	public String getTEMP_YN() {
		return TEMP_YN;
	}

	public void setTEMP_YN(String tEMP_YN) {
		TEMP_YN = tEMP_YN;
	}

	public String getSEND_YN() {
		return SEND_YN;
	}

	public void setSEND_YN(String sEND_YN) {
		SEND_YN = sEND_YN;
	}

	public String getREQ_RESULT() {
		return REQ_RESULT;
	}

	public void setREQ_RESULT(String rEQ_RESULT) {
		REQ_RESULT = rEQ_RESULT;
	}

	public String getCNF_ENO() {
		return CNF_ENO;
	}

	public void setCNF_ENO(String cNF_ENO) {
		CNF_ENO = cNF_ENO;
	}

	public String getCNF_DATE() {
		return CNF_DATE;
	}

	public void setCNF_DATE(String cNF_DATE) {
		CNF_DATE = cNF_DATE;
	}

	public String getCNF_NAME() {
		return CNF_NAME;
	}

	public void setCNF_NAME(String cNF_NAME) {
		CNF_NAME = cNF_NAME;
	}

	public String getRESULT_CODE() {
		return RESULT_CODE;
	}

	public void setRESULT_CODE(String rESULT_CODE) {
		RESULT_CODE = rESULT_CODE;
	}

	public String getSTPL_AMN_NA_WRS_C() {
		return STPL_AMN_NA_WRS_C;
	}

	public void setSTPL_AMN_NA_WRS_C(String sTPL_AMN_NA_WRS_C) {
		STPL_AMN_NA_WRS_C = sTPL_AMN_NA_WRS_C;
	}

	public String getNA_SPYPL_C() {
		return NA_SPYPL_C;
	}

	public void setNA_SPYPL_C(String nA_SPYPL_C) {
		NA_SPYPL_C = nA_SPYPL_C;
	}

	public String getNA_SPYPL_TEAM_C() {
		return NA_SPYPL_TEAM_C;
	}

	public void setNA_SPYPL_TEAM_C(String nA_SPYPL_TEAM_C) {
		NA_SPYPL_TEAM_C = nA_SPYPL_TEAM_C;
	}

	public String getPLTPE_LYNO() {
		return PLTPE_LYNO;
	}

	public void setPLTPE_LYNO(String pLTPE_LYNO) {
		PLTPE_LYNO = pLTPE_LYNO;
	}

	public String getPLTPE_SGNO() {
		return PLTPE_SGNO;
	}

	public void setPLTPE_SGNO(String pLTPE_SGNO) {
		PLTPE_SGNO = pLTPE_SGNO;
	}

	public String getPLTPE_BOX_CN() {
		return PLTPE_BOX_CN;
	}

	public void setPLTPE_BOX_CN(String pLTPE_BOX_CN) {
		PLTPE_BOX_CN = pLTPE_BOX_CN;
	}

	public String getBOX_WT() {
		return BOX_WT;
	}

	public void setBOX_WT(String bOX_WT) {
		BOX_WT = bOX_WT;
	}

	public String getBOX_BULK() {
		return BOX_BULK;
	}

	public void setBOX_BULK(String bOX_BULK) {
		BOX_BULK = bOX_BULK;
	}

	public String getWDTH_LEN() {
		return WDTH_LEN;
	}

	public void setWDTH_LEN(String wDTH_LEN) {
		WDTH_LEN = wDTH_LEN;
	}

	public String getLEN_LEN() {
		return LEN_LEN;
	}

	public void setLEN_LEN(String lEN_LEN) {
		LEN_LEN = lEN_LEN;
	}

	public String getWRS_HGHT() {
		return WRS_HGHT;
	}

	public void setWRS_HGHT(String wRS_HGHT) {
		WRS_HGHT = wRS_HGHT;
	}

	public String getBOX_WRS_YN() {
		return BOX_WRS_YN;
	}

	public void setBOX_WRS_YN(String bOX_WRS_YN) {
		BOX_WRS_YN = bOX_WRS_YN;
	}

	public String getBYNG_UPR() {
		return BYNG_UPR;
	}

	public void setBYNG_UPR(String bYNG_UPR) {
		BYNG_UPR = bYNG_UPR;
	}

	public String getSEL_UPR() {
		return SEL_UPR;
	}

	public void setSEL_UPR(String sEL_UPR) {
		SEL_UPR = sEL_UPR;
	}

	public String getWRS_WDTH_LEN() {
		return WRS_WDTH_LEN;
	}

	public void setWRS_WDTH_LEN(String wRS_WDTH_LEN) {
		WRS_WDTH_LEN = wRS_WDTH_LEN;
	}

	public String getWRS_LEN_LEN() {
		return WRS_LEN_LEN;
	}

	public void setWRS_LEN_LEN(String wRS_LEN_LEN) {
		WRS_LEN_LEN = wRS_LEN_LEN;
	}

	public String getNA_WRS_SZE_SEX_C() {
		return NA_WRS_SZE_SEX_C;
	}

	public void setNA_WRS_SZE_SEX_C(String nA_WRS_SZE_SEX_C) {
		NA_WRS_SZE_SEX_C = nA_WRS_SZE_SEX_C;
	}

	public String getNA_WRS_QLT_GRDC() {
		return NA_WRS_QLT_GRDC;
	}

	public void setNA_WRS_QLT_GRDC(String nA_WRS_QLT_GRDC) {
		NA_WRS_QLT_GRDC = nA_WRS_QLT_GRDC;
	}

	public String getNA_WRS_PROENV_DSC() {
		return NA_WRS_PROENV_DSC;
	}

	public void setNA_WRS_PROENV_DSC(String nA_WRS_PROENV_DSC) {
		NA_WRS_PROENV_DSC = nA_WRS_PROENV_DSC;
	}

	public String getGAP_ATTC_YN() {
		return GAP_ATTC_YN;
	}

	public void setGAP_ATTC_YN(String gAP_ATTC_YN) {
		GAP_ATTC_YN = gAP_ATTC_YN;
	}

	public String getNA_WRS_NACF_QLT_ATTC_C() {
		return NA_WRS_NACF_QLT_ATTC_C;
	}

	public void setNA_WRS_NACF_QLT_ATTC_C(String nA_WRS_NACF_QLT_ATTC_C) {
		NA_WRS_NACF_QLT_ATTC_C = nA_WRS_NACF_QLT_ATTC_C;
	}

	public String getNA_WRS_PDAA_C() {
		return NA_WRS_PDAA_C;
	}

	public void setNA_WRS_PDAA_C(String nA_WRS_PDAA_C) {
		NA_WRS_PDAA_C = nA_WRS_PDAA_C;
	}

	public String getACHMI_LATCNM() {
		return ACHMI_LATCNM;
	}

	public void setACHMI_LATCNM(String aCHMI_LATCNM) {
		ACHMI_LATCNM = aCHMI_LATCNM;
	}

	public String getACHMI_IGRQT() {
		return ACHMI_IGRQT;
	}

	public void setACHMI_IGRQT(String aCHMI_IGRQT) {
		ACHMI_IGRQT = aCHMI_IGRQT;
	}

	public String getFTLZ_PHAC_IGRDRT() {
		return FTLZ_PHAC_IGRDRT;
	}

	public void setFTLZ_PHAC_IGRDRT(String fTLZ_PHAC_IGRDRT) {
		FTLZ_PHAC_IGRDRT = fTLZ_PHAC_IGRDRT;
	}

	public String getFTLZ_NTRG_IGRDRT() {
		return FTLZ_NTRG_IGRDRT;
	}

	public void setFTLZ_NTRG_IGRDRT(String fTLZ_NTRG_IGRDRT) {
		FTLZ_NTRG_IGRDRT = fTLZ_NTRG_IGRDRT;
	}

	public String getFTLZ_KLM_IGRDRT() {
		return FTLZ_KLM_IGRDRT;
	}

	public void setFTLZ_KLM_IGRDRT(String fTLZ_KLM_IGRDRT) {
		FTLZ_KLM_IGRDRT = fTLZ_KLM_IGRDRT;
	}

	public String getFMACH_PATS_CLF_DSC() {
		return FMACH_PATS_CLF_DSC;
	}

	public void setFMACH_PATS_CLF_DSC(String fMACH_PATS_CLF_DSC) {
		FMACH_PATS_CLF_DSC = fMACH_PATS_CLF_DSC;
	}

	public String getNUMN_YN() {
		return NUMN_YN;
	}

	public void setNUMN_YN(String nUMN_YN) {
		NUMN_YN = nUMN_YN;
	}

	public String getGEN_LON_LMT_AM() {
		return GEN_LON_LMT_AM;
	}

	public void setGEN_LON_LMT_AM(String gEN_LON_LMT_AM) {
		GEN_LON_LMT_AM = gEN_LON_LMT_AM;
	}

	public String getCOMM_LON_LMT_AM() {
		return COMM_LON_LMT_AM;
	}

	public void setCOMM_LON_LMT_AM(String cOMM_LON_LMT_AM) {
		COMM_LON_LMT_AM = cOMM_LON_LMT_AM;
	}

	public String getNA_WRS_STD_UNT_C() {
		return NA_WRS_STD_UNT_C;
	}

	public void setNA_WRS_STD_UNT_C(String nA_WRS_STD_UNT_C) {
		NA_WRS_STD_UNT_C = nA_WRS_STD_UNT_C;
	}

	public String getWRS_SGRT() {
		return WRS_SGRT;
	}

	public void setWRS_SGRT(String wRS_SGRT) {
		WRS_SGRT = wRS_SGRT;
	}

	public String getWRS_SDL_DSC() {
		return WRS_SDL_DSC;
	}

	public void setWRS_SDL_DSC(String wRS_SDL_DSC) {
		WRS_SDL_DSC = wRS_SDL_DSC;
	}

	public String getWRS_AHL_CN() {
		return WRS_AHL_CN;
	}

	public void setWRS_AHL_CN(String wRS_AHL_CN) {
		WRS_AHL_CN = wRS_AHL_CN;
	}

	public String getMTRL_STD_THKN() {
		return MTRL_STD_THKN;
	}

	public void setMTRL_STD_THKN(String mTRL_STD_THKN) {
		MTRL_STD_THKN = mTRL_STD_THKN;
	}

	public String getCICL_WRS_STD_DMTR_CN() {
		return CICL_WRS_STD_DMTR_CN;
	}

	public void setCICL_WRS_STD_DMTR_CN(String cICL_WRS_STD_DMTR_CN) {
		CICL_WRS_STD_DMTR_CN = cICL_WRS_STD_DMTR_CN;
	}

	public String getCICL_WRS_STD_DPTH_CN() {
		return CICL_WRS_STD_DPTH_CN;
	}

	public void setCICL_WRS_STD_DPTH_CN(String cICL_WRS_STD_DPTH_CN) {
		CICL_WRS_STD_DPTH_CN = cICL_WRS_STD_DPTH_CN;
	}

	public String getFED_PD_METC() {
		return FED_PD_METC;
	}

	public void setFED_PD_METC(String fED_PD_METC) {
		FED_PD_METC = fED_PD_METC;
	}

	public String getSNUM_CNTN() {
		return SNUM_CNTN;
	}

	public void setSNUM_CNTN(String sNUM_CNTN) {
		SNUM_CNTN = sNUM_CNTN;
	}

	public String getCVS_QT() {
		return CVS_QT;
	}

	public void setCVS_QT(String cVS_QT) {
		CVS_QT = cVS_QT;
	}

	public String getCVS_NA_WRS_UNT_C() {
		return CVS_NA_WRS_UNT_C;
	}

	public void setCVS_NA_WRS_UNT_C(String cVS_NA_WRS_UNT_C) {
		CVS_NA_WRS_UNT_C = cVS_NA_WRS_UNT_C;
	}

	public String getWRS_FL_CN() {
		return WRS_FL_CN;
	}

	public void setWRS_FL_CN(String wRS_FL_CN) {
		WRS_FL_CN = wRS_FL_CN;
	}

	public String getKNET_WRS_NO() {
		return KNET_WRS_NO;
	}

	public void setKNET_WRS_NO(String kNET_WRS_NO) {
		KNET_WRS_NO = kNET_WRS_NO;
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

	public String getFMACH_FOMNM() {
		return FMACH_FOMNM;
	}

	public void setFMACH_FOMNM(String fMACH_FOMNM) {
		FMACH_FOMNM = fMACH_FOMNM;
	}

	public String getPRC_YN() {
		return PRC_YN;
	}

	public void setPRC_YN(String pRC_YN) {
		PRC_YN = pRC_YN;
	}

	public String getCUD_DSC() {
		return CUD_DSC;
	}

	public void setCUD_DSC(String cUD_DSC) {
		CUD_DSC = cUD_DSC;
	}

	public String getBOXPE_DLVG_UPR() {
		return BOXPE_DLVG_UPR;
	}

	public void setBOXPE_DLVG_UPR(String bOXPE_DLVG_UPR) {
		BOXPE_DLVG_UPR = bOXPE_DLVG_UPR;
	}

	public String getSLAM_PER_FEERT() {
		return SLAM_PER_FEERT;
	}

	public void setSLAM_PER_FEERT(String sLAM_PER_FEERT) {
		SLAM_PER_FEERT = sLAM_PER_FEERT;
	}

	public String getPMTN_SPT_PERS() {
		return PMTN_SPT_PERS;
	}

	public void setPMTN_SPT_PERS(String pMTN_SPT_PERS) {
		PMTN_SPT_PERS = pMTN_SPT_PERS;
	}

	public String getWRS_TRT_CMBR_CN() {
		return WRS_TRT_CMBR_CN;
	}

	public void setWRS_TRT_CMBR_CN(String wRS_TRT_CMBR_CN) {
		WRS_TRT_CMBR_CN = wRS_TRT_CMBR_CN;
	}

	public String getASP_SL_CNAM() {
		return ASP_SL_CNAM;
	}

	public void setASP_SL_CNAM(String aSP_SL_CNAM) {
		ASP_SL_CNAM = aSP_SL_CNAM;
	}

	public String getDEL_YN() {
		return DEL_YN;
	}

	public void setDEL_YN(String dEL_YN) {
		DEL_YN = dEL_YN;
	}

	public String getVLD_PRD_CN() {
		return VLD_PRD_CN;
	}

	public void setVLD_PRD_CN(String vLD_PRD_CN) {
		VLD_PRD_CN = vLD_PRD_CN;
	}

	public String getVLD_PRD_DSC() {
		return VLD_PRD_DSC;
	}

	public void setVLD_PRD_DSC(String vLD_PRD_DSC) {
		VLD_PRD_DSC = vLD_PRD_DSC;
	}

	public String getTR_STOP_DT() {
		return TR_STOP_DT;
	}

	public void setTR_STOP_DT(String tR_STOP_DT) {
		TR_STOP_DT = tR_STOP_DT;
	}

	public String getLIQ_UZ_DSC() {
		return LIQ_UZ_DSC;
	}

	public void setLIQ_UZ_DSC(String lIQ_UZ_DSC) {
		LIQ_UZ_DSC = lIQ_UZ_DSC;
	}

	public String getFMACH_DCRT() {
		return FMACH_DCRT;
	}

	public void setFMACH_DCRT(String fMACH_DCRT) {
		FMACH_DCRT = fMACH_DCRT;
	}

	public String getLWCRBN_ATTC_YN() {
		return LWCRBN_ATTC_YN;
	}

	public void setLWCRBN_ATTC_YN(String lWCRBN_ATTC_YN) {
		LWCRBN_ATTC_YN = lWCRBN_ATTC_YN;
	}

	public String getDSTR_TER_AMN_YN() {
		return DSTR_TER_AMN_YN;
	}

	public void setDSTR_TER_AMN_YN(String dSTR_TER_AMN_YN) {
		DSTR_TER_AMN_YN = dSTR_TER_AMN_YN;
	}

	public String getRSP_C_CNTN() {
		return RSP_C_CNTN;
	}

	public void setRSP_C_CNTN(String rSP_C_CNTN) {
		RSP_C_CNTN = rSP_C_CNTN;
	}

	public String getCNF_DMT() {
		return CNF_DMT;
	}

	public void setCNF_DMT(String cNF_DMT) {
		CNF_DMT = cNF_DMT;
	}

	public String getNA_C_RQ_REJ_RSNC() {
		return NA_C_RQ_REJ_RSNC;
	}

	public void setNA_C_RQ_REJ_RSNC(String nA_C_RQ_REJ_RSNC) {
		NA_C_RQ_REJ_RSNC = nA_C_RQ_REJ_RSNC;
	}

	public String getNA_C_RQ_STSC() {
		return NA_C_RQ_STSC;
	}

	public void setNA_C_RQ_STSC(String nA_C_RQ_STSC) {
		NA_C_RQ_STSC = nA_C_RQ_STSC;
	}

	public String getFSRG_DTM() {
		return FSRG_DTM;
	}

	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
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

	public String getPR_MRK_WHT() {
		return PR_MRK_WHT;
	}

	public void setPR_MRK_WHT(String pR_MRK_WHT) {
		PR_MRK_WHT = pR_MRK_WHT;
	}

	public String getPR_MRK_STD_BAS_WHT() {
		return PR_MRK_STD_BAS_WHT;
	}

	public void setPR_MRK_STD_BAS_WHT(String pR_MRK_STD_BAS_WHT) {
		PR_MRK_STD_BAS_WHT = pR_MRK_STD_BAS_WHT;
	}

	public String getPR_MRK_BAS_UNIT() {
		return PR_MRK_BAS_UNIT;
	}

	public void setPR_MRK_BAS_UNIT(String pR_MRK_BAS_UNIT) {
		PR_MRK_BAS_UNIT = pR_MRK_BAS_UNIT;
	}
	
	// 230414 차세대  (상품통합 )추가  
	public void setCUS_AG_LRG_DSC(String cUS_AG_LRG_DSC) {
		CUS_AG_LRG_DSC = cUS_AG_LRG_DSC;
	}

	public String getFTS_SET_YN() {
		return FTS_SET_YN;
	}

	public void setFTS_SET_YN(String fTS_SET_YN) {
		FTS_SET_YN = fTS_SET_YN;
	}

	public String getHACCP_ATTC_YN() {
		return HACCP_ATTC_YN;
	}

	public void setHACCP_ATTC_YN(String hACCP_ATTC_YN) {
		HACCP_ATTC_YN = hACCP_ATTC_YN;
	}

	public String getKC_ATTC_ESS_YN() {
		return KC_ATTC_ESS_YN;
	}

	public void setKC_ATTC_ESS_YN(String kC_ATTC_ESS_YN) {
		KC_ATTC_ESS_YN = kC_ATTC_ESS_YN;
	}

	public String getLIQ_DSC() {
		return LIQ_DSC;
	}

	public void setLIQ_DSC(String lIQ_DSC) {
		LIQ_DSC = lIQ_DSC;
	}

	public String getMN1_HSH_WRS_YN() {
		return MN1_HSH_WRS_YN;
	}

	public void setMN1_HSH_WRS_YN(String mN1_HSH_WRS_YN) {
		MN1_HSH_WRS_YN = mN1_HSH_WRS_YN;
	}

	public String getNACF_XUSE_WRS_YN() {
		return NACF_XUSE_WRS_YN;
	}

	public void setNACF_XUSE_WRS_YN(String nACF_XUSE_WRS_YN) {
		NACF_XUSE_WRS_YN = nACF_XUSE_WRS_YN;
	}

	public String getNEW_SEX_DSC() {
		return NEW_SEX_DSC;
	}

	public void setNEW_SEX_DSC(String nEW_SEX_DSC) {
		NEW_SEX_DSC = nEW_SEX_DSC;
	}

	public String getNEW_SSN_DSC() {
		return NEW_SSN_DSC;
	}

	public void setNEW_SSN_DSC(String nEW_SSN_DSC) {
		NEW_SSN_DSC = nEW_SSN_DSC;
	}

	public String getONL_OBJ_YN() {
		return ONL_OBJ_YN;
	}

	public void setONL_OBJ_YN(String oNL_OBJ_YN) {
		ONL_OBJ_YN = oNL_OBJ_YN;
	}

	public String getPAK_METH_DSC() {
		return PAK_METH_DSC;
	}

	public void setPAK_METH_DSC(String pAK_METH_DSC) {
		PAK_METH_DSC = pAK_METH_DSC;
	}

	public String getPAK_QLT_DSC() {
		return PAK_QLT_DSC;
	}

	public void setPAK_QLT_DSC(String pAK_QLT_DSC) {
		PAK_QLT_DSC = pAK_QLT_DSC;
	}

	public String getPLG_WRS_KD() {
		return PLG_WRS_KD;
	}

	public void setPLG_WRS_KD(String pLG_WRS_KD) {
		PLG_WRS_KD = pLG_WRS_KD;
	}

	public String getWRS_BIZTP_DSC() {
		return WRS_BIZTP_DSC;
	}

	public void setWRS_BIZTP_DSC(String wRS_BIZTP_DSC) {
		WRS_BIZTP_DSC = wRS_BIZTP_DSC;
	}

	public String getEDI_IF_ID() {
		return EDI_IF_ID;
	}

	public void setEDI_IF_ID(String eDI_IF_ID) {
		EDI_IF_ID = eDI_IF_ID;
	}

	public String get공병명() {
		return 공병명;
	}

	public void set공병명(String 공병명) {
		this.공병명 = 공병명;
	}

	public String get공상자명() {
		return 공상자명;
	}

	public void set공상자명(String 공상자명) {
		this.공상자명 = 공상자명;
	}

	public String get공급처명() {
		return 공급처명;
	}

	public void set수요처명(String 공급처명) {
		this.공급처명 = 공급처명;
	}
}