package com.nh.escm.scm.order.vo;

import java.io.Serializable;

/**
 * 수주내역조회
 * 발주처별 조회 Third
 * @author swha
 *
 */
public class OrderOrdersOdrplTrdVO  implements Serializable{
	private static final long serialVersionUID = 20150804L;
	
	private String NA_WRS_C;//상품코드
	private String WRSNM;//상품명
	private String NA_WRS_UNT_C;//단위
	private String BOXPE_AQZ;//박스입수
	private double ODR_PCS;//발주단가
	private double ODR_QT;//수주량
	private double BOX_QT;//박스수량
	private long ODR_AM;//수주금액
	private long ODR_VAT;//부가세액
	private long VCBT_AM;//공병금액
	private String FSRGMN_ENO;//최초등록자 개인번호
	private String FSRG_DTM;//최종등록일시
	private String LS_CMENO;//최종변경자개인번호
	private String LSCHG_DTM;//최종변경일시
	private String DEL_DTM;//삭제일시
	private String WRS_STDNM;//규격
	
	
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
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
	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}
	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}
	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public double getODR_PCS() {
		return ODR_PCS;
	}
	public void setODR_PCS(double oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}
	public double getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public double getBOX_QT() {
		return BOX_QT;
	}
	public void setBOX_QT(double bOX_QT) {
		BOX_QT = bOX_QT;
	}
	public long getODR_AM() {
		return ODR_AM;
	}
	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}
	public long getODR_VAT() {
		return ODR_VAT;
	}
	public void setODR_VAT(long oDR_VAT) {
		ODR_VAT = oDR_VAT;
	}
	public long getVCBT_AM() {
		return VCBT_AM;
	}
	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}
	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}
	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}
	public String getFSRG_DTM() {
		return FSRG_DTM;
	}
	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}
	public String getLS_CMENO() {
		return LS_CMENO;
	}
	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}
	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}
	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}
	public String getDEL_DTM() {
		return DEL_DTM;
	}
	public void setDEL_DTM(String dEL_DTM) {
		DEL_DTM = dEL_DTM;
	}
	@Override
	public String toString() {
		return "OrderOrdersOdrplTrdVO [NA_WRS_C=" + NA_WRS_C + ", WRSNM="
				+ WRSNM + ", NA_WRS_UNT_C=" + NA_WRS_UNT_C + ", BOXPE_AQZ="
				+ BOXPE_AQZ + ", ODR_PCS=" + ODR_PCS + ", ODR_QT=" + ODR_QT
				+ ", BOX_QT=" + BOX_QT + ", ODR_AM=" + ODR_AM + ", ODR_VAT="
				+ ODR_VAT + ", VCBT_AM=" + VCBT_AM + ", FSRGMN_ENO="
				+ FSRGMN_ENO + ", FSRG_DTM=" + FSRG_DTM + ", LS_CMENO="
				+ LS_CMENO + ", LSCHG_DTM=" + LSCHG_DTM + ", DEL_DTM="
				+ DEL_DTM + "]";
	}
	
	
	
	
}
