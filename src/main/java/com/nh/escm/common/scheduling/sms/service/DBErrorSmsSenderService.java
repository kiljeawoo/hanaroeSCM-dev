package com.nh.escm.common.scheduling.sms.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.common.scheduling.sms.dao.DBErrorSmsSenderDao;
import com.nh.escm.common.scheduling.sms.vo.SdkSmsVO;


@Service
public class DBErrorSmsSenderService extends AbstractService {

	@Autowired
	private DBErrorSmsSenderDao dbErrorSmsSenderDao;
	
	
	public void sendSms(){
		String record = "";
		String regDt = DateUtil.getCurrentDate("yyyyMMddHHmmssSSS");
		
		/*
		 * 1. view에서 record의 다음 레코드 리스트를 가지고 온다
		 * 2. 리스트를 SMS Hisotry 테이블에 저장한다
		 * 3. SMS History 의 전송여부의 N인 대상을 SMS 전송하고 전송여부가 성공이면 Y, 실패면 E로 Update한다
		 */
		String recordId = dbErrorSmsSenderDao.gerRecordId();
		logger.debug("최근 전송된 RECORD ID : " + recordId);
		logger.debug("현재시간 : " + regDt);
		
		
		List<Map<String, Object>> list = dbErrorSmsSenderDao.retrieveDbErrorLog(recordId, regDt);
		for(Map<String, Object> map : list){
			dbErrorSmsSenderDao.insertDbSmsSendInf(map.get("RECORD_ID").toString() ,map.get("HOST_ID").toString() ,map.get("HOST_ADDRESS").toString() ,map.get("MESSAGE_TEXT").toString() ,map.get("REG_DT").toString()	,"N");
		}
		 
		logger.debug("DB Error Log Count : [ " + list.size() +" ] 건");
		
		String[] adminMobileArr= StringUtils.splitPreserveAllTokens(Configurer.getProperty("db.sms.admin.mobile"), '/');
		String[] adminNmArr= StringUtils.splitPreserveAllTokens(Configurer.getProperty("db.sms.admin.name"), '/');
		int successCnt = 0;
		int failCnt = 0;
		for(Map<String, Object> map : list){
			for(int i = 0; i <  adminMobileArr.length; i++){
				SdkSmsVO smsVO = new SdkSmsVO();
				smsVO.setUSER_ID(Configurer.getProperty("db.sms.userId"));
				smsVO.setMSG_ID(Long.parseLong(dbErrorSmsSenderDao.getSmsSequence()));
				smsVO.setSCHEDULE_TYPE(0);
				smsVO.setSEND_DATE(DateUtil.getCurrentDate("yyyyMMddHHmmss"));
				smsVO.setDEST_TYPE("0");
				smsVO.setDEST_COUNT("0");		
				smsVO.setSUBJECT("DB오류");
				smsVO.setSMS_MSG(map.get("MESSAGE_TEXT").toString());
				smsVO.setDEST_INFO(adminNmArr[i]+"^"+adminMobileArr[i]);
				smsVO.setSEND_STATUS(0);
				smsVO.setSEND_COUNT(0);
				smsVO.setSEND_RESULT(0);
				smsVO.setCALLBACK(Configurer.getProperty("db.sms.callback"));
				try{
					dbErrorSmsSenderDao.insertSmsSend(smsVO);
					dbErrorSmsSenderDao.updateSendYn(map.get("RECORD_ID").toString(), "Y");
					++successCnt;
				}catch(AppetizerException e){
					logger.error("################## : " + map.get("RECORD_ID") + " : " + e.getMessage());
					dbErrorSmsSenderDao.updateSendYn(map.get("RECORD_ID").toString(), "E");
					++failCnt;
					
				}
			}
		}
		logger.debug("DB ERROR Send SMS 성공건수 : " + successCnt);
		logger.debug("DB ERROR Send SMS 실패건수 : " + failCnt);
	}
	
}
