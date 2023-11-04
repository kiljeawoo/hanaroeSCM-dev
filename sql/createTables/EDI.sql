--������������������������������������������������������������
--��NHVANINF.TB_CM_SIMPC_TEMP    �����ڵ� ����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_CM_SIMPC_TEMP ;

CREATE TABLE NHVANINF.TB_CM_SIMPC_TEMP (  
    SIMP_TPC                                                              VARCHAR2(50)      NOT NULL                  ,
    SIMP_C                                                                VARCHAR2(50)      NOT NULL                  ,
    SIMP_CNM                                                              VARCHAR2(300)     NOT NULL                  ,
    SIMP_C_EXPL                                                           VARCHAR2(2000)                              ,
    SIMP_C_SORT_SQ                                                        NUMBER(18,3)                                ,
    BIZ_TYPE                                                              VARCHAR2(50)                                ,
    USE_YN                                                                CHAR(1)           DEFAULT  'Y' NOT NULL     ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_CM_SIMPC_TEMP PRIMARY KEY (SIMP_TPC,SIMP_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_CM_SIMPC_TEMP                               IS '�����ڵ� ����'                          ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_TPC                      IS '�ܼ������ڵ�'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_C                        IS '�ܼ��ڵ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_CNM                      IS '�ܼ��ڵ��'                             ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_C_EXPL                   IS '�ܼ��ڵ弳��'                           ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.SIMP_C_SORT_SQ                IS '�ܼ��ڵ����ļ���'                       ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.BIZ_TYPE                      IS '�������'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.USE_YN                        IS '��뿩��'                               ;
COMMENT ON COLUMN NHVANINF.TB_CM_SIMPC_TEMP.DEL_YN                        IS '��������(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_CM_SIMPC_TEMP TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_XML_AMN_DOC    XML ��ü��������
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_XML_AMN_DOC ;

CREATE TABLE NHVANINF.TB_XML_AMN_DOC (  
    TRPL_C                                                                VARCHAR2(13)      NOT NULL                  ,
    DOCNM                                                                 CHAR(6)           NOT NULL                  ,
    DOC_UG_EN                                                             CHAR(1)                                     ,
    DOC_RG_DTM                                                            DATE                                        ,
    DOC_MOD_DTM                                                           DATE                                        ,
    CONSTRAINT PK_TB_XML_AMN_DOC PRIMARY KEY (TRPL_C,DOCNM) 
)
;

COMMENT ON TABLE  NHVANINF.TB_XML_AMN_DOC                                 IS 'XML ��ü��������'                       ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.TRPL_C                          IS '���޾�ü �ŷ�ó�ڵ�'                    ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOCNM                           IS '������'                                 ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOC_UG_EN                       IS '�����������(Y/N)'                      ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOC_RG_DTM                      IS '����Ͻ�'                               ;
COMMENT ON COLUMN NHVANINF.TB_XML_AMN_DOC.DOC_MOD_DTM                     IS '�����Ͻ�'                               ;

GRANT SELECT ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_XML_AMN_DOC TO NHVANWAS WITH GRANT OPTION ; 


--������������������������������������������������������������
--��NHVANINF.TB_SA_DP_STPL_XML    XML ��ü �ϴ��� �����
--������������������������������������������������������������
DROP   TABLE NHVANINF.TB_SA_DP_STPL_XML ;

CREATE TABLE NHVANINF.TB_SA_DP_STPL_XML (  
    SL_DT                                                                 CHAR(8)           NOT NULL                  ,
    UP_SPLR_NA_TRPL_C                                                     VARCHAR2(13)      NOT NULL                  ,
    SPLR_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    STPL_QT                                                               NUMBER(18, 3)                               ,
    CONSTRAINT PK_TB_SA_DP_STPL_XML PRIMARY KEY (SL_DT,UP_SPLR_NA_TRPL_C,SPLR_NA_TRPL_C,NA_BZPLC,NA_TEAM_C,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_SA_DP_STPL_XML                              IS 'XML ��ü �ϴ��� �����'               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.SL_DT                        IS '��������'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.UP_SPLR_NA_TRPL_C            IS '�����ں���������հŷ�ó�ڵ�'           ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.SPLR_NA_TRPL_C               IS '�����ڰ������հŷ�ó�ڵ�'               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.NA_BZPLC                     IS '�������ջ�����ڵ�'                     ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.NA_TEAM_C                    IS '�����������ڵ�'                         ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.NA_WRS_C                     IS '�������ջ�ǰ�ڵ�'                       ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL_XML.STPL_QT                      IS '������'                               ;

GRANT SELECT ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_SA_DP_STPL_XML TO NHVANWAS WITH GRANT OPTION ; 


