package com.nh.escm.scm.event.vo;
import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;

/**
 * 화면ID : VAN_DS_SC_0210
 * 화면명 : 예약행사집계현황
 * @author swha
 */
public class OrdersPreEventSumsVO  implements Serializable{
	
	private static final long serialVersionUID = 20150611L;
	
	
	private String TRPL_VIEW;//물류/발류구분
	private String BKG_EVT_YY; //예약행사년도
	private String BKG_EVT_NO; //예약행사번호
	private String TRPL_C; //물류/발주 코드
	private String TRPL_N;//물류/발주 명
	private String TEAM_C;
	private String TEAM_N;//물류/발주 팀코드
	private String RQ_QT;//예약발주BOX
	private String DFN_QT;//발주확정BOX
	private String DFN_RATE;//구성비
	private String GOOD_PR;//발주금액
	private String DVY_RQR_DT;//배송요청일자
	private String NA_WRS_C;//상품코드
	private String NA_WRS_N;//상품명
	private String WRS_STDNM;//규격
	private String UNIT;//단위
	private String BOXPE_AQZ;//입수
	private String S_GOOD_PR;//총발주확정BOX
	private String SLGT_ETR_NM;//매취수탁구분
	private String RVOPL_NM;//거래처명
	private String RVOPL_NA_TEAM_C;//거래처코드
	private String BYNG_UPR;//계약단가
	
	private List<OrdersPreEventSumsVO> list;

	
	


	public String getTRPL_VIEW() {
		return TRPL_VIEW;
	}





	public void setTRPL_VIEW(String tRPL_VIEW) {
		TRPL_VIEW = tRPL_VIEW;
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





	public String getTRPL_C() {
		return TRPL_C;
	}





	public void setTRPL_C(String tRPL_C) {
		TRPL_C = tRPL_C;
	}





	public String getTRPL_N() {
		return TRPL_N;
	}





	public void setTRPL_N(String tRPL_N) {
		TRPL_N = tRPL_N;
	}





	public String getTEAM_C() {
		return TEAM_C;
	}





	public void setTEAM_C(String tEAM_C) {
		TEAM_C = tEAM_C;
	}





	public String getTEAM_N() {
		return TEAM_N;
	}





	public void setTEAM_N(String tEAM_N) {
		TEAM_N = tEAM_N;
	}





	public String getRQ_QT() {
		return RQ_QT;
	}





	public void setRQ_QT(String rQ_QT) {
		RQ_QT = rQ_QT;
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





	public String getGOOD_PR() {
		return GOOD_PR;
	}





	public void setGOOD_PR(String gOOD_PR) {
		GOOD_PR = gOOD_PR;
	}





	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}





	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
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





	public String getWRS_STDNM() {
		return WRS_STDNM;
	}





	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}





	public String getUNIT() {
		return UNIT;
	}





	public void setUNIT(String uNIT) {
		UNIT = uNIT;
	}





	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}





	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}





	public String getS_GOOD_PR() {
		return S_GOOD_PR;
	}





	public void setS_GOOD_PR(String s_GOOD_PR) {
		S_GOOD_PR = s_GOOD_PR;
	}





	public String getSLGT_ETR_NM() {
		return SLGT_ETR_NM;
	}





	public void setSLGT_ETR_NM(String sLGT_ETR_NM) {
		SLGT_ETR_NM = sLGT_ETR_NM;
	}





	public String getRVOPL_NM() {
		return RVOPL_NM;
	}





	public void setRVOPL_NM(String rVOPL_NM) {
		RVOPL_NM = rVOPL_NM;
	}





	public String getRVOPL_NA_TEAM_C() {
		return RVOPL_NA_TEAM_C;
	}





	public void setRVOPL_NA_TEAM_C(String rVOPL_NA_TEAM_C) {
		RVOPL_NA_TEAM_C = rVOPL_NA_TEAM_C;
	}





	public String getBYNG_UPR() {
		return BYNG_UPR;
	}





	public void setBYNG_UPR(String bYNG_UPR) {
		BYNG_UPR = bYNG_UPR;
	}





	public List<OrdersPreEventSumsVO> getList() {
		return list;
	}





	public void setList(List<OrdersPreEventSumsVO> list) {
		this.list = list;
	}





	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}

	
	
	
	
	
	
	
	
	
	
	
	
}
	