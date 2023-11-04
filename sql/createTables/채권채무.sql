--������������������������������������������������������������
--��NHVANINF.TB_DE_BCDEXPT    �ܻ����ȸ����������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_DE_BCDEXPT ;

CREATE TABLE NHVANINF.TB_DE_BCDEXPT (  
    BASE_DT                                                               CHAR(8)           NOT NULL                  ,
    NA_ADJPL_C                                                            VARCHAR2(13)      NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    PY_PLA_DT                                                             CHAR(8)           NOT NULL                  ,
    CBAM                                                                  NUMBER(18,0)                                ,
    PY_PLA_AM                                                             NUMBER(18,0)                                ,
    CONSTRAINT PK_TB_DE_BCDEXPT PRIMARY KEY (BASE_DT,NA_ADJPL_C,NA_TRPL_C,NA_BZPLC,NA_TEAM_C,PY_PLA_DT) 
)
PARTITION BY RANGE (PY_PLA_DT)
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

COMMENT ON TABLE  NHVANINF.TB_DE_BCDEXPT                                  IS '�ܻ����ȸ����������'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.BASE_DT                          IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.NA_ADJPL_C                       IS '����ó����ó�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.NA_TRPL_C                        IS '����ó�ŷ�ó�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.NA_BZPLC                         IS '����ó������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.NA_TEAM_C                        IS '����ó��������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.PY_PLA_DT                        IS 'ȸ����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.CBAM                             IS '�ܻ�����'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDEXPT.PY_PLA_AM                        IS 'ȸ�������ݾ�'                           ;

GRANT SELECT ON NHVANINF.TB_DE_BCDEXPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_DE_BCDEXPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_DE_BCDEXPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_DE_BCDEXPT TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_DE_BCDPAY    �ܻ����ȸ������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_DE_BCDPAY ;

CREATE TABLE NHVANINF.TB_DE_BCDPAY (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    PY_DT                                                                 CHAR(8)           NOT NULL                  ,
    PY_NA_SLPNO                                                           VARCHAR2(9)       NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    PY_PRC_PLA_DT                                                         CHAR(8)           NOT NULL                  ,
    PY_PRC_PLA_NA_SLPNO                                                   VARCHAR2(9)       NOT NULL                  ,
    TR_DT                                                                 CHAR(8)           NOT NULL                  ,
    OCU_NA_SLPNO                                                          VARCHAR2(9)       NOT NULL                  ,
    SLP_DT                                                                CHAR(8)           NOT NULL                  ,
    PY_PLA_DT                                                             CHAR(8)           NOT NULL                  ,
    OCU_NA_TR_DSC                                                         VARCHAR2(4)       NOT NULL                  ,
    ROTS_CTR_DSC                                                          CHAR(1)           NOT NULL                  ,
    BZ_METH_DSC                                                           VARCHAR2(2)       NOT NULL                  ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    NA_ADJPL_C                                                            VARCHAR2(13)      NOT NULL                  ,
    ADJPL_NA_TEAM_C                                                       VARCHAR2(2)       NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    TRPL_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    ADJ_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    ADJ_BZPL_NA_TEAM_C                                                    VARCHAR2(2)       NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)       NOT NULL                  ,
    NA_BLB_DFC_DSC                                                        CHAR(1)           NOT NULL                  ,
    PY_RQT_DSC                                                            CHAR(1)           NOT NULL                  ,
    PY_PRN                                                                NUMBER(18,0)                                ,
    BYNG_DC_AM                                                            NUMBER(18,0)                                ,
    BYNG_DC_VAT                                                           NUMBER(18,0)                                ,
    OFS_AM                                                                NUMBER(18,0)                                ,
    SSDY_PY_AM                                                            NUMBER(18,0)                                ,
    DLAYPZ                                                                NUMBER(18,0)                                ,
    IVSAM                                                                 NUMBER(18,0)                                ,
    DLAY_INT_PY_AM                                                        NUMBER(18,0)                                ,
    DLAY_INT_RDU_AM                                                       NUMBER(18,0)                                ,
    PPY_DDS                                                               NUMBER(4,0)       NOT NULL                  ,
    PPY_ITR                                                               NUMBER(5,2)       NOT NULL                  ,
    DLAY_ITR                                                              NUMBER(5,2)       NOT NULL                  ,
    INT_RCKN_DT                                                           CHAR(8)                                     ,
    STL_ACNO                                                              VARCHAR2(17)                                ,
    BNK_C                                                                 VARCHAR2(2)                                 ,
    DPRNM                                                                 VARCHAR2(50)                                ,
    PATN_SLP_DT                                                           CHAR(8)                                     ,
    PATN_NA_SLPNO                                                         VARCHAR2(9)                                 ,
    PATN_SLP_PRC_STSC                                                     CHAR(1)                                     ,
    PY_STL_DSC                                                            VARCHAR2(2)                                 ,
    NA_CRC_CAN_DSC                                                        CHAR(1)           NOT NULL                  ,
    OSLIP_DT                                                              CHAR(8)                                     ,
    OGN_NA_SLPNO                                                          VARCHAR2(9)                                 ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    CONSTRAINT PK_TB_DE_BCDPAY PRIMARY KEY (NA_BZPLC,NA_TEAM_C,PY_DT,PY_NA_SLPNO,NA_SLPNO) 
)
PARTITION BY RANGE (PY_DT)
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

