package com.nh.escm.pt.msgamn.vo;

import java.io.Serializable;
import java.util.Arrays;

public class MgSmsInfoVO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 20160526L;
	
	private String EXECUTE_DT;
	private String MOBILE;
	private String NAME;
	private String START_DTM;
	private String END_DTM;
	private String HOLIDAY_YN;
	
	
	public String getEXECUTE_DT() {
		return EXECUTE_DT;
	}
	public void setEXECUTE_DT(String eXECUTE_DT) {
		EXECUTE_DT = eXECUTE_DT;
	}
	public String getMOBILE() {
		return MOBILE;
	}
	public void setMOBILE(String mOBILE) {
		MOBILE = mOBILE;
	}
	public String getNAME() {
		return NAME;
	}
	public void setNAME(String nAME) {
		NAME = nAME;
	}
	public String getSTART_DTM() {
		return START_DTM;
	}
	public void setSTART_DTM(String sTART_DTM) {
		START_DTM = sTART_DTM;
	}
	public String getEND_DTM() {
		return END_DTM;
	}
	public void setEND_DTM(String eND_DTM) {
		END_DTM = eND_DTM;
	}
	public String getHOLIDAY_YN() {
		return HOLIDAY_YN;
	}
	public void setHOLIDAY_YN(String hOLIDAY_YN) {
		HOLIDAY_YN = hOLIDAY_YN;
	}
	@Override
	public String toString() {
		return "MgSmsInfoVO [EXECUTE_DT=" + EXECUTE_DT + ", MOBILE=" + MOBILE
				+ ", NAME=" + NAME + ", START_DTM=" + START_DTM + ", END_DTM="
				+ END_DTM + ", HOLIDAY_YN=" + HOLIDAY_YN + "]";
	}
	
	
	
	
	
}
