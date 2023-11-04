package com.esum.appetizer.common;

import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.session.SessionRepository;

public class AppetizerSessionAttributeListener implements HttpSessionAttributeListener {
	private static Log logger = LogFactory.getLog(AppetizerSessionAttributeListener.class);

	@Override
	public void attributeAdded(HttpSessionBindingEvent event) {
		if(event.getName().equals("sessionBox")) {
			SessionBox box = (SessionBox)event.getSession().getAttribute("sessionBox");
			SessionRepository.addSession(box.getUserKey(),box);
			logger.debug("Session AttributeAdded="+box);
		}
	}

	@Override
	public void attributeRemoved(HttpSessionBindingEvent event) {
		logger.debug("Session attributeRemoved="+event);
	}

	@Override
	public void attributeReplaced(HttpSessionBindingEvent event) {
		
		if(event.getName().equals("sessionBox")) {
			SessionBox box = (SessionBox)event.getSession().getAttribute("sessionBox");
			SessionRepository.addSession(box.getUserKey(),box);
			logger.debug("Session attributeReplaced="+box);
		}
	}
}
