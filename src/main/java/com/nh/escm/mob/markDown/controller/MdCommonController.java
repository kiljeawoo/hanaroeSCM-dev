package com.nh.escm.mob.markDown.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.mob.markDown.service.MdCommonService;
import com.nh.escm.mob.markDown.service.MdInfMgrService;
import com.nh.escm.util.PageHelper;

@Controller
public class MdCommonController extends AbstractController {
	@Autowired
	private MdCommonService mdCommonService;
	
	/**
	 * 화면ID : MOB_MD_SC_1113
	 * 화면설명 : 가격할인 공통 컨트롤러
	 */

	/* 가격할인 사용자 서명란 정보 조회 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/retrieveMdUsrSigList")
	public void retrieveMdUsrList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		

		String md_id	= requestHelper.getUserID();

		try {

			List<Map<String, Object>> records = mdCommonService.selectMdUsrSigList( md_id);
			
			DataSetHelper ds = new DataSetHelper("ds_mdUsrSig");
			
			if (records.size() > 0) {
				
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
				
			}else{
				
				// 없을 경우


			}

			// 객체 전송 
			PlatformData platformData = new PlatformData();
			platformData.addDataSet(ds.getDataSet()); //data

			sendData(response, platformData);
			
		} catch (AppetizerException e) {
             logger.error(e.getMessage(), e);
           sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	
	/* 가격할인 사용자 서명란 정보 저장 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/saveMdUsrSigList")
	public void saveMdUsrSigList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		

		String mb_id	= requestHelper.getUserID();
		String  sig_id   	;
		String  sig_ord     ;
		String  title           ;
		String  rowCrud   = "R" 	; // 행 상태구분
		

		try {

			DataSet ds_mdUsrSig = requestHelper.getDataSet("ds_mdUsrSig");

			
			if (ds_mdUsrSig.getRowCount() > 0) {
				/*
				
				ds.addColumns(records.get(0).keySet()); //첫번째 리스트에서 컬럼명 정의
				
				for (Map<String, Object> vo : records) {
					ds.setData(vo);
				}
				*/
				for(int i = 0; i < ds_mdUsrSig.getRowCount(); i++){
					
					sig_id    = ds_mdUsrSig.getString(i, "SIG_ID");
					sig_ord  = ds_mdUsrSig.getString(i, "SIG_ORD");
					title       = ds_mdUsrSig.getString(i, "TITLE");
					rowCrud = ds_mdUsrSig.getString(i, "CRUD");
					
					if(rowCrud.equals("C")){
						/*
						 * 신규입력
						 */
						mdCommonService.insertUsrSig(mb_id, sig_id, sig_ord, title);
						
					}else if(ds_mdUsrSig.getString(i, "CRUD").equals("U")){
						/*
						 * 수정
						 */
						mdCommonService.updateUsrSig(mb_id, sig_id, sig_ord, title);
						
					}else if(ds_mdUsrSig.getString(i, "CRUD").equals("D")){
						/*
						 * 삭제
						 */
						mdCommonService.deleteUsrSig(mb_id, sig_id, sig_ord, title);
						
					}else if(rowCrud.equals("R")){
						/*
						 * 읽기
						 */
						
					}else {
						
					}
					
					
				}
			}
			


			// 객체 전송 
			PlatformData platformData = new PlatformData();
			// platformData.addDataSet(ds_mdUsrSig.getDataSet()); //data

			sendData(response, platformData);
			
		} catch (AppetizerException e) {
             logger.error(e.getMessage(), e);
           sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
}
