--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_STPNLT    결품패널티정보
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_STPNLT                                   IS '결품패널티정보'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_BZPLC                          IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_PLA_DT                        IS '입고예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.SLPNO                             IS '미입고일련번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_TRPL_C                         IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_WRS_C                          IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NA_TEAM_C                         IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_QT                            IS '발주수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_UNT_QT                        IS '발주표시수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_SELPR                         IS '발주가격'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_CPL_QT                        IS '입고수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_UNT_QT                        IS '입고표시수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.SELPR                             IS '입고금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NSTR_QT                           IS '미입고수량'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NSTR_UNT_QT                       IS '미입고표시수량'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.NSTR_PR                           IS '미입고금액'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.IMPSRT                            IS '부과율'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.IMPS_AM                           IS '부과금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.STR_STSC                          IS '입고상태코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ODR_FBID_RSNC                     IS '발주금지사유'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.UN_STR_RSNC                       IS '미입고사유'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.ROTS_SPY_PSB_DT                   IS '공급가능일'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.BUYER_NM                          IS '바이어명'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.FSRG_DTM                          IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.FSRGMN_ENO                        IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.LSCHG_DTM                         IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.LS_CMENO                          IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.DEL_DTM                           IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.DLMN_ENO                          IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.DFN_PRG_STSC                      IS '확정상태코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.CNF_YN                            IS '공급업체확인여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.CNF_DTM                           IS '확인일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.CNF_CMENO                         IS '확인자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.PRC_YN                            IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.RSP_C_CNTN                        IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_STPNLT.EDI_IF_ID                         IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_STPNLT TO NHVANWAS WITH GRANT OPTION ; 

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_OUT_M    물류센터출고내역 기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_OUT_M                                    IS '물류센터출고내역 기본'                  ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_NA_BZPLC                       IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DLR_PHD_IDVD_NO                    IS '출고물류개별번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJ_NA_BZPLC                       IS '정산경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJ_NA_TEAM_C                      IS '정산경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.NA_TRPL_C                          IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.TRPL_NA_TEAM_C                     IS '거래처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJPL_NA_TRPL_C                    IS '정산처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ADJPL_NA_TEAM_C                    IS '정산처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ACTL_SLPL_NA_TRPL_C                IS '실제매출처경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DVY_NA_TRPL_C                      IS '배송경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DVYAA_NA_TEAM_C                    IS '배송지경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.TRP_NA_TRPL_C                      IS '운송경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_RVO_DT                         IS '물류수주일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_DVY_RQR_DT                     IS '물류배송요청일자'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_DLR_CPL_DT                     IS '물류출고완료일자'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_DLR_DSC                        IS '물류출고구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PRGR_C                             IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_RLYBR_NA_TRPL_C                IS '물류중계소경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.NA_CRC_CAN_DSC                     IS '경제통합정정취소구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FSRG_DTM                           IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FSRGMN_ENO                         IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LSCHG_DTM                          IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LS_CMENO                           IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DEL_YN                             IS '삭제여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DEL_DTM                            IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DLMN_ENO                           IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.PHD_SLP_DSC                        IS '물류전표구분'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.GRS_SOJU_YN                        IS '지방소주여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ACTL_SPYPL_NA_TRPL_C               IS '실제공급처경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.VHCNO                              IS '차량코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.INQ_CN                             IS '조회건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LINE_CN                            IS '라인건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FS_RMS_DT                          IS '문서 최초수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.FS_RMS_HR                          IS '문서 최초수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LS_RMS_DT                          IS '문서 최종수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.LS_RMS_HR                          IS '문서 최종수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.EDIRG_DTM                          IS 'I/F수신일시'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.ACK_RMS_YN                         IS 'ACKDOC 수신여부'                        ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.RMS_SPYPL_C                        IS '실제수신업체'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.MB_ID                              IS '회원아이디'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.APPLICATION_ID                     IS 'XTRUS처리키'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DOC_NAME                           IS '문서명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_M.DOC_RMS_LOC_DSC                    IS 'WEB/EDI'                                ;

