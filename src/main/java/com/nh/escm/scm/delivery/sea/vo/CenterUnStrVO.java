package com.nh.escm.scm.delivery.sea.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 업체별 미입고 현황 VO
 * @author HyeRim.Oh
 *
 */
public class CenterUnStrVO implements Serializable {
	
	private static final long serialVersionUID = 20150702L;

	private String RN; //페이지번호
	private String NA_BZPLC;  //경제통합사업장코드
	private String SLPNO;  //미입고일련번호
	private String STR_PLA_DT;  //입고예정일
	private String NA_TRPL_C;  //공급처코드
	private String CLNTNM;  //공급처명
	private String NA_WRS_C;  //상품코드
	private String WRSNM;  //상품명
	private String PHD_FCLT_C;  //물류기능
	private long INPD_QT;  //입수
	private double BYNG_UPR;  //단가
	private double ODR_QT;  //낱개 발주수량
	private double ODR_UNT_QT;  //발주수량(표시)
	private long ODR_SELPR;  //발주금액
	private double STR_CPL_QT;  //낱개 입고수량
	private double STR_UNT_QT;  //입고수량(표시)
	private long SELPR;  //입고금액
	private double NSTR_QT;  //낱개 미입고수량
	private double NSTR_UNT_QT;  //미입고수량(표시)
	private long NSTR_PR;  //미입고금액
	private long IMPS_AM;  //부과대상금액
	private double IMPSRT;  //부과율(%)
	private String STR_STSC;  //입고상태
	private String ODR_FBID_RSNC;  //최급상품정보 발주금지사유
	private String UN_STR_RSNC;  //미입고사유
	private String ROTS_SPY_PSB_DT;  //공급가능일
	private String BUYER_NM;  //바이어명
	private String CNF_YN;  //공급업체확인여부	
	private Date CNF_DTM;  //미납확인일자
	
	private String NA_TEAM_C; //팀코드	
	private String PRC_YN; //경통전송여부
	private String RSP_C_CNTN; //결과수신
		
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
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getRN() {
		return RN;
	}
	public void setRN(String rN) {
		RN = rN;
	}
	public String getCNF_YN() {
		return CNF_YN;
	}
	public void setCNF_YN(String cNF_YN) {
		CNF_YN = cNF_YN;
	}
	public Date getCNF_DTM() {
		return CNF_DTM;
	}
	public void setCNF_DTM(Date cNF_DTM) {
		CNF_DTM = cNF_DTM;
	}
	public String getNA_BZPLC() {
		return NA_BZPLC;
	}
	public void setNA_BZPLC(String nA_BZPLC) {
		NA_BZPLC = nA_BZPLC;
	}
	public String getSLPNO() {
		return SLPNO;
	}
	public void setSLPNO(String sLPNO) {
		SLPNO = sLPNO;
	}
	public String getSTR_PLA_DT() {
		return STR_PLA_DT;
	}
	public void setSTR_PLA_DT(String sTR_PLA_DT) {
		STR_PLA_DT = sTR_PLA_DT;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
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
	public String getPHD_FCLT_C() {
		return PHD_FCLT_C;
	}
	public void setPHD_FCLT_C(String pHD_FCLT_C) {
		PHD_FCLT_C = pHD_FCLT_C;
	}
	public long getINPD_QT() {
		return INPD_QT;
	}
	public void setINPD_QT(long iNPD_QT) {
		INPD_QT = iNPD_QT;
	}
	public double getBYNG_UPR() {
		return BYNG_UPR;
	}
	public void setBYNG_UPR(double bYNG_UPR) {
		BYNG_UPR = bYNG_UPR;
	}
	public double getODR_QT() {
		return ODR_QT;
	}
	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}
	public double getODR_UNT_QT() {
		return ODR_UNT_QT;
	}
	public void setODR_UNT_QT(double oDR_UNT_QT) {
		ODR_UNT_QT = oDR_UNT_QT;
	}
	public long getODR_SELPR() {
		return ODR_SELPR;
	}
	public void setODR_SELPR(long oDR_SELPR) {
		ODR_SELPR = oDR_SELPR;
	}
	public double getSTR_CPL_QT() {
		return STR_CPL_QT;
	}
	public void setSTR_CPL_QT(double sTR_CPL_QT) {
		STR_CPL_QT = sTR_CPL_QT;
	}
	public double getSTR_UNT_QT() {
		return STR_UNT_QT;
	}
	public void setSTR_UNT_QT(double sTR_UNT_QT) {
		STR_UNT_QT = sTR_UNT_QT;
	}
	public long getSELPR() {
		return SELPR;
	}
	public void setSELPR(long sELPR) {
		SELPR = sELPR;
	}
	public double getNSTR_QT() {
		return NSTR_QT;
	}
	public void setNSTR_QT(double nSTR_QT) {
		NSTR_QT = nSTR_QT;
	}
	public double getNSTR_UNT_QT() {
		return NSTR_UNT_QT;
	}
	public void setNSTR_UNT_QT(double nSTR_UNT_QT) {
		NSTR_UNT_QT = nSTR_UNT_QT;
	}
	public long getNSTR_PR() {
		return NSTR_PR;
	}
	public void setNSTR_PR(long nSTR_PR) {
		NSTR_PR = nSTR_PR;
	}
	public long getIMPS_AM() {
		return IMPS_AM;
	}
	public void setIMPS_AM(long iMPS_AM) {
		IMPS_AM = iMPS_AM;
	}
	public double getIMPSRT() {
		return IMPSRT;
	}
	public void setIMPSRT(double iMPSRT) {
		IMPSRT = iMPSRT;
	}
	public String getSTR_STSC() {
		return STR_STSC;
	}
	public void setSTR_STSC(String sTR_STSC) {
		STR_STSC = sTR_STSC;
	}
	public String getODR_FBID_RSNC() {
		return ODR_FBID_RSNC;
	}
	public void setODR_FBID_RSNC(String oDR_FBID_RSNC) {
		ODR_FBID_RSNC = oDR_FBID_RSNC;
	}
	public String getUN_STR_RSNC() {
		return UN_STR_RSNC;
	}
	public void setUN_STR_RSNC(String uN_STR_RSNC) {
		UN_STR_RSNC = uN_STR_RSNC;
	}
	public String getROTS_SPY_PSB_DT() {
		return ROTS_SPY_PSB_DT;
	}
	public void setROTS_SPY_PSB_DT(String rOTS_SPY_PSB_DT) {
		ROTS_SPY_PSB_DT = rOTS_SPY_PSB_DT;
	}
	public String getBUYER_NM() {
		return BUYER_NM;
	}
	public void setBUYER_NM(String bUYER_NM) {
		BUYER_NM = bUYER_NM;
	}	
}
