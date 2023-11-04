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
                this.set_name("OMG_DS_SC_8110");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("수주내역조회");
                this._setFormPosition(0,0,540,570);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rgn_c00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_phd_fclt_c", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"TXT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authorityWorkplace", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_MBCO_DSC\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "216", "540", null, null, "0", this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);
            obj = new Static("st_cnt", "absolute", "0", "16", "540", "48", null, null, this.div_list);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "64", "540", null, null, "38", this.div_list);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_dataM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"207\"/><Column size=\"180\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"발주일자\"/><Cell col=\"1\" text=\"발주번호\"/><Cell col=\"2\" text=\"수주량\"/><Cell row=\"1\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"발주처명\"/><Cell row=\"1\" col=\"2\" text=\"수주금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"2\" style=\"align:right middle;\" text=\"bind:ODR_QT\"/><Cell row=\"1\" colspan=\"2\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\" wordwrap=\"char\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODR_AM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("st_count", "absolute", "0", "21", "216", "38", null, null, this.div_list);
            obj.getSetter("taborder").set("0");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchControl", "absolute", "0", "0", "540", "16", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "100", null, "340", "29", null, "1", this.div_list);
            obj.set_taborder("4");
            obj.style.set_align("center");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "293", "10", "13", "15", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", "0", "229", "10", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", "306", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PageNext");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_previous", "absolute", "17", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PagePrevious");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_end", "absolute", "323", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PageNextP");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_first", "absolute", "0", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PagePreviousP");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "24", "229", "5", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "31", "9", "13", "15", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page4", "absolute", "254", "0", "43", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("21");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page3", "absolute", "199", "0", "44", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("22");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page2", "absolute", "145", "0", "45", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("23");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page1", "absolute", "92", "0", "44", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("24");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page0", "absolute", "38", "0", "43", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("25");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_PageS");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", "540", "216", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("85");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "15", "147", "510", "49", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "137", "16", "184", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_to", "absolute", "341", "16", "184", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static09", "absolute", "318", "16", "26", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("89");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_authorityWorkplace", "absolute", "7.22%", "78", null, "54", "2.78%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_innerdataset("ds_authorityWorkplace");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.style.set_itemfont("14 Helvetica");
            obj = new CheckBox("chk_all", "absolute", "7", "78", "31", "54", null, null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_allSlct");
            obj.set_positionstep("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "485", "196", "91", "20", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.style.set_background("#dc143c33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_detailMaster", "absolute", "568", "0", "540", "804", null, null, this);
            obj.set_taborder("52");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_detailB", "absolute", "0", "370", "540", null, null, "0", this.div_detailMaster);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.div_detailMaster.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "33", "540", "48", null, null, this.div_detailMaster.div_detailB);
            obj.getSetter("taborder").set("4");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_detailMaster.div_detailB.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0%", "5", null, "38", "54.81%", null, this.div_detailMaster.div_detailB);
            obj.getSetter("taborder").set("5");
            obj.set_text("수주내역상세");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_detailMaster.div_detailB.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "81", "540", null, null, "0", this.div_detailMaster.div_detailB);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"수주금액\"/><Cell col=\"1\" text=\"수주량\"/><Cell col=\"2\" text=\"단가\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"입수\"/><Cell row=\"1\" colspan=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"상품명\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"상품코드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column5\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column6\"/><Cell row=\"1\" colspan=\"3\" style=\"align:left middle;\" text=\"bind:Column7\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.div_detailMaster.div_detailB.addChild(obj.name, obj);
            obj = new Button("btn_searchControl", "absolute", "0", "0", "540", "33", null, null, this.div_detailMaster.div_detailB);
            obj.set_taborder("7");
            obj.set_text("추가정보 더보기");
            obj.set_cssclass("btn_WF_InputControlBtn");
            this.div_detailMaster.div_detailB.addChild(obj.name, obj);
            obj = new Div("div_detailA", "absolute", "0", "-1", "540", "375", null, null, this.div_detailMaster);
            obj.set_taborder("1");
            this.div_detailMaster.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", "540", "55", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("12");
            obj.set_text("수주내역개요");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "152", "306", "388", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("13");
            obj.set_text("270,798");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "306", "153", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("14");
            obj.set_text("수주금액");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "152", "243", "388", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("15");
            obj.set_text("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "243", "153", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("16");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "152", "180", "388", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("17");
            obj.set_text("(주)농협유통창동유통센터(소매)");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "180", "153", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("18");
            obj.set_text("발주처명");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "152", "117", "388", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("19");
            obj.set_text("10095");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "117", "153", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("20");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "152", "54", "388", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("21");
            obj.set_text("2015-01-01");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "54", "153", "64", null, null, this.div_detailMaster.div_detailA);
            obj.getSetter("taborder").set("22");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);
            obj = new Button("btn_create", "absolute", "349", "4", "176", "46", null, null, this.div_detailMaster.div_detailA);
            obj.set_taborder("23");
            obj.set_text("배송예정서 작성");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_detailMaster.div_detailA.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 340, 29, this.div_list.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_align("center");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_list.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("51");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 0, this.div_detailMaster.div_detailB,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.div_detailMaster.div_detailB.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 375, this.div_detailMaster.div_detailA,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_detailMaster.div_detailA.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 804, this.div_detailMaster,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.set_visible("false");

            	}
            );
            this.div_detailMaster.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 570, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("수주내역조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8110.xfdl", function() {
        //include "lib::comLib.xjs";

        	var iStartPageNo    = 0;   // 전체 페이지 순서
        	var iUnitSelRowNo   = 0;  // 한번 Server호출시 가져올 row갯수
        	var iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	var iMaxPageNum     = 5;  // 화면에 보여줄 최대 Page번호 갯수
        	//var iServerRowCount = 30;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	var iTotCnt = 0;
        	var lsDivPage = "";//페이지 컴포넌트 경로
        	var lsDivPageNum = "";//총건수 컴포넌트 경로
        	var lsTotCntDst = "";//총건수 사용여부
        	var lsFuncNm = "";//화면호출변수명
        	
        	var objDivNm =""; //부모디비전명
        	var gFunctionName; //권한사업장 값이 변경될때 호출할 함수명

        this.form_onload = function(obj,e)
        {
        	var param = [  
         		{code:"RGN_C$"+encodeURIComponent("substr(simp_c,3,2) = '00'"),   dsName:"ds_rgn_c00",   selecttype:"N"},    //지역코드00
         		{code:"PHD_FCLT_C",   dsName:"ds_phd_fclt_c",   selecttype:"A"}    //물류기능코드
            ];
        	
        	this.gfn_setMobileCommonCode(param);
        	
        	this.div_search.cal_from.set_value("20150701");
        	//this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("YYYYMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	this.div_list.grd_list.set_nodatatext("데이터가 없습니다.");
        	this.div_detailMaster.div_detailB.grd_detail.set_nodatatext("데이터가 없습니다.");
        	this.div_list.st_count.set_text("검색결과<fc v='#fff44f'> 0 <fs v='17'></fs></fc>건");
        	
        	var code = "[" + application.gv_glnCode + "] " + application.gv_companyName
        	
        	if(application.gv_mbcoType != 1){
        		this.ds_authorityWorkplace.addRow();
        		this.ds_authorityWorkplace.setColumn(0,"CLNTNM",code)
        		this.div_search.cbo_authorityWorkplace.set_index(0);
        	}else{
        		this.ds_authorityWorkplace.copyData(application.gds_authorityWorkplace);
        		this.div_search.cbo_authorityWorkplace.set_index(0);
        	}
        	var trplC = this.getTrplCodeMobile();
        }

        /* 수주내역 조회 */
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_dataM.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 3; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_searchFir();
        }

        this.fn_searchFir = function(){
        	
        	if(this.fn_validationCheck()){
        		var search_type = 1; //조회구분 일자별
        		var na_wrs_c = ""; //상품코드
        		//var search_period = ""; //조회기간
        		var cal_from  = this.gfn_nullToEmpty(this.div_search.cal_from.value); //From Date
        		var cal_to = this.gfn_nullToEmpty(this.div_search.cal_to.value); //To Date
        		var spypl_type = ""; //공급처 구분
        		var phd_fclt_c = ""; //물류기능코드
        		var wmc_loc_rgn_dsc = ""; //지역코드00 (시)
        		var ht_lov_rgn_c = ""; //지역코드01(구)
        		var chkAll = ""; //지역코드01(구)
        		var trplC = ""; //공급거래처
        		
        		if(this.div_search.chk_all.value == true){
        			chkAll = 'Y'
        			trplC = this.getTrplCodeMobile(); //공급거래처;
        		}else{
        			chkAll = 'N'
        			trplC = application.gv_glnCode;
        		}

        		var params =  "search_type=" + search_type 
        					+ " na_wrs_c=" + na_wrs_c
        					+ " cal_from=" + cal_from
        					+ " cal_to=" + cal_to
        					+ " chkAll=" + chkAll
        					+ " trplC=" + trplC;
        				
        		trace(">>>>>>> params : " +  params);
        		
        		var sSvcID        = "retrieveOrderFst";//통신아이디
        		var sURL          = "svc::/rest/scm/order/retrieveOrderFst";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO01=ds_pageVO ds_dataM01=ds_dataM";//보내는데이터셋
        		var sOutDatasets  = "ds_pageVO=ds_pageVO01 ds_dataM=ds_dataM01";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		//Fisrt List
        		if(svcID == "retrieveOrderFst"){
        			if(this.ds_dataM.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				trace("sTotal : " + sTotal);
        				this.div_list.st_count.set_text("검색결과<fc v='#fff44f'> " + sTotal + " <fs v='17'></fs></fc>건");
        				
        				this.fn_pageSet(sTotal, sPagesize,"div_page",lsNowPage);
        				this.div_list.div_page.set_visible(true);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        				
        			}else{
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.fn_pageSet(0, 0,"div_page",lsNowPage);//페이징 설정
        			}
        		}
        		
        		//Second List
        		/*
        		if(svcID == "retrieveOrderScd"){
        			
        			var sTotal    = this.ds_pageVO02.getColumn(0, "TOTAL_ROW_COUNT");
        			var sPagesize = this.ds_pageVO02.getColumn(0, "PAGE_SIZE");
        			if(dsScdArr[selectRdoIdx].rowcount > 0){
        				trace("sTotal : " + sTotal);
        				divPageObjScdArr[selectRdoIdx].fn_pageSet(sTotal, sPagesize,divPageScdArr[selectRdoIdx],lsNowPage);
        				//this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"div_page",lsNowPage);		
        			}else{
        				eval('this.div_list0'+selectRdoIdx+'.grd_detail.set_nodatatext("데이터가 없습니다.");');
        				divPageObjScdArr[selectRdoIdx].fn_pageSet(0, 0,divPageScdArr[selectRdoIdx],lsNowPage);
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data"); 
        				//this.div_list.div_page.fn_pageSet(0, 0,"div_page",lsNowPage);//페이징 설정
        			}
        		}
        		*/
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var cal_from = this.div_search.cal_from.value;
        	var cal_to = this.div_search.cal_to.value;
        	
        	if(this.gfn_isNull(cal_from)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(cal_to)){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(cal_from,cal_to) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(cal_from,cal_to) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        	}
        	
        	return true;
        }

        this.div_list_grd_list_oncellclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 0;
        	this.div_detailMaster.move(nLeft, nTop);
        	this.div_detailMaster.bringToFront();
        	this.div_detailMaster.set_visible(true);
        	
        	this.gfn_callDetailMenu("div_detailMaster", "수주내역 상세", "수주내역^^");
        }

        this.div_list_btn_searchControl_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_detailMaster_div_detailB_btn_searchControl_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_detailMaster.div_detailA, this.div_detailMaster.div_detailB);
        }

        this.btn_page_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iPageNo = iNo % 5;

        	objDivNm = obj.parent.name;
        	
        	if (iPageNo == 0)
        	{
        		iPageNo = 5;
        	}
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		//eval(lsFuncNm + "(" +  iNo + ")");
        		this.lookupFunc(lsFuncNm + "(" +  iNo + ")").call();
        	} else	{
        		this.lookupFunc("fn_paging").call(iNo,objDivNm);
        	}
        	
        	this.fn_btnColorSet(iPageNo-1);
           
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function(iVStartPageNo){

        	var sPage   = iVStartPageNo*iMaxPageNum;
        	var iPageNo = 0;	//페이지번호

        	// 이전버튼 처리
        	if(iVStartPageNo < 1){
        		this.div_list.div_page.btn_first.set_visible(false);
        		this.div_list.div_page.btn_previous.set_visible(false);
        	} else {
        		this.div_list.div_page.btn_first.set_visible(true);
        		this.div_list.div_page.btn_previous.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if(iTotCnt <= ((sPage + 5 )*iUnitSelRowNo)){
        		this.div_list.div_page.btn_next.set_visible(false);
        		this.div_list.div_page.btn_end.set_visible(false);		
        	}else{
        		this.div_list.div_page.btn_next.set_visible(true);
        		this.div_list.div_page.btn_end.set_visible(true);	
        	}

        	var nCnt = "";
        	// 인덱스 번호 처리
        	for(var i=0; i<iMaxPageNum; i++){
        		iPageNo = sPage+i+1;
        		this.div_list.div_page.all["sta_page"+i].set_visible(true);
        		trace(this.div_list.div_page.all["sta_page"+i].visible);
        		trace("i=== "+i);
        		this.div_list.div_page.all["sta_page"+i].set_text(iPageNo);
        		this.div_list.div_page.all["sta_page"+i].set_tooltiptext(iPageNo);
        		
        		if (iTotCnt > ((iPageNo - 1 )*iUnitSelRowNo))
        		{
        			this.div_list.div_page.all["sta_page"+i].set_visible(true);
        			nCnt = i;			
        		}else
        		{
        			this.div_list.div_page.all["sta_page"+i].set_visible(false);
        		}
        	}
        	
        	this.fn_setButtonOrder(nCnt+1);
        }

        this.btn_next_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo+1;
        	
        	this.fn_SetPageNo(iStartPageNo);
        	this.fn_btnColorSet(0);//버튼색상설정	
        	objDivNm   = obj.parent.name;
        	var iValue = (iStartPageNo*iMaxPageNum) + 1;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}
        }

        this.btn_previous_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo-1;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(9);//버튼색상설정
        	objDivNm = obj.parent.name;
        	var iValue = ((iStartPageNo + 1)*iMaxPageNum);
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}	
        }

        this.btn_first_onclick = function(obj,e)
        {
        	iStartPageNo=0;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(0);//버튼색상설정
        	objDivNm = obj.parent.name;
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  1 + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(1, objDivNm);
        	}		

        }

        this.btn_end_onclick = function(obj,e)
        {
        	iStartPageNo = parseInt(iTotCnt / (iUnitSelRowNo * 5));
        	
            var iNam = iTotCnt % iUnitSelRowNo;//나머지

        	var iValue = parseInt((iTotCnt/iUnitSelRowNo)) % 5;

        	var jValue = parseInt((iTotCnt / iUnitSelRowNo)) + 1;	
        	var jTValue = parseInt(jValue % 5);//페이지 끝번호
        	
        	
        	
        	objDivNm = obj.parent.name;

        	if (iNam == 0)
        	{
        		iValue = iValue - 1;
        		jValue = jValue - 1;
        		//iStartPageNo = iStartPageNo -1;
        	}
        	
        	if (iValue == -1)
        	{
        		iValue = 9;
        	}

        	if (iNam == 0)
        	{
        		jTValue = parseInt(jValue % 5);//페이지 끝번호
        		
        		if (jTValue == 0)
        		{
        			iStartPageNo = iStartPageNo-1;
        			this.fn_SetPageNo(iStartPageNo);			
        		} else
        		{
        			this.fn_SetPageNo(iStartPageNo);			
        		}
        	} else
        	{
        		this.fn_SetPageNo(iStartPageNo);	
        	}
        	
        	this.fn_btnColorSet(iValue);//버튼색상설정

        
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  jValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(jValue,objDivNm);
        	}	
        }

        //업무화면에서 호출
        this.fn_pageSet = function(sTotalRowCnt,sPageSize,sdivPage,sNowPage,sCalFuncNm,sTotCntDst,sDivPageNum)
        {
        	iTotCnt = sTotalRowCnt;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(sCalFuncNm))
        	{
        		lsFuncNm = sCalFuncNm;
        	}
        		
        	if (iTotCnt > 0)
        	{
        		//this.all[sdivPage].visible = true; //2015
        		this.div_list.div_page.set_visible(true);
        		 
        	} else
        	{

        		if (this.gfn_isNull(sTotalRowCnt))
        		{	
        			
        		}	
        		//this.all[sdivPage].visible = false; //2015
        		this.div_list.div_page.set_visible(false);
        	}
        	
        	iUnitSelRowNo = sPageSize;
        	
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		iStartPageNo=0;	
        	}
        	
        	this.fn_SetPageNo(iStartPageNo);	
        		
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		this.fn_btnColorSet(0);
        	}		
        }

        //버튼색상설정
        this.fn_btnColorSet = function(sNo)
        {	
            
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (iLoop == sNo)
        		{
        			this.div_list.div_page.all["sta_page"+iLoop].set_cssclass("sta_WF_PageS");
        		} else
        		{
        			this.div_list.div_page.all["sta_page"+iLoop].set_cssclass("sta_WF_Page");		
        		}
        	}
        	
        	this.fn_setButtonPos();//버튼위치조정	
        }

        /***********************************************************************************************
         * 함수명     : this.fn_setButtonPos()
         * 설명       : 버튼위치 세팅
         * parameter   : void
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonPos = function() {
        	
        	var iPos = 5;
        	
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (this.div_list.div_page.all["sta_page"+iLoop].visible == false)
        		{
        			iPos = iLoop;
        			break;
        		} 
        	}
        	
        	this.fn_setButtonOrder(iPos);
        }

        /***********************************************************************************************
         * 함수명     : fn_setButtonOrder()
         * 설명       : 버튼위치 정렬
         * parameter   : iPos - 안보이는 버튼 시작위치
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonOrder = function(iPos) 
        {
        	if (iPos == 5)
        	{
        		this.div_list.div_page.btn_first.set_left(0);
        		this.div_list.div_page.btn_previous.set_left(18);
        		this.div_list.div_page.btn_next.set_left(306);
        		this.div_list.div_page.btn_end.set_left(324);
        		
        		this.div_list.div_page.sta_page0.set_left(38);
        		this.div_list.div_page.sta_page1.set_left(92);
        		this.div_list.div_page.sta_page2.set_left(146);
        		this.div_list.div_page.sta_page3.set_left(200);
        		this.div_list.div_page.sta_page4.set_left(254);		
        		
        	} else if (iPos == 1)
        	{
        		this.div_list.div_page.btn_first.set_left(102);//18
        		this.div_list.div_page.btn_previous.set_left(120);//26
        		
        		this.div_list.div_page.sta_page0.set_left(146);
        		
        	} else if (iPos == 2)
        	{
        		this.div_list.div_page.btn_first.set_left(75);
        		this.div_list.div_page.btn_previous.set_left(93);
        		
        		this.div_list.div_page.sta_page0.set_left(119);
        		this.div_list.div_page.sta_page1.set_left(173);
        		
        	} else if (iPos == 3)
        	{
        		this.div_list.div_page.btn_first.set_left(48);
        		this.div_list.div_page.btn_previous.set_left(66);
        		
        		this.div_list.div_page.sta_page0.set_left(92);
        		this.div_list.div_page.sta_page1.set_left(146);
        		this.div_list.div_page.sta_page2.set_left(200);
        					
        	} else if (iPos == 4)
        	{
        		this.div_list.div_page.btn_first.set_left(21);
        		this.div_list.div_page.btn_previous.set_left(39);
        		
        		this.div_list.div_page.sta_page0.set_left(65);
        		this.div_list.div_page.sta_page1.set_left(119);
        		this.div_list.div_page.sta_page2.set_left(173);
        		this.div_list.div_page.sta_page3.set_left(227);
        	}		
        	
        }

        /* 모바일 권한사업장 Combo 체크 */
        this.getTrplCodeMobile = function(combo,chkbox){

        	if(arguments.length != 0 && arguments.length != 2){
        		this.alert('Parameter length only 0 or 2');
        		return;
        	};
        	
        	var trpl_c = '';
        	
        	if(this.isHeadquarters()){ //본사인 경우에는 권한사업장 컴포넌트가 존재
        		var trplCode;
        		var allCheck;
        		try{
        			if(combo) trplCode = combo;
        			else trplCode = this.getAuthComp().combo;
        			if(chkbox) allCheck = this.getAuthComp().check;
        			else allCheck = this.div_search.chk_all;
        		}catch(e){
        			trace('ERROR: 권한사업장 또는 전체 체크박스 컴포넌트가 존재하지 않습니다.');
        			return;
        		}
        		
        		//권한사업장 전체 체크 
        		if(allCheck){
        			if(allCheck.value == true){ //전체 체크시
        				
        				var ds = trplCode.getInnerDataset();
        				var code = '';
        				for(var i=0 ; i<ds.getRowCount();i++){
        					code += ds.getColumn(i, 0) + ',';
        				}
        				if(code.indexOf(',') != -1){
        					code = code.substring(0, code.length-1);
        				}
        				trpl_c = code;
        			}else{
        				trpl_c = trplCode.value;
        			}
        		}
        	}else{ //지사
        		trpl_c = 'undefined';
        	}	
        	return trpl_c;
        };

        //본사 지사 확인(true 본사 / false 지사)
        this.isHeadquarters = function(){
        	return application.gv_mbcoType == 1 ? true : false;
        };

        //본사인 경우만 > 권한사업장 한개씩만 선택(체크박스 숨김)
        this.authChkDisable = function(){
        	
        	if(this.isHeadquarters()){
        		this.getAuthComp().check.set_visible(false);
        	}
        };

        //권한사업장 이벤트 등록
        this.addEventAuth = function(eventName,fnc){
        	
        	var eventName = eventName || 'onitemchanged';
        	var fnc = fnc || this.search;
        	this.getAuthComp().combo.addEventHandler(eventName, fnc, this);
        };

        //권한사업장 컴포넌트 
        this.getAuthComp = function(){

        	var comp = {};
        	comp.div = this.div_search;
        	comp.combo= comp.div.cbo_authorityWorkplace;
        	comp.check= comp.div.chk_all;
        	return comp;
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_dataM01_onrowposchanged, this);
            this.ds_authorityWorkplace.addEventHandler("onload", this.ds_authorityWorkplace_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_list.addEventHandler("oncellclick", this.div_list_grd_list_oncellclick, this);
            this.div_list.btn_searchControl.addEventHandler("onclick", this.div_list_btn_searchControl_onclick, this);
            this.div_list.div_page.btn_next.addEventHandler("onclick", this.btn_next_onclick, this);
            this.div_list.div_page.btn_previous.addEventHandler("onclick", this.btn_previous_onclick, this);
            this.div_list.div_page.btn_end.addEventHandler("onclick", this.btn_end_onclick, this);
            this.div_list.div_page.btn_first.addEventHandler("onclick", this.btn_first_onclick, this);
            this.div_list.div_page.sta_page4.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page3.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page2.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page1.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page0.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);
            this.div_search.cbo_authorityWorkplace.addEventHandler("onitemchanged", this.div_search_cbo_authorityWorkplace_onitemchanged, this);
            this.div_detailMaster.div_detailB.btn_searchControl.addEventHandler("onclick", this.div_detailMaster_div_detailB_btn_searchControl_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8110.xfdl");

       
    };
}
)();
