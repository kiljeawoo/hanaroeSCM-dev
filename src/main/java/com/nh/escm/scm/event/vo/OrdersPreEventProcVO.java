package com.nh.escm.scm.event.vo;
import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;

/**
 * 화면ID : VAN_DS_SC_0220
 * 화면명 : 예약행사진행현황
 * @author swha
 */
public class OrdersPreEventProcVO   implements Serializable{
	
	
	private static final long serialVersionUID = 20150611L;
	
	
	
	private String BKG_EVT_YY;//예약행사년도
	private String BKG_EVT_NO;//예약행사번호
	private String BKG_EVTNM;//행사명
	private String NA_WRS_C;//상품코드
	private String ODRPL_NA_TRPL_C;//발주처코드
	private String BKG_EVT_WRS_CND_DSC;//상품구분
	private String SLGT_NM;//매취구분
	private String ORR_DT;//발주기간
	private String DVY_DT;//배송기간
	private String PRG_STSC_NM;//진행상태
	private String ODRPL_NA_TRPL_N;//발주처명
	private String ODRPL_NA_TEAM_C;//발주처팀코드
	private String WRS_CNT;//상품수
	private String RQ_QT;//예약수량
	private String DFN_QT;//조정수량
	private String DV_QT;//분배수량
	private String DD_QT;//발주수량
	private String ER_QT;//오류수량
	private String DL_QT;//삭제수량
	
	private List<OrdersPreEventProcVO> list;

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

	public String getBKG_EVTNM() {
		return BKG_EVTNM;
	}

	public void setBKG_EVTNM(String bKG_EVTNM) {
		BKG_EVTNM = bKG_EVTNM;
	}

	public String getNA_WRS_C() {
		return NA_WRS_C;
	}

	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}

	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}

	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}

	public String getBKG_EVT_WRS_CND_DSC() {
		return BKG_EVT_WRS_CND_DSC;
	}

	public void setBKG_EVT_WRS_CND_DSC(String bKG_EVT_WRS_CND_DSC) {
		BKG_EVT_WRS_CND_DSC = bKG_EVT_WRS_CND_DSC;
	}

	public String getSLGT_NM() {
		return SLGT_NM;
	}

	public void setSLGT_NM(String sLGT_NM) {
		SLGT_NM = sLGT_NM;
	}

	public String getORR_DT() {
		return ORR_DT;
	}

	public void setORR_DT(String oRR_DT) {
		ORR_DT = oRR_DT;
	}

	public String getDVY_DT() {
		return DVY_DT;
	}

	public void setDVY_DT(String dVY_DT) {
		DVY_DT = dVY_DT;
	}

	public String getPRG_STSC_NM() {
		return PRG_STSC_NM;
	}

	public void setPRG_STSC_NM(String pRG_STSC_NM) {
		PRG_STSC_NM = pRG_STSC_NM;
	}

	public String getODRPL_NA_TRPL_N() {
		return ODRPL_NA_TRPL_N;
	}

	public void setODRPL_NA_TRPL_N(String oDRPL_NA_TRPL_N) {
		ODRPL_NA_TRPL_N = oDRPL_NA_TRPL_N;
	}

	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}

	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}

	public String getWRS_CNT() {
		return WRS_CNT;
	}

	public void setWRS_CNT(String wRS_CNT) {
		WRS_CNT = wRS_CNT;
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

	public String getDV_QT() {
		return DV_QT;
	}

	public void setDV_QT(String dV_QT) {
		DV_QT = dV_QT;
	}

	public String getDD_QT() {
		return DD_QT;
	}

	public void setDD_QT(String dD_QT) {
		DD_QT = dD_QT;
	}

	public String getER_QT() {
		return ER_QT;
	}

	public void setER_QT(String eR_QT) {
		ER_QT = eR_QT;
	}

	public String getDL_QT() {
		return DL_QT;
	}

	public void setDL_QT(String dL_QT) {
		DL_QT = dL_QT;
	}

	public List<OrdersPreEventProcVO> getList() {
		return list;
	}

	public void setList(List<OrdersPreEventProcVO> list) {
		this.list = list;
	}
	
	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}

	
			
	
	
	
}
