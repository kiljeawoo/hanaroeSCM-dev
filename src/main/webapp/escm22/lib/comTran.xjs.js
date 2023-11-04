//XJS=comTran.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        /*************************************************************************************************
         * 서버 호출
         * @param svcID  서비스ID CallBack에서 svcID로 분기처리
         * @param strURL  서비스 URL
         * @param inData  서버로 전송할 DataSet
         *                예: ds_select=ds_select:A ds_select2=ds_select2
         * @param outData  서버로부터 전송 받을  DataSet
         *                 예:  ds_master=ds_servername
         * @param otherArg  서버로 전송할 기타 Argument
         *                  예: key=value key2=value2
         * @param callBackFnc  서버에서 처리가 완료된 후 Callback 받을 Function 명
         *
         * @param tranType 저장/조회 구분값.  U:저장/삭제, S:조회
         * @param isSync  동기식으로 설정할지 여부. 특별한 상황이외엔 비동기설정 (비동기: false)
         * @return 없음
         ************************************************************************************************/
        this.gfn_callService = function(svcID,strURL,inData,outData,otherArg,callBackFnc,tranType,isSync)
        {
        	trace("gfn_callService 시작");
        	if(application.gv_quickviewmode == true){
        		if(strURL.indexOf("?") != -1) {
        			var arrVal = strURL.substr(5).split("?");		
        			alert(arrVal[0]+" 의 '?userKey=xxx'를 삭제하세요!");
        			return;
        		}
        		
        		if (this.gfn_isNull(tranType)){
        			alert("gfn_callService함수의 7번째 인자에 Transaction 구분값을 넣으세요.");
        		}
        	}
        	
        	if(application.gv_userTPC == "admin"){
        		var arrURL = strURL.split("::");
        		strURL = "svc_admin::"+arrURL[1];
        	}
        	
        	strURL = strURL+"?glnCode=" + application.gv_glnCode + " mainVersion="+ application.gv_version + " userKey="+ application.gv_userKey;
        	svcID  = svcID+"^"+callBackFnc;
        		
        	// 비동기여부 지정여부
        	if (this.gfn_isNull(isSync)){
        		isSync = false;
        	}
        	
        	var isHttpAsync = true;
        	// 동기식 설정
        	if (isSync != undefined && isSync != null && isSync == true){
        		isHttpAsync = false;
        	}
        	// trace(outData);
        	this._gfn_clearDataOutDsList(outData);
        	// trace("gfn_callService 내부 통과중");
        	this.transaction(svcID, strURL, inData, outData, otherArg, "gfn_callBackResult", isHttpAsync);
        	trace("gfn_callService 종료");
        }

        /****************************************************************
         * 서버 호출후 전체 공통 Callback 서비스
         * @param param
         * @param errCode 에러 Code
         * @param errMsg  에러 메시지
         * @return 없음
         ******************************************************************/
        this.gfn_callBackResult = function (svcID,ErrorCode,ErrorMsg)
        {
        	var arrParam = svcID.split("^");
        	svcID = arrParam[0];

        	if(application.gv_quickviewmode == false){
        		if(ErrorCode == -100) {
        			this.gfn_getMessage("alert", ErrorMsg);
        			this.gfn_clearGlobal();
        			return;
        		}
        		if(ErrorCode == -200) { //메시지정보 가져오기전
        			if(svcID != 'getServerTime' && svcID != 'getMessageList' && svcID != 'retrieveBlbdOfancMainList'){
        				alert('클라이언트와 서버 버전이 일치하지 않습니다.\n브라우저 종료후 재실행해 주십시오.');
        				//application.exit();
        				//window.close();
        				return;
        			}
        		}
        		if(ErrorCode == -300){
        			this.gfn_getMessage("alert", ErrorMsg);
        			this.gfn_clearGlobal();
        			return;
        		}
        		if(ErrorCode == -400){
        			var blockMsgs = ErrorMsg.split("||");
        			var blockMsg = "<" + blockMsgs[0] + ">\n\n" + blockMsgs[1] + "\n" + blockMsgs[2] + " ~ " + blockMsgs[3];
        			alert(blockMsg);
        			this.gfn_clearGlobal();
        			return;
        		}
        		if(ErrorCode == -500){
        			var blockMsgs = ErrorMsg.split("||");
        			var blockMsg = "<" + blockMsgs[0] + ">\n\n" + blockMsgs[1];
        			alert(blockMsg);
        			return;
        		}
        		if(ErrorCode == -600){
        			alert('비정상적인 요청입니다. 화면을 새로고침 한 뒤 다시 시도해 주세요.');
        			return;
        		}
        	}
        	
        	if (application.gv_userId && application.gv_userTPC != "admin") {
        		// 자동 로그아웃 알림창 타이머(5000)를 리셋한다.
        		if (application.afrm_TopFrame && application.afrm_TopFrame.form && application.afrm_TopFrame.form.setTimer) {
        			application.afrm_TopFrame.form.setTimer(5000, 3000000); // 3,000,000 ms = 50분 (web.xml 의 session-timeout 참조)
        		}
        	}
        	
        	var callBackFunc = arrParam[1];
        	
        	if(callBackFunc == "gfn_callBackReturn") return;
        		
        // 	if(!this.gfn_isNull(callBackFunc)){
        // 		callBackFunc = "this."+callBackFunc + "(svcID, ErrorCode, ErrorMsg)";
        // 		eval(callBackFunc);
        // 	}
        	
        	try{
        	    this.lookupFunc(callBackFunc).call(svcID, ErrorCode, ErrorMsg);
        	} catch(e){
        	} 
        }

        this.gfn_setRowCount = function(nCnt)
        {
        	var nVal = this.gfn_numFormat(nexacro.toNumber(nCnt));
        	var strRowCount = "[처리대상건수 <fc = '#0084ab'><b ='true'>"+nVal+"</b></fc> 건]";
        	return strRowCount;
        }

        this._gfn_clearDataOutDsList = function(strOutDsList)
        {

        // trace("_gfn_clearDataOutDsList 시작1==============>"+strOutDsList);
        	strOutDsList = this.gfn_trim(strOutDsList);
        		
        	if (this.gfn_isNull(strOutDsList) == true) return;

        	var arrOutDsList	= strOutDsList.split(" ");
        	// trace(arrOutDsList.length);
        	// output dataset 갯수만큼 처리
        	for (var i=0; i<arrOutDsList.length; i++)
        	{
        	// trace(i);//오브젝트 차수 표시
        		var strTempDs	= this.gfn_trim(arrOutDsList[i]);
        		
        		if (this.gfn_isNull(strTempDs) == true) continue;

        		var arrOutDs	= strTempDs.split("=");

        		if (arrOutDs.length == 2) 
        		{
        			var strOutDs	= this.gfn_trim(arrOutDs[0]);
        			var objOutDs	= this.objects[strOutDs];
        			// trace("objOutDs 시작1==============>"+objOutDs);
        			if(strOutDs.substr(0,3) == "gds") continue;
        			// trace(objOutDs); // 데이터셋이 존재하는지 여부 확인
        			if (!this.gfn_isNull(objOutDs.bindgrid))
        			{//현재 에러 생기는 곳	
        				
        				var bClrKeyString	= false;
        				
        				if (objOutDs.keystring.current)
        				{
        					if (objOutDs.keystring_current != objOutDs.keystring_default) 
        					{
        						objOutDs.set_keystring_current(objOutDs.keystring_default);
        					}
        				}
        				// trace("_gfn_clearDataOutDsList 체크2");
        				objOutDs.filter("");

        				//정렬표시 삭제
        				this.gfn_clearSortMark(objOutDs.bindgrid);
        				objOutDs.bindgrid.set_selecttype("currow");
        				
        			}//현재 에러 생기는 곳
        		}
        		// trace(i);
        	}
        	// trace("_gfn_clearDataOutDsList 체크final");
        	
        }

        this.gfn_svcUrl = function()
        {
        	if (application.gv_userTPC == "admin") {
        		return application.gv_serverAdmin_url;
        	}
        	return application.services['svc'].url;
        }

        this.svcDataSet; // 관리용 데이터셋

        /**
         * 데이터셋 이벤트 관리 등록
         */
        this.gfn_registerSvcDS = function(svcId,ds,active)
        {
        	if (this.svcDataSet == undefined) { this.svcDataSet = new Array(); }
        	
        	var svc = this.svcDataSet[svcId];
        	if (this.gfn_isNull(svc)) {
        		this.svcDataSet[svcId] = ds;
        	}
        	if (active != undefined) {
        		this.gfn_svcDsToggle(svcId, active);
        	}
        }

        /**
         * 데이터셋 이벤트 비/활성화 (gfn_registerSvcDS 등록필요)
         */
        this.gfn_svcDsToggle = function(svcId,active)
        {
        	if (this.gfn_isNull(this.svcDataSet)) { return; }
        	var ds = this.svcDataSet[svcId];
        	if (!this.gfn_isNull(ds)) {
        		// trace("DataSet : " + active);
        		ds.set_enableevent(active);
        	}
        }

        /**
         * 토큰 생성
         */
        this.gfn_createToken = function(form)
        {
        	if (!form.ds_token) {
        		var ds = new Dataset;
        		form.addChild("ds_token", ds);
        	}
        	
        	var sSvcID        = "createToken";
        	var sURL          = "svc::rest/common/createToken";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_token=ds_token";
        	var sArgument     = "";
        	var sCallbackFunc = "";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        }

        /**
         * 토큰 조회
         */
        this.gfn_getToken = function()
        {
        	if (!this.gfn_isNull(this.ds_token)) {
        		var token = this.gfn_nullToEmpty(this.ds_token.getColumn(0, "TOKEN"));
        		return token;
        	}
        	return "";
        }
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
