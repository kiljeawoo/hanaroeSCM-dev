package com.nh.escm.bt.rq.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.bt.rq.dao.CsltRqDAO;
import com.nh.escm.bt.rq.vo.CsltRqVO;

/**
 * 계약상담
 */
@Service
public class CsltRqService extends AbstractService {
	
	@Autowired
	private CsltRqDAO csltRqDAO;
	
	@Autowired
	private CsltRqSendService csltRqSendService;
	
	public int insertCsltRq(CsltRqVO rc) {
		try {
			return csltRqDAO.insertCsltRq(rc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int insertCsltRqEvl(CsltRqVO rc) {
		try {
			return csltRqDAO.insertCsltRqEvl(rc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int insertCsltRqFile(CsltRqVO rc) {
		try {
			return csltRqDAO.insertCsltRqFile(rc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int insertCsltRqFileComp(CsltRqVO rc) {
		try {
			return csltRqDAO.insertCsltRqFileComp(rc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<CsltRqVO> retrieveCsltRqList(String CAL_FROM, String CAL_TO, String CBO_STS, String CBO_COMP,
			String EDT_COMP, String EDT_BUYER, String CBO_DSC) {
		try {
			return csltRqDAO.retrieveCsltRqList(CAL_FROM, CAL_TO, CBO_STS, CBO_COMP, EDT_COMP, EDT_BUYER, CBO_DSC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<CsltRqVO> retrieveCsltRqDscList(String CSLT_RQ_NO) {
		try {
			return csltRqDAO.retrieveCsltRqDscList(CSLT_RQ_NO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<CsltRqVO> retrieveCsltRqDscFileList(String CSLT_RQ_NO) {
		try {
			return csltRqDAO.retrieveCsltRqDscFileList(CSLT_RQ_NO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<CsltRqVO> retrieveCsltRqDscFileCompList(String CSLT_RQ_NO) {
		try {
			return csltRqDAO.retrieveCsltRqDscFileCompList(CSLT_RQ_NO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int updateCsltRq(CsltRqVO rc) {
		try {
			return csltRqDAO.updateCsltRq(rc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int updateCsltRqFile(CsltRqVO rc) {
		try {
			return csltRqDAO.updateCsltRqFile(rc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int deleteCsltRqFileComp(String CSLT_RQ_NO, String SYS_FLNM) {
		try {
			return csltRqDAO.deleteCsltRqFileComp(CSLT_RQ_NO, SYS_FLNM);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/******************************************************************************/
	
	public Map<String, Object> retrieveCounselingDsc(String CSLT_RQ_NO) {
		try {
			Map<String, Object> map = csltRqDAO.retrieveCounselingDsc(CSLT_RQ_NO);
			if (map == null) {
				throw new AppetizerException("상담신청정보가 없습니다. (상담신청번호: " + CSLT_RQ_NO + ")");
			}
			return map;
		} catch (EmptyResultDataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("상담신청정보가 없습니다. (상담신청번호: " + CSLT_RQ_NO + ")");
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveCounselingList(String CSLT_RQ_NO, String USERTYPE) {
		
		return csltRqDAO.retrieveCounselingList(CSLT_RQ_NO, USERTYPE);
	}
	
	/**
	 * 계약상담 이력추가
	 */
	public void insertCtrCsltNtc(String CSLT_RQ_NO, String STS, String TINM, String CNTN, String USR_TPC,
			String RLTM_NTC_SMS, String SMS_NATV_NO, String RLTM_NTC_EMAIL, String EMAIL_NATV_NO, String USR_ID) {
		
		csltRqDAO.insertCtrCsltNtc(CSLT_RQ_NO, STS, TINM, CNTN, USR_TPC,
				RLTM_NTC_SMS, SMS_NATV_NO, RLTM_NTC_EMAIL, EMAIL_NATV_NO, USR_ID);
	}
	
	/**
	 * 담당자배정 - 담당바이어 정보를 저장한다.
	 */
	public void updateCtrCsltRqBuyer(String CSLT_RQ_NO, String BUYER_SHRT_BZPLNM, String BUYER_CHRG_BSNNM,
			String BUYER_NM, String NA_TRPL_C, String BUYER_ENO, String LS_CHGM) {
		
		if (StringUtils.isEmpty(CSLT_RQ_NO)) {
			throw new IllegalArgumentException("CSLT_RQ_NO is empty. (" + CSLT_RQ_NO + ")");
		}
		if (StringUtils.isEmpty(BUYER_ENO)) {
			throw new IllegalArgumentException("BUYER_ENO is empty. (" + BUYER_ENO + ")");
		}
		
		Map<String, Object> oldInfo = retrieveCounselingDsc(CSLT_RQ_NO); // 계약상담 기본 정보 (OLD)
		
		String old_BUYER_ENO = (String) oldInfo.get("BUYER_ENO");
		
		if (BUYER_ENO.equals(old_BUYER_ENO)) { // 기존과 동일한 담당바이어
			return; // 저장하지 않는다.
		}
		
		// 담당바이어 저장
		csltRqDAO.updateCtrCsltRqBuyer(CSLT_RQ_NO, BUYER_SHRT_BZPLNM, BUYER_CHRG_BSNNM, BUYER_NM, NA_TRPL_C, BUYER_ENO, LS_CHGM);
		
		Map<String, Object> newInfo = retrieveCounselingDsc(CSLT_RQ_NO); // 계약상담 기본 정보 (NEW)
		
		String CONM = (String) newInfo.get("CONM"); // 신청업체명
		String CHRRNM = (String) newInfo.get("CHRRNM"); // 신청자
		String CHRR_MPNO = (String) newInfo.get("CHRR_MPNO"); // 신청자 연락처
		
		String BUYER_OFFICE_TELNO = (String) newInfo.get("BUYER_OFFICE_TELNO"); // 바이어 사무소 연락처
		String BUYER_MPNO = (String) newInfo.get("BUYER_MPNO"); // 바이어 연락처
		if (StringUtils.isEmpty(BUYER_OFFICE_TELNO)) {
			BUYER_OFFICE_TELNO = BUYER_MPNO;
		}
		
		String c_TINM = "<신청업체 문자통보>"; // 제목
		String c_CNTN = "안녕하세요?"
				+ "\n신규계약상담 신청이 정상적으로 접수되었습니다."
				+ "\n상담 신청하신 상품과 내용을 검토후, 영업일 3일 이내에 담당자가 연락드리도록 하겠습니다. 감사합니다."
				+ "\n- 담당자 : " + BUYER_NM
				+ "\n- 연락처 : " + StringUtils.defaultIfBlank(BUYER_OFFICE_TELNO, "--");
		
		String b_TINM = "<담당MD 문자통보>";
		String b_CNTN = "신규계약상담 신청이 접수되었음을 알려드리니 기일내 처리하시기 바랍니다."
				+ "\n- 신청업체 : " + CONM + " / 신청자 : " + CHRRNM
				+ "\n- 연락처 : " + CHRR_MPNO
				+ "\n- 1차 안내 및 소개인사 : 문자메시지 접수일로 부터 영업일 3일 이내";
		
		// 신청자에게 문자전송
		csltRqSendService.sendMms(CSLT_RQ_NO, c_TINM, c_CNTN, CHRRNM, CHRR_MPNO);
		
		// 담당바이어에게 문자전송
		csltRqSendService.sendMms(CSLT_RQ_NO, b_TINM, b_CNTN, BUYER_NM, BUYER_MPNO);
		
		// 담당MD가 변경된 경우
		if (StringUtils.isNotEmpty(old_BUYER_ENO)) {
			String ob_TINM = "<담당MD 문자통보>";
			String ob_CNTN = "신규계약상담의 담당바이어가 변경되었습니다. 업무에 참고하시기 바랍니다."
					+ "\n- 신청업체 : " + CONM + " / 신청자 : " + CHRRNM
					+ "\n- 연락처 : " + CHRR_MPNO
					+ "\n- 변경 담당바이어: " + BUYER_NM;
			
			// 기존 담당바이어에게 문자전송
			csltRqSendService.sendMms(CSLT_RQ_NO, ob_TINM, ob_CNTN, (String) oldInfo.get("BUYER_NM"), (String) oldInfo.get("BUYER_MPNO"));
		}
	}
	
	/**
	 * 상담신청의 진행상태를 변경한다.
	 * 
	 * @param CSLT_RQ_NO	상담신청번호
	 * @param STS			진행상태 (1: 신청, 2: 보완, 3: 재신청, 4: 접수, 5: 거절, 6: 완료)
	 * @param LS_CHGM
	 * @param MON 
	 * @param REJECT_ALLOW 
	 */
	public void updateCtrCsltRqSts(String CSLT_RQ_NO, String STS, String LS_CHGM, String MON, String REJECT_ALLOW) {
		
		if (StringUtils.isEmpty(CSLT_RQ_NO)) {
			throw new IllegalArgumentException("CSLT_RQ_NO is empty. (" + CSLT_RQ_NO + ")");
		}
		if (StringUtils.isEmpty(STS)) {
			throw new IllegalArgumentException("STS is empty. (" + STS + ")");
		}
		if (StringUtils.isEmpty(LS_CHGM)) {
			throw new IllegalArgumentException("LS_CHGM is empty. (" + LS_CHGM + ")");
		}
		
		// 신청자는 재신청, 거절만 할 수 있다.
		if ("USR_ID".equals(LS_CHGM) && !"3".equals(STS) && !"5".equals(STS)) { // 신청자ID
			throw new IllegalArgumentException("Invalid STS. (" + STS + ")");
		}
		if (StringUtils.isEmpty(MON)) {
			MON = "0";
		}
		
		if (StringUtils.isEmpty(REJECT_ALLOW)) {
			MON = "N";
		}
		
		csltRqDAO.updateCtrCsltRqSts(CSLT_RQ_NO, STS, LS_CHGM, MON, REJECT_ALLOW);
	}
	/**
	 * 상담신청조회 출력
	 * @param CAL_FROM
	 * @param CAL_TO
	 * @param CBO_STS
	 * @param CBO_COMP
	 * @param EDT_COMP
	 * @param EDT_BUYER
	 * @return 
	 */
	public List<CsltRqVO> retrieveCsltRqDscOz(String CAL_FROM, String CAL_TO,
											  String CBO_STS, String CBO_COMP, String EDT_COMP, String EDT_BUYER) {
		try{
			return csltRqDAO.retrieveCsltRqDscOz(CAL_FROM, CAL_TO,CBO_STS,  CBO_COMP,  EDT_COMP, EDT_BUYER);
		} catch (DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
			
		}
	}
	
	/**
	 * 상담관리자 목록
	 * @return 
	 */
	public List<Map<String, Object>> retrieveHurInf() {
		try {
			return csltRqDAO.retrieveHurInf();
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * zip다운로드
	 * @return
	 */
	public List<Map<String, Object>> retrieveCsltRqZipFileList(String CSLT_RQ_NO) {
		try {
			return csltRqDAO.retrieveCsltRqZipFileList(CSLT_RQ_NO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
}
