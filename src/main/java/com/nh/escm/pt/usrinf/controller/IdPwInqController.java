package com.nh.escm.pt.usrinf.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.usrinf.service.IdPwInqService;
import com.nh.escm.pt.usrinf.vo.SQLMapNames.SearchMbIdNames;

@Controller
public class IdPwInqController extends AbstractController {

	@Autowired
	private IdPwInqService idPwInqService; 
	
	/**
	 * 아이디찾기
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/usrinf/getMbId")
	public void getMbId(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String USR_NM = URLDecoder.decode(requestHelper.getParameter("USR_NM", ""), "UTF-8"); // because of encodeURI()
		String NA_TRPL_C = requestHelper.getParameter("NA_TRPL_C");
		
		try {
			List<Map<String, Object>> userList = idPwInqService.getMbId(USR_NM, NA_TRPL_C);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_user");
			dsHelper.addColumns(SearchMbIdNames.class);
			for (Map<String, Object> map : userList) {
				dsHelper.setData(map);
			}
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			if (e instanceof AppetizerException) {
				logger.error(e.getMessage());
				sendData(response, new PlatformData(), -2, e.getMessage());
			} else {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		}
	}

	/**
	 * 비밀번호찾기 > 인증번호전송
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/sendSmsCertNumPw")
	public void sendSmsCertNumPw(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String MB_ID = requestHelper.getParameter("MB_ID");
		String NA_TRPL_C = requestHelper.getParameter("NA_TRPL_C");
		String BIRTH = requestHelper.getParameter("BIRTH");
		String USR_MPNO = requestHelper.getParameter("USR_MPNO");
		
		try {
			String CERT_NUM = idPwInqService.sendSmsCertNumPw(MB_ID, NA_TRPL_C, BIRTH, USR_MPNO); // 인증번호 전송
			
			String SMS_CERT_KEY = MB_ID + "^" + CERT_NUM; // SMS 인증키 (회원ID^인증번호)
			request.getSession().setAttribute("SMS_CERT_KEY", SMS_CERT_KEY); // 세션에 SMS 인증키 저장
			
			sendData(response, new PlatformData()); // SUCCESS
		} catch (AppetizerException e) {
			if (e instanceof AppetizerException) {
				logger.error(e.getMessage());
				sendData(response, new PlatformData(), -2, e.getMessage());
			} else {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		}
	}
	
	// 비밀번호찾기 > SMS 인증여부 검사
	private boolean checkSmsCertNumPw(HttpSession session, String MB_ID, String CERT_NUM) {
		
		// (1) 세션의 SMS 인증키와 입력받은 회원ID, 인증번호 검사
		String SMS_CERT_KEY = (String) session.getAttribute("SMS_CERT_KEY"); // SMS 인증키 (회원ID^인증번호)
		session.removeAttribute("SMS_CERT_KEY"); // 세션에서 SMS 인증키 삭제 (일회용)
		
		String[] arr = StringUtils.split(SMS_CERT_KEY, "^");
		
		if (arr != null && arr.length == 2 && arr[0].equals(MB_ID) && arr[1].equals(CERT_NUM)) {
			return true;
		}
		
		// (2) 관리자용 bypass 인증번호 검사
		String bypassCertNum = Configurer.getProperty("bypass.certNum");
		
		if (StringUtils.isNotEmpty(bypassCertNum) && bypassCertNum.equals(CERT_NUM)) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * 비밀번호찾기 > 비밀번호초기화
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/usrinf/sendMbPw")
	public void sendMbPw(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String MB_ID = requestHelper.getParameter("MB_ID");
		String NA_TRPL_C = requestHelper.getParameter("NA_TRPL_C");
		String CERT_NUM = requestHelper.getParameter("CERT_NUM");
		
		try {
			if (!checkSmsCertNumPw(request.getSession(), MB_ID, CERT_NUM)) { // SMS 인증여부 검사
				throw new AppetizerException("인증번호가 일치하지 않습니다. 인증번호전송 후 다시 입력해 주세요.");
			}
			
			Map<String, Object> user = idPwInqService.updateMbPw(MB_ID, NA_TRPL_C); // 비밀번호초기화
			
			DataSetHelper dsHelper = new DataSetHelper("ds_user");
			dsHelper.addColumns(SearchMbIdNames.class);
			dsHelper.setData(user);
			
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			if (e instanceof AppetizerException) {
				logger.error(e.getMessage());
				sendData(response, new PlatformData(), -2, e.getMessage());
			} else {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		}
	}
	
}

