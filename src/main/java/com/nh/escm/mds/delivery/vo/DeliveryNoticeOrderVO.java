package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정서 기본
 * @author swha
 *
 */
public class DeliveryNoticeOrderVO  implements Serializable {
	
	private static final long serialVersionUID = 20150713L;
	
	private String DML_CODE;/* CRUD Code */
	private String EDI_TYPE;
	private String SPYPL_NA_TRPL_C;/* 공급처경제통합거래처코드 */
	private String DVYAA_NA_TRPL_C;/* 배송지경제통합거래처코드 */
	private String NA_DVY_PLASH_SLPNO;/* 경제통합배송예정서전표번호 */
	private String SPYPL_NA_TEAM_C;/* 공급처경제통합팀코드 */
	private String ODRPL_NA_TRPL_C;/* 발주처경제통합거래처코드 */
	private String ODRPL_NA_TEAM_C;/* 발주처경제통합팀코드 */
	private String RVOPL_NA_TRPL_C;/* 수주처경제통합거래처코드 */
	private String RVOPL_NA_TEAM_C;/* 수주처경제통합팀코드 */
	private String ADJPL_NA_TRPL_C;/* 정산처경제통합거래처코드 */
	private String ADJPL_NA_TEAM_C;/* 정산처경제통합팀코드 */
	private String MNGT_NA_TR_TPC;/* 주관경제통합거래유형코드 */
	private String MNGT_NA_TRPL_C;/* 주관경제통합거래처코드 */
	private String MNGT_NA_TEAM_C;/* 주관경제통합팀코드 */
	private String DVYAA_NA_TEAM_C;/* 배송지경제통합팀코드 */
	private String DVYAA_C;/* 배송지코드 */
	private String DVY_PLA_DT;/* 배송예정일자 */
	private String DDLY_YN;/* 직송여부 */
	private String CSER_CTR_TPC;/* 수요자계약유형코드 */
	private String SPY_TPC;/* 공급유형코드 */
	private String SLGT_ETR_DSC;/* 매취수탁구분코드 */
	private String NA_WRS_LCLC;/* 경제통합상품대분류코드 */
	private String NA_WRS_MCLC;/* 경제통합상품중분류코드 */
	private String DVY_VHC_DSC;/* 배송차량구분코드 */
	private String VHCNO;/* 차량번호 */
	private String ACCP_C;/* 인수도코드 */
	private String NA_USR_SYS_KDC;/* 경제통합사용자시스템종류코드 */
	private double DVY_PLA_QT;/* 배송예정수량 */
	private double DVY_AM;/* 배송금액 */
	private double DVY_VAT;/* 배송부가세 */
	private double DVY_SSDY;/* 배송장려금 */
	private double DVY_TROT_FEE;/* 배송환급수수료 */
	private double DVY_PHD_FEE;/* 배송물류수수료 */
	private double DVY_FAR_ASTCS;/* 배송운임보조비 */
	private int WD_PLTT_QT;/* 목재파렛트수량 */
	private int PSC_PLTT_QT;/* 플라스틱파렛트수량 */
	private String BUY_UPR_DSC;/* 구매단가구분코드 */
	private String BYNG_UPR_GR_C;/* 매입단가군코드 */
	private String BUY_BZ_METC;/* 구매사업방식코드 */
	private String RMK_CNTN;/* 비고내용 */
	private String TEMP_YN;/* 임시저장여부 */
	private String FSRG_DTM;/* 최초등록일시 */
	private String LSCHG_DTM;/* 최종변경일시 */
	private String PRC_YN;/* 경통전송여부 */
	private String RSP_C_CNTN;/* 결과수신 */
	private String RES_CODE;/* 응답코드 */
	private String RES_DESC;/* 응답결과내용 */
	private long VCBT_AM; /* 공병금액 */
	private long VCBX_AM; /* 공상자금액 */
	private String DVY_PLASH_KDC;/* 배송예정서 종류 코드 */
	private String FSRGMN_ENO; /* 최초등록자개인번호 */
	private String GRS_SOJU_YN;/* 지방소주여부 */
	private String MNGT_TR_REL_AMNNO;
	private String CSER_TR_REL_AMNNO;
	private String DOC_RMS_LOC_DSC;// WEB/EDI
	private int HDNGCN;//항목
	private String WK_DS;//작업구분 I(insert), U(update)
	private String NORDER_YN;//무발주배송여부(0, 1)
	private String DVY_PLASH_STSC;//배송예정상태
	private String LS_CMENO;//최종변경자개인번호
	private String EDI_IF_ID;//인터페이스 아이디
	private String TRU_AGCY_NA_TRPL_C;

