--������������������������������������������������������������
--��NHVANINF.TB_OD_TRTWRS    ��޻�ǰ�⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_TRTWRS                                   IS '��޻�ǰ�⺻'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_BZPLC                          IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_C                          IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PD_YY                             IS '����⵵'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.CSER_CTR_TPC                      IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BUY_TXT_DSC                       IS '���Ű��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BUY_BZ_METC                       IS '���Ż������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_TEAM_C                         IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRSNM                             IS '��ǰ��'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRS_ABR_NM                        IS '��ǰ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_LCLC                       IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_MCLC                       IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_SCLC                       IS '�������ջ�ǰ�Һз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_WRS_DTCF_C                     IS '�������ջ�ǰ���з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SL_UPR_TPC                        IS '����ܰ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.INPD_QT                           IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MIN_ODR_QT                        IS '�ּҹ��ּ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MAX_ODR_QT                        IS '�ִ���ּ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BYNG_UPR                          IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SL_UPR                            IS '����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBT_NA_WRS_C                     IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBT_UPR                          IS '�����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBX_NA_WRS_C                     IS '�����ڰ������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VCBX_UPR                          IS '�����ڴܰ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SPYPL_NA_TRPL_C                   IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SPYPL_NA_TEAM_C                   IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MNGT_NA_TRPL_C                    IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MNGT_NA_TEAM_C                    IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.CTR_TPC                           IS '��������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SPY_TPC                           IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.TXT_DSC                           IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.RVO_PSB_YN                        IS '���ְ��ɿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.ODR_PSB_YN                        IS '���ְ��ɿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_YN                           IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_PD_VIAPD_DSC                 IS '���ǰ����ǰ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_PD_GRD_DSC                   IS '���ǰ��ޱ����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.VIAPD_YN                          IS '����ǰ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SVS_YN                            IS '�Һп���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SVS_UNT_QT                        IS '�Һд�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BOX_BULK                          IS '�ڽ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRS_WDTH_LEN                      IS '��ǰ���α���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.WRS_LEN_LEN                       IS '��ǰ���α���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BOX_WRS_YN                        IS '�ڽ���ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_ST_DT                        IS '���۽�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_ED_DT                        IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DDLY_BAS_QT                       IS '���۱��ؼ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.MART_DIV_BKG_ODR_YN               IS '��Ʈ�л翹����ֿ���'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.SRA_WRS_DSC                       IS '����ǰ�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_AMN_WRS_YN                   IS '��������ǰ����'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_NA_WRS_C                     IS '���������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.STPL_AMN_DSC                      IS '�����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PD_YY_AMN_YN                      IS '����⵵��������'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_ODR_FBID_RSNC                  IS '�������չ��ֱ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_RVO_FBID_RSNC                  IS '�������ռ��ֱ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.BOXPE_AQZ                         IS '�ڽ����Լ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.NA_USR_SYS_KDC                    IS '�������ջ���ڽý��������ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PHD_FCLT_C                        IS '��������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.PPZ_ORR_DSC                       IS '�������׸�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.FSRG_DTM                          IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.FSRGMN_ENO                        IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.LSCHG_DTM                         IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.LS_CMENO                          IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_TRTWRS.DEL_DTM                           IS '�����Ͻ�'                               ;

