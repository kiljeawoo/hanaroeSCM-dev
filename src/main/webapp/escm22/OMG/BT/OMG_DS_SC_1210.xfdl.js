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
                this.set_name("OMG_DS_SC_1210");
                this.set_titletext("상담신청목록 (신청자)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_copy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "15", "29", null, "69", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "97", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("담당바이어");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "336", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_buyer", "absolute", "94", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "195", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "205", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Div("div_ctrSts", "absolute", "415", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "336", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("신청항목");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_ctrDsc", "absolute", "415", "36", "180", "21", null, null, this.div_search);
            obj.set_taborder("57");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("69");
            obj.set_dragscrolltype("both");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "24", "27", null, null, "-9", "34", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_copy");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상담신청항목\"/><Cell col=\"2\" text=\"상담신청번호\"/><Cell col=\"3\" text=\"담당바이어\"/><Cell col=\"4\" text=\"업체명\"/><Cell col=\"5\" text=\"사업자등록번호\"/><Cell col=\"6\" text=\"신청일자\"/><Cell col=\"7\" text=\"진행상태\"/><Cell col=\"8\" text=\"주력품목\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:CSLT_DSC\" expr=\"expr:CSLT_DSC == '201' ? '[수산] 선어/활어' : CSLT_DSC == '202' ? '[수산] 건어/가공' : CSLT_DSC == '203' ? '[수산] 냉동' : '마트상품부'\"/><Cell col=\"2\" style=\"cursor:pointer;\" text=\"bind:CSLT_RQ_NO\"/><Cell col=\"3\" style=\"color:EXPR(USR_NM=='담당자배정중'?'red':'black');color2:EXPR(USR_NM=='담당자배정중'?'red':'black');cursor:pointer;selectcolor:EXPR(USR_NM=='담당자배정중'?'red':'black');\" text=\"bind:USR_NM\"/><Cell col=\"4\" style=\"cursor:pointer;\" text=\"bind:CONM\"/><Cell col=\"5\" style=\"cursor:pointer;\" text=\"bind:BZNO\" mask=\"###-##-#####\"/><Cell col=\"6\" style=\"cursor:pointer;\" text=\"bind:RQ_DT\" mask=\"####-##-##\"/><Cell col=\"7\" style=\"cursor:pointer;\" text=\"bind:STS_NM\"/><Cell col=\"8\" style=\"cursor:pointer;\" text=\"bind:MAJ_LATC\" tooltiptext=\"bind:MAJ_LATC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchClose", "absolute", "46.95%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "306", "28", "30", "45", null, null, this);
            obj.set_taborder("78");
            obj.style.set_background("#0000ff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("80");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("81");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "1.49%", "470", null, "20", "1.87%", null, this);
            obj.set_taborder("82");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookmark", "absolute", "15", "0", "15", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("sta_location", "absolute", "33", "0", "185", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_text("진행결과보기");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");
            		p.set_dragscrolltype("both");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청목록 (신청자)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1210.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1210.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /* Form Load */
        this.OMG_DS_SC_1210_onload = function(obj,e)
        {
        	
        }

        this.div_list_btn_searchClose_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.OMG_DS_SC_1210_onkeydown = function(obj,e)
        {
         	if (e.keycode == 13) { // enter
         		this.btn_search.click();
         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1210_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_1210_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.Grid01.addEventHandler("oncellclick", this.div_list_Grid01_oncellclick, this);
            this.div_list.btn_searchClose.addEventHandler("onclick", this.div_list_btn_searchClose_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1210.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
