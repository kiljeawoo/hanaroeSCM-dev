package com.nh.escm.scm.event.vo;
import java.io.Serializable;


/**
 * 화면ID : VAN_DS_SC_0230
 * 화면명 : 행사가격조회
 * @author swha
 */
public class OrdersEPriceChangeVO   implements Serializable{
	
	private static final long serialVersionUID = 20150611L;
	
	private String EVT_SQNO;//행사번호
	private String EVTNM;//통합행사명
	private String NA_BZPLC;//사업장코드
	private String SHRT_BZPLNM;//사업장명
	private String NA_TEAM_C;//팀코드
	private String TEAMNM;//팀명
	private String EVT_ST_DT;//행사시작일
	private String EVT_ED_DT;//행사종료일
	private String NA_WRS_C;//상품코드
	private String WRSNM;//상품명
	private String WRS_ABR_NM;//상품약어명
	private String EVT_PCS;//행사원가
	private String ECG_SEL_UPR;//권장판매가
	private String PRGR_C;//가격군코드
	
	
	public String getPRGR_C() {
		return PRGR_C;
	}
	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}
	public String getEVT_SQNO() {
		return EVT_SQNO;
	}
	public void setEVT_SQNO(String eVT_SQNO) {
		EVT_SQNO = eVT_SQNO;
	}
	public String getEVTNM() {
		return EVTNM;
	}
	public void setEVTNM(String eVTNM) {
		EVTNM = eVTNM;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getSHRT_BZPLNM() {
		return SHRT_BZPLNM;
	}
	public void setSHRT_BZPLNM(String sHRT_BZPLNM) {
		SHRT_BZPLNM = sHRT_BZPLNM;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getTEAMNM() {
		return TEAMNM;
	}
	public void setTEAMNM(String tEAMNM) {
		TEAMNM = tEAMNM;
	}
	public String getEVT_ST_DT() {
		return EVT_ST_DT;
	}
	public void setEVT_ST_DT(String eVT_ST_DT) {
		EVT_ST_DT = eVT_ST_DT;
	}
	public String getEVT_ED_DT() {
		return EVT_ED_DT;
	}
	public void setEVT_ED_DT(String eVT_ED_DT) {
		EVT_ED_DT = eVT_ED_DT;
	}
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getWRSNM() {
		return WRSNM;
	}
	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}
	public String getWRS_ABR_NM() {
		return WRS_ABR_NM;
	}
	public void setWRS_ABR_NM(String wRS_ABR_NM) {
		WRS_ABR_NM = wRS_ABR_NM;
	}
	public String getEVT_PCS() {
		return EVT_PCS;
	}
	public void setEVT_PCS(String eVT_PCS) {
		EVT_PCS = eVT_PCS;
	}
	public String getECG_SEL_UPR() {
		return ECG_SEL_UPR;
	}
	public void setECG_SEL_UPR(String eCG_SEL_UPR) {
		ECG_SEL_UPR = eCG_SEL_UPR;
	}

	
	
	
	
	
	
	
}
