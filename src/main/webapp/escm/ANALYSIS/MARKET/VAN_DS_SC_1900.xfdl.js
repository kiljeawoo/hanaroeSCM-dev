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
                this.set_name("VAN_DS_SC_1900");
                this.set_titletext("자사상품 월별 시장점유율");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"POINT\" type=\"FLOAT\" size=\"256\"/><Column id=\"AMOUNT_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AMOUNT_ORG\" type=\"INT\" size=\"256\"/><Column id=\"AMOUNT_TOT_ORG\" type=\"INT\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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
            obj = new Static("sta_location", "absolute", "332", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("지역");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_div", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 15 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date", "absolute", "94", "10", "207", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("@ds_date");
            obj.set_index("-1");
            obj = new Combo("cbo_locMain", "absolute", "411", "10", "207", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@ds_locMain");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Radio("rdo_div", "absolute", "94", "36", "220", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_div_innerdataset = new Dataset("rdo_div_innerdataset", this.div_search.rdo_div);
            rdo_div_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업장/소분류</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">소분류/사업장</Col></Row></Rows>");
            obj.set_innerdataset(rdo_div_innerdataset);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

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

            obj = new Static("Static00", "absolute", "292", "271", "15", "115", null, null, this);
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

            obj = new Static("Static13", "absolute", "226", "30", null, "10", "493", null, this);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "225", "61", null, "5", "493", null, this);
            obj.set_taborder("46");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "226", "87", null, "10", "493", null, this);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "302", "30", null, "67", "476", null, this);
            obj.set_taborder("48");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("49");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_right", "absolute", "38.58%", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_right");
            obj.style.set_background("#c0504dff");
            obj.style.set_align("left");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"소분류코드\"/><Cell col=\"1\" text=\"소분류명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"판매액(천원)\"/><Cell col=\"4\" text=\"점유율(%)\"/><Cell col=\"5\" text=\"그래프\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:POINT\"/><Cell col=\"5\" displaytype=\"bar\" style=\"controlbackground:cornsilk;controlcolor:#ffffff00;\" text=\"bind:POINT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합 계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 4 0 0;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 4 0 0;\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 4 0 0;\"/><Cell col=\"5\" displaytype=\"bar\" style=\"padding:3 3 3 3;controlbackground:cornsilk;controlcolor:#ffffff00;\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_left", "absolute", "0", "42", null, null, "62.56%", "0", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_left");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_show", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("div_dateInfo", "absolute", null, "22", "200", "18", "5", null, this.div_list);
            obj.set_taborder("4");
            obj.style.set_align("right");
            obj.style.set_font("9 arial");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcel", "absolute", "91.5%", "4", null, "17", "0%", null, this.div_list);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "115", null, this);
            obj.set_taborder("57");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
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
            obj = new Layout("default", "", 788, 393, this.div_list,
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
            		p.set_titletext("자사상품 월별 시장점유율");

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
        this.addIncludeScript("VAN_DS_SC_1900.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1900.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e){	
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.btn_show_onclick = function(obj,e){
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        };

        this.fn_afterFormOnload = function(){
        	
        	var div = this.getCompInfo().div;
        	this.getCompInfo().grd_left.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        	this.authChkDisable();
        	this.addEventAuth('onitemchanged', this.btnClick);
        	this.search();
        };

        //조회버튼 클릭시
        this.btnClick = function(){	
        	
        	var div = this.getCompInfo().div;
        	var codeText1 = '';
        	var nameText1 = '';
        	var codeText2 = '';
        	var nameText2 = '';
        	if(div == 1){
        		codeText1 = 'bzplc.code';
        		nameText1 = 'bzplc.name';
        		codeText2 = 'lclc.code';
        		nameText2 = 'lclc.name';
        	}else{
        		codeText1 = 'lclc.code';
        		nameText1 = 'lclc.name';
        		codeText2 = 'bzplc.code';
        		nameText2 = 'bzplc.name';
        	}
        	this.getCompInfo().grd_left.setCellProperty('Head', 0, 'text', this.gfn_getTextMessage(codeText1));
        	this.getCompInfo().grd_left.setCellProperty('Head', 1, 'text', this.gfn_getTextMessage(nameText1));
        	this.getCompInfo().grd_right.setCellProperty('Head', 0, 'text', this.gfn_getTextMessage(codeText2));
        	this.getCompInfo().grd_right.setCellProperty('Head', 1, 'text', this.gfn_getTextMessage(nameText2));
        	this.search('left');
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
        	json.TRPL_C = this.getTrplCode();
        	json.pageType = "M";
        	var trId = "";
        	var in_ds = "";
        	
        	if(!searchType){ //검색조건 초기화
        		in_ds = "ds_date=ds_date ds_locMain=ds_locMain";
        		trId = "init";
        		searchType = "";
        	}
        	else if(searchType == 'left'){ //LEFT 조회		
        		in_ds = "ds_left=ds_left";
        		trId = "left";	
        	}
        	else{ //RIGHT 조회
        		in_ds = "ds_right=ds_right";
        		json.CODE = code;
        		trId = "right";	
        	}
        	
        	this.displayClear(searchType);
        	
        	/*
        	if(trId != 'init'){
        		if(!json.LOCMAIN){
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			return;
        		}
        	}
        	*/
        	
        	json.searchType = searchType;
        	var param = this.getParamJsonToString(json);		
        	
        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/market/myGiftSharePointList", 
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
        	
        	if(trId == 'init'){	
        		var ds = this.ds_locMain;
        		ds.insertRow(0);
        		ds.setColumn(0,'SIMP_C','');
        		//ds.setColumn(0,'SIMP_CNM',this.gfn_getTextMessage('validation.message.select.location'));
        		ds.setColumn(0,'SIMP_CNM','- 전체 -');
        		this.getCompInfo().cbo_date.set_index(0);
        		this.getCompInfo().cbo_locMain.set_index(0);
        	
        	}else if(trId == 'left'){			
        		this.getCompInfo().grd_left.setCellProperty("Body", 0, "style", "cursor:hand;");
        		this.getCompInfo().grd_left.setCellProperty("Body", 1, "style", "cursor:hand;");
        		if(this.getCompInfo().ds_left.getRowCount() == 0){
        			this.getCompInfo().grd_right.set_nodatatext('');
        		}else{
        			var emptyText = "msg.van_ds_sc_1900.view.emptyText1";
        			if(this.getCompInfo().div != '1') emptyText = "msg.van_ds_sc_1900.view.emptyText2";
        			this.getCompInfo().grd_right.set_nodatatext(this.gfn_getTextMessage(emptyText));
        		}
        	}else{
        		this.getCompInfo().grd_right.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	
        		this.rightGridSummary();
        	}
        };

        //그리드 합계
        this.rightGridSummary = function(){
        	
        	var ds = this.getCompInfo().ds_right;
        	if(ds.getRowCount() == 0) return;
        	var qty = 0;
        	var amount_tot = 0;
        	var amount = 0;
        	var point = 0;
        	for(var i=0; i<ds.getRowCount() ; i++){
        		qty += Number(ds.getColumn(i, "QTY"));
        		amount += Number(ds.getColumn(i, "AMOUNT_ORG"));
        		amount_tot = Number(ds.getColumn(i, "AMOUNT_TOT_ORG"));
        		if(i == ds.getRowCount()-1){
        			if(amount == 0 || amount_tot == 0){ 
        				point += '';
        				if(amount == 0) amount += '';
        			}else{ 
        				point = (amount/amount_tot*100).toFixed(2);
        			}
        		}
        	}	
        	this.getCompInfo().grd_right.setCellProperty("Summary", 1, "text", qty);
        	this.getCompInfo().grd_right.setCellProperty("Summary", 2, "text", this.cvtAmount(amount));
        	this.getCompInfo().grd_right.setCellProperty("Summary", 3, "text", point);
        	this.getCompInfo().grd_right.setCellProperty("Summary", 4, "text", point);
        };

        //디스플레이 초기화
        this.displayClear = function(searchType){

        	if(!searchType || searchType == 'left'){
        		this.getCompInfo().ds_left.clearData();	
        		this.getCompInfo().ds_right.clearData();	
        	}else{
        		this.getCompInfo().ds_right.clearData();	
        	}
        	this.getCompInfo().grd_right.setCellProperty("Summary", 1, "text", "");
        	this.getCompInfo().grd_right.setCellProperty("Summary", 2, "text", "");
        	this.getCompInfo().grd_right.setCellProperty("Summary", 3, "text", "");
        };

        this.getCompInfo = function(){

        	var compInfo = {};
        	compInfo.div = this.div_search.rdo_div.value;
        	compInfo.ds_left = this.ds_left;
        	compInfo.ds_right = this.ds_right;
        	compInfo.grd_left = this.div_list.grd_left;
        	compInfo.grd_right = this.div_list.grd_right;
        	compInfo.cbo_date = this.div_search.cbo_date;
        	compInfo.cbo_locMain =	this.div_search.cbo_locMain;
        	return compInfo;
        };

        //엑셀
        this.btn_excel_onclick = function(obj,e){			

        	var title = this.getScreenName();
        	var fileName = this.getExcelFileName();
        	var json = this.getParamJson(this.components);
        	/*
        	if(!json.LOCMAIN || !json.DATE){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1900.excel.alert'));
        		return;
        	}
        	*/	
        	var sId = "1900";
        	var json2 = this.getParamJson(this.components, false, true);
        	json.TRPL_C = this.getTrplCode();
        	var pageType = "M";	
        	var param1 = "title="+title+"&sId="+sId+"&TRPL_C="+json.TRPL_C+"&pageType="+pageType;
        	var param2 = "&DATE="+json.DATE+"&LOCMAIN="+json.LOCMAIN+"&DIV="+json.DIV;
        	var param3 = "&DATE_TEXT="+json2.DATE+"&LOCMAIN_TEXT="+json2.LOCMAIN+"&DIV_TEXT="+json2.DIV;
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
            this.div_search.sta_div.addEventHandler("onclick", this.Div00_Static03_onclick, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.btnClick, this);
            this.div_search.cbo_locMain.addEventHandler("onitemchanged", this.btnClick, this);
            this.div_search.rdo_div.addEventHandler("onitemchanged", this.btnClick, this);
            this.div_search.rdo_div.addEventHandler("onitemclick", this.div_search_rdo_div_onitemclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.grd_left.addEventHandler("oncellclick", this.itemDetail, this);
            this.div_list.btn_show.addEventHandler("onclick", this.btn_show_onclick, this);
            this.div_list.div_dateInfo.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btnClick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1900.xfdl");
        this.loadPreloadList();
       
    };
}
)();
