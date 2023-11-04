package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 일자별 Excel download
 * @author swha
 *
 */
public class OrderOrdersDailyExcelVO  implements Serializable{
	private static final long serialVersionUID = 20150904L;
	
	private String ODRPL_NA_TRPL_C;	//발주처
	private String ODRPL_NA_TEAM_C;	//발주처팀
	private String ODR_DT;	//수주일
	private String ODR_SLPNO;	//발주전표번호
	private String ODR_QT;	//수주량
	private String BOXPE_AQZ;	//박스입수
	private String TXT_AM;	//과세금액
	private String EXTX_AM;	//면세금액
	private String ODR_AM;	//수주금액
	private String VCBT_AM;	//공병금액
	private String B_ODRPL_NA_TRPL_C;	//발주처
	private String B_ODRPL_NA_TEAM_C;	//발주처팀
	private String B_ODR_DT;	//발주일자
	private String B_ODR_SLPNO;	//발주번호
	private String B_SHRT_BZPLNM;	//발주처명
	private String B_DVY_RQR_DT;	//배송요청일
	private String B_BOXPE_AQZ;	//박스입수
	private String B_ODR_AM;	//수주금액
	private String B_VCBT_AM;	//공병금액
	private String B_SPY_TPC;	//수주유형
	private String B_NA_ODR_STS_DSC;	//발주상태
	private String B_FSRGMN_ENO;	//발주자
	private String B_TEAMNM;	//발주처팀명
	private String B_NA_RGN_C;	//지역코드
	private String B_RVOPL_NA_TRPL_C;	//수주처코드
	private String B_CLNTNM;	//수주처명
	private String B_RVOPL_NA_TEAM_C;	//수주처팀코드
	private String B_EDIRG_DTM;	//배달일시
	private String B_FS_RMS_DTM;	//수신일
	private String B_ODR_QTTT;	//수주량
	private String C_ODRPL_NA_TRPL_C;	//발주처
	private String C_ODRPL_NA_TEAM_C;	//발주처팀
	private String C_ODR_DT;	//발주일자
	private String C_ODR_SLPNO;	//발주전표번호
	private String C_NA_WRS_C;	//상품코드
	private String C_WRSNM;	//상품명
	private String C_WRS_STDNM;	//규격
	private String C_NA_WRS_UNT_C;	//단위
	private String C_BOXPE_AQZ;	//입수
	private String C_ODR_PCS;	//발주단가
	private String C_ODR_QT;	//수주량
	private String C_BOX_QT;	//BOX 수량
	private String C_ODR_AM;	//수주금액
	private String C_VCBT_AM;	//공병금액
	
	
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


	public String getODR_QT() {
		return ODR_QT;
	}


