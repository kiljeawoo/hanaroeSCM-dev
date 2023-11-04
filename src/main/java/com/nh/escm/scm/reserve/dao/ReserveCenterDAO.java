package com.nh.escm.scm.reserve.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.scm.reserve.vo.ReserveCenterDetailVO;
import com.nh.escm.scm.reserve.vo.ReserveCenterPrintVO;
import com.nh.escm.scm.reserve.vo.ReserveCenterVO;

public class ReserveCenterDAO extends AbstractDao {

	/* 입고 예약 등록 조회 */
	public List<ReserveCenterVO> retrieveReserveCenterList(String vhcBkgDt,
			String dvyPlashSlpno, String vhcno, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("VHC_BKG_DT", vhcBkgDt);  //예약일자
		param.put("DVY_PLASH_SLPNO", dvyPlashSlpno);  //배송예정서번호
		param.put("VHCNO", vhcno);  //차량번호		
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveReserveCenterList : " + param);
		}
		return getSqlSession().selectList("reserveCenterDAO.retrieveReserveCenterList", param);
	}

	/* 배송예정서 조회 */
	public List<ReserveCenterVO> retrieveReserveSlpnoList(String vhcBkgDt,
			String dvyPlashSlpno, String vhcno, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("VHC_BKG_DT", vhcBkgDt);  //예약일자
		param.put("DVY_PLASH_SLPNO", dvyPlashSlpno);  //배송예정서번호
		param.put("VHCNO", vhcno);  //차량번호		
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveReserveSlpnoList : " + param);
		}
		return getSqlSession().selectList("reserveCenterDAO.retrieveReserveSlpnoList", param);
	}

	/* 배송예정서 목록 조회 */
	public List<ReserveCenterVO> retrieveReserveSlpnoVhcBkgList(
			String vhcBkgDt, String vhcBkgPhdIdvdNo, String vhcno,
			String naTrplC) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("VHC_BKG_DT", vhcBkgDt);  //예약일자
		param.put("VHC_BKG_PHD_IDVD_NO", vhcBkgPhdIdvdNo);  //차량예약물류개별번호
		param.put("VHCNO", vhcno);  //차량번호		
				
		param.put("NA_TRPL_C", naTrplC); //거래처코드
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveReserveSlpnoVhcBkgList : " + param);
		}
		return getSqlSession().selectList("reserveCenterDAO.retrieveReserveSlpnoVhcBkgList", param);
	}
	
	/* 입고예약기본 수정 */
	public int updateReserveCenter(ReserveCenterVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateReserveCenter : " + vo.toString());
		}
		return getSqlSession().update("reserveCenterDAO.updateReserveCenter", vo);
	}
	
	/* 입고예약상세 수정 */
	public int updateReserveCenterDetail(ReserveCenterDetailVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateReserveCenterDetail : " + vo.toString());
		}
		return getSqlSession().update("reserveCenterDAO.updateReserveCenterDetail", vo);
	}

	/* 입고예약기본 삽입 */
	public int insertReserveCenter(ReserveCenterVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertReserveCenter : " + vo.toString());
		}
		return getSqlSession().insert("reserveCenterDAO.insertReserveCenter", vo);
	}
	
	/* 입고예약기본 상세 삽입 */
	public int insertReserveCenterD(ReserveCenterDetailVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertReserveCenterD : " + vo.toString());
		}
		return getSqlSession().insert("reserveCenterDAO.insertReserveCenterD", vo);
	}
	
	/* 입고예약상세 삭제 */
	public int deleteReserveCenterD(ReserveCenterVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteReserveCenterD : " + vo.toString());
		}
		return getSqlSession().delete("reserveCenterDAO.deleteReserveCenterD", vo);
	}
	
	/* 입고예약기본 삭제 플래그 수정 */
	public int updateDeleteFlagReserveCenter(ReserveCenterVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeleteFlagReserveCenter : " + vo.toString());
		}
		return getSqlSession().update("reserveCenterDAO.updateDeleteFlagReserveCenter", vo);
	}
	
	/* 입고예약상세 삭제 플래그 수정 */
	public int updateDeleteFlagReserveCenterD(ReserveCenterVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeleteFlagReserveCenterD : " + vo.toString());
		}
		return getSqlSession().update("reserveCenterDAO.updateDeleteFlagReserveCenterD", vo);
	}	
	
	/* 입고예약가능일자 */
	public int getReservePossibleDt(String NA_TRPL_C, String VHC_BKG_DT) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("NA_TRPL_C", NA_TRPL_C);  //거래처코드		
		param.put("VHC_BKG_DT", VHC_BKG_DT);  //입고예약일자
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveReserveSlpnoList : " + param);
		}
		return getSqlSession().selectOne("reserveCenterDAO.getReservePossibleDt", param);
	}
	
	/* 현재시간 + 30 이후 부터 예약할 수 있음.(단, 동일일자인  경우) */
	public int getReservePossibleTime(String PHD_PAS_SRTR_BKG_TMI, String PHD_PAS_BLK_BKG_TMI, String STPL_CSTD_GEN_BKG_TMI, String VHC_BKG_DT) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("PHD_PAS_SRTR_BKG_TMI", PHD_PAS_SRTR_BKG_TMI);
		param.put("PHD_PAS_BLK_BKG_TMI", PHD_PAS_BLK_BKG_TMI);
		param.put("STPL_CSTD_GEN_BKG_TMI", STPL_CSTD_GEN_BKG_TMI);
		param.put("VHC_BKG_DT", VHC_BKG_DT);  //입고예약일자
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getReservePossibleTime : " + param);
		}
		return getSqlSession().selectOne("reserveCenterDAO.getReservePossibleTime", param);
	}
	
	
	/* 입고 예약 출력 */
	public List<ReserveCenterPrintVO> printReserveCenterList(String vhcBkgDt,
			String dvyPlashSlpno, String vhcno, String[] TRPL_C_ARR) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("VHC_BKG_DT", vhcBkgDt);  //예약일자
		param.put("DVY_PLASH_SLPNO", dvyPlashSlpno);  //배송예정서번호
		param.put("VHCNO", vhcno);  //차량번호		
				
		param.put("srhTrplC", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printReserveCenterList : " + param);
		}
		return getSqlSession().selectList("reserveCenterDAO.printReserveCenterList", param);
	}
	
	/* 차량예약개별번호 채번*/
	public Map<String, Object> getReservePhdIdvdNo( String VHC_BKG_DT) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("VHC_BKG_DT", VHC_BKG_DT);
	
		return getSqlSession().selectOne("reserveCenterDAO.getReservePhdIdvdNo", param);
	}

}
