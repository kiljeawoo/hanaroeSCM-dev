package com.nh.escm.scm.delivery.sea.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 물류센터결품내역 VO
 * @author HyeRim.Oh
 *
 */
public class CenterDqpdVO implements Serializable {
	
	private static final long serialVersionUID = 20150709L;
	
	private String NA_TRPL_C;  //경제통합 공급처코드
	private String DVY_PLA_DT;  //배송예정일자
	private String NA_WRS_C;  //경제통합 상품코드
	private String WRSNM;  //상품명
	private String NA_BZPLC;  //경제통합 사업장코드
	private String ODR_DT;  //발주일자
	private String ODR_SLPNO;  //발주전표번호
	private long ODR_DSQNO;  //발주상세 일련번호
	private double ODR_QT;  //발주수량
	private double STR_CPL_QT;  //입고수량
	private double NSTR_QT;  //미입고수량
	private Date FSRG_DTM;  //최초 등록일시
	private Date LSCHG_DTM;  //최종 변경일시
	private String LS_CMENO;  //최종변경자 개인번호	
	private String DQPD_RSNC;  //결품사유코드
	
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}
	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
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
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
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
	public long getODR_DSQNO() {
		return ODR_DSQNO;
	}
	public void setODR_DSQNO(long oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}
	public double getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public double getSTR_CPL_QT() {
		return STR_CPL_QT;
	}
	public void setSTR_CPL_QT(double sTR_CPL_QT) {
		STR_CPL_QT = sTR_CPL_QT;
	}
	public double getNSTR_QT() {
		return NSTR_QT;
	}
	public void setNSTR_QT(double nSTR_QT) {
		NSTR_QT = nSTR_QT;
	}
	public Date getFSRG_DTM() {
		return FSRG_DTM;
	}
	public void setFSRG_DTM(Date fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}
	public Date getLSCHG_DTM() {
		return LSCHG_DTM;
	}
	public void setLSCHG_DTM(Date lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}
	public String getLS_CMENO() {
		return LS_CMENO;
	}
	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}
	public String getDQPD_RSNC() {
		return DQPD_RSNC;
	}
	public void setDQPD_RSNC(String dQPD_RSNC) {
		DQPD_RSNC = dQPD_RSNC;
	}

	
	
}
