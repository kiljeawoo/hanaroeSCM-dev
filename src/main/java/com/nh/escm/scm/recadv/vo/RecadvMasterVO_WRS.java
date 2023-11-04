package com.nh.escm.scm.recadv.vo;

import java.io.Serializable;

public class RecadvMasterVO_WRS implements Serializable{
	
	private static final long serialVersionUID = 20151202L;
	
	private String NA_WRS_C;//상품코드
	private String WRSNM;//상품명
	private String WRS_STDNM;//규격
	private String TXT_DSC;//면과세
	private String TXT_DSC_NM;//면과세명
	private double DANGA;//단가(계산)
	private long BYNG_QT;//매입수량
	private long GAM_AM;//공급금액
	private long BYNG_VAT;//부가세
	private long TOT_GAM;//총공급금액
	private long CHRG_TOT;//총공제금액
	private long COMP_FEE;//업체수수료
	private long BYNG_SSDY;//매입장려금
	private long ETR_AMN_FEE;//수탁관리수수료
	private long ETR_AMN_VAT;//수탁관리부가세
	private long SLGT_AMN_FEE;//매취관리수수료
	private long PHD_FEE;//물류수수료
	private long PHD_FEE_VAT;//물류수수료부가세
	private long TRP_SVC_CST;//운송용역비용
	private long TRP_SVCOS_VAT;//운송용역비부가세
	private long ETC_FEE;//기타수수료
	private long ETC_FEE_VAT;//기타수수료부가세
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
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}
	public String getTXT_DSC() {
		return TXT_DSC;
	}
	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}
	public String getTXT_DSC_NM() {
		return TXT_DSC_NM;
	}
	public void setTXT_DSC_NM(String tXT_DSC_NM) {
		TXT_DSC_NM = tXT_DSC_NM;
	}
	public double getDANGA() {
		return DANGA;
	}
	public void setDANGA(double dANGA) {
		DANGA = dANGA;
	}
	public long getBYNG_QT() {
		return BYNG_QT;
	}
	public void setBYNG_QT(long bYNG_QT) {
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
	public long getTOT_GAM() {
		return TOT_GAM;
	}
	public void setTOT_GAM(long tOT_GAM) {
		TOT_GAM = tOT_GAM;
	}
	public long getCHRG_TOT() {
		return CHRG_TOT;
	}
	public void setCHRG_TOT(long cHRG_TOT) {
		CHRG_TOT = cHRG_TOT;
	}
	public long getCOMP_FEE() {
		return COMP_FEE;
	}
	public void setCOMP_FEE(long cOMP_FEE) {
		COMP_FEE = cOMP_FEE;
	}
	public long getBYNG_SSDY() {
		return BYNG_SSDY;
	}
	public void setBYNG_SSDY(long bYNG_SSDY) {
		BYNG_SSDY = bYNG_SSDY;
	}
	public long getETR_AMN_FEE() {
		return ETR_AMN_FEE;
	}
	public void setETR_AMN_FEE(long eTR_AMN_FEE) {
		ETR_AMN_FEE = eTR_AMN_FEE;
	}
	public long getETR_AMN_VAT() {
		return ETR_AMN_VAT;
	}
	public void setETR_AMN_VAT(long eTR_AMN_VAT) {
		ETR_AMN_VAT = eTR_AMN_VAT;
	}
	public long getSLGT_AMN_FEE() {
		return SLGT_AMN_FEE;
	}
	public void setSLGT_AMN_FEE(long sLGT_AMN_FEE) {
		SLGT_AMN_FEE = sLGT_AMN_FEE;
	}
	public long getPHD_FEE() {
		return PHD_FEE;
	}
	public void setPHD_FEE(long pHD_FEE) {
		PHD_FEE = pHD_FEE;
	}
	public long getPHD_FEE_VAT() {
		return PHD_FEE_VAT;
	}
	public void setPHD_FEE_VAT(long pHD_FEE_VAT) {
		PHD_FEE_VAT = pHD_FEE_VAT;
	}
	public long getTRP_SVC_CST() {
		return TRP_SVC_CST;
	}
	public void setTRP_SVC_CST(long tRP_SVC_CST) {
		TRP_SVC_CST = tRP_SVC_CST;
	}
	public long getTRP_SVCOS_VAT() {
		return TRP_SVCOS_VAT;
	}
	public void setTRP_SVCOS_VAT(long tRP_SVCOS_VAT) {
		TRP_SVCOS_VAT = tRP_SVCOS_VAT;
	}
	public long getETC_FEE() {
		return ETC_FEE;
	}
	public void setETC_FEE(long eTC_FEE) {
		ETC_FEE = eTC_FEE;
	}
	public long getETC_FEE_VAT() {
		return ETC_FEE_VAT;
	}
	public void setETC_FEE_VAT(long eTC_FEE_VAT) {
		ETC_FEE_VAT = eTC_FEE_VAT;
	}
	@Override
	public String toString() {
		return "RecadvMasterVO_WRS [NA_WRS_C=" + NA_WRS_C + ", WRSNM=" + WRSNM
				+ ", WRS_STDNM=" + WRS_STDNM + ", TXT_DSC=" + TXT_DSC
				+ ", TXT_DSC_NM=" + TXT_DSC_NM + ", DANGA=" + DANGA
				+ ", BYNG_QT=" + BYNG_QT + ", GAM_AM=" + GAM_AM + ", BYNG_VAT="
				+ BYNG_VAT + ", TOT_GAM=" + TOT_GAM + ", CHRG_TOT=" + CHRG_TOT
				+ ", COMP_FEE=" + COMP_FEE + ", BYNG_SSDY=" + BYNG_SSDY
				+ ", ETR_AMN_FEE=" + ETR_AMN_FEE + ", ETR_AMN_VAT="
				+ ETR_AMN_VAT + ", SLGT_AMN_FEE=" + SLGT_AMN_FEE + ", PHD_FEE="
				+ PHD_FEE + ", PHD_FEE_VAT=" + PHD_FEE_VAT + ", TRP_SVC_CST="
				+ TRP_SVC_CST + ", TRP_SVCOS_VAT=" + TRP_SVCOS_VAT
				+ ", ETC_FEE=" + ETC_FEE + ", ETC_FEE_VAT=" + ETC_FEE_VAT + "]";
	}
}
