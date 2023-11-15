package com.nh.escm.common.controller;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.excel.AbstractModel;
import com.esum.appetizer.util.excel.CSVFileDownloadHelper;
import com.esum.appetizer.util.excel.DataSetModel;
import com.esum.appetizer.util.excel.DefaultModel;
import com.esum.appetizer.util.excel.ExcelFileMaker;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.CodeService;
import com.nh.escm.common.service.FileService;
import com.nh.escm.common.vo.TbCmBzplVO;

@RestController
public class FileController extends AbstractController implements HandlerExceptionResolver{
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private FileService fileService;
	
	private enum FileMetaData {
		FILENAME, FILETYPE, FILESIZE, ORGFNAME, FILEKEY, SYSTEMFILENAME
	}

	protected final Log logger = LogFactory.getLog(getClass());

	@PostConstruct
	public void makeFileDirectory() {
		String[] pathNames = {
		Configurer.getProperty("file.temp.path"),
		Configurer.getProperty("file.real.path"),
		Configurer.getProperty("file.sample.path"),
		Configurer.getProperty("file.real.wrs.path"),
		Configurer.getProperty("file.real.cmpy.path"),
		Configurer.getProperty("file.realClt.path"),
		Configurer.getProperty("file.picture.path"),
		Configurer.getProperty("file.photo.path"),
		Configurer.getProperty("file.realElt.path"),
		Configurer.getProperty("file.ofanc.path"),
		Configurer.getProperty("file.taxXml.path"),
		Configurer.getProperty("file.askBbs.path"),
		Configurer.getProperty("file.refBbs.path"),
		Configurer.getProperty("file.seal.path"),
		};
		
		for(String pathName : pathNames) {
			File dir = new File(pathName);
			if (!dir.exists()) {
				logger.info(pathName+" Directory is not exist, Making Directory");
				dir.mkdirs();
			}
		}
	}
	
	private static boolean isValidFileExt(String fileName) {
		if (StringUtils.isEmpty(fileName)) {
			return false;
		}
		return fileName.toLowerCase().matches("[\\s\\S]+(\\.)(7z|alz|egg|zip|bmp|gif|jpeg|jpg|tif|tiff|png|hwp|hwpx|hwt|csv|doc|docx|ppt|pptx|xls|xlsb|xlsx|pdf|rtf|txt|xps)");
	}
	
	private static boolean isValidFileName(String fileName){
		return fileName.matches("[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힝|_|,|\\s|\\.|\\-|\\[|\\]|\\(|\\)]*");
	}
	
	/*
	 * 허용되지 않는 확장자 체크하여 파일명 리턴 
	 */
	public static String getSafeFileName(String originalFilename){
		// files
		//String originalFilename = file.getOriginalFilename();
		
		// 허용되지 않는 확장자일 경우 
		if (!isValidFileExt(originalFilename)) {
			throw new AppetizerException("허용되지 않는 확장자 입니다.\n" + originalFilename);
		} else if (!isValidFileName(originalFilename)) {
			throw new AppetizerException("파일 이름이 올바르지 않습니다.\n" + originalFilename);
		}
		
		return originalFilename;
	}
	
