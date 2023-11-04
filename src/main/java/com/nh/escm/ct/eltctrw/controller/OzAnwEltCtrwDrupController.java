package com.nh.escm.ct.eltctrw.controller;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
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
import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
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
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nh.escm.ct.eltctrw.service.AnwEltCtrwDrupService;
import com.nh.escm.ct.eltctrw.service.EltCtrwService;
import com.nh.escm.ct.eltctrw.vo.AddEltCtrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.AnwEltCtrwDrupVO;
import com.nh.escm.ct.eltctrw.vo.DlvgCompEmpDspcPmiwVO;
import com.nh.escm.ct.eltctrw.vo.DspcPerWrkPrdPmiwVO;
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
import com.nh.escm.ct.eltctrwamn.vo.EtcEltStylAmnVO;



@RestController
public class OzAnwEltCtrwDrupController extends AbstractController {
	@Autowired
	private EltCtrwService eltctrwService; // 전자계약
	
	@Autowired
	private AnwEltCtrwDrupService anwEltCtrwDrupService;
	
	/* 출력
	 *  화면ID : OMG_DS_SC_2111, OMG_DS_SC_2113
	 *  화면설명 : 상품본부 계약서 미리보기
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/ct/eltctrw/osEltctrw")
	public RestResult osEltctrwTypesOZ(HttpServletRequest request, HttpServletResponse response, String ELT_CTRW_NO, String CHG_SQNO, String TEMP_YN) {
		try{			
			String mn_Ctrw_Kdc  = "" ;
			String add_Ctrw_Yn = "" ;
			String pmiw_Yn     = "" ;
			String sctrw_Yn    = "" ; // SCTRW_YN /*특약서여부  */
			String etc_Ctrw_Yn = "" ;
			String sealOmitYn = "N"; // 직인생략여부
			
			List<List<?>> all_list = new ArrayList<List<?>>(); //리턴 하는 리스트 
			
			//타이틀
			List<Map<String,Object>> main = new ArrayList<Map<String,Object>>();
			List<AnwEltCtrwDrupVO> mainlist = anwEltCtrwDrupService.selectSearch(ELT_CTRW_NO ,CHG_SQNO);
			Map<String,Object> _main = new HashMap<String, Object>();
			
			/*
			 *  계약서 종류 코드 길이가 맞춤(3자리)
			 */
			String ver = "";
			if (StringUtils.trim(mainlist.get(0).getMN_CTRW_KD()).length() == 3) {
				ver = "";
			} else if (StringUtils.trim(mainlist.get(0).getMN_CTRW_KD()).length() == 1) {
				ver = "10";
			} else {
				ver = "1";
			}

			mn_Ctrw_Kdc = ver + mainlist.get(0).getMN_CTRW_KD();
			add_Ctrw_Yn = mainlist.get(0).getADD_CTRW_YN();
			pmiw_Yn = mainlist.get(0).getPMIW_YN();
			sctrw_Yn = mainlist.get(0).getSCTRW_YN(); // 특약서
			etc_Ctrw_Yn = mainlist.get(0).getETC_CTRW_YN();
			sealOmitYn = mainlist.get(0).getSEAL_OMIT_YN(); // 직인생략여부, 생략일 때 직인파일 Base64생성 안함

