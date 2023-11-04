package com.nh.escm.pds.recadv.vo;

import java.io.Serializable;

/**
 * 화면ID : VAN_DS_SC_1031
 * 화면명 : 기간별 상품별/점포별 정보조회 - 상세
 * @author swha
 */
public class PDSRecadvPeriodSkuSumDetailVO  implements Serializable{
	
	private static final long serialVersionUID = 20150618L;
	
	private String NA_BZPLC;
	private String CLNTNM;
	private String BYNG_QT;
	private double BYAM;
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getBYNG_QT() {
		return BYNG_QT;
	}
	public void setBYNG_QT(String bYNG_QT) {
		BYNG_QT = bYNG_QT;
	}
	public double getBYAM() {
		return BYAM;
	}
	public void setBYAM(double bYAM) {
		BYAM = bYAM;
	}
	
	
	
	
	
	
}
