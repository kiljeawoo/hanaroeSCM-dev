package com.nh.escm.oz.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.session.SessionBox;
import com.esum.appetizer.util.StringUtil;




@Controller
public class OzController extends AbstractController {	

	@RequestMapping(value = "/oz/ozViewer.nh")
	public String ozhtml(HttpSession session, HttpServletRequest request,
			Model model, 
			String sId, // 화면아이디
			String sName, // 화면제목
			String sUrl,// ozr주소
			String paramType, 
			String sParam, 
			String viewName, 
			String serverType,
			String viewer)
			throws UnsupportedEncodingException {

		SessionBox sessionBox = (SessionBox) request.getSession().getAttribute(
				"sessionBox");
		if (sessionBox == null) {

			return "/oz/ozError";

		} else {

			String _sId = URLDecoder.decode(StringUtil.toString(sId), "utf-8");
			String _sName = URLDecoder.decode(StringUtil.toString(sName),
					"utf-8");
			String _sUrl = URLDecoder
					.decode(StringUtil.toString(sUrl), "utf-8");
			String _paramType = URLDecoder.decode(
					StringUtil.toString(paramType), "utf-8");
			String _sParam = URLDecoder.decode(StringUtil.toString(sParam),
					"utf-8");
			String _serverType = URLDecoder.decode(
					StringUtil.toString(serverType), "utf-8");
			String _viewName = "ozViewer";
			String _viewer = StringUtil.toString(viewer);

			model.addAttribute("sId", _sId);
			model.addAttribute("sName", _sName);
			model.addAttribute("sUrl", _sUrl);
			model.addAttribute("paramType", _paramType);
			model.addAttribute("sParam", _sParam);
			model.addAttribute("serverType", _serverType);
			model.addAttribute("viewer", _viewer);
			if (StringUtils.isNotEmpty(viewName)) _viewName = viewName;
			model.addAttribute("viewName", _viewName);
			
			return "/oz/" + _viewName;
		}
	}
	
	// 신규추가항목
	@RequestMapping(value = "/ce/websource/nh/{viewName}.nh")
	public String retrieveCrossEditorView(HttpSession session, HttpServletRequest request, Model model, @PathVariable String viewName) throws UnsupportedEncodingException {
		System.out.println(viewName);
		return "/ce/websource/jsp/" + viewName;
	}
	
}