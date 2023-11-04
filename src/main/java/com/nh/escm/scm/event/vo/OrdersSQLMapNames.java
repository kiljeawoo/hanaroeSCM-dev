package com.nh.escm.scm.event.vo;

public interface OrdersSQLMapNames {
	/*
	 * 예약행사수주현황
	 */
	public enum PreEventCommission {
		BKG_EVT_YY,
		BKG_EVT_NO,
		NA_WRS_C,
		NA_WRS_N,
		UNIT,
		RQ_QT,
		TOT_GOOD_PR,
		RVOPL_NA_TRPL_C,
		RVOPL_NA_TEAM_C,
		RVOPL_NA_TRPL_N,
		ODRPL_NA_TRPL_C,
		ODRPL_NA_TEAM_C,
		DFN_QT,
		DFN_RATE,
		TEST,
		BOXPE_AQZ
	}
	
	/*
	 * 예약행사집계현황
	 */
	public enum EventSumsCommission{
		TRPL_VIEW,
		BKG_EVT_YY,
		BKG_EVT_NO,
		TRPL_C,
		TRPL_N,
		TEAM_N,
		RQ_QT,
		DFN_QT,
		DFN_RATE,
		GOOD_PR,
		DVY_RQR_DT,
		NA_WRS_C,
		NA_WRS_N,
		WRS_STDNM,
		UNIT,
		BOXPE_AQZ,
		S_GOOD_PR,
		SLGT_ETR_NM,
		RVOPL_NM,
		RVOPL_NA_TEAM_C
	}
	
	/*
	 * 예약행사진행현황
	 */
	public enum EventPreEventProcCommission {
		BKG_EVT_YY,
		BKG_EVT_NO,
		BKG_EVTNM,
		NA_WRS_C,
		ODRPL_NA_TRPL_C,
		BKG_EVT_WRS_CND_DSC,
		SLGT_NM,
		ORR_DT,
		DVY_DT,
		PRG_STSC_NM,
		ODRPL_NA_TRPL_N,
		ODRPL_NA_TEAM_C,
		WRS_CNT,
		RQ_QT,
		DFN_QT,
		DV_QT,
		DD_QT,
		ER_QT,
		DL_QT
	}
	
	/*
	 * 행사가격조회
	 */
	public enum EpChangeCommission {
		EVT_SQNO,
		EVTNM,
		NA_BZPLC,
		SHRT_BZPLNM,
		NA_TEAM_C,
		TEAMNM,
		EVT_ST_DT,
		EVT_ED_DT,
		NA_WRS_C,
		WRSNM,
		WRS_ABR_NM,
		EVT_PCS,
		ECG_SEL_UPR
	}
}
