package com.nh.escm.pds.sales.vo;

import java.io.Serializable;

/**
 * 화면ID : VAN_DS_SC_0800
 * 화면명 : 일자별 정보, 기간별 정보 VO - 판매정보
 * @author hroh
 */
public class PDSSalesDailyStoreSumVO implements Serializable{
	
	private static final long serialVersionUID = 20150806L;
	
	private String SL_DT; //조회일시
	private long SL_QT;//수량
	private double SL_AM ;//금액
	private double SHARE_SLAM ;//점유율
	
	public String getSL_DT() {
		return SL_DT;
	}
	public void setSL_DT(String sL_DT) {
		SL_DT = sL_DT;
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
	public double getSHARE_SLAM() {
		return SHARE_SLAM;
	}
	public void setSHARE_SLAM(double sHARE_SLAM) {
		SHARE_SLAM = sHARE_SLAM;
	}
	
	
}
