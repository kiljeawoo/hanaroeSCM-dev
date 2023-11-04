package com.nh.escm.scm.order.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.common.BillingMarkUpResultHandler;
import com.nh.escm.scm.order.vo.OrderOrdersBrVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyExcelVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyMasterPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersDailyTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersDetailVO;
import com.nh.escm.scm.order.vo.OrderOrdersMasterVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplExcelVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplMasterPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersOdrplTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplMasterPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersRvoplTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersSrhConditonVO;
import com.nh.escm.scm.order.vo.OrderOrdersTCVO;
import com.nh.escm.scm.order.vo.OrderOrdersTrnrelOdrplVO;
import com.nh.escm.scm.order.vo.OrderOrdersVanSeqVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsDetailPrintVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsExcelVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsFstVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsScdVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsTrdVO;
import com.nh.escm.scm.order.vo.OrderOrdersWrsVO;

/**
 * 수주업무
 * @author swha
 *
 */
public class OrderOrdersDAO   extends AbstractDao {
	
	/*#########################################################
	 * 화면ID : VAN_DS_SC_0100
	 * 화면명 :  수주등록 
	 #########################################################*/
	
	/* 수주번호 팝업 조회 */
	public List<OrderOrdersVanSeqVO> retrieveVanSeq(String odrSlpNo, String odrplNaTrplC, String rvoplNaTrplC, String rvoplNaTeamC, String dvyRqrDtFr, String dvyRqrDtTo, String tempYn, String dlvpnshtTempYn, String ddlyYn){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODR_SLPNO", odrSlpNo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("RVOPL_NA_TRPL_C", rvoplNaTrplC);
		params.put("RVOPL_NA_TEAM_C", rvoplNaTeamC);
		params.put("DVY_RQR_DT_FR", dvyRqrDtFr);
		params.put("DVY_RQR_DT_TO", dvyRqrDtTo);
		params.put("TEMP_YN", tempYn);
		params.put("DLVPNSHT_TEMP_YN", dlvpnshtTempYn);
		params.put("DDLY_YN", ddlyYn);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveVanSeq : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveVanSeq", params);
		
		
	}
	
