--PARAM : 공급처/수주처 거래처코드
--RETURN : 공급처/수주처 거래처명
CREATE OR REPLACE FUNCTION FN_TRPL_CIF_NM(
        P_NA_TRPL_C  varchar2
)
RETURN VARCHAR2 IS returnValue VARCHAR2(50);
BEGIN
	SELECT
  	NVL(CLNTNM, '') INTO returnValue
  FROM
  	TB_TR_TRPL_CIF
  WHERE 1=1
  	AND NA_TRPL_C = P_NA_TRPL_C;
	RETURN returnValue;
	EXCEPTION
  	WHEN NO_DATA_FOUND THEN
    	returnValue := '';
  RETURN returnValue;
END FN_TRPL_CIF_NM;

GRANT EXECUTE ON FN_TRPL_CIF_NM TO NHVANWAS WITH GRANT OPTION ;

--PARAM : 발주처(사업장) 거래처코드
--RETURN : 발주처명(사업장)
CREATE OR REPLACE FUNCTION FN_CM_BZPL_NM(
        P_NA_BZPLC  varchar2
)
RETURN VARCHAR2 IS returnValue VARCHAR2(20);

BEGIN
	SELECT
  	NVL(SHRT_BZPLNM, '') INTO returnValue
  FROM
  	TB_CM_BZPL
  WHERE 1=1
  	AND NA_BZPLC = P_NA_BZPLC;
	RETURN returnValue;
	EXCEPTION
  	WHEN NO_DATA_FOUND THEN
    	returnValue := '';
  RETURN returnValue;
END FN_CM_BZPL_NM;
GRANT EXECUTE ON FN_CM_BZPL_NM TO NHVANWAS WITH GRANT OPTION ;

--PARAM : 수/발주코드, 팀코드
--RETURN : 팀명(사업장)
CREATE OR REPLACE FUNCTION FN_CM_TEAM_NM(
        P_NA_BZPLC  VARCHAR2,
        P_NA_TEAM_C  VARCHAR2
)
RETURN VARCHAR2 IS returnValue VARCHAR2(20);

BEGIN
	SELECT
  	NVL(TEAMNM, '') INTO returnValue
  FROM
  	TB_CM_TEAM
  WHERE 1=1
  	AND NA_BZPLC = P_NA_BZPLC
    AND NA_TEAM_C = P_NA_TEAM_C;

	RETURN returnValue;
	EXCEPTION
  	WHEN NO_DATA_FOUND THEN
    	returnValue := '';
  RETURN returnValue;
END FN_CM_TEAM_NM;
GRANT EXECUTE ON FN_CM_TEAM_NM TO NHVANWAS WITH GRANT OPTION ;


/*------------------------------------------------------------------------------
-- 개체 이름: FN_CM_SIMP_CNM
-- 만든 날짜: 2015-07-21 오후 1:49:02
-- 마지막으로 수정한 날짜: 2015-07-21 오후 1:56:26
-- 상태: VALID
------------------------------------------------------------------------------*/
CREATE OR REPLACE FUNCTION FN_CM_SIMP_CNM(
        P_SIMP_TPC  VARCHAR2,
        P_SIMP_C  VARCHAR2
)
RETURN VARCHAR2 IS returnValue VARCHAR2(100);

BEGIN
	SELECT
  	NVL(SIMP_CNM, '') INTO returnValue
  FROM
  	TB_CM_SIMPC
  WHERE 1=1
    AND SIMP_TPC = P_SIMP_TPC
    AND SIMP_C = P_SIMP_C;

	RETURN returnValue;
	EXCEPTION
  	WHEN NO_DATA_FOUND THEN
    	returnValue := '';
  RETURN returnValue;
END FN_CM_SIMP_CNM;
GRANT EXECUTE ON FN_CM_SIMP_CNM TO NHVANWAS WITH GRANT OPTION ;

/*------------------------------------------------------------------------------
-- 개체 이름: FN_SRH_PRGR_C
-- 만든 날짜: 2015-08-13 오후 2:15:02
-- 마지막으로 수정한 날짜: 2015-08-13 오후 2:15:02
-- 상태: VALID
------------------------------------------------------------------------------*/
--PARAM : 사업장코드 , 상품코드
--RETURN : 가격군코드
CREATE OR REPLACE FUNCTION FN_SRH_PRGR_C(
        P_NA_BZPLC  VARCHAR2,
        P_NA_WRS_C  VARCHAR2
)
RETURN VARCHAR2 IS returnValue VARCHAR2(100);

BEGIN
	SELECT
  	NVL(PRGR_C, '') INTO returnValue
  FROM
  	TB_GD_PRGR_GOODRSV
  WHERE 1=1
    AND NA_BZPLC = P_NA_BZPLC
    AND NA_WRS_C = P_NA_WRS_C
	AND APL_DT = (select max(APL_DT) from TB_GD_PRGR_GOODRSV WHERE NA_BZPLC = P_NA_BZPLC AND NA_WRS_C = P_NA_WRS_C)
	AND rownum = 1;

	RETURN returnValue;
	EXCEPTION
  	WHEN NO_DATA_FOUND THEN
    	returnValue := '';
  RETURN returnValue;
END FN_SRH_PRGR_C;
GRANT EXECUTE ON FN_SRH_PRGR_C TO NHVANWAS WITH GRANT OPTION ;

/*------------------------------------------------------------------------------
-- 개체 이름: FN_CNR_DS_AM
-- 만든 날짜: 2015-11-15 오후 5:40:02
-- 마지막으로 수정한 날짜: 2015-11-15 오후 5:40:02
-- 상태: VALID
------------------------------------------------------------------------------*/
--PARAM : 거래구분코드(NA_TR_DSC) , 정정취소구분코드(NA_CRC_CAN_DSC)
--RETURN : 검수구분금액
CREATE OR REPLACE FUNCTION FN_CNR_DS_AM(
        P_NA_TR_DSC  VARCHAR2,
        P_NA_CRC_CAN_DSC  VARCHAR2
)
RETURN VARCHAR2 IS returnValue VARCHAR2(5);

BEGIN
	SELECT
  	NVL(DECODE(P_NA_TR_DSC,'IB01',DECODE(P_NA_CRC_CAN_DSC,'2','-1','3','-1', '1'),'IB03',DECODE(P_NA_CRC_CAN_DSC,'2','-1','3','-1', '1'),'IB04',DECODE(P_NA_CRC_CAN_DSC,'2','-1','3','-1', '1'),'','',NULL,'',DECODE(P_NA_CRC_CAN_DSC,'2','1','3','1', '-1')),'')
  	INTO returnValue
  FROM
  	DUAL;
  	
	RETURN returnValue;
END FN_CNR_DS_AM;
GRANT EXECUTE ON FN_CNR_DS_AM TO NHVANWAS WITH GRANT OPTION ;
