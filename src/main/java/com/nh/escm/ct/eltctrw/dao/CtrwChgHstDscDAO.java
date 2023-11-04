package com.nh.escm.ct.eltctrw.dao;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;

public class CtrwChgHstDscDAO extends AbstractDao {
	
	
	public List<Map<String, Object>> retrieveCtrwChgHstDscList(String ELT_CTRW_NO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);

		return getSqlSession().selectList("ctrwChgHstDscDAO.retrieveCtrwChgHstDscList", param);
	}
	

}
