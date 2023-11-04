package com.nh.escm.common.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.common.vo.TbCmBzplVO;

public class FileDao extends AbstractDao {
	
	/* 파일명추가 */
	public boolean update(String fileNm, String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_SEAL_FLNM", fileNm);
		param.put("NA_TRPL_C", naTrplC);
		return getSqlSession().update("common.updateFileNm", param) > 0;
	}
	
	/* 파일명삭제 */
	public boolean delete(String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", naTrplC);
		return getSqlSession().update("common.deleteFileNm", param) > 0;
	}
}
