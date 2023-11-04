package com.esum.appetizer.util;

import java.util.Map;

import javax.mail.internet.MimeMessage;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;

import com.esum.appetizer.config.Configurer;

public class MailUtil {
	
	private static final Log logger = LogFactory.getLog(MailUtil.class);
	
	/**
	 * MailSender 환경 설정
	 */
	private static final String MAILSENDER_HOST = "mailSender.host";
	private static final String MAILSENDER_PORT = "mailSender.port";
	private static final String MAILSENDER_USERNAME = "mailSender.username";
	private static final String MAILSENDER_PASSWORD = "mailSender.password";
	
	/**
	 * 메일을 발송한다.
	 * 
	 * 첨부파일(attach)은 <fileName, stream> 으로 구성된 Map 을 사용한다.
	 * ex)
	 * 		Map<String, InputStreamSource> attach = new LinkedHashMap<String, InputStreamSource>();
	 * 		attach.put(fileName, new ByteArrayResource(str.getBytes()));
	 * 
	 * @param from		보낸사람
	 * @param to		받는사람
	 * @param cc		참조
	 * @param bcc		숨은참조
	 * @param subject	편지제목
	 * @param text		편지내용
	 * @param attach	첨부파일
	 */
	public static void sendMail(final String from, final String to, final String cc, final String bcc,
			final String subject, final String text, final Map<String, InputStreamSource> attach) {
		logger.info("sendMail() - from: " + from + ", to: " + to + ", subject: " + subject);
		
		if (StringUtils.isEmpty(from) || StringUtils.isEmpty(to)) {
			logger.error("sendMail() failure - from: " + from + ", to: " + to + ", subject: " + subject);
			return;
		}
		
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		
		mailSender.setHost(Configurer.getProperty(MAILSENDER_HOST));
		mailSender.setPort(Configurer.getPropertyInt(MAILSENDER_PORT, 0));
		
		if (StringUtils.isNotEmpty(Configurer.getProperty(MAILSENDER_USERNAME))) {
			mailSender.setUsername(Configurer.getProperty(MAILSENDER_USERNAME));
		}
		if (StringUtils.isNotEmpty(Configurer.getProperty(MAILSENDER_PASSWORD))) {
			mailSender.setPassword(Configurer.getProperty(MAILSENDER_PASSWORD));
		}
		
		mailSender.send(new MimeMessagePreparator() {
			@Override
			public void prepare(MimeMessage mimeMessage) throws Exception {
				MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
				
				messageHelper.setFrom(new String(from.getBytes(), "8859_1"));
				messageHelper.setTo(new String(to.getBytes(), "8859_1"));
				if (StringUtils.isNotEmpty(cc)) {
					messageHelper.setCc(new String(cc.getBytes(), "8859_1"));
				}
				if (StringUtils.isNotEmpty(bcc)) {
					messageHelper.setBcc(new String(bcc.getBytes(), "8859_1"));
				}
				
				messageHelper.setSubject(subject);
				messageHelper.setText(text);
				
				if (attach != null) {
					for (Object key : attach.keySet().toArray()) {
						messageHelper.addAttachment((String) key, attach.get(key));
					}
				}
			}
		});
	}
	
}
