package com.nh.escm.tx.doccstd.dao;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.tx.doccstd.vo.BasSvcVO;
import com.nh.escm.tx.doccstd.vo.ByngMonVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilDscVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilVO;
import com.nh.escm.tx.doccstd.vo.taxMapNames.taxMap;

public class SlTxbilDscDAO extends AbstractDao {
	
	public List<Map<String, Object>> retrieveUnissuedTaxbilList(DataSet dsCondition, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] decrypts = {"USR_MPNO"};
		param.put("decrypt", decrypts);
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		param.put("start", start);
		param.put("end", end);
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("slTxbilDscDAO.retrieveUnissuedTaxbilList", param);
	}
	
	public int retrieveUnissuedTaxbilListCount(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] decrypts = {"USR_MPNO"};
		param.put("decrypt", decrypts);
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveUnissuedTaxbilListCount", param);
	}
	
	
	public List<SlTxbilDscVO> retrieveTaxDtl(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", pBC_SQNO);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTaxDtl", param);
	}

	public List<SlTxbilVO> retrieveTaxText(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", pBC_SQNO);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTaxText", param);
	}

	public int insertTxbilElsg(DataSet dsElsg, int i) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", dsElsg.getString(i, "PBC_SQNO"));
		param.put("ELSG_CNTN",  dsElsg.getString(i, "ELSG_CNTN"));
		param.put("FS_RGM", dsElsg.getString(i, "FS_RGM"));
		param.put("LS_CHGM", dsElsg.getString(i, "LS_CHGM"));
		
		if(param.get("ELSG_CNTN") == null)
		{
			throw new AppetizerException("Invoice생성에러");
		}
		/***************************************
		 * 
		 * pbc_sqno 로 TX_TXBIL_ELSG 조회하여 
		 * 이미 NTS_TMS_YN 인 건이 한 건 이상 있으면 
		 * insert 하지 않고 throw exception 한다.
		 * 
		 ***************************************/
		int alreadyElsg = 0;
		Map<String, Object> param2 = new HashMap<String, Object>();
		param2.put("PBC_SQNO", dsElsg.getString(i, "PBC_SQNO"));
		alreadyElsg = getSqlSession().selectOne("slTxbilDscDAO.retrieveTaxElsgCount", param2);
		
		if(alreadyElsg > 0 ){
			throw new AppetizerException("이미 국세청 전송 대기중이거나 전송완료된 전자서명건이 있습니다.다시 조회해주십시오.");
		}
		
		int alreadyElsg2 = 0;
		alreadyElsg2 = getSqlSession().selectOne("slTxbilDscDAO.retrieveTaxElsgCountWithN", param2);
		if(alreadyElsg2 > 0 ){
			throw new AppetizerException("이미 전자서명을 한 건이 있습니다.다시 조회해주십시오.");
		}
		
		/***************************************************************
		 * @TODO
		 * 기존 세금계산서가 
		 * 발행오류 이면서,
		 * 발행오류 종류가 ERR 로 시작하는 발행오류 일 경우에는 
		 * 재서명을 막음
		 * (경통에서 새로 세금계산서 발행.경통에는 발행오류로 남아있게 됨)
		 ***************************************************************/
		// 99 인 경우.99인 경우는 재서명임.재서명시 오류 유형 코드 체크 필요 
		int stscCheck = getSqlSession().selectOne("slTxbilDscDAO.getErrorTxbilCount", param2);
		if(stscCheck > 0 ){//재서명할 수 있는 오류유형인지 체크.ERR로 시작하는 오류일 경우에는 재서명안됨.경통에서 신규 계산서가 넘어옴. 
			int  errPrcRztCCnt = getSqlSession().selectOne("slTxbilDscDAO.getTxbilPrcRztCWithERR", param2);
			if(errPrcRztCCnt>0){
				throw new AppetizerException("반송코드가 ERR으로 시작하는 반송코드의 세금계산서는 재전송할 수 없습니다.");
			}
		}
		
		return getSqlSession().insert("slTxbilDscDAO.insertTxbilElsg", param);
	}

	public int updateTxBil(DataSet dsElsg, int i) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", dsElsg.getString(i, "PBC_SQNO"));
		param.put("SIGN_R_VAL",  dsElsg.getString(i, "SIGN_R_VAL"));
		param.put("NTS_TMS_SQNO",  dsElsg.getString(i, "NTS_TMS_SQNO"));
		param.put("LS_CHGM",  dsElsg.getString(i, "LS_CHGM"));
		
		return getSqlSession().update("slTxbilDscDAO.updateTxBil", param);
	}
	
	public List<SlTxbilVO> retrieveSlTxbilForSvc(String PBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", PBC_SQNO);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveSlTxbilForSvc", param);
	}
	
	public List<SlTxbilVO> retrieveSlTxbilForOz(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", pBC_SQNO);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveSlTxbilForOz", param);
	}

	public List<SlTxbilDscVO> retrieveSlTxbilDescForOz(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", pBC_SQNO);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveSlTxbilDescForOz", param);
	}
	
	public List<Map<String, Object>> retrieveTRPL(String searchType, String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchText", searchText);
		param.put("sType", searchType);
		
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTRPL", param);
	}
	
	public List<Map<String, Object>> retrieveBZPLC(String searchType, String searchText) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchText", searchText);
		param.put("sType", searchType);
		
		return getSqlSession().selectList("slTxbilDscDAO.retrieveBZPLC", param);
	}
	
	public List<SlTxbilVO> retrieveTaxBillModList(DataSet dsCondition, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("TX_TYPE", dsCondition.getString(0, "TX_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("glnCode", dsCondition.getString(0, "glnCode"));
		param.put("NA_TRPL_C", dsCondition.getString(0, "NA_TRPL_C"));
		param.put("TXBIL_STSC", dsCondition.getString(0, "TXBIL_STSC"));
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTaxBillModList", param);
	}
	
	public int retrieveTaxBillModListCount(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("TX_TYPE", dsCondition.getString(0, "TX_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("glnCode", dsCondition.getString(0, "glnCode"));
		param.put("NA_TRPL_C", dsCondition.getString(0, "NA_TRPL_C"));
		param.put("TXBIL_STSC", dsCondition.getString(0, "TXBIL_STSC"));
		
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveTaxBillModListCount", param);
	}

	public Map<String, Object> getXML(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("PBC_SQNO", pBC_SQNO);
		
		return getSqlSession().selectOne("slTxbilDscDAO.getXML", param);
	}
	
	public int insertTaxMod(DataSet ds_taxMod, Date dDate) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("MOD_TAX_PBC_SQNO",  ds_taxMod.getString(0, "MOD_TAX_PBC_SQNO"));
		param.put("MOD_C", ds_taxMod.getString(0, "MOD_C"));
		param.put("PBC_SQNO", ds_taxMod.getString(0, "PBC_SQNO"));
		param.put("NTS_TMS_SQNO", ds_taxMod.getString(0, "NTS_TMS_SQNO"));
		param.put("MOD_TAX_NTS_TMS_SQNO", ds_taxMod.getString(0, "MOD_TAX_NTS_TMS_SQNO"));
		param.put("CRT_DT", ds_taxMod.getString(0, "CRT_DT"));
		param.put("STL_AM1", ds_taxMod.getString(0, "STL_AM1"));
		param.put("STL_AM2", ds_taxMod.getString(0, "STL_AM2"));
		param.put("STL_AM3", ds_taxMod.getString(0, "STL_AM3"));
		param.put("STL_AM4", ds_taxMod.getString(0, "STL_AM4"));
		param.put("SPRTT", ds_taxMod.getString(0, "SPRTT"));
		param.put("TXA_TT", ds_taxMod.getString(0, "TXA_TT"));
		param.put("TOT_AM", ds_taxMod.getString(0, "TOT_AM"));
		param.put("RMK1", ds_taxMod.getString(0, "RMK1"));
		param.put("FSRG_DTM", dDate);
		param.put("FS_RGM", ds_taxMod.getString(0, "FS_RGM"));
		
		if(getSqlSession().insert("slTxbilDscDAO.insertTaxMod", param) > 0)
		{
			
			return getSqlSession().update("slTxbilDscDAO.updateTaxMod", param);
		}
			
		return 0;
	}
	
	public int insertTaxMod2(DataSet ds_taxMod, Date dDate) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("MOD_TAX_PBC_SQNO",  ds_taxMod.getString(0, "MOD_TAX_PBC_SQNO"));
		param.put("MOD_C", ds_taxMod.getString(0, "MOD_C"));
		param.put("PBC_SQNO", ds_taxMod.getString(0, "PBC_SQNO"));
		param.put("NTS_TMS_SQNO", ds_taxMod.getString(0, "NTS_TMS_SQNO"));
		param.put("MOD_TAX_NTS_TMS_SQNO", ds_taxMod.getString(0, "MOD_TAX_NTS_TMS_SQNO"));
		param.put("CRT_DT", ds_taxMod.getString(0, "CRT_DT"));
		param.put("STL_AM1", ds_taxMod.getString(0, "STL_AM1"));
		param.put("STL_AM2", ds_taxMod.getString(0, "STL_AM2"));
		param.put("STL_AM3", ds_taxMod.getString(0, "STL_AM3"));
		param.put("STL_AM4", ds_taxMod.getString(0, "STL_AM4"));
		param.put("SPRTT", ds_taxMod.getString(0, "SPRTT"));
		param.put("TXA_TT", ds_taxMod.getString(0, "TXA_TT"));
		param.put("TOT_AM", ds_taxMod.getString(0, "TOT_AM"));
		param.put("RMK1", ds_taxMod.getString(0, "RMK1"));
		param.put("FSRG_DTM", dDate);
		param.put("FS_RGM", ds_taxMod.getString(0, "FS_RGM"));
		param.put("BUY_BZNO", ds_taxMod.getString(0, "BUY_BZNO"));
		param.put("BUY_REPMNM", ds_taxMod.getString(0, "BUY_REPMNM"));
		
		param.put("BUY_MTALNM", ds_taxMod.getString(0, "BUY_MTALNM"));
		param.put("BUY_ADR", ds_taxMod.getString(0, "BUY_ADR"));
		param.put("BUY_BZTPNM", ds_taxMod.getString(0, "BUY_BZTPNM"));
		param.put("BUY_BZC", ds_taxMod.getString(0, "BUY_BZC"));
		param.put("BUY_CHRR_EMAIL1", ds_taxMod.getString(0, "BUY_CHRR_EMAIL1"));
		param.put("RMK1", ds_taxMod.getString(0, "RMK1"));
		param.put("BUY_ID_TXREG", ds_taxMod.getString(0, "BUY_ID_TXREG"));
		
		
		
		if(getSqlSession().insert("slTxbilDscDAO.insertTaxMod2", param) > 0)
		{
			
			return getSqlSession().update("slTxbilDscDAO.updateTaxMod2", param);
		}
			
		return 0;
	}
	
	
	public int deleteTaxbilDesc(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", pBC_SQNO);
		return getSqlSession().delete("slTxbilDscDAO.deleteTaxbilDesc", param);
	}

	public int deleteTaxbil(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", pBC_SQNO);
		return getSqlSession().delete("slTxbilDscDAO.deleteTaxbil", param);
	}
	
	public int insertTaxbil(DataSet ds_tax, Date dDate) {
		Map<String, Object> param = new HashMap<String, Object>();

		for(int i = 0 ; i <ds_tax.getRowCount() ; i++)
		{
			for(taxMap t : taxMap.values() )
			{
				param.put(t.name(), ds_tax.getString(i, t.name()));				
			}
			param.put("Date", dDate);
		}
		return getSqlSession().insert("slTxbilDscDAO.insertTaxbil", param);
	}
	
	public int checkDup(String pBC_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", pBC_SQNO);
		return getSqlSession().selectOne("slTxbilDscDAO.checkDup", param);
	}
	
	public int insertTaxDetail(DataSet ds_taxDetailMod, int i, Date dDate, String fS_RGM) {

		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("TR_DT", ds_taxDetailMod.getString(0, "TR_DT"));
		param.put("DTL_SQNO", i+1);
		param.put("LATCNM", ds_taxDetailMod.getString(0, "LATCNM"));
		param.put("STD", ds_taxDetailMod.getString(0, "STD"));
		param.put("RMK", ds_taxDetailMod.getString(0, "RMK"));
		param.put("QT", ds_taxDetailMod.getString(0, "QT"));
		param.put("TXA", ds_taxDetailMod.getString(0, "TXA"));
		param.put("UPR", ds_taxDetailMod.getString(0, "UPR"));
		param.put("SPPR", ds_taxDetailMod.getString(0, "SPPR"));
		param.put("PBC_SQNO", ds_taxDetailMod.getString(0, "PBC_SQNO"));
		param.put("FSRG_DTM", dDate);
		param.put("FS_RGM", fS_RGM);

		return getSqlSession().insert("slTxbilDscDAO.insertTaxDetail", param);
	}

	public int taxCancel(DataSet ds_tax, Date dDate, String userId) {
Map<String, Object> param = new HashMap<String, Object>();
		
		String[] PBC_SQNO = null;
		String[] NTS_TMS_SQNO = null;
		String[] USERID = null;
		
		String pbcSqno = "";
		String nts_tms_sqno = "";
		
		for(int i = 0 ; i < ds_tax.getRowCount() ; i++)
		{
			pbcSqno += ds_tax.getString(i, "PBC_SQNO");
			pbcSqno += ",";
			nts_tms_sqno += ds_tax.getString(i, "NTS_TMS_SQNO");
			nts_tms_sqno += ",";
		}
		
		if(pbcSqno != null && pbcSqno.length() > 0)
		{
			PBC_SQNO = pbcSqno.split(",");
			NTS_TMS_SQNO = nts_tms_sqno.split(",");
		}

		param.put("PBC_SQNO", PBC_SQNO);
		param.put("NTS_TMS_SQNO", NTS_TMS_SQNO);
		param.put("LS_CHGM", userId);
		
		if(getSqlSession().update("slTxbilDscDAO.taxCancel", param)>0)
		{
			for(int i = 0 ; i < ds_tax.getRowCount() ; i++)
			{
				param = new HashMap<String, Object>();
				param.put("PBC_SQNO", ds_tax.getString(i, "PBC_SQNO"));
				param.put("NTS_TMS_SQNO", ds_tax.getString(i, "NTS_TMS_SQNO"));
				param.put("LS_CHGM", userId);
				getSqlSession().insert("slTxbilDscDAO.insertTxNtsRpt", param);
			}
			return ds_tax.getRowCount();
		}
		else
		{
			return 0 ;
		}	
	}

	public int sendTaxSms(DataSet ds_sms) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String DEST_INFO = "";// USR_NM + "^" + USR_HP;
		String msg = "";
		
		param.put("USER_ID", Configurer.getProperty("smsTaxSender.userId"));
		param.put("SCHEDULE_TYPE", 0);
		param.put("SEND_DATE", DateUtil.getCurrentDate("yyyyMMddHHmmss"));
		param.put("DEST_TYPE", "0");
		param.put("DEST_COUNT", "0");
		
		param.put("SUBJECT", "TAX");
		param.put("SEND_STATUS", 0);
		param.put("SEND_COUNT", 0);
		
		param.put("SEND_RESULT", 0);
		param.put("CALLBACK", Configurer.getProperty("smsTaxSender.callback"));

		int succ = 0 ;
		int getMsgId = 0; 
		for(int i = 0 ; i < ds_sms.getRowCount() ; i++)
		{
			DEST_INFO += (ds_sms.getString(i, "USR_NM") + "^" + ds_sms.getString(i, "USR_MPNO")  );
			msg = ds_sms.getString(i, "USR_NM") + "님, 농협하나로유통 역발행세금계산서 미발행  "+ ds_sms.getString(i, "COUNT") + "건이 있습니다. 승인 부탁드립니다.";
			param.put("DEST_INFO", DEST_INFO);
			param.put("SMS_MSG",msg);
			
			try
			{
				getMsgId = getSqlSession().selectOne("slTxbilDscDAO.getSmsSequence");
			}
			catch(DataAccessException e)
			{
				throw new AppetizerException(e);
			}
			param.put("MSG_ID", getMsgId);
			succ += getSqlSession().insert("slTxbilDscDAO.insertTaxSmsSend", param);
		}
		
		return succ;
	}
	
	public List<Map<String, Object>> retrieveTaxSmsResult(DataSet dsCondition, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		if(dsCondition.getString(0, "MPNO1") != null && dsCondition.getString(0, "MPNO2") != null && dsCondition.getString(0, "MPNO3")!= null)
		{
			param.put("USR_MPNO", dsCondition.getString(0, "MPNO1") + dsCondition.getString(0, "MPNO2") + dsCondition.getString(0, "MPNO3"));
		}
		if(dsCondition.getString(0, "SEND_STATUS") != null)
		{
			param.put("SEND_STATUS", Integer.parseInt((dsCondition.getString(0, "SEND_STATUS")) ));
		}
		
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTaxSmsResult", param);
	}
	
	public int retrieveTaxSmsResultCount(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		if(dsCondition.getString(0, "MPNO1") != null && dsCondition.getString(0, "MPNO2") != null && dsCondition.getString(0, "MPNO3")!= null)
		{
			param.put("USR_MPNO", dsCondition.getString(0, "MPNO1") + dsCondition.getString(0, "MPNO2") + dsCondition.getString(0, "MPNO3"));
		}
		
		if(dsCondition.getString(0, "SEND_STATUS") != null)
		{
			param.put("SEND_STATUS", Integer.parseInt((dsCondition.getString(0, "SEND_STATUS")) ));
		}
		
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveTaxSmsResultCount", param);
	}

	public Map<String, Object> retrieveTaxBillListCount(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("OCU_DSC", dsCondition.getString(0, "OCU_DSC"));   // TX_TXBIL.OCU_DSC  '발생구분코드 : 01 경제통합, 02 하나로eSCM'
		
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		
		param.put("NA_CLNT_TEAM_C", dsCondition.getString(0, "NA_CLNT_TEAM_C"));
		param.put("NA_TEAM_C", dsCondition.getString(0, "NA_TEAM_C"));
		param.put("USRID", dsCondition.getString(0, "USRID"));
		
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveTaxBillListCount", param);
	}

	public List<Map<String, Object>> retrieveTaxBillList(DataSet dsCondition, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		

		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("OCU_DSC", dsCondition.getString(0, "OCU_DSC"));   // TX_TXBIL.OCU_DSC  '발생구분코드 : 01 경제통합, 02 하나로eSCM'
		
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		
		param.put("NA_CLNT_TEAM_C", dsCondition.getString(0, "NA_CLNT_TEAM_C"));
		param.put("NA_TEAM_C", dsCondition.getString(0, "NA_TEAM_C"));
		
		param.put("start", start);
		param.put("end", end);
		
		param.put("USRID", dsCondition.getString(0, "USRID"));
		
		if(logger.isDebugEnabled()){
			logger.debug("TXBIL_STSC : " + TXBIL_STSC);
			logger.debug("NA_TRPL_C : " + NA_TRPL_C);
			logger.debug("RPBC_DSC : " + dsCondition.getString(0, "RPBC_DSC"));
			logger.debug("BUY_BZNO : " +  dsCondition.getString(0, "BUY_BZNO"));
			logger.debug("OCU_DSC : " +  dsCondition.getString(0, "OCU_DSC"));
			
		}
		
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTaxBillList", param);
	}

	public List<Map<String, Object>> retrieveBzplcList(String USRID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("USRID", USRID);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveBzplcList", USRID);
	}

	public List<Map<String, Object>> retrieveBzplcTeamCodeList(String USRID) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("USRID", USRID);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveBzplcTeamCodeList", param);
	}

	public int retrieveEmailResendListCount(DataSet dsCondition) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		
		param.put("NA_CLNT_TEAM_C", dsCondition.getString(0, "NA_CLNT_TEAM_C"));
		param.put("NA_TEAM_C", dsCondition.getString(0, "NA_TEAM_C"));
		
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveEmailResendListCount", param);
	}

	public List<Map<String, Object>> retrieveEmailResendList(DataSet dsCondition, int start, int end) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		
		param.put("NA_CLNT_TEAM_C", dsCondition.getString(0, "NA_CLNT_TEAM_C"));
		param.put("NA_TEAM_C", dsCondition.getString(0, "NA_TEAM_C"));
		
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("slTxbilDscDAO.retrieveEmailResendList", param);
	}

	public int updateEmailAddr(String PBC_SQNO, String email) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PBC_SQNO", PBC_SQNO);
		param.put("email", email);
		return getSqlSession().update("slTxbilDscDAO.updateEmailAddr", param);
	}


	public List<Map<String, Object>> retrieveTaxBillForSign(String pbcSqno) {
		Map<String, Object> param = new HashMap<String, Object>();
		String[] PBC_SQNO = null;
		
		if(pbcSqno != null && pbcSqno.length() > 0)
		{
			PBC_SQNO = pbcSqno.split(",");
		}
		param.put("PBC_SQNO", PBC_SQNO);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTaxBillForSign", param);
	}	
	
	public List<Map<String, Object>> retrieveTaxBillDetailForSign(String pbcSqno) {
		Map<String, Object> param = new HashMap<String, Object>();
		String[] PBC_SQNO = null;
		
		if(pbcSqno != null && pbcSqno.length() > 0)
		{
			PBC_SQNO = pbcSqno.split(",");
		}
		param.put("PBC_SQNO", PBC_SQNO);
		return getSqlSession().selectList("slTxbilDscDAO.retrieveTaxBillDetailForSign", param);
	}
	
	public int reSend(DataSet ds_reSend) {
		int suc = 0;
		//SMS
		int smsSeq = -1;
		//EMAIL		
		int SEQIDX = -1;
		String REPLYTO = Configurer.getProperty("emailSender.replyTo");
		String ERRORSTO = Configurer.getProperty("emailSender.errorsTo");
		String QRY=" ";
		//String MAILTO  = " ";                 //받는 사람에 해당하는 필드입니다.  형식 : "이름"<이메일>
		String RNAME    = "EMAIL,NAME,PBC_SQNO,NTS_TMS_SQNO,TXBIL_KD_NM,SPLR_MTALNM,SPLR_REPMNM,SPLR_CHRR_TELNO,BUY_MTALNM,BUY_REPMNM,BUY_CHRRNM1,BUY_CHRR_TELNO1,BUY_CHRR_EMAIL1,BUY_CHRRNM2,BUY_CHRR_TELNO2,BUY_CHRR_EMAIL2,CRT_DT,SPRTT,TXA_TT,TOT_AM" ;   //참조명에 해당합니다
		String MTYPE    = "1" ;   //0: 일반메일 1: html + text 메일 2: 보안메일
		String HTML     = "1";            //text : 0 , html : 1  기본 1
		String ATC_SET  = "0" ;                                        //첨부파일 개수
		String MAILIDX  = "0" ;
		// String NEWSUBJECT        =   SUBJECT    ; 
		String NEWMAILFROM = "";
		String NEWMAILTO   = "";
		String NEWCONTENT  = "";
		
		String MAILTO = "\"[$NAME$]\"<[$EMAIL$]>";
		String MAILFROM = "\"농협하나로유통[NHeSCM]\"<callcenter@nhescm.co.kr>";
		String from_MB_NM = "";
		String to_MB_NM = "";
		String CONTENT = "이메일 내용입니다.";
		
		String SUBJECT = "[$CRT_DT$]에 작성된 [$TXBIL_KD_NM$]가 농협하나로유통[NHeSCM]에  도착했습니다.";
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		for(int i = 0 ; i < ds_reSend.getRowCount() ; i++)
		{
			if(ds_reSend.getString(i, "EMAIL_PBC_RQR_YN").equals("Y"))
			{
				SEQIDX	=  getSqlSession().selectOne("slTxbilDscDAO.getEmailSequence");
				QRY = fn_makeQry(ds_reSend.getString(0, "PBC_SQNO"));
				 
				if(!"".equals(MAILFROM) && !"".equals(MAILTO)&& !"".equals(from_MB_NM)&& !"".equals(to_MB_NM))
				{
				
					NEWMAILTO = "\"" +from_MB_NM +"\"<"+ MAILFROM + ">";
					NEWMAILFROM = "\"" +to_MB_NM +"\"<"+ MAILTO + ">"; 
						
				}
				else if(!"".equals(MAILFROM) && !"".equals(MAILTO) && "".equals(from_MB_NM)&& "".equals(to_MB_NM))
				{
				
					NEWMAILTO = "\"" +MAILFROM +"\"<"+ MAILFROM + ">";
					NEWMAILFROM = "\"" +MAILTO +"\"<"+ MAILTO + ">"; 
				
				}
				
				CONTENT = CONTENT.replaceAll(" ", "&nbsp;");
				CONTENT = CONTENT.replaceAll("\n", "<br/>");
				
				NEWCONTENT  = fn_makeContent();// "<html><body><head></head>"+CONTENT+ " </body></html>" ;
				
				param.put("SEQIDX", SEQIDX);
				param.put("SUBJECT", SUBJECT);
				param.put("QRY", QRY);
				param.put("MAILFROM", MAILFROM);
				param.put("MAILTO", MAILTO);
				param.put("REPLYTO", REPLYTO);
				param.put("ERRORSTO", ERRORSTO);
				param.put("ATC_SET", ATC_SET);
				param.put("RNAME", RNAME);
				param.put("MTYPE", MTYPE);
				param.put("MAILIDX", MAILIDX);
				param.put("CONTENT", NEWCONTENT);
				param.put("HTML", HTML);
				param.put("PBC_SQNO", ds_reSend.getString(i, "PBC_SQNO"));
						
				if(getSqlSession().insert("slTxbilDscDAO.reSendEmail", param) > 0)
				{
					suc +=  getSqlSession().update("slTxbilDscDAO.updateReSendEamil", param);
				}
			}
			
			if(ds_reSend.getString(i, "SMS_PBC_RQR_YN").equals("Y"))
			{
				String DEST_INFO = "";// USR_NM + "^" + USR_HP;
				String msg = "";
				smsSeq = getSqlSession().selectOne("slTxbilDscDAO.getSmsSequence");
				
				param.put("USER_ID", Configurer.getProperty("smsTaxSender.userId"));
				param.put("SCHEDULE_TYPE", 0);
				param.put("SEND_DATE", DateUtil.getCurrentDate("yyyyMMddHHmmss"));
				param.put("DEST_TYPE", "0");
				param.put("DEST_COUNT", "0");
				
				param.put("SUBJECT", "TAX");
				param.put("MSG_ID", smsSeq);
				param.put("SEND_STATUS", 0);
				param.put("SEND_COUNT", 0);
				
				param.put("SEND_RESULT", 0);
				param.put("CALLBACK", Configurer.getProperty("smsTaxSender.callback"));
				
				DEST_INFO = ds_reSend.getString(i, "SPLR_REPMNM") + "^" + ds_reSend.getString(i, "RSR_HDNG22");
//				DEST_INFO = ds_reSend.getString(i, "RSR_HDNG22");
				msg = ds_reSend.getString(i, "SPLR_REPMNM") + "님, 농협하나로유통 역발행세금계산서 미발행 건이 있습니다. 승인 부탁드립니다.";
				param.put("DEST_INFO", DEST_INFO);
				param.put("SMS_MSG",msg);
				param.put("PBC_SQNO", ds_reSend.getString(i, "PBC_SQNO"));
				param.put("NA_TRPL_C", ds_reSend.getString(i, "NA_TRPL_C"));
				
				param.put("FTEMPLATEKEY", "TAX001"); // 알림톡  KKO 템플릿키  
				
				if(getSqlSession().insert("slTxbilDscDAO.reSendSms", param) > 0)
				{
					suc +=  getSqlSession().update("slTxbilDscDAO.updateReSendSms", param);
				}
				
				//taxbil도 업데이트한다.
			}
		}
		
		return suc;
	}
	
	
	private String fn_makeQry(String pbcSqno) {
		String content = "";

		// QRY
		StringBuffer qrySb = new StringBuffer();
		
		qrySb.append("SQL:SELECT \n"); 
		qrySb.append("/*+ INDEX(A PK_TX_TXBIL) */ \n"); 
		qrySb.append(" RSR_HDNG21 AS EMAIL\n"); 
		qrySb.append(",NVL((SELECT USR_NM FROM NHVANPTL.PT_USR_INF INF \n"); 
		qrySb.append("  WHERE EXISTS (SELECT 'X' FROM NHVANPTL.PT_USR_AUTH WHERE MB_ID=INF.MB_ID AND USR_AUTH_DSC='3') \n"); 
		qrySb.append("  AND NA_TRPL_C=TX.NA_TRPL_C),NVL(SPLR_CHRRNM,'')) NAME \n"); 
		qrySb.append(",PBC_SQNO \n"); 
		qrySb.append(",NTS_TMS_SQNO \n"); 
		qrySb.append(",(SELECT SIMP_CNM FROM NHVANPTL.MG_COMN_C_AMN WHERE SIMP_TPC='TXBIL_KD' AND SIMP_C=TXBIL_KD) TXBIL_KD_NM \n"); 
		qrySb.append(",SPLR_MTALNM \n"); 
		qrySb.append(",SPLR_REPMNM \n"); 
		qrySb.append(",NVL(ECL_DECRYPT(SPLR_CHRR_TELNO),'') SPLR_CHRR_TELNO \n"); 
		qrySb.append(",BUY_MTALNM \n"); 
		qrySb.append(",BUY_REPMNM \n"); 
		qrySb.append(",NVL(BUY_CHRRNM1,'') BUY_CHRRNM1 \n"); 
		qrySb.append(",NVL(ECL_DECRYPT(BUY_CHRR_TELNO1),'') BUY_CHRR_TELNO1 \n"); 
		qrySb.append(",NVL(BUY_CHRR_EMAIL1,'') BUY_CHRR_EMAIL1 \n"); 
		qrySb.append(",NVL(BUY_CHRRNM2,'') BUY_CHRRNM2 \n"); 
		qrySb.append(",NVL(ECL_DECRYPT(BUY_CHRR_TELNO2),'') BUY_CHRR_TELNO2 \n"); 
		qrySb.append(",NVL(BUY_CHRR_EMAIL2,'') BUY_CHRR_EMAIL2 \n"); 
		qrySb.append(",SUBSTR(CRT_DT,1,4)||'-'||SUBSTR(CRT_DT,5,2)||'-'||SUBSTR(CRT_DT,7,2) CRT_DT \n"); 
		qrySb.append(",TO_CHAR(SPRTT,'FM999,999,999,999') SPRTT \n"); 
		qrySb.append(",TO_CHAR(TXA_TT,'FM999,999,999,999') TXA_TT \n"); 
		qrySb.append(",TO_CHAR(TOT_AM,'FM999,999,999,999') TOT_AM \n"); 
		qrySb.append("FROM NHVANPTL.TX_TXBIL TX \n");
		qrySb.append("WHERE PBC_SQNO = '"+pbcSqno+"'");
		
		content = qrySb.toString();
		return content;
	}

	private String fn_makeContent() {
		String qry = "";

		StringBuffer sb = new StringBuffer();
		sb.append("<html> "); 
		sb.append("	<head> "); 
		sb.append("		<title>세금계산서</title> "); 
		sb.append("	</head> "); 
		sb.append("	<body> "); 
		sb.append("		<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 "); 
		sb.append("			width=710 "); 
		sb.append("			style='width:532.5pt;border:solid #DFDFDF 1.0pt;border-bottom:solid #F2F2F2 2.25pt'> "); 
		sb.append("			<tr> "); 
		sb.append("				<td style='border:none;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("					<div align=center> "); 
		sb.append("						<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("							cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("							<tr> "); 
		sb.append("								<td colspan=3 style='padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("							</tr> "); 
		sb.append("							<tr> "); 
		sb.append("								<td style='padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("								<td valign=top "); 
		sb.append("									style='border:none;border-bottom:solid #DFDFDF 1.0pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("									<p class=MsoNormal align=center "); 
		sb.append("										style='text-align:center;line-height:19.5pt'> "); 
		sb.append("										<b> "); 
		sb.append("											<span style='font-size:18.0pt;letter-spacing:-.75pt'> "); 
		sb.append("												").append("[$TXBIL_KD_NM$] 역발행 내역입니다. "); 
		sb.append("												<span lang=EN-US> "); 
		sb.append("													. "); 
		sb.append("													<o:p></o:p> "); 
		sb.append("												</span> "); 
		sb.append("											</span> "); 
		sb.append("										</b> "); 
		sb.append("									</p> "); 
		sb.append("								</td> "); 
		sb.append("								<td style='padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("							</tr> "); 
		sb.append("						</table> "); 
		sb.append("					</div> "); 
		sb.append("				</td> "); 
		sb.append("			</tr> "); 
		sb.append("			<tr> "); 
		sb.append("				<td style='border:none;padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("			</tr> "); 
		sb.append("			<tr> "); 
		sb.append("				<td style='border:none;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("					<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("						cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("						<tr> "); 
		sb.append("							<td style='padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("							<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("									cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("									<tr> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<p class=MsoNormal style='line-height:14.25pt'> "); 
		sb.append("												<strong> "); 
		sb.append("													<span style='font-size:10.5pt;font-family:굴림'> "); 
		sb.append("														<span lang=EN-US></span> "); 
		sb.append("														상세내역은 하나로eSCM에서 확인하시기 바랍니다."); 
		sb.append("														<span lang=EN-US>,</span> "); 
		sb.append("													</span> "); 
		sb.append("												</strong> "); 
		sb.append("												<span lang=EN-US> "); 
		sb.append("													<o:p></o:p> "); 
		sb.append("												</span> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("									</tr> "); 
		sb.append("								</table> "); 
		sb.append("							</td> "); 
		sb.append("							<td style='padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("						</tr> "); 
		sb.append("					</table> "); 
		sb.append("				</td> "); 
		sb.append("			</tr> "); 
		sb.append("			<tr style='height:48.75pt'> "); 
		sb.append("				<td style='border:none;padding:0cm 0cm 0cm 0cm;height:48.75pt'> "); 
		sb.append("					<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("						cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("						<tr style='height:48.75pt'> "); 
		sb.append("							<td width=35 "); 
		sb.append("								style='width:26.25pt;padding:0cm 0cm 0cm 0cm;height:48.75pt'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US>&nbsp; "); 
		sb.append("										<o:p></o:p> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("							<td valign=top style='padding:0cm 0cm 0cm 0cm;height:48.75pt'> "); 
		sb.append("								<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("									cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("									<tr style='height:12.0pt'> "); 
		sb.append("										<td colspan=3 style='padding:0cm 0cm 0cm 0cm;height:12.0pt'> "); 
		sb.append("											<p class=MsoNormal> "); 
		sb.append("												<span lang=EN-US>&nbsp; "); 
		sb.append("													<o:p></o:p> "); 
		sb.append("												</span> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td width=127 style='width:95.25pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<p class=MsoNormal align=center> "); 
		sb.append("												<span lang=EN-US> "); 
		sb.append("													<a href=\"https://www.nhescm.co.kr/escm/index.html\" target=\"_blank\"> "); 
		sb.append("														<span style='text-decoration:none'> "); 
		sb.append("															<img border=0 width=264 height=65 id=\"_x0000_i1025\" "); 
		sb.append("																src=\"https://www.nhescm.co.kr/escm/_theme_/escm/images/sta_TF_Logo.png\" "); 
		sb.append("																alt=NHeSCM> "); 
		sb.append("														</span> "); 
		sb.append("													</a> "); 
		sb.append("													<o:p></o:p> "); 
		sb.append("												</span> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("										<td width=\"100%\" style='width:100.0%;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<p class=MsoNormal> "); 
		sb.append("												<span lang=EN-US>&nbsp; "); 
		sb.append("													<o:p></o:p> "); 
		sb.append("												</span> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("										<td width=126 valign=bottom style='width:94.5pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("								</table> "); 
		sb.append("							</td> "); 
		sb.append("							<td width=35 "); 
		sb.append("								style='width:26.25pt;padding:0cm 0cm 0cm 0cm;height:48.75pt'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US>&nbsp; "); 
		sb.append("										<o:p></o:p> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("					</table> "); 
		sb.append("				</td> "); 
		sb.append("			</tr> "); 
		sb.append("			<tr> "); 
		sb.append("				<td style='border:none;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("					<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("						cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("						<tr> "); 
		sb.append("							<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("									cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("									<tr style='height:26.25pt'> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm;height:26.25pt'></td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr style='height:4.5pt'> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm;height:4.5pt'></td> "); 
		sb.append("									</tr> "); 
		sb.append("								</table> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("						<tr> "); 
		sb.append("							<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("									cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("									<tr style='height:22.5pt'> "); 
		sb.append("										<td colspan=5 style='padding:0cm 0cm 0cm 0cm;height:22.5pt'></td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td width=24 style='width:18.0pt;padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("										<td width=315 style='width:236.25pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<table class=MsoNormalTable border=1 cellspacing=0 "); 
		sb.append("												cellpadding=0 width=315 "); 
		sb.append("												style='width:236.25pt;border-top:solid #E45050 3.0pt;border-left:none;border-bottom:solid #F2F2F2 1.5pt;border-right:none'> "); 
		sb.append("												<tr style='height:141.0pt'> "); 
		sb.append("													<td valign=top "); 
		sb.append("														style='border:solid #DEDEDE 1.0pt;border-top:none;padding:0cm 0cm 0cm 0cm;height:141.0pt'> "); 
		sb.append("														<div align=center> "); 
		sb.append("															<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("																cellpadding=0 width=263 style='width:197.25pt'> "); 
		sb.append("																<tr style='height:27.0pt'> "); 
		sb.append("																	<td colspan=2 valign=bottom "); 
		sb.append("																		style='padding:0cm 0cm 0cm 0cm;height:27.0pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span "); 
		sb.append("																					style='font-family:굴림;color:#E45050;letter-spacing:-.75pt'>공급자 정보</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='color:#E45050;letter-spacing:-.75pt'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:12.75pt'> "); 
		sb.append("																	<td colspan=2 style='padding:0cm 0cm 0cm 0cm;height:12.75pt'></td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td "); 
		sb.append("																		style='border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#E45050'>상호</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#E45050'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span style='font-size:9.0pt'> "); 
		sb.append("																				").append("[$SPLR_MTALNM$]"); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td "); 
		sb.append("																		style='border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#E45050'>대표자</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#E45050'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span style='font-size:9.0pt'> "); 
		sb.append("																				").append("[$SPLR_REPMNM$]"); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td "); 
		sb.append("																		style='border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#E45050'>담당자</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#E45050'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span style='font-size:9.0pt'> "); 
		sb.append("																				");
		sb.append("[$NAME$]"); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td "); 
		sb.append("																		style='border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#E45050'>연락처</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#E45050'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt'> "); 
		sb.append("																				");
		sb.append("[$SPLR_CHRR_TELNO$]"); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td style='padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#E45050'>이메일</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#E45050'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal style='word-break:break-hangul'> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt'> ");
		sb.append("																				<a href=\"mailto:").append("[$EMAIL$]").append("\">").append("[$EMAIL$]").append("</a> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("															</table> "); 
		sb.append("														</div> "); 
		sb.append("													</td> "); 
		sb.append("												</tr> "); 
		sb.append("											</table> "); 
		sb.append("										</td> "); 
		sb.append("										<td width=30 style='width:22.5pt;padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("										<td width=315 style='width:236.25pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<table class=MsoNormalTable border=1 cellspacing=0 "); 
		sb.append("												cellpadding=0 width=315 "); 
		sb.append("												style='width:236.25pt;border-top:solid #4971C3 3.0pt;border-left:none;border-bottom:solid #F2F2F2 1.5pt;border-right:none'> "); 
		sb.append("												<tr style='height:141.0pt'> "); 
		sb.append("													<td valign=top "); 
		sb.append("														style='border:solid #DEDEDE 1.0pt;border-top:none;padding:0cm 0cm 0cm 0cm;height:141.0pt'> "); 
		sb.append("														<div align=center> "); 
		sb.append("															<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("																cellpadding=0 width=263 style='width:197.25pt'> "); 
		sb.append("																<tr style='height:27.0pt'> "); 
		sb.append("																	<td colspan=2 valign=bottom "); 
		sb.append("																		style='padding:0cm 0cm 0cm 0cm;height:27.0pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span "); 
		sb.append("																					style='font-family:굴림;color:#4971C3;letter-spacing:-.75pt'>공급받는자 정보</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='color:#4971C3;letter-spacing:-.75pt'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:12.75pt'> "); 
		sb.append("																	<td colspan=2 style='padding:0cm 0cm 0cm 0cm;height:12.75pt'></td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td width=60 "); 
		sb.append("																		style='width:45.0pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#4971C3'>상호</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#4971C3'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span style='font-size:9.0pt'> "); 
		sb.append("																				").append("[$BUY_MTALNM$]"); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td "); 
		sb.append("																		style='border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#4971C3'>대표자</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#4971C3'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span style='font-size:9.0pt'> "); 
		sb.append("																				").append("[$BUY_REPMNM$]"); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td "); 
		sb.append("																		style='border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#4971C3'>담당자</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#4971C3'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span style='font-size:9.0pt'> "); 
		sb.append("																				").append("[$BUY_CHRRNM1$]"); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td "); 
		sb.append("																		style='border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#4971C3'>연락처</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#4971C3'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;border:none;border-bottom:solid #E0E0E0 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<span style='font-size:9.0pt'> "); 
		sb.append("																				").append("[$BUY_CHRR_TELNO1$]"); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("																<tr style='height:18.75pt'> "); 
		sb.append("																	<td style='padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal> "); 
		sb.append("																			<strong> "); 
		sb.append("																				<span style='font-size:9.0pt;font-family:굴림;color:#4971C3'>이메일</span> "); 
		sb.append("																			</strong> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt;color:#4971C3'> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																	<td width=203 "); 
		sb.append("																		style='width:152.25pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("																		<p class=MsoNormal style='word-break:break-hangul'> "); 
		sb.append("																			<span lang=EN-US style='font-size:9.0pt'> "); 
		sb.append("																				<a href=\"mailto:").append("[$BUY_CHRR_EMAIL1$]").append("\">").append("[$BUY_CHRR_EMAIL1$]").append("</a> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</p> "); 
		sb.append("																	</td> "); 
		sb.append("																</tr> "); 
		sb.append("															</table> "); 
		sb.append("														</div> "); 
		sb.append("													</td> "); 
		sb.append("												</tr> "); 
		sb.append("											</table> "); 
		sb.append("										</td> "); 
		sb.append("										<td width=24 style='width:18.0pt;padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("									</tr> "); 
		sb.append("								</table> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("						<tr> "); 
		sb.append("							<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("									cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("									<tr style='height:21.0pt'> "); 
		sb.append("										<td colspan=3 style='padding:0cm 0cm 0cm 0cm;height:21.0pt'></td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td width=35 style='width:26.25pt;padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("												cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("												<tr> "); 
		sb.append("													<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("														<p class=MsoNormal> "); 
		sb.append("															<strong> "); 
		sb.append("																<span "); 
		sb.append("																	style='font-size:10.5pt;font-family:굴림;color:#666666;letter-spacing:-.75pt'>전자계산서 정보</span> "); 
		sb.append("															</strong> "); 
		sb.append("															<strong> "); 
		sb.append("																<span lang=EN-US "); 
		sb.append("																	style='font-size:8.5pt;font-family:굴림;color:#666666;letter-spacing:-.75pt'>&gt;</span> "); 
		sb.append("															</strong> "); 
		sb.append("															<span lang=EN-US "); 
		sb.append("																style='font-size:10.5pt;color:#666666;letter-spacing:-.75pt'> "); 
		sb.append("																<o:p></o:p> "); 
		sb.append("															</span> "); 
		sb.append("														</p> "); 
		sb.append("													</td> "); 
		sb.append("												</tr> "); 
		sb.append("												<tr style='height:6.0pt'> "); 
		sb.append("													<td style='padding:0cm 0cm 0cm 0cm;height:6.0pt'></td> "); 
		sb.append("												</tr> "); 
		sb.append("												<tr> "); 
		sb.append("													<td "); 
		sb.append("														style='border-top:solid #C8C8C8 1.0pt;border-left:none;border-bottom:solid #EBEBEB 1.0pt;border-right:none;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("														<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("															cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("															<tr style='height:21.75pt'> "); 
		sb.append("																<td "); 
		sb.append("																	style='border-top:none;border-left:none;border-bottom:solid #EBEBEB 1.0pt;border-right:solid #EBEBEB 1.0pt;background:#FCFCFD;padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<b> "); 
		sb.append("																			<span style='font-size:9.0pt;color:#666666'> "); 
		sb.append("																				작성일 "); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</b> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("																<td "); 
		sb.append("																	style='border-top:none;border-left:none;border-bottom:solid #EBEBEB 1.0pt;border-right:solid #EBEBEB 1.0pt;background:#FCFCFD;padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<b> "); 
		sb.append("																			<span style='font-size:9.0pt;color:#666666'> "); 
		sb.append("																				공급가액 "); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</b> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("																<td "); 
		sb.append("																	style='border-top:none;border-left:none;border-bottom:solid #EBEBEB 1.0pt;border-right:solid #EBEBEB 1.0pt;background:#FCFCFD;padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<b> "); 
		sb.append("																			<span style='font-size:9.0pt;color:#666666'> "); 
		sb.append("																				세액 "); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</b> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("																<td "); 
		sb.append("																	style='border:none;border-bottom:solid #EBEBEB 1.0pt;background:#FCFCFD;padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<b> "); 
		sb.append("																			<span style='font-size:9.0pt;color:#666666'> "); 
		sb.append("																				합계금액 "); 
		sb.append("																				<span lang=EN-US> "); 
		sb.append("																					<o:p></o:p> "); 
		sb.append("																				</span> "); 
		sb.append("																			</span> "); 
		sb.append("																		</b> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("															</tr> "); 
		sb.append("															<tr style='height:21.75pt'> "); 
		sb.append("																<td "); 
		sb.append("																	style='border:none;border-right:solid #EBEBEB 1.0pt;padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<span lang=EN-US style='font-size:9.0pt;color:#888888'> "); 
		sb.append("																			[$CRT_DT$]"); 
		sb.append("																			<o:p></o:p> "); 
		sb.append("																		</span> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("																<td "); 
		sb.append("																	style='border:none;border-right:solid #EBEBEB 1.0pt;padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<span lang=EN-US style='font-size:9.0pt;color:#888888'>").append("[$SPRTT$]").append(" </span> "); 
		sb.append("																		<span style='font-size:9.0pt;color:#888888'> "); 
		sb.append("																			원 "); 
		sb.append("																			<span lang=EN-US> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</span> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("																<td "); 
		sb.append("																	style='border:none;border-right:solid #EBEBEB 1.0pt;padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<span lang=EN-US style='font-size:9.0pt;color:#888888'>").append("[$TXA_TT$]").append(" </span> "); 
		sb.append("																		<span style='font-size:9.0pt;color:#888888'> "); 
		sb.append("																			원 "); 
		sb.append("																			<span lang=EN-US> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</span> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("																<td style='padding:0cm 0cm 0cm 0cm;height:21.75pt'> "); 
		sb.append("																	<p class=MsoNormal align=center style='text-align:center'> "); 
		sb.append("																		<span lang=EN-US style='font-size:9.0pt;color:#888888'>").append("[$TOT_AM$]").append(" </span> "); 
		sb.append("																		<span style='font-size:9.0pt;color:#888888'> "); 
		sb.append("																			원 "); 
		sb.append("																			<span lang=EN-US> "); 
		sb.append("																				<o:p></o:p> "); 
		sb.append("																			</span> "); 
		sb.append("																		</span> "); 
		sb.append("																	</p> "); 
		sb.append("																</td> "); 
		sb.append("															</tr> "); 
		sb.append("														</table> "); 
		sb.append("													</td> "); 
		sb.append("												</tr> "); 
		sb.append("												<tr style='height:8.25pt'> "); 
		sb.append("													<td style='padding:0cm 0cm 0cm 0cm;height:8.25pt'></td> "); 
		sb.append("												</tr> "); 
		sb.append("												<tr> "); 
		sb.append("													<td "); 
		sb.append("														style='border-top:solid #C8C8C8 1.0pt;border-left:none;border-bottom:solid #EBEBEB 1.0pt;border-right:none;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("													</td> "); 
		sb.append("												</tr> "); 
		sb.append("											</table> "); 
		sb.append("										</td> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'></td> "); 
		sb.append("									</tr> "); 
		sb.append("								</table> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("					</table> "); 
		sb.append("				</td> "); 
		sb.append("			</tr> "); 
		sb.append("			<tr> "); 
		sb.append("				<td style='border:none;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("					<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("						cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("						<tr style='height:30.0pt'> "); 
		sb.append("							<td colspan=4 style='padding:0cm 0cm 0cm 0cm;height:30.0pt'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US>&nbsp; "); 
		sb.append("										<o:p></o:p> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("						<tr style='height:12.0pt'> "); 
		sb.append("							<td colspan=4 "); 
		sb.append("								style='border:none;border-top:solid #E6E6E6 1.0pt;padding:0cm 0cm 0cm 0cm;height:12.0pt'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US>&nbsp; "); 
		sb.append("										<o:p></o:p> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("						<tr> "); 
		sb.append("							<td width=43 style='width:32.25pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US>&nbsp; "); 
		sb.append("										<o:p></o:p> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("							<td width=\"100%\" style='width:100.0%';padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<table class=MsoNormalTable border=0 cellspacing=0 "); 
		sb.append("									cellpadding=0 width=\"100%\" style='width:100.0%'> "); 
		sb.append("									<tr> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<p class=MsoNormal> "); 
		sb.append("												<strong> "); 
		sb.append("													<span "); 
		sb.append("														style='font-size:8.5pt;font-family:굴림;color:#555555;letter-spacing:-.75pt'> "); 
		sb.append("														본 메일은 발신전용 메일로 회신이 되지 않습니다 "); 
		sb.append("														<span lang=EN-US>.</span> "); 
		sb.append("													</span> "); 
		sb.append("												</strong> "); 
		sb.append("												<span lang=EN-US "); 
		sb.append("													style='font-size:8.5pt;color:#555555;letter-spacing:-.75pt'> "); 
		sb.append("													<o:p></o:p> "); 
		sb.append("												</span> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr style='height:5.25pt'> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm;height:5.25pt'></td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr style='height:9.0pt'> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm;height:9.0pt'></td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<table class=MsoNormalTable border=1 cellspacing=0 "); 
		sb.append("												cellpadding=0 style='background:#F2F2F2;border:solid #E4E4E4 1.0pt'> "); 
		sb.append("												<tr style='height:13.5pt'> "); 
		sb.append("													<td style='border:none;padding:0cm 7.5pt 0cm 7.5pt;height:13.5pt'> "); 
		sb.append("														<p class=MsoNormal> "); 
		sb.append("															<span "); 
		sb.append("																style='font-size:8.5pt;color:#0F8785;letter-spacing:-.75pt'> "); 
		sb.append("																전자세금계산서 시스템사업자 "); 
		sb.append("																<strong> "); 
		sb.append("																	<span style='font-family:굴림'>표준인증 </span> "); 
		sb.append("																</strong> "); 
		sb.append("															</span> "); 
		sb.append("															<strong> "); 
		sb.append("																<span style='font-size:8.5pt;font-family:굴림;color:#0F8785'> "); 
		sb.append("																	제 "); 
		sb.append("																	<span lang=EN-US>41000198</span> "); 
		sb.append("																</span> "); 
		sb.append("															</strong> "); 
		sb.append("															<span "); 
		sb.append("																style='font-size:8.5pt;color:#0F8785;letter-spacing:-.75pt'> "); 
		sb.append("																호 "); 
		sb.append("																<span lang=EN-US> "); 
		sb.append("																	<o:p></o:p> "); 
		sb.append("																</span> "); 
		sb.append("															</span> "); 
		sb.append("														</p> "); 
		sb.append("													</td> "); 
		sb.append("												</tr> "); 
		sb.append("											</table> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr style='height:9.0pt'> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm;height:9.0pt'></td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<p class=MsoNormal style='line-height:9.75pt'> "); 
		sb.append("												<span style='font-size:8.5pt;color:#555555'> "); 
		sb.append("													서울특별시 중구 통일로 92 에이스타워 6층 농협하나로유통 / 대표전화번호 : 1522-1211 / FAX : 02-318-3456 "); 
		sb.append("												</span> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("									<tr> "); 
		sb.append("										<td style='padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("											<p class=MsoNormal style='line-height:9.75pt'> "); 
		sb.append("												<span lang=EN-US "); 
		sb.append("													style='font-size:8.5pt;font-family:\"Tahoma\",\"sans-serif\";color:#555555'>Copyright(C) NH Nonghyup Hanaro Club 2015. All right reserved. 이 시스템은 kt컨소시엄이 운영 관리합니다."); 
		sb.append("												</span> "); 
		sb.append("												<span lang=EN-US style='font-size:8.5pt;color:#9C9C9C'> "); 
		sb.append("													<o:p></o:p> "); 
		sb.append("												</span> "); 
		sb.append("											</p> "); 
		sb.append("										</td> "); 
		sb.append("									</tr> "); 
		sb.append("								</table> "); 
		sb.append("							</td> "); 
		sb.append("							<td width=188 style='width:141.0pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("							<td width=43 style='width:32.25pt;padding:0cm 0cm 0cm 0cm'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US>&nbsp; "); 
		sb.append("										<o:p></o:p> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("						<tr style='height:18.75pt'> "); 
		sb.append("							<td colspan=4 "); 
		sb.append("								style='border:none;border-bottom:solid #DFDFDF 1.0pt;padding:0cm 0cm 0cm 0cm;height:18.75pt'> "); 
		sb.append("								<p class=MsoNormal> "); 
		sb.append("									<span lang=EN-US>&nbsp; "); 
		sb.append("										<o:p></o:p> "); 
		sb.append("									</span> "); 
		sb.append("								</p> "); 
		sb.append("							</td> "); 
		sb.append("						</tr> "); 
		sb.append("					</table> "); 
		sb.append("				</td> "); 
		sb.append("			</tr> "); 
		sb.append("		</table> "); 
		sb.append("	</body> "); 
		sb.append("</html> ");
		
		qry = sb.toString();
		return qry;
	}
	
	public List<ByngMonVO> retrieveByngMon(String userId, String bas_ym, String bas_ym2, String adjpl_biz_number, String na_adjpl_c, String issue_stat, int start, int end){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("BAS_YM", bas_ym);
		params.put("BAS_YM2", bas_ym2);
		
		params.put("ADJPL_BIZ_NUMBER", adjpl_biz_number);
		params.put("NA_ADJPL_C", na_adjpl_c);
		params.put("ISSUE_STAT", issue_stat);
		params.put("USER_ID", userId);
		params.put("start", start);
		params.put("end", end);
		if(logger.isDebugEnabled()){
			logger.debug("retrieveByngMon PARAMS : " + params);
		}
		return getSqlSession().selectList("slTxbilDscDAO.retrieveByngMon", params);
	}
	
	public void downloadExcelByngMon(String userId, String bas_ym, String bas_ym2, String adjpl_biz_number, String na_adjpl_c, String issue_stat, ExcelFileMakerResultHandler handler) {
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("BAS_YM", bas_ym);
		params.put("BAS_YM2", bas_ym2);		
		params.put("ADJPL_BIZ_NUMBER", adjpl_biz_number);
		params.put("NA_ADJPL_C", na_adjpl_c);
		params.put("ISSUE_STAT", issue_stat);
		params.put("USER_ID", userId);
		
		getSqlSession().select("slTxbilDscDAO.downloadExcelByngMon", params, handler);
	}
	
	public int retrieveByngMonCount(String userId, String bas_ym, String bas_ym2, String adjpl_biz_number, String na_adjpl_c, String issue_stat){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("BAS_YM", bas_ym);
		params.put("BAS_YM2", bas_ym2);
		
		params.put("ADJPL_BIZ_NUMBER", adjpl_biz_number);
		params.put("NA_ADJPL_C", na_adjpl_c);
		params.put("ISSUE_STAT", issue_stat);
		params.put("USER_ID", userId);
		if(logger.isDebugEnabled()){
			logger.debug("retrieveByngMon PARAMS : " + params);
		}
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveByngMonCount", params);
	}
	
	public long getByngMonSumBacAm(String userId, String bas_ym, String adjpl_biz_number, String na_adjpl_c, String issue_stat){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("BAS_YM", bas_ym);
		params.put("ADJPL_BIZ_NUMBER", adjpl_biz_number);
		params.put("NA_ADJPL_C", na_adjpl_c);
		params.put("ISSUE_STAT", issue_stat);
		params.put("USER_ID", userId);
		if(logger.isDebugEnabled()){
			logger.debug("getByngMonSumBacAm PARAMS : " + params);
		}
		return getSqlSession().selectOne("slTxbilDscDAO.getByngMonSumBacAm", params);
	}
	
	public int insertByngHis(String ADJ_NA_BZPLC, String ADJ_BZPL_NA_TEAM_C, String BAS_YM, String NA_BZPLC, String NA_TEAM_C,String  NA_ADJPL_C, String ADJPL_NA_TEAM_C,
			String BZ_METH_DSC,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_BLB_DFC_DSC, String ISSUE_USER_ID, String ISSUE_STAT){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		params.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
		params.put("BAS_YM", BAS_YM);
		params.put("NA_BZPLC", NA_BZPLC);
		params.put("NA_TEAM_C", NA_TEAM_C);
		params.put("NA_ADJPL_C", NA_ADJPL_C);
		params.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
		params.put("BZ_METH_DSC", BZ_METH_DSC);
		params.put("NA_WRS_LCLC", NA_WRS_LCLC);
		params.put("NA_WRS_MCLC", NA_WRS_MCLC);
		params.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
		params.put("ISSUE_USER_ID", ISSUE_USER_ID);
		params.put("ISSUE_STAT", ISSUE_STAT);// 0: 미발행, 1 : 발행, 2 : 취소
		params.put("ISSUE_DT", DateUtil.getCurrentDate("yyyyMMddHHmmss"));
		
		if(logger.isDebugEnabled()){
			logger.debug("insertByngHis PARAMS : " + params);
		}
		return getSqlSession().insert("slTxbilDscDAO.insertByngHis", params);
	}
	
	
	public int insertTxbilBasSvc(String ADJ_NA_BZPLC, String ADJ_BZPL_NA_TEAM_C, String BAS_YM, String NA_BZPLC, String NA_TEAM_C,String  NA_ADJPL_C, String ADJPL_NA_TEAM_C,
			String BZ_METH_DSC,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_BLB_DFC_DSC, String ISSUE_DT){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		params.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
		params.put("BAS_YM", BAS_YM);
		params.put("NA_BZPLC", NA_BZPLC);
		params.put("NA_TEAM_C", NA_TEAM_C);
		params.put("NA_ADJPL_C", NA_ADJPL_C);
		params.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
		params.put("BZ_METH_DSC", BZ_METH_DSC);
		params.put("NA_WRS_LCLC", NA_WRS_LCLC);
		params.put("NA_WRS_MCLC", NA_WRS_MCLC);
		params.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
		params.put("ISSUE_DT", ISSUE_DT);
		
		if(logger.isDebugEnabled()){
			logger.debug("insertTxbilBasSvc PARAMS : " + params);
		}
		return getSqlSession().insert("slTxbilDscDAO.insertTxbilBasSvc", params);
	}
	
	public int updateCnfMSign(String ADJ_NA_BZPLC, String ADJ_BZPL_NA_TEAM_C, String BAS_YM, String NA_BZPLC, String NA_TEAM_C,String  NA_ADJPL_C, String ADJPL_NA_TEAM_C,
			String BZ_METH_DSC,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_BLB_DFC_DSC, String CNFM_SIGN_USER_ID, String CNFM_SIGN_DATA, String BAS_STAT){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		params.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
		params.put("BAS_YM", BAS_YM);
		params.put("NA_BZPLC", NA_BZPLC);
		params.put("NA_TEAM_C", NA_TEAM_C);
		params.put("NA_ADJPL_C", NA_ADJPL_C);
		params.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
		params.put("BZ_METH_DSC", BZ_METH_DSC);
		params.put("NA_WRS_LCLC", NA_WRS_LCLC);
		params.put("NA_WRS_MCLC", NA_WRS_MCLC);
		params.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
		params.put("CNFM_SIGN_USER_ID", CNFM_SIGN_USER_ID);
		params.put("CNFM_SIGN_DATA", CNFM_SIGN_DATA);
		params.put("CNFM_DT", DateUtil.getCurrentDate("yyyyMMddHHmmss"));
		params.put("BAS_STAT", BAS_STAT);
		if(logger.isDebugEnabled()){
			logger.debug("updateCnfMSign PARAMS : " + params);
		}
		return getSqlSession().insert("slTxbilDscDAO.updateCnfMSign", params);
	}
	
	
	public List<BasSvcVO> retrieveBasSvc(String bas_ym, String bzplc_corp_no, String adj_na_bzplc, String bas_stat, String[] na_adjpl_c, int start, int end){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("BAS_YM", bas_ym);
		params.put("BZPLC_CORP_NO", bzplc_corp_no);
		params.put("ADJ_NA_BZPLC", adj_na_bzplc);
		params.put("BAS_STAT", bas_stat);
		params.put("NA_ADJPL_C", na_adjpl_c);
		
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug("retrieveBasSvc PARAMS : " + params);
		}
		return getSqlSession().selectList("slTxbilDscDAO.retrieveBasSvc", params);
	}
	
	public int retrieveBasSvcCount(String bas_ym, String bzplc_corp_no, String adj_na_bzplc, String bas_stat, String[] na_adjpl_c){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("BAS_YM", bas_ym);
		params.put("BZPLC_CORP_NO", bzplc_corp_no);
		params.put("ADJ_NA_BZPLC", adj_na_bzplc);
		params.put("BAS_STAT", bas_stat);
		params.put("NA_ADJPL_C", na_adjpl_c);
		
		if(logger.isDebugEnabled()){
			logger.debug("retrieveBasSvc PARAMS : " + params);
		}
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveBasSvcCount", params);
	}
	
	
	public int upadteStatBasSvc(String ADJ_NA_BZPLC, String ADJ_BZPL_NA_TEAM_C, String BAS_YM, String NA_BZPLC, String NA_TEAM_C,String  NA_ADJPL_C, String ADJPL_NA_TEAM_C,
			String BZ_METH_DSC,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_BLB_DFC_DSC, String BAS_STAT){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		params.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
		params.put("BAS_YM", BAS_YM);
		params.put("NA_BZPLC", NA_BZPLC);
		params.put("NA_TEAM_C", NA_TEAM_C);
		params.put("NA_ADJPL_C", NA_ADJPL_C);
		params.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
		params.put("BZ_METH_DSC", BZ_METH_DSC);
		params.put("NA_WRS_LCLC", NA_WRS_LCLC);
		params.put("NA_WRS_MCLC", NA_WRS_MCLC);
		params.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
		params.put("BAS_STAT", BAS_STAT);
		
		if(logger.isDebugEnabled()){
			logger.debug("upadteStatBasSvc PARAMS : " + params);
		}
		return getSqlSession().insert("slTxbilDscDAO.upadteStatBasSvc", params);
	}
	
	
	public BasSvcVO getBasSvc(String ADJ_NA_BZPLC, String ADJ_BZPL_NA_TEAM_C, String BAS_YM, String NA_BZPLC, String NA_TEAM_C,String  NA_ADJPL_C, String ADJPL_NA_TEAM_C,
			String BZ_METH_DSC,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_BLB_DFC_DSC, String BAS_STAT){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ADJ_NA_BZPLC", ADJ_NA_BZPLC);
		params.put("ADJ_BZPL_NA_TEAM_C", ADJ_BZPL_NA_TEAM_C);
		params.put("BAS_YM", BAS_YM);
		params.put("NA_BZPLC", NA_BZPLC);
		params.put("NA_TEAM_C", NA_TEAM_C);
		params.put("NA_ADJPL_C", NA_ADJPL_C);
		params.put("ADJPL_NA_TEAM_C", ADJPL_NA_TEAM_C);
		params.put("BZ_METH_DSC", BZ_METH_DSC);
		params.put("NA_WRS_LCLC", NA_WRS_LCLC);
		params.put("NA_WRS_MCLC", NA_WRS_MCLC);
		params.put("NA_BLB_DFC_DSC", NA_BLB_DFC_DSC);
		params.put("BAS_STAT", BAS_STAT);
		
		if(logger.isDebugEnabled()){
			logger.debug("getBasSvc PARAMS : " + params);
		}
		return getSqlSession().selectOne("slTxbilDscDAO.getBasSvc", params);
	}
		
	public long getBasSvcSum(String bas_ym, String bzplc_corp_no, String adj_na_bzplc, String bas_stat, String[] na_adjpl_c){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("BAS_YM", bas_ym);
		params.put("BZPLC_CORP_NO", bzplc_corp_no);
		params.put("ADJ_NA_BZPLC", adj_na_bzplc);
		params.put("BAS_STAT", bas_stat);
		params.put("NA_ADJPL_C", na_adjpl_c);
		
		if(logger.isDebugEnabled()){
			logger.debug("getBasSvcSum PARAMS : " + params);
		}
		return getSqlSession().selectOne("slTxbilDscDAO.getBasSvcSum", params);
	}

	//IT 세금계산서 조회
	public List<Map<String, Object>> TaxbillListIT(DataSet dsCondition) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		
		return getSqlSession().selectList("slTxbilDscDAO.TaxbillListIT", param);
	}


	public List<Map<String,Object>> downloadExcelPricatStandards(String TRPL_C,String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C);
		map.put("NA_WRS_C", storesch); 			//상품코드
		map.put("WRS_C_DSC", arr_c_dsc);		//상품코드구분코드
		map.put("NA_WRS_LCLC", wrs_lclc);		//경제통합상품대분류코드
		map.put("NA_WRS_MCLC", wrs_mclc);		//경제통합상품중분류코드
		map.put("NA_WRS_SCLC", wrs_sclc);		//경제통합상품소분류코드
		map.put("NA_WRS_DTCF_C", wrs_dtcf_c);	//경제통합상품세분류코드
		map.put("CSER_CTR_TPC", cser_ctr);		//계약유형
		map.put("WRS_DSC", wrs_dsc);			//상품구분코드
		map.put("FROM_DATE", fsrg_from); 		//등록일 시작
		map.put("TO_DATE", fsrg_to); 			//등록일 끝
		map.put("FROM_DATE2", lschg_from); 		//등록일 시작
		map.put("TO_DATE2", lschg_to); 			//등록일 끝
		map.put("MNGT_C", mngt_c); 			//사업장코드
		return getSqlSession().selectList("productDAO.downloadExcelPricatStandards",map);
	}

	/**
	 * 월잔액장 상태별 건수  조회
	 * @param userId
	 * @param bas_ym
	 * @param na_adjpl_c
	 * @param issue_stat
	 * @return
	 */
	public List<Map<String,Object>>  retrieveBasSvcStatCount(String bas_ym, String bas_ym2, String TRPL_C) {

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("BAS_YM", bas_ym);
		params.put("BAS_YM2", bas_ym2);
		
		params.put("TRPL_C", TRPL_C);

		if(logger.isDebugEnabled()){
			logger.debug("retrieveBasSvcStatCount PARAMS : " + params);
		}
		return getSqlSession().selectList("slTxbilDscDAO.retrieveBasSvcStatCount", params);
	}

	public Map<String,Object> retrieveBasNoCheckCount(String bas_ym, String bas_ym2, String TRPL_C) {

		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("BAS_YM", bas_ym);
		params.put("BAS_YM2", bas_ym2);
		
		params.put("TRPL_C", TRPL_C);

		if(logger.isDebugEnabled()){
			logger.debug("retrieveBasNoCheckCount PARAMS : " + params);
		}
		return getSqlSession().selectOne("slTxbilDscDAO.retrieveBasNoCheckCount", params);
	}
	
	public List<Map<String,Object>>retrieveHurInf() {

		return getSqlSession().selectList("slTxbilDscDAO.retrieveHurInf");
	}

	public void retrieveTaxBillListExcel(DataSet dsCondition, int start, int end, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		

		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("OCU_DSC", dsCondition.getString(0, "OCU_DSC"));   // TX_TXBIL.OCU_DSC  '발생구분코드 : 01 경제통합, 02 하나로eSCM'
		
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		
		param.put("NA_CLNT_TEAM_C", dsCondition.getString(0, "NA_CLNT_TEAM_C"));
		param.put("NA_TEAM_C", dsCondition.getString(0, "NA_TEAM_C"));
		
		param.put("start", start);
		param.put("end", end);
		
		param.put("USRID", dsCondition.getString(0, "USRID"));
		
		if(logger.isDebugEnabled()){
			logger.debug("TXBIL_STSC : " + TXBIL_STSC);
			logger.debug("NA_TRPL_C : " + NA_TRPL_C);
			logger.debug("RPBC_DSC : " + dsCondition.getString(0, "RPBC_DSC"));
			logger.debug("BUY_BZNO : " +  dsCondition.getString(0, "BUY_BZNO"));
			logger.debug("OCU_DSC : " +  dsCondition.getString(0, "OCU_DSC"));
			
		}
		
		getSqlSession().select("slTxbilDscDAO.retrieveTaxBillListExcel", param, handler);
	}

	public void retrieveUnissuedTaxbilListExcel(DataSet dsCondition, int start, int end, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String[] decrypts = {"USR_MPNO"};
		param.put("decrypt", decrypts);
		
		String[] TXBIL_STSC = null;
		String[] NA_TRPL_C = null;
		
		if(dsCondition.getString(0, "TXBIL_STSC") != null && dsCondition.getString(0, "TXBIL_STSC").length() > 0)
		{
			TXBIL_STSC = dsCondition.getString(0, "TXBIL_STSC").split(",");
		}
		if(dsCondition.getString(0, "NA_TRPL_C") != null && dsCondition.getString(0, "NA_TRPL_C").length() > 0)
		{
			NA_TRPL_C = dsCondition.getString(0, "NA_TRPL_C").split(",");
		}
		
		
		param.put("DT_TYPE", dsCondition.getString(0, "DT_TYPE"));
		param.put("STARTDT", dsCondition.getString(0, "STARTDT"));
		param.put("ENDDT", dsCondition.getString(0, "ENDDT"));
		param.put("NA_BZPLC", dsCondition.getString(0, "NA_BZPLC"));
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("TXBIL_STSC", TXBIL_STSC);
		param.put("NTS_TMS_SQNO", dsCondition.getString(0, "NTS_TMS_SQNO"));
		param.put("TXBIL_KD", dsCondition.getString(0, "TXBIL_KD"));
		param.put("SPLR_BZNO", dsCondition.getString(0, "SPLR_BZNO"));
		param.put("BUY_BZNO", dsCondition.getString(0, "BUY_BZNO"));
		param.put("RPBC_DSC", dsCondition.getString(0, "RPBC_DSC"));
		param.put("CODE01", dsCondition.getString(0, "CODE01"));
		param.put("CODE02", dsCondition.getString(0, "CODE02"));
		param.put("start", start);
		param.put("end", end);
		param.put("start", start);
		param.put("end", end);
		
		getSqlSession().select("slTxbilDscDAO.retrieveUnissuedTaxbilListExcel", param, handler);
	}
} // End of Class