GRANT SELECT ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_TRTWRS TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_ORDER_M    ���ֱ⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_ORDER_M                                  IS '���ֱ⺻'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODRPL_NA_TRPL_C                  IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODRPL_NA_TEAM_C                  IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_DT                           IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_SLPNO                        IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VAN_SEQ                          IS 'VAN�����Ϸù�ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ROGO_INF_CRT_DSC                 IS '�������������������ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.NA_ODR_STS_DSC                   IS '�������չ��ֻ��±����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RVOPL_NA_TRPL_C                  IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RVOPL_NA_TEAM_C                  IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.CSER_CTR_TPC                     IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SPY_TPC                          IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVY_RQR_DT                       IS '��ۿ�û����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVYAA_NA_TRPL_C                  IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVYAA_NA_TEAM_C                  IS '����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVYAA_C                          IS '������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVY_VHC_DSC                      IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VHCNO                            IS '������ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DVY_RQR_CNTN                     IS '��ۿ�û����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DDLY_YN                          IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SPYPL_NA_TRPL_C                  IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SPYPL_NA_TEAM_C                  IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MNGT_NA_TR_TPC                   IS '�ְ��������հŷ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MNGT_NA_TRPL_C                   IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MNGT_NA_TEAM_C                   IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VCBT_AM                          IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VCBX_AM                          IS '�����ڱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_QTTT                         IS '���ּ����հ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_SAM                          IS '���ֱݾ��հ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.VATTT                            IS '�ΰ����հ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.SCRN_IDNM                        IS 'ȭ��ID��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.APL_BAS_DT                       IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.FSRG_DTM                         IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LSCHG_DTM                        IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LS_CMENO                         IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DEL_DTM                          IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LDTM_DDS                         IS '����Ÿ���ϼ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.EMRG_ODR_YN                      IS '��޹��ֿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.GRS_SOJU_YN                      IS '������ֿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ODR_DSC                          IS '���ֱ����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ACCP_C                           IS '�μ����ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.NA_WRS_LCLC                      IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.NA_WRS_MCLC                      IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.BYNG_UPR_GR_C                    IS '���Դܰ����ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.TEMP_YN                          IS '�ӽ����忩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.PRC_YN                           IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RSP_C_CNTN                       IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.INQ_CN                           IS '��ȸ�Ǽ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LINE_CN                          IS '���ΰǼ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.FS_RMS_DT                        IS '���� ���ʼ�������'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.FS_RMS_HR                        IS '���� ���ʼ��Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LS_RMS_DT                        IS '���� ������������'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.LS_RMS_HR                        IS '���� �������Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.EDIRG_DTM                        IS 'I/F�����Ͻ�'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.ACK_RMS_YN                       IS 'ACKDOC ���ſ���'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.RMS_SPYPL_C                      IS '�������ž�ü'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.MB_ID                            IS 'ȸ�����̵�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.APPLICATION_ID                   IS 'XTRUSó��Ű'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DOC_NAME                         IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.DOC_RMS_LOC_DSC                  IS 'WEB/EDI'                                ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_M.EDI_IF_ID                        IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_ORDER_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_ORDER_D    ���ֻ�
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_ORDER_D                                  IS '���ֻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODRPL_NA_TRPL_C                  IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODRPL_NA_TEAM_C                  IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_DT                           IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_SLPNO                        IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_DSQNO                        IS '���ֻ��Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VAN_SEQ                          IS 'VAN�����Ϸù�ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.NA_WRS_C                         IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.CHAF_NA_WRS_C                    IS '�����İ������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.TXT_DSC                          IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VCBT_NA_WRS_C                    IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VCBT_AM                          IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.VCBX_AM                          IS '�����ڱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_PCS                          IS '���ֿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_QT                           IS '���ּ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_VAT                          IS '���ֺΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ODR_AM                           IS '���ֱݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.ACTL_SPYPL_NA_TRPL_C             IS '��������ó�������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.BYNG_QT                          IS '���Լ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.NA_ODR_STS_DSC                   IS '�������չ��ֻ��±����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.RMK_CNTN                         IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.NA_DVY_PLASH_SLPNO               IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.DVY_PLA_SQNO                     IS '��ۿ����Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.AUT_ODR_KDC                      IS '�ڵ����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDER_D.BOXPE_AQZ                        IS '�ڽ����Լ�'                             ;

GRANT SELECT ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_ORDER_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_BKEVNTBS_M    ���������������⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_BKEVNTBS_M                               IS '���������������⺻'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVT_YY                    IS '�������⵵'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVT_NO                    IS '��������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVT_PRG_STSC              IS '���������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.APL_NA_BZPLC                  IS '����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.APL_NA_TEAM_C                 IS '��������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.BKG_EVTNM                     IS '��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.WRS_CN                        IS '��ǰ��'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.ORR_ST_DT                     IS '�ֹ���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.ORR_DDL_DT                    IS '�ֹ���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.DVY_CPL_DT                    IS '��ۿϷ�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.DVY_ST_DT                     IS '��۽�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.LSCHG_DTM                     IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.FSRG_DTM                      IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.LS_CMENO                      IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_M.DEL_DTM                       IS '�����Ͻ�'                               ;

GRANT SELECT ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BKEVNTBS_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_BKEVNTBS_D    ����������������
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_BKEVNTBS_D                               IS '����������������'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_YY                    IS '�������⵵'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_NO                    IS '��������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.NA_WRS_C                      IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_WRS_CND_DSC           IS '��������ǰ���Ǳ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT                            IS '����'                                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT2                           IS '����2'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT3                           IS '����3'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT4                           IS '����4'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.QT5                           IS '����5'                                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR                    IS '������簡��'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR2                   IS '������簡��2'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR3                   IS '������簡��3'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR4                   IS '������簡��4'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BKG_EVT_PR5                   IS '������簡��5'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO                   IS '���ش�����'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO2                  IS '���ش�����2'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO3                  IS '���ش�����3'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO4                  IS '���ش�����4'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.BAS_DUM_RTO5                  IS '���ش�����5'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO                   IS '����������'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO2                  IS '����������2'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO3                  IS '����������3'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO4                  IS '����������4'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.OFR_DUM_RTO5                  IS '����������5'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DUM_TFR_NA_WRS_C              IS '����ü�������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_OFR_DUM_RTO               IS 'Ȯ������������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_BAS_DUM_RTO               IS 'Ȯ�����ش�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_QT                        IS 'Ȯ������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.DFN_PR                        IS 'Ȯ������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.TFR_NA_WRS_C                  IS '��ü�������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.CAN_YN                        IS '��ҿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.SPYPL_NA_TRPL_C               IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BKEVNTBS_D.SPYPL_NA_TEAM_C               IS '����ó�����������ڵ�'                   ;