GRANT SELECT ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_OUT_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_OUT_D    물류센터출고내역 상세
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_OUT_D                                    IS '물류센터출고내역 상세'                  ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_NA_BZPLC                       IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DLR_PHD_IDVD_NO                    IS '출고물류개별번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DLR_PHD_SQNO                       IS '출고물류일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.NA_WRS_C                           IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_BAS_UNT_IDVDC                  IS '물류기준단위개별코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.WRS_MRK_PHD_UNT_C                  IS '상품표시물류단위코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.INPD_QT                            IS '내품수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_RVO_QT                         IS '물류수주수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_PLA_QT                     IS '물류출고예정수량'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_AJ_QT                      IS '물류출고조정수량'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_WRS_ALC_QT                     IS '물류상품할당수량'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_ALC_QT                         IS '물류할당수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_SPLY_QT                        IS '물류보충수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_PCK_QT                         IS '물류피킹수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_LCAR_QT                        IS '물류상차수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_CPL_QT                     IS '물류출고완료수량'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_CAN_QT                     IS '물류출고취소수량'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CSMT_DLR_QT                    IS '물류적송출고수량'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_SNBK_QT                        IS '물류회송수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.CUS_CNR_YN                         IS '고객검수여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.CUS_CNR_QT                         IS '고객검수수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.CUS_CNR_DT                         IS '고객검수일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CNR_YN                         IS '물류검수여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CNR_QT                         IS '물류검수수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_CNR_DT                         IS '물류검수일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_PCS                            IS '물류원가'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_SELPR                          IS '물류판매가'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.TXT_DSC                            IS '과세구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VATRT                              IS '부가세율'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_VCBX_TPC                      IS '공병공상자유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_NA_WRS_C                      IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_UPR                           IS '공병단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBX_NA_WRS_C                      IS '공상자경제통합상품코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBX_UPR                           IS '공상자단가'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_FCLT_C                         IS '물류기능코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.WRS_GRD_DSC                        IS '상품등급구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_LIMT_YN                        IS '덤한정여부'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.NA_TR_DSC                          IS '경제통합거래구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_NA_CRC_CAN_DSC                 IS '덤경제통합정정취소구분코드'             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_IN_CNR_QT                      IS '덤입고수량'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.DUM_MAE_CNR_QT                     IS '덤매입수량'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.ACTL_SPYPL_NA_TRPL_C               IS '실제공급처경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.VCBT_QT                            IS '공병수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_OUT_D.PHD_DLR_PRG_STSC 				  IS'물류출고진행상태코드'  ;

GRANT SELECT ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_OUT_D TO NHVANWAS WITH GRANT OPTION ; 



--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_WA_OH_ICT    사후장려금내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_WA_OH_ICT                                IS '사후장려금내역'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_NA_BZPLC                   IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_SLP_DT                     IS '물류전표일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_TR_DSC                      IS '경제통합거래구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_SLPNO                       IS '경제통합전표번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_BLB_DFC_DSC                 IS '경제통합흑자적자구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SLP_SQNO                       IS '전표일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.TR_DT                          IS '거래일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_TEAM_C                      IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_C                       IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.WRS_SBJC                       IS '상품과목코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_LLED_C                      IS '경제통합대원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_MLED_C                      IS '경제통합중원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SLPL_NA_TRPL_C                 IS '매출처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SLPL_NA_TEAM_C                 IS '매출처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.BUYPL_NA_TRPL_C                IS '매입처경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.BUYPL_NA_TEAM_C                IS '매입처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_ADJPL_C                     IS '경제통합정산처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.ADJPL_NA_TEAM_C                IS '정산처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NAAC_DSC                       IS '중앙회조합구분코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PY_PLA_DT                      IS '지급예정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_LCLC                    IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_MCLC                    IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_SCLC                    IS '경제통합상품소분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_WRS_DTCF_C                  IS '경제통합상품세분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.OSLIP_DT                       IS '원전표일자'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.OGN_NA_SLPNO                   IS '원경제통합전표번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SPY_QT                         IS '공급수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.SPY_AM                         IS '공급금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.VAT                            IS '부가세'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.AFF_SSDY                       IS '사후장려금'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_AFF_FEERT                  IS '물류사후수수료율'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.RMK_CNTN                       IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.PHD_SEL_AM                     IS '물류판매금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.TMS_YN                         IS '전송여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.NA_CRC_CAN_DSC                 IS '경제통합정정취소구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.LSCHG_DTM                      IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_WA_OH_ICT.LS_CMENO                       IS '최종변경자개인번호'                     ;

