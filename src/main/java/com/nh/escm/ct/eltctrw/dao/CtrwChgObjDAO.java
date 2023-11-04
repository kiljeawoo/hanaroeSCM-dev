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
import com.nh.escm.ct.eltctrw.vo.AnwEltCtrwDrupVO;

public class CtrwChgObjDAO extends AbstractDao {
	
	
	public List<Map<String, Object>> retrieveCtrwChgObjList(String CBO_CONTDAY , String CAL_FROM , String CAL_TO , String CTRW_DRUP_DT , String MN_CTRW_KD , String NA_TRPL_C,String MTALNM,String CTRW_IDVD_CHG_CHK,String BUYER_NA_TRPL_C,String BUYER_ENO, String BUYER_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("CBO_CONTDAY", CBO_CONTDAY);
		param.put("CAL_FROM", CAL_FROM);
		param.put("CAL_TO", CAL_TO);
		param.put("CTRW_DRUP_DT", CTRW_DRUP_DT);
		param.put("MN_CTRW_KD", MN_CTRW_KD);
		param.put("NA_TRPL_C", NA_TRPL_C);
		param.put("MTALNM", MTALNM);
		param.put("BUYER_ENO", BUYER_ENO);
	    param.put("BUYER_DSC", BUYER_DSC);	

		if(logger.isDebugEnabled()){
		logger.debug(">>> retrieveCtrwChgObjList params : " + param);
	}
		
      if("TRUE".equals(CTRW_IDVD_CHG_CHK)){
    	  
    	  param.put("BUYER_NA_TRPL_C", BUYER_NA_TRPL_C);
    	  
    	  //개별 변경
    	  return getSqlSession().selectList("ctrwChgObjDAO.retrieveCtrwChgIdvdList", param);
      }else{
    	  //일관 변경
    	  return getSqlSession().selectList("ctrwChgObjDAO.retrieveCtrwChgObjList", param);
      }
      
      
	}
	
	//계약서 첨부, 계약서 문구 일관 변경 관련값 세팅
	public int updateEltCtrwAmn(AnwEltCtrwDrupVO aecdVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> AnwEltCtrwDrupVO : " + aecdVo.toString());
		}
		return 	getSqlSession().update("ctrwChgObjDAO.updateEltCtrwAmn",aecdVo);
	}	

}
