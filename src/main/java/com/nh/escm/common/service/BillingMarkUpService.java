package com.nh.escm.common.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.common.ClientHolder;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.vo.DeduplicationObject;
import com.nh.escm.common.dao.BillingMarkUpDao;

/**
 * 빌링 마크업
 *   - 관리자가 사용자전환으로 로그인한 경우, 과금하지 않는다.
 */
@Service
public class BillingMarkUpService extends AbstractService {
	
	public enum BillingMarkUpTableName {
		TB_OD_ORDER_M, TB_OD_DLVPNSHT_M, TB_BY_BYNG_M, TB_LG_OUT_D, TB_LG_DV_SILRPT, TB_OD_ORDRSV, TB_OD_ORDER_TC
	};
	
	@Autowired
	private BillingMarkUpDao billingMarkUpDao;
	
	// 공통 API
	private void _markUp(final BillingMarkUpTableName tableName, final String GLN, final String MB_ID,
			final Map<String, String> dtMap, final List<Map<String, String>> pkMapList, final String STRING_WHERER) {
		
		if ("Y".equals(ClientHolder.getTransYn())) {
			logger.info("_markUp(" + tableName + ", " + GLN + ", " + MB_ID + ") -> 사용자전환 과금 제외!!");
			return; // 관리자가 사용자전환으로 로그인한 경우, 과금하지 않는다.
		}
		
		new Thread(new Runnable() {
			@Override
			public void run() {
				for (Map<String, String> pkMap : pkMapList) {
					try {
						validation(tableName, GLN, MB_ID, dtMap, pkMap);
						billingMarkUpDao.markUp(tableName.name(), GLN, MB_ID, dtMap, pkMap, STRING_WHERER);
					} catch (ValidationException e) {
						logger.error(e.getMessage(), e); // ignore
					} catch (AppetizerException e) {
						logger.error(e.getMessage(), e); // ignore
					}
				}
			}
		}).start();
	}
	
	// 공통 API
	private void _markUpP(final List<Map<String, String>> paramList, final String GLN, final String MB_ID) {
		
		if ("Y".equals(ClientHolder.getTransYn())) {
			logger.info("_markUpP(" + GLN + ", " + MB_ID + ") -> 사용자전환 과금 제외!!");
			return; // 관리자가 사용자전환으로 로그인한 경우, 과금하지 않는다.
		}
		
		new Thread(new Runnable() {
			@Override
			public void run() {
				for (Map<String, String> param : paramList) {
					try {
						validationP(param, GLN, MB_ID);
						billingMarkUpDao.markUpP(param, GLN, MB_ID);
					} catch (ValidationException e) {
						logger.error(e.getMessage(), e); // ignore
					} catch (AppetizerException e) {
						logger.error(e.getMessage(), e); // ignore
					}
				}
			}
		}).start();
	}
	
	//****************************** 문서별 API ******************************//
	
	public void markUp(BillingMarkUpTableName tableName, String GLN, String MB_ID, Map<String, String> dtMap, Map<String, String> pkMap) {
		
		List<Map<String, String>> pkMapList = new ArrayList<Map<String, String>>();
		
		pkMapList.add(pkMap);
		
		_markUp(tableName, GLN, MB_ID, dtMap, pkMapList, null);
	}
	
	public void markUp(BillingMarkUpTableName tableName, String GLN, String MB_ID, Map<String, String> dtMap, Map<String, String> pkMap, String STRING_WHERER) {
		
		List<Map<String, String>> pkMapList = new ArrayList<Map<String, String>>();
		
		pkMapList.add(pkMap);
		
		_markUp(tableName, GLN, MB_ID, dtMap, pkMapList, STRING_WHERER);
	}
	
