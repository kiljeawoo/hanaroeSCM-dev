package com.nh.escm.scm.delivery.sea.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.common.BillingMarkUpResultHandler;
import com.nh.escm.scm.delivery.sea.vo.DeliveryNoticeOrderDetailVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryNoticeOrderPopUpVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryNoticeOrderPrintVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryNoticeOrderVO;
import com.nh.escm.scm.delivery.sea.vo.DeliverySkusDVO;
import com.nh.escm.scm.delivery.sea.vo.DeliverySkusMVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryTcVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryTradingPatnersDVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryTradingPatnersExcelDetailVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryTradingPatnersMVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryTradingPatnersPrintDVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryTradingPatnersSrhVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryTrnrelVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderDetailVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderTempFileDetailVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderTempFileMasterVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeVhcnoVO;

/**
 * 배송업무
 * 배송예정서 일반등록
 * @author swha
 *
 */

public class DeliveryNoticeSeaDAO extends AbstractDao {
	
	
	/*
	 * 물류센터리스트
	 */
	public List<DeliveryTcVO> retrieveTC(String trplC){
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("trplC", trplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveTC : " + param);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveTC", param);
	}
	
	
	/*
	 * 영업일체크
	 */
	public String getBizDtYn(String odrplNaTrplC, String searchDate){
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		param.put("SEARCH_DATE", searchDate);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getBizDtYn : " + param);
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getBizDtYn", param);
	}
	
	/*
	 * 영업일조회
	 */
	public String getBizDt(String trplO, String teamO, String trplR, String teamR, String searchDate){
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("TRPL_O", trplO);
		param.put("TEAM_O", teamO);
		param.put("TRPL_R", trplR);
		param.put("TEAM_R", teamR);
		param.put("SEARCH_DATE", searchDate);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getBizDt : " + param);
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getBizDt", param);
	}
	
	/*
	 * 배송예정일자번표번호 생성
	 */
	public String getNaDvyPlashSlpno(String trplC, String teamC, String dvyPlaDt, String ddlyYn){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TRPL_C", trplC);
		params.put("TEAM_C", teamC);
		params.put("DVY_PLA_DT", dvyPlaDt); 
		params.put("DDLY_YN", ddlyYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getNaDvyPlashSlpno : " + params);
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getNaDvyPlashSlpno", params);
	}
	
	
	
	/* 발주정보 조회 Master*/
	public NoticeOrderVO getOrder(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpNo) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		param.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		param.put("ODR_DT", odrDt); 
		param.put("ODR_SLPNO", odrSlpNo);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getOrder : " + param);
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getOrder", param);
	}
	
