package com.nh.escm.tx.byngsltttbl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.tx.byngsltttbl.dao.SlTttblDAO;
import com.nh.escm.tx.byngsltttbl.vo.SlTttblVO;
import com.nh.escm.tx.doccstd.dao.SlTxbilDscDAO;
import com.nh.escm.tx.doccstd.vo.SlTxbilDscVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilVO;

@Service
public class SlTttblService extends AbstractService {

	@Autowired
	
	private SlTttblDAO slTttblDao;
	
	public List<SlTttblVO> retrieveByngsltttbl(DataSet dsCondition) {
		try {
			return slTttblDao.retrieveByngsltttbl(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<SlTttblVO> retrieveByngsltttbl2(DataSet dsCondition) {
		try {
			return slTttblDao.retrieveByngsltttbl2(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<SlTttblVO> retrieveByngsltttbl3(DataSet dsCondition) {
		try {
			return slTttblDao.retrieveByngsltttbl3(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<SlTttblVO> retrieveByngsltttblAdmin(DataSet dsCondition) {
		try {
			return slTttblDao.retrieveByngsltttbl(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<SlTttblVO> retrieveByngsltttblAdmin2(DataSet dsCondition) {
		try {
			return slTttblDao.retrieveByngsltttbl2(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<SlTttblVO> retrieveByngsltttblAdmin3(DataSet dsCondition) {
		try {
			return slTttblDao.retrieveByngsltttbl3(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

}
