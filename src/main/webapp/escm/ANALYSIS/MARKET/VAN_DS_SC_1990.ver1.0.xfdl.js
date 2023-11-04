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
                this.set_name("VAN_DS_SC_1990");
                this.set_titletext("월별 카테고리판매정보");
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

            obj = new Dataset("ds_ClsBzplcWrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SL_YM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"SL_QT\" type=\"STRING\" size=\"256\"/><Column id=\"SL_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CONSENT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "108", "15", null, this);
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
            obj = new Static("sta_bzplc01", "absolute", "252", "66", "75", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 15 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_bzplc02", "absolute", "495", "66", "76", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("소분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 15 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_sclc", "absolute", "579", "66", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@ds_selectS");
            obj.set_codecolumn("NA_WRS_SCLC");
            obj.set_datacolumn("WRS_SCLFNM");
            obj.style.set_color("#333333ff");
            obj = new Static("sta_bzplc00", "absolute", "15", "66", "79", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 15 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_lclc", "absolute", "94", "66", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_selectL");
            obj.set_codecolumn("NA_WRS_LCLC");
            obj.set_datacolumn("WRS_LCLFNM");
            obj.set_taborder("19");
            obj = new Combo("cbo_mclc", "absolute", "339", "66", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@ds_selectM");
            obj.set_codecolumn("NA_WRS_MCLC");
            obj.set_datacolumn("WRS_MCLFNM");
            obj = new Static("sta_title01", "absolute", "332", "12", "315", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("시범기간동안 2016년 8월만 조회됩니다. ");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Static("Static09", "absolute", "0", "30", null, "85", "787", null, this);
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

            obj = new Static("Static12", "absolute", "689", "84", null, "10", "30", null, this);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "85.06%", "41", null, "42", "1.87%", null, this);
            obj.set_taborder("58");
            obj.set_text("42");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0%", "129", null, null, "1.87%", "0", this);
            obj.set_taborder("61");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_show", "absolute", "46.07%", "8", null, "12", "46.07%", null, this.div_list);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcel", "absolute", "91.5%", "12", null, "17", "0%", null, this.div_list);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("div_dateInfo", "absolute", "73.98%", "22", null, "18", "0.63%", null, this.div_list);
            obj.set_taborder("24");
            obj.style.set_align("right");
            obj.style.set_font("9 arial");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_ClsBzplcWrs", "absolute", "0%", "55", null, null, "0%", "0", this.div_list);
            obj.set_taborder("25");
            obj.set_binddataset("ds_ClsBzplcWrs");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.style.set_background("#c0504dff");
            obj.style.set_align("left");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"71\"/><Column size=\"69\"/><Column size=\"99\"/><Column size=\"86\"/><Column size=\"95\"/><Column size=\"67\"/><Column size=\"159\"/><Column size=\"39\"/><Column size=\"59\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"기간\"/><Cell col=\"1\" text=\"소분류명\"/><Cell col=\"2\" text=\"사업장코드\"/><Cell col=\"3\" text=\"사업장명\"/><Cell col=\"4\" text=\"공급업체코드\"/><Cell col=\"5\" text=\"공급업체명\"/><Cell col=\"6\" text=\"상품코드\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"수량\"/><Cell col=\"9\" text=\"판매액\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:SL_YM\"/><Cell col=\"1\" text=\"bind:WRS_SCLFNM\"/><Cell col=\"2\" text=\"bind:BZPLC\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:left;\" text=\"bind:BZPLNM\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: ;\" text=\"bind:MFT_NA_TRPL_C\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:left;\" text=\"bind:MFT_NA_TRPL_CNM\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: ;\" text=\"bind:WRS_C\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SL_QT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SL_AM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "1.74%", "155", null, "21", "10.46%", null, this);
            obj.set_taborder("62");
            obj.set_text("서버 부하문제로 전체조회시 조회건수를 20,000건으로 제한합니다. 20,000건 이상 조회시 문의바랍니다.");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 108, this.div_search,
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
            		p.set_taborder("61");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("월별 카테고리판매정보");

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
        this.addIncludeScript("VAN_DS_SC_1990.ver1.0.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1990.ver1.0.xfdl", function() {
        //include "lib::comLib.xjs";
        var NA_WRS_LCLC = "";
        var NA_WRS_MCLC = "";
        var NA_WRS_SCLC = "";

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
            //var code = this.div_search.cbo_bzplc.value;
            var code = "";
        	this.search('ClsBzplcWrs', code);
        	
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

        };

        //조회
        this.search = function(searchType,code){

        	var json = this.getParamJson(this.components);
        	json.pageType = "M";
        		
        	var trId = "";
        	var in_ds = "";
        	
        	var reqParam = "";
        	
        	if(!searchType){ //검색조건 초기화
        		in_ds = "ds_locMain=ds_locMain ds_date=ds_date";
        		trId = "init";
        		searchType = "";
        	}else if(searchType == 'bzplc'){ //RIGHT 조회
        		in_ds = "ds_bzplc=ds_bzplc";
        		trId = "bzplc";	

        	}else if(searchType == 'ClsBzplcWrs'){ //RIGHT 조회
        		in_ds = "ds_ClsBzplcWrs=ds_ClsBzplcWrs";
        		json.CODE = application.gv_glnCode;
        		trId = "ClsBzplcWrs";	
        	}else{

        	}
        	
        	// 
        	in_ds += " ds_myCategory=ds_myCategory"
        	
        	if(trId != 'init'){
        	    /*
        		if(this.ds_myCategory.rowcount == 0){
        			this.gfn_getMessage("alert", 'msg.van_ds_sc_19xx.alert.category');
        			return;
        		}
        		*/
        	}
        		
        	if(trId == 'bzplc'){
        		if(!json.LOCMAIN){
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			this.displayClear(searchType);
        			return;
        		}
        	}
        	
        	if(trId == 'ClsBzplcWrs'){
        		if(!json.LOCMAIN){
        			this.displayClear('');
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			return;
        		}
        		/*
        		if(!json.BZPLC){
        			this.displayClear('');
        			this.alert(this.gfn_getTextMessage('validation.message.select.bzplc'));
        			return;
        		}
        		*/
        	}	
        	
        	this.displayClear(searchType);

        	json.searchType = searchType;
        	var param = this.getParamJsonToString(json);
        	
        trace(" this.getParamJsonToString(json): " + param);

        	var sSvcID        = trId;                                              //통신아이디
        	var sURL          = "svc::rest/analysis/market/competitorsAnalysis" ;  // 호출할 서버 페이지 주소
        	var sInDatasets   = "";             //보내는데이터셋
        	var sOutDatasets  = in_ds;	        //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;          // 파라미터
        	var sCallbackFunc = "fn_callback";  //콜백
        	var tranType = "S";                 // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);

        };

        // 카테고리 조회
        this.searchWrsClf = function()
        {
        	if(this.ds_selectL.rowcount > 0 ){
        		this.ds_selectL.deleteAll();
        		// this.addComboSelect(this.ds_selectL);
        		// this.ds_selectL.setInnerDataset(this.ds_selectL);
        		this.div_search.cbo_lclc.setInnerDataset(this.ds_selectL);
        	}
        	
        	this.fn_getListWRS("L", "", "", "");
        }

        
        // 분류 정보 가져오기
        this.fn_getListWRS = function(level,NA_WRS_LCLC,NA_WRS_MCLC,NA_WRS_SCLC){
        	var searchMode = "select";

        	var param = "searchMode="+searchMode+
        				" level="+level+
        				" NA_WRS_LCLC="+NA_WRS_LCLC+
        				" NA_WRS_MCLC="+NA_WRS_MCLC+
        				" NA_WRS_SCLC="+NA_WRS_SCLC;

        	trace("##MASTER##PARAM##->"+param);	

        	var sSvcID        = "selectWRSPopUp_selectL";//통신아이디
        	var sURL          = "svc::rest/popup/selectWRSPopUp";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_selectL=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	
        	if(level == "L") {
        		sSvcID  = "selectWRSPopUp_selectL";
        		sOutDatasets  = "ds_selectL=DATASET";
        		this.ds_selectM.clearData();
        		this.ds_selectS.clearData();
        		this.ds_selectD.clearData();
        		
        	} else if(level == "M") {
        	
        		sSvcID  = "selectWRSPopUp_selectM";
        		sOutDatasets  = "ds_selectM=DATASET";
        		this.ds_selectS.clearData();
        		this.ds_selectD.clearData();
        	} else if (level =="S") {
        	
        		sSvcID 		 = "selectWRSPopUp_selectS";
        		sOutDatasets  = "ds_selectS=DATASET";
        		this.ds_selectD.clearData();
        		
        	} else if (level == "D") {
        	
        		sSvcID  = "selectWRSPopUp_selectD";
        		sOutDatasets  = "ds_selectD=DATASET";
        		
        	}

        
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        // 대분류 선택시 중분류 콤보 세팅
        this.div_search_cbo_lclc_onitemchanged = function(obj,e)
        {

        	NA_WRS_LCLC = this.ds_selectL.getColumn(e.postindex,"NA_WRS_LCLC");
        	
        trace("e.row: " + e.postindex);
        trace("div_search_cbo_lclc_onitemchanged: " + NA_WRS_LCLC);

        	this.ds_selectM.clearData();
        	this.ds_selectS.clearData();
        	this.ds_selectD.clearData();
        	this.fn_getListWRS("M", NA_WRS_LCLC, "", "");
        	
        }

        
        // 중분류 선택시 소분류 콤보 세팅
        this.div_search_cbo_mclc_onitemchanged = function(obj,e)
        {
        	NA_WRS_MCLC = this.ds_selectM.getColumn(e.postindex,"NA_WRS_MCLC");
        	//alert(NA_WRS_MCLC);
        	this.ds_selectS.clearData();
        	this.ds_selectD.clearData();
        	this.fn_getListWRS("S", NA_WRS_LCLC, NA_WRS_MCLC, "");
        }
        //콜백
        this.fn_callback = function(trId,errCode,errMsg){

        	if(errCode < 0){
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}
        	
        	var param = {
        		form: this,
        		table: 'IAS_SL_MM_BZPLC_WRS',
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
        		this.getCompInfo().cbo_locMain.set_index(0);
        		this.addComboSelect(this.getCompInfo().ds_bzplc);
        		//this.getCompInfo().grd_left.set_nodatatext('');
        		
        	}else if(trId == 'bzplc'){	

        	}else if(trId == 'ClsBzplcWrs'){
        		// this.getCompInfo().grd_ClsBzplcWrs.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	    trace('fn_callback - ClsBzplcWrs');
        	    trace("ds_ClsBzplcWrs.getRowCount(): " + ds_ClsBzplcWrs.getRowCount());

        	}else if(trId == 'selectWRSPopUp_selectL'){	
        	
        trace('selectWRSPopUp_selectL');

        		var ds = this.ds_selectL;
        		this.ds_selectL.insertRow(0);
        		this.ds_selectL.setColumn(0,'NA_WRS_LCLC','');
        		this.ds_selectL.setColumn(0,'WRS_LCLFNM','선택');
        		this.ds_selectL.setColumn(0,'WRS_ID_DSC','');

        	    //this.getCompInfo().cbo_lclc.setInnerDataset(this.ds_selectL);
        	    this.getCompInfo().cbo_lclc.set_index(0);

        	}else if(trId == 'selectWRSPopUp_selectM'){	
        	
        trace('selectWRSPopUp_selectM');

        		var ds = this.ds_selectM;
        		ds.insertRow(0);
        		ds.setColumn(0,'NA_WRS_MCLC','');
        		ds.setColumn(0,'WRS_MCLFNM','선택');
        		ds.setColumn(0,'WRS_ID_DSC','');

        	    this.div_search.cbo_mclc.set_index(0);
        	}else if(trId == 'selectWRSPopUp_selectS'){	
        	
        trace('selectWRSPopUp_selectS');

        		var ds = this.ds_selectS;
        		ds.insertRow(0);
        		ds.setColumn(0,'NA_WRS_SCLC','');
        		ds.setColumn(0,'WRS_SCLFNM','선택');
        		ds.setColumn(0,'WRS_ID_DSC','');

        	    this.div_search.cbo_sclc.set_index(0);

        	}
        };

        //사업장 콤보박스
        this.addComboSelect = function(obj,e){

        	var ds = obj;
        	var selectText = '';
        	
        trace("ds.id: " + ds.id);

        	if(ds.getRowCount() == 0){
        		this.displayClear('');
        		//this.getCompInfo().grd_ClsBzplcWrs.set_nodatatext('');
        		selectText = "msg.van_ds_sc_1970.view.bzplc.nodate";
        		if(_init) _init = false;
        		else this.alert(this.gfn_getTextMessage(selectText));
        	}else{
        		//this.getCompInfo().grd_ClsBzplcWrs.set_nodatatext(this.gfn_getTextMessage('메시지'));
        		selectText = "validation.message.select.bzplc"; // 사업장을 선택하세요. 
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
        		//this.getCompInfo().ds_right.clearData();	
        	}else{

        		//this.getCompInfo().ds_right.clearData();	
        	}
        };

        this.getCompInfo = function(){

        	var compInfo = {};
        	//compInfo.ds_right = this.ds_right;
        	compInfo.ds_bzplc = this.ds_bzplc;
        	//compInfo.grd_right = this.div_list.grd_right;
        	compInfo.cbo_date    = this.div_search.cbo_date;
        	compInfo.cbo_locMain = this.div_search.cbo_locMain;
        	compInfo.cbo_bzplc   = this.div_search.cbo_bzplc;
        	compInfo.cbo_lclc    = this.div_search.cbo_lclc;
        	return compInfo;
        };

        //엑셀
        this.btn_excel_onclick = function(obj,e){	
        	/*
        	if(this.ds_myCategory.rowcount == 0){
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_19xx.alert.category');
        		return;
        	}
        		*/
        	
        	var title = this.getScreenName();
        	var fileName = this.getExcelFileName();
        	var json = this.getParamJson(this.components);
        	var json2 = this.getParamJson(this.components, false, true);
        	
        	//if(!json.LOCMAIN || !json.BZPLC || !json.DATE){
        	if(!json.LOCMAIN || !json.DATE){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1970.excel.alert'));
        		return;
        	}
        	var sId = "1990";
        	var BZPLC = this.div_search.cbo_bzplc.value;
        	var CODE = application.gv_glnCode;

        	var pageType = "M";	
        	var param1 = "title="+title+"&sId="+sId+"&pageType="+pageType;
        	var param2 = "&DATE="+json.DATE+"&LOCMAIN="+json.LOCMAIN + "&BZPLC=" + BZPLC + "&TRPL_C=" + CODE;
        	var param3 = "&DATE_TEXT="+json2.DATE+"&LOCMAIN_TEXT="+json2.LOCMAIN+"&BZPLC_TEXT="+json2.BZPLC;
        	
        	var param = param1+param2+param3;
        	param = encodeURI(encodeURI(param));
        	param += "&fileName="+fileName;
        trace("rest/excel/analysis/market/excelDown?"+param);
        	excelDownHandler(application.gv_server_url+"?"+param, this);
        	//this.div_list.web_downExcel.set_url(application.gv_server_url+"rest/excel/analysis/market/excelDown?"+param);
        };

        

        
        this.div_search_cbo_sclc_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.sta_date.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.sta_location.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.cbo_locMain.addEventHandler("onitemchanged", this.bzplcLoad, this);
            this.div_search.sta_bzplc.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.cbo_bzplc.addEventHandler("onitemchanged", this.searchWrsClf, this);
            this.div_search.sta_bzplc01.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.sta_bzplc02.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.cbo_sclc.addEventHandler("onitemchanged", this.div_search_cbo_sclc_onitemchanged, this);
            this.div_search.sta_bzplc00.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.div_search.cbo_lclc.addEventHandler("onitemchanged", this.div_search_cbo_lclc_onitemchanged, this);
            this.div_search.cbo_mclc.addEventHandler("onitemchanged", this.div_search_cbo_mclc_onitemchanged, this);
            this.div_search.sta_title01.addEventHandler("onclick", this.div_search_sta_title01_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btnClick, this);
            this.div_list.btn_show.addEventHandler("onclick", this.btn_show_onclick, this);
            this.div_list.div_dateInfo.addEventHandler("onclick", this.div_search_sta_date_onclick, this);
            this.sta_title01.addEventHandler("onclick", this.div_search_sta_title01_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1990.ver1.0.xfdl");
        this.loadPreloadList();
       
    };
}
)();
