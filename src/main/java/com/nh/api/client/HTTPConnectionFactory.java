package com.nh.api.client;

import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.UnknownHostException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocket;

import org.apache.http.HttpRequest;
import org.apache.http.NoHttpResponseException;
import org.apache.http.client.HttpRequestRetryHandler;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.conn.ssl.SSLContexts;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.conn.ssl.X509HostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.protocol.HttpContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.esum.appetizer.config.Configurer;

public class HTTPConnectionFactory {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	public static final int DEFAULT_MAXCONNS = 100;
	
	private static final HTTPConnectionFactory instance = new HTTPConnectionFactory();
	
	private Registry<ConnectionSocketFactory> registry;
	
	private SSLContext sslContext;
	
	private int maxTotalConnections = DEFAULT_MAXCONNS;
	private int maxConnectionsPerHost = 10;
	
//	private String connectionUsername;
//	private String connectionPassword;
	
	
	private HTTPConnectionFactory() {
		String endPointUrl = Configurer.getProperty("http.proxy.url", ApiClient.DEFAULT_HTTP_PROXY);
		boolean useHttps = endPointUrl.contains("https");
		
		try {
			if (useHttps) {
				SSLContextBuilder builder = SSLContexts.custom();
				builder.loadTrustMaterial(null, new TrustStrategy() {
					@Override
					public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException {
						return true;
					}
				});

				this.sslContext = builder.build();
				SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext,
						new X509HostnameVerifier() {
							@Override
							public void verify(String host, SSLSocket ssl) throws IOException {
							}

							@Override
							public void verify(String host, X509Certificate cert) throws SSLException {
							}

							@Override
							public void verify(String host, String[] cns, String[] subjectAlts) throws SSLException {
							}

							@Override
							public boolean verify(String s, SSLSession sslSession) {
								return true;
							}
						});

				registry = RegistryBuilder.<ConnectionSocketFactory>create().register("https", sslsf).build(); // SSL
			}
			else {
				registry = RegistryBuilder.<ConnectionSocketFactory>create()
						.register("http", new PlainConnectionSocketFactory()).build(); // no SSL
			}
			
		} catch (NoSuchAlgorithmException e) {
			logger.error("Error in creating HttpCLient Connection : {}", e);
		} catch (KeyStoreException e) {
			logger.error("Error in creating HttpCLient Connection : {}", e);
		} catch (KeyManagementException e) {
			logger.error("Error in creating HttpCLient Connection : {}", e);
		}

		// AUTH
//		CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
//		credentialsProvider.setCredentials(new AuthScope(AuthScope.ANY_HOST, AuthScope.ANY_PORT),
//				new UsernamePasswordCredentials(connectionUsername, connectionPassword));
	}

	/**
	 * Return the configured connection manager with TLS SSL if configured.
	 */
	public PoolingHttpClientConnectionManager getDefaultConnectionManager() {
		PoolingHttpClientConnectionManager connManager = new PoolingHttpClientConnectionManager(registry);
		connManager.setMaxTotal(maxTotalConnections);
		connManager.setDefaultMaxPerRoute(maxConnectionsPerHost);
		return connManager;
	}
	
	/**
	 * Returns a CloseableHttpClient using the configuration options of the factory singleton. Detailed information:
	 */
	public CloseableHttpClient buildDefaultClient() {
		
		HttpRequestRetryHandler retryHandler = new HttpRequestRetryHandler() {
			int maxRetries = 1;
			long waitTime = 2000;
			
			@Override
			public boolean retryRequest(IOException exception, int executionCount, HttpContext context) {
				if (executionCount > maxRetries) {
					logger.warn("httpClient retry overflow"); //$NON-NLS-1$
					return false;
				}

				if (exception instanceof UnknownHostException) {
					return false;
				}

				HttpClientContext clientContext = HttpClientContext.adapt(context);
				HttpRequest request = clientContext.getRequest();
				if (exception instanceof InterruptedIOException || exception instanceof SSLException 
						|| exception instanceof NoHttpResponseException) {
					try {
						logger.error("Waiting for " + waitTime + "ms.");
						Thread.sleep(waitTime);
					} catch (InterruptedException e) {
						// Do nothing
					}
					logger.warn("Retrying request to " + request.getRequestLine());
					logger.warn("Retry count " + executionCount);
					return true;
				}
				
				return false;
			}
		};
		
		if (sslContext == null) {
			// HttpClients.createDefault()
			return HttpClients.custom().setUserAgent(ApiClient.DEFAULT_HTTP_AGENT)
					.setConnectionManager(getDefaultConnectionManager())
					.setRetryHandler(retryHandler).build();
		} else {
			SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext, new X509HostnameVerifier() { // NoCheckHostnameVerifier
				@Override
				public void verify(String host, SSLSocket ssl) throws IOException {
				}

				@Override
				public void verify(String host, X509Certificate cert) throws SSLException {
				}

				@Override
				public void verify(String host, String[] cns, String[] subjectAlts) throws SSLException {
				}

				@Override
				public boolean verify(String s, SSLSession sslSession) {
					return true;
				}
			});
			
			// HttpClients.createDefault()
//			return HttpClients.custom().setDefaultCredentialsProvider(credentialsProvider)
			return HttpClients.custom().setUserAgent(ApiClient.DEFAULT_HTTP_AGENT)
					.setSSLSocketFactory(sslsf)
					.setConnectionManager(getDefaultConnectionManager())
					.setRetryHandler(retryHandler).build();
		}
	}
	
	public static HTTPConnectionFactory getInstance() {
        return instance;
    }

}
