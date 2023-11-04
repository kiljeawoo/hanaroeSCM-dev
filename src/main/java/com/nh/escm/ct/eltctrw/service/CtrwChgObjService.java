package com.nh.escm.ct.eltctrw.service;

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
import com.nh.escm.ct.eltctrw.dao.CtrwChgObjDAO;
import com.nh.escm.ct.eltctrw.vo.AnwEltCtrwDrupVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDtlVO;


@Service
public class CtrwChgObjService  extends AbstractService {
	

	@Autowired
	private  CtrwChgObjDAO ctrwChgObjDAO;
	
	public List<Map<String, Object>> retrieveCtrwChgObjList(String CBO_CONTDAY , String CAL_FROM , String CAL_TO , String CTRW_DRUP_DT , String MN_CTRW_KD , String NA_TRPL_C,String MTALNM,String CTRW_IDVD_CHG_CHK,String  BUYER_NA_TRPL_C ,String BUYER_ENO, String BUYER_DSC) {
		try {
			return ctrwChgObjDAO.retrieveCtrwChgObjList(CBO_CONTDAY ,CAL_FROM ,CAL_TO ,CTRW_DRUP_DT ,MN_CTRW_KD ,NA_TRPL_C ,MTALNM ,CTRW_IDVD_CHG_CHK ,BUYER_NA_TRPL_C ,BUYER_ENO, BUYER_DSC);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	//계약서 첨부, 계약서 문구 일관 변경 관련값 세팅
	public boolean saveCtrwChgObj(AnwEltCtrwDrupVO maecd){
		
		
		try{

			//전자계약서상세			
			if(maecd.getAnwEltCtrwDrupVoList() != null && maecd.getAnwEltCtrwDrupVoList().size() > 0){
				for(AnwEltCtrwDrupVO eca : maecd.getAnwEltCtrwDrupVoList()){
					updateEltCtrwAmn(eca);

				}
			}
			
			return true;
			
			
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//계약서 첨부, 계약서 문구 일관 변경 관련값 세팅
	public int updateEltCtrwAmn(AnwEltCtrwDrupVO aecdVo) {
		try{
			return ctrwChgObjDAO.updateEltCtrwAmn(aecdVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
}
