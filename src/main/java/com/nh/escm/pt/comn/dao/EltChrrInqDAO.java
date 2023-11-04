package com.nh.escm.pt.comn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pt.comn.vo.EltChrrInqVO;

public class EltChrrInqDAO extends AbstractDao {
	
	public List<EltChrrInqVO> retrieveEltChrrInq(String NA_TRPL_C) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		
		return getSqlSession().selectList("eltChrrInqDAO.retrieveEltChrrInq", param);
	}
	
	

}
