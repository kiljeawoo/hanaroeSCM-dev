package com.nh.escm.scm.delivery.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.scm.delivery.dao.DeliveryNoticeDAO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderDetailVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderPopUpVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderPrintVO;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeOrderVO;
import com.nh.escm.scm.delivery.vo.DeliveryResultVO;
import com.nh.escm.scm.delivery.vo.DeliverySkusDVO;
import com.nh.escm.scm.delivery.vo.DeliverySkusMVO;
import com.nh.escm.scm.delivery.vo.DeliveryTcVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersDVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersExcelDetailVO;
import com.nh.escm.scm.delivery.vo.DeliveryTradingPatnersExcelVO;
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
@Service
public class DeliveryNoticeAddService extends AbstractService {
	
	@Autowired
	private DeliveryNoticeDAO deliveryNoticeDAO;
	
	
	/*
	 *  배송예정 결과 조회
	 
	public List<Map<String, Object>> retrieveDeliveryResult(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, int start, int end ){
		return deliveryNoticeDAO.retrieveDeliveryResult(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, start, end);
	}
	
	/*
	 *  배송예정 결과 조회 Count
	 */
	public int getDeliveryResultCount(String dvyPlaDtFr, String dvyPlaDtTo, String odrplNaTrplC, String ddlyYn, String resCode, String TRPL_C_ARR[], String naDvyPlashSlpno, String odrSlpno, String mbcoType, String truAgcyNaTrplC){
		try {
			return deliveryNoticeDAO.getDeliveryResultCount(dvyPlaDtFr, dvyPlaDtTo, odrplNaTrplC, ddlyYn, resCode, TRPL_C_ARR, naDvyPlashSlpno, odrSlpno, mbcoType, truAgcyNaTrplC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int reSendDeliveryNoticeOrder(
			String LS_CMENO, 
			String SPYPL_NA_TRPL_C, 
			String DVYAA_NA_TRPL_C, 
			String NA_DVY_PLASH_SLPNO){
		return deliveryNoticeDAO.reSendDeliveryNoticeOrder(LS_CMENO, SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO);
	}
	/*
	 * 배송예정서 취소
	 */
	public int deliveryNoticeAllCancelProc(String TRPL_C_ARR[], String dvy_pla_dt_fr, String dvy_pla_dt_to, String LS_CMENO){
		return deliveryNoticeDAO.deliveryNoticeAllCancelProc(TRPL_C_ARR, dvy_pla_dt_fr, dvy_pla_dt_to, LS_CMENO);
	}
}
