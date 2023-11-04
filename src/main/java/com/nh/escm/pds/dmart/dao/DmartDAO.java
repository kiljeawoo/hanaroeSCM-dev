package com.nh.escm.pds.dmart.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.dmart.vo.DmartVO;

public class DmartDAO extends AbstractDao  {

	// 데이터마트 신청등록  
	public int insertDmartReq(DmartVO dmartVo) {
		
		return getSqlSession().insert("dmartDAO.insertDmartReq", dmartVo);
	}

	// 데이터마트 신청내역조회
	public List<DmartVO> selectDmartList(String mb_id, String date_fr, String date_to, int start, int end) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("mb_id", mb_id);
		param.put("date_fr", date_fr);
		param.put("date_to", date_to);		
		param.put("start", start); 				//페이지 시작
		param.put("end", end); 					//페이지 끝
		return getSqlSession().selectList("dmartDAO.selectDmartList", param);
	}

	// 데이터마트 신청내역 취소
	public int cancelDmartReq(String REQ_TM, String REQ_ID) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("REQ_TM", REQ_TM);
		param.put("REQ_ID", REQ_ID);
		
		return getSqlSession().update("dmartDAO.cancelDmartReq", param);
	}
	
	// 데이터마트 신청내역 엑셀다운로드
	public List<Map<String, Object>> downloadExcelStream(String mb_id,	String date_fr, String date_to) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("mb_id", mb_id);
		param.put("date_fr", date_fr);
		param.put("date_to", date_to);		
		
		return getSqlSession().selectList("dmartDAO.downloadExcelStream", param);
	}
	
	// 데이터마트 신청내역 엑셀다운로드
	public void downloadExcelDmartReqList(String mb_id,	String date_fr, String date_to, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("mb_id", mb_id);
		param.put("date_fr", date_fr);
		param.put("date_to", date_to);		
		
		getSqlSession().select("dmartDAO.downloadExcelDmartReqList", param, handler);
	}

	public int selectDmartListCount(String mb_id, String date_fr, String date_to) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("mb_id", mb_id);
		param.put("date_fr", date_fr);
		param.put("date_to", date_to);		
		
		return getSqlSession().selectOne("dmartDAO.selectDmartListCount", param);
	}

	public int updateDnCnt(String REQ_TM, String REQ_ID) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("REQ_TM", REQ_TM);
		param.put("REQ_ID", REQ_ID);
		
		return getSqlSession().update("dmartDAO.updateDnCnt", param);
	}

}
