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

public class EltCtrwDcmApdVO implements Serializable {

	private static final long serialVersionUID = 20150818L;
	private String ELT_CTRW_NO;// 전자계약서번호
	private String MN_CTRW_KDC;// 메인계약서종류코드
	private String SQNO;// 일련번호
	private String BUYER_ENO;// 바이어개인번호
	private String DCM_C;// 서류코드
	private String DCM_NM;// 서류명
	private String ESS_YN;// 필수여부
	private String APDFLNM;// 첨부파일명
	private String APDFL_PATHNM;// 첨부파일경로명
	private String APDFL_SZE;// 첨부파일크기
	private String SYS_FLNM;// 시스템파일명
	private String FSRG_DTM;// 최초등록일시
	private String FS_RGM;// 최초등록자
	private String LSCHG_DTM;// 최종변경일시
	private String LS_CHGM;// 최종변경자
	private String ORGFNAME;
	private String SYSTEMFILENAME;
	private String SEAL;
	private String FILE_DEL; // 파일삭제구분
	private String DML_CODE;
	private String CHG_SQNO;// 변경일련번호
	private String PI_CHECK; // 개인정보확인동의
	private String APDFL_STS; // 첨부파일저장상태(I:진행중, C:완료, E:종료, null:기존파일형태)
	private byte[] APDFL_DATA; // 첨부데이터(BLOB)

	public String getCHG_SQNO() {
		return CHG_SQNO;
	}

	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}

	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}

	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}

	public String getMN_CTRW_KDC() {
		return MN_CTRW_KDC;
	}

	public void setMN_CTRW_KDC(String mN_CTRW_KDC) {
		MN_CTRW_KDC = mN_CTRW_KDC;
	}

	public String getSQNO() {
		return SQNO;
	}

	public void setSQNO(String sQNO) {
		SQNO = sQNO;
	}

	public String getBUYER_ENO() {
		return BUYER_ENO;
	}

	public void setBUYER_ENO(String bUYER_ENO) {
		BUYER_ENO = bUYER_ENO;
	}

	public String getDCM_C() {
		return DCM_C;
	}

	public void setDCM_C(String dCM_C) {
		DCM_C = dCM_C;
	}

	public String getDCM_NM() {
		return DCM_NM;
	}

	public void setDCM_NM(String dCM_NM) {
		DCM_NM = dCM_NM;
	}

	public String getESS_YN() {
		return ESS_YN;
	}

	public void setESS_YN(String eSS_YN) {
		ESS_YN = eSS_YN;
	}

	public String getAPDFLNM() {
		return APDFLNM;
	}

	public void setAPDFLNM(String aPDFLNM) {
		APDFLNM = aPDFLNM;
	}

	public String getAPDFL_PATHNM() {
		return APDFL_PATHNM;
	}

	public void setAPDFL_PATHNM(String aPDFL_PATHNM) {
		APDFL_PATHNM = aPDFL_PATHNM;
	}

	public String getAPDFL_SZE() {
		return APDFL_SZE;
	}

	public void setAPDFL_SZE(String aPDFL_SZE) {
		APDFL_SZE = aPDFL_SZE;
	}

	public String getSYS_FLNM() {
		return SYS_FLNM;
	}

	public void setSYS_FLNM(String sYS_FLNM) {
		SYS_FLNM = sYS_FLNM;
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

	public String getDML_CODE() {
		return DML_CODE;
	}

	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}

	public String getORGFNAME() {
		return ORGFNAME;
	}

	public void setORGFNAME(String oRGFNAME) {
		ORGFNAME = oRGFNAME;
	}

	public String getSYSTEMFILENAME() {
		return SYSTEMFILENAME;
	}

	public void setSYSTEMFILENAME(String sYSTEMFILENAME) {
		SYSTEMFILENAME = sYSTEMFILENAME;
	}

	public String getSEAL() {
		return SEAL;
	}

	public void setSEAL(String sEAL) {
		SEAL = sEAL;
	}

	public String getFILE_DEL() {
		return FILE_DEL;
	}

	public void setFILE_DEL(String fILE_DEL) {
		FILE_DEL = fILE_DEL;
	}

	public String getPI_CHECK() {
		return PI_CHECK;
	}

	public void setPI_CHECK(String pI_CHECK) {
		PI_CHECK = pI_CHECK;
	}

	public String getAPDFL_STS() {
		return APDFL_STS;
	}

	public void setAPDFL_STS(String aPDFL_STS) {
		APDFL_STS = aPDFL_STS;
	}

	public byte[] getAPDFL_DATA() {
		return APDFL_DATA;
	}

	public void setAPDFL_DATA(byte[] aPDFL_DATA) {
		APDFL_DATA = aPDFL_DATA;
	}

}