package com.nh.escm.pds.pay.vo;

import java.io.Serializable;

/**
 * 사후장려금 실적조회R1 Master VO
 * @author HyeRim.Oh
 *
 */
public class PaymentAffSsdyMasterVO implements Serializable{
	
	private static final long serialVersionUID = 20150624L;
	
	private String RN; //페이지번호
	
	private String PHD_SLP_DT;  //물류전표일자
	private long SLP_SQNO;  //전표일련번호
	private String PHD_NA_BZPLC;  //물류경제통합 사업장코드
	private String NA_TR_DSC;  //경제통합 거래구분코드
	private String NA_BLB_DFC_DSC;  //경제통합 흑자적자구분코드
	private String TR_DT;  //거래일자
	private String NA_TEAM_C;  //경제통합 팀코드
	private String SLPL_NA_TRPL_C;  //매출처 경제통합거래처코드
	private String SLPL_NA_TEAM_C;  //매출처 경제통합팀코드
	private String BUYPL_NA_TRPL_C;  //매입처 경제통합거래처코드
	private String BUYPL_NA_TEAM_C;  //매입처 경제통합팀코드
	private String NA_ADJPL_C;  //경제통합 정산처코드
	private String ADJPL_NA_TEAM_C;  //정산처 경제통합팀코드
	private String PY_PLA_DT;  //지급예정일자
	private String NA_CRC_CAN_DSC;  //경제통합 정정취소구분코드
	private double SPY_QT;  //공급수량
	private double SPY_AM;  //공급금액
	private double VAT;  //부가세
	private double AFF_SSDY;  //사후장려금 (A)
	private double PHD_AFF_FEERT;  //물류(평균) 사후수수료율
	private double PHD_SEL_AM;  //물류 판매금액
	private double CNR_DS_AM;  //검수구분금액 (B)
	private double AFF_SSDY_SUM;  //사후장려금(계산) (C=A*B)
	
	private String PHD_NA_BZPLC_NM;
	private String NA_TR_DSC_NM;
	private String SLPL_NA_TRPL_C_NM;
	private String BUYPL_NA_TRPL_C_NM;
	private String NA_ADJPL_C_NM;
	private String NA_CRC_CAN_DSC_NM;	
	private String BUYPL_NA_TEAM_C_NM;
		
