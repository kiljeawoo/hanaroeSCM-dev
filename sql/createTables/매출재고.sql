--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_SA_TD_WRS    상품일매출집계
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_SA_TD_WRS ;

CREATE TABLE NHVANINF.TB_SA_TD_WRS (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    SPY_NA_TRPL_C                                                         VARCHAR2(13)      NOT NULL                  ,
    SL_DT                                                                 CHAR(8)           NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    ROTS_CTR_DSC                                                          CHAR(1)                                     ,
    SL_QT                                                                 NUMBER(12,2)      NOT NULL                  ,
    TOT_SLAM                                                              NUMBER(18,0)      NOT NULL                  ,
    CONSTRAINT PK_TB_SA_TD_WRS PRIMARY KEY (NA_BZPLC,NA_TEAM_C,SPY_NA_TRPL_C,SL_DT,NA_WRS_C) 
)
;

COMMENT ON TABLE  NHVANINF.TB_SA_TD_WRS                                   IS '상품일매출집계'                         ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.NA_BZPLC                          IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.NA_TEAM_C                         IS '매출경제통합팀코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.SPY_NA_TRPL_C                     IS '공급처거래처코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.SL_DT                             IS '매출일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.NA_WRS_C                          IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.ROTS_CTR_DSC                      IS '계약구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.SL_QT                             IS '매출수량'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_TD_WRS.TOT_SLAM                          IS '매출금액'                               ;

GRANT SELECT ON NHVANINF.TB_SA_TD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_SA_TD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_SA_TD_WRS TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_SA_TD_WRS TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_SA_CPN_RZS    쿠폰실적
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_SA_CPN_RZS ;

CREATE TABLE NHVANINF.TB_SA_CPN_RZS (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    SL_DT                                                                 CHAR(8)           NOT NULL                  ,
    NA_CPN_C                                                              VARCHAR2(14)      NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    DC_CPN_QT                                                             NUMBER(10,0)                                ,
    DC_CPN_UPR                                                            NUMBER(18,0)                                ,
    CPN_AM                                                                NUMBER(18,0)      NOT NULL                  ,
    CPN_DC_AM                                                             NUMBER(18,0)                                ,
    CPN_KDC                                                               VARCHAR2(6)                                 ,
    CONSTRAINT PK_TB_SA_CPN_RZS PRIMARY KEY (NA_BZPLC,SL_DT,NA_CPN_C,NA_WRS_C) 
)
PARTITION BY RANGE (SL_DT)
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

COMMENT ON TABLE  NHVANINF.TB_SA_CPN_RZS                                  IS '쿠폰실적'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.NA_BZPLC                         IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.SL_DT                            IS '매출일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.NA_CPN_C                         IS '경제통합쿠폰코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.NA_WRS_C                         IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.DC_CPN_QT                        IS '할인쿠폰수량'                           ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.DC_CPN_UPR                       IS '할인쿠폰단가'                           ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.CPN_AM                           IS '쿠폰금액'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.CPN_DC_AM                        IS '쿠폰할인금액'                           ;
COMMENT ON COLUMN NHVANINF.TB_SA_CPN_RZS.CPN_KDC                          IS '쿠폰종류코드'                           ;

GRANT SELECT ON NHVANINF.TB_SA_CPN_RZS TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_SA_CPN_RZS TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_SA_CPN_RZS TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_SA_CPN_RZS TO NHVANWAS WITH GRANT OPTION ; 


--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_SA_DP_STPL    재고내역
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_SA_DP_STPL ;

CREATE TABLE NHVANINF.TB_SA_DP_STPL (  
    NA_BZPLC                                                              VARCHAR2(13)      NOT NULL                  ,
    NA_TEAM_C                                                             VARCHAR2(2)       NOT NULL                  ,
    SPLR_NA_TRPL_C                                                        VARCHAR2(13)      NOT NULL                  ,
    SL_DT                                                                 CHAR(8)           NOT NULL                  ,
    NA_WRS_C                                                              VARCHAR2(25)      NOT NULL                  ,
    STPL_QT                                                               NUMBER(15,2)                                ,
    CONSTRAINT PK_TB_SA_DP_STPL PRIMARY KEY (NA_BZPLC,NA_TEAM_C,SPLR_NA_TRPL_C,SL_DT,NA_WRS_C) 
)
PARTITION BY RANGE (SL_DT)
(
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

COMMENT ON TABLE  NHVANINF.TB_SA_DP_STPL                                  IS '재고내역'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL.NA_BZPLC                         IS '경제통합사업장코드'                     ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL.NA_TEAM_C                        IS '경제통합팀코드'                         ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL.SPLR_NA_TRPL_C                   IS '공급자경제통합거래처코드'               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL.SL_DT                            IS '매출일자'                               ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL.NA_WRS_C                         IS '경제통합상품코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_SA_DP_STPL.STPL_QT                          IS '재고수량'                               ;

GRANT SELECT ON NHVANINF.TB_SA_DP_STPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_SA_DP_STPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_SA_DP_STPL TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_SA_DP_STPL TO NHVANWAS WITH GRANT OPTION ;

--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
--■NHVANINF.TB_LD_IC_TRA    거래구분코드
--■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
DROP   TABLE NHVANINF.TB_LD_IC_TRA ;

CREATE TABLE NHVANINF.TB_LD_IC_TRA (  
    NA_TR_DSC                                                             VARCHAR2(4)       NOT NULL                  ,
    TR_DSNM                                                               VARCHAR2(40)      NOT NULL                  ,
    TR_DS_ABR_NM                                                          VARCHAR2(20)                                ,
    NA_BLB_DFC_DSC                                                        CHAR(1)                                     ,
    TR_TGRM_DSC                                                           VARCHAR2(4)                                 ,
    SORT_SQNO                                                             NUMBER(10)                                  ,
    RMK_CNTN                                                              VARCHAR2(200)                               ,
    LS_DEL_DTM                                                            DATE                                        ,
    PRC_SQNO                                                              NUMBER(10)                                  ,
    CONSTRAINT PK_TB_LD_IC_TRA PRIMARY KEY (NA_TR_DSC) 
)
;

COMMENT ON TABLE  NHVANINF.TB_LD_IC_TRA                                   IS '거래구분코드'                           ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.NA_TR_DSC                         IS '경제통합거래구분코드'                   ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.TR_DSNM                           IS '거래구분명'                             ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.TR_DS_ABR_NM                      IS '거래구분약어명'                         ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.NA_BLB_DFC_DSC                    IS '경제통합흑자적자구분코드'               ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.TR_TGRM_DSC                       IS '거래전문구분코드'                       ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.SORT_SQNO                         IS '정렬일련번호'                           ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.RMK_CNTN                          IS '비고내용'                               ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.LS_DEL_DTM                        IS '최종삭제일시'                           ;
COMMENT ON COLUMN NHVANINF.TB_LD_IC_TRA.PRC_SQNO                          IS '처리일련번호'                           ;

GRANT SELECT ON NHVANINF.TB_LD_IC_TRA TO NHVANWAS WITH GRANT OPTION ; 
GRANT UPDATE ON NHVANINF.TB_LD_IC_TRA TO NHVANWAS WITH GRANT OPTION ; 
GRANT INSERT ON NHVANINF.TB_LD_IC_TRA TO NHVANWAS WITH GRANT OPTION ; 
GRANT DELETE ON NHVANINF.TB_LD_IC_TRA TO NHVANWAS WITH GRANT OPTION ; 
