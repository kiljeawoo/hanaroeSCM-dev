package com.esum.appetizer.util.nexacro;

import java.beans.IntrospectionException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.session.SessionBox;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.Variable;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.PlatformException;

public class PlatFormRequestHelper {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	private VariableList variableList;
	private DataSetList dataSetList;
	private SessionBox sessionBox;
	private HttpServletRequest request;
	public static PlatFormRequestHelper newInstance(HttpServletRequest request) {
		return new PlatFormRequestHelper(request);
	}
	public PlatFormRequestHelper(HttpServletRequest request){
		this.request = request;
		try {
			sessionBox = (SessionBox)request.getAttribute("sessionBox");
			//:TODO
			//HttpPlatformRequest pReq = new HttpPlatformRequest(this.request, PlatformType.CONTENT_TYPE_SSV);
			HttpPlatformRequest pReq = new HttpPlatformRequest(this.request);
			pReq.receiveData();
			PlatformData platformData = pReq.getData();
			init(platformData);
			
		} catch (PlatformException e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	private void init(PlatformData platformData) {
		variableList = platformData.getVariableList();
		dataSetList = platformData.getDataSetList();
	}

	public String getParameter(String name) {
		String value = this.request.getParameter(name);
		if (StringUtils.isEmpty(value)) {
			value = variableList.getString(name);
		}
		return value;
	}

	public Object getObject(String name) {
		return variableList.getObject(name);
	}

	public Variable get(String name) {
		return variableList.get(name);
	}

	public int getInt(String name) {
		return variableList.getInt(name);
	}

	public boolean getBoolean(String name) {
		return variableList.getBoolean(name);
	}

	public DataSet getDataSet(String name) {
		return dataSetList.get(name);
	}

	public String getParameter(String name, String defaultValue) {
		String result = getParameter(name);
		return StringUtils.isEmpty(result) ? defaultValue : result;
	}

	public int getParameterInt(String name, int defaultValue) {
		String result = variableList.getString(name);
		if (StringUtils.isEmpty(result)) {
			return defaultValue;
		} else {
			try {
				return Integer.parseInt(result);
			} catch (NumberFormatException e) {
				return defaultValue;
			}
		}
	}
	
	public VariableList getVariableList() {
		return variableList;
	}

	public DataSetList getDataSetList() {
		return dataSetList;
	}

	public String getUserID() {
		if (sessionBox != null) {
			return sessionBox.getUserID();
		} else {
			return null;
		}
	}

	public String getGlnCode() {
		if (sessionBox != null) {
			return sessionBox.getGlnCode();
		} else {
			return null;
		}
	}

	public String getMbcoType() {
		if (sessionBox != null) {
			return sessionBox.getMbcoType();
		} else {
			return null;
		}
	}

	public String getCompanyName() {
		if (sessionBox != null) {
			return sessionBox.getCompanyName();
		} else {
			return null;
		}
	}

	public String getUserName() {
		if (sessionBox != null) {
			return sessionBox.getUserName();
		} else {
			return null;
		}
	}

	public String getCommanyType() {
		if (sessionBox != null) {
			return sessionBox.getCommanyType();
		} else {
			return null;
		}
	}

	public Date getLastLoginDt() {
		if (sessionBox != null) {
			return sessionBox.getLastLoginDt();
		} else {
			return null;
		}
	}

	public String getUserType() {
		if (sessionBox != null) {
			return sessionBox.getUserType();
		} else {
			return null;
		}
	}

	public String getUserCvDsc() {
		if (sessionBox != null) {
			return sessionBox.getUserCvDsc();
		} else {
			return null;
		}
	}

	public String getUserStatus() {
		if (sessionBox != null) {
			return sessionBox.getUserStatus();
		} else {
			return null;
		}
	}

	public String getUserFirstLoginYn() {
		if (sessionBox != null) {
			return sessionBox.getFirstLoginYn();
		} else {
			return null;
		}
	}

	public String getUserAuth() {
		if (sessionBox != null) {
			return sessionBox.getUserAuth();
		} else {
			return null;
		}
	}

	public String getToken() {
		if (sessionBox != null) {
			return sessionBox.getCorsToken();
		} else {
			return null;
		}
	}
	
	public <T> T getValueObject(Class<T> clazz) {
		try {
			return ValueObjectSetUtil.setVariables(clazz, variableList);
		} catch (InstantiationException | IllegalAccessException
				| IntrospectionException e) {
			return null;
		}
	}

	public <T> List<T> getValueObjects(Class<T> clazz, DataSet dataSet) {
		try {
			return ValueObjectSetUtil.setVariables(clazz, dataSet);
		} catch (InstantiationException | IllegalAccessException
				| IntrospectionException e) {
			return null;
		}
	}
	
	public <T> List<T> getValueObjects(Class<T> clazz, String dataSetName) {
		return getValueObjects(clazz, getDataSet(dataSetName));
	}
	
	public String[] getTrplCodeToArr(String TRPL_C, PlatFormRequestHelper requestHelper) {
		String mbcoType = requestHelper.getMbcoType();
		String usrSysC = requestHelper.sessionBox != null ? requestHelper.sessionBox.getUserSystemCode() : null;
		
		if (mbcoType == null) {
			throw new AppetizerException("error.message.noMbcoType");
		} else if ("1".equals(mbcoType)) { // 본사일 경우만 파라미터 사용
			if (StringUtils.isEmpty(TRPL_C) || "undefined".equals(TRPL_C)) {
				String[] glnCode = { requestHelper.getGlnCode() };
				return glnCode;
			} else {
				return TRPL_C.split(",");
			}
		} else if ("5".equals(mbcoType) || ("2".equals(mbcoType) && "21".equals(usrSysC))) {
			// 5 위탁대리점, 가공장
			return TRPL_C.split(",");
		} else {
			// 2 지사
			String[] glnCode = { requestHelper.getGlnCode() };
			return glnCode;
		}
	}
}