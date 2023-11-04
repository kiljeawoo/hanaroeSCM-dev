package com.nh.api;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.apache.commons.io.output.ByteArrayOutputStream;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DurationFormatUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nh.api.ApiMessage;
import com.nh.api.ApiException;

/**
 * Utils.
 */
public class Utils {

	private static Logger logger = LoggerFactory.getLogger(Utils.class);
	
	public static String right(int length, int value) {
		StringBuffer buf = new StringBuffer();
		for(int i=0;i<length;i++)
			buf.append("0");
		
		return new DecimalFormat(buf.toString()).format(value);
	}
	
	/**
	 * TODO - byte 계산으로 변경해야 함. (dummy 값 가져올때 사용)
	 */
	public static String subStringByIndex(String src, int beginIndex, int endIndex) throws ApiException {
		
		
		if (beginIndex > endIndex)
			throw new ApiException("Could not subString. BeginIndex("+beginIndex+") is bigger than endIndex("+endIndex+")");
		
		if (src.length() < endIndex)
			throw new ApiException("Could not subString. EndIndex("+endIndex+") is bigger than string size("+src.length()+")");
		
		return src.substring(beginIndex, endIndex).trim();
	}
	//응답 전문 중 DUMMY 항목 내용을 BYTE 단위로 계산해서 가져오기 위한 로직
	public static String subStringByByte(String src, int beginIndex, int endIndex) throws ApiException {
		int byteBeginIndex = 0;
		if (beginIndex > endIndex)
			throw new ApiException("Could not subString. BeginIndex("+beginIndex+") is bigger than endIndex("+endIndex+")");
		
		if (Utils.readByte(src).length < endIndex)
			throw new ApiException("Could not subString. EndIndex("+endIndex+") is bigger than string size("+src.length()+")");
		if(beginIndex== 0){
			byteBeginIndex = beginIndex;	
		}else{
			byteBeginIndex = beginIndex+1;
		}
		return getByteStr(src,byteBeginIndex, endIndex).trim();
	}
	public static String getByteStr(String str, int beginByte, int endByte){
		int beginIndex = -1;
		int endIndex = -1;
		int accByte = 0;
		
		for(int i = 0; i<str.length();i++){
			String ch = str.substring(i,i+1);
			accByte+=ch.getBytes().length>=2? 2:1;
			
			if(beginIndex==-1 && accByte>=beginByte){
				beginIndex = i;
			}
			if(endIndex==-1 && accByte>=endByte){
				if(accByte>endByte){
					endIndex = i;
				}else{
					endIndex = i +1;
				}
				break;
			}
		}
		return str.substring(beginIndex,endIndex).trim();
	}
	public static String readToString(InputStream in, int length) throws ApiException {
		byte[] d = new byte[length];
		try {
			if(in.available()<length)
				throw new ApiException("Not enough data. [required: "+length+" bytes, available: "+in.available()+" bytes]");

			in.read(d, 0, d.length);
			String readStr = new String(d, 0, d.length, ApiMessage.DEFAULT_ENCODING);
			if(logger.isDebugEnabled())
				logger.debug("READ. readToString(). ["+readStr+"]. "+readStr.getBytes().length+"/"+length+" length.");
			return readStr;
		} catch (IOException e) {
			throw new ApiException("Can not read the message.", e);
		}
	}
	
	public static String readToNumeric(InputStream in, int length) throws ApiException {
		byte[] d = new byte[length];
		try {
			if(in.available()<length)
				throw new ApiException("Not enough data. [required: "+length+" bytes, available: "+in.available()+" bytes]");

			in.read(d, 0, d.length);
			if(logger.isDebugEnabled())
				logger.debug("READ. readToNumeric(). ["+new String(d)+"]. "+length+" length.");
			String str = new String(d);
			if(StringUtils.isEmpty(str.trim())) {
				return "";
			}
			
			return new DecimalFormat("0.#######").format(Double.parseDouble(str.trim()));
		} catch (IOException e) {
			throw new ApiException("Can not read the Numeric message.", e);
		}
	}
	
