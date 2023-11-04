package com.nh.api;

import java.text.SimpleDateFormat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SequenceManager {

	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	private final static SequenceManager instance = new SequenceManager();
	
	private final Object lock = new Object();
	
	private static final int MAX_RETRY = 5;
	
	
	private SequenceManager() {
	}

	/**
	 * IF_SEQ 테이블에서  IF_ID에 대한 sequence를 생성하고 리턴한다.
	 * 생성한 sequence는 7자리 숫자로 이뤄진다.
	 */
	public String create(String ifId, String sendDate) throws ApiException {
		if (ifId == null || ifId.trim().length() < 5) {
			throw new ApiException("IfId length is less than 5!");
		}
		return create(ifId.substring(0,5), sendDate, 7);
	}
	
	//---------------------------------------------------------------
	// CurrentTimeId
	//---------------------------------------------------------------
	private static long previousTimeMillis = System.currentTimeMillis();

	public synchronized String create(String ifId, String sendDate, int length) {
		long currentTimeMillis;

		do {
			currentTimeMillis = System.currentTimeMillis();
		} 
		while (currentTimeMillis == previousTimeMillis);

		previousTimeMillis = currentTimeMillis;
		
		SimpleDateFormat sdf = new SimpleDateFormat("HHmmssS");
		return sdf.format(currentTimeMillis);
	}
	
	public static SequenceManager getInstance() {
		return instance;
	}
}
