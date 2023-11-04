package com.nh.escm.pt.usrinf.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.pt.usrinf.dao.IdPwInqDAO;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.BasicInfo;
import com.nh.escm.util.RandomUtil;

@Service
public class IdPwInqService extends AbstractService {
	
	@Autowired
	private IdPwInqDAO idPwInqDAO;
	
	@Autowired
	private SendService sendService;
	
	/**
	 * 아이디찾기
	 * 
	 * @param USR_NM
	 * @param NA_TRPL_C
	 * @return
	 */
	public List<Map<String, Object>> getMbId(String USR_NM, String NA_TRPL_C) {
		
		return idPwInqDAO.getMbId(USR_NM, NA_TRPL_C);
	}
	
	/**
	 * 비밀번호찾기 > 회원정보 조회
	 * 
	 * @param MB_ID
	 * @param NA_TRPL_C
	 * @return "MB_PW" 항목에 거래처기본정보의 사업자번호가 설정된다.
	 */
	public Map<String, Object> getMbPw(String MB_ID, String NA_TRPL_C) {
		try {
			Map<String, Object> user = idPwInqDAO.getMbPw(MB_ID, NA_TRPL_C);
			if (user == null) {
				throw new AppetizerException("조회된 회원정보가 없습니다. 입력하신 내용을 확인해 주세요.");
			}
			return user;
		} catch (EmptyResultDataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("조회된 회원정보가 없습니다. 입력하신 내용을 확인해 주세요.");
		}
	}
	
	/**
	 * 비밀번호찾기 > 인증번호전송
	 * 
	 * @param MB_ID
	 * @param NA_TRPL_C
	 * @param BIRTH
	 * @param USR_MPNO
	 * @return
	 */
	public String sendSmsCertNumPw(String MB_ID, String NA_TRPL_C, String BIRTH, String USR_MPNO) {
		
		USR_MPNO = StringUtils.replace(USR_MPNO, "-", ""); // "-" 제거
		
		Map<String, Object> user = getMbPw(MB_ID, NA_TRPL_C);
		
		String DB_USR_NM = (String) user.get(BasicInfo.USR_NM.name());
		String DB_BIRTH = (String) user.get(BasicInfo.BIRTH.name());
		String DB_USR_MPNO = (String) user.get(BasicInfo.USR_MPNO.name());
		
		DB_USR_MPNO = StringUtils.replace(DB_USR_MPNO, "-", ""); // "-" 제거
		
		if (StringUtils.isEmpty(BIRTH)) {
			throw new AppetizerException("생년월일을 입력해 주세요.");
		} else if (!BIRTH.equals(DB_BIRTH)) {
			throw new AppetizerException("입력하신 생년월일이 회원정보와 일치하지 않습니다.");
		}
		
		if (StringUtils.isEmpty(USR_MPNO)) {
			throw new AppetizerException("휴대전화번호를 입력해 주세요.");
		} else if (!USR_MPNO.equals(DB_USR_MPNO)) {
			// [2016-11-22] 휴대전화번호 검사하지 않도록 수정함. (농협 요구사항 - 전화번호 변경 시, 비밀번호 초기화 어려움)
			// throw new AppetizerException("입력하신 휴대전화번호가 회원정보와 일치하지 않습니다.");
		}
		
		String certNum = RandomUtil.getRandomNumber(); // 인증번호 (6자리)
		
		/**************************************************************************
		 * 휴대전화번호로 인증번호 전송
		 *************************************************************************/
		String MSG = "[하나로eSCM] 인증번호(" + certNum + ")를 입력해 주세요.";
		if (logger.isDebugEnabled()) {
			logger.debug("MB_ID = " + MB_ID + ", USR_MPNO = " + USR_MPNO + ", " + MSG);
		}
		sendService.sendSms(USR_MPNO, MSG, DB_USR_NM);
		
		return certNum;
	}
	
	/**
	 * 비밀번호찾기 > 비밀번호초기화
	 * 
	 * @param MB_ID
	 * @param NA_TRPL_C
	 * @return
	 */
	public Map<String, Object> updateMbPw(String MB_ID, String NA_TRPL_C) {
		
		Map<String, Object> user = getMbPw(MB_ID, NA_TRPL_C);
		
		/**************************************************************************
		 * 거래처기본정보의 사업자번호로 비밀번호를 업데이트
		 *************************************************************************/
		if (logger.isDebugEnabled()) {
			logger.debug("[비밀번호초기화] MB_ID = " + MB_ID + ", initMbPw = " + user.get("MB_PW"));
		}
		idPwInqDAO.updateMbPw(MB_ID, (String) user.get("MB_PW"), DateUtil.getCurrentDate("yyyyMMdd"));
		
		return user;
	}
	
}
