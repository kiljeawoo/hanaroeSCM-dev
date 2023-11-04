--������������������������������������������������������������
--��NHVANINF.TB_BY_BYNG_M    ���Գ����⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_BY_BYNG_M ;

CREATE TABLE NHVANINF.TB_BY_BYNG_M (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    SLP_DT                                                                CHAR(8)           NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)                                 ,
    CNR_DT                                                                CHAR(8)                                     ,
    ADJ_NA_BZPLC                                                          VARCHAR2(13)                                ,
    ADJ_BZPL_NA_TEAM_C                                                    VARCHAR2(2)                                 ,
    BUYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    BUYPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    ADJ_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    ADJ_NA_TEAM_C                                                         VARCHAR2(2)                                 ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    ACTL_BUYPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    ACTL_BUYPL_NA_TEAM_C                                                  VARCHAR2(2)                                 ,
    DDLY_BUYPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    DDLY_BUYPL_NA_TEAM_C                                                  VARCHAR2(2)                                 ,
    NA_BLB_DFC_DSC                                                        CHAR(1)                                     ,
    BYAM                                                                  NUMBER(18,0)                                ,
    BYNG_VAT                                                              NUMBER(18,0)                                ,
    VCBT_AM                                                               NUMBER(18,0)                                ,
    VCBX_AM                                                               NUMBER(18,0)                                ,
    BYNG_SSDY                                                             NUMBER(18,0)                                ,
    NA_STL_TP_DSC                                                         VARCHAR2(2)                                 ,
    RPY_PLA_DT                                                            CHAR(8)                                     ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)                                ,
    DDLY_YN                                                               CHAR(1)                                     ,
    BZ_METH_DSC                                                           VARCHAR2(2)                                 ,
    ROTS_CTR_DSC                                                          CHAR(1)                                     ,
    LED_RFL_DT                                                            CHAR(8)                                     ,
    NA_CRC_CAN_DSC                                                        CHAR(1)           NOT NULL                  ,
    OSLIP_DT                                                              CHAR(8)                                     ,
    OSLIP_NA_SLPNO                                                        VARCHAR2(9)                                 ,
    DEL_YN                                                                CHAR(1)                                     ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRG_DTM                                                              DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCHG_DTM                                                             DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    XML_RGD_PLA_NO                                                        VARCHAR2(17)                                ,
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
    CONSTRAINT PK_TB_BY_BYNG_M PRIMARY KEY (NA_BZPLC,NA_TEAM_C,SLP_DT,NA_SLPNO) 
)
PARTITION BY RANGE (SLP_DT)
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

COMMENT ON TABLE  NHVANINF.TB_BY_BYNG_M                                   IS '���Գ����⺻'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_BZPLC                          IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_TEAM_C                         IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.SLP_DT                            IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_SLPNO                          IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_TR_DSC                         IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.CNR_DT                            IS '�˼�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ADJ_NA_BZPLC                      IS '����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ADJ_BZPL_NA_TEAM_C                IS '������������������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.BUYPL_NA_TRPL_C                   IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.BUYPL_NA_TEAM_C                   IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ADJ_NA_TRPL_C                     IS '����������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ADJ_NA_TEAM_C                     IS '��������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.MNGT_NA_TRPL_C                    IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.MNGT_NA_TEAM_C                    IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ACTL_BUYPL_NA_TRPL_C              IS '��������ó�������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ACTL_BUYPL_NA_TEAM_C              IS '��������ó�����������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DDLY_BUYPL_NA_TRPL_C              IS '���۸���ó�������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DDLY_BUYPL_NA_TEAM_C              IS '���۸���ó�����������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_BLB_DFC_DSC                    IS '���������������ڱ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.BYAM                              IS '���Աݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.BYNG_VAT                          IS '���Ժΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.VCBT_AM                           IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.VCBX_AM                           IS '�����ڱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.BYNG_SSDY                         IS '���������'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_STL_TP_DSC                     IS '�������հ������������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.RPY_PLA_DT                        IS '��ȯ��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_DVY_PLASH_SLPNO                IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DDLY_YN                           IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.BZ_METH_DSC                       IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ROTS_CTR_DSC                      IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.LED_RFL_DT                        IS '����ݿ�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.NA_CRC_CAN_DSC                    IS '����/��ұ����ڵ�'                      ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.OSLIP_DT                          IS '����ǥ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.OSLIP_NA_SLPNO                    IS '����ǥ����������ǥ��ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DEL_YN                            IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.FSRGMN_ENO                        IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.FSRG_DTM                          IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.LS_CMENO                          IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.LSCHG_DTM                         IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DLMN_ENO                          IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DEL_DTM                           IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.XML_RGD_PLA_NO                    IS 'XML��ǰ������ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.INQ_CN                            IS '��ȸ�Ǽ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.LINE_CN                           IS '���ΰǼ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.FS_RMS_DT                         IS '���� ���ʼ�������'                      ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.FS_RMS_HR                         IS '���� ���ʼ��Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.LS_RMS_DT                         IS '���� ������������'                      ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.LS_RMS_HR                         IS '���� �������Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.EDIRG_DTM                         IS 'I/F�����Ͻ�'                            ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.ACK_RMS_YN                        IS 'ACKDOC ���ſ���'                        ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.RMS_SPYPL_C                       IS '�������ž�ü'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.MB_ID                             IS 'ȸ�����̵�'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.APPLICATION_ID                    IS 'XTRUSó��Ű'                            ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DOC_NAME                          IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_M.DOC_RMS_LOC_DSC                   IS 'WEB/EDI'                                ;

