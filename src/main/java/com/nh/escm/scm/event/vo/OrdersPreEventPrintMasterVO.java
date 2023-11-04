package com.nh.escm.scm.event.vo;
import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;


/**
 * 화면ID 	: VAN_DS_SC_0200
 * 화면명 	: 예약행사진행현황
 * 기능 		: Print Master
 * @author swha
 */
public class OrdersPreEventPrintMasterVO   implements Serializable{
	
	private static final long serialVersionUID = 20150914L;
	
	
	private String BKG_EVT_YY;
	private String BKG_EVT_NO;
	private String NA_WRS_C;
	private String NA_WRS_N;
	private String WRSNM;
	private String UNIT;
	private String NA_WRS_STD_UNT_N;
	private String NA_WRS_UNT_N;
	private String BOXPE_AQZ;
	private String BYNG_UPR;
	private String SLGT_ETR_DSC;
	private String SPYPL_NA_TRPL_C;
	private String SPYPL_NA_TRPL_N;
	private String RQ_QT;
	private String DFN_QT;
	
	private List<OrdersPreEventPrintDetailVO> list;
	



	public String getBKG_EVT_YY() {
		return BKG_EVT_YY;
	}




	public void setBKG_EVT_YY(String bKG_EVT_YY) {
		BKG_EVT_YY = bKG_EVT_YY;
	}




	public String getBKG_EVT_NO() {
		return BKG_EVT_NO;
	}




	public void setBKG_EVT_NO(String bKG_EVT_NO) {
		BKG_EVT_NO = bKG_EVT_NO;
	}




	public String getNA_WRS_C() {
		return NA_WRS_C;
	}




	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}


	


	public String getNA_WRS_N() {
		return NA_WRS_N;
	}




	public void setNA_WRS_N(String nA_WRS_N) {
		NA_WRS_N = nA_WRS_N;
	}




	public String getWRSNM() {
		return WRSNM;
	}




	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}
	
	

	public String getUNIT() {
		return UNIT;
	}




	public void setUNIT(String uNIT) {
		UNIT = uNIT;
	}




	public String getNA_WRS_STD_UNT_N() {
		return NA_WRS_STD_UNT_N;
	}




	public void setNA_WRS_STD_UNT_N(String nA_WRS_STD_UNT_N) {
		NA_WRS_STD_UNT_N = nA_WRS_STD_UNT_N;
	}




	public String getNA_WRS_UNT_N() {
		return NA_WRS_UNT_N;
	}




	public void setNA_WRS_UNT_N(String nA_WRS_UNT_N) {
		NA_WRS_UNT_N = nA_WRS_UNT_N;
	}




	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}




	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}




	public String getBYNG_UPR() {
		return BYNG_UPR;
	}




	public void setBYNG_UPR(String bYNG_UPR) {
		BYNG_UPR = bYNG_UPR;
	}




	public String getSLGT_ETR_DSC() {
		return SLGT_ETR_DSC;
	}




	public void setSLGT_ETR_DSC(String sLGT_ETR_DSC) {
		SLGT_ETR_DSC = sLGT_ETR_DSC;
	}




	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}




	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}




	public String getSPYPL_NA_TRPL_N() {
		return SPYPL_NA_TRPL_N;
	}




	public void setSPYPL_NA_TRPL_N(String sPYPL_NA_TRPL_N) {
		SPYPL_NA_TRPL_N = sPYPL_NA_TRPL_N;
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




	public List<OrdersPreEventPrintDetailVO> getList() {
		return list;
	}




	public void setList(List<OrdersPreEventPrintDetailVO> list) {
		this.list = list;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
}