	/* 발주정보 상품정보 Detail */
	public List<NoticeOrderDetailVO> retrieveOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){	
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDetail : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveOrderDetail", params);
	}
	
	/* 발주정보 상품정보 Detail */
	public List<NoticeOrderDetailVO> retrieveOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String dvyPlaDt){	
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("DVY_PLA_DT", dvyPlaDt);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDetail : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveOrderDetail", params);
	}
	
	/* 결품사유코드 조회 */
	public List<Map<String, Object>> retrieveShortageReason(String code){
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("code", code);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveShortageReason : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveShortageReason", params);
	}
	
	/* 수산부 결품내역 조회 */
	public List<Map<String, Object>> retrieveShortageReasonList(String[] spyplNaTrplCArr, String dvyaaNaTrplC, String dvyaaNaTeamC, String dvyFrom, String dvyTo) {
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("spyplNaTrplCArr", spyplNaTrplCArr);
		params.put("dvyaaNaTrplC", dvyaaNaTrplC);
		params.put("dvyaaNaTeamC", dvyaaNaTeamC);
		params.put("dvyFrom", dvyFrom);
		params.put("dvyTo", dvyTo);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveShortageReasonList : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveShortageReasonList", params);
	}
	
	/* 공급처차량 관리 */
	public List<NoticeVhcnoVO> retrieveVhcno(String spyplNaTrplC){
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveVhcno : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveVhcno", params);
	}
	
	/* 배송예정서 기본 저장 */
	public int insertDeliveryNoticeOrder(DeliveryNoticeOrderVO dnoVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDeliveryNoticeOrder : " + dnoVo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.insertDeliveryNoticeOrder", dnoVo);
	}
	
	/* 배송예정서 상세 저장 */
	public int insertDeliveryNoticeOrderDetail(
			DeliveryNoticeOrderDetailVO dnodVo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDeliveryNoticeOrderDetail : " + dnodVo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.insertDeliveryNoticeOrderDetail", dnodVo);
	}
	
	/* 배송예정서 일반등록 (거래명세서 출력)  */
	public List<DeliveryNoticeOrderPrintVO> printDeliveryNoticeOrder(String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDeliveryNoticeOrder : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.printDeliveryNoticeOrder", params);
	}
	
	/*
	 * 발주상세-배송예정서전표 번호 수정(NA_DVY_PLASH_SLPNO)
	 */
	public int updateOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String naWrsC, String naDvyPlashSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("NA_WRS_C", naWrsC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateOrderDetail : " + params);
		}
		return getSqlSession().update("deliveryNoticeSeaDAO.updateOrderDetail", params);
	}
	
	/* 배송예정서 기본 조회 */
	public NoticeOrderVO getDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno) {
		Map<String, Object> params = new HashMap<String, Object>();		
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno); 
		
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryNoticeOrder : " + params);
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getDeliveryNoticeOrder", params);
	}
	
	/* 배송예정서 상세 조회 */
	public List<NoticeOrderDetailVO> getDeliveryNoticeOrderDetail(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno) {	
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		//params.put("CURRENT_DATE", DateUtil.getCurrentDate("yyyyMMdd"));
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryNoticeOrderDetail : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.getDeliveryNoticeOrderDetail", params);
	}
	
	/* 배송예정서 상세 조회 */
	public List<NoticeOrderDetailVO> getDeliveryNoticeOrderDetail(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String dvyPlaDt, String ddlyYn, String cserCtrTpc) {	
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("DVY_PLA_DT", dvyPlaDt);
		params.put("DDLY_YN", ddlyYn);
		params.put("CSER_CTR_TPC", cserCtrTpc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryNoticeOrderDetail : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.getDeliveryNoticeOrderDetail", params);
	}
	
	
	/*
	 * 배송예정서 기본 수정
	 */
	public int updateDeliveryNoticeOrder(DeliveryNoticeOrderVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeliveryNoticeOrder : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.updateDeliveryNoticeOrder", vo);
	}
	
	/*
	 * 배송예정서 상세 수정
	 */
	public int updateDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.updateDeliveryNoticeOrderDetail", vo);
	}
	
	/*
	 * 배송예정서 상세 삭제
	 */
	public int deleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.deleteDeliveryNoticeOrderDetail", vo);
	}
	
	/*
	 * 배송예정서 상세 삭제 수정
	 */
	public int updateDeleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeleteDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.updateDeleteDeliveryNoticeOrderDetail", vo);
	}
	
	/*
	 * 배송예정서 기본 삭제
	 */
	public int deleteDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRP_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteDeliveryNoticeOrder : " + params.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.deleteDeliveryNoticeOrder", params);
	}
	
	/*
	 * 배송예정서 상세 삭제
	 */
	public int deleteDeliveryNoticeOrderDetailAll(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRP_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteDeliveryNoticeOrderDetailAll : " + params);
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.deleteDeliveryNoticeOrderDetailAll", params);
	}
	
	
	
	/*
	 * 배송예정서 TEMP Master 저장
	 */
	public int insertNoticeOrderMTmp(NoticeOrderTempFileMasterVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertNoticeOrderMTmp : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.insertNoticeOrderMTmp", vo);
	}
	
	/*
	 * 배송예정서 TEMP Detail 저장
	 */
	public int insertNoticeOrderDTmp(NoticeOrderTempFileDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertNoticeOrderDTmp : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeSeaDAO.insertNoticeOrderDTmp", vo);
	}
	
	/*
	 * 배송예정서 TEMP Master 조회
	 */
	public List<NoticeOrderTempFileMasterVO> retrieveNoticeOrderMTmp(String tempSeq){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("tempSeq", tempSeq);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveNoticeOrderMTmp : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveNoticeOrderMTmp", params);
	}
	
	/*
	 * 배송예정서 TEMP Detail 조회
	 */
	public List<NoticeOrderTempFileDetailVO> retrieveNoticeOrderDTmp(String tempSeq){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("tempSeq", tempSeq);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveNoticeOrderDTmp : " +  params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveNoticeOrderDTmp", params);
	}
	
	/*
	 *  발주번호_배송요청일 정보조회 팝업
	 */
	public List<DeliveryNoticeOrderPopUpVO> retrieveOrdersPopUp(String odrSlpno, String rvoplNaTrplC, String odrplNaTrplC, String dvyRqrDtFrom, String dvyRqrDtTo, String ddlyYn, String odrplNaTrplN){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODR_SLPNO", odrSlpno);
		params.put("RVOPL_NA_TRPL_C", rvoplNaTrplC);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TRPL_N", odrplNaTrplN);
		params.put("DVY_RQR_DT_FROM", dvyRqrDtFrom);
		params.put("DVY_RQR_DT_TO", dvyRqrDtTo);
		params.put("DDLY_YN", ddlyYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrdersPopUp : " +  params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveOrdersPopUp", params);
	}
	
	/*
	 *  배송예정 거래처별 조회
	 */
	public List<DeliveryTradingPatnersMVO> retrieveDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO srhVo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersM : " +  srhVo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveDeliveryTradingPatnersM", srhVo);
	}
	
	/*
	 *  배송예정 거래처별 조회 Count
	 */
	public int getDeliveryTradingPatnersMCount(DeliveryTradingPatnersSrhVO srhVo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersMCount : " +  srhVo.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.retrieveDeliveryTradingPatnersMCount", srhVo);
	}
	
	/*
	 *  배송예정 거래처별 조회 Sum
	 */
	public Map<String, Object> getDeliveryTradingPatnersMSum(DeliveryTradingPatnersSrhVO srhVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryTradingPatnersMSum : " +  srhVo.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getDeliveryTradingPatnersMSum", srhVo);
	}
	
	
	
	/*
	 *  배송예정 거래처별 조회 상세
	 */
	public List<DeliveryTradingPatnersDVO> retrieveDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, int start, int end, String sort, String slpDt, String naSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("start", start);
		params.put("end", end);
		params.put("sort", sort);
		
		params.put("SLP_DT", slpDt);
		params.put("NA_SLPNO", naSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersD : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveDeliveryTradingPatnersD", params);
	}
	
	/*
	 *  배송예정 거래처별 조회 상세 Count
	 */
	public int getDeliveryTradingPatnersDCount(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String slpDt, String naSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		
		params.put("SLP_DT", slpDt);
		params.put("NA_SLPNO", naSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersDCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.retrieveDeliveryTradingPatnersDCount", params);
	}
	
	/*
	 *  배송예정 거래처별 Excel
	 */
	public void downloadExcelDeliveryTradingPatners(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatners : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeSeaDAO.downloadExcelDeliveryTradingPatners", vo, handler);
	}
	
	/*
	 *  배송예정 거래처별 Detail Print
	 */
	public List<DeliveryTradingPatnersPrintDVO> printDeliveryTradingPatnersD(String dvyaaNaTrplC, String spyplNaTrplC, String naDvyPlashSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDeliveryTradingPatnersD : " +  params);
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.printDeliveryTradingPatnersD", params);
	}
	
	/*
	 *  배송예정 거래처별 Grid Excel
	 */
	public void downloadExcelDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		vo.setStart(-1);
		vo.setEnd(-1);
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatnersM : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeSeaDAO.downloadExcelDeliveryTradingPatnersM", vo, handler);
	}
	
	/*
	 *  배송예정 거래처별  Excel Detail
	 */
	public void downloadExcelDetailDeliveryTradingPatners(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDetailDeliveryTradingPatners : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeSeaDAO.downloadExcelDetailDeliveryTradingPatners", vo, handler);
	}
	
	/*
	 *  배송예정 거래처별  Excel Detail
	 */
	public void downloadExcelDeliveryTradingPatnersE(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatnersE : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeSeaDAO.downloadExcelDeliveryTradingPatnersE", vo, handler);
	}
	
	/*
	 *  배송예정 상품별 조회 Master
	 */
	public List<DeliverySkusMVO> retrieveDeliverySkusM(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end ){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliverySkusM : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveDeliverySkusM", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Master Count
	 */
	public int getDeliverySkusMCount(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", trpl);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliverySkusMCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getDeliverySkusMCount", params);
	}
		
	/*
	 *  배송예정 상품별 조회 Detail
	 */
	public List<DeliverySkusDVO> retrieveDeliverySkusD(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end ){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliverySkusD : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveDeliverySkusD", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Detail Count
	 */
	public int getDeliverySkusDCount(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", trpl);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliverySkusDCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getDeliverySkusDCount", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Excel DownLoad
	 */
	public void downloadExcelDeliverySkus(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliverySkus : " +  params.toString());
		}
		getSqlSession().select("deliveryNoticeSeaDAO.downloadExcelDeliverySkus", params, handler);
	}
	
	/*
	 *  배송예정 결과 조회
	 */
	public List<Map<String, Object>> retrieveDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], int start, int end ){
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("DDLY_YN", ddlyYn);
		params.put("RES_CODE", resCode);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryResult : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveDeliveryResult", params);
	}
	
	/*
	 *  배송예정 결과 조회 Count
	 */
	public int getDeliveryResultCount(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("DDLY_YN", ddlyYn);
		params.put("RES_CODE", resCode);
		params.put("TRPL", TRPL_C_ARR);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryResultCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getDeliveryResultCount", params);
	}
	
	/*
	 * 공급처 팀코드 조회
	 */
	public String searchTeam(String cserNaTrplC, String splrNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("CSER_NA_TRPL_C", cserNaTrplC);
		params.put("SPLR_NA_TRPL_C", splrNaTrplC);
	
		if(logger.isDebugEnabled()){
			logger.debug(">>> searchTeam : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.searchTeam", params);
	}
	
	/*
	 * 단가 '0' 일 경우 바이어 검색
	 */
	public Map<String, Object> getBuyer(String naWrsN, String naWrsC, String naWrsLclc, String naWrsMclc, String naWrsSclc, String naWrsDtcfC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_WRS_N", naWrsN);
		params.put("NA_WRS_C", naWrsC);
		params.put("NA_WRS_LCLC", naWrsLclc);
		params.put("NA_WRS_MCLC", naWrsMclc);
		params.put("NA_WRS_SCLC", naWrsSclc);
		params.put("NA_WRS_DTCF_C", naWrsDtcfC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> getBuyer : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getBuyer", params);
	}
	
	/*
	 * 배송예정서 취소 Master
	 */
	public int deliveryNoticeCancelMProc(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String LS_CMENO){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("LS_CMENO", LS_CMENO);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> deliveryNoticeCancelMProc : " +  params.toString());
		}
		return getSqlSession().update("deliveryNoticeSeaDAO.deliveryNoticeCancelMProc", params);
	}
	
	/*
	 * 배송예정서 취소 Detail
	 */
	public int deliveryNoticeCancelDProc(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> deliveryNoticeCancelDProc : " +  params.toString());
		}
		return getSqlSession().update("deliveryNoticeSeaDAO.deliveryNoticeCancelDProc", params);
	}
	
	
	public List<DeliveryTrnrelVO> retrieveTrnrel(String odrplNaTrplC, String odrplNaTeamC, String splrNaTrplC, String splrNaTeamC, String cserCtrTpc, String spyTpc, String mngtNaTrplC, String mngtNaTeamC, String mngtNaTrTpc, String naWrsLclc, String naWrsMclc){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("SPYPL_NA_TRPL_C", splrNaTrplC);
		params.put("SPYPL_NA_TEAM_C", splrNaTeamC);
		params.put("CSER_CTR_TPC", cserCtrTpc);
		params.put("SPY_TPC", spyTpc);
		params.put("MNGT_NA_TRPL_C", mngtNaTrplC);
		params.put("MNGT_NA_TEAM_C", mngtNaTeamC);
		params.put("MNGT_NA_TR_TPC", mngtNaTrTpc);
		params.put("NA_WRS_LCLC", naWrsLclc);
		params.put("NA_WRS_MCLC", naWrsMclc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveTrnrel : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeSeaDAO.retrieveTrnrel", params);
		
	}
	
	/**
	 * 배송예정서 롤백용
	 * @param SPYPL_NA_TRPL_C
	 * @param DVYAA_NA_TRPL_C
	 * @param NA_DVY_PLASH_SLPNO
	 * @param DVY_PLA_DT
	 * @return
	 */
	public Map<String, Object> getDeliveryMasterForRollback(
			String SPYPL_NA_TRPL_C, String DVYAA_NA_TRPL_C, String NA_DVY_PLASH_SLPNO, String DVY_PLA_DT){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		params.put("DVYAA_NA_TRPL_C", DVYAA_NA_TRPL_C);
		params.put("NA_DVY_PLASH_SLPNO", NA_DVY_PLASH_SLPNO);
		params.put("DVY_PLA_DT", DVY_PLA_DT);
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getDeliveryMasterForRollback", params);
	}
	
	/**
	 * 배송예정서 롤백용
	 * @param SPYPL_NA_TRPL_C
	 * @param DVYAA_NA_TRPL_C
	 * @param NA_DVY_PLASH_SLPNO
	 * @param DVY_PLA_DT
	 * @return
	 */
	public List<Map<String, Object>> getDeliveryDetailsForRollback(
			String SPYPL_NA_TRPL_C, String DVYAA_NA_TRPL_C, String NA_DVY_PLASH_SLPNO, String DVY_PLA_DT){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		params.put("DVYAA_NA_TRPL_C", DVYAA_NA_TRPL_C);
		params.put("NA_DVY_PLASH_SLPNO", NA_DVY_PLASH_SLPNO);
		params.put("DVY_PLA_DT", DVY_PLA_DT);
		return getSqlSession().selectList("deliveryNoticeSeaDAO.getDeliveryDetailsForRollback", params);
	}	
	

	/*
	 * 배송예정서 롤백용
	 */
	public int rollbackDeliveryNoticeOrder(String SPYPL_NA_TRPL_C, String DVYAA_NA_TRPL_C, String NA_DVY_PLASH_SLPNO){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		params.put("DVYAA_NA_TRPL_C", DVYAA_NA_TRPL_C);
		params.put("NA_DVY_PLASH_SLPNO", NA_DVY_PLASH_SLPNO);
		return getSqlSession().insert("deliveryNoticeSeaDAO.rollbackDeliveryNoticeOrder", params);
	}
	
	/*
	 * 부가세계산
	 */
	public String getDvyVat(double dvyPlaQt, double dvyWrsUpr, String txtDsc){
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("DVY_PLA_QT", dvyPlaQt);
		param.put("DVY_WRS_UPR", dvyWrsUpr);
		param.put("TXT_DSC", txtDsc);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDvyVat : " + param);
		}
		return getSqlSession().selectOne("deliveryNoticeSeaDAO.getDvyVat", param);
	}


	public void downloadExcelDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("DDLY_YN", ddlyYn);
		params.put("RES_CODE", resCode);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryResult : " +  params.toString());
		}
		getSqlSession().select("deliveryNoticeSeaDAO.retrieveDeliveryResult", params, handler);
	}

	/*
	 *  배송예정 거래처별  Excel Detail Billing
	 */
	public List<Map<String, Object>> downloadExcelDetailDeliveryTradingPatnersBilling(DeliveryTradingPatnersSrhVO vo){
		List<Map<String, Object>> returnList = new ArrayList<>();
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDetailDeliveryTradingPatnersBilling : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeSeaDAO.downloadExcelDetailDeliveryTradingPatnersBilling", vo, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}	
	
}

