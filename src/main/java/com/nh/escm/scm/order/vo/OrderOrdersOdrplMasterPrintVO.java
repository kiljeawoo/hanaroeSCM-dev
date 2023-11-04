package com.nh.escm.scm.order.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 발주처별 Master Print
 * @author swha
 *
 */
public class OrderOrdersOdrplMasterPrintVO  implements Serializable{
	private static final long serialVersionUID = 20150907L;
	
	private String ODRPL_NA_TRPL_C;//발주처코드
	private String ODRPL_NA_TRPL_N;//발주처명
	private String ODRPL_NA_TEAM_C;//발주처팀
	private String ODR_DT;//발주일
	private String ODR_SLPNO;//발주전표
	private String NA_ODR_STS_DSC_N;//발주상태
	private String DVY_PLA_DT;//배송예정일
	private String ODR_QTTT;//발주량합계
	private String BOXPE_AQZ;//BOX합계
	private String ODR_SAM;//수주합계
	private String VCBT_AM;//공병합계
	private String DVY_RQR_DT;
	private List<OrderOrdersOdrplDetailPrintVO> list;
	
	


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




	public String getNA_ODR_STS_DSC_N() {
		return NA_ODR_STS_DSC_N;
	}




	public void setNA_ODR_STS_DSC_N(String nA_ODR_STS_DSC_N) {
		NA_ODR_STS_DSC_N = nA_ODR_STS_DSC_N;
	}




	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}




	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}




	public String getODR_QTTT() {
		return ODR_QTTT;
	}




	public void setODR_QTTT(String oDR_QTTT) {
		ODR_QTTT = oDR_QTTT;
	}




	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}




	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}




	public String getODR_SAM() {
		return ODR_SAM;
	}




	public void setODR_SAM(String oDR_SAM) {
		ODR_SAM = oDR_SAM;
	}




	public String getVCBT_AM() {
		return VCBT_AM;
	}




	public void setVCBT_AM(String vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}




	public List<OrderOrdersOdrplDetailPrintVO> getList() {
		return list;
	}




	public void setList(List<OrderOrdersOdrplDetailPrintVO> list) {
		this.list = list;
	}



	

	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}




	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
}