			/****************************
			 * [1] 메인계약서
			 ****************************/
			_main.put("ctr_Ed_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTR_ED_DT()));
			_main.put("ctr_St_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTR_ST_DT()));
			_main.put("ctr_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTR_DT()));
			_main.put("ctrw_Drup_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTRW_DRUP_DT()));
			_main.put("bzno", StringUtil.converNullToBlank(mainlist.get(0).getBZNO()));
			_main.put("addr", StringUtil.converNullToBlank(mainlist.get(0).getADDR()));
			_main.put("buyer_Addr", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_ADDR()));
			_main.put("mn_Ctrw_Kd", mn_Ctrw_Kdc);
			_main.put("add_Ctrw_Yn", add_Ctrw_Yn);
			_main.put("pmiw_Yn", pmiw_Yn);
			_main.put("sctrw_Yn", sctrw_Yn);
			_main.put("etc_Ctrw_Yn", etc_Ctrw_Yn);
			_main.put("ceo", StringUtil.converNullToBlank(mainlist.get(0).getCEO()));
			_main.put("mtalnm", StringUtil.converNullToBlank(mainlist.get(0).getMTALNM()));
			_main.put("na_Trpl_C", StringUtil.converNullToBlank(mainlist.get(0).getNA_TRPL_C()));
			_main.put("buyer_Blg", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_BLG()));
			_main.put("buyer_Nm", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_NM()));
			_main.put("buyer_Na_Trpl_C", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_NA_TRPL_C()));
			_main.put("ctr_Chrr_Mtalnm", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_MTALNM()));
			_main.put("ctr_Chrr_Repmn", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REPMN()));
			_main.put("ctr_Chrr_Repmn_Dtynm", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REP_DTYNM()));
			_main.put("ctr_Chrr_Nm", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REP_DTYNM()) + " " + StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REPMN()));
			_main.put("la_Agnt", StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT()));
			_main.put("fgat_Prvt_C", StringUtil.converNullToBlank(mainlist.get(0).getFGAT_PRVT_C()));
			_main.put("colb_Comp_sgnt", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SGNT()));
			_main.put("colb_Comp_sgnt_dtm", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SGNT_DTM()));
			_main.put("colb_Comp_Seal_Apdflnm", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SEAL_APDFLNM()));
			_main.put("colb_Comp_Seal_Sys_Flnm", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SEAL_SYS_FLNM()));
			_main.put("buyer_Seal_Apdflnm", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SEAL_APDFLNM()));
			_main.put("buyer_Seal_Sys_Flnm", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SEAL_SYS_FLNM()));
			_main.put("copNo", filterCopno(StringUtil.converNullToBlank(mainlist.get(0).getCOPNO())));
			_main.put("rrNo", StringUtil.converNullToBlank(mainlist.get(0).getRRNO()));
			_main.put("la_Agnt_Dtynm", StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT_DTYNM()));
			_main.put("la_Agnt_Nm", StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT_DTYNM()) + " " + StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT()));
			_main.put("aut_xtn_yn", StringUtil.converNullToBlank(mainlist.get(0).getCTR_PRD_AUT_XTN_YN()));
			_main.put("buyer_sgnt", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SGNT()));
			_main.put("buyer_sgnt_dt", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SGNT_DT()));
			if (TEMP_YN != null && "Y".equals(TEMP_YN)) {
				_main.put("temp_yn", "Y");
			} else {
				_main.put("temp_yn", "");
			}
			_main.put("atch_cnt", StringUtil.converNullToBlank(mainlist.get(0).getATCH_CTR_CNT()));
			_main.put("clean_yn", StringUtil.converNullToBlank(mainlist.get(0).getCLEAN_YN()));
			_main.put("seal_omit_yn", sealOmitYn);

			// 5 특약매입( ) 거래 계약서
			if ("105".equals(mn_Ctrw_Kdc)) {
				_main.put("mn_Ctrw_Kdnm", "");
			} else {
				_main.put("mn_Ctrw_Kdnm", StringUtil.converNullToBlank(mainlist.get(0).getMN_CTRW_KDNM()));
			}

			// 협력업체인감
			String COLB_COMP_SEAL_SYS_FLNM = mainlist.get(0).getCOLB_COMP_SEAL_SYS_FLNM();
			String tempPath = Configurer.getProperty("file.realElt.path");
			File dir = new File(tempPath);
			if (!"Y".equals(sealOmitYn) && StringUtils.isNotEmpty(COLB_COMP_SEAL_SYS_FLNM)) {
				String baseImage = "";
				try {
					File f = FileUtils.getFile(dir, COLB_COMP_SEAL_SYS_FLNM);
					baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
				} catch (IOException e) {
					logger.error(e.getMessage(), e);
					baseImage = "";
				}

				if (!"".equals(baseImage)) {
					_main.put("colb_Comp_Seal_Sys_Flnm", "data:;base64," + baseImage);// 직인파일
				} else {
					_main.put("colb_Comp_Seal_Sys_Flnm", "");
				}
			} else {
				_main.put("colb_Comp_Seal_Sys_Flnm", "");
			}

			// 바이어인감
			String BUYER_SEAL_SYS_FLNM = mainlist.get(0).getBUYER_SEAL_SYS_FLNM();
			if (!"Y".equals(sealOmitYn) && StringUtils.isNotEmpty(BUYER_SEAL_SYS_FLNM)) {
				String baseImage = "";
				try {
					File f = FileUtils.getFile(dir, BUYER_SEAL_SYS_FLNM);
					baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
				} catch (IOException e) {
					logger.error(e.getMessage(), e);
					baseImage = "";
				}

				if (!"".equals(baseImage)) {
					_main.put("buyer_Seal_Sys_Flnm", "data:;base64," + baseImage);// 직인파일
				} else {
					_main.put("buyer_Seal_Sys_Flnm", "");
				}
			} else {
				_main.put("buyer_Seal_Sys_Flnm", "");
			}
			
			main.add(_main);

			/****************************
			 * [1-1] 워터마크 표시를 위한 전자계약 상태
			 ****************************/
			List<Map<String,Object>> mainSts = new ArrayList<Map<String,Object>>();
			Map<String,Object> _mainSts = new HashMap<String, Object>();
			_mainSts.put("sts_nm", StringUtil.converNullToBlank(mainlist.get(0).getSTS()));
			_mainSts.put("sts_dtm", StringUtil.converNullToBlank(mainlist.get(0).getLSCHG_DTM()));
			mainSts.add(_mainSts);
			
			/****************************
			 * [2] 메인계약서 상세내용
			 ****************************/
			List<EltCtrwDtlVO> eltCtrwDtllist = anwEltCtrwDrupService.selectEltCtrwDtl(ELT_CTRW_NO, CHG_SQNO);
			List<Map<String,Object>> eltCtrwDtl = new ArrayList<Map<String,Object>>();
			for (EltCtrwDtlVO vo : eltCtrwDtllist) {
				Map<String, Object> eltCtrwDtlMap = new HashMap<String, Object>();

				eltCtrwDtlMap.put("mn_Ctrw_Kdc", StringUtil.converNullToBlank(vo.getMN_CTRW_KDC()));
				eltCtrwDtlMap.put("cnr_Dt", StringUtil.converNullToBlank(vo.getCNR_DT()));
				eltCtrwDtlMap.put("psg_Mm", StringUtil.converNullToBlank(vo.getPSG_MM()));
				eltCtrwDtlMap.put("psg_Dd", StringUtil.converNullToBlank(vo.getPSG_DD()));
				eltCtrwDtlMap.put("etr_Fee", StringUtil.converNullToBlank(vo.getETR_FEE()));
				eltCtrwDtlMap.put("phd_Feert", StringUtil.converNullToBlank(vo.getPHD_FEERT()));
				eltCtrwDtlMap.put("phd_Feert1", StringUtil.converNullToBlank(vo.getPHD_FEERT1()));
				eltCtrwDtlMap.put("phd_Feert2", StringUtil.converNullToBlank(vo.getPHD_FEERT2()));
				eltCtrwDtlMap.put("lig_Pltpe", StringUtil.converNullToBlank(vo.getLIG_PLTPE()));
				eltCtrwDtlMap.put("mexp_Dd", StringUtil.converNullToBlank(vo.getMEXP_DD()));

				// 예비용 컬럼
				eltCtrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
				eltCtrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
				eltCtrwDtlMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
				eltCtrwDtlMap.put("etc4", StringUtil.converNullToBlank(vo.getETC4()));
				eltCtrwDtlMap.put("etc5", StringUtil.converNullToBlank(vo.getETC5()));
				eltCtrwDtlMap.put("etc6", StringUtil.converNullToBlank(vo.getETC6()));
				eltCtrwDtlMap.put("etc7", StringUtil.converNullToBlank(vo.getETC7()));
				eltCtrwDtlMap.put("etc8", StringUtil.converNullToBlank(vo.getETC8()));
				eltCtrwDtlMap.put("etc9", StringUtil.converNullToBlank(vo.getETC9()));
				eltCtrwDtlMap.put("etcA", StringUtil.converNullToBlank(vo.getETCA()));

				String strRt = StringUtil.converNullToBlank(vo.getRT());
				strRt = strRt.replaceAll(" ", "&nbsp;");
				strRt = strRt.replaceAll("\n", "<br/>");
				eltCtrwDtlMap.put("rt", strRt);
				eltCtrwDtlMap.put("blmGrmy", StringUtil.converNullToBlank(vo.getBLM_GRMY()));
				eltCtrwDtlMap.put("wrsPrmPy", StringUtil.converNullToBlank(vo.getWRS_PRM_PY()));
				eltCtrwDtlMap.put("grmy", StringUtil.converNullToBlank(vo.getGRMY()));
				eltCtrwDtlMap.put("wrsSpyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
				eltCtrwDtlMap.put("ctrClo", StringUtil.converNullToBlank(vo.getCTR_CLO()));
				eltCtrwDtlMap.put("ctrw_Tinm", StringUtil.converNullToBlank(vo.getCTRW_TINM()));
				eltCtrwDtlMap.put("brand_N", StringUtil.converNullToBlank(vo.getBRAND_N()));
				eltCtrwDtlMap.put("returnDate", StringUtil.converNullToBlank(vo.getRETURN_DATE()));
				eltCtrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));

				eltCtrwDtl.add(eltCtrwDtlMap);
			}
			
			/****************************
			 * [3]부가 계약서 
			 ****************************/
			
			// 현재 C(203번 선행물류는 메인계약서로 옮겼기에 사용하지 않음) 그러나 조회용으로 남겨둠			
			List<AddEltCtrwDtlVO> addEltCtrwDtlList ;
			List<Map<String,Object>> addEltCtrwDtl = new ArrayList<Map<String, Object>>();
			List<Map<String,Object>> addEltCtrwDtlB = new ArrayList<Map<String, Object>>();
			List<Map<String,Object>> addEltCtrwDtlC = new ArrayList<Map<String, Object>>();
			List<Map<String,Object>> addEltCtrwDtlD = new ArrayList<Map<String, Object>>();
			List<Map<String,Object>> addEltCtrwDtlE = new ArrayList<Map<String, Object>>();
			
			if ("1".equals(add_Ctrw_Yn)) {
				// 부가계약서가 있는 경우
				addEltCtrwDtlList = anwEltCtrwDrupService.selectAddEltCtrwDtl(ELT_CTRW_NO, CHG_SQNO);

				for (AddEltCtrwDtlVO vo : addEltCtrwDtlList) {
					Map<String, Object> addEltCtrwDtlMap = new HashMap<String, Object>();
					String add_Ctrw_Kdc = vo.getADD_CTRW_KDC();

					// 부가계약서 코드 세팅
					if ("201".equals(add_Ctrw_Kdc)) {
						addEltCtrwDtlMap.put("add_ctrw_kdc", add_Ctrw_Kdc);
						addEltCtrwDtlMap.put("pb_ctrw_tinm", StringUtil.converNullToBlank(vo.getPB_CTRW_TINM()));
						addEltCtrwDtlMap.put("cnr_dt", StringUtil.converNullToBlank(vo.getCNR_DT()));
						addEltCtrwDtlMap.put("psg_mm", StringUtil.converNullToBlank(vo.getPSG_MM()));
						addEltCtrwDtlMap.put("psg_dd", StringUtil.converNullToBlank(vo.getPSG_DD()));
						addEltCtrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						addEltCtrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						addEltCtrwDtlMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
						addEltCtrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						addEltCtrwDtl.add(addEltCtrwDtlMap);
					} else if ("202".equals(add_Ctrw_Kdc)) {
						addEltCtrwDtlMap.put("add_ctrw_kdc", add_Ctrw_Kdc);
						addEltCtrwDtlMap.put("pb_ctrw_tinm", StringUtil.converNullToBlank(vo.getPB_CTRW_TINM()));
						addEltCtrwDtlMap.put("cnr_dt", StringUtil.converNullToBlank(vo.getCNR_DT()));
						addEltCtrwDtlMap.put("psg_mm", StringUtil.converNullToBlank(vo.getPSG_MM()));
						addEltCtrwDtlMap.put("psg_dd", StringUtil.converNullToBlank(vo.getPSG_DD()));
						addEltCtrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						addEltCtrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						addEltCtrwDtlMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
						addEltCtrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						addEltCtrwDtlB.add(addEltCtrwDtlMap);
					} else if ("203".equals(add_Ctrw_Kdc)) {
						addEltCtrwDtlMap.put("add_ctrw_kdc", add_Ctrw_Kdc);
						addEltCtrwDtlMap.put("pb_ctrw_tinm", StringUtil.converNullToBlank(vo.getPB_CTRW_TINM()));
						addEltCtrwDtlMap.put("cnr_dt", StringUtil.converNullToBlank(vo.getCNR_DT()));
						addEltCtrwDtlMap.put("psg_mm", StringUtil.converNullToBlank(vo.getPSG_MM()));
						addEltCtrwDtlMap.put("psg_dd", StringUtil.converNullToBlank(vo.getPSG_DD()));
						addEltCtrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						addEltCtrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						addEltCtrwDtlMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
						addEltCtrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						addEltCtrwDtlC.add(addEltCtrwDtlMap);
					} else if ("204".equals(add_Ctrw_Kdc)) {
						addEltCtrwDtlMap.put("add_ctrw_kdc", add_Ctrw_Kdc);
						addEltCtrwDtlMap.put("pb_ctrw_tinm", StringUtil.converNullToBlank(vo.getPB_CTRW_TINM()));
						addEltCtrwDtlMap.put("cnr_dt", StringUtil.converNullToBlank(vo.getCNR_DT()));
						addEltCtrwDtlMap.put("psg_mm", StringUtil.converNullToBlank(vo.getPSG_MM()));
						addEltCtrwDtlMap.put("psg_dd", StringUtil.converNullToBlank(vo.getPSG_DD()));
						addEltCtrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						addEltCtrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						addEltCtrwDtlMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
						addEltCtrwDtlMap.put("etc4", StringUtil.converNullToBlank(vo.getETC4()));
						addEltCtrwDtlMap.put("etc5", StringUtil.converNullToBlank(vo.getETC5()));
						addEltCtrwDtlMap.put("etc6", StringUtil.converNullToBlank(vo.getETC6()));
						addEltCtrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						addEltCtrwDtlD.add(addEltCtrwDtlMap);
					} else if ("205".equals(add_Ctrw_Kdc)) {
						addEltCtrwDtlMap.put("add_ctrw_kdc", add_Ctrw_Kdc);
						addEltCtrwDtlMap.put("pb_ctrw_tinm", StringUtil.converNullToBlank(vo.getPB_CTRW_TINM()));
						addEltCtrwDtlMap.put("cnr_dt", StringUtil.converNullToBlank(vo.getCNR_DT()));
						addEltCtrwDtlMap.put("psg_mm", StringUtil.converNullToBlank(vo.getPSG_MM()));
						addEltCtrwDtlMap.put("psg_dd", StringUtil.converNullToBlank(vo.getPSG_DD()));
						addEltCtrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						addEltCtrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						addEltCtrwDtlMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
						addEltCtrwDtlMap.put("etc4", StringUtil.converNullToBlank(vo.getETC4()));
						addEltCtrwDtlMap.put("etc5", StringUtil.converNullToBlank(vo.getETC5()));
						addEltCtrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						addEltCtrwDtlE.add(addEltCtrwDtlMap);
					}
				}
			}
			
			// 부가계약서 없을 경우
			if (addEltCtrwDtl.size() == 0) {
				addEltCtrwDtl.add(retrieveAddEltCtrwDtl("S201"));
			}
			if (addEltCtrwDtlB.size() == 0) {
				addEltCtrwDtlB.add(retrieveAddEltCtrwDtl("S202"));
			}
			if (addEltCtrwDtlC.size() == 0) {
				addEltCtrwDtlC.add(retrieveAddEltCtrwDtl("S203"));
			}
			if (addEltCtrwDtlD.size() == 0) {
				addEltCtrwDtlD.add(retrieveAddEltCtrwDtl("S204"));
			}
			if (addEltCtrwDtlE.size() == 0) {
				addEltCtrwDtlE.add(retrieveAddEltCtrwDtl("S205"));
			}
			
			/****************************
			 * [4] 약정서
			 ****************************/
			List<PmiwDtlVO> pmiwDtlList;
			List<Map<String, Object>> pmiwDtlA = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlB = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlC = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlD = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlE = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlF = new ArrayList<Map<String, Object>>();

			List<Map<String, Object>> evtAmPmiw = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> lgqtTrFeePmiw = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> dlvgCompEmpDspcPmiw = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> dspcPerWrkPrdPmiw = new ArrayList<Map<String, Object>>();

			if ("1".equals(pmiw_Yn)) {
				pmiwDtlList = anwEltCtrwDrupService.selectPmiwDtl(ELT_CTRW_NO, CHG_SQNO);

				for (PmiwDtlVO vo : pmiwDtlList) {
					Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
					String pmiw_Kdc = vo.getPMIW_KDC();

					if ("301".equals(pmiw_Kdc)) {
						pmiwDtlMap.put("pmiw_kdc", pmiw_Kdc);
						pmiwDtlMap.put("buy_am", StringUtil.converNullToBlank(vo.getBUY_AM()));
						pmiwDtlMap.put("evt_tinm", StringUtil.converNullToBlank(vo.getEVT_TINM()));
						pmiwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						pmiwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						pmiwDtlMap.put("ETC1", StringUtil.converNullToBlank(vo.getETC1()));
						pmiwDtlMap.put("ETC2", StringUtil.converNullToBlank(vo.getETC2()));
						pmiwDtlMap.put("ETC3", StringUtil.converNullToBlank(vo.getETC3()));
						pmiwDtlMap.put("ETC4", StringUtil.converNullToBlank(vo.getETC4()));
						pmiwDtlMap.put("ETC5", StringUtil.converNullToBlank(vo.getETC5()));
						pmiwDtlMap.put("ETC6", StringUtil.converNullToBlank(vo.getETC6()));
						pmiwDtlMap.put("ETC7", StringUtil.converNullToBlank(vo.getETC7()));
						pmiwDtlMap.put("ETC8", StringUtil.converNullToBlank(vo.getETC8()));
						pmiwDtlMap.put("ETC9", StringUtil.converNullToBlank(vo.getETC9()));
						pmiwDtlMap.put("ETCA", StringUtil.converNullToBlank(vo.getETCA()));
						pmiwDtlMap.put("ETCB", StringUtil.converNullToBlank(vo.getETCB()));
						pmiwDtlMap.put("ETCC", StringUtil.converNullToBlank(vo.getETCC()));
						pmiwDtlMap.put("ETCD", StringUtil.converNullToBlank(vo.getETCD()));
						pmiwDtlMap.put("ETCE", StringUtil.converNullToBlank(vo.getETCE()));
						pmiwDtlMap.put("ETCF", StringUtil.converNullToBlank(vo.getETCF()));
						pmiwDtlMap.put("ETCG", StringUtil.converNullToBlank(vo.getETCG()));
						pmiwDtlMap.put("ETCH", StringUtil.converNullToBlank(vo.getETCH()));
						pmiwDtlMap.put("ETCI", StringUtil.converNullToBlank(vo.getETCI()));
						pmiwDtlMap.put("ETCJ", StringUtil.converNullToBlank(vo.getETCJ()));
						pmiwDtlMap.put("ETCK", StringUtil.converNullToBlank(vo.getETCK()));
						pmiwDtlMap.put("ETCL", StringUtil.converNullToBlank(vo.getETCL()));
						pmiwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						pmiwDtlA.add(pmiwDtlMap);
					} else if ("302".equals(pmiw_Kdc)) {
						pmiwDtlMap.put("pmiw_kdc", pmiw_Kdc);
						pmiwDtlMap.put("buy_am", StringUtil.converNullToBlank(vo.getBUY_AM()));
						pmiwDtlMap.put("evt_tinm", StringUtil.converNullToBlank(vo.getEVT_TINM()));
						pmiwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						pmiwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						pmiwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						pmiwDtlB.add(pmiwDtlMap);

						List<EvtAmPmiwVO> evtAmPmiwList = anwEltCtrwDrupService.selectEvtAmPmiw(ELT_CTRW_NO, CHG_SQNO);
						if (evtAmPmiwList != null && evtAmPmiwList.size() > 0) {
							for (EvtAmPmiwVO Evtvo : evtAmPmiwList) {
								Map<String, Object> evtAmPmiwMap = new HashMap<String, Object>();
								evtAmPmiwMap.put("evt_Nm", StringUtil.converNullToBlank(Evtvo.getEVT_NM()));
								evtAmPmiwMap.put("evt_Cntn", StringUtil.converNullToBlank(Evtvo.getEVT_CNTN()));
								evtAmPmiwMap.put("evt_Plcnm", StringUtil.converNullToBlank(Evtvo.getEVT_PLCNM()));
								evtAmPmiwMap.put("evt_Wrs_Nm", StringUtil.converNullToBlank(Evtvo.getEVT_WRS_NM()));
								evtAmPmiwMap.put("evt_Rto_Cntn", StringUtil.converNullToBlank(Evtvo.getEVT_RTO_CNTN()));
								evtAmPmiwMap.put("ctr_Patn_Am", StringUtil.converNullToBlank(Evtvo.getCTR_PATN_AM()));
								evtAmPmiwMap.put("ctr_Chrr_Am", StringUtil.converNullToBlank(Evtvo.getCTR_CHRR_AM()));
								evtAmPmiwMap.put("am_Ss", StringUtil.converNullToBlank(Evtvo.getAM_SS()));
								evtAmPmiwMap.put("ctr_Patn_Rto", StringUtil.converNullToBlank(Evtvo.getCTR_PATN_RTO()));
								evtAmPmiwMap.put("ctr_Chrr_Rto", StringUtil.converNullToBlank(Evtvo.getCTR_CHRR_RTO()));
								evtAmPmiwMap.put("rto_Ss", StringUtil.converNullToBlank(Evtvo.getRTO_SS()));
								evtAmPmiwMap.put("ctr_Patn_Alot_Rto", StringUtil.converNullToBlank(Evtvo.getCTR_PATN_ALOT_RTO()));
								evtAmPmiwMap.put("ctr_Chrr_Alot_Rto", StringUtil.converNullToBlank(Evtvo.getCTR_CHRR_ALOT_RTO()));
								evtAmPmiwMap.put("alot_Rto_Ss", StringUtil.converNullToBlank(Evtvo.getALOT_RTO_SS()));
								evtAmPmiwMap.put("all_Xpc_Pmtn_Cst", StringUtil.converNullToBlank(Evtvo.getALL_XPC_PMTN_CST()));
								evtAmPmiwMap.put("clcn_Bass", StringUtil.converNullToBlank(Evtvo.getCLCN_BASS()));
								evtAmPmiw.add(evtAmPmiwMap);
							}
						} else {
							evtAmPmiw.add(retrieveEvtAmPmiw("S302-22222222"));
						}
					} else if ("303".equals(pmiw_Kdc)) {
						pmiwDtlMap.put("pmiw_kdc", pmiw_Kdc);
						pmiwDtlMap.put("buy_am", StringUtil.converNullToBlank(vo.getBUY_AM()));
						pmiwDtlMap.put("evt_tinm", StringUtil.converNullToBlank(vo.getEVT_TINM()));
						pmiwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						pmiwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						pmiwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						pmiwDtlC.add(pmiwDtlMap);

						List<LgqtTrFeePmiwVO> lgqtTrFeePmiwList = anwEltCtrwDrupService.selectLgqtTrFeePmiw(ELT_CTRW_NO, CHG_SQNO);
						if (lgqtTrFeePmiwList != null && lgqtTrFeePmiwList.size() > 0) {
							for (LgqtTrFeePmiwVO Evtvo : lgqtTrFeePmiwList) {
								Map<String, Object> lgqtTrFeePmiwMap = new HashMap<String, Object>();
								lgqtTrFeePmiwMap.put("feert_hmw_undr", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW_UNDR()));
								lgqtTrFeePmiwMap.put("feert_hmw1_hmw2", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW1_HMW2()));
								lgqtTrFeePmiwMap.put("feert_hmw2_hmw3", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW2_HMW3()));
								lgqtTrFeePmiwMap.put("feert_hmw3_hmw5", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW3_HMW5()));
								lgqtTrFeePmiwMap.put("feert_hmw5_hmw10", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW5_HMW10()));
								lgqtTrFeePmiwMap.put("feert_hmw10_ovr", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW10_OVR()));
								lgqtTrFeePmiwMap.put("feert_hmw_undr_tinm", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW_UNDR_TINM()));
								lgqtTrFeePmiwMap.put("feert_hmw1_hmw2_tinm", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW1_HMW2_TINM()));
								lgqtTrFeePmiwMap.put("feert_hmw2_hmw3_tinm", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW2_HMW3_TINM()));
								lgqtTrFeePmiwMap.put("feert_hmw3_hmw5_tinm", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW3_HMW5_TINM()));
								lgqtTrFeePmiwMap.put("feert_hmw5_hmw10_tinm", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW5_HMW10_TINM()));
								lgqtTrFeePmiwMap.put("feert_hmw10_ovr_tinm", StringUtil.converNullToBlank(Evtvo.getFEERT_HMW10_OVR_TINM()));
	
								lgqtTrFeePmiw.add(lgqtTrFeePmiwMap);
							}
						} else {
							lgqtTrFeePmiw.add(retrieveLgqtTrFeePmiw("S303"));
						}
					} else if ("304".equals(pmiw_Kdc)) {
						pmiwDtlMap.put("pmiw_kdc", pmiw_Kdc);
						pmiwDtlMap.put("buy_am", StringUtil.converNullToBlank(vo.getBUY_AM()));
						pmiwDtlMap.put("evt_tinm", StringUtil.converNullToBlank(vo.getEVT_TINM()));
						pmiwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						pmiwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						pmiwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						pmiwDtlD.add(pmiwDtlMap);

						List<DlvgCompEmpDspcPmiwVO> dlvgCompEmpDspcPmiwList = anwEltCtrwDrupService.selectDlvgCompEmpDspcPmiw(ELT_CTRW_NO, CHG_SQNO); // CT_DLVG_COMP_EMP_DSPC_PMIW TABLE 납품업체종업원파견약정서
						if (dlvgCompEmpDspcPmiwList != null && dlvgCompEmpDspcPmiwList.size() > 0) {
							for (DlvgCompEmpDspcPmiwVO DCEDPvo : dlvgCompEmpDspcPmiwList) {
								Map<String, Object> dlvgCompEmpDspcPmiwMap = new HashMap<String, Object>();
								dlvgCompEmpDspcPmiwMap.put("dspc_Bass", StringUtil.converNullToBlank(DCEDPvo.getDSPC_BASS()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Cntn1", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_DRTCS_CNTN1()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Cntn2", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_DRTCS_CNTN2()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Am1", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_DRTCS_AM1()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Am2", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_DRTCS_AM2()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Rmk1", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_DRTCS_RMK1()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Rmk2", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_DRTCS_RMK2()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn1", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_CNTN1()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn2", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_CNTN2()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn3", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_CNTN3()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am1", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_AM1()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am2", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_AM2()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am3", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_AM3()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk1", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_RMK1()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk2", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_RMK2()));
								dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk3", StringUtil.converNullToBlank(DCEDPvo.getLBRCS_OHCS_RMK3()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn1", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_CNTN1()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn2", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_CNTN2()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn3", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_CNTN3()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am1", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_AM1()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am2", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_AM2()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am3", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_AM3()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk1", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_RMK1()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk2", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_RMK2()));
								dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk3", StringUtil.converNullToBlank(DCEDPvo.getFI_BNF_RMK3()));
								dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Cntn", StringUtil.converNullToBlank(DCEDPvo.getETC_TXPN_CNTN()));
								dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Am", StringUtil.converNullToBlank(DCEDPvo.getETC_TXPN_AM()));
								dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Rmk", StringUtil.converNullToBlank(DCEDPvo.getETC_TXPN_RMK()));
								dlvgCompEmpDspcPmiwMap.put("ctr_Chrr_Rto", "5.20");
								dlvgCompEmpDspcPmiwMap.put("ctr_Patn_Rto", "비고");
	
								dlvgCompEmpDspcPmiw.add(dlvgCompEmpDspcPmiwMap);
							}
						} else {
							dlvgCompEmpDspcPmiw.add(retrieveDlvgCompEmpDspcPmiw());
						}

						List<DspcPerWrkPrdPmiwVO> dspcPerWrkPrdPmiwList = anwEltCtrwDrupService.selectDspcPerWrkPrdPmiwOz(ELT_CTRW_NO, CHG_SQNO);
						if (dspcPerWrkPrdPmiwList != null && dspcPerWrkPrdPmiwList.size() > 0) {
							for (DspcPerWrkPrdPmiwVO DPWPPvo : dspcPerWrkPrdPmiwList) {
								Map<String, Object> dspcPerWrkPrdPmiwMap = new HashMap<String, Object>();
								dspcPerWrkPrdPmiwMap.put("sqno", StringUtil.converNullToBlank(DPWPPvo.getSQNO()));
								dspcPerWrkPrdPmiwMap.put("stornm", StringUtil.converNullToBlank(DPWPPvo.getSTORNM()));
								dspcPerWrkPrdPmiwMap.put("dspc_Per", StringUtil.converNullToBlank(DPWPPvo.getDSPC_PER()));
								dspcPerWrkPrdPmiwMap.put("wrk_Dt", StringUtil.converNullToBlank(DPWPPvo.getWRK_ST_DT()) + "~" + StringUtil.converNullToBlank(DPWPPvo.getWRK_ED_DT()));
								dspcPerWrkPrdPmiwMap.put("wrk_Hr", StringUtil.converNullToBlank(DPWPPvo.getWRK_ST_HR()) + " ~ " + StringUtil.converNullToBlank(DPWPPvo.getWRK_ED_HR()));
								dspcPerWrkPrdPmiwMap.put("rcs_Hr", StringUtil.converNullToBlank(DPWPPvo.getRCS_ST_HR()) + "~ " + StringUtil.converNullToBlank(DPWPPvo.getRCS_ED_HR()));
	
								dspcPerWrkPrdPmiw.add(dspcPerWrkPrdPmiwMap);
							}
						} else {
							dspcPerWrkPrdPmiw.add(retrieveDspcPerWrkPrdPmiw());
						}
					} else if ("305".equals(pmiw_Kdc)) {
						pmiwDtlMap.put("pmiw_kdc", pmiw_Kdc);
						pmiwDtlMap.put("buy_am", StringUtil.converNullToBlank(vo.getBUY_AM()));
						pmiwDtlMap.put("evt_tinm", StringUtil.converNullToBlank(vo.getEVT_TINM()));
						pmiwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						pmiwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						pmiwDtlMap.put("ETC1", StringUtil.converNullToBlank(vo.getETC1()));
						pmiwDtlMap.put("ETC2", "");
						pmiwDtlMap.put("ETC2", "");
						pmiwDtlMap.put("ETC3", "");
						pmiwDtlMap.put("ETC4", "");
						pmiwDtlMap.put("ETC5", "");
						pmiwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						pmiwDtlE.add(pmiwDtlMap);
					} else if ("306".equals(pmiw_Kdc)) {
						pmiwDtlMap.put("pmiw_kdc", pmiw_Kdc);
						pmiwDtlMap.put("buy_am", StringUtil.converNullToBlank(vo.getBUY_AM()));
						pmiwDtlMap.put("evt_tinm", StringUtil.converNullToBlank(vo.getEVT_TINM()));
						pmiwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						pmiwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						pmiwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						pmiwDtlF.add(pmiwDtlMap);
					}
				}
			}
			
			if (pmiwDtlA.size() == 0) {
				pmiwDtlA.add(retrievePmiwDtlA("S301"));
			}
			if (pmiwDtlB.size() == 0) {
				pmiwDtlB.add(retrievePmiwDtlB("S302"));
				evtAmPmiw.add(retrieveEvtAmPmiw("S302-22222222"));
			}
			if (pmiwDtlC.size() == 0) {
				pmiwDtlC.add(retrievePmiwDtlB("S303"));
				lgqtTrFeePmiw.add(retrieveLgqtTrFeePmiw("S303"));
			}
			if (pmiwDtlD.size() == 0) {
				pmiwDtlD.add(retrievePmiwDtlB("S304"));
				dlvgCompEmpDspcPmiw.add(retrieveDlvgCompEmpDspcPmiw());
				dspcPerWrkPrdPmiw.add(retrieveDspcPerWrkPrdPmiw());
			}
			if (pmiwDtlE.size() == 0) {
				pmiwDtlE.add(retrievePmiwDtlE("S305"));
			}
			if (pmiwDtlF.size() == 0) {
				pmiwDtlF.add(retrievePmiwDtlB("S306"));
			}

			/****************************
			 * [4] 특약서
			 ****************************/
			List<Map<String, Object>> sctrwDtlA = new ArrayList<Map<String, Object>>();
			// List<Map<String,Object>> sctrwDtlB = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlC = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlD = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlE = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlF = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlG = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlH = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlI = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlJ = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlK = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlL = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlM = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlN = new ArrayList<Map<String, Object>>();

			List<Map<String, Object>> sctrwNmlMrgnRt = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwCtrMrgnRt = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwNmlMrgnRtM = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwCtrMrgnRtM = new ArrayList<Map<String, Object>>();
			// List<Map<String,Object>> sctrwPmtnEmpeDspcBrk = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwAllXpcPmtnCst = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwAllXpcPmtnCstB = new ArrayList<Map<String, Object>>();

			if ("1".equals(sctrw_Yn)) { // 특약서
				List<SctrwDtlVO> sctrwDtlList = anwEltCtrwDrupService.selectSctrwDtl(ELT_CTRW_NO, CHG_SQNO);

				for (SctrwDtlVO vo : sctrwDtlList) {
					Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
					String sctrw_Kdc = vo.getSCTRW_KDC();

					if ("401".equals(sctrw_Kdc)) {
						/* 마진율 */
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlA.add(sctrwDtlMap);

						List<SctrwNmlMrgnRtVO> sctrwNmlMrgnRtList = anwEltCtrwDrupService.selectSctrwNmlMrgnRt(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwNmlMrgnRtList != null && sctrwNmlMrgnRtList.size() > 0) {
							for (SctrwNmlMrgnRtVO nmlMrgnRtvo : sctrwNmlMrgnRtList) {
								Map<String, Object> sctrwNmlMrgnRtMap = new HashMap<String, Object>();
								sctrwNmlMrgnRtMap.put("sctrw_kdc", StringUtil.converNullToBlank(nmlMrgnRtvo.getSCTRW_KDC()));
								sctrwNmlMrgnRtMap.put("sqno", StringUtil.converNullToBlank(nmlMrgnRtvo.getSQNO()));
								sctrwNmlMrgnRtMap.put("stornm1", StringUtil.converNullToBlank(nmlMrgnRtvo.getSTORNM1()));
								sctrwNmlMrgnRtMap.put("nml_mrgn_rt", StringUtil.converNullToBlank(nmlMrgnRtvo.getNML_MRGN_RT()));
								sctrwNmlMrgnRtMap.put("evt_mrgn_rt", StringUtil.converNullToBlank(nmlMrgnRtvo.getEVT_MRGN_RT()));
								sctrwNmlMrgnRtMap.put("rmk", StringUtil.converNullToBlank(nmlMrgnRtvo.getRMK()));
								sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);
							}
						} else {
							sctrwNmlMrgnRt.add(retrieveSctrwNmlMrgnRt("S401"));
							sctrwCtrMrgnRt.add(retrieveSctrwCtrMrgnRt("S401"));
						}

						List<SctrwCtrMrgnRtVO> sctrwCtrMrgnRtList = anwEltCtrwDrupService.selectSctrwCtrMrgnRt(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwCtrMrgnRtList != null && sctrwCtrMrgnRtList.size() > 0) {
							for (SctrwCtrMrgnRtVO ctrMrgnRtvo : sctrwCtrMrgnRtList) {
								Map<String, Object> sctrwCtrMrgnRtMap = new HashMap<String, Object>();
								sctrwCtrMrgnRtMap.put("sctrw_kdc", StringUtil.converNullToBlank(ctrMrgnRtvo.getSCTRW_KDC()));
								sctrwCtrMrgnRtMap.put("sqno", StringUtil.converNullToBlank(ctrMrgnRtvo.getSQNO()));
								sctrwCtrMrgnRtMap.put("stornm1", StringUtil.converNullToBlank(ctrMrgnRtvo.getSTORNM1()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT10()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT20()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT30()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT40()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT50()));
								sctrwCtrMrgnRtMap.put("rmk", StringUtil.converNullToBlank(ctrMrgnRtvo.getRMK()));
	
								sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
							}
						} else {
							
						}
					} else if ("403".equals(sctrw_Kdc)) {
						// 403 특약서(매장위치 및 면적)
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlC.add(sctrwDtlMap);

						List<SctrwAllXpcPmtnCstVO> sctrwAllXpcPmtnCstList = anwEltCtrwDrupService.selectSctrwAllXpcPmtnCst(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwAllXpcPmtnCstList != null && sctrwAllXpcPmtnCstList.size() > 0) {
							for (SctrwAllXpcPmtnCstVO sctrwAllXpcPmtnCstvo : sctrwAllXpcPmtnCstList) {
								Map<String, Object> sctrwAllXpcPmtnCstMap = new HashMap<String, Object>();
								sctrwAllXpcPmtnCstMap.put("sctrw_kdc", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSCTRW_KDC()));
								sctrwAllXpcPmtnCstMap.put("sqno", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSQNO()));
								sctrwAllXpcPmtnCstMap.put("stornm1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTORNM1()));
								sctrwAllXpcPmtnCstMap.put("stor_ly1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTOR_LY1()));
								sctrwAllXpcPmtnCstMap.put("sela_area_m1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_M1()));
								sctrwAllXpcPmtnCstMap.put("sela_area_pcn1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_PCN1()));
								sctrwAllXpcPmtnCstMap.put("stornm2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTORNM2()));
								sctrwAllXpcPmtnCstMap.put("stor_ly2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTOR_LY2()));
								sctrwAllXpcPmtnCstMap.put("sela_area_m2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_M2()));
								sctrwAllXpcPmtnCstMap.put("sela_area_pcn2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_PCN2()));
								sctrwAllXpcPmtnCst.add(sctrwAllXpcPmtnCstMap);
							}
						} else {
							sctrwAllXpcPmtnCst.add(retrieveSctrwAllXpcPmtnCst("S403"));
						}
					} else if ("404".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlD.add(sctrwDtlMap);
					} else if ("405".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlE.add(sctrwDtlMap);
					} else if ("406".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlF.add(sctrwDtlMap);
					} else if ("407".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlG.add(sctrwDtlMap);
					} else if ("408".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlH.add(sctrwDtlMap);
					} else if ("409".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlI.add(sctrwDtlMap);
					} else if ("410".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("name", StringUtil.converNullToBlank(vo.getNAME()));
						sctrwDtlMap.put("kind", StringUtil.converNullToBlank(vo.getKIND()));
						sctrwDtlMap.put("purpose", StringUtil.converNullToBlank(vo.getPURPOSE()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlJ.add(sctrwDtlMap);
					} else if ("411".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlK.add(sctrwDtlMap);
					} else if ("412".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlL.add(sctrwDtlMap);

						List<SctrwNmlMrgnRtVO> sctrwNmlMrgnRtMList = anwEltCtrwDrupService.selectSctrwNmlMrgnRt(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwNmlMrgnRtMList != null && sctrwNmlMrgnRtMList.size() > 0) {
							for (SctrwNmlMrgnRtVO nmlMrgnRtvo : sctrwNmlMrgnRtMList) {
								Map<String, Object> sctrwNmlMrgnRtMMap = new HashMap<String, Object>();
								sctrwNmlMrgnRtMMap.put("sctrw_kdc", StringUtil.converNullToBlank(nmlMrgnRtvo.getSCTRW_KDC()));
								sctrwNmlMrgnRtMMap.put("sqno", StringUtil.converNullToBlank(nmlMrgnRtvo.getSQNO()));
								sctrwNmlMrgnRtMMap.put("stornm1", StringUtil.converNullToBlank(nmlMrgnRtvo.getSTORNM1()));
								sctrwNmlMrgnRtMMap.put("nml_mrgn_rt", StringUtil.converNullToBlank(nmlMrgnRtvo.getNML_MRGN_RT()));
								sctrwNmlMrgnRtMMap.put("evt_mrgn_rt", StringUtil.converNullToBlank(nmlMrgnRtvo.getEVT_MRGN_RT()));
								sctrwNmlMrgnRtMMap.put("rmk", StringUtil.converNullToBlank(nmlMrgnRtvo.getRMK()));
								sctrwNmlMrgnRtMMap.put("nml_mrgn_rtm", StringUtil.converNullToBlank(nmlMrgnRtvo.getNML_MRGN_RTM()));
								sctrwNmlMrgnRtMMap.put("evt_mrgn_rtm", StringUtil.converNullToBlank(nmlMrgnRtvo.getEVT_MRGN_RTM()));
	
								sctrwNmlMrgnRtM.add(sctrwNmlMrgnRtMMap);
							}
						} else {
							sctrwNmlMrgnRtM.add(retrieveSctrwNmlMrgnRt("S412"));
						}

						List<SctrwCtrMrgnRtVO> sctrwCtrMrgnRtMList = anwEltCtrwDrupService.selectSctrwCtrMrgnRt(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwCtrMrgnRtMList != null && sctrwCtrMrgnRtMList.size() > 0) {
							for (SctrwCtrMrgnRtVO ctrMrgnRtvo : sctrwCtrMrgnRtMList) {
								Map<String, Object> sctrwCtrMrgnRtMMap = new HashMap<String, Object>();
								sctrwCtrMrgnRtMMap.put("sctrw_kdc", StringUtil.converNullToBlank(ctrMrgnRtvo.getSCTRW_KDC()));
								sctrwCtrMrgnRtMMap.put("sqno", StringUtil.converNullToBlank(ctrMrgnRtvo.getSQNO()));
								sctrwCtrMrgnRtMMap.put("stornm1", StringUtil.converNullToBlank(ctrMrgnRtvo.getSTORNM1()));
								sctrwCtrMrgnRtMMap.put("dc_sel_mrgn_rt10", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT10()));
								sctrwCtrMrgnRtMMap.put("dc_sel_mrgn_rt20", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT20()));
								sctrwCtrMrgnRtMMap.put("dc_sel_mrgn_rt30", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT30()));
								sctrwCtrMrgnRtMMap.put("dc_sel_mrgn_rt40", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT40()));
								sctrwCtrMrgnRtMMap.put("dc_sel_mrgn_rt50", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT50()));
								sctrwCtrMrgnRtMMap.put("rmk", StringUtil.converNullToBlank(ctrMrgnRtvo.getRMK()));
	
								sctrwCtrMrgnRtM.add(sctrwCtrMrgnRtMMap);
							}
						} else {
							sctrwCtrMrgnRtM.add(retrieveSctrwCtrMrgnRt("S412"));
						}

					} else if ("413".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlM.add(sctrwDtlMap);

						List<SctrwAllXpcPmtnCstVO> sctrwAllXpcPmtnCstBList = anwEltCtrwDrupService.selectSctrwAllXpcPmtnCst(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwAllXpcPmtnCstBList != null && sctrwAllXpcPmtnCstBList.size() > 0) {
							for (SctrwAllXpcPmtnCstVO sctrwAllXpcPmtnCstvo : sctrwAllXpcPmtnCstBList) {
								Map<String, Object> sctrwAllXpcPmtnCstBMap = new HashMap<String, Object>();
								sctrwAllXpcPmtnCstBMap.put("sctrw_kdc", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSCTRW_KDC()));
								sctrwAllXpcPmtnCstBMap.put("sqno", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSQNO()));
								sctrwAllXpcPmtnCstBMap.put("stornm1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTORNM1()));
								sctrwAllXpcPmtnCstBMap.put("stor_ly1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTOR_LY1()));
								sctrwAllXpcPmtnCstBMap.put("sela_area_m1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_M1()));
								sctrwAllXpcPmtnCstBMap.put("sela_area_pcn1", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_PCN1()));
								sctrwAllXpcPmtnCstBMap.put("stornm2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTORNM2()));
								sctrwAllXpcPmtnCstBMap.put("stor_ly2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSTOR_LY2()));
								sctrwAllXpcPmtnCstBMap.put("sela_area_m2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_M2()));
								sctrwAllXpcPmtnCstBMap.put("sela_area_pcn2", StringUtil.converNullToBlank(sctrwAllXpcPmtnCstvo.getSELA_AREA_PCN2()));
								
								sctrwAllXpcPmtnCstB.add(sctrwAllXpcPmtnCstBMap);
							}
						} else {
							sctrwAllXpcPmtnCstB.add(retrieveSctrwAllXpcPmtnCst("S413"));
						}
					} else if ("414".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctrw_kdc", sctrw_Kdc);
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("dspc_prd_st_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ST_DT()));
						sctrwDtlMap.put("dspc_prd_ed_dt", StringUtil.converNullToBlank(vo.getDSPC_PRD_ED_DT()));
						sctrwDtlMap.put("wrk_st_hr", StringUtil.converNullToBlank(vo.getWRK_ST_HR()));
						sctrwDtlMap.put("wrk_ed_hr", StringUtil.converNullToBlank(vo.getWRK_ED_HR()));
						sctrwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
						sctrwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
						sctrwDtlMap.put("py_Nt", StringUtil.converNullToBlank(vo.getPY_NT()));
						sctrwDtlMap.put("sel_Ssdy_Rto", StringUtil.converNullToBlank(vo.getSEL_SSDY_RTO()));
						sctrwDtlMap.put("wrs_Spyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtlN.add(sctrwDtlMap);
					}
				}
			}

			if (sctrwDtlA.size() == 0) {
				sctrwDtlA.add(retrieveSctrwDtl("S401"));
				sctrwNmlMrgnRt.add(retrieveSctrwNmlMrgnRt("S401"));
				sctrwCtrMrgnRt.add(retrieveSctrwCtrMrgnRt("S401"));
			}
			if (sctrwDtlC.size() == 0) {
				sctrwDtlC.add(retrieveSctrwDtl("S403"));
				sctrwAllXpcPmtnCst.add(retrieveSctrwAllXpcPmtnCst("S403"));
			}
			if (sctrwDtlD.size() == 0) {
				sctrwDtlD.add(retrieveSctrwDtl("S404"));
			}
			if (sctrwDtlE.size() == 0) {
				sctrwDtlE.add(retrieveSctrwDtl("S405"));
			}
			if (sctrwDtlF.size() == 0) {
				sctrwDtlF.add(retrieveSctrwDtl("S406"));
			}
			if (sctrwDtlG.size() == 0) {
				sctrwDtlG.add(retrieveSctrwDtl("S407"));
			}
			if (sctrwDtlH.size() == 0) {
				sctrwDtlH.add(retrieveSctrwDtl("S408"));
			}
			if (sctrwDtlI.size() == 0) {
				sctrwDtlI.add(retrieveSctrwDtl("S409"));
			}
			if (sctrwDtlJ.size() == 0) {
				sctrwDtlJ.add(retrieveSctrwDtl("S410"));
			}
			if (sctrwDtlK.size() == 0) {
				sctrwDtlK.add(retrieveSctrwDtl("S411"));
			}
			if (sctrwDtlL.size() == 0) {
				sctrwDtlL.add(retrieveSctrwDtl("S412"));
				sctrwNmlMrgnRtM.add(retrieveSctrwNmlMrgnRt("S412"));
				sctrwCtrMrgnRtM.add(retrieveSctrwCtrMrgnRt("S412"));
			}
			if (sctrwDtlM.size() == 0) {
				sctrwDtlM.add(retrieveSctrwDtl("S413"));
				sctrwAllXpcPmtnCstB.add(retrieveSctrwAllXpcPmtnCst("S413"));
			}
			if (sctrwDtlN.size() == 0) {
				sctrwDtlN.add(retrieveSctrwDtl("S414"));
			}
			
			/****************************
			 * [5] 기타계약서
			 ****************************/
			List<Map<String, Object>> etcEltCtrwA = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcEltCtrwB = new ArrayList<Map<String, Object>>();

			if ("1".equals(etc_Ctrw_Yn)) {
				List<EtcEltCtrwVO> etcEltCtrwList = anwEltCtrwDrupService.selectEtcEltCtrw(ELT_CTRW_NO, CHG_SQNO);

				for (EtcEltCtrwVO vo : etcEltCtrwList) {
					Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
					String etc_Ctrw_Kdc = vo.getETC_CTRW_KDC();
					etcEltCtrwMap.put("etc_ctrw_kdc", etc_Ctrw_Kdc);

					if ("501".equals(etc_Ctrw_Kdc)) {
						etcEltCtrwMap.put("lbrcs", StringUtil.converNullToBlank(vo.getLBRCS()));
						etcEltCtrwMap.put("lbrcs_Clcn_Bass", StringUtil.converNullToBlank(vo.getLBRCS_CLCN_BASS()));
						etcEltCtrwMap.put("etc", StringUtil.converNullToBlank(vo.getETC()));
						etcEltCtrwMap.put("etc_Clcn_Bass", StringUtil.converNullToBlank(vo.getETC_CLCN_BASS()));
						etcEltCtrwMap.put("ned_Ss", StringUtil.converNullToBlank(vo.getNED_SS()));
						etcEltCtrwMap.put("ned_Bass", StringUtil.converNullToBlank(vo.getNED_BASS()));
						etcEltCtrwMap.put("mslam", StringUtil.converNullToBlank(vo.getMSLAM()));
						etcEltCtrwMap.put("mslam_Pft", StringUtil.converNullToBlank(vo.getMSLAM_PFT()));
						etcEltCtrwMap.put("rlz_Xpc_Pft", StringUtil.converNullToBlank(vo.getRLZ_XPC_PFT()));
						etcEltCtrwMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));

						etcEltCtrwA.add(etcEltCtrwMap);
					} else if ("502".equals(etc_Ctrw_Kdc)) {
						etcEltCtrwMap.put("lbrcs", StringUtil.converNullToBlank(vo.getLBRCS()));
						etcEltCtrwMap.put("lbrcs_Clcn_Bass", StringUtil.converNullToBlank(vo.getLBRCS_CLCN_BASS()));
						etcEltCtrwMap.put("etc", StringUtil.converNullToBlank(vo.getETC()));
						etcEltCtrwMap.put("etc_Clcn_Bass", StringUtil.converNullToBlank(vo.getETC_CLCN_BASS()));
						etcEltCtrwMap.put("ned_Ss", StringUtil.converNullToBlank(vo.getNED_SS()));
						etcEltCtrwMap.put("ned_Bass", StringUtil.converNullToBlank(vo.getNED_BASS()));
						etcEltCtrwMap.put("mslam", StringUtil.converNullToBlank(vo.getMSLAM()));
						etcEltCtrwMap.put("mslam_Pft", StringUtil.converNullToBlank(vo.getMSLAM_PFT()));
						etcEltCtrwMap.put("rlz_Xpc_Pft", StringUtil.converNullToBlank(vo.getRLZ_XPC_PFT()));
						etcEltCtrwMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						etcEltCtrwB.add(etcEltCtrwMap);
					}
				}
			}

			if (etcEltCtrwA.size() == 0) {
				etcEltCtrwA.add(retrieveEtcEltCtrw("S501"));
			}
			if (etcEltCtrwB.size() == 0) {
				etcEltCtrwB.add(retrieveEtcEltCtrw("S502"));
			}
			
			/****************************
			 * [6] 계약서 양식
			 ****************************/
			List<EtcEltStylAmnVO> etcEltStylAmnlist = anwEltCtrwDrupService.selectEtcEltStylAmn(ELT_CTRW_NO, CHG_SQNO);
			List<Map<String, Object>> stylAmn = new ArrayList<Map<String, Object>>();
			for (EtcEltStylAmnVO vo : etcEltStylAmnlist) {
				Map<String, Object> etcEltStylAmnMap = new HashMap<String, Object>();

				etcEltStylAmnMap.put("ctrw_Kdc", vo.getCTRW_KDC());
				etcEltStylAmnMap.put("sqno", vo.getSQNO());

				String str = vo.getCTRW_CNTN();
				str = str.replaceAll(" ", "&nbsp;");
				str = str.replaceAll("\n", "<br/>");

				etcEltStylAmnMap.put("ctrw_Cntn", str);
				stylAmn.add(etcEltStylAmnMap);
			}

			/****************************
			 * [7] 첨부 파일
			 ****************************/
			List<EltCtrwDcmApdVO> eltCtrwDcmApdlist = anwEltCtrwDrupService.retrieveEltCtrwDcmApdList(ELT_CTRW_NO, CHG_SQNO);
			List<Map<String, Object>> eltCtrwDcmApd = new ArrayList<Map<String, Object>>();
			for (EltCtrwDcmApdVO vo : eltCtrwDcmApdlist) {
				Map<String, Object> eltCtrwDcmApdMap = new HashMap<String, Object>();
				eltCtrwDcmApdMap.put("Mn_Ctrw_Kdc", StringUtil.converNullToBlank(vo.getMN_CTRW_KDC()));
				eltCtrwDcmApdMap.put("Sqno", StringUtil.converNullToBlank(vo.getSQNO()));
				eltCtrwDcmApdMap.put("Buyer_Eno", StringUtil.converNullToBlank(vo.getBUYER_ENO()));
				eltCtrwDcmApdMap.put("Dcm_C", StringUtil.converNullToBlank(vo.getDCM_C()));
				eltCtrwDcmApdMap.put("Dcm_Nm", StringUtil.converNullToBlank(vo.getDCM_NM()));
				eltCtrwDcmApdMap.put("Ess_Yn", StringUtil.converNullToBlank(vo.getESS_YN()));
				eltCtrwDcmApdMap.put("Apdflnm", StringUtil.converNullToBlank(vo.getAPDFLNM()));
				eltCtrwDcmApdMap.put("Apdfl_Sze", StringUtil.converNullToBlank(vo.getAPDFL_SZE()));
				eltCtrwDcmApdMap.put("Sys_Flnm", StringUtil.converNullToBlank(vo.getSYS_FLNM()));
				eltCtrwDcmApd.add(eltCtrwDcmApdMap);
			}
			if (eltCtrwDcmApd.size() == 0) {
				Map<String, Object> eltCtrwDcmApdMap = new HashMap<String, Object>();
				eltCtrwDcmApdMap.put("Mn_Ctrw_Kdc", "");
				eltCtrwDcmApdMap.put("Sqno", "");
				eltCtrwDcmApdMap.put("Buyer_Eno", "");
				eltCtrwDcmApdMap.put("Dcm_C", "");
				eltCtrwDcmApdMap.put("Dcm_Nm", "");
				eltCtrwDcmApdMap.put("Ess_Yn", "");
				eltCtrwDcmApdMap.put("Apdflnm", "");
				eltCtrwDcmApdMap.put("Apdfl_Sze", "");
				eltCtrwDcmApdMap.put("Sys_Flnm", "");
				eltCtrwDcmApd.add(eltCtrwDcmApdMap);
			}
			
			// 특수문자 예외 처리를 위한 함수 (계약서 양식은 적용하지 않음)
			filterTextListForOZ(main);
			filterTextListForOZ(eltCtrwDtl);
			filterTextListForOZ(addEltCtrwDtl);
			filterTextListForOZ(addEltCtrwDtlB);
			filterTextListForOZ(addEltCtrwDtlC);
			filterTextListForOZ(addEltCtrwDtlD);
			filterTextListForOZ(addEltCtrwDtlE);
			filterTextListForOZ(pmiwDtlA);
			filterTextListForOZ(pmiwDtlB);
			filterTextListForOZ(evtAmPmiw);
			filterTextListForOZ(pmiwDtlC);
			filterTextListForOZ(lgqtTrFeePmiw);
			filterTextListForOZ(pmiwDtlD);
			filterTextListForOZ(dlvgCompEmpDspcPmiw);
			filterTextListForOZ(dspcPerWrkPrdPmiw);
			filterTextListForOZ(pmiwDtlE);
			filterTextListForOZ(pmiwDtlF);
			filterTextListForOZ(sctrwDtlA);
			filterTextListForOZ(sctrwNmlMrgnRt);
			filterTextListForOZ(sctrwCtrMrgnRt);
			filterTextListForOZ(sctrwDtlC);
			filterTextListForOZ(sctrwAllXpcPmtnCst);
			filterTextListForOZ(sctrwDtlD);
			filterTextListForOZ(sctrwDtlE);
			filterTextListForOZ(sctrwDtlF);
			filterTextListForOZ(sctrwDtlG);
			filterTextListForOZ(sctrwDtlH);
			filterTextListForOZ(sctrwDtlI);
			filterTextListForOZ(sctrwDtlJ);
			filterTextListForOZ(sctrwDtlK);
			filterTextListForOZ(sctrwDtlL);
			filterTextListForOZ(sctrwNmlMrgnRtM);
			filterTextListForOZ(sctrwCtrMrgnRtM);
			filterTextListForOZ(sctrwDtlM);
			filterTextListForOZ(sctrwAllXpcPmtnCstB);
			filterTextListForOZ(sctrwDtlN);
			filterTextListForOZ(etcEltCtrwA);
			filterTextListForOZ(etcEltCtrwB);
			filterTextListForOZ(mainSts);

			/* 보고서 데이터 담기 */
			/* 오즈리포트 파일 데이터 셋 순서에 맞출 것 */
			/* 상품본부 계약서는 모든 데이터 셋을 사용하기 때문에 계약서 구분없이 모두 추가 */
			all_list.add(main); // 메인 계약서
			all_list.add(eltCtrwDtl); // 계약서 상세
			all_list.add(addEltCtrwDtl); // 201
			all_list.add(addEltCtrwDtlB); // 202
			all_list.add(addEltCtrwDtlC); // 203
			all_list.add(addEltCtrwDtlD); // 204
			all_list.add(addEltCtrwDtlE); // 205
			all_list.add(pmiwDtlA); // 301
			all_list.add(pmiwDtlB); // 302
			all_list.add(evtAmPmiw); // 302
			all_list.add(pmiwDtlC); // 303
			all_list.add(lgqtTrFeePmiw); // 303
			all_list.add(pmiwDtlD); // 304
			all_list.add(dlvgCompEmpDspcPmiw); // 304
			all_list.add(dspcPerWrkPrdPmiw); // 304
			all_list.add(pmiwDtlE); // 305
			all_list.add(pmiwDtlF); // 306
			all_list.add(sctrwDtlA); // 401
			all_list.add(sctrwNmlMrgnRt); // 401
			all_list.add(sctrwCtrMrgnRt); // 401
			all_list.add(sctrwDtlC); // 403
			all_list.add(sctrwAllXpcPmtnCst); // 403
			all_list.add(sctrwDtlD); // 404
			all_list.add(sctrwDtlE); // 405
			all_list.add(sctrwDtlF); // 406
			all_list.add(sctrwDtlG); // 407
			all_list.add(sctrwDtlH); // 408
			all_list.add(sctrwDtlI); // 409
			all_list.add(sctrwDtlJ); // 410
			all_list.add(sctrwDtlK); // 411
			all_list.add(sctrwDtlL); // 412
			all_list.add(sctrwNmlMrgnRtM); // 412
			all_list.add(sctrwCtrMrgnRtM); // 412
			all_list.add(sctrwDtlM); // 413
			all_list.add(sctrwAllXpcPmtnCstB); // 413
			all_list.add(sctrwDtlN); // 414
			all_list.add(etcEltCtrwA); // 501
			all_list.add(etcEltCtrwB); // 502
			all_list.add(stylAmn); // 계약서 양식
			all_list.add(eltCtrwDcmApd); // 첨부 파일
			all_list.add(mainSts); // 워터마크 출력용 상태 값
			
			// 미리보기(임시저장) 데이터 삭제
			if (TEMP_YN != null && "Y".equals(TEMP_YN)) {
				AnwEltCtrwDrupVO deleteVO = new AnwEltCtrwDrupVO();
				deleteVO.setELT_CTRW_NO(ELT_CTRW_NO);
				deleteVO.setCHG_SQNO(CHG_SQNO);
				anwEltCtrwDrupService.deleteTempEltCtrw(deleteVO);
			}			
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/oz/ct/eltctrw/osEltctrwTest")
	public RestResult osEltctrwTypesOZTest(HttpServletRequest request, HttpServletResponse response, String CTRW_KDC, String CTRW_STY_VER) {		
		try {
			List<List<?>> all_list = new ArrayList<List<?>>();  //리턴 하는 리스트 
			//타이틀
			List<Map<String,Object>> main = new ArrayList<Map<String,Object>>();
			Map<String,Object> _main = new HashMap<String, Object>();

			_main.put("ctr_St_Dt", "2022년 01월 01일");
			_main.put("ctr_Ed_Dt", "2022년 12월 31일");
			_main.put("ctr_Dt", "2022. 01. 01 ~2022. 12. 31");
			_main.put("ctrw_Drup_Dt", "2021년    12월    01일");
			_main.put("bzno", "315-90-08787");
			_main.put("addr", "충북 청주시 흥덕구 1순환로1137번길129");
			_main.put("buyer_Addr", "경상북도 김천시 자산로 147 (평화동)");
				
			if ("101".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "물품구매(대행)공급계약서");
			} else if ("102".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "물품센터 이용계약서(일반)");
			} else if ("103".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "물품센터 이용계약서(주류)");
			} else if ("104".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "특약매입 거래 계약서");
			} else if ("105".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "특약매입 거래 계약서");
			} else if ("106".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "직매입_거래계약서(농협유통_수산)");
			} else if ("107".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "직매입_거래계약서(농협유통_표준)");
			} else if ("108".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "특약매입_거래계약서(농협유통_수산)");
			} else if ("109".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "특약매입_거래계약서(농협유통_표준)");
			} else if ("110".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "직매입_거래계약서(농협유통_축산)");
			} else if ("111".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "특약매입_거래계약서(농협유통_축산)");
			} else if ("112".equals(CTRW_KDC)) {
				_main.put("mn_Ctrw_Kd", CTRW_KDC);
				_main.put("mn_Ctrw_Kdnm", "선행물류센터 이용계약서");
			} else {
				_main.put("mn_Ctrw_Kd", "101");
				_main.put("mn_Ctrw_Kdnm", "물품구매(대행)공급계약서");
			}

			if ("201".equals(CTRW_KDC) || "202".equals(CTRW_KDC) || /* "203".equals(CTRW_KDC) */ "204".equals(CTRW_KDC) || "205".equals(CTRW_KDC)) {
				_main.put("add_Ctrw_Yn", "1");
			} else {
				_main.put("add_Ctrw_Yn", "0");
			}

			if ("301".equals(CTRW_KDC) || "302".equals(CTRW_KDC) || "303".equals(CTRW_KDC) || "304".equals(CTRW_KDC) || "305".equals(CTRW_KDC) || "306".equals(CTRW_KDC)) {
				_main.put("pmiw_Yn", "1");
			} else {
				_main.put("pmiw_Yn", "0");
			}

			if ("401".equals(CTRW_KDC) || "402".equals(CTRW_KDC) || "403".equals(CTRW_KDC) || "404".equals(CTRW_KDC)
					|| "405".equals(CTRW_KDC) || "406".equals(CTRW_KDC) || "407".equals(CTRW_KDC) || "408".equals(CTRW_KDC)
					|| "409".equals(CTRW_KDC) || "410".equals(CTRW_KDC) || "411".equals(CTRW_KDC) || "412".equals(CTRW_KDC)
					|| "413".equals(CTRW_KDC) || "414".equals(CTRW_KDC)) {
				_main.put("sctrw_Yn", "1");
			} else {
				_main.put("sctrw_Yn", "0");
			}

			if ("501".equals(CTRW_KDC) || "502".equals(CTRW_KDC)) {
				_main.put("etc_Ctrw_Yn", "1");
			} else {
				_main.put("etc_Ctrw_Yn", "0");
			}

			_main.put("ceo", "홍 길 동");
			_main.put("mtalnm", "김천농협하나로마트본점");
			_main.put("na_Trpl_C", "1111111111111");
			_main.put("buyer_Blg", "사업2과");
			_main.put("buyer_Nm", "바이어04");
			_main.put("buyer_Na_Trpl_C", "2222222222222");
			_main.put("ctr_Chrr_Mtalnm", "농협경제지주 주식회사 소매유통본부");
			_main.put("ctr_Chrr_Repmn", "장 철 훈");
			_main.put("ctr_Chrr_Rep_Dtynm", "대 표 이 사");
			_main.put("ctr_Chrr_Nm", "대 표 이 사 " + "장 철 훈");
			_main.put("na_Trpl_N", "거래처명");
			_main.put("aut_xtn_yn", "N");
				
			if("106".equals(CTRW_KDC) || "107".equals(CTRW_KDC)  || "108".equals(CTRW_KDC) || "109".equals(CTRW_KDC) || "110".equals(CTRW_KDC)  
					 || "111".equals(CTRW_KDC) || "406".equals(CTRW_KDC) || "407".equals(CTRW_KDC) || "408".equals(CTRW_KDC) || "409".equals(CTRW_KDC)  ){	
				_main.put("la_Agnt_Nm", "");
				_main.put("la_Agnt", "");
				_main.put("la_Agnt_Dtynm", "");
			} else {
				_main.put("la_Agnt_Nm", "부장 " + "이 석 희");
				_main.put("la_Agnt", "이 석 희");
				_main.put("la_Agnt_Dtynm", "부장");
			}

			_main.put("fgat_Prvt_C", "");
			_main.put("colb_Comp_sgnt", "");
			_main.put("colb_Comp_sgnt_dtm", "");
			_main.put("colb_Comp_Seal_Apdflnm", "");
			_main.put("colb_Comp_Seal_Sys_Flnm", "");
			_main.put("buyer_Seal_Apdflnm", "");
			_main.put("buyer_Seal_Sys_Flnm", "");
			_main.put("copNo", "1111111111111");
			_main.put("rrNo", "");
			_main.put("buyer_sgnt", "Y");
			_main.put("buyer_sgnt_dt", "2021년 12월 01일 11시 12분");
			_main.put("atch_cnt", "0");
			_main.put("clean_yn", "N");
			_main.put("seal_omit_yn", "Y");
			_main.put("temp_yn", "");
			
			main.add(_main);
			all_list.add(main); // 리턴 데이터 추가

			List<Map<String, Object>> eltCtrwDtl = new ArrayList<Map<String, Object>>();
			Map<String, Object> eltCtrwDtlMap = new HashMap<String, Object>();

			String sctr_Sjt = "특약 사항 삽입 부";
			sctr_Sjt = sctr_Sjt.replaceAll(" ", "&nbsp;");
			sctr_Sjt = sctr_Sjt.replaceAll("\n", "<br/>");
			eltCtrwDtlMap.put("sctr_Sjt", sctr_Sjt);

			if ("101".equals(CTRW_KDC) || "102".equals(CTRW_KDC) || "103".equals(CTRW_KDC) || "104".equals(CTRW_KDC)
					|| "105".equals(CTRW_KDC) || "106".equals(CTRW_KDC) || "107".equals(CTRW_KDC)
					|| "108".equals(CTRW_KDC) || "109".equals(CTRW_KDC) || "110".equals(CTRW_KDC)
					|| "111".equals(CTRW_KDC) || "112".equals(CTRW_KDC)) {

				eltCtrwDtlMap.put("mn_Ctrw_Kdc", CTRW_KDC);
				eltCtrwDtlMap.put("cnr_Dt", "10");
				eltCtrwDtlMap.put("psg_Mm", "11");
				eltCtrwDtlMap.put("psg_Dd", "12|25");
				eltCtrwDtlMap.put("etr_Fee", "11");
				eltCtrwDtlMap.put("phd_Feert", "12");
				eltCtrwDtlMap.put("phd_Feert1", "12");
				eltCtrwDtlMap.put("phd_Feert2", "12");
				eltCtrwDtlMap.put("lig_Pltpe", "11");
				eltCtrwDtlMap.put("mexp_Dd", "11");
				eltCtrwDtlMap.put("brand_N", "공급 브랜드명");

				if ("108".equals(CTRW_KDC)) {
					eltCtrwDtlMap.put("rt", " - 도매 : 1 % <BR>- 소매 : 10%(울산), 12%(성남,고양), 13%(부산) ");
				} else if ("109".equals(CTRW_KDC)) {
					eltCtrwDtlMap.put("rt", "5.6");
				} else {
					eltCtrwDtlMap.put("rt", "");
				}
				eltCtrwDtlMap.put("blmGrmy", "33");
				eltCtrwDtlMap.put("wrsPrmPy", "익월 15");
				eltCtrwDtlMap.put("grmy", "1,000,000 ");
				eltCtrwDtlMap.put("wrsSpyam", "10");
				eltCtrwDtlMap.put("ctrClo", "1");

				if ("105".equals(CTRW_KDC)) {
					eltCtrwDtlMap.put("ctrw_Tinm", "단기 계약서");
				} else {
					eltCtrwDtlMap.put("ctrw_Tinm", "");
				}
				eltCtrwDtl.add(eltCtrwDtlMap);
			} else {
				eltCtrwDtlMap = retrieveEltCtrwDtl("");
				eltCtrwDtl.add(eltCtrwDtlMap);
			}
			all_list.add(eltCtrwDtl); // 리턴 데이터 추가

			// 부가 계약서
			List<Map<String, Object>> addEltCtrwDtl = new ArrayList<Map<String, Object>>();
			Map<String, Object> addEltCtrwDtlMap = new HashMap<String, Object>();

			List<Map<String, Object>> addEltCtrwDtlB = new ArrayList<Map<String, Object>>();
			Map<String, Object> addEltCtrwDtlBMap = new HashMap<String, Object>();

			List<Map<String, Object>> addEltCtrwDtlC = new ArrayList<Map<String, Object>>();
			Map<String, Object> addEltCtrwDtlCMap = new HashMap<String, Object>();

			List<Map<String, Object>> addEltCtrwDtlD = new ArrayList<Map<String, Object>>();
			Map<String, Object> addEltCtrwDtlDMap = new HashMap<String, Object>();

			List<Map<String, Object>> addEltCtrwDtlE = new ArrayList<Map<String, Object>>();
			Map<String, Object> addEltCtrwDtlEMap = new HashMap<String, Object>();

			if ("201".equals(CTRW_KDC)) {
				addEltCtrwDtlMap.put("add_ctrw_kdc", CTRW_KDC);
				addEltCtrwDtlMap.put("pb_ctrw_tinm", "PB상품공급계약서");
				addEltCtrwDtlMap.put("cnr_dt", "11");
				addEltCtrwDtlMap.put("psg_mm", "02");
				addEltCtrwDtlMap.put("psg_dd", "22|25");
				addEltCtrwDtlMap.put("etc1", "100분의 5");
				addEltCtrwDtlMap.put("etc2", "100분의 5");
				addEltCtrwDtlMap.put("etc3", "100분의 20");
				addEltCtrwDtlMap.put("sctr_Sjt", sctr_Sjt);
				addEltCtrwDtl.add(addEltCtrwDtlMap);
			} else {
				addEltCtrwDtlMap = retrieveAddEltCtrwDtl("S201");
				addEltCtrwDtl.add(addEltCtrwDtlMap);
			}
			all_list.add(addEltCtrwDtl); // 리턴 데이터 추가

			if ("202".equals(CTRW_KDC)) {
				addEltCtrwDtlBMap.put("add_ctrw_kdc", CTRW_KDC);
				addEltCtrwDtlBMap.put("pb_ctrw_tinm", "PB상품공급계약서");
				addEltCtrwDtlBMap.put("cnr_dt", "11");
				addEltCtrwDtlBMap.put("psg_mm", "02");
				addEltCtrwDtlBMap.put("psg_dd", "22|25");
				addEltCtrwDtlBMap.put("etc1", "3.5");
				addEltCtrwDtlBMap.put("etc2", "100분의 5");
				addEltCtrwDtlBMap.put("etc3", "100분의 20");
				addEltCtrwDtlBMap.put("sctr_Sjt", sctr_Sjt);
				addEltCtrwDtlB.add(addEltCtrwDtlBMap);
			} else {
				addEltCtrwDtlBMap = retrieveAddEltCtrwDtl("S202");
				addEltCtrwDtlB.add(addEltCtrwDtlBMap);
			}

			all_list.add(addEltCtrwDtlB); // 리턴 데이터 추가

			// 선행물류 계약서는 메인으로 옮김
			if ("203".equals(CTRW_KDC)) {
				addEltCtrwDtlCMap.put("add_ctrw_kdc", CTRW_KDC);
				addEltCtrwDtlCMap.put("pb_ctrw_tinm", "선행물류센터 이용계약서");
				addEltCtrwDtlCMap.put("cnr_dt", "11");
				addEltCtrwDtlCMap.put("psg_mm", "");
				addEltCtrwDtlCMap.put("psg_dd", "");
				addEltCtrwDtlCMap.put("etc1", "20180101");
				addEltCtrwDtlCMap.put("etc2", "20181231");
				addEltCtrwDtlCMap.put("etc3", "3");
				addEltCtrwDtlCMap.put("sctr_Sjt", sctr_Sjt);
				addEltCtrwDtlC.add(addEltCtrwDtlCMap);
			} else {
				addEltCtrwDtlCMap = retrieveAddEltCtrwDtl("S203");
				addEltCtrwDtlC.add(addEltCtrwDtlCMap);
			}
			all_list.add(addEltCtrwDtlC); // 리턴 데이터 추가

			if ("204".equals(CTRW_KDC)) {
				addEltCtrwDtlDMap.put("add_ctrw_kdc", CTRW_KDC);
				addEltCtrwDtlDMap.put("pb_ctrw_tinm", "물류센터 이용계약서(일반)");
				addEltCtrwDtlDMap.put("cnr_dt", "");
				addEltCtrwDtlDMap.put("psg_mm", "");
				addEltCtrwDtlDMap.put("psg_dd", "");
				addEltCtrwDtlDMap.put("etc1", "1");
				addEltCtrwDtlDMap.put("etc2", "2");
				addEltCtrwDtlDMap.put("etc3", "3");
				addEltCtrwDtlDMap.put("sctr_Sjt", sctr_Sjt);
				addEltCtrwDtlDMap.put("etc4", "");
				addEltCtrwDtlDMap.put("etc5", "1");
				addEltCtrwDtlDMap.put("etc6", "20180101");
				addEltCtrwDtlD.add(addEltCtrwDtlDMap);
			} else {
				addEltCtrwDtlDMap = retrieveAddEltCtrwDtl("S204");
				addEltCtrwDtlD.add(addEltCtrwDtlDMap);
			}
			all_list.add(addEltCtrwDtlD); // 리턴 데이터 추가

			if ("205".equals(CTRW_KDC)) {
				addEltCtrwDtlEMap.put("add_ctrw_kdc", CTRW_KDC);
				addEltCtrwDtlEMap.put("pb_ctrw_tinm", "물류센터 이용계약서(주류)");
				addEltCtrwDtlEMap.put("cnr_dt", "11");
				addEltCtrwDtlEMap.put("psg_mm", "");
				addEltCtrwDtlEMap.put("psg_dd", "");
				addEltCtrwDtlEMap.put("etc1", "10000");
				addEltCtrwDtlEMap.put("etc2", "10");
				addEltCtrwDtlEMap.put("etc3", "");
				addEltCtrwDtlEMap.put("sctr_Sjt", sctr_Sjt);
				addEltCtrwDtlEMap.put("etc4", "");
				addEltCtrwDtlEMap.put("etc5", "");
				addEltCtrwDtlE.add(addEltCtrwDtlEMap);
			} else {
				addEltCtrwDtlEMap = retrieveAddEltCtrwDtl("S205");
				addEltCtrwDtlE.add(addEltCtrwDtlEMap);
			}
			all_list.add(addEltCtrwDtlE); // 리턴 데이터 추가

			List<Map<String, Object>> pmiwDtlA = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlB = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlC = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlD = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlE = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> pmiwDtlF = new ArrayList<Map<String, Object>>();

			List<Map<String, Object>> evtAmPmiw = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> lgqtTrFeePmiw = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> dlvgCompEmpDspcPmiw = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> dspcPerWrkPrdPmiw = new ArrayList<Map<String, Object>>();

			Map<String, Object> pmiwDtlAMap = new HashMap<String, Object>();
			Map<String, Object> pmiwDtlBMap = new HashMap<String, Object>();
			Map<String, Object> pmiwDtlCMap = new HashMap<String, Object>();
			Map<String, Object> pmiwDtlDMap = new HashMap<String, Object>();
			Map<String, Object> pmiwDtlEMap = new HashMap<String, Object>();
			Map<String, Object> pmiwDtlFMap = new HashMap<String, Object>();

			Map<String, Object> evtAmPmiwMap = new HashMap<String, Object>();
			Map<String, Object> lgqtTrFeePmiwMap = new HashMap<String, Object>();
			Map<String, Object> dlvgCompEmpDspcPmiwMap = new HashMap<String, Object>();
			Map<String, Object> dspcPerWrkPrdPmiwMap = new HashMap<String, Object>();

			// 판매 장려금 약정서
			if ("301".equals(CTRW_KDC)) {
				pmiwDtlAMap.put("pmiw_kdc", CTRW_KDC);
				pmiwDtlAMap.put("buy_am", "10");
				pmiwDtlAMap.put("evt_tinm", "");
				pmiwDtlAMap.put("evt_prd_st_dt", "20180101");
				pmiwDtlAMap.put("evt_prd_ed_dt", "20180131");
				pmiwDtlAMap.put("ETC1", ""); // 개정 이후로 성과장려금 결정기준 빠짐
				pmiwDtlAMap.put("ETC2", "3~6");
				pmiwDtlAMap.put("ETC3", "6~10");
				pmiwDtlAMap.put("ETC4", "10");
				pmiwDtlAMap.put("ETC5", "0.7");
				pmiwDtlAMap.put("ETC6", "1.3");
				pmiwDtlAMap.put("ETC7", "1.7");
				pmiwDtlAMap.put("ETC8", "2.0");
				pmiwDtlAMap.put("ETC9", "1~49");
				pmiwDtlAMap.put("ETCA", "50~84");
				pmiwDtlAMap.put("ETCB", "85~124");
				pmiwDtlAMap.put("ETCC", "125~164");
				pmiwDtlAMap.put("ETCD", "1.00");
				pmiwDtlAMap.put("ETCE", "1.30");
				pmiwDtlAMap.put("ETCF", "1.60");
				pmiwDtlAMap.put("ETCG", "1.90");
				pmiwDtlAMap.put("ETCH", "");
				pmiwDtlAMap.put("ETCI", "165~199");
				pmiwDtlAMap.put("ETCJ", "200");
				pmiwDtlAMap.put("ETCK", "2.20");
				pmiwDtlAMap.put("ETCL", "2.50");
				pmiwDtlAMap.put("sctr_Sjt", sctr_Sjt);
				pmiwDtlA.add(pmiwDtlAMap);
			} else {
				pmiwDtlAMap = retrievePmiwDtlA("S301");
				pmiwDtlA.add(pmiwDtlAMap);
			}

			if ("302".equals(CTRW_KDC)) {
				pmiwDtlBMap.put("pmiw_kdc", CTRW_KDC);
				pmiwDtlBMap.put("buy_am", "1111");
				pmiwDtlBMap.put("evt_tinm", "22");
				pmiwDtlBMap.put("evt_prd_st_dt", "20150101");
				pmiwDtlBMap.put("evt_prd_ed_dt", "20150131");
				pmiwDtlB.add(pmiwDtlBMap);

				evtAmPmiwMap.put("evt_Nm", "행사명칭");
				evtAmPmiwMap.put("evt_Cntn", "행사내용");
				evtAmPmiwMap.put("evt_Plcnm", "행사장소");
				evtAmPmiwMap.put("evt_Wrs_Nm", "행사 상품");
				evtAmPmiwMap.put("evt_Rto_Cntn", "-행사 상품 내용 111 <br/> -행사 상품 내용 222");
				evtAmPmiwMap.put("ctr_Patn_Am", "54545");
				evtAmPmiwMap.put("ctr_Chrr_Am", "544554");
				evtAmPmiwMap.put("am_Ss", "65458");
				evtAmPmiwMap.put("ctr_Patn_Rto", "5.20");
				evtAmPmiwMap.put("ctr_Chrr_Rto", "5.22");
				evtAmPmiwMap.put("rto_Ss", "10.42");
				evtAmPmiwMap.put("ctr_Patn_Alot_Rto", "454545.25");
				evtAmPmiwMap.put("ctr_Chrr_Alot_Rto", "4545.26");
				evtAmPmiwMap.put("alot_Rto_Ss", "5456566.66");
				evtAmPmiwMap.put("all_Xpc_Pmtn_Cst", "teset");
				evtAmPmiwMap.put("clcn_Bass", "ssssss");
				evtAmPmiw.add(evtAmPmiwMap);
			} else {
				pmiwDtlBMap = retrievePmiwDtlB("S302");
				pmiwDtlB.add(pmiwDtlBMap);

				evtAmPmiwMap = retrieveEvtAmPmiw("S302");
				evtAmPmiw.add(evtAmPmiwMap);
			}

			if ("303".equals(CTRW_KDC)) {
				pmiwDtlCMap.put("pmiw_kdc", CTRW_KDC);
				pmiwDtlCMap.put("buy_am", "10");
				pmiwDtlCMap.put("evt_tinm", "");
				pmiwDtlCMap.put("evt_prd_st_dt", "20180101");
				pmiwDtlCMap.put("evt_prd_ed_dt", "20181231");
				pmiwDtlCMap.put("sctr_Sjt", sctr_Sjt);
				pmiwDtlC.add(pmiwDtlCMap);

				lgqtTrFeePmiwMap.put("feert_hmw_undr", "1");
				lgqtTrFeePmiwMap.put("feert_hmw1_hmw2", "1.5");
				lgqtTrFeePmiwMap.put("feert_hmw2_hmw3", "1.8");
				lgqtTrFeePmiwMap.put("feert_hmw3_hmw5", "2.0");
				lgqtTrFeePmiwMap.put("feert_hmw5_hmw10", "");
				lgqtTrFeePmiwMap.put("feert_hmw10_ovr", "");
				lgqtTrFeePmiwMap.put("feert_hmw_undr_tinm", "0.5~3억미만");
				lgqtTrFeePmiwMap.put("feert_hmw1_hmw2_tinm", "3~5억 미만");
				lgqtTrFeePmiwMap.put("feert_hmw2_hmw3_tinm", "5~10억 미만");
				lgqtTrFeePmiwMap.put("feert_hmw3_hmw5_tinm", "10억 이상");
				lgqtTrFeePmiwMap.put("feert_hmw5_hmw10_tinm", "");
				lgqtTrFeePmiwMap.put("feert_hmw10_ovr_tinm", "");
				lgqtTrFeePmiw.add(lgqtTrFeePmiwMap);
			} else {
				pmiwDtlCMap = retrievePmiwDtlB("S303");
				pmiwDtlC.add(pmiwDtlCMap);

				lgqtTrFeePmiwMap = retrieveLgqtTrFeePmiw("S303");
				lgqtTrFeePmiw.add(lgqtTrFeePmiwMap);
			}

			if ("304".equals(CTRW_KDC)) {
				pmiwDtlDMap.put("pmiw_kdc", CTRW_KDC);
				pmiwDtlDMap.put("buy_am", "11");
				pmiwDtlDMap.put("evt_tinm", "22");
				pmiwDtlDMap.put("evt_prd_st_dt", "20150101");
				pmiwDtlDMap.put("evt_prd_ed_dt", "20151231");
				pmiwDtlDMap.put("sctr_Sjt", sctr_Sjt);
				pmiwDtlD.add(pmiwDtlDMap);

				dlvgCompEmpDspcPmiwMap.put("dspc_Bass", "1");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Cntn1", "기본급(000시간 기준)");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Cntn2", "시간외수당(00시간분)");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Am1", "25000");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Am2", "30000");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Rmk1", "비고1");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Rmk2", "비고2");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn1", "연차휴가비");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn2", "4대보험료");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn3", "퇴직급여충당금");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am1", "5000");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am2", "7000");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am3", "8000");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk1", "비고1");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk2", "비고2");
				dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk3", "비고3");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn1", "식  비");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn2", "교통비");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn3", "기타실비");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am1", "42222");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am2", "43333");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am3", "44444");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk1", "비고1");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk2", "비고2");
				dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk3", "비고3");
				dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Cntn", "관련업무수행 부수비용");
				dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Am", "600000");
				dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Rmk", "비고");
				dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Am", "600000");
				dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Rmk", "비고");
				dlvgCompEmpDspcPmiwMap.put("ctr_Chrr_Rto", "60");
				dlvgCompEmpDspcPmiwMap.put("ctr_Patn_Rto", "40");
				dlvgCompEmpDspcPmiw.add(dlvgCompEmpDspcPmiwMap);

				dspcPerWrkPrdPmiwMap.put("sqno", "1");
				dspcPerWrkPrdPmiwMap.put("stornm", "2212");
				dspcPerWrkPrdPmiwMap.put("dspc_Per", "222");
				dspcPerWrkPrdPmiwMap.put("wrk_Dt", "2016-01-12~2016-12-12");
				dspcPerWrkPrdPmiwMap.put("wrk_Hr", "10:10~20:20");
				dspcPerWrkPrdPmiwMap.put("rcs_Hr", "14:15~20:20");
				dspcPerWrkPrdPmiw.add(dspcPerWrkPrdPmiwMap);
			} else {
				pmiwDtlDMap = retrievePmiwDtlB("S304");
				pmiwDtlD.add(pmiwDtlDMap);

				dlvgCompEmpDspcPmiwMap = retrieveDlvgCompEmpDspcPmiw();
				dlvgCompEmpDspcPmiw.add(dlvgCompEmpDspcPmiwMap);

				dspcPerWrkPrdPmiwMap = retrieveDspcPerWrkPrdPmiw();
				dspcPerWrkPrdPmiw.add(dspcPerWrkPrdPmiwMap);
			}

			if ("305".equals(CTRW_KDC)) {
				pmiwDtlEMap.put("pmiw_kdc", CTRW_KDC);
				pmiwDtlEMap.put("ETC1", "5");
				pmiwDtlEMap.put("sctr_Sjt", sctr_Sjt);
				pmiwDtlE.add(pmiwDtlEMap);
			} else {
				pmiwDtlEMap = retrievePmiwDtlE("S305");
				pmiwDtlE.add(pmiwDtlEMap);
			}

			if ("306".equals(CTRW_KDC)) {
				pmiwDtlFMap.put("pmiw_kdc", CTRW_KDC);
				pmiwDtlF.add(pmiwDtlFMap);
			} else {
				pmiwDtlFMap = retrievePmiwDtlB("S306");
				pmiwDtlF.add(pmiwDtlFMap);
			}
			all_list.add(pmiwDtlA);
			all_list.add(pmiwDtlB);
			all_list.add(evtAmPmiw);
			all_list.add(pmiwDtlC);
			all_list.add(lgqtTrFeePmiw);
			all_list.add(pmiwDtlD);
			all_list.add(dlvgCompEmpDspcPmiw);
			all_list.add(dspcPerWrkPrdPmiw);
			all_list.add(pmiwDtlE);
			all_list.add(pmiwDtlF);

			List<Map<String, Object>> sctrwDtlA = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlC = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlD = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlE = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlF = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlG = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlH = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlI = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlJ = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlK = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlL = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlM = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtlN = new ArrayList<Map<String, Object>>();

			List<Map<String, Object>> sctrwNmlMrgnRt = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwCtrMrgnRt = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwAllXpcPmtnCst = new ArrayList<Map<String, Object>>();

			Map<String, Object> sctrwDtlAMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlCMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlDMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlEMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlFMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlGMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlHMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlIMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlJMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlKMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlLMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlMMap = new HashMap<String, Object>();
			Map<String, Object> sctrwDtlNMap = new HashMap<String, Object>();

			Map<String, Object> sctrwNmlMrgnRtMap = new HashMap<String, Object>();
			Map<String, Object> sctrwCtrMrgnRtMap = new HashMap<String, Object>();
			Map<String, Object> sctrwAllXpcPmtnCstMap = new HashMap<String, Object>();

			if ("401".equals(CTRW_KDC)) {
				sctrwDtlAMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlAMap.put("vld_prd_st_dt", "20150101");
				sctrwDtlAMap.put("vld_prd_ed_dt", "20151231");
				sctrwDtlAMap.put("dspc_prd_st_dt", "20150101");
				sctrwDtlAMap.put("dspc_prd_ed_dt", "20151231");
				sctrwDtlAMap.put("wrk_st_hr", "1111");
				sctrwDtlAMap.put("wrk_ed_hr", "2222");
				sctrwDtlAMap.put("evt_prd_st_dt", "20150101");
				sctrwDtlAMap.put("py_Nt", "");
				sctrwDtlAMap.put("sel_Ssdy_Rto", "");
				sctrwDtlAMap.put("wrs_Spyam", "");
				sctrwDtlAMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlA.add(sctrwDtlAMap);

				sctrwNmlMrgnRtMap.put("sctrw_kdc", CTRW_KDC);
				sctrwNmlMrgnRtMap.put("sqno", "01");
				sctrwNmlMrgnRtMap.put("stornm1", "11");
				sctrwNmlMrgnRtMap.put("nml_mrgn_rt", "22");
				sctrwNmlMrgnRtMap.put("evt_mrgn_rt", "33");
				sctrwNmlMrgnRtMap.put("rmk", "44");
				sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);

				sctrwCtrMrgnRtMap.put("sctrw_kdc", CTRW_KDC);
				sctrwCtrMrgnRtMap.put("sqno", "01");
				sctrwCtrMrgnRtMap.put("stornm1", "11");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", "22");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", "33");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", "44");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", "55");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", "66");
				sctrwCtrMrgnRtMap.put("rmk", "77");
				sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
			} else {
				sctrwDtlAMap = retrieveSctrwDtl("S401");
				sctrwDtlA.add(sctrwDtlAMap);

				sctrwNmlMrgnRtMap = retrieveSctrwNmlMrgnRt("S401");
				sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);

				sctrwCtrMrgnRtMap = retrieveSctrwCtrMrgnRt("S401");
				sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
			}

			if ("403".equals(CTRW_KDC)) {
				sctrwDtlCMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlCMap.put("vld_prd_st_dt", "20150101");
				sctrwDtlCMap.put("vld_prd_ed_dt", "20151231");
				sctrwDtlCMap.put("dspc_prd_st_dt", "20150101");
				sctrwDtlCMap.put("dspc_prd_ed_dt", "20151231");
				sctrwDtlCMap.put("wrk_st_hr", "1111");
				sctrwDtlCMap.put("wrk_ed_hr", "2222");
				sctrwDtlCMap.put("evt_prd_st_dt", "20150101");
				sctrwDtlCMap.put("evt_prd_ed_dt", "20151231");
				sctrwDtlCMap.put("py_Nt", "");
				sctrwDtlCMap.put("sel_Ssdy_Rto", "");
				sctrwDtlCMap.put("wrs_Spyam", "");
				sctrwDtlCMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlC.add(sctrwDtlCMap);

				sctrwAllXpcPmtnCstMap.put("sctrw_kdc", CTRW_KDC);
				sctrwAllXpcPmtnCstMap.put("sqno", "01");
				sctrwAllXpcPmtnCstMap.put("stornm1", "11");
				sctrwAllXpcPmtnCstMap.put("stor_ly1", "22");
				sctrwAllXpcPmtnCstMap.put("sela_area_m1", "33");
				sctrwAllXpcPmtnCstMap.put("sela_area_pcn1", "44");
				sctrwAllXpcPmtnCstMap.put("stornm2", "55");
				sctrwAllXpcPmtnCstMap.put("stor_ly2", "66");
				sctrwAllXpcPmtnCstMap.put("sela_area_m2", "77");
				sctrwAllXpcPmtnCstMap.put("sela_area_pcn2", "88");
				sctrwAllXpcPmtnCst.add(sctrwAllXpcPmtnCstMap);
			} else {
				sctrwDtlCMap = retrieveSctrwDtl("S403");
				sctrwDtlC.add(sctrwDtlCMap);

				sctrwAllXpcPmtnCstMap = retrieveSctrwAllXpcPmtnCst("");
				sctrwAllXpcPmtnCst.add(sctrwAllXpcPmtnCstMap);
			}

			if ("404".equals(CTRW_KDC)) {
				sctrwDtlDMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlDMap.put("vld_prd_st_dt", "");
				sctrwDtlDMap.put("vld_prd_ed_dt", "");
				sctrwDtlDMap.put("dspc_prd_st_dt", "");
				sctrwDtlDMap.put("dspc_prd_ed_dt", "");
				sctrwDtlDMap.put("wrk_st_hr", "");
				sctrwDtlDMap.put("wrk_ed_hr", "");
				sctrwDtlDMap.put("evt_prd_st_dt", "");
				sctrwDtlDMap.put("evt_prd_ed_dt", "");
				sctrwDtlDMap.put("py_Nt", "");
				sctrwDtlDMap.put("sel_Ssdy_Rto", "");
				sctrwDtlDMap.put("wrs_Spyam", "");
				sctrwDtlDMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlD.add(sctrwDtlDMap);
			} else {
				sctrwDtlDMap = retrieveSctrwDtl("S404");
				sctrwDtlD.add(sctrwDtlDMap);
			}

			if ("405".equals(CTRW_KDC)) {
				sctrwDtlEMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlEMap.put("vld_prd_st_dt", "20160811");
				sctrwDtlEMap.put("vld_prd_ed_dt", "");
				sctrwDtlEMap.put("dspc_prd_st_dt", "");
				sctrwDtlEMap.put("dspc_prd_ed_dt", "");
				sctrwDtlEMap.put("wrk_st_hr", "");
				sctrwDtlEMap.put("wrk_ed_hr", "");
				sctrwDtlEMap.put("evt_prd_st_dt", "");
				sctrwDtlEMap.put("evt_prd_ed_dt", "");
				sctrwDtlEMap.put("py_Nt", "");
				sctrwDtlEMap.put("sel_Ssdy_Rto", "");
				sctrwDtlEMap.put("wrs_Spyam", "");
				sctrwDtlEMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlE.add(sctrwDtlEMap);
			} else {
				sctrwDtlEMap = retrieveSctrwDtl("S405");
				sctrwDtlE.add(sctrwDtlEMap);
			}

			if ("406".equals(CTRW_KDC)) {
				sctrwDtlFMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlFMap.put("vld_prd_st_dt", "");
				sctrwDtlFMap.put("vld_prd_ed_dt", "20161231");
				sctrwDtlFMap.put("dspc_prd_st_dt", "");
				sctrwDtlFMap.put("dspc_prd_ed_dt", "");
				sctrwDtlFMap.put("wrk_st_hr", "");
				sctrwDtlFMap.put("wrk_ed_hr", "");
				sctrwDtlFMap.put("evt_prd_st_dt", "");
				sctrwDtlFMap.put("evt_prd_ed_dt", "");
				sctrwDtlFMap.put("py_Nt", "1");
				sctrwDtlFMap.put("sel_Ssdy_Rto", "10");
				sctrwDtlFMap.put("wrs_Spyam", "5.6|10.1");
				sctrwDtlFMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlF.add(sctrwDtlFMap);
			} else {
				sctrwDtlFMap = retrieveSctrwDtl("S406");
				sctrwDtlF.add(sctrwDtlFMap);
			}

			if ("407".equals(CTRW_KDC)) {
				sctrwDtlGMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlGMap.put("vld_prd_st_dt", "");
				sctrwDtlGMap.put("vld_prd_ed_dt", "20161231");
				sctrwDtlGMap.put("dspc_prd_st_dt", "");
				sctrwDtlGMap.put("dspc_prd_ed_dt", "");
				sctrwDtlGMap.put("wrk_st_hr", "");
				sctrwDtlGMap.put("wrk_ed_hr", "");
				sctrwDtlGMap.put("evt_prd_st_dt", "");
				sctrwDtlGMap.put("evt_prd_ed_dt", "");
				sctrwDtlGMap.put("py_Nt", "1");
				sctrwDtlGMap.put("sel_Ssdy_Rto", "10");
				sctrwDtlGMap.put("wrs_Spyam", "5.6|10.1");
				sctrwDtlGMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlG.add(sctrwDtlGMap);
			} else {
				sctrwDtlGMap = retrieveSctrwDtl("S407");
				sctrwDtlG.add(sctrwDtlGMap);
			}

			if ("408".equals(CTRW_KDC)) {
				sctrwDtlHMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlHMap.put("vld_prd_st_dt", "");
				sctrwDtlHMap.put("vld_prd_ed_dt", "20161231");
				sctrwDtlHMap.put("dspc_prd_st_dt", "");
				sctrwDtlHMap.put("dspc_prd_ed_dt", "");
				sctrwDtlHMap.put("wrk_st_hr", "");
				sctrwDtlHMap.put("wrk_ed_hr", "");
				sctrwDtlHMap.put("evt_prd_st_dt", "");
				sctrwDtlHMap.put("evt_prd_ed_dt", "");
				sctrwDtlHMap.put("py_Nt", "1");
				sctrwDtlHMap.put("sel_Ssdy_Rto", "10");
				sctrwDtlHMap.put("wrs_Spyam", "5.6|10.1");
				sctrwDtlHMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlH.add(sctrwDtlHMap);
			} else {
				sctrwDtlHMap = retrieveSctrwDtl("S408");
				sctrwDtlH.add(sctrwDtlHMap);
			}

			if ("409".equals(CTRW_KDC)) {
				sctrwDtlIMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlIMap.put("vld_prd_st_dt", "");
				sctrwDtlIMap.put("vld_prd_ed_dt", "20161231");
				sctrwDtlIMap.put("dspc_prd_st_dt", "");
				sctrwDtlIMap.put("dspc_prd_ed_dt", "");
				sctrwDtlIMap.put("wrk_st_hr", "");
				sctrwDtlIMap.put("wrk_ed_hr", "");
				sctrwDtlIMap.put("evt_prd_st_dt", "");
				sctrwDtlIMap.put("evt_prd_ed_dt", "");
				sctrwDtlIMap.put("py_Nt", "1");
				sctrwDtlIMap.put("sel_Ssdy_Rto", "10");
				sctrwDtlIMap.put("wrs_Spyam", "5.6|10.1");
				sctrwDtlIMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlI.add(sctrwDtlIMap);
			} else {
				sctrwDtlIMap = retrieveSctrwDtl("S409");
				sctrwDtlI.add(sctrwDtlIMap);
			}

			if ("410".equals(CTRW_KDC)) {
				sctrwDtlJMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlJMap.put("vld_prd_st_dt", "");
				sctrwDtlJMap.put("vld_prd_ed_dt", "20161231");
				sctrwDtlJMap.put("dspc_prd_st_dt", "");
				sctrwDtlJMap.put("dspc_prd_ed_dt", "");
				sctrwDtlJMap.put("wrk_st_hr", "");
				sctrwDtlJMap.put("wrk_ed_hr", "");
				sctrwDtlJMap.put("evt_prd_st_dt", "");
				sctrwDtlJMap.put("evt_prd_ed_dt", "");
				sctrwDtlJMap.put("py_Nt", "1");
				sctrwDtlJMap.put("sel_Ssdy_Rto", "10");
				sctrwDtlJMap.put("wrs_Spyam", "5.6");
				sctrwDtlJMap.put("name", "판매 인센티브");
				sctrwDtlJMap.put("kind", "성과장려금");
				sctrwDtlJMap.put("purpose", "일정한 양 이상의 신장목표에 도달 시 판매독려");
				sctrwDtlJMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlJ.add(sctrwDtlJMap);
			} else {
				sctrwDtlJMap = retrieveSctrwDtl("S410");
				sctrwDtlJ.add(sctrwDtlJMap);
			}

			if ("411".equals(CTRW_KDC)) {
				sctrwDtlKMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlKMap.put("vld_prd_st_dt", "");
				sctrwDtlKMap.put("vld_prd_ed_dt", "20161231");
				sctrwDtlKMap.put("dspc_prd_st_dt", "");
				sctrwDtlKMap.put("dspc_prd_ed_dt", "");
				sctrwDtlKMap.put("wrk_st_hr", "");
				sctrwDtlKMap.put("wrk_ed_hr", "");
				sctrwDtlKMap.put("evt_prd_st_dt", "");
				sctrwDtlKMap.put("evt_prd_ed_dt", "");
				sctrwDtlKMap.put("py_Nt", "1");
				sctrwDtlKMap.put("sel_Ssdy_Rto", "10");
				sctrwDtlKMap.put("wrs_Spyam", "5.6");
				sctrwDtlKMap.put("name", "판매 인센티브");
				sctrwDtlKMap.put("kind", "성과장려금");
				sctrwDtlKMap.put("purpose", "일정한 양 이상의 신장목표에 도달 시 판매독려");
				sctrwDtlKMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlK.add(sctrwDtlKMap);
			} else {
				sctrwDtlKMap = retrieveSctrwDtl("S411");
				sctrwDtlK.add(sctrwDtlKMap);
			}

			if ("412".equals(CTRW_KDC)) {
				sctrwDtlLMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlLMap.put("vld_prd_st_dt", "");
				sctrwDtlLMap.put("vld_prd_ed_dt", "20161231");
				sctrwDtlLMap.put("dspc_prd_st_dt", "");
				sctrwDtlLMap.put("dspc_prd_ed_dt", "");
				sctrwDtlLMap.put("wrk_st_hr", "");
				sctrwDtlLMap.put("wrk_ed_hr", "");
				sctrwDtlLMap.put("evt_prd_st_dt", "");
				sctrwDtlLMap.put("evt_prd_ed_dt", "");
				sctrwDtlLMap.put("py_Nt", "1");
				sctrwDtlLMap.put("sel_Ssdy_Rto", "10");
				sctrwDtlLMap.put("wrs_Spyam", "5.6");
				sctrwDtlLMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlL.add(sctrwDtlLMap);

				sctrwNmlMrgnRtMap.put("sctrw_kdc", CTRW_KDC);
				sctrwNmlMrgnRtMap.put("sqno", "01");
				sctrwNmlMrgnRtMap.put("stornm1", "1");
				sctrwNmlMrgnRtMap.put("nml_mrgn_rt", "2");
				sctrwNmlMrgnRtMap.put("evt_mrgn_rt", "3");
				sctrwNmlMrgnRtMap.put("rmk", "4");
				sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);

				sctrwCtrMrgnRtMap.put("sctrw_kdc", CTRW_KDC);
				sctrwCtrMrgnRtMap.put("sqno", "02");
				sctrwCtrMrgnRtMap.put("stornm1", "11");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", "22");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", "33");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", "44");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", "55");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", "66");
				sctrwCtrMrgnRtMap.put("rmk", "77");
				sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
			} else {
				sctrwDtlLMap = retrieveSctrwDtl("S411");
				sctrwDtlL.add(sctrwDtlLMap);
			}

			if ("413".equals(CTRW_KDC)) {
				sctrwDtlMMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlMMap.put("vld_prd_st_dt", "20150101");
				sctrwDtlMMap.put("vld_prd_ed_dt", "20151231");
				sctrwDtlMMap.put("dspc_prd_st_dt", "20150101");
				sctrwDtlMMap.put("dspc_prd_ed_dt", "20151231");
				sctrwDtlMMap.put("wrk_st_hr", "1111");
				sctrwDtlMMap.put("wrk_ed_hr", "2222");
				sctrwDtlMMap.put("evt_prd_st_dt", "20150101");
				sctrwDtlMMap.put("evt_prd_ed_dt", "20151231");
				sctrwDtlMMap.put("py_Nt", "");
				sctrwDtlMMap.put("sel_Ssdy_Rto", "");
				sctrwDtlMMap.put("wrs_Spyam", "");
				sctrwDtlMMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlM.add(sctrwDtlMMap);

				sctrwAllXpcPmtnCstMap.put("sctrw_kdc", CTRW_KDC);
				sctrwAllXpcPmtnCstMap.put("sqno", "01");
				sctrwAllXpcPmtnCstMap.put("stornm1", "11");
				sctrwAllXpcPmtnCstMap.put("stor_ly1", "22");
				sctrwAllXpcPmtnCstMap.put("sela_area_m1", "33");
				sctrwAllXpcPmtnCstMap.put("sela_area_pcn1", "44");
				sctrwAllXpcPmtnCstMap.put("stornm2", "55");
				sctrwAllXpcPmtnCstMap.put("stor_ly2", "66");
				sctrwAllXpcPmtnCstMap.put("sela_area_m2", "77");
				sctrwAllXpcPmtnCstMap.put("sela_area_pcn2", "88");
				sctrwAllXpcPmtnCst.add(sctrwAllXpcPmtnCstMap);
			} else {
				sctrwDtlMMap = retrieveSctrwDtl("S413");
				sctrwDtlM.add(sctrwDtlMMap);

				sctrwAllXpcPmtnCstMap = retrieveSctrwAllXpcPmtnCst("");
				sctrwAllXpcPmtnCst.add(sctrwAllXpcPmtnCstMap);
			}

			if ("414".equals(CTRW_KDC)) {
				sctrwDtlNMap.put("sctrw_kdc", CTRW_KDC);
				sctrwDtlNMap.put("vld_prd_st_dt", "");
				sctrwDtlNMap.put("vld_prd_ed_dt", "");
				sctrwDtlNMap.put("dspc_prd_st_dt", "");
				sctrwDtlNMap.put("dspc_prd_ed_dt", "");
				sctrwDtlNMap.put("wrk_st_hr", "");
				sctrwDtlNMap.put("wrk_ed_hr", "");
				sctrwDtlNMap.put("evt_prd_st_dt", "");
				sctrwDtlNMap.put("evt_prd_ed_dt", "");
				sctrwDtlNMap.put("py_Nt", "");
				sctrwDtlNMap.put("sel_Ssdy_Rto", "");
				sctrwDtlNMap.put("wrs_Spyam", "");
				sctrwDtlNMap.put("sctr_Sjt", sctr_Sjt);
				sctrwDtlN.add(sctrwDtlNMap);
			} else {
				sctrwDtlNMap = retrieveSctrwDtl("S414");
				sctrwDtlN.add(sctrwDtlNMap);
			}

			all_list.add(sctrwDtlA);
			all_list.add(sctrwNmlMrgnRt);
			all_list.add(sctrwCtrMrgnRt);
			all_list.add(sctrwDtlC);
			all_list.add(sctrwAllXpcPmtnCst);
			all_list.add(sctrwDtlD);
			all_list.add(sctrwDtlE);
			all_list.add(sctrwDtlF);
			all_list.add(sctrwDtlG);
			all_list.add(sctrwDtlH);
			all_list.add(sctrwDtlI);
			all_list.add(sctrwDtlJ);
			all_list.add(sctrwDtlK);
			all_list.add(sctrwDtlL);
			all_list.add(sctrwNmlMrgnRt);
			all_list.add(sctrwCtrMrgnRt);
			all_list.add(sctrwDtlM);
			all_list.add(sctrwAllXpcPmtnCst);
			all_list.add(sctrwDtlN);

			List<Map<String, Object>> etcEltCtrwA = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcEltCtrwB = new ArrayList<Map<String, Object>>();

			Map<String, Object> etcEltCtrwAMap = new HashMap<String, Object>();
			Map<String, Object> etcEltCtrwBMap = new HashMap<String, Object>();

			if ("501".equals(CTRW_KDC)) {
				etcEltCtrwAMap.put("etc_ctrw_kdc", CTRW_KDC);
				etcEltCtrwAMap.put("lbrcs", "1112155454");
				etcEltCtrwAMap.put("lbrcs_Clcn_Bass", "인건비 산출 근거");
				etcEltCtrwAMap.put("etc", "33545454545");
				etcEltCtrwAMap.put("etc_Clcn_Bass", "기타 산출 근거");
				etcEltCtrwAMap.put("ned_Ss", "5554545454");
				etcEltCtrwAMap.put("ned_Bass", "계 산출 근거");
				etcEltCtrwAMap.put("mslam", "77545445");
				etcEltCtrwAMap.put("mslam_Pft", "885454545");
				etcEltCtrwAMap.put("rlz_Xpc_Pft", "9954545");
				etcEltCtrwAMap.put("sctr_Sjt", sctr_Sjt);
				etcEltCtrwA.add(etcEltCtrwAMap);
			} else {
				etcEltCtrwAMap = retrieveEtcEltCtrw("S501");
				etcEltCtrwA.add(etcEltCtrwAMap);
			}

			if ("502".equals(CTRW_KDC)) {
				etcEltCtrwBMap.put("etc_ctrw_kdc", CTRW_KDC);
				etcEltCtrwBMap.put("lbrcs", "11");
				etcEltCtrwBMap.put("lbrcs_Clcn_Bass", "22");
				etcEltCtrwBMap.put("etc", "33");
				etcEltCtrwBMap.put("etc_Clcn_Bass", "44");
				etcEltCtrwBMap.put("ned_Ss", "55");
				etcEltCtrwBMap.put("ned_Bass", "66");
				etcEltCtrwBMap.put("mslam", "77");
				etcEltCtrwBMap.put("mslam_Pft", "88");
				etcEltCtrwBMap.put("rlz_Xpc_Pft", "99");
				etcEltCtrwBMap.put("sctr_Sjt", sctr_Sjt);
				etcEltCtrwB.add(etcEltCtrwBMap);
			} else {
				etcEltCtrwBMap = retrieveEtcEltCtrw("S502");
				etcEltCtrwB.add(etcEltCtrwBMap);
			}

			all_list.add(etcEltCtrwA);
			all_list.add(etcEltCtrwB);

			List<EtcEltStylAmnVO> etcEltStylAmnlist = anwEltCtrwDrupService.selectEtcEltStylAmnTest(CTRW_KDC, CTRW_STY_VER);
			List<Map<String, Object>> stylAmn = new ArrayList<Map<String, Object>>();
			for (EtcEltStylAmnVO vo : etcEltStylAmnlist) {
				Map<String, Object> etcEltStylAmnMap = new HashMap<String, Object>();
				etcEltStylAmnMap.put("ctrw_Kdc", vo.getCTRW_KDC());
				etcEltStylAmnMap.put("sqno", vo.getSQNO());
				String str = vo.getCTRW_CNTN();
				str = str.replaceAll(" ", "&nbsp;");
				str = str.replaceAll("\n", "<br/>");

				if ("101".equals(vo.getCTRW_KDC())) {
					str = "<br/>" + str;
				}

				etcEltStylAmnMap.put("ctrw_Cntn", str);
				stylAmn.add(etcEltStylAmnMap);
			}

			all_list.add(stylAmn); // 리턴 데이터 추가

			// 첨부 파일
			List<Map<String, Object>> eltCtrwDcmApd = new ArrayList<Map<String, Object>>();
			Map<String, Object> eltCtrwDcmApdMap = new HashMap<String, Object>();

			eltCtrwDcmApdMap.put("Mn_Ctrw_Kdc", CTRW_KDC);
			eltCtrwDcmApdMap.put("Sqno", "");
			eltCtrwDcmApdMap.put("Buyer_Eno", "");
			eltCtrwDcmApdMap.put("Dcm_C", "");
			eltCtrwDcmApdMap.put("Dcm_Nm", "");
			eltCtrwDcmApdMap.put("Ess_Yn", "");
			eltCtrwDcmApdMap.put("Apdflnm", "");
			eltCtrwDcmApdMap.put("Apdfl_Sze", "");
			eltCtrwDcmApdMap.put("Sys_Flnm", "");
			eltCtrwDcmApd.add(eltCtrwDcmApdMap);

			all_list.add(eltCtrwDcmApd); // 리턴 데이터 추가

			// 워터마크
			List<Map<String, Object>> mainSts = new ArrayList<Map<String, Object>>();
			Map<String, Object> _mainSts = new HashMap<String, Object>();
			_mainSts.put("sts_nm", "계약서상태");
			_mainSts.put("sts_dtm", "2020년 01월 01일 09시 01분 01초");
			mainSts.add(_mainSts);
			all_list.add(mainSts); // 리턴 데이터 추가

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}	
	
	public static Map<String, Object> retrieveEtcEltCtrw(String CTRW_KDC) {
		Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
		etcEltCtrwMap.put("etc_ctrw_kdc", CTRW_KDC);
		etcEltCtrwMap.put("lbrcs", "");
		etcEltCtrwMap.put("lbrcs_Clcn_Bass", "");
		etcEltCtrwMap.put("etc", "");
		etcEltCtrwMap.put("etc_Clcn_Bass", "");
		etcEltCtrwMap.put("ned_Ss", "");
		etcEltCtrwMap.put("ned_Bass", "");
		etcEltCtrwMap.put("mslam", "");
		etcEltCtrwMap.put("mslam_Pft", "");
		etcEltCtrwMap.put("rlz_Xpc_Pft", "");
		etcEltCtrwMap.put("sctr_Sjt", "");

		return etcEltCtrwMap;
	}
	
