package com.nh.escm.scm.retann.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 반품입고 의뢰 조회 첫번째 그리드 VO
 * @author HyeRim.Oh
 *
 */
public class RetannRqtMasterSumVO implements Serializable {
	
	private static final long serialVersionUID = 20150713L;
	
	private String NA_RGD_STS_DSC;  //경제통합반품상태구분코드
	private String NA_TEAM_C;  //경제통합팀코드
	private String RGD_RG_DT;  //반품등록일자

	private String RVOPL_NA_TRPL_C;  //반품처
	private String RVOPL_CLNTNM;  //반품처명
	private String NA_TRPL_C;  //반품의뢰처
	private String CLNTNM;  //반품의뢰처명
	private String TEL;  //전화번호
	
	private Date RTNCNF_DTM; //반품확인일시	
	private String RGD_PLA_NO;  //반품번호	
	private String OGN_SLPNO;  //매입전표일자
	private String OSLIP_DT;  //매입전표번호	
	private int ITEM_CNT;  //품목수
	private double RGD_QT;  //반품수량
	private long RGD_AM;  //반품금액
	private double BYNG_DFN_QT;  //매입확정수량
	private long BYNG_DFN_AM;  //매입확정금액
	private long RGD_VAT;  //부가세액
	private long VCBT_AM;  //공병금액
	private long BYNG_DFN_TROT_FEE;  //환급수수료액
	private long BYNG_DFN_PHD_FEE;  //물류수수료액
	private String WDR_PLA_DT;  //회수예정일자
	private String WDRPL_NA_TRPL_C;  //회수처코드
	private String WDRPL_CLNTNM;  //회수처명
	private String WDRPL_NA_TEAM_C;  //회수처팀
	private String SPY_TPC;  //공급유형
	private String CSER_CTR_TPC;  //수요자계약유형
	private String XML_RGD_PLA_NO;  //XML반품예정번호
	private String RMK_CNTN;  //비고
	private Date LSCHG_DTM;  //최종변경일시
	private String LS_CMENO;  //최종변경자개인번호
	private Date DEL_DTM;  //삭제일시
	
	private String PRC_YN; //경통전송여부
	private String RSP_C_CNTN; //결과수신
		
	public String getPRC_YN() {
		return PRC_YN;
	}
	public void setPRC_YN(String pRC_YN) {
		PRC_YN = pRC_YN;
	}
	public String getRSP_C_CNTN() {
		return RSP_C_CNTN;
	}
	public void setRSP_C_CNTN(String rSP_C_CNTN) {
		RSP_C_CNTN = rSP_C_CNTN;
	}
	public String getNA_RGD_STS_DSC() {
		return NA_RGD_STS_DSC;
	}
	public void setNA_RGD_STS_DSC(String nA_RGD_STS_DSC) {
		NA_RGD_STS_DSC = nA_RGD_STS_DSC;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getRGD_RG_DT() {
		return RGD_RG_DT;
	}
	public void setRGD_RG_DT(String rGD_RG_DT) {
		RGD_RG_DT = rGD_RG_DT;
	}
	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}
	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}
	public String getRVOPL_CLNTNM() {
		return RVOPL_CLNTNM;
	}
	public void setRVOPL_CLNTNM(String rVOPL_CLNTNM) {
		RVOPL_CLNTNM = rVOPL_CLNTNM;
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
	public String getTEL() {
		return TEL;
	}
	public void setTEL(String tEL) {
		TEL = tEL;
	}
	public Date getRTNCNF_DTM() {
		return RTNCNF_DTM;
	}
	public void setRTNCNF_DTM(Date rTNCNF_DTM) {
		RTNCNF_DTM = rTNCNF_DTM;
	}
	public String getRGD_PLA_NO() {
		return RGD_PLA_NO;
	}
	public void setRGD_PLA_NO(String rGD_PLA_NO) {
		RGD_PLA_NO = rGD_PLA_NO;
	}
	public String getOGN_SLPNO() {
		return OGN_SLPNO;
	}
	public void setOGN_SLPNO(String oGN_SLPNO) {
		OGN_SLPNO = oGN_SLPNO;
	}
	public String getOSLIP_DT() {
		return OSLIP_DT;
	}
	public void setOSLIP_DT(String oSLIP_DT) {
		OSLIP_DT = oSLIP_DT;
	}
	public int getITEM_CNT() {
		return ITEM_CNT;
	}
	public void setITEM_CNT(int iTEM_CNT) {
		ITEM_CNT = iTEM_CNT;
	}
	public double getRGD_QT() {
		return RGD_QT;
	}
	public void setRGD_QT(double rGD_QT) {
		RGD_QT = rGD_QT;
	}
	public long getRGD_AM() {
		return RGD_AM;
	}
	public void setRGD_AM(long rGD_AM) {
		RGD_AM = rGD_AM;
	}
	public double getBYNG_DFN_QT() {
		return BYNG_DFN_QT;
	}
	public void setBYNG_DFN_QT(double bYNG_DFN_QT) {
		BYNG_DFN_QT = bYNG_DFN_QT;
	}
	public long getBYNG_DFN_AM() {
		return BYNG_DFN_AM;
	}
	public void setBYNG_DFN_AM(long bYNG_DFN_AM) {
		BYNG_DFN_AM = bYNG_DFN_AM;
	}
	public long getRGD_VAT() {
		return RGD_VAT;
	}
	public void setRGD_VAT(long rGD_VAT) {
		RGD_VAT = rGD_VAT;
	}
	public long getVCBT_AM() {
		return VCBT_AM;
	}
	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}
	public long getBYNG_DFN_TROT_FEE() {
		return BYNG_DFN_TROT_FEE;
	}
	public void setBYNG_DFN_TROT_FEE(long bYNG_DFN_TROT_FEE) {
		BYNG_DFN_TROT_FEE = bYNG_DFN_TROT_FEE;
	}
	public long getBYNG_DFN_PHD_FEE() {
		return BYNG_DFN_PHD_FEE;
	}
	public void setBYNG_DFN_PHD_FEE(long bYNG_DFN_PHD_FEE) {
		BYNG_DFN_PHD_FEE = bYNG_DFN_PHD_FEE;
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
	public String getSPY_TPC() {
		return SPY_TPC;
	}
	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}
	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}
	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}
	public String getXML_RGD_PLA_NO() {
		return XML_RGD_PLA_NO;
	}
	public void setXML_RGD_PLA_NO(String xML_RGD_PLA_NO) {
		XML_RGD_PLA_NO = xML_RGD_PLA_NO;
	}
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}
	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}
	public Date getLSCHG_DTM() {
		return LSCHG_DTM;
	}
	public void setLSCHG_DTM(Date lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}
	public String getLS_CMENO() {
		return LS_CMENO;
	}
	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}
	public Date getDEL_DTM() {
		return DEL_DTM;
	}
	public void setDEL_DTM(Date dEL_DTM) {
		DEL_DTM = dEL_DTM;
	}
}
