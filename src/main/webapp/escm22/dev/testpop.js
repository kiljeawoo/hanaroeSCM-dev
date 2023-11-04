let userAgent = window.navigator.userAgent.toLowerCase();
let isIE = userAgent.indexOf('trident') != -1;

let last = 0;
let openMenuList;
let testDs;
let app;

function testMenuOpenKey(fileNm) {
	if (opener) {
		var path = $("select#testPath").val();
		window.localStorage.setItem("lastTestMenu",  path+"|"+fileNm);
		opener.parent.testMenuOpen(path, fileNm, fileNm);
	}
}

function getFormList() {
	if (opener) {
		$("select#formList > option").remove();
		$("select#formList").append("<option value=''>메뉴 선택</option>");
		$("select#formList").append("<option value=''>━━━━━━━━</option>");
		$("ul#dslist > li").remove();
		$("ul#mlist > li").remove();
		var cnt = 0;
		openMenuList = new Array();
		
		// 메인
		var potal = app.mainframe.frame.frames.HFrameSet0.frames[2];
		if (potal != undefined && potal.name == "PotalFrame" && potal.form != null) {
			openMenuList.push({
				id:"main"+i,
				name:"[메인] "+potal.form.titletext,
				form:potal.form
			});
			
			var dom = "<option value='"+cnt+"'>[메인] "+potal.form.titletext+"</option>";
			$("select#formList").append(dom);
			cnt++;
		}
		
		// 열린 메뉴
		var openList = app.mainframe.frame.frames.HFrameSet0.VFrameSet1.FrameSet0.frames;
		if (openList.length > 0) {
			for (var i=0; i<openList.length; i++) {
				// console.log(cnt + " : "+ openList[i].form.sId + " / " + openList[i].form.sNm);
				openMenuList.push({
					id:openList[i].form.sId,
					name:openList[i].form.sNm,
					form:openList[i].form.div_work
				});
				
				var dom = "<option value='"+cnt+"'>"+openList[i].form.sNm+"</option>";
				$("select#formList").append(dom);
				cnt++;

				// include 화면
				cnt = getIncludeForm(openList[i].form.sId, openList[i].form.sNm, openList[i].form.div_work, cnt);
			}
		}
		
		// 열린 팝업
		var openList2 = app.popupframes;
		for (var i=0; i<openList2.length; i++) {
			// console.log(cnt + " : "+ openList2[i].form.name + " / " + openList2[i].form.titletext);
			openMenuList.push({
				id:"popup"+i,
				name:"[팝업] "+openList2[i].form.titletext,
				form:openList2[i].form
			});
			
			var dom = "<option value='"+cnt+"'>[팝업]"+openList2[i].form.titletext+"</option>";
			$("select#formList").append(dom);
			cnt++;

			// include 화면
			cnt = getIncludeForm("popup"+i, openList2[i].form.titletext, openList2[i].form, cnt);
		}
	}
}

// 메뉴 내 include div 열기
function getIncludeForm(id, name, frm, cnt) {
	if (frm != undefined) {
		var keys = Object.keys(frm);
		var child = 1;
		for (var i in keys) {
			if (keys[i].indexOf("div_") != -1) {
				var div = frm[keys[i]];
				if (div.url != null && div.url != "") {
					openMenuList.push({
						id:id+child,
						name:name+child,
						form:div
					});
					
					var dom = "<option value='"+cnt+"'>└ [Child."+child+"] " + div.name +"</option>";
					$("select#formList").append(dom);
					cnt++;
					child++;
				}
			}
		}
	}
	return cnt;
}

function getFormDataset(formIdx) {
	$("ul#dslist > li").remove();
	if (formIdx != undefined && formIdx != "") {
		$("ul#dslist").show();
		var keys = Object.keys(openMenuList[formIdx].form);
		for (var i in keys) {
			if (keys[i].indexOf("ds_") != -1) {
				var dom = "<li onclick=\"showDataset('"+keys[i]+"', this)\">"+keys[i]+"</li>";
				$("ul#dslist").append(dom);
			}
		}
	} else {
		$("ul#dslist").hide();
		$("select#formList").val("");
	}
}

function toggleDetail(obj) {
	$("div#dsshow table").toggleClass("srt");
}

