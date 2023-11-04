package com.nh.escm.common.scheduling.message;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.config.Configurer;
import com.nh.escm.common.message.service.MessageSenderService;

public class PushErrorReSendingJob {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
	private MessageSenderService messageSenderService;
	
	public void start() {
		String currentServer = System.getProperty("SERVER");
		String mainServer = Configurer.getProperty("scheduling.main.server");
		
		logger.debug("Current Server:" + currentServer);
		logger.debug("Main Server:" + mainServer);
		
		if (currentServer != null && currentServer.equals(mainServer)) {
			logger.debug("This System is Main Server. Ready to run Scheduling.");
			doJob(); // Job 실행
		} else {
			logger.debug("This System is not Main Server. Do not run Scheduling.");
		}
	}
	
	private void doJob() {
		logger.info("!!Running... PushErrorReSendingJob");
		
		messageSenderService.sendPushErrorMessageToSMS();
	}
}
