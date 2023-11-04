package com.nh.escm.common.scheduling.sms.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO.MessageSendingType;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO.MessageStatusType;
import com.nh.escm.common.scheduling.sms.vo.SdkSmsVO;

public class DBErrorSmsSenderDao extends AbstractDao {
	
	public String gerRecordId(){
		return getSqlSession().selectOne("sms.gerRecordId");
	}
	
	
	public List<Map<String, Object>>retrieveDbErrorLog(String recordId, String regDt){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("RECORD_ID", recordId);
		params.put("REG_DT", regDt);
		logger.debug("▶▶▶ retrieveDbErrorLog Params : " + params);
		return getSqlSession().selectList("sms.retrieveDbErrorLog", params);
	}
	
	public int insertDbSmsSendInf(String recordId, String hostId, String hostAddress, String messageText, String regDt, String sendYn){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("RECORD_ID", recordId);
		params.put("HOST_ID", hostId);
		params.put("HOST_ADDRESS", hostAddress);
		params.put("MESSAGE_TEXT", messageText);
		params.put("REG_DT", regDt);
		params.put("SEND_YN", sendYn);
		logger.debug("▶▶▶ insertDbSmsSendInf Params : " + params);
		return getSqlSession().insert("sms.insertDbSmsSendInf", params);
	}
	
	public String getSmsSequence(){
		return getSqlSession().selectOne("sms.getSmsSequence");
	}
	
	public boolean updateSendYn(String recordId, String sendYn){
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("RECORD_ID", recordId);
		params.put("SEND_YN", sendYn);
		return getSqlSession().update("sms.updateSendYn", params) > 0;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
	
	public boolean insertSmsSend(SdkSmsVO smsVO) {
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
