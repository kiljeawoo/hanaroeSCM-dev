package com.nh.escm.pds.outer.vo;

import java.io.Serializable;

/**
 * 물류센터-출고실적 VO
 * @author HyeRim.Oh
 *
 */
public class CenterVO implements Serializable{
	
	private static final long serialVersionUID = 20150611L;
	
	private String RN; //페이지번호

	//Master
	private String PHD_NA_BZPLC;  //물류경제통합 사업장코드
	private String SHRT_BZPLNM;  //단축사업장명
	private String NA_TRPL_C;  //경제통합거래처코드
	private String CLNTNM;  //거래처명	
	private double PHD_RVO_QT;  //물류수주수량 (낱개)
	private double PHD_RVO_PER_QT;  //물류수주수량 (표시단위)
	private double PHD_PCK_QT;  //물류피킹수량 (낱개)
	private double PHD_PCK_PER_QT;  //물류피킹수량 (표시단위)
	private double PHD_OUT_QT;  //물류출고수량 (낱개
	private double PHD_OUT_PER_QT;  //물류출고수량 (표시단위)
	private double CUS_CNR_QT;  //고객검수수량 (낱개)
	private double CUS_CNR_PER_QT;  //고객검수수량 (표시단위)
	private double CUS_CNR_AMT;  //고객검수금액
	private double PHD_CNR_QT;  //물류검수수량 (낱개)
	private double PHD_CNR_PER_QT;  //물류검수수량 (표시단위)
	private double PHD_CNR_AMT;  //물류검수금액	
	private String FILP_DT;//기표일자
	
	public String getFILP_DT() {
		return FILP_DT;
	}
	public void setFILP_DT(String fILP_DT) {
		FILP_DT = fILP_DT;
	}
	//Detail	
	private String NA_WRS_C;  //경제통합상품코드
	private String WRSNM;  //상품명
	private String PHD_DLR_DSC;  //물류출고 구분코드
	private String WRS_STDNM;  //상품규격명
	private long INPD_QT;  //내품수량
	private double PHD_SELPR;  //물류판매가	
	private String SVS_YN;  //소분여부
	private String PRGR_C;  //가격군코드
	
	private String WRS_MRK_PHD_UNT_C; //상품표시물류단위코드
	private String INPD_QT2; //내품수량2
	
	private String DVY_NA_TRPL_C; //배송지코드
	private String DVY_NA_TRPL_C_NM; //배송지명
	private String BKG_EVT_YY;	//예약행사년도
	private String BKG_EVT_NO;	//예약행사번호
	
