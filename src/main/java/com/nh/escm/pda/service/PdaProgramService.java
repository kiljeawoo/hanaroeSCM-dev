package com.nh.escm.pda.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.pda.dao.PdaProgramDao;

public class PdaProgramService extends AbstractService {
	
	@Autowired
	private PdaProgramDao pdaProgramDao;
	
	/** 프로그램 리스트 페이지 처리 */
	public int getMainCount(String PGM_FL_VER, String PGM_FL_ID) {
		return pdaProgramDao.getMainCount(PGM_FL_VER, PGM_FL_ID);
	}
	
	/** 프로그램 최종버전/이력 리스트 */
	public List<Map<String, Object>> mainSelectList(String PGM_FL_VER, String PGM_FL_ID, int start, int end) {
		return pdaProgramDao.mainSelectList(PGM_FL_VER, PGM_FL_ID, start, end);
	}

	public void PgmInsertList(String PGM_FL_ID, String RMK_CNTN, String systemFileName, String USER_ID) {
		try {
			String PGM_FL_VER = DateUtil.getCurrentDate("yyyyMMdd-HHmm");
			String PGM_FL_PATH = PGM_FL_ID + "-" + PGM_FL_VER;
			
			pdaProgramDao.PgmInsertList(PGM_FL_ID, PGM_FL_VER, PGM_FL_PATH, RMK_CNTN, USER_ID);
			
			// systemFileName -> path
			String srcDir = Configurer.getProperty("file.temp.path");
			String dstDir = Configurer.getProperty("file.pda.program.path");
			
			File srcFile = new File(srcDir + File.separator + systemFileName);
			File dstFile = new File(dstDir + File.separator + PGM_FL_PATH);
			
			if (!srcFile.exists() || !srcFile.renameTo(dstFile))	{
				throw new AppetizerException("파일 복사 실패. " + srcFile.getCanonicalPath() + ", " + dstFile.getCanonicalPath());
			}
		} catch (IOException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> selectDetail(String PGM_FL_ID, String PGM_FL_VER) {
		return pdaProgramDao.selectDetail(PGM_FL_ID, PGM_FL_VER);
	}

	public void deletePdaDetail(String PGM_FL_ID, String PGM_FL_VER) {
		try {
			pdaProgramDao.deletePdaDetail(PGM_FL_ID,PGM_FL_VER);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
}
