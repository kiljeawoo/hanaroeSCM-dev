package com.nh.escm.scm.delivery.livestock.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 상품별 Master
 * @author swha
 *
 */
public class DeliverySkusMVO  implements Serializable {
	
	private static final long serialVersionUID = 20150828L;
	
	private String RN;
	private String SPYPL_NA_TRPL_C;
	private String RVOPL_NA_TRPL_C;
	private String RVOPL_NA_TEAM_C;
	private String NA_WRS_C;
	private String WRSNM;
	private String WRS_STDNM;
	private long CNT;
	private double DVY_PLA_QT;
	private double DVY_AM;
	private long DVY_VAT;
	private String SPYPL_NA_TRPL_N;
	private String RVOPL_NA_TRPL_N;
	private String GRS_SOJU_YN;
	private String VHCNO;
	private String DVY_PLASH_STAC;
	
	




	public String getRN() {
		return RN;
	}






	public void setRN(String rN) {
		RN = rN;
	}






	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}






	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
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






	public long getCNT() {
		return CNT;
	}






	public void setCNT(long cNT) {
		CNT = cNT;
	}






	public double getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}






	public void setDVY_PLA_QT(double dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}






	public double getDVY_AM() {
		return DVY_AM;
	}






	public void setDVY_AM(double dVY_AM) {
		DVY_AM = dVY_AM;
	}






	public long getDVY_VAT() {
		return DVY_VAT;
	}






	public void setDVY_VAT(long dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}






	public String getSPYPL_NA_TRPL_N() {
		return SPYPL_NA_TRPL_N;
	}






	public void setSPYPL_NA_TRPL_N(String sPYPL_NA_TRPL_N) {
		SPYPL_NA_TRPL_N = sPYPL_NA_TRPL_N;
	}






	public String getRVOPL_NA_TRPL_N() {
		return RVOPL_NA_TRPL_N;
	}






	public void setRVOPL_NA_TRPL_N(String rVOPL_NA_TRPL_N) {
		RVOPL_NA_TRPL_N = rVOPL_NA_TRPL_N;
	}






	public String getGRS_SOJU_YN() {
		return GRS_SOJU_YN;
	}






	public void setGRS_SOJU_YN(String gRS_SOJU_YN) {
		GRS_SOJU_YN = gRS_SOJU_YN;
	}






	public String getVHCNO() {
		return VHCNO;
	}






	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}






	public String getDVY_PLASH_STAC() {
		return DVY_PLASH_STAC;
	}






	public void setDVY_PLASH_STAC(String dVY_PLASH_STAC) {
		DVY_PLASH_STAC = dVY_PLASH_STAC;
	}






	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	


	

	
}