//	
//	public static  Map<String, Object> retrieveEtcEltCtrwB(String CTRW_KDC) {
//		
//		Map<String,Object> etcEltCtrwBMap = new HashMap<String, Object>();
//		
//		etcEltCtrwBMap.put("etc_ctrw_kdc",          CTRW_KDC);
//		etcEltCtrwBMap.put("lbrcs",				    "");
//		etcEltCtrwBMap.put("lbrcs_Clcn_Bass",		"");
//		etcEltCtrwBMap.put("etc",				    "");
//		etcEltCtrwBMap.put("etc_Clcn_Bass",			"");
//		etcEltCtrwBMap.put("ned_Ss",				"");
//		etcEltCtrwBMap.put("ned_Bass",				"");
//		etcEltCtrwBMap.put("mslam",				    "");
//		etcEltCtrwBMap.put("mslam_Pft",				"");
//		etcEltCtrwBMap.put("rlz_Xpc_Pft",			"");
//		
//
//		return etcEltCtrwBMap;
//
//	}
	
	// 기타 계약서 
	public static Map<String, Object> retrieveAddEltCtrwDtl(String CTRW_KDC) {
		Map<String, Object> addEltCtrwDtlMap = new HashMap<String, Object>();
		addEltCtrwDtlMap.put("add_ctrw_kdc", CTRW_KDC);
		addEltCtrwDtlMap.put("pb_ctrw_tinm", "");
		addEltCtrwDtlMap.put("cnr_dt", "");
		addEltCtrwDtlMap.put("psg_mm", "");
		addEltCtrwDtlMap.put("psg_dd", "");
		addEltCtrwDtlMap.put("etc1", "");
		addEltCtrwDtlMap.put("etc2", "");
		addEltCtrwDtlMap.put("etc3", "");
		addEltCtrwDtlMap.put("sctr_Sjt", "");
		
		if ("S204".equals(CTRW_KDC) || "S205".equals(CTRW_KDC)) {
			addEltCtrwDtlMap.put("etc4", "");
			addEltCtrwDtlMap.put("etc5", "");
			if ("S204".equals(CTRW_KDC)) {
				addEltCtrwDtlMap.put("etc6", "");
			}
		}

		return addEltCtrwDtlMap;
	}

	// 메인 계약서 상세
	public static Map<String, Object> retrieveEltCtrwDtl(String CTRW_KDC) {
		Map<String, Object> eltCtrwDtlMap = new HashMap<String, Object>();
		eltCtrwDtlMap.put("mn_Ctrw_Kdc", CTRW_KDC);
		eltCtrwDtlMap.put("cnr_Dt", "");
		eltCtrwDtlMap.put("psg_Mm", "");
		eltCtrwDtlMap.put("psg_Dd", "");
		eltCtrwDtlMap.put("etr_Fee", "");
		eltCtrwDtlMap.put("phd_Feert", "");
		eltCtrwDtlMap.put("phd_Feert1", "");
		eltCtrwDtlMap.put("phd_Feert2", "");
		eltCtrwDtlMap.put("lig_Pltpe", "");
		eltCtrwDtlMap.put("mexp_Dd", "");
		eltCtrwDtlMap.put("sel_Pmny", "");
		eltCtrwDtlMap.put("sel_Wrs_Pmny", "");
		eltCtrwDtlMap.put("sctr_Sjt", "");
		eltCtrwDtlMap.put("ctrw_Tinm", "");

		return eltCtrwDtlMap;
	}	
	
	// 약정서 상세 A
	public static Map<String, Object> retrievePmiwDtlA(String CTRW_KDC) {
		Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
		pmiwDtlMap.put("pmiw_kdc", CTRW_KDC);
		pmiwDtlMap.put("buy_am", "");
		pmiwDtlMap.put("evt_tinm", "");
		pmiwDtlMap.put("evt_prd_st_dt", "");
		pmiwDtlMap.put("evt_prd_ed_dt", "");
		pmiwDtlMap.put("sctr_Sjt", "");
		pmiwDtlMap.put("ETC1", "");
		pmiwDtlMap.put("ETC2", "");
		pmiwDtlMap.put("ETC3", "");
		pmiwDtlMap.put("ETC4", "");
		pmiwDtlMap.put("ETC5", "");
		pmiwDtlMap.put("ETC6", "");
		pmiwDtlMap.put("ETC7", "");
		pmiwDtlMap.put("ETC8", "");
		pmiwDtlMap.put("ETC9", "");
		pmiwDtlMap.put("ETCA", "");
		pmiwDtlMap.put("ETCB", "");
		pmiwDtlMap.put("ETCC", "");
		pmiwDtlMap.put("ETCD", "");
		pmiwDtlMap.put("ETCE", "");
		pmiwDtlMap.put("ETCF", "");
		pmiwDtlMap.put("ETCG", "");
		pmiwDtlMap.put("ETCH", "");
		pmiwDtlMap.put("ETCI", "");
		pmiwDtlMap.put("ETCJ", "");
		pmiwDtlMap.put("ETCK", "");
		pmiwDtlMap.put("ETCL", "");
		return pmiwDtlMap;
	}
	
	// 약정서 상세 C
	public static Map<String, Object> retrieveEvtAmPmiw(String EVT_NM) {
		Map<String, Object> evtAmPmiwMap = new HashMap<String, Object>();
		evtAmPmiwMap.put("evt_Nm", EVT_NM);
		evtAmPmiwMap.put("evt_Cntn", "");
		evtAmPmiwMap.put("evt_Plcnm", "");
		evtAmPmiwMap.put("evt_Wrs_Nm", "");
		evtAmPmiwMap.put("evt_Rto_Cntn", "");
		evtAmPmiwMap.put("ctr_Patn_Am", "");
		evtAmPmiwMap.put("ctr_Chrr_Am", "");
		evtAmPmiwMap.put("am_Ss", "");
		evtAmPmiwMap.put("ctr_Patn_Rto", "");
		evtAmPmiwMap.put("ctr_Chrr_Rto", "");
		evtAmPmiwMap.put("rto_Ss", "");
		evtAmPmiwMap.put("ctr_Patn_Alot_Rto", "");
		evtAmPmiwMap.put("ctr_Chrr_Alot_Rto", "");
		evtAmPmiwMap.put("alot_Rto_Ss", "");
		evtAmPmiwMap.put("all_Xpc_Pmtn_Cst", "");
		evtAmPmiwMap.put("clcn_Bass", "");
		return evtAmPmiwMap;
	}
	
	// 약정서 상세 B,C,D,F
	public static Map<String, Object> retrievePmiwDtlB(String CTRW_KDC) {
		Map<String, Object> pmiwDtlBMap = new HashMap<String, Object>();
		pmiwDtlBMap.put("pmiw_kdc", CTRW_KDC);
		pmiwDtlBMap.put("buy_am", "");
		pmiwDtlBMap.put("evt_tinm", "");
		pmiwDtlBMap.put("evt_prd_st_dt", "");
		pmiwDtlBMap.put("evt_prd_ed_dt", "");
		pmiwDtlBMap.put("sctr_Sjt", "");

		return pmiwDtlBMap;
	}
	
	// 약정서 상세 E
	public static Map<String, Object> retrievePmiwDtlE(String CTRW_KDC) {
		Map<String, Object> pmiwDtlCMap = new HashMap<String, Object>();
		pmiwDtlCMap.put("pmiw_kdc", CTRW_KDC);
		pmiwDtlCMap.put("buy_am", "");
		pmiwDtlCMap.put("evt_tinm", "");
		pmiwDtlCMap.put("evt_prd_st_dt", "");
		pmiwDtlCMap.put("evt_prd_ed_dt", "");
		pmiwDtlCMap.put("ETC1", "");
		pmiwDtlCMap.put("ETC2", "");
		pmiwDtlCMap.put("ETC3", "");
		pmiwDtlCMap.put("ETC4", "");
		pmiwDtlCMap.put("ETC5", "");
		pmiwDtlCMap.put("sctr_Sjt", "");

		return pmiwDtlCMap;
	}
	
	// 약정서 상세 C
	public static  Map<String, Object> retrieveLgqtTrFeePmiw(String FEERT_HMW_UNDR) {
		Map<String,Object> lgqtTrFeePmiwMap = new HashMap<String, Object>();
		
		lgqtTrFeePmiwMap.put("feert_hmw_undr",	 "");
		lgqtTrFeePmiwMap.put("feert_hmw1_hmw2",	 "");
		lgqtTrFeePmiwMap.put("feert_hmw2_hmw3",	 "");
		lgqtTrFeePmiwMap.put("feert_hmw3_hmw5",	 "");
		lgqtTrFeePmiwMap.put("feert_hmw5_hmw10", "");
		lgqtTrFeePmiwMap.put("feert_hmw10_ovr",	 "");
		lgqtTrFeePmiwMap.put("feert_hmw_undr_tinm",	"");
		lgqtTrFeePmiwMap.put("feert_hmw1_hmw2_tinm",	"");
		lgqtTrFeePmiwMap.put("feert_hmw2_hmw3_tinm",	"");
		lgqtTrFeePmiwMap.put("feert_hmw3_hmw5_tinm","");
		lgqtTrFeePmiwMap.put("feert_hmw5_hmw10_tinm","");
		lgqtTrFeePmiwMap.put("feert_hmw10_ovr_tinm",	"");

		return lgqtTrFeePmiwMap;
	}
	
