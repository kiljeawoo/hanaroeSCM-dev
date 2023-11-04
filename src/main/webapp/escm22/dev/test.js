$(document).ready(function(){
	$("body").append('<iframe id="ifrm" name="ifrm" src="dev/test.html" style="position: fixed; left:200px; top:0; z-index: 999999999; width: 700px; max-width:100%; height:25px; border: 0; outline:0; transition: top 0.3s;" scrolling="no"></iframe>');
	$("body").append('<div id="msg" style="display:none; position: fixed; width: 500px;font-family:\'Malgun gothic\'; z-index:99999; padding: 5px; left:0; right:0; margin:auto; bottom: 50px; background-color:rgba(30,30,30,0.8); border-radius:5px;  color: #fff; text-align: center; font-size: 16px;">로그인 후 사용 바랍니다.</div>');
	$("head").append("<style>" +
			"div#dsshow { position:fixed; top:0; left:0; right:0; bottom:0; background-color:rgba(0,0,0,.8); padding:10px; color:#fff; text-align:center; z-index:9999999; font-family:\"Malgun gothic\"; overflow-y:auto; }" +
			"div#dsshow h1 { position:absolute; top:0px; left:0px; right:0px; height:50px; box-sizing:border-box; padding: 0 10px; margin:0; background-color: #036; }" +
			"div#dsshow div#btngrp { position: fixed;right: 10px;top: 10px; }" +
			"div#dsshow div#btngrp button { background: #FFF; padding: 0px 10px;outline: 0;border: 0; color: #036;font-size: 14px; vertical-align:middle; border-radius:5px; font-weight:bold; height:30px; }" +
			"div#dsshow div#tblwrap { position:absolute; top:50px; left:0; right:0; bottom:0px; overflow:auto;  }" +
			"div#dsshow table { border-collapse: collapse; font-size:12px; text-align:center; min-width:100%; }" +
			"div#dsshow table.srt { table-layout:fixed; }" +
			"div#dsshow table th { border:1px solid #036; color:#036; padding:5px 3px; background-color:#fff; }" +
			"div#dsshow table td { border:1px solid #666; color:#ddd; padding:5px 3px; }" +
			"div#dsshow table.srt th, div#dsshow table.srt td { text-overflow:ellipsis; white-space:nowrap; overflow:hidden; }" +
			"div#dsshow table:not(.srt) th, div#dsshow table:not(.srt) td { word-break: break-all; }" +
			"* { user-select: auto !important; -ms-user-select: auto !important; }" +
			"</style>");

	setRurl();
});

function setRurl() {
	var interval = setInterval(function() {
		if (application.gv_redirect_url) {
			application.gv_redirect_url = location.href;
			clearInterval(interval);
		}
	}, 200);
}

function iframeShow(flag) {
	if (flag) {
		$("iframe#ifrm").css({
			top : '-25px'
		});
	} else {
		$("iframe#ifrm").css({
			top : 0
		});
	}
}

function toggleDetail(obj) {
	$("div#dsshow table").toggleClass("srt");
}

function showDatasetRecord(ds) {
	if (ds == undefined) return;
	
	$("div#dsshow").remove();
	var dom = "<div id='dsshow'>";
	dom += "<h1>"+ds.name+"</h1>"
	dom += "<div id='btngrp'><button type='button' onclick='toggleDetail(this)'>DETAIL</button> <button type='button' onclick='$(\"div#dsshow\").remove()'>CLOSE</button></div>";
	dom += "<div id='tblwrap'><table class='srt'>";
	// head
	dom += "<thead><tr>";
	for (var i=0; i<ds.col.length; i++) {
		dom += "<th>"+ds.col[i]+"</th>";
	}
	dom+="</tr></thead>";
	
	// body
	dom += "<tbody>";
	for(var i=0; i<ds.count; i++) {
		dom += "<tr>";
		for (var j=0; j<ds.col.length; j++) {
			if (ds.data[i][ds.col[j]] != undefined) {
				dom += "<td>"+ds.data[i][ds.col[j]]+"</td>";
			} else {
				dom += "<td></td>";
			}
		}
		dom += "</tr>";
	}
	dom += "</table></div>";
	dom += "</div>";
	
	$("body").append(dom);
	document.ifrm.showhide(false);
}

function testMenuOpen(path, fn, menuNm) {
	if (application.mainframe.frame.LoginFrame.height !== 0) {
		$("div#msg").fadeIn();
		setTimeout(function() {
			$("div#msg").fadeOut();
		}, 1500);
		return;
	}

	var psMenuPath = fn;
	var psMenuId = '99999999', psMenuNm = (menuNm != undefined ? menuNm : '메뉴테스트'), psMenuPage = '/nhvan/escm/' + path + '/' + psMenuPath + ".xfdl", paObjList = '';

	if (application.afrm_FrameSet[psMenuId] != undefined) {
		application.afrm_FrameSet[psMenuId].form.close();
	}
	application.afrm_HFrameSet0.set_separatesize("190,*,0");
	application.afrm_VFrameSet1.set_separatesize("32,*");
	var objChildFrame = application.afrm_FrameSet[psMenuId];

	// ChildFrame 생성
	objChildFrame = new ChildFrame();
	objChildFrame.init(psMenuId, "absolute", 0, 0, 818, 520, null, null,
			"frame::WorkFrame.xfdl");

	// Open Form 정보 인자 전달...
	objChildFrame.arguments = [];
	objChildFrame.arguments["FORM_ID"] = psMenuId;
	objChildFrame.arguments["FORM_NM"] = psMenuNm;
	objChildFrame.arguments["FORM_URL"] = psMenuPage;
	objChildFrame.arguments["FORM_PATH"] = psMenuPath;
	objChildFrame.arguments["FORM_PARAM"] = paObjList;
	objChildFrame.set_showtitlebar(false);
	objChildFrame.set_showstatusbar(false);
	objChildFrame.set_resizable(true);
	objChildFrame.set_dragmovetype("none");
	objChildFrame.set_showstatusbar(false);
	objChildFrame.set_visible(true);
	objChildFrame.set_openstatus("maximize");
	objChildFrame.style.set_background("white");
	objChildFrame.set_titletext("");
	var sRtn = application.afrm_FrameSet.addChild(psMenuId, objChildFrame);
	objChildFrame.show();
	objChildFrame.setFocus();
}