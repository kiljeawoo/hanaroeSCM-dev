package com.esum.appetizer.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;

import com.esum.appetizer.exception.AppetizerException;

public class SysUtil extends org.apache.commons.lang.SystemUtils {
	private static Properties properties = new Properties();

	public static String getEnv(String envName) throws Exception {
		String envval = properties.getProperty(envName);
		
		if (envval != null) {
			return envval;
		}

		String osName = System.getProperties().getProperty("os.name");
		
		Process ps = null;

		if (osName.startsWith("Windows")){
			ps = Runtime.getRuntime().exec("cmd /C echo %" + envName + "%");
			ps.waitFor();
			envval = getValue(ps.getInputStream());
			
			if (envval.equals("%" + envName + "%")) {
				envval = "";
			}
		} else if (osName.startsWith("Win")){
			ps = Runtime.getRuntime().exec("c:/windows/command.com /C echo %" + envName + "%");
			ps.waitFor();
			envval = getValue(ps.getInputStream());
			
			if (envval.equals("%" + envName + "%")) {
				envval = "";
			}
		} else{
			ps = Runtime.getRuntime().exec("/usr/bin/env");
			ps.waitFor();
			Properties prop = new Properties();
			prop.load(ps.getInputStream());
			envval = prop.getProperty(envName);
		}

		if (envval == null){
			return null;
		}
		
		properties.setProperty(envName, envval);
		
		return envval;
	}

	public static void loadProperties(String fileName) throws IOException {
		FileInputStream in = null;
		
		try {
			Properties props = new Properties();
			in = new FileInputStream(fileName);
			props.load(in);
	
			Enumeration<?> keys = props.keys();
			
			while (keys.hasMoreElements()) {
				String key = (String) keys.nextElement();
				String value = props.getProperty(key);
	
				if(value!=null)
					value = replacePropertyToValue(value);
	
				System.setProperty(key, value);
			}
		} finally {
			if (in != null)
				in.close();
			in = null;
		}			
	}

	public static void loadProperties(InputStream configIn, Properties properties) throws IOException {
		Properties props = new Properties();
		props.load(configIn);

		Enumeration<Object> keys = props.keys();
		
		while (keys.hasMoreElements()) {
			String key = (String)keys.nextElement();
			String value = props.getProperty(key);

			if(value!=null)
				value = replacePropertyToValue(value);

			properties.setProperty(key, value);
		}
	}
	
	public static void loadProperties(String fileName, Properties properties) 
		throws IOException {
		FileInputStream in = null;
		
		try {
			in = FileUtils.openInputStream(new File(fileName));
			loadProperties(in, properties);
		} finally {
			IOUtils.closeQuietly(in);
		}
	}

	public static String replacePropertyToValue(String property) {
		StringBuffer sb = new StringBuffer();
		int offset = 0;
		int fromIndex = 0, toIndex = 0;
		
		while (true) {
			fromIndex = property.indexOf("${", offset);
			if(fromIndex == -1) {
				break;
			}
				
			if (fromIndex > offset)
				sb.append(property.substring(offset, fromIndex));
			toIndex = property.indexOf("}", fromIndex);
			
			if (toIndex == -1)
				break;
			
			String key = property.substring(fromIndex + 2, toIndex);
			String value = System.getProperty(key, "");
			
			if (value.equals("")) {
				try {
					value = getEnv(key);
				} catch (AppetizerException e) {
					value="";
				} catch (Exception e) {
					value="";
				}
			}				
			sb.append(value);
			offset = toIndex + 1;
		}
		
		if (offset < property.length()) {
			sb.append(property.substring(offset));
		}
		
		return sb.toString();
	}

	private static String getValue(InputStream in) throws Exception	{
		return IOUtils.toString(in);
	}
}