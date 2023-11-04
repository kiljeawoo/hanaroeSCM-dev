package com.nh.escm.pds.recadv.vo;
import java.io.Serializable;

/**
 * 화면ID : VAN_DS_SC_1000
 * 화면명 : 일자별 정보
 * @author swha
 */
public class PDSRecadvDailyStoreSumVO implements Serializable{
	
	private static final long serialVersionUID = 20150615L;
	
	private String BY_DT; //조회일시
	private int BY_QT;//수량
	private int BY_AM ;//금액
	
	
	public String getBY_DT() {
		return BY_DT;
	}
	public void setBY_DT(String bY_DT) {
		BY_DT = bY_DT;
	}
	public int getBY_QT() {
		return BY_QT;
	}
	public void setBY_QT(int bY_QT) {
		BY_QT = bY_QT;
	}
	public int getBY_AM() {
		return BY_AM;
	}
	public void setBY_AM(int bY_AM) {
		BY_AM = bY_AM;
	}
	
	
	
	
	
	
	
	
	
	
	

}