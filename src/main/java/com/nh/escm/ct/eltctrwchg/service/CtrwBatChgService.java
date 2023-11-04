package com.nh.escm.ct.eltctrwchg.service;

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
import com.nh.escm.ct.eltctrwchg.dao.CtrwBatChgDAO;
import com.nh.escm.ct.eltctrwchg.vo.CtrwBatChgVO;



@Service
public class CtrwBatChgService  extends AbstractService {
	
	@Autowired
	private  CtrwBatChgDAO ctrwBatChgDAO;
	
	
	/*전자 계약서 신규 저장*/
	public boolean saveCtrwBatChg(CtrwBatChgVO mcbcVo){
		try{
			
			if(mcbcVo.getCtrwBatChgVOVoList()  != null && mcbcVo.getCtrwBatChgVOVoList().size() > 0){
				for(CtrwBatChgVO cbcvo : mcbcVo.getCtrwBatChgVOVoList()){
					logger.debug("ecdvo.getCTRW_KDC()"   +  cbcvo.getCTRW_KDC()  );
					
						updateEltCtrwAmn(cbcvo);
					if( "10".equals(cbcvo.getCTRW_KDC().substring(0,2)   )){
						updateEltCtrwDtl(cbcvo);
					}
					else if( "20".equals(cbcvo.getCTRW_KDC().substring(0,2)   )){
						updateAddEltCtrwDtl(cbcvo);
					}else if( "30".equals(cbcvo.getCTRW_KDC().substring(0,2)   )){
						updatePmiwDtl(cbcvo);
					}else if( "40".equals(cbcvo.getCTRW_KDC().substring(0,2)   )){
						updateSctrwDtl(cbcvo);
					}else if( "50".equals(cbcvo.getCTRW_KDC().substring(0,2)   )){
						updateEtcEltCtrw(cbcvo);
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
	public int updateEltCtrwAmn(CtrwBatChgVO mcbcVo) {
		try{
			return ctrwBatChgDAO.updateEltCtrwAmn(mcbcVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 메인 계약서 상세 */
	public int updateEltCtrwDtl(CtrwBatChgVO mcbcVo) {
		try{
			return ctrwBatChgDAO.updateEltCtrwDtl(mcbcVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 기타 계약서  상세 */
	public int updateAddEltCtrwDtl(CtrwBatChgVO mcbcVo) {
		try{
			return ctrwBatChgDAO.updateAddEltCtrwDtl(mcbcVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 약정서 상세 */
	public int updatePmiwDtl(CtrwBatChgVO mcbcVo) {
		try{
			return ctrwBatChgDAO.updatePmiwDtl(mcbcVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/* 특약서  상세 */
	public int updateSctrwDtl(CtrwBatChgVO mcbcVo) {
		try{
			return ctrwBatChgDAO.updateSctrwDtl(mcbcVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	/*기타 계약서 상세 */
	public int updateEtcEltCtrw(CtrwBatChgVO mcbcVo) {
		try{
			return ctrwBatChgDAO.updateEtcEltCtrw(mcbcVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	
	


	
	// 계약서 버젼 조회
	public List<Map<String, Object>> retrieveStyVerList(String CTRW_KDC) {
		try {
			return ctrwBatChgDAO.retrieveStyVerList(CTRW_KDC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	
	
	// 계약서 내용 
	public List<Map<String, Object>> retrieveCntnList(String CTRW_KDC) {
		try {
			return ctrwBatChgDAO.retrieveCntnList(CTRW_KDC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	
	// 계약서 내용 
	public List<Map<String, Object>> retrieveCtrwBatChgList(String CTRW_KDC,String CTRW_STY_VER) {
		try {
			return ctrwBatChgDAO.retrieveCtrwBatChgList(CTRW_KDC,CTRW_STY_VER);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	
	
	
	
	public List<Map<String, Object>> retrieveCodelList() {
		try {
			return ctrwBatChgDAO.retrieveCodelList();
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	
	//전자 계약 상담 통보 파일업로드 수정
	public int updateCtrwBatChg(String CTRW_KDC, String CTRW_STY_VER, String UYN) {
		
	int rst = ctrwBatChgDAO.updateCtrwBatChg(CTRW_KDC, CTRW_STY_VER, UYN);

	return rst;
	}

	

}
