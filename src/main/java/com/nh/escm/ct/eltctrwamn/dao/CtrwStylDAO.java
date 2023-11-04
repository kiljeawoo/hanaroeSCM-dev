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
import com.nh.escm.ct.eltctrwamn.vo.EtcEltStylAmnVO;

public class CtrwStylDAO extends AbstractDao {
	

	
	/* 전자계약서관리 */
	public int insertCtrwStyl(EtcEltStylAmnVO eesaVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertCtrwStyl : " + eesaVo.toString());
		}
		return 	getSqlSession().insert("ctrwStylDAO.insertCtrwStyl",eesaVo);
	}
	
		
	
	/* 전자계약서관리 수정 */
	public int updateCtrwStyl(EtcEltStylAmnVO eesaVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateCtrwStyl : " + eesaVo.toString());
		}
		return 	getSqlSession().update("ctrwStylDAO.updateCtrwStyl",eesaVo);
	}
	
	//전자계약서 삭제
	public int deleteCtrwStyl(String CTRW_KDC,String CTRW_STY_VER){
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CTRW_KDC", CTRW_KDC);		
		param.put("CTRW_STY_VER", CTRW_STY_VER);

		return 	getSqlSession().delete("ctrwStylDAO.deleteCtrwStyl",param);
	}	
	
	
	
	
	
	public List<Map<String, Object>> retrieveCtrwStylList(String CTRW_KDC, String CTRW_STY_VER,String BUYER_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		logger.debug("CTRW_KDC   :  "   +CTRW_KDC);
		logger.debug("CTRW_STY_VER   :  "   +CTRW_STY_VER);
		logger.debug("BUYER_DSC   :  " + BUYER_DSC);
	    param.put("CTRW_KDC", CTRW_KDC);
	    param.put("CTRW_STY_VER", CTRW_STY_VER);
	    param.put("BUYER_DSC", BUYER_DSC);
		return getSqlSession().selectList("ctrwStylDAO.retrieveCtrwStylList",param);
	}
	
	public List<Map<String, Object>> retrieveCtrwStylDscList(String CTRW_KDC, String CTRW_STY_VER) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		logger.debug("CTRW_KDC   :  "   +CTRW_KDC);
		logger.debug("CTRW_STY_VER   :  "   +CTRW_STY_VER);
		param.put("CTRW_KDC", CTRW_KDC);		
		param.put("CTRW_STY_VER", CTRW_STY_VER);
		return getSqlSession().selectList("ctrwStylDAO.retrieveCtrwStylDscList",param);
	}
	
	public List<Map<String, Object>> retrieveCodelList() {
		Map<String, Object> param = new HashMap<String, Object>();

		return getSqlSession().selectList("ctrwStylDAO.retrieveCodelList",param);
	}
	
	public int updateCtrwStyl(String CTRW_KDC, String CTRW_STY_VER, String UYN) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("CTRW_KDC",     CTRW_KDC);
	    param.put("CTRW_STY_VER",     CTRW_STY_VER);
		param.put("UYN",    UYN);
			
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateCtrwStyl params : " + param);
		}
		return getSqlSession().update("ctrwStylDAO.updateCtrwStyl", param);
	}
	
	
	
	
}
