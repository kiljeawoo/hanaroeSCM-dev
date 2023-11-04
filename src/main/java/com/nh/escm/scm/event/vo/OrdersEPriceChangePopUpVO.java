package com.nh.escm.scm.event.vo;
import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;


/**
 * 화면ID : VAN_DS_FN_0206
 * 화면명 : 통합행사조회
 * @author swha
 */
public class OrdersEPriceChangePopUpVO   implements Serializable{
	
	private static final long serialVersionUID = 20150826L;
	
	private String EVT_SQNO;
	private String EVTNM;
	private String EVT_ST_DT;
	private String EVT_ED_DT;
	public String getEVT_SQNO() {
		return EVT_SQNO;
	}
	public void setEVT_SQNO(String eVT_SQNO) {
		EVT_SQNO = eVT_SQNO;
	}
	public String getEVTNM() {
		return EVTNM;
	}
	public void setEVTNM(String eVTNM) {
		EVTNM = eVTNM;
	}
	public String getEVT_ST_DT() {
		return EVT_ST_DT;
	}
	public void setEVT_ST_DT(String eVT_ST_DT) {
		EVT_ST_DT = eVT_ST_DT;
	}
	public String getEVT_ED_DT() {
		return EVT_ED_DT;
	}
	public void setEVT_ED_DT(String eVT_ED_DT) {
		EVT_ED_DT = eVT_ED_DT;
	}
	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
	
	
}
