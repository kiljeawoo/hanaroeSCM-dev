package com.nh.escm.scm.order.vo;

import java.io.Serializable;

/**
 * 사무소 조회 팝업
 * @author swha
 */
public class OrderOrdersBrVO  implements Serializable{
	private static final long serialVersionUID = 20150916L;
	
	private String NAAC_DSC_N;//중앙회조합구분
	private String NA_TRPL_C;//거래처
	private String NA_TRPL_N;//거래처명
	private String BZPL_TPC;//사업장유형
	private String BZPL_DTI_TPC_N;//사업장 세부유형명
	private String BZPL_TPNM;//사업장유형명
	private String BIZ_NUMBER;//사업자번호
	private String NA_RGN_C;//지역
	private String RGN_CNM;//지역명
	private String TEL;//전화번호
	private String NA_BZ_TPC;//사업유형
	private String NA_BZ_TPNM;//사업유형명
	private String TR_STOP_YN;//거래중지여부
	
	public String getNAAC_DSC_N() {
		return NAAC_DSC_N;
	}
	public void setNAAC_DSC_N(String nAAC_DSC_N) {
		NAAC_DSC_N = nAAC_DSC_N;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getNA_TRPL_N() {
		return NA_TRPL_N;
	}
	public void setNA_TRPL_N(String nA_TRPL_N) {
		NA_TRPL_N = nA_TRPL_N;
	}
	public String getBZPL_TPC() {
		return BZPL_TPC;
	}
	public void setBZPL_TPC(String bZPL_TPC) {
		BZPL_TPC = bZPL_TPC;
	}
	public String getBZPL_DTI_TPC_N() {
		return BZPL_DTI_TPC_N;
	}
	public void setBZPL_DTI_TPC_N(String bZPL_DTI_TPC_N) {
		BZPL_DTI_TPC_N = bZPL_DTI_TPC_N;
	}
	public String getBZPL_TPNM() {
		return BZPL_TPNM;
	}
	public void setBZPL_TPNM(String bZPL_TPNM) {
		BZPL_TPNM = bZPL_TPNM;
	}
	public String getBIZ_NUMBER() {
		return BIZ_NUMBER;
	}
	public void setBIZ_NUMBER(String bIZ_NUMBER) {
		BIZ_NUMBER = bIZ_NUMBER;
	}
	public String getNA_RGN_C() {
		return NA_RGN_C;
	}
	public void setNA_RGN_C(String nA_RGN_C) {
		NA_RGN_C = nA_RGN_C;
	}
	public String getRGN_CNM() {
		return RGN_CNM;
	}
	public void setRGN_CNM(String rGN_CNM) {
		RGN_CNM = rGN_CNM;
	}
	public String getTEL() {
		return TEL;
	}
	public void setTEL(String tEL) {
		TEL = tEL;
	}
	public String getNA_BZ_TPC() {
		return NA_BZ_TPC;
	}
	public void setNA_BZ_TPC(String nA_BZ_TPC) {
		NA_BZ_TPC = nA_BZ_TPC;
	}
	public String getNA_BZ_TPNM() {
		return NA_BZ_TPNM;
	}
	public void setNA_BZ_TPNM(String nA_BZ_TPNM) {
		NA_BZ_TPNM = nA_BZ_TPNM;
	}
	public String getTR_STOP_YN() {
		return TR_STOP_YN;
	}
	public void setTR_STOP_YN(String tR_STOP_YN) {
		TR_STOP_YN = tR_STOP_YN;
	}
	
	
	
	
	
	
	
}