	public static int readToInt(InputStream in, int length) throws ApiException {
		byte[] d = new byte[length];
		try {
			if(in.available()<length)
				throw new ApiException("Not enough data. [required: "+length+" bytes, available: "+in.available()+" bytes]");
			
			in.read(d, 0, d.length);
			String str = new String(d);
			if(StringUtils.isEmpty(str.trim()))
				throw new ApiException("Invalid int type data ["+str+"]");
			
			if(logger.isDebugEnabled())
				logger.debug("READ. readToInt(). ["+str+"]. "+length+" length.");
			
			return Integer.parseInt(new String(str).trim());
		} catch (IOException e) {
			throw new ApiException("Can not read the message.", e);
		}
	}
	
	public static String writeToNumeric(String value, int length) throws ApiException {
		if(value==null)
			value = "";
		
		int valueLength = value.length();
		if(valueLength>length)
			throw new ApiException("Can not write to numeric data. invalid length. value["+value+"] > "+length);
		
		StringBuffer buf = new StringBuffer();
		for(int i=0;i<length-valueLength;i++)
			buf.append("0");
		buf.append(value);
		String retBuf = buf.toString();
		if(logger.isDebugEnabled())
			logger.debug("WRITE. writeToNumeric(). ["+retBuf+"]. "+length+" length.");
		
		return retBuf;
	}
	
	public static byte[] rightPad(String str, int length) {
		byte[] strBytes = null;
		
		if(str!=null)
			str = str.trim();
		
		if(StringUtils.isEmpty(str))
			strBytes = new byte[]{};
		else
			strBytes = Utils.readByte(str);
		
		int strLength = strBytes.length;
		
		int applyLength = strLength;
		if(strLength>length) {
			applyLength = length;
		} else {
			applyLength = strLength;
		}
		
		ByteArrayOutputStream out = null;
		try {
			out = new ByteArrayOutputStream();
			out.write(strBytes, 0, applyLength);
			for(int i=0;i<length-applyLength;i++) {
				out.write((byte)0x20);
			}
			
			return out.toByteArray();
		} finally {
			IOUtils.closeQuietly(out);
		}
	}
	
	public static String writeToString(String value, int length) throws ApiException {
		if(value==null)
			value = "";
		
		try {
			String retStr = new String(rightPad(value, length), ApiMessage.DEFAULT_ENCODING);
			if(logger.isDebugEnabled())
				logger.debug("WRITE. writeToString(). ["+retStr+"]. "+length+" length.");
			return retStr;
		} catch (UnsupportedEncodingException e) {
			return new String(rightPad(value, length));
		}
	}
	
//	public static <T> T readMessage(byte[] data, Class<T> clazz) throws ApiException {
//		ByteArrayInputStream in = null;
//		try {
//			in = new ByteArrayInputStream(data);
//			ApiMessage m = (ApiMessage)clazz.newInstance();
//			m.marshal(in);
//			
//			return (T)m;
//		} catch (ApiException e) {
//			throw e;
//		} catch (Throwable e) {
//			throw new ApiException("Can not read the message. "+e.toString(), e);
//		} finally {
//			IOUtils.closeQuietly(in);
//		}
//	}

	/**
	 * 특정 data를 읽어서 byte[]로 리턴한다. 단 설정된 기본 encoding을 사용한다.
	 */
	public static byte[] readByte(String data) {
		return readByteWithEncoding(data, ApiMessage.DEFAULT_ENCODING);
	}
	
	public static byte[] readByteWithEncoding(String data, String inEncoding) {
		if(StringUtils.isEmpty(inEncoding))
			inEncoding = ApiMessage.DEFAULT_ENCODING;
		
		if(StringUtils.isEmpty(data))
			return new byte[]{};
		
		try {
			return data.getBytes(inEncoding);
		} catch (UnsupportedEncodingException e) {
			return data.getBytes();
		}
	}
	
