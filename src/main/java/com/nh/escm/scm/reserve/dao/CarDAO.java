package com.nh.escm.scm.reserve.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.scm.reserve.vo.CarVO;

public class CarDAO extends AbstractDao {

	public List<CarVO> retrieveCarList(String searchType, String searchWord, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("SEARCH_TYPE", searchType);  //조회구분(1.차량명, 2:기사명)
		param.put("SEARCH_WORD", searchWord);  //조회단어		
		
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveCarList : " + param);
		}
		return getSqlSession().selectList("CarDAO.retrieveCarList", param);
	}
	
	/* 공급처 차량관리 삽입 */
	public int insertCar(CarVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertCar : " + vo.toString());
		}
		return getSqlSession().insert("CarDAO.insertCar", vo);
	}
	
	/* 공급처 차량관리 수정 */
	public int updateCar(CarVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateCar : " + vo.toString());
		}
		return getSqlSession().update("CarDAO.updateCar", vo);
	}
	
	/* 공급처 차량관리 삭제 상태로 업데이트 */
	public int updateDeleteFlagCar(CarVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeleteFlagCar : " + vo.toString());
		}
		return getSqlSession().update("CarDAO.updateDeleteFlagCar", vo);
	}

}
