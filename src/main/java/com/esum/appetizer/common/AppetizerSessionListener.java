package com.esum.appetizer.common;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.session.SessionRepository;

public class AppetizerSessionListener implements HttpSessionListener {

	private static Log logger = LogFactory.getLog(AppetizerSessionListener.class);
	
	@Override
	public void sessionCreated(HttpSessionEvent event) {
		logger.debug("SessionCreated");
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent event) {
		Object o = event.getSession().getAttribute("sessionBox");
		if(o != null) {
			SessionBox box = (SessionBox)o;
			SessionRepository.removeSession(box.getUserKey());
			logger.debug("SessionDestroyed="+box);
		}
	}
}
