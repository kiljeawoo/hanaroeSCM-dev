//XJS=comMenu.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {

        /**********************************************************************************
         * Function   : gfn_OpenMenuId
         * Parameter  : psMenuId  
         *              paObjList  
         * Return     :  
         *
         * 메뉴클릭시 호출되는 함수. 화면Open함수의 시작
         **********************************************************************************/
        this.gfn_OpenMenuId = function(psMenuId,paObjList,oDsType)
        {
        	try {
        		if (this.gfn_isNull(psMenuId)) {
        			throw new Error("MENU_ID를 입력하세요.");
        		}
        		
        		var nRow = -1;
        		
        		if (oDsType == "INFO") {
        			nRow = application.gds_userInfoMenu.findRow("MENU_ID", psMenuId);
        		} else if (oDsType == "SERVICE") {
        			nRow = application.gds_serviceInfo.findRow("MENU_ID", psMenuId);
        		} else if (oDsType == "BT") {
        			application.gds_serviceBT.filter("USE_YN!='N'");
        			nRow = application.gds_serviceBT.findRow("MENU_ID", psMenuId);
        		} else {
        			nRow = application.gds_menu.findRow("MENU_ID", psMenuId);
        		}
        		
        		if (nRow < 0) {
        			throw new Error("해당 MENU_ID가 존재하지 않습니다.");
        		}
        		
        		// 업무화면인 경우만 권한체크
        		if (this.gfn_isNull(oDsType)) {
        			var svcAuth = application.gds_menu.getColumn(nRow, "SVC_AUTH"); // 메뉴의 서비스 가입여부 (GLN 기준)
        			if (svcAuth == "N") {
        				throw new Error("가입된 서비스가 아닙니다.");
        			}
        			
        			var usrAuth = application.gds_menu.getColumn(nRow, "USR_AUTH"); // 메뉴의 사용자권한
        			if (usrAuth != "0" && application.gv_userAuth.indexOf(usrAuth) < 0) { // 회원의 권한 목록에 없는 경우
        				if (application.gv_systemAuth.indexOf(usrAuth) < 0) { // 서비스신청관련 권한 목록에 없는 경우
        					throw new Error("권한이 없습니다.");
        				} else {
        					throw new Error("서비스를 신청하지 않아 권한이 없습니다.");
        				}
        			}
        			
        			var menuGroup = application.gds_menu.getColumn(nRow, "MENU_GROUP"); // 메뉴의 메뉴그룹
        			if (menuGroup && application.gv_noAuthMenuGroup) {
        				var arr = application.gv_noAuthMenuGroup.split("|"); // 접근권한이 없는 메뉴그룹 목록
        				for (var i = 0; i < arr.length; i++) {
        					if (menuGroup == arr[i]) { // 접근권한이 없는 메뉴그룹인 경우
        						var msg = "권한이 없습니다. 빌링담당자에게 문의하시기 바랍니다.";
        						if (application.gv_billingUserID) {
        							msg += "\n\n" + application.gv_companyName + ", " + application.gv_billingUserName + "(" + application.gv_billingUserID + ")";
        						}
        						throw new Error(msg);
        					}
        				}
        			}
        		}
        		
        		this.gfn_OpenMenuRow(nRow, paObjList, oDsType);
        	} catch (e) {
        		alert(e.message); // alert
        		if (application.gds_openMenu.rowcount < 1) {
        			application.afrm_HFrameSet0.set_separatesize("0,0,*");
        			application.afrm_PotalFrame.form.reload();
        		}
        	}
        }

        this.gfn_OpenMenuRow = function(pnRow,paObjList,oDsType) 
        {
            var vsMenuId, vsMenuLv, vsMenuNm, vsMenuGroup, vsFileNm, vsFileType, vsMenuPath, vsDisplayYn, vsUseYn;
            var oDs = "";
            
            if (oDsType == "INFO") {
        		oDs = application.gds_userInfoMenu;
        	} else if (oDsType == "SERVICE") {
        		oDs = application.gds_serviceInfo;
        	} else if (oDsType == "BT") {
        		oDs = application.gds_serviceBT;
        	} else {
        		oDs = application.gds_menu;
        	}
            
            vsMenuId	   	 	= oDs.getColumn(pnRow, "MENU_ID");
            vsMenuLv        	= oDs.getColumn(pnRow, "MENU_LEVEL");
            vsMenuNm    	    = oDs.getColumn(pnRow, "MENU_NAME");
            vsMenuGroup  		= oDs.getColumn(pnRow, "SVC_GROUP");
            vsFileNm     		= oDs.getColumn(pnRow, "FILE_NAME");
            vsFileType  	    = oDs.getColumn(pnRow, "FILE_TYPE");
            vsMenuPath 	        = oDs.getColumn(pnRow, "FILE_PATH");
            vsDisplayYn         = oDs.getColumn(pnRow, "DISPLAY_YN");
            vsUseYn             = oDs.getColumn(pnRow, "USE_YN");    
            
        	var objChildFrame = application.afrm_FrameSet[vsMenuId];
            if (objChildFrame != undefined) {
        		objChildFrame.setFocus();
        		if (!this.gfn_isNull(paObjList)) {
        			try {
        				objChildFrame.arguments["FORM_PARAM"]	= paObjList;
        				objChildFrame.form.div_work.fn_postOnLoad();
        				//this.lookupFunc("fn_postOnLoad").call();
        			} catch(e) {
        			}            
        		}
                return;
            }
            
        	if (application.gds_openMenu.rowcount >= 10 ) {
        		if (!application.gv_menuCntWarningFlag) {
        			if (oDsType != "SERVICE" && oDsType != "BT") {
        				alert("화면을 10개 이상 열 경우, 첫 화면 종료 후 화면을 엽니다.","Warning","warning");
        			}
        			application.gv_menuCntWarningFlag = true;
        		}
        		var strM_ID = application.gds_openMenu.getColumn(0,"MENU_ID");
        		var objOpenFrame = application.afrm_FrameSet[strM_ID];
        		objOpenFrame.form.close();
            }
                
            vsFileType = vsFileType.toLowerCase();
              
        	if (vsFileNm != "" && vsFileNm != undefined)  {   
                if (this.gfn_isNull(vsFileType)) {
                    vsFileNm = vsFileNm + ".xfdl";
                } else {
        			if (vsFileType == "xfdl") {
        				vsFileNm = vsFileNm + "."+vsFileType;
        			} else {
        				return;
        			}
                }
                
                vsFileNm = vsMenuGroup+"::"+vsFileNm;
                
                this.gfn_OpenMenu(vsMenuId, vsMenuNm, vsFileNm, vsMenuPath, paObjList);
            }
        }

        /****************************************************************************************
         * Function   : gfn_OpenMenu()
         * Parameter  : 1. psMenuId   : 메뉴ID
         *              2. psMenuNm   : 메뉴명
         *              3. psMenuPage : 메뉴호출경로(상대경로)
         *              4. psMenuPath : 메뉴Depth
         *              5. paObjList  : 메뉴파라미터
         * 	             
         * Return     : none
         *  
         * 화면을 생성하고 메인화면에 로딩한다.
         * 동일한 화면이 이미 메인화면에 로딩이 되어 있으면 해당 화면을 Active 시킨다.
        ******************************************************************************************/
        this.gfn_OpenMenu = function(psMenuId,psMenuNm,psMenuPage,psMenuPath,paObjList) 
        {
        	var objChildFrame = application.afrm_FrameSet[psMenuId];
              
        	// ChildFrame 생성
            objChildFrame = new ChildFrame();
            objChildFrame.init(psMenuId,"absolute", 0, 0, 818, 520, null, null, "frame::WorkFrame.xfdl"); 
            
            // Open Form 정보 인자 전달...
            objChildFrame.arguments = [];
            objChildFrame.arguments["FORM_ID"]		= psMenuId;
            objChildFrame.arguments["FORM_NM"]		= psMenuNm;
            objChildFrame.arguments["FORM_URL"]		= psMenuPage;
            objChildFrame.arguments["FORM_PATH"]	= psMenuPath;
            objChildFrame.arguments["FORM_PARAM"]	= paObjList;
        	
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

        /**********************************************************************************
         * Function   : gfn_getFrameAguments
         * Parameter  : sVal
         * Return     : arguments
         *
         * child Frame에 등록한 아규먼트를 반환한다.
         **********************************************************************************/
        this.gfn_getFrameAguments = function (sVal)
        {
            return this.getOwnerFrame().arguments[sVal];
        }

        /**********************************************************************************
         * Function   : gfn_moveMenuId
         * Parameter  : psMenuId  
         *              paObjList  
         * Return     : none
         *
         * A화면에서 B화면으로 이동
         **********************************************************************************/
        this.gfn_moveMenuId = function(psMenuId,paObjList,paType)
        {
        	this.gfn_OpenMenuId(psMenuId, paObjList, paType);
        }

        /*모바일 메뉴*/
        this.gfn_MopenMenuId = function(sVal,sType)
        {	
        	var sMenuNm_next, sMenuNm_pre;
        	
        	var oDs  = application.gds_mobileMenu;
        	var nRow = oDs.findRow("MENU_ID",sVal);
        	
        	if(nRow == -1){
        		alert("해당메뉴의 화면이 없습니다.");
        		return;
        	}
        	
        	//topMenu 포커스중 css on
        	for(var i=0; i<6; i++){
        		application.afrm_TopFrame.form.all["btn_topMenu0"+i].set_cssclass("btn_WF_Topmenu");
        		application.afrm_TopFrame.form.all["btn_topMenu0"+i].set_enableevent(true);
        	}
        	
        	var mBtn = sVal.substr(0,2);
        	
        	switch (mBtn){
        	
        			case "01":				
        				sMenuID = "01000000";
        				application.afrm_TopFrame.form.btn_topMenu00.set_cssclass("btn_WF_TopmenuS");
        				application.afrm_TopFrame.form.btn_topMenu00.set_enableevent(false);
        				break;
        			case "02":				
        				sMenuID = "02000000";
        				application.afrm_TopFrame.form.btn_topMenu01.set_cssclass("btn_WF_TopmenuS");
        				application.afrm_TopFrame.form.btn_topMenu01.set_enableevent(false);
        				break;
        			case "03":				
        				sMenuID = "03000000";
        				application.afrm_TopFrame.form.btn_topMenu02.set_cssclass("btn_WF_TopmenuS");
        				application.afrm_TopFrame.form.btn_topMenu02.set_enableevent(false);
        				break;
        			case "04":				
        				sMenuID = "04000000";
        				application.afrm_TopFrame.form.btn_topMenu03.set_cssclass("btn_WF_TopmenuS");
        				application.afrm_TopFrame.form.btn_topMenu03.set_enableevent(false);
        				break;
        			case "05":				
        				sMenuID = "05000000";
        				application.afrm_TopFrame.form.btn_topMenu04.set_cssclass("btn_WF_TopmenuS");
        				application.afrm_TopFrame.form.btn_topMenu04.set_enableevent(false);
        				break;
        			case "06":				
        				sMenuID = "06000000";
        				application.afrm_TopFrame.form.btn_topMenu05.set_cssclass("btn_WF_TopmenuS");
        				application.afrm_TopFrame.form.btn_topMenu05.set_enableevent(false);
        				break;
        			default:				
        				
        				break;
        	}
        	
        	
        	if(sType != "prev"){		
        		
        		var nOpenRow = application.gds_mobileOpenMenu.addRow();
        		application.gds_mobileOpenMenu.setColumn(nOpenRow,"MENU_ID",sVal);
        		
        		//openMenu에 등록된 Division삭제
        		for(var i = application.gds_mobileOpenMenu.rowcount-1; i >= 0 ; i--){
        			var sMId = application.gds_mobileOpenMenu.getColumn(i,"MENU_ID");
        			
        			if(sMId.substr(0,3) == "div"){
        				application.gds_mobileOpenMenu.deleteRow(i);
        			}
        		}
        		
        		if(nOpenRow > 0){
        			application.afrm_TitleFrame.form.btn_prev.set_visible(true);
        		}
        	}
        	
        	//커뮤니티화면은 프레임변경
        	if(sVal.substr(0,2) == "07"){
        		application.afrm_VFrameSet2.set_separatesize("0,*");
        		var sSvcGroup = oDs.getColumn(nRow,"SVC_GROUP");
        		var sfileName = oDs.getColumn(nRow,"FILE_NAME");
        		var sURL = sSvcGroup+"::"+sfileName+".xfdl";
        		application.afrm_HomeFrame.set_formurl(sURL);
        		
        	}else{
        		application.afrm_VFrameSet2.set_separatesize("*,0");
        		
        		var nLvl_next = oDs.getColumn(nRow+1,"MENU_LEVEL");
        		var nLvl_pre  = oDs.getColumn(nRow-1,"MENU_LEVEL");
        		
        		if(nLvl_next == 1){
        			sMenuNm_next = oDs.getColumn(nRow+1,"MENU_HNAME");
        			
        			var arrVal = sMenuNm_next.toString().split(";");	
        			if (arrVal.length > 0){	
        				sMenuNm_next = this.gfn_AddNewLine(arrVal);
        			}		
        			application.afrm_MTitleFrame.form.btn_nextMenu.set_text(sMenuNm_next);
        			application.afrm_MTitleFrame.form.btn_nextMenu.set_visible(true);
        		}else{
        			sMenuNm_next = "";
        			application.afrm_MTitleFrame.form.btn_nextMenu.set_visible(false);
        		}
        		
        		if(nLvl_pre == 1){
        			sMenuNm_pre = oDs.getColumn(nRow-1,"MENU_HNAME");
        			var arrVal = sMenuNm_pre.toString().split(";");	
        			if (arrVal.length > 0){	
        				sMenuNm_pre = this.gfn_AddNewLine(arrVal);
        			}
        			application.afrm_MTitleFrame.form.btn_preMenu.set_text(sMenuNm_pre);
        			application.afrm_MTitleFrame.form.btn_preMenu.set_visible(true);
        		}else{
        			sMenuNm_pre = "";
        			application.afrm_MTitleFrame.form.btn_preMenu.set_visible(false);
        		}
        		
        		
        		var sMenuNm   = oDs.getColumn(nRow,"MENU_NAME");
        		var sSvcGroup = oDs.getColumn(nRow,"SVC_GROUP");
        		var sfileName = oDs.getColumn(nRow,"FILE_NAME");
        		var sURL = sSvcGroup+"::"+sfileName+".xfdl";
        		
        		application.afrm_MTitleFrame.form.sta_title.set_text(sMenuNm);	
        		application.afrm_WorkFrame.form.div_work.set_url(sURL);
        	}

        }

        this.gfn_callDetailMenu = function(objDivId,subMenuNm,PreSubMenuNm)
        {
        	this.gfn_addOpenMenuDS(objDivId, subMenuNm, PreSubMenuNm);
        	this.gfn_setSubmenuNM(subMenuNm);
        }

        this.gfn_addOpenMenuDS = function(objDivId,subMenuNm,PreSubMenuNm)
        {
        	var nRow = application.gds_mobileOpenMenu.addRow();
        	application.gds_mobileOpenMenu.setColumn(nRow,"MENU_ID",objDivId);
        	application.gds_mobileOpenMenu.setColumn(nRow,"MENU_NAME",subMenuNm);
        	application.gds_mobileOpenMenu.setColumn(nRow,"MENU_PRENAME",PreSubMenuNm);
        	
        	application.afrm_TitleFrame.form.btn_prev.set_visible(true);
        }

        this.gfn_setSubmenuNM = function(subMenuNm)
        {
        	trace("subMenuNm: "+subMenuNm);
        	
        	application.afrm_MTitleFrame.form.btn_nextMenu.set_visible(false);
        	application.afrm_MTitleFrame.form.btn_preMenu.set_visible(false);
        	application.afrm_MTitleFrame.form.sta_title.set_text(subMenuNm);
        }

        this.gfn_topMenuBackMobile = function()
        {
        	var oDs = application.gds_mobileOpenMenu;
        	
        	var preMenuID    = oDs.getColumn(oDs.rowcount-2,"MENU_ID");
        	var preMenuDIVID = oDs.getColumn(oDs.rowcount-1,"MENU_ID");
        	
        	//첫번째 상세(일반용)
        	if(preMenuDIVID.substr(0,3) == "div" || preMenuDIVID.substr(0,3) == "grd") {
        		
        		var preMenuDIVNM = oDs.getColumn(oDs.rowcount-1,"MENU_PRENAME");
        		
        		var arrMenuNM = preMenuDIVNM.split("^");
        		
        		if(arrMenuNM.length == 1){
        			//가운데
        			application.afrm_MTitleFrame.form.sta_title.set_text(arrMenuNM[0]);
        		}else{
        			
        			//가운데
        			application.afrm_MTitleFrame.form.sta_title.set_text(arrMenuNM[0]);
        			
        			//왼쪽버튼
        			if(!this.gfn_isNull(arrMenuNM[1])){
        				var sMenuNm_pre = arrMenuNM[1];
        				var arrVal = sMenuNm_pre.toString().split(";");	
        				if (arrVal.length > 0){	
        					sMenuNm_pre = this.gfn_AddNewLine(arrVal);
        				}
        				
        				application.afrm_MTitleFrame.form.btn_preMenu.set_text(sMenuNm_pre);
        				application.afrm_MTitleFrame.form.btn_preMenu.set_visible(true);
        			}
        			
        			//오른쪽버튼
        			if(!this.gfn_isNull(arrMenuNM[2])){
        				var sMenuNm_next = arrMenuNM[2];
        				var arrVal = sMenuNm_next.toString().split(";");	
        				if (arrVal.length > 0){	
        					sMenuNm_next = this.gfn_AddNewLine(arrVal);
        				}
        				application.afrm_MTitleFrame.form.btn_nextMenu.set_text(sMenuNm_next);			
        				application.afrm_MTitleFrame.form.btn_nextMenu.set_visible(true);
        			}
        		}
        		
        		//두번째 상세
        		if(preMenuID.substr(0,3) == "div" || preMenuID.substr(0,3) == "grd"){
        			application.afrm_WorkFrame.form.div_work.all[preMenuID].set_visible(true);
        		}
        		
        		application.afrm_WorkFrame.form.div_work.all[preMenuDIVID].set_visible(false);
        		
        		oDs.deleteRow(oDs.rowcount-1);
        		
        		if(oDs.rowcount == 1) {
        			application.afrm_TitleFrame.form.btn_prev.set_visible(false);
        		}
        		 
        		return;
        		
        	}
        	//커뮤니티용
        	else if(preMenuDIVID.substr(0,3) == "cmt"){
        	
        		application.afrm_HomeFrame.form.all[preMenuDIVID].set_visible(false);
        		oDs.deleteRow(oDs.rowcount-1);
        		return;
        	}
        	
        	oDs.deleteRow(oDs.rowcount-1);
        	
        	if(oDs.rowcount == 1) {
        		application.afrm_TitleFrame.form.btn_prev.set_visible(false);
        	}
        	
        	this.gfn_MopenMenuId(preMenuID,"prev");
        }
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();
