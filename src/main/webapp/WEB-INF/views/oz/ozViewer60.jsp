<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="org.apache.poi.util.StringUtil"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
	String SERVER_PATH = "";
	String CONTEXT_PATH = "";
	String OZ_PATH = "";
	String sId = (String)request.getAttribute("sId");
	String serverType = (String)request.getAttribute("serverType");
	
	sId = sId.replaceAll("&", "&amp;");
	sId = sId.replaceAll("\"", "&quot;");
	sId = sId.replaceAll("'", "&apos;");
	sId = sId.replaceAll("<", "&lt;");
	sId = sId.replaceAll(">", "&gt;");
	sId = sId.replaceAll("\r", "<br>");
	sId = sId.replaceAll("\n", "<p>");
	
	if(StringUtils.isEmpty(serverType) || serverType.equals("null") || serverType.equals("undefined")){
		out.print("<script language=javascript>");
		out.print("alert('ERROR: 관리자에게 문의하세요.');");
		out.print("window.open('about:blank','_self').close();");
		out.print("</script>");
	}else if(serverType.equals("ADMIN")){
		SERVER_PATH = "https://www.nhescm.co.kr/nhvan";
		CONTEXT_PATH = "https://www.nhescm.co.kr/escm";
		OZ_PATH = "https://www.nhescm.co.kr";
	}else if(serverType.equals("DEV")){
		SERVER_PATH = "http://121.156.58.242/nhvan";
		CONTEXT_PATH = "http://121.156.58.242/escm";
		OZ_PATH = "http://121.156.58.242";
	}else if(serverType.equals("LOCAL")){
		SERVER_PATH = "http://localhost:8080/nhvan";
		CONTEXT_PATH = "http://localhost:8080/nhvan/escm";
		OZ_PATH = "http://localhost:8080";
	}
%>

<!DOCTYPE html>
<html style="height:100%">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<script src="<%=CONTEXT_PATH%>/oz/ozhtml5viewer/jquery-2.0.3.min.js""></script>
<link rel="stylesheet" href="<%=CONTEXT_PATH%>/oz/ozhtml5viewer/jquery-ui.css" type="text/css"/>
<script src="<%=CONTEXT_PATH%>/oz/ozhtml5viewer/jquery-ui.min.js"></script>
<link rel="stylesheet" href="<%=CONTEXT_PATH%>/oz/ozhtml5viewer/ui.dynatree.css" type="text/css"/>
<script type="text/javascript" src="<%=CONTEXT_PATH%>/oz/ozhtml5viewer/jquery.dynatree.js" charset="utf-8"></script>
<script type="text/javascript" src="<%=CONTEXT_PATH%>/oz/ozhtml5viewer/OZJSViewer.js" charset="utf-8"></script>
<script>
var viewer = "HTML5";
var colDiv = "^";
var rowDiv = "//ROW//";
var endDiv = "//END//";
var csvData = "";
var billingKey = "";
var isComp = true;

$(document).ready(function(){
	if (window.console == undefined) {
		console = {log:function(){}};
	}

	ajaxReq();
});

function SetOZParamters_OZViewer() {
	var oz = document.getElementById("OZViewer");

	oz.sendToActionScript("connection.servlet", "<%=OZ_PATH%>/oz60/server");
	oz.sendToActionScript("connection.reportname", "/van/<%=sId%>.ozr");
	oz.sendToActionScript("viewer.configmode", "html");
	oz.sendToActionScript("viewer.isframe", "false");
	oz.sendToActionScript("information.debug", "true");

	oz.sendToActionScript("excel.shrinktofit", "true");
	oz.sendToActionScript("xlsx.shrinktofit", "true");

	oz.sendToActionScript("connection.pcount", "4");
	oz.sendToActionScript("connection.args1", "csvdata="+csvData);
	oz.sendToActionScript("connection.args2", "coldiv="+colDiv);
	oz.sendToActionScript("connection.args3", "rowdiv="+rowDiv);
	oz.sendToActionScript("connection.args4", "enddiv="+endDiv);
	oz.sendToActionScript("viewer.progresscommand", "true");
	oz.sendToActionScript("export.format", "pdf");  // 파일저장시 기본 포맷 지정
	return true;
}

function OZProgressCommand_OZViewer(step, state, reportname) {
	if (!isComp) return;
	var billSid = ['VAN_DS_SC_0110_1','VAN_DS_SC_0110_2','VAN_DS_SC_0110_3'];
	if (step == 4 && state == 2) {
		for (var i=0; i<billSid.length;i++) {
			if ($('#sId').val() == billSid[i]) {
				billingAjax();
				break;
			}
		}
	}
}

var ozViewerRun = function() {
	start_ozjs("OZViewer", "<%=CONTEXT_PATH%>/oz/ozhtml5viewer/");
};

