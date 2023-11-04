package com.nh.escm.scm.delivery.brokerageWholesaler.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 배송예정 거래처별 조회
 * Data in Format
 * @author swha
 *
 */
public class DeliveryTradingPatnersExcelEVO implements Serializable {
	
	private static final long serialVersionUID = 20151006L;
	
	private String REC_STS;
	private String CNT;
	private String SPYPL_NA_TRPL_C;
	private String C04;
	private String DVY_PLA_DT;
	private String NA_DVY_PLASH_SLPNO;
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TEAM_C;
	private String RVOPL_NA_TRPL_C;
	private String RVOPL_NA_TEAM_C;
	private String ADJPL_NA_TRPL_C;
	private String ADJPL_NA_TEAM_C;
	private String MNGT_NA_TR_TPC;
	private String MNGT_NA_TRPL_C;
	private String MNGT_NA_TEAM_C;
	private String DVYAA_NA_TRPL_C;
	private String DVYAA_NA_TEAM_C;
	private String DVYAA_C;
	private String CSER_CTR_TPC;
	private String SPY_TPC;
	private String SLGT_ETR_DSC;
	private String NA_WRS_LCLC;
	private String NA_WRS_MCLC;
	private String C33;
	private String DVY_PLA_QT;
	private String DVY_AM;
	private String DVY_VAT;
	private String VCBT_AM;
	private String VCBX_AM;
	private String DVY_SSDY;
	private String DVY_TROT_FEE;
	private String DVY_PHD_FEE;
	private String DVY_FAR_ASTCS;
	private String C59;
	private String C60;
	private String C61;
	private String C62;
	private String C63;
	private String RMK_CNTN;
	private String DVY_PLA_SQNO;
	private String NA_WRS_C;
	private String C10;
	private String C11;
	private String C12;
	private String C13;
	private String C14;
	private String ODR_DT;
	private String ODR_SLPNO;
	private String ODR_DSQNO;
	private String TXT_DSC;
	private String DVY_WRS_UPR;
	private String DVY_PLA_QT_D;
	private String DVY_AM_D;
	private String DVY_VAT_D;
	private String DVY_VCBT_AM;
	private String DVY_SSDY_D;
	private String DVY_TROT_FEE_D;
	private String DVY_PHD_FEE_D;
	private String DVY_FAR_ASTCS_D;
	private String C38;
	private String C39;
	private String C41;
	private String C42;
	private String ROWNUM;
	public String getREC_STS() {
		return REC_STS;
	}
	public void setREC_STS(String rEC_STS) {
		REC_STS = rEC_STS;
	}
	public String getCNT() {
		return CNT;
	}
	public void setCNT(String cNT) {
		CNT = cNT;
	}
	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}
	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}
	public String getC04() {
		return C04;
	}
	public void setC04(String c04) {
		C04 = c04;
	}
	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}
	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}
	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}
	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}
	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}
	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}
	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}
	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}
	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}
	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}
	public String getRVOPL_NA_TEAM_C() {
		return RVOPL_NA_TEAM_C;
	}
	public void setRVOPL_NA_TEAM_C(String rVOPL_NA_TEAM_C) {
		RVOPL_NA_TEAM_C = rVOPL_NA_TEAM_C;
	}
	public String getADJPL_NA_TRPL_C() {
		return ADJPL_NA_TRPL_C;
	}
	public void setADJPL_NA_TRPL_C(String aDJPL_NA_TRPL_C) {
		ADJPL_NA_TRPL_C = aDJPL_NA_TRPL_C;
	}
	public String getADJPL_NA_TEAM_C() {
		return ADJPL_NA_TEAM_C;
	}
	public void setADJPL_NA_TEAM_C(String aDJPL_NA_TEAM_C) {
		ADJPL_NA_TEAM_C = aDJPL_NA_TEAM_C;
	}
	public String getMNGT_NA_TR_TPC() {
		return MNGT_NA_TR_TPC;
	}
	public void setMNGT_NA_TR_TPC(String mNGT_NA_TR_TPC) {
		MNGT_NA_TR_TPC = mNGT_NA_TR_TPC;
	}
	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}
	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
	}
	public String getMNGT_NA_TEAM_C() {
		return MNGT_NA_TEAM_C;
	}
	public void setMNGT_NA_TEAM_C(String mNGT_NA_TEAM_C) {
		MNGT_NA_TEAM_C = mNGT_NA_TEAM_C;
	}
	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}
	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}
	public String getDVYAA_NA_TEAM_C() {
		return DVYAA_NA_TEAM_C;
	}
	public void setDVYAA_NA_TEAM_C(String dVYAA_NA_TEAM_C) {
		DVYAA_NA_TEAM_C = dVYAA_NA_TEAM_C;
	}
	public String getDVYAA_C() {
		return DVYAA_C;
	}
	public void setDVYAA_C(String dVYAA_C) {
		DVYAA_C = dVYAA_C;
	}
	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}
	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}
	public String getSPY_TPC() {
		return SPY_TPC;
	}
	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}
	public String getSLGT_ETR_DSC() {
		return SLGT_ETR_DSC;
	}
	public void setSLGT_ETR_DSC(String sLGT_ETR_DSC) {
		SLGT_ETR_DSC = sLGT_ETR_DSC;
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
	public String getC33() {
		return C33;
	}
	public void setC33(String c33) {
		C33 = c33;
	}
	public String getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}
	public void setDVY_PLA_QT(String dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}
	public String getDVY_AM() {
		return DVY_AM;
	}
	public void setDVY_AM(String dVY_AM) {
		DVY_AM = dVY_AM;
	}
	public String getDVY_VAT() {
		return DVY_VAT;
	}
	public void setDVY_VAT(String dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}
	public String getVCBT_AM() {
		return VCBT_AM;
	}
	public void setVCBT_AM(String vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}
	public String getVCBX_AM() {
		return VCBX_AM;
	}
	public void setVCBX_AM(String vCBX_AM) {
		VCBX_AM = vCBX_AM;
	}
	public String getDVY_SSDY() {
		return DVY_SSDY;
	}
	public void setDVY_SSDY(String dVY_SSDY) {
		DVY_SSDY = dVY_SSDY;
	}
	public String getDVY_TROT_FEE() {
		return DVY_TROT_FEE;
	}
	public void setDVY_TROT_FEE(String dVY_TROT_FEE) {
		DVY_TROT_FEE = dVY_TROT_FEE;
	}
	public String getDVY_PHD_FEE() {
		return DVY_PHD_FEE;
	}
	public void setDVY_PHD_FEE(String dVY_PHD_FEE) {
		DVY_PHD_FEE = dVY_PHD_FEE;
	}
	public String getDVY_FAR_ASTCS() {
		return DVY_FAR_ASTCS;
	}
	public void setDVY_FAR_ASTCS(String dVY_FAR_ASTCS) {
		DVY_FAR_ASTCS = dVY_FAR_ASTCS;
	}
	public String getC59() {
		return C59;
	}
	public void setC59(String c59) {
		C59 = c59;
	}
	public String getC60() {
		return C60;
	}
	public void setC60(String c60) {
		C60 = c60;
	}
	public String getC61() {
		return C61;
	}
	public void setC61(String c61) {
		C61 = c61;
	}
	public String getC62() {
		return C62;
	}
	public void setC62(String c62) {
		C62 = c62;
	}
	public String getC63() {
		return C63;
	}
	public void setC63(String c63) {
		C63 = c63;
	}
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}
	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}
	public String getDVY_PLA_SQNO() {
		return DVY_PLA_SQNO;
	}
	public void setDVY_PLA_SQNO(String dVY_PLA_SQNO) {
		DVY_PLA_SQNO = dVY_PLA_SQNO;
	}
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getC10() {
		return C10;
	}
	public void setC10(String c10) {
		C10 = c10;
	}
	public String getC11() {
		return C11;
	}
	public void setC11(String c11) {
		C11 = c11;
	}
	public String getC12() {
		return C12;
	}
	public void setC12(String c12) {
		C12 = c12;
	}
	public String getC13() {
		return C13;
	}
	public void setC13(String c13) {
		C13 = c13;
	}
	public String getC14() {
		return C14;
	}
	public void setC14(String c14) {
		C14 = c14;
	}
	public String getODR_DT() {
		return ODR_DT;
	}
	public void setODR_DT(String oDR_DT) {
		ODR_DT = oDR_DT;
	}
	public String getODR_SLPNO() {
		return ODR_SLPNO;
	}
	public void setODR_SLPNO(String oDR_SLPNO) {
		ODR_SLPNO = oDR_SLPNO;
	}
	public String getODR_DSQNO() {
		return ODR_DSQNO;
	}
	public void setODR_DSQNO(String oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}
	public String getTXT_DSC() {
		return TXT_DSC;
	}
	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}
	public String getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}
	public void setDVY_WRS_UPR(String dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
	}
	public String getDVY_PLA_QT_D() {
		return DVY_PLA_QT_D;
	}
	public void setDVY_PLA_QT_D(String dVY_PLA_QT_D) {
		DVY_PLA_QT_D = dVY_PLA_QT_D;
	}
	public String getDVY_AM_D() {
		return DVY_AM_D;
	}
	public void setDVY_AM_D(String dVY_AM_D) {
		DVY_AM_D = dVY_AM_D;
	}
	public String getDVY_VAT_D() {
		return DVY_VAT_D;
	}
	public void setDVY_VAT_D(String dVY_VAT_D) {
		DVY_VAT_D = dVY_VAT_D;
	}
	public String getDVY_VCBT_AM() {
		return DVY_VCBT_AM;
	}
	public void setDVY_VCBT_AM(String dVY_VCBT_AM) {
		DVY_VCBT_AM = dVY_VCBT_AM;
	}
	public String getDVY_SSDY_D() {
		return DVY_SSDY_D;
	}
	public void setDVY_SSDY_D(String dVY_SSDY_D) {
		DVY_SSDY_D = dVY_SSDY_D;
	}
	public String getDVY_TROT_FEE_D() {
		return DVY_TROT_FEE_D;
	}
	public void setDVY_TROT_FEE_D(String dVY_TROT_FEE_D) {
		DVY_TROT_FEE_D = dVY_TROT_FEE_D;
	}
	public String getDVY_PHD_FEE_D() {
		return DVY_PHD_FEE_D;
	}
	public void setDVY_PHD_FEE_D(String dVY_PHD_FEE_D) {
		DVY_PHD_FEE_D = dVY_PHD_FEE_D;
	}
	public String getDVY_FAR_ASTCS_D() {
		return DVY_FAR_ASTCS_D;
	}
	public void setDVY_FAR_ASTCS_D(String dVY_FAR_ASTCS_D) {
		DVY_FAR_ASTCS_D = dVY_FAR_ASTCS_D;
	}
	public String getC38() {
		return C38;
	}
	public void setC38(String c38) {
		C38 = c38;
	}
	public String getC39() {
		return C39;
	}
	public void setC39(String c39) {
		C39 = c39;
	}
	public String getC41() {
		return C41;
	}
	public void setC41(String c41) {
		C41 = c41;
	}
	public String getC42() {
		return C42;
	}
	public void setC42(String c42) {
		C42 = c42;
	}
	public String getROWNUM() {
		return ROWNUM;
	}
	public void setROWNUM(String rOWNUM) {
		ROWNUM = rOWNUM;
	}
	
	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	

}
