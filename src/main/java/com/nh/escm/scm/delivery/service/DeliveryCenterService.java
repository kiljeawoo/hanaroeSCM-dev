package com.nh.escm.scm.delivery.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.scm.delivery.dao.DeliveryCenterDAO;
import com.nh.escm.scm.delivery.vo.CenterDqpdVO;
import com.nh.escm.scm.delivery.vo.CenterNpayPnltVO;
import com.nh.escm.scm.delivery.vo.CenterOdDlvpnshtVO;
import com.nh.escm.scm.delivery.vo.CenterUnStrVO;

/**
 * 배송업무 - 미입고 현황, 미입고 패널티, 물류센터 결품내역
 * @author HyeRim.Oh
 *
 */
@Service
public class DeliveryCenterService extends AbstractService {
	
	@Autowired
	private DeliveryCenterDAO deliveryCenterDAO;

	/* 업체별 미입고 현황 조회 */
	public List<CenterUnStrVO> retrieveCenterUnStrList(String naBzplc,
			String fromDate, String toDate, String searchArea, String code, String[] TRPL_C_ARR, String phdFcltC, String impsrt,String unStrRsnc, int start, int limit) {
		try {
			return deliveryCenterDAO.retrieveCenterUnStrList(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc, start, limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 업체별 미입고 현황 카운트 */
	public int getCenterUnStrCount(String naBzplc, String fromDate,
			String toDate, String searchArea, String code, String[] TRPL_C_ARR,
			String phdFcltC, String impsrt, String unStrRsnc) {
		try {
			return deliveryCenterDAO.getCenterUnStrCount(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 업체별 미입고 현황 엑셀 다운로드 */
	public void downloadExcelUnStrList(String naBzplc,
			String fromDate, String toDate, String searchArea, String code, String[] TRPL_C_ARR, String phdFcltC, String impsrt,String unStrRsnc,ExcelFileMakerResultHandler handler) {
		try {
			deliveryCenterDAO.downloadExcelUnStrList(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<CenterNpayPnltVO> retrieveCenterNpayPnltList(String odrSlpno,
			String odrplNaTrplC, String dvyPlashSlpno, String confirm,
			String dateCode, String fromDate, String toDate, String srhChkAll,
			String srhTrplC) {
		try {
			return deliveryCenterDAO.retrieveCenterNpayPnltList(odrSlpno,odrplNaTrplC,dvyPlashSlpno,confirm,dateCode,fromDate,toDate,srhChkAll,srhTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int updateCnfDtm(String na_bzplc, String str_pla_dt,
			String slpno, String cnf_cmeno, String ls_cmeno, String NA_TRPL_C, String NA_WRS_C, String NA_TEAM_C) {
		try {
			return deliveryCenterDAO.updateCnfDtm(na_bzplc,str_pla_dt,slpno,cnf_cmeno,ls_cmeno,NA_TRPL_C,NA_WRS_C,NA_TEAM_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}		
	}

	public List<CenterOdDlvpnshtVO> retrieveOdDlvpnshtList(String odrplNaTrplC,
			String[] TRPL_C_ARR, String fromDate, String toDate, String ddlyYn, String tempYn, String spyplNaTrplC, String odrplNaTrplN, String all, String mbcoType, String truAgcyNaTrplC) {
		try {
			return deliveryCenterDAO.retrieveOdDlvpnshtList(odrplNaTrplC, TRPL_C_ARR, fromDate, toDate, ddlyYn, tempYn, spyplNaTrplC, odrplNaTrplN, all, mbcoType, truAgcyNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<CenterDqpdVO> retrieveCenterDqpdList(String searchType,
			String wrs, String fromDate, String toDate, String naBzplc,
			String srhChkAll, String srhTrplC) {
		try {
			return deliveryCenterDAO.retrieveCenterDqpdList(searchType, wrs, fromDate, toDate,naBzplc,srhChkAll,srhTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public Map<String, Object> getCenterUnStrTotal(String naBzplc, String fromDate,
			String toDate, String searchArea, String code, String[] TRPL_C_ARR,
			String phdFcltC, String impsrt, String unStrRsnc) {
		try {
			return deliveryCenterDAO.getCenterUnStrTotal(naBzplc,fromDate,toDate, searchArea,code,TRPL_C_ARR,phdFcltC,impsrt,unStrRsnc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}



}
