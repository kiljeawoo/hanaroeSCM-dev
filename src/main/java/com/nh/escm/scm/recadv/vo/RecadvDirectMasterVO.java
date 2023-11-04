package com.nh.escm.scm.recadv.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 검수실적-직송별 마스터 VO
 * @author HyeRim.Oh
 *
 */
public class RecadvDirectMasterVO implements Serializable{

	private static final long serialVersionUID = 20150615L;
	
	private long RN; //페이지번호
	
	/*PK*/
	private String NA_BZPLC;  //경제통합사업장코드	
	private String NA_TEAM_C;  //경제통합팀코드	
	private String SLP_DT;  //전표일자	
	private String NA_SLPNO;  //경제통합전표번호
		
	private String BCLNTNM;  //본/지사명
	private String NA_DVY_PLASH_SLPNO;  //배송예정서번호
	private String CCLNTNM;  //물류센터명
	private String DDLY_CCLNTNM;  //직송실매입처명
	private String CNR_DT;  //검수일자
	private String TRSLPNO;  //매출일자-번호
	private String RPY_PLA_DT;  //지급예정일
	private long GAM_AM;  //공급금액 A
	private long BYNG_VAT;  //부가세 B
	private long TOT_GAM;  //총공급금액 C=A+B+E+F
	private long CHRG_TOT;  //총공제금액 D=P~Y
	private long VCBT_AM;  //공병금액 E
	private long VCBX_AM;  //공상자금액 F
	private long CBAM;  //순공급금액 G=C-D
	private String NA_TR_DSC;  //거래구분 
	private String NA_CRC_CAN_DSC;  //정정취소구분 
	private String ROTS_CTR_DSC;  //계통구분 
	private String MNGT_NA_TRPL_C;  //본/지사코드 
	private String ACTL_BUYPL_NA_TRPL_C;  //물류센터
	private String DDLY_BUYPL_NA_TRPL_C;  //직송실매입처
	private long COMP_FEE;  //업체수수료 O=P+Q+R+S
	private long BYNG_SSDY;  //매입장려금 P
	private long ETR_AMN_FEE;  //관리수수료(R2) Q
	private long ETR_AMN_VAT;  //관리부가세(R2) R
	private long SLGT_AMN_FEE;  //관리수수료(R1) S
	private long PHD_FEE;  //물류수수료 T
	private long PHD_FEE_VAT;  //물류부가세 U
	private long TRP_SVC_CST;  //운송용역비 V
	private long TRP_SVCOS_VAT;  //운송부가세 W
	private long ETC_FEE;  //기타수수료 X
	private long ETC_FEE_VAT;  //기타부가세 Y
	private String FSRGMN_ENO;  //배송예정작성자	
	private Date EDIRG_DTM; //인터페이스 수신일시 - 배달일시
	private String FS_RMS_DT; //문서최초수신일자 - 수신일시
	private String APPLICATION_ID;	//XML 문서번호
	
