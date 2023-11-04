package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 발주처별 Excel download
 * @author swha
 *
 */
public class OrderOrdersOdrplExcelVO  implements Serializable{
	private static final long serialVersionUID = 20150907L;
	
	private String ODRPL_NA_TRPL_C;//발주처
	private String ODRPL_NA_TRPL_N;//발주처명
	private String ODRPL_NA_TEAM_C;//발주처팀
	private String ODRPL_NA_TEAM_N;//발주처팀명
	private String SPYPL_NA_TRPL_C;//공급처
	private String SPYPL_NA_TRPL_N;//공급처명
	private String SPYPL_NA_TEAM_C;//공급처팀
	private String SPYPL_NA_TEAM_N;//공급처팀명
	private String ODR_CNT;//발품상품건수
	private String ODR_QT;//수주량
	private String BOXPE_AQZ;//BOX수량
	private String ODR_AM;//수주금액
	private String VCBT_AM;//공병금액
	private String B_ODRPL_NA_TRPL_C;//발주처
	private String B_ODRPL_NA_TEAM_C;//발주처팀
	private String B_ODR_DT;//발주일자
	private String B_ODR_SLPNO;//발주전표번호
	private String B_SPYPL_NA_TRPL_C;//공급처
	private String B_SPYPL_NA_TEAM_C;//공급처팀
	private String B_MNGT_NA_TRPL_C;//정산처
	private String B_MNGT_NA_TRPL_N;//정산처명
	private String D_EDIRG_DTM;//배달일시
	private String B_FS_RMS_DTM;//수신일시
	private String B_DVY_RQR_DT;//배송요청일
	private String B_ODR_AM;//수주금액
	private String B_VCBT_AM;//공병금액
	private String B_SPY_TPC;//수주유형
	private String B_NA_ODR_STS_DSC;//발주상태
	private String B_FSRGMN_ENO;//발주자
	private String B_DDLY_YN;//직송여부
	private String B_FSRG_DTM;//최종등록일시
	private String B_LSCHG_DTM;//최종변경일시
	private String B_LS_CMENO;//최종변경자개인번호
	private String B_DEL_DTM;//삭제일시
	private String C_ODRPL_NA_TRPL_C;//발주처
	private String C_ODRPL_NA_TEAM_C;//발주처팀
	private String C_ODR_DT;//발주일자
	private String C_ODR_SLPNO;//발주전표번호
	private String C_SPYPL_NA_TRPL_C;//공급처
	private String C_SPYPL_NA_TEAM_C;//공급처팀
	private String C_NA_WRS_C;//상품코드
	private String C_WRSNM;//상품명
	private String C_WRS_STDNM;//규격
	private String C_NA_WRS_UNT_C;//단위
	private String C_BOXPE_AQZ;//박스입수
	private String C_ODR_PCS;//발주단가
	private String C_ODR_QT;//수주량
	private String C_BOX_QT;//BOX수량
	private String C_ODR_AM;//수주금액
	private String C_ODR_VAT;//부가세액
	private String C_VCBT_AM;//공병금액
	private String C_FSRGMN_ENO;//최초등록자 개인번호
	private String C_FSRG_DTM;//최초등록일시
	private String C_LS_CMENO;//최초변경자 개인번호
	private String C_LSCHG_DTM;//최종변경일시
	private String C_DEL_DTM;//삭제일시

	


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




	public String getODRPL_NA_TEAM_N() {
		return ODRPL_NA_TEAM_N;
	}




