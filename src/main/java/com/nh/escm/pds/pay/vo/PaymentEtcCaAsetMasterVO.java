package com.nh.escm.pds.pay.vo;

import java.io.Serializable;

/**
 * 기타당좌자산회수내역  Master VO
 * @author HyeRim.Oh
 *
 */
public class PaymentEtcCaAsetMasterVO implements Serializable{
	
	private static final long serialVersionUID = 20150630L;
	
	private long RN; //페이지번호
	
	private String NA_BZPLC;  //경제통합사업장코드
	private String NA_TEAM_C;  //경제통합팀코드
	private String SLP_DT;  //전표일자
	private String NA_SLPNO;  //경제통합 전표번호
	private String NA_TR_DSC;  //경제통합 거래구분코드
	private String NA_CRC_CAN_DSC;  //경제통합 정정취소구분코드
	private String NA_TRPL_C;  //경제통합 거래처코드
	private String SHRT_CLNTNM;  //단축사업장명
	private long ETC_CA_ASET_RTU_QT;  //기타당좌자산 반환수량
	private long RTU_AM;  //반환금액
	private long RTU_FEE;  //반환수수료
	private long RTU_FEE_VAT;  //반환수수료 부가세
	private String OSLIP_DT;  //원전표일자
	private String OSLIP_NA_SLPNO;  //원전표번호
	//private Date WDR_PLA_DT;  //회수예정일
	private String WDR_PLA_DT;  //회수예정일
	private String RMK_CNTN;  //비고
	private String VHC_TYPE;  //차량구분
	private String VHC_NO;  //차량코드
	private String UPYAM_OCU_YN;  //미수금계정여부
	
	public long getRN() {
		return RN;
	}
	public void setRN(long rN) {
		RN = rN;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getSLP_DT() {
		return SLP_DT;
	}
	public void setSLP_DT(String sLP_DT) {
		SLP_DT = sLP_DT;
	}
	public String getNA_SLPNO() {
		return NA_SLPNO;
	}
	public void setNA_SLPNO(String nA_SLPNO) {
		NA_SLPNO = nA_SLPNO;
	}
	public String getNA_TR_DSC() {
		return NA_TR_DSC;
	}
	public void setNA_TR_DSC(String nA_TR_DSC) {
		NA_TR_DSC = nA_TR_DSC;
	}
	public String getNA_CRC_CAN_DSC() {
		return NA_CRC_CAN_DSC;
	}
	public void setNA_CRC_CAN_DSC(String nA_CRC_CAN_DSC) {
		NA_CRC_CAN_DSC = nA_CRC_CAN_DSC;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getSHRT_CLNTNM() {
		return SHRT_CLNTNM;
	}
	public void setSHRT_CLNTNM(String sHRT_CLNTNM) {
		SHRT_CLNTNM = sHRT_CLNTNM;
	}
	public long getETC_CA_ASET_RTU_QT() {
		return ETC_CA_ASET_RTU_QT;
	}
	public void setETC_CA_ASET_RTU_QT(long eTC_CA_ASET_RTU_QT) {
		ETC_CA_ASET_RTU_QT = eTC_CA_ASET_RTU_QT;
	}
	public long getRTU_AM() {
		return RTU_AM;
	}
	public void setRTU_AM(long rTU_AM) {
		RTU_AM = rTU_AM;
	}
	public long getRTU_FEE() {
		return RTU_FEE;
	}
	public void setRTU_FEE(long rTU_FEE) {
		RTU_FEE = rTU_FEE;
	}
	public long getRTU_FEE_VAT() {
		return RTU_FEE_VAT;
	}
	public void setRTU_FEE_VAT(long rTU_FEE_VAT) {
		RTU_FEE_VAT = rTU_FEE_VAT;
	}
	public String getOSLIP_DT() {
		return OSLIP_DT;
	}
	public void setOSLIP_DT(String oSLIP_DT) {
		OSLIP_DT = oSLIP_DT;
	}
	public String getOSLIP_NA_SLPNO() {
		return OSLIP_NA_SLPNO;
	}
	public void setOSLIP_NA_SLPNO(String oSLIP_NA_SLPNO) {
		OSLIP_NA_SLPNO = oSLIP_NA_SLPNO;
	}
	public String getWDR_PLA_DT() {
		return WDR_PLA_DT;
	}
	public void setWDR_PLA_DT(String wDR_PLA_DT) {
		WDR_PLA_DT = wDR_PLA_DT;
	}
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}
	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}
	public String getVHC_TYPE() {
		return VHC_TYPE;
	}
	public void setVHC_TYPE(String vHC_TYPE) {
		VHC_TYPE = vHC_TYPE;
	}
	public String getVHC_NO() {
		return VHC_NO;
	}
	public void setVHC_NO(String vHC_NO) {
		VHC_NO = vHC_NO;
	}
	public String getUPYAM_OCU_YN() {
		return UPYAM_OCU_YN;
	}
	public void setUPYAM_OCU_YN(String uPYAM_OCU_YN) {
		UPYAM_OCU_YN = uPYAM_OCU_YN;
	}

}