	public String getRN() {
		return RN;
	}
	public void setRN(String rN) {
		RN = rN;
	}
	public String getPHD_SLP_DT() {
		return PHD_SLP_DT;
	}
	public void setPHD_SLP_DT(String pHD_SLP_DT) {
		PHD_SLP_DT = pHD_SLP_DT;
	}
	public long getSLP_SQNO() {
		return SLP_SQNO;
	}
	public void setSLP_SQNO(long sLP_SQNO) {
		SLP_SQNO = sLP_SQNO;
	}
	public String getPHD_NA_BZPLC() {
		return PHD_NA_BZPLC;
	}
	public void setPHD_NA_BZPLC(String pHD_NA_BZPLC) {
		PHD_NA_BZPLC = pHD_NA_BZPLC;
	}
	public String getNA_TR_DSC() {
		return NA_TR_DSC;
	}
	public void setNA_TR_DSC(String nA_TR_DSC) {
		NA_TR_DSC = nA_TR_DSC;
	}
	public String getNA_BLB_DFC_DSC() {
		return NA_BLB_DFC_DSC;
	}
	public void setNA_BLB_DFC_DSC(String nA_BLB_DFC_DSC) {
		NA_BLB_DFC_DSC = nA_BLB_DFC_DSC;
	}
	public String getTR_DT() {
		return TR_DT;
	}
	public void setTR_DT(String tR_DT) {
		TR_DT = tR_DT;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getSLPL_NA_TRPL_C() {
		return SLPL_NA_TRPL_C;
	}
	public void setSLPL_NA_TRPL_C(String sLPL_NA_TRPL_C) {
		SLPL_NA_TRPL_C = sLPL_NA_TRPL_C;
	}
	public String getSLPL_NA_TEAM_C() {
		return SLPL_NA_TEAM_C;
	}
	public void setSLPL_NA_TEAM_C(String sLPL_NA_TEAM_C) {
		SLPL_NA_TEAM_C = sLPL_NA_TEAM_C;
	}
	public String getBUYPL_NA_TRPL_C() {
		return BUYPL_NA_TRPL_C;
	}
	public void setBUYPL_NA_TRPL_C(String bUYPL_NA_TRPL_C) {
		BUYPL_NA_TRPL_C = bUYPL_NA_TRPL_C;
	}
	public String getBUYPL_NA_TEAM_C() {
		return BUYPL_NA_TEAM_C;
	}
	public void setBUYPL_NA_TEAM_C(String bUYPL_NA_TEAM_C) {
		BUYPL_NA_TEAM_C = bUYPL_NA_TEAM_C;
	}
	public String getNA_ADJPL_C() {
		return NA_ADJPL_C;
	}
	public void setNA_ADJPL_C(String nA_ADJPL_C) {
		NA_ADJPL_C = nA_ADJPL_C;
	}
	public String getADJPL_NA_TEAM_C() {
		return ADJPL_NA_TEAM_C;
	}
	public void setADJPL_NA_TEAM_C(String aDJPL_NA_TEAM_C) {
		ADJPL_NA_TEAM_C = aDJPL_NA_TEAM_C;
	}
	public String getPY_PLA_DT() {
		return PY_PLA_DT;
	}
	public void setPY_PLA_DT(String pY_PLA_DT) {
		PY_PLA_DT = pY_PLA_DT;
	}
	public String getNA_CRC_CAN_DSC() {
		return NA_CRC_CAN_DSC;
	}
	public void setNA_CRC_CAN_DSC(String nA_CRC_CAN_DSC) {
		NA_CRC_CAN_DSC = nA_CRC_CAN_DSC;
	}
	public double getSPY_QT() {
		return SPY_QT;
	}
	public void setSPY_QT(double sPY_QT) {
		SPY_QT = sPY_QT;
	}
	public double getSPY_AM() {
		return SPY_AM;
	}
	public void setSPY_AM(double sPY_AM) {
		SPY_AM = sPY_AM;
	}
	public double getVAT() {
		return VAT;
	}
	public void setVAT(double vAT) {
		VAT = vAT;
	}
	public double getAFF_SSDY() {
		return AFF_SSDY;
	}
	public void setAFF_SSDY(double aFF_SSDY) {
		AFF_SSDY = aFF_SSDY;
	}
	public double getPHD_AFF_FEERT() {
		return PHD_AFF_FEERT;
	}
	public void setPHD_AFF_FEERT(double pHD_AFF_FEERT) {
		PHD_AFF_FEERT = pHD_AFF_FEERT;
	}
	public double getPHD_SEL_AM() {
		return PHD_SEL_AM;
	}
	public void setPHD_SEL_AM(double pHD_SEL_AM) {
		PHD_SEL_AM = pHD_SEL_AM;
	}
	public double getCNR_DS_AM() {
		return CNR_DS_AM;
	}
	public void setCNR_DS_AM(double cNR_DS_AM) {
		CNR_DS_AM = cNR_DS_AM;
	}
	public double getAFF_SSDY_SUM() {
		return AFF_SSDY_SUM;
	}
	public void setAFF_SSDY_SUM(double aFF_SSDY_SUM) {
		AFF_SSDY_SUM = aFF_SSDY_SUM;
	}	
	public String getPHD_NA_BZPLC_NM() {
		return PHD_NA_BZPLC_NM;
	}
	public void setPHD_NA_BZPLC_NM(String pHD_NA_BZPLC_NM) {
		PHD_NA_BZPLC_NM = pHD_NA_BZPLC_NM;
	}
	public String getNA_TR_DSC_NM() {
		return NA_TR_DSC_NM;
	}
	public void setNA_TR_DSC_NM(String nA_TR_DSC_NM) {
		NA_TR_DSC_NM = nA_TR_DSC_NM;
	}
	public String getSLPL_NA_TRPL_C_NM() {
		return SLPL_NA_TRPL_C_NM;
	}
	public void setSLPL_NA_TRPL_C_NM(String sLPL_NA_TRPL_C_NM) {
		SLPL_NA_TRPL_C_NM = sLPL_NA_TRPL_C_NM;
	}
	public String getNA_ADJPL_C_NM() {
		return NA_ADJPL_C_NM;
	}
	public void setNA_ADJPL_C_NM(String nA_ADJPL_C_NM) {
		NA_ADJPL_C_NM = nA_ADJPL_C_NM;
	}
	public String getNA_CRC_CAN_DSC_NM() {
		return NA_CRC_CAN_DSC_NM;
	}
	public void setNA_CRC_CAN_DSC_NM(String nA_CRC_CAN_DSC_NM) {
		NA_CRC_CAN_DSC_NM = nA_CRC_CAN_DSC_NM;
	}	
	public String getBUYPL_NA_TRPL_C_NM() {
		return BUYPL_NA_TRPL_C_NM;
	}
	public void setBUYPL_NA_TRPL_C_NM(String bUYPL_NA_TRPL_C_NM) {
		BUYPL_NA_TRPL_C_NM = bUYPL_NA_TRPL_C_NM;
	}	
	public String getBUYPL_NA_TEAM_C_NM() {
		return BUYPL_NA_TEAM_C_NM;
	}
	public void setBUYPL_NA_TEAM_C_NM(String bUYPL_NA_TEAM_C_NM) {
		BUYPL_NA_TEAM_C_NM = bUYPL_NA_TEAM_C_NM;
	}
	@Override
	public String toString() {
		return "PaymentAffSsdyMasterVO [PHD_SLP_DT=" + PHD_SLP_DT
				+ ", SLP_SQNO=" + SLP_SQNO + ", PHD_NA_BZPLC=" + PHD_NA_BZPLC
				+ ", NA_TR_DSC=" + NA_TR_DSC + ", NA_BLB_DFC_DSC="
				+ NA_BLB_DFC_DSC + ", TR_DT=" + TR_DT + ", NA_TEAM_C="
				+ NA_TEAM_C + ", SLPL_NA_TRPL_C=" + SLPL_NA_TRPL_C
				+ ", SLPL_NA_TEAM_C=" + SLPL_NA_TEAM_C + ", BUYPL_NA_TRPL_C="
				+ BUYPL_NA_TRPL_C + ", BUYPL_NA_TEAM_C=" + BUYPL_NA_TEAM_C
				+ ", NA_ADJPL_C=" + NA_ADJPL_C + ", ADJPL_NA_TEAM_C="
				+ ADJPL_NA_TEAM_C + ", PY_PLA_DT=" + PY_PLA_DT
				+ ", NA_CRC_CAN_DSC=" + NA_CRC_CAN_DSC + ", SPY_QT=" + SPY_QT
				+ ", SPY_AM=" + SPY_AM + ", VAT=" + VAT + ", AFF_SSDY="
				+ AFF_SSDY + ", PHD_AFF_FEERT=" + PHD_AFF_FEERT
				+ ", PHD_SEL_AM=" + PHD_SEL_AM + ", CNR_DS_AM=" + CNR_DS_AM
				+ ", AFF_SSDY_SUM=" + AFF_SSDY_SUM + "]";
	}	

}
