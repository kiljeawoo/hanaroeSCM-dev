package	com.nh.escm.pda.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pda.dao.SmartPdaKpiDao;


/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class SmartPdaKpiService extends AbstractService
{	
	@Autowired
	private SmartPdaKpiDao smartPdaKpiDao;	

	/* 검수실적 그룹조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiGroupList(String trplC, String clntNm, String groupC, String useCd)
	{		
		return smartPdaKpiDao.retrieveSmtPdaKpiGroupList(trplC, clntNm, groupC, useCd);
	}	

	/* 검수실적 그룹관리 변경 권한 */
	public int getAuthSmtPdaKpiGroupChg(String usrId) {
		return smartPdaKpiDao.getAuthSmtPdaKpiGroupChg(usrId);
	}
	
	
	/* 검수실적 그룹관리 업데이트 */
	public int updateSmtPdaKpiGroup(String TrplC, String useYn, String groupC, String flag, String usrId) {
		try {
			return smartPdaKpiDao.updateSmtPdaKpiGroup(TrplC, useYn, groupC, flag, usrId);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	public void updateSmtPdaKpiGroup(DataSet in_ds, String usrId) {
		String	TrplC		= null;
		String	useYn		= null;
		String	groupC		= null;
		String  flag		= null;
		
		for (int i = 0; i < in_ds.getRowCount(); i++) {
			TrplC	= in_ds.getString(i, "NA_TRPL_C");
			useYn	= in_ds.getString(i, "USE_YN");
			groupC	= in_ds.getString(i, "PD_KPI_GROUP_C");
			flag	= in_ds.getString(i, "PD_KPI_FLAG");

			updateSmtPdaKpiGroup(TrplC, useYn, groupC, flag, usrId);
		}
	}
	
	/* 검수실적 그룹 사업장 등록시 중복여부 */
	public Map<String, Object> getExistSmarPdaKpi(String trplC) {
		try {
			return smartPdaKpiDao.getExistSmarPdaKpi( trplC);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 검수실적 그룹 사업장 존재여부 */
	public List<Map<String, Object>> getExistSnaTrplC(String trplC)
	{		
		return smartPdaKpiDao.getExistSnaTrplC(trplC);
	}	
	
	
	/* 검수실적 그룹조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiExptTrpl(String bzplC, String trplC, String strNm, String clntNm, String useCd, int start, int end)
	{		
		return smartPdaKpiDao.retrieveSmtPdaKpiExptTrpl(bzplC, trplC, strNm, clntNm, useCd, start, end);
	}
	
	/* 검수실적 그룹조회 */
	public void getRetrieveGroupList(String bzplC, String trplC, String strNm, String clntNm, String useCd, ExcelFileMakerResultHandler handler)
	{		
		smartPdaKpiDao.getRetrieveGroupList(bzplC, trplC, strNm, clntNm, useCd, handler);
	}
	
	
	public int getMainCount(String bzplC, String trplC, String strNm, String clntNm, String useCd) {
		return smartPdaKpiDao.getMainCount(bzplC, trplC, strNm, clntNm, useCd);
	}
	public int getExptWrsCount(String bzplC, String wrsCd, String strNm, String wrsNm, String useCd) {
		return smartPdaKpiDao.getExptWrsCount(bzplC, wrsCd, strNm, wrsNm, useCd);
	}
	
	/* 검수실적 그룹관리 업데이트 */
	public int updateSmtPdaKpiExptTrpl(String bzplC, String strNm, String trplC, String clntNm, String useCd, String usrId) {
		try {
			return smartPdaKpiDao.updateSmtPdaKpiExptTrpl(bzplC, strNm, trplC, clntNm, useCd, usrId);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	public void updateSmtPdaKpiExptTrpl(DataSet in_ds, String usrId) {
		String	bzplC		= null;
		String	strNm		= null;
		String	trplC		= null;
		String	clntNm		= null;
		String	useCd		= null;
		
		for (int i = 0; i < in_ds.getRowCount(); i++) {
			bzplC	= in_ds.getString(i, "NA_BZPLC");
			strNm	= in_ds.getString(i, "STR_NM");
			trplC	= in_ds.getString(i, "NA_TRPL_C");
			clntNm	= in_ds.getString(i, "CLNTNM");
			useCd	= in_ds.getString(i, "USE_YN");
			logger.debug(">>>> update data : "+bzplC + trplC);
			updateSmtPdaKpiExptTrpl(bzplC, strNm, trplC, clntNm, useCd, usrId);
		}
	}
	
	/* 검수실적 그룹 사업장 등록시 중복여부 */
	public List<Map<String, Object>> getExistExptList(String bzplC, String trplC) {
		try {
			return smartPdaKpiDao.getExistExptList(bzplC, trplC);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}
	/* 검수실적 그룹 사업장 존재여부 */
	public Map<String, Object> getExistsExptNaTrplC(String bzplC, String trplC)
	{		
		return smartPdaKpiDao.getExistsExptNaTrplC(bzplC, trplC);
	}

	public void uploadExcelSmtPdaKpiExptTrpl(DataSet dataSet, String usrId) {
		// TODO Auto-generated method stub
		String bzplC = null;
		String trplC = null;
		String useCd = null;
		
		for(int i=0; i < dataSet.getRowCount(); i++){
			bzplC	= dataSet.getString(i, "NA_BZPLC");
			trplC	= dataSet.getString(i, "NA_TRPL_C");
			useCd	= dataSet.getString(i, "USE_YN");
		}
		updateSmtPdaKpiExptTrpl(bzplC, "", trplC, "", useCd, usrId);
	}
	
	/* 검수실적 제외 상품 조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiExptWrsList(String bzplC, String trplC, String strNm, String clntNm, String useCd, int start, int end)
	{		
		return smartPdaKpiDao.retrieveSmtPdaKpiExptWrsList(bzplC, trplC, strNm, clntNm, useCd, start, end);
	}
	
	/* 검수실적 그룹 사업장 등록시 중복여부 */
	public Map<String, Object> getExistExptWrsList(String bzplC, String trplC) {
		try {
			return smartPdaKpiDao.getExistExptWrsList(bzplC, trplC);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}
	//상품 존재 여부
	public Map<String, Object> getExistSwrsC(String bzplC, String wrsC) {
		try {
			return smartPdaKpiDao.getExistSwrsC(bzplC, wrsC);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	public void updateSmtPdaKpiExptWrs(DataSet dataSet, String usrId) {
		// TODO Auto-generated method stub
		String bzplC = null;
		String wrsC = null;
		String useCd = null;
		
		for(int i=0; i < dataSet.getRowCount(); i++){
			bzplC	= dataSet.getString(i, "NA_BZPLC");
			wrsC	= dataSet.getString(i, "NA_WRS_C");
			useCd	= dataSet.getString(i, "USE_YN");
		}
		updateSmtPdaKpiExptWrs(bzplC,wrsC,useCd,usrId);
	}

	public int updateSmtPdaKpiExptWrs(String bzplC,String trplC, String useCd, String usrId) {
		try {
			return smartPdaKpiDao.updateSmtPdaKpiExptWrs(bzplC, trplC, useCd, usrId);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	/* 검수실적 그룹조회 */
	public void getRetrieveWrsList(String bzplC, String wrsC, String strNm, String wrsNm, String useCd, ExcelFileMakerResultHandler handler)
	{		
		smartPdaKpiDao.getRetrieveWrsList(bzplC, wrsC, strNm, wrsNm, useCd, handler);
	}
	
	/*검수 실적 상세 리스트 카운트*/
	public int getExptDtlListCount(String bzplC, String clntNm, String fromDt, String toDt, String useCd, String grpDsc)
	{
		return smartPdaKpiDao.getExptDtlListCount(bzplC, clntNm, fromDt, toDt, useCd, grpDsc);
	}
	
	/* 검수실적 제외 상품 조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiDtlList(String bzplC, String clntNm, String fromDt, String toDt, String useCd, String grpDsc, int start, int end)
	{		
		return smartPdaKpiDao.retrieveSmtPdaKpiDtlList(bzplC, clntNm, fromDt, toDt, useCd, grpDsc, start, end);
	}
	
	/* 검수실적 상세 엑셀 다운로드 조회 */
	public List<Map<String, Object>> getRetrieveDtlList(String bzplC, String clntNm,String fromDt, String toDt, String useCd, String grpDsc)
	{		
		return smartPdaKpiDao.getRetrieveDtlList(bzplC,clntNm, fromDt, toDt, useCd, grpDsc);
	}
	
	/* 검수실적 조회 */
	public List<Map<String, Object>> retrieveSmtPdaKpiMstList(String byDt, String flagCd, String grpDsc)
	{		
		return smartPdaKpiDao.retrieveSmtPdaKpiMstList(byDt, flagCd, grpDsc);
	}
	
	public void updateSmtPdaKpiMst(DataSet dataSet, String byDt, String usrId) {
		// TODO Auto-generated method stub
		String dvyPlaYm = null;
		String bizNumber = null;
		String clntNm = null;
		String pdKpiFlag = null;
		String pdKpiGroupC = null;
		String dvyCnt = null;
		String byCnt = null;
		String byPercent = null;
		String rating = null;
		String closeYn = null;
		
		for(int i=0; i < dataSet.getRowCount(); i++){
			dvyPlaYm	= dataSet.getString(i, "DVY_PLA_YM");
			bizNumber	= dataSet.getString(i, "BIZ_NUMBER");
			clntNm	= dataSet.getString(i, "CLNTNM");
			pdKpiFlag	= dataSet.getString(i, "PD_KPI_FLAG");
			pdKpiGroupC	= dataSet.getString(i, "PD_KPI_GROUP_C");
			dvyCnt	= dataSet.getString(i, "DVY_CNT");
			byCnt	= dataSet.getString(i, "BY_CNT");
			byPercent	= dataSet.getString(i, "BY_PERCENT");
			rating	= dataSet.getString(i, "RATING");
			closeYn	= dataSet.getString(i, "CLOSE_YN");
			updateSmtPdaKpiMst(dvyPlaYm,bizNumber,clntNm,pdKpiFlag,pdKpiGroupC,dvyCnt,byCnt,byPercent,rating,closeYn,byDt,usrId);
		}
	}
	
	public int updateSmtPdaKpiMst(String dvyPlaYm,String bizNumber, String clntNm, String pdKpiFlag,String pdKpiGroupC, String dvyCnt, String byCnt,
			String byPercent,String rating, String closeYn, String byDt,String usrId) {
		try {
			return smartPdaKpiDao.updateSmtPdaKpiMst(dvyPlaYm,bizNumber,clntNm,pdKpiFlag,pdKpiGroupC,dvyCnt,byCnt,byPercent,rating,closeYn,byDt,usrId);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}
	
	public void closeSmtPdaKpiMst(DataSet dataSet, String byDt, String usrId) {
		// TODO Auto-generated method stub
		String dvyPlaYm = null;
		String bizNumber = null;
		String clntNm = null;
		String pdKpiFlag = null;
		String pdKpiGroupC = null;
		String dvyCnt = null;
		String byCnt = null;
		String byPercent = null;
		String rating = null;
		String closeYn = null;
		
		for(int i=0; i < dataSet.getRowCount(); i++){
			dvyPlaYm	= dataSet.getString(i, "DVY_PLA_YM");
			bizNumber	= dataSet.getString(i, "BIZ_NUMBER");
			clntNm	= dataSet.getString(i, "CLNTNM");
			pdKpiFlag	= dataSet.getString(i, "PD_KPI_FLAG");
			pdKpiGroupC	= dataSet.getString(i, "PD_KPI_GROUP_C");
			dvyCnt	= dataSet.getString(i, "DVY_CNT");
			byCnt	= dataSet.getString(i, "BY_CNT");
			byPercent	= dataSet.getString(i, "BY_PERCENT");
			rating	= dataSet.getString(i, "RATING");
			closeYn	= dataSet.getString(i, "CLOSE_YN");
			closeSmtPdaKpiMst(dvyPlaYm,bizNumber,clntNm,pdKpiFlag,pdKpiGroupC,dvyCnt,byCnt,byPercent,rating,closeYn,byDt,usrId);
		}
	}
	
	public int closeSmtPdaKpiMst(String dvyPlaYm,String bizNumber, String clntNm, String pdKpiFlag,String pdKpiGroupC, String dvyCnt, String byCnt,
			String byPercent,String rating, String closeYn, String byDt,String usrId) {
		try {
			return smartPdaKpiDao.closeSmtPdaKpiMst(dvyPlaYm,bizNumber,clntNm,pdKpiFlag,pdKpiGroupC,dvyCnt,byCnt,byPercent,rating,closeYn,byDt,usrId);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}
	
	
	/* PDA 사용률 조회 리스트 카운트*/
	public int getRetriveUseCnt(String bzplC, String clntNm, String fromDt, String toDt) {
		return smartPdaKpiDao.getRetriveUseCnt(bzplC, clntNm, fromDt, toDt);
	}
	
	/* PDA 사용률 조회 */
	public List<Map<String, Object>> retrieveSmtPdaUseCntList(String bzplC, String clntNm, String fromDt, String toDt,  int start, int end)
	{		
		return smartPdaKpiDao.retrieveSmtPdaKpiUseList(bzplC, clntNm, fromDt, toDt, start, end);
	}
	
	/* PDA 사용률 조회 */
	public void getUseCntList(String bzplC, String clntNm, String fromDt, String toDt, ExcelFileMakerResultHandler handler)
	{		
		smartPdaKpiDao.getUseCntList(bzplC, clntNm, fromDt, toDt, handler);
	}
	
	public void sortSmtPdaKpiMst(DataSet dataSet) {
		// TODO Auto-generated method stub
		String sortNum = null;
		String bizNum = null;
		
		for(int i=0; i < dataSet.getRowCount(); i++){
			sortNum	= dataSet.getString(i, "SORT_NUM");
			bizNum	= dataSet.getString(i, "BIZ_NUMBER");
			updateSortSmtPdaKpiMst(sortNum,bizNum);
		}
	}
	
	public int updateSortSmtPdaKpiMst(String sortNum,String bizNum) {
		try {
			return smartPdaKpiDao.sortSmtPdaKpiMst(sortNum, bizNum);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelSmtPdaKpiGroupList(String trplC, String clntNm, String groupC, String useCd, ExcelFileMakerResultHandler handler)
	{		
		smartPdaKpiDao.downloadExcelSmtPdaKpiGroupList(trplC, clntNm, groupC, useCd, handler);
	}

	public void downloadExcelSmtPdaKpiDtlList(String bzplC, String clntNm, String fromDt, String toDt, String useCd, String grpDsc, int start, int end, ExcelFileMakerResultHandler handler)
	{		
		smartPdaKpiDao.downloadExcelSmtPdaKpiDtlList(bzplC, clntNm, fromDt, toDt, useCd, grpDsc, start, end, handler);
	}

	public void downloadExcelSmtPdaKpiMstList(String byDt, String flagCd, String grpDsc, ExcelFileMakerResultHandler handler)
	{		
		smartPdaKpiDao.downloadExcelSmtPdaKpiMstList(byDt, flagCd, grpDsc, handler);
	}
}
