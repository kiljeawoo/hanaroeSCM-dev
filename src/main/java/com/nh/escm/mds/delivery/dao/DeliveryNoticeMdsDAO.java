package com.nh.escm.mds.delivery.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.mds.delivery.vo.DeliveryNoticeOrderDetailVO;
import com.nh.escm.mds.delivery.vo.DeliveryNoticeOrderPopUpVO;
import com.nh.escm.mds.delivery.vo.DeliveryNoticeOrderPrintVO;
import com.nh.escm.mds.delivery.vo.DeliveryNoticeOrderVO;
import com.nh.escm.mds.delivery.vo.DeliverySkusDVO;
import com.nh.escm.mds.delivery.vo.DeliverySkusMVO;
import com.nh.escm.mds.delivery.vo.DeliveryTcVO;
import com.nh.escm.mds.delivery.vo.DeliveryTradingPatnersDVO;
import com.nh.escm.mds.delivery.vo.DeliveryTradingPatnersExcelDetailVO;
import com.nh.escm.mds.delivery.vo.DeliveryTradingPatnersMVO;
import com.nh.escm.mds.delivery.vo.DeliveryTradingPatnersPrintDVO;
import com.nh.escm.mds.delivery.vo.DeliveryTradingPatnersSrhVO;
import com.nh.escm.mds.delivery.vo.DeliveryTrnrelVO;
import com.nh.escm.mds.delivery.vo.NoticeOrderDetailVO;
import com.nh.escm.mds.delivery.vo.NoticeOrderTempFileDetailVO;
import com.nh.escm.mds.delivery.vo.NoticeOrderTempFileMasterVO;
import com.nh.escm.mds.delivery.vo.NoticeOrderVO;
import com.nh.escm.mds.delivery.vo.NoticeVhcnoVO;

/**
 * 배송업무
 * 배송예정서 일반등록
 * @author swha
 *
 */

