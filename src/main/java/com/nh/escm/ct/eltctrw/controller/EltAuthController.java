package com.nh.escm.ct.eltctrw.controller;

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
import com.nh.escm.ct.eltctrw.service.EltAuthService;
import com.nh.escm.ct.eltctrw.vo.EltAuthVO;

/**
 * 전자계약 권한 관리
 */
@Controller
public class EltAuthController extends AbstractController {

	@Autowired
	private EltAuthService eltAuthService;

	/**
	 * 전자계약 관련 보유권한 조회
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltCtrw/checkEltAuth")
	public void checkEltAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		try {
			DataSetHelper dsHelper = new DataSetHelper("ds_eltAuth");
			List<EltAuthVO> list = eltAuthService.checkEltAuthor(requestHelper.getUserID(),
					requestHelper.getUserType());

			if (list != null && list.size() > 0) {
				dsHelper.addColumns(EltAuthVO.class);

				for (EltAuthVO vo : list) {
					dsHelper.setData(vo);
				}

			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약 계약서 권한 리스트
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltctrwBuyerAuthDSList")
	public void retrieveEltctrwBuyerAuthDSList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatformData platformData = new PlatformData();

			List<Map<String, Object>> retrieveEltctrwBuyerAuthDSList = eltAuthService.retrieveEltctrwBuyerAuthDSList();
			if (retrieveEltctrwBuyerAuthDSList != null && retrieveEltctrwBuyerAuthDSList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_eltAuthDsc");
				dsHelper.addColumns(retrieveEltctrwBuyerAuthDSList.get(0).keySet());
				for (Map<String, Object> vo : retrieveEltctrwBuyerAuthDSList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}

			List<Map<String, Object>> elltctrwAuthBzplcList = eltAuthService.retrieveEltctrwAuthBzplcList();

			if (elltctrwAuthBzplcList != null && elltctrwAuthBzplcList.size() > 0) {
				DataSetHelper dsHelper2 = new DataSetHelper("ds_bzplc");
				dsHelper2.addColumns(elltctrwAuthBzplcList.get(0).keySet());
				for (Map<String, Object> vo : elltctrwAuthBzplcList) {
					dsHelper2.setData(vo);
				}
				platformData.addDataSet(dsHelper2.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약권한관리 조회
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltctrwBuyerAuthList")
	public void retrieveEltctrwBuyerAuthList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String proChk = requestHelper.getParameter("proChk");
			String edtNm = requestHelper.getParameter("edtNm");
			String fvEltAuthCd = requestHelper.getParameter("fvEltAuthCd"); // 전자계약 계약서 권한코드

			List<Map<String, Object>> eltCtrwBuyerAuthList = eltAuthService.retrieveEltctrwBuyerAuthList(proChk, edtNm,
					fvEltAuthCd);

			if (eltCtrwBuyerAuthList != null && eltCtrwBuyerAuthList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_auth");
				dsHelper.addColumns(eltCtrwBuyerAuthList.get(0).keySet());
				for (Map<String, Object> vo : eltCtrwBuyerAuthList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약 권한사업자번호 조회
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltctrwAuthBzplcList")
	public void retrieveEltctrwAuthBzplcList(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatformData platformData = new PlatformData();
			List<Map<String, Object>> elltctrwAuthBzplcList = eltAuthService.retrieveEltctrwAuthBzplcList();

			if (elltctrwAuthBzplcList != null && elltctrwAuthBzplcList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_bzplc");
				dsHelper.addColumns(elltctrwAuthBzplcList.get(0).keySet());
				for (Map<String, Object> vo : elltctrwAuthBzplcList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약권한관리 저장
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/insertEltctrwBuyerAuth")
	public void insertEltctrwBuyerAuth(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		DataSet ds_auth = requestHelper.getDataSet("ds_auth");
		DataSet ds_svcAuth = requestHelper.getDataSet("ds_svcAuth");

		String mbId = ds_auth.getString(0, "MB_ID");
		String usrId = requestHelper.getUserID();

		try {
			for (int i = 0; i < ds_svcAuth.getRowCount(); i++) {
				String eltAuthDsc = ds_svcAuth.getString(i, "ELT_AUTH_DSC");
				eltAuthService.insertEltctrwBuyerAuth(mbId, eltAuthDsc, usrId);
			}
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약권한관리 수정
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/updateEltctrwBuyerAuth")
	public void updateEltctrwBuyerAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		DataSet ds_auth = requestHelper.getDataSet("ds_auth");
		DataSet ds_svcAuth = requestHelper.getDataSet("ds_svcAuth");

		String mbId = ds_auth.getString(0, "MB_ID");
		String usrId = requestHelper.getUserID();

		try {
			eltAuthService.deleteEltctrwBuyerAuth(mbId);
			for (int i = 0; i < ds_svcAuth.getRowCount(); i++) {
				String eltAuthDsc = ds_svcAuth.getString(i, "ELT_AUTH_DSC");
				eltAuthService.insertEltctrwBuyerAuth(mbId, eltAuthDsc, usrId);
			}
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약권한관리 삭제
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/deleteEltctrwBuyerAuth")
	public void deleteEltctrwBuyerAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_auth = requestHelper.getDataSet("ds_auth");

		try {
			for (int i = 0; i < ds_auth.getRowCount(); i++) {
				String mbId = ds_auth.getString(i, "MB_ID");
				eltAuthService.deleteEltctrwBuyerAuth(mbId);
			}
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 사업자번호 확인
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltctrwBizNoList")
	public void retrieveEltctrwBizNoList(HttpServletRequest request, HttpServletResponse response) {

		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String bzNo1 = requestHelper.getParameter("bzNo1"); // 사업자번호 첫번째자리
			String bzNo2 = requestHelper.getParameter("bzNo2"); // 사업자번호 두번째자리
			String bzNo3 = requestHelper.getParameter("bzNo3"); // 사업자번호 세번째자리

			List<Map<String, Object>> eltCtrwBizNoList = eltAuthService.retrieveEltctrwBizNoList(bzNo1, bzNo2, bzNo3);

			if (eltCtrwBizNoList != null && eltCtrwBizNoList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_bzno");
				dsHelper.addColumns(eltCtrwBizNoList.get(0).keySet());
				for (Map<String, Object> vo : eltCtrwBizNoList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약직매장권한관리
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveEltctrwAuthList")
	public void retrieveEltctrwAuthList(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			PlatformData platformData = new PlatformData();

			String bizNumeber = requestHelper.getParameter("edtBizNumeber"); // 사업자번호
			String clntim = requestHelper.getParameter("edtClntim"); // 협력업체명
			String chiefEno = requestHelper.getParameter("edtChiefEno"); // 점장 사원번호
			String gln = requestHelper.getParameter("edtGln"); // GLN

			List<Map<String, Object>> eltCtrwBizNoList = eltAuthService.retrieveEltctrwAuthList(bizNumeber, clntim,
					chiefEno, gln);

			if (eltCtrwBizNoList != null && eltCtrwBizNoList.size() > 0) {
				DataSetHelper dsHelper = new DataSetHelper("ds_auth");
				dsHelper.addColumns(eltCtrwBizNoList.get(0).keySet());
				for (Map<String, Object> vo : eltCtrwBizNoList) {
					dsHelper.setData(vo);
				}
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약직매장권한관리 저장
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/insertEltctrwAuth")
	public void insertEltctrwAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_auth = requestHelper.getDataSet("ds_auth");

		String bzno = ds_auth.getString(0, "BZNO1") + ds_auth.getString(0, "BZNO2") + ds_auth.getString(0, "BZNO3");

		String clntnm = ds_auth.getString(0, "CLNTNM");
		String chiefEno = ds_auth.getString(0, "CHIEF_ENO");
		String usrId = requestHelper.getUserID();

		try {
			eltAuthService.insertEltctrwAuth(bzno, clntnm, chiefEno, usrId);

			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약직매장권한관리 수정
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/updateEltctrwAuth")
	public void updateEltctrwAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_auth = requestHelper.getDataSet("ds_auth");

		String bzno = ds_auth.getString(0, "BZNO1") + ds_auth.getString(0, "BZNO2") + ds_auth.getString(0, "BZNO3");

		String clntnm = ds_auth.getString(0, "CLNTNM");
		String chiefEno = ds_auth.getString(0, "CHIEF_ENO");
		String usrId = requestHelper.getUserID();

		try {
			eltAuthService.updateEltctrwAuth(bzno, clntnm, chiefEno, usrId);

			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}

	// 전자계약직매장권한관리 삭제
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/deleteEltctrwAuth")
	public void deleteEltctrwAuth(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		DataSet ds_auth = requestHelper.getDataSet("ds_auth");

		try {
			for (int i = 0; i < ds_auth.getRowCount(); i++) {
				String bzno = ds_auth.getString(i, "BIZ_NUMBER");
				eltAuthService.deleteEltctrwAuth(bzno);
			}
			sendData(response, new PlatformData());
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}