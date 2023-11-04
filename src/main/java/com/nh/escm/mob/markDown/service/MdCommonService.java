package com.nh.escm.mob.markDown.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.service.AbstractService;
import com.nh.escm.mob.markDown.dao.MdCommonDao;

/**
 * 화면ID : MOB_MD_SC_1113
 * 화면설명 : 가격할인 공통 서비스
 */

public class MdCommonService  extends AbstractService{
	
	@Autowired
	private MdCommonDao mdCommonDao;

	public List<Map<String, Object>> selectMdUsrSigList(String md_id) {

		return mdCommonDao.selectMdUsrSigList(md_id);
	}

	
	/*
	 * 서명란 정보 입력
	 */

	public int insertUsrSig(String mb_id, String sig_id, String sig_ord, String title) {
		
		return mdCommonDao.insertUsrSig(mb_id, sig_id, sig_ord, title);
		
	}


	public int updateUsrSig(String mb_id, String sig_id, String sig_ord, String title) {
		
		return mdCommonDao.updateUsrSig(mb_id, sig_id, sig_ord, title);
		
	}


	public int deleteUsrSig(String mb_id, String sig_id, String sig_ord,
			String title) {
		return mdCommonDao.deleteUsrSig(mb_id, sig_id, sig_ord, title);
	}

	
}
