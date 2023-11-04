package com.nh.escm.common.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.common.dao.CodeDao;
import com.nh.escm.common.dao.FileDao;
import com.nh.escm.common.vo.TbCmBzplVO;

@Service
public class FileService extends AbstractService {

	@Autowired
	private FileDao fileDao;
	
	/*파일명 추가*/
	public boolean updateFileNm(String fileNm, String naTrplC) {
		return fileDao.update(fileNm, naTrplC);
	}
	
	/*파일명 삭제*/
	public boolean deleteFileNm(String naTrplC) {
		return fileDao.delete(naTrplC);
	}
}
