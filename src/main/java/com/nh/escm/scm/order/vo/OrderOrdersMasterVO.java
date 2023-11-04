package com.nh.escm.scm.order.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 수주등록 Master
 * @author swha
 *
 */
public class OrderOrdersMasterVO   implements Serializable{
	private static final long serialVersionUID = 20150629L;
	
	 
	private String DML_CODE;//CRUD코드
	private String ODR_DT;//발주일자
	private String ODR_SLPNO;//발주전표번호
	private String VAN_SEQ;//VAN생성일련번호
	private String ODRPL_NA_TRPL_C;//발주처코드
	private String SHRT_BZPLNM;//발주처명
	private String ODRPL_NA_TEAM_C;//발주처팀코드
	private String TEAMNM;//발주처팀명
	private String RVOPL_NA_TRPL_C;//수주처
	private String RVOPL_NA_TEAM_C;//수주처팀코드
	private String DVYAA_C;//배송지코드
	private String DVY_RQR_DT;//배송요청일자
	private String DDLY_YN;//직송여부
	private String DVY_VHC_DSC;//배송차량구분코드
	private String SPY_TPC;//공급유형코드
	private String VHCNO;//차량번호
	private String DVY_RQR_CNTN;//배송요청내용
	private long TOTAL_ODR_AM; //발주금액
	private long TOTAL_ODR_VAT;//발주부가세
	private long TOTAL_VCBT_AM;//공병금액
	private long TOTAL_VCBX_AM;//공상자금액
	private String EMRG_ODR_YN;//긴급발주여부
	private String GRS_SOJU_YN;//지방소주여부
	private String SPYPL_NA_TRPL_C;//공급처코드
	private String SPYPL_NA_TEAM_C;//공급처팀코드
	private String DVYAA_NA_TRPL_C;//공급처코드
	private String DVYAA_NA_TEAM_C;//공급처팀코드
	private String ODR_DSC;//발주구분코드
	private String NA_WRS_LCLC;//상품대분류
	private String NA_WRS_MCLC;//상품중분류
	private String FS_RMS_DT;//문서 최초수신일자
	private String FS_RMS_HR;//문서 최초수신시간
	private String LS_RMS_DT;//문서 최종수신일자
	private String LS_RMS_HR;//문서 최종수신시간
	private String HDN_ODRPL_NA_TRPL_C;//이전발주처코드
	private String HDN_ODRPL_NA_TEAM_C;//이전발주처팀코드
	private String CSER_CTR_TPC;//계약유형코드
	private long TOTAL_ODR_QT;//발주수량
	private String MNGT_NA_TRPL_C;
	private String MNGT_NA_TEAM_C;
	private String MNGT_NA_TR_TPC;
	private String ADJPL_NA_TRPL_C;
	private String ADJPL_NA_TEAM_C;
	private String MNGT_TR_REL_AMNNO;
	private String CSER_TR_REL_AMNNO;
	private String ACTL_SPYPL_NA_TRPL_C;
	private String ROGO_INF_CRT_DSC;//수발주정보생성코드
	private String TEMP_YN;//임시저장여부
	private String MB_ID;
	
	private List<OrderOrdersDetailVO> detailVoList;
	


	public String getDML_CODE() {
		return DML_CODE;
	}



	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
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



	public String getVAN_SEQ() {
		return VAN_SEQ;
	}



