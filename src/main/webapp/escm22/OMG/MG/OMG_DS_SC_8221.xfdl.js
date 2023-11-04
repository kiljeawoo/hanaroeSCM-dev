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
                this.set_name("OMG_DS_SC_8221");
                this.set_titletext("동영상 교육");
                this.set_cssclass("div_Video_scroll");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menuM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_videoList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_FLNM\" type=\"string\" size=\"32\"/><Column id=\"IMG_FLNM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"CNT\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_LVL\" type=\"STRING\" size=\"32\"/><Column id=\"VIDEO_LNGTH\" type=\"STRING\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_D\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_M\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_S\" type=\"STRING\" size=\"256\"/><Column id=\"VIDEO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CN\" type=\"STRING\" size=\"32\"/><Column id=\"TAGS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cbo_menuLvl00\" type=\"STRING\" size=\"32\"/><Column id=\"cbo_menuLvl01\" type=\"STRING\" size=\"32\"/><Column id=\"cbo_menuLvl02\" type=\"STRING\" size=\"32\"/><Column id=\"edt_menuNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rcmdVideoList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_FLNM\" type=\"string\" size=\"32\"/><Column id=\"IMG_FLNM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"CNT\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_LVL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rltdVideoList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_FLNM\" type=\"string\" size=\"32\"/><Column id=\"IMG_FLNM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"TAGS\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_LVL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_m", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"32\"/><Column id=\"CERT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SSL_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CN\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIFICATION\" type=\"STRING\" size=\"256\"/><Column id=\"MP_1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_1\" type=\"STRING\" size=\"256\"/><Column id=\"MP_2\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_2\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IP_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_block", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"BLOCK_SQNO\" type=\"string\" size=\"12\"/><Column id=\"BLOCK_TI\" type=\"string\" size=\"250\"/><Column id=\"BLOCK_ST_DTM\" type=\"STRING\" size=\"30\"/><Column id=\"BLOCK_ED_DTM\" type=\"string\" size=\"30\"/><Column id=\"BLOCK_CNTN\" type=\"string\" size=\"250\"/><Column id=\"BLOCK_PGM\" type=\"STRING\" size=\"20\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"16\"/><Column id=\"BLOCK_STATE\" type=\"STRING\" size=\"1\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_block_temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_FLNM\" type=\"string\" size=\"32\"/><Column id=\"IMG_FLNM\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"CNT\" type=\"string\" size=\"32\"/><Column id=\"VIDEO_LVL\" type=\"STRING\" size=\"32\"/><Column id=\"VIDEO_LNGTH\" type=\"STRING\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_D\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_M\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_S\" type=\"STRING\" size=\"256\"/><Column id=\"VIDEO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CN\" type=\"STRING\" size=\"32\"/><Column id=\"TAGS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", "788", "0", "1.87%", "490", null, null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_status", "absolute", "15", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.getSetter("index").set("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("cbo_status00", "absolute", "200", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.getSetter("index").set("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_menuLvl01", "absolute", "263", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("@ds_menuM");
            obj.set_index("-1");
            obj = new Static("cbo_status01", "absolute", "385", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.getSetter("index").set("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_menuLvl02", "absolute", "448", "10", "170", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("@ds_menuS");
            obj.set_index("-1");
            obj = new Static("cbo_status02", "absolute", "642", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("강의명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.getSetter("index").set("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_menuNm", "absolute", "705", "10", "170", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_readonly("false");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_menuLvl00", "absolute", "78", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("@ds_menuD");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_index("0");

            obj = new Div("div_list", "absolute", "0", "71", "98.13%", null, null, "0", this);
            obj.set_taborder("9");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "46.04%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "26", null, null, "0", "45", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_videoList");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.style.set_font("11 Gulim");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"116\"/><Column size=\"33\"/><Column size=\"112\"/><Column size=\"259\"/><Column size=\"52\"/><Column size=\"62\"/><Column size=\"44\"/><Column size=\"77\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"메뉴명\"/><Cell col=\"4\" colspan=\"2\"><Cell/><Cell col=\"1\" style=\"align:left;\" text=\"        강의명\"/></Cell><Cell col=\"6\" text=\"내용\"/><Cell col=\"7\" text=\"강의시간\"/><Cell col=\"8\" text=\"등록일\"/><Cell col=\"9\" text=\"조회수\"/><Cell col=\"10\" text=\"동영상파일명\"/><Cell col=\"11\" text=\"이미지파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:MENU_D\"/><Cell col=\"2\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:MENU_M\"/><Cell col=\"3\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:MENU_S\"/><Cell col=\"4\" colspan=\"2\" style=\"font:11 arial;selectfont:11 arial;\"><Cell displaytype=\"image\" style=\"align:left;\" expr=\"expr:&quot;theme://images/Icon_VideoPlay.png&quot;\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 5;font:11 arial;selectfont:11 arial;\" text=\"bind:MENU_NM\"/></Cell><Cell col=\"6\" edittype=\"textarea\" style=\"align:left;padding:0 0 0 10;font:11 arial;selectfont:11 arial;\" text=\"bind:VIDEO_DSC\" wordwrap=\"char\" autosizecol=\"default\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"text\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:VIDEO_LNGTH\"/><Cell col=\"8\" displaytype=\"normal\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:FSRG_DTM\"/><Cell col=\"9\" displaytype=\"normal\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:INQ_CN\"/><Cell col=\"10\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:VIDEO_FLNM\"/><Cell col=\"11\" style=\"font:11 arial;selectfont:11 arial;\" text=\"bind:IMG_FLNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.55%", null, "338", "29", null, "-1", this.div_list);
            obj.set_taborder("2");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_dtllist", "absolute", "833", "0", "98.13%", null, null, "0", this);
            obj.set_taborder("13");
            obj.set_visible("false");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Div("div_list", "absolute", null, "10%", "26.65%", "16.94%", "6", null, this.div_dtllist);
            obj.set_taborder("0");
            this.div_dtllist.addChild(obj.name, obj);
            obj = new Div("div_list00", "absolute", null, "30.99%", "26.65%", "63.22%", "5", null, this.div_dtllist);
            obj.set_taborder("1");
            this.div_dtllist.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "20", "60", "69.92%", "86.53%", null, null, this.div_dtllist);
            obj.set_taborder("2");
            this.div_dtllist.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "29", "25%", "4.13%", "19", null, this.div_dtllist);
            obj.set_taborder("3");
            obj.set_text("다음 동영상");
            obj.style.set_font("bold 9 Gulim");
            this.div_dtllist.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "26.73%", "25%", "4.08%", "19", null, this.div_dtllist);
            obj.set_taborder("4");
            obj.set_text("관련 동영상");
            obj.style.set_font("bold 9 Gulim");
            this.div_dtllist.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "20", "29", null, "29", "68.15%", null, this.div_dtllist);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.style.set_font("bold 9 Gulim");
            this.div_dtllist.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "73", "21", "-713", null, this);
            obj.set_taborder("15");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("16");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "125", null, this);
            obj.set_taborder("17");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "80", null, this);
            obj.set_taborder("18");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_dtllist,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_visible("false");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_dtllist.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("동영상 교육");
            		p.set_cssclass("div_Video_scroll");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8221.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8221.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var menuId = "";
        var menuPath = "";
        var videoLvl = "";
        var videoFlm = "";
        var imgFlm = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           /*초기값세팅*/
           
           /*조회 호출*/
        	this.fn_callMenuList();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*숨김 버튼 클릭*/
        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /*조회버튼 클릭*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	
        	this.ds_param.setColumn(0, "edt_menuNm", this.div_search.edt_menuNm.value);
        	this.ds_param.setColumn(0, "cbo_menuLvl00", this.div_search.cbo_menuLvl00.value);
        	this.ds_param.setColumn(0, "cbo_menuLvl01", this.div_search.cbo_menuLvl01.value);
        	this.ds_param.setColumn(0, "cbo_menuLvl02", this.div_search.cbo_menuLvl02.value);
        	
            var sSvcID        = "retrieveEducationVideoList";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationVideoList";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "ds_videoList=ds_videoList";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*등록버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_block};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_8221_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*수정버튼 이벤트*/
        this.btn_update_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for (var i = 0 ; i < this.ds_videoList.rowcount; i++) {
        		if (this.ds_videoList.getColumn(i, "CHK") =="1") {
        			checkCnt = checkCnt +1;
        			position = i;
        		}
        	}
        	
        	this.ds_block_temp.clearData();
        	if (checkCnt > 1) {
        		alert("하나만 선택해주시기 바랍니다.");
        		return;
        	} else if(checkCnt == 0) {
        		alert("수정해야할 데이터를 선택해 주시기 바랍니다.");
        		return;
        	} else {
        		this.ds_block_temp.addRow();
        		this.ds_block_temp.copyRow(0,this.ds_videoList,position);
        		
        		var oArg = {paramMode:"U", dsArg:this.ds_block_temp};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_8221_P01.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        /*대메뉴 선택시 중분류 콤보 세팅*/
        this.cbo_menuLvl00_onitemchanged = function(obj,e)
        {
        	//this.ds_menuM.setColumn(0,"UP_MENU_ID","00000000");	
        	var MENU_ID = this.div_search.cbo_menuLvl00.value;
        	var MENU_STR = MENU_ID.slice(0,2);
        	
        	if(MENU_ID == "00000000"){
        		this.ds_menuM.filter("");
        		this.ds_menuS.filter("");	
        	}else{
        		this.ds_menuM.filter("UP_MENU_ID=='"+MENU_ID+"' || MENU_ID=='00000000'");
        		this.ds_menuS.filter("String(MENU_ID).substr(0, 2).indexOf('" +  MENU_STR + "') >= 0 || MENU_ID=='00000000'");
        		this.div_search.edt_menuNm.set_value("");
        	}
        	
        	this.div_search.cbo_menuLvl01.set_index(0);
        	this.div_search.cbo_menuLvl02.set_index(0);
        	this.cbo_menuLvl02_onitemchanged();
        }

        /*중분류 선택시 소분류 콤보 세팅*/
        this.cbo_menuLvl01_onitemchanged = function(obj,e)
        {
        	var MENU_ID = this.div_search.cbo_menuLvl00.value;
        	var MENU_ID_M = this.div_search.cbo_menuLvl01.value;
        	var MENU_STR = MENU_ID.slice(0,2);
        	if(MENU_ID_M =="00000000"){
        		if(MENU_ID =="00000000"){
                 this.ds_menuS.filter("");
        		}else{
                 this.ds_menuS.filter("String(MENU_ID).substr(0, 2).indexOf('" +  MENU_STR + "') >= 0 || MENU_ID=='00000000'");
        		}
        	}else{
              this.ds_menuS.filter("UP_MENU_ID=='"+MENU_ID_M+"' || MENU_ID=='00000000'");
        	}
        	
        	this.div_search.cbo_menuLvl02.set_index(0);
        	this.cbo_menuLvl02_onitemchanged();
        }

        /*소분류 선택시 메뉴명 세팅*/
        this.cbo_menuLvl02_onitemchanged = function(obj,e)
        {
        	var MENU_ID = this.div_search.cbo_menuLvl02.value;
        	
        	if(MENU_ID == "00000000"){
        		this.div_search.edt_menuNm.set_enable(true);
        	}else{
        		this.div_search.edt_menuNm.set_value("");
        		this.div_search.edt_menuNm.set_enable(false);
        	}
        }

        
        /*그리드 클릭*/
        this.grd_oncellclick = function(obj,e)
        {
        	if (obj.currentcell == 4) {
        		menuId = this.ds_videoList.getColumn(this.ds_videoList.rowposition,"MENU_ID");
        		menuPath = this.ds_videoList.getColumn(this.ds_videoList.rowposition, "MENU_PATH");		//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        		videoLvl = this.ds_videoList.getColumn(this.ds_videoList.rowposition, "VIDEO_LVL");		//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        		videoFlm = this.ds_videoList.getColumn(this.ds_videoList.rowposition, "VIDEO_FLNM");	//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        		imgFlm = this.ds_videoList.getColumn(this.ds_videoList.rowposition, "IMG_FLNM");		//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        	
        		if (this.INIT) {
        			this.div_dtllist.WebBrowser00.callMethod("callShowVideo", imgFlm, videoFlm);
        		}
        		this.fn_retrieveVideoDetails(menuId, videoLvl);
        	} else {
        		return;
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*조회-서비스 Call*/ 
        this.fn_callMenuList = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "cbo_menuLvl00", "0");
        	this.ds_param.setColumn(0, "cbo_menuLvl01", "1");
        	this.ds_param.setColumn(0, "cbo_menuLvl02", "2");
        	
        	var sSvcID        = "retrieveEducationMenuList";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationMenuList";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "ds_menuD=ds_menuD ds_menuM=ds_menuM ds_menuS=ds_menuS";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	trace("ErrorCode " + ErrorCode);
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "retrieveEducationMenuList") {
        	 		this.div_search.cbo_menuLvl00.set_index(0);
        	 		this.div_search.cbo_menuLvl01.set_index(0);
        	 		this.div_search.cbo_menuLvl02.set_index(0);		
        	 		
        	 		this.btn_search_onclick();
        		} else if (svcID == "retrieveEducationVideoList") {
        			this.ds_menuS.getColumn(0, "MENU_NM");
        			//this.fn_ShowVideo();			
        		} else if(svcID == "videoDetails") {
        			this.btn_insert.set_visible(false);
        			this.btn_update.set_visible(false);
        			this.btn_search.set_visible(false);
        			this.div_search.set_visible(false);
        			this.div_list.set_visible(false);
        			this.btn_close.set_visible(true);
        			this.btn_close.set_right(15);
        			this.div_dtllist.set_visible(true);
        			this.div_dtllist.set_left(0);
        			this.div_dtllist.Static02.set_text(menuPath);	
        			this.fn_ShowVideoDtl();
        			this.fn_ShowRcmdVideo();
        			this.fn_ShowRltdVideo();
        		}
        	}	
        }

         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {
        	this.btn_search.click();
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        /*비디오 표시*/
        this.fn_ShowVideo = function()
        {
        	var strTop = 10;
        	var strHeight = 30;
        	var strWidth = 280;
        	var strLeft = 20;
        	var strimgTop = 40;
        	var strimgHeight = 200;
        	var j = 0;
        	var childList = this.div_list.components;
        	
        	if(this.ds_videoList.getRowCount()==0){
        		for (var idx=childList.length-1; 0<=idx; idx--)
        		{
        		  if(childList[idx].id != "btn_flag"){
        			 var objRemove = this.div_list.removeChild(childList[idx].id);
        			 objRemove.destroy();
        			 objRemove = null;
        		  }
        		}
        		this.gfn_getMessage("alert", "result.message.search.no.exist.data");
            }else{	
        		for (var idx=childList.length-1; 0<=idx; idx--)
        		{
        		  if(childList[idx].id != "btn_flag"){
        			 var objRemove = this.div_list.removeChild(childList[idx].id);
        			 objRemove.destroy();
        			 objRemove = null;
        		  }
        		}
        	}	
            
        	for(var i=0; i<this.ds_videoList.getRowCount(); i++){
        		var objStatic = new Static();  
        		objStatic.init("Static1"+i, "absolute", strLeft, strTop, 200, strHeight, null, null);
        		this.div_list.addChild("Static1"+i, objStatic); 
        		objStatic.show();
        		objStatic.set_text(this.ds_videoList.getColumn(i, "MENU_PATH"));	
        		
        		cnt = this.ds_videoList.getColumn(i, "CNT");
        		menuId = this.ds_videoList.getColumn(i, "MENU_ID");
        		
        		for(var k=0; k<cnt; k++){
        			var objImageViewer = new ImageViewer();
        			
        			if (k % 5 == 0 && k !== 0) {
        				strimgTop = strimgTop + strimgHeight + 20;
        				strLeft = 20;	
        			}
        			j=nexacro.toNumber(i)+nexacro.toNumber(k);
        			var strImgURL = application.gv_serviceHtml_url+"escm/Video/img/"+this.ds_videoList.getColumn(j, "IMG_FLNM");
        			
        			objImageViewer.init("ImageViewer"+j, "absolute", strLeft, strimgTop, strWidth, strimgHeight);
        			this.div_list.addChild("ImageViewer"+j, objImageViewer);
        			objImageViewer.show();
        			objImageViewer.set_image(strImgURL);
        			objImageViewer.setEventHandler("onclick", this.img_videoImage_onclick, this);
        			strLeft = strLeft + strWidth + 10;
        		}
        		strTop = strimgTop + strimgHeight + 30;
        		strimgTop = strTop + 30;
        		strLeft = 20;
        		i=nexacro.toNumber(i)+nexacro.toNumber(cnt)-1;
        		this.div_list.resetScroll();
        	}
        }

        /*기능 : 서비스 Call(동영상 상세 조회)*/ 
        this.fn_retrieveVideoDetails = function(menuId,videoLvl)
        {
        	var sParams       = "menuId="+this.gfn_nullToEmpty(menuId) +
        					    " videoLvl="+this.gfn_nullToEmpty(videoLvl);
        	var sSvcID        = "videoDetails";
        	var sURL          = "svc::rest/mg/edu/retrieveVideoDetails";
        	var sArgument     = sParams;
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_rcmdVideoList=ds_rcmdVideoList ds_rltdVideoList=ds_rltdVideoList";	
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.INIT = false;
        /*기능 : 상세 동영상 표시*/
        this.fn_ShowVideoDtl = function()
        {
        	if (!this.INIT) {
        		this.div_dtllist.WebBrowser00.set_url(application.gv_serviceHtml_url+"escm/Video/video.html");	//application.gv_serviceHtml_url    ?imgFlnm="+imgFlnm+"&videoFlnm="+videoFlnm
        		this.div_dtllist.WebBrowser00.setProperty("allowfullscreen", "");
        		this.div_dtllist.WebBrowser00.setEventHandler("onloadcompleted", this.fn_onloadcompleted, this);
        		this.INIT = true;
        	}
        }

        this.fn_onloadcompleted = function(obj,e)
        {
        	obj.callMethod("callShowVideo", imgFlm, videoFlm);
        	
        }

        
        /*기능 : 추천 동영상 표시*/
        this.fn_ShowRcmdVideo = function()
        {
        	var strImgWidth = 168;	//86%
        	var strLeft = 0;
        	var strimgTop = 0;
        	var strimgHeight = 80;
        	var childList = this.div_dtllist.div_list.components;
        	
        	for (var idx=childList.length-1; 0<=idx; idx--)
        	{
              if(childList[idx].id != "btn_flag"){
              var objRemove = this.div_dtllist.div_list.removeChild(childList[idx].id);
                 objRemove.destroy();
                 objRemove = null;
              }
            }
            
        	for(var i=0; i<this.ds_rcmdVideoList.getRowCount(); i++){
        		var objImageViewer = new ImageViewer();
        		var objStatic = new Static();  
        		
        		var strImgURL = application.gv_serviceHtml_url+"escm/Video/img/"+this.ds_rcmdVideoList.getColumn(i, "IMG_FLNM");	//'url("http://localhost:8080/nhvan/escm/Video/img/01001002.jpg")'
        		var strVideoDsc = this.ds_rcmdVideoList.getColumn(i, "VIDEO_DSC");
        		
        		objImageViewer.init("ImageViewer"+i, "absolute", strLeft, strimgTop, strImgWidth, strimgHeight);
        		objStatic.init("Static1"+i, "absolute", strLeft+strImgWidth+10, strimgTop, strImgWidth, strimgHeight, null, null);
        		objStatic.set_wordwrap("char");
        		objStatic.style.set_align("left top");
        		this.div_dtllist.div_list.addChild("ImageViewer"+i, objImageViewer);
        		this.div_dtllist.div_list.addChild("Static1"+i, objStatic);
        		objImageViewer.show();
        		objStatic.show();
        		objImageViewer.set_image(strImgURL);
        		objStatic.set_text(strVideoDsc);	
        		objImageViewer.setEventHandler("onclick", this.img_rcmdImage_onclick, this);
        		strimgTop = strimgTop + 90;
        	}
        		this.div_dtllist.div_list.resetScroll();
        }

        /*기능 : 관련동영상 표시*/
        this.fn_ShowRltdVideo = function()
        {
        	var strImgWidth = 168;	//86%
        	var strLeft = 0;
        	var strimgTop = 5;
        	var strimgHeight = 80;	
        	var childList = this.div_dtllist.div_list00.components;
        	
        	for (var idx=childList.length-1; 0<=idx; idx--)
        	{
              var objRemove = this.div_dtllist.div_list00.removeChild(childList[idx].id);
                 objRemove.destroy();
                 objRemove = null;
            }
            
        	for(var i=0; i<this.ds_rltdVideoList.getRowCount(); i++){
        		var objImageViewer = new ImageViewer();
        		var objStatic = new Static();  
        		
        		var strImgURL = application.gv_serviceHtml_url+"escm/Video/img/"+this.ds_rltdVideoList.getColumn(i, "IMG_FLNM");	//'url("http://localhost:8080/nhvan/escm/Video/img/01001002.jpg")'
        		var strVideoDsc = this.ds_rltdVideoList.getColumn(i, "VIDEO_DSC");
        		
        		objImageViewer.init("ImageViewer"+i, "absolute", strLeft, strimgTop, strImgWidth, strimgHeight);
        		objStatic.init("Static1"+i, "absolute", strLeft+strImgWidth+10, strimgTop, strImgWidth, strimgHeight, null, null);
        		objStatic.set_wordwrap("char");
        		objStatic.style.set_align("left top");
        		this.div_dtllist.div_list00.addChild("ImageViewer"+i, objImageViewer);
        		this.div_dtllist.div_list00.addChild("Static1"+i, objStatic);
        		objImageViewer.show();
        		objStatic.show();
        		objImageViewer.set_image(strImgURL);
        		objStatic.set_text(strVideoDsc);	
        		objImageViewer.setEventHandler("onclick", this.img_rltdImage_onclick, this);
        		strimgTop = strimgTop + 90;
        	}
        		this.div_dtllist.div_list00.resetScroll();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.btn_search.set_visible(true);
        	this.div_search.set_visible(true);
        	this.div_list.set_visible(true);
        	this.btn_close.set_visible(false);
        	this.div_dtllist.set_visible(false);
        	this.div_dtllist.WebBrowser00.callMethod("stopVideo");
        	this.btn_insert.set_visible(true);
        	this.btn_update.set_visible(true);
        }

        /*이벤트 : 추천 동영상 이미지 클릭*/
        this.img_rcmdImage_onclick = function(obj,e)
        {
        	menuId = this.ds_rcmdVideoList.getColumn(obj.id.substr(11), "MENU_ID");	//이미지 ID(ImageViewer0~)에 해당하는 메뉴 아이디 가져오기
        	menuPath = this.ds_rcmdVideoList.getColumn(obj.id.substr(11), "MENU_PATH");	//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        	videoLvl = this.ds_rcmdVideoList.getColumn(obj.id.substr(11), "VIDEO_LVL");	//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        	imgFlm = this.ds_rcmdVideoList.getColumn(obj.id.substr(11),"IMG_FLNM");
        	videoFlm = this.ds_rcmdVideoList.getColumn(obj.id.substr(11),"VIDEO_FLNM");
        	
        	this.div_dtllist.WebBrowser00.callMethod("callShowVideo", imgFlm, videoFlm);
        	this.fn_retrieveVideoDetails(menuId, videoLvl);	//동영상 상세 조회
        }

        /*이벤트 : 관련 동영상 이미지 클릭*/
        this.img_rltdImage_onclick = function(obj,e)
        {
        	menuId = this.ds_rltdVideoList.getColumn(obj.id.substr(11), "MENU_ID");	//이미지 ID(ImageViewer0~)에 해당하는 메뉴 아이디 가져오기
        	menuPath = this.ds_rltdVideoList.getColumn(obj.id.substr(11), "MENU_PATH");	//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        	videoLvl = this.ds_rltdVideoList.getColumn(obj.id.substr(11), "VIDEO_LVL");	//이미지 ID(ImageViewer0~)에 해당하는 메뉴 경로 가져오기
        	imgFlm = this.ds_rltdVideoList.getColumn(obj.id.substr(11),"IMG_FLNM");
        	videoFlm = this.ds_rltdVideoList.getColumn(obj.id.substr(11),"VIDEO_FLNM");
        	
        	this.div_dtllist.WebBrowser00.callMethod("callShowVideo", imgFlm, videoFlm);
        	this.fn_retrieveVideoDetails(menuId, videoLvl);	//동영상 상세 조회
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_menuLvl01.addEventHandler("onitemchanged", this.cbo_menuLvl01_onitemchanged, this);
            this.div_search.cbo_menuLvl02.addEventHandler("onitemchanged", this.cbo_menuLvl02_onitemchanged, this);
            this.div_search.edt_menuNm.addEventHandler("oneditclick", this.div_search_edt_menuNm_oneditclick, this);
            this.div_search.cbo_menuLvl00.addEventHandler("onitemchanged", this.cbo_menuLvl00_onitemchanged, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.grd_comncList.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_dtllist.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8221.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
