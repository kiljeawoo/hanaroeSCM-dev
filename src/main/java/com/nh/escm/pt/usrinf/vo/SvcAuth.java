package com.nh.escm.pt.usrinf.vo;

import java.util.List;






/**
 * <pre>SvcAuth.java</pre>
 * @author 김복궁
 * @version 1.0
 * @since 2015. 10. 22.
 * @modified 
 * @modifier 
 */

public class SvcAuth {
	

	private String SVC_ID;
	private String MB_ID;
	private String USR_NM;
	private String RQ_DSC;
	private String NA_TRPL_C;
	private String USR_AUTH_DSC;	
	private List<String> str;
	
	
	public String getSVC_ID() {
		return SVC_ID;
	}
	public void setSVC_ID(String sVC_ID) {
		SVC_ID = sVC_ID;
	}
	public String getMB_ID() {
		return MB_ID;
	}
	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}
	public String getUSR_NM() {
		return USR_NM;
	}
	public void setUSR_NM(String uSR_NM) {
		USR_NM = uSR_NM;
	}
	public String getRQ_DSC() {
		return RQ_DSC;
	}
	public void setRQ_DSC(String rQ_DSC) {
		RQ_DSC = rQ_DSC;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getUSR_AUTH_DSC() {
		return USR_AUTH_DSC;
	}
	public void setUSR_AUTH_DSC(String uSR_AUTH_DSC) {
		USR_AUTH_DSC = uSR_AUTH_DSC;
	}
	public List<String> getStr() {
		return str;
	}
	public void setStr(List<String> str) {
		this.str = str;
	}	
	 
}

