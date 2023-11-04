package com.esum.appetizer.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;

public class ByteWrapper {
	private ByteArrayInputStream mInputStream = null;
	private int mSize = -1;
	
	public ByteWrapper(byte[] data) {
		if(data != null && data.length > 0) {
			mInputStream = new ByteArrayInputStream(Arrays.copyOf(data, data.length));
			mSize = mInputStream.available();
		}
	}
	
	public String subString(int beginIndex, int endIndex) throws UnsupportedEncodingException {
		int size = endIndex - beginIndex;
		byte[] buffer = new byte[size];
		
		mInputStream.reset();
		
		if(mInputStream.skip(beginIndex) > 0)
			mInputStream.read(buffer, 0, size);
		
		try {
			return new String(buffer, 0, size, "euc-kr");
		} catch (UnsupportedEncodingException e) {
			throw e;
		}
	}
	
	public byte[] subByte(int beginIndex, int endIndex) {
		int size = endIndex - beginIndex;
		byte[] buffer = new byte[size];
		mInputStream.reset();
		if(mInputStream.skip(beginIndex) > 0)
	mInputStream.read(buffer, 0, size);
		
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		out.write(buffer, 0, size);
		
		return out.toByteArray();
	}
	
	public String subString(int beginIndex) throws UnsupportedEncodingException {
		int size = mSize - beginIndex;
		byte[] buffer = new byte[size];
		
		mInputStream.reset();
		if(mInputStream.skip(beginIndex) > 0)
			mInputStream.read(buffer, 0, size);
		
		try {
			return new String(buffer, 0, size, "euc-kr");
		} catch (UnsupportedEncodingException e) {
			throw e;
		}
	}
	
	public String getString() throws UnsupportedEncodingException{
		int size = mSize;
		byte[] buffer = new byte[size];
		
		mInputStream.reset();
		mInputStream.read(buffer, 0, size);
		
		try {
			return new String(buffer, 0, size, "euc-kr");
		} catch (UnsupportedEncodingException e) {
			throw e;
		}		
	}
}
