package com.nh.escm.ct.eltctrw.vo;


/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */

import java.io.Serializable;

/**
 * @author yoon
 *
 */
public class PmiwDtlVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;	
	private String ELT_CTRW_NO                           ;//전자계약서번호                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	private String PMIW_KDC                               ;//약정서종류                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	private String CTRW_STY_VER                          ;//계약서양식버젼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	private String BUY_AM                                ;//구매금액                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	private String EVT_TINM                              ;//행사제목                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	private String EVT_PRD_ST_DT                         ;//행사기간 시작일자                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	private String EVT_PRD_ED_DT                         ;//행사기간 종료일자                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	private String FSRG_DTM                              ;//최초등록일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String FS_RGM                                ;//최초등록자                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	private String LSCHG_DTM                             ;//최종변경일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String LS_CHGM                               ;//최종변경자	
	
	private String DML_CODE;
	
	private String TMP_ELT_CTRW_NO                       ;//임시전자계약서번호
	private String CTRW_STY_CHG_VER                      ;//계약서양식변경버젼
	private String CHG_SQNO                              ;//변경일련번호

	private String ETC1;
	private String ETC2;
	private String ETC3;
	private String ETC4;
	private String ETC5;
	private String ETC6;
	private String ETC7;
	private String ETC8;
	private String ETC9;
	private String ETCA;
	private String ETCB;
	private String ETCC;
	private String ETCD;
	private String ETCE;
	private String ETCF;
	private String ETCG;
	private String ETCH;
	private String ETCI;
	private String ETCJ;
	private String ETCK;
	private String ETCL;
	private String SCTR_SJT;		 // 특약사항		
	
	public String getCHG_SQNO() {
		return CHG_SQNO;
	}

	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}
	
	
	public String getCTRW_STY_CHG_VER() {
		return CTRW_STY_CHG_VER;
	}

	public void setCTRW_STY_CHG_VER(String cTRW_STY_CHG_VER) {
		CTRW_STY_CHG_VER = cTRW_STY_CHG_VER;
	}

	public String getTMP_ELT_CTRW_NO() {
		return TMP_ELT_CTRW_NO;
	}

	public void setTMP_ELT_CTRW_NO(String tMP_ELT_CTRW_NO) {
		TMP_ELT_CTRW_NO = tMP_ELT_CTRW_NO;
	}
	
	public String getDML_CODE() {
		return DML_CODE;
	}
	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}
	
	
	

	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}
	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}
	
	
	public String getPMIW_KDC() {
		return PMIW_KDC;
	}
	public void setPMIW_KDC(String pMIW_KDC) {
		PMIW_KDC = pMIW_KDC;
	}
	public String getCTRW_STY_VER() {
		return CTRW_STY_VER;
	}
	public void setCTRW_STY_VER(String cTRW_STY_VER) {
		CTRW_STY_VER = cTRW_STY_VER;
	}
	public String getBUY_AM() {
		return BUY_AM;
	}
	public void setBUY_AM(String bUY_AM) {
		BUY_AM = bUY_AM;
	}
	public String getEVT_TINM() {
		return EVT_TINM;
	}
	public void setEVT_TINM(String eVT_TINM) {
		EVT_TINM = eVT_TINM;
	}
	public String getEVT_PRD_ST_DT() {
		return EVT_PRD_ST_DT;
	}
	public void setEVT_PRD_ST_DT(String eVT_PRD_ST_DT) {
		EVT_PRD_ST_DT = eVT_PRD_ST_DT;
	}
	public String getEVT_PRD_ED_DT() {
		return EVT_PRD_ED_DT;
	}
	public void setEVT_PRD_ED_DT(String eVT_PRD_ED_DT) {
		EVT_PRD_ED_DT = eVT_PRD_ED_DT;
	}
	
	public String getFSRG_DTM() {
		return FSRG_DTM;
	}
	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}
	public String getFS_RGM() {
		return FS_RGM;
	}
	public void setFS_RGM(String fS_RGM) {
		FS_RGM = fS_RGM;
	}
	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}
	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}
	public String getLS_CHGM() {
		return LS_CHGM;
	}
	public void setLS_CHGM(String lS_CHGM) {
		LS_CHGM = lS_CHGM;
	}

	public String getETC1() {
		return ETC1;
	}

	public void setETC1(String eTC1) {
		ETC1 = eTC1;
	}

	public String getETC2() {
		return ETC2;
	}

	public void setETC2(String eTC2) {
		ETC2 = eTC2;
	}

	public String getETC3() {
		return ETC3;
	}

	public void setETC3(String eTC3) {
		ETC3 = eTC3;
	}

	public String getETC4() {
		return ETC4;
	}

	public void setETC4(String eTC4) {
		ETC4 = eTC4;
	}

	public String getETC5() {
		return ETC5;
	}

	public void setETC5(String eTC5) {
		ETC5 = eTC5;
	}

	public String getETC6() {
		return ETC6;
	}

	public void setETC6(String eTC6) {
		ETC6 = eTC6;
	}

	public String getETC7() {
		return ETC7;
	}

	public void setETC7(String eTC7) {
		ETC7 = eTC7;
	}

	public String getETC8() {
		return ETC8;
	}

	public void setETC8(String eTC8) {
		ETC8 = eTC8;
	}

	public String getETC9() {
		return ETC9;
	}

	public void setETC9(String eTC9) {
		ETC9 = eTC9;
	}

	public String getETCA() {
		return ETCA;
	}

	public void setETCA(String eTCA) {
		ETCA = eTCA;
	}

	public String getETCB() {
		return ETCB;
	}

	public void setETCB(String eTCB) {
		ETCB = eTCB;
	}

	public String getETCC() {
		return ETCC;
	}

	public void setETCC(String eTCC) {
		ETCC = eTCC;
	}

	public String getETCD() {
		return ETCD;
	}

	public void setETCD(String eTCD) {
		ETCD = eTCD;
	}

	public String getETCE() {
		return ETCE;
	}

	public void setETCE(String eTCE) {
		ETCE = eTCE;
	}

	public String getETCF() {
		return ETCF;
	}

	public void setETCF(String eTCF) {
		ETCF = eTCF;
	}

	public String getETCG() {
		return ETCG;
	}

	public void setETCG(String eTCG) {
		ETCG = eTCG;
	}

	public String getETCH() {
		return ETCH;
	}

	public void setETCH(String eTCH) {
		ETCH = eTCH;
	}

	public String getETCI() {
		return ETCI;
	}

	public void setETCI(String eTCI) {
		ETCI = eTCI;
	}

	public String getETCJ() {
		return ETCJ;
	}

	public void setETCJ(String eTCJ) {
		ETCJ = eTCJ;
	}

	public String getETCK() {
		return ETCK;
	}

	public void setETCK(String eTCK) {
		ETCK = eTCK;
	}

	public String getETCL() {
		return ETCL;
	}

	public void setETCL(String eTCL) {
		ETCL = eTCL;
	}

	public String getSCTR_SJT() {
		return SCTR_SJT;
	}

	public void setSCTR_SJT(String sCTR_SJT) {
		SCTR_SJT = sCTR_SJT;
	}	
} 