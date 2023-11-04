package com.nh.escm.pds.pricat.util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.commons.compress.utils.IOUtils;

public class MHTParser {
	
	public static List<String> toHtml(File mhtFile, File outputFolder) throws IOException, MessagingException {
		return toHtml(mhtFile, outputFolder, false, null);
	}

	public static List<String> toHtml(File mhtFile, File outputFolder, boolean isAmarket, String amarketWrsC) throws IOException, MessagingException {
		FileInputStream mhtIs = new FileInputStream(mhtFile);
		MimeMessage message = new MimeMessage(Session.getDefaultInstance(new Properties(), null), mhtIs);

		if (message.getContent() instanceof MimeMultipart) {
			outputFolder.mkdirs();
			MimeMultipart mimeMultipart = (MimeMultipart) message.getContent();
			String cont = null;
			String contType = null;
			List<Map<String, String>> imgList = new ArrayList<Map<String, String>>();
			List<String> resultList = new ArrayList<String>();

			for (int i = 0; i < mimeMultipart.getCount(); i++) {
				MimeBodyPart bodyPart = (MimeBodyPart) mimeMultipart.getBodyPart(i);
				String contentType = bodyPart.getContentType();

				if (contentType.contains("text/")) {
					cont = (String) bodyPart.getContent();
					contType = contentType.substring(contentType.indexOf("charset="), contentType.length()).replace("charset=", "").replace("\"", "");
				} else if (contentType.contains("image/")) {
					String fileName = bodyPart.getFileName();
					String id = bodyPart.getContentID();

					if (fileName == null) {
						String[] locationHeader = bodyPart.getHeader("Content-Location");
						if (locationHeader != null && locationHeader.length > 0) {
							fileName = new File(new URL(locationHeader[0]).getFile()).getName();
						}
					}

					if (fileName != null) {
						// 이미지 파일명을 문서명과 통일시킴
						String ext = "";
						if (contentType.contains("image/gif")) {
							ext = ".gif";
						} else if (contentType.contains("image/jpeg")) {
							ext = ".jpg";
						} else if (contentType.contains("image/png")) {
							ext = ".png";
						}
						
						String newName = mhtFile.getName().substring(0, mhtFile.getName().lastIndexOf(".")) + "_img" + imgList.size();// + ext;
						if (isAmarket) {
							newName = amarketWrsC + "_ceimg" + String.format("%02d", (imgList.size() + 1)) + ext;
						}

						// img태그의 src값이 cid:id 형태로 저장되있음
						// ContentID값은 <ID값> 형태로 나오므로 양쪽 부등호 제거
						Map<String, String> map = new HashMap<String, String>();
						map.put("id", "cid:" + id.replace("<", "").replace(">", ""));
						map.put("name", newName);
						imgList.add(map);

						FileOutputStream out = new FileOutputStream(new File(outputFolder, newName));
						IOUtils.copy(bodyPart.getInputStream(), out);
						out.flush();
						out.close();
						
						resultList.add(newName);
					}
				}
			}

			if (cont != null && imgList.size() > 0) {
				for (Map<String, String> map : imgList) {
					String imgPath = map.get("name");
					if (isAmarket) {
						imgPath = "/nhvan/rest/ce/nhmimg/" + amarketWrsC + "/" + imgPath + "/"; 
					}
					cont = cont.replace(map.get("id"), imgPath);
				}
				FileOutputStream out = new FileOutputStream(new File(outputFolder, mhtFile.getName().replace(".mht", ".html")));
				OutputStreamWriter osw = new OutputStreamWriter(out, contType);
				BufferedWriter bufferedWriter = new BufferedWriter(osw);
				bufferedWriter.write(cont);
				bufferedWriter.close();
				osw.close();
				out.close();
			}
			
			if (mhtIs != null) {
				mhtIs.close();
			}
			
			return resultList;
		}
		return null;
	}
}