package com.esum.appetizer.dao;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;

public class AbstractDao extends SqlSessionDaoSupport {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	protected static String escape(String string) {
		String str = string;
		if (StringUtils.isEmpty(str)) {
			return str;
		}
		str = StringUtils.replace(str, "\\", "\\\\");
		str = StringUtils.replace(str, "_", "\\_");
		str = StringUtils.replace(str, "%", "\\%");
		return str;
	}
	
}
