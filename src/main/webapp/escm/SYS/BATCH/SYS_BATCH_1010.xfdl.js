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
                this.set_name("SYS_BATCH_RESULT");
                this.set_titletext("배치처리현황");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_batch_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"32\"/><Column id=\"bizDiv\" type=\"STRING\" size=\"256\"/><Column id=\"batchId\" type=\"STRING\" size=\"256\"/><Column id=\"batchDesc\" type=\"STRING\" size=\"256\"/><Column id=\"procLmitTime\" type=\"STRING\" size=\"256\"/><Column id=\"minProcCnt\" type=\"STRING\" size=\"256\"/><Column id=\"procTime\" type=\"STRING\" size=\"256\"/><Column id=\"cpCnt\" type=\"STRING\" size=\"256\"/><Column id=\"erCnt\" type=\"STRING\" size=\"256\"/><Column id=\"procTimeCheck\" type=\"STRING\" size=\"256\"/><Column id=\"procCntCheck\" type=\"STRING\" size=\"256\"/><Column id=\"fromDate\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"procTimeCheck\">INVALID</Col><Col id=\"procCntCheck\">VALID</Col></Row><Row><Col id=\"procTimeCheck\">VALID</Col><Col id=\"procCntCheck\">INVALID</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "430", "1", "30", "43", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_search", "absolute", "96", "8", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static05", "absolute", "83.31%", "29", null, "69", "12.95%", null, this);
            obj.set_taborder("14");
            obj.set_text("69");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "42", null, null, "0", "29", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_batch_list");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"65\"/><Column size=\"120\"/><Column size=\"155\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"업무구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"배치명\"/><Cell col=\"3\" rowspan=\"2\" text=\"배치설명\"/><Cell col=\"4\" colspan=\"2\" text=\"기준값\"/><Cell col=\"6\" colspan=\"3\" text=\"처리현황\"/><Cell col=\"9\" colspan=\"2\" text=\"체크결과\"/><Cell row=\"1\" col=\"4\" text=\"처리한계시간\"/><Cell row=\"1\" col=\"5\" text=\"최소처리건수\"/><Cell row=\"1\" col=\"6\" text=\"처리시간\"/><Cell row=\"1\" col=\"7\" text=\"완료건수\"/><Cell row=\"1\" col=\"8\" text=\"오류건수\"/><Cell row=\"1\" col=\"9\" text=\"시간체크\"/><Cell row=\"1\" col=\"10\" text=\"건수체크\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:seq\"/><Cell col=\"1\" text=\"bind:bizDiv\"/><Cell col=\"2\" text=\"bind:batchId\"/><Cell col=\"3\" text=\"bind:batchDesc\"/><Cell col=\"4\" text=\"bind:procLmitTime\"/><Cell col=\"5\" text=\"bind:minProcCnt\"/><Cell col=\"6\" text=\"bind:procTime\"/><Cell col=\"7\" text=\"bind:cpCnt\"/><Cell col=\"8\" text=\"bind:erCnt\"/><Cell col=\"9\" style=\"color:EXPR((procTimeCheck == 'INVALID') ? 'red' : 'blue'); color2:EXPR((procTimeCheck == 'INVALID') ? 'red' : 'blue');\" text=\"bind:procTimeCheck\"/><Cell col=\"10\" style=\"color:EXPR((procCntCheck == 'INVALID') ? 'red' : 'blue'); color2:EXPR((procCntCheck == 'INVALID') ? 'red' : 'blue');\" text=\"bind:procCntCheck\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "731", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("배치처리현황");

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
        this.addIncludeScript("SYS_BATCH_1010.xfdl", "lib::comLib.xjs");
        this.registerScript("SYS_BATCH_1010.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        /* 페이지 로딩 후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	/* 초기값세팅 */
        	this.div_search.cal_search.set_value(this.gfn_today("yyyyMMdd"));

        	/* 조회 호출 */
        	this.btn_search.click();  
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         
        /* 조회버튼 이벤트 */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_retrieveComnCList(); // 처음조회시 1페이지를 조회한다.
        }

        /* 업체조회 이벤트 */
        this.edt_NA_TRPL_C_onchanged = function()
        {
        	this.div_search.edt_CLNTNM.set_value("");
        }
        this.edt_NA_TRPL_C_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btn_search_onclick();
        	}
        }
        this.btn_comname_onclick = function(obj,e)
        {
        	var param = {
        		autoType: false
        	};
        	var oArg = { paramMode: "U", dsArg: this.Dataset00, autoPop: param };
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_SPYPL_TRPL","POPUP::POPUP_SRC_SPYPL_TRPL.xfdl", oArg, sOption, sPopupCallBack);
        }
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "POPUP_SRC_SPYPL_TRPL" && strVal) {
        		var aryVal = strVal.split(",");
        		this.div_search.edt_NA_TRPL_C.set_value(aryVal[0]);
        		this.div_search.edt_CLNTNM.set_value(aryVal[1]);
        	}
        }

        /* 계좌번호 이벤트 */
        this.edt_ACNO_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btn_search_onclick();
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 조회-서비스 Call */
        this.fn_retrieveComnCList = function()
        {
        	var sParams = "fromDate=" + this.gfn_nullToEmpty(this.div_search.cal_search.value);
        	
        	var sSvcID        = "retrieve";
        	var sURL          = "svc::/rest/system/batchPresent";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_batch_list=ds_batch_list";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	this.ds_vr_ac.addColumn("NUMBER", "string");
        	
        	for (var i = 0; i < this.ds_vr_ac.rowcount; i++) {
        		this.ds_vr_ac.setColumn(i, "NUMBER", (current_page - 1) * page_size + i + 1);
        	}
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieve") {
        		if (this.ds_vr_ac.rowcount > 0) {
        			this.div_list.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        		} else {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			this.div_list.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        		}
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_cal_dvy_pla_dt_oneditclick = function(obj,e)
        {
        	alert()
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.Static02.addEventHandler("onclick", this.div_search_Static02_onclick, this);
            this.div_search.cal_search.addEventHandler("onchanged", this.cal_dvy_pla_dt_onchanged, this);
            this.div_search.cal_search.addEventHandler("oneditclick", this.cal_search_oneditclick, this);
            this.div_search.cal_search.addEventHandler("ontextchanged", this.cal_dvy_pla_dt_ontextchanged, this);
            this.Static05.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_list.grd_comncList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);

        };

        this.loadIncludeScript("SYS_BATCH_1010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
