package com.nh.escm.pds.recadv.vo;

import java.io.Serializable;
import java.util.List;

public class PDSRecadvFeeAmn implements Serializable{
	private static final long serialVersionUID = 20150918L;
	
	private String HOFF_C;  //본사코드
	private String BRO_C;  //지사코드
	private String NA_WRS_C;  //상품코드
	private String BRO_CNM;  //지사명
	private String WRSNM;  //상품명
	private double FEERT;  //수수료율
	
	private String CRUD_DSC; //CRUD 코드
		
	private List<TrplList> detailVoList;
	
	public String getHOFF_C() {
		return HOFF_C;
	}
	public void setHOFF_C(String hOFF_C) {
		HOFF_C = hOFF_C;
	}
	public String getBRO_C() {
		return BRO_C;
	}
	public void setBRO_C(String bRO_C) {
		BRO_C = bRO_C;
	}	
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getBRO_CNM() {
		return BRO_CNM;
	}
	public void setBRO_CNM(String bRO_CNM) {
		BRO_CNM = bRO_CNM;
	}
	public String getWRSNM() {
		return WRSNM;
	}
	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}
	public double getFEERT() {
		return FEERT;
	}
	public void setFEERT(double fEERT) {
		FEERT = fEERT;
	}
	public String getCRUD_DSC() {
		return CRUD_DSC;
	}
	public void setCRUD_DSC(String cRUD_DSC) {
		CRUD_DSC = cRUD_DSC;
	}
	public List<TrplList> getDetailVoList() {
		return detailVoList;
	}
	public void setDetailVoList(List<TrplList> detailVoList) {
		this.detailVoList = detailVoList;
	}
	
}
