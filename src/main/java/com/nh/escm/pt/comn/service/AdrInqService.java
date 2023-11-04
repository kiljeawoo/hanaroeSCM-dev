package com.nh.escm.pt.comn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.comn.dao.AdrInqDAO;
import com.nh.escm.pt.comn.vo.AdrInqVO;

public class AdrInqService extends AbstractService {

	@Autowired
	private AdrInqDAO adrInqDAO;

	public List<AdrInqVO> retrieveAdrInqList(String EDT_ZIP, String CBO_COMP, String PROVNM, String EDT_ZIP2, String EDT_ZIP3, int start, int end) {
		try {
			return adrInqDAO.retrieveAdrInqList(EDT_ZIP, CBO_COMP, PROVNM, EDT_ZIP2, EDT_ZIP3, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int retrieveAdrInqCount(String EDT_ZIP, String CBO_COMP, String PROVNM, String EDT_ZIP2, String EDT_ZIP3) {
		try {
			int rowCnt = adrInqDAO.retrieveAdrInqCount(EDT_ZIP, CBO_COMP, PROVNM, EDT_ZIP2, EDT_ZIP3);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

}
