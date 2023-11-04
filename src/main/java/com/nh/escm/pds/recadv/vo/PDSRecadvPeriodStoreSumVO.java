package com.nh.escm.pds.recadv.vo;
import java.io.Serializable;

/**
 * 화면ID : VAN_DS_SC_1020
 * 화면명 : 기간별 점포별/상품별 정보조회
 * @author swha
 */
public class PDSRecadvPeriodStoreSumVO implements Serializable{
	
	private static final long serialVersionUID = 20150615L;
	

	
	private String BZPLC; //점포코드
	private String BZPLCNM; //점포명
	private int BY_QT;//수량
	private double BY_AM ;//금액
	private String SRH_BY_DT_FR;//조회시작일
	private String SRH_BY_DT_TO;//조회종료일
	private String SRH_CHK_ALL;//전체선택유무
	private String SRH_TRPL_C;//거래처코드
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
	public int getBY_QT() {
		return BY_QT;
	}
	public void setBY_QT(int bY_QT) {
		BY_QT = bY_QT;
	}
	public double getBY_AM() {
		return BY_AM;
	}
	public void setBY_AM(double bY_AM) {
		BY_AM = bY_AM;
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
	
	
		

}