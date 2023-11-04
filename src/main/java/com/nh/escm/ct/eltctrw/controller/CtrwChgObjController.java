package com.nh.escm.ct.eltctrw.controller;

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
import com.nh.escm.common.vo.SQLNames.PortalSequenceKeySeqName;
import com.nh.escm.ct.eltctrw.service.CtrwChgObjService;
import com.nh.escm.ct.eltctrw.vo.AddEltCtrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.AnwEltCtrwDrupVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDcmApdVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.EtcEltCtrwVO;
import com.nh.escm.ct.eltctrw.vo.EvtAmPmiwVO;
import com.nh.escm.ct.eltctrw.vo.LgqtTrFeePmiwVO;
import com.nh.escm.ct.eltctrw.vo.PmiwDtlVO;
import com.nh.escm.ct.eltctrw.vo.SctrwAllXpcPmtnCstVO;
import com.nh.escm.ct.eltctrw.vo.SctrwCtrMrgnRtVO;
import com.nh.escm.ct.eltctrw.vo.SctrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.SctrwNmlMrgnRtVO;
import com.nh.escm.ct.eltctrw.vo.SctrwPmtnEmpeDspcBrkVO;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.ctrwChgObjNames;
import com.nh.escm.util.SeqGenUtil;

@Controller
public class CtrwChgObjController extends AbstractController {
	
	@Autowired
	private CtrwChgObjService ctrwChgObjService;
	
	//계약서 변경 이력 상세 
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrwchg/retrieveCtrwChgObjList")
	public void retrieveCtrwChgObjList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay");
		String CAL_FROM    = requestHelper.getParameter("cal_from");
		String CAL_TO      = requestHelper.getParameter("cal_to");
		String CTRW_DRUP_DT   = requestHelper.getParameter("cal_st_dt");
		String MN_CTRW_KD  = requestHelper.getParameter("mn_Ctrw_Kd");
		String NA_TRPL_C = requestHelper.getParameter("edt_naTrplC");
		String MTALNM = requestHelper.getParameter("edt_mtalNm");
		String CTRW_IDVD_CHG_CHK = requestHelper.getParameter("ctrwIdvdChgChk");  //개별 변경일때만 true
		String BUYER_NA_TRPL_C = requestHelper.getGlnCode();  //개별 변경일때만 바이어로 조회
		String BUYER_ENO = requestHelper.getParameter("buyerEno");  
		String BUYER_DSC = requestHelper.getParameter("buyerDsc");// 바이어 구분

		logger.debug("CTRW_IDVD_CHG_CHK  => "  + CTRW_IDVD_CHG_CHK);
		if(!"TRUE".equals(CTRW_IDVD_CHG_CHK)){
			CTRW_IDVD_CHG_CHK = "";
		}
		
		logger.debug("cbo_contDay  => "  + CBO_CONTDAY);
		logger.debug("cal_from  => "  + CAL_FROM);
		logger.debug("cal_to  => "  + CAL_TO);
		logger.debug("ctrw_drup_dt  => "  + CTRW_DRUP_DT);
		logger.debug("mn_Ctrw_Kd  => "  + MN_CTRW_KD);
		logger.debug("NA_TRPL_C  => "  + NA_TRPL_C);
		logger.debug("MTALNM  => "  + MTALNM);
		logger.debug("CTRW_IDVD_CHG_CHK  => "  + CTRW_IDVD_CHG_CHK);
		logger.debug("BUYER_NA_TRPL_C  => "  + BUYER_NA_TRPL_C);
		logger.debug("BUYER_DSC  => "  + BUYER_DSC);

