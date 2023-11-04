package com.esum.appetizer.util.crypto;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.CipherOutputStream;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.LoggerUtil;

/**
 * 주어진 스트링과 파일을 비밀키 암호화 하는 클래스이다.
 * 
 * @author YunChang.Lee
 */

public class Crypto {
	private static Logger logger = LoggerUtil.getServerLogger(Crypto.class);
	private Cipher mAesCipher; 
	private SecretKey mSecretKey; 
	private IvParameterSpec mIvParameterSpec; 
	private static final String CIPHER_TRANSFORMATION = "AES/CBC/PKCS5Padding"; 
	private static final String CIPHER_ALGORITHM = "AES";

	private static Crypto instance = null;
	
	public static Crypto getInstance() {
		if(instance == null) {
			instance = new Crypto();
		}
		return instance;
	}
	
	private Crypto() {
		try {
			mAesCipher = Cipher.getInstance(CIPHER_TRANSFORMATION); 
			
			/*
			byte[] seedByte = new byte[16];
			for (int i = 0; i < seedByte.length; i++)
			{
				seedByte[i] = (byte)i;
			}
			*/
			
			String seedString = Configurer.getProperty("crypto.seed");    // 웹취약성조치: crypto.seed=nhescm  추가 /nhvan/src/main/resources/config/environment/nhvan.properties
			byte[] seedByte = seedString.getBytes();                      // 웹취약성조치

			mSecretKey = new SecretKeySpec(seedByte, CIPHER_ALGORITHM); 
			mIvParameterSpec = new IvParameterSpec(seedByte);
		} catch (NoSuchPaddingException npe) {
			logger.error(npe.getMessage());
		} catch (NoSuchAlgorithmException nae) {
			logger.error(nae.getMessage());
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
		}
	}


	public byte[] encrypt(byte[] inputBytes) { 
		byte[] encryptedData = null;
		try {
			mAesCipher.init(Cipher.ENCRYPT_MODE, mSecretKey, mIvParameterSpec); 
			encryptedData = mAesCipher.doFinal(inputBytes); 
		} catch (InvalidAlgorithmParameterException iae) {
			logger.error(iae.getMessage());
		} catch (InvalidKeyException ike) {
			logger.error(ike.getMessage());
		} catch (IllegalBlockSizeException ibe) {
			logger.error(ibe.getMessage());
		} catch (BadPaddingException be) {
			logger.error(be.getMessage());
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
		}
		return encryptedData;
	} 

	public byte[] decrypt(byte[] encryptedData){ 

		byte[] decryptedData = null;
		try {
			mAesCipher.init(Cipher.DECRYPT_MODE, mSecretKey,mIvParameterSpec); 
			decryptedData = mAesCipher.doFinal(encryptedData);
		} catch (InvalidAlgorithmParameterException iae) {
			logger.error(iae.getMessage());
		} catch (BadPaddingException be) {
			logger.error(be.getMessage());
		} catch (InvalidKeyException ike) {
			logger.error(ike.getMessage());
		} catch (IllegalBlockSizeException ibe) {
			logger.error(ibe.getMessage());
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
		} 
		return decryptedData;
	} 

	
	/**
	 * 문자열 대칭 암호화
	 * 
	 * @param ID
	 *            비밀키 암호화를 희망하는 문자열
	 * @return String 암호화된 ID
	 * @exception Exception
	 */
	public String encrypt(String inputString) {
		if (inputString == null || inputString.length() == 0)
			return "";

		String encryptedString = null;
		try {
			byte[] inputBytes = inputString.getBytes("UTF8");
			byte[] outputBytes = encrypt(inputBytes);
			
			encryptedString = BASE64Encoder.encode(outputBytes);
			
		} catch (UnsupportedEncodingException e) {
			logger.error(e.getMessage());
		}
		return encryptedString;

	}




	/**
	 * 문자열 대칭 복호화
	 * 
	 * @param codedID
	 *            비밀키 복호화를 희망하는 문자열
	 * @return String 복호화된 ID
	 * @exception Exception
	 */
	public String decrypt(String codedID) {
		if (codedID == null || codedID.length() == 0)
			return "";

		String strResult = "";

			try {
				byte[] inputBytes1 = BASE64Decoder.decodeBuffer(codedID);		
				byte[] outputBytes2 = decrypt(inputBytes1);
				strResult = new String(outputBytes2, "UTF8");
			} catch (UnsupportedEncodingException e) {
				logger.error(e.getMessage());
			}

		return strResult;
	}

	/**
	 * 파일 대칭 암호화
	 * 
	 * @param infile
	 *            암호화을 희망하는 파일명
	 * @param outfile
	 *            암호화된 파일명
	 * @exception Exception
	 */
	public void encryptFile(String infile, String outfile)
			throws Exception {

		FileInputStream in = new FileInputStream(infile);
		FileOutputStream out = new FileOutputStream(outfile);
		try {

			encryptInputStream(in, out);
		} finally {
			IOUtils.closeQuietly(out);
			IOUtils.closeQuietly(in);
		}

	}

	public void encryptInputStream(InputStream in, OutputStream out)
			throws Exception {


		CipherOutputStream cipherOut = null;
		try {
			cipherOut = new CipherOutputStream(out, mAesCipher);
			IOUtils.copy(in, cipherOut);
		} finally {
			IOUtils.closeQuietly(cipherOut);
		}
	}

	/**
	 * 파일 대칭 복호화
	 * 
	 * @param infile
	 *            복호화을 희망하는 파일명
	 * @param outfile
	 *            복호화된 파일명
	 * @exception Exception
	 */
	public void decryptFile(String infile, String outfile)
			throws Exception {
		FileInputStream in = new FileInputStream(infile);
		FileOutputStream out = new FileOutputStream(outfile);
		try {
			decryptInputStream(in, out);
		} finally {
			IOUtils.closeQuietly(in);
			IOUtils.closeQuietly(out);
		}
	}

	public void decryptInputStream(InputStream in, OutputStream out) {


		CipherOutputStream chperOut = null;
		try {

			chperOut = new CipherOutputStream(out, mAesCipher);
			IOUtils.copy(in, chperOut);			
		} catch (IOException ie) {
			logger.error(ie.getMessage());
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
		}finally {
			IOUtils.closeQuietly(chperOut);
		}
	}
}