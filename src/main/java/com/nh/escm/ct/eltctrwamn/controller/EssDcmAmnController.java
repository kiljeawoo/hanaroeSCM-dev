package com.nh.escm.ct.eltctrwamn.controller;

/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
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
import com.nh.escm.ct.eltctrwamn.service.EssDcmAmnService;
import com.nh.escm.ct.eltctrwamn.vo.EssDcmAmnVO;
import com.nh.escm.ct.eltctrwamn.vo.SQLMapNames.EssDcmAmnNames;

@Controller
public class EssDcmAmnController extends AbstractController {
	
	
	
	@Autowired
	private EssDcmAmnService essDcmAmnService;
	
	//전자 계약서 조회 (협력업체)
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrwamn/retrieveEssDcmAmnList")
	public void retrieveEssDcmAmnList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		
		
		try {
				PlatformData platformData = new PlatformData();
			
				String MN_CTRW_KDC = requestHelper.getParameter("cbo_mnCtrwKdM"); //메인계약서종류
				String BUYER_DSC = requestHelper.getParameter("buyerDsc");		//바이어 구분 11-상품본부 31-수산 31-축산
				logger.debug("MN_CTRW_KDC  :   "+ MN_CTRW_KDC);
				logger.debug("BUYER_DSC  :   " + BUYER_DSC);

				
				DataSetHelper dsHelper_re = new DataSetHelper("ds_rsclist");
				
				dsHelper_re.addColumns(EssDcmAmnNames.class);
				
			
				List<Map<String, Object>> rscList = essDcmAmnService.retrieveEssDcmAmnList(MN_CTRW_KDC, BUYER_DSC);

				
				for(Map<String, Object> map_re : rscList) {
					dsHelper_re.setData(map_re);
				}
					
					platformData.addDataSet(dsHelper_re.getDataSet());

		
		
				sendData(response, platformData);
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
    
	}
	
	

	
	//전자 계약서 양식 등록
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrwamn/saveEssDcmAmnList")
	public void saveEssDcmAmnList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			
			PlatformData platformData = new PlatformData();
			EssDcmAmnVO medaVo = new EssDcmAmnVO();
			String dmlCode = "";
			DataSet dsRs             = requestHelper.getDataSet("ds_rsclist");
	
			logger.debug(dsRs.saveXml());
			
				if(dsRs != null){					
					dmlCode = "";
					logger.debug(dsRs.saveXml());
					List<EssDcmAmnVO> tmpdsRsList = requestHelper.getValueObjects(EssDcmAmnVO.class, dsRs);
					List<EssDcmAmnVO> dsRsList = new ArrayList<EssDcmAmnVO>();
					EssDcmAmnVO tedavo ;
					
					for(int i = 0; i < dsRs.getRowCount(); i++){
						dmlCode = ""; //초기화
						tedavo = tmpdsRsList.get(i);
						if(dsRs.getRowType(i) == DataSet.ROW_TYPE_INSERTED){
							dmlCode = "1";  // 저장
							tedavo.setBUYER_ENO(requestHelper.getUserID());
							tedavo.setFS_RGM(requestHelper.getUserID());
						}
						else if(dsRs.getRowType(i) == DataSet.ROW_TYPE_UPDATED){
							
							if(StringUtils.equals("Y", dsRs.getString(i, "ISCHECKED"))){
								logger.debug("test"  + dsRs.getString(i, "MN_CTRW_KDC").toString());
								
								dmlCode = "4"; // 삭제
							}else{

								dmlCode = "2"; // 수정
							}
						}	
						
						tedavo.setLS_CHGM(requestHelper.getUserID());
						tedavo.setDML_CODE(dmlCode);
						
						dsRsList.add(i,tedavo) ;
					}

					logger.debug(dsRsList.toString());
					logger.debug("dsRsList  = >>"  +  dsRsList.toString());	
					medaVo.setEssDcmAmnList(dsRsList);
				}	


				essDcmAmnService.saveEssDcmAmnList(medaVo);		
				sendData(response, platformData, 1, "result.message.save.success");
				
				
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
    
	}
	
	
}