	/* 수주등록 Master 등록 */
	public int insertOrderMaster(OrderOrdersMasterVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertOrderMaster : " + vo.toString());
		}
		return getSqlSession().insert("order.ordersDAO.insertOrderMaster", vo);
	}
	
	/* 수주등록 Master 조회*/
	public OrderOrdersMasterVO getOrderMaster(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String vanSeq){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("VAN_SEQ", vanSeq);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getOrderMaster : " + params);
		}
		return getSqlSession().selectOne("order.ordersDAO.getOrderMaster", params);
	}
	
	/* 수주등록 Master 수정 */
	public int updateOrderMaster(OrderOrdersMasterVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateOrderMaster : " + vo.toString());
		}
		return getSqlSession().update("order.ordersDAO.updateOrderMaster", vo);
	}
	
	/* 수주등록 Master 수주총액 */
	public Map<String, Object> getOrderTotalAmAndVat(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String vanSeq){
		
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("VAN_SEQ", vanSeq);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getOrderTotalAmAndVat : " + params);
		}
		return getSqlSession().selectOne("order.ordersDAO.getOrderMasterTotalAmAndVat", params);
	}
	

	/* 수주등록 상품정보 Detail */
	public List<OrderOrdersDetailVO> retrieveOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String vanSeq, String dvyRrqDt){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		params.put("VAN_SEQ", vanSeq);
		params.put("DVY_RQR_DT", dvyRrqDt);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDetail : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderDetail", params);
	}
	
	/* 수주등록 상품정보 저장 */
	public int insertOrderDetail(OrderOrdersDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertOrderDetail : " + vo.toString());
		}
		return getSqlSession().insert("order.ordersDAO.insertOrderDetail", vo);
	}
	
	/* 수주등록 상품정보 수정 */
	public int updateOrderDetail(OrderOrdersDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateOrderDetail : " + vo.toString());
		}
		return getSqlSession().update("order.ordersDAO.updateOrderDetail", vo);
	}
	
	/* 수주등록 상품정보 삭제 */
	public int deleteOrderDetail(OrderOrdersDetailVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteOrderDetail : " + vo.toString());
		}
		return getSqlSession().delete("order.ordersDAO.deleteOrderDetail", vo);
	}
	
	/* 수주등록 상품정보 전체삭제 */
	public int deleteOrderDetailAll(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteOrderDetailAll : " + params);
		}
		return getSqlSession().delete("order.ordersDAO.deleteOrderDetailAll", params);
	}
	
	/*#########################################################
	 * 화면ID : VAN_DS_SC_0110
	 * 화면명 :  수주내역 조회
	 #########################################################*/
	/* 일자별 First List */
	public List<OrderOrdersDailyFstVO> retrieveOrderDailyFst(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDailyFst : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderDailyFst", vo);
	}
	
	/* 일자별 First List Count */
	public int getOrderDailyCountFst(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDailyCountFst : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderDailyCountFst", vo);
	}
	
	/* 일자별 Second List */
	public List<OrderOrdersDailyScdVO> retrieveOrderDailyScd(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDailyScd : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderDailyScd", vo);
	}
	
	/* 일자별 Second List Count */
	public int getOrderDailyCountScd(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDailyCountScd : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderDailyCountScd", vo);
	}
	
	/*일자별 Third List */
	public List<OrderOrdersDailyTrdVO> retrieveOrderDailyTrd(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderDailyTrd : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderDailyTrd", params);
	}
	
	/* 일자별 Excel download */
	public List<OrderOrdersDailyExcelVO> downloadExcelDaily(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelDaily : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.downloadExcelDaily", vo);
	}
	
	/* 일자별 Master Print */
	public List<OrderOrdersDailyMasterPrintVO> printDailyOrderMaster(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDailyOrderMaster : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.printDailyOrderMaster", vo);
	}
	
	/* 일자별 Detail Print */
	public List<OrderOrdersDailyDetailPrintVO> printDailyOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> printDailyOrderDetail : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.printDailyOrderDetail", params);
	}
	
	
	
	/* 발주처별 First List */
	public List<OrderOrdersOdrplFstVO> retrieveOrderOdrplFst(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderOdrplFst : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderOdrplFst", vo);
	}
	
	/* 발주처별 First List Count */
	public int getOrderOdrplCountFst(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderOdrplCountFst : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderOdrplCountFst", vo);
	}
	
	/* 발주처별 Second List */
	public List<OrderOrdersOdrplScdVO> retrieveOrderOdrplScd(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderOdrplScd : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderOdrplScd", vo);
	}
	
	/* 발주처별 Second List Count */
	public int getOrderOdrplCountScd(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderOdrplCountScd : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderOdrplCountScd", vo);
	}
	
	/* 발주처별 Third List */
	public List<OrderOrdersOdrplTrdVO> retrieveOrderOdrplTrd(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderOdrplTrd : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderOdrplTrd", params);
	}
	
	/* 발주처별 Excel download */
	public List<OrderOrdersOdrplExcelVO> downloadExcelOdrpl(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelOdrpl : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.downloadExcelOdrpl", vo);
	}
	
	/* 발주처별 Master Print */
	public List<OrderOrdersOdrplMasterPrintVO> printOdrplOrderMaster(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> printOdrplOrderMaster : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.printOdrplOrderMaster", vo);
	}
	
	/* 발주처별 Detail Print */
	public List<OrderOrdersOdrplDetailPrintVO> printOdrplOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		if(logger.isDebugEnabled()){
			logger.debug(">>> printOdrplOrderDetail : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.printOdrplOrderDetail", params);
	}
	
	/* 소속사업장별 First List */
	public List<OrderOrdersRvoplFstVO> retrieveOrderRvoplFst(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderRvoplFst : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderRvoplFst", vo);
	}
	
	/* 소속사업장별 First List Count */
	public int getOrderRvoplCountFst(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderRvoplCountFst : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderRvoplCountFst", vo);
	}
	
	/* 소속사업장별 Second List */
	public List<OrderOrdersRvoplScdVO> retrieveOrderRvoplScd(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderRvoplScd : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderRvoplScd", vo);
	}
	
	/* 소속사업장별 Second List Count */
	public int getOrderRvoplCountScd(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderRvoplCountScd : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderRvoplCountScd", vo);
	}
	
	/* 소속사업장별 Second Total */
	public Map<String, Object> retrieveOrderRvoplTotalScd(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderRvoplTotalScd : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderRvoplTotalScd", vo);
	}
	
	/* 소속사업장별 Third List */
	public List<OrderOrdersRvoplTrdVO> retrieveOrderRvoplTrd(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderRvoplTrd : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderRvoplTrd", params);
	}
	
	/* 소속사업장별 Excel download */
	public void downloadExcelRvopl(OrderOrdersSrhConditonVO vo, ExcelFileMakerResultHandler handler){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelOdrpl : " + vo.toString());
		}
		getSqlSession().select("order.ordersDAO.downloadExcelRvopl", vo, handler);
	}
	
	/*  소속사업장별 Master Print */
	public List<OrderOrdersRvoplMasterPrintVO> printRvoplOrderMaster(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> printRvoplOrderMaster : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.printRvoplOrderMaster", vo);
	}
	
	/* 소속사업장별 Detail Print */
	public List<OrderOrdersRvoplDetailPrintVO> printRvoplOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("ODR_DT", odrDt);
		params.put("ODR_SLPNO", odrSlpno);
		if(logger.isDebugEnabled()){
			logger.debug(">>> printRvoplOrderDetail : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.printRvoplOrderDetail", params);
	}
	
	/*  상품별 First List */
	public List<OrderOrdersWrsFstVO> retrieveOrderWrsFst(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderWrsFst : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderWrsFst", vo);
	}
	
	/* 상품별 First List Count */
	public int getOrderWrsCountFst(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderWrsCountFst : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderWrsCountFst", vo);
	}
	
	/*  상품별 Second List */
	public List<OrderOrdersWrsScdVO> retrieveOrderWrsScd(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderWrsScd : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderWrsScd", vo);
	}
	
	/* 상품별 Second List Count */
	public int getOrderWrsCountScd(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderWrsCountScd : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderWrsCountScd", vo);
	}
	
	/* 상품별 Second List Total */
	public Map<String, Object> retrieveOrderWrsTotalScd(OrderOrdersSrhConditonVO vo) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderWrsTotalScd : " + vo.toString());
		}
		return getSqlSession().selectOne("order.ordersDAO.retrieveOrderWrsTotalScd", vo);
	}
	
	/* 상품별 Third List */
	public List<OrderOrdersWrsTrdVO> retrieveOrderWrsTrd(String odrplNaTrplC, String odrplNaTeamC, String searchPeriod, String calFrom, String calTo, String naWrsC, String vhcno, String TRPL_C_ARR[]){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("odrplNaTrplC", odrplNaTrplC);
		params.put("odrplNaTeamC", odrplNaTeamC);
		params.put("searchPeriod", searchPeriod);
		params.put("calFrom", calFrom);
		params.put("calTo", calTo);
		params.put("naWrsC", naWrsC);
		params.put("vhcno", vhcno);
		params.put("trpl_c", TRPL_C_ARR);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveOrderWrsTrd : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveOrderWrsTrd", params);
	}
	
	
	/* 상품별별 Excel download */
	public List<OrderOrdersWrsExcelVO> downloadExcelWrs(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelWrs : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.downloadExcelWrs", vo);
	}
	
	/*  상품별 Master Print */
	public List<OrderOrdersWrsFstVO> printWrsOrderMaster(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> printWrsOrderMaster : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.printWrsOrderMaster", vo);
	}
	
	/*  상품별 Detail Print */
	public List<OrderOrdersWrsDetailPrintVO> printWrsOrderDetail(OrderOrdersSrhConditonVO vo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> printWrsOrderDetail : " + vo.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.printWrsOrderDetail", vo);
	}
	
	
	/**
	 * TC발주 엑셀다운로드 
	 * @param calFrom
	 * @param calTo
	 * @param odrplNaTrplC
	 * @param nsUsrSysKdc
	 * @param TRPL_C_ARR
	 * @param naWrsC
	 * @return
	 */
	public void excelTCOrders(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC, ExcelFileMakerResultHandler handler){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("CAL_FROM", calFrom);
		params.put("CAL_TO", calTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("NA_USR_SYS_KDC", nsUsrSysKdc);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("NA_WRS_C", naWrsC);
		getSqlSession().select("order_tc.excelTCOrders", params, handler);
	}
	
	
	/*  TC 발주내역조회 */
	public List<OrderOrdersTCVO> retrieveTCOrders(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC, int start, int end){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("CAL_FROM", calFrom);
		params.put("CAL_TO", calTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("NA_USR_SYS_KDC", nsUsrSysKdc);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("NA_WRS_C", naWrsC);
		params.put("start", start);
		params.put("end", end);
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveTCOrders : " + params.toString());
		}
		return getSqlSession().selectList("order_tc.retrieveTCOrders", params);
	}
	
	/*  TC 발주내역조회 Count */
	public int getTCOrdersCount(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("CAL_FROM", calFrom);
		params.put("CAL_TO", calTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("NA_USR_SYS_KDC", nsUsrSysKdc);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("NA_WRS_C", naWrsC);
		if(logger.isDebugEnabled()){
			logger.debug(">>> getTCOrdersCount : " + params.toString());
		}
		return getSqlSession().selectOne("order_tc.retrieveTCOrdersCount", params);
	}
	
	/*배송지 조회 팝업 */
	public List<Map<String, Object>> searchDVYAA(String odrplNaTrplC, 
			String searchType, String searchText) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("odrplNaTrplC", odrplNaTrplC);
		params.put("searchType", searchType);
		params.put("searchText", searchText);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> searchDVYAA : " + params.toString());
		}
		
		return getSqlSession().selectList("order.ordersDAO.searchDVYAA", params);
	}
	
	/**
	 * 상품조회
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<OrderOrdersWrsVO> searchWRS(String searchType,String searchText, String ODRPL_NA_TRPL_C, String odrpl_na_team_c, String prgr_c, String ddly_yn, String trplC, String chkDate, String cserCtrTpc, String orginTrplS, Map<String, Object> trnrelParams) {
		/*
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchtype", searchType);
		params.put("searchtext", searchText);
		if(StringUtils.isEmpty(chkDate)){
			params.put("CHK_DATE", DateUtil.getCurrentDate("yyyyMMdd"));
		}else{
			params.put("CHK_DATE", chkDate);
		}
		
		params.put("CSER_CTR_TPC", cserCtrTpc);
		params.put("ODRPL_NA_TRPL_C", ODRPL_NA_TRPL_C);
		params.put("ODRPL_NA_TEAM_C", odrpl_na_team_c);
		params.put("PRGR_C", prgr_c);
		params.put("DDLY_YN", ddly_yn);
		params.put("trplC", trplC);
		params.put("ORGIN_TRPL_S", orginTrplS);
		*/
		
		trnrelParams.put("searchtype", searchType);
		trnrelParams.put("searchtext", searchText);
		if(StringUtils.isEmpty(chkDate)){
			trnrelParams.put("CHK_DATE", DateUtil.getCurrentDate("yyyyMMdd"));
		}else{
			trnrelParams.put("CHK_DATE", chkDate);
		}
		
		trnrelParams.put("CSER_CTR_TPC", cserCtrTpc);
		trnrelParams.put("ODRPL_NA_TRPL_C", ODRPL_NA_TRPL_C);
		trnrelParams.put("ODRPL_NA_TEAM_C", odrpl_na_team_c);
		trnrelParams.put("PRGR_C", prgr_c);
		trnrelParams.put("DDLY_YN", ddly_yn);
		trnrelParams.put("trplC", trplC);
		trnrelParams.put("ORGIN_TRPL_S", orginTrplS);
		
		
		
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> searchWRS : " + trnrelParams.toString());
		}
		
		return getSqlSession().selectList("order.ordersDAO.searchWRS", trnrelParams);
	}

	/**
	 * 상품조회 like 검색 추가
	 * @param searchType
	 * @param searchText
	 * @return
	 */
	public List<OrderOrdersWrsVO> searchWRS(String searchType,String searchText, String ODRPL_NA_TRPL_C, String odrpl_na_team_c, String prgr_c, String ddly_yn, String trplC, String chkDate, String cserCtrTpc, String orginTrplS, Map<String, Object> trnrelParams, String like) {
		
		trnrelParams.put("searchtype", searchType);
		trnrelParams.put("searchtext", searchText);
		if(StringUtils.isEmpty(chkDate)){
			trnrelParams.put("CHK_DATE", DateUtil.getCurrentDate("yyyyMMdd"));
		}else{
			trnrelParams.put("CHK_DATE", chkDate);
		}
		
		trnrelParams.put("CSER_CTR_TPC", cserCtrTpc);
		trnrelParams.put("ODRPL_NA_TRPL_C", ODRPL_NA_TRPL_C);
		trnrelParams.put("ODRPL_NA_TEAM_C", odrpl_na_team_c);
		trnrelParams.put("PRGR_C", prgr_c);
		trnrelParams.put("DDLY_YN", ddly_yn);
		trnrelParams.put("trplC", trplC);
		trnrelParams.put("ORGIN_TRPL_S", orginTrplS);
		trnrelParams.put("like", like);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> searchWRS : " + trnrelParams.toString());
		}
		
		return getSqlSession().selectList("order.ordersDAO.searchWRS", trnrelParams);
	}
	
	/**
	 * 상품 조회 값이 없을 경우 계약관계 조회
	 * @param odrplNaTrplC
	 * @param cserCtrTpc
	 * @param naWrsC
	 * @return
	 */
	public List<String> retrieveWrsCtrTpc(String odrplNaTrplC, String cserCtrTpc, String searchtype, String searchtext) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("CSER_CTR_TPC", cserCtrTpc);
		params.put("searchtype", searchtype);
		params.put("searchtext", searchtext);
		
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveWrsCtrTpc : " + params.toString());
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveWrsCtrTpc", params);
	}
	
	/**
	 * 상품대분류조회
	 * @return
	 */
	public List<Map<String, Object>> retrieveWrsClfL() {
		return getSqlSession().selectList("order.ordersDAO.retrieveWrsClfL");
	}
	
	/**
	 * 상품중분류조회
	 * @param NA_WRS_LCLC
	 * @return
	 */
	public List<Map<String, Object>> retrieveWrsClfM(String NA_WRS_LCLC) {
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveWrsClfM : " + NA_WRS_LCLC);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveWrsClfM", NA_WRS_LCLC);
	}
	
	/**
	 * 거래관계 정보조회 팝업(발주처 조회 팝업)
	 * @param cserCtrTpc
	 * @param spyTpc
	 * @param naRgnC
	 * @param mngtNaTrTpc
	 * @param naWrsLclc
	 * @param naWrsMclc
	 * @return
	 */
	public List<OrderOrdersTrnrelOdrplVO> retrieveTrnrelOdrpl(String odrplType, String odrpl, String cserCtrTpcType, String mngtNaTrTpcType, String wmcLocRgnDsc, String htLovRgnC, String wrsLclc, String wrsMclc, String spyTpcType, String[] TRPL_C_ARR) {
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("ODRPL_TYPE",odrplType);
		params.put("ODRPL", odrpl);
		params.put("CSER_CTR_TPC_TYPE", cserCtrTpcType);
		params.put("MNGT_NA_TR_TPC_TYPE", mngtNaTrTpcType);
		params.put("WMC_LOC_RGN_DSC", wmcLocRgnDsc);
		params.put("HT_LOV_RGN_C", htLovRgnC);
		params.put("WRS_LCLC", wrsLclc);
		params.put("WRS_MCLC", wrsMclc);
		params.put("SPY_TYPC_TYPE", spyTpcType);
		params.put("trplC", TRPL_C_ARR);
		params.put("CURRENT_DATE", DateUtil.getCurrentDate("yyyyMMdd"));
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveTrnrelOdrpl : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveTrnrelOdrpl", params);
	}
	
	public List<Map<String, Object>> getTrnrel(String odrplNaTrplC, String odrplNaTeamC, String spyplNaTrplC, String spyplNaTeamC, String cserCtrTpc){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("ODRPL_NA_TEAM_C", odrplNaTeamC);
		params.put("SPYPL_NA_TRPL_C", spyplNaTrplC);
		params.put("SPYPL_NA_TEAM_C", spyplNaTeamC);
		params.put("CSER_CTR_TPC", cserCtrTpc);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> getTrnrel : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.getTrnrel", params);
	}
	
	/**
	 * 사무소 조회 팝업
	 * @param searchType
	 * @param searchTxt
	 * @param trplC
	 * @return
	 */
	public List<OrderOrdersBrVO> retrieveBr(String searchType, String searchTxt, String trplC) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchType",searchType);
		params.put("searchTxt", searchTxt);
		params.put("trplC", trplC);
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> retrieveBr : " + params);
		}
		return getSqlSession().selectList("order.ordersDAO.retrieveBr", params);
	}
	
	public void downloadExcelWrs_new(OrderOrdersSrhConditonVO vo, ExcelFileMakerResultHandler handler){
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelWrs_new : " + vo.toString());
		}
		getSqlSession().select("order.ordersDAO.downloadExcelWrs_new", vo, handler);
	}

	/* 소속사업장별 Excel download Billing*/
	public List<Map<String, Object>> downloadExcelRvoplBilling(OrderOrdersSrhConditonVO vo){
		List<Map<String, Object>> returnList = new ArrayList<>();
		
		if(logger.isDebugEnabled()){
			logger.debug(">>> downloadExcelRvoplBilling : " + vo.toString());
		}
		getSqlSession().select("order.ordersDAO.downloadExcelRvoplBilling", vo, new BillingMarkUpResultHandler(returnList));
		return returnList;
	}

	/**
	 * TC발주 엑셀다운로드  Billing
	 * @param calFrom
	 * @param calTo
	 * @param odrplNaTrplC
	 * @param nsUsrSysKdc
	 * @param TRPL_C_ARR
	 * @param naWrsC
	 * @return
	 */
	public int excelTCOrdersBilling(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC){
		
		List<Map<String, Object>> returnList = new ArrayList<>();
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("CAL_FROM", calFrom);
		params.put("CAL_TO", calTo);
		params.put("ODRPL_NA_TRPL_C", odrplNaTrplC);
		params.put("NA_USR_SYS_KDC", nsUsrSysKdc);
		params.put("TRPL_C", TRPL_C_ARR);
		params.put("NA_WRS_C", naWrsC);
		return getSqlSession().selectOne("order_tc.excelTCOrdersBilling", params);
	}
}