GRANT SELECT ON NHVANINF.TB_BY_BYNG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_BY_BYNG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_BY_BYNG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_BY_BYNG_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_BY_BYNG_WRS    ���Գ�����ǰ
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_BY_BYNG_WRS ;

CREATE TABLE NHVANINF.TB_BY_BYNG_WRS (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    SLP_DT                                                                CHAR(8)           NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    SLP_SQNO                                                              NUMBER(10,0)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    BYNG_QT                                                               NUMBER(15,2)                                ,
    BYNG_UPR                                                              NUMBER(17,2)                                ,
    BYAM                                                                  NUMBER(18,0)                                ,
    BYNG_VAT                                                              NUMBER(18,0)                                ,
    VCBT_AM                                                               NUMBER(18,0)                                ,
    RPY_PLA_DT                                                            CHAR(8)                                     ,
    PFT_FEE                                                               NUMBER(18,0)                                ,
    CST_FEE                                                               NUMBER(18,0)                                ,
    ETC_FEE                                                               NUMBER(18,0)                                ,
    BYNG_SSDY                                                             NUMBER(18,0)                                ,
    BYNG_SSDYRT                                                           NUMBER(5,2)                                 ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_QT                                                               NUMBER(7,0)                                 ,
    BYNG_WT                                                               NUMBER(15,3)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    LIQ_YN                                                                CHAR(1)                                     ,
    NA_WRS_UNT_C                                                          VARCHAR2(3)                                 ,
    RGD_RSNC                                                              VARCHAR2(2)                                 ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    WRS_TPC                                                               CHAR(1)                                     ,
    NA_BLB_DFC_DSC                                                        CHAR(1)                                     ,
    NA_CRC_CAN_DSC                                                        CHAR(1)                                     ,
    NA_TR_DSC                                                             VARCHAR2(4)                                 ,
    DVY_WRS_UPR                                                           NUMBER(18,2)                                ,
    DVY_PLA_QT                                                            NUMBER(15,2)                                ,
    ORR_QT                                                                NUMBER(15,2)                                ,
    CONSTRAINT PK_TB_BY_BYNG_WRS PRIMARY KEY (NA_BZPLC,NA_TEAM_C,SLP_DT,NA_SLPNO,SLP_SQNO,NA_WRS_C) 
)
PARTITION BY RANGE (SLP_DT)
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

