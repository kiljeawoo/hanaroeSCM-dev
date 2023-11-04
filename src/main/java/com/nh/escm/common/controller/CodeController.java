package com.nh.escm.common.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.CodeService;
import com.nh.escm.common.vo.SQLNames.CommonSimpleCode;
import com.nh.escm.common.vo.SQLNames.RightsBizPlace;
import com.nh.escm.common.vo.TbCmBzplVO;

@RestController
public class CodeController extends AbstractController {

	@Autowired
	private CodeService codeService;
	
	//공통코드를 가져오는 메소드
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/getCodeList")
	public void getCodeList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String[] codeKeys = StringUtils.split(requestHelper.getParameter("codeKeys"), ",");
		
		PlatformData platformData = new PlatformData();
		
		try {
			if(codeKeys !=null && codeKeys.length > 0) {
				for(String codeKey : codeKeys) {
					String[] codeIndexs = new String[2];
					String code = "";
					String where = "";

					if(StringUtils.isNotEmpty(codeKey)) {
						codeIndexs = StringUtils.split(codeKey,"$");
						if(codeIndexs.length == 2) {
							code = codeIndexs[0];
							where = URLDecoder.decode(codeIndexs[1],"UTF-8");
						} else {
							code = codeIndexs[0];
						}
						DataSetHelper dsHelper = new DataSetHelper(code);
						dsHelper.addColumns(CommonSimpleCode.class);
						
						List<Map<String, Object>> codeList = codeService.getCodeList(code, where);
						for(Map<String, Object> map : codeList) {
							dsHelper.setData(map);
						}
					    platformData.addDataSet(dsHelper.getDataSet());						
					}
				}
				sendData(response, platformData);
			} else {
				sendData(response, platformData, -1, "Do not have codeKey");
			}			
		} catch (UnsupportedEncodingException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.dupUserId");
			
		} 
                
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/get20MinList")
	public void get20MinList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String SEARCH_DT = requestHelper.getParameter("SEARCH_DT");
		PlatformData platformData = new PlatformData();
		
		if(StringUtils.isNotEmpty(SEARCH_DT)) {
			List<String> list = DateUtil.getCurrent20MinList(SEARCH_DT);
			DataSet ds = new DataSet("DATASET");
			ds.addColumn("HHMM", DataTypes.STRING);
			if(list != null && list.size() > 0) {
				for(String HHMM : list) {
					ds.set(ds.newRow(), "HHMM", HHMM);
				}
			}
		    platformData.addDataSet(ds);
		    sendData(response, platformData);
		} else {
			sendData(response, platformData, -1, "error.message.required.parameters");
		}     
                
	}
	
	/**
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/getNABizPlace")
	public void getNABizPlace(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String splrNaTrplC = requestHelper.getParameter("splr_na_trpl_c");
		/**
		 * search_type: 'default' 504 : 생활물자만 포함  , 'added' 504 : 생활물자  505 : 도매전담조직 포함
		 */
		String searchType = requestHelper.getParameter("search_type");
		String delYn = requestHelper.getParameter("del_yn");		
			
		PlatformData platformData = new PlatformData();
		if(StringUtils.isNotEmpty(splrNaTrplC)) {
			DataSetHelper dsHelper = new DataSetHelper("data");
			dsHelper.addColumns(TbCmBzplVO.class);
			
			List<TbCmBzplVO> voList = codeService.getNABizPlace(splrNaTrplC, searchType, delYn);
			for(TbCmBzplVO vo : voList) {
				dsHelper.setData(vo);
			}
		    platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} else {
			sendData(response, platformData, -1, "error.message.required.parameters");
		}        
	}
	
	/**
	 * 권한사업장 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/getRightsBizPlace")
	public void getRightsBizPlace(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String naTrplC = requestHelper.getGlnCode();
		String mbcoType = requestHelper.getMbcoType(); // 본지사구분
		
		PlatformData platformData = new PlatformData();
		if(StringUtils.isNotEmpty(naTrplC)) {
			DataSetHelper dsHelper = new DataSetHelper("data");
			dsHelper.addColumns(RightsBizPlace.class);
			
			//⏬⏬예외 발생부분
			List<Map<String, Object>> list = codeService.getRightsBizPlace(naTrplC, mbcoType);
			for(Map<String, Object> map : list) {
				dsHelper.setData(map);
			}
		    platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} else {
			sendData(response, platformData, -1, "Do not have na_trpl_c key");
		}        
	}
	
	
	/**
	 * 주류권한사업장 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/getRightsBizPlaceLiq")
	public void getRightsBizPlaceLiq(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String naTrplC = requestHelper.getGlnCode();
		String mbcoType = requestHelper.getMbcoType(); // 본지사구분
		
		PlatformData platformData = new PlatformData();
		if(StringUtils.isNotEmpty(naTrplC)) {
			DataSetHelper dsHelper = new DataSetHelper("dataLiq");
			dsHelper.addColumns(RightsBizPlace.class);
			
			List<Map<String, Object>> list = codeService.getRightsBizPlaceLiq(naTrplC, mbcoType);
			for(Map<String, Object> map : list) {
				dsHelper.setData(map);
			}
		    platformData.addDataSet(dsHelper.getDataSet());
		    sendData(response, platformData);
		} else {
			sendData(response, platformData, -1, "Do not have na_trpl_c key");
		}    
//		System.out.println("찾아왔다 주류 컨트롤러");
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/getPortalCodeList")
	public void getPortalCodeList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String[] codeKeys = StringUtils.split(requestHelper.getParameter("codeKeys"), ",");

		PlatformData platformData = new PlatformData();
		
		try {
			if(codeKeys !=null && codeKeys.length > 0) {
				for(String codeKey : codeKeys) {
					if(StringUtils.isNotEmpty(codeKey)) {
						DataSetHelper dsHelper = new DataSetHelper(codeKey);
						dsHelper.addColumns(CommonSimpleCode.class);
						
						List<Map<String, Object>> codeList = codeService.getPortalCodeList(codeKey);
						for(Map<String, Object> map : codeList) {
							dsHelper.setData(map);
						}
					    platformData.addDataSet(dsHelper.getDataSet());						
					}
				}
				sendData(response, platformData);
			} else {
				sendData(response, platformData, -1, "Do not have codeKey");
			}
			
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.dupUserId");
			
		} 
                
	}
	/**
	 * 지역코드 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/getRgnCode")
	public void getRgnCode(HttpServletRequest request, HttpServletResponse response) {
		
		PlatformData platformData = new PlatformData();
		DataSetHelper dsHelper = new DataSetHelper("ds_rgn_c00");
		dsHelper.addColumns(CommonSimpleCode.class);
		
		List<Map<String, Object>> list = codeService.getRgnCode();
		for(Map<String, Object> map : list) {
			dsHelper.setData(map);
		}
	    platformData.addDataSet(dsHelper.getDataSet());
	    sendData(response, platformData);
	}
	
	/**
	 * 지역코드 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/common/getRgnCodeD")
	public void getRgnCodeD(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		String simpC = requestHelper.getParameter("simpC");
		DataSetHelper dsHelper = new DataSetHelper("ds_rgn_c01");
		dsHelper.addColumns(CommonSimpleCode.class);
		
		List<Map<String, Object>> list = codeService.getRgnCodeD(simpC);
		for(Map<String, Object> map : list) {
			dsHelper.setData(map);
		}
	    platformData.addDataSet(dsHelper.getDataSet());
	    sendData(response, platformData);
	}
}
