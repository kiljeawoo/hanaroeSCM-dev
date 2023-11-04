package com.nh.escm.pt.blbd.vo;

import java.io.Serializable;

public class BlbdVO implements Serializable {
	
	private static final long serialVersionUID = 6910279237597984146L;
	
	private String ISCHECKED; // 체크박스
	private String BLBD_ID; // 게시판ID
	private String BBRD_ID; // 게시물 ID
	private String BBRD_TI; // 게시판 제목
	private String BBRD_CNTN; // 게시판 내용
	private String BLTN_ST_DTM; // 게시시작일시
	private String BLTN_ED_DTM; // 게시종료일시
	private String CKNL_DSC; // 공지구분코드
	private String BBRD_DEL_YN; // 게시물삭제여부
	private String BBRD_INQ_CN; // 게시물조회수
	private String BBRD_RGM_NM; // 게시물등록자명
	private String FSRG_DTM; // 최초등록일시
	private String FS_RGM; // 최초등록자
	private String LSCHG_DTM; // 최종변경일시
	private String LS_CHGM; // 최종변경자
	private String PRET_BBRD_ID; // 부모ID
	private String NEW; // 부모ID
	
	private String PAY_TRPL_C; // 질의응답 게시답글 지불업체코드
	private String BLBD_UG_AM; // 질의응답 게시답글 사용금액
	private String UPLOAD_DT; // 질의응답 게시답글 등록일자
	
	private String FRAMENAME; // 팝업 화면이름
	private String BBRD_PUP_SYS_FLNM; // 시스템 파일명
	private String BBRD_NAMO_FLNM; // 나모(mht) 파일명
	
	private String BBRD_CLOSED_YN; // 비공개여부 (Y: 비공개, N: 공개)
	private String PRET_CLOSED_YN; // 부모 비공개여부 (Y: 비공개, N: 공개)
	private String PRET_FS_RGM; // 부모 작성자
	
	private String BBRD_PUP_ST_DT; // 게시물팝업시작일자
	private String BBRD_PUP_ED_DT; // 게시물팝업종료일자
	private String BBRD_PUP_YN; // 게시물팝업사용여부
	private String BBRD_PUP_APDFLNM; // 게시물팝업파일명
	private String CLNTNM; // 거래처명
	private String FS_CLNTNM; // 작성자거래처명
	
	private byte[] PICTURE;
	
	public byte[] getPICTURE() {
		return PICTURE;
	}
	
	public void setPICTURE(byte[] pICTURE) {
		PICTURE = pICTURE;
	}
	
	public String getBLBD_ID() {
		return BLBD_ID;
	}
	
	public String getBBRD_ID() {
		return BBRD_ID;
	}
	
	public String getBBRD_TI() {
		return BBRD_TI;
	}
	
	public String getBBRD_CNTN() {
		return BBRD_CNTN;
	}
	
	public String getBLTN_ST_DTM() {
		return BLTN_ST_DTM;
	}
	
	public String getBLTN_ED_DTM() {
		return BLTN_ED_DTM;
	}
	
	public String getCKNL_DSC() {
		return CKNL_DSC;
	}
	
	public String getBBRD_DEL_YN() {
		return BBRD_DEL_YN;
	}
	
	public String getBBRD_INQ_CN() {
		return BBRD_INQ_CN;
	}
	
	public String getBBRD_RGM_NM() {
		return BBRD_RGM_NM;
	}
	
	public String getFSRG_DTM() {
		return FSRG_DTM;
	}
	