COMMENT ON TABLE  NHVANINF.TB_BY_BYNG_WRS                                 IS '���Գ�����ǰ'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_BZPLC                        IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_TEAM_C                       IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.SLP_DT                          IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_SLPNO                        IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.SLP_SQNO                        IS '��ǥ�Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_WRS_C                        IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.BYNG_QT                         IS '���Լ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.BYNG_UPR                        IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.BYAM                            IS '���Աݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.BYNG_VAT                        IS '���Ժΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.VCBT_AM                         IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.RPY_PLA_DT                      IS '��ȯ��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.PFT_FEE                         IS '���ͼ�����'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.CST_FEE                         IS '��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.ETC_FEE                         IS '��Ÿ������'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.BYNG_SSDY                       IS '���������'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.BYNG_SSDYRT                     IS '��������ݷ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.VCBT_NA_WRS_C                   IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.VCBT_QT                         IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.BYNG_WT                         IS '�����߷�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.TXT_DSC                         IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.LIQ_YN                          IS '�ַ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_WRS_UNT_C                    IS '�������ջ�ǰ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.RGD_RSNC                        IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.SPY_TPC                         IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.WRS_TPC                         IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_BLB_DFC_DSC                  IS '�����ڱ����ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_CRC_CAN_DSC                  IS '������ұ����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.NA_TR_DSC                       IS '�ŷ������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.DVY_WRS_UPR                     IS '��ۿ�������ǰ�ܰ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.DVY_PLA_QT                      IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_WRS.ORR_QT                          IS '�ֹ�����'                               ;

GRANT SELECT ON NHVANINF.TB_BY_BYNG_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_BY_BYNG_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_BY_BYNG_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_BY_BYNG_WRS TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_BY_BYNG_FEE    ���Գ���������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_BY_BYNG_FEE ;

CREATE TABLE NHVANINF.TB_BY_BYNG_FEE (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    SLP_DT                                                                CHAR(8)           NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    SLP_SQNO                                                              NUMBER(10,0)      NOT NULL                  ,
    NA_FEE_C                                                              VARCHAR2(3)       NOT NULL                  ,
    BUYPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    BUYPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    FEENM                                                                 VARCHAR2(40)                                ,
    NA_PYPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    PYPL_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    SPY_AM                                                                NUMBER(18,0)      NOT NULL                  ,
    TXT_VAT                                                               NUMBER(18,0)      NOT NULL                  ,
    FEERT                                                                 NUMBER(5,2)                                 ,
    CONSTRAINT PK_TB_BY_BYNG_FEE PRIMARY KEY (NA_BZPLC,NA_TEAM_C,SLP_DT,NA_SLPNO,SLP_SQNO,NA_FEE_C,BUYPL_NA_TRPL_C,BUYPL_NA_TEAM_C) 
)
PARTITION BY RANGE (SLP_DT)
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

COMMENT ON TABLE  NHVANINF.TB_BY_BYNG_FEE                                 IS '���Գ���������'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.NA_BZPLC                        IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.NA_TEAM_C                       IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.SLP_DT                          IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.NA_SLPNO                        IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.SLP_SQNO                        IS '��ǥ�Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.NA_FEE_C                        IS '�������ռ������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.BUYPL_NA_TRPL_C                 IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.BUYPL_NA_TEAM_C                 IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.FEENM                           IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.NA_PYPL_C                       IS '������������ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.PYPL_NA_TEAM_C                  IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.SPY_AM                          IS '���ޱݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.TXT_VAT                         IS '�����ΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_BYNG_FEE.FEERT                           IS '��������'				;

GRANT SELECT ON NHVANINF.TB_BY_BYNG_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_BY_BYNG_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_BY_BYNG_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_BY_BYNG_FEE TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_BY_ECBUYSDH_M    ���Ÿ��Գ����⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_BY_ECBUYSDH_M ;

