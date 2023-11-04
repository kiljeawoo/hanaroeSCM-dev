package com.nh.escm.scm.reserve.vo;

import java.io.Serializable;

public class ReserveCenterDetailVO implements Serializable{
	
	private static final long serialVersionUID = 20150902L;
	
	private String PHD_NA_BZPLC;  //물류경제통합사업장코드
	private String VHC_BKG_PHD_IDVD_NO;  //차량예약물류개별번호
	private String NA_TRPL_C;  //경제통합거래처코드
	private String VHC_BKG_DT;  //차량예약일자
	private int VHC_BKG_PHD_SQNO;  //차량예약물류일련번호
	private String STR_PHD_IDVD_NO;  //입고물류개별번호
	private String CRUD_DSC;  //CUD처리구분
	
	public String getPHD_NA_BZPLC() {
		return PHD_NA_BZPLC;
	}
	public void setPHD_NA_BZPLC(String pHD_NA_BZPLC) {
		PHD_NA_BZPLC = pHD_NA_BZPLC;
	}
	public String getVHC_BKG_PHD_IDVD_NO() {
		return VHC_BKG_PHD_IDVD_NO;
	}
	public void setVHC_BKG_PHD_IDVD_NO(String vHC_BKG_PHD_IDVD_NO) {
		VHC_BKG_PHD_IDVD_NO = vHC_BKG_PHD_IDVD_NO;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getVHC_BKG_DT() {
		return VHC_BKG_DT;
	}
	public void setVHC_BKG_DT(String vHC_BKG_DT) {
		VHC_BKG_DT = vHC_BKG_DT;
	}
	public int getVHC_BKG_PHD_SQNO() {
		return VHC_BKG_PHD_SQNO;
	}
	public void setVHC_BKG_PHD_SQNO(int vHC_BKG_PHD_SQNO) {
		VHC_BKG_PHD_SQNO = vHC_BKG_PHD_SQNO;
	}
	public String getSTR_PHD_IDVD_NO() {
		return STR_PHD_IDVD_NO;
	}
	public void setSTR_PHD_IDVD_NO(String sTR_PHD_IDVD_NO) {
		STR_PHD_IDVD_NO = sTR_PHD_IDVD_NO;
	}
	public String getCRUD_DSC() {
		return CRUD_DSC;
	}
	public void setCRUD_DSC(String cRUD_DSC) {
		CRUD_DSC = cRUD_DSC;
	}
	

	
}
