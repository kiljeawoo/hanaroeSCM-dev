package com.nh.escm.pt.usrinf.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.pt.usrinf.dao.MbEntDAO;
import com.nh.escm.util.SeqGenUtil;

@Service
public class SendService extends AbstractService {

	@Autowired
	private MbEntDAO mbEntDAO;

	public int sendSms(String USR_HP, String SMS_MSG, String USR_NM) {
		
		if (USR_HP != null) {
			USR_HP = USR_HP.replaceAll("-", "");
		}
		
		int MSG_ID = SeqGenUtil.getSmsSeq("SMS").intValue();
		String USER_ID = Configurer.getProperty("smsSender.userId");
		int SCHEDULE_TYPE = 0;
		
		String SUBJECT = "";
		String SEND_DATE = DateUtil.getCurrentDate("yyyyMMddHHmmss");
		String DEST_TYPE = "0";
		String DEST_COUNT = "0";
		String DEST_INFO = USR_NM + "^" + USR_HP;
		
		int SEND_STATUS = 0;
		int SEND_COUNT = 0;
		int SEND_RESULT = 0;
		String CALLBACK = Configurer.getProperty("smsSender.callback");

		int rst = mbEntDAO.insertSmsSend(MSG_ID, USER_ID, SCHEDULE_TYPE,
				SUBJECT, SMS_MSG, SEND_DATE, DEST_TYPE, DEST_COUNT, DEST_INFO,
				SEND_STATUS, SEND_COUNT, SEND_RESULT, CALLBACK);
		
		return rst;
	}
	
	public int sendMms(String USR_HP, String MMS_MSG, String SUBJECT, String CALLBACK) {
		
		if (USR_HP != null) {
			USR_HP = USR_HP.replaceAll("-", "");
		}
		if (CALLBACK == null || CALLBACK.length() == 0) {
			CALLBACK = Configurer.getProperty("smsSender.callback");
		}
		
		int MSG_ID = SeqGenUtil.getSmsSeq("MMS").intValue();
		String USER_ID = Configurer.getProperty("smsSender.userId");
		int SCHEDULE_TYPE = 0;
		
		String NOW_DATE = DateUtil.getCurrentDate("yyyyMMddHHmmss");
		String SEND_DATE = DateUtil.getCurrentDate("yyyyMMddHHmmss");
		String DEST_TYPE = "0";
		String DEST_COUNT = "0";
		String DEST_INFO = USR_HP + "^" + USR_HP;
		
		int SEND_STATUS = 0;
		int SEND_COUNT = 0;
		int SEND_RESULT = 0;
		int CONTENT_COUNT = 0;
		int MSG_TYPE = 0;
		
		int rst = mbEntDAO.insertMmsSend(MSG_ID, USER_ID, SCHEDULE_TYPE,
				SUBJECT, MMS_MSG, NOW_DATE, SEND_DATE, DEST_TYPE, DEST_COUNT, DEST_INFO,
				SEND_STATUS, SEND_COUNT, SEND_RESULT, CALLBACK, CONTENT_COUNT, MSG_TYPE);
		
		return (rst == 1) ? MSG_ID : rst;
	}
	