GRANT SELECT ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BKEVNTBS_D TO NHVANWAS WITH GRANT OPTION ; 

--������������������������������������������������������������
--��NHVANINF.TB_OD_BE_BKEVNTPRC_M    ������簡�������⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_BE_BKEVNTPRC_M                           IS '������簡�������⺻'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.BKG_EVT_YY                IS '�������⵵'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.BKG_EVT_NO                IS '��������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.NA_WRS_C                  IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.PRGR_C                    IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.BUY_RFNDRT                IS '����ȯ�޷�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.CTR_UPR                   IS '���ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.STL_FDTCN                 IS '�������ϼ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_DT                    IS 'Ȯ������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.MAX_ODR_QT                IS '�ִ���ּ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_QT                    IS 'Ȯ������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_PR                    IS 'Ȯ������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_BAS_DUM_RTO           IS 'Ȯ�����ش�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_OFR_DUM_RTO           IS 'Ȯ������������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_MN_ENO                IS 'Ȯ���ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DFN_YN                    IS 'Ȯ������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.APL_YN                    IS '���뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.FSRG_DTM                  IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.LSCHG_DTM                 IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.LS_CMENO                  IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_BKEVNTPRC_M.DEL_DTM                   IS '�����Ͻ�'                               ;

GRANT SELECT ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BE_BKEVNTPRC_M TO NHVANWAS WITH GRANT OPTION ; 

--������������������������������������������������������������
--��NHVANINF.TB_OD_BE_ORDER    ������系��
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_BE_ORDER                                 IS '������系��'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODRPL_NA_TRPL_C                 IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODRPL_NA_TEAM_C                 IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.BKG_EVT_YY                      IS '�������⵵'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.BKG_EVT_NO                      IS '��������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.NA_WRS_C                        IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVY_RQ_DT                       IS '��۽�û����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVYAA_NA_TRPL_C                 IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVYAA_NA_TEAM_C                 IS '����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.RVOPL_NA_TRPL_C                 IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.RVOPL_NA_TEAM_C                 IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.PRGR_C                          IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DVY_RQR_DT                      IS '��ۿ�û����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.RQ_QT                           IS '��û����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DFN_QT                          IS 'Ȯ������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.CAN_DT                          IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.WK_NMLPRC_YN                    IS '�۾�����ó������'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DDLY_YN                         IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DDPD_X_YN                       IS '����ǰ���ܿ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.BKG_EVT_PRC_DSC                 IS '�������ó�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DSTB_DT                         IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODR_DT                          IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODR_SLPNO                       IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.ODR_DSQNO                       IS '���ֻ��Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.LDTM_DDS                        IS '����Ÿ���ϼ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.FSRG_DTM                        IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.LSCHG_DTM                       IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.LS_CMENO                        IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_BE_ORDER.DEL_DTM                         IS '�����Ͻ�'                               ;

