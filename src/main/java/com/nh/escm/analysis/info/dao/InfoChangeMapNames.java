package com.nh.escm.analysis.info.dao;

public interface InfoChangeMapNames {

	//관심 점포/상품
	public enum MapNamesIC_Interest{
		TRPL_C, CODE, NAME, NO, YMD, CONSENT_YN, NAME_YN,CHECK_BOX
	}
	
	//자사 월별 매출 추이
	public enum MapNamesIC_SalesMonthly{
		YMD, AMOUNT, CODE, NAME, QTY
	}
	
	//자사 주별 매출 추이
	public enum MapNamesIC_SalesWeekly{
		YMD, AMOUNT, CODE, NAME, QTY, WEEKS
	}
	
	//자사 일별 매출 추이
	public enum MapNamesIC_SalesDaily{
		YMD, AMOUNT, CODE, NAME, QTY
	}
	
	//자사 월별 재고 추이
	public enum MapNamesIC_StockMonthly{
		YMD, AMOUNT, CODE, NAME, QTY
	}
	
	//자사 월별 재고 추이
	public enum MapNamesIC_StockDaily{
		YMD, AMOUNT, CODE, NAME, QTY
	}
}
