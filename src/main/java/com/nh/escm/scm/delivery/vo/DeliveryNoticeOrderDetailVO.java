package com.nh.escm.scm.delivery.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 배송예정서 상세
 * @author swha
 *
 */
public class DeliveryNoticeOrderDetailVO implements Serializable {
	
	private static final long serialVersionUID = 20150713L;
	
	private String DML_CODE; /* CRUD 코드 */
	private String SPYPL_NA_TRPL_C;/* 공급처경제통합거래처코드 */
	private String DVYAA_NA_TRPL_C;/* 배송지경제통합거래처코드 */
	private String NA_DVY_PLASH_SLPNO;/* 경제통합배송예정서전표번호 */
	private String DVY_PLA_SQNO;/* 배송예정일련번호 */
	private String NA_WRS_C;/* 경제통합상품코드 */
	private String RCPMNM;/* 수령인명 */
	private String RCPMN_TELNO;/* 수령인전화번호 */
	private String ODR_DT;/* 발주일자 */
	private String ODR_SLPNO;/* 발주전표번호 */
	private String ODR_DSQNO;/* 발주상세일련번호 */
	private String TXT_DSC;/* 과세구분코드 */
	private double DVY_WRS_UPR;/* 배송상품단가 */
	private double DVY_PLA_QT;/* 배송예정수량 */
	private double DVY_AM;/* 배송금액 */
	private double DVY_VAT;/* 배송부가세 */
	private double DVY_TROT_FEE;/* 배송환급수수료 */
	private double DVY_PHD_FEE;/* 배송물류수수료 */
	private double DVY_FAR_ASTCS;/* 배송운임보조비 */
	private String DQPD_RSNC;/* 결품사유코드 */
	private String FSRG_DTM;/* 최초등록일시 */
	private String LSCHG_DTM;/* 최종변경일시 */
	private String RMK_CNTN;/* 비고내용 */
	private long DVY_VCBT_AM;/* 배송공병금액 */
	private long DVY_SSDY; /* 배송장려금 */
	private String DVY_PLA_DT; /* 배송예정일자 */
	private String SPY_PSB_DT;/* 공급가능일자 */
	private String VCBT_NA_WRS_C;//공병상품코드
	private String WK_DS;//작업구분 I(insert), U(update), D(delete)
	private double CTR_UPR;//계약단가
	private String DSTR_TER_MRK_DSC;//유통기한구분
	private String DSTR_TER_DT;//유통기한
	
	
	public String getDML_CODE() {
		return DML_CODE;
	}


	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}


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


	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}


	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
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


	public double getDVY_VAT() {
		return DVY_VAT;
	}


	public void setDVY_VAT(double dVY_VAT) {
		DVY_VAT = dVY_VAT;
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


	public String getDQPD_RSNC() {
		return DQPD_RSNC;
	}


	public void setDQPD_RSNC(String dQPD_RSNC) {
		DQPD_RSNC = dQPD_RSNC;
	}


	public String getFSRG_DTM() {
		return FSRG_DTM;
	}


	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}


	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}


	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}


	public String getRMK_CNTN() {
		return RMK_CNTN;
	}


	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
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


	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}


	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}


	public String getSPY_PSB_DT() {
		return SPY_PSB_DT;
	}


	public void setSPY_PSB_DT(String sPY_PSB_DT) {
		SPY_PSB_DT = sPY_PSB_DT;
	}


	public String getVCBT_NA_WRS_C() {
		return VCBT_NA_WRS_C;
	}


	public void setVCBT_NA_WRS_C(String vCBT_NA_WRS_C) {
		VCBT_NA_WRS_C = vCBT_NA_WRS_C;
	}


	public String getWK_DS() {
		return WK_DS;
	}


	public void setWK_DS(String wK_DS) {
		WK_DS = wK_DS;
	}


	public double getCTR_UPR() {
		return CTR_UPR;
	}


	public void setCTR_UPR(double cTR_UPR) {
		CTR_UPR = cTR_UPR;
	}


	public String getDSTR_TER_MRK_DSC() {
		return DSTR_TER_MRK_DSC;
	}


	public void setDSTR_TER_MRK_DSC(String dSTR_TER_MRK_DSC) {
		DSTR_TER_MRK_DSC = dSTR_TER_MRK_DSC;
	}


	public String getDSTR_TER_DT() {
		return DSTR_TER_DT;
	}


	public void setDSTR_TER_DT(String dSTR_TER_DT) {
		DSTR_TER_DT = dSTR_TER_DT;
	}


	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
}