GRANT SELECT ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_BE_ORDER TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_DLVPNSHT_LG_M    ��ۿ������⺻ ��������
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_LG_M                            IS '��ۿ������⺻ ��������'                ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SPYPL_NA_TRPL_C            IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVYAA_NA_TRPL_C            IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_DVY_PLASH_SLPNO         IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SPYPL_NA_TEAM_C            IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ODRPL_NA_TRPL_C            IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ODRPL_NA_TEAM_C            IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.RVOPL_NA_TRPL_C            IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.RVOPL_NA_TEAM_C            IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ADJPL_NA_TRPL_C            IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ADJPL_NA_TEAM_C            IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.MNGT_NA_TR_TPC             IS '�ְ��������հŷ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.MNGT_NA_TRPL_C             IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.MNGT_NA_TEAM_C             IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVYAA_NA_TEAM_C            IS '����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVYAA_C                    IS '������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_PLA_DT                 IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DDLY_YN                    IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.CSER_CTR_TPC               IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SPY_TPC                    IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.SLGT_ETR_DSC               IS '�����Ź�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_WRS_LCLC                IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_WRS_MCLC                IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_VHC_DSC                IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.VHCNO                      IS '������ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.ACCP_C                     IS '�μ����ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.NA_USR_SYS_KDC             IS '�������ջ���ڽý��������ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_PLA_QT                 IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_AM                     IS '��۱ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_VAT                    IS '��ۺΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_SSDY                   IS '��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_TROT_FEE               IS '���ȯ�޼�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_PHD_FEE                IS '��۹���������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.DVY_FAR_ASTCS              IS '��ۿ��Ӻ�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.WD_PLTT_QT                 IS '�����ķ�Ʈ����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.PSC_PLTT_QT                IS '�ö�ƽ�ķ�Ʈ����'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.BUY_UPR_DSC                IS '���Ŵܰ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.BYNG_UPR_GR_C              IS '���Դܰ����ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.BUY_BZ_METC                IS '���Ż������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.RMK_CNTN                   IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.FSRG_DTM                   IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_M.LSCHG_DTM                  IS '���������Ͻ�'                           ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_LG_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_DLVPNSHT_LG_D    ��ۿ������� ��������
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_LG_D                            IS '��ۿ������� ��������'                ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.SPYPL_NA_TRPL_C            IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVYAA_NA_TRPL_C            IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.NA_DVY_PLASH_SLPNO         IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PLA_SQNO               IS '��ۿ����Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PLA_DT                 IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.NA_WRS_C                   IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.RCPMNM                     IS '�����θ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.RCPMN_TELNO                IS '��������ȭ��ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.ODR_DT                     IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.ODR_SLPNO                  IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.ODR_DSQNO                  IS '���ֻ��Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.TXT_DSC                    IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_WRS_UPR                IS '��ۻ�ǰ�ܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PLA_QT                 IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_AM                     IS '��۱ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_VAT                    IS '��ۺΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_TROT_FEE               IS '���ȯ�޼�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_PHD_FEE                IS '��۹���������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.DVY_FAR_ASTCS              IS '��ۿ��Ӻ�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.FSRG_DTM                   IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.LSCHG_DTM                  IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_LG_D.RMK_CNTN                   IS '�����'                               ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_LG_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_DLVPNSHT_M    ��ۿ������⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_M                               IS '��ۿ������⺻'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SPYPL_NA_TRPL_C               IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVYAA_NA_TRPL_C               IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.NA_DVY_PLASH_SLPNO            IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SPYPL_NA_TEAM_C               IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ODRPL_NA_TRPL_C               IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ODRPL_NA_TEAM_C               IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RVOPL_NA_TRPL_C               IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RVOPL_NA_TEAM_C               IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ADJPL_NA_TRPL_C               IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ADJPL_NA_TEAM_C               IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MNGT_NA_TR_TPC                IS '�ְ��������հŷ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MNGT_NA_TRPL_C                IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MNGT_NA_TEAM_C                IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVYAA_NA_TEAM_C               IS '����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVYAA_C                       IS '������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLA_DT                    IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DDLY_YN                       IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.CSER_CTR_TPC                  IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SPY_TPC                       IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.SLGT_ETR_DSC                  IS '�����Ź�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_VHC_DSC                   IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.VHCNO                         IS '������ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.VCBT_AM                       IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.VCBX_AM                       IS '�����ڱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLA_QT                    IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_AM                        IS '��۱ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_VAT                       IS '��ۺΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_SSDY                      IS '��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_TROT_FEE                  IS '���ȯ�޼�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PHD_FEE                   IS '��۹���������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_FAR_ASTCS                 IS '��ۿ��Ӻ�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLASH_KDC                 IS '��ۿ����������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.OGN_NA_DVY_PLASH_SLPNO        IS '���������չ�ۿ�������ǥ��ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.GRS_SOJU_YN                   IS '������ֿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.FSRGMN_ENO                    IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.NA_WRS_LCLC                   IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.NA_WRS_MCLC                   IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DVY_PLASH_STSC                IS '��ۿ����������ڵ�(�μ������ÿ��� ���)';
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RMK_CNTN                      IS '���(�μ������ÿ��� ���)'              ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LSCHG_DTM                     IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LS_CMENO                      IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.TEMP_YN                       IS '�ӽ����忩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.PRC_YN                        IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RES_CODE                      IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RES_DESC                      IS '����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.INQ_CN                        IS '��ȸ�Ǽ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LINE_CN                       IS '���ΰǼ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.FS_RMS_DT                     IS '���� ���ʼ�������'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.FS_RMS_HR                     IS '���� ���ʼ��Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LS_RMS_DT                     IS '���� ������������'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.LS_RMS_HR                     IS '���� �������Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.EDIRG_DTM                     IS 'I/F�����Ͻ�'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.ACK_RMS_YN                    IS 'ACKDOC ���ſ���'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.RMS_SPYPL_C                   IS '�������ž�ü'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.MB_ID                         IS 'ȸ�����̵�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.APPLICATION_ID                IS 'XTRUSó��Ű'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DOC_NAME                      IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.DOC_RMS_LOC_DSC               IS 'WEB/EDI'                                ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_M.EDI_IF_ID                     IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_DLVPNSHT_D    ��ۿ�������
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_D                               IS '��ۿ�������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.SPYPL_NA_TRPL_C               IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVYAA_NA_TRPL_C               IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.NA_DVY_PLASH_SLPNO            IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PLA_SQNO                  IS '��ۿ����Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PLA_DT                    IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.NA_WRS_C                      IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.VCBT_NA_WRS_C                 IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.ODR_DT                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.ODR_SLPNO                     IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.ODR_DSQNO                     IS '���ֻ��Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.TXT_DSC                       IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_WRS_UPR                   IS '��ۻ�ǰ�ܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PLA_QT                    IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_AM                        IS '��۱ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_VAT                       IS '��ۺΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_VCBT_AM                   IS '��۰����ݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_SSDY                      IS '��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_TROT_FEE                  IS '���ȯ�޼�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_PHD_FEE                   IS '��۹���������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_FAR_ASTCS                 IS '��ۿ��Ӻ�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DQPD_RSNC                     IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DQPD_RSN_CNTN                 IS '��ǰ������Ÿ����'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_SSDYRT                    IS '����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.DVY_TROT_FEERT                IS '���ȯ�޼�������'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.LS_CMENO                      IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_D.SPY_PSB_DT                    IS '���ް�������'                           ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_DLVPNSHT_TEMP_M    ��ۿ������⺻ TEMP
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_TEMP_M                          IS '��ۿ������⺻ TEMP'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.TEMP_SEQ                 IS '�����Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ROW_SEQ                  IS '�Ϸù�ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ITEM_CNT                 IS 'DETAIL�Ǽ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SPYPL_NA_TRPL_C          IS '����ó'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SPYPL_NA_TEAM_C          IS '����ó��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_PLA_DT               IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.NA_DVY_PLASH_SLPNO       IS '��ۿ�������ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ODRPL_NA_TRPL_C          IS '����ó'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ODRPL_NA_TEAM_C          IS '����ó��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.RVOPL_NA_TRPL_C          IS '����ó'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.RVOPL_NA_TEAM_C          IS '����ó��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ADJPL_NA_TRPL_C          IS '����ó'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ADJPL_NA_TEAM_C          IS '����ó��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.MNGT_NA_TR_TPC           IS '�ְ�ó �ŷ�����'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.MNGT_NA_TRPL_C           IS '�ְ�ó'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.MNGT_NA_TEAM_C           IS '�ְ�ó��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVYAA_NA_TRPL_C          IS '���ó'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVYAA_NA_TEAM_C          IS '���ó��'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVYAA_C                  IS '�����'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.CSER_CTR_TPC             IS '������ �������'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SPY_TPC                  IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SLGT_ETR_DSC             IS '�����Ź ����'                          ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.NA_WRS_LCLC              IS '��з�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.NA_WRS_MCLC              IS '�ߺз�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.ACCP_C                   IS '�μ����ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_PLA_QT               IS '��ۿ������� (�հ�)'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_AM                   IS '��۱ݾ� (�հ�)'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_VAT                  IS '��ۺΰ��� (�հ�)'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.VCBT_AM                  IS '��۰����ݾ� (�հ�)'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.VCBX_AM                  IS '��۰����ڱݾ� (�հ�)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_SSDY                 IS '�������� (�հ�)'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_TROT_FEE             IS '���ȯ�޼����� (�հ�)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_PHD_FEE              IS '��۹��������� (�հ�)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.DVY_FAR_ASTCS            IS '��ۿ��Ӻ����� (�հ�)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.WD_PLTT_QT               IS '�����ķ�Ʈ���� (�հ�)'                  ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.PSC_PLTT_QT              IS '�ö�ƽ�ķ�Ʈ ����(�հ�)'              ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.PRGR_C                   IS '���ݱ�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.BUY_UPR_DSC              IS '���Ŵܰ�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.BYNG_UPR_GR_C            IS '���Դܰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.RMK_CNTN                 IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.FSRG_DTM                 IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.FSRGMN_NA_BZPLC          IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_M.SUCCESS_YN               IS '�ϷῩ��'                               ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_DLVPNSHT_TEMP_D    ��ۿ������� TEMP
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_DLVPNSHT_TEMP_D                          IS '��ۿ������� TEMP'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.TEMP_SEQ                 IS '�����Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ROW_SEQ                  IS '�Ϸù�ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ITEM_SEQ                 IS '��ۿ����� �Ϸù�ȣ'                    ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_PLA_DT               IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.NA_WRS_C                 IS '��ǰ�ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.NA_SOGMN_C               IS '�������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.PDAA_NA_TRPL_C           IS '����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.PDAA_NA_TEAM_C           IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.RCPMNM                   IS '�����θ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.RCPMN_TELNO              IS '��������ȭ��ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ODR_DT                   IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ODR_SLPNO                IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.ODR_DSQNO                IS '���ֻ��Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.TXT_DSC                  IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_WRS_UPR              IS '��ۻ�ǰ�ܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_PLA_QT               IS '��ۼ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_AM                   IS '��۱ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_VAT                  IS '��ۺΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_VCBT_AM              IS '��۰����ݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_SSDY                 IS '��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_TROT_FEE             IS '���ȯ�޼�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_PHD_FEE              IS '��۹���������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.DVY_FAR_ASTCS            IS '��ۿ��Ӻ�����'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.RMK_CNTN                 IS '�����(��)'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.SL_UPR_TPC               IS '����ܰ�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.CSER_CTR_TPC             IS '�����ڰ������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_DLVPNSHT_TEMP_D.BUY_BZ_METC              IS '���Ż������ڵ�'                       ;

