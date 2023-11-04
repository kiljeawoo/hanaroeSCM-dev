package com.nh.escm.pds.pricat.controller;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.exception.ValidationException;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.ZipUtil;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.controller.FileController;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.common.service.SentCheckService;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.pds.company.vo.CompanyVO;
import com.nh.escm.pds.pricat.service.ProductService;
import com.nh.escm.pds.pricat.util.MHTParser;
import com.nh.escm.pds.pricat.vo.ProductAttrVO;
import com.nh.escm.pds.pricat.vo.ProductReqFile;
import com.nh.escm.pds.pricat.vo.ProductReqPrgrVO;
import com.nh.escm.pds.pricat.vo.ProductReqVO;
import com.nh.escm.pds.pricat.vo.ProductSearchVO;
import com.nh.escm.pds.pricat.vo.ProductTempFileVO;
import com.nh.escm.pds.pricat.vo.ProductTrtVO;
import com.nh.escm.pds.pricat.vo.ProductVO;
import com.nh.escm.pds.pricat.vo.TempOdTrtwrsInfoUploadFileVO;
import com.nh.escm.util.PageHelper;


@RestController
public class ProductController extends AbstractController{
	
	@Autowired
	private ProductService productSev;
	
	@Autowired
	private SequenceKeyService sequenceKeyService;
	
