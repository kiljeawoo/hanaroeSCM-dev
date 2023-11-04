package com.nh.escm.pt.member.controller;

/**
 * <PRE>  
 * 	로그인 Controller
 * </PRE>
 * @author  : 윤기혁
 * @version : 1.0 
 * @since : 2017.09.25
 * @modified
 * @modifier 
 */

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.member.service.MbAuthService;
import com.nh.escm.pt.member.vo.MbAuthVO;

@RestController
public class MbAuthController extends AbstractController {

	@Autowired
	private MbAuthService mbAuthService;

	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/retrieveMemberAuthList")
	public void retrieveMemberAuthList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String menuId = requestHelper.getParameter("menu_id");
		String mbId = requestHelper.getParameter("mb_id");
		String usrNm = requestHelper.getParameter("usr_nm");
		String menuNm = requestHelper.getParameter("menu_name");
		String useYn = requestHelper.getParameter("use_yn");
		MbAuthVO vo = new MbAuthVO();
		vo.setMB_ID(mbId);
		vo.setUSR_NM(usrNm);
		vo.setMENU_ID(menuId);
		vo.setMENU_NM(menuNm);
		vo.setUYN(useYn);

		try {
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper = new DataSetHelper("ds_auth");

			List<Map<String, Object>> list = mbAuthService.retrieveMemberAuth(vo);

			if (list != null && list.size() > 0) {
				dsHelper.addColumns(list.get(0).keySet());
				for (Map<String, Object> map : list) {
					dsHelper.setData(map);
				}
			}

			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/insertMemberAuth")
	public void insertMemberAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String menuId = requestHelper.getParameter("menu_id");
		String mbId = requestHelper.getParameter("mb_id");
		String useYn = requestHelper.getParameter("use_yn");

		try {
			PlatformData platformData = new PlatformData();
			MbAuthVO vo = new MbAuthVO();
			vo.setMB_ID(mbId);
			vo.setMENU_ID(menuId);
			vo.setUYN(useYn);
			vo.setFS_RGM(requestHelper.getUserID());
			vo.setLS_CHGM(requestHelper.getUserID());

			mbAuthService.insertMemberAuth(vo);
			sendData(response, platformData, 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/updateMemberAuth")
	public void updateMemberAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_in = requestHelper.getDataSet("ds_in");
		String useYn = requestHelper.getParameter("use_yn");

		try {
			PlatformData platformData = new PlatformData();
			MbAuthVO vo = new MbAuthVO();
			vo.setMB_ID(ds_in.getString(0, "MB_ID"));
			vo.setMENU_ID(ds_in.getString(0, "MENU_ID"));
			vo.setUYN(useYn);
			vo.setLS_CHGM(requestHelper.getUserID());

			mbAuthService.updateMemberAuth(vo);
			sendData(response, platformData, 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/deleteMemberAuth")
	public void deleteMemberAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_param = requestHelper.getDataSet("ds_param");
		PlatformData platformData = new PlatformData();

		try {
			MbAuthVO vo = new MbAuthVO();
			for (int j = 0; j < ds_param.getRowCount(); j++) {
				vo.setMB_ID(ds_param.getString(j, "MB_ID"));
				vo.setMENU_ID(ds_param.getString(j, "MENU_ID"));

				System.out.println(vo.getMB_ID() + " / " + vo.getMENU_ID());
				mbAuthService.deleteMemberAuth(vo);
			}
			sendData(response, platformData, 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/dupCheckMemberAuth")
	public void dupCheckMemberAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String menuId = requestHelper.getParameter("menu_id");
		String mbId = requestHelper.getParameter("mb_id");
		String uyn = requestHelper.getParameter("uyn");
		MbAuthVO menu = new MbAuthVO();
		if (mbId == null || "".equals(mbId.trim())) {
			menu.setMB_ID(requestHelper.getUserID());	
		} else {
			menu.setMB_ID(mbId);
		}
		menu.setMENU_ID(menuId);
		menu.setUYN(uyn);

		try {
			PlatformData platformData = new PlatformData();

			List<Map<String, Object>> dupChkList = mbAuthService.dupCheckMemberAuth(menu);
			if (dupChkList != null && dupChkList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_authCheck");
				dsHelper.addColumns(dupChkList.get(0).keySet());
				for (Map<String, Object> map : dupChkList) {
					dsHelper.setData(map);
				}

				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData, 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 직매장 여부 체크 
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/checkBranch")
	public void checkBranch(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String branch_dsc = requestHelper.getParameter("branch_dsc");
		
		SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
		String biz_number = box.getBizNumber();  // 로그인 한 사람이 점장인지 체크 

		try {
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper = new DataSetHelper("ds_authBranch");
			
			List<Map<String, Object>> chkList = mbAuthService.checkBranch(branch_dsc, biz_number);
			
			if (chkList != null && chkList.size() > 0) {

				dsHelper.addColumns(chkList.get(0).keySet());
				
				for (Map<String, Object> map : chkList) {
					dsHelper.setData(map);
				}

				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData );
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	/*
	 * 직매장 점장 권한 체크 
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/checkStoreChief")
	public void checkStoreChief(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String branch_dsc = requestHelper.getParameter("branch_dsc");

		SessionBox box = (SessionBox) request.getSession().getAttribute("sessionBox");
		String mb_id = box.getUserID();  // 로그인 한 사람이 점장인지 체크 
		
		try {
			PlatformData platformData = new PlatformData();
			DataSetHelper dsHelper = new DataSetHelper("ds_chiefCheck");  //  ds_authBranch
			
			List<Map<String, Object>> chkList = mbAuthService.checkStoreChief(branch_dsc, mb_id);
			
			if (chkList != null && chkList.size() > 0) {

				dsHelper.addColumns(chkList.get(0).keySet());
				
				for (Map<String, Object> map : chkList) {
					dsHelper.setData(map);
				}

				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData );
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}