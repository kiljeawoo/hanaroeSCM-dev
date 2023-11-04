package com.nh.escm.pda.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pda.dao.PdaInspectionDao;

/**
 * Copyright(c) eSum Technologies., Inc. All rights reserved.
 */
public class PdaInspectionService extends AbstractService {
	
	@Autowired
	private PdaInspectionDao pdaInsDao;
	
	/** 검수내역 조회 페이징 */
	public List<Map<String, Object>> mainSelectList(String from_date, String to_date, String na_slpno, String byng_ref_dsc, String odr_dt, 
			String tr_bass_no, String cnr_sts_dsc, String user_id, String gln, String na_bzplc, int start, int end) {
		
		return pdaInsDao.mainSelectList(from_date, to_date, na_slpno, byng_ref_dsc, odr_dt, tr_bass_no, cnr_sts_dsc,
				user_id, gln, na_bzplc, start, end);
	}
	
	public int getMainCount(String from_date, String to_date, String na_slpno, String byng_ref_dsc, String odr_dt,
			String tr_bass_no, String cnr_sts_dsc, String user_id, String gln, String na_bzplc) {
		return pdaInsDao.getMainCount(from_date, to_date, na_slpno, byng_ref_dsc, odr_dt, tr_bass_no, cnr_sts_dsc, user_id, gln, na_bzplc);
	}
	
	/** 검수내역 상세 헤더 정보 */
	public Map<String, Object> selectMaster(String na_bzplc, String na_team_c, String slp_dt, String na_slpno) {
	    return pdaInsDao.selectMaster(na_bzplc, na_team_c, slp_dt, na_slpno);
	}

	/** 검수내역 상세 리스트 */
	public List<Map<String, Object>> selectDetailList(String na_bzplc, String na_team_c, String slp_dt, String na_slpno) {
		return pdaInsDao.selectDetailList(na_bzplc, na_team_c, slp_dt, na_slpno);
	}

	/** 검수수량 변경 */
	public int updatePdaQty(String qty, String na_bzplc, String na_team_c, String slp_dt, String na_slpno, String slp_sqno) {
		try {
			return pdaInsDao.updatePdaQty(qty, na_bzplc, na_team_c, slp_dt, na_slpno, slp_sqno);
		} catch  (AppetizerException e){
			throw new AppetizerException(e);
		}
	}

	/** 검수상태 변경 (확인취소/완료취소) */
	public int updatePdaStatus(String na_bzplc, String na_team_c, String slp_dt, String na_slpno, String status, String user_id, String gln,
			String cnr_cmpl_sign_fn, String rmkCntn, String mode) {
		try {
			return pdaInsDao.updatePdaStatus(na_bzplc, na_team_c, slp_dt, na_slpno, status, user_id, gln, cnr_cmpl_sign_fn, rmkCntn, mode);
		} catch (AppetizerException e) {
			throw new AppetizerException(e);
		}
	}
	
	public void updateDetail(String na_bzplc, String na_team_c, String slp_dt, String na_slpno, DataSet pda_detail, String status, String user_id, String gln) {
		Map<String, Object> mst = selectMaster(na_bzplc, na_team_c, slp_dt, na_slpno);
		if (mst == null || mst.isEmpty()) {
			throw new AppetizerException("No Data From master");
		}
		
		String cnr_cmpl_sign_fn = MapUtils.getString(mst, "CNR_CMPL_SIGN_FN"); // 검수완료서명파일 
		String buypl_na_trpl_c = MapUtils.getString(mst, "BUYPL_NA_TRPL_C"); //매입처거래처코드
		String preStatus = MapUtils.getString(mst, "CNR_STS_DSC");
		String rmkCntn = MapUtils.getString(mst, "RMK_CNTN");
		String mode = "";
		
		if ("1".equals(preStatus) && "2".equals(status)) { // 미확정--> 확정
			mode = "SH"; /** 검수확인 */
			for (int i = 0; i < pda_detail.getRowCount(); i++) {
				// 검수 상세 수량 업데이트
				updatePdaQty(pda_detail.getString(i, "BYNG_QT"), na_bzplc, na_team_c, slp_dt, na_slpno, pda_detail.getString(i, "SLP_SQNO"));
//				updatePdaStatus(na_bzplc, na_team_c, slp_dt, na_slpno, status, user_id, gln, cnr_cmpl_sign_fn, rmkCntn, mode);
			}
//			updatePdaStatus(na_bzplc, na_team_c, slp_dt, na_slpno, status, user_id, gln, cnr_cmpl_sign_fn, rmkCntn, mode);
		} else if ("2".equals(preStatus) && "3".equals(status)) { // 완료 -> 완료
			mode = "SY"; /** 검수완료 */
			if (StringUtils.isEmpty(cnr_cmpl_sign_fn)) {
				//검서완료 서명이미지 파일명만 DB 갱신. (2016.11.09)
				//매입처_일자_마트_마트팀코드_검수전표번호.bmp
				cnr_cmpl_sign_fn = buypl_na_trpl_c + "_" + slp_dt + "_" + na_bzplc + "_" + na_team_c + "_" + na_slpno + ".bmp";
				logger.info("create new file name: CNR_CMPL_SIGN_FN >> " + cnr_cmpl_sign_fn);
			}
//			updatePdaStatus(na_bzplc, na_team_c, slp_dt, na_slpno, status, user_id, gln, cnr_cmpl_sign_fn, rmkCntn, mode);
		} else if ("3".equals(preStatus) && "2".equals(status)) { // 완료 -> 확정
			mode = "YC"; /** 완료취소 */ 
//			updatePdaStatus(na_bzplc, na_team_c, slp_dt, na_slpno, status, user_id, gln, cnr_cmpl_sign_fn, rmkCntn, mode);
		} else if ("2".equals(preStatus) && "1".equals(status)) {
			mode = "HC"; /** 확인취소 */
//			updatePdaStatus(na_bzplc, na_team_c, slp_dt, na_slpno, status, user_id, gln, cnr_cmpl_sign_fn, rmkCntn, mode);
		} else {
			throw new AppetizerException("허용되지 않는 상태 변경");
		}
		
		// 검수 헤더 상태 업데이트
		updatePdaStatus(na_bzplc, na_team_c, slp_dt, na_slpno, status, user_id, gln, cnr_cmpl_sign_fn, rmkCntn, mode);

		if (StringUtils.isEmpty(preStatus) || !StringUtils.isNumeric(preStatus)) {
			throw new AppetizerException("...");
		}
	}
	
}
