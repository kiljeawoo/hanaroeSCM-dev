package com.nh.escm.pt.usrinf.controller;







import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.usrinf.service.PwChgService;



/**
 * <pre>PwChgController.java</pre>
 * @author 김복궁
 * @version 1.0
 * @since 2015. 8. 31.
 * @modified 
 * @modifier 
 */

@Controller
public class PwChgController extends AbstractController {

	@Autowired
	private PwChgService pwChgService;


	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/changePW")
	public void changePW(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String pw = requestHelper.getParameter("pw");
		String newPw = requestHelper.getParameter("new_pw");

		logger.debug("pw ["+pw+"]");
		logger.debug("newPw ["+newPw+"]");

		try {

			if(pwChgService.isExisePw(requestHelper.getUserID(),pw)){
				if(pwChgService.updatePw(requestHelper.getUserID(),newPw)){
					sendData(response, new PlatformData(),0,"result.message.savePw.success");		
				}else{
					sendData(response, new PlatformData(), -1, "error.message.server.exception");
				}
			}else{				
				sendData(response, new PlatformData(), -2, "error.message.noUserPw");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
	} 
}

