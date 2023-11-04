package com.nh.escm.pds.sales.vo;

public interface SQLMapNames {	
	
	/*
	 * 	NA_WRS_C - 상품코드
		, WRSNM - 상품명
		, SL_QT - 수량
		, TOT_SLAM - 금액(만원)
		, TOTAL_SL_QT - 총 합계 수량
		, TOTAL_TOT_SLAM	 - 총 합계 금액(만원)
	 */
	
	/* 기간별 점포별/상품별 정보 - 상세 */
	public enum SalesPeriodStoreDetailNames {
		NA_WRS_C
		, WRSNM
		, SL_QT
		, TOT_SLAM
		, TOTAL_SL_QT
		, TOTAL_TOT_SLAM
		, SHARE_SLAM
	}
	
	/* 기간별 상품별/점포별 정보 - 상세 */
	public enum SalesPeriodSkuDetailNames {
		NA_BZPLC
		, CLNTNM
		, SL_QT
		, TOT_SLAM
		, TOTAL_SL_QT
		, TOTAL_TOT_SLAM
		, SHARE_SLAM
	}
	
	/* 지역코드, 지역코드2 */
	public enum RgnClNames {
		NA_RGN_C
		, RGN_CNM	
	}
	
	/* 지역코드, 지역코드2 */
	public enum MrCenter {
		NA_TRPL_C
		, CLNTNM		
	}
	
	/* 자료수신 월별집계 */
	public enum downloadExcelSalesMonthly {
		SL_YM
		, BZPLC
		, BZPLCNM
		, SL_QT
		, SL_AM	
	}
	
	/* 자료수신 월별집계 상품별 */
	public enum downloadExcelSalesMonthlyWrsC {
		SL_YM
		, WRS_C
		, WRSNM
		, SL_QT
		, SL_AM	
	}	
	
	/* 자료수신 일일자료 */
	public enum downloadExcelDaily {
		NA_BZPLC
		, SHRT_BZPLNM
		, NA_WRS_C
		, WRSNM
		, SL_QT
		, TOT_SLAM
	}
	
}
