package com.nh.escm.scm.reserve.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.scm.reserve.dao.ReserveCenterDAO;
import com.nh.escm.scm.reserve.vo.ReserveCenterDetailVO;
import com.nh.escm.scm.reserve.vo.ReserveCenterPrintVO;
import com.nh.escm.scm.reserve.vo.ReserveCenterVO;

@Service
public class ReserveCenterService extends AbstractService {

	@Autowired
	private ReserveCenterDAO reserveCenterDAO;
	
	/* 입고예약등록 차량예약내역 조회*/
	public List<ReserveCenterVO> retrieveReserveCenterList(String vhcBkgDt,
			String dvyPlashSlpno, String vhcno, String[] TRPL_C_ARR) {
		try {
			return reserveCenterDAO.retrieveReserveCenterList(vhcBkgDt, dvyPlashSlpno, vhcno, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 배송예정서 그리드 조회 */
	public List<ReserveCenterVO> retrieveReserveSlpnoList(String vhcBkgDt,
			String dvyPlashSlpno, String vhcno, String[] TRPL_C_ARR) {
		try {
			return reserveCenterDAO.retrieveReserveSlpnoList(vhcBkgDt, dvyPlashSlpno, vhcno, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 배송예정서 목록 조회 */
	public List<ReserveCenterVO> retrieveReserveSlpnoVhcBkgList(
			String vhcBkgDt, String vhcBkgPhdIdvdNo, String vhcno,
			String naTrplC) {
		try {
			return reserveCenterDAO.retrieveReserveSlpnoVhcBkgList(vhcBkgDt, vhcBkgPhdIdvdNo, vhcno, naTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/* 입고예약 저장*/
	public boolean saveReserveCenter(List<ReserveCenterVO> list) {
		
			if(list != null){
				for(int i=0 ; i<list.size() ; i++){				
					ReserveCenterVO vo = list.get(i);
					
					//상세
					if(vo.getDetailVoList() != null && vo.getDetailVoList().size() > 0){					
						for(ReserveCenterDetailVO dvo : vo.getDetailVoList()){						
							switch(dvo.getCRUD_DSC()){
								case "I" :								
									insertReserveCenterD(dvo);									
									break;
								case "U" :								
									//insertReserveCenterD(dvo);
									updateReserveCenterDetail(dvo);									
									break;								
								default : 
									logger.error("[ saveOrder ] Detail DML CODE IS NULL!!!");
									throw new AppetizerException("[ saveOrder ] Detail DML CODE IS NULL!!!");
									}
								}					
							}					
					
					switch(vo.getCRUD_DSC()){
						case "I" :
							insertReserveCenter(vo);
							break;
						case "U" : 
							updateReserveCenter(vo);
							break;
						case "D" :
							updateDeleteFlagReserveCenter(vo);
							updateDeleteFlagReserveCenterD(vo);
							break;
						default:	
							logger.error("[ saveReserveCenter ] Master CRUD CODE IS NULL!!!");
							throw new AppetizerException("[ saveReserveCenter ] Master CRUD CODE IS NULL!!!");
					}					
				}				
			}
			return true;			
	}

	/* 입고예약기본 삽입 */
	public int insertReserveCenter(ReserveCenterVO vo) {
			return reserveCenterDAO.insertReserveCenter(vo);
	}
	
	/* 입고예약상세 삽입 */
	public int insertReserveCenterD(ReserveCenterDetailVO vo) {
			return reserveCenterDAO.insertReserveCenterD(vo);
	}
	
	/* 입고예약기본 수정 */
	public int updateReserveCenter(ReserveCenterVO vo) {
			return reserveCenterDAO.updateReserveCenter(vo);
	}
	
	/* 입고예약상세 수정 */
	public int updateReserveCenterDetail(ReserveCenterDetailVO vo) {
			return reserveCenterDAO.updateReserveCenterDetail(vo);
	}
	
	/* 입고예약상세 삭제 */
	public int deleteReserveCenterD(ReserveCenterVO vo) {
			return reserveCenterDAO.deleteReserveCenterD(vo);
	}
	
	/* 입고예약기본 삭제 플래그수정 */
	public int updateDeleteFlagReserveCenter(ReserveCenterVO vo) {
			return reserveCenterDAO.updateDeleteFlagReserveCenter(vo);
	}
	
	/* 입고예약상세 삭제 플래그수정 */
	public int updateDeleteFlagReserveCenterD(ReserveCenterVO vo) {
			return reserveCenterDAO.updateDeleteFlagReserveCenterD(vo);
	}
	
	/* 입고예약가능일자 */
	public int getReservePossibleDt(String NA_TRPL_C, String VHC_BKG_DT) {
		try{
			return reserveCenterDAO.getReservePossibleDt(NA_TRPL_C, VHC_BKG_DT);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 현재시간 + 30 이후 부터 예약할 수 있음.(단, 동일일자인  경우) */
	public int getReservePossibleTime(String PHD_PAS_SRTR_BKG_TMI, String PHD_PAS_BLK_BKG_TMI, String STPL_CSTD_GEN_BKG_TMI, String VHC_BKG_DT) {
		try{
			return reserveCenterDAO.getReservePossibleTime(PHD_PAS_SRTR_BKG_TMI,PHD_PAS_BLK_BKG_TMI,STPL_CSTD_GEN_BKG_TMI,VHC_BKG_DT);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
	}
	
	/* 입고예약 출력*/
	public List<ReserveCenterPrintVO> printReserveCenterList(String vhcBkgDt,
			String dvyPlashSlpno, String vhcno, String[] TRPL_C_ARR) {
		try {
			return reserveCenterDAO.printReserveCenterList(vhcBkgDt, dvyPlashSlpno, vhcno, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}	
	
	/* 차량예약개별번호 채번*/
	public Map<String, Object> getReservePhdIdvdNo(String VHC_BKG_DT) throws AppetizerException{
		try {
			return reserveCenterDAO.getReservePhdIdvdNo(VHC_BKG_DT);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

}
