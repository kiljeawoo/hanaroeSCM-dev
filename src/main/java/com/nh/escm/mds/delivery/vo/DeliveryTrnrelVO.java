package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;

/**
 * 거래관계조회
 * @author swha
 *
 */
public class DeliveryTrnrelVO implements Serializable {
	
	private static final long serialVersionUID = 20151119L;
	
	private String CSER_NA_TRPL_C;
	private String CSER_NA_TEAM_C;
	private String SPLR_NA_TRPL_C;
	private String SPLR_NA_TEAM_C;
	private String CSER_CTR_TPC;
	private String SPY_TPC;
	private String NA_WRS_LCLC;
	private String NA_WRS_MCLC;
	private String MNGT_NA_TRPL_C;
	private String MNGT_NA_TEAM_C;
	private String MNGT_NA_TR_TPC;
	private String BZ_METH_DSC;
	private String CSER_NA_USR_SYS_KDC;
	private String CSER_NAAC_DSC;
	private String SPLR_NA_USR_SYS_KDC;
	private String SPLR_NAAC_DSC;
	private String CSER_ADJPL_NA_TRPL_C;
	private String CSER_ADJPL_NA_TEAM_C;
	private String CSER_CTR_CHRRNM;
	private String CSER_CTR_CHRR_TELNO;
	private String CSER_CTR_CHRR_MPNO;
	private String SPLR_ADJPL_NA_TRPL_C;
	private String SPLR_ADJPL_NA_TEAM_C;
	private String SPYPL_HOFF_NA_TRPL_C;
	private String SPLR_BNK_C;
	private String SPLR_STL_ACNO;
	private String SPLR_DPRNM;
	private String SPLR_CTR_CHRRNM;
	private String SPLR_CTR_CHRR_TELNO;
	private String SPLR_CTR_CHRR_MPNO;
	private String CTR_ST_DT;
	private String CTR_ED_DT;
	private String CTR_STOP_DT;
	private String CTR_CLO_DT;
	private String CTR_CLO_RSNC;
	private String TR_STOP_RSNC;
	private String PRGR_DSC;
	private String PRGR_C;
	private String ROTS_FLEX_PR_APL_YN;
	private String BYNG_UPR_MOD_YN;
	private String NA_ODR_FBID_RSNC;
	private String ODR_FBID_DT;
	private String ODRPL_BUYER_ENO;
	private String NA_RVO_FBID_RSNC;
	private String RVO_FBID_DT;
	private String RVOPL_BUYER_ENO;
	private String LDTM_DDS;
	private String RGD_AMN_DSC;
	private String NA_PMI_SBJ_DSC;
	private String STL_FDT_BASCD;
	private String SSDYRT_BASCD;
	private String SSDYRT;
	private String SSDY_BAS_AM;
	private String DDLY_SSDYRT;
	private String SSDY_PY_PTM_DSC;
	private String FSRG_DTM;
	private String LSCHG_DTM;
	private String DEL_DTM;
	private String LS_CMENO;
	private String PY_FDTCN;
	private String CSER_TR_REL_AMNNO;
	private String MNGT_TR_REL_AMNNO;
	public String getCSER_NA_TRPL_C() {
		return CSER_NA_TRPL_C;
	}
	public void setCSER_NA_TRPL_C(String cSER_NA_TRPL_C) {
		CSER_NA_TRPL_C = cSER_NA_TRPL_C;
	}
	public String getCSER_NA_TEAM_C() {
		return CSER_NA_TEAM_C;
	}
	public void setCSER_NA_TEAM_C(String cSER_NA_TEAM_C) {
		CSER_NA_TEAM_C = cSER_NA_TEAM_C;
	}
	public String getSPLR_NA_TRPL_C() {
		return SPLR_NA_TRPL_C;
	}
	public void setSPLR_NA_TRPL_C(String sPLR_NA_TRPL_C) {
		SPLR_NA_TRPL_C = sPLR_NA_TRPL_C;
	}
	public String getSPLR_NA_TEAM_C() {
		return SPLR_NA_TEAM_C;
	}
	public void setSPLR_NA_TEAM_C(String sPLR_NA_TEAM_C) {
		SPLR_NA_TEAM_C = sPLR_NA_TEAM_C;
	}
	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}
	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}
	public String getSPY_TPC() {
		return SPY_TPC;
	}
	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
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
	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}
	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
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
	public String getBZ_METH_DSC() {
		return BZ_METH_DSC;
	}
	public void setBZ_METH_DSC(String bZ_METH_DSC) {
		BZ_METH_DSC = bZ_METH_DSC;
	}
	public String getCSER_NA_USR_SYS_KDC() {
		return CSER_NA_USR_SYS_KDC;
	}
	public void setCSER_NA_USR_SYS_KDC(String cSER_NA_USR_SYS_KDC) {
		CSER_NA_USR_SYS_KDC = cSER_NA_USR_SYS_KDC;
	}
	public String getCSER_NAAC_DSC() {
		return CSER_NAAC_DSC;
	}
	public void setCSER_NAAC_DSC(String cSER_NAAC_DSC) {
		CSER_NAAC_DSC = cSER_NAAC_DSC;
	}
	public String getSPLR_NA_USR_SYS_KDC() {
		return SPLR_NA_USR_SYS_KDC;
	}
	public void setSPLR_NA_USR_SYS_KDC(String sPLR_NA_USR_SYS_KDC) {
		SPLR_NA_USR_SYS_KDC = sPLR_NA_USR_SYS_KDC;
	}
	public String getSPLR_NAAC_DSC() {
		return SPLR_NAAC_DSC;
	}
	public void setSPLR_NAAC_DSC(String sPLR_NAAC_DSC) {
		SPLR_NAAC_DSC = sPLR_NAAC_DSC;
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
	public String getCSER_CTR_CHRRNM() {
		return CSER_CTR_CHRRNM;
	}
	public void setCSER_CTR_CHRRNM(String cSER_CTR_CHRRNM) {
		CSER_CTR_CHRRNM = cSER_CTR_CHRRNM;
	}
	public String getCSER_CTR_CHRR_TELNO() {
		return CSER_CTR_CHRR_TELNO;
	}
	public void setCSER_CTR_CHRR_TELNO(String cSER_CTR_CHRR_TELNO) {
		CSER_CTR_CHRR_TELNO = cSER_CTR_CHRR_TELNO;
	}
	public String getCSER_CTR_CHRR_MPNO() {
		return CSER_CTR_CHRR_MPNO;
	}
	public void setCSER_CTR_CHRR_MPNO(String cSER_CTR_CHRR_MPNO) {
		CSER_CTR_CHRR_MPNO = cSER_CTR_CHRR_MPNO;
	}
	public String getSPLR_ADJPL_NA_TRPL_C() {
		return SPLR_ADJPL_NA_TRPL_C;
	}
	public void setSPLR_ADJPL_NA_TRPL_C(String sPLR_ADJPL_NA_TRPL_C) {
		SPLR_ADJPL_NA_TRPL_C = sPLR_ADJPL_NA_TRPL_C;
	}
	public String getSPLR_ADJPL_NA_TEAM_C() {
		return SPLR_ADJPL_NA_TEAM_C;
	}
	public void setSPLR_ADJPL_NA_TEAM_C(String sPLR_ADJPL_NA_TEAM_C) {
		SPLR_ADJPL_NA_TEAM_C = sPLR_ADJPL_NA_TEAM_C;
	}
	public String getSPYPL_HOFF_NA_TRPL_C() {
		return SPYPL_HOFF_NA_TRPL_C;
	}
	public void setSPYPL_HOFF_NA_TRPL_C(String sPYPL_HOFF_NA_TRPL_C) {
		SPYPL_HOFF_NA_TRPL_C = sPYPL_HOFF_NA_TRPL_C;
	}
	public String getSPLR_BNK_C() {
		return SPLR_BNK_C;
	}
	public void setSPLR_BNK_C(String sPLR_BNK_C) {
		SPLR_BNK_C = sPLR_BNK_C;
	}
	public String getSPLR_STL_ACNO() {
		return SPLR_STL_ACNO;
	}
	public void setSPLR_STL_ACNO(String sPLR_STL_ACNO) {
		SPLR_STL_ACNO = sPLR_STL_ACNO;
	}
	public String getSPLR_DPRNM() {
		return SPLR_DPRNM;
	}
	public void setSPLR_DPRNM(String sPLR_DPRNM) {
		SPLR_DPRNM = sPLR_DPRNM;
	}
	public String getSPLR_CTR_CHRRNM() {
		return SPLR_CTR_CHRRNM;
	}
	public void setSPLR_CTR_CHRRNM(String sPLR_CTR_CHRRNM) {
		SPLR_CTR_CHRRNM = sPLR_CTR_CHRRNM;
	}
	public String getSPLR_CTR_CHRR_TELNO() {
		return SPLR_CTR_CHRR_TELNO;
	}
	public void setSPLR_CTR_CHRR_TELNO(String sPLR_CTR_CHRR_TELNO) {
		SPLR_CTR_CHRR_TELNO = sPLR_CTR_CHRR_TELNO;
	}
	public String getSPLR_CTR_CHRR_MPNO() {
		return SPLR_CTR_CHRR_MPNO;
	}
	public void setSPLR_CTR_CHRR_MPNO(String sPLR_CTR_CHRR_MPNO) {
		SPLR_CTR_CHRR_MPNO = sPLR_CTR_CHRR_MPNO;
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
	public String getCTR_CLO_RSNC() {
		return CTR_CLO_RSNC;
	}
	public void setCTR_CLO_RSNC(String cTR_CLO_RSNC) {
		CTR_CLO_RSNC = cTR_CLO_RSNC;
	}
	public String getTR_STOP_RSNC() {
		return TR_STOP_RSNC;
	}
	public void setTR_STOP_RSNC(String tR_STOP_RSNC) {
		TR_STOP_RSNC = tR_STOP_RSNC;
	}
	public String getPRGR_DSC() {
		return PRGR_DSC;
	}
	public void setPRGR_DSC(String pRGR_DSC) {
		PRGR_DSC = pRGR_DSC;
	}
	public String getPRGR_C() {
		return PRGR_C;
	}
	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}
	public String getROTS_FLEX_PR_APL_YN() {
		return ROTS_FLEX_PR_APL_YN;
	}
	public void setROTS_FLEX_PR_APL_YN(String rOTS_FLEX_PR_APL_YN) {
		ROTS_FLEX_PR_APL_YN = rOTS_FLEX_PR_APL_YN;
	}
	public String getBYNG_UPR_MOD_YN() {
		return BYNG_UPR_MOD_YN;
	}
	public void setBYNG_UPR_MOD_YN(String bYNG_UPR_MOD_YN) {
		BYNG_UPR_MOD_YN = bYNG_UPR_MOD_YN;
	}
	public String getNA_ODR_FBID_RSNC() {
		return NA_ODR_FBID_RSNC;
	}
	public void setNA_ODR_FBID_RSNC(String nA_ODR_FBID_RSNC) {
		NA_ODR_FBID_RSNC = nA_ODR_FBID_RSNC;
	}
	public String getODR_FBID_DT() {
		return ODR_FBID_DT;
	}
	public void setODR_FBID_DT(String oDR_FBID_DT) {
		ODR_FBID_DT = oDR_FBID_DT;
	}
	public String getODRPL_BUYER_ENO() {
		return ODRPL_BUYER_ENO;
	}
	public void setODRPL_BUYER_ENO(String oDRPL_BUYER_ENO) {
		ODRPL_BUYER_ENO = oDRPL_BUYER_ENO;
	}
	public String getNA_RVO_FBID_RSNC() {
		return NA_RVO_FBID_RSNC;
	}
	public void setNA_RVO_FBID_RSNC(String nA_RVO_FBID_RSNC) {
		NA_RVO_FBID_RSNC = nA_RVO_FBID_RSNC;
	}
	public String getRVO_FBID_DT() {
		return RVO_FBID_DT;
	}
	public void setRVO_FBID_DT(String rVO_FBID_DT) {
		RVO_FBID_DT = rVO_FBID_DT;
	}
	public String getRVOPL_BUYER_ENO() {
		return RVOPL_BUYER_ENO;
	}
	public void setRVOPL_BUYER_ENO(String rVOPL_BUYER_ENO) {
		RVOPL_BUYER_ENO = rVOPL_BUYER_ENO;
	}
	public String getLDTM_DDS() {
		return LDTM_DDS;
	}
	public void setLDTM_DDS(String lDTM_DDS) {
		LDTM_DDS = lDTM_DDS;
	}
	public String getRGD_AMN_DSC() {
		return RGD_AMN_DSC;
	}
	public void setRGD_AMN_DSC(String rGD_AMN_DSC) {
		RGD_AMN_DSC = rGD_AMN_DSC;
	}
	public String getNA_PMI_SBJ_DSC() {
		return NA_PMI_SBJ_DSC;
	}
	public void setNA_PMI_SBJ_DSC(String nA_PMI_SBJ_DSC) {
		NA_PMI_SBJ_DSC = nA_PMI_SBJ_DSC;
	}
	public String getSTL_FDT_BASCD() {
		return STL_FDT_BASCD;
	}
	public void setSTL_FDT_BASCD(String sTL_FDT_BASCD) {
		STL_FDT_BASCD = sTL_FDT_BASCD;
	}
	public String getSSDYRT_BASCD() {
		return SSDYRT_BASCD;
	}
	public void setSSDYRT_BASCD(String sSDYRT_BASCD) {
		SSDYRT_BASCD = sSDYRT_BASCD;
	}
	public String getSSDYRT() {
		return SSDYRT;
	}
	public void setSSDYRT(String sSDYRT) {
		SSDYRT = sSDYRT;
	}
	public String getSSDY_BAS_AM() {
		return SSDY_BAS_AM;
	}
	public void setSSDY_BAS_AM(String sSDY_BAS_AM) {
		SSDY_BAS_AM = sSDY_BAS_AM;
	}
	public String getDDLY_SSDYRT() {
		return DDLY_SSDYRT;
	}
	public void setDDLY_SSDYRT(String dDLY_SSDYRT) {
		DDLY_SSDYRT = dDLY_SSDYRT;
	}
	public String getSSDY_PY_PTM_DSC() {
		return SSDY_PY_PTM_DSC;
	}
	public void setSSDY_PY_PTM_DSC(String sSDY_PY_PTM_DSC) {
		SSDY_PY_PTM_DSC = sSDY_PY_PTM_DSC;
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
	public String getDEL_DTM() {
		return DEL_DTM;
	}
	public void setDEL_DTM(String dEL_DTM) {
		DEL_DTM = dEL_DTM;
	}
	public String getLS_CMENO() {
		return LS_CMENO;
	}
	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}
	public String getPY_FDTCN() {
		return PY_FDTCN;
	}
	public void setPY_FDTCN(String pY_FDTCN) {
		PY_FDTCN = pY_FDTCN;
	}
	public String getCSER_TR_REL_AMNNO() {
		return CSER_TR_REL_AMNNO;
	}
	public void setCSER_TR_REL_AMNNO(String cSER_TR_REL_AMNNO) {
		CSER_TR_REL_AMNNO = cSER_TR_REL_AMNNO;
	}
	public String getMNGT_TR_REL_AMNNO() {
		return MNGT_TR_REL_AMNNO;
	}
	public void setMNGT_TR_REL_AMNNO(String mNGT_TR_REL_AMNNO) {
		MNGT_TR_REL_AMNNO = mNGT_TR_REL_AMNNO;
	}
	
	
	
	
	
}
