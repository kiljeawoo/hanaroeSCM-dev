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
                this.set_name("VAN_DS_SC_1970");
                this.set_titletext("월별 경쟁사 시장분석");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_left", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_right", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"AMOUNT_TOT\" type=\"INT\" size=\"256\"/><Column id=\"POINT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PRE_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"PRE_AMOUNT_TOT\" type=\"INT\" size=\"256\"/><Column id=\"PRE_POINT\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"QTY_TOT\" type=\"INT\" size=\"256\"/><Column id=\"QTY_POINT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PRE_QTY\" type=\"INT\" size=\"256\"/><Column id=\"PRE_QTY_TOT\" type=\"INT\" size=\"256\"/><Column id=\"PRE_QTY_POINT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bzplc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_locMain", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_myCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_date", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 15 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_location", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("지역");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date", "absolute", "94", "10", "207", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("@ds_date");
            obj.set_index("-1");
            obj = new Combo("cbo_locMain", "absolute", "94", "36", "207", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@ds_locMain");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("sta_bzplc", "absolute", "332", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 15 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_bzplc", "absolute", "411", "36", "207", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("@ds_bzplc");

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "74", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "345", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "184", "271", "15", "115", null, null, this);
            obj.set_taborder("38");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("39");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "30", null, "67", "787", null, this);
            obj.set_taborder("43");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "30", "700", "10", null, null, this);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "217", "87", null, "10", "502", null, this);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("49");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_right", "absolute", "25.38%", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_right");
            obj.style.set_background("#c0504dff");
            obj.style.set_align("left");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"소분류명\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"Total\"/><Cell col=\"3\" text=\"점유율(%)\"/><Cell col=\"4\" text=\"수량&#13;&#10;(전월)\"/><Cell col=\"5\" text=\"Total&#13;&#10;(전월)\"/><Cell col=\"6\" text=\"점유율(%)&#13;&#10;(전월)\"/><Cell col=\"7\" displaytype=\"normal\" text=\"그래프\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY_TOT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY_POINT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRE_QTY\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRE_QTY_TOT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRE_QTY_POINT\"/><Cell col=\"7\" displaytype=\"bar\" style=\"controlbackground:cornsilk;controlcolor:#ffffff00;\" text=\"bind:QTY_POINT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_left", "absolute", "0", "42", null, null, "76.65%", "0", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_left");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"경쟁사\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_show", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcel", "absolute", "91.5%", "4", null, "17", "0%", null, this.div_list);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("div_dateInfo", "absolute", null, "22", "200", "18", "5", null, this.div_list);
            obj.set_taborder("6");
            obj.style.set_align("right");
            obj.style.set_font("9 arial");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "21.3%", "97", null, "42", "65.63%", null, this);
            obj.set_taborder("58");
            obj.set_text("42");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
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
            		p.set_titletext("월별 경쟁사 시장분석");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1970.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1970.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e){
        	
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.btn_show_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        };

        var _init = false;
        this.fn_afterFormOnload = function(){
        	this.getCompInfo().ds_bzplc.addEventHandler('onload',this.addComboSelect,this);
        	_init = true;
        	this.search();
        };

        //조회
        this.btnClick = function(){	
        	this.search('left');
        };

        //점포검색
        this.bzplcLoad = function(){

        	if(this.getCompInfo().ds_bzplc.rowcount > 0 && !this.getCompInfo().cbo_locMain.value){
        		this.getCompInfo().ds_bzplc.deleteAll();
        		this.addComboSelect(this.getCompInfo().ds_bzplc);
        		return;
        	}
        	this.search('bzplc');
        };

        //LEFT 그리드 셀 클릭시
        this.itemDetail = function(obj,e){
        	
        	var ds = this.getCompInfo().ds_left;
        	var code = ds.getColumn(e.row, 0);
        	this.search('right', code);
        };

        //조회
        this.search = function(searchType,code){

        	var json = this.getParamJson(this.components);
        	json.pageType = "M";
        		
        	var trId = "";
        	var in_ds = "";
        	
        	if(!searchType){ //검색조건 초기화
        		in_ds = "ds_locMain=ds_locMain ds_date=ds_date";
        		trId = "init";
        		searchType = "";
        	}else if(searchType == 'left'){ //LEFT 조회		
        		in_ds = "ds_left=ds_left";
        		trId = "left";	
        	}else if(searchType == 'right'){ //RIGHT 조회
        		in_ds = "ds_right=ds_right";
        		json.CODE = code;
        		trId = "right";	
        	}else{
        		in_ds = "ds_bzplc=ds_bzplc";
        		trId = "bzplc";	
        	}
        	in_ds += " ds_myCategory=ds_myCategory"
        	
        	if(trId != 'init'){
        		if(this.ds_myCategory.rowcount == 0){
        			this.gfn_getMessage("alert", 'msg.van_ds_sc_19xx.alert.category');
        			return;
        		}
        	}
        		
        	if(trId == 'bzplc'){
        		if(!json.LOCMAIN){
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			this.displayClear(searchType);
        			return;
        		}
        	}
        	
        	if(trId == 'left' || trId == 'right'){
        		if(!json.LOCMAIN){
        			this.displayClear('');
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			return;
        		}
        		if(!json.BZPLC){
        			this.displayClear('');
        			this.alert(this.gfn_getTextMessage('validation.message.select.bzplc'));
        			return;
        		}
        	}	
        	
        	this.displayClear(searchType);
        	
        	json.searchType = searchType;
        	var param = this.getParamJsonToString(json);
        	
        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/market/competitorsAnalysis", 
        						"",
        						in_ds,
        						param,
        						"fn_callback",
        						"S"
        						);
        };

        //콜백
        this.fn_callback = function(trId,errCode,errMsg){

        	if(errCode < 0){
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}
        	
        	var param = {
        		form: this,
        		table: 'IAS_SL_MM_BZPLC_CLS',
        		div: this.div_list.div_dateInfo
        	};
        	this.getInfoTableDt(param);
        	
        	//조회
        	if(trId == 'init'){			
        		
        		var ds = this.ds_locMain;
        		ds.insertRow(0);
        		ds.setColumn(0,'SIMP_C','');
        		ds.setColumn(0,'SIMP_CNM',this.gfn_getTextMessage('validation.message.select.location'));
        		this.getCompInfo().cbo_date.set_index(0);
        		this.getCompInfo().cbo_locMain.set_index(0)
        		this.addComboSelect(this.getCompInfo().ds_bzplc);
        		this.getCompInfo().grd_left.set_nodatatext('');
        		
        	}else if(trId == 'left'){			
        		this.getCompInfo().grd_left.setCellProperty("Body", 0, "style", "cursor:hand;");			
        		if(this.getCompInfo().ds_left.getRowCount() == 0){
        			this.getCompInfo().grd_left.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));		
        			this.getCompInfo().grd_right.set_nodatatext('');
        		}else{
        			var emptyText = this.gfn_getTextMessage('msg.van_ds_sc_1970.view.emptyText1');
        			this.getCompInfo().grd_right.set_nodatatext(emptyText);
        		}
        			
        	}else if(trId == 'right'){
        		this.getCompInfo().grd_right.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	}
        };

        //사업장 콤보박스
        this.addComboSelect = function(obj,e){
        	
        	var ds = obj;
        	var selectText = '';
        	this.getCompInfo().grd_left.set_nodatatext('');
        	if(ds.getRowCount() == 0){
        		this.displayClear('');
        		this.getCompInfo().grd_right.set_nodatatext('');
        		selectText = "msg.van_ds_sc_1970.view.bzplc.nodate";
        		if(_init) _init = false;
        		else this.alert(this.gfn_getTextMessage(selectText));
        	}else{
        		this.getCompInfo().grd_right.set_nodatatext(this.gfn_getTextMessage('msg.van_ds_sc_1970.view.emptyText3'));
        		selectText = "validation.message.select.bzplc";
        	}
        	ds.insertRow(0);
        	ds.setColumn(0,'CODE','');
        	ds.setColumn(0,'NAME',this.gfn_getTextMessage(selectText));
        	this.getCompInfo().cbo_bzplc.setInnerDataset(ds);
        	this.getCompInfo().cbo_bzplc.set_index(0);
        };

        //디스플레이 초기화
        this.displayClear = function(searchType){

        	if(searchType == 'right'){
        		this.getCompInfo().ds_right.clearData();	
        	}else{
        		this.getCompInfo().ds_left.clearData();	
        		this.getCompInfo().ds_right.clearData();	
        	}
        };

        this.getCompInfo = function(){

        	var compInfo = {};
        	compInfo.ds_left = this.ds_left;
        	compInfo.ds_right = this.ds_right;
        	compInfo.ds_bzplc = this.ds_bzplc;
        	compInfo.grd_left = this.div_list.grd_left;
        	compInfo.grd_right = this.div_list.grd_right;
        	compInfo.cbo_date = this.div_search.cbo_date;
        	compInfo.cbo_locMain =	this.div_search.cbo_locMain;
        	compInfo.cbo_bzplc = this.div_search.cbo_bzplc;
        	return compInfo;
        };

        //엑셀
        this.btn_excel_onclick = function(obj,e){	
        	
        	if(this.ds_myCategory.rowcount == 0){
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_19xx.alert.category');
        		return;
        	}	
        	
        	var title = this.getScreenName();
        	var fileName = this.getExcelFileName();
        	var json = this.getParamJson(this.components);
        	if(!json.LOCMAIN || !json.BZPLC || !json.DATE){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1970.excel.alert'));
        		return;
        	}
        	var sId = "1970";
        	var json2 = this.getParamJson(this.components, false, true);
        	var pageType = "M";	
        	var param1 = "title="+title+"&sId="+sId+"&pageType="+pageType;
        	var param2 = "&DATE="+json.DATE+"&LOCMAIN="+json.LOCMAIN+"&BZPLC="+json.BZPLC;
        	var param3 = "&DATE_TEXT="+json2.DATE+"&LOCMAIN_TEXT="+json2.LOCMAIN+"&BZPLC_TEXT="+json2.BZPLC;
        	var param = param1+param2+param3;
        	param = encodeURI(encodeURI(param));
        	param += "&fileName="+fileName;
        	excelDownHandler(application.gv_server_url+"rest/excel/analysis/market/excelDown?"+param, this);
        	//this.div_list.web_downExcel.set_url(application.gv_server_url+"rest/excel/analysis/market/excelDown?"+param);
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.sta_date.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.sta_location.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.bzplcLoad, this);
            this.div_search.cbo_locMain.addEventHandler("onitemchanged", this.bzplcLoad, this);
            this.div_search.sta_bzplc.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.cbo_bzplc.addEventHandler("onitemchanged", this.btnClick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.grd_left.addEventHandler("oncellclick", this.itemDetail, this);
            this.div_list.btn_show.addEventHandler("onclick", this.btn_show_onclick, this);
            this.div_list.div_dateInfo.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btnClick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1970.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
