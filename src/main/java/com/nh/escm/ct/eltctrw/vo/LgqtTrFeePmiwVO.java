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

public class LgqtTrFeePmiwVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;	
	private String ELT_CTRW_NO                           ;//전자계약서번호
	private String PMIW_KDC                               ;//약정서종류
	private String FEERT_HMW_UNDR                        ;//수수료율 1억미만
	private String FEERT_HMW1_HMW2                       ;//수수료율 1/2억
	private String FEERT_HMW2_HMW3                       ;//수수료율 2/3억
	private String FEERT_HMW3_HMW5                       ;//수수료율 3/5억
	private String FEERT_HMW5_HMW10                      ;//수수료율 5/10억
	private String FEERT_HMW10_OVR                       ;//수수료율 10억이상
	
	private String FEERT_HMW_UNDR_TINM                   ;//수수료율 1억미만
	private String FEERT_HMW1_HMW2_TINM                  ;//수수료율 1/2억
	private String FEERT_HMW2_HMW3_TINM                  ;//수수료율 2/3억
	private String FEERT_HMW3_HMW5_TINM                  ;//수수료율 3/5억
	private String FEERT_HMW5_HMW10_TINM                 ;//수수료율 5/10억
	private String FEERT_HMW10_OVR_TINM                  ;//수수료율 10억이상
	private String FSRG_DTM                              ;//최초등록일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String FS_RGM                                ;//최초등록자                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	private String LSCHG_DTM                             ;//최종변경일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String LS_CHGM                               ;//최종변경자  
	private String SCTR_SJT;		 // 특약사항		
	
	public String getFEERT_HMW_UNDR_TINM() {
		return FEERT_HMW_UNDR_TINM;
	}

	public void setFEERT_HMW_UNDR_TINM(String fEERT_HMW_UNDR_TINM) {
		FEERT_HMW_UNDR_TINM = fEERT_HMW_UNDR_TINM;
	}

	public String getFEERT_HMW1_HMW2_TINM() {
		return FEERT_HMW1_HMW2_TINM;
	}

	public void setFEERT_HMW1_HMW2_TINM(String fEERT_HMW1_HMW2_TINM) {
		FEERT_HMW1_HMW2_TINM = fEERT_HMW1_HMW2_TINM;
	}

	public String getFEERT_HMW2_HMW3_TINM() {
		return FEERT_HMW2_HMW3_TINM;
	}

	public void setFEERT_HMW2_HMW3_TINM(String fEERT_HMW2_HMW3_TINM) {
		FEERT_HMW2_HMW3_TINM = fEERT_HMW2_HMW3_TINM;
	}

	public String getFEERT_HMW3_HMW5_TINM() {
		return FEERT_HMW3_HMW5_TINM;
	}

	public void setFEERT_HMW3_HMW5_TINM(String fEERT_HMW3_HMW5_TINM) {
		FEERT_HMW3_HMW5_TINM = fEERT_HMW3_HMW5_TINM;
	}

	public String getFEERT_HMW5_HMW10_TINM() {
		return FEERT_HMW5_HMW10_TINM;
	}

	public void setFEERT_HMW5_HMW10_TINM(String fEERT_HMW5_HMW10_TINM) {
		FEERT_HMW5_HMW10_TINM = fEERT_HMW5_HMW10_TINM;
	}

	public String getFEERT_HMW10_OVR_TINM() {
		return FEERT_HMW10_OVR_TINM;
	}

	public void setFEERT_HMW10_OVR_TINM(String fEERT_HMW10_OVR_TINM) {
		FEERT_HMW10_OVR_TINM = fEERT_HMW10_OVR_TINM;
	}
	private String DML_CODE;
	private String TMP_ELT_CTRW_NO                       ;//임시전자계약서번호
	
	private String CHG_SQNO                              ;//변경일련번호

	public String getCHG_SQNO() {
		return CHG_SQNO;
	}

	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}
	
	

	public String getTMP_ELT_CTRW_NO() {
		return TMP_ELT_CTRW_NO;
	}

	public void setTMP_ELT_CTRW_NO(String tMP_ELT_CTRW_NO) {
		TMP_ELT_CTRW_NO = tMP_ELT_CTRW_NO;
	}
	
	public String getDML_CODE() {
		return DML_CODE;
	}
	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}
	
	
	
	public String getPMIW_KDC() {
		return PMIW_KDC;
	}
	public void setPMIW_KDC(String pMIW_KDC) {
		PMIW_KDC = pMIW_KDC;
	}
	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}
	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}
	public String getFEERT_HMW_UNDR() {
		return FEERT_HMW_UNDR;
	}
	public void setFEERT_HMW_UNDR(String fEERT_HMW_UNDR) {
		FEERT_HMW_UNDR = fEERT_HMW_UNDR;
	}
	public String getFEERT_HMW1_HMW2() {
		return FEERT_HMW1_HMW2;
	}
	public void setFEERT_HMW1_HMW2(String fEERT_HMW1_HMW2) {
		FEERT_HMW1_HMW2 = fEERT_HMW1_HMW2;
	}
	public String getFEERT_HMW2_HMW3() {
		return FEERT_HMW2_HMW3;
	}
	public void setFEERT_HMW2_HMW3(String fEERT_HMW2_HMW3) {
		FEERT_HMW2_HMW3 = fEERT_HMW2_HMW3;
	}
	public String getFEERT_HMW3_HMW5() {
		return FEERT_HMW3_HMW5;
	}
	public void setFEERT_HMW3_HMW5(String fEERT_HMW3_HMW5) {
		FEERT_HMW3_HMW5 = fEERT_HMW3_HMW5;
	}
	public String getFEERT_HMW5_HMW10() {
		return FEERT_HMW5_HMW10;
	}
	public void setFEERT_HMW5_HMW10(String fEERT_HMW5_HMW10) {
		FEERT_HMW5_HMW10 = fEERT_HMW5_HMW10;
	}
	public String getFEERT_HMW10_OVR() {
		return FEERT_HMW10_OVR;
	}
	public void setFEERT_HMW10_OVR(String fEERT_HMW10_OVR) {
		FEERT_HMW10_OVR = fEERT_HMW10_OVR;
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
	@Override
	public String toString() {
		return "LgqtTrFeePmiwVO [ELT_CTRW_NO=" + ELT_CTRW_NO
				+ ", FEERT_HMW_UNDR=" + FEERT_HMW_UNDR + ", FEERT_HMW1_HMW2="
				+ FEERT_HMW1_HMW2 + ", FEERT_HMW2_HMW3=" + FEERT_HMW2_HMW3
				+ ", FEERT_HMW3_HMW5=" + FEERT_HMW3_HMW5
				+ ", FEERT_HMW5_HMW10=" + FEERT_HMW5_HMW10
				+ ", FEERT_HMW10_OVR=" + FEERT_HMW10_OVR + ", FSRG_DTM="
				+ FSRG_DTM + ", FS_RGM=" + FS_RGM + ", LSCHG_DTM=" + LSCHG_DTM
				+ ", LS_CHGM=" + LS_CHGM + "]";
	}

	public String getSCTR_SJT() {
		return SCTR_SJT;
	}

	public void setSCTR_SJT(String sCTR_SJT) {
		SCTR_SJT = sCTR_SJT;
	}
	
	
	
}

 