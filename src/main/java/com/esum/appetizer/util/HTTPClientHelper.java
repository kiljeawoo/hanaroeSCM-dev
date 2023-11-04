package com.esum.appetizer.util;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.util.EntityUtils;

import com.esum.appetizer.exception.OpenAPICallException;


public class HTTPClientHelper {

	private static int serverTimeout = 30000;

	public enum HTTPMethodType {
		POST, GET, PUT, DELETE
	}

	public static String callPostHttp(String openAPIURL, Map<String, String> postParams) throws OpenAPICallException {
		List<BasicNameValuePair> parameters = new ArrayList<BasicNameValuePair>();
		Set<String> keys = postParams.keySet();
		for(String key:keys) {
			parameters.add(new BasicNameValuePair(key, postParams.get(key)));	
		}
		return callWebService(openAPIURL, HTTPMethodType.POST, parameters);
	}
	
	private  static String callWebService(String openAPIURL,
			HTTPMethodType methodType, List<BasicNameValuePair> parameters) throws OpenAPICallException {
		String responseString = null;
		try {
			HttpParams params = new BasicHttpParams();

			HttpConnectionParams.setConnectionTimeout(params, serverTimeout);
			HttpConnectionParams.setSoTimeout(params, serverTimeout);
			HttpConnectionParams.setTcpNoDelay(params, true);
			DefaultHttpClient client = new DefaultHttpClient(params);

			HttpUriRequest request = getHTTPMethod(openAPIURL, methodType,
					parameters);
			HttpResponse response = client.execute(request);
			if(response.getStatusLine().getStatusCode() == 200) {
				responseString = EntityUtils.toString(response.getEntity(), "UTF-8");
			} else {
				throw new OpenAPICallException(response.getStatusLine().getStatusCode(),responseString, "서버 응답 오류");
			}

			
		} catch (UnsupportedEncodingException e) {
			throw new OpenAPICallException(0, null, e.getMessage());
		} catch (ClientProtocolException e) {
			throw new OpenAPICallException(0, null,e.getMessage());
		} catch (IOException e) {
			throw new OpenAPICallException(0, null,e.getMessage());
		}
		return responseString;
	}

	private static HttpUriRequest getHTTPMethod(String openAPIURL,
			HTTPMethodType methodType, List<BasicNameValuePair> parameters)
			throws UnsupportedEncodingException, ClientProtocolException {
		if (methodType.equals(HTTPMethodType.POST)) {
			UrlEncodedFormEntity reqEntity = new UrlEncodedFormEntity(
					parameters, "UTF-8");
			HttpPost post = new HttpPost(openAPIURL);
			post.setEntity(reqEntity);
			return post;
		} else if (methodType.equals(HTTPMethodType.GET)) {
			HttpGet get = new HttpGet(openAPIURL);
			return get;
		} else if (methodType.equals(HTTPMethodType.PUT)) {
			UrlEncodedFormEntity reqEntity = new UrlEncodedFormEntity(
					parameters, "UTF-8");
			HttpPut put = new HttpPut(openAPIURL);
			put.setEntity(reqEntity);
			return put;
		} else if (methodType.equals(HTTPMethodType.DELETE)) {
			HttpDelete delete = new HttpDelete(openAPIURL);
			return delete;
		} else {
			throw new ClientProtocolException();
		}
	}	
}
