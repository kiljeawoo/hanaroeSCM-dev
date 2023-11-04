package com.nh.escm.pds.sales.vo;

import java.io.Serializable;

/**
 * 화면ID : VAN_DS_SC_0820
 * 화면명 : 기간별 점포별/상품별 정보조회
 * @author hroh
 */
public class PDSSalesPeriodStoreSumVO implements Serializable {
	
	private static final long serialVersionUID = 20150807L;
	
	private String BZPLC; //점포코드
	private String BZPLCNM; //점포명
	private long SL_QT;//수량
	private double SL_AM ;//금액
	private String SRH_BY_DT_FR;//조회시작일
	private String SRH_BY_DT_TO;//조회종료일	
	private String SRH_TRPL_C;//거래처코드	
	private long TOTAL_SL_QT; //수량합계
	private double TOTAL_SL_AM; //금액합계
	private double SHARE_SLAM ;//점유율
	
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
	public long getSL_QT() {
		return SL_QT;
	}
	public void setSL_QT(long sL_QT) {
		SL_QT = sL_QT;
	}
	public double getSL_AM() {
		return SL_AM;
	}
	public void setSL_AM(double sL_AM) {
		SL_AM = sL_AM;
	}
	public String getSRH_BY_DT_FR() {
		return SRH_BY_DT_FR;
	}
	public void setSRH_BY_DT_FR(String sRH_BY_DT_FR) {
		SRH_BY_DT_FR = sRH_BY_DT_FR;
	}
	public String getSRH_BY_DT_TO() {
		return SRH_BY_DT_TO;
	}
	public void setSRH_BY_DT_TO(String sRH_BY_DT_TO) {
		SRH_BY_DT_TO = sRH_BY_DT_TO;
	}
	public String getSRH_TRPL_C() {
		return SRH_TRPL_C;
	}
	public void setSRH_TRPL_C(String sRH_TRPL_C) {
		SRH_TRPL_C = sRH_TRPL_C;
	}
	public long getTOTAL_SL_QT() {
		return TOTAL_SL_QT;
	}
	public void setTOTAL_SL_QT(long tOTAL_SL_QT) {
		TOTAL_SL_QT = tOTAL_SL_QT;
	}
	public double getTOTAL_SL_AM() {
		return TOTAL_SL_AM;
	}
	public void setTOTAL_SL_AM(double tOTAL_SL_AM) {
		TOTAL_SL_AM = tOTAL_SL_AM;
	}
	public double getSHARE_SLAM() {
		return SHARE_SLAM;
	}
	public void setSHARE_SLAM(double sHARE_SLAM) {
		SHARE_SLAM = sHARE_SLAM;
	}
	
	
}
