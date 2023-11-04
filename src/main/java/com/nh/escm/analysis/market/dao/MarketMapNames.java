package com.nh.escm.analysis.market.dao;

public interface MarketMapNames {
	
	public enum MapNamesMKCodeName{
		CODE,NAME
	}
	
	public enum MapNamesMKPoint{
		CODE,NAME,AMOUNT,POINT,AMOUNT_TOT,QTY,AMOUNT_ORG,AMOUNT_TOT_ORG
	}
	
	public enum MapNamesMKRanking{
		CODE,NAME,AMOUNT,QTY,POINT,RN,PRE_RN,PRE_AMOUNT,PRE_QTY
	}
	
	public enum MapNamesMKCompetitors{
		CODE,NAME,
		AMOUNT,AMOUNT_TOT,POINT,
		PRE_AMOUNT,PRE_AMOUNT_TOT,PRE_POINT,
		QTY,QTY_TOT,QTY_POINT,
		PRE_QTY,PRE_QTY_TOT,PRE_QTY_POINT
	}	
	
	public enum MapNamesMinMax{
		MIN,MAX
	}
	
	public enum MapNamesABC{
		CODE,NAME,
		BZPLC0, BZPLC1,BZPLC2,BZPLC3,BZPLC4,BZPLC5,BZPLC6,BZPLC7,BZPLC8,BZPLC9,BZPLC10,
		BZPLC_P0, BZPLC_P1,BZPLC_P2,BZPLC_P3,BZPLC_P4,BZPLC_P5,BZPLC_P6,BZPLC_P7,BZPLC_P8,BZPLC_P9,BZPLC_P10,
		TOTAL
	}

	
	public enum MapNamesClsBzplcWrs{
        SL_YM
      , NA_WRS_LCLC
      , WRS_LCLFNM
      , NA_WRS_MCLC
      , WRS_MCLFNM
      , NA_WRS_SCLC
      , WRS_SCLFNM
      , NA_WRS_DTCF_C
      , WRS_DTCFNM
      , BZPLC
      , BZPLNM 
      , MFT_NA_TRPL_C
      , MFT_NA_TRPL_CNM
      , WRS_C 
      , WRSNM 
      , SL_QT 
      , SL_AM 
      , CONSENT_YN
	}	 
 
	public enum MapNamesInteTrpl{
		NA_TRPL_C, NA_TRPL_NM
	}
	
}
