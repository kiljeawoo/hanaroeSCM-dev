package com.nh.escm.scm.delivery.sea.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 배송예정서번호 팝업 VO
 * @author HyeRim.Oh
 *
 */
public class CenterOdDlvpnshtVO implements Serializable {
	
	private static final long serialVersionUID = 20150707L;
	
	private String RVOPL_NA_TRPL_C;  //수주처 
	private String RVOPL_CLNTNM;  //수주처명
	private String ODRPL_NA_TRPL_C;  //발주처 
	private String ODRPL_CLNTNM;  //발주처명
	private String DVYAA_NA_TRPL_C;  //배송지거래처  
	private String DVYAA_CLNTNM;  //배송지거래처명
	private String NA_DVY_PLASH_SLPNO;  //배송예정서번호 
	private double DVY_AM;  //금액 
	private String DVY_PLA_DT;  //배송예정일 
	private String CSER_CTR_TPC;  //계약구분 
	private String CSER_CTR_TPC_N;  //계약구분
	private String DVY_PLASH_STSC;  //상태코드 
	private String DVY_PLASH_UGAV_YN;  //사용가능여부 
	private String SPYPL_NA_TRPL_C;  //공급처 
	private String SPYPL_CLNTNM;  //공급처명
	private String RMK_CNTN;  //비고
	private String DDLY_YN;  //비고
	private String PRGR_C;  //비고
	private String CSER_NA_USR_SYS_KDC;  //비고
	private String TEMP_YN;//임시저장여부
	
	
	

	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}




	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}




	public String getRVOPL_CLNTNM() {
		return RVOPL_CLNTNM;
	}




	public void setRVOPL_CLNTNM(String rVOPL_CLNTNM) {
		RVOPL_CLNTNM = rVOPL_CLNTNM;
	}




	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}




	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}




	public String getODRPL_CLNTNM() {
		return ODRPL_CLNTNM;
	}




	public void setODRPL_CLNTNM(String oDRPL_CLNTNM) {
		ODRPL_CLNTNM = oDRPL_CLNTNM;
	}




	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}




	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}




	public String getDVYAA_CLNTNM() {
		return DVYAA_CLNTNM;
	}




	public void setDVYAA_CLNTNM(String dVYAA_CLNTNM) {
		DVYAA_CLNTNM = dVYAA_CLNTNM;
	}




	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}




	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}




	public double getDVY_AM() {
		return DVY_AM;
	}




	public void setDVY_AM(double dVY_AM) {
		DVY_AM = dVY_AM;
	}




	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}




	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}




	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}




	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}




	public String getCSER_CTR_TPC_N() {
		return CSER_CTR_TPC_N;
	}




	public void setCSER_CTR_TPC_N(String cSER_CTR_TPC_N) {
		CSER_CTR_TPC_N = cSER_CTR_TPC_N;
	}




	public String getDVY_PLASH_STSC() {
		return DVY_PLASH_STSC;
	}




	public void setDVY_PLASH_STSC(String dVY_PLASH_STSC) {
		DVY_PLASH_STSC = dVY_PLASH_STSC;
	}




	public String getDVY_PLASH_UGAV_YN() {
		return DVY_PLASH_UGAV_YN;
	}




	public void setDVY_PLASH_UGAV_YN(String dVY_PLASH_UGAV_YN) {
		DVY_PLASH_UGAV_YN = dVY_PLASH_UGAV_YN;
	}




	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}




	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}




	public String getSPYPL_CLNTNM() {
		return SPYPL_CLNTNM;
	}




	public void setSPYPL_CLNTNM(String sPYPL_CLNTNM) {
		SPYPL_CLNTNM = sPYPL_CLNTNM;
	}




	public String getRMK_CNTN() {
		return RMK_CNTN;
	}




	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}




	public String getDDLY_YN() {
		return DDLY_YN;
	}




	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}




	public String getPRGR_C() {
		return PRGR_C;
	}




	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}




	public String getCSER_NA_USR_SYS_KDC() {
		return CSER_NA_USR_SYS_KDC;
	}




	public void setCSER_NA_USR_SYS_KDC(String cSER_NA_USR_SYS_KDC) {
		CSER_NA_USR_SYS_KDC = cSER_NA_USR_SYS_KDC;
	}




	public String getTEMP_YN() {
		return TEMP_YN;
	}




	public void setTEMP_YN(String tEMP_YN) {
		TEMP_YN = tEMP_YN;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	

}
