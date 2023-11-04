package com.nh.escm.pds.stock.vo;

public class StockVO {
	private String YMD;				//일자
	private int AMOUNT;				//금액
	private String CODE;			//점포코드
	private int QTY;				//수량
	private String NAME;			//점포명
	private String STORE_CODE;		//상품코드
	private String STORE_NAME;		//상품명
	private String TRCODE;
	private String TRNAME;
	private String NA_BZPLC;
	private String PHD_FCLT_C;
	private String TOTAL_SL_QT;
	private String TOTAL_TOT_SLAM;
	
	public StockVO(){
		
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

	public String getSTORE_CODE() {
		return STORE_CODE;
	}

	public void setSTORE_CODE(String sTORE_CODE) {
		STORE_CODE = sTORE_CODE;
	}

	public String getSTORE_NAME() {
		return STORE_NAME;
	}

	public void setSTORE_NAME(String sTORE_NAME) {
		STORE_NAME = sTORE_NAME;
	}

	public String getTRCODE() {
		return TRCODE;
	}

	public void setTRCODE(String tRCODE) {
		TRCODE = tRCODE;
	}

	public String getTRNAME() {
		return TRNAME;
	}

	public void setTRNAME(String tRNAME) {
		TRNAME = tRNAME;
	}

	public String getNA_BZPLC() {
		return NA_BZPLC;
	}

	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}

	public String getPHD_FCLT_C() {
		return PHD_FCLT_C;
	}

	public void setPHD_FCLT_C(String pHD_FCLT_C) {
		PHD_FCLT_C = pHD_FCLT_C;
	}

	public String getTOTAL_SL_QT() {
		return TOTAL_SL_QT;
	}

	public void setTOTAL_SL_QT(String tOTAL_SL_QT) {
		TOTAL_SL_QT = tOTAL_SL_QT;
	}

	public String getTOTAL_TOT_SLAM() {
		return TOTAL_TOT_SLAM;
	}

	public void setTOTAL_TOT_SLAM(String tOTAL_TOT_SLAM) {
		TOTAL_TOT_SLAM = tOTAL_TOT_SLAM;
	}
	
	
	
}
