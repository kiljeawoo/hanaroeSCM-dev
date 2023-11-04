package com.nh.escm.pds.company.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pds.company.dao.CompanyDAO;
import com.nh.escm.pds.company.vo.CompanyInfVO;
import com.nh.escm.pds.company.vo.CompanyReqFile;
import com.nh.escm.pds.company.vo.CompanyReqVO;
import com.nh.escm.pds.company.vo.CompanyVO;

@Service
public class CompanyService extends AbstractService {

	@Autowired
	private CompanyDAO companyDao;
	
	/*
	 * 화면ID : VAN_DS_SC_1400
	 * 화면설명 : 자사정보조회
	 */
	public CompanyVO selectInfo(String[] TRPL_C_ARR) {
		try{
			CompanyVO user = companyDao.selectInfo(TRPL_C_ARR);
			return user;
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리
	 */
	public List<Map<String,Object>> selectUser(String[] TRPL_C_ARR,String RDO_CHK,String EDT_NM){
		try{
			return companyDao.selectUser(TRPL_C_ARR,RDO_CHK,EDT_NM);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리
	 * 화면설명 : 엑셀다운로드
	 */
	public void downloadExcelCompanyUsers(String[] TRPL_C_ARR,String RDO_CHK,String EDT_NM, ExcelFileMakerResultHandler handler){
		try{
			companyDao.downloadExcelCompanyUsers(TRPL_C_ARR,RDO_CHK,EDT_NM, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1410
	 * 화면설명 : 자사사용자관리 수정
	 */
	public void updateUser(DataSet dsMain,List<CompanyInfVO> list){
		try{
			int rowMainType = 0;
			for(int i=0; i<dsMain.getRowCount(); i++){
				rowMainType = dsMain.getRowType(i);
				if(rowMainType == DataSet.ROW_TYPE_UPDATED){
					companyDao.updateUser(list.get(i));
				}
			}
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1420
	 * 화면설명 : 본지사조회
	 */
	public List<CompanyVO> selectSearch(String[] TRPL_C_ARR,String mbcocode){
		try{
			List<CompanyVO> volist = new ArrayList<CompanyVO>();
			if(mbcocode.equals("1")){
				volist = companyDao.selectSearch(TRPL_C_ARR);
			}else{
				volist = companyDao.selectSearch_sub(TRPL_C_ARR[0]);
			}
			return volist;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 사용자 메뉴권한 목록 저장
	 * 
	 * @param list
	 * @param modifier
	 */
	public void saveUsrMenuAuthList(List<Map<String, String>> list, String modifier) {
		
		if (list == null || list.size() == 0) {
			throw new IllegalArgumentException("list is empty.");
		}
		
		for (Map<String, String> vo : list) {
			String MB_ID = vo.get("MB_ID"); // 회원ID
			
			// 메뉴그룹(MENU_GROUP)별로 저장한다.
			companyDao.mergeUsrMenuAuth(MB_ID, "SCM.ORDER", vo.get("SCM_ORDER_F"), modifier); // 수주업무
			companyDao.mergeUsrMenuAuth(MB_ID, "SCM.DELIVERY", vo.get("SCM_DELIVERY_F"), modifier); // 배송업무
			companyDao.mergeUsrMenuAuth(MB_ID, "SCM.RECADV", vo.get("SCM_RECADV_F"), modifier); // 검수업무
			companyDao.mergeUsrMenuAuth(MB_ID, "PDS.OUTER", vo.get("PDS_OUTER_F"), modifier); // 출고정보
			companyDao.mergeUsrMenuAuth(MB_ID, "PDS.SALES", vo.get("PDS_SALES_F"), modifier); // 부가정보
			companyDao.mergeUsrMenuAuth(MB_ID, "ANALYSIS.MARKET", vo.get("ANL_MARKET_F"), modifier); // 카테고리 판매정보
		}
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
		
		if (TRPL_C_ARR == null || TRPL_C_ARR.length == 0) {
			throw new IllegalArgumentException("TRPL_C_ARR is empty.");
		}
		
		return companyDao.retrieveUsrMenuAuthList(TRPL_C_ARR, RDO_CHK, EDT_NM);
	}

	/**
	 * 전자계약 임시 거래처 등록
	 * 
	 * @return
	 */
	public int insertCompany(CompanyVO companyVO) {

		return companyDao.insertCompany(companyVO);
		
	}

	/**
	 * 거래처 정보 변경 신청
	 * @param vo	변경VO
	 * @return
	 */
	public void insertCompanyModReq(CompanyReqVO vo) {
		companyDao.insertCompanyModReq(vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정 신청내역 조회 Count
	 */
	public int retrieveCompanyModReqCount(Map<String, Object> param){
		try{
			return companyDao.retrieveCompanyModReqCount(param);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정 신청내역 조회
	 */
	public List<Map<String,Object>> retrieveCompanyModReq(Map<String, Object> param){
		try{
			return companyDao.retrieveCompanyModReq(param);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1402
	 * 화면설명 : 거래처수정 신청내역 취소 대상 조회
	 */
	public int retrieveCompanyModReqExist(CompanyReqVO vo){
		return companyDao.retrieveCompanyModReqExist(vo);
	}
	
	/**
	 * 거래처 정보 변경 신청 취소
	 * @param vo	변경VO
	 * @return
	 */
	public void insertCompanyDelReq(CompanyReqVO vo) {
		companyDao.insertCompanyDelReq(vo);
	}

	/*
	 * 화면ID : VAN_DS_SC_1401
	 * 화면설명 : 거래처정보수정 파일 저장
	 * 저장경로 : /NHVANDATA/real/cmpy/{GLN}(6자리)/{GLN}/mod
	 */
	public void fileReq(String NA_TRPL_C, String VAN_C_RQ_NO, DataSet in_upload, List<CompanyReqFile> list3) throws IOException {
		try {
			String srcDir = Configurer.getProperty("file.temp.path");
			String dstDir = Configurer.getProperty("file.real.cmpy.path");
			
			for (int i = 0; i < in_upload.getRowCount(); i++) {
//				int rowType = in_upload.getRowType(i);
//				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					FileUtil.moveFile(srcDir, dstDir + File.separator + NA_TRPL_C.substring(0, 6) + File.separator + NA_TRPL_C + File.separator + "mod", list3.get(i).getFILE_SYSTEM_NAME());

					list3.get(i).setVAN_C_RQ_NO(VAN_C_RQ_NO);
					companyDao.fileReqIn(list3.get(i));
//				}
			}
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}