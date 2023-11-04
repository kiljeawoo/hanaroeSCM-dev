package com.esum.appetizer.util.crypto;

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

public class DESedeEncryption {

	private static final String UNICODE_FORMAT = "UTF8";
	private static final String DESEDE_ENCRYPTION_SCHEME = "DESede";
	private static String myEncryptionKey = "DLTJAXPZMDPRTMXMFJTMDLAI";


	public static String encryptWithSymmetric(String data) {
		String enString = null;
		try {
			SecretKeySpec secreteKeySpec = new SecretKeySpec(myEncryptionKey.getBytes(UNICODE_FORMAT),
					DESEDE_ENCRYPTION_SCHEME);
			Cipher cipher = Cipher.getInstance(DESEDE_ENCRYPTION_SCHEME
					+ "/CBC/PKCS5Padding");

			String initVector = "01234567";

			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes());

			cipher.init(Cipher.ENCRYPT_MODE, secreteKeySpec, iv);

			byte[] plainText = data.getBytes(UNICODE_FORMAT);

			byte[] encodedData = cipher.doFinal(plainText);

			enString =  BASE64Encoder.encode(encodedData);
		} catch (InvalidKeyException | NoSuchAlgorithmException
				| NoSuchPaddingException | InvalidAlgorithmParameterException
				| UnsupportedEncodingException | IllegalBlockSizeException
				| BadPaddingException e) {
			e.printStackTrace(System.err);
		}
		return enString;
	}

	public static String decryptWithSymmetric(String encryptedData) {
		String deString = null;
		try {
			Cipher cipher = Cipher.getInstance(DESEDE_ENCRYPTION_SCHEME + "/CBC/PKCS5Padding");

			SecretKeySpec secretKeySpec = new SecretKeySpec(myEncryptionKey.getBytes(UNICODE_FORMAT),
					DESEDE_ENCRYPTION_SCHEME);

			String initVector = "01234567";

			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes());

			cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, iv);

			byte[] decryptedData = cipher.doFinal(BASE64Decoder.decodeBuffer(encryptedData));

			deString =  new String(decryptedData);
		} catch (InvalidKeyException | NoSuchAlgorithmException
				| NoSuchPaddingException | InvalidAlgorithmParameterException
				| IllegalBlockSizeException | BadPaddingException | UnsupportedEncodingException e) {
			e.printStackTrace(System.err);
		}
		return deString;
	}

}