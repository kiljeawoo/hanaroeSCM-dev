--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TX_TH_DAY_SUPP    매입세무일자료
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TX_TH_DAY_SUPP                              IS '매입세무일자료'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TR_DT                        IS '거래일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TR_DSC                    IS '경제통합거래구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_SLPNO                     IS '경제통합전표번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RG_SQNO                      IS '등록일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BZPL_BZNO                    IS '사업장사업자등록번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TEAM_C                    IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TRPL_C                    IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TRPL_NA_TEAM_C               IS '거래처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TRPL_APL_YN               IS '경제통합거래처적용여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TRPL_RLNO                    IS '거래처실명번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TOT_DSC                   IS '경제통합집계구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_TOT_DTI_DSC               IS '경제통합집계세부구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_SOAC_DSC                  IS '경제통합계산서구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TP_DSC                  IS '세무유형구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FEE_ACG_ACCC                 IS '수수료회계계정코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LATCNM                       IS '품목명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BLB_SPY_AM                   IS '흑자공급금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BLB_VAT                      IS '흑자부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.DFC_SPY_AM                   IS '적자공급금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.DFC_VAT                      IS '적자부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_BLB_SPY_AM               IS '정정흑자공급금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_BLB_VAT                  IS '정정흑자부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_DFC_SPY_AM               IS '정정적자공급금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.CRC_DFC_VAT                  IS '정정적자부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_PBC_NT                  IS '세무발행횟수'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_BZ_TPC                    IS '경제통합사업유형코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.WRS_SBJC                     IS '상품과목코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_LLED_C                    IS '경제통합대원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_MLED_C                    IS '경제통합중원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ROTS_CTR_DSC                 IS '계통계약구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NAAC_DSC                     IS '중앙회조합구분코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BZ_METH_DSC                  IS '사업방식구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FIXAST_YN                    IS '고정자산여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LIQ_WHSL_COMP_C              IS '주류도매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LIQ_RTL_COMP_C               IS '주류소매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_CRC_CAN_DSC               IS '경제통합정정취소구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ORGTR_NA_SLPNO               IS '원거래경제통합전표번호'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_BRK_TP_DSC              IS '세무내역유형구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_BRK_TOT_TP_YN           IS '세무내역집계성여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TOT_YN                  IS '세무집계여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TOT_DT                  IS '세무집계일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_TOT_RG_SQNO             IS '세무집계등록일련번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RC_YN                        IS '접수여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RC_DT                        IS '접수일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RPBC_YN                      IS '역발행여부'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_YN                IS '매입처역승인여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_DTM               IS '매입처역승인일시'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_NA_BZPLC          IS '매입처역승인경제통합사업장코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BUYPL_RAPV_MN_ENO            IS '매입처역승인자개인번호'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APV_YN                  IS '매출처승인여부'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APV_DTM                 IS '매출처승인일시'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APV_NA_BZPLC            IS '매출처승인경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLPL_APVMN_ENO               IS '매출처승인자개인번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRC_YN             IS '전자세금계산서처리여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRC_DTM            IS '전자세금계산서처리일시'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRC_NA_BZPLC       IS '전자세금계산서처리경제통합사업장코드'   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ELT_TXBIL_PRCMN_ENO          IS '전자세금계산서처리자개인번호'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RC_RMK_CNTN                  IS '접수비고내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RMK_CNTN                     IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.DSPC_INCD_YN                 IS '상세내역포함여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SOAC_PBC_APL_YN              IS '계산서발행적용여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RG_STS_DSC                   IS '등록상태구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.BRK_DEL_YN                   IS '내역삭제여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FSRG_DTM                     IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LSCHG_DTM                    IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LS_DEL_DTM                   IS '최종삭제일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_PBC_DTM                 IS '세무발행일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.FSRGMN_ENO                   IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LS_CMENO                     IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.LS_DLMN_ENO                  IS '최종삭제자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.TXBZ_PBCMN_ENO               IS '세무발행자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.RCV_YN                       IS '수취여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.ORI_NA_BZPLC                 IS '원경제통합사업장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLV_BZPL_SQNO                IS '종사업장일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLV_TRPL_SQNO                IS '종거래처일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.SLP_SQ                       IS '전표순서'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_WRS_SCLC                  IS '경제통합소분류코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_SUPP.NA_WRS_DTCF_C                IS '경제통합세분류코드'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_DAY_SUPP TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TX_TH_DAY_CUST    매출세무일자료
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TX_TH_DAY_CUST                              IS '매출세무일자료'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TR_DT                        IS '거래일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLP_DT                       IS '전표일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TR_DSC                    IS '경제통합거래구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_SLPNO                     IS '경제통합전표번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.RG_SQNO                      IS '등록일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BZPL_BZNO                    IS '사업장사업자등록번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TEAM_C                    IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TRPL_C                    IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TRPL_NA_TEAM_C               IS '거래처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TRPL_APL_YN               IS '경제통합거래처적용여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TRPL_RLNO                    IS '거래처실명번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TOT_DSC                   IS '경제통합집계구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_TOT_DTI_DSC               IS '경제통합집계세부구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_SOAC_DSC                  IS '경제통합계산서구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TP_DSC                  IS '세무유형구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FEE_ACG_ACCC                 IS '수수료회계계정코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LATCNM                       IS '품목명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_SPY_AM                   IS '흑자공급금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_VAT                      IS '흑자부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_SPY_AM                   IS '적자공급금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_VAT                      IS '적자부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_SPY_AM               IS '정정흑자공급금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_VAT                  IS '정정흑자부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_SPY_AM               IS '정정적자공급금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_VAT                  IS '정정적자부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_NT                  IS '세무발행횟수'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_BZ_TPC                    IS '경제통합사업유형코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.WRS_SBJC                     IS '상품과목코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_LLED_C                    IS '경제통합대원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_MLED_C                    IS '경제통합중원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ROTS_CTR_DSC                 IS '계통계약구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NAAC_DSC                     IS '중앙회조합구분코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BZ_METH_DSC                  IS '사업방식구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FIXAST_YN                    IS '고정자산여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.VAT_TROT_OBJ_LATC_YN         IS '부가세환급대상품목여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LIQ_WHSL_COMP_C              IS '주류도매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LIQ_RTL_COMP_C               IS '주류소매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.NA_CRC_CAN_DSC               IS '경제통합정정취소구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ORGTR_NA_SLPNO               IS '원거래경제통합전표번호'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_BRK_TP_DSC              IS '세무내역유형구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_BRK_TOT_TP_YN           IS '세무내역집계성여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TOT_YN                  IS '세무집계여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TOT_DT                  IS '세무집계일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_TOT_RG_SQNO             IS '세무집계등록일련번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CD_CSB_INCD_YN               IS '카드시재포함여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CSH_RCTW_PBC_YN              IS '현금영수증발행여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_YN                  IS '세무발행여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_DT                  IS '세무발행일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_YN                IS '매입처역승인여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_DTM               IS '매입처역승인일시'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_NA_BZPLC          IS '매입처역승인경제통합사업장코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BUYPL_RAPV_MN_ENO            IS '매입처역승인자개인번호'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APV_YN                  IS '매출처승인여부'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APV_DTM                 IS '매출처승인일시'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APV_NA_BZPLC            IS '매출처승인경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLPL_APVMN_ENO               IS '매출처승인자개인번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRC_YN             IS '전자세금계산서처리여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRC_DTM            IS '전자세금계산서처리일시'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRC_NA_BZPLC       IS '전자세금계산서처리경제통합사업장코드'   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ELT_TXBIL_PRCMN_ENO          IS '전자세금계산서처리자개인번호'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.PBC_RMK_CNTN                 IS '발행비고내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.RMK_CNTN                     IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DSPC_INCD_YN                 IS '상세내역포함여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SOAC_PBC_APL_YN              IS '계산서발행적용여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.RG_STS_DSC                   IS '등록상태구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BRK_DEL_YN                   IS '내역삭제여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FSRG_DTM                     IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LSCHG_DTM                    IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LS_DEL_DTM                   IS '최종삭제일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBC_DTM                 IS '세무발행일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.TXBZ_PBCMN_ENO               IS '세무발행자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.FSRGMN_ENO                   IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LS_CMENO                     IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.LS_DLMN_ENO                  IS '최종삭제자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.ORI_NA_BZPLC                 IS '원경제통합사업장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLV_BZPL_SQNO                IS '종사업장일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLV_TRPL_SQNO                IS '종거래처일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.SLP_SQ                       IS '전표순서'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.PATN_BZ_METH_DSC             IS '상대사업방식구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CCD_SPY_AM               IS '흑자신용카드공급금액'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CCD_VAT                  IS '흑자신용카드부가세'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CCD_SPY_AM               IS '적자신용카드공급금액'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CCD_VAT                  IS '적자신용카드부가세'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CCD_SPY_AM           IS '수정흑자신용카드공급금액'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CCD_VAT              IS '수정흑자신용카드부가세'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CCD_SPY_AM           IS '수정적자신용카드공급금액'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CCD_VAT              IS '수정적자신용카드부가세'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CSH_RCTW_SPY_AM          IS '흑자현금영수증공급금액'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.BLB_CSH_RCTW_VAT             IS '흑자현금영수증부가세'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CSH_RCTW_SPY_AM          IS '적자현금영수증공급금액'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.DFC_CSH_RCTW_VAT             IS '적자현금영수증부가세'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CSH_RCTW_SPY_AM      IS '수정흑자현금영수증공급금액'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_BLB_CSH_RCTW_VAT         IS '수정흑자현금영수증부가세'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CSH_RCTW_SPY_AM      IS '수정적자현금영수증공급금액'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_DAY_CUST.CRC_DFC_CSH_RCTW_VAT         IS '수정적자현금영수증부가세'               ;

