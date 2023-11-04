package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 상품별 Excel download
 * @author swha
 *
 */
public class OrderOrdersWrsExcelVO  implements Serializable{
	private static final long serialVersionUID = 20150907L;
	
	private String NA_WRS_C;//상품코드
	private String WRSNM;//
	private String WRS_STDNM;
	private String NA_WRS_UNT_C;
	private String BOXPE_AQZ;
	private String ODR_PCS;
	private String ODR_QT;
	private String BOX_QT;
	private String ODR_AM;
	private String ODR_VAT;
	private String VCBT_AM;
	private String ODR_CNT;
	private String VHCNO;
	private String B_ODRPL_NA_TRPL_C;
	private String B_ODRPL_NA_TRPL_N;
	private String B_ODRPL_NA_TEAM_C;
	private String B_NA_WRS_C;
	private String B_ODR_PCS;
	private String B_ODR_QT;
	private String B_BOXPE_AQZ;
	private String B_ODR_AM;
	private String B_ODR_VAT;
	private String B_VCBT_AM;
	private String B_VHCNO;
	private String C_ODRPL_NA_TRPL_C;
	private String C_ODRPL_NA_TEAM_C;
	private String C_ODR_DT;
	private String C_ODR_SLPNO;
	private String C_VHCNO;
	private String C_NA_WRS_C;
	private String C_MNGT_NA_TRPL_C;
	private String C_CLNTNM;
	private String C_ODR_QT;
	private String C_ODR_AM;
	private String C_ODR_VAT;
	private String C_VCBT_AM;
	private String C_SPY_TPC;
	private String C_NA_ODR_STS_DSC;

	
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


	public String getODR_PCS() {
		return ODR_PCS;
	}


	public void setODR_PCS(String oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}


	public String getODR_QT() {
		return ODR_QT;
	}


	public void setODR_QT(String oDR_QT) {
		ODR_QT = oDR_QT;
	}


	public String getBOX_QT() {
		return BOX_QT;
	}


	public void setBOX_QT(String bOX_QT) {
		BOX_QT = bOX_QT;
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


	public String getODR_CNT() {
		return ODR_CNT;
	}


	public void setODR_CNT(String oDR_CNT) {
		ODR_CNT = oDR_CNT;
	}


	public String getVHCNO() {
		return VHCNO;
	}


	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}


	public String getB_ODRPL_NA_TRPL_C() {
		return B_ODRPL_NA_TRPL_C;
	}


	public void setB_ODRPL_NA_TRPL_C(String b_ODRPL_NA_TRPL_C) {
		B_ODRPL_NA_TRPL_C = b_ODRPL_NA_TRPL_C;
	}


	public String getB_ODRPL_NA_TRPL_N() {
		return B_ODRPL_NA_TRPL_N;
	}


	public void setB_ODRPL_NA_TRPL_N(String b_ODRPL_NA_TRPL_N) {
		B_ODRPL_NA_TRPL_N = b_ODRPL_NA_TRPL_N;
	}


	public String getB_ODRPL_NA_TEAM_C() {
		return B_ODRPL_NA_TEAM_C;
	}


	public void setB_ODRPL_NA_TEAM_C(String b_ODRPL_NA_TEAM_C) {
		B_ODRPL_NA_TEAM_C = b_ODRPL_NA_TEAM_C;
	}


	public String getB_NA_WRS_C() {
		return B_NA_WRS_C;
	}


	public void setB_NA_WRS_C(String b_NA_WRS_C) {
		B_NA_WRS_C = b_NA_WRS_C;
	}


	public String getB_ODR_PCS() {
		return B_ODR_PCS;
	}


	public void setB_ODR_PCS(String b_ODR_PCS) {
		B_ODR_PCS = b_ODR_PCS;
	}


	public String getB_ODR_QT() {
		return B_ODR_QT;
	}


	public void setB_ODR_QT(String b_ODR_QT) {
		B_ODR_QT = b_ODR_QT;
	}


	public String getB_BOXPE_AQZ() {
		return B_BOXPE_AQZ;
	}


	public void setB_BOXPE_AQZ(String b_BOXPE_AQZ) {
		B_BOXPE_AQZ = b_BOXPE_AQZ;
	}


