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

public class DlvgCompEmpDspcPmiwVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;	
	private String ELT_CTRW_NO                           ;//전자계약서번호    
	private String DML_CODE;
	private String TMP_ELT_CTRW_NO                       ;//임시전자계약서번호
	private String PMIW_KDC           ; //약정서종류' ;
	private String CHG_SQNO           ; //변경일련번호' ;
	private String DSPC_BASS          ; //파견근거' ;
	private String LBRCS_DRTCS_CNTN1  ; //인건비직정비내용1' ;
	private String LBRCS_DRTCS_CNTN2  ; //인건비직정비내용2' ;
	private String LBRCS_DRTCS_AM1    ; //인건비직정비소요액1' ;
	private String LBRCS_DRTCS_AM2    ; //인건비직정비소요액2' ;
	private String LBRCS_DRTCS_RMK1   ; //인건비직정비비고1' ;
	private String LBRCS_DRTCS_RMK2   ; //인건비직정비비고2' ;
	private String LBRCS_OHCS_CNTN1   ; //인건비간접비내용1' ;
	private String LBRCS_OHCS_CNTN2   ; //인건비간접비내용2' ;
	private String LBRCS_OHCS_CNTN3   ; //인건비간접비내용3' ;
	private String LBRCS_OHCS_AM1     ; //인건비간접비소용액1' ;
	private String LBRCS_OHCS_AM2     ; //인건비간접비소용액2' ;
	private String LBRCS_OHCS_AM3     ; //인건비간접비소용액3' ;
	private String LBRCS_OHCS_RMK1    ; //인건비간접비비고1' ;
	private String LBRCS_OHCS_RMK2    ; //인건비간접비비고2' ;
	private String LBRCS_OHCS_RMK3    ; //인건비간접비비고3' ;
	private String FI_BNF_CNTN1       ; //복리후생비내용1' ;
	private String FI_BNF_CNTN2       ; //복리후생비내용2' ;
	private String FI_BNF_CNTN3       ; //복리후생비내용3' ;
	private String FI_BNF_AM1         ; //복리후생비소용액1' ;
	private String FI_BNF_AM2         ; //복리후생비소용액2' ;
	private String FI_BNF_AM3         ; //복리후생비소용액3' ;
	private String FI_BNF_RMK1        ; //복리후생비비고1' ;
	private String FI_BNF_RMK2        ; //복리후생비비고2' ;
	private String FI_BNF_RMK3        ; //복리후생비비고3' ;
	private String ETC_TXPN_CNTN      ; //기타제경비내용' ;
	private String ETC_TXPN_AM        ; //기타제경비소용액' ;
	private String ETC_TXPN_RMK       ; //기타제경비비고' ;
	private String FSRG_DTM           ; //최초등록일시' ;
	private String FS_RGM             ; //최초등록자' ;
	private String LSCHG_DTM          ; //최종변경일시' ;
	private String LS_CHGM            ; //최종변경자' ;
	private String CTR_CHRR_RTO       ; //계약 담당자 
	private String CTR_PATN_RTO       ; //계약 상대자
	private String SCTR_SJT;		 // 특약사항		
	
	
	
	public String getCTR_CHRR_RTO() {
		return CTR_CHRR_RTO;
	}
	public void setCTR_CHRR_RTO(String cTR_CHRR_RTO) {
		CTR_CHRR_RTO = cTR_CHRR_RTO;
	}
	public String getCTR_PATN_RTO() {
		return CTR_PATN_RTO;
	}
	public void setCTR_PATN_RTO(String cTR_PATN_RTO) {
		CTR_PATN_RTO = cTR_PATN_RTO;
	}
	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}
	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}
	public String getDML_CODE() {
		return DML_CODE;
	}
	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}
	public String getTMP_ELT_CTRW_NO() {
		return TMP_ELT_CTRW_NO;
	}
	public void setTMP_ELT_CTRW_NO(String tMP_ELT_CTRW_NO) {
		TMP_ELT_CTRW_NO = tMP_ELT_CTRW_NO;
	}
	public String getPMIW_KDC() {
		return PMIW_KDC;
	}
	public void setPMIW_KDC(String pMIW_KDC) {
		PMIW_KDC = pMIW_KDC;
	}
	public String getCHG_SQNO() {
		return CHG_SQNO;
	}
	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}
	public String getDSPC_BASS() {
		return DSPC_BASS;
	}
	public void setDSPC_BASS(String dSPC_BASS) {
		DSPC_BASS = dSPC_BASS;
	}
	public String getLBRCS_DRTCS_CNTN1() {
		return LBRCS_DRTCS_CNTN1;
	}
	public void setLBRCS_DRTCS_CNTN1(String lBRCS_DRTCS_CNTN1) {
		LBRCS_DRTCS_CNTN1 = lBRCS_DRTCS_CNTN1;
	}
	public String getLBRCS_DRTCS_CNTN2() {
		return LBRCS_DRTCS_CNTN2;
	}
	public void setLBRCS_DRTCS_CNTN2(String lBRCS_DRTCS_CNTN2) {
		LBRCS_DRTCS_CNTN2 = lBRCS_DRTCS_CNTN2;
	}
	public String getLBRCS_DRTCS_AM1() {
		return LBRCS_DRTCS_AM1;
	}
	public void setLBRCS_DRTCS_AM1(String lBRCS_DRTCS_AM1) {
		LBRCS_DRTCS_AM1 = lBRCS_DRTCS_AM1;
	}
	public String getLBRCS_DRTCS_AM2() {
		return LBRCS_DRTCS_AM2;
	}
	public void setLBRCS_DRTCS_AM2(String lBRCS_DRTCS_AM2) {
		LBRCS_DRTCS_AM2 = lBRCS_DRTCS_AM2;
	}
	public String getLBRCS_DRTCS_RMK1() {
		return LBRCS_DRTCS_RMK1;
	}
	public void setLBRCS_DRTCS_RMK1(String lBRCS_DRTCS_RMK1) {
		LBRCS_DRTCS_RMK1 = lBRCS_DRTCS_RMK1;
	}
	public String getLBRCS_DRTCS_RMK2() {
		return LBRCS_DRTCS_RMK2;
	}
	public void setLBRCS_DRTCS_RMK2(String lBRCS_DRTCS_RMK2) {
		LBRCS_DRTCS_RMK2 = lBRCS_DRTCS_RMK2;
	}
	public String getLBRCS_OHCS_CNTN1() {
		return LBRCS_OHCS_CNTN1;
	}
	public void setLBRCS_OHCS_CNTN1(String lBRCS_OHCS_CNTN1) {
		LBRCS_OHCS_CNTN1 = lBRCS_OHCS_CNTN1;
	}
	public String getLBRCS_OHCS_CNTN2() {
		return LBRCS_OHCS_CNTN2;
	}
	public void setLBRCS_OHCS_CNTN2(String lBRCS_OHCS_CNTN2) {
		LBRCS_OHCS_CNTN2 = lBRCS_OHCS_CNTN2;
	}
	public String getLBRCS_OHCS_CNTN3() {
		return LBRCS_OHCS_CNTN3;
	}
	public void setLBRCS_OHCS_CNTN3(String lBRCS_OHCS_CNTN3) {
		LBRCS_OHCS_CNTN3 = lBRCS_OHCS_CNTN3;
	}
	public String getLBRCS_OHCS_AM1() {
		return LBRCS_OHCS_AM1;
	}
	public void setLBRCS_OHCS_AM1(String lBRCS_OHCS_AM1) {
		LBRCS_OHCS_AM1 = lBRCS_OHCS_AM1;
	}
	public String getLBRCS_OHCS_AM2() {
		return LBRCS_OHCS_AM2;
	}
	public void setLBRCS_OHCS_AM2(String lBRCS_OHCS_AM2) {
		LBRCS_OHCS_AM2 = lBRCS_OHCS_AM2;
	}
	public String getLBRCS_OHCS_AM3() {
		return LBRCS_OHCS_AM3;
	}
	public void setLBRCS_OHCS_AM3(String lBRCS_OHCS_AM3) {
		LBRCS_OHCS_AM3 = lBRCS_OHCS_AM3;
	}
	public String getLBRCS_OHCS_RMK1() {
		return LBRCS_OHCS_RMK1;
	}
	public void setLBRCS_OHCS_RMK1(String lBRCS_OHCS_RMK1) {
		LBRCS_OHCS_RMK1 = lBRCS_OHCS_RMK1;
	}
	public String getLBRCS_OHCS_RMK2() {
		return LBRCS_OHCS_RMK2;
	}
	public void setLBRCS_OHCS_RMK2(String lBRCS_OHCS_RMK2) {
		LBRCS_OHCS_RMK2 = lBRCS_OHCS_RMK2;
	}
	public String getLBRCS_OHCS_RMK3() {
		return LBRCS_OHCS_RMK3;
	}
	public void setLBRCS_OHCS_RMK3(String lBRCS_OHCS_RMK3) {
		LBRCS_OHCS_RMK3 = lBRCS_OHCS_RMK3;
	}
	public String getFI_BNF_CNTN1() {
		return FI_BNF_CNTN1;
	}
	public void setFI_BNF_CNTN1(String fI_BNF_CNTN1) {
		FI_BNF_CNTN1 = fI_BNF_CNTN1;
	}
	public String getFI_BNF_CNTN2() {
		return FI_BNF_CNTN2;
	}
	public void setFI_BNF_CNTN2(String fI_BNF_CNTN2) {
		FI_BNF_CNTN2 = fI_BNF_CNTN2;
	}
	public String getFI_BNF_CNTN3() {
		return FI_BNF_CNTN3;
	}
	public void setFI_BNF_CNTN3(String fI_BNF_CNTN3) {
		FI_BNF_CNTN3 = fI_BNF_CNTN3;
	}
	public String getFI_BNF_AM1() {
		return FI_BNF_AM1;
	}
	public void setFI_BNF_AM1(String fI_BNF_AM1) {
		FI_BNF_AM1 = fI_BNF_AM1;
	}
	public String getFI_BNF_AM2() {
		return FI_BNF_AM2;
	}
	public void setFI_BNF_AM2(String fI_BNF_AM2) {
		FI_BNF_AM2 = fI_BNF_AM2;
	}
	public String getFI_BNF_AM3() {
		return FI_BNF_AM3;
	}
	public void setFI_BNF_AM3(String fI_BNF_AM3) {
		FI_BNF_AM3 = fI_BNF_AM3;
	}
	public String getFI_BNF_RMK1() {
		return FI_BNF_RMK1;
	}
	public void setFI_BNF_RMK1(String fI_BNF_RMK1) {
		FI_BNF_RMK1 = fI_BNF_RMK1;
	}
	public String getFI_BNF_RMK2() {
		return FI_BNF_RMK2;
	}
	public void setFI_BNF_RMK2(String fI_BNF_RMK2) {
		FI_BNF_RMK2 = fI_BNF_RMK2;
	}
	public String getFI_BNF_RMK3() {
		return FI_BNF_RMK3;
	}
	public void setFI_BNF_RMK3(String fI_BNF_RMK3) {
		FI_BNF_RMK3 = fI_BNF_RMK3;
	}
	public String getETC_TXPN_CNTN() {
		return ETC_TXPN_CNTN;
	}
	public void setETC_TXPN_CNTN(String eTC_TXPN_CNTN) {
		ETC_TXPN_CNTN = eTC_TXPN_CNTN;
	}
	public String getETC_TXPN_AM() {
		return ETC_TXPN_AM;
	}
	public void setETC_TXPN_AM(String eTC_TXPN_AM) {
		ETC_TXPN_AM = eTC_TXPN_AM;
	}
	public String getETC_TXPN_RMK() {
		return ETC_TXPN_RMK;
	}
	public void setETC_TXPN_RMK(String eTC_TXPN_RMK) {
		ETC_TXPN_RMK = eTC_TXPN_RMK;
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
	
	
	
	
	
}

 