package com.esum.appetizer.util.crypto;

import java.io.UnsupportedEncodingException;

import org.slf4j.Logger;

import com.esum.appetizer.util.LoggerUtil;

public class CryptoTestMain {
	public static Logger logger = LoggerUtil.getServerLogger(CryptoTestMain.class);
	
	public static void main(String[] args) throws UnsupportedEncodingException {
		String testOrgString ="https://www.google.com/calendar/render?hl=ko&tab=wc&gsessionid=이윤창";

		logger.debug("testOrgString: "+ testOrgString);
		
		String enCryptString = Crypto.getInstance().encrypt(testOrgString);
		
		logger.debug("enCryptString: "+enCryptString);
		
		byte[] b_org = testOrgString.getBytes("UTF-8");
		byte[] b_en = Crypto.getInstance().encrypt(b_org);
		
		logger.debug("enCryptString: "+BASE64Encoder.encode(b_en));
		
		
		String deCryptString = Crypto.getInstance().decrypt(enCryptString);
		
		logger.debug("deCryptString: "+deCryptString);

		String  e_base = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=";
		
		logger.debug(new String(BASE64Decoder.decodeBuffer(e_base)));
		
	}

}
