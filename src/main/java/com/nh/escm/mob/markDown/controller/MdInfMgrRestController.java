package com.nh.escm.mob.markDown.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
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
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nh.escm.mob.markDown.service.MdInfMgrService;

@RestController
public class MdInfMgrRestController extends AbstractController
{	
	@Autowired
	private MdInfMgrService mdInfMgrService;	
	
	/*
	 * 화면ID : MOB_MD_SC_1112
	 * 화면설명 : 가격할인 이력정보 출력
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/mob/printMdInfList")
	public RestResult printMdInfList(HttpServletRequest request, HttpServletResponse response)
	{		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);		
		String trplC	= requestHelper.getParameter("TRPL_C");
		String clntNm	= requestHelper.getParameter("CLNTNM");
		String chId_cd	= requestHelper.getParameter("CHID_CD");
		String md_id	= requestHelper.getParameter("MD_ID");
		String chNm_cd	= requestHelper.getParameter("CHNM_CD");
		String md_nm	= requestHelper.getParameter("MD_NM");
		String wrs_cd	= requestHelper.getParameter("WRS_CD");
		String wrs_nm	= requestHelper.getParameter("WRS_NM");
		String fm_rate	= requestHelper.getParameter("FM_RATE");
		String to_rate	= requestHelper.getParameter("TO_RATE");
		String fm_pcnt	= requestHelper.getParameter("FM_PCNT");
		String to_pcnt	= requestHelper.getParameter("TO_PCNT");
		String from_dt	= requestHelper.getParameter("FROM_DT");
		String to_dt	= requestHelper.getParameter("TO_DT");
		String stat_cd	= requestHelper.getParameter("STAT_CD");
		String login_id = requestHelper.getUserID();

		try
		{
			List<List<?>> all_list = new ArrayList<List<?>>();

			List<Map<String,Object>> billingList	= new ArrayList<Map<String,Object>>();
			Map<String,Object> _billing 			= new LinkedHashMap<String, Object>();
			String billingKey = requestHelper.getUserID()+DateUtil.getCurrentDate().getTime();
			_billing.put("billingKey", billingKey);
			billingList.add(_billing);
			all_list.add(billingList);

			List<Map<String, Object>> master = new ArrayList<Map<String, Object>>();
			Map<String, Object> _param = new LinkedHashMap<String, Object>();
			_param.put("TRPL_C"	, trplC);
			_param.put("CLNTNM"	, clntNm);
			_param.put("CHID_CD", chId_cd);
			_param.put("MD_ID"	, md_id);
			_param.put("CHNM_CD", chNm_cd);
			_param.put("MD_NM"	, md_nm);
			_param.put("WRS_CD"	, wrs_cd);
			_param.put("WRS_NM"	, wrs_nm);
			_param.put("FM_RATE", fm_rate);
			_param.put("TO_RATE", to_rate);
			_param.put("FM_PCNT", fm_pcnt);
			_param.put("TO_PCNT", to_pcnt);
			_param.put("FROM_DT", from_dt);
			_param.put("TO_DT"	, to_dt);
			_param.put("STAT_CD", stat_cd);
			master.add(_param);
			
			filterTextListForOZ(master);
			all_list.add(master);

			int totalCount = mdInfMgrService.getMainCount(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd);
			List<Map<String, Object>> detail = mdInfMgrService.mainSelectList(trplC, clntNm, chId_cd, md_id, chNm_cd, md_nm, wrs_cd, wrs_nm, fm_rate, to_rate, fm_pcnt, to_pcnt, from_dt, to_dt, stat_cd, 1, totalCount);
			
			filterTextListForOZ(detail);
			all_list.add(detail);

			List<Map<String, Object>> approval = mdInfMgrService.getApproval(login_id);
			filterTextListForOZ(approval);
			all_list.add(approval);

			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
		}
		catch (AppetizerException e)
		{
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	private void filterTextListForOZ(List<Map<String, Object>> list) {
		filterTextListForOZ(list, null);
	}
	
	/**
	 * 오즈리포트 전달용 객체 내 String 예외처리
	 * @param list
	 */
	private void filterTextListForOZ(List<Map<String, Object>> list, String[] whitelists) {
		String[] filterO = {"^", "<", ">", "\\", "&", "/"};		// 대상 문자열
		String[] filterR = {"＾", "〈", "〉", "￦", "＆", "／"};			// 치환 문자열(대상 순서와 맞출 것)
		List<String> white = null;
		if (whitelists != null && whitelists.length > 0) {
			white = Arrays.asList(whitelists);
		}
		
		if (list != null && list.size() > 0) {
			for (Map<String, Object> map : list) {
				for (String key : map.keySet()) {
					if (white != null && white.contains(key)) { continue; } // 특정항목 치환 제외
					Object obj = map.get(key);
					if (obj != null && obj instanceof String) {
						String temp = (String) obj;
						for (int i = 0; i < filterO.length; i++) {
							if (temp.indexOf(filterO[i]) != -1) {
								temp = temp.replace(filterO[i], filterR[i]);
							}
						}
						map.put(key, temp);
					}
				}
			}
		}
	}
}
