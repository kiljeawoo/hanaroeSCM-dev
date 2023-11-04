package com.nh.escm.pds.pay.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 사후장려금 실적조회R1 detail VO
 * @author HyeRim.Oh
 *
 */
public class PaymentAffSsdyDetailVO implements Serializable{
	
	private static final long serialVersionUID = 20150625L;
	
	private String PHD_NA_BZPLC;  //물류경제통합 사업장코드
	private String PHD_SLP_DT;  //물류전표일자
	private String NA_TR_DSC;  //경제통합 거래구분코드
	private String NA_SLPNO;  //경제통합 전표번호
	private String NA_BLB_DFC_DSC;  //경제통합 흑자적자구분코드
	private long SLP_SQNO;  //전표 일련번호
	private String TR_DT;  //거래일자
	private String NA_TEAM_C;  //경제통합 팀코드
	private String NA_WRS_C;  //경제통합 상품코드
	private String WRS_SBJC;  //상품과목코드
	private String NA_LLED_C;  //경제통합 대원장코드
	private String NA_MLED_C;  //경제통합 중원장코드
	private String SLPL_NA_TRPL_C;  //매출처 경제통합거래처코드
	private String SLPL_NA_TEAM_C;  //매출처 경제통합팀코드
	private String BUYPL_NA_TRPL_C;  //매입처 경제통합거래처코드
	private String BUYPL_NA_TEAM_C;  //매입처 경제통합팀코드
	private String NA_ADJPL_C;  //경제통합 정산처코드
	private String ADJPL_NA_TEAM_C;  //정산처 경제통합팀코드
	private String NAAC_DSC;  //중앙회조합 구분코드
	private String PY_PLA_DT;  //지급예정일자
	private String NA_WRS_LCLC;  //경제통합 상품대분류코드
	private String NA_WRS_MCLC;  //경제통합 상품중분류코드
	private String NA_WRS_SCLC;  //경제통합 상품소분류코드
	private String NA_WRS_DTCF_C;  //경제통합 상품세분류코드
	private String NA_CRC_CAN_DSC;  //경제통합 정정취소구분코드
	private String OSLIP_DT;  //원전표일자
	private String OGN_NA_SLPNO;  //원경제통합 전표번호
	private double SPY_QT;  //공급수량
	private double SPY_AM;  //공급금액
	private double VAT;  //부가세
	private double AFF_SSDY;  //사후장려금
	private double PHD_AFF_FEERT;  //물류 사후수수료율
	private String RMK_CNTN;  //비고내용
	private double PHD_SEL_AM;  //물류판매금액
	private String TMS_YN;  //전송여부
	private Date LSCHG_DTM;  //최종변경일시
	private String LS_CMENO;  //최종변경자 개인번호
	private double CNR_DS_AM;  //검수구분금액
	private String NA_DVY_PLASH_SLPNO;  //배송예정서번호
	
	private String PHD_NA_BZPLC_NM;
	private String NA_TR_DSC_NM;
	private String NA_WRS_C_NM;
	private String SLPL_NA_TRPL_C_NM;
	private String BUYPL_NA_TRPL_C_NM;
	private String NA_ADJPL_C_NM;		
	private String BUYPL_NA_TEAM_C_NM;
		
