package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;

/**
 * 발주정보
 * @author swha
 *
 */
public class NoticeOrderVO implements Serializable {
	
	private static final long serialVersionUID = 20150709L;
	
	private String ODRPL_NA_TRPL_C; /* 발주거래처코드 */
	private String ODRPL_NA_TEAM_C; /* 발주팀코드 */
	private String ODR_DT; /* 발주일자 */
	private String ODR_SLPNO; /* 발주전표번호 */
	private String SHRT_BZPLNM; /* 발주처명 */
	private String TEAMNM; /* 발주처팀명 */
	private String DVYAA_C; /* 배송지 코드 */
	private String CSER_CTR_TPC; /* 계약유형 */
	private String DVY_RQR_CNTN; /* 납품요청일자(배송요청일자) */
	private String DVY_VHC_DSC; /* 배송차량구분 */
	private String DVY_VHC; /* 배송차량 */
	private String DVY_VHC_STS; /* 배송차량상태 */
	private double TOTAL_ODR_AM; /* 발주총액 */
	private double TOTAL_ODR_VAT; /* 발주부가세 */
	private double TOTAL_DVY_AM; /* 배송금액 */
	private double TOTAL_DVY_VAT; /* 배송부가세 */
	private String SPY_TPC; /* 공급유형 */
	private String IS_OD_BE_ORDER; /* 예약행사여부*/
	private String NA_ODR_STS_DSC; /* 배송예정서 상태 */
	private String VHCNO; /* 배송차량번호 */
	private String DVY_PLA_DT; /* 배송예정일자 */
	private String DVY_RQR_DT; /* 배송요청일자 */
	private String SLGT_ETR_DSC; /* 매취수탁구분 */
	private String NA_STL_TP_DSC;/* 결제유형구분 */
	private double DVY_FAR_ASTCS; /* 운임보조비 */
	private String SPYPL_NA_TRPL_C; /* 공급처거래처코드 */
	private String SPYPL_NA_TRPL_N; /* 공급처거래처명 */
	private String SPYPL_NA_TEAM_C; /* 공급처팀코드 */
	private String RVOPL_NA_TRPL_C; /* 수주처거래처코드*/
	private String RVOPL_NA_TEAM_C;/* 수주처팀코드*/
	private String DVYAA_NA_TRPL_C; /* 배송처거래처코드*/
	private String DVYAA_NA_TEAM_C;/* 배송처팀코드*/
	private double DLY_PLA_QT;/* 배송예정수량 */
	private String NA_DVY_PLASH_SLPNO; /* 배송예정서전표번호 */
	private long TOTAL_VCBT_AM; /* 공상자 금액*/
	private long TOTAL_VCBX_AM; /* 공상자 금액*/
	private long TOTAL_DVY_SSDY;/* 배송장려금 */
	private String CSER_NA_TRPL_C;/* 수요자거래처코드 */
	private String CSER_NA_TEAM_C;/* 수요자거래처팀코드 */
	private String MNGT_NA_TRPL_C;/* 주관거래처코드 */
	private String MNGT_NA_TEAM_C;/* 주관거래처팀코드 */
	private String MNGT_NA_TR_TPC;/* 주관거래유형코드 */
	private String GRS_SOJU_YN;
	private String NA_WRS_LCLC;/*상품대분류*/
	private String NA_WRS_MCLC;/*상품중분류*/
	private String SPY_PSB_DT;/* 공급가능일자 */
	private String ADJPL_NA_TRPL_C;
	private String ADJPL_NA_TEAM_C;
	private String MNGT_TR_REL_AMNNO; /* 주관거래관계관리번호 */
	private String CSER_TR_REL_AMNNO; /* 수요자거래관계관리번호 */
	private String LDTM_DDS;/* 리드타임일수 */
	private String DDLY_YN;//직송여부
	private String DVY_PLASH_STSC;//배송예정서상태
	private String DVY_PLASH_STSC_N;//배송예정서상태
	private String NORDER_YN;//무발주배송여부
	private String PGNM;//가격군명
	private String PRC_YN;//경통전송여부
	private String ROTS_FLEX_PR_APL_YN;//탄력가격적용여부
	private String TEMP_YN;/* 임시저장여부 */
	private String RMK_CNTN;//비고
	private String RES_DESC;/* 응답내용 */
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}

	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}





	private List<NoticeOrderDetailVO> list;
	
	
	


	public String getRES_DESC() {
		return RES_DESC;
	}




	public void setRES_DESC(String rES_DESC) {
		RES_DESC = rES_DESC;
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




	public String getTEAMNM() {
		return TEAMNM;
	}




	public void setTEAMNM(String tEAMNM) {
		TEAMNM = tEAMNM;
	}




	public String getDVYAA_C() {
		return DVYAA_C;
	}




	public void setDVYAA_C(String dVYAA_C) {
		DVYAA_C = dVYAA_C;
	}




	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}




	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}




	public String getDVY_RQR_CNTN() {
		return DVY_RQR_CNTN;
	}




	public void setDVY_RQR_CNTN(String dVY_RQR_CNTN) {
		DVY_RQR_CNTN = dVY_RQR_CNTN;
	}




	public String getDVY_VHC_DSC() {
		return DVY_VHC_DSC;
	}




	public void setDVY_VHC_DSC(String dVY_VHC_DSC) {
		DVY_VHC_DSC = dVY_VHC_DSC;
	}




	public String getDVY_VHC() {
		return DVY_VHC;
	}




	public void setDVY_VHC(String dVY_VHC) {
		DVY_VHC = dVY_VHC;
	}




	public String getDVY_VHC_STS() {
		return DVY_VHC_STS;
	}




	public void setDVY_VHC_STS(String dVY_VHC_STS) {
		DVY_VHC_STS = dVY_VHC_STS;
	}




	public double getTOTAL_ODR_AM() {
		return TOTAL_ODR_AM;
	}




	public void setTOTAL_ODR_AM(double tOTAL_ODR_AM) {
		TOTAL_ODR_AM = tOTAL_ODR_AM;
	}




	public double getTOTAL_ODR_VAT() {
		return TOTAL_ODR_VAT;
	}




	public void setTOTAL_ODR_VAT(double tOTAL_ODR_VAT) {
		TOTAL_ODR_VAT = tOTAL_ODR_VAT;
	}




	public double getTOTAL_DVY_AM() {
		return TOTAL_DVY_AM;
	}




	public void setTOTAL_DVY_AM(double tOTAL_DVY_AM) {
		TOTAL_DVY_AM = tOTAL_DVY_AM;
	}




	public double getTOTAL_DVY_VAT() {
		return TOTAL_DVY_VAT;
	}




	public void setTOTAL_DVY_VAT(double tOTAL_DVY_VAT) {
		TOTAL_DVY_VAT = tOTAL_DVY_VAT;
	}




	public String getSPY_TPC() {
		return SPY_TPC;
	}




	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}




	public String getIS_OD_BE_ORDER() {
		return IS_OD_BE_ORDER;
	}




	public void setIS_OD_BE_ORDER(String iS_OD_BE_ORDER) {
		IS_OD_BE_ORDER = iS_OD_BE_ORDER;
	}




	public String getNA_ODR_STS_DSC() {
		return NA_ODR_STS_DSC;
	}




	public void setNA_ODR_STS_DSC(String nA_ODR_STS_DSC) {
		NA_ODR_STS_DSC = nA_ODR_STS_DSC;
	}




	public String getVHCNO() {
		return VHCNO;
	}




	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}




	public String getDVY_PLA_DT() {
		return DVY_PLA_DT;
	}




	public void setDVY_PLA_DT(String dVY_PLA_DT) {
		DVY_PLA_DT = dVY_PLA_DT;
	}




	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}




	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}




	public String getSLGT_ETR_DSC() {
		return SLGT_ETR_DSC;
	}




	public void setSLGT_ETR_DSC(String sLGT_ETR_DSC) {
		SLGT_ETR_DSC = sLGT_ETR_DSC;
	}




	public String getNA_STL_TP_DSC() {
		return NA_STL_TP_DSC;
	}




	public void setNA_STL_TP_DSC(String nA_STL_TP_DSC) {
		NA_STL_TP_DSC = nA_STL_TP_DSC;
	}




	public double getDVY_FAR_ASTCS() {
		return DVY_FAR_ASTCS;
	}




	public void setDVY_FAR_ASTCS(double dVY_FAR_ASTCS) {
		DVY_FAR_ASTCS = dVY_FAR_ASTCS;
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




	public double getDLY_PLA_QT() {
		return DLY_PLA_QT;
	}




	public void setDLY_PLA_QT(double dLY_PLA_QT) {
		DLY_PLA_QT = dLY_PLA_QT;
	}




	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}




	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
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




	public long getTOTAL_DVY_SSDY() {
		return TOTAL_DVY_SSDY;
	}




	public void setTOTAL_DVY_SSDY(long tOTAL_DVY_SSDY) {
		TOTAL_DVY_SSDY = tOTAL_DVY_SSDY;
	}




	public String getCSER_NA_TRPL_C() {
		return CSER_NA_TRPL_C;
	}




	public void setCSER_NA_TRPL_C(String cSER_NA_TRPL_C) {
		CSER_NA_TRPL_C = cSER_NA_TRPL_C;
	}




	public String getCSER_NA_TEAM_C() {
		return CSER_NA_TEAM_C;
	}




	public void setCSER_NA_TEAM_C(String cSER_NA_TEAM_C) {
		CSER_NA_TEAM_C = cSER_NA_TEAM_C;
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




	public String getGRS_SOJU_YN() {
		return GRS_SOJU_YN;
	}




	public void setGRS_SOJU_YN(String gRS_SOJU_YN) {
		GRS_SOJU_YN = gRS_SOJU_YN;
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




	public String getSPY_PSB_DT() {
		return SPY_PSB_DT;
	}




	public void setSPY_PSB_DT(String sPY_PSB_DT) {
		SPY_PSB_DT = sPY_PSB_DT;
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




	public String getLDTM_DDS() {
		return LDTM_DDS;
	}




	public void setLDTM_DDS(String lDTM_DDS) {
		LDTM_DDS = lDTM_DDS;
	}




	public String getDDLY_YN() {
		return DDLY_YN;
	}




	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}




	public String getDVY_PLASH_STSC() {
		return DVY_PLASH_STSC;
	}




	public void setDVY_PLASH_STSC(String dVY_PLASH_STSC) {
		DVY_PLASH_STSC = dVY_PLASH_STSC;
	}




	public String getDVY_PLASH_STSC_N() {
		return DVY_PLASH_STSC_N;
	}




	public void setDVY_PLASH_STSC_N(String dVY_PLASH_STSC_N) {
		DVY_PLASH_STSC_N = dVY_PLASH_STSC_N;
	}




	public String getNORDER_YN() {
		return NORDER_YN;
	}




	public void setNORDER_YN(String nORDER_YN) {
		NORDER_YN = nORDER_YN;
	}




	public String getPGNM() {
		return PGNM;
	}




	public void setPGNM(String pGNM) {
		PGNM = pGNM;
	}




	public String getPRC_YN() {
		return PRC_YN;
	}




	public void setPRC_YN(String pRC_YN) {
		PRC_YN = pRC_YN;
	}




	public String getROTS_FLEX_PR_APL_YN() {
		return ROTS_FLEX_PR_APL_YN;
	}




	public void setROTS_FLEX_PR_APL_YN(String rOTS_FLEX_PR_APL_YN) {
		ROTS_FLEX_PR_APL_YN = rOTS_FLEX_PR_APL_YN;
	}




	public String getTEMP_YN() {
		return TEMP_YN;
	}




	public void setTEMP_YN(String tEMP_YN) {
		TEMP_YN = tEMP_YN;
	}




	public List<NoticeOrderDetailVO> getList() {
		return list;
	}




	public void setList(List<NoticeOrderDetailVO> list) {
		this.list = list;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
}
