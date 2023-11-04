package com.nh.escm.etc.pay.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.esum.appetizer.controller.AbstractController;
import com.nh.escm.etc.pay.service.EtcPayService;

@Controller
public class EtcPayController extends AbstractController {
	
	@Autowired
	private EtcPayService etcPayService;
	
	@RequestMapping(value = "/etc/pay/insert")
	public String systemUserInsert(HttpServletRequest request, Model model) {
		return "/etc/pay/insert";
	}
	
	@RequestMapping(value = "/etc/pay/update")
	public String systemUserUpdate(HttpServletRequest request, Model model) {
		
		//User user = etcPayService.getUser(userId);
		//model.addAttribute("user", user);
		
		return "/etc/pay/update";
	}
	
	@RequestMapping(value = "/etc/pay/etcPayLogin")
	public String etcPayLogin(HttpServletRequest request, Model model) {
		
		return "/etc/pay/etcPayLogin";
	}
	
	@RequestMapping(value = "/etc/pay/etcPayList")
	public String etcPayList(HttpServletRequest request, Model model) {
		String gln = request.getParameter("gln");
		String kbn = request.getParameter("kbn");
		String empNo = request.getParameter("empNo");
		String mbPw = request.getParameter("mbPw");
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		
		int empCnt = etcPayService.searchCnt(gln, kbn);
		
		if (empCnt > 0) {
			List<Map<String, Object>> empList = etcPayService.empList(gln, kbn);
			
			String emp = null;
			String pw = null;
			
			if (CollectionUtils.isEmpty(empList) == false) {
				emp = (String) empList.get(0).get("EMP");
				pw = (String) empList.get(0).get("PW");
			}
			
			if ( StringUtils.isEmpty(emp)
			  && StringUtils.isEmpty(pw)
			  && StringUtils.isEmpty(gln) == false
			  && StringUtils.isEmpty(kbn) == false
			   ) {
				list = etcPayService.searchList(gln, kbn, empNo, mbPw);
			} else if (StringUtils.isEmpty(emp) == false
					&& StringUtils.isEmpty(pw) == false
					&& StringUtils.isEmpty(gln) == false
					&& StringUtils.isEmpty(kbn) == false
					&& StringUtils.isEmpty(empNo) == false
					&& StringUtils.isEmpty(mbPw) == false
					&& empNo.equals(emp)
					&& mbPw.equals(pw)
					  ) {
				list = etcPayService.searchList(gln, kbn, empNo, mbPw);
			}
			
			model.addAttribute("emp", emp);
			model.addAttribute("pw", pw);
		}
		
		model.addAttribute("list", list);
		model.addAttribute("empNo", empNo);
		model.addAttribute("mbPw", mbPw);
		
		return "/etc/pay/etcPayList";
	}
	
	@RequestMapping(value = "/etc/pay/etcPayPopup")
	public String etcPayPopup(HttpServletRequest request, Model model) {
		String gln = request.getParameter("gln");
		String kbn = request.getParameter("kbn");
		String empNo = request.getParameter("empNo");
		String mbPw = request.getParameter("mbPw");
		
		List<Map<String, Object>> list = etcPayService.retrieveList(gln, kbn, empNo, mbPw);
		
		model.addAttribute("list", list);
		
		return "/etc/pay/etcPayPopup";
	}
	
	@RequestMapping(value = "/etc/pay/updateEtcPay")
	public String updateEtcPay(HttpServletRequest request, Model model) {
		String gln = request.getParameter("gln");
		String kbn = request.getParameter("kbn");
		String bnkNm = request.getParameter("bnkNm");
		String acno = request.getParameter("acno");
		String dprnm = request.getParameter("dprnm");
		String chrrnm = request.getParameter("chrrnm");
		String ctcplTelno = request.getParameter("ctcplTelno");
		String empNo = request.getParameter("empNo");
		String mbPw = request.getParameter("mbPw");
		
		int cnt = etcPayService.updateEtcPay(gln, bnkNm, acno, dprnm, chrrnm, ctcplTelno, empNo, mbPw);
		
		List<Map<String, Object>> updateList = new ArrayList<Map<String,Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		
		if (cnt > 0) {
			map.put("GLN", gln);
			map.put("KBN", kbn);
			map.put("EMP_NO", empNo);
			map.put("MB_PW", mbPw);
		}
		
		updateList.add(map);
		model.addAttribute("updateList", updateList);
		
		return "/etc/pay/etcPayPopup";
	}
	
	@RequestMapping(value = "/etc/pay/etcPayMng")
	public String etcPayMng(HttpServletRequest request, Model model) {
		String gln = request.getParameter("gln");
		
		List<Map<String, Object>> list = etcPayService.searchUserList(gln);
		
		model.addAttribute("list", list);
		
		return "/etc/pay/etcPayMng";
	}
	
	@RequestMapping(value = "/etc/pay/initEtcPayUser")
	public String initEtcPayUser(HttpServletRequest request, Model model) {
		String gln = request.getParameter("gln");
		
		int cnt = etcPayService.initEtcPayUser(gln);
		
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		
		if (cnt > 0) {
			list = etcPayService.searchUserList(gln);
		}
		
		model.addAttribute("list", list);
		
		return "/etc/pay/etcPayMng";
	}
}
