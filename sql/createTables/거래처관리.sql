--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_DVYAA    배송지내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_DVYAA                                    IS '배송지내역'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.NA_BZPLC                           IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.NA_TEAM_C                          IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.NA_TRPL_C                          IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.TR_NA_TEAM_C                       IS '거래경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DVYAA_C                            IS '배송지코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DVYAA_SCF_CNTN                     IS '배송지명세내용'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.FZIP                               IS '앞자리우편번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.RZIP                               IS '뒷자리우편번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.ZIP_SQNO                           IS '우편번호일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DONGUP                             IS '동이상주소'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.DONGBW                             IS '동이하주소'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.ATEL                               IS '전화지역번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.HTEL                               IS '전화국번호'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.STEL                               IS '전화일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.CHRRNM                             IS '담당자명'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_DVYAA.UYN                                IS '사용여부'                               ;

GRANT SELECT ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_DVYAA TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_RGN    지역코드
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_RGN                                      IS '지역코드'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.NA_RGN_C                             IS '경제통합지역코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.UP_NA_RGN_C                          IS '상위경제통합지역코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.RGN_CNM                              IS '지역코드명'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.RGN_LVL_C                            IS '지역레벨코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.RGN_FZIP                             IS '지역앞자리우편번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_RGN.DEL_YN                               IS '삭제여부(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_RGN TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_BIZTPC    사업유형기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_TR_BIZTPC ;

