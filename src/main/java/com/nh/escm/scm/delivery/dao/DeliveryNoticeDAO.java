package com.nh.escm.scm.delivery.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.common.BillingMarkUpResultHandler;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderDetailVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderPopUpVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderPrintVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderVO;
import com.nh.escm.scm.delivery.vo.DeliverySkusDVO;
import com.nh.escm.scm.delivery.vo.DeliverySkusMVO;
import com.nh.escm.scm.delivery.vo.DeliveryTcVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersDVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersExcelDetailVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersMVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersPrintDVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersSrhVO;
import com.nh.escm.scm.delivery.vo.DeliveryTrnrelVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderDetailVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderTempFileDetailVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderTempFileMasterVO;
import com.nh.escm.scm.delivery.vo.NoticeOrderVO;
import com.nh.escm.scm.delivery.vo.NoticeVhcnoVO;

/**
 * 배송업무
 * 배송예정서 일반등록
 * @author swha
 *
 */

public class DeliveryNoticeDAO extends AbstractDao {
	
	
	/*
	 * 물류센터리스트
	 */
	public List<DeliveryTcVO> retrieveTC(String trplC){
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("trplC", trplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveTC : " + param);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveTC", param);
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
		return getSqlSession().selectOne("deliveryNoticeDAO.getBizDtYn", param);
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
		return getSqlSession().selectOne("deliveryNoticeDAO.getBizDt", param);
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
		return getSqlSession().selectOne("deliveryNoticeDAO.getNaDvyPlashSlpno", params);
	}
	
	
	
	/* 발주정보 조회 Master*/
	public NoticeOrderVO getOrder(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpNo, String ddlyYn) {
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		param.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		param.put("ODR_DT", odrDt); 
		param.put("ODR_SLPNO", odrSlpNo);
		param.put("DDLY_YN", ddlyYn);
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getOrder : " + param);
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.getOrder", param);
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
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveOrderDetail", params);
	}
	
