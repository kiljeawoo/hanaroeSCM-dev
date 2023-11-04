package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 상품별 조회 Detail Print
 * @author swha
 *
 */

public class OrderOrdersWrsDetailPrintVO  implements Serializable{
	private static final long serialVersionUID = 20150806L;
	
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TRPL_N;
	private String ODRPL_NA_TEAM_C;
	private String ODR_QT;
	private String ODR_DT;
	private String ODR_SLPNO;
	private String NA_ODR_STS_DSC;
	private String DVY_PLA_DT;
	private String BOXPE_AQZ;
	private String ODR_AM;
	private String ODR_VAT;
	private String VCBT_AM;
	private String VHCNO;
	private String ODR_DSQNO;
	
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






	public String getODR_QT() {
		return ODR_QT;
	}






	public void setODR_QT(String oDR_QT) {
		ODR_QT = oDR_QT;
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






	public String getNA_ODR_STS_DSC() {
		return NA_ODR_STS_DSC;
	}






	public void setNA_ODR_STS_DSC(String nA_ODR_STS_DSC) {
		NA_ODR_STS_DSC = nA_ODR_STS_DSC;
	}






	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}






	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}






	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}






	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}






	public String getODR_AM() {
		return ODR_AM;
	}






	public void setODR_AM(String oDR_AM) {
		ODR_AM = oDR_AM;
	}






	public String getODR_VAT() {
		return ODR_VAT;
	}






	public void setODR_VAT(String oDR_VAT) {
		ODR_VAT = oDR_VAT;
	}






	public String getVCBT_AM() {
		return VCBT_AM;
	}






	public void setVCBT_AM(String vCBT_AM) {
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



	public String getODR_DSQNO() {
		return ODR_DSQNO;
	}



	public void setODR_DSQNO(String oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}
	
	
	
	
}