COMMENT ON TABLE  NHVANINF.TB_DE_BCDPAY                                   IS '�ܻ����ȸ������'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_BZPLC                          IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_TEAM_C                         IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_DT                             IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_NA_SLPNO                       IS '���ް���������ǥ��ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_SLPNO                          IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_PRC_PLA_DT                     IS '����ó����������'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_PRC_PLA_NA_SLPNO               IS '����ó����������������ǥ��ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.TR_DT                             IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.OCU_NA_SLPNO                      IS '�߻�����������ǥ��ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.SLP_DT                            IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_PLA_DT                         IS '���޿�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.OCU_NA_TR_DSC                     IS '�߻��������հŷ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.ROTS_CTR_DSC                      IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.BZ_METH_DSC                       IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.SPY_TPC                           IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_ADJPL_C                        IS '������������ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.ADJPL_NA_TEAM_C                   IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_TRPL_C                         IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.TRPL_NA_TEAM_C                    IS '�ŷ�ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.ADJ_NA_BZPLC                      IS '����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.ADJ_BZPL_NA_TEAM_C                IS '������������������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_TR_DSC                         IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_BLB_DFC_DSC                    IS '���������������ڱ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_RQT_DSC                        IS '�����Ƿڱ����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_PRN                            IS '���޿���'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.BYNG_DC_AM                        IS '�������αݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.BYNG_DC_VAT                       IS '�������κΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.OFS_AM                            IS '���ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.SSDY_PY_AM                        IS '��������ޱݾ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.DLAYPZ                            IS '��ü���'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.IVSAM                             IS '���ڱ�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.DLAY_INT_PY_AM                    IS '��ü�������ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.DLAY_INT_RDU_AM                   IS '��ü���ڰ���ݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PPY_DDS                           IS '�������ϼ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PPY_ITR                           IS '�����ޱݸ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.DLAY_ITR                          IS '��ü�ݸ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.INT_RCKN_DT                       IS '���ڱ������'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.STL_ACNO                          IS '�������¹�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.BNK_C                             IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.DPRNM                             IS '�����ָ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PATN_SLP_DT                       IS '�����ǥ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PATN_NA_SLPNO                     IS '������������ǥ��ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PATN_SLP_PRC_STSC                 IS '�����ǥó�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.PY_STL_DSC                        IS '���ް��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.NA_CRC_CAN_DSC                    IS '��������������ұ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.OSLIP_DT                          IS '����ǥ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.OGN_NA_SLPNO                      IS '������������ǥ��ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDPAY.RMK_CNTN                          IS '�����'                               ;

