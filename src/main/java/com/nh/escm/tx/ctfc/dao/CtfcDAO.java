package com.nh.escm.tx.ctfc.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.tx.ctfc.vo.CtfcVO;

public class CtfcDAO extends AbstractDao {

	public List<CtfcVO> retrieveCtfc(String NA_BZPLC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", "8761389544234");
		return getSqlSession().selectList("ctfcDAO.retrieveCtfc", param);
	}

	public int insertCtfc(DataSet dsCtfc) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_BZPLC", dsCtfc.getString(0, "NA_BZPLC"));
		param.put("NA_BZPLNM", dsCtfc.getString(0, "NA_BZPLNM"));
		param.put("NA_TEMNM", dsCtfc.getString(0, "NA_TEMNM"));
		param.put("MAIN_CHRRNM", dsCtfc.getString(0, "MAIN_CHRRNM"));
		param.put("MAIN_CHRR_MPNO", dsCtfc.getString(0, "MAIN_CHRR_MPNO"));
		param.put("SUB_CHRRNM", dsCtfc.getString(0, "SUB_CHRRNM"));
		param.put("SUB_CHRR_MPNO", dsCtfc.getString(0, "SUB_CHRR_MPNO"));
		param.put("SG_ATOA_FL_TMPNM", dsCtfc.getString(0, "SG_ATOA_FL_TMPNM"));
		param.put("SG_ATOA_FLNM", dsCtfc.getString(0, "SG_ATOA_FLNM"));
		param.put("SG_PSN_KY_FL_TMPNM", dsCtfc.getString(0, "SG_PSN_KY_FL_TMPNM"));
		param.put("SG_PSN_KY_FLNM", dsCtfc.getString(0, "SG_PSN_KY_FLNM"));
		param.put("PWIZE_ATOA_FL_TMPNM", dsCtfc.getString(0, "PWIZE_ATOA_FL_TMPNM"));
		param.put("PWIZE_ATOA_FLNM", dsCtfc.getString(0, "PWIZE_ATOA_FLNM"));
		param.put("PWIZE_PSN_KY_FL_TMPNM", dsCtfc.getString(0, "PWIZE_PSN_KY_FL_TMPNM"));
		param.put("PWIZE_PSN_KY_FLNM", dsCtfc.getString(0, "PWIZE_PSN_KY_FLNM"));
		param.put("ATOA_ST_DT", dsCtfc.getString(0, "ATOA_ST_DT"));
		param.put("ATOA_ED_DT", dsCtfc.getString(0, "ATOA_ED_DT"));
		param.put("VLD_YN", dsCtfc.getString(0, "VLD_YN"));
		param.put("ATOA_PW", dsCtfc.getString(0, "ATOA_PW"));
		param.put("FS_RGM", dsCtfc.getString(0, "FS_RGM"));
		param.put("LS_CHGM", dsCtfc.getString(0, "LS_CHGM"));
		
		return getSqlSession().insert("ctfcDAO.insertCtfc", param);
	}

}