GRANT SELECT ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_DAY_CUST TO NHVANWAS WITH GRANT OPTION ; 

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TX_TH_CUST    매출세무확정자료
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TX_TH_CUST                                  IS '매출세무확정자료'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_BZPLC                         IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SL_YM                            IS '매출년월'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_DFN_DT                      IS '세무확정일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_TOT_RG_SQNO                 IS '세무집계등록일련번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BZPL_BZNO                        IS '사업장사업자등록번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TEAM_C                        IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TRPL_C                        IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TRPL_NA_TEAM_C                   IS '거래처경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TRPL_APL_YN                   IS '경제통합거래처적용여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TRPL_RLNO                        IS '거래처실명번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TOT_DSC                       IS '경제통합집계구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_TOT_DTI_DSC                   IS '경제통합집계세부구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_SOAC_DSC                      IS '경제통합계산서구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_TP_DSC                      IS '세무유형구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LATCNM                           IS '품목명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_SPY_AM                       IS '흑자공급금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_VAT                          IS '흑자부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_SPY_AM                       IS '적자공급금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_VAT                          IS '적자부가세'                             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_SPY_AM                   IS '정정흑자공급금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_VAT                      IS '정정흑자부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_SPY_AM                   IS '정정적자공급금액'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_VAT                      IS '정정적자부가세'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.PUC                              IS '매수'                                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_PBC_NT                      IS '세무발행횟수'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.PBC_PHR_CNTN                     IS '발행문구내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_BZ_TPC                        IS '경제통합사업유형코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.WRS_SBJC                         IS '상품과목코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_LLED_C                        IS '경제통합대원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_MLED_C                        IS '경제통합중원장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ROTS_CTR_DSC                     IS '계통계약구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NAAC_DSC                         IS '중앙회조합구분코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BZ_METH_DSC                      IS '사업방식구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.FIXAST_YN                        IS '고정자산여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.VAT_TROT_OBJ_LATC_YN             IS '부가세환급대상품목여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LIQ_WHSL_COMP_C                  IS '주류도매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LIQ_RTL_COMP_C                   IS '주류소매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.RCT_RQS_DSC                      IS '영수청구구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_BRK_TP_DSC                  IS '세무내역유형구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_YN                    IS '매입처역승인여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_DTM                   IS '매입처역승인일시'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_NA_BZPLC              IS '매입처역승인경제통합사업장코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BUYPL_RAPV_MN_ENO                IS '매입처역승인자개인번호'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APV_YN                      IS '매출처승인여부'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APV_DTM                     IS '매출처승인일시'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APV_NA_BZPLC                IS '매출처승인경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLPL_APVMN_ENO                   IS '매출처승인자개인번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRC_YN                 IS '전자세금계산서처리여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRC_DTM                IS '전자세금계산서처리일시'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRC_NA_BZPLC           IS '전자세금계산서처리경제통합사업장코드'   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ELT_TXBIL_PRCMN_ENO              IS '전자세금계산서처리자개인번호'           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.PBC_RMK_CNTN                     IS '발행비고내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.RMK_CNTN                         IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DSPC_INCD_YN                     IS '상세내역포함여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BGT_TXBZ_TMS_DFN_YN              IS '예산세무전송확정여부'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BGT_TXBZ_TMS_DFN_DTM             IS '예산세무전송확정일시'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BGT_TXBZ_TMS_DFN_MN_ENO          IS '예산세무전송확정자개인번호'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.RG_STS_DSC                       IS '등록상태구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BRK_DEL_YN                       IS '내역삭제여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.FSRG_DTM                         IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LSCHG_DTM                        IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LS_DEL_DTM                       IS '최종삭제일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_PBC_DTM                     IS '세무발행일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.FSRGMN_ENO                       IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LS_CMENO                         IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.LS_DLMN_ENO                      IS '최종삭제자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.TXBZ_PBCMN_ENO                   IS '세무발행자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.ORI_NA_BZPLC                     IS '원경제통합사업장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLV_BZPL_SQNO                    IS '종사업장일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.SLV_TRPL_SQNO                    IS '종거래처일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CCD_SPY_AM                   IS '흑자신용카드공급금액'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CCD_VAT                      IS '흑자신용카드부가세'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CCD_SPY_AM                   IS '적자신용카드공급금액'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CCD_VAT                      IS '적자신용카드부가세'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CCD_SPY_AM               IS '수정흑자신용카드공급금액'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CCD_VAT                  IS '수정흑자신용카드부가세'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CCD_SPY_AM               IS '수정적자신용카드공급금액'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CCD_VAT                  IS '수정적자신용카드부가세'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CSH_RCTW_SPY_AM              IS '흑자현금영수증공급금액'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.BLB_CSH_RCTW_VAT                 IS '흑자현금영수증부가세'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CSH_RCTW_SPY_AM              IS '적자현금영수증공급금액'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.DFC_CSH_RCTW_VAT                 IS '적자현금영수증부가세'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CSH_RCTW_SPY_AM          IS '수정흑자현금영수증공급금액'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_BLB_CSH_RCTW_VAT             IS '수정흑자현금영수증부가세'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CSH_RCTW_SPY_AM          IS '수정적자현금영수증공급금액'             ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.CRC_DFC_CSH_RCTW_VAT             IS '수정적자현금영수증부가세'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_WRS_SCLC                      IS '경제통합소분류코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_CUST.NA_WRS_DTCF_C                    IS '경제통합세분류코드'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_CUST TO NHVANWAS WITH GRANT OPTION ;


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TX_TM_IDVDC    세무개별코드내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TX_TM_IDVDC                                 IS '세무개별코드내역'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.TXBZ_IDVD_TPC                   IS '세무개별유형코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.TXBZ_IDVDC                      IS '세무개별코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.TXBZ_IDVD_CNM                   IS '세무개별코드명'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.RG_STS_DSC                      IS '등록상태구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.RMK_CNTN                        IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.FSRG_DTM                        IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_IDVDC.FSRGMN_ENO                      IS '최초등록자개인번호'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TM_IDVDC TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TX_TM_DFN_BZPL    세무자료확정사업장기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_TX_TM_DFN_BZPL ;