GRANT SELECT ON NHVANINF.TB_DE_BCDPAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_DE_BCDPAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_DE_BCDPAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_DE_BCDPAY TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_DE_BCDDAY    ���ܾ���
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_DE_BCDDAY ;

CREATE TABLE NHVANINF.TB_DE_BCDDAY (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    TR_DT                                                                 CHAR(8)           NOT NULL                  ,
    ROTS_CTR_DSC                                                          CHAR(1)           NOT NULL                  ,
    NA_BLB_DFC_DSC                                                        CHAR(1)           NOT NULL                  ,
    SNS_CNTN                                                              VARCHAR2(200)                               ,
    DB_AM                                                                 NUMBER(18,0)                                ,
    CR_AM                                                                 NUMBER(18,0)                                ,
    BAC                                                                   NUMBER(18,0)                                ,
    CONSTRAINT PK_TB_DE_BCDDAY PRIMARY KEY (NA_TRPL_C,NA_BZPLC,NA_TEAM_C,TR_DT,ROTS_CTR_DSC,NA_BLB_DFC_DSC) 
)
PARTITION BY RANGE (TR_DT)
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

COMMENT ON TABLE  NHVANINF.TB_DE_BCDDAY                                   IS '���ܾ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.NA_TRPL_C                         IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.NA_BZPLC                          IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.NA_TEAM_C                         IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.TR_DT                             IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.ROTS_CTR_DSC                      IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.NA_BLB_DFC_DSC                    IS '���������������ڱ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.SNS_CNTN                          IS '���䳻��'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.DB_AM                             IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.CR_AM                             IS '�뺯�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BCDDAY.BAC                               IS '�ܾ�'                                   ;

GRANT SELECT ON NHVANINF.TB_DE_BCDDAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_DE_BCDDAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_DE_BCDDAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_DE_BCDDAY TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_DE_BYNG_MON    ���ܾ���
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_DE_BYNG_MON ;

