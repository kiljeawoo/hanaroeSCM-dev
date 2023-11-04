package com.nh.escm.pt.comn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.exception.AppetizerException;
import com.nh.escm.pt.comn.vo.AdrInqVO;

public class AdrInqDAO extends AbstractDao {

	public List<AdrInqVO> retrieveAdrInqList(String EDT_ZIP, String CBO_COMP, String PROVNM, String EDT_ZIP2, String EDT_ZIP3, int start, int end) {
		try {
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("EDT_ZIP", EDT_ZIP);
			param.put("CBO_COMP", CBO_COMP);
			param.put("PROVNM", PROVNM);
			param.put("EDT_ZIP2", EDT_ZIP2);
			param.put("EDT_ZIP3", EDT_ZIP3);
			param.put("start", start);
			param.put("end", end);
			return getSqlSession().selectList("adrInqDAO.retrieveAdrInqList", param);
		} 
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

	public int retrieveAdrInqCount(String EDT_ZIP, String CBO_COMP, String PROVNM, String EDT_ZIP2, String EDT_ZIP3) {
		try {
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("EDT_ZIP", EDT_ZIP);
			param.put("CBO_COMP", CBO_COMP);
			param.put("PROVNM", PROVNM);
			param.put("EDT_ZIP2", EDT_ZIP2);
			param.put("EDT_ZIP3", EDT_ZIP3);

			if (logger.isDebugEnabled()) {
				logger.debug("***************************    >>> retrieveAdrInqCount params : " + param);
			}
			return getSqlSession().selectOne("adrInqDAO.retrieveAdrInqCount", param);
		} 
		catch(AppetizerException e)
		{
			throw new AppetizerException(e);
		}
	}

}