//	// 약정서 상세 D
//	public static  Map<String, Object> retrievePmiwDtlD(String CTRW_KDC) {
//		
//		Map<String,Object> pmiwDtlDMap = new HashMap<String, Object>();
//		
//		pmiwDtlDMap.put("pmiw_kdc",        CTRW_KDC);
//		pmiwDtlDMap.put("buy_am",		   "");
//		pmiwDtlDMap.put("evt_tinm",		   "");
//		pmiwDtlDMap.put("evt_prd_st_dt",   "");
//		pmiwDtlDMap.put("evt_prd_ed_dt",   "");
//
//		return pmiwDtlDMap;
//
//	}
	
	// 약정서 상세 D
	public static Map<String, Object> retrieveDlvgCompEmpDspcPmiw() {
		Map<String, Object> dlvgCompEmpDspcPmiwMap = new HashMap<String, Object>();
		dlvgCompEmpDspcPmiwMap.put("dspc_Bass", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Cntn1", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Cntn2", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Am1", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Am2", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Rmk1", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Drtcs_Rmk2", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn1", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn2", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Cntn3", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am1", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am2", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Am3", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk1", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk2", "");
		dlvgCompEmpDspcPmiwMap.put("lbrcs_Ohcs_Rmk3", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn1", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn2", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Cntn3", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am1", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am2", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Am3", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk1", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk2", "");
		dlvgCompEmpDspcPmiwMap.put("fi_Bnf_Rmk3", "");
		dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Cntn", "");
		dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Am", "");
		dlvgCompEmpDspcPmiwMap.put("etc_Txpn_Rmk", "");
		dlvgCompEmpDspcPmiwMap.put("ctr_Chrr_Rto", "");
		dlvgCompEmpDspcPmiwMap.put("ctr_Patn_Rto", "");

		return dlvgCompEmpDspcPmiwMap;
	}

	// 약정서 상세 D
	public static Map<String, Object> retrieveDspcPerWrkPrdPmiw() {
		Map<String, Object> dspcPerWrkPrdPmiwMap = new HashMap<String, Object>();
		dspcPerWrkPrdPmiwMap.put("sqno", "");
		dspcPerWrkPrdPmiwMap.put("stornm", "");
		dspcPerWrkPrdPmiwMap.put("dspc_Per", "");
		dspcPerWrkPrdPmiwMap.put("wrk_Dt", "");
		dspcPerWrkPrdPmiwMap.put("wrk_Hr", "");
		dspcPerWrkPrdPmiwMap.put("rcs_Hr", "");

		return dspcPerWrkPrdPmiwMap;
	}
	
