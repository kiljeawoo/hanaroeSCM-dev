package com.nh.escm.pds.pay.vo;

import java.io.Serializable;

/**
 * 실적_세무자료_매입 프린트VO
 * @author HyeRim.Oh
 *
 */
public class TaxByngPrintVO implements Serializable{
	
	private static final long serialVersionUID = 20150617L;
	
	private String TXBZ_TOT_RG_SQNO;  //세무집계등록일련번호
	private String JOIN_GLN;  //사업자/거래처GLN	
	private String BIZ_NUMBER_B;  //사업장실명번호
	private String CLNTNM_B;  //사업장명
	private String REPMNM_B;  //사업장대표자명
	private String ADDRESS_B;  //사업장주소
	private String BZTPNM_B;  //사업장업태명
	private String BZCCNM_B;  //사업장업종명
	private String BIZ_NUMBER_C;  //거래처실명번호
	private String CLNTNM_C;  //거래처명
	private String REPMNM_C;  //거래처대표자명
	private String ADDRESS_C;  //거래처주소
	private String BZTPNM_C;  //거래처업태명
	private String BZCCNM_C;  //거래처업종명
	private String TR_DT;  //거래일자
	private String SLP_DT;  //전표일자
	private String LATCNM;  //품목명
	private long SPY_AM;  //순공급금액
	private long VAT;  //순부가세
	private long SUM_VALUE;  //합계
	private String CLNTNM_BZ;  //사업장GLN명
	private String NA_BZPLC;  //경제통합사업장코드
	private String CLNTNM_CZ;  //거래처GLN명
	private String NA_TRPL_C;  //거래처코드
	private String NA_TR_DSC;  //경제통합거래구분코드
	private String NA_SLPNO;  //경제통합전표번호
	private String RG_SQNO;  //등록일련번호
	private String PBC_RMK_CNTN;  //비고내용
	private String JOIN_GLN_NM;  //사업자/거래처GLN
	
	public String getTXBZ_TOT_RG_SQNO() {
		return TXBZ_TOT_RG_SQNO;
	}
	public void setTXBZ_TOT_RG_SQNO(String tXBZ_TOT_RG_SQNO) {
		TXBZ_TOT_RG_SQNO = tXBZ_TOT_RG_SQNO;
	}
	public String getJOIN_GLN() {
		return JOIN_GLN;
	}
	public void setJOIN_GLN(String jOIN_GLN) {
		JOIN_GLN = jOIN_GLN;
	}
	public String getBIZ_NUMBER_B() {
		return BIZ_NUMBER_B;
	}
	public void setBIZ_NUMBER_B(String bIZ_NUMBER_B) {
		BIZ_NUMBER_B = bIZ_NUMBER_B;
	}
	public String getCLNTNM_B() {
		return CLNTNM_B;
	}
	public void setCLNTNM_B(String cLNTNM_B) {
		CLNTNM_B = cLNTNM_B;
	}
	public String getREPMNM_B() {
		return REPMNM_B;
	}
	public void setREPMNM_B(String rEPMNM_B) {
		REPMNM_B = rEPMNM_B;
	}
	public String getADDRESS_B() {
		return ADDRESS_B;
	}
	public void setADDRESS_B(String aDDRESS_B) {
		ADDRESS_B = aDDRESS_B;
	}
	public String getBZTPNM_B() {
		return BZTPNM_B;
	}
	public void setBZTPNM_B(String bZTPNM_B) {
		BZTPNM_B = bZTPNM_B;
	}
	public String getBZCCNM_B() {
		return BZCCNM_B;
	}
	public void setBZCCNM_B(String bZCCNM_B) {
		BZCCNM_B = bZCCNM_B;
	}
	public String getBIZ_NUMBER_C() {
		return BIZ_NUMBER_C;
	}
	public void setBIZ_NUMBER_C(String bIZ_NUMBER_C) {
		BIZ_NUMBER_C = bIZ_NUMBER_C;
	}
	public String getCLNTNM_C() {
		return CLNTNM_C;
	}
	public void setCLNTNM_C(String cLNTNM_C) {
		CLNTNM_C = cLNTNM_C;
	}
	public String getREPMNM_C() {
		return REPMNM_C;
	}
	public void setREPMNM_C(String rEPMNM_C) {
		REPMNM_C = rEPMNM_C;
	}
	public String getADDRESS_C() {
		return ADDRESS_C;
	}
	public void setADDRESS_C(String aDDRESS_C) {
		ADDRESS_C = aDDRESS_C;
	}
	public String getBZTPNM_C() {
		return BZTPNM_C;
	}
	public void setBZTPNM_C(String bZTPNM_C) {
		BZTPNM_C = bZTPNM_C;
	}
	public String getBZCCNM_C() {
		return BZCCNM_C;
	}
	public void setBZCCNM_C(String bZCCNM_C) {
		BZCCNM_C = bZCCNM_C;
	}
	public String getTR_DT() {
		return TR_DT;
	}
	public void setTR_DT(String tR_DT) {
		TR_DT = tR_DT;
	}
	public String getSLP_DT() {
		return SLP_DT;
	}
	public void setSLP_DT(String sLP_DT) {
		SLP_DT = sLP_DT;
	}
	public String getLATCNM() {
		return LATCNM;
	}
	public void setLATCNM(String lATCNM) {
		LATCNM = lATCNM;
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
	public long getSUM_VALUE() {
		return SUM_VALUE;
	}
	public void setSUM_VALUE(long sUM_VALUE) {
		SUM_VALUE = sUM_VALUE;
	}
	public String getCLNTNM_BZ() {
		return CLNTNM_BZ;
	}
	public void setCLNTNM_BZ(String cLNTNM_BZ) {
		CLNTNM_BZ = cLNTNM_BZ;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getCLNTNM_CZ() {
		return CLNTNM_CZ;
	}
	public void setCLNTNM_CZ(String cLNTNM_CZ) {
		CLNTNM_CZ = cLNTNM_CZ;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
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
	public String getRG_SQNO() {
		return RG_SQNO;
	}
	public void setRG_SQNO(String rG_SQNO) {
		RG_SQNO = rG_SQNO;
	}
	public String getPBC_RMK_CNTN() {
		return PBC_RMK_CNTN;
	}
	public void setPBC_RMK_CNTN(String pBC_RMK_CNTN) {
		PBC_RMK_CNTN = pBC_RMK_CNTN;
	}
	public String getJOIN_GLN_NM() {
		return JOIN_GLN_NM;
	}
	public void setJOIN_GLN_NM(String jOIN_GLN_NM) {
		JOIN_GLN_NM = jOIN_GLN_NM;
	}	

}
