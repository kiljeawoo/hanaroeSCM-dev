package com.nh.escm.bt.rqBrk.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.bt.rqBrk.vo.RqBrkVO;

public class RqBrkDAO extends AbstractDao {
	
	public boolean existsCsltRq(String MAE_BZNO, String EDT_CHRRNM, String CHRR_MPNO) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MAE_BZNO", MAE_BZNO);
		param.put("EDT_CHRRNM", EDT_CHRRNM);
		param.put("CHRR_MPNO", CHRR_MPNO);
		
		return (Integer) getSqlSession().selectOne("rqBrkDAO.existsCsltRq", param) > 0;
	}
	
	public boolean existsCsltRqInOneYear(String MAE_BZNO) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MAE_BZNO", MAE_BZNO);

		return (Integer) getSqlSession().selectOne("rqBrkDAO.existsCsltRqInOneYear", param) > 0;
	}
	
	public Map<String, Object> rejectedInOneYear(String bzno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("bzno", bzno);

		return  getSqlSession().selectOne("rqBrkDAO.rejectedInOneYear", param) ;
	}
	
	public List<RqBrkVO> retrieveRqBrkList(String MAE_BZNO, String EDT_CHRRNM, String CHRR_MPNO, String CAL_FROM,
			String CAL_TO, String CBO_STS, String EDT_BUYER, String CBO_DSC) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MAE_BZNO", MAE_BZNO);
		param.put("EDT_CHRRNM", EDT_CHRRNM);
		param.put("CHRR_MPNO", CHRR_MPNO);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("CBO_STS", CBO_STS);
		param.put("EDT_BUYER", EDT_BUYER);
		param.put("CBO_DSC", CBO_DSC);
		
		return getSqlSession().selectList("rqBrkDAO.retrieveRqBrkList", param);
	}


	
}
