package com.nh.escm.scm.delivery.sea.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.scm.delivery.sea.dao.DeliveryNoticeSeaDAO;
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
@Service
public class DeliveryNoticeSeaService extends AbstractService {
	
	@Autowired
	private DeliveryNoticeSeaDAO deliveryNoticeDAO;
	
	
	/*
	 * 물류센터 리스트
	 */
	public List<DeliveryTcVO> retrieveTC(String trplC){
		try {
			 return deliveryNoticeDAO.retrieveTC(trplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 영업가능일 체크
	 */
	public String getBizDtYn(String odrplNaTrplC, String searchDate){
		try {
			 return deliveryNoticeDAO.getBizDtYn(odrplNaTrplC, searchDate);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 영업가능일 조회
	 */
	public String getBizDt(String trplO, String teamO, String trplR, String teamR,  String searchDate){
		try {
			 return deliveryNoticeDAO.getBizDt(trplO, teamO, trplR, teamR,  searchDate);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주예정전표번호
	 */
	public String getNaDvyPlashSlpno(String trplC, String teamC, String dvyPlaDt, String ddlyYn){
		try {
			 return deliveryNoticeDAO.getNaDvyPlashSlpno(trplC, teamC, dvyPlaDt, ddlyYn); 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주정보 기본 조회
	 */
	public NoticeOrderVO getOrder(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			NoticeOrderVO vo = deliveryNoticeDAO.getOrder(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return vo; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주정보 상세 조회
	 */
	public List<NoticeOrderDetailVO> getOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			List<NoticeOrderDetailVO> list = deliveryNoticeDAO.retrieveOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주정보 상세 조회
	 */
	public List<NoticeOrderDetailVO> getOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String dvyPlaDt) {
		try {
			List<NoticeOrderDetailVO> list = deliveryNoticeDAO.retrieveOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, dvyPlaDt);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 결품사유코드 리스트
	 */
	public List<Map<String, Object>> retrieveShortageReason(String code) {
		try {
			return deliveryNoticeDAO.retrieveShortageReason(code);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 수산부 결품내역 조회
	 */
	public List<Map<String, Object>> retrieveShortageReasonList(String[] spyplNaTrplCArr, String dvyaaNaTrplC, String dvyaaNaTeamC, String dvyFrom, String dvyTo) {
		try {
			return deliveryNoticeDAO.retrieveShortageReasonList(spyplNaTrplCArr, dvyaaNaTrplC, dvyaaNaTeamC, dvyFrom, dvyTo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 공급처차량관리 리스트
	 */
	public List<NoticeVhcnoVO> retrieveVhcno(String spyplNaTrplC) {
		try {
			List<NoticeVhcnoVO> list = deliveryNoticeDAO.retrieveVhcno(spyplNaTrplC);
			return list; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 저장
	 */
	public boolean saveDeliveryNoticeOrder(String editType, String rogoInfCrtDsc, NoticeOrderVO mvo, List<DeliveryNoticeOrderVO> dnoVoList){
		try{
			String mSpyplNaTrplC = mvo.getSPYPL_NA_TRPL_C();
			String mDvyaaNaTrplC = mvo.getDVYAA_NA_TRPL_C();
			String mNaDvyPlashSlpno = mvo.getNA_DVY_PLASH_SLPNO();
			
			//행사일경우
			if(	StringUtils.equals("03", rogoInfCrtDsc) && StringUtils.equals(editType, "Y")){
				deleteDeliveryNoticeOrder(mSpyplNaTrplC, mDvyaaNaTrplC, mNaDvyPlashSlpno);
				deleteDeliveryNoticeOrderDetailAll(mSpyplNaTrplC, mDvyaaNaTrplC, mNaDvyPlashSlpno);
			}
			
			for(int i = 0; i < dnoVoList.size(); i++){
				DeliveryNoticeOrderVO dnoVo = dnoVoList.get(i);
				if(dnoVo.getDnodVoList() != null && dnoVo.getDnodVoList().size() > 0){
					boolean isUpdateCompleted = false;
					
					for(DeliveryNoticeOrderDetailVO dnodVo : dnoVo.getDnodVoList()){
						switch(dnodVo.getDML_CODE()){
							case "INSERT" :
								insertDeliveryNoticeOrderDetail(dnodVo);
								break;
							case "UPDATE" : 
								if(!isUpdateCompleted) {
									//deliveryNoticeDAO.rollbackDeliveryNoticeOrder(dnodVo.getSPYPL_NA_TRPL_C(), dnodVo.getDVYAA_NA_TRPL_C(), dnodVo.getNA_DVY_PLASH_SLPNO());
									isUpdateCompleted = true;
								}
								updateDeliveryNoticeOrderDetail(dnodVo);
								break;
							case "DELETE" :
								deleteDeliveryNoticeOrderDetail(dnodVo);
								break;
							case "UDELETE" :
								updateDeleteDeliveryNoticeOrderDetail(dnodVo);
								break;
							default : 
								logger.error("[ saveDeliveryNoticeOrder ] Detail DML CODE IS NULL!!!");
								throw new AppetizerException("[ saveDeliveryNoticeOrder ] Detail DML CODE IS NULL!!!");
						}
					}
					
					if(!StringUtils.isEmpty(dnoVo.getDML_CODE())){
						switch(dnoVo.getDML_CODE()){
							case "INSERT" : 
								insertDeliveryNoticeOrder(dnoVo);
								break;
							case "UPDATE" :
								updateDeliveryNoticeOrder(dnoVo);
								deliveryNoticeDAO.rollbackDeliveryNoticeOrder(dnoVo.getSPYPL_NA_TRPL_C(), dnoVo.getDVYAA_NA_TRPL_C(), dnoVo.getNA_DVY_PLASH_SLPNO());
								break;
							default : 
								logger.error("[ saveDeliveryNoticeOrder ] Master DML CODE IS NULL!!!");
								throw new AppetizerException("[ saveDeliveryNoticeOrder ] Master DML CODE IS NULL!!!");
						}
					}
				}
			}
			
			
			return true;
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
		
	}
	
	/*
	 * 배송예정서 기본 저장
	 */
	public int insertDeliveryNoticeOrder(DeliveryNoticeOrderVO dnoVo){
		try{
			return deliveryNoticeDAO.insertDeliveryNoticeOrder(dnoVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 상세 저장
	 */
	public int insertDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO dnodVo){
		try{
			return deliveryNoticeDAO.insertDeliveryNoticeOrderDetail(dnodVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주상세-배송예정서전표 번호 수정(NA_DVY_PLASH_SLPNO)
	 */
	public int updateOrderDetail(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String naWrsC, String naDvyPlashSlpno){
		try{
			return deliveryNoticeDAO.updateOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, naWrsC, naDvyPlashSlpno);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 배송예정서 기본 조회
	 */
	public NoticeOrderVO getDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno) {
		try {
			NoticeOrderVO vo = deliveryNoticeDAO.getDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
			List<NoticeOrderDetailVO> list = getDeliveryNoticeOrderDetail(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, "", vo.getDDLY_YN(), vo.getCSER_CTR_TPC());
			vo.setList(list);
			return vo; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 상세 조회
	 */
	public List<NoticeOrderDetailVO> getDeliveryNoticeOrderDetail(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String dvyPlaDt, String ddlyYn, String cserCtrTpc) {
		try {
			List<NoticeOrderDetailVO> list = deliveryNoticeDAO.getDeliveryNoticeOrderDetail(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, dvyPlaDt, ddlyYn, cserCtrTpc);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 기본 수정
	 */
	public int updateDeliveryNoticeOrder(DeliveryNoticeOrderVO vo){
		return deliveryNoticeDAO.updateDeliveryNoticeOrder(vo);
	}
	
	/*
	 * 배송예정서 상세 수정
	 */
	public int updateDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		return deliveryNoticeDAO.updateDeliveryNoticeOrderDetail(vo);
	}
	
	/*
	 * 배송예정서  삭제
	 */
	public int deleteDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno){
		try{
			return deliveryNoticeDAO.deleteDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	/*
	 * 배송예정서 상세 전체삭제
	 */
	public int deleteDeliveryNoticeOrderDetailAll(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno){
		try{
			return deliveryNoticeDAO.deleteDeliveryNoticeOrderDetailAll(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 상세 삭제
	 */
	public int deleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		try{
			return deliveryNoticeDAO.deleteDeliveryNoticeOrderDetail(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 상세 삭제 수정
	 */
	public int updateDeleteDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		try{
			return deliveryNoticeDAO.updateDeleteDeliveryNoticeOrderDetail(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 일반등록 거래명세서 출력
	 */
	public List<DeliveryNoticeOrderPrintVO> printDeliveryNoticeOrder(String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC) {
		try {
			List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeDAO.printDeliveryNoticeOrder(naDvyPlashSlpno, spyplNaTrplC, dvyaaNaTrplC);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 배송예정서 TEMP Master 저장
	 */
	public boolean insertNoticeOrderMTmp(List<NoticeOrderTempFileMasterVO> mvoList){
		try{
			int mCnt = 0;
			int dCnt = 0;
			
			List<NoticeOrderTempFileDetailVO> dvoList = null;
			for(NoticeOrderTempFileMasterVO mvo : mvoList){
				deliveryNoticeDAO.insertNoticeOrderMTmp(mvo);
				++mCnt;
				dvoList = mvo.getList();
				for(NoticeOrderTempFileDetailVO dvo : dvoList){
					dvo.setROW_SEQ(mvo.getROW_SEQ());//ROW_SEQ로 Detail 의 그룹화 함
					insertNoticeOrderDTmp(dvo);
					++dCnt;
				}
			}
			if(mCnt == mvoList.size() && dCnt == dvoList.size()){
				return true;
			}else{
				return false;
			}
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 TEMP Detail 저장
	 */
	public int insertNoticeOrderDTmp(NoticeOrderTempFileDetailVO vo){
		try{
			return deliveryNoticeDAO.insertNoticeOrderDTmp(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 일괄등록 TEMP 조회
	 */
	public List<NoticeOrderTempFileMasterVO> retreiveNoticeOrderMTmp(String tempSeq) {
		try {
			List<NoticeOrderTempFileMasterVO> mList = deliveryNoticeDAO.retrieveNoticeOrderMTmp(tempSeq);
			for(NoticeOrderTempFileMasterVO vo : mList){
				List<NoticeOrderTempFileDetailVO> dList = deliveryNoticeDAO.retrieveNoticeOrderDTmp(tempSeq);
				vo.setList(dList);
			}
			return mList;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 일괄등록 저장
	 */
	public void insertDeliveryNoticeOrder(List<DeliveryNoticeOrderVO> mList){
		
		try{
			for(DeliveryNoticeOrderVO mvo : mList){
				deliveryNoticeDAO.insertDeliveryNoticeOrder(mvo);
				int dvyPlaSqno = 1;
				for(DeliveryNoticeOrderDetailVO dvo : mvo.getDnodVoList()){
					dvo.setDVY_PLA_SQNO(String.valueOf(dvyPlaSqno));
					++dvyPlaSqno;
					deliveryNoticeDAO.insertDeliveryNoticeOrderDetail(dvo);
				}
			}
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  발주번호_배송요청일 정보조회 팝업
	 */
	public List<DeliveryNoticeOrderPopUpVO> retrieveOrdersPopUp(String odrSlpno, String rvoplNaTrplC, String odrplNaTrplC, String dvyRqrDtFrom, String dvyRqrDtTo, String ddlyYn, String odrplNaTrplN){
		try {
			List<DeliveryNoticeOrderPopUpVO> list = deliveryNoticeDAO.retrieveOrdersPopUp(odrSlpno, rvoplNaTrplC, odrplNaTrplC, dvyRqrDtFrom, dvyRqrDtTo, ddlyYn, odrplNaTrplN);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회
	 */
	public List<DeliveryTradingPatnersMVO> retrieveDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO srhVo){
		try {
			List<DeliveryTradingPatnersMVO> list = deliveryNoticeDAO.retrieveDeliveryTradingPatnersM(srhVo);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Count
	 */
	public int getDeliveryTradingPatnersMCount(DeliveryTradingPatnersSrhVO srhVo){
		try {
			return deliveryNoticeDAO.getDeliveryTradingPatnersMCount(srhVo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Sum
	 */
	public Map<String, Object> getDeliveryTradingPatnersMSum(DeliveryTradingPatnersSrhVO srhVo){
		try {
			return deliveryNoticeDAO.getDeliveryTradingPatnersMSum(srhVo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 상세
	 */
	public List<DeliveryTradingPatnersDVO> retrieveDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, int start, int end, String sort, String slpDt, String naSlpno){
		try {
			List<DeliveryTradingPatnersDVO> list = deliveryNoticeDAO.retrieveDeliveryTradingPatnersD(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, start, end, sort, slpDt, naSlpno);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 상세 Count
	 */
	public int getDeliveryTradingPatnersDCount(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String slpDt, String naSlpno){
		try {
			return deliveryNoticeDAO.getDeliveryTradingPatnersDCount(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, slpDt, naSlpno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Excel
	 */
	public void downloadExcelDeliveryTradingPatners(DeliveryTradingPatnersSrhVO srhVo, ExcelFileMakerResultHandler handler){
		try {
			deliveryNoticeDAO.downloadExcelDeliveryTradingPatners(srhVo, handler);			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Grid Master Excel
	 */
	public void downloadExcelDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO srhVo, ExcelFileMakerResultHandler handler){
		try {
			deliveryNoticeDAO.downloadExcelDeliveryTradingPatnersM(srhVo, handler);			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 *  배송예정 거래처별 조회 Excel Detail
	 */
	public void downloadExcelDetailDeliveryTradingPatners(DeliveryTradingPatnersSrhVO srhVo, ExcelFileMakerResultHandler handler){
		deliveryNoticeDAO.downloadExcelDetailDeliveryTradingPatners(srhVo, handler);

	}
	
	/*
	 *  배송예정 거래처별 조회 Excel Detail
	 */
	public void downloadExcelDeliveryTradingPatnersE(DeliveryTradingPatnersSrhVO vo, ExcelFileMakerResultHandler handler){
		try {
			deliveryNoticeDAO.downloadExcelDeliveryTradingPatnersE(vo, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Print Master
	 */
	public List<DeliveryTradingPatnersMVO> printDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO srhVo){
		try {
			List<DeliveryTradingPatnersMVO> list = new ArrayList<DeliveryTradingPatnersMVO>();
			List<DeliveryTradingPatnersMVO> tmpList = deliveryNoticeDAO.retrieveDeliveryTradingPatnersM(srhVo);
			for(DeliveryTradingPatnersMVO vo : tmpList){
				String dvyaaNaTrplC = vo.getDVYAA_NA_TRPL_C();
				String spyplNaTrplC = vo.getSPYPL_NA_TRPL_C();
				String naDvyPlashSlpno = vo.getNA_DVY_PLASH_SLPNO();
				List<DeliveryTradingPatnersPrintDVO> dList = deliveryNoticeDAO.printDeliveryTradingPatnersD(dvyaaNaTrplC, spyplNaTrplC, naDvyPlashSlpno);
				vo.setList(dList);
				list.add(vo);
			}
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 배송예정서 거래처별조회 마스터 만 조회
	 * @param srhVo
	 * @return
	 */
	public List<DeliveryTradingPatnersMVO> printDeliveryTradingPatnersJustM(DeliveryTradingPatnersSrhVO srhVo){
		try {
			List<DeliveryTradingPatnersMVO> tmpList = deliveryNoticeDAO.retrieveDeliveryTradingPatnersM(srhVo);
			return tmpList;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Print Detail
	 */
	public List<DeliveryTradingPatnersPrintDVO> printDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno){
		try {
			List<DeliveryTradingPatnersPrintDVO> list = deliveryNoticeDAO.printDeliveryTradingPatnersD(dvyaaNaTrplC, spyplNaTrplC, naDvyPlashSlpno);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 상품별 조회 Master
	 */
	public List<DeliverySkusMVO> retrieveDeliverySkusM(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end ){
		try {
			List<DeliverySkusMVO> list = deliveryNoticeDAO.retrieveDeliverySkusM(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Master Count
	 */
	public int getDeliverySkusMCount(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[]){
		try {
			return deliveryNoticeDAO.getDeliverySkusMCount(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, trpl);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 상품별 조회 Detail
	 */
	public List<DeliverySkusDVO> retrieveDeliverySkusD(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end ){
		try {
			List<DeliverySkusDVO> list = deliveryNoticeDAO.retrieveDeliverySkusD(naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 상품별 조회 Excel DownLoad
	 */
	public void downloadExcelDeliverySkus(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], ExcelFileMakerResultHandler handler){
			deliveryNoticeDAO.downloadExcelDeliverySkus(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, handler);

	}
	
	/*
	 *  배송예정 거래처별 조회 Detail Count
	 */
	public int getDeliverySkusDCount(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[]){
		try {
			return deliveryNoticeDAO.getDeliverySkusDCount(naWrsC, dvyPlaDtFr, dvyPlaDtTo, trpl);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 결과 조회
	 */
	public List<Map<String, Object>> retrieveDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], int start, int end ){
		return deliveryNoticeDAO.retrieveDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, start, end);
	}
	
	/*
	 *  배송예정 결과 조회 Count
	 */
	public int getDeliveryResultCount(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[]){
		try {
			return deliveryNoticeDAO.getDeliveryResultCount(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 공급처팀코드 조회
	 */
	public String searchTeam(String cserNaTrplC, String splrNaTrplC) {
		try {
			String result = deliveryNoticeDAO.searchTeam(cserNaTrplC, splrNaTrplC);
			return result; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 단가 '0' 일 경우 바이어 검색
	 */
	public Map<String, Object> getBuyer(String naWrsN, String naWrsC, String naWrsLclc, String naWrsMclc, String naWrsSclc, String naWrsDtcfC){
		try {
			return deliveryNoticeDAO.getBuyer(naWrsN, naWrsC, naWrsLclc, naWrsMclc, naWrsSclc, naWrsDtcfC); 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}	
	}
	
	/*
	 * 배송예정서 취소
	 */
	public int deliveryNoticeCancelProc(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String LS_CMENO){
		deliveryNoticeDAO.rollbackDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
		return deliveryNoticeDAO.deliveryNoticeCancelMProc(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, LS_CMENO);
	}
	
	/*거래래관계 조회*/
	public List<DeliveryTrnrelVO> retrieveTrnrel(String odrplNaTrplC, String odrplNaTeamC, String splrNaTrplC, String splrNaTeamC, String cserCtrTpc, String spyTpc, String mngtNaTrplC, String mngtNaTeamC, String mngtNaTrTpc, String naWrsLclc, String naWrsMclc){
		try{
			return deliveryNoticeDAO.retrieveTrnrel(odrplNaTrplC, odrplNaTeamC, splrNaTrplC, splrNaTeamC, cserCtrTpc, spyTpc, mngtNaTrplC, mngtNaTeamC, mngtNaTrTpc, naWrsLclc, naWrsMclc);
		}catch(DataAccessException e){
			throw new AppetizerException(e);
		}
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
		return deliveryNoticeDAO.getDeliveryMasterForRollback(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO, DVY_PLA_DT);
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
		return deliveryNoticeDAO.getDeliveryDetailsForRollback(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO, DVY_PLA_DT);
	}
	/**
	 * 배송예정서 롤백 저장
	 * @param SPYPL_NA_TRPL_C
	 * @param DVYAA_NA_TRPL_C
	 * @param NA_DVY_PLASH_SLPNO
	 * @return
	 */
	public int rollbackDeliveryNoticeOrder(
			String SPYPL_NA_TRPL_C, String DVYAA_NA_TRPL_C, String NA_DVY_PLASH_SLPNO){
		return deliveryNoticeDAO.rollbackDeliveryNoticeOrder(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO);
	}
	
	public String getDvyVat(double dvyPlaQt, double dvyWrsUpr, String txtDsc){
		return deliveryNoticeDAO.getDvyVat(dvyPlaQt, dvyWrsUpr, txtDsc);
	}


	public void downloadExcelDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], int start, int end, ExcelFileMakerResultHandler handler){
		deliveryNoticeDAO.downloadExcelDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, start, end, handler);
	}
	
	/*
	 *  배송예정 거래처별 조회 Excel Detail Billing
	 */
	public List<Map<String, Object>> downloadExcelDetailDeliveryTradingPatnersBilling(DeliveryTradingPatnersSrhVO srhVo) {
		return deliveryNoticeDAO.downloadExcelDetailDeliveryTradingPatnersBilling(srhVo);
	}
}
