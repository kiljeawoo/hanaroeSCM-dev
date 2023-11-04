package com.nh.escm.scm.delivery.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 미납 패널티 조회 VO
 * @author HyeRim.Oh
 *
 */
public class CenterNpayPnltVO implements Serializable {
	
	private static final long serialVersionUID = 20150703L;
	
	private String SPYPL_NA_TRPL_C;  //공급처경제통합거래처코드
	private String DVYAA_NA_TRPL_C;  //배송지경제통합거래처코드
	private String DVY_PLA_SQNO;  //배송예정일련번호
	private String ODRPL_NA_TRPL_C;  //발주처
	private String NA_WRS_C;  //상품코드
	private String WRSNM;  //상품명
	private String ODR_DT;  //발주일자
	private String DVY_PLA_DT;  //배송예정일자
	private double ODR_QT;  //발주수량
	private double BYNG_QT;  //입고수량
	private double UN_STR_QT;  //미입고수량
	private double PNLT_RTO;  //패널티율
	private double PNLT_AM;  //패널티금액
	private String SIMP_CNM;  //미납사유
	private String CNF_YN;  //구분
	private Date CNF_DTM;  //미납확인일자
	private long ODR_AM;  //발주금액
	private String ODR_SLPNO;  //발주번호
	private String NA_DVY_PLASH_SLPNO;  //배송예정번호
	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}
	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}
	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}
	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}
	public String getDVY_PLA_SQNO() {
		return DVY_PLA_SQNO;
	}
	public void setDVY_PLA_SQNO(String dVY_PLA_SQNO) {
		DVY_PLA_SQNO = dVY_PLA_SQNO;
	}
	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}
	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
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
	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}
	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}
	public double getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public double getBYNG_QT() {
		return BYNG_QT;
	}
	public void setBYNG_QT(double bYNG_QT) {
		BYNG_QT = bYNG_QT;
	}
	public double getUN_STR_QT() {
		return UN_STR_QT;
	}
	public void setUN_STR_QT(double uN_STR_QT) {
		UN_STR_QT = uN_STR_QT;
	}
	public double getPNLT_RTO() {
		return PNLT_RTO;
	}
	public void setPNLT_RTO(double pNLT_RTO) {
		PNLT_RTO = pNLT_RTO;
	}
	public double getPNLT_AM() {
		return PNLT_AM;
	}
	public void setPNLT_AM(double pNLT_AM) {
		PNLT_AM = pNLT_AM;
	}
	public String getSIMP_CNM() {
		return SIMP_CNM;
	}
	public void setSIMP_CNM(String sIMP_CNM) {
		SIMP_CNM = sIMP_CNM;
	}
	public String getCNF_YN() {
		return CNF_YN;
	}
	public void setCNF_YN(String cNF_YN) {
		CNF_YN = cNF_YN;
	}
	public Date getCNF_DTM() {
		return CNF_DTM;
	}
	public void setCNF_DTM(Date cNF_DTM) {
		CNF_DTM = cNF_DTM;
	}
	public long getODR_AM() {
		return ODR_AM;
	}
	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}
	public String getODR_SLPNO() {
		return ODR_SLPNO;
	}
	public void setODR_SLPNO(String oDR_SLPNO) {
		ODR_SLPNO = oDR_SLPNO;
	}
	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}
	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}	

}
