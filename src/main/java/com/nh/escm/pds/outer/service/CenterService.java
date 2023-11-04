package com.nh.escm.pds.outer.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pds.outer.dao.CenterDAO;
import com.nh.escm.pds.outer.vo.CenterLiquorVO;
import com.nh.escm.pds.outer.vo.CenterVO;

@Service
public class CenterService extends AbstractService {
	
	@Autowired
	private CenterDAO  centerDao;

	/*물류센터_출고실적*/
	public List<CenterVO> retrieveWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		try {
			return centerDao.retrieveWrsMasterList(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC,start,limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 물류센터 출고실적 마스터 페이지 추가*/
	public int getOutWrsCount(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC) {
		try {
			return centerDao.getOutWrsCount(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> getBillingMarkUpTargets(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC, String GRS_SOJU_YN) {
		try {
			return centerDao.getBillingMarkUpTargets(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC, GRS_SOJU_YN);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*물류센터_출고실적 - 마스터 엑셀다운로드*/
	public List<Map<String, Object>> downloadExcelWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC) {
		try {
			return centerDao.downloadExcelWrsMasterList(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*물류센터_출고실적 - 디테일 엑셀다운로드*/
	public List<Map<String, Object>> downloadExcelWrsDetailList(String naBzplc, String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC,String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String flag, String naWrsC) {
		try {
			return centerDao.downloadExcelWrsDetailList(naBzplc,phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,flag,naWrsC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 물류센터 출고실적 디테일 조회*/
	public List<CenterVO> retrieveWrsDetailList(String phdNaBzplc,String phdDlrDsc, String prgrC,
																String naTrplC, String dateCode, String calFrom,
																String calTo, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		try {
			return centerDao.retrieveWrsDetailList(phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo,NA_TR_DSC,TRPL_C_ARR,naWrsC,start,limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 물류센터 출고실적 디테일 페이지 추가*/
	public int getOutWrsDetailCount(String phdNaBzplc, String phdDlrDsc,
			String prgrC, String naTrplC, String dateCode, String calFrom,
			String calTo) {
		try {
			return centerDao.getOutWrsDetailCount(phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*물류센터_출고실적_주류 마스터*/
	public List<CenterLiquorVO> retrieveLiquorWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		try {
			return centerDao.retrieveLiquorWrsMasterList(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC,start,limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*물류센터_출고실적_주류 마스터 페이지 추가*/
	public int getOutLiquorWrsMasterCount(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naWrsC) {
		try {
			return centerDao.getOutLiquorWrsMasterCount(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naWrsC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*물류센터_출고실적_주류 디테일*/
	public List<CenterLiquorVO> retrieveLiquorWrsDetailList(String phdNaBzplc,String phdDlrDsc, String prgrC,
																				String naTrplC, String dateCode, String calFrom,
																				String calTo,String NA_TR_DSC,String[] TRPL_C_ARR, String naWrsC, int start, int limit) {
		try {
			return centerDao.retrieveLiquorWrsDetailList(phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo,NA_TR_DSC,TRPL_C_ARR,naWrsC,start,limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*물류센터_출고실적_주류 디테일 페이지 추가*/
	public int getOutLiquorWrsDetailCount(String phdNaBzplc, String phdDlrDsc,
			String prgrC, String naTrplC, String dateCode, String calFrom,
			String calTo) {
		try {
			return centerDao.getOutLiquorWrsDetailCount(phdNaBzplc,phdDlrDsc,prgrC,naTrplC,dateCode,calFrom,calTo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}	
	
	/*주류 물류센터_출고실적 - 마스터 엑셀다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorWrsMasterList(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC) {
		try {
			return centerDao.downloadExcelLiquorWrsMasterList(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*주류 물류센터_출고실적 - 디테일 엑셀다운로드*/
	public List<Map<String, Object>> downloadExcelLiquorWrsDetailList(String naBzplc, String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR, String naTrplC, String naWrsC) {
		try {
			return centerDao.downloadExcelLiquorWrsDetailList(naBzplc,phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR,naTrplC,naWrsC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 물류센터_출고실적 - 전표 상품 상세*/
	public List<Map<String, Object>> downloadExcelDetail(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String[] TRPL_C_ARR, String naTrplC) {
		try {
			return centerDao.downloadExcelDetail(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,TRPL_C_ARR,naTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*주류 물류센터_출고실적 - 전표 상품 상세*/
	public List<Map<String, Object>> downloadExcelLiquorDetail(String phdNaBzplc,
			String econStdvDsc, String dateCode, String calFrom, String calTo,
			String phdDlrDsc, String prgrC, String[] TRPL_C_ARR, String naTrplC) {
		try {
			return centerDao.downloadExcelLiquorDetail(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,TRPL_C_ARR,naTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getWrsMasterTotal(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR) {
		try {
			return centerDao.getWrsMasterTotal(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*주류 물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getLiquorWrsMasterTotal(String phdNaBzplc, String econStdvDsc,
			String dateCode, String calFrom, String calTo, String phdDlrDsc,
			String prgrC, String NA_TR_DSC, String[] TRPL_C_ARR) {
		try {
			return centerDao.getLiquorWrsMasterTotal(phdNaBzplc,econStdvDsc,dateCode,calFrom,calTo,phdDlrDsc,prgrC,NA_TR_DSC,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 제주물류센터 출고실적 마스터 페이지 추가*/
	public int getOutJejuWrsCount(String phdNaBzplc, String dateCode, String calFrom, String phdDlrDsc, String NA_TR_DSC) {
		try {
			return centerDao.getOutJejuWrsCount(phdNaBzplc, dateCode, calFrom, phdDlrDsc, NA_TR_DSC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 제주물류센터_출고실적*/
	public List<Map<String, Object>> retrieveJejuWrsMasterList(String phdNaBzplc, String dateCode, String calFrom, String phdDlrDsc, String NA_TR_DSC, int start, int limit) {
		try {
			return centerDao.retrieveJejuWrsMasterList(phdNaBzplc, dateCode, calFrom, phdDlrDsc, NA_TR_DSC, start, limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 제주물류센터_출고실적 마스터 합계*/
	public Map<String, Object> getJejuWrsMasterTotal(String phdNaBzplc, String dateCode, String calFrom, String phdDlrDsc, String NA_TR_DSC) {
		try {
			return centerDao.getJejuWrsMasterTotal(phdNaBzplc, dateCode, calFrom, phdDlrDsc, NA_TR_DSC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