//	// 특약서 상세 A
//	public static  Map<String, Object> retrieveSctrwDtlA(String CTRW_KDC) {
//		
//		Map<String,Object> sctrwDtlAMap = new HashMap<String, Object>();
//		
//		sctrwDtlAMap.put("sctrw_kdc"     ,     CTRW_KDC);
//		sctrwDtlAMap.put("vld_prd_st_dt",     "");
//		sctrwDtlAMap.put("vld_prd_ed_dt",     "");
//		sctrwDtlAMap.put("dspc_prd_st_dt",    "");
//		sctrwDtlAMap.put("dspc_prd_ed_dt",    "");
//		sctrwDtlAMap.put("wrk_st_hr",	      "");
//		sctrwDtlAMap.put("wrk_ed_hr",	      "");
//		sctrwDtlAMap.put("evt_prd_st_dt",     "");
//		sctrwDtlAMap.put("evt_prd_ed_dt",     "");
//
//		return sctrwDtlAMap;
//
//	}
	
	// 특약서 상세 A
	public static Map<String, Object> retrieveSctrwNmlMrgnRt(String CTRW_KDC) {
		Map<String, Object> sctrwNmlMrgnRtMap = new HashMap<String, Object>();
		sctrwNmlMrgnRtMap.put("sctrw_kdc", "");
		sctrwNmlMrgnRtMap.put("sqno", "");
		sctrwNmlMrgnRtMap.put("stornm1", "");
		sctrwNmlMrgnRtMap.put("nml_mrgn_rt", "");
		sctrwNmlMrgnRtMap.put("evt_mrgn_rt", "");
		sctrwNmlMrgnRtMap.put("rmk", "");
		
		if ("S412".equals(CTRW_KDC)) {
			sctrwNmlMrgnRtMap.put("nml_mrgn_rtm", "");
			sctrwNmlMrgnRtMap.put("evt_mrgn_rtm", "");
		}

		return sctrwNmlMrgnRtMap;
	}

	// 특약서 상세 A
	public static Map<String, Object> retrieveSctrwCtrMrgnRt(String CTRW_KDC) {
		Map<String, Object> sctrwCtrMrgnRtMap = new HashMap<String, Object>();
		sctrwCtrMrgnRtMap.put("sctrw_kdc", CTRW_KDC);
		sctrwCtrMrgnRtMap.put("sqno", "");
		sctrwCtrMrgnRtMap.put("stornm1", "");
		sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", "");
		sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", "");
		sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", "");
		sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", "");
		sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", "");
		sctrwCtrMrgnRtMap.put("rmk", "");

		return sctrwCtrMrgnRtMap;
	}
	
//	// 특약서 상세 B
//	public static  Map<String, Object> retrieveSctrwDtlB(String CTRW_KDC) {
//		
//		Map<String,Object> sctrwDtlBMap = new HashMap<String, Object>();
//		
//		sctrwDtlBMap.put("sctrw_kdc"     ,     CTRW_KDC);
//		sctrwDtlBMap.put("vld_prd_st_dt",     "");
//		sctrwDtlBMap.put("vld_prd_ed_dt",     "");
//		sctrwDtlBMap.put("dspc_prd_st_dt",    "");
//		sctrwDtlBMap.put("dspc_prd_ed_dt",    "");
//		sctrwDtlBMap.put("wrk_st_hr",	      "");
//		sctrwDtlBMap.put("wrk_ed_hr",	      "");
//		sctrwDtlBMap.put("evt_prd_st_dt",     "");
//		sctrwDtlBMap.put("evt_prd_ed_dt",     "");
//
//		return sctrwDtlBMap;
//
//	}
	
//	// 특약서 상세 B
//	public static  Map<String, Object> retrieveSctrwPmtnEmpeDspcBrk(String CTRW_KDC) {
//		
//		Map<String,Object> sctrwPmtnEmpeDspcBrkMap = new HashMap<String, Object>();
//		
//		sctrwPmtnEmpeDspcBrkMap.put("sctrw_kdc",	CTRW_KDC);
//		sctrwPmtnEmpeDspcBrkMap.put("sqno",			"");
//		sctrwPmtnEmpeDspcBrkMap.put("stornm1",		"");
//		sctrwPmtnEmpeDspcBrkMap.put("pmtn_empe1",	"");
//		sctrwPmtnEmpeDspcBrkMap.put("stornm2",		"");
//		sctrwPmtnEmpeDspcBrkMap.put("pmtn_empe2",	"");
//		sctrwPmtnEmpeDspcBrkMap.put("stornm3",		"");
//		sctrwPmtnEmpeDspcBrkMap.put("pmtn_empe3",	"");
//
//		return sctrwPmtnEmpeDspcBrkMap;
//
//	}
	
	
//	// 특약서 상세 C
//	public static  Map<String, Object> retrieveSctrwDtlC(String CTRW_KDC) {
//		
//		Map<String,Object> sctrwDtlCMap = new HashMap<String, Object>();
//		
//		sctrwDtlCMap.put("sctrw_kdc"     ,     CTRW_KDC);
//		sctrwDtlCMap.put("vld_prd_st_dt",     "");
//		sctrwDtlCMap.put("vld_prd_ed_dt",     "");
//		sctrwDtlCMap.put("dspc_prd_st_dt",    "");
//		sctrwDtlCMap.put("dspc_prd_ed_dt",    "");
//		sctrwDtlCMap.put("wrk_st_hr",	      "");
//		sctrwDtlCMap.put("wrk_ed_hr",	      "");
//		sctrwDtlCMap.put("evt_prd_st_dt",     "");
//		sctrwDtlCMap.put("evt_prd_ed_dt",     "");
//
//		return sctrwDtlCMap;
//
//	}
	
	// 특약서 상세 C
	public static Map<String, Object> retrieveSctrwAllXpcPmtnCst(String CTRW_KDC) {
		Map<String, Object> sctrwAllXpcPmtnCstMap = new HashMap<String, Object>();
		sctrwAllXpcPmtnCstMap.put("sctrw_kdc", CTRW_KDC);
		sctrwAllXpcPmtnCstMap.put("sqno", "");
		sctrwAllXpcPmtnCstMap.put("stornm1", "");
		sctrwAllXpcPmtnCstMap.put("stor_ly1", "");
		sctrwAllXpcPmtnCstMap.put("sela_area_m1", "");
		sctrwAllXpcPmtnCstMap.put("sela_area_pcn1", "");
		sctrwAllXpcPmtnCstMap.put("stornm2", "");
		sctrwAllXpcPmtnCstMap.put("stor_ly2", "");
		sctrwAllXpcPmtnCstMap.put("sela_area_m2", "");
		sctrwAllXpcPmtnCstMap.put("sela_area_pcn2", "");

		return sctrwAllXpcPmtnCstMap;
	}	
	
