package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 상품별 조회 Second
 * @author swha
 *
 */

public class OrderOrdersWrsScdVO  implements Serializable{
	private static final long serialVersionUID = 20150806L;
	
	private long RN;
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TRPL_N;
	private String ODRPL_NA_TEAM_C;
	private String ODRPL_NA_TEAM_N;
	private String ODR_DT;
	private String ODR_SLPNO;
	private String NA_WRS_C;
	private double ODR_QT;
	private String BOXPE_AQZ;
	private long ODR_AM;
	private long ODR_VAT;
	private long VCBT_AM;
	private String VHCNO;
	
	
	
	public long getRN() {
		return RN;
	}



	public void setRN(long rN) {
		RN = rN;
	}



	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}



	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}



	public String getODRPL_NA_TRPL_N() {
		return ODRPL_NA_TRPL_N;
	}



	public void setODRPL_NA_TRPL_N(String oDRPL_NA_TRPL_N) {
		ODRPL_NA_TRPL_N = oDRPL_NA_TRPL_N;
	}



	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}



	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}



	public String getODRPL_NA_TEAM_N() {
		return ODRPL_NA_TEAM_N;
	}



	public void setODRPL_NA_TEAM_N(String oDRPL_NA_TEAM_N) {
		ODRPL_NA_TEAM_N = oDRPL_NA_TEAM_N;
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



	public String getNA_WRS_C() {
		return NA_WRS_C;
	}



	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
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
