package com.nh.escm.scm.delivery.brokerageWholesaler.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

public class NoticeOrderTempFileVO implements Serializable{
	private static final long serialVersionUID = 20150814L;
	
	//Master
	
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
	private String M_CSER_CTR_TPC;//19S 수요자 계약유형
	private String SPY_TPC;//20T 공급유형
	private String SLGT_ETR_DSC;//21U 매취수탁 구분
	private String NA_WRS_LCLC;//22V 대분류
	private String NA_WRS_MCLC;//23W 중분류
	private String ACCP_C;//24X 인수도코드
	private String M_DVY_PLA_QT;//25Y 배송예정수량 (합계)
	private String M_DVY_AM;//26Z 배송금액 (합계)
	private String M_DVY_VAT;//27AA 배송부가세 (합계)
	private String VCBT_AM;//28AB 배송공병금액 (합계)
	private String VCBX_AM;//29AC 배송공상자금액 (합계)
	private String M_DVY_SSDY;//30AD 배송장려금 (합계)
	private String M_DVY_TROT_FEE;//31AE 배송환급수수료 (합계)
	private String M_DVY_PHD_FEE;//32AF 배송물류수수료 (합계)
	private String M_DVY_FAR_ASTCS;//33AG 배송운임보조비 (합계)
	private String WD_PLTT_QT;//34AH 목재파렛트수량 (합계)
	private String PSC_PLTT_QT;//35AI 플라스틱파렛트 수량(합계)
	private String PRGR_C;//36AJ 가격군
	private String BUY_UPR_DSC;//37AK 구매단가구분
	private String BYNG_UPR_GR_C;//38AL 매입단가군
	private String M_RMK_CNTN;//39AM 비고내용
	//Detail
	private String ITEM_SEQ;//40AN 배송예정서 일련번호
	private String NA_WRS_C;//41AO 상품코드
	private String NA_SOGMN_C;//42AP 출하자코드
	private String PDAA_NA_TRPL_C;//43AQ 산지사업장코드
	private String PDAA_NA_TEAM_C;//44AR 산지사업장팀코드
	private String RCPMNM;//45AS 수령인명
	private String RCPMN_TELNO;//46AT 수령인전화번호
	private String ODR_DT;//47AU 발주일자
	private String ODR_SLPNO;//48AV 발주전표번호
	private String ODR_DSQNO;//49AW 발주상세일련번호
	private String TXT_DSC;//50AX 과세구분
	private String DVY_WRS_UPR;//51AY 배송상품단가
	private String DVY_PLA_QT;//52AZ 배송수량
	private String DVY_AM;//53BA 배송금액
	private String DVY_VAT;//54BB 배송부가세
	private String DVY_VCBT_AM;//55BC 배송공병금액
	private String DVY_SSDY;//56BD 배송장려금
	private String DVY_TROT_FEE;//57BE 배송환급수수료
	private String DVY_PHD_FEE;//58BF 배송물류수수료
	private String DVY_FAR_ASTCS;//59BG 배송운임보조비
	private String RMK_CNTN;//60BH 비고내용(상세)
	private String SL_UPR_TPC;//61BI 매출단가유형
	private String CSER_CTR_TPC;//62BJ 수요자계약유형
	private String BUY_BZ_METC;//63BK 구매사업방식코드
	private String GROUP_IDX;//그룹번호
	

	public String getGROUP_IDX() {
		return GROUP_IDX;
	}