var ajaxReq = function() {
	var sId = $('#sId').val();
	var sName = $('#sName').val();
	var sUrl = $('#sUrl').val();
	var paramType = $('#paramType').val();
	var sParam = unescape($('#sParam').val());
	sParam = htmlEntityDec(sParam);
	var jsonParam = getRestParam(sParam);
	var is_sName = false;
	for (var keys in jsonParam) {
		if (keys == 'sName') is_sName = true;
	}
	if (!is_sName) jsonParam.sName = sName;

	if (paramType == 'csv') { //sParam이 실제 데이터
		csvData = getCsvDataSet(sId, getRestParam(sParam));
		ozViewerRun();
		return;
	}

	var _async = true;

	$.ajax({
		url: sUrl,
		type: 'post',
		dataType: 'json',
		data: jsonParam,
		async: _async,
		beforeSend: function(){
			processingDialog.open();
    	},
		success: function(result) {
			if (result.code != 'SUCCESS') { //실패
				alert(result.message);
			} else {
				var data = result.data;

				//데이터 유효성 검사
				var isData = false;
				if(data.length > 0){

					for(var i=0 ; i<data.length; i++){
						if($.isArray(data[i])){
							if(data[i].length > 0) isData = true;
						}else{
							if(data) isData = true;
						}
					}
				}

				if(!isData){
					var isComp = false;
					alert('출력할 데이터가 없습니다.');
					return;
				}

				//빌링키 get
				var billObj = data[0];
				if ($.isArray(billObj)) {
					if(billObj[0].billingKey) {
						billingKey = billObj[0].billingKey;
					}
				} else {
					if (billObj.billingKey) {
						billingKey = billObj.billingKey;
					}
				}
				if (billingKey) {
					data.shift();
				}

				csvData = getCsvDataSet(sId, data);
				ozViewerRun();
			}
		},
		error: function(jqXHR, status, error) {
			alert(status + ' : ' + error);
		},
		complete : function (){
			processingDialog.close();
        }
	});

};

//String -> Json (key1:value1;key2:value2)
var getRestParam = function(param) {
	var json = {};
	var arr = param.split('//END//');

	for (var i = 0 ; i < arr.length ; i++) {
		var name = arr[i].split('//COL//')[0];
		var value = arr[i].split('//COL//')[1];
		json[name] = value;
	}
	return json;
}

var getCsvDataSet = function(sId, rData) {
	var data = [];

	if (!$.isArray(rData)) {
	  	data.push(rData)
	} else {
		data = rData;
	}

	var csv = "";

	for (var i = 0; i < data.length; i++) {
		var _data = data[i];

		if ($.isArray(_data)) {
			for (var j = 0; j < _data.length; j++) {
				var _data2 = _data[j];

				if ($.isArray(_data2)) {
					for (var k = 0; k < _data2.length; k++) {
						var _data3 = _data2[k];
						if (k == 0) {
							csv += jsonToCsv(_data3, true) + rowDiv;
						} else {
							csv += jsonToCsv(_data3) + rowDiv;
						}
					}
				} else {
					if (j == 0) {
						csv += jsonToCsv(_data2, true) + rowDiv;
					} else {
						csv += jsonToCsv(_data2) + rowDiv;
					}
				}
			}
			//new Dataset
			csv += endDiv;
			if (i != data.length -1) csv += rowDiv;
		} else {
			var json = _data;
			csv += jsonToCsv(json, true) + rowDiv;
		}
	}
	return csv;
};

var jsonToCsv = function(json, isHeadMake) {
	var head = "";
	var body = "";
	var colName = "";

	for (var keys in json) {
		var nullStr = "";
		head += keys + colDiv;
		var data = $.trim(json[keys]);
		if (keys.length > 4 && keys.substring(0,4) == 'NUM_') {
			nullStr = '0';
			if(data.charAt(0)=='.') data = '0' + data;
		}
		if (keys.length > 4 && keys.substring(0,4) == 'YMD_') {
			if (data.length == 8) data = data.substring(0,4)+'-'+data.substring(4,6)+'-'+data.substring(6,8);
		}
		if (!data || data == 'null' || data == 'NULL') data = nullStr;

		body += data + colDiv;
		colName += keys + '\n';
	}
	head = head.substring(0, head.length-colDiv.length);
	body = body.substring(0, body.length-colDiv.length);
	if (isHeadMake) return head + rowDiv + body;
	else return body;
}

var processingDialog = {
	id: 'processing-dialog',
	open: function() {
		var div = $('#' + this.id);
		if (div.length < 1) {
			div = $('<div id="' + this.id + '" style="display: none; text-align: center;">'
					+ '<img src="<%=CONTEXT_PATH%>/oz/img/loading.gif" />'
					+ '<p style="font-size: 9pt">요청하신 작업을 처리중입니다.</p>'
					+ '</div>');
			$('body').append(div);
		}
		div.dialog({
			modal: false,
			width: 250,
			height: 130,
			close: function() {
				$(this).dialog('destroy');
			}
		});
		div.parents('.ui-dialog:first').find('.ui-dialog-titlebar').remove();
	},
	close: function() {
		try {
			$('#' + this.id).dialog('close');
		} catch (e) {}
	}
};

var billingAjax = function() {
	$.ajax({
		url: '<%=SERVER_PATH%>/rest/oz/billingMark',
		type: 'post',
		dataType: 'json',
		data: {billingKey : billingKey},
		beforeSend: function(){
    		//processingDialog.open();
    	},
		success: function(result) {
			if (result.code != 'SUCCESS') { //실패
				alert('빌링 프로세스 실패!\n관리자에게 문의하세요.');
			}
		},
		error: function(jqXHR, status, error) {
			alert(status + ' : ' + error);
		},
		complete : function (){
			//processingDialog.close();
        }
	});
};

//특수문자 디코딩
var htmlEntityDec = function(str) {
    if (!str) {
        return str;
    } else {
        return replaceAll(str,'//C1//','&');
    }
};

var replaceAll = function(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
};
</script>
</head>
<body style="width:98%;height:98%">
	<div id="OZViewer" style="width:98%;height:98%"></div>
	<form id="ozForm">
		<input type="hidden" name="sId" id="sId" value="${sId}" />
		<input type="hidden" name="sName" id="sName" value="${sName}" />
		<input type="hidden" name="sUrl" id="sUrl" value="${sUrl}" />
		<input type="hidden" name="paramType" id="paramType" value="${paramType}" />
		<input type="hidden" name="sParam" id="sParam" value="${sParam}" />
	</form>
</body>
</html>