package com.nh.escm.pds.dmart.vo;

public class DmartVO {
    
    private String REQ_TM          ;     // 신청일시                                    
    private String REQ_ID          ;     // 신청ID                                      
    private String REQ_STAT        ;     // 진행상태(1:신청,2:진행,3:생성,4:삭제,5:오류)
    private String REQ_STAT_NM      ;     // 진행상태(1:신청,2:진행,3:생성,4:삭제,5:오류)
    
    private String REQ_DOC         ;     // 신청문서 코드
    private String REQ_DOC_NM    ;     // 신청문서 코드
    
    private String DOC_TYPE         ;     // 문서유형(1:전표별,3:상품별)
    private String DOC_TYPE_NM   ;     // 문서유형(1:전표별,3:상품별)
    
    private String DOC_TYPE_DTL1         ;     // 문서유형(1:전표별,3:상품별)
    private String DOC_TYPE_DTL1_NM   ;     // 문서유형(1:전표별,3:상품별)
    
    
    private String REQ_TRPL_C      ;     // 신청권한사업장(A:권한사업장전체)            
    private String SRCH_DAY_TYPE   ;     // 조회기준일(1:매출일,2:검수일,3:지급예정일)  
    private String SRCH_DAY_TYPE_NM   ;     // 조회기준일 명(1:매출일,2:검수일,3:지급예정일)  

    private String SRCH_FM_DT      ;     // 조회시작일                                  
    private String SRCH_ED_DT      ;     // 조회종료일                                  
    private String RSLT_DOC_FMT    ;     // 결과문서포맷(1:텍스트,2:엑셀)
    private String RSLT_DOC_FMT_NM    ;     // 결과문서포맷(1:텍스트,2:엑셀)

	private String BATCH_ST_TM     ;     // 배치시작시간                                
    private String BATCH_ED_TM     ;     // 배치종료시간                                
    private String DEL_DT          ;     // 삭제예정일자                                
    private String FILE_PATH       ;     // 파일경로                                    
    private String COMP_FILE_SIZE  ;     // 압축파일크기                                
    private String TOT_EDI_SIZE    ;     // 전체EDI문서크기                             
    private String BATCH_INST_ID  ;     // 데이터링크 인스턴스 ID                                    
    private String SMS_SEND_TM     ;     // SMS전송일시(N:미전송)    
    private String FSRG_DTM        ;     //          최초등록일시
    private String FS_RGM            ;     //        최초등록자 
    private String LSCHG_DTM        ;     //         최종변경일시
    private String LS_CHGM         ;     //          최종변경자 
    
    private String DN_CNT         ;     //   다운로드 횟수

