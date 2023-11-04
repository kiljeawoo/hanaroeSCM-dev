package com.nh.escm.pt.msgamn.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.co.ultari.processor.SyncService;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.msgamn.service.UsrAmnService;
import com.nh.escm.pt.msgamn.vo.MgSmsInfoVO;
import com.nh.escm.pt.msgamn.vo.UsrAmnVO;

@RestController
public class UsrAmnController extends AbstractController {
	@Autowired
	private UsrAmnService usrAmnService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/retrieveEmpeAmnList")
	public void retrieveEmpeAmnList(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		
		String auth = null;
		String user_id = requestHelper.getUserID();
		String dept_id = null;
		String dept_sort = null;

		try {
			List<UsrAmnVO> vo = usrAmnService
					.retrieveCheckAuth(user_id);

			if (vo != null && vo.size() > 0) {

				for (UsrAmnVO compvo : vo) {
					dept_id = compvo.getDEPT_ID();
					auth = compvo.getAUTH_TYPE_CD();					
				}
			}

			List<UsrAmnVO> dvo = usrAmnService
					.retrieveDeptAmn(dept_id);
			
			if (dvo != null && dvo.size() > 0) {

				for (UsrAmnVO compvo : dvo) {
					dept_sort = compvo.getDEPT_SORT();
				}
			}
			/*
			 * 3 : 부관리자  
			 * 2 : 팀관리자
			 * 1 : 일반사용자
			 */
			List<UsrAmnVO> vo2 = null;
			if("2".equals(auth)){
				vo2 = usrAmnService.retrieveEmpeTeam(dept_id);
			}else if("3".equals(auth)){	
				dept_sort = dept_sort.substring(0, 5);
				vo2 = usrAmnService.retrieveEmpeList(dept_sort);
			}else if("4".equals(auth)){	
				dept_sort = dept_sort.substring(0, 2);
				vo2 = usrAmnService.retrieveEmpeList(dept_sort);
			}

			DataSetHelper dsEdiHelper = new DataSetHelper("ds_dep");

			dsEdiHelper.addColumns(UsrAmnVO.class);

			if (vo2 != null && vo2.size() > 0) {

				for (UsrAmnVO compvo : vo2) {
					dsEdiHelper.setData(compvo);
				}

			}

			platformData.addDataSet(dsEdiHelper.getDataSet());

			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1,
					"error.message.server.exception");

		}
                
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/retrieveEmpeAmnListpop")
	public void retrieveEmpeAmnListpop(HttpServletRequest request, HttpServletResponse response) {		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		
//		String dept_sort = requestHelper.getParameter("dept_sort");
//		String dept_level = requestHelper.getParameter("dept_level");
		String deptName = requestHelper.getParameter("deptName");
		try {
			// System.out.println("검색어 : "+deptName);
//			if("1".equals(dept_level)){
//				dept_sort = dept_sort.substring(0, 2);
//			}else if("2".equals(dept_level)){
//				dept_sort = dept_sort.substring(0, 5);
//			}else if("3".equals(dept_level)){
//				dept_sort = dept_sort.substring(0, 7);
//			}

			List<UsrAmnVO> vo2 = usrAmnService
					.retrieveEmpeAmnListpop(deptName);

			DataSetHelper dsEdiHelper = new DataSetHelper("ds_dept");

			dsEdiHelper.addColumns(UsrAmnVO.class);

			if (vo2 != null && vo2.size() > 0) {

				for (UsrAmnVO compvo : vo2) {
					dsEdiHelper.setData(compvo);
				}

			}

			platformData.addDataSet(dsEdiHelper.getDataSet());

			sendData(response, platformData);

		} catch (AppetizerException e) {
			e.printStackTrace();
			sendData(response, platformData, -1,
					"error.message.server.exception");

		}
                
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/retrieveUserAmnList")
	public void retrieveUserAmnList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String dept_id = requestHelper.getParameter("dept_id");

		PlatformData platformData = new PlatformData();
		
		try {			
			List<UsrAmnVO> vo = usrAmnService
					.retrieveUserAmnList(dept_id);
			String usrCnt = usrAmnService.getUserAmnCnt(dept_id);
			DataSetHelper dsEdiHelper = new DataSetHelper("ds_user");

			dsEdiHelper.addColumns(UsrAmnVO.class);

			if (vo != null && vo.size() > 0) {

				for (UsrAmnVO compvo : vo) {
					dsEdiHelper.setData(compvo);
				}

			}
			DataSet usrCntDs = new DataSet("ds_usr_cnt");//하위팀 직원수 Count
			usrCntDs.addColumn("USER_CNT", DataTypes.STRING);
			usrCntDs.newRow();
			usrCntDs.set(0, "USER_CNT", usrCnt);

			platformData.addDataSet(dsEdiHelper.getDataSet());
			platformData.addDataSet(usrCntDs);

			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1,
					"error.message.server.exception");

		}
                
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/insertUserAmn")
	public void insertUserAmn(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet ds_user = requestHelper.getDataSet("ds_user");
		
		String srcFileName = ds_user.getString(0, "PIC_FL_TMP_NM");
		String srcDir = Configurer.getProperty("file.temp.path");
		String dstDir = Configurer.getProperty("file.picture.path");
		String photoDir = Configurer.getProperty("file.photo.path");
		
		try 
		{
			if(srcFileName!=null){
				FileUtil.copyFile(srcDir, srcFileName, photoDir, ds_user.getString(0, "USER_ID")+".jpg");
				FileUtil.moveFile(srcDir, dstDir, srcFileName);
			}
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
		}

		try {
			UsrAmnVO vo = new UsrAmnVO();
			vo.setUSER_ID(ds_user.getString(0, "USER_ID"));
			vo.setDEPT_ID(ds_user.getString(0, "DEPT_ID"));
			vo.setUSER_NAME(ds_user.getString(0, "USER_NAME"));
			vo.setDEPT_NAME(ds_user.getString(0, "DEPT_NAME"));
			vo.setPOS(ds_user.getString(0, "POS"));
			vo.setGRADE(ds_user.getString(0, "GRADE"));
			vo.setJOB(ds_user.getString(0, "JOB"));
			vo.setPHONE(ds_user.getString(0, "PHONE"));
			vo.setMOBILE(ds_user.getString(0, "MOBILE"));
			vo.setEMAIL(ds_user.getString(0, "EMAIL"));
			vo.setUSER_SORT(ds_user.getString(0, "USER_SORT"));
			vo.setPIC_FL_NM(ds_user.getString(0, "PIC_FL_NM"));
			vo.setPIC_FL_TMP_NM(srcFileName);
			vo.setAUTH_TYPE_CD(ds_user.getString(0, "AUTH_TYPE_CD"));
			
			if(StringUtils.isEmpty(ds_user.getString(0, "AUTH_TYPE_CD"))){
				logger.info("USER_ID : " + ds_user.getString(0, "USER_ID") + " / AUTH_TYPE_CD : " + ds_user.getString(0, "AUTH_TYPE_CD"));
				sendData(response, new PlatformData(), -1,
						"msg.omg_ds_sc_4911.auth_type_cd.null");
			}else{
				logger.info("USER_ID : " + ds_user.getString(0, "USER_ID") + " / AUTH_TYPE_CD : " + ds_user.getString(0, "AUTH_TYPE_CD"));
			}
			usrAmnService.insertUserAmn(vo);
	
			sendData(response, new PlatformData());


		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1,
					"error.message.server.exception");
		}
                
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/updateUserAmn")
	public void updateUserAmn(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet ds_user = requestHelper.getDataSet("ds_user");
		
		String srcFileName = ds_user.getString(0, "PIC_FL_TMP_NM");
		String srcDir = Configurer.getProperty("file.temp.path");
		String dstDir = Configurer.getProperty("file.picture.path");
		String photoDir = Configurer.getProperty("file.photo.path");
		
		try 
		{
			if(srcFileName!=null){
				FileUtil.copyFile(srcDir, srcFileName, photoDir, ds_user.getString(0, "USER_ID")+".jpg");
//				System.out.println("USER_ID : "+ds_user.getString(0, "USER_ID"));
				FileUtil.moveFile(srcDir, dstDir, srcFileName);
//				System.out.println("srcFileName : "+srcFileName);
			}
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
		}

		try {
			UsrAmnVO vo = new UsrAmnVO();
			vo.setUSER_ID(ds_user.getString(0, "USER_ID"));
			vo.setDEPT_ID(ds_user.getString(0, "DEPT_ID"));
			vo.setUSER_NAME(ds_user.getString(0, "USER_NAME"));
			vo.setDEPT_NAME(ds_user.getString(0, "DEPT_NAME"));
			vo.setPOS(ds_user.getString(0, "POS"));
			vo.setGRADE(ds_user.getString(0, "GRADE"));
			vo.setJOB(ds_user.getString(0, "JOB"));
			vo.setPHONE(ds_user.getString(0, "PHONE"));
			vo.setMOBILE(ds_user.getString(0, "MOBILE"));
			vo.setEMAIL(ds_user.getString(0, "EMAIL"));
			vo.setUSER_SORT(ds_user.getString(0, "USER_SORT"));
			vo.setPIC_FL_NM(ds_user.getString(0, "PIC_FL_NM"));
			vo.setPIC_FL_TMP_NM(srcFileName);
			vo.setAUTH_TYPE_CD(ds_user.getString(0, "AUTH_TYPE_CD"));
			
//			System.out.println("PIC_FL_NM : "+ds_user.getString(0, "PIC_FL_NM"));
			
			usrAmnService.updateUserAmn(vo);
			
			sendData(response, new PlatformData());

		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1,
					"error.message.server.exception");
		}
                
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/deleteUserAmn")
	public void deleteUserAmn(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_select = requestHelper.getDataSet("ds_select");

		
		try {
			for(int i=0 ; i<ds_select.getRowCount();i++){
				usrAmnService.deleteUserAmn(ds_select.getString(i, "USER_ID"));
			}
			
			sendData(response, new PlatformData());

		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1,
					"error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/checkUserAmnid")
	public void checkUserAmnid(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String user_id = requestHelper.getParameter("user_id");
		PlatformData platformData = new PlatformData();
		
		try {
			List<UsrAmnVO> vo = usrAmnService.checkUserAmnid(user_id);

			DataSetHelper dsEdiHelper = new DataSetHelper("ds_userchk");

			dsEdiHelper.addColumns(UsrAmnVO.class);

			if (vo != null && vo.size() > 0) {

				for (UsrAmnVO compvo : vo) {
					dsEdiHelper.setData(compvo);
				}

			}

			platformData.addDataSet(dsEdiHelper.getDataSet());

			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1,
					"error.message.server.exception");
		}

	}
	

	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/SyncUserAmn")
	public void SyncUserAmn(HttpServletRequest request, HttpServletResponse response) {
		try {
			
			SyncService ss = new SyncService();

			Boolean orgOk = ss.OrgSyncService();

			if(orgOk){
				sendData(response, new PlatformData(), 1, null);
			}else{
				sendData(response, new PlatformData(), 0, null);
			}

		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1,
					"error.message.server.exception");
		} catch (Exception e) {
			sendData(response, new PlatformData(), -1,
					"error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/SyncPicture")
	public void SyncPicture(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		DataSet ds_select = requestHelper.getDataSet("ds_select");
		Boolean photoOk = true;
		Boolean temp = null;
		try {			
			SyncService ss = new SyncService();
			
			for(int i=0 ; i<ds_select.getRowCount();i++){
//				System.out.println("USER_ID : "+ds_select.getString(i,"USER_ID"));
				temp = ss.PhotoSyncService(ds_select.getString(i, "USER_ID")); // "id"는 동기화할 부서 아이디(String)
//				System.out.println("temp : "+temp);
				photoOk = photoOk & temp;
			}
//			System.out.println("photoOk : "+photoOk);
			if(photoOk){
				sendData(response, new PlatformData(), 1, null);
			}else{
				sendData(response, new PlatformData(), 0, null);
			}

		}  catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1,
					"error.message.server.exception");
		} catch (Exception e) {
			sendData(response, new PlatformData(), -1,
					"error.message.server.exception");
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/pt/retrievePicture")
	public void retrievePicture(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		String user_id = requestHelper.getParameter("user_id");
		PlatformData platformData = new PlatformData();
		
		try {
			List<UsrAmnVO> vo = usrAmnService.retrievePicture(user_id);

			DataSetHelper dsEdiHelper = new DataSetHelper("ds_user");
			
			byte[] picture = null;
			String path = null;
			String sep = File.separator;
			dsEdiHelper.addColumns(UsrAmnVO.class);
			if (vo != null && vo.size() > 0) {
				for (UsrAmnVO compvo : vo) {
					if (compvo.getPIC_FL_TMP_NM() != null) {
						path = Configurer.getProperty("file.picture.path")
								+ sep + compvo.getPIC_FL_TMP_NM();
						picture = FileUtil.readToByte(path);
						compvo.setPICTURE(picture);
					}
					
					
					dsEdiHelper.setData(compvo);
				}

			}
			platformData.addDataSet(dsEdiHelper.getDataSet());

			sendData(response, platformData);

		}  catch (IOException e) {
			sendData(response, platformData, -1,
					"error.message.server.exception");
		} catch (AppetizerException e) {
			sendData(response, platformData, -1,
					"error.message.server.exception");

		}
	}
	
	
	/**
	 * 업무시간외 문의대응 SMS
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/sendSMS")
	public void sendSMS(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String content = requestHelper.getParameter("content");
			String userId = requestHelper.getUserID();
			
			if (StringUtils.isEmpty(content)) {
				throw new AppetizerException("error.message.required.parameters");
			}
			
			List<MgSmsInfoVO> list = usrAmnService.getMgSmsInfo();
			
			if (list != null && list.size() > 0) {
//				long startDtm = Long.parseLong(((MgSmsInfoVO) list.get(0)).getSTART_DTM());
//				long endDtm = Long.parseLong(((MgSmsInfoVO) list.get(0)).getEND_DTM());
//				long currentDtm = Long.parseLong(DateUtil.getCurrentDate("yyyyMMddHHmmss"));
				
//				if (startDtm <= currentDtm || currentDtm <= endDtm) { // 업무시간외
					for (MgSmsInfoVO vo : list) {
						Map<String, Object> param = new HashMap<String, Object>();
						param.put("MSG_ID", usrAmnService.getSmsSequence());
						param.put("USER_ID", userId);
						param.put("SCHEDULE_TYPE", 0);
						param.put("SUBJECT", "");
						param.put("SMS_MSG", content + "[" + userId + "]");
						param.put("SEND_DATE", com.esum.appetizer.util.DateUtil.getCurrentDate("yyyyMMddHHmmss"));
						param.put("DEST_TYPE", "0");
						param.put("DEST_COUNT", "0");
						param.put("DEST_INFO", vo.getNAME() + "^" + vo.getMOBILE());
						param.put("SEND_STATUS", 0);
						param.put("SEND_COUNT", 0);
						param.put("SEND_RESULT", 0);
						param.put("RESERVED1", "");
						param.put("CALLBACK", "15221211");
						
						usrAmnService.insertSmsSend(param); // SMS 전송
					}
					sendData(response, new PlatformData());
					return; // 성공
//				}
			}
			
			sendData(response, new PlatformData(), -1, "이용가능시간 [평일] 18:00 ~ 09:00(익일) / [휴일] 00:00 ~ 23:59 입니다");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/**
	 * 업무시간외 문의대응 SMS
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/checkOpenSMS")
	public void checkOpenSMS(HttpServletRequest request, HttpServletResponse response) {
		try {
			List<MgSmsInfoVO> list = usrAmnService.getMgSmsInfo();
			
			if (list != null && list.size() > 0) {
				long startDtm = Long.parseLong(((MgSmsInfoVO) list.get(0)).getSTART_DTM());
				long endDtm = Long.parseLong(((MgSmsInfoVO) list.get(0)).getEND_DTM());
				long currentDtm = Long.parseLong(DateUtil.getCurrentDate("yyyyMMddHHmmss"));
				
				if (startDtm <= currentDtm || currentDtm <= endDtm) { // 업무시간외
					sendData(response, new PlatformData());
					return; // 성공
				}
			}
			
			sendData(response, new PlatformData(), -1, "");
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
}
