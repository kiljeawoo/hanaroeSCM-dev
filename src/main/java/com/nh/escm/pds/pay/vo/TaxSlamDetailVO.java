package com.nh.escm.pds.pay.vo;

import java.io.Serializable;

/**
 * 실적_세무자료_매출 Detail VO
 * @author HyeRim.Oh
 *
 */
public class TaxSlamDetailVO implements Serializable {
	
	private static final long serialVersionUID = 20150618L;
	
	/*PK*/
	private String NA_BZPLC;  //경제통합사업장코드
	private String BYNG_YM;  //매입년월
	private String TXBZ_DFN_DT;  //세무확정일자
	private String TXBZ_TOT_RG_SQNO;  //세무집계등록일련번호
		
	private String BZPL_BZNO;  //사업장 사업자등록번호
	private String CLNTNM;  //거래처명
	private String NA_TRPL_C;  //경제통합 거래처코드
	private String TRPL_RLNO;  //거래처 실명번호
	private String CUSNM ;  //고객명
	private String NA_TEAM_C;  //사업장팀명
	private String TRPL_NA_TEAM_C;  //거래처팀명
	private String TR_DT;  //거래일자
	private String NA_SOAC_DSC;  //경제통합 계산서구분명
	private String NA_TOT_DSC;  //집계구분
	private String NA_TOT_DTI_DSC;  //집계상세구분
	private String TXBZ_TP_DSC;  //세무유형구분
	private String LATCNM;  //품목명
	private long SPY_AM;  //순공급금액
	private long VAT;  //순부가세
	private String NA_SLPNO;  //경제통합 전표번호
	private String NA_TR_DSC;  //거래구분명
	private String BZ_METH_DSC;  //사업방식
	private String ROTS_CTR_DSC;  //계통계약구분
	private String NA_LLED_C;  //대분류
	private String NA_MLED_C;  //중분류
	private String TXBZ_PBC_NT;  //세무발행횟수
	private String TXBZ_PBC_DTM;  //발행일시
	private String TXBZ_PBCMN_ENO;  //발행자
	private String PBC_RMK_CNTN;  //접수비고내용
	private String RMK_CNTN;  //참조
	private String RC_YN;  //접수여부
	private String RC_TYPE;  //접수구분명
	private long BLB_SPY_AM;  //흑자 공급금액
	private long BLB_VAT;  //흑자 부가세
	private long DFC_SPY_AM;  //적자 공급금액
	private long DFC_VAT;  //적자 부가세
	private long CRC_BLB_SPY_AM;  //정정흑자 공급금액
	private long CRC_BLB_VAT;  //정정흑자 부가세
	private long CRC_DFC_SPY_AM;  //정정적자 공급금액
	private long CRC_DFC_VAT;  //정정적자 부가세
	private String TRPL_CLNTNM;  //거래처명
	private String TRPL_ADR;  //거래처 주소
	private String TRPL_BZTPNM;  //거래처 업태명
	private String TRPL_BZCCNM;  //거래처 종목명
	private String TRPL_REPMNM;  //거래처 대표자명
	private String TRPL_TEL;  //거래처 전화번호
	private String BZPL_CLNTNM;  //사업장명
	private String BZPL_ADR;  //사업장 주소
	private String BZPL_BZTPNM;  //사업장 업태명
	private String BZPL_BZCCNM;  //사업장 종목명
	private String BZPL_REPMNM;  //사업장 대표자명
	private String BZPL_TEL;  //사업장 전화번호
	
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
	public String getBZPL_BZNO() {
		return BZPL_BZNO;
	}
	public void setBZPL_BZNO(String bZPL_BZNO) {
		BZPL_BZNO = bZPL_BZNO;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getTRPL_RLNO() {
		return TRPL_RLNO;
	}
	public void setTRPL_RLNO(String tRPL_RLNO) {
		TRPL_RLNO = tRPL_RLNO;
	}
	public String getCUSNM() {
		return CUSNM;
	}
	public void setCUSNM(String cUSNM) {
		CUSNM = cUSNM;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
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
	public String getNA_SLPNO() {
		return NA_SLPNO;
	}
	public void setNA_SLPNO(String nA_SLPNO) {
		NA_SLPNO = nA_SLPNO;
	}
	public String getNA_TR_DSC() {
		return NA_TR_DSC;
	}
	public void setNA_TR_DSC(String nA_TR_DSC) {
		NA_TR_DSC = nA_TR_DSC;
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
	public String getTXBZ_PBC_NT() {
		return TXBZ_PBC_NT;
	}
	public void setTXBZ_PBC_NT(String tXBZ_PBC_NT) {
		TXBZ_PBC_NT = tXBZ_PBC_NT;
	}
	public String getTXBZ_PBC_DTM() {
		return TXBZ_PBC_DTM;
	}
	public void setTXBZ_PBC_DTM(String tXBZ_PBC_DTM) {
		TXBZ_PBC_DTM = tXBZ_PBC_DTM;
	}
	public String getTXBZ_PBCMN_ENO() {
		return TXBZ_PBCMN_ENO;
	}
	public void setTXBZ_PBCMN_ENO(String tXBZ_PBCMN_ENO) {
		TXBZ_PBCMN_ENO = tXBZ_PBCMN_ENO;
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
	public String getRC_YN() {
		return RC_YN;
	}
	public void setRC_YN(String rC_YN) {
		RC_YN = rC_YN;
	}
	public String getRC_TYPE() {
		return RC_TYPE;
	}
	public void setRC_TYPE(String rC_TYPE) {
		RC_TYPE = rC_TYPE;
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
	public String getTRPL_CLNTNM() {
		return TRPL_CLNTNM;
	}
	public void setTRPL_CLNTNM(String tRPL_CLNTNM) {
		TRPL_CLNTNM = tRPL_CLNTNM;
	}
	public String getTRPL_ADR() {
		return TRPL_ADR;
	}
	public void setTRPL_ADR(String tRPL_ADR) {
		TRPL_ADR = tRPL_ADR;
	}
	public String getTRPL_BZTPNM() {
		return TRPL_BZTPNM;
	}
	public void setTRPL_BZTPNM(String tRPL_BZTPNM) {
		TRPL_BZTPNM = tRPL_BZTPNM;
	}
	public String getTRPL_BZCCNM() {
		return TRPL_BZCCNM;
	}
	public void setTRPL_BZCCNM(String tRPL_BZCCNM) {
		TRPL_BZCCNM = tRPL_BZCCNM;
	}
	public String getTRPL_REPMNM() {
		return TRPL_REPMNM;
	}
	public void setTRPL_REPMNM(String tRPL_REPMNM) {
		TRPL_REPMNM = tRPL_REPMNM;
	}
	public String getTRPL_TEL() {
		return TRPL_TEL;
	}
	public void setTRPL_TEL(String tRPL_TEL) {
		TRPL_TEL = tRPL_TEL;
	}
	public String getBZPL_CLNTNM() {
		return BZPL_CLNTNM;
	}
	public void setBZPL_CLNTNM(String bZPL_CLNTNM) {
		BZPL_CLNTNM = bZPL_CLNTNM;
	}
	public String getBZPL_ADR() {
		return BZPL_ADR;
	}
	public void setBZPL_ADR(String bZPL_ADR) {
		BZPL_ADR = bZPL_ADR;
	}
	public String getBZPL_BZTPNM() {
		return BZPL_BZTPNM;
	}
	public void setBZPL_BZTPNM(String bZPL_BZTPNM) {
		BZPL_BZTPNM = bZPL_BZTPNM;
	}
	public String getBZPL_BZCCNM() {
		return BZPL_BZCCNM;
	}
	public void setBZPL_BZCCNM(String bZPL_BZCCNM) {
		BZPL_BZCCNM = bZPL_BZCCNM;
	}
	public String getBZPL_REPMNM() {
		return BZPL_REPMNM;
	}
	public void setBZPL_REPMNM(String bZPL_REPMNM) {
		BZPL_REPMNM = bZPL_REPMNM;
	}
	public String getBZPL_TEL() {
		return BZPL_TEL;
	}
	public void setBZPL_TEL(String bZPL_TEL) {
		BZPL_TEL = bZPL_TEL;
	}
}
