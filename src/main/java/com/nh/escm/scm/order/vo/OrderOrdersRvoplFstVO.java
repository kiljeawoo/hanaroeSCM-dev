package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 소속사업장별 조회 First
 * @author swha
 *
 */
public class OrderOrdersRvoplFstVO  implements Serializable{
	private static final long serialVersionUID = 20150805L;
	
	private long RN;
	private String RVOPL_NA_TRPL_C;
	private String RVOPL_NA_TRPL_N;
	private String RVOPL_NA_TEAM_C;
	private String SPYPL_NA_TRPL_C;
	private String SPYPL_NA_TRPL_N;
	private String SPYPL_NA_TEAM_C;
	private int ODR_WRS_CNT;
	private double ODR_QT;
	private String BOXPE_AQZ;
	private long ODR_AM;
	private long ODR_VAT;
	private long VCBT_AM;
	private int ODR_CNT;
	private String VHCNO;
	
	
	
	public long getRN() {
		return RN;
	}



	public void setRN(long rN) {
		RN = rN;
	}



	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}



	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}



	public String getRVOPL_NA_TRPL_N() {
		return RVOPL_NA_TRPL_N;
	}



	public void setRVOPL_NA_TRPL_N(String rVOPL_NA_TRPL_N) {
		RVOPL_NA_TRPL_N = rVOPL_NA_TRPL_N;
	}



	public String getRVOPL_NA_TEAM_C() {
		return RVOPL_NA_TEAM_C;
	}



	public void setRVOPL_NA_TEAM_C(String rVOPL_NA_TEAM_C) {
		RVOPL_NA_TEAM_C = rVOPL_NA_TEAM_C;
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



	public String getSPYPL_NA_TEAM_C() {
		return SPYPL_NA_TEAM_C;
	}



	public void setSPYPL_NA_TEAM_C(String sPYPL_NA_TEAM_C) {
		SPYPL_NA_TEAM_C = sPYPL_NA_TEAM_C;
	}



	public int getODR_WRS_CNT() {
		return ODR_WRS_CNT;
	}



	public void setODR_WRS_CNT(int oDR_WRS_CNT) {
		ODR_WRS_CNT = oDR_WRS_CNT;
	}



	public double getODR_QT() {
		return ODR_QT;
	}



	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}



	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}



	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}



	public long getODR_AM() {
		return ODR_AM;
	}



	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}



	public long getODR_VAT() {
		return ODR_VAT;
	}



	public void setODR_VAT(long oDR_VAT) {
		ODR_VAT = oDR_VAT;
	}



	public long getVCBT_AM() {
		return VCBT_AM;
	}



	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}



	public int getODR_CNT() {
		return ODR_CNT;
	}



	public void setODR_CNT(int oDR_CNT) {
		ODR_CNT = oDR_CNT;
	}



	public String getVHCNO() {
		return VHCNO;
	}



	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}



	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
}
