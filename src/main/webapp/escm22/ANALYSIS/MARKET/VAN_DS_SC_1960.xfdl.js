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
                this.set_name("VAN_DS_SC_1950");
                this.set_titletext("사업장별 ABC분석");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bGroup", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MIN\" type=\"INT\" size=\"256\"/><Column id=\"MAX\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC0\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC1\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC2\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC3\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC4\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC5\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC6\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC7\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC8\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC9\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC10\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P0\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P1\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P2\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P3\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P4\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P5\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P6\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P7\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P8\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P9\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_P10\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_date", "absolute", "15", "10", "86", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 15 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_bzplc", "absolute", "15", "36", "86", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("그룹설정");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_date", "absolute", "101", "10", "207", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_locale("ko_KR");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            obj = new Edit("edt_aStart", "absolute", "179", "36", "35", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_maxlength("3");
            obj.set_value("0");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_a", "absolute", "101", "36", "70", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("A그룹(자동)");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_mm", "absolute", "214", "36", "18", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text(" ~ ");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_aEnd", "absolute", "232", "36", "35", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_maxlength("3");
            obj.set_value("80");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_c", "absolute", "516", "36", "70", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("C그룹(자동)");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_cStart", "absolute", "594", "36", "35", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_maxlength("3");
            obj.set_value("95");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_mm00", "absolute", "629", "36", "19", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text(" ~ ");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_cEnd", "absolute", "648", "36", "35", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            obj.set_value("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_b", "absolute", "293", "36", "70", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("B그룹(설정)");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_mm01", "absolute", "422", "36", "19", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text(" ~ ");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spin_s", "absolute", "371", "36", "50", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_value("80");
            obj.set_max("99");
            obj.set_min("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spin_e", "absolute", "441", "36", "50", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_value("95");
            obj.set_max("100");
            obj.set_min("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "345", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "263", "271", "15", "115", null, null, this);
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
            obj = new Grid("grd_list", "absolute", "0", "42", null, null, "0.13%", "0", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\" band=\"left\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품명/사업장명\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:0 0 0 3;background2:transparent;\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_show", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_a_color", "absolute", null, "22", "34", "10", "230", null, this.div_list);
            obj.set_taborder("4");
            obj.style.set_background("#cef279ff");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_a_text", "absolute", null, "18", "50", "20", "180", null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("A그룹");
            obj.style.set_font("9 Gulim");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_b_color", "absolute", null, "22", "34", "10", "132", null, this.div_list);
            obj.set_taborder("6");
            obj.style.set_background("#b2ccffff");
            obj.style.set_color("#333333ff");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_b_text", "absolute", null, "18", "50", "20", "87", null, this.div_list);
            obj.set_taborder("7");
            obj.set_text("B그룹");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcel", "absolute", "91.5%", "4", null, "17", "0%", null, this.div_list);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_c_color", "absolute", null, "22", "38", "10", "42", null, this.div_list);
            obj.set_taborder("9");
            obj.style.set_background("#ffd8d8ff");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_c_text", "absolute", null, "18", "50", "20", "-5", null, this.div_list);
            obj.set_taborder("10");
            obj.set_text("C그룹");
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

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "115", null, this);
            obj.set_taborder("61");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "74", null, this);
            obj.set_taborder("62");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
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
            obj = new Layout("default", "", 34, 10, this.div_list.div_a_color,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#cef279ff");

            	}
            );
            this.div_list.div_a_color.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 34, 10, this.div_list.div_b_color,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("#b2ccffff");
            		p.style.set_color("#333333ff");

            	}
            );
            this.div_list.div_b_color.addLayout(obj.name, obj);

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
            		p.set_titletext("사업장별 ABC분석");

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
        this.addIncludeScript("VAN_DS_SC_1960.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1960.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e){
        	
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.btn_show_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        };

        this.fn_afterFormOnload = function(){
        	
        	this.getCompInfo().grd_list.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.getCompInfo().cal_date.set_value(this.getDate(-1));
        	this.authChkDisable();
        	this.addEventAuth('onitemchanged', this.searchBtn);
        	this.search('init');
        };

        this.searchBtn = function(){
        	this.search('list');
        };

        //조회
        this.search = function(searchType){

        	var trId = searchType || 'list'; 
        	var in_ds = "";
        	var json = "";
        	var param = "searchType="+trId;
        	
        	if(trId == 'list'){
        		var ds= this.getCompInfo().ds_bzplc;
        		if(ds.getRowCount() == 0){
        			this.alert(this.gfn_getTextMessage("msg.van_ds_sc_1960.server.bzplc.nodate"));
        			return;
        		}
        	}
        	
        	if(trId == 'init'){
        		in_ds = "ds_bGroup=ds_bGroup ds_bzplc=ds_bzplc";
        	}else{
        		this.displayClear();
        		in_ds = "ds_list=ds_list";
        		var TRPL_C = this.getTrplCode();
        		var date = this.getCompInfo().cal_date.value;
        		var bs = this.getCompInfo().spin_s.value;
        		var be = this.getCompInfo().spin_e.value;
        		param += " TRPL_C="+TRPL_C+" date="+date+" bs="+bs+" be="+be;
        	}	
        			
        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/market/abcStore", 
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
        	
        	if(trId == 'init'){				
        		var ds = this.getCompInfo().ds_bGroup;
        		var bMin = ds.getColumn(0, 'MIN');
        		var bMax = ds.getColumn(0, 'MAX');
        		if(bMin==0) bMin = 80;
        		if(bMax==0) bMax = 95;
        		this.getCompInfo().spin_s.set_value(bMin);
        		this.getCompInfo().spin_e.set_value(bMax);
        		this.initGrid();
        	}
        	
        	if(trId == 'list'){				
        		this.getCompInfo().ds_list.set_rowposition(-1);
        		this.initDs();
        	}
        };

        this.initGrid = function(){

        	var grid = this.getCompInfo().grd_list;
        	var ds = this.getCompInfo().ds_bzplc;	
        	var colIdx = '';
        	
        	for(var i=0 ; i<ds.getRowCount();i++){
        		var code = ds.getColumn(i, "CODE");
        		var name = ds.getColumn(i, "NAME");
        		if(name.length > 7){
        			var name1 = name.substring(0,7);
        			var name2 = name.substring(7,name.length);
        			name = name1 + "\n" + name2;
        		}
        		
        		colIdx = grid.appendContentsCol();
        		grid.setFormatColProperty(colIdx, "size", 120);
        		grid.setCellProperty("Head", colIdx, "text", name);
        		grid.setCellProperty("Body", colIdx, "style", "align:right");
        		grid.setCellProperty("Body", colIdx, "displaytype", "number");
        		grid.setCellProperty("Body", colIdx, "text", "bind:BZPLC"+(i+1));
        	}
        	colIdx = grid.appendContentsCol();
        	grid.setFormatColProperty(colIdx, "size", 90);
        	grid.setCellProperty("Head", colIdx, "text", "총합계");
        	grid.setCellProperty("Body", colIdx, "style", "align:right");
        	grid.setCellProperty("Body", colIdx, "displaytype", "number");
        	grid.setCellProperty("Body", colIdx, "text", "bind:BZPLC0");
        	
        	var bg = "#D5D5D5";
        	colIdx = grid.appendContentsCol();
        	grid.setFormatColProperty(colIdx, "size", 10);
        	grid.setCellProperty("Head", colIdx, "style", "background:"+bg);
        	grid.setCellProperty("Body", colIdx, "style", "background:"+bg);
        	grid.setCellProperty("Body", colIdx, "style", "background2:"+bg);
        	
        	colIdx = grid.appendContentsCol();
        	grid.setFormatColProperty(colIdx, "size", 40);
        	grid.setCellProperty("Head", colIdx, "text", "No");
        	grid.setCellProperty("Body", colIdx, "style", "align:right");
        	grid.setCellProperty("Body", colIdx, "displaytype", "number");
        	grid.setCellProperty("Body", colIdx, "expr", "currow+1");
        	
        	for(var i=0 ; i<ds.getRowCount();i++){
        		var code = ds.getColumn(i, "CODE");
        		var name = ds.getColumn(i, "NAME");
        		if(name.length > 7){
        			var name1 = name.substring(0,7);
        			var name2 = name.substring(7,name.length);
        			name = name1 + "\n" + name2;
        		}
        		colIdx = grid.appendContentsCol();
        		grid.setFormatColProperty(colIdx, "size", 120);
        		grid.setCellProperty("Head", colIdx, "text", name);
        		grid.setCellProperty("Body", colIdx, "style", "align:right");
        		grid.setCellProperty("Body", colIdx, "displaytype", "number");
        		grid.setCellProperty("Body", colIdx, "text", "bind:BZPLC_P"+(i+1));
        	}
        	this.addEventGridResize(grid);
        };

        this.initDs = function(){
        	
        	var grid = this.getCompInfo().grd_list;
        	var ds = this.getCompInfo().ds_list;
        	var ds_bzplc = this.getCompInfo().ds_bzplc;	
        	var total_arr = [];
        	
        	for(var i=0 ; i < ds.getRowCount() ; i++){
        		for(var j=0 ; j < ds_bzplc.getRowCount()+1 ; j++){
        			var tot = ds.getColumn(i, "BZPLC"+j);
        			if(isNaN(tot)) tot = 0;
        			tot *= 1;
        			if(i==0) total_arr.push(tot);
        			else total_arr[j] += tot;
        		}
        	}
        	
        	var sum_arr = [];
        	var a = this.getCompInfo().spin_s.value;
        	var b = this.getCompInfo().spin_e.value;
        	var a_index = -1;
        	var b_index = -1;	
        	var dott_id_arr = [];
        	var dott_a_arr = [];
        	var dott_b_arr = [];
        	var dott_c_arr = [];

        	for(var i=0 ; i < ds.getRowCount() ; i++){
        	
        		var maxRow = ds.getRowCount()+1;
        		
        		for(var j=0 ; j < ds_bzplc.getRowCount()+1 ; j++){
        			
        			var tot = ds.getColumn(i, "BZPLC"+j);
        			if(isNaN(tot)) tot = 0;
        			tot*=1;
        			if(i==0){ 
        				sum_arr.push(tot);
        				dott_id_arr[j] = "BZPLC_P"+j;
        				dott_a_arr[j] = maxRow;
        				dott_b_arr[j] = maxRow;
        				dott_c_arr[j] = maxRow;
        			}else{ 
        				sum_arr[j] += tot;
        			}
        			
        			var total = 0;
        			if(total_arr[j] != 0 ) total = (sum_arr[j] / total_arr[j]*100).toFixed(2);
        			ds.setColumn(i, "BZPLC_P"+j, total);
        			
        			if(total > a && dott_a_arr[j] == maxRow){
        				//dott_a_arr[j] = i-1;
        				dott_a_arr[j] = i;
        			}
        			if(total > b && dott_b_arr[j] == maxRow){
        				//dott_b_arr[j] = i-1;
        				//dott_c_arr[j] = i;
        				dott_b_arr[j] = i;
        				dott_c_arr[j] = i+1;
        			}
        		}
        	}
        	
        	var a_color = '#CEF279';
        	var b_color = '#B2CCFF';
        	var c_color = '#FFD8D8';
        	
        	dott_id_arr[0] = 'BZPLC0'
        	
        	for(var i=0 ; i < dott_id_arr.length ; i++){
        		grid.setCellProperty("Body", this.getIndexByColId(grid, dott_id_arr[i]), "style", "background:EXPR(currow < "+ dott_a_arr[i] + " ? '" + a_color + "' : currow < " + dott_b_arr[i]+" ? '"+b_color+"' : currow < " + (ds.getRowCount()+1) + " ? '" + c_color + "' : '')");
        		grid.setCellProperty("Body", this.getIndexByColId(grid, dott_id_arr[i]), "style", "background2:EXPR(currow < " + dott_a_arr[i] + " ? '" + a_color + "' : currow < " + dott_b_arr[i]+" ? '"+b_color+"' : currow < " + (ds.getRowCount()+1) + " ? '" + c_color + "' : '')");
        	}
        };

        //디스플레이 초기화
        this.displayClear = function(){

        	this.getCompInfo().ds_list.clearData();
        };

        this.spinChange = function(obj,e){	

        	this.setTimer(999,100);
        };

        this.timerHandler = function(obj,e){
        	
        	if(e.timerid == 999) this.afterSpin();
        	
        };

        this.afterSpin = function(){

        	var minValue= 0;
        	var maxValue= 100;
        	
        	var s = Number(this.getCompInfo().spin_s.value);
        	var e = Number(this.getCompInfo().spin_e.value);
        	this.initDs();
        	
        	if(s == e) {
        		this.killTimer(999);
        		this.getCompInfo().spin_s.set_value(e-1);
        		return;
        	}
        	
        	if(s < minValue || s > maxValue-1){
        		this.killTimer(999);
        		return;
        	}
        	
        	if(e > maxValue || e < minValue + 1){
        		this.killTimer(999);
        		return;
        	}
        	this.killTimer(999);
        	this.getCompInfo().edt_aEnd.set_value(s);
        	this.getCompInfo().edt_cStart.set_value(e);
        }

        this.btn_excel_onclick = function(obj,e){
        	
        	var title = this.getScreenName();
        	var fileName = this.getExcelFileName();
        	var TRPL_C = this.getTrplCode();
        	var date = this.getCompInfo().cal_date.value;
        	var bs = this.getCompInfo().spin_s.value;
        	var be = this.getCompInfo().spin_e.value;
        	var group_txt = "A그룹:0~" + bs + " " + "B그룹:" + bs + "~" + be + " C그룹:" + be +"~100";
        	if(!date){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1960.excel.alert'));
        		return;
        	}	
        	var sId = "1960";	
        	var param1 = "title="+title+"&sId="+sId;
        	var param2 = "&TRPL_C="+TRPL_C+"&DATE="+date;
        	var param3 = "&GROUP_TEXT="+group_txt;
        	var param = param1+param2+param3;
        	param = encodeURI(encodeURI(param));
        	param += "&fileName="+fileName;
        	excelDownHandler(application.gv_server_url+"rest/excel/analysis/market/excelDown?"+param, this);
        	//this.div_list.web_downExcel.set_url(application.gv_server_url+"rest/excel/analysis/market/excelDown?"+param);
        };

        this.getCompInfo = function(){

        	var compInfo = {};
        	compInfo.ds_bzplc = this.ds_bzplc;
        	compInfo.ds_list = this.ds_list;	
        	compInfo.ds_bGroup = this.ds_bGroup;
        	compInfo.grd_list = this.div_list.grd_list;
        	compInfo.cal_date = this.div_search.cal_date;
        	compInfo.edt_aEnd = this.div_search.edt_aEnd;
        	compInfo.edt_cStart = this.div_search.edt_cStart;
        	compInfo.spin_s = this.div_search.spin_s;
        	compInfo.spin_e = this.div_search.spin_e;
        	return compInfo;
        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("ontimer", this.timerHandler, this);
            this.div_search.sta_date.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.sta_bzplc.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.spin_s.addEventHandler("ontextchanged", this.spinChange, this);
            this.div_search.spin_e.addEventHandler("ontextchanged", this.spinChange, this);
            this.div_list.grd_list.addEventHandler("oncellclick", this.itemDetail, this);
            this.div_list.btn_show.addEventHandler("onclick", this.btn_show_onclick, this);
            this.btn_search.addEventHandler("onclick", this.searchBtn, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1960.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
