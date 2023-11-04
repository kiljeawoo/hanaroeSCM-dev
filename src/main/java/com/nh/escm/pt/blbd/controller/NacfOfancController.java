package com.nh.escm.pt.blbd.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.blbd.service.NacfOfancService;
import com.nh.escm.pt.blbd.vo.BlbdApdflVO;
import com.nh.escm.pt.blbd.vo.BlbdVO;
import com.nh.escm.pt.blbd.vo.NacfOfancApdflVO;
import com.nh.escm.pt.blbd.vo.NacfOfancVO;
import com.nh.escm.util.PageHelper;


@RestController
public class NacfOfancController extends AbstractController {

	@Autowired
	private NacfOfancService nacfOfancService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/blbd/retrieveNacfOfancList")
	public void retrieveNacfOfancList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		
		// Paging
		int totalRowCount = nacfOfancService.retrieveNacfOfancListCount(dsCondition);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
			
		PlatformData platformData = new PlatformData();
		
		try {	
				List<Map<String, Object>> noticeList = nacfOfancService.retrieveNacfOfancList(dsCondition, start, end);
				DataSetHelper dsHelper = new DataSetHelper("ds_notice");
				
				if(noticeList != null && noticeList.size() > 0){
					dsHelper.addColumns(noticeList.get(0).keySet());
					for(Map<String, Object> map : noticeList){
						dsHelper.setData(map);
					}
				}	
				platformData.addDataSet(pageHelper.getDsPageVo());
				platformData.addDataSet(dsHelper.getDataSet());
				sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		} 
                
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/blbd/retrieveNacfOfancMainList")
	public void retrieveNacfOfancMainList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatformData platformData = new PlatformData();
		
		try {
				List<NacfOfancVO> noticeList = nacfOfancService.retrieveNacfOfancMainList();
				
				DataSetHelper dsHelper = new DataSetHelper("ds_notice");
				
				if(noticeList != null && noticeList.size() > 0){
				
					dsHelper.addColumns(NacfOfancVO.class);
					
					for(NacfOfancVO vo : noticeList){
						dsHelper.setData(vo);
					}
					
				}	
				platformData.addDataSet(dsHelper.getDataSet());
				sendData(response, platformData);
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		} 
                
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/blbd/retrieveNacfOfanc")
	public void retrieveNacfOfanc(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String noticeSeq = requestHelper.getParameter("noticeSeq");	
		
		PlatformData platformData = new PlatformData();
		
		try {
				List<NacfOfancVO> notice = nacfOfancService.retrieveNacfOfanc(noticeSeq);
				

				DataSetHelper dsHelper = new DataSetHelper("ds_notice");
				DataSetHelper dsHelper2 = new DataSetHelper("ds_noticeFile");
				
				if(notice != null && notice.size() > 0){
					
					List<NacfOfancApdflVO> noticeFileList = nacfOfancService.retrieveOfancApdflList(noticeSeq);
					
					dsHelper.addColumns(NacfOfancVO.class);
					
					for(NacfOfancVO vo : notice){
						dsHelper.setData(vo);
					}
					
					if(noticeFileList != null && noticeFileList.size() > 0){
						
						dsHelper2.addColumns(NacfOfancApdflVO.class);
						
						for(NacfOfancApdflVO vo : noticeFileList){
							dsHelper2.setData(vo);
						}
					}
				}	
				platformData.addDataSet(dsHelper.getDataSet());
				platformData.addDataSet(dsHelper2.getDataSet());
				sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
			
		} 
                
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pt/blbd/retrieveNacfOfancForOz")
	public RestResult retrieveNacfOfancForOz(HttpServletRequest request, HttpServletResponse response, String noticeSeq, String userPlz, String userName) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
//		String noticeSeq = requestHelper.getParameter("noticeSeq");	
//		String userPlz = requestHelper.getParameter("userPlz");	
//		String userName = requestHelper.getParameter("userName");	
		String curDate = DateUtil.getCurrentDate("yyyyMMddHHmmss");
		
		try {
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			
			List<Map<String,Object>> notice = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> file = new ArrayList<Map<String,Object>>();
			
			List<Map<String, Object>> noticeList = nacfOfancService.retrieveNacfOfancForOz(noticeSeq);
			if(noticeList != null &&noticeList.size() > 0){
				
				for(Map<String, Object> map : noticeList){
					Map<String,Object> noticeMap = new HashMap<String, Object>();	
					noticeMap.put("BBRD_SQNO",map.get("BBRD_SQNO"));
					noticeMap.put("FS_RGM",map.get("FS_RGM"));
					noticeMap.put("OFANC_CNTN",map.get("OFANC_CNTN"));
					noticeMap.put("OFANC_TINM",map.get("OFANC_TINM"));
					noticeMap.put("FSRGMN_BZPLC",map.get("FSRGMN_BZPLC"));
					noticeMap.put("FSRG_DTM",map.get("FSRG_DTM"));
					noticeMap.put("OFANC_PRU_NT",map.get("OFANC_PRU_NT"));
					noticeMap.put("userPlz",userPlz);
					noticeMap.put("userName",userName);
					noticeMap.put("curDate",curDate);
					
					notice.add(noticeMap);
				}
//				
				List<NacfOfancApdflVO> fileList = nacfOfancService.retrieveOfancApdflList(noticeSeq);

				if(fileList != null && fileList.size() > 0){
					for(NacfOfancApdflVO vo : fileList){
						Map<String,Object> fileMap = new HashMap<String, Object>();	
						fileMap.put("APDFL_SQNO",StringUtil.converNullToBlank(vo.getAPDFL_SQNO()));
						fileMap.put("APDFL_SZE",StringUtil.converNullToBlank(vo.getAPDFL_SZE()));
						fileMap.put("ORGFNAME",StringUtil.converNullToBlank(vo.getORGFNAME()));
						fileMap.put("BBRD_SQNO",StringUtil.converNullToBlank(vo.getBBRD_SQNO()));
						file.add(fileMap);
					}
				}else{
					Map<String,Object> fileMap = new HashMap<String, Object>();	
					fileMap.put("APDFL_SQNO",StringUtil.converNullToBlank(""));
					fileMap.put("APDFL_SZE",StringUtil.converNullToBlank(""));
					fileMap.put("ORGFNAME",StringUtil.converNullToBlank(""));
					fileMap.put("BBRD_SQNO",StringUtil.converNullToBlank(noticeSeq));
					file.add(fileMap);
				}
				
			}
			
			all_list.add(notice);
			all_list.add(file);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list,0);
			
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}    
	}
}

