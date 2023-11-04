package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 발주처별 조회 First
 * @author swha
 *
 */
public class OrderOrdersOdrplFstVO  implements Serializable{
	private static final long serialVersionUID = 20150804L;
	
	private long RN;
	private String ODRPL_NA_TRPL_C;//발주처코드
	private String ODRPL_NA_TRPL_N;//발주처명
	private String ODRPL_NA_TEAM_C;//발주처팀코드
	private String ODRPL_NA_TEAM_N;//발주처팀명
	private String SPYPL_NA_TRPL_C;//공급처코드
	private String SPYPL_NA_TRPL_N;//공급처명
	private String SPYPL_NA_TEAM_C;//공급처팀코드
	private String SPYPL_NA_TEAM_N;//공급처팀명
	private long ODR_CNT;//발주상품건수
	private double ODR_QT;//수주량
	private String BOXPE_AQZ;//BOX수량
	private long ODR_AM;//수주금액
	private long VCBT_AM;//공병금액
	
	
	public long getRN() {
		return RN;
	}


	public void setRN(long rN) {
		RN = rN;
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


	public String getODRPL_NA_TEAM_N() {
		return ODRPL_NA_TEAM_N;
	}


	public void setODRPL_NA_TEAM_N(String oDRPL_NA_TEAM_N) {
		ODRPL_NA_TEAM_N = oDRPL_NA_TEAM_N;
	}


	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}


	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}


	public String getSPYPL_NA_TRPL_N() {
		return SPYPL_NA_TRPL_N;
	}


	public void setSPYPL_NA_TRPL_N(String sPYPL_NA_TRPL_N) {
		SPYPL_NA_TRPL_N = sPYPL_NA_TRPL_N;
	}


	public String getSPYPL_NA_TEAM_C() {
		return SPYPL_NA_TEAM_C;
	}


	public void setSPYPL_NA_TEAM_C(String sPYPL_NA_TEAM_C) {
		SPYPL_NA_TEAM_C = sPYPL_NA_TEAM_C;
	}


	public String getSPYPL_NA_TEAM_N() {
		return SPYPL_NA_TEAM_N;
	}


	public void setSPYPL_NA_TEAM_N(String sPYPL_NA_TEAM_N) {
		SPYPL_NA_TEAM_N = sPYPL_NA_TEAM_N;
	}


	public long getODR_CNT() {
		return ODR_CNT;
	}


	public void setODR_CNT(long oDR_CNT) {
		ODR_CNT = oDR_CNT;
	}


	public double getODR_QT() {
		return ODR_QT;
	}


	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}


	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}


	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}


	public long getODR_AM() {
		return ODR_AM;
	}


	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}


	public long getVCBT_AM() {
		return VCBT_AM;
	}


	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}


	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
}
