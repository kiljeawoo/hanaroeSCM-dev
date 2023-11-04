package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정서 일괄등록 Temp File Master VO
 * @author swha
 *
 */
public class NoticeOrderTempFileMasterVO  implements Serializable{
	private static final long serialVersionUID = 20150710L;
	
	private String TEMP_SEQ;//00 생성일련번호
	private String ROW_SEQ;//01A 일련번호
	private String ITEM_CNT;//02B detail건수
	private String SPYPL_NA_TRPL_C;//03C 공급처
	private String SPYPL_NA_TEAM_C;//04D 공급처팀
	private String DVY_PLA_DT;//05E 배송예정일자
	private String NA_DVY_PLASH_SLPNO;//06F 배송예정서번호
	private String ODRPL_NA_TRPL_C;//07G 발주처
	private String ODRPL_NA_TEAM_C;//08H 발주처팀
	private String RVOPL_NA_TRPL_C;//09I 수주처
	private String RVOPL_NA_TEAM_C;//10J 수주처팀
	private String ADJPL_NA_TRPL_C;//11K 정산처
	private String ADJPL_NA_TEAM_C;//12L 정산처팀
	private String MNGT_NA_TR_TPC;//13M 주관처 거래유형
	private String MNGT_NA_TRPL_C;//14N 주관처
	private String MNGT_NA_TEAM_C;//15O 주관처팀
	private String DVYAA_NA_TRPL_C;//16P 배송처
	private String DVYAA_NA_TEAM_C;//17Q 배송처팀
	private String DVYAA_C;//18R 배송지
	private String CSER_CTR_TPC;//19S 수요자 계약유형
	private String SPY_TPC;//20T 공급유형
	private String SLGT_ETR_DSC;//21U 매취수탁 구분
	private String NA_WRS_LCLC;//22V 대분류
	private String NA_WRS_MCLC;//23W 중분류
	private String ACCP_C;//24X 인수도코드
	private String DVY_PLA_QT;//25Y 배송예정수량 (합계)
	private String DVY_AM;//26Z 배송금액 (합계)
	private String DVY_VAT;//27AA 배송부가세 (합계)
	private String VCBT_AM;//28AB 배송공병금액 (합계)
	private String VCBX_AM;//29AC 배송공상자금액 (합계)
	private String DVY_SSDY;//30AD 배송장려금 (합계)
	private String DVY_TROT_FEE;//31AE 배송환급수수료 (합계)
	private String DVY_PHD_FEE;//32AF 배송물류수수료 (합계)
	private String DVY_FAR_ASTCS;//33AG 배송운임보조비 (합계)
	private String WD_PLTT_QT;//34AH 목재파렛트수량 (합계)
	private String PSC_PLTT_QT;//35AI 플라스틱파렛트 수량(합계)
	private String PRGR_C;//36AJ 가격군
	private String BUY_UPR_DSC;//37AK 구매단가구분
	private String BYNG_UPR_GR_C;//38AL 매입단가군
	private String RMK_CNTN;//39AM 비고내용
	private String FSRGMN_NA_BZPLC;//최초등록자경제통합사업장코드
	private String CSER_TR_REL_AMNNO;
	private String MNGT_TR_REL_AMNNO;
	private String TEMP_YN;//임시저장여부
	private String DDLY_YN;//직송여부
	private String FSRGMN_ENO;//최초작성자
	private String DVY_PLASH_KDC;
	private String SLPNO_RMS_DTM;//배송예정서 최초 작성일시
	public String getSLPNO_RMS_DTM() {
		return SLPNO_RMS_DTM;
	}







	public void setSLPNO_RMS_DTM(String sLPNO_RMS_DTM) {
		SLPNO_RMS_DTM = sLPNO_RMS_DTM;
	}







	private List<NoticeOrderTempFileDetailVO> list;
	
	
	




	public String getTEMP_SEQ() {
		return TEMP_SEQ;
	}







	public void setTEMP_SEQ(String tEMP_SEQ) {
		TEMP_SEQ = tEMP_SEQ;
	}







	public String getROW_SEQ() {
		return ROW_SEQ;
	}







	public void setROW_SEQ(String rOW_SEQ) {
		ROW_SEQ = rOW_SEQ;
	}







	public String getITEM_CNT() {
		return ITEM_CNT;
	}







