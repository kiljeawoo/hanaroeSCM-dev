package com.nh.escm.scm.retann.vo;

import java.io.Serializable;

/**
 * 반품입고 의뢰전표 팝업 VO
 * @author HyeRim.Oh
 *
 */
public class RetannRqtSlpVO implements Serializable {
	
	private static final long serialVersionUID = 20150717L;
	
	private String RGD_RG_DT;  //반품등록일자
	private String RGD_PLA_NO;  //전표번호
	private String RVOPL_NA_TEAM_C;  //수주처팀
	private String CSER_CTR_TPC;  //계통구분
	private String NA_TRPL_C;  //의뢰처 코드
	private String CLNTNM;  //의뢰처명
	private String DIV;  //의뢰처팀
	private String NA_TEAM_C;  //구분
	private String NA_RGD_STS_DSC;  //반품구분
	private String WDR_PLA_DT;  //회수예정일자
	private String WDRPL_NA_TRPL_C;  //회수처코드
	private String WDRPL_CLNTNM;  //회수처명
	private String WDRPL_NA_TEAM_C;  //회수처팀
	private String RGD_AMN_DSC;  //반품관리구분
	public String getRGD_RG_DT() {
		return RGD_RG_DT;
	}
	public void setRGD_RG_DT(String rGD_RG_DT) {
		RGD_RG_DT = rGD_RG_DT;
	}
	public String getRGD_PLA_NO() {
		return RGD_PLA_NO;
	}
	public void setRGD_PLA_NO(String rGD_PLA_NO) {
		RGD_PLA_NO = rGD_PLA_NO;
	}
	public String getRVOPL_NA_TEAM_C() {
		return RVOPL_NA_TEAM_C;
	}
	public void setRVOPL_NA_TEAM_C(String rVOPL_NA_TEAM_C) {
		RVOPL_NA_TEAM_C = rVOPL_NA_TEAM_C;
	}
	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}
	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getDIV() {
		return DIV;
	}
	public void setDIV(String dIV) {
		DIV = dIV;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getNA_RGD_STS_DSC() {
		return NA_RGD_STS_DSC;
	}
	public void setNA_RGD_STS_DSC(String nA_RGD_STS_DSC) {
		NA_RGD_STS_DSC = nA_RGD_STS_DSC;
	}
	public String getWDR_PLA_DT() {
		return WDR_PLA_DT;
	}
	public void setWDR_PLA_DT(String wDR_PLA_DT) {
		WDR_PLA_DT = wDR_PLA_DT;
	}
	public String getWDRPL_NA_TRPL_C() {
		return WDRPL_NA_TRPL_C;
	}
	public void setWDRPL_NA_TRPL_C(String wDRPL_NA_TRPL_C) {
		WDRPL_NA_TRPL_C = wDRPL_NA_TRPL_C;
	}
	public String getWDRPL_CLNTNM() {
		return WDRPL_CLNTNM;
	}
	public void setWDRPL_CLNTNM(String wDRPL_CLNTNM) {
		WDRPL_CLNTNM = wDRPL_CLNTNM;
	}
	public String getWDRPL_NA_TEAM_C() {
		return WDRPL_NA_TEAM_C;
	}
	public void setWDRPL_NA_TEAM_C(String wDRPL_NA_TEAM_C) {
		WDRPL_NA_TEAM_C = wDRPL_NA_TEAM_C;
	}
	public String getRGD_AMN_DSC() {
		return RGD_AMN_DSC;
	}
	public void setRGD_AMN_DSC(String rGD_AMN_DSC) {
		RGD_AMN_DSC = rGD_AMN_DSC;
	}

}
