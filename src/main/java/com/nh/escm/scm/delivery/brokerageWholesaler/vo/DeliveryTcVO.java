package com.nh.escm.scm.delivery.brokerageWholesaler.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 TC 리스트
 * @author swha
 *
 */
public class DeliveryTcVO  implements Serializable {
	
	private static final long serialVersionUID = 20151031L;
	
	private String NA_BZPLC;//사업장코드
	private String CLNTNM; //사업장명
	private String BZPL_TPC; //사업장유형코드
	private String BZPL_DTI_TPC; //사업장세부유형코드
	private String BZPL_TPNM; //사업장유형명
	private String BZPL_DTI_TPNM;//사업장세부유형명
	
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




	public String getBZPL_TPC() {
		return BZPL_TPC;
	}




	public void setBZPL_TPC(String bZPL_TPC) {
		BZPL_TPC = bZPL_TPC;
	}




	public String getBZPL_DTI_TPC() {
		return BZPL_DTI_TPC;
	}




	public void setBZPL_DTI_TPC(String bZPL_DTI_TPC) {
		BZPL_DTI_TPC = bZPL_DTI_TPC;
	}




	public String getBZPL_TPNM() {
		return BZPL_TPNM;
	}




	public void setBZPL_TPNM(String bZPL_TPNM) {
		BZPL_TPNM = bZPL_TPNM;
	}




	public String getBZPL_DTI_TPNM() {
		return BZPL_DTI_TPNM;
	}




	public void setBZPL_DTI_TPNM(String bZPL_DTI_TPNM) {
		BZPL_DTI_TPNM = bZPL_DTI_TPNM;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	


	

	
}