CREATE TABLE NHVANINF.TB_DE_BYNG_MON (  
    NA_ADJPL_C                                                            VARCHAR2(13)      NOT NULL                  ,
    ADJ_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    BAS_YM                                                                CHAR(6)           NOT NULL                  ,
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_BLB_DFC_DSC                                                        CHAR(1)           NOT NULL                  ,
    CROV_AM                                                               NUMBER(18,0)                                ,
    TXT_AM                                                                NUMBER(18,0)                                ,
    TXT_VAT                                                               NUMBER(18,0)                                ,
    EXTX_AM                                                               NUMBER(18,0)                                ,
    SMA_AM                                                                NUMBER(18,0)                                ,
    LIQ_SPY_AM                                                            NUMBER(18,0)                                ,
    LIQ_SPY_VAT                                                           NUMBER(18,0)                                ,
    VCBT_AM                                                               NUMBER(18,0)                                ,
    VCBX_AM                                                               NUMBER(18,0)                                ,
    STOG_AM                                                               NUMBER(18,0)                                ,
    CBAM                                                                  NUMBER(18,0)                                ,
    ETC_STL_AM                                                            NUMBER(18,0)                                ,
    PPY_AM                                                                NUMBER(18,0)                                ,
    BYNG_DC_AM                                                            NUMBER(18,0)                                ,
    MAD_AM                                                                NUMBER(18,0)                                ,
    PY_AM                                                                 NUMBER(18,0)                                ,
    PY_CAN_AM                                                             NUMBER(18,0)                                ,
    BAC                                                                   NUMBER(18,0)                                ,
    DLAY_INT_OCU_AM                                                       NUMBER(18,0)                                ,
    DLAY_INT_PY_AM                                                        NUMBER(18,0)                                ,
    MRG_AM                                                                NUMBER(18,0)                                ,
    MRG_DLAY_INT                                                          NUMBER(18,0)                                ,
    SPY_AM                                                                NUMBER(15,0)                                ,
    DB_CRC_AM                                                             NUMBER(18,0)                                ,
    CR_CRC_AM                                                             NUMBER(18,0)                                ,
    CONSTRAINT PK_TB_DE_BYNG_MON PRIMARY KEY (NA_ADJPL_C,ADJ_NA_BZPLC,BAS_YM,NA_BZPLC,NA_BLB_DFC_DSC) 
)
PARTITION BY RANGE (BAS_YM)
(
    PARTITION PT_R201001 VALUES LESS THAN ('201002')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201002 VALUES LESS THAN ('201003')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201003 VALUES LESS THAN ('201004')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201004 VALUES LESS THAN ('201005')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201005 VALUES LESS THAN ('201006')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201006 VALUES LESS THAN ('201007')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201007 VALUES LESS THAN ('201008')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201008 VALUES LESS THAN ('201009')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201009 VALUES LESS THAN ('201010')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201010 VALUES LESS THAN ('201011')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201011 VALUES LESS THAN ('201012')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201012 VALUES LESS THAN ('201101')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201101 VALUES LESS THAN ('201102')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201102 VALUES LESS THAN ('201103')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201103 VALUES LESS THAN ('201104')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201104 VALUES LESS THAN ('201105')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201105 VALUES LESS THAN ('201106')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201106 VALUES LESS THAN ('201107')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201107 VALUES LESS THAN ('201108')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201108 VALUES LESS THAN ('201109')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201109 VALUES LESS THAN ('201110')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201110 VALUES LESS THAN ('201111')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201111 VALUES LESS THAN ('201112')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201112 VALUES LESS THAN ('201201')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201201 VALUES LESS THAN ('201202')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201202 VALUES LESS THAN ('201203')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201203 VALUES LESS THAN ('201204')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201204 VALUES LESS THAN ('201205')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201205 VALUES LESS THAN ('201206')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201206 VALUES LESS THAN ('201207')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201207 VALUES LESS THAN ('201208')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201208 VALUES LESS THAN ('201209')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201209 VALUES LESS THAN ('201210')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201210 VALUES LESS THAN ('201211')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201211 VALUES LESS THAN ('201212')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201212 VALUES LESS THAN ('201301')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201301 VALUES LESS THAN ('201302')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201302 VALUES LESS THAN ('201303')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201303 VALUES LESS THAN ('201304')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201304 VALUES LESS THAN ('201305')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201305 VALUES LESS THAN ('201306')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201306 VALUES LESS THAN ('201307')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201307 VALUES LESS THAN ('201308')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201308 VALUES LESS THAN ('201309')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201309 VALUES LESS THAN ('201310')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201310 VALUES LESS THAN ('201311')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201311 VALUES LESS THAN ('201312')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201312 VALUES LESS THAN ('201401')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201401 VALUES LESS THAN ('201402')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('201403')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('201404')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('201405')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('201406')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('201407')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('201408')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('201409')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('201410')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('201411')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('201412')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('201501')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('201502')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('201503')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('201504')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('201505')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('201506')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('201507')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('201508')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('201509')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('201510')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('201511')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('201512')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('201601')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('201602')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('201603')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('201604')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('201605')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('201606')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('201607')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('201608')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('201609')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('201610')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('201611')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('201612')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('201701')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255
)
;

