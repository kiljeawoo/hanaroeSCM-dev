package com.nh.escm.pds.dmart.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.dmart.dao.DmartDAO;
import com.nh.escm.pds.dmart.vo.DmartVO;

@Service
public class DmartService {
	
	@Autowired
	private DmartDAO dmartDAO;
	
	public int insertDmartReq(DmartVO dmartVo) {
		
		// 데이터마트 신청등록
		try{
			
			return dmartDAO.insertDmartReq(dmartVo);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
		
		
	}

	// 데이터마트 조회
	public List<DmartVO> selectDmartList(String mb_id, String date_fr, String date_to, int start, int end) {
		
		try{
			
			return dmartDAO.selectDmartList(mb_id, date_fr, date_to,start,end);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
	}

	public int cancelDmartReq(String REQ_TM, String REQ_ID) {
		// 데이터마트 신청등록
		try{
			
			return dmartDAO.cancelDmartReq(REQ_TM, REQ_ID);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> downloadExcelStream(String mb_id, String date_fr, String date_to) {
		try{
			
			return dmartDAO.downloadExcelStream(mb_id, date_fr, date_to);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
	}
	
	public void downloadExcelDmartReqList(String mb_id, String date_fr, String date_to, ExcelFileMakerResultHandler handler) {
		try{
			
			dmartDAO.downloadExcelDmartReqList(mb_id, date_fr, date_to, handler);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
	}

	public int selectDmartListCount(String mb_id, String date_fr, String date_to) {
		try{
			
			return dmartDAO.selectDmartListCount(mb_id, date_fr, date_to);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
	}

	public int updateDnCnt(String REQ_TM, String REQ_ID) {
		// 데이터마트 신청등록
		try{
			
			return dmartDAO.updateDnCnt(REQ_TM, REQ_ID);
			
		} catch  (DataAccessException e){
			
			throw new AppetizerException(e);
		}
		
	}

}
