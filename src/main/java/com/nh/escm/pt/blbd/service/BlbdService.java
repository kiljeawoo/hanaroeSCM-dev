package com.nh.escm.pt.blbd.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pt.blbd.dao.BlbdDAO;
import com.nh.escm.pt.blbd.vo.BlbdApdflVO;
import com.nh.escm.pt.blbd.vo.BlbdVO;

@Service
public class BlbdService extends AbstractService {

	@Autowired
	private BlbdDAO blbdDAO;
	
	public List<BlbdVO> retrieveBlbdOfancMainList() {
		try {
			return blbdDAO.retrieveBlbdOfancMainList();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<BlbdVO> retrieveBlbdPopUpList() {
		try {
			return blbdDAO.retrieveBlbdPopUpList();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<BlbdVO> retrieveBlbdPopUpOfancList() {
		try {
			return blbdDAO.retrieveBlbdPopUpOfancList();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	

	public int deleteBlbd(DataSet dsBbs) {
		try{
			return blbdDAO.deleteBlbd(dsBbs);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	public int insertBlbd(BlbdVO vo) {
		try{
			return blbdDAO.insertBlbd(vo);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	public int insertBlbdPrc(String UPLOAD_DT, String BBRD_ID, String PRC, String FS_RGM, String LS_CHGM, String PAY_TRPL_C) {
		try{
			return blbdDAO.insertBlbdPrc(UPLOAD_DT, BBRD_ID, PRC, FS_RGM, LS_CHGM, PAY_TRPL_C);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public List<BlbdApdflVO> retrieveApdflList(String BLBD_ID, String BBRD_ID) {
		try {
			return blbdDAO.retrieveApdflList(BLBD_ID, BBRD_ID);

		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<BlbdVO> retrieveBlbdPrc(String BBRD_ID) {
		try {
			return blbdDAO.retrieveBlbdPrc(BBRD_ID);

		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int updateBlbdPrc(String UPLOAD_DT, String BBRD_ID, String PRC, String LS_CHGM) {
		try{
			return blbdDAO.updateBlbdPrc(UPLOAD_DT, BBRD_ID, PRC, LS_CHGM);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public int insertApdfl(BlbdApdflVO file) {
		try{
			return blbdDAO.insertApdfl(file);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public String getBbrdId() {
		try{
			return blbdDAO.getBbrdId();
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	
	public String getCountPretBbrdId(String pretBbrdId) {
		try{
			return blbdDAO.getCountPretBbrdId(pretBbrdId);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public List<BlbdVO> getBlbdID(String menuId) {
		try{
			return blbdDAO.getBlbdID(menuId);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public int updateblbdCntn(BlbdVO vo) {
		try{
			return blbdDAO.updateblbdCntn(vo);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public int deleteApdfl(BlbdApdflVO file) {
		try{
			return blbdDAO.deleteApdfl(file);
		} catch  (DataAccessException e){
			throw new AppetizerException(e);
		}
	}

	public int retrieveBlbdListCount(DataSet dsCondition, String usrTpc, String usrId, String eltAuthDsc) {
		try {
			int rowCnt = blbdDAO.retrieveBlbdListCount(dsCondition, usrTpc, usrId, eltAuthDsc);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int retrieveCostQnAListCount(DataSet dsCondition) {
		try {
			int rowCnt = blbdDAO.retrieveCostQnAListCount(dsCondition);
			return rowCnt;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveBlbdList(DataSet dsCondition, String usrTpc, String usrId, String eltAuthDsc, int start, int end) {
		try {
			return blbdDAO.retrieveBlbdList(dsCondition, usrTpc, usrId, eltAuthDsc, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveCostQnAList(DataSet dsCondition, int start, int end) {
		try {
			return blbdDAO.retrieveCostQnAList(dsCondition, start, end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	

	public List<BlbdVO> retrieveBlbd(String BLBD_ID, String BBRD_IDd) {
		try {
			return blbdDAO.retrieveBlbd(BLBD_ID, BBRD_IDd);

		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public Map<String, Object> getUsrGlnCode(String pretBbrdId) {
		try {
			return blbdDAO.getUsrGlnCode(pretBbrdId);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int canDelete(String BBRD_ID) {
		try {
			return blbdDAO.canDelete(BBRD_ID);

		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
