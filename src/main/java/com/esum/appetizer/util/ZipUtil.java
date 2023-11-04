package com.esum.appetizer.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.lingala.zip4j.core.ZipFile;
import net.lingala.zip4j.exception.ZipException;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;

/**
 * Zip Utils.
 */
public class ZipUtil {

	public static File createZipFile(File inputFile) throws IOException {
		String zipFileName = inputFile.getAbsolutePath() + ".zip";
		return createZipFile(inputFile, zipFileName);
	}

	public static File createZipFile(File inputFile, String zFileName)
			throws IOException {
		String zipFileName = zFileName;
		if (!inputFile.exists() || !inputFile.isFile()) {
			throw new IOException("The " + inputFile.getName()
					+ " file is not existed.");
		}

		if (StringUtils.isEmpty(zipFileName))
			zipFileName = inputFile.getAbsolutePath() + ".zip";

		ZipOutputStream zos = null;
		BufferedInputStream inBuffer = null;
		try {
			zos = new ZipOutputStream(new FileOutputStream(zipFileName));

			ZipEntry entry = new ZipEntry(inputFile.getPath().replace(
					File.separatorChar, '/'));
			entry.setTime(inputFile.lastModified());
			zos.putNextEntry(entry);

			
			
			inBuffer = new BufferedInputStream(new FileInputStream(inputFile));
			IOUtils.copy(inBuffer, zos);
		} finally {
			if (inBuffer != null)
				inBuffer.close();
			zos.close();
			if (zos != null)
				zos.close();
			zos = null;
		}

		return new File(zipFileName);
	}

	public static byte[] singleZipFileToByteArray(File inputFile)
			throws IOException {

		if (!inputFile.exists() || !inputFile.isFile()) {
			throw new IOException("The " + inputFile.getName()
					+ " file is not existed.");
		}

		ByteArrayOutputStream out = null;
		ZipOutputStream zos = null;
		BufferedInputStream inBuffer = null;
		try {
			out = new ByteArrayOutputStream();
			zos = new ZipOutputStream(out);

			ZipEntry entry = new ZipEntry(inputFile.getPath().replace(
					File.separatorChar, '/'));
			entry.setTime(inputFile.lastModified());
			zos.putNextEntry(entry);

			inBuffer = new BufferedInputStream(new FileInputStream(inputFile));
			IOUtils.copy(inBuffer, zos);
			return out.toByteArray();
		} finally {
			if (inBuffer != null)
				inBuffer.close();
			zos.close();
			if (zos != null)
				zos.close();
			zos = null;
		}
	}

	public static void unZip(String sourceFile, String destination, String password) {
	    try {
	         ZipFile zipFile = new ZipFile(sourceFile);
	         if (zipFile.isEncrypted()) {
	            zipFile.setPassword(password);
	         }
	         zipFile.extractAll(destination);
	    } catch (ZipException e) {
	        e.printStackTrace();
	    }
		
	}
	
	public static boolean isZipFile(String sourceFile) {
		return FilenameUtils.getExtension(sourceFile).toUpperCase().equals("ZIP");
	}
	
	public static List<File> unZipToDir(File zipFile, File outPath)
			throws IOException {
		byte[] zipData = IOUtils.toByteArray(new FileInputStream(zipFile));
		return unzipToDir(zipData, outPath);
	}

	public static List<File> unzipToDir(byte[] zipData, File outPath)
			throws IOException {

		List<File> extractedFiles = new ArrayList<File>();

		ZipInputStream zis = null;
		try {
			zis = new ZipInputStream(new ByteArrayInputStream(zipData));

			ZipEntry entry = null;
			while(true) {
				entry = zis.getNextEntry();
				if(entry == null) {
					break;
				}
	
				File entryFile = null;
				if (outPath != null)
					entryFile = new File(outPath, FileUtil.parseFileName(entry
							.getName().replace('/', File.separatorChar)));
				else
					entryFile = new File(FileUtil.parseFileName(entry.getName()
							.replace('/', File.separatorChar)));

				BufferedOutputStream outBuffer = null;
				try {
					outBuffer = new BufferedOutputStream(new FileOutputStream(
							entryFile));
					IOUtils.copy(zis, outBuffer);
					extractedFiles.add(entryFile);
				} finally {
					IOUtils.closeQuietly(outBuffer);
				}
			}
		} finally {
			if (zis != null)
				zis.close();
		}

		return extractedFiles;
	}