	/**
	 * 입력된 데이터를 시스템 인코딩을 적용하여 byte[]로 리턴한다.
	 */
	public static byte[] readByteWithEncoding(byte[] orgBytes, String inEncoding) {
		if(StringUtils.isEmpty(inEncoding))
			inEncoding = ApiMessage.DEFAULT_ENCODING;
		
		Reader reader = null;
		ByteArrayInputStream in = null;
		try {
			in = new ByteArrayInputStream(orgBytes);
			reader = new InputStreamReader(in, inEncoding);
			return IOUtils.toByteArray(reader);
		} catch (IOException e) {
			logger.error("Could not convert to byte[] to "+ApiMessage.DEFAULT_ENCODING, e);
			return orgBytes;
		} finally {
			IOUtils.closeQuietly(in);
			IOUtils.closeQuietly(reader);
		}
		
	}
	
	public static byte[] readByteWithEncoding(byte[] orgBytes, String inEncoding, String outEncoding) {
		if(StringUtils.isEmpty(inEncoding))
			inEncoding = ApiMessage.DEFAULT_ENCODING;
		
		if(StringUtils.isEmpty(outEncoding))
			outEncoding = ApiMessage.DEFAULT_ENCODING;
		
		Reader reader = null;
		ByteArrayInputStream in = null;
		try {
			in = new ByteArrayInputStream(orgBytes);
			reader = new InputStreamReader(in, inEncoding);
			return IOUtils.toByteArray(reader, outEncoding);
		} catch (IOException e) {
			return orgBytes;
		} finally {
			IOUtils.closeQuietly(in);
			IOUtils.closeQuietly(reader);
		}
		
	}
	
	/**
	 * InputStream 안에 남아있는 미처리 데이터의 길이를 리턴한다.
	 */
	public static int getUnprocessedDataSize(InputStream in) throws ApiException {
		try {
			return in.available();
		} catch (IOException e) {
			throw new ApiException("Error occured while checking available bytes in stream.", e);
		}
	}
	
	/**
	 * 문자열을 구분자로 분할시 특정 순번의 문자열을 리턴한다.
	 */
	public static String getPositionedStr(String str, char delim, int index) throws Exception {
		if (index < 0)
			throw new Exception("Exception occured when processing getPositionedStr(). Index could not be smaller than zero.");
		
		int startPos = 0;
		int endPos = -1;
		
		for (int i=0; i<=index; i++) {
			startPos = endPos+1;
			endPos = str.indexOf(delim, startPos);
			if (endPos == -1 && i < index)
				throw new Exception("Could not parse string value of positioned "+index+" index.");
		}
		
		if (startPos == endPos)
			return "";
		if (endPos > -1)
			return str.substring(startPos, endPos);
		else
			return str.substring(startPos);
	}
	
//	public static String decodeBase64(String data, String encoding) throws Exception {
//		if(StringUtils.isEmpty(data))
//			return "";
//		
//		byte[] input = null;
//		try {
//			input = data.getBytes(encoding);
//		} catch (UnsupportedEncodingException e) {
//			input = data.getBytes();
//		}
//		
//		byte[] output = Base64.decode(input);
//		return new String(output, encoding);
//	}
	
	public static String[] subStringByByteLength(String inputStr, int byteLength) throws Exception {
		return subStringByByteLength(inputStr, byteLength, ApiMessage.DEFAULT_ENCODING);
	}
	
