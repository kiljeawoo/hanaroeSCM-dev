package com.nh.escm.scm.order.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.scm.order.dao.OrderOrdersDAO;
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
@Service
public class OrderOrdersService  extends AbstractService {
	@Autowired
	private OrderOrdersDAO ordersDao;
	
/*#########################################################
 * 화면ID : VAN_DS_SC_0100
 * 화면명 :  수주등록 
 #########################################################*/
	
	/* 수주번호 팝업 조회 */
	public List<OrderOrdersVanSeqVO> retrieveVanSeq(String odrSlpNo, String odrplNaTrplC, String rvoplNaTrplC, String rvoplNaTeamC, String dvyRqrDtFr, String dvyRqrDtTo, String tempYn, String dlvpnshtTempYn, String ddlyYn) {
		try {
			List<OrderOrdersVanSeqVO> list = ordersDao.retrieveVanSeq(odrSlpNo, odrplNaTrplC, rvoplNaTrplC, rvoplNaTeamC, dvyRqrDtFr, dvyRqrDtTo, tempYn, dlvpnshtTempYn, ddlyYn);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*수주등록 저장*/
	public boolean saveOrder(OrderOrdersMasterVO mvo){
		try{		
			
			
			
			//상세 저장
			if(mvo.getDetailVoList() != null && mvo.getDetailVoList().size() > 0){
				
				if(StringUtils.equals("DeleteAfterInsert", mvo.getDML_CODE())){
					deleteOrderDetailAll(mvo.getODRPL_NA_TRPL_C(), mvo.getODRPL_NA_TEAM_C(), mvo.getODR_DT(), mvo.getODR_SLPNO());
				}
				for(OrderOrdersDetailVO dvo : mvo.getDetailVoList()){
					switch(dvo.getDML_CODE()){
						case "INSERT" :
							insertOrderDetail(dvo);
							break;
						case "UPDATE" : 
							updateOrderDetail(dvo);
							break;
						case "DELETE" :
							deleteOrderDetail(dvo);
							break;
						case "NORMAL" : 
							break;
						default : 
							logger.error("[ saveOrder ] Detail DML CODE IS NULL!!!");
							throw new AppetizerException("[ saveOrder ] Detail DML CODE IS NULL!!!");
					}
				}
				
				//기본 저장
				if(!StringUtils.isEmpty(mvo.getDML_CODE())){
					switch(mvo.getDML_CODE()){
						case "INSERT" : 
							insertOrderMaster(mvo);
							break;
						case "DeleteAfterInsert" :
						case "UPDATE" :
							updateOrderMaster(mvo);
							break;
						case "NORMAL" : 
							break;
						default : 
							logger.error("[ saveOrder ] Master DML CODE IS NULL!!!");
							throw new AppetizerException("[ saveOrder ] Master DML CODE IS NULL!!!");
					}
				}
				
				
			}
			return true;
			
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/* Master 등록 */
	public int insertOrderMaster(OrderOrdersMasterVO vo) {
		try{
			return ordersDao.insertOrderMaster(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/* 수주등록 조회 */
	public OrderOrdersMasterVO getOrderMaster(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String vanSeq) {
		try {
			OrderOrdersMasterVO vo = ordersDao.getOrderMaster(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, vanSeq);
			Map<String, Object> resultMap = ordersDao.getOrderTotalAmAndVat(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, vanSeq);
			if(vo != null){
				vo.setTOTAL_ODR_AM(Integer.parseInt(resultMap.get("TOTAL_ODR_AM").toString()));
				vo.setTOTAL_ODR_VAT(Integer.parseInt(resultMap.get("TOTAL_ODR_VAT").toString()));
			}
			return vo;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* Master 수정 */
	public int updateOrderMaster(OrderOrdersMasterVO vo) {
		try{
			return ordersDao.updateOrderMaster(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 수주등록 상품정보 리스트 조회*/
	public List<OrderOrdersDetailVO> retrieveOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String vanSeq, String dvyRrqDt) {
		try {
			List<OrderOrdersDetailVO>  list = ordersDao.retrieveOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, vanSeq, dvyRrqDt);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 상품정보 등록 */
	public int insertOrderDetail(OrderOrdersDetailVO vo) {
		try{
			return ordersDao.insertOrderDetail(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 상품정보 수정 */
	public int updateOrderDetail(OrderOrdersDetailVO vo) {
		try{
			return ordersDao.updateOrderDetail(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 상품정보 삭제 */
	public int deleteOrderDetail(OrderOrdersDetailVO vo) {
		try{
			return ordersDao.deleteOrderDetail(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 상품정보 전체삭제 */
	public int deleteOrderDetailAll(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try{
			return ordersDao.deleteOrderDetailAll(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	/*#########################################################
	 * 화면ID : VAN_DS_SC_0110
	 * 화면명 :  수주내역조회
	 #########################################################*/
	
	/* 일자별 기준 조회 First List */
	public List<OrderOrdersDailyFstVO> retrieveOrderDailyFst(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersDailyFstVO>  list = ordersDao.retrieveOrderDailyFst(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*일자별 기준 조회 First List Count*/
	public int retrieveOrderDailyCountFst(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderDailyCountFst(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 일자별 기준 조회 Second List */
	public List<OrderOrdersDailyScdVO> retrieveOrderDailyScd(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersDailyScdVO>  list = ordersDao.retrieveOrderDailyScd(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 일자별 기준 조회 Second List Count*/
	public int retrieveOrderDailyCountScd(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderDailyCountScd(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 일자별 기준 조회 Third List */
	public List<OrderOrdersDailyTrdVO> retrieveOrderDailyTrd(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			List<OrderOrdersDailyTrdVO>  list = ordersDao.retrieveOrderDailyTrd(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 일자별 기준 조회 Excel downLoad */
	public List<OrderOrdersDailyExcelVO> downloadExcelDaily(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersDailyExcelVO>  list = ordersDao.downloadExcelDaily(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  일자별 기준 조회 Master Print */
	public List<OrderOrdersDailyMasterPrintVO> printDailyOrderMaster(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersDailyMasterPrintVO> list = new ArrayList<OrderOrdersDailyMasterPrintVO>();
			List<OrderOrdersDailyMasterPrintVO>  tmpList = ordersDao.printDailyOrderMaster(vo);
			
			for(OrderOrdersDailyMasterPrintVO item : tmpList){
				String odrplNaTrplC = item.getODRPL_NA_TRPL_C();
				String odrplNaTeamC = item.getODRPL_NA_TEAM_C();
				String odrDt = item.getODR_DT();
				String odrSlpno = item.getODR_SLPNO();
				List<OrderOrdersDailyDetailPrintVO> wrsList = printDailyOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
				item.setList(wrsList);
				list.add(item);
			}
			
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  일자별 기준 조회 Detail Print */
	public List<OrderOrdersDailyDetailPrintVO> printDailyOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			List<OrderOrdersDailyDetailPrintVO>  list = ordersDao.printDailyOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 발주처별 기준 조회 First List */
	public List<OrderOrdersOdrplFstVO> retrieveOrderOdrplFst(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersOdrplFstVO>  list = ordersDao.retrieveOrderOdrplFst(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*발주처별 기준 조회 First List Count*/
	public int retrieveOrderOdrplCountFst(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderOdrplCountFst(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 발주처별 기준 조회 Second List */
	public List<OrderOrdersOdrplScdVO> retrieveOrderOdrplScd(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersOdrplScdVO>  list = ordersDao.retrieveOrderOdrplScd(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*발주처별 기준 조회 Second List Count*/
	public int retrieveOrderOdrplCountScd(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderOdrplCountScd(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 발주처별 기준 조회  Third List */
	public List<OrderOrdersOdrplTrdVO> retrieveOrderOdrplTrd(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			List<OrderOrdersOdrplTrdVO>  list = ordersDao.retrieveOrderOdrplTrd(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  발주처별 기준 조회 Excel downLoad */
	public List<OrderOrdersOdrplExcelVO> downloadExcelOdrpl(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersOdrplExcelVO>  list = ordersDao.downloadExcelOdrpl(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  발주처별 기준 조회 Master Print */
	public List<OrderOrdersOdrplMasterPrintVO> printOdrplOrderMaster(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersOdrplMasterPrintVO> list = new ArrayList<OrderOrdersOdrplMasterPrintVO>();
			List<OrderOrdersOdrplMasterPrintVO>  tmpList = ordersDao.printOdrplOrderMaster(vo);
			
			for(OrderOrdersOdrplMasterPrintVO item : tmpList){
				String odrplNaTrplC = item.getODRPL_NA_TRPL_C();
				String odrplNaTeamC = item.getODRPL_NA_TEAM_C();
				String odrDt = item.getODR_DT();
				String odrSlpno = item.getODR_SLPNO();
				List<OrderOrdersOdrplDetailPrintVO> wrsList = printOdrplOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
				item.setList(wrsList);
				list.add(item);
			}
			
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  발주처별 기준 조회 Detail Print */
	public List<OrderOrdersOdrplDetailPrintVO> printOdrplOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			List<OrderOrdersOdrplDetailPrintVO>  list = ordersDao.printOdrplOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 소속사업장별 조회 First List */
	public List<OrderOrdersRvoplFstVO> retrieveOrderRvoplFst(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersRvoplFstVO>  list = ordersDao.retrieveOrderRvoplFst(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 소속사업장별 조회 First List Count*/
	public int retrieveOrderRvoplCountFst(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderRvoplCountFst(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 소속사업장별 조회 Second List */
	public List<OrderOrdersRvoplScdVO> retrieveOrderRvoplScd(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersRvoplScdVO>  list = ordersDao.retrieveOrderRvoplScd(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 소속사업장별 조회 Second List Count*/
	public int retrieveOrderRvoplCountScd(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderRvoplCountScd(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 소속사업장별 조회 Second List Total*/
	public Map<String, Object> retrieveOrderRvoplTotalScd(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.retrieveOrderRvoplTotalScd(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 소속사업장별 기준 조회  Third List */
	public List<OrderOrdersRvoplTrdVO> retrieveOrderRvoplTrd(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			List<OrderOrdersRvoplTrdVO>  list = ordersDao.retrieveOrderRvoplTrd(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  소속사업장별 Excel downLoad */
	public void downloadExcelRvopl(OrderOrdersSrhConditonVO vo, ExcelFileMakerResultHandler handler) {
		ordersDao.downloadExcelRvopl(vo, handler);
	}
	
	/*  소속사업장별 기준 조회 Master Print */
	public List<OrderOrdersRvoplMasterPrintVO> printRvopllOrderMaster(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersRvoplMasterPrintVO> list = new ArrayList<OrderOrdersRvoplMasterPrintVO>();
			List<OrderOrdersRvoplMasterPrintVO>  tmpList = ordersDao.printRvoplOrderMaster(vo);
			
			for(OrderOrdersRvoplMasterPrintVO item : tmpList){
				String odrplNaTrplC = item.getODRPL_NA_TRPL_C();
				String odrplNaTeamC = item.getODRPL_NA_TEAM_C();
				String odrDt = item.getODR_DT();
				String odrSlpno = item.getODR_SLPNO();
				List<OrderOrdersRvoplDetailPrintVO> wrsList = printRvoplOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
				item.setList(wrsList);
				list.add(item);
			}
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  소속사업장별 기준 조회 Detail Print */
	public List<OrderOrdersRvoplDetailPrintVO> printRvoplOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			List<OrderOrdersRvoplDetailPrintVO>  list = ordersDao.printRvoplOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 상품별 조회 First List */
	public List<OrderOrdersWrsFstVO> retrieveOrderWrsFst(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersWrsFstVO>  list = ordersDao.retrieveOrderWrsFst(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 상품별 조회 First List Count*/
	public int retrieveOrderWrsCountFst(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderWrsCountFst(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 상품별 조회 Second List */
	public List<OrderOrdersWrsScdVO> retrieveOrderWrsScd(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersWrsScdVO>  list = ordersDao.retrieveOrderWrsScd(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 상품별 조회 Second List Count*/
	public int retrieveOrderWrsCountScd(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.getOrderWrsCountScd(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 상품별 조회 Second List Total*/
	public Map<String, Object> retrieveOrderWrsTotalScd(OrderOrdersSrhConditonVO vo) {
		try{
			return ordersDao.retrieveOrderWrsTotalScd(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/* 상품별 조회 Third */
	public List<OrderOrdersWrsTrdVO> retrieveOrderWrsTrd(String odrplNaTrplC,
			String odrplNaTeamC, String searchPeriod, String calFrom,
			String calTo, String naWrsC, String vhcno, String TRPL_C_ARR[]) {
		try {
			List<OrderOrdersWrsTrdVO>  list = ordersDao.retrieveOrderWrsTrd(odrplNaTrplC, odrplNaTeamC, searchPeriod, calFrom, calTo, naWrsC, vhcno, TRPL_C_ARR);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  상품별 Excel downLoad */
	public List<OrderOrdersWrsExcelVO> downloadExcelWrs(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersWrsExcelVO>  list = ordersDao.downloadExcelWrs(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  상품별 기준 조회 Master Print */
	public List<OrderOrdersWrsFstVO> printWrslOrderMaster(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersWrsFstVO> list = new ArrayList<OrderOrdersWrsFstVO>();
			List<OrderOrdersWrsFstVO>  tmpList = ordersDao.printWrsOrderMaster(vo);
			
			for(OrderOrdersWrsFstVO item : tmpList){
				String naWrsC = item.getNA_WRS_C();
				String odrPcs = StringUtils.defaultString(String.valueOf(item.getODR_PCS()), "0");
				vo.setNaWrsC(naWrsC);
				vo.setOdrPcs(odrPcs);
				List<OrderOrdersWrsDetailPrintVO> wrsList = printWrsOrderDetail(vo);
				item.setList(wrsList);
				list.add(item);
			}
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*  소속사업장별 기준 조회 Detail Print */
	public List<OrderOrdersWrsDetailPrintVO> printWrsOrderDetail(OrderOrdersSrhConditonVO vo) {
		try {
			List<OrderOrdersWrsDetailPrintVO>  list = ordersDao.printWrsOrderDetail(vo);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * TC발주 엑셀파일 다운로드
	 * @param calFrom
	 * @param calTo
	 * @param odrplNaTrplC
	 * @param nsUsrSysKdc
	 * @param TRPL_C_ARR
	 * ExcelFileMakerResultHandler handler
	 * @return
	 */
	public void excelTCOrders(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC, ExcelFileMakerResultHandler handler) {
		ordersDao.excelTCOrders(calFrom, calTo, odrplNaTrplC, nsUsrSysKdc, TRPL_C_ARR, naWrsC, handler);
	}
	
	
	/* TC발주내역조회 */
	public List<OrderOrdersTCVO> retrieveTCOrders(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC, int start, int end) {
		try {
			List<OrderOrdersTCVO>  list = ordersDao.retrieveTCOrders(calFrom, calTo, odrplNaTrplC, nsUsrSysKdc, TRPL_C_ARR, naWrsC, start, end);
			return list;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* TC발주내역조회 Count */
	public int getTCOrdersCount(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC) {
		try{
			return ordersDao.getTCOrdersCount(calFrom, calTo, odrplNaTrplC, nsUsrSysKdc, TRPL_C_ARR, naWrsC);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	/*배송지 조회 팝업 */
	public List<Map<String, Object>> searchDVYAA(String odrplNaTrplC, String searchType, String searchText) {
		try{
			
			return ordersDao.searchDVYAA(odrplNaTrplC, searchType, searchText);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*상품 조회 팝업 */
	public List<OrderOrdersWrsVO> searchWRS(String searchType,String searchText, String ODRPL_NA_TRPL_C, String odrpl_na_team_c, String prgr_c, String ddly_yn, String trplC, String chkDate, String cserCtrTpc, String orginTrplS, Map<String, Object> trnrelParams) {
		try{
			return ordersDao.searchWRS(searchType, searchText, ODRPL_NA_TRPL_C, odrpl_na_team_c, prgr_c, ddly_yn, trplC, chkDate, cserCtrTpc, orginTrplS, trnrelParams);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	

	/*상품 조회 팝업  like 검색 추가*/
	public List<OrderOrdersWrsVO> searchWRS(String searchType,String searchText, String ODRPL_NA_TRPL_C, String odrpl_na_team_c, String prgr_c, String ddly_yn, String trplC, String chkDate, String cserCtrTpc, String orginTrplS, Map<String, Object> trnrelParams, String like) {
		try{
			return ordersDao.searchWRS(searchType, searchText, ODRPL_NA_TRPL_C, odrpl_na_team_c, prgr_c, ddly_yn, trplC, chkDate, cserCtrTpc, orginTrplS, trnrelParams, like);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*상품 계약 관계 조회 */
	public List<String> retrieveWrsCtrTpc(String odrplNaTrplC, String cserCtrTpc, String searchtype, String searchtext) {
		try{
			return ordersDao.retrieveWrsCtrTpc(odrplNaTrplC, cserCtrTpc, searchtype, searchtext);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * ID 			: POPUP_TRNREL_ODRPL
	 * 화면명 	: 거래관계정보조회 팝업 
	 */
	/* Search Option 상품대분류조회 */
	public List<Map<String, Object>> retrieveWrsClfL() {
		try{
			return ordersDao.retrieveWrsClfL();
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	/* Search Option 상품중분류조회 */
	public List<Map<String, Object>> retrieveWrsClfM(String NA_WRS_LCLC) {
		try{
			return ordersDao.retrieveWrsClfM(NA_WRS_LCLC);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
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
		try{
			return ordersDao.retrieveTrnrelOdrpl(odrplType, odrpl, cserCtrTpcType, mngtNaTrTpcType, wmcLocRgnDsc, htLovRgnC, wrsLclc, wrsMclc, spyTpcType, TRPL_C_ARR);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 거래관계 
	 * @param odrplNaTrplC
	 * @param odrplNaTeamC
	 * @param spyplNaTrplC
	 * @param spyplNaTeamC
	 * @param cserCtrTpc
	 * @return
	 */
	public List<Map<String, Object>> getTrnrel(String odrplNaTrplC, String odrplNaTeamC, String spyplNaTrplC, String spyplNaTeamC, String cserCtrTpc){
		try{
			return ordersDao.getTrnrel(odrplNaTrplC, odrplNaTeamC, spyplNaTrplC, spyplNaTeamC, cserCtrTpc);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 사무소 조회 팝업
	 * @param searchType
	 * @param searchTxt
	 * @param trplC
	 * @return
	 */
	public List<OrderOrdersBrVO> retrieveBr(String searchType, String searchTxt, String trplC) {
		try{
			return ordersDao.retrieveBr(searchType, searchTxt, trplC);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public void downloadExcelWrs_new(OrderOrdersSrhConditonVO vo, ExcelFileMakerResultHandler handler) {
		ordersDao.downloadExcelWrs_new(vo, handler);
	}

	/*  소속사업장별 Excel downLoad Billing */
	public List<Map<String, Object>> downloadExcelRvoplBilling(OrderOrdersSrhConditonVO vo) {
		return ordersDao.downloadExcelRvoplBilling(vo);
	}

	/**
	 * TC발주 엑셀파일 다운로드 Billing
	 * @param calFrom
	 * @param calTo
	 * @param odrplNaTrplC
	 * @param nsUsrSysKdc
	 * @param TRPL_C_ARR
	 * @return
	 */
	public int excelTCOrdersBilling(String calFrom, String calTo, String odrplNaTrplC, String nsUsrSysKdc, String[] TRPL_C_ARR, String naWrsC) {
		return ordersDao.excelTCOrdersBilling(calFrom, calTo, odrplNaTrplC, nsUsrSysKdc, TRPL_C_ARR, naWrsC);
	}
}
