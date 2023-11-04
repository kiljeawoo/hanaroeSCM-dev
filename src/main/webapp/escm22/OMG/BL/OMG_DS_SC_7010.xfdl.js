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
                this.set_name("frm_OMG_DS_SC_7010");
                this.set_titletext("이용료 추이 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resultList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mmList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "60", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("이용월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_mm00", "absolute", "76", "10", "108", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "186", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_mm01", "absolute", "197", "10", "108", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_select00", "absolute", "345", "10", "191", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_select00_innerdataset = new Dataset("rdo_select00_innerdataset", this.div_search.rdo_select00);
            rdo_select00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이용료</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">증감액</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">증감률</Col></Row></Rows>");
            obj.set_innerdataset(rdo_select00_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_title00", "absolute", "541", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_inputtype("digit");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "100", "31", "100", "5", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "100", "57", "100", "10", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_mm02", "absolute", "197", "36", "108", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_select01", "absolute", "345", "36", "191", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_select01_innerdataset = new Dataset("rdo_select01_innerdataset", this.div_search.rdo_select01);
            rdo_select01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이용료</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">증감액</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">증감률</Col></Row></Rows>");
            obj.set_innerdataset(rdo_select01_innerdataset);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("3");
            obj.set_direction("vertical");
            obj.set_index("2");
            obj = new Static("sta_title02", "absolute", "15", "36", "191", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("정렬조건 선택 :   정렬기준월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "596", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("6");
            obj.set_enableevent("true");
            obj.set_scrollbars("none");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_resultList");
            obj.set_scrollbars("autoboth");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"업체코드\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" mask=\"####-##\"/><Cell col=\"4\" mask=\"####-##\"/><Cell col=\"5\" text=\"증감액(원)\"/><Cell col=\"6\" text=\"증감률(%)\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RMS_TRPL_C\"/><Cell col=\"2\" style=\"align:left;padding:2 5 0 5;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:PRE_AM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;background:#00ffff66;background2:#00ffff66;\" text=\"bind:CUR_AM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:DIFF_AM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"expr:(DIFF_PER == '999999') ? '신규' : DIFF_PER\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 421, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_enableevent("true");
            		p.set_scrollbars("none");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("이용료 추이 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7010.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7010.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	
        	this.div_search.div_mm00._setValue(this.gfn_minusMonth(toDay, 2).substring(0, 6));
        	this.div_search.div_mm01._setValue(this.gfn_minusMonth(toDay, 1).substring(0, 6));
        	this.div_search.div_mm01.setFunctionName("fn_div_mm02_setValue");
        	this.div_search.div_mm02._setValue(this.gfn_minusMonth(toDay, 1).substring(0, 6));
        	
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        }

        // 정렬할 이용월 설정
        this.fn_div_mm02_setValue = function()
        {
        	this.div_search.div_mm02._setValue(this.div_search.div_mm01._getValue()); // 검색 종료월 설정
        }

        // 검색 영역 open/close
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        // 초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        // 엑셀
        this.btn_excel00_onclick = function(obj,e)
        {
        	var params = "START_MONTH=" + this.div_search.div_mm00._getValue()						// 시작월
        			+ "&END_MONTH=" + this.div_search.div_mm01._getValue()							// 종료월
        			+ "&SEARCH_TYPE=" + this.div_search.rdo_select00.value							// 검색유형 (1: 이용료, 2: 증감액, 3: 증감률)
        			+ "&SEARCH_VALUE=" + this.gfn_nullToEmpty(this.div_search.edt_title00.value)	// 검색값
        			+ "&SORT_MONTH=" + this.div_search.div_mm02._getValue()							// 정렬월
        			+ "&SORT_TYPE=" + this.div_search.rdo_select01.value							// 정렬유형 (1: 이용료, 2: 증감액, 3: 증감률)
        	;
        	
        	excelDownHandler(application.gv_serverAdmin_url + "rest/excel/bl/blamn/downloadExcelUgfeTrndList?" + params, this);
        }

        // 조회
        this.btn_search00_onclick = function(obj,e)
        {
        	this.fn_clearColumns(); // 그리드 컬럼 초기화
        	
        	var params = "START_MONTH=" + this.div_search.div_mm00._getValue()						// 시작월
        			+ " END_MONTH=" + this.div_search.div_mm01._getValue()							// 종료월
        			+ " SEARCH_TYPE=" + this.div_search.rdo_select00.value							// 검색유형 (1: 이용료, 2: 증감액, 3: 증감률)
        			+ " SEARCH_VALUE=" + this.gfn_nullToEmpty(this.div_search.edt_title00.value)	// 검색값
        			+ " SORT_MONTH=" + this.div_search.div_mm02._getValue()							// 정렬월
        			+ " SORT_TYPE=" + this.div_search.rdo_select01.value							// 정렬유형 (1: 이용료, 2: 증감액, 3: 증감률)
        	;
        	
        	var sSvcID        = "retrieveUgfeTrndList";
        	var sURL          = "svc::rest/bl/blamn/retrieveUgfeTrndList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_resultList=ds_resultList ds_mmList=ds_mmList";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var tranType      = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 콜백
        this.fn_callback = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		switch (ErrorCode) {
        			case -2: alert(ErrorMsg); break;
        			default: this.gfn_getMessage("alert", ErrorMsg);
        		}
        		return;
        	}
        	
        	if (svcID == "retrieveUgfeTrndList") {
        		if (this.ds_resultList.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        		
        		for (var i = 1; i < this.ds_mmList.getRowCount(); i++) { // 1부터 시작
        			var COMP_MONTH = this.ds_mmList.getColumn(i - 1, "MONTH");
        			var SEARCH_MONTH = this.ds_mmList.getColumn(i, "MONTH");
        			this.fn_addColumns(COMP_MONTH, SEARCH_MONTH); // 그리드 컬럼 추가
        		}
        	}
        }

        // 그리드 컬럼 초기화 - 모든 월별데이터 컬럼을 제거한다.
        this.fn_clearColumns = function()
        {
        	var obj = this.div_list.grd_main00;
        	
        	var idx = obj.getCellCount("Head") - 1; // 마지막 컬럼 index
        	
        	while (idx > 2) {
        		obj.deleteContentsCol(idx);
        		--idx;
        	}
        }

        // 그리드 컬럼 추가 - 월별데이터 컬럼을 추가한다.
        this.fn_addColumns = function(COMP_MONTH,SEARCH_MONTH)
        {
        	var obj = this.div_list.grd_main00;
        	
        	var idx = obj.getCellCount("Head") - 1; // 마지막 컬럼 index
        	//alert(obj.getCellProperty("Body", idx, "autosizecol"));
        	
        	++idx; // 1
        	obj.appendContentsCol();
        	obj.setFormatColProperty(idx, "size", 80);
        	obj.setCellProperty("Head", idx, "mask", "####-##");
        	obj.setCellProperty("Head", idx, "text", COMP_MONTH);
        	obj.setCellProperty("Body", idx, "autosizecol", "limitmin");
        	obj.setCellProperty("Body", idx, "displaytype", "number");
        	obj.setCellProperty("Body", idx, "style", "align:right middle;padding:2 5 0 5;");
        	obj.setCellProperty("Body", idx, "text", "bind:PRE_AM_" + SEARCH_MONTH);
        	
        	++idx; // 2
        	obj.appendContentsCol();
        	obj.setFormatColProperty(idx, "size", 80);
        	obj.setCellProperty("Head", idx, "mask", "####-##");
        	obj.setCellProperty("Head", idx, "text", SEARCH_MONTH);
        	obj.setCellProperty("Body", idx, "autosizecol", "limitmin");
        	obj.setCellProperty("Body", idx, "displaytype", "number");
        	obj.setCellProperty("Body", idx, "style", "align:right middle;padding:2 5 0 5;background:#00ffff66;background2:#00ffff66;");
        	obj.setCellProperty("Body", idx, "text", "bind:CUR_AM_" + SEARCH_MONTH);
        	
        	++idx; // 3
        	obj.appendContentsCol();
        	obj.setFormatColProperty(idx, "size", 80);
        	obj.setCellProperty("Head", idx, "text", "증감액(원)");
        	obj.setCellProperty("Body", idx, "autosizecol", "limitmin");
        	obj.setCellProperty("Body", idx, "displaytype", "number");
        	obj.setCellProperty("Body", idx, "style", "align:right middle;padding:2 5 0 5;");
        	obj.setCellProperty("Body", idx, "text", "bind:DIFF_AM_" + SEARCH_MONTH);
        	
        	++idx; // 4
        	obj.appendContentsCol();
        	obj.setFormatColProperty(idx, "size", 80);
        	obj.setCellProperty("Head", idx, "text", "증감률(%)");
        	obj.setCellProperty("Body", idx, "autosizecol", "limitmin");
        	obj.setCellProperty("Body", idx, "displaytype", "number");
        	obj.setCellProperty("Body", idx, "style", "align:right middle;padding:2 5 0 5;");
        	obj.setCellProperty("Body", idx, "text", "expr:(DIFF_PER_" + SEARCH_MONTH + " == '999999') ? '신규' : DIFF_PER_" + SEARCH_MONTH);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7010.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
