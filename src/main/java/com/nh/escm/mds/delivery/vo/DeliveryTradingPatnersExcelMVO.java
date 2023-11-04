package com.nh.escm.mds.delivery.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 거래처별 Excel Master
 * @author swha
 *
 */
public class DeliveryTradingPatnersExcelMVO  implements Serializable {
	
	private static final long serialVersionUID = 20150908L;
	
	private String SPYPL_NA_TRPL_C;//공급처
	private String RVOPL_NA_TRPL_C;//수주처
	private String RVOPL_NA_TRPL_N;//수주처명
	private String DVYAA_NA_TRPL_C;//배송처
	private String DVYAA_NA_TRPL_N;//배송처명
	private String NA_DVY_PLASH_SLPNO;//배송예정서번호
	private String DVY_PLA_DT;//배송예정일
	private String DVY_AM;//배송예정금액
	private String DVY_VAT;//배송예정부가세
	private String CSER_CTR_TPC;//수요자계약유형
	private String SPYPL_NA_TRPL_N;//공급처명
	private String FSRGMN_ENO;//최초등록자
	private String DVY_SSDY;//배송장려금
	private String DVY_SSDYRT;//배송장려금율
	private String BYAM;//매입확정금액
	private String BYNG_QT;//매입확정수량
	private String SLP_DT;//매입전표일자
	private String NA_SLPNO;//매입전표번호
	private String ODRPL_NA_TRPL_C;//발주처
	private String ODRPL_NA_TRPL_N;//발주처명
	private String DDLY_YN;//직송여부
	private String ODRPL_NA_TEAM_N;//발주처팀명
	private String STS_DVY_PLA_QT;//배송예정수량
	private String STS_DVY_AM;//배송예정금액
	private String STS_BYAM;//매입금액
	private String STS_BYNG_QT;//매입수량
	private String GRS_SOJU_YN;//지방소주여부
	private String DVY_PLA_STS;//배송예정서상태
	private String B_NA_WRS_C;//상품코드
	private String B_WRSNM;//상품명
	private String B_ODR_DT;//발주일자
	private String B_ODR_SLPNO;//발주전표번호
	private String B_ODR_DSQNO;//발주일련번호
	private String B_TXT_DSC;//과세구분
	private String B_PD_YY;//생산년도
	private String B_DVY_WRS_UPR;//배송상품단가
	private String B_DVY_PLA_QT;//배송예정수량
	private String B_DVY_AM;//배송금액
	private String B_DVY_VAT;//배송부가세
	private String B_DVY_VCBT_AM;//배송공병금액
	private String B_DVY_SSDY;//배송장려금
	private String B_DVY_TROT_FEE;//배송환급수수료
	private String B_DVY_PHD_FEE;//배송물류수수료
	private String B_DVY_FAR_ASTCS;//배송운임보조비
	private String B_BYNG_UPR;//매입확정단가
	private String B_BYNG_QT;//매입확정수량
	private String B_BYNG_WT;//매입확정중량
	private String B_BYAM;//매입확정금액
	private String B_NA_DVY_PLASH_SLPNO;//배송예정서전표번호
	private String B_DVYAA_NA_TRPL_C;//배송처
	private String B_SPYPL_NA_TRPL_C;//공급처
	private String B_DVY_PLASH_STAC;//배송예정서상태코드
	private String B_DVY_SSDYRT;//배송장려금율
	
	
	
	
	
	


	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}








	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
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








	public String getDVY_AM() {
		return DVY_AM;
	}








	public void setDVY_AM(String dVY_AM) {
		DVY_AM = dVY_AM;
	}








	public String getDVY_VAT() {
		return DVY_VAT;
	}








	public void setDVY_VAT(String dVY_VAT) {
		DVY_VAT = dVY_VAT;
	}








	public String getCSER_CTR_TPC() {
		return CSER_CTR_TPC;
	}








	public void setCSER_CTR_TPC(String cSER_CTR_TPC) {
		CSER_CTR_TPC = cSER_CTR_TPC;
	}








	public String getSPYPL_NA_TRPL_N() {
		return SPYPL_NA_TRPL_N;
	}








	public void setSPYPL_NA_TRPL_N(String sPYPL_NA_TRPL_N) {
		SPYPL_NA_TRPL_N = sPYPL_NA_TRPL_N;
	}








	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}








	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}








	public String getDVY_SSDY() {
		return DVY_SSDY;
	}








	public void setDVY_SSDY(String dVY_SSDY) {
		DVY_SSDY = dVY_SSDY;
	}








	public String getDVY_SSDYRT() {
		return DVY_SSDYRT;
	}








	public void setDVY_SSDYRT(String dVY_SSDYRT) {
		DVY_SSDYRT = dVY_SSDYRT;
	}








	public String getBYAM() {
		return BYAM;
	}








	public void setBYAM(String bYAM) {
		BYAM = bYAM;
	}








	public String getBYNG_QT() {
		return BYNG_QT;
	}








	public void setBYNG_QT(String bYNG_QT) {
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








	public String getSTS_DVY_PLA_QT() {
		return STS_DVY_PLA_QT;
	}








	public void setSTS_DVY_PLA_QT(String sTS_DVY_PLA_QT) {
		STS_DVY_PLA_QT = sTS_DVY_PLA_QT;
	}








	public String getSTS_DVY_AM() {
		return STS_DVY_AM;
	}








	public void setSTS_DVY_AM(String sTS_DVY_AM) {
		STS_DVY_AM = sTS_DVY_AM;
	}








	public String getSTS_BYAM() {
		return STS_BYAM;
	}








	public void setSTS_BYAM(String sTS_BYAM) {
		STS_BYAM = sTS_BYAM;
	}








	public String getSTS_BYNG_QT() {
		return STS_BYNG_QT;
	}








	public void setSTS_BYNG_QT(String sTS_BYNG_QT) {
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








	public String getB_NA_WRS_C() {
		return B_NA_WRS_C;
	}








	public void setB_NA_WRS_C(String b_NA_WRS_C) {
		B_NA_WRS_C = b_NA_WRS_C;
	}








	public String getB_WRSNM() {
		return B_WRSNM;
	}








	public void setB_WRSNM(String b_WRSNM) {
		B_WRSNM = b_WRSNM;
	}








	public String getB_ODR_DT() {
		return B_ODR_DT;
	}








	public void setB_ODR_DT(String b_ODR_DT) {
		B_ODR_DT = b_ODR_DT;
	}








	public String getB_ODR_SLPNO() {
		return B_ODR_SLPNO;
	}








	public void setB_ODR_SLPNO(String b_ODR_SLPNO) {
		B_ODR_SLPNO = b_ODR_SLPNO;
	}








	public String getB_ODR_DSQNO() {
		return B_ODR_DSQNO;
	}








	public void setB_ODR_DSQNO(String b_ODR_DSQNO) {
		B_ODR_DSQNO = b_ODR_DSQNO;
	}








	public String getB_TXT_DSC() {
		return B_TXT_DSC;
	}








	public void setB_TXT_DSC(String b_TXT_DSC) {
		B_TXT_DSC = b_TXT_DSC;
	}








	public String getB_PD_YY() {
		return B_PD_YY;
	}








	public void setB_PD_YY(String b_PD_YY) {
		B_PD_YY = b_PD_YY;
	}








	public String getB_DVY_WRS_UPR() {
		return B_DVY_WRS_UPR;
	}








	public void setB_DVY_WRS_UPR(String b_DVY_WRS_UPR) {
		B_DVY_WRS_UPR = b_DVY_WRS_UPR;
	}








	public String getB_DVY_PLA_QT() {
		return B_DVY_PLA_QT;
	}








	public void setB_DVY_PLA_QT(String b_DVY_PLA_QT) {
		B_DVY_PLA_QT = b_DVY_PLA_QT;
	}








	public String getB_DVY_AM() {
		return B_DVY_AM;
	}








	public void setB_DVY_AM(String b_DVY_AM) {
		B_DVY_AM = b_DVY_AM;
	}








	public String getB_DVY_VAT() {
		return B_DVY_VAT;
	}








	public void setB_DVY_VAT(String b_DVY_VAT) {
		B_DVY_VAT = b_DVY_VAT;
	}








	public String getB_DVY_VCBT_AM() {
		return B_DVY_VCBT_AM;
	}








	public void setB_DVY_VCBT_AM(String b_DVY_VCBT_AM) {
		B_DVY_VCBT_AM = b_DVY_VCBT_AM;
	}








	public String getB_DVY_SSDY() {
		return B_DVY_SSDY;
	}








	public void setB_DVY_SSDY(String b_DVY_SSDY) {
		B_DVY_SSDY = b_DVY_SSDY;
	}








	public String getB_DVY_TROT_FEE() {
		return B_DVY_TROT_FEE;
	}








	public void setB_DVY_TROT_FEE(String b_DVY_TROT_FEE) {
		B_DVY_TROT_FEE = b_DVY_TROT_FEE;
	}








	public String getB_DVY_PHD_FEE() {
		return B_DVY_PHD_FEE;
	}








	public void setB_DVY_PHD_FEE(String b_DVY_PHD_FEE) {
		B_DVY_PHD_FEE = b_DVY_PHD_FEE;
	}








	public String getB_DVY_FAR_ASTCS() {
		return B_DVY_FAR_ASTCS;
	}








	public void setB_DVY_FAR_ASTCS(String b_DVY_FAR_ASTCS) {
		B_DVY_FAR_ASTCS = b_DVY_FAR_ASTCS;
	}








	public String getB_BYNG_UPR() {
		return B_BYNG_UPR;
	}








	public void setB_BYNG_UPR(String b_BYNG_UPR) {
		B_BYNG_UPR = b_BYNG_UPR;
	}








	public String getB_BYNG_QT() {
		return B_BYNG_QT;
	}








	public void setB_BYNG_QT(String b_BYNG_QT) {
		B_BYNG_QT = b_BYNG_QT;
	}








	public String getB_BYNG_WT() {
		return B_BYNG_WT;
	}








	public void setB_BYNG_WT(String b_BYNG_WT) {
		B_BYNG_WT = b_BYNG_WT;
	}








	public String getB_BYAM() {
		return B_BYAM;
	}








	public void setB_BYAM(String b_BYAM) {
		B_BYAM = b_BYAM;
	}








	public String getB_NA_DVY_PLASH_SLPNO() {
		return B_NA_DVY_PLASH_SLPNO;
	}








	public void setB_NA_DVY_PLASH_SLPNO(String b_NA_DVY_PLASH_SLPNO) {
		B_NA_DVY_PLASH_SLPNO = b_NA_DVY_PLASH_SLPNO;
	}








	public String getB_DVYAA_NA_TRPL_C() {
		return B_DVYAA_NA_TRPL_C;
	}








	public void setB_DVYAA_NA_TRPL_C(String b_DVYAA_NA_TRPL_C) {
		B_DVYAA_NA_TRPL_C = b_DVYAA_NA_TRPL_C;
	}








	public String getB_SPYPL_NA_TRPL_C() {
		return B_SPYPL_NA_TRPL_C;
	}








	public void setB_SPYPL_NA_TRPL_C(String b_SPYPL_NA_TRPL_C) {
		B_SPYPL_NA_TRPL_C = b_SPYPL_NA_TRPL_C;
	}








	public String getB_DVY_PLASH_STAC() {
		return B_DVY_PLASH_STAC;
	}








	public void setB_DVY_PLASH_STAC(String b_DVY_PLASH_STAC) {
		B_DVY_PLASH_STAC = b_DVY_PLASH_STAC;
	}








	public String getB_DVY_SSDYRT() {
		return B_DVY_SSDYRT;
	}








	public void setB_DVY_SSDYRT(String b_DVY_SSDYRT) {
		B_DVY_SSDYRT = b_DVY_SSDYRT;
	}








	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	


	

	
}
