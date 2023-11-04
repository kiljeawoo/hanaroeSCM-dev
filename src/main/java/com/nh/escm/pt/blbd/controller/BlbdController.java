package com.nh.escm.pt.blbd.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.RequestUtil;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.controller.FileController;
import com.nh.escm.common.vo.SQLNames.PortalSequenceKeySeqName;
import com.nh.escm.ct.eltctrw.service.EltAuthService;
import com.nh.escm.ct.eltctrw.vo.EltAuthVO;
import com.nh.escm.pt.blbd.service.BlbdService;
import com.nh.escm.pt.blbd.vo.BlbdApdflVO;
import com.nh.escm.pt.blbd.vo.BlbdVO;
import com.nh.escm.util.PageHelper;
import com.nh.escm.util.SeqGenUtil;

@RestController
public class BlbdController extends AbstractController {

	@Autowired
	private BlbdService blbdService;
	
	@Autowired
	private EltAuthService eltAuthService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/blbd/getBlbdID")
	public void getBlbdID(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String menuId = requestHelper.getParameter("menuId");	
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<BlbdVO> bbsList = blbdService.getBlbdID(menuId);
			DataSetHelper dsHelper = new DataSetHelper("ds_blbdId");
			
			if(bbsList != null && bbsList.size() > 0){
			
				dsHelper.addColumns(BlbdVO.class);
				
				for(BlbdVO vo : bbsList){
					dsHelper.setData(vo);
				}
				
			}	
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
                
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/blbd/retrieveBlbdList")
	public void retrieveBlbdList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");
		String usrTpc = requestHelper.getUserType();
		String usrId = requestHelper.getUserID();
		String eltAuthDsc = null;
		
		if ("202107010001".equals(dsCondition.getString(0, "BLBD_ID"))) {
			List<EltAuthVO> list = eltAuthService.checkEltAuthor(usrId, usrTpc);
			for (EltAuthVO vo : list) {
				if ("Y".equals(vo.getELT_99())) {
					// 최고권한
					eltAuthDsc = "99";
				} else if ("Y".equals(vo.getELT_A5())) {
					// 조회권한
					eltAuthDsc = "A5";
				} else if ("Y".equals(vo.getCHIEF_YN())) {
					// 점장 조회
					eltAuthDsc = "CF";
				}
			}
		}
		
		// Paging
		int totalRowCount = blbdService.retrieveBlbdListCount(dsCondition, usrTpc, usrId, eltAuthDsc);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
		
		PlatformData platformData = new PlatformData();
		
		try {
			if (totalRowCount > 0) {
				List<Map<String, Object>> bbsList = blbdService.retrieveBlbdList(dsCondition, usrTpc, usrId, eltAuthDsc, start, end);
				DataSetHelper dsHelper = new DataSetHelper("ds_bbs");
				
				if(bbsList != null && bbsList.size() > 0){
					dsHelper.addColumns(bbsList.get(0).keySet());
					
					for(Map<String, Object> map : bbsList) {
						dsHelper.setData(map);
					}
				}
				
				platformData.addDataSet(pageHelper.getDsPageVo());
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
                
	}
	
	
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/blbd/retrieveCostQnAList")
	public void retrieveCostQnAList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsCondition = requestHelper.getDataSet("ds_condition");

		// Paging
		int totalRowCount = blbdService.retrieveCostQnAListCount(dsCondition);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();
		
		PlatformData platformData = new PlatformData();
		
		try {
			
			List<Map<String, Object>> bbsList = blbdService.retrieveCostQnAList(dsCondition, start, end);
			DataSetHelper dsHelper = new DataSetHelper("ds_bbs");
			
			if(bbsList != null && bbsList.size() > 0){
				dsHelper.addColumns(bbsList.get(0).keySet());
				for(Map<String, Object> map : bbsList) {
					dsHelper.setData(map);
				}
			}	
			platformData.addDataSet(pageHelper.getDsPageVo());
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		} 
                
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/blbd/retrieveBlbdOfancMainList")
	public void retrieveBlbdOfancMainList(HttpServletRequest request, HttpServletResponse response) {
		PlatformData platformData = new PlatformData();
		String popupImgchk = "";

		try {
			List<BlbdVO> bbsList = blbdService.retrieveBlbdOfancMainList();
			DataSetHelper dsHelper = new DataSetHelper("ds_bbs");
			DataSetHelper ds_popupHelper = new DataSetHelper("ds_popup");
			DataSetHelper ds_popupOfancHelper = new DataSetHelper("ds_popupOfanc");

			if (bbsList != null && bbsList.size() > 0) {
				dsHelper.addColumns(BlbdVO.class);
				for (BlbdVO vo : bbsList) {
					dsHelper.setData(vo);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());

			// 경제 통합 공지 사항 팝업
			List<BlbdVO> ds_popupOfancList = blbdService.retrieveBlbdPopUpOfancList();

			if (ds_popupOfancList != null && ds_popupOfancList.size() > 0) {
				ds_popupOfancHelper.addColumns(BlbdVO.class);
				for (BlbdVO vo : ds_popupOfancList) {
					ds_popupOfancHelper.setData(vo);
				}
			}
			platformData.addDataSet(ds_popupOfancHelper.getDataSet());

			// escm 공지 사항 팝업
			List<BlbdVO> popupList = blbdService.retrieveBlbdPopUpList();

			byte[] picture = null;
			String path = null;
			ds_popupHelper.addColumns(BlbdVO.class);

			if (popupList != null && popupList.size() > 0) {
				for (BlbdVO popupvo : popupList) {
					if (!"N".equals(popupvo.getBBRD_PUP_SYS_FLNM())) {
						logger.debug("getBBRD_PUP_SYS_FLNM 111 =>>> " + popupvo.getBBRD_PUP_SYS_FLNM());

						path = Configurer.getProperty("file.refBbs.path")
								+ File.separator + "201506090001"
								+ File.separator + popupvo.getBBRD_ID().substring(1, 5) // N + BBRD_ID
								+ File.separator + popupvo.getBBRD_ID().replace("N", "")
								+ File.separator + popupvo.getBBRD_PUP_SYS_FLNM();

						try {
							picture = FileUtil.readToByte(path);
						} catch (IOException ie) {
							logger.error(ie.getMessage(), ie);
							popupImgchk = "1"; // 오류 발생
						} catch (AppetizerException e) {
							logger.error(e.getMessage(), e);
							popupImgchk = "1"; // 오류 발생
						}

						popupvo.setPICTURE(picture);

					} else {
						popupvo.setPICTURE(picture);
					}
						
					if ("".equals(popupImgchk)) {
						ds_popupHelper.setData(popupvo);
					} else {
						popupImgchk = ""; // 오류 발생
					}
				}
			}
			platformData.addDataSet(ds_popupHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/blbd/retrieveBlbd")
	public void retrieveBlbd(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String BLBD_ID = requestHelper.getParameter("BLBD_ID");
		String BBRD_ID = requestHelper.getParameter("BBRD_ID");
//		String usrId = requestHelper.getUserID();
		
		PlatformData platformData = new PlatformData();
		
		try {
			List<BlbdVO> bbsList = blbdService.retrieveBlbd(BLBD_ID, BBRD_ID);
			
			DataSetHelper dsHelper = new DataSetHelper("ds_bbs");
			DataSetHelper dsHelper2 = new DataSetHelper("ds_file");
			DataSetHelper dsHelper3 = new DataSetHelper("ds_prc");
			
			dsHelper.addColumns(BlbdVO.class);
			dsHelper2.addColumns(BlbdApdflVO.class);
			dsHelper3.addColumns(BlbdVO.class);

			// Namo dataset
			DataSet dsNamo = new DataSet("ds_namo");
			dsNamo.addColumn(new ColumnHeader("ORG_FILENM", DataTypes.STRING));
			dsNamo.addColumn(new ColumnHeader("MHT_DATA", DataTypes.STRING));
			
			if(bbsList != null && bbsList.size() > 0){
				List<BlbdApdflVO> fileList = blbdService.retrieveApdflList(BLBD_ID, BBRD_ID);
				for(BlbdVO vo : bbsList){
					if("201506090003".equals(BLBD_ID) == true || "201506090004".equals(BLBD_ID) == true){
						// 자료요청 게시판일 경우 자기것만 조회 
						if (!vo.getFS_RGM().equals(requestHelper.getUserID()) && !vo.getPRET_FS_RGM().equals(requestHelper.getUserID())) {
							sendData(response, platformData, -1, "자신의 요청내역만 조회가능합니다. ");
							return;
						}
					}

					// 공지사항 팝업이미지
					if ("201506090001".equals(BLBD_ID) && !"N".equals(vo.getBBRD_PUP_SYS_FLNM())) {
						String path = Configurer.getProperty("file.refBbs.path")
								+ File.separator + BLBD_ID
								+ File.separator + BBRD_ID.substring(0, 4)
								+ File.separator + BBRD_ID
								+ File.separator + vo.getBBRD_PUP_SYS_FLNM();
						try {
							byte[] picture = FileUtil.readToByte(path);
							vo.setPICTURE(picture);
						} catch (AppetizerException e) {
							logger.error(e.getMessage(), e);
						} catch (IOException e) {
							logger.error(e.getMessage(), e);
						}
					}
					dsHelper.setData(vo);
				}
				
				if(fileList != null && fileList.size() > 0){
					for (BlbdApdflVO file : fileList) {
						// Namo 첨부파일 처리 (파일 확인)
						if (file.getSYSTEMFILENAME().equals("namo")) {
							int nRow = dsNamo.newRow();
							dsNamo.set(nRow, "ORG_FILENM", file.getORGFNAME());
							continue;
						}
						dsHelper2.setData(file);
					}
				}
				
			}
			/* 금액 조회 */
			if(bbsList != null && bbsList.size() > 0){
				List<BlbdVO> prcList = blbdService.retrieveBlbdPrc(BBRD_ID);
				for(BlbdVO vo : prcList){
					dsHelper3.setData(vo);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
			platformData.addDataSet(dsHelper2.getDataSet());
			platformData.addDataSet(dsHelper3.getDataSet());
			platformData.addDataSet(dsNamo);			
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}    
	}
	
	/*
	 * 나모에디터 글 로드
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/rest/pt/blbd/retrieveBlbd")
	public @ResponseBody void retrieveBlbdNamo(String fileName, HttpServletRequest request, HttpServletResponse response) {
		if (fileName != null && !fileName.isEmpty()) {
			String srcDir = Configurer.getProperty("file.real.path");
			File dir = new File(srcDir);
			File mhtFile = new File(dir.getAbsolutePath() + File.separator + "namo" + File.separator + fileName);
			
			if (mhtFile.isFile()){
				response.setContentType("message/rfc822"); // mht file
				response.setContentLength((int) mhtFile.length());
				response.setHeader("Content-Disposition", "inline; filename=\"" + fileName + "\";");
				response.setHeader("Content-Transfer-Encoding", "binary");
				
				OutputStream out = null;
				try {
					out = response.getOutputStream();
					FileUtils.copyFile(mhtFile, out);
				} catch (IOException e) {
					logger.error(e.getMessage());
				} finally {
					if (out != null) {
						try {
							out.flush();
						} catch (IOException e) {
							logger.error(e.getMessage());
						}
					}
				}
			} else {
				throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, "File Not found");				
			}
		} else {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, "File Not found");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/pt/blbd/retrieveBlbdForOz")
	public RestResult retrieveBlbdForOz(HttpServletRequest request, HttpServletResponse response, String blbdId, String bbrdId) {
		try {
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			
			List<Map<String,Object>> notice = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> file = new ArrayList<Map<String,Object>>();
			
			List<BlbdVO> bbsList = blbdService.retrieveBlbd(blbdId, bbrdId);
			
			
			for(BlbdVO vo: bbsList){
				Map<String,Object> noticeMap = new HashMap<String, Object>();
				noticeMap.put("OFANC_TINM", vo.getBBRD_TI());//제목
				noticeMap.put("FS_RGM",vo.getFS_RGM());//작성자
				noticeMap.put("userName",vo.getBBRD_RGM_NM());//작성자이름
				noticeMap.put("OFANC_PRU_NT",vo.getBBRD_INQ_CN());//조회수
				noticeMap.put("FSRG_DTM", vo.getFSRG_DTM());//최초등록일시
				noticeMap.put("LSCHG_DTM", vo.getLSCHG_DTM());//최종변경일시
				noticeMap.put("OFANC_CNTN",vo.getBBRD_CNTN());
				noticeMap.put("FSRGMN_BZPLC","");
				notice.add(noticeMap);
				
			}
			
			
			
			List<BlbdApdflVO> fileList = blbdService.retrieveApdflList(blbdId, bbrdId);

			if(fileList != null && fileList.size() > 0){
				for(BlbdApdflVO vo : fileList){
					Map<String,Object> fileMap = new HashMap<String, Object>();	
					fileMap.put("APDFL_SQNO",StringUtil.converNullToBlank(vo.getAPDFL_ID()));
					fileMap.put("APDFL_SZE",StringUtil.converNullToBlank(vo.getAPDFL_SZE()));
					fileMap.put("ORGFNAME",StringUtil.converNullToBlank(vo.getORGFNAME()));
					fileMap.put("BBRD_SQNO",StringUtil.converNullToBlank(vo.getBBRD_ID()));
					file.add(fileMap);
				}
			}
			
			
			
			all_list.add(notice);
			all_list.add(file);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list,0);
			
		} catch (AppetizerException e) {			
			logger.error(e.getMessage(), e);
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}    
	}
	
	/**
	 * 게시판 글 작성
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/blbd/insertBlbd")
	public void insertBlbd(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		// 1. CORS 검증
		if (!RequestUtil.validCorsToken(requestHelper)) {
			sendData(response, new PlatformData(), -600, "Invalid token");
			return;
		}
		
		DataSet dsBbs = requestHelper.getDataSet("ds_bbs");
		DataSet dsFile = requestHelper.getDataSet("ds_file");

		String PRC = requestHelper.getParameter("PRC");
		String UPLOAD_DT = requestHelper.getParameter("today");

		int rowCount = 0;

		try {
			// 2. 파일명검사 (오류시 글 작성 취소)
			for (int j = 0; j < dsFile.getRowCount(); j++) {
				FileController.getSafeFileName(dsFile.getString(j, "ORGFNAME"));
			}
			
			BlbdVO vo = new BlbdVO();
			String BBRD_ID = "";
			String countPretBbrdId = "";
			String pretBbrdId = "";
			long col = 0;

			for (int i = 0; i < dsBbs.getRowCount(); i++) {
				if (dsBbs.getString(i, "PRET_BBRD_ID") != null) {
					pretBbrdId = dsBbs.getString(i, "PRET_BBRD_ID");
					countPretBbrdId = blbdService.getCountPretBbrdId(pretBbrdId);
					if (Integer.parseInt(countPretBbrdId) > 8) {
						throw new AppetizerException("msg.omg_ds_sc_4112.view.validation");
					}

					col = Long.valueOf(dsBbs.getString(i, "BBRD_ID")) - Long.valueOf(countPretBbrdId) - 1;
					BBRD_ID = String.valueOf(col);
				} else {
					BBRD_ID = blbdService.getBbrdId();
				}

				vo.setBBRD_ID(BBRD_ID);
				vo.setCKNL_DSC("N");
				vo.setBBRD_CNTN(dsBbs.getString(i, "BBRD_CNTN"));
				vo.setBBRD_DEL_YN(dsBbs.getString(i, "BBRD_DEL_YN"));
				vo.setBBRD_INQ_CN(dsBbs.getString(i, "BBRD_INQ_CN"));
				vo.setBBRD_RGM_NM(dsBbs.getString(i, "BBRD_RGM_NM"));
				vo.setBBRD_TI(dsBbs.getString(i, "BBRD_TI"));
				vo.setBLBD_ID(dsBbs.getString(i, "BLBD_ID"));
				vo.setBLTN_ED_DTM(dsBbs.getString(i, "BLTN_ED_DTM"));
				vo.setBLTN_ST_DTM(dsBbs.getString(i, "BLTN_ST_DTM"));
				vo.setFSRG_DTM(dsBbs.getString(i, "FSRG_DTM"));
				vo.setPRET_BBRD_ID(dsBbs.getString(i, "PRET_BBRD_ID"));
				vo.setFS_RGM(dsBbs.getString(i, "FS_RGM"));
				vo.setLSCHG_DTM(dsBbs.getString(i, "LSCHG_DTM"));
				vo.setLS_CHGM(dsBbs.getString(i, "LS_CHGM"));
				vo.setBBRD_CLOSED_YN(dsBbs.getString(i, "BBRD_CLOSED_YN"));
				vo.setBBRD_PUP_ST_DT(dsBbs.getString(i, "BBRD_PUP_ST_DT"));
				vo.setBBRD_PUP_ED_DT(dsBbs.getString(i, "BBRD_PUP_ED_DT"));
				vo.setBBRD_PUP_YN(dsBbs.getString(i, "BBRD_PUP_YN"));
				vo.setBBRD_PUP_SYS_FLNM(dsBbs.getString(i, "BBRD_PUP_SYS_FLNM"));
				vo.setBBRD_PUP_APDFLNM(dsBbs.getString(i, "BBRD_PUP_APDFLNM"));

				if (blbdService.insertBlbd(vo) > 0) {
					rowCount++;
				}
			}

			if (rowCount > 0) {
				BlbdApdflVO file = new BlbdApdflVO();
				String APDFL_ID = "";

				String srcDir = Configurer.getProperty("file.temp.path");
				String dstDir = Configurer.getProperty("file.refBbs.path")
						+ File.separator + dsBbs.getString(0, "BLBD_ID")
						+ File.separator + BBRD_ID.substring(0, 4)
						+ File.separator + BBRD_ID;

				for (int j = 0; j < dsFile.getRowCount(); j++) {
					String sysName = dsFile.getString(j, "SYSTEMFILENAME");
					String orgName = FileController.getSafeFileName(dsFile.getString(j, "ORGFNAME"));
					String fileSize = dsFile.getString(j, "FILESIZE");
					
					// 파일정보 없을 때 무시
					if (StringUtils.isEmpty(sysName) || StringUtils.isEmpty(orgName) || StringUtils.isEmpty(fileSize)) {
						continue;
					}
					
					APDFL_ID = SeqGenUtil.getSeq(PortalSequenceKeySeqName.SQ_APDFL.name());
					file.setAPDFL_ID(APDFL_ID);
					file.setAPDFL_PATHNM(sysName);
					file.setAPDFL_SZE(fileSize);
					file.setAPDFLNM(orgName);
					file.setBBRD_ID(BBRD_ID);
					file.setBLBD_ID(dsBbs.getString(0, "BLBD_ID"));
					file.setFS_RGM(dsFile.getString(j, "FS_RGM"));
					file.setLS_CHGM(dsFile.getString(j, "LS_CHGM"));

					try {
						FileUtil.moveFile(srcDir, dstDir, sysName);
						blbdService.insertApdfl(file);
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}
				}
			}

			/* 답글 금액 등록 */
			if (dsBbs.getString(0, "BLBD_ID").equals("201506090003") && dsBbs.getString(0, "PRET_BBRD_ID") != null) { // 자료요청 댓글 시에만 답글금액 등록
				if (rowCount > 0) {
					String FS_RGM = dsBbs.getString(0, "FS_RGM");
					String LS_CHGM = dsBbs.getString(0, "LS_CHGM");

					try {
						Map<String, Object> usrGlnCode = blbdService.getUsrGlnCode(pretBbrdId);// NA_TRPL_C
						if (usrGlnCode != null) {
							if (usrGlnCode.get("NA_TRPL_C") != null && !"".equals(usrGlnCode.get("NA_TRPL_C"))) {
								String PAY_TRPL_C = usrGlnCode.get("NA_TRPL_C").toString();
								if (PAY_TRPL_C != null && PAY_TRPL_C.length() > 0) {
									blbdService.insertBlbdPrc(UPLOAD_DT, BBRD_ID, PRC, FS_RGM, LS_CHGM, PAY_TRPL_C);
								}
							}
						}
					} catch (AppetizerException e) {
						throw e;
					}
				}
			}
			
			RequestUtil.clearCorsToken(request); // CORS 토큰 초기화
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -3, e.getErrorMsg());
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/blbd/canDelete")
	public void canDelete(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		DataSet dsBbs = requestHelper.getDataSet("ds_bbs");
		DataSet ds_result = new DataSet("ds_result");
		ds_result.addColumn("COUNT", DataTypes.STRING);
		ds_result.newRow();

		try {
			int count = blbdService.canDelete(dsBbs.getString(0, "BBRD_ID"));
			ds_result.set(0, "COUNT", Integer.toString(count));
			platformData.addDataSet(ds_result);
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}

	/**
	 * 게시판 글 삭제(삭제 플래그)
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/blbd/deleteBlbd")
	public void deleteBlbd(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		DataSet dsBbs = requestHelper.getDataSet("ds_bbs");

		try {
			blbdService.deleteBlbd(dsBbs);
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 게시판 글 수정
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/blbd/updateblbdCntn")
	public void updateblbdCntn(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		// 1. CORS 검증
		if (!RequestUtil.validCorsToken(requestHelper)) {
			sendData(response, new PlatformData(), -600, "Invalid token");
			return;
		}
		
		PlatformData platformData = new PlatformData();
		DataSet dsBbs = requestHelper.getDataSet("ds_bbs");
		DataSet dsFile = requestHelper.getDataSet("ds_file");

		try {
			// 2. 파일명검사 (오류시 글 작성 취소)
			for (int j = 0; j < dsFile.getRowCount(); j++) {
				FileController.getSafeFileName(dsFile.getString(j, "ORGFNAME"));
			}
			
			BlbdVO vo = new BlbdVO();
			vo.setBBRD_ID(dsBbs.getString(0, "BBRD_ID"));
			vo.setBBRD_CNTN(dsBbs.getString(0, "BBRD_CNTN"));
			vo.setBBRD_DEL_YN(dsBbs.getString(0, "BBRD_DEL_YN"));
			vo.setBBRD_INQ_CN(dsBbs.getString(0, "BBRD_INQ_CN"));
			vo.setBBRD_RGM_NM(dsBbs.getString(0, "BBRD_RGM_NM"));
			vo.setBBRD_TI(dsBbs.getString(0, "BBRD_TI"));
			vo.setBLBD_ID(dsBbs.getString(0, "BLBD_ID"));
			vo.setBLTN_ED_DTM(dsBbs.getString(0, "BLTN_ED_DTM"));
			vo.setBLTN_ST_DTM(dsBbs.getString(0, "BLTN_ST_DTM"));
			vo.setFSRG_DTM(dsBbs.getString(0, "FSRG_DTM"));
			vo.setPRET_BBRD_ID(dsBbs.getString(0, "PRET_BBRD_ID"));
			vo.setFS_RGM(dsBbs.getString(0, "FS_RGM"));
			vo.setLSCHG_DTM(dsBbs.getString(0, "LSCHG_DTM"));
			vo.setLS_CHGM(dsBbs.getString(0, "LS_CHGM"));
			vo.setBBRD_CLOSED_YN(dsBbs.getString(0, "BBRD_CLOSED_YN"));
			vo.setBBRD_PUP_ST_DT(dsBbs.getString(0, "BBRD_PUP_ST_DT"));
			vo.setBBRD_PUP_ED_DT(dsBbs.getString(0, "BBRD_PUP_ED_DT"));
			vo.setBBRD_PUP_YN(dsBbs.getString(0, "BBRD_PUP_YN"));
			vo.setBBRD_PUP_SYS_FLNM(dsBbs.getString(0, "BBRD_PUP_SYS_FLNM"));
			vo.setBBRD_PUP_APDFLNM(dsBbs.getString(0, "BBRD_PUP_APDFLNM"));
			int count = blbdService.updateblbdCntn(vo);

			if (count > 0) {
				BlbdApdflVO file = new BlbdApdflVO();
				String APDFL_ID = "";

				String srcDir = Configurer.getProperty("file.temp.path");
				String dstDir = Configurer.getProperty("file.refBbs.path")
						+ File.separator + dsBbs.getString(0, "BLBD_ID")
						+ File.separator + vo.getBBRD_ID().substring(0,4)
						+ File.separator + vo.getBBRD_ID();

				// 첨부삭제
				for (int t = 0; t < dsFile.getRemovedRowCount(); t++) {
					// 화면단에서 데이타셋의 삭제된 값이 자동으로 인식을하게됩니다.
					String delFileName = dsFile.getRemovedData(t, "SYSTEMFILENAME").toString();
					file = new BlbdApdflVO();
					file.setAPDFL_PATHNM(delFileName);
					file.setBBRD_ID(dsBbs.getString(0, "BBRD_ID"));
					file.setBLBD_ID(dsBbs.getString(0, "BLBD_ID"));

					if (delFileName != null) {
						FileUtil.deleteFile(dstDir + File.separator + delFileName);
						blbdService.deleteApdfl(file);
					}
				}
				for (int j = 0; j < dsFile.getRowCount(); j++) {
					if (dsFile.getRowType(j) == DataSet.ROW_TYPE_INSERTED) {
						String sysName = dsFile.getString(j, "SYSTEMFILENAME");
						String orgName = FileController.getSafeFileName(dsFile.getString(j, "ORGFNAME"));
						String fileSize = dsFile.getString(j, "FILESIZE");
						
						// 파일정보 없을 때 무시
						if (StringUtils.isEmpty(sysName) || StringUtils.isEmpty(orgName) || StringUtils.isEmpty(fileSize)) {
							continue;
						}
						
						file = new BlbdApdflVO();
						APDFL_ID = SeqGenUtil.getSeq(PortalSequenceKeySeqName.SQ_APDFL.name());
						file.setAPDFL_ID(APDFL_ID);
						file.setAPDFL_PATHNM(sysName);
						file.setAPDFL_SZE(fileSize);
						file.setAPDFLNM(orgName);
						file.setBBRD_ID(dsBbs.getString(0, "BBRD_ID"));
						file.setBLBD_ID(dsBbs.getString(0, "BLBD_ID"));
						file.setFS_RGM(dsFile.getString(j, "FS_RGM"));
						file.setLS_CHGM(dsFile.getString(j, "LS_CHGM"));

						try {
							FileUtil.moveFile(srcDir, dstDir, sysName);
							blbdService.insertApdfl(file);
						} catch (IOException e) {
							logger.error(e.getMessage(), e);
						}
					}
				}
				/* 금액 수정 */
				String PRC = requestHelper.getParameter("PRC");
				String UPLOAD_DT = requestHelper.getParameter("today");
				String BBRD_ID = dsBbs.getString(0, "BBRD_ID");
				String LS_CHGM = dsBbs.getString(0, "LS_CHGM");

				blbdService.updateBlbdPrc(UPLOAD_DT, BBRD_ID, PRC, LS_CHGM);

			}
			
			RequestUtil.clearCorsToken(request); // CORS 토큰 초기화
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(value = "/rest/pt/image/{blbdId}/{bbrdId}/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
	public @ResponseBody byte[] retrieveNamoImageFile(HttpServletResponse response, @PathVariable String blbdId, @PathVariable String bbrdId, @PathVariable String imageName) {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		String filePath = Configurer.getProperty("file.refBbs.path")+File.separator+blbdId+File.separator+bbrdId.substring(0,4)+File.separator+bbrdId+File.separator+"namo";
		File dir = new File(filePath);
		File imageFile = new File(dir.getAbsolutePath() + File.separator + imageName);

		byte[] fileArray = null;
		try {
			FileUtils.copyFile(imageFile, baos);
			fileArray = baos.toByteArray();
		} catch (IOException e) {
			throw new RuntimeException("File Error");
		} finally {
			IOUtils.closeQuietly(baos);
		}
		return fileArray;
	}
}