COMMENT ON TABLE  NHVANINF.TB_DE_BYNG_MON                                 IS '���ܾ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.NA_ADJPL_C                      IS '������������ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.ADJ_NA_BZPLC                    IS '����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.BAS_YM                          IS '���س��'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.NA_BZPLC                        IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.NA_BLB_DFC_DSC                  IS '���������������ڱ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.CROV_AM                         IS '�⵵�̿��ݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.TXT_AM                          IS '�������ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.TXT_VAT                         IS '�����ΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.EXTX_AM                         IS '�鼼���ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.SMA_AM                          IS '�������ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.LIQ_SPY_AM                      IS '�ַ����ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.LIQ_SPY_VAT                     IS '�ַ����޺ΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.VCBT_AM                         IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.VCBX_AM                         IS '�����ڱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.STOG_AM                         IS '����ǰ�ݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.CBAM                            IS '���Աݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.ETC_STL_AM                      IS '��Ÿ�����ݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.PPY_AM                          IS '�����ޱݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.BYNG_DC_AM                      IS '���������αݾ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.MAD_AM                          IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.PY_AM                           IS '���ޱݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.PY_CAN_AM                       IS '������ұݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.BAC                             IS '�ܻ���Ա��ܾ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.DLAY_INT_OCU_AM                 IS '��ü���ڹ߻��ݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.DLAY_INT_PY_AM                  IS '��ü�������ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.MRG_AM                          IS '�պ��ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.MRG_DLAY_INT                    IS '�պ���ü����'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.SPY_AM                          IS '���ޱݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.DB_CRC_AM                       IS '���������ݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_BYNG_MON.CR_CRC_AM                       IS '�뺯�����ݾ�'                           ;

GRANT SELECT ON NHVANINF.TB_DE_BYNG_MON TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_DE_BYNG_MON TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_DE_BYNG_MON TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_DE_BYNG_MON TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_DE_PREPAYDAY    �ϼ����ݿ���
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_DE_PREPAYDAY ;

CREATE TABLE NHVANINF.TB_DE_PREPAYDAY (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    ROTS_CTR_DSC                                                          CHAR(1)           NOT NULL                  ,
    TR_DT                                                                 CHAR(8)           NOT NULL                  ,
    NA_BLB_DFC_DSC                                                        CHAR(1)           NOT NULL                  ,
    REM                                                                   VARCHAR2(120)                               ,
    DB_AM                                                                 NUMBER(18,0)                                ,
    CR_AM                                                                 NUMBER(18,0)                                ,
    BAC                                                                   NUMBER(18,0)                                ,
    CONSTRAINT PK_TB_DE_PREPAYDAY PRIMARY KEY (NA_TRPL_C,NA_BZPLC,NA_TEAM_C,ROTS_CTR_DSC,TR_DT,NA_BLB_DFC_DSC) 
)
PARTITION BY RANGE (TR_DT)
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

COMMENT ON TABLE  NHVANINF.TB_DE_PREPAYDAY                                IS '�ϼ����ݿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.NA_TRPL_C                      IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.NA_BZPLC                       IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.NA_TEAM_C                      IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.ROTS_CTR_DSC                   IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.TR_DT                          IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.NA_BLB_DFC_DSC                 IS '���������������ڱ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.REM                            IS '���䳻��'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.DB_AM                          IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.CR_AM                          IS '�뺯�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_PREPAYDAY.BAC                            IS '�ܾ�'                                   ;

GRANT SELECT ON NHVANINF.TB_DE_PREPAYDAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_DE_PREPAYDAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_DE_PREPAYDAY TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_DE_PREPAYDAY TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_DE_ARCV_OCU    �̼��ݿ���
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_DE_ARCV_OCU ;

CREATE TABLE NHVANINF.TB_DE_ARCV_OCU (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_ADJPL_C                                                            VARCHAR2(13)      NOT NULL                  ,
    TR_DT                                                                 CHAR(8)           NOT NULL                  ,
    ACRV_SBJC                                                             VARCHAR2(2)       NOT NULL                  ,
    OCU_AM                                                                NUMBER(18,0)                                ,
    WDR_AM                                                                NUMBER(18,0)                                ,
    BAC                                                                   NUMBER(18,0)                                ,
    CONSTRAINT PK_TB_DE_ARCV_OCU PRIMARY KEY (NA_BZPLC,NA_ADJPL_C,TR_DT,ACRV_SBJC) 
)
PARTITION BY RANGE (TR_DT)
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

