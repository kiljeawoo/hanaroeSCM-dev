package com.nh.escm.pt.comn.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.nexacro.xapi.data.PlatformData;

@Controller
public class SessKeepController extends AbstractController {
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/comn/sessKeep")
	public void extendLogin(HttpServletRequest request, HttpServletResponse response) {
		
		PlatformData platformData = new PlatformData();
		
		sendData(response, platformData);
	}
}