	public static String[] subStringByByteLength(String inputStr, int byteLength, String inEncoding) throws Exception {
		if(StringUtils.isEmpty(inEncoding))
			inEncoding = ApiMessage.DEFAULT_ENCODING;
		
		if (StringUtils.isEmpty(inputStr))
			return new String[]{""};
		
		if (byteLength <= 0 || inputStr.getBytes().length <= byteLength)
			return new String[]{inputStr};
		
		List<String> subStrList = new ArrayList<String>();
		String tempStr = inputStr;
		while (true) {
			byte[] tempBytes = readByteWithEncoding(tempStr, inEncoding);
			if (tempBytes.length <= byteLength) {
				subStrList.add(tempStr);
				break;
			}
			
			char[] charArray = tempStr.toCharArray();
			int checkLimit = byteLength;
			for (int i=0; i<charArray.length; i++) {
				if (charArray[i] < 256)
					checkLimit -= 1;
				else
					checkLimit -= 2;
				
				if (checkLimit <= 0)
					break;
			}
			
			//대상 문자열 마지막 자리가 2바이트의 중간일 경우 제거함
			subStrList.add(new String(ArrayUtils.subarray(tempBytes, 0, byteLength + checkLimit), inEncoding));
			tempStr = new String(ArrayUtils.subarray(tempBytes, byteLength + checkLimit, tempBytes.length), inEncoding);
		}
		
		return subStrList.toArray(new String[]{});
	}
	
	//---------------------------------------------------------------
	// serialize request to byte array
	//---------------------------------------------------------------
	public static synchronized byte[] serialize(ApiRequest message) throws ApiException {
		if(logger.isDebugEnabled()) {
			logger.debug("Writing to server. message : "+message.getClass().getName());
			logger.debug("=====================================");
			logger.debug(message.toString().trim());
			logger.debug("=====================================");
		}
		
		String outMcaStr = message.unmarshal();
		int length = 0;
		
		byte[] bodyData = null;
		try {
			bodyData = outMcaStr.getBytes(ApiMessage.DEFAULT_ENCODING);
			length = bodyData.length+7+15+8+7;
		} catch (UnsupportedEncodingException e) {
			throw new ApiException("Data encoding error.", e);
		}
		
		try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
//			out.write(Utils.right(8, length).getBytes()); // HTTP ContentLength
			out.write(Utils.writeToString(message.getId().substring(0,5), 5).getBytes()); // 7->5 (2023)
			out.write(Utils.writeToString(message.getSendDate(), 8).getBytes());
			out.write(Utils.writeToString(message.getSendNum(), 7).getBytes());
//			out.write(Utils.writeToString(message.getIfProgramId(), 15).getBytes()); //(2023)
			out.write(bodyData);
			
			return out.toByteArray();
		} catch (ApiException e) {
			throw e;
		} catch (Throwable e) {
			throw new ApiException("Failed to serialize object of type: " + message.getClass().getName(), e);
		}
	}
	
	//---------------------------------------------------------------
	// Deserialize response body to Java object
	//---------------------------------------------------------------
	public static synchronized ApiResponse deserialize(int statusCode, byte[] data) throws ApiException {
		if (data == null) {
			throw new ApiException("Unexpected response data!"); //No response data
		}
		
		try {
			if (logger.isDebugEnabled())
				logger.debug("Deserialize data: {" + new String(data, ApiMessage.DEFAULT_ENCODING) + "}");
		} catch (Exception e) {
		}
		
		try (ByteArrayInputStream in = new ByteArrayInputStream(data)) {
			ApiResponse respMessage = new ApiResponse(statusCode, data);
			respMessage.marshal(in);
			
			return respMessage;
		} catch (ApiException e) {
			throw e;
		} catch (Throwable e) {
			throw new ApiException("Failed to deserialize object of type: " + ApiResponse.class.getName(), e);
		}
	}
	
	//-----------------------------------------------------------------------
	// Formats the time gap as a string
	//-----------------------------------------------------------------------
	public static String formatDuration(long durationMillis) {
		return formatDuration(durationMillis, "mm:ss.SSS");
	}
	
	public static String formatDuration(long durationMillis, String format) {
		return DurationFormatUtils.formatDuration(durationMillis, format);
	}
}
