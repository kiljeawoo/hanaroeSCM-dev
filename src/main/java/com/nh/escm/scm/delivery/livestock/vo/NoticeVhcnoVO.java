package com.nh.escm.scm.delivery.livestock.vo;

import java.io.Serializable;

public class NoticeVhcnoVO implements Serializable {
	
	private static final long serialVersionUID = 20150713L;
	
	private String PHD_NA_BZPLC;
	private String SPYPL_VHC_PHD_IDVD_NO;
	private String NA_TRPL_C;
	private String VHCNO;
	public String getPHD_NA_BZPLC() {
		return PHD_NA_BZPLC;
	}
	public void setPHD_NA_BZPLC(String pHD_NA_BZPLC) {
		PHD_NA_BZPLC = pHD_NA_BZPLC;
	}
	public String getSPYPL_VHC_PHD_IDVD_NO() {
		return SPYPL_VHC_PHD_IDVD_NO;
	}
	public void setSPYPL_VHC_PHD_IDVD_NO(String sPYPL_VHC_PHD_IDVD_NO) {
		SPYPL_VHC_PHD_IDVD_NO = sPYPL_VHC_PHD_IDVD_NO;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getVHCNO() {
		return VHCNO;
	}
	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}
	
	
	@Override
	public String toString() {
		return "NoticeVhcnoVO [PHD_NA_BZPLC=" + PHD_NA_BZPLC
				+ ", SPYPL_VHC_PHD_IDVD_NO=" + SPYPL_VHC_PHD_IDVD_NO
				+ ", NA_TRPL_C=" + NA_TRPL_C + ", VHCNO=" + VHCNO + "]";
	}
	
	
	

}
