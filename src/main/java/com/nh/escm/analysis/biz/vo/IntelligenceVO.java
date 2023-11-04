package com.nh.escm.analysis.biz.vo;

public class IntelligenceVO {
	private String YMD;
	private int AMOUNT;
	private int QTY;
	private String CODE;
	private String NAME;
	private String RK;
	
	public IntelligenceVO(){
		
	}

	public int getQTY() {
		return QTY;
	}

	public void setQTY(int qTY) {
		QTY = qTY;
	}

	public String getYMD() {
		return YMD;
	}

	public void setYMD(String yMD) {
		YMD = yMD;
	}

	public int getAMOUNT() {
		return AMOUNT;
	}

	public void setAMOUNT(int aMOUNT) {
		AMOUNT = aMOUNT;
	}

	public String getCODE() {
		return CODE;
	}

	public void setCODE(String cODE) {
		CODE = cODE;
	}

	public String getNAME() {
		return NAME;
	}

	public void setNAME(String nAME) {
		NAME = nAME;
	}

	public String getRK() {
		return RK;
	}

	public void setRK(String rK) {
		RK = rK;
	}
	
	
	
}
