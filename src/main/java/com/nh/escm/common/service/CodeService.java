package com.nh.escm.common.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.common.dao.CodeDao;
import com.nh.escm.common.vo.TbCmBzplVO;

@Service
public class CodeService extends AbstractService {

	@Autowired
	private CodeDao codeDao;
	
	//공통코드를 가져오는 서비스
	public List<Map<String, Object>> getCodeList(String codeKey, String where) {
		try {
			return codeDao.getCodeList(codeKey, where);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<TbCmBzplVO> getNABizPlace(String SPLR_NA_TRPL_C, String searchType, String delYn) {
		try {
			return codeDao.getNABizPlace(SPLR_NA_TRPL_C, searchType, delYn);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 권한사업장 조회
	 * 
	 * @param NA_TRPL_C		거래처코드
	 * @param NA_MBCO_DSC	본지사구분 (1: 본사, 2: 지사, 3: 내부직영점, 4: 외부직영점, 5: 위탁대리점)
	 * @return
	 */
	public List<Map<String, Object>> getRightsBizPlace(String NA_TRPL_C, String NA_MBCO_DSC) {
		try {
			return codeDao.getRightsBizPlace(NA_TRPL_C, NA_MBCO_DSC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 주류공급업체의 권한사업장 조회
	 * 
	 * @param NA_TRPL_C		거래처코드
	 * @param NA_MBCO_DSC	본지사구분 (1: 본사, 2: 지사, 3: 내부직영점, 4: 외부직영점, 5: 위탁대리점)
	 * @return
	 */
	public List<Map<String, Object>> getRightsBizPlaceLiq(String NA_TRPL_C, String NA_MBCO_DSC) {
		try {
			return codeDao.getRightsBizPlaceLiq(NA_TRPL_C, NA_MBCO_DSC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> getPortalCodeList(String codeKey) {
		try {
			return codeDao.getPortalCodeList(codeKey);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public List<Map<String, Object>> getRgnCode() {
		try {
			return codeDao.getRgnCode();
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public List<Map<String, Object>> getRgnCodeD(String simpC) {
		try {
			return codeDao.getRgnCodeD(simpC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public List<Map<String, Object>> getCIFList() {
		try {
			return codeDao.getCIFList();
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, String>> getMenuVersion() {
	
		return codeDao.getMenuVersion();
	}
	
	public boolean setMenuVersion(String VERSION) {
		return codeDao.setMenuVersion(VERSION);
	}
}
