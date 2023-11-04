package com.nh.escm.common.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.common.vo.TbCmBzplVO;

public class CodeDao extends AbstractDao {
	//공통코드를 가져오는 dao
	public List<Map<String, Object>> getCodeList(String codeKey, String where) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("codeKey", codeKey);
		param.put("where", where);
		return getSqlSession().selectList("code.getCodeList", param);
	}
	
	public List<TbCmBzplVO> getNABizPlace(String SPLR_NA_TRPL_C, String SEARCH_TYPE, String DEL_YN) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SPLR_NA_TRPL_C", SPLR_NA_TRPL_C);
		param.put("SEARCH_TYPE", SEARCH_TYPE);
		param.put("DEL_YN", DEL_YN);

		return getSqlSession().selectList("code.getNABizPlace", param);
	}
	/**
	 * 지역 코드 조회(지역구)
	 * @return
	 */
	public List<Map<String, Object>> getRgnCode() {
		Map<String, Object> param = new HashMap<String, Object>();

		return getSqlSession().selectList("code.getRgnCode", param);
	}
	/**
	 * 지역 코드 조회(상세지역)
	 * @return
	 */
	public List<Map<String, Object>> getRgnCodeD(String simpC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SIMP_C", simpC);
		return getSqlSession().selectList("code.getRgnCodeD", param);
	}
	/**
	 * 권한사업장 조회
	 * 
	 * @param NA_TRPL_C		거래처코드
	 * @param NA_MBCO_DSC	본지사구분 (1: 본사, 2: 지사, 3: 내부직영점, 4: 외부직영점, 5: 위탁대리점)
	 * @return
	 */
	public List<Map<String, Object>> getRightsBizPlace(String NA_TRPL_C, String NA_MBCO_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		
		if ("5".equals(NA_MBCO_DSC)) { // 위탁대리점인 경우
			return getSqlSession().selectList("code.getRightsBizPlaceForTruAgcy", param);
		} else {
			return getSqlSession().selectList("code.getRightsBizPlace", param);
		}
	}
	
	/**
	 * 주류공급업체의 권한사업장 조회
	 * 
	 * @param NA_TRPL_C		거래처코드
	 * @param NA_MBCO_DSC	본지사구분 (1: 본사, 2: 지사, 3: 내부직영점, 4: 외부직영점, 5: 위탁대리점)
	 * @return
	 */
	public List<Map<String, Object>> getRightsBizPlaceLiq(String NA_TRPL_C, String NA_MBCO_DSC) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("NA_TRPL_C", NA_TRPL_C);
		
		return getSqlSession().selectList("code.getRightsBizPlaceLiq", param);
		
	}
	
	/**포털 시퀀스조회*/
	public Map<String, Object> getSequence(String TABLE_NAME) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TABLE_NAME", TABLE_NAME.toUpperCase());
		return getSqlSession().selectOne("seq.getSequence",param);
	}
	
	/**솔루션[SMS] 시퀀스조회*/
	public Map<String, Object> getSmsSequence(String TYPE) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TYPE", TYPE);
		return getSqlSession().selectOne("seq.getSmsSequence",param);
	}
	/**솔루션[MMS] 시퀀스조회*/
	public Map<String, Object> getMmsSequence(String TYPE) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TYPE", TYPE);
		return getSqlSession().selectOne("seq.getMmsSequence",param);
	}
	/**솔루션[EMAIL] 시퀀스조회*/
	public Map<String, Object> getEmailSequence(String TYPE) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TYPE", TYPE);
		return getSqlSession().selectOne("seq.getEmailSequence",param);
	}
	
	/**솔루션[EMAIL] 시퀀스조회*/
	public Map<String, Object> getVrAcSequence(String TYPE) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TYPE", TYPE);
		Map<String, Object> resultMap = getSqlSession().selectOne("seq.getVrAcSequence",param);
		getSqlSession().update("seq.updateVrAcSequence", resultMap);
		return resultMap;
	}
	
	
	
	/**포털 공통코드목록 조회*/
	public List<Map<String, Object>> getPortalCodeList(String codeKey) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("codeKey", codeKey);
		return getSqlSession().selectList("code.getPortalCodeList", param);
	}
	
	/**
	 * 암호화
	 * @return
	 */
	public List<Map<String, Object>> getCIFList() {
		Map<String, Object> param = new HashMap<String, Object>();
		String[] decrypts = {"MPHNO","NA_TRPL_C"};
		param.put("decrypt", decrypts);
		
		param.put("sortName", "NA_TRPL_C");
		param.put("sortType", "ASC");
		param.put("start", -1);
		param.put("end", -1);
		
		return getSqlSession().selectList("common.getCIFList", param);
	}
	
	public List<Map<String, String>> getMenuVersion() {
		Map<String, Object> param = new HashMap<String, Object>();
		return getSqlSession().selectList("code.getMenuVersion", param);
	}
	
	public boolean setMenuVersion(String VERSION) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("VERSION", VERSION);
		return getSqlSession().update("code.setMenuVersion", param) > 0;
	}
}
