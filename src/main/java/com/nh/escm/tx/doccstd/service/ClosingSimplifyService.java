package com.nh.escm.tx.doccstd.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.service.AbstractService;
import com.nh.escm.tx.doccstd.dao.ClosingSimplifyDAO;
import com.nh.escm.tx.doccstd.vo.ClosingSimplifyVO;

@Service
public class ClosingSimplifyService extends AbstractService {

	@Autowired
	private ClosingSimplifyDAO closingSimplifyDao;
	
	public List<Map<String, Object>> retrieveClosingSimplifyList(Map<String, Object> param, int start, int end) {
		try {
			return closingSimplifyDao.retrieveClosingSimplifyList(param, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveClosingSimplifySummaryList(Map<String, Object> param) {
		try {
			return closingSimplifyDao.retrieveClosingSimplifySummaryList(param);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int retrieveClosingSimplifyListCount(Map<String, Object> param) {
		try {
			return closingSimplifyDao.retrieveClosingSimplifyListCount(param);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> excelClosingSimplifyAllList(Map<String, Object> param, String type) {
		try {
			return closingSimplifyDao.excelClosingSimplifyAllList(param, type);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveClosingSimplifyDetail(Map<String, Object> param, String type) {
		try {
			return closingSimplifyDao.retrieveClosingSimplifyDetail(param, type);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveClosingSimplifySubDetail(Map<String, Object> param, String type) {
		try {
			return closingSimplifyDao.retrieveClosingSimplifySubDetail(param, type);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveByngSimplifyList(Map<String, Object> param, int start, int end) {
		try {
			return closingSimplifyDao.retrieveByngSimplifyList(param, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveByngSimplifySummaryList(Map<String, Object> param) {
		try {
			return closingSimplifyDao.retrieveByngSimplifySummaryList(param);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int retrieveByngSimplifyListCount(Map<String, Object> param) {
		try {
			return closingSimplifyDao.retrieveByngSimplifyListCount(param);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveByngSimplifyDetailList(Map<String, Object> param) {
		try {
			return closingSimplifyDao.retrieveByngSimplifyDetailList(param);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	
	/*
	 * 빌링 영역
	 */ 
	
	public List<Map<String, Object>> retrieveClosingSimplifyMarkupSummary(Map<String, Object> param) {
		try {
			return closingSimplifyDao.retrieveClosingSimplifyMarkupSummary(param);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<ClosingSimplifyVO> retrieveClosingSimplifyMarkupList(Map<String, Object> param) {
		try {
			return closingSimplifyDao.retrieveClosingSimplifyMarkupList(param);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 빌링로그 생성(select형)
	 * @param param 빌링대상 정보
	 */
	public void markUpForSimplify(final Map<String, Object> param) {
		String gln = (String) param.get("GLN");
		String mbId = (String) param.get("MB_ID");
		String crtYm = (String) param.get("CRT_YM");
		String[] naTrplC = (String[]) param.get("NA_TRPL_C");

		try {
			if (!StringUtils.isEmpty(gln) && !StringUtils.isEmpty(mbId) && !StringUtils.isEmpty(crtYm) && naTrplC.length > 0) {
				/*
				 * [주의사항]
				 * 동일한 SELECT쿼리 결과로 진행하기 때문에 TB_BY_BYNG_RMS_LOG 데이터를 먼저 INSERT 할 경우
				 * TB_BY_BYNG_M 과금 정보를 업데이트 할 수 없음. 반드시 TB_BY_BYNG_M 테이블을 먼저 업데이트 후
				 * TB_BY_BYNG_RMS_LOG 테이블에 INSERT 해야함
				 */

				// 마감간소화 과금 처리
				int markupCnt = closingSimplifyDao.markUp(param);
//				System.out.println("과금처리 : "+ markupCnt);

				// 마감간소화 과금 로그 생성(이력 관리용)
				if (markupCnt > 0) {
					closingSimplifyDao.insertClosingSimplifyMarkupLog(param);
				}
			} else {
				throw new ValidationException("빌링정보 누락");
			}
		} catch (ValidationException e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	/**
	 * 빌링로그 생성(리스트 형)
	 * @param markupList 빌링대상 목록
	 */
	public void markUpForSimplifyByList(final List<ClosingSimplifyVO> markupList) {
		if (markupList != null && markupList.size() > 0) {
			// 복수처리
			try {
				int STEP = 500; // 분할처리 크기
				int COUNT = markupList.size();
				int start = 0;
				int end = COUNT < STEP ? COUNT : STEP;
				
				do {
					List<ClosingSimplifyVO> subList = markupList.subList(start, end);
					validationList(subList);
					
					// 마감간소화 과금 로그 생성(이력 관리용)
					closingSimplifyDao.insertClosingSimplifyMarkupLogList(subList);
					
					// 마감간소화 과금 처리
					closingSimplifyDao.markUpList(subList);
					
					start = end;
					end += STEP;
					if (end > COUNT) { end = COUNT; }
				} while (start != COUNT);
			} catch (ValidationException e) {
				logger.error(e.getMessage(), e); // ignore
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e); // ignore
			}
		}
	}
	
	/**
	 * 과금데이터 Validation (목록)
	 * @param list
	 * @throws ValidationException
	 */
	private void validationList(List<ClosingSimplifyVO> list) throws ValidationException {
		for (ClosingSimplifyVO vo : list) {
			validation(vo);
		}
	}
	
	/**
	 * 과금데이터 Validation
	 * @param vo
	 * @throws ValidationException
	 */
	private void validation(ClosingSimplifyVO vo) throws ValidationException {
		if (StringUtils.isEmpty(vo.getGLN())) {
			throw new ValidationException("GLN IS NULL");
		}
		if (StringUtils.isEmpty(vo.getMB_ID())) {
			throw new ValidationException("MB_ID IS NULL");
		}
		if (StringUtils.isEmpty(vo.getNA_BZPLC())) {
			throw new ValidationException("NA_BZPLC IS NULL");
		}
		if (StringUtils.isEmpty(vo.getNA_TEAM_C())) {
			throw new ValidationException("NA_TEAM_C IS NULL");
		}
		if (StringUtils.isEmpty(vo.getSLP_DT())) {
			throw new ValidationException("SLP_DT IS NULL");
		}
		if (StringUtils.isEmpty(vo.getNA_SLPNO())) {
			throw new ValidationException("NA_SLPNO IS NULL");
		}
		if (StringUtils.isEmpty(vo.getNA_TRPL_C())) {
			throw new ValidationException("NA_TRPL_C IS NULL");
		}
	}
}