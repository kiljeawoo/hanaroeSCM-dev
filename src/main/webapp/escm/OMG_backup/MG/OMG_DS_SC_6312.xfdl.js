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
                this.set_name("OMG_DS_SC_5160");
                this.set_titletext("서비스차단관리");
                this._setFormPosition(0,0,800,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_block", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"BLOCK_SQNO\" type=\"string\" size=\"12\"/><Column id=\"BLOCK_TI\" type=\"string\" size=\"250\"/><Column id=\"BLOCK_ST_DTM\" type=\"STRING\" size=\"30\"/><Column id=\"BLOCK_ED_DTM\" type=\"string\" size=\"30\"/><Column id=\"BLOCK_CNTN\" type=\"string\" size=\"250\"/><Column id=\"BLOCK_PGM\" type=\"STRING\" size=\"20\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"16\"/><Column id=\"BLOCK_STATE\" type=\"STRING\" size=\"1\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_block_temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"BLOCK_SQNO\" type=\"string\" size=\"12\"/><Column id=\"BLOCK_TI\" type=\"string\" size=\"250\"/><Column id=\"BLOCK_ST_DTM\" type=\"STRING\" size=\"30\"/><Column id=\"BLOCK_ED_DTM\" type=\"string\" size=\"30\"/><Column id=\"BLOCK_CNTN\" type=\"string\" size=\"250\"/><Column id=\"BLOCK_PGM\" type=\"STRING\" size=\"20\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"16\"/><Column id=\"BLOCK_STATE\" type=\"STRING\" size=\"1\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "289", "39", "79", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_useYn", "absolute", "366", "39", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_useYn_innerdataset = new Dataset("cbo_useYn_innerdataset", this.div_search.cbo_useYn);
            cbo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(cbo_useYn_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("Static02", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bsnDsc", "absolute", "118", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("23");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "289", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("차단일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("dt_blockDtm", "absolute", "508", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj = new Static("Static03", "absolute", "15", "39", "79", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_blockState", "absolute", "118", "39", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_blockState_innerdataset = new Dataset("cbo_blockState_innerdataset", this.div_search.cbo_blockState);
            cbo_blockState_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">대기</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">적용중</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">만료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_blockState_innerdataset);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Radio("rdo_blockDtm", "absolute", "367", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_blockDtm_innerdataset = new Dataset("rdo_blockDtm_innerdataset", this.div_search.rdo_blockDtm);
            rdo_blockDtm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지정일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_blockDtm_innerdataset);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "259", "-2", "30", "67", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_block");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"127\"/><Column size=\"89\"/><Column size=\"83\"/><Column size=\"224\"/><Column size=\"90\"/><Column size=\"92\"/><Column size=\"55\"/><Column size=\"64\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"업무 구분\"/><Cell col=\"3\" text=\"프로그램\"/><Cell col=\"4\" text=\"차단 내용\"/><Cell col=\"5\" text=\"차단시작일시\"/><Cell col=\"6\" text=\"차단종료일시\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:BLOCK_TI\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:BSN_DSC\" autosizecol=\"none\"/><Cell col=\"3\" text=\"bind:BLOCK_PGM\"/><Cell col=\"4\" text=\"bind:BLOCK_CNTN\" autosizecol=\"none\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:BLOCK_ST_DTM\" mask=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" autosizecol=\"none\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:BLOCK_ED_DTM\" mask=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" autosizecol=\"none\"/><Cell col=\"7\" style=\"color:EXPR(BLOCK_STATE == '1' ? 'blue' : BLOCK_STATE == '2' ? 'red' : '');color2:EXPR(BLOCK_STATE == '1' ? 'blue' : BLOCK_STATE == '2' ? 'red' : '');\" text=\"expr:BLOCK_STATE == '0' ? '대기' : BLOCK_STATE == '1' ? '적용중' : '만료'\" autosizecol=\"none\"/><Cell col=\"8\" style=\"color:EXPR(UYN == 'Y' ? '' : 'red');color2:EXPR(UYN == 'Y' ? '' : 'red');\" text=\"expr:UYN == 'Y' ? '사용' : '사용안함'\" autosizecol=\"none\"/></Band></Format></Formats>");
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

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "168", null, this);
            obj.set_taborder("12");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "125", null, this);
            obj.set_taborder("14");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("true");
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
            		p.set_titletext("서비스차단관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","div_search.dt_blockDtm","value","ds_survey","APL_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6312.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6312.xfdl", function() {
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
        	this.div_search.cbo_blockState.set_index(0);
        	this.div_search.cbo_useYn.set_index(0);

        
            /*조회 호출*/
           this.btn_search.click();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	var sParams = "BSN_DSC="+this.gfn_nullToEmpty(this.div_search.edt_bsnDsc.value)
        				+ " BLOCK_DTM="+this.gfn_nullToEmpty(this.div_search.dt_blockDtm.value)
        				+ " DTM_TYPE="+this.gfn_nullToEmpty(this.div_search.rdo_blockDtm.value)
        				+ " BLOCK_STATE="+this.gfn_nullToEmpty(this.div_search.cbo_blockState.value)
        				+ " UYN="+this.gfn_nullToEmpty(this.div_search.cbo_useYn.value)
        				;

        	var sSvcID        = "blockList";
        	var sURL          ="svc::rest/mg/block/retrieveBlockServiceList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_block=ds_block";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*등록버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_block};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6312_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*수정버튼 이벤트*/
        this.btn_update_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for (var i = 0 ; i < this.ds_block.rowcount; i++) {
        		if (this.ds_block.getColumn(i, "CHK") =="1") {
        			checkCnt = checkCnt +1;
        			position = i;
        		}
        	}

        	this.ds_block_temp.clearData();
        	if (checkCnt > 1) {
        		alert("하나만 선택해주시기 바랍니다.");
        		return;
        	} else if(checkCnt == 0) {
        		alert("수정해야할 데이터를 선택해 주시기 바랍니다.");
        		return;
        	} else {
        		this.ds_block_temp.addRow();
        		this.ds_block_temp.copyRow(0,this.ds_block,position);
        		
        		var oArg = {paramMode:"U", dsArg:this.ds_block_temp};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6312_P01.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        /*삭제버튼 이벤트*/
        this.btn_delete_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수

        	this.ds_block_temp.clearData();
        	// 체크된 행들을 순차적으로 ds_param에 적재한다.
        	for (var i = 0 ; i < this.ds_block.rowcount; i++) {
        		if(this.ds_block.getColumn(i, "CHK") =="1"){
        		  checkCnt = checkCnt +1;
        		  this.ds_block_temp.insertRow(checkCnt-1);
        		  this.ds_block_temp.copyRow(checkCnt-1,this.ds_block,i);
        		}
        	}

        	if (checkCnt > 0) {
        		var cfm = this.confirm("삭제하시겠습니까?");
        		if (cfm) {
        			var sParams       = "";
        			var sSvcID        = "delete";
        			var sURL          = "svc::rest/mg/block/deleteLoginBlockService";
        			var sInDatasets   = "ds_block=ds_block_temp";
        			var sOutDatasets  = "";
        			var sArgument     = "";
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회

        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	} else {
        		alert("삭제할 데이터를 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
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
        	this.ds_block.addColumn("CHK", "string");

        	for (var i = 0 ; i < this.ds_block.rowcount; i++) {
        		this.ds_block.setColumn(i,"CHK",0);
        	}

        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "blockList") {
        			this.list_empty_check(this.ds_block.rowcount == 0);
        	 	} else if (svcID=="delete") {
        	 		if (ErrorCode == 1) {
        	 			this.gfn_getMessage("alert", "result.message.save.success");
        	 			this.btn_search.click();
        	 		}
        	 	} else {
        			this.list_empty_check(this.ds_block.rowcount == 0);
        	 	}
        	 }
        }

        this.list_empty_check = function(isEmpty) {
        	this.btn_delete.set_enable(!isEmpty);
        	this.btn_update.set_enable(!isEmpty);
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
        	var chk = this.ds_block.getColumn(e.row, "CHK");
        	if (chk == "0") {
        		this.ds_block.setColumn(e.row, "CHK", "1");
        	} else {
        		this.ds_block.setColumn(e.row, "CHK", "0");
        	}
        }

        this.div_search_rdo_blockDtm_onitemchanged = function(obj,e)
        {
        	if (obj.value == "2" && this.gfn_nullToEmpty(this.div_search.dt_blockDtm.value) == '') {
        		this.div_search.dt_blockDtm.set_value(this.gfn_today("yyyyMMdd"));
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.dt_blockDtm.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cbo_blockState.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.rdo_blockDtm.addEventHandler("onitemchanged", this.div_search_rdo_blockDtm_onitemchanged, this);
            this.div_search.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_list.grd_comncList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.grd_comncList.addEventHandler("oncellclick", this.div_list_grd_comncList_oncellclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6312.xfdl");
        this.loadPreloadList();
       
    };
}
)();