public class DeliveryNoticeMdsDAO extends AbstractDao {
	
	
	/*
	 * 물류센터리스트
	 */
	public List<DeliveryTcVO> retrieveTC(String trplC){
		Map<String, Object> param = new HashMap<String, Object>();		
		param.put("trplC", trplC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveTC : " + param);
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveTC", param);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getBizDtYn", param);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getBizDt", param);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getNaDvyPlashSlpno", params);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getOrder", param);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveOrderDetail", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveOrderDetail", params);
	}
	
	/* 공급처차량 관리 */
	public List<NoticeVhcnoVO> retrieveVhcno(String spyplNaTrplC){
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveVhcno : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveVhcno", params);
	}
	
	/* R1 사업장코드 조회 */
	public List<Map<String, Object>> retrieveR1NaBzplC(){
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveR1NaBzplC");
	}
	
	/* 배송예정서 기본 저장 */
	public int insertDeliveryNoticeOrder(DeliveryNoticeOrderVO dnoVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDeliveryNoticeOrder : " + dnoVo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.insertDeliveryNoticeOrder", dnoVo);
	}
	
	/* 배송예정서 상세 저장 */
	public int insertDeliveryNoticeOrderDetail(
			DeliveryNoticeOrderDetailVO dnodVo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDeliveryNoticeOrderDetail : " + dnodVo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.insertDeliveryNoticeOrderDetail", dnodVo);
	}
	
	/* 배송예정서 일반등록 (거래명세서 출력)  */
	public List<DeliveryNoticeOrderPrintVO> printDeliveryNoticeOrder(String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC, 
			String mbcoType, String truAgcyNaTrplC, String ozType){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		params.put("OZTYPE", ozType);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDeliveryNoticeOrder : " + params);
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.printDeliveryNoticeOrder", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.printDeliveryNoticeOrderDum", params);
	}
	
	/*
	 * 발주Master-배송예정서전표 번호 수정(NA_DVY_PLASH_SLPNO)
	 */
	public int updateMdsOrderSlpno(String odrNo, String naDvyPlashSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODR_NO", odrNo);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateOrderDvySlpno : " + params);
		}
		return getSqlSession().update("deliveryNoticeMdsDAO.updateMdsOrderSlpno", params);
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
		return getSqlSession().update("deliveryNoticeMdsDAO.updateOrderDetail", params);
	}
	
	/* 배송예정서 기본 조회 */
	public NoticeOrderVO getDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String mbcoType, String truAgcyNaTrplC) {
		Map<String, Object> params = new HashMap<String, Object>();		
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno); 
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC); 
				
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryNoticeOrder : " + params);
		}
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDeliveryNoticeOrder", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.getDeliveryNoticeOrderDetail", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.getDeliveryNoticeOrderDetail", params);
	}
	
	
	/*
	 * 배송예정서 기본 수정
	 */
	public int updateDeliveryNoticeOrder(DeliveryNoticeOrderVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeliveryNoticeOrder : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.updateDeliveryNoticeOrder", vo);
	}
	
	/*
	 * 배송예정서 상세 수정
	 */
	public int updateDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.updateDeliveryNoticeOrderDetail", vo);
	}
	
	/*
	 * 배송예정서 상세 삭제
	 */
	public int deleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.deleteDeliveryNoticeOrderDetail", vo);
	}
	
	/*
	 * 배송예정서 상세 삭제 수정
	 */
	public int updateDeleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDeleteDeliveryNoticeOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.updateDeleteDeliveryNoticeOrderDetail", vo);
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
		return getSqlSession().insert("deliveryNoticeMdsDAO.deleteDeliveryNoticeOrder", params);
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
		return getSqlSession().insert("deliveryNoticeMdsDAO.deleteDeliveryNoticeOrderDetailAll", params);
	}
	
	
	
	/*
	 * 배송예정서 TEMP Master 저장
	 */
	public int insertNoticeOrderMTmp(NoticeOrderTempFileMasterVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertNoticeOrderMTmp : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.insertNoticeOrderMTmp", vo);
	}
	
	/*
	 * 배송예정서 TEMP Detail 저장
	 */
	public int insertNoticeOrderDTmp(NoticeOrderTempFileDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertNoticeOrderDTmp : " + vo.toString());
		}
		return getSqlSession().insert("deliveryNoticeMdsDAO.insertNoticeOrderDTmp", vo);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveNoticeOrderMTmp", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveNoticeOrderDTmp", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveOrdersPopUp", params);
	}
	
	/*
	 *  배송예정 거래처별 조회
	 */
	public List<DeliveryTradingPatnersMVO> retrieveDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO srhVo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersM : " +  srhVo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersM", srhVo);
	}
	
	/*
	 *  배송예정 거래처별 조회 Count
	 */
	public int getDeliveryTradingPatnersMCount(DeliveryTradingPatnersSrhVO srhVo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersMCount : " +  srhVo.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersMCount", srhVo);
	}
	
	/*
	 *  배송예정 거래처별 조회 Sum
	 */
	public Map<String, Object> getDeliveryTradingPatnersMSum(DeliveryTradingPatnersSrhVO srhVo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliveryTradingPatnersMSum : " +  srhVo.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDeliveryTradingPatnersMSum", srhVo);
	}
	
	
	
	/*
	 *  배송예정 거래처별 조회 상세
	 */
	public List<DeliveryTradingPatnersDVO> retrieveDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, int start, int end, String sort, String slpDt, String naSlpno, String mbcoType, String truAgcyNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersD", params);
	}
	
	/*
	 *  배송예정 거래처별 조회 상세 Count
	 */
	public int getDeliveryTradingPatnersDCount(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String slpDt, String naSlpno, String mbcoType, String truAgcyNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("DVYAA_NA_TRPL_C", dvyaaNaTrplC);
		params.put("NA_DVY_PLASH_SLPNO", naDvyPlashSlpno);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		params.put("SLP_DT", slpDt);
		params.put("NA_SLPNO", naSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliveryTradingPatnersDCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersDCount", params);
	}
	
	/*
	 *  배송예정 거래처별 Excel
	 */
	public List<Map<String, Object>> downloadExcelDeliveryTradingPatners(DeliveryTradingPatnersSrhVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatners : " +  vo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.downloadExcelDeliveryTradingPatners", vo);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.printDeliveryTradingPatnersD", params);
	}
	
	/*
	 *  배송예정 거래처별 Grid Excel
	 */
	public List<DeliveryTradingPatnersMVO> downloadExcelDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO vo){
		vo.setStart(-1);
		vo.setEnd(-1);
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatnersM : " +  vo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersM", vo);
	}
	
	/*
	 *  배송예정 거래처별  Excel Detail
	 */
	public List<Map<String, Object>> downloadExcelDetailDeliveryTradingPatners(DeliveryTradingPatnersSrhVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDetailDeliveryTradingPatners : " +  vo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.downloadExcelDetailDeliveryTradingPatners", vo);
	}
	
	/*
	 *  배송예정 거래처별  Excel Detail
	 */
	public List<DeliveryTradingPatnersExcelDetailVO> downloadExcelDeliveryTradingPatnersE(DeliveryTradingPatnersSrhVO vo){
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliveryTradingPatnersE : " +  vo.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.downloadExcelDeliveryTradingPatnersE", vo);
	}
	
	/*
	 *  배송예정 상품별 조회 Master
	 */
	public List<DeliverySkusMVO> retrieveDeliverySkusM(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end, String mbcoType, String truAgcyNaTrplC ){
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
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliverySkusM : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveDeliverySkusM", params);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDeliverySkusMCount", params);
	}
		
	/*
	 *  배송예정 상품별 조회 Detail
	 */
	public List<DeliverySkusDVO> retrieveDeliverySkusD(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end, String mbcoType, String truAgcyNaTrplC ){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("start", start);
		params.put("end", end);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveDeliverySkusD : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveDeliverySkusD", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Detail Count
	 */
	public int getDeliverySkusDCount(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[], String mbcoType, String truAgcyNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", trpl);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getDeliverySkusDCount : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDeliverySkusDCount", params);
	}
	
	/*
	 *  배송예정 상품별 조회 Excel DownLoad
	 */
	public List<Map<String, Object>> downloadExcelDeliverySkus(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], String mbcoType, String truAgcyNaTrplC){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("WRS_GUBUN", wrsGubun);
		params.put("NA_WRS_C", naWrsC);
		params.put("DVY_PLA_DT_FR", dvyPlaDtFr);
		params.put("DVY_PLA_DT_TO", dvyPlaDtTo);
		params.put("TRPL", TRPL_C_ARR);
		params.put("MBCO_TYPE", mbcoType);
		params.put("TRU_AGCY_NA_TRPL_C", truAgcyNaTrplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDeliverySkus : " +  params.toString());
		}
		return getSqlSession().selectList("deliveryNoticeMdsDAO.downloadExcelDeliverySkus", params);
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
	public List<Map<String, Object>> sql_retrieveDeliveryDetailResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, int start, int end, String mbcoType, String truAgcyNaTrplC ){
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
		return getSqlSession().selectList("notice_result.sql_retrieveDeliveryDetailResult", params);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.searchTeam", params);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getBuyer", params);
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
		return getSqlSession().update("deliveryNoticeMdsDAO.deliveryNoticeCancelMProc", params);
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
		return getSqlSession().update("deliveryNoticeMdsDAO.deliveryNoticeCancelDProc", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.retrieveTrnrel", params);
		
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDeliveryMasterForRollback", params);
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
		return getSqlSession().selectList("deliveryNoticeMdsDAO.getDeliveryDetailsForRollback", params);
	}	
	

	/*
	 * 배송예정서 롤백용
	 */
	public int rollbackDeliveryNoticeOrder(String SPYPL_NA_TRPL_C, String DVYAA_NA_TRPL_C, String NA_DVY_PLASH_SLPNO){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		params.put("DVYAA_NA_TRPL_C", DVYAA_NA_TRPL_C);
		params.put("NA_DVY_PLASH_SLPNO", NA_DVY_PLASH_SLPNO);

		return getSqlSession().insert("deliveryNoticeMdsDAO.rollbackDeliveryNoticeOrder", params);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDvyVat", param);
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
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.chkNaWrsC", params);
	}
	/**
	 * 상품 유효성 (취급 상태 조회)
	 * @param naBzplc
	 * @param naWrsC
	 * @param cserCtrTpc
	 * @return
	 */
	public String getSPnAdPwRSPRuT(Map params){
			if(logger.isDebugEnabled()){
			logger.debug(">>> 		 : " +  params.toString());
		}
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getSPnAdPwRSPRuT", params);
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
		
		return (Integer) getSqlSession().selectOne("deliveryNoticeMdsDAO.checkAlcoholProduct", naWrsC) > 0;
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
		
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDeliveryRequestDate", params);
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
		
		return getSqlSession().selectList("deliveryNoticeMdsDAO.getOrderProduct", params);
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
		
		return getSqlSession().selectOne("deliveryNoticeMdsDAO.getDvyPlaDt", params);
	}
}