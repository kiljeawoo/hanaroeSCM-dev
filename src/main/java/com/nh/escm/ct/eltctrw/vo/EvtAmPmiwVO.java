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

public class EvtAmPmiwVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;	
	private String ELT_CTRW_NO                           ;//전자계약서번호
	private String PMIW_KDC                              ;//전자계약서번호
	
	private String TMP_ELT_CTRW_NO                       ;//임시전자계약서번호
	
	private String CHG_SQNO                              ;//변경일련번호
	private String DML_CODE;
	
	
	private String EVT_NM            ;// 행사 명칭
	private String EVT_CNTN            ;// 행사내용
	private String EVT_PLCNM           ;// 행사장소
	private String EVT_WRS_NM          ;// 행사상품명
	private String EVT_RTO_CNTN        ;// 행사행사상품및행사율내용
	private String CTR_PATN_AM         ;// 계약상대자금액
	private String CTR_CHRR_AM         ;// 계약담당자금액
	private String AM_SS               ;// 금액계
	private String CTR_PATN_RTO        ;// 계약상대자비율
	private String CTR_CHRR_RTO        ;// 계약담당자비율
	private String RTO_SS              ;// 비율계
	private String CTR_PATN_ALOT_RTO   ;// 계약상대자비율
	private String CTR_CHRR_ALOT_RTO   ;// 계약담당자비율
	private String ALOT_RTO_SS         ;// 비율(액수)계
	
	private String ALL_XPC_PMTN_CST   ;// 전체 예상판촉비용
	private String CLCN_BASS         ;// 산출근거
	
	
	
	private String FSRG_DTM        	;// 최초등록일시
	private String FS_RGM 				;// 최초등록자
	private String LSCHG_DTM 			;// 최종변경일시
	private String LS_CHGM 			;// 최종변경자
	private String SCTR_SJT;		 // 특약사항		
	
	
	
	
	
	public String getALL_XPC_PMTN_CST() {
		return ALL_XPC_PMTN_CST;
	}
	public void setALL_XPC_PMTN_CST(String aLL_XPC_PMTN_CST) {
		ALL_XPC_PMTN_CST = aLL_XPC_PMTN_CST;
	}
	public String getCLCN_BASS() {
		return CLCN_BASS;
	}
	public void setCLCN_BASS(String cLCN_BASS) {
		CLCN_BASS = cLCN_BASS;
	}
	public String getEVT_NM() {
		return EVT_NM;
	}
	public void setEVT_NM(String eVT_NM) {
		EVT_NM = eVT_NM;
	}
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
	public String getPMIW_KDC() {
		return PMIW_KDC;
	}
	public void setPMIW_KDC(String pMIW_KDC) {
		PMIW_KDC = pMIW_KDC;
	}
	public String getTMP_ELT_CTRW_NO() {
		return TMP_ELT_CTRW_NO;
	}
	public void setTMP_ELT_CTRW_NO(String tMP_ELT_CTRW_NO) {
		TMP_ELT_CTRW_NO = tMP_ELT_CTRW_NO;
	}
	public String getCHG_SQNO() {
		return CHG_SQNO;
	}
	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}
	public String getEVT_CNTN() {
		return EVT_CNTN;
	}
	public void setEVT_CNTN(String eVT_CNTN) {
		EVT_CNTN = eVT_CNTN;
	}
	public String getEVT_PLCNM() {
		return EVT_PLCNM;
	}
	public void setEVT_PLCNM(String eVT_PLCNM) {
		EVT_PLCNM = eVT_PLCNM;
	}
	public String getEVT_WRS_NM() {
		return EVT_WRS_NM;
	}
	public void setEVT_WRS_NM(String eVT_WRS_NM) {
		EVT_WRS_NM = eVT_WRS_NM;
	}
	public String getEVT_RTO_CNTN() {
		return EVT_RTO_CNTN;
	}
	public void setEVT_RTO_CNTN(String eVT_RTO_CNTN) {
		EVT_RTO_CNTN = eVT_RTO_CNTN;
	}
	public String getCTR_PATN_AM() {
		return CTR_PATN_AM;
	}
	public void setCTR_PATN_AM(String cTR_PATN_AM) {
		CTR_PATN_AM = cTR_PATN_AM;
	}
	public String getCTR_CHRR_AM() {
		return CTR_CHRR_AM;
	}
	public void setCTR_CHRR_AM(String cTR_CHRR_AM) {
		CTR_CHRR_AM = cTR_CHRR_AM;
	}
	public String getAM_SS() {
		return AM_SS;
	}
	public void setAM_SS(String aM_SS) {
		AM_SS = aM_SS;
	}
	public String getCTR_PATN_RTO() {
		return CTR_PATN_RTO;
	}
	public void setCTR_PATN_RTO(String cTR_PATN_RTO) {
		CTR_PATN_RTO = cTR_PATN_RTO;
	}
	public String getCTR_CHRR_RTO() {
		return CTR_CHRR_RTO;
	}
	public void setCTR_CHRR_RTO(String cTR_CHRR_RTO) {
		CTR_CHRR_RTO = cTR_CHRR_RTO;
	}
	public String getRTO_SS() {
		return RTO_SS;
	}
	public void setRTO_SS(String rTO_SS) {
		RTO_SS = rTO_SS;
	}
	public String getCTR_PATN_ALOT_RTO() {
		return CTR_PATN_ALOT_RTO;
	}
	public void setCTR_PATN_ALOT_RTO(String cTR_PATN_ALOT_RTO) {
		CTR_PATN_ALOT_RTO = cTR_PATN_ALOT_RTO;
	}
	public String getCTR_CHRR_ALOT_RTO() {
		return CTR_CHRR_ALOT_RTO;
	}
	public void setCTR_CHRR_ALOT_RTO(String cTR_CHRR_ALOT_RTO) {
		CTR_CHRR_ALOT_RTO = cTR_CHRR_ALOT_RTO;
	}
	public String getALOT_RTO_SS() {
		return ALOT_RTO_SS;
	}
	public void setALOT_RTO_SS(String aLOT_RTO_SS) {
		ALOT_RTO_SS = aLOT_RTO_SS;
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

 