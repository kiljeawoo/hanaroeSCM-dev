package com.esum.appetizer.session;

import com.esum.appetizer.util.crypto.KeyGen;

public class UserKeyGenerator {
	
	public static String genUserKey(String seed) {
		String time = System.currentTimeMillis()+""+System.nanoTime();
//		return KeyGen.genSHA256(time+seed);
		String strSalt = "nhescm";                               // 웹취약성 조치
		byte[] salt = strSalt.getBytes();                      // 웹취약성 조치
		return KeyGen.genSHA256(time+seed, salt);    // 웹취약성 조치
	}

}