GRANT SELECT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_DLVPNSHT_TEMP_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_RTNPLN_M    ��ǰ�����⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_RTNPLN_M                                 IS '��ǰ�����⺻'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_TEAM_C                       IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_RG_DT                       IS '��ǰ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_PLA_NO                      IS '��ǰ������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RVOPL_NA_TRPL_C                 IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RVOPL_NA_TEAM_C                 IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.ADJPL_NA_TRPL_C                 IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.ADJPL_NA_TEAM_C                 IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.MNGT_NA_TR_TPC                  IS '�ְ��������հŷ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.MNGT_NA_TRPL_C                  IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.MNGT_NA_TEAM_C                  IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.PHD_RLYBR_NA_TRPL_C             IS '�����߰�Ұ������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDRPL_NA_TRPL_C                 IS 'ȸ��ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDRPL_NA_TEAM_C                 IS 'ȸ��ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_DVYAA_C                     IS 'ȸ��������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_RQR_DT                      IS 'ȸ����û����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_PLA_DT                      IS 'ȸ����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.WDR_PLA_TM                      IS 'ȸ�������ð�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SPY_TPC                         IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.CSER_CTR_TPC                    IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_WRS_LCLC                     IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_WRS_MCLC                     IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_STL_TP_DSC                   IS '�������հ������������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.PRGR_C                          IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BUY_UPR_DSC                     IS '���Ŵܰ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_UPR_GR_C                   IS '���Դܰ����ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SL_UPR_TPC                      IS '����ܰ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BUY_BZ_METC                     IS '���Ż������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SRA_WK_DSC                      IS '����۾������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_PAK_DSC                      IS '�����������屸���ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BOX_DSC                         IS '�ڽ������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SRA_WRS_DSC                     IS '����ǰ�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.ACCP_C                          IS '�μ����ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DVY_VHC_DSC                     IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.VHCNO                           IS '������ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.TMS_DT                          IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.VCBT_AM                         IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.VCBX_AM                         IS '�����ڱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_QT                          IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_VAT                         IS '��ǰ�ΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_AM                          IS '��ǰ�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.OGN_SLPNO                       IS '����ǥ��ȣ'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.OSLIP_DT                        IS '����ǥ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_FORM_DSC                    IS '��ǰ���±����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SPYPL_NA_TRPL_C                 IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DVYAA_NA_TRPL_C                 IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.SLGT_ETR_DSC                    IS '�����Ź�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.CNR_STS_DSC                     IS '�˼����±����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.CHG_RSNCTT                      IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DEL_RSNCTT                      IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.NA_RGD_STS_DSC                  IS '�������չ�ǰ���±����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RGD_AMN_DSC                     IS '��ǰ���������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.APVMN_ENO                       IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.APV_DTM                         IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.XML_RGD_PLA_NO                  IS 'XML��ǰ������ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RMK_CNTN                        IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.TR_DSNM                         IS '�ŷ����и�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_QT                     IS '����Ȯ������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_AM                     IS '����Ȯ���ݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_VAT                    IS '����Ȯ���ΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_VCBT_AM                IS '����Ȯ�������ݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_VCBX_AM                IS '����Ȯ�������ڱݾ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_SSDY                   IS '����Ȯ�������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_TROT_FEE               IS '����Ȯ��ȯ�޼�����'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_PHD_FEE                IS '����Ȯ������������'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.BYNG_DFN_FAR_ASTCS              IS '����Ȯ�����Ӻ�����'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.LSCHG_DTM                       IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.LS_CMENO                        IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.DEL_DTM                         IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_M.RTNCNF_DTM                      IS '��ǰȮ���Ͻ�'                           ;

