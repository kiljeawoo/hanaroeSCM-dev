package com.nh.escm.common.dao;

import java.util.HashMap;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

/**
 * 빌링 마크업
 */
public class BillingMarkUpDao extends AbstractDao {
	
	public boolean markUp(String TABLE_NAME, String GLN, String MB_ID, Map<String, String> DT_MAP, Map<String, String> PK_MAP, String STRING_WHERER) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TABLE_NAME", TABLE_NAME);
		param.put("GLN", GLN);
		param.put("MB_ID", MB_ID);
		param.put("DT_MAP", DT_MAP);
		param.put("PK_MAP", PK_MAP);
		param.put("STRING_WHERER", STRING_WHERER);
		
		return getSqlSession().update("billing.markUp", param) > 0;
	}
	
	public void markUpP(Map<String, String> param, String GLN, String MB_ID) {
		Map<String, Object> hm = new HashMap<String, Object>();
		hm.put("GLN", GLN);
		hm.put("MB_ID", MB_ID);
		hm.put("SPYPL_NA_TRPL_C", param.get("SPYPL_NA_TRPL_C").toString());
		hm.put("DVYAA_NA_TRPL_C", param.get("DVYAA_NA_TRPL_C").toString());
		hm.put("DVY_PLA_DT", param.get("DVY_PLA_DT").toString());
		hm.put("NA_DVY_PLASH_SLPNO", param.get("NA_DVY_PLASH_SLPNO").toString());
		
		getSqlSession().selectOne("billing.markUpP", hm);
	}
	

	public boolean markUpClsSalesMonExcel(
			  final String TRPL_C
			, final String SL_YM
			, final String DT_DSC
			, final String LCLC
			, final String MCLC
			, final String SCLC
			, final String DTCF_C

			, final String MB_ID
			) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		//param.put("TABLE_NAME", TABLE_NAME);
		param.put("TRPL_C" , TRPL_C);
		param.put("SL_YM"  , SL_YM);
		param.put("DT_DSC", DT_DSC);
		param.put("LCLC"   , LCLC);
		param.put("MCLC"   , MCLC);
		param.put("SCLC"   , SCLC);
		param.put("DTCF_C" , DTCF_C);
		param.put("MB_ID", MB_ID);
		
		return getSqlSession().update("billing.markUpClsSalesMonExcel", param) > 0;
	}


	public boolean markUpClsSalesWeekExcel(
			  final String TRPL_C
			, final String SL_YM
			, final String DT_DSC
			, final String LCLC
			, final String MCLC
			, final String SCLC
			, final String DTCF_C
			
			, final String MB_ID
			) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		//param.put("TABLE_NAME", TABLE_NAME);
		param.put("TRPL_C" , TRPL_C);
		param.put("SL_YM"  , SL_YM);
		param.put("DT_DSC", DT_DSC);
		param.put("LCLC"   , LCLC);
		param.put("MCLC"   , MCLC);
		param.put("SCLC"   , SCLC);
		param.put("DTCF_C" , DTCF_C);
		param.put("MB_ID", MB_ID);
		
		return getSqlSession().update("billing.markUpClsSalesWeekExcel", param) > 0;
	}
}