	public void setGROUP_IDX(String gROUP_IDX) {
		GROUP_IDX = gROUP_IDX;
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



	public String getM_CSER_CTR_TPC() {
		return M_CSER_CTR_TPC;
	}



	public void setM_CSER_CTR_TPC(String m_CSER_CTR_TPC) {
		M_CSER_CTR_TPC = m_CSER_CTR_TPC;
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



	public String getM_DVY_PLA_QT() {
		return M_DVY_PLA_QT;
	}



	public void setM_DVY_PLA_QT(String m_DVY_PLA_QT) {
		M_DVY_PLA_QT = m_DVY_PLA_QT;
	}



	public String getM_DVY_AM() {
		return M_DVY_AM;
	}



	public void setM_DVY_AM(String m_DVY_AM) {
		M_DVY_AM = m_DVY_AM;
	}



	public String getM_DVY_VAT() {
		return M_DVY_VAT;
	}



	public void setM_DVY_VAT(String m_DVY_VAT) {
		M_DVY_VAT = m_DVY_VAT;
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



	public String getM_DVY_SSDY() {
		return M_DVY_SSDY;
	}



	public void setM_DVY_SSDY(String m_DVY_SSDY) {
		M_DVY_SSDY = m_DVY_SSDY;
	}



	public String getM_DVY_TROT_FEE() {
		return M_DVY_TROT_FEE;
	}



	public void setM_DVY_TROT_FEE(String m_DVY_TROT_FEE) {
		M_DVY_TROT_FEE = m_DVY_TROT_FEE;
	}



	public String getM_DVY_PHD_FEE() {
		return M_DVY_PHD_FEE;
	}



	public void setM_DVY_PHD_FEE(String m_DVY_PHD_FEE) {
		M_DVY_PHD_FEE = m_DVY_PHD_FEE;
	}



	public String getM_DVY_FAR_ASTCS() {
		return M_DVY_FAR_ASTCS;
	}



	public void setM_DVY_FAR_ASTCS(String m_DVY_FAR_ASTCS) {
		M_DVY_FAR_ASTCS = m_DVY_FAR_ASTCS;
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



	public String getM_RMK_CNTN() {
		return M_RMK_CNTN;
	}



	public void setM_RMK_CNTN(String m_RMK_CNTN) {
		M_RMK_CNTN = m_RMK_CNTN;
	}



	public String getITEM_SEQ() {
		return ITEM_SEQ;
	}



	public void setITEM_SEQ(String iTEM_SEQ) {
		ITEM_SEQ = iTEM_SEQ;
	}



	public String getNA_WRS_C() {
		return NA_WRS_C;
	}



	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}



	public String getNA_SOGMN_C() {
		return NA_SOGMN_C;
	}



	public void setNA_SOGMN_C(String nA_SOGMN_C) {
		NA_SOGMN_C = nA_SOGMN_C;
	}



	public String getPDAA_NA_TRPL_C() {
		return PDAA_NA_TRPL_C;
	}



	public void setPDAA_NA_TRPL_C(String pDAA_NA_TRPL_C) {
		PDAA_NA_TRPL_C = pDAA_NA_TRPL_C;
	}



	public String getPDAA_NA_TEAM_C() {
		return PDAA_NA_TEAM_C;
	}



	public void setPDAA_NA_TEAM_C(String pDAA_NA_TEAM_C) {
		PDAA_NA_TEAM_C = pDAA_NA_TEAM_C;
	}



	public String getRCPMNM() {
		return RCPMNM;
	}



	public void setRCPMNM(String rCPMNM) {
		RCPMNM = rCPMNM;
	}



	public String getRCPMN_TELNO() {
		return RCPMN_TELNO;
	}



	public void setRCPMN_TELNO(String rCPMN_TELNO) {
		RCPMN_TELNO = rCPMN_TELNO;
	}



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



	public String getODR_DSQNO() {
		return ODR_DSQNO;
	}



	public void setODR_DSQNO(String oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}



	public String getTXT_DSC() {
		return TXT_DSC;
	}



	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}



	public String getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}



	public void setDVY_WRS_UPR(String dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
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



	public String getDVY_VCBT_AM() {
		return DVY_VCBT_AM;
	}



	public void setDVY_VCBT_AM(String dVY_VCBT_AM) {
		DVY_VCBT_AM = dVY_VCBT_AM;
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



	public String getRMK_CNTN() {
		return RMK_CNTN;
	}



	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}



	public String getSL_UPR_TPC() {
		return SL_UPR_TPC;
	}



	public void setSL_UPR_TPC(String sL_UPR_TPC) {
		SL_UPR_TPC = sL_UPR_TPC;
	}



	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}



	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}



	public String getBUY_BZ_METC() {
		return BUY_BZ_METC;
	}



	public void setBUY_BZ_METC(String bUY_BZ_METC) {
		BUY_BZ_METC = bUY_BZ_METC;
	}



	@Override
	public String toString() {
		return JsonUtil.toString(this);
	}

}