CREATE TABLE NHVANINF.TB_TX_TM_DFN_BZPL (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    FSRG_DTM                                                              DATE                                        ,
    FSRGMN_ENO                                                            VARCHAR2(9)                                 ,
    CONSTRAINT PK_TB_TX_TM_DFN_BZPL PRIMARY KEY (NA_BZPLC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TX_TM_DFN_BZPL                              IS '세무자료확정사업장기본'                 ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_DFN_BZPL.NA_BZPLC                     IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_DFN_BZPL.FSRG_DTM                     IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_DFN_BZPL.FSRGMN_ENO                   IS '최초등록자개인번호'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TM_DFN_BZPL TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TX_TH_TAX_KIND_PBC    세무유형발행관리내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TX_TH_TAX_KIND_PBC                          IS '세무유형발행관리내역'                   ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.NA_BZPLC                 IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.NA_TEAM_C                IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.TXBZ_TP_DSC              IS '세무유형구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.TXBZ_TP_LATCNM           IS '세무유형품목명'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.FSRG_DTM                 IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TH_TAX_KIND_PBC.FSRGMN_ENO               IS '최초등록자개인번호'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TH_TAX_KIND_PBC TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TX_TM_PBC_PHR    세무발행문구기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TX_TM_PBC_PHR                               IS '세무발행문구기본'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.NA_BZPLC                      IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.NA_TEAM_C                     IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.DM_GDC_PHR_CNTN               IS 'DM안내문구내용'                         ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.PBC_PAP_DSC                   IS '발행용지구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.RV_SLP_PBC_PAP_DSC            IS '입금전표발행용지구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.FSRG_DTM                      IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TX_TM_PBC_PHR.FSRGMN_ENO                    IS '최초등록자개인번호'                     ;

GRANT SELECT ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TX_TM_PBC_PHR TO NHVANWAS WITH GRANT OPTION ; 
