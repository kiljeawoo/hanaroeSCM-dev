package com.nh.escm.pds.recadv.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

public class PDSRecadvNPeriodStoreSumVO implements Serializable{
	
	private static final long serialVersionUID = 20150622L;
	
	
	private String BZPLC;
	private String BZPLCNM;
	private int NBY_QT;
	private int NBY_AM;
	private String SRH_NBY_DT_FR;
	private String SRH_NBY_DT_TO;
	private String SRH_CHK_ALL;
	private String SRH_TRPL_C;
	private long TOTAL_NBY_QT;
	private long TOTAL_NBY_AM;
	public String getBZPLC() {
		return BZPLC;
	}
	public void setBZPLC(String bZPLC) {
		BZPLC = bZPLC;
	}
	public String getBZPLCNM() {
		return BZPLCNM;
	}
	public void setBZPLCNM(String bZPLCNM) {
		BZPLCNM = bZPLCNM;
	}
	public int getNBY_QT() {
		return NBY_QT;
	}
	public void setNBY_QT(int nBY_QT) {
		NBY_QT = nBY_QT;
	}
	public int getNBY_AM() {
		return NBY_AM;
	}
	public void setNBY_AM(int nBY_AM) {
		NBY_AM = nBY_AM;
	}
	public String getSRH_NBY_DT_FR() {
		return SRH_NBY_DT_FR;
	}
	public void setSRH_NBY_DT_FR(String sRH_NBY_DT_FR) {
		SRH_NBY_DT_FR = sRH_NBY_DT_FR;
	}
	public String getSRH_NBY_DT_TO() {
		return SRH_NBY_DT_TO;
	}
	public void setSRH_NBY_DT_TO(String sRH_NBY_DT_TO) {
		SRH_NBY_DT_TO = sRH_NBY_DT_TO;
	}
	public String getSRH_CHK_ALL() {
		return SRH_CHK_ALL;
	}
	public void setSRH_CHK_ALL(String sRH_CHK_ALL) {
		SRH_CHK_ALL = sRH_CHK_ALL;
	}
	public String getSRH_TRPL_C() {
		return SRH_TRPL_C;
	}
	public void setSRH_TRPL_C(String sRH_TRPL_C) {
		SRH_TRPL_C = sRH_TRPL_C;
	}
	public long getTOTAL_NBY_QT() {
		return TOTAL_NBY_QT;
	}
	public void setTOTAL_NBY_QT(long tOTAL_NBY_QT) {
		TOTAL_NBY_QT = tOTAL_NBY_QT;
	}
	public long getTOTAL_NBY_AM() {
		return TOTAL_NBY_AM;
	}
	public void setTOTAL_NBY_AM(long tOTAL_NBY_AM) {
		TOTAL_NBY_AM = tOTAL_NBY_AM;
	}
	
	
	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
}
