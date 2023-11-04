package com.nh.escm.scm.event.vo;
import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;


/**
 * 화면ID 	: VAN_DS_SC_0210
 * 화면명 	: 예약행사집계현황
 * 기능 		: Excel DownLoad Master
 * @author swha
 */
public class OrdersPreEventSumsExcelMasterVO   implements Serializable{
	
	private static final long serialVersionUID = 20150902L;
	
	private String TRPL_VIEW;
	private String BKG_EVT_YY;
	private String BKG_EVT_NO;
	private String TRPL_C;
	private String TRPL_N;
	private String TEAM_N;
	private String RQ_QT;
	private String DFN_QT;
	private String DFN_RATE;
	private String GOOD_PR;
	private String DVY_RQR_DT;
	private String D_BKG_EVT_YY;
	private String D_BKG_EVT_NO;
	private String D_ODRPL_NA_TRPL_C;
	private String D_ODRPL_NA_TEAM_C;
	private String D_RVOPL_NA_TRPL_C;
	private String D_RVOPL_NA_TRPL_N;
	private String D_RVOPL_NA_TEAM_C;
	private String D_DFN_QT;
	private String D_GOOD_PR;
	private String D_S_GOOD_PR;
	private String D_NA_WRS_C;
	private String D_DVY_RQR_DT;
	private String D_SLGT_ETR_NM;
	private String D_BOXPE_AQZ;
	private String D_NA_WRS_N;
	private String D_WRS_STDNM;
	private String D_UNIT;
	
	
	public String getTRPL_VIEW() {
		return TRPL_VIEW;
	}


	public void setTRPL_VIEW(String tRPL_VIEW) {
		TRPL_VIEW = tRPL_VIEW;
	}


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


	public String getTRPL_C() {
		return TRPL_C;
	}


	public void setTRPL_C(String tRPL_C) {
		TRPL_C = tRPL_C;
	}


	public String getTRPL_N() {
		return TRPL_N;
	}


	public void setTRPL_N(String tRPL_N) {
		TRPL_N = tRPL_N;
	}


	public String getTEAM_N() {
		return TEAM_N;
	}


	public void setTEAM_N(String tEAM_N) {
		TEAM_N = tEAM_N;
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


	public String getGOOD_PR() {
		return GOOD_PR;
	}


	public void setGOOD_PR(String gOOD_PR) {
		GOOD_PR = gOOD_PR;
	}


	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}


	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}


	public String getD_BKG_EVT_YY() {
		return D_BKG_EVT_YY;
	}


	public void setD_BKG_EVT_YY(String d_BKG_EVT_YY) {
		D_BKG_EVT_YY = d_BKG_EVT_YY;
	}


	public String getD_BKG_EVT_NO() {
		return D_BKG_EVT_NO;
	}


	public void setD_BKG_EVT_NO(String d_BKG_EVT_NO) {
		D_BKG_EVT_NO = d_BKG_EVT_NO;
	}


	public String getD_ODRPL_NA_TRPL_C() {
		return D_ODRPL_NA_TRPL_C;
	}


	public void setD_ODRPL_NA_TRPL_C(String d_ODRPL_NA_TRPL_C) {
		D_ODRPL_NA_TRPL_C = d_ODRPL_NA_TRPL_C;
	}


	public String getD_ODRPL_NA_TEAM_C() {
		return D_ODRPL_NA_TEAM_C;
	}


	public void setD_ODRPL_NA_TEAM_C(String d_ODRPL_NA_TEAM_C) {
		D_ODRPL_NA_TEAM_C = d_ODRPL_NA_TEAM_C;
	}


	public String getD_RVOPL_NA_TRPL_C() {
		return D_RVOPL_NA_TRPL_C;
	}


	public void setD_RVOPL_NA_TRPL_C(String d_RVOPL_NA_TRPL_C) {
		D_RVOPL_NA_TRPL_C = d_RVOPL_NA_TRPL_C;
	}


	public String getD_RVOPL_NA_TRPL_N() {
		return D_RVOPL_NA_TRPL_N;
	}


	public void setD_RVOPL_NA_TRPL_N(String d_RVOPL_NA_TRPL_N) {
		D_RVOPL_NA_TRPL_N = d_RVOPL_NA_TRPL_N;
	}


	public String getD_RVOPL_NA_TEAM_C() {
		return D_RVOPL_NA_TEAM_C;
	}


	public void setD_RVOPL_NA_TEAM_C(String d_RVOPL_NA_TEAM_C) {
		D_RVOPL_NA_TEAM_C = d_RVOPL_NA_TEAM_C;
	}


	public String getD_DFN_QT() {
		return D_DFN_QT;
	}


	public void setD_DFN_QT(String d_DFN_QT) {
		D_DFN_QT = d_DFN_QT;
	}


	public String getD_GOOD_PR() {
		return D_GOOD_PR;
	}


	public void setD_GOOD_PR(String d_GOOD_PR) {
		D_GOOD_PR = d_GOOD_PR;
	}


	public String getD_S_GOOD_PR() {
		return D_S_GOOD_PR;
	}


	public void setD_S_GOOD_PR(String d_S_GOOD_PR) {
		D_S_GOOD_PR = d_S_GOOD_PR;
	}


	public String getD_NA_WRS_C() {
		return D_NA_WRS_C;
	}


	public void setD_NA_WRS_C(String d_NA_WRS_C) {
		D_NA_WRS_C = d_NA_WRS_C;
	}


	public String getD_DVY_RQR_DT() {
		return D_DVY_RQR_DT;
	}


	public void setD_DVY_RQR_DT(String d_DVY_RQR_DT) {
		D_DVY_RQR_DT = d_DVY_RQR_DT;
	}


	public String getD_SLGT_ETR_NM() {
		return D_SLGT_ETR_NM;
	}


	public void setD_SLGT_ETR_NM(String d_SLGT_ETR_NM) {
		D_SLGT_ETR_NM = d_SLGT_ETR_NM;
	}


	public String getD_BOXPE_AQZ() {
		return D_BOXPE_AQZ;
	}


	public void setD_BOXPE_AQZ(String d_BOXPE_AQZ) {
		D_BOXPE_AQZ = d_BOXPE_AQZ;
	}


	public String getD_NA_WRS_N() {
		return D_NA_WRS_N;
	}


	public void setD_NA_WRS_N(String d_NA_WRS_N) {
		D_NA_WRS_N = d_NA_WRS_N;
	}


	public String getD_WRS_STDNM() {
		return D_WRS_STDNM;
	}


	public void setD_WRS_STDNM(String d_WRS_STDNM) {
		D_WRS_STDNM = d_WRS_STDNM;
	}


	public String getD_UNIT() {
		return D_UNIT;
	}


	public void setD_UNIT(String d_UNIT) {
		D_UNIT = d_UNIT;
	}


	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
}
