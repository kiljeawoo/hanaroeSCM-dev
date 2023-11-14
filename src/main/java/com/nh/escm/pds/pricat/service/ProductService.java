package com.nh.escm.pds.pricat.service;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.pds.pricat.dao.ProductDAO;
import com.nh.escm.pds.pricat.vo.ProductReqFile;
import com.nh.escm.pds.pricat.vo.ProductReqPrgrVO;
import com.nh.escm.pds.pricat.vo.ProductReqVO;
import com.nh.escm.pds.pricat.vo.ProductSearchVO;
import com.nh.escm.pds.pricat.vo.ProductTempFileVO;
import com.nh.escm.pds.pricat.vo.ProductTrtVO;
import com.nh.escm.pds.pricat.vo.ProductVO;
import com.nh.escm.pds.pricat.vo.TempOdTrtwrsInfoUploadFileVO;

public class ProductService {
	
	@Autowired
	private ProductDAO productDao;
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품조회
	 */
	public List<Map<String, Object>> searchOnWrsInfo(String na_wrs_c, String amarketPath){
		try {
			return productDao.searchOnWrsInfo(na_wrs_c, amarketPath);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품이미지조회
	 */
	public List<Map<String, Object>> searchOnWrsImg(String na_wrs_c){
		try {
			return productDao.searchOnWrsImg(na_wrs_c);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 고시기본조회
	 */
	public List<Map<String, Object>> searchGdWrsNtfy(){
		try {
			return productDao.searchGdWrsNtfy();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 금칙어조회
	 */
	public List<Map<String, Object>> searchBanWord(){
		try {
			return productDao.searchBanWord();
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 상품고시항목조회
	 */
	public List<Map<String, Object>> searchGdWrsNtfyDtl(String na_wrs_c, String wrs_ntfy_c, String van_c_rq_no){
		try {
			return productDao.searchGdWrsNtfyDtl(na_wrs_c, wrs_ntfy_c, van_c_rq_no);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 공통코드조회(aMarket 과세구분, 국가코드, 상품표시단위)
	 */
	public List<Map<String, Object>> searchCommCode1590(String c_tp_c){
		try {
			return productDao.searchCommCode1590(c_tp_c);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}//searchCommCode1590

	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 상품기본정보, 고시항목세부 등록
	 */
	public int insertOnWrsInfo(String userId, DataSet ds_trtwrs, DataSet ds_wrs_nfty_hdng, String clntnm, String bzno){
		try {
			int resultIU = 0;
			for (int i = 0; i < ds_trtwrs.getRowCount(); i++) {
				String p_na_wrs_c = ds_trtwrs.getString(i, "NA_WRS_C"); // p1. 경제통합상품코드
				String p_pdm_mftco = ds_trtwrs.getString(i, "PDM_MFTCO"); // p2. 생산자제조사
				String p_wrs_std = ds_trtwrs.getString(i, "WRS_STD"); // p3. 상품규격
				String p_orgpl_natcd = ds_trtwrs.getString(i, "ORGPL_NATCD"); // p4. 원산지국가코드
				String p_pd_rgn = ds_trtwrs.getString(i, "PD_RGN"); // p5. 생산지역
				String p_aglvpd_mfcpd_yn = ds_trtwrs.getString(i, "AGLVPD_MFCPD_YN"); // p6. 농축산물가공품여부
				String p_mtr_aglvpd_org_orgpl = ds_trtwrs.getString(i, "MTR_AGLVPD_ORG_ORGPL"); // p7. 원료농축산물원산지
				Double p_tot_cap = ds_trtwrs.getBigDecimal(i, "TOT_CAP").doubleValue(); // p8. 총용량
				Double p_unt_cap = ds_trtwrs.getBigDecimal(i, "UNT_CAP").doubleValue(); // p9. 단위용량
				String p_wrs_unt_c = ds_trtwrs.getString(i, "WRS_UNT_C"); // p10. 상품단위코드
				String p_adlt_attc_required_yn = ds_trtwrs.getString(i, "ADLT_ATTC_REQUIRED_YN"); // p11. 성인인증필수여부
				String p_img_expl_fl_nm = ds_trtwrs.getString(i, "IMG_EXPL_FL_NM"); // p12. 상품상세설명파일
				String p_img_fl0_nm = ds_trtwrs.getString(i, "IMG_FL0_NM"); // p13. 대표이미지명
				String p_img_fl1_nm = ds_trtwrs.getString(i, "IMG_FL1_NM"); // p14. 추가이미지1명
				String p_img_fl2_nm = ds_trtwrs.getString(i, "IMG_FL2_NM"); // p15. 추가이미지2명
				String p_img_fl3_nm = ds_trtwrs.getString(i, "IMG_FL3_NM"); // p16. 추가이미지3명
				String p_img_dtl1_nm = ds_trtwrs.getString(i, "IMG_DTL1_NM"); // p19. 추가이미지1명
				String p_img_dtl2_nm = ds_trtwrs.getString(i, "IMG_DTL2_NM"); // p20. 추가이미지2명
				String p_img_dtl3_nm = ds_trtwrs.getString(i, "IMG_DTL3_NM"); // p21. 추가이미지3명
				String p_img_dtl4_nm = ds_trtwrs.getString(i, "IMG_DTL4_NM"); // p22. 추가이미지4명
				String p_img_dtl5_nm = ds_trtwrs.getString(i, "IMG_DTL5_NM"); // p23. 추가이미지5명
				
				productDao.insertOnTrtWrs(userId, p_na_wrs_c, p_pdm_mftco, p_wrs_std, p_orgpl_natcd, p_pd_rgn,
						p_aglvpd_mfcpd_yn, p_mtr_aglvpd_org_orgpl, p_tot_cap, p_unt_cap, p_wrs_unt_c,
						p_adlt_attc_required_yn, p_img_expl_fl_nm, p_img_fl0_nm, p_img_fl1_nm, p_img_fl2_nm, p_img_fl3_nm,
						clntnm, bzno,
						p_img_dtl1_nm, p_img_dtl2_nm, p_img_dtl3_nm, p_img_dtl4_nm, p_img_dtl5_nm);
				resultIU++;
			}

			productDao.deleteOnNtfyHdng(ds_wrs_nfty_hdng.getString(0, "NA_WRS_C"));

			for (int j = 0; j < ds_wrs_nfty_hdng.getRowCount(); j++) {
				String p_na_wrs_c = ds_wrs_nfty_hdng.getString(j, "NA_WRS_C");
				String p_wrs_ntfy_c = ds_wrs_nfty_hdng.getString(j, "WRS_NTFY_C");
				String p_wrs_ntfy_hdng_c = ds_wrs_nfty_hdng.getString(j, "WRS_NTFY_HDNG_C");
				String p_wrs_ntfy_hdng_cntn = ds_wrs_nfty_hdng.getString(j, "WRS_NTFY_HDNG_CNTN");

				productDao.insertOnNtfyHdng(p_na_wrs_c, p_wrs_ntfy_c, p_wrs_ntfy_hdng_c, p_wrs_ntfy_hdng_cntn);
				resultIU++;
			}

			return resultIU;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 페이징
	 */
	public int selectWRSCount(String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr,String TRPL_C_ARR){
		try {
			return productDao.selectWRSCount(storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회
	 */
	public List<ProductVO> selectWRS(String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr,String TRPL_C_ARR,int start,int end){
		try{
			return productDao.selectWRS(storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr,TRPL_C_ARR,start,end);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 화면출력
	 */
	public List<ProductVO> selectWRSprint(String TRPL_C,String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr){
		try {
			return productDao.selectWRSprint(TRPL_C,storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 엑셀다운로드
	 * 
	 */
	public void downloadExcelPricatStandards(String TRPL_C,String storesch,String[] arr_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String mngt_c,String cser_ctr, ExcelFileMakerResultHandler handler){
		try {
			productDao.downloadExcelPricatStandards(TRPL_C,storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회 거래관계 조회
	 */
	public List<Map<String,Object>> searchTrnrel(String bzplc_code,String bzplc_team,String TRPL_C){
		try {
			return productDao.searchTrnrel(bzplc_code,bzplc_team,TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 
	 * 
	 */
	public List<Map<String,Object>> searchCIF(String TRPL_C){
		try {
			return productDao.searchCIF(TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회 페이징 count
	 */
	public int selectTRTCount(String sto_code,String datesel,String bzplc_code,String bzplc_team,String fromdate,String todate,String ctr_tpc,String[] TRPL_C_ARR){
		try {
			return productDao.selectTRTCount(sto_code,datesel,bzplc_code,bzplc_team,fromdate,todate,ctr_tpc,TRPL_C_ARR);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회
	 */
	public List<ProductTrtVO> selectTRT(String sto_code,String datesel,String bzplc_code,String bzplc_team,String fromdate,String todate,String ctr_tpc,String[] TRPL_C_ARR,
			int start,int end){
		try{
			return productDao.selectTRT(sto_code,datesel,bzplc_code,bzplc_team,fromdate,todate,ctr_tpc,TRPL_C_ARR,start,end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회 출력
	 * 
	 */
	public List<ProductTrtVO> selectTRTprint(String sto_code,String datesel,String bzplc_code,String bzplc_team,String fromdate,String todate,String ctr_tp,String[] TRPL_C_ARR,
			int limit){
		try {
			return productDao.selectTRTprint(sto_code,datesel,bzplc_code,bzplc_team,fromdate,todate,ctr_tp,TRPL_C_ARR, limit);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회 엑셀다운로드
	 * 
	 */
	public void downloadExcelPricatDetails(String sto_code,String datesel,String bzplc_code,String bzplc_team,String fromdate,String todate,String ctr_tpc,String[] TRPL_C_ARR,
			int limit, ExcelFileMakerResultHandler handler){
		try {
			productDao.downloadExcelPricatDetails(sto_code,datesel,bzplc_code,bzplc_team,fromdate,todate,ctr_tpc,TRPL_C_ARR, limit, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 분류코드에 따른 2차 상품 상세정보 
	 */
	public List<Map<String,Object>> retrieveCLCGoods(String clc_gubun,String wrs_dsc){
		try {
			return productDao.retrieveCLCGoods(clc_gubun,wrs_dsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 조회 (상품코드 유무 조회)
	 */
	public int wrsCheck(String wrs_c){
		try {
			return productDao.wrsCheck(wrs_c);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 조회 (상품기본 조회)
	 */
	public List<Map<String, Object>> selectGD(String GLN, String NA_WRS_C){
		try{
			return productDao.selectGD(GLN, NA_WRS_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 조회 (상품R1 조회)
	 */
	public List<Map<String, Object>> selectLG(String van_c_rq_no){
		try{
			return productDao.selectLG(van_c_rq_no);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 (상품등록신청내역 조회)
	 */
	public List<ProductReqVO> selectREQ(String VAN_C_NO){
		try{
			return productDao.selectREQ(VAN_C_NO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 (입력정보)
	 */
	public List<ProductReqPrgrVO> selectGridREQ(String VAN_C_NO){
		try{
			return productDao.selectGridREQ(VAN_C_NO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 이미지 파일 조회
	 */
	public List<Map<String,Object>> selectfileREQ(String VAN_C_NO){
		try {
			return productDao.selectfileREQ(VAN_C_NO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 추가정보 조회
	 */
	public List<Map<String,Object>> selectAddREQ(String VAN_C_NO){
		try {
			return productDao.selectAddREQ(VAN_C_NO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 추가,수정
	 */
	public void req(ProductReqVO vo,ProductReqPrgrVO inputvo,DataSet dsInput_wrs,List<ProductReqPrgrVO> addlist,String rdo_sep,String temp_yn,String del_yn){
		try {
			
			if(rdo_sep.equals("1")){
				vo.setCUD_DSC("I");
			}
			if(rdo_sep.equals("2")){
				vo.setCUD_DSC("U");
				if(del_yn.equals("1")){
					vo.setCUD_DSC("D");
				}
			}
			for(int m=0;m<dsInput_wrs.getRowCount();m++){
				vo.setNA_BZPLC(addlist.get(m).getNA_BZPLC());
				productDao.insertREQ_sub(vo);	// 2차상품정보
			}
			if(vo.getSTPL_AMN_NA_WRS_C() != null && vo.getSTPL_AMN_NA_WRS_C() != ""){
				productDao.insertINPD(vo);
			}
			productDao.insertREQ(vo,temp_yn);			// 상품공통정보
//			}else{
//				if(vo.getVAN_C_RQ_NO() == null){return;}
//				if(del_yn.equals("0")){
//					vo.setCUD_DSC("D");
//				}else{
//					vo.setCUD_DSC("U");
//				}
//				for(int m=0;m<dsInput_wrs.getRowCount();m++){
//					vo.setNA_BZPLC(addlist.get(m).getNA_BZPLC());
//					productDao.updateREQ_sub(vo);
//				}
//				if(vo.getSTPL_AMN_NA_WRS_C() != null && vo.getSTPL_AMN_NA_WRS_C() != ""){
//					productDao.updateINPD(vo);
//				}
//				productDao.updateREQ(vo);
//			}
		}  catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 입력정보 그리드 추가,수정,삭제정보
	 */
	public void inputREQ(DataSet dsInput,DataSet dsInput_wrs,String[] orgrs,List<ProductReqPrgrVO> inputlist,List<ProductReqPrgrVO> addlist,String VAN_C_RQ_NO,String RQ_NA_WRS_C,String orgrname){
		try {
			for(int y=0; y<dsInput_wrs.getRowCount(); y++){
				for(int i=0; i<dsInput.getRowCount(); i++){
					
					if(inputlist.get(i).getVAN_C_RQ_NO() == null){
						inputlist.get(i).setVAN_C_RQ_NO(VAN_C_RQ_NO);
					}
					inputlist.get(i).setRQ_NA_WRS_C(RQ_NA_WRS_C);
					inputlist.get(i).setNA_WRS_C(RQ_NA_WRS_C);
					inputlist.get(i).setNA_BZPLC(addlist.get(y).getNA_BZPLC());
					productDao.insertREQ_th(inputlist.get(i));
					
					//수정,삭제 요청
//					}else{
//						orgrname = orgrs[i];
//						if(inputlist.get(i).getDEL_YN().equals("1")){
//							productDao.deleteREQ_th(VAN_C_RQ_NO,orgrname,addlist.get(y).getNA_BZPLC());
//						}else{
//							inputlist.get(i).setVAN_C_RQ_NO(VAN_C_RQ_NO);
//							inputlist.get(i).setRQ_NA_WRS_C(RQ_NA_WRS_C);
//							inputlist.get(i).setORGRNAME(orgrname);
//							inputlist.get(i).setNA_BZPLC(addlist.get(y).getNA_BZPLC());
//							productDao.updateREQ_th(inputlist.get(i));
//						}
//					}
				}
			}
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 등록 이미지 파일 저장 및 수정
	 * 저장경로 : /NHVANDATA/real/wrs/{VAN_C_RQ_NO}
	 */
	public void fileReq(String VAN_C_RQ_NO, DataSet in_upload, List<ProductReqFile> list3) throws IOException {
		try {
			String srcDir = Configurer.getProperty("file.temp.path");
			String dstDir = Configurer.getProperty("file.real.wrs.path");

			for (int i = 0; i < in_upload.getRowCount(); i++) {
				int rowType = in_upload.getRowType(i);
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					if(list3.get(i).getFILE_NAME().startsWith("$namo")) {
						String[] imgInfo = list3.get(i).getFILE_NAME().split("#");
						list3.get(i).setFILE_NAME(VAN_C_RQ_NO+"_"+i+"."+imgInfo[1]);
					}
//					FileUtil.moveFile(srcDir, dstDir + File.separator + VAN_C_RQ_NO, list3.get(i).getFILE_SYSTEM_NAME());
					FileUtil.moveFile(srcDir, dstDir + File.separator + VAN_C_RQ_NO, list3.get(i).getFILE_SYSTEM_NAME());
					list3.get(i).setVAN_C_RQ_NO(VAN_C_RQ_NO);
					productDao.fileReqIn(list3.get(i));
				}
			}
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1541
	 * 화면설명 : 신규상품 요청등록 조회 (팝업)
	 */
	public List<Map<String,Object>> newGoodsPopUp(String NA_WRS_RADIO,String start_date,String end_date,String na_wrs_c,String[] TRPL_C_ARR,String gubun){
		try {
			return productDao.newGoodsPopUp(NA_WRS_RADIO,start_date,end_date,na_wrs_c,TRPL_C_ARR,gubun);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1542
	 * 화면설명 : 신규상품 요청등록 거래처조회 (팝업)
	 */
	public List<Map<String,Object>> newGoodsTrplPopUp(String combo_trpl,String edt_trpl){
		try {
			return productDao.newGoodsTrplPopUp(combo_trpl,edt_trpl);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1550
	 * 화면설명 : 신규상품요청 일괄작성 저장
	 */
	public void insertUploadBatchNewGoods(List<ProductTempFileVO> list,String temp_seq,String[] arrData,String glncode){
		try {
			int rowcount = 0;
			rowcount++;
			for(int i=0; i<arrData.length; i++){
				int bb = Integer.parseInt(arrData[i]);
				list.get(bb).setTEMP_SEQ(temp_seq);
				list.get(bb).setROW_SEQ(rowcount+"");
				list.get(bb).setFSRGMN_NA_BZPLC(glncode);
				productDao.insertUploadBatchNewGoods(list.get(bb));
			}
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회 로우 count
	 */
	public int selectNewGoodsCount(String store_code,String store_radio,String center_code,String start_day,String end_day,String[] TRPL_C_ARR,String gubun){
		try {
			return productDao.selectNewGoodsCount(store_code,store_radio,center_code,start_day,end_day,TRPL_C_ARR,gubun);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회 마스터조회
	 */
	public List<ProductReqVO> selectNewGoods(String store_code,String store_radio,String center_code,String start_day,String end_day,String[] TRPL_C_ARR,String gubun,int start,int end){
		try {
			return productDao.selectNewGoods(store_code,store_radio,center_code,start_day,end_day,TRPL_C_ARR,gubun,start,end);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회 디테일조회
	 */
	public List<ProductSearchVO> selectDetailNewGoods(String VAN_C,String RQ_TRPL,String gubun){
		try {
			return productDao.selectDetailNewGoods(VAN_C,RQ_TRPL,gubun);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회 (엑셀다운로드)
	 */
	public void excelNewGoods(String store_code,String store_radio,String center_code,String start_day,String end_day,String[] TRPL_C_ARR,String gubun,ExcelFileMakerResultHandler handler){
		try {
			productDao.excelNewGoods(store_code,store_radio,center_code,start_day,end_day,TRPL_C_ARR,gubun,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회 (엑셀다운로드 디테일)
	 */
	public void excelDetailNewGoods(String VAN_C,String RQ_TRPL,String gubun,ExcelFileMakerResultHandler handler){
		try {
			productDao.excelDetailNewGoods(VAN_C,RQ_TRPL,gubun,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int selectGoodWhListCount(String nA_BZPLC, String nA_WRS_C,
			String wRSNM, String  tRPL_C) {
		try {
			return productDao.selectGoodWhListCount(nA_BZPLC, nA_WRS_C, wRSNM, tRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1591
	 * 화면설명 : 상품별물류기능정보조회
	 */
	public List<Map<String, Object>>  selectGoodWhList(String nA_BZPLC, String nA_WRS_C, String wRSNM, String tRPL_C, String aTL_YN, String bOX_WRS_C_YN, String sVS_YN, String dEL_YN) {
		try{
			return productDao.selectGoodWhList(nA_BZPLC, nA_WRS_C, wRSNM, tRPL_C, aTL_YN, bOX_WRS_C_YN, sVS_YN, dEL_YN);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록 (엑셀다운로드)
	 */
	public void downloadExcelTempOdTrtwrsInfo(String NA_BZPLC, ExcelFileMakerResultHandler handler) {
		try{
			productDao.downloadExcelTempOdTrtwrsInfo(NA_BZPLC, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록 (엑셀업로드)
	 */
	public void insertTempOdTrtwrsInfo(DataSet inds, String MBID, String NA_BZPLC) {
		try{
			int rcnt = inds.getRowCount();
			productDao.deleteTempOdTrtwrsInfo(NA_BZPLC);
			
			for(int i = 0; i < rcnt; i++) {
				TempOdTrtwrsInfoUploadFileVO vo = new TempOdTrtwrsInfoUploadFileVO();
				
				vo.setSPYPL_NA_TRPL_C(inds.getString(i, "SPYPL_NA_TRPL_C"));
				vo.setSPYPL_NA_TRPL_NM(inds.getString(i, "SPYPL_NA_TRPL_NM"));
				vo.setNA_WRS_C(inds.getString(i, "NA_WRS_C"));
				vo.setSTPL_NA_WRS_C(inds.getString(i, "STPL_NA_WRS_C"));
				vo.setBOX_WRS_C(inds.getString(i, "BOX_WRS_C"));
				vo.setPHD_WRS_C(inds.getString(i, "PHD_WRS_C"));
				vo.setWRSNM(inds.getString(i, "WRSNM"));
				vo.setWRS_STDNM(inds.getString(i, "WRS_STDNM"));
				vo.setINPD_QT(inds.getString(i, "INPD_QT"));
				vo.setBOXPE_AQZ(inds.getString(i, "BOXPE_AQZ"));
				vo.setNA_WRS_UNT_C(inds.getString(i, "NA_WRS_UNT_C"));
				vo.setMIN_ODR_UNT_C(inds.getString(i, "MIN_ODR_UNT_C"));
				vo.setTXT_DSC(inds.getString(i, "TXT_DSC"));
				vo.setNA_WRS_CSTD_METC(inds.getString(i, "NA_WRS_CSTD_METC"));
				vo.setVLD_PRD_CN(inds.getString(i, "VLD_PRD_CN"));
				vo.setNA_WRS_IPO_DSC(inds.getString(i, "NA_WRS_IPO_DSC"));
				vo.setDVY_DSC(inds.getString(i, "DVY_DSC"));
				vo.setSL_UPR(inds.getString(i, "SL_UPR"));
				vo.setUPR_01(inds.getString(i, "UPR_01"));
				vo.setUPR_02(inds.getString(i, "UPR_02"));
				vo.setUPR_03(inds.getString(i, "UPR_03"));
				vo.setMD_NM(inds.getString(i, "MD_NM"));
				vo.setBZTPNM(inds.getString(i, "BZTPNM"));
				vo.setFSRGMN_ENO(MBID);
				vo.setLS_CMENO(MBID);
				
				productDao.insertTempOdTrtwrsInfo(vo);
			}
			
			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록
	 */
	public List<Map<String, Object>> selectTempOdTrtwrsList(String NA_BZPLC) {
		try{
			return productDao.selectTempOdTrtwrsList(NA_BZPLC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1513
	 * 화면설명 : 필수상품속성정보조회
	 */
	public List<Map<String, Object>> selectMDTempOdTrtwrsList(String na_trpl_c, String md_nm) {
		try{
			return productDao.selectMDTempOdTrtwrsList(na_trpl_c, md_nm);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1513
	 * 화면설명 : 필수상품속성정보조회(합계)
	 */
	public long getNaWrsCntSum(String na_trpl_c, String md_nm) {
		try{
			return productDao.getNaWrsCntSum(na_trpl_c, md_nm);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리
	 */
	public List<Map<String, Object>> selectMDMngTempOdTrtwrsList(String na_trpl_c, String md_nm) {
		try{
			return productDao.selectMDMngTempOdTrtwrsList(na_trpl_c, md_nm);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(엑셀다운로드)
	 */
	public void downloadExcelMDMngTempOdTrtwrsList(String na_trpl_c, String md_nm, ExcelFileMakerResultHandler handler) {
		try{
			productDao.downloadExcelMDMngTempOdTrtwrsList(na_trpl_c, md_nm, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(엑셀업로드)
	 */
	public void updateMDMngTempOdTrtwrsInfo(DataSet inds, String MBID, String NA_BZPLC) {
		try{
			
			int rcnt = inds.getRowCount();
			
			for(int i = 0; i < rcnt; i++) {
				TempOdTrtwrsInfoUploadFileVO vo = new TempOdTrtwrsInfoUploadFileVO();
				
				vo.setSPYPL_NA_TRPL_C(inds.getString(i, "SPYPL_NA_TRPL_C"));
				vo.setSPYPL_NA_TRPL_NM(inds.getString(i, "SPYPL_NA_TRPL_NM"));
				vo.setNA_WRS_C(inds.getString(i, "NA_WRS_C"));
				vo.setSTPL_NA_WRS_C(inds.getString(i, "STPL_NA_WRS_C"));
				vo.setBOX_WRS_C(inds.getString(i, "BOX_WRS_C"));
				vo.setPHD_WRS_C(inds.getString(i, "PHD_WRS_C"));
				vo.setWRSNM(inds.getString(i, "WRSNM"));
				vo.setWRS_STDNM(inds.getString(i, "WRS_STDNM"));
				vo.setINPD_QT(inds.getString(i, "INPD_QT"));
				vo.setBOXPE_AQZ(inds.getString(i, "BOXPE_AQZ"));
				vo.setNA_WRS_UNT_C(inds.getString(i, "NA_WRS_UNT_C"));
				vo.setMIN_ODR_UNT_C(inds.getString(i, "MIN_ODR_UNT_C"));
				vo.setTXT_DSC(inds.getString(i, "TXT_DSC"));
				vo.setNA_WRS_CSTD_METC(inds.getString(i, "NA_WRS_CSTD_METC"));
				vo.setVLD_PRD_CN(inds.getString(i, "VLD_PRD_CN"));
				vo.setNA_WRS_IPO_DSC(inds.getString(i, "NA_WRS_IPO_DSC"));
				vo.setDVY_DSC(inds.getString(i, "DVY_DSC"));
				vo.setSL_UPR(inds.getString(i, "SL_UPR"));
				vo.setUPR_01(inds.getString(i, "UPR_01"));
				vo.setUPR_02(inds.getString(i, "UPR_02"));
				vo.setUPR_03(inds.getString(i, "UPR_03"));
				vo.setMD_NM(inds.getString(i, "MD_NM"));
				vo.setBZTPNM(inds.getString(i, "BZTPNM"));
				vo.setLS_CMENO(MBID);
				
				productDao.updateMDMngTempOdTrtwrsInfo(vo);
			}
			
			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 코리안넷 상품 조회
	 */
	public Map<String, Object> selectKornetProduct(String gln, String wrsc) {
		try {
			return productDao.selectKornetProduct(gln, wrsc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1543
	 * 화면설명 : 신규상품 요청등록 추가,수정 (코리안넷)
	 */
	public void insertKornetREQ(ProductReqVO vo, ProductReqVO r1vo, String rdo_sep, String temp_yn, String del_yn) throws SQLException {
		try {
			if (rdo_sep.equals("2")) {
				vo.setCUD_DSC("U");
				if (del_yn.equals("1")) {
					vo.setCUD_DSC("D");
				}
			} else {
				vo.setCUD_DSC("I");
			}
//			vo.setVAN_C_RQ_NO("for test over size than field");
			r1vo.setVAN_C_RQ_NO(vo.getVAN_C_RQ_NO());
			productDao.insertKornetREQ(vo, rdo_sep, temp_yn);

			productDao.insertREQ_sub(r1vo);	// 2차상품정보
		}
		catch (DataAccessException e) {
			throw new SQLException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1561 (코리안넷)
	 * 화면설명 : 신규상품요청 내역조회 로우 count
	 */
	public int selectNewGoodsByKornetCount(Map<String, Object> param){
		try {
			return productDao.selectNewGoodsByKornetCount(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561 (코리안넷)
	 * 화면설명 : 신규상품요청 내역조회 마스터조회
	 */
	public List<Map<String, Object>> selectNewGoodsByKornet(Map<String, Object> param){
		try {
			return productDao.selectNewGoodsByKornet(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1561 (코리안넷)
	 * 화면설명 : 신규상품요청 내역조회 첨부조회
	 */
	public List<Map<String, Object>> selectNewGoodsAtchByKornet(Map<String, Object> param){
		try {
			return productDao.selectNewGoodsAtchByKornet(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1543
	 * 화면설명 : 신규상품 신청내역 조회
	 */
	public List<Map<String, Object>> retrieveWrsReqExist(Map<String, Object> param){
		try {
			return productDao.retrieveWrsReqExist(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1561
	 * 화면설명 : 신규상품 등록내역 신청내역 취소 대상 조회
	 */
	public int retrieveWrsModReqExist(ProductReqVO vo){
		return productDao.retrieveWrsModReqExist(vo);
	}

	/**
	 * 신규상품 등록내역 신청 취소
	 * @param vo	변경VO
	 * @return
	 */
	public void insertWrsDelReq(ProductReqVO vo) {
		productDao.insertWrsDelReq(vo);
	}

	/*
	 * 화면ID : VAN_DS_SC_1561
	 * 화면설명 : 신규상품요청 내역조회 (엑셀다운로드)
	 */
	public void excelNewGoodsKornet(Map<String, Object> param, ExcelFileMakerResultHandler handler){
		try {
			productDao.excelNewGoodsKornet(param, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 신규상품 등록내역 상세 조회
	 */
	public List<Map<String, Object>> retrieveNewGoodsDetailByKornet(ProductReqVO vo) {
		try {
			return productDao.retrieveNewGoodsDetailByKornet(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 상품고시정보 품목
	 */
	public List<Map<String, Object>> retrieveNewGoodsOnlNtfy(ProductReqVO vo) {
		try {
			return productDao.retrieveNewGoodsOnlNtfy(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 상품고시정보 품목내용
	 */
	public List<Map<String, Object>> retrieveNewGoodsOnlNtfyD(ProductReqVO vo) {
		try {
			return productDao.retrieveNewGoodsOnlNtfyD(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1561_P01
	 * 화면설명 : 신규상품 등록내역 상세 조회 (수정상품 기존 정보)
	 */
	public List<Map<String, Object>> retrieveModGoodsDetailOrg(ProductReqVO vo) {
		try {
			return productDao.retrieveModGoodsDetailOrg(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : POPUP_SRC_PDAA
	 * 화면설명 : 산지코드 조회
	 */
	public List<Map<String, Object>> retrieveNaWrsPdaaC(String mode, String text) {
		try {
			return productDao.retrieveNaWrsPdaaC(mode, text);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1592
	 * 화면설명 : 온라인 취급상품 조회 페이징 count
	 */
	public int selectOnLineModyCount(Map<String, Object> param){
		try {
			return productDao.selectOnLineModyCount(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1592
	 * 화면설명 : 온라인 취급상품 조회
	 */
	public List<Map<String, Object>> selectOnLineMody(Map<String, Object> param){
		try{
			return productDao.selectOnLineMody(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelGoodWhList(String nA_BZPLC, String nA_WRS_C, String wRSNM, String tRPL_C, String aTL_YN, String bOX_WRS_C_YN, String sVS_YN, String dEL_YN, ExcelFileMakerResultHandler handler) {
		try{
			productDao.downloadExcelGoodWhList(nA_BZPLC, nA_WRS_C, wRSNM, tRPL_C, aTL_YN, bOX_WRS_C_YN, sVS_YN, dEL_YN, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int insertOnNtfyHdng(DataSet ds_wrs_nfty_hdng, String vAN_C_RQ_NO) {
		try {
			int resultIU = 0;
			
			for (int j = 0; j < ds_wrs_nfty_hdng.getRowCount(); j++) {
				String p_na_wrs_c = ds_wrs_nfty_hdng.getString(j, "NA_WRS_C");
				String p_wrs_ntfy_c = ds_wrs_nfty_hdng.getString(j, "WRS_NTFY_C");
				String p_wrs_ntfy_hdng_c = ds_wrs_nfty_hdng.getString(j, "WRS_NTFY_HDNG_C");
				String p_wrs_ntfy_hdng_cntn = ds_wrs_nfty_hdng.getString(j, "WRS_NTFY_HDNG_CNTN");

				productDao.insertOnNtfyHdng(vAN_C_RQ_NO, p_na_wrs_c, p_wrs_ntfy_c, p_wrs_ntfy_hdng_c, p_wrs_ntfy_hdng_cntn);
				resultIU++;
			}

			return resultIU;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
		
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 최근 신규상품 요청등록 조회 (상품기본 조회)
	 */
	public List<Map<String, Object>> select_recent_inserting_from_TB_GD_WRS_RG_REQ(String GLN, String NA_WRS_C){
		try{
			return productDao.select_recent_inserting_from_TB_GD_WRS_RG_REQ(GLN, NA_WRS_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public boolean check_standard_or_not (String NA_WRS_C){
		return productDao.check_standard_or_not(NA_WRS_C);
	}


	/**
	 * html파일 정보 TB_GD_WRS_RG_REQ_FILE 테이블에 insert
	 *
	 **/
	public void insert_html_file_info(Map<String,Object>html_param){
		productDao.insert_html_file_info(html_param);
	}

	/**
	 * html파일을 구성할 RQ_NA_WRS_C, FILE_NAME 조회
	 * @params VAN_C_RQ_NO, img_file_name
	 * @return List<Map<String,Object>>
	 **/
	public Map<String,Object> retrieve_file_name(String VAN_C_RQ_NO, String img_file_name){
		img_file_name= img_file_name.split("#")[0];
		Map<String,Object> param = new HashMap<String,Object>();
		param.put("VAN_C_RQ_NO", VAN_C_RQ_NO);
		param.put("img_file_name", img_file_name);
		return productDao.retrieve_file_name(param);
	}
}