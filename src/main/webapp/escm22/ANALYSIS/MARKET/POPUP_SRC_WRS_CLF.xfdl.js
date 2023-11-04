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
                this._setFormPosition(0,0,547,400);
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


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "46", "58", "21", "18", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("searchText", "absolute", "166", "9", "257", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("searchMode", "absolute", "5", "9", "161", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var searchMode_innerdataset = new Dataset("searchMode_innerdataset", this.div_search.searchMode);
            searchMode_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">search</Col><Col id=\"datacolumn\">검색어</Col></Row><Row><Col id=\"codecolumn\">select</Col><Col id=\"datacolumn\">분류별</Col></Row></Rows>");
            obj.set_innerdataset(searchMode_innerdataset);
            obj.set_direction("vertical");
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("search");

            obj = new Button("btn_ok", "absolute", "218", "354", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "274", "354", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "529", "76", "17", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "455", "383", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "455", "344", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "428", "67", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "307", "31", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "119", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "509", "0", "37", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상품 분류 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_searchR", "absolute", "17", "135", null, "208", "17", null, this);
            obj.set_taborder("20");
            obj.set_text("div_searchR");
            obj.set_visible("true");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_searchR", "absolute", "0", "0", "100%", "100%", null, null, this.div_searchR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_searchR");
            obj.set_autofittype("none");
            obj.set_scrollbars("autovert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"127\"/><Column size=\"127\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"중분류\"/><Cell col=\"2\" text=\"소분류\"/><Cell col=\"3\" text=\"세분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_LCLFNM\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:WRS_MCLFNM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRS_SCLFNM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:WRS_DTCFNM\"/></Band></Format></Formats>");
            this.div_searchR.addChild(obj.name, obj);

            obj = new Div("div_selectR", "absolute", "17", "135", null, "208", "17", null, this);
            obj.set_taborder("20");
            obj.set_text("div_selectR");
            obj.set_visible("false");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_selectL", "absolute", "0", "0", "24.85%", "100%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectL");
            obj.set_autofittype("col");
            obj.style.set_align("center middle");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_LCLFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);
            obj = new Grid("grd_selectM", "absolute", "25%", "0", "25%", "100%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"중분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_MCLFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);
            obj = new Grid("grd_selectS", "absolute", "50%", "0", "25%", "100%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectS");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"소분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_SCLFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);
            obj = new Grid("grd_selectD", "absolute", "75%", "0", "25%", "100%", null, null, this.div_selectR);
            obj.set_taborder("5");
            obj.set_binddataset("ds_selectD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"세분류\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WRS_DTCFNM\"/></Band></Format></Formats>");
            this.div_selectR.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 208, this.div_searchR,
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
            obj = new Layout("default", "", 547, 400, this,
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
        this.addIncludeScript("POPUP_SRC_WRS_CLF.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_SRC_WRS_CLF.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(9); //팝업창 close시 전달할 값을 위한 배열 선언
        var NA_WRS_LCLC = "";
        var NA_WRS_MCLC = "";
        var NA_WRS_SCLC = "";

        this.form_onload = function(obj,e)
        {
        	//trace("paramMode : "+this.getOwnerFrame().paramMode);
        	//trace("dsArg : "+this.parent.dsArg.rowcount);
        	this.div_searchR.grd_searchR.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	var searchParam =
        	{
        				form: this,									
        				param:[{									
        						edit: this.div_search.searchText,
        						fnc: 'btn_search_onclick'
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {

        	var searchMode = this.gfn_nullToEmpty(this.div_search.searchMode.value);
        	if(searchMode == 'search') {
        		this.objRtnArr[0] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"NA_WRS_LCLC");
        		this.objRtnArr[1] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"NA_WRS_MCLC");
        		this.objRtnArr[2] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"NA_WRS_SCLC");
        		this.objRtnArr[3] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"NA_WRS_DTCF_C");
        		this.objRtnArr[4] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"WRS_LCLFNM");
        		this.objRtnArr[5] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"WRS_MCLFNM");
        		this.objRtnArr[6] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"WRS_SCLFNM");
        		this.objRtnArr[7] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"WRS_DTCFNM");
        		this.objRtnArr[8] = this.ds_searchR.getColumn(this.ds_searchR.rowposition,"WRS_ID_DSC");
        		this.close(this.objRtnArr.toString());
        	} else {
        	
        		if(typeof(this.div_selectR.grd_selectD.rowposition) == "undefined") {
        			this.objRtnArr[0] = this.ds_selectL.getColumn(this.ds_selectL.rowposition,"NA_WRS_LCLC");
        			this.objRtnArr[1] = this.ds_selectM.getColumn(this.ds_selectM.rowposition,"NA_WRS_MCLC");
        			this.objRtnArr[2] = this.ds_selectS.getColumn(this.ds_selectS.rowposition,"NA_WRS_SCLC");
        			this.objRtnArr[3] = this.ds_selectD.getColumn(this.ds_selectD.rowposition,"NA_WRS_DTCF_C");
        			this.objRtnArr[4] = this.ds_selectL.getColumn(this.ds_selectL.rowposition,"WRS_LCLFNM");
        			this.objRtnArr[5] = this.ds_selectM.getColumn(this.ds_selectM.rowposition,"WRS_MCLFNM");
        			this.objRtnArr[6] = this.ds_selectS.getColumn(this.ds_selectS.rowposition,"WRS_SCLFNM");
        			this.objRtnArr[7] = this.ds_selectD.getColumn(this.ds_selectD.rowposition,"WRS_DTCFNM");
        			this.objRtnArr[8] = this.ds_selectD.getColumn(this.ds_selectD.rowposition,"WRS_ID_DSC");
        			this.close(this.objRtnArr.toString());
        		} else {
        			alert("상품세분류까지 선택하셔야 합니다.");
        		}
        	}
        }

        this.searchType_onitemchanged = function(obj,e)
        {
        	if(obj.value == 'search') {
        		this.div_selectR.set_visible(false);
        		this.div_searchR.set_visible(true);
        		this.div_search.searchText.set_enable(true);
        		this.div_search.btn_search.set_enable(true);
        	}
        	if(obj.value == 'select') {
        		this.div_selectR.set_visible(true);
        		this.div_searchR.set_visible(false);
        		this.div_search.searchText.set_enable(false);
        		//this.div_search.btn_search.set_enable(false);
        		this.fn_getListWRS("L", "", "", "");
        	}
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
        	var searchMode = this.gfn_nullToEmpty(this.div_search.searchMode.value);

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
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var searchMode = this.gfn_nullToEmpty(this.div_search.searchMode.value);
        	var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value);
        	if(searchMode == 'search') {
        		if(this.fn_validationCheck()){
        		
        			this.ds_searchR.clearData();
        			var param = "searchMode='"+searchMode+"' searchText='"+searchText+"'";
        						
        			trace("##MASTER##PARAM##->"+param);	
        			
        			var sSvcID        = "selectWRSPopUp";//통신아이디
        			var sURL          = "svc::rest/popup/selectWRSPopUp";// 호출할 서버 페이지 주소
        			var sInDatasets   = "";//보내는데이터셋
        			var sOutDatasets  = "ds_searchR=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        			var sArgument     = param;// 파라미터
        			var sCallbackFunc = "fn_callBack";//콜백
        			var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        			//API 호출
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);					
        		}
        	} else {
        		alert("검색어 검색의 경우에만 조회 가능합니다.");
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if (this.gfn_length(this.div_search.searchText.value) < 2) {
        		this.alert('검색어는 2자이상이어야 합니다.');
        		return false;
        	}
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
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
        		}else if(svcID == "selectWRSPopUp_selectL") {
        			if(this.ds_selectL.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}else if(svcID == "selectWRSPopUp_selectM") {
        			if(this.ds_selectM.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}else if(svcID == "selectWRSPopUp_selectS") {
        			if(this.ds_selectS.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}else if(svcID == "selectWRSPopUp_selectD") {
        			if(this.ds_selectD.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}
        	}
        }

        

        
        this.div_searchR_grd_searchR_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.searchMode.addEventHandler("onitemchanged", this.searchType_onitemchanged, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_searchR.grd_searchR.addEventHandler("oncellclick", this.div_searchR_grd_searchR_oncellclick, this);
            this.div_selectR.grd_selectL.addEventHandler("oncellclick", this.div_selectR_grd_selectL_oncellclick, this);
            this.div_selectR.grd_selectM.addEventHandler("oncellclick", this.div_selectR_grd_selectM_oncellclick, this);
            this.div_selectR.grd_selectS.addEventHandler("oncellclick", this.div_selectR_grd_selectS_oncellclick, this);
            this.div_selectR.grd_selectD.addEventHandler("oncellclick", this.div_selectR_grd_selectD_oncellclick, this);

        };

        this.loadIncludeScript("POPUP_SRC_WRS_CLF.xfdl", true);

       
    };
}
)();
