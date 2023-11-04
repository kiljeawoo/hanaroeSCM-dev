package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 거래관계정보 조회 (발주처)  팝업
 * @author swha
 *
 */
public class OrderOrdersTrnrelOdrplVO  implements Serializable{
	private static final long serialVersionUID = 20150916L;
	
	private String CSER_NA_TRPL_C;
	private String CSER_NA_TRPL_N;
	private String CSER_NA_TEAM_C;
	private String CSER_NA_TEAM_N;
	private String SPLR_NA_TRPL_C;
	private String SPLR_NA_TRPL_N;
	private String SPLR_NA_TEAM_C;
	private String DONGUP;
	private String CSER_CTR_TPC;//수요자계약유형코드
	private String CSER_CTR_TPC_N;
	private String SPY_TPC;//공급유형코드
	private String SPY_TPC_N;
	private String MNGT_NA_TRPL_C;
	private String MNGT_NA_TRPL_N;
	private String MNGT_NA_TEAM_C;
	private String MNGT_NA_TR_TPC;
	private String MNGT_NA_TR_TPC_N;
	private String NA_WRS_LCLC;
	private String NA_WRS_MCLC;
	private String CSER_NA_USR_SYS_KDC;
	private String SPLR_NA_USR_SYS_KDC;
	private String CTR_ST_DT;
	private String CTR_ED_DT;
	private String CTR_STOP_DT;
	private String CTR_CLO_DT;
	private String NA_RGN_N;
	private String PRGR_C;//가격군코드
	private String CSER_ADJPL_NA_TRPL_C;//수요처정산처코드
	private String CSER_ADJPL_NA_TEAM_C;//수요처정산처팀코드
	private String LDTM_DDS;//리드타입일수
	private String MNGT_TR_REL_AMNNO;//주관거래관계관리번호
	private String CSER_TR_REL_AMNNO;//수요자거래관계관리번호
	private String ACTL_SPYPL_NA_TRPL_C;//실공급처
	private String PGNM;//가격군명
	private String MNGT_NA_USR_SYS_KDC;//주관처시스템코드
	private String ROTS_FLEX_PR_APL_YN;//탄력가격적용여부
	private String BYNG_UPR_MOD_YN;//매입단가적용여부
	
	

	

	public String getBYNG_UPR_MOD_YN() {
		return BYNG_UPR_MOD_YN;
	}





	public void setBYNG_UPR_MOD_YN(String bYNG_UPR_MOD_YN) {
		BYNG_UPR_MOD_YN = bYNG_UPR_MOD_YN;
	}





	public String getCSER_NA_TRPL_C() {
		return CSER_NA_TRPL_C;
	}





	public void setCSER_NA_TRPL_C(String cSER_NA_TRPL_C) {
		CSER_NA_TRPL_C = cSER_NA_TRPL_C;
	}





	public String getCSER_NA_TRPL_N() {
		return CSER_NA_TRPL_N;
	}





	public void setCSER_NA_TRPL_N(String cSER_NA_TRPL_N) {
		CSER_NA_TRPL_N = cSER_NA_TRPL_N;
	}





	public String getCSER_NA_TEAM_C() {
		return CSER_NA_TEAM_C;
	}





	public void setCSER_NA_TEAM_C(String cSER_NA_TEAM_C) {
		CSER_NA_TEAM_C = cSER_NA_TEAM_C;
	}





	public String getCSER_NA_TEAM_N() {
		return CSER_NA_TEAM_N;
	}





	public void setCSER_NA_TEAM_N(String cSER_NA_TEAM_N) {
		CSER_NA_TEAM_N = cSER_NA_TEAM_N;
	}





	public String getSPLR_NA_TRPL_C() {
		return SPLR_NA_TRPL_C;
	}





	public void setSPLR_NA_TRPL_C(String sPLR_NA_TRPL_C) {
		SPLR_NA_TRPL_C = sPLR_NA_TRPL_C;
	}





	public String getSPLR_NA_TRPL_N() {
		return SPLR_NA_TRPL_N;
	}





	public void setSPLR_NA_TRPL_N(String sPLR_NA_TRPL_N) {
		SPLR_NA_TRPL_N = sPLR_NA_TRPL_N;
	}





	public String getSPLR_NA_TEAM_C() {
		return SPLR_NA_TEAM_C;
	}





	public void setSPLR_NA_TEAM_C(String sPLR_NA_TEAM_C) {
		SPLR_NA_TEAM_C = sPLR_NA_TEAM_C;
	}





	public String getDONGUP() {
		return DONGUP;
	}





