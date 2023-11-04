package com.nh.escm.common.controller;

import java.util.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.nh.escm.common.dao.LiqBizPlaceSelectDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.common.RequestInterceptor;
import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.session.SessionRepository;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nh.api.escm.usrinfo.UserInfoApiCaller;
import com.nh.escm.common.service.CodeService;
import com.nh.escm.common.service.SequenceKeyService;


@RestController
public class SystemController extends AbstractController {

	@Autowired
	private SequenceKeyService sequenceKeyService;

	@Autowired
	private CodeService codeService;

	@Autowired
	private LiqBizPlaceSelectDao liqBizPlaceSelectDao;

	@PostConstruct
	public void setMenuVersionMap() {
		String serverVersion = StringUtils.trim(Configurer.getProperty("version"));

		List<Map<String, String>> maps = codeService.getMenuVersion();
		if (maps != null && maps.size() > 0) {
			String lVersion = "pass";
			if (!StringUtils.isEmpty(maps.get(0).get("VERSION"))) {
				lVersion = maps.get(0).get("VERSION");
			}
			if (!lVersion.equals(serverVersion)) {
				codeService.setMenuVersion(serverVersion);
				RequestInterceptor.menuVersionMap = codeService.getMenuVersion();
			}

		}
		RequestInterceptor.menuVersionMap = maps;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/common/getMessageList")
	public void getMessageList(HttpServletRequest request, HttpServletResponse response) {

		PlatformData platformData = new PlatformData();

		try {

			DataSet ds = new DataSet("message_list");
			ds.addColumn("KEY", DataTypes.STRING);
			ds.addColumn("MESSAGE", DataTypes.STRING);

			ResourceBundle bundle = ResourceBundle.getBundle("message.message");

			Enumeration<String> keys = bundle.getKeys();
			String key = null;
			while (keys.hasMoreElements()) {
				int row = ds.newRow();
				key = keys.nextElement();
				ds.set(row, "KEY", key);
				ds.set(row, "MESSAGE", bundle.getString(key));
			}

			platformData.addDataSet(ds);
			sendData(response, platformData);

		} catch (AppetizerException e) {
			sendData(response, platformData, -1, "error.message.dupUserId");

		}

	}


	@RequestMapping(method = RequestMethod.POST, value = "/rest/common/getServerTime")
	public void getServerTime(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		String dateType = requestHelper.getParameter("dateType");

		PlatformData platformData = new PlatformData();


		DataSet ds = new DataSet("data");
		ds.addColumn("CURRENT_TIME", DataTypes.STRING);
		int row = ds.newRow();

		if (dateType != null) {
			ds.set(row, 0, DateUtil.getCurrentDate(dateType));
		} else {
			ds.set(row, 0, DateUtil.getCurrentDate());
		}

//		platformData.addDataSet(ds);
//		sendData(response, platformData);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/rest/common/getServerInfo")
	public void getServerName(HttpServletRequest request, HttpServletResponse response) {

		DataSet ds = new DataSet("data");
		ds.addColumn("SERVER", DataTypes.STRING);
		ds.set(ds.newRow(), 0, System.getProperty("SERVER"));

		PlatformData platformData = new PlatformData();
		platformData.addDataSet(ds);
		sendData(response, platformData);
	}

	/**
	 * 클리이언트 메뉴 권한검증 문자열 전송
	 *
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/common/getCheckAuth")
	public void getCheckAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatformData platformData = new PlatformData();
		String checkAuth = Configurer.getProperty("client.check.auth");

		DataSet ds = new DataSet("data");
		ds.addColumn("CHECK_AUTH", DataTypes.STRING);
		ds.set(ds.newRow(), 0, checkAuth);

		platformData.addDataSet(ds);
		sendData(response, platformData);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/common/printSessionStore")
	public void printSessionStore(HttpServletRequest request, HttpServletResponse response) {

		SessionRepository.printSessionStore();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/common/initSeqKey")
	public void initSeqKey(HttpServletRequest request, HttpServletResponse response) {
		try {
			sequenceKeyService.insertData();
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "error.message.dupUserId");
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rest/common/ask_gds_alcoholic_drink_biz_place")
	public void get_gds_alcoholic_drink_biz_place(HttpServletRequest request, HttpServletResponse response){
		try{
			PlatformData platformData = new PlatformData();
			DataSetHelper gds_alcoholic_drink_biz_place = new DataSetHelper("gds_alcoholic_drink_biz_place");
			List<Map<String,Object>> alcoholic_drink_biz_place_list = new ArrayList<>();
			alcoholic_drink_biz_place_list= liqBizPlaceSelectDao.get_gds_alcoholic_drink_biz_place();

			//add data-set gds_alcoholic_drink_biz_place_list.
			gds_alcoholic_drink_biz_place.addColumns(alcoholic_drink_biz_place_list.get(0).keySet());
			for(Map<String, Object> alcoholic_drink_biz_place : alcoholic_drink_biz_place_list) {
				gds_alcoholic_drink_biz_place.setData(alcoholic_drink_biz_place);
			}
			platformData.addDataSet(gds_alcoholic_drink_biz_place.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			sendData(response, new PlatformData(), -1, "error.message.dupUserId");
		}
	}
}
