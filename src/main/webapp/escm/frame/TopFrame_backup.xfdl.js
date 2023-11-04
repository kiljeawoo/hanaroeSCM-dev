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
                this.set_name("TopArea");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1008,65);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"userdata\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">1000</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">기준정보</Col><Col id=\"caption\">기준정보</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1001</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col></Row><Row><Col id=\"idx\">1002</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col></Row><Row><Col id=\"idx\">1003</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">상품정보</Col><Col id=\"caption\">상품정보</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+K</Col></Row><Row><Col id=\"idx\">1004</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col></Row><Row><Col id=\"idx\">1005</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col></Row><Row><Col id=\"idx\">1006</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴03</Col><Col id=\"caption\">서브메뉴03</Col></Row><Row><Col id=\"idx\">1007</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">수주업무</Col><Col id=\"caption\">수주업무</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">배송/반품</Col><Col id=\"caption\">배송/반품</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1010</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">실적정보</Col><Col id=\"caption\">실적정보</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1011</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1012</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col><Col id=\"idx\">1013</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">입찰정보</Col><Col id=\"caption\">입찰정보</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1014</Col><Col id=\"hotkey\">Alt+O</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1015</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">커뮤니티</Col><Col id=\"enable\">1</Col><Col id=\"caption\">커뮤니티</Col><Col id=\"idx\">1016</Col></Row><Row><Col id=\"enable\">0</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1017</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_topMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuLength", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">a</Col><Col id=\"LEV\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fake", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "65", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_logo", "absolute", "0", "0", "223", "65", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_Logo");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help", "absolute", null, "68", "28", "28", "13", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Help");
            obj.set_tooltiptext("도움말");
            obj.style.set_cursor("hand");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userName", "absolute", null, "1", "657", "21", "135", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_User");
            obj.set_usedecorate("true");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "8", "5", "8", "69", null, this);
            obj.set_taborder("4");
            obj.style.set_background("URL('theme://images/sta_TF_UtilLine.png')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_userInfo", "absolute", null, "1", "48", "21", "75", null, this);
            obj.set_taborder("6");
            obj.set_text("내정보");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", null, "1", "60", "21", "9", null, this);
            obj.set_taborder("7");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "8", "5", "8", "124", null, this);
            obj.set_taborder("9");
            obj.style.set_background("URL('theme://images/sta_TF_UtilLine.png')");
            this.addChild(obj.name, obj);

            obj = new Menu("mnb_topMenu", "absolute", "192", "18", "695", "46", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_topMenu");
            obj.set_idcolumn("MENU_ID");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_enablecolumn("DISPLAY_YN");
            obj.set_userdatacolumn("MENU_LEVEL");
            obj.style.set_itembackground("transparent");
            obj.style.set_background("transparent");
            obj.style.set_cursor("hand");

            obj = new Static("Static04", "absolute", "696", "48", "116", "17", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#dc143c66");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00", "absolute", "413", "133", "220", "100", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_menuLength");
            obj.set_captioncolumn("NAME");
            obj.set_idcolumn("CODE");
            obj.set_levelcolumn("LEV");
            obj.style.set_itempadding("0 0 0 0");
            obj.style.set_font("bold 11 Gulim");

            obj = new Button("btn_remote", "absolute", null, "28", "110", "28", "7", null, this);
            obj.set_taborder("13");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_INTRO_Remote_TopFrame");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 65, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TopArea");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TopFrame_backup.xfdl", "lib::comLib.xjs");
        this.registerScript("TopFrame_backup.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.ds_topMenu.copyData(application.gds_menu);
        	this._gfn_setUserNm();

        	if(application.gv_userType == "80" || application.gv_userType == "81"){
        		this.btn_userInfo.set_visible("false");
        	}
        	
        	
        }

        this.btn_logout_onclick = function(obj,e)
        {
        	this.gfn_logout();	
        }

        this.btn_remote_onclick = function(obj,e)
        {
        	window.open("http://939.co.kr/nhescm/");
        }

        this.sta_logo_onclick = function(obj,e)
        {
        	application.afrm_HFrameSet0.set_separatesize("0,0,*");
        	application.afrm_PotalFrame.form.reload();
        }

        this.ds_topMenu_onrowposchanged = function(obj,e)
        {
        	this.ds_topMenu.filter("MENU_LEVEL <= 1 && DISPLAY_YN!='N'");
        }

        this.mnb_topMenu_onmenuclick = function(obj,e)
        {
        	if(e.userdata != 1) return;
        	
        	var sMenuId = e.id.substr(0,2);
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("32,*");
        	application.afrm_LeftFrame.form.ds_menu.filter("MENU_LEVEL >= 1 && MENU_ID.substr(0,2)=='"+sMenuId+"' && DISPLAY_YN!='N'");
        	
        	var nRow    = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",e.id);
        	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        	
        	var nTopRow      = application.gds_menu.findRow("MENU_ID", sMenuId+"000000");
        	
        	var sLFTitleText = application.gds_menu.getColumn(nTopRow,"MENU_NAME");
        	
        	application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);
        	
        	//중메뉴의 첫번째 소메뉴 선택
        	objGrid.setTreeStatus(objGrid.getTreeRow(nRow),true);
        	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nRow+1);
        	
        	
        	var sMId = application.afrm_LeftFrame.form.ds_menu.getColumn(nRow+1,"MENU_ID");
        	
        	//해당Grid visible처리
        	application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(true);
        	application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(false);
        	
        	this.gfn_OpenMenuId(sMId);
        }

        this.btn_userInfo_onclick = function(obj,e)
        {

        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_LeftFrame.form.ds_userInfoMenu.filter("MENU_LEVEL >= 1 && DISPLAY_YN!='N'");

        	//해당Grid visible처리
        	application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(false);
        	application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(true);	
        	
        	var sLFTitleText = application.gds_userInfoMenu.getColumn(0,"MENU_NAME");
        	
        	application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);	
        	
        	//중메뉴의 첫번째 소메뉴 선택
        	application.afrm_LeftFrame.form.ds_userInfoMenu.set_rowposition(1);
        	
        	var sMId = application.afrm_LeftFrame.form.ds_userInfoMenu.getColumn(1,"MENU_ID");	
        	
        	this.gfn_OpenMenuId(sMId,"","INFO");
        }

        this.mnb_topMenu_onmouseenter = function(obj,e)
        {	
        	if(e.fromreferenceobject=="[object MenuItem]"){
        		
        		var bStates = obj.isPopup();

        		if( !bStates) {
        			obj.trackPopup(e.index, 0, 0); 
        			
        		}
        	}
        }

        this._gfn_menuLength = function()
        {
        	var nLev;
        	var sVal="";
        	var nCnt =0;
        	
        	for(var i=0;i<this.ds_topMenu.rowcount;i++)
        	{
        		nLev = this.ds_topMenu.getColumn(i,"MENU_LEVEL");
        		if(nLev == 0) {
        			nCnt = nCnt+34;
        			sVal += this.ds_topMenu.getColumn(i,"MENU_NAME");
        		}
        	}
        	
        	this.ds_menuLength.setColumn(0,"NAME",sVal);
        	
        	this.PopupMenu00.trackPopupByComponent(this.btn_help,1000,0,'center middle');
        		
        	this.mnb_topMenu.set_width(nexacro.toNumber(this.PopupMenu00.width+nCnt-22));
        	this.PopupMenu00.closePopup();
        	
        }

        //사용자명 설정
        this._gfn_setUserNm = function()
        {
        	this.sta_userName.set_text(application.gv_companyName+" -  <b v='true'>"+application.gv_userName + "</b> ( " + application.gv_glnCode +" ) " +"님 접속!");
        }

        this.btn_help_onclick = function(obj,e)
        {
        	if(application.gds_openMenu.rowcount == 0 ) return;
        	
        	var sMenuID = application.afrm_FrameSet.getActiveFrame().name;
        	
        	if(this.gfn_isNull(sMenuID)) return;
        	
        	var sVal = "도움말 준비중입니다.";
        	
        	var oArg = {param00:sMenuID,param01:sVal};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_HelpPopupAfter";    
        	this.gfn_openPopup("HelpPop","common::helpPopup.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_HelpPopupAfter = function()
        {

        }

        this.TopArea_ontimer = function(obj,e)
        {
        	var rtn;
        	this.killTimer(5000);
        	rtn = this.confirm("10분후에 하나로eSCM 자동 로그아웃 예정입니다.\n로그인 시간을 연장하시려면 '확인' 버튼을 클릭하세요.");
        	if(rtn)
        	{
        		var sSvcID        = "sessKeep";
        		var sURL          = "svc::rest/pt/comn/sessKeep";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";	
        		var sArgument     = "";
        		var sCallbackFunc = "gfn_callBackReturn";
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_topMenu.addEventHandler("onrowposchanged", this.ds_topMenu_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("ontimer", this.TopArea_ontimer, this);
            this.sta_logo.addEventHandler("onclick", this.sta_logo_onclick, this);
            this.btn_help.addEventHandler("onclick", this.btn_help_onclick, this);
            this.btn_userInfo.addEventHandler("onclick", this.btn_userInfo_onclick, this);
            this.btn_logout.addEventHandler("onclick", this.btn_logout_onclick, this);
            this.mnb_topMenu.addEventHandler("onmenuclick", this.mnb_topMenu_onmenuclick, this);
            this.btn_remote.addEventHandler("onclick", this.btn_remote_onclick, this);

        };

        this.loadIncludeScript("TopFrame_backup.xfdl");

       
    };
}
)();