	public void setODRPL_NA_TEAM_N(String oDRPL_NA_TEAM_N) {
		ODRPL_NA_TEAM_N = oDRPL_NA_TEAM_N;
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




	public String getSPYPL_NA_TEAM_N() {
		return SPYPL_NA_TEAM_N;
	}




	public void setSPYPL_NA_TEAM_N(String sPYPL_NA_TEAM_N) {
		SPYPL_NA_TEAM_N = sPYPL_NA_TEAM_N;
	}




	public String getODR_CNT() {
		return ODR_CNT;
	}




	public void setODR_CNT(String oDR_CNT) {
		ODR_CNT = oDR_CNT;
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




	public String getB_SPYPL_NA_TRPL_C() {
		return B_SPYPL_NA_TRPL_C;
	}




	public void setB_SPYPL_NA_TRPL_C(String b_SPYPL_NA_TRPL_C) {
		B_SPYPL_NA_TRPL_C = b_SPYPL_NA_TRPL_C;
	}




	public String getB_SPYPL_NA_TEAM_C() {
		return B_SPYPL_NA_TEAM_C;
	}




	public void setB_SPYPL_NA_TEAM_C(String b_SPYPL_NA_TEAM_C) {
		B_SPYPL_NA_TEAM_C = b_SPYPL_NA_TEAM_C;
	}




	public String getB_MNGT_NA_TRPL_C() {
		return B_MNGT_NA_TRPL_C;
	}




	public void setB_MNGT_NA_TRPL_C(String b_MNGT_NA_TRPL_C) {
		B_MNGT_NA_TRPL_C = b_MNGT_NA_TRPL_C;
	}




	public String getB_MNGT_NA_TRPL_N() {
		return B_MNGT_NA_TRPL_N;
	}




	public void setB_MNGT_NA_TRPL_N(String b_MNGT_NA_TRPL_N) {
		B_MNGT_NA_TRPL_N = b_MNGT_NA_TRPL_N;
	}




	public String getD_EDIRG_DTM() {
		return D_EDIRG_DTM;
	}




	public void setD_EDIRG_DTM(String d_EDIRG_DTM) {
		D_EDIRG_DTM = d_EDIRG_DTM;
	}




	public String getB_FS_RMS_DTM() {
		return B_FS_RMS_DTM;
	}




	public void setB_FS_RMS_DTM(String b_FS_RMS_DTM) {
		B_FS_RMS_DTM = b_FS_RMS_DTM;
	}




	public String getB_DVY_RQR_DT() {
		return B_DVY_RQR_DT;
	}




	public void setB_DVY_RQR_DT(String b_DVY_RQR_DT) {
		B_DVY_RQR_DT = b_DVY_RQR_DT;
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




	public String getB_DDLY_YN() {
		return B_DDLY_YN;
	}




	public void setB_DDLY_YN(String b_DDLY_YN) {
		B_DDLY_YN = b_DDLY_YN;
	}




	public String getB_FSRG_DTM() {
		return B_FSRG_DTM;
	}




	public void setB_FSRG_DTM(String b_FSRG_DTM) {
		B_FSRG_DTM = b_FSRG_DTM;
	}




	public String getB_LSCHG_DTM() {
		return B_LSCHG_DTM;
	}




	public void setB_LSCHG_DTM(String b_LSCHG_DTM) {
		B_LSCHG_DTM = b_LSCHG_DTM;
	}




	public String getB_LS_CMENO() {
		return B_LS_CMENO;
	}




	public void setB_LS_CMENO(String b_LS_CMENO) {
		B_LS_CMENO = b_LS_CMENO;
	}




	public String getB_DEL_DTM() {
		return B_DEL_DTM;
	}




	public void setB_DEL_DTM(String b_DEL_DTM) {
		B_DEL_DTM = b_DEL_DTM;
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




	public String getC_SPYPL_NA_TRPL_C() {
		return C_SPYPL_NA_TRPL_C;
	}




	public void setC_SPYPL_NA_TRPL_C(String c_SPYPL_NA_TRPL_C) {
		C_SPYPL_NA_TRPL_C = c_SPYPL_NA_TRPL_C;
	}




	public String getC_SPYPL_NA_TEAM_C() {
		return C_SPYPL_NA_TEAM_C;
	}




	public void setC_SPYPL_NA_TEAM_C(String c_SPYPL_NA_TEAM_C) {
		C_SPYPL_NA_TEAM_C = c_SPYPL_NA_TEAM_C;
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




	public String getC_ODR_VAT() {
		return C_ODR_VAT;
	}




	public void setC_ODR_VAT(String c_ODR_VAT) {
		C_ODR_VAT = c_ODR_VAT;
	}




	public String getC_VCBT_AM() {
		return C_VCBT_AM;
	}




	public void setC_VCBT_AM(String c_VCBT_AM) {
		C_VCBT_AM = c_VCBT_AM;
	}




	public String getC_FSRGMN_ENO() {
		return C_FSRGMN_ENO;
	}




	public void setC_FSRGMN_ENO(String c_FSRGMN_ENO) {
		C_FSRGMN_ENO = c_FSRGMN_ENO;
	}




	public String getC_FSRG_DTM() {
		return C_FSRG_DTM;
	}




	public void setC_FSRG_DTM(String c_FSRG_DTM) {
		C_FSRG_DTM = c_FSRG_DTM;
	}




	public String getC_LS_CMENO() {
		return C_LS_CMENO;
	}




	public void setC_LS_CMENO(String c_LS_CMENO) {
		C_LS_CMENO = c_LS_CMENO;
	}




	public String getC_LSCHG_DTM() {
		return C_LSCHG_DTM;
	}




	public void setC_LSCHG_DTM(String c_LSCHG_DTM) {
		C_LSCHG_DTM = c_LSCHG_DTM;
	}




	public String getC_DEL_DTM() {
		return C_DEL_DTM;
	}




	public void setC_DEL_DTM(String c_DEL_DTM) {
		C_DEL_DTM = c_DEL_DTM;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
}