//	// 특약서 상세 D
//	public static  Map<String, Object> retrieveSctrwDtlD(String CTRW_KDC) {
//		
//		Map<String,Object> sctrwDtlDMap = new HashMap<String, Object>();
//		
//		sctrwDtlDMap.put("sctrw_kdc"     ,     CTRW_KDC);
//		sctrwDtlDMap.put("vld_prd_st_dt",     "");
//		sctrwDtlDMap.put("vld_prd_ed_dt",     "");
//		sctrwDtlDMap.put("dspc_prd_st_dt",    "");
//		sctrwDtlDMap.put("dspc_prd_ed_dt",    "");
//		sctrwDtlDMap.put("wrk_st_hr",	      "");
//		sctrwDtlDMap.put("wrk_ed_hr",	      "");
//		sctrwDtlDMap.put("evt_prd_st_dt",     "");
//		sctrwDtlDMap.put("evt_prd_ed_dt",     "");
//
//		return sctrwDtlDMap;
//
//	}
	
	// 특약서 상세 E
	public static Map<String, Object> retrieveSctrwDtl(String CTRW_KDC) {
		Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
		sctrwDtlMap.put("sctrw_kdc", CTRW_KDC);
		sctrwDtlMap.put("vld_prd_st_dt", "");
		sctrwDtlMap.put("vld_prd_ed_dt", "");
		sctrwDtlMap.put("dspc_prd_st_dt", "");
		sctrwDtlMap.put("dspc_prd_ed_dt", "");
		sctrwDtlMap.put("wrk_st_hr", "");
		sctrwDtlMap.put("wrk_ed_hr", "");
		sctrwDtlMap.put("evt_prd_st_dt", "");
		sctrwDtlMap.put("evt_prd_ed_dt", "");
		sctrwDtlMap.put("py_Nt", "");
		sctrwDtlMap.put("sel_Ssdy_Rto", "");
		sctrwDtlMap.put("wrs_Spyam", "");
		sctrwDtlMap.put("sctr_Sjt", "");
		if ("S410".equals(CTRW_KDC)) {
			sctrwDtlMap.put("name", "");
			sctrwDtlMap.put("kind", "");
			sctrwDtlMap.put("purpose", "");
		}

		return sctrwDtlMap;
	}	
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/oz/ct/eltctrw/printEtcItemList")
	public RestResult printEtcItemList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String eltCtrwNo = requestHelper.getParameter("eltCtrwNo");
			String chgSqno = requestHelper.getParameter("chgSqno");

			List<List<?>> all_list = new ArrayList<List<?>>();
			List<Map<String, Object>> masterList = eltctrwService.retrievePrintItemList(eltCtrwNo, chgSqno);
			List<Map<String, Object>> detailList = eltctrwService.retrievetPrintItemHeader(eltCtrwNo, chgSqno);

			all_list.add(masterList);
			all_list.add(detailList);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/* 출력
	 *  화면ID : OMG_DS_SC_3113, OMG_DS_SC_3114, OMG_DS_SC_3115 
	 *  화면설명 : 공통(직매장), 농산, 테넌트 전자계약서
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/ct/eltctrw/osEltctrwNew")
	public RestResult osEltctrwTypesOZNew(HttpServletRequest request, HttpServletResponse response, String ELT_CTRW_NO ,String CHG_SQNO, String TEMP_YN){
		try{			
			String add_Ctrw_Kdc = "";
			String mn_Ctrw_Kdc = "";
			String add_Ctrw_Yn = "";
			String pmiw_Yn = "";
			String sctrw_Yn = ""; // SCTRW_YN 특약서여부
			String etc_Ctrw_Yn = "";
			String sealOmitYn = "N"; // 직인생략여부
			
			List<List<?>> all_list = new ArrayList<List<?>>(); 
			
			// 타이틀
			List<AnwEltCtrwDrupVO> mainlist = anwEltCtrwDrupService.selectSearch(ELT_CTRW_NO ,CHG_SQNO);
			List<Map<String,Object>> main = new ArrayList<Map<String,Object>>();
			Map<String,Object> _main = new HashMap<String, Object>();
			
			/*
			 *  계약서 종류 코드 길이가 1 이면 '10'을 앞에 붙인다
			 *  그렇지 않으면 앞에 1을 붙인다. 
			 *  하나로 유통은 100번대
			 *  수산부 축산부는 110, 111
			 */
			String ver = "";
			if (StringUtils.trim(mainlist.get(0).getMN_CTRW_KD()).length() == 3) {
				ver = "";
			} else if (StringUtils.trim(mainlist.get(0).getMN_CTRW_KD()).length() == 1) {
				ver = "10";
			} else {
				ver = "1";
			}

			mn_Ctrw_Kdc = ver + mainlist.get(0).getMN_CTRW_KD();
			add_Ctrw_Yn = mainlist.get(0).getADD_CTRW_YN();
			pmiw_Yn = mainlist.get(0).getPMIW_YN();
			sctrw_Yn = mainlist.get(0).getSCTRW_YN(); // 특약서
			etc_Ctrw_Yn = mainlist.get(0).getETC_CTRW_YN();
			sealOmitYn = mainlist.get(0).getSEAL_OMIT_YN(); // 직인생략여부, 생략일 때 직인파일 Base64생성 안함
			
			/****************************
			 * [1] 메인계약서
			 ****************************/
			_main.put("ctr_Ed_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTR_ED_DT()));
			_main.put("ctr_St_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTR_ST_DT()));
			_main.put("ctr_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTR_DT()));
			_main.put("ctrw_Drup_Dt", StringUtil.converNullToBlank(mainlist.get(0).getCTRW_DRUP_DT()));
			_main.put("bzno", StringUtil.converNullToBlank(mainlist.get(0).getBZNO()));
			_main.put("addr", StringUtil.converNullToBlank(mainlist.get(0).getADDR()));
			_main.put("buyer_Addr", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_ADDR()));
			_main.put("mn_Ctrw_Kd", mn_Ctrw_Kdc);
			_main.put("add_Ctrw_Yn", add_Ctrw_Yn);
			_main.put("pmiw_Yn", pmiw_Yn);
			_main.put("sctrw_Yn", sctrw_Yn);
			_main.put("etc_Ctrw_Yn", etc_Ctrw_Yn);
			_main.put("ceo", StringUtil.converNullToBlank(mainlist.get(0).getCEO()));
			_main.put("mtalnm", StringUtil.converNullToBlank(mainlist.get(0).getMTALNM()));
			_main.put("na_Trpl_C", StringUtil.converNullToBlank(mainlist.get(0).getNA_TRPL_C()));
			_main.put("buyer_Blg", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_BLG()));
			_main.put("buyer_Nm", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_NM()));
			_main.put("buyer_Na_Trpl_C", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_NA_TRPL_C()));
			_main.put("ctr_Chrr_Mtalnm", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_MTALNM()));
			_main.put("ctr_Chrr_Repmn", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REPMN()));
			_main.put("ctr_Chrr_Repmn_Dtynm", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REP_DTYNM()));
			_main.put("ctr_Chrr_Nm", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REP_DTYNM()) + " " + StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR_REPMN()));
			_main.put("la_Agnt", StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT()));
			_main.put("fgat_Prvt_C", StringUtil.converNullToBlank(mainlist.get(0).getFGAT_PRVT_C()));
			_main.put("colb_Comp_sgnt", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SGNT()));
			_main.put("colb_Comp_sgnt_dtm", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SGNT_DTM()));
			_main.put("colb_Comp_Seal_Apdflnm", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SEAL_APDFLNM()));
			_main.put("colb_Comp_Seal_Sys_Flnm", StringUtil.converNullToBlank(mainlist.get(0).getCOLB_COMP_SEAL_SYS_FLNM()));
			_main.put("buyer_Seal_Apdflnm", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SEAL_APDFLNM()));
			_main.put("buyer_Seal_Sys_Flnm", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SEAL_SYS_FLNM()));
			_main.put("copNo", filterCopno(StringUtil.converNullToBlank(mainlist.get(0).getCOPNO())));
			_main.put("rrNo", StringUtil.converNullToBlank(mainlist.get(0).getRRNO()));
			_main.put("la_Agnt_Dtynm", StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT_DTYNM()));
			_main.put("la_Agnt_Nm", StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT_DTYNM()) + " " + StringUtil.converNullToBlank(mainlist.get(0).getLA_AGNT()));
			_main.put("aut_xtn_yn", StringUtil.converNullToBlank(mainlist.get(0).getCTR_PRD_AUT_XTN_YN()));
			_main.put("edt_mtalNm", "");
			_main.put("buyer_sgnt", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SGNT()));
			_main.put("buyer_sgnt_dt", StringUtil.converNullToBlank(mainlist.get(0).getBUYER_SGNT_DT()));
			_main.put("mn_Ctrw_Kdnm", StringUtil.converNullToBlank(mainlist.get(0).getMN_CTRW_KDNM()));
			if (TEMP_YN != null && "Y".equals(TEMP_YN)) {
				_main.put("temp_yn", "Y");
			} else {
				_main.put("temp_yn", "");
			}
			_main.put("atch_cnt", StringUtil.converNullToBlank(mainlist.get(0).getATCH_CTR_CNT()));
			_main.put("clean_yn", StringUtil.converNullToBlank(mainlist.get(0).getCLEAN_YN()));
			_main.put("seal_omit_yn", sealOmitYn);
			_main.put("ctr_Chrr", StringUtil.converNullToBlank(mainlist.get(0).getCTR_CHRR()));

			// 협력업체인감
			String COLB_COMP_SEAL_SYS_FLNM = mainlist.get(0).getCOLB_COMP_SEAL_SYS_FLNM();
			String tempPath = Configurer.getProperty("file.realElt.path");
			File dir = new File(tempPath);
			if (!"Y".equals(sealOmitYn) && StringUtils.isNotEmpty(COLB_COMP_SEAL_SYS_FLNM)) {
				String baseImage = "";
				try {
					File f = FileUtils.getFile(dir, COLB_COMP_SEAL_SYS_FLNM);
					baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
				} catch (IOException e) {
					logger.error(e.getMessage(), e);
					baseImage = "";
				}

				if (!"".equals(baseImage)) {
					_main.put("colb_Comp_Seal_Sys_Flnm", "data:;base64," + baseImage);// 직인파일
				} else {
					_main.put("colb_Comp_Seal_Sys_Flnm", "");
				}
			} else {
				_main.put("colb_Comp_Seal_Sys_Flnm", "");
			}

			// 바이어인감
			String BUYER_SEAL_SYS_FLNM = mainlist.get(0).getBUYER_SEAL_SYS_FLNM();
			if (!"Y".equals(sealOmitYn) && StringUtils.isNotEmpty(BUYER_SEAL_SYS_FLNM)) {
				String baseImage = "";
				try {
					File f = FileUtils.getFile(dir, BUYER_SEAL_SYS_FLNM);
					baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
				} catch (IOException e) {
					logger.error(e.getMessage(), e);
					baseImage = "";
				}

				if (!"".equals(baseImage)) {
					_main.put("buyer_Seal_Sys_Flnm", "data:;base64," + baseImage);// 직인파일
				} else {
					_main.put("buyer_Seal_Sys_Flnm", "");
				}
			} else {
				_main.put("buyer_Seal_Sys_Flnm", "");
			}

			main.add(_main);
			
			/****************************
			 * [1-1] 부속계약서 본 계약서
			 ****************************/
			boolean isAtchElt = false;
			List<Map<String,Object>> mainOrg = new ArrayList<Map<String,Object>>();
			Map<String,Object> _mainOrg = new HashMap<String, Object>();
