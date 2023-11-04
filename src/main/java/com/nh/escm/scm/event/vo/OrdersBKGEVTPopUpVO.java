package com.nh.escm.scm.event.vo;
import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;


/**
 * 화면ID : VAN_DS_FN_0201
 * 화면명 : 예약구매 조회 팝업
 * @author swha
 */
public class OrdersBKGEVTPopUpVO   implements Serializable{
	
	private static final long serialVersionUID = 20150825L;
	
	private String BKG_EVT_YY;
	private String BKG_EVT_NO;
	private String BKG_EVTNM;
	private String APL_NA_BZPLC;
	private String APL_NA_BZPLC_N;
	private String NA_ODR_STS_DSC;
	
	
	private String ORR_ST_DT;
	private String ORR_DDL_DT;
	private String DVY_ST_DT;
	private String DVY_CPL_DT;
	
	
	
	
	

	
	public String getORR_ST_DT() {
		return ORR_ST_DT;
	}




	public void setORR_ST_DT(String oRR_ST_DT) {
		ORR_ST_DT = oRR_ST_DT;
	}




	public String getDVY_ST_DT() {
		return DVY_ST_DT;
	}




	public void setDVY_ST_DT(String dVY_ST_DT) {
		DVY_ST_DT = dVY_ST_DT;
	}




	public String getDVY_CPL_DT() {
		return DVY_CPL_DT;
	}




	public void setDVY_CPL_DT(String dVY_CPL_DT) {
		DVY_CPL_DT = dVY_CPL_DT;
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




	public String getBKG_EVTNM() {
		return BKG_EVTNM;
	}




	public void setBKG_EVTNM(String bKG_EVTNM) {
		BKG_EVTNM = bKG_EVTNM;
	}




	public String getAPL_NA_BZPLC() {
		return APL_NA_BZPLC;
	}




	public void setAPL_NA_BZPLC(String aPL_NA_BZPLC) {
		APL_NA_BZPLC = aPL_NA_BZPLC;
	}




	public String getAPL_NA_BZPLC_N() {
		return APL_NA_BZPLC_N;
	}




	public void setAPL_NA_BZPLC_N(String aPL_NA_BZPLC_N) {
		APL_NA_BZPLC_N = aPL_NA_BZPLC_N;
	}




	public String getORR_DDL_DT() {
		return ORR_DDL_DT;
	}




	public void setORR_DDL_DT(String oRR_DDL_DT) {
		ORR_DDL_DT = oRR_DDL_DT;
	}




	public String getNA_ODR_STS_DSC() {
		return NA_ODR_STS_DSC;
	}




	public void setNA_ODR_STS_DSC(String nA_ODR_STS_DSC) {
		NA_ODR_STS_DSC = nA_ODR_STS_DSC;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
}
