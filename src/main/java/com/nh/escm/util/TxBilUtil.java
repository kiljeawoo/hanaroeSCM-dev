package com.nh.escm.util;

import java.util.Date;
import java.util.Random;

import com.ktnet.soap.util.DateTimeFormatter;

public class TxBilUtil {
	/**
	 * 16바이트 난수를 16진수 String으로 변환
	 * 
	 * @return
	 */
	public static String makeHexString() {
		int cnt = 0;
		String hexStr = "";
		Random rand = new Random();
		while (cnt != 8) {
			hexStr = hexStr + Integer.toHexString(Math.abs(rand.nextInt(16)));
			cnt++;
		}

		return hexStr;
	}
	
	/**
	 * 16바이트 난수를 16진수 String으로 변환
	 * 
	 * @return
	 */
	public static String makeHexString(int len) {
		int cnt = 0;
		String hexStr = "";
		Random rand = new Random();
		while (cnt != len) {
			hexStr = hexStr + Integer.toHexString(Math.abs(rand.nextInt(16)));
			cnt++;
		}
		
		return hexStr;
	}
	
	/**
	 * 세금계산서 승인번호(국세청전송일련번호) 생성
	 * @param registeredID 국세청 등록번호 8자리
	 * @return
	 */
	public static String generateNTS_TMS_SQNO(String registeredID) {
		String NTS_TMS_SQNO = null;

		String currentDate = DateTimeFormatter.getInstance().formatDate(new Date(), "yyyyMMdd");
		NTS_TMS_SQNO = currentDate + registeredID + "scm" + makeHexString(5);
		
		return NTS_TMS_SQNO;
	}

	/**
	 * 하나로eSCM 세금계산서 승인번호(국세청전송일련번호) 생성
	 * @param registeredID 국세청 등록번호 8자리
	 * @return
	 */
	public static String genCrtdtNTS_TMS_SQNO(String TAX_DATE, String registeredID) {
		String NTS_TMS_SQNO = null;

		NTS_TMS_SQNO = TAX_DATE + registeredID + makeHexString(8);
		
		return NTS_TMS_SQNO;
	}	
	
	/**
	 * 세금계산서 승인번호(국세청전송일련번호) 생성
	 * @param registeredID 국세청 등록번호 8자리
	 * @return
	 */
	public static String generatePBC_SQNO() {
		String PBC_SQNO = null;

		String currentDateTime = DateTimeFormatter.getInstance().formatDate(new Date(), "yyyyMMddHHmmss");
		PBC_SQNO = currentDateTime + "scm" + makeHexString(7);
		
		return PBC_SQNO;
	}


}
