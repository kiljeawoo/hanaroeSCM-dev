--������������������������������������������������������������
--��NHVANINF.TB_TX_TH_DAY_SUPP    ���Լ������ڷ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TX_TH_DAY_SUPP ;

CREATE TABLE NHVANINF.TB_TX_TH_DAY_SUPP (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    TR_DT                                                                 CHAR(8)           NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)       NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    RG_SQNO                                                               VARCHAR2(20)      NOT NULL                  ,
    BZPL_BZNO                                                             VARCHAR2(10)                                ,
    NA_TEAM_C                                                             VARCHAR2(2)                                 ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    TRPL_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    NA_TRPL_APL_YN                                                        CHAR(1)                                     ,
    TRPL_RLNO                                                             VARCHAR2(13)                                ,
    NA_TOT_DSC                                                            VARCHAR2(2)                                 ,
    NA_TOT_DTI_DSC                                                        VARCHAR2(4)                                 ,
    NA_SOAC_DSC                                                           CHAR(1)                                     ,
    TXBZ_TP_DSC                                                           VARCHAR2(3)                                 ,
    FEE_ACG_ACCC                                                          VARCHAR2(10)                                ,
    LATCNM                                                                VARCHAR2(100)                               ,
    BLB_SPY_AM                                                            NUMBER(18)                                  ,
    BLB_VAT                                                               NUMBER(18)                                  ,
    DFC_SPY_AM                                                            NUMBER(18)                                  ,
    DFC_VAT                                                               NUMBER(18)                                  ,
    CRC_BLB_SPY_AM                                                        NUMBER(18)                                  ,
    CRC_BLB_VAT                                                           NUMBER(18)                                  ,
    CRC_DFC_SPY_AM                                                        NUMBER(18)                                  ,
    CRC_DFC_VAT                                                           NUMBER(18)                                  ,
    TXBZ_PBC_NT                                                           NUMBER(6)                                   ,
    NA_BZ_TPC                                                             VARCHAR2(2)                                 ,
    WRS_SBJC                                                              VARCHAR2(3)                                 ,
    NA_LLED_C                                                             VARCHAR2(3)                                 ,
    NA_MLED_C                                                             VARCHAR2(3)                                 ,
    ROTS_CTR_DSC                                                          CHAR(1)                                     ,
    NAAC_DSC                                                              CHAR(1)                                     ,
    BZ_METH_DSC                                                           VARCHAR2(2)                                 ,
    FIXAST_YN                                                             CHAR(1)                                     ,
    LIQ_WHSL_COMP_C                                                       CHAR(1)                                     ,
    LIQ_RTL_COMP_C                                                        CHAR(1)                                     ,
    NA_CRC_CAN_DSC                                                        CHAR(1)                                     ,
    ORGTR_NA_SLPNO                                                        VARCHAR2(9)                                 ,
    TXBZ_BRK_TP_DSC                                                       VARCHAR2(2)                                 ,
    TXBZ_BRK_TOT_TP_YN                                                    CHAR(1)                                     ,
    TXBZ_TOT_YN                                                           CHAR(1)                                     ,
    TXBZ_TOT_DT                                                           CHAR(8)                                     ,
    TXBZ_TOT_RG_SQNO                                                      VARCHAR2(20)                                ,
    RC_YN                                                                 CHAR(1)                                     ,
    RC_DT                                                                 VARCHAR2(8)                                 ,
    RPBC_YN                                                               CHAR(1)                                     ,
    BUYPL_RAPV_YN                                                         CHAR(1)                                     ,
    BUYPL_RAPV_DTM                                                        DATE                                        ,
    BUYPL_RAPV_NA_BZPLC                                                   VARCHAR2(13)                                ,
    BUYPL_RAPV_MN_ENO                                                     VARCHAR2(9)                                 ,
    SLPL_APV_YN                                                           CHAR(1)                                     ,
    SLPL_APV_DTM                                                          DATE                                        ,
    SLPL_APV_NA_BZPLC                                                     VARCHAR2(13)                                ,
    SLPL_APVMN_ENO                                                        VARCHAR2(9)                                 ,
    ELT_TXBIL_PRC_YN                                                      CHAR(1)                                     ,
    ELT_TXBIL_PRC_DTM                                                     DATE                                        ,
    ELT_TXBIL_PRC_NA_BZPLC                                                VARCHAR2(13)                                ,
    ELT_TXBIL_PRCMN_ENO                                                   VARCHAR2(9)                                 ,
    RC_RMK_CNTN                                                           VARCHAR2(100)                               ,
    RMK_CNTN                                                              VARCHAR2(100)                               ,
    DSPC_INCD_YN                                                          CHAR(1)                                     ,
    SOAC_PBC_APL_YN                                                       CHAR(1)                                     ,
    RG_STS_DSC                                                            CHAR(1)                                     ,
    BRK_DEL_YN                                                            CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_DEL_DTM                                                            DATE                                        ,
    TXBZ_PBC_DTM                                                          DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LS_DLMN_ENO                                                           VARCHAR2(9)                                 ,
    TXBZ_PBCMN_ENO                                                        VARCHAR2(9)                                 ,
    RCV_YN                                                                VARCHAR2(1)                                 ,
    ORI_NA_BZPLC                                                          VARCHAR2(13)                                ,
    SLV_BZPL_SQNO                                                         VARCHAR2(4)                                 ,
    SLV_TRPL_SQNO                                                         VARCHAR2(4)                                 ,
    SLP_SQ                                                                VARCHAR2(20)                                ,
    NA_WRS_SCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_DTCF_C                                                         VARCHAR2(3)                                 ,
    CONSTRAINT PK_TB_TX_TH_DAY_SUPP PRIMARY KEY (NA_BZPLC,TR_DT,NA_TR_DSC,NA_SLPNO,RG_SQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TH_DAY_SUPP                              IS '���Լ������ڷ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TR_DT                        IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TR_DSC                    IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_SLPNO                     IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RG_SQNO                      IS '����Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BZPL_BZNO                    IS '��������ڵ�Ϲ�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TEAM_C                    IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TRPL_C                    IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TRPL_NA_TEAM_C               IS '�ŷ�ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TRPL_APL_YN               IS '�������հŷ�ó���뿩��'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TRPL_RLNO                    IS '�ŷ�ó�Ǹ��ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TOT_DSC                   IS '�����������豸���ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TOT_DTI_DSC               IS '�����������輼�α����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_SOAC_DSC                  IS '�������հ�꼭�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TP_DSC                  IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FEE_ACG_ACCC                 IS '������ȸ������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LATCNM                       IS 'ǰ���'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BLB_SPY_AM                   IS '���ڰ��ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BLB_VAT                      IS '���ںΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.DFC_SPY_AM                   IS '���ڰ��ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.DFC_VAT                      IS '���ںΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_BLB_SPY_AM               IS '�������ڰ��ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_BLB_VAT                  IS '�������ںΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_DFC_SPY_AM               IS '�������ڰ��ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_DFC_VAT                  IS '�������ںΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_PBC_NT                  IS '��������Ƚ��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_BZ_TPC                    IS '�������ջ�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.WRS_SBJC                     IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_LLED_C                    IS '�������մ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_MLED_C                    IS '���������߿����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ROTS_CTR_DSC                 IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NAAC_DSC                     IS '�߾�ȸ���ձ����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BZ_METH_DSC                  IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FIXAST_YN                    IS '�����ڻ꿩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LIQ_WHSL_COMP_C              IS '�ַ����ž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LIQ_RTL_COMP_C               IS '�ַ��Ҹž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_CRC_CAN_DSC               IS '��������������ұ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ORGTR_NA_SLPNO               IS '���ŷ�����������ǥ��ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_BRK_TP_DSC              IS '�����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_BRK_TOT_TP_YN           IS '�����������輺����'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TOT_YN                  IS '�������迩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TOT_DT                  IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TOT_RG_SQNO             IS '�����������Ϸù�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RC_YN                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RC_DT                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RPBC_YN                      IS '�����࿩��'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_YN                IS '����ó�����ο���'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_DTM               IS '����ó�������Ͻ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_NA_BZPLC          IS '����ó�����ΰ������ջ�����ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_MN_ENO            IS '����ó�������ڰ��ι�ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APV_YN                  IS '����ó���ο���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APV_DTM                 IS '����ó�����Ͻ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APV_NA_BZPLC            IS '����ó���ΰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APVMN_ENO               IS '����ó�����ڰ��ι�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRC_YN             IS '���ڼ��ݰ�꼭ó������'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRC_DTM            IS '���ڼ��ݰ�꼭ó���Ͻ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRC_NA_BZPLC       IS '���ڼ��ݰ�꼭ó���������ջ�����ڵ�'   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRCMN_ENO          IS '���ڼ��ݰ�꼭ó���ڰ��ι�ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RC_RMK_CNTN                  IS '���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RMK_CNTN                     IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.DSPC_INCD_YN                 IS '�󼼳������Կ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SOAC_PBC_APL_YN              IS '��꼭�������뿩��'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RG_STS_DSC                   IS '��ϻ��±����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BRK_DEL_YN                   IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FSRG_DTM                     IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LSCHG_DTM                    IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LS_DEL_DTM                   IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_PBC_DTM                 IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FSRGMN_ENO                   IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LS_CMENO                     IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LS_DLMN_ENO                  IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_PBCMN_ENO               IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RCV_YN                       IS '���뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ORI_NA_BZPLC                 IS '���������ջ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLV_BZPL_SQNO                IS '��������Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLV_TRPL_SQNO                IS '���ŷ�ó�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLP_SQ                       IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_WRS_SCLC                  IS '�������ռҺз��ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_WRS_DTCF_C                IS '�������ռ��з��ڵ�'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TX_TH_DAY_CUST    ���⼼�����ڷ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TX_TH_DAY_CUST ;

CREATE TABLE NHVANINF.TB_TX_TH_DAY_CUST (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    TR_DT                                                                 CHAR(8)           NOT NULL                  ,
    SLP_DT                                                                CHAR(8)           NOT NULL                  ,
    NA_TR_DSC                                                             VARCHAR2(4)       NOT NULL                  ,
    NA_SLPNO                                                              VARCHAR2(9)       NOT NULL                  ,
    RG_SQNO                                                               VARCHAR2(20)      NOT NULL                  ,
    BZPL_BZNO                                                             VARCHAR2(10)                                ,
    NA_TEAM_C                                                             VARCHAR2(2)                                 ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    TRPL_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    NA_TRPL_APL_YN                                                        CHAR(1)                                     ,
    TRPL_RLNO                                                             VARCHAR2(13)                                ,
    NA_TOT_DSC                                                            VARCHAR2(2)                                 ,
    NA_TOT_DTI_DSC                                                        VARCHAR2(4)                                 ,
    NA_SOAC_DSC                                                           CHAR(1)                                     ,
    TXBZ_TP_DSC                                                           VARCHAR2(3)                                 ,
    FEE_ACG_ACCC                                                          VARCHAR2(10)                                ,
    LATCNM                                                                VARCHAR2(100)                               ,
    BLB_SPY_AM                                                            NUMBER(18,0)                                ,
    BLB_VAT                                                               NUMBER(18,0)                                ,
    DFC_SPY_AM                                                            NUMBER(18,0)                                ,
    DFC_VAT                                                               NUMBER(18,0)                                ,
    CRC_BLB_SPY_AM                                                        NUMBER(18,0)                                ,
    CRC_BLB_VAT                                                           NUMBER(18,0)                                ,
    CRC_DFC_SPY_AM                                                        NUMBER(18,0)                                ,
    CRC_DFC_VAT                                                           NUMBER(18,0)                                ,
    TXBZ_PBC_NT                                                           NUMBER(6,0)                                 ,
    NA_BZ_TPC                                                             VARCHAR2(2)                                 ,
    WRS_SBJC                                                              VARCHAR2(3)                                 ,
    NA_LLED_C                                                             VARCHAR2(3)                                 ,
    NA_MLED_C                                                             VARCHAR2(3)                                 ,
    ROTS_CTR_DSC                                                          CHAR(1)                                     ,
    NAAC_DSC                                                              CHAR(1)                                     ,
    BZ_METH_DSC                                                           VARCHAR2(2)                                 ,
    FIXAST_YN                                                             CHAR(1)                                     ,
    VAT_TROT_OBJ_LATC_YN                                                  CHAR(1)                                     ,
    LIQ_WHSL_COMP_C                                                       CHAR(1)                                     ,
    LIQ_RTL_COMP_C                                                        CHAR(1)                                     ,
    NA_CRC_CAN_DSC                                                        CHAR(1)                                     ,
    ORGTR_NA_SLPNO                                                        VARCHAR2(9)                                 ,
    TXBZ_BRK_TP_DSC                                                       VARCHAR2(2)                                 ,
    TXBZ_BRK_TOT_TP_YN                                                    CHAR(1)                                     ,
    TXBZ_TOT_YN                                                           CHAR(1)                                     ,
    TXBZ_TOT_DT                                                           CHAR(8)                                     ,
    TXBZ_TOT_RG_SQNO                                                      VARCHAR2(20)                                ,
    CD_CSB_INCD_YN                                                        CHAR(1)                                     ,
    CSH_RCTW_PBC_YN                                                       CHAR(1)                                     ,
    TXBZ_PBC_YN                                                           CHAR(1)                                     ,
    TXBZ_PBC_DT                                                           CHAR(8)                                     ,
    BUYPL_RAPV_YN                                                         CHAR(1)                                     ,
    BUYPL_RAPV_DTM                                                        DATE                                        ,
    BUYPL_RAPV_NA_BZPLC                                                   VARCHAR2(13)                                ,
    BUYPL_RAPV_MN_ENO                                                     VARCHAR2(9)                                 ,
    SLPL_APV_YN                                                           CHAR(1)                                     ,
    SLPL_APV_DTM                                                          DATE                                        ,
    SLPL_APV_NA_BZPLC                                                     VARCHAR2(13)                                ,
    SLPL_APVMN_ENO                                                        VARCHAR2(9)                                 ,
    ELT_TXBIL_PRC_YN                                                      CHAR(1)                                     ,
    ELT_TXBIL_PRC_DTM                                                     DATE                                        ,
    ELT_TXBIL_PRC_NA_BZPLC                                                VARCHAR2(13)                                ,
    ELT_TXBIL_PRCMN_ENO                                                   VARCHAR2(9)                                 ,
    PBC_RMK_CNTN                                                          VARCHAR2(100)                               ,
    RMK_CNTN                                                              VARCHAR2(100)                               ,
    DSPC_INCD_YN                                                          CHAR(1)                                     ,
    SOAC_PBC_APL_YN                                                       CHAR(1)                                     ,
    RG_STS_DSC                                                            CHAR(1)                                     ,
    BRK_DEL_YN                                                            CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_DEL_DTM                                                            DATE                                        ,
    TXBZ_PBC_DTM                                                          DATE                                        ,
    TXBZ_PBCMN_ENO                                                        VARCHAR2(9)                                 ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LS_DLMN_ENO                                                           VARCHAR2(9)                                 ,
    ORI_NA_BZPLC                                                          VARCHAR2(13)                                ,
    SLV_BZPL_SQNO                                                         VARCHAR2(4)                                 ,
    SLV_TRPL_SQNO                                                         VARCHAR2(4)                                 ,
    SLP_SQ                                                                VARCHAR2(20)                                ,
    PATN_BZ_METH_DSC                                                      VARCHAR2(2)                                 ,
    BLB_CCD_SPY_AM                                                        NUMBER(18,0)                                ,
    BLB_CCD_VAT                                                           NUMBER(18,0)                                ,
    DFC_CCD_SPY_AM                                                        NUMBER(18,0)                                ,
    DFC_CCD_VAT                                                           NUMBER(18,0)                                ,
    CRC_BLB_CCD_SPY_AM                                                    NUMBER(18,0)                                ,
    CRC_BLB_CCD_VAT                                                       NUMBER(18,0)                                ,
    CRC_DFC_CCD_SPY_AM                                                    NUMBER(18,0)                                ,
    CRC_DFC_CCD_VAT                                                       NUMBER(18,0)                                ,
    BLB_CSH_RCTW_SPY_AM                                                   NUMBER(18,0)                                ,
    BLB_CSH_RCTW_VAT                                                      NUMBER(18,0)                                ,
    DFC_CSH_RCTW_SPY_AM                                                   NUMBER(18,0)                                ,
    DFC_CSH_RCTW_VAT                                                      NUMBER(18,0)                                ,
    CRC_BLB_CSH_RCTW_SPY_AM                                               NUMBER(18,0)                                ,
    CRC_BLB_CSH_RCTW_VAT                                                  NUMBER(18,0)                                ,
    CRC_DFC_CSH_RCTW_SPY_AM                                               NUMBER(18,0)                                ,
    CRC_DFC_CSH_RCTW_VAT                                                  NUMBER(18,0)                                ,
    CONSTRAINT PK_TB_TX_TH_DAY_CUST PRIMARY KEY (NA_BZPLC,TR_DT,SLP_DT,NA_TR_DSC,NA_SLPNO,RG_SQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TH_DAY_CUST                              IS '���⼼�����ڷ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TR_DT                        IS '�ŷ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLP_DT                       IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TR_DSC                    IS '�������հŷ������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_SLPNO                     IS '����������ǥ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.RG_SQNO                      IS '����Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BZPL_BZNO                    IS '��������ڵ�Ϲ�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TEAM_C                    IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TRPL_C                    IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TRPL_NA_TEAM_C               IS '�ŷ�ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TRPL_APL_YN               IS '�������հŷ�ó���뿩��'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TRPL_RLNO                    IS '�ŷ�ó�Ǹ��ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TOT_DSC                   IS '�����������豸���ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TOT_DTI_DSC               IS '�����������輼�α����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_SOAC_DSC                  IS '�������հ�꼭�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TP_DSC                  IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FEE_ACG_ACCC                 IS '������ȸ������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LATCNM                       IS 'ǰ���'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_SPY_AM                   IS '���ڰ��ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_VAT                      IS '���ںΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_SPY_AM                   IS '���ڰ��ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_VAT                      IS '���ںΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_SPY_AM               IS '�������ڰ��ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_VAT                  IS '�������ںΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_SPY_AM               IS '�������ڰ��ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_VAT                  IS '�������ںΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_NT                  IS '��������Ƚ��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_BZ_TPC                    IS '�������ջ�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.WRS_SBJC                     IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_LLED_C                    IS '�������մ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_MLED_C                    IS '���������߿����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ROTS_CTR_DSC                 IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NAAC_DSC                     IS '�߾�ȸ���ձ����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BZ_METH_DSC                  IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FIXAST_YN                    IS '�����ڻ꿩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.VAT_TROT_OBJ_LATC_YN         IS '�ΰ���ȯ�޴��ǰ�񿩺�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LIQ_WHSL_COMP_C              IS '�ַ����ž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LIQ_RTL_COMP_C               IS '�ַ��Ҹž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_CRC_CAN_DSC               IS '��������������ұ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ORGTR_NA_SLPNO               IS '���ŷ�����������ǥ��ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_BRK_TP_DSC              IS '�����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_BRK_TOT_TP_YN           IS '�����������輺����'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TOT_YN                  IS '�������迩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TOT_DT                  IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TOT_RG_SQNO             IS '�����������Ϸù�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CD_CSB_INCD_YN               IS 'ī��������Կ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CSH_RCTW_PBC_YN              IS '���ݿ��������࿩��'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_YN                  IS '�������࿩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_DT                  IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_YN                IS '����ó�����ο���'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_DTM               IS '����ó�������Ͻ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_NA_BZPLC          IS '����ó�����ΰ������ջ�����ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_MN_ENO            IS '����ó�������ڰ��ι�ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APV_YN                  IS '����ó���ο���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APV_DTM                 IS '����ó�����Ͻ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APV_NA_BZPLC            IS '����ó���ΰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APVMN_ENO               IS '����ó�����ڰ��ι�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRC_YN             IS '���ڼ��ݰ�꼭ó������'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRC_DTM            IS '���ڼ��ݰ�꼭ó���Ͻ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRC_NA_BZPLC       IS '���ڼ��ݰ�꼭ó���������ջ�����ڵ�'   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRCMN_ENO          IS '���ڼ��ݰ�꼭ó���ڰ��ι�ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.PBC_RMK_CNTN                 IS '��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.RMK_CNTN                     IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DSPC_INCD_YN                 IS '�󼼳������Կ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SOAC_PBC_APL_YN              IS '��꼭�������뿩��'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.RG_STS_DSC                   IS '��ϻ��±����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BRK_DEL_YN                   IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FSRG_DTM                     IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LSCHG_DTM                    IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LS_DEL_DTM                   IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_DTM                 IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBCMN_ENO               IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FSRGMN_ENO                   IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LS_CMENO                     IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LS_DLMN_ENO                  IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ORI_NA_BZPLC                 IS '���������ջ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLV_BZPL_SQNO                IS '��������Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLV_TRPL_SQNO                IS '���ŷ�ó�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLP_SQ                       IS '��ǥ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.PATN_BZ_METH_DSC             IS '�������ı����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CCD_SPY_AM               IS '���ڽſ�ī����ޱݾ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CCD_VAT                  IS '���ڽſ�ī��ΰ���'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CCD_SPY_AM               IS '���ڽſ�ī����ޱݾ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CCD_VAT                  IS '���ڽſ�ī��ΰ���'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CCD_SPY_AM           IS '�������ڽſ�ī����ޱݾ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CCD_VAT              IS '�������ڽſ�ī��ΰ���'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CCD_SPY_AM           IS '�������ڽſ�ī����ޱݾ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CCD_VAT              IS '�������ڽſ�ī��ΰ���'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CSH_RCTW_SPY_AM          IS '�������ݿ��������ޱݾ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CSH_RCTW_VAT             IS '�������ݿ������ΰ���'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CSH_RCTW_SPY_AM          IS '�������ݿ��������ޱݾ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CSH_RCTW_VAT             IS '�������ݿ������ΰ���'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CSH_RCTW_SPY_AM      IS '�����������ݿ��������ޱݾ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CSH_RCTW_VAT         IS '�����������ݿ������ΰ���'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CSH_RCTW_SPY_AM      IS '�����������ݿ��������ޱݾ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CSH_RCTW_VAT         IS '�����������ݿ������ΰ���'               ;

GRANT SELECT ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 

--������������������������������������������������������������
--��NHVANINF.TB_TX_TH_CUST    ���⼼��Ȯ���ڷ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TX_TH_CUST ;

CREATE TABLE NHVANINF.TB_TX_TH_CUST (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    SL_YM                                                                 CHAR(6)           NOT NULL                  ,
    TXBZ_DFN_DT                                                           CHAR(8)           NOT NULL                  ,
    TXBZ_TOT_RG_SQNO                                                      VARCHAR2(20)      NOT NULL                  ,
    BZPL_BZNO                                                             VARCHAR2(10)                                ,
    NA_TEAM_C                                                             VARCHAR2(2)                                 ,
    NA_TRPL_C                                                             VARCHAR2(13)                                ,
    TRPL_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    NA_TRPL_APL_YN                                                        CHAR(1)                                     ,
    TRPL_RLNO                                                             VARCHAR2(96)                                ,
    NA_TOT_DSC                                                            VARCHAR2(2)                                 ,
    NA_TOT_DTI_DSC                                                        VARCHAR2(4)                                 ,
    NA_SOAC_DSC                                                           CHAR(1)                                     ,
    TXBZ_TP_DSC                                                           VARCHAR2(3)                                 ,
    LATCNM                                                                VARCHAR2(100)                               ,
    BLB_SPY_AM                                                            NUMBER(18)                                  ,
    BLB_VAT                                                               NUMBER(18)                                  ,
    DFC_SPY_AM                                                            NUMBER(18)                                  ,
    DFC_VAT                                                               NUMBER(18)                                  ,
    CRC_BLB_SPY_AM                                                        NUMBER(18)                                  ,
    CRC_BLB_VAT                                                           NUMBER(18)                                  ,
    CRC_DFC_SPY_AM                                                        NUMBER(18)                                  ,
    CRC_DFC_VAT                                                           NUMBER(18)                                  ,
    PUC                                                                   NUMBER(6)                                   ,
    TXBZ_PBC_NT                                                           NUMBER(6)                                   ,
    PBC_PHR_CNTN                                                          VARCHAR2(100)                               ,
    NA_BZ_TPC                                                             VARCHAR2(2)                                 ,
    WRS_SBJC                                                              VARCHAR2(3)                                 ,
    NA_LLED_C                                                             VARCHAR2(3)                                 ,
    NA_MLED_C                                                             VARCHAR2(3)                                 ,
    ROTS_CTR_DSC                                                          CHAR(1)                                     ,
    NAAC_DSC                                                              CHAR(1)                                     ,
    BZ_METH_DSC                                                           VARCHAR2(2)                                 ,
    FIXAST_YN                                                             CHAR(1)                                     ,
    VAT_TROT_OBJ_LATC_YN                                                  CHAR(1)                                     ,
    LIQ_WHSL_COMP_C                                                       CHAR(1)                                     ,
    LIQ_RTL_COMP_C                                                        CHAR(1)                                     ,
    RCT_RQS_DSC                                                           CHAR(1)                                     ,
    TXBZ_BRK_TP_DSC                                                       VARCHAR2(2)                                 ,
    BUYPL_RAPV_YN                                                         CHAR(1)                                     ,
    BUYPL_RAPV_DTM                                                        DATE                                        ,
    BUYPL_RAPV_NA_BZPLC                                                   VARCHAR2(13)                                ,
    BUYPL_RAPV_MN_ENO                                                     VARCHAR2(9)                                 ,
    SLPL_APV_YN                                                           CHAR(1)                                     ,
    SLPL_APV_DTM                                                          DATE                                        ,
    SLPL_APV_NA_BZPLC                                                     VARCHAR2(13)                                ,
    SLPL_APVMN_ENO                                                        VARCHAR2(9)                                 ,
    ELT_TXBIL_PRC_YN                                                      CHAR(1)                                     ,
    ELT_TXBIL_PRC_DTM                                                     DATE                                        ,
    ELT_TXBIL_PRC_NA_BZPLC                                                VARCHAR2(13)                                ,
    ELT_TXBIL_PRCMN_ENO                                                   VARCHAR2(9)                                 ,
    PBC_RMK_CNTN                                                          VARCHAR2(100)                               ,
    RMK_CNTN                                                              VARCHAR2(100)                               ,
    DSPC_INCD_YN                                                          CHAR(1)                                     ,
    BGT_TXBZ_TMS_DFN_YN                                                   CHAR(1)                                     ,
    BGT_TXBZ_TMS_DFN_DTM                                                  DATE                                        ,
    BGT_TXBZ_TMS_DFN_MN_ENO                                               VARCHAR2(9)                                 ,
    RG_STS_DSC                                                            CHAR(1)                                     ,
    BRK_DEL_YN                                                            CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_DEL_DTM                                                            DATE                                        ,
    TXBZ_PBC_DTM                                                          DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LS_DLMN_ENO                                                           VARCHAR2(9)                                 ,
    TXBZ_PBCMN_ENO                                                        VARCHAR2(9)                                 ,
    ORI_NA_BZPLC                                                          VARCHAR2(13)                                ,
    SLV_BZPL_SQNO                                                         VARCHAR2(4)                                 ,
    SLV_TRPL_SQNO                                                         VARCHAR2(4)                                 ,
    BLB_CCD_SPY_AM                                                        NUMBER(18)                                  ,
    BLB_CCD_VAT                                                           NUMBER(18)                                  ,
    DFC_CCD_SPY_AM                                                        NUMBER(18)                                  ,
    DFC_CCD_VAT                                                           NUMBER(18)                                  ,
    CRC_BLB_CCD_SPY_AM                                                    NUMBER(18)                                  ,
    CRC_BLB_CCD_VAT                                                       NUMBER(18)                                  ,
    CRC_DFC_CCD_SPY_AM                                                    NUMBER(18)                                  ,
    CRC_DFC_CCD_VAT                                                       NUMBER(18)                                  ,
    BLB_CSH_RCTW_SPY_AM                                                   NUMBER(18)                                  ,
    BLB_CSH_RCTW_VAT                                                      NUMBER(18)                                  ,
    DFC_CSH_RCTW_SPY_AM                                                   NUMBER(18)                                  ,
    DFC_CSH_RCTW_VAT                                                      NUMBER(18)                                  ,
    CRC_BLB_CSH_RCTW_SPY_AM                                               NUMBER(18)                                  ,
    CRC_BLB_CSH_RCTW_VAT                                                  NUMBER(18)                                  ,
    CRC_DFC_CSH_RCTW_SPY_AM                                               NUMBER(18)                                  ,
    CRC_DFC_CSH_RCTW_VAT                                                  NUMBER(18)                                  ,
    NA_WRS_SCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_DTCF_C                                                         VARCHAR2(3)                                 ,
    CONSTRAINT PK_TB_TX_TH_CUST PRIMARY KEY (NA_BZPLC,SL_YM,TXBZ_DFN_DT,TXBZ_TOT_RG_SQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TH_CUST                                  IS '���⼼��Ȯ���ڷ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_BZPLC                         IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SL_YM                            IS '������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_DFN_DT                      IS '����Ȯ������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_TOT_RG_SQNO                 IS '�����������Ϸù�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BZPL_BZNO                        IS '��������ڵ�Ϲ�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TEAM_C                        IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TRPL_C                        IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TRPL_NA_TEAM_C                   IS '�ŷ�ó�����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TRPL_APL_YN                   IS '�������հŷ�ó���뿩��'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TRPL_RLNO                        IS '�ŷ�ó�Ǹ��ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TOT_DSC                       IS '�����������豸���ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TOT_DTI_DSC                   IS '�����������輼�α����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_SOAC_DSC                      IS '�������հ�꼭�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_TP_DSC                      IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LATCNM                           IS 'ǰ���'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_SPY_AM                       IS '���ڰ��ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_VAT                          IS '���ںΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_SPY_AM                       IS '���ڰ��ޱݾ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_VAT                          IS '���ںΰ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_SPY_AM                   IS '�������ڰ��ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_VAT                      IS '�������ںΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_SPY_AM                   IS '�������ڰ��ޱݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_VAT                      IS '�������ںΰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.PUC                              IS '�ż�'                                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_PBC_NT                      IS '��������Ƚ��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.PBC_PHR_CNTN                     IS '���๮������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_BZ_TPC                        IS '�������ջ�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.WRS_SBJC                         IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_LLED_C                        IS '�������մ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_MLED_C                        IS '���������߿����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ROTS_CTR_DSC                     IS '�����౸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NAAC_DSC                         IS '�߾�ȸ���ձ����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BZ_METH_DSC                      IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.FIXAST_YN                        IS '�����ڻ꿩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.VAT_TROT_OBJ_LATC_YN             IS '�ΰ���ȯ�޴��ǰ�񿩺�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LIQ_WHSL_COMP_C                  IS '�ַ����ž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LIQ_RTL_COMP_C                   IS '�ַ��Ҹž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.RCT_RQS_DSC                      IS '����û�������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_BRK_TP_DSC                  IS '�����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_YN                    IS '����ó�����ο���'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_DTM                   IS '����ó�������Ͻ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_NA_BZPLC              IS '����ó�����ΰ������ջ�����ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_MN_ENO                IS '����ó�������ڰ��ι�ȣ'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APV_YN                      IS '����ó���ο���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APV_DTM                     IS '����ó�����Ͻ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APV_NA_BZPLC                IS '����ó���ΰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APVMN_ENO                   IS '����ó�����ڰ��ι�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRC_YN                 IS '���ڼ��ݰ�꼭ó������'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRC_DTM                IS '���ڼ��ݰ�꼭ó���Ͻ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRC_NA_BZPLC           IS '���ڼ��ݰ�꼭ó���������ջ�����ڵ�'   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRCMN_ENO              IS '���ڼ��ݰ�꼭ó���ڰ��ι�ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.PBC_RMK_CNTN                     IS '��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.RMK_CNTN                         IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DSPC_INCD_YN                     IS '�󼼳������Կ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BGT_TXBZ_TMS_DFN_YN              IS '���꼼������Ȯ������'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BGT_TXBZ_TMS_DFN_DTM             IS '���꼼������Ȯ���Ͻ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BGT_TXBZ_TMS_DFN_MN_ENO          IS '���꼼������Ȯ���ڰ��ι�ȣ'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.RG_STS_DSC                       IS '��ϻ��±����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BRK_DEL_YN                       IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.FSRG_DTM                         IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LSCHG_DTM                        IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LS_DEL_DTM                       IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_PBC_DTM                     IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.FSRGMN_ENO                       IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LS_CMENO                         IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LS_DLMN_ENO                      IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_PBCMN_ENO                   IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ORI_NA_BZPLC                     IS '���������ջ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLV_BZPL_SQNO                    IS '��������Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLV_TRPL_SQNO                    IS '���ŷ�ó�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CCD_SPY_AM                   IS '���ڽſ�ī����ޱݾ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CCD_VAT                      IS '���ڽſ�ī��ΰ���'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CCD_SPY_AM                   IS '���ڽſ�ī����ޱݾ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CCD_VAT                      IS '���ڽſ�ī��ΰ���'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CCD_SPY_AM               IS '�������ڽſ�ī����ޱݾ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CCD_VAT                  IS '�������ڽſ�ī��ΰ���'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CCD_SPY_AM               IS '�������ڽſ�ī����ޱݾ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CCD_VAT                  IS '�������ڽſ�ī��ΰ���'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CSH_RCTW_SPY_AM              IS '�������ݿ��������ޱݾ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CSH_RCTW_VAT                 IS '�������ݿ������ΰ���'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CSH_RCTW_SPY_AM              IS '�������ݿ��������ޱݾ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CSH_RCTW_VAT                 IS '�������ݿ������ΰ���'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CSH_RCTW_SPY_AM          IS '�����������ݿ��������ޱݾ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CSH_RCTW_VAT             IS '�����������ݿ������ΰ���'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CSH_RCTW_SPY_AM          IS '�����������ݿ��������ޱݾ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CSH_RCTW_VAT             IS '�����������ݿ������ΰ���'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_WRS_SCLC                      IS '�������ռҺз��ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_WRS_DTCF_C                    IS '�������ռ��з��ڵ�'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ;


--������������������������������������������������������������
--��NHVANINF.TB_TX_TM_IDVDC    ���������ڵ峻��
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TX_TM_IDVDC ;

CREATE TABLE NHVANINF.TB_TX_TM_IDVDC (  
    TXBZ_IDVD_TPC                                                         VARCHAR2(20)      NOT NULL                  ,
    TXBZ_IDVDC                                                            VARCHAR2(4)       NOT NULL                  ,
    TXBZ_IDVD_CNM                                                         VARCHAR2(40)      NOT NULL                  ,
    RG_STS_DSC                                                            CHAR(1)           NOT NULL                  ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_TX_TM_IDVDC PRIMARY KEY (TXBZ_IDVD_TPC,TXBZ_IDVDC,TXBZ_IDVD_CNM,RG_STS_DSC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TM_IDVDC                                 IS '���������ڵ峻��'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.TXBZ_IDVD_TPC                   IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.TXBZ_IDVDC                      IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.TXBZ_IDVD_CNM                   IS '���������ڵ��'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.RG_STS_DSC                      IS '��ϻ��±����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.RMK_CNTN                        IS '�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.FSRG_DTM                        IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.FSRGMN_ENO                      IS '���ʵ���ڰ��ι�ȣ'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TX_TM_DFN_BZPL    �����ڷ�Ȯ�������⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TX_TM_DFN_BZPL ;

CREATE TABLE NHVANINF.TB_TX_TM_DFN_BZPL (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_TX_TM_DFN_BZPL PRIMARY KEY (NA_BZPLC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TM_DFN_BZPL                              IS '�����ڷ�Ȯ�������⺻'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_DFN_BZPL.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_DFN_BZPL.FSRG_DTM                     IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_DFN_BZPL.FSRGMN_ENO                   IS '���ʵ���ڰ��ι�ȣ'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TX_TH_TAX_KIND_PBC    �������������������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TX_TH_TAX_KIND_PBC ;

CREATE TABLE NHVANINF.TB_TX_TH_TAX_KIND_PBC (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    TXBZ_TP_DSC                                                           VARCHAR2(3)       NOT NULL                  ,
    TXBZ_TP_LATCNM                                                        VARCHAR2(100)                               ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_TX_TH_TAX_KIND_PBC PRIMARY KEY (NA_BZPLC,NA_TEAM_C,TXBZ_TP_DSC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TH_TAX_KIND_PBC                          IS '�������������������'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.NA_BZPLC                 IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.NA_TEAM_C                IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.TXBZ_TP_DSC              IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.TXBZ_TP_LATCNM           IS '��������ǰ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.FSRG_DTM                 IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.FSRGMN_ENO               IS '���ʵ���ڰ��ι�ȣ'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TX_TM_PBC_PHR    �������๮���⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TX_TM_PBC_PHR ;

CREATE TABLE NHVANINF.TB_TX_TM_PBC_PHR (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    DM_GDC_PHR_CNTN                                                       VARCHAR2(500)                               ,
    PBC_PAP_DSC                                                           CHAR(1)                                     ,
    RV_SLP_PBC_PAP_DSC                                                    CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_TX_TM_PBC_PHR PRIMARY KEY (NA_BZPLC,NA_TEAM_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TM_PBC_PHR                               IS '�������๮���⺻'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.NA_BZPLC                      IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.NA_TEAM_C                     IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.DM_GDC_PHR_CNTN               IS 'DM�ȳ���������'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.PBC_PAP_DSC                   IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.RV_SLP_PBC_PAP_DSC            IS '�Ա���ǥ������������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.FSRG_DTM                      IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.FSRGMN_ENO                    IS '���ʵ���ڰ��ι�ȣ'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
