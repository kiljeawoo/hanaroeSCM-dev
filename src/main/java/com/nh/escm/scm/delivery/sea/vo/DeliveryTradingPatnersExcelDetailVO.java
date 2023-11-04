package com.nh.escm.scm.delivery.sea.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 거래처별 Excel Detail
 * @author swha
 *
 */
public class DeliveryTradingPatnersExcelDetailVO  implements Serializable {
	
	private static final long serialVersionUID = 20150908L;
	private String SPYPL_NA_TRPL_C;
	private String SPYPL_NA_TEAM_C;
	private String RVOPL_NA_TRPL_C;
	private String RVOPL_NA_TRPL_N;
	private String DVYAA_NA_TRPL_C;
	private String DVYAA_NA_TRPL_N;
	private String NA_DVY_PLASH_SLPNO;
	private String DVY_PLA_DT;
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TRPL_N;
	private String ODRPL_NA_TEAM_C;
	private String TOTAL_DVY_AM;
	private String TOTAL_DVY_VAT;
	private String DVY_PLASH_STSC;
	private String RMK_CNTN;
	private String NA_WRS_C;
	private String WRSNM;
	private String WRS_STDNM;
	private String NA_WRS_UNT_C;
	private String BOXPE_AQZ;
	private String DVY_WRS_UPR;
	private String DVY_PLA_QT;
	private String DVY_AM;
	private String DVY_VAT;
	private String DVY_VCBT_AM;
	private String VCBT_UPR;
	
	



	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}





	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}





	public String getSPYPL_NA_TEAM_C() {
		return SPYPL_NA_TEAM_C;
	}





	public void setSPYPL_NA_TEAM_C(String sPYPL_NA_TEAM_C) {
		SPYPL_NA_TEAM_C = sPYPL_NA_TEAM_C;
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





	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}





	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}





	public String getDVYAA_NA_TRPL_N() {
		return DVYAA_NA_TRPL_N;
	}





	public void setDVYAA_NA_TRPL_N(String dVYAA_NA_TRPL_N) {
		DVYAA_NA_TRPL_N = dVYAA_NA_TRPL_N;
	}





	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}





	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}





	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}





	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
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





	public String getTOTAL_DVY_AM() {
		return TOTAL_DVY_AM;
	}





	public void setTOTAL_DVY_AM(String tOTAL_DVY_AM) {
		TOTAL_DVY_AM = tOTAL_DVY_AM;
	}





	public String getTOTAL_DVY_VAT() {
		return TOTAL_DVY_VAT;
	}





	public void setTOTAL_DVY_VAT(String tOTAL_DVY_VAT) {
		TOTAL_DVY_VAT = tOTAL_DVY_VAT;
	}





	public String getDVY_PLASH_STSC() {
		return DVY_PLASH_STSC;
	}





	public void setDVY_PLASH_STSC(String dVY_PLASH_STSC) {
		DVY_PLASH_STSC = dVY_PLASH_STSC;
	}





	public String getRMK_CNTN() {
		return RMK_CNTN;
	}





	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
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





	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}





	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}





	public String getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}





	public void setDVY_WRS_UPR(String dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
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





	public String getDVY_VCBT_AM() {
		return DVY_VCBT_AM;
	}





	public void setDVY_VCBT_AM(String dVY_VCBT_AM) {
		DVY_VCBT_AM = dVY_VCBT_AM;
	}





	public String getVCBT_UPR() {
		return VCBT_UPR;
	}





	public void setVCBT_UPR(String vCBT_UPR) {
		VCBT_UPR = vCBT_UPR;
	}





	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
}