	/**
	 * 멀티 파일 업로드시 사용
	 * @param names name이라는 파라미터로 여러개의 값을 전달
	 * @param files file이라는 파라미터로 어려개의 값을 전달
	 * @param response DataSet형태의 응답메시지
	 */
	@RequestMapping(value = "/rest/common/fileUpload", method = RequestMethod.POST)
	public void uploadMultipleFileHandler(MultipartHttpServletRequest request, HttpServletResponse response) {
		Iterator<String> fileNames =  request.getFileNames();
		
		try {
			PlatformData platformData = new PlatformData();
			DataSet ds = new DataSet("ds01");		
			ds.addColumn(new ColumnHeader(FileMetaData.FILENAME.name(), DataTypes.STRING));
			ds.addColumn(new ColumnHeader(FileMetaData.FILETYPE.name(), DataTypes.STRING));
			ds.addColumn(new ColumnHeader(FileMetaData.FILESIZE.name(), DataTypes.LONG));
			ds.addColumn(new ColumnHeader(FileMetaData.ORGFNAME.name(), DataTypes.STRING));
			ds.addColumn(new ColumnHeader(FileMetaData.SYSTEMFILENAME.name(), DataTypes.STRING));
			
			String naTrplC = request.getParameter("na_trpl_c");
			
			String originalFilename = "";  // 파일명
			
			while(fileNames.hasNext()) {
				String fileName = fileNames.next();
				List<MultipartFile> files =  request.getFiles(fileName);
				String tempPath = "";
				
				for (MultipartFile file : files) {
					
					String systemFileName = "";

					originalFilename = getSafeFileName(file.getOriginalFilename());

					if(StringUtils.isNotEmpty(naTrplC)){
						systemFileName = "notice_" + naTrplC; 
						fileService.updateFileNm(systemFileName, naTrplC);
						tempPath = Configurer.getProperty("file.seal.path");
					}else{
						systemFileName = RandomStringUtils.randomAlphabetic(10)+System.currentTimeMillis();
						tempPath = Configurer.getProperty("file.temp.path");
					}
					
					byte[] bytes = file.getBytes();

					File dir = new File(tempPath);
					if (!dir.exists()) {
						dir.mkdirs();
					}

					File serverFile = new File(dir.getAbsolutePath()+ File.separator + systemFileName);
					BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
					stream.write(bytes);
					stream.close();

					int row = ds.newRow();
					ds.set(row, FileMetaData.FILENAME.name(), file.getName());
					ds.set(row, FileMetaData.FILETYPE.name(), file.getContentType());
					ds.set(row, FileMetaData.FILESIZE.name(), file.getSize());
					ds.set(row, FileMetaData.ORGFNAME.name(), originalFilename);
					ds.set(row, FileMetaData.SYSTEMFILENAME.name(), systemFileName);
		
					logger.info("File Upload Location="+ serverFile.getAbsolutePath());
				}
				
			}
			
			platformData.addDataSet(ds);
			sendData(response, platformData);
		} catch (IOException e) {
			sendData(response, new PlatformData(), -1, e.getMessage());
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	@RequestMapping(value = "/rest/ce/image/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
	public @ResponseBody byte[] retrieveNamoImageFile(HttpServletResponse response, @PathVariable String imageName) {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		String filePath = addPath(Configurer.getProperty("file.temp.path"), imageName);
		File imageFile = new File(filePath);

		byte[] fileArray = null;
		try {
			if (imageFile.exists()) {
				FileUtils.copyFile(imageFile, baos);
				fileArray = baos.toByteArray();
			} else {
				response.sendError(500);
			}
		} catch (IOException e) {
			throw new RuntimeException("File Error");
		} finally {
			IOUtils.closeQuietly(baos);
		}
		return fileArray;
	}

	/**
	 * [테스트] Short URL 이미지 경로
	 * @param response
	 * @param yyyy 연도
	 * @param mm 월
	 * @param imageName 이미지 파일 명
	 * @return
	 */
	@RequestMapping(value = "/rest/nh/surl/{yyyy}/{mm}/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
	public @ResponseBody byte[] retrieveShortUrlImage(HttpServletResponse response, @PathVariable String yyyy, @PathVariable String mm, @PathVariable String imageName) {
		byte[] fileArray = null;
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		try {
			if (!isValidParam(yyyy) || !isValidParam(mm) || !isValidParam(imageName)) {
				response.sendError(500); // Invalid Params
			} else if (yyyy.length() != 4 || mm.length() != 2) {
				response.sendError(500); // Invalid date params
			} else {
				String filePath = addPath(Configurer.getProperty("file.real.surl.path"), yyyy, mm, imageName);
				File imageFile = new File(filePath);
				if (imageFile.exists()) {
					FileUtils.copyFile(imageFile, baos);
					fileArray = baos.toByteArray();
				} else {
					response.sendError(500);
				}
			}
		} catch (IOException e) {
			logger.error(e.getMessage());
		} finally {
			IOUtils.closeQuietly(baos);
		}
		return fileArray;
	}

	/**
	 * 나모 크로스에디터 파일업로드
	 * @param session
	 * @param request
	 * @param model
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping(value = "/rest/ce/imageUpload")///rest/ce/imageUpload
	public @ResponseBody Map<String, Object> uploadNamoImageFile(HttpSession session, MultipartHttpServletRequest request, Model model) throws UnsupportedEncodingException {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String imageTitle = requestHelper.getParameter("imageTitle");
		String imageAlt = requestHelper.getParameter("imageAlt");
		String imageWidth = requestHelper.getParameter("imageWidth");
		String imageWidthUnit = requestHelper.getParameter("imageWidthUnit");
		String imageHeight = requestHelper.getParameter("imageHeight");
		String imageHeightUnit = requestHelper.getParameter("imageHeightUnit");
		String imageMaginLeft = requestHelper.getParameter("imageMaginLeft");
		String imageMaginLeftUnit = requestHelper.getParameter("imageMaginLeftUnit");
		String imageMaginRight = requestHelper.getParameter("imageMaginRight");
		String imageMaginRightUnit = requestHelper.getParameter("imageMaginRightUnit");
		String imageMaginTop = requestHelper.getParameter("imageMaginTop");
		String imageMaginTopUnit = requestHelper.getParameter("imageMaginTopUnit");
		String imageMaginBottom = requestHelper.getParameter("imageMaginBottom");
		String imageMaginBottomUnit = requestHelper.getParameter("imageMaginBottomUnit");
		String imageAlign = requestHelper.getParameter("imageAlign");
		String imageBorder = requestHelper.getParameter("imageBorder");
		String imageId = requestHelper.getParameter("imageId");
		String imageClass = requestHelper.getParameter("imageClass");
		String imageKind = requestHelper.getParameter("imageKind");
		String imageOrgPath = requestHelper.getParameter("imageOrgPath");
		String editorFrame = requestHelper.getParameter("editorFrame");
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		Iterator<String> fileNames = request.getFileNames();
		try {
			String originalFilename = "";  // 파일명
		
			List<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();
			while(fileNames.hasNext()) {
				String fileName = fileNames.next();
				List<MultipartFile> files =  request.getFiles(fileName);
				String tempPath = "";
				
				for (MultipartFile file : files) {
					String ext = "jpg";
					originalFilename = getSafeFileName(file.getOriginalFilename());
					if (originalFilename.lastIndexOf(".") != -1) {
						ext = originalFilename.substring(originalFilename.lastIndexOf(".") + 1, originalFilename.length());
					}
					String systemFileName = RandomStringUtils.randomAlphabetic(10) + System.currentTimeMillis();
					tempPath = Configurer.getProperty("file.temp.path");

					byte[] bytes = file.getBytes();

					File dir = new File(tempPath);
					if (!dir.exists()) {
						dir.mkdirs();
					}

					File serverFile = new File(dir.getAbsolutePath()+ File.separator + systemFileName);
					
					BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
					stream.write(bytes);
					stream.close();
					
					Map<String, Object> fileMap = new HashMap<String, Object>();
					fileMap.put("imageURL", request.getContextPath() + "/rest/ce/image/" + systemFileName + "#" + ext);
					fileMap.put("imageTitle", imageTitle);
					fileMap.put("imageAlt", imageAlt);
					fileMap.put("imageWidth", imageWidth);
					fileMap.put("imageWidthUnit", imageWidthUnit);
					fileMap.put("imageHeight", imageHeight);
					fileMap.put("imageHeightUnit", imageHeightUnit);
					fileMap.put("imageSize", (int) serverFile.length());
					fileMap.put("imageMarginLeft", imageMaginLeft);
					fileMap.put("imageMarginLeftUnit", imageMaginLeftUnit);
					fileMap.put("imageMarginRight", imageMaginRight);
					fileMap.put("imageMarginRightUnit", imageMaginRightUnit);
					fileMap.put("imageMarginTop", imageMaginTop);
					fileMap.put("imageMarginTopUnit", imageMaginTopUnit);
					fileMap.put("imageMarginBottom", imageMaginBottom);
					fileMap.put("imageMarginBottomUnit", imageMaginBottomUnit);
					fileMap.put("imageAlign", imageAlign);
					fileMap.put("imageId", imageId);
					fileMap.put("imageClass", imageClass);
					fileMap.put("imageBorder", imageBorder);
					fileMap.put("imageKind", imageKind);
					fileMap.put("imageOrgPath", imageOrgPath);
					fileMap.put("editorFrame", editorFrame);
		
					fileList.add(fileMap);
					logger.info("CE File Upload Location="+ serverFile.getAbsolutePath());
				}
			}
			resultMap.put("addmsg", fileList);
			resultMap.put("result", "success");
		} catch (AppetizerException e) {
			resultMap.put("result", "fileCopyFail");
			logger.error(e.getMessage());
		} catch (IOException e) {
			resultMap.put("result", "fileCopyFail");
			logger.error(e.getMessage());
		}
		
		return resultMap;
	}

	
	/**
	 * 
	 * 직인파일 삭제
	 */
	@RequestMapping(value = "/rest/common/deleteImg", method = RequestMethod.POST)
	public void deleteImg(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		try {
			PlatformData platformData = new PlatformData();
			String naTrplC = requestHelper.getParameter("na_trpl_c");
			fileService.deleteFileNm(naTrplC);
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	
	
	
	/**
	 * 파일 다운로드
	 * 파일 다운로드에는 systemFileName 서버에저장되어있는 이름, fileName 다운로드할이름 이 필요함.
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/rest/common/fileDownload", method = RequestMethod.POST)
    public void fileDownload(HttpServletRequest request, HttpServletResponse response){
		goDownload(request, response, "POST");
    }
	
	@RequestMapping(value = "/rest/common/fileDownload", method = RequestMethod.GET)
    public void fileDownload2(HttpServletRequest request, HttpServletResponse response){
		goDownload(request, response, "GET");
    }
	
	/**
	 * 다운로드 처리
	 * @param request
	 * @param response
	 * @param method HTTP통신 타입
	 */
	private void goDownload(HttpServletRequest request, HttpServletResponse response, String method) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String systemFileName = requestHelper.getParameter("systemFileName");
		String fileName = requestHelper.getParameter("fileName");
		String isSealType = requestHelper.getParameter("isSealType");
		String isSampleFile = requestHelper.getParameter("isSampleFile");
		
		/**
		 * 2019 웹취약성 조치
		 * Directory Traversal 방지 
		 */
		if (!"Y".equals(isSampleFile) && !isValidParam(systemFileName)) {
			return;
		}
		
		String realPath = null;
		
		if ("Y".equals(isSampleFile)) {
			realPath = Configurer.getProperty("file.sample.path");
		} else if ("Y".equals(isSealType)) {
			realPath = Configurer.getProperty("file.seal.path");
		} else if ("ELT".equals(isSealType)) {
			realPath = Configurer.getProperty("file.realElt.path");
		} else if ("CLT".equals(isSealType)) {
			realPath = Configurer.getProperty("file.realClt.path");
		} else if ("ofanc".equals(isSealType)) {// 농협공지사항
			realPath = Configurer.getProperty("file.ofanc.path");
		} else if ("taxXml".equals(isSealType)) {// 세금계산서xml
			realPath = Configurer.getProperty("file.taxXml.path");
		} else if ("refBbs".equals(isSealType)) {// 게시판-자료실
			realPath = Configurer.getProperty("file.refBbs.path");
		} else if ("refBbsN".equals(isSealType)) {// 게시판(신규경로)
			String blbdId = requestHelper.getParameter("blbdId");
			String bbrdId = requestHelper.getParameter("bbrdId");
			if (isValidParam(blbdId) && isValidParam(bbrdId)) {
				realPath = addPath(Configurer.getProperty("file.refBbs.path"), blbdId, bbrdId.substring(0, 4), bbrdId);
			} else { return; }
		} else if ("askBbs".equals(isSealType)) {// 게시판-자료요청
			realPath = Configurer.getProperty("file.askBbs.path");
		} else if ("dmart".equals(isSealType)) {// 데이터마트
			realPath = Configurer.getProperty("file.dmart.path");
		} else if ("reqWrs".equals(isSealType)) {// 신규상품등록
//			realPath = Configurer.getProperty("file.real.wrs.path");
			String rqno = requestHelper.getParameter("rqno");
			if (isValidParam(rqno)) {
				realPath = addPath(Configurer.getProperty("file.real.wrs.path"), rqno);
			} else { return; }
		} else if ("reqCmpy".equals(isSealType)) {// 업체정보(거래처정보수정)
//			realPath = Configurer.getProperty("file.real.cmpy.path");
			String gln = requestHelper.getParameter("gln");
			if (isValidParam(gln)) {
				realPath = addPath(Configurer.getProperty("file.real.cmpy.path"), gln.substring(0, 6), gln, "mod");
			} else { return; }
		} else if ("cmpyPay".equals(isSealType)) {// 업체정보(납부 등)
			String gln = requestHelper.getParameter("gln");
			if (isValidParam(gln)) {
				realPath = addPath(Configurer.getProperty("file.real.cmpy.path"), gln.substring(0, 6), gln, "pay");
			} else { return; }
		} else if ("tmp".equals(isSealType)) {// 임시파일
			realPath = Configurer.getProperty("file.temp.path");
		} else {
			realPath = Configurer.getProperty("file.real.path");
		}

		File dir = new File(realPath);
		File downloadFile = new File(dir.getAbsolutePath() + File.separator + systemFileName);

		logger.info("FileDown(" + method + ") Location= " + downloadFile.getAbsolutePath());

		response.setContentType(request.getContentType());
		response.setContentLength((int) downloadFile.length());
		response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\";");
		response.setHeader("Content-Transfer-Encoding", "binary");
		response.setHeader("Set-Cookie", "fileDownload=true; path=/");

		OutputStream out = null;
		try {
			out = response.getOutputStream();
			FileUtils.copyFile(downloadFile, out);
		} catch (IOException ie) {
			logger.error(ie.getMessage(), ie);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
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
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/sample/downloadCSV")
	public void downloadCSV(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper helper = new PlatFormRequestHelper(request);
		String fileName = helper.getParameter("fileName");
		
		DataSet ds = helper.getDataSet("CSV");
		
		try {
			AbstractModel model = new DataSetModel(ds, null);
			CSVFileDownloadHelper csvHelper = new CSVFileDownloadHelper(response, fileName);
			csvHelper.writer(model);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.GET, value = "/rest/sample/downloadExcel")
	public void downloadExcel(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper helper = new PlatFormRequestHelper(request);
		String fileName = helper.getParameter("fileName");
		
		try {
			
			String SPLR_NA_TRPL_C = "8801099000016";
			String SEARCH_TYPE = "default";
			String DEL_YN = "Y";
			
			List<TbCmBzplVO> codeList = codeService.getNABizPlace(SPLR_NA_TRPL_C, SEARCH_TYPE, DEL_YN);
			String[] header = {"가","나","다","라","마","바"};
			String[] keyIndex = {"NA_BZPLC","SHRT_BZPLNM","BZPL_TPC","BZPL_DTI_TPC","BZPL_TPNM","BZPL_DTI_TPNM"};
			
			AbstractModel model = new DefaultModel("마스터", header, keyIndex, codeList);
			AbstractModel model2 = new DefaultModel("디테일", header, keyIndex, codeList);
			ExcelFileMaker excelMaker = new ExcelFileMaker();
			excelMaker.createDataSheet(model);
			excelMaker.createDataSheet(model2);
			
			
			Map<String, Object> searchMap = new HashMap<String, Object>();
			searchMap.put("시작일자", "2015-05-01");
			searchMap.put("종료일자", "2015-05-31");
			excelMaker.createSearchSheet(searchMap);
			
			excelMaker.write(response, fileName);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendResponse(response, e.getMessage());
		}
	}
	
	@RequestMapping(value = "/rest/common/fileValid", method = RequestMethod.POST)
	public void fileValid(MultipartHttpServletRequest request, HttpServletResponse response) {
		
		Iterator<String> fileNames =  request.getFileNames();

		try {
			
			PlatformData platformData = new PlatformData();
			DataSet ds = new DataSet("ds_fileValid");		
			ds.addColumn(new ColumnHeader("fileLength", DataTypes.INT));
			ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
			
			while(fileNames.hasNext()) {
				String fileName = fileNames.next();
				List<MultipartFile> files =  request.getFiles(fileName);
				for (MultipartFile file : files) {
					int row = ds.newRow();
					ds.set(row, "fileSize", file.getSize());
					ds.set(row, "fileLength", files.size());
				}
			}
			
			platformData.addDataSet(ds);
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	@Override
	public ModelAndView resolveException(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception e) {
		
		if (e instanceof MaxUploadSizeExceededException) {
			
			PlatformData platformData = new PlatformData();
			DataSet ds = new DataSet("ds_fileValid");		
			ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
			ds.addColumn(new ColumnHeader("fileLength", DataTypes.INT));
			int row = ds.newRow();
			ds.set(row, "fileSize", -99);
			ds.set(row, "fileLength", -99);
			platformData.addDataSet(ds);
			sendData(response, platformData);
			return null;
		}
		return null;
	}
	
	/**
	 * 신규추가 항목 경로추가
	 * @param path 기본 파일경로
	 * @param add 추가할 파일경로(배열 수에 따라 하위경로추가)
	 * @return
	 */
	private String addPath(String path, String... add) {
		for (String s : add) {
			if (!StringUtils.isEmpty(s)) {
				path += File.separator + s;
			}
		}
		return path;
	}
	
	/**
	 * 파라매터 공백, 경로문자 체크
	 * @param param
	 * @return
	 */
	private boolean isValidParam(String param) {
		if (StringUtils.isEmpty(param)) {
			logger.info(param + " is empty");
			return false;
		} else {
			if (param.indexOf("/") != -1) {
				logger.info(param + " : Invalid parameter(TYPE 1)");
				return false;
			} else if (param.indexOf("\\") != -1) {
				logger.info(param + " : Invalid parameter(TYPE 2)");
				return false;
			} else if (param.indexOf(".") != -1) {
				logger.info(param + " : Invalid parameter(TYPE 3)");
				return false;
			} else if (param.indexOf("&") != -1) {
				logger.info(param + " : Invalid parameter(TYPE 4)");
				return false;
			}
		}
		return true;
	}
}