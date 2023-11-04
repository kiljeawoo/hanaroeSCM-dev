package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 상품조회 조회 팝업
 * @author swha
 */
public class OrderOrdersWrsVO  implements Serializable{
	private static final long serialVersionUID = 20150916L;
	
	private String NA_WRS_C;
	private String WRSNM;
	private String BOXPE_AQZ;
	private String SIMP_CNM;
	private String VCBT_NA_WRS_C;
	private String VCBX_NA_WRS_C;
	private String WRS_STDNM;
	private String TXT_DSC;
	private String NA_WRS_UNT_C;
	private String NA_WRS_STD_UNT_C;
	private String ODR_PCS;
	private String ODR_VAT;
	private String VCBT_UPR;
	private String VCBX_UPR;
	private String PD_YY_AMN_YN;
	private String PD_YY;
	private String NA_WRS_LCLC;
	private String NA_WRS_MCLC;
	private String NA_WRS_SCLC;
	private String NA_WRS_DTCF_C;
	private String DDLY_ST_DT;
	private String DDLY_ED_DT;
	private String DDLY_BAS_QT;
	private String MIN_ODR_QT;
	private String MAX_ODR_QT;
	private String PRGR_C;
	private String PHD_FCLT_C;
	private String VCBT_QT;
	private String ODR_FBID_YN;
	
	private String UP_TRPL_C;//로그인한 업체의 본사코드
	private String UP_SPYPL_NA_TRPL_C;//공급업체의 본사코드(취급상품)
	private String NA_USR_SYS_KDC;//발주처시스템코드
	private String SPYPL_NA_TRPL_N;//공급업체명(
	
	
	
