package com.nh.escm.scm.retann.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.scm.retann.dao.RetannDAO;
import com.nh.escm.scm.retann.vo.RetannCnfVO;
import com.nh.escm.scm.retann.vo.RetannRqtDetailVO;
import com.nh.escm.scm.retann.vo.RetannRqtMasterSumVO;
import com.nh.escm.scm.retann.vo.RetannRqtMasterVO;
import com.nh.escm.scm.retann.vo.RetannRqtSlpVO;

/**
 * 반품업무 - 반품입고 의뢰 조회, 반품입고 확인 등록
 * @author HyeRim.Oh
 *
 */
@Service
public class RetannService extends AbstractService {
	
	@Autowired
	private RetannDAO retannDAO;

	public List<RetannRqtMasterSumVO> retrieveRqtMasterSumList(String rpt, String rgd,
			String rgdRqt, String fromDate, String toDate, String naRgdStsDsc, String RPT_ALL) {
		try {
			return retannDAO.retrieveRqtMasterSumList(rpt,rgd,rgdRqt,fromDate,toDate,naRgdStsDsc,RPT_ALL);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<RetannRqtMasterVO> retrieveRqtMasterList(String rgd,
			String rgdRqt, String naTeamC, String rgdRgDt, String naRgdStsDsc) {
		try {
			return retannDAO.retrieveRqtMasterList(rgd,rgdRqt,naTeamC,rgdRgDt,naRgdStsDsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<RetannRqtDetailVO> retrieveRqtDetailList(
			String rgdRqt, String naTeamC, String rgdRgDt, String rgdPlaNo) {
		try {
			return retannDAO.retrieveRqtDetailList(rgdRqt,naTeamC,rgdRgDt,rgdPlaNo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> getMbco(String searchType, String searchText, String NATRPLC_GLN) {
		try {
			return retannDAO.getMbco(searchType,searchText, NATRPLC_GLN);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<RetannCnfVO> retrieveCnfList(String mbcoCode, String ynAplySomae, 
			String searchDate, String rgdPlaNo, String rgdRqtCode, String trDsc, 
			String rgdAmnDsc, String naRgdStsDsc, int start, int limit) {
		try {
			return retannDAO.retrieveCnfList(mbcoCode, ynAplySomae, searchDate, rgdPlaNo, rgdRqtCode, trDsc, rgdAmnDsc, naRgdStsDsc, start, limit);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*  반품입고 확인 등록 카운트 */
	public int getCnfCount(String mbcoCode, String ynAplySomae,
			String searchDate, String rgdPlaNo, String rgdRqtCode,
			String trDsc, String rgdAmnDsc, String naRgdStsDsc) {
		try {
			return retannDAO.getCnfCount(mbcoCode, ynAplySomae, searchDate, rgdPlaNo, rgdRqtCode, trDsc, rgdAmnDsc, naRgdStsDsc);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<RetannRqtSlpVO> retrieveRqtSlpList(String dvyRqrDtFr,
			String dvyRqrDtTo, String rgdPlaNo, String naTrplC, String mbcoCode) {
		try {
			return retannDAO.retrieveRqtSlpList(dvyRqrDtFr, dvyRqrDtTo, rgdPlaNo, naTrplC, mbcoCode);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	

	
	/*반품입고확인등록 저장*/
	public void saveCnf(List<RetannCnfVO> list){
		/*
		대상: 데이터셋
		1. TB_BY_RTNCNF_M - 데이터셋 내용, 한번저장 ,insert
		2. TB_BY_RTNCNF_D - 데이터셋 내용, 전체저장, insert
		2. TB_OD_RTNPLN_M - 상태값변경, 한번저장, update
		3. TB_OD_RTNPLN_D - 데이터셋 내용, 전체저장, update
		
		*/			 
			for(int i=0 ; i<list.size() ; i++){
				
				RetannCnfVO vo = list.get(i);				
				if(vo.getDsRowType() == DataSet.ROW_TYPE_UPDATED){
					updateAjUpr(vo); //조정단가 업데이트
				}
				insertCnfDetail(vo); //반품확인상세 인서트
			}
			insertCnfMaster(list.get(0)); //반품확인기본 인서트						
			updateRtncnfDtm(list.get(0)); //반품확인일시, 코드 변경
				
	}	
	
	/* 반품예정상세 - 조정단가,조정자 개인번호, 조정 일자 업데이트 */
	public int updateAjUpr(RetannCnfVO vo) {
		try{
			return retannDAO.updateAjUpr(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 반품예정기본 - 반품확인일시 업데이트 */
	public int updateRtncnfDtm(RetannCnfVO vo) {
		try{
			return retannDAO.updateRtncnfDtm(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 반품확인기본 저장 */
	public int insertCnfMaster(RetannCnfVO vo) {
		try{
			return retannDAO.insertCnfMaster(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 반품확인상세 저장 */
	public int insertCnfDetail(RetannCnfVO vo) {
		try{
			return retannDAO.insertCnfDetail(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 반품입고 의뢰조회 마스터 엑셀 다운로드*/
	public void downloadExcelRetann(String rpt, String rgd,
			String rgdRqt, String fromDate, String toDate, String naRgdStsDsc, String RPT_ALL, ExcelFileMakerResultHandler handler) {
		try {
			retannDAO.downloadExcelRetann(rpt,rgd,rgdRqt,fromDate,toDate,naRgdStsDsc,RPT_ALL,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 반품입고 의뢰조회 디테일 엑셀 다운로드*/
	public void downloadExcelRetannDetail(String rpt, String rgd,
			String rgdRqt, String fromDate, String toDate, String naRgdStsDsc, String RPT_ALL,
			String rgdRqt_d, String naTeamC, String rgdRgDt, String rgdPlaNo, ExcelFileMakerResultHandler handler) {
		try {
			retannDAO.downloadExcelRetannDetail(rpt,rgd,rgdRqt,fromDate,toDate,naRgdStsDsc,RPT_ALL,rgdRqt_d,naTeamC,rgdRgDt,rgdPlaNo,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}



}
