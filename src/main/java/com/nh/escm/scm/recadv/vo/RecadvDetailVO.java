package com.nh.escm.scm.recadv.vo;

import java.io.Serializable;

/**
 * 검수실적-전표별 상세 VO
 * @author HyeRim.Oh
 *
 */
public class RecadvDetailVO implements Serializable{
	
	private static final long serialVersionUID = 20150612L;
	
	private String RN; //페이지번호
	
	private String NA_WRS_C;  //경제통합상품코드
	private String WRSNM;  //상품명
	private String TXT_DSC;  //과세구분
	private long BYAM;  //총공급금액
	private double BYNG_UPR;  //매입단가
	private double BYNG_QT;  //매입수량
	private long GAM_AM;  //공급금액 = 총공급금액 - 매입부가세
	private long BYNG_VAT;  //매입부가세
	private String WRS_STDNM;  //상품규격
	private String VCBT_NA_WRS_C;  //공병상품코드
	private long VCBT_QT;  //공병수량
	private long VCBT_UPR;  //공병단가 =  공병금액/공병수량
	private long INPD_QT;  //내품수량
	private String PD_YY;  //생산년도
	private double BYNG_WT;  //입고중량
	private String RPY_PLA_DT;  //상환예정일자
	private String NA_BZPLC;  //경제통합사업장코드
	private String NA_TEAM_C;  //경제통합팀코드
	private String SLP_DT;  //전표일자
	private String NA_SLPNO;  //경제통합전표번호
	private long SLP_SQNO;  //전표일련번호
	
	private double BYNG_AM; //매입금액
	private String NA_WRS_UNT_C;  //단위
	
	private String CNR_DS_AM; //검수구분금액
		
	public String getCNR_DS_AM() {
		return CNR_DS_AM;
	}
	public void setCNR_DS_AM(String cNR_DS_AM) {
		CNR_DS_AM = cNR_DS_AM;
	}
	public String getRN() {
		return RN;
	}
	public void setRN(String rN) {
		RN = rN;
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
	public String getTXT_DSC() {
		return TXT_DSC;
	}
	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}
	public long getBYAM() {
		return BYAM;
	}
	public void setBYAM(long bYAM) {
		BYAM = bYAM;
	}
	public double getBYNG_UPR() {
		return BYNG_UPR;
	}
	public void setBYNG_UPR(double bYNG_UPR) {
		BYNG_UPR = bYNG_UPR;
	}
	public double getBYNG_QT() {
		return BYNG_QT;
	}
	public void setBYNG_QT(double bYNG_QT) {
		BYNG_QT = bYNG_QT;
	}
	public long getGAM_AM() {
		return GAM_AM;
	}
	public void setGAM_AM(long gAM_AM) {
		GAM_AM = gAM_AM;
	}
	public long getBYNG_VAT() {
		return BYNG_VAT;
	}
	public void setBYNG_VAT(long bYNG_VAT) {
		BYNG_VAT = bYNG_VAT;
	}
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}
	public String getVCBT_NA_WRS_C() {
		return VCBT_NA_WRS_C;
	}
	public void setVCBT_NA_WRS_C(String vCBT_NA_WRS_C) {
		VCBT_NA_WRS_C = vCBT_NA_WRS_C;
	}
	public long getVCBT_QT() {
		return VCBT_QT;
	}
	public void setVCBT_QT(long vCBT_QT) {
		VCBT_QT = vCBT_QT;
	}
	public long getVCBT_UPR() {
		return VCBT_UPR;
	}
	public void setVCBT_UPR(long vCBT_UPR) {
		VCBT_UPR = vCBT_UPR;
	}
	public long getINPD_QT() {
		return INPD_QT;
	}
	public void setINPD_QT(long iNPD_QT) {
		INPD_QT = iNPD_QT;
	}
	public String getPD_YY() {
		return PD_YY;
	}
	public void setPD_YY(String pD_YY) {
		PD_YY = pD_YY;
	}
	public double getBYNG_WT() {
		return BYNG_WT;
	}
	public void setBYNG_WT(double bYNG_WT) {
		BYNG_WT = bYNG_WT;
	}
	public String getRPY_PLA_DT() {
		return RPY_PLA_DT;
	}
	public void setRPY_PLA_DT(String rPY_PLA_DT) {
		RPY_PLA_DT = rPY_PLA_DT;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getSLP_DT() {
		return SLP_DT;
	}
	public void setSLP_DT(String sLP_DT) {
		SLP_DT = sLP_DT;
	}
	public String getNA_SLPNO() {
		return NA_SLPNO;
	}
	public void setNA_SLPNO(String nA_SLPNO) {
		NA_SLPNO = nA_SLPNO;
	}
	public long getSLP_SQNO() {
		return SLP_SQNO;
	}
	public void setSLP_SQNO(long sLP_SQNO) {
		SLP_SQNO = sLP_SQNO;
	}	
	public double getBYNG_AM() {
		return BYNG_AM;
	}
	public void setBYNG_AM(double bYNG_AM) {
		BYNG_AM = bYNG_AM;
	}	
	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}
	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}
	@Override
	public String toString() {
		return "RecadvDetailVO [NA_WRS_C=" + NA_WRS_C + ", WRSNM=" + WRSNM
				+ ", TXT_DSC=" + TXT_DSC + ", BYAM=" + BYAM + ", BYNG_UPR="
				+ BYNG_UPR + ", BYNG_QT=" + BYNG_QT + ", GAM_AM=" + GAM_AM
				+ ", BYNG_VAT=" + BYNG_VAT + ", WRS_STDNM=" + WRS_STDNM
				+ ", VCBT_NA_WRS_C=" + VCBT_NA_WRS_C + ", VCBT_QT=" + VCBT_QT
				+ ", VCBT_UPR=" + VCBT_UPR + ", INPD_QT=" + INPD_QT
				+ ", PD_YY=" + PD_YY + ", BYNG_WT=" + BYNG_WT + ", RPY_PLA_DT="
				+ RPY_PLA_DT + ", NA_BZPLC=" + NA_BZPLC + ", NA_TEAM_C="
				+ NA_TEAM_C + ", SLP_DT=" + SLP_DT + ", NA_SLPNO=" + NA_SLPNO
				+ ", SLP_SQNO=" + SLP_SQNO + "]";
	}	
}
