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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.ct.eltctrwamn.service.CtrwStylService;
import com.nh.escm.ct.eltctrwamn.vo.EtcEltStylAmnVO;
import com.nh.escm.ct.eltctrwamn.vo.SQLMapNames.CodeNames;
import com.nh.escm.ct.eltctrwamn.vo.SQLMapNames.CtrwStylNames;
import com.nh.escm.util.SeqGenUtil;

@Controller
public class CtrwStylController extends AbstractController {
	
	
	
	@Autowired
	private CtrwStylService ctrwStylService;
	
	//전자 계약서 조회 (협력업체)
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrwamn/retrieveCtrwStylList")
	public void retrieveCtrwStylList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		
		
		try {
				PlatformData platformData = new PlatformData();
			
				String CTRW_KDC = requestHelper.getParameter("cbo_mnCtrwKdM"); //메인계약서종류
				String CTRW_STY_VER = requestHelper.getParameter("edt_ctrwStyVer"); //조회 시작일
				String BUYER_DSC = requestHelper.getParameter("buyerDsc");	//바이어 구분 11-상품본부 31-수산 32-축산
				
				logger.debug("CTRW_KDC  :   "+ CTRW_KDC);
				logger.debug("CTRW_STY_VER  :  "+ CTRW_STY_VER);
				logger.debug("BUYER_DSC  :  " + BUYER_DSC);
				
				DataSetHelper dsHelper_re = new DataSetHelper("ds_rsclist");
				
				dsHelper_re.addColumns(CtrwStylNames.class);
				
			
				List<Map<String, Object>> rscList = ctrwStylService.retrieveCtrwStylList(CTRW_KDC, CTRW_STY_VER, BUYER_DSC);

				
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
	
	
	//전자 계약서 조회 (협력업체)
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrwamn/retrieveCtrwStyDsclList")
	public void retrieveCtrwStylDscList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		
		
		try {
				PlatformData platformData = new PlatformData();
			
				String CTRW_KDC = requestHelper.getParameter("cbo_mnCtrwKdM"); //메인계약서종류
				String CTRW_STY_VER = requestHelper.getParameter("edt_ctrwStyVer"); //조회 시작일
				
				logger.debug("CTRW_KDC  :   "+ CTRW_KDC);
				logger.debug("CTRW_STY_VER  :  "+ CTRW_STY_VER);
				
				
				
				
				DataSetHelper dsHelper_re = new DataSetHelper("ds_in");
				
				dsHelper_re.addColumns(CtrwStylNames.class);
				
			
				List<Map<String, Object>> rscList = ctrwStylService.retrieveCtrwStylDscList(CTRW_KDC, CTRW_STY_VER);

				
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
	
	//전자 계약서 양식 버젼 (콤보 )
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrwamn/retrieveCodelList")
	public void retrieveCodelList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		
		
		try {
				PlatformData platformData = new PlatformData();
				
				
				DataSetHelper dsHelper = new DataSetHelper("ds_ctrwKdc");
				
				dsHelper.addColumns(CodeNames.class);
				
			
				List<Map<String, Object>> rscList = ctrwStylService.retrieveCodelList();

				
				for(Map<String, Object> map_re : rscList) {
					dsHelper.setData(map_re);
				}
					
					platformData.addDataSet(dsHelper.getDataSet());

		
		
				sendData(response, platformData);
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
    
	}
	
	
	

	
	//전자 계약서 양식 등록
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrwamn/insertContractForm")
	public void insertContractForm(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			
			PlatformData platformData = new PlatformData();
			EtcEltStylAmnVO eesaVo = new EtcEltStylAmnVO();
			String dmlCode = "";
			DataSet dsIn             = requestHelper.getDataSet("ds_in");
	
				if(dsIn != null){
logger.debug("  CTRW_CNTN = >>  "+ dsIn.getString(0, "CTRW_CNTN").toString() );					
					
					
					dmlCode = "";
					logger.debug(dsIn.saveXml());
					List<EtcEltStylAmnVO> tmpdsInList = requestHelper.getValueObjects(EtcEltStylAmnVO.class, dsIn);
					List<EtcEltStylAmnVO> dsInList = new ArrayList<EtcEltStylAmnVO>();
					EtcEltStylAmnVO ecdvo ;

					
					for(int i = 0; i < dsIn.getRowCount(); i++){
						ecdvo = tmpdsInList.get(i);
						
						

						ecdvo.setDML_CODE("1");
						ecdvo.setFS_RGM(requestHelper.getUserID());
						ecdvo.setLS_CHGM(requestHelper.getUserID());
						dsInList.add(i,ecdvo) ;
						
					}
					

					eesaVo.setEtcEltStylAmlVoList(dsInList);
				}	


				ctrwStylService.saveCtrwStyl(eesaVo);		
				sendData(response, platformData, 1, "result.message.save.success");
				
				
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
    
	}
	
	
	//전자 계약서 양식 수정 (사용 여부만 수정 가능 ) 
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrwamn/updateContractForm")
	public void updateContractForm(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
//				PlatformData platformData = new PlatformData();
//				
//				String CTRW_KDC = requestHelper.getParameter("CTRW_KDC"); 
//				String CTRW_STY_VER = requestHelper.getParameter("CTRW_STY_VER"); 
//				String UYN = requestHelper.getParameter("UYN"); 
//
//				logger.debug("CTRW_KDC["  + CTRW_KDC  +"] CTRW_STY_VER["+CTRW_STY_VER + "] UYN[" +UYN + "]"  );
//				
//				int rst =  ctrwStylService.updateCtrwStyl(CTRW_KDC, CTRW_STY_VER, UYN);
//
//				if(rst < 0){
//					sendData(response, new PlatformData(), -1, "error.message.server.exception");				
//				}else{
//				
//					sendData(response, platformData, 1, "result.message.save.success");
//				}
			
			
			PlatformData platformData = new PlatformData();
			EtcEltStylAmnVO eesaVo = new EtcEltStylAmnVO();
			String dmlCode = "";
			DataSet dsIn             = requestHelper.getDataSet("ds_in");
	
				if(dsIn != null){
logger.debug("  CTRW_CNTN = >>  "+ dsIn.getString(0, "CTRW_CNTN").toString() );					
					
					dmlCode = "";
					logger.debug(dsIn.saveXml());
					List<EtcEltStylAmnVO> tmpdsInList = requestHelper.getValueObjects(EtcEltStylAmnVO.class, dsIn);
					List<EtcEltStylAmnVO> dsInList = new ArrayList<EtcEltStylAmnVO>();
					EtcEltStylAmnVO ecdvo ;

					
					for(int i = 0; i < dsIn.getRowCount(); i++){
						ecdvo = tmpdsInList.get(i);
						
						

						ecdvo.setDML_CODE("2");
						ecdvo.setFS_RGM(dsIn.getString(0, "FS_RGM").toString() );
						ecdvo.setFSRG_DTM(dsIn.getString(0, "FSRG_DTM").toString() );
						
						ecdvo.setLS_CHGM(requestHelper.getUserID());
						dsInList.add(i,ecdvo) ;
						
					}
					

					eesaVo.setEtcEltStylAmlVoList(dsInList);
					ctrwStylService.saveCtrwStyl(eesaVo);		
					sendData(response, platformData, 1, "result.message.save.success");
			
				}
							
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
    
	}
	
	
	
	
}
