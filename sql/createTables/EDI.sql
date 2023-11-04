--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_CM_SIMPC_TEMP    공통코드 템프
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_CM_SIMPC_TEMP ;

CREATE TABLE NHVANINF.TB_CM_SIMPC_TEMP (  
    SIMP_TPC                                                              VARCHAR2(50)      NOT NULL                  ,
    SIMP_C                                                                VARCHAR2(50)      NOT NULL                  ,
    SIMP_CNM                                                              VARCHAR2(300)     NOT NULL                  ,
    SIMP_C_EXPL                                                           VARCHAR2(2000)                              ,
    SIMP_C_SORT_SQ                                                        NUMBER(18,3)                                ,
    BIZ_TYPE                                                              VARCHAR2(50)                                ,
    USE_YN                                                                CHAR(1)           DEFAULT  'Y' NOT NULL     ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_SIMPC_TEMP PRIMARY KEY (SIMP_TPC,SIMP_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_SIMPC_TEMP                               IS '공통코드 템프'                          ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_TPC                      IS '단순유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_C                        IS '단순코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_CNM                      IS '단순코드명'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_C_EXPL                   IS '단순코드설명'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_C_SORT_SQ                IS '단순코드정렬순서'                       ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.BIZ_TYPE                      IS '사업유형'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.USE_YN                        IS '사용여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.DEL_YN                        IS '삭제여부(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_XML_AMN_DOC    XML 업체문서관리
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_XML_AMN_DOC ;

CREATE TABLE NHVANINF.TB_XML_AMN_DOC (  
    TRPL_C                                                                VARCHAR2(13)      NOT NULL                  ,
    DOCNM                                                                 CHAR(6)           NOT NULL                  ,
    DOC_UG_EN                                                             CHAR(1)                                     ,
    DOC_RG_DTM                                                            DATE                                        ,
    DOC_MOD_DTM                                                           DATE                                        ,
    CONSTRAINT PK_TB_XML_AMN_DOC PRIMARY KEY (TRPL_C,DOCNM) 
)
;

COMMENT ON TABLE  NHVANINF.TB_XML_AMN_DOC                                 IS 'XML 업체문서관리'                       ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.TRPL_C                          IS '공급업체 거래처코드'                    ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOCNM                           IS '문서명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOC_UG_EN                       IS '문서사용유무(Y/N)'                      ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOC_RG_DTM                      IS '등록일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOC_MOD_DTM                     IS '수정일시'                               ;

GRANT SELECT ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_SA_DP_STPL_XML    XML 업체 일단위 재고내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_SA_DP_STPL_XML ;

CREATE TABLE NHVANINF.TB_SA_DP_STPL_XML (  
    SL_DT                                                                 CHAR(8)           NOT NULL                  ,
    UP_SPLR_NA_TRPL_C                                                     VARCHAR2(13)      NOT NULL                  ,
    SPLR_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    STPL_QT                                                               NUMBER(18, 3)                               ,
    CONSTRAINT PK_TB_SA_DP_STPL_XML PRIMARY KEY (SL_DT,UP_SPLR_NA_TRPL_C,SPLR_NA_TRPL_C,NA_BZPLC,NA_TEAM_C,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_SA_DP_STPL_XML                              IS 'XML 업체 일단위 재고내역'               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.SL_DT                        IS '매출일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.UP_SPLR_NA_TRPL_C            IS '공급자본사경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.SPLR_NA_TRPL_C               IS '공급자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.NA_TEAM_C                    IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.NA_WRS_C                     IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.STPL_QT                      IS '재고수량'                               ;

GRANT SELECT ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 


