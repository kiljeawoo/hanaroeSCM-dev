--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_TRTWRS    취급상품기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_TRTWRS ;

CREATE TABLE NHVANINF.TB_OD_TRTWRS (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    PD_YY                                                                 VARCHAR2(4)       NOT NULL                  ,
    CSER_CTR_TPC                                                          CHAR(1)           NOT NULL                  ,
    BUY_TXT_DSC                                                           CHAR(1)           NOT NULL                  ,
    BUY_BZ_METC                                                           VARCHAR2(2)       NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    WRSNM                                                                 VARCHAR2(100)                               ,
    WRS_ABR_NM                                                            VARCHAR2(50)                                ,
    NA_WRS_LCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_MCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_SCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_DTCF_C                                                         VARCHAR2(3)                                 ,
    SL_UPR_TPC                                                            VARCHAR2(2)                                 ,
    INPD_QT                                                               NUMBER(10,0)                                ,
    MIN_ODR_QT                                                            NUMBER(15,2)                                ,
    MAX_ODR_QT                                                            NUMBER(15,2)                                ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    SL_UPR                                                                NUMBER(17,2)                                ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_UPR                                                              NUMBER(7)                                   ,
    VCBX_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBX_UPR                                                              NUMBER(7)                                   ,
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    SPYPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    CTR_TPC                                                               CHAR(1)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    TXT_DSC                                                               CHAR(1)                                     ,
    RVO_PSB_YN                                                            CHAR(1)                                     ,
    ODR_PSB_YN                                                            CHAR(1)                                     ,
    DDLY_YN                                                               CHAR(1)                                     ,
    STPL_PD_VIAPD_DSC                                                     CHAR(1)                                     ,
    STPL_PD_GRD_DSC                                                       CHAR(1)                                     ,
    VIAPD_YN                                                              CHAR(1)                                     ,
    SVS_YN                                                                CHAR(1)                                     ,
    SVS_UNT_QT                                                            NUMBER(7)                                   ,
    BOX_BULK                                                              NUMBER(7)                                   ,
    WRS_WDTH_LEN                                                          NUMBER(12,2)                                ,
    WRS_LEN_LEN                                                           NUMBER(12,2)                                ,
    BOX_WRS_YN                                                            CHAR(1)                                     ,
    DDLY_ST_DT                                                            CHAR(8)                                     ,
    DDLY_ED_DT                                                            CHAR(8)                                     ,
    DDLY_BAS_QT                                                           NUMBER(7)                                   ,
    MART_DIV_BKG_ODR_YN                                                   CHAR(1)                                     ,
    SRA_WRS_DSC                                                           VARCHAR2(2)                                 ,
    STPL_AMN_WRS_YN                                                       CHAR(1)                                     ,
    STPL_NA_WRS_C                                                         VARCHAR2(25)                                ,
    STPL_AMN_DSC                                                          CHAR(1)                                     ,
    PD_YY_AMN_YN                                                          CHAR(1)                                     ,
    NA_ODR_FBID_RSNC                                                      VARCHAR2(2)                                 ,
    NA_RVO_FBID_RSNC                                                      VARCHAR2(2)                                 ,
    BOXPE_AQZ                                                             NUMBER(7)                                   ,
    NA_USR_SYS_KDC                                                        VARCHAR2(2)                                 ,
    PHD_FCLT_C                                                            VARCHAR2(2)                                 ,
    PPZ_ORR_DSC                                                           CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    CONSTRAINT PK_TB_OD_TRTWRS PRIMARY KEY (NA_BZPLC,NA_WRS_C,PD_YY,CSER_CTR_TPC,BUY_TXT_DSC,BUY_BZ_METC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_TRTWRS                                   IS '취급상품기본'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_BZPLC                          IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_C                          IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PD_YY                             IS '생산년도'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.CSER_CTR_TPC                      IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BUY_TXT_DSC                       IS '구매과세구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BUY_BZ_METC                       IS '구매사업방식코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_TEAM_C                         IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRSNM                             IS '상품명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRS_ABR_NM                        IS '상품약어명'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_LCLC                       IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_MCLC                       IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_SCLC                       IS '경제통합상품소분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_DTCF_C                     IS '경제통합상품세분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SL_UPR_TPC                        IS '매출단가유형코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.INPD_QT                           IS '내품수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MIN_ODR_QT                        IS '최소발주수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MAX_ODR_QT                        IS '최대발주수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BYNG_UPR                          IS '매입단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SL_UPR                            IS '매출단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBT_NA_WRS_C                     IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBT_UPR                          IS '공병단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBX_NA_WRS_C                     IS '공상자경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBX_UPR                          IS '공상자단가'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SPYPL_NA_TRPL_C                   IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SPYPL_NA_TEAM_C                   IS '공급처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MNGT_NA_TRPL_C                    IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MNGT_NA_TEAM_C                    IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.CTR_TPC                           IS '계약유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SPY_TPC                           IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.TXT_DSC                           IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.RVO_PSB_YN                        IS '수주가능여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.ODR_PSB_YN                        IS '발주가능여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_YN                           IS '직송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_PD_VIAPD_DSC                 IS '재고품경유품구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_PD_GRD_DSC                   IS '재고품등급구분코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VIAPD_YN                          IS '경유품여부'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SVS_YN                            IS '소분여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SVS_UNT_QT                        IS '소분단위수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BOX_BULK                          IS '박스용적'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRS_WDTH_LEN                      IS '상품가로길이'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRS_LEN_LEN                       IS '상품세로길이'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BOX_WRS_YN                        IS '박스상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_ST_DT                        IS '직송시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_ED_DT                        IS '직송종료일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_BAS_QT                       IS '직송기준수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MART_DIV_BKG_ODR_YN               IS '마트분사예약발주여부'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SRA_WRS_DSC                       IS '축산상품구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_AMN_WRS_YN                   IS '재고관리상품여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_NA_WRS_C                     IS '재고경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_AMN_DSC                      IS '재고관리구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PD_YY_AMN_YN                      IS '생산년도관리여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_ODR_FBID_RSNC                  IS '경제통합발주금지사유코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_RVO_FBID_RSNC                  IS '경제통합수주금지사유코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BOXPE_AQZ                         IS '박스당입수'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_USR_SYS_KDC                    IS '경제통합사용자시스템종류코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PHD_FCLT_C                        IS '물류기능코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PPZ_ORR_DSC                       IS '데이터항목'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.FSRG_DTM                          IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.FSRGMN_ENO                        IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.LSCHG_DTM                         IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.LS_CMENO                          IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DEL_DTM                           IS '삭제일시'                               ;

GRANT SELECT ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_ORDER_M    발주기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_ORDER_M ;

CREATE TABLE NHVANINF.TB_OD_ORDER_M (  
    ODRPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    ODRPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    ODR_DT                                                                CHAR(8)           NOT NULL                  ,
    ODR_SLPNO                                                             VARCHAR2(16)      NOT NULL                  ,
    VAN_SEQ                                                               VARCHAR2(16)      NOT NULL                  ,
    ROGO_INF_CRT_DSC                                                      VARCHAR2(3)                                 ,
    NA_ODR_STS_DSC                                                        VARCHAR2(2)                                 ,
    RVOPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    RVOPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    DVY_RQR_DT                                                            CHAR(8)                                     ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    DVYAA_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    DVYAA_C                                                               VARCHAR2(4)                                 ,
    DVY_VHC_DSC                                                           CHAR(1)                                     ,
    VHCNO                                                                 VARCHAR2(20)                                ,
    DVY_RQR_CNTN                                                          VARCHAR2(200)                               ,
    DDLY_YN                                                               CHAR(1)                                     ,
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    SPYPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    MNGT_NA_TR_TPC                                                        CHAR(1)                                     ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    VCBT_AM                                                               NUMBER(18)                                  ,
    VCBX_AM                                                               NUMBER(18)                                  ,
    ODR_QTTT                                                              NUMBER(7)                                   ,
    ODR_SAM                                                               NUMBER(18)                                  ,
    VATTT                                                                 NUMBER(18)                                  ,
    SCRN_IDNM                                                             VARCHAR2(60)                                ,
    APL_BAS_DT                                                            CHAR(8)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    LDTM_DDS                                                              NUMBER(3)                                   ,
    EMRG_ODR_YN                                                           CHAR(1)                                     ,
    GRS_SOJU_YN                                                           CHAR(1)                                     ,
    ODR_DSC                                                               VARCHAR2(6)                                 ,
    ACCP_C                                                                VARCHAR2(2)                                 ,
    NA_WRS_LCLC                                                           CHAR(3)                                     ,
    NA_WRS_MCLC                                                           CHAR(3)                                     ,
    BYNG_UPR_GR_C                                                         CHAR(2)                                     ,
    TEMP_YN                                                               CHAR(1)           DEFAULT  'N' NOT NULL      ,
    PRC_YN                                                                CHAR(1)           DEFAULT  'N' NOT NULL     ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    INQ_CN                                                                NUMBER(5)                                   ,
    LINE_CN                                                               NUMBER(5)                                   ,
    FS_RMS_DT                                                             CHAR(8)                                     ,
    FS_RMS_HR                                                             CHAR(6)                                     ,
    LS_RMS_DT                                                             CHAR(8)                                     ,
    LS_RMS_HR                                                             CHAR(6)                                     ,
    EDIRG_DTM                                                             DATE                                        ,
    ACK_RMS_YN                                                            CHAR(1)                                     ,
    RMS_SPYPL_C                                                           VARCHAR2(13)                                ,
    MB_ID                                                                 VARCHAR2(9)                                 ,
    APPLICATION_ID                                                        VARCHAR2(35)                                ,
    DOC_NAME                                                              CHAR(6)                                     ,
    DOC_RMS_LOC_DSC                                                       CHAR(3)                                     ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_OD_ORDER_M PRIMARY KEY (ODRPL_NA_TRPL_C,ODRPL_NA_TEAM_C,ODR_DT,ODR_SLPNO) 
)
PARTITION BY RANGE (ODR_DT)
(
    PARTITION PT_R201401 VALUES LESS THAN ('20140201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('20140301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('20140401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('20140501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('20140601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('20140701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('20140801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('20140901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('20141001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('20141101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('20141201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('20150101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('20150201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('20150301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('20150401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('20150501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('20150601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('20150701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('20150801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('20150901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('20151001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('20151101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('20151201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('20160101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('20160201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('20160301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('20160401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('20160501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('20160601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('20160701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('20160801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('20160901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('20161001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('20161101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('20161201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('20170101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_RMAX VALUES LESS THAN ('MAXVALUE')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 8
        INITRANS 1
        MAXTRANS 255
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_ORDER_M                                  IS '발주기본'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODRPL_NA_TRPL_C                  IS '발주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODRPL_NA_TEAM_C                  IS '발주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_DT                           IS '발주일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_SLPNO                        IS '발주전표번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VAN_SEQ                          IS 'VAN생성일련번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ROGO_INF_CRT_DSC                 IS '수발주정보생성구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.NA_ODR_STS_DSC                   IS '경제통합발주상태구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RVOPL_NA_TRPL_C                  IS '수주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RVOPL_NA_TEAM_C                  IS '수주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.CSER_CTR_TPC                     IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SPY_TPC                          IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVY_RQR_DT                       IS '배송요청일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVYAA_NA_TRPL_C                  IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVYAA_NA_TEAM_C                  IS '배송지경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVYAA_C                          IS '배송지코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVY_VHC_DSC                      IS '배송차량구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VHCNO                            IS '차량번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVY_RQR_CNTN                     IS '배송요청내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DDLY_YN                          IS '직송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SPYPL_NA_TRPL_C                  IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SPYPL_NA_TEAM_C                  IS '공급처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MNGT_NA_TR_TPC                   IS '주관경제통합거래유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MNGT_NA_TRPL_C                   IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MNGT_NA_TEAM_C                   IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VCBT_AM                          IS '공병금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VCBX_AM                          IS '공상자금액'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_QTTT                         IS '발주수량합계'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_SAM                          IS '발주금액합계'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VATTT                            IS '부가세합계'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SCRN_IDNM                        IS '화면ID명'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.APL_BAS_DT                       IS '적용기준일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.FSRG_DTM                         IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LSCHG_DTM                        IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LS_CMENO                         IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DEL_DTM                          IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LDTM_DDS                         IS '리드타임일수'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.EMRG_ODR_YN                      IS '긴급발주여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.GRS_SOJU_YN                      IS '지방소주여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_DSC                          IS '발주구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ACCP_C                           IS '인수도코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.NA_WRS_LCLC                      IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.NA_WRS_MCLC                      IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.BYNG_UPR_GR_C                    IS '매입단가군코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.TEMP_YN                          IS '임시저장여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.PRC_YN                           IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RSP_C_CNTN                       IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.INQ_CN                           IS '조회건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LINE_CN                          IS '라인건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.FS_RMS_DT                        IS '문서 최초수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.FS_RMS_HR                        IS '문서 최초수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LS_RMS_DT                        IS '문서 최종수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LS_RMS_HR                        IS '문서 최종수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.EDIRG_DTM                        IS 'I/F수신일시'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ACK_RMS_YN                       IS 'ACKDOC 수신여부'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RMS_SPYPL_C                      IS '실제수신업체'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MB_ID                            IS '회원아이디'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.APPLICATION_ID                   IS 'XTRUS처리키'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DOC_NAME                         IS '문서명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DOC_RMS_LOC_DSC                  IS 'WEB/EDI'                                ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.EDI_IF_ID                        IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_ORDER_D    발주상세
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_ORDER_D ;

CREATE TABLE NHVANINF.TB_OD_ORDER_D (  
    ODRPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    ODRPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    ODR_DT                                                                CHAR(8)           NOT NULL                  ,
    ODR_SLPNO                                                             VARCHAR2(16)      NOT NULL                  ,
    ODR_DSQNO                                                             NUMBER(10,0)      NOT NULL                  ,
    VAN_SEQ                                                               VARCHAR2(16)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    CHAF_NA_WRS_C                                                         VARCHAR2(25)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_AM                                                               NUMBER(18)                                  ,
    VCBX_AM                                                               NUMBER(18)                                  ,
    ODR_PCS                                                               NUMBER(17,2)                                ,
    ODR_QT                                                                NUMBER(10,3)                                ,
    ODR_VAT                                                               NUMBER(18,0)                                ,
    ODR_AM                                                                NUMBER(18,0)                                ,
    ACTL_SPYPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    BYNG_QT                                                               NUMBER(15,2)                                ,
    NA_ODR_STS_DSC                                                        VARCHAR2(2)                                 ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)                                ,
    DVY_PLA_SQNO                                                          NUMBER(10,0)                                ,
    AUT_ODR_KDC                                                           CHAR(1)                                     ,
    BOXPE_AQZ                                                             NUMBER(7)                                   ,
    CONSTRAINT PK_TB_OD_ORDER_D PRIMARY KEY (ODRPL_NA_TRPL_C,ODRPL_NA_TEAM_C,ODR_DT,ODR_SLPNO,ODR_DSQNO) 
)
PARTITION BY RANGE (ODR_DT)
(
    PARTITION PT_R201401 VALUES LESS THAN ('20140201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('20140301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('20140401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('20140501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('20140601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('20140701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('20140801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('20140901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('20141001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('20141101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('20141201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('20150101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('20150201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('20150301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('20150401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('20150501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('20150601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('20150701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('20150801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('20150901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('20151001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('20151101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('20151201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('20160101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('20160201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('20160301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('20160401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('20160501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('20160601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('20160701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('20160801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('20160901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('20161001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('20161101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('20161201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('20170101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_RMAX VALUES LESS THAN ('MAXVALUE')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 8
        INITRANS 1
        MAXTRANS 255
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_ORDER_D                                  IS '발주상세'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODRPL_NA_TRPL_C                  IS '발주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODRPL_NA_TEAM_C                  IS '발주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_DT                           IS '발주일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_SLPNO                        IS '발주전표번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_DSQNO                        IS '발주상세일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VAN_SEQ                          IS 'VAN생성일련번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.NA_WRS_C                         IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.CHAF_NA_WRS_C                    IS '변경후경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.TXT_DSC                          IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VCBT_NA_WRS_C                    IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VCBT_AM                          IS '공병금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VCBX_AM                          IS '공상자금액'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_PCS                          IS '발주원가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_QT                           IS '발주수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_VAT                          IS '발주부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_AM                           IS '발주금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ACTL_SPYPL_NA_TRPL_C             IS '실제공급처경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.BYNG_QT                          IS '매입수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.NA_ODR_STS_DSC                   IS '경제통합발주상태구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.RMK_CNTN                         IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.NA_DVY_PLASH_SLPNO               IS '경제통합배송예정서전표번호'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.DVY_PLA_SQNO                     IS '배송예정일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.AUT_ODR_KDC                      IS '자동발주종료코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.BOXPE_AQZ                        IS '박스당입수'                             ;

GRANT SELECT ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_BKEVNTBS_M    예약행사기준정보기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_BKEVNTBS_M ;

CREATE TABLE NHVANINF.TB_OD_BKEVNTBS_M (  
    BKG_EVT_YY                                                            VARCHAR2(4)       NOT NULL                  ,
    BKG_EVT_NO                                                            VARCHAR2(5)       NOT NULL                  ,
    BKG_EVT_PRG_STSC                                                      VARCHAR2(2)                                 ,
    APL_NA_BZPLC                                                          VARCHAR2(13)                                ,
    APL_NA_TEAM_C                                                         VARCHAR2(2)                                 ,
    BKG_EVTNM                                                             VARCHAR2(50)                                ,
    WRS_CN                                                                NUMBER(3,0)                                 ,
    ORR_ST_DT                                                             CHAR(8)                                     ,
    ORR_DDL_DT                                                            CHAR(8)                                     ,
    DVY_CPL_DT                                                            CHAR(8)                                     ,
    DVY_ST_DT                                                             CHAR(8)                                     ,
    LSCHG_DTM                                                             DATE                                        ,
    FSRG_DTM                                                              DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    CONSTRAINT PK_TB_OD_BKEVNTBS_M PRIMARY KEY (BKG_EVT_YY,BKG_EVT_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_BKEVNTBS_M                               IS '예약행사기준정보기본'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVT_YY                    IS '예약행사년도'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVT_NO                    IS '예약행사번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVT_PRG_STSC              IS '예약행사진행상태코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.APL_NA_BZPLC                  IS '적용경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.APL_NA_TEAM_C                 IS '적용경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVTNM                     IS '예약행사명'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.WRS_CN                        IS '상품수'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.ORR_ST_DT                     IS '주문시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.ORR_DDL_DT                    IS '주문마감일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.DVY_CPL_DT                    IS '배송완료일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.DVY_ST_DT                     IS '배송시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.LSCHG_DTM                     IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.FSRG_DTM                      IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.LS_CMENO                      IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.DEL_DTM                       IS '삭제일시'                               ;

GRANT SELECT ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_BKEVNTBS_D    예약행사기준정보상세
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_BKEVNTBS_D ;

CREATE TABLE NHVANINF.TB_OD_BKEVNTBS_D (  
    BKG_EVT_YY                                                            VARCHAR2(4)       NOT NULL                  ,
    BKG_EVT_NO                                                            VARCHAR2(5)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    BKG_EVT_WRS_CND_DSC                                                   CHAR(1)                                     ,
    QT                                                                    NUMBER(7,0)                                 ,
    QT2                                                                   NUMBER(7,0)                                 ,
    QT3                                                                   NUMBER(7,0)                                 ,
    QT4                                                                   NUMBER(7,0)                                 ,
    QT5                                                                   NUMBER(7,0)                                 ,
    BKG_EVT_PR                                                            NUMBER(17,2)                                ,
    BKG_EVT_PR2                                                           NUMBER(17,2)                                ,
    BKG_EVT_PR3                                                           NUMBER(17,2)                                ,
    BKG_EVT_PR4                                                           NUMBER(17,2)                                ,
    BKG_EVT_PR5                                                           NUMBER(17,2)                                ,
    BAS_DUM_RTO                                                           NUMBER(5,2)                                 ,
    BAS_DUM_RTO2                                                          NUMBER(5,2)                                 ,
    BAS_DUM_RTO3                                                          NUMBER(5,2)                                 ,
    BAS_DUM_RTO4                                                          NUMBER(5,2)                                 ,
    BAS_DUM_RTO5                                                          NUMBER(5,2)                                 ,
    OFR_DUM_RTO                                                           NUMBER(5,2)                                 ,
    OFR_DUM_RTO2                                                          NUMBER(5,2)                                 ,
    OFR_DUM_RTO3                                                          NUMBER(5,2)                                 ,
    OFR_DUM_RTO4                                                          NUMBER(5,2)                                 ,
    OFR_DUM_RTO5                                                          NUMBER(5,2)                                 ,
    DUM_TFR_NA_WRS_C                                                      VARCHAR2(25)                                ,
    DFN_OFR_DUM_RTO                                                       NUMBER(5,2)                                 ,
    DFN_BAS_DUM_RTO                                                       NUMBER(5,2)                                 ,
    DFN_QT                                                                NUMBER(15,2)                                ,
    DFN_PR                                                                NUMBER(17,2)                                ,
    TFR_NA_WRS_C                                                          VARCHAR2(25)                                ,
    CAN_YN                                                                CHAR(1)                                     ,
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    SPYPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    CONSTRAINT PK_TB_OD_BKEVNTBS_D PRIMARY KEY (BKG_EVT_YY,BKG_EVT_NO,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_BKEVNTBS_D                               IS '예약행사기준정보상세'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_YY                    IS '예약행사년도'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_NO                    IS '예약행사번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.NA_WRS_C                      IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_WRS_CND_DSC           IS '예약행사상품조건구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT                            IS '수량'                                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT2                           IS '수량2'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT3                           IS '수량3'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT4                           IS '수량4'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT5                           IS '수량5'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR                    IS '예약행사가격'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR2                   IS '예약행사가격2'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR3                   IS '예약행사가격3'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR4                   IS '예약행사가격4'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR5                   IS '예약행사가격5'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO                   IS '기준덤비율'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO2                  IS '기준덤비율2'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO3                  IS '기준덤비율3'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO4                  IS '기준덤비율4'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO5                  IS '기준덤비율5'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO                   IS '제공덤비율'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO2                  IS '제공덤비율2'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO3                  IS '제공덤비율3'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO4                  IS '제공덤비율4'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO5                  IS '제공덤비율5'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DUM_TFR_NA_WRS_C              IS '덤대체경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_OFR_DUM_RTO               IS '확정제공덤비율'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_BAS_DUM_RTO               IS '확정기준덤비율'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_QT                        IS '확정수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_PR                        IS '확정가격'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.TFR_NA_WRS_C                  IS '대체경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.CAN_YN                        IS '취소여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.SPYPL_NA_TRPL_C               IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.SPYPL_NA_TEAM_C               IS '공급처경제통합팀코드'                   ;

GRANT SELECT ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_BE_BKEVNTPRC_M    예약행사가격정보기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_BE_BKEVNTPRC_M ;

CREATE TABLE NHVANINF.TB_OD_BE_BKEVNTPRC_M (  
    BKG_EVT_YY                                                            CHAR(4)           NOT NULL                  ,
    BKG_EVT_NO                                                            VARCHAR2(5)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    BUY_RFNDRT                                                            NUMBER(5,2)                                 ,
    CTR_UPR                                                               NUMBER(17,2)                                ,
    STL_FDTCN                                                             NUMBER(3,0)                                 ,
    DFN_DT                                                                CHAR(8)                                     ,
    MAX_ODR_QT                                                            NUMBER(15,2)                                ,
    DFN_QT                                                                NUMBER(15,2)                                ,
    DFN_PR                                                                NUMBER(17,2)                                ,
    DFN_BAS_DUM_RTO                                                       NUMBER(5,2)                                 ,
    DFN_OFR_DUM_RTO                                                       NUMBER(5,2)                                 ,
    DFN_MN_ENO                                                            VARCHAR2(9)                                 ,
    DFN_YN                                                                CHAR(1)                                     ,
    APL_YN                                                                CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    CONSTRAINT PK_TB_OD_BE_BKEVNTPRC_M PRIMARY KEY (BKG_EVT_YY,BKG_EVT_NO,NA_WRS_C,PRGR_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_BE_BKEVNTPRC_M                           IS '예약행사가격정보기본'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.BKG_EVT_YY                IS '예약행사년도'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.BKG_EVT_NO                IS '예약행사번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.NA_WRS_C                  IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.PRGR_C                    IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.BUY_RFNDRT                IS '구매환급률'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.CTR_UPR                   IS '계약단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.STL_FDTCN                 IS '결제기일수'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_DT                    IS '확정일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.MAX_ODR_QT                IS '최대발주수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_QT                    IS '확정수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_PR                    IS '확정가격'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_BAS_DUM_RTO           IS '확정기준덤비율'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_OFR_DUM_RTO           IS '확정제공덤비율'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_MN_ENO                IS '확정자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_YN                    IS '확정여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.APL_YN                    IS '적용여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.FSRG_DTM                  IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.LSCHG_DTM                 IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.LS_CMENO                  IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DEL_DTM                   IS '삭제일시'                               ;

GRANT SELECT ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_BE_ORDER    예약행사내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_BE_ORDER ;

CREATE TABLE NHVANINF.TB_OD_BE_ORDER (  
    ODRPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    ODRPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    BKG_EVT_YY                                                            VARCHAR2(4)       NOT NULL                  ,
    BKG_EVT_NO                                                            VARCHAR2(5)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    DVY_RQ_DT                                                             CHAR(8)           NOT NULL                  ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    DVYAA_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    RVOPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    RVOPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    PRGR_C                                                                VARCHAR2(4)                                 ,
    DVY_RQR_DT                                                            CHAR(8)                                     ,
    RQ_QT                                                                 NUMBER(7,0)                                 ,
    DFN_QT                                                                NUMBER(15,2)                                ,
    CAN_DT                                                                CHAR(8)                                     ,
    WK_NMLPRC_YN                                                          CHAR(1)                                     ,
    DDLY_YN                                                               CHAR(1)                                     ,
    DDPD_X_YN                                                             CHAR(1)                                     ,
    BKG_EVT_PRC_DSC                                                       VARCHAR2(2)                                 ,
    DSTB_DT                                                               CHAR(8)                                     ,
    ODR_DT                                                                CHAR(8)                                     ,
    ODR_SLPNO                                                             VARCHAR2(16)                                ,
    ODR_DSQNO                                                             NUMBER(10,0)                                ,
    LDTM_DDS                                                              NUMBER(7,0)                                 ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    CONSTRAINT PK_TB_OD_BE_ORDER PRIMARY KEY (ODRPL_NA_TRPL_C,ODRPL_NA_TEAM_C,BKG_EVT_YY,BKG_EVT_NO,NA_WRS_C,DVY_RQ_DT,DVYAA_NA_TRPL_C,DVYAA_NA_TEAM_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_BE_ORDER                                 IS '예약행사내역'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODRPL_NA_TRPL_C                 IS '발주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODRPL_NA_TEAM_C                 IS '발주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.BKG_EVT_YY                      IS '예약행사년도'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.BKG_EVT_NO                      IS '예약행사번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.NA_WRS_C                        IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVY_RQ_DT                       IS '배송신청일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVYAA_NA_TRPL_C                 IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVYAA_NA_TEAM_C                 IS '배송지경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.RVOPL_NA_TRPL_C                 IS '수주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.RVOPL_NA_TEAM_C                 IS '수주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.PRGR_C                          IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVY_RQR_DT                      IS '배송요청일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.RQ_QT                           IS '신청수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DFN_QT                          IS '확정수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.CAN_DT                          IS '취소일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.WK_NMLPRC_YN                    IS '작업정상처리여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DDLY_YN                         IS '직송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DDPD_X_YN                       IS '직송품제외여부'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.BKG_EVT_PRC_DSC                 IS '예약행사처리구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DSTB_DT                         IS '배분일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODR_DT                          IS '발주일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODR_SLPNO                       IS '발주전표번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODR_DSQNO                       IS '발주상세일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.LDTM_DDS                        IS '리드타임일수'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.FSRG_DTM                        IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.LSCHG_DTM                       IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.LS_CMENO                        IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DEL_DTM                         IS '삭제일시'                               ;

GRANT SELECT ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_DLVPNSHT_LG_M    배송예정서기본 물류센터
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_DLVPNSHT_LG_M ;

CREATE TABLE NHVANINF.TB_OD_DLVPNSHT_LG_M (  
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)      NOT NULL                  ,
    DVY_PLA_DT                                                            CHAR(8)           NOT NULL                  ,
    SPYPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    ODRPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ODRPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    RVOPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    RVOPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    ADJPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ADJPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    MNGT_NA_TR_TPC                                                        CHAR(1)                                     ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    DVYAA_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    DVYAA_C                                                               VARCHAR2(4)                                 ,
    DDLY_YN                                                               CHAR(1)                                     ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    SLGT_ETR_DSC                                                          CHAR(1)                                     ,
    NA_WRS_LCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_MCLC                                                           VARCHAR2(3)                                 ,
    DVY_VHC_DSC                                                           CHAR(1)                                     ,
    VHCNO                                                                 VARCHAR2(20)                                ,
    ACCP_C                                                                VARCHAR2(2)                                 ,
    NA_USR_SYS_KDC                                                        VARCHAR2(2)                                 ,
    DVY_PLA_QT                                                            NUMBER(18,2)                                ,
    DVY_AM                                                                NUMBER(18,2)                                ,
    DVY_VAT                                                               NUMBER(18,0)                                ,
    DVY_SSDY                                                              NUMBER(18,2)                                ,
    DVY_TROT_FEE                                                          NUMBER(18,2)                                ,
    DVY_PHD_FEE                                                           NUMBER(18,2)                                ,
    DVY_FAR_ASTCS                                                         NUMBER(18,2)                                ,
    WD_PLTT_QT                                                            NUMBER(9,0)                                 ,
    PSC_PLTT_QT                                                           NUMBER(15,0)                                ,
    BUY_UPR_DSC                                                           CHAR(1)                                     ,
    BYNG_UPR_GR_C                                                         VARCHAR2(2)                                 ,
    BUY_BZ_METC                                                           VARCHAR2(2)                                 ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    CONSTRAINT PK_TB_OD_DLVPNSHT_LG_M PRIMARY KEY (SPYPL_NA_TRPL_C,DVYAA_NA_TRPL_C,NA_DVY_PLASH_SLPNO,DVY_PLA_DT) 
)
PARTITION BY RANGE (DVY_PLA_DT)
(
    PARTITION PT_R201001 VALUES LESS THAN ('20100201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201002 VALUES LESS THAN ('20100301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201003 VALUES LESS THAN ('20100401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201004 VALUES LESS THAN ('20100501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201005 VALUES LESS THAN ('20100601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201006 VALUES LESS THAN ('20100701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201007 VALUES LESS THAN ('20100801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201008 VALUES LESS THAN ('20100901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201009 VALUES LESS THAN ('20101001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201010 VALUES LESS THAN ('20101101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201011 VALUES LESS THAN ('20101201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201012 VALUES LESS THAN ('20110101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201101 VALUES LESS THAN ('20110201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201102 VALUES LESS THAN ('20110301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201103 VALUES LESS THAN ('20110401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201104 VALUES LESS THAN ('20110501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201105 VALUES LESS THAN ('20110601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201106 VALUES LESS THAN ('20110701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201107 VALUES LESS THAN ('20110801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201108 VALUES LESS THAN ('20110901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201109 VALUES LESS THAN ('20111001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201110 VALUES LESS THAN ('20111101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201111 VALUES LESS THAN ('20111201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201112 VALUES LESS THAN ('20120101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201201 VALUES LESS THAN ('20120201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201202 VALUES LESS THAN ('20120301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201203 VALUES LESS THAN ('20120401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201204 VALUES LESS THAN ('20120501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201205 VALUES LESS THAN ('20120601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201206 VALUES LESS THAN ('20120701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201207 VALUES LESS THAN ('20120801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201208 VALUES LESS THAN ('20120901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201209 VALUES LESS THAN ('20121001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201210 VALUES LESS THAN ('20121101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201211 VALUES LESS THAN ('20121201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201212 VALUES LESS THAN ('20130101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201301 VALUES LESS THAN ('20130201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201302 VALUES LESS THAN ('20130301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201303 VALUES LESS THAN ('20130401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201304 VALUES LESS THAN ('20130501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201305 VALUES LESS THAN ('20130601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201306 VALUES LESS THAN ('20130701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201307 VALUES LESS THAN ('20130801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201308 VALUES LESS THAN ('20130901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201309 VALUES LESS THAN ('20131001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201310 VALUES LESS THAN ('20131101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201311 VALUES LESS THAN ('20131201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201312 VALUES LESS THAN ('20140101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201401 VALUES LESS THAN ('20140201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('20140301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('20140401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('20140501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('20140601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('20140701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('20140801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('20140901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('20141001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('20141101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('20141201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('20150101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('20150201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('20150301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('20150401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('20150501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('20150601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('20150701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('20150801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('20150901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('20151001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('20151101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('20151201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('20160101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('20160201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('20160301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('20160401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('20160501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('20160601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('20160701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('20160801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('20160901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('20161001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('20161101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('20161201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('20170101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_RMAX VALUES LESS THAN ('MAXVALUE')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 8
        INITRANS 1
        MAXTRANS 255
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_LG_M                            IS '배송예정서기본 물류센터'                ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SPYPL_NA_TRPL_C            IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVYAA_NA_TRPL_C            IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_DVY_PLASH_SLPNO         IS '경제통합배송예정서전표번호'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SPYPL_NA_TEAM_C            IS '공급처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ODRPL_NA_TRPL_C            IS '발주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ODRPL_NA_TEAM_C            IS '발주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.RVOPL_NA_TRPL_C            IS '수주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.RVOPL_NA_TEAM_C            IS '수주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ADJPL_NA_TRPL_C            IS '정산처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ADJPL_NA_TEAM_C            IS '정산처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.MNGT_NA_TR_TPC             IS '주관경제통합거래유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.MNGT_NA_TRPL_C             IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.MNGT_NA_TEAM_C             IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVYAA_NA_TEAM_C            IS '배송지경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVYAA_C                    IS '배송지코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_PLA_DT                 IS '배송예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DDLY_YN                    IS '직송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.CSER_CTR_TPC               IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SPY_TPC                    IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SLGT_ETR_DSC               IS '매취수탁구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_WRS_LCLC                IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_WRS_MCLC                IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_VHC_DSC                IS '배송차량구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.VHCNO                      IS '차량번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ACCP_C                     IS '인수도코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_USR_SYS_KDC             IS '경제통합사용자시스템종류코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_PLA_QT                 IS '배송예정수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_AM                     IS '배송금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_VAT                    IS '배송부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_SSDY                   IS '배송장려금'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_TROT_FEE               IS '배송환급수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_PHD_FEE                IS '배송물류수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_FAR_ASTCS              IS '배송운임보조비'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.WD_PLTT_QT                 IS '목재파렛트수량'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.PSC_PLTT_QT                IS '플라스틱파렛트수량'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.BUY_UPR_DSC                IS '구매단가구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.BYNG_UPR_GR_C              IS '매입단가군코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.BUY_BZ_METC                IS '구매사업방식코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.RMK_CNTN                   IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.FSRG_DTM                   IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.LSCHG_DTM                  IS '최종변경일시'                           ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_DLVPNSHT_LG_D    배송예정서상세 물류센터
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_DLVPNSHT_LG_D ;

CREATE TABLE NHVANINF.TB_OD_DLVPNSHT_LG_D (  
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)      NOT NULL                  ,
    DVY_PLA_SQNO                                                          NUMBER(10,0)      NOT NULL                  ,
    DVY_PLA_DT                                                            CHAR(8)           NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    RCPMNM                                                                VARCHAR2(50)                                ,
    RCPMN_TELNO                                                           VARCHAR2(14)                                ,
    ODR_DT                                                                CHAR(8)                                     ,
    ODR_SLPNO                                                             VARCHAR2(16)                                ,
    ODR_DSQNO                                                             NUMBER(10,0)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    DVY_WRS_UPR                                                           NUMBER(18,2)                                ,
    DVY_PLA_QT                                                            NUMBER(15,2)                                ,
    DVY_AM                                                                NUMBER(18,2)                                ,
    DVY_VAT                                                               NUMBER(18,0)                                ,
    DVY_TROT_FEE                                                          NUMBER(18,2)                                ,
    DVY_PHD_FEE                                                           NUMBER(18,2)                                ,
    DVY_FAR_ASTCS                                                         NUMBER(18,2)                                ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    CONSTRAINT PK_TB_OD_DLVPNSHT_LG_D PRIMARY KEY (SPYPL_NA_TRPL_C,DVYAA_NA_TRPL_C,NA_DVY_PLASH_SLPNO,DVY_PLA_SQNO,DVY_PLA_DT) 
)
PARTITION BY RANGE (DVY_PLA_DT)
(
    PARTITION PT_R201001 VALUES LESS THAN ('20100201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201002 VALUES LESS THAN ('20100301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201003 VALUES LESS THAN ('20100401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201004 VALUES LESS THAN ('20100501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201005 VALUES LESS THAN ('20100601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201006 VALUES LESS THAN ('20100701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201007 VALUES LESS THAN ('20100801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201008 VALUES LESS THAN ('20100901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201009 VALUES LESS THAN ('20101001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201010 VALUES LESS THAN ('20101101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201011 VALUES LESS THAN ('20101201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201012 VALUES LESS THAN ('20110101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201101 VALUES LESS THAN ('20110201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201102 VALUES LESS THAN ('20110301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201103 VALUES LESS THAN ('20110401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201104 VALUES LESS THAN ('20110501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201105 VALUES LESS THAN ('20110601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201106 VALUES LESS THAN ('20110701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201107 VALUES LESS THAN ('20110801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201108 VALUES LESS THAN ('20110901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201109 VALUES LESS THAN ('20111001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201110 VALUES LESS THAN ('20111101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201111 VALUES LESS THAN ('20111201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201112 VALUES LESS THAN ('20120101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201201 VALUES LESS THAN ('20120201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201202 VALUES LESS THAN ('20120301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201203 VALUES LESS THAN ('20120401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201204 VALUES LESS THAN ('20120501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201205 VALUES LESS THAN ('20120601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201206 VALUES LESS THAN ('20120701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201207 VALUES LESS THAN ('20120801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201208 VALUES LESS THAN ('20120901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201209 VALUES LESS THAN ('20121001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201210 VALUES LESS THAN ('20121101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201211 VALUES LESS THAN ('20121201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201212 VALUES LESS THAN ('20130101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201301 VALUES LESS THAN ('20130201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201302 VALUES LESS THAN ('20130301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201303 VALUES LESS THAN ('20130401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201304 VALUES LESS THAN ('20130501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201305 VALUES LESS THAN ('20130601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201306 VALUES LESS THAN ('20130701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201307 VALUES LESS THAN ('20130801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201308 VALUES LESS THAN ('20130901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201309 VALUES LESS THAN ('20131001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201310 VALUES LESS THAN ('20131101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201311 VALUES LESS THAN ('20131201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201312 VALUES LESS THAN ('20140101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201401 VALUES LESS THAN ('20140201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('20140301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('20140401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('20140501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('20140601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('20140701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('20140801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('20140901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('20141001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('20141101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('20141201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('20150101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('20150201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('20150301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('20150401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('20150501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('20150601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('20150701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('20150801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('20150901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('20151001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('20151101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('20151201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('20160101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('20160201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('20160301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('20160401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('20160501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('20160601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('20160701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('20160801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('20160901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('20161001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('20161101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('20161201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('20170101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_RMAX VALUES LESS THAN ('MAXVALUE')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 8
        INITRANS 1
        MAXTRANS 255
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_LG_D                            IS '배송예정서상세 물류센터'                ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.SPYPL_NA_TRPL_C            IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVYAA_NA_TRPL_C            IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.NA_DVY_PLASH_SLPNO         IS '경제통합배송예정서전표번호'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PLA_SQNO               IS '배송예정일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PLA_DT                 IS '배송예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.NA_WRS_C                   IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.RCPMNM                     IS '수령인명'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.RCPMN_TELNO                IS '수령인전화번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.ODR_DT                     IS '발주일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.ODR_SLPNO                  IS '발주전표번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.ODR_DSQNO                  IS '발주상세일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.TXT_DSC                    IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_WRS_UPR                IS '배송상품단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PLA_QT                 IS '배송예정수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_AM                     IS '배송금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_VAT                    IS '배송부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_TROT_FEE               IS '배송환급수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PHD_FEE                IS '배송물류수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_FAR_ASTCS              IS '배송운임보조비'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.FSRG_DTM                   IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.LSCHG_DTM                  IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.RMK_CNTN                   IS '비고내용'                               ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_DLVPNSHT_M    배송예정서기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_DLVPNSHT_M ;

CREATE TABLE NHVANINF.TB_OD_DLVPNSHT_M (  
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)      NOT NULL                  ,
    DVY_PLA_DT                                                            CHAR(8)           NOT NULL                  ,
    SPYPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    ODRPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ODRPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    RVOPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    RVOPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    ADJPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ADJPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    MNGT_NA_TR_TPC                                                        CHAR(1)                                     ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    DVYAA_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    DVYAA_C                                                               VARCHAR2(4)                                 ,
    DDLY_YN                                                               CHAR(1)                                     ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    SLGT_ETR_DSC                                                          CHAR(1)                                     ,
    DVY_VHC_DSC                                                           CHAR(1)                                     ,
    VHCNO                                                                 VARCHAR2(20)                                ,
    VCBT_AM                                                               NUMBER(18)                                  ,
    VCBX_AM                                                               NUMBER(18)                                  ,
    DVY_PLA_QT                                                            NUMBER(15,2)                                ,
    DVY_AM                                                                NUMBER(18,2)                                ,
    DVY_VAT                                                               NUMBER(18,0)                                ,
    DVY_SSDY                                                              NUMBER(18,2)                                ,
    DVY_TROT_FEE                                                          NUMBER(18,2)                                ,
    DVY_PHD_FEE                                                           NUMBER(18,2)                                ,
    DVY_FAR_ASTCS                                                         NUMBER(18,2)                                ,
    DVY_PLASH_KDC                                                         CHAR(2)                                     ,
    OGN_NA_DVY_PLASH_SLPNO                                                VARCHAR2(17)                                ,
    GRS_SOJU_YN                                                           CHAR(1)                                     ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    NA_WRS_LCLC                                                           CHAR(3)                                     ,
    NA_WRS_MCLC                                                           CHAR(3)                                     ,
    DVY_PLASH_STSC                                                        VARCHAR2(2)                                 ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    TEMP_YN                                                               CHAR(1)           DEFAULT 'N' NOT NULL      ,
    PRC_YN                                                                CHAR(1)           DEFAULT 'N' NOT NULL      ,
    RES_CODE                                                              VARCHAR2(4)                                 ,
    RES_DESC                                                              VARCHAR2(200)                               ,
    INQ_CN                                                                NUMBER(5)                                   ,
    LINE_CN                                                               NUMBER(5)                                   ,
    FS_RMS_DT                                                             CHAR(8)                                     ,
    FS_RMS_HR                                                             CHAR(6)                                     ,
    LS_RMS_DT                                                             CHAR(8)                                     ,
    LS_RMS_HR                                                             CHAR(6)                                     ,
    EDIRG_DTM                                                             DATE                                        ,
    ACK_RMS_YN                                                            CHAR(1)                                     ,
    RMS_SPYPL_C                                                           VARCHAR2(13)                                ,
    MB_ID                                                                 VARCHAR2(9)                                 ,
    APPLICATION_ID                                                        VARCHAR2(35)                                ,
    DOC_NAME                                                              CHAR(6)                                     ,
    DOC_RMS_LOC_DSC                                                       CHAR(6)                                     ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_OD_DLVPNSHT_M PRIMARY KEY (SPYPL_NA_TRPL_C,DVYAA_NA_TRPL_C,NA_DVY_PLASH_SLPNO,DVY_PLA_DT) 
)
PARTITION BY RANGE (DVY_PLA_DT)
(
    PARTITION PT_R201001 VALUES LESS THAN ('20100201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201002 VALUES LESS THAN ('20100301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201003 VALUES LESS THAN ('20100401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201004 VALUES LESS THAN ('20100501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201005 VALUES LESS THAN ('20100601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201006 VALUES LESS THAN ('20100701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201007 VALUES LESS THAN ('20100801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201008 VALUES LESS THAN ('20100901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201009 VALUES LESS THAN ('20101001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201010 VALUES LESS THAN ('20101101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201011 VALUES LESS THAN ('20101201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201012 VALUES LESS THAN ('20110101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201101 VALUES LESS THAN ('20110201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201102 VALUES LESS THAN ('20110301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201103 VALUES LESS THAN ('20110401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201104 VALUES LESS THAN ('20110501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201105 VALUES LESS THAN ('20110601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201106 VALUES LESS THAN ('20110701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201107 VALUES LESS THAN ('20110801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201108 VALUES LESS THAN ('20110901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201109 VALUES LESS THAN ('20111001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201110 VALUES LESS THAN ('20111101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201111 VALUES LESS THAN ('20111201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201112 VALUES LESS THAN ('20120101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201201 VALUES LESS THAN ('20120201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201202 VALUES LESS THAN ('20120301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201203 VALUES LESS THAN ('20120401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201204 VALUES LESS THAN ('20120501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201205 VALUES LESS THAN ('20120601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201206 VALUES LESS THAN ('20120701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201207 VALUES LESS THAN ('20120801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201208 VALUES LESS THAN ('20120901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201209 VALUES LESS THAN ('20121001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201210 VALUES LESS THAN ('20121101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201211 VALUES LESS THAN ('20121201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201212 VALUES LESS THAN ('20130101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201301 VALUES LESS THAN ('20130201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201302 VALUES LESS THAN ('20130301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201303 VALUES LESS THAN ('20130401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201304 VALUES LESS THAN ('20130501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201305 VALUES LESS THAN ('20130601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201306 VALUES LESS THAN ('20130701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201307 VALUES LESS THAN ('20130801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201308 VALUES LESS THAN ('20130901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201309 VALUES LESS THAN ('20131001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201310 VALUES LESS THAN ('20131101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201311 VALUES LESS THAN ('20131201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201312 VALUES LESS THAN ('20140101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201401 VALUES LESS THAN ('20140201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('20140301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('20140401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('20140501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('20140601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('20140701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('20140801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('20140901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('20141001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('20141101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('20141201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('20150101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('20150201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('20150301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('20150401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('20150501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('20150601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('20150701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('20150801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('20150901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('20151001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('20151101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('20151201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('20160101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('20160201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('20160301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('20160401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('20160501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('20160601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('20160701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('20160801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('20160901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('20161001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('20161101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('20161201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('20170101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_RMAX VALUES LESS THAN ('MAXVALUE')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 8
        INITRANS 1
        MAXTRANS 255
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_M                               IS '배송예정서기본'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SPYPL_NA_TRPL_C               IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVYAA_NA_TRPL_C               IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.NA_DVY_PLASH_SLPNO            IS '경제통합배송예정서전표번호'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SPYPL_NA_TEAM_C               IS '공급처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ODRPL_NA_TRPL_C               IS '발주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ODRPL_NA_TEAM_C               IS '발주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RVOPL_NA_TRPL_C               IS '수주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RVOPL_NA_TEAM_C               IS '수주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ADJPL_NA_TRPL_C               IS '정산처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ADJPL_NA_TEAM_C               IS '정산처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MNGT_NA_TR_TPC                IS '주관경제통합거래유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MNGT_NA_TRPL_C                IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MNGT_NA_TEAM_C                IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVYAA_NA_TEAM_C               IS '배송지경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVYAA_C                       IS '배송지코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLA_DT                    IS '배송예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DDLY_YN                       IS '직송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.CSER_CTR_TPC                  IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SPY_TPC                       IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SLGT_ETR_DSC                  IS '매취수탁구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_VHC_DSC                   IS '배송차량구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.VHCNO                         IS '차량번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.VCBT_AM                       IS '공병금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.VCBX_AM                       IS '공상자금액'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLA_QT                    IS '배송예정수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_AM                        IS '배송금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_VAT                       IS '배송부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_SSDY                      IS '배송장려금'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_TROT_FEE                  IS '배송환급수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PHD_FEE                   IS '배송물류수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_FAR_ASTCS                 IS '배송운임보조비'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLASH_KDC                 IS '배송예정서종류코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.OGN_NA_DVY_PLASH_SLPNO        IS '원경제통합배송예정서전표번호'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.GRS_SOJU_YN                   IS '지방소주여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.FSRGMN_ENO                    IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.NA_WRS_LCLC                   IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.NA_WRS_MCLC                   IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLASH_STSC                IS '배송예정서상태코드(인수거절시에만 사용)';
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RMK_CNTN                      IS '비고(인수거절시에만 사용)'              ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LSCHG_DTM                     IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LS_CMENO                      IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.TEMP_YN                       IS '임시저장여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.PRC_YN                        IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RES_CODE                      IS '응답코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RES_DESC                      IS '응답결과내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.INQ_CN                        IS '조회건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LINE_CN                       IS '라인건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.FS_RMS_DT                     IS '문서 최초수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.FS_RMS_HR                     IS '문서 최초수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LS_RMS_DT                     IS '문서 최종수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LS_RMS_HR                     IS '문서 최종수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.EDIRG_DTM                     IS 'I/F수신일시'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ACK_RMS_YN                    IS 'ACKDOC 수신여부'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RMS_SPYPL_C                   IS '실제수신업체'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MB_ID                         IS '회원아이디'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.APPLICATION_ID                IS 'XTRUS처리키'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DOC_NAME                      IS '문서명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DOC_RMS_LOC_DSC               IS 'WEB/EDI'                                ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.EDI_IF_ID                     IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_DLVPNSHT_D    배송예정서상세
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_DLVPNSHT_D ;

CREATE TABLE NHVANINF.TB_OD_DLVPNSHT_D (  
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)      NOT NULL                  ,
    DVY_PLA_SQNO                                                          NUMBER(10,0)      NOT NULL                  ,
    DVY_PLA_DT                                                            CHAR(8)           NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    ODR_DT                                                                CHAR(8)                                     ,
    ODR_SLPNO                                                             VARCHAR2(16)                                ,
    ODR_DSQNO                                                             NUMBER(10,0)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    DVY_WRS_UPR                                                           NUMBER(18,2)                                ,
    DVY_PLA_QT                                                            NUMBER(15,2)                                ,
    DVY_AM                                                                NUMBER(18,2)                                ,
    DVY_VAT                                                               NUMBER(18,0)                                ,
    DVY_VCBT_AM                                                           NUMBER(18,2)                                ,
    DVY_SSDY                                                              NUMBER(18,2)                                ,
    DVY_TROT_FEE                                                          NUMBER(18,2)                                ,
    DVY_PHD_FEE                                                           NUMBER(18,2)                                ,
    DVY_FAR_ASTCS                                                         NUMBER(18,2)                                ,
    DQPD_RSNC                                                             VARCHAR2(2)                                 ,
    DQPD_RSN_CNTN                                                         VARCHAR2(200)                               ,
    DVY_SSDYRT                                                            NUMBER(18,2)                                ,
    DVY_TROT_FEERT                                                        NUMBER(18,2)                                ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    SPY_PSB_DT                                                            CHAR(8)                                     ,
    CONSTRAINT PK_TB_OD_DLVPNSHT_D PRIMARY KEY (SPYPL_NA_TRPL_C,DVYAA_NA_TRPL_C,NA_DVY_PLASH_SLPNO,DVY_PLA_SQNO,DVY_PLA_DT) 
)
PARTITION BY RANGE (DVY_PLA_DT)
(
    PARTITION PT_R201001 VALUES LESS THAN ('20100201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201002 VALUES LESS THAN ('20100301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201003 VALUES LESS THAN ('20100401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201004 VALUES LESS THAN ('20100501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201005 VALUES LESS THAN ('20100601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201006 VALUES LESS THAN ('20100701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201007 VALUES LESS THAN ('20100801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201008 VALUES LESS THAN ('20100901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201009 VALUES LESS THAN ('20101001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201010 VALUES LESS THAN ('20101101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201011 VALUES LESS THAN ('20101201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201012 VALUES LESS THAN ('20110101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201101 VALUES LESS THAN ('20110201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201102 VALUES LESS THAN ('20110301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201103 VALUES LESS THAN ('20110401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201104 VALUES LESS THAN ('20110501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201105 VALUES LESS THAN ('20110601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201106 VALUES LESS THAN ('20110701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201107 VALUES LESS THAN ('20110801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201108 VALUES LESS THAN ('20110901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201109 VALUES LESS THAN ('20111001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201110 VALUES LESS THAN ('20111101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201111 VALUES LESS THAN ('20111201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201112 VALUES LESS THAN ('20120101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201201 VALUES LESS THAN ('20120201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201202 VALUES LESS THAN ('20120301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201203 VALUES LESS THAN ('20120401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201204 VALUES LESS THAN ('20120501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201205 VALUES LESS THAN ('20120601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201206 VALUES LESS THAN ('20120701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201207 VALUES LESS THAN ('20120801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201208 VALUES LESS THAN ('20120901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201209 VALUES LESS THAN ('20121001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201210 VALUES LESS THAN ('20121101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201211 VALUES LESS THAN ('20121201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201212 VALUES LESS THAN ('20130101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201301 VALUES LESS THAN ('20130201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201302 VALUES LESS THAN ('20130301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201303 VALUES LESS THAN ('20130401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201304 VALUES LESS THAN ('20130501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201305 VALUES LESS THAN ('20130601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201306 VALUES LESS THAN ('20130701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201307 VALUES LESS THAN ('20130801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201308 VALUES LESS THAN ('20130901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201309 VALUES LESS THAN ('20131001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201310 VALUES LESS THAN ('20131101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201311 VALUES LESS THAN ('20131201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201312 VALUES LESS THAN ('20140101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201401 VALUES LESS THAN ('20140201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('20140301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('20140401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('20140501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('20140601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('20140701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('20140801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('20140901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('20141001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('20141101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('20141201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('20150101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('20150201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('20150301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('20150401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('20150501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('20150601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('20150701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('20150801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('20150901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('20151001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('20151101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('20151201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('20160101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('20160201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('20160301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('20160401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('20160501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('20160601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('20160701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('20160801')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('20160901')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('20161001')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('20161101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('20161201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('20170101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_RMAX VALUES LESS THAN ('MAXVALUE')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 8
        INITRANS 1
        MAXTRANS 255
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_D                               IS '배송예정서상세'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.SPYPL_NA_TRPL_C               IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVYAA_NA_TRPL_C               IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.NA_DVY_PLASH_SLPNO            IS '경제통합배송예정서전표번호'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PLA_SQNO                  IS '배송예정일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PLA_DT                    IS '배송예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.NA_WRS_C                      IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.VCBT_NA_WRS_C                 IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.ODR_DT                        IS '발주일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.ODR_SLPNO                     IS '발주전표번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.ODR_DSQNO                     IS '발주상세일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.TXT_DSC                       IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_WRS_UPR                   IS '배송상품단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PLA_QT                    IS '배송예정수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_AM                        IS '배송금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_VAT                       IS '배송부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_VCBT_AM                   IS '배송공병금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_SSDY                      IS '배송장려금'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_TROT_FEE                  IS '배송환급수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PHD_FEE                   IS '배송물류수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_FAR_ASTCS                 IS '배송운임보조비'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DQPD_RSNC                     IS '결품사유코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DQPD_RSN_CNTN                 IS '결품사유기타내용'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_SSDYRT                    IS '배송장려금율'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_TROT_FEERT                IS '배송환급수수료율'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.LS_CMENO                      IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.SPY_PSB_DT                    IS '공급가능일자'                           ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_DLVPNSHT_TEMP_M    배송예정서기본 TEMP
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_DLVPNSHT_TEMP_M ;

CREATE TABLE NHVANINF.TB_OD_DLVPNSHT_TEMP_M (  
    TEMP_SEQ                                                              VARCHAR2(20)      NOT NULL                  ,
    ROW_SEQ                                                               NUMBER(5)         NOT NULL                  ,
    ITEM_CNT                                                              NUMBER(3)                                   ,
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    SPYPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    DVY_PLA_DT                                                            CHAR(8)                                     ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)                                ,
    ODRPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ODRPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    RVOPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    RVOPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    ADJPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ADJPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    MNGT_NA_TR_TPC                                                        CHAR(1)                                     ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    DVYAA_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    DVYAA_C                                                               VARCHAR2(4)                                 ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    SLGT_ETR_DSC                                                          CHAR(1)                                     ,
    NA_WRS_LCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_MCLC                                                           VARCHAR2(3)                                 ,
    ACCP_C                                                                VARCHAR2(2)                                 ,
    DVY_PLA_QT                                                            NUMBER(15,2)                                ,
    DVY_AM                                                                NUMBER(18,2)                                ,
    DVY_VAT                                                               NUMBER(18,0)                                ,
    VCBT_AM                                                               NUMBER(18)                                  ,
    VCBX_AM                                                               NUMBER(18)                                  ,
    DVY_SSDY                                                              NUMBER(18,2)                                ,
    DVY_TROT_FEE                                                          NUMBER(18,2)                                ,
    DVY_PHD_FEE                                                           NUMBER(18,2)                                ,
    DVY_FAR_ASTCS                                                         NUMBER(18,2)                                ,
    WD_PLTT_QT                                                            NUMBER(9)                                   ,
    PSC_PLTT_QT                                                           NUMBER(15)                                  ,
    PRGR_C                                                                VARCHAR2(4)                                 ,
    BUY_UPR_DSC                                                           CHAR(1)                                     ,
    BYNG_UPR_GR_C                                                         VARCHAR2(2)                                 ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    SUCCESS_YN                                                            CHAR(1)                                     ,
    CONSTRAINT PK_TB_OD_DLVPNSHT_TEMP_M PRIMARY KEY (TEMP_SEQ,ROW_SEQ) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_TEMP_M                          IS '배송예정서기본 TEMP'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.TEMP_SEQ                 IS '생성일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ROW_SEQ                  IS '일련번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ITEM_CNT                 IS 'DETAIL건수'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SPYPL_NA_TRPL_C          IS '공급처'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SPYPL_NA_TEAM_C          IS '공급처팀'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_PLA_DT               IS '배송예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.NA_DVY_PLASH_SLPNO       IS '배송예정서번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ODRPL_NA_TRPL_C          IS '발주처'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ODRPL_NA_TEAM_C          IS '발주처팀'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.RVOPL_NA_TRPL_C          IS '수주처'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.RVOPL_NA_TEAM_C          IS '수주처팀'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ADJPL_NA_TRPL_C          IS '정산처'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ADJPL_NA_TEAM_C          IS '정산처팀'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.MNGT_NA_TR_TPC           IS '주관처 거래유형'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.MNGT_NA_TRPL_C           IS '주관처'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.MNGT_NA_TEAM_C           IS '주관처팀'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVYAA_NA_TRPL_C          IS '배송처'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVYAA_NA_TEAM_C          IS '배송처팀'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVYAA_C                  IS '배송지'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.CSER_CTR_TPC             IS '수요자 계약유형'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SPY_TPC                  IS '공급유형'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SLGT_ETR_DSC             IS '매취수탁 구분'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.NA_WRS_LCLC              IS '대분류'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.NA_WRS_MCLC              IS '중분류'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ACCP_C                   IS '인수도코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_PLA_QT               IS '배송예정수량 (합계)'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_AM                   IS '배송금액 (합계)'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_VAT                  IS '배송부가세 (합계)'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.VCBT_AM                  IS '배송공병금액 (합계)'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.VCBX_AM                  IS '배송공상자금액 (합계)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_SSDY                 IS '배송장려금 (합계)'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_TROT_FEE             IS '배송환급수수료 (합계)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_PHD_FEE              IS '배송물류수수료 (합계)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_FAR_ASTCS            IS '배송운임보조비 (합계)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.WD_PLTT_QT               IS '목재파렛트수량 (합계)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.PSC_PLTT_QT              IS '플라스틱파렛트 수량(합계)'              ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.PRGR_C                   IS '가격군'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.BUY_UPR_DSC              IS '구매단가구분'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.BYNG_UPR_GR_C            IS '매입단가군'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.RMK_CNTN                 IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.FSRG_DTM                 IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.FSRGMN_NA_BZPLC          IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SUCCESS_YN               IS '완료여부'                               ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_DLVPNSHT_TEMP_D    배송예정서상세 TEMP
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_DLVPNSHT_TEMP_D ;

CREATE TABLE NHVANINF.TB_OD_DLVPNSHT_TEMP_D (  
    TEMP_SEQ                                                              VARCHAR2(20)      NOT NULL                  ,
    ROW_SEQ                                                               NUMBER(5)         NOT NULL                  ,
    ITEM_SEQ                                                              NUMBER(3)         NOT NULL                  ,
    DVY_PLA_DT                                                            CHAR(8)                                     ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    NA_SOGMN_C                                                            VARCHAR2(13)                                ,
    PDAA_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    PDAA_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    RCPMNM                                                                VARCHAR2(50)                                ,
    RCPMN_TELNO                                                           VARCHAR2(14)                                ,
    ODR_DT                                                                CHAR(8)                                     ,
    ODR_SLPNO                                                             VARCHAR2(16)                                ,
    ODR_DSQNO                                                             NUMBER(10,0)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    DVY_WRS_UPR                                                           NUMBER(18,2)                                ,
    DVY_PLA_QT                                                            NUMBER(15,2)                                ,
    DVY_AM                                                                NUMBER(18,2)                                ,
    DVY_VAT                                                               NUMBER(18,0)                                ,
    DVY_VCBT_AM                                                           NUMBER(18,0)                                ,
    DVY_SSDY                                                              NUMBER(18,0)                                ,
    DVY_TROT_FEE                                                          NUMBER(18,2)                                ,
    DVY_PHD_FEE                                                           NUMBER(18,2)                                ,
    DVY_FAR_ASTCS                                                         NUMBER(18,2)                                ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    SL_UPR_TPC                                                            VARCHAR2(2)                                 ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    BUY_BZ_METC                                                           VARCHAR2(2)                                 ,
    CONSTRAINT PK_TB_OD_DLVPNSHT_TEMP_D PRIMARY KEY (TEMP_SEQ,ROW_SEQ,ITEM_SEQ) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_TEMP_D                          IS '배송예정서상세 TEMP'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.TEMP_SEQ                 IS '생성일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ROW_SEQ                  IS '일련번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ITEM_SEQ                 IS '배송예정서 일련번호'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_PLA_DT               IS '배송예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.NA_WRS_C                 IS '상품코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.NA_SOGMN_C               IS '출하자코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.PDAA_NA_TRPL_C           IS '산지사업장코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.PDAA_NA_TEAM_C           IS '산지사업장팀코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.RCPMNM                   IS '수령인명'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.RCPMN_TELNO              IS '수령인전화번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ODR_DT                   IS '발주일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ODR_SLPNO                IS '발주전표번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ODR_DSQNO                IS '발주상세일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.TXT_DSC                  IS '과세구분'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_WRS_UPR              IS '배송상품단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_PLA_QT               IS '배송수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_AM                   IS '배송금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_VAT                  IS '배송부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_VCBT_AM              IS '배송공병금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_SSDY                 IS '배송장려금'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_TROT_FEE             IS '배송환급수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_PHD_FEE              IS '배송물류수수료'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_FAR_ASTCS            IS '배송운임보조비'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.RMK_CNTN                 IS '비고내용(상세)'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.SL_UPR_TPC               IS '매출단가유형'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.CSER_CTR_TPC             IS '수요자계약유형'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.BUY_BZ_METC              IS '구매사업방식코드'                       ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_RTNPLN_M    반품예정기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_RTNPLN_M ;

CREATE TABLE NHVANINF.TB_OD_RTNPLN_M (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    RGD_RG_DT                                                             CHAR(8)           NOT NULL                  ,
    RGD_PLA_NO                                                            VARCHAR2(16)      NOT NULL                  ,
    RVOPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    RVOPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    ADJPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ADJPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    MNGT_NA_TR_TPC                                                        CHAR(1)                                     ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    PHD_RLYBR_NA_TRPL_C                                                   VARCHAR2(13)                                ,
    WDRPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    WDRPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    WDR_DVYAA_C                                                           VARCHAR2(4)                                 ,
    WDR_RQR_DT                                                            CHAR(8)                                     ,
    WDR_PLA_DT                                                            CHAR(8)                                     ,
    WDR_PLA_TM                                                            CHAR(6)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    NA_WRS_LCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_MCLC                                                           VARCHAR2(3)                                 ,
    NA_STL_TP_DSC                                                         VARCHAR2(2)                                 ,
    PRGR_C                                                                VARCHAR2(4)                                 ,
    BUY_UPR_DSC                                                           CHAR(1)                                     ,
    BYNG_UPR_GR_C                                                         VARCHAR2(2)                                 ,
    SL_UPR_TPC                                                            VARCHAR2(2)                                 ,
    BUY_BZ_METC                                                           VARCHAR2(2)                                 ,
    SRA_WK_DSC                                                            VARCHAR2(2)                                 ,
    NA_PAK_DSC                                                            VARCHAR2(2)                                 ,
    BOX_DSC                                                               VARCHAR2(2)                                 ,
    SRA_WRS_DSC                                                           VARCHAR2(2)                                 ,
    ACCP_C                                                                VARCHAR2(2)                                 ,
    DVY_VHC_DSC                                                           CHAR(1)                                     ,
    VHCNO                                                                 VARCHAR2(20)                                ,
    TMS_DT                                                                CHAR(8)                                     ,
    VCBT_AM                                                               NUMBER(18,0)                                ,
    VCBX_AM                                                               NUMBER(18,0)                                ,
    RGD_QT                                                                NUMBER(15,2)                                ,
    RGD_VAT                                                               NUMBER(18,0)                                ,
    RGD_AM                                                                NUMBER(18,0)                                ,
    OGN_SLPNO                                                             VARCHAR2(16)                                ,
    OSLIP_DT                                                              CHAR(8)                                     ,
    RGD_FORM_DSC                                                          CHAR(1)                                     ,
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    SLGT_ETR_DSC                                                          CHAR(1)                                     ,
    CNR_STS_DSC                                                           VARCHAR2(2)                                 ,
    CHG_RSNCTT                                                            VARCHAR2(200)                               ,
    DEL_RSNCTT                                                            VARCHAR2(200)                               ,
    NA_RGD_STS_DSC                                                        VARCHAR2(2)                                 ,
    RGD_AMN_DSC                                                           CHAR(1)                                     ,
    APVMN_ENO                                                             VARCHAR2(9)                                 ,
    APV_DTM                                                               DATE                                        ,
    XML_RGD_PLA_NO                                                        VARCHAR2(17)                                ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    TR_DSNM                                                               VARCHAR2(20)                                ,
    BYNG_DFN_QT                                                           NUMBER(15,2)                                ,
    BYNG_DFN_AM                                                           NUMBER(18,0)                                ,
    BYNG_DFN_VAT                                                          NUMBER(18,0)                                ,
    BYNG_DFN_VCBT_AM                                                      NUMBER(18,0)                                ,
    BYNG_DFN_VCBX_AM                                                      NUMBER(18,0)                                ,
    BYNG_DFN_SSDY                                                         NUMBER(18,0)                                ,
    BYNG_DFN_TROT_FEE                                                     NUMBER(18,0)                                ,
    BYNG_DFN_PHD_FEE                                                      NUMBER(18,0)                                ,
    BYNG_DFN_FAR_ASTCS                                                    NUMBER(18,0)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    RTNCNF_DTM                                                            DATE                                        ,
    CONSTRAINT PK_TB_OD_RTNPLN_M PRIMARY KEY (NA_TRPL_C,NA_TEAM_C,RGD_RG_DT,RGD_PLA_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_RTNPLN_M                                 IS '반품예정기본'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_TRPL_C                       IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_TEAM_C                       IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_RG_DT                       IS '반품등록일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_PLA_NO                      IS '반품예정번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RVOPL_NA_TRPL_C                 IS '수주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RVOPL_NA_TEAM_C                 IS '수주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.ADJPL_NA_TRPL_C                 IS '정산처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.ADJPL_NA_TEAM_C                 IS '정산처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.MNGT_NA_TR_TPC                  IS '주관경제통합거래유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.MNGT_NA_TRPL_C                  IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.MNGT_NA_TEAM_C                  IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.PHD_RLYBR_NA_TRPL_C             IS '물류중계소경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDRPL_NA_TRPL_C                 IS '회수처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDRPL_NA_TEAM_C                 IS '회수처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_DVYAA_C                     IS '회수배송지코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_RQR_DT                      IS '회수요청일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_PLA_DT                      IS '회수예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_PLA_TM                      IS '회수예정시각'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SPY_TPC                         IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.CSER_CTR_TPC                    IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_WRS_LCLC                     IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_WRS_MCLC                     IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_STL_TP_DSC                   IS '경제통합결제유형구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.PRGR_C                          IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BUY_UPR_DSC                     IS '구매단가구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_UPR_GR_C                   IS '매입단가군코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SL_UPR_TPC                      IS '매출단가유형코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BUY_BZ_METC                     IS '구매사업방식코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SRA_WK_DSC                      IS '축산작업구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_PAK_DSC                      IS '경제통합포장구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BOX_DSC                         IS '박스구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SRA_WRS_DSC                     IS '축산상품구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.ACCP_C                          IS '인수도코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DVY_VHC_DSC                     IS '배송차량구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.VHCNO                           IS '차량번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.TMS_DT                          IS '전송일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.VCBT_AM                         IS '공병금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.VCBX_AM                         IS '공상자금액'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_QT                          IS '반품수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_VAT                         IS '반품부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_AM                          IS '반품금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.OGN_SLPNO                       IS '원전표번호'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.OSLIP_DT                        IS '원전표일자'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_FORM_DSC                    IS '반품형태구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SPYPL_NA_TRPL_C                 IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DVYAA_NA_TRPL_C                 IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SLGT_ETR_DSC                    IS '매취수탁구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.CNR_STS_DSC                     IS '검수상태구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.CHG_RSNCTT                      IS '변경사유내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DEL_RSNCTT                      IS '삭제사유내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_RGD_STS_DSC                  IS '경제통합반품상태구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_AMN_DSC                     IS '반품관리구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.APVMN_ENO                       IS '승인자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.APV_DTM                         IS '승인일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.XML_RGD_PLA_NO                  IS 'XML반품예정번호'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RMK_CNTN                        IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.TR_DSNM                         IS '거래구분명'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_QT                     IS '매입확정수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_AM                     IS '매입확정금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_VAT                    IS '매입확정부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_VCBT_AM                IS '매입확정공병금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_VCBX_AM                IS '매입확정공상자금액'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_SSDY                   IS '매입확정장려금'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_TROT_FEE               IS '매입확정환급수수료'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_PHD_FEE                IS '매입확정물류수수료'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_FAR_ASTCS              IS '매입확정운임보조비'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.LSCHG_DTM                       IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.LS_CMENO                        IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DEL_DTM                         IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RTNCNF_DTM                      IS '반품확인일시'                           ;

GRANT SELECT ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_RTNPLN_D    반품예정상세
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_RTNPLN_D ;

CREATE TABLE NHVANINF.TB_OD_RTNPLN_D (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    RGD_RG_DT                                                             CHAR(8)           NOT NULL                  ,
    RGD_PLA_NO                                                            VARCHAR2(16)      NOT NULL                  ,
    RGD_SQNO                                                              NUMBER(10,0)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    PD_YY                                                                 VARCHAR2(4)                                 ,
    TXT_DSC                                                               CHAR(1)                                     ,
    BOX_WRS_YN                                                            CHAR(1)                                     ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_AM                                                               NUMBER(18,0)                                ,
    RGD_UPR                                                               NUMBER(17,2)                                ,
    AJ_UPR                                                                NUMBER(17,2)                                ,
    RGD_QT                                                                NUMBER(15,2)                                ,
    RGD_PSB_QT                                                            NUMBER(15,0)                                ,
    RGD_VAT                                                               NUMBER(17,2)                                ,
    RGD_AM                                                                NUMBER(18,0)                                ,
    BOX_QT                                                                NUMBER(15,2)                                ,
    AJMN_ENO                                                              VARCHAR2(9)                                 ,
    AJ_DT                                                                 CHAR(8)                                     ,
    BYNG_DFN_UPR                                                          NUMBER(18,0)                                ,
    BYNG_DFN_QT                                                           NUMBER(15,2)                                ,
    BYNG_DFN_VAT                                                          NUMBER(18,0)                                ,
    BYNG_DFN_AM                                                           NUMBER(18,0)                                ,
    BYNG_DFN_VCBT_AM                                                      NUMBER(18,0)                                ,
    BYNG_DFN_SSDY                                                         NUMBER(18,0)                                ,
    BYNG_DFN_TROT_FEE                                                     NUMBER(18,0)                                ,
    BYNG_DFN_PHD_FEE                                                      NUMBER(18,0)                                ,
    BYNG_DFN_FAR_ASTCS                                                    NUMBER(18,0)                                ,
    NA_RGD_RSN_DSC                                                        VARCHAR2(2)                                 ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    BUY_BZ_METC                                                           VARCHAR2(2)                                 ,
    BYNG_DSQNO                                                            NUMBER(5,0)                                 ,
    CONSTRAINT PK_TB_OD_RTNPLN_D PRIMARY KEY (NA_TRPL_C,NA_TEAM_C,RGD_RG_DT,RGD_PLA_NO,RGD_SQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_RTNPLN_D                                 IS '반품예정상세'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_TRPL_C                       IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_TEAM_C                       IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_RG_DT                       IS '반품등록일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_PLA_NO                      IS '반품예정번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_SQNO                        IS '반품일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_WRS_C                        IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.PD_YY                           IS '생산년도'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.TXT_DSC                         IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BOX_WRS_YN                      IS '박스상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.VCBT_NA_WRS_C                   IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.VCBT_AM                         IS '공병금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_UPR                         IS '반품단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.AJ_UPR                          IS '조정단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_QT                          IS '반품수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_PSB_QT                      IS '반품가능수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_VAT                         IS '반품부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_AM                          IS '반품금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BOX_QT                          IS '박스수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.AJMN_ENO                        IS '조정자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.AJ_DT                           IS '조정일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_UPR                    IS '매입확정단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_QT                     IS '매입확정수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_VAT                    IS '매입확정부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_AM                     IS '매입확정금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_VCBT_AM                IS '매입확정공병금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_SSDY                   IS '매입확정장려금'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_TROT_FEE               IS '매입확정환급수수료'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_PHD_FEE                IS '매입확정물류수수료'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_FAR_ASTCS              IS '매입확정운임보조비'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_RGD_RSN_DSC                  IS '경제통합반품사유구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RMK_CNTN                        IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.CSER_CTR_TPC                    IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BUY_BZ_METC                     IS '구매사업방식코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DSQNO                      IS '매입상세일련번호'                       ;

GRANT SELECT ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_ORDRSV    주문예정
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_ORDRSV ;

CREATE TABLE NHVANINF.TB_OD_ORDRSV (  
    ODRPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    ODRPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    ODR_DT                                                                CHAR(8)           NOT NULL                  ,
    ODR_SLPNO                                                             VARCHAR2(16)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    RVOPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    RVOPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    SPYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    SPYPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    ROGO_INF_CRT_DSC                                                      VARCHAR2(3)                                 ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    DVY_RQR_DT                                                            CHAR(8)                                     ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    DVYAA_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    DDLY_YN                                                               CHAR(1)                                     ,
    CHAF_NA_WRS_C                                                         VARCHAR2(25)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_AM                                                               NUMBER(18)                                  ,
    VCBX_AM                                                               NUMBER(18)                                  ,
    ODR_PCS                                                               NUMBER(17, 2)                               ,
    ODR_QT                                                                NUMBER(10, 3)                               ,
    ODR_VAT                                                               NUMBER(18)                                  ,
    ODR_AM                                                                NUMBER(18)                                  ,
    FS_RMS_DT                                                             CHAR(8)                                     ,
    FS_RMS_HR                                                             CHAR(6)                                     ,
    LS_RMS_DT                                                             CHAR(8)                                     ,
    LS_RMS_HR                                                             CHAR(6)                                     ,
    EDIRG_DTM                                                             DATE                                        ,
    ACK_RMS_YN                                                            CHAR(1)                                     ,
    RMS_SPYPL_C                                                           VARCHAR2(13)                                ,
    APPLICATION_ID                                                        VARCHAR2(35)                                ,
    DOC_NAME                                                              CHAR(6)                                     ,
    DOC_RMS_LOC_DSC                                                       CHAR(3)                                     ,
    CONSTRAINT PK_TB_OD_ORDRSV PRIMARY KEY (ODRPL_NA_TRPL_C,ODRPL_NA_TEAM_C,ODR_DT,ODR_SLPNO,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_ORDRSV                                   IS '주문예정'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODRPL_NA_TRPL_C                   IS '발주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODRPL_NA_TEAM_C                   IS '발주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_DT                            IS '발주일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_SLPNO                         IS '발주전표번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.NA_WRS_C                          IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.RVOPL_NA_TRPL_C                   IS '수주처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.RVOPL_NA_TEAM_C                   IS '수주처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.SPYPL_NA_TRPL_C                   IS '공급처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.SPYPL_NA_TEAM_C                   IS '공급처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ROGO_INF_CRT_DSC                  IS '수발주정보생성구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.CSER_CTR_TPC                      IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DVY_RQR_DT                        IS '배송요청일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DVYAA_NA_TRPL_C                   IS '배송지경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DVYAA_NA_TEAM_C                   IS '배송지경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DDLY_YN                           IS '직송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.CHAF_NA_WRS_C                     IS '변경후경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.TXT_DSC                           IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.VCBT_NA_WRS_C                     IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.VCBT_AM                           IS '공병금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.VCBX_AM                           IS '공상자금액'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_PCS                           IS '발주원가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_QT                            IS '발주수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_VAT                           IS '발주부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_AM                            IS '발주금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.FS_RMS_DT                         IS '문서 최초수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.FS_RMS_HR                         IS '문서 최조수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.LS_RMS_DT                         IS '문서 최종수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.LS_RMS_HR                         IS '문서 최종수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.EDIRG_DTM                         IS 'I/F수신일시'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ACK_RMS_YN                        IS 'ACKDOC 수신여부'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.RMS_SPYPL_C                       IS '실제수신업체'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.APPLICATION_ID                    IS 'XTRUS처리키'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DOC_NAME                          IS '문서명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DOC_RMS_LOC_DSC                   IS 'WEB/EDI'                                ;

GRANT SELECT ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_OD_GM_GOOD_LOG    취급상품로그기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_OD_GM_GOOD_LOG ;

CREATE TABLE NHVANINF.TB_OD_GM_GOOD_LOG (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    APL_ED_DT                                                             CHAR(8)           NOT NULL                  ,
    APL_ST_DT                                                             CHAR(8)           NOT NULL                  ,
    WRSNM                                                                 VARCHAR2(100)                               ,
    SHRT_WRSNM                                                            VARCHAR2(40)                                ,
    WRS_STDNM                                                             VARCHAR2(50)                                ,
    STPL_WRS_YN                                                           CHAR(1)                                     ,
    STPL_AMN_NA_WRS_C                                                     VARCHAR2(25)                                ,
    NA_TEAM_C                                                             VARCHAR2(2)                                 ,
    LOW_NA_TEAM_C                                                         VARCHAR2(2)                                 ,
    NA_LLED_C                                                             VARCHAR2(3)                                 ,
    NA_MLED_C                                                             VARCHAR2(3)                                 ,
    TXT_DSC                                                               CHAR(1)                                     ,
    LIQ_YN                                                                CHAR(1)                                     ,
    WRS_SBJC                                                              VARCHAR2(3)                                 ,
    STCAST_DSC                                                            VARCHAR2(2)                                 ,
    BZ_METH_DSC                                                           VARCHAR2(2)                                 ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    TRPL_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    ROTS_CTR_DSC                                                          CHAR(1)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    INPD_QT                                                               NUMBER(10,0)                                ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    SEL_SSDYRT                                                            NUMBER(5,2)                                 ,
    BYNG_SSDY_UPR_RT_DSC                                                  CHAR(1)                                     ,
    BYNG_SSDYRT                                                           NUMBER(10,2)                                ,
    STPL_UPR                                                              NUMBER(17,2)                                ,
    SEL_UPR                                                               NUMBER(17,2)                                ,
    BAS_SEL_UPR                                                           NUMBER(17,2)                                ,
    WRS_SL_PFTRT                                                          NUMBER(5,2)                                 ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_UPR                                                              NUMBER(17,2)                                ,
    VCBT_QT                                                               NUMBER(7,0)                                 ,
    VCPBX_NA_WRS_C                                                        VARCHAR2(25)                                ,
    VCPBX_UPR                                                             NUMBER(18,0)                                ,
    SEL_PSB_YN                                                            CHAR(1)                                     ,
    RVO_YN                                                                CHAR(1)                                     ,
    ODR_FBID_YN                                                           CHAR(1)                                     ,
    AUT_BYNG_YN                                                           CHAR(1)                                     ,
    ODR_FBID_RSNC                                                         VARCHAR2(2)                                 ,
    EXCH_NA_WRS_C                                                         VARCHAR2(25)                                ,
    ODR_PSB_DT                                                            CHAR(8)                                     ,
    BYNG_YN                                                               CHAR(1)                                     ,
    TR_STOP_YN                                                            CHAR(1)                                     ,
    TR_STOP_RSNC                                                          VARCHAR2(2)                                 ,
    DDLY_YN                                                               CHAR(1)                                     ,
    MIN_ODR_QT                                                            NUMBER(7,0)                                 ,
    INTG_ODR_YN                                                           CHAR(1)                                     ,
    ODR_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    ACTL_SPYPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    VLD_PRD_CN                                                            NUMBER(7,0)                                 ,
    VLD_PRD_DSC                                                           CHAR(1)                                     ,
    LFIC_DSC                                                              CHAR(1)                                     ,
    STPL_AMN_DSC                                                          CHAR(1)                                     ,
    DC_YN                                                                 CHAR(1)                                     ,
    AFF_SSDY_PY_YN                                                        CHAR(1)                                     ,
    NA_LOCA_C                                                             VARCHAR2(16)                                ,
    PNT_APL_YN                                                            CHAR(1)                                     ,
    SPSL_ST_DT                                                            CHAR(8)                                     ,
    SPSL_ED_DT                                                            CHAR(8)                                     ,
    SPSL_SLP_DT                                                           CHAR(8)                                     ,
    SPSL_NA_SLPNO                                                         VARCHAR2(9)                                 ,
    SPSL_STTM                                                             CHAR(6)                                     ,
    SPSL_EDTM                                                             CHAR(6)                                     ,
    SPSL_UPR_RT_DSC                                                       CHAR(1)                                     ,
    SPSL_DCRT                                                             NUMBER(5,2)                                 ,
    EVT_EVT_SLP_DT                                                        CHAR(8)                                     ,
    EVT_EVT_NA_SLPNO                                                      VARCHAR2(9)                                 ,
    EVT_EVT_ST_DT                                                         CHAR(8)                                     ,
    EVT_EVT_ED_DT                                                         CHAR(8)                                     ,
    BUYER_ENO                                                             VARCHAR2(9)                                 ,
    DSTR_STPL_UPR_DSC                                                     CHAR(1)                                     ,
    STPL_EVL_BASCD                                                        CHAR(1)                                     ,
    SRA_WRS_DSC                                                           VARCHAR2(2)                                 ,
    SEL_UPR_DSC                                                           CHAR(1)                                     ,
    SEL_AM_APL_DSC                                                        CHAR(1)                                     ,
    INET_PR_OPNP_YN                                                       CHAR(1)                                     ,
    TRT_STRT_DT                                                           CHAR(8)                                     ,
    NGQ_STPL_PMSS_YN                                                      CHAR(1)                                     ,
    WRS_PCL_CNTN                                                          VARCHAR2(1000)                              ,
    STD_GRDNM                                                             VARCHAR2(255)                               ,
    DSTR_TER_YN                                                           CHAR(1)                                     ,
    WRS_TPC                                                               CHAR(1)                                     ,
    CTR_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    VLD_DDS                                                               NUMBER(10,0)                                ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    SPMALL_DSC                                                            CHAR(1)                                     ,
    INET_HNR_WRS_SLT_YN                                                   CHAR(1)                                     ,
    INET_OFR_AM                                                           NUMBER(18,0)                                ,
    WTTY_SCLES_APL_YN                                                     CHAR(1)                                     ,
    GRD_AMN_WRS_YN                                                        CHAR(1)                                     ,
    BOOK_WRS_YN                                                           CHAR(1)                                     ,
    REP_SL_WRS_YN                                                         CHAR(1)                                     ,
    DSTR_TRT_WRS_CTGR_LCLC                                                VARCHAR2(3)                                 ,
    DSTR_TRT_WRS_CTGR_MCLC                                                VARCHAR2(3)                                 ,
    DSTR_TRT_WRS_CTGR_SCLC                                                VARCHAR2(3)                                 ,
    MNGT_NA_BZPLC                                                         VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    STPL_SSVY_BAS_SEL_PR                                                  NUMBER(8,0)                                 ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DLMN_NA_BZPLC                                                         VARCHAR2(13)                                ,
    NHLV_PNT_APL_YN                                                       CHAR(1)                                     ,
    ACC_BUZ_UG_DSC                                                        CHAR(1)                                     ,
    RVO_FBID_RSNC                                                         VARCHAR2(2)                                 ,
    TXADU_DSC                                                             CHAR(1)                                     ,
    LIQ_DSC                                                               VARCHAR2(2)                                 ,
    WHT                                                                   NUMBER(15,4)                                ,
    PCS_RT_AMN_FQC                                                        CHAR(1)                                     ,
    PRD_TPC                                                               CHAR(2)                                     ,
    CRL_CLF_DSC                                                           VARCHAR2(2)                                 ,
    VPLTT_NA_WRS_C                                                        VARCHAR2(25)                                ,
    VPLTT_UPR                                                             NUMBER(17,2)                                ,
    CRL_STD_DSC                                                           VARCHAR2(2)                                 ,
    BSC_SEL_PSB_YN                                                        CHAR(1)                                     ,
    BYNG_SL_FEE_AMN_YN                                                    CHAR(1)                                     ,
    RGD_FBID_YN                                                           CHAR(1)                                     ,
    LATC_DEL_YN                                                           CHAR(1)                                     ,
    CONSTRAINT PK_TB_OD_GM_GOOD_LOG PRIMARY KEY (NA_BZPLC,NA_WRS_C,APL_ED_DT,APL_ST_DT) 
)
;

COMMENT ON TABLE  NHVANINF.TB_OD_GM_GOOD_LOG                              IS '취급상품로그기본'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_WRS_C                     IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.APL_ED_DT                    IS '적용종료일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.APL_ST_DT                    IS '적용시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRSNM                        IS '상품명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SHRT_WRSNM                   IS '단축상품명'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_STDNM                    IS '상품규격명'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_WRS_YN                  IS '재고상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_AMN_NA_WRS_C            IS '재고관리경제통합상품코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_TEAM_C                    IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LOW_NA_TEAM_C                IS '하위경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_LLED_C                    IS '경제통합대원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_MLED_C                    IS '경제통합중원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TXT_DSC                      IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LIQ_YN                       IS '주류여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_SBJC                     IS '상품과목코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STCAST_DSC                   IS '재고자산구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BZ_METH_DSC                  IS '사업방식구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_TRPL_C                    IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TRPL_NA_TEAM_C               IS '거래처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ROTS_CTR_DSC                 IS '계통계약구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPY_TPC                      IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INPD_QT                      IS '내품수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_UPR                     IS '매입단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_SSDYRT                   IS '판매장려금률'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_SSDY_UPR_RT_DSC         IS '매입장려금단가율구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_SSDYRT                  IS '매입장려금률'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_UPR                     IS '재고단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_UPR                      IS '판매단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BAS_SEL_UPR                  IS '기준판매단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_SL_PFTRT                 IS '상품매출이익률'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCBT_NA_WRS_C                IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCBT_UPR                     IS '공병단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCBT_QT                      IS '공병수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCPBX_NA_WRS_C               IS '공박스경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCPBX_UPR                    IS '공박스단가'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_PSB_YN                   IS '판매가능여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RVO_YN                       IS '수주여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_FBID_YN                  IS '발주금지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.AUT_BYNG_YN                  IS '자동매입여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_FBID_RSNC                IS '발주금지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EXCH_NA_WRS_C                IS '교체경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_PSB_DT                   IS '발주가능일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_YN                      IS '매입여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TR_STOP_YN                   IS '거래중지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TR_STOP_RSNC                 IS '거래중지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DDLY_YN                      IS '직송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.MIN_ODR_QT                   IS '최소발주수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INTG_ODR_YN                  IS '통합발주여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_NA_TRPL_C                IS '발주경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ACTL_SPYPL_NA_TRPL_C         IS '실제공급처경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VLD_PRD_CN                   IS '유효기간수'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VLD_PRD_DSC                  IS '유효기간구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LFIC_DSC                     IS '의제구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_AMN_DSC                 IS '재고관리구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DC_YN                        IS '할인여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.AFF_SSDY_PY_YN               IS '사후장려금지급여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_LOCA_C                    IS '경제통합로케이션코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.PNT_APL_YN                   IS '포인트적용여부'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_ST_DT                   IS '특별판매시작일자'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_ED_DT                   IS '특별판매종료일자'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_SLP_DT                  IS '특별판매전표일자'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_NA_SLPNO                IS '특별판매경제통합전표번호'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_STTM                    IS '특별판매시작시각'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_EDTM                    IS '특별판매종료시각'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_UPR_RT_DSC              IS '특별판매단가율구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_DCRT                    IS '특별판매할인율'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_SLP_DT               IS '이벤트행사전표일자'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_NA_SLPNO             IS '이벤트행사경제통합전표번호'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_ST_DT                IS '이벤트행사시작일자'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_ED_DT                IS '이벤트행사종료일자'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BUYER_ENO                    IS '바이어개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_STPL_UPR_DSC            IS '유통재고단가구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_EVL_BASCD               IS '재고평가기준코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SRA_WRS_DSC                  IS '축산상품구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_UPR_DSC                  IS '판매단가구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_AM_APL_DSC               IS '판매금액적용구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INET_PR_OPNP_YN              IS '인터넷가격공개여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TRT_STRT_DT                  IS '취급개시일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NGQ_STPL_PMSS_YN             IS '음수재고허용여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_PCL_CNTN                 IS '상품특징내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STD_GRDNM                    IS '표준등급명'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TER_YN                  IS '유통기한여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_TPC                      IS '상품유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.CTR_NA_TRPL_C                IS '계약경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VLD_DDS                      IS '유효일수'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RMK_CNTN                     IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPMALL_DSC                   IS '쇼핑몰구분코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INET_HNR_WRS_SLT_YN          IS '인터넷하나로상품선정여부'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INET_OFR_AM                  IS '인터넷제공금액'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WTTY_SCLES_APL_YN            IS '중량형저울적용여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.GRD_AMN_WRS_YN               IS '등급관리상품여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BOOK_WRS_YN                  IS '도서상품여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.REP_SL_WRS_YN                IS '대표매출상품여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TRT_WRS_CTGR_LCLC       IS '유통취급상품카테고리대분류코드'         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TRT_WRS_CTGR_MCLC       IS '유통취급상품카테고리중분류코드'         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TRT_WRS_CTGR_SCLC       IS '유통취급상품카테고리소분류코드'         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.MNGT_NA_BZPLC                IS '주관경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.MNGT_NA_TEAM_C               IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_SSVY_BAS_SEL_PR         IS '재고실사기준판매가격'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.FSRG_DTM                     IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.FSRGMN_ENO                   IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.FSRGMN_NA_BZPLC              IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LSCHG_DTM                    IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LS_CMENO                     IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LSCGMN_NA_BZPLC              IS '최종변경자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DEL_DTM                      IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DLMN_ENO                     IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DLMN_NA_BZPLC                IS '삭제자경제통합사업장코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NHLV_PNT_APL_YN              IS '이웃사랑포인트적용여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ACC_BUZ_UG_DSC               IS '계정겸용사용구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RVO_FBID_RSNC                IS '수주금지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TXADU_DSC                    IS '세액공제구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LIQ_DSC                      IS '주류구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WHT                          IS '단량'                                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.PCS_RT_AMN_FQC               IS '원가율관리주기코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.PRD_TPC                      IS '기간유형코드(01:1일 02:5일 03:7일 04:15일 05:1개월 06:2개월 07:3개월 09:임의일수)';
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.CRL_CLF_DSC                  IS '양곡분류구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VPLTT_NA_WRS_C               IS '공파렛트경제통합상품코드'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VPLTT_UPR                    IS '공파렛트단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.CRL_STD_DSC                  IS '양곡규격구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BSC_SEL_PSB_YN               IS '기본판매가능여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_SL_FEE_AMN_YN           IS '매입처매출처별수수료관리상품여부(TABLE:TB_NA_FD_RM_BUYPL_SLPL_FEE)';
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RGD_FBID_YN                  IS '반품금지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LATC_DEL_YN                  IS '품목삭제여부'                           ;

GRANT SELECT ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
