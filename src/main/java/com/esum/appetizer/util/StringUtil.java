package com.esum.appetizer.util;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.jsoup.Jsoup;
import org.slf4j.Logger;

import com.esum.appetizer.exception.AppetizerException;

public class StringUtil {
	private static Logger logger = LoggerUtil.getServerLogger(StringUtil.class);
	public static String getRandomString() {
		return new BigInteger(130, new SecureRandom()).toString(15);
	}

	public static String htmlParseTextExcludeBR(String html) {
		String text = html.replaceAll("(?i)</p>|<br>", "&@n");
		text = Jsoup.parse(text).text();
		text = text.replaceAll("&@n", "<br>");
		return text;
	}

	public static String newLineToBR(String text) {
		String nText = text.replaceAll("(?i)\n", "<br>");
		return nText;
	}

	public static String UniToKSC(String str) {
		if (str == null)
			return null;

		String str2 = null;
		try {
			str2 = new String(str.getBytes("8859_1"), "KSC5601");
		} catch (UnsupportedEncodingException e) {
			logger.error(e.getMessage());
		}

		return str2;
	}

	public static String lastIndexSubstring(String s, String suffix) {
		if (s.endsWith(suffix)) {
			return s.substring(0, s.lastIndexOf(suffix));
		}
		return null;
	}

	public static boolean isNullCheck(String s) {
		if (s == null || s.equals("null") || s.equals("NULL") || s.equals("")) {
			return true;
		}
		return false;
	}

	public static String converNullToBlank(String s) {
		return converNullToParticularCharater(s, "");
	}

	public static String converNullToParticularCharater(String text,
			String particularChar) {
		if (isNullCheck(text))
			return particularChar;
		else
			return text;
	}

	public static boolean isStringInSet(String needle, String... strSet) {
		if (needle == null) {
			return false;
		}
		for (String s : strSet) {
			if (s == null) {
				continue;
			}
			if (s.equals(needle)) {
				return true;
			}
		}
		return false;
	}

	public static boolean isEqual(String str1, String str2) {
		return str1.toLowerCase().equals(str2.toLowerCase());
	}

	public static double sTod(String s, double r) {
		try {
			double l = Double.parseDouble(s);
			return l;
		} catch (NumberFormatException e) {
			return r;
		}
	}

	public static int sToi(String s, int r) {
		try {
			int l = Integer.parseInt(s);
			return l;
		} catch (NumberFormatException e) {
			return r;
		}
	}

	public static long sTol(String s, long r) {
		try {
			long l = Long.parseLong(s);
			return l;
		} catch (NumberFormatException e) {
			return r;
		}
	}

	public static boolean sTob(String s, boolean r) {
		try {
			boolean b = Boolean.parseBoolean(s);
			return b;
		} catch (AppetizerException e) {
			return r;
		}
	}

	public static String replace(String string, HashMap<String, String> replacements) {
		String str = string;
		Set<String> keys = replacements.keySet();

		for (String key : keys) {
			str = str.replaceAll("\\[\\$" + key + "\\$\\]",
					replacements.get(key));
		}
		return str;
	}

	public static String getSQLIN(int size) {
		String whereIN = "";
		for (int i = 0; i < size; i++) {
			if (i == 0) {
				whereIN = "?";
			} else {
				whereIN += ",?";
			}
		}
		return "(" + whereIN + ")";
	}

	public static String decimalFormat(double d, String format) {
		DecimalFormat decimalFormat = new DecimalFormat(format);
		return decimalFormat.format(d).toString();
	}

	public static String convertBrackets(String string) {
		String str = string;
		str = converNullToBlank(str);
		if (str.matches("<(?:.|\\s)*?>")) {
			str = str.replace("<", "&lt;");
			str = str.replace(">", "&gt;");
		}
		return str;
	}

	public static String omitString(String str, int omitSize) {
		if (isNullCheck(str)) {
			return "";
		}
		int charAt = 0;
		double realCnt = 0;
		int i;

		for (i = 0; realCnt < omitSize; i++) {
			if (i >= str.length()) {
				return str.substring(0, i);
			}
			charAt = str.charAt(i);
			if ((charAt >= 48 && charAt <= 57)
					|| (charAt >= 97 && charAt <= 122)) {
				realCnt += 0.5;
			} else if (charAt >= 65 && charAt <= 90) {
				realCnt += 0.8;
			} else {
				realCnt += 1;
			}
		}
		return str.substring(0, i) + "..";
	}

	public static String[] getTokens(String line, String delimiter) {
		return StringUtils.split(line, delimiter);

	}

	public static String toString(Object obj) {
		if (obj != null)
			return obj.toString();

		return "";
	}

	public static Object returnNull(String s) {
		if (s == "" || s.equalsIgnoreCase("null")) {
			return null;
		} else {
			return s;
		}
	}

	public static String convertList2String(List<String> list, String division) {

		StringBuilder param = new StringBuilder();

		for (String s : list) {
			param.append(division);
			param.append(s);
		}

		if (param.length() > division.length()) {
			param.delete(0, division.length());
		}
		return param.toString();
	}
	
	public static String getNumberString(String str){
		
		String temp = str;
		String result = "";
		for(int i=0;i<temp.length();i++){
			char txt = temp.charAt(i);
			if(txt == '0' || txt == '1' || txt == '2' || txt == '3' || txt == '4' || txt == '5'
					 || txt == '6'|| txt == '7'|| txt == '8'|| txt == '9'){
				result += txt;
			}
		}
		return result;
	}

}
