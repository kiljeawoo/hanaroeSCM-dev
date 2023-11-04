package com.esum.appetizer.util;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;

import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;

public class RequestUtil {
	
	public static String getParam(HttpServletRequest request, String name, String defaultValue) {
		String value = request.getParameter(name);
		return StringUtils.isNotEmpty(value) ? value : defaultValue;
	}
	
	public static int getParamInt(HttpServletRequest request, String name, int defaultValue) {
		String value = request.getParameter(name);
		if (StringUtils.isEmpty(value)) {
			return defaultValue;
		} else {
			try {
				return Integer.parseInt(value);
			} catch (NumberFormatException e) {
				return defaultValue;
			}
		}
	}

	/**
	 * CORS 방지 토큰 값 검증
	 * 파라매터명은 고정 값 'ptoken'만 사용함
	 * @param request
	 * @return
	 */
	public static boolean validCorsToken(PlatFormRequestHelper requestHelper) {
		String sToken = requestHelper.getToken();
		String pToken = requestHelper.getParameter("ptoken");

		if (sToken != null && sToken.equals(pToken)) {
			return true;
		}
		return false;
	}
	
	/**
	 * CORS 토큰 값 제거(사용완료 후 호출 필수)
	 * @param request
	 */
	public static void clearCorsToken(HttpServletRequest request) {
		SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
		if (box != null) {
			box.setCorsToken(null);
		}
	}
}