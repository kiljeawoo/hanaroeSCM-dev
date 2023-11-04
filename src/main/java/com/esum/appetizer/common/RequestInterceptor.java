package com.esum.appetizer.common;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.Predicate;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.RequestUtil;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformType;
import com.nh.escm.common.service.UserAccessLogService;
import com.nh.escm.pt.usrinf.service.LginLgotService;

public class RequestInterceptor extends HandlerInterceptorAdapter {
	
	@Autowired
	private UserAccessLogService userAccessLogService;

	@Autowired
	private LginLgotService loginService;
	
	private static final Log logger = LogFactory.getLog(RequestInterceptor.class);
	private static List<String> byPassList;
	private static String serverVersion;
	public static List<Map<String, String>> menuVersionMap;
	private void setByPassList() {
		String[] bypassURLs = StringUtils.split(Configurer.getProperty("bypass.urls"), ",");
		byPassList=  Arrays.asList(bypassURLs);
	}
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
		if(byPassList == null) {
			setByPassList();
		}
		
		if(serverVersion == null) {
			serverVersion = StringUtils.trim(Configurer.getProperty("version","pass"));
		}
		
		if (logger.isDebugEnabled()) {
			logger.debug(request.getRequestURI() + " (locale=" + ClientHolder.getLocale() + ")");
		}
		
		final String CurrentURI = StringUtils.remove(request.getRequestURI(), request.getContextPath());
		
		Predicate predicate = new Predicate() {
			private String passURL = "";
			@Override
			public boolean evaluate(Object paramObject) {
				passURL = (String)paramObject;

				if(passURL.lastIndexOf("*") > -1) {
					return (CurrentURI.indexOf(StringUtils.replace(passURL, "*", "")) > -1);
				} else {
					return passURL.equals(CurrentURI);
				}
			}
		};

		Object sessionObject = request.getSession().getAttribute("sessionBox");
		
		/**
		 * 서비스 점검상태 체크(로그인된 사용자) START (20171130)
		 *  - comTran.xjs의 gfn_callService의 콜백(gfn_callBackResult)에서 처리
		 *  - ErrorCode -400
		 */
		if(sessionObject != null) {
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("bsnDsc", "ESCM");
			List<Map<String, Object>> service = loginService.retrieveBlockService(param);
			if (service != null && service.size() > 0) {
//				System.out.println("[ServiceTest] 서버 점검 중 로그아웃 처리 : " + CurrentURI);
				String bckTi = (String) service.get(0).get("BLOCK_TI");
				String bckCntn = (String) service.get(0).get("BLOCK_CNTN");
				String bckSt = (String) service.get(0).get("BLOCK_ST_DTM");
				String bckEd = (String) service.get(0).get("BLOCK_ED_DTM");
				request.getSession().invalidate();
				sendData(response, new PlatformData(), -400, bckTi + "||" + bckCntn + "||" + bckSt + "||" + bckEd);
				return false;
			} else {
//				System.out.println("[ServiceTest] 서버 점검 중이 아님 : " + CurrentURI);
			}
		}
		/* 서비스 점검상태 체크(로그인된 사용자) END */
		
		if(!CollectionUtils.exists(byPassList, predicate)) {
			
			String param = "glnCode=" + RequestUtil.getParam(request, "glnCode", "");
			String glnCode = getParamStr(param, "glnCode");
			String userKey = getParamStr(param, "userKey");
			String version = StringUtils.defaultIfEmpty(getParamStr(param,"mainVersion"), "pass");

			if(!version.equals(serverVersion) && !version.equals("pass")) {
				sendData(response, new PlatformData(), -200, "error.message.version");
				return false;
			}
			
			if(sessionObject == null) {
				sendData(response, new PlatformData(), -100, "error.message.2002.invalidSession");
				return false;
			}
			
			SessionBox sessionBox = (SessionBox)sessionObject;			
			String sessionUserKey = sessionBox.getUserKey();
			if(StringUtils.isEmpty(userKey) || 
					StringUtils.isEmpty(sessionUserKey) || 
						!userKey.equals(sessionUserKey)) {
				logger.debug("UserKey is not found or equal");
			}
			
			if(StringUtils.isNotEmpty(glnCode)){
				String _glnCode = sessionBox.getGlnCode();
				if(!glnCode.equals(_glnCode)){
					sendData(response, new PlatformData(), -300, "error.message.2005.invalidSession");
					return false;
				}
			}
			
			request.setAttribute("sessionBox", sessionBox);
			
			userAccessLogService.insert(request); // 사용자 접근 로그를 등록한다.
			
		} else {
			if(sessionObject != null) {
				request.setAttribute("sessionBox", (SessionBox)sessionObject);
			}
		}
		return true;
	}
	
	private void sendData(HttpServletResponse response, PlatformData platformData, int errorCode, String errorMessage) {
		VariableList varList = platformData.getVariableList();
		varList.add("ErrorCode", errorCode);
		varList.add("ErrorMsg" , errorMessage);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(platformData);
		try {
			pRes.sendData();
		} catch (PlatformException e) {
			logger.error(e);
		}
	}
	
	//파라미터 파싱 a=1 b=2 형식
	public String getParamStr(String param, String target){
		
		if(StringUtils.isEmpty(param)) return "";
		
		String arr [] = param.split(" ");
		String result = "";
		if(arr != null && arr.length > 0){
			
			for(int i=0 ; i<arr.length ; i++){
				String str = arr[i];
				if(str.indexOf("=") != -1){
					String temp[] = str.split("=");
					String key = "";
					String value = ""; 
					
					if(temp.length==1){
						key = str.split("=")[0].trim();
					}else{
						key = str.split("=")[0].trim();
						value = str.split("=")[1];
					}					
					if(key.equals(target)){
						result = value;
						break;
					}
				}
			}
			
		}
		return result;
	}; 
	
}