	public void setITEM_CNT(String iTEM_CNT) {
		ITEM_CNT = iTEM_CNT;
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







	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}







	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}







	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}







	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
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







	public String getADJPL_NA_TRPL_C() {
		return ADJPL_NA_TRPL_C;
	}







	public void setADJPL_NA_TRPL_C(String aDJPL_NA_TRPL_C) {
		ADJPL_NA_TRPL_C = aDJPL_NA_TRPL_C;
	}







	public String getADJPL_NA_TEAM_C() {
		return ADJPL_NA_TEAM_C;
	}







	public void setADJPL_NA_TEAM_C(String aDJPL_NA_TEAM_C) {
		ADJPL_NA_TEAM_C = aDJPL_NA_TEAM_C;
	}







	public String getMNGT_NA_TR_TPC() {
		return MNGT_NA_TR_TPC;
	}







	public void setMNGT_NA_TR_TPC(String mNGT_NA_TR_TPC) {
		MNGT_NA_TR_TPC = mNGT_NA_TR_TPC;
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







	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}







	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}







	public String getDVYAA_NA_TEAM_C() {
		return DVYAA_NA_TEAM_C;
	}







	public void setDVYAA_NA_TEAM_C(String dVYAA_NA_TEAM_C) {
		DVYAA_NA_TEAM_C = dVYAA_NA_TEAM_C;
	}







	public String getDVYAA_C() {
		return DVYAA_C;
	}







	public void setDVYAA_C(String dVYAA_C) {
		DVYAA_C = dVYAA_C;
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







	public String getSLGT_ETR_DSC() {
		return SLGT_ETR_DSC;
	}







	public void setSLGT_ETR_DSC(String sLGT_ETR_DSC) {
		SLGT_ETR_DSC = sLGT_ETR_DSC;
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







	public String getACCP_C() {
		return ACCP_C;
	}







	public void setACCP_C(String aCCP_C) {
		ACCP_C = aCCP_C;
	}







	public String getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}







	public void setDVY_PLA_QT(String dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}







	public String getDVY_AM() {
		return DVY_AM;
	}







	public void setDVY_AM(String dVY_AM) {
		DVY_AM = dVY_AM;
	}







	public String getDVY_VAT() {
		return DVY_VAT;
	}







	public void setDVY_VAT(String dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}







	public String getVCBT_AM() {
		return VCBT_AM;
	}







	public void setVCBT_AM(String vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}







	public String getVCBX_AM() {
		return VCBX_AM;
	}







	public void setVCBX_AM(String vCBX_AM) {
		VCBX_AM = vCBX_AM;
	}







	public String getDVY_SSDY() {
		return DVY_SSDY;
	}







	public void setDVY_SSDY(String dVY_SSDY) {
		DVY_SSDY = dVY_SSDY;
	}







	public String getDVY_TROT_FEE() {
		return DVY_TROT_FEE;
	}







	public void setDVY_TROT_FEE(String dVY_TROT_FEE) {
		DVY_TROT_FEE = dVY_TROT_FEE;
	}







	public String getDVY_PHD_FEE() {
		return DVY_PHD_FEE;
	}







	public void setDVY_PHD_FEE(String dVY_PHD_FEE) {
		DVY_PHD_FEE = dVY_PHD_FEE;
	}







	public String getDVY_FAR_ASTCS() {
		return DVY_FAR_ASTCS;
	}







	public void setDVY_FAR_ASTCS(String dVY_FAR_ASTCS) {
		DVY_FAR_ASTCS = dVY_FAR_ASTCS;
	}







	public String getWD_PLTT_QT() {
		return WD_PLTT_QT;
	}







	public void setWD_PLTT_QT(String wD_PLTT_QT) {
		WD_PLTT_QT = wD_PLTT_QT;
	}







	public String getPSC_PLTT_QT() {
		return PSC_PLTT_QT;
	}







	public void setPSC_PLTT_QT(String pSC_PLTT_QT) {
		PSC_PLTT_QT = pSC_PLTT_QT;
	}







	public String getPRGR_C() {
		return PRGR_C;
	}







	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}







	public String getBUY_UPR_DSC() {
		return BUY_UPR_DSC;
	}







	public void setBUY_UPR_DSC(String bUY_UPR_DSC) {
		BUY_UPR_DSC = bUY_UPR_DSC;
	}







	public String getBYNG_UPR_GR_C() {
		return BYNG_UPR_GR_C;
	}







	public void setBYNG_UPR_GR_C(String bYNG_UPR_GR_C) {
		BYNG_UPR_GR_C = bYNG_UPR_GR_C;
	}







	public String getRMK_CNTN() {
		return RMK_CNTN;
	}







	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}







	public String getFSRGMN_NA_BZPLC() {
		return FSRGMN_NA_BZPLC;
	}







	public void setFSRGMN_NA_BZPLC(String fSRGMN_NA_BZPLC) {
		FSRGMN_NA_BZPLC = fSRGMN_NA_BZPLC;
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







	public String getTEMP_YN() {
		return TEMP_YN;
	}







	public void setTEMP_YN(String tEMP_YN) {
		TEMP_YN = tEMP_YN;
	}







	public String getDDLY_YN() {
		return DDLY_YN;
	}







	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}







	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}







	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}







	public String getDVY_PLASH_KDC() {
		return DVY_PLASH_KDC;
	}







	public void setDVY_PLASH_KDC(String dVY_PLASH_KDC) {
		DVY_PLASH_KDC = dVY_PLASH_KDC;
	}







	public List<NoticeOrderTempFileDetailVO> getList() {
		return list;
	}







	public void setList(List<NoticeOrderTempFileDetailVO> list) {
		this.list = list;
	}







	@Override
	public String toString() {
		return JsonUtil.toString(this);
	}

	
	

	
	
	
	
	
	
	
}
