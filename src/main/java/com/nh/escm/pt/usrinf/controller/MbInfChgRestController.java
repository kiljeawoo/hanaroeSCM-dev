package com.nh.escm.pt.usrinf.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nh.escm.pt.usrinf.service.MbEntService;
import com.nh.escm.pt.usrinf.service.MbInfChgService;

@RestController
public class MbInfChgRestController extends AbstractController {
	
	@Autowired
	private MbInfChgService mbInfChgService;
	@Autowired
	private MbEntService mbEntService;
	
	/*
	 * 화면ID : VAN_DS_SC_0330
	 * 화면명 : 배송예정서 조회 
	 * 기    능 : 거래명세서출력
	 */	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pt/vrAcAmn")
	public RestResult vrAcAmn(HttpServletRequest request, HttpServletResponse response){
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			Map<String,Object> payInfo = null;			//빌링정보
			
			payInfo = mbEntService.retrievePayInfoMst(requestHelper.getGlnCode());
			Map<String,Object> mbInfo = mbInfChgService.retrieveMB(requestHelper.getUserID());
			Map<String,Object> _master = new LinkedHashMap<String, Object>();
			List<Map<String,Object>> masterList = new ArrayList<Map<String,Object>>();
			
			String da = payInfo.get("FSRG_DTM").toString();
			String payRepSeq = mbEntService.selectPayRepSeq(requestHelper.getGlnCode());
			if(payRepSeq.equals("0000")){
				payRepSeq = mbEntService.selectPayRepSeq();
				mbEntService.insertPayReqHis(requestHelper.getGlnCode(), payRepSeq);
			}
			SimpleDateFormat st = new SimpleDateFormat("yyyy");
			String dt = st.format(new Date());
			
			Map<String,Object> markMap = new HashMap<String,Object>();
			List<Map<String,Object>> markList = new ArrayList<Map<String,Object>>();
			String tempPath = Configurer.getProperty("file.sample.path");
			File dir = new File(tempPath);
			String baseImage = "";
			String systemFileName = "esum_stamp.png";
			if(StringUtils.isNotEmpty(systemFileName)) {
				File f = FileUtils.getFile(dir, systemFileName);
				baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));	
			}
			
			if(StringUtils.isNotEmpty(baseImage)) {
				markMap.put("mark", "data:;base64,"+baseImage);//직인파일
			} else {
				markMap.put("mark", "");
			}
			markList.add(markMap);
			
			_master.put("top1", "EST-"+dt+"-"+payRepSeq);			//문서번호
			_master.put("top2", mbInfo.get("CLNTNM"));		//업체명
			_master.put("top3", "");						//참조
			
			//공급자
			_master.put("key","key1");
			_master.put("master01", "농협은행 "+payInfo.get("ACNO")); //가상계좌번호
			_master.put("master02", da); //발급일자
			_master.put("master03", mbInfo.get("BZNO1") + "-" + mbInfo.get("BZNO2") + "-" + mbInfo.get("BZNO3")); //사업자등록번호
			_master.put("master04", mbInfo.get("CLNTNM")); //가상계좌 이용업체
			
			List<Object> all_list = new ArrayList<Object>();
			masterList.add(_master);
			
			all_list.add(markList);
			all_list.add(masterList);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
}