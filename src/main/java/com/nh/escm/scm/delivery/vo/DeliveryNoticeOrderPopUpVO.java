package com.nh.escm.scm.delivery.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;
/**
 * ID : VAS_DS_FN_0204
 * 화면명 : 발주번호_배송요청일 조회
 * @author swha
 *
 */
public class DeliveryNoticeOrderPopUpVO  implements Serializable {
	
	private static final long serialVersionUID = 20150826L;
	
	private String ODR_DT; /* 발주일자 */
	private String ODR_SLPNO; /* 전표번호 */
	private String CSER_CTR_TPC; /* 계약구분 */
	private String CSER_CTR_TPC_N; /* 계약구분명 */
	private String ODRPL_NA_TRPL_C; /* 발주처코드 */
	private String ODRPL_NA_TRPL_N; /* 발주처명 */
	private String ODRPL_NA_TEAM_C;/* 발주처팀코드 */
	private String ODRPL_NA_TEAM_N;/* 발주처팀명 */
	private String DVY_VHC_DSC;/* 배송구분 */
	private String SPY_TPC_N; /*  공급구분 */
	private String DVY_RQR_DT;/* 배송요청일 */
	private long ODR_QTTT;
	private long ODR_SAM;
	
	private long VATTT;
	private long VCBT_AM;
	private long VCBX_AM;
	private String DDLY_YN; /* 직송여부 */
	private String NA_ODR_STS_DSC; /* 발주상태 */
	private String RVOPL_NA_TRPL_C; /* 수주처 코드 */
	private String RVOPL_NA_TRPL_N; /* 수주처명 */
	private String RVOPL_NA_TEAM_C;
	private String RVOPL_NA_TEAM_N;/* 수주처팀명 */
	private String ROGO_INF_CRT_DSC; /* 수발주정보생성구분코드 */
	private String DVYAA_NA_TRPL_C;/* 배송처코드 */
	private String DVYAA_NA_TRPL_N; /* 배송처명 */
	private String DVYAA_NA_TEAM_C;/* 배송처팀코드 */
	private String DVYAA_NA_TEAM_N; /* 배송처팀명 */
	private String SPYPL_NA_TRPL_C;/* 공급처코드 */
	private String SPYPL_NA_TEAM_C; /* 공급처팀 */
	private String PRGR_C; /* 공급처팀 */
	private String CSER_NA_USR_SYS_KDC;/* 공급처코드 */
	private String SPY_TPC;//공급유형
	private String DDLY_YN_N;//공급유형
	private String C_CSER_CTR_TPC;
	private String BYNG_UPR_MOD_YN;
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
	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}
	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
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
	public String getODRPL_NA_TEAM_N() {
		return ODRPL_NA_TEAM_N;
	}
	public void setODRPL_NA_TEAM_N(String oDRPL_NA_TEAM_N) {
		ODRPL_NA_TEAM_N = oDRPL_NA_TEAM_N;
	}
	public String getDVY_VHC_DSC() {
		return DVY_VHC_DSC;
	}
	public void setDVY_VHC_DSC(String dVY_VHC_DSC) {
		DVY_VHC_DSC = dVY_VHC_DSC;
	}
	public String getSPY_TPC_N() {
		return SPY_TPC_N;
	}
	public void setSPY_TPC_N(String sPY_TPC_N) {
		SPY_TPC_N = sPY_TPC_N;
	}
	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}
	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}
	public long getODR_QTTT() {
		return ODR_QTTT;
	}
	public void setODR_QTTT(long oDR_QTTT) {
		ODR_QTTT = oDR_QTTT;
	}
	public long getODR_SAM() {
		return ODR_SAM;
	}
	public void setODR_SAM(long oDR_SAM) {
		ODR_SAM = oDR_SAM;
	}
	public long getVATTT() {
		return VATTT;
	}
	public void setVATTT(long vATTT) {
		VATTT = vATTT;
	}
	public long getVCBT_AM() {
		return VCBT_AM;
	}
	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}
	public long getVCBX_AM() {
		return VCBX_AM;
	}
	public void setVCBX_AM(long vCBX_AM) {
		VCBX_AM = vCBX_AM;
	}
	public String getDDLY_YN() {
		return DDLY_YN;
	}
	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}
	public String getNA_ODR_STS_DSC() {
		return NA_ODR_STS_DSC;
	}
	public void setNA_ODR_STS_DSC(String nA_ODR_STS_DSC) {
		NA_ODR_STS_DSC = nA_ODR_STS_DSC;
	}
	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}
	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}
	public String getRVOPL_NA_TRPL_N() {
		return RVOPL_NA_TRPL_N;
	}
	public void setRVOPL_NA_TRPL_N(String rVOPL_NA_TRPL_N) {
		RVOPL_NA_TRPL_N = rVOPL_NA_TRPL_N;
	}
	public String getRVOPL_NA_TEAM_C() {
		return RVOPL_NA_TEAM_C;
	}
	public void setRVOPL_NA_TEAM_C(String rVOPL_NA_TEAM_C) {
		RVOPL_NA_TEAM_C = rVOPL_NA_TEAM_C;
	}
	public String getRVOPL_NA_TEAM_N() {
		return RVOPL_NA_TEAM_N;
	}
	public void setRVOPL_NA_TEAM_N(String rVOPL_NA_TEAM_N) {
		RVOPL_NA_TEAM_N = rVOPL_NA_TEAM_N;
	}
	public String getROGO_INF_CRT_DSC() {
		return ROGO_INF_CRT_DSC;
	}
	public void setROGO_INF_CRT_DSC(String rOGO_INF_CRT_DSC) {
		ROGO_INF_CRT_DSC = rOGO_INF_CRT_DSC;
	}
	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}
	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}
	public String getDVYAA_NA_TRPL_N() {
		return DVYAA_NA_TRPL_N;
	}
	public void setDVYAA_NA_TRPL_N(String dVYAA_NA_TRPL_N) {
		DVYAA_NA_TRPL_N = dVYAA_NA_TRPL_N;
	}
	public String getDVYAA_NA_TEAM_C() {
		return DVYAA_NA_TEAM_C;
	}
	public void setDVYAA_NA_TEAM_C(String dVYAA_NA_TEAM_C) {
		DVYAA_NA_TEAM_C = dVYAA_NA_TEAM_C;
	}
	public String getDVYAA_NA_TEAM_N() {
		return DVYAA_NA_TEAM_N;
	}
	public void setDVYAA_NA_TEAM_N(String dVYAA_NA_TEAM_N) {
		DVYAA_NA_TEAM_N = dVYAA_NA_TEAM_N;
	}
	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}
	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}
	public String getSPYPL_NA_TEAM_C() {
		return SPYPL_NA_TEAM_C;
	}
	public void setSPYPL_NA_TEAM_C(String sPYPL_NA_TEAM_C) {
		SPYPL_NA_TEAM_C = sPYPL_NA_TEAM_C;
	}
	public String getPRGR_C() {
		return PRGR_C;
	}
	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}
	public String getCSER_NA_USR_SYS_KDC() {
		return CSER_NA_USR_SYS_KDC;
	}
	public void setCSER_NA_USR_SYS_KDC(String cSER_NA_USR_SYS_KDC) {
		CSER_NA_USR_SYS_KDC = cSER_NA_USR_SYS_KDC;
	}
	public String getSPY_TPC() {
		return SPY_TPC;
	}
	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}
	public String getDDLY_YN_N() {
		return DDLY_YN_N;
	}
	public void setDDLY_YN_N(String dDLY_YN_N) {
		DDLY_YN_N = dDLY_YN_N;
	}
	public String getC_CSER_CTR_TPC() {
		return C_CSER_CTR_TPC;
	}
	public void setC_CSER_CTR_TPC(String c_CSER_CTR_TPC) {
		C_CSER_CTR_TPC = c_CSER_CTR_TPC;
	}
	public String getBYNG_UPR_MOD_YN() {
		return BYNG_UPR_MOD_YN;
	}
	public void setBYNG_UPR_MOD_YN(String bYNG_UPR_MOD_YN) {
		BYNG_UPR_MOD_YN = bYNG_UPR_MOD_YN;
	}
	
	
	
	
	
	
}
