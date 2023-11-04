package com.nh.escm.scm.reserve.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.scm.reserve.dao.CarDAO;
import com.nh.escm.scm.reserve.vo.CarVO;

@Service
public class CarService extends AbstractService {
	
	@Autowired
	private CarDAO carDAO;

	public List<CarVO> retrieveCarList(String searchType, String searchWord, String[] TRPL_C_ARR) {
		try {
			return carDAO.retrieveCarList(searchType, searchWord, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 공급처 차량관리 저장*/
	public boolean saveCar( List<CarVO> list){
		try{			
			if(list != null && list.size() > 0){
				for(int i=0 ; i<list.size() ; i++){				
					CarVO vo = list.get(i);
					switch(vo.getDML_CODE()){
					case "INSERT" :
						insertCar(vo);
						break;
					case "UPDATE" : 
						updateCar(vo);
						break;
					case "DELETE" :
						updateDeleteFlagCar(vo);
						break;
					default:	
						if(logger.isDebugEnabled()){
							logger.debug("saveCar no case");
						}					
						break;
					}
				}
			}else{
				throw new AppetizerException("msg.van_ds_sc_0410.view.save.error");
			}
			return true;			
		}catch(DataAccessException e){			
			throw new AppetizerException(e);
		}
	}
	
	/* 공급처 차량관리 삽입 */
	public int insertCar(CarVO vo) {
		try{
			return carDAO.insertCar(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 공급처 차량관리 수정 */
	public int updateCar(CarVO vo) {
		try{
			return carDAO.updateCar(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 공급처 차량관리 삭제 상태로 업데이트 */
	public int updateDeleteFlagCar(CarVO vo) {
		try{
			return carDAO.updateDeleteFlagCar(vo);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}

}