CREATE TABLE NHVANINF.TB_TR_BIZTPC (  
    NA_BZ_TPC                                                             VARCHAR2(2)       NOT NULL                  ,
    NA_BZ_TPNM                                                            VARCHAR2(50)                                ,
    DEL_YN                                                                CHAR(1)           DEFAULT  '0' NOT NULL     ,
    CONSTRAINT PK_TB_TR_BIZTPC PRIMARY KEY (NA_BZ_TPC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_BIZTPC                                   IS '사업유형기본'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_BIZTPC.NA_BZ_TPC                         IS '경제통합사업유형코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_BIZTPC.NA_BZ_TPNM                        IS '경제통합사업유형명'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_BIZTPC.DEL_YN                            IS '삭제여부(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_BIZTPC TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_BZPL_TP    사업장유형코드
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_BZPL_TP                                  IS '사업장유형코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_TPC                         IS '사업장유형코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_DTI_TPC                     IS '사업장세부유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_TP_LVL_C                    IS '사업장유형레벨코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_TPNM                        IS '사업장유형명'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.BZPL_DTI_TPNM                    IS '사업장세부유형명'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_BZPL_TP.DEL_YN                           IS '삭제여부(1,0)'                          ;

GRANT SELECT ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_BZPL_TP TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_TRNREL_REQ    거래관계요청기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_TRNREL_REQ                               IS '거래관계요청기본'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RQR_NA_TRPL_C                 IS '요청경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RQR_NA_TEAM_C                 IS '요청경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RQR_DT                        IS '요청일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_RQR_SQNO                   IS '거래요청일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_NA_TRPL_C                IS '수요자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_NA_TEAM_C                IS '수요자경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_NA_TRPL_C                IS '공급자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_TPC                  IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.BZ_METH_DSC                   IS '사업방식구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_ADJPL_NA_TRPL_C          IS '수요자정산처경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_ADJPL_NA_TEAM_C          IS '수요자정산처경제통합팀코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_CHRRNM               IS '수요자계약담당자명'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_CHRR_TELNO           IS '수요자계약담당자전화번호'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CSER_CTR_CHRR_MPNO            IS '수요자계약담당자휴대전화번호'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPYPL_HOFF_NA_TRPL_C          IS '공급처본사경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_BNK_C                    IS '공급자은행코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_STL_ACNO                 IS '공급자결제계좌번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_DPRNM                    IS '공급자예금주명'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_CTR_CHRRNM               IS '공급자계약담당자명'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_CTR_CHRR_TELNO           IS '공급자계약담당자전화번호'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPLR_CTR_CHRR_MPNO            IS '공급자계약담당자휴대전화번호'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SPY_TPC                       IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_ST_DT                     IS '계약시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_ED_DT                     IS '계약종료일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_STOP_DT                   IS '계약중지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_CLO_DT                    IS '계약해지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.CTR_CLO_RSNC                  IS '계약해지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_STOP_RSNC                  IS '거래중지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.ROTS_FLEX_PR_APL_YN           IS '계통탄력가격적용여부'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.BYNG_UPR_MOD_YN               IS '매입단가수정여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.NA_ODR_FBID_RSNC              IS '경제통합발주금지사유코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.ODR_FBID_DT                   IS '발주금지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.ODRPL_BUYER_ENO               IS '발주처바이어개인번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.NA_RVO_FBID_RSNC              IS '경제통합수주금지사유코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RVO_FBID_DT                   IS '수주금지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.LDTM_DDS                      IS '리드타임일수'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RGD_AMN_DSC                   IS '반품관리구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.NA_PMI_SBJ_DSC                IS '경제통합약정과목구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.STL_FDT_BASCD                 IS '결제기일기준코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDYRT_BASCD                  IS '장려금률기준코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDYRT                        IS '장려금률'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDY_BAS_AM                   IS '장려금기준금액'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.DDLY_SSDYRT                   IS '직송장려금률'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.SSDY_PY_PTM_DSC               IS '장려금지급시점구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.BKG_CHG_DT                    IS '예약변경일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_REL_RG_RQR_DSC             IS '거래관계등록요청구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.FSRG_DTM                      IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.LSCHG_DTM                     IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.LS_CMENO                      IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APVMN_ENO                     IS '승인자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APV_NA_BZPLC                  IS '승인경제통합사업장코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APV_NA_TEAM_C                 IS '승인경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.APV_DT                        IS '승인일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.REJ_RSNCTT                    IS '부결사유내용'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.TR_REL_PRG_STSC               IS '거래관계진행상태코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.PRC_YN                        IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.RSP_C_CNTN                    IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL_REQ.EDI_IF_ID                     IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRNREL_REQ TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_HANARO_REQ_M    하나로마트거래관계요청기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_HANARO_REQ_M                             IS '하나로마트거래관계요청기본'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.VAN_RQ_NO                   IS 'VAN요청번호'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CRQRTRPL                    IS '요청 사업장'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CRQRTEAM                    IS '요청 팀'                                ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CRQRMNENO                   IS '요청 사번'                              ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.MNGT_NA_TRPL_C              IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.MNGT_NA_TEAM_C              IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.SPLR_NA_TRPL_C              IS '공급자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.SPLR_NA_TEAM_C              IS '공급자경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CSER_CTR_TPC                IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.SPY_TPC                     IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.NA_WRS_LCLC                 IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.NA_WRS_MCLC                 IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.MNGT_NA_TR_TPC              IS '주관경제통합거래유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.CSER_TR_REL_AMNNO           IS '수요자관리번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.PRC_YN                      IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.RSP_C_CNTN                  IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_M.EDI_IF_ID                   IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_HANARO_REQ_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_HANARO_REQ_D    하나로마트거래관계요청사업장
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_HANARO_REQ_D                             IS '하나로마트거래관계요청사업장'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.VAN_RQ_NO                   IS 'VAN요청번호'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CRQRTRPL                    IS '요청 사업장'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CRQRTEAM                    IS '요청 팀'                                ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.SPLR_NA_TRPL_C              IS '공급자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.SPLR_NA_TEAM_C              IS '공급자경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CSER_NA_TRPL_C              IS '수요자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.CSER_NA_TEAM_C              IS '수요자경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_HANARO_REQ_D.MNGT_TR_REL_AMNNO           IS '주관관리번호'                           ;

GRANT SELECT ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_HANARO_REQ_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_TRNREL    거래관계기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_TRNREL                                   IS '거래관계기본'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NA_TRPL_C                    IS '수요자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NA_TEAM_C                    IS '수요자경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NA_TRPL_C                    IS '공급자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NA_TEAM_C                    IS '공급자경제통합팀코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_TPC                      IS '수요자계약유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPY_TPC                           IS '공급유형코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_WRS_LCLC                       IS '경제통합상품대분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_WRS_MCLC                       IS '경제통합상품중분류코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.MNGT_NA_TRPL_C                    IS '주관경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.MNGT_NA_TEAM_C                    IS '주관경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.MNGT_NA_TR_TPC                    IS '주관경제통합거래유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.BZ_METH_DSC                       IS '사업방식구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NA_USR_SYS_KDC               IS '수요자경제통합사용자시스템종류코드'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_NAAC_DSC                     IS '수요자중앙회조합구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NA_USR_SYS_KDC               IS '공급자경제통합사용자시스템종류코드'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_NAAC_DSC                     IS '공급자중앙회조합구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_ADJPL_NA_TRPL_C              IS '수요자정산처경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_ADJPL_NA_TEAM_C              IS '수요자정산처경제통합팀코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_CHRRNM                   IS '수요자계약담당자명'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_CHRR_TELNO               IS '수요자계약담당자전화번호'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CSER_CTR_CHRR_MPNO                IS '수요자계약담당자휴대전화번호'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_ADJPL_NA_TRPL_C              IS '공급자정산처경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_ADJPL_NA_TEAM_C              IS '공급자정산처경제통합팀코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPYPL_HOFF_NA_TRPL_C              IS '공급처본사경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_BNK_C                        IS '공급자은행코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_STL_ACNO                     IS '공급자결제계좌번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_DPRNM                        IS '공급자예금주명'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_CTR_CHRRNM                   IS '공급자계약담당자명'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_CTR_CHRR_TELNO               IS '공급자계약담당자전화번호'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SPLR_CTR_CHRR_MPNO                IS '공급자계약담당자휴대전화번호'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_ST_DT                         IS '계약시작일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_ED_DT                         IS '계약종료일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_STOP_DT                       IS '계약중지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_CLO_DT                        IS '계약해지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.CTR_CLO_RSNC                      IS '계약해지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.TR_STOP_RSNC                      IS '거래중지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.PRGR_DSC                          IS '가격군구분코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.PRGR_C                            IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.ROTS_FLEX_PR_APL_YN               IS '계통탄력가격적용여부'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.BYNG_UPR_MOD_YN                   IS '매입단가수정여부'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_ODR_FBID_RSNC                  IS '경제통합발주금지사유코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.ODR_FBID_DT                       IS '발주금지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.ODRPL_BUYER_ENO                   IS '발주처바이어개인번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_RVO_FBID_RSNC                  IS '경제통합수주금지사유코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.RVO_FBID_DT                       IS '수주금지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.RVOPL_BUYER_ENO                   IS '수주처바이어개인번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.LDTM_DDS                          IS '리드타임일수'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.RGD_AMN_DSC                       IS '반품관리구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.NA_PMI_SBJ_DSC                    IS '경제통합약정과목구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.STL_FDT_BASCD                     IS '결제기일기준코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDYRT_BASCD                      IS '장려금률기준코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDYRT                            IS '장려금률'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDY_BAS_AM                       IS '장려금기준금액'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.DDLY_SSDYRT                       IS '직송장려금률'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.SSDY_PY_PTM_DSC                   IS '장려금지급시점구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.FSRG_DTM                          IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.LSCHG_DTM                         IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.DEL_DTM                           IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.LS_CMENO                          IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRNREL.PY_FDTCN                          IS '지급기일'                               ;

GRANT SELECT ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRNREL TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_FLEX_REQ_M    탄력가격업체거래관계요청기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_FLEX_REQ_M                               IS '탄력가격업체거래관계요청기본'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.VAN_RQ_NO                     IS 'VAN요청번호'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.CRQRTRPL                      IS '요청 사업장'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.CRQRTEAM                      IS '요청 팀'                                ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.CRQRMNENO                     IS '요청 사번'                              ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_NA_TRPL_C             IS '타입1_수요자경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_NA_TEAM_C             IS '타입1_수요자경제통합팀코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_SPLR_NA_TRPL_C             IS '타입1_공급자경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_SPLR_NA_TEAM_C             IS '타입1_공급자경제통합팀코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_CTR_TPC               IS '타입1_수요자계약유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_SPY_TPC                    IS '타입1_공급유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_MNGT_NA_TRPL_C             IS '타입1_주관경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_MNGT_NA_TEAM_C             IS '타입1_주관경제통합팀코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_MNGT_NA_TR_TPC             IS '타입1_주관경제통합거래유형코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_NA_WRS_LCLC                IS '타입1_경제통합상품대분류코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_NA_WRS_MCLC                IS '타입1_경제통합상품중분류코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T1_CSER_TR_REL_AMNNO          IS '타입1_수요자관리번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_NA_TRPL_C             IS '타입2_수요자경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_NA_TEAM_C             IS '타입2_수요자경제통합팀코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_SPLR_NA_TRPL_C             IS '타입2_공급자경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_SPLR_NA_TEAM_C             IS '타입2_공급자경제통합팀코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_CTR_TPC               IS '타입2_수요자계약유형코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_SPY_TPC                    IS '타입2_공급유형코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_MNGT_NA_TRPL_C             IS '타입2_주관경제통합거래처코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_MNGT_NA_TEAM_C             IS '타입2_주관경제통합팀코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_MNGT_NA_TR_TPC             IS '타입2_주관경제통합거래유형코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_NA_WRS_LCLC                IS '타입2_경제통합상품대분류코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_NA_WRS_MCLC                IS '타입2_경제통합상품중분류코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.T2_CSER_TR_REL_AMNNO          IS '타입2_수요자관리번호'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.PRC_YN                        IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.RSP_C_CNTN                    IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_M.EDI_IF_ID                     IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_FLEX_REQ_M TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_FLEX_REQ_D    탄력가격업체거래관계요청사업장
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_TR_FLEX_REQ_D ;

CREATE TABLE NHVANINF.TB_TR_FLEX_REQ_D (  
    VAN_RQ_NO                                                             VARCHAR2(20)      NOT NULL                  ,
    CNGTRPL                                                               VARCHAR(13)       NOT NULL                  ,
    CNGTEAM                                                               VARCHAR(2)        NOT NULL                  ,
    CONSTRAINT PK_TB_TR_FLEX_REQ_D PRIMARY KEY (VAN_RQ_NO,CNGTRPL,CNGTEAM) 
)
;

COMMENT ON TABLE  NHVANINF.TB_TR_FLEX_REQ_D                               IS '탄력가격업체거래관계요청사업장'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_D.VAN_RQ_NO                     IS 'VAN요청번호'                            ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_D.CNGTRPL                       IS '공급처'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_FLEX_REQ_D.CNGTEAM                       IS '공급처팀'                               ;

GRANT SELECT ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_FLEX_REQ_D TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_TRPL_CIF    거래처기본&CIF
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_TRPL_CIF                                 IS '거래처기본&CIF'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_TRPL_C                       IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_TRPL_DSC                     IS '경제통합거래처구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NAAC_DSC                        IS '중앙회조합구분코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.CLNTNM                          IS '거래처명'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TRPL_ABR_NM                     IS '거래처약어명'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_MBCO_DSC                     IS '경제통합본지사구분코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.UP_NA_TRPL_C                    IS '상위경제통합거래처코드'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FZIP                            IS '앞자리우편번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.RZIP                            IS '뒷자리우편번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.ZIP_SQNO                        IS '우편번호일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.DONGUP                          IS '동이상주소'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.DONGBW                          IS '동이하주소'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_RGN_C                        IS '경제통합지역코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TEL_NAT_NO                      IS '전화국가번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.ATEL                            IS '전화지역번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.HTEL                            IS '전화국번호'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.STEL                            IS '전화일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FAX_RGNO                        IS '팩스지역번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.HFAX                            IS '팩스국번호'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FAX_SQNO                        IS '팩스일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.MPSVNO                          IS '휴대전화서비스번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.MPHNO                           IS '휴대전화국번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.MPSQNO                          IS '휴대전화일련번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.FMACH_PATS_TRT_YN               IS '농기계부품취급여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_BZPL_TXBZ_RPT_FORM_C         IS '경제통합사업장세무신고형태코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_USR_SYS_KDC                  IS '경제통합사용자시스템종류코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.ELT_TXBIL_UYN                   IS '전자세금계산서사용여부'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TR_STOP_YN                      IS '거래중지여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TR_STOP_RSNC                    IS '거래중지사유코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.TR_STOP_DT                      IS '거래중지일자'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.COPNO_CIF_NO                    IS '법인등록번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.REPMNM                          IS '대표자명'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.BZCCNM                          IS '업종코드명'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.BZTPNM                          IS '업태명'                                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LIQ_SEL_RPT_NO                  IS '주류판매신고번호'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LIQ_WHSL_COMP_C                 IS '주류도매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LIQ_RTL_COMP_C                  IS '주류소매업체코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.NA_TXBZ_DSC                     IS '경제통합세무구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.BIZ_NUMBER                      IS '사업자등록번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.CHG_YN                          IS '변경여부'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LS_CMENO                        IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.LS_NA_BZPLC                     IS '최종변경자사업장코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.PRC_YN                          IS '경통전송여부'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.RSP_C_CNTN                      IS '결과수신'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_CIF.EDI_IF_ID                       IS 'EDI인터페이스아이디'                    ;

GRANT SELECT ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRPL_CIF TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_TR_TRPL_PRGR    거래처별가격군기본
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

COMMENT ON TABLE  NHVANINF.TB_TR_TRPL_PRGR                                IS '거래처별가격군기본'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NA_TRPL_C                      IS '경제통합거래처코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NA_BYNG_SLPL_DSC               IS '경제통합매입매출처구분코드'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NA_BZ_TPC                      IS '경제통합사업유형코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.PRGR_C                         IS '가격군코드'                             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.JURD_PHDCT_NA_TRPL_C           IS '관할물류센터경제통합거래처코드'         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ROTS_FLEX_PR_APL_YN            IS '계통탄력가격적용여부'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ETMTR_BZ_YN                    IS '식자재사업여부'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.FSRG_DTM                       IS '최초등록일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.FSRGMN_ENO                     IS '최초등록자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.FSRGMN_NA_BZPLC                IS '최초등록자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LSCHG_DTM                      IS '최종변경일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LS_CMENO                       IS '최종변경자개인번호'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LSCGMN_NA_BZPLC                IS '최종변경자경제통합사업장코드'           ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.DEL_DTM                        IS '삭제일시'                               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.DLMN_ENO                       IS '삭제자개인번호'                         ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.DLMN_NA_BZPLC                  IS '삭제자경제통합사업장코드'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.BYNG_UPR_MOD_YN                IS '매입단가 수정여부(0:불가, 1: 가능)'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.NODR_BYNG_PSB_YN               IS '무발주매입 가능여부(0:불가, 1: 가능)'   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.GRS_SOJU_X_YN                  IS '지방소주물류센터배송여부'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_AMN_YN              IS '판매가통합관리여부'                     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_LSCHG_DTM           IS '본부통합대상여부변경일자'               ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_LS_CMENO            IS '본부통합대상여부변경자'                 ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SELPR_INTG_LSCGMN_NA_BZPLC     IS '본부통합대상여부변경사업장'             ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.LIQ_INF_US_CNCL_DSC            IS '주류정보이용체결구분코드 0.대상아님1.여 2.부';
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.BEAR_TRT_C                     IS '맥주취급코드 01:취급 NULL:미취급'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SOJU_TRT_C                     IS '소주취급코드 02:취급 NULL:미취급'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.YANGJU_TRT_C                   IS '양주취급코드 03:취급 NULL:미취급'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.WINE_TRT_C                     IS '와인취급코드 04:취급 NULL:미취급'       ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.MINSOK_TRT_C                   IS '민속주취급코드 05:취급 NULL:미취급'     ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ROGO_INTG_AMN_R1_YN            IS '수발주통합관리R1여부'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.ROGO_INTG_AMN_R2_YN            IS '수발주통합관리R2여부'                   ;
COMMENT ON COLUMN NHVANINF.TB_TR_TRPL_PRGR.SCTR_BYNG_AMN_YN               IS '특약매입관리여부'                       ;

GRANT SELECT ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_TR_TRPL_PRGR TO NHVANWAS WITH GRANT OPTION ; 