	/* 발주정보 상품정보 Detail */
	public List<NoticeOrderDetailVO> retrieveOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String dvyPlaDt, String ddlyYn){	
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("DVY_PLA_DT", dvyPlaDt);
		params.put("DDLY_YN", ddlyYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDetail : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveOrderDetail", params);
	}
	
	/* 공급처차량 관리 */
	public List<NoticeVhcnoVO> retrieveVhcno(String spyplNaTrplC){
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveVhcno : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveVhcno", params);
	}
	
	/* R1 사업장코드 조회 */
	public List<Map<String, Object>> retrieveR1NaBzplC(){
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveR1NaBzplC");
	}
	
	/* 배송예정서 기본 저장 */
	public int insertDeliveryNoticeOrder(DeliveryNoticeOrderVO dnoVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDeliveryNoticeOrder : " + dnoVo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.insertDeliveryNoticeOrder", dnoVo);
	}
	
	/* 배송예정서 상세 저장 */
	public int insertDeliveryNoticeOrderDetail(
			DeliveryNoticeOrderDetailVO dnodVo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDeliveryNoticeOrderDetail : " + dnodVo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.insertDeliveryNoticeOrderDetail", dnodVo);
	}
	
	/* 배송예정서 일반등록 (거래명세서 출력)  */
	public List<DeliveryNoticeOrderPrintVO> printDeliveryNoticeOrder(String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC, 
			String mbcoType, String truAgcyNaTrplC, String ozType, String dvyPlaDt){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("OZTYPE", ozType);
		params.put("DVY_PLA_DT", dvyPlaDt);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDeliveryNoticeOrder : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.printDeliveryNoticeOrder", params);
	}
	
	/* 배송예정서 일반등록 (덤상품 거래명세서 출력)  */
	public List<DeliveryNoticeOrderPrintVO> printDeliveryNoticeOrderDum(String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC, 
			String mbcoType, String truAgcyNaTrplC, String ozType){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("OZTYPE", ozType);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDeliveryNoticeOrderDum : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.printDeliveryNoticeOrderDum", params);
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
		return getSqlSession().update("deliveryNoticeDAO.updateOrderDetail", params);
	}
	
	/* 배송예정서 기본 조회 */
	public NoticeOrderVO getDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String mbcoType, String truAgcyNaTrplC, String dvyPlaDt) {
		Map<String, Object> params = new HashMap<String, Object>();		
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno); 
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("DVY_PLA_DT", dvyPlaDt);  
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryNoticeOrder : " + params);
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.getDeliveryNoticeOrder", params);
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
		return getSqlSession().selectList("deliveryNoticeDAO.getDeliveryNoticeOrderDetail", params);
	}
	
	/* 배송예정서 상세 조회 */
	public List<NoticeOrderDetailVO> getDeliveryNoticeOrderDetail(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String dvyPlaDt, String ddlyYn, String cserCtrTpc, String mbcoType, String truAgcyNaTrplC) {	
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("DVY_PLA_DT", dvyPlaDt);
		params.put("DDLY_YN", ddlyYn);
		params.put("CSER_CTR_TPC", cserCtrTpc);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryNoticeOrderDetail : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.getDeliveryNoticeOrderDetail", params);
	}
	
	
	/*
	 * 배송예정서 기본 수정
	 */
	public int updateDeliveryNoticeOrder(DeliveryNoticeOrderVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeliveryNoticeOrder : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.updateDeliveryNoticeOrder", vo);
	}
	
	/*
	 * 배송예정서 상세 수정
	 */
	public int updateDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.updateDeliveryNoticeOrderDetail", vo);
	}
	
	/*
	 * 배송예정서 상세 삭제
	 */
	public int deleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.deleteDeliveryNoticeOrderDetail", vo);
	}
	
	/*
	 * 배송예정서 상세 삭제 수정
	 */
	public int updateDeleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeleteDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.updateDeleteDeliveryNoticeOrderDetail", vo);
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
		return getSqlSession().insert("deliveryNoticeDAO.deleteDeliveryNoticeOrder", params);
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
		return getSqlSession().insert("deliveryNoticeDAO.deleteDeliveryNoticeOrderDetailAll", params);
	}
	
	
	
	/*
	 * 배송예정서 TEMP Master 저장
	 */
	public int insertNoticeOrderMTmp(NoticeOrderTempFileMasterVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertNoticeOrderMTmp : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.insertNoticeOrderMTmp", vo);
	}
	
	/*
	 * 배송예정서 TEMP Detail 저장
	 */
	public int insertNoticeOrderDTmp(NoticeOrderTempFileDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertNoticeOrderDTmp : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeDAO.insertNoticeOrderDTmp", vo);
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
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveNoticeOrderMTmp", params);
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
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveNoticeOrderDTmp", params);
	}
	
	/*
	 *  발주번호_배송요청일 정보조회 팝업
	 */
	public List<DeliveryNoticeOrderPopUpVO> retrieveOrdersPopUp(String odrSlpno, String rvoplNaTrplC, String odrplNaTrplC, String dvyRqrDtFrom, String dvyRqrDtTo, String ddlyYn, String odrplNaTrplN, String rogoInfCrtDsc, String spyplNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODR_SLPNO", odrSlpno);
		params.put("RVOPL_NA_TRPL_C", rvoplNaTrplC);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TRPL_N", odrplNaTrplN);
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC); /* 직송조회용_공급처코드(180327) */
		params.put("DVY_RQR_DT_FROM", dvyRqrDtFrom);
		params.put("DVY_RQR_DT_TO", dvyRqrDtTo);
		params.put("DDLY_YN", ddlyYn);
		params.put("ROGO_INF_CRT_DSC", rogoInfCrtDsc); /* 수발주정보생성구분코드(180321) */
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrdersPopUp : " +  params);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveOrdersPopUp", params);
	}
	
	/*
	 *  배송예정 거래처별 조회
	 */
	public List<DeliveryTradingPatnersMVO> retrieveDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO srhVo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersM : " +  srhVo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveDeliveryTradingPatnersM", srhVo);
	}
	
	/*
	 *  배송예정 거래처별 조회 Count
	 */
	public int getDeliveryTradingPatnersMCount(DeliveryTradingPatnersSrhVO srhVo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersMCount : " +  srhVo.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.retrieveDeliveryTradingPatnersMCount", srhVo);
	}
	
	/*
	 *  배송예정 거래처별 조회 Sum
	 */
	public Map<String, Object> getDeliveryTradingPatnersMSum(DeliveryTradingPatnersSrhVO srhVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryTradingPatnersMSum : " +  srhVo.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.getDeliveryTradingPatnersMSum", srhVo);
	}
	
	
	
	/*
	 *  배송예정 거래처별 조회 상세
	 */
	public List<DeliveryTradingPatnersDVO> retrieveDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, int start, int end, String sort, String slpDt, String naSlpno, String mbcoType, String truAgcyNaTrplC, String dvyPlaDt){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("DVY_PLA_DT", dvyPlaDt);
		params.put("start", start);
		params.put("end", end);
		params.put("sort", sort);
		
		params.put("SLP_DT", slpDt);
		params.put("NA_SLPNO", naSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersD : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveDeliveryTradingPatnersD", params);
	}
	
	/*
	 *  배송예정 거래처별 조회 상세 Count
	 */
	public int getDeliveryTradingPatnersDCount(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String slpDt, String naSlpno, String mbcoType, String truAgcyNaTrplC, String dvyPlaDt){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("DVY_PLA_DT", dvyPlaDt);
		
		params.put("SLP_DT", slpDt);
		params.put("NA_SLPNO", naSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersDCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.retrieveDeliveryTradingPatnersDCount", params);
	}
	
	/*
	 *  배송예정 거래처별 Excel
	 */
	public void downloadExcelDeliveryTradingPatners(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatners : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDeliveryTradingPatners", vo, handler);
	}
	
	/*
	 *  배송예정 거래처별 조회 Print
	 */
	public List<DeliveryTradingPatnersMVO> printDeliveryTradingPatnersJustM(DeliveryTradingPatnersSrhVO srhVo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDeliveryTradingPatnersJustM : " +  srhVo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeDAO.printDeliveryTradingPatnersM", srhVo);
	}
	
	/*
	 *  배송예정 거래처별 Detail Print
	 */
	public List<DeliveryTradingPatnersPrintDVO> printDeliveryTradingPatnersD(String dvyaaNaTrplC, String spyplNaTrplC, String naDvyPlashSlpno, String mbcoType, String truAgcyNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDeliveryTradingPatnersD : " +  params);
		}
		return getSqlSession().selectList("deliveryNoticeDAO.printDeliveryTradingPatnersD", params);
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
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDeliveryTradingPatnersM", vo, handler);
	}
	
	/*
	 *  배송예정 거래처별  Excel Detail
	 */
	public void downloadExcelDetailDeliveryTradingPatners(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDetailDeliveryTradingPatners : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDetailDeliveryTradingPatners", vo, handler);
	}
	
	/*
	 *  배송예정 거래처별  Excel Detail
	 */
	public void downloadExcelDeliveryTradingPatnersE(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatnersE : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDeliveryTradingPatnersE", vo, handler);
	}
	
	/*
	 *  배송예정 상품별 조회 Master
	 */
	public List<DeliverySkusMVO> retrieveDeliverySkusM(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end, String mbcoType, String truAgcyNaTrplC, String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("DVY_PLASH_SLPNO_RDO", dvyPlashSlpnoRdo);
		params.put("NA_DVYPLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODRPL_NA_TRPL_RDO", odrplNaTrplRdo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliverySkusM : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveDeliverySkusM", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Master Count
	 */
	public int getDeliverySkusMCount(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[], String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", trpl);
		params.put("DVY_PLASH_SLPNO_RDO", dvyPlashSlpnoRdo);
		params.put("NA_DVYPLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODRPL_NA_TRPL_RDO", odrplNaTrplRdo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliverySkusMCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.getDeliverySkusMCount", params);
	}
		
	/*
	 *  배송예정 상품별 조회 Detail
	 */
	public List<DeliverySkusDVO> retrieveDeliverySkusD(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end, String mbcoType, String truAgcyNaTrplC, String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("DVY_PLASH_SLPNO_RDO", dvyPlashSlpnoRdo);
		params.put("NA_DVYPLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODRPL_NA_TRPL_RDO", odrplNaTrplRdo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliverySkusD : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveDeliverySkusD", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Detail Count
	 */
	public int getDeliverySkusDCount(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[], String mbcoType, String truAgcyNaTrplC, String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", trpl);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("DVY_PLASH_SLPNO_RDO", dvyPlashSlpnoRdo);
		params.put("NA_DVYPLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODRPL_NA_TRPL_RDO", odrplNaTrplRdo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliverySkusDCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.getDeliverySkusDCount", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Excel DownLoad
	 */
	public void downloadExcelDeliverySkus(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], String mbcoType, String truAgcyNaTrplC, String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("DVY_PLASH_SLPNO_RDO", dvyPlashSlpnoRdo);
		params.put("NA_DVYPLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODRPL_NA_TRPL_RDO", odrplNaTrplRdo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliverySkus : " +  params.toString());
		}
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDeliverySkus", params, handler);
	}
	
	/*
	 *  배송예정 결과 조회
	 */
	public List<Map<String, Object>> retrieveDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, int start, int end, String mbcoType, String truAgcyNaTrplC ){
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("DDLY_YN", ddlyYn);
		params.put("RES_CODE", resCode);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryResult : " +  params.toString());
		}
		return getSqlSession().selectList("notice_result.retrieveDeliveryResult", params);
	}
	
	/*
	 *  배송예정 결과 조회
	 */
	public void sql_retrieveDeliveryDetailResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, int start, int end, String mbcoType, String truAgcyNaTrplC, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("DDLY_YN", ddlyYn);
		params.put("RES_CODE", resCode);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryResult : " +  params.toString());
		}
		getSqlSession().select("notice_result.sql_retrieveDeliveryDetailResult", params, handler);
	}
	
	/*
	 *  배송예정 결과 조회 Count
	 */
	public int getDeliveryResultCount(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, String mbcoType, String truAgcyNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("DDLY_YN", ddlyYn);
		params.put("RES_CODE", resCode);
		params.put("TRPL", TRPL_C_ARR);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryResultCount : " +  params.toString());
		}
		return getSqlSession().selectOne("notice_result.getDeliveryResultCount", params);
	}
	
	/*
	 * 배송예정서 기본 수정
	 */
	public int reSendDeliveryNoticeOrder(
			String LS_CMENO, 
			String SPYPL_NA_TRPL_C, 
			String DVYAA_NA_TRPL_C, 
			String NA_DVY_PLASH_SLPNO){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("LS_CMENO", LS_CMENO);
		params.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		params.put("DVYAA_NA_TRPL_C", DVYAA_NA_TRPL_C);
		params.put("NA_DVY_PLASH_SLPNO", NA_DVY_PLASH_SLPNO);
		
		return getSqlSession().update("notice_result.reSendDeliveryNoticeOrder", params);
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
		return getSqlSession().selectOne("deliveryNoticeDAO.searchTeam", params);
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
		return getSqlSession().selectOne("deliveryNoticeDAO.getBuyer", params);
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
		return getSqlSession().update("deliveryNoticeDAO.deliveryNoticeCancelMProc", params);
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
		return getSqlSession().update("deliveryNoticeDAO.deliveryNoticeCancelDProc", params);
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
		return getSqlSession().selectList("deliveryNoticeDAO.retrieveTrnrel", params);
		
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
		return getSqlSession().selectOne("deliveryNoticeDAO.getDeliveryMasterForRollback", params);
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
		return getSqlSession().selectList("deliveryNoticeDAO.getDeliveryDetailsForRollback", params);
	}	
	

	/*
	 * 배송예정서 롤백용
	 */
	public int rollbackDeliveryNoticeOrder(String SPYPL_NA_TRPL_C, String DVYAA_NA_TRPL_C, String NA_DVY_PLASH_SLPNO){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		params.put("DVYAA_NA_TRPL_C", DVYAA_NA_TRPL_C);
		params.put("NA_DVY_PLASH_SLPNO", NA_DVY_PLASH_SLPNO);

		return getSqlSession().insert("deliveryNoticeDAO.rollbackDeliveryNoticeOrder", params);
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
		return getSqlSession().selectOne("deliveryNoticeDAO.getDvyVat", param);
	}
	
	/**
	 * 상품 유효성 (취급 상태 조회)
	 * @param naBzplc
	 * @param naWrsC
	 * @param cserCtrTpc
	 * @return
	 */
	public String chkNaWrsC(String naBzplc, String naWrsC, String cserCtrTpc){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_BZPLC", naBzplc);
		params.put("NA_WRS_C", naWrsC);
		params.put("CSER_CTR_TPC", cserCtrTpc);
	
		if(logger.isDebugEnabled()){
			logger.debug(">>> chkNaWrsC : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.chkNaWrsC", params);
	}
	/**
	 * 상품 유효성 (취급 상태 조회)
	 * @param naBzplc
	 * @param naWrsC
	 * @param cserCtrTpc
	 * @return
	 */
	public String getSPnAdPwRSPRuT(Map<String, Object> params){
			if(logger.isDebugEnabled()){
			logger.debug(">>> 		 : " +  params.toString());
		}
		if (params.get("DDLY_YN") == null || !"0".equals(params.get("DDLY_YN")) || !"1".equals(params.get("DDLY_YN"))) {
			params.put("DDLY_YN", "0");
		}
		return getSqlSession().selectOne("deliveryNoticeDAO.getSPnAdPwRSPRuT", params);
	}
	/**
	 * 전체 재전송
	 * @param naBzplc
	 * @param naWrsC
	 * @param cserCtrTpc
	 * @return
	 */
	public int deliveryNoticeAllCancelProc(String TRPL_C_ARR[], String dvy_pla_dt_fr, String dvy_pla_dt_to, String LS_CMENO){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("TRPL", TRPL_C_ARR);
		params.put("DVY_PLA_DT_FR", dvy_pla_dt_fr);
		params.put("DVY_PLA_DT_TO", dvy_pla_dt_to);
		params.put("LS_CMENO", LS_CMENO);

		return getSqlSession().update("notice_result.deliveryNoticeAllCancelProc", params);
	}
	
	/* 주류상품(공병, 공상자, 공파레트) 확인 */
	public boolean checkAlcoholProduct(String naWrsC) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> checkAlcoholProduct : " +  naWrsC);
		}
		
		return (Integer) getSqlSession().selectOne("deliveryNoticeDAO.checkAlcoholProduct", naWrsC) > 0;
	}
	
	public String getDeliveryRequestDate(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("odrplNaTrplC", odrplNaTrplC);
		params.put("odrplNaTeamC", odrplNaTeamC);
		params.put("odrDt", odrDt);
		params.put("odrSlpno", odrSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryRequestDate : " +  params);
		}
		
		return getSqlSession().selectOne("deliveryNoticeDAO.getDeliveryRequestDate", params);
	}
	
	public List<Map<String, Object>> getOrderProduct(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String dvyPlaDt, String spyplNaTrplC, String naOdrStsDsc) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("odrplNaTrplC", odrplNaTrplC);
		params.put("odrplNaTeamC", odrplNaTeamC);
		params.put("odrDt", odrDt);
		params.put("odrSlpno", odrSlpno);
		params.put("dvyPlaDt", dvyPlaDt);
		params.put("spyplNaTrplC", spyplNaTrplC);
		params.put("naOdrStsDsc", naOdrStsDsc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getOrderProduct : " +  params);
		}
		
		return getSqlSession().selectList("deliveryNoticeDAO.getOrderProduct", params);
	}
	
	public String getDvyPlaDt(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String dvyPlaDt) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("spyplNaTrplC", spyplNaTrplC);
		params.put("dvyaaNaTrplC", dvyaaNaTrplC);
		params.put("naDvyPlashSlpno", naDvyPlashSlpno);
		params.put("dvyPlaDt", dvyPlaDt);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDvyPlaDt : " +  params);
		}
		
		return getSqlSession().selectOne("deliveryNoticeDAO.getDvyPlaDt", params);
	}


	public void downloadExcelDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, int start, int end, String sort, String slpDt, String naSlpno, String mbcoType, String truAgcyNaTrplC, String dvyPlaDt, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("DVY_PLA_DT", dvyPlaDt);
		params.put("start", start);
		params.put("end", end);
		params.put("sort", sort);
		
		params.put("SLP_DT", slpDt);
		params.put("NA_SLPNO", naSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatnersD : " +  params.toString());
		}
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDeliveryTradingPatnersD", params, handler);
	}


	public void downloadExcelDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, int start, int end, String mbcoType, String truAgcyNaTrplC, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("DDLY_YN", ddlyYn);
		params.put("RES_CODE", resCode);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryResult : " +  params.toString());
		}
		getSqlSession().select("notice_result.downloadExcelDeliveryResult", params, handler);
	}


	/*
	 *  배송예정 거래처별  Excel Detail
	 */
	public List<Map<String, Object>> downloadExcelDetailDeliveryTradingPatnersBilling(DeliveryTradingPatnersSrhVO vo){
		List<Map<String, Object>> returnList = new ArrayList<>();
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDetailDeliveryTradingPatnersBilling : " +  vo.toString());
		}
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDetailDeliveryTradingPatnersBilling", vo, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}


	/*
	 *  배송예정 상품별 조회 Excel DownLoad Billing
	 */
	public List<Map<String, Object>> downloadExcelDeliverySkusBilling(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], String mbcoType, String truAgcyNaTrplC, String dvyPlashSlpnoRdo, String naDvyPlashSlpno, String odrplNaTrplRdo, String odrplNaTrplC){
		List<Map<String, Object>> returnList = new ArrayList<>();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("DVY_PLASH_SLPNO_RDO", dvyPlashSlpnoRdo);
		params.put("NA_DVYPLASH_SLPNO", naDvyPlashSlpno);
		params.put("ODRPL_NA_TRPL_RDO", odrplNaTrplRdo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliverySkusBilling : " +  params.toString());
		}
		getSqlSession().select("deliveryNoticeDAO.downloadExcelDeliverySkusBilling", params, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}
}