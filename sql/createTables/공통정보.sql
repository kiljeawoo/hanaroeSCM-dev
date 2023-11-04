--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_SIMPC    공통코드
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_SIMPC ;

CREATE TABLE NHVANINF.TB_CM_SIMPC (  
    SIMP_TPC                                                              VARCHAR2(50)      NOT NULL                  ,
    SIMP_C                                                                VARCHAR2(50)      NOT NULL                  ,
    SIMP_CNM                                                              VARCHAR2(300)     NOT NULL                  ,
    SIMP_C_EXPL                                                           VARCHAR2(2000)                              ,
    SIMP_C_SORT_SQ                                                        NUMBER(18,3)                                ,
    BIZ_TYPE                                                              VARCHAR2(50)                                ,
    USE_YN                                                                CHAR(1)           DEFAULT  'Y' NOT NULL     ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_SIMPC PRIMARY KEY (SIMP_TPC,SIMP_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_SIMPC                                    IS '공통코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_TPC                           IS '단순유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_C                             IS '단순코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_CNM                           IS '단순코드명'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_C_EXPL                        IS '단순코드설명'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_C_SORT_SQ                     IS '단순코드정렬순서'                       ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.BIZ_TYPE                           IS '사업유형'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.USE_YN                             IS '사용여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.DEL_YN                             IS '삭제여부(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_DTHLDY_ORGZ    조직별휴일내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_DTHLDY_ORGZ ;

CREATE TABLE NHVANINF.TB_CM_DTHLDY_ORGZ (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    BAS_DT                                                                CHAR(8)           NOT NULL                  ,
    HLDY_DSC                                                              CHAR(1)                                     ,
    HLDYNM                                                                VARCHAR2(50)                                ,
    DOW_C                                                                 CHAR(1)                                     ,
    BIZDT_YN                                                              CHAR(1)                                     ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_DTHLDY_ORGZ PRIMARY KEY (NA_TRPL_C,BAS_DT) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_DTHLDY_ORGZ                              IS '조직별휴일내역'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.NA_TRPL_C                    IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.BAS_DT                       IS '기준일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.HLDY_DSC                     IS '휴일구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.HLDYNM                       IS '휴일명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.DOW_C                        IS '요일코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.BIZDT_YN                     IS '영업일여부'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.DEL_YN                       IS '삭제여부(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_BZPL    사업장기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_BZPL ;

CREATE TABLE NHVANINF.TB_CM_BZPL (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_BZ_TPC                                                             VARCHAR2(2)                                 ,
    BZPL_TPC                                                              VARCHAR2(3)       NOT NULL                  ,
    BZPL_DTI_TPC                                                          VARCHAR2(3)                                 ,
    SHRT_BZPLNM                                                           VARCHAR2(50)                                ,
    PRGR_DSC                                                              CHAR(1)                                     ,
    DSTR_BSN_DSC                                                          VARCHAR2(2)                                 ,
    CONSTRAINT PK_TB_CM_BZPL PRIMARY KEY (NA_BZPLC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_BZPL                                     IS '사업장기본'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.NA_BZPLC                            IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.NA_BZ_TPC                           IS '경제통합사업유형코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.BZPL_TPC                            IS '사업장유형코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.BZPL_DTI_TPC                        IS '사업장세부유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.SHRT_BZPLNM                         IS '사업장명'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.PRGR_DSC                            IS '가격군구분코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.DSTR_BSN_DSC                        IS '유통업무구분코드'                       ;

GRANT SELECT ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_TEAM    팀기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_TEAM ;

CREATE TABLE NHVANINF.TB_CM_TEAM (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    TEAMNM                                                                VARCHAR2(20)                                ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_TEAM PRIMARY KEY (NA_BZPLC,NA_TEAM_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_TEAM                                     IS '팀기본'                                 ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.NA_BZPLC                            IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.NA_TEAM_C                           IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.TEAMNM                              IS '팀명'                                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.DEL_YN				  IS '삭제여부(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_BUYER    바이어기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_BUYER ;

CREATE TABLE NHVANINF.TB_CM_BUYER (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    BUYER_ENO                                                             VARCHAR2(9)       NOT NULL                  ,
    BUYER_NM                                                              VARCHAR2(40)                                ,
    DEPTNM                                                                VARCHAR2(60)                                ,
    CHRG_BSNNM                                                            VARCHAR2(50)                                ,
    MPNO                                                                  VARCHAR2(14)                                ,
    OFT                                                                   VARCHAR2(20)                                ,
    OPNP_YN                                                               CHAR(1)                                     ,
    CONSTRAINT PK_TB_CM_BUYER PRIMARY KEY (NA_BZPLC,NA_TEAM_C,BUYER_ENO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_BUYER                                    IS '바이어기본'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.NA_BZPLC                           IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.NA_TEAM_C                          IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.BUYER_ENO                          IS '바이어개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.BUYER_NM                           IS '바이어명'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.DEPTNM                             IS '부서명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.CHRG_BSNNM                         IS '담당업무명'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.MPNO                               IS '휴대전화번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.OFT                                IS '직명'                                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.OPNP_YN                            IS '공개여부'                               ;

GRANT SELECT ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_PRGR_BASE    팀별가격군기준기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_PRGR_BASE ;

CREATE TABLE NHVANINF.TB_CM_PRGR_BASE (  
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    PRGR_DSC                                                              CHAR(1)           NOT NULL                  ,
    PGNM                                                                  VARCHAR2(40)                                ,
    CONSTRAINT PK_TB_CM_PRGR_BASE PRIMARY KEY (PRGR_C,PRGR_DSC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_PRGR_BASE                                IS '팀별가격군기준기본'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_PRGR_BASE.PRGR_C                         IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_PRGR_BASE.PRGR_DSC                       IS '가격군구분코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_PRGR_BASE.PGNM                           IS '가격군명'                               ;

GRANT SELECT ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_VCBT_FEE    공병공상자수수료기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_VCBT_FEE ;

CREATE TABLE NHVANINF.TB_CM_VCBT_FEE (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    VCBT_FEE                                                              NUMBER(18)                                  ,
    FEE_VAT                                                               NUMBER(18)                                  ,
    CONSTRAINT PK_TB_CM_VCBT_FEE PRIMARY KEY (NA_BZPLC,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_VCBT_FEE                                 IS '공병공상자수수료기본'                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.NA_BZPLC                        IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.NA_WRS_C                        IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.VCBT_FEE                        IS '공병수수료'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.FEE_VAT                         IS '수수료부가세'                           ;

GRANT SELECT ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_SEQ    시퀀스키생성
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_SEQ ;

CREATE TABLE NHVANINF.TB_CM_SEQ (  
    NAME                                                                  VARCHAR2(50)      NOT NULL                  ,
    CURRENT_KEY                                                           NUMBER(38)                                  ,
    CURRENT_HEX                                                           VARCHAR2(30)                                ,
    CONSTRAINT PK_TB_CM_SEQ PRIMARY KEY (NAME) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_SEQ                                      IS '시퀀스키생성'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SEQ.NAME                                 IS '시퀀스명'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SEQ.CURRENT_KEY                          IS '10진수키'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SEQ.CURRENT_HEX                          IS '16진수키'                               ;

GRANT SELECT ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANPTL.TB_PUSH_MSG    PUSH/SMS 메시지
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANPTL.TB_PUSH_MSG ;

CREATE TABLE NHVANPTL.TB_PUSH_MSG (  
    MESSAGE_ID                                                            NUMBER(38)        NOT NULL                  ,
    MB_ID                                                                 VARCHAR2(9)       NOT NULL                  ,
    USR_HP                                                                VARCHAR2(14)                                ,
    SEND_TP                                                               VARCHAR2(4)                                 ,
    SENT_TP                                                               VARCHAR2(4)                                 ,
    STATUS                                                                VARCHAR2(5)                                 ,
    SUBJECT                                                               VARCHAR2(50)                                ,
    MSG                                                                   VARCHAR2(200)                               ,
    INPUT_DTM                                                             DATE                                        ,
    SEND_DTM                                                              DATE                                        ,
    ATTACH_URL                                                            VARCHAR2(500)                               ,
    CONSTRAINT PK_TB_PUSH_MSG PRIMARY KEY (MESSAGE_ID,MB_ID) 
)
;

COMMENT ON TABLE  NHVANPTL.TB_PUSH_MSG                                    IS 'PUSH/SMS 메시지'                        ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.MESSAGE_ID                         IS '메시지아이디'                           ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.MB_ID                              IS '회원아이디'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.USR_HP                             IS '핸드폰번호'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SEND_TP                            IS '전송타입'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SENT_TP                            IS '전송된타입'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.STATUS                             IS '진행상태'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SUBJECT                            IS '메시지타이틀'                           ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.MSG                                IS '메시지내용'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.INPUT_DTM                          IS '입력일시'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SEND_DTM                           IS '전송일지'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.ATTACH_URL                         IS '첨부URL'                                ;

GRANT SELECT ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 


