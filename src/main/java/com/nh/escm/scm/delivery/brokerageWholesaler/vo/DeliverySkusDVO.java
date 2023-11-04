package com.nh.escm.scm.delivery.brokerageWholesaler.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 상품별 Detail
 * @author swha
 *
 */
public class DeliverySkusDVO  implements Serializable {
	
	private static final long serialVersionUID = 20150828L;
	
	private String RN;
	private String RVOPL_NA_TRPL_C;//수주처
	private String RVOPL_NA_TRPL_N;//수주처명
	private String NA_DVY_PLASH_SLPNO;//배송예정서전표번호
	private String DVYAA_NA_TRPL_C;//배송지
	private String DVYAA_NA_TRPL_N;//배송지명
	private String ODRPL_NA_TRPL_C;//발주처
	private String ODRPL_NA_TRPL_N;//발주처명
	private String ODRPL_NA_TEAM_C;//발주처팀
	private String DVY_PLA_DT;//배송예정일자
	private String DVY_WRS_UPR;//단가
	private double DVY_PLA_QT;//수량
	private double DVY_AM;//배송금액
	private long DVY_VAT;//부가세
	private double DVY_FEE;//수수료(물류,환급)

	


	public String getRN() {
		return RN;
	}




	public void setRN(String rN) {
		RN = rN;
	}




	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}




	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}




	public String getRVOPL_NA_TRPL_N() {
		return RVOPL_NA_TRPL_N;
	}




	public void setRVOPL_NA_TRPL_N(String rVOPL_NA_TRPL_N) {
		RVOPL_NA_TRPL_N = rVOPL_NA_TRPL_N;
	}




	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}




	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}




	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}




	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}




	public String getDVYAA_NA_TRPL_N() {
		return DVYAA_NA_TRPL_N;
	}




	public void setDVYAA_NA_TRPL_N(String dVYAA_NA_TRPL_N) {
		DVYAA_NA_TRPL_N = dVYAA_NA_TRPL_N;
	}




	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}




	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}




	public String getODRPL_NA_TRPL_N() {
		return ODRPL_NA_TRPL_N;
	}




	public void setODRPL_NA_TRPL_N(String oDRPL_NA_TRPL_N) {
		ODRPL_NA_TRPL_N = oDRPL_NA_TRPL_N;
	}




	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}




	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}




	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}




	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}




	public String getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}




	public void setDVY_WRS_UPR(String dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
	}




	public double getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}




	public void setDVY_PLA_QT(double dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}




	public double getDVY_AM() {
		return DVY_AM;
	}




	public void setDVY_AM(double dVY_AM) {
		DVY_AM = dVY_AM;
	}




	public long getDVY_VAT() {
		return DVY_VAT;
	}




	public void setDVY_VAT(long dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}




	public double getDVY_FEE() {
		return DVY_FEE;
	}




	public void setDVY_FEE(double dVY_FEE) {
		DVY_FEE = dVY_FEE;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
}