	@Autowired
	private SentCheckService sentCheckService;
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrieveOnWrsInfo")
	public void retrieveOnWrsInfo(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		String na_wrs_c = requestHelper.getParameter("na_wrs_c"); // 상품코드
		try {
			List<Map<String, Object>> mapList = productSev.searchOnWrsInfo(na_wrs_c, ""); // 상품기본정보 조회
			DataSetHelper ds_trtwrs_sel = new DataSetHelper("ds_trtwrs_sel"); // 상품기본정보 내역 저장 용 dataset

			// 상품기본정보 내역 set
			if (mapList != null && mapList.size() > 0) {
				ds_trtwrs_sel.addColumns(mapList.get(0).keySet());
				for (Map<String, Object> map : mapList) {
					ds_trtwrs_sel.setData(map);

					String flnm = (String) map.get("IMG_EXPL_FL_NM");
					if (!StringUtils.isEmpty(flnm)) {
						String amarketPath = Configurer.getProperty("file.amarket.path");
						String wrsPath = amarketPath + File.separator + na_wrs_c.substring(0, 7) + File.separator + na_wrs_c;
						File contFile = new File(wrsPath + File.separator + flnm);

						if (contFile.exists()) {
							boolean isHtml = false;
							if (flnm.indexOf(".html") != -1) {
								isHtml = true;
							} else if (flnm.indexOf(".mht") != -1) {
								// 기존 mht파일 변환
								List<String> result = MHTParser.toHtml(contFile, new File(wrsPath), true, na_wrs_c);
								flnm = flnm.replace(".mht", ".html");
								ds_trtwrs_sel.getDataSet().set(0, "IMG_EXPL_FL_NM", flnm);
								for (int i = 0; i < result.size(); i++) {
									if (i == 5) {
										break; // 이미지는 5개까지만
									}
									ds_trtwrs_sel.getDataSet().set(0, String.format("IMG_DTL%d_NM", (i + 1)), result.get(i));
								}
								isHtml = true;
							}

							if (isHtml) {
								String value = FileUtil.readToString(wrsPath + File.separator + flnm, "utf-8");
								ds_trtwrs_sel.getDataSet().set(0, "HTML_DATA", value);
							}
						}
					}
				}
			}
			platformData.addDataSet(ds_trtwrs_sel.getDataSet()); // UI로 전송될 platformData에 상품기본정보 Dataset set

			sendData(response, platformData); // UI로 조회결과 전송
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage()); // UI로 조회결과 전송(Error)
		} catch (IOException | MessagingException e) {
			sendData(response, platformData, -2, e.getMessage()); // UI로 조회결과 전송(Error)
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 상품고시항목조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrieveGdWrsNtfyDtl")
	public void retrieveGdWrsNtfyDtl(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		String na_wrs_c = requestHelper.getParameter("na_wrs_c"); // 상품코드
		String wrs_ntfy_c = requestHelper.getParameter("wrs_ntfy_c"); // 고시코드
		String van_c_rq_no = requestHelper.getParameter("van_c_rq_no"); // 고시코드

		try {
			List<Map<String, Object>> mapList = productSev.searchGdWrsNtfyDtl(na_wrs_c, wrs_ntfy_c, van_c_rq_no);
			DataSetHelper ds_wrs_nfty_hdng_sel = new DataSetHelper("ds_wrs_nfty_hdng_sel");

			if (mapList != null && mapList.size() > 0) {
				ds_wrs_nfty_hdng_sel.addColumns(mapList.get(0).keySet());
				for (Map<String, Object> map : mapList) {
					ds_wrs_nfty_hdng_sel.setData(map);
				}
			}
			platformData.addDataSet(ds_wrs_nfty_hdng_sel.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 공통코드조회(aMarket 과세구분, 국가코드, 상품표시단위), 고시코드, 금칙어
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrieveCommCode1590")
	public void retrieveCommCode1590(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		String rgn_c = requestHelper.getParameter("rgn_c"); // 국가코드
//		String txt_dsc = requestHelper.getParameter("txt_dsc"); // 과세구분
		String wrs_unt_c = requestHelper.getParameter("wrs_unt_c"); // 상품표시단위

		try {
			List<Map<String, Object>> mapList = productSev.searchGdWrsNtfy();
			List<Map<String, Object>> mapList1 = productSev.searchCommCode1590(rgn_c);
//			List<Map<String, Object>> mapList2 = productSev.searchCommCode1590(txt_dsc);
			List<Map<String, Object>> mapList3 = productSev.searchCommCode1590(wrs_unt_c);
			List<Map<String, Object>> mapList4 = productSev.searchBanWord();
			DataSetHelper ds_wrs_nfty_sel = new DataSetHelper("ds_wrs_nfty_sel");
			DataSetHelper ds_rgn_c = new DataSetHelper("ds_rgn_c");
//			DataSetHelper ds_txt_dsc = new DataSetHelper("ds_txt_dsc");
			DataSetHelper ds_wrs_unt_c = new DataSetHelper("ds_wrs_unt_c");
			DataSetHelper ds_ban_word = new DataSetHelper("ds_ban_word");

			if (mapList != null && mapList.size() > 0) {
				ds_wrs_nfty_sel.addColumns(mapList.get(0).keySet());
				for (Map<String, Object> map : mapList) {
					ds_wrs_nfty_sel.setData(map);
				}
			}
			if (mapList1 != null && mapList1.size() > 0) {
				ds_rgn_c.addColumns(mapList1.get(0).keySet());
				for (Map<String, Object> map : mapList1) {
					ds_rgn_c.setData(map);
				}
			}
//			if (mapList2 != null && mapList2.size() > 0) {
//				ds_txt_dsc.addColumns(mapList2.get(0).keySet());
//				for (Map<String, Object> map : mapList2) {
//					ds_txt_dsc.setData(map);
//				}
//			}
			if (mapList3 != null && mapList3.size() > 0) {
				ds_wrs_unt_c.addColumns(mapList3.get(0).keySet());
				for (Map<String, Object> map : mapList3) {
					ds_wrs_unt_c.setData(map);
				}
			}
			if (mapList4 != null && mapList4.size() > 0) {
				ds_ban_word.addColumns(mapList4.get(0).keySet());
				for (Map<String, Object> map : mapList4) {
					ds_ban_word.setData(map);
				}
			}

			platformData.addDataSet(ds_wrs_nfty_sel.getDataSet());
			platformData.addDataSet(ds_rgn_c.getDataSet());
//			platformData.addDataSet(ds_txt_dsc.getDataSet());
			platformData.addDataSet(ds_wrs_unt_c.getDataSet());
			platformData.addDataSet(ds_ban_word.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}


	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품정보등록
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/insertOnWrsInfo")
	public void insertOnWrsInfo(HttpServletRequest request,HttpServletResponse response){
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		DataSetList in_dsList = requestHelper.getDataSetList();
		DataSet ds_trtwrs = in_dsList.get("ds_trtwrs"); // 온라인취급상품
		DataSet ds_wrs_nfty_hdng = in_dsList.get("ds_wrs_nfty_hdng"); // 온라인취급상품고시항목상세
		DataSet ds_wrs_img = in_dsList.get("ds_wrs_img"); // 온라인취급상품이미지
		DataSet ds_namo_editor = in_dsList.get("ds_namo_editor"); // 나모편집파일(MIMEValue)
		String namoFileNm = ds_namo_editor.getString(0, "ORG_FILENM"); // NamoDataFileName
		String namoHtmlData = ds_namo_editor.getString(0, "MHT_DATA"); // Namo MIMEValue Data
		String namoImgData = ds_namo_editor.getString(0, "IMG_DATA"); // Namo MIMEValue Data
		String amarketPath = Configurer.getProperty("file.amarket.path");// amarket 전송대상 파일 path
		String naWrsC = ds_trtwrs.getString(0, "NA_WRS_C"); // 상품코드

		SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
		String bzno = box.getBizNumber();
		String userId = requestHelper.getUserID(); // login 사용자 ID
		String clntnm = requestHelper.getCompanyName();
		
		File dir_wrs = new File(amarketPath + File.separator + naWrsC.substring(0, 7) + File.separator + naWrsC); // 저장되는 상품코드 directory 선언
		
		try {
			if (!"".equals(namoHtmlData) && !"".equals(namoFileNm)) {
				if (!dir_wrs.exists()) {
					dir_wrs.mkdirs();
				}

				// 1. HTML 내 이미지 처리
				if (!"".equals(namoImgData)) {
					String[] list = namoImgData.split(",");

					int seq = 1;
					for (int i = 0; i < list.length; i++) {
						seq = getNextImgSeq(namoHtmlData, seq);
						String newName = naWrsC + "_ceimg" + String.format("%02d", seq);

						// Html 내 이미지 수정
						String[] imgInfo = list[i].split("#");
						namoHtmlData = namoHtmlData.replace(list[i], newName + "." + imgInfo[1] + "/");
						ds_trtwrs.set(0, String.format("IMG_DTL%d_NM", seq), newName + "." + imgInfo[1]);
						seq++;

						// 이미지 파일 이동
						File from = new File(Configurer.getProperty("file.temp.path"), imgInfo[0]);
						File to = new File(dir_wrs, newName + "." + imgInfo[1]);
						if (to.exists()) {
							to.delete(); // 이미 존재하는 파일일 경우 삭제(수정하면서 사용하지 않게된 이미지)
						}
						FileUtil.moveFile(from, to);
					}
				}
				
				// 1-1. 상세 이미지 파일 DB 저장
				for (int i = 1; i <= 5; i++) {
					String imgNm = naWrsC + "_ceimg" + String.format("%02d", i);
					if (namoHtmlData.indexOf(imgNm) != -1) {
						System.out.println("[" + i + "] 이미지 등록");
						//ds_trtwrs.set(0, String.format("IMG_DTL%d_NM", i), imgNm);
					} else {
						System.out.println("[" + i + "] 이미지 없음");
						ds_trtwrs.set(0, String.format("IMG_DTL%d_NM", i), "");
						
						for (File wrsFile : dir_wrs.listFiles()) {
							if (wrsFile.isFile() && wrsFile.getName().contains(imgNm)) {
								System.out.println("└ 미사용 이미지 삭제");
								wrsFile.delete(); // 미사용 이미지 삭제
								break;
							}
						}
					}
				}

				// 2. 나모 파일 저장
				byte[] bytes = null;
				try {
					bytes = namoHtmlData.getBytes("utf-8"); // Namo Data를 Byte 형태로 Get
				} catch (UnsupportedEncodingException e1) {
					sendData(response, platformData, -1, e1.getMessage());
				}

				String serverFilePath = dir_wrs.getAbsolutePath() + File.separator + namoFileNm;
				File serverFile = new File(serverFilePath);
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();

				if (namoFileNm.contains(".html")) {
					// 기존 MHT 파일 있으면 제거
					String mht = namoFileNm.replace(".html", ".mht");
					File mhtFile = new File(dir_wrs.getAbsolutePath() + File.separator + mht); // 저장되는 상품코드 directory 선언
					if (mhtFile.exists()) {
						mhtFile.delete();
					}
				}
			}

			// 이미지관련처리
			for (int i = 0; i < ds_wrs_img.getRowCount(); i++) {
				String p_row_type = ds_wrs_img.getString(i, "xRowStatusType");
				String p_img_nm = ds_wrs_img.getString(i, "IMG_NM");

				/*
				 * 상태구분자값(xRowStatusType) 정의 A : 기등록데이터가 DB에서 조회된 상태로 UI에서 사용자의 조작이 없던 상태 > 처리 :
				 * x I : 사용자가 UI에서 새로 등록한 이미지 파일로 파일폴더에 'temp_상품코드_이미지구분자'의 형태로 저장되어있음 > 처리 :
				 * temp_를 없애고 복사, temp파일은 삭제 U : 기등록데이터가 DB에서 조회된 상태의 이미지파일을 UI에서 사용자가 다른 이미지로
				 * 바꾼상태 > 처리 : 기존파일 삭제, temp_를 없애고 복사, temp파일은 삭제 D : 기등록데이터가 DB에서 조회된 상태의
				 * 이미지파일을 UI에서 사용자가 삭제를 요구한 상태 > 처리 : 기존파일 /temp파일 존재하는 파일은 모두 삭제 C : 사용자가 UI에서
				 * 이미지파일을 upload했다가 취소를 한 상태 > 처리 : temp 파일만 삭제
				 */
				String temp_file_path = dir_wrs.getAbsolutePath() + File.separator + "temp_" + p_img_nm;
				String org_file_path = dir_wrs.getAbsolutePath() + File.separator + p_img_nm;

				if ("D".equals(p_row_type) || "C".equals(p_row_type)) {
					if ("D".equals(p_row_type)) {
						File d_file = new File(org_file_path);
						if (d_file.exists()) {
							d_file.delete();
						}
					}
					File c_file = new File(temp_file_path);
					if (c_file.exists()) {
						c_file.delete();
					}
				} else if ("I".equals(p_row_type) || "U".equals(p_row_type)) {
					File n_file = new File(temp_file_path);
					File u_file = new File(org_file_path);

					if (u_file.exists()) {
						u_file.delete();
					}

					if (n_file.exists()) {
						FileInputStream sos_File = new FileInputStream(temp_file_path);
						FileOutputStream trg_File = new FileOutputStream(org_file_path);

						int data = 0;
						while ((data = sos_File.read()) != -1) {
							trg_File.write(data);
						}
						sos_File.close();
						trg_File.close();
						n_file.delete();
					}
				}
			}

		} catch (Exception e) {
			sendData(response, platformData, -1, e.getMessage());
		}
		
		try{
			ds_trtwrs.set(0, "IMG_EXPL_FL_NM", namoFileNm);
			productSev.insertOnWrsInfo(userId, ds_trtwrs, ds_wrs_nfty_hdng, clntnm, bzno);
			sendData(response, platformData);
		}catch(AppetizerException e){
			sendData(response, platformData, -1, e.getMessage());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품이미지등록(임시파일 temp)
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/onWrsImgFileUpload")
	public void onWrsImgFileUpload(MultipartHttpServletRequest request, HttpServletResponse response) {
		Iterator<String> fileNames = request.getFileNames();
		PlatformData platformData = new PlatformData();
		try {
			DataSet ds = new DataSet("ds01");
			ds.addColumn(new ColumnHeader("FILENAME", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("FILETYPE", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("FILESIZE", DataTypes.LONG));
			ds.addColumn(new ColumnHeader("ORGFNAME", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("SYSTEMFILENAME", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("FILEPATH", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("ERR_YN", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("ERR_MSG", DataTypes.STRING));
			String p_file_path = request.getParameter("filepath"); // NA_WRS_C
			String p_file_name = request.getParameter("filename");
			String amarketPath = Configurer.getProperty("file.amarket.path");
			int img_width = 0;
			int img_height = 0;
			boolean bImgSize = true;
			String systemfilename = null; // 시스템파일명

			while (fileNames.hasNext()) {
				String orgFileName = fileNames.next();
				List<MultipartFile> files = request.getFiles(orgFileName);
				for (MultipartFile file : files) {
					byte[] bytes = file.getBytes();

					File dir_wrs = new File(amarketPath + File.separator + p_file_path.substring(0, 7) + File.separator + p_file_path);
					if (!dir_wrs.exists()) {
						dir_wrs.mkdirs();
					}
					File serverFile = new File(dir_wrs.getAbsolutePath() + File.separator + p_file_name);
					BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
					stream.write(bytes);
					stream.close();

					// 이미지 크기 검사
					/*
					if (p_file_name.indexOf("_rep") > -1 || p_file_name.indexOf("_add3") > -1) {
						BufferedImage img = ImageIO.read(serverFile);
						img_width = img.getWidth();
						img_height = img.getHeight();
						if (img_width < 800 || img_height < 800) {
//							logger.info("IMAGE WIDTH  ::: " + img_width);
//							logger.info("IMAGE HEIGHT ::: " + img_height);
							bImgSize = false;
							if (serverFile.exists()) {
								serverFile.delete();
							}
						}
					}
					*/
					
					systemfilename = FileController.getSafeFileName(serverFile.getName()); // 시스템파일명

					int nRow = ds.newRow();
					if (bImgSize) {
						ds.set(nRow, "FILENAME", p_file_name);
						ds.set(nRow, "FILETYPE", file.getContentType());
						ds.set(nRow, "FILESIZE", file.getSize());
						ds.set(nRow, "ORGFNAME", file.getOriginalFilename());
						ds.set(nRow, "SYSTEMFILENAME", systemfilename); // 웹취약
						ds.set(nRow, "FILEPATH", dir_wrs.getAbsolutePath() + File.separator);

//						logger.info("File Upload Location="+ serverFile.getAbsolutePath());
					} else {
						ds.set(nRow, "FILENAME", p_file_name);
						ds.set(nRow, "ORGFNAME", file.getOriginalFilename());
						ds.set(nRow, "ERR_YN", "1");
						ds.set(nRow, "ERR_MSG", "이미지 크기는 800px × 800px 이상이어야 합니다. 현재이미지 (width:" + img_width + "px, height : " + img_height + "px)");
					}
				}
			}
//			logger.info(ds.saveXml());
			platformData.addDataSet(ds);
			sendData(response, platformData);
		} catch (IOException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품 관련정보(상세내용, 상품이미지) 다운로드
	 */
	@RequestMapping(method=RequestMethod.GET, value="/rest/pds/pricat/Product/onWrsInfoFileDownload")
	public void onWrsInfoFileDownload(String na_wrs_c, String fileName, HttpServletRequest request, HttpServletResponse response) {
		String realPath = Configurer.getProperty("file.amarket.path");// amarket 전송대상 파일 path
		String dFileName = fileName;

		File dir = new File(realPath);
		File downloadFile = new File(dir.getAbsolutePath() + File.separator + na_wrs_c.substring(0, 7) + File.separator + na_wrs_c + File.separator + fileName);

		response.setContentType(request.getContentType());
		response.setContentLength((int) downloadFile.length());
		response.setHeader("Content-Disposition", "attachment; filename=\"" + dFileName + "\";");
		response.setHeader("Content-Transfer-Encoding", "binary");
		response.setHeader("Set-Cookie", "fileDownload=true; path=/");
		OutputStream out = null;
		try {
			out = response.getOutputStream();
			FileUtils.copyFile(downloadFile, out);
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
	}

	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : 온라인취급상품 관련정보(상세내용, 상품이미지) 스트리밍
	 */
	@RequestMapping(method=RequestMethod.GET, value="/rest/pds/pricat/Product/onWrsInfoDtlConts")
	public @ResponseBody void onWrsInfoDtlConts(String na_wrs_c, String fileName, HttpServletRequest request, HttpServletResponse response) {
		String realPath = Configurer.getProperty("file.amarket.path");// amarket 전송대상 파일 path
		String dFileName = fileName;

		File dir = new File(realPath);
		File mhtFile = new File(dir.getAbsolutePath() + File.separator + na_wrs_c.substring(0, 7) + File.separator + na_wrs_c + File.separator + fileName);

//		logger.info("MHT LOCATION = " + mhtFile.getAbsolutePath());

//		response.setContentType(request.getContentType()); // message/rfc822
		response.setContentType("message/rfc822"); // message/rfc822
		response.setContentLength((int) mhtFile.length());
		response.setHeader("Content-Disposition", "inline; filename=\"" + dFileName + "\";");
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
	}
	
	@RequestMapping(value = "/rest/ce/nhmimg/{van_c_rq_no}/{imageName}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_GIF_VALUE})
	public @ResponseBody byte[] retrieveNamoImageFile(HttpServletResponse response, @PathVariable String van_c_rq_no, @PathVariable String imageName) {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		String filePath = Configurer.getProperty("file.real.wrs.path");
		File dir = new File(filePath);
		File imageFile = new File(dir.getAbsolutePath() /*+ File.separator + naWrsC.substring(0, 7) */+ File.separator + van_c_rq_no + File.separator + imageName);

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
	
	/*
	 * 화면ID : VAN_DS_SC_1590
	 * 화면설명 : NamoWebEditor 다운로드
	 */
	@RequestMapping(method=RequestMethod.GET, value="/rest/pds/pricat/Product/onNamoWebEditorFileDownload")
	public void onNamoWebEditorFileDownload(HttpServletRequest request, HttpServletResponse response) {
		String realPath = Configurer.getProperty("file.amarket.path");// amarket 전송대상 파일 path
		String dFileName = "ActiveSquare8Setup.exe";

		File dir = new File(realPath);
		File downloadFile = new File(dir.getAbsolutePath() + File.separator + dFileName);

		response.setContentType(request.getContentType());
		response.setContentLength((int) downloadFile.length());
		response.setHeader("Content-Disposition", "attachment; filename=\"" + dFileName + "\";");
		response.setHeader("Content-Transfer-Encoding", "binary");
		response.setHeader("Set-Cookie", "fileDownload=true; path=/");
		OutputStream out = null;
		try {
			out = response.getOutputStream();
			FileUtils.copyFile(downloadFile, out);
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
	}

	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/retrievePricatStandards")
	public void retrievePricatStandards(HttpServletRequest request,HttpServletResponse response){
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String storesch = requestHelper.getParameter("storesch"); 		//상품코드
			String wrs_c_dsc = requestHelper.getParameter("wrs_c_dsc");		//상품코드구분코드
			String[] arr_c_dsc = wrs_c_dsc.split(",");
			String wrs_lclc = requestHelper.getParameter("wrs_lclc"); 		//경제통합상품대분류코드
			String wrs_mclc = requestHelper.getParameter("wrs_mclc"); 		//경제통합상품중분류코드
			String wrs_sclc = requestHelper.getParameter("wrs_sclc"); 		//경제통합상품소분류코드
			String wrs_dtcf_c = requestHelper.getParameter("wrs_dtcf_c"); 	//경제통합상품세분류코드
			String wrs_dsc = requestHelper.getParameter("wrs_dsc"); 		//상품구분코드
			String cser_ctr = requestHelper.getParameter("cser_ctr");		//계약유형코드
			String fsrg_from = requestHelper.getParameter("fsrg_from"); 	//등록일시작
			String fsrg_to = requestHelper.getParameter("fsrg_to"); 		//등록일끝
			String lschg_from = requestHelper.getParameter("lschg_from"); 	//최종수정일시작
			String lschg_to = requestHelper.getParameter("lschg_to"); 		//최종수정일끝
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String mngt_c = requestHelper.getParameter("mngt_c");
			DataSetHelper dHelper = new DataSetHelper("ds_wrs");
			
			//페이징
			int totalRowCount = productSev.selectWRSCount(storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr,TRPL_C_ARR[0]);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			List<ProductVO> resultvo = productSev.selectWRS(storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr,TRPL_C_ARR[0],start,end);
			
			PlatformData out_PlatformData = new PlatformData();
			dHelper.addColumns(ProductVO.class);
			for(ProductVO prolist : resultvo){
				dHelper.setData(prolist);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 (출력화면)
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/oz/pds/pricat/Product/retrievePricatStandards")
	public RestResult retrievePricatStandardsOz(HttpServletRequest request,HttpServletResponse response,
			String TRPL_C,String mngt_c,String TRPL_C_TEXT, String storesch,String wrs_c_dsc,String wrs_lclc,String wrs_mclc,String wrs_sclc,String wrs_dtcf_c,String wrs_dsc,String fsrg_from,String fsrg_to,String lschg_from,String lschg_to,String sName,String cser_ctr){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String[] arr_c_dsc = wrs_c_dsc.split(",");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			//타이틀
			List<Map<String,Object>> title = new ArrayList<Map<String,Object>>();
			Map<String,Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);
			
			//리스트(필요한것만 필터링)
			List<ProductVO> userlist = productSev.selectWRSprint(TRPL_C_ARR[0],storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr);
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for(ProductVO vo : userlist){
				Map<String,Object> map = new HashMap<String, Object>();
				String wrs_c = StringUtil.toString(vo.getNA_WRS_C());				//상품코드
				String wrsnm = StringUtil.toString(vo.getWRSNM());					//상품명
				String wrs_stdnm = StringUtil.toString(vo.getWRS_STDNM());			//규격
				String txt_dsc = StringUtil.toString(vo.getTXT_DSC());				//과세구분
				if(txt_dsc.equals("1")) txt_dsc = "과세";
				else txt_dsc= "면세";
				String mft_na_trpl_c = StringUtil.toString(vo.getMFT_NA_TRPL_C());	//제조업체코드
				String mft_na_trpl_nm = StringUtil.toString(vo.getMFT_NA_TRPL_NM());//제조사명
				String na_wrs_clnm = StringUtil.toString(vo.getNA_WRS_CLNM());		//분류
				String fsrg_dtm = StringUtil.toString(vo.getFSRG_DTM());				//등록일
				String lschg_dtm = StringUtil.toString(vo.getLSCHG_DTM());			//변경일
				
				map.put("wrs_c", wrs_c);
				map.put("wrsnm", wrsnm);
				map.put("wrs_stdnm", wrs_stdnm);
				map.put("txt_dsc", txt_dsc);
				map.put("mft_na_trpl_c", mft_na_trpl_c);
				map.put("mft_na_trpl_nm", mft_na_trpl_nm);
				map.put("na_wrs_clnm", na_wrs_clnm);
				map.put("wrs_dsc", vo.getWRS_DSC()+"차상품");
				map.put("fsrg_dtm", fsrg_dtm);
				map.put("lschg_dtm", lschg_dtm);
				list.add(map);
			}			
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(title);
			all_list.add(list);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1500
	 * 화면설명 : 상품기준정보조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelPricatStandards")
	public void downloadExcelPricatStandards(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String storesch = requestHelper.getParameter("storesch"); 		//상품코드
			String wrs_c_dsc = requestHelper.getParameter("wrs_c_dsc");		//상품코드구분코드
			String[] arr_c_dsc = wrs_c_dsc.split(",");
			String wrs_lclc = requestHelper.getParameter("wrs_lclc"); 		//경제통합상품대분류코드
			String wrs_mclc = requestHelper.getParameter("wrs_mclc"); 		//경제통합상품중분류코드
			String wrs_sclc = requestHelper.getParameter("wrs_sclc"); 		//경제통합상품소분류코드
			String wrs_dtcf_c = requestHelper.getParameter("wrs_dtcf_c"); 	//경제통합상품세분류코드
			String cser_ctr = requestHelper.getParameter("cser_ctr");		//계약유형
			String wrs_dsc = requestHelper.getParameter("wrs_dsc"); 		//상품구분코드
			String fsrg_from = requestHelper.getParameter("fsrg_from"); 	//등록일시작
			String fsrg_to = requestHelper.getParameter("fsrg_to"); 		//등록일끝
			String lschg_from = requestHelper.getParameter("lschg_from"); 	//최종수정일시작
			String lschg_to = requestHelper.getParameter("lschg_to"); 		//최종수정일끝
			String mngt_c = requestHelper.getParameter("mngt_c");			//제조처사업장
			String fileName = "상품기준정보조회.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"상품코드",
					"상품명",
					"규격",
					"과세구분",
					"제조업체코드",
					"제조사명",
					"분류",
					"상품구분",
					"등록일",
					"변경일"
			};
			String[] keyIndex = {
					"NA_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"TXT_DSC_NM",
					"MFT_NA_TRPL_C",
					"MFT_NA_TRPL_NM",
					"NA_WRS_CLNM",
					"WRS_DSC_NM",
					"FSRG_DTM",
					"LSCHG_DTM"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.downloadExcelPricatStandards(TRPL_C_ARR[0],storesch,arr_c_dsc,wrs_lclc,wrs_mclc,wrs_sclc,wrs_dtcf_c,wrs_dsc,fsrg_from,fsrg_to,lschg_from,lschg_to,mngt_c,cser_ctr, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "상품기준정보조회");
			searchMap.put("상품코드", storesch);
			searchMap.put("상품코드구분코드", wrs_c_dsc);
			searchMap.put("경제통합상품대분류코드", wrs_lclc);
			searchMap.put("경제통합상품중분류코드", wrs_mclc);
			searchMap.put("경제통합상품소분류코드", wrs_sclc);
			searchMap.put("경제통합상품세분류코드", wrs_dtcf_c);
			searchMap.put("상품구분코드", wrs_dsc);
			searchMap.put("등록일시작날짜", fsrg_from);
			searchMap.put("등록일종료날짜", fsrg_to);
			searchMap.put("최종수정일시작날짜", lschg_from);
			searchMap.put("최종수정일종료날짜", lschg_to);
			searchMap.put("제조업체", mngt_c);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * VAN_DS_SC_1510
	 * 화면설명 : 거래관계 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/retrieveTrnRel")
	public void retrieveTrnRel(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String bzplc_code = requestHelper.getParameter("bzplc_code"); 	//검색 사업장코드
			String bzplc_team = requestHelper.getParameter("bzplc_team"); 	//검색 사업장팀코드
			String TRPL_C = requestHelper.getParameter("TRPL_C"); 			//사업장 코드
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_trntel");
			DataSetHelper dHelper2 = new DataSetHelper("ds_cif");
			//거래관계 조회
			List<Map<String,Object>> trnlist = productSev.searchTrnrel(bzplc_code,bzplc_team,TRPL_C);
			
			dHelper.addColumns(ProductTrtVO.class);
			for(Map<String,Object> map : trnlist){
				dHelper.setData(map);
			}
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			
			List<Map<String,Object>> ciflist = new ArrayList<Map<String,Object>>();
			if(trnlist.size() > 0){
				//본,지사 조회
				if(trnlist.get(0).get("SPY_TPC").toString() == "4"){
					ciflist = productSev.searchCIF(TRPL_C);
					dHelper2.addColumns(CompanyVO.class);
					for(Map<String,Object> map2 : ciflist){
						dHelper2.setData(map2);
					}
					out_PlatformData.addDataSet(dHelper2.getDataSet());
				}
			}
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/retrievePricatDetails")
	public void retrievePricatDetails(HttpServletRequest request,HttpServletResponse response){
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sto_code = requestHelper.getParameter("sto_code"); 		//상품코드
			String bzplc_code = requestHelper.getParameter("bzplc_code"); 	//검색 사업장코드
			String bzplc_team = requestHelper.getParameter("bzplc_team"); 	//검색 사업장팀코드
			String datesel = requestHelper.getParameter("datesel");			//일자구분 라디오버튼
			String fromdate = requestHelper.getParameter("date1"); 			//시작일
			String todate = requestHelper.getParameter("date2"); 			//종료일
			String ctr_tpc = requestHelper.getParameter("ctr_tpc");			//계약유형코드
			String TRPL_C = requestHelper.getParameter("TRPL_C"); 			//사업장 코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			DataSetHelper dHelper = new DataSetHelper("ds_trtwrs");
			
			//페이징
			int totalRowCount = productSev.selectTRTCount(sto_code,datesel,bzplc_code,bzplc_team,fromdate,todate,ctr_tpc,TRPL_C_ARR);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			PlatformData out_PlatformData = new PlatformData();
			List<ProductTrtVO> list = productSev.selectTRT(sto_code,datesel,bzplc_code,bzplc_team,fromdate,todate,ctr_tpc,TRPL_C_ARR,start,end);
			dHelper.addColumns(ProductTrtVO.class);
			for(ProductTrtVO prolist : list){
				dHelper.setData(prolist);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회 (출력화면)
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/oz/pds/pricat/Product/retrievePricatDetails")
	public RestResult retrievePricatDetailsOz(HttpServletRequest request, HttpServletResponse response, String TRPL_C,
			String TRPL_C_TEXT, String sto_code, String bzplc_code, String bzplc_team, String datesel, String fromdate,
			String todate, String ctr_tp, String sName, String limit) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			// 타이틀
			List<Map<String, Object>> title = new ArrayList<Map<String, Object>>();
			Map<String, Object> _title = new HashMap<String, Object>();
			_title.put("top1", sName);
			_title.put("top2", StringUtils.defaultString(requestHelper.getGlnCode()) + " " + StringUtils.defaultString(requestHelper.getCompanyName()));
			_title.put("top3", StringUtils.defaultString(requestHelper.getUserID()) + " " + StringUtils.defaultString(requestHelper.getUserName()));
			_title.put("search", TRPL_C_TEXT);
			title.add(_title);

			// 출력제한(오즈 메모리)
			int limitInt = 1000;
			try {
				if (!StringUtils.isEmpty(limit)) {
					limitInt = Integer.parseInt(limit);
					if (limitInt > 1000) {
						limitInt = 1000; // 파라매터 변조 방지
					}
				}
			} catch (NumberFormatException e) {
				limitInt = 1000;
			}
			
			// 리스트(필요한것만 필터링)
			List<ProductTrtVO> userlist = productSev.selectTRTprint(sto_code, datesel, bzplc_code, bzplc_team, fromdate,
					todate, ctr_tp, TRPL_C_ARR, limitInt);
			List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

			for (ProductTrtVO vo : userlist) {
				Map<String, Object> map = new HashMap<String, Object>();

				String na_bzplc = StringUtil.toString(vo.getNA_BZPLC()); // 사업장코드
				String clntnm = StringUtil.toString(vo.getCLNTNM()); // 사업장명
				String na_team_c = StringUtil.toString(vo.getNA_TEAM_C()); // 팀코드
				String na_team_nm = StringUtil.toString(vo.getTEAM_NM()); // 팀명
				String wrs_c = StringUtil.toString(vo.getNA_WRS_C()); // 상품코드
				String wrsnm = StringUtil.toString(vo.getWRSNM()); // 상품명
				String sp_na_trpl_c = StringUtil.toString(vo.getSPYPL_NA_TRPL_C()); // 공급처코드
				String sp_na_trpl_nm = StringUtil.toString(vo.getSPYPL_NA_TRPL_NM());// 공급처명
				String mn_na_trpl_c = StringUtil.toString(vo.getMNGT_NA_TRPL_C()); // 주관거래처
				String mn_na_trpl_nm = StringUtil.toString(vo.getMNGT_NA_TRPL_NM());// 주관거래처명
				String ctr_tpc = StringUtil.toString(vo.getCTR_TPC_NM()); // 계약유형코드
				String txt_dsc = StringUtil.toString(vo.getTXT_DSC_NM()); // 과세구분코드
				String vcbt_na_wrs_c = StringUtil.toString(vo.getVCBT_NA_WRS_C()); // 공병상품코드
				String vcbt_upr = StringUtil.toString(vo.getVCBT_UPR());
				String min_odr_qt = StringUtil.toString(vo.getMIN_ODR_QT()); // 최소발주수량
				String max_odr_qt = StringUtil.toString(vo.getMAX_ODR_QT()); // 최대발주수량

				map.put("na_bzplc", na_bzplc);
				map.put("clntnm", clntnm);
				map.put("na_team_c", na_team_c);
				map.put("na_team_nm", na_team_nm);
				map.put("wrs_c", wrs_c);
				map.put("wrsnm", wrsnm);
				map.put("sp_na_trpl_c", sp_na_trpl_c);
				map.put("mn_na_trpl_c", mn_na_trpl_c);
				map.put("ctr_tpc", ctr_tpc);
				map.put("vcbt_na_wrs_c", vcbt_na_wrs_c);
				map.put("min_odr_qt", min_odr_qt);
				map.put("sp_na_trpl_nm", sp_na_trpl_nm);
				map.put("mn_na_trpl_nm", mn_na_trpl_nm);
				map.put("txt_dsc", txt_dsc);
				map.put("vcbt_na_wrs_c", vcbt_na_wrs_c);
				map.put("vcbt_upr", vcbt_upr);
				map.put("max_odr_qt", max_odr_qt);
				list.add(map);
			}
			List<List<?>> all_list = new ArrayList<List<?>>();
			all_list.add(title);
			all_list.add(list);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		} catch (AppetizerException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelPricatDetails")
	public void downloadExcelPricatDetails(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sto_code = requestHelper.getParameter("sto_code"); 		//상품코드
			String datesel = requestHelper.getParameter("datesel");			//일자구분 라디오버튼
			String bzplc_code = requestHelper.getParameter("bzplc_code"); 	//수요처코드
			String bzplc_team = requestHelper.getParameter("bzplc_team"); 	//수요처팀코드
			String fromdate = requestHelper.getParameter("date1"); 			//시작일
			String todate = requestHelper.getParameter("date2"); 			//종료일
			String ctr_tpc = requestHelper.getParameter("ctr_tpc");			//계약유형코드
			String TRPL_C = requestHelper.getParameter("TRPL_C"); 			//사업장 코드
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			String limit = requestHelper.getParameter("limit");
			String fileName = "상품상세조회.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}

			// 출력제한(엑셀 메모리)
			int limitInt = 10000;
			try {
				if (!StringUtils.isEmpty(limit)) {
					limitInt = Integer.parseInt(limit);
					if (limitInt > 10000) {
						limitInt = 10000; // 파라매터 변조 방지
					}
				}
			} catch (NumberFormatException e) {
				limitInt = 10000;
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"사업장코드",
					"사업장명",
					"상품코드",
					"팀코드",
					"팀명",
					"상품명",
					"상품약어명",
					"매입단가",
					"최소발주수량",
					"최대발주수량",
					"공병상품코드",
					"공병단가",
					"공급처코드",
					"공급처명",
					"공급처팀코드",
					"공급처팀명",
					"주관거래처코드",
					"주관거래처명",
					"주관팀코드",
					"주관팀명",
					"계약유형코드",
					"과세구분코드",
					"수주기능여부",
					"발주가능여부",
					"직송여부",
					"박스상품여부",
					"직송시작일자",
					"직송종료일자",
					"직송기준수량",
					"생산년도관리여부",
					"발주금지사유코드",
					"수주금지사유코드",
					"최종변경일시",
					"최종변경자",
					"삭제일시",
					"박스당입수"
			};
			String[] keyIndex = {
					"NA_BZPLC",
					"CLNTNM",
					"NA_WRS_C",
					"NA_TEAM_C",
					"TEAM_NM",
					"WRSNM",
					"WRS_ABR_NM",
					"BYNG_UPR",
					"MIN_ODR_QT",
					"MAX_ODR_QT",
					"VCBT_NA_WRS_C",
					"VCBT_UPR",
					"SPYPL_NA_TRPL_C",
					"SPYPL_NA_TRPL_NM",
					"SPYPL_NA_TEAM_C",
					"SPYPL_NA_TEAM_NM",
					"MNGT_NA_TRPL_C",
					"MNGT_NA_TRPL_NM",
					"MNGT_NA_TEAM_C",
					"MNGT_NA_TEAM_NM",
					"CTR_TPC_NM",
					"TXT_DSC_NM",
					"RVO_PSB_YN",
					"ODR_PSB_YN",
					"DDLY_YN",
					"BOX_WRS_YN",
					"DDLY_ST_DT",
					"DDLY_ED_DT",
					"DDLY_BAS_QT",
					"PD_YY_AMN_YN",
					"NA_ODR_FBID_RSNC_NM",
					"NA_RVO_FBID_RSNC_NM",
					"LSCHG_DTM",
					"LS_CMENO",
					"DEL_DTM",
					"BOXPE_AQZ"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.downloadExcelPricatDetails(sto_code,datesel,bzplc_code,bzplc_team,fromdate,todate,ctr_tpc,TRPL_C_ARR, limitInt, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "상품상세조회");
			searchMap.put("상품코드", sto_code);
			searchMap.put("수요처코드", bzplc_code);
			searchMap.put("수요처팀코드", bzplc_code);
			searchMap.put("일자구분코드", datesel);
			searchMap.put("시작일", fromdate);
			searchMap.put("종료일", todate);
			searchMap.put("계약유형", ctr_tpc);
			searchMap.put("거래처코드", TRPL_C);
			handler.createSearchSheet(searchMap);
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 분류코드에 따른 2차 상품 상세정보 
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/Product/retrieveCLCGoods")
	public void retrieveCLCGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			PlatformData out_PlatformData = new PlatformData();
			String clc_gubun = requestHelper.getParameter("clc_gubun");
			String wrs_dsc = requestHelper.getParameter("wrs_dsc");
			String wrs_dsc2 = requestHelper.getParameter("wrs_dsc2");
			String wrs_dsc3 = requestHelper.getParameter("wrs_dsc3");
			String wrs_dsc4 = requestHelper.getParameter("wrs_dsc4");
			
			List<Map<String,Object>> reslit = new ArrayList<Map<String,Object>>();
			
			DataSetHelper dHelper = new DataSetHelper("ds_wrs_dsc");
			DataSetHelper dHelper2 = new DataSetHelper("ds_wrs_dsc2");
			DataSetHelper dHelper3 = new DataSetHelper("ds_wrs_dsc3");
			DataSetHelper dHelper4 = new DataSetHelper("ds_wrs_dsc4");
			
			//단위
			if(wrs_dsc.equals("01")){
				reslit = productSev.retrieveCLCGoods(clc_gubun,wrs_dsc);
				dHelper.addColumns(ProductAttrVO.class);
				for(Map<String,Object> map:reslit){
					dHelper.setData(map);
				}
			}
			//포장
			if(wrs_dsc2.equals("02")){
				reslit = productSev.retrieveCLCGoods(clc_gubun,wrs_dsc2);
				dHelper2.addColumns(ProductAttrVO.class);
				for(Map<String,Object> map:reslit){
					dHelper2.setData(map);
				}
			}
			//보관방식
			if(wrs_dsc3.equals("09")){
				reslit = productSev.retrieveCLCGoods(clc_gubun,wrs_dsc3);
				dHelper3.addColumns(ProductAttrVO.class);
				for(Map<String,Object> map:reslit){
					dHelper3.setData(map);
				}
			}
			//용도
			if(wrs_dsc4.equals("11")){
				reslit = productSev.retrieveCLCGoods(clc_gubun,wrs_dsc4);
				dHelper4.addColumns(ProductAttrVO.class);
				for(Map<String,Object> map:reslit){
					dHelper4.setData(map);
				}
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			out_PlatformData.addDataSet(dHelper2.getDataSet());
			out_PlatformData.addDataSet(dHelper3.getDataSet());
			out_PlatformData.addDataSet(dHelper4.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 등록 조회
	 */
	/*
	
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/Product/retrieveNewGoods")
	public void retrieveNewGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String separator = requestHelper.getParameter("separator");
			String VAN_C_NO = requestHelper.getParameter("VAN_C");
			String NA_WRS_C = requestHelper.getParameter("NA_WRS_C");
			DataSetHelper dHelper = new DataSetHelper("ds_wrs_rg_req");
			DataSetHelper dHelper2 = new DataSetHelper("ds_input_data");
			DataSetHelper dHelper3 = new DataSetHelper("ds_uploadsave");
			DataSetHelper dHelper4 = new DataSetHelper("ds_input_add_data");
			
			List<ProductVO> list = new ArrayList<ProductVO>();
			List<ProductReqVO> list1 = new ArrayList<ProductReqVO>();
			List<ProductReqPrgrVO> list2 = new ArrayList<ProductReqPrgrVO>();
			List<Map<String,Object>> list3 = new ArrayList<Map<String,Object>>();
			List<Map<String,Object>> list4 = new ArrayList<Map<String,Object>>();
			PlatformData out_PlatformData = new PlatformData();

			//신규상품 요청등록 조회 (상품코드 유무 조회)
			if(separator.equals("0")){
				String wrs_c = requestHelper.getParameter("wrs_c");
				int rewrs = productSev.wrsCheck(wrs_c);
				sendData(response, out_PlatformData, rewrs, "SUCCESS");
			}
			
			//기본상품 조회
			if(separator.equals("1")){
				list = productSev.selectGD(NA_WRS_C);
				dHelper.addColumns(ProductVO.class);
				for(ProductVO gdlist : list){
					dHelper.setData(gdlist);
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
				sendData(response, out_PlatformData, 1, "completeSearch");
			//상품등록신청내역 조회
			}
			if(separator.equals("2")){
				list1 = productSev.selectREQ(VAN_C_NO);
				list2 = productSev.selectGridREQ(VAN_C_NO);
				list3 = productSev.selectfileREQ(VAN_C_NO);
				list4 = productSev.selectAddREQ(VAN_C_NO);
				
				dHelper.addColumns(ProductReqVO.class);
				for(ProductReqVO reqlist : list1){
					dHelper.setData(reqlist);
				}
				
				dHelper2.addColumns(ProductReqPrgrVO.class);
				for(ProductReqPrgrVO reqlist2 : list2){
					dHelper2.setData(reqlist2);
				}
				
				dHelper3.addColumns(ProductReqFile.class);
				for(Map<String,Object> vo:list3){
					dHelper3.setData(vo);
				}
				dHelper4.addColumns(ProductReqPrgrVO.class);
				for(Map<String,Object> vo:list4){
					dHelper4.setData(vo);
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
				out_PlatformData.addDataSet(dHelper2.getDataSet());
				out_PlatformData.addDataSet(dHelper3.getDataSet());
				out_PlatformData.addDataSet(dHelper4.getDataSet());
				sendData(response, out_PlatformData, 1, "completeSearch");
			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	*/
	
	/*
	 * 화면ID : VAN_DS_SC_1540
	 * 화면설명 : 신규상품 요청등록 입력,수정
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/Product/insertNewGoods")
	public void insertNewGoods(HttpServletRequest request,HttpServletResponse response) throws IOException{
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String orgpr = requestHelper.getParameter("orgpr");
			String rdo_sep = requestHelper.getParameter("rdo_sep");
			String temp_yn = requestHelper.getParameter("chk_temp_yn");
			String del_yn = requestHelper.getParameter("chk_del_yn"); 
			String userId = requestHelper.getUserID();
			String[] orgrs = orgpr.split("/");
			String orgrname = "";
			
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMain = in_dsList.get("in_mainds");		// 상품정보 및 2차상품 데이터
			DataSet in_upload = in_dsList.get("in_upload");		// 이미지파일데이터
			DataSet dsInput = in_dsList.get("in_ds");			// 입력정보 데이터
			DataSet dsInput_wrs = in_dsList.get("in_ds_wrs");	// 추가정보 데이터
			
			PlatformData out_PlatformData = new PlatformData();
			List<ProductReqVO> mainlist = ValueObjectSetUtil.dataSetToVO(dsMain, ProductReqVO.class);
			List<ProductReqPrgrVO> inputlist = ValueObjectSetUtil.dataSetToVO(dsInput, ProductReqPrgrVO.class);
			List<ProductReqFile> filelist = ValueObjectSetUtil.dataSetToVO(in_upload, ProductReqFile.class);
			List<ProductReqPrgrVO> addlist = ValueObjectSetUtil.dataSetToVO(dsInput_wrs, ProductReqPrgrVO.class);

			//검색조건, 상품공통정보, 2차상품 상세정보 INSERT,UPDATE
//			String VAN_C_RQ_NO = mainlist.get(0).getVAN_C_RQ_NO();	// VAN상품요청번호
//			if((VAN_C_RQ_NO == null) || (rdo_sep.equals("1"))){
//				VAN_C_RQ_NO = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_GD_WRS_RG_REQ);
//				mainlist.get(0).setVAN_C_RQ_NO(VAN_C_RQ_NO);
//			}
			String VAN_C_RQ_NO = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_GD_WRS_RG_REQ);
			mainlist.get(0).setVAN_C_RQ_NO(VAN_C_RQ_NO);
			
			mainlist.get(0).setFSRGMN_ENO(userId);
			String RQ_NA_WRS_C = mainlist.get(0).getRQ_NA_WRS_C();	// 신청상품코드
			mainlist.get(0).setNA_WRS_C(RQ_NA_WRS_C);	// 상품코드
			
			// 그리드 입력정보 추가,수정
			productSev.inputREQ(dsInput,dsInput_wrs,orgrs,inputlist,addlist,VAN_C_RQ_NO,RQ_NA_WRS_C,orgrname);

			//파일 저장
			productSev.fileReq(VAN_C_RQ_NO,in_upload,filelist);
			
			//신규상품 요청등록 추가,변경 추가
			productSev.req(mainlist.get(0),inputlist.get(0),dsInput_wrs,addlist,rdo_sep,temp_yn,del_yn);
			
			//저장 프로세스 동기화 메시지 체크
			if("1".equals(temp_yn)) {
				sendData(response, out_PlatformData);
			} else {
				try {
					boolean checked =sentCheckService.WRSREQCheckSendState(VAN_C_RQ_NO);
					if(checked)
						sendData(response, out_PlatformData);
				} catch (NHSentErrorException e) {
					String eb = e.getMessage();
					sendData(response, out_PlatformData, -999, eb);
				}
			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1541
	 * 화면설명 : 신규상품등록 (신규요청검색)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/Product/retrieveNewGoodsPopUp")
	public void retrieveNewGoodsPopUp(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String NA_WRS_RADIO = requestHelper.getParameter("NA_WRS_RADIO");
			String start_date = requestHelper.getParameter("start_date");
			String end_date = requestHelper.getParameter("end_date");
			String na_wrs_c = requestHelper.getParameter("NA_WRS_C");
			String gubun = requestHelper.getParameter("GUBUN");
			String userCode = requestHelper.getGlnCode();
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(userCode, requestHelper);
			
			DataSetHelper dHelper = new DataSetHelper("ds_main_req");
			PlatformData out_PlatformData = new PlatformData();
			
			List<Map<String,Object>> relist = productSev.newGoodsPopUp(NA_WRS_RADIO,start_date,end_date,na_wrs_c,TRPL_C_ARR,gubun);
			
			dHelper.addColumns(ProductReqVO.class);
			for(Map<String,Object> map : relist){
				dHelper.setData(map);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData, 1, "completeSearch");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1542
	 * 화면설명 : 신규상품 요청등록 거래처 조회 (팝업)
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/retrieveNewGoodsTrplPopUp")
	public void retrieveNewGoodsTrplPopUp(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String combo_trpl = requestHelper.getParameter("combo_trpl");
			String edt_trpl = requestHelper.getParameter("edt_trpl");
			
			DataSetHelper dHelper = new DataSetHelper("ds_cif");
			PlatformData out_PlatformData = new PlatformData();
			
			List<Map<String,Object>> relist = productSev.newGoodsTrplPopUp(combo_trpl,edt_trpl);
			
			dHelper.addColumns(CompanyVO.class);
			for(Map<String,Object> map:relist){
				dHelper.setData(map);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1550
	 * 화면설명 : 신규상품요청 일괄작성 저장
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/Product/insertBatchNewGoods")
	public void retrieveUploadBatchNewGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			DataSet tempds = requestHelper.getDataSet("in_ds");
			String insdata = requestHelper.getParameter("insdata");
			String glncode = requestHelper.getGlnCode();
			
			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet ds_excel = in_dsList.get("in_ds");
			List<ProductReqVO> dslist = ValueObjectSetUtil.dataSetToVO(ds_excel, ProductReqVO.class);
			
			PlatformData out_PlatformData = new PlatformData();
			
			List<ProductTempFileVO> list = ValueObjectSetUtil.dataSetToVO(tempds, ProductTempFileVO.class);
			
			//데이터 row 개수가 100 이하일 때
			if(dslist.size() < 101){
				// insdata => 조건을 만족한 row index
				if(insdata != null){
					String[] arrData = insdata.split(",");
					String temp_seq = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_GD_WRS_RG_REQ_TEMP);
					productSev.insertUploadBatchNewGoods(list,temp_seq,arrData,glncode);
				}
				sendData(response, out_PlatformData,1,"result.message.save.success");
			}else{
				sendData(response, new PlatformData(), -1, "OVERROWCOUNT");
			}
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1550
	 * 화면설명 : 신규상품요청 일괄작성(EXCEL)_FileUpload
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/Product/downloadBatchNewGoods")
	public void retrieveExcelRead(HttpServletRequest request,HttpServletResponse response) throws IOException{
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String dsName = requestHelper.getParameter("dsName");
			String systemFileName = requestHelper.getParameter("systemFileName");
			DataSet tempds = requestHelper.getDataSet("in_ds");
			
			File tempfile = new File(Configurer.getProperty("file.temp.path"));
			String filepath = tempfile.getAbsolutePath()+"/"+systemFileName;
			
			FileInputStream fis=new FileInputStream(filepath);
			HSSFWorkbook workbook = new HSSFWorkbook(fis);
			HSSFSheet sheet = workbook.getSheetAt(0);
			//파일을 카피하여 real 에 복사
			File file = new File(filepath);
			File realfile = new File(Configurer.getProperty("file.real.wrs.path"));
			File copyfile = new File(realfile.getAbsolutePath()+"/"+systemFileName);
			FileCopyUtils.copy(file, copyfile);
			
			//엑셀 파일을 불러와서 그리드에 보내줌
			PlatformData out_PlatformData = new PlatformData();
			int rows=sheet.getPhysicalNumberOfRows();
			if(rows > 100){
				sendData(response, new PlatformData(), -1, "OVERROWCOUNT");
				return;
			}
			List<ProductTempFileVO> list = new ArrayList<ProductTempFileVO>();
			DataSetHelper dHelper = new DataSetHelper(dsName);
			
			dHelper.addColumns(ProductTempFileVO.class);
			
			for(int rowindex=0; rowindex<rows; rowindex++){
				ProductTempFileVO tempvo = new ProductTempFileVO();
				//행을 읽는다.
				HSSFRow row = sheet.getRow(rowindex);
				if(row !=null){
					//열을 가져온다.
					for(int columnindex=0;columnindex<51;columnindex++){
						HSSFCell cell=row.getCell(columnindex+1);
						String sval = "";
						double dval = 0.0;
						//셀이 반값일경우를 위한 널체크
						if(cell==null || cell.toString() == ""){
							sval = "";
						}else{
							if(cell.getCellType() == HSSFCell.CELL_TYPE_STRING){
								sval=cell.getStringCellValue();
							}else{
								dval=cell.getNumericCellValue();
								sval = String.valueOf((int)Math.round(dval));
							}
						}
						if(columnindex < 50){
							String callName = "set"+tempds.getColumn(columnindex).getName();
							ValueObjectSetUtil.callSetMethod(tempvo, callName,  new Object[]{sval});
						}
					}
					list.add(tempvo);
				}
			}
			for(ProductTempFileVO vo : list){
				dHelper.setData(vo);
			}
			out_PlatformData.addDataSet(dHelper.getDataSet());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/Product/retrieveReturnNewGoods")
	public void retrieveSearchNewGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String store_code = requestHelper.getParameter("store_edt");		// 상품코드 조회(input)
			String store_radio = requestHelper.getParameter("store_radio");		// 상품코드 조회(input)
			String center_code = requestHelper.getParameter("center_code");		// 물류센터코드
			String start_day = requestHelper.getParameter("start_day");			// 적용일자 시작
			String end_day = requestHelper.getParameter("end_day");				// 적용일자 끝
			String kindval = requestHelper.getParameter("kindval");				// 그리드 데이터 구분
			String gubun = requestHelper.getParameter("gubun");					// 참조구분
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_main_req");
			DataSetHelper dHelper2 = new DataSetHelper("ds_sub_req");
			if(kindval.equals("1")){
				//페이징
				int totalRowCount = productSev.selectNewGoodsCount(store_code,store_radio,center_code,start_day,end_day,TRPL_C_ARR,gubun);
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int end = pageHelper.getEnd();
				
				List<ProductReqVO> masterNewGood = productSev.selectNewGoods(store_code,store_radio,center_code,start_day,end_day,TRPL_C_ARR,gubun,start,end);
				dHelper.addColumns(ProductReqVO.class);
				for(ProductReqVO newvo : masterNewGood){
					dHelper.setData(newvo);
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			}else if(kindval.equals("2")){
				String VAN_C = requestHelper.getParameter("VAN_C");				// VAN상품요청번호
				String RQ_TRPL = requestHelper.getParameter("RQ_TRPL");			// 상품신청코드
				List<ProductSearchVO> detailNewGood = productSev.selectDetailNewGoods(VAN_C,RQ_TRPL,gubun);
				dHelper2.addColumns(ProductReqVO.class);
				
				for(ProductSearchVO detailvo : detailNewGood){
					dHelper2.setData(detailvo);
				}
				out_PlatformData.addDataSet(dHelper2.getDataSet());
			}
			sendData(response, out_PlatformData, 1, "success.data.newgoods");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회 (마스터 그리드 엑셀)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelMasterSearchNewGoods")
	public void downloadExcelMasterSearchNewGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String store_code = requestHelper.getParameter("store_edt");		// 상품코드 조회(input)
			String store_radio = requestHelper.getParameter("store_radio");		// 상품코드 조회구분
			String center_code = requestHelper.getParameter("center_code");		// 물류센터코드
			String start_day = requestHelper.getParameter("start_day");			// 적용일자 시작
			String end_day = requestHelper.getParameter("end_day");				// 적용일자 끝
			String gubun = requestHelper.getParameter("gubun");				// 적용일자 끝
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
			
			String fileName = "신규상품요청내역.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"코드신청번호",
					"코드신청상태코드",
					"코드신청대상구분코드",
					"연락처전화번호",
					"접수일시",
					"접수자 개인번호",
					"접수자 사업장코드",
					"처리일시",
					"처리자개인번호",
					"승인/거잘자명",
					"신청거절사유코드",
					"신청내용",
					"처리내용",
					"승인신청 사업장코드",
					"삭제여부",
					"최초등록일시",
					"최초등록자 개인번호",
					"최초등록자 사업장코드",
					"최종변경일시", //20
					"최종변경자 개인번호",
					"최종변경자 사업장코드",
					"자체상품 신청사유코드",
					"바이어접수일시",
					"바이어 접수자 개인번호",
					"바이어 접수자 사업장코드",
					"바이어 처리일시",
					"바이어 처리자 개인번호",
					"바이어 처리자 사업장 코드",
					"개당 납품단가",
					"박스당 납품단가",
					"매출액당 수수료율",
					"판촉지원 인원수",
					"상품취급 경쟁점수",
					"추정매출 기여금",
					"대체삭제 상품코드",
					"계통상품 확인여부",
					"납품거래처명",
					"납품거래처 전화번호" //38
			};
			String[] keyIndex = {
					"NA_C_RQ_NO",
					"NA_C_RQ_STSC",
					"NA_C_RQ_OBJ_DSC_NM",
					"CTCPL_TELNO",
					"CNF_DMT",
					"FSRGMN_ENO",
					"FSRGMN_NA_BZPLC",
					"CNF_DMT",
					"CNF_ENO",
					"CNF_NAME",
					"NA_C_RQ_REJ_RSNC",
					"RQ_CNTN",
					"", //처리내용
					"APV_RQ_NA_BZPLC",
					"DEL_YN",
					"FSRG_DTM",
					"FSRGMN_ENO",
					"FSRGMN_NA_BZPLC",
					"LSCHG_DTM",
					"LS_CMENO",
					"LSCGMN_NA_BZPLC",
					"",	//자체상품 신청사유코드
					"",	//바이어접수일시
					"", //바이어 접수자 개인번호
					"", //바이어 접수자 사업장코드
					"", //바이어 처리일시
					"", //바이어 처리자 개인번호
					"", //바이어 처리자 사업장코드
					"", //개당납품단가
					"BOXPE_DLVG_UPR", 	//
					"SLAM_PER_FEERT", 	//
					"PMTN_SPT_PERS", 	//
					"WRS_TRT_CMBR_CN", 	//
					"ASP_SL_CNAM", 		//
					"", //대체삭제 상품코드
					"", //계통상품 확인여부
					"", //납품거래처명
					""  //납품거래처 전화번호
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.excelNewGoods(store_code,store_radio,center_code,start_day,end_day,TRPL_C_ARR,gubun,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "신규상품요청내역");
			searchMap.put("상품코드", store_code);
			searchMap.put("상품코드 조회구분", store_radio);
			searchMap.put("물류센터코드", center_code);
			searchMap.put("적용일자 시작", start_day);
			searchMap.put("적용일자 종료", end_day);
			searchMap.put("거래처코드", TRPL_C);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1560
	 * 화면설명 : 신규상품요청 내역조회 (디테일 그리드 엑셀)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelDetailSearchNewGoods")
	public void downloadExcelDetailSearchNewGoods(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String gubun = requestHelper.getParameter("gubun");					// 참조구분
			String VAN_C = requestHelper.getParameter("VAN_C");					// VAN상품요청번호
			String RQ_TRPL = requestHelper.getParameter("RQ_TRPL");
			String fileName = "신규상품요청내역_상세.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"코드신청번호",
					"상품코드",
					"상품코드구분코드",
					"상품구분코드",
					"상품명",
					"상품약어명",
					"상품영문명",
					"상품유형코드",
					"상품대분류코드",
					"상품중분류코드",
					"상품소분류코드",
					"상품세분류코드",
					"상품규격명",
					"과세구분코드",
					"영세적용유형코드",
					"주류여부",
					"공동상품여부",
					"제조거래처코드",
					"단량",
					"상품단위코드",
					"상품포장코드",
					"상품크기성별코드",
					"상품품질등급코드",
					"상품브랜드코드",
					"상품친환경구분코드",
					"GAP인증여부",
					"상품농협품질인증코드",
					"상품보관방식코드",
					"상품유통상태코드",
					"상품용도코드",
					"상품수입구분코드",
					"상품산지코드",
					"유효기간수",
					"유효기간구분코드",
					"농약품목명",
					"농약성분량",
					"비료인산성분비",
					"비료질소성분비",
					"비료칼륨성분비",
					"농기계부품분류구분코드",
					"본체여부",
					"일반융자한도금액",
					"공동융자한도금액",
					"상품규격단위코드",
					"상품높이",
					"상품세로길이",
					"상품가로길이",
					"상품비중률",
					"상품외쌍겹구분코드",
					"상품유공개수",
					"자재규격두께",
					"원형상품규격지름수",
					"원형상품규격깊이수",
					"공병상품코드",
					"공병수량",
					"공상자상품코드",
					"사료생산방식코드",
					"찾기번호내용",
					"환산수량",
					"환산상품단위코드",
					"상품상세설명",
					"기본단위구분코드",
					"박스당입수",
					"상품파일개수",
					"코리안넷상품번호",
					"RFID사용여부",
					"거래중지여부",
					"거래중지사유코드",
					"농기계형식명"
			};
			String[] keyIndex = {
					"NA_C_RQ_NO",
					"RQ_NA_WRS_C",
					"WRS_C_DSC",
					"WRS_DSC",
					"WRSNM",
					"WRS_ABR_NM",
					"WRS_ENM",
					"WRS_TPC",
					"NA_WRS_LCLC",
					"NA_WRS_MCLC",
					"NA_WRS_SCLC",
					"NA_WRS_DTCF_C",
					"WRS_STDNM",
					"TXT_DSC",
					"SMA_APL_TPC",
					"LIQ_YN",
					"COMM_WRS_YN",
					"MFT_NA_TRPL_C",
					"WHT",
					"NA_WRS_UNT_C",
					"NA_WRS_PAK_C",
					"NA_WRS_SZE_SEX_C",
					"NA_WRS_QLT_GRDC",
					"NA_WRS_BRAN_C",
					"NA_WRS_PROENV_DSC",
					"GAP_ATTC_YN",
					"NA_WRS_NACF_QLT_ATTC_C",
					"NA_WRS_CSTD_METC",
					"NA_WRS_DSTR_STSC",
					"NA_WRS_UZC",
					"NA_WRS_IPO_DSC",
					"NA_WRS_PDAA_C",
					"VLD_PRD_CN",
					"VLD_PRD_DSC",
					"",		//농약품목명
					"",		//농약성분량
					"",		//비료인산성분비
					"",		//비료질소성분비
					"", 	//비료칼륨성분비
					"", 	//농기계부품분류구분코드
					"",		//본체여부
					"",		//일반융자한도금액
					"",		//공동융자한도금액
					"NA_WRS_STD_UNT_C",
					"WRS_HGHT",
					"WRS_LEN_LEN",
					"WRS_WDTH_LEN",
					"WRS_SGRT",
					"WRS_SDL_DSC",
					"WRS_AHL_CN",
					"MTRL_STD_THKN",
					"CICL_WRS_STD_DMTR_CN",
					"CICL_WRS_STD_DPTH_CN",
					"VCBT_NA_WRS_C",
					"VCBT_QT",
					"VCBX_NA_WRS_C",
					"",		//사료생산방식코드
					"",		//찾기번호내용
					"CVS_QT", //60
					"CVS_NA_WRS_UNT_C",
					"WRS_DTL_EXPL",
					"BSC_UNT_DSC",
					"BOXPE_AQZ",
					"WRS_FL_CN",
					"KNET_WRS_NO",
					"RFID_UYN",
					"TR_STOP_YN",
					"TR_STOP_RSNC",
					"FOMNM"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.excelDetailNewGoods(VAN_C,RQ_TRPL,gubun,handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "신규상품요청내역_상세");
			searchMap.put("상품요청번호", VAN_C);
			searchMap.put("신청상품코드", RQ_TRPL);
			searchMap.put("참조구분", gubun);
			
			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1510
	 * 화면설명 : 상품상세조회
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/retrieveGoodWhList")
	public void retrieveGoodWhList(HttpServletRequest request,HttpServletResponse response){
		try{
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String NA_BZPLC     = requestHelper.getParameter("na_bzplc"); 	          // 검색 사업장코드
			String NA_WRS_C     = requestHelper.getParameter("wrs_c"); 	              // 상품코드
			String WRSNM        = requestHelper.getParameter("wrsnm"); 		          // 상품명
			String TRPL_C       = requestHelper.getParameter("trpl_c"); 			  // 공급업체코드
			String ATL_YN       = requestHelper.getParameter("atl_yn"); 			  // 간선여부
			  
			String BOX_WRS_C_YN = requestHelper.getParameter("box_wrs_c_yn"); 	  // 박스상품코드여부
			String SVS_YN       = requestHelper.getParameter("svs_yn"); 		  // 소분여부
			String DEL_YN       = requestHelper.getParameter("del_yn"); 		  // 삭제여부
			
			
			
			
			DataSetHelper dsHelper = new DataSetHelper("ds_good_wh");
			
			//페이징
			
			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>>  selectList = productSev.selectGoodWhList( NA_BZPLC, NA_WRS_C, WRSNM, TRPL_C, ATL_YN, BOX_WRS_C_YN, SVS_YN, DEL_YN);
			
			if (selectList.size() > 0) {
				dsHelper.addColumns(selectList.get(0).keySet());
				for (Map<String, Object> vo : selectList) {
					dsHelper.setData(vo);
				}
			}
			out_PlatformData.addDataSet(dsHelper.getDataSet());
			//out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 상품별물류기능정보 엑셀다운로드 
	 */

	@RequestMapping(method = {org.springframework.web.bind.annotation.RequestMethod.POST}, value = {"/rest/excel/downloadExcelGoodWhList"})
	public void downloadExcelGoodWhList(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper
					.newInstance(request);

			String NA_BZPLC = requestHelper.getParameter("na_bzplc");
			String NA_WRS_C = requestHelper.getParameter("wrs_c");
			String WRSNM = requestHelper.getParameter("wrsnm");
			String TRPL_C = requestHelper.getParameter("trpl_c");
			String ATL_YN = requestHelper.getParameter("atl_yn");
			String BOX_WRS_C_YN = requestHelper.getParameter("box_wrs_c_yn"); 	  // 박스상품코드여부
			String SVS_YN = requestHelper.getParameter("svs_yn"); 			      // 소분여부
			String DEL_YN = requestHelper.getParameter("del_yn"); 			      // 소분여부
			
			DataSetHelper dsHelper = new DataSetHelper("ds_good_wh");

			String fileName = "상품별물류기능정보.xls";

			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					this.logger.info(e.getMessage());
				}

			}

			PlatformData out_PlatformData = new PlatformData();
			List<Map<String,Object>> selectList = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			

			String[] header = {"사업장코드", "사업장명", "상품코드", "상품명", "공급업체코드",
					"공급업체명", "간선여부", "물류기능코드", "소터처리여부", "박스당입수", "박스상품코드여부", "소분여부", "소분수량", "삭제일시"};

			String[] keyIndex = {"NA_BZPLC", "NA_BZPLC_NM", "NA_WRS_C",
					"WRSNM", "NA_SPYPL_C", "NA_SPYPL_C_NM", "ATL_YN",
					"PHD_FCLT_C", "SRTR_PRC_YN", "BOXPE_AQZQT",
					"BOX_WRS_C_YN", "SVS_YN", "SVS_QT", "DEL_DT"
					
			};

			AbstractModel model = new DefaultModel("마스터", header, keyIndex,
					selectList);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			this.productSev.downloadExcelGoodWhList(NA_BZPLC, NA_WRS_C, WRSNM, TRPL_C, ATL_YN, BOX_WRS_C_YN, SVS_YN, DEL_YN, handler);
			
			Map searchMap = new LinkedHashMap();

			searchMap.put("출력화면", "상품기준정보조회");
			searchMap.put("상품코드", NA_BZPLC);
			searchMap.put("상품코드구분코드", NA_WRS_C);
			searchMap.put("경제통합상품대분류코드", WRSNM);
			searchMap.put("경제통합상품중분류코드", TRPL_C);
			searchMap.put("경제통합상품소분류코드", ATL_YN);
			searchMap.put("경제통합상품삭제여부", DEL_YN);
			

			handler.createSearchSheet(searchMap);

			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			this.logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록 (엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelTempOdTrtwrsInfo")
	public void downloadExcelTempOdTrtwrsInfo(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String NA_BZPLC = requestHelper.getGlnCode();
			
			String TRPL_C =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(TRPL_C,requestHelper);
			
			String fileName = "필수상품속성정보.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"No",
					"매입처코드(필수)",
					"매입처명칭(필수)",
					"판매상품코드(필수)",
					"낱개(sku)상품코드(필수)",
					"박스상품코드",
					"물류상품코드(14자리)",
					"상품명(필수)",
					"규격 및 모델",
					"내품수량",
					"박스당입수",
					"단위",
					"최소발주단위",
					"과세여부(면세/과세)",
					"보관방식(냉동/냉장/상온/실온)",
					"유통기한(일)",
					"완제품수입여부(여/부)",
					"배송구분(R1/R2/R1R2)",
					"권장판매가",
					"단위당단가(낱개기준) - 내용량",
					"단위당단가(낱개기준) - 표시기준단량",
					"단위당단가(낱개기준) - 기준단위",
					"담당MD명(필수)",
					"업태구분(소매/식자재)"
			};
			String[] keyIndex = {
					"RN",
					"SPYPL_NA_TRPL_C",
					"CLNTNM",
					"NA_WRS_C",
					"",
					"",
					"",
					"WRSNM",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					""
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.downloadExcelTempOdTrtwrsInfo(NA_BZPLC, handler);
			/*Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "필수상품속성정보등록");
			searchMap.put("사용자 GLN코드", NA_BZPLC);
			excelMaker.createSearchSheet(searchMap);*/
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록(EXCEL)_FileUpload
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/uploadTempOdTrtwrsInfoFile")
	public void uploadTempOdTrtwrsInfoFile(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper
				.newInstance(request);
		String NA_BZPLC = requestHelper.getGlnCode();
		String systemFileName = requestHelper.getParameter("systemFileName");
		
		File tempPath = new File(Configurer.getProperty("file.temp.path"));
		
		PlatformData platformData = new PlatformData();
		XSSFWorkbook workbook = null;
		try {

			if (StringUtils.isEmpty(systemFileName)) {
				throw new ValidationException("잘못된 첨부파일 오류, 첨부파일 이름이 없습니다.");
			}

			File shortageFile = FileUtils.getFile(tempPath, systemFileName);
			if (!shortageFile.exists()) {
				throw new ValidationException(
						"첨부파일이 서버에 Upload 되지 않았습니다.관리자에 확인바랍니다.");
			}

			FileInputStream fis = new FileInputStream(shortageFile);
			workbook = new XSSFWorkbook(fis);
			XSSFSheet sheet = workbook.getSheetAt(0);
			int rows = sheet.getPhysicalNumberOfRows();
			/*if (rows > 1000) {
				sendData(response, new PlatformData(), -1, "OVERROWCOUNT");
				return;
			}*/

			DataSetHelper dHelper = new DataSetHelper("ds_excel_bind");

			dHelper.addColumns(TempOdTrtwrsInfoUploadFileVO.class);
			
			String msg = "";
			
			for (int rowindex = 1; rowindex < rows; rowindex++) {

				XSSFRow row = sheet.getRow(rowindex);
				if (row != null) {
					/*if(getCellValue(row.getCell(1)).length() != 24) {
						continue;
					}*/
					
					TempOdTrtwrsInfoUploadFileVO tempvo = new TempOdTrtwrsInfoUploadFileVO();
					
					tempvo.setSPYPL_NA_TRPL_C(getCellValue(row.getCell( 1))); 		// 매입처코드 
					tempvo.setSPYPL_NA_TRPL_NM(getCellValue(row.getCell( 2))); 	// 매입처명칭
					tempvo.setNA_WRS_C(getCellValue(row.getCell( 3))); 				// 판매상품코드
					tempvo.setSTPL_NA_WRS_C(getCellValue(row.getCell( 4))); 		// 낱개(sku)상품코드
					tempvo.setBOX_WRS_C(getCellValue(row.getCell( 5))); 				// 박스상품코드
					tempvo.setPHD_WRS_C(getCellValue(row.getCell( 6))); 				// 물류상품코드
					tempvo.setWRSNM(getCellValue(row.getCell( 7))); 					// 판매상품명
					tempvo.setWRS_STDNM(getCellValue(row.getCell( 8))); 				// 규격 및 모델
					tempvo.setINPD_QT(getCellValue(row.getCell( 9))); 					// 내품수량
					tempvo.setBOXPE_AQZ(getCellValue(row.getCell( 10))); 				// 박스당입수
					tempvo.setNA_WRS_UNT_C(getCellValue(row.getCell(11))); 		// 단위
					tempvo.setMIN_ODR_UNT_C(getCellValue(row.getCell(12))); 		// 최소발주단위
					tempvo.setTXT_DSC(getCellValue(row.getCell(13))); 					// 과세여부
					tempvo.setNA_WRS_CSTD_METC(getCellValue(row.getCell(14))); // 보관방식
					tempvo.setVLD_PRD_CN(getCellValue(row.getCell(15))); 				// 유통기한(일)
					tempvo.setNA_WRS_IPO_DSC(getCellValue(row.getCell(16))); 		// 완제품수입여부
					tempvo.setDVY_DSC(getCellValue(row.getCell(17))); 					// 배송구분
					tempvo.setSL_UPR(getCellValue(row.getCell(18))); 					// 권장판매가
					tempvo.setUPR_01(getCellValue(row.getCell(19))); 					// 단위당단가(낱개기준)-내용량
					tempvo.setUPR_02(getCellValue(row.getCell(20))); 					// 단위당단가(낱개기준)-표시기준단량
					tempvo.setUPR_03(getCellValue(row.getCell(21))); 					// 단위당단가(낱개기준)-기준단위
					tempvo.setMD_NM(getCellValue(row.getCell(22))); 					// 담당MD명
					tempvo.setBZTPNM(getCellValue(row.getCell(23))); 					// 업태구분
					
					dHelper.setData(tempvo);
					
					if (tempvo.getSPYPL_NA_TRPL_C().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "매입처코드 Cell 값 [" + tempvo.getSPYPL_NA_TRPL_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getSPYPL_NA_TRPL_NM().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "매입처명칭 Cell 값 [" + tempvo.getSPYPL_NA_TRPL_NM().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getNA_WRS_C().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "판매상품코드 Cell 값 [" + tempvo.getNA_WRS_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getWRSNM().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "판매상품명 Cell 값 [" + tempvo.getWRSNM().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getSTPL_NA_WRS_C().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "낱개(sku)상품코드 Cell 값 [" + tempvo.getSTPL_NA_WRS_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getMD_NM().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "담당MD명 Cell 값 [" + tempvo.getMD_NM().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getNA_WRS_C().trim() != "" || tempvo.getSTPL_NA_WRS_C().trim() != "" || tempvo.getBOX_WRS_C().trim() != "" || tempvo.getPHD_WRS_C().trim() != "") {
						if(tempvo.getNA_WRS_C().trim().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "판매상품코드 Cell 값 [" + tempvo.getNA_WRS_C().trim() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						} else if(tempvo.getSTPL_NA_WRS_C().trim().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "낱개상품코드 Cell 값 [" + tempvo.getSTPL_NA_WRS_C().trim() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						} else if(tempvo.getBOX_WRS_C().trim().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "박스상품코드 Cell 값 [" + tempvo.getBOX_WRS_C().trim() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						} else if(tempvo.getPHD_WRS_C().trim().contains("E")){
							msg = "라인번호[" + rowindex + "] "+ "물류상품코드 Cell 값 [" + tempvo.getPHD_WRS_C().trim() + "] 은 지수형태이면 안됩니다.";
							sendData(response, platformData, -1, msg);
							return;
						}
					} 
					
				}
			}
			platformData.addDataSet(dHelper.getDataSet());
			logger.debug(platformData.saveXml());
			sendData(response, platformData);
		} catch (AppetizerException | IOException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록(EXCEL)_FileUpload_Save
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/pricat/saveTempOdTrtwrsInfoFile")
	public void saveTempOdTrtwrsInfoFile(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet inds = requestHelper.getDataSet("in_ds");
		
		PlatformData platformData = new PlatformData();
		
		try {
			String MBID = requestHelper.getUserID();
			String NA_BZPLC = requestHelper.getGlnCode();
			productSev.insertTempOdTrtwrsInfo(inds, MBID, NA_BZPLC);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, "필수상품속성정보 등록중에 오류가 발생하였습니다. 관리자에 문의하십시오.");
		}
	}
	
	/*
	 * VAN_DS_SC_1512
	 * 화면설명 : 필수상품속성정보등록
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/selectTempOdTrtwrs")
	public void selectTempOdTrtwrs(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String NA_BZPLC = requestHelper.getGlnCode();
			
			String TRPL_C =	requestHelper.getParameter("TRPL_C");//거래처코드
			String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(TRPL_C,requestHelper);
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_tempOdTrtwrs");

			List<Map<String,Object>> list = productSev.selectTempOdTrtwrsList(NA_BZPLC);
			
			dHelper.addColumns(TempOdTrtwrsInfoUploadFileVO.class);
			for(Map<String,Object> map : list){
				dHelper.setData(map);
			}
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * VAN_DS_SC_1513
	 * 화면설명 : 필수상품속성정보조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/pricat/Product/selectMDTempOdTrtwrsList")
	public void selectMDTempOdTrtwrsList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String na_trpl_c = requestHelper.getParameter("na_trpl_c");
		String md_nm = requestHelper.getParameter("md_nm");
		
		PlatformData platformData = new PlatformData();
		
		try {
			List<Map<String, Object>> taxList= productSev.selectMDTempOdTrtwrsList(na_trpl_c, md_nm);
			long naWrsCntSum = productSev.getNaWrsCntSum(na_trpl_c, md_nm);
			DataSetHelper dsHelper = new DataSetHelper("ds_product");
			if(dsHelper != null && taxList.size() > 0){
				dsHelper.addColumns(taxList.get(0).keySet());
				// 그리드 정렬을 위한 컬럼 속성 변경
				for(Map<String, Object> map : taxList) {
					dsHelper.setData(map);
				}
			}
			
			DataSet dsSum = new DataSet("ds_sum");
			dsSum.addColumn("SUM_NA_WRS_C_CNT", DataTypes.LONG);
			dsSum.newRow();
			dsSum.set(0, "SUM_NA_WRS_C_CNT", naWrsCntSum);
			
			platformData.addDataSet(dsSum);
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, platformData, -1, e.getMessage());
			
		} 
                
	}
	
	/*
	 * VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(엑셀다운로드)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadExcelMDMngTempOdTrtwrsList")
	public void downloadExcelMDMngTempOdTrtwrsList(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_trpl_c = requestHelper.getParameter("na_trpl_c");
			String md_nm = requestHelper.getParameter("md_nm");
			
			String fileName = "필수상품속성정보관리.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"No",
					"담당MD명(필수)",
					"매입처코드(필수)",
					"매입처명칭(필수)",
					"판매상품코드(필수)",
					"낱개(sku)상품코드(필수)",
					"박스상품코드",
					"물류상품코드(14자리)",
					"상품명(필수)",
					"규격 및 모델",
					"내품수량",
					"박스당입수",
					"단위",
					"최소발주단위",
					"과세여부(면세/과세)",
					"보관방식(냉동/냉장/상온/실온)",
					"유통기한(일)",
					"완제품수입여부(여/부)",
					"배송구분(R1/R2/R1R2)",
					"권장판매가",
					"단위당단가(낱개기준) - 내용량",
					"단위당단가(낱개기준) - 표시기준단량",
					"단위당단가(낱개기준) - 기준단위",
					"업태구분(소매/식자재)"
			};
			String[] keyIndex = {
					"RN",
					"MD_NM",
					"SPYPL_NA_TRPL_C",
					"SPYPL_NA_TRPL_NM",
					"NA_WRS_C",
					"STPL_NA_WRS_C",
					"BOX_WRS_C",
					"PHD_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"INPD_QT",
					"BOXPE_AQZ",
					"NA_WRS_UNT_C",
					"MIN_ODR_UNT_C",
					"TXT_DSC",
					"NA_WRS_CSTD_METC",
					"VLD_PRD_CN",
					"NA_WRS_IPO_DSC",
					"DVY_DSC",
					"SL_UPR",
					"UPR_01",
					"UPR_02",
					"UPR_03",
					"BZTPNM"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.downloadExcelMDMngTempOdTrtwrsList(na_trpl_c, md_nm, handler);
			
			/*Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "필수상품속성정보등록");
			searchMap.put("사용자 GLN코드", NA_BZPLC);
			excelMaker.createSearchSheet(searchMap);*/
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(엑셀다운로드-경통취급상품등록)
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/excel/downloadTransferExcelMDMngTempOdTrtwrsList")
	public void downloadTransferExcelMDMngTempOdTrtwrsList(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_trpl_c = requestHelper.getParameter("na_trpl_c");
			String md_nm = requestHelper.getParameter("md_nm");
			
			String fileName = "경통취급상품등록.xls";
			if(StringUtils.isNotEmpty(fileName)) {
				try {
					fileName  = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {
					"판매상품코드",
					"낱개(sku)상품코드",
					"박스상품코드",
					"물류상품코드",
					"상품명",
					"규격 및 모델",
					"단위",
					"최소발주단위",
					"내품수량",
					"박스당입수",
					"매입처코드",
					"과세여부(면세/과세)",
					"보관방식(냉동/냉장/상온/실온)",
					"유통기한(일)",
					"완제품수입여부(여/부)",
					"배송구분(R1/R2/R1R2)",
					"권장판매가",
					"단위당단가(낱개기준) - 내용량",
					"단위당단가(낱개기준) - 표시기준단량",
					"단위당단가(낱개기준) - 기준단위",
					"업태구분(소매/식자재)"
			};
			String[] keyIndex = {
					"NA_WRS_C",
					"STPL_NA_WRS_C",
					"BOX_WRS_C",
					"PHD_WRS_C",
					"WRSNM",
					"WRS_STDNM",
					"NA_WRS_UNT_C",
					"MIN_ODR_UNT_C",
					"INPD_QT",
					"BOXPE_AQZ",
					"SPYPL_NA_TRPL_C",
					"TXT_DSC",
					"NA_WRS_CSTD_METC",
					"VLD_PRD_CN",
					"NA_WRS_IPO_DSC",
					"DVY_DSC",
					"SL_UPR",
					"UPR_01",
					"UPR_02",
					"UPR_03",
					"BZTPNM"
			};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.downloadExcelMDMngTempOdTrtwrsList(na_trpl_c, md_nm, handler);
			/*Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "필수상품속성정보등록");
			searchMap.put("사용자 GLN코드", NA_BZPLC);
			excelMaker.createSearchSheet(searchMap);*/
			
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}
	
	/*
	 * VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리
	 */
	@RequestMapping(method=RequestMethod.POST, value="/rest/pds/pricat/Product/selectMDMngTempOdTrtwrsList")
	public void selectMDMngTempOdTrtwrsList(HttpServletRequest request,HttpServletResponse response){
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			
			String na_trpl_c = requestHelper.getParameter("na_trpl_c");
			String md_nm = requestHelper.getParameter("md_nm");
			
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_tempOdTrtwrs");

			List<Map<String,Object>> list = productSev.selectMDMngTempOdTrtwrsList(na_trpl_c, md_nm);
			
			dHelper.addColumns(TempOdTrtwrsInfoUploadFileVO.class);
			for(Map<String,Object> map : list){
				dHelper.setData(map);
			}
			
			out_PlatformData.addDataSet(dHelper.getDataSet());
			
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(EXCEL)_FileUpload
	 */
	@RequestMapping(method=RequestMethod.POST,value="/rest/pds/pricat/uploadMDMngTempOdTrtwrsInfoFile")
	public void uploadMDMngTempOdTrtwrsInfoFile(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper
				.newInstance(request);
		String NA_BZPLC = requestHelper.getGlnCode();
		String systemFileName = requestHelper.getParameter("systemFileName");
		
		File tempPath = new File(Configurer.getProperty("file.temp.path"));
		
		PlatformData platformData = new PlatformData();
		XSSFWorkbook workbook = null;
		try {

			if (StringUtils.isEmpty(systemFileName)) {
				throw new ValidationException("잘못된 첨부파일 오류, 첨부파일 이름이 없습니다.");
			}

			File shortageFile = FileUtils.getFile(tempPath, systemFileName);
			if (!shortageFile.exists()) {
				throw new ValidationException(
						"첨부파일이 서버에 Upload 되지 않았습니다.관리자에 확인바랍니다.");
			}

			FileInputStream fis = new FileInputStream(shortageFile);
			workbook = new XSSFWorkbook(fis);
			XSSFSheet sheet = workbook.getSheetAt(0);
			int rows = sheet.getPhysicalNumberOfRows();
			/*if (rows > 1000) {
				sendData(response, new PlatformData(), -1, "OVERROWCOUNT");
				return;
			}*/

			DataSetHelper dHelper = new DataSetHelper("ds_excel_bind");

			dHelper.addColumns(TempOdTrtwrsInfoUploadFileVO.class);
			
			String msg = "";
			
			for (int rowindex = 1; rowindex < rows; rowindex++) {

				XSSFRow row = sheet.getRow(rowindex);
				if (row != null) {
					/*if(getCellValue(row.getCell(1)).length() != 24) {
						continue;
					}*/
					
					TempOdTrtwrsInfoUploadFileVO tempvo = new TempOdTrtwrsInfoUploadFileVO();
					
					tempvo.setMD_NM(getCellValue(row.getCell( 1))); 					// 담당MD명
					tempvo.setSPYPL_NA_TRPL_C(getCellValue(row.getCell( 2))); 		// 매입처코드 
					tempvo.setSPYPL_NA_TRPL_NM(getCellValue(row.getCell( 3))); 	// 매입처명칭
					tempvo.setNA_WRS_C(getCellValue(row.getCell( 4))); 				// 판매상품코드
					tempvo.setSTPL_NA_WRS_C(getCellValue(row.getCell( 5))); 		// 낱개(sku)상품코드
					tempvo.setBOX_WRS_C(getCellValue(row.getCell( 6))); 				// 박스상품코드
					tempvo.setPHD_WRS_C(getCellValue(row.getCell( 7))); 				// 물류상품코드
					tempvo.setWRSNM(getCellValue(row.getCell( 8))); 					// 판매상품명
					tempvo.setWRS_STDNM(getCellValue(row.getCell( 9))); 				// 규격 및 모델
					tempvo.setINPD_QT(getCellValue(row.getCell( 10))); 					// 내품수량
					tempvo.setBOXPE_AQZ(getCellValue(row.getCell( 11))); 				// 박스당입수
					tempvo.setNA_WRS_UNT_C(getCellValue(row.getCell(12))); 		// 단위
					tempvo.setMIN_ODR_UNT_C(getCellValue(row.getCell(13))); 		// 최소발주단위
					tempvo.setTXT_DSC(getCellValue(row.getCell(14))); 					// 과세여부
					tempvo.setNA_WRS_CSTD_METC(getCellValue(row.getCell(15))); // 보관방식
					tempvo.setVLD_PRD_CN(getCellValue(row.getCell(16))); 				// 유통기한(일)
					tempvo.setNA_WRS_IPO_DSC(getCellValue(row.getCell(17))); 		// 완제품수입여부
					tempvo.setDVY_DSC(getCellValue(row.getCell(18))); 					// 배송구분
					tempvo.setSL_UPR(getCellValue(row.getCell(19))); 					// 권장판매가
					tempvo.setUPR_01(getCellValue(row.getCell(20))); 					// 단위당단가(낱개기준)-내용량
					tempvo.setUPR_02(getCellValue(row.getCell(21))); 					// 단위당단가(낱개기준)-표시기준단량
					tempvo.setUPR_03(getCellValue(row.getCell(22))); 					// 단위당단가(낱개기준)-기준단위
					tempvo.setBZTPNM(getCellValue(row.getCell(23))); 					// 업태구분
					
					dHelper.setData(tempvo);
					
					if (tempvo.getSPYPL_NA_TRPL_C().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "매입처코드 Cell 값 [" + tempvo.getSPYPL_NA_TRPL_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getSPYPL_NA_TRPL_NM().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "매입처명칭 Cell 값 [" + tempvo.getSPYPL_NA_TRPL_NM().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getNA_WRS_C().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "판매상품코드 Cell 값 [" + tempvo.getNA_WRS_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getWRSNM().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "판매상품명 Cell 값 [" + tempvo.getWRSNM().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getSTPL_NA_WRS_C().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "낱개(sku)상품코드 Cell 값 [" + tempvo.getSTPL_NA_WRS_C().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					} else if (tempvo.getMD_NM().trim() == "") {
						msg = "라인번호[" + rowindex + "] "+ "담당MD명 Cell 값 [" + tempvo.getMD_NM().trim() + "] 은 공백이면 안됩니다.";
						sendData(response, platformData, -1, msg);
						return;
					}
					
				}
			}
			platformData.addDataSet(dHelper.getDataSet());
			logger.debug(platformData.saveXml());
			sendData(response, platformData);
		} catch (AppetizerException | IOException | ValidationException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, e.getMessage());
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1514
	 * 화면설명 : 필수상품속성정보관리(EXCEL)_FileUpload_Save
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pds/pricat/saveMDMngTempOdTrtwrsInfoFile")
	public void saveMDMngTempOdTrtwrsInfoFile(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet inds = requestHelper.getDataSet("in_ds");
		
		PlatformData platformData = new PlatformData();
		
		try {
			String MBID = requestHelper.getUserID();
			String NA_BZPLC = requestHelper.getGlnCode();
			productSev.updateMDMngTempOdTrtwrsInfo(inds, MBID, NA_BZPLC);
			
		} catch (AppetizerException e) {
			logger.error(e.getMessage());
			sendData(response, platformData, -1, "필수상품속성관리 등록중에 오류가 발생하였습니다. 관리자에 문의하십시오.");
		}
	}
	
	private String getCellValue(XSSFCell cell) {
		String val = "";
		if (cell == null)
			return "";
		switch (cell.getCellType()) {
		case HSSFCell.CELL_TYPE_STRING:
			return cell.getStringCellValue();
		case HSSFCell.CELL_TYPE_NUMERIC:
			/*val = Double.toString(cell.getNumericCellValue());
			double dphi = cell.getNumericCellValue();
			// 소수점 세자리 절사용인듯
			
			 * if ((dphi - (int) dphi) * 1000 == 0) {
			 *	val = (int) dphi + "";
			 * }
			  
			
			// 수정
			double truncatedVal = Math.floor(dphi*1000);
			Double dblTrancated = new Double(truncatedVal/1000);
			val = dblTrancated.toString();*/
			/*val = "" + cell.getNumericCellValue();
			if (val.endsWith(".0")) {
				val = val.substring(0, val.length() - 2);
			}*/
			cell.setCellType(HSSFCell.CELL_TYPE_STRING);
			val = cell.getStringCellValue();
			return val;
		case HSSFCell.CELL_TYPE_BOOLEAN:
			return Boolean.toString(cell.getBooleanCellValue());
		case HSSFCell.CELL_TYPE_FORMULA:
			return cell.getCellFormula();

		}
		return "";
	}

	/*
	 * 화면ID : VAN_DS_SC_1543 화면설명 : 신규상품등록_상품조회(경통,코리안넷)
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrieveProductInfForReg")
	public void retrieveProductInfForReg(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		String GLN = requestHelper.getParameter("gln"); // 사업체코드
		String NA_WRS_C = requestHelper.getParameter("na_wrs_c"); // 상품코드
		String van_c_rq_no = null;
		try {
			Map<String, Object> resultKornet = null; //variable to get the korean-net product data
			List<Map<String, Object>> recent_inserting = null;// variable to get a recent inserting of product register.
			DataSetHelper dsKornet = new DataSetHelper("ds_kornet_wrs"); // dataset			
			DataSetHelper dsGD = new DataSetHelper("ds_gd_wrs");
			DataSetHelper dsLG = new DataSetHelper("ds_wrs_rg_req_lg");

			recent_inserting = productSev.select_recent_inserting_from_TB_GD_WRS_RG_REQ(GLN, NA_WRS_C);// getting a recent inserting of product register.
			//bring the recent inserting codes.
			System.out.println(recent_inserting==null);
			System.out.println("recent_inserting.size() "+recent_inserting.size());
			if(recent_inserting.size()>0 && recent_inserting.size()<=1) {
				//if it dose exist inserting.
				System.out.println(recent_inserting.get(0).get("PRC_YN"));
				if(recent_inserting.get(0).get("PRC_YN").equals("Y")||recent_inserting.get(0).get("PRC_YN").equals("E")) {
					//if PRC_YN is 'Y'
					System.out.println("in this case, whether CUD_DSC is U or I, CUD_DSC must have U");
					//set CUD_DSC as "U" and set REQ_STS_DSC as "U"
					recent_inserting.get(0).put("CUD_DSC", "U");
					recent_inserting.get(0).put("REQ_STS_DSC", "U");
					// make columns from recent_inserting's keys
					dsGD.addColumns(recent_inserting.get(0).keySet());
					// make data-set dsGD from recent_inserting
					for (Map<String, Object> vo : recent_inserting) {
						dsGD.setData(vo);
					}
					// send front the data dsGD
					platformData.addDataSet(dsGD.getDataSet());

					// r1상품 조회
					van_c_rq_no = recent_inserting.get(0).get("VAN_C_RQ_NO").toString();
					List<Map<String, Object>> resultWrsR1 = productSev.selectLG(van_c_rq_no);
					if (resultWrsR1.size() > 0) {
						dsLG.addColumns(resultWrsR1.get(0).keySet());
						for (Map<String, Object> vo : resultWrsR1) {
							dsLG.setData(vo);
						}
						platformData.addDataSet(dsLG.getDataSet());
					}
					// add korean-net information
					resultKornet = productSev.selectKornetProduct(GLN, NA_WRS_C);
					// making data-set dsKornet from resultKornet
					if(resultKornet != null) {
						// is it korean-net Product?
						dsKornet.addColumns(resultKornet.keySet());
						dsKornet.setData(resultKornet);
						//send front the korean-net data(dsKornet, dsGD)
						platformData.addDataSet(dsKornet.getDataSet());
					}
					System.out.println(dsGD);
					System.out.println(recent_inserting.get(0).get("CUD_DSC"));
					System.out.println("CUD_DSC = \"U\" allocated");
					// send front the data dsGD
//					platformData.addDataSet(dsGD.getDataSet());
					sendData(response, platformData);
					return;
				}else {
					// any PRC_YN value except "Y" and "E"

					// rollback and send the user a message "it's doing register"
					//set CUD_DSC as "P" (P = processing) and set REQ_STS_DSC as "P"
//					recent_inserting.get(0).put("CUD_DSC", "P");
					recent_inserting.get(0).put("REQ_STS_DSC", "P");
					// make columns from recent_inserting's keys
					dsGD.addColumns(recent_inserting.get(0).keySet());
					// make data-set dsGD from recent_inserting
					for (Map<String, Object> vo : recent_inserting) {
						dsGD.setData(vo);
					}
					platformData.addDataSet(dsGD.getDataSet());

					System.out.println("it's doing register");
					System.out.println("response error message");
					sendData(response, platformData);
					return;
				}
			}else if(recent_inserting.size()>1) {
				//is recent inserting returned bigger than size 1?
				System.out.println("response error message");
				sendData(response, new PlatformData(), -2, "DUPLICATE_REQUEST");
				return;
				
			}else if(recent_inserting.size()==0) {
				//if it doesn't exist inserting.
			
				// code:select korean-net data
				resultKornet = productSev.selectKornetProduct(GLN, NA_WRS_C);
				if(resultKornet != null) {
					// is it in korean-Net?
					
					// code:bring the korean-net data
					System.out.println(resultKornet.toString());
					// making data-set dsKornet from resultKornet
					dsKornet.addColumns(resultKornet.keySet());
					dsKornet.setData(resultKornet);
					//send front the korean-net data(dsKornet, dsGD)
					platformData.addDataSet(dsKornet.getDataSet());

					//set CUD_DSC as "I" and set REQ_STS_DSC as "I"
					recent_inserting = new ArrayList<>();
					recent_inserting.add(new HashMap<String, Object>());
					recent_inserting.get(0).put("CUD_DSC", "I");
					recent_inserting.get(0).put("REQ_STS_DSC", "I");
					// make columns from recent_inserting's keys
					dsGD.addColumns(recent_inserting.get(0).keySet());
					// make data-set dsGD from recent_inserting
					for (Map<String, Object> vo : recent_inserting) {
						dsGD.setData(vo);
					}
					platformData.addDataSet(dsGD.getDataSet());
					sendData(response, platformData);
					return;
				}else if(resultKornet == null) {
					// isn't it in korean-Net?
					
					// code:judge regular-code or not.
					System.out.println("상품코드 "+NA_WRS_C);

					boolean is_standard =productSev.check_standard_or_not(NA_WRS_C);
					boolean is_fit_length = (NA_WRS_C.length()==13||NA_WRS_C.length()==14);
					if(is_standard && is_fit_length) {
						//is it standard code?

						//set REQ_STS_DSC as "S"
						recent_inserting = new ArrayList<>();
						recent_inserting.add(new HashMap<String, Object>());
						recent_inserting.get(0).put("REQ_STS_DSC", "S");
						//cud = I
						///admit to the users inserts informations.
						dsGD.addColumns(recent_inserting.get(0).keySet());
						// make data-set dsGD from recent_inserting
						for (Map<String, Object> vo : recent_inserting) {
							dsGD.setData(vo);
						}

						//add dsGD,dsKornet in platformData
						platformData.addDataSet(dsGD.getDataSet());
						System.out.println("admit to new infomation inserting");
						sendData(response, platformData);
						return;
					}else if(is_fit_length==false){
						//is code length not correct?

						//set REQ_STS_DSC as "W"
						recent_inserting = new ArrayList<>();
						recent_inserting.add(new HashMap<String, Object>());
						recent_inserting.get(0).put("REQ_STS_DSC", "W");

						///admit to the users inserts informations.
						dsGD.addColumns(recent_inserting.get(0).keySet());
						// make data-set dsGD from recent_inserting
						for (Map<String, Object> vo : recent_inserting) {
							dsGD.setData(vo);
						}

						//add dsGD,dsKornet in platformData
						platformData.addDataSet(dsGD.getDataSet());
						System.out.println("the code has wrong length");
						sendData(response, platformData);
						return;
					}else {
						//isn't it standard code?

						//set CUD_DSC as "M" and set REQ_STS_DSC as "M"
						recent_inserting = new ArrayList<>();
						recent_inserting.add(new HashMap<String, Object>());
//						recent_inserting.get(0).put("CUD_DSC", "M");
						recent_inserting.get(0).put("REQ_STS_DSC", "M");

						//deny the registration.
						dsGD.addColumns(recent_inserting.get(0).keySet());
						// make data-set dsGD from recent_inserting
						for (Map<String, Object> vo : recent_inserting) {
							dsGD.setData(vo);
						}
						System.out.println("send error message 'it's illegal code.'");

						//add date-set
						platformData.addDataSet(dsGD.getDataSet());
						sendData(response, platformData);
						return;//if it doesn't return any value, front look as illegal product code
					}
				}
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, e.getMessage());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1543 화면설명 : 코리안넷 등록상품 신규 상품정보 입력,수정
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/insertNewGoodsbyKornet")
	public void insertNewGoodsbyKornet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			// String orgpr = requestHelper.getParameter("orgpr");
			String CTCPL = requestHelper.getParameter("CTCPL"); // 신청자 연락처
			String rdo_sep = requestHelper.getParameter("rdo_sep");
			String temp_yn = requestHelper.getParameter("chk_temp_yn");
			String del_yn = requestHelper.getParameter("chk_del_yn");
			String onl_obj_yn = new String(requestHelper.getParameter("onl_obj_yn")); // 온라인여부
			String userId = requestHelper.getUserID();
			String gln = requestHelper.getGlnCode();
			// String[] orgrs = orgpr.split("/");
			// String orgrname = "";

			DataSetList in_dsList = requestHelper.getDataSetList();
			DataSet dsMain = in_dsList.get("in_mainds"); // 상품정보 및 2차상품 데이터
			DataSet in_upload = in_dsList.get("in_upload"); // 이미지파일데이터
			DataSet dsWrsRgReqLg = in_dsList.get("ds_wrs_rg_req_lg"); // R1 정보
			// DataSet dsInput = in_dsList.get("in_ds"); // 입력정보 데이터
			// DataSet dsInput_wrs = in_dsList.get("in_ds_wrs"); // 추가정보 데이터

			PlatformData out_PlatformData = new PlatformData();
			List<ProductReqVO> mainlist = ValueObjectSetUtil.dataSetToVO(dsMain, ProductReqVO.class);
			List<ProductReqFile> filelist = ValueObjectSetUtil.dataSetToVO(in_upload, ProductReqFile.class);
	        List<ProductReqVO> r1Info = ValueObjectSetUtil.dataSetToVO(dsWrsRgReqLg, ProductReqVO.class);
			// List<ProductReqPrgrVO> inputlist = ValueObjectSetUtil.dataSetToVO(dsInput, ProductReqPrgrVO.class);
			// List<ProductReqPrgrVO> addlist = ValueObjectSetUtil.dataSetToVO(dsInput_wrs, ProductReqPrgrVO.class);

			// 검색조건, 상품공통정보, 2차상품 상세정보 INSERT,UPDATE
			String RQ_NA_WRS_C = mainlist.get(0).getRQ_NA_WRS_C(); // 신청상품코드
			String VAN_C_RQ_NO = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_GD_WRS_RG_REQ);
			mainlist.get(0).setVAN_C_RQ_NO(VAN_C_RQ_NO);
			mainlist.get(0).setFSRGMN_ENO(userId);
			mainlist.get(0).setFSRGMN_NA_BZPLC(gln);
			mainlist.get(0).setCTCPL_TELNO(CTCPL);
			//mainlist.get(0).setRQ_CNTN("상품정보 등록/수정");
			mainlist.get(0).setNA_WRS_C(RQ_NA_WRS_C); // 상품코드
			mainlist.get(0).setLS_CHGM(userId);

			// 그리드 입력정보 추가,수정
			// productSev.inputREQ(dsInput,dsInput_wrs,orgrs,inputlist,addlist,VAN_C_RQ_NO,RQ_NA_WRS_C,orgrname);

			// 파일 저장
			productSev.fileReq(VAN_C_RQ_NO, in_upload, filelist);

			// 신규상품 요청등록 추가,변경 추가
			productSev.insertKornetREQ(mainlist.get(0), r1Info.get(0), rdo_sep, temp_yn, del_yn);
			
			if(onl_obj_yn.equals("1")) {
				DataSet ds_wrs_nfty_hdng = in_dsList.get("ds_wrs_nfty_hdng"); // 온라인취급상품고시항목상세
				DataSet ds_namo_editor = in_dsList.get("ds_namo_editor"); // 나모편집파일(MIMEValue)
				String namoHtmlData = ds_namo_editor.getString(0, "MHT_DATA"); // Namo MIMEValue Data
				String namoImgData = ds_namo_editor.getString(0, "IMG_DATA"); // Namo MIMEValue Data
				if (ds_namo_editor.getRowCount()!=0 &&!"".equals(namoHtmlData)) {
					// 나모 html 파일 저장
					byte[] bytes = null;
					try {
						bytes = namoHtmlData.getBytes("utf-8"); // Namo Data를 Byte 형태로 Get
					} catch (UnsupportedEncodingException e1) {
						sendData(response, out_PlatformData, -1, e1.getMessage());
					}
					// 받아온 namo 데이터를 변경하는 구간
					try{
						String namo_html = new String(bytes);

						Document doc = Jsoup.parse(namo_html);
						Element body = doc.body();

						Element paragraph = body.getElementsByTag("p").get(0);

						for(int i=0; i < paragraph.getElementsByTag("img").size(); i++) {
							System.out.println(i);
							Element image = paragraph.getElementsByTag("img").get(i);
//							System.out.println(image);
//							System.out.println();

							String img_file_name = image.attr("src").split("/")[image.attr("src").split("/").length-1];
							image.removeAttr("src");
							image.attr("src", "/nhvan/rest/ce/nhmimg/" + VAN_C_RQ_NO + "/" + img_file_name);
//							System.out.println(doc);
//							System.out.println();
						}
						bytes = doc.toString().getBytes("utf-8");
					}catch(Exception e){
						sendData(response, out_PlatformData, -1, e.getMessage());
					}


					// 작업된 namo 결과를 저장하는 구간
					String dstDir = Configurer.getProperty("file.real.wrs.path")+ File.separator + VAN_C_RQ_NO;
				 
					String serverFilePath = dstDir + File.separator + VAN_C_RQ_NO + ".html";
					File serverFile = new File(dstDir);
					serverFile.mkdirs();
					serverFile = new File(serverFilePath);
					BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
					int html_file_size = bytes.length;
					stream.write(bytes);
					stream.close();
					//insert html-file info in TB_GD_WRS_RG_REQ_FILE.
					Map<String,Object> html_param = new HashMap<>();
					html_param.put("VAN_C_RQ_NO", VAN_C_RQ_NO);
					html_param.put("FILE_SEQ", 0);
					html_param.put("FILE_NAME", VAN_C_RQ_NO + ".html");
					html_param.put("FILE_SYSTEM_NAME", VAN_C_RQ_NO + ".html");
					html_param.put("FILE_SIZE", html_file_size);
					html_param.put("WRS_IMG_KDC", "DOC01");
					productSev.insert_html_file_info(html_param);

					// 고시정보를 저장하는 코드
					productSev.insertOnNtfyHdng(ds_wrs_nfty_hdng, VAN_C_RQ_NO);
				}  
			}
			 
			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1561 화면설명 : 신규상품요청 내역조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrieveReturnNewGoodsbyKornet")
	public void retrieveSearchNewGoodsbyKornet(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String DT_STDT = requestHelper.getParameter("dt_stdt");
			String DT_EDDT = requestHelper.getParameter("dt_eddt");
			// String CBO_REQDSC = requestHelper.getParameter("cbo_reqDsc");
			String CBO_RESDSC = requestHelper.getParameter("cbo_resDsc");
			String CBO_WRSDSC = requestHelper.getParameter("cbo_wrsDsc");
			String EDT_WRS = requestHelper.getParameter("edt_wrs");
			String CBO_CORPDSC = requestHelper.getParameter("cbo_corpDsc");
			String EDT_CORP = requestHelper.getParameter("edt_corp");
			String CBO_BUYERDSC = requestHelper.getParameter("cbo_buyerDsc");
			String EDT_BUYER = requestHelper.getParameter("edt_buyer");

			String kindval = requestHelper.getParameter("kindval"); // 그리드 데이터 구분

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DT_STDT", DT_STDT);
			param.put("DT_EDDT", DT_EDDT);
			// param.put("CBO_REQDSC", CBO_REQDSC);
			param.put("CBO_RESDSC", CBO_RESDSC);
			param.put("CBO_WRSDSC", CBO_WRSDSC);
			param.put("EDT_WRS", EDT_WRS);
			param.put("CBO_CORPDSC", CBO_CORPDSC);
			param.put("EDT_CORP", EDT_CORP);
			param.put("CBO_BUYERDSC", CBO_BUYERDSC);
			param.put("EDT_BUYER", EDT_BUYER);

			// 본부회원일 때 모든 거래처 조회
			if (!"02".equals(requestHelper.getUserType())) {
				param.put("TRPL_C", TRPL_C_ARR);
			}

			PlatformData out_PlatformData = new PlatformData();
			if (kindval.equals("1")) {
				DataSetHelper dHelper = new DataSetHelper("ds_main_req");
				// 페이징
				int totalRowCount = productSev.selectNewGoodsByKornetCount(param);
				PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
				int start = pageHelper.getStart();
				int end = pageHelper.getEnd();
				param.put("start", start);
				param.put("end", end);

				List<Map<String, Object>> masterNewGood = productSev.selectNewGoodsByKornet(param);
				if (masterNewGood.size() > 0) {
					dHelper.addColumns(masterNewGood.get(0).keySet());
					for (Map<String, Object> vo : masterNewGood) {
						dHelper.setData(vo);
					}
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
				out_PlatformData.addDataSet(pageHelper.getDsPageVo());
			} else if (kindval.equals("2")) {
				DataSetHelper dHelper2 = new DataSetHelper("ds_sub_req");
				String VAN_C_RQ_NO = requestHelper.getParameter("VAN_C_RQ_NO"); // VAN상품요청번호
				String GBN = requestHelper.getParameter("GBN");
				if (StringUtils.isEmpty(GBN)) {
					GBN = "I";
				}

				Map<String, Object> param2 = new HashMap<String, Object>();
				param2.put("VAN_C_RQ_NO", VAN_C_RQ_NO);
				// 본부회원일 때 모든 거래처 조회
				if (!"02".equals(requestHelper.getUserType())) {
					param2.put("TRPL_C", TRPL_C_ARR);
				}
				param2.put("GBN", GBN);
				

				List<Map<String, Object>> detailAtchList = productSev.selectNewGoodsAtchByKornet(param2);
				if (detailAtchList.size() > 0) {
					dHelper2.addColumns(detailAtchList.get(0).keySet());
					dHelper2.getDataSet().setColumnDataType("FILE_SEQ", DataTypes.INT);
					for (Map<String, Object> vo : detailAtchList) {
						dHelper2.setData(vo);
					}
				}
				out_PlatformData.addDataSet(dHelper2.getDataSet());
			}
			sendData(response, out_PlatformData, 1, "success.data.newgoods");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1561 화면설명 : 상품등록신청/수정 취소
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/wrsModDelReq")
	public void companyModDelReq(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String NA_C_RQ_NO = requestHelper.getParameter("NA_C_RQ_NO"); // 신청자 연락처
			String userId = requestHelper.getUserID();
			String gln = requestHelper.getGlnCode();

			ProductReqVO reqVO = new ProductReqVO();
			reqVO.setFSRGMN_ENO(userId);
			reqVO.setFSRGMN_NA_BZPLC(gln);

			if (!StringUtil.isNullCheck(NA_C_RQ_NO)) {
				reqVO.setNA_C_RQ_NO(NA_C_RQ_NO);
				int cnt = productSev.retrieveWrsModReqExist(reqVO);
				if (cnt > 0) {
					productSev.insertWrsDelReq(reqVO);
					sendData(response, new PlatformData()); // SUCCESS
				} else {
					sendData(response, new PlatformData(), -2, "해당되는 요청내역을 찾을 수 없습니다.");
				}
			} else {
				sendData(response, new PlatformData(), -3, "요청내역이 없거나 올바르지 않습니다.");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1561 화면설명 : 신규상품요청 내역조회 (엑셀)
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/excel/downloadExcelNewGoodsKornet")
	public void downloadExcelNewGoodsKornet(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String DT_STDT = requestHelper.getParameter("dt_stdt");
			String DT_EDDT = requestHelper.getParameter("dt_eddt");
			String CBO_REQDSC = requestHelper.getParameter("cbo_reqDsc");
			String CBO_RESDSC = requestHelper.getParameter("cbo_resDsc");
			String CBO_WRSDSC = requestHelper.getParameter("cbo_wrsDsc");
			String EDT_WRS = requestHelper.getParameter("edt_wrs");
			String CBO_CORPDSC = requestHelper.getParameter("cbo_corpDsc");
			String EDT_CORP = requestHelper.getParameter("edt_corp");
			String CBO_BUYERDSC = requestHelper.getParameter("cbo_buyerDsc");
			String EDT_BUYER = requestHelper.getParameter("edt_buyer");

			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			Map<String, Object> param = new HashMap<String, Object>();
			param.put("DT_STDT", DT_STDT);
			param.put("DT_EDDT", DT_EDDT);
			param.put("CBO_REQDSC", CBO_REQDSC);
			param.put("CBO_RESDSC", CBO_RESDSC);
			param.put("CBO_WRSDSC", CBO_WRSDSC);
			param.put("EDT_WRS", EDT_WRS);
			param.put("CBO_CORPDSC", CBO_CORPDSC);
			param.put("EDT_CORP", EDT_CORP);
			param.put("CBO_BUYERDSC", CBO_BUYERDSC);
			param.put("EDT_BUYER", EDT_BUYER);
			param.put("TRPL_C", TRPL_C_ARR);

			String fileName = "신규상품요청내역.xls";
			if (StringUtils.isNotEmpty(fileName)) {
				try {
					fileName = URLEncoder.encode(fileName, "UTF-8");
				} catch (UnsupportedEncodingException e) {
					logger.info(e.getMessage());
				}
			}
			List<Map<String,Object>> list = null;
			Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
			
			String[] header = {	/*"경제통합코드신청번호", "경제통합코드신청대상구분코드", "연락처전화번호",*/ "신청내용", "승인신청경제통합사업장코드", "최초등록자개인번호",  
								"최초등록자경제통합사업장코드", "바이어개인번호", "신청경제통합상품코드", "경제통합상품코드", "상품코드구분코드", "상품구분코드",
								"상품명", "상품약어명", "상품영문명", "상품유형코드", "경제통합상품대분류코드", "경제통합상품중분류코드", "경제통합상품소분류코드",
								"경제통합상품세분류코드", "상품규격명", "과세구분코드", "영세적용유형코드", "주류여부", "제조경제통합거래처코드", "단량",  
								"경제통합상품단위코드", /* "경제통합상품포장코드", */ "경제통합상품브랜드코드", "경제통합상품보관방식코드", "경제통합상품유통상태코드",
								"경제통합상품용도코드", "경제통합상품수입구분코드", "공병경제통합상품코드", "공병수량", "공상자경제통합상품코드", "상품상세설명",
								"기본단위구분코드", "박스당입수", "RFID사용여부", "형식명", "매취수탁구분코드", "유통기한관리여부", "유통기한표기방법구분코드",  
								"내용량", "기준량", "표시단위", "상품변경요청여부", "임시저장여부", "경통전송여부", "결과수신", "상품등록신청결과메시지", 
								"승인/거절개인번호", "승일/거절일시", "승인/거절자명", "경제통합코드신청거절사유코드", "경제통합코드신청거절사유코드명",
								"경제통합코드신청상태코드", "경제통합코드신청상태코드명", "경제통합공급처코드", "거래처팀코드", "박스상품여부", "박스중량",
								"박스용적", "매입단가", "판매단가", "가로길이", "세로길이", "상품높이", "파렛트당층수", "파렛트당단수", "파렛트당박스수"  
							  };
			
			String[] keyIndex = {/* "NA_C_RQ_NO", "NA_C_RQ_OBJ_DSC_NM", "CTCPL_TELNO", */ "RQ_CNTN", "APV_RQ_NA_BZPLC", "FSRGMN_ENO",
								  "FSRGMN_NA_BZPLC", "BUYER_ENO", "RQ_NA_WRS_C", "NA_WRS_C", "WRS_C_DSC", "WRS_DSC",
								  "WRSNM", "WRS_ABR_NM", "WRS_ENM", "WRS_TPC", "NA_WRS_LCLC", "NA_WRS_MCLC", "NA_WRS_SCLC",
								  "NA_WRS_DTCF_C", "WRS_STDNM", "TXT_DSC", "SMA_APL_TPC", "LIQ_YN", "MFT_NA_TRPL_C", "WHT",
								  "NA_WRS_UNT_C",/* "NA_WRS_PAK_C",*/ "NA_WRS_BRAN_C", "NA_WRS_CSTD_METC", "NA_WRS_DSTR_STSC",
								  "NA_WRS_UZC", "NA_WRS_IPO_DSC", "VCBT_NA_WRS_C", "VCBT_QT", "VCBX_NA_WRS_C", "WRS_DTL_EXPL",
								  "BSC_UNT_DSC", "BOXPE_AQZ", "RFID_UYN", "FOMNM", "SLGT_ETR_DSC", "DSTR_TER_YN", "DSTR_TER_MRK_DSC",
								  "PR_MRK_WHT", "PR_MRK_STD_BAS_WHT", "PR_MRK_BAS_UNIT_NM", "WRS_MODIFY_YN", "TEMP_YN", "PRC_YN", "RSP_C_CNTN", "REQ_RESULT",
								  "CNF_ENO", "CNF_DMT", "CNF_NAME", "NA_C_RQ_REJ_RSNC", "NA_C_RQ_REJ_RSNC_NM", 
								  "NA_C_RQ_STSC", "NA_C_RQ_STSC_NM", "NA_SPYPL_C", "NA_SPYPL_TEAM_C","BOX_WRS_YN","BOX_WT",
								  "BOX_BULK", "BYNG_UPR", "SEL_UPR", "WDTH_LEN", "LEN_LEN", "WRS_HGHT", "PLTPE_LYNO", "PLTPE_SGNO", "PLTPE_BOX_CN"
					};
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, list);
			ExcelFileMakerResultHandler handler = new ExcelFileMakerResultHandler(workbook, model);
			
			productSev.excelNewGoodsKornet(param, handler);
			
			Map<String, Object> searchMap = new LinkedHashMap<String, Object>();
			searchMap.put("출력화면", "신규상품요청내역");
			searchMap.put("거래처코드", TRPL_C);

			handler.createSearchSheet(searchMap);
			handler.write(response, fileName);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "SYSTEMERROR");
			logger.error(e.getMessage());
			sendHtmlAlert(response, e.getErrorMsg());
		}
	}

	/*
	 * 화면ID : VAN_DS_SC_1561_P01 화면설명 : 신규상품 등록내역 상세 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrieveNewGoodsDetailByKornet")
	public void retrieveNewGoodsDetailByKornet(HttpServletRequest request, HttpServletResponse response) {
		PlatformData out_PlatformData = null;
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String VAN_C_RQ_NO = requestHelper.getParameter("VAN_C_RQ_NO");
			String TRPL_C = requestHelper.getParameter("FSRGMN_NA_BZPLC");
			String GBN = requestHelper.getParameter("GBN");
			if (StringUtils.isEmpty(GBN)) {
				GBN = "I";
			}
			ProductReqVO vo = new ProductReqVO();
			vo.setVAN_C_RQ_NO(VAN_C_RQ_NO);
			vo.setFSRGMN_NA_BZPLC(TRPL_C);
			vo.setCUD_DSC(GBN);

			List<Map<String, Object>> detail = productSev.retrieveNewGoodsDetailByKornet(vo);
			List<Map<String, Object>> onlNtfy = productSev.retrieveNewGoodsOnlNtfy(vo);
			List<Map<String, Object>> onlNtfyD = productSev.retrieveNewGoodsOnlNtfyD(vo);

			out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_detail");
			DataSetHelper dsOnlNtfy = new DataSetHelper("ds_onlNtfy");
			DataSetHelper dsOnlNtfyD = new DataSetHelper("ds_onlNtfyD");

			if (onlNtfy.size() > 0) {
				dsOnlNtfy.addColumns(onlNtfy.get(0).keySet());
				for (Map<String, Object> map : onlNtfy) {
					dsOnlNtfy.setData(map);
				}
				out_PlatformData.addDataSet(dsOnlNtfy.getDataSet());
			}

			if (onlNtfyD.size() > 0) {
				dsOnlNtfyD.addColumns(onlNtfyD.get(0).keySet());
				for (Map<String, Object> map : onlNtfyD) {
					dsOnlNtfyD.setData(map);
				}
				out_PlatformData.addDataSet(dsOnlNtfyD.getDataSet());
			}

			if (detail.size() > 0) {
				dHelper.addColumns(detail.get(0).keySet());
				for (Map<String, Object> map : detail) {
					dHelper.setData(map);
					if (detail.get(0).get("ONL_OBJ_YN").equals("1")) {
						System.out.println("ONL_OBJ_YN=======>");
						String dstDir = Configurer.getProperty("file.real.wrs.path") + File.separator + VAN_C_RQ_NO;

						String flnm = dstDir + File.separator + VAN_C_RQ_NO + ".html";
						try {
							String value = FileUtil.readToString(flnm, "utf-8");
							System.out.println("value=======>" + value);
							dHelper.getDataSet().set(0, "HTML_DATA", value);
						}catch (IOException e) {
							logger.error("file does not exist at system storage");
						}
					}
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
			}

			/*
			// 수정상품 기존정보 조회
			if ("U".equals(vo.getCUD_DSC())) {
				vo.setNA_WRS_C((String)detail.get(0).get("RQ_NA_WRS_C"));
				DataSetHelper dsGD = new DataSetHelper("ds_detail_org");
				List<Map<String, Object>> list = productSev.retrieveModGoodsDetailOrg(vo);
				if (list.size() > 0) {
					dsGD.addColumns(list.get(0).keySet());
					for (Map<String, Object> map : list) {
						dsGD.setData(map);
					}
					out_PlatformData.addDataSet(dsGD.getDataSet());
				}
			}
			*/
			sendData(response, out_PlatformData, 1, "success.data.newgoods");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}

	/*
	 * 화면ID : POPUP_SRC_PDAA
	 * 화면설명 : 산지코드 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrieveNaWrsPdaaC")
	public void retrieveNaWrsPdaaC(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String searchMode = requestHelper.getParameter("searchMode");
			String searchText = requestHelper.getParameter("searchText");

			List<Map<String, Object>> detail = productSev.retrieveNaWrsPdaaC(searchMode, searchText);
			PlatformData out_PlatformData = new PlatformData();
			DataSetHelper dHelper = new DataSetHelper("ds_pdaa");
			if (detail.size() > 0) {
				dHelper.addColumns(detail.get(0).keySet());
				for (Map<String, Object> map : detail) {
					dHelper.setData(map);
				}
				out_PlatformData.addDataSet(dHelper.getDataSet());
				sendData(response, out_PlatformData, 1, "success.data.newgoods");
			} else {
				sendData(response, new PlatformData(), -2, "해당되는 요청내역을 찾을 수 없습니다.");
			}
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	@RequestMapping(value = "/rest/pds/pricat/Product/downloadZipFile", method = RequestMethod.POST)
	public void fileZipDownload(HttpServletRequest request, HttpServletResponse response, String vanSeq, String naWrsC) throws UnsupportedEncodingException {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String TRPL_C = requestHelper.getParameter("TRPL_C");
		String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		String VAN_C_RQ_NO = requestHelper.getParameter("VAN_C_RQ_NO"); // VAN상품요청번호
		String GBN = requestHelper.getParameter("GBN");
		if (StringUtils.isEmpty(GBN)) {
			GBN = "I";
		}
		
		Map<String, Object> param2 = new HashMap<String, Object>();
		param2.put("VAN_C_RQ_NO", VAN_C_RQ_NO);
		// 본부회원일 때 모든 거래처 조회
		if (!"02".equals(requestHelper.getUserType())) {
			param2.put("TRPL_C", TRPL_C_ARR);
		}
		param2.put("GBN", GBN);
		
		List<Map<String, Object>> detailAtchList = productSev.selectNewGoodsAtchByKornet(param2);
		List<Map<String, String>> zipFileList = new ArrayList<Map<String, String>>();
		for (int i = 0; i < detailAtchList.size(); i++) {
			String fileName = (String) detailAtchList.get(i).get("SYSTEMFILENAME");
			String orgName = (String) detailAtchList.get(i).get("ORGFNAME");
			String realPath = Configurer.getProperty("file.real.wrs.path");

			if (fileName == null || "".equals(fileName.trim())) {
				continue;
			}

			File dir = new File(realPath);
			File f = new File(dir.getAbsolutePath() + File.separator + VAN_C_RQ_NO + File.separator + fileName);
			if (f.isFile()) {
				String restrictChars = "|\\\\?*<\":>/";
			    String regExpr = "[" + restrictChars + "]+";

			    // 파일명으로 사용 불가능한 특수문자 제거
			    orgName = orgName.replaceAll(regExpr, "_");

				Map<String, String> fileMap = new HashMap<String, String>();
				fileMap.put("fileName", orgName);
				fileMap.put("filePath", f.getAbsolutePath());
				zipFileList.add(fileMap);
			}
		}

		if (zipFileList != null && zipFileList.size() > 0) {
			try {
				ZipUtil.makeZip(request, response, zipFileList, "상품등록내역첨부");
			} catch (IOException e) {
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
		} else {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1592
	 * 화면설명 : 온라인 취급상품 조회
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pds/pricat/Product/retrievePricatOnLineModyWrs")
	public void retrievePricatOnLineModyWrs(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String sto_code = requestHelper.getParameter("sto_code"); // 상품코드
			String datesel = requestHelper.getParameter("datesel"); // 일자구분 라디오버튼
			String fromdate = requestHelper.getParameter("date1"); // 시작일
			String todate = requestHelper.getParameter("date2"); // 종료일
			String type = requestHelper.getParameter("type"); // 종료일
			String TRPL_C = requestHelper.getParameter("TRPL_C");
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);

			Map<String, Object> param = new HashMap<String, Object>();
			param.put("NA_WRS_C", sto_code); // 상품코드
			param.put("DATE_SEL", datesel); // 일자구분 선택코드
			param.put("FROM_DATE", fromdate); // 시작일
			param.put("TO_DATE", todate); // 종료일
			if (!"02".equals(requestHelper.getUserType())) {
				param.put("TRPL", TRPL_C_ARR); // GLN
			}

			DataSetHelper dHelper = new DataSetHelper("ds_online");

			// 페이징
			int totalRowCount = productSev.selectOnLineModyCount(param);
			PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
			int start = pageHelper.getStart();
			int end = pageHelper.getEnd();
			
			if ("excel".equals(type)) {
				start = 1;
				end = 99999;
			}

			param.put("start", start);
			param.put("end", end);

			PlatformData out_PlatformData = new PlatformData();
			List<Map<String, Object>> list = productSev.selectOnLineMody(param);
			if (list != null && list.size() > 0) {
				dHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> map : list) {
					dHelper.setData(map);
				}
			}

			out_PlatformData.addDataSet(dHelper.getDataSet());
			out_PlatformData.addDataSet(pageHelper.getDsPageVo());

			sendData(response, out_PlatformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getErrorMsg());
		}
	}
	
	/**
	 * 크로스에디터 내 첨부 이미지 SEQ구하기
	 * @param html
	 * @param seq
	 * @return
	 */
	private int getNextImgSeq(String html, int seq) {
		while(html.indexOf("_ceimg" + String.format("%02d", seq)) != -1) {
			seq++;
		}
		return seq;
	}
}