function showDataset(name, obj) {
	if (name == undefined || name == "") return;
	
	if (obj != undefined) {
		$(obj).addClass("on").siblings().removeClass("on");
	}
	$("div#dsshow").show();
	$("div#csshow").hide();
	
	var frm = openMenuList[$("select#formList").val()].form;
	try {
		var ds = eval("frm." + name);
		if (ds != undefined) {
			var dataset = new Array();
			var datacol = new Array();
			for (var i=0; i<ds.getRowCount(); i++) {
				var datasetItem = {};
				for (var j=0; j<ds.colinfos.length; j++) {
					var cols = ds.colinfos[j].id;
					datasetItem[cols] = ds.getColumn(i, cols);
					if (i==0){ datacol.push(cols); }
				}
				datasetItem['RTYPE'] = ds.getRowType(i);
				dataset.push(datasetItem);
			}

			var datamaster = {};
			datamaster['name'] = name;
			datamaster['data'] = dataset;
			datamaster['col'] = datacol;
			datamaster['count'] = ds.getRowCount();
			
			showDatasetRecord(datamaster);
		}
	} catch(e) {
		console.error("dataset parsing error");
	}
}

function showDatasetRecord(ds) {
	if (ds == undefined) return;
	// console.log(ds);
	
	$("div#dsshow > h1").text(ds.name);
	
	$("table#tblds").html("");
	var dom = "";
	
	if (ds.count == 0) {
		dom = "<tr><td class='empty fD'>Empty Dataset</td></tr>"
		$("table#tblds").html(dom);
		$("button#btndetail").hide();
		return;
	}
	$("button#btndetail").show();
	
	// head
	dom += "<thead><tr>";
	dom += "<th class='dsrow'>ROW</th>";
	for (var i=0; i<ds.col.length; i++) {
		dom += "<th>"+ds.col[i]+"</th>";
	}
	dom+="</tr></thead>";
	
	// body
	dom += "<tbody></tbody></table>";
	$("table#tblds").html(dom);
	
	//var dom2="";
	for(var i=0; i<ds.count; i++) {
		var dom2 = "<tr class='RT"+ds.data[i]['RTYPE']+"'>";
		dom2 += "<td>"+(ds.data[i]['RTYPE'] == "2" ? "신규" : ds.data[i]['RTYPE'] == "4" ? "수정" : "")+"</td>";
		for (var j=0; j<ds.col.length; j++) {
			if (ds.data[i][ds.col[j]] != undefined) {
				dom2 += "<td>"+ds.data[i][ds.col[j]]+"</td>";
			} else {
				dom2 += "<td></td>";
			}
		}
		dom2 += "</tr>";
		//$("table#tblds tbody").append(dom2);
		addRow(dom2, i);
	}
}

function addRow(dom, idx) {
	$("table#tblds tbody").append(dom);
	/*
	if (isIE) {
		$("table#tblds tbody").append(dom);
	} else {
		setTimeout(function(){
			$("table#tblds tbody").append(dom);
		}, (idx*100));
	}
	*/
}

function showDsXml() {
	var frm = openMenuList[$("select#formList").val()].form;
	try {
		var name = $("div#dsshow > h1").text();
		var ds = eval("frm." + name);
		if (ds != undefined) {
			$("div#dname").text(name);
			$("div#dcont").html(formatXml(ds.saveXML(), true));
			$("div#dsdetail").fadeIn(500).addClass("on");
		} else {
			$("div#dsdetail").removeClass("on").fadeOut(500);
		}
	} catch(e) {
		console.error("dataset parsing error");
	}
}

function closeDsXml() {
	$("div#dname").text("Not Selected");
	$("div#dcont").text("");
	$("div#dsdetail").removeClass("on").fadeOut(500);
}