	public String getBKG_EVT_YY() {
		return BKG_EVT_YY;
	}
	public void setBKG_EVT_YY(String bKG_EVT_YY) {
		BKG_EVT_YY = bKG_EVT_YY;
	}
	public String getBKG_EVT_NO() {
		return BKG_EVT_NO;
	}
	public void setBKG_EVT_NO(String bKG_EVT_NO) {
		BKG_EVT_NO = bKG_EVT_NO;
	}
	public String getDVY_NA_TRPL_C() {
		return DVY_NA_TRPL_C;
	}
	public void setDVY_NA_TRPL_C(String dVY_NA_TRPL_C) {
		DVY_NA_TRPL_C = dVY_NA_TRPL_C;
	}
	public String getDVY_NA_TRPL_C_NM() {
		return DVY_NA_TRPL_C_NM;
	}
	public void setDVY_NA_TRPL_C_NM(String dVY_NA_TRPL_C_NM) {
		DVY_NA_TRPL_C_NM = dVY_NA_TRPL_C_NM;
	}
	public String getWRS_MRK_PHD_UNT_C() {
		return WRS_MRK_PHD_UNT_C;
	}
	public void setWRS_MRK_PHD_UNT_C(String wRS_MRK_PHD_UNT_C) {
		WRS_MRK_PHD_UNT_C = wRS_MRK_PHD_UNT_C;
	}
	public String getINPD_QT2() {
		return INPD_QT2;
	}
	public void setINPD_QT2(String iNPD_QT2) {
		INPD_QT2 = iNPD_QT2;
	}
	public String getRN() {
		return RN;
	}
	public void setRN(String rN) {
		RN = rN;
	}
	public String getPHD_NA_BZPLC() {
		return PHD_NA_BZPLC;
	}
	public void setPHD_NA_BZPLC(String pHD_NA_BZPLC) {
		PHD_NA_BZPLC = pHD_NA_BZPLC;
	}
	public String getSHRT_BZPLNM() {
		return SHRT_BZPLNM;
	}
	public void setSHRT_BZPLNM(String sHRT_BZPLNM) {
		SHRT_BZPLNM = sHRT_BZPLNM;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public double getPHD_RVO_QT() {
		return PHD_RVO_QT;
	}
	public void setPHD_RVO_QT(double pHD_RVO_QT) {
		PHD_RVO_QT = pHD_RVO_QT;
	}
	public double getPHD_RVO_PER_QT() {
		return PHD_RVO_PER_QT;
	}
	public void setPHD_RVO_PER_QT(double pHD_RVO_PER_QT) {
		PHD_RVO_PER_QT = pHD_RVO_PER_QT;
	}
	public double getPHD_PCK_QT() {
		return PHD_PCK_QT;
	}
	public void setPHD_PCK_QT(double pHD_PCK_QT) {
		PHD_PCK_QT = pHD_PCK_QT;
	}
	public double getPHD_PCK_PER_QT() {
		return PHD_PCK_PER_QT;
	}
	public void setPHD_PCK_PER_QT(double pHD_PCK_PER_QT) {
		PHD_PCK_PER_QT = pHD_PCK_PER_QT;
	}
	public double getPHD_OUT_QT() {
		return PHD_OUT_QT;
	}
	public void setPHD_OUT_QT(double pHD_OUT_QT) {
		PHD_OUT_QT = pHD_OUT_QT;
	}
	public double getPHD_OUT_PER_QT() {
		return PHD_OUT_PER_QT;
	}
	public void setPHD_OUT_PER_QT(double pHD_OUT_PER_QT) {
		PHD_OUT_PER_QT = pHD_OUT_PER_QT;
	}
	public double getCUS_CNR_QT() {
		return CUS_CNR_QT;
	}
	public void setCUS_CNR_QT(double cUS_CNR_QT) {
		CUS_CNR_QT = cUS_CNR_QT;
	}
	public double getCUS_CNR_PER_QT() {
		return CUS_CNR_PER_QT;
	}
	public void setCUS_CNR_PER_QT(double cUS_CNR_PER_QT) {
		CUS_CNR_PER_QT = cUS_CNR_PER_QT;
	}
	public double getCUS_CNR_AMT() {
		return CUS_CNR_AMT;
	}
	public void setCUS_CNR_AMT(double cUS_CNR_AMT) {
		CUS_CNR_AMT = cUS_CNR_AMT;
	}
	public double getPHD_CNR_QT() {
		return PHD_CNR_QT;
	}
	public void setPHD_CNR_QT(double pHD_CNR_QT) {
		PHD_CNR_QT = pHD_CNR_QT;
	}
	public double getPHD_CNR_PER_QT() {
		return PHD_CNR_PER_QT;
	}
	public void setPHD_CNR_PER_QT(double pHD_CNR_PER_QT) {
		PHD_CNR_PER_QT = pHD_CNR_PER_QT;
	}
	public double getPHD_CNR_AMT() {
		return PHD_CNR_AMT;
	}
	public void setPHD_CNR_AMT(double pHD_CNR_AMT) {
		PHD_CNR_AMT = pHD_CNR_AMT;
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
	public String getPHD_DLR_DSC() {
		return PHD_DLR_DSC;
	}
	public void setPHD_DLR_DSC(String pHD_DLR_DSC) {
		PHD_DLR_DSC = pHD_DLR_DSC;
	}
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}
	public long getINPD_QT() {
		return INPD_QT;
	}
	public void setINPD_QT(long iNPD_QT) {
		INPD_QT = iNPD_QT;
	}
	public double getPHD_SELPR() {
		return PHD_SELPR;
	}
	public void setPHD_SELPR(double pHD_SELPR) {
		PHD_SELPR = pHD_SELPR;
	}
	public String getSVS_YN() {
		return SVS_YN;
	}
	public void setSVS_YN(String sVS_YN) {
		SVS_YN = sVS_YN;
	}
	public String getPRGR_C() {
		return PRGR_C;
	}
	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}	
	
}
