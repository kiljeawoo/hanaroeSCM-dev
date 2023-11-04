package com.nh.escm.common.message.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.common.message.dao.MessageSenderDao;
import com.nh.escm.common.message.vo.SDK_SMS_SENDVO;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO;
import com.nh.escm.common.message.vo.TB_PUSH_MSGVO.MessageSendingType;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;


@Service
public class MessageSenderService extends AbstractService {

	@Autowired
	private MessageSenderDao messageSenderDao;
	
	@Autowired
	private SequenceKeyService sequenceKeyService;
	
	public boolean savePushMessage(TB_PUSH_MSGVO vo) throws AppetizerException {
		try {
			vo.setMESSAGE_ID(sequenceKeyService.getNextKey(SequenceKeyName.TB_PUSH_MSG));
			vo.setINPUT_DTM(DateUtil.getCurrentDate());
			
			return messageSenderDao.savePushMessage(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void sendMessage()  throws AppetizerException {
		sendPush();
		sendSMS();
	}
	
	protected int sendPush()  throws AppetizerException {
		return 0;
	}
	
	protected int sendSMS() throws AppetizerException {
		try {
			List<TB_PUSH_MSGVO> pushVoList =  messageSenderDao.getMessageForSMS();
			for(TB_PUSH_MSGVO vo : pushVoList) {
				messageSenderDao.insertSmsSend(convertPUSH2SMS(vo));
				messageSenderDao.setStatus(vo.getMESSAGE_ID(), vo.getMB_ID(), vo.getSEND_TP());
			}
			return pushVoList.size();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int sendPushErrorMessageToSMS() throws AppetizerException {
		try {
			List<TB_PUSH_MSGVO> pushVoList =  messageSenderDao.getPushErrorMessageList();
			for(TB_PUSH_MSGVO vo : pushVoList) {
				messageSenderDao.insertSmsSend(convertPUSH2SMS(vo));
				messageSenderDao.setStatus(vo.getMESSAGE_ID(), vo.getMB_ID(), MessageSendingType.SMS);
			}
			return pushVoList.size();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	private SDK_SMS_SENDVO convertPUSH2SMS(TB_PUSH_MSGVO pushVO){

		SDK_SMS_SENDVO smsVO = new SDK_SMS_SENDVO();
		smsVO.setUSER_ID(Configurer.getProperty("smsSender.userId"));
		smsVO.setSCHEDULE_TYPE(0);
		smsVO.setSEND_DATE(DateUtil.getCurrentDate("yyyyMMddHHmmss"));
		smsVO.setDEST_TYPE("0");
		
		smsVO.setDEST_COUNT("0");		
		smsVO.setSUBJECT(pushVO.getSUBJECT());
		smsVO.setSMS_MSG(pushVO.getMSG());
		smsVO.setDEST_INFO(pushVO.getMSG()+"^"+pushVO.getUSR_HP());
		smsVO.setMSG_ID(pushVO.getMESSAGE_ID());
		smsVO.setSEND_STATUS(0);
		smsVO.setSEND_COUNT(0);
		smsVO.setSEND_RESULT(0);
		smsVO.setCALLBACK(Configurer.getProperty("smsSender.callback"));
		return smsVO;
	}
}
