package com.nh.api.client;

import java.io.IOException;
import java.net.URI;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.esum.appetizer.config.Configurer;
import com.nh.api.ApiException;
import com.nh.api.ApiMessage;
import com.nh.api.ApiRequest;
import com.nh.api.ApiResponse;
import com.nh.api.Utils;

public class ApiClient {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	public static final String DEFAULT_HTTP_PROXY = "http://localhost:39080/proxy/handler";
	
	public static final String DEFAULT_HTTP_AGENT = "eSCM HTTP Client";
	
	private String serviceUrl;
	
	private int socketTimeout = -1;
	
	private int connectionTimeout = 10*1000;
	
	private int connectionRequestTimeout = -1;
	
	
	public ApiClient() {
		// Constructor with address
		this(Configurer.getProperty("http.proxy.url", DEFAULT_HTTP_PROXY));
	}
	
	public ApiClient(String serviceUrl) {
		this.serviceUrl = serviceUrl;
		
		// User Defined Timeout for HTTP Client
		socketTimeout = Configurer.getPropertyInt("http.client.socket.timeout", 60 * 1000);
		connectionTimeout = Configurer.getPropertyInt("http.client.connection.timeout", 10 * 1000);
		connectionRequestTimeout = Configurer.getPropertyInt("http.client.socket.timeout", 60 * 1000);
	}

	/**
	 * Invoke API by sending HTTP request
	 */
	public ApiResponse send(ApiRequest reqMessage) throws ApiException {
		
		if(logger.isDebugEnabled())
			logger.debug("API REQUEST MESSAGE :::: ==================\n"+reqMessage.toString().trim());

		long stime = System.currentTimeMillis();
		
		logger.info("Processing '"+reqMessage.getId()+"' Message.");
		
		//---------------------------------------------------------------
		// serialize
		//---------------------------------------------------------------
		byte[] payload = Utils.serialize(reqMessage);
		
		try {
			if (logger.isDebugEnabled())
				logger.debug("Serialize data: {" + new String(payload, ApiMessage.DEFAULT_ENCODING) + "}");
		} catch (Exception e) {
		}
		
		logger.info("Sending '"+reqMessage.getIfTypeCode()+"' message to server. '"+payload.length+"' bytes. " + serviceUrl);
		
		try {
			//---------------------------------------------------------------
			// send a POST request
			//---------------------------------------------------------------
			ApiResponse respMessage = executePost(serviceUrl, payload);
			
			respMessage.setIfTypeCode(reqMessage.getId());
			respMessage.setSendDate(reqMessage.getSendDate());
			respMessage.setSendNum(reqMessage.getSendNum());
			
			if(logger.isDebugEnabled())
				logger.debug("API RESPONSE MESSAGE :::: ==================\n"+respMessage.toString().trim());
			
			logger.info("Message response("+respMessage.getId()+") '" + respMessage.getBody().length() + "' bytes received. elapsed time is "+Utils.formatDuration(System.currentTimeMillis()-stime, "mm:ss.SSS"));
			
			return respMessage;
		} catch (ApiException e) {
			throw e;
		} catch (Exception e) {
			String msg = "Error while executing API call: " + e.getMessage();
			logger.error(msg, e);
			throw new ApiException(msg, e);
		}
	}
	
	//---------------------------------------------------------------
	// send a POST request
	//---------------------------------------------------------------
	public ApiResponse executePost(String serviceUrl, byte[] data) throws Exception {
		
		try (CloseableHttpClient httpClient = HTTPConnectionFactory.getInstance().buildDefaultClient()){
			// createURI
			URI requestURI = new URI(serviceUrl);
			
			HttpPost httpPost = createHttpPost(requestURI);
			
			ByteArrayEntity entity = new ByteArrayEntity(data, ContentType.TEXT_XML);
			httpPost.setEntity(entity);
			
			if(logger.isDebugEnabled())
				logger.debug("API serviceUrl : " + requestURI.toString());
			
			// Create a custom response handler
			ResponseHandler<ApiResponse> responseHandler = new ResponseHandler<ApiResponse>() {
				@Override
				public ApiResponse handleResponse(org.apache.http.HttpResponse response) throws ClientProtocolException, IOException {
					
					final int statusCode = response.getStatusLine().getStatusCode();
					final String statusLine = response.getStatusLine().toString();

					try {
						if (isSuccessful(statusCode)) {
							HttpEntity entity = response.getEntity();
							if(entity!=null) {
								try {
									Header contentTypeHeader = entity.getContentType();
									if(contentTypeHeader!=null)
										logger.debug("ContentType : " + contentTypeHeader.getValue());
									
									//---------------------------------------------------------------
									// Deserialize response body to Java object
									//---------------------------------------------------------------
									return Utils.deserialize(statusCode, EntityUtils.toByteArray(entity));
								} catch (IOException e) {
									logger.error("Http Response Entity reading error", e);
									throw e;
								} finally {
									EntityUtils.consumeQuietly(entity);
								}
							}
							throw new IOException("Unexpected response entity!"); //No response data
						} else {
							throw new ClientProtocolException("Bad response: (" + statusCode + ", " + statusLine + ")");
						}
					} finally {
						if (response instanceof CloseableHttpResponse){
							//releasing the http connection
							try {
								((CloseableHttpResponse) response).close();
							} catch (IOException e) {
								logger.error(e.toString());
							}
						}
					}
				}
			};
			
			return httpClient.execute(httpPost, responseHandler);
		}
	}
	
	public void setSocketTimeout(int socketTimeoutInMs) {
		this.socketTimeout = socketTimeoutInMs;
	}
	
	public void setConnectionTimeout(int connectionTimeoutInMs) {
		this.connectionTimeout = connectionTimeoutInMs;
	}
	
	public void setRequestTimeout(int requestTimeoutInMs) {
		this.connectionRequestTimeout = requestTimeoutInMs;
	}
	
	private HttpPost createHttpPost(URI uri) {
		RequestConfig config = RequestConfig.custom()
                .setSocketTimeout(this.socketTimeout)
                .setConnectTimeout(this.connectionTimeout)
                .setConnectionRequestTimeout(this.connectionRequestTimeout)
                .build();
		
		HttpPost httpPost = new HttpPost(uri);
		httpPost.setConfig(config);
		//setDefaultHeaders
		httpPost.setHeader("User-Agent", DEFAULT_HTTP_AGENT);
		return httpPost;
	}
	
	private boolean isSuccessful(final int code) {
        return code >= 200 && code < 300;
    }
}
