package com.esum.appetizer.config;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Properties;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;

public class Configurer extends PropertyPlaceholderConfigurer {
	
	private static Properties properties;
	private static List<String> encryptedProperties;
	
	public void setEncryptedProperties(List<String> encryptedProperties) {
		Configurer.encryptedProperties = encryptedProperties;
	}
	
	public static boolean isEncryptedProperty(String key) {
		return encryptedProperties != null && encryptedProperties.contains(key);
	}
	
	@Override
	protected String convertProperty(String key, String value) {
//		if (isEncryptedProperty(key) && value != null) {
//			
//		}
		return super.convertProperty(key, value);
	}
	
	@Override
	protected void processProperties(ConfigurableListableBeanFactory beanFactoryToProcess, Properties props)
			throws BeansException {
		super.processProperties(beanFactoryToProcess, props);
		
		if (properties == null) {
			properties = props;
		} else {
			properties.putAll(props);
		}
		logger.info("properties info = " + properties);
		logger.info("System.getProperty(\"SERVER\") = " + System.getProperty("SERVER"));
		logger.info("System.getProperty(\"file.encoding\") = " + System.getProperty("file.encoding"));
		logger.info("System.getProperty(\"java.io.tmpdir\") = " + System.getProperty("java.io.tmpdir"));
		logger.info("Charset.defaultCharset() = " + Charset.defaultCharset() + ", \"한글\".getBytes().length = " + "한글".getBytes().length);
	}
	
	/**
	 * 예약어(Reserved word)를 이용한 속성값 치환 기능
	 * ex) property_key=prefix ${other_property_key} suffix
	 * 
	 * @param value
	 * @return
	 */
	protected static String resolve(String value) {
		if (StringUtils.isEmpty(value)) {
			return value;
		}
		
		StringBuffer result = new StringBuffer();
		int index = 0;
		while (true) {
			int begin = value.indexOf("${", index);
			int end = value.indexOf("}", index);
			
			if (begin > -1 && begin < end) {
				String key = value.substring(begin + 2, end);
				String replace = getProperty(key);
				if (replace == null) {
					replace = "${" + key + "}";
				}
				result.append(value.substring(index, begin));
				result.append(replace);
				
				index = end + 1;
			} else {
				result.append(value.substring(index));
				break;
			}
		}
		return result.toString();
	}
	
	public static String getProperty(String key) {
		if (properties == null) {
			return null;
		} else {
			return resolve(properties.getProperty(key));
		}
	}
	
	public static String getProperty(String key, String defaultValue) {
		String value = getProperty(key);
		if (value == null) {
			return defaultValue;
		} else {
			return value;
		}
	}
	
	public static int getPropertyInt(String key, int defaultValue) {
		String value = getProperty(key);
		if (value == null) {
			return defaultValue;
		} else {
			try {
				return Integer.parseInt(value);
			} catch (NumberFormatException e) {
				return defaultValue;
			}
		}
	}
	
	public static boolean getPropertyBoolean(String key, boolean defaultValue) {
		String value = getProperty(key);
		if (value == null) {
			return defaultValue;
		} else {
			return value.equalsIgnoreCase("true") || value.equals("1");
		}
	}
	
	public static void setProperty(String key, String value) {
		if (properties == null) {
			properties = new Properties();
		}
		properties.put(key, value);
	}
	
}
