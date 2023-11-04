package com.nh.escm.system.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.cert.Certificate;
import java.security.cert.X509Certificate;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.naming.InvalidNameException;
import javax.naming.ldap.LdapName;
import javax.naming.ldap.Rdn;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLPeerUnverifiedException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.nh.escm.system.vo.CertInfoVO;

public class SslCertInfoHandler {
	
	protected final Log logger = LogFactory.getLog(getClass());
	
	/*
	 *  AString  X.500 AttributeType
	    ------------------------------
	    CN      commonName
	    L       localityName
	    ST      stateOrProvinceName
	    O       organizationName
	    OU      organizationalUnitName
	    C       countryName
	    STREET  streetAddress
	    DC      domainComponent
	    UID     userid

	 */
	
	   public static void main(String[] args)
	   {

		   /*
	       List<String> urlList = new ArrayList<String>();
	       
	       urlList.add("https://www.nhescm.co.kr/");
	       urlList.add("https://tax.nhescm.co.kr:4443");
	       urlList.add("https://nccs.nonghyup.com:1443/");
	       urlList.add("https://nhmds.nonghyup.com:48443/");
	       
	       CertInfoVO tempVO = new CertInfoVO();
	       
	       tempVO.setSSL_URL("https://www.nhescm.co.kr/");
	       tempVO.setCN("www.nhescm.co.kr");
	       tempVO.setCERT_ID("www.nhescm.co.kr");
	       
	       tempVO.setSSL_URL("https://nhmds.nonghyup.com:48443/");
	       tempVO.setCN("nhmds.nonghyup.com");
	       tempVO.setCERT_ID("nhmds.nonghyup.com");
	       
	       SslCertInfoHandler certInfoHandler = new SslCertInfoHandler(tempVO);
	       */

	       // SslCertManager sslCertManager = new SslCertManager(urlList);
	   }
	
	private X509Certificate x509Cert  ;
	
	public SslCertInfoHandler(CertInfoVO certInfoVO){
		
		X509Certificate x509Cert;
		x509Cert = getSslCert(certInfoVO); 

		/*
		 *  인증서 만료기한 업데이트
		 */
		certInfoVO.setNOT_BEFORE(x509Cert.getNotBefore());
		certInfoVO.setNOT_AFTER(x509Cert.getNotAfter());
		

	}
	
	private X509Certificate getSslCert(CertInfoVO certInfoVO){
	      URL url;
	      
	      try {

		     url = new URL(certInfoVO.getSSL_URL());

			 logger.info(" url -->   " +  url );
		     HttpsURLConnection con = (HttpsURLConnection)url.openConnection();
				
		    if(con!=null)
		    {

				System.out.println("Response Code : " + con.getResponseCode());
				// System.out.println("Cipher Suite : " + con.getCipherSuite());
				
				if(con.getResponseCode() != 200){
					
					return null;
					
				}

				Certificate[] certs = con.getServerCertificates();
				X509Certificate x509Cert  ;

				for(Certificate cert : certs){
					
				   // Cast it to an X509Certificate and call getNotAfter().
				    x509Cert = (X509Certificate)cert;
				    // System.out.println("Cert Type : " + cert.getType());
				    // System.out.println("x509Cert getCriticalExtensionOIDs : " + x509Cert.getCriticalExtensionOIDs());

					String dn = x509Cert.getSubjectX500Principal().getName();
					
					// System.out.println("getSubjectX500Principal -- " + dn);
					
					/*
					 * Lightweight Directory Access Protocol (v3)
					 * https://tools.ietf.org/html/rfc2253
					 * RelativeDistinguishedName
					 */
					
					LdapName ldapDN = new LdapName(dn);
					// System.out.println(" certInfoVO.getCN -- " +  certInfoVO.getCN() );
					System.out.println(" certInfoVO.getCERT_ID-- " +  certInfoVO.getCERT_ID() );
					
					for(Rdn rdn: ldapDN.getRdns()) {

					    if("CN".equals(rdn.getType()) && rdn.getValue().equals(certInfoVO.getCERT_ID()) ) 
					    {
						    System.out.println("    유효기간 : " + x509Cert.getNotBefore() + " - " + " : " + x509Cert.getNotAfter()) ;
						    System.out.println("NotBefore : " + x509Cert.getNotBefore());
						    System.out.println("Expiration : " + x509Cert.getNotAfter());
						    
						    checkExpiration(x509Cert.getNotAfter());
						    
						    return x509Cert;
							    
					    }  // if
					} // for

				} // for

		    } // if
		     //dump all the content
		     // print_content(con);
				
	    } catch (javax.net.ssl.SSLHandshakeException e){
	    	
	    	certInfoVO.setValid(false);
	    	
		} catch (MalformedURLException e) {
		     e.printStackTrace();
	    } catch (SSLPeerUnverifiedException e) {
			e.printStackTrace();
		} catch (IOException e){
			e.printStackTrace();
		} catch (InvalidNameException e) {
			// 
			e.printStackTrace();
		} 
		return x509Cert;
	}
	
	/*
	 * 
	 */

	   
	   public long checkExpiration(Date expDate){
		   
			String dateStart = "01/14/2012 09:29:58";
			String dateStop = "01/15/2012 10:31:48";

			//HH converts hour in 24 hours format (0-23), day calculation
			SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");

			Date d1 = null;
			Date d2 = null;
			long diffDays = 0;

			try {
				d1 = new Date();
				d2 = expDate;

				//in milliseconds
				long diff = d2.getTime() - d1.getTime();

				long diffSeconds = diff / 1000 % 60;
				long diffMinutes = diff / (60 * 1000) % 60;
				long diffHours = diff / (60 * 60 * 1000) % 24;
				diffDays = diff / (24 * 60 * 60 * 1000);

				System.out.print(diffDays + " days, ");
				System.out.print(diffHours + " hours, ");
				System.out.print(diffMinutes + " minutes, ");
				System.out.print(diffSeconds + " seconds.");
				
				if(diffDays < 30){
					
					System.out.println("/***********************************************/");
					System.out.println("/*************** WARNING ***********************/");
					System.out.println("/*************** EXPIRE IN  " + diffDays + " day *************/");
					System.out.println("/***********************************************/");
					
					System.out.println("");
					System.out.println("");
					System.out.println("");
					System.out.println("");
					
				}
				
				return diffDays;

			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return diffDays;
	   }
} // END OF CLASS