    public String getREQ_DOC_NM() {
		return REQ_DOC_NM;
	}
	public void setREQ_DOC_NM(String rEQ_DOC_NM) {
		REQ_DOC_NM = rEQ_DOC_NM;
	}
	public String getDOC_TYPE_NM() {
		return DOC_TYPE_NM;
	}
	public void setDOC_TYPE_NM(String dOC_TYPE_NM) {
		DOC_TYPE_NM = dOC_TYPE_NM;
	}
	
	
	public String getDOC_TYPE_DTL1() {
		return DOC_TYPE_DTL1;
	}
	public void setDOC_TYPE_DTL1(String dOC_TYPE_DTL1) {
		DOC_TYPE_DTL1 = dOC_TYPE_DTL1;
	}
	public String getDOC_TYPE_DTL1_NM() {
		return DOC_TYPE_DTL1_NM;
	}
	public void setDOC_TYPE_DTL1_NM(String dOC_TYPE_DTL1_NM) {
		DOC_TYPE_DTL1_NM = dOC_TYPE_DTL1_NM;
	}
	public String getRSLT_DOC_FMT_NM() {
		return RSLT_DOC_FMT_NM;
	}
	public void setRSLT_DOC_FMT_NM(String rSLT_DOC_FMT_NM) {
		RSLT_DOC_FMT_NM = rSLT_DOC_FMT_NM;
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
	public String getREQ_TM() {
		return REQ_TM;
	}
	public void setREQ_TM(String rEQ_TM) {
		REQ_TM = rEQ_TM;
	}
	public String getREQ_ID() {
		return REQ_ID;
	}
	public void setREQ_ID(String rEQ_ID) {
		REQ_ID = rEQ_ID;
	}
	public String getREQ_STAT() {
		return REQ_STAT;
	}
	public void setREQ_STAT(String rEQ_STAT) {
		REQ_STAT = rEQ_STAT;
	}
	
	public String getREQ_STAT_NM() {
		return REQ_STAT_NM;
	}
	public void setREQ_STAT_NM(String rEQ_STAT_NM) {
		REQ_STAT_NM = rEQ_STAT_NM;
	}
	public String getREQ_DOC() {
		return REQ_DOC;
	}
	public void setREQ_DOC(String rEQ_DOC) {
		REQ_DOC = rEQ_DOC;
	}
	public String getDOC_TYPE() {
		return DOC_TYPE;
	}
	public void setDOC_TYPE(String dOC_TYPE) {
		DOC_TYPE = dOC_TYPE;
	}
	public String getREQ_TRPL_C() {
		return REQ_TRPL_C;
	}
	public void setREQ_TRPL_C(String rEQ_TRPL_C) {
		REQ_TRPL_C = rEQ_TRPL_C;
	}
	public String getSRCH_DAY_TYPE() {
		return SRCH_DAY_TYPE;
	}
	public void setSRCH_DAY_TYPE(String sRCH_DAY_TYPE) {
		SRCH_DAY_TYPE = sRCH_DAY_TYPE;
	}
	
	public String getSRCH_DAY_TYPE_NM() {
		return SRCH_DAY_TYPE_NM;
	}
	public void setSRCH_DAY_TYPE_NM(String sRCH_DAY_TYPE_NM) {
		SRCH_DAY_TYPE_NM = sRCH_DAY_TYPE_NM;
	}
	public String getSRCH_FM_DT() {
		return SRCH_FM_DT;
	}
	public void setSRCH_FM_DT(String sRCH_FM_DT) {
		SRCH_FM_DT = sRCH_FM_DT;
	}
	public String getSRCH_ED_DT() {
		return SRCH_ED_DT;
	}
	public void setSRCH_ED_DT(String sRCH_ED_DT) {
		SRCH_ED_DT = sRCH_ED_DT;
	}
	public String getRSLT_DOC_FMT() {
		return RSLT_DOC_FMT;
	}
	public void setRSLT_DOC_FMT(String rSLT_DOC_FMT) {
		RSLT_DOC_FMT = rSLT_DOC_FMT;
	}
	public String getBATCH_ST_TM() {
		return BATCH_ST_TM;
	}
	public void setBATCH_ST_TM(String bATCH_ST_TM) {
		BATCH_ST_TM = bATCH_ST_TM;
	}
	public String getBATCH_ED_TM() {
		return BATCH_ED_TM;
	}
	public void setBATCH_ED_TM(String bATCH_ED_TM) {
		BATCH_ED_TM = bATCH_ED_TM;
	}
	public String getDEL_DT() {
		return DEL_DT;
	}
	public void setDEL_DT(String dEL_DT) {
		DEL_DT = dEL_DT;
	}
	public String getFILE_PATH() {
		return FILE_PATH;
	}
	public void setFILE_PATH(String fILE_PATH) {
		FILE_PATH = fILE_PATH;
	}
	public String getCOMP_FILE_SIZE() {
		return COMP_FILE_SIZE;
	}
	public void setCOMP_FILE_SIZE(String cOMP_FILE_SIZE) {
		COMP_FILE_SIZE = cOMP_FILE_SIZE;
	}
	public String getTOT_EDI_SIZE() {
		return TOT_EDI_SIZE;
	}
	public void setTOT_EDI_SIZE(String tOT_EDI_SIZE) {
		TOT_EDI_SIZE = tOT_EDI_SIZE;
	}
	public String getBATCH_INST_ID() {
		return BATCH_INST_ID;
	}
	public void setBATCH_INST_ID(String bATCH_INST_ID) {
		BATCH_INST_ID = bATCH_INST_ID;
	}
	public String getSMS_SEND_TM() {
		return SMS_SEND_TM;
	}
	public void setSMS_SEND_TM(String sMS_SEND_TM) {
		SMS_SEND_TM = sMS_SEND_TM;
	}
	public String getDN_CNT() {
		return DN_CNT;
	}
	public void setDN_CNT(String dN_CNT) {
		DN_CNT = dN_CNT;
	}
    

	
}
