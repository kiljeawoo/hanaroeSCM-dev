package com.nh.escm.pt.blbd.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pt.blbd.dao.NacfOfancDAO;
import com.nh.escm.pt.blbd.vo.NacfOfancApdflVO;
import com.nh.escm.pt.blbd.vo.NacfOfancVO;

@Service
public class NacfOfancService extends AbstractService {
	@Autowired
	private NacfOfancDAO nacfOfancDAO;
	
	public List<Map<String, Object>> retrieveNacfOfancList(DataSet dsCondition, int start, int end) {//getBbsList(String title)
		try {
			return nacfOfancDAO.retrieveNacfOfancList(dsCondition, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<NacfOfancVO> retrieveNacfOfanc(String noticeSeq) {
		try {
			return nacfOfancDAO.retrieveNacfOfanc(noticeSeq);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<NacfOfancVO> retrieveNacfOfancMainList() {
		try {
			return nacfOfancDAO.retrieveNacfOfancMainList();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<NacfOfancApdflVO> retrieveOfancApdflList(String noticeSeq) {
		try {
			return nacfOfancDAO.retrieveOfancApdflList(noticeSeq);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int retrieveNacfOfancListCount(DataSet dsCondition) {
		try {
			int rowCnt = nacfOfancDAO.retrieveNacfOfancListCount(dsCondition);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveNacfOfancForOz(String noticeSeq) {
		try {
			return nacfOfancDAO.retrieveNacfOfancForOz(noticeSeq);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

}
