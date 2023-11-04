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
import java.util.List;

public class EltCtrwVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;
	
	private String ELT_CTRW_NO	      	;//전자계약서번호
	private String NA_TRPL_C	      	;//경제통합거래처코드
	private String SQNO	      			;//일련번호
	private String MN_CTRW_KD	      	;//메인계약서종류
	private String MN_CTRW_KD_NM	    ;//메인계약서종류명
	private String ADD_CTRW	      		;//부가계약서
	private String PMIW	      			;//약정서
	private String SCTRW	      		;//특약서
	private String ETC_CTRW	      		;//기타계약서
	private String BZNO	      			;//사업자등록번호
	private String NA_WRS_LCLC	      	;//경제통합상품대분류코드
	private String NA_WRS_MCLC	      	;//경제통합상품중분류코드
	private String NA_WRS_SCLC	      	;//경제통합상품소분류코드
	private String NA_WRS_DTCF_C	    ;//경제통합상품세분류코드
	private String BUYER_NA_TRPL_C	    ;//바이어경제통합거래처코드
	private String TELNO	    		;//전화번호
	private String EMAIL	      		;//EMAIL
	private String CTRW_STY_VER	      	;//계약서양식버젼
	private String CTR_ST_DT	      	;//계약시작일자
	private String CTR_ED_DT	      	;//계약종료일자
	private String CTR_DT	      	;//계약기간일자
	private String CTRW_DRUP_DT	      	;//계약서작성일자
	private String CEO	      			;//대표이사
	private String MTALNM	      		;//상호
	private String FZIP	      			;//앞자리우편번호
	private String RZIP	      			;//뒷자리우편번호
	private String ZIP_SQNO	      		;//우편번호일련번호
	private String DONGUP	      		;//동이상주소
	private String DONGBW	      		;//동이하주소
	private String BUYER_ENO	      	;//바이어개인번호
	private String BUYER_BLG	      	;//바이어소속
	private String BUYER_NM	      		;//바이어성명
	private String BUYER_TELNO	      	;//바이어 전화번호
	private String BUYER_EMAIL	      	;//바이어 이메일
	private String CTR_CHRR_MTALNM	    ;//계약담당자 상호
	private String CTR_CHRR_REPMN	    ;//계약담당자 대표자
	private String LA_AGNT	      		;//법률상대리인
	private String CTR_CHRR_FZIP	    ;//계약담당자 앞자리우편번호
	private String CTR_CHRR_RZIP	    ;//계약담당자 뒷자리우편번호
	private String CTR_CHRR_ZIP_SQNO	;//계약담당자 우편번호일련번호
	private String CTR_CHRR_DONGUP	    ;//계약담당자 동이상주소
	private String CTR_CHRR_DONGBW	    ;//계약담당자 동이하주소
	private String RMK	      			;//비고
	private String TMP_STS	      		;//임시 상태
	private String STS	      			;//전자계약서 진행 상태
	private String STS_NM	      		;//상태명
	private String STS_CANCEL	      		;//해지상태
	private String STS_EXP; // 지연계약서 여부
	private String COLB_COMP_SGNT	;//협력업체서명상태
	private String BUYER_APV_STS	    ;//바이어승인상태
	private String CTR_PRD_AUT_XTN_YN	;//계약기간 자동 연장여부
	private String FGAT_PRVT_C	      	;//위변조방지코드
	private String BF_CTR_NO	      	;//이전계약번호
	private String BF_CTR_SQNO	      	;//이전계약일련번호
	private String FSRG_DTM	      		;//최초등록일시
	private String FS_RGM	      		;//최초등록자
	private String LSCHG_DTM	      	;//최종변경일시
	private String LS_CHGM	      		;//최종변경자
	
	private String ISCHECKED            ;//check여부
	
	private String DCM_NM            	;//서류명
	private String ESS_YN             	;//필수여부
	private String MN_CTRW_KDC	    	;//메인계약서종류코드
	private String DCM_C				;//서류코드
	private String APDFLNM				;//첨부파일명
	private String APDFL_SZE			;//첨부파일크기
	private String SYS_FLNM				;//시스템파일명
		
	private String RLTM_NTC_SMS         ;//실시간통지SMS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
	private String SMS_NATV_NO          ;//SMS고유번호                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	private String RLTM_NTC_EMAIL       ;//실시간통지이메일                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	private String EMAIL_NATV_NO        ;//이메일고유번호                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	private String CHRG_BUYER_NM        ;//담당바이어명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String CHRG_BUYER_CTCPL     ;//담당바이어연락처
	private String CTRW_KDC     		;//담당바이어연락처
	private String MPNO     			;//담당바이어연락처
	private String TINM    				;//담당바이어연락처
	private String CNTN     			;//담당바이어연락처
	private String USR_TPC    			;//담당바이어연락처
	private String CHG_BUYER_NM         ;//변경될바이어이름
	private String CHG_BUYER_ENO 		;//변경될바이어번호
	
	private String BUYER_MPNO    			;//담당바이어연락처
	private String DML_CODE;
	private String TMP_ELT_CTRW_NO                       ;//임시전자계약서번호
	
	private String CHG_SQNO                              ;//변경일련번호
	
	private String COLB_COMP_SEAL_APDFLNM                ;//변경일련번호
	private String COLB_COMP_SEAL_SYS_FLNM               ;//변경일련번호
	private String BUYER_SEAL_APDFLNM                    ;//변경일련번호
	private String BUYER_SEAL_SYS_FLNM                   ;//변경일련번호
	private String BIGO;
	private String CHG_REQ_STAT;
	private String BUYER_SGNT		; // 협력업체서명
	private String BUYER_NA_TRPL_SEAL_FLNM ; // 바이어등록직인파일명

	private int CHG_NO ; //변경될 이관테이블 CHG_NO
	private List<EltCtrwVO> eltCtrwVOList;
	private List<EltCtrwDcmApdVO> eltCtrwDcmApdVOList;
	private List<AnwEltCtrwDrupVO> eltCtrwStsList;
	private List<EtcEltNtcVO> etcEltNtcVoList;

	private String SIMP_TPC;						//전자계약서작성
	private String SIMP_C;							//바이어 구분
	private String SIMP_CNM;						//바이어 구분 설명
	private String CD_TYPE;							//계약서 종류
	private String CD_M;							//바이어 구분
	private String CD_D;							//계약서 구분
	private String ATCH_CTR_CNT; // 부속계약서 건 수
	private String ATCH_CTR_NO; // 부속계약서 번호(단일 표시 용)
	private String CLEAN_YN; // 청령계약제 시행안내문 붙임여부
	private String SEAL_OMIT_YN; // 직인생략여부
	private String CTR_CHRR; // 계약담당자
	
	public String getCHG_REQ_STAT() {
		return CHG_REQ_STAT;
	}

	public void setCHG_REQ_STAT(String cHG_REQ_STAT) {
		CHG_REQ_STAT = cHG_REQ_STAT;
	}

	public String getCOLB_COMP_SEAL_APDFLNM() {
		return COLB_COMP_SEAL_APDFLNM;
	}

	public void setCOLB_COMP_SEAL_APDFLNM(String cOLB_COMP_SEAL_APDFLNM) {
		COLB_COMP_SEAL_APDFLNM = cOLB_COMP_SEAL_APDFLNM;
	}

	public String getCOLB_COMP_SEAL_SYS_FLNM() {
		return COLB_COMP_SEAL_SYS_FLNM;
	}

	public void setCOLB_COMP_SEAL_SYS_FLNM(String cOLB_COMP_SEAL_SYS_FLNM) {
		COLB_COMP_SEAL_SYS_FLNM = cOLB_COMP_SEAL_SYS_FLNM;
	}

	public String getBUYER_SEAL_APDFLNM() {
		return BUYER_SEAL_APDFLNM;
	}

	public void setBUYER_SEAL_APDFLNM(String bUYER_SEAL_APDFLNM) {
		BUYER_SEAL_APDFLNM = bUYER_SEAL_APDFLNM;
	}

	public String getBUYER_SEAL_SYS_FLNM() {
		return BUYER_SEAL_SYS_FLNM;
	}

	public void setBUYER_SEAL_SYS_FLNM(String bUYER_SEAL_SYS_FLNM) {
		BUYER_SEAL_SYS_FLNM = bUYER_SEAL_SYS_FLNM;
	}

	public String getCTR_DT() {
		return CTR_DT;
	}

	public void setCTR_DT(String cTR_DT) {
		CTR_DT = cTR_DT;
	}

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
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getSQNO() {
		return SQNO;
	}
	public void setSQNO(String sQNO) {
		SQNO = sQNO;
	}
	public String getMN_CTRW_KD() {
		return MN_CTRW_KD;
	}
	public void setMN_CTRW_KD(String mN_CTRW_KD) {
		MN_CTRW_KD = mN_CTRW_KD;
	}
	public String getMN_CTRW_KD_NM() {
		return MN_CTRW_KD_NM;
	}
	public void setMN_CTRW_KD_NM(String mN_CTRW_KD_NM) {
		MN_CTRW_KD_NM = mN_CTRW_KD_NM;
	}
	public String getADD_CTRW() {
		return ADD_CTRW;
	}
	public void setADD_CTRW(String aDD_CTRW) {
		ADD_CTRW = aDD_CTRW;
	}
	public String getPMIW() {
		return PMIW;
	}
	public void setPMIW(String pMIW) {
		PMIW = pMIW;
	}
	public String getSCTRW() {
		return SCTRW;
	}
	public void setSCTRW(String sCTRW) {
		SCTRW = sCTRW;
	}
	public String getETC_CTRW() {
		return ETC_CTRW;
	}
	public void setETC_CTRW(String eTC_CTRW) {
		ETC_CTRW = eTC_CTRW;
	}
	public String getBZNO() {
		return BZNO;
	}
	public void setBZNO(String bZNO) {
		BZNO = bZNO;
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
	public String getBUYER_NA_TRPL_C() {
		return BUYER_NA_TRPL_C;
	}
	public void setBUYER_NA_TRPL_C(String bUYER_NA_TRPL_C) {
		BUYER_NA_TRPL_C = bUYER_NA_TRPL_C;
	}
	public String getTELNO() {
		return TELNO;
	}
	public void setTELNO(String tELNO) {
		TELNO = tELNO;
	}
	public String getEMAIL() {
		return EMAIL;
	}
	public void setEMAIL(String eMAIL) {
		EMAIL = eMAIL;
	}
	public String getCTRW_STY_VER() {
		return CTRW_STY_VER;
	}
	public void setCTRW_STY_VER(String cTRW_STY_VER) {
		CTRW_STY_VER = cTRW_STY_VER;
	}
	public String getCTR_ST_DT() {
		return CTR_ST_DT;
	}
	public void setCTR_ST_DT(String cTR_ST_DT) {
		CTR_ST_DT = cTR_ST_DT;
	}
	public String getCTR_ED_DT() {
		return CTR_ED_DT;
	}
	public void setCTR_ED_DT(String cTR_ED_DT) {
		CTR_ED_DT = cTR_ED_DT;
	}
	public String getCTRW_DRUP_DT() {
		return CTRW_DRUP_DT;
	}
	public void setCTRW_DRUP_DT(String cTRW_DRUP_DT) {
		CTRW_DRUP_DT = cTRW_DRUP_DT;
	}
	public String getCEO() {
		return CEO;
	}
	public void setCEO(String cEO) {
		CEO = cEO;
	}
	public String getMTALNM() {
		return MTALNM;
	}
	public void setMTALNM(String mTALNM) {
		MTALNM = mTALNM;
	}
	public String getFZIP() {
		return FZIP;
	}
	public void setFZIP(String fZIP) {
		FZIP = fZIP;
	}
	public String getRZIP() {
		return RZIP;
	}
	public void setRZIP(String rZIP) {
		RZIP = rZIP;
	}
	public String getZIP_SQNO() {
		return ZIP_SQNO;
	}
	public void setZIP_SQNO(String zIP_SQNO) {
		ZIP_SQNO = zIP_SQNO;
	}
	public String getDONGUP() {
		return DONGUP;
	}
	public void setDONGUP(String dONGUP) {
		DONGUP = dONGUP;
	}
	public String getDONGBW() {
		return DONGBW;
	}
	public void setDONGBW(String dONGBW) {
		DONGBW = dONGBW;
	}
	public String getBUYER_ENO() {
		return BUYER_ENO;
	}
	public void setBUYER_ENO(String bUYER_ENO) {
		BUYER_ENO = bUYER_ENO;
	}
	public String getBUYER_BLG() {
		return BUYER_BLG;
	}
	public void setBUYER_BLG(String bUYER_BLG) {
		BUYER_BLG = bUYER_BLG;
	}
	public String getBUYER_NM() {
		return BUYER_NM;
	}
	public void setBUYER_NM(String bUYER_NM) {
		BUYER_NM = bUYER_NM;
	}
	public String getBUYER_TELNO() {
		return BUYER_TELNO;
	}
	public void setBUYER_TELNO(String bUYER_TELNO) {
		BUYER_TELNO = bUYER_TELNO;
	}
	public String getBUYER_EMAIL() {
		return BUYER_EMAIL;
	}
	public void setBUYER_EMAIL(String bUYER_EMAIL) {
		BUYER_EMAIL = bUYER_EMAIL;
	}
	public String getCTR_CHRR_MTALNM() {
		return CTR_CHRR_MTALNM;
	}
	public void setCTR_CHRR_MTALNM(String cTR_CHRR_MTALNM) {
		CTR_CHRR_MTALNM = cTR_CHRR_MTALNM;
	}
	public String getCTR_CHRR_REPMN() {
		return CTR_CHRR_REPMN;
	}
	public void setCTR_CHRR_REPMN(String cTR_CHRR_REPMN) {
		CTR_CHRR_REPMN = cTR_CHRR_REPMN;
	}
	public String getLA_AGNT() {
		return LA_AGNT;
	}
	public void setLA_AGNT(String lA_AGNT) {
		LA_AGNT = lA_AGNT;
	}
	public String getCTR_CHRR_FZIP() {
		return CTR_CHRR_FZIP;
	}
	public void setCTR_CHRR_FZIP(String cTR_CHRR_FZIP) {
		CTR_CHRR_FZIP = cTR_CHRR_FZIP;
	}
	public String getCTR_CHRR_RZIP() {
		return CTR_CHRR_RZIP;
	}
	public void setCTR_CHRR_RZIP(String cTR_CHRR_RZIP) {
		CTR_CHRR_RZIP = cTR_CHRR_RZIP;
	}
	public String getCTR_CHRR_ZIP_SQNO() {
		return CTR_CHRR_ZIP_SQNO;
	}
	public void setCTR_CHRR_ZIP_SQNO(String cTR_CHRR_ZIP_SQNO) {
		CTR_CHRR_ZIP_SQNO = cTR_CHRR_ZIP_SQNO;
	}
	public String getCTR_CHRR_DONGUP() {
		return CTR_CHRR_DONGUP;
	}
	public void setCTR_CHRR_DONGUP(String cTR_CHRR_DONGUP) {
		CTR_CHRR_DONGUP = cTR_CHRR_DONGUP;
	}
	public String getCTR_CHRR_DONGBW() {
		return CTR_CHRR_DONGBW;
	}
	public void setCTR_CHRR_DONGBW(String cTR_CHRR_DONGBW) {
		CTR_CHRR_DONGBW = cTR_CHRR_DONGBW;
	}
	public String getRMK() {
		return RMK;
	}
	public void setRMK(String rMK) {
		RMK = rMK;
	}
	public String getSTS() {
		return STS;
	}
	public void setSTS(String sTS) {
		STS = sTS;
	}
	public String getSTS_NM() {
		return STS_NM;
	}
	public void setSTS_NM(String sTS_NM) {
		STS_NM = sTS_NM;
	}
	public String getSTS_CANCEL() {
		return STS_CANCEL;
	}
	public void setSTS_CANCEL(String sTS_CANCEL) {
		STS_CANCEL = sTS_CANCEL;
	}
	public String getSTS_EXP() {
		return STS_EXP;
	}
	public void setSTS_EXP(String sTS_EXP) {
		STS_EXP = sTS_EXP;
	}
	public String getCOLB_COMP_SGNT() {
		return COLB_COMP_SGNT;
	}
	public void setCOLB_COMP_SGNT(String cOLB_COMP_SGNT) {
		COLB_COMP_SGNT = cOLB_COMP_SGNT;
	}
	public String getBUYER_APV_STS() {
		return BUYER_APV_STS;
	}
	public void setBUYER_APV_STS(String bUYER_APV_STS) {
		BUYER_APV_STS = bUYER_APV_STS;
	}
	public String getCTR_PRD_AUT_XTN_YN() {
		return CTR_PRD_AUT_XTN_YN;
	}
	public void setCTR_PRD_AUT_XTN_YN(String cTR_PRD_AUT_XTN_YN) {
		CTR_PRD_AUT_XTN_YN = cTR_PRD_AUT_XTN_YN;
	}
	public String getFGAT_PRVT_C() {
		return FGAT_PRVT_C;
	}
	public void setFGAT_PRVT_C(String fGAT_PRVT_C) {
		FGAT_PRVT_C = fGAT_PRVT_C;
	}
	public String getBF_CTR_NO() {
		return BF_CTR_NO;
	}
	public void setBF_CTR_NO(String bF_CTR_NO) {
		BF_CTR_NO = bF_CTR_NO;
	}
	public String getBF_CTR_SQNO() {
		return BF_CTR_SQNO;
	}
	public void setBF_CTR_SQNO(String bF_CTR_SQNO) {
		BF_CTR_SQNO = bF_CTR_SQNO;
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
	public String getISCHECKED() {
		return ISCHECKED;
	}
	public void setISCHECKED(String iSCHECKED) {
		ISCHECKED = iSCHECKED;
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
	public String getMN_CTRW_KDC() {
		return MN_CTRW_KDC;
	}
	public void setMN_CTRW_KDC(String mN_CTRW_KDC) {
		MN_CTRW_KDC = mN_CTRW_KDC;
	}
	public String getDCM_C() {
		return DCM_C;
	}
	public void setDCM_C(String dCM_C) {
		DCM_C = dCM_C;
	}
	public String getAPDFLNM() {
		return APDFLNM;
	}
	public void setAPDFLNM(String aPDFLNM) {
		APDFLNM = aPDFLNM;
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
	public String getRLTM_NTC_SMS() {
		return RLTM_NTC_SMS;
	}
	public void setRLTM_NTC_SMS(String rLTM_NTC_SMS) {
		RLTM_NTC_SMS = rLTM_NTC_SMS;
	}
	public String getSMS_NATV_NO() {
		return SMS_NATV_NO;
	}
	public void setSMS_NATV_NO(String sMS_NATV_NO) {
		SMS_NATV_NO = sMS_NATV_NO;
	}
	public String getRLTM_NTC_EMAIL() {
		return RLTM_NTC_EMAIL;
	}
	public void setRLTM_NTC_EMAIL(String rLTM_NTC_EMAIL) {
		RLTM_NTC_EMAIL = rLTM_NTC_EMAIL;
	}
	public String getEMAIL_NATV_NO() {
		return EMAIL_NATV_NO;
	}
	public void setEMAIL_NATV_NO(String eMAIL_NATV_NO) {
		EMAIL_NATV_NO = eMAIL_NATV_NO;
	}
	public String getCHRG_BUYER_NM() {
		return CHRG_BUYER_NM;
	}
	public void setCHRG_BUYER_NM(String cHRG_BUYER_NM) {
		CHRG_BUYER_NM = cHRG_BUYER_NM;
	}
	public String getCHRG_BUYER_CTCPL() {
		return CHRG_BUYER_CTCPL;
	}
	public void setCHRG_BUYER_CTCPL(String cHRG_BUYER_CTCPL) {
		CHRG_BUYER_CTCPL = cHRG_BUYER_CTCPL;
	}
	public String getCTRW_KDC() {
		return CTRW_KDC;
	}
	public void setCTRW_KDC(String cTRW_KDC) {
		CTRW_KDC = cTRW_KDC;
	}
	public String getMPNO() {
		return MPNO;
	}
	public void setMPNO(String mPNO) {
		MPNO = mPNO;
	}
	public String getTINM() {
		return TINM;
	}
	public void setTINM(String tINM) {
		TINM = tINM;
	}
	public String getCNTN() {
		return CNTN;
	}
	public void setCNTN(String cNTN) {
		CNTN = cNTN;
	}
	public String getUSR_TPC() {
		return USR_TPC;
	}
	public void setUSR_TPC(String uSR_TPC) {
		USR_TPC = uSR_TPC;
	}
	public String getBUYER_MPNO() {
		return BUYER_MPNO;
	}
	public void setBUYER_MPNO(String bUYER_MPNO) {
		BUYER_MPNO = bUYER_MPNO;
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
	
	public String getBUYER_SGNT() {
		return BUYER_SGNT;
	}

	public void setBUYER_SGNT(String bUYER_SGNT) {
		BUYER_SGNT = bUYER_SGNT;
	}
	
	public String getBUYER_NA_TRPL_SEAL_FLNM() {
		return BUYER_NA_TRPL_SEAL_FLNM;
	}

	public void setBUYER_NA_TRPL_SEAL_FLNM(String bUYER_NA_TRPL_SEAL_FLNM) {
		BUYER_NA_TRPL_SEAL_FLNM = bUYER_NA_TRPL_SEAL_FLNM;
	}

	public List<EtcEltNtcVO> getEtcEltNtcVoList() {
		return etcEltNtcVoList;
	}
	public void setEtcEltNtcVoList(List<EtcEltNtcVO> etcEltNtcVoList) {
		this.etcEltNtcVoList = etcEltNtcVoList;
	}
	public List<EltCtrwVO> getEltCtrwVOList() {
		return eltCtrwVOList;
	}
	public void setEltCtrwVOList(List<EltCtrwVO> eltCtrwVOList) {
		this.eltCtrwVOList = eltCtrwVOList;
	}
	public List<EltCtrwDcmApdVO> getEltCtrwDcmApdVOList() {
		return eltCtrwDcmApdVOList;
	}
	public void setEltCtrwDcmApdVOList(List<EltCtrwDcmApdVO> eltCtrwDcmApdVOList) {
		this.eltCtrwDcmApdVOList = eltCtrwDcmApdVOList;
	}
	public void setEltCtrwDcmApdList(List<EltCtrwDcmApdVO> eltCtrwDcmApdVOList) {
		this.eltCtrwDcmApdVOList = eltCtrwDcmApdVOList;
	}
	public List<AnwEltCtrwDrupVO> getEltCtrwStsList() {
		return eltCtrwStsList;
	}
	public void setEltCtrwStsList(List<AnwEltCtrwDrupVO> eltCtrwStsList) {
		this.eltCtrwStsList = eltCtrwStsList;
	}
	public String getTMP_STS() {
		return TMP_STS;
	}
	public void setTMP_STS(String tMP_STS) {
		TMP_STS = tMP_STS;
	}

	public String getBIGO() {
		return BIGO;
	}

	public void setBIGO(String bIGO) {
		BIGO = bIGO;
	}

	public String getCHG_BUYER_NM() {
		return CHG_BUYER_NM;
	}

	public void setCHG_BUYER_NM(String cHG_BUYER_NM) {
		CHG_BUYER_NM = cHG_BUYER_NM;
	}

	public String getCHG_BUYER_ENO() {
		return CHG_BUYER_ENO;
	}

	public void setCHG_BUYER_ENO(String cHG_BUYER_ENO) {
		CHG_BUYER_ENO = cHG_BUYER_ENO;
	}

	public int getCHG_NO() {
		return CHG_NO;
	}

	public void setCHG_NO(int cHG_NO) {
		CHG_NO = cHG_NO;
	}

	public String getSIMP_TPC() {
		return SIMP_TPC;
	}

	public void setSIMP_TPC(String sIMP_TPC) {
		SIMP_TPC = sIMP_TPC;
	}

	public String getSIMP_C() {
		return SIMP_C;
	}

	public void setSIMP_C(String sIMP_C) {
		SIMP_C = sIMP_C;
	}

	public String getSIMP_CNM() {
		return SIMP_CNM;
	}

	public void setSIMP_CNM(String sIMP_CNM) {
		SIMP_CNM = sIMP_CNM;
	}

	public String getCD_TYPE() {
		return CD_TYPE;
	}

	public void setCD_TYPE(String cD_TYPE) {
		CD_TYPE = cD_TYPE;
	}

	public String getCD_M() {
		return CD_M;
	}

	public void setCD_M(String cD_M) {
		CD_M = cD_M;
	}

	public String getCD_D() {
		return CD_D;
	}

	public void setCD_D(String cD_D) {
		CD_D = cD_D;
	}

	public String getATCH_CTR_CNT() {
		return ATCH_CTR_CNT;
	}

	public void setATCH_CTR_CNT(String aTCH_CTR_CNT) {
		ATCH_CTR_CNT = aTCH_CTR_CNT;
	}

	public String getATCH_CTR_NO() {
		return ATCH_CTR_NO;
	}

	public void setATCH_CTR_NO(String aTCH_CTR_NO) {
		ATCH_CTR_NO = aTCH_CTR_NO;
	}

	public String getCLEAN_YN() {
		return CLEAN_YN;
	}

	public void setCLEAN_YN(String cLEAN_YN) {
		CLEAN_YN = cLEAN_YN;
	}

	public String getSEAL_OMIT_YN() {
		return SEAL_OMIT_YN;
	}

	public void setSEAL_OMIT_YN(String sEAL_OMIT_YN) {
		SEAL_OMIT_YN = sEAL_OMIT_YN;
	}

	public String getCTR_CHRR() {
		return CTR_CHRR;
	}

	public void setCTR_CHRR(String cTR_CHRR) {
		CTR_CHRR = cTR_CHRR;
	}
}