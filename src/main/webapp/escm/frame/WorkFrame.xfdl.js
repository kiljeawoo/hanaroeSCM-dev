(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("WorkFrame");
                this._setFormPosition(0,0,818,520);
            }
            this.style.set_background("white");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "15", "15", null, null, "0%", "15", this);
            obj.set_taborder("0");
            obj.style.set_background("transparent");
            obj.set_cssclass("div_WF_ScrollWidth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_LFOpen", "absolute", "0", "277", "12", "65", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Open");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_LFClose", "absolute", "0", "277", "12", "65", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Close");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 818, 520, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WorkFrame");
            		p.style.set_background("white");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WorkFrame.xfdl", "lib::comLib.xjs");
        this.registerScript("WorkFrame.xfdl", function() {
        //include "lib::comLib.xjs";

        var pv_frameId = this.getOwnerFrame().name;

        this.sId;
        this.sNm;
        this.sUrl;
        this.sPath;
        this.sParam;
         
        this.form_onload = function(obj,e)
        {
        	this.setFocus();
        	
        	this.sId    = this.getOwnerFrame().arguments["FORM_ID"];
        	this.sNm    = this.getOwnerFrame().arguments["FORM_NM"];
        	this.sUrl   = this.getOwnerFrame().arguments["FORM_URL"];
        	this.sPath  = this.getOwnerFrame().arguments["FORM_PATH"];
        	this.sParam = this.getOwnerFrame().arguments["FORM_PARAM"];
        	
        	this.div_work.set_url(this.sUrl);
        	
        	//if(this.gfn_isNull(application.gv_userId)){
        	if (application.afrm_TopFrame.formurl != "frame::TopFrame.xfdl" && application.afrm_TopFrame.formurl != "frame::TopFrame_portal_admin.xfdl") {
        		this.btn_LFClose.set_visible(false);
        		this.btn_LFOpen.set_visible(false);
        	}
        	
        	this.gfn_FormInit(this.sId, this.sNm, this.sUrl, this.sPath);
        	
        	var leftUrl = application.afrm_LeftFrame.formurl;
        	if (leftUrl == "frame::LeftFrame_serviceBT.xfdl" || leftUrl == "frame::LeftFrame_ServiceInfo.xfdl") {
        		var nTopRow = -1;
        		if (leftUrl == "frame::LeftFrame_serviceBT.xfdl") {
        			nTopRow = application.gds_serviceBT.findRow("MENU_ID", this.sId);
        		} else if (leftUrl == "frame::LeftFrame_ServiceInfo.xfdl") {
        			nTopRow = application.gds_serviceInfo.findRow("MENU_ID", this.sId);
        		}
        		var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        		var nTPRow = objGrid.getTreeParentRow(nTopRow);
        		objGrid.setTreeStatus(objGrid.getTreeRow(nTPRow), true);
        		application.afrm_LeftFrame.form.ds_menu.set_rowposition(nTopRow);
         	} else { //frame::LeftFrame.xfdl && 회원 일 경우.
        		switch(this.sId) {
        			case "11001005":
        			case "11001008":
        			case "21001008":
        			case "31001008":
        				//해당Grid visible처리
        				application.afrm_LeftFrame.form.ds_userInfoMenu.filter("MENU_LEVEL >= 1 && DISPLAY_YN!='N'");
        				application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(false);
        				application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(true);	
        				
        				var tRow = application.afrm_LeftFrame.form.ds_userInfoMenu.findRow("MENU_ID", this.sId);
        				
        				var sLFTitleText = application.gds_userInfoMenu.getColumn(0,"MENU_NAME");
        				application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);
        				
        				application.afrm_LeftFrame.form.ds_userInfoMenu.set_rowposition(-1);
        				application.afrm_LeftFrame.form.ds_userInfoMenu.set_rowposition(tRow);
        				break;
        		}
         	}
        //     var menuNm          = parent.arguments["FORM_NM"];       	//화면명
        //     
        //     var menuPath        = parent.arguments["FORM_PATH"];   		//메뉴경로
        //     
        //         menuFullPath    = parent.arguments["FORM_FULLPATH"];      //메뉴 전체경로
        //         menuFullPathCd  = parent.arguments["FORM_FULLPATHCD"];    //메뉴 전체경로Code
        //         pv_moduleCd     = parent.arguments["FORM_MODULECD"];
        //         pv_moduleNm     = parent.arguments["FORM_MODULENM"];
        // 		pv_readOnlyFlag = parent.arguments["FORM_READONLYFLAG"];
        // 		pv_paramContent = parent.arguments["FORM_PARAMCONTENT"];
        //         pv_paramList    = parent.arguments["FORM_PARAM"];       
        //                 
        //     if(!gfn_IsNull(gv_openArgs.TODO_RSLT_ID)){
        // 		pv_TODOArgs = gv_openArgs;
        // 		gv_openArgs = "";
        // 	}
        //         
        //   //var menuFullPath = menuFullPath.substr(0,menuFullPath.lastIndexOf(">")+1)+"<b v='true'>"+menuFullPath.substr(menuFullPath.lastIndexOf(">")+1)+"</b>" ;
        //            
        //     div_workform.url = menuPath+"::"+ menuUrl;    
        //     
        //  	gds_userInfo.setColumn(0,"MENU_NAME",menuNm);
        //  	gv_menuName = menuNm;
        //  	
        //     gfn_FormInit(pv_menuId, menuNm, menuUrl);
        //    
        //     var nFRow = gds_menu.findRow("FNC_ID",pv_menuId);
        // 	var strMenuDetlID = gds_menu.getColumn(nFRow,"MENU_DETL_ID");
        //     var nMenuDetlRow = gds_favoriteList.findRow("MENU_DETL_ID",strMenuDetlID);
        //     
        //     var strModuleNm = gds_menu.getColumn(gds_menu.findRow("MODULE_CODE",gv_module),"MODULE_NM");
        //     
        //     if(nMenuDetlRow != -1) {
        // 		gfn_Find("btn_Favorite").class = "btn_WF_favorite_on";
        //     }
        //     
        //     form.setWaitCursor(false);
        //     
        //     gfn_Find("edt_Title").readonly = true;
        //     gfn_Find("edt_Navi").readonly  = true;
        //     gfn_Find("edt_Title").value    = menuNm;
        //     gfn_Find("edt_Navi").value     = strModuleNm+" > "+menuFullPath;
        //     
        //     gfn_Find("btn_Favorite").onclick.addHandler( _gfn_btnFavoriteOnclickHandler);
        //     gfn_Find("btn_Help").onclick.addHandler( _gfn_btnHelpOnclickHandler);
        //     
        //     div_workform.div_Leftarea.tab_La.tpg_Search.text = "CONDITION";
        //     
        //     div_leftarea_Div01_btn_updown_onclick(gfn_Find("btn_Updown"));
        //     gfn_Find("btn_Updown").visible = false;
        }

        this.btn_LFClose_onclick = function(obj,e)
        {	
        	application.afrm_HFrameSet0.set_separatesize("0,*,0");
        	this.btn_LFClose.set_visible(false);
        	this.btn_LFOpen.set_visible(true);
        }

        this.btn_LFOpen_onclick = function(obj,e)
        {
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	this.btn_LFClose.set_visible(true);
        	this.btn_LFOpen.set_visible(false);
        }

        this.gfn_FormInit = function (arg_id,arg_nm,arg_url,arg_path)
        {
            //열린화면 Dataset 추가
            if (application.gds_openMenu.findRow("MENU_ID", arg_id) < 0) {
                var nRow = application.gds_openMenu.addRow();
                
                application.gds_openMenu.setColumn(nRow,"MENU_ID", arg_id);
                application.gds_openMenu.setColumn(nRow,"MENU_NAME", arg_nm);
                application.gds_openMenu.setColumn(nRow,"FILE_NAME", arg_url);
                application.gds_openMenu.setColumn(nRow,"FILE_PATH", arg_path);
            }

            // Open Tab 추가...	
            application.afrm_MDIFrame.form.gfn_formAddList(arg_id, arg_nm);

            // SetupProgramButton 동적생성
        }

        this.WorkFrame_onbeforeclose = function(obj,e)
        {
        	if (e.fromobject.name == "div_work") return;
        	if (e.fromobject.url !== undefined && e.fromobject.url == "") return;
        	
        	// 열린폼 삭제
        	var nRow = application.gds_openMenu.findRow("MENU_ID", pv_frameId);
        	
        	if (nRow >= 0) {
        		application.gds_openMenu.deleteRow(nRow);
        		if (application.gds_openMenu.rowcount < 1) {
        			application.afrm_HFrameSet0.set_separatesize("0,0,*");
        			if (application.afrm_PotalFrame.form != null) {
        				application.afrm_PotalFrame.form.reload();
        			}
        		}
        	}
        	 
        	application.afrm_MDIFrame.form.formDelList(pv_frameId);
        }

        this.WorkFrame_onactivate = function(obj,e)
        {
        	application.afrm_MDIFrame.form.formPosition(pv_frameId,"true");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.WorkFrame_onbeforeclose, this);
            this.addEventHandler("onactivate", this.WorkFrame_onactivate, this);
            this.btn_LFOpen.addEventHandler("onclick", this.btn_LFOpen_onclick, this);
            this.btn_LFClose.addEventHandler("onclick", this.btn_LFClose_onclick, this);

        };

        this.loadIncludeScript("WorkFrame.xfdl");

       
    };
}
)();
