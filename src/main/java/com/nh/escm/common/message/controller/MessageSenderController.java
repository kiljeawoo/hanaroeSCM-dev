package com.nh.escm.common.message.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.message.service.MessageSenderService;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO;

@RestController
@RequestMapping("/rest/message")
public class MessageSenderController extends AbstractController {

	@Autowired
	private MessageSenderService messageSenderService; 
	
	@RequestMapping(method=RequestMethod.POST, value = "/sendMessage")
	public void sendMessage(HttpServletRequest request, HttpServletResponse response) {
	
		PlatFormRequestHelper requestHelper = new PlatFormRequestHelper(request);
		List<TB_PUSH_MSGVO> pushMessageList = requestHelper.getValueObjects(TB_PUSH_MSGVO.class, "PUSH_DS");
		try {
			if(pushMessageList != null && pushMessageList.size() > 0) {
				for(TB_PUSH_MSGVO vo : pushMessageList) {
					messageSenderService.savePushMessage(vo);
				}
				sendData(response, new PlatformData());
			} else {
				sendData(response, new PlatformData(), -1, "push.message.error");
			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "push.save.error");
		}
	}
	
}
