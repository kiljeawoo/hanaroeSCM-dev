--������������������������������������������������������������
--��NHVANINF.TB_CM_SIMPC    �����ڵ�
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_SIMPC ;

CREATE TABLE NHVANINF.TB_CM_SIMPC (  
    SIMP_TPC                                                              VARCHAR2(50)      NOT NULL                  ,
    SIMP_C                                                                VARCHAR2(50)      NOT NULL                  ,
    SIMP_CNM                                                              VARCHAR2(300)     NOT NULL                  ,
    SIMP_C_EXPL                                                           VARCHAR2(2000)                              ,
    SIMP_C_SORT_SQ                                                        NUMBER(18,3)                                ,
    BIZ_TYPE                                                              VARCHAR2(50)                                ,
    USE_YN                                                                CHAR(1)           DEFAULT  'Y' NOT NULL     ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_SIMPC PRIMARY KEY (SIMP_TPC,SIMP_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_SIMPC                                    IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_TPC                           IS '�ܼ������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_C                             IS '�ܼ��ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_CNM                           IS '�ܼ��ڵ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_C_EXPL                        IS '�ܼ��ڵ弳��'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.SIMP_C_SORT_SQ                     IS '�ܼ��ڵ����ļ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.BIZ_TYPE                           IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.USE_YN                             IS '��뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC.DEL_YN                             IS '��������(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_SIMPC TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_CM_DTHLDY_ORGZ    ���������ϳ���
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_DTHLDY_ORGZ ;

CREATE TABLE NHVANINF.TB_CM_DTHLDY_ORGZ (  
    NA_TRPL_C                                                             VARCHAR2(13)      NOT NULL                  ,
    BAS_DT                                                                CHAR(8)           NOT NULL                  ,
    HLDY_DSC                                                              CHAR(1)                                     ,
    HLDYNM                                                                VARCHAR2(50)                                ,
    DOW_C                                                                 CHAR(1)                                     ,
    BIZDT_YN                                                              CHAR(1)                                     ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_DTHLDY_ORGZ PRIMARY KEY (NA_TRPL_C,BAS_DT) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_DTHLDY_ORGZ                              IS '���������ϳ���'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.NA_TRPL_C                    IS '�������հŷ�ó�ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.BAS_DT                       IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.HLDY_DSC                     IS '���ϱ����ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.HLDYNM                       IS '���ϸ�'                                 ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.DOW_C                        IS '�����ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.BIZDT_YN                     IS '�����Ͽ���'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_DTHLDY_ORGZ.DEL_YN                       IS '��������(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_DTHLDY_ORGZ TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_CM_BZPL    �����⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_BZPL ;

CREATE TABLE NHVANINF.TB_CM_BZPL (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_BZ_TPC                                                             VARCHAR2(2)                                 ,
    BZPL_TPC                                                              VARCHAR2(3)       NOT NULL                  ,
    BZPL_DTI_TPC                                                          VARCHAR2(3)                                 ,
    SHRT_BZPLNM                                                           VARCHAR2(50)                                ,
    PRGR_DSC                                                              CHAR(1)                                     ,
    DSTR_BSN_DSC                                                          VARCHAR2(2)                                 ,
    CONSTRAINT PK_TB_CM_BZPL PRIMARY KEY (NA_BZPLC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_BZPL                                     IS '�����⺻'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.NA_BZPLC                            IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.NA_BZ_TPC                           IS '�������ջ�������ڵ�'                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.BZPL_TPC                            IS '����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.BZPL_DTI_TPC                        IS '����弼�������ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.SHRT_BZPLNM                         IS '������'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.PRGR_DSC                            IS '���ݱ������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BZPL.DSTR_BSN_DSC                        IS '������������ڵ�'                       ;

GRANT SELECT ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_BZPL TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_CM_TEAM    ���⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_TEAM ;

CREATE TABLE NHVANINF.TB_CM_TEAM (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    TEAMNM                                                                VARCHAR2(20)                                ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_TEAM PRIMARY KEY (NA_BZPLC,NA_TEAM_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_TEAM                                     IS '���⺻'                                 ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.NA_BZPLC                            IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.NA_TEAM_C                           IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.TEAMNM                              IS '����'                                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_TEAM.DEL_YN				  IS '��������(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_TEAM TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_CM_BUYER    ���̾�⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_BUYER ;

CREATE TABLE NHVANINF.TB_CM_BUYER (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    BUYER_ENO                                                             VARCHAR2(9)       NOT NULL                  ,
    BUYER_NM                                                              VARCHAR2(40)                                ,
    DEPTNM                                                                VARCHAR2(60)                                ,
    CHRG_BSNNM                                                            VARCHAR2(50)                                ,
    MPNO                                                                  VARCHAR2(14)                                ,
    OFT                                                                   VARCHAR2(20)                                ,
    OPNP_YN                                                               CHAR(1)                                     ,
    CONSTRAINT PK_TB_CM_BUYER PRIMARY KEY (NA_BZPLC,NA_TEAM_C,BUYER_ENO) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_BUYER                                    IS '���̾�⺻'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.NA_BZPLC                           IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.NA_TEAM_C                          IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.BUYER_ENO                          IS '���̾�ι�ȣ'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.BUYER_NM                           IS '���̾��'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.DEPTNM                             IS '�μ���'                                 ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.CHRG_BSNNM                         IS '��������'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.MPNO                               IS '�޴���ȭ��ȣ'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.OFT                                IS '����'                                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_BUYER.OPNP_YN                            IS '��������'                               ;

GRANT SELECT ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_BUYER TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_CM_PRGR_BASE    �������ݱ����ر⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_PRGR_BASE ;

CREATE TABLE NHVANINF.TB_CM_PRGR_BASE (  
    PRGR_C                                                                VARCHAR2(4)       NOT NULL                  ,
    PRGR_DSC                                                              CHAR(1)           NOT NULL                  ,
    PGNM                                                                  VARCHAR2(40)                                ,
    CONSTRAINT PK_TB_CM_PRGR_BASE PRIMARY KEY (PRGR_C,PRGR_DSC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_PRGR_BASE                                IS '�������ݱ����ر⺻'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_PRGR_BASE.PRGR_C                         IS '���ݱ��ڵ�'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_PRGR_BASE.PRGR_DSC                       IS '���ݱ������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_CM_PRGR_BASE.PGNM                           IS '���ݱ���'                               ;

GRANT SELECT ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_PRGR_BASE TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_CM_VCBT_FEE    ���������ڼ�����⺻
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_VCBT_FEE ;

CREATE TABLE NHVANINF.TB_CM_VCBT_FEE (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    VCBT_FEE                                                              NUMBER(18)                                  ,
    FEE_VAT                                                               NUMBER(18)                                  ,
    CONSTRAINT PK_TB_CM_VCBT_FEE PRIMARY KEY (NA_BZPLC,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_VCBT_FEE                                 IS '���������ڼ�����⺻'                   ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.NA_BZPLC                        IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.NA_WRS_C                        IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.VCBT_FEE                        IS '����������'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_VCBT_FEE.FEE_VAT                         IS '������ΰ���'                           ;

GRANT SELECT ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_VCBT_FEE TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_CM_SEQ    ������Ű����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_SEQ ;

CREATE TABLE NHVANINF.TB_CM_SEQ (  
    NAME                                                                  VARCHAR2(50)      NOT NULL                  ,
    CURRENT_KEY                                                           NUMBER(38)                                  ,
    CURRENT_HEX                                                           VARCHAR2(30)                                ,
    CONSTRAINT PK_TB_CM_SEQ PRIMARY KEY (NAME) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_SEQ                                      IS '������Ű����'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SEQ.NAME                                 IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SEQ.CURRENT_KEY                          IS '10����Ű'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SEQ.CURRENT_HEX                          IS '16����Ű'                               ;

GRANT SELECT ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_SEQ TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANPTL.TB_PUSH_MSG    PUSH/SMS �޽���
--������������������������������������������������������������
DROP   TABLE NHVANPTL.TB_PUSH_MSG ;

CREATE TABLE NHVANPTL.TB_PUSH_MSG (  
    MESSAGE_ID                                                            NUMBER(38)        NOT NULL                  ,
    MB_ID                                                                 VARCHAR2(9)       NOT NULL                  ,
    USR_HP                                                                VARCHAR2(14)                                ,
    SEND_TP                                                               VARCHAR2(4)                                 ,
    SENT_TP                                                               VARCHAR2(4)                                 ,
    STATUS                                                                VARCHAR2(5)                                 ,
    SUBJECT                                                               VARCHAR2(50)                                ,
    MSG                                                                   VARCHAR2(200)                               ,
    INPUT_DTM                                                             DATE                                        ,
    SEND_DTM                                                              DATE                                        ,
    ATTACH_URL                                                            VARCHAR2(500)                               ,
    CONSTRAINT PK_TB_PUSH_MSG PRIMARY KEY (MESSAGE_ID,MB_ID) 
)
;

COMMENT ON TABLE  NHVANPTL.TB_PUSH_MSG                                    IS 'PUSH/SMS �޽���'                        ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.MESSAGE_ID                         IS '�޽������̵�'                           ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.MB_ID                              IS 'ȸ�����̵�'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.USR_HP                             IS '�ڵ�����ȣ'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SEND_TP                            IS '����Ÿ��'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SENT_TP                            IS '���۵�Ÿ��'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.STATUS                             IS '�������'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SUBJECT                            IS '�޽���Ÿ��Ʋ'                           ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.MSG                                IS '�޽�������'                             ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.INPUT_DTM                          IS '�Է��Ͻ�'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.SEND_DTM                           IS '��������'                               ;
COMMENT ON COLUMN NHVANPTL.TB_PUSH_MSG.ATTACH_URL                         IS '÷��URL'                                ;

GRANT SELECT ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANPTL.TB_PUSH_MSG TO NHVANWAS WITH GRANT OPTION ; 


