package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 발주처별 조회 Second
 * @author swha
 *
 */
public class OrderOrdersOdrplScdVO  implements Serializable{
	private static final long serialVersionUID = 20150804L;
	
	private long RN;
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TEAM_C;
	private String ODR_DT;
	private String ODR_SLPNO;
	private String MNGT_NA_TRPL_C;//정산처코드
	private String MNGT_NA_TRPL_N;//정산처명
	private String EDIRG_DTM;//배달일
	private String FS_RMS_DTM;//수신일
	private String DVY_RQR_DT;//배송요청일
	private long ODR_AM;//수주금액
	private long VCBT_AM;//공병금액
	private String SPY_TPC;//수주유형
	private String NA_ODR_STS_DSC;//발주상태
	private String FSRGMN_ENO;//발주자
	private String DDLY_YN;//직송여부
	private String FSRG_DTM;//최초등록일시
	private String LSCHG_DTM;//최종변경일시
	private String LS_CMENO;//최종변경자개인번호
	private String DEL_DTM;//삭제일시
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
	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}
	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
	}
	public String getMNGT_NA_TRPL_N() {
		return MNGT_NA_TRPL_N;
	}
	public void setMNGT_NA_TRPL_N(String mNGT_NA_TRPL_N) {
		MNGT_NA_TRPL_N = mNGT_NA_TRPL_N;
	}
	public String getEDIRG_DTM() {
		return EDIRG_DTM;
	}
	public void setEDIRG_DTM(String eDIRG_DTM) {
		EDIRG_DTM = eDIRG_DTM;
	}
	public String getFS_RMS_DTM() {
		return FS_RMS_DTM;
	}
	public void setFS_RMS_DTM(String fS_RMS_DTM) {
		FS_RMS_DTM = fS_RMS_DTM;
	}
	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}
	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
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
	public String getSPY_TPC() {
		return SPY_TPC;
	}
	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}
	public String getNA_ODR_STS_DSC() {
		return NA_ODR_STS_DSC;
	}
	public void setNA_ODR_STS_DSC(String nA_ODR_STS_DSC) {
		NA_ODR_STS_DSC = nA_ODR_STS_DSC;
	}
	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}
	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}
	public String getDDLY_YN() {
		return DDLY_YN;
	}
	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}
	public String getFSRG_DTM() {
		return FSRG_DTM;
	}
	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}
	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}
	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}
	public String getLS_CMENO() {
		return LS_CMENO;
	}
	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}
	public String getDEL_DTM() {
		return DEL_DTM;
	}
	public void setDEL_DTM(String dEL_DTM) {
		DEL_DTM = dEL_DTM;
	}
	
	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
}
