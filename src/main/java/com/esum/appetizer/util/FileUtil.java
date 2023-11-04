package com.esum.appetizer.util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.esum.appetizer.exception.AppetizerException;

public class FileUtil extends org.apache.commons.io.FileUtils {
    private static Logger log = LoggerFactory.getLogger(FileUtil.class);
    
	private static String sep = File.separator;
	public static final String lineSeparator = System.getProperty("line.separator");
	
	public static void copyFile(String src, String dst) throws IOException {
		FileUtils.copyFile(new File(src), new File(dst));

	}
	
	public static void copyFile(String srcDir, String dstDir, String fileName) 
		throws IOException{
		copyFile(srcDir + sep + fileName, dstDir + sep + fileName);
	}

	public static void copyFile(String srcDir, String srcFileName, String dstDir, String dstFileName) 
		throws IOException {
		copyFile(srcDir + sep + srcFileName, dstDir + sep + dstFileName);
	}

	public static boolean deleteFile(String fileName) {
		boolean b_rslt = false;

		File f = new File(fileName);
		
		if (f.isFile())	{
			b_rslt = f.delete();
			
			if (b_rslt)
				log.debug(fileName +" file is deleted.");
			else
				log.debug(fileName +" file is not deleted.");
		}
		
		return b_rslt;
	}

	public static boolean deleteFile(String dir, String fileName) throws IOException {
		return deleteFile(dir + sep + fileName);
	}

	public static void moveFile(String srcFileName, String dstFileName) throws IOException {
		File srcFile = new File(srcFileName);
		File dstFile = new File(dstFileName);
		
		if (srcFile.exists() && !srcFile.renameTo(dstFile))	{
			copyFile(srcFileName, dstFileName);
			deleteFile(srcFileName);
		}
	}

	public static void moveFile(String srcDir, String dstDir, String fileName)
		throws IOException {
		copyFile(srcDir, dstDir, fileName);
		deleteFile(srcDir, fileName);
	}

	public static String parseFilePath(String filePath)	{
		if (filePath == null)
			return null;

		int index = filePath.lastIndexOf("\\");
		
		if (index < 0) {
			index = filePath.lastIndexOf("/");
		}
		
		if (index < 0) {
			return null;
		} else {
			return filePath.substring(0, index);
		}
	}

	public static String parseFileName(String filePath)	{
		if (filePath == null)
			return null;

		int index = filePath.lastIndexOf("\\");
		
		if (index < 0) {
			index = filePath.lastIndexOf("/");
		}
		
		if (index < 0) {
			return filePath;
		} else {
			return filePath.substring(index + 1);
		}
	}
    
    public static String parseFileName(String filePath, String seperator) {
        String sep = seperator;
        
        if (filePath == null) {
            return null;
        }
        
        if (sep == null) {
            sep = FileUtil.sep;
        }
        
        int index = filePath.lastIndexOf(sep);
        
        if (index < 0) {
            return filePath;
        } else {
            return filePath.substring(index + 1);
        }
    }

	public static void writeToFile(File file, byte[] data, String encoding) throws FileNotFoundException, UnsupportedEncodingException, IOException {
		
		if(data==null || data.length==0)
			throw new IOException("input data is empty. can not write to file.");
		
		FileOutputStream out = null;
		OutputStreamWriter writer = null;

		try{
			out = new FileOutputStream(file);
			writer = new OutputStreamWriter(out, encoding);
			
			out.write(data, 0, data.length);
		} finally{
			IOUtils.closeQuietly(out);
			IOUtils.closeQuietly(writer);
		}
	}

	public static void writeToFile(File file, byte[] data) throws FileNotFoundException, UnsupportedEncodingException, IOException {
		if(data==null || data.length==0)
			throw new IOException("input data is empty. can not write to file.");
		
		FileUtils.writeByteArrayToFile(file, data);
	}
	
	public static File writeToFileWithResevedDir(String parentDir, String fileName, byte[] data, 
			String reservedDir) throws IOException {
		if(data==null || data.length==0)
			throw new IOException("Could not write to file. data is empty.");
		
		if(log.isDebugEnabled())
			log.debug("Writing data to file. length : "+data.length);
		
		File file = null;
		try {
			File dir = new File(parentDir);
			if (!dir.exists())
				dir.mkdirs();
			
			file = new File(dir + File.separator + fileName);
			FileUtils.writeByteArrayToFile(file, data);
		} catch (AppetizerException e) {
			log.warn("could not write to target file. save the reserved directory. filename : "+fileName, e);
			File dir = new File(reservedDir);
			if (!dir.exists())
				dir.mkdirs();
			
			file = new File(reservedDir + File.separator + fileName);
			FileUtils.writeByteArrayToFile(file, data);
		}
		
		return file;
	}
	
	public static byte[] readToByte(String filePath) throws IOException {
		InputStream input = null;
		try{
			input = new FileInputStream(new File(filePath));
			return IOUtils.toByteArray(input);
		}finally{
			IOUtils.closeQuietly(input);
		}
	}
	
