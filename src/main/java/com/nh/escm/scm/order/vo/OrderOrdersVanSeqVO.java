package com.nh.escm.scm.order.vo;

import java.io.Serializable;
import java.util.List;
/**
 * 수주번호 팝업 리스트 
 * @author swha
 *
 */
public class OrderOrdersVanSeqVO   implements Serializable{
	private static final long serialVersionUID = 20150706L;
	
	 private String ODRPL_NA_TRPL_C;
	 private String SHRT_BZPLNM;
	 private String ODRPL_NA_TEAM_C;
	 private String TEAMNM;
	 private String ODR_SLPNO;
	 private String VAN_SEQ;
	 private String ODR_DT;
	 private String DVY_VHC_DSC;
	 private String SPY_TPC;
	 private String DVY_RQR_DT;
	 private double ODR_QT;
	 private double ODR_AM;
	 private String NA_DVY_PLASH_SLPNO;
	 private String DLVPNSHT_TEMP_YN;
	 private String SPYPL_NA_TRPL_C;
	 private String DVYAA_NA_TRPL_C;
	 private String SPYPL_NA_TEAM_C;
	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}
	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}
	public String getSHRT_BZPLNM() {
		return SHRT_BZPLNM;
	}
	public void setSHRT_BZPLNM(String sHRT_BZPLNM) {
		SHRT_BZPLNM = sHRT_BZPLNM;
	}
	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}
	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}
	public String getTEAMNM() {
		return TEAMNM;
	}
	public void setTEAMNM(String tEAMNM) {
		TEAMNM = tEAMNM;
	}
	public String getODR_SLPNO() {
		return ODR_SLPNO;
	}
	public void setODR_SLPNO(String oDR_SLPNO) {
		ODR_SLPNO = oDR_SLPNO;
	}
	public String getVAN_SEQ() {
		return VAN_SEQ;
	}
	public void setVAN_SEQ(String vAN_SEQ) {
		VAN_SEQ = vAN_SEQ;
	}
	public String getODR_DT() {
		return ODR_DT;
	}
	public void setODR_DT(String oDR_DT) {
		ODR_DT = oDR_DT;
	}
	public String getDVY_VHC_DSC() {
		return DVY_VHC_DSC;
	}
	public void setDVY_VHC_DSC(String dVY_VHC_DSC) {
		DVY_VHC_DSC = dVY_VHC_DSC;
	}
	public String getSPY_TPC() {
		return SPY_TPC;
	}
	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}
	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}
	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}
	public double getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public double getODR_AM() {
		return ODR_AM;
	}
	public void setODR_AM(double oDR_AM) {
		ODR_AM = oDR_AM;
	}
	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}
	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}
	public String getDLVPNSHT_TEMP_YN() {
		return DLVPNSHT_TEMP_YN;
	}
	public void setDLVPNSHT_TEMP_YN(String dLVPNSHT_TEMP_YN) {
		DLVPNSHT_TEMP_YN = dLVPNSHT_TEMP_YN;
	}
	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}
	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}
	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}
	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}
	public String getSPYPL_NA_TEAM_C() {
		return SPYPL_NA_TEAM_C;
	}
	public void setSPYPL_NA_TEAM_C(String sPYPL_NA_TEAM_C) {
		SPYPL_NA_TEAM_C = sPYPL_NA_TEAM_C;
	}
	@Override
	public String toString() {
		return "OrderOrdersVanSeqVO [ODRPL_NA_TRPL_C=" + ODRPL_NA_TRPL_C
				+ ", SHRT_BZPLNM=" + SHRT_BZPLNM + ", ODRPL_NA_TEAM_C="
				+ ODRPL_NA_TEAM_C + ", TEAMNM=" + TEAMNM + ", ODR_SLPNO="
				+ ODR_SLPNO + ", VAN_SEQ=" + VAN_SEQ + ", ODR_DT=" + ODR_DT
				+ ", DVY_VHC_DSC=" + DVY_VHC_DSC + ", SPY_TPC=" + SPY_TPC
				+ ", DVY_RQR_DT=" + DVY_RQR_DT + ", ODR_QT=" + ODR_QT
				+ ", ODR_AM=" + ODR_AM + ", NA_DVY_PLASH_SLPNO="
				+ NA_DVY_PLASH_SLPNO + ", DLVPNSHT_TEMP_YN=" + DLVPNSHT_TEMP_YN
				+ ", SPYPL_NA_TRPL_C=" + SPYPL_NA_TRPL_C + ", DVYAA_NA_TRPL_C="
				+ DVYAA_NA_TRPL_C + ", SPYPL_NA_TEAM_C=" + SPYPL_NA_TEAM_C
				+ "]";
	}
	 
	
	 
	 
}
