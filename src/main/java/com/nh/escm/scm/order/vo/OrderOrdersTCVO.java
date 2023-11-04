package com.nh.escm.scm.order.vo;

import java.io.Serializable;

/**
 * TC발주내역조회
 * 일자별 조회 Master
 * @author swha
 *
 */
public class OrderOrdersTCVO  implements Serializable{
	private static final long serialVersionUID = 20150812L;
	
	
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TEAM_C;
	private String ODR_DT;
	private String ODR_SLPNO;
	private String ODR_DSQNO;
	private String NA_WRS_C;
	private String WRSNM;
	private int BOXPE_AQZ;//박스당입수
	private String WRS_STDNM;//규격
	private String NA_WRS_STD_UNT_C;//단위
	private String TXT_DSC;//면과세
	private String ODR_PCS;//단가
	private int BOX_QT;//BOX수량
	private double ODR_QT;//수주수량
	private long ODR_AM;//수주금액
	private long VCBT_AM;//공병금액
	private String PHD_FCLT_N;//물류기능코드
	private String ODRPL_NA_TRPL_N;//발주처
	private String SPYPL_NA_TRPL_C;//공급처
	private String SPYPL_NA_TRPL_N;//공급처명
	
	
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
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getWRSNM() {
		return WRSNM;
	}
	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}
	public int getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(int bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}
	public String getNA_WRS_STD_UNT_C() {
		return NA_WRS_STD_UNT_C;
	}
	public void setNA_WRS_STD_UNT_C(String nA_WRS_STD_UNT_C) {
		NA_WRS_STD_UNT_C = nA_WRS_STD_UNT_C;
	}
	public String getTXT_DSC() {
		return TXT_DSC;
	}
	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}
	public String getODR_PCS() {
		return ODR_PCS;
	}
	public void setODR_PCS(String oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}
	public int getBOX_QT() {
		return BOX_QT;
	}
	public void setBOX_QT(int bOX_QT) {
		BOX_QT = bOX_QT;
	}
	public double getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public long getODR_AM() {
		return ODR_AM;
	}
	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}
	public long getVCBT_AM() {
		return VCBT_AM;
	}
	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}
	public String getPHD_FCLT_N() {
		return PHD_FCLT_N;
	}
	public void setPHD_FCLT_N(String pHD_FCLT_N) {
		PHD_FCLT_N = pHD_FCLT_N;
	}
	public String getODRPL_NA_TRPL_N() {
		return ODRPL_NA_TRPL_N;
	}
	public void setODRPL_NA_TRPL_N(String oDRPL_NA_TRPL_N) {
		ODRPL_NA_TRPL_N = oDRPL_NA_TRPL_N;
	}
	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}
	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}
	public String getSPYPL_NA_TRPL_N() {
		return SPYPL_NA_TRPL_N;
	}
	public void setSPYPL_NA_TRPL_N(String sPYPL_NA_TRPL_N) {
		SPYPL_NA_TRPL_N = sPYPL_NA_TRPL_N;
	}
	
	
	@Override
	public String toString() {
		return "OrderOrdersTCVO [ODRPL_NA_TRPL_C=" + ODRPL_NA_TRPL_C
				+ ", ODRPL_NA_TEAM_C=" + ODRPL_NA_TEAM_C + ", ODR_DT=" + ODR_DT
				+ ", ODR_SLPNO=" + ODR_SLPNO + ", ODR_DSQNO=" + ODR_DSQNO
				+ ", NA_WRS_C=" + NA_WRS_C + ", WRSNM=" + WRSNM
				+ ", BOXPE_AQZ=" + BOXPE_AQZ + ", WRS_STDNM=" + WRS_STDNM
				+ ", NA_WRS_STD_UNT_C=" + NA_WRS_STD_UNT_C + ", TXT_DSC="
				+ TXT_DSC + ", ODR_PCS=" + ODR_PCS + ", BOX_QT=" + BOX_QT
				+ ", ODR_QT=" + ODR_QT + ", ODR_AM=" + ODR_AM + ", VCBT_AM="
				+ VCBT_AM + ", PHD_FCLT_N=" + PHD_FCLT_N + ", ODRPL_NA_TRPL_N="
				+ ODRPL_NA_TRPL_N + ", SPYPL_NA_TRPL_C=" + SPYPL_NA_TRPL_C
				+ ", SPYPL_NA_TRPL_N=" + SPYPL_NA_TRPL_N + "]";
	}
	
	
	
	
	
}
