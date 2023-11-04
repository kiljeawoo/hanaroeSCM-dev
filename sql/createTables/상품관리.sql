--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_BUYER    상품분류별바이어기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_BUYER ;

CREATE TABLE NHVANINF.TB_GD_WRS_BUYER (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_WRS_LCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_MCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_SCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_DTCF_C                                                         VARCHAR2(3)       NOT NULL                  ,
    BUYER_ENO                                                             VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_GD_WRS_BUYER PRIMARY KEY (NA_BZPLC,NA_WRS_LCLC,NA_WRS_MCLC,NA_WRS_SCLC,NA_WRS_DTCF_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_BUYER                                IS '상품분류별바이어기본'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_BZPLC                       IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_LCLC                    IS '상품대분류코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_MCLC                    IS '상품중분류코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_SCLC                    IS '상품소분류코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_DTCF_C                  IS '상품세분류코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.BUYER_ENO                      IS '바이어개인번호'                         ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_ATTR    상품속성코드
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_ATTR ;

CREATE TABLE NHVANINF.TB_GD_WRS_ATTR (  
    WRS_ATTR_DSC                                                          VARCHAR2(2)       NOT NULL                  ,
    NA_WRS_ATTR_C                                                         VARCHAR2(5)       NOT NULL                  ,
    NA_WRS_ATTNM                                                          VARCHAR2(100)                               ,
    CONSTRAINT PK_TB_GD_WRS_ATTR PRIMARY KEY (WRS_ATTR_DSC,NA_WRS_ATTR_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_ATTR                                 IS '상품속성코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_ATTR.WRS_ATTR_DSC                    IS '상품속성구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_ATTR.NA_WRS_ATTR_C                   IS '경제통합상품속성코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_ATTR.NA_WRS_ATTNM                    IS '경제통합상품속성명'                     ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_CLF    상품분류코드
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_CLF ;

CREATE TABLE NHVANINF.TB_GD_WRS_CLF (  
    NA_WRS_LCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_MCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_SCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_DTCF_C                                                         VARCHAR2(3)       NOT NULL                  ,
    WRS_LCLFNM                                                            VARCHAR2(100)                               ,
    WRS_MCLFNM                                                            VARCHAR2(100)                               ,
    WRS_SCLFNM                                                            VARCHAR2(100)                               ,
    WRS_DTCFNM                                                            VARCHAR2(100)                               ,
    WRS_ID_DSC                                                            VARCHAR2(2)                                 ,
    CONSTRAINT PK_TB_GD_WRS_CLF PRIMARY KEY (NA_WRS_LCLC,NA_WRS_MCLC,NA_WRS_SCLC,NA_WRS_DTCF_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_CLF                                  IS '상품분류코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_LCLC                      IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_MCLC                      IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_SCLC                      IS '경제통합상품소분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_DTCF_C                    IS '경제통합상품세분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_LCLFNM                       IS '상품대분류명'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_MCLFNM                       IS '상품중분류명'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_SCLFNM                       IS '상품소분류명'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_DTCFNM                       IS '상품세분류명'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_ID_DSC                       IS '상품식별구분코드'                       ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS    상품기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS ;

CREATE TABLE NHVANINF.TB_GD_WRS (  
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    WRS_C_DSC                                                             CHAR(1)           NOT NULL                  ,
    WRS_DSC                                                               CHAR(1)                                     ,
    WRSNM                                                                 VARCHAR2(200)     NOT NULL                  ,
    WRS_ABR_NM                                                            VARCHAR2(100)                               ,
    WRS_ENM                                                               VARCHAR2(100)                               ,
    WRS_TPC                                                               CHAR(1)           NOT NULL                  ,
    NA_WRS_LCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_MCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_SCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_DTCF_C                                                         VARCHAR2(3)       NOT NULL                  ,
    WRS_STDNM                                                             VARCHAR2(100)                               ,
    TXT_DSC                                                               CHAR(1)           NOT NULL                  ,
    SMA_APL_TPC                                                           CHAR(1)                                     ,
    LIQ_YN                                                                CHAR(1)           NOT NULL                  ,
    COMM_WRS_YN                                                           CHAR(1)           NOT NULL                  ,
    MFT_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    WHT                                                                   NUMBER(15,4)      NOT NULL                  ,
    NA_WRS_UNT_C                                                          VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_PAK_C                                                          VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_SZE_SEX_C                                                      VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_QLT_GRDC                                                       VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_BRAN_C                                                         VARCHAR2(6)       NOT NULL                  ,
    NA_WRS_PROENV_DSC                                                     VARCHAR2(3)       NOT NULL                  ,
    GAP_ATTC_YN                                                           CHAR(1)           NOT NULL                  ,
    NA_WRS_NACF_QLT_ATTC_C                                                VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_CSTD_METC                                                      VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_DSTR_STSC                                                      VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_UZC                                                            VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_IPO_DSC                                                        CHAR(1)           NOT NULL                  ,
    NA_WRS_PDAA_C                                                         VARCHAR2(6)       NOT NULL                  ,
    VLD_PRD_CN                                                            NUMBER(7)                                   ,
    VLD_PRD_DSC                                                           CHAR(1)                                     ,
    NA_WRS_STD_UNT_C                                                      VARCHAR2(2)                                 ,
    WRS_HGHT                                                              NUMBER(7)                                   ,
    WRS_LEN_LEN                                                           NUMBER(12,2)                                ,
    WRS_WDTH_LEN                                                          NUMBER(12,2)                                ,
    WRS_SGRT                                                              NUMBER(9,6)                                 ,
    WRS_SDL_DSC                                                           CHAR(1)                                     ,
    WRS_AHL_CN                                                            NUMBER(10)                                  ,
    MTRL_STD_THKN                                                         NUMBER(12,2)                                ,
    CICL_WRS_STD_DMTR_CN                                                  NUMBER(10)                                  ,
    CICL_WRS_STD_DPTH_CN                                                  NUMBER(10)                                  ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_QT                                                               NUMBER(7)                                   ,
    VCBX_NA_WRS_C                                                         VARCHAR2(25)                                ,
    CVS_QT                                                                NUMBER(15,2)                                ,
    CVS_NA_WRS_UNT_C                                                      VARCHAR2(3)                                 ,
    WRS_DTL_EXPL                                                          VARCHAR2(4000)                              ,
    BSC_UNT_DSC                                                           CHAR(1)           NOT NULL                  ,
    BOXPE_AQZ                                                             NUMBER(7)                                   ,
    WRS_FL_CN                                                             NUMBER(7)                                   ,
    KNET_WRS_NO                                                           NUMBER(38)                                  ,
    TR_STOP_YN                                                            CHAR(1)           NOT NULL                  ,
    TR_STOP_RSNC                                                          VARCHAR2(2)                                 ,
    TR_STOP_DT                                                            CHAR(8)                                     ,
    DEL_YN                                                                CHAR(1)           NOT NULL                  ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    CONSTRAINT PK_TB_GD_WRS PRIMARY KEY (NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS                                      IS '상품기본'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_C                             IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_C_DSC                            IS '상품코드구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_DSC                              IS '상품구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRSNM                                IS '상품명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_ABR_NM                           IS '상품약어명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_ENM                              IS '상품영문명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_TPC                              IS '상품유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_LCLC                          IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_MCLC                          IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_SCLC                          IS '경제통합상품소분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_DTCF_C                        IS '경제통합상품세분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_STDNM                            IS '상품규격명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TXT_DSC                              IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.SMA_APL_TPC                          IS '영세적용유형코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LIQ_YN                               IS '주류여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.COMM_WRS_YN                          IS '공동상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.MFT_NA_TRPL_C                        IS '제조경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WHT                                  IS '단량'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_UNT_C                         IS '경제통합상품단위코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_PAK_C                         IS '경제통합상품포장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_SZE_SEX_C                     IS '경제통합상품크기성별코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_QLT_GRDC                      IS '경제통합상품품질등급코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_BRAN_C                        IS '경제통합상품브랜드코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_PROENV_DSC                    IS '경제통합상품친환경구분코드'             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.GAP_ATTC_YN                          IS 'GAP인증여부'                            ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_NACF_QLT_ATTC_C               IS '경제통합상품농협품질인증코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_CSTD_METC                     IS '경제통합상품보관방식코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_DSTR_STSC                     IS '경제통합상품유통상태코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_UZC                           IS '경제통합상품용도코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_IPO_DSC                       IS '경제통합상품수입구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_PDAA_C                        IS '경제통합상품산지코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VLD_PRD_CN                           IS '유효기간수'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VLD_PRD_DSC                          IS '유효기간구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_STD_UNT_C                     IS '경제통합상품규격단위코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_HGHT                             IS '상품높이'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_LEN_LEN                          IS '상품세로길이'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_WDTH_LEN                         IS '상품가로길이'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_SGRT                             IS '상품비중률'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_SDL_DSC                          IS '상품외쌍겹구분코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_AHL_CN                           IS '상품유공개수'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.MTRL_STD_THKN                        IS '자재규격두께'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CICL_WRS_STD_DMTR_CN                 IS '원형상품규격지름수'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CICL_WRS_STD_DPTH_CN                 IS '원형상품규격깊이수'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VCBT_NA_WRS_C                        IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VCBT_QT                              IS '공병수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VCBX_NA_WRS_C                        IS '공상자경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CVS_QT                               IS '환산수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CVS_NA_WRS_UNT_C                     IS '환산경제통합상품단위코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_DTL_EXPL                         IS '상품상세설명'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.BSC_UNT_DSC                          IS '기본단위구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.BOXPE_AQZ                            IS '박스당입수'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_FL_CN                            IS '상품파일개수'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.KNET_WRS_NO                          IS '코리안넷상품번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TR_STOP_YN                           IS '거래중지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TR_STOP_RSNC                         IS '거래중지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TR_STOP_DT                           IS '거래중지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.DEL_YN                               IS '삭제여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.FSRG_DTM                             IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.FSRGMN_ENO                           IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.FSRGMN_NA_BZPLC                      IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LSCHG_DTM                            IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LS_CMENO                             IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LSCGMN_NA_BZPLC                      IS '최종변경자경제통합사업장코드'           ;

GRANT SELECT ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_RG_REQ    상품등록신청내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_RG_REQ ;

CREATE TABLE NHVANINF.TB_GD_WRS_RG_REQ (  
    VAN_C_RQ_NO                                                           VARCHAR2(10)      NOT NULL                  ,
    NA_C_RQ_NO                                                            VARCHAR2(10)                                ,
    NA_C_RQ_OBJ_DSC                                                       CHAR(1)                                     ,
    CTCPL_TELNO                                                           VARCHAR2(14)                                ,
    RQ_CNTN                                                               VARCHAR2(200)                               ,
    APV_RQ_NA_BZPLC                                                       CHAR(13)                                    ,
    FSRGMN_ENO                                                            CHAR(9)                                     ,
    FSRGMN_NA_BZPLC                                                       CHAR(13)                                    ,
    BUYER_ENO                                                             CHAR(9)                                     ,
    RQ_NA_WRS_C                                                           VARCHAR2(25)                                ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    WRS_C_DSC                                                             CHAR(1)                                     ,
    WRS_DSC                                                               CHAR(1)                                     ,
    WRSNM                                                                 VARCHAR2(200)                               ,
    WRS_ABR_NM                                                            VARCHAR2(100)                               ,
    WRS_ENM                                                               VARCHAR2(100)                               ,
    WRS_TPC                                                               CHAR(1)                                     ,
    NA_WRS_LCLC                                                           CHAR(3)           NOT NULL                  ,
    NA_WRS_MCLC                                                           CHAR(3)           NOT NULL                  ,
    NA_WRS_SCLC                                                           CHAR(3)           NOT NULL                  ,
    NA_WRS_DTCF_C                                                         CHAR(3)           NOT NULL                  ,
    WRS_STDNM                                                             VARCHAR2(50)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    SMA_APL_TPC                                                           CHAR(1)                                     ,
    LIQ_YN                                                                CHAR(1)                                     ,
    COMM_WRS_YN                                                           CHAR(1)                                     ,
    MFT_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    WHT                                                                   NUMBER(15,4)                                ,
    NA_WRS_UNT_C                                                          VARCHAR2(3)                                 ,
    NA_WRS_PAK_C                                                          VARCHAR2(3)                                 ,
    NA_WRS_BRAN_C                                                         VARCHAR2(6)                                 ,
    NA_WRS_CSTD_METC                                                      VARCHAR2(3)                                 ,
    NA_WRS_DSTR_STSC                                                      VARCHAR2(3)                                 ,
    NA_WRS_UZC                                                            VARCHAR2(3)                                 ,
    NA_WRS_IPO_DSC                                                        CHAR(1)                                     ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_QT                                                               NUMBER(7,0)                                 ,
    VCBX_NA_WRS_C                                                         VARCHAR2(25)                                ,
    WRS_DTL_EXPL                                                          VARCHAR2(4000)                              ,
    BSC_UNT_DSC                                                           CHAR(1)                                     ,
    BOXPE_AQZ                                                             NUMBER(7,0)                                 ,
    RFID_UYN                                                              CHAR(1)                                     ,
    FOMNM                                                                 VARCHAR2(50)                                ,
    SLGT_ETR_DSC                                                          CHAR(1)                                     ,
    DSTR_TER_YN                                                           CHAR(1)                                     ,
    DSTR_TER_MRK_DSC                                                      CHAR(1)                                     ,
    WRS_MODIFY_YN                                                         CHAR(1)                                     ,
    TEMP_YN                                                               CHAR(1)                                     ,
    PRC_YN                                                                CHAR(1)           DEFAULT  'N' NOT NULL      ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    REQ_RESULT                                                            VARCHAR2(500)                               ,
    CNF_ENO                                                               CHAR(9)                                     ,
    CNF_DMT                                                               DATE                                        ,
    CNF_NAME                                                              VARCHAR2(50)                                ,
    NA_C_RQ_REJ_RSNC                                                      CHAR(1)                                     ,
    NA_C_RQ_STSC                                                          CHAR(1)                                     ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_GD_WRS_RG_REQ PRIMARY KEY (VAN_C_RQ_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ                               IS '상품등록신청내역'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VAN_C_RQ_NO                   IS 'VAN상품요청번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_NO                    IS '경제통합코드신청번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_OBJ_DSC               IS '경제통합코드신청대상구분코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CTCPL_TELNO                   IS '연락처전화번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RQ_CNTN                       IS '신청내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.APV_RQ_NA_BZPLC               IS '승인신청경제통합사업장코드'             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.FSRGMN_ENO                    IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.FSRGMN_NA_BZPLC               IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.BUYER_ENO                     IS '바이어개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RQ_NA_WRS_C                   IS '신청경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_C                      IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_C_DSC                     IS '상품코드구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_DSC                       IS '상품구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRSNM                         IS '상품명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_ABR_NM                    IS '상품약어명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_ENM                       IS '상품영문명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_TPC                       IS '상품유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_LCLC                   IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_MCLC                   IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_SCLC                   IS '경제통합상품소분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_DTCF_C                 IS '경제통합상품세분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_STDNM                     IS '상품규격명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.TXT_DSC                       IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.SMA_APL_TPC                   IS '영세적용유형코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.LIQ_YN                        IS '주류여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.COMM_WRS_YN                   IS '공동상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.MFT_NA_TRPL_C                 IS '제조경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WHT                           IS '단량'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_UNT_C                  IS '경제통합상품단위코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_PAK_C                  IS '경제통합상품포장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_BRAN_C                 IS '경제통합상품브랜드코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_CSTD_METC              IS '경제통합상품보관방식코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_DSTR_STSC              IS '경제통합상품유통상태코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_UZC                    IS '경제통합상품용도코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_IPO_DSC                IS '경제통합상품수입구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VCBT_NA_WRS_C                 IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VCBT_QT                       IS '공병수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VCBX_NA_WRS_C                 IS '공상자경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_DTL_EXPL                  IS '상품상세설명'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.BSC_UNT_DSC                   IS '기본단위구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.BOXPE_AQZ                     IS '박스당입수'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RFID_UYN                      IS 'RFID사용여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.FOMNM                         IS '형식명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.SLGT_ETR_DSC                  IS '매취수탁구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.DSTR_TER_YN                   IS '유통기한관리여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.DSTR_TER_MRK_DSC              IS '유통기한표기방법구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_MODIFY_YN                 IS '상품변경요청여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.TEMP_YN                       IS '임시저장여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.PRC_YN                        IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RSP_C_CNTN                    IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.REQ_RESULT                    IS '상품등록신청결과메시지'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CNF_ENO                       IS '승인/거절개인번호'                      ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CNF_DMT                       IS '승일/거절일시'                          ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CNF_NAME                      IS '승인/거절자명'                          ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_REJ_RSNC              IS '경제통합코드신청거절사유코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_STSC                  IS '경제통합코드신청상태코드'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.EDI_IF_ID                     IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_RG_REQ_FILE    상품등록신청_상품이미지
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_RG_REQ_FILE ;

CREATE TABLE NHVANINF.TB_GD_WRS_RG_REQ_FILE (  
    VAN_C_RQ_NO                                                           VARCHAR2(10)      NOT NULL                  ,
    FILE_SEQ                                                              NUMBER(7)         NOT NULL                  ,
    FILE_NAME                                                             VARCHAR2(200)                               ,
    FILE_SYSTEM_NAME                                                      VARCHAR2(50)                                ,
    FILE_SIZE                                                             NUMBER(7)                                   ,
    CONSTRAINT PK_TB_GD_WRS_RG_REQ_FILE PRIMARY KEY (VAN_C_RQ_NO,FILE_SEQ) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_FILE                          IS '상품등록신청_상품이미지'                ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.VAN_C_RQ_NO              IS 'VAN상품요청번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_SEQ                 IS '첨부파일일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_NAME                IS '첨부파일명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_SYSTEM_NAME         IS '첨부파일시스템명'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_SIZE                IS '첨부파일크기'                           ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_RG_REQ_INPD    상품등록신청_내품등록신청
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_RG_REQ_INPD ;

CREATE TABLE NHVANINF.TB_GD_WRS_RG_REQ_INPD (  
    VAN_C_RQ_NO                                                           VARCHAR2(10)      NOT NULL                  ,
    INPD_NA_WRS_C                                                         VARCHAR2(25)      NOT NULL                  ,
    INPD_QT                                                               NUMBER(10,0)                                ,
    CONSTRAINT PK_TB_GD_WRS_RG_REQ_INPD PRIMARY KEY (VAN_C_RQ_NO,INPD_NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_INPD                          IS '상품등록신청_내품등록신청'              ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_INPD.VAN_C_RQ_NO              IS 'VAN상품요청번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_INPD.INPD_NA_WRS_C            IS '내품경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_INPD.INPD_QT                  IS '내품수량'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_RG_REQ_LG    상품등록신청_물류상품
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_RG_REQ_LG ;

CREATE TABLE NHVANINF.TB_GD_WRS_RG_REQ_LG (  
    VAN_C_RQ_NO                                                           VARCHAR2(10)      NOT NULL                  ,
    NA_BZPLC                                                              CHAR(13)          NOT NULL                  ,
    RQ_NA_WRS_C                                                           VARCHAR2(25)                                ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    STPL_AMN_NA_WRS_C                                                     VARCHAR2(25)                                ,
    NA_SPYPL_C                                                            VARCHAR2(13)                                ,
    NA_SPYPL_TEAM_C                                                       VARCHAR2(2)                                 ,
    PLTPE_LYNO                                                            NUMBER(10,0)                                ,
    PLTPE_SGNO                                                            NUMBER(10,0)                                ,
    PLTPE_BOX_CN                                                          NUMBER(10,0)                                ,
    BOX_WT                                                                NUMBER(12,2)                                ,
    BOX_BULK                                                              NUMBER(12,2)                                ,
    WDTH_LEN                                                              NUMBER(12,2)                                ,
    LEN_LEN                                                               NUMBER(12,2)                                ,
    WRS_HGHT                                                              NUMBER(12,2)                                ,
    BOX_WRS_YN                                                            CHAR(1)                                     ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    SEL_UPR                                                               NUMBER(17,2)                                ,
    CONSTRAINT PK_TB_GD_WRS_RG_REQ_LG PRIMARY KEY (VAN_C_RQ_NO,NA_BZPLC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_LG                            IS '상품등록신청_물류상품'                  ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.VAN_C_RQ_NO                IS 'VAN상품요청번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_BZPLC                   IS '사업장코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.RQ_NA_WRS_C                IS '신청상품코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_WRS_C                   IS '상품코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.STPL_AMN_NA_WRS_C          IS '재고상품코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_SPYPL_C                 IS '경제통합공급처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_SPYPL_TEAM_C            IS '거래처팀코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.PLTPE_LYNO                 IS '파렛트당층수'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.PLTPE_SGNO                 IS '파렛트당단수'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.PLTPE_BOX_CN               IS '파렛트당박스수'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BOX_WT                     IS '박스중량'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BOX_BULK                   IS '박스용적'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.WDTH_LEN                   IS '가로길이'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.LEN_LEN                    IS '세로길이'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.WRS_HGHT                   IS '상품높이'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BOX_WRS_YN                 IS '박스상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BYNG_UPR                   IS '매입단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.SEL_UPR                    IS '판매단가'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_RG_REQ_PRGR    상품등록신청_공급가격
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_RG_REQ_PRGR ;

CREATE TABLE NHVANINF.TB_GD_WRS_RG_REQ_PRGR (  
    VAN_C_RQ_NO                                                           VARCHAR2(10)      NOT NULL                  ,
    NA_BZPLC                                                              CHAR(13)          NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    RQ_NA_WRS_C                                                           VARCHAR2(25)                                ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    SEL_UPR                                                               NUMBER(17,2)                                ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    COMP_FEERT                                                            NUMBER(5,2)                                 ,
    PHD_FEERT                                                             NUMBER(5,2)                                 ,
    DDLY_PHD_FEERT                                                        NUMBER(5,2)                                 ,
    TROT_FEERT                                                            NUMBER(5,2)                                 ,
    AMN_FEERT                                                             NUMBER(5,2)                                 ,
    PY_FDTCN                                                              NUMBER(10,0)                                ,
    CONSTRAINT PK_TB_GD_WRS_RG_REQ_PRGR PRIMARY KEY (VAN_C_RQ_NO,NA_BZPLC,NA_TEAM_C,PRGR_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_PRGR                          IS '상품등록신청_공급가격'                  ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.VAN_C_RQ_NO              IS 'VAN상품요청번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.NA_BZPLC                 IS '사업장코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.NA_TEAM_C                IS '팀코드'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.PRGR_C                   IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.RQ_NA_WRS_C              IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.NA_WRS_C                 IS '상품코드구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.SEL_UPR                  IS '판매단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.BYNG_UPR                 IS '매입단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.COMP_FEERT               IS '업체수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.PHD_FEERT                IS '물류수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.DDLY_PHD_FEERT           IS '직송물류수수료율'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.TROT_FEERT               IS '환급수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.AMN_FEERT                IS '관리수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.PY_FDTCN                 IS '지급기일수'                             ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_RG_REQ_TEMP    상품등록일괄신청내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_RG_REQ_TEMP ;

CREATE TABLE NHVANINF.TB_GD_WRS_RG_REQ_TEMP (  
    TEMP_SEQ                                                              VARCHAR2(20)      NOT NULL                  ,
    ROW_SEQ                                                               NUMBER(3)         NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    NA_WRS_LCLC                                                           CHAR(3)                                     ,
    WRS_LCLFNM                                                            VARCHAR2(100)                               ,
    NA_WRS_MCLC                                                           CHAR(3)                                     ,
    WRS_MCLFNM                                                            VARCHAR2(100)                               ,
    NA_WRS_SCLC                                                           CHAR(3)                                     ,
    WRS_SCLFNM                                                            VARCHAR2(100)                               ,
    NA_WRS_DTCF_C                                                         CHAR(3)                                     ,
    WRS_DTCFNM                                                            VARCHAR2(100)                               ,
    WRSNM                                                                 VARCHAR2(200)                               ,
    WRS_ABR_NM                                                            VARCHAR2(100)                               ,
    WRS_ENM                                                               VARCHAR2(100)                               ,
    WRS_STDNM                                                             VARCHAR2(50)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    TXT_NM                                                                VARCHAR2(300)                               ,
    SMA_APL_TPC                                                           CHAR(1)                                     ,
    SMA_APL_TPNM                                                          VARCHAR2(300)                               ,
    COMM_WRS_YN                                                           CHAR(1)                                     ,
    COMM_WRS_NM                                                           VARCHAR2(300)                               ,
    MFT_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    MFT_NA_TRPL_NM                                                        VARCHAR2(300)                               ,
    WRS_TPC                                                               CHAR(1)                                     ,
    WRS_TPNM                                                              VARCHAR2(300)                               ,
    LIQ_YN                                                                CHAR(1)                                     ,
    LIQ_NM                                                                VARCHAR2(300)                               ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_NA_WRS_NM                                                        VARCHAR2(300)                               ,
    VCBT_QT                                                               NUMBER(7,0)                                 ,
    VCBX_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBX_NA_WRS_NM                                                        VARCHAR2(300)                               ,
    WHT                                                                   NUMBER(15,4)                                ,
    NA_WRS_UNT_C                                                          VARCHAR2(3)                                 ,
    NA_WRS_UNT_NM                                                         VARCHAR2(300)                               ,
    NA_WRS_PAK_C                                                          VARCHAR2(3)                                 ,
    NA_WRS_PAK_NM                                                         VARCHAR2(300)                               ,
    NA_WRS_BRAN_C                                                         VARCHAR2(6)                                 ,
    NA_WRS_BRAN_NM                                                        VARCHAR2(300)                               ,
    NA_WRS_CSTD_METC                                                      VARCHAR2(3)                                 ,
    NA_WRS_CSTD_METNM                                                     VARCHAR2(300)                               ,
    NA_WRS_UZC                                                            VARCHAR2(3)                                 ,
    NA_WRS_UZNM                                                           VARCHAR2(300)                               ,
    VLD_PRD_CN                                                            VARCHAR2(50)                                ,
    DSTR_TER_MRK_DSC                                                      CHAR(1)                                     ,
    DSTR_TER_MRK_DSNM                                                     VARCHAR2(300)                               ,
    BOXPE_AQZ                                                             NUMBER(7,0)                                 ,
    NA_WRS_IPO_DSC                                                        CHAR(1)                                     ,
    NA_WRS_IPO_DSNM                                                       VARCHAR2(300)                               ,
    RFID_UYN                                                              CHAR(1)                                     ,
    RFID_UNM                                                              VARCHAR2(300)                               ,
    WRS_DTL_EXPL                                                          VARCHAR2(4000)                              ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    SUCCESS_YN                                                            CHAR(1)           DEFAULT  'N' NOT NULL      ,
    CONSTRAINT PK_TB_GD_WRS_RG_REQ_TEMP PRIMARY KEY (TEMP_SEQ,ROW_SEQ) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_TEMP                          IS '상품등록일괄신청내역'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.TEMP_SEQ                 IS '생성일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.ROW_SEQ                  IS '순번'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_C                 IS '상품코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_LCLC              IS '대분류'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_LCLFNM               IS '대분류명'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_MCLC              IS '중분류'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_MCLFNM               IS '중분류명'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_SCLC              IS '소분류'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_SCLFNM               IS '소분류명'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_DTCF_C            IS '세분류'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_DTCFNM               IS '세분류명'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRSNM                    IS '상품명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_ABR_NM               IS '상품약어명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_ENM                  IS '상품영문명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_STDNM                IS '규격'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.TXT_DSC                  IS '과세구분'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.TXT_NM                   IS '과세구분명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.SMA_APL_TPC              IS '영세적용유형'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.SMA_APL_TPNM             IS '영세적용유형명'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.COMM_WRS_YN              IS '공동상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.COMM_WRS_NM              IS '공동상품여부명'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.MFT_NA_TRPL_C            IS '제조거래처코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.MFT_NA_TRPL_NM           IS '제조거래처명'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_TPC                  IS '상품유형'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_TPNM                 IS '상품유형명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.LIQ_YN                   IS '주류상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.LIQ_NM                   IS '주류상품여부명'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBT_NA_WRS_C            IS '공병코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBT_NA_WRS_NM           IS '공병명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBT_QT                  IS '공병수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBX_NA_WRS_C            IS '공상자코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBX_NA_WRS_NM           IS '공상자명'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WHT                      IS '단량'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UNT_C             IS '단위'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UNT_NM            IS '단위명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_PAK_C             IS '포장'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_PAK_NM            IS '포장명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_BRAN_C            IS '브랜드코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_BRAN_NM           IS '브랜드명'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_CSTD_METC         IS '보관방식'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_CSTD_METNM        IS '보관방식명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UZC               IS '용도'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UZNM              IS '용도명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VLD_PRD_CN               IS '유효기간'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.DSTR_TER_MRK_DSC         IS '유효기간구분'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.DSTR_TER_MRK_DSNM        IS '유효기간구분명'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.BOXPE_AQZ                IS '박스당입수'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_IPO_DSC           IS '수입여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_IPO_DSNM          IS '수입여부명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.RFID_UYN                 IS 'RFID사용여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.RFID_UNM                 IS 'RFID사용여부명'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_DTL_EXPL             IS '상품설명'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.FSRG_DTM                 IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.FSRGMN_NA_BZPLC          IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.SUCCESS_YN               IS '완료여부'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_PRGR_GOODRSV    팀별상품별가격군변경예약
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_PRGR_GOODRSV ;

CREATE TABLE NHVANINF.TB_GD_PRGR_GOODRSV (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    APL_DT                                                                CHAR(8)           NOT NULL                  ,
    PRGR_DSC                                                              CHAR(1)                                     ,
    SEL_UPR                                                               NUMBER(17,2)                                ,
    COMP_FEERT                                                            NUMBER(5,2)                                 ,
    AMN_FEERT                                                             NUMBER(5,2)                                 ,
    TROT_FEERT                                                            NUMBER(5,2)                                 ,
    PHD_FEERT                                                             NUMBER(5,2)                                 ,
    DDLY_PHD_FEERT                                                        NUMBER(5,2)                                 ,
    ECG_SEL_UPR                                                           NUMBER(17,2)                                ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    PY_FDTCN                                                              NUMBER(10)                                  ,
    ODR_FBID_YN                                                           CHAR(1)                                     ,
    ODR_FBID_RSNC                                                         VARCHAR2(2)                                 ,
    CHRG_BUYER_ENO                                                        VARCHAR2(9)                                 ,
    APL_YN                                                                CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DLMN_NA_BZPLC                                                         VARCHAR2(13)                                ,
    CONSTRAINT PK_TB_GD_PRGR_GOODRSV PRIMARY KEY (NA_BZPLC,NA_TEAM_C,PRGR_C,NA_WRS_C,APL_DT) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_PRGR_GOODRSV                             IS '팀별상품별가격군변경예약'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.NA_BZPLC                    IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.NA_TEAM_C                   IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PRGR_C                      IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.NA_WRS_C                    IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.APL_DT                      IS '적용일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PRGR_DSC                    IS '가격군구분코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.SEL_UPR                     IS '판매단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.COMP_FEERT                  IS '업체수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.AMN_FEERT                   IS '관리수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.TROT_FEERT                  IS '환급수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PHD_FEERT                   IS '물류수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DDLY_PHD_FEERT              IS '직송수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.ECG_SEL_UPR                 IS '권장판매단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.BYNG_UPR                    IS '매입단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PY_FDTCN                    IS '지급기일수'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.ODR_FBID_YN                 IS '발주금지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.ODR_FBID_RSNC               IS '발주금지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.CHRG_BUYER_ENO              IS '담당바이어개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.APL_YN                      IS '적용여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.FSRG_DTM                    IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.FSRGMN_ENO                  IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.FSRGMN_NA_BZPLC             IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.LSCHG_DTM                   IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.LS_CMENO                    IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.LSCGMN_NA_BZPLC             IS '최종변경자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DEL_DTM                     IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DLMN_ENO                    IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DLMN_NA_BZPLC               IS '삭제자경제통합사업장코드'               ;

GRANT SELECT ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_PRGR_GOOD    팀별상품별가격군기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_PRGR_GOOD ;

CREATE TABLE NHVANINF.TB_GD_PRGR_GOOD (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    PRGR_DSC                                                              CHAR(1)           NOT NULL                  ,
    SEL_UPR                                                               NUMBER(17,2)                                ,
    COMP_FEERT                                                            NUMBER(5,2)                                 ,
    AMN_FEERT                                                             NUMBER(5,2)                                 ,
    TROT_FEERT                                                            NUMBER(5,2)                                 ,
    PHD_FEERT                                                             NUMBER(5,2)                                 ,
    DDLY_PHD_FEERT                                                        NUMBER(5,2)                                 ,
    ECG_SEL_UPR                                                           NUMBER(17,2)                                ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    PY_FDTCN                                                              NUMBER(10)                                  ,
    ODR_FBID_YN                                                           CHAR(1)                                     ,
    ODR_FBID_RSNC                                                         VARCHAR2(2)                                 ,
    CHRG_BUYER_ENO                                                        VARCHAR2(9)                                 ,
    APL_YN                                                                CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DLMN_NA_BZPLC                                                         VARCHAR2(13)                                ,
    CONSTRAINT PK_TB_GD_PRGR_GOOD PRIMARY KEY (NA_BZPLC,NA_TEAM_C,PRGR_C,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_PRGR_GOOD                                IS '팀별상품별가격군기본'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.NA_BZPLC                       IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.NA_TEAM_C                      IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PRGR_C                         IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.NA_WRS_C                       IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PRGR_DSC                       IS '가격군구분코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.SEL_UPR                        IS '판매단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.COMP_FEERT                     IS '업체수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.AMN_FEERT                      IS '관리수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.TROT_FEERT                     IS '환급수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PHD_FEERT                      IS '물류수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DDLY_PHD_FEERT                 IS '직송수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.ECG_SEL_UPR                    IS '권장판매단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.BYNG_UPR                       IS '매입단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PY_FDTCN                       IS '지급기일수'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.ODR_FBID_YN                    IS '발주금지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.ODR_FBID_RSNC                  IS '발주금지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.CHRG_BUYER_ENO                 IS '담당바이어개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.APL_YN                         IS '적용여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.FSRG_DTM                       IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.FSRGMN_ENO                     IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.FSRGMN_NA_BZPLC                IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.LSCHG_DTM                      IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.LS_CMENO                       IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.LSCGMN_NA_BZPLC                IS '최종변경자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DEL_DTM                        IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DLMN_ENO                       IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DLMN_NA_BZPLC                  IS '삭제자경제통합사업장코드'               ;

GRANT SELECT ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_PRGR_GOODLOG    팀별상품별가격군로그기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_PRGR_GOODLOG ;

CREATE TABLE NHVANINF.TB_GD_PRGR_GOODLOG (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    APL_ED_DT                                                             CHAR(8)           NOT NULL                  ,
    APL_ST_DT                                                             CHAR(8)           NOT NULL                  ,
    PRGR_DSC                                                              CHAR(1)           NOT NULL                  ,
    SEL_UPR                                                               NUMBER(17,2)                                ,
    COMP_FEERT                                                            NUMBER(5,2)                                 ,
    AMN_FEERT                                                             NUMBER(5,2)                                 ,
    TROT_FEERT                                                            NUMBER(5,2)                                 ,
    PHD_FEERT                                                             NUMBER(5,2)                                 ,
    DDLY_PHD_FEERT                                                        NUMBER(5,2)                                 ,
    ECG_SEL_UPR                                                           NUMBER(17,2)                                ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    PY_FDTCN                                                              NUMBER(10)                                  ,
    ODR_FBID_YN                                                           CHAR(1)                                     ,
    ODR_FBID_RSNC                                                         VARCHAR2(2)                                 ,
    CHRG_BUYER_ENO                                                        VARCHAR2(9)                                 ,
    APL_YN                                                                CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DLMN_NA_BZPLC                                                         VARCHAR2(13)                                ,
    CONSTRAINT PK_TB_GD_PRGR_GOODLOG PRIMARY KEY (NA_BZPLC,NA_TEAM_C,PRGR_C,NA_WRS_C,APL_ED_DT,APL_ST_DT) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_PRGR_GOODLOG                             IS '팀별상품별가격군로그기본'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.NA_BZPLC                    IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.NA_TEAM_C                   IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PRGR_C                      IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.NA_WRS_C                    IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.APL_ED_DT                   IS '적용종료일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.APL_ST_DT                   IS '적용시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PRGR_DSC                    IS '가격군구분코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.SEL_UPR                     IS '판매단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.COMP_FEERT                  IS '업체수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.AMN_FEERT                   IS '관리수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.TROT_FEERT                  IS '환급수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PHD_FEERT                   IS '물류수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DDLY_PHD_FEERT              IS '직송수수료율'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.ECG_SEL_UPR                 IS '권장판매단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.BYNG_UPR                    IS '매입단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PY_FDTCN                    IS '지급기일수'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.ODR_FBID_YN                 IS '발주금지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.ODR_FBID_RSNC               IS '발주금지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.CHRG_BUYER_ENO              IS '담당바이어개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.APL_YN                      IS '적용여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.FSRG_DTM                    IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.FSRGMN_ENO                  IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.FSRGMN_NA_BZPLC             IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.LSCHG_DTM                   IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.LS_CMENO                    IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.LSCGMN_NA_BZPLC             IS '최종변경자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DEL_DTM                     IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DLMN_ENO                    IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DLMN_NA_BZPLC               IS '삭제자경제통합사업장코드'               ;

GRANT SELECT ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_EM_EVT_GOOD    팀별상품별행사가격
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_EM_EVT_GOOD ;

CREATE TABLE NHVANINF.TB_GD_EM_EVT_GOOD (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    EVT_SQNO                                                              NUMBER(10,0)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    EVTNM                                                                 VARCHAR2(50)                                ,
    EVT_ST_DT                                                             CHAR(8)                                     ,
    EVT_ED_DT                                                             CHAR(8)                                     ,
    EVT_KDC                                                               VARCHAR2(2)                                 ,
    EVT_PCS                                                               NUMBER(17,2)                                ,
    EVT_BDPR                                                              NUMBER(17,2)                                ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DLMN_NA_BZPLC                                                         VARCHAR2(13)                                ,
    CONSTRAINT PK_TB_GD_EM_EVT_GOOD PRIMARY KEY (NA_BZPLC,EVT_SQNO,NA_WRS_C,PRGR_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_EM_EVT_GOOD                              IS '팀별상품별행사가격'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_SQNO                     IS '행사일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.NA_WRS_C                     IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.PRGR_C                       IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVTNM                        IS '행사명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_ST_DT                    IS '행사시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_ED_DT                    IS '행사종료일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_KDC                      IS '행사종류코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_PCS                      IS '행사원가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_BDPR                     IS '행사매가'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.FSRG_DTM                     IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.FSRGMN_ENO                   IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.FSRGMN_NA_BZPLC              IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.LSCHG_DTM                    IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.LS_CMENO                     IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.LSCGMN_NA_BZPLC              IS '최종변경자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.DEL_DTM                      IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.DLMN_ENO                     IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.DLMN_NA_BZPLC                IS '삭제자경제통합사업장코드'               ;

GRANT SELECT ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_EVENT_CPN    할인쿠폰
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_EVENT_CPN ;

CREATE TABLE NHVANINF.TB_GD_EVENT_CPN (  
    CPN_KDC                                                               VARCHAR2(6)       NOT NULL                  ,
    NA_CPN_C                                                              VARCHAR2(14)      NOT NULL                  ,
    DC_NA_WRS_C                                                           VARCHAR2(25)      NOT NULL                  ,
    CPN_SC_NO                                                             VARCHAR2(6)       NOT NULL                  ,
    DC_VLD_PRD_ST_DT                                                      CHAR(8)                                     ,
    DC_VLD_PRD_ED_DT                                                      CHAR(8)                                     ,
    CPN_WRSNM                                                             VARCHAR2(50)                                ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_BZPLC                                                         VARCHAR2(13)                                ,
    CPN_EFOC_MBDC                                                         CHAR(1)                                     ,
    CPN_DC_TPC                                                            CHAR(1)                                     ,
    CPN_MED_C                                                             CHAR(1)                                     ,
    CPN_APL_PUC                                                           NUMBER(5,0)                                 ,
    DC_BAS_QT                                                             NUMBER(10,0)                                ,
    DC_BAS_BUY_AM                                                         NUMBER(18,0)                                ,
    DC_AM                                                                 NUMBER(18,0)                                ,
    TRT_FEE                                                               NUMBER(18,0)                                ,
    MFT_CONM                                                              VARCHAR2(50)                                ,
    PRC_YN                                                                CHAR(1)           DEFAULT  'N' NOT NULL      ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_GD_EVENT_CPN PRIMARY KEY (CPN_KDC,NA_CPN_C,DC_NA_WRS_C,CPN_SC_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_EVENT_CPN                                IS '할인쿠폰'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_KDC                        IS '쿠폰종류코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.NA_CPN_C                       IS '경제통합쿠폰코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_NA_WRS_C                    IS '할인경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_SC_NO                      IS '쿠폰회차번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_VLD_PRD_ST_DT               IS '할인유효기간시작일자'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_VLD_PRD_ED_DT               IS '할인유효기간종료일자'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_WRSNM                      IS '쿠폰상품명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.MNGT_NA_TRPL_C                 IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.MNGT_NA_BZPLC                  IS '주관경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_EFOC_MBDC                  IS '쿠폰시행주체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_DC_TPC                     IS '쿠폰할인유형코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_MED_C                      IS '쿠폰매체코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_APL_PUC                    IS '쿠폰적용매수'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_BAS_QT                      IS '할인기준수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_BAS_BUY_AM                  IS '할인기준구매금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_AM                          IS '할인금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.TRT_FEE                        IS '취급수수료'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.MFT_CONM                       IS '제조업체명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.PRC_YN                         IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.RSP_C_CNTN                     IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.EDI_IF_ID                      IS 'EDI인터페이스아이디'                    ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.FSRG_DTM                       IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.LSCHG_DTM                      IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.LSCGMN_NA_BZPLC                IS '최종변경자사업장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.LS_CMENO                       IS '최종변경자개인번호'                     ;

GRANT SELECT ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_EVENT_CPN_TEMP    할인쿠폰 TEMP
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_EVENT_CPN_TEMP ;

CREATE TABLE NHVANINF.TB_GD_EVENT_CPN_TEMP (  
    TEMP_SEQ                                                              VARCHAR2(20)      NOT NULL                  ,
    CPN_KDC                                                               VARCHAR2(6)       NOT NULL                  ,
    NA_CPN_C                                                              VARCHAR2(14)      NOT NULL                  ,
    DC_NA_WRS_C                                                           VARCHAR2(25)      NOT NULL                  ,
    CPN_SC_NO                                                             VARCHAR2(6)       NOT NULL                  ,
    DC_VLD_PRD_ST_DT                                                      CHAR(8)                                     ,
    DC_VLD_PRD_ED_DT                                                      CHAR(8)                                     ,
    CPN_WRSNM                                                             VARCHAR2(40)                                ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_BZPLC                                                         VARCHAR2(13)                                ,
    CPN_EFOC_MBDC                                                         CHAR(1)                                     ,
    CPN_DC_TPC                                                            CHAR(1)                                     ,
    CPN_MED_C                                                             CHAR(1)                                     ,
    CPN_APL_PUC                                                           NUMBER(7,0)                                 ,
    DC_BAS_QT                                                             NUMBER(10,0)                                ,
    DC_BAS_BUY_AM                                                         NUMBER(18,0)                                ,
    DC_AM                                                                 NUMBER(18,0)                                ,
    TRT_FEE                                                               NUMBER(18,0)                                ,
    MFT_CONM                                                              VARCHAR2(50)                                ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    SUCCESS_YN                                                            CHAR(1)           DEFAULT  'N' NOT NULL      ,
    CONSTRAINT PK_TB_GD_EVENT_CPN_TEMP PRIMARY KEY (TEMP_SEQ,CPN_KDC,NA_CPN_C,DC_NA_WRS_C,CPN_SC_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_EVENT_CPN_TEMP                           IS '할인쿠폰 TEMP'                          ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.TEMP_SEQ                  IS '생성일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_KDC                   IS '쿠폰종류코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.NA_CPN_C                  IS '경제통합쿠폰코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_NA_WRS_C               IS '할인경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_SC_NO                 IS '쿠폰회차번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_VLD_PRD_ST_DT          IS '할인유효기간시작일자'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_VLD_PRD_ED_DT          IS '할인유효기간종료일자'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_WRSNM                 IS '쿠폰상품명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.MNGT_NA_TRPL_C            IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.MNGT_NA_BZPLC             IS '주관경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_EFOC_MBDC             IS '쿠폰시행주체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_DC_TPC                IS '쿠폰할인유형코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_MED_C                 IS '쿠폰매체코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_APL_PUC               IS '쿠폰적용매수'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_BAS_QT                 IS '할인기준수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_BAS_BUY_AM             IS '할인기준구매금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_AM                     IS '할인금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.TRT_FEE                   IS '취급수수료'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.MFT_CONM                  IS '제조업체명'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.FSRG_DTM                  IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.FSRGMN_NA_BZPLC           IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.LSCHG_DTM                 IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.LSCGMN_NA_BZPLC           IS '최종변경자사업장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.LS_CMENO                  IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.SUCCESS_YN                IS '완료여부'                               ;

GRANT SELECT ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_GD_WRS_BS_CM_RG_RQ    상품등록신청 기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_GD_WRS_BS_CM_RG_RQ ;

CREATE TABLE NHVANINF.TB_GD_WRS_BS_CM_RG_RQ (  
    NA_C_RQ_NO                                                            VARCHAR2(10)      NOT NULL                  ,
    BOXPE_DLVG_UPR                                                        NUMBER(17,2)                                ,
    SLAM_PER_FEERT                                                        NUMBER(7,2)                                 ,
    PMTN_SPT_PERS                                                         NUMBER(7)                                   ,
    WRS_TRT_CMBR_CN                                                       NUMBER(7)                                   ,
    ASP_SL_CNAM                                                           NUMBER(18)                                  ,
    DEL_YN                                                                CHAR(1)                                     ,
    CONSTRAINT PK_TB_GD_WRS_BS_CM_RG_RQ PRIMARY KEY (NA_C_RQ_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_BS_CM_RG_RQ                          IS '상품등록신청 기본'                      ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.NA_C_RQ_NO               IS '경제통합코드신청번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.BOXPE_DLVG_UPR           IS '박스당납품단가'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.SLAM_PER_FEERT           IS '매출액당수수료율'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.PMTN_SPT_PERS            IS '판촉지원인원수'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.WRS_TRT_CMBR_CN          IS '상품취급경쟁점수'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.ASP_SL_CNAM              IS '추정매출기여금'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.DEL_YN                   IS '삭제여부'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 

