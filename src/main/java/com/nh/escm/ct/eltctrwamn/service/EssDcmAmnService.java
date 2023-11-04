package com.nh.escm.ct.eltctrwamn.service;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.ct.eltctrwamn.dao.EssDcmAmnDAO;
import com.nh.escm.ct.eltctrwamn.vo.EssDcmAmnVO;



@Service
public class EssDcmAmnService  extends AbstractService {
	
	@Autowired
	private  EssDcmAmnDAO essDcmAmnDAO;
	
	
	/*서류양식관리 */
	public boolean saveEssDcmAmnList(EssDcmAmnVO medaVo){
		try{
			
			if(medaVo.getEssDcmAmnList() != null && medaVo.getEssDcmAmnList().size() > 0){
				for(EssDcmAmnVO tedavo : medaVo.getEssDcmAmnList()){
					logger.debug("ecdvo.getDML_CODE()"   +  tedavo.getDML_CODE());
					switch(tedavo.getDML_CODE()){
						case "1" :
							insertEssDcmAmn(tedavo);
							break;
						case "2" : 
							updateEssDcmAmn(tedavo);
							break;
						case "4" :
							deleteEssDcmAmn(tedavo);
							break;
						default :
							logger.error("EditType of Notice EltCtrw don't existed!! ");
							break;	
					}
				}
			}
	
			
			return true;
			
			
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/* 서류양식관리 저장 */
	public int insertEssDcmAmn(EssDcmAmnVO medaVo) {
		try{
			return essDcmAmnDAO.insertEssDcmAmn(medaVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 서류양식관리 수정 */
	public int updateEssDcmAmn(EssDcmAmnVO medaVo) {
		try{
			return essDcmAmnDAO.updateEssDcmAmn(medaVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	

	//서류양식관리 삭제
	public int deleteEssDcmAmn(EssDcmAmnVO medaVo) {
		try{
			return essDcmAmnDAO.deleteEssDcmAmn(medaVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	public List<Map<String, Object>> retrieveEssDcmAmnList(String MN_CTRW_KDC,String BUYER_DSC) {
		try {
			return essDcmAmnDAO.retrieveEssDcmAmnList(MN_CTRW_KDC,BUYER_DSC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	

}
