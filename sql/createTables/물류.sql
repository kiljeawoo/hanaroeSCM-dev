--������������������������������������������������������������
--��NHVANINF.TB_LG_STPNLT    ��ǰ�г�Ƽ����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_STPNLT ;

CREATE TABLE NHVANINF.TB_LG_STPNLT (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    STR_PLA_DT                                                            CHAR(8)           NOT NULL                  ,
    SLPNO                                                                 VARCHAR2(5)       NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    ODR_QT                                                                NUMBER(10,3)                                ,
    ODR_UNT_QT                                                            NUMBER(10,3)                                ,
    ODR_SELPR                                                             NUMBER(18)                                  ,
    STR_CPL_QT                                                            NUMBER(10,3)                                ,
    STR_UNT_QT                                                            NUMBER(10,3)                                ,
    SELPR                                                                 NUMBER(18)                                  ,
    NSTR_QT                                                               NUMBER(10,3)                                ,
    NSTR_UNT_QT                                                           NUMBER(10,3)                                ,
    NSTR_PR                                                               NUMBER(18)                                  ,
    IMPSRT                                                                NUMBER(10,3)                                ,
    IMPS_AM                                                               NUMBER(18)                                  ,
    STR_STSC                                                              CHAR(1)                                     ,
    ODR_FBID_RSNC                                                         CHAR(2)                                     ,
    UN_STR_RSNC                                                           VARCHAR2(50)                                ,
    ROTS_SPY_PSB_DT                                                       CHAR(8)                                     ,
    BUYER_NM                                                              VARCHAR2(60)                                ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DFN_PRG_STSC                                                          VARCHAR2(2)                                 ,
    CNF_YN                                                                CHAR(1)                                     ,
    CNF_DTM                                                               DATE                                        ,
    CNF_CMENO                                                             VARCHAR2(9)                                 ,
    PRC_YN                                                                CHAR(1)           DEFAULT 'N' NOT NULL       ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_LG_STPNLT PRIMARY KEY (NA_BZPLC,STR_PLA_DT,SLPNO,NA_TRPL_C,NA_WRS_C,NA_TEAM_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_STPNLT                                   IS '��ǰ�г�Ƽ����'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_BZPLC                          IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_PLA_DT                        IS '�԰�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.SLPNO                             IS '���԰��Ϸù�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_TRPL_C                         IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_WRS_C                          IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_TEAM_C                         IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_QT                            IS '���ּ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_UNT_QT                        IS '����ǥ�ü���'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_SELPR                         IS '���ְ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_CPL_QT                        IS '�԰����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_UNT_QT                        IS '�԰�ǥ�ü���'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.SELPR                             IS '�԰�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NSTR_QT                           IS '���԰����'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NSTR_UNT_QT                       IS '���԰�ǥ�ü���'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NSTR_PR                           IS '���԰�ݾ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.IMPSRT                            IS '�ΰ���'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.IMPS_AM                           IS '�ΰ��ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_STSC                          IS '�԰�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_FBID_RSNC                     IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.UN_STR_RSNC                       IS '���԰����'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ROTS_SPY_PSB_DT                   IS '���ް�����'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.BUYER_NM                          IS '���̾��'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.FSRG_DTM                          IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.FSRGMN_ENO                        IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.LSCHG_DTM                         IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.LS_CMENO                          IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.DEL_DTM                           IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.DLMN_ENO                          IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.DFN_PRG_STSC                      IS 'Ȯ�������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.CNF_YN                            IS '���޾�üȮ�ο���'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.CNF_DTM                           IS 'Ȯ���Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.CNF_CMENO                         IS 'Ȯ���ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.PRC_YN                            IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.RSP_C_CNTN                        IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.EDI_IF_ID                         IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 

--������������������������������������������������������������
--��NHVANINF.TB_LG_OUT_M    ������������� �⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_OUT_M ;

CREATE TABLE NHVANINF.TB_LG_OUT_M (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL
                 ,
    DLR_PHD_IDVD_NO                                                       VARCHAR2(13)      NOT NULL
                 ,
    ADJ_NA_BZPLC                                                          VARCHAR2(13)                                ,
    ADJ_NA_TEAM_C                                                         VARCHAR2(2)                                 ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    TRPL_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    ADJPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    ADJPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    ACTL_SLPL_NA_TRPL_C                                                   VARCHAR2(13)                                ,
    DVY_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    DVYAA_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    TRP_NA_TRPL_C                                                         VARCHAR2(13)                                ,
    PHD_RVO_DT                                                            CHAR(8)                                     ,
    PHD_DVY_RQR_DT                                                        CHAR(8)                                     ,
    PHD_DLR_CPL_DT                                                        CHAR(8)                                     ,
    PHD_DLR_DSC                                                           VARCHAR2(2)                                 ,
    PRGR_C                                                                VARCHAR2(4)                                 ,
    PHD_RLYBR_NA_TRPL_C                                                   VARCHAR2(13)                                ,
    NA_CRC_CAN_DSC                                                        CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_YN                                                                CHAR(1)                                     ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    PHD_SLP_DSC                                                           CHAR(1)                                     ,
    GRS_SOJU_YN                                                           CHAR(1)                                     ,
    ACTL_SPYPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    VHCNO                                                                 VARCHAR2(20)                                ,
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
    CONSTRAINT PK_TB_LG_OUT_M PRIMARY KEY (PHD_NA_BZPLC,DLR_PHD_IDVD_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_OUT_M                                    IS '������������� �⺻'                  ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_NA_BZPLC                       IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DLR_PHD_IDVD_NO                    IS '�����������ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJ_NA_BZPLC                       IS '����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJ_NA_TEAM_C                      IS '��������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.NA_TRPL_C                          IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.TRPL_NA_TEAM_C                     IS '�ŷ�ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJPL_NA_TRPL_C                    IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJPL_NA_TEAM_C                    IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ACTL_SLPL_NA_TRPL_C                IS '��������ó�������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DVY_NA_TRPL_C                      IS '��۰������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DVYAA_NA_TEAM_C                    IS '����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.TRP_NA_TRPL_C                      IS '��۰������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_RVO_DT                         IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_DVY_RQR_DT                     IS '������ۿ�û����'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_DLR_CPL_DT                     IS '�������Ϸ�����'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_DLR_DSC                        IS '����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PRGR_C                             IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_RLYBR_NA_TRPL_C                IS '�����߰�Ұ������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.NA_CRC_CAN_DSC                     IS '��������������ұ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FSRG_DTM                           IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FSRGMN_ENO                         IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LSCHG_DTM                          IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LS_CMENO                           IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DEL_YN                             IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DEL_DTM                            IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DLMN_ENO                           IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_SLP_DSC                        IS '������ǥ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.GRS_SOJU_YN                        IS '������ֿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ACTL_SPYPL_NA_TRPL_C               IS '��������ó�������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.VHCNO                              IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.INQ_CN                             IS '��ȸ�Ǽ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LINE_CN                            IS '���ΰǼ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FS_RMS_DT                          IS '���� ���ʼ�������'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FS_RMS_HR                          IS '���� ���ʼ��Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LS_RMS_DT                          IS '���� ������������'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LS_RMS_HR                          IS '���� �������Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.EDIRG_DTM                          IS 'I/F�����Ͻ�'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ACK_RMS_YN                         IS 'ACKDOC ���ſ���'                        ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.RMS_SPYPL_C                        IS '�������ž�ü'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.MB_ID                              IS 'ȸ�����̵�'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.APPLICATION_ID                     IS 'XTRUSó��Ű'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DOC_NAME                           IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DOC_RMS_LOC_DSC                    IS 'WEB/EDI'                                ;

GRANT SELECT ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_LG_OUT_D    ������������� ��
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_OUT_D ;

CREATE TABLE NHVANINF.TB_LG_OUT_D (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL
                 ,
    DLR_PHD_IDVD_NO                                                       VARCHAR2(13)      NOT NULL
                 ,
    DLR_PHD_SQNO                                                          NUMBER(10)        NOT NULL
                 ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    PHD_BAS_UNT_IDVDC                                                     VARCHAR2(30)                                ,
    WRS_MRK_PHD_UNT_C                                                     VARCHAR2(10)                                ,
    INPD_QT                                                               NUMBER(10)                                  ,
    PHD_RVO_QT                                                            NUMBER(10)                                  ,
    PHD_DLR_PLA_QT                                                        NUMBER(10)                                  ,
    PHD_DLR_AJ_QT                                                         NUMBER(10)                                  ,
    PHD_WRS_ALC_QT                                                        NUMBER(10)                                  ,
    PHD_ALC_QT                                                            NUMBER(10)                                  ,
    PHD_SPLY_QT                                                           NUMBER(10)                                  ,
    PHD_PCK_QT                                                            NUMBER(10)                                  ,
    PHD_LCAR_QT                                                           NUMBER(10)                                  ,
    PHD_DLR_CPL_QT                                                        NUMBER(10)                                  ,
    PHD_DLR_CAN_QT                                                        NUMBER(10)                                  ,
    PHD_CSMT_DLR_QT                                                       NUMBER(10)                                  ,
    PHD_SNBK_QT                                                           NUMBER(10)                                  ,
    CUS_CNR_YN                                                            CHAR(1)                                     ,
    CUS_CNR_QT                                                            NUMBER(10)                                  ,
    CUS_CNR_DT                                                            CHAR(8)                                     ,
    PHD_CNR_YN                                                            CHAR(1)                                     ,
    PHD_CNR_QT                                                            NUMBER(10)                                  ,
    PHD_CNR_DT                                                            CHAR(8)                                     ,
    PHD_PCS                                                               NUMBER(17,2)                                ,
    PHD_SELPR                                                             NUMBER(17,2)                                ,
    TXT_DSC                                                               CHAR(1)                                     ,
    VATRT                                                                 NUMBER(5,2)                                 ,
    VCBT_VCBX_TPC                                                         CHAR(1)                                     ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBT_UPR                                                              NUMBER(17,2)                                ,
    VCBX_NA_WRS_C                                                         VARCHAR2(25)                                ,
    VCBX_UPR                                                              NUMBER(17,2)                                ,
    PHD_FCLT_C                                                            VARCHAR2(2)                                 ,
    WRS_GRD_DSC                                                           VARCHAR2(2)                                 ,
    DUM_LIMT_YN                                                           CHAR(1)                                     ,
    NA_TR_DSC                                                             VARCHAR2(4)                                 ,
    DUM_NA_CRC_CAN_DSC                                                    CHAR(1)                                     ,
    DUM_IN_CNR_QT                                                         NUMBER(10)                                  ,
    DUM_MAE_CNR_QT                                                        NUMBER(10)                                  ,
    ACTL_SPYPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    VCBT_QT                                                               NUMBER(10)                                  ,
    PHD_DLR_PRG_STSC													  VARCHAR2(2)  DEFAULT '01'                   ,     
    CONSTRAINT PK_TB_LG_OUT_D PRIMARY KEY (PHD_NA_BZPLC,DLR_PHD_IDVD_NO,DLR_PHD_SQNO) 
)
PARTITION BY RANGE (DLR_PHD_IDVD_NO)
(
    PARTITION PT_R201201 VALUES LESS THAN ('2012020100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201202 VALUES LESS THAN ('2012030100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201203 VALUES LESS THAN ('2012040100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201204 VALUES LESS THAN ('2012050100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201205 VALUES LESS THAN ('2012060100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201206 VALUES LESS THAN ('2012070100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201207 VALUES LESS THAN ('2012080100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201208 VALUES LESS THAN ('2012090100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201209 VALUES LESS THAN ('2012100100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201210 VALUES LESS THAN ('2012110100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201211 VALUES LESS THAN ('2012120100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201212 VALUES LESS THAN ('2013010100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201301 VALUES LESS THAN ('2013020100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201302 VALUES LESS THAN ('2013030100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201303 VALUES LESS THAN ('2013040100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201304 VALUES LESS THAN ('2013050100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201305 VALUES LESS THAN ('2013060100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201306 VALUES LESS THAN ('2013070100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201307 VALUES LESS THAN ('2013080100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201308 VALUES LESS THAN ('2013090100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201309 VALUES LESS THAN ('2013100100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201310 VALUES LESS THAN ('2013110100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201311 VALUES LESS THAN ('2013120100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201312 VALUES LESS THAN ('2014010100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201401 VALUES LESS THAN ('2014020100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201402 VALUES LESS THAN ('2014030100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201403 VALUES LESS THAN ('2014040100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201404 VALUES LESS THAN ('2014050100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201405 VALUES LESS THAN ('2014060100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201406 VALUES LESS THAN ('2014070100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201407 VALUES LESS THAN ('2014080100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201408 VALUES LESS THAN ('2014090100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201409 VALUES LESS THAN ('2014100100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201410 VALUES LESS THAN ('2014110100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201411 VALUES LESS THAN ('2014120100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201412 VALUES LESS THAN ('2015010100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201501 VALUES LESS THAN ('2015020100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201502 VALUES LESS THAN ('2015030100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201503 VALUES LESS THAN ('2015040100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201504 VALUES LESS THAN ('2015050100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201505 VALUES LESS THAN ('2015060100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201506 VALUES LESS THAN ('2015070100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201507 VALUES LESS THAN ('2015080100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201508 VALUES LESS THAN ('2015090100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201509 VALUES LESS THAN ('2015100100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201510 VALUES LESS THAN ('2015110100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201511 VALUES LESS THAN ('2015120100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201512 VALUES LESS THAN ('2016010100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201601 VALUES LESS THAN ('2016020100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201602 VALUES LESS THAN ('2016030100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201603 VALUES LESS THAN ('2016040100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201604 VALUES LESS THAN ('2016050100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201605 VALUES LESS THAN ('2016060100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201606 VALUES LESS THAN ('2016070100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201607 VALUES LESS THAN ('2016080100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201608 VALUES LESS THAN ('2016090100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201609 VALUES LESS THAN ('2016100100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201610 VALUES LESS THAN ('2016110100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201611 VALUES LESS THAN ('2016120100000')
        LOGGING
        TABLESPACE TS_PD_NHVANINF
        PCTFREE 10
        INITRANS 1
        MAXTRANS 255,
    PARTITION PT_R201612 VALUES LESS THAN ('2017010100000')
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

COMMENT ON TABLE  NHVANINF.TB_LG_OUT_D                                    IS '������������� ��'                  ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_NA_BZPLC                       IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DLR_PHD_IDVD_NO                    IS '�����������ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DLR_PHD_SQNO                       IS '������Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.NA_WRS_C                           IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_BAS_UNT_IDVDC                  IS '�������ش��������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.WRS_MRK_PHD_UNT_C                  IS '��ǰǥ�ù��������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.INPD_QT                            IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_RVO_QT                         IS '�������ּ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_PLA_QT                     IS '�������������'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_AJ_QT                      IS '���������������'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_WRS_ALC_QT                     IS '������ǰ�Ҵ����'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_ALC_QT                         IS '�����Ҵ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_SPLY_QT                        IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_PCK_QT                         IS '������ŷ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_LCAR_QT                        IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_CPL_QT                     IS '�������Ϸ����'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_CAN_QT                     IS '���������Ҽ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CSMT_DLR_QT                    IS '��������������'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_SNBK_QT                        IS '����ȸ�ۼ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.CUS_CNR_YN                         IS '���˼�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.CUS_CNR_QT                         IS '���˼�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.CUS_CNR_DT                         IS '���˼�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CNR_YN                         IS '�����˼�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CNR_QT                         IS '�����˼�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CNR_DT                         IS '�����˼�����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_PCS                            IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_SELPR                          IS '�����ǸŰ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.TXT_DSC                            IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VATRT                              IS '�ΰ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_VCBX_TPC                      IS '���������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_NA_WRS_C                      IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_UPR                           IS '�����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBX_NA_WRS_C                      IS '�����ڰ������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBX_UPR                           IS '�����ڴܰ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_FCLT_C                         IS '��������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.WRS_GRD_DSC                        IS '��ǰ��ޱ����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_LIMT_YN                        IS '����������'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.NA_TR_DSC                          IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_NA_CRC_CAN_DSC                 IS '����������������ұ����ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_IN_CNR_QT                      IS '���԰����'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_MAE_CNR_QT                     IS '�����Լ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.ACTL_SPYPL_NA_TRPL_C               IS '��������ó�������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_QT                            IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_PRG_STSC 				  IS'���������������ڵ�'  ;

GRANT SELECT ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 



--������������������������������������������������������������
--��NHVANINF.TB_LG_WA_OH_ICT    ��������ݳ���
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_WA_OH_ICT ;

CREATE TABLE NHVANINF.TB_LG_WA_OH_ICT (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    PHD_SLP_DT                                                            CHAR(8)           NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)       NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    NA_BLB_DFC_DSC                                                        CHAR(1)           NOT NULL                  ,
    SLP_SQNO                                                              NUMBER(10,0)      NOT NULL                  ,
    TR_DT                                                                 CHAR(8)           NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)                                 ,
    NA_WRS_C                                                              VARCHAR2(25)                                ,
    WRS_SBJC                                                              VARCHAR2(3)                                 ,
    NA_LLED_C                                                             VARCHAR2(3)                                 ,
    NA_MLED_C                                                             VARCHAR2(3)                                 ,
    SLPL_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    SLPL_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    BUYPL_NA_TRPL_C                                                       VARCHAR2(13)                                ,
    BUYPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    NA_ADJPL_C                                                            VARCHAR2(13)                                ,
    ADJPL_NA_TEAM_C                                                       VARCHAR2(2)                                 ,
    NAAC_DSC                                                              CHAR(1)                                     ,
    PY_PLA_DT                                                             CHAR(8)                                     ,
    NA_WRS_LCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_MCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_SCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_DTCF_C                                                         VARCHAR2(3)                                 ,
    OSLIP_DT                                                              CHAR(8)                                     ,
    OGN_NA_SLPNO                                                          VARCHAR2(9)                                 ,
    SPY_QT                                                                NUMBER(15,3)                                ,
    SPY_AM                                                                NUMBER(18,3)                                ,
    VAT                                                                   NUMBER(18,3)                                ,
    AFF_SSDY                                                              NUMBER(18,3)                                ,
    PHD_AFF_FEERT                                                         NUMBER(5,2)                                 ,
    RMK_CNTN                                                              VARCHAR2(9)                                 ,
    PHD_SEL_AM                                                            NUMBER(18,3)                                ,
    TMS_YN                                                                CHAR(1)                                     ,
    NA_CRC_CAN_DSC                                                        CHAR(1)                                     ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_LG_WA_OH_ICT PRIMARY KEY (PHD_NA_BZPLC,PHD_SLP_DT,NA_TR_DSC,NA_SLPNO,NA_BLB_DFC_DSC,SLP_SQNO,TR_DT) 
)
PARTITION BY RANGE (PHD_SLP_DT)
(
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

COMMENT ON TABLE  NHVANINF.TB_LG_WA_OH_ICT                                IS '��������ݳ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_NA_BZPLC                   IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_SLP_DT                     IS '������ǥ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_TR_DSC                      IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_SLPNO                       IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_BLB_DFC_DSC                 IS '���������������ڱ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SLP_SQNO                       IS '��ǥ�Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.TR_DT                          IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_TEAM_C                      IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_C                       IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.WRS_SBJC                       IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_LLED_C                      IS '�������մ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_MLED_C                      IS '���������߿����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SLPL_NA_TRPL_C                 IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SLPL_NA_TEAM_C                 IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.BUYPL_NA_TRPL_C                IS '����ó�������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.BUYPL_NA_TEAM_C                IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_ADJPL_C                     IS '������������ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.ADJPL_NA_TEAM_C                IS '����ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NAAC_DSC                       IS '�߾�ȸ���ձ����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PY_PLA_DT                      IS '���޿�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_LCLC                    IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_MCLC                    IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_SCLC                    IS '�������ջ�ǰ�Һз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_DTCF_C                  IS '�������ջ�ǰ���з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.OSLIP_DT                       IS '����ǥ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.OGN_NA_SLPNO                   IS '������������ǥ��ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SPY_QT                         IS '���޼���'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SPY_AM                         IS '���ޱݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.VAT                            IS '�ΰ���'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.AFF_SSDY                       IS '���������'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_AFF_FEERT                  IS '�������ļ�������'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.RMK_CNTN                       IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_SEL_AM                     IS '�����Ǹűݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.TMS_YN                         IS '���ۿ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_CRC_CAN_DSC                 IS '��������������ұ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.LSCHG_DTM                      IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.LS_CMENO                       IS '���������ڰ��ι�ȣ'                     ;

GRANT SELECT ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 

--������������������������������������������������������������
--��NHVANINF.TB_LG_ETCCAASET_M    ��Ÿ�����ڻ�ȸ�������⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_ETCCAASET_M ;

CREATE TABLE NHVANINF.TB_LG_ETCCAASET_M (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    SLP_DT                                                                CHAR(8)           NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)                                 ,
    NA_CRC_CAN_DSC                                                        CHAR(1)                                     ,
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    ETC_CA_ASET_RTU_QT                                                    NUMBER(10,0)                                ,
    RTU_AM                                                                NUMBER(18,0)                                ,
    RTU_FEE                                                               NUMBER(18,0)                                ,
    RTU_FEE_VAT                                                           NUMBER(18,0)                                ,
    OSLIP_DT                                                              CHAR(8)                                     ,
    OSLIP_NA_SLPNO                                                        VARCHAR2(9)                                 ,
    WDR_PLA_DT                                                            CHAR(8)                                     ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    VHC_TYPE                                                              VARCHAR2(20)                                ,
    VHC_NO                                                                VARCHAR2(6)                                 ,
    ACG_NM                                                                VARCHAR2(50)                                ,
    DEL_YN                                                                CHAR(1)           DEFAULT '0' NOT NULL      ,
    CONSTRAINT PK_TB_LG_ETCCAASET_M PRIMARY KEY (NA_BZPLC,NA_TEAM_C,SLP_DT,NA_SLPNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_ETCCAASET_M                              IS '��Ÿ�����ڻ�ȸ�������⺻'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_TEAM_C                    IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.SLP_DT                       IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_SLPNO                     IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_TR_DSC                    IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_CRC_CAN_DSC               IS '��������������ұ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_TRPL_C                    IS '�ŷ�ó�ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.ETC_CA_ASET_RTU_QT           IS '��Ÿ�����ڻ��ȯ����'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RTU_AM                       IS '��ȯ�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RTU_FEE                      IS '��ȯ������'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RTU_FEE_VAT                  IS '��ȯ������ΰ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.OSLIP_DT                     IS '����ǥ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.OSLIP_NA_SLPNO               IS '����ǥ����������ǥ��ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.WDR_PLA_DT                   IS 'ȸ��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RMK_CNTN                     IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.VHC_TYPE                     IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.VHC_NO                       IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.ACG_NM                       IS 'ȸ���'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.DEL_YN                       IS '��������(1,0)'                          ;


GRANT SELECT ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_LG_ETCCAASET_D    ��Ÿ�����ڻ�ȸ��������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_ETCCAASET_D ;

CREATE TABLE NHVANINF.TB_LG_ETCCAASET_D (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    SLP_DT                                                                VARCHAR2(8)       NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    VCBT_NA_WRS_C                                                         VARCHAR2(25)      NOT NULL                  ,
    VCBT_RTU_QT                                                           NUMBER(15,2)                                ,
    VCBT_UPR                                                              NUMBER(17,2)                                ,
    RTU_AM                                                                NUMBER(18,0)                                ,
    RTU_FEE                                                               NUMBER(18,0)                                ,
    RTU_FEE_VAT                                                           NUMBER(18,0)                                ,
    DEL_YN                                                                CHAR(1)           DEFAULT '0' NOT NULL     ,
    CONSTRAINT PK_TB_LG_ETCCAASET_D PRIMARY KEY (NA_BZPLC,NA_TEAM_C,SLP_DT,NA_SLPNO,VCBT_NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_ETCCAASET_D                              IS '��Ÿ�����ڻ�ȸ��������'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.NA_TEAM_C                    IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.SLP_DT                       IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.NA_SLPNO                     IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.VCBT_NA_WRS_C                IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.VCBT_RTU_QT                  IS '������ȯ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.VCBT_UPR                     IS '�����ܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.RTU_AM                       IS '��ȯ�ݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.RTU_FEE                      IS '��ȯ������'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.RTU_FEE_VAT                  IS '��ȯ������ΰ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.DEL_YN                       IS '��������(1,0)'                          ;


GRANT SELECT ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 



--������������������������������������������������������������
--��NHVANINF.TB_LG_VHCBKG_M    �԰���⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_VHCBKG_M ;

CREATE TABLE NHVANINF.TB_LG_VHCBKG_M (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    VHC_BKG_PHD_IDVD_NO                                                   VARCHAR2(13)      NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    VHC_BKG_DT                                                            CHAR(8)           NOT NULL                  ,
    VHCNO                                                                 VARCHAR2(20)                                ,
    PHD_DVY_CAFFNM                                                        VARCHAR2(20)                                ,
    TELNO                                                                 VARCHAR2(14)                                ,
    VHC_ENTRUK_BKG_TMI                                                    CHAR(4)                                     ,
    PHD_PAS_SRTR_BKG_TMI                                                  CHAR(4)                                     ,
    PHD_PAS_BLK_BKG_TMI                                                   CHAR(4)                                     ,
    STPL_CSTD_ELT_TAG_BKG_TMI                                             CHAR(4)                                     ,
    STPL_CSTD_GEN_BKG_TMI                                                 CHAR(4)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    CRUD_DSC                                                              CHAR(1)                                     ,
    PRC_YN                                                                CHAR(1)           DEFAULT 'N' NOT NULL      ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_LG_VHCBKG_M PRIMARY KEY (PHD_NA_BZPLC,VHC_BKG_PHD_IDVD_NO,NA_TRPL_C,VHC_BKG_DT) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_VHCBKG_M                                 IS '�԰���⺻'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_NA_BZPLC                    IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHC_BKG_PHD_IDVD_NO             IS '�������๰��������ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHC_BKG_DT                      IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHCNO                           IS '������ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_DVY_CAFFNM                  IS '������۱���'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.TELNO                           IS '��ȭ��ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHC_ENTRUK_BKG_TMI              IS '������������ú�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_PAS_SRTR_BKG_TMI            IS '����������Ϳ���ú�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_PAS_BLK_BKG_TMI             IS '���������ũ����ú�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.STPL_CSTD_ELT_TAG_BKG_TMI       IS '����������±׿���ú�'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.STPL_CSTD_GEN_BKG_TMI           IS '������Ϲݿ���ú�'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.FSRG_DTM                        IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.FSRGMN_ENO                      IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.LSCHG_DTM                       IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.LS_CMENO                        IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.CRUD_DSC                        IS 'CUDó������'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PRC_YN                          IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.RSP_C_CNTN                      IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.EDI_IF_ID                       IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_LG_VHCBKG_D    �԰����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_VHCBKG_D ;

CREATE TABLE NHVANINF.TB_LG_VHCBKG_D (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    VHC_BKG_PHD_IDVD_NO                                                   VARCHAR2(13)      NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    VHC_BKG_DT                                                            CHAR(8)           NOT NULL                  ,
    VHC_BKG_PHD_SQNO                                                      NUMBER(10,0)      NOT NULL                  ,
    STR_PHD_IDVD_NO                                                       VARCHAR2(13)                                ,
    CRUD_DSC                                                              CHAR(1)                                     ,
    CONSTRAINT PK_TB_LG_VHCBKG_D PRIMARY KEY (PHD_NA_BZPLC,VHC_BKG_PHD_IDVD_NO,NA_TRPL_C,VHC_BKG_DT,VHC_BKG_PHD_SQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_VHCBKG_D                                 IS '�԰����'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.PHD_NA_BZPLC                    IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.VHC_BKG_PHD_IDVD_NO             IS '�������๰��������ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.VHC_BKG_DT                      IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.VHC_BKG_PHD_SQNO                IS '�������๰���Ϸù�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.STR_PHD_IDVD_NO                 IS '�԰���������ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.CRUD_DSC                        IS 'CUDó������'                            ;

GRANT SELECT ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_LG_DOCK_CODE    ��������DOCK�ڵ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_DOCK_CODE ;

CREATE TABLE NHVANINF.TB_LG_DOCK_CODE (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    NA_DOCK_C                                                             VARCHAR2(13)      NOT NULL                  ,
    PHDCT_DCKNM                                                           VARCHAR2(60)      NOT NULL                  ,
    DOCK_UZ_DSC                                                           CHAR(1)           NOT NULL                  ,
    DOCK_ASG_DSC                                                          CHAR(1)                                     ,
    DOCK_STSC                                                             CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_YN                                                                CHAR(1)                                     ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    ST_SUIT_NA_LOCA_C                                                     VARCHAR2(16)                                ,
    ED_SUIT_NA_LOCA_C                                                     VARCHAR2(16)                                ,
    CONSTRAINT PK_TB_LG_DOCK_CODE PRIMARY KEY (PHD_NA_BZPLC,NA_DOCK_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_DOCK_CODE                                IS '��������DOCK�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.PHD_NA_BZPLC                   IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.NA_DOCK_C                      IS '��������DOCK�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.PHDCT_DCKNM                    IS '��������DOCK��'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DOCK_UZ_DSC                    IS 'DOCK�뵵�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DOCK_ASG_DSC                   IS 'DOCK���������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DOCK_STSC                      IS 'DOCK�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.FSRG_DTM                       IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.FSRGMN_ENO                     IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.LSCHG_DTM                      IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.LS_CMENO                       IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DEL_YN                         IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DEL_DTM                        IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DLMN_ENO                       IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.ST_SUIT_NA_LOCA_C              IS '���۽�Ʈ�������շ����̼��ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.ED_SUIT_NA_LOCA_C              IS '���ὴƮ�������շ����̼��ڵ�'           ;

GRANT SELECT ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_LG_SPYPLVHC    ����ó��������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_SPYPLVHC ;

CREATE TABLE NHVANINF.TB_LG_SPYPLVHC (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    SPYPL_VHC_PHD_IDVD_NO                                                 VARCHAR2(13)      NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    VHCNO                                                                 VARCHAR2(20)                                ,
    PHD_DVY_CAFFNM                                                        VARCHAR2(20)                                ,
    TELNO                                                                 VARCHAR2(14)                                ,
    UYN                                                                   CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    DEL_YN                                                                CHAR(1)                                     ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_LG_SPYPLVHC PRIMARY KEY (PHD_NA_BZPLC,SPYPL_VHC_PHD_IDVD_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_SPYPLVHC                                 IS '����ó��������'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.PHD_NA_BZPLC                    IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.SPYPL_VHC_PHD_IDVD_NO           IS '����ó��������������ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.VHCNO                           IS '������ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.PHD_DVY_CAFFNM                  IS '������۱���'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.TELNO                           IS '��ȭ��ȣ'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.UYN                             IS '��뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.FSRG_DTM                        IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.FSRGMN_ENO                      IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.LSCHG_DTM                       IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.LS_CMENO                        IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.DEL_YN                          IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.DEL_DTM                         IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.DLMN_ENO                        IS '�����ڰ��ι�ȣ'                         ;

GRANT SELECT ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_LG_DV_SILRPT    ��Ʈ��������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_DV_SILRPT ;

CREATE TABLE NHVANINF.TB_LG_DV_SILRPT (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    NA_SPYPL_C                                                            VARCHAR2(13)      NOT NULL                  ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(13)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(13)      NOT NULL                  ,
    DVY_WRS_UPR                                                           NUMBER(18,2)                                ,
    DVY_PLA_QT                                                            NUMBER(15,2)                                ,
    DLR_DT                                                                CHAR(8)                                     ,
    FILP_DT                                                               CHAR(8)                                     ,
    PHD_DLR_DSC                                                           CHAR(1)                                     ,
    TR_DSC                                                                CHAR(1)                                     ,
    DVYAA_NA_TRPL_C                                                       VARCHAR2(13)                                ,
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
    CONSTRAINT PK_TB_LG_DV_SILRPT PRIMARY KEY (PHD_NA_BZPLC,NA_SPYPL_C,NA_DVY_PLASH_SLPNO,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_DV_SILRPT                                IS '��Ʈ��������'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.PHD_NA_BZPLC                   IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.NA_SPYPL_C                     IS '���޾�ü�ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.NA_DVY_PLASH_SLPNO             IS '��ۿ�������ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.NA_WRS_C                       IS '��ǰ�ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DVY_WRS_UPR                    IS '��ۻ�ǰ�ܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DVY_PLA_QT                     IS '��ۿ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DLR_DT                         IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.FILP_DT                        IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.PHD_DLR_DSC                    IS '�ֹ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.TR_DSC                         IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DVYAA_NA_TRPL_C                IS '������ŷ�ó�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.INQ_CN                         IS '��ȸ�Ǽ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.LINE_CN                        IS '���ΰǼ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.FS_RMS_DT                      IS '���� ���ʼ�������'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.FS_RMS_HR                      IS '���� ���ʼ��Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.LS_RMS_DT                      IS '���� ������������'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.LS_RMS_HR                      IS '���� �������Žð�'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.EDIRG_DTM                      IS 'I/F�����Ͻ�'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.ACK_RMS_YN                     IS 'ACKDOC ���ſ���'                        ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.RMS_SPYPL_C                    IS '�������ž�ü'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.MB_ID                          IS 'ȸ�����̵�'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.APPLICATION_ID                 IS 'XTRUSó��Ű'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DOC_NAME                       IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DOC_RMS_LOC_DSC                IS 'WEB/EDI'                                ;

GRANT SELECT ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_LG_IM_IN    �԰���
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_LG_IM_IN ;

CREATE TABLE NHVANINF.TB_LG_IM_IN (  
    PHD_NA_BZPLC                                                          VARCHAR2(13)      NOT NULL                  ,
    STR_PHD_IDVD_NO                                                       VARCHAR2(13)      NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    NA_TEAM_C                                                             VARCHAR2(2)                                 ,
    PHD_STR_PLA_DT                                                        CHAR(8)                                     ,
    NA_DVY_PLASH_SLPNO                                                    VARCHAR2(17)                                ,
    NA_DOCK_C                                                             VARCHAR2(13)                                ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            CHAR(9)                                     ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              CHAR(9)                                     ,
    DEL_YN                                                                CHAR(1)                                     ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              CHAR(9)                                     ,
    CONSTRAINT PK_TB_LG_IM_IN PRIMARY KEY (PHD_NA_BZPLC,STR_PHD_IDVD_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LG_IM_IN                                    IS '�԰���'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.PHD_NA_BZPLC                       IS '�����������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.STR_PHD_IDVD_NO                    IS '�԰���������ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_TRPL_C                          IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_TEAM_C                          IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.PHD_STR_PLA_DT                     IS '�����԰�������'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_DVY_PLASH_SLPNO                 IS '�������չ�ۿ�������ǥ��ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_DOCK_C                          IS '��������DOCK�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.FSRG_DTM                           IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.FSRGMN_ENO                         IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.LSCHG_DTM                          IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.LS_CMENO                           IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.DEL_YN                             IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.DEL_DTM                            IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.DLMN_ENO                           IS '�����ڰ��ι�ȣ'                         ;

GRANT SELECT ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 