	public String getB_ODR_AM() {
		return B_ODR_AM;
	}


	public void setB_ODR_AM(String b_ODR_AM) {
		B_ODR_AM = b_ODR_AM;
	}


	public String getB_ODR_VAT() {
		return B_ODR_VAT;
	}


	public void setB_ODR_VAT(String b_ODR_VAT) {
		B_ODR_VAT = b_ODR_VAT;
	}


	public String getB_VCBT_AM() {
		return B_VCBT_AM;
	}


	public void setB_VCBT_AM(String b_VCBT_AM) {
		B_VCBT_AM = b_VCBT_AM;
	}


	public String getB_VHCNO() {
		return B_VHCNO;
	}


	public void setB_VHCNO(String b_VHCNO) {
		B_VHCNO = b_VHCNO;
	}


	public String getC_ODRPL_NA_TRPL_C() {
		return C_ODRPL_NA_TRPL_C;
	}


	public void setC_ODRPL_NA_TRPL_C(String c_ODRPL_NA_TRPL_C) {
		C_ODRPL_NA_TRPL_C = c_ODRPL_NA_TRPL_C;
	}


	public String getC_ODRPL_NA_TEAM_C() {
		return C_ODRPL_NA_TEAM_C;
	}


	public void setC_ODRPL_NA_TEAM_C(String c_ODRPL_NA_TEAM_C) {
		C_ODRPL_NA_TEAM_C = c_ODRPL_NA_TEAM_C;
	}


	public String getC_ODR_DT() {
		return C_ODR_DT;
	}


	public void setC_ODR_DT(String c_ODR_DT) {
		C_ODR_DT = c_ODR_DT;
	}


	public String getC_ODR_SLPNO() {
		return C_ODR_SLPNO;
	}


	public void setC_ODR_SLPNO(String c_ODR_SLPNO) {
		C_ODR_SLPNO = c_ODR_SLPNO;
	}


	public String getC_VHCNO() {
		return C_VHCNO;
	}


	public void setC_VHCNO(String c_VHCNO) {
		C_VHCNO = c_VHCNO;
	}


	public String getC_NA_WRS_C() {
		return C_NA_WRS_C;
	}


	public void setC_NA_WRS_C(String c_NA_WRS_C) {
		C_NA_WRS_C = c_NA_WRS_C;
	}


	public String getC_MNGT_NA_TRPL_C() {
		return C_MNGT_NA_TRPL_C;
	}


	public void setC_MNGT_NA_TRPL_C(String c_MNGT_NA_TRPL_C) {
		C_MNGT_NA_TRPL_C = c_MNGT_NA_TRPL_C;
	}


	public String getC_CLNTNM() {
		return C_CLNTNM;
	}


	public void setC_CLNTNM(String c_CLNTNM) {
		C_CLNTNM = c_CLNTNM;
	}


	public String getC_ODR_QT() {
		return C_ODR_QT;
	}


	public void setC_ODR_QT(String c_ODR_QT) {
		C_ODR_QT = c_ODR_QT;
	}


	public String getC_ODR_AM() {
		return C_ODR_AM;
	}


	public void setC_ODR_AM(String c_ODR_AM) {
		C_ODR_AM = c_ODR_AM;
	}


	public String getC_ODR_VAT() {
		return C_ODR_VAT;
	}


	public void setC_ODR_VAT(String c_ODR_VAT) {
		C_ODR_VAT = c_ODR_VAT;
	}


	public String getC_VCBT_AM() {
		return C_VCBT_AM;
	}


	public void setC_VCBT_AM(String c_VCBT_AM) {
		C_VCBT_AM = c_VCBT_AM;
	}


	public String getC_SPY_TPC() {
		return C_SPY_TPC;
	}


	public void setC_SPY_TPC(String c_SPY_TPC) {
		C_SPY_TPC = c_SPY_TPC;
	}


	public String getC_NA_ODR_STS_DSC() {
		return C_NA_ODR_STS_DSC;
	}


	public void setC_NA_ODR_STS_DSC(String c_NA_ODR_STS_DSC) {
		C_NA_ODR_STS_DSC = c_NA_ODR_STS_DSC;
	}


	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
}
