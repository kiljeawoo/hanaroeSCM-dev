package com.nh.escm.scm.delivery.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;
/**
 * 발주정보 상품정보 List
 * @author swha
 *
 */
public class NoticeOrderDetailVO  implements Serializable{
	private static final long serialVersionUID = 20150710L;
	
	private String DML_CODE;
	private String ODRPL_NA_TRPL_C; //발주처
	private String ODRPL_NA_TEAM_C; //발주처 팀코드
	private String ODR_DT; //발주일자
	private String ODR_SLPNO; //발주전표번호
	private String ODR_DSQNO; //발주상세일련번호
	private String VAN_SEQ; //VAN생성일련번호
	private String NA_WRS_C; //상품코드
	private String WRSNM; //상품명
	private int BOXPE_AQZ; //박스입수
	private String WRS_STDNM; //규격
	private String NA_WRS_UNT_C; //단위
	private double ODR_QT; //수주량
	private double ODR_PCS; //수주원가
	private double NEW_ODR_PCS; //수주원가
	private long ODR_VAT;//수주부가세
	private long ODR_AM;//수주금액
	private double DVY_PLA_QT;//배송예정량 Default
	private String DQPD_RSNC; //결품사유코드
	private String SPYPL_NA_TRPL_C;//공급처코드
	private String DVYAA_NA_TRPL_C;//배송처코드
	private String NA_DVY_PLASH_SLPNO;//배송예정서전표번호
	private String DVY_PLA_SQNO;//배송예정서일련번호
	private long VCBT_UPR;//공병단가
	private long VCBX_UPR;//공상자단가
	private long VCBT_AM;//공병금액
	private long VCBX_AM;//공상자금액	
	private double SSDYRT;//장려금율
	private double SSDY_BAS_AM; //장려금
	private String SPY_PSB_DT;//공급가능일자
	private String TXT_DSC;//과세구분코드
	private String SVS_QT;//소분여부
	private String NA_WRS_LCLC;
	private String NA_WRS_MCLC;
	private String NA_WRS_SCLC;
	private String NA_WRS_DTCF_C;
	private String DDLY_ST_DT;//직송시작일자
	private String DDLY_ED_DT;//직송종료일자
	private String DDLY_BAS_QT;//직송기준수량
	private String MIN_ODR_QT;//최소발주수량
	private String MAX_ODR_QT;//최대발주수량
	private String VCBT_NA_WRS_C;//공병상품코드
	private String VCBT_QT;//공병수량
	private double DVY_WRS_UPR;//배송상품단가(납품단가)
	private String DSTR_TER_MRK_DSC;//유통기한 구분
	private String DSTR_TER_DT;//유통제조일자
	private String NA_WRS_CSTD_METC;//상품보관방식
	private String ODR_FBID_YN;//발주금지여부 1:발주금지  0:발주가능
	private String DEL_YN; //삭제여부
	
	
	

	public String getDML_CODE() {
		return DML_CODE;
	}




	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
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




	public String getODR_DSQNO() {
		return ODR_DSQNO;
	}




	public void setODR_DSQNO(String oDR_DSQNO) {
		ODR_DSQNO = oDR_DSQNO;
	}




	public String getVAN_SEQ() {
		return VAN_SEQ;
	}




	public void setVAN_SEQ(String vAN_SEQ) {
		VAN_SEQ = vAN_SEQ;
	}




