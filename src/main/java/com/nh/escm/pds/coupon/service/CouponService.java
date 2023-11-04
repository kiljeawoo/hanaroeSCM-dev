package com.nh.escm.pds.coupon.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pds.coupon.dao.CouponDAO;
import com.nh.escm.pds.coupon.vo.TB_GD_EVENT_CPN;

public class CouponService extends AbstractService {
	@Autowired
	private CouponDAO couponDAO;
	
	
	public boolean insertTemp(TB_GD_EVENT_CPN eventVO)
			throws AppetizerException {
		try {
			return couponDAO.insertTemp(eventVO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public boolean insertEventCPN(String TEMP_SEQ) {
		boolean isOK = couponDAO.setSuccessMark(TEMP_SEQ);
		if(isOK) {
			return couponDAO.insertEventCPN(TEMP_SEQ);
		} else {
			return isOK;
		}
	}
	
	public List<TB_GD_EVENT_CPN> getCouponList(
			String MNGT_NA_TRPL_C,
			String CPN_KDC,
			String NA_CPN_C,
			String CPN_WRSNM,
			String CPN_SC_NO,
			String CPN_MED_C,
			String DC_VLD_PRD_ST_DT,
			String DC_VLD_PRD_ED_DT) throws AppetizerException {
		try {
			return couponDAO.getCouponList(
					MNGT_NA_TRPL_C,
					CPN_KDC,
					NA_CPN_C,
					CPN_WRSNM,
					CPN_SC_NO,
					CPN_MED_C,
					DC_VLD_PRD_ST_DT,
					DC_VLD_PRD_ED_DT);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int updateCouponList(
					DataSet ds_coupon,
					List<TB_GD_EVENT_CPN> couponlist) throws AppetizerException {
		try{
			int res = 0;
			for(int i=0; i<ds_coupon.getRowCount(); i++){
				if(ds_coupon.getObject(i, "PRC_YN").equals("E")){
					res = couponDAO.updateCouponList(couponlist.get(i));
				}
			}
			return res;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	public List<TB_GD_EVENT_CPN> getCouponDetailList(
			String MNGT_NA_TRPL_C,
			String CPN_KDC,
			String NA_CPN_C) throws AppetizerException {
		try {
			return couponDAO.getCouponDetailList(MNGT_NA_TRPL_C, CPN_KDC, NA_CPN_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> getCouponErrorList(String MNGT_NA_TRPL_C, String CPN_KDC, String NA_CPN_C, String CPN_WRSNM, String CPN_SC_NO, String CPN_MED_C, String DC_VLD_PRD_ST_DT, String DC_VLD_PRD_ED_DT) throws AppetizerException {
		try {
			return couponDAO.getCouponErrorList(MNGT_NA_TRPL_C, CPN_KDC, NA_CPN_C, CPN_WRSNM, CPN_SC_NO, CPN_MED_C, DC_VLD_PRD_ST_DT, DC_VLD_PRD_ED_DT);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int resendCouponErrorList(DataSet ds_coupon, String userId) throws AppetizerException {
		try{
			int res = 0;
			
			for (int i = 0; i < ds_coupon.getRowCount(); i++) {
				String chk = ds_coupon.getString(i, "CHK");
				
				if ("1".equals(chk)) {
					String CPN_KDC = ds_coupon.getString(i, "CPN_KDC");
					String NA_CPN_C = ds_coupon.getString(i, "NA_CPN_C");
					String DC_NA_WRS_C = ds_coupon.getString(i, "DC_NA_WRS_C");
					String CPN_SC_NO = ds_coupon.getString(i, "CPN_SC_NO");
					
					res += couponDAO.resendCouponErrorList(CPN_KDC, NA_CPN_C, DC_NA_WRS_C, CPN_SC_NO, userId);
				}
			}
			
			return res;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int deleteCouponErrorList(DataSet ds_coupon) throws AppetizerException {
		try{
			int res = 0;
			
			for (int i = 0; i < ds_coupon.getRowCount(); i++) {
				String chk = ds_coupon.getString(i, "CHK");
				
				if ("1".equals(chk)) {
					String CPN_KDC = ds_coupon.getString(i, "CPN_KDC");
					String NA_CPN_C = ds_coupon.getString(i, "NA_CPN_C");
					String DC_NA_WRS_C = ds_coupon.getString(i, "DC_NA_WRS_C");
					String CPN_SC_NO = ds_coupon.getString(i, "CPN_SC_NO");
					
					res += couponDAO.deleteCouponErrorList(CPN_KDC, NA_CPN_C, DC_NA_WRS_C, CPN_SC_NO);
				}
			}
			
			return res;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
