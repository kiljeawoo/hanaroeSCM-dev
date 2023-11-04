package com.esum.appetizer.util.crypto;

import java.io.UnsupportedEncodingException;
import java.security.Key;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

import javax.crypto.KeyGenerator;

/**
 * 
 * @author YunChang.Lee
 */

public class KeyGen{

	public static String genSHA256(String str, byte[] salt){
		String SHA = ""; 
		try{
			MessageDigest sh = MessageDigest.getInstance("SHA-256"); 
			
//			sh.update(str.getBytes()); 
//			byte byteData[] = sh.digest();
			sh.reset();                                // 웹취약성조치
			sh.update(salt);                        // 웹취약성조치
			byte byteData[] = sh.digest(str.getBytes("UTF-8"));  // 웹취약성조치
			
			StringBuffer sb = new StringBuffer(); 
			for(int i = 0 ; i < byteData.length ; i++){
				sb.append(Integer.toString((byteData[i]&0xff) + 0x100, 16).substring(1));
			}
			SHA = sb.toString();
			
		}catch(NoSuchAlgorithmException e){
			SHA = null; 
		} catch (UnsupportedEncodingException e) {
			// 
			SHA = null; 
		}
		return SHA;
	}
}