	public void setDONGUP(String dONGUP) {
		DONGUP = dONGUP;
	}





	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}





	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}





	public String getCSER_CTR_TPC_N() {
		return CSER_CTR_TPC_N;
	}





	public void setCSER_CTR_TPC_N(String cSER_CTR_TPC_N) {
		CSER_CTR_TPC_N = cSER_CTR_TPC_N;
	}





	public String getSPY_TPC() {
		return SPY_TPC;
	}





	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}





	public String getSPY_TPC_N() {
		return SPY_TPC_N;
	}





	public void setSPY_TPC_N(String sPY_TPC_N) {
		SPY_TPC_N = sPY_TPC_N;
	}





	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}





	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
	}





	public String getMNGT_NA_TRPL_N() {
		return MNGT_NA_TRPL_N;
	}





	public void setMNGT_NA_TRPL_N(String mNGT_NA_TRPL_N) {
		MNGT_NA_TRPL_N = mNGT_NA_TRPL_N;
	}





	public String getMNGT_NA_TEAM_C() {
		return MNGT_NA_TEAM_C;
	}





	public void setMNGT_NA_TEAM_C(String mNGT_NA_TEAM_C) {
		MNGT_NA_TEAM_C = mNGT_NA_TEAM_C;
	}





	public String getMNGT_NA_TR_TPC() {
		return MNGT_NA_TR_TPC;
	}





	public void setMNGT_NA_TR_TPC(String mNGT_NA_TR_TPC) {
		MNGT_NA_TR_TPC = mNGT_NA_TR_TPC;
	}





	public String getMNGT_NA_TR_TPC_N() {
		return MNGT_NA_TR_TPC_N;
	}





	public void setMNGT_NA_TR_TPC_N(String mNGT_NA_TR_TPC_N) {
		MNGT_NA_TR_TPC_N = mNGT_NA_TR_TPC_N;
	}





	public String getNA_WRS_LCLC() {
		return NA_WRS_LCLC;
	}





	public void setNA_WRS_LCLC(String nA_WRS_LCLC) {
		NA_WRS_LCLC = nA_WRS_LCLC;
	}





	public String getNA_WRS_MCLC() {
		return NA_WRS_MCLC;
	}





	public void setNA_WRS_MCLC(String nA_WRS_MCLC) {
		NA_WRS_MCLC = nA_WRS_MCLC;
	}





	public String getCSER_NA_USR_SYS_KDC() {
		return CSER_NA_USR_SYS_KDC;
	}





	public void setCSER_NA_USR_SYS_KDC(String cSER_NA_USR_SYS_KDC) {
		CSER_NA_USR_SYS_KDC = cSER_NA_USR_SYS_KDC;
	}





	public String getSPLR_NA_USR_SYS_KDC() {
		return SPLR_NA_USR_SYS_KDC;
	}





	public void setSPLR_NA_USR_SYS_KDC(String sPLR_NA_USR_SYS_KDC) {
		SPLR_NA_USR_SYS_KDC = sPLR_NA_USR_SYS_KDC;
	}





	public String getCTR_ST_DT() {
		return CTR_ST_DT;
	}





	public void setCTR_ST_DT(String cTR_ST_DT) {
		CTR_ST_DT = cTR_ST_DT;
	}





	public String getCTR_ED_DT() {
		return CTR_ED_DT;
	}





	public void setCTR_ED_DT(String cTR_ED_DT) {
		CTR_ED_DT = cTR_ED_DT;
	}





	public String getCTR_STOP_DT() {
		return CTR_STOP_DT;
	}





	public void setCTR_STOP_DT(String cTR_STOP_DT) {
		CTR_STOP_DT = cTR_STOP_DT;
	}





	public String getCTR_CLO_DT() {
		return CTR_CLO_DT;
	}





	public void setCTR_CLO_DT(String cTR_CLO_DT) {
		CTR_CLO_DT = cTR_CLO_DT;
	}





	public String getNA_RGN_N() {
		return NA_RGN_N;
	}





	public void setNA_RGN_N(String nA_RGN_N) {
		NA_RGN_N = nA_RGN_N;
	}





	public String getPRGR_C() {
		return PRGR_C;
	}





	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}





	public String getCSER_ADJPL_NA_TRPL_C() {
		return CSER_ADJPL_NA_TRPL_C;
	}





	public void setCSER_ADJPL_NA_TRPL_C(String cSER_ADJPL_NA_TRPL_C) {
		CSER_ADJPL_NA_TRPL_C = cSER_ADJPL_NA_TRPL_C;
	}





	public String getCSER_ADJPL_NA_TEAM_C() {
		return CSER_ADJPL_NA_TEAM_C;
	}





	public void setCSER_ADJPL_NA_TEAM_C(String cSER_ADJPL_NA_TEAM_C) {
		CSER_ADJPL_NA_TEAM_C = cSER_ADJPL_NA_TEAM_C;
	}





	public String getLDTM_DDS() {
		return LDTM_DDS;
	}





	public void setLDTM_DDS(String lDTM_DDS) {
		LDTM_DDS = lDTM_DDS;
	}





	public String getMNGT_TR_REL_AMNNO() {
		return MNGT_TR_REL_AMNNO;
	}





	public void setMNGT_TR_REL_AMNNO(String mNGT_TR_REL_AMNNO) {
		MNGT_TR_REL_AMNNO = mNGT_TR_REL_AMNNO;
	}





	public String getCSER_TR_REL_AMNNO() {
		return CSER_TR_REL_AMNNO;
	}





	public void setCSER_TR_REL_AMNNO(String cSER_TR_REL_AMNNO) {
		CSER_TR_REL_AMNNO = cSER_TR_REL_AMNNO;
	}





	public String getACTL_SPYPL_NA_TRPL_C() {
		return ACTL_SPYPL_NA_TRPL_C;
	}





	public void setACTL_SPYPL_NA_TRPL_C(String aCTL_SPYPL_NA_TRPL_C) {
		ACTL_SPYPL_NA_TRPL_C = aCTL_SPYPL_NA_TRPL_C;
	}





	public String getPGNM() {
		return PGNM;
	}





	public void setPGNM(String pGNM) {
		PGNM = pGNM;
	}





	public String getMNGT_NA_USR_SYS_KDC() {
		return MNGT_NA_USR_SYS_KDC;
	}





	public void setMNGT_NA_USR_SYS_KDC(String mNGT_NA_USR_SYS_KDC) {
		MNGT_NA_USR_SYS_KDC = mNGT_NA_USR_SYS_KDC;
	}





	public String getROTS_FLEX_PR_APL_YN() {
		return ROTS_FLEX_PR_APL_YN;
	}





	public void setROTS_FLEX_PR_APL_YN(String rOTS_FLEX_PR_APL_YN) {
		ROTS_FLEX_PR_APL_YN = rOTS_FLEX_PR_APL_YN;
	}





	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
}
