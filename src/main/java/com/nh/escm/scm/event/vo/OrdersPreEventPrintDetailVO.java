package com.nh.escm.scm.event.vo;
import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;


/**
 * 화면ID 	: VAN_DS_SC_0200
 * 화면명 	: 예약행사진행현황
 * 기능 		: Print Detail
 * @author swha
 */
public class OrdersPreEventPrintDetailVO   implements Serializable{
	
	private static final long serialVersionUID = 20150914L;
	
	
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TRPL_N;
	private String RQ_QT;
	private String DFN_QT;
	private String DFN_RATE;
	private String TOT_GOOD_PR;
	private List<OrdersPreEventPrintMasterVO> list;
	
	




	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}






	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}






	public String getODRPL_NA_TRPL_N() {
		return ODRPL_NA_TRPL_N;
	}






	public void setODRPL_NA_TRPL_N(String oDRPL_NA_TRPL_N) {
		ODRPL_NA_TRPL_N = oDRPL_NA_TRPL_N;
	}






	public String getRQ_QT() {
		return RQ_QT;
	}






	public void setRQ_QT(String rQ_QT) {
		RQ_QT = rQ_QT;
	}






	public String getDFN_QT() {
		return DFN_QT;
	}






	public void setDFN_QT(String dFN_QT) {
		DFN_QT = dFN_QT;
	}






	public String getDFN_RATE() {
		return DFN_RATE;
	}






	public void setDFN_RATE(String dFN_RATE) {
		DFN_RATE = dFN_RATE;
	}






	public String getTOT_GOOD_PR() {
		return TOT_GOOD_PR;
	}






	public void setTOT_GOOD_PR(String tOT_GOOD_PR) {
		TOT_GOOD_PR = tOT_GOOD_PR;
	}






	public List<OrdersPreEventPrintMasterVO> getList() {
		return list;
	}






	public void setList(List<OrdersPreEventPrintMasterVO> list) {
		this.list = list;
	}






	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
}
