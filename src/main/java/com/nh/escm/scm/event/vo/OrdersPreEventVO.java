package com.nh.escm.scm.event.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 화면ID : VAN_DS_SC_0200 화면명 : 예약행사수주현황
 * @author swha
 */
public class OrdersPreEventVO implements Serializable {

	private static final long serialVersionUID = 20150611L;

	private String BKG_EVT_YY; // 예약행사년도
	private String BKG_EVT_NO;// 예약행사번호
	private String NA_WRS_C;// 상품코드
	private String NA_WRS_N;// 상품명
	private String UNIT;// 단위
	private String RQ_QT;// 발주량
	private String TOT_GOOD_PR;// 발주금액
	private String RVOPL_NA_TRPL_C;// 수주처코드
	private String RVOPL_NA_TEAM_C;// 수주처팀코드
	private String RVOPL_NA_TRPL_N;// 수주처명
	private String ODRPL_NA_TRPL_C;// 발주처코드
	private String ODRPL_NA_TEAM_C;// 발주처팀코드
	private String ODRPL_NA_TRPL_NM;// 발주처코드
	private String ODRPL_NA_TEAM_NM;// 발주처팀코드
	private String DFN_QT;// 확정수량
	private String DFN_RATE;// 확정구성비
	private String CTR_UPR;// 계약단가
	private String BOXPE_AQZ;// 입수
	private String DVY_RQR_DT;// 배송요청일

	public String getCTR_UPR() {
		return CTR_UPR;
	}

	public void setCTR_UPR(String cTR_UPR) {
		CTR_UPR = cTR_UPR;
	}

	public String getBKG_EVT_YY() {
		return BKG_EVT_YY;
	}

	public void setBKG_EVT_YY(String bKG_EVT_YY) {
		BKG_EVT_YY = bKG_EVT_YY;
	}

	public String getBKG_EVT_NO() {
		return BKG_EVT_NO;
	}

	public void setBKG_EVT_NO(String bKG_EVT_NO) {
		BKG_EVT_NO = bKG_EVT_NO;
	}

	public String getNA_WRS_C() {
		return NA_WRS_C;
	}

	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}

	public String getNA_WRS_N() {
		return NA_WRS_N;
	}

	public void setNA_WRS_N(String nA_WRS_N) {
		NA_WRS_N = nA_WRS_N;
	}

	public String getUNIT() {
		return UNIT;
	}

	public void setUNIT(String uNIT) {
		UNIT = uNIT;
	}

	public String getRQ_QT() {
		return RQ_QT;
	}

	public void setRQ_QT(String rQ_QT) {
		RQ_QT = rQ_QT;
	}

	public String getTOT_GOOD_PR() {
		return TOT_GOOD_PR;
	}

	public void setTOT_GOOD_PR(String tOT_GOOD_PR) {
		TOT_GOOD_PR = tOT_GOOD_PR;
	}

	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}

	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}

	public String getRVOPL_NA_TEAM_C() {
		return RVOPL_NA_TEAM_C;
	}

	public void setRVOPL_NA_TEAM_C(String rVOPL_NA_TEAM_C) {
		RVOPL_NA_TEAM_C = rVOPL_NA_TEAM_C;
	}

	public String getRVOPL_NA_TRPL_N() {
		return RVOPL_NA_TRPL_N;
	}

	public void setRVOPL_NA_TRPL_N(String rVOPL_NA_TRPL_N) {
		RVOPL_NA_TRPL_N = rVOPL_NA_TRPL_N;
	}

	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}

	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}

	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}

	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}

	public String getDFN_QT() {
		return DFN_QT;
	}

	public void setDFN_QT(String dFN_QT) {
		DFN_QT = dFN_QT;
	}

	public String getDFN_RATE() {
		return DFN_RATE;
	}

	public void setDFN_RATE(String dFN_RATE) {
		DFN_RATE = dFN_RATE;
	}

	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}

	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}

	public String getODRPL_NA_TRPL_NM() {
		return ODRPL_NA_TRPL_NM;
	}

	public void setODRPL_NA_TRPL_NM(String oDRPL_NA_TRPL_NM) {
		ODRPL_NA_TRPL_NM = oDRPL_NA_TRPL_NM;
	}

	public String getODRPL_NA_TEAM_NM() {
		return ODRPL_NA_TEAM_NM;
	}

	public void setODRPL_NA_TEAM_NM(String oDRPL_NA_TEAM_NM) {
		ODRPL_NA_TEAM_NM = oDRPL_NA_TEAM_NM;
	}

	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}

	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}

	@Override
	public String toString() {
		return JsonUtil.toString(this);
	}
}