	public void markUpForOrders(BillingMarkUpTableName tableName, String GLN, String MB_ID, HashSet<DeduplicationObject> billingSet) {
		
		List<Map<String, String>> pkMapList = new ArrayList<Map<String, String>>();
		
		for (DeduplicationObject ddo : billingSet) {
			Map<String, String> pkMap = new HashMap<String, String>();
			pkMap.put("ODRPL_NA_TRPL_C", ddo.getValues().get("ODRPL_NA_TRPL_C").toString());
			pkMap.put("ODRPL_NA_TEAM_C", ddo.getValues().get("ODRPL_NA_TEAM_C").toString());
			pkMap.put("ODR_DT",          ddo.getValues().get("ODR_DT").toString());
			pkMap.put("ODR_SLPNO",       ddo.getValues().get("ODR_SLPNO").toString());
			
			pkMapList.add(pkMap);
		}
		
		_markUp(tableName, GLN, MB_ID, null, pkMapList, null);
	}
	
	public void markUpForOrdersTC(BillingMarkUpTableName tableName, String GLN, String MB_ID, HashSet<DeduplicationObject> billingSet) {
		
		List<Map<String, String>> pkMapList = new ArrayList<Map<String, String>>();
		
		for (DeduplicationObject ddo : billingSet) {
			Map<String, String> pkMap = new HashMap<String, String>();
			pkMap.put("ODRPL_NA_TRPL_C", ddo.getValues().get("ODRPL_NA_TRPL_C").toString());
			pkMap.put("ODRPL_NA_TEAM_C", ddo.getValues().get("ODRPL_NA_TEAM_C").toString());
			pkMap.put("ODR_DT",          ddo.getValues().get("ODR_DT").toString());
			pkMap.put("ODR_SLPNO",       ddo.getValues().get("ODR_SLPNO").toString());
			pkMap.put("ODR_DSQNO",       ddo.getValues().get("ODR_DSQNO").toString());
			
			pkMapList.add(pkMap);
		}
		
		_markUp(tableName, GLN, MB_ID, null, pkMapList, null);
	}
	
	public void markUpForOrderReserved(BillingMarkUpTableName tableName, String GLN, String MB_ID, HashSet<DeduplicationObject> billingSet) {
		
		List<Map<String, String>> pkMapList = new ArrayList<Map<String, String>>();
		
		for (DeduplicationObject ddo : billingSet) {
			Map<String, String> pkMap = new HashMap<String, String>();
			pkMap.put("ODRPL_NA_TRPL_C", ddo.getValues().get("ODRPL_NA_TRPL_C").toString());
			pkMap.put("ODRPL_NA_TEAM_C", ddo.getValues().get("ODRPL_NA_TEAM_C").toString());
			pkMap.put("ODR_DT",          ddo.getValues().get("ODR_DT").toString());
			pkMap.put("ODR_SLPNO",       ddo.getValues().get("ODR_SLPNO").toString());
			if (ddo.getValues().containsKey("SPYPL_NA_TRPL_C")) {
				pkMap.put("SPYPL_NA_TRPL_C", ddo.getValues().get("SPYPL_NA_TRPL_C").toString());
			}
			if (ddo.getValues().containsKey("NA_WRS_C")) {
				pkMap.put("NA_WRS_C",        ddo.getValues().get("NA_WRS_C").toString());
			}
			
			pkMapList.add(pkMap);
		}
		
		_markUp(tableName, GLN, MB_ID, null, pkMapList, null);
	}
	
	public void markUpForCenter(BillingMarkUpTableName tableName, String GLN, String MB_ID, HashSet<DeduplicationObject> billingSet) {
		
		List<Map<String, String>> pkMapList = new ArrayList<Map<String, String>>();
		
		for (DeduplicationObject ddo : billingSet) {
			Map<String, String> pkMap = new HashMap<String, String>();
			pkMap.put("PHD_NA_BZPLC",    ddo.getValues().get("PHD_NA_BZPLC").toString());
			pkMap.put("DLR_PHD_IDVD_NO", ddo.getValues().get("DLR_PHD_IDVD_NO").toString());
			pkMap.put("DLR_PHD_SQNO",    ddo.getValues().get("DLR_PHD_SQNO").toString());
			pkMap.put("WRS_GRD_DSC",     ddo.getValues().get("WRS_GRD_DSC").toString());
			
			pkMapList.add(pkMap);
		}
		
		_markUp(tableName, GLN, MB_ID, null, pkMapList, null);
	}
	
