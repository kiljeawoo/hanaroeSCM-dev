package com.nh.escm.pds.coupon.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pds.coupon.vo.TB_GD_EVENT_CPN;

public class CouponDAO extends AbstractDao {
	
	public boolean insertTemp(TB_GD_EVENT_CPN eventVO) {
		return getSqlSession().insert("couponDAO.insertTemp", eventVO) > 0;
	}
	
	public boolean insertEventCPN(String TEMP_SEQ) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TEMP_SEQ", TEMP_SEQ);
		return getSqlSession().insert("couponDAO.insertEventCPN", param) > 0;
	}
	
	public boolean setSuccessMark(String TEMP_SEQ) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TEMP_SEQ", TEMP_SEQ);
		return getSqlSession().update("couponDAO.setSuccessMark", param) > 0;
	}
	
	public List<TB_GD_EVENT_CPN> getCouponList(
			String MNGT_NA_TRPL_C,
			String CPN_KDC,
			String NA_CPN_C,
			String CPN_WRSNM,
			String CPN_SC_NO,
			String CPN_MED_C,
			String DC_VLD_PRD_ST_DT,
			String DC_VLD_PRD_ED_DT) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C);
		param.put("CPN_KDC", CPN_KDC);
		param.put("NA_CPN_C", NA_CPN_C);
		param.put("CPN_WRSNM", CPN_WRSNM);
		param.put("CPN_SC_NO", CPN_SC_NO);
		param.put("CPN_MED_C", CPN_MED_C);
		param.put("DC_VLD_PRD_ST_DT", DC_VLD_PRD_ST_DT);
		param.put("DC_VLD_PRD_ED_DT", DC_VLD_PRD_ED_DT);
		
		return getSqlSession().selectList("couponDAO.getCouponList", param);
	}
	
	public int updateCouponList(TB_GD_EVENT_CPN vo) {
		return getSqlSession().update("couponDAO.updateCouponList",vo);
	}
	
	public List<TB_GD_EVENT_CPN> getCouponDetailList(
			String MNGT_NA_TRPL_C,
			String CPN_KDC,
			String NA_CPN_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C);
		param.put("CPN_KDC", CPN_KDC);
		param.put("NA_CPN_C", NA_CPN_C);
		return getSqlSession().selectList("couponDAO.getCouponDetailList", param);
	}
	
	public List<Map<String, Object>> getCouponErrorList(String MNGT_NA_TRPL_C, String CPN_KDC, String NA_CPN_C, String CPN_WRSNM, String CPN_SC_NO, String CPN_MED_C, String DC_VLD_PRD_ST_DT, String DC_VLD_PRD_ED_DT) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MNGT_NA_TRPL_C", MNGT_NA_TRPL_C);
		param.put("CPN_KDC", CPN_KDC);
		param.put("NA_CPN_C", NA_CPN_C);
		param.put("CPN_WRSNM", CPN_WRSNM);
		param.put("CPN_SC_NO", CPN_SC_NO);
		param.put("CPN_MED_C", CPN_MED_C);
		param.put("DC_VLD_PRD_ST_DT", DC_VLD_PRD_ST_DT);
		param.put("DC_VLD_PRD_ED_DT", DC_VLD_PRD_ED_DT);
		
		return getSqlSession().selectList("couponDAO.getCouponErrorList", param);
	}
	
	public int resendCouponErrorList(String CPN_KDC, String NA_CPN_C, String DC_NA_WRS_C, String CPN_SC_NO, String userId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CPN_KDC", CPN_KDC);
		param.put("NA_CPN_C", NA_CPN_C);
		param.put("DC_NA_WRS_C", DC_NA_WRS_C);
		param.put("CPN_SC_NO", CPN_SC_NO);
		param.put("userId", userId);
		
		return getSqlSession().update("couponDAO.resendCouponErrorList", param);
	}
	
	public int deleteCouponErrorList(String CPN_KDC, String NA_CPN_C, String DC_NA_WRS_C, String CPN_SC_NO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CPN_KDC", CPN_KDC);
		param.put("NA_CPN_C", NA_CPN_C);
		param.put("DC_NA_WRS_C", DC_NA_WRS_C);
		param.put("CPN_SC_NO", CPN_SC_NO);
		
		return getSqlSession().delete("couponDAO.deleteCouponErrorList", param);
	}
}
