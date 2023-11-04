package com.nh.escm.scm.reserve.vo;

import java.io.Serializable;

/**
 * 공급처 차량 관리 VO
 * @author HyeRim.Oh
 *
 */
public class CarVO implements Serializable{
	
	private static final long serialVersionUID = 20150722L;
	
	private String PHD_NA_BZPLC;  //사업장코드
	private String SPYPL_VHC_PHD_IDVD_NO;  //개별번호
	private String NA_TRPL_C;  //거래처코드
	private String CLNTNM;  //거래처명
	private String VHCNO;  //차량번호
	private String PHD_DVY_CAFFNM;  //기사명
	private String TELNO;  //연락처
	private String UYN;  //사용여부
	private String DEL_YN;  //삭제여부
	private String FSRGMN_ENO; //최초등록자개인번호	
	private String LS_CMENO; //최종변경자개인번호
	private String DLMN_ENO; //삭제자개인번호
	private String DML_CODE; //CRUD코드	
	
	public String getPHD_NA_BZPLC() {
		return PHD_NA_BZPLC;
	}
	public void setPHD_NA_BZPLC(String pHD_NA_BZPLC) {
		PHD_NA_BZPLC = pHD_NA_BZPLC;
	}
	public String getSPYPL_VHC_PHD_IDVD_NO() {
		return SPYPL_VHC_PHD_IDVD_NO;
	}
	public void setSPYPL_VHC_PHD_IDVD_NO(String sPYPL_VHC_PHD_IDVD_NO) {
		SPYPL_VHC_PHD_IDVD_NO = sPYPL_VHC_PHD_IDVD_NO;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getVHCNO() {
		return VHCNO;
	}
	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}
	public String getPHD_DVY_CAFFNM() {
		return PHD_DVY_CAFFNM;
	}
	public void setPHD_DVY_CAFFNM(String pHD_DVY_CAFFNM) {
		PHD_DVY_CAFFNM = pHD_DVY_CAFFNM;
	}
	public String getTELNO() {
		return TELNO;
	}
	public void setTELNO(String tELNO) {
		TELNO = tELNO;
	}
	public String getUYN() {
		return UYN;
	}
	public void setUYN(String uYN) {
		UYN = uYN;
	}
	public String getDEL_YN() {
		return DEL_YN;
	}
	public void setDEL_YN(String dEL_YN) {
		DEL_YN = dEL_YN;
	}
	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}
	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}
	public String getLS_CMENO() {
		return LS_CMENO;
	}
	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}
	public String getDLMN_ENO() {
		return DLMN_ENO;
	}
	public void setDLMN_ENO(String dLMN_ENO) {
		DLMN_ENO = dLMN_ENO;
	}
	public String getDML_CODE() {
		return DML_CODE;
	}
	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}
	
	
}