	public void markUpForRecadv(BillingMarkUpTableName tableName, String GLN, String MB_ID, HashSet<DeduplicationObject> billingSet) {
		
		List<Map<String, String>> pkMapList = new ArrayList<Map<String, String>>();
		
		for (DeduplicationObject ddo : billingSet) {
			Map<String, String> pkMap = new HashMap<String, String>();
			pkMap.put("NA_BZPLC",  ddo.getValues().get("NA_BZPLC").toString());
			pkMap.put("NA_TEAM_C", ddo.getValues().get("NA_TEAM_C").toString());
			pkMap.put("SLP_DT",    ddo.getValues().get("SLP_DT").toString());
			pkMap.put("NA_SLPNO",  ddo.getValues().get("NA_SLPNO").toString());
			
			pkMapList.add(pkMap);
		}
		
		_markUp(tableName, GLN, MB_ID, null, pkMapList, null);
	}
	
	public void markUpForDlvpnshtExcel(String GLN, String MB_ID, HashSet<DeduplicationObject> billingSet) {
		
		List<Map<String, String>> paramList = new ArrayList<Map<String, String>>();
		
		for (DeduplicationObject ddo : billingSet) {
			Map<String, String> param = new HashMap<String, String>();
			param.put("SPYPL_NA_TRPL_C",    ddo.getValues().get("SPYPL_NA_TRPL_C").toString());
			param.put("DVYAA_NA_TRPL_C",    ddo.getValues().get("DVYAA_NA_TRPL_C").toString());
			param.put("DVY_PLA_DT",         ddo.getValues().get("DVY_PLA_DT").toString());
			param.put("NA_DVY_PLASH_SLPNO", ddo.getValues().get("NA_DVY_PLASH_SLPNO").toString());
			
			paramList.add(param);
		}
		
		_markUpP(paramList, GLN, MB_ID);
	}
	
	//****************************** 문서별 validation ******************************//
	
