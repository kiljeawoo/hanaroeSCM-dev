package com.nh.escm.scm.delivery.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 거래처별 Print Detail Master
 * @author swha
 *
 */
public class DeliveryTradingPatnersPrintDVO  implements Serializable {
	
	private static final long serialVersionUID = 20150914L;
	
	private String NA_WRS_C;
	private String WRSNM;
	private String NA_WRS_STD_UNT_N;
	private String NA_WRS_UNT_N;
	private String BOXPE_AQZ;
	private String DVY_WRS_UPR;
	private String DVY_PLA_QT;
	private String DVY_AM;
	private String DVY_VAT;
	private String VCBT_UPR;
	private String DVY_VCBT_AM;
	
	
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






	public String getNA_WRS_STD_UNT_N() {
		return NA_WRS_STD_UNT_N;
	}






	public void setNA_WRS_STD_UNT_N(String nA_WRS_STD_UNT_N) {
		NA_WRS_STD_UNT_N = nA_WRS_STD_UNT_N;
	}






	public String getNA_WRS_UNT_N() {
		return NA_WRS_UNT_N;
	}






	public void setNA_WRS_UNT_N(String nA_WRS_UNT_N) {
		NA_WRS_UNT_N = nA_WRS_UNT_N;
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






	public String getVCBT_UPR() {
		return VCBT_UPR;
	}






	public void setVCBT_UPR(String vCBT_UPR) {
		VCBT_UPR = vCBT_UPR;
	}






	public String getDVY_VCBT_AM() {
		return DVY_VCBT_AM;
	}






	public void setDVY_VCBT_AM(String dVY_VCBT_AM) {
		DVY_VCBT_AM = dVY_VCBT_AM;
	}






	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	


	

	
}
