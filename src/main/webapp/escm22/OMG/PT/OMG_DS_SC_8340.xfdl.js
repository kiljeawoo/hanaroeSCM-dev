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
                this.set_name("OMG_DS_SC_8340");
                this.set_titletext("혁신점포 거래업체 목록");
                this._setFormPosition(0,0,800,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ctl_trpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"string\" size=\"1\"/><Column id=\"BSN_DSC\" type=\"string\" size=\"250\"/><Column id=\"UZ_DSC\" type=\"string\" size=\"250\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"250\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"250\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"250\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"250\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "41", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "261", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("34");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_search", "absolute", "118", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_search_innerdataset = new Dataset("cbo_search_innerdataset", this.div_search.cbo_search);
            cbo_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">code</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">name</Col><Col id=\"datacolumn\">거래처명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_search_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("code");
            obj.set_text("거래처코드");

            obj = new Div("div_list", "absolute", "0", "69", null, null, "15", "15", this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_ctl_trpl");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"126\"/><Column size=\"224\"/><Column size=\"90\"/><Column size=\"111\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:CLNTNM\" autosizecol=\"none\"/><Cell col=\"3\" text=\"bind:FSRG_DTM\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:RMK_CNTN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "731", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "45", "21", "78", null, this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "125", null, this);
            obj.set_taborder("12");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_5160");
            		p.set_titletext("혁신점포 거래업체 목록");

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
        this.addIncludeScript("OMG_DS_SC_8340.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8340.xfdl", function() {
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
        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        	/*초기값세팅*/

            /*조회 호출*/
           this.btn_search.click();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_ctl_trpl.clearData();
        	var sParams = "SEARCH_TYPE="+this.gfn_nullToEmpty(this.div_search.cbo_search.value)
        				+ " SEARCH_TEXT="+this.gfn_nullToEmpty(this.div_search.edt_search.value)
        				;

        	var sSvcID        = "ctlList";
        	var sURL          ="svc::rest/pt/survey/retrieveCtlTrplList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_ctl_trpl=ds_ctl_trpl";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*등록버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_ctl_trpl};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.PT::OMG_DS_SC_8340_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*삭제버튼 이벤트*/
        this.btn_delete_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수

        	// 체크된 행들을 순차적으로 ds_param에 적재한다.
        	for (var i = 0 ; i < this.ds_ctl_trpl.rowcount; i++) {
        		if (this.ds_ctl_trpl.getColumn(i, "ISCHECKED") == "1") {
        		  checkCnt = checkCnt +1;
        		}
        	}

        	if (checkCnt > 0) {
        		var cfm = this.confirm("삭제하시겠습니까?");
        		if (cfm) {
        			var sParams       = "";
        			var sSvcID        = "delete";
        			var sURL          = "svc::rest/pt/survey/deleteCtlTrpl";
        			var sInDatasets   = "ds_ctl_trpl=ds_ctl_trpl";
        			var sOutDatasets  = "";
        			var sArgument     = "";
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회

        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	} else {
        		alert("삭제할 데이터를 선택해 주시기 바랍니다.");
        		return;
        	 }
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {
        	this.btn_search.click();
        }

         /*상단 전체 선택/해제 체크박스 및 컬럼 정렬 이벤트*/
        this.Div02_Grid01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	} else {
        		this.gfn_gridSort(obj, e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.ds_ctl_trpl.addColumn("ISCHECKED", "string");

        	for (var i = 0 ; i < this.ds_ctl_trpl.rowcount; i++) {
        		this.ds_ctl_trpl.setColumn(i,"ISCHECKED",0);
        	}

        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "blockList") {
        			this.list_empty_check(this.ds_ctl_trpl.rowcount == 0);
        	 	} else if (svcID=="delete") {
        	 		if (ErrorCode == 1) {
        	 			this.gfn_getMessage("alert", "result.message.save.success");
        	 			this.btn_search.click();
        	 		}
        	 	} else {
        			this.list_empty_check(this.ds_ctl_trpl.rowcount == 0);
        	 	}
        	 }
        }

        this.list_empty_check = function(isEmpty) {
        	this.btn_delete.set_enable(!isEmpty);
        	if (isEmpty) {
        		this.div_list.grd_comncList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_list_grd_comncList_oncellclick = function(obj,e)
        {
        	var ISCHECKED = this.ds_ctl_trpl.getColumn(e.row, "ISCHECKED");
        	if (ISCHECKED == "0") {
        		this.ds_ctl_trpl.setColumn(e.row, "ISCHECKED", "1");
        	} else {
        		this.ds_ctl_trpl.setColumn(e.row, "ISCHECKED", "0");
        	}
        }

        this.fn_displayUzDsc = function(dsc)
        {
        	// expr:comp.parent.parent.fn_displayUzDsc(UZ_DSC)
        	if (dsc == "001") {
        		return "혁신점포 공급업체 모니터링";
        	}
        	return "";
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_search.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_list.grd_comncList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.grd_comncList.addEventHandler("oncellclick", this.div_list_grd_comncList_oncellclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8340.xfdl");
        this.loadPreloadList();
       
    };
}
)();
