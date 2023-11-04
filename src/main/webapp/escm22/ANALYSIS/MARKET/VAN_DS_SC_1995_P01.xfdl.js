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
                this.set_name("popup01");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("상품 분류 조회");
                this._setFormPosition(0,0,980,583);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchR", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_clsWrsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTFC_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INTE_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_saveTrplList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trplWrsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTFC_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INTE_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_ok", "absolute", "426", "530", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "490", "530", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "108", "17", "169", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "439", "559", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "439", "504", "91", "26", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "307", "87", "91", "31", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "95", "76", "111", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "933", "0", "37", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상품 분류 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_searchR", "absolute", "17", "95", null, "417", "17", null, this);
            obj.set_taborder("20");
            obj.set_text("div_searchR");
            obj.set_visible("true");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_search", "absolute", "0%", "12", null, null, "1.06%", "7", this.div_searchR);
            obj.set_taborder("0");
            obj.set_binddataset("ds_trplWrsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"81\"/><Column size=\"88\"/><Column size=\"91\"/><Column size=\"118\"/><Column size=\"196\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"중분류\"/><Cell col=\"2\" text=\"소분류\"/><Cell col=\"3\" text=\"세분류\"/><Cell col=\"4\" text=\"상품코드\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:WRS_LCLFNM\"/><Cell col=\"1\" text=\"bind:WRS_MCLFNM\"/><Cell col=\"2\" text=\"bind:WRS_SCLFNM\"/><Cell col=\"3\" text=\"bind:WRS_DTCFNM\"/><Cell col=\"4\" text=\"bind:NA_WRS_C\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/></Band></Format></Formats>");
            this.div_searchR.addChild(obj.name, obj);

            obj = new Div("div_selectR", "absolute", "17", "95", null, "422", "17", null, this);
            obj.set_taborder("20");
            obj.set_text("div_selectR");
            obj.set_visible("false");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_selectL", "absolute", "0", "8", "127", "96.68%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectL");
            obj.set_autofittype("col");
            obj.style.set_align("center middle");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_LCLFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);
            obj = new Grid("grd_selectM", "absolute", "13.32%", "8", "128", "96.68%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"중분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_MCLFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);
            obj = new Grid("grd_selectS", "absolute", "26.74%", "8", "128", "96.68%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectS");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"소분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_SCLFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);
            obj = new Grid("grd_selectD", "absolute", "40.27%", "8", "128", "96.68%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"세분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_DTCFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);
            obj = new Grid("grd_select", "absolute", "53.81%", "8", null, null, "0.53%", "6", this.div_selectR);
            obj.set_taborder("6");
            obj.set_binddataset("ds_clsWrsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"228\"/><Column size=\"163\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품명\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"선택\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"1\" text=\"bind:NA_TRPL_NM\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "1.73%", "44", null, "43", "1.73%", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("searchText", "absolute", "454", "9", null, "21", "24.68%", null, this.div_search);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("searchMode", "absolute", "0.53%", "9", null, "21", "82.42%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var searchMode_innerdataset = new Dataset("searchMode_innerdataset", this.div_search.searchMode);
            searchMode_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">select</Col><Col id=\"datacolumn\">분류별</Col></Row><Row><Col id=\"codecolumn\">search</Col><Col id=\"datacolumn\">검색어</Col></Row></Rows>");
            obj.set_innerdataset(searchMode_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("select");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Button("btn_search", "absolute", "91.95%", "9", null, "21", "1.91%", null, this.div_search);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_nacode", "absolute", "267", "9", null, "21", "53.39%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_saveTrplList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME_YN");
            obj.set_displayrowcount("20");
            obj.set_index("-1");
            obj = new Static("sta_searchType", "absolute", "162", "9", null, "21", "73.94%", null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("관심업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 417, this.div_searchR,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("div_searchR");
            		p.set_visible("true");
            		p.set_scrollbars("autovert");

            	}
            );
            this.div_searchR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 513, 208, this.div_selectR,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("div_selectR");
            		p.set_visible("false");
            		p.set_scrollbars("autovert");

            	}
            );
            this.div_selectR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 980, 583, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("상품 분류 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1995_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1995_P01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(9); //팝업창 close시 전달할 값을 위한 배열 선언
        var NA_WRS_LCLC = "";
        var NA_WRS_MCLC = "";
        var NA_WRS_SCLC = "";
        var NA_WRS_DTCF_C = "";

        this.form_onload = function(obj,e)
        {

        	this.init();
        }

        
        this.init = function(){
        		this.div_selectR.set_visible(true);
        		this.div_searchR.set_visible(false);
        		// this.div_search.searchText.set_enable(false);
        		//this.div_search.btn_search.set_enable(false);
        		this.fn_getListWRS("L", "", "", "");
        		
        		this.initSearchForm();
        		
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /*
         *  저장버튼
         *
         */
         
         
        this.btn_ok_onclick = function(obj,e)
        {

            var objRdo = this.div_search.searchMode;

        	if(objRdo.value == 'search') {

        		this.fn_save_search(); // 관심업체콤보
        		
        	}else if(objRdo.value == 'select') {

        		this.fn_save_select();
        	}

        }

        
        this.fn_save_select = function(){
        	
        	var sqlType = '';
        	var saveCnt = this.ds_clsWrsList.getRowCount();
        	var selectCnt = this.checkIndexCnt(this.div_selectR.grd_select);	
        		
        	if(selectCnt == 0){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	}

        	var confirmMsg = ' SKU를 ' + selectCnt + '개 선택하셨습니다. \n 관심 SKU 리스트에 등록하시겠습니까? \n \n SKU 등록 시 과금은 부과되지 않습니다. \n 등록된 SKU의 상세정보 엑셀 다운로드 시 과금이 부과됩니다. \n 자세한 사항은 이용안내를 참고 바랍니다. ';
        	var ds = 'ds_clsWrsList=ds_clsWrsList'; 

        	//	trace(ds);
        	if(!this.confirm(confirmMsg)){
        		return;
        	}

        	//트랜젝션 아이디
        	var trId = 'insertInteClsWrsList';

        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/market/insertInteClsWrsList",
        						ds, 
        						"", 
        						"", 
        						"fn_callback",
        						'S'
        						);
        						
        }

        
        var isOthersWrs = false;

        this.fn_save_search = function(){

        	var msgOthersWrs = '';
        	var sqlType = 'INS';
        	var ds = 'ds_trplWrsList=ds_trplWrsList'; 
        	var saveCnt = this.ds_trplWrsList.getRowCount();
        	var selectCnt = this.checkIndexCnt(this.div_searchR.grd_search);	

        	if(selectCnt == 0){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	}

        	var confirmMsg = ' SKU를 ' + selectCnt + '개 선택하셨습니다. \n 관심 SKU 리스트에 등록하시겠습니까? \n \n SKU 등록 시 과금은 부과되지 않습니다. \n 등록된 SKU의 상세정보 엑셀 다운로드 시 과금이 부과됩니다. \n 자세한 사항은 이용안내를 참고 바랍니다. ';
        	
        	if(!this.confirm(confirmMsg)){
        		return;
        	}

        	//파라미터
        	var analysis = '2';
        	
        	//트랜젝션 아이디
        	var trId = sqlType;

        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/market/saveInteTrplWrsList",
        						ds, 
        						"", 
        						"analysis="+analysis+" sqlType="+sqlType, 
        						"fn_callback",
        						'S'
        						);
        }

        /*
         * 조회조건 초기화
         */
         
         this.initSearchForm = function(){
            var obj = this.div_search.searchMode;
        	if(obj.value == 'search') {
        		this.div_selectR.set_visible(false);
        		this.div_searchR.set_visible(true);
        		this.div_search.searchText.set_enable(true);
        		this.div_search.btn_search.set_enable(true);
        		
        		this.fn_retrieveInteTrplList(); // 관심업체콤보
        	}
        	if(obj.value == 'select') {
        		this.div_selectR.set_visible(true);
        		this.div_searchR.set_visible(false);
        		this.div_search.searchText.set_enable(false);
        		this.div_search.cbo_nacode.set_index(0);
        		//this.div_search.cbo_nacode.destroy();
        		//this.div_search.btn_search.set_enable(false);
        		this.fn_getListWRS("L", "", "", "");
        	}
         
         }

        /*
         * 라디오 버튼
         */
        this.searchType_onitemchanged = function(obj,e)
        {
             // 라디오버튼 클릭시 조회조건 초기화
             this.initSearchForm();
        }

        
        this.div_selectR_grd_selectL_oncellclick = function(obj,e)
        {
        	
        	NA_WRS_LCLC = this.ds_selectL.getColumn(e.row,"NA_WRS_LCLC");
        	//alert(NA_WRS_LCLC);
        	this.ds_selectM.clearData();
        	this.ds_selectS.clearData();
        	this.ds_selectD.clearData();
        	this.fn_getListWRS("M", NA_WRS_LCLC, "", "");
        }

        this.div_selectR_grd_selectM_oncellclick = function(obj,e)
        {
        	NA_WRS_MCLC = this.ds_selectM.getColumn(e.row,"NA_WRS_MCLC");
        	//alert(NA_WRS_MCLC);
        	this.ds_selectS.clearData();
        	this.ds_selectD.clearData();
        	this.fn_getListWRS("S", NA_WRS_LCLC, NA_WRS_MCLC, "");
        }

        this.div_selectR_grd_selectS_oncellclick = function(obj,e)
        {
        	NA_WRS_SCLC = this.ds_selectS.getColumn(e.row,"NA_WRS_SCLC");
        	//alert(NA_WRS_SCLC);
        	this.ds_selectD.clearData();
        	this.fn_getListWRS("D", NA_WRS_LCLC, NA_WRS_MCLC, NA_WRS_SCLC);
        }

        // 분류 정보 가져오기
        this.fn_getListWRS = function(level,NA_WRS_LCLC,NA_WRS_MCLC,NA_WRS_SCLC){
        	var searchMode = 'select';

        	var param = "searchMode="+searchMode+
        				" level="+level+
        				" NA_WRS_LCLC="+NA_WRS_LCLC+
        				" NA_WRS_MCLC="+NA_WRS_MCLC+
        				" NA_WRS_SCLC="+NA_WRS_SCLC;
        				
        	trace("##MASTER##PARAM##->"+param);	
        			
        	var sSvcID        = "selectWRSPopUp_selectL";//통신아이디
        	if(level == "M") {
        		sSvcID  = "selectWRSPopUp_selectM";
        	} else if (level =="S") {
        		sSvcID  = "selectWRSPopUp_selectS";
        	} else if (level == "D") {
        		sSvcID  = "selectWRSPopUp_selectD";
        	}
        	var sURL          = "svc::rest/popup/selectWRSPopUp";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_selectL=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	if(level == "M") {
        		sOutDatasets  = "ds_selectM=DATASET";
        	} else if (level =="S") {
        		sOutDatasets  = "ds_selectS=DATASET";
        	} else if (level == "D") {
        		sOutDatasets  = "ds_selectD=DATASET";
        	}
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){
        	

        	return true;
        }

        
        this.div_searchR_grd_searchR_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }

        this.div_selectR_grd_selectD_oncellclick = function(obj,e)
        {
        	this.fn_retrieveClsWrsList();
        }

        

        
        /*
          관심업체 상품조회
        */
        this.fn_retrieveClsWrsList = function() 
        {
        /*
        	NA_WRS_LCLC = this.ds_selectL.getColumn(e.row,"NA_WRS_LCLC");
        	NA_WRS_MCLC = this.ds_selectM.getColumn(e.row,"NA_WRS_MCLC");
        	NA_WRS_SCLC = this.ds_selectS.getColumn(e.row,"NA_WRS_SCLC");
        	NA_WRS_DTCF_C = this.ds_selectM.getColumn(e.row,"NA_WRS_DTCF_C");
        */

        	NA_WRS_LCLC = this.ds_selectL.getColumn(this.ds_selectL.rowposition,"NA_WRS_LCLC");
        	NA_WRS_MCLC = this.ds_selectM.getColumn(this.ds_selectM.rowposition,"NA_WRS_MCLC");
        	NA_WRS_SCLC = this.ds_selectS.getColumn(this.ds_selectS.rowposition,"NA_WRS_SCLC");
        	NA_WRS_DTCF_C = this.ds_selectD.getColumn(this.ds_selectD.rowposition,"NA_WRS_DTCF_C");
        	
        	
        	

        	var bsnDsc = "sales_price";
        	// var naTrplC =  application.gv_glnCode;
        	// var inteTrplC =  this.div_search.cbo_nacode.value;
        	
        	var params =   "NA_WRS_LCLC=" + NA_WRS_LCLC
        				 + " NA_WRS_MCLC=" + NA_WRS_MCLC
        				 + " NA_WRS_MCLC=" + NA_WRS_MCLC
        				 + " NA_WRS_SCLC=" + NA_WRS_SCLC
        				 + " NA_WRS_DTCF_C=" + NA_WRS_DTCF_C
        				 ;

        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveClsWrsList";
        	var sURL          = "svc::rest/analysis/market/retrieveClsWrsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_clsWrsList=ds_clsWrsList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var sTranType     = "S"; // 
        	
        	// application.set_usewaitcursor(false);
        	// alert('fn_retrieveClsWrsList');
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        //관심업체 콤보
        this.fn_retrieveInteTrplList = function() 
        {
        //var glnCode =this.div_search.cbo_nacode.value;
        	// alert('fn_retrieveInteTrplList');
        	var glnCode = application.gv_glnCode;
        	var params =  "naTrplC=" + glnCode 
           	 ;

        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveInteTrplList";
        	var sURL          = "svc::rest/analysis/market/retrieveInteTrplList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_saveTrplList=ds_saveList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var sTranType     = "S"; // 
        	
        	// application.set_usewaitcursor(false);
        	// alert('fn_retrieveUsrConsent');
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        } // fn_retrieveInteTrplList

        

        

        this.btn_search_onclick = function(obj,e)
        {
            var objRdo = this.div_search.searchMode;

        	if(objRdo.value == 'search') {

        		this.fn_retrieveTrplWrsList(); // 상품조회
        	}else if(objRdo.value == 'select') {

        		 this.fn_retrieveClsWrsList();  // 카테고리별 선택
        	}

        }

        

        

        /*
          관심업체 상품조회
        */
        this.fn_retrieveTrplWrsList = function() 
        {
        	// alert('fn_retrieveUsrConsentList');
        	var searchMode = this.gfn_nullToEmpty(this.div_search.searchMode.value);
        	var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value);
        	
        	/*
        	if(searchMode == 'search') {

        	} else {
        		alert("검색어 검색의 경우에만 조회 가능합니다.");
        	}
        	*/
        	
        	var bsnDsc = "sales_price";
        	var naTrplC =  application.gv_glnCode;
        	var inteTrplC =  this.div_search.cbo_nacode.value;
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + naTrplC
        				 + " inteTrplC=" + inteTrplC
        				 + " searchWrsNm=" + searchText;

        				 ;
        				
        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveTrplWrsList";
        	var sURL          = "svc::rest/analysis/market/retrieveTrplWrsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_trplWrsList=ds_trplWrsList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var sTranType     = "S"; // 
        	
        	// application.set_usewaitcursor(false);
        	// alert('fn_retrieveUsrConsent');
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.search = function(){

            var objRdo = this.div_search.searchMode;

        	if(objRdo.value == 'search') {

        		this.fn_retrieveTrplWrsList(); // 상품조회
        		
        	}else if(objRdo.value == 'select') {

        		 this.fn_retrieveClsWrsList();  // 카테고리별 선택
        	}
        	

        }

        
        /* Call Back */
        this.fn_callback = function(svcID,ErrorCode,ErrorMsg)
        {	

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "selectWRSPopUp"){										
        			if(this.ds_searchR.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}			
        		}else if(svcID == "retrieveClsWrsList") {
        		
        			if(this.ds_clsWrsList.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{

        			}
        			
        		}else if(svcID == "insertInteClsWrsList") {

        			if(this.ds_clsWrsList.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{
        			    // 등록시 재조회
        			    this.search();
        			    // 상품등록시 오프너 조회
        			    this.opener.search('div');
        			}
        			
        		}else if(svcID == 'retrieveInteTrplList'){		//조회	
        	
        	        // 전체선택 추가
        		    this.ds_saveTrplList.insertRow(0);
        		    this.ds_saveTrplList.setColumn(0,'CODE','');
        		    this.ds_saveTrplList.setColumn(0,'NAME_YN','-선택-');

        		    this.div_search.cbo_nacode.setInnerDataset(this.ds_saveTrplList);
        		    this.div_search.cbo_nacode.set_index(0);

        		    return;
        		    
        	    }else if(svcID == 'INS'){

        		    this.alert(this.gfn_getTextMessage('msg.comp.insert'));
        		    //this.search();
        		    this.fn_retrieveTrplWrsList();
        		    // 상품등록시 오프너 조회
        			 this.opener.search('div');
        			    
        		    return;		
        	    } // if
        	
        		
        	} // if

        
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_selectR.grd_selectL.addEventHandler("oncellclick", this.div_selectR_grd_selectL_oncellclick, this);
            this.div_selectR.grd_selectM.addEventHandler("oncellclick", this.div_selectR_grd_selectM_oncellclick, this);
            this.div_selectR.grd_selectS.addEventHandler("oncellclick", this.div_selectR_grd_selectS_oncellclick, this);
            this.div_selectR.grd_selectD.addEventHandler("oncellclick", this.div_selectR_grd_selectD_oncellclick, this);
            this.div_search.searchMode.addEventHandler("onitemchanged", this.searchType_onitemchanged, this);
            this.div_search.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.sta_searchType.addEventHandler("onclick", this.div_search_sta_searchType_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1995_P01.xfdl", true);

       
    };
}
)();
