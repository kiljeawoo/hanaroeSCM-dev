package com.nh.escm.pt.comn.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.pt.comn.service.MblDvcAmnService;
import com.nh.escm.pt.comn.vo.MblAppVO;
import com.nh.escm.pt.comn.vo.MblDvcAmnVO;
import com.nh.escm.util.PageHelper;

@Controller
public class MblDvcAmnController extends AbstractController {

	@Autowired
	private MblDvcAmnService mblDvcAmnService;

	/* 동일 DeviceID 여부 조회 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/retrieveMblDvcAmn")
	public void retrieveMblDvcAmn(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String USER_ID = requestHelper.getParameter("USER_ID");
		String DVIC_ID = requestHelper.getParameter("DVIC_ID");
//		System.out.println("USER_ID >>> " + USER_ID + ",  DVIC_ID >>>" + DVIC_ID);
		PlatformData platformData = new PlatformData();

		try {
			List<MblDvcAmnVO> devcList = mblDvcAmnService.retrieveMblDvcAmn(USER_ID, DVIC_ID);
			DataSetHelper dsHelper = new DataSetHelper("ds_devcChk");

			if (devcList != null && devcList.size() > 0) {
				dsHelper.addColumns(MblDvcAmnVO.class);
				for (MblDvcAmnVO vo : devcList) {
					dsHelper.setData(vo);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}

	/* 로그인시 ID 및 DeviceID 등록 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/insertMblDvcAmn")
	public void insertMblDvcAmn(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet dsDevc = requestHelper.getDataSet("ds_devc");

		try {
			MblDvcAmnVO vo = new MblDvcAmnVO();

			String APP_ID = "";
			String REG_TP = "";
			String ATTR1 = "";
			String ATTR2 = "";
			String ATTR3 = "";
			String REG_USER_ID = "";
			String REG_DT = "";

			if (dsDevc.getString(0, "USER_ID") != null) {
				vo.setAPP_ID(APP_ID);
				vo.setUSER_ID(dsDevc.getString(0, "USER_ID"));
				vo.setDVIC_ID(dsDevc.getString(0, "DVIC_ID"));
				vo.setREG_TP(REG_TP);
				vo.setATTR1(ATTR1);
				vo.setATTR2(ATTR2);
				vo.setATTR3(ATTR3);
				vo.setREG_USER_ID(REG_USER_ID);
				vo.setREG_DT(REG_DT);

				mblDvcAmnService.insertMblDvcAmn(vo);
			}
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/* APP 푸시설정 조회 (로그인ID) */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/retrievePushInfo")
	public void retrievePushInfo(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		String MB_ID = requestHelper.getParameter("MB_ID");

		try {
			List<MblDvcAmnVO> pushInfoList = mblDvcAmnService.retrievePushInfo(MB_ID);
			DataSetHelper dsHelper = new DataSetHelper("ds_pushInfo");

			if (pushInfoList != null && pushInfoList.size() > 0) {
				dsHelper.addColumns(MblDvcAmnVO.class);
				for (MblDvcAmnVO vo : pushInfoList) {
					dsHelper.setData(vo);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}

	/* 푸시설정 update (로그인ID) */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/updatePushInfo")
	public void updatePushInfo(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_pushInfo = requestHelper.getDataSet("ds_pushInfo");

		try {
			MblDvcAmnVO vo = new MblDvcAmnVO();
			String MB_ID = requestHelper.getParameter("MB_ID");

			if (ds_pushInfo.getString(0, "MB_ID") != null) {
				vo.setMB_ID(MB_ID);
				vo.setPUSH_STSC_A(ds_pushInfo.getString(0, "PUSH_STSC_A"));
				vo.setPUSH_STSC_B(ds_pushInfo.getString(0, "PUSH_STSC_B"));
				vo.setPUSH_STSC_C(ds_pushInfo.getString(0, "PUSH_STSC_C"));
				vo.setPUSH_STSC_D(ds_pushInfo.getString(0, "PUSH_STSC_D"));
				vo.setPUSH_STSC_E(ds_pushInfo.getString(0, "PUSH_STSC_E"));
				vo.setPUSH_STSC_F(ds_pushInfo.getString(0, "PUSH_STSC_F"));

				mblDvcAmnService.updatePushInfo(vo);
			}
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	/* WEB 푸시발송용 UserID, DeviceID, 푸시설정 조회 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/retrievePushSendInfo")
	public void retrievePushSendInfo(HttpServletRequest request, HttpServletResponse response) {
//		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();
		// String USER_ID = requestHelper.getParameter("USER_ID");

		try {
			List<MblDvcAmnVO> pushSendInfoList = mblDvcAmnService.retrievePushSendInfo();
			DataSetHelper dsHelper = new DataSetHelper("ds_pushInfo");

			if (pushSendInfoList != null && pushSendInfoList.size() > 0) {
				dsHelper.addColumns(MblDvcAmnVO.class);
				for (MblDvcAmnVO vo : pushSendInfoList) {
					dsHelper.setData(vo);
				}
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}

	// 푸쉬 리스트용 푸쉬 가져오기
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/retrievePushList")
	public void retrievePushList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String USER_ID = requestHelper.getParameter("USER_ID"); // ex)otg01
		String DVIC_ID = requestHelper.getParameter("DVIC_ID"); // 기계id

		// Paging
		int totalRowCount = mblDvcAmnService.retrievePushListCount(USER_ID, DVIC_ID);
		PageHelper pageHelper = PageHelper.newInstance(requestHelper.getDataSet("ds_pageVO"), totalRowCount);
		int start = pageHelper.getStart();
		int end = pageHelper.getEnd();

		PlatformData platformData = new PlatformData();

		try {
			if (totalRowCount > 0) {
				List<Map<String, Object>> retrievePushList = mblDvcAmnService.retrievePushList(USER_ID, DVIC_ID, start, end);
				DataSetHelper dsHelper = new DataSetHelper("ds_PushList");

				if (retrievePushList != null && retrievePushList.size() > 0) {
					dsHelper.addColumns(MblDvcAmnVO.class);
					for (Map<String, Object> vo : retrievePushList) {
						dsHelper.setData(vo);
					}
				}
				platformData.addDataSet(pageHelper.getDsPageVo());
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	/**
	 * 모바일 기기 등록
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/insertAppDvic")
	public void insertMblDvic(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String APP_ID = requestHelper.getParameter("A");
		String DVIC_ID = requestHelper.getParameter("D");
		String MODEL = requestHelper.getParameter("M");
		String OS_TYPE = requestHelper.getParameter("OT");
		String OS_VER = requestHelper.getParameter("OV");
		String TOKEN = requestHelper.getParameter("T");

		try {
			MblAppVO param = new MblAppVO();
			param.setAPP_ID(APP_ID);
			param.setDVIC_ID(DVIC_ID);
			param.setMODEL(MODEL);
			param.setOS_TYPE(OS_TYPE);
			param.setOS_VER(OS_VER);
			param.setTOKEN(TOKEN);
			
			// 기기등록 체크(미등록, 토큰값 변경)
			MblAppVO appVo = mblDvcAmnService.retrieveAppDvic(param);
			if (appVo == null || appVo.getDVIC_ID() == null || !appVo.getTOKEN().equals(TOKEN)) {
				mblDvcAmnService.insertAppDvic(param);
			}
			
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/rest/pt/comn/insertAppUserDvic")
	public void insertAppUserDvic(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String USER_ID = requestHelper.getUserID();
		String DVIC_ID = requestHelper.getParameter("D");

		try {
			MblAppVO param = new MblAppVO();
			param.setDVIC_ID(DVIC_ID);
			param.setUSER_ID(USER_ID);

			// 기기등록 체크(미등록, 토큰값 변경)
			MblAppVO appVo = mblDvcAmnService.retrieveAppUserDvic(param);
			if (appVo == null || appVo.getDVIC_ID() == null) {
				mblDvcAmnService.insertAppUserDvic(param);
			}

			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}