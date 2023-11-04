package com.nh.escm.pds.sales.vo;

import java.io.Serializable;

/**
 * 화면ID : VAN_DS_SC_0830
 * 화면명 : 기간별 상품별/점포별 정보조회
 * @author hroh
 */
public class PDSSalesPeriodSkuSumVO implements Serializable {
	
	private static final long serialVersionUID = 20150810L;
	
	private String WRS_C; //상품코드
	private String WRSNM;//상품명
	private long SL_QT;//수량
	private double SL_AM;//금액
	private String SRH_BY_DT_FR;//조회시작일
	private String SRH_BY_DT_TO;//조회종료일	
	private String SRH_TRPL_C;//거래처코드
	private long TOTAL_SL_QT; //수량합계
	private double TOTAL_SL_AM; //금액합계
	private double SHARE_SLAM ;//점유율
	
	public String getWRS_C() {
		return WRS_C;
	}
	public void setWRS_C(String wRS_C) {
		WRS_C = wRS_C;
	}
	public String getWRSNM() {
		return WRSNM;
	}
	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
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
