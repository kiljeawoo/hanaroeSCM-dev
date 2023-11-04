package com.nh.escm.scm.order.vo;

import java.io.Serializable;

/**
 * 수주내역조회
 * 일자별 조회 Third
 * @author swha
 *
 */
public class OrderOrdersDailyTrdVO  implements Serializable{
	private static final long serialVersionUID = 20150803L;
	
	private String NA_WRS_C;
	private String WRSNM;
	private String WRS_STDNM;
	private String NA_WRS_UNT_C;
	private int BOXPE_AQZ;
	private double ODR_PCS;
	private double ODR_QT;
	private double BOX_QT;
	private long ODR_AM;
	private long VCBT_AM;
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
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}
	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}
	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}
	public int getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(int bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public double getODR_PCS() {
		return ODR_PCS;
	}
	public void setODR_PCS(double oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}
	public double getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public double getBOX_QT() {
		return BOX_QT;
	}
	public void setBOX_QT(double bOX_QT) {
		BOX_QT = bOX_QT;
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
	@Override
	public String toString() {
		return "OrderOrdersDailyTrdVO [NA_WRS_C=" + NA_WRS_C + ", WRSNM="
				+ WRSNM + ", WRS_STDNM=" + WRS_STDNM + ", NA_WRS_UNT_C="
				+ NA_WRS_UNT_C + ", BOXPE_AQZ=" + BOXPE_AQZ + ", ODR_PCS="
				+ ODR_PCS + ", ODR_QT=" + ODR_QT + ", BOX_QT=" + BOX_QT
				+ ", ODR_AM=" + ODR_AM + ", VCBT_AM=" + VCBT_AM + "]";
	}
	
	
	
	
	
	
}
