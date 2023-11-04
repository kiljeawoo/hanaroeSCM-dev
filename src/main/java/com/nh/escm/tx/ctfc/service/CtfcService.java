package com.nh.escm.tx.ctfc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.tx.ctfc.dao.CtfcDAO;
import com.nh.escm.tx.ctfc.vo.CtfcVO;
import com.nh.escm.tx.doccstd.dao.SlTxbilDscDAO;
import com.nh.escm.tx.doccstd.vo.SlTxbilDscVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilVO;

@Service
public class CtfcService extends AbstractService {

	@Autowired	
	private CtfcDAO ctfcDao;
	
	public List<CtfcVO> retrieveCtfc(String NA_BZPLC) {
		try {
			return ctfcDao.retrieveCtfc(NA_BZPLC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int insertCtfc(DataSet dsCtfc) {
		try {
			return ctfcDao.insertCtfc(dsCtfc);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

}
