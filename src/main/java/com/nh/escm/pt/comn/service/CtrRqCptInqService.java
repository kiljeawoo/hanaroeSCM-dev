package com.nh.escm.pt.comn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.comn.dao.CtrRqCptInqDAO;
import com.nh.escm.pt.comn.vo.CtrRqCptInqVO;

public class CtrRqCptInqService extends AbstractService {
	
	@Autowired
	private CtrRqCptInqDAO ctrRqCptInqDAO;
	
	public List<CtrRqCptInqVO> retrieveCtrRqCptInq(String MAE_BZNO){
		try {
			List<CtrRqCptInqVO> rcList =  ctrRqCptInqDAO.retrieveCtrRqCptInq(MAE_BZNO);
			return rcList;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	


}
