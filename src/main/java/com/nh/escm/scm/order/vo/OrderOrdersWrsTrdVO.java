package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 상품별 조회 Third
 * @author swha
 *
 */

public class OrderOrdersWrsTrdVO  implements Serializable{
	private static final long serialVersionUID = 201500901L;
	
	
	
	private String ODR_DT;
	private String ODR_SLPNO;
	private String MNGT_NA_TRPL_C; 
	private String CLNTNM;
	private double ODR_QT;
	private long ODR_AM;
	private long ODR_VAT;
	private long VCBT_AM;
	private String SPY_TPC;
	private String NA_ODR_STS_DSC;
	


	public String getODR_DT() {
		return ODR_DT;
	}



	public void setODR_DT(String oDR_DT) {
		ODR_DT = oDR_DT;
	}



	public String getODR_SLPNO() {
		return ODR_SLPNO;
	}



	public void setODR_SLPNO(String oDR_SLPNO) {
		ODR_SLPNO = oDR_SLPNO;
	}



	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}



	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
	}



	public String getCLNTNM() {
		return CLNTNM;
	}



	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}



	public double getODR_QT() {
		return ODR_QT;
	}



	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}



	public long getODR_AM() {
		return ODR_AM;
	}



	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}



	public long getODR_VAT() {
		return ODR_VAT;
	}



	public void setODR_VAT(long oDR_VAT) {
		ODR_VAT = oDR_VAT;
	}



	public long getVCBT_AM() {
		return VCBT_AM;
	}



	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}



	public String getSPY_TPC() {
		return SPY_TPC;
	}



	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}



	public String getNA_ODR_STS_DSC() {
		return NA_ODR_STS_DSC;
	}



	public void setNA_ODR_STS_DSC(String nA_ODR_STS_DSC) {
		NA_ODR_STS_DSC = nA_ODR_STS_DSC;
	}



	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
}
