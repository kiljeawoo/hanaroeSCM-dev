package com.nh.escm.pds.pricat.dao;

import java.util.*;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pricat.vo.LifeGoodsVO;

public class LifeGoodsDAO extends AbstractDao{
	
	/*
	 * 화면설명 : 공급업체본사 조회
	 */
	public List<Map<String,Object>> getuptrpl(String glncode){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("glncode", glncode);
		return getSqlSession().selectList("lifeGoodsDAO.getuptrpl",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회 페이징 count
	 */
	public int lifeschCount(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,
			String fsrg_to,String[] TRPL_C_ARR,String fsrg_rdo,String glncode,String psb_yn,String del_dtm){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("STO_CODE",sto_code); 	//상품 첫번째 코드
		map.put("STO_CODE2",sto_code2); //상품 두번재 코드
		map.put("COMBO_CTR",combo_ctr); //발주처 값
		map.put("COMBO_PAY", combo_pay);//가격군코드
		map.put("TXT_DSC",combo_txt_dsc);	//과세구분
		map.put("DATE_RDO",fsrg_rdo); 	//조작일 라디오버튼 값
		map.put("DATE_FROM",fsrg_from); //조작일시작
		map.put("DATE_TO",fsrg_to); 	//조작일 끝
		map.put("TRPL_C",TRPL_C_ARR); 	//로그인 사업장 코드
		map.put("glncode", glncode);	//공급업체본사코드
		map.put("ODR_FBID_YN", psb_yn);	//발주금지여부
		map.put("DEL_DTM", del_dtm);
		
		return getSqlSession().selectOne("lifeGoodsDAO.lifeschCount",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회
	 */
	public List<Map<String,Object>> lifesch(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String[] TRPL_C,String fsrg_rdo,String glncode,String psb_yn,String del_dtm,String bzplc,String isBzplc,String cbo_bzplc, String box_wrs_c_yn){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("STO_CODE",sto_code); 	//상품 첫번째 코드
		map.put("STO_CODE2",sto_code2); //상품 두번재 코드
		map.put("COMBO_CTR",combo_ctr); //발주처 값
		map.put("COMBO_PAY", combo_pay);//가격군코드
		map.put("TXT_DSC",combo_txt_dsc);	//과세구분
		map.put("DATE_RDO",fsrg_rdo); 	//조작일 라디오버튼 값
		map.put("DATE_FROM",fsrg_from); //조작일시작
		map.put("DATE_TO",fsrg_to); 	//조작일 끝
		map.put("TRPL_C",TRPL_C); 		//로그인 사업장 코드
		map.put("glncode", glncode);	//공급업체본사코드
		map.put("ODR_FBID_YN", psb_yn); //발주금지여부
		map.put("DEL_DTM", del_dtm);
		map.put("isBzplc", isBzplc);
		map.put("bzplc", bzplc);
		map.put("cbo_bzplc", cbo_bzplc);
		map.put("BOX_WRS_C_YN", box_wrs_c_yn); // 박스상품여부
		//
		
		return getSqlSession().selectList("lifeGoodsDAO.schselect",map);
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회 엑셀다운로드
	 */
	public void downloadExcelLifeGoods(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String[] TRPL_C,String fsrg_rdo,String glncode,String psb_yn,String del_dtm,String bzplc,String isBzplc,String cbo_bzplc, ExcelFileMakerResultHandler handler){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("STO_CODE",sto_code); 	//상품 첫번째 코드
		map.put("STO_CODE2",sto_code2); //상품 두번재 코드
		map.put("COMBO_CTR",combo_ctr); //발주처 값
		map.put("COMBO_PAY", combo_pay);//가격군코드
		map.put("TXT_DSC",combo_txt_dsc);	//과세구분
		map.put("DATE_RDO",fsrg_rdo); 	//조작일 라디오버튼 값
		map.put("DATE_FROM",fsrg_from); //조작일시작
		map.put("DATE_TO",fsrg_to); 	//조작일 끝
		map.put("TRPL_C",TRPL_C); 		//로그인 사업장 코드
		map.put("glncode", glncode);	//공급업체본사코드
		map.put("ODR_FBID_YN", psb_yn); //발주금지여부
		map.put("DEL_DTM", del_dtm);
		map.put("isBzplc", isBzplc);
		map.put("bzplc", bzplc);
		map.put("cbo_bzplc", cbo_bzplc);
		getSqlSession().select("lifeGoodsDAO.downloadExcelLifeGoods",map, handler);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회 출력
	 */
	public List<LifeGoodsVO> lifeschprint(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,
			String fsrg_to,String[] TRPL_C_ARR,String fsrg_rdo,String glncode,String psb_yn,String del_dtm,String bzplc,String cbo_bzplc,String isBzplc){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("STO_CODE",sto_code); 	//상품 첫번째 코드
		map.put("STO_CODE2",sto_code2); //상품 두번재 코드
		map.put("COMBO_CTR",combo_ctr); //발주처 값
		map.put("COMBO_PAY", combo_pay);//가격군코
		map.put("TXT_DSC",combo_txt_dsc);	//과세구분드
		map.put("DATE_RDO",fsrg_rdo); 	//조작일 라디오버튼 값
		map.put("DATE_FROM",fsrg_from); //조작일시작
		map.put("DATE_TO",fsrg_to); 	//조작일 끝
		map.put("TRPL_C",TRPL_C_ARR); 	//로그인 사업장 코드
		map.put("glncode", glncode);	//공급업체본사코드
		map.put("ODR_FBID_YN", psb_yn); //발주금지여부
		map.put("DEL_DTM", del_dtm);
		map.put("isBzplc", isBzplc);
		map.put("bzplc", bzplc);
		map.put("cbo_bzplc", cbo_bzplc);
		return getSqlSession().selectList("lifeGoodsDAO.lifeschprint",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1530
	 * 화면설명 : 상품 공급가격이력
	 */
	public List<Map<String,Object>> history(String sto_code,String gubun,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String fromtordo,String[] TRPL_C_ARR,String glncode){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("NA_WRS_C",sto_code); 		//상품코드
		map.put("GUBUN",gubun);
		map.put("NA_BZPLC",combo_ctr); 		//발주처
		map.put("PRGR_C",combo_pay); 		//가격군
		map.put("TXT_DSC",combo_txt_dsc); 	//과세구분
		map.put("DATE_FROM",fsrg_from); 	//조작일시작
		map.put("DATE_TO",fsrg_to); 		//조작일 종료
		map.put("DATE_RDO",fromtordo);		//조작일 라디오버튼
		map.put("TRPL_C",TRPL_C_ARR);		//사업장코드
		map.put("glncode",glncode);			//공급업체 본사		
		return getSqlSession().selectList("lifeGoodsDAO.hofselect",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1530
	 * 화면설명 : 상품 공급가격이력 (화면출력)
	 */
	public List<LifeGoodsVO> historyprint(String sto_code,String gubun,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String fromtordo,String[] TRPL_C_ARR,String glncode){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("NA_WRS_C",sto_code); 	//상품코드
		map.put("GUBUN",gubun);
		map.put("NA_BZPLC",combo_ctr); 	//발주처
		map.put("PRGR_C",combo_pay); 	//가격군
		map.put("TXT_DSC", combo_txt_dsc);
		map.put("DATE_FROM",fsrg_from); //조작일시작
		map.put("DATE_TO",fsrg_to); 	//조작일 종료
		map.put("DATE_RDO",fromtordo);	//조작일 라디오버튼
		map.put("TRPL_C",TRPL_C_ARR);	//사업장코드
		map.put("glncode",glncode);	//공급업체 본사
		return getSqlSession().selectList("lifeGoodsDAO.historyprint",map);
	}
	public void downloadExcelLifeGoodsHistorys(String sto_code,String gubun,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String fromtordo,String[] TRPL_C_ARR,String glncode, ExcelFileMakerResultHandler handler){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("NA_WRS_C",sto_code); 		//상품코드
		map.put("GUBUN",gubun);
		map.put("NA_BZPLC",combo_ctr); 		//발주처
		map.put("PRGR_C",combo_pay); 		//가격군
		map.put("TXT_DSC",combo_txt_dsc); 	//과세구분
		map.put("DATE_FROM",fsrg_from); 	//조작일시작
		map.put("DATE_TO",fsrg_to); 		//조작일 종료
		map.put("DATE_RDO",fromtordo);		//조작일 라디오버튼
		map.put("TRPL_C",TRPL_C_ARR);		//사업장코드
		map.put("glncode",glncode);			//공급업체 본사		
		getSqlSession().select("lifeGoodsDAO.downloadExcelLifeGoodsHistorys",map, handler);
	}
}