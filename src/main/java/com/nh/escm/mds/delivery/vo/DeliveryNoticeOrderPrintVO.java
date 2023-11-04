package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 배송예정서 일반등록 거래명세서 출력
 * @author swha
 *
 */
public class DeliveryNoticeOrderPrintVO implements Serializable {
	
	private static final long serialVersionUID = 20150909L;
	private String CSER_CTR_TPC; //계약유형
	private String SPYPL_NA_TRPL_N;//공급처 상호
	private String SPYPL_NA_TRPL_C;//공급처 코드
	private String SPYPL_BIZ_NUMBER;//공급처 사업자번호
	private String SPYPL_REPMNM;//공급처 대표자
	private String SPYPL_ADDRESS;//공급처 주소
	private String SPYPL_TEL;//공급처 전화번호
	private String DVYAA_NA_TRPL_N;//배송처 상호
	private String DVYAA_NA_TRPL_C;//배송처 코드
	private String DVYAA_BIZ_NUMBER;//배송처 사업자번호
	private String DVYAA_REPMNM;//배송처 대표자
	private String CNR_DT;//검수일자
	private String NA_WRS_C;//상품코드
	private String WRSNM;//상품명
	private String NA_WRS_UNT_N;//규격명
	private String BOX_QT;//BOX 수량
	private String BOXPE_AQZ;//입수
	private String DVY_PLA_QT;//낱개수량
	private String DVY_WRS_UPR;//단가
	private String DVY_AM;//금액
	private String DVY_VAT;//부가세
	private String SPYPL_AM;//공급금액
	private String DQPD_RSN; //결품사유 내용(코드)
	private int DVY_PLA_SQNO;
	private String DSTR_TER_MRK_DSC;//유통기한구분
	private String DSTR_TER_DT;//유통기한
	private String BKG_EVT_DSC;//소터구분
	private String DUM_RAT;//덤비율
	private String NA_TRPL_SEAL_FLNM;//직인파일명
	
	
	public String getNA_TRPL_SEAL_FLNM() {
		return NA_TRPL_SEAL_FLNM;
	}
	public void setNA_TRPL_SEAL_FLNM(String nA_TRPL_SEAL_FLNM) {
		NA_TRPL_SEAL_FLNM = nA_TRPL_SEAL_FLNM;
	}
	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}
	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}
	public String getSPYPL_NA_TRPL_N() {
		return SPYPL_NA_TRPL_N;
	}
	public void setSPYPL_NA_TRPL_N(String sPYPL_NA_TRPL_N) {
		SPYPL_NA_TRPL_N = sPYPL_NA_TRPL_N;
	}
	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}
	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}
	public String getSPYPL_BIZ_NUMBER() {
		return SPYPL_BIZ_NUMBER;
	}
	public void setSPYPL_BIZ_NUMBER(String sPYPL_BIZ_NUMBER) {
		SPYPL_BIZ_NUMBER = sPYPL_BIZ_NUMBER;
	}
	public String getSPYPL_REPMNM() {
		return SPYPL_REPMNM;
	}
	public void setSPYPL_REPMNM(String sPYPL_REPMNM) {
		SPYPL_REPMNM = sPYPL_REPMNM;
	}
	public String getSPYPL_ADDRESS() {
		return SPYPL_ADDRESS;
	}
	public void setSPYPL_ADDRESS(String sPYPL_ADDRESS) {
		SPYPL_ADDRESS = sPYPL_ADDRESS;
	}
	public String getSPYPL_TEL() {
		return SPYPL_TEL;
	}
	public void setSPYPL_TEL(String sPYPL_TEL) {
		SPYPL_TEL = sPYPL_TEL;
	}
	public String getDVYAA_NA_TRPL_N() {
		return DVYAA_NA_TRPL_N;
	}
	public void setDVYAA_NA_TRPL_N(String dVYAA_NA_TRPL_N) {
		DVYAA_NA_TRPL_N = dVYAA_NA_TRPL_N;
	}
	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}
	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}
	public String getDVYAA_BIZ_NUMBER() {
		return DVYAA_BIZ_NUMBER;
	}
	public void setDVYAA_BIZ_NUMBER(String dVYAA_BIZ_NUMBER) {
		DVYAA_BIZ_NUMBER = dVYAA_BIZ_NUMBER;
	}
	public String getDVYAA_REPMNM() {
		return DVYAA_REPMNM;
	}
	public void setDVYAA_REPMNM(String dVYAA_REPMNM) {
		DVYAA_REPMNM = dVYAA_REPMNM;
	}
	public String getCNR_DT() {
		return CNR_DT;
	}
	public void setCNR_DT(String cNR_DT) {
		CNR_DT = cNR_DT;
	}
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getWRSNM() {
		return WRSNM;
	}
	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}
	public String getNA_WRS_UNT_N() {
		return NA_WRS_UNT_N;
	}
	public void setNA_WRS_UNT_N(String nA_WRS_UNT_N) {
		NA_WRS_UNT_N = nA_WRS_UNT_N;
	}
	public String getBOX_QT() {
		return BOX_QT;
	}
	public void setBOX_QT(String bOX_QT) {
		BOX_QT = bOX_QT;
	}
	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public String getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}
	public void setDVY_PLA_QT(String dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}
	public String getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}
	public void setDVY_WRS_UPR(String dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
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
	public String getSPYPL_AM() {
		return SPYPL_AM;
	}
	public void setSPYPL_AM(String sPYPL_AM) {
		SPYPL_AM = sPYPL_AM;
	}
	public String getDQPD_RSN() {
		return DQPD_RSN;
	}
	public void setDQPD_RSN(String dQPD_RSN) {
		DQPD_RSN = dQPD_RSN;
	}
	public int getDVY_PLA_SQNO() {
		return DVY_PLA_SQNO;
	}
	public void setDVY_PLA_SQNO(int dVY_PLA_SQNO) {
		DVY_PLA_SQNO = dVY_PLA_SQNO;
	}
	public String getDSTR_TER_MRK_DSC() {
		return DSTR_TER_MRK_DSC;
	}
	public void setDSTR_TER_MRK_DSC(String dSTR_TER_MRK_DSC) {
		DSTR_TER_MRK_DSC = dSTR_TER_MRK_DSC;
	}
	public String getDSTR_TER_DT() {
		return DSTR_TER_DT;
	}
	public void setDSTR_TER_DT(String dSTR_TER_DT) {
		DSTR_TER_DT = dSTR_TER_DT;
	}
	public String getBKG_EVT_DSC() {
		return BKG_EVT_DSC;
	}
	public void setBKG_EVT_DSC(String bKG_EVT_DSC) {
		BKG_EVT_DSC = bKG_EVT_DSC;
	}
	public String getDUM_RAT() {
		return DUM_RAT;
	}
	public void setDUM_RAT(String dUM_RAT) {
		DUM_RAT = dUM_RAT;
	}
	
	
	
	
	

}
