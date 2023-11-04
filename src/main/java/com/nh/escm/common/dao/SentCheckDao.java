package com.nh.escm.common.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class SentCheckDao extends AbstractDao {
	
	public Map<String, Object> checkSendState(String TEMP_SEQ) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TEMP_SEQ", TEMP_SEQ);
		
		return getSqlSession().selectOne("sentcheck.coupon_checkSendState", param);
	}
	
	
	public Map<String, Object> checkCouponSaleResult(String ADJ_YM, String ADJPL_NA_TRPL_C, int CPN_SC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ADJ_YM", ADJ_YM);
		param.put("ADJPL_NA_TRPL_C", ADJPL_NA_TRPL_C);
		param.put("CPN_SC", CPN_SC);
		
		return getSqlSession().selectOne("sentcheck.coupon_sale_result_checkSendState", param);
	}
	
	public Map<String, Object> orderCheckSendState(
			String ODRPL_NA_TRPL_C,
			String ODRPL_NA_TEAM_C,
			String ODR_DT,
			String ODR_SLPNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ODRPL_NA_TRPL_C", ODRPL_NA_TRPL_C);
		param.put("ODRPL_NA_TEAM_C", ODRPL_NA_TEAM_C);
		param.put("ODR_DT", ODR_DT);
		param.put("ODR_SLPNO", ODR_SLPNO);
		return getSqlSession().selectOne("sentcheck.order_checkSendState", param);
	}
	
	public Map<String, Object> dlvpnshtCheckSendState(
			String SPYPL_NA_TRPL_C,
			String DVYAA_NA_TRPL_C,
			String NA_DVY_PLASH_SLPNO,
			String DVY_PLA_DT) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		param.put("DVYAA_NA_TRPL_C", DVYAA_NA_TRPL_C);
		param.put("NA_DVY_PLASH_SLPNO", NA_DVY_PLASH_SLPNO);
		param.put("DVY_PLA_DT", DVY_PLA_DT);
		return getSqlSession().selectOne("sentcheck.dlvpnsht_checkSendState", param);
	}
	
	public Map<String, Object> WRSREQCheckSendState(
			String VAN_C_RQ_NO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("VAN_C_RQ_NO", VAN_C_RQ_NO);
		return getSqlSession().selectOne("sentcheck.wrsREQ_checkSendState", param);
	}


	public Map<String, Object> RTNCNFCheckSendState(
			String NA_TRPL_C,
			String NA_TEAM_C,
			String DRUP_DT,
			String RGD_PLA_NO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("NA_TEAM_C", NA_TEAM_C);
		param.put("DRUP_DT", DRUP_DT);
		param.put("RGD_PLA_NO", RGD_PLA_NO);
		return getSqlSession().selectOne("sentcheck.RTNCNF_checkSendState", param);
	}
	
	public Map<String, Object> STPNLTCheckSendState(
			String NA_BZPLC,
			String STR_PLA_DT,
			String SLPNO,
			String NA_TRPL_C,
			String NA_WRS_C,
			String NA_TEAM_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", NA_BZPLC);
		param.put("STR_PLA_DT", STR_PLA_DT);
		param.put("SLPNO", SLPNO);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("NA_WRS_C", NA_WRS_C);
		param.put("NA_TEAM_C", NA_TEAM_C);
		return getSqlSession().selectOne("sentcheck.STPNLT_checkSendState", param);
	}


	public Map<String, Object> VHCBKGCheckSendState(
			String PHD_NA_BZPLC,
			String VHC_BKG_PHD_IDVD_NO,
			String NA_TRPL_C,
			String VHC_BKG_DT) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PHD_NA_BZPLC", PHD_NA_BZPLC);
		param.put("VHC_BKG_PHD_IDVD_NO", VHC_BKG_PHD_IDVD_NO);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("VHC_BKG_DT", VHC_BKG_DT);
		return getSqlSession().selectOne("sentcheck.VHCBKG_checkSendState", param);
	}
	
	public Map<String, Object> DLVPNSHTBATCheckSendState(String TEMP_SEQ) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TEMP_SEQ", TEMP_SEQ);
		
		return getSqlSession().selectOne("sentcheck.dlvpnshtBAT_checkSendState", param);
	}
	
	public Map<String, Object> TRHARAROCheckSendState(List<String> vanNolist) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("vanNolist", vanNolist);
		return getSqlSession().selectOne("sentcheck.TRHARAROCheckSendState", param);
	}
	
	public Map<String, Object> TRFLEXCheckSendState(String vanNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("vanNO", vanNO);
		return getSqlSession().selectOne("sentcheck.TRFLEXCheckSendState", param);
	}
}