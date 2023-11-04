package com.nh.escm.pds.pay.vo;

import java.io.Serializable;

/**
 * 실적_세무자료_매입 VO
 * @author HyeRim.Oh
 *
 */
public class TaxByngVO implements Serializable{
	
	private static final long serialVersionUID = 20150617L;
	
	/* PK */
	private String NA_BZPLC;  //경제통합사업장코드
	private String BYNG_YM;  //매입년월
	private String TXBZ_DFN_DT;  //세무확정일자
	private String TXBZ_TOT_RG_SQNO;  //세무집계등록일련번호
	
	private String CLNTNM;  //거래처명
	private String BZPL_BZNO;  //사업장 사업자등록번호
	private String NA_TEAM_C;  //사업장 팀명
	private String NA_TRPL_C;  //경제통합 거래처코드
	private String CUSNM;  //고객명
	private String TRPL_RLNO;  //거래처 실명번호
	private String TRPL_NA_TEAM_C;  //거래처 팀명
	private String TR_DT;  //거래일자
	private String NA_SOAC_DSC;  //경제통합 계산서구분코드
	private long SPY_AM;  //순공급금액
	private long VAT;  //순부가세
	private long PUC;  //매수
	private String NA_TOT_DSC;  //집계구분
	private String NA_TOT_DTI_DSC;  //집계상세구분
	private String TXBZ_TP_DSC;  //세무유형구분
	private String LATCNM;  //품목명
	private long BLB_SPY_AM;  //흑자 공급금액
	private long BLB_VAT;  //흑자 부가세
	private long CRC_BLB_SPY_AM;  //정정흑자 공급금액
	private long CRC_BLB_VAT;  //정정흑자 부가세
	private long DFC_SPY_AM;  //적자 공급금액
	private long DFC_VAT;  //적자 부가세
	private long CRC_DFC_SPY_AM;  //정정적자 공급금액
	private long CRC_DFC_VAT;  //정정적자 부가세
	private String BZ_METH_DSC;  //사업방식
	private String ROTS_CTR_DSC;  //계통계약구분
	private String NA_LLED_C;  //대분류
	private String NA_MLED_C;  //중분류
	private String PBC_RMK_CNTN;  //발행비 비고내용
	private String RMK_CNTN;  //비고내용
	private String DSPC_INCD_YN;  //상세내역 포함여부
	
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getBYNG_YM() {
		return BYNG_YM;
	}
	public void setBYNG_YM(String bYNG_YM) {
		BYNG_YM = bYNG_YM;
	}
	public String getTXBZ_DFN_DT() {
		return TXBZ_DFN_DT;
	}
	public void setTXBZ_DFN_DT(String tXBZ_DFN_DT) {
		TXBZ_DFN_DT = tXBZ_DFN_DT;
	}
	public String getTXBZ_TOT_RG_SQNO() {
		return TXBZ_TOT_RG_SQNO;
	}
	public void setTXBZ_TOT_RG_SQNO(String tXBZ_TOT_RG_SQNO) {
		TXBZ_TOT_RG_SQNO = tXBZ_TOT_RG_SQNO;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getBZPL_BZNO() {
		return BZPL_BZNO;
	}
	public void setBZPL_BZNO(String bZPL_BZNO) {
		BZPL_BZNO = bZPL_BZNO;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getCUSNM() {
		return CUSNM;
	}
	public void setCUSNM(String cUSNM) {
		CUSNM = cUSNM;
	}
	public String getTRPL_RLNO() {
		return TRPL_RLNO;
	}
	public void setTRPL_RLNO(String tRPL_RLNO) {
		TRPL_RLNO = tRPL_RLNO;
	}
	public String getTRPL_NA_TEAM_C() {
		return TRPL_NA_TEAM_C;
	}
	public void setTRPL_NA_TEAM_C(String tRPL_NA_TEAM_C) {
		TRPL_NA_TEAM_C = tRPL_NA_TEAM_C;
	}
	public String getTR_DT() {
		return TR_DT;
	}
	public void setTR_DT(String tR_DT) {
		TR_DT = tR_DT;
	}
	public String getNA_SOAC_DSC() {
		return NA_SOAC_DSC;
	}
	public void setNA_SOAC_DSC(String nA_SOAC_DSC) {
		NA_SOAC_DSC = nA_SOAC_DSC;
	}
	public long getSPY_AM() {
		return SPY_AM;
	}
	public void setSPY_AM(long sPY_AM) {
		SPY_AM = sPY_AM;
	}
	public long getVAT() {
		return VAT;
	}
	public void setVAT(long vAT) {
		VAT = vAT;
	}
	public long getPUC() {
		return PUC;
	}
	public void setPUC(long pUC) {
		PUC = pUC;
	}
	public String getNA_TOT_DSC() {
		return NA_TOT_DSC;
	}
	public void setNA_TOT_DSC(String nA_TOT_DSC) {
		NA_TOT_DSC = nA_TOT_DSC;
	}
	public String getNA_TOT_DTI_DSC() {
		return NA_TOT_DTI_DSC;
	}
	public void setNA_TOT_DTI_DSC(String nA_TOT_DTI_DSC) {
		NA_TOT_DTI_DSC = nA_TOT_DTI_DSC;
	}
	public String getTXBZ_TP_DSC() {
		return TXBZ_TP_DSC;
	}
	public void setTXBZ_TP_DSC(String tXBZ_TP_DSC) {
		TXBZ_TP_DSC = tXBZ_TP_DSC;
	}
	public String getLATCNM() {
		return LATCNM;
	}
	public void setLATCNM(String lATCNM) {
		LATCNM = lATCNM;
	}
	public long getBLB_SPY_AM() {
		return BLB_SPY_AM;
	}
	public void setBLB_SPY_AM(long bLB_SPY_AM) {
		BLB_SPY_AM = bLB_SPY_AM;
	}
	public long getBLB_VAT() {
		return BLB_VAT;
	}
	public void setBLB_VAT(long bLB_VAT) {
		BLB_VAT = bLB_VAT;
	}
	public long getCRC_BLB_SPY_AM() {
		return CRC_BLB_SPY_AM;
	}
	public void setCRC_BLB_SPY_AM(long cRC_BLB_SPY_AM) {
		CRC_BLB_SPY_AM = cRC_BLB_SPY_AM;
	}
	public long getCRC_BLB_VAT() {
		return CRC_BLB_VAT;
	}
	public void setCRC_BLB_VAT(long cRC_BLB_VAT) {
		CRC_BLB_VAT = cRC_BLB_VAT;
	}
	public long getDFC_SPY_AM() {
		return DFC_SPY_AM;
	}
	public void setDFC_SPY_AM(long dFC_SPY_AM) {
		DFC_SPY_AM = dFC_SPY_AM;
	}
	public long getDFC_VAT() {
		return DFC_VAT;
	}
	public void setDFC_VAT(long dFC_VAT) {
		DFC_VAT = dFC_VAT;
	}
	public long getCRC_DFC_SPY_AM() {
		return CRC_DFC_SPY_AM;
	}
	public void setCRC_DFC_SPY_AM(long cRC_DFC_SPY_AM) {
		CRC_DFC_SPY_AM = cRC_DFC_SPY_AM;
	}
	public long getCRC_DFC_VAT() {
		return CRC_DFC_VAT;
	}
	public void setCRC_DFC_VAT(long cRC_DFC_VAT) {
		CRC_DFC_VAT = cRC_DFC_VAT;
	}
	public String getBZ_METH_DSC() {
		return BZ_METH_DSC;
	}
	public void setBZ_METH_DSC(String bZ_METH_DSC) {
		BZ_METH_DSC = bZ_METH_DSC;
	}
	public String getROTS_CTR_DSC() {
		return ROTS_CTR_DSC;
	}
	public void setROTS_CTR_DSC(String rOTS_CTR_DSC) {
		ROTS_CTR_DSC = rOTS_CTR_DSC;
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
	public String getPBC_RMK_CNTN() {
		return PBC_RMK_CNTN;
	}
	public void setPBC_RMK_CNTN(String pBC_RMK_CNTN) {
		PBC_RMK_CNTN = pBC_RMK_CNTN;
	}
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}
	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}
	public String getDSPC_INCD_YN() {
		return DSPC_INCD_YN;
	}
	public void setDSPC_INCD_YN(String dSPC_INCD_YN) {
		DSPC_INCD_YN = dSPC_INCD_YN;
	}

}