CREATE TABLE NHVANINF.TB_BY_ECBUYSDH_M (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    BYNG_DT                                                               CHAR(8)           NOT NULL                  ,
    BYNG_SLP_SQNO                                                         NUMBER(10)        NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)       NOT NULL                  ,
    NA_CRC_CAN_DSC                                                        CHAR(1)                                     ,
    ORGTR_DT                                                              CHAR(8)                                     ,
    OGN_TRNO                                                              NUMBER(7)                                   ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    NA_WRS_LCLC                                                           VARCHAR2(3)                                 ,
    BUY_UPR_DSC                                                           CHAR(1)                                     ,
    ROTS_CTR_DSC                                                          CHAR(1)                                     ,
    TXT_DSC                                                               CHAR(1)                                     ,
    BUY_BZ_METC                                                           VARCHAR2(2)                                 ,
    ACCP_C                                                                VARCHAR2(2)                                 ,
    DVY_PLA_DT                                                            CHAR(8)                                     ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)      NOT NULL                  ,
    NA_RGD_RSN_DSC                                                        VARCHAR2(2)                                 ,
    CONSTRAINT PK_TB_BY_ECBUYSDH_M PRIMARY KEY (NA_BZPLC,BYNG_DT,BYNG_SLP_SQNO,NA_TR_DSC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_BY_ECBUYSDH_M                               IS '���Ÿ��Գ����⺻'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.NA_BZPLC                      IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.BYNG_DT                       IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.BYNG_SLP_SQNO                 IS '������ǥ�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.NA_TR_DSC                     IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.NA_CRC_CAN_DSC                IS '��������������ұ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.ORGTR_DT                      IS '���ŷ�����'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.OGN_TRNO                      IS '���ŷ���ȣ'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.NA_TRPL_C                     IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.NA_WRS_LCLC                   IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.BUY_UPR_DSC                   IS '���Ŵܰ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.ROTS_CTR_DSC                  IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.TXT_DSC                       IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.BUY_BZ_METC                   IS '���Ż������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.ACCP_C                        IS '�μ����ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.DVY_PLA_DT                    IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.NA_DVY_PLASH_SLPNO            IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_M.NA_RGD_RSN_DSC                IS '�������չ�ǰ���������ڵ�'               ;

GRANT SELECT ON NHVANINF.TB_BY_ECBUYSDH_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_BY_ECBUYSDH_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_BY_ECBUYSDH_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_BY_ECBUYSDH_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_BY_ECBUYSDH_D    ���Ÿ��Գ�����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_BY_ECBUYSDH_D ;

CREATE TABLE NHVANINF.TB_BY_ECBUYSDH_D (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    BYNG_DT                                                               CHAR(8)           NOT NULL                  ,
    BYNG_SLP_SQNO                                                         NUMBER(10)        NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)       NOT NULL                  ,
    BYNG_DSQNO                                                            NUMBER(5)         NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    NA_WRS_MCLC                                                           VARCHAR2(3)                                 ,
    TXT_DSC                                                               CHAR(1)                                     ,
    BUY_BZ_METC                                                           VARCHAR2(2)                                 ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    BYNG_UPR                                                              NUMBER(17, 2)                               ,
    BYNG_QT                                                               NUMBER(15, 2)                               ,
    BYAM                                                                  NUMBER(18)                                  ,
    BYNG_VAT                                                              NUMBER(18)                                  ,
    ODR_DT                                                                CHAR(8)                                     ,
    ODR_SLPNO                                                             VARCHAR2(16)                                ,
    ODR_DSQNO                                                             NUMBER(10)                                  ,
    NA_RGD_RSN_DSC                                                        VARCHAR2(2)                                 ,
    DVY_PLA_SQNO                                                          NUMBER(10)                                  ,
    ORGTR_SQNO                                                            NUMBER(10)                                  ,
    CONSTRAINT PK_TB_BY_ECBUYSDH_D PRIMARY KEY (NA_BZPLC,BYNG_DT,BYNG_SLP_SQNO,NA_TR_DSC,BYNG_DSQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_BY_ECBUYSDH_D                               IS '���Ÿ��Գ�����'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.NA_BZPLC                      IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BYNG_DT                       IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BYNG_SLP_SQNO                 IS '������ǥ�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.NA_TR_DSC                     IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BYNG_DSQNO                    IS '���Ի��Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.NA_WRS_C                      IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.NA_WRS_MCLC                   IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.TXT_DSC                       IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BUY_BZ_METC                   IS '���Ż������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.CSER_CTR_TPC                  IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BYNG_UPR                      IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BYNG_QT                       IS '���Լ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BYAM                          IS '���Աݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.BYNG_VAT                      IS '���Ժΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.ODR_DT                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.ODR_SLPNO                     IS '������ǥ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.ODR_DSQNO                     IS '���ֻ��Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.NA_RGD_RSN_DSC                IS '�������չ�ǰ���������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.DVY_PLA_SQNO                  IS '��ۿ����Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_ECBUYSDH_D.ORGTR_SQNO                    IS '���ŷ��Ϸù�ȣ'                         ;

GRANT SELECT ON NHVANINF.TB_BY_ECBUYSDH_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_BY_ECBUYSDH_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_BY_ECBUYSDH_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_BY_ECBUYSDH_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_BY_RTNCNF_M    ��ǰȮ�α⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_BY_RTNCNF_M ;

CREATE TABLE NHVANINF.TB_BY_RTNCNF_M (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    DRUP_DT                                                               CHAR(8)           NOT NULL                  ,
    RGD_PLA_NO                                                            VARCHAR2(16)      NOT NULL                  ,
    NA_RGD_STS_DSC                                                        VARCHAR2(2)                                 ,
    LS_CMENO                                                              VARCHAR2(16)                                ,
    RMS_DT                                                                CHAR(8)                                     ,
    PRC_YN                                                                CHAR(1)                                     ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_BY_RTNCNF_M PRIMARY KEY (NA_TRPL_C,NA_TEAM_C,DRUP_DT,RGD_PLA_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_BY_RTNCNF_M                                 IS '��ǰȮ�α⺻'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.NA_TEAM_C                       IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.DRUP_DT                         IS '��ǰ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.RGD_PLA_NO                      IS '��ǰ������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.NA_RGD_STS_DSC                  IS '�������չ�ǰ���±����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.LS_CMENO                        IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.RMS_DT                          IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.PRC_YN                          IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.RSP_C_CNTN                      IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_M.EDI_IF_ID                       IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_BY_RTNCNF_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_BY_RTNCNF_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_BY_RTNCNF_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_BY_RTNCNF_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_BY_RTNCNF_D    ��ǰȮ�λ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_BY_RTNCNF_D ;

CREATE TABLE NHVANINF.TB_BY_RTNCNF_D (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    DRUP_DT                                                               CHAR(8)           NOT NULL                  ,
    RGD_PLA_NO                                                            VARCHAR2(16)      NOT NULL                  ,
    RGD_CNF_DSQNO                                                         NUMBER(10,0)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    RGD_QT                                                                NUMBER(15,2)                                ,
    RGD_UPR                                                               NUMBER(17,2)                                ,
    RGD_AM                                                                NUMBER(18,0)                                ,
    RGD_VAT                                                               NUMBER(18,0)                                ,
    BYNG_DFN_TROT_FEE                                                     NUMBER(18,0)                                ,
    AJ_UPR                                                                NUMBER(17,2)                                ,
    AJMN_ENO                                                              VARCHAR2(9)                                 ,
    AJ_DT                                                                 CHAR(8)                                     ,
    RGD_RSN_DSC                                                           VARCHAR2(2)                                 ,
    CONSTRAINT PK_TB_BY_RTNCNF_D PRIMARY KEY (NA_TRPL_C,NA_TEAM_C,DRUP_DT,RGD_PLA_NO,RGD_CNF_DSQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_BY_RTNCNF_D                                 IS '��ǰȮ�λ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.NA_TEAM_C                       IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.DRUP_DT                         IS '��ǰ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.RGD_PLA_NO                      IS '��ǰ������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.RGD_CNF_DSQNO                   IS '��ǰȮ�λ��Ϸù�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.NA_WRS_C                        IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.RGD_QT                          IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.RGD_UPR                         IS '��ǰ�ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.RGD_AM                          IS '��ǰ�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.RGD_VAT                         IS '��ǰ�ΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.BYNG_DFN_TROT_FEE               IS '����Ȯ��ȯ�޼�����'                     ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.AJ_UPR                          IS '�����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.AJMN_ENO                        IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.AJ_DT                           IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_BY_RTNCNF_D.RGD_RSN_DSC                     IS '��ǰ���������ڵ�'                       ;

GRANT SELECT ON NHVANINF.TB_BY_RTNCNF_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_BY_RTNCNF_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_BY_RTNCNF_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_BY_RTNCNF_D TO NHVANWAS WITH GRANT OPTION ; 


