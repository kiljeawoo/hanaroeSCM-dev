package com.nh.escm.pds.company.vo;

public class CompanyReqVO extends CompanyVO {
	private String VAN_C_RQ_NO;			// seq
	private String TGRM_DSC; 				// 00.전문구분코드
	private String TMS_DT;						// 01.전송일자
	private String TMS_SQNO;					// 02.전송번호
	private String SVC_NM;						// 03.서비스명
	private String NA_C_RQ_NO;				// 04.경제통합코드신청번호
	private String NA_C_RQ_OBJ_DSC;	// 05.경제통합코드신청대상구분코드 (거래처의 경우 2)
	private String CTCPL_TELNO;				// 06.연락처전화번호(14자리)
	private String RQ_CNTN;					// 07.신청내용
	private String APV_RQ_NA_TRPLC;	// 08.승인신청경제통합거래처코드
	private String FSRGMN_ENO;			// 09.최초등록자개인번호
	private String FSRGMN_NA_TRPLC;	// 10.최초등록자경제통합거래처코드
	private String FSRG_DTM;  			    // 11.최초등록일시
	private String LSCHG_DTM;       		// 12.최종변경일시
	private String LS_CHGM;         			// 13.최종변경자
	
	public String getTGRM_DSC() {
		return TGRM_DSC;
	}
	public void setTGRM_DSC(String tGRM_DSC) {
		TGRM_DSC = tGRM_DSC;
	}
	public String getTMS_DT() {
		return TMS_DT;
	}
	public void setTMS_DT(String tMS_DT) {
		TMS_DT = tMS_DT;
	}
	public String getTMS_SQNO() {
		return TMS_SQNO;
	}
	public void setTMS_SQNO(String tMS_SQNO) {
		TMS_SQNO = tMS_SQNO;
	}
	public String getSVC_NM() {
		return SVC_NM;
	}
	public void setSVC_NM(String sVC_NM) {
		SVC_NM = sVC_NM;
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
	public String getAPV_RQ_NA_TRPLC() {
		return APV_RQ_NA_TRPLC;
	}
	public void setAPV_RQ_NA_TRPLC(String aPV_RQ_NA_TRPLC) {
		APV_RQ_NA_TRPLC = aPV_RQ_NA_TRPLC;
	}
	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}
	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}
	public String getFSRGMN_NA_TRPLC() {
		return FSRGMN_NA_TRPLC;
	}
	public void setFSRGMN_NA_TRPLC(String fSRGMN_NA_TRPLC) {
		FSRGMN_NA_TRPLC = fSRGMN_NA_TRPLC;
	}
	public String getVAN_C_RQ_NO() {
		return VAN_C_RQ_NO;
	}
	public void setVAN_C_RQ_NO(String vAN_C_RQ_NO) {
		VAN_C_RQ_NO = vAN_C_RQ_NO;
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
}