	public String getFS_RGM() {
		return FS_RGM;
	}
	
	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}
	
	public String getLS_CHGM() {
		return LS_CHGM;
	}
	
	public void setBLBD_ID(String bLBD_ID) {
		BLBD_ID = bLBD_ID;
	}
	
	public void setBBRD_ID(String bBRD_ID) {
		BBRD_ID = bBRD_ID;
	}
	
	public void setBBRD_TI(String bBRD_TI) {
		BBRD_TI = bBRD_TI;
	}
	
	public void setBBRD_CNTN(String bBRD_CNTN) {
		BBRD_CNTN = bBRD_CNTN;
	}
	
	public void setBLTN_ST_DTM(String bLTN_ST_DTM) {
		BLTN_ST_DTM = bLTN_ST_DTM;
	}
	
	public void setBLTN_ED_DTM(String bLTN_ED_DTM) {
		BLTN_ED_DTM = bLTN_ED_DTM;
	}
	
	public void setCKNL_DSC(String cKNL_DSC) {
		CKNL_DSC = cKNL_DSC;
	}
	
	public void setBBRD_DEL_YN(String bBRD_DEL_YN) {
		BBRD_DEL_YN = bBRD_DEL_YN;
	}
	
	public void setBBRD_INQ_CN(String bBRD_INQ_CN) {
		BBRD_INQ_CN = bBRD_INQ_CN;
	}
	
	public void setBBRD_RGM_NM(String bBRD_RGM_NM) {
		BBRD_RGM_NM = bBRD_RGM_NM;
	}
	
	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}
	
	public void setFS_RGM(String fS_RGM) {
		FS_RGM = fS_RGM;
	}
	
	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}
	
	public void setLS_CHGM(String lS_CHGM) {
		LS_CHGM = lS_CHGM;
	}
	
	public String getISCHECKED() {
		return ISCHECKED;
	}
	
	public String getUPLOAD_DT() {
		return UPLOAD_DT;
	}
	
	public void setUPLOAD_DT(String uPLOAD_DT) {
		UPLOAD_DT = uPLOAD_DT;
	}
	
	public void setISCHECKED(String iSCHECKED) {
		ISCHECKED = iSCHECKED;
	}
	
	public String getPRET_BBRD_ID() {
		return PRET_BBRD_ID;
	}
	
	public void setPRET_BBRD_ID(String pRET_BBRD_ID) {
		PRET_BBRD_ID = pRET_BBRD_ID;
	}
	
	public String getNEW() {
		return NEW;
	}
	
	public void setNEW(String nEW) {
		NEW = nEW;
	}
	
	public String getPAY_TRPL_C() {
		return PAY_TRPL_C;
	}
	
	public void setPAY_TRPL_C(String pAY_TRPL_C) {
		PAY_TRPL_C = pAY_TRPL_C;
	}
	
	public String getBLBD_UG_AM() {
		return BLBD_UG_AM;
	}
	
	public void setBLBD_UG_AM(String bLBD_UG_AM) {
		BLBD_UG_AM = bLBD_UG_AM;
	}
	
	public String getFRAMENAME() {
		return FRAMENAME;
	}
	
	public void setFRAMENAME(String fRAMENAME) {
		FRAMENAME = fRAMENAME;
	}
	
	public String getBBRD_PUP_SYS_FLNM() {
		return BBRD_PUP_SYS_FLNM;
	}
	
	public void setBBRD_PUP_SYS_FLNM(String bBRD_PUP_SYS_FLNM) {
		BBRD_PUP_SYS_FLNM = bBRD_PUP_SYS_FLNM;
	}
	
	public String getBBRD_NAMO_FLNM() {
		return BBRD_NAMO_FLNM;
	}

	public void setBBRD_NAMO_FLNM(String bBRD_NAMO_FLNM) {
		BBRD_NAMO_FLNM = bBRD_NAMO_FLNM;
	}

	public String getBBRD_CLOSED_YN() {
		return BBRD_CLOSED_YN;
	}
	
	public void setBBRD_CLOSED_YN(String bBRD_CLOSED_YN) {
		BBRD_CLOSED_YN = bBRD_CLOSED_YN;
	}
	
	public String getPRET_CLOSED_YN() {
		return PRET_CLOSED_YN;
	}
	
	public void setPRET_CLOSED_YN(String pRET_CLOSED_YN) {
		PRET_CLOSED_YN = pRET_CLOSED_YN;
	}
	
	public String getPRET_FS_RGM() {
		return PRET_FS_RGM;
	}

	public void setPRET_FS_RGM(String pRET_FS_RGM) {
		PRET_FS_RGM = pRET_FS_RGM;
	}
	
	public String getBBRD_PUP_ST_DT() {
		return BBRD_PUP_ST_DT;
	}
	
	public void setBBRD_PUP_ST_DT(String bBRD_PUP_ST_DT) {
		BBRD_PUP_ST_DT = bBRD_PUP_ST_DT;
	}
	
	public String getBBRD_PUP_ED_DT() {
		return BBRD_PUP_ED_DT;
	}
	
	public void setBBRD_PUP_ED_DT(String bBRD_PUP_ED_DT) {
		BBRD_PUP_ED_DT = bBRD_PUP_ED_DT;
	}
	
	public String getBBRD_PUP_YN() {
		return BBRD_PUP_YN;
	}
	
	public void setBBRD_PUP_YN(String bBRD_PUP_YN) {
		BBRD_PUP_YN = bBRD_PUP_YN;
	}
	
	public String getBBRD_PUP_APDFLNM() {
		return BBRD_PUP_APDFLNM;
	}
	
	public void setBBRD_PUP_APDFLNM(String bBRD_PUP_APDFLNM) {
		BBRD_PUP_APDFLNM = bBRD_PUP_APDFLNM;
	}
	
	public String getCLNTNM() {
		return CLNTNM;
	}
	
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	
	public String getFS_CLNTNM() {
		return FS_CLNTNM;
	}
	
	public void setFS_CLNTNM(String fS_CLNTNM) {
		FS_CLNTNM = fS_CLNTNM;
	}
	
	
	@Override
	public String toString() {
		return "BlbdVO [ISCHECKED=" + ISCHECKED
				+ ", BLBD_ID=" + BLBD_ID + ", BBRD_ID=" + BBRD_ID
				+ ", BBRD_TI=" + BBRD_TI + ", BBRD_CNTN=" + BBRD_CNTN
				+ ", BLTN_ST_DTM=" + BLTN_ST_DTM + ", BLTN_ED_DTM=" + BLTN_ED_DTM
				+ ", CKNL_DSC=" + CKNL_DSC + ", BBRD_DEL_YN=" + BBRD_DEL_YN
				+ ", BBRD_INQ_CN=" + BBRD_INQ_CN + ", BBRD_RGM_NM=" + BBRD_RGM_NM
				+ ", FSRG_DTM=" + FSRG_DTM + ", FS_RGM=" + FS_RGM
				+ ", LSCHG_DTM=" + LSCHG_DTM + ", LS_CHGM=" + LS_CHGM
				+ ", PRET_BBRD_ID=" + PRET_BBRD_ID + ", NEW=" + NEW
				+ "]";
	}
	
}
