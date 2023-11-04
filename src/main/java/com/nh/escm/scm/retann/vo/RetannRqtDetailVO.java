package com.nh.escm.scm.retann.vo;

import java.io.Serializable;

/**
 * 반품입고 의뢰 조회 세번째 그리드 VO
 * @author HyeRim.Oh
 *
 */
public class RetannRqtDetailVO implements Serializable {
	
	private static final long serialVersionUID = 20150714L;
	
	private String NA_WRS_C;  //상품코드
	private String WRSNM;  //상품명
	//단위-보류
	private double RGD_UPR;  //단가
	private double RGD_QT;  //반품수량
	private long RGD_AM;  //반품금액
	private double BYNG_DFN_AM;  //매입확정수량
	private long BYNG_DFN_QT;  //매입확정금액
	private double RGD_VAT;  //부가세액
	private long BYNG_DFN_TROT_FEE;  //환급수수료액
	private long BYNG_DFN_PHD_FEE;  //물류수수료액
	private long VCBT_AM;  //공병금액
	private String NA_RGD_RSN_DSC;  //반품사유
	private double AJ_UPR;  //조정단가
	
	private String NA_WRS_UNT; //규격
	private String NA_WRS_UNT_C; //단위
	private long BYNG_DFN_UPR;  //매입확정단가(반품확정단가)
	private String RGD_SQNO;
	
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
	public double getRGD_UPR() {
		return RGD_UPR;
	}
	public void setRGD_UPR(double rGD_UPR) {
		RGD_UPR = rGD_UPR;
	}
	public double getRGD_QT() {
		return RGD_QT;
	}
	public void setRGD_QT(double rGD_QT) {
		RGD_QT = rGD_QT;
	}
	public long getRGD_AM() {
		return RGD_AM;
	}
	public void setRGD_AM(long rGD_AM) {
		RGD_AM = rGD_AM;
	}
	public double getBYNG_DFN_AM() {
		return BYNG_DFN_AM;
	}
	public void setBYNG_DFN_AM(double bYNG_DFN_AM) {
		BYNG_DFN_AM = bYNG_DFN_AM;
	}
	public long getBYNG_DFN_QT() {
		return BYNG_DFN_QT;
	}
	public void setBYNG_DFN_QT(long bYNG_DFN_QT) {
		BYNG_DFN_QT = bYNG_DFN_QT;
	}
	public double getRGD_VAT() {
		return RGD_VAT;
	}
	public void setRGD_VAT(double rGD_VAT) {
		RGD_VAT = rGD_VAT;
	}
	public long getBYNG_DFN_TROT_FEE() {
		return BYNG_DFN_TROT_FEE;
	}
	public void setBYNG_DFN_TROT_FEE(long bYNG_DFN_TROT_FEE) {
		BYNG_DFN_TROT_FEE = bYNG_DFN_TROT_FEE;
	}
	public long getBYNG_DFN_PHD_FEE() {
		return BYNG_DFN_PHD_FEE;
	}
	public void setBYNG_DFN_PHD_FEE(long bYNG_DFN_PHD_FEE) {
		BYNG_DFN_PHD_FEE = bYNG_DFN_PHD_FEE;
	}
	public long getVCBT_AM() {
		return VCBT_AM;
	}
	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}
	public String getNA_RGD_RSN_DSC() {
		return NA_RGD_RSN_DSC;
	}
	public void setNA_RGD_RSN_DSC(String nA_RGD_RSN_DSC) {
		NA_RGD_RSN_DSC = nA_RGD_RSN_DSC;
	}
	public double getAJ_UPR() {
		return AJ_UPR;
	}
	public void setAJ_UPR(double aJ_UPR) {
		AJ_UPR = aJ_UPR;
	}
	public String getNA_WRS_UNT() {
		return NA_WRS_UNT;
	}
	public void setNA_WRS_UNT(String nA_WRS_UNT) {
		NA_WRS_UNT = nA_WRS_UNT;
	}
	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}
	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}
	public long getBYNG_DFN_UPR() {
		return BYNG_DFN_UPR;
	}
	public void setBYNG_DFN_UPR(long bYNG_DFN_UPR) {
		BYNG_DFN_UPR = bYNG_DFN_UPR;
	}
	public String getRGD_SQNO() {
		return RGD_SQNO;
	}
	public void setRGD_SQNO(String rGD_SQNO) {
		RGD_SQNO = rGD_SQNO;
	}

}
