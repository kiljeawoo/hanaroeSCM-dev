package com.nh.escm.common.service;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.session.SessionBox;
import com.nh.escm.common.dao.UserAccessLogDao;
import com.nh.escm.common.vo.UserAccessLogVO;

@Service
public class UserAccessLogService extends AbstractService {
	
	@Autowired
	private UserAccessLogDao userAccessLogDao;
	
	/**
	 * 사용자 접근 로그를 등록한다.
	 * 
	 * @param request
	 */
	public void insert(HttpServletRequest request) {
		
		UserAccessLogVO vo = new UserAccessLogVO();
		
		try {
			SessionBox sessionBox = (SessionBox) request.getSession().getAttribute("sessionBox");
			
			if (sessionBox != null) {
				vo.setMB_ID(sessionBox.getUserID());
			}
			vo.setLGIN_IDADR(request.getRemoteAddr());
			vo.setSVC_URL(request.getMethod() + " " + request.getRequestURI());
			
			vo.setETC_1(System.getProperty("SERVER"));
			vo.setETC_2(StringUtils.substring(request.getHeader("User-Agent"), 0, 200));
			// vo.setETC_3();
			// vo.setETC_4();
			// vo.setETC_5();
			
			userAccessLogDao.insert(vo); // insert
			
		} catch (AppetizerException e) {
			String msg = "사용자 접근 로그를 등록할 수 없습니다.";
			msg += "\nMB_ID=" + vo.getMB_ID() + ", LGIN_IDADR=" + vo.getLGIN_IDADR() + ", SVC_URL=" + vo.getSVC_URL();
			msg += "\nETC_1=" + vo.getETC_1() + ", ETC_2=" + vo.getETC_2() + ", ETC_3=" + vo.getETC_3() + ", ETC_4="
					+ vo.getETC_4() + ", ETC_5=" + vo.getETC_5();
			msg += "\n" + e.getMessage();
			
			logger.error(msg); // ignore
		}
	}
	
}
