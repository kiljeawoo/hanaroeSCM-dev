--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_BUYER    ��ǰ�з������̾�⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_BUYER                                IS '��ǰ�з������̾�⺻'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_BZPLC                       IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_LCLC                    IS '��ǰ��з��ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_MCLC                    IS '��ǰ�ߺз��ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_SCLC                    IS '��ǰ�Һз��ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.NA_WRS_DTCF_C                  IS '��ǰ���з��ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BUYER.BUYER_ENO                      IS '���̾�ι�ȣ'                         ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_BUYER TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_ATTR    ��ǰ�Ӽ��ڵ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_GD_WRS_ATTR ;

CREATE TABLE NHVANINF.TB_GD_WRS_ATTR (  
    WRS_ATTR_DSC                                                          VARCHAR2(2)       NOT NULL                  ,
    NA_WRS_ATTR_C                                                         VARCHAR2(5)       NOT NULL                  ,
    NA_WRS_ATTNM                                                          VARCHAR2(100)                               ,
    CONSTRAINT PK_TB_GD_WRS_ATTR PRIMARY KEY (WRS_ATTR_DSC,NA_WRS_ATTR_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_ATTR                                 IS '��ǰ�Ӽ��ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_ATTR.WRS_ATTR_DSC                    IS '��ǰ�Ӽ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_ATTR.NA_WRS_ATTR_C                   IS '�������ջ�ǰ�Ӽ��ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_ATTR.NA_WRS_ATTNM                    IS '�������ջ�ǰ�Ӽ���'                     ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_ATTR TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_CLF    ��ǰ�з��ڵ�
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_CLF                                  IS '��ǰ�з��ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_LCLC                      IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_MCLC                      IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_SCLC                      IS '�������ջ�ǰ�Һз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.NA_WRS_DTCF_C                    IS '�������ջ�ǰ���з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_LCLFNM                       IS '��ǰ��з���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_MCLFNM                       IS '��ǰ�ߺз���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_SCLFNM                       IS '��ǰ�Һз���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_DTCFNM                       IS '��ǰ���з���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_CLF.WRS_ID_DSC                       IS '��ǰ�ĺ������ڵ�'                       ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_CLF TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS    ��ǰ�⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS                                      IS '��ǰ�⺻'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_C                             IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_C_DSC                            IS '��ǰ�ڵ屸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_DSC                              IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRSNM                                IS '��ǰ��'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_ABR_NM                           IS '��ǰ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_ENM                              IS '��ǰ������'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_TPC                              IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_LCLC                          IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_MCLC                          IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_SCLC                          IS '�������ջ�ǰ�Һз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_DTCF_C                        IS '�������ջ�ǰ���з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_STDNM                            IS '��ǰ�԰ݸ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TXT_DSC                              IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.SMA_APL_TPC                          IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LIQ_YN                               IS '�ַ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.COMM_WRS_YN                          IS '������ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.MFT_NA_TRPL_C                        IS '�����������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WHT                                  IS '�ܷ�'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_UNT_C                         IS '�������ջ�ǰ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_PAK_C                         IS '�������ջ�ǰ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_SZE_SEX_C                     IS '�������ջ�ǰũ�⼺���ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_QLT_GRDC                      IS '�������ջ�ǰǰ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_BRAN_C                        IS '�������ջ�ǰ�귣���ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_PROENV_DSC                    IS '�������ջ�ǰģȯ�汸���ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.GAP_ATTC_YN                          IS 'GAP��������'                            ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_NACF_QLT_ATTC_C               IS '�������ջ�ǰ����ǰ�������ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_CSTD_METC                     IS '�������ջ�ǰ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_DSTR_STSC                     IS '�������ջ�ǰ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_UZC                           IS '�������ջ�ǰ�뵵�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_IPO_DSC                       IS '�������ջ�ǰ���Ա����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_PDAA_C                        IS '�������ջ�ǰ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VLD_PRD_CN                           IS '��ȿ�Ⱓ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VLD_PRD_DSC                          IS '��ȿ�Ⱓ�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.NA_WRS_STD_UNT_C                     IS '�������ջ�ǰ�԰ݴ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_HGHT                             IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_LEN_LEN                          IS '��ǰ���α���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_WDTH_LEN                         IS '��ǰ���α���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_SGRT                             IS '��ǰ���߷�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_SDL_DSC                          IS '��ǰ�ְܽ㱸���ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_AHL_CN                           IS '��ǰ��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.MTRL_STD_THKN                        IS '����԰ݵβ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CICL_WRS_STD_DMTR_CN                 IS '������ǰ�԰�������'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CICL_WRS_STD_DPTH_CN                 IS '������ǰ�԰ݱ��̼�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VCBT_NA_WRS_C                        IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VCBT_QT                              IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.VCBX_NA_WRS_C                        IS '�����ڰ������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CVS_QT                               IS 'ȯ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.CVS_NA_WRS_UNT_C                     IS 'ȯ��������ջ�ǰ�����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_DTL_EXPL                         IS '��ǰ�󼼼���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.BSC_UNT_DSC                          IS '�⺻���������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.BOXPE_AQZ                            IS '�ڽ����Լ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.WRS_FL_CN                            IS '��ǰ���ϰ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.KNET_WRS_NO                          IS '�ڸ��ȳݻ�ǰ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TR_STOP_YN                           IS '�ŷ���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TR_STOP_RSNC                         IS '�ŷ����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.TR_STOP_DT                           IS '�ŷ���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.DEL_YN                               IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.FSRG_DTM                             IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.FSRGMN_ENO                           IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.FSRGMN_NA_BZPLC                      IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LSCHG_DTM                            IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LS_CMENO                             IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS.LSCGMN_NA_BZPLC                      IS '���������ڰ������ջ�����ڵ�'           ;

GRANT SELECT ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_RG_REQ    ��ǰ��Ͻ�û����
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ                               IS '��ǰ��Ͻ�û����'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VAN_C_RQ_NO                   IS 'VAN��ǰ��û��ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_NO                    IS '���������ڵ��û��ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_OBJ_DSC               IS '���������ڵ��û��󱸺��ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CTCPL_TELNO                   IS '����ó��ȭ��ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RQ_CNTN                       IS '��û����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.APV_RQ_NA_BZPLC               IS '���ν�û�������ջ�����ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.FSRGMN_ENO                    IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.FSRGMN_NA_BZPLC               IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.BUYER_ENO                     IS '���̾�ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RQ_NA_WRS_C                   IS '��û�������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_C                      IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_C_DSC                     IS '��ǰ�ڵ屸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_DSC                       IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRSNM                         IS '��ǰ��'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_ABR_NM                    IS '��ǰ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_ENM                       IS '��ǰ������'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_TPC                       IS '��ǰ�����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_LCLC                   IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_MCLC                   IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_SCLC                   IS '�������ջ�ǰ�Һз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_DTCF_C                 IS '�������ջ�ǰ���з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_STDNM                     IS '��ǰ�԰ݸ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.TXT_DSC                       IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.SMA_APL_TPC                   IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.LIQ_YN                        IS '�ַ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.COMM_WRS_YN                   IS '������ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.MFT_NA_TRPL_C                 IS '�����������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WHT                           IS '�ܷ�'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_UNT_C                  IS '�������ջ�ǰ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_PAK_C                  IS '�������ջ�ǰ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_BRAN_C                 IS '�������ջ�ǰ�귣���ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_CSTD_METC              IS '�������ջ�ǰ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_DSTR_STSC              IS '�������ջ�ǰ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_UZC                    IS '�������ջ�ǰ�뵵�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_WRS_IPO_DSC                IS '�������ջ�ǰ���Ա����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VCBT_NA_WRS_C                 IS '�����������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VCBT_QT                       IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.VCBX_NA_WRS_C                 IS '�����ڰ������ջ�ǰ�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_DTL_EXPL                  IS '��ǰ�󼼼���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.BSC_UNT_DSC                   IS '�⺻���������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.BOXPE_AQZ                     IS '�ڽ����Լ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RFID_UYN                      IS 'RFID��뿩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.FOMNM                         IS '���ĸ�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.SLGT_ETR_DSC                  IS '�����Ź�����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.DSTR_TER_YN                   IS '������Ѱ�������'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.DSTR_TER_MRK_DSC              IS '�������ǥ���������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.WRS_MODIFY_YN                 IS '��ǰ�����û����'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.TEMP_YN                       IS '�ӽ����忩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.PRC_YN                        IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.RSP_C_CNTN                    IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.REQ_RESULT                    IS '��ǰ��Ͻ�û����޽���'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CNF_ENO                       IS '����/�������ι�ȣ'                      ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CNF_DMT                       IS '����/�����Ͻ�'                          ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.CNF_NAME                      IS '����/�����ڸ�'                          ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_REJ_RSNC              IS '���������ڵ��û���������ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.NA_C_RQ_STSC                  IS '���������ڵ��û�����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ.EDI_IF_ID                     IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_RG_REQ_FILE    ��ǰ��Ͻ�û_��ǰ�̹���
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_FILE                          IS '��ǰ��Ͻ�û_��ǰ�̹���'                ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.VAN_C_RQ_NO              IS 'VAN��ǰ��û��ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_SEQ                 IS '÷�������Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_NAME                IS '÷�����ϸ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_SYSTEM_NAME         IS '÷�����Ͻý��۸�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_FILE.FILE_SIZE                IS '÷������ũ��'                           ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_FILE TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_RG_REQ_INPD    ��ǰ��Ͻ�û_��ǰ��Ͻ�û
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_GD_WRS_RG_REQ_INPD ;

CREATE TABLE NHVANINF.TB_GD_WRS_RG_REQ_INPD (  
    VAN_C_RQ_NO                                                           VARCHAR2(10)      NOT NULL                  ,
    INPD_NA_WRS_C                                                         VARCHAR2(25)      NOT NULL                  ,
    INPD_QT                                                               NUMBER(10,0)                                ,
    CONSTRAINT PK_TB_GD_WRS_RG_REQ_INPD PRIMARY KEY (VAN_C_RQ_NO,INPD_NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_INPD                          IS '��ǰ��Ͻ�û_��ǰ��Ͻ�û'              ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_INPD.VAN_C_RQ_NO              IS 'VAN��ǰ��û��ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_INPD.INPD_NA_WRS_C            IS '��ǰ�������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_INPD.INPD_QT                  IS '��ǰ����'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_INPD TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_RG_REQ_LG    ��ǰ��Ͻ�û_������ǰ
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_LG                            IS '��ǰ��Ͻ�û_������ǰ'                  ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.VAN_C_RQ_NO                IS 'VAN��ǰ��û��ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_BZPLC                   IS '������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.RQ_NA_WRS_C                IS '��û��ǰ�ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_WRS_C                   IS '��ǰ�ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.STPL_AMN_NA_WRS_C          IS '����ǰ�ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_SPYPL_C                 IS '�������հ���ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.NA_SPYPL_TEAM_C            IS '�ŷ�ó���ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.PLTPE_LYNO                 IS '�ķ�Ʈ������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.PLTPE_SGNO                 IS '�ķ�Ʈ��ܼ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.PLTPE_BOX_CN               IS '�ķ�Ʈ��ڽ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BOX_WT                     IS '�ڽ��߷�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BOX_BULK                   IS '�ڽ�����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.WDTH_LEN                   IS '���α���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.LEN_LEN                    IS '���α���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.WRS_HGHT                   IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BOX_WRS_YN                 IS '�ڽ���ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.BYNG_UPR                   IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_LG.SEL_UPR                    IS '�ǸŴܰ�'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_LG TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_RG_REQ_PRGR    ��ǰ��Ͻ�û_���ް���
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_PRGR                          IS '��ǰ��Ͻ�û_���ް���'                  ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.VAN_C_RQ_NO              IS 'VAN��ǰ��û��ȣ'                        ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.NA_BZPLC                 IS '������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.NA_TEAM_C                IS '���ڵ�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.PRGR_C                   IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.RQ_NA_WRS_C              IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.NA_WRS_C                 IS '��ǰ�ڵ屸���ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.SEL_UPR                  IS '�ǸŴܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.BYNG_UPR                 IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.COMP_FEERT               IS '��ü��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.PHD_FEERT                IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.DDLY_PHD_FEERT           IS '���۹�����������'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.TROT_FEERT               IS 'ȯ�޼�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.AMN_FEERT                IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_PRGR.PY_FDTCN                 IS '���ޱ��ϼ�'                             ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_PRGR TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_RG_REQ_TEMP    ��ǰ����ϰ���û����
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_RG_REQ_TEMP                          IS '��ǰ����ϰ���û����'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.TEMP_SEQ                 IS '�����Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.ROW_SEQ                  IS '����'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_C                 IS '��ǰ�ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_LCLC              IS '��з�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_LCLFNM               IS '��з���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_MCLC              IS '�ߺз�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_MCLFNM               IS '�ߺз���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_SCLC              IS '�Һз�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_SCLFNM               IS '�Һз���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_DTCF_C            IS '���з�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_DTCFNM               IS '���з���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRSNM                    IS '��ǰ��'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_ABR_NM               IS '��ǰ����'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_ENM                  IS '��ǰ������'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_STDNM                IS '�԰�'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.TXT_DSC                  IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.TXT_NM                   IS '�������и�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.SMA_APL_TPC              IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.SMA_APL_TPNM             IS '��������������'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.COMM_WRS_YN              IS '������ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.COMM_WRS_NM              IS '������ǰ���θ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.MFT_NA_TRPL_C            IS '�����ŷ�ó�ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.MFT_NA_TRPL_NM           IS '�����ŷ�ó��'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_TPC                  IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_TPNM                 IS '��ǰ������'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.LIQ_YN                   IS '�ַ���ǰ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.LIQ_NM                   IS '�ַ���ǰ���θ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBT_NA_WRS_C            IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBT_NA_WRS_NM           IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBT_QT                  IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBX_NA_WRS_C            IS '�������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VCBX_NA_WRS_NM           IS '�����ڸ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WHT                      IS '�ܷ�'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UNT_C             IS '����'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UNT_NM            IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_PAK_C             IS '����'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_PAK_NM            IS '�����'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_BRAN_C            IS '�귣���ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_BRAN_NM           IS '�귣���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_CSTD_METC         IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_CSTD_METNM        IS '������ĸ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UZC               IS '�뵵'                                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_UZNM              IS '�뵵��'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.VLD_PRD_CN               IS '��ȿ�Ⱓ'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.DSTR_TER_MRK_DSC         IS '��ȿ�Ⱓ����'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.DSTR_TER_MRK_DSNM        IS '��ȿ�Ⱓ���и�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.BOXPE_AQZ                IS '�ڽ����Լ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_IPO_DSC           IS '���Կ���'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.NA_WRS_IPO_DSNM          IS '���Կ��θ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.RFID_UYN                 IS 'RFID��뿩��'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.RFID_UNM                 IS 'RFID��뿩�θ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.WRS_DTL_EXPL             IS '��ǰ����'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.FSRG_DTM                 IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.FSRGMN_NA_BZPLC          IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_RG_REQ_TEMP.SUCCESS_YN               IS '�ϷῩ��'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_RG_REQ_TEMP TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_PRGR_GOODRSV    ������ǰ�����ݱ����濹��
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_PRGR_GOODRSV                             IS '������ǰ�����ݱ����濹��'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.NA_BZPLC                    IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.NA_TEAM_C                   IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PRGR_C                      IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.NA_WRS_C                    IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.APL_DT                      IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PRGR_DSC                    IS '���ݱ������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.SEL_UPR                     IS '�ǸŴܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.COMP_FEERT                  IS '��ü��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.AMN_FEERT                   IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.TROT_FEERT                  IS 'ȯ�޼�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PHD_FEERT                   IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DDLY_PHD_FEERT              IS '���ۼ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.ECG_SEL_UPR                 IS '�����ǸŴܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.BYNG_UPR                    IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.PY_FDTCN                    IS '���ޱ��ϼ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.ODR_FBID_YN                 IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.ODR_FBID_RSNC               IS '���ֱ��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.CHRG_BUYER_ENO              IS '�����̾�ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.APL_YN                      IS '���뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.FSRG_DTM                    IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.FSRGMN_ENO                  IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.FSRGMN_NA_BZPLC             IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.LSCHG_DTM                   IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.LS_CMENO                    IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.LSCGMN_NA_BZPLC             IS '���������ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DEL_DTM                     IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DLMN_ENO                    IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODRSV.DLMN_NA_BZPLC               IS '�����ڰ������ջ�����ڵ�'               ;

GRANT SELECT ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_PRGR_GOODRSV TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_PRGR_GOOD    ������ǰ�����ݱ��⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_PRGR_GOOD                                IS '������ǰ�����ݱ��⺻'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.NA_BZPLC                       IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.NA_TEAM_C                      IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PRGR_C                         IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.NA_WRS_C                       IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PRGR_DSC                       IS '���ݱ������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.SEL_UPR                        IS '�ǸŴܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.COMP_FEERT                     IS '��ü��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.AMN_FEERT                      IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.TROT_FEERT                     IS 'ȯ�޼�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PHD_FEERT                      IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DDLY_PHD_FEERT                 IS '���ۼ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.ECG_SEL_UPR                    IS '�����ǸŴܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.BYNG_UPR                       IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.PY_FDTCN                       IS '���ޱ��ϼ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.ODR_FBID_YN                    IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.ODR_FBID_RSNC                  IS '���ֱ��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.CHRG_BUYER_ENO                 IS '�����̾�ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.APL_YN                         IS '���뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.FSRG_DTM                       IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.FSRGMN_ENO                     IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.FSRGMN_NA_BZPLC                IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.LSCHG_DTM                      IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.LS_CMENO                       IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.LSCGMN_NA_BZPLC                IS '���������ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DEL_DTM                        IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DLMN_ENO                       IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOOD.DLMN_NA_BZPLC                  IS '�����ڰ������ջ�����ڵ�'               ;

GRANT SELECT ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_PRGR_GOOD TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_PRGR_GOODLOG    ������ǰ�����ݱ��αױ⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_PRGR_GOODLOG                             IS '������ǰ�����ݱ��αױ⺻'               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.NA_BZPLC                    IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.NA_TEAM_C                   IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PRGR_C                      IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.NA_WRS_C                    IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.APL_ED_DT                   IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.APL_ST_DT                   IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PRGR_DSC                    IS '���ݱ������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.SEL_UPR                     IS '�ǸŴܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.COMP_FEERT                  IS '��ü��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.AMN_FEERT                   IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.TROT_FEERT                  IS 'ȯ�޼�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PHD_FEERT                   IS '������������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DDLY_PHD_FEERT              IS '���ۼ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.ECG_SEL_UPR                 IS '�����ǸŴܰ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.BYNG_UPR                    IS '���Դܰ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.PY_FDTCN                    IS '���ޱ��ϼ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.ODR_FBID_YN                 IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.ODR_FBID_RSNC               IS '���ֱ��������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.CHRG_BUYER_ENO              IS '�����̾�ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.APL_YN                      IS '���뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.FSRG_DTM                    IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.FSRGMN_ENO                  IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.FSRGMN_NA_BZPLC             IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.LSCHG_DTM                   IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.LS_CMENO                    IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.LSCGMN_NA_BZPLC             IS '���������ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DEL_DTM                     IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DLMN_ENO                    IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_PRGR_GOODLOG.DLMN_NA_BZPLC               IS '�����ڰ������ջ�����ڵ�'               ;

GRANT SELECT ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_PRGR_GOODLOG TO NHVANWAS WITH GRANT OPTION ; 

--������������������������������������������������������������
--��NHVANINF.TB_GD_EM_EVT_GOOD    ������ǰ����簡��
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_EM_EVT_GOOD                              IS '������ǰ����簡��'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_SQNO                     IS '����Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.NA_WRS_C                     IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.PRGR_C                       IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVTNM                        IS '����'                                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_ST_DT                    IS '����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_ED_DT                    IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_KDC                      IS '��������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_PCS                      IS '������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.EVT_BDPR                     IS '���Ű�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.FSRG_DTM                     IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.FSRGMN_ENO                   IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.FSRGMN_NA_BZPLC              IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.LSCHG_DTM                    IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.LS_CMENO                     IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.LSCGMN_NA_BZPLC              IS '���������ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.DEL_DTM                      IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.DLMN_ENO                     IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_EM_EVT_GOOD.DLMN_NA_BZPLC                IS '�����ڰ������ջ�����ڵ�'               ;

GRANT SELECT ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_EM_EVT_GOOD TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_EVENT_CPN    ��������
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_EVENT_CPN                                IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_KDC                        IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.NA_CPN_C                       IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_NA_WRS_C                    IS '���ΰ������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_SC_NO                      IS '����ȸ����ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_VLD_PRD_ST_DT               IS '������ȿ�Ⱓ��������'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_VLD_PRD_ED_DT               IS '������ȿ�Ⱓ��������'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_WRSNM                      IS '������ǰ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.MNGT_NA_TRPL_C                 IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.MNGT_NA_BZPLC                  IS '�ְ��������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_EFOC_MBDC                  IS '����������ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_DC_TPC                     IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_MED_C                      IS '������ü�ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.CPN_APL_PUC                    IS '��������ż�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_BAS_QT                      IS '���α��ؼ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_BAS_BUY_AM                  IS '���α��ر��űݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.DC_AM                          IS '���αݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.TRT_FEE                        IS '��޼�����'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.MFT_CONM                       IS '������ü��'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.PRC_YN                         IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.RSP_C_CNTN                     IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.EDI_IF_ID                      IS 'EDI�������̽����̵�'                    ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.FSRG_DTM                       IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.LSCHG_DTM                      IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.LSCGMN_NA_BZPLC                IS '���������ڻ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN.LS_CMENO                       IS '���������ڰ��ι�ȣ'                     ;

GRANT SELECT ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_EVENT_CPN TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_GD_EVENT_CPN_TEMP    �������� TEMP
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_EVENT_CPN_TEMP                           IS '�������� TEMP'                          ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.TEMP_SEQ                  IS '�����Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_KDC                   IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.NA_CPN_C                  IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_NA_WRS_C               IS '���ΰ������ջ�ǰ�ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_SC_NO                 IS '����ȸ����ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_VLD_PRD_ST_DT          IS '������ȿ�Ⱓ��������'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_VLD_PRD_ED_DT          IS '������ȿ�Ⱓ��������'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_WRSNM                 IS '������ǰ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.MNGT_NA_TRPL_C            IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.MNGT_NA_BZPLC             IS '�ְ��������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_EFOC_MBDC             IS '����������ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_DC_TPC                IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_MED_C                 IS '������ü�ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.CPN_APL_PUC               IS '��������ż�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_BAS_QT                 IS '���α��ؼ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_BAS_BUY_AM             IS '���α��ر��űݾ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.DC_AM                     IS '���αݾ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.TRT_FEE                   IS '��޼�����'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.MFT_CONM                  IS '������ü��'                             ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.FSRG_DTM                  IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.FSRGMN_NA_BZPLC           IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.LSCHG_DTM                 IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.LSCGMN_NA_BZPLC           IS '���������ڻ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.LS_CMENO                  IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_GD_EVENT_CPN_TEMP.SUCCESS_YN                IS '�ϷῩ��'                               ;

GRANT SELECT ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_EVENT_CPN_TEMP TO NHVANWAS WITH GRANT OPTION ; 

--������������������������������������������������������������
--��NHVANINF.TB_GD_WRS_BS_CM_RG_RQ    ��ǰ��Ͻ�û �⺻
--������������������������������������������������������������
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

COMMENT ON TABLE  NHVANINF.TB_GD_WRS_BS_CM_RG_RQ                          IS '��ǰ��Ͻ�û �⺻'                      ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.NA_C_RQ_NO               IS '���������ڵ��û��ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.BOXPE_DLVG_UPR           IS '�ڽ��糳ǰ�ܰ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.SLAM_PER_FEERT           IS '����״��������'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.PMTN_SPT_PERS            IS '���������ο���'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.WRS_TRT_CMBR_CN          IS '��ǰ��ް�������'                       ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.ASP_SL_CNAM              IS '��������⿩��'                         ;
COMMENT ON COLUMN NHVANINF.TB_GD_WRS_BS_CM_RG_RQ.DEL_YN                   IS '��������'                               ;

GRANT SELECT ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_GD_WRS_BS_CM_RG_RQ TO NHVANWAS WITH GRANT OPTION ; 

