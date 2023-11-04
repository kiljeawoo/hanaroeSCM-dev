package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 일자별 조회 Second
 * @author swha
 *
 */
public class OrderOrdersDailyScdVO  implements Serializable{
	private static final long serialVersionUID = 20150803L;
	
	private long RN;//ROW NUM
	private String ODRPL_NA_TRPL_C; //발주처코드
	private String ODRPL_NA_TEAM_C;//발주처팀코드
	private String ODR_DT;//발주일자
	private String ODR_SLPNO;//발주전표번호
	private String SHRT_BZPLNM;//발주처명
	private String DVY_RQR_DT;//배송예정일자
	private String BOXPE_AQZ;//박스입수량
	private long ODR_AM;//발주금액
	private long VCBT_AM;//공병금액
	private String SPY_TPC;//수주유형
	private String NA_ODR_STS_DSC;//발주상태
	private String FSRGMN_ENO;//발주자
	private String TEAMNM;//발주처팀명
	private String NA_RGN_C;//지역코드
	private String CLNTNM;//수주처명
	private String RVOPL_NA_TRPL_C;//발주처코드
	private String RVOPL_NA_TEAM_C;//발주처팀코드
	private String EDIRG_DTM;// 배달일시
	private String FS_RMS_DTM;// 수신일
	private double ODR_QTTT; //발주량
	private String DEL_DTM;//삭제일시
	private String DLVPNSHT_TEMP_YN;
	private String SPYPL_NA_TRPL_C;
	private String ROGO_INF_CRT_C;
	private String DDLY_YN;
	
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
	public String getSHRT_BZPLNM() {
		return SHRT_BZPLNM;
	}
	public void setSHRT_BZPLNM(String sHRT_BZPLNM) {
		SHRT_BZPLNM = sHRT_BZPLNM;
	}
	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}
	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
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
	public String getTEAMNM() {
		return TEAMNM;
	}
	public void setTEAMNM(String tEAMNM) {
		TEAMNM = tEAMNM;
	}
	public String getNA_RGN_C() {
		return NA_RGN_C;
	}
	public void setNA_RGN_C(String nA_RGN_C) {
		NA_RGN_C = nA_RGN_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getRVOPL_NA_TRPL_C() {
		return RVOPL_NA_TRPL_C;
	}
	public void setRVOPL_NA_TRPL_C(String rVOPL_NA_TRPL_C) {
		RVOPL_NA_TRPL_C = rVOPL_NA_TRPL_C;
	}
	public String getRVOPL_NA_TEAM_C() {
		return RVOPL_NA_TEAM_C;
	}
	public void setRVOPL_NA_TEAM_C(String rVOPL_NA_TEAM_C) {
		RVOPL_NA_TEAM_C = rVOPL_NA_TEAM_C;
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
	public double getODR_QTTT() {
		return ODR_QTTT;
	}
	public void setODR_QTTT(double oDR_QTTT) {
		ODR_QTTT = oDR_QTTT;
	}
	public String getDEL_DTM() {
		return DEL_DTM;
	}
	public void setDEL_DTM(String dEL_DTM) {
		DEL_DTM = dEL_DTM;
	}
	
	public String getDLVPNSHT_TEMP_YN()
	{
		return this.DLVPNSHT_TEMP_YN;
	}
	  
	public void setDLVPNSHT_TEMP_YN(String dLVPNSHT_TEMP_YN)
	{
		this.DLVPNSHT_TEMP_YN = dLVPNSHT_TEMP_YN;
	}
	  
	public String getSPYPL_NA_TRPL_C()
	{
		return this.SPYPL_NA_TRPL_C;
	}
	
	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C)
	{
		this.SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}
	
	public String getROGO_INF_CRT_C()
	{
		return this.ROGO_INF_CRT_C;
	}
	
	public void setROGO_INF_CRT_C(String rOGO_INF_CRT_C)
	{
		this.ROGO_INF_CRT_C = rOGO_INF_CRT_C;
	}
	
	public String getDDLY_YN()
	{
		return this.DDLY_YN;
	}
	
	public void setDDLY_YN(String dDLY_YN)
	{
	this.DDLY_YN = dDLY_YN;
	}
	
	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
}