GRANT SELECT ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_WA_OH_ICT TO NHVANWAS WITH GRANT OPTION ; 

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_ETCCAASET_M    기타당좌자산회수내역기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_ETCCAASET_M                              IS '기타당좌자산회수내역기본'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_TEAM_C                    IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.SLP_DT                       IS '전표일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_SLPNO                     IS '경제통합전표번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_TR_DSC                    IS '경제통합거래구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_CRC_CAN_DSC               IS '경제통합정정취소구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.NA_TRPL_C                    IS '거래처코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.ETC_CA_ASET_RTU_QT           IS '기타당좌자산반환수량'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RTU_AM                       IS '반환금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RTU_FEE                      IS '반환수수료'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RTU_FEE_VAT                  IS '반환수수료부가세'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.OSLIP_DT                     IS '원전표일자'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.OSLIP_NA_SLPNO               IS '원전표경제통합전표번호'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.WDR_PLA_DT                   IS '회수예정일'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.RMK_CNTN                     IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.VHC_TYPE                     IS '차량종류'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.VHC_NO                       IS '차량코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.ACG_NM                       IS '회계명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_M.DEL_YN                       IS '삭제여부(1,0)'                          ;


GRANT SELECT ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_ETCCAASET_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_ETCCAASET_D    기타당좌자산회수내역상세
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_ETCCAASET_D                              IS '기타당좌자산회수내역상세'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.NA_TEAM_C                    IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.SLP_DT                       IS '전표일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.NA_SLPNO                     IS '경제통합전표번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.VCBT_NA_WRS_C                IS '공병경제통합상품코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.VCBT_RTU_QT                  IS '공병반환수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.VCBT_UPR                     IS '공병단가'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.RTU_AM                       IS '반환금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.RTU_FEE                      IS '반환수수료'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.RTU_FEE_VAT                  IS '반환수수료부가세'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_ETCCAASET_D.DEL_YN                       IS '삭제여부(1,0)'                          ;


GRANT SELECT ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_ETCCAASET_D TO NHVANWAS WITH GRANT OPTION ; 



--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_VHCBKG_M    입고예약기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_VHCBKG_M                                 IS '입고예약기본'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_NA_BZPLC                    IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHC_BKG_PHD_IDVD_NO             IS '차량예약물류개별번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.NA_TRPL_C                       IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHC_BKG_DT                      IS '차량예약일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHCNO                           IS '차량번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_DVY_CAFFNM                  IS '물류배송기사명'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.TELNO                           IS '전화번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.VHC_ENTRUK_BKG_TMI              IS '차량입차예약시분'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_PAS_SRTR_BKG_TMI            IS '물류통과소터예약시분'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PHD_PAS_BLK_BKG_TMI             IS '물류통과벌크예약시분'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.STPL_CSTD_ELT_TAG_BKG_TMI       IS '재고보관전자태그예약시분'               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.STPL_CSTD_GEN_BKG_TMI           IS '재고보관일반예약시분'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.FSRG_DTM                        IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.FSRGMN_ENO                      IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.LSCHG_DTM                       IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.LS_CMENO                        IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.CRUD_DSC                        IS 'CUD처리구분'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.PRC_YN                          IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.RSP_C_CNTN                      IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_M.EDI_IF_ID                       IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_VHCBKG_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_VHCBKG_D    입고예약상세
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_VHCBKG_D                                 IS '입고예약상세'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.PHD_NA_BZPLC                    IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.VHC_BKG_PHD_IDVD_NO             IS '차량예약물류개별번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.NA_TRPL_C                       IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.VHC_BKG_DT                      IS '차량예약일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.VHC_BKG_PHD_SQNO                IS '차량예약물류일련번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.STR_PHD_IDVD_NO                 IS '입고물류개별번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_VHCBKG_D.CRUD_DSC                        IS 'CUD처리구분'                            ;

