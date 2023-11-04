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

public class AddEltCtrwDtlVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;
	
	private String ELT_CTRW_NO                           ;//전자계약서번호                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	private String ADD_CTRW_KDC                          ;//부가계약서종류코드                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	private String CTRW_STY_VER                          ;//계약서양식버젼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	private String PB_CTRW_TINM                          ;//PB계약서 제목                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
	private String CNR_DT                               ;//검수일                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	private String PSG_MM                                ;//경과분/월                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	private String PSG_DD                                ;//경과분/일                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

	private String FSRG_DTM                              ;//최초등록일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String FS_RGM                                ;//최초등록자                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	private String LSCHG_DTM                             ;//최종변경일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String LS_CHGM                               ;//최종변경자 	
	
	private String DML_CODE;
	
	private String TMP_ELT_CTRW_NO                       ;//임시전자계약서번호
	private String CHG_SQNO                              ;//변경일련번호
	
	private String ETC1;								// 비율1, 약정기간 시작일
	private String ETC2;								// 비율2, 약정기간 종료일
	private String ETC3;								// 비율3
	
	private String SCTR_SJT;		 // 특약사항	
	// 물류센터이용계약서 이동으로 인한 변수 추가
	private String ETC4;		
	private String ETC5;
	private String ETC6;
	private String ETC7;
	private String ETC8;
	private String ETC9;
	private String ETCA;
	
	public String getCHG_SQNO() {
		return CHG_SQNO;
	}

	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
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
	public String getADD_CTRW_KDC() {
		return ADD_CTRW_KDC;
	}
	public void setADD_CTRW_KDC(String aDD_CTRW_KDC) {
		ADD_CTRW_KDC = aDD_CTRW_KDC;
	}
	public String getCTRW_STY_VER() {
		return CTRW_STY_VER;
	}
	public void setCTRW_STY_VER(String cTRW_STY_VER) {
		CTRW_STY_VER = cTRW_STY_VER;
	}
	public String getPB_CTRW_TINM() {
		return PB_CTRW_TINM;
	}
	public void setPB_CTRW_TINM(String pB_CTRW_TINM) {
		PB_CTRW_TINM = pB_CTRW_TINM;
	}

	public String getCNR_DT() {
		return CNR_DT;
	}
	public void setCNR_DT(String cNR_DT) {
		CNR_DT = cNR_DT;
	}
	public String getPSG_MM() {
		return PSG_MM;
	}
	public void setPSG_MM(String pSG_MM) {
		PSG_MM = pSG_MM;
	}
	public String getPSG_DD() {
		return PSG_DD;
	}
	public void setPSG_DD(String pSG_DD) {
		PSG_DD = pSG_DD;
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

	public String getSCTR_SJT() {
		return SCTR_SJT;
	}

	public void setSCTR_SJT(String sCTR_SJT) {
		SCTR_SJT = sCTR_SJT;
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



	

	
}

 