	public static byte[] unzip(byte[] inputData) throws IOException {
		ByteArrayInputStream in = new ByteArrayInputStream(inputData);
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		ZipInputStream zis = new ZipInputStream(in);

		try {
			IOUtils.copy(zis, out);

			return out.toByteArray();
		} finally {
			IOUtils.closeQuietly(out);
			IOUtils.closeQuietly(in);
			IOUtils.closeQuietly(zis);
			
		}

	}

	public static byte[] zip(List<File> fileList) throws IOException {
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		ZipOutputStream zos = new ZipOutputStream(bos);

		for (int i = 0; i < fileList.size(); i++) {
			File file = fileList.get(i);

			ZipEntry entry = new ZipEntry(file.getName());

			entry.setTime(file.lastModified());
			zos.putNextEntry(entry);

			FileInputStream fis = new FileInputStream(file);

			IOUtils.copy(fis, zos);

			IOUtils.closeQuietly(fis);
		}
		byte[] rtnBytes=  bos.toByteArray();
		IOUtils.closeQuietly(bos);
		IOUtils.closeQuietly(zos);

		return rtnBytes;
	}

	/**
	 * 복수 파일 Zip 다운로드
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @param fileList 파일경로목록
	 * @param zipName 파일명(default : eSCM_날짜.zip)
	 * @throws IOException
	 */
	public static void makeZip(HttpServletRequest request, HttpServletResponse response, List<Map<String, String>> fileList, String zipName) throws IOException {
		int fileIdx = 1;
		int size = 1024; // buffer size
		byte[] buf = new byte[size];
		String outputName = "eSCM";
		if (zipName != null && !"".equals(zipName.trim())) {
			outputName = zipName;
		}
		outputName += "_" + DateUtil.convertDateToString("yyyyMMddHHmmss", DateUtil.getCurrentDate());
		outputName = URLEncoder.encode(outputName, "UTF-8");

		FileInputStream fis = null;
		ZipArchiveOutputStream zos = null;
		BufferedInputStream bis = null;

		try {
			response.setContentType(request.getContentType());
			response.setHeader("Set-Cookie", "fileDownload=true; path=/");
			response.setHeader("Content-Disposition", "attachment; filename=\"" + outputName + ".zip\";");
			response.setHeader("Content-Transfer-Encoding", "binary");

			// Zip 파일생성
			OutputStream os = response.getOutputStream();
			zos = new ZipArchiveOutputStream(os);
			zos.setEncoding("UTF-8");

			for (Map<String, String> file : fileList) {
				String fileName = file.get("fileName");
				String filePath = file.get("filePath");
				if (new File(filePath).isDirectory() || !new File(filePath).isFile()) {
					continue;
				}

				// buffer에 해당파일의 stream을 입력한다.
				fis = new FileInputStream(filePath);
				bis = new BufferedInputStream(fis, size);

				// zip에 넣을 다음 entry 를 가져온다.
				String eFileName = String.format("%02d_", fileIdx) + new String(fileName.replaceAll("\\\\", "/").getBytes("UTF8"), "UTF8");
				zos.putArchiveEntry(new ZipArchiveEntry(eFileName));

				// 준비된 버퍼에서 집출력스트림으로 write 한다.
				IOUtils.copyLarge(bis, zos, buf);

				IOUtils.closeQuietly(bis);
				IOUtils.closeQuietly(fis);
				zos.closeArchiveEntry();
				fileIdx++;
			}
			IOUtils.closeQuietly(zos);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			IOUtils.closeQuietly(zos);
			IOUtils.closeQuietly(fis);
			IOUtils.closeQuietly(bis);
		}
	}
}