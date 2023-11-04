package com.nh.escm.scm.order.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 상품별 조회 Fst
 * @author swha
 *
 */

public class OrderOrdersWrsMasterPrintVO  implements Serializable{
	private static final long serialVersionUID = 20150806L;
	
	private long RN;
	private String NA_WRS_C;//상품코드
	private String WRSNM;//상품명
	private String WRS_STDNM;//단위
	private String NA_WRS_UNT_C;//입수
	private String BOXPE_AQZ;//박스입수
	private double ODR_PCS;//발주단가
	private double ODR_QT;//수주량
	private double BOX_QT;//박스수량
	private long ODR_AM;//수주금액
	private long ODR_VAT;//부가세액
	private long VCBT_AM;//공병금액
	private int ODR_CNT;//수주건수
	private String VHCNO;//차량번호
	
	List<OrderOrdersWrsDetailPrintVO> list;
	
	
	public long getRN() {
		return RN;
	}


	public void setRN(long rN) {
		RN = rN;
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


	public int getODR_CNT() {
		return ODR_CNT;
	}


	public void setODR_CNT(int oDR_CNT) {
		ODR_CNT = oDR_CNT;
	}


	public String getVHCNO() {
		return VHCNO;
	}


	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}


	public List<OrderOrdersWrsDetailPrintVO> getList() {
		return list;
	}


	public void setList(List<OrderOrdersWrsDetailPrintVO> list) {
		this.list = list;
	}


	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
}
