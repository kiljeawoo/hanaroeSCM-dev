package com.nh.escm.ct.eltctrw.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.ct.eltctrw.dao.EltAuthDAO;
import com.nh.escm.ct.eltctrw.vo.EltAuthVO;

@Service
public class EltAuthService extends AbstractService {

	@Autowired
	private EltAuthDAO eltAuthDAO;

	/**
	 * 전자계약 관련 보유권한 조회
	 */
	public List<EltAuthVO> checkEltAuthor(String BUYER_ENO, String USR_TPC) {
		try {
			return eltAuthDAO.checkEltAuthor(BUYER_ENO, USR_TPC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveEltctrwBuyerAuthDSList() {
		try {
			return eltAuthDAO.retrieveEltctrwBuyerAuthDSList();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveEltctrwBuyerAuthList(String proChk, String edtNm, String fvEltAuthCd) {
		try {
			return eltAuthDAO.retrieveEltctrwBuyerAuthList(proChk, edtNm, fvEltAuthCd);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveEltctrwAuthBzplcList() {
		try {
			return eltAuthDAO.retrieveEltctrwAuthBzplcList();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int insertEltctrwBuyerAuth(String mbId, String eltAuthDsc, String usrId) {
		try {
			return eltAuthDAO.insertEltctrwBuyerAuth(mbId, eltAuthDsc, usrId);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int deleteEltctrwBuyerAuth(String mbId) {
		try {
			return eltAuthDAO.deleteEltctrwBuyerAuth(mbId);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveEltctrwBizNoList(String bzNo1, String bzNo2, String bzNo3) {
		try {
			return eltAuthDAO.retrieveEltctrwBizNoList(bzNo1, bzNo2, bzNo3);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveEltctrwAuthList(String bizNumeber, String clntim, String chiefEno,
			String gln) {
		try {
			return eltAuthDAO.retrieveEltctrwAuthList(bizNumeber, clntim, chiefEno, gln);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int insertEltctrwAuth(String bzno, String clntnm, String chiefEno, String usrId) {
		try {
			return eltAuthDAO.insertEltctrwAuth(bzno, clntnm, chiefEno, usrId);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int updateEltctrwAuth(String bzno, String clntnm, String chiefEno, String usrId) {
		try {
			return eltAuthDAO.updateEltctrwAuth(bzno, clntnm, chiefEno, usrId);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int deleteEltctrwAuth(String bzno) {
		try {
			return eltAuthDAO.deleteEltctrwAuth(bzno);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
}