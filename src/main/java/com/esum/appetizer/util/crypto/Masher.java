package com.esum.appetizer.util.crypto;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.ByteUtil;
import com.esum.appetizer.util.LoggerUtil;

/**
 * MD5 메시지 축약 알고리즘을 이용한 Masher 클래스
 * 사용법 : 
 * <ul>
 * <li>Masher.masher("Hellow World");
 * <li>Masher.masherFile("/home/userid/log.txt");
 * </ul>
 * 
 * @author YunChang.Lee
 */
 
public class Masher{

	private static Logger logger = LoggerUtil.getServerLogger(Masher.class);
    /**
     * 파일을 메시지 축약하는 메서드
     * @param   fileName    축약을 원하는 파일
     * @return  String 축약된 문자열
     */    
    public static String masherFile(String fileName,  byte[] salt){
    	FileInputStream in = null;
        try{
            // MessageDigest md = MessageDigest.getInstance("MD5"); 
        	MessageDigest md = MessageDigest.getInstance("SHA-512");  //  웁취약성조치 
            in = new FileInputStream(fileName);
            
            md.reset();         // 웹취약성조치. 2018.04.17
            md.update(salt);    // 웹취약성조치. 2018.04.17
            
            md.update(IOUtils.toByteArray(in));
  
            byte[] raw = md.digest(salt);            
            String base64 = BASE64Encoder.encode(raw);
            return base64;
        } catch (NoSuchAlgorithmException ne) {
        	logger.error(ne.getMessage(), ne);
        	return null;
        } catch (FileNotFoundException fe) {
        	logger.error(fe.getMessage(), fe);
        	return null;
        } catch (IOException ie) {
        	logger.error(ie.getMessage(), ie);
        	return null;
        } catch (AppetizerException e) {
        	logger.error(e.getMessage(), e);
        	return null;
        }
        finally{
        	IOUtils.closeQuietly(in);
        	
        }
	}
}