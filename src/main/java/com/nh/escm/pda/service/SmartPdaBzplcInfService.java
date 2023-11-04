package	com.nh.escm.pda.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pda.dao.SmartPdaBzplcInfDao;


/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class SmartPdaBzplcInfService extends AbstractService
{	
	@Autowired
	private SmartPdaBzplcInfDao smartPdaBzplcInfDao;

	/* 스마트PDA 경통오류조회 카운트 */
	public int getByngErrCount(String bzplC, String clntNm, String fromDt, String toDt, String typeCd)
	{
		return smartPdaBzplcInfDao.getByngErrCount(bzplC, clntNm, fromDt, toDt, typeCd);
	}

	/* 스마트PDA 경통오류조회 */
	public List<Map<String, Object>> retrieveSmtPdaByngErrList(String bzplC, String clntNm, String fromDt, String toDt, String typeCd, int start, int end)
	{
		return smartPdaBzplcInfDao.retrieveSmtPdaByngErrList(bzplC, clntNm, fromDt, toDt, typeCd, start, end);
	}

	/* 스마트PDA 프로그램 권한조회 카운트 */
	public int getPgmAuthCount(String bzplC, String clntNm, String usrID, String usrNm)
	{
		return smartPdaBzplcInfDao.getPgmAuthCount(bzplC, clntNm, usrID, usrNm);
	}

	/* 스마트PDA 프로그램 권한조회 */
	public List<Map<String, Object>> retrieveSmtPdaPgmAuthList(String bzplC, String clntNm, String usrID, String usrNm, int start, int end)
	{
		return smartPdaBzplcInfDao.retrieveSmtPdaPgmAuthList(bzplC, clntNm, usrID, usrNm, start, end);
	}

	public void downloadExcelSmtPdaByngErrList(String bzplC, String clntNm, String fromDt, String toDt, String typeCd, int start, int end, ExcelFileMakerResultHandler handler)
	{
		smartPdaBzplcInfDao.downloadExcelSmtPdaByngErrList(bzplC, clntNm, fromDt, toDt, typeCd, start, end, handler);
	}

	public void downloadExcelSmtPdaPgmAuthList(String bzplC, String clntNm, String usrID, String usrNm, int start, int end, ExcelFileMakerResultHandler handler)
	{
		smartPdaBzplcInfDao.downloadExcelSmtPdaPgmAuthList(bzplC, clntNm, usrID, usrNm, start, end, handler);
	}
}