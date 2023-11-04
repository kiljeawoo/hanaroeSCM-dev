package com.nh.escm.common.service;

import java.math.BigDecimal;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.common.dao.SequenceKeyDao;
import com.nh.escm.common.vo.SQLNames.CommonSequence;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;

@Service
public class SequenceKeyService extends AbstractService {

	@Autowired
	private SequenceKeyDao sequenceKeyDao;
	
	public Long getNextKey(SequenceKeyName keyName) {
		Long nextKey = 0L;
		String nextHexKey = "0";
		
		Map<String, Object> seqMap = sequenceKeyDao.getCurrentSEQ(keyName.name());
		if(seqMap == null && sequenceKeyDao.initSEQ(keyName.name())) {
				seqMap = sequenceKeyDao.getCurrentSEQ(keyName.name());
		}
		
		if(seqMap == null) {
			logger.equals("Can not get the Key");
			return null;
		}
		nextKey = ((BigDecimal)seqMap.get(CommonSequence.CURRENT_KEY.name())).longValue()+1;
		nextHexKey = Long.toHexString(nextKey);
	
		sequenceKeyDao.saveSEQ(nextKey, nextHexKey, keyName.name());
		return nextKey;
	}
	
	public String getNextHexKey(SequenceKeyName keyName) {
		Long nextKey = 0L;
		String nextHexKey = "0";
		
		Map<String, Object> seqMap = sequenceKeyDao.getCurrentSEQ(keyName.name());
		if(seqMap == null && sequenceKeyDao.initSEQ(keyName.name())) {
			seqMap = sequenceKeyDao.getCurrentSEQ(keyName.name());
		}
		
		if(seqMap == null) {
			logger.equals("Can not get the Key");
			return null;
		}
		nextKey = ((BigDecimal)seqMap.get(CommonSequence.CURRENT_KEY.name())).longValue()+1;
		nextHexKey = Long.toHexString(nextKey);
		sequenceKeyDao.saveSEQ(nextKey, nextHexKey, keyName.name());
		if(StringUtils.isNotEmpty(keyName.prefix))
			return keyName.prefix+StringUtils.leftPad(nextHexKey, keyName.length-keyName.prefix.length(), "0");
		else
			return StringUtils.leftPad(nextHexKey, keyName.length, "0");
	}
	
	public void insertData() {
		String name = System.currentTimeMillis()+"";
		try {
			sequenceKeyDao.initSEQ(name);
			sequenceKeyDao.initSEQ(name+name+name+name+name+name+name+name+name);
		} catch (DataAccessException e) {
			throw new AppetizerException();
		}
	}
}