	public int sendEmail(String SUBJECT, String MAILFROM, String MAILTO, String SDATE, String TDATE, String CONTENT,
			String type, String from_MB_NM, String to_MB_NM) {
		
		String NEWMAILFROM = MAILFROM; // 보내는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>
		String NEWMAILTO = MAILTO; // 받는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>
		
		// TODO : 확인필요
		if (!"".equals(MAILFROM) && !"".equals(MAILTO) && !"".equals(from_MB_NM) && !"".equals(to_MB_NM)) {
			NEWMAILTO = "\"" + from_MB_NM + "\"<" + MAILFROM + ">";
			NEWMAILFROM = "\"" + to_MB_NM + "\"<" + MAILTO + ">";
		} else if (!"".equals(MAILFROM) && !"".equals(MAILTO) && "".equals(from_MB_NM) && "".equals(to_MB_NM)) {
			NEWMAILTO = "\"" + MAILFROM + "\"<" + MAILFROM + ">";
			NEWMAILFROM = "\"" + MAILTO + "\"<" + MAILTO + ">";
		}
		
		if (CONTENT != null) {
			CONTENT = CONTENT.replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>");
		}
		CONTENT = "<html><body><head></head>" + CONTENT + " </body></html>";
		
		int SEQIDX = SeqGenUtil.getEmailSeq("EMAIL").intValue();
		String QRY = "SSV:" + MAILTO;
		String REPLYTO = Configurer.getProperty("emailSender.replyTo");
		String ERRORSTO = Configurer.getProperty("emailSender.errorsTo");
		String ATC_SET = "0"; // 첨부파일 개수
		String RNAME = " "; // 참조명에 해당합니다
		String MTYPE = "1"; // 0: 일반메일 1: html + text 메일 2: 보안메일
		String MAILIDX = "0";
		String HTML = "1"; // text : 0 , html : 1 기본 1
		
		int rst = mbEntDAO.insertEmailSend(
			  SEQIDX
			, SUBJECT
			, QRY
			, NEWMAILFROM
			, NEWMAILTO
			, REPLYTO
			, ERRORSTO
			, SDATE
			, TDATE
			, ATC_SET
			, RNAME
			, MTYPE
			, MAILIDX
			, CONTENT
			, HTML
		);
		
		return (rst == 1) ? SEQIDX : rst;
	}


	public int sendEltCtrwEmail(String SUBJECT, String MAILFROM, String MAILTO, String SDATE, String TDATE, String CONTENT,
			String type, String from_MB_NM, String to_MB_NM) {
		
		String NEWMAILFROM = MAILFROM; // 보내는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>
		String NEWMAILTO = MAILTO; // 받는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>

		/*
		 * 이메일 발신자 수신자 바뀜
		 */
		
		if (!"".equals(MAILFROM) && !"".equals(MAILTO) && !"".equals(from_MB_NM) && !"".equals(to_MB_NM)) {
			NEWMAILTO    = "\"" + to_MB_NM  + "\"<" + MAILTO  + ">";
			NEWMAILFROM  = "\"" + from_MB_NM + "\"<" + MAILFROM + ">";
		} else if (!"".equals(MAILFROM) && !"".equals(MAILTO) && "".equals(from_MB_NM) && "".equals(to_MB_NM)) {
			NEWMAILTO   = "\"" + MAILTO  + "\"<" + MAILTO  + ">";
			NEWMAILFROM = "\"" + MAILFROM  + "\"<" + MAILFROM + ">";
		}
		
		
		if (CONTENT != null) {
			CONTENT = CONTENT.replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>");
		}
		CONTENT = "<html><body><head></head>" + CONTENT + " </body></html>";
		
		int SEQIDX = SeqGenUtil.getEmailSeq("EMAIL").intValue();
		String QRY = "SSV:" + MAILTO;
		String REPLYTO = Configurer.getProperty("emailSender.replyTo");
		String ERRORSTO = Configurer.getProperty("emailSender.errorsTo");
		String ATC_SET = "0"; // 첨부파일 개수
		String RNAME = " "; // 참조명에 해당합니다
		String MTYPE = "1"; // 0: 일반메일 1: html + text 메일 2: 보안메일
		String MAILIDX = "0";
		String HTML = "1"; // text : 0 , html : 1 기본 1
		
		int rst = mbEntDAO.insertEmailSend(
			  SEQIDX
			, SUBJECT
			, QRY
			, NEWMAILFROM
			, NEWMAILTO
			, REPLYTO
			, ERRORSTO
			, SDATE
			, TDATE
			, ATC_SET
			, RNAME
			, MTYPE
			, MAILIDX
			, CONTENT
			, HTML
		);
		
		return (rst == 1) ? SEQIDX : rst;
	}
}
