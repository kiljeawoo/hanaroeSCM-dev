package com.esum.appetizer.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformType;

public class AbstractController {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	protected void sendData(HttpServletResponse response, PlatformData platformData) {
		sendData(response, platformData, 0, "SUCCESS");
	}
	
	protected void sendResponse(HttpServletResponse response, String responseMessage) {
		try {
			ServletOutputStream sos = response.getOutputStream();
			sos.println(responseMessage);
			sos.flush();
			sos.close();
		} catch (IOException e) {
			logger.error(e.getMessage());
		}
	}
	
	protected void sendData(HttpServletResponse response, PlatformData platformData, int errorCode, String errorMessage) {
		
		VariableList varList = platformData.getVariableList();
		varList.add("ErrorCode", errorCode);
		if(StringUtils.isEmpty(errorMessage)) {
			varList.add("ErrorMsg" , "error.message.server.exception");
		} else {
			varList.add("ErrorMsg" , errorMessage);
		}
		//CONTENT_TYPE_SSV(12월말 패치 이후 변경)
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(platformData);
		try {
			pRes.sendData();
		} catch (PlatformException e) {
			logger.error(e);
		}
	}

	protected void sendHtmlAlert(HttpServletResponse response, String errorMessage) {
		
		try {
			response.setContentType("text/html;charset=utf-8");
			response.setHeader("Set-Cookie", "fileDownload=true; path=/");
			PrintWriter pw =  response.getWriter();
			pw.println("<script>");
			pw.println("alert('엑셀다운로드중 에러가 발생했습니다.');");
			pw.println("</script>");
			pw.flush();
		} catch (IOException e) {
			logger.error(e.getMessage());
		}		
	}
}
