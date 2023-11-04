package com.nh.escm.ct.eltctrwamn.dao;

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
import com.nh.escm.ct.eltctrwamn.vo.EssDcmAmnVO;

public class EssDcmAmnDAO extends AbstractDao {
	

	
	/* 서류양식관리 저장 */
	public int insertEssDcmAmn(EssDcmAmnVO medaVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertEssDcmAmn : " + medaVo.toString());
		}
		return 	getSqlSession().insert("essDcmAmnDAO.insertEssDcmAmn",medaVo);
	}
	
		
	
	/* 서류양식관리 수정 */
	public int updateEssDcmAmn(EssDcmAmnVO medaVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEssDcmAmn : " + medaVo.toString());
		}
		return 	getSqlSession().update("essDcmAmnDAO.updateEssDcmAmn",medaVo);
	}
	
	
	//서류양식관리 삭제
	public int deleteEssDcmAmn(EssDcmAmnVO medaVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteEssDcmAmn  : " + medaVo.toString());
		}
		return 	getSqlSession().delete("essDcmAmnDAO.deleteEssDcmAmn",medaVo);
	}

	
	public List<Map<String, Object>> retrieveEssDcmAmnList(String MN_CTRW_KDC,String BUYER_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		logger.debug("MN_CTRW_KDC   :  "   +MN_CTRW_KDC);
		logger.debug("BUYER_DSC   :  " + BUYER_DSC);
	    param.put("MN_CTRW_KDC", MN_CTRW_KDC);
	    param.put("BUYER_DSC", BUYER_DSC);
	    
		return getSqlSession().selectList("essDcmAmnDAO.retrieveEssDcmAmnList",param);
	}
	
	
}