	public String getPHD_NA_BZPLC_NM() {
		return PHD_NA_BZPLC_NM;
	}
	public void setPHD_NA_BZPLC_NM(String pHD_NA_BZPLC_NM) {
		PHD_NA_BZPLC_NM = pHD_NA_BZPLC_NM;
	}
	public String getNA_TR_DSC_NM() {
		return NA_TR_DSC_NM;
	}
	public void setNA_TR_DSC_NM(String nA_TR_DSC_NM) {
		NA_TR_DSC_NM = nA_TR_DSC_NM;
	}
	public String getNA_WRS_C_NM() {
		return NA_WRS_C_NM;
	}
	public void setNA_WRS_C_NM(String nA_WRS_C_NM) {
		NA_WRS_C_NM = nA_WRS_C_NM;
	}
	public String getSLPL_NA_TRPL_C_NM() {
		return SLPL_NA_TRPL_C_NM;
	}
	public void setSLPL_NA_TRPL_C_NM(String sLPL_NA_TRPL_C_NM) {
		SLPL_NA_TRPL_C_NM = sLPL_NA_TRPL_C_NM;
	}
	public String getBUYPL_NA_TRPL_C_NM() {
		return BUYPL_NA_TRPL_C_NM;
	}
	public void setBUYPL_NA_TRPL_C_NM(String bUYPL_NA_TRPL_C_NM) {
		BUYPL_NA_TRPL_C_NM = bUYPL_NA_TRPL_C_NM;
	}
	public String getNA_ADJPL_C_NM() {
		return NA_ADJPL_C_NM;
	}
	public void setNA_ADJPL_C_NM(String nA_ADJPL_C_NM) {
		NA_ADJPL_C_NM = nA_ADJPL_C_NM;
	}
	public String getBUYPL_NA_TEAM_C_NM() {
		return BUYPL_NA_TEAM_C_NM;
	}
	public void setBUYPL_NA_TEAM_C_NM(String bUYPL_NA_TEAM_C_NM) {
		BUYPL_NA_TEAM_C_NM = bUYPL_NA_TEAM_C_NM;
	}
	public String getPHD_NA_BZPLC() {
		return PHD_NA_BZPLC;
	}
	public void setPHD_NA_BZPLC(String pHD_NA_BZPLC) {
		PHD_NA_BZPLC = pHD_NA_BZPLC;
	}
	public String getPHD_SLP_DT() {
		return PHD_SLP_DT;
	}
	public void setPHD_SLP_DT(String pHD_SLP_DT) {
		PHD_SLP_DT = pHD_SLP_DT;
	}
	public String getNA_TR_DSC() {
		return NA_TR_DSC;
	}
	public void setNA_TR_DSC(String nA_TR_DSC) {
		NA_TR_DSC = nA_TR_DSC;
	}
	public String getNA_SLPNO() {
		return NA_SLPNO;
	}
	public void setNA_SLPNO(String nA_SLPNO) {
		NA_SLPNO = nA_SLPNO;
	}
	public String getNA_BLB_DFC_DSC() {
		return NA_BLB_DFC_DSC;
	}
	public void setNA_BLB_DFC_DSC(String nA_BLB_DFC_DSC) {
		NA_BLB_DFC_DSC = nA_BLB_DFC_DSC;
	}
	public long getSLP_SQNO() {
		return SLP_SQNO;
	}
	public void setSLP_SQNO(long sLP_SQNO) {
		SLP_SQNO = sLP_SQNO;
	}
	public String getTR_DT() {
		return TR_DT;
	}
	public void setTR_DT(String tR_DT) {
		TR_DT = tR_DT;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getWRS_SBJC() {
		return WRS_SBJC;
	}
	public void setWRS_SBJC(String wRS_SBJC) {
		WRS_SBJC = wRS_SBJC;
	}
	public String getNA_LLED_C() {
		return NA_LLED_C;
	}
	public void setNA_LLED_C(String nA_LLED_C) {
		NA_LLED_C = nA_LLED_C;
	}
	public String getNA_MLED_C() {
		return NA_MLED_C;
	}
	public void setNA_MLED_C(String nA_MLED_C) {
		NA_MLED_C = nA_MLED_C;
	}
	public String getSLPL_NA_TRPL_C() {
		return SLPL_NA_TRPL_C;
	}
	public void setSLPL_NA_TRPL_C(String sLPL_NA_TRPL_C) {
		SLPL_NA_TRPL_C = sLPL_NA_TRPL_C;
	}
	public String getSLPL_NA_TEAM_C() {
		return SLPL_NA_TEAM_C;
	}
	public void setSLPL_NA_TEAM_C(String sLPL_NA_TEAM_C) {
		SLPL_NA_TEAM_C = sLPL_NA_TEAM_C;
	}
	public String getBUYPL_NA_TRPL_C() {
		return BUYPL_NA_TRPL_C;
	}
	public void setBUYPL_NA_TRPL_C(String bUYPL_NA_TRPL_C) {
		BUYPL_NA_TRPL_C = bUYPL_NA_TRPL_C;
	}
	public String getBUYPL_NA_TEAM_C() {
		return BUYPL_NA_TEAM_C;
	}
	public void setBUYPL_NA_TEAM_C(String bUYPL_NA_TEAM_C) {
		BUYPL_NA_TEAM_C = bUYPL_NA_TEAM_C;
	}
	public String getNA_ADJPL_C() {
		return NA_ADJPL_C;
	}
	public void setNA_ADJPL_C(String nA_ADJPL_C) {
		NA_ADJPL_C = nA_ADJPL_C;
	}
	public String getADJPL_NA_TEAM_C() {
		return ADJPL_NA_TEAM_C;
	}
	public void setADJPL_NA_TEAM_C(String aDJPL_NA_TEAM_C) {
		ADJPL_NA_TEAM_C = aDJPL_NA_TEAM_C;
	}
	public String getNAAC_DSC() {
		return NAAC_DSC;
	}
	public void setNAAC_DSC(String nAAC_DSC) {
		NAAC_DSC = nAAC_DSC;
	}
	public String getPY_PLA_DT() {
		return PY_PLA_DT;
	}
	public void setPY_PLA_DT(String pY_PLA_DT) {
		PY_PLA_DT = pY_PLA_DT;
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
	public String getNA_WRS_SCLC() {
		return NA_WRS_SCLC;
	}
	public void setNA_WRS_SCLC(String nA_WRS_SCLC) {
		NA_WRS_SCLC = nA_WRS_SCLC;
	}
	public String getNA_WRS_DTCF_C() {
		return NA_WRS_DTCF_C;
	}
	public void setNA_WRS_DTCF_C(String nA_WRS_DTCF_C) {
		NA_WRS_DTCF_C = nA_WRS_DTCF_C;
	}
	public String getNA_CRC_CAN_DSC() {
		return NA_CRC_CAN_DSC;
	}
	public void setNA_CRC_CAN_DSC(String nA_CRC_CAN_DSC) {
		NA_CRC_CAN_DSC = nA_CRC_CAN_DSC;
	}
	public String getOSLIP_DT() {
		return OSLIP_DT;
	}
	public void setOSLIP_DT(String oSLIP_DT) {
		OSLIP_DT = oSLIP_DT;
	}
	public String getOGN_NA_SLPNO() {
		return OGN_NA_SLPNO;
	}
	public void setOGN_NA_SLPNO(String oGN_NA_SLPNO) {
		OGN_NA_SLPNO = oGN_NA_SLPNO;
	}
	public double getSPY_QT() {
		return SPY_QT;
	}
	public void setSPY_QT(double sPY_QT) {
		SPY_QT = sPY_QT;
	}
	public double getSPY_AM() {
		return SPY_AM;
	}
	public void setSPY_AM(double sPY_AM) {
		SPY_AM = sPY_AM;
	}
	public double getVAT() {
		return VAT;
	}
	public void setVAT(double vAT) {
		VAT = vAT;
	}
	public double getAFF_SSDY() {
		return AFF_SSDY;
	}
	public void setAFF_SSDY(double aFF_SSDY) {
		AFF_SSDY = aFF_SSDY;
	}
	public double getPHD_AFF_FEERT() {
		return PHD_AFF_FEERT;
	}
	public void setPHD_AFF_FEERT(double pHD_AFF_FEERT) {
		PHD_AFF_FEERT = pHD_AFF_FEERT;
	}
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}
	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}
	public double getPHD_SEL_AM() {
		return PHD_SEL_AM;
	}
	public void setPHD_SEL_AM(double pHD_SEL_AM) {
		PHD_SEL_AM = pHD_SEL_AM;
	}
	public String getTMS_YN() {
		return TMS_YN;
	}
	public void setTMS_YN(String tMS_YN) {
		TMS_YN = tMS_YN;
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
	public double getCNR_DS_AM() {
		return CNR_DS_AM;
	}
	public void setCNR_DS_AM(double cNR_DS_AM) {
		CNR_DS_AM = cNR_DS_AM;
	}
	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}
	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}
	
	@Override
	public String toString() {
		return "PaymentAffSsdyDetailVO [PHD_NA_BZPLC=" + PHD_NA_BZPLC
				+ ", PHD_SLP_DT=" + PHD_SLP_DT + ", NA_TR_DSC=" + NA_TR_DSC
				+ ", NA_SLPNO=" + NA_SLPNO + ", NA_BLB_DFC_DSC="
				+ NA_BLB_DFC_DSC + ", SLP_SQNO=" + SLP_SQNO + ", TR_DT="
				+ TR_DT + ", NA_TEAM_C=" + NA_TEAM_C + ", NA_WRS_C=" + NA_WRS_C
				+ ", WRS_SBJC=" + WRS_SBJC + ", NA_LLED_C=" + NA_LLED_C
				+ ", NA_MLED_C=" + NA_MLED_C + ", SLPL_NA_TRPL_C="
				+ SLPL_NA_TRPL_C + ", SLPL_NA_TEAM_C=" + SLPL_NA_TEAM_C
				+ ", BUYPL_NA_TRPL_C=" + BUYPL_NA_TRPL_C + ", BUYPL_NA_TEAM_C="
				+ BUYPL_NA_TEAM_C + ", NA_ADJPL_C=" + NA_ADJPL_C
				+ ", ADJPL_NA_TEAM_C=" + ADJPL_NA_TEAM_C + ", NAAC_DSC="
				+ NAAC_DSC + ", PY_PLA_DT=" + PY_PLA_DT + ", NA_WRS_LCLC="
				+ NA_WRS_LCLC + ", NA_WRS_MCLC=" + NA_WRS_MCLC
				+ ", NA_WRS_SCLC=" + NA_WRS_SCLC + ", NA_WRS_DTCF_C="
				+ NA_WRS_DTCF_C + ", NA_CRC_CAN_DSC=" + NA_CRC_CAN_DSC
				+ ", OSLIP_DT=" + OSLIP_DT + ", OGN_NA_SLPNO=" + OGN_NA_SLPNO
				+ ", SPY_QT=" + SPY_QT + ", SPY_AM=" + SPY_AM + ", VAT=" + VAT
				+ ", AFF_SSDY=" + AFF_SSDY + ", PHD_AFF_FEERT=" + PHD_AFF_FEERT
				+ ", RMK_CNTN=" + RMK_CNTN + ", PHD_SEL_AM=" + PHD_SEL_AM
				+ ", TMS_YN=" + TMS_YN + ", LSCHG_DTM=" + LSCHG_DTM
				+ ", LS_CMENO=" + LS_CMENO + ", CNR_DS_AM=" + CNR_DS_AM
				+ ", NA_DVY_PLASH_SLPNO=" + NA_DVY_PLASH_SLPNO + "]";
	}

}
