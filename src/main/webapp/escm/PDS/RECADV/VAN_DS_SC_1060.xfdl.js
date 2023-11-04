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
                this.set_name("frm_VAN_DS_SC_1060");
                this.set_titletext("수수료 관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"FEERT\" type=\"string\" size=\"32\"/><Column id=\"BRO_C\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "36", "182", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("수수료 등록여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_searchType", "absolute", "134", "36", "228", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_searchType_innerdataset = new Dataset("rdo_searchType_innerdataset", this.div_search.rdo_searchType);
            rdo_searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미등록</Col></Row></Rows>");
            obj.set_innerdataset(rdo_searchType_innerdataset);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Radio("rdo_saveType", "absolute", "547", "36", "152", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_saveType_innerdataset = new Dataset("rdo_saveType_innerdataset", this.div_search.rdo_saveType);
            rdo_saveType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">단일</Col></Row><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_saveType_innerdataset);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "417", "36", "149", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("수수료 적용대상");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trpl", "absolute", "134", "10", "273", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("@ds_trpl");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.set_enable("true");
            obj.set_visible("true");
            obj = new Static("Static02", "absolute", "15", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("지사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "539", null, this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("64");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "40", null, null, "0", "0", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"수수료율(%)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FEERT\" editlimit=\"5\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("104");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("106");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("110");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "159", null, this);
            obj.set_taborder("112");
            obj.set_text("Div00");
            obj.set_visible("false");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "684", "25", "44", "14", null, null, this);
            obj.set_taborder("113");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("114");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("수수료 관리");

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
        this.addIncludeScript("VAN_DS_SC_1060.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1060.xfdl", function() {
        /*##################################################################################
         화면명	: 수수료 관리
         화면ID  	: VAN_DS_SC_1060
         작성자 	: hroh
        ####################################################################################*/
        //include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        /* Form Init*/
        this.fn_afterFormOnload = function() //onload
        {	
        	//지사 리스트
        	this.fn_trplList();
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        this.fn_search = function(){
        	if(this.fn_validationCheck()){
        		this.ds_dataM.clearData();
        				
        		//거래처코드
        		var TRPL = this.gfn_nullToEmpty(this.div_search.cbo_trpl.value); //지사코드
        		var searchType = this.gfn_nullToEmpty(this.div_search.rdo_searchType.value); //작성여부
        		
        		var params ="TRPL=" + TRPL
        					+ " SEARCH_TYPE=" + searchType;
        					
        		trace(">>>>>>> params : " +  params);
        		
        		var sSvcID        = "retrieveCommissionWRSList";//통신아이디
        		var sURL          = "svc::/rest/pds/recadv/retrieveCommissionWRSList";// 호출할 서버 페이지 주소		
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "retrieveCommissionWRSList"){						
        		
        		
        		for(var i=0; i < this.ds_dataM.rowcount ; i++){
        		
        			if(this.ds_dataM.getColumn(i,"FEERT") == null){
        				this.ds_dataM.setColumn(i,"FEERT","0");				
        			}				
        		}
        		
        	}

        		if(svcID == "retrieveCommissionTrplList") {			
        			this.div_search.cbo_trpl.set_index(0);			
        		}
        		
        		if(svcID == "saveFeeAmnList") {		
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.fn_search();	
        		}
        		
        		
        	}
        }
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_excel_onclick = function(obj,e)
        {	
        	if(!this.fn_validationCheck()) return;
        	
        	var searchType = this.gfn_nullToEmpty(this.div_search.rdo_searchType.value); //조회구분
        	var TRPL = this.gfn_nullToEmpty(this.div_search.cbo_trpl.value); //지사코드
        	
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";		
        	
        	var params =  "SEARCH_TYPE=" + searchType 				
        				+ "&TRPL=" + TRPL
        				+ "&fileName=" + fileName;					
        	
        	//trace(">>>>>>> params : " +  params);
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/recadv/retrieveCommissionWRSList?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/recadv/retrieveCommissionWRSList?"+params, this);
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	if(e.cell != 3){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }

        /* 저장 validation */
        this.fn_save_validation = function()
        {
        	if(this.ds_dataM.rowcount == 0){
        		//저장할 상품이 없습니다. 조회 해주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_1060.view.save.validation.nodata");
        		return false;
        	}
        	
        	var reg = /^\d+(?:[.]?[\d]?[\d])?$/;

        
        	for(var i=0; i < this.ds_dataM.rowcount ; i++){
        		
        		if(this.ds_dataM.getColumn(i,"FEERT") != null){
        			if(this.ds_dataM.getColumn(i,"FEERT").length > 0 && this.ds_dataM.getColumn(i,"FEERT") > 99){				
        				//100 미만의 숫자만 입력가능합니다.
        				this.gfn_getMessage("alert", "msg.van_ds_sc_1060.view.save.validation.100");
        				this.ds_dataM.setColumn(i,"FEERT","");				
        				return false;
        			}
                }
        	}
        	return true;
        }

        /* 저장 */
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_save_validation()){
        	
        	var SAVE_TYPE = this.gfn_nullToEmpty(this.div_search.rdo_saveType.value); //저장구분
        	var TRPL = "";
        	
        	// 지사일경우에만 값 셋팅
        	if(SAVE_TYPE == '1'){		
        		TRPL = this.gfn_nullToEmpty(this.div_search.cbo_trpl.value); //지사코드
        	}
        	
        	var params ="SAVE_TYPE=" + SAVE_TYPE
        			+ " TRPL=" + TRPL;
        	
        	//trace(">>>>SAVE>>>>params>>>>"+params);	
        	
        	var dsParams = "ds_dataM=ds_dataM:U ds_trpl=ds_trpl:A";
        	
        	var sSvcID        = "saveFeeAmnList";//통신아이디
        	var sURL          = "svc::/rest/pds/recadv/saveFeeAmnList";// 호출할 서버 페이지 주소
        	var sInDatasets   = dsParams;//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        	
        }

        this.div_search_rdo_saveType_onitemchanged = function(obj,e)
        {
        	/*
        	if(this.div_search.rdo_saveType.value == 'all'){
        		this.div_search.cbo_trpl.set_visible(false);		
        	}	
        	if(this.div_search.rdo_saveType.value == 1){
        		
        		this.div_search.cbo_trpl.set_visible(true);		
        		//this.fn_trplList();
        	}
        	*/
        }

        /* 지사 리스트 가져오기*/
        this.fn_trplList = function(){
        	
        	var sSvcID        = "retrieveCommissionTrplList";//통신아이디
        	var sURL          = "svc::rest/pds/recadv/retrieveCommissionTrplList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_trpl=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_event_priceM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.rdo_searchType.addEventHandler("onitemchanged", this.div_search_rdo_searchType_onitemchanged, this);
            this.div_search.rdo_saveType.addEventHandler("onitemchanged", this.div_search_rdo_saveType_onitemchanged, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
