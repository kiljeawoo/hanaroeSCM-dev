package com.esum.appetizer.session;

import java.util.HashMap;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class SessionRepository {
	private static Log logger = LogFactory.getLog(SessionRepository.class);
	private static HashMap<String, SessionBox> sessionStore = new HashMap<String, SessionBox>();
	
	public static void addSession(String key, SessionBox value) {
		sessionStore.put(key, value);
	}
	
	public static SessionBox getSession(String key) {
		return sessionStore.get(key);
	}
	
	public static boolean exist(String key) {
		return sessionStore.containsKey(key);
	}
	
	public static void removeSession(String key) {
		sessionStore.remove(key);
	}
	
	public static int getSessionStoreSize() {
		return sessionStore.size();
	}
	
	public static void printSessionStore() {
//		logger.info("### PrintSessionStore ###");
//		logger.info("### Size="+getSessionStoreSize());
//		Set<String> keys = sessionStore.keySet();
//		for(String key : keys) {
//			logger.info("=> "+key+"="+sessionStore.get(key));
//		}
	}
}
