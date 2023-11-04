package com.nh.escm.pda.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class SmartPdaKpiDao extends AbstractDao
{
	/* 검수실적 그룹조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiGroupList(String trplC, String clntNm, String groupC, String useCd)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("GROUP_C"	, groupC);
		param.put("USE_CD"	, useCd);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi retrieveSmtPdaKpiGroupList >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.retrieveSmtPdaKpiGroupList", param);
	}

	/* 검수실적 그룹관리 변경 권한 */
	public int getAuthSmtPdaKpiGroupChg(String usrId) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("USR_ID"	, usrId);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> smartPdaKpi getAuthSmtPdaKpiGroupChg >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getAuthSmtPdaKpiGroupChg", param);	
	}
	
	/* 검수실적 그룹 업데이트 */
	public int updateSmtPdaKpiGroup(String TrplC, String useYn, String groupC, String flag, String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, TrplC);
		param.put("USE_YN"	, useYn);
		param.put("GROUP_C"	, groupC);
		param.put("FLAG"	, flag);
		param.put("USR_ID"	, usrId);
		
		return getSqlSession().update("smartPdaKpi.updateSmtPdaKpiGroup", param);
	}
	
	
	/* 검수실적 그룹 사업장 존재여부 */
	public List<Map<String, Object>> getExistSnaTrplC(String trplC)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getExistSnaTrplC >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.getExistSnaTrplC", param);
	}

	/* 검수실적 그룹 사업장 등록시 중복여부 */
	public Map<String, Object> getExistSmarPdaKpi(String trplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getExistSmarPdaKpi >>> params : " + param);
		}
		
		return getSqlSession().selectOne("smartPdaKpi.getExistSmarPdaKpi", param);
	}
	
	/* 검수실적 그룹조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiExptTrpl(String bzplC, String trplC, String strNm, String clntNm, String useCd, int start, int end)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("TRPL_C"	, trplC);
		param.put("STR_NM"	, strNm);
		param.put("CLNTNM"	, clntNm);
		param.put("USE_CD"	, useCd);
		param.put("start", start);				
		param.put("end", end);	
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi retrieveSmtPdaKpiExptTrpl >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.retrieveSmtPdaKpiExptTrpl", param);
	}
	
	/* 검수실적 제외 그룹 엑셀다운로드 */
	public void getRetrieveGroupList(String bzplC, String trplC, String strNm, String clntNm, String useCd, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("TRPL_C"	, trplC);
		param.put("STR_NM"	, strNm);
		param.put("CLNTNM"	, clntNm);
		param.put("USE_CD"	, useCd);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getRetrieveGroupList >>> params : " + param);
		}
		getSqlSession().select("smartPdaKpi.getRetrieveGroupList", param, handler);
	}
	
	public int getMainCount(String bzplC, String trplC, String strNm, String clntNm, String useCd) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("TRPL_C"	, trplC);
		param.put("STR_NM"	, strNm);
		param.put("CLNTNM"	, clntNm);
		param.put("USE_CD"	, useCd);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi getMainCount >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getMainCount", param);	
	}
	
	
	
	/* 검수실적 제외 업데이트 */
	public int updateSmtPdaKpiExptTrpl(String bzplC, String strNm, String trplC, String clntNm, String useCd, String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("STR_NM"	, strNm);
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("USE_CD"	, useCd);
		param.put("USR_ID"	, usrId);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi updateSmtPdaKpiExptTrpl >>> params : " + param);
		}
		return getSqlSession().update("smartPdaKpi.updateSmtPdaKpiExptTrpl", param);
	}
	
	
	/* 검수실적 그룹 사업장 존재여부 */
	public Map<String, Object> getExistsExptNaTrplC(String bzplC, String trplC)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("TRPL_C"	, trplC);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getExistsExptNaTrplC >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getExistsExptNaTrplC", param);
	}

	/* 검수실적 그룹 사업장 등록시 중복여부 */
	public List<Map<String, Object>> getExistExptList(String bzplC, String trplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("TRPL_C"	, trplC);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getExistExptList >>> params : " + param);
		}
		
		return getSqlSession().selectList("smartPdaKpi.getExistExptList", param);
	}
	
	/* 검수실적 제외 상품 조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiExptWrsList(String bzplC, String wrsCd, String strNm, String wrsNm, String useCd, int start, int end)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("WRS_CD"	, wrsCd);
		param.put("STR_NM"	, strNm);
		param.put("WRS_NM"	, wrsNm);
		param.put("USE_CD"	, useCd);
		param.put("start", start);				
		param.put("end", end);	
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi retrieveSmtPdaKpiExptWrsList >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.retrieveSmtPdaKpiExptWrsList", param);
	}
	
	/* 검수실적 제외 상품 조회 카운트 */
	public int getExptWrsCount(String bzplC, String wrsCd, String strNm, String wrsNm, String useCd) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("WRS_CD"	, wrsCd);
		param.put("STR_NM"	, strNm);
		param.put("WRS_NM"	, wrsNm);
		param.put("USE_CD"	, useCd);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi getExptWrsCount >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getExptWrsCount", param);	
	}
	

	public Map<String, Object> getExistExptWrsList(String bzplC,
			String wrsC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("WRS_CD"	, wrsC);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getExistExptWrsList >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getExistExptWrsList", param);
	}

	
	//상품 존재 여부
	public Map<String, Object> getExistSwrsC(String bzplC, String wrsC) {
		// TODO Auto-generated method stub
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("WRS_CD"	, wrsC);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getExistSwrsC >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getExistSwrsC", param);
	}

	public int updateSmtPdaKpiExptWrs(String bzplC, String wrsC,
			String useCd, String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("WRS_CD"	, wrsC);
		param.put("USE_CD"	, useCd);
		param.put("USR_ID"	, usrId);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi updateSmtPdaKpiExptWrs >>> params : " + param);
		}
		return getSqlSession().update("smartPdaKpi.updateSmtPdaKpiExptWrs", param);
	}

	/* 검수실적 제외상품 엑셀다운로드 */
	public void getRetrieveWrsList(String bzplC, String wrsC, String strNm, String wrsNm, String useCd, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("WRS_CD"	, wrsC);
		param.put("STR_NM"	, strNm);
		param.put("WRS_NM"	, wrsNm);
		param.put("USE_CD"	, useCd);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getRetrieveWrsList >>> params : " + param);
		}
		getSqlSession().select("smartPdaKpi.getRetrieveWrsList", param, handler);
	}
	
	
	/*검수 실적 상세 리스트 카운트*/
	public int getExptDtlListCount(String bzplC, String clntnm, String fromDt, String toDt, String useCd, String grpDsc)
	{		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntnm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("USE_CD"	, useCd);
		param.put("GRP_DSC"	, grpDsc);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi getExptDtlListCount >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getExptDtlListCount", param);	
	}
	
	
	/* 검수실적 제외 상품 조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiDtlList(String bzplC, String clntnm, String fromDt, String toDt, String useCd, String grpDsc, int start, int end)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntnm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("USE_CD"	, useCd);
		param.put("GRP_DSC"	, grpDsc);
		param.put("start", start);
		param.put("end", end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi retrieveSmtPdaKpiDtlList >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.retrieveSmtPdaKpiDtlList", param);
	}
	
	/* 검수실적 상세 엑셀 다운로드 */
	public List<Map<String, Object>> getRetrieveDtlList(String bzplC, String clntNm, String fromDt, String toDt, String useCd, String grpDsc)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("USE_CD"	, useCd);
		param.put("GRP_DSC"	, grpDsc);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getRetrieveDtlList >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.getRetrieveDtlList", param);
	}
	
	/* 검수실적 조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiMstList(String byDt, String flagCd, String grpDsc)
	{		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BY_DT"	, byDt);
		param.put("FLAG_CD"	, flagCd);
		param.put("GRP_DSC"	, grpDsc);
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi retrieveSmtPdaKpiMstList >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.retrieveSmtPdaKpiMstList", param);	
	}
	
	public int updateSmtPdaKpiMst(String dvyPlaYm,String bizNumber, String clntNm, String pdKpiFlag,String pdKpiGroupC, String dvyCnt, String byCnt,
			String byPercent,String rating, String closeYn, String byDt,String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("DVY_PLA_YM"	, dvyPlaYm);
		param.put("BIZ_NUMBER"	, bizNumber);
		param.put("CLNTNM"	, clntNm);
		param.put("PD_KPI_FLAG"	, pdKpiFlag);
		param.put("PD_KPI_GROUP_C"	, pdKpiGroupC);
		param.put("DVY_CNT"	, dvyCnt);
		param.put("BY_CNT"	, byCnt);
		param.put("BY_PERCENT"	, byPercent);
		param.put("RATING"	, rating);
		param.put("CLOSE_YN"	, closeYn);
		param.put("BY_DT"	, byDt);
		param.put("USR_ID"	, usrId);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi updateSmtPdaKpiMst >>> params : " + param);
		}
		return getSqlSession().update("smartPdaKpi.updateSmtPdaKpiMst", param);
	}
	
	public int closeSmtPdaKpiMst(String dvyPlaYm,String bizNumber, String clntNm, String pdKpiFlag,String pdKpiGroupC, String dvyCnt, String byCnt,
			String byPercent,String rating, String closeYn, String byDt,String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("DVY_PLA_YM"	, dvyPlaYm);
		param.put("BIZ_NUMBER"	, bizNumber);
		param.put("CLNTNM"	, clntNm);
		param.put("PD_KPI_FLAG"	, pdKpiFlag);
		param.put("PD_KPI_GROUP_C"	, pdKpiGroupC);
		param.put("DVY_CNT"	, dvyCnt);
		param.put("BY_CNT"	, byCnt);
		param.put("BY_PERCENT"	, byPercent);
		param.put("RATING"	, rating);
		param.put("CLOSE_YN"	, closeYn);
		param.put("BY_DT"	, byDt);
		param.put("USR_ID"	, usrId);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi closeSmtPdaKpiMst >>> params : " + param);
		}
		return getSqlSession().update("smartPdaKpi.closeSmtPdaKpiMst", param);
	}
	
	
	/* PDA 사용률 조회 리스트 카운트*/
	public int getRetriveUseCnt(String bzplC, String clntnm, String fromDt, String toDt) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntnm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi getRetriveUseCnt >>> params : " + param);
		}
		return getSqlSession().selectOne("smartPdaKpi.getRetriveUseCnt", param);	
	}
	
	/* PDA 사용률 조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiUseList(String bzplC, String clntNm, String fromDt, String toDt, int start, int end)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("start"	, start);
		param.put("end"	, end);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi retrieveSmtPdaKpiUseList >>> params : " + param);
		}
		return getSqlSession().selectList("smartPdaKpi.retrieveSmtPdaKpiUseList", param);
	}
	/* PDA 사용률 excel download */
	public void getUseCntList(String bzplC, String clntNm, String fromDt, String toDt, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntNm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi getUseCntList >>> params : " + param);
		}
		getSqlSession().select("smartPdaKpi.getUseCntList", param, handler);
	}
	
	public int sortSmtPdaKpiMst(String sortNum,String bizNum) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SORT_NUM"	, sortNum);
		param.put("BIZ_NUMBER"	, bizNum);
		
		if (logger.isDebugEnabled()) {
			logger.debug(">>> SmartPdaKpi sortSmtPdaKpiMst >>> params : " + param);
		}
		return getSqlSession().update("smartPdaKpi.sortSmtPdaKpiMst", param);
	}

	public void downloadExcelSmtPdaKpiGroupList(String trplC, String clntNm, String groupC, String useCd, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C"	, trplC);
		param.put("CLNTNM"	, clntNm);
		param.put("GROUP_C"	, groupC);
		param.put("USE_CD"	, useCd);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi downloadExcelSmtPdaKpiGroupList >>> params : " + param);
		}
		getSqlSession().select("smartPdaKpi.downloadExcelSmtPdaKpiGroupList", param, handler);
	}

	public void downloadExcelSmtPdaKpiDtlList(String bzplC, String clntnm, String fromDt, String toDt, String useCd, String grpDsc, int start, int end, ExcelFileMakerResultHandler handler)
	{
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZPL_C"	, bzplC);
		param.put("CLNTNM"	, clntnm);
		param.put("FROM_DT"	, fromDt);
		param.put("TO_DT"	, toDt);
		param.put("USE_CD"	, useCd);
		param.put("GRP_DSC"	, grpDsc);
		param.put("start", start);
		param.put("end", end);

		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi downloadExcelSmtPdaKpiDtlList >>> params : " + param);
		}
		getSqlSession().select("smartPdaKpi.downloadExcelSmtPdaKpiDtlList", param, handler);
	}

	public void downloadExcelSmtPdaKpiMstList(String byDt, String flagCd, String grpDsc, ExcelFileMakerResultHandler handler)
	{		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BY_DT"	, byDt);
		param.put("FLAG_CD"	, flagCd);
		param.put("GRP_DSC"	, grpDsc);
		if (logger.isDebugEnabled())
		{
			logger.debug(">>> SmartPdaKpi downloadExcelSmtPdaKpiMstList >>> params : " + param);
		}
		getSqlSession().select("smartPdaKpi.downloadExcelSmtPdaKpiMstList", param, handler);	
	}
}
