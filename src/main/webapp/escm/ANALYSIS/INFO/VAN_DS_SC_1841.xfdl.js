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
                this.set_name("VAN_DS_SC_1841");
                this.set_titletext("자사 일별 재고추이");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stockDaily", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inte", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "270", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chart", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("6");
            obj.set_text("챠트");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "21.35%", "72", null, "42", "65.67%", null, this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "159", null, this);
            obj.set_taborder("57");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_searchType", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("분석 항목");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_analysis", "absolute", "94", "10", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_analysis_innerdataset = new Dataset("rdo_analysis_innerdataset", this.div_search.rdo_analysis);
            rdo_analysis_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업장별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_analysis_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("49");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("0");
            obj.set_binddataset("ds_stockDaily");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"300\"/><Column size=\"130\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell style=\"cursor: ;\" text=\"년월일\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"매출액(천원)\"/><Cell col=\"4\" text=\"수량\"/></Band><Band id=\"body\"><Cell text=\"bind:YMD\" mask=\"@@@@-@@-@@\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("wb_chart", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_show", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcel", "absolute", "43.78%", "20", null, "17", "47.72%", null, this.div_list);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_dateInfo", "absolute", null, "20", "200", "20", "5", null, this.div_list);
            obj.set_taborder("5");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("자사 일별 재고추이");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1841.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("VAN_DS_SC_1841.xfdl", 'lib::comChart.xjs');
        this.registerScript("VAN_DS_SC_1841.xfdl", function() {
        //include "lib::comLib.xjs";
        //include 'lib::comChart.xjs';

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.btn_show_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        };

        this.fn_afterFormOnload = function(){	
        		
        	this.div_list.grd_list.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.gridSortInit(this.div_list.grd_list);
        	this.chartBtnAddEvent();
        	this.authChkDisable();
        	this.addEventAuth();
        	this.search('init');
        };

        //조회
        this.search = function(trId){
        	
        	var trId = trId || 'list';
        	
        	//데이터셋 초기화
        	this.ds_stockDaily.clearData();	
        	
        	//파라미터
        	var json = this.getParamJson(this.components, false);
        	json.TRPL_C = this.getTrplCode();
        	var param = this.getParamJsonToString(json, false);
        		
        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/info/infoChange/retrieveStockDailyList", 
        						"", 
        						"ds_stockDaily=ds_stockDaily ds_inte=ds_inte", 
        						param,
        						"fn_callback",
        						'S'
        						);
        };

        this.fn_callback = function(trId,errCode,errMsg){

        	if(errCode < 0){
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}
        		
        	if(trId == "list" || trId == "init"){
        		var codeText = '';
        		var nameText = '';		
        		var table = '';
        		var analysis = this.div_search.rdo_analysis.value;
        		var msg = '';
        		if(analysis == 1){
        			codeText = '사업장코드';
        			nameText = '사업장명';
        			table = 'IAS_STPL_DD_BZPLC';
        			msg = '등록된 관심사업장이 없습니다.\n관심사업장을 등록하세요.'
        		}
        		else if(analysis == 2){
        			codeText = '상품코드';
        			nameText = '상품명';
        			table = 'IAS_STPL_DD_WRS_C';
        			msg = '등록된 관심상품이 없습니다.\n관심상품을 등록하세요.'
        		}
        		
        		this.div_list.grd_list.setCellProperty('Head', 1, 'text', codeText);
        		this.div_list.grd_list.setCellProperty('Head', 2, 'text', nameText);
        		
        		var ds = this.ds_inte;
        		var result = ds.getColumn(0,'RESULT');
        		if(!eval(result)) alert(msg);
        		
        		if(trId == "init") this.chartBtn();
        		
        		//최근 업데이트		
        		var param = {
        			form: this,
        			table: table,
        			div: this.div_list.div_dateInfo
        		};
        		this.getInfoTableDt(param);
        	}
        	
        };

        
        //엑셀
        this.btn_excel_onclick = function(obj,e){			
        	
        	var sId = "1841";
        	var json = this.getParamJson(this.components);
        	json.TRPL_C = this.getTrplCode();
        	var title = this.getScreenName();
        	var fileName = this.getExcelFileName();
        	var param = "title="+title+"&sId="+sId+"&ANALYSIS="+json.ANALYSIS+"&TRPL_C="+json.TRPL_C;
        	param = encodeURI(encodeURI(param));
        	param += "&fileName="+fileName;
        	excelDownHandler(application.gv_server_url+"rest/excel/analysis/info/infoChange/excelDown?"+param, this);	
        	//this.div_list.web_downExcel.set_url(application.gv_server_url+"rest/excel/analysis/info/infoChange/excelDown?"+param);
        };

        //챠트 정보 생성
        this.chartInfoProp = function(){

        	var webComp = this.div_list.wb_chart; //웹브라우저 
        	var ds = this.ds_stockDaily; //데이터셋
        	var grid = this.div_list.grd_list; //그리드
        	var btn = this.btn_chart; //버튼
        	var chartInfo = {
        						chartId: "stockDaily",
        						chartType: "LINE",
        						title: "자사 일별 재고 추이",
        						subTitle: "(단위:천원)",
        						xAxis: "YMD",
        						yAxis: "CODE:NAME", //프로퍼티명:TEXT
        						yAxisData: "AMOUNT",
        						orderBy: "S:YMD+NAME"
        					};
        	
        	return {
        		webComp: webComp,
        		ds: ds,
        		grid: grid,
        		btn: btn,
        		chartInfo: chartInfo,
        		chartText: "챠트", //버튼 챠트 텍스트
        		listText: "목록",  //버튼 목록 텍스트
        		emptyText: "데이터가 없습니다."		
        	};	
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.search, this);
            this.div_search.rdo_analysis.addEventHandler("onitemchanged", this.search, this);
            this.div_list.btn_show.addEventHandler("onclick", this.btn_show_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1841.xfdl");
        this.loadPreloadList();
       
    };
}
)();