GRANT SELECT ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_RTNPLN_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_RTNPLN_D    ��ǰ������
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_RTNPLN_D                                 IS '��ǰ������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_TEAM_C                       IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_RG_DT                       IS '��ǰ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_PLA_NO                      IS '��ǰ������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_SQNO                        IS '��ǰ�Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_WRS_C                        IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.PD_YY                           IS '����⵵'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.TXT_DSC                         IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BOX_WRS_YN                      IS '�ڽ���ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.VCBT_NA_WRS_C                   IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.VCBT_AM                         IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_UPR                         IS '��ǰ�ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.AJ_UPR                          IS '�����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_QT                          IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_PSB_QT                      IS '��ǰ���ɼ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_VAT                         IS '��ǰ�ΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RGD_AM                          IS '��ǰ�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BOX_QT                          IS '�ڽ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.AJMN_ENO                        IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.AJ_DT                           IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_UPR                    IS '����Ȯ���ܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_QT                     IS '����Ȯ������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_VAT                    IS '����Ȯ���ΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_AM                     IS '����Ȯ���ݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_VCBT_AM                IS '����Ȯ�������ݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_SSDY                   IS '����Ȯ�������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_TROT_FEE               IS '����Ȯ��ȯ�޼�����'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_PHD_FEE                IS '����Ȯ������������'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DFN_FAR_ASTCS              IS '����Ȯ�����Ӻ�����'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.NA_RGD_RSN_DSC                  IS '�������չ�ǰ���������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.RMK_CNTN                        IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.CSER_CTR_TPC                    IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BUY_BZ_METC                     IS '���Ż������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_RTNPLN_D.BYNG_DSQNO                      IS '���Ի��Ϸù�ȣ'                       ;

