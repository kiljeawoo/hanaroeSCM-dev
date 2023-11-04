--������������������������������������������������������������
--��NHVANINF.TB_TR_DVYAA    ���������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_DVYAA ;

CREATE TABLE NHVANINF.TB_TR_DVYAA (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    TR_NA_TEAM_C                                                          VARCHAR2(2)       NOT NULL                  ,
    DVYAA_C                                                               VARCHAR2(4)       NOT NULL                  ,
    DVYAA_SCF_CNTN                                                        VARCHAR2(200)                               ,
    FZIP                                                                  VARCHAR2(3)                                 ,
    RZIP                                                                  VARCHAR2(3)                                 ,
    ZIP_SQNO                                                              NUMBER(10)                                  ,
    DONGUP                                                                VARCHAR2(80)                                ,
    DONGBW                                                                VARCHAR2(100)                               ,
    ATEL                                                                  VARCHAR2(4)                                 ,
    HTEL                                                                  VARCHAR2(4)                                 ,
    STEL                                                                  VARCHAR2(4)                                 ,
    CHRRNM                                                                VARCHAR2(50)                                ,
    UYN                                                                   CHAR(1)                                     ,
    CONSTRAINT PK_TB_TR_DVYAA PRIMARY KEY (NA_BZPLC,NA_TEAM_C,NA_TRPL_C,TR_NA_TEAM_C,DVYAA_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_DVYAA                                    IS '���������'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.NA_BZPLC                           IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.NA_TEAM_C                          IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.NA_TRPL_C                          IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.TR_NA_TEAM_C                       IS '�ŷ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DVYAA_C                            IS '������ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DVYAA_SCF_CNTN                     IS '�����������'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.FZIP                               IS '���ڸ������ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.RZIP                               IS '���ڸ������ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.ZIP_SQNO                           IS '�����ȣ�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DONGUP                             IS '���̻��ּ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DONGBW                             IS '�������ּ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.ATEL                               IS '��ȭ������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.HTEL                               IS '��ȭ����ȣ'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.STEL                               IS '��ȭ�Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.CHRRNM                             IS '����ڸ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.UYN                                IS '��뿩��'                               ;

GRANT SELECT ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_RGN    �����ڵ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_RGN ;

CREATE TABLE NHVANINF.TB_TR_RGN (  
    NA_RGN_C                                                              VARCHAR2(4)       NOT NULL                  ,
    UP_NA_RGN_C                                                           VARCHAR2(4)                                 ,
    RGN_CNM                                                               VARCHAR2(50)                                ,
    RGN_LVL_C                                                             CHAR(1)                                     ,
    RGN_FZIP                                                              VARCHAR2(3)                                 ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_TR_RGN PRIMARY KEY (NA_RGN_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_RGN                                      IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.NA_RGN_C                             IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.UP_NA_RGN_C                          IS '�����������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.RGN_CNM                              IS '�����ڵ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.RGN_LVL_C                            IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.RGN_FZIP                             IS '�������ڸ������ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.DEL_YN                               IS '��������(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_BIZTPC    ��������⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_BIZTPC ;

CREATE TABLE NHVANINF.TB_TR_BIZTPC (  
    NA_BZ_TPC                                                             VARCHAR2(2)       NOT NULL                  ,
    NA_BZ_TPNM                                                            VARCHAR2(50)                                ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_TR_BIZTPC PRIMARY KEY (NA_BZ_TPC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_BIZTPC                                   IS '��������⺻'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_BIZTPC.NA_BZ_TPC                         IS '�������ջ�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_BIZTPC.NA_BZ_TPNM                        IS '�������ջ��������'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_BIZTPC.DEL_YN                            IS '��������(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_BZPL_TP    ����������ڵ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_BZPL_TP ;

CREATE TABLE NHVANINF.TB_TR_BZPL_TP (  
    BZPL_TPC                                                              VARCHAR2(3)       NOT NULL                  ,
    BZPL_DTI_TPC                                                          VARCHAR2(3)       NOT NULL                  ,
    BZPL_TP_LVL_C                                                         CHAR(1)           NOT NULL                  ,
    BZPL_TPNM                                                             VARCHAR2(50)                                ,
    BZPL_DTI_TPNM                                                         VARCHAR2(50)                                ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_TR_BZPL_TP PRIMARY KEY (BZPL_TPC,BZPL_DTI_TPC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_BZPL_TP                                  IS '����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_TPC                         IS '����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_DTI_TPC                     IS '����弼�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_TP_LVL_C                    IS '��������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_TPNM                        IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_DTI_TPNM                    IS '����弼��������'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.DEL_YN                           IS '��������(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_TRNREL_REQ    �ŷ������û�⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_TRNREL_REQ ;

CREATE TABLE NHVANINF.TB_TR_TRNREL_REQ (  
    RQR_NA_TRPL_C                                                         VARCHAR2(13)      NOT NULL                  ,
    RQR_NA_TEAM_C                                                         VARCHAR2(2)       NOT NULL                  ,
    RQR_DT                                                                CHAR(8)           NOT NULL                  ,
    TR_RQR_SQNO                                                           NUMBER(10,0)      NOT NULL                  ,
    CSER_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    CSER_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    SPLR_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    BZ_METH_DSC                                                           VARCHAR2(2)                                 ,
    CSER_ADJPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    CSER_ADJPL_NA_TEAM_C                                                  VARCHAR2(2)                                 ,
    CSER_CTR_CHRRNM                                                       VARCHAR2(10)                                ,
    CSER_CTR_CHRR_TELNO                                                   VARCHAR2(14)                                ,
    CSER_CTR_CHRR_MPNO                                                    VARCHAR2(14)                                ,
    SPYPL_HOFF_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    SPLR_BNK_C                                                            VARCHAR2(2)                                 ,
    SPLR_STL_ACNO                                                         CHAR(17)                                    ,
    SPLR_DPRNM                                                            VARCHAR2(50)                                ,
    SPLR_CTR_CHRRNM                                                       VARCHAR2(10)                                ,
    SPLR_CTR_CHRR_TELNO                                                   VARCHAR2(14)                                ,
    SPLR_CTR_CHRR_MPNO                                                    VARCHAR2(14)                                ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    CTR_ST_DT                                                             CHAR(8)                                     ,
    CTR_ED_DT                                                             CHAR(8)                                     ,
    CTR_STOP_DT                                                           CHAR(8)                                     ,
    CTR_CLO_DT                                                            CHAR(8)                                     ,
    CTR_CLO_RSNC                                                          VARCHAR2(2)                                 ,
    TR_STOP_RSNC                                                          VARCHAR2(2)                                 ,
    ROTS_FLEX_PR_APL_YN                                                   CHAR(1)                                     ,
    BYNG_UPR_MOD_YN                                                       CHAR(1)                                     ,
    NA_ODR_FBID_RSNC                                                      VARCHAR2(2)                                 ,
    ODR_FBID_DT                                                           CHAR(8)                                     ,
    ODRPL_BUYER_ENO                                                       CHAR(9)                                     ,
    NA_RVO_FBID_RSNC                                                      VARCHAR2(2)                                 ,
    RVO_FBID_DT                                                           CHAR(8)                                     ,
    LDTM_DDS                                                              NUMBER(3)                                   ,
    RGD_AMN_DSC                                                           CHAR(1)                                     ,
    NA_PMI_SBJ_DSC                                                        VARCHAR2(3)                                 ,
    STL_FDT_BASCD                                                         CHAR(1)                                     ,
    SSDYRT_BASCD                                                          CHAR(1)                                     ,
    SSDYRT                                                                NUMBER(10,2)                                ,
    SSDY_BAS_AM                                                           NUMBER(15,2)                                ,
    DDLY_SSDYRT                                                           NUMBER(5,2)                                 ,
    SSDY_PY_PTM_DSC                                                       CHAR(1)                                     ,
    BKG_CHG_DT                                                            CHAR(8)                                     ,
    TR_REL_RG_RQR_DSC                                                     VARCHAR2(2)                                 ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    APVMN_ENO                                                             VARCHAR2(9)                                 ,
    APV_NA_BZPLC                                                          VARCHAR2(13)                                ,
    APV_NA_TEAM_C                                                         VARCHAR2(2)                                 ,
    APV_DT                                                                CHAR(8)                                     ,
    REJ_RSNCTT                                                            VARCHAR2(100)                               ,
    TR_REL_PRG_STSC                                                       VARCHAR2(2)                                 ,
    PRC_YN                                                                CHAR(1)           DEFAULT  'N' NOT NULL     ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_TR_TRNREL_REQ PRIMARY KEY (RQR_NA_TRPL_C,RQR_NA_TEAM_C,RQR_DT,TR_RQR_SQNO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_TRNREL_REQ                               IS '�ŷ������û�⺻'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RQR_NA_TRPL_C                 IS '��û�������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RQR_NA_TEAM_C                 IS '��û�����������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RQR_DT                        IS '��û����'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_RQR_SQNO                   IS '�ŷ���û�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_NA_TRPL_C                IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_NA_TEAM_C                IS '�����ڰ����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_NA_TRPL_C                IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_TPC                  IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.BZ_METH_DSC                   IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_ADJPL_NA_TRPL_C          IS '����������ó�������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_ADJPL_NA_TEAM_C          IS '����������ó�����������ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_CHRRNM               IS '�����ڰ�����ڸ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_CHRR_TELNO           IS '�����ڰ��������ȭ��ȣ'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_CHRR_MPNO            IS '�����ڰ�������޴���ȭ��ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPYPL_HOFF_NA_TRPL_C          IS '����ó����������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_BNK_C                    IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_STL_ACNO                 IS '�����ڰ������¹�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_DPRNM                    IS '�����ڿ����ָ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_CTR_CHRRNM               IS '�����ڰ�����ڸ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_CTR_CHRR_TELNO           IS '�����ڰ��������ȭ��ȣ'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_CTR_CHRR_MPNO            IS '�����ڰ�������޴���ȭ��ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPY_TPC                       IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_ST_DT                     IS '����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_ED_DT                     IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_STOP_DT                   IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_CLO_DT                    IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_CLO_RSNC                  IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_STOP_RSNC                  IS '�ŷ����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.ROTS_FLEX_PR_APL_YN           IS '����ź�°������뿩��'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.BYNG_UPR_MOD_YN               IS '���Դܰ���������'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.NA_ODR_FBID_RSNC              IS '�������չ��ֱ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.ODR_FBID_DT                   IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.ODRPL_BUYER_ENO               IS '����ó���̾�ι�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.NA_RVO_FBID_RSNC              IS '�������ռ��ֱ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RVO_FBID_DT                   IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.LDTM_DDS                      IS '����Ÿ���ϼ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RGD_AMN_DSC                   IS '��ǰ���������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.NA_PMI_SBJ_DSC                IS '�������վ������񱸺��ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.STL_FDT_BASCD                 IS '�������ϱ����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDYRT_BASCD                  IS '����ݷ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDYRT                        IS '����ݷ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDY_BAS_AM                   IS '����ݱ��رݾ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.DDLY_SSDYRT                   IS '��������ݷ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDY_PY_PTM_DSC               IS '��������޽��������ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.BKG_CHG_DT                    IS '���ຯ������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_REL_RG_RQR_DSC             IS '�ŷ������Ͽ�û�����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.FSRG_DTM                      IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.LSCHG_DTM                     IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.LS_CMENO                      IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APVMN_ENO                     IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APV_NA_BZPLC                  IS '���ΰ������ջ�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APV_NA_TEAM_C                 IS '���ΰ����������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APV_DT                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.REJ_RSNCTT                    IS '�ΰ��������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_REL_PRG_STSC               IS '�ŷ�������������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.PRC_YN                        IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RSP_C_CNTN                    IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.EDI_IF_ID                     IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_HANARO_REQ_M    �ϳ��θ�Ʈ�ŷ������û�⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_HANARO_REQ_M ;

CREATE TABLE NHVANINF.TB_TR_HANARO_REQ_M (  
    VAN_RQ_NO                                                             VARCHAR2(20)      NOT NULL                  ,
    CRQRTRPL                                                              VARCHAR2(13)                                ,
    CRQRTEAM                                                              VARCHAR2(2)                                 ,
    CRQRMNENO                                                             VARCHAR2(9)                                 ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    SPLR_NA_TRPL_C                                                        VARCHAR2(13)                                ,
    SPLR_NA_TEAM_C                                                        VARCHAR2(2)                                 ,
    CSER_CTR_TPC                                                          CHAR(1)                                     ,
    SPY_TPC                                                               VARCHAR2(2)                                 ,
    NA_WRS_LCLC                                                           VARCHAR2(3)                                 ,
    NA_WRS_MCLC                                                           VARCHAR2(3)                                 ,
    MNGT_NA_TR_TPC                                                        CHAR(1)                                     ,
    CSER_TR_REL_AMNNO                                                     NUMBER(10)                                  ,
    PRC_YN                                                                CHAR(1)           DEFAULT  'N' NOT NULL     ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_TR_HANARO_REQ_M PRIMARY KEY (VAN_RQ_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_HANARO_REQ_M                             IS '�ϳ��θ�Ʈ�ŷ������û�⺻'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.VAN_RQ_NO                   IS 'VAN��û��ȣ'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CRQRTRPL                    IS '��û �����'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CRQRTEAM                    IS '��û ��'                                ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CRQRMNENO                   IS '��û ���'                              ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.MNGT_NA_TRPL_C              IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.MNGT_NA_TEAM_C              IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.SPLR_NA_TRPL_C              IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.SPLR_NA_TEAM_C              IS '�����ڰ����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CSER_CTR_TPC                IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.SPY_TPC                     IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.NA_WRS_LCLC                 IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.NA_WRS_MCLC                 IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.MNGT_NA_TR_TPC              IS '�ְ��������հŷ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CSER_TR_REL_AMNNO           IS '�����ڰ�����ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.PRC_YN                      IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.RSP_C_CNTN                  IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.EDI_IF_ID                   IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_HANARO_REQ_D    �ϳ��θ�Ʈ�ŷ������û�����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_HANARO_REQ_D ;

CREATE TABLE NHVANINF.TB_TR_HANARO_REQ_D (  
    VAN_RQ_NO                                                             VARCHAR2(20)      NOT NULL                  ,
    CRQRTRPL                                                              VARCHAR2(13)      NOT NULL                  ,
    CRQRTEAM                                                              VARCHAR2(2)       NOT NULL                  ,
    SPLR_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    SPLR_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    CSER_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    CSER_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    MNGT_TR_REL_AMNNO                                                     NUMBER(10)                                  ,
    CONSTRAINT PK_TB_TR_HANARO_REQ_D PRIMARY KEY (VAN_RQ_NO,SPLR_NA_TRPL_C,SPLR_NA_TEAM_C,CSER_NA_TRPL_C,CSER_NA_TEAM_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_HANARO_REQ_D                             IS '�ϳ��θ�Ʈ�ŷ������û�����'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.VAN_RQ_NO                   IS 'VAN��û��ȣ'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CRQRTRPL                    IS '��û �����'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CRQRTEAM                    IS '��û ��'                                ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.SPLR_NA_TRPL_C              IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.SPLR_NA_TEAM_C              IS '�����ڰ����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CSER_NA_TRPL_C              IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CSER_NA_TEAM_C              IS '�����ڰ����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.MNGT_TR_REL_AMNNO           IS '�ְ�������ȣ'                           ;

GRANT SELECT ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_TRNREL    �ŷ�����⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_TRNREL ;

CREATE TABLE NHVANINF.TB_TR_TRNREL (  
    CSER_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    CSER_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    SPLR_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    SPLR_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    CSER_CTR_TPC                                                          CHAR(1)           NOT NULL                  ,
    SPY_TPC                                                               VARCHAR2(2)       NOT NULL                  ,
    NA_WRS_LCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    NA_WRS_MCLC                                                           VARCHAR2(3)       NOT NULL                  ,
    MNGT_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    MNGT_NA_TEAM_C                                                        VARCHAR2(2)       NOT NULL                  ,
    MNGT_NA_TR_TPC                                                        CHAR(1)           NOT NULL                  ,
    BZ_METH_DSC                                                           VARCHAR2(2)                                 ,
    CSER_NA_USR_SYS_KDC                                                   VARCHAR2(2)                                 ,
    CSER_NAAC_DSC                                                         CHAR(1)                                     ,
    SPLR_NA_USR_SYS_KDC                                                   VARCHAR2(2)                                 ,
    SPLR_NAAC_DSC                                                         CHAR(1)                                     ,
    CSER_ADJPL_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    CSER_ADJPL_NA_TEAM_C                                                  VARCHAR2(2)                                 ,
    CSER_CTR_CHRRNM                                                       VARCHAR2(50)                                ,
    CSER_CTR_CHRR_TELNO                                                   VARCHAR2(14)                                ,
    CSER_CTR_CHRR_MPNO                                                    VARCHAR2(14)                                ,
    SPLR_ADJPL_NA_TRPL_C                                                  VARCHAR2(13)      NOT NULL                  ,
    SPLR_ADJPL_NA_TEAM_C                                                  VARCHAR2(2)       NOT NULL                  ,
    SPYPL_HOFF_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    SPLR_BNK_C                                                            VARCHAR2(2)                                 ,
    SPLR_STL_ACNO                                                         VARCHAR2(17)                                ,
    SPLR_DPRNM                                                            VARCHAR2(50)                                ,
    SPLR_CTR_CHRRNM                                                       VARCHAR2(50)                                ,
    SPLR_CTR_CHRR_TELNO                                                   VARCHAR2(14)                                ,
    SPLR_CTR_CHRR_MPNO                                                    VARCHAR2(14)                                ,
    CTR_ST_DT                                                             CHAR(8)                                     ,
    CTR_ED_DT                                                             CHAR(8)                                     ,
    CTR_STOP_DT                                                           CHAR(8)                                     ,
    CTR_CLO_DT                                                            CHAR(8)                                     ,
    CTR_CLO_RSNC                                                          VARCHAR2(2)                                 ,
    TR_STOP_RSNC                                                          VARCHAR2(2)                                 ,
    PRGR_DSC                                                              CHAR(1)                                     ,
    PRGR_C                                                                VARCHAR2(4)                                 ,
    ROTS_FLEX_PR_APL_YN                                                   CHAR(1)                                     ,
    BYNG_UPR_MOD_YN                                                       CHAR(1)                                     ,
    NA_ODR_FBID_RSNC                                                      VARCHAR2(2)                                 ,
    ODR_FBID_DT                                                           CHAR(8)                                     ,
    ODRPL_BUYER_ENO                                                       VARCHAR2(9)                                 ,
    NA_RVO_FBID_RSNC                                                      VARCHAR2(2)                                 ,
    RVO_FBID_DT                                                           CHAR(8)                                     ,
    RVOPL_BUYER_ENO                                                       VARCHAR2(9)                                 ,
    LDTM_DDS                                                              NUMBER(3,0)                                 ,
    RGD_AMN_DSC                                                           CHAR(1)                                     ,
    NA_PMI_SBJ_DSC                                                        VARCHAR2(3)                                 ,
    STL_FDT_BASCD                                                         CHAR(1)                                     ,
    SSDYRT_BASCD                                                          CHAR(1)                                     ,
    SSDYRT                                                                NUMBER(10,2)                                ,
    SSDY_BAS_AM                                                           NUMBER(15,2)                                ,
    DDLY_SSDYRT                                                           NUMBER(5,2)                                 ,
    SSDY_PY_PTM_DSC                                                       CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    LSCHG_DTM                                                             DATE                                        ,
    DEL_DTM                                                               DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    PY_FDTCN                                                              NUMBER(10)                                  ,
    CONSTRAINT PK_TB_TR_TRNREL PRIMARY KEY (CSER_NA_TRPL_C,CSER_NA_TEAM_C,SPLR_NA_TRPL_C,SPLR_NA_TEAM_C,CSER_CTR_TPC,SPY_TPC,NA_WRS_LCLC,NA_WRS_MCLC,MNGT_NA_TRPL_C,MNGT_NA_TEAM_C,MNGT_NA_TR_TPC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_TRNREL                                   IS '�ŷ�����⺻'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NA_TRPL_C                    IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NA_TEAM_C                    IS '�����ڰ����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NA_TRPL_C                    IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NA_TEAM_C                    IS '�����ڰ����������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_TPC                      IS '�����ڰ�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPY_TPC                           IS '���������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_WRS_LCLC                       IS '�������ջ�ǰ��з��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_WRS_MCLC                       IS '�������ջ�ǰ�ߺз��ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.MNGT_NA_TRPL_C                    IS '�ְ��������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.MNGT_NA_TEAM_C                    IS '�ְ������������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.MNGT_NA_TR_TPC                    IS '�ְ��������հŷ������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.BZ_METH_DSC                       IS '�����ı����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NA_USR_SYS_KDC               IS '�����ڰ������ջ���ڽý��������ڵ�'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NAAC_DSC                     IS '�������߾�ȸ���ձ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NA_USR_SYS_KDC               IS '�����ڰ������ջ���ڽý��������ڵ�'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NAAC_DSC                     IS '�������߾�ȸ���ձ����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_ADJPL_NA_TRPL_C              IS '����������ó�������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_ADJPL_NA_TEAM_C              IS '����������ó�����������ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_CHRRNM                   IS '�����ڰ�����ڸ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_CHRR_TELNO               IS '�����ڰ��������ȭ��ȣ'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_CHRR_MPNO                IS '�����ڰ�������޴���ȭ��ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_ADJPL_NA_TRPL_C              IS '����������ó�������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_ADJPL_NA_TEAM_C              IS '����������ó�����������ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPYPL_HOFF_NA_TRPL_C              IS '����ó����������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_BNK_C                        IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_STL_ACNO                     IS '�����ڰ������¹�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_DPRNM                        IS '�����ڿ����ָ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_CTR_CHRRNM                   IS '�����ڰ�����ڸ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_CTR_CHRR_TELNO               IS '�����ڰ��������ȭ��ȣ'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_CTR_CHRR_MPNO                IS '�����ڰ�������޴���ȭ��ȣ'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_ST_DT                         IS '����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_ED_DT                         IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_STOP_DT                       IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_CLO_DT                        IS '�����������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_CLO_RSNC                      IS '������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.TR_STOP_RSNC                      IS '�ŷ����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.PRGR_DSC                          IS '���ݱ������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.PRGR_C                            IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.ROTS_FLEX_PR_APL_YN               IS '����ź�°������뿩��'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.BYNG_UPR_MOD_YN                   IS '���Դܰ���������'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_ODR_FBID_RSNC                  IS '�������չ��ֱ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.ODR_FBID_DT                       IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.ODRPL_BUYER_ENO                   IS '����ó���̾�ι�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_RVO_FBID_RSNC                  IS '�������ռ��ֱ��������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.RVO_FBID_DT                       IS '���ֱ�������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.RVOPL_BUYER_ENO                   IS '����ó���̾�ι�ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.LDTM_DDS                          IS '����Ÿ���ϼ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.RGD_AMN_DSC                       IS '��ǰ���������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_PMI_SBJ_DSC                    IS '�������վ������񱸺��ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.STL_FDT_BASCD                     IS '�������ϱ����ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDYRT_BASCD                      IS '����ݷ������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDYRT                            IS '����ݷ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDY_BAS_AM                       IS '����ݱ��رݾ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.DDLY_SSDYRT                       IS '��������ݷ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDY_PY_PTM_DSC                   IS '��������޽��������ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.FSRG_DTM                          IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.LSCHG_DTM                         IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.DEL_DTM                           IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.LS_CMENO                          IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.PY_FDTCN                          IS '���ޱ���'                               ;

GRANT SELECT ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_FLEX_REQ_M    ź�°��ݾ�ü�ŷ������û�⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_FLEX_REQ_M ;

CREATE TABLE NHVANINF.TB_TR_FLEX_REQ_M (  
    VAN_RQ_NO                                                             VARCHAR2(20)      NOT NULL                  ,
    CRQRTRPL                                                              VARCHAR2(13)      NOT NULL                  ,
    CRQRTEAM                                                              VARCHAR2(2)       NOT NULL                  ,
    CRQRMNENO                                                             VARCHAR2(9)       NOT NULL                  ,
    T1_CSER_NA_TRPL_C                                                     VARCHAR2(13)                                ,
    T1_CSER_NA_TEAM_C                                                     VARCHAR2(2)                                 ,
    T1_SPLR_NA_TRPL_C                                                     VARCHAR2(13)                                ,
    T1_SPLR_NA_TEAM_C                                                     VARCHAR2(2)                                 ,
    T1_CSER_CTR_TPC                                                       CHAR(1)                                     ,
    T1_SPY_TPC                                                            VARCHAR2(2)                                 ,
    T1_MNGT_NA_TRPL_C                                                     VARCHAR2(13)                                ,
    T1_MNGT_NA_TEAM_C                                                     VARCHAR2(2)                                 ,
    T1_MNGT_NA_TR_TPC                                                     CHAR(1)                                     ,
    T1_NA_WRS_LCLC                                                        VARCHAR2(3)                                 ,
    T1_NA_WRS_MCLC                                                        VARCHAR2(3)                                 ,
    T1_CSER_TR_REL_AMNNO                                                  NUMBER(10)                                  ,
    T2_CSER_NA_TRPL_C                                                     VARCHAR2(13)                                ,
    T2_CSER_NA_TEAM_C                                                     VARCHAR2(2)                                 ,
    T2_SPLR_NA_TRPL_C                                                     VARCHAR2(13)                                ,
    T2_SPLR_NA_TEAM_C                                                     VARCHAR2(2)                                 ,
    T2_CSER_CTR_TPC                                                       CHAR(1)                                     ,
    T2_SPY_TPC                                                            VARCHAR2(2)                                 ,
    T2_MNGT_NA_TRPL_C                                                     VARCHAR2(13)                                ,
    T2_MNGT_NA_TEAM_C                                                     VARCHAR2(2)                                 ,
    T2_MNGT_NA_TR_TPC                                                     CHAR(1)                                     ,
    T2_NA_WRS_LCLC                                                        VARCHAR2(3)                                 ,
    T2_NA_WRS_MCLC                                                        VARCHAR2(3)                                 ,
    T2_CSER_TR_REL_AMNNO                                                  NUMBER(10)                                  ,
    PRC_YN                                                                CHAR(1)           DEFAULT  'N' NOT NULL     ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_TR_FLEX_REQ_M PRIMARY KEY (VAN_RQ_NO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_FLEX_REQ_M                               IS 'ź�°��ݾ�ü�ŷ������û�⺻'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.VAN_RQ_NO                     IS 'VAN��û��ȣ'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.CRQRTRPL                      IS '��û �����'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.CRQRTEAM                      IS '��û ��'                                ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.CRQRMNENO                     IS '��û ���'                              ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_NA_TRPL_C             IS 'Ÿ��1_�����ڰ������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_NA_TEAM_C             IS 'Ÿ��1_�����ڰ����������ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_SPLR_NA_TRPL_C             IS 'Ÿ��1_�����ڰ������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_SPLR_NA_TEAM_C             IS 'Ÿ��1_�����ڰ����������ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_CTR_TPC               IS 'Ÿ��1_�����ڰ�������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_SPY_TPC                    IS 'Ÿ��1_���������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_MNGT_NA_TRPL_C             IS 'Ÿ��1_�ְ��������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_MNGT_NA_TEAM_C             IS 'Ÿ��1_�ְ������������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_MNGT_NA_TR_TPC             IS 'Ÿ��1_�ְ��������հŷ������ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_NA_WRS_LCLC                IS 'Ÿ��1_�������ջ�ǰ��з��ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_NA_WRS_MCLC                IS 'Ÿ��1_�������ջ�ǰ�ߺз��ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_TR_REL_AMNNO          IS 'Ÿ��1_�����ڰ�����ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_NA_TRPL_C             IS 'Ÿ��2_�����ڰ������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_NA_TEAM_C             IS 'Ÿ��2_�����ڰ����������ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_SPLR_NA_TRPL_C             IS 'Ÿ��2_�����ڰ������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_SPLR_NA_TEAM_C             IS 'Ÿ��2_�����ڰ����������ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_CTR_TPC               IS 'Ÿ��2_�����ڰ�������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_SPY_TPC                    IS 'Ÿ��2_���������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_MNGT_NA_TRPL_C             IS 'Ÿ��2_�ְ��������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_MNGT_NA_TEAM_C             IS 'Ÿ��2_�ְ������������ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_MNGT_NA_TR_TPC             IS 'Ÿ��2_�ְ��������հŷ������ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_NA_WRS_LCLC                IS 'Ÿ��2_�������ջ�ǰ��з��ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_NA_WRS_MCLC                IS 'Ÿ��2_�������ջ�ǰ�ߺз��ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_TR_REL_AMNNO          IS 'Ÿ��2_�����ڰ�����ȣ'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.PRC_YN                        IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.RSP_C_CNTN                    IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.EDI_IF_ID                     IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_FLEX_REQ_D    ź�°��ݾ�ü�ŷ������û�����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_FLEX_REQ_D ;

CREATE TABLE NHVANINF.TB_TR_FLEX_REQ_D (  
    VAN_RQ_NO                                                             VARCHAR2(20)      NOT NULL                  ,
    CNGTRPL                                                               VARCHAR(13)       NOT NULL                  ,
    CNGTEAM                                                               VARCHAR(2)        NOT NULL                  ,
    CONSTRAINT PK_TB_TR_FLEX_REQ_D PRIMARY KEY (VAN_RQ_NO,CNGTRPL,CNGTEAM) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_FLEX_REQ_D                               IS 'ź�°��ݾ�ü�ŷ������û�����'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_D.VAN_RQ_NO                     IS 'VAN��û��ȣ'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_D.CNGTRPL                       IS '����ó'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_D.CNGTEAM                       IS '����ó��'                               ;

GRANT SELECT ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_TRPL_CIF    �ŷ�ó�⺻&CIF
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_TRPL_CIF ;

CREATE TABLE NHVANINF.TB_TR_TRPL_CIF (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_TRPL_DSC                                                           VARCHAR2(2)       NOT NULL                  ,
    NAAC_DSC                                                              CHAR(1)           NOT NULL                  ,
    CLNTNM                                                                VARCHAR2(200)     NOT NULL                  ,
    TRPL_ABR_NM                                                           VARCHAR2(200)                               ,
    NA_MBCO_DSC                                                           CHAR(1)           NOT NULL                  ,
    UP_NA_TRPL_C                                                          VARCHAR2(13)                                ,
    FZIP                                                                  VARCHAR2(3)                                 ,
    RZIP                                                                  VARCHAR2(3)                                 ,
    ZIP_SQNO                                                              NUMBER(10)                                  ,
    DONGUP                                                                VARCHAR2(300)                               ,
    DONGBW                                                                VARCHAR2(100)                               ,
    NA_RGN_C                                                              VARCHAR2(4)       NOT NULL                  ,
    TEL_NAT_NO                                                            VARCHAR2(3)                                 ,
    ATEL                                                                  VARCHAR2(4)                                 ,
    HTEL                                                                  VARCHAR2(4)                                 ,
    STEL                                                                  VARCHAR2(4)                                 ,
    FAX_RGNO                                                              VARCHAR2(4)                                 ,
    HFAX                                                                  VARCHAR2(4)                                 ,
    FAX_SQNO                                                              VARCHAR2(4)                                 ,
    MPSVNO                                                                VARCHAR2(4)                                 ,
    MPHNO                                                                 VARCHAR2(4)                                 ,
    MPSQNO                                                                VARCHAR2(4)                                 ,
    FMACH_PATS_TRT_YN                                                     CHAR(1)           NOT NULL                  ,
    NA_BZPL_TXBZ_RPT_FORM_C                                               CHAR(1)                                     ,
    NA_USR_SYS_KDC                                                        VARCHAR2(2)                                 ,
    ELT_TXBIL_UYN                                                         CHAR(1)                                     ,
    TR_STOP_YN                                                            CHAR(1)           NOT NULL                  ,
    TR_STOP_RSNC                                                          VARCHAR2(2)                                 ,
    TR_STOP_DT                                                            CHAR(8)                                     ,
    COPNO_CIF_NO                                                          CHAR(13)                                    ,
    REPMNM                                                                VARCHAR2(200)                               ,
    BZCCNM                                                                VARCHAR2(60)                                ,
    BZTPNM                                                                VARCHAR2(50)                                ,
    LIQ_SEL_RPT_NO                                                        VARCHAR2(9)                                 ,
    LIQ_WHSL_COMP_C                                                       CHAR(1)                                     ,
    LIQ_RTL_COMP_C                                                        CHAR(1)                                     ,
    NA_TXBZ_DSC                                                           CHAR(1)                                     ,
    BIZ_NUMBER                                                            VARCHAR2(13)                                ,
    CHG_YN                                                                CHAR(1)                                     ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LS_NA_BZPLC                                                           VARCHAR2(13)                                ,
    PRC_YN                                                                CHAR(1)           DEFAULT  'N' NOT NULL     ,
    RSP_C_CNTN                                                            VARCHAR2(200)                               ,
    EDI_IF_ID                                                             VARCHAR2(64)                                ,
    CONSTRAINT PK_TB_TR_TRPL_CIF PRIMARY KEY (NA_TRPL_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_TRPL_CIF                                 IS '�ŷ�ó�⺻&CIF'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_TRPL_C                       IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_TRPL_DSC                     IS '�������հŷ�ó�����ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NAAC_DSC                        IS '�߾�ȸ���ձ����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.CLNTNM                          IS '�ŷ�ó��'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TRPL_ABR_NM                     IS '�ŷ�ó����'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_MBCO_DSC                     IS '�������պ����籸���ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.UP_NA_TRPL_C                    IS '�����������հŷ�ó�ڵ�'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FZIP                            IS '���ڸ������ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.RZIP                            IS '���ڸ������ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.ZIP_SQNO                        IS '�����ȣ�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.DONGUP                          IS '���̻��ּ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.DONGBW                          IS '�������ּ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_RGN_C                        IS '�������������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TEL_NAT_NO                      IS '��ȭ������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.ATEL                            IS '��ȭ������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.HTEL                            IS '��ȭ����ȣ'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.STEL                            IS '��ȭ�Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FAX_RGNO                        IS '�ѽ�������ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.HFAX                            IS '�ѽ�����ȣ'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FAX_SQNO                        IS '�ѽ��Ϸù�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.MPSVNO                          IS '�޴���ȭ���񽺹�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.MPHNO                           IS '�޴���ȭ����ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.MPSQNO                          IS '�޴���ȭ�Ϸù�ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FMACH_PATS_TRT_YN               IS '�����ǰ��޿���'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_BZPL_TXBZ_RPT_FORM_C         IS '�������ջ���弼���Ű������ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_USR_SYS_KDC                  IS '�������ջ���ڽý��������ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.ELT_TXBIL_UYN                   IS '���ڼ��ݰ�꼭��뿩��'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TR_STOP_YN                      IS '�ŷ���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TR_STOP_RSNC                    IS '�ŷ����������ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TR_STOP_DT                      IS '�ŷ���������'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.COPNO_CIF_NO                    IS '���ε�Ϲ�ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.REPMNM                          IS '��ǥ�ڸ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.BZCCNM                          IS '�����ڵ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.BZTPNM                          IS '���¸�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LIQ_SEL_RPT_NO                  IS '�ַ��ǸŽŰ��ȣ'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LIQ_WHSL_COMP_C                 IS '�ַ����ž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LIQ_RTL_COMP_C                  IS '�ַ��Ҹž�ü�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_TXBZ_DSC                     IS '�������ռ��������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.BIZ_NUMBER                      IS '����ڵ�Ϲ�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.CHG_YN                          IS '���濩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LS_CMENO                        IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LS_NA_BZPLC                     IS '���������ڻ�����ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.PRC_YN                          IS '�������ۿ���'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.RSP_C_CNTN                      IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.EDI_IF_ID                       IS 'EDI�������̽����̵�'                    ;

GRANT SELECT ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_TR_TRPL_PRGR    �ŷ�ó�����ݱ��⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_TR_TRPL_PRGR ;

CREATE TABLE NHVANINF.TB_TR_TRPL_PRGR (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    NA_BYNG_SLPL_DSC                                                      CHAR(1)           NOT NULL                  ,
    NA_BZ_TPC                                                             VARCHAR2(2)       NOT NULL                  ,
    PRGR_C                                                                VARCHAR2(4)                                 ,
    JURD_PHDCT_NA_TRPL_C                                                  VARCHAR2(13)                                ,
    ROTS_FLEX_PR_APL_YN                                                   CHAR(1)                                     ,
    ETMTR_BZ_YN                                                           CHAR(1)                                     ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    FSRGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    LSCHG_DTM                                                             DATE                                        ,
    LS_CMENO                                                              VARCHAR2(9)                                 ,
    LSCGMN_NA_BZPLC                                                       VARCHAR2(13)                                ,
    DEL_DTM                                                               DATE                                        ,
    DLMN_ENO                                                              VARCHAR2(9)                                 ,
    DLMN_NA_BZPLC                                                         VARCHAR2(13)                                ,
    BYNG_UPR_MOD_YN                                                       CHAR(1)                                     ,
    NODR_BYNG_PSB_YN                                                      CHAR(1)                                     ,
    GRS_SOJU_X_YN                                                         CHAR(1)                                     ,
    SELPR_INTG_AMN_YN                                                     CHAR(1)                                     ,
    SELPR_INTG_LSCHG_DTM                                                  DATE                                        ,
    SELPR_INTG_LS_CMENO                                                   VARCHAR2(9)                                 ,
    SELPR_INTG_LSCGMN_NA_BZPLC                                            VARCHAR2(13)                                ,
    LIQ_INF_US_CNCL_DSC                                                   CHAR(1)                                     ,
    BEAR_TRT_C                                                            CHAR(2)                                     ,
    SOJU_TRT_C                                                            CHAR(2)                                     ,
    YANGJU_TRT_C                                                          CHAR(2)                                     ,
    WINE_TRT_C                                                            CHAR(2)                                     ,
    MINSOK_TRT_C                                                          CHAR(2)                                     ,
    ROGO_INTG_AMN_R1_YN                                                   CHAR(1)                                     ,
    ROGO_INTG_AMN_R2_YN                                                   CHAR(1)                                     ,
    SCTR_BYNG_AMN_YN                                                      CHAR(1)                                     ,
    CONSTRAINT PK_TB_TR_TRPL_PRGR PRIMARY KEY (NA_TRPL_C,NA_BYNG_SLPL_DSC,NA_BZ_TPC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_TRPL_PRGR                                IS '�ŷ�ó�����ݱ��⺻'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NA_TRPL_C                      IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NA_BYNG_SLPL_DSC               IS '�������ո��Ը���ó�����ڵ�'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NA_BZ_TPC                      IS '�������ջ�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.PRGR_C                         IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.JURD_PHDCT_NA_TRPL_C           IS '���ҹ������Ͱ������հŷ�ó�ڵ�'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ROTS_FLEX_PR_APL_YN            IS '����ź�°������뿩��'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ETMTR_BZ_YN                    IS '������������'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.FSRG_DTM                       IS '���ʵ���Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.FSRGMN_ENO                     IS '���ʵ���ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.FSRGMN_NA_BZPLC                IS '���ʵ���ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LSCHG_DTM                      IS '���������Ͻ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LS_CMENO                       IS '���������ڰ��ι�ȣ'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LSCGMN_NA_BZPLC                IS '���������ڰ������ջ�����ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.DEL_DTM                        IS '�����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.DLMN_ENO                       IS '�����ڰ��ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.DLMN_NA_BZPLC                  IS '�����ڰ������ջ�����ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.BYNG_UPR_MOD_YN                IS '���Դܰ� ��������(0:�Ұ�, 1: ����)'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NODR_BYNG_PSB_YN               IS '�����ָ��� ���ɿ���(0:�Ұ�, 1: ����)'   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.GRS_SOJU_X_YN                  IS '������ֹ������͹�ۿ���'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_AMN_YN              IS '�ǸŰ����հ�������'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_LSCHG_DTM           IS '�������մ�󿩺κ�������'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_LS_CMENO            IS '�������մ�󿩺κ�����'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_LSCGMN_NA_BZPLC     IS '�������մ�󿩺κ�������'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LIQ_INF_US_CNCL_DSC            IS '�ַ������̿�ü�ᱸ���ڵ� 0.���ƴ�1.�� 2.��';
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.BEAR_TRT_C                     IS '��������ڵ� 01:��� NULL:�����'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SOJU_TRT_C                     IS '��������ڵ� 02:��� NULL:�����'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.YANGJU_TRT_C                   IS '��������ڵ� 03:��� NULL:�����'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.WINE_TRT_C                     IS '��������ڵ� 04:��� NULL:�����'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.MINSOK_TRT_C                   IS '�μ�������ڵ� 05:��� NULL:�����'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ROGO_INTG_AMN_R1_YN            IS '���������հ���R1����'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ROGO_INTG_AMN_R2_YN            IS '���������հ���R2����'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SCTR_BYNG_AMN_YN               IS 'Ư����԰�������'                       ;

GRANT SELECT ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 


