package com.nh.escm.ct.eltctrw.dao;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.ct.eltctrw.vo.EltAuthVO;

public class EltAuthDAO extends AbstractDao {

	/**
	 * 전자계약 권한 조회
	 */
	public List<EltAuthVO> checkEltAuthor(String BUYER_ENO, String USR_TPC) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> checkEltAuthor params : " + BUYER_ENO + " / " + USR_TPC);
		}
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BUYER_ENO", BUYER_ENO);
		param.put("USR_TPC", USR_TPC);

		return getSqlSession().selectList("eltAuthDAO.checkEltAuthor", param);
	}

	/**
	 * 전자계약 계약서 권한 리스트
	 * 
	 * @return
	 */
	public List<Map<String, Object>> retrieveEltctrwBuyerAuthDSList() {
		return getSqlSession().selectList("eltAuthDAO.retrieveEltctrwBuyerAuthDSList");
	}

	/**
	 * 전자계약권한관리 조회
	 * 
	 * @param proChk
	 * @param edtNm
	 * @param fvEltAutDsc
	 * @return
	 */
	public List<Map<String, Object>> retrieveEltctrwBuyerAuthList(String proChk, String edtNm, String fvEltAuthCd) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PRO_CHK", proChk);
		param.put("EDT_NM", edtNm);
		param.put("ELT_AUTH_DSC", fvEltAuthCd);
		return getSqlSession().selectList("eltAuthDAO.retrieveEltctrwBuyerAuthList", param);
	}

	/**
	 * 전자계약 권한사업자번호 조회
	 * 
	 * @return
	 */
	public List<Map<String, Object>> retrieveEltctrwAuthBzplcList() {
		return getSqlSession().selectList("eltAuthDAO.retrieveEltctrwAuthBzplcList");
	}

	/**
	 * 전자계약권한관리 저장
	 * 
	 * @param mbId
	 * @param eltAuthDsc
	 * @param usrId
	 * @return
	 */
	public int insertEltctrwBuyerAuth(String mbId, String eltAuthDsc, String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", mbId);
		param.put("ELT_AUTH_DSC", eltAuthDsc);
		param.put("USR_ID", usrId);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> insertEltctrwBuyerAuth params : " + param);
		}
		return getSqlSession().insert("eltAuthDAO.insertEltctrwBuyerAuth", param);
	}

	/**
	 * 전자계약권한관리 삭제
	 * 
	 * @param mbId
	 * @return
	 */
	public int deleteEltctrwBuyerAuth(String mbId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", mbId);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> insertEltctrwBuyerAuth params : " + param);
		}
		return getSqlSession().insert("eltAuthDAO.deleteEltctrwBuyerAuth", param);
	}

	/**
	 * 사업자번호 확인
	 * 
	 * @param bzNo1
	 * @param bzNo2
	 * @param bzNo3
	 * @return
	 */
	public List<Map<String, Object>> retrieveEltctrwBizNoList(String bzNo1, String bzNo2, String bzNo3) {

		StringBuffer sb = new StringBuffer();

		sb.append(bzNo1);
		sb.append(bzNo2);
		sb.append(bzNo3);

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZNO", sb.toString());

		return getSqlSession().selectList("eltAuthDAO.retrieveEltctrwBizNoList", param);
	}

	/**
	 * 전자계약직매장권한관리
	 * 
	 * @param bizNumeber
	 * @param clntim
	 * @param chiefEno
	 * @param gln
	 * @return
	 */
	public List<Map<String, Object>> retrieveEltctrwAuthList(String bizNumeber, String clntim, String chiefEno,
			String gln) {

		Map<String, Object> param = new HashMap<String, Object>();

		param.put("BIZ_NUMBER", bizNumeber);
		param.put("CLNTNM", clntim);
		param.put("CHIEF_ENO", chiefEno);
		param.put("NA_TRPL_C", gln);

		return getSqlSession().selectList("eltAuthDAO.retrieveEltctrwAuthList", param);
	}

	/**
	 * 전자계약직매장권한관리 저장
	 * 
	 * @param bzno
	 * @param clntnm
	 * @param chiefEno
	 * @param usrId
	 * @return
	 */
	public int insertEltctrwAuth(String bzno, String clntnm, String chiefEno, String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZNO", bzno);
		param.put("CLNTNM", clntnm);
		param.put("CHIEF_ENO", chiefEno);
		param.put("USR_ID", usrId);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> insertEltctrwAuth params : " + param);
		}
		return getSqlSession().insert("eltAuthDAO.insertEltctrwAuth", param);
	}

	/**
	 * 전자계약직매장권한관리 저장
	 * 
	 * @param bzno
	 * @param clntnm
	 * @param chiefEno
	 * @param usrId
	 * @return
	 */
	public int updateEltctrwAuth(String bzno, String clntnm, String chiefEno, String usrId) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZNO", bzno);
		param.put("CLNTNM", clntnm);
		param.put("CHIEF_ENO", chiefEno);
		param.put("USR_ID", usrId);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> updateEltctrwAuth params : " + param);
		}
		return getSqlSession().insert("eltAuthDAO.updateEltctrwAuth", param);
	}

	/**
	 * 전자계약직매장권한관리 삭제
	 * 
	 * @param bzno
	 * @return
	 */
	public int deleteEltctrwAuth(String bzno) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BZNO", bzno);

		if (logger.isDebugEnabled()) {
			logger.debug(">>> deleteEltctrwAuth params : " + param);
		}
		return getSqlSession().insert("eltAuthDAO.deleteEltctrwAuth", param);
	}
}