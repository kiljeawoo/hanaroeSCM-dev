package com.nh.escm.scm.order.vo;

import java.io.Serializable;
/**
 * 수주등록 상품정보 List
 * @author swha
 *
 */
public class OrderOrdersDetailVO  implements Serializable{
	private static final long serialVersionUID = 20150701L;
	
	private String DML_CODE; //CRUD 코드
	private String ODRPL_NA_TRPL_C;//공급처거래처코드
	private String ODRPL_NA_TEAM_C;//공급처팀코드
	private String ODR_DT;//발주일자
	private String ODR_SLPNO;//발주전표번호
	private String ODR_DSQNO;//발주상세일련번호
	private String VAN_SEQ;//VAN생성일련번호
	private String NA_WRS_C;//상품코드
	private String WRSNM;//상품명
	private int BOXPE_AQZ;//박스입수
	private String WRS_STDNM;//규격
	private String UNT_C;//단위
	private String NA_WRS_UNT_C;//단위
	private long ODR_QT;//수주량
	private long ODR_PCS;//수주원가
	private long ODR_VAT;//수주부가세
	private long ODR_AM;//수주금액
	private int VCBT_UPR;//공병단가
	private int VCBX_UPR;//공상자단가
	private long VCBT_AM;//공병금액
	private long VCBX_AM;//공상자금액
	private String NA_WRS_LCLC;
	private String NA_WRS_MCLC;
	private String NA_WRS_SCLC;
	private String NA_WRS_DTCF_C;
	private String TXT_DSC;
	private String VCBT_NA_WRS_C;
	private String MIN_ODR_QT;
	private String MB_ID;
	private String DEL_YN;//삭제여부
	
	
	public String getDML_CODE() {
		return DML_CODE;
	}
	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
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
	public String getVAN_SEQ() {
		return VAN_SEQ;
	}
	public void setVAN_SEQ(String vAN_SEQ) {
		VAN_SEQ = vAN_SEQ;
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
	public int getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(int bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public String getWRS_STDNM() {
		return WRS_STDNM;
	}
	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}
	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}
	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}
	public long getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(long oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public long getODR_PCS() {
		return ODR_PCS;
	}
	public void setODR_PCS(long oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}
	public long getODR_VAT() {
		return ODR_VAT;
	}
	public void setODR_VAT(long oDR_VAT) {
		ODR_VAT = oDR_VAT;
	}
	public long getODR_AM() {
		return ODR_AM;
	}
	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}
	public int getVCBT_UPR() {
		return VCBT_UPR;
	}
	public void setVCBT_UPR(int vCBT_UPR) {
		VCBT_UPR = vCBT_UPR;
	}
	public int getVCBX_UPR() {
		return VCBX_UPR;
	}
	public void setVCBX_UPR(int vCBX_UPR) {
		VCBX_UPR = vCBX_UPR;
	}
	public long getVCBT_AM() {
		return VCBT_AM;
	}
	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}
	public long getVCBX_AM() {
		return VCBX_AM;
	}
	public void setVCBX_AM(long vCBX_AM) {
		VCBX_AM = vCBX_AM;
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
	public String getTXT_DSC() {
		return TXT_DSC;
	}
	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}
	public String getVCBT_NA_WRS_C() {
		return VCBT_NA_WRS_C;
	}
	public void setVCBT_NA_WRS_C(String vCBT_NA_WRS_C) {
		VCBT_NA_WRS_C = vCBT_NA_WRS_C;
	}
	public String getMIN_ODR_QT() {
		return MIN_ODR_QT;
	}
	public void setMIN_ODR_QT(String mIN_ODR_QT) {
		MIN_ODR_QT = mIN_ODR_QT;
	}
	public String getDEL_YN() {
		return DEL_YN;
	}
	public void setDEL_YN(String dEL_YN) {
		DEL_YN = dEL_YN;
	}
	public String getMB_ID() {
		return MB_ID;
	}
	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}
	public String getUNT_C() {
		return UNT_C;
	}
	public void setUNT_C(String uNT_C) {
		UNT_C = uNT_C;
	}
	
	
	
	
	
	
	
	
}
