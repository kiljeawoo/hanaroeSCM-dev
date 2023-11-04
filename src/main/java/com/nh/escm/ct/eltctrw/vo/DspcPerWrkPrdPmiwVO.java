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

public class DspcPerWrkPrdPmiwVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;
	private String ELT_CTRW_NO;// 전자계약서번호
	private String DML_CODE;
	private String TMP_ELT_CTRW_NO;// 임시전자계약서번호

	private String PMIW_KDC;// 약정서종류코드
	private String CHG_SQNO;// 변경일련번호
	private String SQNO;// 일련번호
	private String STORNM;// 매장명
	private String DSPC_PER;// 파견인원
	private String WRK_ST_DT;// 근무기간시작일자
	private String WRK_ED_DT;// 근무기간종료일자
	private String WRK_ST_HR;// 근무시작시간
	private String WRK_ED_HR;// 근무종료시간
	private String RCS_ST_HR;// 휴게시작시간
	private String RCS_ED_HR;// 휴게종료시간
	private String FSRG_DTM;// 최초등록일시
	private String FS_RGM;// 최초등록자
	private String LSCHG_DTM;// 최종변경일시
	private String LS_CHGM;// 최종변경자
	private String SCTR_SJT; // 특약사항
	
	private String ETC1; // 추가컬럼1
	private String ETC2; // 추가컬럼2
	private String ETC3; // 추가컬럼3
	private String ETC4; // 추가컬럼4
	private String ETC5; // 추가컬럼5

	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}
	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}
	public String getDML_CODE() {
		return DML_CODE;
	}
	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}
	public String getTMP_ELT_CTRW_NO() {
		return TMP_ELT_CTRW_NO;
	}
	public void setTMP_ELT_CTRW_NO(String tMP_ELT_CTRW_NO) {
		TMP_ELT_CTRW_NO = tMP_ELT_CTRW_NO;
	}
	public String getPMIW_KDC() {
		return PMIW_KDC;
	}
	public void setPMIW_KDC(String pMIW_KDC) {
		PMIW_KDC = pMIW_KDC;
	}
	public String getCHG_SQNO() {
		return CHG_SQNO;
	}
	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}
	public String getSQNO() {
		return SQNO;
	}
	public void setSQNO(String sQNO) {
		SQNO = sQNO;
	}
	public String getSTORNM() {
		return STORNM;
	}
	public void setSTORNM(String sTORNM) {
		STORNM = sTORNM;
	}
	public String getDSPC_PER() {
		return DSPC_PER;
	}
	public void setDSPC_PER(String dSPC_PER) {
		DSPC_PER = dSPC_PER;
	}
	public String getWRK_ST_DT() {
		return WRK_ST_DT;
	}
	public void setWRK_ST_DT(String wRK_ST_DT) {
		WRK_ST_DT = wRK_ST_DT;
	}
	public String getWRK_ED_DT() {
		return WRK_ED_DT;
	}
	public void setWRK_ED_DT(String wRK_ED_DT) {
		WRK_ED_DT = wRK_ED_DT;
	}
	public String getWRK_ST_HR() {
		return WRK_ST_HR;
	}
	public void setWRK_ST_HR(String wRK_ST_HR) {
		WRK_ST_HR = wRK_ST_HR;
	}
	public String getWRK_ED_HR() {
		return WRK_ED_HR;
	}
	public void setWRK_ED_HR(String wRK_ED_HR) {
		WRK_ED_HR = wRK_ED_HR;
	}
	public String getRCS_ST_HR() {
		return RCS_ST_HR;
	}
	public void setRCS_ST_HR(String rCS_ST_HR) {
		RCS_ST_HR = rCS_ST_HR;
	}
	public String getRCS_ED_HR() {
		return RCS_ED_HR;
	}
	public void setRCS_ED_HR(String rCS_ED_HR) {
		RCS_ED_HR = rCS_ED_HR;
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
	public String getSCTR_SJT() {
		return SCTR_SJT;
	}
	public void setSCTR_SJT(String sCTR_SJT) {
		SCTR_SJT = sCTR_SJT;
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
}