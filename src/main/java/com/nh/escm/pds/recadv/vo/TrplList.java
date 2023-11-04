package com.nh.escm.pds.recadv.vo;

import java.io.Serializable;

public class TrplList implements Serializable{
	
	private static final long serialVersionUID = 20150918L;
	
	private String NA_TRPL_C;
	private String CLNTNM;
	
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}

}
