package com.nh.escm.common.message.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.common.message.vo.SDK_SMS_SENDVO;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO.MessageSendingType;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO.MessageStatusType;

public class MessageSenderDao extends AbstractDao {
	
	public boolean savePushMessage(TB_PUSH_MSGVO vo) {
		return getSqlSession().insert("message.savePushMessage", vo) > 0;
	}

	public List<TB_PUSH_MSGVO> getMessageForSMS() {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("STATUS",MessageStatusType.WAIT);
		param.put("SEND_TP", MessageSendingType.SMS);
		return getSqlSession().selectList("message.getPushMessageList", param);
	}

	public List<TB_PUSH_MSGVO> getMessageForPush() {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("STATUS",MessageStatusType.WAIT);
		param.put("SEND_TP", MessageSendingType.PUSH);
		return getSqlSession().selectList("message.getPushMessageList", param);
	}
	
	public List<TB_PUSH_MSGVO> getPushErrorMessageList() {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("STATUS", MessageStatusType.ERROR);
		param.put("SEND_TP", MessageSendingType.PUSH);
		return getSqlSession().selectList("message.getPushMessageList", param);
	}
	
	public boolean insertSmsSend(SDK_SMS_SENDVO smsVO) {
		return getSqlSession().insert("message.insertSmsSend", smsVO) > 0;
	}
	
	public boolean setStatus(long MESSAGE_ID, String MB_ID, MessageSendingType SENT_TP) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MESSAGE_ID", MESSAGE_ID);
		param.put("MB_ID", MB_ID);
		param.put("STATUS", MessageStatusType.SENT);	
		param.put("SEND_DTM", DateUtil.getCurrentDate());
		param.put("SENT_TP", SENT_TP);
		
		return getSqlSession().update("message.setStatus", param) > 0;
	}
}
