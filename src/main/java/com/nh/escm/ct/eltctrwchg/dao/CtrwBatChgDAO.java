package com.nh.escm.ct.eltctrwchg.dao;

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
import com.nh.escm.ct.eltctrwchg.vo.CtrwBatChgVO;

public class CtrwBatChgDAO extends AbstractDao {
	
	
	/* 전자계약서관리 수정 */
	public int updateEltCtrwAmn(CtrwBatChgVO cbcVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEltCtrwAmn : " + cbcVo.toString());
		}
		return 	getSqlSession().update("ctrwBatChgDAO.updateEltCtrwAmn",cbcVo);
	}
	
	
	/* 메인 계약서 상세 */
	public int updateEltCtrwDtl(CtrwBatChgVO cbcVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEltCtrwDtl : " + cbcVo.toString());
		}
		return 	getSqlSession().update("ctrwBatChgDAO.updateEltCtrwDtl",cbcVo);
	}
	
	/* 기타 계약서 상세 */
	public int updateAddEltCtrwDtl(CtrwBatChgVO cbcVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateAddEltCtrwDtl : " + cbcVo.toString());
		}
		return 	getSqlSession().update("ctrwBatChgDAO.updateAddEltCtrwDtl",cbcVo);
	}
	
	/* 약정서  상세 */
	public int updatePmiwDtl(CtrwBatChgVO cbcVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updatePmiwDtl : " + cbcVo.toString());
		}
		return 	getSqlSession().update("ctrwBatChgDAO.updatePmiwDtl",cbcVo);
	}
	
	/* 특약서  상세 */
	public int updateSctrwDtl(CtrwBatChgVO cbcVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateSctrwDtl : " + cbcVo.toString());
		}
		return 	getSqlSession().update("ctrwBatChgDAO.updateSctrwDtl",cbcVo);
	}
	
	/*기타 상세 테이블*/
	public int updateEtcEltCtrw(CtrwBatChgVO cbcVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEtcEltCtrw : " + cbcVo.toString());
		}
		return 	getSqlSession().update("ctrwBatChgDAO.updateEtcEltCtrw",cbcVo);
	}
	
		
	
	public List<Map<String, Object>> retrieveStyVerList(String CTRW_KDC) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		logger.debug("CTRW_KDC  sss :  "   +CTRW_KDC);
		param.put("CTRW_KDC", CTRW_KDC);		
		return getSqlSession().selectList("ctrwBatChgDAO.retrieveStyVerList",param);
	}
	
	public List<Map<String, Object>> retrieveCntnList(String CTRW_KDC) {
		Map<String, Object> param = new HashMap<String, Object>();
		logger.debug("CTRW_KDC   :  "   +CTRW_KDC);
		param.put("CTRW_KDC", CTRW_KDC);		
		return getSqlSession().selectList("ctrwBatChgDAO.retrieveCntnList",param);
	}
	
	public List<Map<String, Object>> retrieveCtrwBatChgList(String CTRW_KDC,String CTRW_STY_VER) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("CTRW_KDC", CTRW_KDC);		
		param.put("CTRW_STY_VER", CTRW_STY_VER);
		return getSqlSession().selectList("ctrwBatChgDAO.retrieveCtrwBatChgList",param);
	}
	
	
	
	
	
	
	public List<Map<String, Object>> retrieveCodelList() {
		Map<String, Object> param = new HashMap<String, Object>();

		return getSqlSession().selectList("ctrwStylDAO.retrieveCodelList",param);
	}
	
	public int updateCtrwBatChg(String CTRW_KDC, String CTRW_STY_VER, String UYN) {		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("CTRW_KDC",     CTRW_KDC);
	    param.put("CTRW_STY_VER",     CTRW_STY_VER);
		param.put("UYN",    UYN);
			
	if(logger.isDebugEnabled()){
		logger.debug(">>> updateCtrwBatChg params : " + param);
	}
	return getSqlSession().update("ctrwStylDAO.updateCtrwBatChg", param);
}
	
	
	
	
}
