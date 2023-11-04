//XJS=comUpload.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        this.gfn_callUpload = function(obj)
        {
        	var objVal = obj.value;
        	var sfilterList = "7z|alz|egg|zip|bmp|gif|jpeg|jpg|tif|tiff|png|hwp|hwpx|hwt|csv|doc|docx|ppt|pptx|xls|xlsb|xlsx|pdf|rtf|txt|xps";
        	
        	objVal = objVal.substr(objVal.lastIndexOf(".")+1).toLowerCase();

        	var nRtn = sfilterList.indexOf(objVal);

        	if (nRtn == -1) {
        		alert("지원하지 않는 파일 형식입니다.");
        		return;
        	}
        	//var strUrl = this.gfn_svcUrl()+"rest/common/fileUpload";
        	var strUrl = application.gv_server_url+"rest/common/fileUpload";
        	var bSucc  = obj.upload(strUrl);
        }

        this.gfn_callDownload = function(oDs,sColNm)
        {
        	if (arguments.length==1) {
        		this.gfn_callDownload_Single(oDs);
        	} else {
        		var args; // 추가파라매터는 배열로 넘김
        		if (arguments.length > 2) {
        			args = new Array();
        			for (var i=2; i<arguments.length; i++) {
        				args.push(arguments[i]);
        			}
        		}
        		this.gfn_callDownload_Multi(oDs, sColNm, '', args);
        	}
        	return;
        }

        this.gfn_callDownload_Single = function(oDs)
        {
        	if (oDs.rowcount < 1) {
        		alert("다운로드할 자료가 없습니다.");
        		return;
        	}

        	var sSystemFileNm = oDs.getColumn(oDs.rowposition, "SYSTEMFILENAME");
        	var sFileName = oDs.getColumn(oDs.rowposition, "ORGFNAME");
        	var sIsSeal = this.fn_checkSeal(oDs.getColumn(oDs.rowposition, "SEAL"));

        	//var re = /[ \{\}\[\]\/?., ;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\(\=]/gi;

           	//sFileName = encodeURI(encodeURI(sFileName.replace(re, "")));
           	sFileName = encodeURIComponent(encodeURIComponent(sFileName));
           	
        	var strDownUrl = this.gfn_svcUrl()+"rest/common/fileDownload?systemFileName="+sSystemFileNm+"&fileName="+sFileName+"&isSealType="+sIsSeal;
        	//var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	//wbs_dw.set_url(strDownUrl);
        	this.fileDownHandler(strDownUrl, this);
        }

        /**
         * 파일 다운로드
         * @param oDs 파일 데이터셋
         * @param sColNm 선택값 컬럼
         * @param posCol 시작행
         * @param type 업무구분
         * @param args 업무별 추가 파라매터
         */
        this.gfn_callDownload_Multi = function(oDs,sColNm,posCol,args)
        {
        	var start = 0;
        	if (!this.gfn_isNull(posCol)) {
        		start = posCol;
        	}

        	var i = oDs.findRow(sColNm, "1", start);
        	if (i < 0) { return; }
        	
        	var sSystemFileNm = oDs.getColumn(i, "SYSTEMFILENAME");
        	var sFileName = oDs.getColumn(i, "ORGFNAME");
        	var sIsSeal = this.fn_checkSeal(oDs.getColumn(i, "SEAL"));

        	//var re = /[ \{\}\[\]\/?., ;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\(\=]/gi;

        	//sFileName = encodeURI(encodeURI(sFileName.replace(re, "")));
        	sFileName = encodeURIComponent(encodeURIComponent(sFileName));
        	var strDownUrl = this.gfn_svcUrl()+"rest/common/fileDownload?systemFileName="+sSystemFileNm+"&fileName="+sFileName+"&isSealType="+sIsSeal;
        	
        	/*
        	 * [업무별 추가 파라매터] - 서버도 함께 수정
        	 * refBbsN : 게시판 첨부파일 정보 검사 [blbdId, bbrdId]
        	 * cmpyPay : 업체정보(납부 등) [gln]
        	 * reqCmpy : 업체정보수정요청 [gln] - 적용 전
        	 * reqWrs : 신규상품등록수정 [rqno] - 적용 전
        	 */
        	var valid = true;
        	if (sIsSeal == 'refBbsN') {
        		if (args != undefined && args.length > 1) {
        			strDownUrl += "&blbdId=" + args[0] + "&bbrdId=" + args[1];
        		} else { valid = false; }
        	} else if (sIsSeal == "cmpyPay") {
        		if (args != undefined && args.length > 0) {
        			strDownUrl += "&gln=" + args[0];
        		} else { valid = false; }
        	} else if (sIsSeal == "reqCmpy") {
         		if (args != undefined && args.length > 0) {
         			strDownUrl += "&gln=" + args[0];
         		} else { valid = false; }
        	} else if (sIsSeal == "reqWrs") {
         		if (args != undefined && args.length > 0) {
         			strDownUrl += "&rqno=" + args[0];
         		} else { valid = false; }
        	}

        	if (!valid) {
        		alert('파일다운로드를 위한 정보가 없습니다.\n관리자에게 문의하세요.');
        		return;
        	}

        	this.fileDownHandler(strDownUrl, this, oDs, sColNm, i, args);
        	//var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	//wbs_dw.set_url(strDownUrl);
        }

        this.fileDownHandler = function (_url,_form,oDs,sColNm,posCol,args)
        {
        	if (!_url || !_form) {
        		alert('파일다운로드를 위한 정보가 없습니다.\n관리자에게 문의하세요.');
        		return;
        	}

        	var bMulti = false;
        	_form.setWaitCursor();

        	if (!this.gfn_isNull(sColNm)) {
        		bMulti = true;
        	}

        	$.fileDownload(_url, {
        		successCallback: function (url) {
        			_form.setWaitCursor(false);
        			if (bMulti) {
        				posCol++;
        				_form.gfn_callDownload_Multi(oDs, sColNm, posCol, args);
        			}
        		}, 
        		failCallback: function (responseHtml) {
        			_form.setWaitCursor(false);
        			alert("파일 다운로드를 실패하였습니다.\n관리자에게 문의하세요.");
        		}, 
        		httpMethod: "POST", 
        		data: ''
        	});
        }

        this.fn_checkSeal = function(sIsSeal)
        {
        	if (sIsSeal == 'Y') { // file.sealReal.path
        	} else if (sIsSeal == 'ELT') { // file.realElt.path
        	} else if (sIsSeal == 'CLT') { // file.realClt.path
        	} else if (sIsSeal == 'ofanc') { // file.ofanc.path
        	} else if (sIsSeal == 'taxXml') { // file.taxXml.path
        	} else if (sIsSeal == 'refBbs') { // file.refBbs.path
        	} else if (sIsSeal == 'refBbsN') { // file.refBbs.path + blbdId + bbrdId.substring(0,4) + bbrdId
        	} else if (sIsSeal == 'askBbs') { // file.askBbs.path
        	} else if (sIsSeal == 'dmart') { // file.dmart.path
        	} else if (sIsSeal == 'reqWrs') { // file.real.wrs.path
        	} else if (sIsSeal == 'reqCmpy') { // file.real.cmpy.path
        	} else if (sIsSeal == 'cmpyPay') { // file.real.cmpy.path + gln.substring(0,5) + gln + 'pay'
        	} else if (sIsSeal == 'tmp') { // file.temp.path
        	} else { // file.real.path
        		sIsSeal ='N';
        	}
        	return sIsSeal;
        }

        this.gfn_createWebBorwserComponent = function(obj)
        {
        	var compName = "Comp_WebBrowser"+obj.name;
        	var nSeq = this.gfn_getRandom(1, 100000);
        	compName = compName+nSeq;

        	var compWebBrowser = obj.components[compName];
        	if (obj.isValidObject(compName)) {
        		compName = compName+nSeq;
        	}

        	compWebBrowser = new WebBrowser();
        	compWebBrowser.init(compName, "absolute", 0, 0, 0, 0, null, null);

        	obj.addChild(compName, compWebBrowser);
        	compWebBrowser.show();

        	return compWebBrowser;
        }

        //파일 업로드 이벤트 등록
        this.gfn_addEventFileUpload = function(fileParam)
        {
        	var paramArr = fileParam.param;
        	for (var i=0; i < paramArr.length; i++) {
        		var param = paramArr[i];
        		param.form = fileParam.form;
        		var obj = param.fileObj;
        		obj.callUpload = false;
        		obj.param = param;
        		this.fileEventInit(obj);
        	}
        }

        this.fileUpload_onitemchanged = function(obj,e)
        {
        	var param = obj.param;
        	var maxSize = param.maxSize;
        	var maxLength = param.maxLength;
        	var ext = param.ext;
        	var fileValue = obj.value;

        	if (!fileValue) return;

        	if (fileValue && fileValue.indexOf('.') == -1) {
        		alert('잘못된 형식의 파일 확장자입니다.');
        		this.fileValidFail(obj);
        		return;
        	}
        	
        	// 파일명 검사
        	var fileReg = /[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힝|_|,|\\s|\\.|\\-|\\[|\\]|\\(|\\)]*/g;
        	if (!fileReg.test(fileValue)) {
        		alert('파일 이름에 사용할 수 없는 문자가 포함되어 있습니다.\n(사용가능문자 : 숫자/영어/한글/공백/괄호/대괄호/마침표/콤마/언더바(_)');
        		this.fileValidFail(obj);
        		return;
        	}

        	var fileExt = fileValue.substr(fileValue.lastIndexOf(".")+1).toLowerCase();
        	var sfilterList = "7z|alz|egg|zip|bmp|gif|jpeg|jpg|tif|tiff|png|hwp|hwpx|hwt|csv|doc|docx|ppt|pptx|xls|xlsb|xlsx|pdf|rtf|txt|xps";
        	
        	//확장사 검사(시스템)
        	var nRtn = sfilterList.indexOf(fileExt);
        	if (nRtn == -1) {
        		alert("지원하지 않는 파일 형식입니다.");
        		this.fileValidFail(obj);
        		return;
        	}

        	//확장자 검사(사용자)
        	if (ext && fileValue) {
        		var ext_chk = false;
        		var ext_msg = this.fileAlert('ext', ext.toString());
        		for (var i=0; i < ext.length; i++) {
        			if (ext[i].toLowerCase() == fileExt) {
        				ext_chk = true;
        				break;
        			}
        		}
        		if (!ext_chk) {
        			alert(ext_msg);
        			this.fileValidFail(obj);
        			return;
        		}
        	}

        	var fileList = obj.filelist;
        	try {
        		//파일 갯수 검사
        		if (maxLength) {
        			if (fileList.length > maxLength) {
        				alert(this.fileAlert('length', maxLength));
        				this.fileValidFail(obj);
        				return;
        			}
        		}
        		//파일사이즈 검사
        		if (maxSize) {
        			for (var i=0; i < fileList.length; i++) {
        				var fileSize = fileList[i].getFileSize();
        				if (fileSize > (maxSize*1048576)) {
        					alert(this.fileAlert('size', maxSize));
        					this.fileValidFail(obj);
        					return;
        				}
        			}
        		}
        	} catch(e) {
        		fileList = '';
        	}

        	//위에 API지원 안할경우
        	if (fileList == '') fileList = false;
        	if (!fileList) {
        		var strUrl = this.gfn_svcUrl()+"rest/common/fileValid";
        		param.form.setWaitCursor(true);
        		var result  = obj.upload(strUrl);
        	} else {
        		this.fileUploadExec(obj);
        	}
        }

        this.fileUpload_onsuccess = function(obj,e)
        {
        	var param = obj.param;
        	//loading
        	param.form.setWaitCursor(false);

        	//유효성 검사 실패(사이즈 오버)
        	if (e.datasets == null) {
        		alert('파일 업로드가 실패하였습니다.\n파일명에 사용할 수 없는 문자 또는 확장자가 있는지 확인부탁드립니다.');
        		this.fileValidFail(obj);
        		return;
        	} else if (e.datasets[0]) {
        		var ds = e.datasets[0];
        		if (ds.id == 'ds_fileValid') {
        			var fileSize = ds.getColumn(i, 'fileSize');
        			if (fileSize == -99) {
        				var maxSize = 20; //서버설정 최대용량
        				alert(this.fileAlert('size', maxSize));
        				this.fileValidFail(obj);
        				return;
        			}
        		}
        	}

        	if (obj.callUpload) {
        		obj.callUpload = false;
        		if (param.upload_after_succ) param.form[param.upload_after_succ](obj, e);
        		return;
        	}

        	var maxSize = param.maxSize;
        	var maxLength = param.maxLength;

        	if (e.datasets == null) {
        		alert('파일 유효성 정보 데이터셋을 받지 못했습니다.');
        		this.fileValidFail(obj);
        		return;
        	} else {
        		var ds = e.datasets[0];
        		for (var i=0; i < ds.rowcount; i++) {
        			var fileLength = ds.getColumn(i, 'fileLength');
        			var fileSize = ds.getColumn(i, 'fileSize');
        			if (fileLength > maxLength) {
        				alert(this.fileAlert('length', maxLength));
        				this.fileValidFail(obj);
        				return;
        			}
        			if (fileSize > (maxSize*1048576)) {
        				alert(this.fileAlert('size', maxSize));
        				this.fileValidFail(obj);
        				return;
        			}
        		}
        		this.fileUploadExec(obj, e);
        	}
        }

        this.fileUpload_onerror = function(obj,e)
        {
        	var param = obj.param;
        	//loading
        	param.form.setWaitCursor(false);
        	if (obj.callUpload) {
        		obj.callUpload = false;
        		if (param.upload_after_fail) param.form[param.upload_after_fail](obj, e);
        		else this.fileUpload_error(param.fileObj);
        		return;
        	}
        	var errorMsg = '파일 유효성 검사에 실패하였습니다.';
        	alert(errorMsg);
        	this.fileValidFail(obj);
        }

        this.fileUpload_error = function(fileObj)
        {
        	var errorMsg = '파일 업로드에 실패하였습니다.';
        	alert(errorMsg);
        	this.fileTextClear(fileObj);
        }

        this.fileTextClear = function(fileObj)
        {
        	$('#'+fileObj._unique_id).find('input').val('');
        }

        this.fileValidFail = function(obj)
        {
        	var param = obj.param;
        	this.fileTextClear(param.fileObj);
        	//파일검사 실패 후 실행
        	if (param.valid_after_fail) param.form[param.valid_after_fail](obj);
        }

        //실제파일 업로드
        this.fileUploadExec = function(obj)
        {
        	obj.callUpload = true;
        	var param = obj.param;

        	var fileUploadUrl = "";
        	if (param.doc_type == "notice") {
        		fileUploadUrl = application.gv_server_url+"rest/common/fileUpload?na_trpl_c=" + param.na_trpl_c;
        	} else {
        		//fileUploadUrl = this.gfn_svcUrl()+"rest/common/fileUpload";
        		fileUploadUrl = application.gv_server_url+"rest/common/fileUpload";
        	}

        	param.form.setWaitCursor(true);
        	var result = obj.upload(fileUploadUrl);
        }

        this.fileEventInit = function(obj)
        {
        	var param = obj.param;
        	if (param.cancelBtn) {
        		var btn = param.cancelBtn;
        		btn.param = param;
        		btn.addEventHandler("onclick", this.fileCancel, this);
        	}

        	obj.clearEventHandler("onitemchanged");
        	obj.clearEventHandler("onsuccess");
        	obj.clearEventHandler("onerror");
        	obj.addEventHandler("onitemchanged", this.fileUpload_onitemchanged, this);
        	obj.addEventHandler("onsuccess", this.fileUpload_onsuccess, this);
        	obj.addEventHandler("onerror", this.fileUpload_onerror, this);
        }

        //취소버튼
        this.fileCancel = function(obj,e)
        {
        	var param = obj.param;
        	this.fileTextClear(param.fileObj);

        	if (param.dataset) {
        		var ds = param.dataset;
        		ds.deleteAll();
        	}
        	if (param.cancel_after) param.cancel_after();
        }

        this.fileAlert = function(t,msg)
        {
        	if (t=='ext') {
        		return '지원하지 않는 파일 형식입니다.\n(지원파일: '+msg+')';
        	} else if (t=='length') {
        		return '최대 파일허용개수를 초과하였습니다.\n(최대: '+msg+')';
        	} else if (t=='size') {
        		return '최대 파일용량을 초과하였습니다.\n(최대: '+msg+'MB)';
        	} else {
        		return '';
        	}
        }

        this.isFileUpload = function(fileObj)
        {
        	var f = $('#'+fileObj._unique_id).find('input').val();
        	if (f) return true;
        	else return false;
        }
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
