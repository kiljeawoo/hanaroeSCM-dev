package com.nh.escm.scm.delivery.sea.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 거래처별 상세
 * @author swha
 *
 */
public class DeliveryTradingPatnersDVO  implements Serializable {
	
	private static final long serialVersionUID = 20150827L;
	
	private String RN;
	private String DVY_PLA_SQNO;
	private String NA_WRS_C;
	private String WRSNM;
	private String ODR_DT;
	private String ODR_SLPNO;
	private String ODR_DSQNO;
	private String TXT_DSC;//과세 구분
	private String PD_YY;//생산년도
	private double DVY_WRS_UPR;//배송상품단가
	private double DVY_PLA_QT;//배송예정수량
	private double DVY_AM;//배송금액
	private long DVY_VAT;//배송부가세
	private long DVY_VCBT_AM;//배송공병금액
	private long DVY_SSDY;//배송장려금
	private double DVY_TROT_FEE;//배송환급수수료
	private double DVY_PHD_FEE;//배송물류수수료
	private double DVY_FAR_ASTCS;//배송운임보조비
	private double BYNG_UPR;//매입확정단가
	private double BYNG_QT;//매입확정수량
	private double BYNG_WT;//매입확정중량
	private long BYAM;//매입확정금액
	private String DVY_PLASH_STAC;//배송예정서상태코드
	private long DVY_SSDYRT;//배송장려금율
	
	


	public String getRN() {
		return RN;
	}




	public void setRN(String rN) {
		RN = rN;
	}




	public String getDVY_PLA_SQNO() {
		return DVY_PLA_SQNO;
	}




	public void setDVY_PLA_SQNO(String dVY_PLA_SQNO) {
		DVY_PLA_SQNO = dVY_PLA_SQNO;
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




	public String getODR_DSQNO() {
		return ODR_DSQNO;
	}




	public void setODR_DSQNO(String oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}




	public String getTXT_DSC() {
		return TXT_DSC;
	}




	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}




	public String getPD_YY() {
		return PD_YY;
	}




	public void setPD_YY(String pD_YY) {
		PD_YY = pD_YY;
	}




	public double getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}




	public void setDVY_WRS_UPR(double dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
	}




	public double getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}




	public void setDVY_PLA_QT(double dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}




	public double getDVY_AM() {
		return DVY_AM;
	}




	public void setDVY_AM(double dVY_AM) {
		DVY_AM = dVY_AM;
	}




	public long getDVY_VAT() {
		return DVY_VAT;
	}




	public void setDVY_VAT(long dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}




	public long getDVY_VCBT_AM() {
		return DVY_VCBT_AM;
	}




	public void setDVY_VCBT_AM(long dVY_VCBT_AM) {
		DVY_VCBT_AM = dVY_VCBT_AM;
	}




	public long getDVY_SSDY() {
		return DVY_SSDY;
	}




	public void setDVY_SSDY(long dVY_SSDY) {
		DVY_SSDY = dVY_SSDY;
	}




	public double getDVY_TROT_FEE() {
		return DVY_TROT_FEE;
	}




	public void setDVY_TROT_FEE(double dVY_TROT_FEE) {
		DVY_TROT_FEE = dVY_TROT_FEE;
	}




	public double getDVY_PHD_FEE() {
		return DVY_PHD_FEE;
	}




	public void setDVY_PHD_FEE(double dVY_PHD_FEE) {
		DVY_PHD_FEE = dVY_PHD_FEE;
	}




	public double getDVY_FAR_ASTCS() {
		return DVY_FAR_ASTCS;
	}




	public void setDVY_FAR_ASTCS(double dVY_FAR_ASTCS) {
		DVY_FAR_ASTCS = dVY_FAR_ASTCS;
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




	public double getBYNG_WT() {
		return BYNG_WT;
	}




	public void setBYNG_WT(double bYNG_WT) {
		BYNG_WT = bYNG_WT;
	}




	public long getBYAM() {
		return BYAM;
	}




	public void setBYAM(long bYAM) {
		BYAM = bYAM;
	}




	public String getDVY_PLASH_STAC() {
		return DVY_PLASH_STAC;
	}




	public void setDVY_PLASH_STAC(String dVY_PLASH_STAC) {
		DVY_PLASH_STAC = dVY_PLASH_STAC;
	}




	public long getDVY_SSDYRT() {
		return DVY_SSDYRT;
	}




	public void setDVY_SSDYRT(long dVY_SSDYRT) {
		DVY_SSDYRT = dVY_SSDYRT;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	


	

	
}