	public void setVAN_SEQ(String vAN_SEQ) {
		VAN_SEQ = vAN_SEQ;
	}



	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}



	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}



	public String getSHRT_BZPLNM() {
		return SHRT_BZPLNM;
	}



	public void setSHRT_BZPLNM(String sHRT_BZPLNM) {
		SHRT_BZPLNM = sHRT_BZPLNM;
	}



	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}



	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}



	public String getTEAMNM() {
		return TEAMNM;
	}



	public void setTEAMNM(String tEAMNM) {
		TEAMNM = tEAMNM;
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



	public String getDVYAA_C() {
		return DVYAA_C;
	}



	public void setDVYAA_C(String dVYAA_C) {
		DVYAA_C = dVYAA_C;
	}



	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}



	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}



	public String getDDLY_YN() {
		return DDLY_YN;
	}



	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}



	public String getDVY_VHC_DSC() {
		return DVY_VHC_DSC;
	}



	public void setDVY_VHC_DSC(String dVY_VHC_DSC) {
		DVY_VHC_DSC = dVY_VHC_DSC;
	}



	public String getSPY_TPC() {
		return SPY_TPC;
	}



	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}



	public String getVHCNO() {
		return VHCNO;
	}



	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}



	public String getDVY_RQR_CNTN() {
		return DVY_RQR_CNTN;
	}



	public void setDVY_RQR_CNTN(String dVY_RQR_CNTN) {
		DVY_RQR_CNTN = dVY_RQR_CNTN;
	}



	public long getTOTAL_ODR_AM() {
		return TOTAL_ODR_AM;
	}



	public void setTOTAL_ODR_AM(long tOTAL_ODR_AM) {
		TOTAL_ODR_AM = tOTAL_ODR_AM;
	}



	public long getTOTAL_ODR_VAT() {
		return TOTAL_ODR_VAT;
	}



	public void setTOTAL_ODR_VAT(long tOTAL_ODR_VAT) {
		TOTAL_ODR_VAT = tOTAL_ODR_VAT;
	}



	public long getTOTAL_VCBT_AM() {
		return TOTAL_VCBT_AM;
	}



	public void setTOTAL_VCBT_AM(long tOTAL_VCBT_AM) {
		TOTAL_VCBT_AM = tOTAL_VCBT_AM;
	}



	public long getTOTAL_VCBX_AM() {
		return TOTAL_VCBX_AM;
	}



	public void setTOTAL_VCBX_AM(long tOTAL_VCBX_AM) {
		TOTAL_VCBX_AM = tOTAL_VCBX_AM;
	}



	public String getEMRG_ODR_YN() {
		return EMRG_ODR_YN;
	}



	public void setEMRG_ODR_YN(String eMRG_ODR_YN) {
		EMRG_ODR_YN = eMRG_ODR_YN;
	}



	public String getGRS_SOJU_YN() {
		return GRS_SOJU_YN;
	}



	public void setGRS_SOJU_YN(String gRS_SOJU_YN) {
		GRS_SOJU_YN = gRS_SOJU_YN;
	}



	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}



	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}



	public String getSPYPL_NA_TEAM_C() {
		return SPYPL_NA_TEAM_C;
	}



	public void setSPYPL_NA_TEAM_C(String sPYPL_NA_TEAM_C) {
		SPYPL_NA_TEAM_C = sPYPL_NA_TEAM_C;
	}



	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}



	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}



	public String getDVYAA_NA_TEAM_C() {
		return DVYAA_NA_TEAM_C;
	}



	public void setDVYAA_NA_TEAM_C(String dVYAA_NA_TEAM_C) {
		DVYAA_NA_TEAM_C = dVYAA_NA_TEAM_C;
	}



	public String getODR_DSC() {
		return ODR_DSC;
	}



	public void setODR_DSC(String oDR_DSC) {
		ODR_DSC = oDR_DSC;
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



	public String getFS_RMS_DT() {
		return FS_RMS_DT;
	}



	public void setFS_RMS_DT(String fS_RMS_DT) {
		FS_RMS_DT = fS_RMS_DT;
	}



	public String getFS_RMS_HR() {
		return FS_RMS_HR;
	}



	public void setFS_RMS_HR(String fS_RMS_HR) {
		FS_RMS_HR = fS_RMS_HR;
	}



	public String getLS_RMS_DT() {
		return LS_RMS_DT;
	}



	public void setLS_RMS_DT(String lS_RMS_DT) {
		LS_RMS_DT = lS_RMS_DT;
	}



	public String getLS_RMS_HR() {
		return LS_RMS_HR;
	}



	public void setLS_RMS_HR(String lS_RMS_HR) {
		LS_RMS_HR = lS_RMS_HR;
	}



	public String getHDN_ODRPL_NA_TRPL_C() {
		return HDN_ODRPL_NA_TRPL_C;
	}



	public void setHDN_ODRPL_NA_TRPL_C(String hDN_ODRPL_NA_TRPL_C) {
		HDN_ODRPL_NA_TRPL_C = hDN_ODRPL_NA_TRPL_C;
	}



	public String getHDN_ODRPL_NA_TEAM_C() {
		return HDN_ODRPL_NA_TEAM_C;
	}



	public void setHDN_ODRPL_NA_TEAM_C(String hDN_ODRPL_NA_TEAM_C) {
		HDN_ODRPL_NA_TEAM_C = hDN_ODRPL_NA_TEAM_C;
	}



	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}



	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}



	public long getTOTAL_ODR_QT() {
		return TOTAL_ODR_QT;
	}



	public void setTOTAL_ODR_QT(long tOTAL_ODR_QT) {
		TOTAL_ODR_QT = tOTAL_ODR_QT;
	}



	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}



	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
	}



	public String getMNGT_NA_TEAM_C() {
		return MNGT_NA_TEAM_C;
	}



	public void setMNGT_NA_TEAM_C(String mNGT_NA_TEAM_C) {
		MNGT_NA_TEAM_C = mNGT_NA_TEAM_C;
	}



	public String getMNGT_NA_TR_TPC() {
		return MNGT_NA_TR_TPC;
	}



	public void setMNGT_NA_TR_TPC(String mNGT_NA_TR_TPC) {
		MNGT_NA_TR_TPC = mNGT_NA_TR_TPC;
	}



	public String getADJPL_NA_TRPL_C() {
		return ADJPL_NA_TRPL_C;
	}



	public void setADJPL_NA_TRPL_C(String aDJPL_NA_TRPL_C) {
		ADJPL_NA_TRPL_C = aDJPL_NA_TRPL_C;
	}



	public String getADJPL_NA_TEAM_C() {
		return ADJPL_NA_TEAM_C;
	}



	public void setADJPL_NA_TEAM_C(String aDJPL_NA_TEAM_C) {
		ADJPL_NA_TEAM_C = aDJPL_NA_TEAM_C;
	}



	public String getMNGT_TR_REL_AMNNO() {
		return MNGT_TR_REL_AMNNO;
	}



	public void setMNGT_TR_REL_AMNNO(String mNGT_TR_REL_AMNNO) {
		MNGT_TR_REL_AMNNO = mNGT_TR_REL_AMNNO;
	}



	public String getCSER_TR_REL_AMNNO() {
		return CSER_TR_REL_AMNNO;
	}



	public void setCSER_TR_REL_AMNNO(String cSER_TR_REL_AMNNO) {
		CSER_TR_REL_AMNNO = cSER_TR_REL_AMNNO;
	}



	public String getACTL_SPYPL_NA_TRPL_C() {
		return ACTL_SPYPL_NA_TRPL_C;
	}



	public void setACTL_SPYPL_NA_TRPL_C(String aCTL_SPYPL_NA_TRPL_C) {
		ACTL_SPYPL_NA_TRPL_C = aCTL_SPYPL_NA_TRPL_C;
	}



	public String getROGO_INF_CRT_DSC() {
		return ROGO_INF_CRT_DSC;
	}



	public void setROGO_INF_CRT_DSC(String rOGO_INF_CRT_DSC) {
		ROGO_INF_CRT_DSC = rOGO_INF_CRT_DSC;
	}



	public String getTEMP_YN() {
		return TEMP_YN;
	}



	public void setTEMP_YN(String tEMP_YN) {
		TEMP_YN = tEMP_YN;
	}



	public String getMB_ID() {
		return MB_ID;
	}



	public void setMB_ID(String mB_ID) {
		MB_ID = mB_ID;
	}



	public List<OrderOrdersDetailVO> getDetailVoList() {
		return detailVoList;
	}



	public void setDetailVoList(List<OrderOrdersDetailVO> detailVoList) {
		this.detailVoList = detailVoList;
	}



	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
}
