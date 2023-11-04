package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회 소속사업장별 Detail Print
 * 
 * @author swha
 *
 */
public class OrderOrdersRvoplDetailPrintVO implements Serializable {
	private static final long serialVersionUID = 20150907L;

	private String NA_WRS_C;// 상품코드
	private String WRSNM;// 상품명
	private String NA_WRS_STD_UNT_N;// 규격
	private String NA_WRS_UNT_N;// 단위
	private String B_BOXPE_AQZ;// 입수량
	private String BYNG_UPR;// 단가
	private String ODR_QT;// 발주량
	private String BOX_QT;// BOX수량
	private String ODR_AM;// 수주금액
	private String B_VCBT_AM;// 공병금액
	private String ODR_DSQNO;// 상품순서

	private String OGN_ODRPL_NA_TRPL_C; // 경제통합 원발주처경제통합거래처코드
	private String OGN_ODRPL_NA_TRPL_NM; // 경제통합 원발주처경제통합거래처명
	private String OGN_ODRPL_NA_TEAM_C; // 경제통합 원발주처경제통합팀코드

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

	public String getNA_WRS_STD_UNT_N() {
		return NA_WRS_STD_UNT_N;
	}

	public void setNA_WRS_STD_UNT_N(String nA_WRS_STD_UNT_N) {
		NA_WRS_STD_UNT_N = nA_WRS_STD_UNT_N;
	}

	public String getNA_WRS_UNT_N() {
		return NA_WRS_UNT_N;
	}

	public void setNA_WRS_UNT_N(String nA_WRS_UNT_N) {
		NA_WRS_UNT_N = nA_WRS_UNT_N;
	}

	public String getB_BOXPE_AQZ() {
		return B_BOXPE_AQZ;
	}

	public void setB_BOXPE_AQZ(String b_BOXPE_AQZ) {
		B_BOXPE_AQZ = b_BOXPE_AQZ;
	}

	public String getBYNG_UPR() {
		return BYNG_UPR;
	}

	public void setBYNG_UPR(String bYNG_UPR) {
		BYNG_UPR = bYNG_UPR;
	}

	public String getODR_QT() {
		return ODR_QT;
	}

	public void setODR_QT(String oDR_QT) {
		ODR_QT = oDR_QT;
	}

	public String getBOX_QT() {
		return BOX_QT;
	}

	public void setBOX_QT(String bOX_QT) {
		BOX_QT = bOX_QT;
	}

	public String getODR_AM() {
		return ODR_AM;
	}

	public void setODR_AM(String oDR_AM) {
		ODR_AM = oDR_AM;
	}

	public String getB_VCBT_AM() {
		return B_VCBT_AM;
	}

	public void setB_VCBT_AM(String b_VCBT_AM) {
		B_VCBT_AM = b_VCBT_AM;
	}

	@Override
	public String toString() {
		return JsonUtil.toString(this);
	}

	public String getODR_DSQNO() {
		return ODR_DSQNO;
	}

	public void setODR_DSQNO(String oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}

	public String getOGN_ODRPL_NA_TRPL_C() {
		return OGN_ODRPL_NA_TRPL_C;
	}

	public void setOGN_ODRPL_NA_TRPL_C(String oGN_ODRPL_NA_TRPL_C) {
		OGN_ODRPL_NA_TRPL_C = oGN_ODRPL_NA_TRPL_C;
	}

	public String getOGN_ODRPL_NA_TRPL_NM() {
		return OGN_ODRPL_NA_TRPL_NM;
	}

	public void setOGN_ODRPL_NA_TRPL_NM(String oGN_ODRPL_NA_TRPL_NM) {
		OGN_ODRPL_NA_TRPL_NM = oGN_ODRPL_NA_TRPL_NM;
	}

	public String getOGN_ODRPL_NA_TEAM_C() {
		return OGN_ODRPL_NA_TEAM_C;
	}

	public void setOGN_ODRPL_NA_TEAM_C(String oGN_ODRPL_NA_TEAM_C) {
		OGN_ODRPL_NA_TEAM_C = oGN_ODRPL_NA_TEAM_C;
	}
}