	private List<DeliveryNoticeOrderDetailVO> dnodVoList; /* 배송예정서 상세 */
	
	
	





	public String getDML_CODE() {
		return DML_CODE;
	}








	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}








	public String getEDI_TYPE() {
		return EDI_TYPE;
	}








	public void setEDI_TYPE(String eDI_TYPE) {
		EDI_TYPE = eDI_TYPE;
	}








	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}








	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}








	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}








	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}








	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}








	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}








	public String getSPYPL_NA_TEAM_C() {
		return SPYPL_NA_TEAM_C;
	}








	public void setSPYPL_NA_TEAM_C(String sPYPL_NA_TEAM_C) {
		SPYPL_NA_TEAM_C = sPYPL_NA_TEAM_C;
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








	public String getMNGT_NA_TR_TPC() {
		return MNGT_NA_TR_TPC;
	}








	public void setMNGT_NA_TR_TPC(String mNGT_NA_TR_TPC) {
		MNGT_NA_TR_TPC = mNGT_NA_TR_TPC;
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








	public String getDVYAA_NA_TEAM_C() {
		return DVYAA_NA_TEAM_C;
	}








	public void setDVYAA_NA_TEAM_C(String dVYAA_NA_TEAM_C) {
		DVYAA_NA_TEAM_C = dVYAA_NA_TEAM_C;
	}








	public String getDVYAA_C() {
		return DVYAA_C;
	}








	public void setDVYAA_C(String dVYAA_C) {
		DVYAA_C = dVYAA_C;
	}








	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}








	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}








	public String getDDLY_YN() {
		return DDLY_YN;
	}








	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}








	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}








	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}








	public String getSPY_TPC() {
		return SPY_TPC;
	}








	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}








	public String getSLGT_ETR_DSC() {
		return SLGT_ETR_DSC;
	}








	public void setSLGT_ETR_DSC(String sLGT_ETR_DSC) {
		SLGT_ETR_DSC = sLGT_ETR_DSC;
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








	public String getDVY_VHC_DSC() {
		return DVY_VHC_DSC;
	}








	public void setDVY_VHC_DSC(String dVY_VHC_DSC) {
		DVY_VHC_DSC = dVY_VHC_DSC;
	}








	public String getVHCNO() {
		return VHCNO;
	}








	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}








	public String getACCP_C() {
		return ACCP_C;
	}








	public void setACCP_C(String aCCP_C) {
		ACCP_C = aCCP_C;
	}








	public String getNA_USR_SYS_KDC() {
		return NA_USR_SYS_KDC;
	}








	public void setNA_USR_SYS_KDC(String nA_USR_SYS_KDC) {
		NA_USR_SYS_KDC = nA_USR_SYS_KDC;
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








	public double getDVY_VAT() {
		return DVY_VAT;
	}








	public void setDVY_VAT(double dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}








	public double getDVY_SSDY() {
		return DVY_SSDY;
	}








	public void setDVY_SSDY(double dVY_SSDY) {
		DVY_SSDY = dVY_SSDY;
	}








	public double getDVY_TROT_FEE() {
		return DVY_TROT_FEE;
	}








	public void setDVY_TROT_FEE(double dVY_TROT_FEE) {
		DVY_TROT_FEE = dVY_TROT_FEE;
	}








	public double getDVY_PHD_FEE() {
		return DVY_PHD_FEE;
	}








	public void setDVY_PHD_FEE(double dVY_PHD_FEE) {
		DVY_PHD_FEE = dVY_PHD_FEE;
	}








	public double getDVY_FAR_ASTCS() {
		return DVY_FAR_ASTCS;
	}








	public void setDVY_FAR_ASTCS(double dVY_FAR_ASTCS) {
		DVY_FAR_ASTCS = dVY_FAR_ASTCS;
	}








	public int getWD_PLTT_QT() {
		return WD_PLTT_QT;
	}








	public void setWD_PLTT_QT(int wD_PLTT_QT) {
		WD_PLTT_QT = wD_PLTT_QT;
	}








	public int getPSC_PLTT_QT() {
		return PSC_PLTT_QT;
	}








	public void setPSC_PLTT_QT(int pSC_PLTT_QT) {
		PSC_PLTT_QT = pSC_PLTT_QT;
	}








	public String getBUY_UPR_DSC() {
		return BUY_UPR_DSC;
	}








	public void setBUY_UPR_DSC(String bUY_UPR_DSC) {
		BUY_UPR_DSC = bUY_UPR_DSC;
	}








	public String getBYNG_UPR_GR_C() {
		return BYNG_UPR_GR_C;
	}








	public void setBYNG_UPR_GR_C(String bYNG_UPR_GR_C) {
		BYNG_UPR_GR_C = bYNG_UPR_GR_C;
	}








	public String getBUY_BZ_METC() {
		return BUY_BZ_METC;
	}








	public void setBUY_BZ_METC(String bUY_BZ_METC) {
		BUY_BZ_METC = bUY_BZ_METC;
	}








	public String getRMK_CNTN() {
		return RMK_CNTN;
	}








	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}








	public String getTEMP_YN() {
		return TEMP_YN;
	}








	public void setTEMP_YN(String tEMP_YN) {
		TEMP_YN = tEMP_YN;
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








	public String getPRC_YN() {
		return PRC_YN;
	}








	public void setPRC_YN(String pRC_YN) {
		PRC_YN = pRC_YN;
	}








	public String getRSP_C_CNTN() {
		return RSP_C_CNTN;
	}








	public void setRSP_C_CNTN(String rSP_C_CNTN) {
		RSP_C_CNTN = rSP_C_CNTN;
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








	public long getVCBT_AM() {
		return VCBT_AM;
	}








	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}








	public long getVCBX_AM() {
		return VCBX_AM;
	}








	public void setVCBX_AM(long vCBX_AM) {
		VCBX_AM = vCBX_AM;
	}








	public String getDVY_PLASH_KDC() {
		return DVY_PLASH_KDC;
	}








	public void setDVY_PLASH_KDC(String dVY_PLASH_KDC) {
		DVY_PLASH_KDC = dVY_PLASH_KDC;
	}








	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}








	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}








	public String getGRS_SOJU_YN() {
		return GRS_SOJU_YN;
	}








	public void setGRS_SOJU_YN(String gRS_SOJU_YN) {
		GRS_SOJU_YN = gRS_SOJU_YN;
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








	public String getDOC_RMS_LOC_DSC() {
		return DOC_RMS_LOC_DSC;
	}








	public void setDOC_RMS_LOC_DSC(String dOC_RMS_LOC_DSC) {
		DOC_RMS_LOC_DSC = dOC_RMS_LOC_DSC;
	}








	public int getHDNGCN() {
		return HDNGCN;
	}








	public void setHDNGCN(int hDNGCN) {
		HDNGCN = hDNGCN;
	}








	public String getWK_DS() {
		return WK_DS;
	}








	public void setWK_DS(String wK_DS) {
		WK_DS = wK_DS;
	}








	public String getNORDER_YN() {
		return NORDER_YN;
	}








	public void setNORDER_YN(String nORDER_YN) {
		NORDER_YN = nORDER_YN;
	}








	public String getDVY_PLASH_STSC() {
		return DVY_PLASH_STSC;
	}








	public void setDVY_PLASH_STSC(String dVY_PLASH_STSC) {
		DVY_PLASH_STSC = dVY_PLASH_STSC;
	}








	public String getLS_CMENO() {
		return LS_CMENO;
	}








	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}








	public String getEDI_IF_ID() {
		return EDI_IF_ID;
	}








	public void setEDI_IF_ID(String eDI_IF_ID) {
		EDI_IF_ID = eDI_IF_ID;
	}








	







	public List<DeliveryNoticeOrderDetailVO> getDnodVoList() {
		return dnodVoList;
	}








	public void setDnodVoList(List<DeliveryNoticeOrderDetailVO> dnodVoList) {
		this.dnodVoList = dnodVoList;
	}








	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}








	public String getTRU_AGCY_NA_TRPL_C() {
		return TRU_AGCY_NA_TRPL_C;
	}








	public void setTRU_AGCY_NA_TRPL_C(String tRU_AGCY_NA_TRPL_C) {
		TRU_AGCY_NA_TRPL_C = tRU_AGCY_NA_TRPL_C;
	}

	
}
