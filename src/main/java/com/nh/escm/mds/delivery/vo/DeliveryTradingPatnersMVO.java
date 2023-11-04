package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 거래처별 조회
 * @author swha
 *
 */
public class DeliveryTradingPatnersMVO  implements Serializable {
	
	private static final long serialVersionUID = 20150827L;
	
	private String RN;
	private String SPYPL_NA_TRPL_C;//공급처
	private String SPYPL_NA_TRPL_N;//공급처명
	private String RVOPL_NA_TRPL_C;//수주처
	private String RVOPL_NA_TRPL_N;//수주처명
	private String DVYAA_NA_TRPL_C;//배송처
	private String DVYAA_NA_TRPL_N;//배송처명
	private String NA_DVY_PLASH_SLPNO;//배송예정서번호
	private String DVY_PLA_DT;//배송예정일
	private long DVY_AM;//배송예정금액
	private long DVY_VAT;//부가세
	private String CSER_CTR_TPC;//수요자계약유형
	private String FSRGMN_ENO;//최초등록자
	private long DVY_SSDY;//배송장려금
	private double DVY_SSDYRT;//배송장려금율
	private long BYAM;//매입확정수량
	private long BYNG_QT;//매입확정금액
	private String SLP_DT;//매입전표일자
	private String NA_SLPNO;//매입전표번호
	private String ODRPL_NA_TRPL_C;//발주처
	private String ODRPL_NA_TRPL_N;//발주처명
	private String DDLY_YN;//직송여부
	private String ODRPL_NA_TEAM_N;//발주처팀
	private long STS_DVY_PLA_QT;// 배송예정수량
	private long STS_DVY_AM;//배송예정금액
	private long STS_BYAM;//매입수량
	private long STS_BYNG_QT;//매입금액
	private String GRS_SOJU_YN;//지방소주여부
	private String DVY_PLA_STS;//배송예정상태
	private String LS_CMENO;//최종변경자
	private String LSCHG_DTM;//최종변경시간
	private String RMK_CNTN;//비고
	private String SLPNO_RMS_DTM;//최초등록일시
	private String MBCO_TYPE;//본지사구분
	private String TRU_AGCY_NA_TRPL_C; //위탁대리점경제코드
	
	public String getSLPNO_RMS_DTM() {
		return SLPNO_RMS_DTM;
	}




	public void setSLPNO_RMS_DTM(String sLPNO_RMS_DTM) {
		SLPNO_RMS_DTM = sLPNO_RMS_DTM;
	}




	public String getRMK_CNTN() {
		return RMK_CNTN;
	}




	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}




	private List<DeliveryTradingPatnersPrintDVO> list;
	



	public String getRN() {
		return RN;
	}




	public void setRN(String rN) {
		RN = rN;
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




	public long getDVY_AM() {
		return DVY_AM;
	}




	public void setDVY_AM(long dVY_AM) {
		DVY_AM = dVY_AM;
	}




	public long getDVY_VAT() {
		return DVY_VAT;
	}




	public void setDVY_VAT(long dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}




	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}




	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}




	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}




	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}




	public long getDVY_SSDY() {
		return DVY_SSDY;
	}




	public void setDVY_SSDY(long dVY_SSDY) {
		DVY_SSDY = dVY_SSDY;
	}




	public double getDVY_SSDYRT() {
		return DVY_SSDYRT;
	}




	public void setDVY_SSDYRT(double dVY_SSDYRT) {
		DVY_SSDYRT = dVY_SSDYRT;
	}




	public long getBYAM() {
		return BYAM;
	}




	public void setBYAM(long bYAM) {
		BYAM = bYAM;
	}




	public long getBYNG_QT() {
		return BYNG_QT;
	}




	public void setBYNG_QT(long bYNG_QT) {
		BYNG_QT = bYNG_QT;
	}




	public String getSLP_DT() {
		return SLP_DT;
	}




	public void setSLP_DT(String sLP_DT) {
		SLP_DT = sLP_DT;
	}




	public String getNA_SLPNO() {
		return NA_SLPNO;
	}




	public void setNA_SLPNO(String nA_SLPNO) {
		NA_SLPNO = nA_SLPNO;
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




	public String getDDLY_YN() {
		return DDLY_YN;
	}




	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}




	public String getODRPL_NA_TEAM_N() {
		return ODRPL_NA_TEAM_N;
	}




	public void setODRPL_NA_TEAM_N(String oDRPL_NA_TEAM_N) {
		ODRPL_NA_TEAM_N = oDRPL_NA_TEAM_N;
	}




	public long getSTS_DVY_PLA_QT() {
		return STS_DVY_PLA_QT;
	}




	public void setSTS_DVY_PLA_QT(long sTS_DVY_PLA_QT) {
		STS_DVY_PLA_QT = sTS_DVY_PLA_QT;
	}




	public long getSTS_DVY_AM() {
		return STS_DVY_AM;
	}




	public void setSTS_DVY_AM(long sTS_DVY_AM) {
		STS_DVY_AM = sTS_DVY_AM;
	}




	public long getSTS_BYAM() {
		return STS_BYAM;
	}




	public void setSTS_BYAM(long sTS_BYAM) {
		STS_BYAM = sTS_BYAM;
	}




	public long getSTS_BYNG_QT() {
		return STS_BYNG_QT;
	}




	public void setSTS_BYNG_QT(long sTS_BYNG_QT) {
		STS_BYNG_QT = sTS_BYNG_QT;
	}




	public String getGRS_SOJU_YN() {
		return GRS_SOJU_YN;
	}




	public void setGRS_SOJU_YN(String gRS_SOJU_YN) {
		GRS_SOJU_YN = gRS_SOJU_YN;
	}




	public String getDVY_PLA_STS() {
		return DVY_PLA_STS;
	}




	public void setDVY_PLA_STS(String dVY_PLA_STS) {
		DVY_PLA_STS = dVY_PLA_STS;
	}




	public String getLS_CMENO() {
		return LS_CMENO;
	}




	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}




	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}




	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}




	public List<DeliveryTradingPatnersPrintDVO> getList() {
		return list;
	}




	public void setList(List<DeliveryTradingPatnersPrintDVO> list) {
		this.list = list;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}




	public String getMBCO_TYPE() {
		return MBCO_TYPE;
	}




	public void setMBCO_TYPE(String mBCO_TYPE) {
		MBCO_TYPE = mBCO_TYPE;
	}




	public String getTRU_AGCY_NA_TRPL_C() {
		return TRU_AGCY_NA_TRPL_C;
	}




	public void setTRU_AGCY_NA_TRPL_C(String tRU_AGCY_NA_TRPL_C) {
		TRU_AGCY_NA_TRPL_C = tRU_AGCY_NA_TRPL_C;
	}
	


	

	
}
