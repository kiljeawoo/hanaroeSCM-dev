package com.nh.escm.pds.pay.vo;

import java.io.Serializable;

/**
 * 기타당좌자산회수내역  Detail VO
 * @author HyeRim.Oh
 *
 */
public class PaymentEtcCaAsetDetailVO implements Serializable{
	
	private static final long serialVersionUID = 20150630L;
	
	private String NA_WRS_C;  //경제통합상품코드
	private String WRSNM;  //상품명
	private double VCBT_RTU_QT;  //반환수량
	private double VCBT_UPR;  //수수료단가
	private long RTU_AM;  //반환금액
	private long RTU_FEE;  //반환수수료
	private long RTU_FEE_VAT;  //반환수수료부가세
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
	public double getVCBT_RTU_QT() {
		return VCBT_RTU_QT;
	}
	public void setVCBT_RTU_QT(double vCBT_RTU_QT) {
		VCBT_RTU_QT = vCBT_RTU_QT;
	}
	public double getVCBT_UPR() {
		return VCBT_UPR;
	}
	public void setVCBT_UPR(double vCBT_UPR) {
		VCBT_UPR = vCBT_UPR;
	}
	public long getRTU_AM() {
		return RTU_AM;
	}
	public void setRTU_AM(long rTU_AM) {
		RTU_AM = rTU_AM;
	}
	public long getRTU_FEE() {
		return RTU_FEE;
	}
	public void setRTU_FEE(long rTU_FEE) {
		RTU_FEE = rTU_FEE;
	}
	public long getRTU_FEE_VAT() {
		return RTU_FEE_VAT;
	}
	public void setRTU_FEE_VAT(long rTU_FEE_VAT) {
		RTU_FEE_VAT = rTU_FEE_VAT;
	}	
	
}
