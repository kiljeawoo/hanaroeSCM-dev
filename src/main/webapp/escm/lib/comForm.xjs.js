//XJS=comForm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
         /*********************************************************************************************
         * Function   : gfn_SetInitForm(obj:Form, e:LoadEventInfo) 
         * Parameter  : obj - Form object
                          e - Event Info
         * Return     : none
         *
         * form onload 공통
        *********************************************************************************************/
        this.gfn_setInitForm = function(obj,e)
        {
        	//quickviewmode일때
        	if(application.gv_quickviewmode) {
        		this._gfn_callMessage();
        	}

        	//컴포넌트 수집 함수(재귀호출)
        	this._gfn_setComponents(obj);
        	
        	application.gv_today = this.gfn_getServerTime("yyyyMMdd");
        	
        	try{
        	    this.lookupFunc("fn_afterFormOnload").call();
        	    this.formOnActivate(obj);
        	} catch(e){
        	}	
        }

        this._gfn_setComponents = function(obj)
        {
        	var complist = obj.components;
        	
            if (!complist) {
                return;
            }
            
            for(var i= 0; i < complist.length; i++)
            {
        		if(complist[i] instanceof PopupDiv) continue;
        		
        		if(complist[i] instanceof Tab) {
                    this._gfn_setComponents(complist[i]);
                } else if(complist[i] instanceof Div || complist[i] instanceof Tabpage) {
                			
                    if(this.gfn_isNull(complist[i].url)) {
                        this._gfn_setComponents(complist[i]);
                    }
                
                } else if (complist[i] instanceof Grid ) {			
        			if(complist[i].visible == true) {			
        				this._gfn_setDsGridFormat(complist[i]);
        			}
        		} else if (complist[i] instanceof Calendar ) {	//달력일때 	viewyearspin =true, viewmonthspin = true	
        			if(complist[i].visible == true) {			
        				this._gfn_setCalendarSyle(complist[i]);
        			}
        		}
        	}
        }

        this._gfn_setCalendarSyle = function(obj)
        {
        	obj.style.set_viewmonthspin(true);
        	obj.style.set_viewyearspin(true);
        }

        
        this._gfn_setDsGridFormat = function(obj)
        {
        	var bindDS = this.all[obj.binddataset];
        	
        	if(!this.gfn_isNull(bindDS)){
        		bindDS.bindgrid = obj;
        		bindDS.orgGridFormat = obj.formats;
        	}
        	this.gridPointer(obj);
        	this.gridAutoResize(obj);
        }

        //폼 onActivate 이벤트
        this.formOnActivate = function(form)
        {
        	var sId = form.getScreenId();
        	if (this.isGlobalEvent(sId, 'ON_ACTIVATE')) {
        		var param = form.isGlobalEvent(sId, 'ON_ACTIVATE', 'PARAM');
        		if (form[param]) form[param]();
        	}
        }

        //그리드 css 커서
        this.gridPointer = function(grid){

        	if(!grid) return;	
        	var n = 0;
        	for(var i=0 ; i<10 ; i++){
        		var objFunction = grid.getEventHandler("oncellclick", i);
        		if(objFunction){ 
        			n++;
        			break;
        		}
        	}
        	if(n > 0) grid.style.set_cursor('pointer');
        };

        //그리드 자동 사이즈 조절
        this.gridAutoResize = function(obj){
        	
        	var sId = this.getScreenId();
        	if(!this.isGlobalEvent(sId, 'GRID_RESIZE')){
        		obj.set_enableredraw(false);
        		obj.set_cellsizingtype('col'); //마우스로 컬럼 사이즈 조절	
        		obj.set_autosizebandtype('body');
        		obj.set_autosizingtype('both'); //자동 컬럼 사이즈 조절	
        		obj.set_extendsizetype('row');
        		obj.set_cellsizebandtype('body');
        		
        		for(var i=0 ; i < obj.getCellCount("Body") ; i++){
        			
        			var nSize = obj.getFormatColSize(i);
        			if(nSize == 0) {
        				obj.setCellProperty("Body", i, "autosizerow", "none");
        				obj.setCellProperty("Body", i, "autosizecol", "none");
        				continue;
        			}
        			obj.setCellProperty("Body", i, "autosizerow", "limitmin");
        			obj.setCellProperty("Body", i, "autosizecol", "limitmin");
        		}
        		obj.set_enableredraw(true);
        	}
        };

        /**
         * @class 팝업 오픈 실행 함수
         * @param sPopupId		( Popup Form의 ID )
         * @param sUrl 		( Popup Form  URL )
         * @param oArg 		( Popup Form으로 전달될 Argument )
         * @param sOption 	( Popup Form Left Position )
         * @param sPopupCallback 		( Popup Form Top Position )
         * @return Boolean
         */  
         this.gfn_openPopup = function (sPopupId,sUrl,oArg,sOption,sPopupCallback)
        {
        	var nLeft = -1;
        	var nTop = -1;
        	var nWidth = 1;
        	var nHeight = 1;	
        	var bShowTitle = false;		
        	var bShowStatus = false;	
        	var bModeless = false;
        	var bLayered = false;
        	var nOpacity = 100;
        	var bAutoSize = false;
        	var bResizable = false;
        	//var sPopupCallback = (this.gfn_isNull(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;
        	var sTitleText = "";
        	
        	//var bShowonTaskbar = true;
        	
        	var aVal = sOption.split(",");	
        	for (var i=0; i<aVal.length; i++){
        		var aVal2 = aVal[i].trim().split("=");
        		switch (aVal2[0]){
        			case "top":				
        				nTop = parseInt(aVal2[1]);
        				break;
        			case "left":
        				nLeft = parseInt(aVal2[1]);
        				break;
        			case "width":
        				nWidth = parseInt(aVal2[1]);
        				break;
        			case "height":
        				nHeight = parseInt(aVal2[1]);
        				break;
        			case "title":
        				bShowTitle = aVal2[1];
        				break;	
        			case "titletext":
        				sTitleText = aVal2[1];
        				break;							
        			case "status":
        				bShowStatus = aVal2[1];
        				break;		
        			case "modeless":
        				bModeless = aVal2[1];
        				break;
        			case "layered":
        				bLayered = aVal2[1];
        				break;
        			case "opacity":
        				nOpacity = aVal2[1];
        				break;
        			case "autosize":
        				bAutoSize = aVal2[1];
        				break;
        			case "resizable":
        				bResizable = aVal2[1];
        				break;
        // 			case "showontaskbar":				
        // 				bShowonTaskbar = aVal2[1];
        // 				break;
        		}
        	}	
        	
        	if (bShowTitle == "true"){
        		nHeight+=32;
        	}
        	//trace("nHeight : " + nHeight);	
        	var sOpenalign = "";
        	//sTitleText = (this.gfn_isNull(sTitleText)) ? sPopupId : sTitleText;
        	//sTitleText = sPopupId;
        	//trace("sTitleText :  "+sTitleText);
        	if (nLeft == -1 && nTop == -1){
        		sOpenalign = "center middle";
                nLeft   = (application.mainframe.width/2) - Math.round(nWidth/2);
        	    nTop    = (application.mainframe.height/2) - Math.round(nHeight/2);
        	}
        	
        	var objParentFrame = this.getOwnerFrame();
        	//trace("nLeft:"+nLeft+","+"nTop:"+nTop+","+"nWidth:"+nWidth+","+"nHeight:"+nHeight);
            if (bModeless == "true"){
                var sOpenStyle = "showtitlebar="+bShowTitle+" showstatusbar=false autosize=true resizable=false";
                application.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight,this);
            } else {
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId,"absolute",nLeft, nTop, nWidth, nHeight, null, null, sUrl);
        		
        		newChild.set_dragmovetype("all");
        		newChild.set_showtitlebar(bShowTitle);
        		newChild.set_autosize(bAutoSize);
        		newChild.set_resizable(bResizable);
        		newChild.set_showstatusbar(bShowStatus);
        		newChild.set_openalign(sOpenalign);
        		newChild.set_layered(bLayered);
        		newChild.style.set_opacity(nOpacity);
        		
        		if(bShowTitle) {
        			//newChild.set_titletext("TEST");
        // 			newChild.style.set_border("2 solid #545e64");
        // 			newChild.style.set_bordertype("normal 0 0");
        // 			newChild.style.set_background("white");
        			
        			newChild.style.set_border("0 none, 2 solid #1d8ea7, 2 solid #1d8ea7, 2 solid #1d8ea7");
        			newChild.style.set_bordertype("normal 0 0");
        			newChild.style.set_background("white");
        		}
        		
        		newChild.showModal(objParentFrame, oArg, this,sPopupCallback,true);
            }
        }

        /***********************************************************************************************
         * Function   : gfn_getMessage
         * Parameter  : msgType, msgCode
         * Return     : '확인' 버튼- true, '취소' 버튼 - false
         *
         * 메세지 값을 문자열 치환하여 메세지 내용을 표시한다.                
        ***********************************************************************************************/ 
        this.gfn_getMessage = function(msgType,msgCode)
        {
            if (this.gfn_isNull(msgCode))
            {
        		trace("메세지 코드를 입력하세요.");
        		return;
            }
            
            if(application.gds_msg.rowcount == 0) return;
            
            var fRow = application.gds_msg.findRow("KEY", msgCode);
            
            if (fRow < 0)
            {
        		trace("잘못된 메세지코드입니다.");
                return;        
            }    
            
            var msgContents = application.gds_msg.getColumn(fRow,"MESSAGE");
            
            if(arguments.length > 2) {
        		for (var i=2; i<arguments.length; i++) 
        		{
        			msgContents = msgContents.replace("{"+(i-2)+"}", arguments[i]);
        		}
            }
            
            var arrVal = String(msgContents).split(";");
        		
        	if (arrVal.length > 0){
        	
        		msgContents = this._gfn_AddNewLine(arrVal);
        	}
           
        	msgType = msgType.toUpperCase();
        	
            if (msgType == "CONFIRM")  
            {
                return application.confirm(msgContents, "Question", "QUESTION");
            } else
            {
                //msgType = (msgType== "INFO") ? "Information" : ((msgType=="WARN") ? "Warning" : "Error");
                msgType = "Warning";
                application.alert(msgContents, msgType, msgType.toLowerCase());
            }
        }

        /***********************************************************************************************
         * Function   : gfn_GetTextMessage
         * Parameter  : msgType, msgCode
         * Return     : Message
         *
         * 메세지 값을 문자열 치환하여 메세지 내용을 표시한다.                
        ***********************************************************************************************/ 
        this.gfn_getTextMessage = function(msgCode)
        {
            if (this.gfn_isNull(msgCode))
            {
        		trace("메세지 코드를 입력하세요.");
        		return;
            }
            
            if(application.gds_msg.rowcount == 0) return;
            
            var fRow = application.gds_msg.findRow("KEY", msgCode);
            
            if (fRow < 0)
            {
        		trace("잘못된 메세지코드입니다.");
                return;
            }
            
            var msgContents = application.gds_msg.getColumn(fRow,"MESSAGE");
            
            for (var i=1; i<arguments.length; i++)
            {
                msgContents = msgContents.replace("{"+(i-1)+"}", arguments[i]);
            }
            
            var arrVal = String(msgContents).split(";");
        	
        	if (arrVal.length > 0){
        	
        		msgContents = this._gfn_AddNewLine(arrVal);
        	}
            
            return msgContents;
            
        }

        //LABEL 개행처리
        this._gfn_AddNewLine = function(arrVal)
        {
        	var sValue="";
        	
        	for(var i=0 ; arrVal.length > i ; i++){ 
        		if(i != arrVal.length-1){ 
        			sValue += arrVal[i] + String.fromCharCode(13) + String.fromCharCode(10);
        		}else{ 
        			sValue += arrVal[i];
        		}
        	}
        			
        	return sValue;
        }

        this._gfn_callMessage = function()
        {
        	var sSvcID        = "getMessageList";
        	var sURL          = "svc::rest/common/getMessageList";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_msg=message_list";
        	var sArgument     = "";
        	var sCallbackFunc = "gfn_callBackReturn";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        }

        //공통코드를 가져오는 함수.
        this.gfn_setCommonCode = function(param)
        {
        	var sCode = "";
        	var sOutDs = "";

        	for (var idx in param) 
            {
        		if(idx == "indexOf") { break; }
        		var sCodeOrg   = param[idx].code;
        		var sOutDsOrg  = param[idx].dsName;
        		
        		var arrDsNm = new Array(2);
        		if(sCodeOrg.indexOf("$") != -1){
        			arrDsNm = sCodeOrg.split("$");
        		}else{
        			arrDsNm[0] = sCodeOrg;
        		}		
        		
        		if(idx == 0) {
        			sCode  = sCodeOrg;			
        			sOutDs = sOutDsOrg+"="+arrDsNm[0];		
        		}else{			
        			sCode += ","+sCodeOrg;
        			sOutDs += " "+sOutDsOrg+"="+arrDsNm[0];			
        		}	
        	}
        	
        	var paramList = "codeKeys="+sCode;
        	  
        	var sSvcID        = "getCodeList";//통신아이디
        	var sURL          = "svc::rest/common/getCodeList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = sOutDs;   //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = paramList;// 파라미터
        	var sCallbackFunc = "gfn_callBackReturn";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	trace("gfn_callService precomplete");
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        			trace("gfn_callService complete");
        	this.gfn_setComboHead(param);
        	
        }

        this.gfn_setMobileCommonCode = function(param)
        {
        	var sCode = "";
        	var sOutDs = "";

        	for (var idx in param) 
            {
        		if(idx == "indexOf") { break; }
        		var sCodeOrg   = param[idx].code;
        		var sOutDsOrg  = param[idx].dsName;
        		
        		var arrDsNm = new Array(2);
        		
        		arrDsNm[0] = sCodeOrg;
        				
        		if(idx == 0) {
        			sCode  = sCodeOrg;			
        			sOutDs = sOutDsOrg+"="+arrDsNm[0];		
        		}else{			
        			sCode += ","+sCodeOrg;
        			sOutDs += " "+sOutDsOrg+"="+arrDsNm[0];			
        		}	
        	}
        		
        	var paramList = "codeKeys="+sCode;
        	  
        	var sSvcID        = "getCodeList";//통신아이디
        	var sURL          = "svc::rest/common/getCodeList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = sOutDs;   //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = paramList;// 파라미터
        	var sCallbackFunc = "gfn_callBackReturn";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        		
        	this.gfn_setComboHead(param);
        }

        this.gfn_setPortalCommonCode = function(param)
        {
        	var sCode = "";
        	var sOutDs = "";

        	for (var idx in param) 
            {
        		if(idx == "indexOf") { break; }
        		
        		var sCodeOrg   = param[idx].code;
        		var sOutDsOrg  = param[idx].dsName;		
        		
        		if(idx == 0) {
        			sCode  = sCodeOrg;
        			sOutDs = sOutDsOrg+"="+sCode;	
        		}else{
        			sCode += ","+sCodeOrg;
        			sOutDs += " "+sOutDsOrg+"="+sCodeOrg;		
        		}
        	}
        	
        	var paramList = "codeKeys="+sCode;
        	
        	var sSvcID        = "getPortalCodeList";//통신아이디
        	var sURL          = "svc::rest/common/getPortalCodeList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = sOutDs;   //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = paramList;// 파라미터
        	var sCallbackFunc = "gfn_callBackReturn";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        		
        	this.gfn_setComboHead(param);
        }

        this.gfn_setComboHead = function(param)
        {
        	for (var idx in param) 
            {
        		var dsName     = param[idx].dsName;
        		var selecttype = param[idx].selecttype;
        		
        		var dsComboName = this.gfn_getDataset(dsName);
        		
        		//초기값 설정
        		if (!this.gfn_isNull(selecttype)){
        			switch (selecttype){
        				case "A":
        					this._insertDefaultRow(dsComboName,"- 전체 -","all");
        					break;
        				case "S":
        					this._insertDefaultRow(dsComboName,"- 선택 -","");
        					break;
        				case "N":
        					this._insertDefaultRow(dsComboName,"","");
        					break;
        			}
        		}
        	}
        	
        	try{
        		this.lookupFunc("fn_commonAfterOnload").call();
        	} catch(e) {
        	}
        }

        /**
         * @class 첫번째 Row 행추가
         * @param Dataset Object
         * @param Dataset value
         * @return N/A
         */ 
        this._insertDefaultRow = function(ds,value,data)
        {
        	if (ds.insertRow(0) != -1)
            {
                ds.setColumn(0,"SIMP_C",data);
                ds.setColumn(0,"SIMP_CNM",value);
            }
        }

        //조회조건Div Resize함수
        this.gfn_searchDivResize = function(obj,objDiv1,objDiv2)
        {
        	var nHVal;

        	if(obj.cssclass == "btn_WFSA_SearchClose"){
        		obj.set_cssclass("btn_WFSA_SearchOpen");
        		objDiv1._setheight = objDiv1.height;
        		nHVal = 2;
        	}else{
        		obj.set_cssclass("btn_WFSA_SearchClose");
        		nHVal = objDiv1._setheight;
        	}

        	objDiv1.set_height(nHVal); 	
        	var nBottom = nexacro.toNumber(objDiv1.top) + nexacro.toNumber(objDiv1.height) -1;
        	objDiv2.set_top(nexacro.toNumber(nBottom));
        	
        }

        //조회조건Div Resize함수(모바일용)
        this.gfn_mobileSearchDivResize = function(obj,objDiv1,objDiv2)
        {
        	var nHVal = objDiv1.height;

        	if(nHVal != 2){
        		objDiv1._setheight = objDiv1.height;
        		nHVal = 2;
        	}else{
        		nHVal = objDiv1._setheight;
        	}

        	objDiv1.set_height(nHVal); 	
        	var nBottom = nexacro.toNumber(objDiv1.top) + nexacro.toNumber(objDiv1.height) -1;
        	
        	objDiv2.set_top(nexacro.toNumber(nBottom));
        }

        this.gfn_logout = function()
        {
        	var sSvcID        = "logout";
        	var sURL          = "svc::rest/pt/logout";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "gfn_callBackReturn";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        	this.gfn_clearGlobal();	
        }

        this.gfn_mobilelogout = function()
        {
        	var sSvcID        = "logout";
        	var sURL          = "svc::rest/pt/logout";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "gfn_callBackReturn";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        	this.gfn_clearGlobalMobile();
        	
        	application.afrm_VFrameSet0.set_separatesize("*,0");
        }

        this.gfn_clearGlobal = function()
        {
        	if(system.navigatorname != 'nexacro'){
        		location.href = application.gv_redirect_url;
        		return;
        	}
        	var collection = application.all;
        	
        	var nLength = application.afrm_FrameSet.frames.length;
        	
        	for(var i=nLength-1; i >= 0 ; i--){
        	
        		application.gds_openMenu.deleteRow(i);	
        		application.afrm_FrameSet.frames[i].form.close();	
        	}
        	
        	for(var i=0,size=collection.length; i<size; i++){
        	
        		var obj = collection[i];
        		if(obj instanceof Dataset){

        			if(obj.name == "gds_msg" || obj.name == "gds_serviceInfo" || obj.name == "gds_serviceBT") continue; //삭제대상

        			var nRowCnt = obj.clearData();
        		}
        	}
        	
        	application.gv_userKey      = "";
        	application.gv_userId       = "";
        	application.gv_glnCode      = "";
        	application.gv_mbcoType     = "";
        	application.gv_companyName  = "";
        	application.gv_userName     = "";
        	application.gv_companyType  = "";
        	application.gv_lastLoginDt  = "";
        	application.gv_userType     = "";
        	application.gv_firstLoginYn = "";
        	application.gv_userCvDsc    = "";
        	application.gv_userStatus   = "";
        	application.gv_userTPC      = "";
        	application.gv_userAuth     = "";
        	application.gv_pwOverTermYn = "";
        	application.gv_hoffApvYn    = "";
        	application.gv_naUsrSysKdc  = "";
        	
        	application.afrm_TopFrame.set_formurl("");
        	application.afrm_HFrameSet0.set_separatesize("0,0,*");
        	application.afrm_VFrameSet0.set_separatesize("*,0,0");
        	
        }

        this.gfn_clearGlobalMobile = function()
        {
        	var collection = application.all;
           
        	for(var i=0,size=collection.length; i<size; i++){
           
        		var obj = collection[i];
        		if(obj instanceof Dataset){

        			if(obj.name == "gds_mobileMenu") continue; //삭제대상

        			var nRowCnt = obj.clearData();
        		}
        	}
           
        	application.gv_userKey      = "";
        	application.gv_userId       = "";
        	application.gv_glnCode      = "";
        	application.gv_mbcoType     = "";
        	application.gv_companyName  = "";
        	application.gv_userName     = "";
        	application.gv_companyType  = "";
        	application.gv_lastLoginDt  = "";
        	application.gv_userType     = "";
        	application.gv_firstLoginYn = "";
        	application.gv_userCvDsc    = "";
        	application.gv_userStatus   = "";
        	application.gv_userTPC      = "";
        	application.gv_userAuth     = "";
        	application.gv_pwOverTermYn = "";
            application.gv_hoffApvYn    = "";
        	application.gv_naUsrSysKdc  = "";
        }

        this.gfn_openIntroMenu = function(nMenuID)
        {
        	application.afrm_TopFrame.set_formurl("");
        	application.afrm_LeftFrame.set_formurl("frame::LeftFrame_ServiceInfo.xfdl");
        	//application.afrm_PotalFrame.set_formurl("");
        	application.afrm_TopFrame.set_formurl("frame::TopFrame_serviceInfo.xfdl");
        	application.afrm_VFrameSet0.set_separatesize("0,65,*");
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("0,*");
        	
        // 	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        // 	objGrid.set_treeinitstatus("collapse,all");	
        // 	var nTopRow      = application.gds_serviceInfo.findRow("MENU_ID", nMenuID);
        // 
        // 	
        // 	var nTPRow = objGrid.getTreeParentRow(nTopRow);
        // 	objGrid.setTreeStatus(objGrid.getTreeRow(nTPRow),true);
        // 	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nTopRow);
        	
        	this.gfn_OpenMenuId(nMenuID,"","SERVICE");
        }

        /***********************************************************************************************
         * Function   : gfn_popupMsg
         * Parameter  : id, type, msg, action, title, height, chk
         *
         * 팝업 메시지 창 표시
         * id와 msg는 필수, 나머지는 옵션 파라매터
         * height : 자동 리사이즈가 되지 않기 때문에 문자열을 넣고 height값을 조절해가며 테스트 필요(기본높이 200px)
         * chk : Y(기본)/N 다시보지않기 표시 여부
         *
         * [TYPE]
         * TEXT : 일반메시지 팝업 표시 (미입력시 기본값)
         * MENU : 메뉴 이동 여부를 묻는 팝업창 표시, action에는 메뉴ID 입력
         * LINK : URL 이동 여부를 묻는 팝업창 표시, action에는 http를 포함한 URL입력
        ***********************************************************************************************/ 
        this.gfn_popupMsg = function(id,msg,type,action,title,height,chk)
        {
        	var doNotShow  = application.getPrivateProfile("pp_" + id);
        	if (doNotShow == "Y") {
        		// 다시보지않기 상태
        		// trace("팝업 다시보지않기 : pp_" + id);
        		return;
        	}
        	
        	var oArg = {
        		pId:id,
        		pType:type,
        		pMsg:msg,
        		pAction:action,
        		pTitle:title,
        		pChk:chk
        	};
        	
        	var sOption = "autosize=true,title=true";
        	if (height != "" && Number(height) > 0) {
        		sOption = "title=true,width=450,height=" + height;
        	}
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_MSG","POPUP::POPUP_MSG.xfdl",oArg,sOption,sPopupCallBack);		
        }

         /***********************************************************************************************
         * Function   : gfn_onkeydown
         * Parameter  : e
         *
         * 단축키
         * 조회 : Ctrl+Alt+F
         * 저장 : Ctrl+Alt+S
         * 엑셀 : Ctrl+Alt+E
         * 출력 : Ctrl+Alt+P
        ***********************************************************************************************/
        this.gfn_onkeydown = function(e,s)
        {
        	var key;
        	
        	// 조회
        	if(e.ctrlKey && e.altKey && e.keycode==70)
        	{
        		key = "F"; 
        	}
        	
        	// 저장
        	if(e.ctrlKey && e.altKey && e.keycode==83)
        	{
        		key = "S"; 
        	}
        	
        	// 엑셀
        	if(e.ctrlKey && e.altKey && e.keycode==69)
        	{
        		key = "E"; 
        	}
        	
        	// 출력
        	if(e.ctrlKey && e.altKey && e.keycode==80)
        	{
        		key = "P"; 
        	}	
        	
        	return key;
        }

         /***********************************************************************************************
         * Function   : gfn_onmousemove
         * Parameter  : obj, key
         *
         * 툴팁 표시
         * 조회 : Ctrl+Alt+F
         * 저장 : Ctrl+Alt+S
         * 엑셀 : Ctrl+Alt+E
         * 출력 : Ctrl+Alt+P
        ***********************************************************************************************/
        this.gfn_onmousemove = function(obj,key)
        {
        	// 조회
        	if(key == "F")
        	{
        		obj.set_tooltiptext("Ctrl+Alt+F");
        	}
        	
        	// 저장
        	if(key == "S")
        	{
        		obj.set_tooltiptext("Ctrl+Alt+S");
        	}
        	
        	// 엑셀
        	if(key == "E")
        	{
        		obj.set_tooltiptext("Ctrl+Alt+E");
        	}
        	
        	// 출력
        	if(key == "P")
        	{
        		obj.set_tooltiptext("Ctrl+Alt+P");
        	}
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