function showConsole() {
	var idx = $("select#formList").val();
	if (idx != "") {
		$("ul#key_list li").remove();
		$("div#csshow").show();
		$("div#dsshow").hide();
		$("div#csshow > h1").text($("select#formList option:selected").text());
		var frm = openMenuList[idx].form;
		var k = Object.keys(frm);
		
		var list = new Array();
		
		for (var i in k) {
			if (!/\b(?!_)\w+/g.test(k[i])) { continue; } // skip prototype
			else if (/^(gfn_)\w+/g.test(k[i])) { continue; } // skip global
			else if (/^(ds_)\w+/g.test(k[i])) { continue; } // skip dataset
			var type = typeof(frm[k[i]]);
			if (type == 'undefined') { continue; } // skip undefined
			
			var cs = {};
			cs['isvar'] = "function|object".indexOf(type) != -1;
			cs['name'] = k[i];
			cs['type'] = type;
			cs['value'] = frm[k[i]];
			list.push(cs);
		}
		
		list.sort(function(a, b) {
			if (a.isvar == b.isvar) {
				return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;
			} else if (a.type == b.type) {
				return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
			} else {
				return a.isvar < b.isvar ? -1 : a.isvar > b.isvar ? 1 : 0;
			}
		});

		for (var i in list) {
			var item;
			if ("function|object".indexOf(list[i].type) != -1) {
				item = "<li class='cs_var obj' onclick='showConsoleDetail(\""+list[i].name +"\", 1)'><span class='cs_type'>" + list[i].type + "</span><span class='cs_key'>" + list[i].name + "</span></li>";
			} else {
				item = "<li class='cs_var'><span class='cs_type'>" + list[i].type + "</span><span class='cs_key'>" + list[i].name + "</span><span class='cs_val'>" + list[i].value + "</span></li>";
			}
			$("ul#key_list").append(item);
		}
	}
}

function showConsoleDetail(key, depth) {
	
}

function helpNexa() {
	alert("<메뉴 미등록 Nexacro 파일 열기>\n선택창에서 Nexacro 경로 선택 후 해당 경로 내 파일명만 입력 후 엔터\n(ex: 선택-PDS/BALANCE, 입력-VAN_DS_SC_1100)");
}

function setLogin(obj) {
	var id = $(obj).text();
	var loginWrap = app.mainframe.frame.LoginFrame.form.div_mainbg.div_main_visual.div_user_tab.div_tab_login;
	if (app.mainframe.frame.LoginFrame.height > 0) {
		loginWrap.edt_id.set_value(id);
		loginWrap.edt_pw.set_value("1234");
	}
}

$(document).ready(function(){
	$("header").addClass("on");
	setTimeout(function(){
		$("div#test_div").addClass("on");
	},500);
	setTimeout(function(){
		$("div#dsshow").addClass("on");
	}, 1000);
	$("div#test_div input#filenm").on("focus focusout", function(e){
		if (e.type == "focus") {
			$("body").addClass("focus");
		} else {
			$("body").removeClass("focus");
		}
	});
	
	if (opener) {
		app = opener.parent.application;
		var saved = window.localStorage.getItem("lastTestMenu");
		if (saved != null && saved != "") {
			var sp = saved.split("|")
			$("select#testPath", "div#test_div").val(sp[0]);
			$("input#filenm", "div#test_div").val(sp[1]);
		}
		
		if (app.gv_userId != "") {
			var tpc;
			switch(app.gv_userType) {
				case '01' : tpc="협력업체"; break;
				case '02' : tpc="본부"; break;
				case '03' : tpc="사업장"; break;
				case '04' : tpc="세금계산서"; break;
				case '05' : tpc="전자계약"; break;
				case '81' : tpc="농협몰"; break;
			}
			$("span#id", "header").text(app.gv_userName);
			$("span#name", "header").text("("+app.gv_userId + ", " + tpc+")");
		}
		getFormList();
	}
});

function formatXml(xml, isHtml) {
    var formatted = '';
    var reg2 = /(\> \<)/g;
    xml = xml.replace(reg2, '><');
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    $.each(xml.split('\r\n'), function(index, node) {
        var indent = 0;
        if (node.match( /.+<\/\w[^>]*>$/ )) {
            indent = 0;
        } else if (node.match( /^<\/\w/ )) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '\t';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });
    
    // for html
    if (isHtml) {
    	formatted = formatted.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    	formatted = formatted.replace(/\</g, "&lt;");
    	formatted = formatted.replace(/\>/g, "&gt;");
    	formatted = formatted.replace(/\n/g, "<br/>");
    }
    
    return formatted;
}