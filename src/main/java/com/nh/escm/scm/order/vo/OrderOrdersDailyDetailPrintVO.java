package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 일자별 Detail Print
 * @author swha
 *
 */
public class OrderOrdersDailyDetailPrintVO  implements Serializable{
	private static final long serialVersionUID = 20150907L;
	
	private String NA_WRS_C;//상품코드
	private String WRSNM;//상품명
	private String NA_WRS_STD_UNT_N;//규격
	private String NA_WRS_UNT_N;//단위
	private String B_BOXPE_AQZ;//입수량
	private String ODR_PCS;//단가
	private String ODR_QT;//발주량
	private String BOX_QT;//BOX수량
	private String ODR_AM;//수주금액
	private String B_VCBT_AM;//공병금액
	private String ODR_DSQNO;//상품순서
	
	

	


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






	public String getNA_WRS_STD_UNT_N() {
		return NA_WRS_STD_UNT_N;
	}






	public void setNA_WRS_STD_UNT_N(String nA_WRS_STD_UNT_N) {
		NA_WRS_STD_UNT_N = nA_WRS_STD_UNT_N;
	}






	public String getNA_WRS_UNT_N() {
		return NA_WRS_UNT_N;
	}






	public void setNA_WRS_UNT_N(String nA_WRS_UNT_N) {
		NA_WRS_UNT_N = nA_WRS_UNT_N;
	}






	public String getB_BOXPE_AQZ() {
		return B_BOXPE_AQZ;
	}






	public void setB_BOXPE_AQZ(String b_BOXPE_AQZ) {
		B_BOXPE_AQZ = b_BOXPE_AQZ;
	}






	public String getODR_PCS() {
		return ODR_PCS;
	}






	public void setODR_PCS(String oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}






	public String getODR_QT() {
		return ODR_QT;
	}






	public void setODR_QT(String oDR_QT) {
		ODR_QT = oDR_QT;
	}






	public String getBOX_QT() {
		return BOX_QT;
	}






	public void setBOX_QT(String bOX_QT) {
		BOX_QT = bOX_QT;
	}






	public String getODR_AM() {
		return ODR_AM;
	}






	public void setODR_AM(String oDR_AM) {
		ODR_AM = oDR_AM;
	}






	public String getB_VCBT_AM() {
		return B_VCBT_AM;
	}






	public void setB_VCBT_AM(String b_VCBT_AM) {
		B_VCBT_AM = b_VCBT_AM;
	}






	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}






	public String getODR_DSQNO() {
		return ODR_DSQNO;
	}






	public void setODR_DSQNO(String oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}
	
}
