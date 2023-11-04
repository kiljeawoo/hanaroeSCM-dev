package com.nh.escm.scm.delivery.sea.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;

/**
 * 배송예정결과 조회
 * @author swha
 *
 */
public class DeliveryResultVO implements Serializable {
	
	private static final long serialVersionUID = 20150831L;
	
	private String RN;
	private String DVY_PLASH_STSC;
	private String DVY_PLASH_STSNM;
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TRPL_N;
	private String NA_DVY_PLASH_SLPNO;
	private String DVY_PLA_DT;
	private String ODR_SLPNO;
	private String ODR_DT;
	private String DDLY_YN;
	private String RES_CODE;
	private String RES_DESC;
	
	
	public String getRN() {
		return RN;
	}


	public void setRN(String rN) {
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


	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}


	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}


	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}


	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}


	public String getODR_SLPNO() {
		return ODR_SLPNO;
	}


	public void setODR_SLPNO(String oDR_SLPNO) {
		ODR_SLPNO = oDR_SLPNO;
	}


	public String getODR_DT() {
		return ODR_DT;
	}


	public void setODR_DT(String oDR_DT) {
		ODR_DT = oDR_DT;
	}


	public String getDDLY_YN() {
		return DDLY_YN;
	}


	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}


	public String getRES_CODE() {
		return RES_CODE;
	}


	public void setRES_CODE(String rES_CODE) {
		RES_CODE = rES_CODE;
	}


	public String getRES_DESC() {
		return RES_DESC;
	}


	public void setRES_DESC(String rES_DESC) {
		RES_DESC = rES_DESC;
	}


	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}


	public String getDVY_PLASH_STSC() {
		return DVY_PLASH_STSC;
	}


	public void setDVY_PLASH_STSC(String dVY_PLASH_STSC) {
		DVY_PLASH_STSC = dVY_PLASH_STSC;
	}


	public String getDVY_PLASH_STSNM() {
		return DVY_PLASH_STSNM;
	}


	public void setDVY_PLASH_STSNM(String dVY_PLASH_STSNM) {
		DVY_PLASH_STSNM = dVY_PLASH_STSNM;
	}
	
	
	
	
	
}
