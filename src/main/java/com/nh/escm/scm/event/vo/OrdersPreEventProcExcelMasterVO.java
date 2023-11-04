package com.nh.escm.scm.event.vo;
import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;


/**
 * 화면ID 	: VAN_DS_SC_
 * 화면명 	: 예약행사진행현황
 * 기능 		: Excel DownLoad Master
 * @author swha
 */
public class OrdersPreEventProcExcelMasterVO   implements Serializable{
	
	private static final long serialVersionUID = 20150904L;
	
	private String BKG_EVT_YY;
	private String BKG_EVT_NO;
	private String BKG_EVTNM;
	private String NA_WRS_C;
	private String BKG_EVT_WRS_CND_DSC;
	private String SLGT_NM;
	private String ORR_DT;
	private String DVY_DT;
	private String PRG_STSC_NM;
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_TRPL_N;
	private String ODRPL_NA_TEAM_C;
	private String RQ_QT;
	private String DFN_QT;
	private String DVY_RQR_DTO;
	private String BKG_EVT_PRC_DSC;
	private String DVY_RQR_DTD;

	


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




	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}




	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}




	public String getODRPL_TRPL_N() {
		return ODRPL_TRPL_N;
	}




	public void setODRPL_TRPL_N(String oDRPL_TRPL_N) {
		ODRPL_TRPL_N = oDRPL_TRPL_N;
	}




	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}




	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
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




	public String getDVY_RQR_DTO() {
		return DVY_RQR_DTO;
	}




	public void setDVY_RQR_DTO(String dVY_RQR_DTO) {
		DVY_RQR_DTO = dVY_RQR_DTO;
	}




	public String getBKG_EVT_PRC_DSC() {
		return BKG_EVT_PRC_DSC;
	}




	public void setBKG_EVT_PRC_DSC(String bKG_EVT_PRC_DSC) {
		BKG_EVT_PRC_DSC = bKG_EVT_PRC_DSC;
	}




	public String getDVY_RQR_DTD() {
		return DVY_RQR_DTD;
	}




	public void setDVY_RQR_DTD(String dVY_RQR_DTD) {
		DVY_RQR_DTD = dVY_RQR_DTD;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
}
