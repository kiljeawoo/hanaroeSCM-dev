package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;
/**
 * 배송예정서 일괄등록 Temp File Detail VO
 * @author swha
 *
 */
public class NoticeOrderTempFileDetailVO  implements Serializable{
	private static final long serialVersionUID = 20150710L;
	
	private String TEMP_SEQ;//00 생성일련번호
	private String ROW_SEQ;//01A 일련번호
	private String ITEM_SEQ;//40AN 배송예정서 일련번호
	private String NA_WRS_C;//41AO 상품코드
	private String NA_SOGMN_C;//42AP 출하자코드
	private String PDAA_NA_TRPL_C;//43AQ 산지사업장코드
	private String PDAA_NA_TEAM_C;//44AR 산지사업장팀코드
	private String RCPMNM;//45AS 수령인명
	private String RCPMN_TELNO;//46AT 수령인전화번호
	private String ODR_DT;//47AU 발주일자
	private String ODR_SLPNO;//48AV 발주전표번호
	private String ODR_DSQNO;//49AW 발주상세일련번호
	private String TXT_DSC;//50AX 과세구분
	private String DVY_WRS_UPR;//51AY 배송상품단가
	private String DVY_PLA_QT;//52AZ 배송수량
	private String DVY_AM;//53BA 배송금액
	private String DVY_VAT;//54BB 배송부가세
	private String DVY_VCBT_AM;//55BC 배송공병금액
	private String DVY_SSDY;//56BD 배송장려금
	private String DVY_TROT_FEE;//57BE 배송환급수수료
	private String DVY_PHD_FEE;//58BF 배송물류수수료
	private String DVY_FAR_ASTCS;//59BG 배송운임보조비
	private String RMK_CNTN;//60BH 비고내용(상세)
	private String SL_UPR_TPC;//61BI 매출단가유형
	private String CSER_CTR_TPC;//62BJ 수요자계약유형
	private String BUY_BZ_METC;//63BK 구매사업방식코드
	public String getTEMP_SEQ() {
		return TEMP_SEQ;
	}
	public void setTEMP_SEQ(String tEMP_SEQ) {
		TEMP_SEQ = tEMP_SEQ;
	}
	public String getROW_SEQ() {
		return ROW_SEQ;
	}
	public void setROW_SEQ(String rOW_SEQ) {
		ROW_SEQ = rOW_SEQ;
	}
	public String getITEM_SEQ() {
		return ITEM_SEQ;
	}
	public void setITEM_SEQ(String iTEM_SEQ) {
		ITEM_SEQ = iTEM_SEQ;
	}
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getNA_SOGMN_C() {
		return NA_SOGMN_C;
	}
	public void setNA_SOGMN_C(String nA_SOGMN_C) {
		NA_SOGMN_C = nA_SOGMN_C;
	}
	public String getPDAA_NA_TRPL_C() {
		return PDAA_NA_TRPL_C;
	}
	public void setPDAA_NA_TRPL_C(String pDAA_NA_TRPL_C) {
		PDAA_NA_TRPL_C = pDAA_NA_TRPL_C;
	}
	public String getPDAA_NA_TEAM_C() {
		return PDAA_NA_TEAM_C;
	}
	public void setPDAA_NA_TEAM_C(String pDAA_NA_TEAM_C) {
		PDAA_NA_TEAM_C = pDAA_NA_TEAM_C;
	}
	public String getRCPMNM() {
		return RCPMNM;
	}
	public void setRCPMNM(String rCPMNM) {
		RCPMNM = rCPMNM;
	}
	public String getRCPMN_TELNO() {
		return RCPMN_TELNO;
	}
	public void setRCPMN_TELNO(String rCPMN_TELNO) {
		RCPMN_TELNO = rCPMN_TELNO;
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
	public String getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}
	public void setDVY_WRS_UPR(String dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
	}
	public String getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}
	public void setDVY_PLA_QT(String dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}
	public String getDVY_AM() {
		return DVY_AM;
	}
	public void setDVY_AM(String dVY_AM) {
		DVY_AM = dVY_AM;
	}
	public String getDVY_VAT() {
		return DVY_VAT;
	}
	public void setDVY_VAT(String dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}
	public String getDVY_VCBT_AM() {
		return DVY_VCBT_AM;
	}
	public void setDVY_VCBT_AM(String dVY_VCBT_AM) {
		DVY_VCBT_AM = dVY_VCBT_AM;
	}
	public String getDVY_SSDY() {
		return DVY_SSDY;
	}
	public void setDVY_SSDY(String dVY_SSDY) {
		DVY_SSDY = dVY_SSDY;
	}
	public String getDVY_TROT_FEE() {
		return DVY_TROT_FEE;
	}
	public void setDVY_TROT_FEE(String dVY_TROT_FEE) {
		DVY_TROT_FEE = dVY_TROT_FEE;
	}
	public String getDVY_PHD_FEE() {
		return DVY_PHD_FEE;
	}
	public void setDVY_PHD_FEE(String dVY_PHD_FEE) {
		DVY_PHD_FEE = dVY_PHD_FEE;
	}
	public String getDVY_FAR_ASTCS() {
		return DVY_FAR_ASTCS;
	}
	public void setDVY_FAR_ASTCS(String dVY_FAR_ASTCS) {
		DVY_FAR_ASTCS = dVY_FAR_ASTCS;
	}
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}
	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}
	public String getSL_UPR_TPC() {
		return SL_UPR_TPC;
	}
	public void setSL_UPR_TPC(String sL_UPR_TPC) {
		SL_UPR_TPC = sL_UPR_TPC;
	}
	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}
	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}
	public String getBUY_BZ_METC() {
		return BUY_BZ_METC;
	}
	public void setBUY_BZ_METC(String bUY_BZ_METC) {
		BUY_BZ_METC = bUY_BZ_METC;
	}
	@Override
	public String toString() {
		return "NoticeOrderTempFileDetailVO [TEMP_SEQ=" + TEMP_SEQ
				+ ", ROW_SEQ=" + ROW_SEQ + ", ITEM_SEQ=" + ITEM_SEQ
				+ ", NA_WRS_C=" + NA_WRS_C + ", NA_SOGMN_C=" + NA_SOGMN_C
				+ ", PDAA_NA_TRPL_C=" + PDAA_NA_TRPL_C + ", PDAA_NA_TEAM_C="
				+ PDAA_NA_TEAM_C + ", RCPMNM=" + RCPMNM + ", RCPMN_TELNO="
				+ RCPMN_TELNO + ", ODR_DT=" + ODR_DT + ", ODR_SLPNO="
				+ ODR_SLPNO + ", ODR_DSQNO=" + ODR_DSQNO + ", TXT_DSC="
				+ TXT_DSC + ", DVY_WRS_UPR=" + DVY_WRS_UPR + ", DVY_PLA_QT="
				+ DVY_PLA_QT + ", DVY_AM=" + DVY_AM + ", DVY_VAT=" + DVY_VAT
				+ ", DVY_VCBT_AM=" + DVY_VCBT_AM + ", DVY_SSDY=" + DVY_SSDY
				+ ", DVY_TROT_FEE=" + DVY_TROT_FEE + ", DVY_PHD_FEE="
				+ DVY_PHD_FEE + ", DVY_FAR_ASTCS=" + DVY_FAR_ASTCS
				+ ", RMK_CNTN=" + RMK_CNTN + ", SL_UPR_TPC=" + SL_UPR_TPC
				+ ", CSER_CTR_TPC=" + CSER_CTR_TPC + ", BUY_BZ_METC="
				+ BUY_BZ_METC + "]";
	}
	
	

	
	
	
	
	
	
	
}