	public void setODR_QT(String oDR_QT) {
		ODR_QT = oDR_QT;
	}


	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}


	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}


	public String getTXT_AM() {
		return TXT_AM;
	}


	public void setTXT_AM(String tXT_AM) {
		TXT_AM = tXT_AM;
	}


	public String getEXTX_AM() {
		return EXTX_AM;
	}


	public void setEXTX_AM(String eXTX_AM) {
		EXTX_AM = eXTX_AM;
	}


	public String getODR_AM() {
		return ODR_AM;
	}


	public void setODR_AM(String oDR_AM) {
		ODR_AM = oDR_AM;
	}


	public String getVCBT_AM() {
		return VCBT_AM;
	}


	public void setVCBT_AM(String vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}


	public String getB_ODRPL_NA_TRPL_C() {
		return B_ODRPL_NA_TRPL_C;
	}


	public void setB_ODRPL_NA_TRPL_C(String b_ODRPL_NA_TRPL_C) {
		B_ODRPL_NA_TRPL_C = b_ODRPL_NA_TRPL_C;
	}


	public String getB_ODRPL_NA_TEAM_C() {
		return B_ODRPL_NA_TEAM_C;
	}


	public void setB_ODRPL_NA_TEAM_C(String b_ODRPL_NA_TEAM_C) {
		B_ODRPL_NA_TEAM_C = b_ODRPL_NA_TEAM_C;
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


	public String getB_SHRT_BZPLNM() {
		return B_SHRT_BZPLNM;
	}


	public void setB_SHRT_BZPLNM(String b_SHRT_BZPLNM) {
		B_SHRT_BZPLNM = b_SHRT_BZPLNM;
	}


	public String getB_DVY_RQR_DT() {
		return B_DVY_RQR_DT;
	}


	public void setB_DVY_RQR_DT(String b_DVY_RQR_DT) {
		B_DVY_RQR_DT = b_DVY_RQR_DT;
	}


	public String getB_BOXPE_AQZ() {
		return B_BOXPE_AQZ;
	}


	public void setB_BOXPE_AQZ(String b_BOXPE_AQZ) {
		B_BOXPE_AQZ = b_BOXPE_AQZ;
	}


	public String getB_ODR_AM() {
		return B_ODR_AM;
	}


	public void setB_ODR_AM(String b_ODR_AM) {
		B_ODR_AM = b_ODR_AM;
	}


	public String getB_VCBT_AM() {
		return B_VCBT_AM;
	}


	public void setB_VCBT_AM(String b_VCBT_AM) {
		B_VCBT_AM = b_VCBT_AM;
	}


	public String getB_SPY_TPC() {
		return B_SPY_TPC;
	}


	public void setB_SPY_TPC(String b_SPY_TPC) {
		B_SPY_TPC = b_SPY_TPC;
	}


	public String getB_NA_ODR_STS_DSC() {
		return B_NA_ODR_STS_DSC;
	}


	public void setB_NA_ODR_STS_DSC(String b_NA_ODR_STS_DSC) {
		B_NA_ODR_STS_DSC = b_NA_ODR_STS_DSC;
	}


	public String getB_FSRGMN_ENO() {
		return B_FSRGMN_ENO;
	}


	public void setB_FSRGMN_ENO(String b_FSRGMN_ENO) {
		B_FSRGMN_ENO = b_FSRGMN_ENO;
	}


	public String getB_TEAMNM() {
		return B_TEAMNM;
	}


	public void setB_TEAMNM(String b_TEAMNM) {
		B_TEAMNM = b_TEAMNM;
	}


	public String getB_NA_RGN_C() {
		return B_NA_RGN_C;
	}


	public void setB_NA_RGN_C(String b_NA_RGN_C) {
		B_NA_RGN_C = b_NA_RGN_C;
	}


	public String getB_RVOPL_NA_TRPL_C() {
		return B_RVOPL_NA_TRPL_C;
	}


	public void setB_RVOPL_NA_TRPL_C(String b_RVOPL_NA_TRPL_C) {
		B_RVOPL_NA_TRPL_C = b_RVOPL_NA_TRPL_C;
	}


	public String getB_CLNTNM() {
		return B_CLNTNM;
	}


	public void setB_CLNTNM(String b_CLNTNM) {
		B_CLNTNM = b_CLNTNM;
	}


	public String getB_RVOPL_NA_TEAM_C() {
		return B_RVOPL_NA_TEAM_C;
	}


	public void setB_RVOPL_NA_TEAM_C(String b_RVOPL_NA_TEAM_C) {
		B_RVOPL_NA_TEAM_C = b_RVOPL_NA_TEAM_C;
	}


	public String getB_EDIRG_DTM() {
		return B_EDIRG_DTM;
	}


	public void setB_EDIRG_DTM(String b_EDIRG_DTM) {
		B_EDIRG_DTM = b_EDIRG_DTM;
	}


	public String getB_FS_RMS_DTM() {
		return B_FS_RMS_DTM;
	}


	public void setB_FS_RMS_DTM(String b_FS_RMS_DTM) {
		B_FS_RMS_DTM = b_FS_RMS_DTM;
	}


	public String getB_ODR_QTTT() {
		return B_ODR_QTTT;
	}


	public void setB_ODR_QTTT(String b_ODR_QTTT) {
		B_ODR_QTTT = b_ODR_QTTT;
	}


	public String getC_ODRPL_NA_TRPL_C() {
		return C_ODRPL_NA_TRPL_C;
	}


	public void setC_ODRPL_NA_TRPL_C(String c_ODRPL_NA_TRPL_C) {
		C_ODRPL_NA_TRPL_C = c_ODRPL_NA_TRPL_C;
	}


	public String getC_ODRPL_NA_TEAM_C() {
		return C_ODRPL_NA_TEAM_C;
	}


	public void setC_ODRPL_NA_TEAM_C(String c_ODRPL_NA_TEAM_C) {
		C_ODRPL_NA_TEAM_C = c_ODRPL_NA_TEAM_C;
	}


	public String getC_ODR_DT() {
		return C_ODR_DT;
	}


	public void setC_ODR_DT(String c_ODR_DT) {
		C_ODR_DT = c_ODR_DT;
	}


	public String getC_ODR_SLPNO() {
		return C_ODR_SLPNO;
	}


	public void setC_ODR_SLPNO(String c_ODR_SLPNO) {
		C_ODR_SLPNO = c_ODR_SLPNO;
	}


	public String getC_NA_WRS_C() {
		return C_NA_WRS_C;
	}


	public void setC_NA_WRS_C(String c_NA_WRS_C) {
		C_NA_WRS_C = c_NA_WRS_C;
	}


	public String getC_WRSNM() {
		return C_WRSNM;
	}


	public void setC_WRSNM(String c_WRSNM) {
		C_WRSNM = c_WRSNM;
	}


	public String getC_WRS_STDNM() {
		return C_WRS_STDNM;
	}


	public void setC_WRS_STDNM(String c_WRS_STDNM) {
		C_WRS_STDNM = c_WRS_STDNM;
	}


	public String getC_NA_WRS_UNT_C() {
		return C_NA_WRS_UNT_C;
	}


	public void setC_NA_WRS_UNT_C(String c_NA_WRS_UNT_C) {
		C_NA_WRS_UNT_C = c_NA_WRS_UNT_C;
	}


	public String getC_BOXPE_AQZ() {
		return C_BOXPE_AQZ;
	}


	public void setC_BOXPE_AQZ(String c_BOXPE_AQZ) {
		C_BOXPE_AQZ = c_BOXPE_AQZ;
	}


	public String getC_ODR_PCS() {
		return C_ODR_PCS;
	}


	public void setC_ODR_PCS(String c_ODR_PCS) {
		C_ODR_PCS = c_ODR_PCS;
	}


	public String getC_ODR_QT() {
		return C_ODR_QT;
	}


	public void setC_ODR_QT(String c_ODR_QT) {
		C_ODR_QT = c_ODR_QT;
	}


	public String getC_BOX_QT() {
		return C_BOX_QT;
	}


	public void setC_BOX_QT(String c_BOX_QT) {
		C_BOX_QT = c_BOX_QT;
	}


	public String getC_ODR_AM() {
		return C_ODR_AM;
	}


	public void setC_ODR_AM(String c_ODR_AM) {
		C_ODR_AM = c_ODR_AM;
	}


	public String getC_VCBT_AM() {
		return C_VCBT_AM;
	}


	public void setC_VCBT_AM(String c_VCBT_AM) {
		C_VCBT_AM = c_VCBT_AM;
	}


	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
}