		try {
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper_re = new DataSetHelper("ds_rsclist");
			                                              
					
			dsHelper_re.addColumns(ctrwChgObjNames.class);
					
					List<Map<String, Object>> ctrwChgObjList = ctrwChgObjService.retrieveCtrwChgObjList(CBO_CONTDAY ,CAL_FROM ,CAL_TO ,CTRW_DRUP_DT ,MN_CTRW_KD ,NA_TRPL_C,MTALNM ,CTRW_IDVD_CHG_CHK ,BUYER_NA_TRPL_C ,BUYER_ENO,BUYER_DSC);
						for(Map<String, Object> map_re : ctrwChgObjList) {
							dsHelper_re.setData(map_re);
						}
				    platformData.addDataSet(dsHelper_re.getDataSet());
			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		} 
   
	}
	

	@RequestMapping(method=RequestMethod.POST, value = "rest/excel/downloadExcelCtrwChgObjList")
		public void downloadExcelCtrwChgObjList(HttpServletRequest request, HttpServletResponse response) {
			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			
			
			String fileName = request.getParameter("fileName");  //파일명
			
			
			String FV_MNCTRWKDNM = request.getParameter("fv_mnCtrwKdNm"); //계약서 종류
			
			logger.debug("  FV_MNCTRWKDNM  = >>"     + FV_MNCTRWKDNM );
			
			
			
			String MTALNM = request.getParameter("edt_mtalNm");

			if(StringUtils.isNotEmpty(FV_MNCTRWKDNM)) {
				try {
					FV_MNCTRWKDNM  = URLDecoder.decode(FV_MNCTRWKDNM, "UTF-8");

					
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			if(StringUtils.isNotEmpty(MTALNM)) {
				try {
					MTALNM  = URLDecoder.decode(MTALNM, "UTF-8");

					
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			
			logger.debug("  MTALNM  = >>"     + MTALNM );
			logger.debug("  FV_MNCTRWKDNM  = >>"     + FV_MNCTRWKDNM );
			logger.debug("  fileName  = >>"     + fileName );
			

			String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay");
			String CAL_FROM    = requestHelper.getParameter("cal_from");
			String CAL_TO      = requestHelper.getParameter("cal_to");
			String CTRW_DRUP_DT   = requestHelper.getParameter("cal_st_dt");
			String MN_CTRW_KD  = requestHelper.getParameter("mn_Ctrw_Kd");
			String NA_TRPL_C = requestHelper.getParameter("edt_naTrplC");
			String CTRW_IDVD_CHG_CHK = "";
			String BUYER_NA_TRPL_C = "";
			String BUYER_ENO = requestHelper.getParameter("buyerEno");
			String BUYER_DSC = requestHelper.getParameter("buyerDsc");// 바이어 구분

			logger.debug("cbo_contDay  => "  + CBO_CONTDAY);
			logger.debug("cal_from  => "  + CAL_FROM);
			logger.debug("cal_to  => "  + CAL_TO);
			logger.debug("ctrw_drup_dt  => "  + CTRW_DRUP_DT);
			logger.debug("mn_Ctrw_Kd  => "  + MN_CTRW_KD);
			logger.debug("NA_TRPL_C  => "  + NA_TRPL_C);
			logger.debug("MTALNM  => "  + MTALNM);
			logger.debug("BUYER_DSC  => "  + BUYER_DSC);
			

			try {                                          
				List<Map<String, Object>> ctrwChgObjList = ctrwChgObjService.retrieveCtrwChgObjList(CBO_CONTDAY ,CAL_FROM ,CAL_TO ,CTRW_DRUP_DT ,MN_CTRW_KD ,NA_TRPL_C,MTALNM ,CTRW_IDVD_CHG_CHK ,BUYER_NA_TRPL_C ,BUYER_ENO, BUYER_DSC);
				
				
				String[] header =   {"첨부파일변경"           ,"계약서문구변경"  ,"계약서종류"  ,"거래처코드"  ,"계약자상호","계약기간","계약일자","상태" ,"개별서 변경 사항"};
				String[] keyIndex = {"DCM_APD_CHG_CHK_TEMPNM" ,"STYL_AMM_CHG_CHK_TEMPNM"   ,"MN_CTRW_KD_NM","NA_TRPL_C","MTALNM"     ,"CTR_DT" ,"CTRW_DRUP_DT" ,"STS_NM","CHG_NM"};			
				
				AbstractModel model = new DefaultModel("계약변경대상조회", header, keyIndex, ctrwChgObjList);
				ExcelFileMaker excelMaker = new ExcelFileMaker();
				excelMaker.createDataSheet(model);			
				
				
				Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
				searchMap.put("출력화면", "계약변경대상조회");
				
				searchMap.put("메인계약서종류", FV_MNCTRWKDNM);
				searchMap.put("계약자 상호", MTALNM);
				searchMap.put("거래처코드", NA_TRPL_C);
				
					
				if("1".equals(CBO_CONTDAY)){
					searchMap.put("조회시작일", CAL_FROM +" ~" + CAL_TO   );
				}else if("2".equals(CBO_CONTDAY)){
					searchMap.put("조회종료일", CAL_FROM +" ~" + CAL_TO   );
				}
				searchMap.put("계약일자", CTRW_DRUP_DT);
				
				

				excelMaker.createSearchSheet(searchMap);
				excelMaker.write(response, fileName);
				

				
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			} 
	   
		}
//개약서 개별 변경 엑셀 	
	@RequestMapping(method=RequestMethod.POST, value = "rest/excel/downloadExcelCtrwChgIdvdList")
	public void downloadExcelCtrwChgIndividualList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		
		
		String fileName = request.getParameter("fileName");  //파일명
		
		
		String FV_MNCTRWKDNM = request.getParameter("fv_mnCtrwKdNm"); //계약서 종류
		
		logger.debug("  FV_MNCTRWKDNM  = >>"     + FV_MNCTRWKDNM );
		
		
		
		String MTALNM = request.getParameter("edt_mtalNm");

		if(StringUtils.isNotEmpty(FV_MNCTRWKDNM)) {
			try {
				FV_MNCTRWKDNM  = URLDecoder.decode(FV_MNCTRWKDNM, "UTF-8");

				
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		if(StringUtils.isNotEmpty(MTALNM)) {
			try {
				MTALNM  = URLDecoder.decode(MTALNM, "UTF-8");

				
			} catch (UnsupportedEncodingException e) {
				logger.info(e.getMessage());
			}
		}
		
		
		logger.debug("  MTALNM  = >>"     + MTALNM );
		logger.debug("  FV_MNCTRWKDNM  = >>"     + FV_MNCTRWKDNM );
		logger.debug("  fileName  = >>"     + fileName );
		

		String CBO_CONTDAY = requestHelper.getParameter("cbo_contDay");
		String CAL_FROM    = requestHelper.getParameter("cal_from");
		String CAL_TO      = requestHelper.getParameter("cal_to");
		String CTRW_DRUP_DT   = requestHelper.getParameter("cal_st_dt");
		String MN_CTRW_KD  = requestHelper.getParameter("mn_Ctrw_Kd");
		String NA_TRPL_C = requestHelper.getParameter("edt_naTrplC");
		String CTRW_IDVD_CHG_CHK = "";
		String BUYER_NA_TRPL_C = "";
		String BUYER_ENO = requestHelper.getParameter("buyerEno");
		String BUYER_DSC = requestHelper.getParameter("buyerDsc");// 바이어 구분

		logger.debug("cbo_contDay  => "  + CBO_CONTDAY);
		logger.debug("cal_from  => "  + CAL_FROM);
		logger.debug("cal_to  => "  + CAL_TO);
		logger.debug("ctrw_drup_dt  => "  + CTRW_DRUP_DT);
		logger.debug("mn_Ctrw_Kd  => "  + MN_CTRW_KD);
		logger.debug("NA_TRPL_C  => "  + NA_TRPL_C);
		logger.debug("MTALNM  => "  + MTALNM);
		logger.debug("BUYER_DSC  => " + BUYER_DSC);

		try {                                          
			List<Map<String, Object>> ctrwChgObjList = ctrwChgObjService.retrieveCtrwChgObjList(CBO_CONTDAY ,CAL_FROM ,CAL_TO ,CTRW_DRUP_DT ,MN_CTRW_KD ,NA_TRPL_C,MTALNM ,CTRW_IDVD_CHG_CHK ,BUYER_NA_TRPL_C ,BUYER_ENO, BUYER_DSC);
			
			
			String[] header =   {"계약서종류"  ,"거래처코드"  ,"계약자상호","계약기간","계약일자","상태" ,"개별서 변경 사항"};
			String[] keyIndex = {"MN_CTRW_KD_NM","NA_TRPL_C","MTALNM"     ,"CTR_DT" ,"CTRW_DRUP_DT" ,"STS_NM","CHG_NM"};			
			
			AbstractModel model = new DefaultModel("계약변경대상조회", header, keyIndex, ctrwChgObjList);
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);			
			
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "계약변경대상조회");
			
			searchMap.put("메인계약서종류", FV_MNCTRWKDNM);
			searchMap.put("계약자 상호", MTALNM);
			searchMap.put("거래처코드", NA_TRPL_C);
			
				
			if("1".equals(CBO_CONTDAY)){
				searchMap.put("조회시작일", CAL_FROM +" ~" + CAL_TO   );
			}else if("2".equals(CBO_CONTDAY)){
				searchMap.put("조회종료일", CAL_FROM +" ~" + CAL_TO   );
			}
			searchMap.put("계약일자", CTRW_DRUP_DT);
			
			

			excelMaker.createSearchSheet(searchMap);
			excelMaker.write(response, fileName);
			

			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
		} 
   
	}	
	
		
//계약서 첨부, 계약서 문구 일관 변경 관련값 세팅	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrwchg/saveCtrwChgObj")
	public void saveCtrwChgObj(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();		
	
			AnwEltCtrwDrupVO maecd = new AnwEltCtrwDrupVO();
		
			DataSet dsR             = requestHelper.getDataSet("ds_rsclist");

				
			//전자계약서관리
				if(dsR != null){
					
					logger.debug(dsR.saveXml());
					
					List<AnwEltCtrwDrupVO> tmpDsRList = requestHelper.getValueObjects(AnwEltCtrwDrupVO.class, dsR);
					List<AnwEltCtrwDrupVO> dsRList = new ArrayList<AnwEltCtrwDrupVO>();
					AnwEltCtrwDrupVO aecdvo ;
					
					
					for(int i = 0; i < dsR.getRowCount(); i++){
						aecdvo = tmpDsRList.get(i);
						
						aecdvo.setELT_CTRW_NO(aecdvo.getELT_CTRW_NO());   //기존 계약 번호
						aecdvo.setCHG_SQNO(aecdvo.getCHG_SQNO());      //기존 계약 번호
						aecdvo.setSTYL_AMM_CHG_CHK(aecdvo.getSTYL_AMM_CHG_CHK_TEMP());   //기존 계약 번호
						aecdvo.setDCM_APD_CHG_CHK(aecdvo.getDCM_APD_CHG_CHK_TEMP());   //기존 계약 번호
						aecdvo.setLS_CHGM(requestHelper.getUserID());
						
						dsRList.add(i, aecdvo);
					}
						
					
					maecd.setAnwEltCtrwDrupVoList(dsRList);
					
					
				}
				
				ctrwChgObjService.saveCtrwChgObj(maecd);
				sendData(response, platformData, 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	
}