	public static byte[] readToByte(File file) throws IOException {
		InputStream input = null;
		try{
			input = new FileInputStream(file);
			return IOUtils.toByteArray(input);
		}finally{
			IOUtils.closeQuietly(input);
		}
	}
	
	public static byte[] readToByte(String filePath, String encoding) throws IOException {
		FileInputStream fIn = null;
		InputStreamReader input = null;
		try{
			fIn = new FileInputStream(new File(filePath));
			input = new InputStreamReader(fIn, encoding);
			return IOUtils.toByteArray(input);
		}finally{
			IOUtils.closeQuietly(fIn);
			IOUtils.closeQuietly(input);
		}
	}
	
	public static String readToString(String filePath) throws IOException {
		return new String(readToByte(filePath), SysConstants.DEFAULT_ENCODING);
	}

	public static String readToString(String filePath, String encoding) throws IOException {
		InputStream fIn = null;
		try {
			fIn = FileUtils.openInputStream(new File(filePath));
			return IOUtils.toString(fIn, encoding);
		} finally {
			IOUtils.closeQuietly(fIn);
		}
	}

	public static Object readObject(String filePath) 
		throws IOException, ClassNotFoundException	{
		
		FileInputStream in = null;
		ObjectInputStream objIn = null;
		try{
			in = new FileInputStream(filePath);
			objIn = new ObjectInputStream(in);
			Object obj = objIn.readObject();
			if (obj != null)
				return obj;
			else
				return null;
		} finally{
			if (in != null)
				in.close();
			in = null;
		}
	}

	public static void writeToObject(String fileName, Object obj) throws IOException {
		FileOutputStream out = null;
		ObjectOutputStream objOut = null;
		try {
			out = new FileOutputStream(fileName);
			objOut = new ObjectOutputStream(out);
			objOut.writeObject(obj);
			objOut.flush();
		} catch (IOException e) {
			throw e;
		} finally {
			IOUtils.closeQuietly(objOut);
			objOut = null;
			
			IOUtils.closeQuietly(out);
			out = null;
		}
	}
	
	public static void writeToObject(String fileName, Object obj, boolean useBase64) throws IOException {
		FileOutputStream out = new FileOutputStream(fileName);
		ObjectOutputStream objOut = new ObjectOutputStream(out);
		objOut.writeObject(obj);
		objOut.flush();
		
		if (objOut != null)
			objOut.close();
		
		if (out != null)
			out.close();
		out = null;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static List readLineFromFile(String fileName) 
		throws FileNotFoundException, IOException {
		List readLine = new ArrayList();
		
		/* File Read */ 
		int lineNum = 0;
    	int c = -1;
		int iIndex = 0;
		long fileSize = 0;
		
		FileInputStream fin = null;
		ByteArrayOutputStream bOut = null;
		
		try {
			File fMsgList = new File(fileName);
			fin = new FileInputStream(fMsgList);				
			bOut = new ByteArrayOutputStream();				
			fileSize = fin.available();
		
		    while(true) {
				c = fin.read();
				iIndex++;
				
				if (c == '\0' && fileSize > iIndex) {
					lineNum++;				
					bOut.close();
					
					throw new IOException("Data Error!! Data line has a '0x00' value. Line No: " + lineNum);
				}

				/* read line*/ 
				if (c == '\0' || fileSize == iIndex) {					
					ByteWrapper bwrap = new ByteWrapper(bOut.toByteArray());
					readLine.add(lineNum,bwrap);
					bOut.close();
					
					break;
				}
				
				if(c == '\n') {
					ByteWrapper bwrap = new ByteWrapper(bOut.toByteArray());
					readLine.add(lineNum,bwrap);
					bOut = new ByteArrayOutputStream();
					lineNum++;
				} else {
					bOut.write(c);
				}
		    }
	    } finally {
	    	IOUtils.closeQuietly(fin);
	    	IOUtils.closeQuietly(bOut);
	    	
			fin = null;
			bOut = null;
	    }
	    
		return readLine;
	}	
	
	public static String getAbsolutePath(String path) throws IOException {
		return getAbsolutePath(path, false);
	}
	
	public static String getAbsolutePath(String path, boolean makeFile) throws IOException {
		if (path == null || path.equals("")) {
			throw new IOException("Path Null Error!! Please check the path.");
		}
		
		String realPath = SysUtil.replacePropertyToValue(path);
		
		File file = new File(realPath);
		
		if (!file.isAbsolute()) {
			String absolutePath = System.getProperty("xtrus.home") + File.separator + realPath;
			
			if (System.getProperty("xtrus.home") == null || System.getProperty("xtrus.home").equals("")) {
				throw new IOException("Not found xtrus.home variable. Please set the variable.");
			}
			
			file = new File(absolutePath);
		}
		
		if (file.exists()) {
			return file.getAbsolutePath();
		} else { 
			if (makeFile && file.mkdirs()) {
				return file.getAbsolutePath();
			}

			throw new IOException("Not found " + path + " path.");
		}
	}
	
}