//			if ("191".equals(mn_Ctrw_Kdc) || "192".equals(mn_Ctrw_Kdc) || "193".equals(mn_Ctrw_Kdc) || "194".equals(mn_Ctrw_Kdc)) {
			if (mn_Ctrw_Kdc != null && mn_Ctrw_Kdc.startsWith("19")) {
				String bfCtrNo = mainlist.get(0).getBF_CTR_NO();
				String bfCtrSqno = mainlist.get(0).getBF_CTR_SQNO();
				List<AnwEltCtrwDrupVO> bfmainlist = anwEltCtrwDrupService.selectSearch(bfCtrNo ,bfCtrSqno);
				
				if (bfmainlist.size() > 0) {
					String ver2 = "";
					String mn_Ctrw_Kd2 = StringUtils.trim(bfmainlist.get(0).getMN_CTRW_KD());
					if (mn_Ctrw_Kd2 != null) {
						if (mn_Ctrw_Kd2.length() == 1) {
							ver2 = "10";
						} else if (mn_Ctrw_Kd2.length() == 2) {
							ver2 = "1";
						}
					}
					
					_mainOrg.put("mn_Ctrw_Kd", ver2 + mn_Ctrw_Kd2);
					_mainOrg.put("mn_Ctrw_Kdnm", StringUtil.converNullToBlank(bfmainlist.get(0).getMN_CTRW_KDNM()));
					_mainOrg.put("fgat_Prvt_C", StringUtil.converNullToBlank(bfmainlist.get(0).getFGAT_PRVT_C()));
					_mainOrg.put("ctrw_Drup_Dt", StringUtil.converNullToBlank(bfmainlist.get(0).getCTRW_DRUP_DT()));
				} else {
					// 여기로 들어오면 잘못된 부속계약서 (방어코드)
					_mainOrg.put("mn_Ctrw_Kd", "");
					_mainOrg.put("mn_Ctrw_Kdnm", "");
					_mainOrg.put("fgat_Prvt_C", "");
					_mainOrg.put("ctrw_Drup_Dt", "");
				}
				
				mainOrg.add(_mainOrg);
				isAtchElt= true;
			}
			
			/****************************
			 * [1-2] 워터마크 표시를 위한 전자계약 상태
			 ****************************/
			List<Map<String,Object>> mainSts = new ArrayList<Map<String,Object>>();
			Map<String,Object> _mainSts = new HashMap<String, Object>();
			_mainSts.put("sts_nm", StringUtil.converNullToBlank(mainlist.get(0).getSTS()));
			_mainSts.put("sts_dtm", StringUtil.converNullToBlank(mainlist.get(0).getLSCHG_DTM()));
			mainSts.add(_mainSts);
			
			/****************************
			 * [2] 메인계약서 상세내용
			 ****************************/
			List<EltCtrwDtlVO> eltCtrwDtllist = anwEltCtrwDrupService.selectEltCtrwDtl(ELT_CTRW_NO ,CHG_SQNO);
			List<Map<String,Object>> eltCtrwDtl = new ArrayList<Map<String,Object>>();
			for (EltCtrwDtlVO vo : eltCtrwDtllist) {
				Map<String, Object> eltCtrwDtlMap = new HashMap<String, Object>();
				eltCtrwDtlMap.put("mn_Ctrw_Kdc", StringUtil.converNullToBlank(vo.getMN_CTRW_KDC()));
				eltCtrwDtlMap.put("cnr_Dt", StringUtil.converNullToBlank(vo.getCNR_DT()));
				eltCtrwDtlMap.put("psg_Mm", StringUtil.converNullToBlank(vo.getPSG_MM()));
				eltCtrwDtlMap.put("psg_Dd", StringUtil.converNullToBlank(vo.getPSG_DD()));
				eltCtrwDtlMap.put("etr_Fee", StringUtil.converNullToBlank(vo.getETR_FEE()));
				eltCtrwDtlMap.put("phd_Feert", StringUtil.converNullToBlank(vo.getPHD_FEERT()));
				eltCtrwDtlMap.put("lig_Pltpe", StringUtil.converNullToBlank(vo.getLIG_PLTPE()));
				eltCtrwDtlMap.put("mexp_Dd", StringUtil.converNullToBlank(vo.getMEXP_DD()));
				eltCtrwDtlMap.put("rt", StringUtil.converNullToBlank(vo.getRT()).replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>"));
				eltCtrwDtlMap.put("blm_Grmy", StringUtil.converNullToBlank(vo.getBLM_GRMY()));
				eltCtrwDtlMap.put("blmGrmy", StringUtil.converNullToBlank(vo.getBLM_GRMY()));
				eltCtrwDtlMap.put("wrsPrmPy", StringUtil.converNullToBlank(vo.getWRS_PRM_PY()));
				eltCtrwDtlMap.put("grmy", StringUtil.converNullToBlank(vo.getGRMY()));
				eltCtrwDtlMap.put("wrsSpyam", StringUtil.converNullToBlank(vo.getWRS_SPYAM()));
				eltCtrwDtlMap.put("ctrClo", StringUtil.converNullToBlank(vo.getCTR_CLO()));
				eltCtrwDtlMap.put("ctrw_Tinm", StringUtil.converNullToBlank(vo.getCTRW_TINM()));
				eltCtrwDtlMap.put("brand_N", StringUtil.converNullToBlank(vo.getBRAND_N()));
				eltCtrwDtlMap.put("returnDate", StringUtil.converNullToBlank(vo.getRETURN_DATE()));
				eltCtrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
				
				// 예비용 컬럼
				eltCtrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
				eltCtrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
				eltCtrwDtlMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
				eltCtrwDtlMap.put("etc4", StringUtil.converNullToBlank(vo.getETC4()));
				eltCtrwDtlMap.put("etc5", StringUtil.converNullToBlank(vo.getETC5()));
				eltCtrwDtlMap.put("etc6", StringUtil.converNullToBlank(vo.getETC6()));
				eltCtrwDtlMap.put("etc7", StringUtil.converNullToBlank(vo.getETC7()));
				eltCtrwDtlMap.put("etc8", StringUtil.converNullToBlank(vo.getETC8()));
				eltCtrwDtlMap.put("etc9", StringUtil.converNullToBlank(vo.getETC9()));
				eltCtrwDtlMap.put("etc10", StringUtil.converNullToBlank(vo.getETC10()));
				eltCtrwDtlMap.put("etc11", StringUtil.converNullToBlank(vo.getETC11()));
				eltCtrwDtlMap.put("etc12", StringUtil.converNullToBlank(vo.getETC12()));
				eltCtrwDtlMap.put("etc13", StringUtil.converNullToBlank(vo.getETC13()));
				eltCtrwDtlMap.put("etc14", StringUtil.converNullToBlank(vo.getETC14()));
				eltCtrwDtlMap.put("etc15", StringUtil.converNullToBlank(vo.getETC15()));
				eltCtrwDtlMap.put("etc16", StringUtil.converNullToBlank(vo.getETC16()));
				eltCtrwDtlMap.put("etc17", StringUtil.converNullToBlank(vo.getETC17()));
				eltCtrwDtlMap.put("etc18", StringUtil.converNullToBlank(vo.getETC18()));
				
				DecimalFormat df = new DecimalFormat("#,###");
				eltCtrwDtlMap.put("etc19", df.format(StringUtil.sTol(StringUtil.converNullToBlank(vo.getETC19()), 0)));
				eltCtrwDtlMap.put("etc19S", convertHangul(StringUtil.converNullToBlank(vo.getETC19())));
				eltCtrwDtlMap.put("etc20", df.format(StringUtil.sTol(StringUtil.converNullToBlank(vo.getETC20()), 0)));
				eltCtrwDtlMap.put("etc20S", convertHangul(StringUtil.converNullToBlank(vo.getETC20())));
				
				eltCtrwDtlMap.put("etc21", StringUtil.converNullToBlank(vo.getETC21()));
				eltCtrwDtlMap.put("etc22", StringUtil.converNullToBlank(vo.getETC22()));
				eltCtrwDtlMap.put("etc23", StringUtil.converNullToBlank(vo.getETC23()));
				eltCtrwDtlMap.put("etc24", StringUtil.converNullToBlank(vo.getETC24()));
				eltCtrwDtlMap.put("etc25", StringUtil.converNullToBlank(vo.getETC25()));
				eltCtrwDtlMap.put("etc26", StringUtil.converNullToBlank(vo.getETC26()));
				eltCtrwDtlMap.put("etc27", StringUtil.converNullToBlank(vo.getETC27()));
				eltCtrwDtlMap.put("etc28", StringUtil.converNullToBlank(vo.getETC28()));
				eltCtrwDtlMap.put("etc29", StringUtil.converNullToBlank(vo.getETC29()));
				eltCtrwDtlMap.put("etc30", StringUtil.converNullToBlank(vo.getETC30()));
				eltCtrwDtlMap.put("etc31", StringUtil.converNullToBlank(vo.getETC31()));
				eltCtrwDtlMap.put("etc32", StringUtil.converNullToBlank(vo.getETC32()));
				eltCtrwDtlMap.put("etc33", StringUtil.converNullToBlank(vo.getETC33()));
				eltCtrwDtlMap.put("etc34", StringUtil.converNullToBlank(vo.getETC34()));
				eltCtrwDtlMap.put("etc35", StringUtil.converNullToBlank(vo.getETC35()));
				eltCtrwDtlMap.put("etc36", StringUtil.converNullToBlank(vo.getETC36()));
				eltCtrwDtlMap.put("etc37", StringUtil.converNullToBlank(vo.getETC37()));
				eltCtrwDtlMap.put("etc38", StringUtil.converNullToBlank(vo.getETC38()));
				eltCtrwDtlMap.put("etc39", StringUtil.converNullToBlank(vo.getETC39()));
				eltCtrwDtlMap.put("etc40", StringUtil.converNullToBlank(vo.getETC40()));
				eltCtrwDtlMap.put("etc41", StringUtil.converNullToBlank(vo.getETC41()));
				eltCtrwDtlMap.put("etc42", StringUtil.converNullToBlank(vo.getETC42()));
				eltCtrwDtlMap.put("etc43", StringUtil.converNullToBlank(vo.getETC43()));
				eltCtrwDtlMap.put("etc44", StringUtil.converNullToBlank(vo.getETC44()));
				eltCtrwDtlMap.put("etc45", StringUtil.converNullToBlank(vo.getETC45()));
				eltCtrwDtlMap.put("etc46", StringUtil.converNullToBlank(vo.getETC46()));
				eltCtrwDtlMap.put("etc47", StringUtil.converNullToBlank(vo.getETC47()));
				eltCtrwDtlMap.put("etc48", StringUtil.converNullToBlank(vo.getETC48()));
				eltCtrwDtlMap.put("etc49", StringUtil.converNullToBlank(vo.getETC49()));
				eltCtrwDtlMap.put("etc51", StringUtil.converNullToBlank(vo.getETC51()));
				eltCtrwDtlMap.put("etc52", StringUtil.converNullToBlank(vo.getETC52()));

				// 매장위치 (도면)
				String shopPlanImg = vo.getETC50();
				String shopPlanImgNm = vo.getETC49();
				
				if (StringUtils.isNotEmpty(shopPlanImg)) {
					String baseImage = getBase64Image(dir, shopPlanImg, shopPlanImgNm);
					
					if (!"".equals(baseImage)) {
						eltCtrwDtlMap.put("etc50", "data:;base64," + baseImage);
					} else {
						eltCtrwDtlMap.put("etc50", "");
					}
				} else {
					eltCtrwDtlMap.put("etc50", "");
				}

				eltCtrwDtl.add(eltCtrwDtlMap);
			}
			
			
			/****************************
			 * [3] 별지1. 상품판매조건 / 기타계약서 거래품목리스트
			 ****************************/
			List<Map<String, Object>> itemList = eltctrwService.retrievetEtcItemList(ELT_CTRW_NO, CHG_SQNO);
			List<Map<String, Object>> etcItemAList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcItemIList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcItemList = new ArrayList<Map<String, Object>>();
			
			if ("151|152".indexOf(mn_Ctrw_Kdc) != -1) {
				if (itemList != null && itemList.size() > 0) {
					for(Map<String, Object> map : itemList) {
						if (map.get("ITEM_CODE").equals("A")){
							Map<String, Object> itemAMap = new HashMap<String, Object>();
							itemAMap.put("BRAND", map.get("BRAND"));
							itemAMap.put("ITEM_NAME", map.get("ITEM_NAME"));
							itemAMap.put("STANDARD", map.get("STANDARD"));
							itemAMap.put("QTY", map.get("QTY"));
							
							// 매장위치 (도면)
							String shopPlanImg = (String) map.get("UPR");
							String shopPlanImgNm = (String) map.get("QTY");
							
							if (StringUtils.isNotEmpty(shopPlanImg)) {
								String baseImage = getBase64Image(dir, shopPlanImg, shopPlanImgNm);
								if (!"".equals(baseImage)) {
									itemAMap.put("UPR", "data:;base64," + baseImage);
								} else {
									itemAMap.put("UPR", "");
								}
							} else {
								itemAMap.put("UPR", "");
							}
							etcItemAList.add(itemAMap);
						} else if (map.get("ITEM_CODE").equals("I")){
							Map<String, Object> itemIMap = new HashMap<String, Object>();
							itemIMap.put("BRAND", map.get("BRAND"));
							itemIMap.put("ITEM_NAME", map.get("ITEM_NAME"));
							itemIMap.put("QTY", map.get("QTY"));
							itemIMap.put("UPR", map.get("UPR"));
							etcItemIList.add(itemIMap);	
						}
					}
				} else {
					Map<String, Object> itemAMap = new HashMap<String, Object>();
					itemAMap.put("BRAND", "");
					itemAMap.put("ITEM_NAME", "");
					itemAMap.put("STANDARD", "");
					itemAMap.put("QTY", "");
					itemAMap.put("UPR", "");
					etcItemAList.add(itemAMap);
					Map<String, Object> itemIMap = new HashMap<String, Object>();
					itemIMap.put("BRAND", "");
					itemIMap.put("ITEM_NAME", "");
					itemIMap.put("QTY", "");
					itemIMap.put("UPR", "");
					etcItemIList.add(itemIMap);	
				}
			} else if ("161|162|163|164|165|166|167|168|169|170|171|172|173|174|175|176|177".indexOf(mn_Ctrw_Kdc) != -1) {
				// 자재부 통합
				if (itemList != null && itemList.size() > 0) {
					for(Map<String, Object> map : itemList) {
						Map<String, Object> itemMap = new HashMap<String, Object>();
						itemMap.put("ITEM_YN", "Y"); // 작성여부
						itemMap.put("ITEM_CODE", map.get("ITEM_CODE"));
						itemMap.put("ITEM_NAME", map.get("ITEM_NAME"));
						itemMap.put("STANDARD", map.get("STANDARD"));
						itemMap.put("COUNTRY", map.get("COUNTRY"));
						itemMap.put("COMPANY", map.get("COMPANY"));
						itemMap.put("BRAND", map.get("BRAND"));
						itemMap.put("QTY", map.get("QTY"));
						itemMap.put("UPR", map.get("UPR"));
						itemMap.put("ETC1", map.get("ETC1"));
						itemMap.put("ETC2", map.get("ETC2"));
						itemMap.put("ETC3", map.get("ETC3"));
						itemMap.put("ETC4", map.get("ETC4"));
						itemMap.put("ETC5", map.get("ETC5")); // 리스트 구분용
						
						if ("163|165|167|169|170|171|172|173|175|176".indexOf(mn_Ctrw_Kdc) != -1) {
							etcItemList.add(itemMap);
						} else if (map.get("ETC5").equals("A")){
							etcItemAList.add(itemMap);
						} else if (map.get("ETC5").equals("I")){
							etcItemIList.add(itemMap);	
						}
					}
				} else {
					Map<String, Object> itemMap = new HashMap<String, Object>();
					itemMap.put("ITEM_YN", "N"); // 작성여부
					itemMap.put("ITEM_CODE", "");
					itemMap.put("ITEM_NAME", "");
					itemMap.put("STANDARD", "");
					itemMap.put("COUNTRY", "");
					itemMap.put("COMPANY", "");
					itemMap.put("FSRG_DTM", "");
					itemMap.put("FS_RGM", "");
					itemMap.put("LSCHG_DTM", "");
					itemMap.put("LS_CHGM", "");
					itemMap.put("BRAND", "");
					itemMap.put("QTY", "");
					itemMap.put("UPR", "");
					itemMap.put("ETC1", "");
					itemMap.put("ETC2", "");
					itemMap.put("ETC3", "");
					itemMap.put("ETC4", "");
					itemMap.put("ETC5", "");
					
					if ("163|165|167|169|170|171|172|173|175|176".indexOf(mn_Ctrw_Kdc) != -1) {
						etcItemList.add(itemMap);
					} else {
						etcItemAList.add(itemMap);
						etcItemIList.add(itemMap);	
					}
				}
			} else {
				if (itemList != null && itemList.size() > 0) {
					for(Map<String, Object> map : itemList) {
						Map<String, Object> itemMap = new HashMap<String, Object>();
						itemMap.put("BRAND", map.get("BRAND"));
						itemMap.put("ITEM_NAME", map.get("ITEM_NAME"));
						itemMap.put("QTY", map.get("QTY"));
						itemMap.put("UPR", map.get("UPR"));
						etcItemList.add(itemMap);
					}
				} else {
					Map<String, Object> itemMap = new HashMap<String, Object>();
					itemMap.put("BRAND", "");
					itemMap.put("ITEM_NAME", "");
					itemMap.put("QTY", "");
					itemMap.put("UPR", "");
					etcItemList.add(itemMap);
				}
			}	
			
			/****************************
			 * [3] 별지2. 매장의 위치 등은 계약서 상세에 포함
			 ****************************/
			
			/****************************
			 * [4]부가 계약서 
			 ****************************/
			List<AddEltCtrwDtlVO> addEltCtrwDtlList ;
			List<Map<String,Object>> addEltCtrwDtl206 = new ArrayList<Map<String,Object>>();
			
			if("1".equals(add_Ctrw_Yn)){
				// 부가계약서가 있는 경우
				addEltCtrwDtlList = anwEltCtrwDrupService.selectAddEltCtrwDtl(ELT_CTRW_NO ,CHG_SQNO);
				for(AddEltCtrwDtlVO vo : addEltCtrwDtlList){
					Map<String,Object> addEltCtrwDtlMap = new HashMap<String, Object>();
					add_Ctrw_Kdc = vo.getADD_CTRW_KDC();
					if("206".equals(add_Ctrw_Kdc)){
						addEltCtrwDtlMap.put("add_ctrw_kdc",	add_Ctrw_Kdc);
						addEltCtrwDtlMap.put("pb_ctrw_tinm",	StringUtil.converNullToBlank(vo.getPB_CTRW_TINM()));
						addEltCtrwDtlMap.put("cnr_dt",			StringUtil.converNullToBlank(vo.getCNR_DT()));
						addEltCtrwDtlMap.put("psg_mm",			StringUtil.converNullToBlank(vo.getPSG_MM()));
						addEltCtrwDtlMap.put("psg_dd",			StringUtil.converNullToBlank(vo.getPSG_DD()));
						addEltCtrwDtlMap.put("etc1",			StringUtil.converNullToBlank(vo.getETC1()));
						addEltCtrwDtlMap.put("etc2",			StringUtil.converNullToBlank(vo.getETC2()));
						addEltCtrwDtlMap.put("etc3",			StringUtil.converNullToBlank(vo.getETC3()));
						String str = StringUtil.converNullToBlank(vo.getSCTR_SJT()) ;
				        addEltCtrwDtlMap.put("sctr_Sjt",	str	);
						addEltCtrwDtl206.add(addEltCtrwDtlMap);
					}
				}
			}
			
			if (addEltCtrwDtl206.size() == 0) {
				Map<String, Object> addEltCtrwDtlMap = new HashMap<String, Object>();
				addEltCtrwDtlMap.put("add_ctrw_kdc", "E206");
				addEltCtrwDtlMap.put("pb_ctrw_tinm", "");
				addEltCtrwDtlMap.put("cnr_dt", "");
				addEltCtrwDtlMap.put("psg_mm", "");
				addEltCtrwDtlMap.put("psg_dd", "");
				addEltCtrwDtlMap.put("etc1", "");
				addEltCtrwDtlMap.put("etc2", "");
				addEltCtrwDtlMap.put("etc3", "");
				addEltCtrwDtlMap.put("sctr_Sjt", "");
				addEltCtrwDtl206.add(addEltCtrwDtlMap);
			}
			
			/****************************
			 * [5] 약정서
			 ****************************/
			List<Map<String, Object>> pmiwDtl307 = new ArrayList<Map<String, Object>>(); // 임대료, 계약기간, 매장위치 등에 관한 사항
			List<Map<String, Object>> pmiwDtl308 = new ArrayList<Map<String, Object>>(); // 임대료, 계약기간, 매장위치 등에 관한 사항
			
			if ("1".equals(pmiw_Yn)) {
				List<PmiwDtlVO> pmiwDtlList = anwEltCtrwDrupService.selectPmiwDtl(ELT_CTRW_NO, CHG_SQNO);
				for (PmiwDtlVO vo : pmiwDtlList) {
					Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
					String pmiw_Kdc = vo.getPMIW_KDC();

					pmiwDtlMap.put("pmiw_kdc", pmiw_Kdc);
					pmiwDtlMap.put("buy_am", StringUtil.converNullToBlank(vo.getBUY_AM()));
					pmiwDtlMap.put("evt_tinm", StringUtil.converNullToBlank(vo.getEVT_TINM()));
					pmiwDtlMap.put("evt_prd_st_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ST_DT()));
					pmiwDtlMap.put("evt_prd_ed_dt", StringUtil.converNullToBlank(vo.getEVT_PRD_ED_DT()));
					pmiwDtlMap.put("ETC1", StringUtil.converNullToBlank(vo.getETC1()));
					pmiwDtlMap.put("ETC2", StringUtil.converNullToBlank(vo.getETC2()));
					pmiwDtlMap.put("ETC3", StringUtil.converNullToBlank(vo.getETC3()));
					pmiwDtlMap.put("ETC4", StringUtil.converNullToBlank(vo.getETC4()));
					pmiwDtlMap.put("ETC5", StringUtil.converNullToBlank(vo.getETC5()));
					pmiwDtlMap.put("ETC6", StringUtil.converNullToBlank(vo.getETC6()));
					pmiwDtlMap.put("ETC7", StringUtil.converNullToBlank(vo.getETC7()));
					pmiwDtlMap.put("ETC8", StringUtil.converNullToBlank(vo.getETC8()));
					pmiwDtlMap.put("ETC9", StringUtil.converNullToBlank(vo.getETC9()));
					pmiwDtlMap.put("ETCA", StringUtil.converNullToBlank(vo.getETCA()));
					pmiwDtlMap.put("ETCB", StringUtil.converNullToBlank(vo.getETCB()));
					pmiwDtlMap.put("ETCC", StringUtil.converNullToBlank(vo.getETCC()));
					pmiwDtlMap.put("ETCD", StringUtil.converNullToBlank(vo.getETCD()));
					pmiwDtlMap.put("ETCE", StringUtil.converNullToBlank(vo.getETCE()));
					pmiwDtlMap.put("ETCF", StringUtil.converNullToBlank(vo.getETCF()));
					pmiwDtlMap.put("ETCG", StringUtil.converNullToBlank(vo.getETCG()));
					pmiwDtlMap.put("ETCH", StringUtil.converNullToBlank(vo.getETCH()));
					pmiwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
					if ("307".equals(pmiw_Kdc)) {
						pmiwDtl307.add(pmiwDtlMap);
					} else if ("308".equals(pmiw_Kdc)) {
						pmiwDtl308.add(pmiwDtlMap);
					}
				}
			}
			
			// 약정서 없을 때 처리
			if (pmiwDtl307.size() == 0) {
				Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
				pmiwDtlMap.put("pmiw_kdc", "E307");
				pmiwDtlMap.put("buy_am", "");
				pmiwDtlMap.put("evt_tinm", "");
				pmiwDtlMap.put("evt_prd_st_dt", "");
				pmiwDtlMap.put("evt_prd_ed_dt", "");
				pmiwDtlMap.put("ETC1", "");
				pmiwDtlMap.put("ETC2", "");
				pmiwDtlMap.put("ETC3", "");
				pmiwDtlMap.put("ETC4", "");
				pmiwDtlMap.put("ETC5", "");
				pmiwDtlMap.put("ETC6", "");
				pmiwDtlMap.put("ETC7", "");
				pmiwDtlMap.put("ETC8", "");
				pmiwDtlMap.put("ETC9", "");
				pmiwDtlMap.put("ETCA", "");
				pmiwDtlMap.put("ETCB", "");
				pmiwDtlMap.put("ETCC", "");
				pmiwDtlMap.put("ETCD", "");
				pmiwDtlMap.put("ETCE", "");
				pmiwDtlMap.put("ETCF", "");
				pmiwDtlMap.put("ETCG", "");
				pmiwDtlMap.put("ETCH", "");
				pmiwDtlMap.put("sctr_Sjt", "");
				pmiwDtl307.add(pmiwDtlMap);
			}
			if (pmiwDtl308.size() == 0) {
				Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
				pmiwDtlMap.put("pmiw_kdc", "E308");
				pmiwDtlMap.put("buy_am", "");
				pmiwDtlMap.put("evt_tinm", "");
				pmiwDtlMap.put("evt_prd_st_dt", "");
				pmiwDtlMap.put("evt_prd_ed_dt", "");
				pmiwDtlMap.put("ETC1", "");
				pmiwDtlMap.put("ETC2", "");
				pmiwDtlMap.put("ETC3", "");
				pmiwDtlMap.put("ETC4", "");
				pmiwDtlMap.put("ETC5", "");
				pmiwDtlMap.put("ETC6", "");
				pmiwDtlMap.put("ETC7", "");
				pmiwDtlMap.put("ETC8", "");
				pmiwDtlMap.put("ETC9", "");
				pmiwDtlMap.put("ETCA", "");
				pmiwDtlMap.put("ETCB", "");
				pmiwDtlMap.put("ETCC", "");
				pmiwDtlMap.put("ETCD", "");
				pmiwDtlMap.put("ETCE", "");
				pmiwDtlMap.put("ETCF", "");
				pmiwDtlMap.put("ETCG", "");
				pmiwDtlMap.put("ETCH", "");
				pmiwDtlMap.put("sctr_Sjt", "");
				pmiwDtl308.add(pmiwDtlMap);
			}
			
			/****************************
			 * [6] 특약서
			 ****************************/
			List<Map<String, Object>> sctrwDtl415 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl416 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl417 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl418 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl419 = new ArrayList<Map<String, Object>>();
			
			// 판매수수료율
			List<Map<String, Object>> sctrwNmlMrgnRt = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwCtrMrgnRt = new ArrayList<Map<String, Object>>();			
			
			if ("1".equals(sctrw_Yn)) {
				List<SctrwDtlVO> sctrwDtlList = anwEltCtrwDrupService.selectSctrwDtl(ELT_CTRW_NO, CHG_SQNO);

				for (SctrwDtlVO vo : sctrwDtlList) {
					Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
					String sctrw_Kdc = vo.getSCTRW_KDC();

					sctrwDtlMap.put("sctrw_kdc",sctrw_Kdc);
					if ("415".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtl415.add(sctrwDtlMap);
					} else if ("416".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtl416.add(sctrwDtlMap);
					} else if ("417".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						sctrwDtlMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("vld_prd_ed_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ED_DT()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
				        sctrwDtl417.add(sctrwDtlMap);
				        
				        // 정상/행사 판매 수수료율
						List<SctrwNmlMrgnRtVO> sctrwNmlMrgnRtList = anwEltCtrwDrupService.selectSctrwNmlMrgnRt(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwNmlMrgnRtList != null && sctrwNmlMrgnRtList.size() > 0) {
							for (SctrwNmlMrgnRtVO nmlMrgnRtvo : sctrwNmlMrgnRtList) {
								Map<String, Object> sctrwNmlMrgnRtMap = new HashMap<String, Object>();
								sctrwNmlMrgnRtMap.put("sctrw_kdc", StringUtil.converNullToBlank(nmlMrgnRtvo.getSCTRW_KDC()));
								sctrwNmlMrgnRtMap.put("stornm1", StringUtil.converNullToBlank(nmlMrgnRtvo.getSTORNM1()));
								sctrwNmlMrgnRtMap.put("nml_mrgn_rt", StringUtil.converNullToBlank(nmlMrgnRtvo.getNML_MRGN_RT()));
								sctrwNmlMrgnRtMap.put("evt_mrgn_rt", StringUtil.converNullToBlank(nmlMrgnRtvo.getEVT_MRGN_RT()));
								sctrwNmlMrgnRtMap.put("rmk", StringUtil.converNullToBlank(nmlMrgnRtvo.getRMK()));
								sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);
							}
						} else {
							Map<String, Object> sctrwNmlMrgnRtMap = new HashMap<String, Object>();
							sctrwNmlMrgnRtMap.put("sctrw_kdc", "");
							sctrwNmlMrgnRtMap.put("stornm1", "");
							sctrwNmlMrgnRtMap.put("nml_mrgn_rt", "");
							sctrwNmlMrgnRtMap.put("evt_mrgn_rt", "");
							sctrwNmlMrgnRtMap.put("rmk", "");
							sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);
						}

						// 할인판매 수수료율
						List<SctrwCtrMrgnRtVO> sctrwCtrMrgnRtList = anwEltCtrwDrupService.selectSctrwCtrMrgnRt(ELT_CTRW_NO, CHG_SQNO);
						if (sctrwCtrMrgnRtList != null && sctrwCtrMrgnRtList.size() > 0) {
							for (SctrwCtrMrgnRtVO ctrMrgnRtvo : sctrwCtrMrgnRtList) {
								Map<String, Object> sctrwCtrMrgnRtMap = new HashMap<String, Object>();
								sctrwCtrMrgnRtMap.put("sctrw_kdc", StringUtil.converNullToBlank(ctrMrgnRtvo.getSCTRW_KDC()));
								sctrwCtrMrgnRtMap.put("stornm1", StringUtil.converNullToBlank(ctrMrgnRtvo.getSTORNM1()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT10()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT20()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT30()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT40()));
								sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", StringUtil.converNullToBlank(ctrMrgnRtvo.getDC_SEL_MRGN_RT50()));
								sctrwCtrMrgnRtMap.put("rmk", StringUtil.converNullToBlank(ctrMrgnRtvo.getRMK()));
								sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
							}
						} else {
							Map<String, Object> sctrwCtrMrgnRtMap = new HashMap<String, Object>();
							sctrwCtrMrgnRtMap.put("sctrw_kdc", "");
							sctrwCtrMrgnRtMap.put("stornm1", "");
							sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", "");
							sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", "");
							sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", "");
							sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", "");
							sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", "");
							sctrwCtrMrgnRtMap.put("rmk", "");
							sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
						}
					} else if ("418".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("vld_prd_st_dt", StringUtil.converNullToBlank(vo.getVLD_PRD_ST_DT()));
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtl418.add(sctrwDtlMap);
					} else if ("419".equals(sctrw_Kdc)) {
						sctrwDtlMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						sctrwDtl419.add(sctrwDtlMap);
					}
				}
			}
			
			// 특약사항 없을 때 처리
			if (sctrwDtl415.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E415");
				sctrwDtlMap.put("vld_prd_st_dt", "");
				sctrwDtlMap.put("vld_prd_ed_dt", "");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl415.add(sctrwDtlMap);
			}
			if (sctrwDtl416.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E416");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl416.add(sctrwDtlMap);
			}
			if (sctrwDtl417.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E417");
				sctrwDtlMap.put("etc1", "");
				sctrwDtlMap.put("etc2", "");
				sctrwDtlMap.put("vld_prd_st_dt", "");
				sctrwDtlMap.put("vld_prd_ed_dt", "");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl417.add(sctrwDtlMap);
				
				Map<String, Object> sctrwNmlMrgnRtMap = new HashMap<String, Object>();
				sctrwNmlMrgnRtMap.put("sctrw_kdc", "");
				sctrwNmlMrgnRtMap.put("stornm1", "");
				sctrwNmlMrgnRtMap.put("nml_mrgn_rt", "");
				sctrwNmlMrgnRtMap.put("evt_mrgn_rt", "");
				sctrwNmlMrgnRtMap.put("rmk", "");
				sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);
				
				Map<String, Object> sctrwCtrMrgnRtMap = new HashMap<String, Object>();
				sctrwCtrMrgnRtMap.put("sctrw_kdc", "");
				sctrwCtrMrgnRtMap.put("stornm1", "");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", "");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", "");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", "");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", "");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", "");
				sctrwCtrMrgnRtMap.put("rmk", "");
				sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
			}
			if (sctrwDtl418.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E418");
				sctrwDtlMap.put("vld_prd_st_dt", "");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl418.add(sctrwDtlMap);
			}
			if (sctrwDtl419.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E419");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl419.add(sctrwDtlMap);
			}

			/****************************
			 * [7] 기타계약서
			 ****************************/
			List<Map<String, Object>> etcEltCtrw502 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcEltCtrw503 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcEltCtrw504 = new ArrayList<Map<String, Object>>();

			if ("1".equals(etc_Ctrw_Yn)) {
				List<EtcEltCtrwVO> etcEltCtrwList = anwEltCtrwDrupService.selectEtcEltCtrw(ELT_CTRW_NO, CHG_SQNO);

				for (EtcEltCtrwVO vo : etcEltCtrwList) {
					Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
					String etc_Ctrw_Kdc = vo.getETC_CTRW_KDC();
					etcEltCtrwMap.put("etc_ctrw_kdc", etc_Ctrw_Kdc);
					
					if ("502".equals(etc_Ctrw_Kdc)) {
						etcEltCtrwMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						etcEltCtrwMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						etcEltCtrwMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
						etcEltCtrwMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						etcEltCtrw502.add(etcEltCtrwMap);
					} else if ("503".equals(etc_Ctrw_Kdc)) {
						etcEltCtrwMap.put("etc1", StringUtil.converNullToBlank(vo.getETC1()));
						etcEltCtrwMap.put("etc2", StringUtil.converNullToBlank(vo.getETC2()));
						etcEltCtrwMap.put("etc3", StringUtil.converNullToBlank(vo.getETC3()));
						etcEltCtrwMap.put("sctr_Sjt", StringUtil.converNullToBlank(vo.getSCTR_SJT()));
						etcEltCtrw503.add(etcEltCtrwMap);
					} else if ("504".equals(etc_Ctrw_Kdc)) {
						etcEltCtrw504.add(etcEltCtrwMap); // 스마트유통 시스템 이용신청서 - 개인정보처리위탁기준
					}
				}
			}

			// 기타계약서 (품질보증 협정서)
			if (etcEltCtrw502.size() == 0) {
				Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
				etcEltCtrwMap.put("etc_ctrw_kdc", "S502");
				etcEltCtrwMap.put("etc1", "");
				etcEltCtrwMap.put("etc2", "");
				etcEltCtrwMap.put("etc3", "");
				etcEltCtrwMap.put("sctr_Sjt", "");
				etcEltCtrw502.add(etcEltCtrwMap);
			}
			// 기타계약서 없을 때 처리
			if (etcEltCtrw503.size() == 0) {
				Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
				etcEltCtrwMap.put("etc_ctrw_kdc", "S503");
				etcEltCtrwMap.put("etc1", "");
				etcEltCtrwMap.put("etc2", "");
				etcEltCtrwMap.put("etc3", "");
				etcEltCtrwMap.put("sctr_Sjt", "");
				etcEltCtrw503.add(etcEltCtrwMap);
			}
			
			// 기타계약서 없을 때 처리 (스마트유통 시스템 이용신청서 - 개인정보처리위탁기준)
			if (etcEltCtrw504.size() == 0) {
				etcEltCtrw504.add(retrieveEtcEltCtrw("S504"));
			}

			
			/****************************
			 * [8] 계약서 양식
			 ****************************/
			List<EtcEltStylAmnVO> etcEltStylAmnlist = anwEltCtrwDrupService.selectEtcEltStylAmn(ELT_CTRW_NO, CHG_SQNO);
			List<Map<String, Object>> stylAmn = new ArrayList<Map<String, Object>>();
			for (EtcEltStylAmnVO vo : etcEltStylAmnlist) {
				Map<String, Object> etcEltStylAmnMap = new HashMap<String, Object>();

				etcEltStylAmnMap.put("ctrw_Kdc", vo.getCTRW_KDC());
				etcEltStylAmnMap.put("sqno", vo.getSQNO());

				String str = vo.getCTRW_CNTN();
				str = str.replaceAll(" ", "&nbsp;");
				str = str.replaceAll("\n", "<br/>");

				etcEltStylAmnMap.put("ctrw_Cntn", str);
				stylAmn.add(etcEltStylAmnMap);
			}
			
			// 특수문자 예외 처리를 위한 함수 (계약서 양식은 적용하지 않음)
			filterTextListForOZ(main);
			filterTextListForOZ(mainOrg);
			filterTextListForOZ(mainSts);
			filterTextListForOZ(eltCtrwDtl, new String[]{"etc50"});
			filterTextListForOZ(sctrwDtl415);
			filterTextListForOZ(sctrwDtl416);
			filterTextListForOZ(sctrwDtl417);
			filterTextListForOZ(sctrwDtl418);
			filterTextListForOZ(sctrwDtl419);
			filterTextListForOZ(pmiwDtl307);
			filterTextListForOZ(pmiwDtl308);
			filterTextListForOZ(etcEltCtrw502);
			filterTextListForOZ(etcEltCtrw503);
			filterTextListForOZ(etcEltCtrw504);
			if ("152".indexOf(mn_Ctrw_Kdc) != -1) {
				filterTextListForOZ(etcItemAList, new String[]{"UPR"});
			}else{
				filterTextListForOZ(etcItemAList);
			}
			filterTextListForOZ(etcItemIList);
			filterTextListForOZ(etcItemList);
			filterTextListForOZ(sctrwNmlMrgnRt);
			filterTextListForOZ(sctrwCtrMrgnRt);
			filterTextListForOZ(addEltCtrwDtl206);

			/* 보고서 데이터 담기 */
			/* 오즈리포트 파일 데이터 셋 순서에 맞출 것 */
			all_list.add(main);				// 1. 계약서 메인
			if (isAtchElt) {
				all_list.add(mainOrg);	// 1-1. 이전계약서
			}
			all_list.add(eltCtrwDtl);		// 2. 계약서 상세
			
			if ("124|161|162|163|164|165|166|167|168|169|170|171|172|173|174|175|176|177".indexOf(mn_Ctrw_Kdc) == -1) {
				all_list.add(sctrwDtl415);	// 6. 특약서_원산지 등
			}
			if ("141|143|144|145".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(sctrwDtl419);	// 6. 특약서_매장의 철수 등
			} else if ("124|161|162|163|164|165|166|167|168|169|170|171|172|173|174|175|176|177".indexOf(mn_Ctrw_Kdc) == -1) {
				all_list.add(sctrwDtl416);	// 6. 특약서_매장의 철수 등
			}
			if ("122|123|143|145|192|194|195|196|197|198".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(sctrwDtl417);	// 6. 특약서_판매수수료율
				all_list.add(etcEltCtrw503);	// 7. 기타_매장의 철수 등
			}
			if ("124|161|162|163|164|165|166|167|168|169|170|171|172|173|174|175|176|177".indexOf(mn_Ctrw_Kdc) == -1) {
				all_list.add(pmiwDtl307);	// 5. 약정서_임대료, 계약기간, 매장위치 등에 관한 사항
			}
			if ("122|123|143|145|192|194|195|196|197|198".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(pmiwDtl308);	// 5. 약정서_판매장려금
			}
			if ("124".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(etcEltCtrw504);	// 7. 기타_개인정보처리위탁기준
			}
			all_list.add(stylAmn);			// 8. 계약서 양식
			if ("151|152|161|162|164|166|168|174|177".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(etcItemAList);	// 3. 별지1 / 기타_거래품목리스트
				all_list.add(etcItemIList);	// 3. 별지1 / 기타_거래품목리스트
			} else {
				all_list.add(etcItemList);	// 3. 별지1 / 기타_거래품목리스트
			}
			if ("151|152".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(sctrwDtl418);	// 6. 특약서(협력업체 기여도평가)
			}
			if ("123|143|145|194|196|198".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(sctrwNmlMrgnRt);
				all_list.add(sctrwCtrMrgnRt);
			}
			if ("132".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(addEltCtrwDtl206); // 4. 부가_자기상표부착상품
				all_list.add(etcEltCtrw502); // 7. 기타_품질보증협정서
			}
			all_list.add(mainSts); // 1-2. 워터마크 출력용 상태 값
			
			// 미리보기(임시저장) 데이터 삭제
			if (TEMP_YN != null && "Y".equals(TEMP_YN)) {
				AnwEltCtrwDrupVO deleteVO = new AnwEltCtrwDrupVO();
				deleteVO.setELT_CTRW_NO(ELT_CTRW_NO);
				deleteVO.setCHG_SQNO(CHG_SQNO);
				anwEltCtrwDrupService.deleteTempEltCtrw(deleteVO);
			}			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/* 출력
	 *  화면ID : OMG_DS_SC_3113, OMG_DS_SC_3114, OMG_DS_SC_3115
	 *  화면설명 : 공통(직매장), 농산, 테넌트 전자계약서 계약서 미리보기
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/ct/eltctrw/osEltctrwNewTest")
	public RestResult osEltctrwTypesOZNewTest(HttpServletRequest request, HttpServletResponse response, String CTRW_KDC ,String CTRW_STY_VER){
		try{			
			String mn_Ctrw_Kdc = "";
			String add_Ctrw_Yn = "";
			String pmiw_Yn = "";
			String sctrw_Yn = "";
			String etc_Ctrw_Yn = "";
						
			List<List<?>> all_list = new ArrayList<List<?>>(); 
			
			// 타이틀
			List<Map<String,Object>> main = new ArrayList<Map<String,Object>>();
			Map<String,Object> _main = new HashMap<String, Object>();
			
			/*
			 *  계약서 종류 코드값을 1## 형태로 치환
			 */
			String ver = "";
			if (StringUtils.trim(CTRW_KDC).length() == 3) {
				ver = "";
			} else if (StringUtils.trim(CTRW_KDC).length() == 1) {
				ver = "10";
			} else {
				ver = "1";
			}

			mn_Ctrw_Kdc = ver + CTRW_KDC;
			
			if ("206".equals(mn_Ctrw_Kdc)) {
				add_Ctrw_Yn     = "1";
			} else if ("307".equals(mn_Ctrw_Kdc) || "308".equals(mn_Ctrw_Kdc)) {
				pmiw_Yn     = "1";
			} else if ("415".equals(mn_Ctrw_Kdc) || "416".equals(mn_Ctrw_Kdc) || "417".equals(mn_Ctrw_Kdc) || "418".equals(mn_Ctrw_Kdc) || "419".equals(mn_Ctrw_Kdc)) {
				sctrw_Yn    = "1";
			} else if ("502".equals(mn_Ctrw_Kdc) || "503".equals(mn_Ctrw_Kdc)) {
				etc_Ctrw_Yn = "1";
			}
						
			/****************************
			 * [1] 메인계약서
			 ****************************/
			_main.put("ctr_St_Dt", "2022년 01월 01일");
			_main.put("ctr_Ed_Dt", "2022년 12월 31일");
			_main.put("ctr_Dt", "2022. 01. 01 ~2022. 12. 31");
			_main.put("ctrw_Drup_Dt", "2021년    12월    01일");
			_main.put("bzno", "123-45-67890");
			_main.put("addr", "경기도 안양시 동안구 흥안대로 405 (평촌동 160)");
			_main.put("buyer_Addr", "서울특별시 마포구 신촌로 66 (노고산동) 농협복합빌딩 6층");
			_main.put("mn_Ctrw_Kd", mn_Ctrw_Kdc);
			_main.put("add_Ctrw_Yn", add_Ctrw_Yn);
			_main.put("pmiw_Yn", pmiw_Yn);
			_main.put("sctrw_Yn", sctrw_Yn);
			_main.put("etc_Ctrw_Yn", etc_Ctrw_Yn);
			_main.put("ceo", "홍길동");
			_main.put("mtalnm", "활빈당");
			_main.put("na_Trpl_C", "1234567891234");
			_main.put("buyer_Blg", "IT추진팀");
			_main.put("buyer_Nm", "바이어명");
			_main.put("buyer_Na_Trpl_C", "8808983000015");
			_main.put("ctr_Chrr_Mtalnm", "농협경제지주 주식회사 소매유통본부");
			_main.put("ctr_Chrr_Repmn", "장 철 훈");
			_main.put("ctr_Chrr_Repmn_Dtynm", "대표이사");
			_main.put("ctr_Chrr_Nm", "대표이사 장 철 훈");
			_main.put("la_Agnt", "");
			_main.put("fgat_Prvt_C", "");
			_main.put("colb_Comp_sgnt", "");
			_main.put("colb_Comp_sgnt_dtm", "");
			_main.put("colb_Comp_Seal_Apdflnm", "");
			_main.put("colb_Comp_Seal_Sys_Flnm", "");
			_main.put("buyer_Seal_Apdflnm", "");
			_main.put("buyer_Seal_Sys_Flnm", "");
			_main.put("copNo", "1111111111111");
			_main.put("rrNo", "");
			_main.put("la_Agnt_Dtynm", "");
			_main.put("la_Agnt_Nm", " ");
			_main.put("aut_xtn_yn", "N");
			_main.put("edt_mtalNm", "");
			_main.put("buyer_sgnt", "Y");
			_main.put("buyer_sgnt_dt", "2019년 12월 31일 11시 59분");
			_main.put("mn_Ctrw_Kdnm", "계약서명칭");
			_main.put("colb_Comp_Seal_Sys_Flnm", ""); // 협력업체인감
			_main.put("buyer_Seal_Sys_Flnm", ""); // 바이어인감
			_main.put("seal_omit_yn", "Y");
			_main.put("temp_yn", "");

			main.add(_main);
			
			/****************************
			 * [1-1] 부속계약서 본 계약서
			 ****************************/
			boolean isAtchElt = false;
			List<Map<String,Object>> mainOrg = new ArrayList<Map<String,Object>>();
			Map<String,Object> _mainOrg = new HashMap<String, Object>();
			if (mn_Ctrw_Kdc != null && mn_Ctrw_Kdc.startsWith("19")) {
				_mainOrg.put("mn_Ctrw_Kd", "121");
				_mainOrg.put("mn_Ctrw_Kdnm", "본계약서종류");
				_mainOrg.put("fgat_Prvt_C", "");
				_mainOrg.put("ctrw_Drup_Dt", "2017년    12월    31일");
				
				mainOrg.add(_mainOrg);
				isAtchElt= true;
			}
			
			/****************************
			 * [2] 메인계약서 상세내용
			 ****************************/
			List<Map<String,Object>> eltCtrwDtl = new ArrayList<Map<String,Object>>();
			Map<String,Object> eltCtrwDtlMap = new HashMap<String, Object>();
			
			eltCtrwDtlMap.put("mn_Ctrw_Kdc",	mn_Ctrw_Kdc);
			eltCtrwDtlMap.put("cnr_Dt", "");
			eltCtrwDtlMap.put("psg_Mm", "");
			eltCtrwDtlMap.put("psg_Dd", "");
			eltCtrwDtlMap.put("etr_Fee", "");
			eltCtrwDtlMap.put("phd_Feert", "");
			eltCtrwDtlMap.put("lig_Pltpe", "");
			eltCtrwDtlMap.put("mexp_Dd", "");
			
			// 예비용 컬럼
			eltCtrwDtlMap.put("etc1",  "1");
			eltCtrwDtlMap.put("etc2",  "1");
			eltCtrwDtlMap.put("etc3",  "1");
			eltCtrwDtlMap.put("etc4",  "1");
			eltCtrwDtlMap.put("etc5",  "1");
			eltCtrwDtlMap.put("etc6",  "1");
			eltCtrwDtlMap.put("etc7",  "1");
			eltCtrwDtlMap.put("etc8",  "1");
			eltCtrwDtlMap.put("etc9",  "1");
			eltCtrwDtlMap.put("etc10", "1");
			eltCtrwDtlMap.put("etc11", "1");
			eltCtrwDtlMap.put("etc12", "1");
			eltCtrwDtlMap.put("etc13", "1");
			eltCtrwDtlMap.put("etc14", "1");
			eltCtrwDtlMap.put("etc15", "1");
			eltCtrwDtlMap.put("etc16", "1");
			if ("131".equals(mn_Ctrw_Kdc) || "132".equals(mn_Ctrw_Kdc)) {
				eltCtrwDtlMap.put("etc17", "2019년 01월 01일");
				eltCtrwDtlMap.put("etc18", "2019년 12월 31일");
			} else {
				eltCtrwDtlMap.put("etc17", "1");
				eltCtrwDtlMap.put("etc18", "1");
			}
			
			DecimalFormat df = new DecimalFormat("#,###");
			eltCtrwDtlMap.put("etc19", df.format(StringUtil.sTol("1000000", 0)));
			eltCtrwDtlMap.put("etc19S", convertHangul(StringUtil.converNullToBlank("1000000")));
			eltCtrwDtlMap.put("etc20", df.format(StringUtil.sTol("1000000", 0)));
			eltCtrwDtlMap.put("etc20S", convertHangul(StringUtil.converNullToBlank("1000000")));
			
			eltCtrwDtlMap.put("etc21", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc22", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc23", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc24", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc25", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc26", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc27", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc28", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc29", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc30", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc31", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc32", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc33", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc34", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc35", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc36", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc37", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc38", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc39", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc40", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc41", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc42", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc43", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc44", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc45", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc46", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc47", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc48", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc49", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc51", StringUtil.converNullToBlank("1"));
			eltCtrwDtlMap.put("etc52", StringUtil.converNullToBlank("1"));
			
			// 매장위치 (도면)
			eltCtrwDtlMap.put("etc50", "");

			eltCtrwDtlMap.put("rt", "");
			eltCtrwDtlMap.put("blm_Grmy", "");
			eltCtrwDtlMap.put("blmGrmy", "");
			eltCtrwDtlMap.put("wrsPrmPy", "");
			eltCtrwDtlMap.put("grmy", "");
			eltCtrwDtlMap.put("wrsSpyam", "");
			eltCtrwDtlMap.put("ctrClo", "");
			eltCtrwDtlMap.put("ctrw_Tinm", "");
			eltCtrwDtlMap.put("brand_N", "");
			eltCtrwDtlMap.put("returnDate", "");
			eltCtrwDtlMap.put("sctr_Sjt", "특약사항");

			eltCtrwDtl.add(eltCtrwDtlMap);
			
			
			/****************************
			 * [3] 별지1. 상품판매조건 / 기타계약서 거래품목리스트
			 ****************************/
			List<Map<String, Object>> etcItemAList = new ArrayList<Map<String, Object>>();				
			List<Map<String, Object>> etcItemIList = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcItemList = new ArrayList<Map<String, Object>>();
			if ("151|152|418".indexOf(mn_Ctrw_Kdc) != -1) {
				Map<String, Object> itemAMap = new HashMap<String, Object>();
				itemAMap.put("BRAND", "직영점명");
				itemAMap.put("ITEM_NAME", "사업장 주소");
				itemAMap.put("STANDARD", "매장면적");
				itemAMap.put("QTY", "첨부파일명");
				itemAMap.put("UPR", "시스템파일명");
				etcItemAList.add(itemAMap);
				
				Map<String, Object> itemIMap = new HashMap<String, Object>();
				itemIMap.put("BRAND", "직영점명");
				itemIMap.put("ITEM_NAME", "상품품목");
				itemIMap.put("QTY", "수량");
				itemIMap.put("UPR", "단가");
				etcItemIList.add(itemIMap);				
			} else {
				Map<String, Object> itemMap = new HashMap<String, Object>();
				itemMap.put("BRAND", "브랜드명");
				itemMap.put("ITEM_NAME", "상품명");
				itemMap.put("QTY", "수량");
				itemMap.put("UPR", "단가");
				etcItemList.add(itemMap);
			}	
			
			/****************************
			 * [3] 별지2. 매장의 위치 등은 계약서 상세에 포함
			 ****************************/

			/****************************
			 * [4] 부가계약서
			 ****************************/
			List<Map<String,Object>> addEltCtrwDtl206 = new ArrayList<Map<String,Object>>();
			
			if ("206".equals(mn_Ctrw_Kdc)) {
				Map<String,Object> addEltCtrwDtlMap = new HashMap<String, Object>();
				addEltCtrwDtlMap.put("add_ctrw_kdc",	"206");
				addEltCtrwDtlMap.put("pb_ctrw_tinm", "");
				addEltCtrwDtlMap.put("cnr_dt", "");
				addEltCtrwDtlMap.put("psg_mm", "");
				addEltCtrwDtlMap.put("psg_dd", "");
				addEltCtrwDtlMap.put("etc1", "");
				addEltCtrwDtlMap.put("etc2", "");
				addEltCtrwDtlMap.put("etc3", "");
				addEltCtrwDtlMap.put("sctr_Sjt", "");
				addEltCtrwDtl206.add(addEltCtrwDtlMap);
			}
			
			if (addEltCtrwDtl206.size() == 0) {
				Map<String, Object> addEltCtrwDtlMap = new HashMap<String, Object>();
				addEltCtrwDtlMap.put("add_ctrw_kdc", "E206");
				addEltCtrwDtlMap.put("pb_ctrw_tinm", "");
				addEltCtrwDtlMap.put("cnr_dt", "");
				addEltCtrwDtlMap.put("psg_mm", "");
				addEltCtrwDtlMap.put("psg_dd", "");
				addEltCtrwDtlMap.put("etc1", "");
				addEltCtrwDtlMap.put("etc2", "");
				addEltCtrwDtlMap.put("etc3", "");
				addEltCtrwDtlMap.put("sctr_Sjt", "");
				addEltCtrwDtl206.add(addEltCtrwDtlMap);
			}
			
			/****************************
			 * [5] 약정서
			 ****************************/
			List<Map<String, Object>> pmiwDtl307 = new ArrayList<Map<String, Object>>(); // 임대료, 계약기간, 매장위치 등에 관한 사항
			List<Map<String, Object>> pmiwDtl308 = new ArrayList<Map<String, Object>>(); // 임대료, 계약기간, 매장위치 등에 관한 사항
			
			if ("307".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
				pmiwDtlMap.put("pmiw_kdc", "307");
				pmiwDtlMap.put("buy_am", "");
				pmiwDtlMap.put("evt_tinm", "");
				pmiwDtlMap.put("evt_prd_st_dt", "");
				pmiwDtlMap.put("evt_prd_ed_dt", "");
				pmiwDtlMap.put("ETC1", "매장명");
				pmiwDtlMap.put("ETC2", "판매장소");
				pmiwDtlMap.put("ETC3", "500000");
				pmiwDtlMap.put("ETC4", "20190101");
				pmiwDtlMap.put("ETC5", "20191231");
				pmiwDtlMap.put("ETC6", "브랜드");
				pmiwDtlMap.put("ETC7", "매장위치");
				pmiwDtlMap.put("ETC8", "99");
				pmiwDtlMap.put("ETC9", "계약담당자");
				pmiwDtlMap.put("ETCA", "계약상대자");
				pmiwDtlMap.put("ETCB", "기타담당자");
				pmiwDtlMap.put("ETCC", "");
				pmiwDtlMap.put("ETCD", "수도세 매장명");
				pmiwDtlMap.put("ETCE", "전기세 매장명");
				pmiwDtlMap.put("ETCF", "");
				pmiwDtlMap.put("ETCG", "");
				pmiwDtlMap.put("ETCH", "");
				pmiwDtlMap.put("sctr_Sjt", "특약사항");
				pmiwDtl307.add(pmiwDtlMap);
			} else if ("308".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
				pmiwDtlMap.put("pmiw_kdc", "308");
				pmiwDtlMap.put("buy_am", "10");
				pmiwDtlMap.put("evt_tinm", "");
				pmiwDtlMap.put("evt_prd_st_dt", "20190101");
				pmiwDtlMap.put("evt_prd_ed_dt", "20191231");
				pmiwDtlMap.put("ETC1", "0~3");
				pmiwDtlMap.put("ETC2", "3~6");
				pmiwDtlMap.put("ETC3", "6~10");
				pmiwDtlMap.put("ETC4", "10");
				pmiwDtlMap.put("ETC5", "0.7");
				pmiwDtlMap.put("ETC6", "1.3");
				pmiwDtlMap.put("ETC7", "1.7");
				pmiwDtlMap.put("ETC8", "2.0");
				pmiwDtlMap.put("ETC9", "");
				pmiwDtlMap.put("ETCA", "");
				pmiwDtlMap.put("ETCB", "");
				pmiwDtlMap.put("ETCC", "");
				pmiwDtlMap.put("ETCD", "");
				pmiwDtlMap.put("ETCE", "");
				pmiwDtlMap.put("ETCF", "");
				pmiwDtlMap.put("ETCG", "");
				pmiwDtlMap.put("ETCH", "");
				pmiwDtlMap.put("sctr_Sjt", "특약사항");
				pmiwDtl308.add(pmiwDtlMap);
			}
			
			// 약정서 없을 때 처리
			if (pmiwDtl307.size() == 0) {
				Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
				pmiwDtlMap.put("pmiw_kdc", "E307");
				pmiwDtlMap.put("buy_am", "");
				pmiwDtlMap.put("evt_tinm", "");
				pmiwDtlMap.put("evt_prd_st_dt", "");
				pmiwDtlMap.put("evt_prd_ed_dt", "");
				pmiwDtlMap.put("ETC1", "");
				pmiwDtlMap.put("ETC2", "");
				pmiwDtlMap.put("ETC3", "");
				pmiwDtlMap.put("ETC4", "");
				pmiwDtlMap.put("ETC5", "");
				pmiwDtlMap.put("ETC6", "");
				pmiwDtlMap.put("ETC7", "");
				pmiwDtlMap.put("ETC8", "");
				pmiwDtlMap.put("ETC9", "");
				pmiwDtlMap.put("ETCA", "");
				pmiwDtlMap.put("ETCB", "");
				pmiwDtlMap.put("ETCC", "");
				pmiwDtlMap.put("ETCD", "");
				pmiwDtlMap.put("ETCE", "");
				pmiwDtlMap.put("ETCF", "");
				pmiwDtlMap.put("ETCG", "");
				pmiwDtlMap.put("ETCH", "");
				pmiwDtlMap.put("sctr_Sjt", "");
				pmiwDtl307.add(pmiwDtlMap);
			}
			if (pmiwDtl308.size() == 0) {
				Map<String, Object> pmiwDtlMap = new HashMap<String, Object>();
				pmiwDtlMap.put("pmiw_kdc", "E308");
				pmiwDtlMap.put("buy_am", "");
				pmiwDtlMap.put("evt_tinm", "");
				pmiwDtlMap.put("evt_prd_st_dt", "");
				pmiwDtlMap.put("evt_prd_ed_dt", "");
				pmiwDtlMap.put("ETC1", "");
				pmiwDtlMap.put("ETC2", "");
				pmiwDtlMap.put("ETC3", "");
				pmiwDtlMap.put("ETC4", "");
				pmiwDtlMap.put("ETC5", "");
				pmiwDtlMap.put("ETC6", "");
				pmiwDtlMap.put("ETC7", "");
				pmiwDtlMap.put("ETC8", "");
				pmiwDtlMap.put("ETC9", "");
				pmiwDtlMap.put("ETCA", "");
				pmiwDtlMap.put("ETCB", "");
				pmiwDtlMap.put("ETCC", "");
				pmiwDtlMap.put("ETCD", "");
				pmiwDtlMap.put("ETCE", "");
				pmiwDtlMap.put("ETCF", "");
				pmiwDtlMap.put("ETCG", "");
				pmiwDtlMap.put("ETCH", "");
				pmiwDtlMap.put("sctr_Sjt", "");
				pmiwDtl308.add(pmiwDtlMap);
			}
			
			/****************************
			 * [6] 특약서
			 ****************************/
			List<Map<String, Object>> sctrwDtl415 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl416 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl417 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl418 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwDtl419 = new ArrayList<Map<String, Object>>();
			
			// 판매수수료율
			List<Map<String, Object>> sctrwNmlMrgnRt = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> sctrwCtrMrgnRt = new ArrayList<Map<String, Object>>();
			
			if ("415".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "415");
				sctrwDtlMap.put("vld_prd_st_dt", "20181231");
				sctrwDtlMap.put("vld_prd_ed_dt", "");
				sctrwDtlMap.put("sctr_Sjt", "특약사항");
				sctrwDtl415.add(sctrwDtlMap);
			} else if ("416".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "416");
				sctrwDtlMap.put("sctr_Sjt", "특약사항");
				sctrwDtl416.add(sctrwDtlMap);
			} else if ("417".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "417");
				sctrwDtlMap.put("etc1", "");
				sctrwDtlMap.put("etc2", "");
				sctrwDtlMap.put("vld_prd_st_dt", "20190101");
				sctrwDtlMap.put("vld_prd_ed_dt", "20191231");
				sctrwDtlMap.put("sctr_Sjt", "특약사항");
				sctrwDtl417.add(sctrwDtlMap);

				Map<String, Object> sctrwNmlMrgnRtMap = new HashMap<String, Object>();
				sctrwNmlMrgnRtMap.put("sctrw_kdc", "417");
				sctrwNmlMrgnRtMap.put("stornm1", "점포명");
				sctrwNmlMrgnRtMap.put("nml_mrgn_rt", "11");
				sctrwNmlMrgnRtMap.put("evt_mrgn_rt", "22");
				sctrwNmlMrgnRtMap.put("rmk", "기타");
				sctrwNmlMrgnRt.add(sctrwNmlMrgnRtMap);
				
				Map<String, Object> sctrwCtrMrgnRtMap = new HashMap<String, Object>();
				sctrwCtrMrgnRtMap.put("sctrw_kdc", "417");
				sctrwCtrMrgnRtMap.put("stornm1", "점포명");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt10", "10");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt20", "20");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt30", "30");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt40", "40");
				sctrwCtrMrgnRtMap.put("dc_sel_mrgn_rt50", "50");
				sctrwCtrMrgnRtMap.put("rmk", "기타");
				sctrwCtrMrgnRt.add(sctrwCtrMrgnRtMap);
			} else if ("418".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "418");
				sctrwDtlMap.put("vld_prd_st_dt", "20190101");
				sctrwDtlMap.put("sctr_Sjt", "특약사항");
				sctrwDtl418.add(sctrwDtlMap);
			} else if ("419".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "419");
				sctrwDtlMap.put("sctr_Sjt", "특약사항");
				sctrwDtl419.add(sctrwDtlMap);
			} 
			
			// 특약사항 없을 때 처리
			if (sctrwDtl415.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E415");
				sctrwDtlMap.put("vld_prd_st_dt", "");
				sctrwDtlMap.put("vld_prd_ed_dt", "");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl415.add(sctrwDtlMap);
			}
			if (sctrwDtl416.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E416");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl416.add(sctrwDtlMap);
			}
			if (sctrwDtl417.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E417");
				sctrwDtlMap.put("etc1", "");
				sctrwDtlMap.put("etc2", "");
				sctrwDtlMap.put("vld_prd_st_dt", "");
				sctrwDtlMap.put("vld_prd_ed_dt", "");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl417.add(sctrwDtlMap);
			}
			if (sctrwDtl418.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E418");
				sctrwDtlMap.put("vld_prd_st_dt", "");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl418.add(sctrwDtlMap);
			}
			if (sctrwDtl419.size() == 0) {
				Map<String, Object> sctrwDtlMap = new HashMap<String, Object>();
				sctrwDtlMap.put("sctrw_kdc", "E419");
				sctrwDtlMap.put("sctr_Sjt", "");
				sctrwDtl419.add(sctrwDtlMap);
			}
			

			/****************************
			 * [7] 기타계약서
			 ****************************/
			List<Map<String, Object>> etcEltCtrw502 = new ArrayList<Map<String, Object>>();
			List<Map<String, Object>> etcEltCtrw503 = new ArrayList<Map<String, Object>>();

			if ("502".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
				etcEltCtrwMap.put("etc_ctrw_kdc", "502");
				etcEltCtrwMap.put("etc1", "");
				etcEltCtrwMap.put("etc2", "");
				etcEltCtrwMap.put("etc3", "");
				etcEltCtrwMap.put("sctr_Sjt", "");
				etcEltCtrw502.add(etcEltCtrwMap);
			} else if ("503".equals(mn_Ctrw_Kdc)) {
				Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
				etcEltCtrwMap.put("etc_ctrw_kdc", "503");
				etcEltCtrwMap.put("etc1", "납품장소");
				etcEltCtrwMap.put("etc2", "납품기일");
				etcEltCtrwMap.put("etc3", "상품내역");
				etcEltCtrwMap.put("sctr_Sjt", "특약사항");
				etcEltCtrw503.add(etcEltCtrwMap);
			}

			// 기타계약서 없을 때 처리
			if (etcEltCtrw502.size() == 0) {
				Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
				etcEltCtrwMap.put("etc_ctrw_kdc", "S502");
				etcEltCtrwMap.put("etc1", "");
				etcEltCtrwMap.put("etc2", "");
				etcEltCtrwMap.put("etc3", "");
				etcEltCtrwMap.put("sctr_Sjt", "");
				etcEltCtrw502.add(etcEltCtrwMap);
			}
			if (etcEltCtrw503.size() == 0) {
				Map<String, Object> etcEltCtrwMap = new HashMap<String, Object>();
				etcEltCtrwMap.put("etc_ctrw_kdc", "S503");
				etcEltCtrwMap.put("etc1", "");
				etcEltCtrwMap.put("etc2", "");
				etcEltCtrwMap.put("etc3", "");
				etcEltCtrwMap.put("sctr_Sjt", "");
				etcEltCtrw503.add(etcEltCtrwMap);
			}

			
			/****************************
			 * [8] 계약서 양식
			 ****************************/
			List<EtcEltStylAmnVO> etcEltStylAmnlist = anwEltCtrwDrupService.selectEtcEltStylAmnTest(CTRW_KDC, CTRW_STY_VER);
			List<Map<String, Object>> stylAmn = new ArrayList<Map<String, Object>>();
			for (EtcEltStylAmnVO vo : etcEltStylAmnlist) {
				Map<String, Object> etcEltStylAmnMap = new HashMap<String, Object>();
				etcEltStylAmnMap.put("ctrw_Kdc", vo.getCTRW_KDC());
				etcEltStylAmnMap.put("sqno", vo.getSQNO());
				String str = vo.getCTRW_CNTN();
				str = str.replaceAll(" ", "&nbsp;");
				str = str.replaceAll("\n", "<br/>");

				etcEltStylAmnMap.put("ctrw_Cntn", str);
				stylAmn.add(etcEltStylAmnMap);
			}
			
			// 특수문자 예외 처리를 위한 함수 (계약서 양식은 적용하지 않음)
			filterTextListForOZ(main);
			filterTextListForOZ(mainOrg);
			filterTextListForOZ(eltCtrwDtl);
			filterTextListForOZ(sctrwDtl415);
			filterTextListForOZ(sctrwDtl416);
			filterTextListForOZ(sctrwDtl417);
			filterTextListForOZ(sctrwDtl418);
			filterTextListForOZ(sctrwDtl419);
			filterTextListForOZ(pmiwDtl307);
			filterTextListForOZ(pmiwDtl308);
			filterTextListForOZ(etcEltCtrw502);
			filterTextListForOZ(etcEltCtrw503);
			filterTextListForOZ(etcItemAList);
			filterTextListForOZ(etcItemIList);
			filterTextListForOZ(etcItemList);
			filterTextListForOZ(sctrwNmlMrgnRt);
			filterTextListForOZ(sctrwCtrMrgnRt);
			filterTextListForOZ(addEltCtrwDtl206);
			
			/* 보고서 데이터 담기 */
			/* 오즈리포트 파일 데이터 셋 순서에 맞출 것 */
			all_list.add(main);				// 1. 계약서 메인
			if (isAtchElt) {
				all_list.add(mainOrg);	// 1-1. 이전계약서
			}
			all_list.add(eltCtrwDtl);		// 2. 계약서 상세
			all_list.add(sctrwDtl415);	// 6. 특약서_원산지 등
			if ("141|143|144|145|419".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(sctrwDtl419);	// 6. 특약서_매장의 철수 등
			} else {	
				all_list.add(sctrwDtl416);	// 6. 특약서_매장의 철수 등
			}
			if ("122|123|143|145|192|194|195|196|197|198|308|417|503".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(sctrwDtl417);	// 6. 특약서_판매수수료율
				all_list.add(etcEltCtrw503);	// 7. 기타_거래품목리스트
			}
			all_list.add(pmiwDtl307);	// 5. 약정서_임대료, 계약기간, 매장위치 등에 관한 사항
			if ("122|123|143|145|192|194|195|196|197|198|308|417|503".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(pmiwDtl308);	// 5. 약정서_판매장려금
			}
			all_list.add(stylAmn);			// 8. 계약서 양식
			if ("151|152|418".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(etcItemAList);	// 3. 별지1 / 기타_거래품목리스트
				all_list.add(etcItemIList);	// 3. 별지1 / 기타_거래품목리스트
				all_list.add(sctrwDtl418);	// 6. 특약서(협력업체 기여도평가)
			} else {
				all_list.add(etcItemList);	// 3. 별지1 / 기타_거래품목리스트
			}
			if ("123|143|145|192|194|195|196|197|198|417".indexOf(mn_Ctrw_Kdc) != -1) {
				all_list.add(sctrwNmlMrgnRt);
				all_list.add(sctrwCtrMrgnRt);
			}
			if("132|206|502".indexOf(mn_Ctrw_Kdc) != -1){
				all_list.add(addEltCtrwDtl206); // 4. 부가_자기상표부착상품
				all_list.add(etcEltCtrw502); // 7. 기타_품질보증협정서
			}
			
			// 워터마크
			List<Map<String,Object>> mainSts = new ArrayList<Map<String,Object>>();
			Map<String,Object> _mainSts = new HashMap<String, Object>();
			_mainSts.put("sts_nm", "계약서상태");
			_mainSts.put("sts_dtm", "2020년 01월 01일 09시 01분 01초");
			mainSts.add(_mainSts);
			all_list.add(mainSts);  //리턴 데이터 추가
			
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}

	
	private void filterTextListForOZ(List<Map<String, Object>> list) {
		filterTextListForOZ(list, null);
	}
	
	/**
	 * 오즈리포트 전달용 객체 내 String 예외처리
	 * @param list
	 */
	private void filterTextListForOZ(List<Map<String, Object>> list, String[] whitelists) {
		String[] filterO = {"^", "<", ">", "\\", "&", "/"};		// 대상 문자열
		String[] filterR = {"＾", "〈", "〉", "￦", "＆", "／"};			// 치환 문자열(대상 순서와 맞출 것)
		List<String> white = null;
		if (whitelists != null && whitelists.length > 0) {
			white = Arrays.asList(whitelists);
		}
		
		if (list != null && list.size() > 0) {
			for (Map<String, Object> map : list) {
				for (String key : map.keySet()) {
					if (white != null && white.contains(key)) { continue; } // 특정항목 치환 제외
					Object obj = map.get(key);
					if (obj != null && obj instanceof String) {
						String temp = (String) obj;
						for (int i = 0; i < filterO.length; i++) {
							if (temp.indexOf(filterO[i]) != -1) {
								temp = temp.replace(filterO[i], filterR[i]);
							}
						}
						map.put(key, temp);
					}
				}
			}
		}
	}
	
	/**
	 * 숫자를 한글로 변환
	 * @param money
	 * @return
	 */
	private String convertHangul(String money) {
		if (StringUtils.isEmpty(money)) {
			return "";
		}

		String[] han1 = { "", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구" };
		String[] han2 = { "", "십", "백", "천" };
		String[] han3 = { "", "만", "억", "조", "경" };
		StringBuffer result = new StringBuffer();
		int len = money.length();
		boolean append3 = false;
		try {
			for (int i = len - 1; i >= 0; i--) {
				int bit = Integer.parseInt(money.substring(len - i - 1, len - i));
				result.append(han1[bit]); // 숫자명
				if (bit > 0) {
					result.append(han2[i % 4]);
					append3 = false;
				}
				if (!append3 && i % 4 == 0) {
					result.append(han3[i / 4]);
					append3 = true;
				}
			}
		} catch (NumberFormatException e) {
			return "";
		}
		return result.toString();
	}
	
	/**
	 * 법인번호 검증 규칙에 해당되지 않으면 마스킹 처리
	 * (전자정부 번호유효성체크 에 대한 Util 클래스 참조-EgovNumberCheckUtil)
	 * @param copNo 법인번호
	 * @return
	 */
	private String filterCopno(String copNo) {
		if (StringUtils.isEmpty(copNo) || "undefined".equals(copNo)) {
			// 빈 값
			return null;
		} else if (copNo.length() == 13) {
			// 법인번호가 아닐 때 마스킹 처리
			try {
				int verify = 0;
				for (int i = 0; i < 12; i++) {
					verify += Integer.parseInt(String.valueOf(copNo.charAt(i))) * (i % 2 + 1);
				}
				int perify = 10 - (verify % 10);
				if (perify == 10) { perify = 0; } // 검증값이 10이면 0으로 함
				int parity = Integer.parseInt(String.valueOf(copNo.charAt(12)));
				
				if (parity == perify) {
					// 법인번호
					return copNo;
				}
				return copNo.replaceAll("(?<=.{7})." , "*"); // 7자리 이후로 마스킹(*) 처리
			} catch (NumberFormatException e) {
				logger.error(e.getMessage(), e);
				return copNo;
			}
		} else {
			if (copNo.length() > 7) {
				return copNo.replaceAll("(?<=.{7})." , "*"); // 7자리 이후로 마스킹(*) 처리
			}
			return copNo;
		}
	}
	
	/**
	 * 이미지 Base64변환 (리사이즈 포함)
	 * @param path 첨부파일 경로
	 * @param sysNm 시스템 파일명
	 * @param fileNm 원본 파일명
	 * @return Base64 데이터
	 */
	private String getBase64Image(File path, String sysNm, String fileNm) {
		int MAX_W = 2000;
		int MAX_H = 3000;
		String baseImage = "";
		
		try {
			File f = FileUtils.getFile(path, sysNm);
			BufferedImage orgImage = ImageIO.read(f);

			if (orgImage != null) {
				BufferedImage resizedImage = null;
				int imageWidth = orgImage.getWidth();
				int imageHeight = orgImage.getHeight();
				int w;
				int h;
				double ratio;

				// 이미지 비율에 따라 리사이즈 크기 계산
				if (imageWidth > imageHeight && imageWidth > MAX_W) {
					ratio = (double) MAX_W / (double) imageWidth;
					w = (int) (imageWidth * ratio);
					h = (int) (imageHeight * ratio);
				} else if (imageWidth < imageHeight && imageHeight > MAX_H) {
					ratio = (double) MAX_H / (double) imageHeight;
					w = (int) (imageWidth * ratio);
					h = (int) (imageHeight * ratio);
				} else {
					w = 0;
					h = 0;
				}

				if (w != 0 && h != 0) {
					try {
						resizedImage = resizeImage(orgImage, w, h);

						String imgType = "jpeg";
						if (fileNm != null && fileNm.toLowerCase().contains(".png")) {
							imgType = "png";
						}
						ByteArrayOutputStream os = new ByteArrayOutputStream();
						ImageIO.write(resizedImage, imgType, os);
						baseImage = Base64Utils.encodeToString(os.toByteArray());
					} catch (IOException e) {
						// 이미지 크기 조절 오류 시
						baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
					}
				} else {
					// 이미지 크기 조절 불필요 시
					baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
				}
			} else {
				// 이미지 로드 오류 시
				baseImage = Base64Utils.encodeToString(FileUtils.readFileToByteArray(f));
			}
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			baseImage = "";
		}

		return baseImage;
	}
	
	/**
	 * 사진 이미지 크기 조절
	 * @param img
	 * @param width
	 * @param height
	 * @return
	 */
	private BufferedImage resizeImage(BufferedImage img, int width, int height) {
		int type = img.getType() == 0 ? BufferedImage.TYPE_INT_ARGB : img.getType(); // png = TYPE_INT_ARGB

		Image tmp = img.getScaledInstance(width, height, Image.SCALE_SMOOTH);
		BufferedImage resized = new BufferedImage(width, height, type); // jpeg = TYPE_INT_RGB
		Graphics2D g2d = resized.createGraphics();
		g2d.drawImage(tmp, 0, 0, null);
		g2d.dispose();
		return resized;
	}
}