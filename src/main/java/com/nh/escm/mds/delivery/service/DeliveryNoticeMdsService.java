
package com.nh.escm.mds.delivery.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.mds.delivery.dao.DeliveryNoticeMdsDAO;
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
@Service
public class DeliveryNoticeMdsService extends AbstractService {
	
	@Autowired
	private DeliveryNoticeMdsDAO deliveryNoticeMdsDAO;
	
	
	/*
	 * 물류센터 리스트
	 */
	public List<DeliveryTcVO> retrieveTC(String trplC){
		try {
			 return deliveryNoticeMdsDAO.retrieveTC(trplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 영업가능일 체크
	 */
	public String getBizDtYn(String odrplNaTrplC, String searchDate){
		try {
			 return deliveryNoticeMdsDAO.getBizDtYn(odrplNaTrplC, searchDate);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 영업가능일 조회
	 */
	public String getBizDt(String trplO, String teamO, String trplR, String teamR,  String searchDate){
		try {
			 return deliveryNoticeMdsDAO.getBizDt(trplO, teamO, trplR, teamR,  searchDate);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주예정전표번호
	 */
	public String getNaDvyPlashSlpno(String trplC, String teamC, String dvyPlaDt, String ddlyYn){
		try {
			 return deliveryNoticeMdsDAO.getNaDvyPlashSlpno(trplC, teamC, dvyPlaDt, ddlyYn); 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주정보 기본 조회
	 */
	public NoticeOrderVO getOrder(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno) {
		try {
			NoticeOrderVO vo = deliveryNoticeMdsDAO.getOrder(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
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
			List<NoticeOrderDetailVO> list = deliveryNoticeMdsDAO.retrieveOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
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
			List<NoticeOrderDetailVO> list = deliveryNoticeMdsDAO.retrieveOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, dvyPlaDt);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 공급처차량관리 리스트
	 */
	public List<NoticeVhcnoVO> retrieveVhcno(String spyplNaTrplC) {
		try {
			List<NoticeVhcnoVO> list = deliveryNoticeMdsDAO.retrieveVhcno(spyplNaTrplC);
			return list; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * R1 사업장코드 조회
	 */
	public List<Map<String, Object>> retrieveR1NaBzplC() {
		try {
			return deliveryNoticeMdsDAO.retrieveR1NaBzplC();
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
								deliveryNoticeMdsDAO.rollbackDeliveryNoticeOrder(dnoVo.getSPYPL_NA_TRPL_C(), dnoVo.getDVYAA_NA_TRPL_C(), dnoVo.getNA_DVY_PLASH_SLPNO());
								updateDeliveryNoticeOrder(dnoVo);
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
			return deliveryNoticeMdsDAO.insertDeliveryNoticeOrder(dnoVo);
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
			return deliveryNoticeMdsDAO.insertDeliveryNoticeOrderDetail(dnodVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발주Master-배송예정서전표 번호 수정(NA_DVY_PLASH_SLPNO)
	 */
	public int updateMdsOrderSlpno(String odrNo, String naDvyPlashSlpno){
		try{
			return deliveryNoticeMdsDAO.updateMdsOrderSlpno(odrNo, naDvyPlashSlpno);
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
			return deliveryNoticeMdsDAO.updateOrderDetail(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, naWrsC, naDvyPlashSlpno);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 배송예정서 기본 조회
	 */
	public NoticeOrderVO getDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String mbcoType, String truAgcyNaTrplC) {
		try {
			NoticeOrderVO vo = deliveryNoticeMdsDAO.getDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, mbcoType, truAgcyNaTrplC);
			List<NoticeOrderDetailVO> list = getDeliveryNoticeOrderDetail(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, "", vo.getDDLY_YN(), vo.getCSER_CTR_TPC(), mbcoType, truAgcyNaTrplC);
			vo.setList(list);
			return vo; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 상세 조회
	 */
	public List<NoticeOrderDetailVO> getDeliveryNoticeOrderDetail(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String dvyPlaDt, String ddlyYn, String cserCtrTpc, String mbcoType, String truAgcyNaTrplC) {
		try {
			List<NoticeOrderDetailVO> list = deliveryNoticeMdsDAO.getDeliveryNoticeOrderDetail(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, dvyPlaDt, ddlyYn, cserCtrTpc, mbcoType, truAgcyNaTrplC);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 기본 수정
	 */
	public int updateDeliveryNoticeOrder(DeliveryNoticeOrderVO vo){
		return deliveryNoticeMdsDAO.updateDeliveryNoticeOrder(vo);
	}
	
	/*
	 * 배송예정서 상세 수정
	 */
	public int updateDeliveryNoticeOrderDetail(DeliveryNoticeOrderDetailVO vo){
		return deliveryNoticeMdsDAO.updateDeliveryNoticeOrderDetail(vo);
	}
	
	/*
	 * 배송예정서  삭제
	 */
	public int deleteDeliveryNoticeOrder(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno){
		try{
			return deliveryNoticeMdsDAO.deleteDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
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
			return deliveryNoticeMdsDAO.deleteDeliveryNoticeOrderDetailAll(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
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
			return deliveryNoticeMdsDAO.deleteDeliveryNoticeOrderDetail(vo);
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
			return deliveryNoticeMdsDAO.updateDeleteDeliveryNoticeOrderDetail(vo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 배송예정서 일반등록 거래명세서 출력
	 */
	public List<DeliveryNoticeOrderPrintVO> printDeliveryNoticeOrder(String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC, 
			String mbcoType, String truAgcyNaTrplC, String ozType) {
		try {
			List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeMdsDAO.printDeliveryNoticeOrder(naDvyPlashSlpno, spyplNaTrplC, dvyaaNaTrplC, mbcoType, truAgcyNaTrplC, ozType);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 배송예정서 일반등록 덤상품 거래명세서 출력
	 */
	public List<DeliveryNoticeOrderPrintVO> printDeliveryNoticeOrderDum(String naDvyPlashSlpno, String spyplNaTrplC, String dvyaaNaTrplC, 
			String mbcoType, String truAgcyNaTrplC, String ozType) {
		try {
			List<DeliveryNoticeOrderPrintVO> list = deliveryNoticeMdsDAO.printDeliveryNoticeOrderDum(naDvyPlashSlpno, spyplNaTrplC, dvyaaNaTrplC, mbcoType, truAgcyNaTrplC, ozType);
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
				deliveryNoticeMdsDAO.insertNoticeOrderMTmp(mvo);
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
			return deliveryNoticeMdsDAO.insertNoticeOrderDTmp(vo);
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
			List<NoticeOrderTempFileMasterVO> mList = deliveryNoticeMdsDAO.retrieveNoticeOrderMTmp(tempSeq);
			for(NoticeOrderTempFileMasterVO vo : mList){
				List<NoticeOrderTempFileDetailVO> dList = deliveryNoticeMdsDAO.retrieveNoticeOrderDTmp(tempSeq);
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
				//일괄등록일 경우 무발주로 하드코딩
				mvo.setNORDER_YN("1");
				int dvyPlaSqno = 1;
				for(DeliveryNoticeOrderDetailVO dvo : mvo.getDnodVoList()){
					dvo.setDVY_PLA_SQNO(String.valueOf(dvyPlaSqno));
					++dvyPlaSqno;
					deliveryNoticeMdsDAO.insertDeliveryNoticeOrderDetail(dvo);
				}
				deliveryNoticeMdsDAO.insertDeliveryNoticeOrder(mvo);
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
			List<DeliveryNoticeOrderPopUpVO> list = deliveryNoticeMdsDAO.retrieveOrdersPopUp(odrSlpno, rvoplNaTrplC, odrplNaTrplC, dvyRqrDtFrom, dvyRqrDtTo, ddlyYn, odrplNaTrplN);
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
			List<DeliveryTradingPatnersMVO> list = deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersM(srhVo);
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
			return deliveryNoticeMdsDAO.getDeliveryTradingPatnersMCount(srhVo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Sum
	 */
	public Map<String, Object> getDeliveryTradingPatnersMSum(DeliveryTradingPatnersSrhVO srhVo){
		try {
			return deliveryNoticeMdsDAO.getDeliveryTradingPatnersMSum(srhVo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 상세
	 */
	public List<DeliveryTradingPatnersDVO> retrieveDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, int start, int end, String sort, String slpDt, String naSlpno, String mbcoType, String truAgcyNaTrplC){
		try {
			List<DeliveryTradingPatnersDVO> list = deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersD(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, start, end, sort, slpDt, naSlpno, mbcoType, truAgcyNaTrplC);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 상세 Count
	 */
	public int getDeliveryTradingPatnersDCount(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String slpDt, String naSlpno, String mbcoType, String truAgcyNaTrplC){
		try {
			return deliveryNoticeMdsDAO.getDeliveryTradingPatnersDCount(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, slpDt, naSlpno, mbcoType, truAgcyNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Excel
	 */
	public List<Map<String, Object>> downloadExcelDeliveryTradingPatners(DeliveryTradingPatnersSrhVO srhVo){
		try {
			List<Map<String, Object>> list = deliveryNoticeMdsDAO.downloadExcelDeliveryTradingPatners(srhVo);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Grid Master Excel
	 */
	public List<DeliveryTradingPatnersMVO> downloadExcelDeliveryTradingPatnersM(DeliveryTradingPatnersSrhVO srhVo){
		try {
			List<DeliveryTradingPatnersMVO> list = deliveryNoticeMdsDAO.downloadExcelDeliveryTradingPatnersM(srhVo);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 *  배송예정 거래처별 조회 Excel Detail
	 */
	public List<Map<String, Object>> downloadExcelDetailDeliveryTradingPatners(DeliveryTradingPatnersSrhVO srhVo){
		return deliveryNoticeMdsDAO.downloadExcelDetailDeliveryTradingPatners(srhVo);

	}
	
	/*
	 *  배송예정 거래처별 조회 Excel Detail
	 */
	public List<DeliveryTradingPatnersExcelDetailVO> downloadExcelDeliveryTradingPatnersE(DeliveryTradingPatnersSrhVO vo){
		try {
			List<DeliveryTradingPatnersExcelDetailVO> list = deliveryNoticeMdsDAO.downloadExcelDeliveryTradingPatnersE(vo);
			return list;
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
			List<DeliveryTradingPatnersMVO> tmpList = deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersM(srhVo);
			
			for(DeliveryTradingPatnersMVO vo : tmpList){
				String dvyaaNaTrplC = vo.getDVYAA_NA_TRPL_C();
				String spyplNaTrplC = vo.getSPYPL_NA_TRPL_C();
				String naDvyPlashSlpno = vo.getNA_DVY_PLASH_SLPNO();
				String mbcoType = srhVo.getMbcoType();
				String truAgcyNaTrplC = srhVo.getTruAgcyNaTrplC();
				
				List<DeliveryTradingPatnersPrintDVO> dList = deliveryNoticeMdsDAO.printDeliveryTradingPatnersD(dvyaaNaTrplC, spyplNaTrplC, naDvyPlashSlpno, mbcoType, truAgcyNaTrplC);
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
			List<DeliveryTradingPatnersMVO> tmpList = deliveryNoticeMdsDAO.retrieveDeliveryTradingPatnersM(srhVo);
			return tmpList;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 거래처별 조회 Print Detail
	 */
	public List<DeliveryTradingPatnersPrintDVO> printDeliveryTradingPatnersD(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String mbcoType, String truAgcyNaTrplC){
		try {
			List<DeliveryTradingPatnersPrintDVO> list = deliveryNoticeMdsDAO.printDeliveryTradingPatnersD(dvyaaNaTrplC, spyplNaTrplC, naDvyPlashSlpno, mbcoType, truAgcyNaTrplC);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 상품별 조회 Master
	 */
	public List<DeliverySkusMVO> retrieveDeliverySkusM(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end, String mbcoType, String truAgcyNaTrplC ){
		try {
			List<DeliverySkusMVO> list = deliveryNoticeMdsDAO.retrieveDeliverySkusM(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end, mbcoType, truAgcyNaTrplC);
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
			return deliveryNoticeMdsDAO.getDeliverySkusMCount(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, trpl);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 상품별 조회 Detail
	 */
	public List<DeliverySkusDVO> retrieveDeliverySkusD(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], int start, int end, String mbcoType, String truAgcyNaTrplC ){
		try {
			List<DeliverySkusDVO> list = deliveryNoticeMdsDAO.retrieveDeliverySkusD(naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, start, end, mbcoType, truAgcyNaTrplC);
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 상품별 조회 Excel DownLoad
	 */
	public List<Map<String, Object>> downloadExcelDeliverySkus(String wrsGubun, String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String TRPL_C_ARR[], String mbcoType, String truAgcyNaTrplC){
			return deliveryNoticeMdsDAO.downloadExcelDeliverySkus(wrsGubun, naWrsC, dvyPlaDtFr, dvyPlaDtTo, TRPL_C_ARR, mbcoType, truAgcyNaTrplC);

	}
	
	/*
	 *  배송예정 거래처별 조회 Detail Count
	 */
	public int getDeliverySkusDCount(String naWrsC, String dvyPlaDtFr, String dvyPlaDtTo, String trpl[], String mbcoType, String truAgcyNaTrplC){
		try {
			return deliveryNoticeMdsDAO.getDeliverySkusDCount(naWrsC, dvyPlaDtFr, dvyPlaDtTo, trpl, mbcoType, truAgcyNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 *  배송예정 결과 조회
	 */
	public List<Map<String, Object>> retrieveDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, int start, int end, String mbcoType, String truAgcyNaTrplC ){
		return deliveryNoticeMdsDAO.retrieveDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, start, end, mbcoType, truAgcyNaTrplC);
	}
	
	/*
	 *  배송예정 결과 조회 (엑셀 상세)
	 */
	public List<Map<String, Object>> sql_retrieveDeliveryDetailResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, int start, int end, String mbcoType, String truAgcyNaTrplC ){
		return deliveryNoticeMdsDAO.sql_retrieveDeliveryDetailResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, start, end, mbcoType, truAgcyNaTrplC);
	}
	
	/*
	 *  배송예정 결과 조회 Count
	 */
	public int getDeliveryResultCount(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, String mbcoType, String truAgcyNaTrplC){
		try {
			return deliveryNoticeMdsDAO.getDeliveryResultCount(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, mbcoType, truAgcyNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 공급처팀코드 조회
	 */
	public String searchTeam(String cserNaTrplC, String splrNaTrplC) {
		try {
			String result = deliveryNoticeMdsDAO.searchTeam(cserNaTrplC, splrNaTrplC);
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
			return deliveryNoticeMdsDAO.getBuyer(naWrsN, naWrsC, naWrsLclc, naWrsMclc, naWrsSclc, naWrsDtcfC); 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}	
	}
	
	/*
	 * 배송예정서 취소
	 */
	public int deliveryNoticeCancelProc(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String LS_CMENO){
		deliveryNoticeMdsDAO.rollbackDeliveryNoticeOrder(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno);
		return deliveryNoticeMdsDAO.deliveryNoticeCancelMProc(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, LS_CMENO);
	}
	
	/*거래래관계 조회*/
	public List<DeliveryTrnrelVO> retrieveTrnrel(String odrplNaTrplC, String odrplNaTeamC, String splrNaTrplC, String splrNaTeamC, String cserCtrTpc, String spyTpc, String mngtNaTrplC, String mngtNaTeamC, String mngtNaTrTpc, String naWrsLclc, String naWrsMclc){
		try{
			return deliveryNoticeMdsDAO.retrieveTrnrel(odrplNaTrplC, odrplNaTeamC, splrNaTrplC, splrNaTeamC, cserCtrTpc, spyTpc, mngtNaTrplC, mngtNaTeamC, mngtNaTrTpc, naWrsLclc, naWrsMclc);
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
		return deliveryNoticeMdsDAO.getDeliveryMasterForRollback(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO, DVY_PLA_DT);
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
		return deliveryNoticeMdsDAO.getDeliveryDetailsForRollback(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO, DVY_PLA_DT);
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
		return deliveryNoticeMdsDAO.rollbackDeliveryNoticeOrder(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO);
	}
	
	public String getDvyVat(double dvyPlaQt, double dvyWrsUpr, String txtDsc){
		return deliveryNoticeMdsDAO.getDvyVat(dvyPlaQt, dvyWrsUpr, txtDsc);
	}
	
	/**
	 * 상품 유효성 (취급 상태 조회)
	 * @param naBzplc
	 * @param naWrsC
	 * @param cserCtrTpc
	 * @return
	 */
	public String chkNaWrsC(String naBzplc, String naWrsC, String cserCtrTpc) {
		try {
			if(cserCtrTpc.equals("1") || cserCtrTpc.equals("2") || cserCtrTpc.equals("3")){
				naBzplc = "8808983000015";
			}
			String result = deliveryNoticeMdsDAO.chkNaWrsC(naBzplc, naWrsC, cserCtrTpc);
			return result; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/**
	 * 상품 단가 조회
	 * @param naBzplc
	 * @param naWrsC
	 * @param cserCtrTpc
	 * @return
	 */
	public String getSPnAdPwRSPRuT(Map params) {
		try {
			
			String result = deliveryNoticeMdsDAO.getSPnAdPwRSPRuT(params);
			return result; 
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/* 주류상품(공병, 공상자, 공파레트) 확인 */
	public boolean checkAlcoholProduct(String naWrsC) {
		try {
			return deliveryNoticeMdsDAO.checkAlcoholProduct(naWrsC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public String getDeliveryRequestDate(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno){
		try {
			return deliveryNoticeMdsDAO.getDeliveryRequestDate(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> getOrderProduct(String odrplNaTrplC, String odrplNaTeamC, String odrDt, String odrSlpno, String dvyPlaDt, String spyplNaTrplC, String naOdrStsDsc){
		try {
			return deliveryNoticeMdsDAO.getOrderProduct(odrplNaTrplC, odrplNaTeamC, odrDt, odrSlpno, dvyPlaDt, spyplNaTrplC, naOdrStsDsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public String getDvyPlaDt(String spyplNaTrplC, String dvyaaNaTrplC, String naDvyPlashSlpno, String dvyPlaDt) {
		try {
			return deliveryNoticeMdsDAO.getDvyPlaDt(spyplNaTrplC, dvyaaNaTrplC, naDvyPlashSlpno, dvyPlaDt);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
