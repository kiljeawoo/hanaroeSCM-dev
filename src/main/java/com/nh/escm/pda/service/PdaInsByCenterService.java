package com.nh.escm.pda.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pda.dao.PdaInsByCenterDao;

public class PdaInsByCenterService {
	
	@Autowired
	private PdaInsByCenterDao pdaInsByCenterDao;
	
	/** 검수내역 조회 페이징 */
	public void selectByCenter(String from_date, String to_date, String centerList, List<String> daylist, ExcelFileMakerResultHandler handler) {
		
		pdaInsByCenterDao.selectByCenter(from_date, to_date, centerList, daylist, handler);
	}

	public void selectPdaDetail(String fROM_DT,
			String tO_DT, String centercode, List<String> daylist, ExcelFileMakerResultHandler handler) {
		
		pdaInsByCenterDao.selectPdaDetail(fROM_DT, tO_DT, centercode, daylist, handler );
	}
	

}