	private void validation(BillingMarkUpTableName tableName, String GLN, String MB_ID, Map<String, String> dtMap, Map<String, String> pkMap) throws ValidationException {
		
		if (tableName == null) {
			throw new ValidationException("TABLE_NAME IS NULL");
		}
		if (StringUtils.isEmpty(GLN)) {
			throw new ValidationException("GLN IS NULL");
		}
		if (StringUtils.isEmpty(MB_ID)) {
			throw new ValidationException("MB_ID IS NULL");
		}
		
		if (BillingMarkUpTableName.TB_OD_ORDER_M.equals(tableName)) {
			if (StringUtils.isEmpty(pkMap.get("ODRPL_NA_TRPL_C"))) {
				throw new ValidationException("ODRPL_NA_TRPL_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("ODRPL_NA_TEAM_C"))) {
				throw new ValidationException("ODRPL_NA_TEAM_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("ODR_DT"))) {
				throw new ValidationException("ODR_DT IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("ODR_SLPNO"))) {
				throw new ValidationException("ODR_SLPNO IS NULL");
			}
		} else if (BillingMarkUpTableName.TB_OD_ORDRSV.equals(tableName)) {
			if (StringUtils.isEmpty(pkMap.get("ODRPL_NA_TRPL_C"))) {
				throw new ValidationException("ODRPL_NA_TRPL_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("ODRPL_NA_TEAM_C"))) {
				throw new ValidationException("ODRPL_NA_TEAM_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("ODR_DT"))) {
				throw new ValidationException("ODR_DT IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("ODR_SLPNO"))) {
				throw new ValidationException("ODR_SLPNO IS NULL");
			}
		} else if (BillingMarkUpTableName.TB_OD_DLVPNSHT_M.equals(tableName)) {
			if (StringUtils.isEmpty(pkMap.get("SPYPL_NA_TRPL_C"))) {
				throw new ValidationException("SPYPL_NA_TRPL_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("DVYAA_NA_TRPL_C"))) {
				throw new ValidationException("DVYAA_NA_TRPL_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("NA_DVY_PLASH_SLPNO"))) {
				throw new ValidationException("NA_DVY_PLASH_SLPNO IS NULL");
			}
		} else if (BillingMarkUpTableName.TB_BY_BYNG_M.equals(tableName)) {
			if (StringUtils.isEmpty(pkMap.get("NA_BZPLC"))) {
				throw new ValidationException("NA_BZPLC IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("NA_TEAM_C"))) {
				throw new ValidationException("NA_TEAM_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("SLP_DT"))) {
				throw new ValidationException("SLP_DT IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("NA_SLPNO"))) {
				throw new ValidationException("NA_SLPNO IS NULL");
			}
		} else if (BillingMarkUpTableName.TB_LG_OUT_D.equals(tableName)) {
			if (StringUtils.isEmpty(pkMap.get("PHD_NA_BZPLC"))) {
				throw new ValidationException("PHD_NA_BZPLC IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("DLR_PHD_IDVD_NO"))) {
				throw new ValidationException("DLR_PHD_IDVD_NO IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("DLR_PHD_SQNO"))) {
				throw new ValidationException("DLR_PHD_SQNO IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("WRS_GRD_DSC"))) {
				throw new ValidationException("WRS_GRD_DSC IS NULL");
			}
		} else if (BillingMarkUpTableName.TB_LG_DV_SILRPT.equals(tableName)) {
			if (StringUtils.isEmpty(pkMap.get("PHD_NA_BZPLC"))) {
				throw new ValidationException("PHD_NA_BZPLC IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("NA_SPYPL_C"))) {
				throw new ValidationException("NA_SPYPL_C IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("NA_DVY_PLASH_SLPNO"))) {
				throw new ValidationException("NA_DVY_PLASH_SLPNO IS NULL");
			}
			if (StringUtils.isEmpty(pkMap.get("NA_WRS_C"))) {
				throw new ValidationException("NA_WRS_C IS NULL");
			}
		}
	}
	
	private void validationP(Map<String, String> param, String GLN, String MB_ID) throws ValidationException {
		
		if (StringUtils.isEmpty(param.get("SPYPL_NA_TRPL_C"))) {
			throw new ValidationException("SPYPL_NA_TRPL_C IS NULL");
		}
		if (StringUtils.isEmpty(param.get("DVYAA_NA_TRPL_C"))) {
			throw new ValidationException("DVYAA_NA_TRPL_C IS NULL");
		}
		if (StringUtils.isEmpty(param.get("NA_DVY_PLASH_SLPNO"))) {
			throw new ValidationException("NA_DVY_PLASH_SLPNO IS NULL");
		}
		if (StringUtils.isEmpty(GLN)) {
			throw new ValidationException("GLN IS NULL");
		}
		if (StringUtils.isEmpty(MB_ID)) {
			throw new ValidationException("MB_ID IS NULL");
		}
	}
	
	
	
	/*
	 *  카테고리판매정보 다운로드
	 *  
	 */
	public void markUpClsSalesMonExcel( String TRPL_C, String SL_YM, String DT_DSC, String LCLC, String MCLC, String SCLC, String DTCF_C, String MB_ID) {
		
	/*
	 * 
	 * DN_DT	  엑셀다운로드일자
	 * TRPL_C	  거래처코드
	 * SL_YM	  매출년월(주차)
	 * LCLC	           구분코드(월별:1, 주차:2)
	 * WRS_C	  상품코드
	 * FSRG_DTM	  최초등록일시
	 * FS_RGM	  최초등록자
	 * LSCHG_DTM 최종변경일시
	 * LS_CHGM	  최종변경자
	 * 
	 */
		_markUpClsSalesMonExcel(TRPL_C, SL_YM, DT_DSC, LCLC, MCLC, SCLC, DTCF_C, MB_ID);
	}
	
	
	/*
	 * 
	 * 
	 */
	//판매정보 다운로드
	private void _markUpClsSalesMonExcel(
			
			  final String TRPL_C
			, final String SL_YM
			, final String DT_DSC
			, final String LCLC
			, final String MCLC
			, final String SCLC
			, final String DTCF_C
			, final String MB_ID
			
			
			) {
		
		if ("Y".equals(ClientHolder.getTransYn())) {
			logger.info("markUpClsSalesExcel(" +   "  " + TRPL_C + ", " + MB_ID + ") -> 사용자전환 과금 제외!!");
			return; // 관리자가 사용자전환으로 로그인한 경우, 과금하지 않는다.
		}
		
		/*
		 * 
		 * DN_DT	  엑셀다운로드일자
		 * TRPL_C	  거래처코드
		 * SL_YM	  매출년월(주차)
		 * LCLC	           구분코드(월별:1, 주차:2)
		 * WRS_C	  상품코드
		 * FSRG_DTM	  최초등록일시
		 * FS_RGM	  최초등록자
		 * LSCHG_DTM 최종변경일시
		 * LS_CHGM	  최종변경자
		 * 
		 */
		
		new Thread(new Runnable() {
			@Override
			public void run() {

					try {
						// validation(GLN, MB_ID, dtMap, pkMap);
						billingMarkUpDao.markUpClsSalesMonExcel(TRPL_C, SL_YM, DT_DSC, LCLC, MCLC, SCLC, DTCF_C,  MB_ID);
					} catch (AppetizerException e) {
						logger.error(e.getMessage(), e); // ignore
					}

			}
		}).start();
	}

	public void markUpClsSalesWeekExcel( String TRPL_C, String SL_YM, String DT_DSC, String LCLC, String MCLC, String SCLC, String DTCF_C, String MB_ID) {
		
	/*
	 * 
	 * DN_DT	  엑셀다운로드일자
	 * TRPL_C	  거래처코드
	 * SL_YM	  매출년월(주차)
	 * LCLC	           구분코드(월별:1, 주차:2)
	 * WRS_C	  상품코드
	 * FSRG_DTM	  최초등록일시
	 * FS_RGM	  최초등록자
	 * LSCHG_DTM 최종변경일시
	 * LS_CHGM	  최종변경자
	 * 
	 */
		_markUpClsSalesWeekExcel(TRPL_C, SL_YM, DT_DSC, LCLC, MCLC, SCLC, DTCF_C,  MB_ID);
	}
	
	/*
	 * 
	 * 
	 */
	//판매정보 다운로드
	private void _markUpClsSalesWeekExcel(
			
			  final String TRPL_C
			, final String SL_YM
			, final String DT_DSC
			, final String LCLC
			, final String MCLC
			, final String SCLC
			, final String DTCF_C
			, final String MB_ID
			
			
			) {
		
		if ("Y".equals(ClientHolder.getTransYn())) {
			logger.info("markUpClsSalesExcel(" +   "  " + TRPL_C + ", " + MB_ID + ") -> 사용자전환 과금 제외!!");
			return; // 관리자가 사용자전환으로 로그인한 경우, 과금하지 않는다.
		}
		
		/*
		 * 
		 * DN_DT	  엑셀다운로드일자
		 * TRPL_C	  거래처코드
		 * SL_YM	  매출년월(주차)
		 * LCLC	           구분코드(월별:1, 주차:2)
		 * WRS_C	  상품코드
		 * FSRG_DTM	  최초등록일시
		 * FS_RGM	  최초등록자
		 * LSCHG_DTM 최종변경일시
		 * LS_CHGM	  최종변경자
		 * 
		 */
		
		new Thread(new Runnable() {
			@Override
			public void run() {

					try {
						// validation(GLN, MB_ID, dtMap, pkMap);
						billingMarkUpDao.markUpClsSalesWeekExcel(TRPL_C, SL_YM, DT_DSC, LCLC, MCLC, SCLC, DTCF_C, MB_ID);
					} catch (AppetizerException e) {
						logger.error(e.getMessage(), e); // ignore
					}

			}
		}).start();
	}

}
