package com.nh.escm.pds.coupon.vo;

import java.io.Serializable;
import java.util.Date;

import com.esum.appetizer.util.JsonUtil;

public class TB_GD_EVENT_CPN implements Serializable {
	private static final long serialVersionUID = 20150818L;
	
/*	CPN_KDC                     1	쿠폰종류코드          
	NA_CPN_C                    2	경제통합쿠폰코드      
	DC_NA_WRS_C                 3	할인경제통합상품코드  
	CPN_SC_NO                   4	쿠폰회차번호          
	DC_VLD_PRD_ST_DT            5	할인유효기간시작일자  
	DC_VLD_PRD_ED_DT            6	할인유효기간종료일자  
	CPN_WRSNM                   7	쿠폰상품명            
	MNGT_NA_TRPL_C              8	주관경제통합거래처코드
	MNGT_NA_BZPLC               9	주관경제통합사업장코드
	CPN_EFOC_MBDC              10	쿠폰시행주체코드    
	CPN_DC_TPC                 11	쿠폰할인유형코드    
	CPN_MED_C                  12	쿠폰매체코드        
	CPN_APL_PUC                13	쿠폰적용매수        
	DC_BAS_QT                  14	할인기준수량        
	DC_BAS_BUY_AM              15	할인기준구매금액    
	DC_AM                      16	할인금액            
	TRT_FEE                    17	취급수수료          
	MFT_CONM                   18	제조업체명          
	PRC_YN                     19	경통전송여부        
	RSP_C_CNTN                 20	결과수신            
	EDI_IF_ID                  21	EDI인터페이스아이디 
	FSRG_DTM                   22	최초등록일시        
	LSCHG_DTM                  23	최종변경일시        
	LSCGMN_NA_BZPLC            24	최종변경자사업장코드
	LS_CMENO                   25	최종변경자개인번호  
*/
	private String CHK;
	private String TEMP_SEQ;
	private String CPN_KDC;
	private String CLNTNM;
	private String NA_CPN_C;
	private String DC_NA_WRS_C;
	private String WRSNM;
	private String CPN_SC_NO;
	private String DC_VLD_PRD_ST_DT;
	private String DC_VLD_PRD_ED_DT;
	private String CPN_WRSNM;
	private String MNGT_NA_TRPL_C;
	private String MNGT_NA_BZPLC;
	private String CPN_EFOC_MBDC;
	private String CPN_DC_TPC;
	private String CPN_MED_C;
	private int CPN_APL_PUC;
	private int DC_BAS_QT;
	private int DC_BAS_BUY_AM;
	private int DC_AM;
	private int TRT_FEE;
	private String MFT_CONM;
	private Date FSRG_DTM;
	private String FSRGMN_NA_BZPLC;
	private Date LSCHG_DTM;
	private String LSCGMN_NA_BZPLC;
	private String LS_CMENO;
	private String PRC_YN;
	private String PRC_TEXT;

	public TB_GD_EVENT_CPN() {
		
	}
	