GRANT SELECT ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_VHCBKG_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_DOCK_CODE    물류센터DOCK코드
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_DOCK_CODE                                IS '물류센터DOCK코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.PHD_NA_BZPLC                   IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.NA_DOCK_C                      IS '경제통합DOCK코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.PHDCT_DCKNM                    IS '물류센터DOCK명'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DOCK_UZ_DSC                    IS 'DOCK용도구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DOCK_ASG_DSC                   IS 'DOCK배정구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DOCK_STSC                      IS 'DOCK상태코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.FSRG_DTM                       IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.FSRGMN_ENO                     IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.LSCHG_DTM                      IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.LS_CMENO                       IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DEL_YN                         IS '삭제여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DEL_DTM                        IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.DLMN_ENO                       IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.ST_SUIT_NA_LOCA_C              IS '시작슈트경제통합로케이션코드'           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DOCK_CODE.ED_SUIT_NA_LOCA_C              IS '종료슈트경제통합로케이션코드'           ;

GRANT SELECT ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_DOCK_CODE TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_SPYPLVHC    공급처차량관리
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_SPYPLVHC                                 IS '공급처차량관리'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.PHD_NA_BZPLC                    IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.SPYPL_VHC_PHD_IDVD_NO           IS '공급처차량물류개별번호'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.NA_TRPL_C                       IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.VHCNO                           IS '차량번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.PHD_DVY_CAFFNM                  IS '물류배송기사명'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.TELNO                           IS '전화번호'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.UYN                             IS '사용여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.FSRG_DTM                        IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.FSRGMN_ENO                      IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.LSCHG_DTM                       IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.LS_CMENO                        IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.DEL_YN                          IS '삭제여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.DEL_DTM                         IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_SPYPLVHC.DLMN_ENO                        IS '삭제자개인번호'                         ;

GRANT SELECT ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_SPYPLVHC TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_DV_SILRPT    마트별출고실적
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_DV_SILRPT                                IS '마트별출고실적'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.PHD_NA_BZPLC                   IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.NA_SPYPL_C                     IS '공급업체코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.NA_DVY_PLASH_SLPNO             IS '배송예정서번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.NA_WRS_C                       IS '상품코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DVY_WRS_UPR                    IS '배송상품단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DVY_PLA_QT                     IS '배송예정수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DLR_DT                         IS '출고일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.FILP_DT                        IS '기표일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.PHD_DLR_DSC                    IS '주문유형'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.TR_DSC                         IS '거래구분'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DVYAA_NA_TRPL_C                IS '배송지거래처코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.INQ_CN                         IS '조회건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.LINE_CN                        IS '라인건수'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.FS_RMS_DT                      IS '문서 최초수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.FS_RMS_HR                      IS '문서 최초수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.LS_RMS_DT                      IS '문서 최종수신일자'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.LS_RMS_HR                      IS '문서 최종수신시간'                      ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.EDIRG_DTM                      IS 'I/F수신일시'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.ACK_RMS_YN                     IS 'ACKDOC 수신여부'                        ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.RMS_SPYPL_C                    IS '실제수신업체'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.MB_ID                          IS '회원아이디'                             ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.APPLICATION_ID                 IS 'XTRUS처리키'                            ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DOC_NAME                       IS '문서명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_DV_SILRPT.DOC_RMS_LOC_DSC                IS 'WEB/EDI'                                ;

GRANT SELECT ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_DV_SILRPT TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LG_IM_IN    입고내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_LG_IM_IN                                    IS '입고내역'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.PHD_NA_BZPLC                       IS '물류경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.STR_PHD_IDVD_NO                    IS '입고물류개별번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_TRPL_C                          IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_TEAM_C                          IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.PHD_STR_PLA_DT                     IS '물류입고예정일자'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_DVY_PLASH_SLPNO                 IS '경제통합배송예정서전표번호'             ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.NA_DOCK_C                          IS '경제통합DOCK코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.FSRG_DTM                           IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.FSRGMN_ENO                         IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.LSCHG_DTM                          IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.LS_CMENO                           IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.DEL_YN                             IS '삭제여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.DEL_DTM                            IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_LG_IM_IN.DLMN_ENO                           IS '삭제자개인번호'                         ;

GRANT SELECT ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LG_IM_IN TO NHVANWAS WITH GRANT OPTION ; 


