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

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDtlVO;
import com.nh.escm.ct.eltctrwamn.dao.CtrwStylDAO;
import com.nh.escm.ct.eltctrwamn.vo.EtcEltStylAmnVO;



@Service
public class CtrwStylService  extends AbstractService {
	
	@Autowired
	private  CtrwStylDAO ctrwStylDAO;
	
	
	/*전자 계약서 신규 저장*/
	public boolean saveCtrwStyl(EtcEltStylAmnVO eesaVo){
		try{
			int i = 0;
			if(eesaVo.getEtcEltStylAmlVoList() != null && eesaVo.getEtcEltStylAmlVoList().size() > 0){
				
				
				
				for(EtcEltStylAmnVO ecdvo : eesaVo.getEtcEltStylAmlVoList()){
					logger.debug("ecdvo.getDML_CODE()"   +  ecdvo.getDML_CODE());
					
					
					
					switch(ecdvo.getDML_CODE()){
						case "1" :
							insertCtrwStyl(ecdvo);
							break;
						case "2" :
							
							if(i == 0){
								i = 1 ;
								deleteCtrwStyl(ecdvo.getCTRW_KDC() ,ecdvo.getCTRW_STY_VER() );
							}
							insertCtrwStyl(ecdvo);
							
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
	
	
	/* 전자계약서관리 */
	public int insertCtrwStyl(EtcEltStylAmnVO eesaVo) {
		try{
			return ctrwStylDAO.insertCtrwStyl(eesaVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 전자계약서관리 */
	public int updateCtrwStyl(EtcEltStylAmnVO eesaVo) {
		try{
			return ctrwStylDAO.updateCtrwStyl(eesaVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//전자계약서 양식 삭제
	public int deleteCtrwStyl(String CTRW_KDC,String CTRW_STY_VER) {
		try{
			return ctrwStylDAO.deleteCtrwStyl(CTRW_KDC ,CTRW_STY_VER );
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	
	
	
	
	
	public List<Map<String, Object>> retrieveCtrwStylList(String CTRW_KDC,String CTRW_STY_VER,String BUYER_DSC) {
		try {
			return ctrwStylDAO.retrieveCtrwStylList(CTRW_KDC,CTRW_STY_VER,BUYER_DSC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	public List<Map<String, Object>> retrieveCtrwStylDscList(String CTRW_KDC,String CTRW_STY_VER) {
		try {
			return ctrwStylDAO.retrieveCtrwStylDscList(CTRW_KDC,CTRW_STY_VER);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveCodelList() {
		try {
			return ctrwStylDAO.retrieveCodelList();
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	
	//전자 계약 상담 통보 파일업로드 수정
	public int updateCtrwStyl(String CTRW_KDC, String CTRW_STY_VER, String UYN) {
		
	int rst = ctrwStylDAO.updateCtrwStyl(CTRW_KDC, CTRW_STY_VER, UYN);

	return rst;
	}

	

}