	public String getCPN_KDC() {
		return CPN_KDC;
	}
	public void setCPN_KDC(String cPN_KDC) {
		CPN_KDC = cPN_KDC;
	}
	public String getNA_CPN_C() {
		return NA_CPN_C;
	}
	public void setNA_CPN_C(String nA_CPN_C) {
		NA_CPN_C = nA_CPN_C;
	}
	public String getDC_NA_WRS_C() {
		return DC_NA_WRS_C;
	}
	public void setDC_NA_WRS_C(String dC_NA_WRS_C) {
		DC_NA_WRS_C = dC_NA_WRS_C;
	}
	public String getCPN_SC_NO() {
		return CPN_SC_NO;
	}
	public void setCPN_SC_NO(String cPN_SC_NO) {
		CPN_SC_NO = cPN_SC_NO;
	}
	public String getDC_VLD_PRD_ST_DT() {
		return DC_VLD_PRD_ST_DT;
	}
	public void setDC_VLD_PRD_ST_DT(String dC_VLD_PRD_ST_DT) {
		DC_VLD_PRD_ST_DT = dC_VLD_PRD_ST_DT;
	}
	public String getDC_VLD_PRD_ED_DT() {
		return DC_VLD_PRD_ED_DT;
	}
	public void setDC_VLD_PRD_ED_DT(String dC_VLD_PRD_ED_DT) {
		DC_VLD_PRD_ED_DT = dC_VLD_PRD_ED_DT;
	}
	public String getCPN_WRSNM() {
		return CPN_WRSNM;
	}
	public void setCPN_WRSNM(String cPN_WRSNM) {
		CPN_WRSNM = cPN_WRSNM;
	}
	public String getMNGT_NA_TRPL_C() {
		return MNGT_NA_TRPL_C;
	}
	public void setMNGT_NA_TRPL_C(String mNGT_NA_TRPL_C) {
		MNGT_NA_TRPL_C = mNGT_NA_TRPL_C;
	}
	public String getMNGT_NA_BZPLC() {
		return MNGT_NA_BZPLC;
	}
	public void setMNGT_NA_BZPLC(String mNGT_NA_BZPLC) {
		MNGT_NA_BZPLC = mNGT_NA_BZPLC;
	}
	public String getCPN_EFOC_MBDC() {
		return CPN_EFOC_MBDC;
	}
	public void setCPN_EFOC_MBDC(String cPN_EFOC_MBDC) {
		CPN_EFOC_MBDC = cPN_EFOC_MBDC;
	}
	public String getCPN_DC_TPC() {
		return CPN_DC_TPC;
	}
	public void setCPN_DC_TPC(String cPN_DC_TPC) {
		CPN_DC_TPC = cPN_DC_TPC;
	}
	public String getCPN_MED_C() {
		return CPN_MED_C;
	}
	public void setCPN_MED_C(String cPN_MED_C) {
		CPN_MED_C = cPN_MED_C;
	}
	public int getCPN_APL_PUC() {
		return CPN_APL_PUC;
	}
	public void setCPN_APL_PUC(int cPN_APL_PUC) {
		CPN_APL_PUC = cPN_APL_PUC;
	}
	public int getDC_BAS_QT() {
		return DC_BAS_QT;
	}
	public void setDC_BAS_QT(int dC_BAS_QT) {
		DC_BAS_QT = dC_BAS_QT;
	}
	public int getDC_BAS_BUY_AM() {
		return DC_BAS_BUY_AM;
	}
	public void setDC_BAS_BUY_AM(int dC_BAS_BUY_AM) {
		DC_BAS_BUY_AM = dC_BAS_BUY_AM;
	}
	public int getDC_AM() {
		return DC_AM;
	}
	public void setDC_AM(int dC_AM) {
		DC_AM = dC_AM;
	}
	public int getTRT_FEE() {
		return TRT_FEE;
	}
	public void setTRT_FEE(int tRT_FEE) {
		TRT_FEE = tRT_FEE;
	}
	public String getMFT_CONM() {
		return MFT_CONM;
	}
	public void setMFT_CONM(String mFT_CONM) {
		MFT_CONM = mFT_CONM;
	}

	@Override
	public String toString() {
		return JsonUtil.toString(this);
	}

	
	public String getCHK() {
		return CHK;
	}

	public void setCHK(String cHK) {
		CHK = cHK;
	}

	public String getTEMP_SEQ() {
		return TEMP_SEQ;
	}

	public void setTEMP_SEQ(String tEMP_SEQ) {
		TEMP_SEQ = tEMP_SEQ;
	}

	public String getCLNTNM() {
		return CLNTNM;
	}

	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}

	public Date getFSRG_DTM() {
		return FSRG_DTM;
	}

	public void setFSRG_DTM(Date fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}

	public String getFSRGMN_NA_BZPLC() {
		return FSRGMN_NA_BZPLC;
	}

	public void setFSRGMN_NA_BZPLC(String fSRGMN_NA_BZPLC) {
		FSRGMN_NA_BZPLC = fSRGMN_NA_BZPLC;
	}

	public Date getLSCHG_DTM() {
		return LSCHG_DTM;
	}

	public void setLSCHG_DTM(Date lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}

	public String getLSCGMN_NA_BZPLC() {
		return LSCGMN_NA_BZPLC;
	}

	public void setLSCGMN_NA_BZPLC(String lSCGMN_NA_BZPLC) {
		LSCGMN_NA_BZPLC = lSCGMN_NA_BZPLC;
	}

	public String getLS_CMENO() {
		return LS_CMENO;
	}

	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}

	public String getWRSNM() {
		return WRSNM;
	}

	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}

	public String getPRC_YN() {
		return PRC_YN;
	}

	public void setPRC_YN(String pRC_YN) {
		PRC_YN = pRC_YN;
	}

	public String getPRC_TEXT() {
		return PRC_TEXT;
	}

	public void setPRC_TEXT(String pRC_TEXT) {
		PRC_TEXT = pRC_TEXT;
	}
	
	
}
