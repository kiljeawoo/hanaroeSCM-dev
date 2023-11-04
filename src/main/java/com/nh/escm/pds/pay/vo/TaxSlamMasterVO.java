package com.nh.escm.pds.pay.vo;

import java.io.Serializable;

/**
 * 실적_세무자료_매출 Master VO
 * @author HyeRim.Oh
 *
 */
public class TaxSlamMasterVO implements Serializable{
	
	private static final long serialVersionUID = 20150617L;
	
	/*PK*/
	private String NA_BZPLC;  //경제통합사업장코드
	private String BYNG_YM;  //매입년월
	private String TXBZ_DFN_DT;  //세무확정일자
	private String TXBZ_TOT_RG_SQNO;  //세무집계등록일련번호
	
	private String CUSNM;  //상호명
	private String TRPL_RLNO;  //사업자번호
	private String NA_TRPL_C;  //거래처
	private long PUC;  //매입매수
	private long SPY_AM;  //과세매입(A)
	private long BYNG_VAT;  //매입부가세
	private long SMA_AM;  //영세율매입(B)
	private long EXTX_AM;  //면세매입(C)
	private long TOTALAM;  //총매입액 (A+B+C)
	private long VAT;  //부가세
	private long RCCNT;  //접수매수
	private long RCAM;  //접수금액
	private long RCVAT;  //접수세액
	private long RCNCNT;  //미접수매수
	
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
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public long getPUC() {
		return PUC;
	}
	public void setPUC(long pUC) {
		PUC = pUC;
	}
	public long getSPY_AM() {
		return SPY_AM;
	}
	public void setSPY_AM(long sPY_AM) {
		SPY_AM = sPY_AM;
	}
	public long getBYNG_VAT() {
		return BYNG_VAT;
	}
	public void setBYNG_VAT(long bYNG_VAT) {
		BYNG_VAT = bYNG_VAT;
	}
	public long getSMA_AM() {
		return SMA_AM;
	}
	public void setSMA_AM(long sMA_AM) {
		SMA_AM = sMA_AM;
	}
	public long getEXTX_AM() {
		return EXTX_AM;
	}
	public void setEXTX_AM(long eXTX_AM) {
		EXTX_AM = eXTX_AM;
	}
	public long getTOTALAM() {
		return TOTALAM;
	}
	public void setTOTALAM(long tOTALAM) {
		TOTALAM = tOTALAM;
	}
	public long getVAT() {
		return VAT;
	}
	public void setVAT(long vAT) {
		VAT = vAT;
	}
	public long getRCCNT() {
		return RCCNT;
	}
	public void setRCCNT(long rCCNT) {
		RCCNT = rCCNT;
	}
	public long getRCAM() {
		return RCAM;
	}
	public void setRCAM(long rCAM) {
		RCAM = rCAM;
	}
	public long getRCVAT() {
		return RCVAT;
	}
	public void setRCVAT(long rCVAT) {
		RCVAT = rCVAT;
	}
	public long getRCNCNT() {
		return RCNCNT;
	}
	public void setRCNCNT(long rCNCNT) {
		RCNCNT = rCNCNT;
	}
	@Override
	public String toString() {
		return "TaxSlamMasterVO [NA_BZPLC=" + NA_BZPLC + ", BYNG_YM=" + BYNG_YM
				+ ", TXBZ_DFN_DT=" + TXBZ_DFN_DT + ", TXBZ_TOT_RG_SQNO="
				+ TXBZ_TOT_RG_SQNO + ", CUSNM=" + CUSNM + ", TRPL_RLNO="
				+ TRPL_RLNO + ", NA_TRPL_C=" + NA_TRPL_C + ", PUC=" + PUC
				+ ", SPY_AM=" + SPY_AM + ", BYNG_VAT=" + BYNG_VAT + ", SMA_AM="
				+ SMA_AM + ", EXTX_AM=" + EXTX_AM + ", TOTALAM=" + TOTALAM
				+ ", VAT=" + VAT + ", RCCNT=" + RCCNT + ", RCAM=" + RCAM
				+ ", RCVAT=" + RCVAT + ", RCNCNT=" + RCNCNT + "]";
	}	
}
