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
                this.set_name("Intro");
                this.set_cssclass("frm_INTRO_New");
                this._setFormPosition(0,0,1010,836);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mbInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SKIN\" type=\"string\" size=\"32\"/><Column id=\"MOBILE_SKIN\" type=\"string\" size=\"32\"/><Column id=\"BOARD_TITLE\" type=\"string\" size=\"32\"/><Column id=\"BOARD_DESCRIPTION\" type=\"string\" size=\"32\"/><Column id=\"BOARD_AUTH\" type=\"string\" size=\"32\"/><Column id=\"FILES_YN\" type=\"string\" size=\"32\"/><Column id=\"CATEGORY_YN\" type=\"string\" size=\"32\"/><Column id=\"TYPE_CODE\" type=\"string\" size=\"32\"/><Column id=\"IF_INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"IF_INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"FIR_OFFICE_CODE\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_change", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_mainbg", "absolute", "0", "0", null, "380", "0", null, this);
            obj.set_taborder("27");
            obj.style.set_background("URL('theme://images/new/main_bg.png') repeat-x left top");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_main_visual", "absolute", "0", "0", "1010", "380", null, null, this.div_mainbg);
            obj.set_taborder("0");
            obj.style.set_background("URL('theme://images/new/main_visual.png') center middle");
            obj.set_scrollbars("none");
            this.div_mainbg.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "40", "135", "30", null, null, this.div_mainbg.div_main_visual);
            obj.set_taborder("1");
            obj.style.set_background("URL('theme://images/new/nh_logo.png') center middle");
            this.div_mainbg.div_main_visual.addChild(obj.name, obj);
            obj = new Div("div_change", "absolute", null, "270", "336", "110", "0", null, this.div_mainbg.div_main_visual);
            obj.set_taborder("2");
            obj.set_cssclass("div_ADMIN_Switch");
            this.div_mainbg.div_main_visual.addChild(obj.name, obj);
            obj = new Button("btn_change", "absolute", "261", "57", "48", "25", null, null, this.div_mainbg.div_main_visual.div_change);
            obj.set_taborder("8");
            obj.set_cssclass("btn_ADMIN_Switch");
            obj.style.set_cursor("hand");
            this.div_mainbg.div_main_visual.div_change.addChild(obj.name, obj);
            obj = new Edit("edt_change", "absolute", "25", "57", "231", "25", null, null, this.div_mainbg.div_main_visual.div_change);
            obj.set_taborder("9");
            obj.set_cssclass("edt_ADMIN_Switch");
            this.div_mainbg.div_main_visual.div_change.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "10", "101", "16", null, null, this.div_mainbg.div_main_visual.div_change);
            obj.set_taborder("10");
            obj.set_cssclass("sta_ADMIN_SwitchTitle");
            this.div_mainbg.div_main_visual.div_change.addChild(obj.name, obj);
            obj = new Button("btn_searchP", "absolute", "225", "57", "30", "25", null, null, this.div_mainbg.div_main_visual.div_change);
            obj.set_taborder("11");
            obj.set_cssclass("btn_ADMIN_SwitchSearch");
            obj.style.set_cursor("hand");
            this.div_mainbg.div_main_visual.div_change.addChild(obj.name, obj);

            obj = new Div("div_footer_bg", "absolute", "0", "686", null, "150", "0", null, this);
            obj.set_taborder("29");
            obj.set_scrollbars("none");
            obj.style.set_background("#f0f0f0ff");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "0%", "0", null, "0", "0%", null, this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Div("div_footer", "absolute", "0", "686", "1010", "150", null, null, this);
            obj.set_taborder("42");
            obj.set_scrollbars("none");
            obj.set_url("frame::main_bottom_new.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_related_wrap", "absolute", "0", "635", null, "46", "0", null, this);
            obj.set_taborder("44");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #dbdbdbff,1 solid transparent,1 solid transparent,1 solid transparent");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_related", "absolute", "0", "1", "1010", "45", null, null, this.div_related_wrap);
            obj.set_taborder("10");
            this.div_related_wrap.addChild(obj.name, obj);
            obj = new ImageViewer("img_related01", "absolute", "182", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("0");
            obj.style.set_background("URL('theme://images/new/family_00.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);
            obj = new ImageViewer("img_related03", "absolute", "344", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("1");
            obj.style.set_background("URL('theme://images/new/family_01.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);
            obj = new ImageViewer("img_related02", "absolute", "506", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("2");
            obj.style.set_background("URL('theme://images/new/family_03.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);
            obj = new ImageViewer("img_related04", "absolute", "668", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("3");
            obj.style.set_background("URL('theme://images/new/family_02.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);

            obj = new Div("div_content_wrap", "absolute", "0", "380", null, "255", "0", null, this);
            obj.set_taborder("45");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_content", "absolute", "0", "0", "1010", null, null, "0", this.div_content_wrap);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.div_content_wrap.addChild(obj.name, obj);
            obj = new Div("div_notice_box", "absolute", "345", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.div_content_wrap.div_content.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "37", "0", null, this.div_content_wrap.div_content.div_notice_box);
            obj.set_taborder("5");
            obj.set_text("공지사항");
            obj.style.set_border("1 solid transparent,1 solid transparent,1 solid #a7a7a7ff,1 solid transparent");
            obj.style.set_color("#3a3a3aff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.div_content_wrap.div_content.div_notice_box.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "10", "47", null, null, "0", "10", this.div_content_wrap.div_content.div_notice_box);
            obj.set_taborder("6");
            obj.set_binddataset("ds_bbs");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_INTRO_Notice2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"10\"/><Column size=\"190\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"align:left middle;padding:0 0 0 0;\" text=\"URL('theme://images/new/icon_dot.png')\"/><Cell col=\"1\" style=\":mouseover {cursor:hand;}\" text=\"bind:BBRD_TI\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:right middle;padding:3 3 3 0;color:#a0a0a0ff;color2:#a0a0a0ff;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.div_content_wrap.div_content.div_notice_box.addChild(obj.name, obj);
            obj = new Static("btn_more", "absolute", null, "10", "20", "20", "0", null, this.div_content_wrap.div_content.div_notice_box);
            obj.set_taborder("7");
            obj.style.set_background("URL('theme://images/new/icon_more.png') center middle");
            obj.set_visible("true");
            this.div_content_wrap.div_content.div_notice_box.addChild(obj.name, obj);
            obj = new Div("div_help_box", "absolute", "690", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("1");
            this.div_content_wrap.div_content.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "37", "0", null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("0");
            obj.set_text("고객센터");
            obj.style.set_color("#3a3a3aff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "47", "46", "45", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("1");
            obj.style.set_background("URL('theme://images/new/icon_call.png') left middle");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "81", "47", "218", "45", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("2");
            obj.set_text("02) 1522-1211");
            obj.set_cssclass("sta_INTRO_CSNum");
            obj.style.set_color("#ff5e2dff");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 23 맑은 고딕, Arial");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "35", "105", null, "37", "163", null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("3");
            obj.set_text("평일 09:00 ~ 18:00\r\n점심 12:00 ~ 13:00");
            obj.style.set_linespace("3");
            obj.style.set_color("#717171ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 맑은 고딕, Gulim");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Button("btn_remote", "absolute", "185", "105", "114", "37", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("4");
            obj.set_cssclass("btn_INTRO_Remote2");
            obj.style.set_cursor("hand");
            obj.set_text("원격지원");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Div("div_nhnotice_box", "absolute", "0", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            this.div_content_wrap.div_content.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "37", "0", null, this.div_content_wrap.div_content.div_nhnotice_box);
            obj.set_taborder("12");
            obj.set_text("농협 공지사항");
            obj.style.set_border("1 solid transparent,1 solid transparent,1 solid #a7a7a7ff,1 solid transparent");
            obj.style.set_color("#3a3a3aff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.div_content_wrap.div_content.div_nhnotice_box.addChild(obj.name, obj);
            obj = new Static("btn_NHmore", "absolute", null, "10", "20", "20", "0", null, this.div_content_wrap.div_content.div_nhnotice_box);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.style.set_background("URL('theme://images/new/icon_more.png') center middle");
            this.div_content_wrap.div_content.div_nhnotice_box.addChild(obj.name, obj);
            obj = new Grid("grd_notice", "absolute", "10", "47", null, null, "0", "10", this.div_content_wrap.div_content.div_nhnotice_box);
            obj.set_cssclass("grd_INTRO_Notice2");
            obj.set_taborder("11");
            obj.set_binddataset("ds_notice");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"10\"/><Column size=\"190\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"align:left middle;padding:0 0 0 0;\" text=\"URL('theme://images/new/icon_dot.png')\"/><Cell col=\"1\" style=\":mouseover {cursor:hand;}\" text=\"bind:OFANC_TINM\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:right middle;padding:3 3 3 0;color:#a0a0a0ff;color2:#a0a0a0ff;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.div_content_wrap.div_content.div_nhnotice_box.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 336, 110, this.div_mainbg.div_main_visual.div_change,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_ADMIN_Switch");

            	}
            );
            this.div_mainbg.div_main_visual.div_change.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 380, this.div_mainbg.div_main_visual,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("URL('theme://images/new/main_visual.png') center middle");
            		p.set_scrollbars("none");

            	}
            );
            this.div_mainbg.div_main_visual.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 380, this.div_mainbg,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.style.set_background("URL('theme://images/new/main_bg.png') repeat-x left top");
            		p.set_scrollbars("none");

            	}
            );
            this.div_mainbg.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 150, this.div_footer_bg,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_scrollbars("none");
            		p.style.set_background("#f0f0f0ff");

            	}
            );
            this.div_footer_bg.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 45, this.div_related_wrap.div_related,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");

            	}
            );
            this.div_related_wrap.div_related.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 33, this.div_related_wrap,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.style.set_background("white");
            		p.style.set_border("1 solid #dbdbdbff,1 solid transparent,1 solid transparent,1 solid transparent");
            		p.set_scrollbars("none");

            	}
            );
            this.div_related_wrap.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 320, 156, this.div_content_wrap.div_content.div_notice_box,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.div_content.div_notice_box.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 320, 195, this.div_content_wrap.div_content.div_help_box,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_content_wrap.div_content.div_help_box.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 320, 156, this.div_content_wrap.div_content.div_nhnotice_box,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.div_content.div_nhnotice_box.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 255, this.div_content_wrap.div_content,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.div_content.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 255, this.div_content_wrap,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 836, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Intro");
            		p.set_cssclass("frm_INTRO_New");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_mainbg.div_main_visual.div_change.edt_change","value","ds_change","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "frame::main_bottom_new.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Potal_admin.xfdl", "lib::comLib.xjs");
        this.registerScript("Potal_admin.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.Intro_onsize(this);
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           ///페이지 로딩후 실행부분
           this.fn_retrieveBlbdOfancMainList();
           this.fn_retrieveNacfOfancMainList();
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBlbdOfancMainList = function()
        {
        	var sSvcID        = "retrieveBlbdOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_retrieveNacfOfancMainList = function()
        {
        	var sSvcID        = "retrieveNacfOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	application.set_usewaitcursor(true);
         	
         	if(ErrorCode > -1)
         	{
        		switch(svcID)
        		{
        			case "retrieveBlbdOfancMainList":
        			case "retrieveNacfOfancMainList":
        				break;
        			case "search":
        				if(this.ds_mbInfo.rowcount > 0)
        				{
        					if(this.ds_mbInfo.getColumn(0, "MB_ID") == this.div_mainbg.div_main_visual.div_change.edt_change.value)
        					{
        						application.setPrivateProfile("userid", this.ds_mbInfo.getColumn(0, "MB_ID"));
        						application.setPrivateProfile("userpw",this.ds_mbInfo.getColumn(0, "MB_PW"));
        						nexacro._setCookie('userid',this.ds_mbInfo.getColumn(0, "MB_ID"),7);
        						nexacro._setCookie('userpw',this.ds_mbInfo.getColumn(0, "MB_PW"),7);
        						this.gfn_callAdminSite(this.ds_mbInfo.getColumn(0, "MB_ID"),this.ds_mbInfo.getColumn(0, "MB_PW"));
        					}
        					else
        					{
        						this.div_mainbg.div_main_visual.div_change.btn_searchP.click();
        					}
        				}
        				else
        				{
        					this.div_mainbg.div_main_visual.div_change.btn_searchP.click();
        				}
        				break;
        				
        		}
         	}
        }
        // this.gfn_callAdminSite = function(pId, pPW)
        // {
        // 	var adlUrl = application.xadl;	
        // 
        // 	if(adlUrl.indexOf('localhost') > 0 || adlUrl.indexOf('121.0.0.1') > 0)
        // 	{//로컬
        // 		system.execBrowser("http://localhost:8080/nhvan/escm/index.html");
        // 	}
        // 	else if(adlUrl.indexOf('121.156.58.242') != -1)
        // 	{ 
        // 		system.execBrowser("http://121.156.58.242/escm/index.html");
        // 	}
        // 	else if(adlUrl.indexOf("https://www.nhescm.co.kr") != -1)
        // 	{ 
        // 		system.execBrowser("https://www.nhescm.co.kr/escm/index.html");
        // 	}
        // 	system.exit();
        // }

        this.fn_popupAfter = function(strId,strVal)
        {   
        	if(strId == "OMG_DS_SC_9040" && strVal != undefined)
        	{
        		var val = strVal.split(",");
        		application.setPrivateProfile("userid", val[0]);
        		application.setPrivateProfile("userpw",val[1]);
        		nexacro._setCookie('userid',val[0],7);
        		nexacro._setCookie('userpw',val[1],7);
        		
        		this.div_mainbg.div_main_visual.div_change.edt_change.set_value(val[0]);
        		
        		this.gfn_callAdminSite(val[0], val[1]);
        	}
        }

        this.button_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_searchP":
        			var oArg = {paramMode:"U", dsArg:this.ds_change};
        		    var sOption = "autosize=true,title=true";
        		    var sPopupCallBack = "fn_popupAfter";     
        		    this.gfn_openPopup("OMG_DS_SC_9040","OMG.MG::OMG_DS_SC_9040.xfdl",oArg,sOption,sPopupCallBack);       
        			break;
        			
        		case "btn_more":
        			this.fn_openMenu("26004003");
        			break;
        		case "btn_NHmore":	
        			this.fn_openMenu("26004001");
        			break;
        		case "btn_change":
        			if(this.gfn_isNull(this.div_mainbg.div_main_visual.div_change.edt_change.value))
        			{
        				this.div_mainbg.div_main_visual.div_change.btn_searchP.click();
        			}		
        			else if( this.gfn_length(this.div_mainbg.div_main_visual.div_change.edt_change.value)<2)
        			{
        				alert("두 글자 이상 입력해 주세요.");
        				return;
        			}
        			else
        			{
        				this.fn_searchMb();
        			}
        			break;
        			
        		case "btn_remote":
        			window.open("http://939.co.kr/nhescm/");
        			break;
        			
        		case "btn_quick01":
        			this.fn_openMenu("90005001");
        			break;
        		case "btn_quick02":
        			this.fn_openMenu("90010002");
        			break;
        		case "btn_quick03":
        			this.fn_openMenu("26003001");
        			break;
        	}
        }

        this.img_related_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "img_related01"://농협경제지주
        			window.open("http://www.nhabgroup.com");
        			break;
        		case "img_related03"://농협몰
        			window.open("http://www.nonghyupmall.com");
        			break;
        		case "img_related02"://하나로유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh002/index.do");
        			break;
        		case "img_related04"://농협유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh003/index.do");
        			break;
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.grd_oncellclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "grd_notice":
        			this.fn_openNhNotice(e.row);
        			break;
        		case "grd_bbs":
        			this.fn_openBbsNotice(e.row);
        			break;
        	}
        }

        

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_searchMb = function()
        {
        	var sParam = "searchType=1"
        				+" searchText="+this.gfn_nullToEmpty(this.div_mainbg.div_main_visual.div_change.edt_change.value);
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveUsrInfList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mbInfo=ds_mbInfo";	
        	var sArgument     = sParam
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        }
        this.fn_openNhNotice = function(nRow)
        {
        	var oArg = {noticeSeq:this.ds_notice.getColumn(nRow, "BBRD_SQNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4511","OMG.PT::OMG_DS_SC_4511.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {blbdId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), bbrdId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4111","OMG.PT::OMG_DS_SC_4111.xfdl",oArg,sOption,sPopupCallBack);	
        }
        this.div_change_edt_change_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		obj.updateToDataset();
        		this.div_mainbg.div_main_visual.div_change.btn_change.click();
        	}
        }

        this.fn_openMenu = function(menuId) //26004003
        {
        	var sMenuId = menuId.substr(0,2);//26
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("32,*");
        	application.afrm_LeftFrame.form.ds_menu.filter("MENU_LEVEL >= 1 && MENU_ID.substr(0,2)=='"+sMenuId+"' && DISPLAY_YN!='N'");
        	
        	var nRow    = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId);
        	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        	
        	var nTopRow      = application.gds_menu.findRow("MENU_ID", sMenuId+"000000");
        	
        	var sLFTitleText = application.gds_menu.getColumn(nTopRow,"MENU_NAME");
        	
        	application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);
        	
        	//중메뉴의 첫번째 소메뉴 선택
        	var nRow2   = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId.substr(0,5) + '000');
        	objGrid.setTreeStatus(objGrid.getTreeRow(nRow2),true);//26004000
        	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nRow);
        	
        	var sMId =application.afrm_LeftFrame.form.ds_menu.getColumn(nRow,"MENU_ID");
        	
        	//해당Grid visible처리
        	application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(true);
        	application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(false);
        	
        	this.gfn_OpenMenuId(sMId);
        }

        
        /* 화면리사이즈에 따른 레이아웃 유지 */
        var RESIZE_DIV = [ /* 가운데 정렬할 객체 */
        	 this.div_mainbg.div_main_visual
        	,this.div_footer
        	,this.div_content_wrap.div_content
        	,this.div_related_wrap.div_related
        ];
        var RESIZE_WRAP = [ /* 정렬할 객체의 부모 레이아웃(기본 폭 유지) */
        	 this.div_mainbg
        	,this.div_footer_bg
        	,this.div_content_wrap
        	,this.div_related_wrap
        ];
        this.Intro_onsize = function(obj,e)
        {
        	var BASE_WIDTH = 1010; // 기본사이즈(넓이)
        	var BASE_HEIGHT = 836; // 기본사이즈(높이)
        	var diffW = 0, diffH = 0;
        	if (obj.width > BASE_WIDTH) {
        		diffW = (obj.width - BASE_WIDTH) / 2;
        	} else {
        		diffW = 0;
        	}
        	
        	if (obj.height > BASE_HEIGHT) {
        		diffH = obj.height - BASE_HEIGHT;
        	} else {
        		diffH = 0;
        	}
        	
        	// 기본 높이(BASE_HEIGHT)에 따른 하단(Footer) 위치 조절
        	this.div_related_wrap.set_top(635+diffH);
        	this.div_footer.set_top(686+diffH);
        	this.div_footer_bg.set_top(686+diffH);
        	
        	// 기본 넓이(BASE_WIDTH) 보다 넓을 때, 화면 가운데 정렬
        	for (var i=0; i<RESIZE_DIV.length; i++) {
        		RESIZE_DIV[i].set_left(diffW);
        	}
        	
        	// 기본 넓이(BASE_WIDTH)보다 좁을 때, 최소 넓이 유지(스크롤)
        	for (var i=0; i<RESIZE_WRAP.length; i++) {
        		if (diffW == 0) {
        			RESIZE_WRAP[i].set_width(BASE_WIDTH);
        			RESIZE_WRAP[i].set_right("");
        		} else {
        			RESIZE_WRAP[i].set_width("");
        			RESIZE_WRAP[i].set_right(0);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.Intro_onsize, this);
            this.div_mainbg.div_main_visual.div_change.btn_change.addEventHandler("onclick", this.button_onclick, this);
            this.div_mainbg.div_main_visual.div_change.edt_change.addEventHandler("onkeydown", this.div_change_edt_change_onkeydown, this);
            this.div_mainbg.div_main_visual.div_change.btn_searchP.addEventHandler("onclick", this.button_onclick, this);
            this.div_related_wrap.div_related.img_related01.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related03.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related02.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related04.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_content_wrap.div_content.div_notice_box.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_content_wrap.div_content.div_notice_box.btn_more.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_help_box.btn_remote.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_nhnotice_box.btn_NHmore.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_nhnotice_box.grd_notice.addEventHandler("oncellclick", this.grd_oncellclick, this);

        };

        this.loadIncludeScript("Potal_admin.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