COMMENT ON TABLE  NHVANINF.TB_DE_ARCV_OCU                                 IS '�̼��ݿ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_ARCV_OCU.NA_BZPLC                        IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_ARCV_OCU.NA_ADJPL_C                      IS '������������ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_ARCV_OCU.TR_DT                           IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_ARCV_OCU.ACRV_SBJC                       IS '�̼��ݰ����ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_ARCV_OCU.OCU_AM                          IS '�����ݾ�(�߻��ݾ�)'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_ARCV_OCU.WDR_AM                          IS '�뺯�ݾ�(ȸ���ݾ�)'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_ARCV_OCU.BAC                             IS '�ܾ�'                                   ;

GRANT SELECT ON NHVANINF.TB_DE_ARCV_OCU TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_DE_ARCV_OCU TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_DE_ARCV_OCU TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_DE_ARCV_OCU TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_DE_CPN_UPLOAD    �������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_DE_CPN_UPLOAD ;

CREATE TABLE NHVANINF.TB_DE_CPN_UPLOAD (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    ADJ_YM                                                                CHAR(6)           NOT NULL                  ,
    ADJPL_NA_TRPL_C                                                       VARCHAR2(13)      NOT NULL                  ,
    OCU_DSC                                                               VARCHAR2(2)       NOT NULL                  ,
    APL_DT                                                                CHAR(8)           NOT NULL                  ,
    NA_CPN_C                                                              VARCHAR2(14)      NOT NULL                  ,
    CPN_PBC_NA_TRPL_C                                                     VARCHAR2(13)                                ,
    CPN_SC                                                                NUMBER(2,0)                                 ,
    CPNNM                                                                 VARCHAR2(100)                               ,
    CPN_UPR                                                               NUMBER(8,0)                                 ,
    CPN_QT                                                                NUMBER(10,0)                                ,
    CPN_AM                                                                NUMBER(15,0)                                ,
    CPN_FEE                                                               NUMBER(15,0)                                ,
    CPN_FEE_VAT                                                           NUMBER(15,0)                                ,
    DIV_CPN_FEE                                                           NUMBER(15,0)                                ,
    DIV_CPN_FEE_VAT                                                       NUMBER(15,0)                                ,
    ED_MRK_YN                                                             CHAR(1)                                     ,
    DELETE_YN                                                             CHAR(1)           DEFAULT 'N' NOT NULL       ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRG_DTM                                                              DATE                                        ,
    PRC_YN                                                                CHAR(1)                                     ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_DE_CPN_UPLOAD PRIMARY KEY (NA_BZPLC,ADJ_YM,ADJPL_NA_TRPL_C,OCU_DSC,APL_DT,NA_CPN_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_DE_CPN_UPLOAD                               IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.NA_BZPLC                      IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.ADJ_YM                        IS '������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.ADJPL_NA_TRPL_C               IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.OCU_DSC                       IS '�߻������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.APL_DT                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.NA_CPN_C                      IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPN_PBC_NA_TRPL_C             IS '��������������հŷ�ó�ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPN_SC                        IS '����ȸ��'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPNNM                         IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPN_UPR                       IS '�����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPN_QT                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPN_AM                        IS '�����ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPN_FEE                       IS '����������'                             ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.CPN_FEE_VAT                   IS '����������ΰ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.DIV_CPN_FEE                   IS '�л�����������'                         ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.DIV_CPN_FEE_VAT               IS '�л�����������ΰ���'                   ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.ED_MRK_YN                     IS '����ǥ�ÿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.DELETE_YN                     IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.FSRGMN_ENO                    IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.FSRG_DTM                      IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.PRC_YN                        IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.RSP_C_CNTN                    IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_DE_CPN_UPLOAD.EDI_IF_ID                     IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_DE_CPN_UPLOAD TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_DE_CPN_UPLOAD TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_DE_CPN_UPLOAD TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_DE_CPN_UPLOAD TO NHVANWAS WITH GRANT OPTION ; 