GRANT SELECT ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_RTNPLN_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_ORDRSV    �ֹ�����
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_ORDRSV                                   IS '�ֹ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODRPL_NA_TRPL_C                   IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODRPL_NA_TEAM_C                   IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_DT                            IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_SLPNO                         IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.NA_WRS_C                          IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.RVOPL_NA_TRPL_C                   IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.RVOPL_NA_TEAM_C                   IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.SPYPL_NA_TRPL_C                   IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.SPYPL_NA_TEAM_C                   IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ROGO_INF_CRT_DSC                  IS '�������������������ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.CSER_CTR_TPC                      IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DVY_RQR_DT                        IS '��ۿ�û����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DVYAA_NA_TRPL_C                   IS '������������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DVYAA_NA_TEAM_C                   IS '����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DDLY_YN                           IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.CHAF_NA_WRS_C                     IS '�����İ������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.TXT_DSC                           IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.VCBT_NA_WRS_C                     IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.VCBT_AM                           IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.VCBX_AM                           IS '�����ڱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_PCS                           IS '���ֿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_QT                            IS '���ּ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_VAT                           IS '���ֺΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ODR_AM                            IS '���ֱݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.FS_RMS_DT                         IS '���� ���ʼ�������'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.FS_RMS_HR                         IS '���� �������Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.LS_RMS_DT                         IS '���� ������������'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.LS_RMS_HR                         IS '���� �������Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.EDIRG_DTM                         IS 'I/F�����Ͻ�'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.ACK_RMS_YN                        IS 'ACKDOC ���ſ���'                        ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.RMS_SPYPL_C                       IS '�������ž�ü'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.APPLICATION_ID                    IS 'XTRUSó��Ű'                            ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DOC_NAME                          IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_ORDRSV.DOC_RMS_LOC_DSC                   IS 'WEB/EDI'                                ;

