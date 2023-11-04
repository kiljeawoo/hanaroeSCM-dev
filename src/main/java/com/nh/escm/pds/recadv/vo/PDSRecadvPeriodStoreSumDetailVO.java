package com.nh.escm.pds.recadv.vo;
import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 화면ID : VAN_DS_SC_1021
 * 화면명 : 기간별 점포별/상품별 정보조회 - 상세
 * @author swha
 */
public class PDSRecadvPeriodStoreSumDetailVO implements Serializable{

	private static final long serialVersionUID = 20150616L;
	
	private String WRS_C; //상품코드
	private String WRSNM; //상품명
	private int BYNG_QT;//수량
	private double BYAM ;//금액
	
	
	
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



	public int getBYNG_QT() {
		return BYNG_QT;
	}



	public void setBYNG_QT(int bYNG_QT) {
		BYNG_QT = bYNG_QT;
	}



	public double getBYAM() {
		return BYAM;
	}



	public void setBYAM(double bYAM) {
		BYAM = bYAM;
	}



	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
	
	

}