package com.nh.escm.pt.comn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pt.comn.vo.CtrRqCptInqVO;

public class CtrRqCptInqDAO extends AbstractDao {
	
	public List<CtrRqCptInqVO> retrieveCtrRqCptInq(String MAE_BZNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MAE_BZNO", MAE_BZNO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveCtrRqCptInq params : " + param);
		}
		return getSqlSession().selectList("ctrRqCptInqDAO.retrieveCtrRqCptInq", param);
	}
	
}