	/* 합계*/
	private long TOTAL_GAM_AM;
	private long TOTAL_BYNG_VAT;
	private long TOTAL_TOT_GAM;
	private long TOTAL_CHRG_TOT;
	private long TOTAL_VCBT_AM;
	private long TOTAL_VCBX_AM;
	private long TOTAL_CBAM;
	private long TOTAL_COMP_FEE;
	private long TOTAL_BYNG_SSDY;
	private long TOTAL_ETR_AMN_FEE;
	private long TOTAL_ETR_AMN_VAT;
	private long TOTAL_SLGT_AMN_FEE;
	private long TOTAL_PHD_FEE;
	private long TOTAL_PHD_FEE_VAT;
	private long TOTAL_TRP_SVC_CST;
	private long TOTAL_TRP_SVCOS_VAT;
	private long TOTAL_ETC_FEE;
	private long TOTAL_ETC_FEE_VAT;
	
	
	public long getRN() {
		return RN;
	}
	public void setRN(long rN) {
		RN = rN;
	}
	public Date getEDIRG_DTM() {
		return EDIRG_DTM;
	}
	public void setEDIRG_DTM(Date eDIRG_DTM) {
		EDIRG_DTM = eDIRG_DTM;
	}
	public String getFS_RMS_DT() {
		return FS_RMS_DT;
	}
	public void setFS_RMS_DT(String fS_RMS_DT) {
		FS_RMS_DT = fS_RMS_DT;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getSLP_DT() {
		return SLP_DT;
	}
	public void setSLP_DT(String sLP_DT) {
		SLP_DT = sLP_DT;
	}
	public String getNA_SLPNO() {
		return NA_SLPNO;
	}
	public void setNA_SLPNO(String nA_SLPNO) {
		NA_SLPNO = nA_SLPNO;
	}
	public String getBCLNTNM() {
		return BCLNTNM;
	}
	public void setBCLNTNM(String bCLNTNM) {
		BCLNTNM = bCLNTNM;
	}
	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}
	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}
	public String getCCLNTNM() {
		return CCLNTNM;
	}
	public void setCCLNTNM(String cCLNTNM) {
		CCLNTNM = cCLNTNM;
	}
	public String getDDLY_CCLNTNM() {
		return DDLY_CCLNTNM;
	}
	public void setDDLY_CCLNTNM(String dDLY_CCLNTNM) {
		DDLY_CCLNTNM = dDLY_CCLNTNM;
	}
	public String getCNR_DT() {
		return CNR_DT;
	}
	public void setCNR_DT(String cNR_DT) {
		CNR_DT = cNR_DT;
	}
	public String getTRSLPNO() {
		return TRSLPNO;
	}
	public void setTRSLPNO(String tRSLPNO) {
		TRSLPNO = tRSLPNO;
	}
	public String getRPY_PLA_DT() {
		return RPY_PLA_DT;
	}
	public void setRPY_PLA_DT(String rPY_PLA_DT) {
		RPY_PLA_DT = rPY_PLA_DT;
	}
	public long getGAM_AM() {
		return GAM_AM;
	}
	public void setGAM_AM(long gAM_AM) {
		GAM_AM = gAM_AM;
	}
	public long getBYNG_VAT() {
		return BYNG_VAT;
	}
	public void setBYNG_VAT(long bYNG_VAT) {
		BYNG_VAT = bYNG_VAT;
	}
	public long getTOT_GAM() {
		return TOT_GAM;
	}
	public void setTOT_GAM(long tOT_GAM) {
		TOT_GAM = tOT_GAM;
	}
	public long getCHRG_TOT() {
		return CHRG_TOT;
	}
	public void setCHRG_TOT(long cHRG_TOT) {
		CHRG_TOT = cHRG_TOT;
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
	public long getCBAM() {
		return CBAM;
	}
	public void setCBAM(long cBAM) {
		CBAM = cBAM;
	}
	public String getNA_TR_DSC() {
		return NA_TR_DSC;
	}
	public void setNA_TR_DSC(String nA_TR_DSC) {
		NA_TR_DSC = nA_TR_DSC;
	}
	public String getNA_CRC_CAN_DSC() {
		return NA_CRC_CAN_DSC;
	}
	public void setNA_CRC_CAN_DSC(String nA_CRC_CAN_DSC) {
		NA_CRC_CAN_DSC = nA_CRC_CAN_DSC;
	}
	public String getROTS_CTR_DSC() {
		return ROTS_CTR_DSC;
	}
	public void setROTS_CTR_DSC(String rOTS_CTR_DSC) {
		ROTS_CTR_DSC = rOTS_CTR_DSC;
	}
	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}
	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
	}
	public String getACTL_BUYPL_NA_TRPL_C() {
		return ACTL_BUYPL_NA_TRPL_C;
	}
	public void setACTL_BUYPL_NA_TRPL_C(String aCTL_BUYPL_NA_TRPL_C) {
		ACTL_BUYPL_NA_TRPL_C = aCTL_BUYPL_NA_TRPL_C;
	}
	public String getDDLY_BUYPL_NA_TRPL_C() {
		return DDLY_BUYPL_NA_TRPL_C;
	}
	public void setDDLY_BUYPL_NA_TRPL_C(String dDLY_BUYPL_NA_TRPL_C) {
		DDLY_BUYPL_NA_TRPL_C = dDLY_BUYPL_NA_TRPL_C;
	}
	public long getCOMP_FEE() {
		return COMP_FEE;
	}
	public void setCOMP_FEE(long cOMP_FEE) {
		COMP_FEE = cOMP_FEE;
	}
	public long getBYNG_SSDY() {
		return BYNG_SSDY;
	}
	public void setBYNG_SSDY(long bYNG_SSDY) {
		BYNG_SSDY = bYNG_SSDY;
	}
	public long getETR_AMN_FEE() {
		return ETR_AMN_FEE;
	}
	public void setETR_AMN_FEE(long eTR_AMN_FEE) {
		ETR_AMN_FEE = eTR_AMN_FEE;
	}
	public long getETR_AMN_VAT() {
		return ETR_AMN_VAT;
	}
	public void setETR_AMN_VAT(long eTR_AMN_VAT) {
		ETR_AMN_VAT = eTR_AMN_VAT;
	}
	public long getSLGT_AMN_FEE() {
		return SLGT_AMN_FEE;
	}
	public void setSLGT_AMN_FEE(long sLGT_AMN_FEE) {
		SLGT_AMN_FEE = sLGT_AMN_FEE;
	}
	public long getPHD_FEE() {
		return PHD_FEE;
	}
	public void setPHD_FEE(long pHD_FEE) {
		PHD_FEE = pHD_FEE;
	}
	public long getPHD_FEE_VAT() {
		return PHD_FEE_VAT;
	}
	public void setPHD_FEE_VAT(long pHD_FEE_VAT) {
		PHD_FEE_VAT = pHD_FEE_VAT;
	}
	public long getTRP_SVC_CST() {
		return TRP_SVC_CST;
	}
	public void setTRP_SVC_CST(long tRP_SVC_CST) {
		TRP_SVC_CST = tRP_SVC_CST;
	}
	public long getTRP_SVCOS_VAT() {
		return TRP_SVCOS_VAT;
	}
	public void setTRP_SVCOS_VAT(long tRP_SVCOS_VAT) {
		TRP_SVCOS_VAT = tRP_SVCOS_VAT;
	}
	public long getETC_FEE() {
		return ETC_FEE;
	}
	public void setETC_FEE(long eTC_FEE) {
		ETC_FEE = eTC_FEE;
	}
	public long getETC_FEE_VAT() {
		return ETC_FEE_VAT;
	}
	public void setETC_FEE_VAT(long eTC_FEE_VAT) {
		ETC_FEE_VAT = eTC_FEE_VAT;
	}
	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}
	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}
	
	public long getTOTAL_GAM_AM() {
		return TOTAL_GAM_AM;
	}
	public void setTOTAL_GAM_AM(long tOTAL_GAM_AM) {
		TOTAL_GAM_AM = tOTAL_GAM_AM;
	}
	public long getTOTAL_BYNG_VAT() {
		return TOTAL_BYNG_VAT;
	}
	public void setTOTAL_BYNG_VAT(long tOTAL_BYNG_VAT) {
		TOTAL_BYNG_VAT = tOTAL_BYNG_VAT;
	}
	public long getTOTAL_TOT_GAM() {
		return TOTAL_TOT_GAM;
	}
	public void setTOTAL_TOT_GAM(long tOTAL_TOT_GAM) {
		TOTAL_TOT_GAM = tOTAL_TOT_GAM;
	}
	public long getTOTAL_CHRG_TOT() {
		return TOTAL_CHRG_TOT;
	}
	public void setTOTAL_CHRG_TOT(long tOTAL_CHRG_TOT) {
		TOTAL_CHRG_TOT = tOTAL_CHRG_TOT;
	}
	public long getTOTAL_VCBT_AM() {
		return TOTAL_VCBT_AM;
	}
	public void setTOTAL_VCBT_AM(long tOTAL_VCBT_AM) {
		TOTAL_VCBT_AM = tOTAL_VCBT_AM;
	}
	public long getTOTAL_VCBX_AM() {
		return TOTAL_VCBX_AM;
	}
	public void setTOTAL_VCBX_AM(long tOTAL_VCBX_AM) {
		TOTAL_VCBX_AM = tOTAL_VCBX_AM;
	}
	public long getTOTAL_CBAM() {
		return TOTAL_CBAM;
	}
	public void setTOTAL_CBAM(long tOTAL_CBAM) {
		TOTAL_CBAM = tOTAL_CBAM;
	}
	public long getTOTAL_COMP_FEE() {
		return TOTAL_COMP_FEE;
	}
	public void setTOTAL_COMP_FEE(long tOTAL_COMP_FEE) {
		TOTAL_COMP_FEE = tOTAL_COMP_FEE;
	}
	public long getTOTAL_BYNG_SSDY() {
		return TOTAL_BYNG_SSDY;
	}
	public void setTOTAL_BYNG_SSDY(long tOTAL_BYNG_SSDY) {
		TOTAL_BYNG_SSDY = tOTAL_BYNG_SSDY;
	}
	public long getTOTAL_ETR_AMN_FEE() {
		return TOTAL_ETR_AMN_FEE;
	}
	public void setTOTAL_ETR_AMN_FEE(long tOTAL_ETR_AMN_FEE) {
		TOTAL_ETR_AMN_FEE = tOTAL_ETR_AMN_FEE;
	}
	public long getTOTAL_ETR_AMN_VAT() {
		return TOTAL_ETR_AMN_VAT;
	}
	public void setTOTAL_ETR_AMN_VAT(long tOTAL_ETR_AMN_VAT) {
		TOTAL_ETR_AMN_VAT = tOTAL_ETR_AMN_VAT;
	}
	public long getTOTAL_SLGT_AMN_FEE() {
		return TOTAL_SLGT_AMN_FEE;
	}
	public void setTOTAL_SLGT_AMN_FEE(long tOTAL_SLGT_AMN_FEE) {
		TOTAL_SLGT_AMN_FEE = tOTAL_SLGT_AMN_FEE;
	}
	public long getTOTAL_PHD_FEE() {
		return TOTAL_PHD_FEE;
	}
	public void setTOTAL_PHD_FEE(long tOTAL_PHD_FEE) {
		TOTAL_PHD_FEE = tOTAL_PHD_FEE;
	}
	public long getTOTAL_PHD_FEE_VAT() {
		return TOTAL_PHD_FEE_VAT;
	}
	public void setTOTAL_PHD_FEE_VAT(long tOTAL_PHD_FEE_VAT) {
		TOTAL_PHD_FEE_VAT = tOTAL_PHD_FEE_VAT;
	}
	public long getTOTAL_TRP_SVC_CST() {
		return TOTAL_TRP_SVC_CST;
	}
	public void setTOTAL_TRP_SVC_CST(long tOTAL_TRP_SVC_CST) {
		TOTAL_TRP_SVC_CST = tOTAL_TRP_SVC_CST;
	}
	public long getTOTAL_TRP_SVCOS_VAT() {
		return TOTAL_TRP_SVCOS_VAT;
	}
	public void setTOTAL_TRP_SVCOS_VAT(long tOTAL_TRP_SVCOS_VAT) {
		TOTAL_TRP_SVCOS_VAT = tOTAL_TRP_SVCOS_VAT;
	}
	public long getTOTAL_ETC_FEE() {
		return TOTAL_ETC_FEE;
	}
	public void setTOTAL_ETC_FEE(long tOTAL_ETC_FEE) {
		TOTAL_ETC_FEE = tOTAL_ETC_FEE;
	}
	public long getTOTAL_ETC_FEE_VAT() {
		return TOTAL_ETC_FEE_VAT;
	}
	public void setTOTAL_ETC_FEE_VAT(long tOTAL_ETC_FEE_VAT) {
		TOTAL_ETC_FEE_VAT = tOTAL_ETC_FEE_VAT;
	}
	@Override
	public String toString() {
		return "RecadvDirectMasterVO [NA_BZPLC=" + NA_BZPLC + ", NA_TEAM_C="
				+ NA_TEAM_C + ", SLP_DT=" + SLP_DT + ", NA_SLPNO=" + NA_SLPNO
				+ ", BCLNTNM=" + BCLNTNM + ", NA_DVY_PLASH_SLPNO="
				+ NA_DVY_PLASH_SLPNO + ", CCLNTNM=" + CCLNTNM
				+ ", DDLY_CCLNTNM=" + DDLY_CCLNTNM + ", CNR_DT=" + CNR_DT
				+ ", TRSLPNO=" + TRSLPNO + ", RPY_PLA_DT=" + RPY_PLA_DT
				+ ", GAM_AM=" + GAM_AM + ", BYNG_VAT=" + BYNG_VAT
				+ ", TOT_GAM=" + TOT_GAM + ", CHRG_TOT=" + CHRG_TOT
				+ ", VCBT_AM=" + VCBT_AM + ", VCBX_AM=" + VCBX_AM + ", CBAM="
				+ CBAM + ", NA_TR_DSC=" + NA_TR_DSC + ", NA_CRC_CAN_DSC="
				+ NA_CRC_CAN_DSC + ", ROTS_CTR_DSC=" + ROTS_CTR_DSC
				+ ", MNGT_NA_TRPL_C=" + MNGT_NA_TRPL_C
				+ ", ACTL_BUYPL_NA_TRPL_C=" + ACTL_BUYPL_NA_TRPL_C
				+ ", DDLY_BUYPL_NA_TRPL_C=" + DDLY_BUYPL_NA_TRPL_C
				+ ", COMP_FEE=" + COMP_FEE + ", BYNG_SSDY=" + BYNG_SSDY
				+ ", ETR_AMN_FEE=" + ETR_AMN_FEE + ", ETR_AMN_VAT="
				+ ETR_AMN_VAT + ", SLGT_AMN_FEE=" + SLGT_AMN_FEE + ", PHD_FEE="
				+ PHD_FEE + ", PHD_FEE_VAT=" + PHD_FEE_VAT + ", TRP_SVC_CST="
				+ TRP_SVC_CST + ", TRP_SVCOS_VAT=" + TRP_SVCOS_VAT
				+ ", ETC_FEE=" + ETC_FEE + ", ETC_FEE_VAT=" + ETC_FEE_VAT
				+ ", FSRGMN_ENO=" + FSRGMN_ENO + "]";
	}
	public String getAPPLICATION_ID() {
		return APPLICATION_ID;
	}
	public void setAPPLICATION_ID(String aPPLICATION_ID) {
		APPLICATION_ID = aPPLICATION_ID;
	}	
}