	public String getSPYPL_NA_TRPL_N() {
		return SPYPL_NA_TRPL_N;
	}
	public void setSPYPL_NA_TRPL_N(String sPYPL_NA_TRPL_N) {
		SPYPL_NA_TRPL_N = sPYPL_NA_TRPL_N;
	}
	public String getNA_USR_SYS_KDC() {
		return NA_USR_SYS_KDC;
	}
	public void setNA_USR_SYS_KDC(String nA_USR_SYS_KDC) {
		NA_USR_SYS_KDC = nA_USR_SYS_KDC;
	}
	public String getUP_TRPL_C() {
		return UP_TRPL_C;
	}
	public void setUP_TRPL_C(String uP_TRPL_C) {
		UP_TRPL_C = uP_TRPL_C;
	}
	public String getUP_SPYPL_NA_TRPL_C() {
		return UP_SPYPL_NA_TRPL_C;
	}
	public void setUP_SPYPL_NA_TRPL_C(String uP_SPYPL_NA_TRPL_C) {
		UP_SPYPL_NA_TRPL_C = uP_SPYPL_NA_TRPL_C;
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
	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public String getSIMP_CNM() {
		return SIMP_CNM;
	}
	public void setSIMP_CNM(String sIMP_CNM) {
		SIMP_CNM = sIMP_CNM;
	}
	public String getVCBT_NA_WRS_C() {
		return VCBT_NA_WRS_C;
	}
	public void setVCBT_NA_WRS_C(String vCBT_NA_WRS_C) {
		VCBT_NA_WRS_C = vCBT_NA_WRS_C;
	}
	public String getVCBX_NA_WRS_C() {
		return VCBX_NA_WRS_C;
	}
	public void setVCBX_NA_WRS_C(String vCBX_NA_WRS_C) {
		VCBX_NA_WRS_C = vCBX_NA_WRS_C;
	}
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}
	public String getTXT_DSC() {
		return TXT_DSC;
	}
	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}
	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}
	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}
	public String getNA_WRS_STD_UNT_C() {
		return NA_WRS_STD_UNT_C;
	}
	public void setNA_WRS_STD_UNT_C(String nA_WRS_STD_UNT_C) {
		NA_WRS_STD_UNT_C = nA_WRS_STD_UNT_C;
	}
	public String getODR_PCS() {
		return ODR_PCS;
	}
	public void setODR_PCS(String oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}
	public String getODR_VAT() {
		return ODR_VAT;
	}
	public void setODR_VAT(String oDR_VAT) {
		ODR_VAT = oDR_VAT;
	}
	public String getVCBT_UPR() {
		return VCBT_UPR;
	}
	public void setVCBT_UPR(String vCBT_UPR) {
		VCBT_UPR = vCBT_UPR;
	}
	public String getVCBX_UPR() {
		return VCBX_UPR;
	}
	public void setVCBX_UPR(String vCBX_UPR) {
		VCBX_UPR = vCBX_UPR;
	}
	public String getPD_YY_AMN_YN() {
		return PD_YY_AMN_YN;
	}
	public void setPD_YY_AMN_YN(String pD_YY_AMN_YN) {
		PD_YY_AMN_YN = pD_YY_AMN_YN;
	}
	public String getPD_YY() {
		return PD_YY;
	}
	public void setPD_YY(String pD_YY) {
		PD_YY = pD_YY;
	}
	public String getNA_WRS_LCLC() {
		return NA_WRS_LCLC;
	}
	public void setNA_WRS_LCLC(String nA_WRS_LCLC) {
		NA_WRS_LCLC = nA_WRS_LCLC;
	}
	public String getNA_WRS_MCLC() {
		return NA_WRS_MCLC;
	}
	public void setNA_WRS_MCLC(String nA_WRS_MCLC) {
		NA_WRS_MCLC = nA_WRS_MCLC;
	}
	public String getNA_WRS_SCLC() {
		return NA_WRS_SCLC;
	}
	public void setNA_WRS_SCLC(String nA_WRS_SCLC) {
		NA_WRS_SCLC = nA_WRS_SCLC;
	}
	public String getNA_WRS_DTCF_C() {
		return NA_WRS_DTCF_C;
	}
	public void setNA_WRS_DTCF_C(String nA_WRS_DTCF_C) {
		NA_WRS_DTCF_C = nA_WRS_DTCF_C;
	}
	public String getDDLY_ST_DT() {
		return DDLY_ST_DT;
	}
	public void setDDLY_ST_DT(String dDLY_ST_DT) {
		DDLY_ST_DT = dDLY_ST_DT;
	}
	public String getDDLY_ED_DT() {
		return DDLY_ED_DT;
	}
	public void setDDLY_ED_DT(String dDLY_ED_DT) {
		DDLY_ED_DT = dDLY_ED_DT;
	}
	public String getDDLY_BAS_QT() {
		return DDLY_BAS_QT;
	}
	public void setDDLY_BAS_QT(String dDLY_BAS_QT) {
		DDLY_BAS_QT = dDLY_BAS_QT;
	}
	public String getMIN_ODR_QT() {
		return MIN_ODR_QT;
	}
	public void setMIN_ODR_QT(String mIN_ODR_QT) {
		MIN_ODR_QT = mIN_ODR_QT;
	}
	public String getMAX_ODR_QT() {
		return MAX_ODR_QT;
	}
	public void setMAX_ODR_QT(String mAX_ODR_QT) {
		MAX_ODR_QT = mAX_ODR_QT;
	}
	public String getPRGR_C() {
		return PRGR_C;
	}
	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}
	public String getPHD_FCLT_C() {
		return PHD_FCLT_C;
	}
	public void setPHD_FCLT_C(String pHD_FCLT_C) {
		PHD_FCLT_C = pHD_FCLT_C;
	}
	public String getVCBT_QT() {
		return VCBT_QT;
	}
	public void setVCBT_QT(String vCBT_QT) {
		VCBT_QT = vCBT_QT;
	}
	public String getODR_FBID_YN() {
		return ODR_FBID_YN;
	}
	public void setODR_FBID_YN(String oDR_FBID_YN) {
		ODR_FBID_YN = oDR_FBID_YN;
	}
	
	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
	
}
