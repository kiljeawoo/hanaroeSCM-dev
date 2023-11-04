package com.nh.escm.pt.comn.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.pt.comn.vo.BuyerInqVO;

public class BuyerInqDAO extends AbstractDao {
	
	public List<BuyerInqVO> retrieveBuyerInqList(String SHRT_BZPLNM, String BUYER_NM, String CHRG_BSNNM, int start, int end) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SHRT_BZPLNM", escape(SHRT_BZPLNM)); // escape for LIKE
		param.put("BUYER_NM", escape(BUYER_NM)); // escape for LIKE
		param.put("CHRG_BSNNM", escape(CHRG_BSNNM)); // escape for LIKE
		param.put("start", start);
		param.put("end", end);
		
		return getSqlSession().selectList("buyerInqDAO.retrieveBuyerInqList", param);
	}
	
	public int retrieveBuyerInqCount(String SHRT_BZPLNM, String BUYER_NM, String CHRG_BSNNM) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SHRT_BZPLNM", escape(SHRT_BZPLNM)); // escape for LIKE
		param.put("BUYER_NM", escape(BUYER_NM)); // escape for LIKE
		param.put("CHRG_BSNNM", escape(CHRG_BSNNM)); // escape for LIKE
		
		return getSqlSession().selectOne("buyerInqDAO.retrieveBuyerInqCount", param);
	}
	
}
