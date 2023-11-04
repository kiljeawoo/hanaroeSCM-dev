package com.nh.escm.pds.pricat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.pricat.dao.LifeGoodsDAO;
import com.nh.escm.pds.pricat.vo.LifeGoodsVO;

@Service
public class LifeGoodsService extends AbstractService {
	
	@Autowired
	private LifeGoodsDAO lifedao;
	
	/*
	 * 화면설명 : 공급업체본사 조회
	 */
	public List<Map<String,Object>> getuptrpl(String glncode){
		try {
			return lifedao.getuptrpl(glncode);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}	
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회 페이지 Count
	 */
	public int lifeschCount(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,
			String fsrg_to,String[] TRPL_C_ARR,String fsrg_rdo,String glncode,String psb_yn,String del_dtm){
		try {
			return lifedao.lifeschCount(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C_ARR,fsrg_rdo,glncode,psb_yn,del_dtm);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회
	 */
	public List<Map<String,Object>> lifesch(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String[] TRPL_C,String fsrg_rdo,String glncode,String psb_yn,String del_dtm,String bzplc,String isBzplc,String cbo_bzplc, String box_wrs_c_yn){
		try{
			List<Map<String,Object>> lifesch =  lifedao.lifesch(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C,fsrg_rdo,glncode,psb_yn,del_dtm,bzplc,isBzplc,cbo_bzplc,box_wrs_c_yn);
			return lifesch;
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회 엑셀다운로드
	 */
	public void downloadExcelLifeGoods(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String[] TRPL_C,String fsrg_rdo,String glncode,String psb_yn,String del_dtm,String bzplc,String isBzplc,String cbo_bzplc, ExcelFileMakerResultHandler handler){
		try {
			lifedao.downloadExcelLifeGoods(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C,fsrg_rdo,glncode,psb_yn,del_dtm,bzplc,isBzplc,cbo_bzplc,handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1520
	 * 화면설명 : 상품 공급가격조회 출력
	 */
	public List<LifeGoodsVO> lifeschprint(String sto_code,String sto_code2,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,
			String fsrg_to,String[] TRPL_C_ARR,String fsrg_rdo,String glncode,String psb_yn,String del_dtm,String bzplc,String cbo_bzplc,String isBzplc){
		try {
			return lifedao.lifeschprint(sto_code,sto_code2,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,TRPL_C_ARR,fsrg_rdo,glncode,psb_yn,del_dtm, bzplc, cbo_bzplc, isBzplc);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1530
	 * 화면설명 : 상품 공급가격이력 (엑셀포함)
	 */
	public List<Map<String,Object>> history(String sto_code,String gubun,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String fromtordo,String[] TRPL_C_ARR,String glncode){
		try{
			return lifedao.history(sto_code,gubun,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,fromtordo,TRPL_C_ARR,glncode);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1530
	 * 화면설명 : 상품 공급가격이력 출력
	 */
	public List<LifeGoodsVO> historyprint(String sto_code,String gubun,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String fromtordo,String[] TRPL_C_ARR,String glncode){
		try {
			return lifedao.historyprint(sto_code,gubun,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,fromtordo,TRPL_C_ARR,glncode);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelLifeGoodsHistorys(String sto_code,String gubun,String combo_ctr,String combo_pay,String combo_txt_dsc,String fsrg_from,String fsrg_to,String fromtordo,String[] TRPL_C_ARR,String glncode, ExcelFileMakerResultHandler handler){
		try{
			lifedao.downloadExcelLifeGoodsHistorys(sto_code,gubun,combo_ctr,combo_pay,combo_txt_dsc,fsrg_from,fsrg_to,fromtordo,TRPL_C_ARR,glncode, handler);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
}
