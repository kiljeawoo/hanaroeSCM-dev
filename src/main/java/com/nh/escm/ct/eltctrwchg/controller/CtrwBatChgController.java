package com.nh.escm.ct.eltctrwchg.controller;

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

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.LinkedHashMap;
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
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMaker;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.ct.eltctrwchg.service.CtrwBatChgService;
import com.nh.escm.ct.eltctrwchg.vo.CtrwBatChgVO;
import com.nh.escm.ct.eltctrwchg.vo.SQLMapNames.CntnNames;
import com.nh.escm.ct.eltctrwchg.vo.SQLMapNames.CtrwBatChgNames;
import com.nh.escm.ct.eltctrwchg.vo.SQLMapNames.StyVerNames;

@Controller
public class CtrwBatChgController extends AbstractController {
	
	
	
	@Autowired
	private CtrwBatChgService ctrwBatChgService;
	
	//콤보 박스 조회
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrwchg/retrieveCtrwBatChgCboList")
	public void retrieveCtrwBatChgCboList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		
		
		try {
				PlatformData platformData = new PlatformData();
			
				String CTRW_KDC = requestHelper.getParameter("cbo_mnCtrwKdM"); //메인계약서종류
				
				logger.debug("CTRW_KDC  :   "+ CTRW_KDC);
				
				DataSetHelper dsHelper_styVer = new DataSetHelper("ds_ctrwStyver");
				DataSetHelper dsHelper_cntn = new DataSetHelper("ds_ctrwCntn");
				
				dsHelper_styVer.addColumns(StyVerNames.class);
				dsHelper_cntn.addColumns(CntnNames.class);
				
			
				List<Map<String, Object>> styVerList = ctrwBatChgService.retrieveStyVerList(CTRW_KDC);
				
				for(Map<String, Object> map_styVer : styVerList) {
					dsHelper_styVer.setData(map_styVer);
				}
					
					platformData.addDataSet(dsHelper_styVer.getDataSet());
					
					
				List<Map<String, Object>> cntnList = ctrwBatChgService.retrieveCntnList(CTRW_KDC);
				
				for(Map<String, Object> map_cntn : cntnList) {
					dsHelper_cntn.setData(map_cntn);
				}
					
					platformData.addDataSet(dsHelper_cntn.getDataSet());	

		
		
				sendData(response, platformData);
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
    
	}
	
//	
	@RequestMapping(method=RequestMethod.POST, value = "rest/ct/eltctrwchg/retrieveCtrwBatChgList")
	public void retrieveCtrwBatChgList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
				PlatformData platformData = new PlatformData();
			
				String CTRW_KDC = requestHelper.getParameter("cbo_mnCtrwKdM"); //메인계약서종류
				String CTRW_STY_VER = requestHelper.getParameter("edt_ctrwStyVer"); //조회 시작일
				
				logger.debug("CTRW_KDC  :   "+ CTRW_KDC);
				logger.debug("CTRW_STY_VER  :  "+ CTRW_STY_VER);

				DataSetHelper dsHelper_re = new DataSetHelper("ds_rsclist");
				
				dsHelper_re.addColumns(CtrwBatChgNames.class);
			
				List<Map<String, Object>> rscList = ctrwBatChgService.retrieveCtrwBatChgList(CTRW_KDC, CTRW_STY_VER);
				
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

	@RequestMapping(method=RequestMethod.GET, value = "rest/excel/downloadExcelCtrwBatChg")
	public void downloadExcelCtrwBatChg(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String fileName = request.getParameter("fileName");  //파일명
		
		String FV_MNCTRWKDNM = request.getParameter("fv_mnCtrwKdNm"); //계약서 종류

		
		if(StringUtils.isNotEmpty(FV_MNCTRWKDNM)) {
			try {
				FV_MNCTRWKDNM  = URLDecoder.decode(FV_MNCTRWKDNM, "UTF-8");

				
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		try {
			
				String CTRW_KDC = requestHelper.getParameter("cbo_mnCtrwKdM"); //메인계약서종류
				String CTRW_STY_VER = requestHelper.getParameter("edt_ctrwStyVer"); //계약서 버젼
			
				List<Map<String, Object>> rscList = ctrwBatChgService.retrieveCtrwBatChgList(CTRW_KDC, CTRW_STY_VER);
				
				String[] header =   {"계약서 종류"  ,"계약자 거래처코드"  ,"계약자 상호","계약서 버젼"  ,"계약번호"};
				String[] keyIndex = {"SIMP_CNM"     ,"NA_TRPL_C"          ,"MTALNM"     ,"CTRW_STY_VER" ,"ELT_CTRW_NO"};			
				
				AbstractModel model = new DefaultModel("전자계약서조회", header, keyIndex, rscList);
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);			
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("출력화면", "계약문구일괄변경");
				
				searchMap.put("계약서종류", FV_MNCTRWKDNM);
				searchMap.put("계약서 버젼", CTRW_STY_VER);

				excelMaker.createSearchSheet(searchMap);
				excelMaker.write(response, fileName);
		
				
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			}
    
	}
	
	
	
	
	//전자 계약서 양식 등록
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrwchg/saveCtrwBatChgList")
	public void saveCtrwBatChgList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			
			
			PlatformData platformData = new PlatformData();
			CtrwBatChgVO mcbcVo = new CtrwBatChgVO();
	//		String dmlCode = "";
			
			String CTRW_STY_CHG_VER = requestHelper.getParameter("edt_ctrwStyChgVer"); //메인계약서종류
			
			
			DataSet dsIn             = requestHelper.getDataSet("ds_rsclist");
	
				if(dsIn != null){					
//					dmlCode = "";
					logger.debug(dsIn.saveXml());
					
					List<CtrwBatChgVO> tmpdsInList = requestHelper.getValueObjects(CtrwBatChgVO.class, dsIn);
					List<CtrwBatChgVO> dsInList = new ArrayList<CtrwBatChgVO>();
					CtrwBatChgVO cbcvo ;

					
					for(int i = 0; i < dsIn.getRowCount(); i++){
	
						cbcvo = tmpdsInList.get(i);

//String MnCtrwKdc = dsIn.getString(0, "MN_CTRW_KDC").toString() ;
						

						cbcvo.setCTRW_STY_CHG_VER_YN("Y");
						cbcvo.setCTRW_STY_CHG_VER(CTRW_STY_CHG_VER);

//						cbcvo.setDML_CODE("2");  //수정 
						cbcvo.setLS_CHGM(requestHelper.getUserID());
						dsInList.add(i,cbcvo) ;
						
					}
					

					mcbcVo.setCtrwBatChgVOVoList(dsInList);
				}	


				ctrwBatChgService.saveCtrwBatChg(mcbcVo);		
//				sendData(response, platformData, 1, "result.message.save.success");
				
				
			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
    
	}
	
	
}
