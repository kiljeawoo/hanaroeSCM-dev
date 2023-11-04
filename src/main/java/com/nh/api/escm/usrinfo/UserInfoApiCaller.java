package com.nh.api.escm.usrinfo;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.lang.reflect.Method;
import java.util.*;

import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.nh.api.ApiResponse;
import com.nh.api.SequenceManager;
import com.nh.api.Utils;
import com.nh.api.client.ApiClient;


public class UserInfoApiCaller{
	/*
	    * 화면ID : MLS_DS_SC_1074
	    * 화면명 : 정산관리 [친환경 농산물 집계내역(농산물)] Master
	    */   
  public Map<String,Object> OM097Calling(String usrid,  String emailDpzAdr){
      //API
  OM097 msg = new OM097();
  msg.setIfTypeCode("OM097");
  msg.setSendNum(SequenceManager.getInstance().create(msg.getId(), msg.getSendDate()));

  //입력파라메터         
  msg.setUsrid(usrid);
//	  msg.setUsrid("20380883");
	  msg.setEmailDpzAdr(emailDpzAdr);
//	  msg.setEmailDpzAdr("nh068@naver.com");

	  // 테스트 URL
  ApiResponse respMessage = new ApiClient("http://121.156.58.244:39080/proxy/handler").send(msg);
  
  System.out.println("caller 완료");
  Map<String, Object> usrInfo = new HashMap<String, Object>();
  
  // 웹에서 구현 (설정 사용하도록 구현)
//	      ApiResponse respMessage = new ApiClient().send(msg);
  
  // Result [출력정의]
  try (InputStream in = respMessage.getBodyAsStream()) {
	 
	  usrInfo.put("intfId", new String(Utils.readToString(in, 5).trim()));	//업무유형코드
	  usrInfo.put("tmsDt", new String(Utils.readToString(in, 8).trim()));	//전송일자
	  usrInfo.put("tmsNo", new String(Utils.readToString(in, 7).trim()));	//전송번OM097
	  usrInfo.put("usridRes", new String(Utils.readToString(in, 14).trim()));	//사용자 ID
	  usrInfo.put("repNaBzplc", new String(Utils.readToString(in, 13).trim()));	//대표스마트 유통 사업장코드
	  usrInfo.put("mgrYn", new String(Utils.readToString(in, 1).trim()));	// 책임자여부
	  usrInfo.put("tgrmRspC", new String(Utils.readToString(in, 4).trim()));	// 전문응답코드
	  usrInfo.put("intfRspCntn", new String(Utils.readToString(in, 200).trim()));	// 인터페이스 응답내용
  
     System.out.println("097 caller 자르기 완료3");
     
//	            list.add(vo);
//	            return list;
     } catch (IOException e) {
    	 throw new AppetizerException(e);
	 }
  return usrInfo;
//  return null;
  }
   
   
   public Map<String,Object> OM098Calling(String usrid){
	      //API
	  OM098 msg = new OM098();
	  msg.setIfTypeCode("OM098");
	  msg.setSendNum(SequenceManager.getInstance().create(msg.getId(), msg.getSendDate()));

	  //입력파라메터         
	  msg.setUsrid(usrid);
//	   msg.setUsrid("20380883");
	  
	  // 테스트 URL
	  ApiResponse respMessage = new ApiClient("http://121.156.58.244:39080/proxy/handler").send(msg);
	  
	  System.out.println("caller 완료");
	  
	  // Result [출력정의]
	  try (InputStream in = respMessage.getBodyAsStream()) {
	     
	     Map<String, Object> usrInfo = new HashMap<String, Object>();
	     usrInfo.put("intfId", new String(Utils.readToString(in, 5).trim())); //업무유형코드
	     usrInfo.put("tmsDt", new String(Utils.readToString(in, 8).trim())); //전송일자
	     usrInfo.put("tmsNo", new String(Utils.readToString(in, 7).trim())); //전송번호
	     usrInfo.put("usridRes", new String(Utils.readToString(in, 14).trim())); //사용자 ID
	     usrInfo.put("repNaBzplc", new String(Utils.readToString(in, 13).trim())); //대표스마트 유통 사업장코드
	     usrInfo.put("mgrYn", new String(Utils.readToString(in, 1).trim())); //책임자여부
	     usrInfo.put("tgrmRspC", new String(Utils.readToString(in, 4).trim())); //전문응답코드
	     usrInfo.put("intfRspCntn", new String(Utils.readToString(in, 200).trim())); //인터페이스 응답내용
	     
	     System.out.println("098 caller 자르기 완료3");
	     
	     return usrInfo;
	     
	  } catch (IOException e) {
		  throw new AppetizerException(e);
	  }
   }
}