	public String getNA_WRS_C() {
		return NA_WRS_C;
	}




	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}




	public String getWRSNM() {
		return WRSNM;
	}




	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}




	public int getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}




	public void setBOXPE_AQZ(int bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}




	public String getWRS_STDNM() {
		return WRS_STDNM;
	}




	public void setWRS_STDNM(String wRS_STDNM) {
		WRS_STDNM = wRS_STDNM;
	}




	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}




	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}




	public double getODR_QT() {
		return ODR_QT;
	}




	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}




	public double getODR_PCS() {
		return ODR_PCS;
	}




	public void setODR_PCS(double oDR_PCS) {
		ODR_PCS = oDR_PCS;
	}




	public double getNEW_ODR_PCS() {
		return NEW_ODR_PCS;
	}




	public void setNEW_ODR_PCS(double nEW_ODR_PCS) {
		NEW_ODR_PCS = nEW_ODR_PCS;
	}




	public long getODR_VAT() {
		return ODR_VAT;
	}




	public void setODR_VAT(long oDR_VAT) {
		ODR_VAT = oDR_VAT;
	}




	public long getODR_AM() {
		return ODR_AM;
	}




	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}




	public double getDVY_PLA_QT() {
		return DVY_PLA_QT;
	}




	public void setDVY_PLA_QT(double dVY_PLA_QT) {
		DVY_PLA_QT = dVY_PLA_QT;
	}




	public String getDQPD_RSNC() {
		return DQPD_RSNC;
	}




	public void setDQPD_RSNC(String dQPD_RSNC) {
		DQPD_RSNC = dQPD_RSNC;
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




	public String getDVY_PLA_SQNO() {
		return DVY_PLA_SQNO;
	}




	public void setDVY_PLA_SQNO(String dVY_PLA_SQNO) {
		DVY_PLA_SQNO = dVY_PLA_SQNO;
	}




	public long getVCBT_UPR() {
		return VCBT_UPR;
	}




	public void setVCBT_UPR(long vCBT_UPR) {
		VCBT_UPR = vCBT_UPR;
	}




	public long getVCBX_UPR() {
		return VCBX_UPR;
	}




	public void setVCBX_UPR(long vCBX_UPR) {
		VCBX_UPR = vCBX_UPR;
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




	public double getSSDYRT() {
		return SSDYRT;
	}




	public void setSSDYRT(double sSDYRT) {
		SSDYRT = sSDYRT;
	}




	public double getSSDY_BAS_AM() {
		return SSDY_BAS_AM;
	}




	public void setSSDY_BAS_AM(double sSDY_BAS_AM) {
		SSDY_BAS_AM = sSDY_BAS_AM;
	}




	public String getSPY_PSB_DT() {
		return SPY_PSB_DT;
	}




	public void setSPY_PSB_DT(String sPY_PSB_DT) {
		SPY_PSB_DT = sPY_PSB_DT;
	}




	public String getTXT_DSC() {
		return TXT_DSC;
	}




	public void setTXT_DSC(String tXT_DSC) {
		TXT_DSC = tXT_DSC;
	}




	public String getSVS_QT() {
		return SVS_QT;
	}




	public void setSVS_QT(String sVS_QT) {
		SVS_QT = sVS_QT;
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




	public String getNA_WRS_SCLC() {
		return NA_WRS_SCLC;
	}




	public void setNA_WRS_SCLC(String nA_WRS_SCLC) {
		NA_WRS_SCLC = nA_WRS_SCLC;
	}




	public String getNA_WRS_DTCF_C() {
		return NA_WRS_DTCF_C;
	}




	public void setNA_WRS_DTCF_C(String nA_WRS_DTCF_C) {
		NA_WRS_DTCF_C = nA_WRS_DTCF_C;
	}




	public String getDDLY_ST_DT() {
		return DDLY_ST_DT;
	}




	public void setDDLY_ST_DT(String dDLY_ST_DT) {
		DDLY_ST_DT = dDLY_ST_DT;
	}




	public String getDDLY_ED_DT() {
		return DDLY_ED_DT;
	}




	public void setDDLY_ED_DT(String dDLY_ED_DT) {
		DDLY_ED_DT = dDLY_ED_DT;
	}




	public String getDDLY_BAS_QT() {
		return DDLY_BAS_QT;
	}




	public void setDDLY_BAS_QT(String dDLY_BAS_QT) {
		DDLY_BAS_QT = dDLY_BAS_QT;
	}




	public String getMIN_ODR_QT() {
		return MIN_ODR_QT;
	}




	public void setMIN_ODR_QT(String mIN_ODR_QT) {
		MIN_ODR_QT = mIN_ODR_QT;
	}




	public String getMAX_ODR_QT() {
		return MAX_ODR_QT;
	}




	public void setMAX_ODR_QT(String mAX_ODR_QT) {
		MAX_ODR_QT = mAX_ODR_QT;
	}




	public String getVCBT_NA_WRS_C() {
		return VCBT_NA_WRS_C;
	}




	public void setVCBT_NA_WRS_C(String vCBT_NA_WRS_C) {
		VCBT_NA_WRS_C = vCBT_NA_WRS_C;
	}




	public String getVCBT_QT() {
		return VCBT_QT;
	}




	public void setVCBT_QT(String vCBT_QT) {
		VCBT_QT = vCBT_QT;
	}




	public double getDVY_WRS_UPR() {
		return DVY_WRS_UPR;
	}




	public void setDVY_WRS_UPR(double dVY_WRS_UPR) {
		DVY_WRS_UPR = dVY_WRS_UPR;
	}




	public String getDSTR_TER_MRK_DSC() {
		return DSTR_TER_MRK_DSC;
	}




	public void setDSTR_TER_MRK_DSC(String dSTR_TER_MRK_DSC) {
		DSTR_TER_MRK_DSC = dSTR_TER_MRK_DSC;
	}




	public String getDSTR_TER_DT() {
		return DSTR_TER_DT;
	}




	public void setDSTR_TER_DT(String dSTR_TER_DT) {
		DSTR_TER_DT = dSTR_TER_DT;
	}




	public String getNA_WRS_CSTD_METC() {
		return NA_WRS_CSTD_METC;
	}




	public void setNA_WRS_CSTD_METC(String nA_WRS_CSTD_METC) {
		NA_WRS_CSTD_METC = nA_WRS_CSTD_METC;
	}




	public String getODR_FBID_YN() {
		return ODR_FBID_YN;
	}




	public void setODR_FBID_YN(String oDR_FBID_YN) {
		ODR_FBID_YN = oDR_FBID_YN;
	}




	public String getDEL_YN() {
		return DEL_YN;
	}




	public void setDEL_YN(String dEL_YN) {
		DEL_YN = dEL_YN;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
	
	
}
