package com.nh.escm.pds.company.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.company.vo.CompanyInfVO;
import com.nh.escm.pds.company.vo.CompanyReqFile;
import com.nh.escm.pds.company.vo.CompanyReqVO;
import com.nh.escm.pds.company.vo.CompanyVO;

public class CompanyDAO extends AbstractDao{
	
	/*
	 * 화면ID : VAN_DS_SC_1400
	 * 화면설명 : 자사정보조회
	 */
	public CompanyVO selectInfo(String[] TRPL_C_ARR){
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR[0]);
		return getSqlSession().selectOne("companyDAO.selectComp",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리
	 */
	public List<Map<String,Object>> selectUser(String[] TRPL_C_ARR,String RDO_CHK,String EDT_NM){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C",TRPL_C_ARR);
		map.put("RDO_CHK",RDO_CHK);
		map.put("EDT_NM",EDT_NM);
		return getSqlSession().selectList("companyDAO.selectUser",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelCompanyUsers(String[] TRPL_C_ARR,String RDO_CHK,String EDT_NM, ExcelFileMakerResultHandler handler){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C",TRPL_C_ARR);
		map.put("RDO_CHK",RDO_CHK);
		map.put("EDT_NM",EDT_NM);
		getSqlSession().select("companyDAO.downloadExcelCompanyUsers",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리 수정
	 */
	public int updateUser(CompanyInfVO vo){
		if(vo.getHOFF_APV_YN().equals("1")){
			vo.setHOFF_APV_YN("Y");
		}else{
			vo.setHOFF_APV_YN("N");
		}
		return getSqlSession().update("companyDAO.updateUser",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1420
	 * 화면설명 : 본지사조회
	 */
	public List<CompanyVO> selectSearch(String[] TRPL_C_ARR){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C",TRPL_C_ARR);
		return getSqlSession().selectList("companyDAO.selectSearch",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1420
	 * 화면설명 : 본지사조회 (지사로 로그인 할 경우)
	 */
	public List<CompanyVO> selectSearch_sub(String TRPL_CODE){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("mbcocode", TRPL_CODE);
		return getSqlSession().selectList("companyDAO.selectSearch_sub",map);
	}
	
	/**
	 * 사용자 메뉴권한 저장
	 * 
	 * @param MB_ID			회원ID
	 * @param MENU_GROUP	메뉴그룹
	 * @param AUTH_F		권한여부 (1: 권한있음, 0: 권한없음)
	 * @param modifier		변경자
	 */
	public void mergeUsrMenuAuth(String MB_ID, String MENU_GROUP, String AUTH_F, String modifier) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("MB_ID", MB_ID);
		param.put("MENU_GROUP", MENU_GROUP);
		param.put("AUTH_F", AUTH_F);
		param.put("modifier", modifier);
		
		getSqlSession().insert("companyDAO.mergeUsrMenuAuth", param);
	}
	
	/**
	 * 사용자 메뉴권한 목록 조회
	 * 
	 * @param TRPL_C_ARR	권한사업장 코드 목록
	 * @param RDO_CHK		사용자 조회구분 (1: 회원ID, 2: 사용자명)
	 * @param EDT_NM		사용자 조회값
	 * @return
	 */
	public List<Map<String, Object>> retrieveUsrMenuAuthList(String[] TRPL_C_ARR, String RDO_CHK, String EDT_NM) {
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("TRPL_C_ARR", TRPL_C_ARR);
		param.put("RDO_CHK", RDO_CHK);
		param.put("EDT_NM", escape(EDT_NM)); // escape for LIKE
		
		return getSqlSession().selectList("companyDAO.retrieveUsrMenuAuthList", param);
	}
	
	/*
	 * 화면ID : OMG_DS_SC_5180
	 * 화면설명 : 전자계약전용: 임시 거래처 등록
	 */
	public int insertCompany(CompanyVO vo){

		return getSqlSession().insert("companyDAO.insertCompany",vo);
	}
	
	/**
	 * 거래처 정보 변경 신청
	 * @param vo	변경VO
	 * @return
	 */
	public void insertCompanyModReq(CompanyReqVO vo) {
		getSqlSession().insert("companyDAO.insertCompanyModReq", vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정 신청내역 조회 Count
	 */
	public int retrieveCompanyModReqCount(Map<String, Object> param) {
		return getSqlSession().selectOne("companyDAO.retrieveCompanyModReqCount", param);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정 신청내역 조회
	 */
	public List<Map<String,Object>> retrieveCompanyModReq(Map<String, Object> param){
		return getSqlSession().selectList("companyDAO.retrieveCompanyModReq",param);
	}

	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정 신청내역 취소 대상 조회
	 */
	public int retrieveCompanyModReqExist(CompanyReqVO vo){
		return getSqlSession().selectOne("companyDAO.retrieveCompanyModReqExist",vo);
	}
	
	/**
	 * 거래처 정보 변경 신청 취소
	 * @param vo	변경VO
	 * @return
	 */
	public void insertCompanyDelReq(CompanyReqVO vo) {
		getSqlSession().insert("companyDAO.insertCompanyDelReq", vo);
	}

	/*
	 * 화면ID : VAN_DS_SC_1401
	 * 화면설명 : 거래처정보수정 파일 저장
	 */
	public int fileReqIn(CompanyReqFile vo) {
		return getSqlSession().insert("companyDAO.fileReqIn", vo);
	}
}
