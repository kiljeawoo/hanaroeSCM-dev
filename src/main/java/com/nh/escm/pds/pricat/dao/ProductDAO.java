package com.nh.escm.pds.pricat.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pricat.vo.ProductReqFile;
import com.nh.escm.pds.pricat.vo.ProductReqPrgrVO;
import com.nh.escm.pds.pricat.vo.ProductReqVO;
import com.nh.escm.pds.pricat.vo.ProductSearchVO;
import com.nh.escm.pds.pricat.vo.ProductTempFileVO;
import com.nh.escm.pds.pricat.vo.ProductTrtVO;
import com.nh.escm.pds.pricat.vo.ProductVO;
import com.nh.escm.pds.pricat.vo.TempOdTrtwrsInfoUploadFileVO;

public class ProductDAO extends AbstractDao{
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품조회
	 */
	public List<Map<String, Object>> searchOnWrsInfo(String na_wrs_c, String amarketPath){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C" , na_wrs_c   ); 		//상품코드
		map.put("FILE_PATH", amarketPath); 		//파일path
		return getSqlSession().selectList("productDAO.selectOnWrsInfo",map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품이미지조회
	 */
	public List<Map<String, Object>> searchOnWrsImg(String na_wrs_c){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", na_wrs_c); 		//상품코드
		return getSqlSession().selectList("productDAO.selectOnWrsImg",map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 고시기본조회
	 */
	public List<Map<String, Object>> searchGdWrsNtfy(){
		return getSqlSession().selectList("productDAO.selectGdWrsNtfy");
	}

	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 금칙어조회
	 */
	public List<Map<String, Object>> searchBanWord(){
		return getSqlSession().selectList("productDAO.selectBanWord");
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 온라인취급상품등록
	 */
	public int insertOnTrtWrs(String userId, String p1, String p2, String p3, String p4, String p5, String p6, String p7, Double p8, Double p9, String p10, String p11, String p12, String p13, String p14, String p15, String p16, String p17, String p18, String p19, String p20, String p21, String p22, String p23) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("USERID", userId);
		map.put("NA_WRS_C", p1); // 경제통합상품코드
		map.put("PDM_MFTCO", p2); // 생산자제조사
		map.put("WRS_STD", p3); // 상품규격
		map.put("ORGPL_NATCD", p4); // 원산지국가코드
		map.put("PD_RGN", p5); // 생산지역
		map.put("AGLVPD_MFCPD_YN", p6); // 농축산물가공품여부
		map.put("MTR_AGLVPD_ORG_ORGPL", p7); // 원료농축산물원산지
		map.put("TOT_CAP", p8); // 총용량
		map.put("UNT_CAP", p9); // 단위용량
		map.put("WRS_UNT_C", p10); // 상품단위코드
		map.put("ADLT_ATTC_REQUIRED_YN", p11); // 성인인증필수여부
		map.put("IMG_EXPL_FL_NM", p12); // 상품상세설명파일
		map.put("IMG_FL0_NM", p13); // 대표이미지
		map.put("IMG_FL1_NM", p14); // 추가이미지1명
		map.put("IMG_FL2_NM", p15); // 추가이미지2명
		map.put("IMG_FL3_NM", p16); // 추가이미지3명
		map.put("CLNTNM", p17); // 업체명
		map.put("BIZ_NUMBER", p18); // 사업자번호
		map.put("IMG_DTL1_NM", p19); // 나모상세이미지1
		map.put("IMG_DTL2_NM", p20); // 나모상세이미지2
		map.put("IMG_DTL3_NM", p21); // 나모상세이미지3
		map.put("IMG_DTL4_NM", p22); // 나모상세이미지4
		map.put("IMG_DTL5_NM", p23); // 나모상세이미지5

		return getSqlSession().insert("productDAO.insertOnTrtWrs", map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 온라인상품고시항목상세등록 전 데이터 삭제(delete)
	 */
	public int deleteOnNtfyHdng(String p1) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", p1); // 경제통합상품코드
		return getSqlSession().update("productDAO.deleteOnNtfyHdng", map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 온라인상품고시항목상세등록
	 */
	public int insertOnNtfyHdng(String p1, String p2, String p3, String p4) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", p1); // 경제통합상품코드
		map.put("WRS_NTFY_C", p2); // 상품고시코드
		map.put("WRS_NTFY_HDNG_C", p3); // 상품고시항목코드
		map.put("WRS_NTFY_HDNG_CNTN", p4); // 상품고시항목내용
		return getSqlSession().insert("productDAO.insertOnNtfyHdng", map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 상품고시항목조회
	 */
	public List<Map<String, Object>> searchGdWrsNtfyDtl(String na_wrs_c, String wrs_ntfy_c, String van_c_rq_no) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", na_wrs_c); // 상품고시코드
		map.put("WRS_NTFY_C", wrs_ntfy_c); // 상품고시코드
		map.put("VAN_C_RQ_NO", van_c_rq_no);
		return getSqlSession().selectList("productDAO.selectOnGdWrsNtfyDtl", map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1590 화면설명 : 공통코드조회(aMarket 과세구분, 국가코드, 상품표시단위)
	 */
	public List<Map<String, Object>> searchCommCode1590(String c_tp_c) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("C_TP_C", c_tp_c); // 상품고시코드
		return getSqlSession().selectList("productDAO.selectCommCode1590", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 페이징
	 */
	public int selectWRSCount(String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr,String TRPL_C){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", storesch); // 상품코드
		map.put("WRS_C_DSC", arr_c_dsc); // 상품코드구분코드
		map.put("NA_WRS_LCLC", wrs_lclc); // 경제통합상품대분류코드
		map.put("NA_WRS_MCLC", wrs_mclc); // 경제통합상품중분류코드
		map.put("NA_WRS_SCLC", wrs_sclc); // 경제통합상품소분류코드
		map.put("NA_WRS_DTCF_C", wrs_dtcf_c); // 경제통합상품세분류코드
		map.put("CSER_CTR_TPC", cser_ctr); // 계약유형
		map.put("WRS_DSC", wrs_dsc); // 상품구분코드
		map.put("FROM_DATE", fsrg_from); // 등록일 시작
		map.put("TO_DATE", fsrg_to); // 등록일 끝
		map.put("FROM_DATE2", lschg_from); // 등록일 시작
		map.put("TO_DATE2", lschg_to); // 등록일 끝
		map.put("TRPL_C", TRPL_C);
		map.put("MNGT_C", mngt_c); // 사업장코드
		return getSqlSession().selectOne("productDAO.selectWRSCount", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회
	 */
	public List<ProductVO> selectWRS(String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr,String TRPL_C,int start,int end){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", storesch); // 상품코드
		map.put("WRS_C_DSC", arr_c_dsc); // 상품코드구분코드
		map.put("NA_WRS_LCLC", wrs_lclc); // 경제통합상품대분류코드
		map.put("NA_WRS_MCLC", wrs_mclc); // 경제통합상품중분류코드
		map.put("NA_WRS_SCLC", wrs_sclc); // 경제통합상품소분류코드
		map.put("NA_WRS_DTCF_C", wrs_dtcf_c); // 경제통합상품세분류코드
		map.put("CSER_CTR_TPC", cser_ctr); // 계약유형
		map.put("WRS_DSC", wrs_dsc); // 상품구분코드
		map.put("FROM_DATE", fsrg_from); // 등록일 시작
		map.put("TO_DATE", fsrg_to); // 등록일 끝
		map.put("FROM_DATE2", lschg_from); // 등록일 시작
		map.put("TO_DATE2", lschg_to); // 등록일 끝
		map.put("MNGT_C", mngt_c); // 사업장코드
		map.put("TRPL_C", TRPL_C);
		map.put("start", start); // 페이지 시작
		map.put("end", end); // 페이지 끝
		return getSqlSession().selectList("productDAO.selectWrs", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 화면출력
	 */
	public List<ProductVO> selectWRSprint(String TRPL_C,String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C);
		map.put("NA_WRS_C", storesch); // 상품코드
		map.put("WRS_C_DSC", arr_c_dsc); // 상품코드구분코드
		map.put("NA_WRS_LCLC", wrs_lclc); // 경제통합상품대분류코드
		map.put("NA_WRS_MCLC", wrs_mclc); // 경제통합상품중분류코드
		map.put("NA_WRS_SCLC", wrs_sclc); // 경제통합상품소분류코드
		map.put("NA_WRS_DTCF_C", wrs_dtcf_c); // 경제통합상품세분류코드
		map.put("CSER_CTR_TPC", cser_ctr); // 계약유형
		map.put("WRS_DSC", wrs_dsc); // 상품구분코드
		map.put("FROM_DATE", fsrg_from); // 등록일 시작
		map.put("TO_DATE", fsrg_to); // 등록일 끝
		map.put("FROM_DATE2", lschg_from); // 등록일 시작
		map.put("TO_DATE2", lschg_to); // 등록일 끝
		map.put("MNGT_C", mngt_c); // 사업장코드
		return getSqlSession().selectList("productDAO.selectWRSprint", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 엑셀
	 */
	public void downloadExcelPricatStandards(String TRPL_C,String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr,ExcelFileMakerResultHandler handler){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C);
		map.put("NA_WRS_C", storesch); // 상품코드
		map.put("WRS_C_DSC", arr_c_dsc); // 상품코드구분코드
		map.put("NA_WRS_LCLC", wrs_lclc); // 경제통합상품대분류코드
		map.put("NA_WRS_MCLC", wrs_mclc); // 경제통합상품중분류코드
		map.put("NA_WRS_SCLC", wrs_sclc); // 경제통합상품소분류코드
		map.put("NA_WRS_DTCF_C", wrs_dtcf_c); // 경제통합상품세분류코드
		map.put("CSER_CTR_TPC", cser_ctr); // 계약유형
		map.put("WRS_DSC", wrs_dsc); // 상품구분코드
		map.put("FROM_DATE", fsrg_from); // 등록일 시작
		map.put("TO_DATE", fsrg_to); // 등록일 끝
		map.put("FROM_DATE2", lschg_from); // 등록일 시작
		map.put("TO_DATE2", lschg_to); // 등록일 끝
		map.put("MNGT_C", mngt_c); // 사업장코드
		getSqlSession().select("productDAO.downloadExcelPricatStandards", map, handler);
	}
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회 거래관계 조회
	 */
	public List<Map<String, Object>> searchTrnrel(String bzplc_code, String bzplc_team, String TRPL_C) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("bzplc_code", bzplc_code);
		map.put("bzplc_team", bzplc_team);
		map.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("productDAO.searchTrnrel", map);
	}
	
	/*
	 * 
	 */
	public List<Map<String, Object>> searchCIF(String TRPL_C) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("productDAO.searchCIF", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품기준정보조회 페이징 count
	 */
	public int selectTRTCount(String sto_code, String datesel, String bzplc_code, String bzplc_team, String fromdate, String todate, String ctr_tpc, String[] TRPL_C_ARR) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", sto_code); // 상품코드
		map.put("DATE_SEL", datesel); // 일자구분 선택코드
		map.put("NA_BZPLC", bzplc_code); // 수요처코드
		map.put("NA_BZPLC_TEAM", bzplc_team); // 수요처팀코드
		map.put("FROM_DATE", fromdate); // 시작일
		map.put("TO_DATE", todate); // 종료일
		map.put("TRPL_C", TRPL_C_ARR); // 사업장코드
		map.put("CTR_TPC", ctr_tpc);
		return getSqlSession().selectOne("productDAO.selectTRTCount", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품기준정보조회
	 */
	public List<ProductTrtVO> selectTRT(String sto_code,String datesel,String bzplc_code,String bzplc_team,String fromdate,String todate,String ctr_tpc,String[] TRPL_C_ARR
			,int start,int end){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("NA_WRS_C", sto_code); 			//상품코드
		map.put("DATE_SEL", datesel);			//일자구분 선택코드
		map.put("NA_BZPLC", bzplc_code); 		//수요처코드
		map.put("NA_BZPLC_TEAM", bzplc_team); 	//수요처팀코드
		map.put("FROM_DATE",fromdate); 			//시작일
		map.put("TO_DATE",todate); 				//종료일
		map.put("TRPL_C",TRPL_C_ARR); 			//사업장코드
		map.put("CTR_TPC", ctr_tpc);
		map.put("start",start);
		map.put("end",end);
		return getSqlSession().selectList("productDAO.selectTrtwrs",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품기준정보조회 출력화면
	 */
	public List<ProductTrtVO> selectTRTprint(String sto_code,String datesel,String bzplc_code,String bzplc_team,String fromdate,String todate,String ctr_tp,String[] TRPL_C_ARR,
			int limit){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("NA_WRS_C", sto_code); 			//상품코드
		map.put("DATE_SEL", datesel);			//일자구분 선택코드
		map.put("NA_BZPLC", bzplc_code); 		//수요처코드
		map.put("NA_BZPLC_TEAM", bzplc_team); 	//수요처팀코드
		map.put("FROM_DATE",fromdate); 			//시작일
		map.put("TO_DATE",todate); 				//종료일
		map.put("CTR_TPC", ctr_tp);				//계약유형코드
		map.put("TRPL_C",TRPL_C_ARR); 			//사업장코드
		map.put("start", 1);
		map.put("end", limit);
		return getSqlSession().selectList("productDAO.selectTRTprint",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품기준정보조회
	 * 엑셀다운로드
	 */
	public void downloadExcelPricatDetails(String sto_code,String datesel,String bzplc_code,String bzplc_team,String fromdate,String todate,String ctr_tpc,String[] TRPL_C_ARR,
			int limit, ExcelFileMakerResultHandler handler){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("NA_WRS_C", sto_code); 			//상품코드
		map.put("DATE_SEL", datesel);			//일자구분 선택코드
		map.put("NA_BZPLC", bzplc_code); 		//수요처코드
		map.put("NA_BZPLC_TEAM", bzplc_team); 	//수요처팀코드
		map.put("FROM_DATE",fromdate); 			//시작일
		map.put("TO_DATE",todate); 				//종료일
		map.put("CTR_TPC", ctr_tpc);			//계약유형코드
		map.put("TRPL_C",TRPL_C_ARR); 			//사업장코드
		map.put("start", 1);
		map.put("end", limit);
		getSqlSession().select("productDAO.downloadExcelPricatDetails",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1592
	 * 화면설명 : 온라인 취급상품 조회 페이징 count
	 */
	public int selectOnLineModyCount(Map<String, Object> param) {
		return getSqlSession().selectOne("productDAO.selectOnLineModyCount", param);
	}

	/*
	 * 화면ID : VAN_DS_SC_1592
	 * 화면설명 : 온라인 취급상품 조회
	 */
	public List<Map<String, Object>> selectOnLineMody(Map<String, Object> param) {
		return getSqlSession().selectList("productDAO.selectOnLineMody", param);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 분류코드에 따른 2차 상품 상세정보 
	 */
	public List<Map<String,Object>> retrieveCLCGoods(String clc_gubun,String wrs_dsc){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("clc_gubun", clc_gubun);
		map.put("clc_dsc", wrs_dsc);
		return getSqlSession().selectList("productDAO.selectCLC",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 조회 (상품코드 유무 조회)
	 */
	public int wrsCheck(String wrs_c){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("WRS_C", wrs_c);
		return getSqlSession().selectOne("productDAO.wrsCheck",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 조회 (상품기본 조회)
	 */
	public List<Map<String, Object>> selectGD(String GLN, String NA_WRS_C){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("GLN", GLN);
		map.put("NA_WRS_C", NA_WRS_C);
		
		return getSqlSession().selectList("productDAO.selectGD",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 조회 (상품R1 조회)
	 */
	public List<Map<String, Object>> selectLG(String van_c_rq_no){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("VAN_C_RQ_NO", van_c_rq_no);
		
		return getSqlSession().selectList("productDAO.selectLG",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 (상품등록신청내역 조회)
	 */
	public List<ProductReqVO> selectREQ(String VAN_C_NO){
		return getSqlSession().selectList("productDAO.selectReq",VAN_C_NO);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 (입력정보)
	 */
	public List<ProductReqPrgrVO> selectGridREQ(String VAN_C_NO){
		return getSqlSession().selectList("productDAO.selectGridReq",VAN_C_NO);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 이미지 파일
	 */
	public List<Map<String,Object>> selectfileREQ(String VAN_C_NO){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("VAN_C_NO", VAN_C_NO);
		return getSqlSession().selectList("productDAO.selectfileREQ",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 추가정보 조회
	 */
	public List<Map<String,Object>> selectAddREQ(String VAN_C_NO){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("VAN_C_NO", VAN_C_NO);
		return getSqlSession().selectList("productDAO.selectAddREQ",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 추가 (상품공통정보)
	 */
	public Integer insertREQ(ProductReqVO vo,String temp_yn){
		vo.setNA_C_RQ_NO(vo.getVAN_C_RQ_NO());	// VAN상품요청번호와 코드신청번호를 같게 한다.
		vo.setNA_C_RQ_OBJ_DSC("6"); 			// 2차상품코드 (6)
		vo.setWRS_C_DSC("1");					// 상품코드구분코드 (삭제로 인하여 고정값으로 변경)
		vo.setNA_WRS_BRAN_C("000000");			// 브랜드 코드 입력 삭제로 인하여...
		if(temp_yn.equals("1")){// 경통전송
			vo.setPRC_YN("T");
		}else{
			vo.setPRC_YN("N");
		}
		return getSqlSession().insert("productDAO.insertReq",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 추가 (상품공통정보)
	 */
	public Integer insertINPD(ProductReqVO vo){
		return getSqlSession().insert("productDAO.insertINPD",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 추가 (2차 상품정보)
	 */
	public Integer insertREQ_sub(ProductReqVO vo){
		return getSqlSession().insert("productDAO.insertReq_sub",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 추가 (그리드 입력 정보)
	 */
	public Integer insertREQ_th(ProductReqPrgrVO vo){
		int aa = Integer.parseInt(vo.getAMN_FEERT())+Integer.parseInt(vo.getTROT_FEERT());
		vo.setCOMP_FEERT(String.valueOf(aa));
		vo.setNA_TEAM_C("00");
		return getSqlSession().insert("productDAO.insertReq_th",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청변경 (상품공통정보)
	 */
	public Integer updateREQ(ProductReqVO vo){
		vo.setNA_C_RQ_NO(vo.getVAN_C_RQ_NO());	// VAN상품요청번호와 코드신청번호를 같게 한다.
		vo.setNA_C_RQ_OBJ_DSC("6"); 			// 2차상품코드 (6)
		vo.setWRS_C_DSC("1");					// 상품코드구분코드 (삭제로 인하여 고정값으로 변경)
		vo.setNA_WRS_BRAN_C("000000");			// 브랜드 코드 입력 삭제로 인하여...
		vo.setPRC_YN("N");
		return getSqlSession().insert("productDAO.updateReq",vo);
	}
	
	public Integer updateINPD(ProductReqVO vo){
		return getSqlSession().insert("productDAO.updateINPD",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청변경 (2차 상품정보)
	 */
	public Integer updateREQ_sub(ProductReqVO vo){
		return getSqlSession().insert("productDAO.updateReq_sub",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청변경 (그리드 입력 정보)
	 */
	public Integer updateREQ_th(ProductReqPrgrVO vo){
		return getSqlSession().insert("productDAO.updateReq_th",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 삭제 (그리드 입력 정보)
	 */
	public Integer deleteREQ_th(String VAN_C_RQ_NO,String orgrname,String NA_BZPLC){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("VAN_C_RQ_NO", VAN_C_RQ_NO); 	//상품코드
		map.put("ORGNAME", orgrname); 			//상품코드
		map.put("NA_BZPLC", NA_BZPLC);
		return getSqlSession().delete("productDAO.deleteREQ_th",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 이미지등록 
	 */
	public int fileReqIn(ProductReqFile vo){
		return getSqlSession().insert("productDAO.fileReqIn",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1541
	 * 화면설명 : 신규상품 요청등록 조회 (팝업)
	 */
	public List<Map<String,Object>> newGoodsPopUp(String na_wrs_radio,String start_date,String end_date,String na_wrs_c,String[] TRPL_C_ARR,String gubun){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_RADIO", na_wrs_radio);
		map.put("SDATE", start_date);
		map.put("EDATE", end_date);
		map.put("NA_WRS_C", na_wrs_c);
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("GUBUN", gubun);
		return getSqlSession().selectList("productDAO.newGoodsPopUp",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1542
	 * 화면설명 : 신규상품 요청등록 거래처조회 (팝업)
	 */
	public List<Map<String,Object>> newGoodsTrplPopUp(String combo_trpl,String edt_trpl){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("cOMBO_TR", combo_trpl);
		map.put("searChText", edt_trpl);
		return getSqlSession().selectList("productDAO.newGoodsTrplPopUp",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1550
	 * 화면설명 : 신규상품요청 일괄작성 저장
	 */
	public int insertUploadBatchNewGoods(ProductTempFileVO vo){
		return getSqlSession().insert("productDAO.insertTempFile", vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품 등록내역 조회 페이징
	 */
	public int selectNewGoodsCount(String store_code,String store_radio,String center_code,String start_day,String end_day,String[] TRPL_C_ARR,String gubun){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", store_code);		// 상품코드 조회(input)
		map.put("NA_WRS_RADIO", store_radio);	// 상품코드 조회(radio 버튼)
		System.out.println(store_radio);
		map.put("center_code", center_code);	// 물류센터코드
		map.put("start_date", start_day);		// 적용일자 시작
		map.put("end_date", end_day);			// 적용일자 끝
		map.put("TRPL_C", TRPL_C_ARR);			// 사업장코드
		map.put("GUBUN", gubun);
		return getSqlSession().selectOne("productDAO.selectNewGoodsCount",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품 등록내역 조회
	 */
	public List<ProductReqVO> selectNewGoods(String store_code,String store_radio,String center_code,String start_day,String end_day,String[] TRPL_C_ARR,String gubun
			,int start,int end){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", store_code);		// 상품코드 조회(input)
		map.put("NA_WRS_RADIO", store_radio);	// 상품코드 조회(radio 버튼)
		map.put("center_code", center_code);	// 물류센터코드
		map.put("start_date", start_day);		// 적용일자 시작
		map.put("end_date", end_day);			// 적용일자 끝
		map.put("TRPL_C", TRPL_C_ARR);			// 사업장코드
		map.put("GUBUN", gubun);				// 참조구분코드
		map.put("start", start);				
		map.put("end", end);				
		return getSqlSession().selectList("productDAO.selectNewGoods", map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품 등록내역 조회 (디테일)
	 */
	public List<ProductSearchVO> selectDetailNewGoods(String VAN_C,String RQ_TRPL,String gubun){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("VAN_C_RQ_NO", VAN_C);
		map.put("RQ_TRPL", RQ_TRPL);
		map.put("GUBUN", gubun);
		return getSqlSession().selectList("productDAO.selectDetailNewGoods", map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품 등록내역 조회 (마스터 엑셀)
	 */
	public void excelNewGoods(String store_code,String store_radio,String center_code,String start_day,String end_day,String[] TRPL_C_ARR,String gubun,ExcelFileMakerResultHandler handler){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", store_code);		// 상품코드 조회(input)
		map.put("NA_WRS_RADIO", store_radio);	// 상품코드 조회(radio 버튼)
		map.put("center_code", center_code);	// 물류센터코드
		map.put("start_date", start_day);		// 적용일자 시작
		map.put("end_date", end_day);			// 적용일자 끝
		map.put("TRPL_C", TRPL_C_ARR);			// 사업장코드
		map.put("GUBUN", gubun);				// VAN상품요청번호
		getSqlSession().select("productDAO.excelNewGoods",map,handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품 등록내역 조회 (디테일 엑셀)
	 */
	public void excelDetailNewGoods(String VAN_C,String RQ_TRPL,String gubun,ExcelFileMakerResultHandler handler){
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("VAN_C_RQ_NO", VAN_C);
		map.put("RQ_TRPL", RQ_TRPL);
		map.put("GUBUN", gubun);
		getSqlSession().select("productDAO.excelDetailNewGoods",map,handler);
	}

	/*
	 * 화면ID : VAN_DS_SC_1591
	 * 화면설명 : 상품별물류기능정보조회
	 */
	public List<Map<String, Object>>  selectGoodWhList(String nA_BZPLC, String nA_WRS_C, String wRSNM, String tRPL_C, String aTL_YN, String bOX_WRS_C_YN, String sVS_YN, String dEL_YN) {
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC", nA_BZPLC); 			 //상품코드
		map.put("NA_WRS_C", nA_WRS_C);		     //상품코드구분코드
		map.put("WRSNM", wRSNM);		         // 
		map.put("TRPL_C",tRPL_C);		         // 
		map.put("ATL_YN", aTL_YN);		         // 경제통합상품중분류코드
		map.put("BOX_WRS_C_YN", bOX_WRS_C_YN);	 // 박스상품코드여부
		map.put("SVS_YN", sVS_YN);		         // 소분여부
		map.put("DEL_YN", dEL_YN);		         // 삭제여부

		return getSqlSession().selectList("productDAO.selectGoodWhList",map);

	}
	
	public int  selectGoodWhListCount(String nA_BZPLC, String nA_WRS_C, String wRSNM, String tRPL_C ) {
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC", nA_BZPLC); 			//상품코드
		map.put("nA_WRS_C", nA_WRS_C);		//상품코드구분코드
		map.put("wRSNM", wRSNM);		//경제통합상품대분류코드
		map.put("tRPL_C_ARR", tRPL_C);		//경제통합상품중분류코드

		return getSqlSession().selectOne("productDAO.selectGoodWhListCount",map);

	}

	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록 (엑셀다운로드)
	 */
	public void downloadExcelTempOdTrtwrsInfo(String NA_BZPLC, ExcelFileMakerResultHandler handler) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC", NA_BZPLC);		

		getSqlSession().select("productDAO.downloadExcelTempOdTrtwrsInfo",map, handler);
	}

	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록 (엑셀업로드)
	 */
	public int insertTempOdTrtwrsInfo(TempOdTrtwrsInfoUploadFileVO vo) {
		return getSqlSession().insert("productDAO.insertTempOdTrtwrsInfo", vo);
	}

	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록
	 */
	public int deleteTempOdTrtwrsInfo(String NA_BZPLC) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC", NA_BZPLC);		//GLN코드
		
		return getSqlSession().delete("productDAO.deleteTempOdTrtwrsInfo", map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록 
	 */
	public List<Map<String, Object>> selectTempOdTrtwrsList(String NA_BZPLC) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC", NA_BZPLC);

		return getSqlSession().selectList("productDAO.selectTempOdTrtwrsList",map);
	}

	/*
	 * 화면ID : VAN_DS_SC_1513
	 * 화면설명 : 필수상품속성정보조회
	 */
	public List<Map<String, Object>> selectMDTempOdTrtwrsList(String na_trpl_c, String md_nm) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String MD_NM = null;
		String SPYPL_NA_TRPL_C = null;
		
		if(md_nm != null && md_nm.length() > 0)
		{
			MD_NM = md_nm;
		}
		if(na_trpl_c != null && na_trpl_c.length() > 0)
		{
			SPYPL_NA_TRPL_C = na_trpl_c;
		}
		
		param.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		param.put("MD_NM", MD_NM);
		
		return getSqlSession().selectList("productDAO.selectMDTempOdTrtwrsList", param);
	}

	/*
	 * 화면ID : VAN_DS_SC_1513
	 * 화면설명 : 필수상품속성정보조회(합계)
	 */
	public long getNaWrsCntSum(String na_trpl_c, String md_nm) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String MD_NM = null;
		String SPYPL_NA_TRPL_C = null;
		
		if(md_nm != null && md_nm.length() > 0)
		{
			MD_NM = md_nm;
		}
		if(na_trpl_c != null && na_trpl_c.length() > 0)
		{
			SPYPL_NA_TRPL_C = na_trpl_c;
		}
		
		param.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		param.put("MD_NM", MD_NM);
		
		return getSqlSession().selectOne("productDAO.getNaWrsCntSum", param);
	}

	/*
	 * 화면ID : VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리
	 */
	public List<Map<String, Object>> selectMDMngTempOdTrtwrsList(String na_trpl_c, String md_nm) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String MD_NM = null;
		String SPYPL_NA_TRPL_C = null;
		
		if(md_nm != null && md_nm.length() > 0)
		{
			MD_NM = md_nm;
		}
		if(na_trpl_c != null && na_trpl_c.length() > 0)
		{
			SPYPL_NA_TRPL_C = na_trpl_c;
		}
		
		param.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		param.put("MD_NM", MD_NM);
		
		return getSqlSession().selectList("productDAO.selectMDMngTempOdTrtwrsList", param);
	}

	/*
	 * VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(엑셀다운로드)
	 */
	public void downloadExcelMDMngTempOdTrtwrsList(String na_trpl_c, String md_nm, ExcelFileMakerResultHandler handler) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		String MD_NM = null;
		String SPYPL_NA_TRPL_C = null;
		
		if(md_nm != null && md_nm.length() > 0)
		{
			MD_NM = md_nm;
		}
		if(na_trpl_c != null && na_trpl_c.length() > 0)
		{
			SPYPL_NA_TRPL_C = na_trpl_c;
		}
		
		param.put("SPYPL_NA_TRPL_C", SPYPL_NA_TRPL_C);
		param.put("MD_NM", MD_NM);
		
		getSqlSession().select("productDAO.downloadExcelMDMngTempOdTrtwrsList", param, handler);
	}

	/*
	 * VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(엑셀업로드)
	 */
	public int updateMDMngTempOdTrtwrsInfo(TempOdTrtwrsInfoUploadFileVO vo) {
		return getSqlSession().update("productDAO.updateMDMngTempOdTrtwrsInfo", vo);
	}

	/*
	 * 코리안넷 상품 조회
	 */
	public Map<String, Object> selectKornetProduct(String gln, String wrsc){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("GLN", gln);
		map.put("NA_WRS_C", wrsc);
		return getSqlSession().selectOne("productDAO.selectKornetProduct",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1543
	 * 화면설명 : 신규상품 요청등록 추가 (코리안넷)
	 */
	public Integer insertKornetREQ(ProductReqVO vo, String rdo_sep, String temp_yn) {
	// vo.setNA_C_RQ_NO(vo.getVAN_C_RQ_NO()); // VAN상품요청번호와 코드신청번호를 같게 한다.
		if ("1".equals(vo.getWRS_DSC())) {
			vo.setNA_C_RQ_OBJ_DSC("5");			// 1차상품 (5)
		} else if ("2".equals(vo.getWRS_DSC())) {
			vo.setNA_C_RQ_OBJ_DSC("6");			// 2차상품코드 (6)
		}
//		vo.setWRS_C_DSC("1");					// 상품코드구분코드 (삭제로 인하여 고정값으로 변경)
		vo.setNA_WRS_BRAN_C("000000"); // 브랜드 코드 입력 삭제로 인하여...
		if (temp_yn.equals("1")) {					// 경통전송
			vo.setPRC_YN("T");
		} else {
			vo.setPRC_YN("N"); // N으로 하면 어디선가 자동적으로 E로 바꾸어 버리므로 P로 설정
		}
		
		return getSqlSession().insert("productDAO.insertReqByKornet", vo);
		
		
		/*
		if (rdo_sep.equals("2")) {
			return getSqlSession().insert("productDAO.insertModReqByKornet", vo);
		} else {
			return getSqlSession().insert("productDAO.insertReqByKornet", vo);
		}
		*/
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561
	 * 화면설명 : 신규상품 등록내역 조회 페이징 (코리안넷)
	 */
	public int selectNewGoodsByKornetCount(Map<String, Object> param){
		return getSqlSession().selectOne("productDAO.selectNewGoodsByKornetCount", param);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561
	 * 화면설명 : 신규상품 등록내역 조회 (코리안넷)
	 */
	public List<Map<String, Object>> selectNewGoodsByKornet(Map<String, Object> param){
		return getSqlSession().selectList("productDAO.selectNewGoodsByKornet", param);
	}

	/*
	 * 화면ID : VAN_DS_SC_1561
	 * 화면설명 : 신규상품 등록내역 첨부파일 조회 (코리안넷)
	 */
	public List<Map<String, Object>> selectNewGoodsAtchByKornet(Map<String, Object> param){
		return getSqlSession().selectList("productDAO.selectNewGoodsAtchByKornet", param);
	}

	/*
	 * 화면ID : VAN_DS_SC_1543
	 * 화면설명 : 신규상품 신청내역 조회
	 */
	public List<Map<String, Object>> retrieveWrsReqExist(Map<String, Object> param){
		return getSqlSession().selectList("productDAO.retrieveWRSReqExist", param);
	}

	/*
	 * 화면ID : VAN_DS_SC_1561
	 * 화면설명 : 신규상품 등록내역 신청내역 취소 대상 조회
	 */
	public int retrieveWrsModReqExist(ProductReqVO vo){
		return getSqlSession().selectOne("productDAO.retrieveWRSModReqExist",vo);
	}
	
	/**
	 * 신규상품 등록내역 신청 취소
	 * @param vo	변경VO
	 * @return
	 */
	public void insertWrsDelReq(ProductReqVO vo) {
		getSqlSession().insert("productDAO.insertWRSDelReq", vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561
	 * 화면설명 : 신규상품 등록내역 조회 (엑셀)
	 */
	public void excelNewGoodsKornet(Map<String, Object> param, ExcelFileMakerResultHandler handler){
		getSqlSession().select("productDAO.excelNewGoodsKornet",param,handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 신규상품 등록내역 상세 조회
	 */
	public List<Map<String, Object>> retrieveNewGoodsDetailByKornet(ProductReqVO vo) {
		//if ("I".equals(vo.getCUD_DSC())) {
			return getSqlSession().selectList("productDAO.retrieveNewGoodsDetailByKornet", vo);
		//} else {
		//	return getSqlSession().selectList("productDAO.retrieveModGoodsDetailByKornet", vo);
		//}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 상품고시정보 품목
	 */
	public List<Map<String, Object>> retrieveNewGoodsOnlNtfy(ProductReqVO vo) {
		return getSqlSession().selectList("productDAO.retrieveNewGoodsOnlNtfy", vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 상품고시정보 품목
	 */
	public List<Map<String, Object>> retrieveNewGoodsOnlNtfyD(ProductReqVO vo) {
		return getSqlSession().selectList("productDAO.retrieveNewGoodsOnlNtfyD", vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 신규상품 등록내역 상세 조회 (수정상품 기존 정보)
	 */
	public List<Map<String, Object>> retrieveModGoodsDetailOrg(ProductReqVO vo) {
		return getSqlSession().selectList("productDAO.retrieveModGoodsDetailOrg", vo);
	}
	
	/*
	 * 화면ID : POPUP_SRC_PDAA
	 * 화면설명 : 산지코드 조회
	 */
	public List<Map<String, Object>> retrieveNaWrsPdaaC(String mode, String text) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("searchMode", mode);
		param.put("searchText", text);
		
		return getSqlSession().selectList("productDAO.retrieveNaWrsPdaaC", param);
	}

	public void downloadExcelGoodWhList(String nA_BZPLC, String nA_WRS_C, String wRSNM, String tRPL_C, String aTL_YN, String bOX_WRS_C_YN, String sVS_YN, String dEL_YN, ExcelFileMakerResultHandler handler) {
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NA_BZPLC", nA_BZPLC); 			 //상품코드
		map.put("NA_WRS_C", nA_WRS_C);		     //상품코드구분코드
		map.put("WRSNM", wRSNM);		         // 
		map.put("TRPL_C",tRPL_C);		         // 
		map.put("ATL_YN", aTL_YN);		         // 경제통합상품중분류코드
		map.put("BOX_WRS_C_YN", bOX_WRS_C_YN);	 // 박스상품코드여부
		map.put("SVS_YN", sVS_YN);		         // 소분여부
		map.put("DEL_YN", dEL_YN);		         // 삭제여부

		getSqlSession().select("productDAO.downloadExcelGoodWhList",map,handler);
	}
	
	public int insertOnNtfyHdng(String p1, String p2, String p3, String p4, String p5) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("VAN_C_RQ_NO", p1); 
		map.put("NA_WRS_C", p2); 
		map.put("WRS_NTFY_C", p3);
		map.put("WRS_NTFY_HDNG_C", p4);
		map.put("WRS_NTFY_HDNG_CNTN", p5);
		return getSqlSession().insert("productDAO.insertOnNtfyHdng", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 최근 신규상품 요청등록 조회 (상품기본 조회)
	 */
	public List<Map<String, Object>> select_recent_inserting_from_TB_GD_WRS_RG_REQ(String GLN, String NA_WRS_C){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("GLN", GLN);
		map.put("NA_WRS_C", NA_WRS_C);
		
		return getSqlSession().selectList("productDAO.select_recent_inserting_from_TB_GD_WRS_RG_REQ",map);
	}

	public boolean check_standard_or_not (String NA_WRS_C){
//		boolean result = Integer.parseInt(map.get("digit").toString())>-1 ? true:false;
		System.out.println("여기 check_standard_or_not 쿼리 날리려고요");
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("NA_WRS_C", NA_WRS_C);
		System.out.println(map.get("NA_WRS_C").toString());
		List<Map<String,Object>> check_result = getSqlSession().selectList("productDAO.check_standard_or_not",map);
		System.out.println(check_result.get(0).get("VERFDSC"));
		System.out.println(check_result.get(0).get("VERFBRK"));
		System.out.println(check_result.get(0).get("VERFDSC").toString().equals("00") ? true : false);
		return check_result.get(0).get("VERFDSC").toString().equals("00") ? true : false ;
	}

	public void insert_html_file_info(Map<String,Object>html_param){
		getSqlSession().insert("productDAO.insert_html_file_info",html_param);
	}
}
