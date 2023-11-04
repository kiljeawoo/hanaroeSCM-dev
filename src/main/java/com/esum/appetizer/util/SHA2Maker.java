package com.esum.appetizer.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.slf4j.Logger;

import com.esum.appetizer.exception.AppetizerException;

public class SHA2Maker {
	private static Logger logger = LoggerUtil.getServerLogger(SHA2Maker.class);
    
	public static String encrypt(String planText,  byte[] salt) {
        try{
            MessageDigest md = MessageDigest.getInstance("SHA-256");
//          md.update(planText.getBytes());
//          byte byteData[] = md.digest();
            
            md.reset();         // 웹취약성조치 
            md.update(salt);  // 웹취약성조치
            byte byteData[] = md.digest(planText.getBytes());   // 웹취약성조치
            
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < byteData.length; i++) {
                sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
            }

            StringBuffer hexString = new StringBuffer();
            for (int i=0;i<byteData.length;i++) {
                String hex=Integer.toHexString(0xff & byteData[i]);
                if(hex.length()==1){
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
            
        // 웹취약성 조치
        } catch(NoSuchAlgorithmException ne) {
        	logger.error(ne.getMessage());
            return null;
        } catch(AppetizerException ae) {
            logger.error(ae.getMessage());
            return null;
        }
    }

		
}