GRANT SELECT ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_ORDRSV TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_OD_GM_GOOD_LOG    ��޻�ǰ�αױ⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_OD_GM_GOOD_LOG                              IS '��޻�ǰ�αױ⺻'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_WRS_C                     IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.APL_ED_DT                    IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.APL_ST_DT                    IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRSNM                        IS '��ǰ��'                                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SHRT_WRSNM                   IS '�����ǰ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_STDNM                    IS '��ǰ�԰ݸ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_WRS_YN                  IS '����ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_AMN_NA_WRS_C            IS '�������������ջ�ǰ�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_TEAM_C                    IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LOW_NA_TEAM_C                IS '���������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_LLED_C                    IS '�������մ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_MLED_C                    IS '���������߿����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TXT_DSC                      IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LIQ_YN                       IS '�ַ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_SBJC                     IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STCAST_DSC                   IS '����ڻ걸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BZ_METH_DSC                  IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_TRPL_C                    IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TRPL_NA_TEAM_C               IS '�ŷ�ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ROTS_CTR_DSC                 IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPY_TPC                      IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INPD_QT                      IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_UPR                     IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_SSDYRT                   IS '�Ǹ�����ݷ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_SSDY_UPR_RT_DSC         IS '��������ݴܰ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_SSDYRT                  IS '��������ݷ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_UPR                     IS '���ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_UPR                      IS '�ǸŴܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BAS_SEL_UPR                  IS '�����ǸŴܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_SL_PFTRT                 IS '��ǰ�������ͷ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCBT_NA_WRS_C                IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCBT_UPR                     IS '�����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCBT_QT                      IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCPBX_NA_WRS_C               IS '���ڽ��������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VCPBX_UPR                    IS '���ڽ��ܰ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_PSB_YN                   IS '�ǸŰ��ɿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RVO_YN                       IS '���ֿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_FBID_YN                  IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.AUT_BYNG_YN                  IS '�ڵ����Կ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_FBID_RSNC                IS '���ֱ��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EXCH_NA_WRS_C                IS '��ü�������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_PSB_DT                   IS '���ְ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_YN                      IS '���Կ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TR_STOP_YN                   IS '�ŷ���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TR_STOP_RSNC                 IS '�ŷ����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DDLY_YN                      IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.MIN_ODR_QT                   IS '�ּҹ��ּ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INTG_ODR_YN                  IS '���չ��ֿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ODR_NA_TRPL_C                IS '���ְ������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ACTL_SPYPL_NA_TRPL_C         IS '��������ó�������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VLD_PRD_CN                   IS '��ȿ�Ⱓ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VLD_PRD_DSC                  IS '��ȿ�Ⱓ�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LFIC_DSC                     IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_AMN_DSC                 IS '�����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DC_YN                        IS '���ο���'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.AFF_SSDY_PY_YN               IS '������������޿���'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NA_LOCA_C                    IS '�������շ����̼��ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.PNT_APL_YN                   IS '����Ʈ���뿩��'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_ST_DT                   IS 'Ư���ǸŽ�������'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_ED_DT                   IS 'Ư���Ǹ���������'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_SLP_DT                  IS 'Ư���Ǹ���ǥ����'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_NA_SLPNO                IS 'Ư���ǸŰ���������ǥ��ȣ'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_STTM                    IS 'Ư���ǸŽ��۽ð�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_EDTM                    IS 'Ư���Ǹ�����ð�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_UPR_RT_DSC              IS 'Ư���ǸŴܰ��������ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPSL_DCRT                    IS 'Ư���Ǹ�������'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_SLP_DT               IS '�̺�Ʈ�����ǥ����'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_NA_SLPNO             IS '�̺�Ʈ������������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_ST_DT                IS '�̺�Ʈ����������'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.EVT_EVT_ED_DT                IS '�̺�Ʈ�����������'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BUYER_ENO                    IS '���̾�ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_STPL_UPR_DSC            IS '�������ܰ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_EVL_BASCD               IS '����򰡱����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SRA_WRS_DSC                  IS '����ǰ�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_UPR_DSC                  IS '�ǸŴܰ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SEL_AM_APL_DSC               IS '�Ǹűݾ����뱸���ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INET_PR_OPNP_YN              IS '���ͳݰ��ݰ�������'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TRT_STRT_DT                  IS '��ް�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NGQ_STPL_PMSS_YN             IS '���������뿩��'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_PCL_CNTN                 IS '��ǰƯ¡����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STD_GRDNM                    IS 'ǥ�ص�޸�'                             ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TER_YN                  IS '������ѿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WRS_TPC                      IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.CTR_NA_TRPL_C                IS '���������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VLD_DDS                      IS '��ȿ�ϼ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RMK_CNTN                     IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.SPMALL_DSC                   IS '���θ������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INET_HNR_WRS_SLT_YN          IS '���ͳ��ϳ��λ�ǰ��������'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.INET_OFR_AM                  IS '���ͳ������ݾ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WTTY_SCLES_APL_YN            IS '�߷����������뿩��'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.GRD_AMN_WRS_YN               IS '��ް�����ǰ����'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BOOK_WRS_YN                  IS '������ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.REP_SL_WRS_YN                IS '��ǥ�����ǰ����'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TRT_WRS_CTGR_LCLC       IS '������޻�ǰī�װ���з��ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TRT_WRS_CTGR_MCLC       IS '������޻�ǰī�װ��ߺз��ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DSTR_TRT_WRS_CTGR_SCLC       IS '������޻�ǰī�װ��Һз��ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.MNGT_NA_BZPLC                IS '�ְ��������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.MNGT_NA_TEAM_C               IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.STPL_SSVY_BAS_SEL_PR         IS '���ǻ�����ǸŰ���'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.FSRG_DTM                     IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.FSRGMN_ENO                   IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.FSRGMN_NA_BZPLC              IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LSCHG_DTM                    IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LS_CMENO                     IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LSCGMN_NA_BZPLC              IS '���������ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DEL_DTM                      IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DLMN_ENO                     IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.DLMN_NA_BZPLC                IS '�����ڰ������ջ�����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.NHLV_PNT_APL_YN              IS '�̿��������Ʈ���뿩��'                 ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.ACC_BUZ_UG_DSC               IS '��������뱸���ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RVO_FBID_RSNC                IS '���ֱ��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.TXADU_DSC                    IS '���װ��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LIQ_DSC                      IS '�ַ������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.WHT                          IS '�ܷ�'                                   ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.PCS_RT_AMN_FQC               IS '�����������ֱ��ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.PRD_TPC                      IS '�Ⱓ�����ڵ�(01:1�� 02:5�� 03:7�� 04:15�� 05:1���� 06:2���� 07:3���� 09:�����ϼ�)';
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.CRL_CLF_DSC                  IS '���з������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VPLTT_NA_WRS_C               IS '���ķ�Ʈ�������ջ�ǰ�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.VPLTT_UPR                    IS '���ķ�Ʈ�ܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.CRL_STD_DSC                  IS '���԰ݱ����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BSC_SEL_PSB_YN               IS '�⺻�ǸŰ��ɿ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.BYNG_SL_FEE_AMN_YN           IS '����ó����ó�������������ǰ����(TABLE:TB_NA_FD_RM_BUYPL_SLPL_FEE)';
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.RGD_FBID_YN                  IS '��ǰ��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_OD_GM_GOOD_LOG.LATC_DEL_YN                  IS 'ǰ���������'                           ;

GRANT SELECT ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_OD_GM_GOOD_LOG TO NHVANWAS WITH GRANT OPTION ; 
