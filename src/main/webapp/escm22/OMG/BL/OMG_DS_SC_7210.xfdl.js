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
                this.set_name("OMG_DS_SC_6120");
                this.set_titletext("자동이체 계좌관리");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_auttr_ac", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"HOP_DRW_DD\" type=\"STRING\" size=\"256\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"256\"/><Column id=\"BNK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_ST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_GB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"HOP_DRW_DD\" type=\"STRING\" size=\"256\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"256\"/><Column id=\"BNK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_ST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_GB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
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
            obj = new Static("Static01", "absolute", "460", "36", null, "21", "23.79%", null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "563", "36", "60", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_search.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("7");
            obj.set_value("20");
            obj.set_text("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", "460", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("신청처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_PRC_ST", "absolute", "563", "10", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_PRC_ST_innerdataset = new Dataset("cbo_PRC_ST_innerdataset", this.div_search.cbo_PRC_ST);
            cbo_PRC_ST_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">미접수</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">처리중</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">전송</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">정상</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">오류</Col></Row></Rows>");
            obj.set_innerdataset(cbo_PRC_ST_innerdataset);
            obj.set_taborder("10");
            obj.set_value("A");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "94", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "247", "10", "159", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "409", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "430", "1", "30", "43", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_ACNO", "absolute", "94", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "65", "21", "78", null, this);
            obj.set_taborder("13");
            obj.set_text("등록신청");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

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
            obj.set_binddataset("ds_auttr_ac");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"190\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"115\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"희망출금일\"/><Cell col=\"4\" text=\"은행코드\"/><Cell col=\"5\" text=\"은행명\"/><Cell col=\"6\" text=\"계좌번호\"/><Cell col=\"7\" text=\"신청처리상태\"/><Cell col=\"8\" text=\"신청결과\"/><Cell col=\"9\" text=\"신청구분\"/><Cell col=\"10\" text=\"등록일\"/><Cell col=\"11\" text=\"신청일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:HOP_DRW_DD\"/><Cell col=\"4\" text=\"bind:BNK_C\"/><Cell col=\"5\" text=\"bind:BNK_NM\"/><Cell col=\"6\" text=\"bind:ACNO\"/><Cell col=\"7\" text=\"bind:PRC_ST_NM\"/><Cell col=\"8\" text=\"bind:ERROR_CD\"/><Cell col=\"9\" text=\"bind:REQ_GB_NM\"/><Cell col=\"10\" text=\"bind:RG_DT\"/><Cell col=\"11\" text=\"bind:REQ_DT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "731", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.55%", null, "338", "29", null, "0", this.div_list);
            obj.set_taborder("6");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
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
            		p.set_titletext("자동이체 계좌관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7210.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7210.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

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
        	this.div_search.cbo_PRC_ST.set_index(0);
        	this.div_search.cbo_pageNum.set_index(0);

        	/* 조회 호출 */
        	this.btn_search.click();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /* 조회버튼 이벤트 */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1); // 처음조회시 1페이지를 조회한다.
        }

        /* 수정버튼 이벤트 */
        this.btn_insert_onclick = function(obj,e)
        {
        	var checkCnt = 0; // 선택된 체크박스 개수
        	var position = 0; // 선택된 체크박스 위치
        	for (var i = 0 ; i < this.ds_auttr_ac.rowcount; i++) {
        		if (this.ds_auttr_ac.getColumn(i, "CHK") == "1") {
        			checkCnt = checkCnt +1;
        			position = i;
        		}
        	}
        	
        	if (checkCnt > 1) {
        		alert("하나만 선택해주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	} else if (checkCnt == 0) {
        		alert("등록해야할 데이터를 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	} else {
        		this.ds_param.clearData();
        		this.ds_param.insertRow(0);
        		this.ds_param.copyRow(0, this.ds_auttr_ac,position);
        		
        		if (this.ds_param.getColumn(0, "PRC_ST_NM") != "미접수") {
        			alert("이미 자동이체 계좌 등록신청을 하였습니다.");
        			return;
        		}
        		var sParams = "";
        		
        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/bl/insertAuttrAc"
        		var sInDatasets   = "ds_param=ds_param";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
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

        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_auttr_ac.clearData(); // Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = this.div_search.cbo_pageNum.value; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	var argumentObj = "";
        	
        	this.fn_retrieveComnCList();
        }

        /* 조회-서비스 Call */
        this.fn_retrieveComnCList = function()
        {
        	var sParams = "NA_TRPL_C=" + this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value)
        				+ " PRC_ST=" + this.gfn_nullToEmpty(this.div_search.cbo_PRC_ST.value)
        				+ " ACNO=" + this.gfn_nullToEmpty(this.div_search.edt_ACNO.value);
        	
        	var sSvcID        = "retrieve";
        	var sURL          = "svc::rest/bl/retrieveAuttrAcList";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_auttr_ac=ds_auttr_ac ds_pageVO=ds_pageVO";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 상단 체크박스 선택 시 전체선택 및 해제하는 이벤트 */
        this.Div02_Grid01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	this.ds_auttr_ac.addColumn("CHK", "string");
        	
        	for (var i = 0 ; i < this.ds_auttr_ac.rowcount; i++) {
        		this.ds_auttr_ac.setColumn(i, "CHK", 0);
        	}
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieve") {
        		if (this.ds_auttr_ac.rowcount > 0) {
        			this.div_list.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        		} else {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			this.div_list.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        		}
        	} else if (svcID == "insert") {
        		if (ErrorCode == 1) {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.btn_search.click();
        		}
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.cbo_pageNum.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.cbo_PRC_ST.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.edt_NA_TRPL_C.addEventHandler("onchanged", this.edt_NA_TRPL_C_onchanged, this);
            this.div_search.edt_NA_TRPL_C.addEventHandler("onkeydown", this.edt_NA_TRPL_C_onkeydown, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.btn_comname_onclick, this);
            this.div_search.edt_ACNO.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.div_list.grd_comncList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7210.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
