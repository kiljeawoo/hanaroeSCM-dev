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

            obj = new Button("btn_help", "absolute", null, "28", "28", "28", "13", null, this);
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
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_userInfo", "absolute", null, "1", "48", "21", "75", null, this);
            obj.set_taborder("6");
            obj.set_text("내정보");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.style.set_cursor("hand");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", null, "1", "60", "21", "9", null, this);
            obj.set_taborder("7");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.style.set_cursor("hand");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "8", "5", "8", "124", null, this);
            obj.set_taborder("9");
            obj.style.set_background("URL('theme://images/sta_TF_UtilLine.png')");
            obj.set_visible("false");
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
        this.addIncludeScript("TopFrame_serviceInfo.xfdl", "lib::comLib.xjs");
        this.registerScript("TopFrame_serviceInfo.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.ds_topMenu.copyData(application.gds_serviceInfo);

        	//this._gfn_menuLength();
        	//this._gfn_setUserNm();
        	this.ds_topMenu.filter("DISPLAY_YN!='N'");
        }

        this.btn_logout_onclick = function(obj,e)
        {
        	this.gfn_logout();
        }

        this.sta_logo_onclick = function(obj,e)
        {
        	var nLength = application.afrm_FrameSet.frames.length;

        	for (var i=nLength-1; i >= 0; i--) {
        		application.afrm_FrameSet.frames[i].form.close();
        	}

        	application.gds_openMenu.clearData();

        	if (this.gfn_isNull(application.gv_userKey) || application.gv_userKey == "null") {
        		application.afrm_VFrameSet0.set_separatesize("*, 0, 0");
        	} else {
        		application.afrm_TopFrame.set_formurl("");
        		application.afrm_LeftFrame.set_formurl("");
        		application.afrm_PotalFrame.set_formurl("");

        		//application.afrm_HFrameSet0.set_separatesize("0, 0, *");
        		if (application.gv_userTPC == "user") {
        			application.afrm_TopFrame.set_formurl("frame::TopFrame.xfdl");
        			application.afrm_LeftFrame.set_formurl("frame::LeftFrame.xfdl");
        			application.afrm_PotalFrame.set_formurl("frame::Potal.xfdl");
        		} else {
        			application.afrm_TopFrame.set_formurl("frame::TopFrame_portal_admin.xfdl");
        			application.afrm_LeftFrame.set_formurl("frame::LeftFrame_admin.xfdl");
        			application.afrm_PotalFrame.set_formurl("frame::Potal_admin.xfdl");
        		}
        	}
        }

        this.ds_topMenu_onrowposchanged = function(obj,e)
        {
        	this.ds_topMenu.filter("DISPLAY_YN!='N'");
        }

        this.mnb_topMenu_onmenuclick = function(obj,e)
        {
        	if (e.userdata != 1) return;

        	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        	objGrid.set_treeinitstatus("collapse, null");

        	var nTopRow      = application.gds_serviceInfo.findRow("MENU_ID", e.id);

        	//중메뉴의 첫번째 소메뉴 선택
        	nTopRow = this.ds_topMenu.findRow("MENU_ID", e.id);
        	var nTPRow = objGrid.getTreeParentRow(nTopRow);
        	objGrid.setTreeStatus(objGrid.getTreeRow(nTPRow), true);
        	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nTopRow);

        	this.gfn_OpenMenuId(e.id, "", "SERVICE");
        }

        this._gfn_menuLength = function()
        {
        	var nLev;
        	var sVal="";
        	var nCnt =0;

        	for (var i=0;i<this.ds_topMenu.rowcount;i++) {
        		nLev = this.ds_topMenu.getColumn(i, "MENU_LEVEL");
        		if (nLev == 0) {
        			nCnt = nCnt+34;
        			sVal += this.ds_topMenu.getColumn(i, "MENU_NAME");
        		}
        	}

        	this.ds_menuLength.setColumn(0, "NAME", sVal);

        	this.PopupMenu00.trackPopupByComponent(this.btn_help, 1000, 0, 'center middle');

        	this.mnb_topMenu.set_width(nexacro.toNumber(this.PopupMenu00.width+nCnt-22));
        	this.PopupMenu00.closePopup();
        }

        //사용자명 설정
        this._gfn_setUserNm = function()
        {
        	this.sta_userName.set_text(application.gv_companyName+" -  <b v='true'>"+application.gv_userName+"</b>님 접속!");
        }

        this.btn_help_onclick = function(obj,e)
        {
        	if (application.gds_openMenu.rowcount == 0) return;

        	var sMenuID = application.afrm_FrameSet.getActiveFrame().name;

        	if (this.gfn_isNull(sMenuID)) return;

        	var sVal = "도움말 준비중입니다.";

        	var oArg = {param00:sMenuID, param01:sVal};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_HelpPopupAfter";
        	this.gfn_openPopup("HelpPop", "common::helpPopup.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_HelpPopupAfter = function()
        {

        }

        
        /* 테스트 */

        this.Button00_onclick = function(obj,e)
        {
        	var sLength = this.ds_menuLength.getColumn(0, "NAME");
        	//bold 11 Gulim
        	//var fontObj = gf_getObjFont(st_userInfo.style.font.size, st_userInfo.style.font.face);
        	var fontObj = this.gf_getObjFont(11, "Gulim");
        	var sizeObj = this.gf_getTextSize(sLength, fontObj);
        }

        /*------------------------------------------------------------------------------
        * 기   능: Font Object 생성 반환
        * 인   수: iFontSize
                    sFontName
        * Return :  Font Object
        ------------------------------------------------------------------------------*/
        this.gf_getObjFont = function (iFontSize,sFontName)
        {
            var objFont = new Font;
            objFont.size = iFontSize;
            objFont.name = sFontName;

            return objFont;
        }

        /*------------------------------------------------------------------------------
        * 기   능: 1depth 메뉴 Text Size 반환
        * 인   수: sText (사이즈를 계산할 텍스트)
                    objFont(Font정보를 가지고 있는 object입니다.)
                    iLimitWidth (Option : word wrap이 일어나는 문자열 길이 제한 정수 값입)
                    sConstWordWrapOption (Option : word wrap 옵션입니다)
                    < word wrap option >
           WR_NONE : 워드랩을 하지 않음
           R_LINE : 개행 문자에 의해 적용
           WR_WORD : 글자 단위로 적용
           WR_ENGLISH : 영 단어 단위로 적용
           WB_BOTH : 한글과 영어 혼합 단어 단위로 적용
        * Return :  계산된 사이즈가 저장된  Size object
        ------------------------------------------------------------------------------*/
        this.gf_getTextSize = function (sText,objFont,iLimitWidth,sConstWordWrapOption)
        {
            var objPainter = this.canvas.getPainter();
            var objTextSize = objPainter.getTextSize(sText, objFont);

            return objTextSize; //cx, cy
        }

        this.TopArea_ontimer = function(obj,e)
        {
        	var rtn;
        	this.killTimer(5000);
        	rtn = this.confirm("10분후에 하나로eSCM 자동 로그아웃 예정입니다.\n로그인 시간을 연장하시려면 '확인' 버튼을 클릭하세요.");
        	if (rtn)
        	{
        		var sSvcID        = "sessKeep";
        		var sURL          = "svc::rest/pt/comn/sessKeep";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "gfn_callBackReturn";
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
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

        };

        this.loadIncludeScript("TopFrame_serviceInfo.xfdl", true);

       
    };
}
)();
