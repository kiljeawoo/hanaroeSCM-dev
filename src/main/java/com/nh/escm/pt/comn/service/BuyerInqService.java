package com.nh.escm.pt.comn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.service.AbstractService;
import com.nh.escm.pt.comn.dao.BuyerInqDAO;
import com.nh.escm.pt.comn.vo.BuyerInqVO;

public class BuyerInqService extends AbstractService {
	
	@Autowired
	private BuyerInqDAO buyerInqDAO;
	
	/**
	 * 바이어 조회
	 * 
	 * @param SHRT_BZPLNM
	 * @param BUYER_NM
	 * @param CHRG_BSNNM
	 * @param start
	 * @param end
	 * @return
	 */
	public List<BuyerInqVO> retrieveBuyerInqList(String SHRT_BZPLNM, String BUYER_NM, String CHRG_BSNNM, int start, int end) {
		
		return buyerInqDAO.retrieveBuyerInqList(SHRT_BZPLNM, BUYER_NM, CHRG_BSNNM, start, end);
	}
	
	public int retrieveBuyerInqCount(String SHRT_BZPLNM, String BUYER_NM, String CHRG_BSNNM) {
		
		return buyerInqDAO.retrieveBuyerInqCount(SHRT_BZPLNM, BUYER_NM, CHRG_BSNNM);
	}
	
}
